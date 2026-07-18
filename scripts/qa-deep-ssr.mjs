import { writeFileSync } from 'fs';
import { buildPath, PAGES, LOCALES, INDEXABLE_LOCALES } from '../src/app/i18n/site-data.mjs';
import { buildEdgeRedirectMap, resolveEdgeRedirect } from '../src/app/i18n/edge-redirects.mjs';

const BASE = process.argv[2] || 'http://localhost:4000';

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
function hreflangs(html) {
  return [...html.matchAll(/hreflang=["']([^"']+)["']/gi)].map((m) => m[1]);
}
function title(html) {
  return (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || null;
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
function hrefs(html) {
  return [...html.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1]);
}

const out = { checks: [], schemaByPage: {}, linking: {}, redirects: {}, content: {} };

function note(name, ok, detail) {
  out.checks.push({ name, ok, detail });
}

// Core locales home
for (const locale of LOCALES) {
  const path = locale === 'en' ? '/' : `/${locale}`;
  const r = await fetchHtml(path);
  const robots = meta(r.text, 'robots');
  const can = canonical(r.text);
  const hl = hreflangs(r.text);
  const sc = schemaTypes(r.text);
  note(`${locale}.home.status`, r.status === 200, String(r.status));
  note(
    `${locale}.home.robots`,
    locale === 'nl' ? /noindex/i.test(robots || '') : /index/i.test(robots || '') && !/noindex/i.test(robots || ''),
    robots
  );
  note(`${locale}.home.noNlHreflang`, !hl.includes('nl'), hl.join(','));
  note(`${locale}.home.schemaValid`, sc.invalid === 0, `invalid=${sc.invalid} types=${sc.types.join(',')}`);
  out.schemaByPage[`home:${locale}`] = sc;
}

// Tour product schema
for (const locale of ['en', 'de', 'fr', 'nl']) {
  const path = buildPath('tour7', locale);
  const r = await fetchHtml(path);
  const sc = schemaTypes(r.text);
  const robots = meta(r.text, 'robots');
  note(`tour7.${locale}.status`, r.status === 200, path);
  note(
    `tour7.${locale}.types`,
    sc.types.includes('Product') && sc.types.includes('Offer'),
    sc.types.join(',')
  );
  note(
    `tour7.${locale}.robots`,
    locale === 'nl' ? /noindex/i.test(robots || '') : !/noindex/i.test(robots || ''),
    robots
  );
  out.schemaByPage[`tour7:${locale}`] = sc;
}

// Guide article
{
  const path = buildPath('guideWhales', 'en');
  const r = await fetchHtml(path);
  const sc = schemaTypes(r.text);
  note('guide.whales.article', sc.types.includes('Article'), sc.types.join(','));
  note('guide.whales.breadcrumb', sc.types.includes('BreadcrumbList'), sc.types.join(','));
  out.schemaByPage['guideWhales:en'] = sc;
}

// Destination
{
  const path = buildPath('destinationSigiriya', 'en');
  const r = await fetchHtml(path);
  const sc = schemaTypes(r.text);
  const robots = meta(r.text, 'robots');
  note('dest.sigiriya.status', r.status === 200, path);
  note('dest.sigiriya.types', sc.types.includes('TouristDestination') || sc.types.includes('Place'), sc.types.join(','));
  out.schemaByPage['destinationSigiriya:en'] = { ...sc, robots };
}

// About business schema
{
  const r = await fetchHtml('/about');
  const sc = schemaTypes(r.text);
  note(
    'about.orgTypes',
    sc.types.includes('Organization') &&
      sc.types.includes('TravelAgency') &&
      sc.types.includes('LocalBusiness'),
    sc.types.join(',')
  );
  note('about.faq', sc.types.includes('FAQPage'), sc.types.join(','));
}

// 404
{
  const r = await fetchHtml('/qa-missing-route-zzz-999');
  note('404.status', r.status === 404, String(r.status));
  note('404.robots', /noindex/i.test(meta(r.text, 'robots') || ''), meta(r.text, 'robots'));
}

// Legacy redirects via edge map + HTTP
const map = buildEdgeRedirectMap();
const legacy = ['/de/sri-lanka-rundreise', '/de/privatreisen', '/fr/voyages-prives'];
for (const p of legacy) {
  const target = resolveEdgeRedirect(p, map);
  const r = await fetchHtml(p, { redirect: 'manual' });
  out.redirects[p] = { mapTarget: target, httpStatus: r.status, location: r.location };
  note(`legacy.map.${p}`, !!target, target || 'none');
  note(
    `legacy.http.${p}`,
    r.status === 301 || r.status === 302 || r.status === 308 || r.status === 307 || (target && r.status === 200),
    `status=${r.status} loc=${r.location}`
  );
}

// Internal linking: NL hrefs on indexable pages
const indexableSamples = ['/', '/de', buildPath('tour7', 'en'), buildPath('tours', 'en'), buildPath('about', 'en')];
for (const path of indexableSamples) {
  const r = await fetchHtml(path);
  const all = hrefs(r.text).filter((h) => h === '/nl' || h.startsWith('/nl/') || h.includes('/nl?'));
  // Switcher typically has one /nl link per page context
  out.linking[path] = { nlHrefs: all, count: all.length };
  note(`linking.nl.${path}`, all.length <= 3, `count=${all.length} ${all.slice(0, 5).join(' | ')}`);
}

// Language switcher presence
{
  const r = await fetchHtml('/');
  const hasLangPill = r.text.includes('lang-pill') || r.text.includes('language');
  const hasNlOption = /\/nl["']|"nl"|'nl'|locale-nl|Nederland|Dutch/i.test(r.text);
  note('ui.langSwitcher', hasLangPill, hasLangPill ? 'present' : 'missing');
  note('ui.nlOption', hasNlOption, hasNlOption ? 'NL present' : 'NL missing from SSR');
}

// Content quality: titles/descriptions uniqueness for homes
const titles = {};
const descs = {};
for (const locale of INDEXABLE_LOCALES) {
  const path = locale === 'en' ? '/' : `/${locale}`;
  const r = await fetchHtml(path);
  titles[locale] = title(r.text);
  descs[locale] = meta(r.text, 'description');
}
const titleVals = Object.values(titles);
const descVals = Object.values(descs);
note('content.uniqueTitles', new Set(titleVals).size === titleVals.length, JSON.stringify(titles));
note('content.uniqueDescs', new Set(descVals).size === descVals.length, JSON.stringify(Object.fromEntries(Object.entries(descs).map(([k, v]) => [k, (v || '').slice(0, 50)]))));

// Missing translations heuristic: NL overlay equality vs DE
{
  const en = await fetchHtml('/');
  const nl = await fetchHtml('/nl');
  const de = await fetchHtml('/de');
  const enTitle = title(en.text);
  const nlTitle = title(nl.text);
  const deTitle = title(de.text);
  note('content.nlNotEnglishClone', nlTitle !== enTitle, `nl=${nlTitle} en=${enTitle}`);
  note('content.nlTitlePresent', !!nlTitle && nlTitle.length > 10, nlTitle);
  out.content.titles = { en: enTitle, de: deTitle, nl: nlTitle };
}

// Orphan / indexable page smoke: all indexable pages resolve for EN
const indexablePages = PAGES.filter((p) => p.index);
let broken = 0;
const brokenList = [];
for (const p of indexablePages) {
  const path = buildPath(p.id, 'en');
  const r = await fetchHtml(path);
  if (r.status !== 200) {
    broken++;
    if (brokenList.length < 25) brokenList.push(`${p.id}:${path}:${r.status}`);
  }
}
note('routing.indexableEnAll200', broken === 0, `broken=${broken} ${brokenList.join('; ')}`);

// noindex stubs linked from home?
{
  const r = await fetchHtml('/');
  const links = hrefs(r.text).filter((h) => h.startsWith('/') && !h.startsWith('//'));
  const unique = [...new Set(links)];
  const noindexLinked = [];
  for (const h of unique.slice(0, 80)) {
    if (h.startsWith('/nl')) continue;
    const page = await fetchHtml(h);
    const robots = meta(page.text, 'robots') || '';
    if (/noindex/i.test(robots) && page.status === 200) {
      noindexLinked.push(h);
      if (noindexLinked.length >= 15) break;
    }
  }
  out.linking.homeNoindexTargets = noindexLinked;
  note('linking.homeNoNoindexTargets', noindexLinked.length === 0, noindexLinked.join(', ') || 'none');
}

// Performance heuristics in SSR HTML
{
  const r = await fetchHtml('/');
  const thirdParty = [...r.text.matchAll(/https?:\/\/(?!www\.sundowntours\.com|localhost)([^"'/\s]+)/gi)].map(
    (m) => m[1]
  );
  const hosts = [...new Set(thirdParty)];
  out.performance = { thirdPartyHosts: hosts.slice(0, 40) };
  const hasAdsPlaceholder = /AW-XXXXXXXX|G-XXXXXXXX|gtag\('config',\s*['"]AW-/i.test(r.text);
  note('perf.noAdsPlaceholder', !hasAdsPlaceholder, hasAdsPlaceholder ? 'placeholder ads id' : 'ok');
  note('perf.thirdPartyBounded', hosts.length < 25, `hosts=${hosts.length}`);
}

const fails = out.checks.filter((c) => !c.ok);
out.summary = { pass: out.checks.filter((c) => c.ok).length, fail: fails.length, fails };
writeFileSync('scripts/qa-deep-ssr-report.json', JSON.stringify(out, null, 2), 'utf8');
console.log('PASS', out.summary.pass, 'FAIL', out.summary.fail);
fails.forEach((f) => console.log('-', f.name, '=>', f.detail));
