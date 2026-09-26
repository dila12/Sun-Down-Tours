import type { ArticleContent } from '../articles/types';

/**
 * Spain market landing page (pageId: marketSpain).
 * Targets ES Google Trends without competing with airlines or OTAs.
 */
export const SPAIN_FROM_ES_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Travel from Spain: Flights, What to See and Private Tours',
    lead:
      'Spanish travellers searching how to viajar a Sri Lanka usually want flight time from Madrid or Barcelona, when to go, and what to see without a rigid coach package. This page covers CMB airport, ETA, weather, Lion Rock, safari, train and how a private chauffeur tour works after you land.',
    heroImage: 'assets/img/package-2.webp',
    heroAlt: 'Private Sri Lanka tour with chauffeur guide for travellers from Spain',
    sections: [
      {
        id: 'who',
        title: 'A Sri Lanka trip from Spainprivate tour, not a brochure package',
        body: 'Sundown Tours is based in Sri Lanka. We do not sell airline tickets (not Etihad, not Turkish Airlines) and we are not a Spanish wholesaler. We meet you at Colombo (CMB) with a licensed chauffeur guide and run a tailor made itinerary: Cultural Triangle, kandy sri lanka, ella sri lanka, safari and beach.\n\nSearches such as sri lanka vuelos, vuelos sri lanka or vuelos a sri lanka are shopping for seats. Viajar a sri lanka, viaje sri lanka, viaje a sri lanka, que ver en sri lanka and que hacer en sri lanka are what we organise.',
      },
      {
        id: 'where',
        title: 'Where is Sri Lanka?',
        body: 'Sri Lanka is an island in the Indian Ocean, just south of India. Sri lanka pertenece a la india? No: it is an independent country. India sri lanka in travel searches often means geography or a two country trip; we run the island circuit, not cricket.\n\nIt is not next to the Maldives by road: sri lanka maldivas / sri lanka y maldivas is a separate flight from Colombo (CMB). Sri lanka mapa and sri lanka maps: we draw the private circuit; we are not a news site. Capital sri lanka / sri lanka capital: administrative Sri Jayawardenepura Kotte; travellers land in colombo sri lanka.',
      },
      {
        id: 'flight',
        title: 'Flights from Spain to Sri Lanka',
        body: 'There is usually no useful nonstop from Madrid or Barcelona. Typical air time is about 11 to 14 hours plus a Gulf or Istanbul connection (Doha, Abu Dhabi, Dubai and similar hubs appear in search because they are the usual change points). We do not quote airfares or sell Etihad/Qatar tickets.\n\nOnce you have dates, we quote the ground tour and plan the first hotel night around your real CMB landing, including overnight arrivals.',
      },
      {
        id: 'airport',
        title: 'Sri Lanka airport (CMB) vs Colombo city',
        body: 'Bandaranaike International Airport is at Katunayake, not downtown. Negombo is 20 to 40 minutes from the terminal and suits late Spanish arrivals. Colombo city is typically  45 to 90 minutes. Do not drive to Sigiriya the same night after a long haul landing unless you insist.',
      },
      {
        id: 'entry',
        title: 'Visa and ETA for Spanish passports',
        body: 'Spanish nationals need an Electronic Travel Authorisation (ETA) before boarding. From 25 May 2026 the tourist ETA is free for 40 listed countries including Spain, for 30 days with double entryyou still apply in advance at eta.gov.lk.\n\nKeep about six months’ passport validity. Apply only on the official site.',
      },
      {
        id: 'when',
        title: 'Best time, weather and clock',
        body: 'December to March is peak for west and south beaches (Negombo, Mirissa, Weligama, Galle). May to September often favours the east (Trincomalee, Pigeon Island) and is strong for Cultural Triangle sightseeing and dry season safari (Yala, Wilpattu, Minneriya, Udawalawe).\n\nMejor epoca para viajar a sri lanka depends on the coast. Tiempo sri lanka / tiempo en sri lanka / sri lanka weather: two monsoons. Hora sri lanka, sri lanka hora, que hora es en sri lanka, hora en sri lanka, hora sri lanka ahora, sri lanka time and time in sri lanka: UTC+5:30. Currency is LKR; we do not publish a live rupia sri lanka euro ticker.',
      },
      {
        id: 'whatToDo',
        title: 'What to see: Lion Rock, Kandy, Ella train, safari, beaches',
        body: 'A first visit typically includes Sigiriya Lion Rock, Dambulla, Kandy’s Temple of the Tooth (kandy sri lanka), the Kandy to Ella tea country train (ella sri lanka), a jeep safari sri lanka at Yala (or Wilpattu/Minneriya depending on dates), and playas sri lanka at Mirissa, Weligama or Galle. Buddhism is the majority religion; dress modestly at temples.\n\nSri lanka language on tour: Sinhala and Tamil official, English in tourism. Seven days covers the highlights. Ten days is calmer.',
      },
    ],
    faq: [
      {
        q: 'How long is the flight from Spain to Sri Lanka?',
        a: 'Typically about 11 to 14 hours in the air plus a connection. We do not sell tickets; we plan your first night around the real arrival at CMB.',
      },
      {
        q: 'What time is it in Sri Lanka compared with Spain?',
        a: 'Sri Lanka is UTC+5:30: 4 hours 30 minutes ahead of Spain in winter, 3 hours 30 minutes during Spanish summer time.',
      },
      {
        q: 'When is the best time to travel to Sri Lanka from Spain?',
        a: 'It depends on the coast. December to March for the south and west; May to September often better for the east, Cultural Triangle and dry season safari.',
      },
      {
        q: 'Where is Sri Lanka and what is the capital?',
        a: 'Donde esta sri lanka: island south of India, not part of India. Capital de sri lanka: Kotte administrative; colombo sri lanka is where you land.',
      },
    ],
    ctaTitle: 'Plan a private Sri Lanka trip from Spain',
    ctaBody: 'Send your Madrid or Barcelona flight dates and what you want to see. We reply with a tailor made chauffeur itinerary.',
    ctaLabel: 'Contact Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: '7 day private tour' },
      { pageId: 'tour10', label: '10 day tour' },
      { pageId: 'tour8', label: '8 days tour (Wilpattu)' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya Lion Rock' },
      { pageId: 'destDambulla', label: 'Dambulla' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destWeligama', label: 'Weligama' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destColombo', label: 'Colombo' },
      { pageId: 'destTrincomalee', label: 'Trincomalee' },
    ],
    relatedGuides: [
      { pageId: 'guideVisa', label: 'Visa / ETA' },
      { pageId: 'guideBestTime', label: 'When to go' },
      { pageId: 'guideSafari', label: 'Safari' },
      { pageId: 'guideTrainJourneys', label: 'Train' },
      { pageId: 'guideBeaches', label: 'Beaches' },
      { pageId: 'guideAirportTransfers', label: 'Airport transfer' },
    ],
  },
  es: {
    h1: 'Viajar a Sri Lanka desde Espana: viaje, que ver y circuito privado',
    lead:
      'Quien busca viajar a Sri Lanka desde Espana suele querer tres respuestas: duracion del vuelo desde Madrid o Barcelona, mejor epoca (tiempo) y que ver sin un paquete de autobus. Esta pagina cubre el aeropuerto CMB, ETA, playas, Lion Rock, safari, tren y como funciona un circuito privado con chofer al aterrizar.',
    heroAlt: 'Circuito privado por Sri Lanka con chofer guia para viajeros desde Espana',
    sections: [
      {
        title: 'Viaje a Sri Lanka desde Espanacircuito privado, no un folleto de mayorista',
        body: 'Sundown Tours esta en Sri Lanka. No vendemos sri lanka vuelos ni billetes Etihad o Turkish Airlines. Os recogemos en colombo sri lanka (CMB) con un chofer guia autorizado y montamos viaje sri lanka a medida: Triangulo Cultural, kandy sri lanka, ella sri lanka, safari sri lanka y playas sri lanka.\n\nLas busquedas vuelos sri lanka o vuelos a sri lanka buscan asiento. Viajar a sri lanka, viaje a sri lanka, viaje sri lanka, que ver en sri lanka y que hacer en sri lanka es lo que organizamos desde 1992.',
      },
      {
        title: 'Donde esta Sri Lanka?',
        body: 'Donde esta sri lanka: isla en el oceano Indico, al sur de la India. Sri lanka pertenece a la india? No: es un pais independiente. India sri lanka en busquedas de viaje suele ser geografia o un segundo destino; nosotros hacemos el circuito de la isla, no cricket ni sri lanka news.\n\nSri lanka maldivas y sri lanka y maldivas: otro vuelo desde CMB, no una etapa en coche. Sri lanka mapa y sri lanka maps: trazamos el circuito privado. Capital sri lanka, sri lanka capital y capital de sri lanka: administrativa Sri Jayawardenepura Kotte; aterrizais en colombo sri lanka.',
      },
      {
        title: 'Vuelos de Espana a Sri Lanka',
        body: 'Casi nunca hay un directo util desde Madrid o Barcelona. El tiempo en el aire suele ser unas 11 to 14 horas mas una conexion en el Golfo o Estambul (Doha, Abu Dabi, Dubai aparecen en las busquedas porque son escalas habituales). No cotizamos tarifas aereas ni vendemos billetes.\n\nCon fechas cerradas, cotizamos el circuito en tierra y calzamos la primera noche de hotel con la llegada real a CMB, incluidas las madrugadas.',
      },
      {
        title: 'Aeropuerto de Sri Lanka (CMB) y Colombo',
        body: 'El aeropuerto internacional Bandaranaike esta en Katunayake, no en el centro. Negombo queda a 20 to 40 minutos de la terminal y encaja con llegadas tardias desde Espana. Colombo ciudad suele llevar  45 to 90 minutos. Evitad Sigiriya la misma noche tras un vuelo largo, salvo que insistais.',
      },
      {
        title: 'Visado y ETA para pasaporte espanol',
        body: 'Los nacionales espanoles necesitan una Electronic Travel Authorisation (ETA) antes de embarcar. Desde el 25 de mayo de 2026 la ETA turistica es gratuita para 40 paises, incluida Espana, 30 dias con doble entrada: hay que solicitarla igual por adelantado en eta.gov.lk.\n\nPasaporte con unos seis meses de validez. Solo el sitio oficial.',
      },
      {
        title: 'Mejor epoca, tiempo y hora en Sri Lanka',
        body: 'Diciembre to marzo es alta para playas sri lanka del oeste y sur (Negombo, Mirissa, Weligama, Galle). Mayo to septiembre suele favorecer el este (Trincomalee, Pigeon Island) y el safari sri lanka de estacion seca (Yala, Wilpattu, Minneriya, Udawalawe).\n\nMejor epoca para viajar a sri lanka depende de la costa. Tiempo sri lanka, tiempo en sri lanka y sri lanka weather: dos monzones.\n\nHora sri lanka, sri lanka hora, que hora es en sri lanka, hora en sri lanka, hora sri lanka ahora, sri lanka time y time in sri lanka: UTC+5:30. Diferencia con Espana: 4 h 30 en invierno, 3 h 30 en verano. Rupia sri lanka euro y rupias sri lanka a euros cambian cada dia; no somos un ticker.',
      },
      {
        title: 'Que ver y que hacer: Lion Rock, tren, safari, playas',
        body: 'Un primer viaje suele incluir Sigiriya, Dambulla, kandy sri lanka (Templo del Diente), ella sri lanka (tren), safari sri lanka en Yala (o Wilpattu/Minneriya) y sri lanka playas en Mirissa, Weligama o Galle. El budismo es mayoritario; vestid modestos en templos.\n\nSri lanka language: cingales y tamil oficiales, ingles en turismo. Siete dias cubren lo esencial. Diez dias van mas holgados. Enchufe sri lanka: tipo D y G, ver guia de maleta.',
      },
    ],
    faq: [
      {
        q: 'Cuanto dura el vuelo de Espana a Sri Lanka?',
        a: 'Unas 11 to 14 horas en el aire mas una escala. No vendemos billetes; calzamos la primera noche con la llegada real a CMB.',
      },
      {
        q: 'Que hora es en Sri Lanka respecto a Espana?',
        a: 'Sri Lanka esta en UTC+5:30: 4 h 30 de adelanto en invierno y 3 h 30 durante el horario de verano espanol.',
      },
      {
        q: 'Cual es la mejor epoca para viajar a Sri Lanka?',
        a: 'Depende de la costa. Diciembre to marzo para sur y oeste; mayo to septiembre suele ir mejor para el este, el Triangulo Cultural y el safari de estacion seca.',
      },
      {
        q: 'Que ver en Sri Lanka en una primera visita?',
        a: 'Que ver en sri lanka y sri lanka que ver: Sigiriya, Dambulla, kandy sri lanka, tren a ella sri lanka, safari sri lanka y playas sri lanka. Siete a diez dias privados. Que hacer en sri lanka es el mismo circuito, no un paquete de autobus.',
      },
      {
        q: 'Donde esta Sri Lanka y cual es la capital?',
        a: 'Donde esta sri lanka: al sur de la India, oceano Indico. Sri lanka pertenece a la india? No. Capital de sri lanka / sri lanka capital: Kotte administrativo; colombo sri lanka es la llegada. Sri lanka mapa: el circuito lo dibujamos nosotros.',
      },
      {
        q: 'Que hora es en Sri Lanka y que idioma se habla?',
        a: 'Que hora es en sri lanka, hora sri lanka ahora y sri lanka hora: UTC+5:30. Sri lanka language: cingales y tamil; ingles en el circuito. Planificacion en espanol por WhatsApp.',
      },
      {
        q: 'Como va el cambio rupia sri lanka euro?',
        a: 'Rupias sri lanka a euros y rupia sri lanka euro varian cada dia. Pagad en LKR. Cotizamos el viaje a sri lanka en tierra, no un tipo de cambio en vivo.',
      },
      {
        q: 'Vendeis vuelos sri lanka o Etihad?',
        a: 'No. Sri lanka vuelos, vuelos sri lanka y vuelos a sri lanka los compra la aerolinea. Visado sri lanka / visa sri lanka: ETA en eta.gov.lk. Luego chofer en CMB.',
      },
    ],
    ctaTitle: 'Planificar un viaje privado a Sri Lanka desde Espana',
    ctaBody: 'Enviad fechas de vuelo desde Madrid o Barcelona y que quereis ver. Respondemos con un circuito de chofer a medida.',
    ctaLabel: 'Contactar con Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuito 7 dias' },
      { pageId: 'tour10', label: 'Circuito 10 dias' },
      { pageId: 'tour8', label: 'Circuito 8 dias (Wilpattu)' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Lion Rock (Sigiriya)' },
      { pageId: 'destDambulla', label: 'Dambulla' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destWeligama', label: 'Weligama' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destColombo', label: 'Colombo' },
      { pageId: 'destTrincomalee', label: 'Trincomalee' },
    ],
    relatedGuides: [
      { pageId: 'guideVisa', label: 'Visado / ETA' },
      { pageId: 'guideBestTime', label: 'Mejor epoca' },
      { pageId: 'guideSafari', label: 'Safari' },
      { pageId: 'guideTrainJourneys', label: 'Tren' },
      { pageId: 'guideBeaches', label: 'Playas' },
      { pageId: 'guideAirportTransfers', label: 'Traslado aeropuerto' },
    ],
  },
};
