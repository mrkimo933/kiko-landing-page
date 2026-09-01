import json
import re

with open("/Users/kareem/.gemini/antigravity/brain/b8d000ea-9314-472b-8d6c-1128d6c7259e/.system_generated/logs/transcript_full.jsonl", 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line in reversed(lines):
    try:
        data = json.loads(line)
        if data.get('type') == 'USER_INPUT' and '<!DOCTYPE html>' in data.get('content', ''):
            content = data.get('content', '')
            match = re.search(r'(<!DOCTYPE html>.*?</html>)', content, re.DOTALL)
            if match:
                html = match.group(1)
                html = html.replace('/mnt/agents/upload/kiko.png', '/logo.png')
                with open('/Users/kareem/Desktop/kiko-landing-page/index.html', 'w', encoding='utf-8') as out:
                    out.write(html)
                with open('/Users/kareem/Desktop/kiko-shopify-app/public/landing.html', 'w', encoding='utf-8') as out:
                    out.write(html)
                print(f"Fixed! Length: {len(html)}")
                break
    except:
        pass
