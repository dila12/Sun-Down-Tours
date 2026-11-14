/**
 * Asserts SEO invariants for every indexable page × locale:
 *   - URL is listed in public/sitemap.xml
 *   - self-canonical + full reciprocal hreflang set (from site-data)
 *   - translated SEO title exists (not empty, not identical English fallback when locale ≠ en)
 *   - title ≤ 60 chars; CTR-copy pages also require description 140–155
 *   - titles/descriptions unique within each locale
 *   - no placeholder SEO text; USD tour prices in copy must match tour-prices.static
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
import { SEO_CTR_COPY } from './seo-ctr-copy.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const live = process.argv.includes('--live');
const sampleArg = process.argv.find((a) => a.startsWith('--sample='));
const sampleLimit = sampleArg ? Number(sampleArg.split('=')[1]) : Infinity;
const UA = 'Mozilla/5.0 (compatible; SundownSeoAssert/1.0; +https://www.sundowntours.com/)';
const CTR_PAGE_IDS = new Set(Object.keys(SEO_CTR_COPY.en || {}));
const TOUR_PAGE_IDS = new Set([
  'tour2ey',
  'tour2ek',
  'tour4',
  'tour5',
  'tour6',
  'tour7',
  'tour8',
  'tour10',
  'ellaDay',
  'galleDay',
  'kandyDay',
  'sigiriyaDay',
]);
const PLACEHOLDER_RE =
  /\b(lorem ipsum|TODO|TBD|xxx|placeholder|click here|page title|meta description)\b/i;

function loadTourPricesUsd() {
  /** @type {Record<string, number>} */
  const out = {};
  const text = readFileSync(join(root, 'src/app/utils/tour-prices.static.ts'), 'utf8');
  for (const m of text.matchAll(/^\s*([a-zA-Z0-9]+):\s*(\d+)\s*,/gm)) {
    out[m[1]] = Number(m[2]);
  }
  return out;
}
const TOUR_PRICE_2P_USD = loadTourPricesUsd();

function loadDictSeo() {
  /** @type {Record<string, Record<string, { title: string, description: string }>>} */
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
      const descMatch = m[1].match(/description:\s*(['"`])([\s\S]*?)\1/);
      out[locale][page.id] = {
        title: titleMatch ? titleMatch[2].trim() : '',
        description: descMatch ? descMatch[2].trim() : '',
      };
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

  for (const m of html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      const json = JSON.parse(m[1]);
      const blob = JSON.stringify(json);
      if (/AggregateRating|aggregateRating/i.test(blob) && !/"ratingValue"\s*:\s*"?\d/.test(blob)) {
        issues.push('JSON-LD AggregateRating without ratingValue');
      }
      if (/"@type"\s*:\s*"Product"/.test(blob) || /"Product"/.test(blob)) {
        if (/"price"\s*:/.test(blob) && !/"priceCurrency"\s*:/.test(blob)) {
          issues.push('JSON-LD Offer price without priceCurrency');
        }
      }
    } catch {
      issues.push('JSON-LD parse error');
    }
  }

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

const seo = loadDictSeo();
const sitemap = loadSitemapLocs();
const failures = [];
const warnings = [];
/** @type {{ pageId: string, locale: string, url: string }[]} */
const indexable = [];

for (const locale of LOCALES) {
  const titlesSeen = new Map();
  const descsSeen = new Map();
  for (const page of PAGES) {
    const entry = seo[locale]?.[page.id];
    if (!entry?.title) continue;
    const prevT = titlesSeen.get(entry.title);
    if (prevT) failures.push(`${locale}: duplicate title for ${prevT} and ${page.id}`);
    else titlesSeen.set(entry.title, page.id);
    if (entry.description) {
      const prevD = descsSeen.get(entry.description);
      if (prevD) failures.push(`${locale}: duplicate description for ${prevD} and ${page.id}`);
      else descsSeen.set(entry.description, page.id);
    }
  }
}

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
    const expectedCount = getIndexableLocalesForPage(page).length + 1;
    if (alts.length !== expectedCount) {
      failures.push(`${page.id}: hreflang count ${alts.length}, expected ${expectedCount}`);
    }
    if (!alts.some((a) => a.href === url)) {
      failures.push(`${page.id}/${locale}: no self hreflang href`);
    }
    if (!alts.some((a) => a.hreflang === 'x-default')) {
      failures.push(`${page.id}: missing x-default`);
    }

    const entry = seo[locale]?.[page.id] || { title: '', description: '' };
    const { title, description } = entry;
    if (!title) {
      if (page.kind === 'home' || page.kind === 'utility' || page.kind === 'content' || page.kind === 'hub') {
        failures.push(`${page.id}/${locale}: missing seo.${page.id}.title in ${locale}.ts`);
      } else {
        warnings.push(`${page.id}/${locale}: no seo.${page.id}.title (may use article fallback)`);
      }
    } else {
      if (title.length > 60) {
        const msg = `${page.id}/${locale}: title length ${title.length} > 60`;
        if (CTR_PAGE_IDS.has(page.id)) failures.push(msg);
        else warnings.push(msg);
      }
      if (locale !== DEFAULT_LOCALE) {
        const enTitle = seo.en?.[page.id]?.title;
        if (enTitle && title === enTitle) {
          failures.push(`${page.id}/${locale}: title identical to English (untranslated)`);
        }
      }
      if (PLACEHOLDER_RE.test(title) || PLACEHOLDER_RE.test(description)) {
        failures.push(`${page.id}/${locale}: placeholder SEO text`);
      }
    }

    if (description) {
      if (CTR_PAGE_IDS.has(page.id)) {
        if (description.length < 140 || description.length > 155) {
          failures.push(
            `${page.id}/${locale}: description length ${description.length} outside 140-155`,
          );
        }
      } else if (description.length > 160) {
        warnings.push(`${page.id}/${locale}: description length ${description.length} > 160`);
      }
      if (/€|EUR\b/.test(description) || /€|EUR\b/.test(title)) {
        failures.push(`${page.id}/${locale}: EUR/€ in SEO copy (prices are USD on-page)`);
      }
      const priceMatch = description.match(/\$\s?(\d{2,5})\b/);
      if (priceMatch && locale !== DEFAULT_LOCALE) {
        failures.push(`${page.id}/${locale}: $ price in non-EN SEO (no localized price field)`);
      } else if (priceMatch && page.id in TOUR_PRICE_2P_USD) {
        const expected2p = TOUR_PRICE_2P_USD[page.id];
        const expectedPp = Math.round(expected2p / 2);
        const n = Number(priceMatch[1]);
        if (n !== expected2p && n !== expectedPp) {
          failures.push(
            `${page.id}/${locale}: SEO price $${n} != source $${expected2p} (2p) or $${expectedPp} (pp)`,
          );
        }
      } else if (priceMatch && !(page.id in TOUR_PRICE_2P_USD)) {
        failures.push(`${page.id}/${locale}: price in SEO without tour-prices.static source`);
      }
      if (/aggregateRating|★★★★★|4\.\d\s*\/\s*5/i.test(description)) {
        failures.push(`${page.id}/${locale}: rating claim in SEO without verified SSR source`);
      }
    } else if (CTR_PAGE_IDS.has(page.id)) {
      failures.push(`${page.id}/${locale}: missing description`);
    }

    if (CTR_PAGE_IDS.has(page.id) && title && description) {
      const blob = `${title} ${description}`;
      const missingDiacritics =
        (locale === 'de' &&
          /\bfur\b|\bFur\b|\bOsterreich\b|\bGaeste\b|\bHohlen\b|\bLowenfelsen\b|\bSudkuste\b/i.test(
            blob,
          )) ||
        (locale === 'fr' &&
          /\bprive\b|\bprives\b|\bprivee\b|\bjournee\b|\baeroport\b|\bmontee\b/i.test(blob)) ||
        (locale === 'nl' && /\bprive\b|\bPrive\b|\bprivechauffeur\b|\bBelgie\b/.test(blob)) ||
        (locale === 'es' &&
          /\bdias\b|\bdia\b|\bExcursion\b|\bexcursion\b|\btambien\b|\bhuespedes\b/i.test(blob)) ||
        (locale === 'pl' &&
          /z kierowca\b|\bpodroznych\b|\bgosci\b|\bzespol\b|\bbezplatn|\boferte\b/i.test(blob)) ||
        (locale === 'it' && /\bcitta\b|\bperche\b/i.test(blob));
      if (missingDiacritics) {
        failures.push(`${page.id}/${locale}: missing expected diacritics in SEO copy`);
      }
      if (locale === 'ru' && !/[\u0400-\u04FF]/.test(`${title}${description}`)) {
        failures.push(`${page.id}/${locale}: expected Cyrillic in SEO copy`);
      }
      if (
        locale !== DEFAULT_LOCALE &&
        /Plan with confidence|Tailor-made pacing/i.test(blob)
      ) {
        failures.push(`${page.id}/${locale}: English pad leaked into localized SEO copy`);
      }
    }
  }
}

// Tour titles must be unique within each locale (stricter near-dup guard via exact match already above).
for (const locale of LOCALES) {
  const tourTitles = new Map();
  for (const pageId of TOUR_PAGE_IDS) {
    const title = seo[locale]?.[pageId]?.title;
    if (!title) continue;
    if (tourTitles.has(title)) {
      failures.push(
        `${locale}: duplicate tour title for ${tourTitles.get(title)} and ${pageId}`,
      );
    } else {
      tourTitles.set(title, pageId);
    }
  }
}

console.log(`Indexable routes: ${indexable.length}`);
console.log(`Sitemap <loc> count: ${sitemap.size}`);
console.log(`CTR-copy pages enforced: ${CTR_PAGE_IDS.size}`);

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

console.log('\nOK: sitemap, hreflang, translated titles, CTR length/uniqueness, price/rating guards.');
if (live) console.log('OK: live HTTP/title/canonical/hreflang/JSON-LD checks passed.');
