#!/bin/bash
# Re-record passages with the hard names and old words respelt (say.json), on
# a fresh GPU pod. Run on N pods at once with SHARD=0..N-1 and SHARDS=N.
#   LIST=respell-pilot.tsv   re-record exactly the passages in that file, or
#   LIST=narrator            every passage containing a word in say-narrator.txt
# RUN is a number above every earlier take (401, 402, ...): phones that cached
# the old take fetch the new one because the manifest asks for ?r=RUN.
# Needs R2_KEY / R2_SECRET (RunPod secrets). Reports to v1/_qc/respell-*. Stops the pod.
set -e
: "${SHARD:?}" "${SHARDS:?}" "${RUN:?}" "${LIST:?}"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq && apt-get install -y -qq ffmpeg python3-venv curl unzip git >/dev/null
curl -fsSL https://rclone.org/install.sh | bash >/dev/null
W=/workspace/voice-kit; mkdir -p $W/bible $W/data $W/qc && cd $W
rm -rf repo; git clone -q --depth 1 -b sync https://github.com/y6rhwtsb4v-sys/sixteen-eleven-app.git repo
cp repo/voice/*.py repo/voice/say.json repo/voice/say-narrator.txt repo/voice/*.tsv . && cp -r repo/www/assets/data/books data/books && cp repo/www/assets/data/meta.json data/
export RCLONE_CONFIG=$W/.rclone.conf
rclone config create r2 s3 provider=Cloudflare access_key_id="$R2_KEY" secret_access_key="$R2_SECRET" \
  endpoint="https://7d9e146a648c357c463c6e45c26861f4.r2.cloudflarestorage.com" acl=private no_check_bucket=true >/dev/null
chmod 600 $RCLONE_CONFIG
R=r2:sixteen-eleven-audio/v1
TAG=respell-$RUN-$SHARD
up_text() { cp "$1" "/tmp/up-$2" 2>/dev/null || return 0; rclone copyto "/tmp/up-$2" "$R/_qc/$2" --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: text/plain" 2>/dev/null || true; }
status() { echo "$(date -u +%FT%TZ) $*" >> $TAG-status.txt; up_text $TAG-status.txt $TAG-status.txt; }
trap 'status "SCRIPT STOPPED at line $LINENO"; runpodctl stop pod "$RUNPOD_POD_ID" || true' ERR
status "started"
rclone copyto $R/manifest.json manifest.json
python3 - <<PY
import json, re
m = json.load(open('manifest.json'))
if "$LIST" == 'narrator':
    say = [w.strip() for w in open('say-narrator.txt') if w.strip()]
    rx = re.compile(r'\b(' + '|'.join(sorted(map(re.escape, say), key=len, reverse=True)) + r')\b')
    names = [b['name'] for b in json.load(open('data/meta.json'))['books']]
    rows = []
    for i, name in enumerate(names):
        chs = m.get(name)
        if not isinstance(chs, dict): continue
        book = json.load(open('data/books/%d.json' % i))
        for c, lst in chs.items():
            for k, x in enumerate(lst):
                if not isinstance(x, dict): continue
                txt = ' '.join((book.get(c) or [])[v - 1] or '' for v in range(x['v1'], x['v2'] + 1) if v - 1 < len(book.get(c) or []))
                if rx.search(txt):
                    rows.append('\t'.join(map(str, [x['f'].split('?')[0][:-4], name, c, x['v1'], x['v2'], k])))
else:
    rows = [l.rstrip('\n') for l in open("$LIST") if l.strip()]
rows.sort()
mine = [r for i, r in enumerate(rows) if i % $SHARDS == $SHARD]
open('stems.tsv', 'w').write(''.join(r + '\n' for r in mine))
open('mine.txt', 'w').write(''.join(r.split('\t')[0] + '.m4a\n' for r in mine))
clips = []
for book, ch in (('Psalms', '23'), ('John', '1')):
    for x in (m.get(book, {}).get(ch) or [])[:2]:
        clips.append((x['f'] if isinstance(x, dict) else x).split('?')[0])
open('prompt.txt', 'w').write(''.join(c + '\n' for c in clips))
open('list.txt', 'w').write(''.join("file 'bible/%s'\n" % f for f in clips))
print('shard $SHARD: %d of %d passages' % (len(mine), len(rows)))
PY
cat mine.txt prompt.txt | sort -u > want.txt
rclone copy $R bible --files-from want.txt --transfers 16
ffmpeg -loglevel error -y -f concat -safe 0 -i list.txt -t 22 -ar 24000 -ac 1 my_voice.wav
[ -x /workspace/qcenv/bin/python ] || python3 -m venv /workspace/qcenv
/workspace/qcenv/bin/pip install -q faster-whisper nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"
[ -x /workspace/sixteen/venv/bin/python ] || python3 -m venv /workspace/sixteen/venv
. /workspace/sixteen/venv/bin/activate
pip install -q --upgrade pip && pip install -q chatterbox-tts soundfile numpy
status "setup done, $(wc -l < stems.tsv) passages"

push() {
  python3 -c "
import json,os
r=json.load(open('qc/revisions.json')) if os.path.exists('qc/revisions.json') else {}
open('changed.txt','w').write(''.join(s+'.m4a\n' for s in r))
json.dump(sorted(r),open('$TAG.json','w'))" 2>/dev/null || return 0
  rclone copy bible $R --files-from changed.txt --transfers 8 \
    --header-upload "Cache-Control: public, max-age=31536000, immutable" --header-upload "Content-Type: audio/mp4" 2>/dev/null || true
  grep -v 'Sampling\|it/s\]' respell.log > rlog.txt 2>/dev/null || true; up_text rlog.txt $TAG.log
}
( while sleep 300; do push || true; done ) &
LOOP=$!
mkdir -p /workspace && : > /workspace/fix.lock
python -u respell_voice.py --out bible --stems stems.tsv --tries 3 > respell.log 2>&1 || status "respell_voice exited with an error"
kill $LOOP 2>/dev/null || true
push
status "done: $(tail -1 respell.log)"
rclone copyto $TAG.json $R/_qc/respell-revs/$TAG.json --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: application/json"

# fold every finished shard of this run into the manifest
sleep 45
rm -rf rrevs && rclone copy $R/_qc/respell-revs rrevs --include "respell-$RUN-*.json"
rclone copyto $R/manifest.json manifest.json
python3 - <<PY
import glob, json
stems = set()
for p in glob.glob('rrevs/*.json'):
    stems.update(json.load(open(p)))
m = json.load(open('manifest.json')); n = 0
for book, chs in m.items():
    if book.startswith('_') or not isinstance(chs, dict): continue
    for ch, lst in chs.items():
        for x in lst:
            if not isinstance(x, dict): continue
            stem = x['f'].split('?')[0][:-4]
            if stem in stems:
                x['f'] = stem + '.m4a?r=$RUN'; n += 1
json.dump(m, open('manifest.new.json', 'w'), separators=(',', ':'))
open('mf.txt', 'w').write('%d re-recorded passages from %d shard files' % (n, len(glob.glob('rrevs/*.json'))))
PY
rclone copyto manifest.new.json $R/manifest.json \
  --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: application/json"
status "SHARD-END manifest now has $(cat mf.txt)"
runpodctl stop pod "$RUNPOD_POD_ID" || true
