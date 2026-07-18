/**
 * Vercel packages `includeFiles` into the SSR function (250 MB limit).
 * `excludeFiles` is unreliable — do not depend on it.
 *
 * Strategy:
 * 1. Keep `dist/Travelwebsite/browser` intact (with assets/img) → CDN via
 *    `outputDirectory`.
 * 2. Build a slim `dist/Travelwebsite/ssr-bundle/` = server + browser copy
 *    WITHOUT `assets/img` (~138 MB).
 * 3. `api/index.js` + `includeFiles` point at `ssr-bundle` only.
 */
import {
  cpSync,
  existsSync,
  rmSync,
  mkdirSync,
  readdirSync,
  statSync,
} from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const browser = join(root, 'dist/Travelwebsite/browser');
const server = join(root, 'dist/Travelwebsite/server');
const imgBrowser = join(browser, 'assets/img');
const imgPublic = join(root, 'public/assets/img');
const ssrBundle = join(root, 'dist/Travelwebsite/ssr-bundle');
const ssrBrowser = join(ssrBundle, 'browser');
const ssrServer = join(ssrBundle, 'server');
const ssrImg = join(ssrBrowser, 'assets/img');

function dirSizeMb(dir) {
  let total = 0;
  const walk = (p) => {
    if (!existsSync(p)) return;
    for (const name of readdirSync(p)) {
      const full = join(p, name);
      const st = statSync(full);
      if (st.isDirectory()) walk(full);
      else total += st.size;
    }
  };
  walk(dir);
  return total / (1024 * 1024);
}

if (!existsSync(server) || !existsSync(browser)) {
  console.error('[prepare-vercel] Missing dist/Travelwebsite/{server,browser}. Run ng build first.');
  process.exit(1);
}

// Restore images into browser CDN output if a previous run moved them to public/.
if (!existsSync(imgBrowser) && existsSync(imgPublic)) {
  mkdirSync(dirname(imgBrowser), { recursive: true });
  cpSync(imgPublic, imgBrowser, { recursive: true });
  console.log('[prepare-vercel] Restored assets/img into browser output for CDN.');
}

if (!existsSync(imgBrowser)) {
  console.warn('[prepare-vercel] Warning: browser/assets/img missing — CDN images will 404.');
}

if (existsSync(ssrBundle)) {
  rmSync(ssrBundle, { recursive: true, force: true });
}
mkdirSync(ssrBundle, { recursive: true });

cpSync(server, ssrServer, { recursive: true });
cpSync(browser, ssrBrowser, { recursive: true });
if (existsSync(ssrImg)) {
  rmSync(ssrImg, { recursive: true, force: true });
}

// public/assets/img is optional backup; CDN primary is outputDirectory browser/.
if (existsSync(imgBrowser)) {
  mkdirSync(dirname(imgPublic), { recursive: true });
  cpSync(imgBrowser, imgPublic, { recursive: true });
}

const fnMb = dirSizeMb(ssrBundle);
const cdnImgMb = dirSizeMb(imgBrowser);
console.log(
  `[prepare-vercel] SSR function bundle: ${fnMb.toFixed(1)} MB (images excluded)`,
);
console.log(
  `[prepare-vercel] CDN images kept in browser/assets/img: ${cdnImgMb.toFixed(1)} MB`,
);

if (fnMb >= 250) {
  console.error(`[prepare-vercel] SSR bundle still >= 250 MB (${fnMb.toFixed(1)}).`);
  process.exit(1);
}
