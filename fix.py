import json
import re

longest_html = ""

with open("/Users/kareem/.gemini/antigravity/brain/b8d000ea-9314-472b-8d6c-1128d6c7259e/.system_generated/logs/transcript_full.jsonl") as f:
    for line in f:
        if '<!DOCTYPE html>' in line:
            try:
                data = json.loads(line)
                content = data.get('content', '')
                # Find all HTML matches
                matches = re.findall(r'(<!DOCTYPE html>.*?</html>)', content, re.DOTALL)
                for html in matches:
                    if len(html) > len(longest_html):
                        longest_html = html
            except:
                pass

if longest_html:
    longest_html = longest_html.replace('/mnt/agents/upload/kiko.png', '/logo.png')
    with open('/Users/kareem/Desktop/kiko-landing-page/index.html', 'w') as out:
        out.write(longest_html)
    with open('/Users/kareem/Desktop/kiko-shopify-app/public/landing.html', 'w') as out:
        out.write(longest_html)
    print("Fixed!")
else:
    print("Not found")
