import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import compression from 'compression';
import { join } from 'node:path';
import { buildEdgeRedirectMap, resolveEdgeRedirect } from './app/i18n/edge-redirects.mjs';

const browserDistFolder = join(import.meta.dirname, '../browser');
const edgeRedirects = buildEdgeRedirectMap();

const app = express();
app.use(compression());
const angularApp = new AngularNodeAppEngine({
  allowedHosts: [
    'localhost',
    '127.0.0.1',
    'sundowntours.com',
    'www.sundowntours.com',
  ],
});

/** Canonical host: apex → www (HTTP 308 permanent). Skip local/dev hosts. */
app.use((req, res, next) => {
  const host = (req.headers.host || '').split(':')[0].toLowerCase();
  if (host === 'sundowntours.com') {
    const target = `https://www.sundowntours.com${req.originalUrl || '/'}`;
    res.redirect(308, target);
    return;
  }
  next();
});

/** Legacy slug + dormant-locale HTTP 301s (before Angular soft routing). */
app.use((req, res, next) => {
  const target = resolveEdgeRedirect(req.path || '/', edgeRedirects);
  if (target) {
    const qs = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
    res.redirect(301, `${target}${qs}`);
    return;
  }
  next();
});

app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use(
  express.static(browserDistFolder, {
    // HTML must revalidate; versioned image URLs (?v=) bust caches when assets regenerate.
    maxAge: '1y',
    index: false,
    redirect: false,
    setHeaders: (res, filePath) => {
      if (/\.(html?)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'no-cache');
        return;
      }
      if (/\.(jpe?g|png|webp|avif|gif|svg|js|mjs|css|woff2)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    },
  }),
);

app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => {
      if (!response) {
        next();
        return;
      }
      // Edge-cache prerendered HTML so repeat visits skip a cold SSR hop.
      if (req.method === 'GET' && response.status === 200) {
        const headers = new Headers(response.headers);
        headers.set('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=86400');
        return writeResponseToNodeResponse(
          new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers,
          }),
          res,
        );
      }
      return writeResponseToNodeResponse(response, res);
    })
    .catch((err) => {
      console.error('[ssr]', req.path, err);
      if (res.headersSent) {
        next(err);
        return;
      }
      // Never 500 unknown URLs — Googlebot treats 5xx as a site outage.
      res
        .status(404)
        .type('text/html; charset=utf-8')
        .send(
          '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Not Found</title></head><body><h1>404</h1><p>Not Found</p></body></html>',
        );
    });
});

/** Unknown paths: 404 instead of a blank Express fall-through. */
app.use((_req, res) => {
  res.status(404).type('text/plain').send('Not Found');
});

if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);
