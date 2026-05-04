import psycopg2
import sys

# Connection string
CONN_STR = "postgresql://postgres:5Rw-uJ2Xkadc$4,@db.jtcyeufhvpieyngracpo.supabase.co:5432/postgres"

def apply_schema():
    print("Connecting to Supabase PostgreSQL...")
    try:
        conn = psycopg2.connect(CONN_STR)
        conn.autocommit = True
        cur = conn.cursor()
        
        print("Reading schema.sql...")
        with open("schema.sql", "r", encoding="utf-8") as f:
            sql = f.read()
            
        print("Applying schema...")
        cur.execute(sql)
        
        print("Schema applied successfully! [OK]")
        cur.close()
        conn.close()
        
    except Exception as e:
        print(f"Error applying schema: {e}")
        sys.exit(1)

if __name__ == "__main__":
    apply_schema()
