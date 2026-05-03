# VeerNXT Profiling Engine Roadmap

## Overview
This document is the product requirements roadmap for the VeerNXT candidate profiling platform.
The system will onboard military candidates, score them against government exam opportunities, and later expose career resources.

## Goals
- Build a secure backend for scraping official government job boards and serving recommendations.
- Create an onboarding flow with login and candidate profile capture.
- Implement the existing profiling engine as the recommendation core.
- Provide a main site with resources and career guidance stored in a managed data backend.
- Enable future expansion with live vacancy tracking, reporting, and analytics.

## Recommended Technology Strategy

### Backend Hosting
- Use a managed Node.js host such as **Render** or **Railway**.
- Both platforms can run the profiling API and support scheduler/worker jobs for scraping.
- Render is a strong fit for:
  - persistent API deployment,
  - background cron jobs,
  - stable environment variables,
  - automatic deploys from Git.
- Railway is also valid, especially for simple project setup and integrated Postgres.

### Scraping / Vacancy Refresh
- Deploy the scraper as a backend service, not in the Flutter app.
- Run scraping as a scheduled job or worker process on the backend.
- Keep the scraper separate from the UI to avoid exposing scraping logic and to reduce mobile app complexity.
- Prefer a dedicated job scheduler on Render/Railway for recurring vacancy refresh every 4–6 hours.

### Authentication and Onboarding
- Add login as the first step of the candidate journey.
- Use a managed auth provider such as **Supabase Auth** to avoid building user sessions manually.
- Onboarding flow:
  1. Login / Register
  2. Candidate consent and profile capture
  3. Profile validation and recommendations
  4. Result dashboard with exam matches and notification status
- The login step should be treated as onboarding gate 1 and profile capture as onboarding gate 2.

### Data Storage
- Use **Supabase** as the main data backend for:
  - user accounts,
  - candidate profiles,
  - recommendations history,
  - resource content,
  - exam catalog metadata,
  - analytics and usage tracking.
- Supabase Storage is recommended for documents, PDF guides, and resource assets.
- Google Drive can be used as a secondary content repository for unstructured documents, but it is not recommended as the primary application database.
  - Google Drive is fine for shared reference files, admin uploads, or internal document management.
  - Do not rely on Google Drive for structured user/profile data or exam recommendation state.

### Supabase Resource Access Model
- Store each educational resource in Supabase Storage under a secure bucket such as `resources`.
- Maintain a Supabase Postgres table `resources` with metadata:
  - `id`, `title`, `description`, `category`, `subcategory`, `content_type`, `file_path`, `access_tier`, `is_reader_only`, `is_secure`, `tags`, `created_at`, `updated_at`.
- Use a separate `resource_access_policy` table or columns on `users` to represent tier entitlement.
- For secure government-certified guides and textbooks:
  - do not expose direct download URLs.
  - serve content through a backend proxy endpoint such as `GET /api/resource/:id/view`.
  - use short-lived signed access tokens or stream file bytes server-side.
  - render the file in a secure in-app reader component with download/save disabled.
- For question papers and quizzes:
  - store question paper metadata and interactive quiz definitions in Postgres rather than raw documents where possible.
  - offer a content viewer for past papers and a separate interactive quiz workflow for assessments.
- Protect all resource endpoints with Supabase Auth and row-level security rules.
- Use Supabase Storage policies to restrict access to authenticated users and the correct tier.

### Document Ingestion & Structured Resource Pipeline
- Convert all source `docx` and `pdf` resources into structured JSON before serving them in the app.
- Do not rely on the raw documents at runtime; keep them as archived source files only.
- Use a preprocessing pipeline to extract content and transform it into resource records, e.g.:
  - `guides` → structured chapters/topics/content nodes
  - `question_papers` → indexed questions, sections, year, solved status
  - `quizzes` → question sets, choices, answers, explanations, timing
- Recommended approach:
  1. Write an ingestion script in Node.js or Python.
  2. For `docx`, use a parser such as `mammoth`, `docx`, or `python-docx`.
  3. For `pdf`, use `pdf-parse`, `pdfkit`, `pdfplumber`, or `PyMuPDF`.
  4. Normalize headings, paragraphs, tables, and question formats into JSON objects.
  5. Save parsed output to a collection of JSON files or directly into Supabase Postgres.
- Use a common resource schema so each item can be queried uniformly:
  - `id`, `title`, `resource_type`, `category`, `subcategory`, `tier`, `source`, `tags`
  - `content` for guides, as an array of `{section, title, body}`
  - `questions` for quiz/paper items, as an array of `{question, options, answer, explanation, topic, difficulty}`
  - `metadata` for year, exam, marks, duration, etc.
- For question papers and quizzes:
  - parse question numbering and options precisely.
  - map answer keys and explanations into structured fields.
  - store question banks separately from actual app content so quizzes can be assembled dynamically.
  - maintain `question_paper` entries for archive display and `quiz` entries for interactive sessions.
- If the raw documents include images or diagrams, decide whether to:
  - extract them separately and reference them by URL, or
  - omit them from structured content and keep only text.
- Build a validation step in the pipeline that checks the extracted JSON for completeness and quality.
- Keep the pipeline idempotent so repeated conversions can be rerun after content updates.

### Example Structured Resource Model
```json
{
  "id": "guide-english-ssc-stenographer",
  "title": "SSC Stenographer English Guide",
  "type": "guide",
  "category": "English",
  "subcategory": "Language",
  "tier": "Standard",
  "content": [
    {"section": "Grammar", "title": "Tenses", "body": "..."},
    {"section": "Comprehension", "title": "Passage Practice", "body": "..."}
  ],
  "tags": ["SSC","English","Guidebook"]
}
```

```json
{
  "id": "pyq-scc-2024-english",
  "title": "SSC Stenographer 10 Years PYQ English",
  "type": "question_paper",
  "category": "Question Paper",
  "year": 2024,
  "questions": [
    {"question": "...", "options": ["A","B","C","D"], "answer": "B", "explanation": "...", "topic": "Vocabulary"}
  ],
  "tags": ["SSC","PYQ","English"]
}
```

### Why this matters
- Raw `docx`/`pdf` files are heavy and hard to search or render in-app.
- Structured JSON is fast to query, filter, and render in Flutter.
- It enables interactive quizzes, search, and progressive loading.
- It keeps document content separate from the actual app experience, which supports your secure reader strategy.

### Suggested Ingestion Strategy
- Create a dedicated repo or script folder for resource ingestion.
- Use a folder convention like `ingest/raw/`, `ingest/parsed/`, `ingest/schema/`.
- Generate a final `resources.json` or database seed from the parsed output.
- Use the backend to expose structured resources through APIs such as:
  - `GET /api/resources` — list resources
  - `GET /api/resource/:id` — fetch structured guide or question paper
  - `GET /api/quiz/:id` — fetch quiz definition

### Integration with Supabase
- Store the parsed JSON output in Supabase Postgres tables:
  - `resources` for guides and papers
  - `questions` for quiz question banks
  - `quiz_sessions` for user attempt records
- Keep raw documents in a secure archive bucket, but do not serve them directly to users.

### Next step for the team
- Audit the existing `docx` and `pdf` resources to identify patterns, headings, and question layouts.
- Build a small prototype ingestion script for one guide and one question paper.
- Review the parsed JSON and adjust the schema before converting the full library.

### Example folder flow
- `engine/public/Example Resources/SSC Stenographer Grade C&D/` → raw resources
- `ingest/raw/` → copied raw docs for parsing
- `ingest/parsed/` → JSON output
- `backend/data/resources/` → final structured resource catalog

### Note on heavy documents
- Only keep raw docs as source material.
- The deployed app should use parsed data, not raw document payloads.
- This reduces bundle size, improves performance, and simplifies security enforcement.

### Quiz / Paper parsing recommendation
- Treat each paper/question set as a first-class content type.
- Use the same parse methodology for all resources, but allow each resource type to add its own structured fields.
- Question bank objects should include `topic`, `difficulty`, `answer_explanation`, and `tags` to support adaptive practice.

### Supabase storage and app rendering
- Use Supabase Storage only for media assets and optional document snapshots.
- Serve parsed JSON through Supabase Postgres APIs or a backend proxy.
- Store heavy document assets only if absolutely needed for admin/back-office review.

### Gemini / agent impact
- Once content is structured, the Gemini agent can more easily reference topics, explain questions, and generate practice prompts.
- Structured JSON enables the agent to operate over named topics and question objects rather than raw doc text.

### Subscription Tiers and Backend Handling
Define access tiers and enforce them in the backend.
- `Free` tier:
  - login/register onboarding
  - access to basic profile and recommendation engine results
  - access to a small subset of guide excerpts and public resources
  - limited quiz access (sample quizzes only)
- `Standard` tier:
  - access to full guidebooks and more textbooks
  - access to most question papers and test series
  - interactive quizzes with score tracking
  - limited guidance counselor responses from the agent
- `Premium` tier:
  - full resource library access
  - all past papers, mock tests, and advanced study materials
  - unlimited quiz attempts
  - priority Gemini agent support for guided prep and counsellor responses
  - any certified government data or restricted material
- `Enterprise` or `Institutional` tier (optional):
  - role-based admin content management
  - bulk resource access for counsellors or training centers
  - advanced reporting and audit logs

Backend enforcement:
- attach `subscription_tier` to the user record in Supabase `profiles` or `users`.
- mark each resource with an `access_tier` level.
- check `user.subscription_tier >= resource.access_tier` on every resource request.
- implement API middleware or database functions for tier validation.
- map tier names to numeric levels if easier, e.g. `Free=0`, `Standard=1`, `Premium=2`, `Enterprise=3`.
- add `quiz_attempts`, `resource_views`, and `agent_sessions` tables for usage tracking.

### Secure Reader and Privacy Safeguards
- Host guides and certified documents in Supabase Storage but do not expose them as raw downloadable files.
- Use a secure viewer endpoint that:
  - checks auth and tier eligibility,
  - logs access events,
  - sets browser/app headers to disable caching and downloading where possible,
  - streams PDF or document content into the app reader.
- For Flutter, use an in-app document viewer or custom canvas renderer instead of opening external file downloads.
- Disable external share/export controls in the reader UI.
- Tag government-certified resources as `is_secure=true` and require stronger checks.
- If necessary, watermark viewer output or overlay a confidentiality notice.

### Question Papers and Interactive Quizzes
- Past question papers can be stored as secure documents and indexed in the resource library.
- Quizzes should be implemented as structured interactive content:
  - store questions, options, answers, and explanations in Postgres.
  - support timed sessions, score calculation, and attempt history.
  - allow tiered access to more quiz sets and advanced questions.
- Provide backend endpoints such as:
  - `GET /api/quizzes` — list available quizzes by tier/category
  - `GET /api/quiz/:id` — fetch quiz detail and questions
  - `POST /api/quiz/:id/submit` — submit answers and receive scoring feedback
  - `GET /api/quiz/:id/history` — view past attempt results
- For certified question papers, display them in a secure viewer and optionally index their topics for search.

### Gemini Agent Integration
- Add a backend service or API layer for the Gemini agent.
- Use the agent for two roles:
  - `Quizmaster`: generate practice questions, administer interactive sessions, explain answers.
  - `Guidance counsellor`: recommend study paths, explain career matches, and answer candidate queries.
- The backend should keep agent context limited and secure:
  - pass only the user profile and selected exam/topic context to the agent.
  - do not expose raw government-certified documents to the agent unless necessary.
- Example flow:
  1. User selects a quiz or resource topic.
  2. Flutter calls `POST /api/agent/session` with profile context and intent.
  3. Backend calls Gemini and returns structured guidance or quiz prompts.
  4. User interacts with the agent; session data is logged in `agent_sessions`.
- Treat the Gemini agent as a paid feature for higher tiers, with limits on free sessions.

## Recommended Updates to the PRD
- Add the Supabase resource access model and tier enforcement as a dedicated architecture section.
- Model secure textbooks and guides as reader-only content served through backend proxy APIs.
- Model question papers and quizzes as mixed documents + interactive flows.
- Include Gemini agent support as an advanced feature for guidance and practice.


### System Components
- **Flutter frontend app**
  - login screen
  - profile questionnaire
  - recommendation results
  - resource library
- **Node.js backend API**
  - profile validation
  - eligibility filtering and scoring
  - exam recommendation engine
  - vacancy data API
- **Scraper worker / scheduler**
  - fetch vacancy notifications from government websites
  - normalize vacancy data
  - cache or persist results
- **Supabase backend**
  - auth
  - Postgres database
  - storage for resources

### Data Flow
1. User registers / logs in.
2. User submits profile data.
3. Backend validates profile and runs the recommendation engine.
4. Engine filters exams and ranks results.
5. Backend returns top recommendations and optional live vacancy data.
6. Resources are served from Supabase content storage.

### Profiling Engine Flow
1. Receive the candidate profile payload from Flutter.
2. Validate it against the engine schema.
   - required fields include identity, service record, academics, physicals, preferences, and consent.
3. Load the exam master catalog from `data/exam_master.json`.
4. For each exam, apply hard eligibility gates:
   - minimum qualification
   - domicile requirement for state/UT exams
   - physical/medical eligibility for uniformed roles
5. Score only eligible exams with weighted signals:
   - ex-servicemen quota bonus
   - priority career track bonus
   - career preference bucket alignment
   - military trade / skill match
   - qualification exact/overfit
   - home state domicile bonus
   - reservation category bonus
   - character on discharge bonus
   - NCC and sports achievements
   - math and English fit
   - physical fitness bonus for relevant exams
   - full four-year service bonus
6. Sort eligible exams by total score.
7. Diversify the top recommendations to cap any single career track.
8. Optionally attach live vacancy notifications from the scraper service.
9. Return a recommendation payload with:
   - profile summary,
   - total eligible/rejected counts,
   - ranked exam recommendations,
   - breakdown of score components,
   - eligibility flags and live vacancies.

## MVP Scope

### Phase 1: Core Data + Onboarding
- Backend service on Render or Railway
- Supabase project for auth + database
- Flutter login/register screen
- Candidate profile form matching existing schema
- Recommendation service using Node engine logic
- Basic exam results screen
- Save candidate profile and result snapshot to Supabase

### Phase 2: Live Vacancy + Content
- Implement scraper scheduler on backend
- Persist vacancy updates in Supabase or backend cache
- Add resource library on the main site
- Add resource upload/storage workflow in Supabase
- Add candidate history dashboard

### Phase 3: Polish and Growth
- Add role-based admin access for content management
- Add notification alerting for new vacancies
- Add analytics and counsellor notes
- Add multi-language support and exam category filters

## What to Host Where

### Backend / Scraper
- Host `engine/src/server.js` and scraping worker on Render/Railway.
- Use environment variables for secure keys and endpoints.
- Keep scraping on the server side; avoid mobile scraping.

### Database / Storage
- Store structured application data in Supabase Postgres.
- Store static resources and documents in Supabase Storage.
- Store exam catalog copy in Supabase or a backend JSON file synced to the DB.

### Google Drive
- Suitable only for non-critical shared documents or manual resource imports.
- Not ideal as the primary application datastore.
- Use if you need an easy way for collaborators to drop files, but sync into Supabase for app delivery.

## Recommended Workflow
1. Set up Supabase project with Auth, Postgres, and Storage.
2. Deploy Node backend to Render/Railway.
3. Implement login + profile form in Flutter.
4. Connect Flutter to backend API and Supabase Auth.
5. Build recommendation engine endpoints and integrate them.
6. Add scraper scheduling and vacancy persistence.
7. Build resource management and content delivery.

## Key Decisions
- Use **Render** or **Railway** for backend hosting.
- Use **Supabase** as the primary app backend and auth provider.
- Use **Google Drive** only for supplementary document storage, not core data.
- Build onboarding as login → profile → recommendations.
- Move resources into Supabase for reliability and queryability.

## Deliverables
- `POST /api/login` and auth flow
- `POST /api/profile` and validation
- `POST /api/recommend` recommendation endpoint
- `GET /api/resources` resource library endpoint
- Supabase tables: users, profiles, recommendations, resources
- Scraper scheduler for vacancy refresh
- Flutter screens: login, onboarding, recommendations, resources

## Risks and Recommendations
- Government site scraping can break often; keep scrapers maintainable and isolated.
- Avoid persisting unstructured app data on Google Drive.
- If you need fast iteration, start with Supabase and a single backend host.
- Keep the scraper independent so the app remains stable even if one source fails.

## Next Steps
1. Confirm hosting choice: Render or Railway.
2. Provision Supabase and define table schema.
3. Implement auth and onboarding in Flutter.
4. Wire the Node recommendation engine to the backend.
5. Add resource storage and display.

---

This roadmap is intended to serve as the PRD foundation for the first 3 development phases.
It prioritizes stable backend scraping, secure login, and a clean onboarding path into the profiling engine.