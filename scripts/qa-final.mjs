/**
 * Final multilingual SEO validation against a running SSR server.
 */
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { buildPath, PAGES, LOCALES, INDEXABLE_LOCALES, buildAlternates } from '../src/app/i18n/site-data.mjs';
import { buildEdgeRedirectMap, resolveEdgeRedirect } from '../src/app/i18n/edge-redirects.mjs';

const BASE = process.argv[2] || 'http://localhost:4000';
const issues = [];
const sectionResults = {};

function setSection(section, ok, detail = '') {
  if (!sectionResults[section]) sectionResults[section] = { pass: 0, fail: 0, details: [] };
  if (ok) sectionResults[section].pass++;
  else {
    sectionResults[section].fail++;
    sectionResults[section].details.push(detail);
    issues.push(`[${section}] ${detail}`);
  }
}

async function fetchHtml(path, opts = {}) {
  const r = await fetch(BASE + path, { redirect: opts.redirect || 'manual' });
  const text = opts.noBody ? '' : await r.text();
  return { status: r.status, location: r.headers.get('location'), text };
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
function schemaGraph(html) {
  const types = new Set();
  let invalid = 0;
  let nestedOffer = false;
  for (const m of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const d = JSON.parse(m[1].trim());
      const items = d['@graph'] || (Array.isArray(d) ? d : [d]);
      for (const it of items) {
        const t = it['@type'];
        if (Array.isArray(t)) t.forEach((x) => types.add(x));
        else if (t) types.add(t);
        if (it.offers?.['@type'] === 'Offer' || (Array.isArray(it.offers) && it.offers.some((o) => o['@type'] === 'Offer'))) {
          nestedOffer = true;
          types.add('Offer');
        }
      }
    } catch {
      invalid++;
    }
  }
  return { types: [...types], invalid, nestedOffer };
}

// ── Config / Dutch isolation ──
setSection('Dutch', LOCALES.includes('nl'), 'NL in LOCALES');
setSection('Dutch', !INDEXABLE_LOCALES.includes('nl'), 'NL not in INDEXABLE_LOCALES');
setSection('Dutch', INDEXABLE_LOCALES.join(',') === 'en,de,fr,it,es,pl,ru', `INDEXABLE=${INDEXABLE_LOCALES}`);
const homeAlts = buildAlternates('home');
setSection('Dutch', !homeAlts.some((a) => a.hreflang === 'nl' || a.href.includes('/nl')), `hreflang=${homeAlts.map((a) => a.hreflang)}`);
for (const file of ['sitemap.xml', 'sitemap-hreflang.xml', 'sitemap-images.xml', 'sitemap-index.xml']) {
  const text = readFileSync(`public/${file}`, 'utf8');
  const hasNl = /hreflang=["']nl["']|https?:\/\/[^"'<\s]+\/nl(?:\/|"|'|<|\s|$)/i.test(text);
  setSection('Dutch', !hasNl, `${file} NL exclusion`);
  setSection('SEO', !hasNl, `${file} no NL`);
}

// ── Routing ──
const map = buildEdgeRedirectMap();
let loops = 0;
for (const [from, to] of map) {
  if (from === to) loops++;
  if (resolveEdgeRedirect(to, map) === from) loops++;
}
setSection('Routing', loops === 0, `redirect loops=${loops} map=${map.size}`);
setSection('Routing', !resolveEdgeRedirect('/nl'), 'NL home not edge-redirected');

// Sample real legacy redirects from map
const legacySamples = [...map.entries()].filter(([k]) => k.startsWith('/de/') || k.startsWith('/')).slice(0, 5);
for (const [from, to] of legacySamples.slice(0, 3)) {
  const r = await fetchHtml(from, { redirect: 'manual' });
  const ok = r.status === 301 || r.status === 308;
  setSection('Routing', ok, `legacy ${from} → ${to} got status=${r.status} loc=${r.location}`);
}

// Locale routes
const sampleIds = ['home', 'about', 'tours', 'tour7', 'guideWhaleWatching', 'destSigiriya', 'guides', 'contact'];
for (const locale of LOCALES) {
  for (const id of sampleIds) {
    const path = buildPath(id, locale);
    const r = await fetchHtml(path);
    setSection('Routing', r.status === 200, `${locale}/${id} ${path} status=${r.status}`);
  }
}

// 404
{
  const r = await fetchHtml('/qa-missing-final-404');
  setSection('Routing', r.status === 404, `404 status=${r.status}`);
  setSection('SEO', /noindex/i.test(meta(r.text, 'robots') || ''), `404 robots=${meta(r.text, 'robots')}`);
}

// ── SSR SEO per locale home ──
const localeSnap = {};
for (const locale of LOCALES) {
  const path = buildPath('home', locale);
  const r = await fetchHtml(path);
  const robots = meta(r.text, 'robots');
  const can = canonical(r.text);
  const hl = hreflangs(r.text);
  const t = title(r.text);
  const d = meta(r.text, 'description');
  const sc = schemaGraph(r.text);
  const hs = h1s(r.text);
  localeSnap[locale] = { path, status: r.status, robots, can, hl, t, lang: lang(r.text), og: prop(r.text, 'og:locale'), tw: meta(r.text, 'twitter:card'), h1: hs, types: sc.types };

  setSection('SSR', r.status === 200, `${locale} status`);
  setSection('SSR', (lang(r.text) || '').toLowerCase().startsWith(locale), `${locale} html lang=${lang(r.text)}`);
  setSection('SSR', !!t && t.length > 10, `${locale} title`);
  setSection('SSR', !!d && d.length > 40, `${locale} description`);
  setSection('SEO', !!can, `${locale} canonical=${can}`);
  setSection('SEO', !!prop(r.text, 'og:title') && !!prop(r.text, 'og:locale'), `${locale} Open Graph`);
  setSection('SEO', !!meta(r.text, 'twitter:card'), `${locale} Twitter`);
  setSection('SEO', !hl.includes('nl'), `${locale} hreflang excludes NL`);
  setSection('SEO', sc.invalid === 0 && sc.types.length > 0, `${locale} schema valid types=${sc.types.join(',')}`);
  setSection('Content', hs.length === 1, `${locale} H1 count=${hs.length}`);

  if (locale === 'nl') {
    setSection('Dutch', /noindex/i.test(robots || '') && /follow/i.test(robots || ''), `NL robots=${robots}`);
    setSection('Dutch', /\/nl/.test(can || ''), `NL canonical=${can}`);
    setSection('Dutch', !hl.includes('nl'), 'NL page has no hreflang=nl');
  } else {
    setSection('SEO', /index/i.test(robots || '') && !/noindex/i.test(robots || ''), `${locale} robots=${robots}`);
    setSection('SEO', hl.includes(locale), `${locale} in hreflang cluster`);
  }
}

// Structured data deep checks
{
  const tour = await fetchHtml(buildPath('tour7', 'en'));
  const sc = schemaGraph(tour.text);
  setSection('Structured Data', sc.types.includes('Product'), `Product: ${sc.types}`);
  setSection('Structured Data', sc.types.includes('Offer') || sc.nestedOffer, `Offer nested/top`);
  setSection('Structured Data', sc.types.includes('BreadcrumbList'), 'tour BreadcrumbList');
  setSection('Structured Data', sc.types.includes('TravelAgency') && sc.types.includes('LocalBusiness'), 'TravelAgency+LocalBusiness');
  setSection('Structured Data', sc.types.includes('Organization'), 'Organization');

  const about = await fetchHtml(buildPath('about', 'en'));
  const as = schemaGraph(about.text);
  setSection('Structured Data', as.types.includes('FAQPage'), `about FAQ: ${as.types}`);
  setSection('Structured Data', as.types.includes('BreadcrumbList'), `about Breadcrumb: ${as.types}`);

  const guide = await fetchHtml(buildPath('guideWhaleWatching', 'en'));
  const gs = schemaGraph(guide.text);
  setSection('Structured Data', gs.types.includes('Article'), `guide Article: ${gs.types}`);
  setSection('Structured Data', gs.types.includes('BreadcrumbList'), `guide Breadcrumb: ${gs.types}`);

  const dest = await fetchHtml(buildPath('destSigiriya', 'en'));
  const ds = schemaGraph(dest.text);
  setSection('Structured Data', ds.types.some((t) => /TouristDestination|Place/.test(t)), `dest types: ${ds.types}`);
}

// Performance heuristics
{
  const r = await fetchHtml('/');
  setSection('Performance', !/AW-XXXXXXXX|G-XXXXXXXX/i.test(r.text), 'no ads placeholder');
  const hosts = [...new Set([...r.text.matchAll(/https?:\/\/(?!www\.sundowntours\.com|localhost)([^"'/\s]+)/gi)].map((m) => m[1]))];
  setSection('Performance', hosts.length < 30, `third-party hosts=${hosts.length}`);
  // hydration markers
  setSection('Performance', /ng-server-context|ng-state|_nghost|app-root/i.test(r.text), 'SSR app root present');
}

// Content duplicates across indexable home titles
{
  const titles = INDEXABLE_LOCALES.map((l) => localeSnap[l]?.t).filter(Boolean);
  setSection('Content', new Set(titles).size === titles.length, 'unique home titles');
}

// NL switcher + internal linking
{
  const r = await fetchHtml('/');
  setSection('Dutch', /flagcdn\.com\/w20\/nl\.png/i.test(r.text) || /Nederlands/i.test(r.text), 'NL in language switcher');
  const nlHrefs = [...r.text.matchAll(/href=["'](\/nl[^"']*)["']/gi)].map((m) => m[1]);
  setSection('Internal Linking', nlHrefs.length === 0, `home NL hrefs=${nlHrefs.length} ${nlHrefs.slice(0, 5)}`);
}

// Indexable EN smoke
{
  let bad = 0;
  const samples = [];
  for (const p of PAGES.filter((x) => x.index)) {
    const path = buildPath(p.id, 'en');
    const r = await fetchHtml(path);
    if (r.status !== 200) {
      bad++;
      if (samples.length < 15) samples.push(`${p.id}:${r.status}`);
      continue;
    }
    const robots = meta(r.text, 'robots') || '';
    if (/noindex/i.test(robots)) {
      bad++;
      if (samples.length < 15) samples.push(`${p.id}:noindex`);
    }
  }
  setSection('Routing', bad === 0, `indexable EN issues=${bad} ${samples.join(';')}`);
}

// noindex stubs linked from home
{
  const r = await fetchHtml('/');
  const links = [...new Set([...r.text.matchAll(/href=["'](\/[^"']+)["']/gi)].map((m) => m[1]).filter((h) => !h.startsWith('//') && !h.startsWith('/nl')))];
  const noidx = [];
  for (const h of links.slice(0, 80)) {
    const page = await fetchHtml(h);
    if (page.status === 200 && /noindex/i.test(meta(page.text, 'robots') || '')) noidx.push(h);
  }
  // privacy etc. may be intentional utility noindex
  const nonUtility = noidx.filter((h) => !/privacy|terms|booking|cookie/i.test(h));
  setSection('Internal Linking', nonUtility.length === 0, `noindex targets from home: ${noidx.join(', ') || 'none'}`);
}

// NL content clone check
{
  const nl = localeSnap.nl?.t;
  const en = localeSnap.en?.t;
  const de = localeSnap.de?.t;
  setSection('Content', nl && nl !== en, `NL title distinct from EN (${nl})`);
  if (nl === de) setSection('Content', false, 'NL home title identical to DE (clone risk)');
  else setSection('Content', true, 'NL title not DE clone');
}

const verdict = {};
for (const [name, s] of Object.entries(sectionResults)) {
  verdict[name] = s.fail === 0 ? 'PASS' : 'FAIL';
}

const report = {
  BASE,
  LOCALES,
  INDEXABLE_LOCALES,
  verdict,
  sectionResults,
  issues,
  localeSnap,
  deployNote:
    'Production (www) currently serves committed origin/main without these uncommitted changes. Local SSR validates current workspace source.',
};

writeFileSync('scripts/qa-final-report.json', JSON.stringify(report, null, 2), 'utf8');
console.log('=== VERDICT ===');
for (const [k, v] of Object.entries(verdict)) {
  const s = sectionResults[k];
  console.log(`${v} ${k} (pass=${s.pass} fail=${s.fail})`);
}
console.log('=== ISSUES', issues.length, '===');
issues.forEach((i) => console.log('-', i));
