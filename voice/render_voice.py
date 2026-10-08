#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Render the scriptures in your own voice.

Run this on a machine with a GPU. It clones your voice from one short sample,
reads every chapter you ask for, and writes audio files plus a manifest that
the app knows how to play.

    pip install chatterbox-tts soundfile numpy
    python render_voice.py --sample my_voice.wav --books "John,Psalms" --out audio/

Why Chatterbox: it is MIT licensed, so the output can ship in a paid or
store-published app, and it clones from a few seconds of reference audio.

Checked again September 2026, because this moves:
  Chatterbox (Resemble AI)  MIT            safe to ship. Use Chatterbox-Turbo:
                                           350M params, one-step decoder, far
                                           less VRAM than the original.
  Kokoro / Orpheus / Dia    Apache 2.0     safe, but not voice cloners in the
                                           sense wanted here.
  Fish Speech / Fish S2     paid licence   NO LONGER a free commercial option;
                                           the weights are open but commercial
                                           use needs a licence from Fish Audio.
  XTTS v2, F5-TTS           non-commercial rules them out for a store app.

Chatterbox watermarks its output by default. Leave that on: it is the honest
thing to do and costs nothing.

The text shaping below is a direct port of speechText() in the app, so what is
rendered matches what the app would have said with its own voice: colons become
breaths, the divine name is softened, passages land on a falling cadence.
"""
import argparse, json, os, re, sys, unicodedata

# ---------------------------------------------------------------- text shaping
def speech_text(t):
    """Port of the app's speechText(). Keep the two in step."""
    if not t:
        return ''
    s = str(t)
    s = re.sub(r'\bLORD\b', 'Lord', s)
    s = re.sub(r'\bGOD\b', 'God', s)
    s = re.sub(r"\bLORD'S\b", "Lord's", s)
    s = s.replace('\u00b6', ' ')
    s = re.sub(r'([a-z,])\s*:\s+', r'\1, ', s)      # a colon is a breath
    s = re.sub(r'([a-z])\s*;\s+', r'\1, ', s)
    s = re.sub(r'\s*--\s*', ', ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    # a verse ending on a colon is a hinge into the next verse, not a stop
    s = re.sub(r'[:;,]+$', '', s)
    if s and s[-1] not in '.!?':
        s += '.'
    return s


def passages(verses, target=380, cap=560):
    """Group verses into blocks. Longer blocks give the model more context for
    stress and cadence, and leave fewer seams between clips. But the model
    stops at 1000 speech tokens (about 40 s): Psalm 23, 595 characters, took
    918 of them, so blocks are kept near 380 characters, 560 at most."""
    out, cur, first = [], '', 1
    for i, v in enumerate(verses, 1):
        t = speech_text(v)
        if not t:
            continue
        if cur and len(cur) + len(t) + 1 > cap:
            out.append((first, i - 1, cur)); cur, first = t, i
        else:
            cur = (cur + ' ' + t).strip() if cur else t
            if not cur:
                first = i
        if len(cur) >= target:
            out.append((first, i, cur)); cur, first = '', i + 1
    if cur:
        out.append((first, len(verses), cur))
    return out


# ---------------------------------------------------------------- rendering
def load_model(device, turbo=True):
    """Chatterbox-Turbo when the installed package has it (smaller, faster),
    otherwise the original model. Both clone from the same reference clip."""
    if turbo:
        try:
            from chatterbox.tts_turbo import ChatterboxTurboTTS
            print('loading Chatterbox-Turbo\u2026')
            return ChatterboxTurboTTS.from_pretrained(device=device)
        except Exception as e:
            print('  (Turbo not available here: %s; using Chatterbox)' % e)
    from chatterbox.tts import ChatterboxTTS
    print('loading Chatterbox\u2026')
    return ChatterboxTTS.from_pretrained(device=device)


def check_sample(path):
    """A bad reference clip is the single biggest cause of a bad clone."""
    try:
        import soundfile as sf
    except ImportError:
        return None, ['soundfile not installed; skipping sample check']
    info = sf.info(path)
    notes = []
    if info.duration < 8:
        notes.append('sample is %.1fs; aim for 15-30s' % info.duration)
    if info.duration > 90:
        notes.append('sample is long; 15-30s of your clearest reading is better')
    if info.channels > 1:
        notes.append('sample is stereo; mono is safer')
    if info.samplerate < 22050:
        notes.append('sample is %d Hz; 24 kHz or better is preferable' % info.samplerate)
    return info, notes


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--sample', required=True, help='your voice, 15-30s wav')
    ap.add_argument('--bible', default='', help='one JSON of every book (old layout)')
    ap.add_argument('--books-dir', default='data/books', help='a JSON per book, as in the source')
    ap.add_argument('--meta', default='data/meta.json')
    ap.add_argument('--books', default='', help='comma separated, or blank for all')
    ap.add_argument('--chapter', default='', help='just one, to hear it first: "Psalms:23"')
    ap.add_argument('--out', default='audio')
    ap.add_argument('--device', default='cuda')
    ap.add_argument('--bitrate', default='48k')
    ap.add_argument('--base', default='', help='where the files will be served from, e.g. '
                    'https://audio.example.com/v1/ (written into the manifest)')
    ap.add_argument('--no-turbo', action='store_true')
    ap.add_argument('--exaggeration', type=float, default=0.5,
                    help='original model only: expressiveness, 0.25-1.0')
    ap.add_argument('--cfg', type=float, default=0.5,
                    help='original model only: lower is slower and closer to the sample pace')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()

    info, notes = check_sample(a.sample) if not a.dry_run else (None, [])
    if info:
        print('reference: %.1fs, %d Hz, %d channel(s)'
              % (info.duration, info.samplerate, info.channels))
    for n in notes:
        print('  note:', n)

    meta = json.load(open(a.meta, encoding='utf-8'))
    names = [b['name'] for b in meta['books']]
    if a.bible:
        bible = json.load(open(a.bible, encoding='utf-8'))
    else:
        bible = {str(i): json.load(open(os.path.join(a.books_dir, '%d.json' % i), encoding='utf-8'))
                 for i in range(len(names))}
    keys = list(bible.keys())
    only_ch = None
    if a.chapter:
        bk, _, cn = a.chapter.rpartition(':')
        a.books, only_ch = bk, cn
    want = [x.strip() for x in a.books.split(',') if x.strip()] or names
    unknown = [w for w in want if w not in names]
    if unknown:
        sys.exit('unknown book(s): %s' % ', '.join(unknown))

    jobs = []
    for name in want:
        bi = names.index(name)
        chapters = bible[keys[bi]]
        for cn in sorted(chapters, key=int):
            if only_ch and cn != only_ch:
                continue
            for k, (v1, v2, text) in enumerate(passages(chapters[cn])):
                jobs.append(dict(book=name, bi=bi, ch=int(cn), part=k,
                                 v1=v1, v2=v2, text=text))
    chars = sum(len(j['text']) for j in jobs)
    print('%d chapters, %d passages, %d characters' % (
        len({(j['book'], j['ch']) for j in jobs}), len(jobs), chars))
    print('rough audio: %.1f hours' % (chars / 900.0 / 60.0))
    if a.dry_run:
        print('\nfirst passage:\n ', jobs[0]['text'][:300])
        return

    import soundfile as sf
    model = load_model(a.device, not a.no_turbo)
    os.makedirs(a.out, exist_ok=True)
    manifest = {}
    for n, j in enumerate(jobs, 1):
        slug = re.sub(r'[^a-z0-9]+', '-', j['book'].lower()).strip('-')
        stem = '%s-%03d-%02d' % (slug, j['ch'], j['part'])
        wav_path = os.path.join(a.out, stem + '.wav')
        m4a_path = os.path.join(a.out, stem + '.m4a')
        if not os.path.exists(m4a_path):          # resumable: done files are kept
            if a.no_turbo:
                wav = model.generate(j['text'], audio_prompt_path=a.sample,
                                     exaggeration=a.exaggeration, cfg_weight=a.cfg)
            else:
                wav = model.generate(j['text'], audio_prompt_path=a.sample)
            sf.write(wav_path, wav.squeeze(0).cpu().numpy(), model.sr)
            # AAC in .m4a plays everywhere, including Safari on iOS 12, which
            # cannot play Opus/Ogg at all. 48k mono is clean for a voice.
            os.system('ffmpeg -loglevel error -y -i "%s" -c:a aac -b:a %s -ac 1 '
                      '-movflags +faststart "%s"' % (wav_path, a.bitrate, m4a_path))
            os.remove(wav_path)
        manifest.setdefault(j['book'], {}).setdefault(str(j['ch']), []).append(
            dict(f=stem + '.m4a', v1=j['v1'], v2=j['v2']))
        if n % 25 == 0 or n == len(jobs):
            print('  %d/%d' % (n, len(jobs)))

    # merge with what was rendered before, so books can be done a few at a time
    mpath = os.path.join(a.out, 'manifest.json')
    if os.path.exists(mpath):
        old = json.load(open(mpath))
        for bk, chs in manifest.items():
            old.setdefault(bk, {}).update(chs)
        manifest = old
    if a.base:
        manifest['_base'] = a.base if a.base.endswith('/') else a.base + '/'
    json.dump(manifest, open(mpath, 'w'), separators=(',', ':'))
    total = sum(os.path.getsize(os.path.join(a.out, f))
                for f in os.listdir(a.out) if f.endswith('.m4a'))
    print('\ndone: %d files, %.1f MB' % (len(jobs), total / 1024 / 1024))
    print('upload the folder (voice/upload_r2.sh), then put manifest.json in the '
          'app at assets/audio/manifest.json')


if __name__ == '__main__':
    main()
