-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Resources Table (Textbooks, Guides, Intros)
-- Designed for the Kindle-style reader
CREATE TABLE IF NOT EXISTS resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR NOT NULL,
  exam_name VARCHAR, -- e.g., 'SSC Stenographer Grade C&D'
  subject VARCHAR, -- e.g., 'English', 'GK'
  category VARCHAR, -- e.g., 'Intro', 'Guide', 'Precis'
  conducting_body VARCHAR, -- e.g., 'Staff Selection Commission'
  website_url VARCHAR,
  body_html TEXT, -- Structured content for the reader
  thumbnail_url VARCHAR,
  is_freemium BOOLEAN DEFAULT false,
  is_locked BOOLEAN DEFAULT true,
  unlock_cost INTEGER DEFAULT 0,
  source_file VARCHAR,
  file_hash VARCHAR,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Quizzes Table (Question Sets)
CREATE TABLE IF NOT EXISTS quizzes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR NOT NULL,
  exam_name VARCHAR,
  description TEXT,
  subject VARCHAR,
  category VARCHAR, -- e.g., 'PYQ', 'Mock Test'
  conducting_body VARCHAR,
  website_url VARCHAR,
  source_file VARCHAR,
  total_questions INTEGER,
  is_freemium BOOLEAN DEFAULT false,
  is_locked BOOLEAN DEFAULT true,
  unlock_cost INTEGER DEFAULT 0,
  file_hash VARCHAR,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Questions Table
CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  question_number INTEGER,
  question_text TEXT NOT NULL,
  options JSONB, -- { "A": "...", "B": "..." } or { "1": "...", "2": "..." }
  correct_answer VARCHAR, -- 'A', 'B', '1', '2', etc.
  explanation TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_resources_subject ON resources(subject);
CREATE INDEX IF NOT EXISTS idx_quizzes_subject ON quizzes(subject);
CREATE INDEX IF NOT EXISTS idx_questions_quiz_id ON questions(quiz_id);

-- RLS Policies (Basic - can be refined later)
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Allow public read access (assuming the app needs it)
-- Drop existing policies first to avoid "already exists" errors
DROP POLICY IF EXISTS "Public Read Access" ON resources;
DROP POLICY IF EXISTS "Public Read Access" ON quizzes;
DROP POLICY IF EXISTS "Public Read Access" ON questions;

CREATE POLICY "Public Read Access" ON resources FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON quizzes FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON questions FOR SELECT USING (true);
