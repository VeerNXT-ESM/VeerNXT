#!/usr/bin/env python3
"""
Textbook Processor for VeerNXT
Converts DOCX textbooks/guides into structured HTML for a Kindle-style reader.
"""

import os
import json
import hashlib
from pathlib import Path
from docx import Document
from datetime import datetime

class TextbookProcessor:
    def __init__(self, output_dir="output"):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)

    def docx_to_html(self, docx_path):
        """Converts DOCX to structured HTML."""
        try:
            doc = Document(docx_path)
            html_parts = []
            
            for para in doc.paragraphs:
                text = para.text.strip()
                if not text:
                    continue
                
                # Simple style mapping
                style = para.style.name.lower()
                if 'heading 1' in style:
                    html_parts.append(f"<h1>{text}</h1>")
                elif 'heading 2' in style:
                    html_parts.append(f"<h2>{text}</h2>")
                elif 'heading 3' in style:
                    html_parts.append(f"<h3>{text}</h3>")
                else:
                    # Basic paragraph with inline formatting
                    # Note: A full implementation would iterate over para.runs for bold/italic
                    html_parts.append(f"<p>{text}</p>")
            
            return "\n".join(html_parts)
        except Exception as e:
            print(f"Error processing {docx_path}: {e}")
            return ""

    def process_file(self, file_path, category="Precis", subject="General", exam_name=None, conducting_body=None, website_url=None):
        """Process a single textbook file and return a Supabase-ready record."""
        file_path = Path(file_path)
        print(f"Processing Textbook: {file_path.name}")
        
        html_content = self.docx_to_html(file_path)
        if not html_content:
            return None
            
        file_hash = hashlib.md5(file_path.name.encode()).hexdigest()[:8]
        
        # Determine freemium status (Folder 1 is always free)
        is_freemium = category.lower() == "intro"
        
        record = {
            "title": file_path.stem,
            "exam_name": exam_name,
            "subject": subject,
            "category": category,
            "conducting_body": conducting_body,
            "website_url": website_url,
            "body_html": html_content,
            "is_freemium": is_freemium,
            "is_locked": not is_freemium,
            "source_file": str(file_path),
            "file_hash": file_hash,
            "updated_at": datetime.now().isoformat()
        }
        
        return record

def main():
    processor = TextbookProcessor()
    # Test on a small file if possible, or just define the logic
    # The actual batch run will be handled by batch_processor.py
    pass

if __name__ == "__main__":
    main()
