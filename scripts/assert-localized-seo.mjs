/**
 * Asserts SEO invariants for every indexable page × locale:
 *   - URL is listed in public/sitemap.xml
 *   - self-canonical + full reciprocal hreflang set (from site-data)
 *   - translated SEO title exists (not empty, not identical English fallback when locale ≠ en)
 * Optional --live: HTTP-check each URL (status 200, canonical, hreflang, title present).
 *
 * Usage:
 *   node scripts/assert-localized-seo.mjs
 *   node scripts/assert-localized-seo.mjs --live
 *   node scripts/assert-localized-seo.mjs --live --sample=12
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PAGES,
  DEFAULT_LOCALE,
  LOCALES,
  BASE_URL,
  buildUrl,
  buildAlternates,
  getIndexableLocalesForPage,
  isPageIndexable,
} from '../src/app/i18n/site-data.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const live = process.argv.includes('--live');
const sampleArg = process.argv.find((a) => a.startsWith('--sample='));
const sampleLimit = sampleArg ? Number(sampleArg.split('=')[1]) : Infinity;
const UA = 'Mozilla/5.0 (compatible; SundownSeoAssert/1.0; +https://www.sundowntours.com/)';

function loadDictTitles() {
  /** @type {Record<string, Record<string, string>>} */
  const out = {};
  for (const locale of LOCALES) {
    const path = join(root, 'src', 'app', 'i18n', 'content', `${locale}.ts`);
    const text = readFileSync(path, 'utf8');
    const seoStart = text.indexOf('\n  seo: {');
    const seo = text.slice(seoStart >= 0 ? seoStart : text.indexOf('seo: {'));
    out[locale] = {};
    for (const page of PAGES) {
      const re = new RegExp(`\\n\\s*${page.id}:\\s*\\{([\\s\\S]*?)\\n\\s*\\},`);
      const m = seo.match(re);
      if (!m) continue;
      const titleMatch = m[1].match(/title:\s*(['"`])([\s\S]*?)\1/);
      if (titleMatch) out[locale][page.id] = titleMatch[2].trim();
    }
  }
  return out;
}

function loadSitemapLocs() {
  const path = join(root, 'public', 'sitemap.xml');
  if (!existsSync(path)) {
    throw new Error('public/sitemap.xml missing — run node scripts/generate-sitemap.mjs first');
  }
  const xml = readFileSync(path, 'utf8');
  return new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()));
}

function extractHead(html) {
  const end = html.toLowerCase().indexOf('</head>');
  return end > 0 ? html.slice(0, end) : html.slice(0, 12000);
}

function parseLiveSeo(html, expectedUrl) {
  const head = extractHead(html);
  const title = (head.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1]?.trim() || '';
  const robots =
    (head.match(/name=["']robots["']\s+content=["']([^"']+)["']/i) ||
      head.match(/content=["']([^"']+)["']\s+name=["']robots["']/i) ||
      [])[1] || '';
  const canonical =
    (head.match(/rel=["']canonical["']\s+href=["']([^"']+)["']/i) ||
      head.match(/href=["']([^"']+)["']\s+rel=["']canonical["']/i) ||
      [])[1] || '';
  const hreflangs = [...head.matchAll(/<link[^>]+rel=["']alternate["'][^>]*>/gi)]
    .map((m) => {
      const tag = m[0];
      const hl = (tag.match(/hreflang=["']([^"']+)["']/i) || [])[1];
      const href = (tag.match(/href=["']([^"']+)["']/i) || [])[1];
      return hl && href ? { hreflang: hl, href } : null;
    })
    .filter(Boolean);
  const issues = [];
  if (!title) issues.push('missing <title>');
  if (!/index\s*,\s*follow/i.test(robots)) issues.push(`robots=${robots || 'missing'}`);
  if (canonical !== expectedUrl) issues.push(`canonical=${canonical || 'missing'}`);
  return { title, robots, canonical, hreflangs, issues };
}

async function fetchUrl(url) {
  const res = await fetch(url, {
    headers: { 'user-agent': UA, accept: 'text/html' },
    redirect: 'manual',
  });
  const body = await res.text();
  return { status: res.status, body, location: res.headers.get('location') || '' };
}

const titles = loadDictTitles();
const sitemap = loadSitemapLocs();
const failures = [];
const warnings = [];
/** @type {{ pageId: string, locale: string, url: string }[]} */
const indexable = [];

for (const page of PAGES) {
  if (!page.index) continue;
  for (const locale of getIndexableLocalesForPage(page)) {
    if (!isPageIndexable(page, locale)) continue;
    const url = buildUrl(page.id, locale);
    indexable.push({ pageId: page.id, locale, url });

    if (!sitemap.has(url)) {
      failures.push(`${page.id}/${locale}: missing from sitemap.xml (${url})`);
    }

    const alts = buildAlternates(page.id);
    const expectedCount = getIndexableLocalesForPage(page).length + 1; // + x-default
    if (alts.length !== expectedCount) {
      failures.push(`${page.id}: hreflang count ${alts.length}, expected ${expectedCount}`);
    }
    const self = alts.find((a) => a.href === url);
    if (!self) failures.push(`${page.id}/${locale}: no self hreflang href`);
    if (!alts.some((a) => a.hreflang === 'x-default')) {
      failures.push(`${page.id}: missing x-default`);
    }

    const title = titles[locale]?.[page.id] || '';
    if (!title) {
      // Article pages may derive title from article.h1 — warn only for known dict pages.
      if (page.kind === 'home' || page.kind === 'utility' || page.kind === 'content' || page.kind === 'hub') {
        failures.push(`${page.id}/${locale}: missing seo.${page.id}.title in ${locale}.ts`);
      } else {
        warnings.push(`${page.id}/${locale}: no seo.${page.id}.title (may use article fallback)`);
      }
    } else if (locale !== DEFAULT_LOCALE) {
      const enTitle = titles.en?.[page.id];
      if (enTitle && title === enTitle) {
        failures.push(`${page.id}/${locale}: title identical to English (untranslated)`);
      }
    }
  }
}

console.log(`Indexable routes: ${indexable.length}`);
console.log(`Sitemap <loc> count: ${sitemap.size}`);

let liveChecked = 0;
let liveFailed = 0;
if (live) {
  const subset = indexable.slice(0, sampleLimit);
  console.log(`Live-checking ${subset.length} URLs…`);
  for (const row of subset) {
    liveChecked += 1;
    try {
      const { status, body, location } = await fetchUrl(row.url);
      if (status !== 200) {
        liveFailed += 1;
        failures.push(`${row.url}: HTTP ${status}${location ? ` → ${location}` : ''}`);
        continue;
      }
      const parsed = parseLiveSeo(body, row.url);
      const expectedAlts = buildAlternates(row.pageId);
      for (const alt of expectedAlts) {
        if (!parsed.hreflangs.some((h) => h.hreflang === alt.hreflang && h.href === alt.href)) {
          parsed.issues.push(`missing hreflang ${alt.hreflang}`);
        }
      }
      if (parsed.issues.length) {
        liveFailed += 1;
        failures.push(`${row.url}: ${parsed.issues.join('; ')}`);
      }
    } catch (err) {
      liveFailed += 1;
      failures.push(`${row.url}: fetch error ${err instanceof Error ? err.message : err}`);
    }
  }
  console.log(`Live checked: ${liveChecked}, live failures: ${liveFailed}`);
}

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const w of warnings.slice(0, 40)) console.log('  -', w);
  if (warnings.length > 40) console.log(`  … +${warnings.length - 40} more`);
}

if (failures.length) {
  console.error(`\nFAIL (${failures.length}):`);
  for (const f of failures.slice(0, 80)) console.error('  -', f);
  if (failures.length > 80) console.error(`  … +${failures.length - 80} more`);
  process.exit(1);
}

console.log('\nOK: sitemap presence, self-canonical hreflang model, translated titles.');
if (live) console.log('OK: live HTTP/title/canonical/hreflang checks passed.');
