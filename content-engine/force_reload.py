import psycopg2
import sys

# Connection string
CONN_STR = "postgresql://postgres:5Rw-uJ2Xkadc$4,@db.jtcyeufhvpieyngracpo.supabase.co:5432/postgres"

def force_reload():
    print("Connecting to Supabase PostgreSQL...")
    try:
        conn = psycopg2.connect(CONN_STR)
        conn.autocommit = True
        cur = conn.cursor()
        
        print("Creating dummy table to force schema reload...")
        cur.execute("CREATE TABLE IF NOT EXISTS _schema_reload_trigger (id int);")
        cur.execute("DROP TABLE _schema_reload_trigger;")
        cur.execute("NOTIFY pgrst, 'reload schema';")
        
        print("Force reload successful! [OK]")
        cur.close()
        conn.close()
        
    except Exception as e:
        print(f"Error forcing reload: {e}")
        sys.exit(1)

if __name__ == "__main__":
    force_reload()
