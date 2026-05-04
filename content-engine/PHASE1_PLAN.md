# Document Parsing and Supabase Ingestion Plan

We need to process the 60% of documents currently available in the `VeerNXT` directory and upload them to Supabase. The current scripts are designed for a single exam folder; we will enhance them to crawl the entire directory structure.

## Proposed Changes

### [DocumentEngine](file:///k:/H%20DRIVE/Quantum%20Climb/APPS/VeerNXT/DocumentEngine)

#### [NEW] [master_exam_registry.json](file:///k:/H%20DRIVE/Quantum%20Climb/APPS/VeerNXT/DocumentEngine/master_exam_registry.json)
- A generated mapping file derived from the user-provided "central exams list", "state list", and "UT Exams" documents.
- Used by the batch processor to resolve metadata (Conducting Body, Website) based on folder names.

#### [MODIFY] [schema.sql](file:///k:/H%20DRIVE/Quantum%20Climb/APPS/VeerNXT/DocumentEngine/schema.sql)
- Add `exam_name`, `conducting_body`, and `website_url` columns to `resources` and `quizzes` tables.
- This will allow the web app to display source info and filter content by specific exams.

#### [MODIFY] [batch_processor.py](file:///k:/H%20DRIVE/Quantum%20Climb/APPS/VeerNXT/DocumentEngine/batch_processor.py)
- Implement a recursive directory walker.
- Load `master_exam_registry.json` for metadata lookup.
- Automatically detect exam folders (directories containing `1.INTRO`).
- Extract `exam_name` from the folder name and resolve metadata from the registry.
- Pass the resolved metadata to the processing functions.
- Update `BASE_DIR` to point to the root `VeerNXT` folder.

#### [MODIFY] [textbook_processor.py](file:///k:/H%20DRIVE/Quantum%20Climb/APPS/VeerNXT/DocumentEngine/textbook_processor.py)
- Update `process_file` to accept and store `exam_name`.

#### [MODIFY] [unified_parser.py](file:///k:/H%20DRIVE/Quantum%20Climb/APPS/VeerNXT/DocumentEngine/unified_parser.py)
- Update `process_file` to accept and store `exam_name`.

#### [MODIFY] [supabase_uploader.py](file:///k:/H%20DRIVE/Quantum%20Climb/APPS/VeerNXT/DocumentEngine/supabase_uploader.py)
- Ensure it handles the new `exam_name` field.

## Execution Steps

1. **Database Migration**: Run the updated `schema.sql` via `apply_db_schema.py` or directly in Supabase to add the `exam_name` column.
2. **Batch Processing**: Run `python batch_processor.py` to generate `master_payload.json`. This will process all files in the `VeerNXT` tree.
3. **Supabase Ingestion**: Run `python supabase_uploader.py` to push the data to the live database.

## Verification Plan

### Automated Verification
- Check `master_payload.json` to ensure it contains entries from multiple exams (SSC, Banking, etc.).
- Run a subset test if necessary to verify parsing accuracy for new categories.

### Manual Verification
- Verify records in Supabase dashboard to ensure `exam_name` is correctly populated.
- Check the `body_html` in `resources` to ensure the Kindle-style formatting is preserved.
