import re

with open("/Users/kareem/.gemini/antigravity/brain/b8d000ea-9314-472b-8d6c-1128d6c7259e/.system_generated/logs/transcript_full.jsonl", 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Find all HTML blocks
matches = re.findall(r'<!DOCTYPE html>.*?</html>', text, re.DOTALL)
for m in reversed(matches):
    if 'Footer' in m:
        # If it's json escaped, unescape it.
        # But wait, re.findall on the raw file will include the \n literal characters.
        # Let's decode JSON properly.
        break

