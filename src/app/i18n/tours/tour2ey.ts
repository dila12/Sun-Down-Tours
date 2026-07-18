import type { TourContent } from './localize';

/**
 * 2-day Ella + Yala Sri Lanka round tour (id: tour2ey).
 * English is the full BaseTour; locale overlays are authored separately.
 */
export const TOUR2EY: TourContent = {
  en: {
    title: '2 Day Sri Lanka Private Tour – Ella, Kandy & Udawalawa Safari | Airport Drop',
    description:
      'Discover Sri Lanka’s wildlife, scenic hill country and cultural heritage in this 2-day private tour ending at the airport or your hotel.',
    duration: '2 Days',
    persons: 'Private Tour (1-20 Persons)',
    filecode: '2-day-ella-yala-private-tour-sri-lanka',
    overview: `Experience an unforgettable 2-day journey through Sri Lanka’s wildlife, hill country and cultural capital.
  On day one, visit the Udawalawa Elephant Transit Home before heading to Ella to explore Nine Arch Bridge, Little Adam’s Peak, Flying Ravana and Ravana Falls.
  On day two, travel through the scenic hills to Ramboda Falls and Ambuluwawa Tower before discovering the sacred Temple of the Tooth in Kandy and Pinnawala Elephant Orphanage.
  This private tour ends conveniently at the airport or your hotel.`,
    tourType: 'Round Tour',
    itinerary: [
      {
        day: 1,
        title: 'Ella Adventure',
        activities: [
          {
            type: 'Scenic Visit',
            title: { title: 'Nine Arch Bridge', icon: 'fa-train', color: '#8e44ad' },
            description:
              'Explore the iconic Nine Arch Bridge in Ella, surrounded by lush greenery and breathtaking hill country views.',
            image: 'assets/img/2daysTours/5.jpg',
          },
          {
            type: 'Hiking',
            title: { title: 'Little Adam’s Peak', icon: 'fa-hiking', color: '#f39c12' },
            description:
              'Enjoy a short scenic hike to Little Adam’s Peak for panoramic views of Ella Gap and the surrounding tea plantations.',
            image: 'assets/img/2daysTours/9.jpg',
          },
          {
            type: 'Adventure',
            title: { title: 'Flying Ravana Zip Line', icon: 'fa-bolt', color: '#e74c3c' },
            description:
              'Experience thrilling zip-lining at Flying Ravana Adventure Park overlooking the stunning Ella landscape.',
            image: 'assets/img/2daysTours/10.jpg',
          },
          {
            type: 'Waterfall Visit',
            title: { title: 'Ravana Falls', icon: 'fa-water', color: '#2980b9' },
            description: 'Visit the beautiful Ravana Falls, one of Sri Lanka’s most famous waterfalls located near Ella.',
            image: 'assets/img/2daysTours/11.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Oak Ray Ella Gap Hotel', icon: 'fa-hotel', color: '#27ae60' },
            description: 'Accommodation in Oak Ray Ella Gap Hotel or Similar - HB Basis',
            image: 'assets/img/7dayschange/nhm6ktdm7nimqwwrgtbm.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom'],
          },
        ],
      },
      {
        day: 2,
        title: 'Yala Safari',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Yala National Park', icon: 'fa-paw', color: '#2ecc71' },
            description:
              'Yala is home to 44 varieties of mammal and 215 bird species. Among its more famous residents are the world’s biggest concentration of leopards',
            image: 'assets/img/7dayschange/u1iadnsusjf2h8zdhma5.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Ravana Falls', icon: 'fa-water', color: '#3498db' },
            description:
              'Ravana Falls is entrenched in myth and folklore. It is believed that the demon King Ravana, from the epic Ramayan, hid Sita in the cave behind the waterfall after he kidnapped her and brought her back',
            image: 'assets/img/7dayschange/zauxzn86ulp9ddnrzlvw.jpg',
          },
        ],
      },
    ],
    includes: [
      'Air-Conditioned Private Vehicle',
      'English Speaking Professional Driver',
      "Driver's Accommodation & Meals",
      'Pickup & Airport/Hotel Drop Off',
      'Fuel & Parking Fees',
      '24 Hours Service',
      'Unlimited Mileage for the entire tour',
    ],
    excludes: ['Entrance & Activity Fees', 'Food & Drinks', 'Accommodation available on request primarily 4-Star Hotels (equivalent 3.5-Star may be used if selected hotels are unavailable in peak periods)'],
    seoIntro:
      'Combine Ella\'s misty ridges with a Yala leopard safari in just two private days the classic hill-country-to-wildlife pairing without a full-week itinerary. Day one explores Nine Arches Bridge, Little Adam\'s Peak, optional Flying Ravana zip-lining and Ravana Falls, with half-board accommodation near Ella Gap. Day two descends to Yala National Park for a morning 4x4 jeep safari among elephants, crocodiles and with luck leopards, then revisits Ravana Falls from the low-country side before your onward transfer. Sundown Tours aligns safari entry times and train viewpoints while your English-speaking driver navigates the steep Ella–Yala road in a private air-conditioned vehicle with unlimited mileage. Park jeep hire and entrance fees are paid locally so you can extend the safari or add a beach drop on the south coast.',
    highlights: [
      'Ella Nine Arches Bridge, Little Adam\'s Peak and Ravana Falls in one day',
      'Optional Flying Ravana zip-line with panoramic hill-country views',
      'Yala National Park morning jeep safari for elephants and leopard habitat',
      'Half-board Ella Gap hotel night between highlands and wildlife country',
      'Private chauffeur with unlimited mileage and flexible drop-off options',
    ],
    whoIsFor:
      'Ideal for wildlife enthusiasts and photographers who already plan Ella but want a leopard safari without adding four extra travel days. Moderate fitness helps for the Little Adam\'s Peak walk.',
    bestTimeNote:
      'Yala is best February–July when the park is fully open; it closes briefly around September and we suggest Udawalawe instead. Dry-season mornings improve leopard spotting and Nine Arches photography.',
    faq: [
      {
        q: 'Is the Yala safari jeep included in the tour price?',
        a: 'Your private vehicle and driver are included. Yala park entrance and the registered safari jeep are paid locally typically arranged by your driver on the morning of Day 2.',
      },
      {
        q: 'Can we skip the Ella hotel and do both days from the south coast?',
        a: 'Possible but tiring expect very early starts from Mirissa or Galle. We recommend the included Ella overnight so you enjoy the highlands without a midnight departure.',
      },
      {
        q: 'What happens if Yala National Park is closed on our dates?',
        a: 'We substitute Udawalawe or Bundala for strong elephant and bird sightings at no change to the tour structure. Your driver confirms the best park when you book.',
      },
    ],
  },

  de: {
    title: '2 Tage Sri Lanka Privatreise – Ella, Kandy & Udawalawa-Safari | Flughafentransfer',
    description:
      'Entdecken Sie Sri Lankas Tierwelt, malerisches Bergland und kulturelles Erbe auf dieser 2-tägigen Privatreise, die am Flughafen oder in Ihrem Hotel endet.',
    duration: '2 Tage',
    persons: 'Privatreise (1–20 Personen)',
    tourType: 'Rundreise',
    overview:
      'Erleben Sie eine unvergessliche 2-tägige Reise durch Sri Lankas Tierwelt, Bergland und kulturelle Hauptstadt. Am ersten Tag besuchen Sie das Udawalawa Elephant Transit Home, bevor es nach Ella geht, um die Nine Arch Bridge, Little Adam’s Peak, Flying Ravana und die Ravana-Wasserfälle zu entdecken. Am zweiten Tag reisen Sie durch die malerischen Hügel zu den Ramboda-Wasserfällen und dem Ambuluwawa-Turm, bevor Sie den heiligen Zahntempel in Kandy und das Pinnawala Elephant Orphanage besuchen. Diese Privatreise endet bequem am Flughafen oder in Ihrem Hotel.',
    includes: [
      'Klimatisiertes Privatfahrzeug',
      'Englischsprachiger professioneller Fahrer',
      'Unterkunft & Verpflegung des Fahrers',
      'Abholung & Transfer zum Flughafen/Hotel',
      'Kraftstoff & Parkgebühren',
      '24-Stunden-Service',
      'Unbegrenzte Kilometer für die gesamte Tour',
    ],
    excludes: [
      'Eintritts- & Aktivitätsgebühren',
      'Speisen & Getränke',
      'Unterkunft auf Anfrage verfügbar – überwiegend 4-Sterne-Hotels (bei Nichtverfügbarkeit in der Hochsaison ggf. vergleichbare 3,5-Sterne-Hotels)',
    ],
    seoIntro:
      'Verbinden Sie die nebligen Hügel von Ella mit einer Leoparden-Safari in Yala an nur zwei privaten Tagen – die klassische Kombination aus Hügelland und Tierwelt ohne eine ganze Woche Reisezeit. Tag eins erkundet die Nine Arches Bridge, Little Adam\'s Peak, das optionale Flying-Ravana-Zipline-Abenteuer und die Ravana-Wasserfälle, mit Halbpension-Unterkunft nahe dem Ella Gap. Tag zwei führt hinab zum Yala-Nationalpark für eine morgendliche 4x4-Jeep-Safari zwischen Elefanten, Krokodilen und – mit etwas Glück – Leoparden, bevor die Ravana-Wasserfälle noch einmal von der Tiefland-Seite besucht werden, vor Ihrem Weitertransfer. Sundown Tours stimmt Safari-Eintrittszeiten und Zugblicke ab, während Ihr englischsprachiger Fahrer die steile Straße zwischen Ella und Yala in einem privaten klimatisierten Fahrzeug mit unbegrenzter Kilometerleistung navigiert. Die Jeep-Miete im Park und die Eintrittsgebühren werden vor Ort bezahlt, sodass Sie die Safari verlängern oder einen Strandstopp an der Südküste hinzufügen können.',
    highlights: [
      'Nine Arches Bridge, Little Adam\'s Peak und Ravana-Wasserfälle in Ella an einem Tag',
      'Optionales Flying-Ravana-Zipline-Abenteuer mit Panoramablick auf das Hügelland',
      'Morgendliche Jeep-Safari im Yala-Nationalpark auf der Suche nach Elefanten und Leoparden-Habitat',
      'Halbpension-Übernachtung am Ella Gap zwischen Hügelland und Wildnis',
      'Privater Chauffeur mit unbegrenzter Kilometerleistung und flexiblen Transfermöglichkeiten',
    ],
    whoIsFor:
      'Ideal für Tierliebhaber und Fotografen, die Ella bereits einplanen, aber eine Leoparden-Safari ohne vier zusätzliche Reisetage hinzufügen möchten. Moderate Fitness ist für die Wanderung zum Little Adam\'s Peak hilfreich.',
    bestTimeNote:
      'Yala ist von Februar bis Juli am besten, wenn der Park vollständig geöffnet ist; er schließt kurzzeitig um September, dann empfehlen wir Udawalawe. Morgen in der Trockenzeit verbessern die Chancen auf Leopardensichtungen und Fotos an der Nine Arches Bridge.',
    faq: [
      {
        q: 'Ist der Safari-Jeep für Yala im Tourpreis enthalten?',
        a: 'Ihr Privatfahrzeug und Fahrer sind inklusive. Der Parkeintritt für Yala und der registrierte Safari-Jeep werden vor Ort bezahlt – meist von Ihrem Fahrer am Morgen des 2. Tages organisiert.',
      },
      {
        q: 'Können wir das Hotel in Ella auslassen und beide Tage von der Südküste aus unternehmen?',
        a: 'Möglich, aber anstrengend – rechnen Sie mit sehr frühen Starts von Mirissa oder Galle. Wir empfehlen die enthaltene Übernachtung in Ella, damit Sie das Hügelland ohne Mitternachtsabfahrt genießen können.',
      },
      {
        q: 'Was passiert, wenn der Yala-Nationalpark an unseren Reisetagen geschlossen ist?',
        a: 'Wir weichen ohne Änderung des Reiseablaufs auf Udawalawe oder Bundala aus, die gute Elefanten- und Vogelsichtungen bieten. Ihr Fahrer bestätigt bei der Buchung den besten Park.',
      },
    ],
    days: [
      {
        title: 'Ella-Abenteuer',
        activities: [
          {
            type: 'Aussichtsbesuch',
            title: 'Nine Arch Bridge',
            description:
              'Entdecken Sie die legendäre Nine Arch Bridge in Ella, umgeben von üppigem Grün und atemberaubenden Ausblicken auf das Bergland.',
          },
          {
            type: 'Wanderung',
            title: 'Little Adam’s Peak',
            description:
              'Genießen Sie eine kurze, malerische Wanderung zum Little Adam’s Peak mit Panoramablick auf den Ella Gap und die umliegenden Teeplantagen.',
          },
          {
            type: 'Abenteuer',
            title: 'Flying Ravana Zipline',
            description:
              'Erleben Sie spannendes Zip-Lining im Flying Ravana Adventure Park mit Blick auf die atemberaubende Landschaft von Ella.',
          },
          {
            type: 'Wasserfall-Besuch',
            title: 'Ravana-Wasserfall',
            description:
              'Besuchen Sie den wunderschönen Ravana-Wasserfall, einen der berühmtesten Wasserfälle Sri Lankas, in der Nähe von Ella.',
          },
          {
            type: 'Unterkunft',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Unterkunft im Oak Ray Ella Gap Hotel oder ähnlich – auf Halbpension.',
            extra: ['4-Sterne-Hotel (Premium)', 'Eigenes Bad'],
          },
        ],
      },
      {
        title: 'Yala-Safari',
        activities: [
          {
            type: 'Geführte Tour',
            title: 'Yala-Nationalpark',
            description:
              'Yala ist die Heimat von 44 Säugetier- und 215 Vogelarten. Zu den bekanntesten Bewohnern zählt die weltweit größte Leopardenpopulation.',
          },
          {
            type: 'Geführte Tour',
            title: 'Ravana-Wasserfall',
            description:
              'Der Ravana-Wasserfall ist von Mythen und Legenden umrankt. Der Sage nach versteckte der Dämonenkönig Ravana aus dem Epos Ramayana Sita in der Höhle hinter dem Wasserfall, nachdem er sie entführt hatte.',
          },
        ],
      },
    ],
  },

  fr: {
    title: '2 jours Circuit privé au Sri Lanka – Ella, Kandy & Safari à Udawalawa | Dépose à l’aéroport',
    description:
      'Découvrez la faune, les paysages de montagne et le patrimoine culturel du Sri Lanka lors de ce circuit privé de 2 jours se terminant à l’aéroport ou à votre hôtel.',
    duration: '2 jours',
    persons: 'Circuit privé (1 à 20 personnes)',
    tourType: 'Circuit',
    overview:
      'Vivez un voyage inoubliable de 2 jours à travers la faune, les hauts plateaux et la capitale culturelle du Sri Lanka. Le premier jour, visitez l’Udawalawa Elephant Transit Home avant de rejoindre Ella pour découvrir le Nine Arch Bridge, le Little Adam’s Peak, Flying Ravana et les chutes de Ravana. Le deuxième jour, traversez les collines pittoresques jusqu’aux chutes de Ramboda et à la tour d’Ambuluwawa avant de découvrir le sacré Temple de la Dent à Kandy et l’orphelinat d’éléphants de Pinnawala. Ce circuit privé se termine confortablement à l’aéroport ou à votre hôtel.',
    includes: [
      'Véhicule privé climatisé',
      'Chauffeur professionnel anglophone',
      'Hébergement & repas du chauffeur',
      'Prise en charge & dépose à l’aéroport/hôtel',
      'Carburant & frais de parking',
      'Service 24h/24',
      'Kilométrage illimité pour tout le circuit',
    ],
    excludes: [
      'Entrées & frais d’activités',
      'Repas & boissons',
      'Hébergement disponible sur demande principalement des hôtels 4 étoiles (des hôtels équivalents 3,5 étoiles peuvent être utilisés si les hôtels sélectionnés ne sont pas disponibles en haute saison)',
    ],
    seoIntro:
      'Associez les crêtes brumeuses d’Ella à un safari aux léopards à Yala en seulement deux jours privés le duo classique hauts plateaux/faune sans itinéraire d’une semaine complète. Le premier jour explore le pont Nine Arches, Little Adam’s Peak, la tyrolienne optionnelle Flying Ravana et les chutes de Ravana, avec un hébergement en demi-pension près d’Ella Gap. Le second jour descend vers le parc national de Yala pour un safari matinal en jeep 4x4 parmi les éléphants, les crocodiles et, avec un peu de chance, les léopards, avant de revisiter les chutes de Ravana depuis le côté des basses terres avant votre transfert suivant. Sundown Tours coordonne les horaires d’entrée au safari et les points de vue du train, tandis que votre chauffeur anglophone négocie la route escarpée entre Ella et Yala dans un véhicule privé climatisé au kilométrage illimité. La location du jeep du parc et les frais d’entrée sont payés sur place, ce qui vous permet de prolonger le safari ou d’ajouter une escale plage sur la côte sud.',
    highlights: [
      'Pont Nine Arches, Little Adam’s Peak et chutes de Ravana à Ella en une journée',
      'Tyrolienne optionnelle Flying Ravana avec vues panoramiques sur les hauts plateaux',
      'Safari matinal en jeep dans le parc national de Yala à la recherche d’éléphants et d’habitats de léopards',
      'Nuit en demi-pension à Ella Gap entre hauts plateaux et territoire sauvage',
      'Chauffeur privé avec kilométrage illimité et options de dépose flexibles',
    ],
    whoIsFor:
      'Idéal pour les passionnés de faune et les photographes qui prévoient déjà Ella mais souhaitent ajouter un safari aux léopards sans quatre jours de voyage supplémentaires. Une forme physique modérée aide pour la randonnée de Little Adam’s Peak.',
    bestTimeNote:
      'Yala est idéal de février à juillet lorsque le parc est entièrement ouvert ; il ferme brièvement autour de septembre et nous suggérons alors Udawalawe. Les matinées de saison sèche améliorent l’observation des léopards et les photos du pont Nine Arches.',
    faq: [
      {
        q: 'Le jeep de safari à Yala est-il inclus dans le prix du circuit ?',
        a: 'Votre véhicule privé et votre chauffeur sont inclus. L’entrée au parc de Yala et le jeep de safari enregistré sont payés sur place généralement organisés par votre chauffeur le matin du jour 2.',
      },
      {
        q: 'Pouvons-nous éviter l’hôtel à Ella et faire les deux jours depuis la côte sud ?',
        a: 'C’est possible mais fatigant prévoyez des départs très matinaux depuis Mirissa ou Galle. Nous recommandons la nuit incluse à Ella pour profiter des hauts plateaux sans départ à minuit.',
      },
      {
        q: 'Que se passe-t-il si le parc national de Yala est fermé à nos dates ?',
        a: 'Nous le remplaçons par Udawalawe ou Bundala pour de belles observations d’éléphants et d’oiseaux, sans modifier la structure du circuit. Votre chauffeur confirme le meilleur parc lors de la réservation.',
      },
    ],
    days: [
      {
        title: 'Aventure à Ella',
        activities: [
          {
            type: 'Visite panoramique',
            title: 'Nine Arch Bridge',
            description:
              'Découvrez l’emblématique Nine Arch Bridge à Ella, entouré d’une végétation luxuriante et de vues à couper le souffle sur les hauts plateaux.',
          },
          {
            type: 'Randonnée',
            title: 'Little Adam’s Peak',
            description:
              'Profitez d’une courte randonnée panoramique jusqu’au Little Adam’s Peak pour des vues à 360° sur l’Ella Gap et les plantations de thé environnantes.',
          },
          {
            type: 'Aventure',
            title: 'Tyrolienne Flying Ravana',
            description:
              'Vivez des sensations fortes en tyrolienne au parc d’aventure Flying Ravana, surplombant le magnifique paysage d’Ella.',
          },
          {
            type: 'Cascade',
            title: 'Chutes de Ravana',
            description:
              'Visitez les magnifiques chutes de Ravana, l’une des cascades les plus célèbres du Sri Lanka, situées près d’Ella.',
          },
          {
            type: 'Hébergement',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Hébergement au Oak Ray Ella Gap Hotel ou similaire, en demi-pension.',
            extra: ['Hôtel 4 étoiles (premium)', 'Salle de bain privée'],
          },
        ],
      },
      {
        title: 'Safari à Yala',
        activities: [
          {
            type: 'Visite guidée',
            title: 'Parc national de Yala',
            description:
              'Yala abrite 44 espèces de mammifères et 215 espèces d’oiseaux. Parmi ses résidents les plus célèbres figure la plus grande concentration de léopards au monde.',
          },
          {
            type: 'Visite guidée',
            title: 'Chutes de Ravana',
            description:
              'Les chutes de Ravana sont ancrées dans les mythes et légendes. On raconte que le roi démon Ravana, du Ramayana, y aurait caché Sita dans la grotte derrière la cascade après l’avoir enlevée.',
          },
        ],
      },
    ],
  },

  it: {
    title: '2 giorni Tour privato in Sri Lanka – Ella, Kandy e Safari a Udawalawa | Arrivo in aeroporto',
    description:
      'Scopri la fauna selvatica, i paesaggi collinari e il patrimonio culturale dello Sri Lanka in questo tour privato di 2 giorni con arrivo finale in aeroporto o in hotel.',
    duration: '2 giorni',
    persons: 'Tour privato (1-20 persone)',
    tourType: 'Tour completo',
    overview:
      'Vivi un indimenticabile viaggio di 2 giorni tra la fauna selvatica, le colline e la capitale culturale dello Sri Lanka. Il primo giorno visita l’Udawalawa Elephant Transit Home prima di dirigerti a Ella per scoprire il Nine Arch Bridge, il Little Adam’s Peak, Flying Ravana e le cascate di Ravana. Il secondo giorno, attraversa le colline panoramiche fino alle cascate di Ramboda e alla torre di Ambuluwawa, prima di scoprire il sacro Tempio del Dente a Kandy e l’orfanotrofio degli elefanti di Pinnawala. Questo tour privato si conclude comodamente in aeroporto o nel tuo hotel.',
    includes: [
      'Veicolo privato climatizzato',
      'Autista professionista di lingua inglese',
      'Vitto e alloggio dell’autista',
      'Prelievo e riaccompagnamento in aeroporto/hotel',
      'Carburante e parcheggi',
      'Servizio 24 ore',
      'Chilometraggio illimitato per tutto il tour',
    ],
    excludes: [
      'Ingressi e costi delle attività',
      'Cibo e bevande',
      'Alloggio disponibile su richiesta principalmente hotel 4 stelle (in alta stagione, se non disponibili, potranno essere utilizzati hotel equivalenti a 3,5 stelle)',
    ],
    seoIntro:
      'Unite le colline avvolte nella nebbia di Ella a un safari ai leopardi a Yala in soli due giorni privati l’abbinamento classico tra altopiano e fauna selvatica senza un itinerario di un’intera settimana. Il primo giorno esplora il ponte Nine Arches, Little Adam’s Peak, la tirolesa opzionale Flying Ravana e le cascate di Ravana, con alloggio in mezza pensione vicino a Ella Gap. Il secondo giorno scende verso il Parco Nazionale di Yala per un safari matutino in jeep 4x4 tra elefanti, coccodrilli e, con un po’ di fortuna, leopardi, per poi rivisitare le cascate di Ravana dal lato delle pianure prima del vostro trasferimento successivo. Sundown Tours coordina gli orari di ingresso al safari e i punti panoramici del treno, mentre il vostro autista di lingua inglese percorre la strada tortuosa tra Ella e Yala in un veicolo privato climatizzato con chilometraggio illimitato. Il noleggio del jeep del parco e i biglietti d’ingresso si pagano in loco, così potete prolungare il safari o aggiungere una sosta in spiaggia sulla costa meridionale.',
    highlights: [
      'Ponte Nine Arches, Little Adam’s Peak e cascate di Ravana a Ella in un giorno',
      'Tirolesa opzionale Flying Ravana con vista panoramica sull’altopiano',
      'Safari matutino in jeep nel Parco Nazionale di Yala alla ricerca di elefanti e habitat dei leopardi',
      'Notte in mezza pensione a Ella Gap tra altopiano e natura selvaggia',
      'Autista privato con chilometraggio illimitato e opzioni di trasferimento flessibili',
    ],
    whoIsFor:
      'Ideale per gli appassionati di fauna selvatica e i fotografi che già prevedono di visitare Ella ma desiderano aggiungere un safari ai leopardi senza quattro giorni di viaggio extra. Una forma fisica moderata è utile per la camminata a Little Adam’s Peak.',
    bestTimeNote:
      'Yala è al meglio da febbraio a luglio, quando il parco è completamente aperto; chiude brevemente intorno a settembre e in quel caso suggeriamo Udawalawe. Le mattine della stagione secca migliorano l’osservazione dei leopardi e le foto al ponte Nine Arches.',
    faq: [
      {
        q: 'Il jeep per il safari a Yala è incluso nel prezzo del tour?',
        a: 'Il vostro veicolo privato e l’autista sono inclusi. L’ingresso al parco di Yala e il jeep da safari registrato si pagano in loco generalmente organizzati dal vostro autista la mattina del secondo giorno.',
      },
      {
        q: 'Possiamo evitare l’hotel a Ella e fare entrambi i giorni dalla costa meridionale?',
        a: 'È possibile ma faticoso aspettatevi partenze molto anticipate da Mirissa o Galle. Raccomandiamo il pernottamento incluso a Ella per godervi l’altopiano senza una partenza a mezzanotte.',
      },
      {
        q: 'Cosa succede se il Parco Nazionale di Yala è chiuso nelle nostre date?',
        a: 'Lo sostituiamo con Udawalawe o Bundala per ottimi avvistamenti di elefanti e uccelli, senza modificare la struttura del tour. Il vostro autista confermerà il parco migliore al momento della prenotazione.',
      },
    ],
    days: [
      {
        title: 'Avventura a Ella',
        activities: [
          {
            type: 'Visita panoramica',
            title: 'Nine Arch Bridge',
            description:
              'Esplora l’iconico Nine Arch Bridge a Ella, circondato da una vegetazione lussureggiante e vedute mozzafiato sulle colline.',
          },
          {
            type: 'Escursione a piedi',
            title: 'Little Adam’s Peak',
            description:
              'Goditi una breve escursione panoramica al Little Adam’s Peak per vedute a 360° sull’Ella Gap e le piantagioni di tè circostanti.',
          },
          {
            type: 'Avventura',
            title: 'Zip line Flying Ravana',
            description:
              'Vivi l’emozione dello zip line al Flying Ravana Adventure Park, con vista sul magnifico paesaggio di Ella.',
          },
          {
            type: 'Cascata',
            title: 'Cascate di Ravana',
            description:
              'Visita le splendide cascate di Ravana, una delle cascate più famose dello Sri Lanka, situata vicino a Ella.',
          },
          {
            type: 'Sistemazione',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Pernottamento all’Oak Ray Ella Gap Hotel o simile, in mezza pensione.',
            extra: ['Hotel 4 stelle (premium)', 'Bagno privato'],
          },
        ],
      },
      {
        title: 'Safari a Yala',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Parco Nazionale di Yala',
            description:
              'Yala è la casa di 44 specie di mammiferi e 215 specie di uccelli. Tra i suoi abitanti più famosi c’è la più grande concentrazione di leopardi al mondo.',
          },
          {
            type: 'Tour guidato',
            title: 'Cascate di Ravana',
            description:
              'Le cascate di Ravana sono legate a miti e leggende. Si narra che il re demone Ravana, dell’epica Ramayana, abbia nascosto Sita nella grotta dietro la cascata dopo averla rapita.',
          },
        ],
      },
    ],
  },

  es: {
    title: '2 días Tour privado por Sri Lanka – Ella, Kandy y Safari en Udawalawa | Llegada al aeropuerto',
    description:
      'Descubre la fauna, el paisaje montañoso y el patrimonio cultural de Sri Lanka en este tour privado de 2 días que termina en el aeropuerto o en tu hotel.',
    duration: '2 días',
    persons: 'Tour privado (1-20 personas)',
    tourType: 'Circuito',
    overview:
      'Vive un viaje inolvidable de 2 días a través de la fauna, las tierras altas y la capital cultural de Sri Lanka. El primer día, visita el Udawalawa Elephant Transit Home antes de dirigirte a Ella para explorar el Nine Arch Bridge, el Little Adam’s Peak, Flying Ravana y las cascadas de Ravana. El segundo día, viaja por las colinas panorámicas hasta la cascada de Ramboda y la torre de Ambuluwawa antes de descubrir el sagrado Templo del Diente en Kandy y el orfanato de elefantes de Pinnawala. Este tour privado termina cómodamente en el aeropuerto o en tu hotel.',
    includes: [
      'Vehículo privado con aire acondicionado',
      'Chófer profesional de habla inglesa',
      'Alojamiento y comidas del chófer',
      'Recogida y traslado al aeropuerto/hotel',
      'Combustible y aparcamiento',
      'Servicio 24 horas',
      'Kilometraje ilimitado durante todo el tour',
    ],
    excludes: [
      'Entradas y costes de actividades',
      'Comidas y bebidas',
      'Alojamiento disponible bajo petición principalmente hoteles de 4 estrellas (se podrán utilizar hoteles equivalentes de 3,5 estrellas si los hoteles seleccionados no están disponibles en temporada alta)',
    ],
    seoIntro:
      'Combine las colinas neblinosas de Ella con un safari de leopardos en Yala en solo dos días privados: la clásica combinación de tierras altas y fauna sin un itinerario de una semana completa. El primer día explora el puente Nine Arches, Little Adam’s Peak, la tirolina opcional Flying Ravana y las cataratas de Ravana, con alojamiento en media pensión cerca de Ella Gap. El segundo día desciende al Parque Nacional de Yala para un safari matutino en jeep 4x4 entre elefantes, cocodrilos y, con suerte, leopardos, para después volver a visitar las cataratas de Ravana desde el lado de las tierras bajas antes de su traslado posterior. Sundown Tours coordina los horarios de entrada al safari y los miradores del tren, mientras su conductor de habla inglesa recorre la empinada carretera entre Ella y Yala en un vehículo privado con aire acondicionado y kilometraje ilimitado. El alquiler del jeep del parque y las entradas se pagan in situ, de modo que puede ampliar el safari o añadir una parada de playa en la costa sur.',
    highlights: [
      'Puente Nine Arches, Little Adam’s Peak y cataratas de Ravana en Ella en un solo día',
      'Tirolina opcional Flying Ravana con vistas panorámicas de las tierras altas',
      'Safari matutino en jeep por el Parque Nacional de Yala en busca de elefantes y hábitat de leopardos',
      'Noche en media pensión en Ella Gap entre las tierras altas y la naturaleza salvaje',
      'Chófer privado con kilometraje ilimitado y opciones de traslado flexibles',
    ],
    whoIsFor:
      'Ideal para los amantes de la fauna y los fotógrafos que ya tienen planeado Ella pero desean añadir un safari de leopardos sin cuatro días de viaje adicionales. Una forma física moderada ayuda en la caminata a Little Adam’s Peak.',
    bestTimeNote:
      'Yala está en su mejor momento de febrero a julio, cuando el parque está completamente abierto; cierra brevemente alrededor de septiembre y en ese caso sugerimos Udawalawe. Las mañanas de temporada seca mejoran la observación de leopardos y las fotos del puente Nine Arches.',
    faq: [
      {
        q: '¿El jeep del safari en Yala está incluido en el precio del circuito?',
        a: 'Su vehículo privado y conductor están incluidos. La entrada al parque de Yala y el jeep de safari registrado se pagan in situ, normalmente organizados por su conductor la mañana del día 2.',
      },
      {
        q: '¿Podemos evitar el hotel en Ella y hacer ambos días desde la costa sur?',
        a: 'Es posible, pero agotador: espere salidas muy tempranas desde Mirissa o Galle. Recomendamos la noche incluida en Ella para disfrutar de las tierras altas sin una salida a medianoche.',
      },
      {
        q: '¿Qué ocurre si el Parque Nacional de Yala está cerrado en nuestras fechas?',
        a: 'Lo sustituimos por Udawalawe o Bundala, con excelentes avistamientos de elefantes y aves, sin cambiar la estructura del circuito. Su conductor confirmará el mejor parque al reservar.',
      },
    ],
    days: [
      {
        title: 'Aventura en Ella',
        activities: [
          {
            type: 'Visita panorámica',
            title: 'Nine Arch Bridge',
            description:
              'Explora el icónico Nine Arch Bridge en Ella, rodeado de exuberante vegetación y vistas impresionantes de las tierras altas.',
          },
          {
            type: 'Senderismo',
            title: 'Little Adam’s Peak',
            description:
              'Disfruta de una breve caminata panorámica hasta el Little Adam’s Peak con vistas de 360° del Ella Gap y las plantaciones de té circundantes.',
          },
          {
            type: 'Aventura',
            title: 'Tirolina Flying Ravana',
            description:
              'Vive la emoción de la tirolina en el Flying Ravana Adventure Park con vistas al espectacular paisaje de Ella.',
          },
          {
            type: 'Cascada',
            title: 'Cascada de Ravana',
            description:
              'Visita la hermosa cascada de Ravana, una de las cascadas más famosas de Sri Lanka, cerca de Ella.',
          },
          {
            type: 'Alojamiento',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Alojamiento en el Oak Ray Ella Gap Hotel o similar, en media pensión.',
            extra: ['Hotel 4 estrellas (premium)', 'Baño privado'],
          },
        ],
      },
      {
        title: 'Safari en Yala',
        activities: [
          {
            type: 'Tour guiado',
            title: 'Parque Nacional de Yala',
            description:
              'Yala alberga 44 especies de mamíferos y 215 especies de aves. Entre sus residentes más famosos se encuentra la mayor concentración de leopardos del mundo.',
          },
          {
            type: 'Tour guiado',
            title: 'Cascada de Ravana',
            description:
              'La cascada de Ravana está ligada a mitos y leyendas. Se dice que el rey demonio Ravana, del Ramayana, escondió a Sita en la cueva detrás de la cascada tras secuestrarla.',
          },
        ],
      },
    ],
  },

  pl: {
    title: '2 dni Prywatna wycieczka po Sri Lance – Ella, Kandy i safari w Udawalawa | Dowóz na lotnisko',
    description:
      'Odkryj dziką przyrodę, malownicze wzgórza i dziedzictwo kulturowe Sri Lanki podczas tej 2-dniowej prywatnej wycieczki zakończonej na lotnisku lub w hotelu.',
    duration: '2 dni',
    persons: 'Prywatna wycieczka (1-20 osób)',
    tourType: 'Wycieczka objazdowa',
    overview:
      'Przeżyj niezapomnianą 2-dniową podróż przez dziką przyrodę, wzgórza i kulturalną stolicę Sri Lanki. Pierwszego dnia odwiedzisz Udawalawa Elephant Transit Home, a następnie wyruszysz do Elli, by zobaczyć Nine Arch Bridge, Little Adam’s Peak, Flying Ravana i wodospady Ravana. Drugiego dnia przejedziesz przez malownicze wzgórza do wodospadu Ramboda i wieży Ambuluwawa, a następnie odwiedzisz świętą Świątynię Zęba Buddy w Kandy i sierociniec słoni w Pinnawali. Ta prywatna wycieczka zakończy się wygodnie na lotnisku lub w hotelu.',
    includes: [
      'Klimatyzowany prywatny pojazd',
      'Profesjonalny kierowca mówiący po angielsku',
      'Zakwaterowanie i wyżywienie kierowcy',
      'Odbiór i odwóz na lotnisko/do hotelu',
      'Paliwo i opłaty parkingowe',
      'Obsługa 24 godziny',
      'Nielimitowany kilometraż na całą wycieczkę',
    ],
    excludes: [
      'Bilety wstępu i opłaty za atrakcje',
      'Jedzenie i napoje',
      'Zakwaterowanie dostępne na życzenie – głównie hotele 4-gwiazdkowe (w sezonie szczytowym, jeśli wybrane hotele są niedostępne, mogą zostać zastąpione równoważnymi hotelami 3,5-gwiazdkowymi)',
    ],
    seoIntro:
      'Połącz mgliste wzniesienia Elli z safari na lamparty w Yali w ciągu tylko dwóch prywatnych dni – klasyczne połączenie wyżyn i dzikiej przyrody bez tygodniowego planu podróży. Pierwszy dzień to zwiedzanie mostu Nine Arches, Little Adam’s Peak, opcjonalna tyrolka Flying Ravana i wodospady Ravana, z noclegiem w formule half board blisko Ella Gap. Drugi dzień prowadzi do Parku Narodowego Yala na poranne safari jeepem 4x4 wśród słoni, krokodyli i, z odpowiednią dozą szczęścia, lampartów, a następnie ponowną wizytę przy wodospadach Ravana z niziny, przed dalszym transferem. Sundown Tours koordynuje godziny wejścia na safari i punkty widokowe pociągu, podczas gdy anglojęzyczny kierowca prowadzi po krętej drodze między Ellą i Yalą w prywatnym klimatyzowanym pojeździe z nielimitowanym przebiegiem. Wynajem jeepa w parku i opłaty za wstęp płaci się na miejscu, dzięki czemu można wydłużyć safari lub dodać przystanek na plaży na południowym wybrzeżu.',
    highlights: [
      'Most Nine Arches, Little Adam’s Peak i wodospady Ravana w Elli w jeden dzień',
      'Opcjonalna tyrolka Flying Ravana z panoramicznymi widokami na wyżyny',
      'Poranne safari jeepem w Parku Narodowym Yala w poszukiwaniu słoni i siedlisk lampartów',
      'Nocleg w formule half board w Ella Gap między wyżynami a dziką przyrodą',
      'Prywatny kierowca z nielimitowanym przebiegiem i elastycznymi opcjami transferu',
    ],
    whoIsFor:
      'Idealna dla entuzjastów dzikiej przyrody i fotografów, którzy już planują Ellę, ale chcą dodać safari na lamparty bez czterech dodatkowych dni podróży. Umiarkowana kondycja pomaga przy wędrówce na Little Adam’s Peak.',
    bestTimeNote:
      'Yala jest najlepsza od lutego do lipca, gdy park jest w pełni otwarty; zamyka się na krótko wokół września, a w takim przypadku proponujemy Udawalawe. Poranki w sezonie suchym poprawiają szanse na zobaczenie lampartów i zdjęcia mostu Nine Arches.',
    faq: [
      {
        q: 'Czy jeep na safari w Yali jest wliczony w cenę wycieczki?',
        a: 'Państwa prywatny pojazd i kierowca są wliczeni. Wstęp do parku Yala i zarejestrowany jeep na safari płaci się na miejscu – zwykle organizowane przez kierowcę rano 2. dnia.',
      },
      {
        q: 'Czy możemy pominąć hotel w Elli i zrobić obie części z południowego wybrzeża?',
        a: 'To możliwe, ale wyczerpujące – należy liczyć się z bardzo wczesnymi wyjazdami z Mirissy lub Galle. Zalecamy wliczony nocleg w Elli, aby cieszyć się wyżynami bez wyjazdu o północy.',
      },
      {
        q: 'Co się stanie, jeśli Park Narodowy Yala będzie zamknięty w naszych terminach?',
        a: 'Zastępujemy go Udawalawe lub Bundala, gdzie można dobrze zobaczyć słonie i ptaki, bez zmiany struktury wycieczki. Kierowca potwierdzi najlepszy park przy rezerwacji.',
      },
    ],
    days: [
      {
        title: 'Przygoda w Elli',
        activities: [
          {
            type: 'Wizyta widokowa',
            title: 'Nine Arch Bridge',
            description:
              'Odkryj słynny most Nine Arch w Elli, otoczony bujną zielenią i zapierającymi dech widokami na wzgórza.',
          },
          {
            type: 'Wędrówka',
            title: 'Little Adam’s Peak',
            description:
              'Wybierz się na krótką, widokową wędrówkę na Little Adam’s Peak, skąd zobaczysz panoramę Ella Gap i okolicznych plantacji herbaty.',
          },
          {
            type: 'Przygoda',
            title: 'Zjazd na linie Flying Ravana',
            description:
              'Poczuj emocje zjazdu na linie w Flying Ravana Adventure Park z widokiem na piękny krajobraz Elli.',
          },
          {
            type: 'Wodospad',
            title: 'Wodospad Ravana',
            description:
              'Odwiedź piękny wodospad Ravana, jeden z najsłynniejszych wodospadów Sri Lanki, położony niedaleko Elli.',
          },
          {
            type: 'Nocleg',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Nocleg w Oak Ray Ella Gap Hotel lub podobnym, w opcji HB.',
            extra: ['Hotel 4 gwiazdki (premium)', 'Prywatna łazienka'],
          },
        ],
      },
      {
        title: 'Safari w Yali',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Park Narodowy Yala',
            description:
              'Yala jest domem dla 44 gatunków ssaków i 215 gatunków ptaków. Wśród jej najbardziej znanych mieszkańców jest największe skupienie lampartów na świecie.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Wodospad Ravana',
            description:
              'Wodospad Ravana jest owiany mitami i legendami. Wierzy się, że demoniczny król Ravana z epopei Ramajana ukrył Sitę w jaskini za wodospadem po jej uprowadzeniu.',
          },
        ],
      },
    ],
  },

  ru: {
    title: '2 дня Частный тур по Шри-Ланке – Элла, Канди и сафари в Удавалаве | Трансфер в аэропорт',
    description:
      'Откройте для себя дикую природу, живописную горную местность и культурное наследие Шри-Ланки в этом частном туре на 2 дня, завершающемся в аэропорту или в вашем отеле.',
    duration: '2 дня',
    persons: 'Частный тур (1-20 человек)',
    tourType: 'Обзорный тур',
    overview:
      'Совершите незабываемое 2-дневное путешествие по дикой природе, горной местности и культурной столице Шри-Ланки. В первый день вы посетите Udawalawa Elephant Transit Home перед тем, как отправиться в Эллу, чтобы увидеть Nine Arch Bridge, Little Adam’s Peak, Flying Ravana и водопады Равана. На второй день вы проедете через живописные холмы к водопаду Рамбода и башне Амбулувава, а затем посетите священный Храм Зуба Будды в Канди и приют слонов Пиннавела. Этот частный тур удобно завершается в аэропорту или в вашем отеле.',
    includes: [
      'Частный автомобиль с кондиционером',
      'Профессиональный англоговорящий водитель',
      'Проживание и питание водителя',
      'Встреча и трансфер в аэропорт/отель',
      'Топливо и парковка',
      'Обслуживание 24 часа',
      'Неограниченный пробег на весь тур',
    ],
    excludes: [
      'Входные билеты и оплата активностей',
      'Еда и напитки',
      'Проживание доступно по запросу преимущественно отели 4★ (в высокий сезон, если выбранные отели недоступны, может использоваться эквивалентный отель 3,5★)',
    ],
    seoIntro:
      'Совместите туманные гряды Эллы с сафари на леопардов в Яле всего за два частных дня классическое сочетание горной страны и дикой природы без недельного маршрута. Первый день включает мост Nine Arches, Little Adam’s Peak, опциональный зип-лайн Flying Ravana и водопады Равана, с проживанием на полупансионе рядом с Ella Gap. Второй день ведёт в национальный парк Яла для утреннего джип-сафари 4x4 среди слонов, крокодилов и, при удаче, леопардов, а затем повторное посещение водопадов Равана со стороны низменности перед вашим дальнейшим трансфером. Sundown Tours согласовывает время входа на сафари и смотровые точки поезда, пока ваш англоговорящий водитель ведёт машину по крутой дороге между Эллой и Ялой в частном кондиционированном автомобиле с неограниченным пробегом. Аренда джипа в парке и входные билеты оплачиваются на месте, что позволяет продлить сафари или добавить остановку на пляже южного побережья.',
    highlights: [
      'Мост Nine Arches, Little Adam’s Peak и водопады Равана в Элле за один день',
      'Опциональный зип-лайн Flying Ravana с панорамными видами горной страны',
      'Утреннее джип-сафари в национальном парке Яла в поисках слонов и мест обитания леопардов',
      'Ночь на полупансионе в Ella Gap между горной страной и дикой природой',
      'Частный шофёр с неограниченным пробегом и гибкими вариантами трансфера',
    ],
    whoIsFor:
      'Идеально для любителей дикой природы и фотографов, которые уже планируют посетить Эллу, но хотят добавить сафари на леопардов без четырёх дополнительных дней путешествия. Умеренная физическая форма пригодится для прогулки на Little Adam’s Peak.',
    bestTimeNote:
      'Яла лучше всего с февраля по июль, когда парк полностью открыт; он закрывается на короткое время около сентября, и в этом случае мы предлагаем Удавалаве. Утра в сухой сезон улучшают шансы увидеть леопардов и сделать фото у моста Nine Arches.',
    faq: [
      {
        q: 'Включён ли джип для сафари в Яле в стоимость тура?',
        a: 'Ваш частный автомобиль и водитель включены. Входной билет в парк Яла и зарегистрированный сафари-джип оплачиваются на месте обычно организуются вашим водителем утром 2-го дня.',
      },
      {
        q: 'Можем ли мы пропустить отель в Элле и провести оба дня с южного побережья?',
        a: 'Это возможно, но утомительно ожидайте очень раннего выезда из Мириссы или Галле. Мы рекомендуем включённую ночёвку в Элле, чтобы вы наслаждались горной страной без выезда в полночь.',
      },
      {
        q: 'Что произойдёт, если национальный парк Яла закрыт на наши даты?',
        a: 'Мы заменяем его на Удавалаве или Бундала с хорошими шансами увидеть слонов и птиц, без изменения структуры тура. Ваш водитель подтвердит лучший парк при бронировании.',
      },
    ],
    days: [
      {
        title: 'Приключение в Элле',
        activities: [
          {
            type: 'Живописная остановка',
            title: 'Nine Arch Bridge',
            description:
              'Исследуйте знаменитый мост Nine Arch в Элле, окружённый пышной зеленью и захватывающими видами на горную местность.',
          },
          {
            type: 'Пеший поход',
            title: 'Little Adam’s Peak',
            description:
              'Прогуляйтесь в короткий живописный поход к Little Adam’s Peak ради панорамных видов на Ella Gap и окружающие чайные плантации.',
          },
          {
            type: 'Приключение',
            title: 'Zip-line Flying Ravana',
            description:
              'Испытайте азарт зип-лайна в парке приключений Flying Ravana с видом на потрясающий ландшафт Эллы.',
          },
          {
            type: 'Водопад',
            title: 'Водопад Равана',
            description:
              'Посетите прекрасный водопад Равана один из самых знаменитых водопадов Шри-Ланки, расположенный рядом с Эллой.',
          },
          {
            type: 'Проживание',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Проживание в Oak Ray Ella Gap Hotel или подобном отеле на полупансионе.',
            extra: ['Отель 4 звезды (премиум)', 'Собственная ванная комната'],
          },
        ],
      },
      {
        title: 'Сафари в Яле',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Национальный парк Яла',
            description:
              'В парке Яла обитают 44 вида млекопитающих и 215 видов птиц. Среди самых известных обитателей самая большая в мире концентрация леопардов.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Водопад Равана',
            description:
              'Водопад Равана окружён мифами и легендами. Считается, что демонический царь Равана из эпоса «Рамаяна» прятал Ситу в пещере за водопадом после того, как похитил её.',
          },
        ],
      },
    ],
  },
};
