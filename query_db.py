import httpx
import json

SUPABASE_URL = "https://jtcyeufhvpieyngracpo.supabase.co"
SUPABASE_KEY = "sb_publishable_PlJvy3mq1l2Y2vsWnzTeIw_9rgOamQB"

headers = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json"
}

print("--- RESOURCES ---")
res = httpx.get(f"{SUPABASE_URL}/rest/v1/resources?select=id,title,exam_name,subject,category&limit=5", headers=headers)
print(json.dumps(res.json(), indent=2))

print("\n--- EXAMS ---")
exams = httpx.get(f"{SUPABASE_URL}/rest/v1/exams?select=*", headers=headers)
print(json.dumps(exams.json(), indent=2))
