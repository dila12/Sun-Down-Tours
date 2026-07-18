/**
 * Vercel serverless entry for Angular SSR.
 * Routes HTML requests through the Express `reqHandler` so RESPONSE_INIT
 * (true HTTP 404) and edge 301 middleware run in production.
 *
 * Prefers the slim `ssr-bundle` (no assets/img) from prepare-vercel-function.mjs.
 * Falls back to full `dist/Travelwebsite/server` for local SSR.
 */
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const slim = join(root, 'dist/Travelwebsite/ssr-bundle/server/server.mjs');
const full = join(root, 'dist/Travelwebsite/server/server.mjs');
const entry = existsSync(slim) ? slim : full;

export default import(entry).then((module) => module.reqHandler);
