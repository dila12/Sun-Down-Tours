/**
 * Multilingual SEO / NL isolation QA (read-only).
 * Usage: node scripts/qa-multilingual-seo.mjs [baseUrl]
 */
import { readFileSync, existsSync } from 'fs';
import { LOCALES, INDEXABLE_LOCALES, PAGES, buildPath, buildUrl, buildAlternates, HREFLANG } from '../src/app/i18n/site-data.mjs';
import { buildEdgeRedirectMap, resolveEdgeRedirect } from '../src/app/i18n/edge-redirects.mjs';

const BASE = process.argv[2] || 'http://localhost:4000';
const issues = [];
const section = {};

function pass(name, ok, detail = '') {
  section[name] = { ok, detail };
  if (!ok) issues.push(`[${name}] ${detail}`);
}

function count(re, text) {
  return (text.match(re) || []).length;
}

// ── Config / Dutch isolation ──────────────────────────────────────────
pass('config.nlInLocales', LOCALES.includes('nl'), `LOCALES=${LOCALES.join(',')}`);
pass('config.nlNotIndexable', !INDEXABLE_LOCALES.includes('nl'), `INDEXABLE=${INDEXABLE_LOCALES.join(',')}`);
pass(
  'config.indexableSet',
  INDEXABLE_LOCALES.join(',') === 'en,de,fr,it,es,pl,ru',
  INDEXABLE_LOCALES.join(',')
);

const homeAlts = buildAlternates('home');
pass(
  'config.hreflangNoNl',
  !homeAlts.some((a) => a.hreflang === 'nl' || a.href.includes('/nl')),
  homeAlts.map((a) => a.hreflang).join(',')
);
pass('config.hreflangXDefault', homeAlts.some((a) => a.hreflang === 'x-default'), 'x-default present');

for (const file of ['sitemap.xml', 'sitemap-hreflang.xml', 'sitemap-images.xml', 'sitemap-index.xml']) {
  const path = `public/${file}`;
  if (!existsSync(path)) {
    pass(`sitemap.${file}`, false, 'missing');
    continue;
  }
  const text = readFileSync(path, 'utf8');
  const hasNl = /hreflang=["']nl["']|https?:\/\/[^"'<\s]+\/nl(?:\/|"|'|<|\s|$)/i.test(text);
  pass(`sitemap.${file}.noNl`, !hasNl, hasNl ? 'contains /nl or hreflang=nl' : 'clean');
}

const robots = readFileSync('public/robots.txt', 'utf8');
pass('robots.hasSitemap', /Sitemap:\s*https?:\/\//i.test(robots), robots.trim());

// ── Slugs / routes ────────────────────────────────────────────────────
const missingSlugs = [];
for (const p of PAGES) {
  for (const l of LOCALES) {
    if (p.slugs[l] === undefined || p.slugs[l] === null) missingSlugs.push(`${p.id}:${l}`);
  }
}
pass('routing.slugsComplete', missingSlugs.length === 0, missingSlugs.slice(0, 15).join('; ') || 'ok');

const map = buildEdgeRedirectMap();
const loops = [];
const self = [];
for (const [from, to] of map) {
  if (from === to) self.push(from);
  let cur = to;
  const seen = new Set([from]);
  for (let i = 0; i < 5; i++) {
    const next = resolveEdgeRedirect(cur, map);
    if (!next) break;
    if (seen.has(next)) {
      loops.push(`${from}→…→${next}`);
      break;
    }
    seen.add(next);
    cur = next;
  }
}
pass('routing.redirectLoops', loops.length === 0 && self.length === 0, [...loops, ...self].slice(0, 10).join('; ') || `map=${map.size}`);
pass('routing.nlNotRedirectedAway', !resolveEdgeRedirect('/nl') && !resolveEdgeRedirect('/nl/'), 'NL home stays');

// Sample legacy
const legacySamples = [
  '/de/sri-lanka-rundreise',
  '/de/privatreisen',
  '/fr/circuit-sri-lanka',
];
const legacyOk = legacySamples.filter((p) => resolveEdgeRedirect(p));
pass('routing.legacyRedirects', legacyOk.length >= 1, `resolved ${legacyOk.length}/${legacySamples.length}`);

// ── HTTP / SSR checks ─────────────────────────────────────────────────
async function fetchText(url, opts = {}) {
  const res = await fetch(url, { redirect: opts.redirect || 'manual', ...opts });
  const text = opts.noBody ? '' : await res.text();
  return { status: res.status, headers: res.headers, text, location: res.headers.get('location') };
}

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1] || m[0] : null;
}

function all(html, re) {
  return [...html.matchAll(re)].map((m) => m[1] ?? m[0]);
}

const samplePages = [
  { id: 'home', path: (l) => (l === 'en' ? '/' : `/${l}`) },
  { id: 'tour7', path: (l) => buildPath('tour7', l) },
  { id: 'about', path: (l) => buildPath('about', l) },
];

const localeResults = {};

for (const locale of LOCALES) {
  const path = locale === 'en' ? '/' : `/${locale}`;
  const url = `${BASE}${path}`;
  let r;
  try {
    r = await fetchText(url);
  } catch (e) {
    pass(`ssr.${locale}`, false, String(e.message || e));
    continue;
  }
  const html = r.text;
  const robotsMeta = extract(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i)
    || extract(html, /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']robots["']/i);
  const canonical = extract(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
    || extract(html, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  const title = extract(html, /<title[^>]*>([^<]*)<\/title>/i);
  const desc = extract(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)
    || extract(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  const ogLocale = extract(html, /property=["']og:locale["'][^>]+content=["']([^"']+)["']/i)
    || extract(html, /content=["']([^"']+)["'][^>]+property=["']og:locale["']/i);
  const ogTitle = extract(html, /property=["']og:title["'][^>]+content=["']([^"']*)["']/i)
    || extract(html, /content=["']([^"']*)["'][^>]+property=["']og:title["']/i);
  const twCard = extract(html, /name=["']twitter:card["'][^>]+content=["']([^"']+)["']/i)
    || extract(html, /content=["']([^"']+)["'][^>]+name=["']twitter:card["']/i);
  const hreflangs = all(html, /hreflang=["']([^"']+)["']/gi);
  const jsonLdBlocks = all(html, /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  const h1s = all(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi).map((h) => h.replace(/<[^>]+>/g, '').trim());
  const langAttr = extract(html, /<html[^>]+lang=["']([^"']+)["']/i);
  const htmlLang = extract(html, /lang=["']([^"']+)["']/i);

  const nlInHreflang = hreflangs.includes('nl');
  const expectedRobots = locale === 'nl' ? 'noindex, follow' : 'index, follow';
  const robotsNorm = (robotsMeta || '').toLowerCase().replace(/\s+/g, '');
  const expectedNorm = expectedRobots.replace(/\s+/g, '');

  localeResults[locale] = {
    status: r.status,
    robots: robotsMeta,
    canonical,
    title,
    desc: desc?.slice(0, 80),
    ogLocale,
    ogTitle: ogTitle?.slice(0, 60),
    twCard,
    hreflangs,
    h1s,
    lang: langAttr || htmlLang,
    jsonLdCount: jsonLdBlocks.length,
    hasNlHreflang: nlInHreflang,
  };

  pass(`ssr.${locale}.status200`, r.status === 200, `status=${r.status}`);
  pass(`ssr.${locale}.robots`, robotsNorm.includes(expectedNorm.replace(',', '')) || robotsNorm === expectedNorm || (locale === 'nl' ? robotsNorm.includes('noindex') && robotsNorm.includes('follow') : robotsNorm.includes('index') && !robotsNorm.includes('noindex')), `got=${robotsMeta}`);
  pass(`ssr.${locale}.canonical`, !!canonical && !canonical.includes('/undefined'), canonical || 'missing');
  if (locale === 'nl') {
    pass(`ssr.nl.canonicalNoIndexableLeak`, !!canonical && canonical.includes('/nl'), canonical);
    pass(`ssr.nl.noHreflangNl`, !nlInHreflang, hreflangs.join(','));
  } else {
    pass(`ssr.${locale}.hreflangCluster`, hreflangs.includes(locale) || hreflangs.includes(HREFLANG?.[locale] || locale), hreflangs.slice(0, 12).join(','));
    pass(`ssr.${locale}.noNlInHreflang`, !nlInHreflang, 'nl present in hreflang');
  }
  pass(`ssr.${locale}.title`, !!title && title.length > 10, title || 'missing');
  pass(`ssr.${locale}.description`, !!desc && desc.length > 40, desc?.slice(0, 60) || 'missing');
  pass(`ssr.${locale}.og`, !!ogTitle && !!ogLocale, `og:title=${!!ogTitle} og:locale=${ogLocale}`);
  pass(`ssr.${locale}.twitter`, !!twCard, twCard || 'missing');
  pass(`ssr.${locale}.langAttr`, (langAttr || htmlLang || '').toLowerCase().startsWith(locale), `lang=${langAttr || htmlLang}`);
  pass(`ssr.${locale}.singleH1`, h1s.length === 1, `count=${h1s.length} ${h1s[0]?.slice(0, 40) || ''}`);
  pass(`ssr.${locale}.jsonLd`, jsonLdBlocks.length >= 1, `blocks=${jsonLdBlocks.length}`);

  // Parse JSON-LD for validity
  let schemaOk = true;
  const types = new Set();
  for (const block of jsonLdBlocks) {
    try {
      const data = JSON.parse(block.trim());
      const items = Array.isArray(data) ? data : data['@graph'] ? data['@graph'] : [data];
      for (const item of items) {
        const t = item['@type'];
        if (Array.isArray(t)) t.forEach((x) => types.add(x));
        else if (t) types.add(t);
      }
    } catch {
      schemaOk = false;
    }
  }
  pass(`ssr.${locale}.schemaValidJson`, schemaOk, [...types].join(','));
}

// Tour page sample EN + NL
for (const locale of ['en', 'nl', 'de']) {
  const path = buildPath('tour7', locale);
  const r = await fetchText(`${BASE}${path}`);
  const robotsMeta = extract(r.text, /name=["']robots["'][^>]+content=["']([^"']+)["']/i)
    || extract(r.text, /content=["']([^"']+)["'][^>]+name=["']robots["']/i);
  const product = /"@type"\s*:\s*"Product"/i.test(r.text);
  pass(`tour7.${locale}.status`, r.status === 200, `status=${r.status}`);
  if (locale === 'nl') {
    pass(`tour7.nl.noindex`, /noindex/i.test(robotsMeta || ''), robotsMeta);
  } else {
    pass(`tour7.${locale}.indexable`, /index/i.test(robotsMeta || '') && !/noindex/i.test(robotsMeta || ''), robotsMeta);
  }
  pass(`tour7.${locale}.productSchema`, product || locale === 'nl', product ? 'Product' : 'no Product');
}

// 404
{
  const r = await fetchText(`${BASE}/this-page-does-not-exist-qa-999`);
  const robotsMeta = extract(r.text, /name=["']robots["'][^>]+content=["']([^"']+)["']/i)
    || extract(r.text, /content=["']([^"']+)["'][^>]+name=["']robots["']/i);
  pass('routing.404.status', r.status === 404, `status=${r.status}`);
  pass('routing.404.noindex', /noindex/i.test(robotsMeta || ''), robotsMeta);
}

// Redirect check (if edge redirects on this server)
{
  const r = await fetchText(`${BASE}/de/sri-lanka-rundreise`, { redirect: 'manual', noBody: true });
  const isRedirect = r.status === 301 || r.status === 302 || r.status === 308 || r.status === 307;
  pass('routing.legacyHttp', isRedirect || r.status === 200, `status=${r.status} loc=${r.location || 'n/a'} (map has edge redirect; live edge may differ)`);
}

// Language switcher includes NL
{
  const r = await fetchText(`${BASE}/`);
  const hasNlLink = /href=["']\/nl["'/]|hreflang=["']nl["']|["']nl["']\s*:|locale.*nl|\/nl\b/i.test(r.text);
  // Look for language picker options more specifically
  const nlInSwitcher = r.text.includes('/nl') || r.text.includes('"nl"') || r.text.includes("'nl'");
  pass('ui.nlInSwitcherSource', nlInSwitcher, nlInSwitcher ? 'NL path/code present in SSR HTML' : 'NL not found in home SSR');
}

// Internal links to /nl/ outside switcher — heuristic on tour page
{
  const r = await fetchText(`${BASE}/`);
  // Count /nl links in body that aren't in a lang-switcher context is hard; flag any content-area pattern
  const nlHrefs = all(r.text, /href=["'](\/nl[^"']*)["']/gi);
  // Home may legitimately list locale switcher links only
  pass('linking.homeNlHrefCount', nlHrefs.length <= 8, `nl hrefs=${nlHrefs.length}: ${nlHrefs.slice(0, 8).join(', ')}`);
}

// Content: duplicate titles across indexable locales home
{
  const titles = Object.entries(localeResults)
    .filter(([l]) => l !== 'nl')
    .map(([, v]) => v.title)
    .filter(Boolean);
  const unique = new Set(titles);
  pass('content.homeTitlesLocalized', unique.size === titles.length, `unique=${unique.size}/${titles.length}`);
}

// Sitemap URL count vs INDEXABLE
{
  const sm = readFileSync('public/sitemap.xml', 'utf8');
  const locs = all(sm, /<loc>([^<]+)<\/loc>/g);
  const nlLocs = locs.filter((u) => /\/nl(\/|$)/.test(u));
  pass('sitemap.urlNoNl', nlLocs.length === 0, `nl urls=${nlLocs.length}`);
  pass('sitemap.hasUrls', locs.length > 20, `urls=${locs.length}`);
}

// Guides / destinations sample
for (const id of ['guideWhales', 'destinationSigiriya']) {
  const page = PAGES.find((p) => p.id === id);
  if (!page) {
    pass(`page.${id}.exists`, false, 'missing from PAGES');
    continue;
  }
  const path = buildPath(id, 'en');
  const r = await fetchText(`${BASE}${path}`);
  pass(`page.${id}.en.status`, r.status === 200, `status=${r.status} path=${path}`);
  const robotsMeta = extract(r.text, /name=["']robots["'][^>]+content=["']([^"']+)["']/i)
    || extract(r.text, /content=["']([^"']+)["'][^>]+name=["']robots["']/i);
  if (page.index) {
    pass(`page.${id}.en.index`, !/noindex/i.test(robotsMeta || ''), robotsMeta);
  }
}

console.log(JSON.stringify({ BASE, LOCALES, INDEXABLE_LOCALES, section, issues, localeResults }, null, 2));
