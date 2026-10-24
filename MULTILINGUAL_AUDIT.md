# Multilingual Routing and SEO Audit

Audit performed: 2026-10-10, before application-code changes for the multilingual task.

## Scope and Method

Reviewed the centralized `PAGES` registry, `PAGE_LOADERS`/`REGISTRY`, route factory, locale parsing and switching, article/tour resolvers and overlay mergers, SEO metadata service, sitemap eligibility/reciprocity, prerender configuration, and generated Colombo SSR HTML. Ran a static check across all registered pages and all eight locales for URL generation, slug normalization collisions, and route-loader coverage; parsed article/tour translation overlays; checked all locale metadata dictionaries; and ran `node scripts/test-edge-redirects.mjs`.

## Verified

- The registry contains 83 pages and supports `en`, `de`, `fr`, `it`, `es`, `pl`, `ru`, and `nl` (664 page-locale URL combinations).
- All 664 combinations have a non-empty registered slug; none has a leading/trailing slash or doubled slash; there are no normalized route collisions.
- `PAGE_LOADERS` has 83 entries: no page lacks a component loader and no loader ID is absent from `PAGES`.
- English paths are unprefixed; non-English paths use `/{locale}/`. `routes.factory.ts` builds routes from `REGISTRY` rather than a second localized route table.
- The edge redirect test passes: 44 redirect cases and 177 dormant locale prefixes.
- The tour-overlay scan found no missing localized tour fields or itinerary activity text across the eight locales.
- The existing `discoverRoutes: true` prerender configuration and SSR fallback cover the generated route table.

## Findings Before Changes

1. **Worktree changed explicit indexing policy.** `git diff` showed the following pre-existing eight-locale lists had been narrowed: `destColombo`, `destNegombo`, `destBentota`, `destWeligama`, and `destTrincomalee`. It also showed new overrides on `destMirissa`, `guideTrainJourneys`, `guideHoneymoon`, `guideFamilyTours`, and `guideAirportTransfers`; `guideLuxuryTours` had changed from `['en','de']` to `['en']`; and `monthAugust` had changed from seven locales to `['en','de']`. These conflict with the preservation requirements. The original explicit restrictions that must remain are: `destHiriketiya: ['en']`; `guideWhaleWatching: ['en','de']`; `guideLuxuryTours: ['en','de']`; each market page's existing market-language pair (and `marketUK: ['en']`); and August's `['en','de','fr','es','pl','it','ru']`.

2. **Silent English article fallback.** `localizeArticle()` overlays fields and sections by array position, returning English fields/sections when a translation is absent. Across the 83-page registry's article data, the static scan found 102 page-locale overlays with at least one fallback. Sixty-nine are outside the original indexing eligibility by explicit restriction; 33 affect variants intended to remain indexable:
   - Colombo: `it`, `pl`, `ru`, `nl` (missing sections 3 and/or 4)
   - Negombo: `it`, `pl`, `ru`, `nl` (missing sections)
   - Bentota: `it`, `pl`, `ru`, `nl` (missing sections)
   - Mirissa: `nl` (all 8 sections missing)
   - Weligama: `it`, `es`, `pl`, `ru`, `nl` (missing sections)
   - Trincomalee: `it`, `es`, `pl`, `ru`, `nl` (missing sections)
   - Train journeys, honeymoon, family tours, airport transfers: `nl` (article sections fall back)
   - Luxury tours: `de` (article sections fall back)
   - August guide: `fr`, `it`, `es`, `pl`, `ru` (incomplete section arrays)

   Market pages intentionally have authored English plus the matching market language; other locale routes currently fall back and are excluded from indexing by their original explicit restrictions.

3. **SEO metadata gaps.** Eight page-locale dictionaries lack a title and/or description when checked across all route locales: `destHiriketiya` in `de/fr/it/es/pl/ru/nl`, and `destWeligama/nl`. Hiriketiya is intentionally English-only for indexing; Weligama Dutch is index-eligible under its original eight-locale configuration and needs localized metadata.

4. **Language switching.** The switcher resolves the current stable page ID to the target locale slug, so it preserves the logical page. It currently does not preserve query parameters or URL fragments.

5. **Polish Colombo slug.** `/pl/colombo-sri-lanka` is valid and collision-free, but does not use the natural Polish spelling `Kolombo`. A localized `/pl/kolombo-sri-lanka` is appropriate; the old Polish path should permanently redirect to it.

6. **Rendered SEO configuration.** The existing SEO service derives canonical, hreflang, and robots from the shared page/locale policy, and sitemap generation uses the same eligibility helper plus a reciprocity validator. In the current narrowed worktree, generated Colombo HTML had self-canonicals, but Polish and Russian were `noindex, follow` and the cluster had only five alternate links. This is a direct result of the changed allowlists, not the original intended configuration.

## Planned Corrections

Restore the original explicit `indexLocales` configuration exactly; translate the missing index-eligible article content and metadata; keep intentional market/Hiriketiya/whale/luxury restrictions; register the Polish Colombo slug with a redirect from its previous URL; preserve query parameters/fragments on language switch; and extend the prebuild audit to validate all supported locales, routing, metadata, and SEO output without silently accepting English fallback.

## Audit Limits

The route and translation checks are static. One representative generated Colombo SSR sample was inspected; every route was not individually opened in a browser. The production build and generated HTML must be rerun after corrections, and browser hydration behavior should be verified for representative English, Polish, Italian, and Russian routes.
