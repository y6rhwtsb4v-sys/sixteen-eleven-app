/* Sixteen Eleven sync: a locker for one encrypted file per sync code.

   The app turns the reader's sync code into two things on the device: a key
   that encrypts their notes, highlights, study sheets and progress, and an
   access token. Only the token ever reaches this Worker, and only the
   encrypted file is stored. The locker's name is the SHA-256 of the token, so
   whoever opens it must hold the token, and the server never sees the code or
   anything it could decrypt with.

     GET    /api/sync/<id>   the stored file, with its ETag
     PUT    /api/sync/<id>   store it: If-Match <etag> to replace, or
                             If-None-Match: * to create; 412 if someone else
                             wrote first (the app then merges and tries again)
     DELETE /api/sync/<id>   remove it ("Turn off and delete the cloud copy")

   Every request carries  Authorization: Bearer <token>.  */

const MAX_BYTES = 10 * 1024 * 1024;
const ALLOWED_ORIGINS = [
  'https://app.sixteeneleven.bible',
  'capacitor://localhost',   // the iPhone and iPad app
  'https://localhost',       // the Android app
  'http://localhost',
];

function cors(req) {
  const o = req.headers.get('Origin') || '';
  const h = {
    'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, If-Match, If-None-Match, Content-Type',
    'Access-Control-Expose-Headers': 'ETag',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
  if (ALLOWED_ORIGINS.includes(o) || /^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(o)) h['Access-Control-Allow-Origin'] = o;
  return h;
}
function reply(req, status, body, extra) {
  const h = Object.assign({ 'Cache-Control': 'no-store' }, cors(req), extra || {});
  if (body === undefined || body === null) return new Response(null, { status, headers: h });
  if (typeof body === 'object' && !(body instanceof ArrayBuffer) && !ArrayBuffer.isView(body)) {
    h['Content-Type'] = 'application/json';
    return new Response(JSON.stringify(body), { status, headers: h });
  }
  return new Response(body, { status, headers: h });
}
async function sha256hex(s) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
function etagOf(o) { return '"' + o.etag + '"'; }
function bareEtag(v) { return String(v || '').trim().replace(/^W\//, '').replace(/^"|"$/g, ''); }

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const m = /^\/api\/sync\/([0-9a-f]{64})$/.exec(url.pathname);
    if (req.method === 'OPTIONS') return reply(req, 204);
    if (url.pathname === '/api/health') return reply(req, 200, { ok: true });
    if (!m) return reply(req, 404, { error: 'not found' });
    const id = m[1];
    const auth = /^Bearer ([0-9a-f]{64})$/.exec(req.headers.get('Authorization') || '');
    if (!auth || (await sha256hex(auth[1])) !== id) return reply(req, 403, { error: 'wrong code' });
    const key = 'v1/' + id;

    if (req.method === 'GET') {
      const o = await env.SYNC.get(key);
      if (!o) return reply(req, 404, { error: 'nothing stored yet' });
      return reply(req, 200, await o.arrayBuffer(), { 'Content-Type': 'application/octet-stream', ETag: etagOf(o) });
    }
    if (req.method === 'PUT') {
      const len = +(req.headers.get('Content-Length') || 0);
      if (len > MAX_BYTES) return reply(req, 413, { error: 'too large' });
      const body = await req.arrayBuffer();
      if (!body.byteLength || body.byteLength > MAX_BYTES) return reply(req, 413, { error: 'empty or too large' });
      const ifMatch = req.headers.get('If-Match');
      const ifNone = req.headers.get('If-None-Match');
      let o;
      if (ifMatch) {
        o = await env.SYNC.put(key, body, { onlyIf: { etagMatches: bareEtag(ifMatch) } });
        if (!o) return reply(req, 412, { error: 'changed on another device' });
      } else if (ifNone === '*') {
        if (await env.SYNC.head(key)) return reply(req, 412, { error: 'already exists' });
        o = await env.SYNC.put(key, body);
      } else {
        return reply(req, 428, { error: 'If-Match or If-None-Match required' });
      }
      return reply(req, 200, { ok: true }, { ETag: etagOf(o) });
    }
    if (req.method === 'DELETE') {
      await env.SYNC.delete(key);
      return reply(req, 204);
    }
    return reply(req, 405, { error: 'method not allowed' });
  },
};
