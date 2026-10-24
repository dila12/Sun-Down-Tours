import type { TourContent } from './localize';
import { PACKAGE_EXCLUDES, PACKAGE_INCLUDES } from './package-inclusions';

/**
 * 2 day Ella + Yala Sri Lanka round tour (id: tour2ey).
 * English is the full BaseTour; locale overlays are authored separately.
 */
export const TOUR2EY: TourContent = {
  en: {
    title: '2 Day Sri Lanka Private Tour: Ella and Yala Safari | Airport Drop',
    description:
      'Discover Sri Lanka’s wildlife and scenic hill country on this 2 day private tour ending at the airport or your hotel.',
    duration: '2 Days',
    persons: 'Private Tour (1-20 Persons)',
    filecode: '2-day-ella-yala-private-tour-sri-lanka',
    overview: `Experience a 2 day journey through Ella’s hill country and Yala’s wildlife.
  On day one, explore the Nine Arch Bridge, Little Adam’s Peak, Flying Ravana and Ravana Falls, and stay near Ella Gap.
  On day two, take a morning jeep safari in Yala National Park, then visit Ravana Falls again before your onward transfer.
  This private tour ends at the airport or your hotel.`,
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
              'Experience thrilling zip lining at Flying Ravana Adventure Park overlooking the stunning Ella landscape.',
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
            description: 'Accommodation in Oak Ray Ella Gap Hotel or Similar HB Basis',
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
    includes: PACKAGE_INCLUDES.en,
    excludes: PACKAGE_EXCLUDES.en,
    seoIntro:
      'Combine Ella\'s misty ridges with a Yala leopard safari in just two private days the classic hill country to wildlife pairing without a full week itinerary. Day one explores Nine Arches Bridge, Little Adam\'s Peak, optional Flying Ravana zip lining and Ravana Falls, with half  board accommodation near Ella Gap. Day two descends to Yala National Park for a morning 4x4 jeep safari among elephants, crocodiles and with luck leopards, then revisits Ravana Falls from the low country side before your onward transfer. Sundown Tours aligns safari entry times and train viewpoints while your English speaking driver navigates the steep Ella to Yala road in a private air conditioned vehicle with unlimited mileage. Park jeep hire and entrance fees are paid locally so you can extend the safari or add a beach drop on the south coast.',
    highlights: [
      'Ella Nine Arches Bridge, Little Adam\'s Peak and Ravana Falls in one day',
      'Optional Flying Ravana zip line with panoramic hill country views',
      'Yala National Park morning jeep safari for elephants and leopard habitat',
      'half board Ella Gap hotel night between highlands and wildlife country',
      'Private chauffeur with unlimited mileage and flexible drop off options',
    ],
    whoIsFor:
      'Ideal for wildlife enthusiasts and photographers who already plan Ella but want a leopard safari without adding four extra travel days. Moderate fitness helps for the Little Adam\'s Peak walk.',
    bestTimeNote:
      'Yala is best February to July when the park is fully open; it closes briefly around September and we suggest Udawalawe instead. Dry season mornings improve leopard spotting and Nine Arches photography.',
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
    title: '2 Tage Sri Lanka Privatreise: Ella und Yala Safari | Flughafentransfer',
    description:
      'Entdecken Sie Sri Lankas Tierwelt und malerisches Bergland auf dieser 2 tagigen Privatreise, die am Flughafen oder in Ihrem Hotel endet.',
    duration: '2 Tage',
    persons: 'Privatreise (1 to 20 Personen)',
    tourType: 'Rundreise',
    overview:
      'Erleben Sie eine 2 tagige Reise durch Ellas Bergland und die Tierwelt von Yala. Am ersten Tag entdecken Sie die Nine Arch Bridge, Little Adam’s Peak, Flying Ravana und die Ravana Wasserfalle und ubernachten nahe dem Ella Gap. Am zweiten Tag folgt eine morgendliche Jeep Safari im Yala Nationalpark, danach noch einmal die Ravana Wasserfalle vor Ihrem Weitertransfer. Diese Privatreise endet am Flughafen oder in Ihrem Hotel.',
    includes: PACKAGE_INCLUDES.de,
    excludes: PACKAGE_EXCLUDES.de,
    seoIntro:
      'Verbinden Sie die nebligen Hugel von Ella mit einer Leoparden Safari in Yala an nur zwei privaten Tagen  die klassische Kombination aus Hugelland und Tierwelt ohne eine ganze Woche Reisezeit. Tag eins erkundet die Nine Arches Bridge, Little Adam\'s Peak, das optionale Flying Ravana Zipline Abenteuer und die Ravana Wasserfalle, mit Halbpension Unterkunft nahe dem Ella Gap. Tag zwei fuhrt hinab zum Yala Nationalpark fur eine morgendliche 4x4 Jeep Safari zwischen Elefanten, Krokodilen und  mit etwas Gluck  Leoparden, bevor die Ravana Wasserfalle noch einmal von der Tiefland Seite besucht werden, vor Ihrem Weitertransfer. Sundown Tours stimmt Safari Eintrittszeiten und Zugblicke ab, wahrend Ihr englischsprachiger Fahrer die steile Strasse zwischen Ella und Yala in einem privaten klimatisierten Fahrzeug mit unbegrenzter Kilometerleistung navigiert. Die Jeep Miete im Park und die Eintrittsgebuhren werden vor Ort bezahlt, sodass Sie die Safari verlangern oder einen Strandstopp an der Sudkuste hinzufugen konnen.',
    highlights: [
      'Nine Arches Bridge, Little Adam\'s Peak und Ravana Wasserfalle in Ella an einem Tag',
      'Optionales Flying Ravana Zipline Abenteuer mit Panoramablick auf das Hugelland',
      'Morgendliche Jeep Safari im Yala Nationalpark auf der Suche nach Elefanten und Leoparden Habitat',
      'Halbpension Ubernachtung am Ella Gap zwischen Hugelland und Wildnis',
      'Privater Chauffeur mit unbegrenzter Kilometerleistung und flexiblen Transfermoglichkeiten',
    ],
    whoIsFor:
      'Ideal fur Tierliebhaber und Fotografen, die Ella bereits einplanen, aber eine Leoparden Safari ohne vier zusatzliche Reisetage hinzufugen mochten. Moderate Fitness ist fur die Wanderung zum Little Adam\'s Peak hilfreich.',
    bestTimeNote:
      'Yala ist von Februar bis Juli am besten, wenn der Park vollstandig geoffnet ist; er schliesst kurzzeitig um September, dann empfehlen wir Udawalawe. Morgen in der Trockenzeit verbessern die Chancen auf Leopardensichtungen und Fotos an der Nine Arches Bridge.',
    faq: [
      {
        q: 'Ist der Safari Jeep fur Yala im Tourpreis enthalten?',
        a: 'Ihr Privatfahrzeug und Fahrer sind inklusive. Der Parkeintritt fur Yala und der registrierte Safari Jeep werden vor Ort bezahlt  meist von Ihrem Fahrer am Morgen des 2. Tages organisiert.',
      },
      {
        q: 'Konnen wir das Hotel in Ella auslassen und beide Tage von der Sudkuste aus unternehmen?',
        a: 'Moglich, aber anstrengend  rechnen Sie mit sehr fruhen Starts von Mirissa oder Galle. Wir empfehlen die enthaltene Ubernachtung in Ella, damit Sie das Hugelland ohne Mitternachtsabfahrt geniessen konnen.',
      },
      {
        q: 'Was passiert, wenn der Yala Nationalpark an unseren Reisetagen geschlossen ist?',
        a: 'Wir weichen ohne Anderung des Reiseablaufs auf Udawalawe oder Bundala aus, die gute Elefanten und Vogelsichtungen bieten. Ihr Fahrer bestatigt bei der Buchung den besten Park.',
      },
    ],
    days: [
      {
        title: 'Ella Abenteuer',
        activities: [
          {
            type: 'Aussichtsbesuch',
            title: 'Nine Arch Bridge',
            description:
              'Entdecken Sie die legendare Nine Arch Bridge in Ella, umgeben von uppigem Grun und atemberaubenden Ausblicken auf das Bergland.',
          },
          {
            type: 'Wanderung',
            title: 'Little Adam’s Peak',
            description:
              'Geniessen Sie eine kurze, malerische Wanderung zum Little Adam’s Peak mit Panoramablick auf den Ella Gap und die umliegenden Teeplantagen.',
          },
          {
            type: 'Abenteuer',
            title: 'Flying Ravana Zipline',
            description:
              'Erleben Sie spannendes Zip Lining im Flying Ravana Adventure Park mit Blick auf die atemberaubende Landschaft von Ella.',
          },
          {
            type: 'Wasserfall Besuch',
            title: 'Ravana Wasserfall',
            description:
              'Besuchen Sie den wunderschonen Ravana Wasserfall, einen der beruhmtesten Wasserfalle Sri Lankas, in der Nahe von Ella.',
          },
          {
            type: 'Unterkunft',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Unterkunft im Oak Ray Ella Gap Hotel oder ahnlich  auf Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad'],
          },
        ],
      },
      {
        title: 'Yala Safari',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Yala Nationalpark',
            description:
              'Yala ist die Heimat von 44 Saugetier und 215 Vogelarten. Zu den bekanntesten Bewohnern zahlt die weltweit grosste Leopardenpopulation.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Ravana Wasserfall',
            description:
              'Der Ravana Wasserfall ist von Mythen und Legenden umrankt. Der Sage nach versteckte der Damonenkonig Ravana aus dem Epos Ramayana Sita in der Hohle hinter dem Wasserfall, nachdem er sie entfuhrt hatte.',
          },
        ],
      },
    ],
  },

  fr: {
    title: '2 jours Circuit prive au Sri Lanka: Ella et safari a Yala | Depose a l’aeroport',
    description:
      'Decouvrez la faune et les paysages de montagne du Sri Lanka lors de ce circuit prive de 2 jours se terminant a l’aeroport ou a votre hotel.',
    duration: '2 jours',
    persons: 'Circuit prive (1 a 20 personnes)',
    tourType: 'Circuit',
    overview:
      'Vivez un voyage de 2 jours entre les hautes terres d’Ella et la faune de Yala. Le premier jour, decouvrez le Nine Arch Bridge, le Little Adam’s Peak, Flying Ravana et les chutes de Ravana, avec une nuit pres d’Ella Gap. Le deuxieme jour, partez en safari matinal dans le parc national de Yala, puis revoyez les chutes de Ravana avant votre transfert. Ce circuit prive se termine a l’aeroport ou a votre hotel.',
    includes: PACKAGE_INCLUDES.fr,
    excludes: PACKAGE_EXCLUDES.fr,
    seoIntro:
      'Associez les cretes brumeuses d’Ella a un safari aux leopards a Yala en seulement deux jours prives le duo classique hauts plateaux/faune sans itineraire d’une semaine complete. Le premier jour explore le pont Nine Arches, Little Adam’s Peak, la tyrolienne optionnelle Flying Ravana et les chutes de Ravana, avec un hebergement en demi pension pres d’Ella Gap. Le second jour descend vers le parc national de Yala pour un safari matinal en jeep 4x4 parmi les elephants, les crocodiles et, avec un peu de chance, les leopards, avant de revisiter les chutes de Ravana depuis le cote des basses terres avant votre transfert suivant. Sundown Tours coordonne les horaires d’entree au safari et les points de vue du train, tandis que votre chauffeur anglophone negocie la route escarpee entre Ella et Yala dans un vehicule prive climatise au kilometrage illimite. La location du jeep du parc et les frais d’entree sont payes sur place, ce qui vous permet de prolonger le safari ou d’ajouter une escale plage sur la cote sud.',
    highlights: [
      'Pont Nine Arches, Little Adam’s Peak et chutes de Ravana a Ella en une journee',
      'Tyrolienne optionnelle Flying Ravana avec vues panoramiques sur les hauts plateaux',
      'Safari matinal en jeep dans le parc national de Yala a la recherche d’elephants et d’habitats de leopards',
      'Nuit en demi pension a Ella Gap entre hauts plateaux et territoire sauvage',
      'Chauffeur prive avec kilometrage illimite et options de depose flexibles',
    ],
    whoIsFor:
      'Ideal pour les passionnes de faune et les photographes qui prevoient deja Ella mais souhaitent ajouter un safari aux leopards sans quatre jours de voyage supplementaires. Une forme physique moderee aide pour la randonnee de Little Adam’s Peak.',
    bestTimeNote:
      'Yala est ideal de fevrier a juillet lorsque le parc est entierement ouvert ; il ferme brievement autour de septembre et nous suggerons alors Udawalawe. Les matinees de saison seche ameliorent l’observation des leopards et les photos du pont Nine Arches.',
    faq: [
      {
        q: 'Le jeep de safari a Yala est il inclus dans le prix du circuit ?',
        a: 'Votre vehicule prive et votre chauffeur sont inclus. L’entree au parc de Yala et le jeep de safari enregistre sont payes sur place generalement organises par votre chauffeur le matin du jour 2.',
      },
      {
        q: 'Pouvons nous eviter l’hotel a Ella et faire les deux jours depuis la cote sud ?',
        a: 'C’est possible mais fatigant prevoyez des departs tres matinaux depuis Mirissa ou Galle. Nous recommandons la nuit incluse a Ella pour profiter des hauts plateaux sans depart a minuit.',
      },
      {
        q: 'Que se passe t il si le parc national de Yala est ferme a nos dates ?',
        a: 'Nous le remplacons par Udawalawe ou Bundala pour de belles observations d’elephants et d’oiseaux, sans modifier la structure du circuit. Votre chauffeur confirme le meilleur parc lors de la reservation.',
      },
    ],
    days: [
      {
        title: 'Aventure a Ella',
        activities: [
          {
            type: 'Visite panoramique',
            title: 'Nine Arch Bridge',
            description:
              'Decouvrez l’emblematique Nine Arch Bridge a Ella, entoure d’une vegetation luxuriante et de vues a couper le souffle sur les hauts plateaux.',
          },
          {
            type: 'Randonnee',
            title: 'Little Adam’s Peak',
            description:
              'Profitez d’une courte randonnee panoramique jusqu’au Little Adam’s Peak pour des vues a 360° sur l’Ella Gap et les plantations de the environnantes.',
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
              'Visitez les magnifiques chutes de Ravana, l’une des cascades les plus celebres du Sri Lanka, situees pres d’Ella.',
          },
          {
            type: 'Hebergement',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Hebergement au Oak Ray Ella Gap Hotel ou similaire, en demi pension.',
            extra: ['Hotel 4 etoiles (premium)', 'Salle de bain privee'],
          },
        ],
      },
      {
        title: 'Safari a Yala',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Parc national de Yala',
            description:
              'Yala abrite 44 especes de mammiferes et 215 especes d’oiseaux. Parmi ses residents les plus celebres figure la plus grande concentration de leopards au monde.',
          },
          {
            type: 'Visite guidee',
            title: 'Chutes de Ravana',
            description:
              'Les chutes de Ravana sont ancrees dans les mythes et legendes. On raconte que le roi demon Ravana, du Ramayana, y aurait cache Sita dans la grotte derriere la cascade apres l’avoir enlevee.',
          },
        ],
      },
    ],
  },

  it: {
    title: '2 giorni Tour privato in Sri Lanka: Ella e safari a Yala | Arrivo in aeroporto',
    description:
      'Scopri la fauna selvatica e i paesaggi collinari dello Sri Lanka in questo tour privato di 2 giorni con arrivo finale in aeroporto o in hotel.',
    duration: '2 giorni',
    persons: 'Tour privato (1-20 persone)',
    tourType: 'Tour completo',
    overview:
      'Vivi un viaggio di 2 giorni tra le colline di Ella e la fauna di Yala. Il primo giorno scopri il Nine Arch Bridge, il Little Adam’s Peak, Flying Ravana e le cascate di Ravana, con pernottamento vicino a Ella Gap. Il secondo giorno fai un safari al mattino nel Parco Nazionale di Yala e rivedi le cascate di Ravana prima del trasferimento. Questo tour privato si conclude in aeroporto o nel tuo hotel.',
    includes: PACKAGE_INCLUDES.it,
    excludes: PACKAGE_EXCLUDES.it,
    seoIntro:
      'Unite le colline avvolte nella nebbia di Ella a un safari ai leopardi a Yala in soli due giorni privati l’abbinamento classico tra altopiano e fauna selvatica senza un itinerario di un’intera settimana. Il primo giorno esplora il ponte Nine Arches, Little Adam’s Peak, la tirolesa opzionale Flying Ravana e le cascate di Ravana, con alloggio in mezza pensione vicino a Ella Gap. Il secondo giorno scende verso il Parco Nazionale di Yala per un safari matutino in jeep 4x4 tra elefanti, coccodrilli e, con un po’ di fortuna, leopardi, per poi rivisitare le cascate di Ravana dal lato delle pianure prima del vostro trasferimento successivo. Sundown Tours coordina gli orari di ingresso al safari e i punti panoramici del treno, mentre il vostro autista di lingua inglese percorre la strada tortuosa tra Ella e Yala in un veicolo privato climatizzato con chilometraggio illimitato. Il noleggio del jeep del parco e i biglietti d’ingresso si pagano in loco, cosi potete prolungare il safari o aggiungere una sosta in spiaggia sulla costa meridionale.',
    highlights: [
      'Ponte Nine Arches, Little Adam’s Peak e cascate di Ravana a Ella in un giorno',
      'Tirolesa opzionale Flying Ravana con vista panoramica sull’altopiano',
      'Safari matutino in jeep nel Parco Nazionale di Yala alla ricerca di elefanti e habitat dei leopardi',
      'Notte in mezza pensione a Ella Gap tra altopiano e natura selvaggia',
      'Autista privato con chilometraggio illimitato e opzioni di trasferimento flessibili',
    ],
    whoIsFor:
      'Ideale per gli appassionati di fauna selvatica e i fotografi che gia prevedono di visitare Ella ma desiderano aggiungere un safari ai leopardi senza quattro giorni di viaggio extra. Una forma fisica moderata e utile per la camminata a Little Adam’s Peak.',
    bestTimeNote:
      'Yala e al meglio da febbraio a luglio, quando il parco e completamente aperto; chiude brevemente intorno a settembre e in quel caso suggeriamo Udawalawe. Le mattine della stagione secca migliorano l’osservazione dei leopardi e le foto al ponte Nine Arches.',
    faq: [
      {
        q: 'Il jeep per il safari a Yala e incluso nel prezzo del tour?',
        a: 'Il vostro veicolo privato e l’autista sono inclusi. L’ingresso al parco di Yala e il jeep da safari registrato si pagano in loco generalmente organizzati dal vostro autista la mattina del secondo giorno.',
      },
      {
        q: 'Possiamo evitare l’hotel a Ella e fare entrambi i giorni dalla costa meridionale?',
        a: 'E possibile ma faticoso aspettatevi partenze molto anticipate da Mirissa o Galle. Raccomandiamo il pernottamento incluso a Ella per godervi l’altopiano senza una partenza a mezzanotte.',
      },
      {
        q: 'Cosa succede se il Parco Nazionale di Yala e chiuso nelle nostre date?',
        a: 'Lo sostituiamo con Udawalawe o Bundala per ottimi avvistamenti di elefanti e uccelli, senza modificare la struttura del tour. Il vostro autista confermera il parco migliore al momento della prenotazione.',
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
              'Goditi una breve escursione panoramica al Little Adam’s Peak per vedute a 360° sull’Ella Gap e le piantagioni di te circostanti.',
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
              'Visita le splendide cascate di Ravana, una delle cascate piu famose dello Sri Lanka, situata vicino a Ella.',
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
              'Yala e la casa di 44 specie di mammiferi e 215 specie di uccelli. Tra i suoi abitanti piu famosi c’e la piu grande concentrazione di leopardi al mondo.',
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
    title: '2 dias Tour privado por Sri Lanka: Ella y safari en Yala | Llegada al aeropuerto',
    description:
      'Descubre la fauna y el paisaje montanoso de Sri Lanka en este tour privado de 2 dias que termina en el aeropuerto o en tu hotel.',
    duration: '2 dias',
    persons: 'Tour privado (1-20 personas)',
    tourType: 'Circuito',
    overview:
      'Vive un viaje de 2 dias entre las tierras altas de Ella y la fauna de Yala. El primer dia explora el Nine Arch Bridge, el Little Adam’s Peak, Flying Ravana y las cascadas de Ravana, con noche cerca de Ella Gap. El segundo dia haz un safari por la manana en el Parque Nacional de Yala y vuelve a las cascadas de Ravana antes del traslado. Este tour privado termina en el aeropuerto o en tu hotel.',
    includes: PACKAGE_INCLUDES.es,
    excludes: PACKAGE_EXCLUDES.es,
    seoIntro:
      'Combine las colinas neblinosas de Ella con un safari de leopardos en Yala en solo dos dias privados: la clasica combinacion de tierras altas y fauna sin un itinerario de una semana completa. El primer dia explora el puente Nine Arches, Little Adam’s Peak, la tirolina opcional Flying Ravana y las cataratas de Ravana, con alojamiento en media pension cerca de Ella Gap. El segundo dia desciende al Parque Nacional de Yala para un safari matutino en jeep 4x4 entre elefantes, cocodrilos y, con suerte, leopardos, para despues volver a visitar las cataratas de Ravana desde el lado de las tierras bajas antes de su traslado posterior. Sundown Tours coordina los horarios de entrada al safari y los miradores del tren, mientras su conductor de habla inglesa recorre la empinada carretera entre Ella y Yala en un vehiculo privado con aire acondicionado y kilometraje ilimitado. El alquiler del jeep del parque y las entradas se pagan in situ, de modo que puede ampliar el safari o anadir una parada de playa en la costa sur.',
    highlights: [
      'Puente Nine Arches, Little Adam’s Peak y cataratas de Ravana en Ella en un solo dia',
      'Tirolina opcional Flying Ravana con vistas panoramicas de las tierras altas',
      'Safari matutino en jeep por el Parque Nacional de Yala en busca de elefantes y habitat de leopardos',
      'Noche en media pension en Ella Gap entre las tierras altas y la naturaleza salvaje',
      'Chofer privado con kilometraje ilimitado y opciones de traslado flexibles',
    ],
    whoIsFor:
      'Ideal para los amantes de la fauna y los fotografos que ya tienen planeado Ella pero desean anadir un safari de leopardos sin cuatro dias de viaje adicionales. Una forma fisica moderada ayuda en la caminata a Little Adam’s Peak.',
    bestTimeNote:
      'Yala esta en su mejor momento de febrero a julio, cuando el parque esta completamente abierto; cierra brevemente alrededor de septiembre y en ese caso sugerimos Udawalawe. Las mananas de temporada seca mejoran la observacion de leopardos y las fotos del puente Nine Arches.',
    faq: [
      {
        q: 'El jeep del safari en Yala esta incluido en el precio del circuito?',
        a: 'Su vehiculo privado y conductor estan incluidos. La entrada al parque de Yala y el jeep de safari registrado se pagan in situ, normalmente organizados por su conductor la manana del dia 2.',
      },
      {
        q: 'Podemos evitar el hotel en Ella y hacer ambos dias desde la costa sur?',
        a: 'Es posible, pero agotador: espere salidas muy tempranas desde Mirissa o Galle. Recomendamos la noche incluida en Ella para disfrutar de las tierras altas sin una salida a medianoche.',
      },
      {
        q: 'Que ocurre si el Parque Nacional de Yala esta cerrado en nuestras fechas?',
        a: 'Lo sustituimos por Udawalawe o Bundala, con excelentes avistamientos de elefantes y aves, sin cambiar la estructura del circuito. Su conductor confirmara el mejor parque al reservar.',
      },
    ],
    days: [
      {
        title: 'Aventura en Ella',
        activities: [
          {
            type: 'Visita panoramica',
            title: 'Nine Arch Bridge',
            description:
              'Explora el iconico Nine Arch Bridge en Ella, rodeado de exuberante vegetacion y vistas impresionantes de las tierras altas.',
          },
          {
            type: 'Senderismo',
            title: 'Little Adam’s Peak',
            description:
              'Disfruta de una breve caminata panoramica hasta el Little Adam’s Peak con vistas de 360° del Ella Gap y las plantaciones de te circundantes.',
          },
          {
            type: 'Aventura',
            title: 'Tirolina Flying Ravana',
            description:
              'Vive la emocion de la tirolina en el Flying Ravana Adventure Park con vistas al espectacular paisaje de Ella.',
          },
          {
            type: 'Cascada',
            title: 'Cascada de Ravana',
            description:
              'Visita la hermosa cascada de Ravana, una de las cascadas mas famosas de Sri Lanka, cerca de Ella.',
          },
          {
            type: 'Alojamiento',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Alojamiento en el Oak Ray Ella Gap Hotel o similar, en media pension.',
            extra: ['Hotel 4 estrellas (premium)', 'Bano privado'],
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
              'Yala alberga 44 especies de mamiferos y 215 especies de aves. Entre sus residentes mas famosos se encuentra la mayor concentracion de leopardos del mundo.',
          },
          {
            type: 'Tour guiado',
            title: 'Cascada de Ravana',
            description:
              'La cascada de Ravana esta ligada a mitos y leyendas. Se dice que el rey demonio Ravana, del Ramayana, escondio a Sita en la cueva detras de la cascada tras secuestrarla.',
          },
        ],
      },
    ],
  },

  pl: {
    title: '2 dni Prywatna wycieczka po Sri Lance: Ella i safari w Yala | Dowoz na lotnisko',
    description:
      'Odkryj dzika przyrode i malownicze wzgorza Sri Lanki podczas tej 2 dniowej prywatnej wycieczki zakonczonej na lotnisku lub w hotelu.',
    duration: '2 dni',
    persons: 'Prywatna wycieczka (1-20 osob)',
    tourType: 'Wycieczka objazdowa',
    overview:
      'Przezyj 2 dniowa podroz przez wzgorza Elli i dzika przyrode Yala. Pierwszego dnia zobaczysz Nine Arch Bridge, Little Adam’s Peak, Flying Ravana i wodospady Ravana, z noclegiem przy Ella Gap. Drugiego dnia czeka poranne safari w Parku Narodowym Yala, a potem ponownie wodospad Ravana przed dalszym transferem. Ta prywatna wycieczka konczy sie na lotnisku lub w hotelu.',
    includes: PACKAGE_INCLUDES.pl,
    excludes: PACKAGE_EXCLUDES.pl,
    seoIntro:
      'Polacz mgliste wzniesienia Elli z safari na lamparty w Yali w ciagu tylko dwoch prywatnych dni  klasyczne polaczenie wyzyn i dzikiej przyrody bez tygodniowego planu podrozy. Pierwszy dzien to zwiedzanie mostu Nine Arches, Little Adam’s Peak, opcjonalna tyrolka Flying Ravana i wodospady Ravana, z noclegiem w formule half  board blisko Ella Gap. Drugi dzien prowadzi do Parku Narodowego Yala na poranne safari jeepem 4x4 wsrod sloni, krokodyli i, z odpowiednia doza szczescia, lampartow, a nastepnie ponowna wizyte przy wodospadach Ravana z niziny, przed dalszym transferem. Sundown Tours koordynuje godziny wejscia na safari i punkty widokowe pociagu, podczas gdy anglojezyczny kierowca prowadzi po kretej drodze miedzy Ella i Yala w prywatnym klimatyzowanym pojezdzie z nielimitowanym przebiegiem. Wynajem jeepa w parku i oplaty za wstep placi sie na miejscu, dzieki czemu mozna wydluzyc safari lub dodac przystanek na plazy na poludniowym wybrzezu.',
    highlights: [
      'Most Nine Arches, Little Adam’s Peak i wodospady Ravana w Elli w jeden dzien',
      'Opcjonalna tyrolka Flying Ravana z panoramicznymi widokami na wyzyny',
      'Poranne safari jeepem w Parku Narodowym Yala w poszukiwaniu sloni i siedlisk lampartow',
      'Nocleg w formule half  board w Ella Gap miedzy wyzynami a dzika przyroda',
      'Prywatny kierowca z nielimitowanym przebiegiem i elastycznymi opcjami transferu',
    ],
    whoIsFor:
      'Idealna dla entuzjastow dzikiej przyrody i fotografow, ktorzy juz planuja Elle, ale chca dodac safari na lamparty bez czterech dodatkowych dni podrozy. Umiarkowana kondycja pomaga przy wedrowce na Little Adam’s Peak.',
    bestTimeNote:
      'Yala jest najlepsza od lutego do lipca, gdy park jest w pelni otwarty; zamyka sie na krotko wokol wrzesnia, a w takim przypadku proponujemy Udawalawe. Poranki w sezonie suchym poprawiaja szanse na zobaczenie lampartow i zdjecia mostu Nine Arches.',
    faq: [
      {
        q: 'Czy jeep na safari w Yali jest wliczony w cene wycieczki?',
        a: 'Panstwa prywatny pojazd i kierowca sa wliczeni. Wstep do parku Yala i zarejestrowany jeep na safari placi sie na miejscu  zwykle organizowane przez kierowce rano 2. dnia.',
      },
      {
        q: 'Czy mozemy pominac hotel w Elli i zrobic obie czesci z poludniowego wybrzeza?',
        a: 'To mozliwe, ale wyczerpujace  nalezy liczyc sie z bardzo wczesnymi wyjazdami z Mirissy lub Galle. Zalecamy wliczony nocleg w Elli, aby cieszyc sie wyzynami bez wyjazdu o polnocy.',
      },
      {
        q: 'Co sie stanie, jesli Park Narodowy Yala bedzie zamkniety w naszych terminach?',
        a: 'Zastepujemy go Udawalawe lub Bundala, gdzie mozna dobrze zobaczyc slonie i ptaki, bez zmiany struktury wycieczki. Kierowca potwierdzi najlepszy park przy rezerwacji.',
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
              'Odkryj slynny most Nine Arch w Elli, otoczony bujna zielenia i zapierajacymi dech widokami na wzgorza.',
          },
          {
            type: 'Wedrowka',
            title: 'Little Adam’s Peak',
            description:
              'Wybierz sie na krotka, widokowa wedrowke na Little Adam’s Peak, skad zobaczysz panorame Ella Gap i okolicznych plantacji herbaty.',
          },
          {
            type: 'Przygoda',
            title: 'Zjazd na linie Flying Ravana',
            description:
              'Poczuj emocje zjazdu na linie w Flying Ravana Adventure Park z widokiem na piekny krajobraz Elli.',
          },
          {
            type: 'Wodospad',
            title: 'Wodospad Ravana',
            description:
              'Odwiedz piekny wodospad Ravana, jeden z najslynniejszych wodospadow Sri Lanki, polozony niedaleko Elli.',
          },
          {
            type: 'Nocleg',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Nocleg w Oak Ray Ella Gap Hotel lub podobnym, w opcji HB.',
            extra: ['Hotel 4 gwiazdki (premium)', 'Prywatna lazienka'],
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
              'Yala jest domem dla 44 gatunkow ssakow i 215 gatunkow ptakow. Wsrod jej najbardziej znanych mieszkancow jest najwieksze skupienie lampartow na swiecie.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Wodospad Ravana',
            description:
              'Wodospad Ravana jest owiany mitami i legendami. Wierzy sie, ze demoniczny krol Ravana z epopei Ramajana ukryl Site w jaskini za wodospadem po jej uprowadzeniu.',
          },
        ],
      },
    ],
  },

  ru: {
    title: '2 дня Частный тур по Шри Ланке: Элла и сафари в Яле | Трансфер в аэропорт',
    description:
      'Откройте для себя дикую природу и живописную горную местность Шри Ланки в этом частном туре на 2 дня, завершающемся в аэропорту или в вашем отеле.',
    duration: '2 дня',
    persons: 'Частный тур (1-20 человек)',
    tourType: 'Обзорный тур',
    overview:
      'Совершите путешествие на 2 дня по холмам Эллы и дикой природе Ялы. В первый день вы увидите Nine Arch Bridge, Little Adam’s Peak, Flying Ravana и водопады Равана и переночуете у Ella Gap. На второй день вас ждёт утреннее сафари в национальном парке Яла, затем снова водопад Равана перед трансфером. Этот частный тур завершается в аэропорту или в вашем отеле.',
    includes: PACKAGE_INCLUDES.ru,
    excludes: PACKAGE_EXCLUDES.ru,
    seoIntro:
      'Совместите туманные гряды Эллы с сафари на леопардов в Яле всего за два частных дня классическое сочетание горной страны и дикой природы без недельного маршрута. Первый день включает мост Nine Arches, Little Adam’s Peak, опциональный зип лайн Flying Ravana и водопады Равана, с проживанием на полупансионе рядом с Ella Gap. Второй день ведёт в национальный парк Яла для утреннего джип сафари 4x4 среди слонов, крокодилов и, при удаче, леопардов, а затем повторное посещение водопадов Равана со стороны низменности перед вашим дальнейшим трансфером. Sundown Tours согласовывает время входа на сафари и смотровые точки поезда, пока ваш англоговорящий водитель ведёт машину по крутой дороге между Эллой и Ялой в частном кондиционированном автомобиле с неограниченным пробегом. Аренда джипа в парке и входные билеты оплачиваются на месте, что позволяет продлить сафари или добавить остановку на пляже южного побережья.',
    highlights: [
      'Мост Nine Arches, Little Adam’s Peak и водопады Равана в Элле за один день',
      'Опциональный зип лайн Flying Ravana с панорамными видами горной страны',
      'Утреннее джип сафари в национальном парке Яла в поисках слонов и мест обитания леопардов',
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
        a: 'Ваш частный автомобиль и водитель включены. Входной билет в парк Яла и зарегистрированный сафари джип оплачиваются на месте обычно организуются вашим водителем утром 2 го дня.',
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
            title: 'Zip line Flying Ravana',
            description:
              'Испытайте азарт зип лайна в парке приключений Flying Ravana с видом на потрясающий ландшафт Эллы.',
          },
          {
            type: 'Водопад',
            title: 'Водопад Равана',
            description:
              'Посетите прекрасный водопад Равана один из самых знаменитых водопадов Шри Ланки, расположенный рядом с Эллой.',
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
  nl: {
    title: 'Privétour van 2 dagen door Sri Lanka: Ella en safari in Yala | Afzet op de luchthaven',
    description:
      'Ontdek de wilde dieren en het heuvelland van Sri Lanka tijdens deze privétour van 2 dagen, die eindigt op de luchthaven of bij uw hotel.',
    duration: '2 dagen',
    persons: 'Privétour (1 tot 20 personen)',
    tourType: 'Rondreis',
    overview:
      'Beleef een reis van 2 dagen door het heuvelland van Ella en de wilde dieren van Yala. Op de eerste dag verkent u de Nine Arch Bridge, Little Adam’s Peak, Flying Ravana en Ravana Falls, en overnacht u bij Ella Gap. Op de tweede dag maakt u een ochtendsafari in Nationaal Park Yala en bezoekt u daarna opnieuw Ravana Falls, vóór de verdere transfer. Deze privétour eindigt op de luchthaven of bij uw hotel.',
    includes: PACKAGE_INCLUDES.nl,
    excludes: PACKAGE_EXCLUDES.nl,
    seoIntro:
      'Combineer de nevelige bergkammen van Ella met een luipaardensafari in Yala in slechts twee privédagen: de klassieke combinatie van heuvelland en wilde dieren, zonder een programma van een volle week. Op de eerste dag verkent u de Nine Arches Bridge, Little Adam’s Peak, de optionele tokkelbaan van Flying Ravana en Ravana Falls, met een overnachting op basis van halfpension bij Ella Gap. Op de tweede dag daalt u af naar Nationaal Park Yala voor een ochtendlijke jeepsafari met een 4x4, tussen olifanten en krokodillen, en met wat geluk ook luipaarden. Daarna bezoekt u Ravana Falls opnieuw, vanaf de kant van het laagland, vóór uw verdere transfer. Sundown Tours stemt de toegangstijden van de safari en de uitzichtpunten bij de trein op elkaar af, terwijl uw Engelssprekende chauffeur de steile weg van Ella naar Yala rijdt in een privévoertuig met airconditioning en een onbeperkt aantal kilometers. De huur van de jeep in het park en de entreegelden betaalt u ter plaatse. Zo kunt u de safari verlengen of een afzet aan een strand op de zuidkust toevoegen.',
    highlights: [
      'Nine Arches Bridge, Little Adam’s Peak en Ravana Falls in Ella op één dag',
      'Optionele tokkelbaan van Flying Ravana met panoramisch uitzicht over het heuvelland',
      'Ochtendlijke jeepsafari in Nationaal Park Yala, op zoek naar olifanten en het leefgebied van luipaarden',
      'Overnachting op basis van halfpension bij Ella Gap, tussen het hoogland en het wildgebied',
      'Privéchauffeur met een onbeperkt aantal kilometers en flexibele plaatsen om u af te zetten',
    ],
    whoIsFor:
      'Geschikt als u van wilde dieren houdt of graag fotografeert. U wilt Ella al bezoeken en een luipaardensafari toevoegen zonder vier extra reisdagen. Een redelijke conditie helpt bij de wandeling naar Little Adam’s Peak.',
    bestTimeNote:
      'Yala is op zijn best van februari tot juli, wanneer het park volledig open is. Rond september sluit het kort. Dan stellen wij Udawalawe voor. Ochtenden in het droge seizoen maken het gemakkelijker om luipaarden te zien en de Nine Arches Bridge te fotograferen.',
    faq: [
      {
        q: 'Is de safarijeep voor Yala inbegrepen in de prijs van de tour?',
        a: 'Uw privévoertuig en chauffeur zijn inbegrepen. De toegang tot Nationaal Park Yala en de geregistreerde safarijeep betaalt u ter plaatse. Meestal regelt uw chauffeur dit op de ochtend van dag 2.',
      },
      {
        q: 'Kunnen wij het hotel in Ella overslaan en beide dagen vanaf de zuidkust doen?',
        a: 'Dat kan, maar het is vermoeiend. Reken op een zeer vroege start vanuit Mirissa of Galle. Wij raden de inbegrepen overnachting in Ella aan, zodat u van het heuvelland geniet zonder om middernacht te vertrekken.',
      },
      {
        q: 'Wat gebeurt er als Nationaal Park Yala op onze data gesloten is?',
        a: 'Wij vervangen het park door Udawalawe of Bundala, met goede kans op olifanten en vogels, zonder de opbouw van de reis te wijzigen. Uw chauffeur bevestigt bij de boeking welk park het meest geschikt is.',
      },
    ],
    days: [
      {
        title: 'Avontuur in Ella',
        activities: [
          {
            type: 'Uitzichtbezoek',
            title: 'Nine Arch Bridge',
            description:
              'Ontdek de beroemde Nine Arch Bridge in Ella, omgeven door weelderig groen en indrukwekkende uitzichten over het heuvelland.',
          },
          {
            type: 'Wandeling',
            title: 'Little Adam’s Peak',
            description:
              'Maak een korte, mooie wandeling naar Little Adam’s Peak, met panoramisch uitzicht op Ella Gap en de omliggende theeplantages.',
          },
          {
            type: 'Avontuur',
            title: 'Tokkelbaan van Flying Ravana',
            description:
              'Probeer de spannende tokkelbaan in Flying Ravana Adventure Park, met uitzicht over het prachtige landschap van Ella.',
          },
          {
            type: 'Watervalbezoek',
            title: 'Ravana Falls',
            description:
              'Bezoek de mooie Ravana Falls, een van de bekendste watervallen van Sri Lanka, vlak bij Ella.',
          },
          {
            type: 'Overnachting',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Overnachting in het Oak Ray Ella Gap Hotel of vergelijkbaar, op basis van halfpension.',
            extra: ['Hotel met 4 sterren (premium)', 'Eigen badkamer'],
          },
        ],
      },
      {
        title: 'Safari in Yala',
        activities: [
          {
            type: 'Rondleiding',
            title: 'Nationaal Park Yala',
            description:
              'In Yala leven 44 soorten zoogdieren en 215 vogelsoorten. Tot de bekendste bewoners behoort de grootste concentratie luipaarden ter wereld.',
          },
          {
            type: 'Rondleiding',
            title: 'Ravana Falls',
            description:
              'Ravana Falls is verweven met mythen en volksverhalen. Volgens de overlevering verborg de demonkoning Ravana uit het epos Ramayana Sita in de grot achter de waterval, nadat hij haar had ontvoerd en teruggebracht.',
          },
        ],
      },
    ],
  }
};
