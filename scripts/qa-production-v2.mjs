import { writeFileSync } from 'fs';
import { buildPath, LOCALES, INDEXABLE_LOCALES, PAGES } from '../src/app/i18n/site-data.mjs';

const BASE = process.argv[2] || 'https://www.sundowntours.com';

async function fetchHtml(path) {
  const r = await fetch(BASE + path, {
    headers: { 'user-agent': 'SundownQA/1.0', accept: 'text/html' },
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
function isEnglishHomeShell(r) {
  return (
    /index\.html/i.test(r.disposition || '') &&
    /Private|&amp; Tailor-Made|Tailor-Made Tours/i.test(title(r.text) || '') &&
    (canonical(r.text) || '').replace(/\/$/, '') === 'https://www.sundowntours.com'
  );
}
function summarize(path, r) {
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
    ogTitle: prop(r.text, 'og:title'),
    ogUrl: prop(r.text, 'og:url'),
    twitter: meta(r.text, 'twitter:card'),
    description: (meta(r.text, 'description') || '').slice(0, 120),
    hreflangs: hreflangs(r.text),
    h1s: h1s(r.text),
    schema: schemaTypes(r.text),
    englishHomeShell: isEnglishHomeShell(r),
    hasNlHreflang: hreflangs(r.text).includes('nl'),
    nlHrefCount: [...r.text.matchAll(/href=["'](\/nl[^"']*)["']/gi)].length,
    switcherNl: /Nederlands|flagcdn\.com\/..\/nl\.svg|\/nl["']/i.test(r.text),
  };
}

const sampleIds = [
  'home',
  'about',
  'tours',
  'tour7',
  'guideWhaleWatching',
  'destSigiriya',
  'guides',
  'destinations',
  'contact',
  'reviews',
];

const results = { meta: { BASE, LOCALES, INDEXABLE_LOCALES }, pages: {}, issues: [] };

function fail(msg) {
  results.issues.push(msg);
}

// Locale homes
for (const locale of LOCALES) {
  const path = buildPath('home', locale);
  const r = await fetchHtml(path);
  const s = summarize(path, r);
  results.pages[`home:${locale}`] = s;
  if (r.status !== 200) fail(`home:${locale} status ${r.status}`);
  if (s.englishHomeShell && locale !== 'en') fail(`home:${locale} served English index.html shell`);
  if (locale === 'nl') {
    if (!/noindex/i.test(s.robots || '')) fail(`nl home robots=${s.robots}`);
    if (s.lang !== 'nl') fail(`nl home lang=${s.lang}`);
    if (!/\/nl/.test(s.canonical || '')) fail(`nl home canonical=${s.canonical}`);
  } else {
    if (/noindex/i.test(s.robots || '')) fail(`${locale} home unexpectedly noindex`);
    if (s.hasNlHreflang) fail(`${locale} home has nl hreflang`);
    if (!(s.hreflangs || []).includes(locale) && locale !== 'en') {
      /* en uses 'en' */
    }
    if (!(s.hreflangs || []).includes(locale)) fail(`${locale} missing from hreflang`);
  }
}

// Key pages EN + DE + NL
for (const id of sampleIds) {
  if (id === 'home') continue;
  for (const locale of ['en', 'de', 'nl']) {
    const path = buildPath(id, locale);
    const r = await fetchHtml(path);
    const s = summarize(path, r);
    results.pages[`${id}:${locale}`] = s;
    if (r.status !== 200) fail(`${id}:${locale} status ${r.status} path=${path}`);
    if (s.englishHomeShell) fail(`${id}:${locale} English shell at ${path}`);
    if (locale === 'nl' && !/noindex/i.test(s.robots || '') && !s.englishHomeShell) {
      fail(`${id}:nl robots=${s.robots}`);
    }
  }
}

// Schema expectations on EN
const tour = results.pages['tour7:en'];
if (!tour?.schema?.types?.includes('Product')) fail(`tour7:en missing Product schema: ${tour?.schema?.types}`);
if (!tour?.schema?.types?.includes('Offer')) fail(`tour7:en missing Offer schema`);
if (!tour?.schema?.types?.includes('BreadcrumbList')) fail(`tour7:en missing BreadcrumbList`);

const guide = results.pages['guideWhaleWatching:en'];
if (!guide?.schema?.types?.includes('Article')) fail(`guideWhaleWatching:en missing Article: ${guide?.schema?.types}`);

const dest = results.pages['destSigiriya:en'];
if (!dest?.schema?.types?.some((t) => /TouristDestination|Place/.test(t))) {
  fail(`destSigiriya:en missing destination schema: ${dest?.schema?.types}`);
}

const about = results.pages['about:en'];
if (!about?.schema?.types?.includes('Organization')) fail('about missing Organization');
if (!about?.schema?.types?.includes('TravelAgency')) fail('about missing TravelAgency');
if (!about?.schema?.types?.includes('LocalBusiness')) fail('about missing LocalBusiness');
if (!about?.schema?.types?.includes('FAQPage')) fail('about missing FAQPage');
if (!about?.schema?.types?.includes('BreadcrumbList')) fail('about missing BreadcrumbList');

// 404
{
  const r = await fetchHtml('/qa-missing-zzz-404');
  const s = summarize('/qa-missing-zzz-404', r);
  results.pages['404'] = s;
  if (r.status !== 404) fail(`404 status=${r.status} (soft-404 if 200+home)`);
  if (!/noindex/i.test(s.robots || '')) fail(`404 robots=${s.robots}`);
  if (s.englishHomeShell) fail('404 served English home shell');
}

// Legacy redirect
{
  const r = await fetchHtml('/de/7-day-sri-lanka-tour');
  results.pages['legacy:de:tour7'] = {
    status: r.status,
    location: r.location,
    disposition: r.disposition,
    title: title(r.text),
    canonical: canonical(r.text),
  };
  const ok = r.status === 301 || r.status === 308 || (r.status === 200 && /7-tage/i.test(canonical(r.text) || r.location || ''));
  if (!ok) fail(`legacy de tour7 status=${r.status} loc=${r.location} can=${canonical(r.text)}`);
}

// Sitemap NL exclusion (already known pass — reconfirm)
for (const sm of ['/sitemap.xml', '/sitemap-hreflang.xml', '/sitemap-images.xml']) {
  const r = await fetchHtml(sm);
  const hasNl = /hreflang=["']nl["']|https?:\/\/[^"'<\s]+\/nl(?:\/|"|'|<|\s|$)/i.test(r.text);
  results.pages[`sitemap:${sm}`] = { status: r.status, hasNl, locs: (r.text.match(/<loc>/g) || []).length };
  if (hasNl) fail(`${sm} contains NL`);
}

// Switcher on EN home
{
  const home = results.pages['home:en'];
  if (!home?.switcherNl) fail('EN home SSR missing NL in language switcher');
}

// Indexable EN smoke (subset for time): all index:true pages
const indexable = PAGES.filter((p) => p.index);
let shellCount = 0;
let broken = 0;
const shellSamples = [];
const brokenSamples = [];
for (const p of indexable) {
  const path = buildPath(p.id, 'en');
  const r = await fetchHtml(path);
  if (r.status !== 200) {
    broken++;
    if (brokenSamples.length < 20) brokenSamples.push(`${p.id}:${path}:${r.status}`);
    continue;
  }
  if (isEnglishHomeShell(r) && p.id !== 'home') {
    shellCount++;
    if (shellSamples.length < 25) shellSamples.push(`${p.id}:${path}`);
  }
}
results.smoke = {
  indexableCount: indexable.length,
  broken,
  brokenSamples,
  englishShellCount: shellCount,
  shellSamples,
};
if (broken) fail(`EN indexable broken routes: ${broken}`);
if (shellCount) fail(`EN indexable pages served as English home shell: ${shellCount} e.g. ${shellSamples.slice(0, 8).join(', ')}`);

// Duplicate titles among locale homes
const titles = INDEXABLE_LOCALES.map((l) => results.pages[`home:${l}`]?.title).filter(Boolean);
if (new Set(titles).size !== titles.length) fail('Duplicate home titles across indexable locales');

writeFileSync('scripts/qa-production-v2-report.json', JSON.stringify(results, null, 2), 'utf8');
console.log('ISSUES', results.issues.length);
results.issues.forEach((i) => console.log('-', i));
console.log('SMOKE', results.smoke);
