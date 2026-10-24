# Multilingual SEO Final Completion Report

## Verdict

**NOT COMPLETED**

The worktree now has the route, sitemap, redirect, and metadata design, a green Jasmine suite, and corrected Russian copy in both the translation sources and the production HTML. The local production build is ready to be committed and deployed. It is still not fully completed. Nothing in this worktree has been committed or deployed, so the live site is still the 2026-10-03 build, and Google indexing was not verified.

The first audit did not change application code. A later pass fixed the Jasmine setup and the Russian text defects recorded in section 12. Other languages, page IDs, routes, and indexing allowlists were left as they were.

## 1. Environment

| Item | Value |
| --- | --- |
| Date | 2026-10-24 |
| Machine | Windows 10 (win32 10.0.26200), PowerShell |
| Node | v24.15.0 |
| Repository | `D:/Website/Sun-Down-Tours` |
| Branch | `main` |
| HEAD | `66042dc9a43b1919a1a5127432e588ea5ce5911d` (2026-10-03) |
| Worktree | Dirty. 106 tracked files changed (`+5890/−3062`) and 12 untracked paths. Nothing is staged. Nothing was committed, pushed, or deployed. |
| Local build | `npx ng build --configuration production`, exit 0, 49.5 s, output `dist/Travelwebsite` |
| Shell removal | `node scripts/strip-incomplete-redirect-shells.mjs` removed 195 prerender shells |
| Local server | `http://127.0.0.1:4322`, then stopped |
| Live host checked | `https://www.sundowntours.com` at about 06:04 UTC |

`npm run build` was not used. That command’s `prebuild` rewrites sitemap files, `vercel.json`, and the generated redirect module. The copies already on disk were measured instead, and the audit scripts that do not write those files were run separately.

## 2. Task status

| Task | Status | Result |
| --- | --- | --- |
| 664 page-locale routes | PASS | 83 pages × 8 locales. 0 path collisions. Prerender wrote 664 `index.html` files before shell removal, and all 664 mapped back to the registry. |
| Indexing allowlists | PASS | Required lists match, including eight-locale Colombo, Negombo, Bentota, Weligama, and Trincomalee. Hiriketiya stays English-only. August excludes Dutch. Mirissa, train, honeymoon, family, and airport transfers are not narrowed. |
| Indexable article and tour completeness | PASS | Audit exit 0. 195 incomplete article locales, all non-indexable. FAQ length gaps versus English: 0. |
| SEO titles and descriptions for 664 locales | PASS | Audit: every registered page-locale has a localized title and description. No keyword string is a raw page id. |
| Canonical, hreflang, and robots on indexable HTML | PASS | After the local build, all 427 indexable documents have one `https://www.sundowntours.com` self-canonical, `index, follow`, and the expected hreflang count. JSON-LD parse failures: 0. |
| Sitemap and `robots.txt` in the worktree | PASS | `public/sitemap.xml` has 427 `<loc>` entries. Missing 0, extra 0, duplicates 0, redirecting URLs 0. Hreflang reciprocity issues: 0. `robots.txt` points at `sitemap-index.xml`. Image titles are localized titles, not page ids (118 titles, 0 page ids). |
| 195 incomplete-locale redirects | PASS | Source, `vercel.json`, and the local server agree. Each is HTTP 301 to the same English page. No second hop and no loop. Live site does not do this. See deployment. |
| Polish Colombo migration | PASS | Registered slug `kolombo-sri-lanka`. Local 301 from `/pl/colombo-sri-lanka?campaign=summer&ref=mail` keeps the query. New URL is HTTP 200, `index, follow`, nine hreflang links. Old URL is absent from the worktree sitemap. Live site does not do this. |
| Dutch translations | PASS | Audit: authored Dutch article and tour copy is not a copy of the German or English text. Routes are present. Orthography is still incomplete: 118 unaccented `prive` against 274 `privé`, and 16 Dutch strings with lowercase `sri lanka` in Colombo and the Netherlands guide. |
| Language switch, query, fragment, Back, and tour link | PASS | Browser session on the local build. Details below. |
| Jasmine tests | PASS | Latest run: 39 executed, 39 passed, 0 failed. Exit code 0. |
| Production build and prerender | PASS | Exit 0. 664 files, then 469 after the 195 shells were removed. Sass and CSS budget warnings only. |
| Browser rendering of representative routes | PASS | Local Chrome session rendered German Colombo, Polish Colombo, the German 7-day tour, and English Hiriketiya. |
| Russian copy quality | PASS | Joined words, dropped letters, and accidental English fragments were corrected in the Russian sources. The rebuilt HTML and the Russian UI bundle contain the corrections. Known defect strings: 0. |
| Production deployment of this worktree | FAIL | HEAD is 2026-10-03 and the worktree is uncommitted. Live responses contradict this worktree. |
| Live-site match to the current SEO design | FAIL | Measured on `www.sundowntours.com`. Not assumed from the local build. |
| Google Search Console indexing | BLOCKED | A public DNS TXT record named `google-site-verification` exists on `sundowntours.com`. Search Console was not opened. Coverage, indexing, and sitemap processing were not read. |

Counts for this table: 17 tasks, 14 PASS, 2 FAIL, 1 BLOCKED. The two failures are deployment and the live site. Search Console remains blocked.

## 3. Route, redirect, and metadata evidence

Locales are `en`, `de`, `fr`, `it`, `es`, `pl`, `ru`, and `nl`.

| Measurement | Count |
| --- | ---: |
| Pages | 83 |
| Localized routes | 664 |
| Route defects | 0 |
| Indexable URLs | 427 |
| Incomplete article redirects | 195 |
| Of those, scaffold locales | 126 |
| Of those, incomplete but intentionally non-indexable | 69 |
| Incomplete locales that are still indexable | 0 |
| Edge redirect map entries | 439 |
| `vercel.json` redirects | 448 |
| Explicit `statusCode: 301` rules | 195 |
| `permanent: true` rules | 248 |
| Incomplete redirects missing from `vercel.json` | 0 |
| Sitemap `<loc>` | 427 |
| Sitemap hreflang reciprocity issues | 0 |
| Image sitemap titles | 118 |
| Image titles equal to an internal page id | 0 |

The 195 redirects cover Hiriketiya’s seven non-English locales, whale and luxury outside English/German, each market page outside its allowed pair, August’s Dutch URL, and the seven non-English locales of the 18 noindex scaffolds.

`node scripts/audit-i18n-seo.mjs` exited 0:

- 83 page IDs, 664 localized routes, unique slugs, loaders, and the original `indexLocales` policy
- all indexable article and tour locales have authored content
- 195 non-indexable article locales use explicit English redirects
- all registered page locales have localized titles and descriptions
- authored Dutch article and tour copy is not a German or English copy

`node scripts/test-edge-redirects.mjs` exited 0: `50 cases OK; 177 dormant prefixes`. The 50 cases include `/pl/colombo-sri-lanka` → `/pl/kolombo-sri-lanka`, `/ru/colombo-sri-lanka` → `/ru/kolombo-shri-lanka`, `/de/colombo-sri-lanka` with no redirect, and both Hiriketiya examples.

`node scripts/audit-sitemaps.mjs` exited 0. Expected URLs 427, main sitemap 427, noindex URLs leaked into the sitemap: 0.

Polish Colombo alternates in source and in the local Polish document:

- `pl-PL` → `https://www.sundowntours.com/pl/kolombo-sri-lanka`
- `ru-RU` → `https://www.sundowntours.com/ru/kolombo-shri-lanka`
- `x-default` → the unprefixed English URL
- nine links total (`en-GB`, `de-DE`, `fr-FR`, `es-ES`, `pl-PL`, `it-IT`, `ru-RU`, `nl-NL`, `x-default`)

Noindex pages correctly emit no hreflang cluster. The 42 full non-indexable documents checked in the build use `noindex, follow`.

On Vercel config, the Polish and Russian legacy Colombo rules are `permanent: true` (Vercel’s 308). The 195 incomplete-locale rules are explicit `statusCode: 301`. The local Express server uses 301 for both. That difference was measured in config and on the local server. It was not measured on production, because production is not serving these rules.

## 4. Local production build

`npx ng build --configuration production` exited 0 in 49,507 ms.

Warnings only:

- Sass `@import` deprecation, with 159 repeats omitted
- `tour-details-component.css` 17.82 kB against a 14 kB budget
- `tour-booking-card.css` 17.44 kB against a 14 kB budget

Before shell removal, the browser output had 664 `index.html` files: 469 full documents and 195 `<title>Redirecting</title>` meta-refresh shells. A shell has no robots tag. Example before removal, `de/hiriketiya-sri-lanka/index.html`, refreshed to `/hiriketiya-sri-lanka`.

The package build then deletes those shells so a static host cannot return HTTP 200 for them. After `strip-incomplete-redirect-shells.mjs`:

| Check | Result |
| --- | --- |
| `index.html` files | 469 |
| Redirect shells left | 0 |
| Indexable URLs missing a document | 0 |
| Indexable documents with a bad canonical, robots tag, or hreflang count | 0 |
| `pl/kolombo-sri-lanka/index.html` | present |
| `pl/colombo-sri-lanka/index.html` | absent |

Local Express on port 4322, first response only:

| URL | Status | Location / head |
| --- | --- | --- |
| `/pl/colombo-sri-lanka?campaign=summer&ref=mail` | 301 | `/pl/kolombo-sri-lanka?campaign=summer&ref=mail` |
| `/pl/kolombo-sri-lanka` | 200 | title `Kolombo Sri Lanka \| Lotnisko CMB, miasto i pierwsza noc`; robots `index, follow`; canonical the new Polish URL; 9 hreflang links |
| `/ru/colombo-sri-lanka` | 301 | `/ru/kolombo-shri-lanka` |
| `/ru/kolombo-shri-lanka` | 200 | `index, follow`; canonical the Russian URL |
| `/de/colombo-sri-lanka` | 200 | German title and H1; no redirect |
| `/it/colombo-sri-lanka` | 200 | Italian title and H1 |
| `/de/hiriketiya-sri-lanka` | 301 | `/hiriketiya-sri-lanka` |
| `/nl/` | 301 | `/nl` |
| `/` | 200 | English home; 9 hreflang links |
| `/this-page-does-not-exist-seo-check` | 404 | `noindex, follow` |

No sampled local response set `X-Robots-Tag`.

## 5. Browser session

Chrome, local server, page `http://127.0.0.1:4322/de/colombo-sri-lanka?campaign=summer&ref=mail#airport`.

The rendered page was German, including the H1 and three FAQ questions. Clicking Polski navigated client-side to:

`http://127.0.0.1:4322/pl/kolombo-sri-lanka?campaign=summer&ref=mail#airport`

The Polish document had `lang="pl-PL"`, the Polish H1, `index, follow`, the new canonical, and nine hreflang links. `history.back()` returned to the German URL with the same query and `#airport`. Clicking the related “7 Tage Rundreise” link landed on `/de/7-tage-sri-lanka-rundreise` with the German tour H1, so the locale stayed German.

Opening `http://127.0.0.1:4322/nl/hiriketiya-sri-lanka` in the browser ended on `http://127.0.0.1:4322/hiriketiya-sri-lanka` with the English Hiriketiya title. That matches the HTTP 301.

The language click ran in the hydrated page. The hash survived the client navigation, which an HTTP redirect cannot do. This was one desktop session. A mobile language menu, a tour booking form, and a full console hydration-error audit were not run.

## 6. Jasmine

Command: `npx ng test --no-watch --browsers=ChromeHeadless`

Chrome Headless 155.0.0.0 on Karma port 9876. `PORT` was unset so Karma did not bind the old SSR port. Exit code 0. Wall time about 21 s.

`TOTAL: 39 SUCCESS` (39 executed, 0 failed).

An earlier run the same day was `TOTAL: 17 FAILED, 22 SUCCESS`. Those 17 were `should create` specs that rendered a tour or contact form before `preloadDetail()` and `provideToastr()` were available. The spec setup was aligned with the app: tour specs preload the page detail and provide Toastr; about and contact specs provide Toastr; package and tour-detail specs set the required inputs. No SEO, route, or translation file was changed for that fix.

The passing rerun still logs price-file 404s and `NG0205` after the test injector is destroyed. Those messages did not fail any assertion.

## 7. Remaining defects

### Joined Russian words on indexable pages

Corrected in source and checked in the production output. See section 12. `ШриЛанка` stays split. The Bentota H1 remains `Бентота, Шри Ланка: пляжи западного побережья и река`.

### Orthography

Dutch copy is real Dutch, and the audit did not flag it as German or English. `content/nl.ts` still uses unaccented `prive` many times. Dutch Colombo uses lowercase `sri lanka` in the H1 and in a section title. French, Spanish, and Polish titles still drop some accents. That is a quality limit, not a missing route.

### Tests

The Jasmine suite is green: 39 passed, 0 failed. See section 6.

### Prerender shells before the strip step

`ng build` alone still writes 195 HTTP-200 meta-refresh shells with no robots tag. `npm run build` removes them afterwards. A deploy that publishes the browser folder without that step would bring the old defect back. The local check did run the strip step.

## 8. Production deployment and live site

This worktree is not deployed. HEAD is the 2026-10-03 commit. The multilingual fixes are uncommitted. Nothing was pushed or deployed for this report.

Live responses from `https://www.sundowntours.com` on 2026-10-24:

| URL | Live result | Current worktree |
| --- | --- | --- |
| `/pl/colombo-sri-lanka` | HTTP 200, about 72 KB, `index, follow`, canonical is the old `/pl/colombo-sri-lanka`. Last-Modified 2026-10-24 02:46 UTC. | Should be 301 to `/pl/kolombo-sri-lanka`. |
| `/pl/kolombo-sri-lanka` | HTTP 500, body `A server error has occurred` / `FUNCTION_INVOCATION_FAILED`. | Should be 200. |
| `/ru/colombo-sri-lanka` | HTTP 500, same function error. | Should be 301 to `/ru/kolombo-shri-lanka`. |
| `/ru/kolombo-shri-lanka` | HTTP 200, `index, follow`, but its Polish hreflang still points at `/pl/colombo-sri-lanka`. Last-Modified 2026-10-16. | Polish alternate should be `/pl/kolombo-sri-lanka`. |
| `/de/hiriketiya-sri-lanka` | HTTP 200, about 75 KB, English title, `noindex, follow`, self-canonical. Last-Modified 2026-10-21. | Should be 301 to `/hiriketiya-sri-lanka`. |
| `/nl/` | HTTP 308 to `/nl`. | Same idea locally, as 301. |
| `/` | HTTP 200, nine hreflang links, `index, follow`. Last-Modified 2026-10-18. No `google-site-verification` meta tag. | Home metadata matches the current English home title. |
| Unknown path | HTTP 500 `FUNCTION_INVOCATION_FAILED`. | Local server returns 404 with `noindex, follow`. |
| `/sitemap.xml` | HTTP 200, 427 `<loc>` entries, contains `/pl/colombo-sri-lanka`, does not contain `/pl/kolombo-sri-lanka`, does not contain `2026-10-24`. Last-Modified 2026-10-17. | Worktree sitemap has the new Polish URL and no old one. |
| `/robots.txt` | HTTP 200 and references `sitemap-index.xml`. Last-Modified 2026-10-16. | Same sitemap directive. |

The live Polish Colombo page is indexable at the old URL. The new Polish URL errors. The live sitemap still advertises the old URL. That is the opposite of the migration in this worktree.

## 9. Google Search Console

DNS for `sundowntours.com` publishes a TXT record whose value begins with `google-site-verification=`. `www` is a CNAME to Vercel, not a second TXT. The live homepage and `robots.txt` do not contain an HTML verification meta tag.

That DNS record is evidence that a verification token was published. It is not evidence that a Search Console property is currently verified, that the sitemap was submitted, or that any URL is indexed. Search Console was not opened, and no indexing or coverage data was available. Indexing status is **BLOCKED**.

## 10. Commands and exit codes

| Command | Exit | Result |
| --- | --- | --- |
| `node scripts/audit-i18n-seo.mjs` | 0 | 664 routes, 195 redirects, metadata and Dutch checks passed |
| `node scripts/test-edge-redirects.mjs` | 0 | 50 cases, 177 dormant prefixes |
| `node scripts/audit-sitemaps.mjs` | 0 | 427 URLs, reciprocity ok |
| `npx ng test --no-watch --browsers=ChromeHeadless` | 0 | Deployment re-check: `TOTAL: 39 SUCCESS`. Earlier the same day: 17 failed, 22 passed, before the spec setup fix |
| `npx ng build --configuration production` | 0 | Latest rebuild after the Russian edits: exit 0, about 45 s, bundle generation 29.7 s, warnings only |
| `node scripts/strip-incomplete-redirect-shells.mjs` | 0 | 195 shells removed. 469 `index.html` files left, 0 `Redirecting` shells |
| `node scripts/audit-i18n-seo.mjs` (after the Russian edits) | 0 | Same 664 routes, 195 redirects, metadata and Dutch checks |
| Live `curl` / `fetch` of `www.sundowntours.com` | 0 | Production does not match this worktree |
| Local fetch of `127.0.0.1:4322` | 0 | 301s and 200s listed in section 4 |
| Browser session on port 4322 | — | Language switch, Back, German tour link, Hiriketiya redirect |

Independent counters, not the audit script alone: 664 routes, 427 indexable URLs, 195 incomplete redirects, 0 FAQ length gaps, 0 sitemap mismatches, 0 redirect loops.

## 11. Limits

Every one of the 664 built files was classified, and every indexable file’s canonical, robots tag, and hreflang count was compared with the registry. The Russian pass fixed the joined words, dropped letters, and English fragments it found. It was not a native-speaker rewrite of every sentence that was already readable. Coordinates and legal presence in `areaServed` were not re-surveyed. Search Console performance and index coverage were not available. Vercel was not given this worktree, so the live 308-versus-301 behaviour of the new rules was not observed.

## 12. Russian text corrections

Only Russian strings were edited. Page IDs, slugs, routes, and `indexLocales` were not changed. A first global replace of `80 to 150 USD` and `door to door` also touched German, Italian, Spanish, Polish, and English lines in `budget.ts`; those non-Russian lines were put back.

### Defects found

The same break showed up across guides, destinations, tours, restaurant copy, and the booking dictionary: a sentence boundary disappeared, and often the first letter of the next word went with it. Other defects were Latin letters glued into Cyrillic words, English leftovers inside Russian sentences, and a few spelling errors (`по прежнему`, `по настоящему`, `когда то`, `кто то`).

| Source | Defect | Correction |
| --- | --- | --- |
| `guides/budget.ts` | `форматаастный`, `деньранспорт` | `формата. Частный`, `в день. Транспорт` |
| `guides/budget.ts` | `плантацияхругой`, `западеамый` | `плантациях — другой`, `западе — самый` |
| `guides/packing.ts` | `островеодану`, `годй`, `зонями`, `сцеплениеметаллические` | `острове. Одному`, `год. Лёгкий`, `зон`, `сцеплением. Металлические` |
| `guides/packing.ts` | `сафari`, `Полonnaruwa`, `Дengue`, `Сlip`, `Vроверьте` | `сафари`, `Полоннарува`, `Лихорадка денге`, `сандалии без застёжки`, `В. Проверьте` |
| `guides/trainJourneys.ts` | `Эллойодна`, `воспоминанияособенно`, `Эллесамый`, `месяцевропейские` | spaces or sentence breaks restored |
| `guides/honeymoon.ts` | `честнымиромантическая`, `Эллевстраиваем`, `Дачасто`, `CMBстандарт` | sentence breaks restored; `pickup` translated |
| `guides/airportTransfers.ts` | `пассажировподтвердим`, `Хамбантотывторой`, `Дазаранее`, `хотитедорога` | sentence breaks restored |
| `guides/beaches.ts` | `Уppuveli`, `снorkelers`, `Кandy`, `Мattala`, `Тangalle`, `пляжидобные`, `Бейёрф` | Russian place names and `пляжи. Удобные`, `сёрф-столица` |
| `guides/food.ts` | `лобстерамиасто`, `крабаастый`, `санitizer`, `дal` | `лобстерами. Часто`, `краба — частый`, `антисептик`, `дал` |
| `guides/visa.ts` | `ETAвключая`, `странразрешает` | comma restored |
| `guides/teaCountry.ts` | `photogenicнее`, `industrial`, `journey`, `punctuality`, `grip`, `stop`, `highlight` | Russian wording in the running text; place names kept |
| `guides/wildlife.ts` | `Синharaja`, `drive`, `со леопардами` | `Синхараджа`, `выезд`, `с леопардами` |
| `guides/safety.ts` | `Удавalawe`, `сафari` | `Удавалаве`, `сафари` |
| `guides/privateDriver.ts` | `путио`, `гибкостьдно`, `остановкиь`, `self drive` | `пути. То`, `гибкость — одно`, `остановки. Будь то`, Russian heading |
| `destinations/kandy.ts` | `Ланкиод`, `завоеваниямьше`, `паломниковостаточная`, `костюмедна` | `Ланки: от`, `завоеваниям дольше`, `паломников — достаточная`, `костюме — одна` |
| `destinations/mirissa.ts` | `Галлерешать`, `трансферомединственный`, `Мириссаглавный`, `мартсамый` | sentence breaks restored |
| `destinations/galle.ts` | `экспонатколо` | `экспонат: около` |
| `destinations/negombo.ts` | `Негомбопрактичная`, `терминалаближе` | dash and comma restored |
| `destinations/yala.ts` | `Ялато`, `годутатус`, `резервуарыоторые` | `Яла — это не только`, `году — статус`, `резервуары, которые` |
| `destinations/sigiriya.ts` | lead ran two sentences together | `века. Сигирия — самая` |
| `content/ru.ts` | `ограниченызакрепите`, `бронированийзарезервируйте`, `заполняетсязавершите`, `Ланкеэто`, `Ялаеопарды` | sentence breaks restored |
| `restaurants/page-content.ts` | `Restaurantсвежие` | `Restaurant: свежие` |
| `home-seo.content.ts` | `автомобилемне self drive`, `Heritanceотельные` | Russian wording and a dash |

English `to` between numbers inside Russian sentences (`80 to 150`, `20 to 40`, `8:00 to 22:00`) was changed to an en dash. Route names such as `Kandy to Ella` were left as names. Dish names such as `rice and curry` were left.

### Files changed

`src/app/i18n/content/ru.ts`, `src/app/i18n/restaurants/page-content.ts`, `src/app/mainComponents/home-page-component/sections/home-seo-section/home-seo.content.ts`

Guides: `airportTransfers.ts`, `beaches.ts`, `budget.ts`, `familyTours.ts`, `food.ts`, `honeymoon.ts`, `monthAugust.ts`, `packing.ts`, `privateDriver.ts`, `russiaFromRu.ts`, `safety.ts`, `teaCountry.ts`, `trainJourneys.ts`, `visa.ts`, `wildlife.ts`

Destinations: `dambulla.ts`, `ella.ts`, `galle.ts`, `kandy.ts`, `mirissa.ts`, `negombo.ts`, `sigiriya.ts`, `trincomalee.ts`, `yala.ts`

Tours: `cards.ts`, `ellaDay.ts`, `galleDay.ts`, `kandyDay.ts`, `sigiriyaDay.ts`, `tour5.ts`, `tour6.ts`, `tour7.ts`, `tour10.ts`

`dambulla.ts`, `cards.ts`, and several tour files changed only where a Russian sentence used English `to` between numbers.

### Production check

`npx ng build --configuration production` exited 0. `node scripts/strip-incomplete-redirect-shells.mjs` removed 195 shells and left 469 HTML files, with 0 redirect shells. `node scripts/audit-i18n-seo.mjs` exited 0.

All 55 Russian `index.html` files under `dist/Travelwebsite/browser/ru` were scanned. Known joined tokens, including `форматаастный` and `деньранспорт`, were absent. The budget page `ru/putevoditel/byudzhet-puteshestviya-shri-lanka/index.html` contains `формата. Частный`, `в день. Транспорт`, `80–150 USD`, and `40–50 USD`.

The same built tree contains the corrected packing, train, honeymoon, airport, Kandy, Mirissa, and Yala phrases. The booking line is not in the static tour HTML because it renders only after a date is chosen. In `browser/chunk-W6TFLNY6.js` the Russian dictionary decodes to `Частные туры ограничены. Закрепите удобную дату сейчас.` The old `ограниченызакрепите` is not in that bundle.

Jasmine after these edits: `TOTAL: 39 SUCCESS`, exit 0.

This does not deploy the site. Live pages and Search Console are unchanged from sections 8 and 9.

## 13. Deployment readiness (2026-10-24)

The local build is ready to ship. It has not been shipped. HEAD `66042dc9a43b1919a1a5127432e588ea5ce5911d` (message `..`, 2026-10-03) is the commit currently on `main` and on the live site. Deploying that commit would publish the old Polish URL and the old sitemap. The deployable revision does not exist yet. It is a future commit of this worktree, after explicit approval.

### Checks run for this step

| Check | Result |
| --- | --- |
| `node scripts/audit-i18n-seo.mjs` | Exit 0. 83 pages, 664 routes, 195 incomplete redirects, Dutch copy is not a German or English copy |
| `node scripts/test-edge-redirects.mjs` | Exit 0. 50 cases, 177 dormant prefixes |
| `npx ng test --no-watch --browsers=ChromeHeadless` | Exit 0. `TOTAL: 39 SUCCESS` |
| Production build already on disk | `dist/Travelwebsite/browser/pl/kolombo-sri-lanka/index.html` exists. `pl/colombo-sri-lanka/index.html` and `de/hiriketiya-sri-lanka/index.html` do not. English Hiriketiya HTML exists |
| `vercel.json` | 448 redirects. 195 use `statusCode: 301`. 248 use `permanent: true`. 5 use `statusCode: 308`. Output directory `dist/Travelwebsite/browser`. No `buildCommand` (Vercel uses `vercel-build`) |
| Sitemap and robots | 427 `<loc>` entries. `https://www.sundowntours.com/pl/kolombo-sri-lanka` is present. The old `/pl/colombo-sri-lanka` loc is absent. No sitemap loc is itself a redirect. `robots.txt` points at `sitemap-index.xml` |
| Local server `http://127.0.0.1:4323` | See the rows below. The process was stopped after the check |

The four repeated `source` values in `vercel.json` are pairs: an apex-host 308 and a separate www rule. They are not two competing destinations for the same host.

Built Polish Colombo HTML: canonical `https://www.sundowntours.com/pl/kolombo-sri-lanka`, robots `index, follow`, 9 hreflang links, and the old slug does not appear in that file.

### Redirect behaviour that was measured locally

| Request | Local result |
| --- | --- |
| `/pl/colombo-sri-lanka?campaign=summer&ref=mail` | HTTP 301, `Location: /pl/kolombo-sri-lanka?campaign=summer&ref=mail` |
| `/pl/kolombo-sri-lanka` and the same URL with that query | HTTP 200. No second redirect |
| `/de/hiriketiya-sri-lanka?x=1` | HTTP 301, `Location: /hiriketiya-sri-lanka?x=1` |
| `/nl/hiriketiya-sri-lanka?utm=nl` | HTTP 301, `Location: /hiriketiya-sri-lanka?utm=nl` |
| `/hiriketiya-sri-lanka?x=1` | HTTP 200. No second hop |

All 195 incomplete-locale redirects are in the edge map and in `vercel.json` as explicit 301s. None of their English targets redirect again.

On Vercel, `/pl/colombo-sri-lanka` is `permanent: true`, which Vercel serves as 308, not 301. The 195 incomplete-locale rules are explicit `statusCode: 301`. Express on the local server uses 301 for both. Query strings were preserved on the local 301s. Vercel keeps the query string on redirects by default. That live 308, and a live 200 for `/pl/kolombo-sri-lanka`, have not been observed. The previous live check still stands: the old Polish URL returned 200 and the new URL returned 500.

### Dutch, before calling the site fully localized

Indexable Dutch pages have authored Dutch text. The SEO audit does not treat them as German or English copies. Shared UI, tours, guides, and destinations have Dutch blocks, and incomplete Dutch URLs redirect to English.

What is still unfinished is spelling, not missing routes:

- Dutch strings contain 118 unaccented `prive` and 274 `privé`. The unaccented form is concentrated in `src/app/i18n/content/nl.ts`.
- Sixteen Dutch strings use lowercase `sri lanka`. They are in `src/app/i18n/destinations/colombo.ts` (including the H1 `Colombo sri lanka: luchthaven CMB, stad en eerste nacht`) and `src/app/i18n/guides/netherlandsFromNl.ts`.

Those are not deploy blockers for the redirect and sitemap release. They are a reason not to call the Dutch copy finished.

### What to commit, and what to leave out

There is no commit hash for this work. After approval, one commit should contain the 106 modified files and these untracked files:

- `MULTILINGUAL_AUDIT.md`
- `MULTILINGUAL_SEO_FINAL_COMPLETION_REPORT.md`
- `MULTILINGUAL_SEO_POST_FIX_AUDIT.md`
- `scripts/apply-faq-supplements.mjs`
- `scripts/article-locale-scan.mjs`
- `scripts/faq-supplements.json`
- `scripts/generate-incomplete-redirects.mjs`
- `scripts/strip-incomplete-redirect-shells.mjs`
- `src/app/i18n/incomplete-locale-redirects.mjs`
- `src/app/i18n/site-data.spec.ts`

Leave these out. They are local scratch scripts:

- `scripts/_tmp-nl-lang.mjs`
- `scripts/_tmp-patch-specs.mjs`

`dist/` is build output and is not part of the commit. Vercel rebuilds it with `vercel-build`, which runs `prebuild` and then strips the 195 redirect shells.

### Checklist before and after a deploy

1. Approve the commit above. Do not deploy `66042dc`.
2. Approve the push and the Vercel production deploy as a separate step.
3. After deploy, request `/pl/colombo-sri-lanka?campaign=summer&ref=mail` and expect a permanent redirect to `/pl/kolombo-sri-lanka` with the query intact. On Vercel that status is 308.
4. Request `/pl/kolombo-sri-lanka` and expect HTTP 200, canonical `https://www.sundowntours.com/pl/kolombo-sri-lanka`, and `index, follow`.
5. Request `/de/hiriketiya-sri-lanka?x=1` and `/nl/hiriketiya-sri-lanka?utm=nl`. Expect one 301 to the English page, with the query kept, and no second redirect.
6. Confirm `/sitemap.xml` lists `/pl/kolombo-sri-lanka` and does not list `/pl/colombo-sri-lanka`.
7. Only then treat the live site as updated. Search Console submission is still a separate, unverified step.
