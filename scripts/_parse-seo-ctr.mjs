import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = '_seo_ctr';

function parse(html) {
  const headEnd = html.toLowerCase().indexOf('</head>');
  const head = headEnd > 0 ? html.slice(0, headEnd) : html.slice(0, 12000);
  const get = (re) => {
    const m = head.match(re);
    return m ? m[1].trim() : '';
  };
  const title = get(/<title[^>]*>([^<]*)<\/title>/i);
  const desc =
    get(/name=["']description["']\s+content=["']([^"']*)["']/i) ||
    get(/content=["']([^"']*)["']\s+name=["']description["']/i);
  const ogt =
    get(/property=["']og:title["']\s+content=["']([^"']*)["']/i) ||
    get(/content=["']([^"']*)["']\s+property=["']og:title["']/i);
  const ogd =
    get(/property=["']og:description["']\s+content=["']([^"']*)["']/i) ||
    get(/content=["']([^"']*)["']\s+property=["']og:description["']/i);
  const types = [];
  for (const m of html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      const j = JSON.parse(m[1]);
      const walk = (n) => {
        if (!n || typeof n !== 'object') return;
        if (Array.isArray(n)) return n.forEach(walk);
        if (n['@type']) {
          types.push(Array.isArray(n['@type']) ? n['@type'].join('|') : String(n['@type']));
        }
        if (n['@graph']) walk(n['@graph']);
      };
      walk(j);
    } catch {
      /* ignore */
    }
  }
  return {
    title,
    desc,
    ogt,
    ogd,
    types: [...new Set(types)],
    tLen: [...title].length,
    dLen: [...desc].length,
  };
}

for (const f of readdirSync(dir).filter((x) => x.endsWith('.html'))) {
  const p = parse(readFileSync(join(dir, f), 'utf8'));
  console.log(`==== ${f} ====`);
  console.log(`title(${p.tLen}): ${p.title}`);
  console.log(`desc(${p.dLen}): ${p.desc}`);
  console.log(`og:title: ${p.ogt}`);
  console.log(`og:desc: ${p.ogd}`);
  console.log(`ld: ${p.types.join(', ')}`);
  console.log('');
}
