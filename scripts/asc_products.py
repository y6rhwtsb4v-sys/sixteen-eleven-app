#!/usr/bin/env python3
"""Creates the in-app products in App Store Connect through its API.

Safe to run again: each piece (group, product, name, prices, availability,
free trial, review screenshot) is made only if it is missing, so a run that
stops half way can simply be repeated.

  Study (subscription group)
    study_annual   $29.99 a year, 2-week free trial
    study_monthly  $3.99 a month
  lifetime_founders  $79.99  non-consumable
  audio_bible        $19.99  non-consumable
  tip_small / tip_medium / tip_large  $1.99 / $4.99 / $9.99  consumable

Prices are set in US dollars; every other storefront gets Apple's equivalent
price. Needs ASC_KEY_ID, ASC_ISSUER_ID, ASC_KEY_P8 (the same secrets as the
iOS build).
"""
import hashlib, json, os, sys, time
import jwt, requests

BUNDLE_ID = 'com.sixteeneleven.bible'
API = 'https://api.appstoreconnect.apple.com'
HERE = os.path.dirname(os.path.abspath(__file__))
SHOT = os.path.join(HERE, '..', 'store-review', 'paywall.png')
NOTE = ('Opens from any "Study" feature (split view, word study, tags, folders, study '
        'sheets, atlas plates) or Settings > Sixteen Eleven Study. No sign-in needed; '
        'test with a sandbox account. Restore purchases is on the same screen.')

SUBS = [
    dict(pid='study_annual', ref='Study Annual', period='ONE_YEAR', price='29.99', trial=True,
         name='Study, yearly', desc='Word study, study sheets, atlas and more.'),
    dict(pid='study_monthly', ref='Study Monthly', period='ONE_MONTH', price='3.99', trial=False,
         name='Study, monthly', desc='Word study, study sheets, atlas and more.'),
]
IAPS = [
    dict(pid='lifetime_founders', ref='Founders Lifetime', kind='NON_CONSUMABLE', price='79.99',
         name='Founders Lifetime', desc='Study for good, plus the narrated Bible.'),
    dict(pid='audio_bible', ref='Narrated Bible', kind='NON_CONSUMABLE', price='19.99',
         name='Narrated Bible', desc='The whole Bible read aloud. Yours to keep.'),
    dict(pid='tip_small', ref='Small tip', kind='CONSUMABLE', price='1.99',
         name='Small tip', desc='Keep the lamp lit. A small thank-you.'),
    dict(pid='tip_medium', ref='Medium tip', kind='CONSUMABLE', price='4.99',
         name='Medium tip', desc='Keep the lamp lit. A thank-you.'),
    dict(pid='tip_large', ref='Large tip', kind='CONSUMABLE', price='9.99',
         name='Large tip', desc='Keep the lamp lit. A generous thank-you.'),
]

FAILED = []
_tok = {'t': None, 'at': 0}


def token():
    if not _tok['t'] or time.time() - _tok['at'] > 600:
        now = int(time.time())
        _tok['t'] = jwt.encode({'iss': os.environ['ASC_ISSUER_ID'], 'iat': now, 'exp': now + 1100,
                                'aud': 'appstoreconnect-v1'},
                               os.environ['ASC_KEY_P8'], algorithm='ES256',
                               headers={'kid': os.environ['ASC_KEY_ID'], 'typ': 'JWT'})
        _tok['at'] = time.time()
    return _tok['t']


def call(method, path, body=None, ok=(200, 201, 204)):
    url = path if path.startswith('http') else API + path
    for attempt in range(4):
        r = requests.request(method, url, json=body, timeout=60,
                             headers={'Authorization': 'Bearer ' + token(), 'Content-Type': 'application/json'})
        if r.status_code == 429 or r.status_code >= 500:
            time.sleep(2 + attempt * 3); continue
        break
    if r.status_code not in ok:
        raise RuntimeError('%s %s -> %s %s' % (method, path.split('?')[0], r.status_code, r.text[:600]))
    return r.json() if r.text else {}


def all_pages(path):
    out, nxt, inc = [], path, []
    while nxt:
        j = call('GET', nxt)
        out += j.get('data', []); inc += j.get('included', [])
        nxt = (j.get('links') or {}).get('next')
    return out, inc


def rel(kind, id_):
    return {'data': {'type': kind, 'id': id_}}


def step(label, fn):
    try:
        r = fn()
        print('  ok   ' + label + (('  (' + r + ')') if isinstance(r, str) else ''), flush=True)
        return True
    except Exception as e:
        print('  FAIL ' + label + ': ' + str(e), flush=True)
        FAILED.append(label)
        return False


def upload_screenshot(create_path, rel_name, rel_type, owner_id, patch_path):
    data = open(SHOT, 'rb').read()
    res = call('POST', create_path, {'data': {
        'type': create_path.rsplit('/', 1)[1],
        'attributes': {'fileName': 'paywall.png', 'fileSize': len(data)},
        'relationships': {rel_name: rel(rel_type, owner_id)}}})
    d = res['data']
    for op in d['attributes']['uploadOperations']:
        chunk = data[op['offset']:op['offset'] + op['length']]
        h = {x['name']: x['value'] for x in op.get('requestHeaders') or []}
        r = requests.request(op['method'], op['url'], data=chunk, headers=h, timeout=120)
        if r.status_code >= 300:
            raise RuntimeError('upload %s' % r.status_code)
    call('PATCH', patch_path + '/' + d['id'], {'data': {
        'type': d['type'], 'id': d['id'],
        'attributes': {'uploaded': True, 'sourceFileChecksum': hashlib.md5(data).hexdigest()}}})
    return 'uploaded'


def main():
    apps = call('GET', '/v1/apps?filter[bundleId]=' + BUNDLE_ID)['data']
    if not apps:
        sys.exit('No app with bundle id ' + BUNDLE_ID)
    app = apps[0]['id']
    territories = [t['id'] for t in all_pages('/v1/territories?limit=200')[0]]
    print('App %s, %d storefronts' % (app, len(territories)))

    # ---------------- the Study subscription group
    groups = all_pages('/v1/apps/%s/subscriptionGroups?limit=50' % app)[0]
    group = next((g for g in groups if g['attributes']['referenceName'] == 'Study'), None)
    if not group:
        group = call('POST', '/v1/subscriptionGroups', {'data': {
            'type': 'subscriptionGroups', 'attributes': {'referenceName': 'Study'},
            'relationships': {'app': rel('apps', app)}}})['data']
        print('  ok   group Study (made)')
    gid = group['id']
    glocs = all_pages('/v1/subscriptionGroups/%s/subscriptionGroupLocalizations' % gid)[0]
    if not any(l['attributes']['locale'] == 'en-US' for l in glocs):
        step('group name', lambda: call('POST', '/v1/subscriptionGroupLocalizations', {'data': {
            'type': 'subscriptionGroupLocalizations',
            'attributes': {'name': 'Sixteen Eleven Study', 'locale': 'en-US'},
            'relationships': {'subscriptionGroup': rel('subscriptionGroups', gid)}}}) and None)

    existing = {s['attributes']['productId']: s for s in
                all_pages('/v1/subscriptionGroups/%s/subscriptions?limit=50' % gid)[0]}
    for s in SUBS:
        print(s['pid'])
        sub = existing.get(s['pid'])
        if not sub:
            try:
                sub = call('POST', '/v1/subscriptions', {'data': {
                    'type': 'subscriptions',
                    'attributes': {'name': s['ref'], 'productId': s['pid'], 'subscriptionPeriod': s['period'],
                                   'familySharable': False, 'reviewNote': NOTE, 'groupLevel': 1},
                    'relationships': {'group': rel('subscriptionGroups', gid)}}})['data']
                print('  ok   made')
            except Exception as e:
                print('  FAIL make: %s' % e); FAILED.append(s['pid']); continue
        sid = sub['id']
        locs = all_pages('/v1/subscriptions/%s/subscriptionLocalizations' % sid)[0]
        if not any(l['attributes']['locale'] == 'en-US' for l in locs):
            step('name and description', lambda: call('POST', '/v1/subscriptionLocalizations', {'data': {
                'type': 'subscriptionLocalizations',
                'attributes': {'name': s['name'], 'locale': 'en-US', 'description': s['desc']},
                'relationships': {'subscription': rel('subscriptions', sid)}}}) and None)

        # prices: the US price, and Apple's equivalent in every other storefront
        have = all_pages('/v1/subscriptions/%s/prices?limit=200&include=territory' % sid)[0]
        if not have:
            def prices():
                pts = all_pages('/v1/subscriptions/%s/pricePoints?filter[territory]=USA&limit=200' % sid)[0]
                us = next((p for p in pts if p['attributes']['customerPrice'] == s['price']), None)
                if not us:
                    raise RuntimeError('no US price point of %s' % s['price'])
                eq, _ = all_pages('/v1/subscriptionPricePoints/%s/equalizations?limit=200&include=territory' % us['id'])
                points = [(us['id'], 'USA')] + [
                    (p['id'], p['relationships']['territory']['data']['id']) for p in eq
                    if p.get('relationships', {}).get('territory', {}).get('data')]
                n = 0
                for ppid, terr in points:
                    try:
                        call('POST', '/v1/subscriptionPrices', {'data': {
                            'type': 'subscriptionPrices', 'attributes': {'preserveCurrentPrice': False},
                            'relationships': {'subscription': rel('subscriptions', sid),
                                              'subscriptionPricePoint': rel('subscriptionPricePoints', ppid),
                                              'territory': rel('territories', terr)}}})
                        n += 1
                    except Exception as e:
                        print('       %s: %s' % (terr, str(e)[:160]))
                return '%d storefronts' % n
            step('prices from $' + s['price'], prices)

        try:
            call('GET', '/v1/subscriptions/%s/subscriptionAvailability' % sid)
            got_av = True
        except Exception:
            got_av = False
        if not got_av:
            step('available everywhere', lambda: call('POST', '/v1/subscriptionAvailabilities', {'data': {
                'type': 'subscriptionAvailabilities', 'attributes': {'availableInNewTerritories': True},
                'relationships': {'subscription': rel('subscriptions', sid),
                                  'availableTerritories': {'data': [{'type': 'territories', 'id': t}
                                                                    for t in territories]}}}}) and None)

        if s['trial']:
            offers = all_pages('/v1/subscriptions/%s/introductoryOffers?limit=200' % sid)[0]
            if not offers:
                def trial():
                    priced = [p['relationships']['territory']['data']['id'] for p in
                              all_pages('/v1/subscriptions/%s/prices?limit=200&include=territory' % sid)[0]
                              if p.get('relationships', {}).get('territory', {}).get('data')]
                    n = 0
                    for terr in sorted(set(priced)):
                        try:
                            call('POST', '/v1/subscriptionIntroductoryOffers', {'data': {
                                'type': 'subscriptionIntroductoryOffers',
                                'attributes': {'duration': 'TWO_WEEKS', 'offerMode': 'FREE_TRIAL',
                                               'numberOfPeriods': 1},
                                'relationships': {'subscription': rel('subscriptions', sid),
                                                  'territory': rel('territories', terr)}}})
                            n += 1
                        except Exception as e:
                            print('       %s: %s' % (terr, str(e)[:160]))
                    return '%d storefronts' % n
                step('2-week free trial', trial)

        try:
            shot = call('GET', '/v1/subscriptions/%s/appStoreReviewScreenshot' % sid).get('data')
        except Exception:
            shot = None
        if not shot:
            step('review screenshot', lambda: upload_screenshot(
                '/v1/subscriptionAppStoreReviewScreenshots', 'subscription', 'subscriptions', sid,
                '/v1/subscriptionAppStoreReviewScreenshots'))

    # ---------------- one-time products
    have = {p['attributes']['productId']: p for p in
            all_pages('/v1/apps/%s/inAppPurchasesV2?limit=200' % app)[0]}
    for p in IAPS:
        print(p['pid'])
        iap = have.get(p['pid'])
        if not iap:
            try:
                iap = call('POST', '/v2/inAppPurchases', {'data': {
                    'type': 'inAppPurchases',
                    'attributes': {'name': p['ref'], 'productId': p['pid'], 'inAppPurchaseType': p['kind'],
                                   'reviewNote': NOTE, 'familySharable': False},
                    'relationships': {'app': rel('apps', app)}}})['data']
                print('  ok   made')
            except Exception as e:
                print('  FAIL make: %s' % e); FAILED.append(p['pid']); continue
        iid = iap['id']
        locs = all_pages('/v2/inAppPurchases/%s/inAppPurchaseLocalizations' % iid)[0]
        if not any(l['attributes']['locale'] == 'en-US' for l in locs):
            step('name and description', lambda: call('POST', '/v1/inAppPurchaseLocalizations', {'data': {
                'type': 'inAppPurchaseLocalizations',
                'attributes': {'name': p['name'], 'locale': 'en-US', 'description': p['desc']},
                'relationships': {'inAppPurchaseV2': rel('inAppPurchases', iid)}}}) and None)

        try:
            sched = call('GET', '/v2/inAppPurchases/%s/iapPriceSchedule' % iid).get('data')
            priced = bool(all_pages('/v1/inAppPurchasePriceSchedules/%s/manualPrices?limit=5' % sched['id'])[0]) if sched else False
        except Exception:
            priced = False
        if not priced:
            def price():
                pts = all_pages('/v2/inAppPurchases/%s/pricePoints?filter[territory]=USA&limit=200' % iid)[0]
                us = next((x for x in pts if x['attributes']['customerPrice'] == p['price']), None)
                if not us:
                    raise RuntimeError('no US price point of %s' % p['price'])
                call('POST', '/v1/inAppPurchasePriceSchedules', {
                    'data': {'type': 'inAppPurchasePriceSchedules', 'relationships': {
                        'inAppPurchase': rel('inAppPurchases', iid),
                        'baseTerritory': rel('territories', 'USA'),
                        'manualPrices': {'data': [{'type': 'inAppPurchasePrices', 'id': '${price}'}]}}},
                    'included': [{'type': 'inAppPurchasePrices', 'id': '${price}',
                                  'attributes': {'startDate': None},
                                  'relationships': {
                                      'inAppPurchaseV2': rel('inAppPurchases', iid),
                                      'inAppPurchasePricePoint': rel('inAppPurchasePricePoints', us['id'])}}]})
                return '$%s, others follow' % p['price']
            step('price', price)

        try:
            av = call('GET', '/v2/inAppPurchases/%s/inAppPurchaseAvailability' % iid).get('data')
        except Exception:
            av = None
        if not av:
            step('available everywhere', lambda: call('POST', '/v1/inAppPurchaseAvailabilities', {'data': {
                'type': 'inAppPurchaseAvailabilities', 'attributes': {'availableInNewTerritories': True},
                'relationships': {'inAppPurchase': rel('inAppPurchases', iid),
                                  'availableTerritories': {'data': [{'type': 'territories', 'id': t}
                                                                    for t in territories]}}}}) and None)
        try:
            shot = call('GET', '/v2/inAppPurchases/%s/appStoreReviewScreenshot' % iid).get('data')
        except Exception:
            shot = None
        if not shot:
            step('review screenshot', lambda: upload_screenshot(
                '/v1/inAppPurchaseAppStoreReviewScreenshots', 'inAppPurchaseV2', 'inAppPurchases', iid,
                '/v1/inAppPurchaseAppStoreReviewScreenshots'))

    # ---------------- summary
    print('\nProducts now in App Store Connect:')
    for s in all_pages('/v1/subscriptionGroups/%s/subscriptions?limit=50' % gid)[0]:
        print('  %-18s %s' % (s['attributes']['productId'], s['attributes'].get('state')))
    for p in all_pages('/v1/apps/%s/inAppPurchasesV2?limit=200' % app)[0]:
        print('  %-18s %s' % (p['attributes']['productId'], p['attributes'].get('state')))
    if FAILED:
        print('\nSome steps failed: ' + ', '.join(FAILED))
        sys.exit(1)


if __name__ == '__main__':
    main()
