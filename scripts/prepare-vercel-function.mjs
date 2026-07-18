/**
 * Vercel packages `includeFiles` into the SSR serverless function.
 * `excludeFiles` is unreliable for this project (still hit 256 MB / 250 MB limit).
 *
 * Move heavy WebP/JPEG trees out of `dist/.../browser/assets/img` into `public/`
 * so the CDN serves them, then delete them from dist so they are not bundled
 * into `api/index`.
 *
 * Runs only via `vercel-build` (not local `npm run build`) so local SSR still
 * has images under dist for express.static.
 */
import { cpSync, existsSync, rmSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const imgDist = join(root, 'dist/Travelwebsite/browser/assets/img');
const imgPublic = join(root, 'public/assets/img');

function dirSizeMb(dir) {
  let total = 0;
  const walk = (p) => {
    for (const name of readdirSync(p)) {
      const full = join(p, name);
      const st = statSync(full);
      if (st.isDirectory()) walk(full);
      else total += st.size;
    }
  };
  if (existsSync(dir)) walk(dir);
  return total / (1024 * 1024);
}

function estimateFunctionMb() {
  const roots = [
    join(root, 'dist/Travelwebsite/server'),
    join(root, 'dist/Travelwebsite/browser'),
  ];
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
  for (const r of roots) walk(r);
  return total / (1024 * 1024);
}

if (!existsSync(imgDist)) {
  console.log('[prepare-vercel] No dist browser/assets/img — nothing to move.');
  process.exit(0);
}

const beforeImg = dirSizeMb(imgDist);
const beforeFn = estimateFunctionMb();

mkdirSync(dirname(imgPublic), { recursive: true });
cpSync(imgDist, imgPublic, { recursive: true });
rmSync(imgDist, { recursive: true, force: true });

const afterFn = estimateFunctionMb();
console.log(
  `[prepare-vercel] Moved assets/img (${beforeImg.toFixed(1)} MB) → public/assets/img`,
);
console.log(
  `[prepare-vercel] Estimated function include size: ${beforeFn.toFixed(1)} MB → ${afterFn.toFixed(1)} MB`,
);

if (afterFn >= 250) {
  console.error(
    `[prepare-vercel] Still >= 250 MB (${afterFn.toFixed(1)}). Refusing to continue.`,
  );
  process.exit(1);
}
