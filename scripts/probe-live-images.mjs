import { writeFileSync } from 'fs';

const home = await fetch('https://www.sundowntours.com/', {
  headers: { 'user-agent': 'Mozilla/5.0', 'cache-control': 'no-cache' },
});
const html = await home.text();
writeFileSync('scripts/live-home.html', html);

const srcs = [...html.matchAll(/\b(?:src|srcset)=["']([^"']+)["']/gi)].flatMap((m) =>
  m[1].split(',').map((p) => p.trim().split(/\s+/)[0])
);
const assetSrcs = [...new Set(srcs.filter((s) => /assets\/img|\.webp|\.jpg|\.png/i.test(s)))].slice(0, 25);
console.log('status', home.status, 'html', html.length);
console.log('assets found', assetSrcs.length);
for (const s of assetSrcs) console.log(' ', s);

const probes = assetSrcs.slice(0, 12).map(async (s) => {
  const url = s.startsWith('http') ? s : `https://www.sundowntours.com/${s.replace(/^\//, '')}`;
  try {
    const r = await fetch(url, { method: 'HEAD', redirect: 'manual' });
    return `${r.status} ${r.headers.get('content-type')} ${url}`;
  } catch (e) {
    return `ERR ${e.message} ${url}`;
  }
});
for (const line of await Promise.all(probes)) console.log(line);

// also check bg-image style urls
const bgs = [...html.matchAll(/url\(([^)]+)\)/gi)].map((m) => m[1].replace(/['"]/g, '')).filter((u) => /assets|\.webp/i.test(u));
console.log('bg urls', bgs.slice(0, 10));
