/**
 * Removes repeated CTA / trust tails from seo.*.description strings.
 * Exact consecutive duplicates and later repeats of the same closer both go.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'src/app/i18n/content');
const files = readdirSync(dir).filter((f) => f.endsWith('.ts') && !['types.ts', 'index.ts'].includes(f));

const REPEAT_TAILS = [
  'Team seit 1992.',
  'Équipe depuis 1992.',
  'Equipe depuis 1992.',
  'Demandez un devis.',
  'Team sinds 1992.',
  'Zespół od 1992.',
  'Команда с 1992 года.',
  'Squadra dal 1992.',
  'Equipo desde 1992.',
];

function dedupeConsecutiveSentences(text) {
  let out = text;
  let prev;
  do {
    prev = out;
    out = out.replace(/([^.!?…]+[.!?…])(\s*)\1/g, '$1');
  } while (out !== prev);
  return out;
}

function stripLaterTailRepeats(text) {
  let out = text;
  for (const tail of REPEAT_TAILS) {
    const re = new RegExp(tail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    const hits = out.match(re);
    if (!hits || hits.length < 2) continue;
    let seen = false;
    out = out
      .replace(re, (hit) => {
        if (!seen) {
          seen = true;
          return hit;
        }
        return '';
      })
      .replace(/\s{2,}/g, ' ')
      .replace(/\s+\./g, '.')
      .trim();
  }
  return out;
}

function cleanDescription(text) {
  return stripLaterTailRepeats(dedupeConsecutiveSentences(text));
}

let changedFiles = 0;
let changedStrings = 0;

for (const file of files) {
  const full = join(dir, file);
  const before = readFileSync(full, 'utf8');
  const after = before.replace(/(description:\s*\n?\s*)(')((?:\\'|[^'])*)(')/g, (m, prefix, q1, body, q2) => {
    const cleaned = cleanDescription(body);
    if (cleaned !== body) changedStrings += 1;
    return `${prefix}${q1}${cleaned}${q2}`;
  });
  if (after !== before) {
    writeFileSync(full, after);
    changedFiles += 1;
    console.log(`updated ${file}`);
  }
}

console.log(`deduped ${changedStrings} description(s) across ${changedFiles} file(s)`);
