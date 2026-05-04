# VeerNXT Document Engine Pipeline
# Run this script to process all documents and upload them to Supabase

Write-Host "Starting VeerNXT Document Automation Pipeline..." -ForegroundColor Cyan

# 1. Run Batch Processor
Write-Host "`n[STEP 1/2] Processing documents..." -ForegroundColor Yellow
python batch_processor.py

if ($LASTEXITCODE -ne 0) {
    Write-Host "Batch processing failed. Aborting." -ForegroundColor Red
    exit $LASTEXITCODE
}

# 2. Run Supabase Uploader
Write-Host "`n[STEP 2/2] Uploading to Supabase..." -ForegroundColor Yellow
python supabase_uploader.py

if ($LASTEXITCODE -ne 0) {
    Write-Host "Upload failed." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "`nPipeline completed successfully! 🚀" -ForegroundColor Green
