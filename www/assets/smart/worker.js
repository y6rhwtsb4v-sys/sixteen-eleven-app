/* Smart search, in a worker so typing never stalls.

   A small sentence model (a 6-layer BERT) turns the question into 384 numbers
   that stand for its meaning; every verse was turned into the same kind of
   numbers once, ahead of time (smart/vectors.i8). The verses whose numbers
   point the same way as the question's are the ones that mean the same
   thing, whatever words they use: "Aaron's beard dripping oil" finds "the
   precious ointment ... that ran down upon the beard, even Aaron's beard".

   Everything is here on the phone: the model (smart/model.bin), its word
   list (smart/vocab.txt), the verse numbers and the verse order. Nothing is
   sent anywhere. The model only ranks verses; it never writes any text.

   The meaning is joined with three plainer signals, tuned on questions with
   known answers (smartsearch/exp.py) and checked on 40 the tuning never saw:
   the words typed (with the King James words for modern ones: donkey ->
   ass, love -> charity), the whole chapter's words (a name the question
   gives, like Holofernes, may sit two verses away), and the app's own
   chapter notes.

   Messages in:  {id, q, k}       Messages out: {id, hits:[{b,c,v,s}, ...]}
                 {id, warm:true}                {id, ready:true}
                 {id, embed:q}                  {id, vec:[...]}   (for tests) */
'use strict';
var BASE = (self.location.href.replace(/[^/]*$/, ''));
var M = null, VOCAB = null, VEC = null, META = null, LOADING = null, IX = null, KJV = {};
var MIX = { words: 0.2, chapter: 0.1, notes: 0.1 };

function get(url, kind) {
  return fetch(BASE + url).then(function (r) {
    if (!r.ok) throw new Error(url + ' ' + r.status);
    return kind === 'buf' ? r.arrayBuffer() : kind === 'json' ? r.json() : r.text();
  });
}

function load() {
  if (LOADING) return LOADING;
  LOADING = Promise.all([get('meta.json', 'json'), get('model.bin', 'buf'), get('vocab.txt', 'text'),
                         get('vectors.i8', 'buf'), get('kjv.json', 'json'), get('../data/meta.json', 'json')]).then(function (a) {
    META = a[0]; M = parseModel(a[1]);
    VOCAB = Object.create(null);
    a[2].split('\n').forEach(function (w, i) { if (w.length) VOCAB[w.replace(/\r$/, '')] = i; });
    VEC = new Int8Array(a[3]);
    if (VEC.length !== META.count * META.dims) throw new Error('vectors do not match the verse count');
    KJV = a[4] || {};
    var books = a[5].books;
    return Promise.all(books.map(function (b) { return get('../data/books/' + b.i + '.json', 'json'); }))
      .then(function (texts) { IX = buildIndex(books, texts); });
  });
  LOADING.catch(function () { LOADING = null; });
  return LOADING;
}

/* model.bin: uint32 header length, the JSON header, then each tensor at its
   offset (4-byte aligned). Linear weights are int8, one scale per output row. */
function parseModel(buf) {
  var hl = new DataView(buf).getUint32(0, true);
  var head = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hl)));
  var base = 4 + hl; base += (4 - base % 4) % 4;
  var T = {};
  head.tensors.forEach(function (t) {
    var n = t.shape.reduce(function (a, b) { return a * b; }, 1);
    if (t.dtype === 'i8') {
      T[t.name] = { q: new Int8Array(buf, base + t.offset, n), s: new Float32Array(buf, base + t.soffset, t.shape[0]), shape: t.shape };
    } else {
      T[t.name] = { f: new Float32Array(buf, base + t.offset, n), shape: t.shape };
    }
  });
  return { cfg: head.config, T: T };
}

/* ---------------- the BERT word-piece tokenizer (lower-cased) ---------------- */
function isPunct(c) {
  var cp = c.charCodeAt(0);
  if ((cp >= 33 && cp <= 47) || (cp >= 58 && cp <= 64) || (cp >= 91 && cp <= 96) || (cp >= 123 && cp <= 126)) return true;
  return /[ -⁯⸀-⹿¡-¿×÷]/.test(c);
}
function basic(text) {
  text = String(text).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  text = text.replace(/[\u0000�]/g, '').replace(/[\t\n\r]/g, ' ');
  var out = [], cur = '';
  for (var i = 0; i < text.length; i++) {
    var c = text[i];
    if (/\s/.test(c)) { if (cur) out.push(cur); cur = ''; }
    else if (isPunct(c)) { if (cur) out.push(cur); out.push(c); cur = ''; }
    else cur += c;
  }
  if (cur) out.push(cur);
  return out;
}
function wordpiece(word) {
  if (word.length > 100) return [VOCAB['[UNK]']];
  var ids = [], start = 0;
  while (start < word.length) {
    var end = word.length, id = null;
    while (start < end) {
      var sub = (start > 0 ? '##' : '') + word.slice(start, end);
      if (sub in VOCAB) { id = VOCAB[sub]; break; }
      end--;
    }
    if (id === null) return [VOCAB['[UNK]']];
    ids.push(id); start = end;
  }
  return ids;
}
function tokenize(text, max) {
  var ids = [VOCAB['[CLS]']];
  basic(text).forEach(function (w) { ids.push.apply(ids, wordpiece(w)); });
  if (ids.length > max - 1) ids.length = max - 1;
  ids.push(VOCAB['[SEP]']);
  return ids;
}

/* ---------------- the model ---------------- */
function linear(x, n, inD, W, b) {           /* x: n×inD -> n×outD */
  /* four tokens per pass over the weights: each int8 row is read once for
     four tokens, which is most of the cost on a phone */
  var outD = W.shape[0], y = new Float32Array(n * outD), q = W.q, s = W.s, bb = b.f;
  var x0 = new Float32Array(inD), x1 = new Float32Array(inD), x2 = new Float32Array(inD), x3 = new Float32Array(inD);
  for (var t = 0; t < n; t += 4) {
    var m = Math.min(4, n - t);
    x0.set(x.subarray(t * inD, t * inD + inD));
    if (m > 1) x1.set(x.subarray((t + 1) * inD, (t + 2) * inD)); else x1.fill(0);
    if (m > 2) x2.set(x.subarray((t + 2) * inD, (t + 3) * inD)); else x2.fill(0);
    if (m > 3) x3.set(x.subarray((t + 3) * inD, (t + 4) * inD)); else x3.fill(0);
    for (var o = 0; o < outD; o++) {
      var row = o * inD, a0 = 0, a1 = 0, a2 = 0, a3 = 0;
      for (var i = 0; i < inD; i++) {
        var w = q[row + i];
        a0 += x0[i] * w; a1 += x1[i] * w; a2 += x2[i] * w; a3 += x3[i] * w;
      }
      var so = s[o], bo = bb[o], yo = t * outD + o;
      y[yo] = a0 * so + bo;
      if (m > 1) y[yo + outD] = a1 * so + bo;
      if (m > 2) y[yo + 2 * outD] = a2 * so + bo;
      if (m > 3) y[yo + 3 * outD] = a3 * so + bo;
    }
  }
  return y;
}
function layerNorm(x, n, d, g, b, eps) {
  for (var t = 0; t < n; t++) {
    var o = t * d, mean = 0, v = 0, i;
    for (i = 0; i < d; i++) mean += x[o + i];
    mean /= d;
    for (i = 0; i < d; i++) { var z = x[o + i] - mean; v += z * z; }
    var inv = 1 / Math.sqrt(v / d + eps);
    for (i = 0; i < d; i++) x[o + i] = (x[o + i] - mean) * inv * g.f[i] + b.f[i];
  }
}
function erf(x) {                              /* Abramowitz & Stegun 7.1.26 */
  var s = x < 0 ? -1 : 1; x = Math.abs(x);
  var t = 1 / (1 + 0.3275911 * x);
  var y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
function embedIds(ids) {
  var c = M.cfg, T = M.T, d = c.hidden, n = ids.length, H = c.heads, dh = d / H, eps = c.eps || 1e-12;
  var x = new Float32Array(n * d), we = T['emb.word'], pe = T['emb.pos'], te = T['emb.type'];
  for (var t = 0; t < n; t++) {
    var w = ids[t] * d, sw = we.s[ids[t]];
    for (var i = 0; i < d; i++) x[t * d + i] = we.q[w + i] * sw + pe.f[t * d + i] + te.f[i];
  }
  layerNorm(x, n, d, T['emb.ln.g'], T['emb.ln.b'], eps);
  var scale = 1 / Math.sqrt(dh);
  for (var L = 0; L < c.layers; L++) {
    var p = 'l' + L + '.';
    var Q = linear(x, n, d, T[p + 'q.w'], T[p + 'q.b']);
    var K = linear(x, n, d, T[p + 'k.w'], T[p + 'k.b']);
    var Vv = linear(x, n, d, T[p + 'v.w'], T[p + 'v.b']);
    var ctx = new Float32Array(n * d), sc = new Float32Array(n);
    for (var h = 0; h < H; h++) {
      var ho = h * dh;
      for (var a = 0; a < n; a++) {
        var mx = -1e30, j, e;
        for (j = 0; j < n; j++) {
          var dot = 0;
          for (e = 0; e < dh; e++) dot += Q[a * d + ho + e] * K[j * d + ho + e];
          sc[j] = dot * scale; if (sc[j] > mx) mx = sc[j];
        }
        var sum = 0;
        for (j = 0; j < n; j++) { sc[j] = Math.exp(sc[j] - mx); sum += sc[j]; }
        for (j = 0; j < n; j++) {
          var wgt = sc[j] / sum;
          for (e = 0; e < dh; e++) ctx[a * d + ho + e] += wgt * Vv[j * d + ho + e];
        }
      }
    }
    var ao = linear(ctx, n, d, T[p + 'ao.w'], T[p + 'ao.b']);
    for (var k = 0; k < n * d; k++) ao[k] += x[k];
    layerNorm(ao, n, d, T[p + 'ln1.g'], T[p + 'ln1.b'], eps);
    x = ao;
    var ff = c.ffn, hdn = linear(x, n, d, T[p + 'f1.w'], T[p + 'f1.b']);
    for (k = 0; k < n * ff; k++) { var z = hdn[k]; hdn[k] = 0.5 * z * (1 + erf(z / Math.SQRT2)); }
    var fo = linear(hdn, n, ff, T[p + 'f2.w'], T[p + 'f2.b']);
    for (k = 0; k < n * d; k++) fo[k] += x[k];
    layerNorm(fo, n, d, T[p + 'ln2.g'], T[p + 'ln2.b'], eps);
    x = fo;
  }
  var v = new Float32Array(d);
  if (c.pooling === 'cls') for (var i2 = 0; i2 < d; i2++) v[i2] = x[i2];
  else { for (t = 0; t < n; t++) for (i = 0; i < d; i++) v[i] += x[t * d + i]; for (i = 0; i < d; i++) v[i] /= n; }
  var nn = 0; for (i = 0; i < d; i++) nn += v[i] * v[i];
  nn = Math.sqrt(nn) || 1; for (i = 0; i < d; i++) v[i] /= nn;
  return v;
}
function embed(q) { return embedIds(tokenize((META.query_prefix || '') + q, 64)); }

/* ---------------- the plainer signals: BM25 over verses, chapters, notes ---------------- */
var STOP = {};
('a an and the of to in on at by for with is are was were be been it its this that these those what which who whom ' +
 'where when how why verse verses bible mention mentions mentioned says say said about does do did there here from as ' +
 'into out up down over i me my you your he him his she her they them their we us our or not no so than then thou thee ' +
 'thy ye unto shall will').split(' ').forEach(function (w) { STOP[w] = 1; });
function stem(w) {
  var s = ['eth', 'est', 'ing', 'ed', 'es', 's'];
  for (var i = 0; i < s.length; i++) if (w.length > s[i].length + 2 && w.slice(-s[i].length) === s[i]) return w.slice(0, -s[i].length);
  return w;
}
function words(t) {
  return (String(t).toLowerCase().replace(/\u2019/g, "'").replace(/'s\b/g, '').match(/[a-z]+/g) || [])
    .filter(function (w) { return !STOP[w]; });
}
function Bm(docs) {
  var post = Object.create(null), df = Object.create(null), len = new Float32Array(docs.length), tot = 0;
  for (var i = 0; i < docs.length; i++) {
    var ws = words(docs[i]), tf = Object.create(null);
    len[i] = ws.length; tot += ws.length;
    for (var j = 0; j < ws.length; j++) { var w = stem(ws[j]); tf[w] = (tf[w] || 0) + 1; }
    for (var w2 in tf) { (post[w2] = post[w2] || []).push(i, tf[w2]); df[w2] = (df[w2] || 0) + 1; }
  }
  this.post = post; this.df = df; this.len = len; this.n = docs.length; this.avg = tot / docs.length || 1;
}
/* scores scaled so the best is 1 */
Bm.prototype.scores = function (terms) {
  var out = new Float32Array(this.n), seen = {}, mx = 0;
  for (var t = 0; t < terms.length; t++) {
    var w = stem(terms[t]); if (seen[w] || !this.post[w]) continue; seen[w] = 1;
    var idf = Math.log(1 + (this.n - this.df[w] + 0.5) / (this.df[w] + 0.5)), p = this.post[w];
    for (var i = 0; i < p.length; i += 2) {
      var r = p[i], f = p[i + 1];
      out[r] += idf * f * 2.2 / (f + 1.2 * (0.25 + 0.75 * this.len[r] / this.avg));
    }
  }
  for (var k = 0; k < out.length; k++) if (out[k] > mx) mx = out[k];
  if (mx > 0) for (k = 0; k < out.length; k++) out[k] /= mx;
  return out;
};
function buildIndex(books, texts) {
  var rows = [], chapOf = [], verseText = [], chapText = [], notes = [];
  books.forEach(function (b, bi) {
    var bk = texts[bi] || {}, cs = Object.keys(bk).map(Number).sort(function (x, y) { return x - y; });
    cs.forEach(function (c) {
      var vs = bk[String(c)] || [], ci = chapText.length;
      chapText.push(b.name + ' ' + vs.join(' '));
      notes.push((b.chapters && b.chapters[String(c)]) || '');
      for (var v = 0; v < vs.length; v++) { rows.push([b.i, c, v + 1]); chapOf.push(ci); verseText.push(vs[v] || ''); }
    });
  });
  if (rows.length !== META.count) throw new Error('the verses have changed since the vectors were made');
  return { rows: rows, chapOf: chapOf, verse: new Bm(verseText), chap: new Bm(chapText), note: new Bm(notes) };
}
function expand(ws) {
  var out = [];
  ws.forEach(function (w) { out.push(w); if (KJV[w]) out.push.apply(out, KJV[w].split(' ')); });
  return out;
}

function search(q, k) {
  var v = embed(q), d = META.dims, n = META.count, sc = META.scale;
  var terms = expand(words(q));
  var sv = IX.verse.scores(terms), sch = IX.chap.scores(terms), sn = IX.note.scores(terms), co = IX.chapOf;
  var best = [], floor = -1e9;
  for (var r = 0; r < n; r++) {
    var o = r * d, s = 0;
    for (var i = 0; i < d; i++) s += VEC[o + i] * v[i];
    s = s * sc + MIX.words * sv[r] + MIX.chapter * sch[co[r]] + MIX.notes * sn[co[r]];
    if (best.length < k || s > floor) {
      best.push([r, s]);
      if (best.length > k * 2) { best.sort(function (a, b) { return b[1] - a[1]; }); best.length = k; floor = best[k - 1][1]; }
    }
  }
  best.sort(function (a, b) { return b[1] - a[1]; });
  if (best.length > k) best.length = k;
  return best.map(function (x) { var w = IX.rows[x[0]]; return { b: w[0], c: w[1], v: w[2], s: Math.round(x[1] * 1e4) / 1e4 }; });
}

self.onmessage = function (ev) {
  var m = ev.data || {};
  load().then(function () {
    if (m.warm) return self.postMessage({ id: m.id, ready: true });
    if (m.embed != null) return self.postMessage({ id: m.id, vec: Array.prototype.slice.call(embed(m.embed)) });
    var t0 = Date.now(), hits = search(String(m.q || '').slice(0, 300), Math.min(m.k || 10, 50));
    self.postMessage({ id: m.id, hits: hits, ms: Date.now() - t0 });
  }).catch(function (e) { self.postMessage({ id: m.id, error: String(e && e.message || e) }); });
};
