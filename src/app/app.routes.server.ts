import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

/** Kept in sync with `server.routes.ts` (used by provideServerRendering). */
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
