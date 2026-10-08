#!/bin/bash
# The spoken chapter titles on ANY fresh GPU pod (the original voice pod's disk
# is not needed). Needs RunPod secrets r2_key_id and r2_secret (the R2 token,
# Object Read & Write on sixteen-eleven-audio), passed in as R2_KEY / R2_SECRET.
# The voice prompt is cut from chapters already rendered in the same voice.
# Uploads the titles and a manifest with "_titles", then stops the pod.
set -e
CDN=https://pub-0d19c7318a7940f3ad2c1f46e7d3ee17.r2.dev/v1
RAW=https://raw.githubusercontent.com/y6rhwtsb4v-sys/sixteen-eleven-app/main
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq && apt-get install -y -qq ffmpeg python3-venv curl unzip >/dev/null
curl -fsSL https://rclone.org/install.sh | bash >/dev/null
W=/workspace/titles; mkdir -p $W/data $W/bible && cd $W
for f in render_titles.py render_voice.py; do curl -fsSL $RAW/voice/$f -o $f; done
curl -fsSL $RAW/www/assets/data/meta.json -o data/meta.json
[ -x venv/bin/python ] || python3 -m venv venv
. venv/bin/activate
python -c 'import chatterbox' 2>/dev/null || { pip install -q --upgrade pip && pip install -q chatterbox-tts soundfile numpy; }
# rclone, from the secrets (never written anywhere but this pod's disk)
export RCLONE_CONFIG=$W/.rclone.conf
rclone config create r2 s3 provider=Cloudflare access_key_id="$R2_KEY" secret_access_key="$R2_SECRET" \
  endpoint="https://7d9e146a648c357c463c6e45c26861f4.r2.cloudflarestorage.com" acl=private no_check_bucket=true >/dev/null
chmod 600 $RCLONE_CONFIG
# the voice prompt: ~20 s of the narrator, from Psalm 23 and John 1
curl -fsSL $CDN/manifest.json -o manifest.json
python3 - <<'PY'
import json, urllib.request, subprocess
m = json.load(open('manifest.json')); base = m.get('_base') or ''
clips = []
for book, ch in (('Psalms', '23'), ('John', '1')):
    for x in (m.get(book, {}).get(ch) or [])[:2]:
        clips.append(x['f'] if isinstance(x, dict) else x)
files = []
for i, f in enumerate(clips):
    u = 'https://pub-0d19c7318a7940f3ad2c1f46e7d3ee17.r2.dev/v1/' + f.split('?')[0]
    subprocess.run(['curl', '-fsSL', u, '-o', 'p%d.m4a' % i], check=True); files.append('p%d.m4a' % i)
open('list.txt', 'w').write(''.join("file '%s'\n" % f for f in files))
subprocess.run('ffmpeg -loglevel error -y -f concat -safe 0 -i list.txt -t 22 -ar 24000 -ac 1 my_voice.wav', shell=True, check=True)
print('voice prompt from', clips)
PY
python -u render_titles.py --no-turbo --sample my_voice.wav --out bible 2>&1 | tee titles.log
rclone copy bible r2:sixteen-eleven-audio/v1 --include "*-t.m4a" --transfers 16 \
  --header-upload "Cache-Control: public, max-age=31536000, immutable" --header-upload "Content-Type: audio/mp4"
# add "_titles" to the live manifest, keeping everything else as it is
python3 - <<'PY'
import json, os, re
m = json.load(open('manifest.json')); names = [b['name'] for b in json.load(open('data/meta.json'))['books']]
have = set(os.listdir('bible')); t = {}
for name in names:
    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    for f in have:
        mm = re.match(r'^%s-(\d{3})-t\.m4a$' % re.escape(slug), f)
        if mm: t.setdefault(name, {})[str(int(mm.group(1)))] = f
m['_titles'] = t
json.dump(m, open('manifest.new.json', 'w'), separators=(',', ':'))
print('titles in manifest:', sum(len(v) for v in t.values()))
PY
rclone copyto manifest.new.json r2:sixteen-eleven-audio/v1/manifest.json \
  --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: application/json"
echo TITLES-JOB-END
runpodctl stop pod "$RUNPOD_POD_ID" || true
