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
        body: 'Sundown Tours is based in Sri Lanka. We do not sell airline tickets and we are not a Spanish wholesaler. We meet you at Colombo (CMB) with a licensed chauffeur guide and run a tailor made itinerary: Cultural Triangle, hill country, safari and beach.\n\nSearches such as “vuelos Sri Lanka”, Etihad or Qatar Airways are shopping for seats. Searches such as “viajar a Sri Lanka”, “viaje Sri Lanka”, “que ver en Sri Lanka” and “que hacer en Sri Lanka” are what we organise.',
      },
      {
        id: 'where',
        title: 'Where is Sri Lanka?',
        body: 'Sri Lanka is an island in the Indian Ocean, just south of India. It is not next to the Maldives by road: a Maldives add on is a separate flight from Colombo (CMB), not a driving day. The island is compact enough that a private 7 to 10 day circuit can cover culture, tea country, safari and beach.',
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
        body: 'December to March is peak for west and south beaches (Negombo, Mirissa, Weligama, Galle). May to September often favours the east (Trincomalee, Pigeon Island) and is strong for Cultural Triangle sightseeing and dry season safari (Yala, Wilpattu, Minneriya, Udawalawe).\n\nSri Lanka is UTC+5:30. Time difference with Spain: 4 hours 30 minutes in winter, 3 hours 30 minutes during Spanish summer time. Currency is the Sri Lankan rupee (LKR).',
      },
      {
        id: 'whatToDo',
        title: 'What to see: Lion Rock, Kandy, Ella train, safari, beaches',
        body: 'A first visit typically includes Sigiriya Lion Rock, Dambulla, Kandy’s Temple of the Tooth, the Kandy to Ella tea country train, a jeep safari at Yala (or Wilpattu/Minneriya depending on dates), and a beach finish at Mirissa, Weligama or Galle. Buddhism is the majority religion; dress modestly at temples.\n\nSeven days covers the highlights. Ten days is calmer.',
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
    h1: 'Viajar a Sri Lanka desde Espana: vuelos, que ver y circuito privado',
    lead:
      'Quien busca viajar a Sri Lanka desde Espana suele querer tres respuestas: duracion del vuelo desde Madrid o Barcelona, mejor epoca (tiempo) y que ver sin un paquete de autobus. Esta pagina cubre el aeropuerto CMB, ETA, playas, Lion Rock, safari, tren y como funciona un circuito privado con chofer al aterrizar.',
    heroAlt: 'Circuito privado por Sri Lanka con chofer guia para viajeros desde Espana',
    sections: [
      {
        title: 'Viaje a Sri Lanka desde Espanacircuito privado, no un folleto de mayorista',
        body: 'Sundown Tours esta en Sri Lanka. No vendemos billetes de avion ni competimos con Etihad o Qatar Airways. Os recogemos en Colombo (CMB) con un chofer guia autorizado y montamos un itinerario a medida: Triangulo Cultural, pais del te, safari y playa.\n\nLas busquedas «vuelos Sri Lanka» o «SriLankan Airlines» buscan asiento. «Viajar a Sri Lanka», «viaje Sri Lanka», «que ver en Sri Lanka» y «que hacer en Sri Lanka» es lo que organizamos desde 1992.',
      },
      {
        title: 'Donde esta Sri Lanka?',
        body: 'Sri Lanka es una isla en el oceano Indico, al sur de la India. No esta unida por carretera a Maldivas: un tramo Maldivas es otro vuelo desde CMB, no una etapa en coche. La isla es lo bastante compacta para unir cultura, montana, safari y playa en 7 to 10 dias privados.',
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
        body: 'Diciembre to marzo es alta para playas del oeste y sur (Negombo, Mirissa, Weligama, Galle). Mayo to septiembre suele favorecer el este (Trincomalee, Pigeon Island) y el safari de estacion seca (Yala, Wilpattu, Minneriya, Udawalawe).\n\nHora en Sri Lanka: UTC+5:30. Diferencia con Espana: 4 h 30 en invierno, 3 h 30 en horario de verano. Moneda: rupia de Sri Lanka (LKR).',
      },
      {
        title: 'Que ver y que hacer: Lion Rock, tren, safari, playas',
        body: 'Un primer viaje suele incluir el Lion Rock de Sigiriya, Dambulla, el Templo del Diente en Kandy, el tren Kandy to Ella, un safari en jeep en Yala (o Wilpattu/Minneriya segun fechas) y un final de playa en Mirissa, Weligama o Galle. El budismo es mayoritario; vestid modestos en templos.\n\nSiete dias cubren lo esencial. Diez dias van mas holgados.',
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
        a: 'Sigiriya (Lion Rock), Dambulla, Kandy, tren a Ella, un safari (Yala, Wilpattu o Minneriya) y playa en Mirissa, Weligama o Galle. Siete a diez dias privados cubren eso sin autobus de grupo.',
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
