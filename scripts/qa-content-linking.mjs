import { writeFileSync, readFileSync } from 'fs';
import { buildPath, PAGES, LOCALES, INDEXABLE_LOCALES } from '../src/app/i18n/site-data.mjs';

const BASE = process.argv[2] || 'http://localhost:4000';
const issues = [];
const notes = [];

async function fetchHtml(path) {
  const r = await fetch(BASE + path, { redirect: 'manual' });
  return { status: r.status, location: r.headers.get('location'), text: await r.text() };
}
function meta(html, name) {
  const re1 = new RegExp(`name=["']${name}["'][^>]+content=["']([^"']*)["']`, 'i');
  const re2 = new RegExp(`content=["']([^"']*)["'][^>]+name=["']${name}["']`, 'i');
  return (html.match(re1) || html.match(re2) || [])[1] || null;
}
function title(html) {
  return (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || null;
}
function h1s(html) {
  return [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((h) =>
    h[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  );
}
function hrefs(html) {
  return [...html.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1]);
}
function alts(html) {
  return [...html.matchAll(/<img[^>]+alt=["']([^"']*)["']/gi)].map((m) => m[1]);
}

// Sitemap NL
for (const file of ['sitemap.xml', 'sitemap-hreflang.xml', 'sitemap-images.xml', 'sitemap-index.xml']) {
  const text = readFileSync(`public/${file}`, 'utf8');
  if (/hreflang=["']nl["']|https?:\/\/[^"'<\s]+\/nl(?:\/|"|'|<|\s|$)/i.test(text)) {
    issues.push(`${file} contains NL`);
  } else {
    notes.push(`${file}: NL excluded OK`);
  }
}

// Content: missing SEO fields for indexable pages across indexable locales
const missingSeo = [];
const titleMap = new Map();
const descMap = new Map();
for (const page of PAGES.filter((p) => p.index)) {
  for (const locale of INDEXABLE_LOCALES) {
    const path = buildPath(page.id, locale);
    const r = await fetchHtml(path);
    if (r.status !== 200) {
      missingSeo.push(`${page.id}:${locale} status ${r.status}`);
      continue;
    }
    const t = title(r.text);
    const d = meta(r.text, 'description');
    const robots = meta(r.text, 'robots');
    const hs = h1s(r.text);
    if (!t || t.length < 10) missingSeo.push(`${page.id}:${locale} weak title`);
    if (!d || d.length < 40) missingSeo.push(`${page.id}:${locale} weak description`);
    if (/noindex/i.test(robots || '')) missingSeo.push(`${page.id}:${locale} noindex but page.index=true`);
    if (hs.length !== 1) missingSeo.push(`${page.id}:${locale} h1 count=${hs.length}`);
    const tk = `${locale}|${t}`;
    titleMap.set(tk, (titleMap.get(tk) || 0) + 1);
    const dk = `${locale}|${d}`;
    descMap.set(dk, (descMap.get(dk) || 0) + 1);

    // empty alts
    const emptyAlts = alts(r.text).filter((a) => a.trim() === '');
    // decorative alts allowed sparingly; flag only if many
    if (emptyAlts.length > 8) {
      issues.push(`${page.id}:${locale} many empty img alts (${emptyAlts.length})`);
    }
  }
}

const dupTitles = [...titleMap.entries()].filter(([, n]) => n > 1).slice(0, 20);
const dupDescs = [...descMap.entries()].filter(([, n]) => n > 1).slice(0, 20);
if (dupTitles.length) issues.push(`Duplicate titles within locale: ${dupTitles.map(([k, n]) => `${k}×${n}`).join('; ')}`);
if (dupDescs.length) issues.push(`Duplicate descriptions within locale: ${dupDescs.map(([k, n]) => `${k.slice(0, 80)}×${n}`).join('; ')}`);
if (missingSeo.length) {
  issues.push(...missingSeo.slice(0, 40));
  if (missingSeo.length > 40) issues.push(`...and ${missingSeo.length - 40} more SEO/content issues`);
}

// NL pages: noindex + not in accidental index paths
for (const id of ['home', 'tour7', 'about', 'guideWhaleWatching']) {
  const path = buildPath(id, 'nl');
  const r = await fetchHtml(path);
  const robots = meta(r.text, 'robots') || '';
  if (r.status !== 200) issues.push(`NL ${id} status ${r.status}`);
  if (!/noindex/i.test(robots) || !/follow/i.test(robots)) issues.push(`NL ${id} robots=${robots}`);
  const hl = [...r.text.matchAll(/hreflang=["']([^"']+)["']/gi)].map((m) => m[1]);
  if (hl.includes('nl')) issues.push(`NL ${id} exposes hreflang=nl`);
}

// Language switcher: button-based (no href) — ensure NL locale meta present in SSR
{
  const r = await fetchHtml('/');
  const hasNlFlag = /flagcdn\.com\/w20\/nl\.png/i.test(r.text) || /Nederlands/i.test(r.text);
  if (!hasNlFlag) issues.push('EN home missing NL flag/label in language switcher SSR');
  else notes.push('Language switcher includes NL (flag button)');
}

// Internal links to /nl from content (exclude switcher buttons which have no href)
const contentPages = ['/', buildPath('tour7', 'en'), buildPath('tours', 'en'), buildPath('guides', 'en'), buildPath('destinations', 'en')];
for (const path of contentPages) {
  const r = await fetchHtml(path);
  const nlLinks = hrefs(r.text).filter((h) => h === '/nl' || h.startsWith('/nl/'));
  if (nlLinks.length) {
    issues.push(`${path} has ${nlLinks.length} href(s) to NL: ${nlLinks.slice(0, 5).join(', ')}`);
  }
}

// Links from indexable pages to noindex stubs (dest markets/months etc.)
{
  const r = await fetchHtml('/');
  const links = [...new Set(hrefs(r.text).filter((h) => h.startsWith('/') && !h.startsWith('//') && !h.startsWith('/nl')))];
  const noindexTargets = [];
  for (const h of links.slice(0, 100)) {
    const page = await fetchHtml(h);
    const robots = meta(page.text, 'robots') || '';
    if (page.status === 200 && /noindex/i.test(robots)) {
      noindexTargets.push(h);
    }
  }
  if (noindexTargets.length) {
    issues.push(`Home links to noindex pages (${noindexTargets.length}): ${noindexTargets.slice(0, 12).join(', ')}`);
  } else {
    notes.push('Home does not link to noindex targets (sample)');
  }
}

// NL content quality: compare titles vs DE (clone detection)
{
  const nl = await fetchHtml('/nl');
  const de = await fetchHtml('/de');
  const en = await fetchHtml('/');
  const nt = title(nl.text);
  const dt = title(de.text);
  const et = title(en.text);
  if (nt === et) issues.push('NL home title identical to EN (fallback/clone)');
  if (nt === dt) issues.push('NL home title identical to DE (likely DE clone overlay)');
  notes.push(`titles en/de/nl: ${et} | ${dt} | ${nt}`);
}

// Third-party / consent on home
{
  const r = await fetchHtml('/');
  if (/AW-XXXXXXXX|G-XXXXXXXX/i.test(r.text)) issues.push('Ads/Analytics placeholder ID in SSR');
  const hosts = [...new Set([...r.text.matchAll(/https?:\/\/(?!www\.sundowntours\.com|localhost)([^"'/\s]+)/gi)].map((m) => m[1]))];
  notes.push(`thirdPartyHosts=${hosts.length}: ${hosts.slice(0, 15).join(', ')}`);
}

const out = { issues, notes, missingSeoCount: missingSeo.length, dupTitles: dupTitles.length, dupDescs: dupDescs.length };
writeFileSync('scripts/qa-content-linking-report.json', JSON.stringify(out, null, 2), 'utf8');
console.log('ISSUES', issues.length);
issues.forEach((i) => console.log('-', i));
console.log('NOTES');
notes.forEach((n) => console.log('*', n));
