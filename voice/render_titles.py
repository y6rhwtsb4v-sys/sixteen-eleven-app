#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Render the spoken chapter titles, in the same voice as the chapters.

Each chapter's narration opens with its title: the book's full name at its
first chapter, as the 1611 printing heads it ("The First Book of Moses, called
Genesis. Chapter one."), then the short form ("Genesis, chapter two.",
"Psalm twenty-three."). One clip per chapter, next to the chapter's own clips:

    bible/genesis-001-t.m4a

make_manifest.py lists them under "_titles", and the app plays a chapter's
title before its first passage whenever reading starts from the top.

    python render_titles.py --sample my_voice.wav --out bible [--books "John,Psalms"]

Resumable: finished files are kept. The words come from spoken_title(), which
the app mirrors in spokenTitle() for the device voices.
"""
import argparse, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen']
TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
ORD = {'1': 'First', '2': 'Second', '3': 'Third'}


def words(n):
    """1..999 as an American reader says it: one hundred nineteen"""
    n = int(n)
    out = []
    if n >= 100:
        out.append(ONES[n // 100] + ' hundred')
        n %= 100
    if n >= 20:
        out.append(TENS[n // 10] + ('-' + ONES[n % 10] if n % 10 else ''))
    elif n:
        out.append(ONES[n])
    return ' '.join(out)


def spoken_name(name):
    """'1 Samuel' is read 'First Samuel'"""
    m = re.match(r'^([123]) (.*)$', name)
    return ORD[m.group(1)] + ' ' + m.group(2) if m else name


def spoken_title(book, ch):
    """book: a meta.json book (name, full, nch); ch: the chapter number"""
    name, full, nch = book['name'], (book.get('full') or '').strip(), int(book['nch'])
    ch = int(ch)
    if ch == 1:
        head = full if full and full != name else spoken_name(name)
        head = re.sub(r':\s*Called\b', ', called', head)
        head = re.sub(r'^([123]) ', lambda m: ORD[m.group(1)] + ' ', head)
        head = re.sub(r'\s+', ' ', head).rstrip('.')
        if nch == 1:
            return head + '.'
        return head + ('. Psalm one.' if name == 'Psalms' else '. Chapter one.')
    if name == 'Psalms':
        return 'Psalm ' + words(ch) + '.'
    return spoken_name(name) + ', chapter ' + words(ch) + '.'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--sample', required=True)
    ap.add_argument('--out', default='bible')
    ap.add_argument('--meta', default='data/meta.json')
    ap.add_argument('--books', default='', help='comma separated, or blank for all')
    ap.add_argument('--device', default='cuda')
    ap.add_argument('--bitrate', default='48k')
    ap.add_argument('--no-turbo', action='store_true')
    ap.add_argument('--exaggeration', type=float, default=0.5)
    ap.add_argument('--cfg', type=float, default=0.5)
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()

    books = json.load(open(a.meta, encoding='utf-8'))['books']
    want = [x.strip() for x in a.books.split(',') if x.strip()]
    jobs = []
    for b in books:
        if want and b['name'] not in want:
            continue
        slug = re.sub(r'[^a-z0-9]+', '-', b['name'].lower()).strip('-')
        for ch in range(1, int(b['nch']) + 1):
            jobs.append((slug + '-%03d-t' % ch, spoken_title(b, ch)))
    print('%d titles' % len(jobs))
    if a.dry_run:
        for stem, t in jobs[:6] + jobs[-3:]:
            print(' ', stem, '|', t)
        return

    import soundfile as sf
    from render_voice import load_model
    model = load_model(a.device, not a.no_turbo)
    os.makedirs(a.out, exist_ok=True)
    for n, (stem, text) in enumerate(jobs, 1):
        m4a = os.path.join(a.out, stem + '.m4a')
        if os.path.exists(m4a):
            continue
        wav_path = os.path.join(a.out, stem + '.wav')
        if a.no_turbo:
            wav = model.generate(text, audio_prompt_path=a.sample,
                                 exaggeration=a.exaggeration, cfg_weight=a.cfg)
        else:
            wav = model.generate(text, audio_prompt_path=a.sample)
        sf.write(wav_path, wav.squeeze(0).cpu().numpy(), model.sr)
        # a short breath of silence after the title, so the first verse does
        # not tread on it
        os.system('ffmpeg -loglevel error -y -i "%s" -af "apad=pad_dur=0.45" -c:a aac -b:a %s -ac 1 '
                  '-movflags +faststart "%s"' % (wav_path, a.bitrate, m4a))
        os.remove(wav_path)
        if n % 50 == 0 or n == len(jobs):
            print('  %d/%d' % (n, len(jobs)))
    print('done. Run make_manifest.py, then upload (titles.sh does both).')


if __name__ == '__main__':
    main()
