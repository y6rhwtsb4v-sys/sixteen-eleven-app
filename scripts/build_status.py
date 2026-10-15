#!/usr/bin/env python3
"""Read-only: the newest builds in App Store Connect, whether Apple has
finished processing them, and whether TestFlight testers can install them.
Prints each as a notice on the run page."""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import asc_products as A
app = A.call('GET', '/v1/apps?filter[bundleId]=' + A.BUNDLE_ID)['data'][0]['id']
bs = A.call('GET', '/v1/builds?filter[app]=%s&sort=-uploadedDate&limit=8&include=buildBetaDetail,preReleaseVersion' % app)
inc = {(i['type'], i['id']): i for i in bs.get('included', [])}
for b in bs['data']:
    at = b['attributes']
    det = (b.get('relationships', {}).get('buildBetaDetail', {}) or {}).get('data')
    beta = inc.get(('buildBetaDetails', det['id']))['attributes'] if det and ('buildBetaDetails', det['id']) in inc else {}
    print('::notice title=build %s::processing %s · uploaded %s · expired %s · internal %s · external %s' % (
        at.get('version'), at.get('processingState'), (at.get('uploadedDate') or '')[:16], at.get('expired'),
        beta.get('internalBuildState'), beta.get('externalBuildState')))
