import type { ArticleContent } from '../articles/types';

/**
 * Italy market landing page (pageId: marketItaly).
 * Targets IT Google Trends without competing with airlines or WeRoad group tours.
 */
export const ITALY_FROM_IT_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Travel from Italy: When to Go, Milan Flights and Private Tours',
    lead:
      'Italian travellers searching for a Sri Lanka viaggio usually want when to go, flight time from Milan, what to see and how a private tour worksnot a WeRoad group departure. This page covers CMB airport, ETA, August vs December weather, Lion Rock, safari and chauffeur itineraries after you land.',
    heroImage: 'assets/img/package-2.webp',
    heroAlt: 'Private Sri Lanka tour with chauffeur guide for travellers from Italy',
    sections: [
      {
        id: 'who',
        title: 'A Sri Lanka trip from Italyprivate tour, not a group brochure',
        body: 'Sundown Tours is based in Sri Lanka. We do not sell airline tickets and we are not WeRoad or Avventure nel Mondo. We meet you at Colombo (CMB) with a licensed chauffeur guide and run a tailor made itinerary: Cultural Triangle, hill country, safari and beach.\n\nSearches such as “voli Sri Lanka”, Etihad or Flydubai are shopping for seats. Searches such as “viaggio Sri Lanka”, “quando andare”, “cosa vedere” and “tour Sri Lanka” are what we organise. The island’s older name is Ceylon; that is history, not a separate destination.',
      },
      {
        id: 'where',
        title: 'Where is Sri Lanka and what is the capital?',
        body: 'Sri Lanka is an island in the Indian Ocean, south of India. A Maldives add on is a separate flight from CMB, not a driving day. The administrative capital is Sri Jayawardenepura Kotte; Colombo is the commercial gateway where almost all Italian flights land.',
      },
      {
        id: 'flight',
        title: 'Flights from Milan to Sri Lanka',
        body: 'There is usually no useful nonstop from Milan. Typical air time is about 10 to 13 hours plus a Gulf or Istanbul connection (Doha, Dubai, Abu Dhabi appear in search because they are common change points). We do not quote airfares or sell Etihad/Flydubai tickets.\n\nOnce you have dates, we quote the ground tour and plan the first hotel night around your real CMB landing.',
      },
      {
        id: 'airport',
        title: 'Sri Lanka airport vs Colombo city',
        body: 'Bandaranaike International Airport is at Katunayake, not downtown. Negombo is 20 to 40 minutes from the terminal and suits late Milan arrivals. Colombo city is typically  45 to 90 minutes. Do not drive to Sigiriya the same night after a long haul landing unless you insist.',
      },
      {
        id: 'entry',
        title: 'Visa and ETA for Italian passports',
        body: 'Italian nationals need an Electronic Travel Authorisation (ETA) before boarding. From 25 May 2026 the tourist ETA is free for 40 listed countries including Italy, for 30 days with double entryyou still apply in advance at eta.gov.lk.\n\nKeep about six months’ passport validity. Apply only on the official site.',
      },
      {
        id: 'when',
        title: 'When to go: weather, August, December',
        body: 'December to March is peak for west and south beaches (Negombo, Mirissa, Weligama, Galle). August (sri lanka ad agosto) often favours the east (Trincomalee, Pigeon Island, Arugam Bay) plus Cultural Triangle sightseeing and dry season safari (Yala, Udawalawe, Wilpattu, Minneriya). The southwest monsoon is the “meteo” people mean for Colombo and Galle in European summer.\n\nSri Lanka is UTC+5:30: 4 hours 30 minutes ahead of Italy in winter, 3 hours 30 minutes during Italian summer time. Currency is the Sri Lankan rupee (LKR); we do not publish a live euro rate.',
      },
      {
        id: 'whatToDo',
        title: 'What to see: Lion Rock, Ella, safari, beaches',
        body: 'A first visit typically includes Sigiriya Lion Rock, Kandy, the Kandy to Ella train, a jeep safari at Yala or Udawalawe, and a beach finish at Mirissa, Weligama or Galle. Check official Italian travel advice (Viaggiare Sicuri) and our safety guide for practical road and scam notes.\n\nSeven days covers the highlights. Ten days is calmer.',
      },
    ],
    faq: [
      {
        q: 'How long is the flight from Milan to Sri Lanka?',
        a: 'Typically about 10 to 13 hours in the air plus a connection. We do not sell tickets; we plan your first night around the real arrival at CMB.',
      },
      {
        q: 'Is August a good time to visit Sri Lanka from Italy?',
        a: 'Yes for the Cultural Triangle, Kandy and the east coast. It is weaker for a week of southwest beach weather. See our August guide.',
      },
      {
        q: 'When is the best time to go to Sri Lanka?',
        a: 'December to March for south and west beaches; May to September often better for the east and dry season safari.',
      },
    ],
    ctaTitle: 'Plan a private Sri Lanka trip from Italy',
    ctaBody: 'Send your Milan flight dates and what you want to see. We reply with a tailor made chauffeur itinerary.',
    ctaLabel: 'Contact Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: '7 day private tour' },
      { pageId: 'tour10', label: '10 day tour' },
      { pageId: 'tour8', label: '8 days tour (Wilpattu)' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya Lion Rock' },
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
      { pageId: 'guideBestTime', label: 'When to go / weather' },
      { pageId: 'guideVisa', label: 'Visa / ETA' },
      { pageId: 'guideSafety', label: 'Travel safety' },
      { pageId: 'guideSafari', label: 'Safari' },
      { pageId: 'guideBeaches', label: 'Beaches' },
      { pageId: 'monthAugust', label: 'Sri Lanka in August' },
    ],
  },
  it: {
    h1: 'Viaggio Sri Lanka dall’Italia: quando andare, volo Milano e tour privato',
    lead:
      'Chi cerca un viaggio in Sri Lanka dall’Italia vuole di solito quando andare, la durata del volo da Milano, cosa vedere e come funziona un tour privatonon una partenza di gruppo WeRoad. Questa pagina copre aeroporto CMB, ETA, agosto e dicembre, Lion Rock, safari e itinerario con autista dopo l’atterraggio.',
    heroAlt: 'Tour privato in Sri Lanka con autista guida per viaggiatori dall’Italia',
    sections: [
      {
        title: 'Viaggio Sri Lanka dall’Italiatour privato, non brochure di gruppo',
        body: 'Sundown Tours e in Sri Lanka. Non vendiamo biglietti aerei e non siamo WeRoad ne Avventure nel Mondo. Vi aspettiamo a Colombo (CMB) con un autista guida autorizzato e costruiamo un itinerario su misura: Triangolo Culturale, paese del te, safari e mare.\n\nLe ricerche «voli Sri Lanka», Etihad o Flydubai riguardano il posto in aereo. «Viaggio Sri Lanka», «quando andare», «cosa vedere» e «tour Sri Lanka» e cio che organizziamo dal 1992. L’altro nome storico dell’isola e Ceylon: e storia, non una destinazione diversa.',
      },
      {
        title: 'Dove si trova lo Sri Lanka e qual e la capitale',
        body: 'Lo Sri Lanka e un’isola nell’Oceano Indiano, a sud dell’India. Un prolungamento Maldive e un volo separato da CMB, non una tappa in auto. La capitale amministrativa e Sri Jayawardenepura Kotte; Colombo resta la porta commerciale dove atterrano quasi tutti i voli dall’Italia.',
      },
      {
        title: 'Volo Milano to Sri Lanka: durata',
        body: 'Di solito non c’e un diretto utile da Milano. In aria sono circa 10 to 13 ore piu uno scalo nel Golfo o a Istanbul (Doha, Dubai, Abu Dhabi compaiono nei trend perche sono scali comuni). Non quotiamo tariffe aeree ne vendiamo Etihad o Flydubai.\n\nCon le date chiuse, quotiamo il tour a terra e caliamo la prima notte d’hotel sull’arrivo reale a CMB.',
      },
      {
        title: 'Aeroporto Sri Lanka e Colombo',
        body: 'L’aeroporto internazionale Bandaranaike e a Katunayake, non in centro. Negombo e a 20 to 40 minuti dal terminal e va bene per arrivi tardi da Milano. Colombo citta richiede in genere  45 to 90 minuti. Evitate Sigiriya la stessa notte dopo un volo lungo, salvo che insistiate.',
      },
      {
        title: 'Visto e ETA per passaporto italiano',
        body: 'I cittadini italiani necessitano di un’Electronic Travel Authorisation (ETA) prima dell’imbarco. Dal 25 maggio 2026 l’ETA turistica e gratuita per 40 Paesi tra cui l’Italia, 30 giorni con doppio ingresso: va comunque richiesta in anticipo su eta.gov.lk.\n\nPassaporto con circa sei mesi di validita. Solo il sito ufficiale.',
      },
      {
        title: 'Quando andare: meteo, agosto, dicembre',
        body: 'Dicembre to marzo e il picco per mare ovest e sud (Negombo, Mirissa, Weligama, Galle). Agosto (Sri Lanka ad agosto) spesso favorisce l’est (Trincomalee, Pigeon Island, Arugam Bay), il Triangolo Culturale e il safari di stagione secca (Yala, Udawalawe, Wilpattu, Minneriya). Il monsone sud ovest e il «meteo» che si intende per Colombo e Galle in estate europea.\n\nOra in Sri Lanka: UTC+5:30, 4 h 30 avanti in inverno, 3 h 30 con l’ora legale italiana. Valuta: rupia srilankese (LKR). Non pubblichiamo un euro rate in tempo reale: cambiate in banca a Colombo o Negombo, non al peggior cambio aeroportuale.',
      },
      {
        title: 'Cosa vedere: Lion Rock, Ella, safari, spiagge',
        body: 'Un primo viaggio include di solito il Lion Rock di Sigiriya, Kandy, il treno Kandy to Ella, un safari in jeep a Yala o Udawalawe e un finale al mare a Mirissa, Weligama o Galle. Consultate anche Viaggiare Sicuri (MAECI) e la nostra guida pratica su strade e truffe.\n\nSette giorni coprono i punti forti. Dieci giorni sono piu comodi.',
      },
    ],
    faq: [
      {
        q: 'Quanto dura il volo da Milano allo Sri Lanka?',
        a: 'Circa 10 to 13 ore in aria piu uno scalo. Non vendiamo biglietti; caliamo la prima notte sull’arrivo reale a CMB.',
      },
      {
        q: 'Sri Lanka ad agosto: conviene?',
        a: 'Si per Triangolo Culturale, Kandy e costa est. Piu debole per una settimana di mare a sud ovest. Vedete la guida di agosto.',
      },
      {
        q: 'Qual e il periodo migliore / quando andare in Sri Lanka?',
        a: 'Dicembre to marzo per spiagge sud e ovest; maggio to settembre spesso meglio per l’est e il safari di stagione secca.',
      },
      {
        q: 'Cosa vedere in Sri Lanka al primo viaggio?',
        a: 'Sigiriya (Lion Rock), Kandy, treno per Ella, un safari (Yala, Udawalawe, Wilpattu o Minneriya) e mare a Mirissa, Weligama o Galle. Sette dieci giorni privati coprono questo senza pullman di gruppo.',
      },
    ],
    ctaTitle: 'Pianificare un viaggio privato in Sri Lanka dall’Italia',
    ctaBody: 'Inviate le date del volo da Milano e cosa volete vedere. Rispondiamo con un itinerario autista su misura.',
    ctaLabel: 'Contattare Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour 7 giorni' },
      { pageId: 'tour10', label: 'Tour 10 giorni' },
      { pageId: 'tour8', label: 'Tour 8 giorni (Wilpattu)' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Lion Rock (Sigiriya)' },
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
      { pageId: 'guideBestTime', label: 'Quando andare / meteo' },
      { pageId: 'guideVisa', label: 'Visto / ETA' },
      { pageId: 'guideSafety', label: 'Viaggiare sicuri' },
      { pageId: 'guideSafari', label: 'Safari' },
      { pageId: 'guideBeaches', label: 'Spiagge' },
      { pageId: 'monthAugust', label: 'Sri Lanka ad agosto' },
    ],
  },
};
