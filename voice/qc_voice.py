#!/usr/bin/env python3
"""Listen back to every rendered passage and flag the ones the voice got wrong.

The voice model sometimes says a phrase twice, skips a phrase, or trails off
into babble. None of that shows in the text; it has to be heard. This runs a
speech recogniser (faster-whisper) over each clip and lines its words up with
the words that were meant to be read:

  repeat   the clip has a run of 3+ extra words that already occur in the
           passage (the "reads the first line twice" fault)
  skip     5+ words of the passage are missing
  garbled  the words match poorly overall
  length   the clip is far longer or shorter than the text implies

Results go to qc/results.jsonl, one line per clip, and a clip is only checked
again when its file changes. Runs in its own venv so it cannot disturb the
renderer's packages:

    python3 -m venv /workspace/qcenv
    /workspace/qcenv/bin/pip install faster-whisper nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"
    /workspace/qcenv/bin/python qc_voice.py --out bible            # everything
    /workspace/qcenv/bin/python qc_voice.py --out bible --only genesis-001-00
"""
import argparse, difflib, glob, json, os, re, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)


def _cuda_libs():
    """faster-whisper finds cuBLAS/cuDNN from the pip wheels only if told where."""
    import site
    paths = []
    for sp in site.getsitepackages():
        paths += glob.glob(os.path.join(sp, 'nvidia', '*', 'lib'))
    if paths:
        cur = os.environ.get('LD_LIBRARY_PATH', '')
        want = ':'.join(p for p in paths if p not in cur)
        if want and os.environ.get('_QC_LIBS') != '1':
            os.environ['LD_LIBRARY_PATH'] = want + (':' + cur if cur else '')
            os.environ['_QC_LIBS'] = '1'
            os.execv(sys.executable, [sys.executable] + sys.argv)


def words(s):
    s = s.lower().replace('’', "'")
    s = re.sub(r"[^a-z0-9' ]+", ' ', s)
    return [w.strip("'") for w in s.split() if w.strip("'")]


# spellings the recogniser prefers for the same spoken word
SAME = {'o': 'oh', 'ye': 'ye', 'shew': 'show', 'shewed': 'showed', 'gray': 'grey',
        'saviour': 'savior', 'honour': 'honor', 'labour': 'labor', 'colour': 'color',
        'neighbour': 'neighbor', 'favour': 'favor', 'behaviour': 'behavior'}


PROMPT = ('And the LORD spake unto Moses, saying, Thou shalt not; for thee and thy '
          'house hath he blessed. Behold, verily I say unto you.')


def canon(ws):
    return [SAME.get(w, w) for w in ws]


def judge(expected, heard, seconds):
    e, h = canon(words(expected)), canon(words(heard))
    sm = difflib.SequenceMatcher(None, e, h, autojunk=False)
    issues = []
    joined = ' ' + ' '.join(e) + ' '
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        extra = (j2 - j1) - (i2 - i1)
        if op in ('insert', 'replace') and extra >= 3:
            run = h[j1:j2]
            # is some 3-word stretch of the extra speech already in the passage?
            for k in range(len(run) - 2):
                if ' ' + ' '.join(run[k:k + 3]) + ' ' in joined:
                    issues.append({'kind': 'repeat', 'said': ' '.join(run)[:160]})
                    break
            else:
                if extra >= 6:
                    issues.append({'kind': 'extra', 'said': ' '.join(run)[:160]})
        if op in ('delete', 'replace') and -extra >= 5:
            issues.append({'kind': 'skip', 'missing': ' '.join(e[i1:i2])[:160]})
    ratio = sm.ratio()
    if ratio < 0.80:
        issues.append({'kind': 'garbled', 'ratio': round(ratio, 3)})
    cps = len(expected) / max(seconds, 0.1)
    if cps < 8 or cps > 24:
        issues.append({'kind': 'length', 'chars_per_sec': round(cps, 1)})
    return ratio, issues


def jobs_for(out_dir, books_dir, meta):
    from render_voice import passages
    names = [b['name'] for b in json.load(open(meta, encoding='utf-8'))['books']]
    have = set(os.listdir(out_dir))
    for i, name in enumerate(names):
        book = json.load(open(os.path.join(books_dir, '%d.json' % i), encoding='utf-8'))
        slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
        for cn in sorted(book, key=int):
            for k, (v1, v2, text) in enumerate(passages(book[cn])):
                stem = '%s-%03d-%02d' % (slug, int(cn), k)
                if stem + '.m4a' in have:
                    yield dict(stem=stem, book=name, ch=int(cn), part=k, v1=v1, v2=v2, text=text)


def load_results(path):
    done = {}
    if os.path.exists(path):
        for line in open(path):
            try:
                r = json.loads(line)
                done[r['stem']] = r
            except Exception:
                pass
    return done


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', default='bible')
    ap.add_argument('--books-dir', default='data/books')
    ap.add_argument('--meta', default='data/meta.json')
    ap.add_argument('--results', default='qc/results.jsonl')
    ap.add_argument('--only', default='', help='comma separated stems')
    ap.add_argument('--model', default='small.en')
    ap.add_argument('--device', default='cuda')
    a = ap.parse_args()
    _cuda_libs()

    from faster_whisper import WhisperModel
    model = WhisperModel(a.model, device=a.device,
                         compute_type='float16' if a.device == 'cuda' else 'int8')
    os.makedirs(os.path.dirname(a.results) or '.', exist_ok=True)
    done = load_results(a.results)
    only = set(x.strip() for x in a.only.split(',') if x.strip())
    todo = []
    for j in jobs_for(a.out, a.books_dir, a.meta):
        if only and j['stem'] not in only:
            continue
        mt = os.path.getmtime(os.path.join(a.out, j['stem'] + '.m4a'))
        if not only and j['stem'] in done and done[j['stem']].get('mtime') == mt:
            continue
        # the renderer may still be writing it; it is picked up next time
        if not only and time.time() - mt < 120:
            continue
        j['mtime'] = mt
        todo.append(j)
    print('%d clips to check' % len(todo), flush=True)
    bad = 0
    with open(a.results, 'a') as f:
        for n, j in enumerate(todo, 1):
            path = os.path.join(a.out, j['stem'] + '.m4a')
            # a generic prompt only: giving it the passage itself could lead it
            # to write what should have been said instead of what was said
            try:
                segs, info = model.transcribe(path, language='en', beam_size=5,
                                              condition_on_previous_text=False,
                                              initial_prompt=PROMPT)
                heard = ' '.join(s.text for s in segs)
            except Exception as e:
                print('  could not read %s: %s' % (j['stem'], e), flush=True)
                continue
            ratio, issues = judge(j['text'], heard, info.duration)
            rec = dict(stem=j['stem'], book=j['book'], ch=j['ch'], part=j['part'],
                       v1=j['v1'], v2=j['v2'], mtime=j['mtime'], ratio=round(ratio, 3),
                       secs=round(info.duration, 1), issues=issues, heard=heard.strip())
            f.write(json.dumps(rec) + '\n'); f.flush()
            if issues:
                bad += 1
                if only or bad <= 50:
                    print('FLAG %s %s' % (j['stem'], json.dumps(issues)[:300]), flush=True)
            if n % 100 == 0:
                print('  %d/%d checked, %d flagged' % (n, len(todo), bad), flush=True)
    print('checked %d, flagged %d' % (len(todo), bad))


if __name__ == '__main__':
    main()
