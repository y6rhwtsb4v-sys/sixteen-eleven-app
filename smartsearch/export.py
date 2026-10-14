#!/usr/bin/env python3
"""Make the files the app ships for smart search, for one model:

  out/ship/model.bin    the model's weights, int8 with one scale per row
  out/ship/vocab.txt    its word-piece list
  out/ship/vectors.i8   every verse (verses.jsonl order), full-precision
                        model, stored int8 with one scale
  out/ship/meta.json    dims, count, scale, pooling, query prefix, verse hash
  out/ship/probe.json   question vectors from the full model, so the app's
                        own encoder can be checked against it

and check that a numpy copy of the app's encoder (same int8 weights, same
arithmetic) gives the same question vectors as the full model.

usage: export.py NAME ORIG_REPO ONNX_REPO POOLING [QUERY_PREFIX]
"""
import hashlib, json, os, struct, sys, math
import numpy as np
from huggingface_hub import hf_hub_download
from safetensors.numpy import load_file
from tokenizers import Tokenizer
import onnxruntime as ort

name, orig, onnx_repo, pooling = sys.argv[1:5]
prefix = sys.argv[5] if len(sys.argv) > 5 else ''
OUT = 'out/ship/' + name
os.makedirs(OUT, exist_ok=True)
V = [json.loads(l) for l in open('verses.jsonl')]
Q = json.load(open('questions.json'))

cfg = json.load(open(hf_hub_download(orig, 'config.json')))
W = load_file(hf_hub_download(orig, 'model.safetensors'))
W = {k[5:] if k.startswith('bert.') else k: v for k, v in W.items()}
vocab = open(hf_hub_download(orig, 'vocab.txt'), encoding='utf-8').read()
open(OUT + '/vocab.txt', 'w', encoding='utf-8').write(vocab)

C = {'hidden': cfg['hidden_size'], 'heads': cfg['num_attention_heads'], 'layers': cfg['num_hidden_layers'],
     'ffn': cfg['intermediate_size'], 'eps': cfg.get('layer_norm_eps', 1e-12), 'pooling': pooling}

tensors, blobs, off = [], [], 0


def add(nm, arr, i8):
    global off
    arr = np.ascontiguousarray(arr, dtype=np.float32)
    if i8:
        s = np.abs(arr).max(axis=1) / 127.0
        s[s == 0] = 1e-8
        q = np.round(arr / s[:, None]).astype(np.int8)
        b = q.tobytes(); b += b'\0' * ((4 - len(b) % 4) % 4)
        t = {'name': nm, 'shape': list(arr.shape), 'dtype': 'i8', 'offset': off}
        blobs.append(b); off += len(b)
        t['soffset'] = off; sb = s.astype(np.float32).tobytes(); blobs.append(sb); off += len(sb)
        tensors.append(t)
        return q.astype(np.float32) * s[:, None]
    b = arr.tobytes()
    tensors.append({'name': nm, 'shape': list(arr.shape), 'dtype': 'f32', 'offset': off})
    blobs.append(b); off += len(b)
    return arr


E = 'embeddings.'
P = {}
P['emb.word'] = add('emb.word', W[E + 'word_embeddings.weight'], True)
P['emb.pos'] = add('emb.pos', W[E + 'position_embeddings.weight'][:128], False)
P['emb.type'] = add('emb.type', W[E + 'token_type_embeddings.weight'][:1], False)
P['emb.ln.g'] = add('emb.ln.g', W[E + 'LayerNorm.weight'], False)
P['emb.ln.b'] = add('emb.ln.b', W[E + 'LayerNorm.bias'], False)
for L in range(C['layers']):
    s = 'encoder.layer.%d.' % L; p = 'l%d.' % L
    for nm, key in (('q', 'attention.self.query'), ('k', 'attention.self.key'), ('v', 'attention.self.value'),
                    ('ao', 'attention.output.dense'), ('f1', 'intermediate.dense'), ('f2', 'output.dense')):
        P[p + nm + '.w'] = add(p + nm + '.w', W[s + key + '.weight'], True)
        P[p + nm + '.b'] = add(p + nm + '.b', W[s + key + '.bias'], False)
    for nm, key in (('ln1', 'attention.output.LayerNorm'), ('ln2', 'output.LayerNorm')):
        P[p + nm + '.g'] = add(p + nm + '.g', W[s + key + '.weight'], False)
        P[p + nm + '.b'] = add(p + nm + '.b', W[s + key + '.bias'], False)

head = json.dumps({'config': C, 'tensors': tensors}).encode()
with open(OUT + '/model.bin', 'wb') as f:
    f.write(struct.pack('<I', len(head))); f.write(head)
    f.write(b'\0' * ((4 - (4 + len(head)) % 4) % 4))
    for b in blobs:
        f.write(b)
print('model.bin %.1f MB' % (os.path.getsize(OUT + '/model.bin') / 1e6), flush=True)

# ---------------- the full model (onnx, fp32) for the verses
tok = Tokenizer.from_file(hf_hub_download(onnx_repo, 'tokenizer.json'))
tok.enable_truncation(256); tok.enable_padding()
sess = ort.InferenceSession(hf_hub_download(onnx_repo, 'onnx/model.onnx'), providers=['CPUExecutionProvider'])
names = [i.name for i in sess.get_inputs()]


def full(texts, bs=64):
    out = []
    for s in range(0, len(texts), bs):
        e = tok.encode_batch(texts[s:s + bs])
        ids = np.array([x.ids for x in e], dtype=np.int64); am = np.array([x.attention_mask for x in e], dtype=np.int64)
        feed = {'input_ids': ids, 'attention_mask': am}
        if 'token_type_ids' in names: feed['token_type_ids'] = np.zeros_like(ids)
        h = sess.run(None, feed)[0]
        if pooling == 'cls': v = h[:, 0]
        else:
            m = am[..., None].astype(np.float32); v = (h * m).sum(1) / np.maximum(m.sum(1), 1e-9)
        out.append(v / np.linalg.norm(v, axis=1, keepdims=True))
    return np.concatenate(out).astype(np.float32)


M = full([t for (_, _, _, _, t) in V])
sc = float(np.abs(M).max() / 127.0)
open(OUT + '/vectors.i8', 'wb').write(np.round(M / sc).astype(np.int8).tobytes())
h = hashlib.sha1('\n'.join(t for (_, _, _, _, t) in V).encode()).hexdigest()[:16]
json.dump({'model': orig, 'dims': int(M.shape[1]), 'count': len(V), 'scale': sc, 'pooling': pooling,
           'query_prefix': prefix, 'verses_sha1': h}, open(OUT + '/meta.json', 'w'))

# ---------------- numpy copy of the app's encoder
vid = {w: i for i, w in enumerate(vocab.split('\n')) if w}


def ln(x, g, b, eps):
    m = x.mean(-1, keepdims=True); v = ((x - m) ** 2).mean(-1, keepdims=True)
    return (x - m) / np.sqrt(v + eps) * g + b


def twin(text):
    ids = tok.encode(text).ids[:64]
    d, H = C['hidden'], C['heads']; dh = d // H
    x = P['emb.word'][ids] + P['emb.pos'][:len(ids)] + P['emb.type'][0]
    x = ln(x, P['emb.ln.g'], P['emb.ln.b'], C['eps'])
    for L in range(C['layers']):
        p = 'l%d.' % L
        q = x @ P[p + 'q.w'].T + P[p + 'q.b']; k = x @ P[p + 'k.w'].T + P[p + 'k.b']; v = x @ P[p + 'v.w'].T + P[p + 'v.b']
        ctx = np.zeros_like(x)
        for hh in range(H):
            sl = slice(hh * dh, (hh + 1) * dh)
            a = q[:, sl] @ k[:, sl].T / math.sqrt(dh); a = np.exp(a - a.max(1, keepdims=True)); a /= a.sum(1, keepdims=True)
            ctx[:, sl] = a @ v[:, sl]
        x = ln(x + ctx @ P[p + 'ao.w'].T + P[p + 'ao.b'], P[p + 'ln1.g'], P[p + 'ln1.b'], C['eps'])
        hdn = x @ P[p + 'f1.w'].T + P[p + 'f1.b']
        hdn = 0.5 * hdn * (1 + np.vectorize(math.erf)(hdn / math.sqrt(2)))
        x = ln(x + hdn @ P[p + 'f2.w'].T + P[p + 'f2.b'], P[p + 'ln2.g'], P[p + 'ln2.b'], C['eps'])
    v = x[0] if pooling == 'cls' else x.mean(0)
    return v / np.linalg.norm(v)


cos = []
probe = {'vecs': {}, 'ids': {}, 'top5': {}}
for q, _ in Q[:12]:
    f = full([prefix + q])[0]; t = twin(prefix + q)
    cos.append(float(f @ t))
    probe['vecs'][q] = [round(float(x), 6) for x in f]
    probe['ids'][q] = tok.encode(prefix + q).ids[:64]
    probe['top5'][q] = [int(i) for i in np.argsort(-(M @ f))[:5]]
json.dump(probe, open(OUT + '/probe.json', 'w'))
print('::notice title=%s encoder check::' % name + 'int8 copy vs full model, cosine min %.4f mean %.4f' % (min(cos), sum(cos) / len(cos)))
for f in sorted(os.listdir(OUT)):
    print('%s %s %.1f MB' % (name, f, os.path.getsize(OUT + '/' + f) / 1e6))
