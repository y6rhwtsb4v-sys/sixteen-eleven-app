#!/usr/bin/env python3
"""Launch settings in App Store Connect and the Play Console, done through
their APIs so they need no one at a computer. Safe to run again.

  Apple  - Study Monthly to $4.99 in every storefront
         - Study Yearly's description says it carries the narration
         - keywords and promotional text on the version being prepared
         - billing grace period: 16 days, every renewal
  Google - Study Monthly's base plan to $4.99 in every region
         - grace period on both subscriptions
         - the store build (AAB, if given) to the closed test track

Each result is printed as a GitHub annotation, so it shows on the run's page.
Needs ASC_KEY_ID / ASC_ISSUER_ID / ASC_KEY_P8 and PLAY_SERVICE_ACCOUNT_JSON.
"""
import glob, json, os, sys, time
import requests

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
PKG = 'com.sixteeneleven.bible'
KEYWORDS = 'king james,audio,narrated,strongs,concordance,1611,maccabees,deuterocanon,scripture,hebrew,greek'
PROMO = ('Founders price until January 1: Study and the narrated Bible, yours for good, '
         'with one payment and no subscription.')
YEARLY_DESC = 'Study tools and the narrated Bible, every year.'
RESULTS = []


def note(ok, msg):
    RESULTS.append((ok, msg))
    print(('::notice title=done::' if ok else '::warning title=not done::') + msg.replace('\n', ' '), flush=True)


def guard(label, fn):
    try:
        r = fn()
        note(True, label + ((': ' + r) if isinstance(r, str) and r else ''))
    except Exception as e:
        note(False, label + ': ' + ' '.join(str(e).split())[:600])


# ------------------------------------------------------------------ Apple
def apple():
    import asc_products as A
    app = A.call('GET', '/v1/apps?filter[bundleId]=' + A.BUNDLE_ID)['data'][0]['id']
    groups = A.all_pages('/v1/apps/%s/subscriptionGroups?limit=50' % app)[0]
    subs = {}
    for g in groups:
        for s in A.all_pages('/v1/subscriptionGroups/%s/subscriptions?limit=50' % g['id'])[0]:
            subs[s['attributes']['productId']] = s['id']

    def monthly_price():
        sid = subs['study_monthly']
        pts = A.all_pages('/v1/subscriptions/%s/pricePoints?filter[territory]=USA&limit=200' % sid)[0]
        us = next(p for p in pts if p['attributes']['customerPrice'] == '4.99')
        eq, _ = A.all_pages('/v1/subscriptionPricePoints/%s/equalizations?limit=200&include=territory' % us['id'])
        points = [(us['id'], 'USA')] + [(p['id'], p['relationships']['territory']['data']['id'])
                                        for p in eq if p.get('relationships', {}).get('territory', {}).get('data')]
        n, bad = 0, []
        for ppid, terr in points:
            try:
                A.call('POST', '/v1/subscriptionPrices', {'data': {
                    'type': 'subscriptionPrices', 'attributes': {'preserveCurrentPrice': False},
                    'relationships': {'subscription': A.rel('subscriptions', sid),
                                      'subscriptionPricePoint': A.rel('subscriptionPricePoints', ppid)}}})
                n += 1
            except Exception as e:
                bad.append(terr)
                if terr == 'USA':
                    raise
        return '%d of %d storefronts%s' % (n, len(points), (', not: ' + ','.join(bad[:8])) if bad else '')
    guard('Apple: Study Monthly set to $4.99', monthly_price)

    def yearly_desc():
        sid = subs['study_annual']
        locs = A.all_pages('/v1/subscriptions/%s/subscriptionLocalizations' % sid)[0]
        for l in locs:
            A.call('PATCH', '/v1/subscriptionLocalizations/' + l['id'], {'data': {
                'type': 'subscriptionLocalizations', 'id': l['id'], 'attributes': {'description': YEARLY_DESC}}})
        return '%d language(s)' % len(locs)
    guard('Apple: Study Yearly description mentions the narration', yearly_desc)

    def listing():
        vs = A.all_pages('/v1/apps/%s/appStoreVersions?filter[platform]=IOS&limit=20' % app)[0]
        editable = [v for v in vs if v['attributes']['appStoreState'] in
                    ('PREPARE_FOR_SUBMISSION', 'DEVELOPER_REJECTED', 'REJECTED', 'METADATA_REJECTED',
                     'WAITING_FOR_REVIEW', 'INVALID_BINARY')]
        if not editable:
            raise RuntimeError('no version open for editing (states: %s)' % ','.join(v['attributes']['appStoreState'] for v in vs))
        v = editable[0]
        locs = A.all_pages('/v1/appStoreVersions/%s/appStoreVersionLocalizations' % v['id'])[0]
        for l in locs:
            A.call('PATCH', '/v1/appStoreVersionLocalizations/' + l['id'], {'data': {
                'type': 'appStoreVersionLocalizations', 'id': l['id'],
                'attributes': {'keywords': KEYWORDS, 'promotionalText': PROMO}}})
        return 'version %s, %s' % (v['attributes']['versionString'], ','.join(l['attributes']['locale'] for l in locs))
    guard('Apple: keywords and promotional text', listing)

    def grace():
        try:
            g = A.call('GET', '/v1/apps/%s/subscriptionGracePeriod' % app)['data']
        except Exception as e:
            raise RuntimeError('could not read the grace period: ' + str(e))
        A.call('PATCH', '/v1/subscriptionGracePeriods/' + g['id'], {'data': {
            'type': 'subscriptionGracePeriods', 'id': g['id'],
            'attributes': {'optIn': True, 'sandboxOptIn': True, 'duration': 'SIXTEEN_DAYS',
                           'renewalType': 'ALL_RENEWALS'}}})
        return '16 days'
    guard('Apple: billing grace period on', grace)

    def uk():
        try:
            av = A.call('GET', '/v1/apps/%s/appAvailabilityV2' % app)['data']
            ts = A.all_pages('/v2/appAvailabilities/%s/territoryAvailabilities?limit=200&include=territory' % av['id'])[0]
            gb = [t for t in ts if t.get('relationships', {}).get('territory', {}).get('data', {}).get('id') == 'GBR']
            if gb:
                return 'United Kingdom is ' + ('ON (turn it off by hand)' if gb[0]['attributes'].get('available') else 'off')
            return 'no United Kingdom entry found'
        except Exception as e:
            return 'could not check (%s)' % str(e)[:120]
    guard('Apple: UK storefront check', uk)


# ------------------------------------------------------------------ Google
def google_token():
    from google.oauth2 import service_account
    import google.auth.transport.requests as gr
    info = json.loads(os.environ['PLAY_SERVICE_ACCOUNT_JSON'])
    cred = service_account.Credentials.from_service_account_info(
        info, scopes=['https://www.googleapis.com/auth/androidpublisher'])
    cred.refresh(gr.Request())
    return cred.token


def google(aab):
    tok = google_token()
    H = {'Authorization': 'Bearer ' + tok}
    B = 'https://androidpublisher.googleapis.com/androidpublisher/v3/applications/' + PKG

    def req(method, url, **kw):
        r = requests.request(method, url, headers=dict(H, **kw.pop('headers', {})), timeout=300, **kw)
        if r.status_code >= 300:
            raise RuntimeError('%s %s -> %s %s' % (method, url.split('/applications/')[-1][:80], r.status_code, r.text[:500]))
        return r.json() if r.text else {}

    def money(units_str):
        u, _, frac = units_str.partition('.')
        return {'currencyCode': 'USD', 'units': u, 'nanos': int((frac + '000000000')[:9])}

    def subs_update():
        conv = req('POST', B + '/pricing:convertRegionPrices', json={'price': money('4.99')})
        prices = conv.get('convertedRegionPrices', {})
        done = []
        for pid in ('study_monthly', 'study_annual'):
            sub = req('GET', B + '/subscriptions/' + pid)
            for bp in sub.get('basePlans', []):
                arb = bp.get('autoRenewingBasePlanType')
                if arb is not None:
                    arb['gracePeriodDuration'] = 'P14D'
                if pid == 'study_monthly':
                    for rc in bp.get('regionalConfigs', []):
                        p = prices.get(rc['regionCode'])
                        if p and p.get('price'):
                            rc['price'] = p['price']
                    if bp.get('otherRegionsConfig') and conv.get('convertedOtherRegionsPrice'):
                        o = conv['convertedOtherRegionsPrice']
                        bp['otherRegionsConfig']['usdPrice'] = o.get('usdPrice', bp['otherRegionsConfig'].get('usdPrice'))
                        bp['otherRegionsConfig']['eurPrice'] = o.get('eurPrice', bp['otherRegionsConfig'].get('eurPrice'))
            req('PATCH', B + '/subscriptions/%s?updateMask=basePlans&regionsVersion.version=2022/02' % pid, json=sub)
            done.append(pid)
        return ', '.join(done) + ' (monthly to $4.99; 14-day grace period on both)'
    guard('Google: subscription prices and grace period', subs_update)

    if aab:
        def upload():
            edit = req('POST', B + '/edits', json={})['id']
            up = 'https://androidpublisher.googleapis.com/upload/androidpublisher/v3/applications/%s/edits/%s/bundles?uploadType=media' % (PKG, edit)
            with open(aab, 'rb') as f:
                vc = req('POST', up, data=f, headers={'Content-Type': 'application/octet-stream'})['versionCode']
            body = {'track': 'alpha', 'releases': [{
                'name': '1.0.0 (%s)' % vc, 'versionCodes': [str(vc)], 'status': 'completed',
                'releaseNotes': [{'language': 'en-US', 'text':
                    'A welcome on first open, Founders Lifetime first on the plans, and re-recorded narration.'}]}]}
            try:
                req('PUT', B + '/edits/%s/tracks/alpha' % edit, json=body)
            except RuntimeError as e:
                if 'draft' not in str(e).lower():
                    raise
                body['releases'][0]['status'] = 'draft'
                req('PUT', B + '/edits/%s/tracks/alpha' % edit, json=body)
            req('POST', B + '/edits/%s:commit' % edit)
            return 'version code %s on the closed test track (%s)' % (vc, body['releases'][0]['status'])
        guard('Google: store build to closed testing', upload)


if __name__ == '__main__':
    what = sys.argv[1] if len(sys.argv) > 1 else 'both'
    aabs = glob.glob('aab/**/*.aab', recursive=True)
    if what in ('both', 'apple'):
        guard('Apple: connect', lambda: apple() or '')
    if what in ('both', 'google'):
        guard('Google: connect', lambda: google(aabs[0] if aabs else None) or '')
    print('\n'.join(('ok   ' if ok else 'FAIL ') + m for ok, m in RESULTS))
