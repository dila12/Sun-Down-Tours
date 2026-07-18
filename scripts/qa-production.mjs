import { writeFileSync } from 'fs';

const BASE = process.argv[2] || 'https://www.sundowntours.com';

async function fetchHtml(path) {
  const r = await fetch(BASE + path, {
    headers: { 'user-agent': 'SundownQA/1.0', 'accept': 'text/html' },
    redirect: 'manual',
  });
  const text = await r.text();
  return {
    status: r.status,
    location: r.headers.get('location'),
    cache: r.headers.get('x-vercel-cache'),
    disposition: r.headers.get('content-disposition'),
    len: text.length,
    text,
  };
}

function meta(html, name) {
  const re1 = new RegExp(`name=["']${name}["'][^>]+content=["']([^"']*)["']`, 'i');
  const re2 = new RegExp(`content=["']([^"']*)["'][^>]+name=["']${name}["']`, 'i');
  return (html.match(re1) || html.match(re2) || [])[1] || null;
}
function prop(html, name) {
  const re1 = new RegExp(`property=["']${name}["'][^>]+content=["']([^"']*)["']`, 'i');
  const re2 = new RegExp(`content=["']([^"']*)["'][^>]+property=["']${name}["']`, 'i');
  return (html.match(re1) || html.match(re2) || [])[1] || null;
}
function canonical(html) {
  return (
    (html.match(/rel=["']canonical["'][^>]+href=["']([^"']+)/i) ||
      html.match(/href=["']([^"']+)["'][^>]+rel=["']canonical["']/i) ||
      [])[1] || null
  );
}
function title(html) {
  return (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || null;
}
function lang(html) {
  return (html.match(/<html[^>]+lang=["']([^"']+)["']/i) || [])[1] || null;
}
function hreflangs(html) {
  return [...html.matchAll(/hreflang=["']([^"']+)["']/gi)].map((m) => m[1]);
}
function h1s(html) {
  return [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((h) =>
    h[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  );
}
function schemaTypes(html) {
  const types = [];
  let invalid = 0;
  for (const m of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const d = JSON.parse(m[1].trim());
      const items = d['@graph'] || (Array.isArray(d) ? d : [d]);
      for (const it of items) {
        const t = it['@type'];
        if (Array.isArray(t)) types.push(...t);
        else if (t) types.push(t);
      }
    } catch {
      invalid++;
    }
  }
  return { types: [...new Set(types)], invalid };
}
function summary(path, r) {
  const sc = schemaTypes(r.text);
  return {
    path,
    status: r.status,
    location: r.location,
    cache: r.cache,
    disposition: r.disposition,
    len: r.len,
    title: title(r.text),
    lang: lang(r.text),
    robots: meta(r.text, 'robots'),
    canonical: canonical(r.text),
    ogLocale: prop(r.text, 'og:locale'),
    ogUrl: prop(r.text, 'og:url'),
    twitter: meta(r.text, 'twitter:card'),
    hreflangs: hreflangs(r.text),
    h1s: h1s(r.text),
    schema: sc,
    hasNlHreflang: hreflangs(r.text).includes('nl'),
    bodyHasNederlands: /Nederlands|privé|rondreis/i.test(r.text),
    switcherHasNl: /href=["']\/nl["']|lang-pill[\s\S]{0,2000}\/nl/i.test(r.text),
  };
}

const paths = [
  '/',
  '/de',
  '/fr',
  '/it',
  '/es',
  '/pl',
  '/ru',
  '/nl',
  '/tours/7-day-sri-lanka-private-tour',
  '/de/7-tage-sri-lanka-privatreise',
  '/nl/7-daagse-prive-rondreis-sri-lanka',
  '/travel-guides/sri-lanka-whale-watching',
  '/destinations/sigiriya-sri-lanka',
  '/about',
  '/qa-missing-zzz-404',
  '/de/sri-lanka-rundreise',
  '/sitemap.xml',
  '/sitemap-hreflang.xml',
  '/robots.txt',
];

const results = {};
for (const p of paths) {
  try {
    const r = await fetchHtml(p);
    if (p.endsWith('.xml') || p.endsWith('.txt')) {
      results[p] = {
        status: r.status,
        len: r.len,
        hasNl: /hreflang=["']nl["']|\/nl(?:\/|"|'|<|\s|$)/i.test(r.text),
        sample: r.text.slice(0, 200).replace(/\s+/g, ' '),
      };
    } else {
      results[p] = summary(p, r);
    }
  } catch (e) {
    results[p] = { error: String(e.message || e) };
  }
}

// Sitemap NL scan
for (const sm of ['/sitemap.xml', '/sitemap-hreflang.xml', '/sitemap-images.xml', '/sitemap-index.xml']) {
  try {
    const r = await fetchHtml(sm);
    results[`scan:${sm}`] = {
      status: r.status,
      hasNlPath: /https?:\/\/[^"'<\s]+\/nl(?:\/|"|'|<|\s|$)/i.test(r.text),
      hasNlHreflang: /hreflang=["']nl["']/i.test(r.text),
      locCount: (r.text.match(/<loc>/g) || []).length,
    };
  } catch (e) {
    results[`scan:${sm}`] = { error: String(e.message || e) };
  }
}

const json = JSON.stringify(results, null, 2);
writeFileSync('scripts/qa-production-report.json', json, 'utf8');
console.log('wrote scripts/qa-production-report.json keys=', Object.keys(results).length);
