import psycopg2
import sys

# Connection string
CONN_STR = "postgresql://postgres:5Rw-uJ2Xkadc$4,@db.jtcyeufhvpieyngracpo.supabase.co:5432/postgres"

def check_columns():
    print("Connecting to Supabase PostgreSQL...")
    try:
        conn = psycopg2.connect(CONN_STR)
        cur = conn.cursor()
        
        for table in ['resources', 'quizzes']:
            print(f"\nColumns for table: {table}")
            cur.execute(f"SELECT column_name FROM information_schema.columns WHERE table_name = '{table}' AND table_schema = 'public';")
            columns = cur.fetchall()
            for col in columns:
                print(f" - {col[0]}")
        
        cur.close()
        conn.close()
        
    except Exception as e:
        print(f"Error checking columns: {e}")
        sys.exit(1)

if __name__ == "__main__":
    check_columns()
