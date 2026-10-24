// After a deploy: store, read back, refuse a stale write, and delete one
// throwaway file on the live locker, with the app's own origin.
const base = process.argv[2] || 'https://sync.sixteeneleven.bible/api/sync/';
const rnd = crypto.getRandomValues(new Uint8Array(32));
const tok = [...rnd].map((b) => b.toString(16).padStart(2, '0')).join('');
const id = [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(tok)))].map((b) => b.toString(16).padStart(2, '0')).join('');
const H = { Authorization: 'Bearer ' + tok, Origin: 'capacitor://localhost' };
const out = [];
const ok = (name, cond) => { out.push((cond ? 'ok ' : 'FAIL ') + name); if (!cond) process.exitCode = 1; };
let r = await fetch(base + id, { headers: H }); ok('empty is 404', r.status === 404);
r = await fetch(base + id, { method: 'PUT', headers: { ...H, 'If-None-Match': '*' }, body: new Uint8Array([1, 2, 3]) });
const etag = r.headers.get('etag'); ok('create', r.status === 200 && !!etag);
ok('CORS for the iPhone app', r.headers.get('access-control-allow-origin') === 'capacitor://localhost');
r = await fetch(base + id, { headers: H }); ok('read back', r.status === 200 && (await r.arrayBuffer()).byteLength === 3);
r = await fetch(base + id, { method: 'PUT', headers: { ...H, 'If-Match': '"stale"' }, body: new Uint8Array([9]) }); ok('stale write refused', r.status === 412);
r = await fetch(base + id, { headers: { ...H, Authorization: 'Bearer ' + 'f'.repeat(64) } }); ok('wrong token refused', r.status === 403);
r = await fetch(base + id, { method: 'DELETE', headers: H }); ok('delete', r.status === 204);
console.log(out.join('\n'));
