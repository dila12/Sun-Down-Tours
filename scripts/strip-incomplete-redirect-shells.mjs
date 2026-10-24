/**
 * Removes prerendered HTML for incomplete locale URLs so a static host
 * cannot answer them with HTTP 200. The edge redirect map serves HTTP 301.
 */
import { existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { INCOMPLETE_LOCALE_REDIRECTS } from '../src/app/i18n/incomplete-locale-redirects.mjs';

const browser = join(process.cwd(), 'dist/Travelwebsite/browser');
let removed = 0;
for (const from of Object.keys(INCOMPLETE_LOCALE_REDIRECTS)) {
  const file = join(browser, from.replace(/^\//, ''), 'index.html');
  if (!existsSync(file)) continue;
  rmSync(file);
  removed += 1;
}
console.log(`Removed ${removed} incomplete-locale prerender shells`);
