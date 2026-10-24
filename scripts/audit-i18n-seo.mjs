/**
 * Audit missing page slugs and seo.* keys per locale.
 * Usage: node scripts/audit-i18n-seo.mjs
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import ts from 'typescript';
import {
  PAGES,
  LOCALES,
  INDEXABLE_LOCALES,
  DEFAULT_LOCALE,
  buildAlternates,
  buildPath,
  buildUrl,
  getIndexableLocalesForPage,
  isPageIndexable,
} from '../src/app/i18n/site-data.mjs';
import { buildEdgeRedirectMap } from '../src/app/i18n/edge-redirects.mjs';
import { INCOMPLETE_LOCALE_REDIRECTS } from '../src/app/i18n/incomplete-locale-redirects.mjs';
import { scanArticleLocales } from './article-locale-scan.mjs';

const EXPECTED_LOCALES = ['en', 'de', 'fr', 'it', 'es', 'pl', 'ru', 'nl'];
const EXPECTED_DESTINATION_LOCALES = ['en', 'de', 'fr', 'es', 'pl', 'it', 'ru', 'nl'];
const EXPECTED_INDEX_LOCALES = {
  destColombo: EXPECTED_DESTINATION_LOCALES,
  destNegombo: EXPECTED_DESTINATION_LOCALES,
  destBentota: EXPECTED_DESTINATION_LOCALES,
  destHiriketiya: ['en'],
  destWeligama: EXPECTED_DESTINATION_LOCALES,
  destTrincomalee: EXPECTED_DESTINATION_LOCALES,
  guideWhaleWatching: ['en', 'de'],
  guideLuxuryTours: ['en', 'de'],
  marketGermany: ['en', 'de'],
  marketFrance: ['en', 'fr'],
  marketItaly: ['en', 'it'],
  marketSpain: ['en', 'es'],
  marketPoland: ['en', 'pl'],
  marketRussia: ['en', 'ru'],
  marketNetherlands: ['en', 'nl'],
  marketUK: ['en'],
  monthAugust: ['en', 'de', 'fr', 'es', 'pl', 'it', 'ru'],
};

const configurationIssues = [];
if (JSON.stringify(LOCALES) !== JSON.stringify(EXPECTED_LOCALES)) {
  configurationIssues.push(`LOCALES must remain ${EXPECTED_LOCALES.join(', ')}`);
}
if (JSON.stringify(INDEXABLE_LOCALES) !== JSON.stringify(EXPECTED_LOCALES)) {
  configurationIssues.push(`INDEXABLE_LOCALES must remain ${EXPECTED_LOCALES.join(', ')}`);
}
const actualIndexLocales = Object.fromEntries(
  PAGES.filter((page) => Array.isArray(page.indexLocales)).map((page) => [page.id, page.indexLocales]),
);
if (JSON.stringify(actualIndexLocales) !== JSON.stringify(EXPECTED_INDEX_LOCALES)) {
  configurationIssues.push('Explicit per-page indexLocales configuration changed');
}

const routeIssues = [];
const pageIds = new Set();
for (const page of PAGES) {
  if (pageIds.has(page.id)) routeIssues.push(`Duplicate page id: ${page.id}`);
  pageIds.add(page.id);
}
for (const locale of LOCALES) {
  const paths = new Map();
  for (const page of PAGES) {
    const slug = page.slugs[locale];
    if (typeof slug !== 'string' || slug.startsWith('/') || slug.endsWith('/') || slug.includes('//')) continue;
    const path = buildPath(page.id, locale).replace(/\/$/, '') || '/';
    const expected = locale === DEFAULT_LOCALE
      ? (slug ? `/${slug}` : '/')
      : (slug ? `/${locale}/${slug}` : `/${locale}`);
    if (path !== expected) routeIssues.push(`${page.id}/${locale}: generated ${path}, expected ${expected}`);
    const duplicate = paths.get(path);
    if (duplicate) routeIssues.push(`${locale} route collision ${path}: ${duplicate} and ${page.id}`);
    else paths.set(path, page.id);
    if (buildUrl(page.id, locale) !== `https://www.sundowntours.com${expected}`) {
      routeIssues.push(`${page.id}/${locale}: incorrect absolute URL`);
    }
  }
}
const registeredLoaders = sourceFilesForLoaders('src/app/i18n/pages.registry.ts', 'PAGE_LOADERS');
for (const page of PAGES) {
  if (!registeredLoaders.has(page.id)) routeIssues.push(`${page.id}: no component loader in PAGE_LOADERS`);
}
for (const page of PAGES.filter((entry) => entry.index)) {
  const alternates = buildAlternates(page.id);
  const expectedCount = getIndexableLocalesForPage(page).length + 1;
  if (alternates.length !== expectedCount) routeIssues.push(`${page.id}: unexpected hreflang alternate count`);
  if (new Set(alternates.map((alternate) => alternate.hreflang)).size !== alternates.length) {
    routeIssues.push(`${page.id}: duplicate hreflang codes`);
  }
  for (const locale of getIndexableLocalesForPage(page)) {
    if (!alternates.some((alternate) => alternate.href === buildUrl(page.id, locale))) {
      routeIssues.push(`${page.id}/${locale}: missing hreflang alternate`);
    }
  }
}

console.log('=== Locale and route configuration audit ===');
if (configurationIssues.length || routeIssues.length) {
  console.error([...configurationIssues, ...routeIssues].join('\n'));
  process.exitCode = 1;
} else {
  console.log(`OK: ${PAGES.length} page IDs, ${PAGES.length * LOCALES.length} localized routes, unique slugs, loaders, and original indexLocales policy`);
}

// Parse route and content sources directly so missing locale data fails prebuild.
const missingSlugs = [];
for (const page of PAGES) {
  for (const locale of LOCALES) {
    if (page.slugs[locale] === undefined || page.slugs[locale] === null) {
      missingSlugs.push(`${page.id}/${locale}`);
    }
  }
}

console.log('=== Slug audit ===');
if (missingSlugs.length) {
  console.log('MISSING slugs:', missingSlugs.join(', '));
  process.exitCode = 1;
} else {
  console.log(`OK: all ${PAGES.length} pages have slugs for ${LOCALES.length} locales`);
}

const indexed = PAGES.filter((p) => p.index);
console.log(`Indexed pages: ${indexed.length}; total pages: ${PAGES.length}`);
console.log('Locales:', LOCALES.join(', '), '(default', DEFAULT_LOCALE + ')');

const russianSeoSources = [
  'src/app/mainComponents/home-page-component/sections/home-seo-section/home-seo.content.ts',
  'src/app/i18n/guides/russiaFromRu.ts',
  'src/app/i18n/content/ru.ts',
];
const unnaturalRussianSeoPatterns = [
  /travelata|турвизор/iu,
  /шри\s+ланка\s+(?:через\s+пробел|билеты|где|время|погода|на\s+карте|какой\s+океан)/iu,
  /шри\s+ланка,\s*шри\s+ланка/iu,
];
const copyIssues = [];
for (const source of russianSeoSources) {
  const text = readFileSync(join(process.cwd(), source), 'utf8');
  for (const pattern of unnaturalRussianSeoPatterns) {
    if (pattern.test(text)) {
      copyIssues.push(`${source}: matches ${pattern}`);
    }
  }
}

console.log('=== Russian SEO copy audit ===');
if (copyIssues.length) {
  console.error('UNNATURAL SEO copy:', copyIssues.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`OK: checked ${russianSeoSources.length} Russian SEO content sources`);
}

function properties(node) {
  return node && ts.isObjectLiteralExpression(node)
    ? node.properties.filter(ts.isPropertyAssignment)
    : [];
}

function propertyName(property) {
  if (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) {
    return property.name.text;
  }
  return '';
}

function getProperty(node, name) {
  return properties(node).find((property) => propertyName(property) === name)?.initializer;
}

function arrayElements(node) {
  return node && ts.isArrayLiteralExpression(node) ? node.elements : [];
}

function findVariable(sourceFile, name) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.name.text === name) {
        return declaration.initializer;
      }
    }
  }
  return undefined;
}

function findDynamicImport(node) {
  let modulePath;
  const visit = (current) => {
    if (
      ts.isCallExpression(current) &&
      current.expression.kind === ts.SyntaxKind.ImportKeyword &&
      ts.isStringLiteral(current.arguments[0])
    ) {
      modulePath = current.arguments[0].text;
    }
    ts.forEachChild(current, visit);
  };
  visit(node);
  return modulePath;
}

function sourceFilesForLoaders(relativePath, loaderName) {
  const loaderFile = join(process.cwd(), relativePath);
  const sourceFile = ts.createSourceFile(loaderFile, readFileSync(loaderFile, 'utf8'), ts.ScriptTarget.Latest, true);
  const loaderObject = findVariable(sourceFile, loaderName);
  const sourceFiles = new Map();

  for (const property of properties(loaderObject)) {
    const modulePath = findDynamicImport(property.initializer);
    if (modulePath) {
      sourceFiles.set(propertyName(property), join(dirname(loaderFile), `${modulePath}.ts`));
    }
  }
  return sourceFiles;
}

function findLocalizedContent(sourcePath, pageId) {
  const sourceFile = ts.createSourceFile(sourcePath, readFileSync(sourcePath, 'utf8'), ts.ScriptTarget.Latest, true);
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (getProperty(declaration.initializer, 'en')) return declaration.initializer;
    }
  }
  return getProperty(findVariable(sourceFile, 'SCAFFOLD_ARTICLES'), pageId);
}

function auditAllArticleLocales() {
  const sources = sourceFilesForLoaders(
    'src/app/i18n/articles/article-content.service.ts',
    'ARTICLE_LOADERS',
  );
  const issues = [];
  const fallbackRoutes = [];
  const requiredFields = [
    'h1', 'lead', 'heroAlt', 'sections', 'faq', 'ctaTitle', 'ctaBody', 'ctaLabel',
    'relatedTours', 'relatedDestinations', 'relatedGuides',
  ];

  for (const page of PAGES.filter((entry) => entry.kind === 'guide' || entry.kind === 'destination')) {
    const sourcePath = sources.get(page.id);
    if (!sourcePath) {
      issues.push(`${page.id}: missing article content loader`);
      continue;
    }
    const content = findLocalizedContent(sourcePath, page.id);
    const base = getProperty(content, 'en');
    if (!base) {
      if (sourcePath.endsWith('scaffolds.ts')) {
        for (const locale of LOCALES.filter((code) => code !== 'en')) {
          if (isPageIndexable(page, locale)) {
            issues.push(`${page.id}/${locale}: English-only scaffold is indexable`);
          } else {
            fallbackRoutes.push(`${page.id}/${locale}`);
          }
        }
        continue;
      }
      issues.push(`${page.id}: missing English base article`);
      continue;
    }

    for (const locale of LOCALES.filter((code) => code !== 'en')) {
      const overlay = getProperty(content, locale);
      const missing = requiredFields.filter(
        (field) => getProperty(base, field) !== undefined && getProperty(overlay, field) === undefined,
      );
      const baseSections = arrayElements(getProperty(base, 'sections'));
      const localizedSections = arrayElements(getProperty(overlay, 'sections'));
      if (localizedSections.length !== baseSections.length) {
        missing.push(`section count ${localizedSections.length}/${baseSections.length}`);
      }
      for (let index = 0; index < baseSections.length; index++) {
        const section = localizedSections[index];
        if (
          !section ||
          !getProperty(section, 'title') ||
          !getProperty(section, 'body') ||
          (getProperty(baseSections[index], 'bullets') && !getProperty(section, 'bullets'))
        ) {
          missing.push(`section ${index + 1}`);
        }
      }
      if (missing.length) {
        const message = `${page.id}/${locale}: missing localized article content (${missing.join(', ')})`;
        if (isPageIndexable(page, locale)) issues.push(message);
        else fallbackRoutes.push(`${page.id}/${locale}`);
      }
    }
  }

  const resolver = readFileSync(join(process.cwd(), 'src/app/i18n/articles/article.resolver.ts'), 'utf8');
  if (fallbackRoutes.length && (!resolver.includes('hasCompleteTranslation') || !resolver.includes('RedirectCommand'))) {
    issues.push('Incomplete article locales lack the explicit English redirect fallback');
  }
  return { issues, fallbackRoutes };
}

function auditIndexableTours() {
  const sources = sourceFilesForLoaders(
    'src/app/i18n/tours/tour-content.service.ts',
    'TOUR_DETAIL_LOADERS',
  );
  const issues = [];
  const fields = [
    'title', 'description', 'duration', 'persons', 'tourType', 'overview', 'includes',
    'excludes', 'seoIntro', 'highlights', 'whoIsFor', 'bestTimeNote', 'faq', 'days',
  ];

  for (const page of PAGES.filter((entry) => entry.kind === 'tour')) {
    const sourcePath = sources.get(page.id);
    if (!sourcePath) continue;
    const content = findLocalizedContent(sourcePath, page.id);
    const base = getProperty(content, 'en');
    if (!base) continue;

    for (const locale of LOCALES.filter((code) => code !== 'en')) {
      const overlay = getProperty(content, locale);
      const missing = fields.filter(
        (field) => getProperty(base, field) !== undefined && getProperty(overlay, field) === undefined,
      );
      const baseDays = arrayElements(getProperty(base, 'itinerary'));
      const localizedDays = arrayElements(getProperty(overlay, 'days'));
      for (let dayIndex = 0; dayIndex < baseDays.length; dayIndex++) {
        const baseActivities = arrayElements(getProperty(baseDays[dayIndex], 'activities'));
        const localizedActivities = arrayElements(getProperty(localizedDays[dayIndex], 'activities'));
        if (!localizedDays[dayIndex] || !getProperty(localizedDays[dayIndex], 'title')) {
          missing.push(`day ${dayIndex + 1}`);
        }
        for (let activityIndex = 0; activityIndex < baseActivities.length; activityIndex++) {
          const activity = localizedActivities[activityIndex];
          if (
            !activity ||
            (getProperty(baseActivities[activityIndex], 'type') && !getProperty(activity, 'type')) ||
            !getProperty(activity, 'title') ||
            (getProperty(baseActivities[activityIndex], 'description') && !getProperty(activity, 'description')) ||
            (getProperty(baseActivities[activityIndex], 'extra') && !getProperty(activity, 'extra'))
          ) {
            missing.push(`day ${dayIndex + 1} activity ${activityIndex + 1}`);
          }
        }
      }
      if (missing.length) issues.push(`${page.id}/${locale}: missing localized tour content (${missing.join(', ')})`);
    }
  }

  return issues;
}

function auditLocalizedMetadata() {
  const dictionaries = new Map();
  for (const locale of LOCALES) {
    const sourcePath = join(process.cwd(), 'src/app/i18n/content', `${locale}.ts`);
    const sourceFile = ts.createSourceFile(sourcePath, readFileSync(sourcePath, 'utf8'), ts.ScriptTarget.Latest, true);
    dictionaries.set(locale, getProperty(findVariable(sourceFile, locale), 'seo'));
  }

  const issues = [];
  for (const page of PAGES) {
    for (const locale of LOCALES) {
      const metadata = getProperty(dictionaries.get(locale), page.id);
      const titleNode = getProperty(metadata, 'title');
      const descriptionNode = getProperty(metadata, 'description');
      const keywordsNode = getProperty(metadata, 'keywords');
      if (!titleNode || !descriptionNode) {
        issues.push(`${page.id}/${locale}: missing localized SEO title or description`);
      }
      const keywords = keywordsNode && (ts.isStringLiteral(keywordsNode) || ts.isNoSubstitutionTemplateLiteral(keywordsNode))
        ? keywordsNode.text
        : '';
      if (keywords === page.id) {
        issues.push(`${page.id}/${locale}: SEO keywords are the internal page id`);
      }
      const description = descriptionNode && (ts.isStringLiteral(descriptionNode) || ts.isNoSubstitutionTemplateLiteral(descriptionNode))
        ? descriptionNode.text
        : '';
      if (locale !== 'en' && /Travel tips for Sri Lanka in|tea country stays between|Private chauffeur holidays in Sri Lanka for travellers/.test(description)) {
        issues.push(`${page.id}/${locale}: SEO description is still English placeholder copy`);
      }
    }
  }
  return issues;
}

const articleAudit = auditAllArticleLocales();
const localeScan = scanArticleLocales();
const redirectMap = buildEdgeRedirectMap();
const redirectIssues = [];
if (localeScan.faqGaps.length) {
  redirectIssues.push(
    ...localeScan.faqGaps.map(
      (gap) => `${gap.pageId}/${gap.locale}: indexable FAQ ${gap.actual}/${gap.expected}`,
    ),
  );
}
for (const row of localeScan.incomplete) {
  if (row.indexable) {
    redirectIssues.push(`${row.pageId}/${row.locale}: incomplete article is still indexable`);
  }
  const actual = redirectMap.get(row.from);
  if (actual !== row.to) {
    redirectIssues.push(`${row.from}: redirect ${actual ?? 'missing'}, expected ${row.to}`);
  }
  if (!actual || actual === '/' || actual === row.from) {
    redirectIssues.push(`${row.from}: incomplete locale must 301 to the same English page`);
  }
  if (INCOMPLETE_LOCALE_REDIRECTS[row.from] !== row.to) {
    redirectIssues.push(`${row.from}: generated redirect file is stale`);
  }
}
const fallbackIssues = [...articleAudit.issues, ...auditIndexableTours(), ...redirectIssues];
console.log('=== All-locale content fallback audit ===');
if (fallbackIssues.length) {
  console.error('INCOMPLETE INDEXABLE CONTENT:', fallbackIssues.join('\n'));
  process.exitCode = 1;
} else {
  console.log('OK: all indexable article/tour locales have authored content');
  console.log(`Incomplete, non-indexable article locales use explicit English redirects (${articleAudit.fallbackRoutes.length} variants)`);
}

const metadataIssues = auditLocalizedMetadata();
console.log('=== All-locale metadata audit ===');
if (metadataIssues.length) {
  console.error('MISSING LOCALIZED METADATA:', metadataIssues.join('\n'));
  process.exitCode = 1;
} else {
  console.log('OK: all registered page locales have localized titles and descriptions');
}

function collectStrings(node, out = []) {
  if (!node) return out;
  if (
    node.kind === ts.SyntaxKind.StringLiteral ||
    node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral ||
    node.kind === ts.SyntaxKind.TemplateHead ||
    node.kind === ts.SyntaxKind.TemplateMiddle ||
    node.kind === ts.SyntaxKind.TemplateTail
  ) {
    out.push(node.text);
  }
  ts.forEachChild(node, (child) => {
    collectStrings(child, out);
  });
  return out;
}

function auditDutchCopy() {
  const issues = [];
  const loaders = [
    ['src/app/i18n/articles/article-content.service.ts', 'ARTICLE_LOADERS'],
    ['src/app/i18n/tours/tour-content.service.ts', 'TOUR_DETAIL_LOADERS'],
  ];
  for (const [relativePath, loaderName] of loaders) {
    for (const [pageId, sourcePath] of sourceFilesForLoaders(relativePath, loaderName)) {
      const content = findLocalizedContent(sourcePath, pageId);
      const nl = getProperty(content, 'nl');
      if (!nl || !ts.isObjectLiteralExpression(nl)) continue;
      const nlText = collectStrings(nl).join(' ');
      const deText = collectStrings(getProperty(content, 'de')).join(' ');
      const enText = collectStrings(getProperty(content, 'en')).join(' ');
      if (!nlText.trim()) continue;
      const german = nlText.match(/\b(und|das|nicht|oder|eine|ist|sind|nach|ihnen|einen|für|fur|rundreise)\b/gi)?.length || 0;
      const dutch = nlText.match(/\b(het|een|van|voor|niet|zijn|wordt|naar|deze|ook|met|uw|wij|een)\b/gi)?.length || 0;
      if (nlText === deText) issues.push(`${pageId}: Dutch copy is identical to German`);
      else if (nlText === enText) issues.push(`${pageId}: Dutch copy is identical to English`);
      else if (german >= 8 && german > dutch) issues.push(`${pageId}: Dutch copy still reads as German (${german} German markers, ${dutch} Dutch markers)`);
    }
  }
  const ui = readFileSync(join(process.cwd(), 'src/app/i18n/content/nl.ts'), 'utf8');
  if (/\bund\b|\bnicht\b|\bfür\b|\bRundreise\b/.test(ui)) {
    issues.push('content/nl.ts still contains German function words');
  }
  const inclusions = readFileSync(join(process.cwd(), 'src/app/i18n/tours/package-inclusions.ts'), 'utf8');
  if (/nl:\s*deIncludes|nl:\s*deExcludes/.test(inclusions)) {
    issues.push('package-inclusions.ts still aliases Dutch lists to German');
  }
  return issues;
}

const dutchIssues = auditDutchCopy();
console.log('=== Dutch copy audit ===');
if (dutchIssues.length) {
  console.error('DUTCH COPY:', dutchIssues.join('\n'));
  process.exitCode = 1;
} else {
  console.log('OK: authored Dutch article and tour copy is not a German or English copy');
}

const scaffoldIds = PAGES.filter((p) => !p.index && (p.kind === 'destination' || p.kind === 'guide')).map(
  (p) => p.id,
);
console.log('P2 scaffold (noindex) page ids:', scaffoldIds.length);
