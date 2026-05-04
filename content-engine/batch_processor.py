#!/usr/bin/env python3
"""
VeerNXT Master Batch Processor (Recursive Edition)
Crawl all exam folders and ingest documents using metadata from master_exam_registry.json.
"""

import os
import json
import re
from pathlib import Path
from textbook_processor import TextbookProcessor
from unified_parser import UnifiedParser

class MasterProcessor:
    def __init__(self, root_path, registry_path="master_exam_registry.json"):
        self.root_path = Path(root_path)
        self.text_processor = TextbookProcessor()
        self.quiz_parser = UnifiedParser()
        
        # Load registry
        self.registry = {}
        if Path(registry_path).exists():
            with open(registry_path, "r", encoding="utf-8") as f:
                self.registry = json.load(f)
        else:
            print(f"Warning: Registry {registry_path} not found.")

        # Output containers
        self.resources = []
        self.quizzes = []

    def clean_name(self, name):
        """Clean folder name to match registry entries."""
        # Remove leading numbers and dots (e.g., '01.SSC' -> 'SSC', '7.SSC Stenographer' -> 'SSC Stenographer')
        name = re.sub(r'^\d+\.', '', name)
        return name.strip()

    def find_metadata(self, folder_name):
        """Try to find metadata for a folder name in the registry."""
        cleaned = self.clean_name(folder_name)
        
        # Exact match
        if cleaned in self.registry:
            return cleaned, self.registry[cleaned]
            
        # Try matching against keys (case insensitive and partial)
        for key, meta in self.registry.items():
            if cleaned.lower() == key.lower():
                return key, meta
            if cleaned.lower() in key.lower() or key.lower() in cleaned.lower():
                return key, meta
                
        return cleaned, {"conducting_body": "Various", "website": ""}

    def process_exam_folder(self, exam_path):
        """Process a single exam folder (one that contains 1.INTRO, 2.GUIDE BOOK, etc.)"""
        folder_name = exam_path.name
        exam_display_name, meta = self.find_metadata(folder_name)
        
        conducting_body = meta.get("conducting_body", "Various")
        website_url = meta.get("website", "")
        
        print(f"\n>>> PROCESSING EXAM: {exam_display_name}")
        print(f"    Body: {conducting_body} | Web: {website_url}")

        # 1. Process INTRO
        intro_path = exam_path / "1.INTRO"
        if intro_path.exists():
            for f in intro_path.glob("*.docx"):
                rec = self.text_processor.process_file(f, category="Intro", exam_name=exam_display_name, conducting_body=conducting_body, website_url=website_url)
                if rec: self.resources.append(rec)

        # 2. Process GUIDE BOOK
        guide_path = exam_path / "2.GUIDE BOOK"
        if guide_path.exists():
            for subject_dir in guide_path.iterdir():
                if subject_dir.is_dir():
                    for f in subject_dir.glob("*.docx"):
                        rec = self.text_processor.process_file(f, category="Guide", subject=subject_dir.name, exam_name=exam_display_name, conducting_body=conducting_body, website_url=website_url)
                        if rec: self.resources.append(rec)

        # 3. Process PRECIS
        precis_path = exam_path / "3. PRECIS"
        if precis_path.exists():
            for f in precis_path.glob("*.docx"):
                rec = self.text_processor.process_file(f, category="Precis", exam_name=exam_display_name, conducting_body=conducting_body, website_url=website_url)
                if rec: self.resources.append(rec)

        # 4. Process PYQs
        pyq_path = exam_path / "4. 10 YEARS PYQ"
        if pyq_path.exists():
            for f in pyq_path.glob("*.pdf"):
                res = self.quiz_parser.process_file(f, category="PYQ", exam_name=exam_display_name, conducting_body=conducting_body, website_url=website_url)
                if res: self.quizzes.append(res)

        # 5. Process TEST SERIES
        test_path = exam_path / "5. TEST SERIES-10"
        if test_path.exists():
            for f in test_path.glob("*.docx"):
                res = self.quiz_parser.process_file(f, category="Mock Test", exam_name=exam_display_name, conducting_body=conducting_body, website_url=website_url)
                if res: self.quizzes.append(res)

    def crawl_and_process(self):
        """Walk through the root directory and find all exam folders."""
        print(f"=== VEERNXT BATCH PROCESSOR: CRAWLING {self.root_path} ===\n")
        
        # We look for any directory that has a '1.INTRO' subdirectory
        for path in self.root_path.rglob("1.INTRO"):
            exam_folder = path.parent
            if exam_folder.is_dir():
                self.process_exam_folder(exam_folder)

        self.save_manifest()

    def save_manifest(self):
        manifest = {
            "resources": self.resources,
            "quizzes": self.quizzes
        }
        output_file = Path("master_payload.json")
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(manifest, f, indent=2, ensure_ascii=False)
        
        print(f"\n=== BATCH PROCESSING COMPLETE ===")
        print(f"Total Resources: {len(self.resources)}")
        print(f"Total Quizzes: {len(self.quizzes)}")
        print(f"Manifest saved to: {output_file}")

if __name__ == "__main__":
    # Points to the root VeerNXT folder containing Categories (01.SSC, etc.)
    ROOT_DIR = Path(__file__).parent / "Example Resources" / "VeerNXT"
    processor = MasterProcessor(ROOT_DIR)
    processor.crawl_and_process()