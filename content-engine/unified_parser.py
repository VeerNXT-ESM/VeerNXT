#!/usr/bin/env python3
"""
Unified Quiz Parser for VeerNXT
Supports DOCX (Test Series) and PDF (PYQs) with adaptive option detection.
"""

import os
import re
import json
import hashlib
from pathlib import Path
import fitz  # PyMuPDF
from docx import Document

class UnifiedParser:
    def __init__(self):
        # Patterns for questions
        self.QUESTION_PATTERN = re.compile(r'Q\.?\s*(\d+)\.?\s+(.*?)(?=\n\s*(?:Ans|Q\.?|[A-D]\)|[1-4]\.))', re.DOTALL | re.IGNORECASE)
        
        # Pattern for alpha options: A) Option text
        self.ALPHA_OPTION_PATTERN = re.compile(r'([A-D])\)\s*(.*?)(?=\n\s*[A-D]\)|$)', re.DOTALL)
        
        # Pattern for numeric options: 1. Option text
        self.NUMERIC_OPTION_PATTERN = re.compile(r'([1-4])\.\s*(.*?)(?=\n\s*[1-4]\.|$)', re.DOTALL)
        
        # Pattern for inline answer markers (common in PDFs)
        self.ANS_MARKER_PATTERN = re.compile(r'Ans\s*[:\.]?\s*([1-4A-D])', re.IGNORECASE)

    def extract_text_from_pdf(self, pdf_path):
        """Uses PyMuPDF for high-quality text extraction."""
        text = ""
        try:
            with fitz.open(pdf_path) as doc:
                for page in doc:
                    text += page.get_text("text") + "\n"
            return text
        except Exception as e:
            print(f"Error reading PDF {pdf_path}: {e}")
            return ""

    def extract_text_from_docx(self, docx_path):
        """Standard DOCX text extraction."""
        try:
            doc = Document(docx_path)
            return "\n".join([p.text for p in doc.paragraphs])
        except Exception as e:
            print(f"Error reading DOCX {docx_path}: {e}")
            return ""

    def parse_content(self, text, source_name):
        """Generic parser for both document types."""
        questions = []
        
        # Split into potential question blocks
        # We look for Q.N markers
        blocks = re.split(r'(?=Q\.?\s*\d+)', text)
        
        for block in blocks:
            if not block.strip():
                continue
                
            # 1. Extract Question Number and Text
            q_match = self.QUESTION_PATTERN.search(block)
            if not q_match:
                continue
            
            q_num = int(q_match.group(1))
            q_text = q_match.group(2).strip()
            
            # 2. Extract Options
            options = {}
            correct_answer = None
            
            # Try Alpha Options first (A-D)
            alpha_matches = self.ALPHA_OPTION_PATTERN.findall(block)
            if len(alpha_matches) >= 2:
                for label, opt_text in alpha_matches:
                    options[label.upper()] = opt_text.strip()
            else:
                # Try Numeric Options (1-4)
                num_matches = self.NUMERIC_OPTION_PATTERN.findall(block)
                if len(num_matches) >= 2:
                    for label, opt_text in num_matches:
                        options[label] = opt_text.strip()
            
            # 3. Detect Correct Answer
            # Case A: Inline "Ans" marker (PDF style)
            ans_match = self.ANS_MARKER_PATTERN.search(block)
            if ans_match:
                correct_answer = ans_match.group(1).upper()
            
            # Case B: Inline "Answer: A" (DOCX style)
            if not correct_answer:
                inline_ans = re.search(r'Answer\s*[:\-]\s*([A-D1-4])', block, re.IGNORECASE)
                if inline_ans:
                    correct_answer = inline_ans.group(1).upper()

            if q_text and options:
                questions.append({
                    "question_number": q_num,
                    "question_text": q_text,
                    "options": options,
                    "correct_answer": correct_answer,
                    "source": source_name
                })
        
        return questions

    def process_file(self, file_path, category="PYQ", subject="General", exam_name=None, conducting_body=None, website_url=None):
        """Main entry point for a single quiz file."""
        path = Path(file_path)
        print(f"Parsing Quiz: {path.name}")
        
        if path.suffix.lower() == ".pdf":
            text = self.extract_text_from_pdf(path)
        else:
            text = self.extract_text_from_docx(path)
            
        questions = self.parse_content(text, path.name)
        
        if not questions:
            return None
            
        file_hash = hashlib.md5(path.name.encode()).hexdigest()[:8]
        
        quiz_record = {
            "title": path.stem,
            "exam_name": exam_name,
            "subject": subject,
            "category": category,
            "conducting_body": conducting_body,
            "website_url": website_url,
            "source_file": str(path),
            "total_questions": len(questions),
            "file_hash": file_hash,
            "is_freemium": False, # Quizzes are usually locked
            "is_locked": True
        }
        
        return {
            "quiz": quiz_record,
            "questions": questions
        }

if __name__ == "__main__":
    # Test on a PDF if needed
    pass
