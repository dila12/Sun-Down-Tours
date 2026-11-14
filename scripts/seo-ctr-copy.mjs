import { fileURLToPath } from 'node:url';

/**
 * SEO CTR copy for Sundown Tours — private chauffeur Sri Lanka tours.
 * Titles <= 60 chars; descriptions 140-155 chars (JS string length / UTF-16 code units).
 * Native diacritics required for de/fr/it/es/pl/nl. EN tour prices = per-person from tour-prices.static.
 * @typedef {{ title: string, description: string, keywords: string }} SeoCtrPage
 * @typedef {Record<string, SeoCtrPage>} SeoCtrLocale
 * @type {Record<'en'|'de'|'fr'|'it'|'es'|'pl'|'ru'|'nl', SeoCtrLocale>}
 */
export const SEO_CTR_COPY = {
  en: {
    home: {
      title: "Private Sri Lanka Tours with Driver | 5-10 Day Itineraries",
      description: "Private chauffeur Sri Lanka tours for European travellers. Choose 5-10 day itineraries with a local driver. Licensed since 1992. Get a free quote.",
      keywords: "private Sri Lanka tours, Sri Lanka with driver, chauffeur tour Sri Lanka, 7 day Sri Lanka itinerary, private driver Sri Lanka",
    },
    tours: {
      title: "Sri Lanka Private Tour Packages | 4-10 Days with Driver",
      description: "Compare private Sri Lanka tour packages from 4 to 10 days with chauffeur guide, safari and beach time. Tailor-made, not group coaches. Get a free quote.",
      keywords: "Sri Lanka tour packages, private Sri Lanka tour, round tour with driver, 7 day Sri Lanka tour, 10 day itinerary",
    },
    services: {
      title: "Private Chauffeur & Tour Services | Sri Lanka",
      description: "Private chauffeur tours, tailor-made holidays and day trips across Sri Lanka. Local drivers, flexible pacing, airport meet. Since 1992. Get a free quote.",
      keywords: "Sri Lanka chauffeur service, private driver Sri Lanka, tailor made tours, day trips Sri Lanka",
    },
    about: {
      title: "About Sundown Tours | Private Sri Lanka Since 1992",
      description: "Sundown Tours has planned private chauffeur holidays in Sri Lanka since 1992. Local team, European travellers, tailor-made routes. Get a free quote.",
      keywords: "Sundown Tours, Sri Lanka tour operator, private tours since 1992, local chauffeur guide",
    },
    contact: {
      title: "Contact Sundown Tours | Free Quote for Sri Lanka",
      description: "Plan a private Sri Lanka tour with chauffeur. Tell us dates and style; we reply with a free quote, usually within a day. Licensed team since 1992.",
      keywords: "contact Sri Lanka tour, free quote Sri Lanka tour, book private chauffeur Sri Lanka",
    },
    tour7: {
      title: "7-Day Private Sri Lanka Tour | Wilpattu & Mirissa",
      description: "Wilpattu safari, Sigiriya, Kandy, Ella and Mirissa beach with optional whale watching. 4-star hotels. From $788 per person. Get a free quote.",
      keywords: "7 day Sri Lanka tour, Wilpattu Mirissa itinerary, private chauffeur tour",
    },
    tour10: {
      title: "10-Day Private Sri Lanka Tour | Full Island Circuit",
      description: "Full-island highlights: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella and Hikkaduwa beach days. From $1100 per person. Get a free quote today.",
      keywords: "10 day Sri Lanka tour, full island private circuit, Hikkaduwa beach itinerary",
    },
    tour8: {
      title: "8-Day Private Sri Lanka Tour | Yala & Mirissa Beach",
      description: "Pidurangala, Sigiriya, Kandy, tea country, Ella, Yala safari and Mirissa beach nights. From $995 per person. Free cancel up to 14 days. Get a free quote.",
      keywords: "8 day Sri Lanka tour, Yala and Mirissa beach, private island itinerary",
    },
    tour6: {
      title: "6-Day Private Sri Lanka Tour | Yala Safari & Beach",
      description: "Sigiriya, Kandy, tea hills, Yala safari and south-west beach time with 4-star hotels. From $750 per person. Free cancel up to 14 days. Get a free quote.",
      keywords: "6 day Sri Lanka tour, Yala safari and beach, private tour with driver",
    },
    tour5: {
      title: "5-Day Private Sri Lanka Tour | Tea Country & Coast",
      description: "Sigiriya, Kandy, Nuwara Eliya tea country, Ella and a south-coast finish with Madu River. 4-star hotels. From $700 per person. Get a free quote.",
      keywords: "5 day Sri Lanka tour, Nuwara Eliya tea country, private chauffeur itinerary",
    },
    tour4: {
      title: "4-Day Private Sri Lanka Tour | Kandy, Ella & Yala",
      description: "Kandy culture, Ella hills and Yala safari, then Galle or Bentota south coast. From $650 per person. Free cancel up to 14 days. Get a free quote.",
      keywords: "4 day Sri Lanka tour, Kandy Ella Yala, private safari tour with driver",
    },
    tour2ek: {
      title: "2-Day Private Sri Lanka Tour | Ella & Kandy",
      description: "Short hill-country trip: Udawalawa, Ella highlights, then Kandy Temple of the Tooth with private driver. From $285 per person. Get a free quote today.",
      keywords: "2 day Ella Kandy tour, private hill country Sri Lanka, Temple of the Tooth tour",
    },
    tour2ey: {
      title: "2-Day Private Sri Lanka Tour | Ella & Yala Safari",
      description: "Ella hills plus a private Yala jeep safari weekend with chauffeur and 4-star hotel stay. From $275 per person. Free cancel up to 14 days. Get a free quote.",
      keywords: "2 day Ella Yala safari, private Yala tour, Ella safari weekend Sri Lanka",
    },
    ellaDay: {
      title: "Ella Day Tour with Private Driver | Nine Arch",
      description: "Private Ella day tour: Nine Arch Bridge, Little Adams Peak and Ravana Falls with chauffeur. From $175 per person. Free quote. Payment later available.",
      keywords: "Ella day tour, Nine Arch Bridge private tour, Little Adams Peak chauffeur",
    },
    galleDay: {
      title: "Galle Day Tour with Private Driver | Dutch Fort",
      description: "Private Galle day tour: Dutch Fort walls, lighthouse and south-coast stops with chauffeur. From $95 per person. Get a free quote. Payment later.",
      keywords: "Galle day tour, Galle Fort private tour, south coast Sri Lanka chauffeur",
    },
    kandyDay: {
      title: "Kandy Day Tour with Private Driver | Tooth Temple",
      description: "Private Kandy day tour: Temple of the Tooth, viewpoint and city highlights with chauffeur. From $125 per person. Get a free quote. Plan with confidence.",
      keywords: "Kandy day tour, Temple of the Tooth private tour, Kandy chauffeur",
    },
    sigiriyaDay: {
      title: "Sigiriya Day Tour with Private Driver | Lion Rock",
      description: "Private Sigiriya day: Lion Rock or Pidurangala, Dambulla caves and village life with chauffeur. From $133 per person. Get a free quote. Since 1992.",
      keywords: "Sigiriya day tour, Lion Rock private tour, Dambulla caves day trip",
    },
    destinations: {
      title: "Sri Lanka Destinations | Ella, Sigiriya, Yala",
      description: "Explore Sri Lanka destinations for private tours: Ella, Sigiriya, Yala, Kandy, Galle and Mirissa. Local tips for chauffeur itineraries. Get a free quote.",
      keywords: "Sri Lanka destinations, Ella Sigiriya Yala, private tour places, Galle Mirissa Kandy",
    },
    guides: {
      title: "Sri Lanka Travel Guides | Private Tour Tips",
      description: "Practical Sri Lanka travel guides: best time to visit, private driver tips and visa basics for European travellers. Plan smarter. Get a free quote.",
      keywords: "Sri Lanka travel guide, best time Sri Lanka, private driver tips, Sri Lanka visa guide",
    },
    destElla: {
      title: "Ella Sri Lanka | Nine Arch Bridge & Hills",
      description: "Plan Ella with Nine Arch Bridge, Little Adams Peak and tea country for a private day or multi-day stay. Chauffeur tips. Get a free quote. Local guides.",
      keywords: "Ella Sri Lanka, Nine Arch Bridge, Little Adams Peak, Ella private tour",
    },
    destSigiriya: {
      title: "Sigiriya Sri Lanka | Lion Rock & Dambulla",
      description: "Visit Sigiriya Lion Rock and nearby Dambulla on a private chauffeur day or round tour. Climb tips, timing and pacing. Get a free quote. Local guides.",
      keywords: "Sigiriya Sri Lanka, Lion Rock, Dambulla caves, private Sigiriya tour",
    },
    destYala: {
      title: "Yala National Park | Private Safari Tips",
      description: "Plan a Yala jeep safari on a private Sri Lanka tour: leopard odds, gate timing and how we pair safari with Ella or the coast. Get a free quote.",
      keywords: "Yala National Park, Yala safari, leopard safari Sri Lanka, private safari tour",
    },
    destKandy: {
      title: "Kandy Sri Lanka | Temple of the Tooth Guide",
      description: "Discover Kandy: Temple of the Tooth, lake views and hill-country gateway stops on private chauffeur tours. Practical visit tips. Get a free quote.",
      keywords: "Kandy Sri Lanka, Temple of the Tooth, Kandy private tour, hill country gateway",
    },
    destGalle: {
      title: "Galle Fort Sri Lanka | Private Coast Stops",
      description: "Explore Galle Fort ramparts, lighthouse and nearby south-coast beaches on a private day tour or multi-day chauffeur circuit. Get a free quote.",
      keywords: "Galle Fort, Galle Sri Lanka, south coast private tour, Galle day trip",
    },
    destMirissa: {
      title: "Mirissa Sri Lanka | Beach & Whale Season",
      description: "Mirissa beach time, whale-watching season notes and how private tours link Mirissa with Galle or a south-coast stay. Get a free quote. Tailor-made routes.",
      keywords: "Mirissa Sri Lanka, Mirissa beach, whale watching Mirissa, south coast tour",
    },
    guideBestTime: {
      title: "Best Time to Visit Sri Lanka | Season Guide",
      description: "When to visit Sri Lanka by coast and hills: dry windows, monsoon notes and how private tours shift routes by month. Get a free quote for dates.",
      keywords: "best time to visit Sri Lanka, Sri Lanka weather, monsoon travel, dry season tours",
    },
    guidePrivateDriver: {
      title: "Private Driver Sri Lanka | Chauffeur Guide",
      description: "What a private chauffeur in Sri Lanka includes: vehicle, pacing, hotel drops and how European guests usually travel. Get a free quote. Private chauffeur.",
      keywords: "private driver Sri Lanka, chauffeur guide Sri Lanka, private tour with driver",
    },
    guideVisa: {
      title: "Sri Lanka Visa & ETA Guide for Travellers",
      description: "Sri Lanka ETA and entry basics for European travellers: what to prepare before a private tour. Practical notes, not legal advice. Get a free quote.",
      keywords: "Sri Lanka visa, Sri Lanka ETA, entry requirements Europe, travel documents",
    },
    testimonials: {
      title: "Guest Reviews | Sundown Tours Sri Lanka",
      description: "Read real guest reviews of our private Sri Lanka chauffeur tours from European travellers. Live feedback and TripAdvisor links. Plan with confidence.",
      keywords: "Sundown Tours reviews, Sri Lanka private tour reviews, chauffeur tour testimonials",
    },
    cancellation: {
      title: "Cancellation Policy | Sundown Tours Sri Lanka",
      description: "Our cancellation terms for private Sri Lanka tours. Free cancellation is typically available up to 14 days before start. Read details, then get a free.",
      keywords: "Sri Lanka tour cancellation, free cancellation 14 days, Sundown Tours policy",
    },
    restaurants: {
      title: "Where to Eat in Sri Lanka | Coast Dining Tips",
      description: "Where travellers eat on private Sri Lanka tours: coast seafood, rice and curry stops, plus Sundown Beach Restaurant in Waskaduwa. Get a free quote.",
      keywords: "Sri Lanka restaurants, Sundown Beach Restaurant, where to eat Sri Lanka tour",
    },
    marketNetherlands: {
      title: "Sri Lanka Tours from the Netherlands",
      description: "Private Sri Lanka tours for travellers from the Netherlands: chauffeur-driven, flexible days, airport meet. Since 1992. Get a free quote today.",
      keywords: "Sri Lanka vakantie Nederland, prive rondreis Sri Lanka, chauffeur Sri Lanka",
    },
    marketGermany: {
      title: "Sri Lanka Tours from Germany | Private Driver",
      description: "Private Sri Lanka Rundreisen for travellers from Germany: mit Fahrer, flexible days, local planning since 1992. Jetzt anfragen for a free quote.",
      keywords: "Sri Lanka Rundreise Deutschland, Privatreise mit Fahrer, Sri Lanka Tour Germany",
    },
    marketFrance: {
      title: "Sri Lanka Tours from France | Private Driver",
      description: "Circuits prives Sri Lanka for travellers from France: avec chauffeur, flexible pacing, local team since 1992. Demandez un devis today. Licensed local team.",
      keywords: "circuit Sri Lanka France, voyage prive chauffeur, Sri Lanka tour from France",
    },
    marketItaly: {
      title: "Sri Lanka Tours from Italy | Private Driver",
      description: "Tour privati Sri Lanka for travellers from Italy: con autista, flexible itineraries, local team since 1992. Get a free quote for your dates.",
      keywords: "tour Sri Lanka Italia, viaggio privato con autista, Sri Lanka from Italy",
    },
    marketSpain: {
      title: "Sri Lanka Tours from Spain | Private Driver",
      description: "Circuitos privados Sri Lanka for travellers from Spain: con chofer, flexible days, local planning since 1992. Get a free quote for your trip.",
      keywords: "viaje Sri Lanka Espana, circuito privado chofer, Sri Lanka from Spain",
    },
    marketPoland: {
      title: "Sri Lanka Tours from Poland | Private Driver",
      description: "Private Sri Lanka tours for travellers from Poland: z kierowca, flexible days, local team since 1992. Get a free quote for your itinerary. Since 1992.",
      keywords: "wycieczka Sri Lanka Polska, prywatna wycieczka z kierowca, Sri Lanka Poland",
    },
    marketRussia: {
      title: "Sri Lanka Tours from Russia | Private Driver",
      description: "Private Sri Lanka tours for travellers from Russia: with driver, flexible routes, local team since 1992. Get a free quote for your dates. Since 1992.",
      keywords: "tour Sri Lanka Russia, private driver Sri Lanka, Sri Lanka from Russia",
    },
    marketUK: {
      title: "Sri Lanka Tours from the UK | Private Driver",
      description: "Private Sri Lanka tours for UK travellers: chauffeur guided itineraries, flexible days, local team since 1992. Get a free quote for your trip.",
      keywords: "Sri Lanka holidays UK, private driver Sri Lanka, Sri Lanka tour from UK",
    },
  },
  de: {
    home: {
      title: "Privatreise Sri Lanka mit Fahrer | 5-10 Tage",
      description: "Private Rundreise Sri Lanka mit Fahrer für Reisende aus Europa. 5–10 Tage flexibel geplant. Team seit 1992. Jetzt anfragen für ein Angebot. Team seit 1992.",
      keywords: "Privatreise Sri Lanka, Rundreise mit Fahrer, Sri Lanka Urlaub privat",
    },
    tours: {
      title: "Sri Lanka Rundreisen privat | 4-10 Tage mit Fahrer",
      description: "Private Sri Lanka Rundreisen von 4 bis 10 Tagen mit Fahrer, Safari und Strand. Keine Gruppenbusse. Seit 1992. Jetzt anfragen für Ihr Datum. Team seit 1992.",
      keywords: "Sri Lanka Rundreisen, Privatreise mit Fahrer, 7 Tage Sri Lanka",
    },
    services: {
      title: "Privater Chauffeur & Tour-Service | Sri Lanka",
      description: "Privatreisen mit Fahrer, maßgeschneiderte Rundreisen und Tagesausfluge auf Sri Lanka. Flexibles Tempo, Flughafentransfer. Jetzt anfragen. Flexibel planen.",
      keywords: "Chauffeur Sri Lanka, privater Fahrer, maßgeschneiderte Tour, Tagesausflug Sri Lanka",
    },
    about: {
      title: "Über Sundown Tours | Privatreisen seit 1992",
      description: "Sundown Tours plant seit 1992 private Rundreisen mit Fahrer auf Sri Lanka. Lokales Team für europaische Gaste. Jetzt anfragen für Ihr Angebot.",
      keywords: "Sundown Tours, Sri Lanka Reiseveranstalter, Privatreise seit 1992, lokaler Fahrer",
    },
    contact: {
      title: "Kontakt Sundown Tours | Angebot Sri Lanka",
      description: "Planen Sie eine Privatreise Sri Lanka mit Fahrer. Senden Sie Daten und Wünsche; wir antworten meist binnen eines Tages. Jetzt anfragen für ein Angebot.",
      keywords: "Kontakt Sri Lanka Reise, Angebot Privatreise, Fahrer buchen",
    },
    tour7: {
      title: "7 Tage Privatreise | Wilpattu & Mirissa",
      description: "Wilpattu-Safari, Sigiriya, Kandy, Ella und Mirissa mit Walbeobachtung optional. 4-Sterne-Hotels, privater Fahrer. Jetzt Angebot anfragen. Team seit 1992.",
      keywords: "7 Tage Sri Lanka Rundreise, Wilpattu Mirissa, Privatreise mit Fahrer",
    },
    tour10: {
      title: "10 Tage Privatreise | Ganze Insel-Highlights",
      description: "Inselrundreise: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella und Hikkaduwa-Strandtage. Privater Fahrer seit 1992. Jetzt Angebot anfragen. Team seit 1992.",
      keywords: "10 Tage Sri Lanka Rundreise, Inselrundreise mit Fahrer, Hikkaduwa Strand",
    },
    tour8: {
      title: "8 Tage Privatreise | Yala & Mirissa-Strand",
      description: "Pidurangala, Sigiriya, Kandy, Teeland, Ella, Yala-Safari und Mirissa-Strandnächte. Mit Fahrer. Kostenlos stornieren bis 14 Tage. Anfragen. Team seit 1992.",
      keywords: "8 Tage Sri Lanka Rundreise, Yala Mirissa Strand, Privatreise mit Fahrer",
    },
    tour6: {
      title: "6 Tage Privatreise | Yala-Safari & Strand",
      description: "Sigiriya, Kandy, Teeland, Yala-Safari und Südwest-Strand mit 4-Sterne-Hotels und Fahrer. Kostenlos stornieren bis 14 Tage. Jetzt anfragen. Team seit 1992.",
      keywords: "6 Tage Sri Lanka Rundreise, Yala Safari Strand, Privatreise mit Fahrer",
    },
    tour5: {
      title: "5 Tage Privatreise | Teeland & Küste",
      description: "Sigiriya, Kandy, Nuwara Eliya, Ella und Südküste mit Madu-River – 4-Sterne-Hotels und privater Fahrer. Ideal als Kurzurlaub. Jetzt anfragen.",
      keywords: "5 Tage Sri Lanka Rundreise, Nuwara Eliya Teeland, Privatreise mit Fahrer",
    },
    tour4: {
      title: "4 Tage Privatreise | Kandy, Ella & Yala",
      description: "Kandy-Kultur, Ella-Teeland und Yala-Safari, danach Galle oder Bentota an der Südküste. Mit Fahrer. Kostenlos stornieren bis 14 Tage. Anfragen.",
      keywords: "4 Tage Sri Lanka Rundreise, Kandy Ella Yala, Privatreise mit Fahrer",
    },
    tour2ek: {
      title: "2 Tage Privatreise | Ella & Kandy",
      description: "Kurze Bergland-Tour: Udawalawa, Ella-Highlights und Kandys Zahntempel mit privatem Fahrer. Flexibles Tempo. Jetzt unverbindlich anfragen. Team seit 1992.",
      keywords: "2 Tage Ella Kandy, Privatreise Sri Lanka, Zahntempel Kandy Tour",
    },
    tour2ey: {
      title: "2 Tage Privatreise | Ella & Yala-Safari",
      description: "Kurztrip mit Fahrer: Ella-Berge und private Yala-Jeepsafari, Übernachtung im 4-Sterne-Hotel. Kostenlos stornieren bis 14 Tage. Jetzt anfragen.",
      keywords: "Ella Yala Safari, 2 Tage Sri Lanka Safari, Privatreise mit Fahrer",
    },
    ellaDay: {
      title: "Ella Tagesausflug mit Fahrer | Nine Arch",
      description: "Privater Ella-Tag: Nine Arch Bridge, Little Adam’s Peak und Ravana Falls mit Fahrer. Flexibles Tempo. Jetzt anfragen für Ihr Datum. Team seit 1992 vor Ort.",
      keywords: "Ella Tagesausflug, Nine Arch Bridge Tour, Privattour mit Fahrer",
    },
    galleDay: {
      title: "Galle Tagesausflug mit Fahrer | Fort",
      description: "Privater Galle-Tag: niederländisches Fort, Leuchtturm und Südküste mit Fahrer. Ideal ab Colombo oder Strandhotel. Jetzt anfragen. Team seit 1992 vor Ort.",
      keywords: "Galle Tagesausflug, Galle Fort Privattour, Südküste Sri Lanka Fahrer",
    },
    kandyDay: {
      title: "Kandy Tagesausflug mit Fahrer | Zahntempel",
      description: "Privater Kandy-Tag: Zahntempel, Aussichtspunkt und Stadt-Highlights mit Fahrer. Ideal als Kulturtag. Jetzt unverbindlich anfragen. Team seit 1992 vor Ort.",
      keywords: "Kandy Tagesausflug, Zahntempel Tour, Privattour Kandy mit Fahrer",
    },
    sigiriyaDay: {
      title: "Sigiriya Tagesausflug mit Fahrer | Löwenfelsen",
      description: "Privater Sigiriya-Tag: Löwenfelsen oder Pidurangala, Dambulla-Höhlen und Dorfleben mit Fahrer. Jetzt anfragen für Ihr Datum. Jetzt unverbindlich anfragen.",
      keywords: "Sigiriya Tagesausflug, Löwenfelsen Tour, Dambulla Höhlen Privattour",
    },
    destinations: {
      title: "Sri Lanka Ziele | Ella, Sigiriya, Yala, Galle",
      description: "Ziele für Ihre Privatreise: Ella, Sigiriya, Yala, Kandy, Galle und Mirissa. Tipps für Rundreisen mit Fahrer. Jetzt anfragen. Flexibel planen.",
      keywords: "Sri Lanka Ziele, Ella Sigiriya Yala, Privatreise Orte, Galle Mirissa",
    },
    guides: {
      title: "Sri Lanka Reisefuhrer | Tipps für Privatreisen",
      description: "Praktische Guides: beste Reisezeit, Tipps zum privaten Fahrer und Visa-Grundlagen für Europa. Besser planen. Jetzt anfragen. Lokales Team vor Ort.",
      keywords: "Sri Lanka Reisefuhrer, beste Reisezeit, privater Fahrer Tipps, Visa Sri Lanka",
    },
    destElla: {
      title: "Ella Sri Lanka | Nine Arch Bridge & Teeland",
      description: "Ella planen: Nine Arch Bridge, Little Adams Peak und Teeplantagen für Tagestour oder Mehrtagesstopp. Mit Fahrer. Jetzt anfragen. Flexibel planen.",
      keywords: "Ella Sri Lanka, Nine Arch Bridge, Little Adams Peak, Ella Privattour",
    },
    destSigiriya: {
      title: "Sigiriya Löwenfelsen | Guide mit privatem Fahrer",
      description: "Sigiriya Lion Rock und Dambulla privat mit Fahrer: Aufstieg, Timing und Tempo für Tages- oder Rundreise. Jetzt anfragen. Lokales Team vor Ort.",
      keywords: "Sigiriya Sri Lanka, Lion Rock, Dambulla Höhlen, Privattour Sigiriya",
    },
    destYala: {
      title: "Yala Nationalpark | Private Safari Tipps",
      description: "Yala-Jeepsafari auf Privatreise: Leoparden-Chancen, Gate-Zeiten und Kombination mit Ella oder Kuste. Jetzt anfragen für Ihr Datum. Seit 1992.",
      keywords: "Yala Nationalpark, Yala Safari, Leopard Safari Sri Lanka, Privatsafari",
    },
    destKandy: {
      title: "Kandy Sri Lanka | Zahntempel & Hügelland",
      description: "Kandy entdecken: Zahntempel, See und Tor zum Hügelland auf privaten Rundreisen mit Fahrer. Praktische Tipps. Jetzt anfragen für Ihr Datum. Team seit 1992.",
      keywords: "Kandy Sri Lanka, Zahntempel, Hügelland Rundreise mit Fahrer",
    },
    destGalle: {
      title: "Galle Fort Sri Lanka | Südküste privat",
      description: "Galle Fort, Leuchtturm und Südküste auf Tagesausflug oder Mehrtages-Rundreise mit Fahrer. Ruhiges Tempo. Jetzt anfragen. Fuer Gäste aus Europa.",
      keywords: "Galle Fort, Galle Sri Lanka, Südküste Privattour, Galle Tagesausflug",
    },
    destMirissa: {
      title: "Mirissa Sri Lanka | Strand & Walzeit",
      description: "Mirissa: Strandzeit, Walbeobachtungs-Saison und Anbindung an Galle oder Südküste auf Privatreisen. Jetzt anfragen für Ihr Datum. Flexibel planen.",
      keywords: "Mirissa Sri Lanka, Mirissa Strand, Wale Mirissa, Südküste Tour",
    },
    guideBestTime: {
      title: "Beste Reisezeit Sri Lanka | Saison-Guide",
      description: "Wann Sri Lanka bereisen: Trockenfenster je Kuste und Hügelland, Monsun-Hinweise und Routenwechsel. Jetzt anfragen für Ihre Daten. Fuer Gäste aus Europa.",
      keywords: "beste Reisezeit Sri Lanka, Wetter Sri Lanka, Monsun, Trockenzeit Tour",
    },
    guidePrivateDriver: {
      title: "Privater Fahrer Sri Lanka | Chauffeur-Guide",
      description: "Was ein privater Fahrer auf Sri Lanka umfasst: Fahrzeug, Tempo, Hotelstops und typische Ablaufe für Europa-Gaste. Jetzt anfragen. Lokales Team vor Ort.",
      keywords: "privater Fahrer Sri Lanka, Chauffeur Guide, Privatreise mit Fahrer",
    },
    guideVisa: {
      title: "Sri Lanka Visum & ETA | Kurz-Guide Europa",
      description: "ETA und Einreise-Basics für Reisende aus Europa vor einer Privatreise. Praktische Hinweise, keine Rechtsberatung. Jetzt anfragen. Fuer Gäste aus Europa.",
      keywords: "Sri Lanka Visum, Sri Lanka ETA, Einreise Europa, Reisedokumente",
    },
    testimonials: {
      title: "Kundenbewertungen | Sundown Tours Sri Lanka",
      description: "Echte Bewertungen unserer privaten Rundreisen mit Fahrer von Gästen aus Europa. Live-Feedback und TripAdvisor. Sicher planen und jetzt anfragen.",
      keywords: "Kundenbewertungen Sri Lanka, Bewertungen Privatreise, Sundown Tours",
    },
    cancellation: {
      title: "Stornobedingungen | Sundown Tours Sri Lanka",
      description: "Stornoregeln für private Sri Lanka Touren. Kostenlose Stornierung ist oft bis 14 Tage vor Start moglich. Details lesen, dann anfragen. Sicher planen.",
      keywords: "Storno Sri Lanka Tour, kostenlos stornieren 14 Tage, Sundown Tours Policy",
    },
    restaurants: {
      title: "Essen auf Sri Lanka | Kuste & Tour-Tipps",
      description: "Wo Gäste auf Privatreisen essen: Meeresfruchte an der Kuste, Reis und Curry, plus Sundown Beach Restaurant in Waskaduwa. Jetzt anfragen. Jetzt anfragen.",
      keywords: "Restaurants Sri Lanka, Sundown Beach Restaurant, Essen auf Rundreise",
    },
    marketNetherlands: {
      title: "Sri Lanka Reisen aus den Niederlanden",
      description: "Private Rundreisen für Gäste aus den Niederlanden: mit Fahrer, flexible Tage, Flughafenempfang. Seit 1992. Jetzt anfragen. Privater Chauffeur.",
      keywords: "Sri Lanka Niederlande, Privatreise mit Fahrer, Rundreise Holland",
    },
    marketGermany: {
      title: "Sri Lanka Rundreise aus Deutschland | Fahrer",
      description: "Private Rundreise Sri Lanka für Reisende aus Deutschland: mit Fahrer, flexible Tage, lokales Team seit 1992. Jetzt anfragen. Flexibles privates Tempo.",
      keywords: "Sri Lanka Rundreise Deutschland, Privatreise mit Fahrer, Sri Lanka Urlaub",
    },
    marketFrance: {
      title: "Sri Lanka Reisen aus Frankreich | mit Fahrer",
      description: "Private Rundreisen für Gäste aus Frankreich: mit Fahrer, flexibles Tempo, lokales Team seit 1992. Jetzt anfragen für Ihr Angebot. Lokales Team vor Ort.",
      keywords: "Sri Lanka Frankreich, Privatreise Chauffeur, Rundreise aus Frankreich",
    },
    marketItaly: {
      title: "Sri Lanka Reisen aus Italien | mit Fahrer",
      description: "Private Rundreisen für Gäste aus Italien: mit Fahrer, flexible Routen, lokales Team seit 1992. Jetzt anfragen für Ihren Termin. Sicher planen.",
      keywords: "Sri Lanka Italien, Privatreise mit Fahrer, Tour aus Italien",
    },
    marketSpain: {
      title: "Sri Lanka Reisen aus Spanien | mit Fahrer",
      description: "Private Rundreisen für Gäste aus Spanien: mit Fahrer, flexible Tage, Planung seit 1992. Jetzt anfragen und kostenloses Angebot holen. Sicher planen.",
      keywords: "Sri Lanka Spanien, Privatreise mit Fahrer, Tour aus Spanien",
    },
    marketPoland: {
      title: "Sri Lanka Reisen aus Polen | mit Fahrer",
      description: "Private Rundreisen für Gäste aus Polen: mit Fahrer, flexible Tage, lokales Team seit 1992. Jetzt anfragen für Ihre Route bitte. Massgeschneiderte Routen.",
      keywords: "Sri Lanka Polen, Privatreise mit Fahrer, Tour aus Polen",
    },
    marketRussia: {
      title: "Sri Lanka Reisen aus Russland | mit Fahrer",
      description: "Private Rundreisen für Gäste aus Russland: mit Fahrer, flexible Routen, lokales Team seit 1992. Jetzt anfragen für Ihre Daten. Fuer Gäste aus Europa.",
      keywords: "Sri Lanka Russland, Privatreise mit Fahrer, Tour aus Russland",
    },
    marketUK: {
      title: "Sri Lanka Reisen aus UK | privat mit Fahrer",
      description: "Private Rundreisen für Gäste aus dem UK: mit Fahrer, flexible Tage, lokales Team seit 1992. Jetzt anfragen für Ihre Reise. Privater Chauffeur.",
      keywords: "Sri Lanka UK, Privatreise mit Fahrer, Tour aus Grossbritannien",
    },
  },
  fr: {
    home: {
      title: "Circuits privés Sri Lanka avec chauffeur | 5-10 jours",
      description: "Circuits privés Sri Lanka avec chauffeur pour voyageurs d’Europe. Itinéraires 5-10 jours, rythme flexible. Équipe depuis 1992. Demandez un devis.",
      keywords: "circuits privés Sri Lanka, circuit avec chauffeur, voyage Sri Lanka",
    },
    tours: {
      title: "Circuits privés Sri Lanka | 4-10 jours chauffeur",
      description: "Comparez les circuits privés Sri Lanka de 4 à 10 jours avec chauffeur, safari et plage. Sur mesure, sans car de groupe. Demandez un devis...",
      keywords: "circuits privés Sri Lanka, circuit 7 jours, chauffeur privé",
    },
    services: {
      title: "Chauffeur privé & services circuits | Sri Lanka",
      description: "Circuits avec chauffeur, sejours sur mesure et excursions d une journée a Sri Lanka. Rythme flexible, accueil aéroport. Demandez un devis. Depuis 1992.",
      keywords: "chauffeur Sri Lanka, circuit sur mesure, excursion journée, service privé",
    },
    about: {
      title: "A propos de Sundown Tours | Depuis 1992",
      description: "Sundown Tours organise des circuits privés avec chauffeur a Sri Lanka depuis 1992. Équipe locale pour voyageurs europeens. Demandez un devis.",
      keywords: "Sundown Tours, agence Sri Lanka, circuits privés depuis 1992, chauffeur local",
    },
    contact: {
      title: "Contact Sundown Tours | Devis Sri Lanka gratuit",
      description: "Preparez un circuit privé Sri Lanka avec chauffeur. Indiquez dates et style; reponse sous un jour en general. Équipe depuis 1992. Demandez un devis.",
      keywords: "contact circuit Sri Lanka, devis gratuit, reserver chauffeur Sri Lanka",
    },
    tour7: {
      title: "Circuit privé 7 jours | Wilpattu & Mirissa",
      description: "Safari Wilpattu, Sigiriya, Kandy, Ella et Mirissa (baleines en option). Hôtels 4 étoiles, chauffeur privé. Demandez un devis. Demandez un devis gratuit.",
      keywords: "circuit Sri Lanka 7 jours, Wilpattu Mirissa, circuit privé avec chauffeur",
    },
    tour10: {
      title: "Circuit privé 10 jours | Tour de l’île",
      description: "Tour de l’île : Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella et plages à Hikkaduwa. Chauffeur privé depuis 1992. Demandez un devis. Équipe depuis 1992.",
      keywords: "circuit Sri Lanka 10 jours, tour de l’île privé, Hikkaduwa plage",
    },
    tour8: {
      title: "Circuit privé 8 jours | Yala & plage Mirissa",
      description: "Pidurangala, Sigiriya, Kandy, thé, Ella, safari Yala et nuits à Mirissa. Avec chauffeur. Annulation gratuite 14 jours. Devis gratuit. Équipe depuis 1992.",
      keywords: "circuit Sri Lanka 8 jours, Yala Mirissa plage, circuit privé chauffeur",
    },
    tour6: {
      title: "Circuit privé 6 jours | Yala & plage",
      description: "Sigiriya, Kandy, thé, safari Yala et plage du sud-ouest, hôtels 4 étoiles. Annulation gratuite jusqu’à 14 jours. Demandez un devis. Réponse sous 24 heures.",
      keywords: "circuit Sri Lanka 6 jours, safari Yala plage, circuit privé chauffeur",
    },
    tour5: {
      title: "Circuit privé 5 jours | Thé & côte sud",
      description: "Sigiriya, Kandy, Nuwara Eliya, Ella et côte sud (Madu River), hôtels 4 étoiles et chauffeur. Idéal court séjour. Demandez un devis. Réponse sous 24 heures.",
      keywords: "circuit Sri Lanka 5 jours, Nuwara Eliya thé, circuit privé avec chauffeur",
    },
    tour4: {
      title: "Circuit privé 4 jours | Kandy, Ella & Yala",
      description: "Kandy, collines d’Ella et safari Yala, puis Galle ou Bentota sur la côte sud. Avec chauffeur. Annulation gratuite 14 jours. Devis. Réponse sous 24 heures.",
      keywords: "circuit Sri Lanka 4 jours, Kandy Ella Yala, circuit privé avec chauffeur",
    },
    tour2ek: {
      title: "Circuit privé 2 jours | Ella & Kandy",
      description: "Court séjour collines : Udawalawa, Ella, puis Temple de la Dent à Kandy avec chauffeur privé. Rythme flexible. Demandez un devis. Rythme privé et flexible.",
      keywords: "circuit Ella Kandy 2 jours, Temple de la Dent, chauffeur privé Sri Lanka",
    },
    tour2ey: {
      title: "Circuit privé 2 jours | Ella & safari Yala",
      description: "Week-end Ella et safari jeep privé à Yala avec chauffeur et hôtel 4 étoiles. Annulation gratuite jusqu’à 14 jours. Demandez un devis. Équipe depuis 1992.",
      keywords: "safari Yala 2 jours, circuit privé Ella Yala, chauffeur Sri Lanka",
    },
    ellaDay: {
      title: "Excursion Ella avec chauffeur | Nine Arch",
      description: "Journée privée à Ella : Nine Arch Bridge, Little Adam’s Peak et Ravana Falls avec chauffeur. Rythme flexible. Demandez un devis. Demandez un devis gratuit.",
      keywords: "excursion Ella, Nine Arch Bridge, chauffeur privé Sri Lanka",
    },
    galleDay: {
      title: "Excursion Galle avec chauffeur | Fort hollandais",
      description: "Journée privée à Galle : remparts du Fort hollandais, phare et arrêts sur la côte sud. Avec chauffeur. Demandez un devis. Demandez un devis gratuit.",
      keywords: "excursion Galle, Fort de Galle privé, côte sud Sri Lanka chauffeur",
    },
    kandyDay: {
      title: "Excursion Kandy avec chauffeur | Temple de la Dent",
      description: "Journée privée à Kandy : Temple de la Dent, belvédère et points forts de la ville avec chauffeur. Demandez un devis gratuit. Demandez un devis gratuit.",
      keywords: "excursion Kandy, Temple de la Dent, chauffeur privé Kandy",
    },
    sigiriyaDay: {
      title: "Excursion Sigiriya avec chauffeur | Rocher du Lion",
      description: "Journée privée à Sigiriya : Rocher du Lion ou Pidurangala, grottes de Dambulla et village. Avec chauffeur. Demandez un devis. Demandez un devis gratuit.",
      keywords: "excursion Sigiriya, Rocher du Lion, grottes Dambulla chauffeur",
    },
    destinations: {
      title: "Destinations Sri Lanka | Ella, Sigiriya, Yala",
      description: "Destinations pour circuits privés: Ella, Sigiriya, Yala, Kandy, Galle et Mirissa. Conseils pour itinéraires avec chauffeur. Demandez un devis.",
      keywords: "destinations Sri Lanka, Ella Sigiriya Yala, lieux circuit privé, Galle Mirissa",
    },
    guides: {
      title: "Guides voyage Sri Lanka | Conseils circuit privé",
      description: "Guides pratiques: meilleure periode, conseils chauffeur privé et bases visa pour l Europe. Mieux preparer. Demandez un devis. Voyageurs d’Europe bienvenus.",
      keywords: "guide voyage Sri Lanka, meilleure periode, chauffeur privé, visa Sri Lanka",
    },
    destElla: {
      title: "Ella Sri Lanka | Nine Arch Bridge & collines",
      description: "Preparez Ella: Nine Arch Bridge, Little Adams Peak et the pour une journée ou un sejour. Avec chauffeur. Demandez un devis. Équipe locale sur place.",
      keywords: "Ella Sri Lanka, Nine Arch Bridge, Little Adams Peak, tour privé Ella",
    },
    destSigiriya: {
      title: "Rocher du Lion Sigiriya | Guide avec chauffeur",
      description: "Sigiriya Lion Rock et Dambulla en journée privée ou circuit avec chauffeur. Conseils montée, timing et rythme. Demandez un devis. Chauffeur privé.",
      keywords: "Sigiriya Sri Lanka, Lion Rock, grottes Dambulla, tour privé Sigiriya",
    },
    destYala: {
      title: "Parc national de Yala | Safari privé conseils",
      description: "Safari jeep à Yala en circuit privé: chances leopard, horaires et lien avec Ella ou la cote. Demandez un devis pour vos dates. Demandez un devis.",
      keywords: "Yala parc national, safari Yala, leopard Sri Lanka, safari privé",
    },
    destKandy: {
      title: "Kandy Sri Lanka | Temple de la Dent guide",
      description: "Decouvrir Kandy: Temple de la Dent, lac et porte des collines en circuit privé avec chauffeur. Conseils pratiques. Demandez un devis. Chauffeur privé.",
      keywords: "Kandy Sri Lanka, Temple de la Dent, tour privé Kandy, collines",
    },
    destGalle: {
      title: "Fort de Galle Sri Lanka | Cote sud privée",
      description: "Fort de Galle, phare et plages du sud en excursion ou circuit multi-jours avec chauffeur. Rythme calme. Demandez un devis. Équipe locale sur place.",
      keywords: "Fort de Galle, Galle Sri Lanka, côte sud privé, excursion Galle",
    },
    destMirissa: {
      title: "Mirissa Sri Lanka | Plage & saison baleines",
      description: "Mirissa: plage, saison d observation des baleines et lien avec Galle ou un sejour sud en circuit privé. Demandez un devis. Équipe locale sur place.",
      keywords: "Mirissa Sri Lanka, plage Mirissa, baleines Mirissa, côte sud tour",
    },
    guideBestTime: {
      title: "Meilleure periode Sri Lanka | Guide saisons",
      description: "Quand partir a Sri Lanka: fenetres seches par côte et collines, mousson et routes adaptees. Demandez un devis pour vos dates. Équipe locale sur place.",
      keywords: "meilleure periode Sri Lanka, meteo Sri Lanka, mousson, saison seche",
    },
    guidePrivateDriver: {
      title: "Chauffeur privé Sri Lanka | Guide pratique",
      description: "Ce qu inclut un chauffeur privé a Sri Lanka: vehicule, rythme, hotels et usages des voyageurs europeens. Demandez un devis. Accueil aéroport sur demande.",
      keywords: "chauffeur privé Sri Lanka, guide chauffeur, circuit avec chauffeur",
    },
    guideVisa: {
      title: "Visa & ETA Sri Lanka | Guide voyageurs Europe",
      description: "ETA et bases d entree pour voyageurs europeens avant un circuit privé. Notes pratiques, pas un conseil juridique. Demandez un devis. Sur mesure.",
      keywords: "visa Sri Lanka, ETA Sri Lanka, entree Europe, documents voyage",
    },
    testimonials: {
      title: "Avis clients | Sundown Tours Sri Lanka",
      description: "Lisez de vrais avis sur nos circuits privés avec chauffeur a Sri Lanka, de voyageurs europeens. Feedback live et TripAdvisor. Demandez un devis.",
      keywords: "avis Sundown Tours, avis circuit privé Sri Lanka, temoignages chauffeur",
    },
    cancellation: {
      title: "Politique d annulation | Sundown Tours",
      description: "Conditions d annulation pour circuits privés Sri Lanka. Annulation gratuite souvent possible jusqu a 14 jours avant. Lisez puis demandez un devis.",
      keywords: "annulation circuit Sri Lanka, gratuit 14 jours, politique Sundown Tours",
    },
    restaurants: {
      title: "Ou manger a Sri Lanka | Cote & conseils tour",
      description: "Ou mangent les voyageurs en circuit privé: fruits de mer cote, rice and curry, plus Sundown Beach Restaurant a Waskaduwa. Demandez un devis.",
      keywords: "restaurants Sri Lanka, Sundown Beach Restaurant, manger en circuit",
    },
    marketNetherlands: {
      title: "Circuits Sri Lanka depuis les Pays-Bas",
      description: "Circuits privés pour voyageurs des Pays-Bas: avec chauffeur, jours flexibles, accueil aéroport. Depuis 1992. Demandez un devis. Planifiez en confiance.",
      keywords: "Sri Lanka Pays-Bas, circuit privé chauffeur, voyage depuis Hollande",
    },
    marketGermany: {
      title: "Circuits Sri Lanka depuis l Allemagne | chauffeur",
      description: "Circuits privés pour voyageurs d Allemagne: avec chauffeur, jours flexibles, equipe locale depuis 1992. Demandez un devis. Demandez un devis.",
      keywords: "Sri Lanka Allemagne, circuit privé chauffeur, voyage depuis Allemagne",
    },
    marketFrance: {
      title: "Circuit privé Sri Lanka depuis la France",
      description: "Circuits privés Sri Lanka pour voyageurs de France: avec chauffeur, rythme flexible, equipe locale depuis 1992. Demandez un devis. Demandez un devis.",
      keywords: "circuit Sri Lanka France, voyage privé chauffeur, tour depuis France",
    },
    marketItaly: {
      title: "Circuits Sri Lanka depuis l Italie | chauffeur",
      description: "Circuits privés pour voyageurs d Italie: avec chauffeur, itinéraires souples, equipe locale depuis 1992. Demandez un devis. Voyageurs d’Europe bienvenus.",
      keywords: "Sri Lanka Italie, circuit privé chauffeur, voyage depuis Italie",
    },
    marketSpain: {
      title: "Circuits Sri Lanka depuis l Espagne | chauffeur",
      description: "Circuits privés pour voyageurs d Espagne: avec chauffeur, jours flexibles, planification depuis 1992. Demandez un devis. Itineraires sur mesure.",
      keywords: "Sri Lanka Espagne, circuit privé chauffeur, voyage depuis Espagne",
    },
    marketPoland: {
      title: "Circuits Sri Lanka depuis la Pologne | chauffeur",
      description: "Circuits privés pour voyageurs de Pologne: avec chauffeur, jours flexibles, equipe locale depuis 1992. Demandez un devis. Équipe locale sur place.",
      keywords: "Sri Lanka Pologne, circuit privé chauffeur, voyage depuis Pologne",
    },
    marketRussia: {
      title: "Circuits Sri Lanka depuis la Russie | chauffeur",
      description: "Circuits privés pour voyageurs de Russie: avec chauffeur, routes flexibles, equipe locale depuis 1992. Demandez un devis. Accueil aéroport sur demande.",
      keywords: "Sri Lanka Russie, circuit privé chauffeur, voyage depuis Russie",
    },
    marketUK: {
      title: "Circuits Sri Lanka depuis le Royaume-Uni",
      description: "Circuits privés pour voyageurs du Royaume-Uni: avec chauffeur, jours flexibles, equipe locale depuis 1992. Demandez un devis. Demandez un devis.",
      keywords: "Sri Lanka UK, circuit privé chauffeur, voyage depuis Royaume-Uni",
    },
  },
  it: {
    home: {
      title: "Tour privato Sri Lanka con autista | 5-10 giorni",
      description: "Tour privati Sri Lanka con autista per viaggiatori europei. Itinerari da 5 a 10 giorni con autista locale. Team dal 1992. Richiedi un preventivo.",
      keywords: "tour privato Sri Lanka, autista privato, itinerario Sri Lanka",
    },
    tours: {
      title: "Tour privati Sri Lanka | 4-10 giorni con autista",
      description: "Confronta tour privati Sri Lanka da 4 a 10 giorni con autista, safari e spiaggia. Su misura, senza pullman di gruppo. Richiedi un preventivo.",
      keywords: "pacchetti Sri Lanka, tour privato con autista, tour 7 giorni, itinerari Sri Lanka",
    },
    services: {
      title: "Autista privato e servizi tour | Sri Lanka",
      description: "Tour con autista, vacanze su misura ed escursioni giornaliere in Sri Lanka. Ritmo flessibile, meet aeroporto. Dal 1992. Richiedi un preventivo.",
      keywords: "autista Sri Lanka, tour su misura, escursione giornaliera, servizio privato",
    },
    about: {
      title: "Chi siamo | Sundown Tours dal 1992",
      description: "Sundown Tours organizza tour privati con autista in Sri Lanka dal 1992. Team locale per ospiti europei. Richiedi un preventivo gratuito oggi.",
      keywords: "Sundown Tours, operatore Sri Lanka, tour privati dal 1992, autista locale",
    },
    contact: {
      title: "Contatti Sundown Tours | Preventivo Sri Lanka",
      description: "Pianifica un tour privato Sri Lanka con autista. Invia date e stile; rispondiamo di solito entro un giorno. Team dal 1992. Richiedi un preventivo.",
      keywords: "contatto tour Sri Lanka, preventivo gratuito, prenotare autista Sri Lanka",
    },
    tour7: {
      title: "Tour privato 7 giorni | Wilpattu e Mirissa",
      description: "Safari Wilpattu, Sigiriya, Kandy, Ella e Mirissa (balene in opzione). Hotel 4 stelle, autista privato. Richiedi un preventivo gratuito. Team dal 1992.",
      keywords: "tour Sri Lanka 7 giorni, Wilpattu Mirissa, tour privato con autista",
    },
    tour10: {
      title: "Tour privato 10 giorni | Giro dell’isola",
      description: "Giro dell’isola: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella e spiagge a Hikkaduwa. Autista privato dal 1992. Richiedi un preventivo. Team dal 1992.",
      keywords: "tour Sri Lanka 10 giorni, giro isola privato, Hikkaduwa spiaggia",
    },
    tour8: {
      title: "Tour privato 8 giorni | Yala e spiaggia Mirissa",
      description: "Pidurangala, Sigiriya, Kandy, tè, Ella, safari Yala e notti a Mirissa. Con autista. Cancellazione gratuita 14 giorni. Preventivo. Team locale dal 1992.",
      keywords: "tour Sri Lanka 8 giorni, Yala Mirissa spiaggia, tour privato autista",
    },
    tour6: {
      title: "Tour privato 6 giorni | Yala e spiaggia",
      description: "Sigiriya, Kandy, tè, safari Yala e spiaggia sud-ovest con hotel 4 stelle. Cancellazione gratuita entro 14 giorni. Richiedi un preventivo. Team dal 1992.",
      keywords: "tour Sri Lanka 6 giorni, safari Yala spiaggia, tour privato autista",
    },
    tour5: {
      title: "Tour privato 5 giorni | Tè e costa",
      description: "Sigiriya, Kandy, Nuwara Eliya, Ella e costa sud (Madu River), hotel 4 stelle e autista. Ideale soggiorno breve. Richiedi un preventivo. Team dal 1992.",
      keywords: "tour Sri Lanka 5 giorni, Nuwara Eliya tè, tour privato con autista",
    },
    tour4: {
      title: "Tour privato 4 giorni | Kandy, Ella & Yala",
      description: "Kandy, colline di Ella e safari Yala, poi Galle o Bentota sulla costa sud. Con autista. Cancellazione gratuita 14 giorni. Preventivo. Team locale dal 1992.",
      keywords: "tour Sri Lanka 4 giorni, Kandy Ella Yala, tour privato con autista",
    },
    tour2ek: {
      title: "Tour privato 2 giorni | Ella & Kandy",
      description: "Breve giro collinare: Udawalawa, Ella e Tempio del Dente a Kandy con autista privato. Ritmo flessibile. Richiedi un preventivo. Team locale dal 1992.",
      keywords: "tour Ella Kandy 2 giorni, Tempio del Dente, autista privato Sri Lanka",
    },
    tour2ey: {
      title: "Tour privato 2 giorni | Ella & safari Yala",
      description: "Weekend Ella e safari jeep privato a Yala con autista e hotel 4 stelle. Cancellazione gratuita entro 14 giorni. Richiedi un preventivo. Team dal 1992.",
      keywords: "safari Yala 2 giorni, tour privato Ella Yala, autista Sri Lanka",
    },
    ellaDay: {
      title: "Escursione Ella con autista | Nine Arch",
      description: "Giornata privata a Ella: Nine Arch Bridge, Little Adam’s Peak e Ravana Falls con autista. Ritmo flessibile. Richiedi un preventivo. Team locale dal 1992.",
      keywords: "escursione Ella, Nine Arch Bridge, autista privato Sri Lanka",
    },
    galleDay: {
      title: "Escursione Galle con autista | Forte olandese",
      description: "Giornata privata a Galle: mura del Forte olandese, faro e soste sulla costa sud. Con autista. Richiedi un preventivo gratuito. Team locale dal 1992.",
      keywords: "escursione Galle, Forte di Galle privato, costa sud Sri Lanka",
    },
    kandyDay: {
      title: "Escursione Kandy con autista | Tempio del Dente",
      description: "Giornata privata a Kandy: Tempio del Dente, belvedere e punti salienti della città con autista. Richiedi un preventivo oggi. Richiedi un preventivo gratis.",
      keywords: "escursione Kandy, Tempio del Dente, autista privato Kandy",
    },
    sigiriyaDay: {
      title: "Escursione Sigiriya con autista | Roccia del Leone",
      description: "Giornata privata a Sigiriya: Roccia del Leone o Pidurangala, grotte di Dambulla e villaggio. Con autista. Richiedi un preventivo. Team locale dal 1992.",
      keywords: "escursione Sigiriya, Roccia del Leone, grotte Dambulla autista",
    },
    destinations: {
      title: "Destinazioni Sri Lanka | Ella, Sigiriya, Yala",
      description: "Destinazioni per tour privati: Ella, Sigiriya, Yala, Kandy, Galle e Mirissa. Consigli per itinerari con autista. Richiedi un preventivo. Dal 1992.",
      keywords: "destinazioni Sri Lanka, Ella Sigiriya Yala, luoghi tour privato, Galle Mirissa",
    },
    guides: {
      title: "Guide di viaggio Sri Lanka | Consigli tour privato",
      description: "Guide pratiche: periodo migliore, consigli sull autista privato e basi visto per l Europa. Pianifica meglio. Richiedi un preventivo. Itinerari su misura.",
      keywords: "guida viaggio Sri Lanka, periodo migliore, autista privato, visto Sri Lanka",
    },
    destElla: {
      title: "Ella Sri Lanka | Nine Arch Bridge e colline",
      description: "Pianifica Ella: Nine Arch Bridge, Little Adams Peak e te per una giornata o un soggiorno. Con autista. Richiedi un preventivo. Richiedi un preventivo.",
      keywords: "Ella Sri Lanka, Nine Arch Bridge, Little Adams Peak, tour privato Ella",
    },
    destSigiriya: {
      title: "Sigiriya Sri Lanka | Lion Rock e Dambulla",
      description: "Sigiriya Lion Rock e Dambulla in giornata privata o tour con autista. Consigli salita, timing e ritmo. Richiedi un preventivo. Team locale sul posto.",
      keywords: "Sigiriya Sri Lanka, Lion Rock, grotte Dambulla, tour privato Sigiriya",
    },
    destYala: {
      title: "Parco nazionale di Yala | Safari privato tips",
      description: "Safari jeep a Yala in tour privato: chance leopardo, orari gate e abbinamento con Ella o costa. Richiedi un preventivo per le date. Pianifica con fiducia.",
      keywords: "Yala parco nazionale, safari Yala, leopardo Sri Lanka, safari privato",
    },
    destKandy: {
      title: "Kandy Sri Lanka | Tempio del Dente guida",
      description: "Scopri Kandy: Tempio del Dente, lago e porta alle colline in tour privati con autista. Consigli pratici. Richiedi un preventivo. Pianifica con fiducia.",
      keywords: "Kandy Sri Lanka, Tempio del Dente, tour privato Kandy, colline",
    },
    destGalle: {
      title: "Forte di Galle Sri Lanka | Costa sud privata",
      description: "Forte di Galle, faro e spiagge del sud in escursione o circuito multi-giorno con autista. Ritmo calmo. Richiedi un preventivo. Team locale sul posto.",
      keywords: "Forte di Galle, Galle Sri Lanka, costa sud privata, escursione Galle",
    },
    destMirissa: {
      title: "Mirissa Sri Lanka | Spiaggia e stagione balene",
      description: "Mirissa: spiaggia, stagione whale watching e collegamento con Galle o soggiorno sud in tour privato. Richiedi un preventivo. Viaggiatori europei benvenuti.",
      keywords: "Mirissa Sri Lanka, spiaggia Mirissa, balene Mirissa, costa sud tour",
    },
    guideBestTime: {
      title: "Periodo migliore Sri Lanka | Guida alle stagioni",
      description: "Quando visitare Sri Lanka: finestre secche per costa e colline, monsone e percorsi adattati. Richiedi un preventivo per le date. Ritmo privato flessibile.",
      keywords: "periodo migliore Sri Lanka, clima Sri Lanka, monsone, stagione secca",
    },
    guidePrivateDriver: {
      title: "Autista privato Sri Lanka | Guida pratica",
      description: "Cosa include un autista privato in Sri Lanka: veicolo, ritmo, hotel e abitudini degli ospiti europei. Richiedi un preventivo. Pianifica con fiducia.",
      keywords: "autista privato Sri Lanka, guida chauffeur, tour con autista",
    },
    guideVisa: {
      title: "Visto ed ETA Sri Lanka | Guida viaggiatori Europa",
      description: "ETA e basi di ingresso per viaggiatori europei prima di un tour privato. Note pratiche, non consulenza legale. Richiedi un preventivo. Team locale.",
      keywords: "visto Sri Lanka, ETA Sri Lanka, ingresso Europa, documenti viaggio",
    },
    testimonials: {
      title: "Recensioni ospiti | Sundown Tours Sri Lanka",
      description: "Leggi recensioni reali sui nostri tour privati con autista in Sri Lanka da viaggiatori europei. Feedback live e TripAdvisor. Richiedi un preventivo.",
      keywords: "recensioni Sundown Tours, recensioni tour privato Sri Lanka, testimonianze",
    },
    cancellation: {
      title: "Politica di cancellazione | Sundown Tours",
      description: "Termini di cancellazione per tour privati Sri Lanka. Cancellazione gratuita spesso fino a 14 giorni prima. Leggi e richiedi un preventivo. Autista privato.",
      keywords: "cancellazione tour Sri Lanka, gratuita 14 giorni, policy Sundown Tours",
    },
    restaurants: {
      title: "Dove mangiare in Sri Lanka | Costa e tour tips",
      description: "Dove mangiano i viaggiatori in tour privato: seafood in costa, rice and curry, piu Sundown Beach Restaurant a Waskaduwa. Richiedi un preventivo.",
      keywords: "ristoranti Sri Lanka, Sundown Beach Restaurant, mangiare in tour",
    },
    marketNetherlands: {
      title: "Tour Sri Lanka dai Paesi Bassi | con autista",
      description: "Tour privati per viaggiatori dai Paesi Bassi: con autista, giorni flessibili, meet aeroporto. Dal 1992. Richiedi un preventivo. Richiedi un preventivo.",
      keywords: "Sri Lanka Paesi Bassi, tour privato autista, viaggio dall Olanda",
    },
    marketGermany: {
      title: "Tour Sri Lanka dalla Germania | con autista",
      description: "Tour privati per viaggiatori dalla Germania: con autista, giorni flessibili, team locale dal 1992. Richiedi un preventivo gratuito. Team locale sul posto.",
      keywords: "Sri Lanka Germania, tour privato autista, viaggio dalla Germania",
    },
    marketFrance: {
      title: "Tour Sri Lanka dalla Francia | con autista",
      description: "Tour privati per viaggiatori dalla Francia: con autista, ritmo flessibile, team locale dal 1992. Richiedi un preventivo gratuito. Team locale.",
      keywords: "Sri Lanka Francia, tour privato autista, viaggio dalla Francia",
    },
    marketItaly: {
      title: "Tour privato Sri Lanka dall’Italia | autista",
      description: "Tour privati Sri Lanka per viaggiatori dall’Italia: con autista, itinerari flessibili, team locale dal 1992. Richiedi un preventivo. Pianifica con fiducia.",
      keywords: "tour Sri Lanka dall’Italia, autista privato, viaggio Sri Lanka",
    },
    marketSpain: {
      title: "Tour Sri Lanka dalla Spagna | con autista",
      description: "Tour privati per viaggiatori dalla Spagna: con autista, giorni flessibili, pianificazione dal 1992. Richiedi un preventivo gratuito. Itinerari su misura.",
      keywords: "Sri Lanka Spagna, tour privato autista, viaggio dalla Spagna",
    },
    marketPoland: {
      title: "Tour Sri Lanka dalla Polonia | con autista",
      description: "Tour privati per viaggiatori dalla Polonia: con autista, giorni flessibili, team locale dal 1992. Richiedi un preventivo gratuito. Itinerari su misura.",
      keywords: "Sri Lanka Polonia, tour privato autista, viaggio dalla Polonia",
    },
    marketRussia: {
      title: "Tour Sri Lanka dalla Russia | con autista",
      description: "Tour privati per viaggiatori dalla Russia: con autista, percorsi flessibili, team locale dal 1992. Richiedi un preventivo gratuito. Itinerari su misura.",
      keywords: "Sri Lanka Russia, tour privato autista, viaggio dalla Russia",
    },
    marketUK: {
      title: "Tour Sri Lanka dal Regno Unito | con autista",
      description: "Tour privati per viaggiatori dal Regno Unito: con autista, giorni flessibili, team locale dal 1992. Richiedi un preventivo gratuito. Pianifica con fiducia.",
      keywords: "Sri Lanka UK, tour privato autista, viaggio dal Regno Unito",
    },
  },
  es: {
    home: {
      title: "Circuito privado Sri Lanka con chofer | 5-10 días",
      description: "Circuitos privados Sri Lanka con chofer para viajeros europeos. Rutas de 5 a 10 días con conductor local. Equipo desde 1992. Pide un presupuesto.",
      keywords: "circuito privado Sri Lanka, chofer privado, viaje Sri Lanka",
    },
    tours: {
      title: "Circuitos privados Sri Lanka | 4-10 días chofer",
      description: "Compara circuitos privados Sri Lanka de 4 a 10 días con chofer, safari y playa. A medida, sin autobuses de grupo. Pide un presupuesto gratis.",
      keywords: "paquetes Sri Lanka, circuito privado chofer, tour 7 días, itinerarios Sri Lanka",
    },
    services: {
      title: "Chofer privado y servicios de tour | Sri Lanka",
      description: "Circuitos con chofer, vacaciones a medida y excursiones de un día en Sri Lanka. Ritmo flexible, meet aeropuerto. Desde 1992. Pide un presupuesto.",
      keywords: "chofer Sri Lanka, circuito a medida, excursión de un día, servicio privado",
    },
    about: {
      title: "Sobre Sundown Tours | Privados desde 1992",
      description: "Sundown Tours organiza circuitos privados con chofer en Sri Lanka desde 1992. Equipo local para viajeros europeos. Pide un presupuesto gratis hoy.",
      keywords: "Sundown Tours, circuitos privados Sri Lanka, chofer desde 1992",
    },
    contact: {
      title: "Contacto Sundown Tours | Presupuesto Sri Lanka",
      description: "Planifica un circuito privado Sri Lanka con chofer. Envía fechas y estilo; respondemos casi siempre en un día. Desde 1992. Pide un presupuesto.",
      keywords: "contacto Sri Lanka, presupuesto circuito privado, chofer",
    },
    tour7: {
      title: "Circuito privado 7 días | Wilpattu y Mirissa",
      description: "Safari Wilpattu, Sigiriya, Kandy, Ella y Mirissa (ballenas opcional). Hoteles 4 estrellas, chofer privado. Pide un presupuesto gratis. Equipo desde 1992.",
      keywords: "circuito Sri Lanka 7 días, Wilpattu Mirissa, circuito privado con chofer",
    },
    tour10: {
      title: "Circuito privado 10 días | Vuelta a la isla",
      description: "Vuelta a la isla: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella y playas en Hikkaduwa. Chofer privado desde 1992. Pide un presupuesto. Equipo desde 1992.",
      keywords: "circuito Sri Lanka 10 días, vuelta isla privada, Hikkaduwa playa",
    },
    tour8: {
      title: "Circuito privado 8 días | Yala y playa Mirissa",
      description: "Pidurangala, Sigiriya, Kandy, té, Ella, safari Yala y noches en Mirissa. Con chofer. Cancelación gratis 14 días. Pide presupuesto. Equipo local desde 1992.",
      keywords: "circuito Sri Lanka 8 días, Yala Mirissa playa, circuito privado chofer",
    },
    tour6: {
      title: "Circuito privado 6 días | Yala y playa",
      description: "Sigiriya, Kandy, té, safari Yala y playa del suroeste con hoteles 4 estrellas. Cancelación gratis hasta 14 días. Pide un presupuesto. Equipo desde 1992.",
      keywords: "circuito Sri Lanka 6 días, safari Yala playa, circuito privado chofer",
    },
    tour5: {
      title: "Circuito privado 5 días | Té y costa",
      description: "Sigiriya, Kandy, Nuwara Eliya, Ella y costa sur (Madu River), hoteles 4 estrellas y chofer. Ideal escapada corta. Pide un presupuesto. Equipo desde 1992.",
      keywords: "circuito Sri Lanka 5 días, Nuwara Eliya té, circuito privado con chofer",
    },
    tour4: {
      title: "Circuito privado 4 días | Kandy, Ella y Yala",
      description: "Kandy, colinas de Ella y safari Yala, luego Galle o Bentota en la costa sur. Con chofer. Cancelación gratis 14 días. Presupuesto. Equipo local desde 1992.",
      keywords: "circuito Sri Lanka 4 días, Kandy Ella Yala, circuito privado con chofer",
    },
    tour2ek: {
      title: "Circuito privado 2 días | Ella y Kandy",
      description: "Viaje corto de colinas: Udawalawa, Ella y Templo del Diente en Kandy con chofer privado. Ritmo flexible. Pide un presupuesto. Pide un presupuesto gratis.",
      keywords: "circuito Ella Kandy 2 días, Templo del Diente, chofer privado Sri Lanka",
    },
    tour2ey: {
      title: "Circuito privado 2 días | Ella y safari Yala",
      description: "Fin de semana Ella y safari jeep privado en Yala con chofer y hotel 4 estrellas. Cancelación gratis hasta 14 días. Pide un presupuesto. Equipo desde 1992.",
      keywords: "safari Yala 2 días, circuito privado Ella Yala, chofer Sri Lanka",
    },
    ellaDay: {
      title: "Excursión Ella con chofer | Nine Arch",
      description: "Día privado en Ella: Nine Arch Bridge, Little Adam’s Peak y Ravana Falls con chofer. Ritmo flexible. Pide un presupuesto gratis. Equipo local desde 1992.",
      keywords: "excursión Ella, Nine Arch Bridge, chofer privado Sri Lanka",
    },
    galleDay: {
      title: "Excursión Galle con chofer | Fuerte holandés",
      description: "Día privado en Galle: murallas del Fuerte holandés, faro y paradas en la costa sur. Con chofer. Pide un presupuesto hoy. Pide un presupuesto gratis.",
      keywords: "excursión Galle, Fuerte de Galle privado, costa sur Sri Lanka",
    },
    kandyDay: {
      title: "Excursión Kandy con chofer | Templo del Diente",
      description: "Día privado en Kandy: Templo del Diente, mirador y puntos clave de la ciudad con chofer. Pide un presupuesto sin compromiso. Pide un presupuesto gratis.",
      keywords: "excursión Kandy, Templo del Diente, chofer privado Kandy",
    },
    sigiriyaDay: {
      title: "Excursión Sigiriya con chofer | Roca del León",
      description: "Día privado en Sigiriya: Roca del León o Pidurangala, cuevas de Dambulla y pueblo. Con chofer. Pide un presupuesto gratis. Pide un presupuesto gratis.",
      keywords: "excursión Sigiriya, Roca del León, cuevas Dambulla chofer",
    },
    destinations: {
      title: "Destinos Sri Lanka | Ella, Sigiriya, Yala, Galle",
      description: "Destinos para circuitos privados: Ella, Sigiriya, Yala, Kandy, Galle y Mirissa. Consejos para rutas con chofer. Pide un presupuesto. Pide un presupuesto.",
      keywords: "destinos Sri Lanka, Ella Sigiriya Yala, lugares circuito privado, Galle Mirissa",
    },
    guides: {
      title: "Guías de viaje Sri Lanka | Consejos tour privado",
      description: "Guías prácticas: mejor época, consejos de chofer privado y bases de visado para Europa. Planifica mejor. Pide un presupuesto. Rutas a medida.",
      keywords: "guías Sri Lanka, mejor época, chofer privado, visado ETA",
    },
    destElla: {
      title: "Ella Sri Lanka | Nine Arch Bridge y colinas",
      description: "Planifica Ella: Nine Arch Bridge, Little Adams Peak y te para un día o varios. Con chofer. Pide un presupuesto gratis hoy. Equipo local in situ.",
      keywords: "Ella Sri Lanka, Nine Arch Bridge, Little Adams Peak, tour privado Ella",
    },
    destSigiriya: {
      title: "Sigiriya Sri Lanka | Lion Rock y Dambulla",
      description: "Sigiriya Lion Rock y Dambulla en día privado o circuito con chofer. Consejos de subida, timing y ritmo. Pide un presupuesto. Meet aeropuerto bajo pedido.",
      keywords: "Sigiriya Sri Lanka, Lion Rock, cuevas Dambulla, tour privado Sigiriya",
    },
    destYala: {
      title: "Parque nacional Yala | Safari privado tips",
      description: "Safari jeep en Yala en circuito privado: chances de leopardo, horarios y enlace con Ella o costa. Pide un presupuesto para tus fechas. Chofer privado.",
      keywords: "Yala parque nacional, safari Yala, leopardo Sri Lanka, safari privado",
    },
    destKandy: {
      title: "Kandy Sri Lanka | Templo del Diente guia",
      description: "Descubre Kandy: Templo del Diente, lago y puerta a las colinas en circuitos privados con chofer. Consejos practicos. Pide un presupuesto. A medida.",
      keywords: "Kandy Sri Lanka, Templo del Diente, tour privado Kandy, colinas",
    },
    destGalle: {
      title: "Fuerte de Galle Sri Lanka | Costa sur privada",
      description: "Fuerte de Galle, faro y playas del sur en excursión o circuito de varios días con chofer. Ritmo calmado. Pide un presupuesto. Planifica con confianza.",
      keywords: "Fuerte de Galle, Galle Sri Lanka, costa sur privada, excursión Galle",
    },
    destMirissa: {
      title: "Mirissa Sri Lanka | Playa y temporada de ballenas",
      description: "Mirissa: playa, temporada de ballenas y enlace con Galle o estancia sur en circuito privado. Pide un presupuesto gratis. Pide un presupuesto.",
      keywords: "Mirissa Sri Lanka, playa Mirissa, ballenas Mirissa, costa sur tour",
    },
    guideBestTime: {
      title: "Mejor época Sri Lanka | Guia de temporadas",
      description: "Cuando visitar Sri Lanka: ventanas secas por costa y colinas, monzón y rutas adaptadas. Pide un presupuesto para tus fechas. Pide un presupuesto.",
      keywords: "mejor época Sri Lanka, clima Sri Lanka, monzón, temporada seca",
    },
    guidePrivateDriver: {
      title: "Chofer privado Sri Lanka | Guia práctica",
      description: "Que incluye un chofer privado en Sri Lanka: vehículo, ritmo, hoteles y hábitos de viajeros europeos. Pide un presupuesto gratis. Chofer privado.",
      keywords: "chofer privado Sri Lanka, guia chauffeur, circuito con chofer",
    },
    guideVisa: {
      title: "Visado y ETA Sri Lanka | Guia viajeros Europa",
      description: "ETA y bases de entrada para viajeros europeos antes de un circuito privado. Notas practicas, no asesoría legal. Pide un presupuesto. Chofer privado.",
      keywords: "visado Sri Lanka, ETA Sri Lanka, entrada Europa, documentos viaje",
    },
    testimonials: {
      title: "Opiniones de huéspedes | Sundown Tours",
      description: "Lee opiniones reales de nuestros circuitos privados con chofer en Sri Lanka de viajeros europeos. Feedback live y TripAdvisor. Pide un presupuesto.",
      keywords: "opiniones Sundown Tours, reviews circuito privado Sri Lanka, testimonios",
    },
    cancellation: {
      title: "Politica de cancelacion | Sundown Tours",
      description: "Terminos de cancelacion para circuitos privados Sri Lanka. Cancelacion gratis suele ser posible hasta 14 días antes. Lee y pide un presupuesto.",
      keywords: "cancelacion tour Sri Lanka, gratis 14 días, politica Sundown Tours",
    },
    restaurants: {
      title: "Dónde comer en Sri Lanka | Costa y tips de tour",
      description: "Dónde comen los viajeros en circuito privado: mariscos en costa, rice and curry, más Sundown Beach Restaurant en Waskaduwa. Pide un presupuesto.",
      keywords: "restaurantes Sri Lanka, Sundown Beach Restaurant, comer en circuito",
    },
    marketNetherlands: {
      title: "Viajes Sri Lanka desde Paises Bajos | chofer",
      description: "Circuitos privados para viajeros de Paises Bajos: con chofer, días flexibles, meet aeropuerto. Desde 1992. Pide un presupuesto. Planifica con confianza.",
      keywords: "Sri Lanka Paises Bajos, circuito privado chofer, viaje desde Holanda",
    },
    marketGermany: {
      title: "Viajes Sri Lanka desde Alemania | con chofer",
      description: "Circuitos privados para viajeros de Alemania: con chofer, días flexibles, equipo local desde 1992. Pide un presupuesto gratis. Chofer privado.",
      keywords: "Sri Lanka Alemania, circuito privado chofer, viaje desde Alemania",
    },
    marketFrance: {
      title: "Viajes Sri Lanka desde Francia | con chofer",
      description: "Circuitos privados para viajeros de Francia: con chofer, ritmo flexible, equipo local desde 1992. Pide un presupuesto gratis. Rutas a medida.",
      keywords: "Sri Lanka Francia, circuito privado chofer, viaje desde Francia",
    },
    marketItaly: {
      title: "Viajes Sri Lanka desde Italia | con chofer",
      description: "Circuitos privados para viajeros de Italia: con chofer, rutas flexibles, equipo local desde 1992. Pide un presupuesto gratis. Rutas a medida.",
      keywords: "Sri Lanka Italia, circuito privado chofer, viaje desde Italia",
    },
    marketSpain: {
      title: "Circuito privado Sri Lanka desde Espana",
      description: "Circuitos privados Sri Lanka para viajeros de Espana: con chofer, días flexibles, equipo local desde 1992. Pide un presupuesto. Ritmo privado flexible.",
      keywords: "viaje Sri Lanka Espana, circuito privado chofer, desde Espana",
    },
    marketPoland: {
      title: "Viajes Sri Lanka desde Polonia | con chofer",
      description: "Circuitos privados para viajeros de Polonia: con chofer, días flexibles, equipo local desde 1992. Pide un presupuesto gratis. Planifica con confianza.",
      keywords: "Sri Lanka Polonia, circuito privado chofer, viaje desde Polonia",
    },
    marketRussia: {
      title: "Viajes Sri Lanka desde Rusia | con chofer",
      description: "Circuitos privados para viajeros de Rusia: con chofer, rutas flexibles, equipo local desde 1992. Pide un presupuesto gratis. Chofer privado.",
      keywords: "Sri Lanka Rusia, circuito privado chofer, viaje desde Rusia",
    },
    marketUK: {
      title: "Viajes Sri Lanka desde el Reino Unido | chofer",
      description: "Circuitos privados para viajeros del Reino Unido: con chofer, días flexibles, equipo local desde 1992. Pide un presupuesto. Planifica con confianza.",
      keywords: "Sri Lanka UK, circuito privado chofer, viaje desde Reino Unido",
    },
  },
  pl: {
    home: {
      title: "Wycieczka prywatna Sri Lanka z kierowcą | 5-10 dni",
      description: "Prywatne wycieczki Sri Lanka z kierowcą dla podróżnych z Europy. Trasy 5-10 dni z lokalnym kierowcą. Zespół od 1992. Zapytaj o bezpłatną ofertę.",
      keywords: "wycieczka prywatna Sri Lanka, z kierowcą, objazd Sri Lanka",
    },
    tours: {
      title: "Prywatne wycieczki Sri Lanka | 4-10 dni z kierowcą",
      description: "Porownaj prywatne wycieczki Sri Lanka od 4 do 10 dni z kierowcą, safari i plaża. Na miare, bez autokarow grupowych. Zapytaj o ofertę. Zapytaj o ofertę.",
      keywords: "pakiety Sri Lanka, wycieczka prywatna z kierowcą, tour 7 dni, itineraria",
    },
    services: {
      title: "Prywatny kierowca i uslugi tour | Sri Lanka",
      description: "Wycieczki z kierowcą, urlopy na miare i jednodniowe wycieczki po Sri Lance. Elastyczne tempo, meet na lotnisku. Zapytaj o ofertę. Zapytaj o ofertę.",
      keywords: "kierowca Sri Lanka, wycieczka na miare, jednodniowa wycieczka, usluga prywatna",
    },
    about: {
      title: "O Sundown Tours | Prywatne wycieczki od 1992",
      description: "Sundown Tours planuje prywatne wycieczki z kierowcą na Sri Lance od 1992. Lokalny zespół dla gości z Europy. Zapytaj o bezpłatna ofertę. Na miare.",
      keywords: "Sundown Tours, operator Sri Lanka, wycieczki prywatne od 1992, lokalny kierowca",
    },
    contact: {
      title: "Kontakt Sundown Tours | Oferta Sri Lanka",
      description: "Zaplanuj prywatna wycieczke Sri Lanka z kierowcą. Podaj daty i styl; odpowiadamy zwykle w ciagu dnia. Od 1992. Zapytaj o ofertę. Planuj ze spokojem.",
      keywords: "kontakt tour Sri Lanka, bezpłatna oferta, rezerwacja kierowcy Sri Lanka",
    },
    tour7: {
      title: "7-dniowa wycieczka | Wilpattu i Mirissa",
      description: "Safari Wilpattu, Sigiriya, Kandy, Ella i Mirissa (wieloryby opcjonalnie). Hotele 4★, prywatny kierowca. Zapytaj o bezpłatną ofertę. Lokalny zespół od 1992.",
      keywords: "7-dniowa wycieczka Sri Lanka, Wilpattu Mirissa, prywatny kierowca",
    },
    tour10: {
      title: "10-dniowa wycieczka | Objeżdżanie wyspy",
      description: "Objazd wyspy: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella i plaże w Hikkaduwie. Prywatny kierowca od 1992. Zapytaj o ofertę. Zapytaj o bezpłatną ofertę.",
      keywords: "10-dniowa wycieczka Sri Lanka, objazd wyspy z kierowcą, Hikkaduwa plaża",
    },
    tour8: {
      title: "8-dniowa wycieczka | Yala i plaża Mirissa",
      description: "Pidurangala, Sigiriya, Kandy, herbata, Ella, safari Yala i noce w Mirissie. Z kierowcą. Bezpłatna anulacja 14 dni. Zapytaj o ofertę. Zespół od 1992.",
      keywords: "8-dniowa wycieczka Sri Lanka, Yala Mirissa plaża, prywatny kierowca",
    },
    tour6: {
      title: "6-dniowa wycieczka | Safari Yala i plaża",
      description: "Sigiriya, Kandy, herbata, safari Yala i plaża południowo-zachodnia, hotele 4★. Bezpłatna anulacja do 14 dni. Zapytaj o ofertę. Zapytaj o bezpłatną ofertę.",
      keywords: "6-dniowa wycieczka Sri Lanka, safari Yala plaża, prywatny kierowca",
    },
    tour5: {
      title: "5-dniowa wycieczka | Herbata i wybrzeże",
      description: "Sigiriya, Kandy, Nuwara Eliya, Ella i południowe wybrzeże (Madu River), hotele 4★ i kierowca. Idealny krótki urlop. Zapytaj o ofertę. Zespół od 1992.",
      keywords: "5-dniowa wycieczka Sri Lanka, Nuwara Eliya herbata, prywatny kierowca",
    },
    tour4: {
      title: "4-dniowa wycieczka | Kandy, Ella i Yala",
      description: "Kandy, wzgórza Elli i safari Yala, potem Galle lub Bentota na południu. Z kierowcą. Bezpłatna anulacja 14 dni. Zapytaj o ofertę. Lokalny zespół od 1992.",
      keywords: "4-dniowa wycieczka Sri Lanka, Kandy Ella Yala, prywatny kierowca",
    },
    tour2ek: {
      title: "2-dniowa wycieczka | Ella i Kandy",
      description: "Krótka trasa w górach: Udawalawa, Ella i Świątynia Zęba w Kandy z prywatnym kierowcą. Elastyczne tempo. Zapytaj o ofertę. Zapytaj o bezpłatną ofertę.",
      keywords: "wycieczka Ella Kandy 2 dni, Świątynia Zęba, prywatny kierowca Sri Lanka",
    },
    tour2ey: {
      title: "2-dniowa wycieczka | Ella i safari Yala",
      description: "Weekend Ella i prywatne jeep-safari w Yala z kierowcą i hotelem 4★. Bezpłatna anulacja do 14 dni. Zapytaj o bezpłatną ofertę. Zapytaj o bezpłatną ofertę.",
      keywords: "safari Yala 2 dni, wycieczka Ella Yala, prywatny kierowca Sri Lanka",
    },
    ellaDay: {
      title: "Wycieczka jednodniowa Ella | Nine Arch",
      description: "Prywatny dzień w Elli: Nine Arch Bridge, Little Adam’s Peak i Ravana Falls z kierowcą. Elastyczne tempo. Zapytaj o bezpłatną ofertę. Zespół od 1992.",
      keywords: "wycieczka Ella, Nine Arch Bridge, prywatny kierowca Sri Lanka",
    },
    galleDay: {
      title: "Wycieczka jednodniowa Galle | Fort holenderski",
      description: "Prywatny dzień w Galle: mury Fortu holenderskiego, latarnia i postoje na południu. Z kierowcą. Zapytaj o bezpłatną ofertę. Zapytaj o bezpłatną ofertę.",
      keywords: "wycieczka Galle, Fort Galle prywatnie, południowe wybrzeże Sri Lanka",
    },
    kandyDay: {
      title: "Wycieczka jednodniowa Kandy | Świątynia Zęba",
      description: "Prywatny dzień w Kandy: Świątynia Zęba, punkt widokowy i atrakcje miasta z kierowcą. Zapytaj o bezpłatną ofertę już dziś. Zapytaj o bezpłatną ofertę.",
      keywords: "wycieczka Kandy, Świątynia Zęba, prywatny kierowca Kandy",
    },
    sigiriyaDay: {
      title: "Wycieczka jednodniowa Sigiriya | Lwia Skała",
      description: "Prywatny dzień w Sigiriya: Lwia Skała lub Pidurangala, jaskinie Dambulla i wieś. Z kierowcą. Zapytaj o bezpłatną ofertę. Zapytaj o bezpłatną ofertę.",
      keywords: "wycieczka Sigiriya, Lwia Skała, jaskinie Dambulla z kierowcą",
    },
    destinations: {
      title: "Destynacje Sri Lanka | Ella, Sigiriya, Yala",
      description: "Miejsca na prywatne wycieczki: Ella, Sigiriya, Yala, Kandy, Galle i Mirissa. Wskazówki do tras z kierowcą. Zapytaj o ofertę. Prywatny kierowca.",
      keywords: "destynacje Sri Lanka, Ella Sigiriya Yala, miejsca wycieczki prywatnej, Galle Mirissa",
    },
    guides: {
      title: "Przewodniki Sri Lanka | Wskazówki wycieczki prywatnej",
      description: "Praktyczne przewodniki: najlepszy czas, wskazówki o prywatnym kierowcy i podstawy wiz dla Europy. Zapytaj o bezpłatna ofertę. Zapytaj o ofertę.",
      keywords: "przewodnik Sri Lanka, najlepszy czas, prywatny kierowca, wiza Sri Lanka",
    },
    destElla: {
      title: "Ella Sri Lanka | Nine Arch Bridge i wzgórza",
      description: "Zaplanuj Elle: Nine Arch Bridge, Little Adams Peak i herbata na dzień lub kilka dni. z kierowcą. Zapytaj o bezpłatna ofertę. Zapytaj o ofertę.",
      keywords: "Ella Sri Lanka, Nine Arch Bridge, Little Adams Peak, wycieczka prywatna Ella",
    },
    destSigiriya: {
      title: "Sigiriya Sri Lanka | Lion Rock i Dambulla",
      description: "Sigiriya Lion Rock i Dambulla w prywatnym dniu lub objazdzie z kierowcą. Wskazówki wejscia, timing i tempo. Zapytaj o ofertę. Lokalny zespół na miejscu.",
      keywords: "Sigiriya Sri Lanka, Lion Rock, jaskinie Dambulla, wycieczka prywatna Sigiriya",
    },
    destYala: {
      title: "Park narodowy Yala | Wskazówki prywatnego safari",
      description: "Jeep safari w Yala na wycieczce prywatnej: szanse na lamparta, godziny bram i połączenie z Ella lub wybrzezem. Zapytaj o ofertę. Planuj ze spokojem.",
      keywords: "Yala park narodowy, safari Yala, lampart Sri Lanka, prywatne safari",
    },
    destKandy: {
      title: "Kandy Sri Lanka | Świątynia Zebu przewodnik",
      description: "Odkryj Kandy: Świątynia Zebu, jezioro i wrota wzgorz na prywatnych objazdach z kierowcą. Praktyczne wskazówki. Zapytaj o ofertę. Zapytaj o ofertę.",
      keywords: "Kandy Sri Lanka, Świątynia Zebu, wycieczka prywatna Kandy, wzgórza",
    },
    destGalle: {
      title: "Fort Galle Sri Lanka | Poludniowe wybrzeze",
      description: "Fort Galle, latarnia i plazze południa w jednodniowce lub wielodniowym objazdzie z kierowcą. Spokojne tempo. Zapytaj o ofertę. Trasy na miare.",
      keywords: "Fort Galle, Galle Sri Lanka, południe prywatnie, wycieczka Galle",
    },
    destMirissa: {
      title: "Mirissa Sri Lanka | Plaża i sezon wielorybów",
      description: "Mirissa: plaża, sezon whale watching i połączenie z Galle lub pobytem na południu. z kierowcą. Zapytaj o bezpłatna ofertę. Elastyczne prywatne tempo.",
      keywords: "Mirissa Sri Lanka, plaża Mirissa, wieloryby Mirissa, południe tour",
    },
    guideBestTime: {
      title: "Najlepszy czas na Sri Lanke | Przewodnik sezonow",
      description: "Kiedy jechac na Sri Lanke: okna suche wg wybrzeza i wzgorz, monsun i trasy dopasowane. Zapytaj o ofertę na Twoje daty. Lokalny zespół na miejscu.",
      keywords: "najlepszy czas Sri Lanka, pogoda Sri Lanka, monsun, pora sucha",
    },
    guidePrivateDriver: {
      title: "Prywatny kierowca Sri Lanka | Praktyczny przewodnik",
      description: "Co obejmuje prywatny kierowca na Sri Lance: auto, tempo, hotele i typowe nawyki gości z Europy. Zapytaj o bezpłatna ofertę. Meet na lotnisku na zyczenie.",
      keywords: "prywatny kierowca Sri Lanka, przewodnik chauffeur, wycieczka z kierowcą",
    },
    guideVisa: {
      title: "Wiza i ETA Sri Lanka | Przewodnik dla Europy",
      description: "ETA i podstawy wjazdu dla podróżnych z Europy przed wycieczka prywatna. Wskazówki praktyczne, nie porada prawna. Zapytaj o ofertę. Na miare.",
      keywords: "wiza Sri Lanka, ETA Sri Lanka, wjazd Europa, dokumenty podrozy",
    },
    testimonials: {
      title: "Opinie gości | Sundown Tours Sri Lanka",
      description: "Przeczytaj prawdziwe opinie o naszych prywatnych wycieczkach z kierowcą na Sri Lance od gości z Europy. Live feedback i TripAdvisor. Zapytaj o ofertę.",
      keywords: "opinie Sundown Tours, recenzje wycieczki prywatnej Sri Lanka, testimoniale",
    },
    cancellation: {
      title: "Polityka anulowania | Sundown Tours Sri Lanka",
      description: "Zasady anulowania prywatnych wycieczek Sri Lanka. Darmowe anulowanie zwykle do 14 dni przed startem. Przeczytaj i zapytaj o ofertę. Trasy na miare.",
      keywords: "anulowanie wycieczki Sri Lanka, darmowe 14 dni, polityka Sundown Tours",
    },
    restaurants: {
      title: "Gdzie jesc na Sri Lance | Wybrzeze i tipy tour",
      description: "Gdzie jedza podrozni na wycieczce prywatnej: owoce morza na wybrzezu, rice and curry oraz Sundown Beach Restaurant w Waskaduwa. Zapytaj o ofertę.",
      keywords: "restauracje Sri Lanka, Sundown Beach Restaurant, jedzenie na wycieczce",
    },
    marketNetherlands: {
      title: "Wycieczki Sri Lanka z Holandii | z kierowcą",
      description: "Prywatne wycieczki dla podróżnych z Holandii: z kierowcą, elastyczne dni, meet na lotnisku. Od 1992. Zapytaj o ofertę. Lokalny zespół na miejscu.",
      keywords: "Sri Lanka Holandia, wycieczka prywatna z kierowcą, podroz z Holandii",
    },
    marketGermany: {
      title: "Wycieczki Sri Lanka z Niemiec | z kierowcą",
      description: "Prywatne wycieczki dla podróżnych z Niemiec: z kierowcą, elastyczne dni, lokalny zespół od 1992. Zapytaj o bezpłatna ofertę. Zapytaj o ofertę.",
      keywords: "Sri Lanka Niemcy, wycieczka prywatna z kierowcą, podroz z Niemiec",
    },
    marketFrance: {
      title: "Wycieczki Sri Lanka z Francji | z kierowcą",
      description: "Prywatne wycieczki dla podróżnych z Francji: z kierowcą, elastyczne tempo, lokalny zespół od 1992. Zapytaj o bezpłatna ofertę. Elastyczne prywatne tempo.",
      keywords: "Sri Lanka Francja, wycieczka prywatna z kierowcą, podroz z Francji",
    },
    marketItaly: {
      title: "Wycieczki Sri Lanka z Włoch | z kierowcą",
      description: "Prywatne wycieczki dla podróżnych z Włoch: z kierowcą, elastyczne trasy, lokalny zespół od 1992. Zapytaj o bezpłatna ofertę. Meet na lotnisku na zyczenie.",
      keywords: "Sri Lanka Wlochy, wycieczka prywatna z kierowcą, podroz z Włoch",
    },
    marketSpain: {
      title: "Wycieczki Sri Lanka z Hiszpanii | z kierowcą",
      description: "Prywatne wycieczki dla podróżnych z Hiszpanii: z kierowcą, elastyczne dni, planowanie od 1992. Zapytaj o bezpłatna ofertę. Lokalny zespół na miejscu.",
      keywords: "Sri Lanka Hiszpania, wycieczka prywatna z kierowcą, podroz z Hiszpanii",
    },
    marketPoland: {
      title: "Prywatna wycieczka Sri Lanka z Polski | kierowca",
      description: "Prywatne wycieczki Sri Lanka dla podróżnych z Polski: z kierowcą, elastyczne dni, lokalny zespół od 1992. Zapytaj o ofertę. Goscie z Europy mile widziani.",
      keywords: "wycieczka Sri Lanka Polska, prywatna wycieczka z kierowcą, z Polski",
    },
    marketRussia: {
      title: "Wycieczki Sri Lanka z Rosji | z kierowcą",
      description: "Prywatne wycieczki dla podróżnych z Rosji: z kierowcą, elastyczne trasy, lokalny zespół od 1992. Zapytaj o bezpłatna ofertę. Goscie z Europy mile widziani.",
      keywords: "Sri Lanka Rosja, wycieczka prywatna z kierowcą, podroz z Rosji",
    },
    marketUK: {
      title: "Wycieczki Sri Lanka z UK | z kierowcą",
      description: "Prywatne wycieczki dla podróżnych z UK: z kierowcą, elastyczne dni, lokalny zespół od 1992. Zapytaj o bezpłatna ofertę dzisiaj. Zapytaj o ofertę.",
      keywords: "Sri Lanka UK, wycieczka prywatna z kierowcą, podroz z Wielkiej Brytanii",
    },
  },
  ru: {
    home: {
      title: "Частный тур Шри Ланка с водителем | 5-10 дней",
      description: "Частные туры по Шри Ланке с водителем для путешественников из Европы. Маршруты на 5-10 дней. Команда с 1992 года. Запросите бесплатный расчет.",
      keywords: "частный тур Шри Ланка, с водителем, маршруты 5-10 дней, chauffeur Шри Ланка",
    },
    tours: {
      title: "Частные туры Шри Ланка | 4-10 дней с водителем",
      description: "Сравните частные туры по Шри Ланке от 4 до 10 дней с водителем, сафари и пляжем. Индивидуально, без групповых автобусов. Запросите расчет. С 1992 года.",
      keywords: "пакеты Шри Ланка, частный тур с водителем, тур 7 дней, маршруты Шри Ланка",
    },
    services: {
      title: "Частный водитель и туруслуги | Шри Ланка",
      description: "Туры с водителем, индивидуальные поездки и однодневные экскурсии по Шри Ланке. Гибкий темп, встреча в аэропорту. Запросите расчет. Гости из Европы желанны.",
      keywords: "водитель Шри Ланка, индивидуальный тур, однодневная экскурсия, частный сервис",
    },
    about: {
      title: "О Sundown Tours | Частные туры с 1992",
      description: "Sundown Tours организует частные туры с водителем по Шри Ланке с 1992 года. Местная команда для гостей из Европы. Запросите расчет. Гибкий частный темп.",
      keywords: "Sundown Tours, туроператор Шри Ланка, частные туры с 1992, местный водитель",
    },
    contact: {
      title: "Контакты Sundown Tours | Расчет тура Шри Ланка",
      description: "Спланируйте частный тур по Шри Ланке с водителем. Укажите даты и стиль; отвечаем обычно в течение дня. С 1992. Запросите расчет. Запросите расчет.",
      keywords: "контакт тур Шри Ланка, бесплатный расчет, заказать водителя Шри Ланка",
    },
    tour7: {
      title: "7-дневный тур | Вилпатту и Мирисса",
      description: "Сафари Вилпатту, Сигирия, Канди, Элла и Мирисса (киты по желанию). Отели 4★, частный водитель. Запросите бесплатный расчёт. Запросите бесплатный расчёт.",
      keywords: "7-дневный тур Шри Ланка, Вилпатту Мирисса, частный водитель",
    },
    tour10: {
      title: "10-дневный тур | Круговой маршрут",
      description: "Круг по острову: Вилпатту, Анурадхапура, Сигирия, Канди, Элла и пляжи Хиккадувы. Частный водитель с 1992. Запросите расчёт. Запросите бесплатный расчёт.",
      keywords: "10-дневный тур Шри Ланка, круговой маршрут, Хиккадува пляж",
    },
    tour8: {
      title: "8-дневный тур | Яла и пляж Мирисса",
      description: "Пидурангала, Сигирия, Канди, чай, Элла, сафари Яла и ночи в Мириссе. С водителем. Бесплатная отмена 14 дней. Запросите расчёт. Запросите бесплатный расчёт.",
      keywords: "8-дневный тур Шри Ланка, Яла Мирисса пляж, частный водитель",
    },
    tour6: {
      title: "6-дневный тур | Сафари Яла и пляж",
      description: "Сигирия, Канди, чай, сафари Яла и пляж юго-запада, отели 4★. Бесплатная отмена до 14 дней. Запросите бесплатный расчёт. Запросите бесплатный расчёт.",
      keywords: "6-дневный тур Шри Ланка, сафари Яла пляж, частный водитель",
    },
    tour5: {
      title: "5-дневный тур | Чай и побережье",
      description: "Сигирия, Канди, Нувара-Элия, Элла и юг (река Маду), отели 4★ и водитель. Идеально для короткого отпуска. Запросите расчёт. Запросите бесплатный расчёт.",
      keywords: "5-дневный тур Шри Ланка, Нувара-Элия чай, частный водитель",
    },
    tour4: {
      title: "4-дневный тур | Канди, Элла и Яла",
      description: "Канди, холмы Эллы и сафари Яла, затем Галле или Бентота на юге. С водителем. Бесплатная отмена 14 дней. Запросите расчёт. Запросите бесплатный расчёт.",
      keywords: "4-дневный тур Шри Ланка, Канди Элла Яла, частный водитель",
    },
    tour2ek: {
      title: "2-дневный тур | Элла и Канди",
      description: "Короткий тур в холмы: Удавалава, Элла и Храм Зуба в Канди с частным водителем. Гибкий темп. Запросите бесплатный расчёт. Запросите бесплатный расчёт.",
      keywords: "тур Элла Канди 2 дня, Храм Зуба, частный водитель Шри Ланка",
    },
    tour2ey: {
      title: "2-дневный тур | Элла и сафари Яла",
      description: "Выходные: холмы Эллы и частное джип-сафари в Яла с водителем и отелем 4★. Бесплатная отмена до 14 дней. Запросите расчёт. Запросите бесплатный расчёт.",
      keywords: "сафари Яла 2 дня, тур Элла Яла, частный водитель Шри Ланка",
    },
    ellaDay: {
      title: "Дневной тур Элла | Nine Arch",
      description: "Частный день в Элле: Nine Arch Bridge, Little Adam’s Peak и водопад Равана с водителем. Гибкий темп. Запросите бесплатный расчёт. Команда с 1992.",
      keywords: "дневной тур Элла, Nine Arch Bridge, частный водитель Шри Ланка",
    },
    galleDay: {
      title: "Дневной тур Галле | Голландский форт",
      description: "Частный день в Галле: стены Голландского форта, маяк и остановки на юге. С водителем. Запросите бесплатный расчёт сегодня. Запросите бесплатный расчёт.",
      keywords: "дневной тур Галле, Форт Галле частно, южное побережье Шри Ланка",
    },
    kandyDay: {
      title: "Дневной тур Канди | Храм Зуба",
      description: "Частный день в Канди: Храм Зуба, смотровая и главные места города с водителем. Запросите бесплатный расчёт без обязательств. Запросите бесплатный расчёт.",
      keywords: "дневной тур Канди, Храм Зуба, частный водитель Канди",
    },
    sigiriyaDay: {
      title: "Дневной тур Сигирия | Львиная скала",
      description: "Частный день в Сигирии: Львиная скала или Пидурангала, пещеры Дамбуллы и деревня. С водителем. Запросите бесплатный расчёт. Запросите бесплатный расчёт.",
      keywords: "дневной тур Сигирия, Львиная скала, пещеры Дамбулла с водителем",
    },
    destinations: {
      title: "Направления Шри Ланка | Элла, Сигирия, Яла",
      description: "Места для частных туров: Элла, Сигирия, Яла, Канди, Галле и Мирисса. Советы для маршрутов с водителем. Запросите расчет. Местная команда на месте.",
      keywords: "направления Шри Ланка, Элла Сигирия Яла, места частного тура, Галле Мирисса",
    },
    guides: {
      title: "Гиды по Шри Ланке | Советы для частного тура",
      description: "Практические гиды: лучшее время, советы по частному водителю и основы визы для Европы. Планируйте лучше. Запросите расчет. Планируйте спокойно.",
      keywords: "гид Шри Ланка, лучшее время, частный водитель, виза Шри Ланка",
    },
    destElla: {
      title: "Элла Шри Ланка | Nine Arch Bridge и холмы",
      description: "Спланируйте Эллу: Nine Arch Bridge, Little Adams Peak и чай на день или несколько. С водителем. Запросите бесплатный расчет. Гости из Европы желанны.",
      keywords: "Элла Шри Ланка, Nine Arch Bridge, Little Adams Peak, частный тур Элла",
    },
    destSigiriya: {
      title: "Сигирия Шри Ланка | Lion Rock и Дамбулла",
      description: "Сигирия Lion Rock и Дамбулла в частный день или тур с водителем. Советы подъема, тайминг и темп. Запросите расчет. Местная команда на месте.",
      keywords: "Сигирия Шри Ланка, Lion Rock, пещеры Дамбулла, частный тур Сигирия",
    },
    destYala: {
      title: "Национальный парк Яла | Советы частного сафари",
      description: "Джип-сафари в Яла на частном туре: шансы увидеть леопарда, время ворот и связка с Эллой или побережьем. Запросите расчет. Гибкий частный темп.",
      keywords: "Яла национальный парк, сафари Яла, леопард Шри Ланка, частное сафари",
    },
    destKandy: {
      title: "Канди Шри Ланка | Храм Зуба гид",
      description: "Откройте Канди: Храм Зуба, озеро и вход в холмы на частных турах с водителем. Практические советы. Запросите расчет. Местная команда на месте.",
      keywords: "Канди Шри Ланка, Храм Зуба, частный тур Канди, холмы",
    },
    destGalle: {
      title: "Форт Галле Шри Ланка | Южное побережье",
      description: "Форт Галле, маяк и пляжи юга в однодневке или многодневном туре с водителем. Спокойный темп. Запросите расчет. Встреча в аэропорту по запросу.",
      keywords: "Форт Галле, Галле Шри Ланка, юг частно, экскурсия Галле",
    },
    destMirissa: {
      title: "Мирисса Шри Ланка | Пляж и сезон китов",
      description: "Мирисса: пляж, сезон наблюдения за китами и связь с Галле или отдыхом на юге. С водителем. Запросите бесплатный расчет. Гости из Европы желанны.",
      keywords: "Мирисса Шри Ланка, пляж Мирисса, киты Мирисса, юг тур",
    },
    guideBestTime: {
      title: "Лучшее время на Шри Ланке | Сезонный гид",
      description: "Когда ехать на Шри Ланку: сухие окна по побережью и холмам, муссон и смена маршрутов. Запросите расчет на ваши даты. Локальная команда с 1992 года.",
      keywords: "лучшее время Шри Ланка, погода Шри Ланка, муссон, сухой сезон",
    },
    guidePrivateDriver: {
      title: "Частный водитель Шри Ланка | Практический гид",
      description: "Что включает частный водитель на Шри Ланке: авто, темп, отели и привычки гостей из Европы. Запросите бесплатный расчет. Местная команда на месте.",
      keywords: "частный водитель Шри Ланка, гид chauffeur, тур с водителем",
    },
    guideVisa: {
      title: "Виза и ETA Шри Ланка | Гид для Европы",
      description: "ETA и основы въезда для путешественников из Европы перед частным туром. Практические заметки, не юрконсультация. Запросите расчет. Планируйте спокойно.",
      keywords: "виза Шри Ланка, ETA Шри Ланка, въезд Европа, документы поездки",
    },
    testimonials: {
      title: "Отзывы гостей | Sundown Tours Шри Ланка",
      description: "Читайте реальные отзывы о наших частных турах с водителем по Шри Ланке от гостей из Европы. Live feedback и TripAdvisor. Запросите расчет. Под вас.",
      keywords: "отзывы Sundown Tours, отзывы частный тур Шри Ланка, testimonials",
    },
    cancellation: {
      title: "Политика отмены | Sundown Tours Шри Ланка",
      description: "Условия отмены частных туров по Шри Ланке. Бесплатная отмена обычно возможна за 14 дней до старта. Прочитайте и запросите расчет. Гибкий частный темп.",
      keywords: "отмена тура Шри Ланка, бесплатно 14 дней, политика Sundown Tours",
    },
    restaurants: {
      title: "Где есть на Шри Ланке | Побережье и советы тура",
      description: "Где едят путешественники в частном туре: морепродукты на побережье, rice and curry и Sundown Beach Restaurant в Васкадуве. Запросите расчет.",
      keywords: "рестораны Шри Ланка, Sundown Beach Restaurant, еда в туре",
    },
    marketNetherlands: {
      title: "Туры Шри Ланка из Нидерландов | с водителем",
      description: "Частные туры для путешественников из Нидерландов: с водителем, гибкие дни, встреча в аэропорту. С 1992. Запросите расчет. Гости из Европы желанны.",
      keywords: "Шри Ланка Нидерланды, частный тур с водителем, из Голландии",
    },
    marketGermany: {
      title: "Туры Шри Ланка из Германии | с водителем",
      description: "Частные туры для путешественников из Германии: с водителем, гибкие дни, местная команда с 1992. Запросите бесплатный расчет. Местная команда на месте.",
      keywords: "Шри Ланка Германия, частный тур с водителем, из Германии",
    },
    marketFrance: {
      title: "Туры Шри Ланка из Франции | с водителем",
      description: "Частные туры для путешественников из Франции: с водителем, гибкий темп, местная команда с 1992. Запросите бесплатный расчет. Гибкий частный темп.",
      keywords: "Шри Ланка Франция, частный тур с водителем, из Франции",
    },
    marketItaly: {
      title: "Туры Шри Ланка из Италии | с водителем",
      description: "Частные туры для путешественников из Италии: с водителем, гибкие маршруты, местная команда с 1992. Запросите бесплатный расчет. Гости из Европы желанны.",
      keywords: "Шри Ланка Италия, частный тур с водителем, из Италии",
    },
    marketSpain: {
      title: "Туры Шри Ланка из Испании | с водителем",
      description: "Частные туры для путешественников из Испании: с водителем, гибкие дни, планирование с 1992. Запросите бесплатный расчет. Гибкий частный темп.",
      keywords: "Шри Ланка Испания, частный тур с водителем, из Испании",
    },
    marketPoland: {
      title: "Туры Шри Ланка из Польши | с водителем",
      description: "Частные туры для путешественников из Польши: с водителем, гибкие дни, местная команда с 1992. Запросите бесплатный расчет. Гости из Европы желанны.",
      keywords: "Шри Ланка Польша, частный тур с водителем, из Польши",
    },
    marketRussia: {
      title: "Частный тур Шри Ланка из России | с водителем",
      description: "Частные туры по Шри Ланке для путешественников из России: с водителем, гибкие маршруты, команда с 1992. Запросите расчет. Планируйте спокойно.",
      keywords: "тур Шри Ланка Россия, частный тур с водителем, из России",
    },
    marketUK: {
      title: "Туры Шри Ланка из Великобритании | водитель",
      description: "Частные туры для путешественников из UK: с водителем, гибкие дни, местная команда с 1992. Запросите бесплатный расчет. Встреча в аэропорту по запросу.",
      keywords: "Шри Ланка UK, частный тур с водителем, из Великобритании",
    },
  },
  nl: {
    home: {
      title: "Privé rondreis Sri Lanka met chauffeur | 5-10 dagen",
      description: "Privé rondreizen Sri Lanka met chauffeur voor Europese reizigers. Routes van 5 tot 10 dagen. Team sinds 1992. Vraag vandaag een gratis offerte.",
      keywords: "privé rondreis Sri Lanka, rondreis met chauffeur, Sri Lanka vakantie",
    },
    tours: {
      title: "Privé rondreizen Sri Lanka | 4-10 dagen chauffeur",
      description: "Vergelijk privé rondreizen Sri Lanka van 4 tot 10 dagen met chauffeur, safari en strand. Op maat, geen groepsbussen. Vraag een offerte. Op maat.",
      keywords: "Sri Lanka pakketten, privé rondreis chauffeur, tour 7 dagen, itineraries",
    },
    services: {
      title: "Privéchauffeur & tourservices | Sri Lanka",
      description: "Rondreizen met chauffeur, vakanties op maat en dagtrips op Sri Lanka. Flexibel tempo, meet op de luchthaven. Sinds 1992. Vraag een offerte..",
      keywords: "privéchauffeur Sri Lanka, rondreis met chauffeur, dagtrips",
    },
    about: {
      title: "Over Sundown Tours | Privé sinds 1992",
      description: "Sundown Tours plant privé rondreizen met chauffeur op Sri Lanka sinds 1992. Lokaal team voor Europese gasten. Vraag een gratis offerte. Routes op maat.",
      keywords: "Sundown Tours, Sri Lanka operator, privé tours sinds 1992, lokale chauffeur",
    },
    contact: {
      title: "Contact Sundown Tours | Offerte Sri Lanka",
      description: "Plan een privé rondreis Sri Lanka met chauffeur. Stuur data en stijl; we antwoorden meestal binnen een dag. Sinds 1992. Vraag een offerte. Privechauffeur.",
      keywords: "contact tour Sri Lanka, gratis offerte, chauffeur Sri Lanka boeken",
    },
    tour7: {
      title: "7-daagse privé rondreis | Wilpattu & Mirissa",
      description: "Wilpattu-safari, Sigiriya, Kandy, Ella en Mirissa (walvissen optioneel). 4-sterrenhotels, privéchauffeur. Vraag een gratis offerte. Lokaal team sinds 1992.",
      keywords: "7-daagse Sri Lanka rondreis, Wilpattu Mirissa, privé met chauffeur",
    },
    tour10: {
      title: "10-daagse privé rondreis | Rondje eiland",
      description: "Eilandrondreis: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella en stranddagen in Hikkaduwa. Privéchauffeur sinds 1992. Vraag een offerte. Team sinds 1992.",
      keywords: "10-daagse Sri Lanka rondreis, eilandrondreis chauffeur, Hikkaduwa strand",
    },
    tour8: {
      title: "8-daagse privé rondreis | Yala & Mirissa-strand",
      description: "Pidurangala, Sigiriya, Kandy, thee, Ella, Yala-safari en nachten in Mirissa. Met chauffeur. Gratis annuleren 14 dagen. Offerte. Vraag een gratis offerte.",
      keywords: "8-daagse Sri Lanka rondreis, Yala Mirissa strand, privéchauffeur",
    },
    tour6: {
      title: "6-daagse privé rondreis | Yala-safari & strand",
      description: "Sigiriya, Kandy, thee, Yala-safari en zuidwestelijk strand met 4-sterrenhotels. Gratis annuleren tot 14 dagen. Vraag een offerte. Vraag een gratis offerte.",
      keywords: "6-daagse Sri Lanka rondreis, Yala safari strand, privéchauffeur",
    },
    tour5: {
      title: "5-daagse privé rondreis | Thee & kust",
      description: "Sigiriya, Kandy, Nuwara Eliya, Ella en zuidkust (Madu River), 4-sterrenhotels en chauffeur. Ideaal kort verblijf. Vraag een offerte. Flexibel privé tempo.",
      keywords: "5-daagse Sri Lanka rondreis, Nuwara Eliya thee, privéchauffeur",
    },
    tour4: {
      title: "4-daagse privé rondreis | Kandy, Ella & Yala",
      description: "Kandy, Ella-heuvels en Yala-safari, daarna Galle of Bentota aan de zuidkust. Met chauffeur. Gratis annuleren 14 dagen. Offerte. Vraag een gratis offerte.",
      keywords: "4-daagse Sri Lanka rondreis, Kandy Ella Yala, privé met chauffeur",
    },
    tour2ek: {
      title: "2-daagse privé rondreis | Ella & Kandy",
      description: "Korte heuvelreis: Udawalawa, Ella en de Tandtempel in Kandy met privéchauffeur. Flexibel tempo. Vraag vandaag een offerte. Vraag een gratis offerte.",
      keywords: "2 dagen Ella Kandy, Tandtempel tour, privéchauffeur Sri Lanka",
    },
    tour2ey: {
      title: "2-daagse privé rondreis | Ella & Yala-safari",
      description: "Weekend Ella plus privé jeep-safari in Yala met chauffeur en 4-sterrenhotel. Gratis annuleren tot 14 dagen. Vraag een offerte. Vraag een gratis offerte.",
      keywords: "Yala safari 2 dagen, privé rondreis Ella Yala, chauffeur Sri Lanka",
    },
    ellaDay: {
      title: "Ella dagtocht met chauffeur | Nine Arch",
      description: "Privé dag in Ella: Nine Arch Bridge, Little Adam’s Peak en Ravana Falls met chauffeur. Flexibel tempo. Vraag een gratis offerte. Vraag een gratis offerte.",
      keywords: "Ella dagtocht, Nine Arch Bridge, privéchauffeur Sri Lanka",
    },
    galleDay: {
      title: "Galle dagtocht met chauffeur | Hollands fort",
      description: "Privé dag in Galle: muren van het Hollandse fort, vuurtoren en stops aan de zuidkust. Met chauffeur. Vraag een gratis offerte. Vraag een gratis offerte.",
      keywords: "Galle dagtocht, Galle Fort privé, zuidkust Sri Lanka chauffeur",
    },
    kandyDay: {
      title: "Kandy dagtocht met chauffeur | Tandtempel",
      description: "Privé dag in Kandy: Tandtempel, uitzichtpunt en hoogtepunten van de stad met chauffeur. Vraag vandaag een gratis offerte. Vraag een gratis offerte.",
      keywords: "Kandy dagtocht, Tandtempel tour, privéchauffeur Kandy",
    },
    sigiriyaDay: {
      title: "Sigiriya dagtocht met chauffeur | Leeuwenrots",
      description: "Privé dag in Sigiriya: Leeuwenrots of Pidurangala, Dambulla-grotten en dorpsleven. Met chauffeur. Vraag een gratis offerte. Vraag een gratis offerte.",
      keywords: "Sigiriya dagtocht, Leeuwenrots, Dambulla grotten met chauffeur",
    },
    destinations: {
      title: "Bestemmingen Sri Lanka | Ella, Sigiriya, Yala",
      description: "Bestemmingen voor privé tours: Ella, Sigiriya, Yala, Kandy, Galle en Mirissa. Tips voor routes met chauffeur. Vraag een offerte. Luchthavenmeet op verzoek.",
      keywords: "bestemmingen Sri Lanka, Ella Sigiriya Yala, privé tour plekken, Galle Mirissa",
    },
    guides: {
      title: "Reisgidsen Sri Lanka | Tips privé rondreis",
      description: "Praktische gidsen: beste reistijd, tips over privéchauffeur en visa-basics voor Europa. Beter plannen. Vraag een offerte. Lokaal team ter plaatse.",
      keywords: "reisgids Sri Lanka, beste reistijd, privéchauffeur tips, visa Sri Lanka",
    },
    destElla: {
      title: "Ella Sri Lanka | Nine Arch Bridge & heuvels",
      description: "Plan Ella: Nine Arch Bridge, Little Adams Peak en thee voor een dag of meerdaags. Met chauffeur. Vraag een gratis offerte. Lokaal team ter plaatse.",
      keywords: "Ella Sri Lanka, Nine Arch Bridge, Little Adams Peak, privé tour Ella",
    },
    destSigiriya: {
      title: "Sigiriya rotsfort | Gids met privé chauffeur",
      description: "Sigiriya Lion Rock en Dambulla op een privé dag of rondreis met chauffeur. Tips klim, timing en tempo. Vraag een offerte. Europese gasten welkom.",
      keywords: "Sigiriya Sri Lanka, Lion Rock, Dambulla grotten, privé tour Sigiriya",
    },
    destYala: {
      title: "Yala National Park | Tips privé safari",
      description: "Yala jeep safari op een privé rondreis: luipaardkansen, poorttijden en combinatie met Ella of kust. Vraag een offerte voor data. Privechauffeur.",
      keywords: "Yala National Park, Yala safari, luipaard Sri Lanka, privé safari",
    },
    destKandy: {
      title: "Kandy Sri Lanka | Tandtempel gids",
      description: "Ontdek Kandy: Tandtempel, meer en poort naar de heuvels op privé rondreizen met chauffeur. Praktische tips. Vraag een offerte. Routes op maat.",
      keywords: "Kandy Sri Lanka, Tandtempel, privé tour Kandy, heuvels",
    },
    destGalle: {
      title: "Galle Fort Sri Lanka | Zuidkust privé",
      description: "Galle Fort, vuurtoren en zuidelijke stranden op een dagtocht of meerdaagse rondreis met chauffeur. Rustig tempo. Vraag een offerte. Vraag een offerte.",
      keywords: "Galle Fort, Galle Sri Lanka, zuidkust privé, Galle dagtocht",
    },
    destMirissa: {
      title: "Mirissa Sri Lanka | Strand & walvisseizoen",
      description: "Mirissa: strandtijd, walvisseizoen en koppeling met Galle of een zuidverblijf op privé tours. Vraag een gratis offerte. Lokaal team ter plaatse.",
      keywords: "Mirissa Sri Lanka, Mirissa strand, walvissen Mirissa, zuidkust tour",
    },
    guideBestTime: {
      title: "Beste reistijd Sri Lanka | Seizoensgids",
      description: "Wanneer Sri Lanka bezoeken: droge vensters per kust en heuvels, moesson en aangepaste routes. Vraag een offerte voor je data. Europese gasten welkom.",
      keywords: "beste reistijd Sri Lanka, weer Sri Lanka, moesson, droog seizoen",
    },
    guidePrivateDriver: {
      title: "Privechauffeur Sri Lanka | Praktische gids",
      description: "Wat een privéchauffeur op Sri Lanka omvat: auto, tempo, hotels en gewoonten van Europese gasten. Vraag een gratis offerte. Lokaal team ter plaatse.",
      keywords: "privéchauffeur Sri Lanka, chauffeur gids, rondreis met chauffeur",
    },
    guideVisa: {
      title: "Visa & ETA Sri Lanka | Gids voor Europa",
      description: "ETA en inreisbasics voor Europese reizigers voor een privé tour. Praktische notities, geen juridisch advies. Vraag een offerte. Vraag een offerte.",
      keywords: "visa Sri Lanka, ETA Sri Lanka, inreis Europa, reisdocumenten",
    },
    testimonials: {
      title: "Gastreviews | Sundown Tours Sri Lanka",
      description: "Lees echte reviews over onze privé rondreizen met chauffeur op Sri Lanka van Europese gasten. Live feedback en TripAdvisor. Vraag een offerte.",
      keywords: "Sundown Tours reviews, Sri Lanka privé tour reviews, chauffeur testimonials",
    },
    cancellation: {
      title: "Annuleringsvoorwaarden | Sundown Tours",
      description: "Annuleringsregels voor privé Sri Lanka tours. Gratis annuleren is vaak tot 14 dagen voor start mogelijk. Lees en vraag een offerte. Privechauffeur.",
      keywords: "annulering Sri Lanka tour, gratis 14 dagen, Sundown Tours policy",
    },
    restaurants: {
      title: "Eten op Sri Lanka | Kust & tourtips",
      description: "Waar reizigers eten op privé tours: seafood aan de kust, rice and curry, plus Sundown Beach Restaurant in Waskaduwa. Vraag een offerte. Routes op maat.",
      keywords: "restaurants Sri Lanka, Sundown Beach Restaurant, eten op rondreis",
    },
    marketNetherlands: {
      title: "Sri Lanka rondreis vanuit Nederland | chauffeur",
      description: "Privé rondreizen voor reizigers uit Nederland: met chauffeur, flexibele dagen, meet op de luchthaven. Sinds 1992. Vraag een offerte. Sinds 1992.",
      keywords: "Sri Lanka vakantie Nederland, privé rondreis chauffeur, vanuit Nederland",
    },
    marketGermany: {
      title: "Sri Lanka rondreis vanuit Duitsland | chauffeur",
      description: "Privé rondreizen voor reizigers uit Duitsland: met chauffeur, flexibele dagen, lokaal team sinds 1992. Vraag een gratis offerte. Routes op maat.",
      keywords: "Sri Lanka Duitsland, privé rondreis chauffeur, vanuit Duitsland",
    },
    marketFrance: {
      title: "Sri Lanka rondreis vanuit Frankrijk | chauffeur",
      description: "Privé rondreizen voor reizigers uit Frankrijk: met chauffeur, flexibel tempo, lokaal team sinds 1992. Vraag een gratis offerte. Privechauffeur.",
      keywords: "Sri Lanka Frankrijk, privé rondreis chauffeur, vanuit Frankrijk",
    },
    marketItaly: {
      title: "Sri Lanka rondreis vanuit Italie | chauffeur",
      description: "Privé rondreizen voor reizigers uit Italie: met chauffeur, flexibele routes, lokaal team sinds 1992. Vraag een gratis offerte. Lokaal team ter plaatse.",
      keywords: "Sri Lanka Italie, privé rondreis chauffeur, vanuit Italie",
    },
    marketSpain: {
      title: "Sri Lanka rondreis vanuit Spanje | chauffeur",
      description: "Privé rondreizen voor reizigers uit Spanje: met chauffeur, flexibele dagen, planning sinds 1992. Vraag een gratis offerte. Vraag een offerte.",
      keywords: "Sri Lanka Spanje, privé rondreis chauffeur, vanuit Spanje",
    },
    marketPoland: {
      title: "Sri Lanka rondreis vanuit Polen | chauffeur",
      description: "Privé rondreizen voor reizigers uit Polen: met chauffeur, flexibele dagen, lokaal team sinds 1992. Vraag een gratis offerte. Lokaal team ter plaatse.",
      keywords: "Sri Lanka Polen, privé rondreis chauffeur, vanuit Polen",
    },
    marketRussia: {
      title: "Sri Lanka rondreis vanuit Rusland | chauffeur",
      description: "Privé rondreizen voor reizigers uit Rusland: met chauffeur, flexibele routes, lokaal team sinds 1992. Vraag een gratis offerte. Lokaal team ter plaatse.",
      keywords: "Sri Lanka Rusland, privé rondreis chauffeur, vanuit Rusland",
    },
    marketUK: {
      title: "Sri Lanka rondreis vanuit UK | met chauffeur",
      description: "Privé rondreizen voor reizigers uit het UK: met chauffeur, flexibele dagen, lokaal team sinds 1992. Vraag een gratis offerte. Plan met vertrouwen.",
      keywords: "Sri Lanka UK, privé rondreis chauffeur, vanuit Verenigd Koninkrijk",
    },
  },
};
/** Throws if any title > 60 or description outside 140-155 (inclusive). */
export function assertSeoCtrCopy(copy = SEO_CTR_COPY) {
  const locales = Object.keys(copy);
  const DIACRITIC_LOCALES = new Set(['de', 'fr', 'it', 'es', 'pl', 'nl']);
  const hasNonAscii = (s) => /[^\u0000-\u007f]/.test(s);
  for (const locale of locales) {
    const pages = copy[locale];
    if (!pages || typeof pages !== 'object') {
      throw new Error(`SEO_CTR_COPY.${locale}: missing locale block`);
    }
    const titles = new Map();
    const descs = new Map();
    for (const [pageId, row] of Object.entries(pages)) {
      if (!row || typeof row !== 'object') {
        throw new Error(`SEO_CTR_COPY.${locale}.${pageId}: missing page`);
      }
      const title = row.title;
      const description = row.description;
      if (typeof title !== 'string') {
        throw new Error(`SEO_CTR_COPY.${locale}.${pageId}: title must be a string`);
      }
      if (typeof description !== 'string') {
        throw new Error(`SEO_CTR_COPY.${locale}.${pageId}: description must be a string`);
      }
      if (title.length > 60) {
        throw new Error(
          `SEO_CTR_COPY.${locale}.${pageId}: title length ${title.length} > 60 ("${title}")`,
        );
      }
      if (description.length < 140 || description.length > 155) {
        throw new Error(
          `SEO_CTR_COPY.${locale}.${pageId}: description length ${description.length} outside 140-155 ("${description}")`,
        );
      }
      if (titles.has(title)) {
        throw new Error(
          `SEO_CTR_COPY.${locale}: duplicate title for ${titles.get(title)} and ${pageId}`,
        );
      }
      titles.set(title, pageId);
      if (descs.has(description)) {
        throw new Error(
          `SEO_CTR_COPY.${locale}: duplicate description for ${descs.get(description)} and ${pageId}`,
        );
      }
      descs.set(description, pageId);
          const blob = `${title} ${description} ${row.keywords || ''}`;
      const bad =
        (locale === 'de' && /\bfur\b|\bFur\b|\bOsterreich\b|\bGaeste\b|\bHohlen\b|\bLowenfelsen\b|\bSudkuste\b/i.test(blob)) ||
        (locale === 'fr' && /\bprive\b|\bprives\b|\bprivee\b|\bjournee\b|\baeroport\b|\bmontee\b/i.test(blob)) ||
        (locale === 'nl' && /\bprive\b|\bPrive\b|\bprivechauffeur\b|\bBelgie\b/.test(blob)) ||
        (locale === 'es' && /\bdias\b|\bdia\b|\bExcursion\b|\bexcursion\b|\btambien\b|\bhuespedes\b/i.test(blob)) ||
        (locale === 'pl' && /z kierowca\b|\bpodroznych\b|\bgosci\b|\bzespol\b|\bbezplatn|\boferte\b/i.test(blob)) ||
        (locale === 'it' && /\bcitta\b|\bperche\b/i.test(blob));
      if (bad) {
        throw new Error(
          `SEO_CTR_COPY.${locale}.${pageId}: missing expected diacritics in SEO copy`,
        );
      }
      if (locale === 'ru' && !/[\u0400-\u04FF]/.test(`${title}${description}`)) {
        throw new Error(`SEO_CTR_COPY.ru.${pageId}: expected Cyrillic characters`);
      }
      if (locale !== 'en' && /Plan with confidence|Tailor-made pacing|Licensed since 1992\. Get a free quote/i.test(blob)) {
        throw new Error(`SEO_CTR_COPY.${locale}.${pageId}: English pad leaked into localized copy`);
      }
      if (locale !== 'en' && /\$\s?\d/.test(`${title}${description}`)) {
        throw new Error(`SEO_CTR_COPY.${locale}.${pageId}: $ price not allowed outside EN`);
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
  console.log('locale\tpageId\ttitleLen\tdescLen\ttitle');
  for (const locale of Object.keys(SEO_CTR_COPY)) {
    for (const pageId of tourPages) {
      const row = SEO_CTR_COPY[locale][pageId];
      console.log(
        `${locale}\t${pageId}\t${row.title.length}\t${row.description.length}\t${row.title}`,
      );
    }
  }
  assertSeoCtrCopy();
  console.log('\nassertSeoCtrCopy: OK');
}
