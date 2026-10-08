#!/usr/bin/env python3
"""Re-render the passages qc_voice.py flagged, and keep the best take.

The voice model slips most on long inputs, so a flagged passage is rendered
again a verse or two at a time (short pieces, joined with a breath of
silence) and checked again. Up to --tries takes; the first clean one wins, and
if none is clean the one with the fewest problems is kept. The original is
never lost: it is saved to qc/orig/ before anything replaces it.

Each replaced clip is recorded in qc/revisions.json; make_manifest.py adds
?r=N to those file names so phones that already cached the old take fetch the
new one.

    . /workspace/sixteen/venv/bin/activate
    python fix_voice.py --out bible                 # everything flagged so far
    python fix_voice.py --out bible --only genesis-001-00
"""
import argparse, json, os, re, shutil, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from render_voice import speech_text, load_model  # noqa: E402

QC_PY = '/workspace/qcenv/bin/python'


def latest(results):
    out = {}
    if os.path.exists(results):
        for line in open(results):
            try:
                r = json.loads(line)
                out[r['stem']] = r
            except Exception:
                pass
    return out


def score(rec):
    """Lower is better: repeats and skips matter most."""
    w = {'repeat': 10, 'skip': 10, 'extra': 6, 'garbled': 8, 'length': 3}
    return sum(w.get(i['kind'], 5) for i in rec.get('issues', [])) + (1 - rec.get('ratio', 0))


def pieces(verses, v1, v2, cap=220):
    """A verse or two per piece, never splitting a verse."""
    out, cur = [], ''
    for n in range(v1, v2 + 1):
        t = speech_text(verses[n - 1]) if n - 1 < len(verses) else ''
        if not t:
            continue
        if cur and len(cur) + len(t) + 1 > cap:
            out.append(cur); cur = t
        else:
            cur = (cur + ' ' + t).strip()
    if cur:
        out.append(cur)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', default='bible')
    ap.add_argument('--books-dir', default='data/books')
    ap.add_argument('--meta', default='data/meta.json')
    ap.add_argument('--results', default='qc/results.jsonl')
    ap.add_argument('--sample', default='my_voice.wav')
    ap.add_argument('--only', default='')
    ap.add_argument('--tries', type=int, default=3)
    ap.add_argument('--device', default='cuda')
    ap.add_argument('--exaggeration', type=float, default=0.5)
    ap.add_argument('--cfg', type=float, default=0.5)
    a = ap.parse_args()

    # fix_loop.sh and watch_all.sh can both call this; one at a time, and the
    # flagged list is read only once the lock is held
    import fcntl
    lock = open('/workspace/fix.lock', 'w')
    fcntl.flock(lock, fcntl.LOCK_EX)

    import torch, soundfile as sf
    recs = latest(a.results)
    only = set(x.strip() for x in a.only.split(',') if x.strip())
    # a clip already given its retakes is left alone unless asked for by name
    todo = [r for s, r in sorted(recs.items())
            if r.get('issues') and (s in only if only else 'kept' not in r)]
    print('%d flagged clips to redo' % len(todo), flush=True)
    if not todo:
        return
    names = [b['name'] for b in json.load(open(a.meta, encoding='utf-8'))['books']]
    books = {}
    model = load_model(a.device, turbo=False)
    os.makedirs('qc/orig', exist_ok=True); os.makedirs('qc/tries', exist_ok=True)
    revs_path = 'qc/revisions.json'
    revs = json.load(open(revs_path)) if os.path.exists(revs_path) else {}
    gap = torch.zeros(1, int(model.sr * 0.28))
    fixed = 0
    for r in todo:
        stem = r['stem']
        bi = names.index(r['book'])
        if bi not in books:
            books[bi] = json.load(open(os.path.join(a.books_dir, '%d.json' % bi), encoding='utf-8'))
        verses = books[bi][str(r['ch'])]
        parts = pieces(verses, r['v1'], r['v2'])
        live = os.path.join(a.out, stem + '.m4a')
        orig = os.path.join('qc/orig', stem + '.m4a')
        if not os.path.exists(orig):
            shutil.copy2(live, orig)
        best = (score(r), orig, r)
        for t in range(1, a.tries + 1):
            torch.manual_seed(1000 * t + (r['part'] + 1) * 7)
            chunks = []
            for p in parts:
                w = model.generate(p, audio_prompt_path=a.sample,
                                   exaggeration=a.exaggeration, cfg_weight=a.cfg)
                chunks += [w.cpu(), gap]
            wav = torch.cat(chunks[:-1], dim=1)
            wav_path = os.path.join('qc/tries', '%s-t%d.wav' % (stem, t))
            take = os.path.join('qc/tries', '%s-t%d.m4a' % (stem, t))
            sf.write(wav_path, wav.squeeze(0).numpy(), model.sr)
            os.system('ffmpeg -loglevel error -y -i "%s" -c:a aac -b:a 48k -ac 1 '
                      '-movflags +faststart "%s"' % (wav_path, take))
            os.remove(wav_path)
            # check this take in place, so the checker sees it under its real name
            shutil.copy2(take, live)
            subprocess.run([QC_PY, os.path.join(HERE, 'qc_voice.py'), '--out', a.out,
                            '--books-dir', a.books_dir, '--meta', a.meta,
                            '--results', a.results, '--only', stem],
                           check=False, stdout=subprocess.DEVNULL)
            rec = latest(a.results)[stem]
            print('  %s try %d: %s' % (stem, t, [i['kind'] for i in rec['issues']] or 'clean'),
                  flush=True)
            if score(rec) < best[0]:
                best = (score(rec), take, rec)
            if not rec['issues']:
                break
        shutil.copy2(best[1], live)
        if best[1] != orig:
            revs[stem] = revs.get(stem, 1) + 1
            fixed += 1
        # the log's last line for this clip must describe the file now in place
        rec = dict(best[2]); rec['mtime'] = os.path.getmtime(live)
        rec['kept'] = 'original' if best[1] == orig else 'retake'
        with open(a.results, 'a') as f:
            f.write(json.dumps(rec) + '\n')
        json.dump(revs, open(revs_path, 'w'), indent=0)
    print('replaced %d of %d flagged clips' % (fixed, len(todo)))


if __name__ == '__main__':
    main()
