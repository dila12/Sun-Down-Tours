import { readFileSync } from 'fs';

const raw = readFileSync('scripts/qa-report.json', 'utf8').replace(/^\uFEFF/, '');
const j = JSON.parse(raw);
const fails = Object.entries(j.section).filter(([, v]) => !v.ok);
console.log('FAIL COUNT', fails.length);
for (const [k, v] of fails) console.log('FAIL', k, '=>', v.detail);
console.log('---PASS COUNT---', Object.values(j.section).filter((v) => v.ok).length);
console.log('---LOCALE SNAPSHOT---');
for (const [l, v] of Object.entries(j.localeResults || {})) {
  console.log(
    l,
    JSON.stringify({
      status: v.status,
      robots: v.robots,
      title: v.title,
      lang: v.lang,
      h1: v.h1s,
      hreflangs: v.hreflangs,
      canonical: v.canonical,
      jsonLd: v.jsonLdCount,
      og: v.ogLocale,
      hasNlHreflang: v.hasNlHreflang,
    })
  );
}
