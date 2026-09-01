import json
import re

html_content = ""
with open("/Users/kareem/.gemini/antigravity/brain/b8d000ea-9314-472b-8d6c-1128d6c7259e/.system_generated/logs/transcript_full.jsonl", 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line in reversed(lines):
    try:
        data = json.loads(line)
        if data.get('source') == 'USER_EXPLICIT':
            content = data.get('content', '')
            match = re.search(r'(<!DOCTYPE html>.*?</html>)', content, re.DOTALL)
            if match:
                html_content = match.group(1)
                break
    except:
        pass

if html_content:
    html_content = html_content.replace('/mnt/agents/upload/kiko.png', '/logo.png')
    with open('/Users/kareem/Desktop/kiko-landing-page/index.html', 'w', encoding='utf-8') as out:
        out.write(html_content)
    with open('/Users/kareem/Desktop/kiko-shopify-app/public/landing.html', 'w', encoding='utf-8') as out:
        out.write(html_content)
    print(f"Successfully updated! Length: {len(html_content)}")
else:
    print("Not found.")
