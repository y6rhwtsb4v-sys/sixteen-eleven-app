#!/usr/bin/env python3
"""Smart search: embed every verse with a few small models and score them on
questions with known answers. Runs on a GitHub runner (it has internet).

Uses the same quantized ONNX files the app would ship (Xenova/...), so the
verse vectors made here match the question vectors the phone makes.

Writes out/report.json and, for each small model, out/<name>/ with the model,
tokenizer and the verse vectors (int8, one row per verse in verses.jsonl order).
"""
import json, os, re, sys, time, math, shutil
import numpy as np
from huggingface_hub import hf_hub_download
from tokenizers import Tokenizer
import onnxruntime as ort

V = [json.loads(l) for l in open('verses.jsonl')]
Q = json.load(open('questions.json'))
KEY = {('%s %d:%d' % (b, c, v)): i for i, (_, b, c, v, t) in enumerate(V)}
for q, refs in Q:
    for r in refs:
        assert r in KEY, r
OUT = 'out'
os.makedirs(OUT, exist_ok=True)

MODELS = [
    # name, repo, pooling, query prefix, ship?
    ('minilm', 'Xenova/all-MiniLM-L6-v2', 'mean', '', True),
    ('bgesmall', 'Xenova/bge-small-en-v1.5', 'cls', 'Represent this sentence for searching relevant passages: ', True),
    ('gtesmall', 'Xenova/gte-small', 'mean', '', True),
    ('arcticxs', 'Snowflake/snowflake-arctic-embed-xs', 'cls', 'Represent this sentence for searching relevant passages: ', True),
    ('bgebase', 'Xenova/bge-base-en-v1.5', 'cls', 'Represent this sentence for searching relevant passages: ', False),
]

STOP = set('a an and the of to in on at by for with is are was were be been it its this that these those '
           'what which who whom where when how why verse verses bible mention mentions mentioned says say said '
           'about does do did there here from as into out up down over i me my you your he him his she her '
           'they them their we us our or not no so than then thou thee thy ye unto shall will'.split())


def words(s):
    s = s.lower().replace('’', "'")
    s = re.sub(r"'s\b", '', s)
    return [w for w in re.findall(r"[a-z]+", s) if w not in STOP]


def stem(w):
    for suf in ('eth', 'est', 'ing', 'ed', 'es', 's'):
        if len(w) > len(suf) + 2 and w.endswith(suf):
            return w[:-len(suf)]
    return w


# ---------------------------------------------------------------- BM25
def bm25_index():
    docs = [[stem(w) for w in words(t)] for (_, _, _, _, t) in V]
    df = {}
    for d in docs:
        for w in set(d):
            df[w] = df.get(w, 0) + 1
    N = len(docs); avg = sum(map(len, docs)) / N
    idf = {w: math.log(1 + (N - n + .5) / (n + .5)) for w, n in df.items()}
    post = {}
    for i, d in enumerate(docs):
        tf = {}
        for w in d:
            tf[w] = tf.get(w, 0) + 1
        for w, f in tf.items():
            post.setdefault(w, []).append((i, f, len(d)))
    def search(q, k=50):
        sc = {}
        for w in set(stem(x) for x in words(q)):
            for i, f, L in post.get(w, ()):
                sc[i] = sc.get(i, 0) + idf[w] * f * 2.2 / (f + 1.2 * (.25 + .75 * L / avg))
        return [i for i, _ in sorted(sc.items(), key=lambda x: -x[1])[:k]]
    return search


# ---------------------------------------------------------------- ONNX
def load(repo):
    files = {}
    for f in ('tokenizer.json', 'tokenizer_config.json', 'config.json', 'special_tokens_map.json'):
        try:
            files[f] = hf_hub_download(repo, f)
        except Exception:
            pass
    for f in ('onnx/model_quantized.onnx', 'onnx/model_int8.onnx', 'onnx/model.onnx'):
        try:
            files['onnx'] = hf_hub_download(repo, f); files['onnx_name'] = f; break
        except Exception:
            continue
    return files


def encoder(files, pooling):
    tok = Tokenizer.from_file(files['tokenizer.json'])
    tok.enable_truncation(256)
    tok.enable_padding()
    so = ort.SessionOptions(); so.intra_op_num_threads = os.cpu_count() or 2
    sess = ort.InferenceSession(files['onnx'], so, providers=['CPUExecutionProvider'])
    names = [i.name for i in sess.get_inputs()]
    def enc(texts, bs=64):
        out = []
        for s in range(0, len(texts), bs):
            e = tok.encode_batch(texts[s:s + bs])
            ids = np.array([x.ids for x in e], dtype=np.int64)
            am = np.array([x.attention_mask for x in e], dtype=np.int64)
            feed = {'input_ids': ids, 'attention_mask': am}
            if 'token_type_ids' in names:
                feed['token_type_ids'] = np.zeros_like(ids)
            h = sess.run(None, feed)[0]
            if pooling == 'cls':
                v = h[:, 0]
            else:
                m = am[..., None].astype(np.float32)
                v = (h * m).sum(1) / np.maximum(m.sum(1), 1e-9)
            v = v / np.linalg.norm(v, axis=1, keepdims=True)
            out.append(v.astype(np.float32))
        return np.concatenate(out)
    return enc


def q8(M):
    """symmetric int8, one scale for the whole matrix (cosine survives)"""
    s = np.abs(M).max() / 127.0
    return np.round(M / s).astype(np.int8), float(s)


def score(rank_fn):
    t1 = t3 = t10 = 0; miss = []
    for q, refs in Q:
        want = {KEY[r] for r in refs}
        r = rank_fn(q)
        if r[:1] and r[0] in want: t1 += 1
        if want & set(r[:3]): t3 += 1
        if want & set(r[:10]): t10 += 1
        else: miss.append(q)
    n = len(Q)
    return {'top1': round(t1 / n, 3), 'top3': round(t3 / n, 3), 'top10': round(t10 / n, 3), 'missed_top10': miss}


def rrf(*lists, k=60, w=None):
    sc = {}
    for j, L in enumerate(lists):
        for r, i in enumerate(L):
            sc[i] = sc.get(i, 0) + (w[j] if w else 1) / (k + r + 1)
    return [i for i, _ in sorted(sc.items(), key=lambda x: -x[1])]


def main():
    bm = bm25_index()
    report = {'questions': len(Q), 'verses': len(V), 'bm25': score(lambda q: bm(q, 10))}
    print('bm25', report['bm25']['top1'], report['bm25']['top3'], report['bm25']['top10'], flush=True)
    texts_plain = [t for (_, _, _, _, t) in V]
    texts_ctx = []
    for i, (bi, b, c, v, t) in enumerate(V):
        prev = V[i - 1][4] if i and V[i - 1][0] == bi and V[i - 1][2] == c else ''
        texts_ctx.append((prev[-200:] + ' ' + t).strip())
    only = sys.argv[1:] or None
    for name, repo, pool, qp, ship in MODELS:
        if only and name not in only:
            continue
        try:
            t0 = time.time()
            files = load(repo)
            enc = encoder(files, pool)
            M = enc(texts_plain)
            took = time.time() - t0
            Mq, s = q8(M)
            Md = Mq.astype(np.float32)
            qv = lambda q: enc([qp + q])[0]
            def sem(q, k=50, MM=Md):
                return list(np.argsort(-(MM @ qv(q)))[:k])
            r = {'repo': repo, 'onnx': files.get('onnx_name'), 'onnx_mb': round(os.path.getsize(files['onnx']) / 1e6, 1),
                 'dims': int(M.shape[1]), 'embed_seconds': round(took), 'vectors_mb_int8': round(Mq.nbytes / 1e6, 1)}
            r['semantic'] = score(lambda q: sem(q, 10))
            r['hybrid'] = score(lambda q: rrf(bm(q, 50), sem(q, 50))[:10])
            r['hybrid_sem2'] = score(lambda q: rrf(bm(q, 50), sem(q, 50), w=[1, 2])[:10])
            # verse plus the verse before it
            if name in ('minilm', 'bgesmall', 'gtesmall'):
                C = enc(texts_ctx); Cq, cs = q8(C); Cd = Cq.astype(np.float32)
                r['ctx_semantic'] = score(lambda q: sem(q, 10, Cd))
                r['ctx_hybrid'] = score(lambda q: rrf(bm(q, 50), sem(q, 50, Cd))[:10])
                both = lambda q: rrf(bm(q, 50), sem(q, 50), sem(q, 50, Cd))[:10]
                r['hybrid_both'] = score(both)
            report[name] = r
            print(name, json.dumps({k: (v['top1'], v['top3'], v['top10']) for k, v in r.items() if isinstance(v, dict)}), flush=True)
            if ship:
                d = os.path.join(OUT, name); os.makedirs(d + '/onnx', exist_ok=True)
                for f, p in files.items():
                    if f in ('onnx_name',):
                        continue
                    shutil.copy(p, os.path.join(d, files['onnx_name'] if f == 'onnx' else f))
                open(os.path.join(d, 'vectors.i8'), 'wb').write(Mq.tobytes())
                if name in ('minilm', 'bgesmall', 'gtesmall'):
                    open(os.path.join(d, 'vectors_ctx.i8'), 'wb').write(Cq.tobytes())
                json.dump({'scale': s, 'scale_ctx': cs if name in ('minilm', 'bgesmall', 'gtesmall') else None,
                           'dims': int(M.shape[1]), 'pooling': pool, 'query_prefix': qp, 'count': len(V)},
                          open(os.path.join(d, 'meta.json'), 'w'))
                # a few known queries and their top verse ids, so the app's own encoder can be checked against this one
                probe = {q: [int(x) for x in sem(q, 5)] for q, _ in Q[:8]}
                probe_vecs = {q: [round(float(x), 6) for x in qv(q)] for q, _ in Q[:3]}
                json.dump({'top5': probe, 'vecs': probe_vecs}, open(os.path.join(d, 'probe.json'), 'w'))
        except Exception as e:
            report[name] = {'error': repr(e)[:500]}
            print(name, 'ERROR', e, flush=True)
        json.dump(report, open(os.path.join(OUT, 'report.json'), 'w'), indent=1)


if __name__ == '__main__':
    main()
