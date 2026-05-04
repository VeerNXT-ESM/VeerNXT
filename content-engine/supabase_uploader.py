#!/usr/bin/env python3
"""
Supabase Uploader for VeerNXT
Uploads resources, quizzes, and questions to the Supabase database.
"""

import json
import httpx
import os
from pathlib import Path

# New Credentials provided by the user
SUPABASE_URL = "https://jtcyeufhvpieyngracpo.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0Y3lldWZodnBpZXluZ3JhY3BvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Njk2Mjk1NiwiZXhwIjoyMDkyNTM4OTU2fQ.yoV9_lKyHM5o-69k5HcOppfqIwUhNSMbtA_j2eQzL78"

class SupabaseUploader:
    def __init__(self):
        self.headers = {
            "apikey": SUPABASE_KEY,
            "Authorization": f"Bearer {SUPABASE_KEY}",
            "Content-Type": "application/json",
            "Prefer": "return=representation"
        }

    def upload_resource(self, resource):
        """Upload a textbook/guide."""
        url = f"{SUPABASE_URL}/rest/v1/resources"
        try:
            # Check if exists by hash
            check_url = f"{url}?file_hash=eq.{resource['file_hash']}"
            resp = httpx.get(check_url, headers=self.headers)
            if resp.status_code == 200 and resp.json():
                print(f"  - Resource '{resource['title']}' already exists. Skipping.")
                return
            
            resp = httpx.post(url, headers=self.headers, json=resource)
            if resp.status_code in [201, 200]:
                print(f"  [OK] Uploaded Resource: {resource['title']}")
            else:
                print(f"  [ERR] Error uploading resource {resource['title']}: {resp.text}")
        except Exception as e:
            print(f"  [ERR] Exception uploading {resource['title']}: {e}")

    def upload_quiz(self, quiz_bundle):
        """Upload a quiz and its questions."""
        quiz_url = f"{SUPABASE_URL}/rest/v1/quizzes"
        questions_url = f"{SUPABASE_URL}/rest/v1/questions"
        
        quiz_record = quiz_bundle["quiz"]
        questions = quiz_bundle["questions"]
        
        try:
            # 1. Upload Quiz record and get ID
            resp = httpx.post(quiz_url, headers=self.headers, json=quiz_record)
            if resp.status_code not in [200, 201]:
                print(f"  ✗ Error uploading quiz {quiz_record['title']}: {resp.text}")
                return
            
            quiz_id = resp.json()[0]["id"]
            print(f"  [OK] Created Quiz: {quiz_record['title']} (ID: {quiz_id})")
            
            # 2. Upload Questions in batches
            for q in questions:
                q["quiz_id"] = quiz_id
                # Remove 'source' and 'id' as they don't match our schema
                if 'id' in q: del q['id']
                if 'source' in q: del q['source']
            
            batch_size = 50
            for i in range(0, len(questions), batch_size):
                batch = questions[i:i + batch_size]
                resp = httpx.post(questions_url, headers=self.headers, json=batch)
                if resp.status_code in [200, 201]:
                    print(f"    - Uploaded questions {i+1} to {min(i+batch_size, len(questions))}")
                else:
                    print(f"    [ERR] Error uploading question batch: {resp.text}")
                    
        except Exception as e:
            print(f"  [ERR] Exception uploading quiz {quiz_record['title']}: {e}")

def main():
    manifest_path = Path("master_payload.json")
    if not manifest_path.exists():
        print("Master payload not found. Run batch_processor.py first.")
        return
        
    with open(manifest_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    uploader = SupabaseUploader()
    
    print("\n=== STARTING SUPABASE INGESTION ===\n")
    
    print("Processing Resources...")
    for res in data.get("resources", []):
        uploader.upload_resource(res)
        
    print("\nProcessing Quizzes...")
    for quiz in data.get("quizzes", []):
        uploader.upload_quiz(quiz)
        
    print("\n=== INGESTION COMPLETE ===")

if __name__ == "__main__":
    main()
