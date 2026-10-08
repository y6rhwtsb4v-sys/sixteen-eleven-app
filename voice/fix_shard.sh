#!/bin/bash
# Re-record one share of the passages the QC run flagged. Run on N pods at
# once with SHARD=0..N-1 and SHARDS=N. Reads v1/_qc/flagged-before.txt (one
# QC result per line), re-records this pod's share, uploads each new take as it
# is made, then folds every finished shard's revisions into the manifest.
# Needs R2_KEY / R2_SECRET (RunPod secrets). Stops the pod at the end.
set -e
: "${SHARD:?}" "${SHARDS:?}"
CDN=https://pub-0d19c7318a7940f3ad2c1f46e7d3ee17.r2.dev/v1
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq && apt-get install -y -qq ffmpeg python3-venv curl unzip git >/dev/null
curl -fsSL https://rclone.org/install.sh | bash >/dev/null
W=/workspace/voice-kit; mkdir -p $W/bible $W/data $W/qc && cd $W
rm -rf repo; git clone -q --depth 1 https://github.com/y6rhwtsb4v-sys/sixteen-eleven-app.git repo
cp repo/voice/*.py . && cp -r repo/www/assets/data/books data/books && cp repo/www/assets/data/meta.json data/
export RCLONE_CONFIG=$W/.rclone.conf
rclone config create r2 s3 provider=Cloudflare access_key_id="$R2_KEY" secret_access_key="$R2_SECRET" \
  endpoint="https://7d9e146a648c357c463c6e45c26861f4.r2.cloudflarestorage.com" acl=private no_check_bucket=true >/dev/null
chmod 600 $RCLONE_CONFIG
R=r2:sixteen-eleven-audio/v1
# copy first: rclone refuses a file that is still being written to
up_text() { cp "$1" "/tmp/up-$2" 2>/dev/null || return 0; rclone copyto "/tmp/up-$2" "$R/_qc/$2" --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: text/plain" 2>/dev/null || true; }
status() { echo "$(date -u +%FT%TZ) $*" >> status-$SHARD.txt; up_text status-$SHARD.txt status-$SHARD.txt; }

rclone copyto $R/_qc/flagged-before.txt flagged.txt
rclone copyto $R/manifest.json manifest.json
python3 - <<PY
import json
rs = [json.loads(l) for l in open('flagged.txt') if l.strip()]
rs.sort(key=lambda r: r['stem'])
mine = [r for i, r in enumerate(rs) if i % $SHARDS == $SHARD]
open('qc/results.jsonl', 'w').write(''.join(json.dumps(r) + '\n' for r in mine))
open('mine.txt', 'w').write(''.join(r['stem'] + '.m4a\n' for r in mine))
m = json.load(open('manifest.json')); clips = []
for book, ch in (('Psalms', '23'), ('John', '1')):
    for x in (m.get(book, {}).get(ch) or [])[:2]:
        clips.append((x['f'] if isinstance(x, dict) else x).split('?')[0])
open('prompt.txt', 'w').write(''.join(c + '\n' for c in clips))
open('list.txt', 'w').write(''.join("file 'bible/%s'\n" % f for f in clips))
print('shard $SHARD: %d clips' % len(mine))
PY
cat mine.txt prompt.txt | sort -u > want.txt
rclone copy $R bible --files-from want.txt --transfers 16
ffmpeg -loglevel error -y -f concat -safe 0 -i list.txt -t 22 -ar 24000 -ac 1 my_voice.wav
[ -x /workspace/qcenv/bin/python ] || python3 -m venv /workspace/qcenv
/workspace/qcenv/bin/pip install -q faster-whisper nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"
[ -x /workspace/sixteen/venv/bin/python ] || python3 -m venv /workspace/sixteen/venv
. /workspace/sixteen/venv/bin/activate
pip install -q --upgrade pip && pip install -q chatterbox-tts soundfile numpy
status "setup done, $(wc -l < mine.txt) clips to redo"

# new takes go up as they are made, along with the log
push() {
  python3 -c "
import json,os
r=json.load(open('qc/revisions.json')) if os.path.exists('qc/revisions.json') else {}
open('changed.txt','w').write(''.join(s+'.m4a\n' for s in r))
json.dump(r,open('revs-$SHARD.json','w'))" 2>/dev/null || return 0
  rclone copy bible $R --files-from changed.txt --transfers 8 \
    --header-upload "Cache-Control: public, max-age=31536000, immutable" --header-upload "Content-Type: audio/mp4" 2>/dev/null || true
  grep -v 'Sampling\|it/s\]' fix.log > fixlog.txt 2>/dev/null || true; up_text fixlog.txt fix-$SHARD.log
}
( while sleep 300; do push || true; done ) &
LOOP=$!
ONLY=$(sed 's/\.m4a$//' mine.txt | paste -sd, -)
python -u fix_voice.py --out bible --tries 4 --only "$ONLY" > fix.log 2>&1 || status "fix_voice exited with an error"
kill $LOOP 2>/dev/null || true
push
status "fix done: $(tail -1 fix.log)"
cp revs-$SHARD.json revs-up.json
rclone copyto revs-up.json $R/_qc/revs/revs-$SHARD.json --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: application/json"
cp qc/results.jsonl results-$SHARD.txt; up_text results-$SHARD.txt results-$SHARD.txt

# fold every finished shard into the manifest. Each finisher re-reads all of
# them, and the revision numbers are absolute (100 + takes), so whichever
# shard writes last leaves a manifest that has everyone's new takes.
sleep 45
rm -rf revs && rclone copy $R/_qc/revs revs
rclone copyto $R/manifest.json manifest.json
python3 - <<'PY'
import glob, json
revs = {}
for p in glob.glob('revs/*.json'):
    revs.update(json.load(open(p)))
m = json.load(open('manifest.json')); n = 0
for book, chs in m.items():
    if book.startswith('_') or not isinstance(chs, dict): continue
    for ch, lst in chs.items():
        for x in lst:
            if not isinstance(x, dict): continue
            stem = x['f'].split('?')[0][:-4]
            if stem in revs:
                x['f'] = stem + '.m4a?r=%d' % (100 + int(revs[stem])); n += 1
json.dump(m, open('manifest.new.json', 'w'), separators=(',', ':'))
print('MANIFEST new takes: %d from %d shard files' % (n, len(glob.glob('revs/*.json'))))
open('mf.txt', 'w').write('%d new takes from %d shards' % (n, len(glob.glob('revs/*.json'))))
PY
rclone copyto manifest.new.json $R/manifest.json \
  --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: application/json"
status "SHARD-END manifest now has $(cat mf.txt)"
runpodctl stop pod "$RUNPOD_POD_ID" || true
