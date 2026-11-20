/**
 * Compare leaf string keys in locale content dicts against English.
 */
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';

// Content files are TypeScript; load via dynamic import of compiled? They use `export const de: Dict`.
// Parse statically instead of executing TS.
import { readFileSync, readdirSync } from 'node:fs';

const dir = join(process.cwd(), 'src/app/i18n/content');

function leafPaths(src) {
  // Strip types/imports; keep object literal after `export const xx: Dict =`
  const m = src.match(/export const \w+(?::\s*Dict)?\s*=\s*(\{[\s\S]*\});?\s*$/);
  if (!m) return new Map();
  const map = new Map();
  const stack = [];
  let i = 0;
  const text = m[1];
  // Tokenize roughly: keys and string values
  const keyRe = /([a-zA-Z_][\w]*)\s*:/g;
  // Simpler approach: walk with brace depth and capture key: 'string'
  function walk(objSrc, prefix) {
    // This is fragile; use JSON-ish conversion
  }
  // Convert single-quoted TS object to JSON-ish via regex extraction of paths
  const re = /([a-zA-Z_][\w]*)\s*:\s*'((?:\\'|[^'])*)'/g;
  // Also need nesting — use brace-aware parser
  return parseObject(text, '');
}

function parseObject(src, prefix) {
  const map = new Map();
  let i = 0;
  function skipWs() {
    while (i < src.length && /\s|,/.test(src[i])) i++;
  }
  function parseString() {
    const q = src[i];
    if (q !== "'" && q !== '"') return null;
    i++;
    let out = '';
    while (i < src.length) {
      if (src[i] === '\\') {
        out += src[i + 1] || '';
        i += 2;
        continue;
      }
      if (src[i] === q) {
        i++;
        break;
      }
      out += src[i++];
    }
    return out;
  }
  function parseValue(path) {
    skipWs();
    if (src[i] === '{') {
      i++;
      parseObjectBody(path);
      return;
    }
    if (src[i] === '[') {
      // skip arrays
      let depth = 1;
      i++;
      while (i < src.length && depth) {
        if (src[i] === '[') depth++;
        else if (src[i] === ']') depth--;
        else if (src[i] === "'" || src[i] === '"') parseString();
        else i++;
      }
      return;
    }
    const s = parseString();
    if (s !== null) {
      map.set(path, s);
      return;
    }
    // bare identifier / number / true
    while (i < src.length && /[^\s,}]/.test(src[i])) i++;
  }
  function parseObjectBody(pathPrefix) {
    while (i < src.length) {
      skipWs();
      if (src[i] === '}') {
        i++;
        return;
      }
      // key
      const keyStart = i;
      if (!/[a-zA-Z_]/.test(src[i])) {
        i++;
        continue;
      }
      while (i < src.length && /[\w]/.test(src[i])) i++;
      const key = src.slice(keyStart, i);
      skipWs();
      if (src[i] !== ':') continue;
      i++;
      const path = pathPrefix ? `${pathPrefix}.${key}` : key;
      parseValue(path);
      skipWs();
    }
  }
  skipWs();
  if (src[i] === '{') {
    i++;
    parseObjectBody(prefix);
  }
  return map;
}

const enSrc = readFileSync(join(dir, 'en.ts'), 'utf8');
const enMap = leafPaths(enSrc);
const locales = readdirSync(dir).filter((f) => /^[a-z]{2}\.ts$/.test(f) && f !== 'en.ts');

const importantPrefixes = [
  'common.tourUi',
  'home.popular',
  'restaurantsExplore',
  'about.why',
  'notFound',
  'common.footer',
  'testimonials',
];

for (const file of locales) {
  const map = leafPaths(readFileSync(join(dir, file), 'utf8'));
  const missing = [];
  for (const [k] of enMap) {
    if (!importantPrefixes.some((p) => k === p || k.startsWith(p + '.'))) continue;
    if (!map.has(k)) missing.push(k);
  }
  console.log(`\n${file}: missing ${missing.length} important keys`);
  for (const k of missing.slice(0, 40)) console.log('  -', k);
  if (missing.length > 40) console.log(`  ... +${missing.length - 40} more`);
}

console.log(`\nEN leaf strings: ${enMap.size}`);
