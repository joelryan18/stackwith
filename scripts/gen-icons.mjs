/**
 * gen-icons.mjs — generate apple-touch-icon.png + PWA icons with no external deps.
 *
 * Draws the stackwith.me ECG waveform (same path as the inline SVG favicon)
 * on a dark background using a pure-Node PNG encoder (zlib built-in only).
 *
 * Run once: node scripts/gen-icons.mjs
 */

import { deflateSync } from 'zlib';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// ─── CRC-32 ────────────────────────────────────────────────────────────────
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
  crcTable[n] = c;
}
function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (const byte of buf) crc = crcTable[(crc ^ byte) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

// ─── Minimal PNG encoder (RGB, no interlace) ───────────────────────────────
function pngChunk(type, data) {
  const t   = Buffer.from(type, 'ascii');
  const len = Buffer.allocUnsafe(4);
  len.writeUInt32BE(data.length);
  const crcBuf = Buffer.allocUnsafe(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crcBuf]);
}

function encodePNG(w, h, px) {
  const ihdr = Buffer.allocUnsafe(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 2; // 8-bit truecolor RGB
  ihdr[10] = ihdr[11] = ihdr[12] = 0;

  // scanlines: filter-byte 0 (None) + RGB data
  const stride = 1 + w * 3;
  const raw    = Buffer.allocUnsafe(h * stride);
  for (let y = 0; y < h; y++) {
    raw[y * stride] = 0;
    for (let x = 0; x < w; x++) {
      const si = (y * w + x) * 3;
      const di = y * stride + 1 + x * 3;
      raw[di] = px[si]; raw[di + 1] = px[si + 1]; raw[di + 2] = px[si + 2];
    }
  }

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), // PNG signature
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

// ─── Draw helpers ──────────────────────────────────────────────────────────
function plot(px, w, x, y, r, g, b) {
  x = Math.round(x); y = Math.round(y);
  if (x < 0 || x >= w || y < 0 || y >= w) return;
  const i = (y * w + x) * 3;
  px[i] = r; px[i + 1] = g; px[i + 2] = b;
}

function drawLine(px, w, x0, y0, x1, y1, r, g, b, thick) {
  let cx = Math.round(x0), cy = Math.round(y0);
  const ex = Math.round(x1), ey = Math.round(y1);
  const dx = Math.abs(ex - cx), dy = Math.abs(ey - cy);
  const sx = cx < ex ? 1 : -1, sy = cy < ey ? 1 : -1;
  let err = dx - dy;
  const limit = dx + dy + 2;
  for (let step = 0; step <= limit; step++) {
    for (let tx = -thick; tx <= thick; tx++)
      for (let ty = -thick; ty <= thick; ty++)
        if (tx * tx + ty * ty <= thick * thick + thick)
          plot(px, w, cx + tx, cy + ty, r, g, b);
    if (cx === ex && cy === ey) break;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; cx += sx; }
    if (e2 < dx)  { err += dx; cy += sy; }
  }
}

// ─── Icon generator ────────────────────────────────────────────────────────
// ECG path: M2 14 h5 l3 -7  6 14  3 -7 h7  in a 28×28 viewbox
const WAVEFORM_PTS = [[2, 14], [7, 14], [10, 7], [16, 21], [19, 14], [26, 14]];

function makeIcon(size) {
  const px = new Uint8Array(size * size * 3);

  // Background: #07080A
  for (let i = 0; i < px.length; i += 3) { px[i] = 7; px[i + 1] = 8; px[i + 2] = 10; }

  // Scale waveform to fill icon with 12% padding on each side
  const pad   = Math.round(size * 0.12);
  const scale = (size - 2 * pad) / 28;
  const pts   = WAVEFORM_PTS.map(([x, y]) => [x * scale + pad, y * scale + pad]);

  // Signal green #B8FF3C, line thickness scales with icon size
  const thick = Math.max(1, Math.round(scale * 0.55));
  for (let i = 1; i < pts.length; i++)
    drawLine(px, size, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], 184, 255, 60, thick);

  return encodePNG(size, size, px);
}

// ─── Write ─────────────────────────────────────────────────────────────────
const targets = [
  [180, 'src/apple-touch-icon.png'],
  [192, 'src/icon-192.png'],
  [512, 'src/icon-512.png'],
];

for (const [size, rel] of targets) {
  const png = makeIcon(size);
  writeFileSync(resolve(ROOT, rel), png);
  console.log(`  ✓  ${rel}  (${size}×${size}, ${png.length} bytes)`);
}
