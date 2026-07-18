import { readFileSync } from 'fs';

const j = JSON.parse(readFileSync('scripts/qa-production-report.json', 'utf8'));

const issues = [];

function check(name, ok, detail) {
  console.log(ok ? 'PASS' : 'FAIL', name, detail || '');
  if (!ok) issues.push(`${name}: ${detail}`);
}

const locales = ['en', 'de', 'fr', 'it', 'es', 'pl', 'ru', 'nl'];
const homePaths = { en: '/', de: '/de', fr: '/fr', it: '/it', es: '/es', pl: '/pl', ru: '/ru', nl: '/nl' };

for (const l of locales) {
  const r = j[homePaths[l]];
  if (!r || r.error) {
    check(`${l}.home`, false, r?.error || 'missing');
    continue;
  }
  check(`${l}.status200`, r.status === 200, String(r.status));
  check(`${l}.title`, !!r.title, r.title);
  check(`${l}.lang`, (r.lang || '').toLowerCase().startsWith(l), r.lang);
  check(`${l}.canonical`, !!r.canonical && (l === 'en' ? r.canonical.endsWith('/') || r.canonical.endsWith('.com') : r.canonical.includes(`/${l}`)), r.canonical);
  check(`${l}.noNlHreflang`, !r.hasNlHreflang, (r.hreflangs || []).join(','));
  if (l === 'nl') {
    check('nl.noindex', /noindex/i.test(r.robots || ''), r.robots);
    check('nl.canonicalHasNl', /\/nl/.test(r.canonical || ''), r.canonical);
    check('nl.notEnglishShell', r.lang === 'nl' && !/Private & Tailor-Made|Private &amp; Tailor-Made/i.test(r.title || ''), `lang=${r.lang} title=${r.title}`);
    check('nl.dispositionNotIndexHtml', !/index\.html/i.test(r.disposition || ''), r.disposition);
  } else {
    check(`${l}.indexable`, /index/i.test(r.robots || '') && !/noindex/i.test(r.robots || ''), r.robots);
    check(`${l}.hreflangHasSelf`, (r.hreflangs || []).includes(l), (r.hreflangs || []).join(','));
  }
  check(`${l}.schemaValid`, r.schema?.invalid === 0, `invalid=${r.schema?.invalid} types=${r.schema?.types?.join(',')}`);
  check(`${l}.singleH1`, (r.h1s || []).length === 1, JSON.stringify(r.h1s));
}

const tourEn = j['/tours/7-day-sri-lanka-private-tour'];
check('tour7.en.product', tourEn?.schema?.types?.includes('Product'), tourEn?.schema?.types?.join(','));
check('tour7.en.offer', tourEn?.schema?.types?.includes('Offer'), tourEn?.schema?.types?.join(','));

const tourNl = j['/nl/7-daagse-prive-rondreis-sri-lanka'];
check('tour7.nl.reachable', tourNl?.status === 200, String(tourNl?.status));
check('tour7.nl.noindex', /noindex/i.test(tourNl?.robots || ''), tourNl?.robots);
check('tour7.nl.notEnShell', tourNl?.lang === 'nl' && /\/nl\//.test(tourNl?.canonical || ''), `lang=${tourNl?.lang} can=${tourNl?.canonical} disp=${tourNl?.disposition}`);

const guide = j['/travel-guides/sri-lanka-whale-watching'];
check('guide.article', guide?.schema?.types?.includes('Article'), guide?.schema?.types?.join(','));

const dest = j['/destinations/sigiriya-sri-lanka'];
check('dest.types', dest?.schema?.types?.some((t) => /TouristDestination|Place/.test(t)), dest?.schema?.types?.join(','));

const about = j['/about'];
check('about.org', about?.schema?.types?.includes('Organization'), about?.schema?.types?.join(','));
check('about.agency', about?.schema?.types?.includes('TravelAgency'), about?.schema?.types?.join(','));
check('about.faq', about?.schema?.types?.includes('FAQPage'), about?.schema?.types?.join(','));
check('about.breadcrumb', about?.schema?.types?.includes('BreadcrumbList'), about?.schema?.types?.join(','));

const nf = j['/qa-missing-zzz-404'];
check('404.status', nf?.status === 404, String(nf?.status));
check('404.noindex', /noindex/i.test(nf?.robots || ''), nf?.robots);

const legacy = j['/de/sri-lanka-rundreise'];
check('legacy.redirectOrOk', legacy?.status === 301 || legacy?.status === 308 || legacy?.status === 200, `status=${legacy?.status} loc=${legacy?.location}`);

for (const sm of ['/sitemap.xml', '/sitemap-hreflang.xml', '/sitemap-images.xml', '/sitemap-index.xml']) {
  const s = j[`scan:${sm}`];
  check(`sitemap.${sm}.noNlPath`, !s?.hasNlPath, JSON.stringify(s));
  check(`sitemap.${sm}.noNlHreflang`, !s?.hasNlHreflang, JSON.stringify(s));
}

const en = j['/'];
check('ui.nlInSwitcher', !!en?.switcherHasNl, String(en?.switcherHasNl));

console.log('\n=== ISSUE COUNT', issues.length, '===');
issues.forEach((i) => console.log('-', i));
