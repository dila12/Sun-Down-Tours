# Multilingual Routing and SEO Post-Fix Audit

## 1. Executive summary

The previously reported indexing, Colombo Polish/Russian `noindex`, missing article sections, and Polish Colombo slug problems are fixed in the current uncommitted worktree and in the production prerender that was built during this audit.

`npx ng build --configuration production` completed with exit code 0 and wrote **664** `index.html` files, one per registered page-locale route. Of those, **469** are full documents and **195** are meta-refresh shells for incomplete non-indexable translations. All **427** sitemap-eligible URLs are inside the 469 full documents. Those 427 have one `https://www.sundowntours.com` canonical, the expected hreflang set, and `index, follow`. Polish Colombo (`/pl/kolombo-sri-lanka`) and Russian Colombo (`/ru/kolombo-shri-lanka`) are `index, follow` with nine alternate links, including `x-default`.

A live check against the built Express server returned **HTTP 301** from `/pl/colombo-sri-lanka?campaign=summer&ref=mail` to `/pl/kolombo-sri-lanka?campaign=summer&ref=mail`. The new URL returned **HTTP 200**. There is no redirect loop.

What is not fixed, or not fully proven:

- The 195 incomplete locale URLs are served as **HTTP 200** with `<title>Redirecting</title>` and a meta refresh. They have no robots meta tag. Confirmed live for `/de/hiriketiya-sri-lanka` (285 bytes).
- Several previously thin locales now have every section, but fewer FAQ items than English.
- Russian Bentota still contains the joined word `ШриЛанка`.
- `scripts/test-edge-redirects.mjs` passes, and its 44 cases do **not** include the new Polish Colombo redirect.
- Language-switch query and fragment preservation is implemented and unit-tested in source, but that spec was not executed and no browser session was run.
- Hydration was not observed in a browser. Prerendered full pages do include `<script id="ng-state">`.

No critical or high-severity defect remains. Google ranking was not measured.

## 2. Audit date and environment

| Item | Value |
| --- | --- |
| Audit date | 2026-10-24 |
| Machine | Windows 10 (win32 10.0.26200), PowerShell |
| Node | v24.15.0 |
| Repository | `D:/Website/Sun-Down-Tours` |
| Branch | `main` |
| HEAD | `66042dc9a43b1919a1a5127432e588ea5ce5911d` (2026-10-03, message `..`) |
| Worktree | Uncommitted. Nothing was committed, reset, or deployed during this audit. |
| Production output | `dist/Travelwebsite` from `npx ng build --configuration production` (exit 0, 85.6 s) |
| Temporary server | `node dist/Travelwebsite/server/server.mjs` on port 4321, then stopped |

The October 10 audit’s dirty snapshot is not stored as a commit. Claims about that exact worktree can be checked only against current `HEAD` plus the current diff.

## 3. Scope and methodology

Inspected git status, `git diff --stat`, `git diff --check`, and the diffs for the registry, locale switcher, article resolver, structured data, and `vercel.json`.

Re-executed:

- `node scripts/audit-i18n-seo.mjs`
- `node scripts/test-edge-redirects.mjs`
- An out-of-repo measurement script over `PAGES`, loaders, article AST text, SEO dictionaries, sitemap XML, and redirect map
- A second out-of-repo script over all 664 prerendered `index.html` files
- A third script that parsed every `<script id="ld-json-graph">` block
- `curl.exe -sI` against the built server

Application code was not changed. The existing audit script was not extended.

## 4. Git diff and baseline findings

`git status --short` shows 41 modified tracked files and two untracked files: `MULTILINGUAL_AUDIT.md` and `src/app/i18n/site-data.spec.ts`. `git diff --stat` reports 2,186 insertions and 1,121 deletions. `git diff --check` exited 0. The only messages were CRLF warnings for sitemap XML, `nl.ts`, and `vercel.json`.

`git diff -- src/app/i18n/site-data.mjs` does **not** change any `indexLocales` array. `git show HEAD:src/app/i18n/site-data.mjs` already contains the required allowlists. The October 10 note that a dirty diff had narrowed Colombo, Negombo, Bentota, Weligama, Trincomalee, luxury, and August cannot be reproduced from this HEAD. Those lists were already correct on 2026-10-03.

Changes that belong to the multilingual fix, versus other worktree edits:

| Change | Classification |
| --- | --- |
| Polish Colombo slug `kolombo-sri-lanka` and legacy key `colombo-sri-lanka` in `site-data.mjs` | Multilingual fix |
| `createLocaleSwitchTree` and layout call site | Multilingual fix |
| `hasCompleteArticleTranslation` and English `RedirectCommand` | Multilingual fix |
| Destination/guide locale overlays and `content/*.ts` SEO strings | Multilingual fix, mixed with earlier copy edits |
| `DESTINATION_PLACES`, `containedInPlace`, Russia in `areaServed`, `CONTENT_MODIFIED` `2026-10-24` | Multilingual / geo fix from the latest edit |
| `prebuild` now runs `scripts/audit-i18n-seo.mjs` | Audit wiring |
| `vercel.json` permanent rules for `/pl/colombo-sri-lanka` and `/ru/colombo-sri-lanka` | Redirect fix |
| `angular.json` `styles.css` to `styles.scss` | Unrelated. The production build used it and succeeded. |
| Home component and `home-seo.content.ts`, `booking-success.spec.ts`, `teaCountry.ts`, `russiaFromRu.ts` | Present in the same worktree. Not re-audited as the October 10 defect list. |
| Generated `public/sitemap*.xml` | Matches the current 427 indexable URLs. `lastmod` on Colombo is `2026-10-10`. |

## 5. Route and loader coverage

**F-01. All 664 page-locale routes. PASS. Informational.**

- Pages: 83. Locales: `en`, `de`, `fr`, `it`, `es`, `pl`, `ru`, `nl`. Combinations checked: 83 × 8 = **664**.
- Passed: **664**. Failed: **0**.
- Eight of those are the home page, whose slug is intentionally `''` (`site-data.mjs` line 89, `slugs: same('')`). They resolve to `/` and `/{locale}`.
- The other 656 slugs are non-empty, have no leading, trailing, or doubled slash, and do not collide inside a locale.
- English paths are unprefixed. Other locales use `/{locale}/`.
- `buildUrl` is `https://www.sundowntours.com` plus that path.
- `routes.factory.ts` lines 54–75 iterate `REGISTRY` and set `path: page.slugs[locale]` with `data.pageId`. There is no second localized route table.
- `PAGE_LOADERS` in `pages.registry.ts` has 83 ids. Every page id has a loader, and every loader id is in `PAGES`.
- Prerender wrote 664 `index.html` files. All 664 file paths map back to a registry path. `pl/colombo-sri-lanka/index.html` does not exist. `pl/kolombo-sri-lanka/index.html` does.

`node scripts/audit-i18n-seo.mjs` also printed: `OK: 83 page IDs, 664 localized routes, unique slugs, loaders, and original indexLocales policy`.

## 6. Indexing eligibility and allowlist verification

**F-02. Required allowlists. PASS.**

Current `indexLocales`, also present at HEAD:

| Page | Actual list |
| --- | --- |
| `destColombo`, `destNegombo`, `destBentota`, `destWeligama`, `destTrincomalee` | `en`, `de`, `fr`, `es`, `pl`, `it`, `ru`, `nl` |
| `destHiriketiya` | `en` |
| `guideWhaleWatching`, `guideLuxuryTours`, `marketGermany` | `en`, `de` |
| `marketFrance` | `en`, `fr` |
| `marketItaly` | `en`, `it` |
| `marketSpain` | `en`, `es` |
| `marketPoland` | `en`, `pl` |
| `marketRussia` | `en`, `ru` |
| `marketNetherlands` | `en`, `nl` |
| `marketUK` | `en` |
| `monthAugust` | `en`, `de`, `fr`, `es`, `pl`, `it`, `ru` (Dutch excluded) |

`destMirissa`, `guideTrainJourneys`, `guideHoneymoon`, `guideFamilyTours`, and `guideAirportTransfers` have **no** `indexLocales`, so `getIndexableLocalesForPage` returns all eight locales. They were not narrowed.

Indexable page-locale pairs: **427**. `public/sitemap.xml` has **427** `<loc>` entries. Missing from sitemap: 0. Extra: 0.

`SeoService.update` (`src/seo.service.ts` line 57) sets `index, follow` only when `isPageIndexable` is true, otherwise `noindex, follow`. The prerendered full documents match that rule (see section 9).

## 7. Translation completeness and fallback analysis

**F-03. Previously missing sections. PASS.**

The article AST was read for every indexable destination and guide locale. **204** non-English indexable article locales were checked. Incomplete: **0**. Section bodies identical to English: **0**.

Previously flagged combinations, measured from source text:

| Page | Locale | Sections | FAQ vs English | English section bodies |
| --- | --- | --- | --- | --- |
| Colombo | it, pl, ru, nl | 4/4 | 1/3 | 0 |
| Negombo | it, pl, ru | 3/3 | 1/2 | 0 |
| Negombo | nl | 3/3 | 2/2 | 0 |
| Bentota | it, pl, ru | 3/3 | 1/2 | 0 |
| Bentota | nl | 3/3 | 2/2 | 0 |
| Mirissa | nl | 8/8 | 5/5 | 0 |
| Weligama | it, es, pl, ru | 3/3 | 1/2 | 0 |
| Weligama | nl | 3/3 | 2/2 | 0 |
| Trincomalee | it, es, pl, ru | 3/3 | 1/2 | 0 |
| Trincomalee | nl | 3/3 | 2/2 | 0 |
| Train, honeymoon, family, airport | nl | full | full | 0 |
| Luxury | de | 5/5 | 4/4 | 0 |
| August | fr | 4/4 | 2/3 | 0 |
| August | it, es, pl, ru | 4/4 | 1/3 | 0 |

`localizeArticle` (`src/app/i18n/articles/types.ts` lines 67–91) still falls back field-by-field when an overlay value is missing. For these indexable locales the required fields and sections are present, so that fallback does not run for them.

`article.resolver.ts` lines 23–32 send an incomplete non-English article to the English URL with `RedirectCommand`. The prebuild audit reported **195** such variants. The prerender contains **195** files whose title is `Redirecting`. That matches.

**F-04. FAQ arrays are shorter than English. PARTIAL. Low.**

`hasCompleteArticleTranslation` checks that `faq` exists. It does not require the same number of questions. Colombo Italian, Polish, Russian, and Dutch publish one FAQ where English has three. The shorter array replaces the English array. It does not mix in English answers. The pages are still thinner than the English page.

**F-05. Known joined words. PASS, with one remaining join.**

These strings are absent from the content files that previously contained them: `promenadenot`, `Weligamabest`, `Weligamasurtout`, `Mirissynie`, `CMBnie`, `Mirissaa`, `Januaryions`, `столицаШри`, `Бейдругие`.

**F-06. `ШриЛанка` remains. FAIL. Low.**

`src/app/i18n/destinations/bentota.ts` line 279:

`h1: 'Бентота, ШриЛанка: пляжи западного побережья и река'`

That is one word where Russian needs a space or a hyphen (`Шри Ланка` or `Шри-Ланка`). Other Russian pages use those forms. This is a copy defect, not a missing route.

**F-07. Tours. PASS for the static overlay scan.**

`node scripts/audit-i18n-seo.mjs` reported: `OK: all indexable article/tour locales have authored content`. That scan checks tour title, description, inclusions, exclusions, day titles, and activity text. A rendered German tour confirms localization in HTML: `dist/Travelwebsite/browser/de/7-tage-sri-lanka-rundreise/index.html` title is `7 Tage Sri Lanka Rundreise | Kultur, Bergland & Safari`. Every tour itinerary was not opened in a browser.

## 8. Metadata coverage

**F-08. Source dictionaries. PASS.**

All **664** page-locale SEO objects have a non-empty title and description. None use the raw page id as the keywords string (`destColombo` and similar). The prebuild audit printed: `OK: all registered page locales have localized titles and descriptions`.

Indexable non-English titles and descriptions are not copies of the English strings. A substring search that flagged words such as `tours` and `about` was a false positive and is not counted as a defect.

**F-09. Rendered metadata. PASS for indexable pages.**

Of 664 prerendered files:

- **469** full documents have a non-empty `<title>` and meta description.
- **195** redirect shells have title `Redirecting` and no description. Those locales are not indexable.
- All **427** indexable URLs are among the 469. They therefore have rendered titles and descriptions.

Sample titles from the built HTML:

| URL | Title | Robots |
| --- | --- | --- |
| `/` | Sri Lanka Private Tours \| 7 8 10 Day Chauffeur Holidays | `index, follow` |
| `/de/` file `/de/index.html` | Sri Lanka Rundreise \| Privater Fahrer Guide 7 bis 10 Tage | `index, follow` |
| `/fr/` | Voyage Sri Lanka \| Circuits prives depuis la France | `index, follow` |
| `/it/` | Viaggio Sri Lanka \| Tour privati dall’Italia | `index, follow` |
| `/es/` | Viajar a Sri Lanka \| Circuitos privados desde Espana | `index, follow` |
| `/pl/kolombo-sri-lanka` | Kolombo Sri Lanka \| Lotnisko CMB, miasto i pierwsza noc | `index, follow` |
| `/ru/` | Туры на Шри Ланку из России \| Частный водитель и пакеты | `index, follow` |
| `/ru/kolombo-shri-lanka` | Коломбо Шри Ланка \| Аэропорт CMB и город | `index, follow` |
| `/nl/` | Sri Lanka rondreizen & vakantiepakketten \| Prive chauffeur | `index, follow` |

`destHiriketiya` non-English URLs are redirect shells, so their dictionary titles are not what a crawler receives. That matches `indexLocales: ['en']`. `destWeligama` Dutch is indexable and is inside the 469 full documents.

Meta keywords are emitted by `SeoService`. Google does not use the keywords meta tag for ranking. Coverage is reported because the implementation emits the tag, not because it is a ranking signal.

Many French, Spanish, Polish, and Dutch strings still omit accents (`prives`, `Espana`, `poczatkujacych`). That predates this audit and remains a quality limit.

## 9. Canonical, hreflang, and robots verification

**F-10. Indexable HTML head tags. PASS.**

Every non-redirect prerendered file (469) has:

- exactly one canonical
- canonical host `https://www.sundowntours.com`
- canonical path equal to the file’s route
- exactly one robots meta tag equal to `index, follow` or `noindex, follow` according to `isPageIndexable`

Colombo’s sitemap cluster (`public/sitemap.xml` lines 3245–3254) and the Polish/Russian HTML both emit:

`en-GB`, `de-DE`, `fr-FR`, `es-ES`, `pl-PL`, `it-IT`, `ru-RU`, `nl-NL`, `x-default`.

`x-default` points at the unprefixed English URL. Polish points at `/pl/kolombo-sri-lanka`. Russian points at `/ru/kolombo-shri-lanka`. The same nine links are on the English, German, French, Italian, Spanish, Dutch, and Russian home documents that were sampled.

The earlier Polish and Russian Colombo `noindex, follow` result is **not** present in this build.

**F-11. HTTP `X-Robots-Tag`. PASS. Informational.**

`src/server.ts` does not set `X-Robots-Tag`. Live headers for `/pl/kolombo-sri-lanka` also omit it. There is no header that contradicts the meta robots tag. This was checked on the sampled responses, not on all 664 URLs.

**F-12. Redirect shells are HTTP 200. FAIL. Medium.**

`/de/hiriketiya-sri-lanka` live response:

```
HTTP/1.1 200 OK
content-length: 285
content-type: text/html;charset=UTF-8
```

File `dist/Travelwebsite/browser/de/hiriketiya-sri-lanka/index.html`:

```html
<title>Redirecting</title>
<meta http-equiv="refresh" content="0; url=/hiriketiya-sri-lanka">
```

There is no robots tag and no HTTP 301. The same pattern accounts for all **195** redirect files. They are outside the sitemap. The language switcher reaches them only through JavaScript buttons (`layout-component.html` calls `changeLang`). Google may still treat a meta refresh of 0 as a redirect, but the response itself is a 200.

69 of the 195 are locales intentionally excluded from otherwise indexable pages (Hiriketiya’s seven non-English locales, whale and luxury outside English/German, market pages outside their pair, August Dutch). The other 126 are the seven non-English locales of the 18 `index: false` scaffolds.

## 10. Polish Colombo migration and redirect results

**F-13. Migration. PASS.**

| Check | Result |
| --- | --- |
| Registered slug | `pl: 'kolombo-sri-lanka'` at `site-data.mjs` line 571 |
| New file | `dist/.../pl/kolombo-sri-lanka/index.html` exists |
| Old file | `pl/colombo-sri-lanka/index.html` does not exist |
| Edge map | `/pl/colombo-sri-lanka` → `/pl/kolombo-sri-lanka` |
| Second hop | `resolveEdgeRedirect('/pl/kolombo-sri-lanka')` is `null` |
| Live status | `301 Moved Permanently` |
| Query | `Location: /pl/kolombo-sri-lanka?campaign=summer&ref=mail` |
| New URL | `200` |
| Sitemap | new URL present (line 3250). Old `/pl/colombo-sri-lanka` absent |
| Hreflang | uses the new URL |
| Russian side effect | `/ru/colombo-sri-lanka` → `/ru/kolombo-shri-lanka` with 301, because the same legacy key is applied per locale when the slug differs |
| German | `/de/colombo-sri-lanka` is not redirected, because that slug is still the live German slug |
| Fragment | Not sent to the server, so it cannot be preserved on the HTTP 301. The in-app language switcher can preserve a fragment. |

`vercel.json` has `"source": "/pl/colombo-sri-lanka", "destination": "/pl/kolombo-sri-lanka", "permanent": true`. Vercel’s `permanent: true` is a **308**, not a 301. That rule was not requested against production Vercel. Express, which was tested, uses 301 (`src/server.ts` lines 40–42).

**F-14. Edge test suite. PARTIAL. Low.**

Command: `node scripts/test-edge-redirects.mjs`

Output: `[edge-redirects] 44 cases OK; 177 dormant prefixes`

Exit code 0. The 44 cases are the hardcoded list in `scripts/test-edge-redirects.mjs` lines 15–66. That list does not contain `/pl/colombo-sri-lanka`. The passing test does not by itself prove the migration. The migration was proven by the redirect map and the live 301 above.

`src/app/i18n/site-data.spec.ts` lines 78–80 expect the map entry. That spec file was **not executed** (`ng test` was not run).

## 11. Language-switching verification

**F-15. Switcher. PARTIAL. Not browser-verified.**

`layout-component.ts` lines 68–75:

```ts
const target = this.i18n.path(this.i18n.pageId(), locale);
this.router.navigateByUrl(createLocaleSwitchTree(this.router, target));
```

`createLocaleSwitchTree` (`locale.service.ts` lines 11–16) copies `queryParams` and `fragment` from `router.url`. The target path comes from the stable page id, so the logical page is preserved when a slug exists in the target locale.

Incomplete translations then hit `article.resolver.ts`, which redirects to the English path and also copies `route.queryParams` and `route.fragment`.

Not verified:

- Clicking the switcher in a browser
- Browser Back and Forward
- Whether a tour card click resets locale
- The Jasmine spec `preserves query parameters and fragment when changing locales` (`site-data.spec.ts` lines 88–95), because the test runner was not started

Code inspection shows an explicit policy: every locale has a route; incomplete article locales redirect to English rather than rendering English body copy on the localized URL.

## 12. Sitemap and robots.txt verification

**F-16. Sitemap. PASS.**

| Measurement | Count |
| --- | --- |
| `<loc>` in `public/sitemap.xml` | 427 |
| Indexable registry URLs | 427 |
| Missing | 0 |
| Extra | 0 |
| Old Polish Colombo URL | absent |
| New Polish Colombo URL | present |
| `localhost`, staging host, or `pageId=` query | absent from `sitemap.xml` |

`public/robots.txt` line 45: `Sitemap: https://www.sundowntours.com/sitemap-index.xml`.

`public/sitemap-index.xml` references `https://www.sundowntours.com/sitemap.xml`.

Hreflang in the Colombo sitemap entries matches `buildAlternates('destColombo')`.

**F-17. Image sitemap titles. FAIL. Low.**

`scripts/generate-sitemap.mjs` lines 72–73 set `<image:title>` to `entry.page.id`. `public/sitemap-images.xml` therefore contains titles such as `guides`. These are internal ids in an image sitemap, not in the main URL sitemap. Google image search may show that string as a title. It is not a web-ranking keywords tag.

## 13. Geographic data and structured-data verification

**F-18. Rendered geo. PASS.**

`DESTINATION_PLACES` in `src/app/i18n/structured-data.service.ts` covers all 18 destination ids. Latitudes are between 5.9485 and 8.5874. Longitudes are between 79.7596 and 81.836. Those ranges sit in Sri Lanka.

All **469** full prerendered documents contain one parseable `<script id="ld-json-graph" type="application/ld+json">` block. JSON parse failures: **0**. Duplicate `TravelAgency` nodes: **0**.

Destination documents with a `TouristDestination` node: **102**. All 102 have:

- `address.addressLocality` equal to the place name
- `address.addressCountry` = `LK`
- `containedInPlace.name` = `Sri Lanka`
- numeric `geo.latitude` and `geo.longitude`

The 18 distinct place/coordinate pairs are identical across the locales that render that destination. The other destination-locale files are the 42 redirect shells (Hiriketiya’s seven non-English locales, plus seven locales each for the five unindexed scaffold destinations).

Coordinates were checked for range and for consistency with the source map. They were not surveyed against a cadastral dataset. Adding coordinates does not by itself produce local-pack rankings.

**F-19. Russia in `areaServed`. PASS. Informational.**

`Russia` appears in the JSON-LD of all 469 full pages because the shared `TravelAgency` node lists it (`structured-data.service.ts`, added next to Poland). The site already has an indexable Russian market page. This audit did not verify a legal operating presence in Russia beyond that site configuration.

## 14. Production build, prerender, SSR, and hydration results

**F-20. Build and prerender. PASS.**

Command (npm `prebuild` was not used, so sitemap generation was not rewritten during the build):

`npx ng build --configuration production`

Exit code **0**. Elapsed **85,558 ms**. Output: `D:\Website\Sun-Down-Tours\dist\Travelwebsite`.

Prerender configuration is `src/app/server.routes.ts` lines 8–16: `RenderMode.Prerender` on `**`, with `PrerenderFallback.Server` and `getPrerenderParams` returning `[]`. The legacy `discoverRoutes` block in `angular.json` (line 125) is a separate architect target and was not the command that ran. The application builder still prerendered every discovered route: **664** `index.html` files.

Warnings, not failures:

- Sass `@import` deprecation (159 repeats omitted)
- CSS budget warnings for `tour-details-component.css` (17.82 kB) and `tour-booking-card.css` (17.44 kB)

No SSR exception was printed during the build. Sampled full HTML contains the localized `<h1>` and `<title>` without requiring the browser to run application code. `<script id="ng-state">` is present on those full pages, which is Angular’s transfer state for hydration.

**F-21. Hydration in a browser. NOT VERIFIED.**

No browser was opened. No Karma run was completed. A hydration mismatch, locale flicker, or back-button failure would not show up in the static HTML.

**F-22. Unit tests. NOT VERIFIED.**

`src/app/i18n/site-data.spec.ts` exists and covers the eight locales, the Polish slug, allowlists, and query/fragment switching. `ng test` was not run, so those expectations are source only.

## 15. Comparison with the 2026-10-10 audit

| October 10 issue | Status now | Evidence |
| --- | --- | --- |
| Worktree narrowed `indexLocales` | Not present. Lists match HEAD and the required policy. | `git diff` of `site-data.mjs` does not touch the arrays. Measurement script compared every required list. |
| Silent English article fallback on the listed locales | Fixed for sections and required fields. FAQ counts still short on several locales. | AST text compare, 204 indexable article locales, focus table in section 7. |
| Missing Hiriketiya and Weligama Dutch metadata | Dictionary entries exist. Hiriketiya non-English URLs redirect and are not indexed. Weligama Dutch is in the 469 full documents. | SEO dictionary scan of 664 pairs. HTML scan of 469 full files. |
| Language switch drops query and fragment | Code now copies both. Not executed in a browser or via Karma. | `locale.service.ts` 11–16, `layout-component.ts` 74–75. |
| Polish Colombo should be `kolombo` with a permanent redirect | Fixed on the built Express server. | Live 301 and 200. |
| Colombo Polish and Russian `noindex` and a short hreflang cluster | Fixed in generated HTML. | Polish and Russian Colombo HTML: `index, follow` and nine alternates. |

## 16. Remaining defects and risks

| ID | Severity | Status | What remains |
| --- | --- | --- | --- |
| F-12 | Medium | FAIL | 195 locale URLs answer HTTP 200 with a meta refresh and no robots tag. |
| F-06 | Low | FAIL | Russian Bentota H1 contains `ШриЛанка`. |
| F-17 | Low | FAIL | Image sitemap `<image:title>` is the internal page id. |
| F-04 | Low | PARTIAL | Several indexable locales publish fewer FAQs than English. |
| F-14 | Low | PARTIAL | The 44-case redirect test does not include the new Polish URL. |
| F-15 | Low | PARTIAL | Switcher behavior is code-reviewed only. |
| F-21 | — | NOT VERIFIED | Browser hydration. |
| F-22 | — | NOT VERIFIED | `ng test` / `site-data.spec.ts`. |

No critical or high-severity defect was found. Accent-light copy in French, Spanish, Polish, and Dutch remains a ranking-quality risk and is not a routing failure.

## 17. Recommended next actions

1. Serve the 195 incomplete locale URLs as HTTP 301 (or 308) to the English URL, or add `noindex` on the redirect shell. Do not leave a 200 titled `Redirecting`.
2. Add these assertions to `scripts/test-edge-redirects.mjs` (not applied in this audit):

```js
['/pl/colombo-sri-lanka', '/pl/kolombo-sri-lanka'],
['/ru/colombo-sri-lanka', '/ru/kolombo-shri-lanka'],
['/de/colombo-sri-lanka', null],
```

3. Run `npx ng test --no-watch --browsers=ChromeHeadless` so `site-data.spec.ts` actually executes.
4. Open `/`, `/pl/kolombo-sri-lanka`, `/it/colombo-sri-lanka`, and `/ru/kolombo-shri-lanka` in a browser, switch language with a query string and a hash, then use Back.
5. Split `ШриЛанка` in `bentota.ts` line 279. Optionally require FAQ length to match English before a locale is indexable.
6. Stop writing `page.id` into image sitemap titles.
7. Do not treat meta keywords or coordinates as sufficient for a first Google position. That outcome was not measured.

The current `scripts/audit-i18n-seo.mjs` already fails the process on bad slugs, allowlist drift, missing loaders, incomplete indexable articles, and page-id keywords. It does not read `dist/` HTML and does not assert the Polish Colombo redirect. A non-destructive follow-up, only when `dist/Travelwebsite/browser` exists, should fail if an indexable `index.html` lacks one canonical, the expected robots token, or a parseable `ld-json-graph` script. It must not rewrite content.

## 18. Commands executed and actual results

| Command | Result |
| --- | --- |
| `git status --short` | 41 modified, 2 untracked |
| `git diff --stat` | 41 files, +2186 / −1121 |
| `git diff --check` | exit 0, CRLF warnings only |
| `git log -1` | `66042dc` on 2026-10-03 |
| `node scripts/audit-i18n-seo.mjs` | exit 0. 83 pages, 664 routes, 204-style article/tour OK message, metadata OK, 195 non-indexable article fallbacks, 18 scaffold ids |
| `node scripts/test-edge-redirects.mjs` | exit 0. `44 cases OK; 177 dormant prefixes` |
| Out-of-repo registry/content/sitemap script | 664 routes accounted for, 427 sitemap URLs match, article focus table as in section 7 |
| `npx ng build --configuration production` | exit 0 in 85,558 ms. Sass and CSS budget warnings. |
| Prerender count | 664 `index.html` files |
| HTML head scan | 469 full documents with matching canonical and robots; 195 redirect shells |
| JSON-LD scan | 469/469 full documents parse; 102/102 destination documents have Sri Lanka geo; 0 duplicate agencies |
| `curl.exe -sI` on port 4321 | Polish old URL 301 with query preserved; new URL 200; Russian legacy 301; Hiriketiya German 200 (285 bytes); `/nl/` 301 to `/nl` |

## 19. Audit limitations

- The October 10 dirty diff was not available as a commit. “The allowlists were narrowed that day” cannot be re-proven. They are not narrowed now, and they were not narrowed at HEAD.
- `ng test` was not run. Browser hydration, Back/Forward, and a real language-switch click were not run.
- Vercel’s deployed 308 was not requested. Only local Express and `vercel.json` were checked.
- Tour activity text was checked by the static AST audit, plus one rendered German tour title, not by reading every itinerary in the browser.
- Coordinates were checked for consistency and a Sri Lanka bounding box, not by a land survey.
- Meta keywords and geo markup were not treated as proof of Google rank. No Search Console data was queried.
- `npm run build` was avoided so `prebuild` would not rewrite sitemap files during the audit. `npx ng build` was used instead. The sitemap already on disk matched the 427 indexable URLs.

## Summary counts

These 22 rows are the audit findings F-01 through F-22. Route coverage is stated separately: 664 of 664 page-locale combinations resolved, and 427 of 427 indexable URLs had the expected canonical, hreflang, and robots tags in the built HTML.

| Bucket | Count |
| --- | ---: |
| Total checks | 22 |
| Passed | 14 |
| Failed | 3 |
| Partial | 3 |
| Not verified | 2 |
| Remaining critical | 0 |
| Remaining high | 0 |

Passed: F-01, F-02, F-03, F-05, F-07, F-08, F-09, F-10, F-11, F-13, F-16, F-18, F-19, F-20.

Failed: F-06 (Low), F-12 (Medium), F-17 (Low).

Partial: F-04, F-14, F-15.

Not verified: F-21, F-22.
