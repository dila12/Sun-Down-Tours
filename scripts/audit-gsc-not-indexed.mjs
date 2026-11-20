/**
 * Audit GSC "Crawled - currently not indexed" sample URLs against live origin.
 * Classifies: redirect | sitemap_noindex | ok_indexable | bad_robots | error
 */
import { writeFileSync } from 'node:fs';

const URLS = `
https://www.sundowntours.com/it/guide/autista-privato-sri-lanka
https://www.sundowntours.com/pl/5-dniowa-wycieczka-sri-lanka
https://www.sundowntours.com/es/circuito-privado-sri-lanka-8-dias
https://www.sundowntours.com/ru/4-dnevnyy-tur-shri-lanka
https://www.sundowntours.com/de/kundenbewertungen
https://www.sundowntours.com/es/circuito-sri-lanka-7-dias
https://www.sundowntours.com/it/tour-privato-sri-lanka-8-giorni
https://www.sundowntours.com/ru/yala-shri-lanka
https://www.sundowntours.com/ru/putevoditel/dikaya-priroda-shri-lanki
https://www.sundowntours.com/it/tour-sri-lanka-7-giorni
https://www.sundowntours.com/de
https://www.sundowntours.com/pl/7-dniowa-wycieczka-sri-lanka
https://www.sundowntours.com/de/reisefuehrer/teeanbaugebiet-sri-lanka
https://www.sundowntours.com/fr/guides/chauffeur-prive-sri-lanka
https://www.sundowntours.com/ru/kandi-shri-lanka
https://www.sundowntours.com/ru/odnodnevnaya-ekskursiya-kandi
https://www.sundowntours.com/de/reisefuehrer/sri-lanka-wildtier-guide
https://www.sundowntours.com/it/tour-sri-lanka-4-giorni
https://www.sundowntours.com/pl/wycieczka-jednodniowa-galle
https://www.sundowntours.com/fr/guides/securite-sri-lanka
https://www.sundowntours.com/it/yala-sri-lanka
https://www.sundowntours.com/de/7-tage-sri-lanka-rundreise
https://www.sundowntours.com/fr/circuit-sri-lanka-7-jours
https://www.sundowntours.com/ru/8-dnevnyy-individualnyy-tur-shri-lanka
https://www.sundowntours.com/fr/kandy-sri-lanka
https://www.sundowntours.com/fr/circuit-sri-lanka-5-jours
https://www.sundowntours.com/pl/galle-sri-lanka
https://www.sundowntours.com/it/guide/regione-del-te-sri-lanka
https://www.sundowntours.com/it/ella-sri-lanka
https://www.sundowntours.com/fr/ella-sri-lanka
https://www.sundowntours.com/pl/6-dniowa-prywatna-wycieczka-sri-lanka
https://www.sundowntours.com/fr/circuit-prive-sri-lanka-6-jours
https://www.sundowntours.com/it/tour-privato-sri-lanka-6-giorni
https://www.sundowntours.com/pl/przewodniki/prywatny-kierowca-sri-lanka
https://www.sundowntours.com/ru/putevoditel/luchshee-vremya-dlya-shri-lanka
https://www.sundowntours.com/es/guias/playas-sri-lanka
https://www.sundowntours.com/es/guias/que-llevar-sri-lanka
https://www.sundowntours.com/ru/tury-shri-lanka
https://www.sundowntours.com/fr/guides/faune-sri-lanka
https://www.sundowntours.com/es/guias/presupuesto-viaje-sri-lanka
https://www.sundowntours.com/de/reisefuehrer/sri-lanka-reisebudget
https://www.sundowntours.com/de/4-tage-sri-lanka-rundreise
https://www.sundowntours.com/fr/guides/meilleure-periode-sri-lanka
https://www.sundowntours.com/es/guias/seguridad-sri-lanka
https://www.sundowntours.com/fr/guides/budget-voyage-sri-lanka
https://www.sundowntours.com/de/reisefuehrer/beste-reisezeit-sri-lanka
https://www.sundowntours.com/fr/guides/liste-de-bagages-sri-lanka
https://www.sundowntours.com/es/excursion-ella-un-dia
https://www.sundowntours.com/es/opiniones-clientes
https://www.sundowntours.com/fr/yala-sri-lanka
https://www.sundowntours.com/fr/guides/cuisine-sri-lanka
https://www.sundowntours.com/de/reisefuehrer/sri-lanka-kueche
https://www.sundowntours.com/es/circuito-privado-ella-yala-2-dias
https://www.sundowntours.com/fr/guides
https://www.sundowntours.com/de/ueber-uns
https://www.sundowntours.com/de/sigiriya-tagesausflug
https://www.sundowntours.com/es/excursion-galle-un-dia
https://www.sundowntours.com/fr/excursion-kandy-journee
https://www.sundowntours.com/es/circuito-privado-ella-kandy-2-dias
https://www.sundowntours.com/de/10-tage-sri-lanka-rundreise
https://www.sundowntours.com/es/circuito-sri-lanka-5-dias
https://www.sundowntours.com/fr/guides/transferts-aeroport-sri-lanka
https://www.sundowntours.com/es/guias/traslados-aeropuerto-sri-lanka
https://www.sundowntours.com/it/escursione-giornaliera-galle
https://www.sundowntours.com/it/guide/cucina-sri-lanka
https://www.sundowntours.com/pl/ella-sri-lanka
https://www.sundowntours.com/ru/7-dnevnyy-tur-shri-lanka
https://www.sundowntours.com/fr/excursion-galle-journee
https://www.sundowntours.com/es/excursion-kandy-un-dia
https://www.sundowntours.com/de/ella-tagesausflug
https://www.sundowntours.com/es/cancellation-policy
https://www.sundowntours.com/fr/excursion-sigiriya-journee
https://www.sundowntours.com/de/kandy-tagesausflug
https://www.sundowntours.com/pl/wycieczka-jednodniowa-sigiriya
https://www.sundowntours.com/de/2-tage-ella-yala-private-rundreise
https://www.sundowntours.com/fr/guides/visa-sri-lanka
https://www.sundowntours.com/es/sigiriya-sri-lanka
https://www.sundowntours.com/de/reisefuehrer/sri-lanka-visum
https://www.sundowntours.com/de/sigiriya-sri-lanka
https://www.sundowntours.com/es/guias/visado-sri-lanka
https://www.sundowntours.com/es/circuito-privado-sri-lanka-6-dias
https://www.sundowntours.com/de/6-tage-private-sri-lanka-rundreise
https://www.sundowntours.com/es/circuito-sri-lanka-10-dias
https://www.sundowntours.com/es/guias/conductor-privado-sri-lanka
https://www.sundowntours.com/fr/mirissa-sri-lanka
https://www.sundowntours.com/de/ella-sri-lanka
https://www.sundowntours.com/fr/guides/region-the-sri-lanka
https://www.sundowntours.com/de/unsere-leistungen
https://www.sundowntours.com/es/guias/region-del-te-sri-lanka
https://www.sundowntours.com/de/8-tage-private-sri-lanka-rundreise
https://www.sundowntours.com/ru/putevoditel/chaynye-plantatsii-shri-lanka
https://www.sundowntours.com/fr
https://www.sundowntours.com/es/excursion-sigiriya-un-dia
https://www.sundowntours.com/it/guide/periodo-migliore-sri-lanka
https://www.sundowntours.com/es/guias/mejor-epoca-sri-lanka
https://www.sundowntours.com/ru/putevoditel/kukhnya-shri-lanka
https://www.sundowntours.com/es/guias/fauna-sri-lanka
https://www.sundowntours.com/pl/przewodniki/przyroda-sri-lanki
https://www.sundowntours.com/fr/sigiriya-sri-lanka
https://www.sundowntours.com/ru/odnodnevnaya-ekskursiya-galle
https://www.sundowntours.com/pl/yala-sri-lanka
https://www.sundowntours.com/es/restaurantes-en-sri-lanka
https://www.sundowntours.com/pl/przewodniki/region-herbaty-sri-lanka
https://www.sundowntours.com/it/guide/visto-sri-lanka
https://www.sundowntours.com/es/yala-sri-lanka
https://www.sundowntours.com/pl/przewodniki/kuchnia-sri-lanki
https://www.sundowntours.com/pl/sigiriya-sri-lanka
https://www.sundowntours.com/ru/2-dnevnyy-tur-ella-kandi
https://www.sundowntours.com/it/recensioni-clienti
https://www.sundowntours.com/es/galle-sri-lanka
https://www.sundowntours.com/it/galle-sri-lanka
https://www.sundowntours.com/ru/6-dnevnyy-individualnyy-tur-shri-lanka
https://www.sundowntours.com/fr/guides/voyages-famille-sri-lanka
https://www.sundowntours.com/it/guide/viaggi-famiglia-sri-lanka
https://www.sundowntours.com/ru/odnodnevnaya-ekskursiya-ella
https://www.sundowntours.com/it/tour-privato-ella-yala-2-giorni
https://www.sundowntours.com/sitemap.xml
https://www.sundowntours.com/it/guide/safari-sri-lanka
https://www.sundowntours.com/it/guide/fauna-sri-lanka
https://www.sundowntours.com/fr/circuit-prive-ella-kandy-2-jours
https://www.sundowntours.com/pl/10-dniowa-wycieczka-sri-lanka
https://www.sundowntours.com/fr/circuit-sri-lanka-10-jours
https://www.sundowntours.com/pl/8-dniowa-prywatna-wycieczka-sri-lanka
https://www.sundowntours.com/it/tour-sri-lanka-10-giorni
https://www.sundowntours.com/fr/excursion-ella-journee
https://www.sundowntours.com/ru/ella-shri-lanka
https://www.sundowntours.com/ru/odnodnevnaya-ekskursiya-sigiriya
https://www.sundowntours.com/pl/galle-day-tour
https://www.sundowntours.com/pl/restauracje-na-sri-lance
https://www.sundowntours.com/ru/o-nas
https://www.sundowntours.com/ru/sigiriya-shri-lanka
https://www.sundowntours.com/ru/putevoditel/bezopasnost-shri-lanka
https://www.sundowntours.com/ru/putevoditel/transfert-iz-aeroporta-shri-lanka
`
  .trim()
  .split(/\n/)
  .map((s) => s.trim())
  .filter(Boolean);

async function probe(url) {
  const res = await fetch(url, {
    redirect: 'manual',
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' },
  });
  const status = res.status;
  const loc = res.headers.get('location') || '';
  const xrobots = res.headers.get('x-robots-tag') || '';
  const cache = res.headers.get('cache-control') || '';
  let robots = '';
  let canonical = '';
  let title = '';
  let hreflang = 0;
  let enPollute = false;
  let htmlLang = '';
  if (status >= 200 && status < 300) {
    const body = await res.text();
    robots = body.match(/name=["']robots["'][^>]*content=["']([^"']+)/i)?.[1]
      || body.match(/content=["']([^"']+)["'][^>]*name=["']robots["']/i)?.[1]
      || '';
    canonical = body.match(/rel=["']canonical["'][^>]*href=["']([^"']+)/i)?.[1]
      || body.match(/href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)?.[1]
      || '';
    title = body.match(/<title>([^<]+)<\/title>/i)?.[1] || '';
    hreflang = (body.match(/hreflang=/gi) || []).length;
    htmlLang = body.match(/<html[^>]*lang=["']([^"']+)/i)?.[1] || '';
    enPollute = /Private Driver & Custom Travel|tailor made itineraries/i.test(body);
  }
  let kind = 'ok_indexable';
  if (status >= 300 && status < 400) kind = 'redirect';
  else if (status >= 500) kind = 'error_5xx';
  else if (status === 404) kind = 'not_found';
  else if (/noindex/i.test(xrobots) || /noindex/i.test(robots)) kind = 'noindex';
  else if (canonical && canonical.replace(/\/$/, '') !== url.replace(/\/$/, '')) kind = 'canonical_mismatch';
  return { url, status, loc, robots, xrobots, canonical, title, hreflang, htmlLang, enPollute, cache, kind };
}

const results = [];
const concurrency = 8;
for (let i = 0; i < URLS.length; i += concurrency) {
  const chunk = URLS.slice(i, i + concurrency);
  const part = await Promise.all(chunk.map((u) => probe(u).catch((e) => ({
    url: u, status: 0, kind: 'fetch_error', error: String(e.message || e),
  }))));
  results.push(...part);
  process.stdout.write(`\rprobed ${results.length}/${URLS.length}`);
}
console.log('');

const byKind = {};
for (const r of results) {
  byKind[r.kind] = (byKind[r.kind] || 0) + 1;
}
console.log(JSON.stringify(byKind, null, 2));
const bad = results.filter((r) => r.kind !== 'ok_indexable' && r.kind !== 'noindex' && r.kind !== 'redirect');
const redirects = results.filter((r) => r.kind === 'redirect');
const noindex = results.filter((r) => r.kind === 'noindex');
console.log('\nREDIRECTS:');
for (const r of redirects) console.log(`${r.status} -> ${r.loc} | ${r.url}`);
console.log('\nNOINDEX:');
for (const r of noindex) console.log(`${r.robots || r.xrobots} | ${r.url}`);
console.log('\nBAD:');
for (const r of bad) console.log(JSON.stringify(r));

writeFileSync('tmp-gsc-audit.json', JSON.stringify({ byKind, results }, null, 2));
console.log('\nWrote tmp-gsc-audit.json');
