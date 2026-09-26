import fs from 'fs';
const path = 'd:/Website/Sun-Down-Tours/src/app/i18n/content';
const locales = ['en', 'de', 'fr', 'it', 'es', 'pl', 'ru', 'nl'];
const keys = [
  'home', 'tours', 'contact', 'guideVisa', 'guideBestTime', 'guidePrivateDriver',
  'guideBudget', 'destSigiriya', 'destColombo', 'marketGermany', 'marketFrance',
  'marketItaly', 'marketSpain', 'marketPoland', 'marketRussia', 'marketNetherlands',
  'marketUK', 'marketAustria', 'marketSwitzerland',
];

function extractField(block, field) {
  const re = new RegExp(field + ':\\s*([\'"`])([\\s\\S]*?)\\1');
  const m = block.match(re);
  return m ? m[2] : null;
}

for (const loc of locales) {
  const text = fs.readFileSync(`${path}/${loc}.ts`, 'utf8');
  const seoStart = text.indexOf('\n  seo: {');
  const seo = text.slice(seoStart >= 0 ? seoStart : text.indexOf('seo: {'));
  console.log('\n======== ' + loc + ' ========');
  for (const k of keys) {
    const re = new RegExp('\\n\\s*' + k + ':\\s*\\{([\\s\\S]*?)\\n\\s*\\},');
    const m = seo.match(re);
    if (!m) {
      console.log(k + ': MISSING');
      continue;
    }
    const block = m[1];
    console.log(k + ':');
    console.log('  title: ' + JSON.stringify(extractField(block, 'title')));
    console.log('  keywords: ' + JSON.stringify(extractField(block, 'keywords')));
  }
}

// hyphen scan in seo title/keywords/description
console.log('\n======== HYPHEN SCAN (content seo strings) ========');
const bad = /sri-lanka|шри-ланка|lanka-tours|sri lanka-tours|Sri-Lanka/gi;
for (const loc of locales) {
  const text = fs.readFileSync(`${path}/${loc}.ts`, 'utf8');
  const seoStart = text.indexOf('seo: {');
  const seo = text.slice(seoStart);
  const matches = [...seo.matchAll(bad)];
  if (matches.length) {
    console.log(loc + ': ' + matches.map((x) => x[0]).join(', '));
  } else {
    console.log(loc + ': no bad hyphen phrases in seo block');
  }
}

// English leftovers heuristic in non-en titles for target keys
console.log('\n======== ENGLISH LEFTOVER TITLES (non-en) ========');
for (const loc of locales.filter((l) => l !== 'en')) {
  const text = fs.readFileSync(`${path}/${loc}.ts`, 'utf8');
  const seoStart = text.indexOf('seo: {');
  const seo = text.slice(seoStart);
  for (const k of keys) {
    const re = new RegExp('\\n\\s*' + k + ':\\s*\\{([\\s\\S]*?)\\n\\s*\\},');
    const m = seo.match(re);
    if (!m) continue;
    const title = extractField(m[1], 'title') || '';
    const kw = extractField(m[1], 'keywords') || '';
    const looksEn =
      /^Sri Lanka Tours from /.test(title) ||
      /^[a-zA-Z]+$/.test(kw) && /^(market|dest|guide|month|terms|booking)/.test(kw) ||
      (loc !== 'de' && /Private Rundreisen|Circuits Prives|Prive Rondreizen|tailor made/.test(title));
    if (looksEn || /^(market|dest|guide|month|terms|booking)[A-Za-z]+$/.test(kw)) {
      console.log(`${loc}.${k}: title=${JSON.stringify(title)} kw=${JSON.stringify(kw)}`);
    }
  }
}
