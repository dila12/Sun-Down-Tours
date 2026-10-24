/**
 * Appends reviewed FAQ pairs to indexable article locales.
 * Idempotent: a question already present in that locale is skipped.
 * Does not rewrite existing answers.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import ts from 'typescript';

const supplements = JSON.parse(readFileSync(new URL('./faq-supplements.json', import.meta.url), 'utf8'));

function properties(node) {
  return node && ts.isObjectLiteralExpression(node)
    ? node.properties.filter(ts.isPropertyAssignment)
    : [];
}

function propertyName(property) {
  if (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) return property.name.text;
  return '';
}

function getProperty(node, name) {
  return properties(node).find((property) => propertyName(property) === name)?.initializer;
}

function findVariable(sourceFile, name) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.name.text === name) return declaration.initializer;
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

function quote(value) {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

const loaderFile = join(process.cwd(), 'src/app/i18n/articles/article-content.service.ts');
const loaderSource = ts.createSourceFile(
  loaderFile,
  readFileSync(loaderFile, 'utf8'),
  ts.ScriptTarget.Latest,
  true,
);
const loaders = findVariable(loaderSource, 'ARTICLE_LOADERS');
const sourceByPage = new Map();
for (const property of properties(loaders)) {
  const modulePath = findDynamicImport(property.initializer);
  if (modulePath) sourceByPage.set(propertyName(property), join(dirname(loaderFile), `${modulePath}.ts`));
}

const editsByFile = new Map();
let inserted = 0;

for (const [pageId, locales] of Object.entries(supplements)) {
  const sourcePath = sourceByPage.get(pageId);
  if (!sourcePath) throw new Error(`No article source for ${pageId}`);
  const text = editsByFile.get(sourcePath)?.text ?? readFileSync(sourcePath, 'utf8');
  const sourceFile = ts.createSourceFile(sourcePath, text, ts.ScriptTarget.Latest, true);
  let content;
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (getProperty(declaration.initializer, 'en')) content = declaration.initializer;
    }
  }
  const insertions = [];
  for (const [locale, items] of Object.entries(locales)) {
    const overlay = getProperty(content, locale);
    const faq = getProperty(overlay, 'faq');
    if (!faq || !ts.isArrayLiteralExpression(faq)) {
      throw new Error(`${pageId}/${locale}: FAQ array not found`);
    }
    const close = faq.end - 1;
    if (text[close] !== ']') throw new Error(`${pageId}/${locale}: expected ] at ${close}`);
    const existing = text.slice(faq.getStart(sourceFile), faq.end);
    const pending = items.filter((item) => !existing.includes(item.q));
    if (!pending.length) continue;
    const lineStart = text.lastIndexOf('\n', close) + 1;
    const indent = /^[ \t]*/.exec(text.slice(lineStart, close))?.[0] ?? '    ';
    const block = pending
      .map(
        (item) =>
          `${indent}  {\n${indent}    q: ${quote(item.q)},\n${indent}    a: ${quote(item.a)},\n${indent}  },`,
      )
      .join('\n');
    insertions.push({ close, block, indent });
    inserted += pending.length;
  }
  insertions.sort((a, b) => b.close - a.close);
  let next = text;
  for (const insertion of insertions) {
    let head = next.slice(0, insertion.close).replace(/\s*$/, '');
    if (!head.endsWith(',') && !head.endsWith('[')) head += ',';
    next = `${head}\n${insertion.block}\n${insertion.indent}${next.slice(insertion.close)}`;
  }
  editsByFile.set(sourcePath, { text: next });
}

for (const [sourcePath, { text }] of editsByFile) {
  const original = readFileSync(sourcePath, 'utf8');
  if (original !== text) writeFileSync(sourcePath, text);
}

console.log(`Inserted ${inserted} FAQ pairs into ${editsByFile.size} files`);
