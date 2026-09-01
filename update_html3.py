import json
import re

found = False
with open("/Users/kareem/.gemini/antigravity/brain/b8d000ea-9314-472b-8d6c-1128d6c7259e/.system_generated/logs/transcript_full.jsonl", 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            content = data.get('content', '')
            if '<!DOCTYPE html>' in content and '<!-- Footer -->' in content:
                match = re.search(r'(<!DOCTYPE html>.*?</html>)', content, re.DOTALL)
                if match:
                    html = match.group(1)
                    html = html.replace('/mnt/agents/upload/kiko.png', '/logo.png')
                    with open('/Users/kareem/Desktop/kiko-landing-page/index.html', 'w', encoding='utf-8') as out:
                        out.write(html)
                    with open('/Users/kareem/Desktop/kiko-shopify-app/public/landing.html', 'w', encoding='utf-8') as out:
                        out.write(html)
                    found = True
                    # Don't break, keep going to find the latest one
        except Exception as e:
            pass

if found:
    print("Successfully updated!")
else:
    print("Not found.")
