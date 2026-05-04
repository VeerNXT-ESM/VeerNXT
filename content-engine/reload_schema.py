import psycopg2
import sys

# Connection string
CONN_STR = "postgresql://postgres:5Rw-uJ2Xkadc$4,@db.jtcyeufhvpieyngracpo.supabase.co:5432/postgres"

def reload_schema():
    print("Connecting to Supabase PostgreSQL...")
    try:
        conn = psycopg2.connect(CONN_STR)
        conn.autocommit = True
        cur = conn.cursor()
        
        print("Reloading PostgREST schema cache...")
        cur.execute("NOTIFY pgrst, 'reload schema';")
        
        print("Schema reload signal sent successfully! [OK]")
        cur.close()
        conn.close()
        
    except Exception as e:
        print(f"Error reloading schema: {e}")
        sys.exit(1)

if __name__ == "__main__":
    reload_schema()
