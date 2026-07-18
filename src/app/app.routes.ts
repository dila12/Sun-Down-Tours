import { Routes } from '@angular/router';
import { buildRoutes } from './i18n/routes.factory';

/**
 * Route table generated from the multilingual page registry. English is served
 * from the root and every other locale from its `/{locale}` prefix with
 * translated slugs. See `src/app/i18n/site-data.mjs` for the source of truth.
 */
export const routes: Routes = buildRoutes();
