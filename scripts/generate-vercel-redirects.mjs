/**
 * Regenerates the `redirects` block in vercel.json from site-data + edge-redirects.
 * Keeps apex→www and merges generated legacy/dormant-locale 301s.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildEdgeRedirectMap } from '../src/app/i18n/edge-redirects.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const vercelPath = join(root, 'vercel.json');

const apexRedirect = {
  source: '/:path*',
  has: [{ type: 'host', value: 'sundowntours.com' }],
  destination: 'https://www.sundowntours.com/:path*',
  permanent: true,
};

function pathToSource(path) {
  // Vercel source patterns: exact path segments
  return path === '/' ? '/' : path;
}

async function main() {
  const map = buildEdgeRedirectMap();
  const generated = [...map.entries()]
    .filter(([from, to]) => from !== to)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([from, to]) => ({
      source: pathToSource(from),
      destination: to,
      permanent: true,
    }));

  let existing = {};
  try {
    existing = JSON.parse(await readFile(vercelPath, 'utf8'));
  } catch {
    existing = { version: 2 };
  }

  const otherFunctions = { ...(existing.functions ?? {}) };
  delete otherFunctions['api/index.js'];

  const vercel = {
    version: 2,
    ...existing,
    // Publish the browser build (with images) as the static CDN root.
    outputDirectory: 'dist/Travelwebsite/browser',
    // Builds slim ssr-bundle without assets/img for the serverless function.
    buildCommand: 'npm run vercel-build',
    redirects: [apexRedirect, ...generated],
    headers: existing.headers ?? [
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ],
    // SSR for HTML routes; /assets/* must hit the CDN filesystem first.
    rewrites: [
      { source: '/', destination: '/api' },
      { source: '/((?!api/|assets/).*)', destination: '/api' },
    ],
    functions: {
      ...otherFunctions,
      'api/index.js': {
        includeFiles: 'dist/Travelwebsite/ssr-bundle/**',
        maxDuration: 30,
      },
    },
  };

  await writeFile(vercelPath, `${JSON.stringify(vercel, null, 2)}\n`, 'utf8');
  console.log(
    `[vercel-redirects] Wrote ${generated.length} edge 301s + SSR rewrites to vercel.json`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
