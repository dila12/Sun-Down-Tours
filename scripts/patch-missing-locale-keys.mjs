/**
 * Insert missing high-impact UI keys into locale content files.
 * New copy avoids hyphenated compounds between words (user SEO request).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'src/app/i18n/content');

const PATCHES = {
  de: {
    tourUiExtra: `
      bookNow: 'Diese Tour buchen',
      chatWhatsApp: 'Per WhatsApp chatten',
      trustFreeCancel: 'Kostenlose Stornierung',
      trustPayLater: 'Spater zahlen',
      trustLocal: 'Lokales Team seit 1992',
      reviewsTripAdvisor: 'TripAdvisor Bewertungen lesen',
      mobileBookBar: 'Bereit zu buchen?',`,
    homePopular: `
    popular: {
      title: 'Beliebte Sri Lanka Rundreisen',
      tour7: '7 Tage Sri Lanka Rundreise',
      tour8: '8 Tage Privatreise',
      ellaDay: 'Ella Tagesausflug',
      sigiriyaDay: 'Sigiriya Tagesausflug',
    },`,
    notFound: `
  notFound: {
    title: 'Seite nicht gefunden',
    breadcrumb: '404',
    heading: 'Diese Seite wurde nicht gefunden',
    body: 'Der Link ist veraltet, falsch geschrieben oder die Seite wurde verschoben. Nutzen Sie die Links unten, um Ihre private Sri Lanka Reise weiter zu planen.',
    ctaHome: 'Zur Startseite',
    ctaTours: 'Reisepakete ansehen',
    ctaContact: 'Kontakt aufnehmen',
    helpfulLinks: 'Hilfreiche Links',
    linkDriver: 'Privater Fahrer Guide',
  },`,
  },
  fr: {
    tourUiExtra: `
      bookNow: 'Reserver ce circuit',
      chatWhatsApp: 'Discuter sur WhatsApp',
      trustFreeCancel: 'Annulation gratuite',
      trustPayLater: 'Payer plus tard',
      trustLocal: 'Equipe locale depuis 1992',
      reviewsTripAdvisor: 'Lire les avis TripAdvisor',
      mobileBookBar: 'Pret a reserver ?',`,
    homePopular: `
    popular: {
      title: 'Circuits Sri Lanka populaires',
      tour7: 'Circuit Sri Lanka 7 jours',
      tour8: 'Circuit prive 8 jours',
      ellaDay: 'Excursion Ella journee',
      sigiriyaDay: 'Excursion Sigiriya journee',
    },`,
    notFound: `
  notFound: {
    title: 'Page introuvable',
    breadcrumb: '404',
    heading: 'Nous n avons pas trouve cette page',
    body: 'Le lien est peut etre obsolete, mal tape ou la page a ete deplacee. Utilisez les liens ci dessous pour continuer a preparer votre circuit prive au Sri Lanka.',
    ctaHome: 'Retour a l accueil',
    ctaTours: 'Voir les circuits',
    ctaContact: 'Nous contacter',
    helpfulLinks: 'Liens utiles',
    linkDriver: 'Chauffeur guide prive',
  },`,
  },
  it: {
    tourUiExtra: `
      bookNow: 'Prenota questo tour',
      chatWhatsApp: 'Chatta su WhatsApp',
      trustFreeCancel: 'Cancellazione gratuita',
      trustPayLater: 'Paga dopo',
      trustLocal: 'Team locale dal 1992',
      reviewsTripAdvisor: 'Leggi le recensioni TripAdvisor',
      mobileBookBar: 'Pronto a prenotare?',`,
    homePopular: `
    popular: {
      title: 'Tour Sri Lanka piu richiesti',
      tour7: 'Tour Sri Lanka 7 giorni',
      tour8: 'Tour privato 8 giorni',
      ellaDay: 'Escursione giornaliera Ella',
      sigiriyaDay: 'Escursione giornaliera Sigiriya',
    },`,
    notFound: `
  notFound: {
    title: 'Pagina non trovata',
    breadcrumb: '404',
    heading: 'Non abbiamo trovato questa pagina',
    body: 'Il link puo essere vecchio, scritto male o la pagina e stata spostata. Usa i link qui sotto per continuare a pianificare il tuo tour privato in Sri Lanka.',
    ctaHome: 'Torna alla home',
    ctaTours: 'Vedi i pacchetti tour',
    ctaContact: 'Contattaci',
    helpfulLinks: 'Link utili',
    linkDriver: 'Autista guida privato',
  },`,
  },
  es: {
    tourUiExtra: `
      bookNow: 'Reservar este circuito',
      chatWhatsApp: 'Chatear por WhatsApp',
      trustFreeCancel: 'Cancelacion gratuita',
      trustPayLater: 'Pagar despues',
      trustLocal: 'Equipo local desde 1992',
      reviewsTripAdvisor: 'Leer opiniones en TripAdvisor',
      mobileBookBar: 'Listo para reservar?',`,
    homePopular: `
    popular: {
      title: 'Circuitos Sri Lanka populares',
      tour7: 'Circuito Sri Lanka 7 dias',
      tour8: 'Circuito privado 8 dias',
      ellaDay: 'Excursion Ella un dia',
      sigiriyaDay: 'Excursion Sigiriya un dia',
    },`,
    notFound: `
  notFound: {
    title: 'Pagina no encontrada',
    breadcrumb: '404',
    heading: 'No encontramos esa pagina',
    body: 'El enlace puede estar desactualizado, mal escrito o la pagina se ha movido. Use los enlaces de abajo para seguir planificando su circuito privado por Sri Lanka.',
    ctaHome: 'Volver al inicio',
    ctaTours: 'Ver paquetes de viaje',
    ctaContact: 'Contactenos',
    helpfulLinks: 'Enlaces utiles',
    linkDriver: 'Conductor guia privado',
  },`,
    restaurantsExplore: `
  restaurantsExplore: {
    h1: 'Donde comer en Sri Lanka: costa y Sundown Beach Restaurant',
    breadcrumb: 'Restaurantes',
    intro:
      'Comer bien en Sri Lanka no depende de una sola lista de mejores restaurantes. Depende de la costa, la hora del dia y cuanto quiere desplazarse despues de cenar. El rice and curry es el plato diario tierra adentro; el marisco a la parrilla define el sur y el oeste; Galle Fort mezcla salones coloniales con buen cafe. Esta pagina explica donde comen de verdad los viajeros en un circuito privado y muestra la carta completa de Sundown Beach Restaurant en Waskaduwa, nuestra cocina costera entre Colombo y Galle.',
    aroundTitle: 'Como funciona la comida en un circuito por Sri Lanka',
    aroundBody:
      'En un circuito con chauffeur, el almuerzo suele ser un rice and curry elegido por limpieza y ritmo, no una parada larga de restaurante. La cena es donde usted elige: hotel, grill de playa o el pueblo donde duerme. Confirme si el marisco se cobra por kilo antes de pedir pescado entero o cangrejo, la sorpresa de cuenta mas comun en la costa sur.\\n\\nLos vegetarianos comen bien si piden currys de verduras sin pescado Maldive; los veganos deben decirlo con claridad. Beba agua embotellada. Propine del 5 al 10 por ciento solo si el servicio no esta incluido.',
    westTitle: 'Costa oeste: Negombo, Kalutara y Waskaduwa',
    westBody:
      'La costa oeste es donde aterrizan la mayoria de vuelos europeos, asi que la primera y la ultima comida del viaje suelen ser aqui. Negombo tiene grills turisticos cerca de la playa; Colombo tiene hoteles y buenos rice and curry locales. Entre Kalutara y Waskaduwa el pescado es del dia: atun, seer, gambas y cangrejo.\\n\\nSundown Beach Restaurant esta en este tramo (No 302, Mahawaskaduwa, Waskaduwa). Los viajeros de nuestros circuitos privados suelen parar a almorzar marisco o a cenar antes de salir de CMB. Horario de 8:00 a 22:00 todos los dias; reserve en +94 70 629 3585.',
    southTitle: 'Costa sur y Galle Fort',
    southBody:
      'Unawatuna, Mirissa y Tangalle destacan por pescado a la parrilla con lima, chile y mantequilla de ajo. Dentro de Galle Fort, casas holandesas sirven cocina cingalesa con tecnica internacional; los precios suben dentro de las murallas y la calidad suele ser fiable. Combine la manana en las murallas con el almuerzo en el fuerte o una cena mas tarde en la costa de Kalutara a Waskaduwa si vuelve al norte.\\n\\nPara un primer contacto con la comida (hoppers, kottu y niveles de picante) lea nuestra guia gastronómica. El menu de abajo es la carta real de Sundown Beach Restaurant, no una lista generica de toda la isla.',
    title: 'Explorar destinos y circuitos cercanos',
    lead: 'Sundown Beach Restaurant en Waskaduwa encaja bien con paradas del suroeste y excursiones de un dia: Galle Fort, playas del oeste e itinerarios privados con chauffeur.',
    contactCta: 'Planificar un circuito privado',
    faqTitle: 'Preguntas sobre restaurantes y Sundown Beach',
  },`,
  },
  pl: {
    tourUiExtra: `
      bookNow: 'Zarezerwuj ta wycieczke',
      chatWhatsApp: 'Napisz na WhatsApp',
      trustFreeCancel: 'Bezpłatne anulowanie',
      trustPayLater: 'Zaplac pozniej',
      trustLocal: 'Lokalny zespol od 1992',
      reviewsTripAdvisor: 'Przeczytaj opinie TripAdvisor',
      mobileBookBar: 'Gotowy do rezerwacji?',`,
    homePopular: `
    popular: {
      title: 'Popularne wycieczki Sri Lanka',
      tour7: '7 dniowa wycieczka Sri Lanka',
      tour8: '8 dniowa prywatna wycieczka',
      ellaDay: 'Wycieczka jednodniowa Ella',
      sigiriyaDay: 'Wycieczka jednodniowa Sigiriya',
    },`,
    notFound: `
  notFound: {
    title: 'Nie znaleziono strony',
    breadcrumb: '404',
    heading: 'Nie znalezlismy tej strony',
    body: 'Link moze byc nieaktualny, blednie wpisany albo strona zostala przeniesiona. Skorzystaj z linkow ponizej, aby dalej planowac prywatna wycieczke po Sri Lance.',
    ctaHome: 'Wroc na strone glowna',
    ctaTours: 'Zobacz pakiety wycieczek',
    ctaContact: 'Skontaktuj sie z nami',
    helpfulLinks: 'Przydatne linki',
    linkDriver: 'Prywatny kierowca przewodnik',
  },`,
    restaurantsExplore: `
  restaurantsExplore: {
    h1: 'Gdzie jesc na Sri Lance: wybrzeze i Sundown Beach Restaurant',
    breadcrumb: 'Restauracje',
    intro:
      'Dobre jedzenie na Sri Lance zalezy mniej od jednej listy najlepszych restauracji, a bardziej od wybrzeza, pory dnia i tego, jak daleko chcecie jezdzic po kolacji. Rice and curry to codziennosc w glębi lądu; grillowane owoce morza okreslaja poludnie i zachod; Galle Fort laczy kolonialne salony z dobrą kawa. Ta strona pokazuje, gdzie naprawde jedza podrozni na prywatnej wycieczce, a nizej jest pelne menu Sundown Beach Restaurant w Waskaduwa, naszej nadmorskiej kuchni miedzy Colombo a Galle.',
    aroundTitle: 'Jak wyglada jedzenie podczas wycieczki po Sri Lance',
    aroundBody:
      'Na wycieczce z kierowca przewodnikiem lunch to zwykle lokal z rice and curry wybrany pod katem czystosci i tempa, nie dlugi postoj w restauracji. Kolacja zalezy od Was: hotel, grill na plazie albo miasto, w ktorym spicie. Przed zamowieniem calej ryby lub kraba zapytajcie, czy owoce morza sa liczone za kilogram; to najczestsza niespodzianka na rachunku na poludniu.\\n\\nWegetarianie jedza latwo, jesli prosza o warzywne curry bez Maldive fish; weganie powinni powiedziec to wprost. Pijcie wode butelkowana. Napiwek 5 do 10 procent tylko gdy obsluga nie jest juz wliczona.',
    westTitle: 'Zachodnie wybrzeze: Negombo, Kalutara i Waskaduwa',
    westBody:
      'Zachodnie wybrzeze to miejsce, gdzie ląduje wiekszosc europejskich lotow, wiec pierwszy i ostatni posilek czesto jest tutaj. Negombo ma turystyczne grille przy plazy; Colombo ma hotele i mocne lokalne rice and curry. Miedzy Kalutara a Waskaduwa ryby sa lokalne: tuna, seer, krewetki i krab.\\n\\nSundown Beach Restaurant stoi na tym odcinku (No 302, Mahawaskaduwa, Waskaduwa). Goscie naszych prywatnych wycieczek czesto zatrzymuja sie na lunch z owocami morza albo na ostatnia kolacje przed wylotem z CMB. Godziny 8:00 do 22:00 codziennie; rezerwacja pod +94 70 629 3585.',
    southTitle: 'Poludniowe wybrzeze i Galle Fort',
    southBody:
      'Unawatuna, Mirissa i Tangalle sa najmocniejsze w prostej grillowanej rybie z limonka, chilli i maslem czosnkowym. W Galle Fort holenderskie domy serwuja kuchnie Sri Lanki z miedzynarodowa technika; ceny rosna w murach, jakosc zwykle jest pewna. Polaczcie poranek na walach z lunchem w forcie albo pozniejsza kolacja na odcinku Kalutara Waskaduwa, jesli jedziecie na polnoc.\\n\\nSzerszy przewodnik po jedzeniu (hoppers, kottu, poziomy ostrosci) znajdziecie w naszym przewodniku kulinarnym. Menu ponizej to aktualna karta Sundown Beach Restaurant, nie ogolna lista dla calej wyspy.',
    title: 'Odkryj pobliskie destynacje i wycieczki',
    lead: 'Sundown Beach Restaurant w Waskaduwa latwo laczy sie z postojami na poludniowym zachodzie i jednodniowymi wycieczkami: Galle Fort, plazami zachodnimi i prywatnymi trasami z kierowca.',
    contactCta: 'Zaplanuj prywatna wycieczke',
    faqTitle: 'Pytania o restauracje i Sundown Beach',
  },`,
  },
  ru: {
    tourUiExtra: `
      bookNow: 'Забронировать этот тур',
      chatWhatsApp: 'Написать в WhatsApp',
      trustFreeCancel: 'Бесплатная отмена',
      trustPayLater: 'Оплата позже',
      trustLocal: 'Местная команда с 1992 года',
      reviewsTripAdvisor: 'Читать отзывы TripAdvisor',
      mobileBookBar: 'Готовы забронировать?',`,
    homePopular: `
    popular: {
      title: 'Популярные туры по Шри Ланке',
      tour7: '7 дневный тур по Шри Ланке',
      tour8: '8 дневный индивидуальный тур',
      ellaDay: 'Однодневная экскурсия Элла',
      sigiriyaDay: 'Однодневная экскурсия Сигирия',
    },`,
    notFound: `
  notFound: {
    title: 'Страница не найдена',
    breadcrumb: '404',
    heading: 'Мы не нашли эту страницу',
    body: 'Ссылка устарела, написана с ошибкой или страница переехала. Используйте ссылки ниже, чтобы продолжить планирование частного тура по Шри Ланке.',
    ctaHome: 'На главную',
    ctaTours: 'Смотреть туры',
    ctaContact: 'Связаться с нами',
    helpfulLinks: 'Полезные ссылки',
    linkDriver: 'Частный водитель гид',
  },`,
  },
  nl: {
    notFound: `
  notFound: {
    title: 'Pagina niet gevonden',
    breadcrumb: '404',
    heading: 'We konden deze pagina niet vinden',
    body: 'De link is verouderd, verkeerd getypt of de pagina is verplaatst. Gebruik de links hieronder om uw prive rondreis door Sri Lanka verder te plannen.',
    ctaHome: 'Terug naar home',
    ctaTours: 'Bekijk tourpakketten',
    ctaContact: 'Neem contact op',
    helpfulLinks: 'Handige links',
    linkDriver: 'Prive chauffeur gids',
  },`,
    restaurantsExplore: `
  restaurantsExplore: {
    h1: 'Waar eten in Sri Lanka: kust en Sundown Beach Restaurant',
    breadcrumb: 'Restaurants',
    intro:
      'Goed eten in Sri Lanka hangt minder af van een enkele lijst met beste restaurants en meer van de kust, het tijdstip en hoe ver u na het diner wilt rijden. Rice and curry is het dagelijkse gerecht inland; gegrilde zeevruchten bepalen het zuiden en westen; Galle Fort mengt koloniale zalen met goede koffie. Deze pagina legt uit waar reizigers echt eten op een prive rondreis en toont het volledige menu van Sundown Beach Restaurant in Waskaduwa, onze kustkeuken tussen Colombo en Galle.',
    aroundTitle: 'Hoe eten werkt tijdens een Sri Lanka rondreis',
    aroundBody:
      'Op een rondreis met chauffeur gids is de lunch meestal een rice and curry zaak gekozen om netheid en tempo, geen lange restaurantstop. Bij het diner kiest u: hotelrestaurant, beach grill of het stadje waar u slaapt. Vraag of zeevruchten per kilo worden gerekend voordat u hele vis of krab bestelt; dat is de meest voorkomende rekeningverrassing aan de zuidkust.\\n\\nVegetariers eten makkelijk als u om groentecurrys zonder Maldive fish vraagt; veganisten moeten dat duidelijk zeggen. Drink water uit de fles. Fooi 5 tot 10 procent alleen als service niet al is inbegrepen.',
    westTitle: 'Westkust: Negombo, Kalutara en Waskaduwa',
    westBody:
      'Aan de westkust landen de meeste Europese vluchten, dus de eerste en laatste maaltijd van de reis zijn vaak hier. Negombo heeft toeristische grills bij het strand; Colombo heeft hotels en sterke lokale rice and curry. Tussen Kalutara en Waskaduwa is de vangst lokaal: tonijn, seer, garnalen en krab.\\n\\nSundown Beach Restaurant ligt op dit stuk (No 302, Mahawaskaduwa, Waskaduwa). Gasten op onze prive tours stoppen vaak voor een zeevruchtenlunch of een laatste diner voor vertrek vanaf CMB. Open van 8:00 tot 22:00 dagelijks; reserveer via +94 70 629 3585.',
    southTitle: 'Zuidkust en Galle Fort',
    southBody:
      'Unawatuna, Mirissa en Tangalle zijn sterk in eenvoudig gegrilde vis met limoen, chili en knoflookboter. Binnen Galle Fort serveren Hollandse huizen Sri Lankaanse kruiden met internationale techniek; prijzen stijgen binnen de muren, kwaliteit is meestal betrouwbaar. Combineer een ochtend op de wallen met lunch in het fort of later diner op de kust van Kalutara naar Waskaduwa als u noordwaarts gaat.\\n\\nVoor een bredere food primer (hoppers, kottu, pittigheid) lees onze Sri Lanka food guide. Het menu hieronder is de werkende kaart van Sundown Beach Restaurant, geen generieke eilandbrede lijst.',
    title: 'Ontdek nabije bestemmingen en tours',
    lead: 'Sundown Beach Restaurant in Waskaduwa past goed bij stops aan de zuidwestkust en dag tours: Galle Fort, westkuststranden en prive chauffeur itineraries.',
    contactCta: 'Plan een prive rondreis',
    faqTitle: 'Veelgestelde vragen over restaurants en Sundown Beach',
  },`,
  },
};

function patchTourUi(src, extra) {
  if (src.includes('bookNow:')) return src;
  const marker = /imageAlt:\s*'[^']*',\s*\n\s*previewAlt:\s*'[^']*',/;
  if (!marker.test(src)) throw new Error('tourUi previewAlt marker not found');
  return src.replace(marker, (m) => `${m}${extra}`);
}

function patchHomePopular(src, block) {
  if (src.includes('popular: {') && src.includes('tour7:')) return src;
  // Insert after home.intro block or before home.packages
  if (src.includes('\n    packages: {')) {
    return src.replace('\n    packages: {', `\n${block}\n    packages: {`);
  }
  throw new Error('home.packages marker not found');
}

function patchNotFound(src, block) {
  if (src.includes('\n  notFound: {')) return src;
  // Insert before cancellation or seo
  if (src.includes('\n  cancellation: {')) {
    return src.replace('\n  cancellation: {', `\n${block}\n  cancellation: {`);
  }
  if (src.includes('\n  seo: {')) {
    return src.replace('\n  seo: {', `\n${block}\n  seo: {`);
  }
  throw new Error('notFound insert marker not found');
}

function patchRestaurants(src, block) {
  if (src.includes('restaurantsExplore: {') && src.includes('aroundTitle:')) {
    // Replace thin restaurantsExplore object
    return src.replace(
      /restaurantsExplore:\s*\{[\s\S]*?\n  \},/,
      `${block.trim()},\n`,
    );
  }
  if (src.includes('\n  seo: {')) {
    return src.replace('\n  seo: {', `\n${block}\n  seo: {`);
  }
  throw new Error('restaurantsExplore insert marker not found');
}

for (const [locale, patch] of Object.entries(PATCHES)) {
  const file = join(dir, `${locale}.ts`);
  let src = readFileSync(file, 'utf8');
  const before = src;
  if (patch.tourUiExtra) src = patchTourUi(src, patch.tourUiExtra);
  if (patch.homePopular) src = patchHomePopular(src, patch.homePopular);
  if (patch.notFound) src = patchNotFound(src, patch.notFound);
  if (patch.restaurantsExplore) src = patchRestaurants(src, patch.restaurantsExplore);
  if (src !== before) {
    writeFileSync(file, src);
    console.log('patched', locale);
  } else {
    console.log('unchanged', locale);
  }
}
