#!/bin/bash
# Listen back to every recorded passage on a fresh GPU pod, re-record the ones
# the voice got wrong (repeats, skips, babble), upload the new takes and a
# manifest that points phones at them. Needs RunPod secrets r2_key_id and
# r2_secret as R2_KEY / R2_SECRET. Stops the pod at the end.
set -e
CDN=https://pub-0d19c7318a7940f3ad2c1f46e7d3ee17.r2.dev/v1
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq && apt-get install -y -qq ffmpeg python3-venv curl unzip git >/dev/null
curl -fsSL https://rclone.org/install.sh | bash >/dev/null
W=/workspace/voice-kit; mkdir -p $W/bible $W/data && cd $W
rm -rf repo; git clone -q --depth 1 https://github.com/y6rhwtsb4v-sys/sixteen-eleven-app.git repo
cp repo/voice/*.py . && cp -r repo/www/assets/data/books data/books && cp repo/www/assets/data/meta.json data/
export RCLONE_CONFIG=$W/.rclone.conf
rclone config create r2 s3 provider=Cloudflare access_key_id="$R2_KEY" secret_access_key="$R2_SECRET" \
  endpoint="https://7d9e146a648c357c463c6e45c26861f4.r2.cloudflarestorage.com" acl=private no_check_bucket=true >/dev/null
chmod 600 $RCLONE_CONFIG
echo "== downloading the recordings"
rclone copy r2:sixteen-eleven-audio/v1 bible --filter "- *-t.m4a" --filter "+ *.m4a" --filter "- *" --transfers 32 --checkers 32
rclone copyto r2:sixteen-eleven-audio/v1/manifest.json manifest.json
echo "clips: $(ls bible | wc -l)"
# progress goes to R2 every few minutes so it can be read from outside the pod
report() { for f in qc.log fix.log run-status.txt; do [ -f $f ] && rclone copyto $f r2:sixteen-eleven-audio/v1/_qc/$f --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: text/plain" 2>/dev/null; done; true; }
status() { echo "$(date -u +%FT%TZ) $*" >> run-status.txt; report; }
( while sleep 300; do report; done ) &
trap 'status "SCRIPT STOPPED at line $LINENO"' ERR
status "downloaded $(ls bible | wc -l) clips"
[ -x /workspace/qcenv/bin/python ] || python3 -m venv /workspace/qcenv
/workspace/qcenv/bin/pip install -q faster-whisper nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"
[ -x /workspace/sixteen/venv/bin/python ] || python3 -m venv /workspace/sixteen/venv
. /workspace/sixteen/venv/bin/activate
pip install -q --upgrade pip && pip install -q chatterbox-tts soundfile numpy
# the voice prompt, cut from chapters already recorded in the narrator's voice
python3 - <<'PY'
import json, subprocess
m = json.load(open('manifest.json')); clips = []
for book, ch in (('Psalms', '23'), ('John', '1')):
    for x in (m.get(book, {}).get(ch) or [])[:2]:
        clips.append((x['f'] if isinstance(x, dict) else x).split('?')[0])
open('list.txt', 'w').write(''.join("file 'bible/%s'\n" % f for f in clips))
subprocess.run('ffmpeg -loglevel error -y -f concat -safe 0 -i list.txt -t 22 -ar 24000 -ac 1 my_voice.wav', shell=True, check=True)
PY
mkdir -p qc
status "setup done, checking"
echo "== checking every passage"
/workspace/qcenv/bin/python -u qc_voice.py --out bible > qc.log 2>&1 || { echo "QC FAILED:"; tail -40 qc.log; status "QC FAILED"; exit 1; }
python3 - <<'PY'
import json, collections
rs = {}
for l in open('qc/results.jsonl'):
    try: r = json.loads(l); rs[r['stem']] = r
    except Exception: pass
bad = [r for r in rs.values() if r.get('issues')]
c = collections.Counter(i if isinstance(i, str) else i.get('kind', str(i)) for r in bad for i in r['issues'])
print('QC-SUMMARY checked %d, flagged %d, by kind %s' % (len(rs), len(bad), dict(c)))
print('QC-FLAGGED ' + ' '.join(sorted(r['stem'] for r in bad)))
PY
python3 -c "
import json;rs={}
for l in open('qc/results.jsonl'):
  try: r=json.loads(l); rs[r['stem']]=r
  except Exception: pass
open('flagged.jsonl','w').write(''.join(json.dumps(r)+'\\n' for r in rs.values() if r.get('issues')))"
rclone copyto flagged.jsonl r2:sixteen-eleven-audio/v1/_qc/flagged-before.txt --header-upload "Content-Type: text/plain" --header-upload "Cache-Control: no-cache" || true
status "QC done: $(wc -l < flagged.jsonl) flagged"
echo "== re-recording the flagged passages"
python -u fix_voice.py --out bible --tries 4 > fix.log 2>&1 || status "fix_voice exited with an error"
tail -5 fix.log
status "fix done: $(tail -1 fix.log)"
echo "== uploading the new takes"
python3 - <<'PY'
import json, os
revs = json.load(open('qc/revisions.json')) if os.path.exists('qc/revisions.json') else {}
open('changed.txt', 'w').write(''.join(s + '.m4a\n' for s in revs))
m = json.load(open('manifest.json')); n = 0
for book, chs in m.items():
    if book.startswith('_') or not isinstance(chs, dict): continue
    for ch, lst in chs.items():
        for x in lst:
            if not isinstance(x, dict): continue
            f = x['f']; stem = f.split('?')[0][:-4]
            if stem in revs:
                old = int(f.split('?r=')[1]) if '?r=' in f else 0
                x['f'] = stem + '.m4a?r=%d' % (old + 10 + int(revs[stem])); n += 1
json.dump(m, open('manifest.new.json', 'w'), separators=(',', ':'))
print('FIX-SUMMARY new takes in manifest: %d' % n)
PY
rclone copy bible r2:sixteen-eleven-audio/v1 --files-from changed.txt --transfers 16 \
  --header-upload "Cache-Control: public, max-age=31536000, immutable" --header-upload "Content-Type: audio/mp4"
rclone copyto manifest.new.json r2:sixteen-eleven-audio/v1/manifest.json \
  --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: application/json"
cp qc/results.jsonl qc-results-final.jsonl
rclone copyto qc-results-final.jsonl r2:sixteen-eleven-audio/v1/_qc/results-final.txt --header-upload "Content-Type: text/plain" --header-upload "Cache-Control: no-cache" || true
status "QC-JOB-END $(wc -l < changed.txt) new takes uploaded"
echo QC-JOB-END
runpodctl stop pod "$RUNPOD_POD_ID" || true
