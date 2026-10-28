#!/usr/bin/env python3
"""Re-record passages so the narrator says the hard names and old words right.

render_voice.speech_text() now respells the names and old words the voice
gets wrong (say.json, the same list the app's device voice uses), so a new
take of a passage says "Jobe" for Job and "show" for shew. This re-records the
passages listed in --stems (one per line: stem, book, chapter, first verse,
last verse, part, separated by tabs), a verse or two at a time as
fix_voice.py does, and checks every take with qc_voice.py.

Unlike fix_voice.py, the original take is not the one to beat: it says the
words the old way. The first new take with no repeat, skip or babble replaces
it. If none of --tries takes is clean, the original stays.

    python respell_voice.py --out bible --stems stems.tsv --tries 3
"""
import argparse, json, os, shutil, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from render_voice import load_model  # noqa: E402
from fix_voice import pieces, latest, QC_PY  # noqa: E402

BAD = {'repeat', 'skip', 'garbled'}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', default='bible')
    ap.add_argument('--books-dir', default='data/books')
    ap.add_argument('--meta', default='data/meta.json')
    ap.add_argument('--results', default='qc/results.jsonl')
    ap.add_argument('--stems', default='stems.tsv')
    ap.add_argument('--sample', default='my_voice.wav')
    ap.add_argument('--tries', type=int, default=3)
    ap.add_argument('--device', default='cuda')
    ap.add_argument('--exaggeration', type=float, default=0.5)
    ap.add_argument('--cfg', type=float, default=0.5)
    a = ap.parse_args()

    import torch, soundfile as sf
    rows = [l.rstrip('\n').split('\t') for l in open(a.stems, encoding='utf-8') if l.strip()]
    names = [b['name'] for b in json.load(open(a.meta, encoding='utf-8'))['books']]
    books = {}
    model = load_model(a.device, turbo=False)
    os.makedirs('qc/orig', exist_ok=True); os.makedirs('qc/tries', exist_ok=True)
    revs_path = 'qc/revisions.json'
    revs = json.load(open(revs_path)) if os.path.exists(revs_path) else {}
    gap = torch.zeros(1, int(model.sr * 0.28))
    done = 0
    print('%d passages to re-record' % len(rows), flush=True)
    for stem, book, ch, v1, v2, part in rows:
        bi = names.index(book)
        if bi not in books:
            books[bi] = json.load(open(os.path.join(a.books_dir, '%d.json' % bi), encoding='utf-8'))
        verses = books[bi][str(ch)]
        parts = pieces(verses, int(v1), int(v2))
        live = os.path.join(a.out, stem + '.m4a')
        orig = os.path.join('qc/orig', stem + '.m4a')
        if os.path.exists(live) and not os.path.exists(orig):
            shutil.copy2(live, orig)
        kept = None
        for t in range(1, a.tries + 1):
            torch.manual_seed(5000 + 1000 * t + (int(part) + 1) * 7)
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
            shutil.copy2(take, live)
            subprocess.run([QC_PY, os.path.join(HERE, 'qc_voice.py'), '--out', a.out,
                            '--books-dir', a.books_dir, '--meta', a.meta,
                            '--results', a.results, '--only', stem],
                           check=False, stdout=subprocess.DEVNULL)
            rec = latest(a.results).get(stem, {})
            kinds = [i['kind'] for i in rec.get('issues', [])]
            print('  %s try %d: %s' % (stem, t, kinds or 'clean'), flush=True)
            if not (set(kinds) & BAD):
                kept = take
                break
        if kept:
            shutil.copy2(kept, live)
            revs[stem] = revs.get(stem, 1) + 1
            done += 1
        elif os.path.exists(orig):
            shutil.copy2(orig, live)
        json.dump(revs, open(revs_path, 'w'), indent=0)
    print('re-recorded %d of %d passages' % (done, len(rows)), flush=True)


if __name__ == '__main__':
    main()
