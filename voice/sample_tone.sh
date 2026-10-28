#!/bin/bash
# Record Psalm 23 and John 1 in the same voice at calmer settings, to hear
# beside the narration as it is, before deciding to record the Bible again.
# Nothing the app plays is touched: the samples go to v1/_samples/ with a page,
# v1/_samples/index.html, that plays each passage three ways.
# Needs R2_KEY / R2_SECRET (RunPod secrets). Stops the pod at the end.
set -e
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq && apt-get install -y -qq ffmpeg python3-venv curl unzip git >/dev/null
curl -fsSL https://rclone.org/install.sh | bash >/dev/null
W=/workspace/voice-kit; mkdir -p $W/bible $W/data && cd $W
rm -rf repo; git clone -q --depth 1 -b sync https://github.com/y6rhwtsb4v-sys/sixteen-eleven-app.git repo
cp repo/voice/*.py repo/voice/say.json . && cp -r repo/www/assets/data/books data/books && cp repo/www/assets/data/meta.json data/
export RCLONE_CONFIG=$W/.rclone.conf
rclone config create r2 s3 provider=Cloudflare access_key_id="$R2_KEY" secret_access_key="$R2_SECRET" \
  endpoint="https://7d9e146a648c357c463c6e45c26861f4.r2.cloudflarestorage.com" acl=private no_check_bucket=true >/dev/null
chmod 600 $RCLONE_CONFIG
R=r2:sixteen-eleven-audio/v1
status() { echo "$(date -u +%FT%TZ) $*" >> sample-status.txt; rclone copyto sample-status.txt $R/_samples/status.txt --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: text/plain" 2>/dev/null || true; }
trap 'status "SCRIPT STOPPED at line $LINENO"; runpodctl stop pod "$RUNPOD_POD_ID" || true' ERR
status "started"
rclone copyto $R/manifest.json manifest.json
python3 - <<'PY'
import json
m = json.load(open('manifest.json')); clips = []
for book, ch in (('Psalms', '23'), ('John', '1')):
    for x in (m.get(book, {}).get(ch) or [])[:2]:
        clips.append(x['f'].split('?')[0])
open('prompt.txt', 'w').write(''.join(c + '\n' for c in clips))
open('list.txt', 'w').write(''.join("file 'bible/%s'\n" % f for f in clips))
PY
rclone copy $R bible --files-from prompt.txt
ffmpeg -loglevel error -y -f concat -safe 0 -i list.txt -t 22 -ar 24000 -ac 1 my_voice.wav
[ -x /workspace/sixteen/venv/bin/python ] || python3 -m venv /workspace/sixteen/venv
. /workspace/sixteen/venv/bin/activate
pip install -q --upgrade pip && pip install -q chatterbox-tts soundfile numpy
status "setup done"
# calm: less animated; grave: less animated still, and slower, more deliberate
for SET in "calm 0.30 0.35" "grave 0.20 0.25"; do
  set -- $SET
  for CH in "Psalms:23" "John:1"; do
    python -u render_voice.py --sample my_voice.wav --chapter "$CH" --out samples/$1 \
      --no-turbo --exaggeration $2 --cfg $3 >> sample.log 2>&1
  done
  status "$1 done"
done
python3 - <<'PY'
import json, glob, os
m = json.load(open('manifest.json'))
CDN = 'https://pub-0d19c7318a7940f3ad2c1f46e7d3ee17.r2.dev/v1/'
rows = []
for book, ch, slug in (('Psalms', '23', 'psalms-023'), ('John', '1', 'john-001')):
    for k, x in enumerate(m[book][ch]):
        stem = '%s-%02d' % (slug, k)
        rows.append('<tr><th>%s %s:%d-%d</th><td><audio controls preload="none" src="%s%s"></audio></td>'
                    '<td><audio controls preload="none" src="%s_samples/calm/%s.m4a"></audio></td>'
                    '<td><audio controls preload="none" src="%s_samples/grave/%s.m4a"></audio></td></tr>'
                    % (book, ch, x['v1'], x['v2'], CDN, x['f'], CDN, stem, CDN, stem))
html = ('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        '<title>Narrator tone samples</title><style>body{font:15px system-ui;margin:16px;background:#FBF6EC;color:#1D1814}'
        'table{border-collapse:collapse}th,td{padding:6px 8px;border-bottom:1px solid #ddd;text-align:left;vertical-align:middle}'
        'audio{width:220px}</style><h1>Narrator tone samples</h1>'
        '<p><b>Now</b> is the narration in the app today. <b>Calm</b> is less animated. <b>Grave</b> is calmer still and more deliberate.</p>'
        '<table><tr><th>Passage</th><th>Now</th><th>Calm</th><th>Grave</th></tr>' + ''.join(rows) + '</table>')
open('index.html', 'w').write(html)
PY
rclone copy samples $R/_samples --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: audio/mp4" --include "*.m4a"
rclone copyto index.html $R/_samples/index.html --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: text/html; charset=utf-8"
grep -v 'Sampling\|it/s\]' sample.log > slog.txt || true
rclone copyto slog.txt $R/_samples/log.txt --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: text/plain" || true
status "SAMPLES-END"
runpodctl stop pod "$RUNPOD_POD_ID" || true
