/**
 * Reads destination and guide article sources and reports:
 * - non-English locales that are not a complete translation
 * - indexable locales whose FAQ list is shorter than English
 *
 * Used by the incomplete-locale redirect generator and the SEO audit.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import ts from 'typescript';
import { LOCALES, PAGES, buildPath, isPageIndexable } from '../src/app/i18n/site-data.mjs';

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

function literalText(node) {
  if (!node) return '';
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  return '';
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
  const sourceFile = ts.createSourceFile(
    loaderFile,
    readFileSync(loaderFile, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
  );
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
  const sourceFile = ts.createSourceFile(
    sourcePath,
    readFileSync(sourcePath, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
  );
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (getProperty(declaration.initializer, 'en')) return declaration.initializer;
    }
  }
  return getProperty(findVariable(sourceFile, 'SCAFFOLD_ARTICLES'), pageId);
}

function faqPairs(node) {
  return arrayElements(node).map((item) => ({
    q: literalText(getProperty(item, 'q')),
    a: literalText(getProperty(item, 'a')),
  }));
}

function sectionComplete(baseSection, localizedSection) {
  if (!localizedSection) return false;
  if (!literalText(getProperty(localizedSection, 'title')).trim()) return false;
  if (!literalText(getProperty(localizedSection, 'body')).trim()) return false;
  if (getProperty(baseSection, 'bullets') && !getProperty(localizedSection, 'bullets')) return false;
  return true;
}

/**
 * A locale is complete when the same fields the runtime checker requires are present.
 * FAQ length is reported separately so a short FAQ stays visible instead of becoming a redirect.
 */
export function articleLocaleIsComplete(base, overlay) {
  if (!base || !overlay) return false;
  const required = ['h1', 'lead', 'heroAlt', 'ctaTitle', 'ctaBody', 'ctaLabel'];
  if (required.some((field) => !literalText(getProperty(overlay, field)).trim())) return false;
  if (!getProperty(overlay, 'faq')) return false;
  if (!getProperty(overlay, 'relatedTours')) return false;
  if (!getProperty(overlay, 'relatedDestinations')) return false;
  if (!getProperty(overlay, 'relatedGuides')) return false;
  const baseSections = arrayElements(getProperty(base, 'sections'));
  const localizedSections = arrayElements(getProperty(overlay, 'sections'));
  if (localizedSections.length !== baseSections.length) return false;
  return baseSections.every((section, index) => sectionComplete(section, localizedSections[index]));
}

export function scanArticleLocales() {
  const sources = sourceFilesForLoaders(
    'src/app/i18n/articles/article-content.service.ts',
    'ARTICLE_LOADERS',
  );
  const incomplete = [];
  const faqGaps = [];

  for (const page of PAGES.filter((entry) => entry.kind === 'guide' || entry.kind === 'destination')) {
    const sourcePath = sources.get(page.id);
    if (!sourcePath) continue;
    const content = findLocalizedContent(sourcePath, page.id);
    const base = getProperty(content, 'en');
    const englishFaq = faqPairs(getProperty(base, 'faq'));

    for (const locale of LOCALES.filter((code) => code !== 'en')) {
      const overlay = getProperty(content, locale);
      const complete = articleLocaleIsComplete(base, overlay);
      const from = buildPath(page.id, locale);
      const to = buildPath(page.id, 'en');
      if (!complete && from !== to) {
        incomplete.push({
          pageId: page.id,
          locale,
          from,
          to,
          indexable: isPageIndexable(page, locale),
          reason: sourcePath.endsWith('scaffolds.ts') && !overlay ? 'scaffold' : 'incomplete-translation',
        });
      }
      if (complete && isPageIndexable(page, locale)) {
        const localizedFaq = faqPairs(getProperty(overlay, 'faq'));
        if (localizedFaq.length < englishFaq.length) {
          faqGaps.push({
            pageId: page.id,
            locale,
            sourcePath,
            expected: englishFaq.length,
            actual: localizedFaq.length,
            english: englishFaq,
            localized: localizedFaq,
          });
        }
      }
    }
  }

  return { incomplete, faqGaps };
}

/** Localized `<title>` strings from the SEO dictionaries, keyed `locale:pageId`. */
export function loadLocalizedSeoTitles() {
  const titles = new Map();
  for (const locale of LOCALES) {
    const sourcePath = join(process.cwd(), 'src/app/i18n/content', `${locale}.ts`);
    const sourceFile = ts.createSourceFile(
      sourcePath,
      readFileSync(sourcePath, 'utf8'),
      ts.ScriptTarget.Latest,
      true,
    );
    const seo = getProperty(findVariable(sourceFile, locale), 'seo');
    for (const property of properties(seo)) {
      const title = literalText(getProperty(property.initializer, 'title')).replace(/\s+/g, ' ').trim();
      if (title) titles.set(`${locale}:${propertyName(property)}`, title);
    }
  }
  return titles;
}
