#!/usr/bin/env python3
"""
Enhanced DOCX quiz parser with Supabase-ready JSON output.

This parser:
1. Extracts structured quiz data from DOCX files
2. Formats it for optimal Supabase database ingestion
3. Validates and cleans data
4. Generates metadata for tracking and versioning
"""

import argparse
import json
import re
import sys
from pathlib import Path
from zipfile import ZipFile
from datetime import datetime
import hashlib


ANSWER_SECTION_MARKERS = [
    r'^answers?\b',
    r'^answer key\b',
    r'^solutions?\b',
    r'^correct answers?\b',
]

QUESTION_PATTERN = re.compile(r'^Q?\.?(\d+)\.?\s+(.*)$', re.IGNORECASE)
OPTION_PATTERN = re.compile(r'^([A-D])\s*[\.).]\s*(.*)$', re.IGNORECASE)
ANSWER_INLINE_PATTERN = re.compile(r'(\d+)\s*[\.)]?\s*\(?([A-D])\)?', re.IGNORECASE)


def extract_paragraphs_from_docx(path):
    """Extract text paragraphs from DOCX file."""
    try:
        from docx import Document
        doc = Document(path)
        paragraphs = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
        if paragraphs:
            return paragraphs
    except Exception:
        pass

    # Fallback raw XML extraction
    with ZipFile(path, 'r') as z:
        xml_bytes = z.read('word/document.xml')
    try:
        from xml.etree import ElementTree as ET
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        root = ET.fromstring(xml_bytes)
        paragraphs = []
        for p in root.findall('.//w:p', namespaces):
            texts = [t.text for t in p.findall('.//w:t', namespaces) if t.text]
            line = ''.join(texts).strip()
            if line:
                paragraphs.append(line)
        return paragraphs
    except Exception as exc:
        raise RuntimeError(f'Failed to extract paragraphs from DOCX: {exc}')


def split_answers_section(paragraphs):
    """Identify where the answer section begins in the document."""
    answer_start = None
    for idx, paragraph in enumerate(paragraphs):
        normalized = paragraph.strip().lower()
        if any(re.match(marker, normalized) for marker in ANSWER_SECTION_MARKERS):
            answer_start = idx
            break
    if answer_start is None:
        for idx, paragraph in enumerate(paragraphs):
            if ANSWER_INLINE_PATTERN.match(paragraph):
                answer_start = idx
                break
    if answer_start is None:
        return paragraphs, []
    return paragraphs[:answer_start], paragraphs[answer_start:]


def parse_questions(paragraphs):
    """Parse questions and options from paragraphs."""
    questions = []
    current = None
    for paragraph in paragraphs:
        trimmed = paragraph.strip()
        if not trimmed:
            continue

        q_match = QUESTION_PATTERN.match(trimmed)
        if q_match:
            if current:
                questions.append(current)
            try:
                q_num = int(q_match.group(1))
            except (IndexError, ValueError):
                q_num = len(questions) + 1
            
            q_text = q_match.group(2) if q_match.lastindex >= 2 else trimmed
            current = {
                'id': q_num,
                'question_text': q_text.strip(),
                'question_raw': trimmed,
                'options': [],
                'answer': None,
            }
            continue

        if current is None:
            continue

        opt_match = OPTION_PATTERN.match(trimmed)
        if opt_match:
            label = opt_match.group(1).upper()
            text = opt_match.group(2).strip()
            current['options'].append({'label': label, 'text': text})
            continue

        # Continuation of question or option text
        if current['options'] and not OPTION_PATTERN.match(trimmed):
            current['options'][-1]['text'] += ' ' + trimmed
        else:
            current['question_text'] += ' ' + trimmed

    if current:
        questions.append(current)
    return questions


def parse_answer_lines(paragraphs):
    """Extract answer key from answer section."""
    answers = {}
    for paragraph in paragraphs:
        trimmed = paragraph.strip()
        if not trimmed:
            continue

        for match in ANSWER_INLINE_PATTERN.finditer(trimmed):
            qnum = int(match.group(1))
            choice = match.group(2).upper()
            answers[qnum] = choice

    return answers


def build_quiz_data(paragraphs, source_path, test_name=None):
    """Build complete quiz data structure."""
    question_paragraphs, answer_paragraphs = split_answers_section(paragraphs)
    questions = parse_questions(question_paragraphs)
    answers = parse_answer_lines(answer_paragraphs)

    # Attach answers to questions
    for question in questions:
        qid = question['id']
        if qid in answers:
            question['answer'] = answers[qid]
        else:
            inline = re.search(r'\bAnswer\s*[:\-]\s*([A-D])\b', question['question_raw'], re.IGNORECASE)
            if inline:
                question['answer'] = inline.group(1).upper()

    # Generate metadata
    file_hash = hashlib.md5(str(source_path).encode()).hexdigest()[:8]
    
    return {
        'metadata': {
            'source_file': str(source_path),
            'test_name': test_name or source_path.stem,
            'generated_at': datetime.utcnow().isoformat() + 'Z',
            'file_hash': file_hash,
            'total_questions': len(questions),
            'questions_with_answers': sum(1 for q in questions if q['answer']),
        },
        'questions': questions,
        'answer_lookup': {str(k): v for k, v in answers.items()},
    }


def build_supabase_format(quiz_data):
    """
    Transform quiz data into Supabase-optimized format.
    
    Returns a list of records ready for bulk insertion into a quizzes table
    and another list for a questions table.
    """
    metadata = quiz_data['metadata']
    
    quiz_record = {
        'title': metadata['test_name'],
        'description': f"Quiz from {Path(metadata['source_file']).name}",
        'source_file': metadata['source_file'],
        'total_questions': metadata['total_questions'],
        'created_at': metadata['generated_at'],
        'file_hash': metadata['file_hash'],
    }
    
    question_records = []
    for q in quiz_data['questions']:
        question_record = {
            'question_number': q['id'],
            'question_text': q['question_text'],
            'options': json.dumps({opt['label']: opt['text'] for opt in q['options']}),
            'correct_answer': q['answer'],
            'options_raw': q['options'],
            'quiz_title': metadata['test_name'],
        }
        question_records.append(question_record)
    
    return quiz_record, question_records


def main():
    parser = argparse.ArgumentParser(description='Parse DOCX quiz into JSON format for learning engine.')
    parser.add_argument('docx_file', type=Path, help='Path to DOCX file')
    parser.add_argument('--output', '-o', type=Path, default=None, help='Output JSON file')
    parser.add_argument('--format', '-f', choices=['basic', 'supabase'], default='basic',
                        help='Output format')
    parser.add_argument('--test-name', '-n', default=None, help='Custom test name')
    args = parser.parse_args()

    if not args.docx_file.exists():
        print(f'File not found: {args.docx_file}', file=sys.stderr)
        sys.exit(1)

    paragraphs = extract_paragraphs_from_docx(args.docx_file)
    quiz = build_quiz_data(paragraphs, args.docx_file, args.test_name)
    
    if args.format == 'supabase':
        quiz_record, question_records = build_supabase_format(quiz)
        output_data = json.dumps({
            'quiz': quiz_record,
            'questions': question_records,
            'metadata': quiz['metadata'],
        }, indent=2, ensure_ascii=False)
    else:
        output_data = json.dumps(quiz, indent=2, ensure_ascii=False)

    if args.output:
        args.output.write_text(output_data, encoding='utf-8')
        print(f'Wrote quiz JSON to {args.output}')
        print(f'Total questions: {quiz["metadata"]["total_questions"]}')
        print(f'Questions with answers: {quiz["metadata"]["questions_with_answers"]}')
    else:
        print(output_data)


if __name__ == '__main__':
    main()
