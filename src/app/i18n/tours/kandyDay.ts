import type { TourContent } from './localize';

/**
 * Kandy one-day tour (pageId: kandyDay).
 * English is the full BaseTour; other locales overlay text by index.
 */
export const KANDY_DAY: TourContent = {
  en: {
    title: 'Sri Lanka Kandy One Day Tour',
    description:
      'Experience the cultural heart of Sri Lanka with a full-day guided tour to Kandy, including elephants, temples, tea, and scenic views.',
    duration: 'One Day',
    persons: '20 Persons',
    filecode: 'kandy-day-tour',
    overview: `
            This one-day trip to Kandy takes you through Sri Lanka’s cultural capital.
            Visit the Millennium Elephant Foundation or Pinnawala Elephant Orphanage,
            explore the sacred Temple of the Tooth Relic, enjoy a tea factory and plantation visit,
            relax by Kandy Lake and View Point, and optionally stop at a herbal and spice garden.
            Perfect for travelers seeking culture, nature, and tradition in a single day.
              `,
    tourType: 'Day Tour',

    itinerary: [
      {
        day: 1,
        title: 'Kandy Day Tour Itinerary',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Kandy Day Tour Itinerary',
              icon: 'fa-car',
              color: '#f39c12',
            },
            description:
              'Observe elephants up close and learn about elephant care and conservation.',
            image: 'assets/img/onedayTour/kandy/3.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title:
                'Millennium Elephant Foundation / Pinnawala Elephant Orphanage',
              icon: 'fa-elephant',
              color: '#8e44ad',
            },
            description:
              'Observe elephants up close and learn about elephant care and conservation.',
            image: 'assets/img/onedayTour/kandy/1.jpg',
          },
          {
            type: 'Activity',
            title: {
              title: 'Temple of the Sacred Tooth Relic',
              icon: 'fa-gopuram',
              color: '#c0392b',
            },
            description:
              'Visit the most sacred Buddhist temple in Sri Lanka, located in the heart of Kandy.',
            image: 'assets/img/onedayTour/kandy/3.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Tea Factory & Tea Plantation',
              icon: 'fa-leaf',
              color: '#27ae60',
            },
            description:
              'Explore a tea factory and plantation and learn how world-famous Ceylon tea is produced.',
            image: 'assets/img/onedayTour/kandy/5.jpg',
          },
          {
            type: 'Sightseeing',
            title: {
              title: 'Kandy Lake & View Point',
              icon: 'fa-water',
              color: '#2980b9',
            },
            description:
              'Enjoy scenic views of Kandy city and relax by the picturesque Kandy Lake.',
            image: 'assets/img/onedayTour/kandy/6.jpg',
          },
          {
            type: 'Optional visit',
            title: {
              title: 'Herbal & Spice Garden',
              icon: 'fa-seedling',
              color: '#16a085',
            },
            description:
              'Optional visit to a herbal and spice garden to learn about Sri Lankan spices and herbs.',
            image: 'assets/img/onedayTour/kandy/7.jpg',
          },
        ],
      },
    ],

    includes: [
      'All attraction entrance fees',
      'Highway tickets and parking fees',
      'English speaking professional driver',
      'Private air-conditioned vehicle',
    ],
    excludes: ['Food & Drinks', 'Entrance & Activities Fees'],
    seoIntro:
      'Kandy day tours distil Sri Lanka\'s last royal capital into a single cultural immersion elephants, sacred Buddhist ritual and Ceylon tea in the hills. Visit the Millennium Elephant Foundation or Pinnawala Elephant Orphanage en route, then enter the Temple of the Sacred Tooth Relic where daily puja ceremonies surround Buddha\'s revered tooth relic. A working tea factory and plantation visit explains how world-famous Ceylon tea is rolled, oxidised and tasted, while Kandy Lake and the upper viewpoint deliver postcard panoramas of the lake city. An optional spice and herbal garden stop introduces cinnamon, pepper and ayurvedic plants if time allows. Sundown Tours covers attraction entrances, highway tolls and private air-conditioned transport with an English-speaking driver-guide. Lunch is flexible near the lake or at a plantation bungalow. Perfect for travellers based in Colombo, Negombo or Kandy hotels who want depth without an overnight in the hills.',
    highlights: [
      'Millennium Elephant Foundation or Pinnawala Elephant Orphanage visit',
      'Temple of the Sacred Tooth Relic with Kandyan architecture and lake views',
      'Tea factory and plantation tour with fresh Ceylon tea tasting',
      'Kandy Lake stroll and scenic city viewpoint photo stops',
      'Optional herbal and spice garden with local cultivation demo',
    ],
    whoIsFor:
      'Suited to culture-focused couples, families and first-time visitors who want Kandy\'s essentials in one day without navigating hill-country buses or tuk-tuk touts alone.',
    bestTimeNote:
      'Year-round; the Cultural Triangle is driest June–September while December–March brings clearer views from Kandy\'s upper viewpoints. Evening puja at the Tooth Temple is worth timing ask us when booking.',
    faq: [
      {
        q: 'Pinnawala or Millennium Elephant Foundation which do we visit?',
        a: 'We choose based on your pickup point and timing. Pinnawala suits routes from Colombo; Millennium Elephant Foundation works well if you are already near Kandy. Tell us your preference when booking.',
      },
      {
        q: 'Is the Temple of the Sacred Tooth Relic entrance included?',
        a: 'Yes listed attraction entrances, highway tickets and parking are covered. Modest dress covering shoulders and knees is required for temple entry.',
      },
      {
        q: 'Can this day tour start from Colombo and return the same evening?',
        a: 'Absolutely. Expect a 3–4 hour each-way drive with stops at elephants and tea country breaking the journey. An early departure maximises time at the Tooth Temple.',
      },
    ],
  },

  de: {
    title: 'Sri Lanka Kandy Tagestour',
    description:
      'Erleben Sie das kulturelle Herz Sri Lankas mit einer geführten Tagestour nach Kandy, inklusive Elefanten, Tempeln, Tee und malerischen Ausblicken.',
    duration: '1 Tag',
    persons: '1–20 Reisende',
    tourType: 'Tagestour',
    overview:
      'Diese eintägige Reise nach Kandy führt Sie durch die kulturelle Hauptstadt Sri Lankas. Besuchen Sie die Millennium Elephant Foundation oder das Pinnawala Elephant Orphanage, erkunden Sie den heiligen Zahntempel, genießen Sie den Besuch einer Teefabrik und -plantage, entspannen Sie am Kandy-See mit Aussichtspunkt und machen Sie optional einen Abstecher zu einem Kräuter- und Gewürzgarten. Perfekt für Reisende, die Kultur, Natur und Tradition an einem einzigen Tag erleben möchten.',
    includes: [
      'Alle Eintrittsgebühren für Attraktionen',
      'Autobahngebühren und Parkgebühren',
      'Englischsprachiger professioneller Fahrer',
      'Klimatisiertes Privatfahrzeug',
    ],
    excludes: ['Speisen & Getränke', 'Eintritts- & Aktivitätsgebühren'],
    seoIntro:
      'Tagestouren nach Kandy bündeln Sri Lankas letzte Königsstadt in ein einziges kulturelles Erlebnis – Elefanten, heilige buddhistische Rituale und Ceylon-Tee in den Bergen. Besuchen Sie auf dem Weg die Millennium Elephant Foundation oder das Pinnawala Elephant Orphanage und betreten Sie anschließend den Zahntempel, in dem täglich Puja-Zeremonien um die verehrte Zahnreliquie Buddhas stattfinden. Der Besuch einer aktiven Teefabrik und -plantage zeigt, wie der weltberühmte Ceylon-Tee gerollt, oxidiert und verkostet wird, während der Kandy-See und der obere Aussichtspunkt malerische Panoramen der Seestadt bieten. Ein optionaler Halt in einem Gewürz- und Kräutergarten stellt bei ausreichender Zeit Zimt, Pfeffer und ayurvedische Pflanzen vor. Sundown Tours übernimmt Eintrittsgebühren, Autobahngebühren und den privaten klimatisierten Transport mit einem englischsprachigen Fahrer-Guide. Das Mittagessen ist flexibel am See oder in einem Plantagen-Bungalow möglich. Perfekt für Reisende mit Standort in Colombo, Negombo oder Kandy, die Tiefe erleben möchten, ohne in den Bergen zu übernachten.',
    highlights: [
      'Besuch der Millennium Elephant Foundation oder des Pinnawala Elephant Orphanage',
      'Zahntempel mit kandyanischer Architektur und Seeblick',
      'Teefabrik- und Plantagenbesuch mit frischer Ceylon-Tee-Verkostung',
      'Spaziergang am Kandy-See und Fotostopps am malerischen Stadt-Aussichtspunkt',
      'Optionaler Kräuter- und Gewürzgarten mit Vorführung des lokalen Anbaus',
    ],
    whoIsFor:
      'Geeignet für kulturinteressierte Paare, Familien und Erstbesucher, die das Wesentliche von Kandy an einem Tag erleben möchten, ohne allein mit Bergland-Bussen oder Tuk-Tuk-Anbietern zurechtkommen zu müssen.',
    bestTimeNote:
      'Ganzjährig möglich; im Kulturellen Dreieck ist es von Juni bis September am trockensten, während von Dezember bis März die Aussichtspunkte über Kandy die klarste Sicht bieten. Die abendliche Puja im Zahntempel ist sehenswert – fragen Sie uns bei der Buchung danach.',
    faq: [
      {
        q: 'Pinnawala oder Millennium Elephant Foundation – welchen Ort besuchen wir?',
        a: 'Wir wählen je nach Abholort und Zeitplan. Pinnawala passt gut zu Routen ab Colombo; das Millennium Elephant Foundation eignet sich, wenn Sie bereits in der Nähe von Kandy sind. Teilen Sie uns Ihre Präferenz bei der Buchung mit.',
      },
      {
        q: 'Ist der Eintritt zum Zahntempel enthalten?',
        a: 'Ja – die aufgeführten Eintrittsgebühren, Autobahngebühren und Parkgebühren sind enthalten. Für den Tempelbesuch ist bescheidene Kleidung mit bedeckten Schultern und Knien erforderlich.',
      },
      {
        q: 'Kann diese Tagestour ab Colombo starten und am selben Abend zurückkehren?',
        a: 'Ja, problemlos. Rechnen Sie mit 3–4 Stunden Fahrzeit pro Strecke, unterbrochen durch Stopps bei den Elefanten und im Teeland. Eine frühe Abfahrt maximiert die Zeit am Zahntempel.',
      },
    ],
    days: [
      {
        title: 'Kandy Tagestour Reiseroute',
        activities: [
          {
            type: 'Geführte Tour',
            title: 'Kandy Tagestour Reiseroute',
            description:
              'Beobachten Sie Elefanten aus nächster Nähe und erfahren Sie mehr über Elefantenpflege und Artenschutz.',
          },
          {
            type: 'Geführte Tour',
            title: 'Millennium Elephant Foundation / Pinnawala Elephant Orphanage',
            description:
              'Beobachten Sie Elefanten aus nächster Nähe und erfahren Sie mehr über Elefantenpflege und Artenschutz.',
          },
          {
            type: 'Aktivität',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den heiligsten buddhistischen Tempel Sri Lankas im Herzen von Kandy.',
          },
          {
            type: 'Geführte Tour',
            title: 'Teefabrik & Teeplantage',
            description:
              'Erkunden Sie eine Teefabrik und -plantage und erfahren Sie, wie der weltberühmte Ceylon-Tee hergestellt wird.',
          },
          {
            type: 'Besichtigung',
            title: 'Kandy-See & Aussichtspunkt',
            description:
              'Genießen Sie malerische Ausblicke auf die Stadt Kandy und entspannen Sie am pittoresken Kandy-See.',
          },
          {
            type: 'Optionaler Besuch',
            title: 'Kräuter- & Gewürzgarten',
            description:
              'Optionaler Besuch eines Kräuter- und Gewürzgartens, um mehr über sri-lankische Gewürze und Heilkräuter zu erfahren.',
          },
        ],
      },
    ],
  },

  fr: {
    title: 'Excursion à Kandy au Sri Lanka',
    description:
      'Découvrez le cœur culturel du Sri Lanka lors d’une excursion guidée d’une journée à Kandy, avec éléphants, temples, thé et vues panoramiques.',
    duration: '1 jour',
    persons: '1–20 voyageurs',
    tourType: 'Excursion d’une journée',
    overview:
      'Cette excursion d’une journée à Kandy vous emmène à travers la capitale culturelle du Sri Lanka. Visitez la Millennium Elephant Foundation ou l’orphelinat d’éléphants de Pinnawala, explorez le sacré Temple de la Dent, profitez de la visite d’une fabrique et d’une plantation de thé, détendez-vous au lac de Kandy et à son point de vue, puis faites une halte optionnelle dans un jardin d’épices et de plantes. Idéal pour les voyageurs en quête de culture, de nature et de traditions en une seule journée.',
    includes: [
      'Tous les frais d’entrée aux sites',
      'Péages d’autoroute et frais de parking',
      'Chauffeur professionnel anglophone',
      'Véhicule privé climatisé',
    ],
    excludes: ['Repas & boissons', 'Entrées & frais d’activités'],
    seoIntro:
      'Les excursions d’une journée à Kandy résument la dernière capitale royale du Sri Lanka en une seule immersion culturelle : éléphants, rituel bouddhiste sacré et thé de Ceylan dans les collines. Visitez en chemin la Millennium Elephant Foundation ou l’orphelinat d’éléphants de Pinnawala, puis entrez dans le Temple de la Dent sacrée, où des cérémonies de puja quotidiennes entourent la relique vénérée de la dent de Bouddha. La visite d’une fabrique et d’une plantation de thé en activité explique comment le célèbre thé de Ceylan est roulé, oxydé et dégusté, tandis que le lac de Kandy et son point de vue supérieur offrent des panoramas de carte postale sur la ville lacustre. Une halte optionnelle dans un jardin d’épices et de plantes permet de découvrir cannelle, poivre et plantes ayurvédiques si le temps le permet. Sundown Tours prend en charge les droits d’entrée, les péages et le transport privé climatisé avec un chauffeur-guide anglophone. Le déjeuner est flexible, près du lac ou dans un bungalow de plantation. Idéal pour les voyageurs basés à Colombo, Negombo ou Kandy souhaitant approfondir leur découverte sans nuitée dans les collines.',
    highlights: [
      'Visite de la Millennium Elephant Foundation ou de l’orphelinat d’éléphants de Pinnawala',
      'Temple de la Dent sacrée avec architecture kandyenne et vue sur le lac',
      'Visite d’une fabrique et d’une plantation de thé avec dégustation de thé de Ceylan frais',
      'Promenade au lac de Kandy et arrêts photo au point de vue panoramique sur la ville',
      'Jardin d’épices et de plantes optionnel avec démonstration de culture locale',
    ],
    whoIsFor:
      'Convient aux couples et familles passionnés de culture ainsi qu’aux visiteurs venant pour la première fois, qui souhaitent découvrir l’essentiel de Kandy en une journée sans naviguer seuls dans les bus des collines ou avec les chauffeurs de tuk-tuk.',
    bestTimeNote:
      'Praticable toute l’année ; le Triangle Culturel est le plus sec de juin à septembre, tandis que de décembre à mars les points de vue de Kandy offrent une vue plus dégagée. La puja du soir au Temple de la Dent vaut le détour demandez-nous d’en tenir compte lors de la réservation.',
    faq: [
      {
        q: 'Pinnawala ou Millennium Elephant Foundation lequel visitons-nous ?',
        a: 'Nous choisissons selon votre point de départ et l’horaire. Pinnawala convient aux itinéraires depuis Colombo ; la Millennium Elephant Foundation est adaptée si vous êtes déjà près de Kandy. Indiquez-nous votre préférence lors de la réservation.',
      },
      {
        q: 'L’entrée au Temple de la Dent sacrée est-elle incluse ?',
        a: 'Oui les droits d’entrée des sites listés, les péages et le stationnement sont couverts. Une tenue modeste couvrant épaules et genoux est requise pour entrer dans le temple.',
      },
      {
        q: 'Cette excursion peut-elle partir de Colombo et revenir le même soir ?',
        a: 'Absolument. Prévoyez 3 à 4 heures de route dans chaque sens, avec des arrêts chez les éléphants et dans les plantations de thé pour couper le trajet. Un départ matinal maximise le temps passé au Temple de la Dent.',
      },
    ],
    days: [
      {
        title: 'Itinéraire de l’excursion à Kandy',
        activities: [
          {
            type: 'Visite guidée',
            title: 'Itinéraire de l’excursion à Kandy',
            description:
              'Observez des éléphants de près et découvrez les soins qui leur sont apportés ainsi que les efforts de conservation.',
          },
          {
            type: 'Visite guidée',
            title: 'Millennium Elephant Foundation / Orphelinat d’éléphants de Pinnawala',
            description:
              'Observez des éléphants de près et découvrez les soins qui leur sont apportés ainsi que les efforts de conservation.',
          },
          {
            type: 'Activité',
            title: 'Temple de la Dent sacrée',
            description:
              'Visitez le temple bouddhiste le plus sacré du Sri Lanka, situé au cœur de Kandy.',
          },
          {
            type: 'Visite guidée',
            title: 'Fabrique et plantation de thé',
            description:
              'Explorez une fabrique et une plantation de thé et découvrez comment est produit le célèbre thé de Ceylan.',
          },
          {
            type: 'Visite touristique',
            title: 'Lac de Kandy & point de vue',
            description:
              'Profitez de vues panoramiques sur la ville de Kandy et détendez-vous près du pittoresque lac de Kandy.',
          },
          {
            type: 'Visite optionnelle',
            title: 'Jardin d’épices et de plantes',
            description:
              'Visite optionnelle d’un jardin d’épices et de plantes pour découvrir les épices et herbes sri-lankaises.',
          },
        ],
      },
    ],
  },

  it: {
    title: 'Escursione di un giorno a Kandy, Sri Lanka',
    description:
      'Vivi il cuore culturale dello Sri Lanka con un’escursione guidata di un giorno a Kandy, tra elefanti, templi, tè e panorami suggestivi.',
    duration: '1 giorno',
    persons: '1–20 viaggiatori',
    tourType: 'Tour di un giorno',
    overview:
      'Questo tour di un giorno a Kandy ti porta attraverso la capitale culturale dello Sri Lanka. Visita la Millennium Elephant Foundation o l’orfanotrofio degli elefanti di Pinnawala, esplora il sacro Tempio del Dente, goditi la visita a una fabbrica e piantagione di tè, rilassati al Lago di Kandy e al suo punto panoramico, con una sosta opzionale in un giardino di erbe e spezie. Perfetto per i viaggiatori in cerca di cultura, natura e tradizione in un’unica giornata.',
    includes: [
      'Tutti gli ingressi alle attrazioni',
      'Pedaggi autostradali e parcheggi',
      'Autista professionista di lingua inglese',
      'Veicolo privato climatizzato',
    ],
    excludes: ['Cibo e bevande', 'Ingressi e costi delle attività'],
    seoIntro:
      'Le escursioni di un giorno a Kandy racchiudono l’ultima capitale reale dello Sri Lanka in un’unica immersione culturale: elefanti, rituali buddhisti sacri e tè di Ceylon sulle colline. Visitate lungo il percorso la Millennium Elephant Foundation o l’orfanotrofio degli elefanti di Pinnawala, poi entrate nel Tempio del Sacro Dente, dove ogni giorno si svolgono cerimonie di puja attorno alla venerata reliquia del dente del Buddha. La visita a una fabbrica e piantagione di tè in funzione spiega come il famoso tè di Ceylon viene arrotolato, ossidato e degustato, mentre il Lago di Kandy e il punto panoramico superiore offrono viste da cartolina sulla città lacustre. Una sosta opzionale in un giardino di erbe e spezie permette di conoscere cannella, pepe e piante ayurvediche, tempo permettendo. Sundown Tours copre gli ingressi alle attrazioni, i pedaggi autostradali e il trasporto privato climatizzato con un autista-guida di lingua inglese. Il pranzo è flessibile, vicino al lago o in un bungalow di piantagione. Perfetta per i viaggiatori con base a Colombo, Negombo o Kandy che vogliono approfondire senza pernottare sulle colline.',
    highlights: [
      'Visita alla Millennium Elephant Foundation o all’orfanotrofio degli elefanti di Pinnawala',
      'Tempio del Sacro Dente con architettura kandiana e vista sul lago',
      'Visita a una fabbrica e piantagione di tè con degustazione di tè di Ceylon fresco',
      'Passeggiata al Lago di Kandy e soste fotografiche al punto panoramico sulla città',
      'Giardino di erbe e spezie opzionale con dimostrazione della coltivazione locale',
    ],
    whoIsFor:
      'Adatta a coppie e famiglie appassionate di cultura e a chi visita per la prima volta, che vogliono scoprire l’essenziale di Kandy in un giorno senza doversi orientare da soli tra bus di montagna o tuk-tuk.',
    bestTimeNote:
      'Disponibile tutto l’anno; il Triangolo Culturale è più secco da giugno a settembre, mentre da dicembre a marzo i punti panoramici di Kandy offrono vedute più nitide. La puja serale al Tempio del Dente merita di essere programmata chiedeteci di tenerne conto al momento della prenotazione.',
    faq: [
      {
        q: 'Pinnawala o Millennium Elephant Foundation: quale visitiamo?',
        a: 'Scegliamo in base al punto di ritiro e agli orari. Pinnawala è adatta agli itinerari da Colombo; la Millennium Elephant Foundation è comoda se siete già vicini a Kandy. Comunicateci la vostra preferenza al momento della prenotazione.',
      },
      {
        q: 'L’ingresso al Tempio del Sacro Dente è incluso?',
        a: 'Sì gli ingressi alle attrazioni indicate, i pedaggi autostradali e il parcheggio sono coperti. Per l’ingresso al tempio è richiesto un abbigliamento decoroso che copra spalle e ginocchia.',
      },
      {
        q: 'Questa escursione può partire da Colombo e tornare la stessa sera?',
        a: 'Assolutamente sì. Prevedete 3-4 ore di viaggio per tratta, con soste dagli elefanti e nelle zone del tè a interrompere il percorso. Una partenza mattutina massimizza il tempo al Tempio del Dente.',
      },
    ],
    days: [
      {
        title: 'Itinerario dell’escursione a Kandy',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Itinerario dell’escursione a Kandy',
            description:
              'Osserva gli elefanti da vicino e scopri come vengono curati e protetti.',
          },
          {
            type: 'Tour guidato',
            title: 'Millennium Elephant Foundation / Orfanotrofio degli elefanti di Pinnawala',
            description:
              'Osserva gli elefanti da vicino e scopri come vengono curati e protetti.',
          },
          {
            type: 'Attività',
            title: 'Tempio del Sacro Dente',
            description:
              'Visita il tempio buddhista più sacro dello Sri Lanka, nel cuore di Kandy.',
          },
          {
            type: 'Tour guidato',
            title: 'Fabbrica e piantagione di tè',
            description:
              'Esplora una fabbrica e una piantagione di tè e scopri come nasce il celebre tè di Ceylon.',
          },
          {
            type: 'Visita turistica',
            title: 'Lago di Kandy & punto panoramico',
            description:
              'Goditi vedute suggestive sulla città di Kandy e rilassati vicino al pittoresco Lago di Kandy.',
          },
          {
            type: 'Visita opzionale',
            title: 'Giardino di erbe e spezie',
            description:
              'Visita opzionale a un giardino di erbe e spezie per scoprire le spezie e le erbe tipiche dello Sri Lanka.',
          },
        ],
      },
    ],
  },

  es: {
    title: 'Excursión de un día a Kandy, Sri Lanka',
    description:
      'Descubre el corazón cultural de Sri Lanka con una excursión guiada de un día a Kandy, con elefantes, templos, té y vistas panorámicas.',
    duration: '1 día',
    persons: '1–20 viajeros',
    tourType: 'Excursión de un día',
    overview:
      'Este viaje de un día a Kandy te lleva a través de la capital cultural de Sri Lanka. Visita la Millennium Elephant Foundation o el orfanato de elefantes de Pinnawala, explora el sagrado Templo del Diente, disfruta de la visita a una fábrica y plantación de té, relájate en el Lago Kandy y su mirador, y haz una parada opcional en un jardín de hierbas y especias. Perfecto para viajeros que buscan cultura, naturaleza y tradición en un solo día.',
    includes: [
      'Todas las entradas a las atracciones',
      'Peajes de autopista y aparcamiento',
      'Chófer profesional de habla inglesa',
      'Vehículo privado con aire acondicionado',
    ],
    excludes: ['Comidas y bebidas', 'Entradas y costes de actividades'],
    seoIntro:
      'Las excursiones de un día a Kandy condensan la última capital real de Sri Lanka en una sola inmersión cultural: elefantes, ritual budista sagrado y té de Ceilán en las colinas. Visite en el camino la Millennium Elephant Foundation o el orfanato de elefantes de Pinnawala, y luego entre en el Templo del Diente Sagrado, donde a diario se celebran ceremonias de puja alrededor de la venerada reliquia del diente de Buda. La visita a una fábrica y plantación de té en funcionamiento explica cómo se enrolla, oxida y cata el famoso té de Ceilán, mientras que el Lago Kandy y el mirador superior ofrecen panorámicas de postal de la ciudad lacustre. Una parada opcional en un jardín de hierbas y especias presenta canela, pimienta y plantas ayurvédicas si el tiempo lo permite. Sundown Tours cubre las entradas a las atracciones, los peajes y el transporte privado con aire acondicionado con un chófer-guía de habla inglesa. El almuerzo es flexible, cerca del lago o en un bungalow de plantación. Perfecta para viajeros alojados en Colombo, Negombo o Kandy que desean profundizar sin pasar la noche en las colinas.',
    highlights: [
      'Visita a la Millennium Elephant Foundation o al orfanato de elefantes de Pinnawala',
      'Templo del Diente Sagrado con arquitectura kandiana y vistas al lago',
      'Visita a una fábrica y plantación de té con degustación de té de Ceilán fresco',
      'Paseo por el Lago Kandy y paradas fotográficas en el mirador panorámico de la ciudad',
      'Jardín de hierbas y especias opcional con demostración de cultivo local',
    ],
    whoIsFor:
      'Adecuada para parejas y familias interesadas en la cultura y para quienes visitan por primera vez, que desean conocer lo esencial de Kandy en un día sin tener que orientarse solos entre autobuses de montaña o mototaxis.',
    bestTimeNote:
      'Disponible todo el año; el Triángulo Cultural es más seco de junio a septiembre, mientras que de diciembre a marzo los miradores de Kandy ofrecen vistas más despejadas. La puja vespertina en el Templo del Diente merece planificarse pregúntenos al reservar.',
    faq: [
      {
        q: '¿Visitamos Pinnawala o la Millennium Elephant Foundation?',
        a: 'Elegimos según su punto de recogida y el horario. Pinnawala es adecuada para rutas desde Colombo; la Millennium Elephant Foundation conviene si ya está cerca de Kandy. Indíquenos su preferencia al reservar.',
      },
      {
        q: '¿Está incluida la entrada al Templo del Diente Sagrado?',
        a: 'Sí las entradas a las atracciones indicadas, los peajes y el aparcamiento están cubiertos. Se requiere ropa modesta que cubra hombros y rodillas para entrar al templo.',
      },
      {
        q: '¿Puede esta excursión salir de Colombo y regresar la misma noche?',
        a: 'Sin duda. Cuente con 3-4 horas de trayecto en cada sentido, con paradas en la zona de elefantes y de té que rompen el viaje. Una salida temprana maximiza el tiempo en el Templo del Diente.',
      },
    ],
    days: [
      {
        title: 'Itinerario de la excursión a Kandy',
        activities: [
          {
            type: 'Tour guiado',
            title: 'Itinerario de la excursión a Kandy',
            description:
              'Observa a los elefantes de cerca y conoce su cuidado y los esfuerzos de conservación.',
          },
          {
            type: 'Tour guiado',
            title: 'Millennium Elephant Foundation / Orfanato de elefantes de Pinnawala',
            description:
              'Observa a los elefantes de cerca y conoce su cuidado y los esfuerzos de conservación.',
          },
          {
            type: 'Actividad',
            title: 'Templo del Diente Sagrado',
            description:
              'Visita el templo budista más sagrado de Sri Lanka, en el corazón de Kandy.',
          },
          {
            type: 'Tour guiado',
            title: 'Fábrica y plantación de té',
            description:
              'Explora una fábrica y plantación de té y descubre cómo se elabora el famoso té de Ceilán.',
          },
          {
            type: 'Turismo',
            title: 'Lago Kandy y mirador',
            description:
              'Disfruta de vistas panorámicas de la ciudad de Kandy y relájate junto al pintoresco Lago Kandy.',
          },
          {
            type: 'Visita opcional',
            title: 'Jardín de hierbas y especias',
            description:
              'Visita opcional a un jardín de hierbas y especias para descubrir las especias y hierbas típicas de Sri Lanka.',
          },
        ],
      },
    ],
  },

  pl: {
    title: 'Jednodniowa wycieczka do Kandy, Sri Lanka',
    description:
      'Poznaj kulturalne serce Sri Lanki podczas całodniowej wycieczki z przewodnikiem do Kandy, ze słoniami, świątyniami, herbatą i widokami.',
    duration: '1 dzień',
    persons: '1–20 podróżnych',
    tourType: 'Wycieczka jednodniowa',
    overview:
      'Ta jednodniowa wycieczka do Kandy prowadzi przez kulturalną stolicę Sri Lanki. Odwiedzisz Millennium Elephant Foundation lub sierociniec słoni w Pinnawali, zwiedzisz świętą Świątynię Zęba Buddy, odbędziesz wizytę w fabryce i na plantacji herbaty, odpoczniesz nad Jeziorem Kandy przy punkcie widokowym, a opcjonalnie zajrzysz do ogrodu ziołowo-przyprawowego. Idealna dla podróżnych szukających kultury, natury i tradycji w jednym dniu.',
    includes: [
      'Wszystkie bilety wstępu do atrakcji',
      'Opłaty autostradowe i parkingowe',
      'Profesjonalny kierowca mówiący po angielsku',
      'Klimatyzowany prywatny pojazd',
    ],
    excludes: ['Jedzenie i napoje', 'Bilety wstępu i opłaty za atrakcje'],
    seoIntro:
      'Jednodniowe wycieczki do Kandy skupiają ostatnią królewską stolicę Sri Lanki w jednym kulturowym doświadczeniu – słonie, święty buddyjski rytuał i cejlońska herbata w górach. Po drodze odwiedzicie Millennium Elephant Foundation lub sierociniec słoni w Pinnawali, a następnie wejdziecie do Świątyni Zęba Buddy, gdzie codziennie odbywają się ceremonie puja wokół czczonej relikwii zęba Buddy. Wizyta w działającej fabryce i na plantacji herbaty pokazuje, jak słynna cejlońska herbata jest zwijana, poddawana oksydacji i degustowana, a Jezioro Kandy oraz górny punkt widokowy oferują widokówkowe panoramy miasta nad jeziorem. Opcjonalny przystanek w ogrodzie ziołowo-przyprawowym pozwala – jeśli czas pozwoli – poznać cynamon, pieprz i rośliny ajurwedyjskie. Sundown Tours pokrywa bilety wstępu, opłaty autostradowe i prywatny klimatyzowany transport z anglojęzycznym kierowcą-przewodnikiem. Lunch można zjeść elastycznie nad jeziorem lub w bungalowie na plantacji. Idealna dla podróżnych zatrzymujących się w Colombo, Negombo lub Kandy, którzy chcą głębiej poznać miasto bez noclegu w górach.',
    highlights: [
      'Wizyta w Millennium Elephant Foundation lub sierocińcu słoni w Pinnawali',
      'Świątynia Zęba Buddy z kandyjską architekturą i widokiem na jezioro',
      'Wizyta w fabryce i na plantacji herbaty z degustacją świeżej cejlońskiej herbaty',
      'Spacer nad Jeziorem Kandy i przystanki fotograficzne na panoramicznym punkcie widokowym miasta',
      'Opcjonalny ogród ziołowo-przyprawowy z prezentacją lokalnej uprawy',
    ],
    whoIsFor:
      'Odpowiednia dla par i rodzin zainteresowanych kulturą oraz osób odwiedzających Sri Lankę po raz pierwszy, które chcą poznać najważniejsze miejsca Kandy w jeden dzień, bez samodzielnego poruszania się górskimi autobusami czy tuk-tukami.',
    bestTimeNote:
      'Dostępna przez cały rok; Trójkąt Kulturowy jest najsuchszy od czerwca do września, natomiast od grudnia do marca punkty widokowe Kandy oferują wyraźniejsze widoki. Wieczorna puja w Świątyni Zęba jest warta zaplanowania – zapytajcie nas o to przy rezerwacji.',
    faq: [
      {
        q: 'Odwiedzamy Pinnawalę czy Millennium Elephant Foundation?',
        a: 'Wybieramy w zależności od miejsca odbioru i harmonogramu. Pinnawala pasuje do trasy z Colombo; Millennium Elephant Foundation sprawdza się, jeśli jesteście już w pobliżu Kandy. Podajcie nam swoją preferencję przy rezerwacji.',
      },
      {
        q: 'Czy wstęp do Świątyni Zęba Buddy jest wliczony w cenę?',
        a: 'Tak – wymienione bilety wstępu, opłaty autostradowe i parking są wliczone. Do wejścia do świątyni wymagany jest skromny strój zakrywający ramiona i kolana.',
      },
      {
        q: 'Czy ta wycieczka może zaczynać się w Colombo i wracać tego samego wieczoru?',
        a: 'Zdecydowanie tak. Liczcie się z 3–4 godzinami jazdy w każdą stronę, z przystankami u słoni i w krainie herbaty przerywającymi podróż. Wczesny wyjazd pozwala maksymalnie wykorzystać czas w Świątyni Zęba.',
      },
    ],
    days: [
      {
        title: 'Plan wycieczki do Kandy',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Plan wycieczki do Kandy',
            description:
              'Obserwuj słonie z bliska i poznaj zasady opieki nad nimi oraz działania na rzecz ich ochrony.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Millennium Elephant Foundation / Sierociniec słoni w Pinnawali',
            description:
              'Obserwuj słonie z bliska i poznaj zasady opieki nad nimi oraz działania na rzecz ich ochrony.',
          },
          {
            type: 'Aktywność',
            title: 'Świątynia Świętego Zęba Buddy',
            description:
              'Odwiedź najświętszą świątynię buddyjską Sri Lanki, położoną w samym centrum Kandy.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Fabryka i plantacja herbaty',
            description:
              'Zwiedź fabrykę i plantację herbaty i poznaj proces produkcji słynnej herbaty cejlońskiej.',
          },
          {
            type: 'Zwiedzanie',
            title: 'Jezioro Kandy i punkt widokowy',
            description:
              'Podziwiaj piękne widoki na miasto Kandy i odpocznij nad malowniczym Jeziorem Kandy.',
          },
          {
            type: 'Wizyta opcjonalna',
            title: 'Ogród ziołowo-przyprawowy',
            description:
              'Opcjonalna wizyta w ogrodzie ziołowo-przyprawowym, aby poznać sri-lankijskie przyprawy i zioła.',
          },
        ],
      },
    ],
  },

  ru: {
    title: 'Однодневный тур в Канди, Шри-Ланка',
    description:
      'Познакомьтесь с культурным сердцем Шри-Ланки в однодневном туре с гидом в Канди, включающем слонов, храмы, чай и живописные виды.',
    duration: '1 день',
    persons: '1–20 путешественников',
    tourType: 'Однодневный тур',
    overview:
      'Эта однодневная поездка в Канди познакомит вас с культурной столицей Шри-Ланки. Посетите Millennium Elephant Foundation или приют слонов Пиннавела, побывайте в священном Храме Зуба Будды, насладитесь визитом на чайную фабрику и плантацию, отдохните у озера Канди со смотровой площадкой и по желанию заглянете в сад трав и специй. Идеально для путешественников, ищущих культуру, природу и традиции за один день.',
    includes: [
      'Все входные билеты на достопримечательности',
      'Дорожные сборы и парковка',
      'Профессиональный англоговорящий водитель',
      'Частный автомобиль с кондиционером',
    ],
    excludes: ['Еда и напитки', 'Входные билеты и оплата активностей'],
    seoIntro:
      'Однодневные туры в Канди объединяют последнюю королевскую столицу Шри-Ланки в одно культурное погружение слоны, священный буддийский ритуал и цейлонский чай среди гор. По пути посетите Millennium Elephant Foundation или приют слонов Пиннавела, а затем зайдите в Храм Зуба Будды, где ежедневно проходят церемонии пуджи вокруг почитаемой реликвии зуба Будды. Посещение действующей чайной фабрики и плантации показывает, как всемирно известный цейлонский чай скручивают, окисляют и дегустируют, а озеро Канди и верхняя смотровая площадка предлагают открыточные панорамы города у озера. Дополнительная остановка в саду трав и специй знакомит с корицей, перцем и аюрведическими растениями, если позволяет время. Sundown Tours берёт на себя входные билеты, дорожные сборы и частный транспорт с кондиционером и англоговорящим водителем-гидом. Обед можно устроить гибко у озера или в плантационном бунгало. Идеально для путешественников, проживающих в Коломбо, Негомбо или Канди, которые хотят глубже познакомиться с городом без ночёвки в горах.',
    highlights: [
      'Посещение Millennium Elephant Foundation или приюта слонов Пиннавела',
      'Храм Зуба Будды с кандийской архитектурой и видом на озеро',
      'Визит на чайную фабрику и плантацию с дегустацией свежего цейлонского чая',
      'Прогулка у озера Канди и фотостопы на панорамной смотровой площадке города',
      'Дополнительный сад трав и специй с демонстрацией местного выращивания',
    ],
    whoIsFor:
      'Подходит парам и семьям, интересующимся культурой, а также тем, кто впервые посещает Шри-Ланку и хочет увидеть главное в Канди за один день без самостоятельных поездок на горных автобусах или тук-туках.',
    bestTimeNote:
      'Доступен круглый год; в Культурном треугольнике суше всего с июня по сентябрь, а с декабря по март смотровые площадки Канди дают более чистый обзор. Вечернюю пуджу в Храме Зуба стоит спланировать заранее уточните это при бронировании.',
    faq: [
      {
        q: 'Пиннавела или Millennium Elephant Foundation куда мы едем?',
        a: 'Мы выбираем в зависимости от места посадки и расписания. Пиннавела удобна для маршрутов из Коломбо; Millennium Elephant Foundation подходит, если вы уже находитесь рядом с Канди. Сообщите нам своё предпочтение при бронировании.',
      },
      {
        q: 'Включён ли вход в Храм Зуба Будды?',
        a: 'Да указанные входные билеты, дорожные сборы и парковка включены. Для посещения храма требуется скромная одежда, закрывающая плечи и колени.',
      },
      {
        q: 'Может ли этот однодневный тур начаться в Коломбо и вернуться туда же вечером?',
        a: 'Да, безусловно. Рассчитывайте на 3–4 часа пути в каждую сторону с остановками у слонов и в чайном крае, разбивающими дорогу. Ранний выезд позволяет провести больше времени в Храме Зуба.',
      },
    ],
    days: [
      {
        title: 'Маршрут тура в Канди',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Маршрут тура в Канди',
            description:
              'Понаблюдайте за слонами вблизи и узнайте об уходе за ними и природоохранной работе.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Millennium Elephant Foundation / Приют слонов Пиннавела',
            description:
              'Понаблюдайте за слонами вблизи и узнайте об уходе за ними и природоохранной работе.',
          },
          {
            type: 'Активность',
            title: 'Храм Священного Зуба Будды',
            description:
              'Посетите самый священный буддийский храм Шри-Ланки, расположенный в самом центре Канди.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Чайная фабрика и плантация',
            description:
              'Побывайте на чайной фабрике и плантации и узнайте, как производится всемирно известный цейлонский чай.',
          },
          {
            type: 'Экскурсия',
            title: 'Озеро Канди и смотровая площадка',
            description:
              'Полюбуйтесь живописными видами города Канди и отдохните у живописного озера Канди.',
          },
          {
            type: 'Дополнительное посещение',
            title: 'Сад трав и специй',
            description:
              'Дополнительное посещение сада трав и специй, чтобы узнать больше о шри-ланкийских специях и травах.',
          },
        ],
      },
    ],
  },
};
