import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import ts from 'typescript';

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
function texts(node, out = []) {
  if (!node) return out;
  if (node.kind === ts.SyntaxKind.StringLiteral || node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral) {
    out.push(node.text);
  }
  ts.forEachChild(node, (child) => {
    texts(child, out);
  });
  return out;
}

const files = [
  ['src/app/i18n/articles/article-content.service.ts', 'ARTICLE_LOADERS'],
  ['src/app/i18n/tours/tour-content.service.ts', 'TOUR_DETAIL_LOADERS'],
];
const german = /\b(und|der|die|das|fur|nicht|oder|eine|ist|sind|nach|sie|wir|ihnen|einen)\b/gi;
const dutch = /\b(het|een|van|voor|niet|zijn|wordt|wij|naar|deze|ook|met|een)\b/gi;

for (const [relativePath, loaderName] of files) {
  const loaderFile = join(process.cwd(), relativePath);
  const sourceFile = ts.createSourceFile(loaderFile, readFileSync(loaderFile, 'utf8'), ts.ScriptTarget.Latest, true);
  const loader = findVariable(sourceFile, loaderName);
  for (const property of properties(loader)) {
    const pageId = propertyName(property);
    const modulePath = findDynamicImport(property.initializer);
    if (!modulePath) continue;
    const sourcePath = join(dirname(loaderFile), `${modulePath}.ts`);
    const file = ts.createSourceFile(sourcePath, readFileSync(sourcePath, 'utf8'), ts.ScriptTarget.Latest, true);
    let content;
    for (const statement of file.statements) {
      if (!ts.isVariableStatement(statement)) continue;
      for (const declaration of statement.declarationList.declarations) {
        if (getProperty(declaration.initializer, 'en')) content = declaration.initializer;
      }
    }
    const nl = getProperty(content, 'nl');
    const de = getProperty(content, 'de');
    const nlText = texts(nl).join(' ');
    const deText = texts(de).join(' ');
    const g = nlText.match(german)?.length || 0;
    const d = nlText.match(dutch)?.length || 0;
    const same = Boolean(nlText) && nlText === deText;
    if (!nlText || same || g > d) {
      console.log(`${pageId} g=${g} d=${d} same=${same} chars=${nlText.length}`);
    }
  }
}
