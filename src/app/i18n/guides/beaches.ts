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
    heroAlt: 'Palm lined golden beach on the Sri Lankan coast',
    sections: [
      {
        id: 'twoCoasts',
        title: 'West and south vs east coast seasons',
        body: 'From roughly December to March, the west and south coasts (Bentota, Hikkaduwa, Unawatuna, Mirissa) are in their dry, swimmable windowalm mornings, busy resorts and the highest hotel rates of the year. April to November flips the advantage to the east: Trincomalee’s Nilaveli and Uppuveli beaches and surf town Arugam Bay stay drier while the southwest monsoon hits Galle and Colombo.\n\nTrying to force a south coast beach finale in July often means rain and rough seas; a flexible itinerary routes you to whichever coast is having its turn in the sun.',
      },
      {
        id: 'southWestBeaches',
        title: 'Mirissa, Hiriketiya, Unawatuna, Bentota and the southwest',
        body: 'Mirissa pairs whale watching (November to April) with a curved bay and a relaxed restaurant strippopular but not as hectic as some Thai beaches. Hiriketiya, further east, is a compact horseshoe surf bay with cafes; UK searches for the name have risen sharply among travellers who want a smaller finish than Mirissa. Unawatuna offers sheltered swimming close to Galle Fort, though erosion and crowds in peak season have changed the bay’s character over the years. Bentota suits families wanting wide sand and resort infrastructure with easy access from Colombo.\n\nHikkaduwa draws surfers and snorkellers on the reef; nightlife is livelier than Mirissa. None of these are remote wilderness beachesthey are well served bases at the end of a round tour.',
      },
      {
        id: 'eastCoast',
        title: 'Arugam Bay, Trincomalee and the east',
        body: 'Arugam Bay is Sri Lanka’s surf capital from roughly April to October, with a laid back village feel and long right hand points. It sits far from the Cultural Triangle and works best when the east coast is drylding it into a standard winter south coast trip means long drives and often wet weather.\n\nTrincomalee (Nilaveli, Uppuveli) offers pale sand, snorkelling on Pigeon Island in season and a quieter pace than the south. The north east monsoon can bring heavy rain from November onward; check forecasts before committing to an east coast only holiday.',
      },
      {
        id: 'swimmingSafety',
        title: 'Swimming safety, rips and flags',
        body: 'Many Sri Lankan beaches have no lifeguards; red flags mean do not swim, full stop. Rip currents are common on open baysf pulled seaward, swim parallel to the shore until out of the current, then angle back in. Do not fight a rip by swimming straight to the beach.\n\nRock pools and calm mornings are safer than afternoon surf when winds pick up. Alcohol and swimming do not mix; neither do swimming after dusk when visibility and boat traffic increase. Ask your hotel which section of the bay is safest that day.',
      },
      {
        id: 'combiningTours',
        title: 'Combining beaches with a round tour',
        body: 'The classic pattern is culture and hills first (Sigiriya, Kandy, Ella), then drop to the coast for two or three beach nights before the airportolombo is close to the west coast, Mattala serves the south. Trying to beach hop both coasts in one week usually costs more driving time than beach time.\n\nA private driver lets you shift the beach finale if weather turnspping Unawatuna for Negombo near the airport is a common rainy season adjustment without missing your flight.',
      },
      {
        id: 'choosingBase',
        title: 'Choosing your beach base and expectations',
        body: 'Pick one coast for your dates, not the “best beach on Instagram.” Luxury villas in Tangalle and Weligama offer space and surf; mid range guesthouses in Mirissa and Unawatuna suit most round tour endings. east coast stays need more lead time for logistics but reward surfers and snorkellers in the right months.\n\nPlastic pollution and seasonal seaweed appear on any coast; manage expectations and focus on water quality, access and how the beach fits your wider itinerary rather than a single perfect photo.',
      },
    ],
    faq: [
      {
        q: 'Which is the best beach in Sri Lanka?',
        a: 'It depends on the month west and south coasts are best December to March; east coast (Arugam Bay, Trincomalee) shines April to October. There is no single winner year round.',
      },
      {
        q: 'Is it safe to swim in Sri Lanka?',
        a: 'Many bays are safe in calm season when flags allow swimming, but rips exist and lifeguard cover is limited. Follow local advice, avoid red flag days and do not swim alone at remote beaches.',
      },
      {
        q: 'When is Arugam Bay in season?',
        a: 'Roughly April to October for surf and dry east coast weather. Outside that window the southwest coast or Trincomalee’s shoulder months may be better choices.',
      },
      {
        q: 'Can I visit beaches and cultural sites in one week?',
        a: 'Yes most private round tours finish with two or three nights on the coast after Sigiriya, Kandy and Ella. One coast per trip keeps driving realistic.',
      },
      {
        q: 'Is Mirissa or Unawatuna better?',
        a: 'Mirissa suits whale season and a quieter bay feel; Unawatuna is closer to Galle Fort with sheltered swimming but more crowded in peak months. Both work December to March.',
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
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destHiriketiya', label: 'Hiriketiya' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Best Time to Visit Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Safety Guide' },
      { pageId: 'guidePrivateDriver', label: 'Private Driver Guide' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
  },

  de: {
    h1: 'Sri Lanka Strande Ratgeber: Saisons, beste Buchten und sicheres Schwimmen',
    lead: 'Sri Lankas zwei Monsune verschieben den „besten Strand“ im Jahresverlauf Dezembersonne in Unawatuna garantiert nicht dieselben Bedingungen in Arugam Bay. Passen Sie Strandtage an die Saison an, verstehen Sie Brandungsstromungen, und Kultur plus Berge lassen sich mit echt gutem Baden verbinden.',
    heroAlt: 'Palmen gesaumter goldener Strand an der srilankischen Kuste',
    sections: [
      {
        title: 'West-/Sudkuste vs Ostkuste Saisons',
        body: 'Etwa von Dezember bis Marz sind West und Sudkuste (Bentota, Hikkaduwa, Unawatuna, Mirissa) trocken und badbar ruhige Morgen, volle Resorts, hochste Hotelpreise. April bis November verschiebt den Vorteil nach Osten: Nilaveli und Uppuveli bei Trincomalee sowie Surferort Arugam Bay bleiben trockener, wahrend der Sudwestmonsun Galle und Colombo trifft.\n\nEin Sudstrand Finale im Juli erzwingen bedeutet oft Regen und raue See; flexible Routen fuhren zur Kuste, die gerade Sonne hat.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota und der Sudwesten',
        body: 'Mirissa verbindet Walbeobachtung (November to April) mit einer geschwungenen Bucht und entspannten Restaurantseliebt, aber nicht hektisch wie manche Thai Strande. Unawatuna bietet geschutztes Schwimmen nahe Galle Fort, obwohl Erosion und Andrang in der Hochsaison die Bucht verandert haben. Bentota passt zu Familien mit breitem Sand und Resort Infrastruktur nahe Colombo.\n\nHikkaduwa zieht Surfer und Schnorchler am Riff; Nachtleben lebhafter als Mirissa. Keine Wildnisstrandeut angebundene Basen am Ende einer Rundreise.',
      },
      {
        title: 'Arugam Bay, Trincomalee und der Osten',
        body: 'Arugam Bay ist Sri Lankas Surfhauptstadt von etwa April bis Oktober entspanntes Dorf, lange Reiterwellen. Weit vom Kulturdreieck; am besten, wenn die Ostkuste trocken istn eine Winter Sudkustenreise eingebaut bedeutet lange Fahrten und oft nasses Wetter.\n\nTrincomalee (Nilaveli, Uppuveli) bietet hellen Sand, Schnorcheln auf Pigeon Island in der Saison und ruhigeres Tempo als der Suden. Der Nordostmonsun kann ab November starken Regen bringenetter prufen vor reiner Ostkustenreise.',
      },
      {
        title: 'Badesicherheit, Stromungen und Flaggen',
        body: 'Viele Strande haben keine Rettungsschwimmer; rote Flagge heisst nicht schwimmen, Punkt. Brandungsstromungen sind haufigei Richtung offenes Meer parallel zur Kuste schwimmen, dann schrag zuruck. Nicht frontal gegen die Stromung kampfen.\n\nFelsenpools und ruhige Morgen sind sicherer als Nachmittagssurf bei Wind. Alkohol und Schwimmen vertragen sich nicht; nachts ebenfalls wegen Sicht und Bootverkehr. Hotel fragen, welcher Buchtabschnitt an dem Tag am sichersten ist.',
      },
      {
        title: 'Strande mit Rundreise kombinieren',
        body: 'Klassisch: erst Kultur und Berge (Sigiriya, Kandy, Ella), dann zwei bis drei Strandnachte vor dem Flughafen Colombo nahe Westkuste, Mattala dem Suden. Beide Kusten in einer Woche bedeutet meist mehr Fahrzeit als Strandzeit.\n\nEin Privatfahrer erlaubt Wechsel bei schlechtem Wetter Unawatuna gegen Negombo nahe Flughafen ist eine ubliche Monsun Anpassung ohne Flugstress.',
      },
      {
        title: 'Strandbasis wahlen und Erwartungen',
        body: 'Eine Kuste fur Ihre Termine wahlen, nicht den „Instagram Strand“. Luxusvillen in Tangalle und Weligama bieten Platz und Surf; Mittelklasse Gastehauser in Mirissa und Unawatuna passen zu den meisten Tour Enden. Ostkuste braucht mehr Planung, belohnt Surfer und Schnorchler in den richtigen Monaten.\n\nPlastikmull und saisonales Seetang gibt es uberall; Erwartungen realistisch halten und auf Wasserqualitat, Zugang und Einbindung in die Route achten.',
      },
    ],
    faq: [
      {
        q: 'Welcher ist der beste Strand in Sri Lanka?',
        a: 'Hangt vom Monat ab West und Sudkuste Dezember to Marz; Ostkuste (Arugam Bay, Trincomalee) April to Oktober. Kein ganzjahriger Sieger.',
      },
      {
        q: 'Ist Schwimmen in Sri Lanka sicher?',
        a: 'Viele Buchten sind in ruhiger Saison bei erlaubter Flagge sicher, aber Stromungen existieren und Rettungsdienst ist begrenzt. Lokale Hinweise befolgen, rote Flagge meiden, nicht allein an abgelegenen Stranden schwimmen.',
      },
      {
        q: 'Wann ist Saison in Arugam Bay?',
        a: 'Etwa April bis Oktober fur Surf und trockenes Ostkustenwetter. Ausserhalb eher Sudkuste oder Trincomalee in der Zwischensaison.',
      },
      {
        q: 'Strande und Kultur in einer Woche?',
        a: 'Jaie meisten privaten Rundreisen enden mit zwei bis drei Kustennachten nach Sigiriya, Kandy und Ella. Eine Kuste pro Reise halt Fahrzeiten realistisch.',
      },
      {
        q: 'Mirissa oder Unawatuna?',
        a: 'Mirissa fur Walsaison und ruhigere Bucht; Unawatuna naher an Galle Fort, geschutzter, aber im Hochsaison Hoch enger. Beide Dezember to Marz.',
      },
    ],
    ctaTitle: 'Beenden Sie Ihre Tour an der richtigen Kuste',
    ctaBody: 'Nennen Sie Reisemonat und Tempoir platzieren Strandnachte dort, wo Wetter und See mitspielen, in einer privaten Chauffeur Route.',
    ctaLabel: 'Strand Finale planen',
    relatedTours: [
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'galleDay', label: 'Galle Tagesausflug' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits Ratgeber' },
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide des plages du Sri Lanka : saisons, baies et baignade en securite',
    lead: 'Les deux moussons du Sri Lanka deplacent la « meilleure plage » au fil de l’annee le soleil de decembre a Unawatuna ne garantit pas les memes conditions a Arugam Bay. Alignez vos jours de plage sur la saison, comprenez les baines, et une semaine de culture et montagnes peut finir par de vraies baignades.',
    heroAlt: 'Plage doree bordee de palmiers sur la cote du Sri Lanka',
    sections: [
      {
        title: 'Cotes ouest/sud vs cote estaisons',
        body: 'D’environ decembre a mars, les cotes ouest et sud (Bentota, Hikkaduwa, Unawatuna, Mirissa) sont seches et propices a la baignade matins calmes, resorts animes, tarifs hoteliers au plus haut. D’avril a novembre, l’avantage bascule a l’est : Nilaveli et Uppuveli pres de Trincomalee et la ville surf d’Arugam Bay restent plus seches pendant que la mousson du sud ouest touche Galle et Colombo.\n\nForcer une finale plage au sud en juillet signifie souvent pluie et mer agitee ; un itineraire flexible vous oriente vers la cote au bon moment.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota et le sud ouest',
        body: 'Mirissa combine observation des baleines (novembre to avril), baie arrondie et restaurants decontractesopulaire sans l’agitation de certaines plages thailandaises. Unawatuna offre une baignade abritee pres de Galle Fort, bien que l’erosion et la foule en haute saison aient change la baie. Bentota convient aux familles avec large plage et infrastructures resort proches de Colombo.\n\nHikkaduwa attire surfeurs et snorkelleurs sur le recif ; vie nocturne plus animee que Mirissa. Ce ne sont pas des plages sauvages des bases bien desservies en fin de circuit.',
      },
      {
        title: 'Arugam Bay, Trincomalee et l’est',
        body: 'Arugam Bay est la capitale surf du Sri Lanka d’environ avril a octobre village decontracte, longues vagues droitieres. Loin du Triangle Culturel ; ideal quand la cote est est seche l’integrer a un voyage hivernal sur le sud signifie longs trajets et souvent de la pluie.\n\nTrincomalee (Nilaveli, Uppuveli) propose sable clair, snorkel sur Pigeon Island en saison et rythme plus calme que le sud. La mousson du nord est peut apporter de fortes pluies des novembre verifiez les previsions avant un sejour 100 % cote est.',
      },
      {
        title: 'Securite baignade, baines et drapeaux',
        body: 'Beaucoup de plages n’ont pas de maitres nageurs ; drapeau rouge = ne pas nager, point. Les baines sont frequentes si emporte vers le large, nagez parallele au rivage jusqu’a sortir du courant, puis revenez en biais. Ne combattez pas le courant en nageant droit vers la plage.\n\nMarettes et matins calmes sont plus surs que le surf de l’apres midi quand le vent se leve. Alcool et baignade ne vont pas ensemble ; ni baignade apres la tombee de la nuit. Demandez a l’hotel quelle zone de la baie est la plus sure ce jour la.',
      },
      {
        title: 'Combiner plages et circuit',
        body: 'Le schema classique : culture et montagnes d’abord (Sigiriya, Kandy, Ella), puis deux ou trois nuits plage avant l’aeroportolombo proche de l’ouest, Mattala du sud. Enchainer les deux cotes en une semaine coute souvent plus de route que de plage.\n\nUn chauffeur prive permet de deplacer la finale si le temps tournechanger Unawatuna pour Negombo pres de l’aeroport est un ajustement courant en mousson sans rater le vol.',
      },
      {
        title: 'Choisir sa base plage et ses attentes',
        body: 'Choisissez une cote pour vos dates, pas « la plage Instagram ». Villas de luxe a Tangalle et Weligama offrent espace et surf ; guesthouses milieu de gamme a Mirissa et Unawatuna conviennent a la plupart des fins de circuit. La cote est demande plus de logistique mais recompense surfeurs et snorkelleurs aux bons mois.\n\nPollution plastique et algues saisonnieres existent partout ; restez realistes et privilegiez qualite de l’eau, acces et integration au voyage plutot qu’une photo parfaite.',
      },
    ],
    faq: [
      {
        q: 'Quelle est la meilleure plage du Sri Lanka ?',
        a: 'Cela depend du mois ouest/sud de decembre a mars ; cote est (Arugam Bay, Trincomalee) d’avril a octobre. Pas de gagnant unique toute l’annee.',
      },
      {
        q: 'Est il sur de nager au Sri Lanka ?',
        a: 'Beaucoup de baies sont sures en saison calme quand les drapeaux l’autorisent, mais les baines existent et la surveillance est limitee. Suivez les conseils locaux, evitez drapeau rouge, ne nagez pas seul sur plages isolees.',
      },
      {
        q: 'Quand est la saison a Arugam Bay ?',
        a: 'Environ avril a octobre pour le surf et la meteo seche a l’est. Hors de cette fenetre, le sud ou Trincomalee en intersaison peuvent mieux convenir.',
      },
      {
        q: 'Plages et sites culturels en une semaine ?',
        a: 'Ouia plupart des circuits prives finissent par deux ou trois nuits cotieres apres Sigiriya, Kandy et Ella. Une cote par voyage garde des trajets realistes.',
      },
      {
        q: 'Mirissa ou Unawatuna ?',
        a: 'Mirissa pour la saison baleines et une baie plus calme ; Unawatuna plus proche de Galle Fort, baignade abritee mais plus bondee en pic. Les deux conviennent de decembre a mars.',
      },
    ],
    ctaTitle: 'Terminez votre circuit sur la bonne cote',
    ctaBody: 'Indiquez votre mois de voyage et votre rythmeous placerons les nuits plage la ou meteo et mer cooperent, dans un itineraire prive avec chauffeur.',
    ctaLabel: 'Planifier une finale plage',
    relatedTours: [
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
      { pageId: 'galleDay', label: 'Excursion d’une journee a Galle' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Meilleure periode pour le Sri Lanka' },
      { pageId: 'guideSafety', label: 'Guide securite Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur prive' },
    ],
  },

  it: {
    h1: 'Mare e spiagge Sri Lanka: stagioni, Mirissa, Weligama e costa est',
    lead: 'I due monsoni dello Sri Lanka spostano la « migliore spiaggia » durante l’annol sole di dicembre a Unawatuna non garantisce le stesse condizioni ad Arugam Bay. Allineate i giorni di mare alla stagione, capite le correnti di risacca e una settimana di cultura e colline puo chiudersi con nuotate davvero piacevoli.',
    heroAlt: 'Spiaggia dorata con palme sulla costa dello Sri Lanka',
    sections: [
      {
        title: 'Costa ovest/sud vs costa est stagioni',
        body: 'Da circa dicembre a marzo, le coste ovest e sud (Bentota, Hikkaduwa, Unawatuna, Mirissa) sono nella finestra secca e balneabile mattine calme, resort affollati, tariffe al top. Da aprile a novembre il vantaggio passa a est: Nilaveli e Uppuveli vicino Trincomalee e la surf town Arugam Bay restano piu asciutte mentre il monsone sud occidentale colpisce Galle e Colombo.\n\nForzare un finale al sud a luglio spesso significa pioggia e mare mosso; un itinerario flessibile vi porta sulla costa che ha il suo momento di sole.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota e il sud ovest',
        body: 'Mirissa unisce whale watching (novembre to aprile), baia curva e ristoranti rilassati popolare ma non frenetica come alcune spiagge thailandesi. Unawatuna offre nuoto riparato vicino a Galle Fort, anche se erosione e folla in alta stagione hanno cambiato la baia. Bentota va alle famiglie con sabbia ampia e infrastrutture resort vicino Colombo.\n\nHikkaduwa attira surfisti e snorkeler sulla barriera; nightlife piu vivace di Mirissa. Non sono spiagge selvagge basi ben servite a fine tour.',
      },
      {
        title: 'Arugam Bay, Trincomalee e l’est',
        body: 'Arugam Bay e la capitale del surf dallo Sri Lanka da circa aprile a ottobre villaggio rilassato, lunghe onde destra. Lontana dal Triangolo Culturale; funziona meglio quando la costa est e secca inserirla in un viaggio invernale sul sud significa lunghe guida e spesso pioggia.\n\nTrincomalee (Nilaveli, Uppuveli) offre sabbia chiara, snorkeling a Pigeon Island in stagione e ritmo piu quieto del sud. Il monsone nord orientale puo portare piogge forti da novembreontrollate le previsioni prima di un solo est.',
      },
      {
        title: 'Sicurezza in acqua, risacca e bandiere',
        body: 'Molte spiagge non hanno bagnini; bandiera rossa = non nuotare, punto. Le risacce sono comunie trascinati verso largo, nuotate paralleli alla riva fino a uscire dalla corrente, poi tornate obliqui. Non combattete la risacca nuotando dritti verso la spiaggia.\n\nPozze rocciose e mattine calme sono piu sicure del surf pomeridiano col vento. Alcol e nuoto non vanno insieme; nemmeno nuotare dopo il tramonto. Chiedete in hotel quale tratto di baia e piu sicuro quel giorno.',
      },
      {
        title: 'Combinare spiagge con un tour',
        body: 'Lo schema classico: cultura e colline prima (Sigiriya, Kandy, Ella), poi due o tre notti mare prima dell’aeroportoolombo vicino all’ovest, Mattala al sud. Fare entrambe le coste in una settimana costa spesso piu guida che spiaggia.\n\nUn autista privato permette di spostare il finale se il tempo gira scambiare Unawatuna con Negombo vicino all’aeroporto e un aggiustamento monsonico comune senza perdere il volo.',
      },
      {
        title: 'Scegliere la base mare e le aspettative',
        body: 'Scegliete una costa per le vostre date, non « la spiaggia Instagram ». Ville di lusso a Tangalle e Weligama offrono spazio e surf; guesthouse mid range a Mirissa e Unawatuna adattano la maggior parte dei finali tour. La costa est richiede piu logistica ma premia surfisti e snorkeler nei mesi giusti.\n\nPlastica e alghe stagionali compaiono ovunque; aspettative realistiche e focus su qualita dell’acqua, accesso e inserimento nel viaggio piu che una foto perfetta.',
      },
    ],
    faq: [
      {
        q: 'Qual e la migliore spiaggia dello Sri Lanka?',
        a: 'Dipende dal mese ovest/sud dicembre to marzo; costa est (Arugam Bay, Trincomalee) aprile to ottobre. Nessuna vincitrice tutto l’anno.',
      },
      {
        q: 'E sicuro nuotare nello Sri Lanka?',
        a: 'Molte baie sono sicure in stagione calma con bandiera verde, ma esistono risacce e sorveglianza limitata. Seguite consigli locali, evitate bandiera rossa, non nuotate soli su spiagge remote.',
      },
      {
        q: 'Quando e la stagione ad Arugam Bay?',
        a: 'Circa aprile to ottobre per surf e meteo secco a est. Fuori da questa finestra, sud o Trincomalee in mezza stagione possono essere scelte migliori.',
      },
      {
        q: 'Spiagge e siti culturali in una settimana?',
        a: 'Si la maggior parte dei tour privati chiude con due o tre notti costiere dopo Sigiriya, Kandy ed Ella. Una costa per viaggio mantiene guida realistica.',
      },
      {
        q: 'Mirissa o Unawatuna?',
        a: 'Mirissa per stagione balene e baia piu tranquilla; Unawatuna piu vicina a Galle Fort, nuoto riparato ma piu affollata in pic. Entrambe dicembre to marzo.',
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
      { pageId: 'guideBestTime', label: 'Quando andare / meteo' },
      { pageId: 'guideSafety', label: 'Viaggiare sicuri' },
      { pageId: 'guidePrivateDriver', label: 'Guida all’autista privato' },
      { pageId: 'marketItaly', label: 'Viaggio dall’Italia' },
    ],
  },

  es: {
    h1: 'Guia de playas de Sri Lanka: temporadas, mejores bahias y bano seguro',
    lead: 'Los dos monzones de Sri Lanka desplazan la « mejor playa » a lo largo del ano el sol de diciembre en Unawatuna no garantiza las mismas condiciones en Arugam Bay. Alinee los dias de playa con la temporada, entienda las corrientes y una semana de cultura y montana puede terminar con banos de verdad.',
    heroAlt: 'Playa dorada con palmeras en la costa de Sri Lanka',
    sections: [
      {
        title: 'Costa oeste/sur vs costa este temporadas',
        body: 'De aproximadamente diciembre a marzo, las costas oeste y sur (Bentota, Hikkaduwa, Unawatuna, Mirissa) estan en su ventana seca y apta para nadar mananas calmadas, resorts concurridos y tarifas hoteleras altas. De abril a noviembre la ventaja pasa al este: Nilaveli y Uppuveli cerca de Trincomalee y el pueblo surfista Arugam Bay se mantienen mas secos mientras el monzon suroeste afecta Galle y Colombo.\n\nForzar un final de playa en el sur en julio suele significar lluvia y mar agitado; un itinerario flexible le lleva a la costa que toca sol.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota y el suroeste',
        body: 'Mirissa combina avistamiento de ballenas (noviembre to abril), bahia curva y restaurantes relajados popular pero no tan frenetica como algunas playas tailandesas. Unawatuna ofrece bano resguardado cerca de Galle Fort, aunque la erosion y las multitudes en temporada alta han cambiado la bahia. Bentota encaja con familias que buscan arena amplia e infraestructura resort cerca de Colombo.\n\nHikkaduwa atrae surfistas y snorkelistas en el arrecife; vida nocturna mas animada que Mirissa. No son playas salvajes bases bien comunicadas al final del tour.',
      },
      {
        title: 'Arugam Bay, Trincomalee y el este',
        body: 'Arugam Bay es la capital del surf de Sri Lanka de aproximadamente abril a octubre pueblo relajado, olas derechas largas. Lejos del Triangulo Cultural; funciona mejor cuando la costa este esta seca meterla en un viaje invernal al sur implica largos trayectos y a menudo lluvia.\n\nTrincomalee (Nilaveli, Uppuveli) ofrece arena clara, snorkel en Pigeon Island en temporada y ritmo mas tranquilo que el sur. El monzon noreste puede traer lluvias fuertes desde noviembre consulte el pronostico antes de un viaje solo a la costa este.',
      },
      {
        title: 'Seguridad al nadar, corrientes y banderas',
        body: 'Muchas playas no tienen socorristas; bandera roja = no nadar, punto. Las corrientes de resaca son frecuentes si le arrastra mar adentro, nade paralelo a la orilla hasta salir de la corriente y vuelva en diagonal. No luche contra la resaca nadando directo a la playa.\n\nPozas rocosas y mananas calmadas son mas seguras que el surf vespertino con viento. Alcohol y natacion no combinan; tampoco nadar de noche. Pregunte en el hotel que tramo de la bahia es mas seguro ese dia.',
      },
      {
        title: 'Combinar playas con un tour',
        body: 'El patron clasico: cultura y montana primero (Sigiriya, Kandy, Ella), luego dos o tres noches de playa antes del aeropuerto Colombo cerca del oeste, Mattala del sur. Hacer ambas costas en una semana suele costar mas conduccion que playa.\n\nUn chofer privado permite mover el final si el tiempo cambia cambiar Unawatuna por Negombo cerca del aeropuerto es un ajuste monzonico habitual sin perder el vuelo.',
      },
      {
        title: 'Elegir base de playa y expectativas',
        body: 'Elija una costa para sus fechas, no « la playa de Instagram ». Villas de lujo en Tangalle y Weligama ofrecen espacio y surf; guesthouses de gama media en Mirissa y Unawatuna encajan con la mayoria de finales de tour. La costa este requiere mas logistica pero premia surfistas y snorkelistas en los meses correctos.\n\nContaminacion plastica y algas estacionales aparecen en cualquier costa; expectativas realistas y foco en calidad del agua, acceso e integracion en el viaje mas que una foto perfecta.',
      },
    ],
    faq: [
      {
        q: 'Cual es la mejor playa de Sri Lanka?',
        a: 'Depende del mes oeste/sur de diciembre a marzo; costa este (Arugam Bay, Trincomalee) de abril a octubre. No hay una ganadora todo el ano.',
      },
      {
        q: 'Es seguro nadar en Sri Lanka?',
        a: 'Muchas bahias son seguras en temporada calmada con bandera permitida, pero hay resacas y vigilancia limitada. Siga consejos locales, evite bandera roja y no nade solo en playas remotas.',
      },
      {
        q: 'Cuando es temporada en Arugam Bay?',
        a: 'Aproximadamente abril to octubre para surf y clima seco en el este. Fuera de esa ventana, el sur o Trincomalee en temporada intermedia pueden ser mejores.',
      },
      {
        q: 'Playas y sitios culturales en una semana?',
        a: 'Si la mayoria de tours privados terminan con dos o tres noches costeras tras Sigiriya, Kandy y Ella. Una costa por viaje mantiene la conduccion realista.',
      },
      {
        q: 'Mirissa o Unawatuna?',
        a: 'Mirissa para temporada de ballenas y bahia mas tranquila; Unawatuna mas cerca de Galle Fort, bano resguardado pero mas concurrida en pico. Ambas funcionan diciembre to marzo.',
      },
    ],
    ctaTitle: 'Termine su tour en la costa correcta',
    ctaBody: 'Indique mes de viaje y ritmo colocaremos noches de playa donde clima y mar cooperen, en un itinerario privado con chofer.',
    ctaLabel: 'Planificar final en playa',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour de 5 dias por Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
      { pageId: 'galleDay', label: 'Excursion de un dia a Galle' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Mejor epoca para visitar Sri Lanka' },
      { pageId: 'guideSafety', label: 'Guia de seguridad en Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guia del chofer privado' },
    ],
  },

  pl: {
    h1: 'Przewodnik po plazach Sri Lanki: sezony, zatoki i bezpieczne plywanie',
    lead: 'Dwa monsuny Sri Lanki przesuwaja „najlepsza plaze” w ciagu roku grudniowe slonce w Unawatunie nie gwarantuje tych samych warunkow w Arugam Bay. Dopasuj dni plazowe do sezonu, zrozum prady odrzutowe, a tydzien kultury i gor moze zakonczyc sie naprawde dobrym plywaniem.',
    heroAlt: 'Zlota plaza z palmami na wybrzezu Sri Lanki',
    sections: [
      {
        title: 'Wybrzeze zachodnie/poludniowe vs wschodnie sezony',
        body: 'Od grudnia do marca zachod i poludnie (Bentota, Hikkaduwa, Unawatuna, Mirissa) sa suche i nadaja sie do kapieli spokojne ranki, pelne resorty, najwyzsze stawki hotelowe. Od kwietnia do listopada przewaga przechodzi na wschod: Nilaveli i Uppuveli kolo Trincomalee oraz surferowski Arugam Bay pozostaja suchsze, gdy monsun poludniowo zachodni uderza w Galle i Colombo.\n\nWymuszanie poludniowego finalu plazowego w lipcu czesto oznacza deszcz i wzburzone morze; elastyczna trasa prowadzi na wybrzeze w slonecznej fazie.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota i poludniowy zachod',
        body: 'Mirissa laczy obserwacje wielorybow (listopad to kwiecien), zaokraglona zatoke i spokojne restauracje popularna, ale mniej chaotyczna niz niektore plaze Tajlandii. Unawatuna daje osloniete plywanie blisko Galle Fort, choc erozja i tlumy w szczycie zmienily zatoke. Bentota pasuje rodzinom z szerokim piaskiem i infrastruktura resortu blisko Colombo.\n\nHikkaduwa przyciaga surferow i snorkelerow na rafie; nightlife zywsze niz w Mirissie. To nie dzikie plaze dobrze skomunikowane bazy na koncu trasy.',
      },
      {
        title: 'Arugam Bay, Trincomalee i wschod',
        body: 'Arugam Bay to surferowska stolica Sri Lanki od okolo kwietnia do pazdziernika spokojna wioska, dlugie prawe fale. Daleko od Trojkata Kulturowego; najlepiej, gdy wschodnie wybrzeze jest suche wplecenie w zimowa podroz na poludnie oznacza dlugie dojazdy i czesto deszcz.\n\nTrincomalee (Nilaveli, Uppuveli) oferuje jasny piasek, snorkeling na Pigeon Island w sezonie i spokojniejsze tempo niz poludnie. Monsun polnocno wschodni moze przyniesc ulewy od listopada sprawdz prognoze przed wyjazdem tylko na wschod.',
      },
      {
        title: 'Bezpieczenstwo kapieli, prady i flagi',
        body: 'Wiele plaz nie ma ratownikow; czerwona flaga = nie plywac, koniec. Prady odrzutowe sa czeste jesli ciagnie w morze, plywaj rownolegle do brzegu, az wyjdziesz z pradu, potem wracaj ukosnie. Nie walcz z pradem plynac prosto do plazy.\n\nKaluze skalne i spokojne ranki sa bezpieczniejsze niz popoludniowy surf przy wietrze. Alkohol i plywanie sie wykluczaja; tak samo plywanie po zmroku. Zapytaj hotel, ktory odcinek zatoki jest najbezpieczniejszy danego dnia.',
      },
      {
        title: 'Laczenie plaz z toursem',
        body: 'Klasyczny schemat: najpierw kultura i gory (Sigiriya, Kandy, Ella), potem dwie to trzy noce plazowe przed lotniskiem Colombo blisko zachodu, Mattala poludnia. Obie linie brzegowe w tydzien to zwykle wiecej jazdy niz plazy.\n\nPrywatny kierowca pozwala przesunac final przy zlej pogodzie zamiana Unawatuny na Negombo przy lotnisku to typowa monsunowa korekta bez stresu lotu.',
      },
      {
        title: 'Wybor bazy plazowej i oczekiwan',
        body: 'Wybierz jedno wybrzeze na swoje terminy, nie „plaze z Instagrama”. Luksusowe wille w Tangalle i Weligama daja przestrzen i surf; guesthouse’y sredniej klasy w Mirissie i Unawatunie pasuja do wiekszosci finalow touru. Wschod wymaga wiecej logistyki, ale nagradza surferow i snorkelerow we wlasciwych miesiacach.\n\nPlastik i sezonowe wodorosty sa wszedzie; trzymaj realistyczne oczekiwania i patrz na jakosc wody, dostep i wpisanie w trase, nie na jedno idealne zdjecie.',
      },
    ],
    faq: [
      {
        q: 'Jaka jest najlepsza plaza na Sri Lance?',
        a: 'Zalezy od miesiaca zachod/poludnie grudzien–marzec; wschod (Arugam Bay, Trincomalee) kwiecien–pazdziernik. Nie ma jednej zwyciezczyni przez caly rok.',
      },
      {
        q: 'Czy plywanie na Sri Lance jest bezpieczne?',
        a: 'Wiele zatok jest bezpiecznych w spokojnym sezonie przy zielonej fladze, ale prady istnieja, a nadzor jest ograniczony. Sluchaj lokalnych rad, unikaj czerwonej flagi, nie plywaj sam na odleglych plazach.',
      },
      {
        q: 'Kiedy sezon w Arugam Bay?',
        a: 'Okolo kwiecien–pazdziernik pod surf i suche wschodnie wybrzeze. Poza tym oknem poludnie lub Trincomalee w sezonie przejsciowym moga byc lepsze.',
      },
      {
        q: 'Plaze i zabytki w tydzien?',
        a: 'Tak wiekszosc prywatnych tourow konczy dwoma to trzema nocami nad morzem po Sigiriyi, Kandy i Ella. Jedno wybrzeze na wyjazd utrzymuje realne czasy jazdy.',
      },
      {
        q: 'Mirissa czy Unawatuna?',
        a: 'Mirissa pod sezon wielorybow i spokojniejsza zatoke; Unawatuna blizej Galle Fort, osloniete kapiele, ale tloczniej w szczycie. Obie grudzien–marzec.',
      },
    ],
    ctaTitle: 'Zakoncz tour na wlasciwym wybrzezu',
    ctaBody: 'Podaj miesiac podrozy i tempo ustawimy noce plazowe tam, gdzie pogoda i morze wspolgraja, w prywatnej trasie z kierowca.',
    ctaLabel: 'Zaplanuj final na plazy',
    relatedTours: [
      { pageId: 'tour5', label: '5 dniowa wycieczka po Sri Lance' },
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'galleDay', label: 'Jednodniowa wycieczka do Galle' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Najlepszy czas na Sri Lanke' },
      { pageId: 'guideSafety', label: 'Przewodnik bezpieczenstwa na Sri Lance' },
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnym kierowcy' },
    ],
  },

  ru: {
    h1: 'Пляжи Шри Ланки: Хиккадува, Мирисса, Негомбо и сезоны',
    lead: 'Два муссона Шри Ланки смещают «лучший пляж» в течение года декабрьское солнце в Унаватуне не гарантирует те же условия в Аругам Бей. Согласуйте пляжные дни с сезоном, поймите отбойные течения и неделя культуры и гор может закончиться действительно хорошим купанием.',
    heroAlt: 'Золотой пляж с пальмами на побережье Шри Ланки',
    sections: [
      {
        title: 'Запад/юг vs восточное побережье сезоны',
        body: 'Примерно с декабря по март западное и южное побережья (Бентота, Хиккадува, Унаватуна, Мирисса) в сухом, купальном окне спокойные утра, загруженные курорты, максимальные цены на отели. С апреля по ноябрь преимущество переходит на восток: Нилавели и Уppuveli у Тринкомали и сёрф городок Аругам Бей остаются суше, пока юго западный муссон бьёт по Галле и Коломбо.\n\nФорсировать южный пляжный финал в июле часто значит дождь и rough море; гибкий маршрут ведёт к побережью в его солнечную фазу.',
      },
      {
        title: 'Мирисса, Унаватуна, Бентота и юго запад',
        body: 'Мирисса сочетает наблюдение за китами (ноябрь–апрель), изогнутую бухту и расслабленные рестораны популярно, но не так суетно, как некоторые пляжи Таиланда. Унаватуна даёт защищённое купание рядом с фортом Галле, хотя эрозия и толпы в пик сезона изменили бухту. Бентота подходит семьям с широким песком и инфраструктурой курорта недалеко от Коломбо.\n\nХиккадува привлекает сёрферов и снorkelers на рифе; ночная жизнь оживлённее, чем в Мириссе. Это не дикие пляжидобные базы в конце тура.',
      },
      {
        title: 'Аругам Бей, Тринкомали и восток',
        body: 'Аругам Бейёрф столица Шри Ланки примерно с апреля по октябрь: расслабленная деревня, длинные правые волны. Далеко от Культурного треугольника; лучше, когда восток сухойавить в зимний тур на юг значит длинные переезды и часто дождь.\n\nТринкомали (Нилавели, Уppuveli)ветлый песок, снorkeling на Pigeon Island в сезон и более спокойный ритм, чем на юге. Северо восточный муссон может принести сильные дожди с ноября проверьте прогноз перед поездкой только на восток.',
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
        q: 'Какой лучший пляж на Шри Ланке?',
        a: 'Зависит от месяца запад/юг декабрь–март; восток (Аругам Бей, Тринкомали) апрель–октябрь. Нет единого победителя круглый год.',
      },
      {
        q: 'Безопасно ли купаться на Шри Ланке?',
        a: 'Многие бухты безопасны в спокойный сезон при разрешённом флаге, но течения есть, а спасателей мало. Слушайте местные советы, избегайте красного флага, не плавайте одни на удалённых пляжах.',
      },
      {
        q: 'Когда сезон в Аругам Бей?',
        a: 'Примерно апрель–октябрь для surf и сухого восточного побережья. Вне этого окна юг или Тринкомали в межсезонье могут быть лучше.',
      },
      {
        q: 'Пляжи и культура за неделю?',
        a: 'Да большинство частных туров заканчивают двумя–тремя ночами на побережье после Сигирии, Kandy и Эллы. Одно побережье за поездку сохраняет реалистичное время в пути.',
      },
      {
        q: 'Где лучше отдыхать у моря?',
        a: 'Шри ланка отдых у воды зависит от месяца. Унаватуна, Хиккадува, Мирисса декабрь–март; восток май–сентябрь. Мы не страница отеля RIU.',
      },
    ],
    ctaTitle: 'Завершите тур на правильном побережье',
    ctaBody: 'Назовите месяц поездки и темп разместим пляжные ночи там, где погода и море действительно благоприятны, в частном маршруте с водителем.',
    ctaLabel: 'Спланировать пляжный финал',
    relatedTours: [
      { pageId: 'tour5', label: '5 дневный тур по Шри Ланке' },
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
      { pageId: 'galleDay', label: 'Однодневная экскурсия в Галле' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Галле' },
      { pageId: 'destElla', label: 'Элла' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Лучшее время для Шри Ланки' },
      { pageId: 'guideSafety', label: 'Гид по безопасности на Шри Ланке' },
      { pageId: 'guidePrivateDriver', label: 'Гид по частному водителю' },
      { pageId: 'marketRussia', label: 'Туры из России' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Strande Ratgeber: Saisons, beste Buchten und sicheres Schwimmen',
    lead: 'Sri Lankas zwei Monsune verschieben den „besten Strand“ im Jahresverlauf Dezembersonne in Unawatuna garantiert nicht dieselben Bedingungen in Arugam Bay. Passen Sie Strandtage an die Saison an, verstehen Sie Brandungsstromungen, und Kultur plus Berge lassen sich mit echt gutem Baden verbinden.',
    heroAlt: 'Palmen gesaumter goldener Strand an der srilankischen Kuste',
    sections: [
      {
        title: 'West-/Sudkuste vs Ostkuste Saisons',
        body: 'Etwa von Dezember bis Marz sind West und Sudkuste (Bentota, Hikkaduwa, Unawatuna, Mirissa) trocken und badbar ruhige Morgen, volle Resorts, hochste Hotelpreise. April bis November verschiebt den Vorteil nach Osten: Nilaveli und Uppuveli bei Trincomalee sowie Surferort Arugam Bay bleiben trockener, wahrend der Sudwestmonsun Galle und Colombo trifft.\n\nEin Sudstrand Finale im Juli erzwingen bedeutet oft Regen und raue See; flexible Routen fuhren zur Kuste, die gerade Sonne hat.',
      },
      {
        title: 'Mirissa, Unawatuna, Bentota und der Sudwesten',
        body: 'Mirissa verbindet Walbeobachtung (November to April) mit einer geschwungenen Bucht und entspannten Restaurantseliebt, aber nicht hektisch wie manche Thai Strande. Unawatuna bietet geschutztes Schwimmen nahe Galle Fort, obwohl Erosion und Andrang in der Hochsaison die Bucht verandert haben. Bentota passt zu Familien mit breitem Sand und Resort Infrastruktur nahe Colombo.\n\nHikkaduwa zieht Surfer und Schnorchler am Riff; Nachtleben lebhafter als Mirissa. Keine Wildnisstrandeut angebundene Basen am Ende einer Rundreise.',
      },
      {
        title: 'Arugam Bay, Trincomalee und der Osten',
        body: 'Arugam Bay ist Sri Lankas Surfhauptstadt von etwa April bis Oktober entspanntes Dorf, lange Reiterwellen. Weit vom Kulturdreieck; am besten, wenn die Ostkuste trocken istn eine Winter Sudkustenreise eingebaut bedeutet lange Fahrten und oft nasses Wetter.\n\nTrincomalee (Nilaveli, Uppuveli) bietet hellen Sand, Schnorcheln auf Pigeon Island in der Saison und ruhigeres Tempo als der Suden. Der Nordostmonsun kann ab November starken Regen bringenetter prufen vor reiner Ostkustenreise.',
      },
      {
        title: 'Badesicherheit, Stromungen und Flaggen',
        body: 'Viele Strande haben keine Rettungsschwimmer; rote Flagge heisst nicht schwimmen, Punkt. Brandungsstromungen sind haufigei Richtung offenes Meer parallel zur Kuste schwimmen, dann schrag zuruck. Nicht frontal gegen die Stromung kampfen.\n\nFelsenpools und ruhige Morgen sind sicherer als Nachmittagssurf bei Wind. Alkohol und Schwimmen vertragen sich nicht; nachts ebenfalls wegen Sicht und Bootverkehr. Hotel fragen, welcher Buchtabschnitt an dem Tag am sichersten ist.',
      },
      {
        title: 'Strande mit Rundreise kombinieren',
        body: 'Klassisch: erst Kultur und Berge (Sigiriya, Kandy, Ella), dann zwei bis drei Strandnachte vor dem Flughafen Colombo nahe Westkuste, Mattala dem Suden. Beide Kusten in einer Woche bedeutet meist mehr Fahrzeit als Strandzeit.\n\nEin Privatfahrer erlaubt Wechsel bei schlechtem Wetter Unawatuna gegen Negombo nahe Flughafen ist eine ubliche Monsun Anpassung ohne Flugstress.',
      },
      {
        title: 'Strandbasis wahlen und Erwartungen',
        body: 'Eine Kuste fur Ihre Termine wahlen, nicht den „Instagram Strand“. Luxusvillen in Tangalle und Weligama bieten Platz und Surf; Mittelklasse Gastehauser in Mirissa und Unawatuna passen zu den meisten Tour Enden. Ostkuste braucht mehr Planung, belohnt Surfer und Schnorchler in den richtigen Monaten.\n\nPlastikmull und saisonales Seetang gibt es uberall; Erwartungen realistisch halten und auf Wasserqualitat, Zugang und Einbindung in die Route achten.',
      },
    ],
    faq: [
      {
        q: 'Welcher ist der beste Strand in Sri Lanka?',
        a: 'Hangt vom Monat ab West und Sudkuste Dezember to Marz; Ostkuste (Arugam Bay, Trincomalee) April to Oktober. Kein ganzjahriger Sieger.',
      },
      {
        q: 'Ist Schwimmen in Sri Lanka sicher?',
        a: 'Viele Buchten sind in ruhiger Saison bei erlaubter Flagge sicher, aber Stromungen existieren und Rettungsdienst ist begrenzt. Lokale Hinweise befolgen, rote Flagge meiden, nicht allein an abgelegenen Stranden schwimmen.',
      },
      {
        q: 'Wann ist Saison in Arugam Bay?',
        a: 'Etwa April bis Oktober fur Surf und trockenes Ostkustenwetter. Ausserhalb eher Sudkuste oder Trincomalee in der Zwischensaison.',
      },
      {
        q: 'Strande und Kultur in einer Woche?',
        a: 'Jaie meisten privaten Rundreisen enden mit zwei bis drei Kustennachten nach Sigiriya, Kandy und Ella. Eine Kuste pro Reise halt Fahrzeiten realistisch.',
      },
      {
        q: 'Mirissa oder Unawatuna?',
        a: 'Mirissa fur Walsaison und ruhigere Bucht; Unawatuna naher an Galle Fort, geschutzter, aber im Hochsaison Hoch enger. Beide Dezember to Marz.',
      },
    ],
    ctaTitle: 'Beenden Sie Ihre Tour an der richtigen Kuste',
    ctaBody: 'Nennen Sie Reisemonat und Tempoir platzieren Strandnachte dort, wo Wetter und See mitspielen, in einer privaten Chauffeur Route.',
    ctaLabel: 'Strand Finale planen',
    relatedTours: [
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'galleDay', label: 'Galle Tagesausflug' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits Ratgeber' },
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer Ratgeber' },
    ],
  }
};
