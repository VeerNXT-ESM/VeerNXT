# Phase 2: Refinement & Management Backend

Now that the core ingestion is working, we need to add visual elements (thumbnails), filter out low-quality placeholder data, and provide a management interface for the content team.

## Proposed Changes

### 1. Thumbnail Extraction (DOCX Parser)
We will implement a `ThumbnailExtractor` utility that:
- Opens the DOCX file (as a ZIP).
- Scans `word/media/` for the first image file (usually the cover page logo or background).
- If no image is found, it will generate a text-based SVG thumbnail with the exam name and category.
- **Supabase Integration**: Upload these images to a Supabase Storage bucket and link them via the `thumbnail_url` column.

### 2. Quality Filtering (Length Parameter)
To eliminate documents that only contain placeholder text:
- **Parser Update**: `textbook_processor.py` will now calculate `char_count` and `word_count` for each document.
- **Schema Update**: Add `content_length` column to `resources` and `quizzes`.
- **Threshold**: Implement a configurable `MIN_LENGTH` (e.g., 500 characters). Documents below this will be flagged as "Stubs" or skipped during ingestion.

### 3. Content Management Backend (VeerNXT Admin)
A dedicated management interface for the content team:
- **Platform**: Next.js (or Vite) + TailwindCSS for a sleek, military-inspired admin dashboard.
- **Features**:
  - **Data Grid**: View all ingested resources/quizzes with filtering by state/exam.
  - **Metadata Editor**: Manually fix conducting bodies or websites.
  - **Monetization Toggle**: Simple UI to select which documents are "Freemium" vs "Premium".
  - **Content Review**: Ability to see the `body_html` in a preview window and delete placeholder files.

### 4. Advanced Monetization
- Update `resources` and `quizzes` schema to include `tier` (Free, Basic, Premium).
- Add `unlock_cost` in "Points" or "INR".

## Execution Steps

1. **Schema Update**: Add `content_length` and `tier` columns.
2. **Parser Refinement**: Update `textbook_processor.py` to count characters and extract images.
3. **Storage Setup**: Configure Supabase Storage for thumbnails.
4. **Admin MVP**: Build the first version of the management dashboard.

## User Review Required
> [!IMPORTANT]
> **Thumbnail Strategy**: Extracting images from DOCX is reliable for cover pages. However, if a document has no image, would you prefer a generic placeholder (colored card with text) or should we skip thumbnails for those?

> [!NOTE]
> **Placeholder Threshold**: What is the minimum number of words a document should have to be considered "valid"? (e.g., 100 words).
