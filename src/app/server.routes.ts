import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Prerender all discovered routes at build time for CWV.
 * Unknown URLs fall back to SSR so NotFoundComponent can set HTTP 404
 * via RESPONSE_INIT (avoids Express "Cannot GET" soft gaps).
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,
    async getPrerenderParams() {
      return [];
    },
  },
];
