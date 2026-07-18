import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka beaches guide (pageId: guideBeaches).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const BEACHES_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Beaches Guide: Seasons, Best Bays and Swimming Safely',
    lead: 'Sri Lanka’s two monsoons mean the “best beach” shifts coasts through the year December sun on Unawatuna does not guarantee the same conditions in Arugam Bay. Match your beach days to the season, understand rip currents and you can combine a week of culture and hills with genuinely good swimming.',
    heroImage: 'assets/img/mainpage/5.webp',
    heroAlt: 'Palm-lined golden beach on the Sri Lankan coast',
    sections: [
      {
        id: 'twoCoasts',
        title: 'West and south vs east coast seasons',
        body: 'From roughly December to March, the west and south coasts (Bentota, Hikkaduwa, Unawatuna, Mirissa) are in their dry, swimmable windowalm mornings, busy resorts and the highest hotel rates of the year. April to November flips the advantage to the east: Trincomalee’s Nilaveli and Uppuveli beaches and surf town Arugam Bay stay drier while the south-west monsoon hits Galle and Colombo.\n\nTrying to force a south-coast beach finale in July often means rain and rough seas; a flexible itinerary routes you to whichever coast is having its turn in the sun.',
      },
      {
        id: 'southWestBeaches',
        title: 'Mirissa, Unawatuna, Bentota and the south-west',
        body: 'Mirissa pairs whale watching (November–April) with a curved bay and a relaxed restaurant stripular but not as hectic as some Thai beaches. Unawatuna offers sheltered swimming close to Galle Fort, though erosion and crowds in peak season have changed the bay’s character over the years. Bentota suits families wanting wide sand and resort infrastructure with easy access from Colombo.\n\nHikkaduwa draws surfers and snorkellers on the reef; nightlife is livelier than Mirissa. None of these are remote wilderness beacheswell-served bases at the end of a round tour.',
      },
      {
        id: 'eastCoast',
        title: 'Arugam Bay, Trincomalee and the east',
        body: 'Arugam Bay is Sri Lanka’s surf capital from roughly April to October, with a laid-back village feel and long right-hand points. It sits far from the Cultural Triangle and works best when the east coast is drylding it into a standard winter south-coast trip means long drives and often wet weather.\n\nTrincomalee (Nilaveli, Uppuveli) offers pale sand, snorkelling on Pigeon Island in season and a quieter pace than the south. The north-east monsoon can bring heavy rain from November onward; check forecasts before committing to an east-coast-only holiday.',
      },
      {
        id: 'swimmingSafety',
        title: 'Swimming safety, rips and flags',
        body: 'Many Sri Lankan beaches have no lifeguards; red flags mean do not swim, full stop. Rip currents are common on open baysf pulled seaward, swim parallel to the shore until out of the current, then angle back in. Do not fight a rip by swimming straight to the beach.\n\nRock pools and calm mornings are safer than afternoon surf when winds pick up. Alcohol and swimming do not mix; neither do swimming after dusk when visibility and boat traffic increase. Ask your hotel which section of the bay is safest that day.',
      },
      {
        id: 'combiningTours',
        title: 'Combining beaches with a round tour',
        body: 'The classic pattern is culture and hills first (Sigiriya, Kandy, Ella), then drop to the coast for two or three beach nights before the airportolombo is close to the west coast, Mattala serves the south. Trying to beach-hop both coasts in one week usually costs more driving time than beach time.\n\nA private driver lets you shift the beach finale if weather turnspping Unawatuna for Negombo near the airport is a common rainy-season adjustment without missing your flight.',
      },
      {
        id: 'choosingBase',
        title: 'Choosing your beach base and expectations',
        body: 'Pick one coast for your dates, not the “best beach on Instagram.” Luxury villas in Tangalle and Weligama offer space and surf; mid-range guesthouses in Mirissa and Unawatuna suit most round-tour endings. East-coast stays need more lead time for logistics but reward surfers and snorkellers in the right months.\n\nPlastic pollution and seasonal seaweed appear on any coast; manage expectations and focus on water quality, access and how the beach fits your wider itinerary rather than a single perfect photo.',
      },
    ],
    faq: [
      {
        q: 'Which is the best beach in Sri Lanka?',
        a: 'It depends on the month west and south coasts are best December–March; east coast (Arugam Bay, Trincomalee) shines April–October. There is no single winner year-round.',
      },
      {
        q: 'Is it safe to swim in Sri Lanka?',
        a: 'Many bays are safe in calm season when flags allow swimming, but rips exist and lifeguard cover is limited. Follow local advice, avoid red-flag days and do not swim alone at remote beaches.',
      },
      {
        q: 'When is Arugam Bay in season?',
        a: 'Roughly April to October for surf and dry east-coast weather. Outside that window the south-west coast or Trincomalee’s shoulder months may be better choices.',
      },
      {
        q: 'Can I visit beaches and cultural sites in one week?',
        a: 'Yes most private round tours finish with two or three nights on the coast after Sigiriya, Kandy and Ella. One coast per trip keeps driving realistic.',
      },
      {
        q: 'Is Mirissa or Unawatuna better?',
        a: 'Mirissa suits whale season and a quieter bay feel; Unawatuna is closer to Galle Fort with sheltered swimming but more crowded in peak months. Both work December–March.',
      },
    ],
    ctaTitle: 'End your tour on the right coast',
    ctaBody: 'Share your travel month and pace we will place beach nights where the weather and seas actually cooperate, wired into a private chauffeur itinerary.',
    ctaLabel: 'Plan a beach finish',
    relatedTours: [
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
      { pageId: 'galleDay', label: 'Galle Day Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Best Time to Visit Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Safety Guide' },
      { pageId: 'guidePrivateDriver', label: 'Private Driver Guide' },
    ],
  },

  de: {
    h1: 'Sri Lanka Strände-Ratgeber: Saisons, beste Buchten und sicheres Schwimmen',
    lead: 'Sri Lankas zwei Monsune verschieben den „besten Strand“ im Jahresverlauf Dezembersonne in Unawatuna garantiert nicht dieselben Bedingungen in Arugam Bay. Passen Sie Strandtage an die Saison an, verstehen Sie Brandungsströmungen, und Kultur plus Berge lassen sich mit echt gutem Baden verbinden.',
    heroAlt: 'Palmen gesäumter goldener Strand an der srilankischen Küste',
    sections: [
      {
        title: 'West-/Südküste vs Ostküste Saisons',
        body: 'Etwa von Dezember bis März sind West- und Südküste (Bentota, Hikkaduwa, Unawatuna, Mirissa) trocken und badbar ruhige Morgen, volle Resorts, höchste Hotelpreise. April bis November verschiebt den Vorteil nach Osten: Nilaveli und Uppuveli bei Trincomalee sowie Surferort Arugam Bay bleiben trockener, während der Südwestmonsun Galle und Colombo trifft.\n\nEin Südstrand-Finale im Juli erzwingen bedeutet oft Regen und raue See; flexible Routen führen zur Küste, die gerade Sonne hat.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota und der Südwesten',
        body: 'Mirissa verbindet Walbeobachtung (November–April) mit einer geschwungenen Bucht und entspannten Restaurantseliebt, aber nicht hektisch wie manche Thai-Strände. Unawatuna bietet geschütztes Schwimmen nahe Galle Fort, obwohl Erosion und Andrang in der Hochsaison die Bucht verändert haben. Bentota passt zu Familien mit breitem Sand und Resort-Infrastruktur nahe Colombo.\n\nHikkaduwa zieht Surfer und Schnorchler am Riff; Nachtleben lebhafter als Mirissa. Keine Wildnissträndeut angebundene Basen am Ende einer Rundreise.',
      },
      {
        title: 'Arugam Bay, Trincomalee und der Osten',
        body: 'Arugam Bay ist Sri Lankas Surfhauptstadt von etwa April bis Oktober entspanntes Dorf, lange Reiterwellen. Weit vom Kulturdreieck; am besten, wenn die Ostküste trocken istn eine Winter-Südküstenreise eingebaut bedeutet lange Fahrten und oft nasses Wetter.\n\nTrincomalee (Nilaveli, Uppuveli) bietet hellen Sand, Schnorcheln auf Pigeon Island in der Saison und ruhigeres Tempo als der Süden. Der Nordostmonsun kann ab November starken Regen bringenetter prüfen vor reiner Ostküstenreise.',
      },
      {
        title: 'Badesicherheit, Strömungen und Flaggen',
        body: 'Viele Strände haben keine Rettungsschwimmer; rote Flagge heißt nicht schwimmen, Punkt. Brandungsströmungen sind häufigei Richtung offenes Meer parallel zur Küste schwimmen, dann schräg zurück. Nicht frontal gegen die Strömung kämpfen.\n\nFelsenpools und ruhige Morgen sind sicherer als Nachmittagssurf bei Wind. Alkohol und Schwimmen vertragen sich nicht; nachts ebenfalls wegen Sicht und Bootverkehr. Hotel fragen, welcher Buchtabschnitt an dem Tag am sichersten ist.',
      },
      {
        title: 'Strände mit Rundreise kombinieren',
        body: 'Klassisch: erst Kultur und Berge (Sigiriya, Kandy, Ella), dann zwei bis drei Strandnächte vor dem Flughafen Colombo nahe Westküste, Mattala dem Süden. Beide Küsten in einer Woche bedeutet meist mehr Fahrzeit als Strandzeit.\n\nEin Privatfahrer erlaubt Wechsel bei schlechtem Wetter Unawatuna gegen Negombo nahe Flughafen ist eine übliche Monsun-Anpassung ohne Flugstress.',
      },
      {
        title: 'Strandbasis wählen und Erwartungen',
        body: 'Eine Küste für Ihre Termine wählen, nicht den „Instagram-Strand“. Luxusvillen in Tangalle und Weligama bieten Platz und Surf; Mittelklasse-Gästehäuser in Mirissa und Unawatuna passen zu den meisten Tour-Enden. Ostküste braucht mehr Planung, belohnt Surfer und Schnorchler in den richtigen Monaten.\n\nPlastikmüll und saisonales Seetang gibt es überall; Erwartungen realistisch halten und auf Wasserqualität, Zugang und Einbindung in die Route achten.',
      },
    ],
    faq: [
      {
        q: 'Welcher ist der beste Strand in Sri Lanka?',
        a: 'Hängt vom Monat ab West- und Südküste Dezember–März; Ostküste (Arugam Bay, Trincomalee) April–Oktober. Kein ganzjähriger Sieger.',
      },
      {
        q: 'Ist Schwimmen in Sri Lanka sicher?',
        a: 'Viele Buchten sind in ruhiger Saison bei erlaubter Flagge sicher, aber Strömungen existieren und Rettungsdienst ist begrenzt. Lokale Hinweise befolgen, rote Flagge meiden, nicht allein an abgelegenen Stränden schwimmen.',
      },
      {
        q: 'Wann ist Saison in Arugam Bay?',
        a: 'Etwa April bis Oktober für Surf und trockenes Ostküstenwetter. Außerhalb eher Südküste oder Trincomalee in der Zwischensaison.',
      },
      {
        q: 'Strände und Kultur in einer Woche?',
        a: 'Jaie meisten privaten Rundreisen enden mit zwei bis drei Küstennächten nach Sigiriya, Kandy und Ella. Eine Küste pro Reise hält Fahrzeiten realistisch.',
      },
      {
        q: 'Mirissa oder Unawatuna?',
        a: 'Mirissa für Walsaison und ruhigere Bucht; Unawatuna näher an Galle Fort, geschützter, aber im Hochsaison-Hoch enger. Beide Dezember–März.',
      },
    ],
    ctaTitle: 'Beenden Sie Ihre Tour an der richtigen Küste',
    ctaBody: 'Nennen Sie Reisemonat und Tempoir platzieren Strandnächte dort, wo Wetter und See mitspielen, in einer privaten Chauffeur-Route.',
    ctaLabel: 'Strand-Finale planen',
    relatedTours: [
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'galleDay', label: 'Galle Tagesausflug' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit für Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits-Ratgeber' },
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide des plages du Sri Lanka : saisons, baies et baignade en sécurité',
    lead: 'Les deux moussons du Sri Lanka déplacent la « meilleure plage » au fil de l’année le soleil de décembre à Unawatuna ne garantit pas les mêmes conditions à Arugam Bay. Alignez vos jours de plage sur la saison, comprenez les baïnes, et une semaine de culture et montagnes peut finir par de vraies baignades.',
    heroAlt: 'Plage dorée bordée de palmiers sur la côte du Sri Lanka',
    sections: [
      {
        title: 'Côtes ouest/sud vs côte estaisons',
        body: 'D’environ décembre à mars, les côtes ouest et sud (Bentota, Hikkaduwa, Unawatuna, Mirissa) sont sèches et propices à la baignade matins calmes, resorts animés, tarifs hôteliers au plus haut. D’avril à novembre, l’avantage bascule à l’est : Nilaveli et Uppuveli près de Trincomalee et la ville surf d’Arugam Bay restent plus sèches pendant que la mousson du sud-ouest touche Galle et Colombo.\n\nForcer une finale plage au sud en juillet signifie souvent pluie et mer agitée ; un itinéraire flexible vous oriente vers la côte au bon moment.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota et le sud-ouest',
        body: 'Mirissa combine observation des baleines (novembre–avril), baie arrondie et restaurants décontractésopulaire sans l’agitation de certaines plages thaïlandaises. Unawatuna offre une baignade abritée près de Galle Fort, bien que l’érosion et la foule en haute saison aient changé la baie. Bentota convient aux familles avec large plage et infrastructures resort proches de Colombo.\n\nHikkaduwa attire surfeurs et snorkelleurs sur le récif ; vie nocturne plus animée que Mirissa. Ce ne sont pas des plages sauvages des bases bien desservies en fin de circuit.',
      },
      {
        title: 'Arugam Bay, Trincomalee et l’est',
        body: 'Arugam Bay est la capitale surf du Sri Lanka d’environ avril à octobre village décontracté, longues vagues droitières. Loin du Triangle Culturel ; idéal quand la côte est est sèche l’intégrer à un voyage hivernal sur le sud signifie longs trajets et souvent de la pluie.\n\nTrincomalee (Nilaveli, Uppuveli) propose sable clair, snorkel sur Pigeon Island en saison et rythme plus calme que le sud. La mousson du nord-est peut apporter de fortes pluies dès novembre vérifiez les prévisions avant un séjour 100 % côte est.',
      },
      {
        title: 'Sécurité baignade, baïnes et drapeaux',
        body: 'Beaucoup de plages n’ont pas de maîtres-nageurs ; drapeau rouge = ne pas nager, point. Les baïnes sont fréquentes si emporté vers le large, nagez parallèle au rivage jusqu’à sortir du courant, puis revenez en biais. Ne combattez pas le courant en nageant droit vers la plage.\n\nMarettes et matins calmes sont plus sûrs que le surf de l’après-midi quand le vent se lève. Alcool et baignade ne vont pas ensemble ; ni baignade après la tombée de la nuit. Demandez à l’hôtel quelle zone de la baie est la plus sûre ce jour-là.',
      },
      {
        title: 'Combiner plages et circuit',
        body: 'Le schéma classique : culture et montagnes d’abord (Sigiriya, Kandy, Ella), puis deux ou trois nuits plage avant l’aéroportolombo proche de l’ouest, Mattala du sud. Enchaîner les deux côtes en une semaine coûte souvent plus de route que de plage.\n\nUn chauffeur privé permet de déplacer la finale si le temps tournechanger Unawatuna pour Negombo près de l’aéroport est un ajustement courant en mousson sans rater le vol.',
      },
      {
        title: 'Choisir sa base plage et ses attentes',
        body: 'Choisissez une côte pour vos dates, pas « la plage Instagram ». Villas de luxe à Tangalle et Weligama offrent espace et surf ; guesthouses milieu de gamme à Mirissa et Unawatuna conviennent à la plupart des fins de circuit. La côte est demande plus de logistique mais récompense surfeurs et snorkelleurs aux bons mois.\n\nPollution plastique et algues saisonnières existent partout ; restez réalistes et privilégiez qualité de l’eau, accès et intégration au voyage plutôt qu’une photo parfaite.',
      },
    ],
    faq: [
      {
        q: 'Quelle est la meilleure plage du Sri Lanka ?',
        a: 'Cela dépend du mois ouest/sud de décembre à mars ; côte est (Arugam Bay, Trincomalee) d’avril à octobre. Pas de gagnant unique toute l’année.',
      },
      {
        q: 'Est-il sûr de nager au Sri Lanka ?',
        a: 'Beaucoup de baies sont sûres en saison calme quand les drapeaux l’autorisent, mais les baïnes existent et la surveillance est limitée. Suivez les conseils locaux, évitez drapeau rouge, ne nagez pas seul sur plages isolées.',
      },
      {
        q: 'Quand est la saison à Arugam Bay ?',
        a: 'Environ avril à octobre pour le surf et la météo sèche à l’est. Hors de cette fenêtre, le sud ou Trincomalee en intersaison peuvent mieux convenir.',
      },
      {
        q: 'Plages et sites culturels en une semaine ?',
        a: 'Ouia plupart des circuits privés finissent par deux ou trois nuits côtières après Sigiriya, Kandy et Ella. Une côte par voyage garde des trajets réalistes.',
      },
      {
        q: 'Mirissa ou Unawatuna ?',
        a: 'Mirissa pour la saison baleines et une baie plus calme ; Unawatuna plus proche de Galle Fort, baignade abritée mais plus bondée en pic. Les deux conviennent de décembre à mars.',
      },
    ],
    ctaTitle: 'Terminez votre circuit sur la bonne côte',
    ctaBody: 'Indiquez votre mois de voyage et votre rythmeous placerons les nuits plage là où météo et mer coopèrent, dans un itinéraire privé avec chauffeur.',
    ctaLabel: 'Planifier une finale plage',
    relatedTours: [
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
      { pageId: 'galleDay', label: 'Excursion d’une journée à Galle' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Meilleure période pour le Sri Lanka' },
      { pageId: 'guideSafety', label: 'Guide sécurité Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur privé' },
    ],
  },

  it: {
    h1: 'Guida alle spiagge dello Sri Lanka: stagioni, baie e nuoto sicuro',
    lead: 'I due monsoni dello Sri Lanka spostano la « migliore spiaggia » durante l’annol sole di dicembre a Unawatuna non garantisce le stesse condizioni ad Arugam Bay. Allineate i giorni di mare alla stagione, capite le correnti di risacca e una settimana di cultura e colline può chiudersi con nuotate davvero piacevoli.',
    heroAlt: 'Spiaggia dorata con palme sulla costa dello Sri Lanka',
    sections: [
      {
        title: 'Costa ovest/sud vs costa est stagioni',
        body: 'Da circa dicembre a marzo, le coste ovest e sud (Bentota, Hikkaduwa, Unawatuna, Mirissa) sono nella finestra secca e balneabile mattine calme, resort affollati, tariffe al top. Da aprile a novembre il vantaggio passa a est: Nilaveli e Uppuveli vicino Trincomalee e la surf town Arugam Bay restano più asciutte mentre il monsone sud-occidentale colpisce Galle e Colombo.\n\nForzare un finale al sud a luglio spesso significa pioggia e mare mosso; un itinerario flessibile vi porta sulla costa che ha il suo momento di sole.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota e il sud-ovest',
        body: 'Mirissa unisce whale watching (novembre–aprile), baia curva e ristoranti rilassati popolare ma non frenetica come alcune spiagge thailandesi. Unawatuna offre nuoto riparato vicino a Galle Fort, anche se erosione e folla in alta stagione hanno cambiato la baia. Bentota va alle famiglie con sabbia ampia e infrastrutture resort vicino Colombo.\n\nHikkaduwa attira surfisti e snorkeler sulla barriera; nightlife più vivace di Mirissa. Non sono spiagge selvagge basi ben servite a fine tour.',
      },
      {
        title: 'Arugam Bay, Trincomalee e l’est',
        body: 'Arugam Bay è la capitale del surf dallo Sri Lanka da circa aprile a ottobre villaggio rilassato, lunghe onde destra. Lontana dal Triangolo Culturale; funziona meglio quando la costa est è secca inserirla in un viaggio invernale sul sud significa lunghe guida e spesso pioggia.\n\nTrincomalee (Nilaveli, Uppuveli) offre sabbia chiara, snorkeling a Pigeon Island in stagione e ritmo più quieto del sud. Il monsone nord-orientale può portare piogge forti da novembreontrollate le previsioni prima di un solo-est.',
      },
      {
        title: 'Sicurezza in acqua, risacca e bandiere',
        body: 'Molte spiagge non hanno bagnini; bandiera rossa = non nuotare, punto. Le risacce sono comunie trascinati verso largo, nuotate paralleli alla riva fino a uscire dalla corrente, poi tornate obliqui. Non combattete la risacca nuotando dritti verso la spiaggia.\n\nPozze rocciose e mattine calme sono più sicure del surf pomeridiano col vento. Alcol e nuoto non vanno insieme; nemmeno nuotare dopo il tramonto. Chiedete in hotel quale tratto di baia è più sicuro quel giorno.',
      },
      {
        title: 'Combinare spiagge con un tour',
        body: 'Lo schema classico: cultura e colline prima (Sigiriya, Kandy, Ella), poi due o tre notti mare prima dell’aeroportoolombo vicino all’ovest, Mattala al sud. Fare entrambe le coste in una settimana costa spesso più guida che spiaggia.\n\nUn autista privato permette di spostare il finale se il tempo gira scambiare Unawatuna con Negombo vicino all’aeroporto è un aggiustamento monsonico comune senza perdere il volo.',
      },
      {
        title: 'Scegliere la base mare e le aspettative',
        body: 'Scegliete una costa per le vostre date, non « la spiaggia Instagram ». Ville di lusso a Tangalle e Weligama offrono spazio e surf; guesthouse mid-range a Mirissa e Unawatuna adattano la maggior parte dei finali tour. La costa est richiede più logistica ma premia surfisti e snorkeler nei mesi giusti.\n\nPlastica e alghe stagionali compaiono ovunque; aspettative realistiche e focus su qualità dell’acqua, accesso e inserimento nel viaggio più che una foto perfetta.',
      },
    ],
    faq: [
      {
        q: 'Qual è la migliore spiaggia dello Sri Lanka?',
        a: 'Dipende dal mese ovest/sud dicembre–marzo; costa est (Arugam Bay, Trincomalee) aprile–ottobre. Nessuna vincitrice tutto l’anno.',
      },
      {
        q: 'È sicuro nuotare nello Sri Lanka?',
        a: 'Molte baie sono sicure in stagione calma con bandiera verde, ma esistono risacce e sorveglianza limitata. Seguite consigli locali, evitate bandiera rossa, non nuotate soli su spiagge remote.',
      },
      {
        q: 'Quando è la stagione ad Arugam Bay?',
        a: 'Circa aprile–ottobre per surf e meteo secco a est. Fuori da questa finestra, sud o Trincomalee in mezza stagione possono essere scelte migliori.',
      },
      {
        q: 'Spiagge e siti culturali in una settimana?',
        a: 'Sì la maggior parte dei tour privati chiude con due o tre notti costiere dopo Sigiriya, Kandy ed Ella. Una costa per viaggio mantiene guida realistica.',
      },
      {
        q: 'Mirissa o Unawatuna?',
        a: 'Mirissa per stagione balene e baia più tranquilla; Unawatuna più vicina a Galle Fort, nuoto riparato ma più affollata in pic. Entrambe dicembre–marzo.',
      },
    ],
    ctaTitle: 'Chiudete il tour sulla costa giusta',
    ctaBody: 'Indicate mese di viaggio e ritmo posizioneremo le notti mare dove meteo e mare cooperano, in un itinerario privato con autista.',
    ctaLabel: 'Pianifica un finale in spiaggia',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
      { pageId: 'galleDay', label: 'Gita di un giorno a Galle' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Periodo migliore per lo Sri Lanka' },
      { pageId: 'guideSafety', label: 'Guida alla sicurezza nello Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guida all’autista privato' },
    ],
  },

  es: {
    h1: 'Guía de playas de Sri Lanka: temporadas, mejores bahías y baño seguro',
    lead: 'Los dos monzones de Sri Lanka desplazan la « mejor playa » a lo largo del año el sol de diciembre en Unawatuna no garantiza las mismas condiciones en Arugam Bay. Alinee los días de playa con la temporada, entienda las corrientes y una semana de cultura y montaña puede terminar con baños de verdad.',
    heroAlt: 'Playa dorada con palmeras en la costa de Sri Lanka',
    sections: [
      {
        title: 'Costa oeste/sur vs costa este temporadas',
        body: 'De aproximadamente diciembre a marzo, las costas oeste y sur (Bentota, Hikkaduwa, Unawatuna, Mirissa) están en su ventana seca y apta para nadar mañanas calmadas, resorts concurridos y tarifas hoteleras altas. De abril a noviembre la ventaja pasa al este: Nilaveli y Uppuveli cerca de Trincomalee y el pueblo surfista Arugam Bay se mantienen más secos mientras el monzón suroeste afecta Galle y Colombo.\n\nForzar un final de playa en el sur en julio suele significar lluvia y mar agitado; un itinerario flexible le lleva a la costa que toca sol.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota y el suroeste',
        body: 'Mirissa combina avistamiento de ballenas (noviembre–abril), bahía curva y restaurantes relajados popular pero no tan frenética como algunas playas tailandesas. Unawatuna ofrece baño resguardado cerca de Galle Fort, aunque la erosión y las multitudes en temporada alta han cambiado la bahía. Bentota encaja con familias que buscan arena amplia e infraestructura resort cerca de Colombo.\n\nHikkaduwa atrae surfistas y snorkelistas en el arrecife; vida nocturna más animada que Mirissa. No son playas salvajes bases bien comunicadas al final del tour.',
      },
      {
        title: 'Arugam Bay, Trincomalee y el este',
        body: 'Arugam Bay es la capital del surf de Sri Lanka de aproximadamente abril a octubre pueblo relajado, olas derechas largas. Lejos del Triángulo Cultural; funciona mejor cuando la costa este está seca meterla en un viaje invernal al sur implica largos trayectos y a menudo lluvia.\n\nTrincomalee (Nilaveli, Uppuveli) ofrece arena clara, snorkel en Pigeon Island en temporada y ritmo más tranquilo que el sur. El monzón noreste puede traer lluvias fuertes desde noviembre consulte el pronóstico antes de un viaje solo a la costa este.',
      },
      {
        title: 'Seguridad al nadar, corrientes y banderas',
        body: 'Muchas playas no tienen socorristas; bandera roja = no nadar, punto. Las corrientes de resaca son frecuentes si le arrastra mar adentro, nade paralelo a la orilla hasta salir de la corriente y vuelva en diagonal. No luche contra la resaca nadando directo a la playa.\n\nPozas rocosas y mañanas calmadas son más seguras que el surf vespertino con viento. Alcohol y natación no combinan; tampoco nadar de noche. Pregunte en el hotel qué tramo de la bahía es más seguro ese día.',
      },
      {
        title: 'Combinar playas con un tour',
        body: 'El patrón clásico: cultura y montaña primero (Sigiriya, Kandy, Ella), luego dos o tres noches de playa antes del aeropuerto Colombo cerca del oeste, Mattala del sur. Hacer ambas costas en una semana suele costar más conducción que playa.\n\nUn chófer privado permite mover el final si el tiempo cambia cambiar Unawatuna por Negombo cerca del aeropuerto es un ajuste monzónico habitual sin perder el vuelo.',
      },
      {
        title: 'Elegir base de playa y expectativas',
        body: 'Elija una costa para sus fechas, no « la playa de Instagram ». Villas de lujo en Tangalle y Weligama ofrecen espacio y surf; guesthouses de gama media en Mirissa y Unawatuna encajan con la mayoría de finales de tour. La costa este requiere más logística pero premia surfistas y snorkelistas en los meses correctos.\n\nContaminación plástica y algas estacionales aparecen en cualquier costa; expectativas realistas y foco en calidad del agua, acceso e integración en el viaje más que una foto perfecta.',
      },
    ],
    faq: [
      {
        q: '¿Cuál es la mejor playa de Sri Lanka?',
        a: 'Depende del mes oeste/sur de diciembre a marzo; costa este (Arugam Bay, Trincomalee) de abril a octubre. No hay una ganadora todo el año.',
      },
      {
        q: '¿Es seguro nadar en Sri Lanka?',
        a: 'Muchas bahías son seguras en temporada calmada con bandera permitida, pero hay resacas y vigilancia limitada. Siga consejos locales, evite bandera roja y no nade solo en playas remotas.',
      },
      {
        q: '¿Cuándo es temporada en Arugam Bay?',
        a: 'Aproximadamente abril–octubre para surf y clima seco en el este. Fuera de esa ventana, el sur o Trincomalee en temporada intermedia pueden ser mejores.',
      },
      {
        q: '¿Playas y sitios culturales en una semana?',
        a: 'Sí la mayoría de tours privados terminan con dos o tres noches costeras tras Sigiriya, Kandy y Ella. Una costa por viaje mantiene la conducción realista.',
      },
      {
        q: '¿Mirissa o Unawatuna?',
        a: 'Mirissa para temporada de ballenas y bahía más tranquila; Unawatuna más cerca de Galle Fort, baño resguardado pero más concurrida en pico. Ambas funcionan diciembre–marzo.',
      },
    ],
    ctaTitle: 'Termine su tour en la costa correcta',
    ctaBody: 'Indique mes de viaje y ritmo colocaremos noches de playa donde clima y mar cooperen, en un itinerario privado con chófer.',
    ctaLabel: 'Planificar final en playa',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour de 5 días por Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
      { pageId: 'galleDay', label: 'Excursión de un día a Galle' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Mejor época para visitar Sri Lanka' },
      { pageId: 'guideSafety', label: 'Guía de seguridad en Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guía del chófer privado' },
    ],
  },

  pl: {
    h1: 'Przewodnik po plażach Sri Lanki: sezony, zatoki i bezpieczne pływanie',
    lead: 'Dwa monsuny Sri Lanki przesuwają „najlepszą plażę” w ciągu roku grudniowe słońce w Unawatunie nie gwarantuje tych samych warunków w Arugam Bay. Dopasuj dni plażowe do sezonu, zrozum prądy odrzutowe, a tydzień kultury i gór może zakończyć się naprawdę dobrym pływaniem.',
    heroAlt: 'Złota plaża z palmami na wybrzeżu Sri Lanki',
    sections: [
      {
        title: 'Wybrzeże zachodnie/południowe vs wschodnie sezony',
        body: 'Od grudnia do marca zachód i południe (Bentota, Hikkaduwa, Unawatuna, Mirissa) są suche i nadają się do kąpieli spokojne ranki, pełne resorty, najwyższe stawki hotelowe. Od kwietnia do listopada przewaga przechodzi na wschód: Nilaveli i Uppuveli koło Trincomalee oraz surferowski Arugam Bay pozostają suchsze, gdy monsun południowo-zachodni uderza w Galle i Colombo.\n\nWymuszanie południowego finału plażowego w lipcu często oznacza deszcz i wzburzone morze; elastyczna trasa prowadzi na wybrzeże w słonecznej fazie.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota i południowy zachód',
        body: 'Mirissa łączy obserwację wielorybów (listopad–kwiecień), zaokrągloną zatokę i spokojne restauracje popularna, ale mniej chaotyczna niż niektóre plaże Tajlandii. Unawatuna daje osłonięte pływanie blisko Galle Fort, choć erozja i tłumy w szczycie zmieniły zatokę. Bentota pasuje rodzinom z szerokim piaskiem i infrastrukturą resortu blisko Colombo.\n\nHikkaduwa przyciąga surferów i snorkelerów na rafie; nightlife żywsze niż w Mirissie. To nie dzikie plaże dobrze skomunikowane bazy na końcu trasy.',
      },
      {
        title: 'Arugam Bay, Trincomalee i wschód',
        body: 'Arugam Bay to surferowska stolica Sri Lanki od około kwietnia do października spokojna wioska, długie prawe fale. Daleko od Trójkąta Kulturowego; najlepiej, gdy wschodnie wybrzeże jest suche wplecenie w zimową podróż na południe oznacza długie dojazdy i często deszcz.\n\nTrincomalee (Nilaveli, Uppuveli) oferuje jasny piasek, snorkeling na Pigeon Island w sezonie i spokojniejsze tempo niż południe. Monsun północno-wschodni może przynieść ulewy od listopada sprawdź prognozę przed wyjazdem tylko na wschód.',
      },
      {
        title: 'Bezpieczeństwo kąpieli, prądy i flagi',
        body: 'Wiele plaż nie ma ratowników; czerwona flaga = nie pływać, koniec. Prądy odrzutowe są częste jeśli ciągnie w morze, pływaj równolegle do brzegu, aż wyjdziesz z prądu, potem wracaj ukośnie. Nie walcz z prądem płynąc prosto do plaży.\n\nKałuże skalne i spokojne ranki są bezpieczniejsze niż popołudniowy surf przy wietrze. Alkohol i pływanie się wykluczają; tak samo pływanie po zmroku. Zapytaj hotel, który odcinek zatoki jest najbezpieczniejszy danego dnia.',
      },
      {
        title: 'Łączenie plaż z toursem',
        body: 'Klasyczny schemat: najpierw kultura i góry (Sigiriya, Kandy, Ella), potem dwie–trzy noce plażowe przed lotniskiem Colombo blisko zachodu, Mattala południa. Obie linie brzegowe w tydzień to zwykle więcej jazdy niż plaży.\n\nPrywatny kierowca pozwala przesunąć finał przy złej pogodzie zamiana Unawatuny na Negombo przy lotnisku to typowa monsunowa korekta bez stresu lotu.',
      },
      {
        title: 'Wybór bazy plażowej i oczekiwań',
        body: 'Wybierz jedno wybrzeże na swoje terminy, nie „plażę z Instagrama”. Luksusowe wille w Tangalle i Weligama dają przestrzeń i surf; guesthouse’y średniej klasy w Mirissie i Unawatunie pasują do większości finałów touru. Wschód wymaga więcej logistyki, ale nagradza surferów i snorkelerów we właściwych miesiącach.\n\nPlastik i sezonowe wodorosty są wszędzie; trzymaj realistyczne oczekiwania i patrz na jakość wody, dostęp i wpisanie w trasę, nie na jedno idealne zdjęcie.',
      },
    ],
    faq: [
      {
        q: 'Jaka jest najlepsza plaża na Sri Lance?',
        a: 'Zależy od miesiąca zachód/południe grudzień–marzec; wschód (Arugam Bay, Trincomalee) kwiecień–październik. Nie ma jednej zwyciężczyni przez cały rok.',
      },
      {
        q: 'Czy pływanie na Sri Lance jest bezpieczne?',
        a: 'Wiele zatok jest bezpiecznych w spokojnym sezonie przy zielonej fladze, ale prądy istnieją, a nadzór jest ograniczony. Słuchaj lokalnych rad, unikaj czerwonej flagi, nie pływaj sam na odległych plażach.',
      },
      {
        q: 'Kiedy sezon w Arugam Bay?',
        a: 'Około kwiecień–październik pod surf i suche wschodnie wybrzeże. Poza tym oknem południe lub Trincomalee w sezonie przejściowym mogą być lepsze.',
      },
      {
        q: 'Plaże i zabytki w tydzień?',
        a: 'Tak większość prywatnych tourów kończy dwoma–trzema nocami nad morzem po Sigiriyi, Kandy i Ella. Jedno wybrzeże na wyjazd utrzymuje realne czasy jazdy.',
      },
      {
        q: 'Mirissa czy Unawatuna?',
        a: 'Mirissa pod sezon wielorybów i spokojniejszą zatokę; Unawatuna bliżej Galle Fort, osłonięte kąpiele, ale tłoczniej w szczycie. Obie grudzień–marzec.',
      },
    ],
    ctaTitle: 'Zakończ tour na właściwym wybrzeżu',
    ctaBody: 'Podaj miesiąc podróży i tempo ustawimy noce plażowe tam, gdzie pogoda i morze współgrają, w prywatnej trasie z kierowcą.',
    ctaLabel: 'Zaplanuj finał na plaży',
    relatedTours: [
      { pageId: 'tour5', label: '5-dniowa wycieczka po Sri Lance' },
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'galleDay', label: 'Jednodniowa wycieczka do Galle' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Najlepszy czas na Sri Lankę' },
      { pageId: 'guideSafety', label: 'Przewodnik bezpieczeństwa na Sri Lance' },
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnym kierowcy' },
    ],
  },

  ru: {
    h1: 'Гид по пляжам Шри-Ланки: сезоны, лучшие бухты и безопасное купание',
    lead: 'Два муссона Шри-Ланки смещают «лучший пляж» в течение года декабрьское солнце в Унаватуне не гарантирует те же условия в Аругам-Бей. Согласуйте пляжные дни с сезоном, поймите отбойные течения и неделя культуры и гор может закончиться действительно хорошим купанием.',
    heroAlt: 'Золотой пляж с пальмами на побережье Шри-Ланки',
    sections: [
      {
        title: 'Запад/юг vs восточное побережье сезоны',
        body: 'Примерно с декабря по март западное и южное побережья (Бентота, Хиккадува, Унаватуна, Мирисса) в сухом, купальном окне спокойные утра, загруженные курорты, максимальные цены на отели. С апреля по ноябрь преимущество переходит на восток: Нилавели и Уppuveli у Тринкомали и сёрф-городок Аругам-Бей остаются суше, пока юго-западный муссон бьёт по Галле и Коломбо.\n\nФорсировать южный пляжный финал в июле часто значит дождь и rough море; гибкий маршрут ведёт к побережью в его солнечную фазу.',
      },
      {
        title: 'Мирисса, Унаватуна, Бентота и юго-запад',
        body: 'Мирисса сочетает наблюдение за китами (ноябрь–апрель), изогнутую бухту и расслабленные рестораны популярно, но не так суетно, как некоторые пляжи Таиланда. Унаватуна даёт защищённое купание рядом с фортом Галле, хотя эрозия и толпы в пик сезона изменили бухту. Бентота подходит семьям с широким песком и инфраструктурой курорта недалеко от Коломбо.\n\nХиккадува привлекает сёрферов и снorkelers на рифе; ночная жизнь оживлённее, чем в Мириссе. Это не дикие пляжидобные базы в конце тура.',
      },
      {
        title: 'Аругам-Бей, Тринкомали и восток',
        body: 'Аругам-Бейёрф-столица Шри-Ланки примерно с апреля по октябрь: расслабленная деревня, длинные правые волны. Далеко от Культурного треугольника; лучше, когда восток сухойавить в зимний тур на юг значит длинные переезды и часто дождь.\n\nТринкомали (Нилавели, Уppuveli)ветлый песок, снorkeling на Pigeon Island в сезон и более спокойный ритм, чем на юге. Северо-восточный муссон может принести сильные дожди с ноября проверьте прогноз перед поездкой только на восток.',
      },
      {
        title: 'Безопасность купания, течения и флаги',
        body: 'На многих пляжах нет спасателей; красный флаг = не купаться, точка. Отбойные течения часты если уносит в море, плывите параллельно берегу, пока не выйдете из течения, затем возвращайтесь под углом. Не боритесь с течением, плывя прямо к пляжу.\n\nКаменные лужи и спокойные утра безопаснее дневного surf при ветре. Алкоголь и плавание несовместимы; также не купайтесь после сумерек. Спросите в отеле, какой участок бухты безопаснее в этот день.',
      },
      {
        title: 'Сочетание пляжей с туром',
        body: 'Классика: сначала культура и горы (Сигирия, Кandy, Элла), затем две–три пляжные ночи перед аэропортом Коломбо близко к западу, Мattala к югу. Обе линии побережья за неделю обычно означают больше езды, чем пляжа.\n\nЧастный водитель позволяет сменить финал при плохой погоде замена Унаватуны на Негомбо у аэропорта типичная муссонная корректировка без стресса с рейсом.',
      },
      {
        title: 'Выбор пляжной базы и ожидания',
        body: 'Выберите одно побережье под ваши даты, а не «пляж из Instagram». Люксовые виллы в Тangalle и Weligama дают пространство и surf; guesthouse среднего уровня в Мириссе и Унаватуне подходят большинству финалов тура. Восток требует больше логистики, но награждает сёрферов и снorkelers в нужные месяцы.\n\nПластик и сезонные водоросли есть на любом побережье; держите реалистичные ожидания и смотрите на качество воды, доступ и вписывание в маршрут, а не на одно идеальное фото.',
      },
    ],
    faq: [
      {
        q: 'Какой лучший пляж на Шри-Ланке?',
        a: 'Зависит от месяца запад/юг декабрь–март; восток (Аругам-Бей, Тринкомали) апрель–октябрь. Нет единого победителя круглый год.',
      },
      {
        q: 'Безопасно ли купаться на Шри-Ланке?',
        a: 'Многие бухты безопасны в спокойный сезон при разрешённом флаге, но течения есть, а спасателей мало. Слушайте местные советы, избегайте красного флага, не плавайте одни на удалённых пляжах.',
      },
      {
        q: 'Когда сезон в Аругам-Бей?',
        a: 'Примерно апрель–октябрь для surf и сухого восточного побережья. Вне этого окна юг или Тринкомали в межсезонье могут быть лучше.',
      },
      {
        q: 'Пляжи и культура за неделю?',
        a: 'Да большинство частных туров заканчивают двумя–тремя ночами на побережье после Сигирии, Kandy и Эллы. Одно побережье за поездку сохраняет реалистичное время в пути.',
      },
      {
        q: 'Мирисса или Унаватуна?',
        a: 'Мирисса для сезона китов и более спокойной бухты; Унаватуна ближе к форту Галле, защищённое купание, но теснее в пик. Обе декабрь–март.',
      },
    ],
    ctaTitle: 'Завершите тур на правильном побережье',
    ctaBody: 'Назовите месяц поездки и темп разместим пляжные ночи там, где погода и море действительно благоприятны, в частном маршруте с водителем.',
    ctaLabel: 'Спланировать пляжный финал',
    relatedTours: [
      { pageId: 'tour5', label: '5-дневный тур по Шри-Ланке' },
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
      { pageId: 'galleDay', label: 'Однодневная экскурсия в Галле' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Галле' },
      { pageId: 'destElla', label: 'Элла' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Лучшее время для Шри-Ланки' },
      { pageId: 'guideSafety', label: 'Гид по безопасности на Шри-Ланке' },
      { pageId: 'guidePrivateDriver', label: 'Гид по частному водителю' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Strände-Ratgeber: Saisons, beste Buchten und sicheres Schwimmen',
    lead: 'Sri Lankas zwei Monsune verschieben den „besten Strand“ im Jahresverlauf Dezembersonne in Unawatuna garantiert nicht dieselben Bedingungen in Arugam Bay. Passen Sie Strandtage an die Saison an, verstehen Sie Brandungsströmungen, und Kultur plus Berge lassen sich mit echt gutem Baden verbinden.',
    heroAlt: 'Palmen gesäumter goldener Strand an der srilankischen Küste',
    sections: [
      {
        title: 'West-/Südküste vs Ostküste Saisons',
        body: 'Etwa von Dezember bis März sind West- und Südküste (Bentota, Hikkaduwa, Unawatuna, Mirissa) trocken und badbar ruhige Morgen, volle Resorts, höchste Hotelpreise. April bis November verschiebt den Vorteil nach Osten: Nilaveli und Uppuveli bei Trincomalee sowie Surferort Arugam Bay bleiben trockener, während der Südwestmonsun Galle und Colombo trifft.\n\nEin Südstrand-Finale im Juli erzwingen bedeutet oft Regen und raue See; flexible Routen führen zur Küste, die gerade Sonne hat.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota und der Südwesten',
        body: 'Mirissa verbindet Walbeobachtung (November–April) mit einer geschwungenen Bucht und entspannten Restaurantseliebt, aber nicht hektisch wie manche Thai-Strände. Unawatuna bietet geschütztes Schwimmen nahe Galle Fort, obwohl Erosion und Andrang in der Hochsaison die Bucht verändert haben. Bentota passt zu Familien mit breitem Sand und Resort-Infrastruktur nahe Colombo.\n\nHikkaduwa zieht Surfer und Schnorchler am Riff; Nachtleben lebhafter als Mirissa. Keine Wildnissträndeut angebundene Basen am Ende einer Rundreise.',
      },
      {
        title: 'Arugam Bay, Trincomalee und der Osten',
        body: 'Arugam Bay ist Sri Lankas Surfhauptstadt von etwa April bis Oktober entspanntes Dorf, lange Reiterwellen. Weit vom Kulturdreieck; am besten, wenn die Ostküste trocken istn eine Winter-Südküstenreise eingebaut bedeutet lange Fahrten und oft nasses Wetter.\n\nTrincomalee (Nilaveli, Uppuveli) bietet hellen Sand, Schnorcheln auf Pigeon Island in der Saison und ruhigeres Tempo als der Süden. Der Nordostmonsun kann ab November starken Regen bringenetter prüfen vor reiner Ostküstenreise.',
      },
      {
        title: 'Badesicherheit, Strömungen und Flaggen',
        body: 'Viele Strände haben keine Rettungsschwimmer; rote Flagge heißt nicht schwimmen, Punkt. Brandungsströmungen sind häufigei Richtung offenes Meer parallel zur Küste schwimmen, dann schräg zurück. Nicht frontal gegen die Strömung kämpfen.\n\nFelsenpools und ruhige Morgen sind sicherer als Nachmittagssurf bei Wind. Alkohol und Schwimmen vertragen sich nicht; nachts ebenfalls wegen Sicht und Bootverkehr. Hotel fragen, welcher Buchtabschnitt an dem Tag am sichersten ist.',
      },
      {
        title: 'Strände mit Rundreise kombinieren',
        body: 'Klassisch: erst Kultur und Berge (Sigiriya, Kandy, Ella), dann zwei bis drei Strandnächte vor dem Flughafen Colombo nahe Westküste, Mattala dem Süden. Beide Küsten in einer Woche bedeutet meist mehr Fahrzeit als Strandzeit.\n\nEin Privatfahrer erlaubt Wechsel bei schlechtem Wetter Unawatuna gegen Negombo nahe Flughafen ist eine übliche Monsun-Anpassung ohne Flugstress.',
      },
      {
        title: 'Strandbasis wählen und Erwartungen',
        body: 'Eine Küste für Ihre Termine wählen, nicht den „Instagram-Strand“. Luxusvillen in Tangalle und Weligama bieten Platz und Surf; Mittelklasse-Gästehäuser in Mirissa und Unawatuna passen zu den meisten Tour-Enden. Ostküste braucht mehr Planung, belohnt Surfer und Schnorchler in den richtigen Monaten.\n\nPlastikmüll und saisonales Seetang gibt es überall; Erwartungen realistisch halten und auf Wasserqualität, Zugang und Einbindung in die Route achten.',
      },
    ],
    faq: [
      {
        q: 'Welcher ist der beste Strand in Sri Lanka?',
        a: 'Hängt vom Monat ab West- und Südküste Dezember–März; Ostküste (Arugam Bay, Trincomalee) April–Oktober. Kein ganzjähriger Sieger.',
      },
      {
        q: 'Ist Schwimmen in Sri Lanka sicher?',
        a: 'Viele Buchten sind in ruhiger Saison bei erlaubter Flagge sicher, aber Strömungen existieren und Rettungsdienst ist begrenzt. Lokale Hinweise befolgen, rote Flagge meiden, nicht allein an abgelegenen Stränden schwimmen.',
      },
      {
        q: 'Wann ist Saison in Arugam Bay?',
        a: 'Etwa April bis Oktober für Surf und trockenes Ostküstenwetter. Außerhalb eher Südküste oder Trincomalee in der Zwischensaison.',
      },
      {
        q: 'Strände und Kultur in einer Woche?',
        a: 'Jaie meisten privaten Rundreisen enden mit zwei bis drei Küstennächten nach Sigiriya, Kandy und Ella. Eine Küste pro Reise hält Fahrzeiten realistisch.',
      },
      {
        q: 'Mirissa oder Unawatuna?',
        a: 'Mirissa für Walsaison und ruhigere Bucht; Unawatuna näher an Galle Fort, geschützter, aber im Hochsaison-Hoch enger. Beide Dezember–März.',
      },
    ],
    ctaTitle: 'Beenden Sie Ihre Tour an der richtigen Küste',
    ctaBody: 'Nennen Sie Reisemonat und Tempoir platzieren Strandnächte dort, wo Wetter und See mitspielen, in einer privaten Chauffeur-Route.',
    ctaLabel: 'Strand-Finale planen',
    relatedTours: [
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'galleDay', label: 'Galle Tagesausflug' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit für Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits-Ratgeber' },
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer-Ratgeber' },
    ],
  }
};
