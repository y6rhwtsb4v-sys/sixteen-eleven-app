#!/usr/bin/env python3
"""Add the rendered chapter titles to the live manifest, leaving every chapter
entry exactly as it is. Reads the manifest as the CDN serves it now."""
import json, os, re, sys, time, urllib.request
BASE = 'https://pub-0d19c7318a7940f3ad2c1f46e7d3ee17.r2.dev/v1/'
out, meta = sys.argv[1], sys.argv[2]
man = json.load(urllib.request.urlopen(BASE + 'manifest.json?t=%d' % time.time(), timeout=60))
names = [b['name'] for b in json.load(open(meta, encoding='utf-8'))['books']]
have = set(os.listdir(out))
titles = {}
for name in names:
    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    for f in sorted(have):
        m = re.match(r'^%s-(\d{3})-t\.m4a$' % re.escape(slug), f)
        if m:
            titles.setdefault(name, {})[str(int(m.group(1)))] = f
man['_titles'] = titles
json.dump(man, open('manifest.json', 'w'), separators=(',', ':'))
print('chapters kept: %d books; titles: %d' % (len([k for k in man if not k.startswith('_')]),
      sum(len(v) for v in titles.values())))
