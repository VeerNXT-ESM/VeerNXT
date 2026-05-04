import psycopg2
import sys

# Connection string
CONN_STR = "postgresql://postgres:5Rw-uJ2Xkadc$4,@db.jtcyeufhvpieyngracpo.supabase.co:5432/postgres"

def run_migration():
    print("Connecting to Supabase PostgreSQL...")
    try:
        conn = psycopg2.connect(CONN_STR)
        conn.autocommit = True
        cur = conn.cursor()
        
        print("Adding missing columns to resources table...")
        cur.execute("ALTER TABLE resources ADD COLUMN IF NOT EXISTS exam_name VARCHAR;")
        cur.execute("ALTER TABLE resources ADD COLUMN IF NOT EXISTS conducting_body VARCHAR;")
        cur.execute("ALTER TABLE resources ADD COLUMN IF NOT EXISTS website_url VARCHAR;")
        
        print("Adding missing columns to quizzes table...")
        cur.execute("ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS exam_name VARCHAR;")
        cur.execute("ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS conducting_body VARCHAR;")
        cur.execute("ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS website_url VARCHAR;")
        
        print("Migration completed successfully! [OK]")
        cur.close()
        conn.close()
        
    except Exception as e:
        print(f"Error running migration: {e}")
        sys.exit(1)

if __name__ == "__main__":
    run_migration()
