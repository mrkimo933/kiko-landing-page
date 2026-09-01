import re

with open("/Users/kareem/.gemini/antigravity/brain/b8d000ea-9314-472b-8d6c-1128d6c7259e/.system_generated/logs/transcript_full.jsonl", 'r', errors='ignore') as f:
    text = f.read()

matches = re.findall(r'<!DOCTYPE html>.*?</html>', text, re.DOTALL)
longest = ""
for m in matches:
    # unescape \n and \" if it's JSON encoded string
    decoded = m.replace('\\n', '\n').replace('\\"', '"')
    if len(decoded) > len(longest):
        longest = decoded

if longest:
    longest = longest.replace('/mnt/agents/upload/kiko.png', '/logo.png')
    with open('/Users/kareem/Desktop/kiko-landing-page/index.html', 'w') as out:
        out.write(longest)
    with open('/Users/kareem/Desktop/kiko-shopify-app/public/landing.html', 'w') as out:
        out.write(longest)
    print(f"Fixed! Length: {len(longest)}")
else:
    print("Not found")
