import type { ArticleContent } from '../articles/types';

/**
 * France market landing page (pageId: marketFrance).
 * Targets FR Google Trends without competing with airlines or Le Routard.
 */
export const FRANCE_FROM_FR_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Travel from France: Flights from Paris, When to Go and Private Tours',
    lead:
      'French travellers searching for a Sri Lanka voyage usually want three answers first: flight time from Paris, when to go, and how to visit the island without a rigid coach circuit. This page covers Paris to Colombo flights, ETA and arrival card, weather, temples, safari and how a private chauffeur tour works after you land.',
    heroImage: 'assets/img/package-2.webp',
    heroAlt: 'Private Sri Lanka circuit with chauffeur guide for travellers from France',
    sections: [
      {
        id: 'who',
        title: 'A Sri Lanka trip from Franceprivate circuit, not a package brochure',
        body: 'Sundown Tours is based in Sri Lanka. We do not sell airline tickets, we are not Jet Tours, Fram or Booking.com, and we are not Le Routard. We meet you at Colombo (CMB) with a licensed chauffeur guide and run a tailor made circuit: Cultural Triangle, kandy sri lanka, hill country, safari and beach.\n\nSearches such as SriLankan Airlines, Air France, Skyscanner or vol paris sri lanka are shopping for seats. Searches such as voyage sri lanka, partir au sri lanka, voyager au sri lanka, circuit sri lanka, circuit au sri lanka and que faire au sri lanka are what we serve.',
      },
      {
        id: 'flight',
        title: 'Paris to Sri Lanka flight time and direct flights',
        body: 'A Paris to Colombo (CMB) flight is typically about 10 to 12 hours in the air, longer with a Gulf or Istanbul connection. Direct flights exist on some days and seasonsconfirm the current timetable with the airline (SriLankan Airlines and partners). We do not quote airfares.\n\nOnce you have dates, we quote the ground tour and plan the first hotel night around your actual landing, including overnight arrivals from CDG.',
      },
      {
        id: 'airport',
        title: 'Sri Lanka airport (CMB) vs Colombo city',
        body: 'Bandaranaike International Airport is at Katunayake, not downtown. Negombo is 20 to 40 minutes from the terminal and suits late Paris arrivals. Colombo city is typically  45 to 90 minutes. The commercial capital people mean by “capitale Sri Lanka” in travel searches is usually Colombo; the administrative capital is Sri Jayawardenepura Kotte, next door.\n\nDo not drive to Sigiriya the same night after a long haul landing unless you insist.',
      },
      {
        id: 'entry',
        title: 'Visa, ETA and arrival card for French passports',
        body: 'French nationals need an Electronic Travel Authorisation (ETA) before boarding. From 25 May 2026 the tourist ETA is free for 40 listed countries including France, for 30 days with double entryyou still apply in advance at eta.gov.lk. Searches for “arrival card Sri Lanka” refer to the same official pre arrival process, not a paper form at a kiosk that replaces the ETA.\n\nKeep about six months’ passport validity. Apply only on the official site.',
      },
      {
        id: 'when',
        title: 'When to go: weather and “quand partir au Sri Lanka”',
        body: 'December to March is peak for west and south beaches (Negombo, Mirissa, Weligama, Galle). May to September often favours the east and is strong for Cultural Triangle sightseeing and dry season safari (Yala, Udawalawe).\n\nQuand partir sri lanka and quand aller au sri lanka depend on the coast, not a single month. Sri lanka heure / time in sri lanka is UTC+5:30. Currency is the Sri Lankan rupee (LKR). We do not publish a live euro rate in sri lanka ticker.',
      },
      {
        id: 'whatToDo',
        title: 'What to do: temples, Lion Rock, train, safari, beaches',
        body: 'A first visit typically includes Sigiriya Lion Rock (rocher du lion sri lanka), Kandy’s Temple of the Tooth (kandy sri lanka), the Kandy to Ella tea country train, a jeep safari at Yala or Udawalawe, and a beach finish at Mirissa or Weligama. Buddhism is the majority religion; dress modestly at temples.\n\nSeven days covers the highlights. Ten days is calmer. A Maldives add on is a separate flight from CMB, not a road trip. Ou se trouve le sri lanka: Indian Ocean, south of India. Sri lanka carte: we plan the circuit on a map; we are not a news site and not cricket coverage.',
      },
    ],
    faq: [
      {
        q: 'How long is the flight from Paris to Sri Lanka?',
        a: 'Typically about 10 to 12 hours in the air. Direct options exist on some dates; many itineraries connect in the Gulf. We do not sell tickets; we plan your first night around the real arrival.',
      },
      {
        q: 'Do I need a visa or arrival card for Sri Lanka from France?',
        a: 'Apply for an ETA at eta.gov.lk before you fly. From 25 May 2026 the tourist ETA is free for French passports for 30 days with double entry. That official process is what “arrival card” searches usually meannot a substitute third party website.',
      },
      {
        q: 'When is the best time to visit Sri Lanka from France?',
        a: 'It depends on the coast. December to March for the south and west; May to September often better for the east, Cultural Triangle and dry season safari.',
      },
      {
        q: 'Where is Sri Lanka and what is the capital?',
        a: 'Ou se trouve le sri lanka: island in the Indian Ocean, south of India. Capitale sri lanka: administrative Sri Jayawardenepura Kotte; travellers land in Colombo. Sri lanka time is UTC+5:30.',
      },
      {
        q: 'Euro to LKR  do you give today’s rate?',
        a: 'Sri lanka euro and euro sri lanka rupee change daily. Pay in rupees on the island. We quote the private circuit clearly; we are not a bureau de change.',
      },
    ],
    ctaTitle: 'Plan a private Sri Lanka trip from France',
    ctaBody: 'Send your Paris flight dates and what you want to see. We reply with a tailor made chauffeur itinerary.',
    ctaLabel: 'Contact Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: '7 day private tour' },
      { pageId: 'tour10', label: '10 day tour' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya Lion Rock' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destWeligama', label: 'Weligama' },
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destColombo', label: 'Colombo' },
      { pageId: 'destYala', label: 'Yala' },
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
  fr: {
    h1: 'Voyage au Sri Lanka depuis la France : vol Paris, quand partir et circuit prive',
    lead:
      'Pour un voyage au Sri Lanka, les recherches francaises commencent souvent par la duree du vol Paris to Colombo, la meteo, le visa et que visiter sans circuit autocar. Cette page repond : vol direct, aeroport CMB, ETA / arrival card, decalage horaire, temples, safari, train, puis comment un circuit prive avec chauffeur fonctionne apres l’atterrissage.',
    heroAlt: 'Circuit prive au Sri Lanka avec chauffeur guide pour voyageurs venus de France',
    sections: [
      {
        title: 'Voyage Sri Lanka depuis la Francecircuit prive, pas un brochure de voyagiste',
        body: 'Sundown Tours est base au Sri Lanka. Nous ne vendons pas de billets d’avion. Nous ne sommes pas Jet Tours, Fram, Booking.com, Air France ni Le Routard. Nous vous accueillons a Colombo (CMB) avec un chauffeur guide agree et construisons un circuit sri lanka sur mesure : Triangle Culturel, kandy sri lanka, pays du the, safari et plage.\n\nLes recherches sri lanka vol, vol sri lanka, vol paris sri lanka, Air France ou Skyscanner concernent le siege avion. Voyage sri lanka, voyage au sri lanka, partir au sri lanka, voyager au sri lanka, le sri lanka, circuit sri lanka, circuit au sri lanka et que faire au sri lanka correspondent a ce que nous organisons depuis 1992.',
      },
      {
        title: 'Vol Paris to Sri Lanka : duree et vol direct',
        body: 'Un vol Paris to Colombo (CMB) dure typiquement environ 10 a 12 heures en l’air, plus si correspondance via le Golfe ou Istanbul. Des vols directs existent certains jours et saisonsconfirmez l’horaire aupres de la compagnie (SriLankan Airlines et partenaires). Nous ne cotons pas les tarifs aeriens.\n\nDes que vos dates sont fixees, nous chiffrons le circuit au sol et calons la premiere nuit d’hotel sur l’heure reelle d’arrivee, y compris les atterrissages de nuit depuis CDG.',
      },
      {
        title: 'Aeroport Sri Lanka (CMB) et capitale',
        body: 'L’aeroport international Bandaranaike est a Katunayake, pas au centre de Colombo. Negombo est a 20 to 40 minutes du terminal et convient aux arrivees tardives depuis Paris. Colombo ville prend en general 45 a 90 minutes. La « capitale Sri Lanka » dont parlent les voyageurs est le plus souvent Colombo (porte d’entree commerciale) ; la capitale administrative est Sri Jayawardenepura Kotte, juste a cote.\n\nEvitez Sigiriya la meme nuit apres un vol long courrier, sauf exigence particuliere.',
      },
      {
        title: 'Visa Sri Lanka, ETA et arrival card pour passeport francais',
        body: 'Les ressortissants francais doivent obtenir une Electronic Travel Authorisation (ETA) avant l’embarquement. Depuis le 25 mai 2026, l’ETA touristique est gratuite pour 40 pays dont la France, 30 jours avec double entreela demande se fait quand meme a l’avance sur eta.gov.lk. Les recherches « arrival card Sri Lanka » designent ce processus officiel d’avant arrivee, pas un formulaire papier qui remplacerait l’ETA, ni un site tiers payant.\n\nComptez environ six mois de validite du passeport. Uniquement le site officiel.',
      },
      {
        title: 'Quand partir au Sri Lanka : meteo et saisons',
        body: 'Decembre to mars est la haute saison pour les plages ouest et sud (Negombo, Mirissa, Weligama, Galle). Mai to septembre favorise souvent l’est et convient au Triangle Culturel et aux safaris de saison seche (Yala, Udawalawe).\n\nQuand partir sri lanka, sri lanka quand partir et quand aller au sri lanka dependent de la cote. Meteo sri lanka / sri lanka meteo : deux moussons, pas un seul mois magique.\n\nHeure sri lanka, sri lanka heure, heure au sri lanka, time in sri lanka et sri lanka time now : UTC+5:30. Decalage avec la France : 4 h 30 en hiver, 3 h 30 pendant l’heure d’ete. Monnaie : roupie (LKR). Sri lanka euro et euro sri lanka changent chaque jour ; nous ne publions pas de euro rate in sri lanka today.',
      },
      {
        title: 'Que faire au Sri Lanka : temples, rocher du lion, train, safari, plages',
        body: 'Un premier voyage combine en general le rocher du lion sri lanka (Sigiriya), le Temple de la Dent a kandy sri lanka, le train Kandy to Ella dans le pays du the, un safari en jeep a Yala ou Udawalawe, et une fin de sejour a Mirissa ou Weligama. Le bouddhisme est la religion majoritaire ; tenue correcte dans les temples.\n\nOu se trouve le sri lanka : ile de l’ocean Indien, au sud de l’Inde. Sri lanka carte et carte sri lanka : nous tracons le circuit ; ce n’est pas un fil d’actu ni du cricket.\n\nSept jours couvrent les incontournables. Dix jours sont plus confortables. Voyage au sri lanka prix : devis clair chauffeur + hotels. Un prolongement sri lanka maldives est un vol separe depuis CMB. Hotel sri lanka : nous reservons des hotels pour le circuit, pas un comparateur Booking.',
      },
    ],
    faq: [
      {
        q: 'Combien de temps dure le vol Paris to Sri Lanka ?',
        a: 'Environ 10 a 12 heures en l’air. Des vols directs existent selon les dates ; beaucoup d’itineraires correspondent dans le Golfe. Nous ne vendons pas de billets ; nous calons la premiere nuit sur l’arrivee reelle.',
      },
      {
        q: 'Faut il un visa ou une arrival card pour le Sri Lanka depuis la France ?',
        a: 'Demandez l’ETA sur eta.gov.lk avant le vol. Depuis le 25 mai 2026 l’ETA touristique est gratuite pour les passeports francais (30 jours, double entree). C’est ce que visent en pratique les recherches « arrival card »pas un site tiers.',
      },
      {
        q: 'Quand partir / quand aller au Sri Lanka ?',
        a: 'Selon la cote. Decembre to mars pour le sud et l’ouest ; mai to septembre souvent mieux pour l’est, le Triangle Culturel et le safari en saison seche.',
      },
      {
        q: 'Quelle est la capitale du Sri Lanka ?',
        a: 'Sri Jayawardenepura Kotte est la capitale administrative. Colombo reste la porte d’entree des vols internationaux et la ville ou atterrissent presque tous les voyageurs francais.',
      },
      {
        q: 'Quel est le decalage horaire avec la France ?',
        a: 'Heure sri lanka et sri lanka heure : UTC+5:30 (time in sri lanka, sri lanka time). 4 h 30 d’avance en hiver, 3 h 30 pendant l’heure d’ete francaise.',
      },
      {
        q: 'Ou se trouve le Sri Lanka ?',
        a: 'Ou se trouve le sri lanka : ile au sud de l’Inde, ocean Indien. Le sri lanka et travel to sri lanka depuis Paris : vol vers Colombo (CMB). Sri lanka capital / capitale sri lanka : Kotte administratif, Colombo pour l’arrivee.',
      },
      {
        q: 'Quel est le cours euro sri lanka ?',
        a: 'Sri lanka euro, euro sri lanka, euro to lkr et euro rupee sri lanka varient chaque jour. Payez en roupies sur place. Today euro rate in sri lanka n’est pas un ticker que nous tenons. Voyage au sri lanka prix : nous chiffrons le circuit prive.',
      },
      {
        q: 'Faut il passer par Jet Tours ou Booking ?',
        a: 'Non. Circuit sri lanka et circuit au sri lanka avec chauffeur local. Pas Jet Tours, pas Fram, pas Booking.com. Voyage sri lanka avis : page temoignages, pas un OTA.',
      },
      {
        q: 'Que faire au Sri Lanka en premier voyage ?',
        a: 'Que faire au sri lanka : rocher du lion sri lanka, kandy sri lanka, train, safari, plage. Hotel sri lanka dans le circuit, visa sri lanka (eta sri lanka) avant le vol.',
      },
    ],
    ctaTitle: 'Planifier un voyage prive au Sri Lanka depuis la France',
    ctaBody: 'Envoyez vos dates de vol au depart de Paris et ce que vous voulez voir. Nous proposons un circuit chauffeur sur mesurepas un depart autocar fige.',
    ctaLabel: 'Contacter Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit 7 jours' },
      { pageId: 'tour10', label: 'Circuit 10 jours' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Rocher du lion (Sigiriya)' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destWeligama', label: 'Weligama' },
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destColombo', label: 'Colombo' },
      { pageId: 'destYala', label: 'Yala' },
    ],
    relatedGuides: [
      { pageId: 'guideVisa', label: 'Visa / ETA' },
      { pageId: 'guideBestTime', label: 'Quand partir' },
      { pageId: 'guideSafari', label: 'Safari' },
      { pageId: 'guideTrainJourneys', label: 'Train' },
      { pageId: 'guideBeaches', label: 'Plages' },
      { pageId: 'guideAirportTransfers', label: 'Transfert aeroport' },
    ],
  },
};
