import { readFileSync } from 'fs';
const h = readFileSync('scripts/live-home.html', 'utf8');
const srcs = [...h.matchAll(/\bsrc=["']([^"']+)["']/g)].map((x) => x[1]);
const imgish = srcs.filter((s) => /img|logo|webp|avif|jpg|png|media/i.test(s));
console.log('img src count', imgish.length);
imgish.slice(0, 40).forEach((s) => console.log(s));
console.log('--- logos ---');
console.log([...h.matchAll(/2-\d+w\.webp[^"'\s]*/g)].map((m) => m[0]).slice(0, 20));
console.log('--- srcset sample ---');
[...h.matchAll(/\bsrcset=["']([^"']{0,300})/g)]
  .slice(0, 8)
  .forEach((m) => console.log(m[1]));
console.log('--- broken img alt ---');
const broken = [...h.matchAll(/<img[^>]+>/g)].filter((m) => /Sundown Tours/i.test(m[0]));
console.log(broken[0]?.[0]?.slice(0, 400));
