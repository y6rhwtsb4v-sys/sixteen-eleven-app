#!/bin/bash
# Spoken chapter titles in the narrator's voice, on a fresh pod.
W=/workspace; K=$W/kit; S=$W/STATUS.txt
say(){ echo "$(date -u +%H:%M:%S) $*" | tee -a $S; }
cd $K
say "setting up"
export DEBIAN_FRONTEND=noninteractive
command -v ffmpeg >/dev/null || { apt-get update -qq && apt-get install -y -qq ffmpeg git >/dev/null; }
command -v rclone >/dev/null || curl -fsSL https://rclone.org/install.sh | bash >/dev/null
[ -d $W/venv ] || python3 -m venv $W/venv
. $W/venv/bin/activate
python -c "import chatterbox" 2>/dev/null || pip install -q chatterbox-tts soundfile numpy
python -c "import torch;print('cuda',torch.cuda.is_available())" | tee -a $S
[ -d $W/app ] || git clone -q --depth 1 https://github.com/y6rhwtsb4v-sys/sixteen-eleven-app $W/app
mkdir -p data && cp $W/app/www/assets/data/meta.json data/meta.json
# the voice: a passage of the narration itself, so the titles match it
if [ ! -s my_voice.wav ]; then
  python - <<'PY'
import json, urllib.request, time
B='https://pub-0d19c7318a7940f3ad2c1f46e7d3ee17.r2.dev/v1/'
m=json.load(urllib.request.urlopen(B+'manifest.json?t=%d'%time.time()))
parts=m['Psalms']['23']+m['Psalms']['1']
open('ref_list.txt','w').write('\n'.join(B+p['f'] for p in parts[:3]))
PY
  i=0; : > cat.txt
  while read u; do i=$((i+1)); curl -fsSL "$u" -o ref$i.m4a && echo "file 'ref$i.m4a'" >> cat.txt; done < ref_list.txt
  ffmpeg -loglevel error -y -f concat -safe 0 -i cat.txt -t 24 -ac 1 -ar 24000 my_voice.wav
fi
ls -la my_voice.wav | tee -a $S
say "rendering 1,362 titles"
python -u render_titles.py --no-turbo --sample my_voice.wav --out $W/titles 2>&1 | tee -a $W/render.log | grep -E "titles|/|done" >> $S
say "rendered: $(ls $W/titles/*-t.m4a 2>/dev/null | wc -l) clips"
# upload needs the R2 keys, typed into this pod by the owner (bash /workspace/kit/r2_login.sh)
export RCLONE_CONFIG=$W/.rclone.conf
n=0
until [ -s $RCLONE_CONFIG ] && rclone lsf r2:sixteen-eleven-audio/v1/manifest.json >/dev/null 2>&1; do
  [ $((n % 20)) = 0 ] && say "waiting for the R2 keys: open Jupyter, Terminal, run: bash /workspace/kit/r2_login.sh"
  n=$((n+1)); sleep 30
  [ $n -gt 720 ] && { say "no keys after 6 hours; stopping (titles kept on /workspace/titles)"; runpodctl stop pod $RUNPOD_POD_ID; exit 0; }
done
say "uploading"
rclone copy $W/titles r2:sixteen-eleven-audio/v1 --include "*-t.m4a" --transfers 16 \
  --header-upload "Cache-Control: public, max-age=31536000, immutable" --header-upload "Content-Type: audio/mp4"
python merge_titles.py $W/titles data/meta.json | tee -a $S
rclone copyto manifest.json r2:sixteen-eleven-audio/v1/manifest.json \
  --header-upload "Cache-Control: no-cache" --header-upload "Content-Type: application/json"
say "TITLES-JOB-END uploaded; stopping the pod"
sleep 20; runpodctl stop pod $RUNPOD_POD_ID
