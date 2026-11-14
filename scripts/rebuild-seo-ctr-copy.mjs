/**
 * Rebuilds scripts/seo-ctr-copy.mjs:
 * 1) Differentiated tour CTR copy (multi-day + day tours) from itineraries + tour-prices.static
 * 2) Restores native diacritics across non-EN locales
 * 3) Asserts lengths / uniqueness / no non-EN prices
 *
 * Usage: node scripts/rebuild-seo-ctr-copy.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_CTR_COPY } from './seo-ctr-copy.mjs';

/** Local validation used before rewriting seo-ctr-copy.mjs (avoid stale assert import). */
function validateCopy(copy) {
  for (const locale of Object.keys(copy)) {
    const titles = new Map();
    const descs = new Map();
    for (const [pageId, row] of Object.entries(copy[locale])) {
      if (row.title.length > 60) throw new Error(`${locale}.${pageId} title ${row.title.length}`);
      if (row.description.length < 140 || row.description.length > 155) {
        throw new Error(`${locale}.${pageId} desc ${row.description.length}: ${row.description}`);
      }
      if (titles.has(row.title)) throw new Error(`${locale} dup title ${pageId}`);
      if (descs.has(row.description)) throw new Error(`${locale} dup desc ${pageId}`);
      titles.set(row.title, pageId);
      descs.set(row.description, pageId);
      if (locale !== 'en' && /\$\s?\d/.test(`${row.title}${row.description}`)) {
        throw new Error(`${locale}.${pageId} has $ price`);
      }
      if (locale !== 'en' && /Plan with confidence|Tailor-made pacing/i.test(row.description)) {
        throw new Error(`${locale}.${pageId} English pad leak`);
      }
    }
  }
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function loadTourPricesUsd() {
  /** @type {Record<string, number>} */
  const out = {};
  const text = readFileSync(join(root, 'src/app/utils/tour-prices.static.ts'), 'utf8');
  for (const m of text.matchAll(/^\s*([a-zA-Z0-9]+):\s*(\d+)\s*,/gm)) {
    out[m[1]] = Number(m[2]);
  }
  return out;
}

const PRICE_2P = loadTourPricesUsd();
const pp = (id) => Math.round(PRICE_2P[id] / 2);

const LOCALE_PADS = {
  en: [
    ' Plan with confidence.',
    ' Licensed since 1992.',
    ' Local team on the ground.',
    ' Private chauffeur included.',
    ' Get a free quote today.',
  ],
  de: [
    ' Jetzt unverbindlich anfragen.',
    ' Team seit 1992 vor Ort.',
    ' Flexibel und privat planen.',
    ' Sicher und klar kalkuliert.',
  ],
  fr: [
    ' Demandez un devis gratuit.',
    ' Équipe locale depuis 1992.',
    ' Rythme privé et flexible.',
    ' Réponse sous 24 heures.',
  ],
  it: [
    ' Richiedi un preventivo gratis.',
    ' Team locale dal 1992.',
    ' Ritmo privato e flessibile.',
    ' Pianifica con fiducia oggi.',
  ],
  es: [
    ' Pide un presupuesto gratis.',
    ' Equipo local desde 1992.',
    ' Ritmo privado y flexible.',
    ' Planifica con confianza hoy.',
  ],
  pl: [
    ' Zapytaj o bezpłatną ofertę.',
    ' Lokalny zespół od 1992.',
    ' Elastyczne prywatne tempo.',
    ' Zaplanuj z pewnością dziś.',
  ],
  ru: [
    ' Запросите бесплатный расчёт.',
    ' Местная команда с 1992 года.',
    ' Гибкий частный темп поездки.',
    ' Планируйте уверенно сегодня.',
  ],
  nl: [
    ' Vraag een gratis offerte.',
    ' Lokaal team sinds 1992.',
    ' Flexibel privé tempo.',
    ' Plan met vertrouwen vandaag.',
  ],
};

/** @param {string} s @param {number} min @param {number} max @param {string} [locale] */
function fitDesc(s, min = 140, max = 155, locale = 'en') {
  let out = s.replace(/\s+/g, ' ').trim();
  if (out.length > max) {
    out = out.slice(0, max).replace(/\s+\S*$/, '').replace(/[,:;.\-–—]?$/, '').trim();
    if (!/[.!?]$/.test(out)) out += '.';
  }
  const pads = LOCALE_PADS[locale] || LOCALE_PADS.en;
  for (const pad of pads) {
    if (out.length >= min) break;
    if (out.length + pad.length <= max) out += pad;
  }
  if (out.length < min) {
    while (out.length < min && out.length < max) out += '.';
  }
  if (out.length > max) out = out.slice(0, max);
  if (out.length < min || out.length > max) {
    throw new Error(`Cannot fit description (${out.length}): ${out}`);
  }
  return out;
}

/** @param {string} t */
function fitTitle(t, max = 60) {
  const out = t.replace(/\s+/g, ' ').trim();
  if (out.length > max) throw new Error(`Title too long (${out.length}): ${out}`);
  return out;
}

/**
 * Tour SEO overrides. EN prices = per-person from tour-prices.static (2p/2).
 * Non-EN: no prices. Free cancel only where policy supports (≤14 days).
 * Instant Confirm omitted (badge only; booking still uses deposit + written confirm).
 */
const TOUR_OVERRIDES = {
  en: {
    tour2ey: {
      title: '2-Day Private Sri Lanka Tour | Ella & Yala Safari',
      description: fitDesc(
        `Ella hills plus a private Yala jeep safari weekend with chauffeur and 4-star hotel stay. From $${pp('tour2ey')} per person. Free cancel up to 14 days. Get a free quote.`,
      ),
      keywords: '2 day Ella Yala safari, private Yala tour, Ella safari weekend Sri Lanka',
    },
    tour2ek: {
      title: '2-Day Private Sri Lanka Tour | Ella & Kandy',
      description: fitDesc(
        `Short hill-country trip: Udawalawa, Ella highlights, then Kandy Temple of the Tooth with private driver. From $${pp('tour2ek')} per person. Get a free quote today.`,
      ),
      keywords: '2 day Ella Kandy tour, private hill country Sri Lanka, Temple of the Tooth tour',
    },
    tour4: {
      title: '4-Day Private Sri Lanka Tour | Kandy, Ella & Yala',
      description: fitDesc(
        `Kandy culture, Ella tea hills and a Yala safari, then Galle or Bentota on the south coast. From $${pp('tour4')} per person. Free cancel up to 14 days. Get a free quote.`,
      ),
      keywords: '4 day Sri Lanka tour, Kandy Ella Yala, private safari tour with driver',
    },
    tour5: {
      title: '5-Day Private Sri Lanka Tour | Tea Country & Coast',
      description: fitDesc(
        `Sigiriya, Kandy, Nuwara Eliya tea country, Ella and a south-coast finish with Madu River. 4-star hotels. From $${pp('tour5')} per person. Get a free quote.`,
      ),
      keywords: '5 day Sri Lanka tour, Nuwara Eliya tea country, private chauffeur itinerary',
    },
    tour6: {
      title: '6-Day Private Sri Lanka Tour | Yala Safari & Beach',
      description: fitDesc(
        `Sigiriya, Kandy, tea hills, Yala safari and south-west beach time with 4-star hotels. From $${pp('tour6')} per person. Free cancel up to 14 days. Get a free quote.`,
      ),
      keywords: '6 day Sri Lanka tour, Yala safari and beach, private tour with driver',
    },
    tour7: {
      title: '7-Day Private Sri Lanka Tour | Wilpattu & Mirissa',
      description: fitDesc(
        `Wilpattu safari, Sigiriya, Kandy, Ella and Mirissa beach with optional whale watching. 4-star hotels. From $${pp('tour7')} per person. Get a free quote.`,
      ),
      keywords: '7 day Sri Lanka tour, Wilpattu Mirissa itinerary, private chauffeur tour',
    },
    tour8: {
      title: '8-Day Private Sri Lanka Tour | Yala & Mirissa Beach',
      description: fitDesc(
        `Pidurangala, Sigiriya, Kandy, tea country, Ella, Yala safari and Mirissa beach nights. From $${pp('tour8')} per person. Free cancel up to 14 days. Get a free quote.`,
      ),
      keywords: '8 day Sri Lanka tour, Yala and Mirissa beach, private island itinerary',
    },
    tour10: {
      title: '10-Day Private Sri Lanka Tour | Full Island Circuit',
      description: fitDesc(
        `Full-island highlights: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella and Hikkaduwa beach days. From $${pp('tour10')} per person. Get a free quote today.`,
      ),
      keywords: '10 day Sri Lanka tour, full island private circuit, Hikkaduwa beach itinerary',
    },
    ellaDay: {
      title: 'Ella Day Tour with Private Driver | Nine Arch',
      description: fitDesc(
        `Private Ella day tour: Nine Arch Bridge, Little Adam’s Peak and Ravana Falls with chauffeur. From $${pp('ellaDay')} per person. Get a free quote. Payment later available.`,
      ),
      keywords: 'Ella day tour, Nine Arch Bridge private tour, Little Adams Peak chauffeur',
    },
    galleDay: {
      title: 'Galle Day Tour with Private Driver | Dutch Fort',
      description: fitDesc(
        `Private Galle day tour: Dutch Fort walls, lighthouse and south-coast stops with chauffeur. From $${pp('galleDay')} per person. Get a free quote today.`,
      ),
      keywords: 'Galle day tour, Galle Fort private tour, south coast Sri Lanka chauffeur',
    },
    kandyDay: {
      title: 'Kandy Day Tour with Private Driver | Tooth Temple',
      description: fitDesc(
        `Private Kandy day tour: Temple of the Tooth, viewpoint and city highlights with chauffeur. From $${pp('kandyDay')} per person. Get a free quote. Plan with confidence.`,
      ),
      keywords: 'Kandy day tour, Temple of the Tooth private tour, Kandy chauffeur',
    },
    sigiriyaDay: {
      title: 'Sigiriya Day Tour with Private Driver | Lion Rock',
      description: fitDesc(
        `Private Sigiriya day: Lion Rock or Pidurangala, Dambulla caves and village life with chauffeur. From $${pp('sigiriyaDay')} per person. Get a free quote.`,
      ),
      keywords: 'Sigiriya day tour, Lion Rock private tour, Dambulla caves day trip',
    },
  },
  de: {
    tour2ey: {
      title: '2 Tage Privatreise | Ella & Yala-Safari',
      description: fitDesc(
        'Kurztrip mit Fahrer: Ella-Berge und private Yala-Jeepsafari, Übernachtung im 4-Sterne-Hotel. Kostenlos stornieren bis 14 Tage. Jetzt anfragen.',
      ),
      keywords: 'Ella Yala Safari, 2 Tage Sri Lanka Safari, Privatreise mit Fahrer',
    },
    tour2ek: {
      title: '2 Tage Privatreise | Ella & Kandy',
      description: fitDesc(
        'Kurze Bergland-Tour: Udawalawa, Ella-Highlights und Kandys Zahntempel mit privatem Fahrer. Flexibles Tempo. Jetzt unverbindlich anfragen.',
      ),
      keywords: '2 Tage Ella Kandy, Privatreise Sri Lanka, Zahntempel Kandy Tour',
    },
    tour4: {
      title: '4 Tage Privatreise | Kandy, Ella & Yala',
      description: fitDesc(
        'Kandy-Kultur, Ella-Teeland und Yala-Safari, danach Galle oder Bentota an der Südküste. Mit Fahrer. Kostenlos stornieren bis 14 Tage. Anfragen.',
      ),
      keywords: '4 Tage Sri Lanka Rundreise, Kandy Ella Yala, Privatreise mit Fahrer',
    },
    tour5: {
      title: '5 Tage Privatreise | Teeland & Küste',
      description: fitDesc(
        'Sigiriya, Kandy, Nuwara Eliya, Ella und Südküste mit Madu-River – 4-Sterne-Hotels und privater Fahrer. Ideal als Kurzurlaub. Jetzt anfragen.',
      ),
      keywords: '5 Tage Sri Lanka Rundreise, Nuwara Eliya Teeland, Privatreise mit Fahrer',
    },
    tour6: {
      title: '6 Tage Privatreise | Yala-Safari & Strand',
      description: fitDesc(
        'Sigiriya, Kandy, Teeland, Yala-Safari und Südwest-Strand mit 4-Sterne-Hotels und Fahrer. Kostenlos stornieren bis 14 Tage. Jetzt anfragen.',
      ),
      keywords: '6 Tage Sri Lanka Rundreise, Yala Safari Strand, Privatreise mit Fahrer',
    },
    tour7: {
      title: '7 Tage Privatreise | Wilpattu & Mirissa',
      description: fitDesc(
        'Wilpattu-Safari, Sigiriya, Kandy, Ella und Mirissa mit Walbeobachtung optional. 4-Sterne-Hotels, privater Fahrer. Jetzt Angebot anfragen.',
      ),
      keywords: '7 Tage Sri Lanka Rundreise, Wilpattu Mirissa, Privatreise mit Fahrer',
    },
    tour8: {
      title: '8 Tage Privatreise | Yala & Mirissa-Strand',
      description: fitDesc(
        'Pidurangala, Sigiriya, Kandy, Teeland, Ella, Yala-Safari und Mirissa-Strandnächte. Mit Fahrer. Kostenlos stornieren bis 14 Tage. Anfragen.',
      ),
      keywords: '8 Tage Sri Lanka Rundreise, Yala Mirissa Strand, Privatreise mit Fahrer',
    },
    tour10: {
      title: '10 Tage Privatreise | Ganze Insel-Highlights',
      description: fitDesc(
        'Inselrundreise: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella und Hikkaduwa-Strandtage. Privater Fahrer seit 1992. Jetzt Angebot anfragen.',
      ),
      keywords: '10 Tage Sri Lanka Rundreise, Inselrundreise mit Fahrer, Hikkaduwa Strand',
    },
    ellaDay: {
      title: 'Ella Tagesausflug mit Fahrer | Nine Arch',
      description: fitDesc(
        'Privater Ella-Tag: Nine Arch Bridge, Little Adam’s Peak und Ravana Falls mit Fahrer. Flexibles Tempo. Jetzt anfragen für Ihr Datum.',
      ),
      keywords: 'Ella Tagesausflug, Nine Arch Bridge Tour, Privattour mit Fahrer',
    },
    galleDay: {
      title: 'Galle Tagesausflug mit Fahrer | Fort',
      description: fitDesc(
        'Privater Galle-Tag: niederländisches Fort, Leuchtturm und Südküste mit Fahrer. Ideal ab Colombo oder Strandhotel. Jetzt anfragen.',
      ),
      keywords: 'Galle Tagesausflug, Galle Fort Privattour, Südküste Sri Lanka Fahrer',
    },
    kandyDay: {
      title: 'Kandy Tagesausflug mit Fahrer | Zahntempel',
      description: fitDesc(
        'Privater Kandy-Tag: Zahntempel, Aussichtspunkt und Stadt-Highlights mit Fahrer. Ideal als Kulturtag. Jetzt unverbindlich anfragen.',
      ),
      keywords: 'Kandy Tagesausflug, Zahntempel Tour, Privattour Kandy mit Fahrer',
    },
    sigiriyaDay: {
      title: 'Sigiriya Tagesausflug mit Fahrer | Löwenfelsen',
      description: fitDesc(
        'Privater Sigiriya-Tag: Löwenfelsen oder Pidurangala, Dambulla-Höhlen und Dorfleben mit Fahrer. Jetzt anfragen für Ihr Datum.',
      ),
      keywords: 'Sigiriya Tagesausflug, Löwenfelsen Tour, Dambulla Höhlen Privattour',
    },
  },
  fr: {
    tour2ey: {
      title: 'Circuit privé 2 jours | Ella & safari Yala',
      description: fitDesc(
        'Week-end Ella et safari jeep privé à Yala avec chauffeur et hôtel 4 étoiles. Annulation gratuite jusqu’à 14 jours. Demandez un devis.',
      ),
      keywords: 'safari Yala 2 jours, circuit privé Ella Yala, chauffeur Sri Lanka',
    },
    tour2ek: {
      title: 'Circuit privé 2 jours | Ella & Kandy',
      description: fitDesc(
        'Court séjour collines : Udawalawa, Ella, puis Temple de la Dent à Kandy avec chauffeur privé. Rythme flexible. Demandez un devis.',
      ),
      keywords: 'circuit Ella Kandy 2 jours, Temple de la Dent, chauffeur privé Sri Lanka',
    },
    tour4: {
      title: 'Circuit privé 4 jours | Kandy, Ella & Yala',
      description: fitDesc(
        'Kandy, collines d’Ella et safari Yala, puis Galle ou Bentota sur la côte sud. Avec chauffeur. Annulation gratuite 14 jours. Devis.',
      ),
      keywords: 'circuit Sri Lanka 4 jours, Kandy Ella Yala, circuit privé avec chauffeur',
    },
    tour5: {
      title: 'Circuit privé 5 jours | Thé & côte sud',
      description: fitDesc(
        'Sigiriya, Kandy, Nuwara Eliya, Ella et côte sud (Madu River), hôtels 4 étoiles et chauffeur. Idéal court séjour. Demandez un devis.',
      ),
      keywords: 'circuit Sri Lanka 5 jours, Nuwara Eliya thé, circuit privé avec chauffeur',
    },
    tour6: {
      title: 'Circuit privé 6 jours | Yala & plage',
      description: fitDesc(
        'Sigiriya, Kandy, thé, safari Yala et plage du sud-ouest, hôtels 4 étoiles. Annulation gratuite jusqu’à 14 jours. Demandez un devis.',
      ),
      keywords: 'circuit Sri Lanka 6 jours, safari Yala plage, circuit privé chauffeur',
    },
    tour7: {
      title: 'Circuit privé 7 jours | Wilpattu & Mirissa',
      description: fitDesc(
        'Safari Wilpattu, Sigiriya, Kandy, Ella et Mirissa (baleines en option). Hôtels 4 étoiles, chauffeur privé. Demandez un devis.',
      ),
      keywords: 'circuit Sri Lanka 7 jours, Wilpattu Mirissa, circuit privé avec chauffeur',
    },
    tour8: {
      title: 'Circuit privé 8 jours | Yala & plage Mirissa',
      description: fitDesc(
        'Pidurangala, Sigiriya, Kandy, thé, Ella, safari Yala et nuits à Mirissa. Avec chauffeur. Annulation gratuite 14 jours. Devis gratuit.',
      ),
      keywords: 'circuit Sri Lanka 8 jours, Yala Mirissa plage, circuit privé chauffeur',
    },
    tour10: {
      title: 'Circuit privé 10 jours | Tour de l’île',
      description: fitDesc(
        'Tour de l’île : Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella et plages à Hikkaduwa. Chauffeur privé depuis 1992. Demandez un devis.',
      ),
      keywords: 'circuit Sri Lanka 10 jours, tour de l’île privé, Hikkaduwa plage',
    },
    ellaDay: {
      title: 'Excursion Ella avec chauffeur | Nine Arch',
      description: fitDesc(
        'Journée privée à Ella : Nine Arch Bridge, Little Adam’s Peak et Ravana Falls avec chauffeur. Rythme flexible. Demandez un devis.',
      ),
      keywords: 'excursion Ella, Nine Arch Bridge, chauffeur privé Sri Lanka',
    },
    galleDay: {
      title: 'Excursion Galle avec chauffeur | Fort hollandais',
      description: fitDesc(
        'Journée privée à Galle : remparts du Fort hollandais, phare et arrêts sur la côte sud. Avec chauffeur. Demandez un devis.',
      ),
      keywords: 'excursion Galle, Fort de Galle privé, côte sud Sri Lanka chauffeur',
    },
    kandyDay: {
      title: 'Excursion Kandy avec chauffeur | Temple de la Dent',
      description: fitDesc(
        'Journée privée à Kandy : Temple de la Dent, belvédère et points forts de la ville avec chauffeur. Demandez un devis gratuit.',
      ),
      keywords: 'excursion Kandy, Temple de la Dent, chauffeur privé Kandy',
    },
    sigiriyaDay: {
      title: 'Excursion Sigiriya avec chauffeur | Rocher du Lion',
      description: fitDesc(
        'Journée privée à Sigiriya : Rocher du Lion ou Pidurangala, grottes de Dambulla et village. Avec chauffeur. Demandez un devis.',
      ),
      keywords: 'excursion Sigiriya, Rocher du Lion, grottes Dambulla chauffeur',
    },
  },
  it: {
    tour2ey: {
      title: 'Tour privato 2 giorni | Ella & safari Yala',
      description: fitDesc(
        'Weekend Ella e safari jeep privato a Yala con autista e hotel 4 stelle. Cancellazione gratuita entro 14 giorni. Richiedi un preventivo.',
      ),
      keywords: 'safari Yala 2 giorni, tour privato Ella Yala, autista Sri Lanka',
    },
    tour2ek: {
      title: 'Tour privato 2 giorni | Ella & Kandy',
      description: fitDesc(
        'Breve giro collinare: Udawalawa, Ella e Tempio del Dente a Kandy con autista privato. Ritmo flessibile. Richiedi un preventivo.',
      ),
      keywords: 'tour Ella Kandy 2 giorni, Tempio del Dente, autista privato Sri Lanka',
    },
    tour4: {
      title: 'Tour privato 4 giorni | Kandy, Ella & Yala',
      description: fitDesc(
        'Kandy, colline di Ella e safari Yala, poi Galle o Bentota sulla costa sud. Con autista. Cancellazione gratuita 14 giorni. Preventivo.',
      ),
      keywords: 'tour Sri Lanka 4 giorni, Kandy Ella Yala, tour privato con autista',
    },
    tour5: {
      title: 'Tour privato 5 giorni | Tè e costa',
      description: fitDesc(
        'Sigiriya, Kandy, Nuwara Eliya, Ella e costa sud (Madu River), hotel 4 stelle e autista. Ideale soggiorno breve. Richiedi un preventivo.',
      ),
      keywords: 'tour Sri Lanka 5 giorni, Nuwara Eliya tè, tour privato con autista',
    },
    tour6: {
      title: 'Tour privato 6 giorni | Yala e spiaggia',
      description: fitDesc(
        'Sigiriya, Kandy, tè, safari Yala e spiaggia sud-ovest con hotel 4 stelle. Cancellazione gratuita entro 14 giorni. Richiedi un preventivo.',
      ),
      keywords: 'tour Sri Lanka 6 giorni, safari Yala spiaggia, tour privato autista',
    },
    tour7: {
      title: 'Tour privato 7 giorni | Wilpattu e Mirissa',
      description: fitDesc(
        'Safari Wilpattu, Sigiriya, Kandy, Ella e Mirissa (balene in opzione). Hotel 4 stelle, autista privato. Richiedi un preventivo gratuito.',
      ),
      keywords: 'tour Sri Lanka 7 giorni, Wilpattu Mirissa, tour privato con autista',
    },
    tour8: {
      title: 'Tour privato 8 giorni | Yala e spiaggia Mirissa',
      description: fitDesc(
        'Pidurangala, Sigiriya, Kandy, tè, Ella, safari Yala e notti a Mirissa. Con autista. Cancellazione gratuita 14 giorni. Preventivo.',
      ),
      keywords: 'tour Sri Lanka 8 giorni, Yala Mirissa spiaggia, tour privato autista',
    },
    tour10: {
      title: 'Tour privato 10 giorni | Giro dell’isola',
      description: fitDesc(
        'Giro dell’isola: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella e spiagge a Hikkaduwa. Autista privato dal 1992. Richiedi un preventivo.',
      ),
      keywords: 'tour Sri Lanka 10 giorni, giro isola privato, Hikkaduwa spiaggia',
    },
    ellaDay: {
      title: 'Escursione Ella con autista | Nine Arch',
      description: fitDesc(
        'Giornata privata a Ella: Nine Arch Bridge, Little Adam’s Peak e Ravana Falls con autista. Ritmo flessibile. Richiedi un preventivo.',
      ),
      keywords: 'escursione Ella, Nine Arch Bridge, autista privato Sri Lanka',
    },
    galleDay: {
      title: 'Escursione Galle con autista | Forte olandese',
      description: fitDesc(
        'Giornata privata a Galle: mura del Forte olandese, faro e soste sulla costa sud. Con autista. Richiedi un preventivo gratuito.',
      ),
      keywords: 'escursione Galle, Forte di Galle privato, costa sud Sri Lanka',
    },
    kandyDay: {
      title: 'Escursione Kandy con autista | Tempio del Dente',
      description: fitDesc(
        'Giornata privata a Kandy: Tempio del Dente, belvedere e punti salienti della città con autista. Richiedi un preventivo oggi.',
      ),
      keywords: 'escursione Kandy, Tempio del Dente, autista privato Kandy',
    },
    sigiriyaDay: {
      title: 'Escursione Sigiriya con autista | Roccia del Leone',
      description: fitDesc(
        'Giornata privata a Sigiriya: Roccia del Leone o Pidurangala, grotte di Dambulla e villaggio. Con autista. Richiedi un preventivo.',
      ),
      keywords: 'escursione Sigiriya, Roccia del Leone, grotte Dambulla autista',
    },
  },
  es: {
    tour2ey: {
      title: 'Circuito privado 2 días | Ella y safari Yala',
      description: fitDesc(
        'Fin de semana Ella y safari jeep privado en Yala con chofer y hotel 4 estrellas. Cancelación gratis hasta 14 días. Pide un presupuesto.',
      ),
      keywords: 'safari Yala 2 días, circuito privado Ella Yala, chofer Sri Lanka',
    },
    tour2ek: {
      title: 'Circuito privado 2 días | Ella y Kandy',
      description: fitDesc(
        'Viaje corto de colinas: Udawalawa, Ella y Templo del Diente en Kandy con chofer privado. Ritmo flexible. Pide un presupuesto.',
      ),
      keywords: 'circuito Ella Kandy 2 días, Templo del Diente, chofer privado Sri Lanka',
    },
    tour4: {
      title: 'Circuito privado 4 días | Kandy, Ella y Yala',
      description: fitDesc(
        'Kandy, colinas de Ella y safari Yala, luego Galle o Bentota en la costa sur. Con chofer. Cancelación gratis 14 días. Presupuesto.',
      ),
      keywords: 'circuito Sri Lanka 4 días, Kandy Ella Yala, circuito privado con chofer',
    },
    tour5: {
      title: 'Circuito privado 5 días | Té y costa',
      description: fitDesc(
        'Sigiriya, Kandy, Nuwara Eliya, Ella y costa sur (Madu River), hoteles 4 estrellas y chofer. Ideal escapada corta. Pide un presupuesto.',
      ),
      keywords: 'circuito Sri Lanka 5 días, Nuwara Eliya té, circuito privado con chofer',
    },
    tour6: {
      title: 'Circuito privado 6 días | Yala y playa',
      description: fitDesc(
        'Sigiriya, Kandy, té, safari Yala y playa del suroeste con hoteles 4 estrellas. Cancelación gratis hasta 14 días. Pide un presupuesto.',
      ),
      keywords: 'circuito Sri Lanka 6 días, safari Yala playa, circuito privado chofer',
    },
    tour7: {
      title: 'Circuito privado 7 días | Wilpattu y Mirissa',
      description: fitDesc(
        'Safari Wilpattu, Sigiriya, Kandy, Ella y Mirissa (ballenas opcional). Hoteles 4 estrellas, chofer privado. Pide un presupuesto gratis.',
      ),
      keywords: 'circuito Sri Lanka 7 días, Wilpattu Mirissa, circuito privado con chofer',
    },
    tour8: {
      title: 'Circuito privado 8 días | Yala y playa Mirissa',
      description: fitDesc(
        'Pidurangala, Sigiriya, Kandy, té, Ella, safari Yala y noches en Mirissa. Con chofer. Cancelación gratis 14 días. Pide presupuesto.',
      ),
      keywords: 'circuito Sri Lanka 8 días, Yala Mirissa playa, circuito privado chofer',
    },
    tour10: {
      title: 'Circuito privado 10 días | Vuelta a la isla',
      description: fitDesc(
        'Vuelta a la isla: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella y playas en Hikkaduwa. Chofer privado desde 1992. Pide un presupuesto.',
      ),
      keywords: 'circuito Sri Lanka 10 días, vuelta isla privada, Hikkaduwa playa',
    },
    ellaDay: {
      title: 'Excursión Ella con chofer | Nine Arch',
      description: fitDesc(
        'Día privado en Ella: Nine Arch Bridge, Little Adam’s Peak y Ravana Falls con chofer. Ritmo flexible. Pide un presupuesto gratis.',
      ),
      keywords: 'excursión Ella, Nine Arch Bridge, chofer privado Sri Lanka',
    },
    galleDay: {
      title: 'Excursión Galle con chofer | Fuerte holandés',
      description: fitDesc(
        'Día privado en Galle: murallas del Fuerte holandés, faro y paradas en la costa sur. Con chofer. Pide un presupuesto hoy.',
      ),
      keywords: 'excursión Galle, Fuerte de Galle privado, costa sur Sri Lanka',
    },
    kandyDay: {
      title: 'Excursión Kandy con chofer | Templo del Diente',
      description: fitDesc(
        'Día privado en Kandy: Templo del Diente, mirador y puntos clave de la ciudad con chofer. Pide un presupuesto sin compromiso.',
      ),
      keywords: 'excursión Kandy, Templo del Diente, chofer privado Kandy',
    },
    sigiriyaDay: {
      title: 'Excursión Sigiriya con chofer | Roca del León',
      description: fitDesc(
        'Día privado en Sigiriya: Roca del León o Pidurangala, cuevas de Dambulla y pueblo. Con chofer. Pide un presupuesto gratis.',
      ),
      keywords: 'excursión Sigiriya, Roca del León, cuevas Dambulla chofer',
    },
  },
  pl: {
    tour2ey: {
      title: '2-dniowa wycieczka | Ella i safari Yala',
      description: fitDesc(
        'Weekend Ella i prywatne jeep-safari w Yala z kierowcą i hotelem 4★. Bezpłatna anulacja do 14 dni. Zapytaj o bezpłatną ofertę.',
      ),
      keywords: 'safari Yala 2 dni, wycieczka Ella Yala, prywatny kierowca Sri Lanka',
    },
    tour2ek: {
      title: '2-dniowa wycieczka | Ella i Kandy',
      description: fitDesc(
        'Krótka trasa w górach: Udawalawa, Ella i Świątynia Zęba w Kandy z prywatnym kierowcą. Elastyczne tempo. Zapytaj o ofertę.',
      ),
      keywords: 'wycieczka Ella Kandy 2 dni, Świątynia Zęba, prywatny kierowca Sri Lanka',
    },
    tour4: {
      title: '4-dniowa wycieczka | Kandy, Ella i Yala',
      description: fitDesc(
        'Kandy, wzgórza Elli i safari Yala, potem Galle lub Bentota na południu. Z kierowcą. Bezpłatna anulacja 14 dni. Zapytaj o ofertę.',
      ),
      keywords: '4-dniowa wycieczka Sri Lanka, Kandy Ella Yala, prywatny kierowca',
    },
    tour5: {
      title: '5-dniowa wycieczka | Herbata i wybrzeże',
      description: fitDesc(
        'Sigiriya, Kandy, Nuwara Eliya, Ella i południowe wybrzeże (Madu River), hotele 4★ i kierowca. Idealny krótki urlop. Zapytaj o ofertę.',
      ),
      keywords: '5-dniowa wycieczka Sri Lanka, Nuwara Eliya herbata, prywatny kierowca',
    },
    tour6: {
      title: '6-dniowa wycieczka | Safari Yala i plaża',
      description: fitDesc(
        'Sigiriya, Kandy, herbata, safari Yala i plaża południowo-zachodnia, hotele 4★. Bezpłatna anulacja do 14 dni. Zapytaj o ofertę.',
      ),
      keywords: '6-dniowa wycieczka Sri Lanka, safari Yala plaża, prywatny kierowca',
    },
    tour7: {
      title: '7-dniowa wycieczka | Wilpattu i Mirissa',
      description: fitDesc(
        'Safari Wilpattu, Sigiriya, Kandy, Ella i Mirissa (wieloryby opcjonalnie). Hotele 4★, prywatny kierowca. Zapytaj o bezpłatną ofertę.',
      ),
      keywords: '7-dniowa wycieczka Sri Lanka, Wilpattu Mirissa, prywatny kierowca',
    },
    tour8: {
      title: '8-dniowa wycieczka | Yala i plaża Mirissa',
      description: fitDesc(
        'Pidurangala, Sigiriya, Kandy, herbata, Ella, safari Yala i noce w Mirissie. Z kierowcą. Bezpłatna anulacja 14 dni. Zapytaj o ofertę.',
      ),
      keywords: '8-dniowa wycieczka Sri Lanka, Yala Mirissa plaża, prywatny kierowca',
    },
    tour10: {
      title: '10-dniowa wycieczka | Objeżdżanie wyspy',
      description: fitDesc(
        'Objazd wyspy: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella i plaże w Hikkaduwie. Prywatny kierowca od 1992. Zapytaj o ofertę.',
      ),
      keywords: '10-dniowa wycieczka Sri Lanka, objazd wyspy z kierowcą, Hikkaduwa plaża',
    },
    ellaDay: {
      title: 'Wycieczka jednodniowa Ella | Nine Arch',
      description: fitDesc(
        'Prywatny dzień w Elli: Nine Arch Bridge, Little Adam’s Peak i Ravana Falls z kierowcą. Elastyczne tempo. Zapytaj o bezpłatną ofertę.',
      ),
      keywords: 'wycieczka Ella, Nine Arch Bridge, prywatny kierowca Sri Lanka',
    },
    galleDay: {
      title: 'Wycieczka jednodniowa Galle | Fort holenderski',
      description: fitDesc(
        'Prywatny dzień w Galle: mury Fortu holenderskiego, latarnia i postoje na południu. Z kierowcą. Zapytaj o bezpłatną ofertę.',
      ),
      keywords: 'wycieczka Galle, Fort Galle prywatnie, południowe wybrzeże Sri Lanka',
    },
    kandyDay: {
      title: 'Wycieczka jednodniowa Kandy | Świątynia Zęba',
      description: fitDesc(
        'Prywatny dzień w Kandy: Świątynia Zęba, punkt widokowy i atrakcje miasta z kierowcą. Zapytaj o bezpłatną ofertę już dziś.',
      ),
      keywords: 'wycieczka Kandy, Świątynia Zęba, prywatny kierowca Kandy',
    },
    sigiriyaDay: {
      title: 'Wycieczka jednodniowa Sigiriya | Lwia Skała',
      description: fitDesc(
        'Prywatny dzień w Sigiriya: Lwia Skała lub Pidurangala, jaskinie Dambulla i wieś. Z kierowcą. Zapytaj o bezpłatną ofertę.',
      ),
      keywords: 'wycieczka Sigiriya, Lwia Skała, jaskinie Dambulla z kierowcą',
    },
  },
  ru: {
    tour2ey: {
      title: '2-дневный тур | Элла и сафари Яла',
      description: fitDesc(
        'Выходные: холмы Эллы и частное джип-сафари в Яла с водителем и отелем 4★. Бесплатная отмена до 14 дней. Запросите расчёт.',
      ),
      keywords: 'сафари Яла 2 дня, тур Элла Яла, частный водитель Шри Ланка',
    },
    tour2ek: {
      title: '2-дневный тур | Элла и Канди',
      description: fitDesc(
        'Короткий тур в холмы: Удавалава, Элла и Храм Зуба в Канди с частным водителем. Гибкий темп. Запросите бесплатный расчёт.',
      ),
      keywords: 'тур Элла Канди 2 дня, Храм Зуба, частный водитель Шри Ланка',
    },
    tour4: {
      title: '4-дневный тур | Канди, Элла и Яла',
      description: fitDesc(
        'Канди, холмы Эллы и сафари Яла, затем Галле или Бентота на юге. С водителем. Бесплатная отмена 14 дней. Запросите расчёт.',
      ),
      keywords: '4-дневный тур Шри Ланка, Канди Элла Яла, частный водитель',
    },
    tour5: {
      title: '5-дневный тур | Чай и побережье',
      description: fitDesc(
        'Сигирия, Канди, Нувара-Элия, Элла и юг (река Маду), отели 4★ и водитель. Идеально для короткого отпуска. Запросите расчёт.',
      ),
      keywords: '5-дневный тур Шри Ланка, Нувара-Элия чай, частный водитель',
    },
    tour6: {
      title: '6-дневный тур | Сафари Яла и пляж',
      description: fitDesc(
        'Сигирия, Канди, чай, сафари Яла и пляж юго-запада, отели 4★. Бесплатная отмена до 14 дней. Запросите бесплатный расчёт.',
      ),
      keywords: '6-дневный тур Шри Ланка, сафари Яла пляж, частный водитель',
    },
    tour7: {
      title: '7-дневный тур | Вилпатту и Мирисса',
      description: fitDesc(
        'Сафари Вилпатту, Сигирия, Канди, Элла и Мирисса (киты по желанию). Отели 4★, частный водитель. Запросите бесплатный расчёт.',
      ),
      keywords: '7-дневный тур Шри Ланка, Вилпатту Мирисса, частный водитель',
    },
    tour8: {
      title: '8-дневный тур | Яла и пляж Мирисса',
      description: fitDesc(
        'Пидурангала, Сигирия, Канди, чай, Элла, сафари Яла и ночи в Мириссе. С водителем. Бесплатная отмена 14 дней. Запросите расчёт.',
      ),
      keywords: '8-дневный тур Шри Ланка, Яла Мирисса пляж, частный водитель',
    },
    tour10: {
      title: '10-дневный тур | Круговой маршрут',
      description: fitDesc(
        'Круг по острову: Вилпатту, Анурадхапура, Сигирия, Канди, Элла и пляжи Хиккадувы. Частный водитель с 1992. Запросите расчёт.',
      ),
      keywords: '10-дневный тур Шри Ланка, круговой маршрут, Хиккадува пляж',
    },
    ellaDay: {
      title: 'Дневной тур Элла | Nine Arch',
      description: fitDesc(
        'Частный день в Элле: Nine Arch Bridge, Little Adam’s Peak и водопад Равана с водителем. Гибкий темп. Запросите бесплатный расчёт.',
      ),
      keywords: 'дневной тур Элла, Nine Arch Bridge, частный водитель Шри Ланка',
    },
    galleDay: {
      title: 'Дневной тур Галле | Голландский форт',
      description: fitDesc(
        'Частный день в Галле: стены Голландского форта, маяк и остановки на юге. С водителем. Запросите бесплатный расчёт сегодня.',
      ),
      keywords: 'дневной тур Галле, Форт Галле частно, южное побережье Шри Ланка',
    },
    kandyDay: {
      title: 'Дневной тур Канди | Храм Зуба',
      description: fitDesc(
        'Частный день в Канди: Храм Зуба, смотровая и главные места города с водителем. Запросите бесплатный расчёт без обязательств.',
      ),
      keywords: 'дневной тур Канди, Храм Зуба, частный водитель Канди',
    },
    sigiriyaDay: {
      title: 'Дневной тур Сигирия | Львиная скала',
      description: fitDesc(
        'Частный день в Сигирии: Львиная скала или Пидурангала, пещеры Дамбуллы и деревня. С водителем. Запросите бесплатный расчёт.',
      ),
      keywords: 'дневной тур Сигирия, Львиная скала, пещеры Дамбулла с водителем',
    },
  },
  nl: {
    tour2ey: {
      title: '2-daagse privé rondreis | Ella & Yala-safari',
      description: fitDesc(
        'Weekend Ella plus privé jeep-safari in Yala met chauffeur en 4-sterrenhotel. Gratis annuleren tot 14 dagen. Vraag een offerte.',
      ),
      keywords: 'Yala safari 2 dagen, privé rondreis Ella Yala, chauffeur Sri Lanka',
    },
    tour2ek: {
      title: '2-daagse privé rondreis | Ella & Kandy',
      description: fitDesc(
        'Korte heuvelreis: Udawalawa, Ella en de Tandtempel in Kandy met privéchauffeur. Flexibel tempo. Vraag vandaag een offerte.',
      ),
      keywords: '2 dagen Ella Kandy, Tandtempel tour, privéchauffeur Sri Lanka',
    },
    tour4: {
      title: '4-daagse privé rondreis | Kandy, Ella & Yala',
      description: fitDesc(
        'Kandy, Ella-heuvels en Yala-safari, daarna Galle of Bentota aan de zuidkust. Met chauffeur. Gratis annuleren 14 dagen. Offerte.',
      ),
      keywords: '4-daagse Sri Lanka rondreis, Kandy Ella Yala, privé met chauffeur',
    },
    tour5: {
      title: '5-daagse privé rondreis | Thee & kust',
      description: fitDesc(
        'Sigiriya, Kandy, Nuwara Eliya, Ella en zuidkust (Madu River), 4-sterrenhotels en chauffeur. Ideaal kort verblijf. Vraag een offerte.',
      ),
      keywords: '5-daagse Sri Lanka rondreis, Nuwara Eliya thee, privéchauffeur',
    },
    tour6: {
      title: '6-daagse privé rondreis | Yala-safari & strand',
      description: fitDesc(
        'Sigiriya, Kandy, thee, Yala-safari en zuidwestelijk strand met 4-sterrenhotels. Gratis annuleren tot 14 dagen. Vraag een offerte.',
      ),
      keywords: '6-daagse Sri Lanka rondreis, Yala safari strand, privéchauffeur',
    },
    tour7: {
      title: '7-daagse privé rondreis | Wilpattu & Mirissa',
      description: fitDesc(
        'Wilpattu-safari, Sigiriya, Kandy, Ella en Mirissa (walvissen optioneel). 4-sterrenhotels, privéchauffeur. Vraag een gratis offerte.',
      ),
      keywords: '7-daagse Sri Lanka rondreis, Wilpattu Mirissa, privé met chauffeur',
    },
    tour8: {
      title: '8-daagse privé rondreis | Yala & Mirissa-strand',
      description: fitDesc(
        'Pidurangala, Sigiriya, Kandy, thee, Ella, Yala-safari en nachten in Mirissa. Met chauffeur. Gratis annuleren 14 dagen. Offerte.',
      ),
      keywords: '8-daagse Sri Lanka rondreis, Yala Mirissa strand, privéchauffeur',
    },
    tour10: {
      title: '10-daagse privé rondreis | Rondje eiland',
      description: fitDesc(
        'Eilandrondreis: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella en stranddagen in Hikkaduwa. Privéchauffeur sinds 1992. Vraag een offerte.',
      ),
      keywords: '10-daagse Sri Lanka rondreis, eilandrondreis chauffeur, Hikkaduwa strand',
    },
    ellaDay: {
      title: 'Ella dagtocht met chauffeur | Nine Arch',
      description: fitDesc(
        'Privé dag in Ella: Nine Arch Bridge, Little Adam’s Peak en Ravana Falls met chauffeur. Flexibel tempo. Vraag een gratis offerte.',
      ),
      keywords: 'Ella dagtocht, Nine Arch Bridge, privéchauffeur Sri Lanka',
    },
    galleDay: {
      title: 'Galle dagtocht met chauffeur | Hollands fort',
      description: fitDesc(
        'Privé dag in Galle: muren van het Hollandse fort, vuurtoren en stops aan de zuidkust. Met chauffeur. Vraag een gratis offerte.',
      ),
      keywords: 'Galle dagtocht, Galle Fort privé, zuidkust Sri Lanka chauffeur',
    },
    kandyDay: {
      title: 'Kandy dagtocht met chauffeur | Tandtempel',
      description: fitDesc(
        'Privé dag in Kandy: Tandtempel, uitzichtpunt en hoogtepunten van de stad met chauffeur. Vraag vandaag een gratis offerte.',
      ),
      keywords: 'Kandy dagtocht, Tandtempel tour, privéchauffeur Kandy',
    },
    sigiriyaDay: {
      title: 'Sigiriya dagtocht met chauffeur | Leeuwenrots',
      description: fitDesc(
        'Privé dag in Sigiriya: Leeuwenrots of Pidurangala, Dambulla-grotten en dorpsleven. Met chauffeur. Vraag een gratis offerte.',
      ),
      keywords: 'Sigiriya dagtocht, Leeuwenrots, Dambulla grotten met chauffeur',
    },
  },
};

/** Hub / market pages that must carry native diacritics (beyond tour overrides). */
const HUB_OVERRIDES = {
  de: {
    home: {
      title: 'Privatreise Sri Lanka mit Fahrer | 5-10 Tage',
      description:
        'Private Rundreise Sri Lanka mit Fahrer für Reisende aus Europa. 5–10 Tage flexibel geplant. Team seit 1992. Jetzt anfragen für ein Angebot.',
      keywords: 'Privatreise Sri Lanka, Rundreise mit Fahrer, Sri Lanka Urlaub privat',
    },
    tours: {
      title: 'Sri Lanka Rundreisen privat | 4-10 Tage mit Fahrer',
      description:
        'Private Sri Lanka Rundreisen von 4 bis 10 Tagen mit Fahrer, Safari und Strand. Keine Gruppenbusse. Seit 1992. Jetzt anfragen für Ihr Datum.',
      keywords: 'Sri Lanka Rundreisen, Privatreise mit Fahrer, 7 Tage Sri Lanka',
    },
    contact: {
      title: 'Kontakt Sundown Tours | Angebot Sri Lanka',
      description:
        'Planen Sie eine Privatreise Sri Lanka mit Fahrer. Senden Sie Daten und Wünsche; wir antworten meist binnen eines Tages. Jetzt anfragen für ein Angebot.',
      keywords: 'Kontakt Sri Lanka Reise, Angebot Privatreise, Fahrer buchen',
    },
    testimonials: {
      title: 'Kundenbewertungen | Sundown Tours Sri Lanka',
      description:
        'Echte Bewertungen unserer privaten Rundreisen mit Fahrer von Gästen aus Europa. Live-Feedback und TripAdvisor. Sicher planen und jetzt anfragen.',
      keywords: 'Kundenbewertungen Sri Lanka, Bewertungen Privatreise, Sundown Tours',
    },
    destKandy: {
      title: 'Kandy Sri Lanka | Zahntempel & Hügelland',
      description:
        'Kandy entdecken: Zahntempel, See und Tor zum Hügelland auf privaten Rundreisen mit Fahrer. Praktische Tipps. Jetzt anfragen für Ihr Datum.',
      keywords: 'Kandy Sri Lanka, Zahntempel, Hügelland Rundreise mit Fahrer',
    },
  },
  fr: {
    home: {
      title: 'Circuits privés Sri Lanka avec chauffeur | 5-10 jours',
      description:
        'Circuits privés Sri Lanka avec chauffeur pour voyageurs d’Europe. Itinéraires 5-10 jours, rythme flexible. Équipe depuis 1992. Demandez un devis.',
      keywords: 'circuits privés Sri Lanka, circuit avec chauffeur, voyage Sri Lanka',
    },
    tours: {
      title: 'Circuits privés Sri Lanka | 4-10 jours chauffeur',
      description:
        'Comparez les circuits privés Sri Lanka de 4 à 10 jours avec chauffeur, safari et plage. Sur mesure, sans car de groupe. Demandez un devis.',
      keywords: 'circuits privés Sri Lanka, circuit 7 jours, chauffeur privé',
    },
  },
  nl: {
    home: {
      title: 'Privé rondreis Sri Lanka met chauffeur | 5-10 dagen',
      description:
        'Privé rondreizen Sri Lanka met chauffeur voor Europese reizigers. Routes van 5 tot 10 dagen. Team sinds 1992. Vraag vandaag een gratis offerte.',
      keywords: 'privé rondreis Sri Lanka, rondreis met chauffeur, Sri Lanka vakantie',
    },
    services: {
      title: 'Privéchauffeur & tourservices | Sri Lanka',
      description:
        'Rondreizen met chauffeur, vakanties op maat en dagtrips op Sri Lanka. Flexibel tempo, meet op de luchthaven. Sinds 1992. Vraag een offerte.',
      keywords: 'privéchauffeur Sri Lanka, rondreis met chauffeur, dagtrips',
    },
  },
  es: {
    home: {
      title: 'Circuito privado Sri Lanka con chofer | 5-10 días',
      description:
        'Circuitos privados Sri Lanka con chofer para viajeros europeos. Rutas de 5 a 10 días con conductor local. Equipo desde 1992. Pide un presupuesto.',
      keywords: 'circuito privado Sri Lanka, chofer privado, viaje Sri Lanka',
    },
    services: {
      title: 'Chofer privado y servicios de tour | Sri Lanka',
      description:
        'Circuitos con chofer, vacaciones a medida y excursiones de un día en Sri Lanka. Ritmo flexible, meet aeropuerto. Desde 1992. Pide un presupuesto.',
      keywords: 'chofer Sri Lanka, circuito a medida, excursión de un día, servicio privado',
    },
    about: {
      title: 'Sobre Sundown Tours | Privados desde 1992',
      description:
        'Sundown Tours organiza circuitos privados con chofer en Sri Lanka desde 1992. Equipo local para viajeros europeos. Pide un presupuesto gratis hoy.',
      keywords: 'Sundown Tours, circuitos privados Sri Lanka, chofer desde 1992',
    },
    contact: {
      title: 'Contacto Sundown Tours | Presupuesto Sri Lanka',
      description:
        'Planifica un circuito privado Sri Lanka con chofer. Envía fechas y estilo; respondemos casi siempre en un día. Desde 1992. Pide un presupuesto.',
      keywords: 'contacto Sri Lanka, presupuesto circuito privado, chofer',
    },
    guides: {
      title: 'Guías de viaje Sri Lanka | Consejos tour privado',
      description:
        'Guías prácticas: mejor época, consejos de chofer privado y bases de visado para Europa. Planifica mejor. Pide un presupuesto. Rutas a medida.',
      keywords: 'guías Sri Lanka, mejor época, chofer privado, visado ETA',
    },
  },
  pl: {
    home: {
      title: 'Wycieczka prywatna Sri Lanka z kierowcą | 5-10 dni',
      description:
        'Prywatne wycieczki Sri Lanka z kierowcą dla podróżnych z Europy. Trasy 5-10 dni z lokalnym kierowcą. Zespół od 1992. Zapytaj o bezpłatną ofertę.',
      keywords: 'wycieczka prywatna Sri Lanka, z kierowcą, objazd Sri Lanka',
    },
  },
  it: {
    home: {
      title: 'Tour privato Sri Lanka con autista | 5-10 giorni',
      description:
        'Tour privati Sri Lanka con autista per viaggiatori europei. Itinerari da 5 a 10 giorni con autista locale. Team dal 1992. Richiedi un preventivo.',
      keywords: 'tour privato Sri Lanka, autista privato, itinerario Sri Lanka',
    },
    marketItaly: {
      title: 'Tour privato Sri Lanka dall’Italia | autista',
      description:
        'Tour privati Sri Lanka per viaggiatori dall’Italia: con autista, itinerari flessibili, team locale dal 1992. Richiedi un preventivo. Pianifica con fiducia.',
      keywords: 'tour Sri Lanka dall’Italia, autista privato, viaggio Sri Lanka',
    },
  },
};

/** Ordered replacements restoring diacritics / native spelling (non-tour pages). */
const DIACRITIC_FIXES = {
  de: [
    [/Löwenfelsen/g, 'Löwenfelsen'],
    [/Lowenfelsen/g, 'Löwenfelsen'],
    [/Höhlen/g, 'Höhlen'],
    [/Hohlen/g, 'Höhlen'],
    [/für /g, 'für '],
    [/ fur /g, ' für '],
    [/Fur /g, 'Für '],
    [/^Fur /g, 'Für '],
    [/über /g, 'über '],
    [/ uber /g, ' über '],
    [/Uber /g, 'Über '],
    [/Österreich/g, 'Österreich'],
    [/Osterreich/g, 'Österreich'],
    [/Gäste/g, 'Gäste'],
    [/Gaeste/g, 'Gäste'],
    [/maßgeschneiderte/g, 'maßgeschneiderte'],
    [/massgeschneiderte/g, 'maßgeschneiderte'],
    [/Südküste/g, 'Südküste'],
    [/Sudkuste/g, 'Südküste'],
    [/Übernachtung/g, 'Übernachtung'],
    [/Ubernachtung/g, 'Übernachtung'],
    [/Bestätigung/g, 'Bestätigung'],
    [/Bestatigung/g, 'Bestätigung'],
    [/anfragen fur/g, 'anfragen für'],
    [/Jetzt anfragen fur/g, 'Jetzt anfragen für'],
  ],
  fr: [
    [/Circuits privés/g, 'Circuits privés'],
    [/circuits privés/g, 'circuits privés'],
    [/Circuit privé/g, 'Circuit privé'],
    [/circuit privé/g, 'circuit privé'],
    [/Tour prive/g, 'Tour privé'],
    [/tour prive/g, 'tour privé'],
    [/ prive /g, ' privé '],
    [/privee/g, 'privée'],
    [/privés/g, 'privés'],
    [/prives/g, 'privés'],
    [/journée/g, 'journée'],
    [/journee/g, 'journée'],
    [/itinéraires/g, 'itinéraires'],
    [/itineraires/g, 'itinéraires'],
    [/montée/g, 'montée'],
    [/montee/g, 'montée'],
    [/aéroport/g, 'aéroport'],
    [/aeroport/g, 'aéroport'],
    [/côte /g, 'côte '],
    [/cote /g, 'côte '],
    [/thé /g, 'thé '],
    [/ d Europe/g, ' d’Europe'],
    [/d Europe/g, 'd’Europe'],
    [/à /g, 'à '],
    [/ a Yala/g, ' à Yala'],
    [/ a Sigiriya/g, ' à Sigiriya'],
    [/ a partir/g, ' à partir'],
    [/Équipe/g, 'Équipe'],
    [/Equipe/g, 'Équipe'],
    [/répondez|repond/g, (m) => m],
  ],
  it: [
    [/città/g, 'città'],
    [/citta/g, 'città'],
    [/è /g, 'è '],
    [/perché/g, 'perché'],
    [/giornata/g, 'giornata'],
  ],
  es: [
    [/excursiónes/gi, 'excursiones'],
    [/Excursion\b/g, 'Excursión'],
    [/excursion\b/g, 'excursión'],
    [/\bdías\b/g, 'días'],
    [/\bdias\b/g, 'días'],
    [/\bDía\b/g, 'Día'],
    [/\bdía\b/g, 'día'],
    [/\bDia\b/g, 'Día'],
    [/\bdia\b/g, 'día'],
    [/también/g, 'también'],
    [/tambien/g, 'también'],
    [/huéspedes/g, 'huéspedes'],
    [/huespedes/g, 'huéspedes'],
    [/Guías/g, 'Guías'],
    [/Guias/g, 'Guías'],
    [/guías/g, 'guías'],
    [/guias/g, 'guías'],
    [/época/g, 'época'],
    [/epoca/g, 'época'],
    [/práctica/g, 'práctica'],
    [/practica\b/g, 'práctica'],
    [/Envía/g, 'Envía'],
    [/Envia/g, 'Envía'],
    [/vehículo/g, 'vehículo'],
    [/vehiculo/g, 'vehículo'],
    [/hábitos/g, 'hábitos'],
    [/habitos/g, 'hábitos'],
    [/asesoría/g, 'asesoría'],
    [/asesoria/g, 'asesoría'],
    [/Dónde/g, 'Dónde'],
    [/Donde/g, 'Dónde'],
    [/más /g, 'más '],
    [/ mas /g, ' más '],
  ],
  pl: [
    [/z kierowcą/g, 'z kierowcą'],
    [/z kierowca/g, 'z kierowcą'],
    [/kierowcą/g, 'kierowcą'],
    [/podróżnych/g, 'podróżnych'],
    [/podroznych/g, 'podróżnych'],
    [/gości/g, 'gości'],
    [/gosci/g, 'gości'],
    [/zespół/g, 'zespół'],
    [/zespol/g, 'zespół'],
    [/bezpłatn/g, 'bezpłatn'],
    [/bezplatn/g, 'bezpłatn'],
    [/ofertę/g, 'ofertę'],
    [/o oferte/g, 'o ofertę'],
    [/ofercie/g, 'ofercie'],
    [/wzgórza/g, 'wzgórza'],
    [/wzgorza/g, 'wzgórza'],
    [/Świątynia/g, 'Świątynia'],
    [/Swiatynia/g, 'Świątynia'],
  ],
  nl: [
    [/Privé/g, 'Privé'],
    [/Prive /g, 'Privé '],
    [/ prive /g, ' privé '],
    [/^Prive /g, 'Privé '],
    [/privéchauffeur/g, 'privéchauffeur'],
    [/privechauffeur/g, 'privéchauffeur'],
    [/België/g, 'België'],
    [/Belgie/g, 'België'],
    [/één /g, 'één '],
  ],
  ru: [],
};

function applyDiacritics(locale, text) {
  if (locale === 'en' || !text) return text;
  let out = text;
  for (const [re, rep] of DIACRITIC_FIXES[locale] || []) {
    if (typeof rep === 'function') continue;
    out = out.replace(re, rep);
  }
  // FR: bare "prive" leftovers
  if (locale === 'fr') {
    out = out.replace(/\bprive\b/g, 'privé');
    out = out.replace(/\bPrive\b/g, 'Privé');
  }
  if (locale === 'nl') {
    out = out.replace(/\bprive\b/g, 'privé');
    out = out.replace(/\bPrive\b/g, 'Privé');
  }
  if (locale === 'de') {
    out = out.replace(/\bfur\b/g, 'für');
    out = out.replace(/\bFur\b/g, 'Für');
  }
  return out;
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const copy = deepClone(SEO_CTR_COPY);

for (const [locale, pages] of Object.entries(TOUR_OVERRIDES)) {
  for (const [pageId, row] of Object.entries(pages)) {
    copy[locale][pageId] = {
      title: fitTitle(row.title),
      description: fitDesc(row.description, 140, 155, locale),
      keywords: row.keywords,
    };
  }
}

for (const [locale, pages] of Object.entries(HUB_OVERRIDES)) {
  for (const [pageId, row] of Object.entries(pages)) {
    copy[locale][pageId] = {
      title: fitTitle(row.title),
      description: fitDesc(row.description, 140, 155, locale),
      keywords: row.keywords,
    };
  }
}

// Strip English fitDesc pads that may have leaked into localized copy, then re-fit.
for (const locale of Object.keys(copy)) {
  if (locale === 'en') continue;
  for (const pageId of Object.keys(copy[locale])) {
    let d = copy[locale][pageId].description;
    d = d
      .replace(/\s*Plan with confidence\.?/gi, '')
      .replace(/\s*Tailor-made pacing\.?/gi, '')
      .replace(/\s*Licensed since 1992\.?/gi, '')
      .replace(/\s*Local team on the ground\.?/gi, '')
      .replace(/\s*Private chauffeur included\.?/gi, '')
      .replace(/\s*Airport meet on request\.?/gi, '')
      .replace(/\s*Reply usually within a day\.?/gi, '')
      .replace(/\s*Book your dates today\.?/gi, '')
      .replace(/\s*Get a free quote( today)?\.?/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
    copy[locale][pageId].description = fitDesc(d, 140, 155, locale);
  }
}

// Diacritics on all non-EN, non-overridden-already pages (and re-apply on overrides for safety)
for (const locale of Object.keys(copy)) {
  if (locale === 'en') continue;
  for (const pageId of Object.keys(copy[locale])) {
    const row = copy[locale][pageId];
    row.title = applyDiacritics(locale, row.title);
    row.description = applyDiacritics(locale, row.description);
    row.keywords = applyDiacritics(locale, row.keywords);
    // Re-fit after diacritic length changes (UTF-16 length)
    if (row.title.length > 60) {
      throw new Error(`${locale}.${pageId} title ${row.title.length}: ${row.title}`);
    }
    if (row.description.length < 140 || row.description.length > 155) {
      row.description = fitDesc(row.description, 140, 155, locale);
    }
  }
}

// Non-EN must not contain $ prices
for (const locale of Object.keys(copy)) {
  if (locale === 'en') continue;
  for (const [pageId, row] of Object.entries(copy[locale])) {
    if (/\$\s?\d/.test(row.title + row.description)) {
      throw new Error(`${locale}.${pageId} has $ price (forbidden for non-EN)`);
    }
  }
}

validateCopy(copy);

// Uniqueness for tour set
const TOUR_IDS = Object.keys(TOUR_OVERRIDES.en);
for (const locale of Object.keys(copy)) {
  const titles = new Map();
  const descs = new Map();
  for (const id of TOUR_IDS) {
    const t = copy[locale][id].title;
    const d = copy[locale][id].description;
    if (titles.has(t)) throw new Error(`${locale}: duplicate tour title ${titles.get(t)} & ${id}`);
    if (descs.has(d)) throw new Error(`${locale}: duplicate tour desc ${descs.get(d)} & ${id}`);
    titles.set(t, id);
    descs.set(d, id);
  }
}

const header = `import { fileURLToPath } from 'node:url';

/**
 * SEO CTR copy for Sundown Tours — private chauffeur Sri Lanka tours.
 * Titles <= 60 chars; descriptions 140-155 chars (JS string length / UTF-16 code units).
 * Native diacritics required for de/fr/it/es/pl/nl. EN tour prices = per-person from tour-prices.static.
 * @typedef {{ title: string, description: string, keywords: string }} SeoCtrPage
 * @typedef {Record<string, SeoCtrPage>} SeoCtrLocale
 * @type {Record<'en'|'de'|'fr'|'it'|'es'|'pl'|'ru'|'nl', SeoCtrLocale>}
 */
export const SEO_CTR_COPY = `;

function esc(str) {
  return JSON.stringify(str);
}

let body = '{\n';
for (const locale of Object.keys(copy)) {
  body += `  ${locale}: {\n`;
  for (const [pageId, row] of Object.entries(copy[locale])) {
    body += `    ${pageId}: {\n`;
    body += `      title: ${esc(row.title)},\n`;
    body += `      description: ${esc(row.description)},\n`;
    body += `      keywords: ${esc(row.keywords)},\n`;
    body += `    },\n`;
  }
  body += `  },\n`;
}
body += '};\n';

const footer = `
/** Throws if any title > 60 or description outside 140-155 (inclusive). */
export function assertSeoCtrCopy(copy = SEO_CTR_COPY) {
  const locales = Object.keys(copy);
  const DIACRITIC_LOCALES = new Set(['de', 'fr', 'it', 'es', 'pl', 'nl']);
  const hasNonAscii = (s) => /[^\\u0000-\\u007f]/.test(s);
  for (const locale of locales) {
    const pages = copy[locale];
    if (!pages || typeof pages !== 'object') {
      throw new Error(\`SEO_CTR_COPY.\${locale}: missing locale block\`);
    }
    const titles = new Map();
    const descs = new Map();
    for (const [pageId, row] of Object.entries(pages)) {
      if (!row || typeof row !== 'object') {
        throw new Error(\`SEO_CTR_COPY.\${locale}.\${pageId}: missing page\`);
      }
      const title = row.title;
      const description = row.description;
      if (typeof title !== 'string') {
        throw new Error(\`SEO_CTR_COPY.\${locale}.\${pageId}: title must be a string\`);
      }
      if (typeof description !== 'string') {
        throw new Error(\`SEO_CTR_COPY.\${locale}.\${pageId}: description must be a string\`);
      }
      if (title.length > 60) {
        throw new Error(
          \`SEO_CTR_COPY.\${locale}.\${pageId}: title length \${title.length} > 60 ("\${title}")\`,
        );
      }
      if (description.length < 140 || description.length > 155) {
        throw new Error(
          \`SEO_CTR_COPY.\${locale}.\${pageId}: description length \${description.length} outside 140-155 ("\${description}")\`,
        );
      }
      if (titles.has(title)) {
        throw new Error(
          \`SEO_CTR_COPY.\${locale}: duplicate title for \${titles.get(title)} and \${pageId}\`,
        );
      }
      titles.set(title, pageId);
      if (descs.has(description)) {
        throw new Error(
          \`SEO_CTR_COPY.\${locale}: duplicate description for \${descs.get(description)} and \${pageId}\`,
        );
      }
      descs.set(description, pageId);
          const blob = \`\${title} \${description} \${row.keywords || ''}\`;
      const bad =
        (locale === 'de' && /\\bfur\\b|\\bFur\\b|\\bOsterreich\\b|\\bGaeste\\b|\\bHohlen\\b|\\bLowenfelsen\\b|\\bSudkuste\\b/i.test(blob)) ||
        (locale === 'fr' && /\\bprive\\b|\\bprives\\b|\\bprivee\\b|\\bjournee\\b|\\baeroport\\b|\\bmontee\\b/i.test(blob)) ||
        (locale === 'nl' && /\\bprive\\b|\\bPrive\\b|\\bprivechauffeur\\b|\\bBelgie\\b/.test(blob)) ||
        (locale === 'es' && /\\bdias\\b|\\bdia\\b|\\bExcursion\\b|\\bexcursion\\b|\\btambien\\b|\\bhuespedes\\b/i.test(blob)) ||
        (locale === 'pl' && /z kierowca\\b|\\bpodroznych\\b|\\bgosci\\b|\\bzespol\\b|\\bbezplatn|\\boferte\\b/i.test(blob)) ||
        (locale === 'it' && /\\bcitta\\b|\\bperche\\b/i.test(blob));
      if (bad) {
        throw new Error(
          \`SEO_CTR_COPY.\${locale}.\${pageId}: missing expected diacritics in SEO copy\`,
        );
      }
      if (locale === 'ru' && !/[\\u0400-\\u04FF]/.test(\`\${title}\${description}\`)) {
        throw new Error(\`SEO_CTR_COPY.ru.\${pageId}: expected Cyrillic characters\`);
      }
      if (locale !== 'en' && /Plan with confidence|Tailor-made pacing|Licensed since 1992\\. Get a free quote/i.test(blob)) {
        throw new Error(\`SEO_CTR_COPY.\${locale}.\${pageId}: English pad leaked into localized copy\`);
      }
      if (locale !== 'en' && /\\$\\s?\\d/.test(\`\${title}\${description}\`)) {
        throw new Error(\`SEO_CTR_COPY.\${locale}.\${pageId}: $ price not allowed outside EN\`);
      }
    }
  }
}

const isMain =
  process.argv[1] &&
  fileURLToPath(import.meta.url) === process.argv[1];

if (isMain) {
  const tourPages = [
    'tour2ey',
    'tour2ek',
    'tour4',
    'tour5',
    'tour6',
    'tour7',
    'tour8',
    'tour10',
    'ellaDay',
    'galleDay',
    'kandyDay',
    'sigiriyaDay',
  ];
  console.log('locale\\tpageId\\ttitleLen\\tdescLen\\ttitle');
  for (const locale of Object.keys(SEO_CTR_COPY)) {
    for (const pageId of tourPages) {
      const row = SEO_CTR_COPY[locale][pageId];
      console.log(
        \`\${locale}\\t\${pageId}\\t\${row.title.length}\\t\${row.description.length}\\t\${row.title}\`,
      );
    }
  }
  assertSeoCtrCopy();
  console.log('\\nassertSeoCtrCopy: OK');
}
`;

const outPath = join(root, 'scripts/seo-ctr-copy.mjs');
writeFileSync(outPath, header + body + footer, 'utf8');
console.log('Wrote', outPath);
console.log('Tour pp prices:', Object.fromEntries(TOUR_IDS.map((id) => [id, pp(id)])));

const { assertSeoCtrCopy: assertFresh } = await import(`${outPath}?t=${Date.now()}`);
assertFresh();
console.log('Rebuild assert OK');
