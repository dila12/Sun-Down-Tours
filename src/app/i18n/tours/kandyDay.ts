import type { TourContent } from './localize';

/**
 * Kandy one day tour (pageId: kandyDay).
 * English is the full BaseTour; other locales overlay text by index.
 */
export const KANDY_DAY: TourContent = {
  en: {
    title: 'Sri Lanka Kandy One Day Tour',
    description:
      'Experience the cultural heart of Sri Lanka with a full day guided tour to Kandy, including elephants, temples, tea, and scenic views.',
    duration: 'One Day',
    persons: '20 Persons',
    filecode: 'kandy-day-tour',
    overview: `
            This one day trip to Kandy takes you through Sri Lanka’s cultural capital.
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
              'Explore a tea factory and plantation and learn how world famous Ceylon tea is produced.',
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
      'Private air conditioned vehicle',
    ],
    excludes: ['Food & Drinks', 'Entrance & Activities Fees'],
    seoIntro:
      'Kandy day tours distil Sri Lanka\'s last royal capital into a single cultural immersion elephants, sacred Buddhist ritual and Ceylon tea in the hills. Visit the Millennium Elephant Foundation or Pinnawala Elephant Orphanage en route, then enter the Temple of the Sacred Tooth Relic where daily puja ceremonies surround Buddha\'s revered tooth relic. A working tea factory and plantation visit explains how world famous Ceylon tea is rolled, oxidised and tasted, while Kandy Lake and the upper viewpoint deliver postcard panoramas of the lake city. An optional spice and herbal garden stop introduces cinnamon, pepper and ayurvedic plants if time allows. Sundown Tours covers attraction entrances, highway tolls and private air conditioned transport with an English speaking driver guide. Lunch is flexible near the lake or at a plantation bungalow. Perfect for travellers based in Colombo, Negombo or Kandy hotels who want depth without an overnight in the hills.',
    highlights: [
      'Millennium Elephant Foundation or Pinnawala Elephant Orphanage visit',
      'Temple of the Sacred Tooth Relic with Kandyan architecture and lake views',
      'Tea factory and plantation tour with fresh Ceylon tea tasting',
      'Kandy Lake stroll and scenic city viewpoint photo stops',
      'Optional herbal and spice garden with local cultivation demo',
    ],
    whoIsFor:
      'Suited to culture focused couples, families and first time visitors who want Kandy\'s essentials in one day without navigating hill country buses or tuk tuk touts alone.',
    bestTimeNote:
      'year round; the Cultural Triangle is driest June to September while December to March brings clearer views from Kandy\'s upper viewpoints. Evening puja at the Tooth Temple is worth timing ask us when booking.',
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
        a: 'Absolutely. Expect a 3 to 4 hour each way drive with stops at elephants and tea country breaking the journey. An early departure maximises time at the Tooth Temple.',
      },
    ],
  },

  de: {
    title: 'Sri Lanka Kandy Tagestour',
    description:
      'Erleben Sie das kulturelle Herz Sri Lankas mit einer gefuhrten Tagestour nach Kandy, inklusive Elefanten, Tempeln, Tee und malerischen Ausblicken.',
    duration: '1 Tag',
    persons: '1 to 20 Reisende',
    tourType: 'Tagestour',
    overview:
      'Diese eintagige Reise nach Kandy fuhrt Sie durch die kulturelle Hauptstadt Sri Lankas. Besuchen Sie die Millennium Elephant Foundation oder das Pinnawala Elephant Orphanage, erkunden Sie den heiligen Zahntempel, geniessen Sie den Besuch einer Teefabrik und Plantage, entspannen Sie am Kandy See mit Aussichtspunkt und machen Sie optional einen Abstecher zu einem Krauter und Gewurzgarten. Perfekt fur Reisende, die Kultur, Natur und Tradition an einem einzigen Tag erleben mochten.',
    includes: [
      'Alle Eintrittsgebuhren fur Attraktionen',
      'Autobahngebuhren und Parkgebuhren',
      'Englischsprachiger professioneller Fahrer',
      'Klimatisiertes Privatfahrzeug',
    ],
    excludes: ['Speisen & Getranke', 'Eintritts und Aktivitatsgebuhren'],
    seoIntro:
      'Tagestouren nach Kandy bundeln Sri Lankas letzte Konigsstadt in ein einziges kulturelles Erlebnis  Elefanten, heilige buddhistische Rituale und Ceylon Tee in den Bergen. Besuchen Sie auf dem Weg die Millennium Elephant Foundation oder das Pinnawala Elephant Orphanage und betreten Sie anschliessend den Zahntempel, in dem taglich Puja Zeremonien um die verehrte Zahnreliquie Buddhas stattfinden. Der Besuch einer aktiven Teefabrik und Plantage zeigt, wie der weltberuhmte Ceylon Tee gerollt, oxidiert und verkostet wird, wahrend der Kandy See und der obere Aussichtspunkt malerische Panoramen der Seestadt bieten. Ein optionaler Halt in einem Gewurz und Krautergarten stellt bei ausreichender Zeit Zimt, Pfeffer und ayurvedische Pflanzen vor. Sundown Tours ubernimmt Eintrittsgebuhren, Autobahngebuhren und den privaten klimatisierten Transport mit einem englischsprachigen Fahrer Guide. Das Mittagessen ist flexibel am See oder in einem Plantagen Bungalow moglich. Perfekt fur Reisende mit Standort in Colombo, Negombo oder Kandy, die Tiefe erleben mochten, ohne in den Bergen zu ubernachten.',
    highlights: [
      'Besuch der Millennium Elephant Foundation oder des Pinnawala Elephant Orphanage',
      'Zahntempel mit kandyanischer Architektur und Seeblick',
      'Teefabrik und Plantagenbesuch mit frischer Ceylon Tee Verkostung',
      'Spaziergang am Kandy See und Fotostopps am malerischen Stadt Aussichtspunkt',
      'Optionaler Krauter und Gewurzgarten mit Vorfuhrung des lokalen Anbaus',
    ],
    whoIsFor:
      'Geeignet fur kulturinteressierte Paare, Familien und Erstbesucher, die das Wesentliche von Kandy an einem Tag erleben mochten, ohne allein mit Bergland Bussen oder Tuk Tuk Anbietern zurechtkommen zu mussen.',
    bestTimeNote:
      'Ganzjahrig moglich; im Kulturellen Dreieck ist es von Juni bis September am trockensten, wahrend von Dezember bis Marz die Aussichtspunkte uber Kandy die klarste Sicht bieten. Die abendliche Puja im Zahntempel ist sehenswert  fragen Sie uns bei der Buchung danach.',
    faq: [
      {
        q: 'Pinnawala oder Millennium Elephant Foundation  welchen Ort besuchen wir?',
        a: 'Wir wahlen je nach Abholort und Zeitplan. Pinnawala passt gut zu Routen ab Colombo; das Millennium Elephant Foundation eignet sich, wenn Sie bereits in der Nahe von Kandy sind. Teilen Sie uns Ihre Praferenz bei der Buchung mit.',
      },
      {
        q: 'Ist der Eintritt zum Zahntempel enthalten?',
        a: 'Ja  die aufgefuhrten Eintrittsgebuhren, Autobahngebuhren und Parkgebuhren sind enthalten. Fur den Tempelbesuch ist bescheidene Kleidung mit bedeckten Schultern und Knien erforderlich.',
      },
      {
        q: 'Kann diese Tagestour ab Colombo starten und am selben Abend zuruckkehren?',
        a: 'Ja, problemlos. Rechnen Sie mit 3 to 4 Stunden Fahrzeit pro Strecke, unterbrochen durch Stopps bei den Elefanten und im Teeland. Eine fruhe Abfahrt maximiert die Zeit am Zahntempel.',
      },
    ],
    days: [
      {
        title: 'Kandy Tagestour Reiseroute',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Kandy Tagestour Reiseroute',
            description:
              'Beobachten Sie Elefanten aus nachster Nahe und erfahren Sie mehr uber Elefantenpflege und Artenschutz.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Millennium Elephant Foundation / Pinnawala Elephant Orphanage',
            description:
              'Beobachten Sie Elefanten aus nachster Nahe und erfahren Sie mehr uber Elefantenpflege und Artenschutz.',
          },
          {
            type: 'Aktivitat',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den heiligsten buddhistischen Tempel Sri Lankas im Herzen von Kandy.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Teefabrik & Teeplantage',
            description:
              'Erkunden Sie eine Teefabrik und Plantage und erfahren Sie, wie der weltberuhmte Ceylon Tee hergestellt wird.',
          },
          {
            type: 'Besichtigung',
            title: 'Kandy See & Aussichtspunkt',
            description:
              'Geniessen Sie malerische Ausblicke auf die Stadt Kandy und entspannen Sie am pittoresken Kandy See.',
          },
          {
            type: 'Optionaler Besuch',
            title: 'Krauter und Gewurzgarten',
            description:
              'Optionaler Besuch eines Krauter und Gewurzgartens, um mehr uber sri lankische Gewurze und Heilkrauter zu erfahren.',
          },
        ],
      },
    ],
  },

  fr: {
    title: 'Excursion a Kandy au Sri Lanka',
    description:
      'Decouvrez le coeur culturel du Sri Lanka lors d’une excursion guidee d’une journee a Kandy, avec elephants, temples, the et vues panoramiques.',
    duration: '1 jour',
    persons: '1 to 20 voyageurs',
    tourType: 'Excursion d’une journee',
    overview:
      'Cette excursion d’une journee a Kandy vous emmene a travers la capitale culturelle du Sri Lanka. Visitez la Millennium Elephant Foundation ou l’orphelinat d’elephants de Pinnawala, explorez le sacre Temple de la Dent, profitez de la visite d’une fabrique et d’une plantation de the, detendez vous au lac de Kandy et a son point de vue, puis faites une halte optionnelle dans un jardin d’epices et de plantes. Ideal pour les voyageurs en quete de culture, de nature et de traditions en une seule journee.',
    includes: [
      'Tous les frais d’entree aux sites',
      'Peages d’autoroute et frais de parking',
      'Chauffeur professionnel anglophone',
      'Vehicule prive climatise',
    ],
    excludes: ['Repas & boissons', 'Entrees & frais d’activites'],
    seoIntro:
      'Les excursions d’une journee a Kandy resument la derniere capitale royale du Sri Lanka en une seule immersion culturelle : elephants, rituel bouddhiste sacre et the de Ceylan dans les collines. Visitez en chemin la Millennium Elephant Foundation ou l’orphelinat d’elephants de Pinnawala, puis entrez dans le Temple de la Dent sacree, ou des ceremonies de puja quotidiennes entourent la relique veneree de la dent de Bouddha. La visite d’une fabrique et d’une plantation de the en activite explique comment le celebre the de Ceylan est roule, oxyde et deguste, tandis que le lac de Kandy et son point de vue superieur offrent des panoramas de carte postale sur la ville lacustre. Une halte optionnelle dans un jardin d’epices et de plantes permet de decouvrir cannelle, poivre et plantes ayurvediques si le temps le permet. Sundown Tours prend en charge les droits d’entree, les peages et le transport prive climatise avec un chauffeur guide anglophone. Le dejeuner est flexible, pres du lac ou dans un bungalow de plantation. Ideal pour les voyageurs bases a Colombo, Negombo ou Kandy souhaitant approfondir leur decouverte sans nuitee dans les collines.',
    highlights: [
      'Visite de la Millennium Elephant Foundation ou de l’orphelinat d’elephants de Pinnawala',
      'Temple de la Dent sacree avec architecture kandyenne et vue sur le lac',
      'Visite d’une fabrique et d’une plantation de the avec degustation de the de Ceylan frais',
      'Promenade au lac de Kandy et arrets photo au point de vue panoramique sur la ville',
      'Jardin d’epices et de plantes optionnel avec demonstration de culture locale',
    ],
    whoIsFor:
      'Convient aux couples et familles passionnes de culture ainsi qu’aux visiteurs venant pour la premiere fois, qui souhaitent decouvrir l’essentiel de Kandy en une journee sans naviguer seuls dans les bus des collines ou avec les chauffeurs de tuk tuk.',
    bestTimeNote:
      'Praticable toute l’annee ; le Triangle Culturel est le plus sec de juin a septembre, tandis que de decembre a mars les points de vue de Kandy offrent une vue plus degagee. La puja du soir au Temple de la Dent vaut le detour demandez nous d’en tenir compte lors de la reservation.',
    faq: [
      {
        q: 'Pinnawala ou Millennium Elephant Foundation lequel visitons nous ?',
        a: 'Nous choisissons selon votre point de depart et l’horaire. Pinnawala convient aux itineraires depuis Colombo ; la Millennium Elephant Foundation est adaptee si vous etes deja pres de Kandy. Indiquez nous votre preference lors de la reservation.',
      },
      {
        q: 'L’entree au Temple de la Dent sacree est elle incluse ?',
        a: 'Oui les droits d’entree des sites listes, les peages et le stationnement sont couverts. Une tenue modeste couvrant epaules et genoux est requise pour entrer dans le temple.',
      },
      {
        q: 'Cette excursion peut elle partir de Colombo et revenir le meme soir ?',
        a: 'Absolument. Prevoyez 3 a 4 heures de route dans chaque sens, avec des arrets chez les elephants et dans les plantations de the pour couper le trajet. Un depart matinal maximise le temps passe au Temple de la Dent.',
      },
    ],
    days: [
      {
        title: 'Itineraire de l’excursion a Kandy',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Itineraire de l’excursion a Kandy',
            description:
              'Observez des elephants de pres et decouvrez les soins qui leur sont apportes ainsi que les efforts de conservation.',
          },
          {
            type: 'Visite guidee',
            title: 'Millennium Elephant Foundation / Orphelinat d’elephants de Pinnawala',
            description:
              'Observez des elephants de pres et decouvrez les soins qui leur sont apportes ainsi que les efforts de conservation.',
          },
          {
            type: 'Activite',
            title: 'Temple de la Dent sacree',
            description:
              'Visitez le temple bouddhiste le plus sacre du Sri Lanka, situe au coeur de Kandy.',
          },
          {
            type: 'Visite guidee',
            title: 'Fabrique et plantation de the',
            description:
              'Explorez une fabrique et une plantation de the et decouvrez comment est produit le celebre the de Ceylan.',
          },
          {
            type: 'Visite touristique',
            title: 'Lac de Kandy & point de vue',
            description:
              'Profitez de vues panoramiques sur la ville de Kandy et detendez vous pres du pittoresque lac de Kandy.',
          },
          {
            type: 'Visite optionnelle',
            title: 'Jardin d’epices et de plantes',
            description:
              'Visite optionnelle d’un jardin d’epices et de plantes pour decouvrir les epices et herbes sri lankaises.',
          },
        ],
      },
    ],
  },

  it: {
    title: 'Escursione di un giorno a Kandy, Sri Lanka',
    description:
      'Vivi il cuore culturale dello Sri Lanka con un’escursione guidata di un giorno a Kandy, tra elefanti, templi, te e panorami suggestivi.',
    duration: '1 giorno',
    persons: '1 to 20 viaggiatori',
    tourType: 'Tour di un giorno',
    overview:
      'Questo tour di un giorno a Kandy ti porta attraverso la capitale culturale dello Sri Lanka. Visita la Millennium Elephant Foundation o l’orfanotrofio degli elefanti di Pinnawala, esplora il sacro Tempio del Dente, goditi la visita a una fabbrica e piantagione di te, rilassati al Lago di Kandy e al suo punto panoramico, con una sosta opzionale in un giardino di erbe e spezie. Perfetto per i viaggiatori in cerca di cultura, natura e tradizione in un’unica giornata.',
    includes: [
      'Tutti gli ingressi alle attrazioni',
      'Pedaggi autostradali e parcheggi',
      'Autista professionista di lingua inglese',
      'Veicolo privato climatizzato',
    ],
    excludes: ['Cibo e bevande', 'Ingressi e costi delle attivita'],
    seoIntro:
      'Le escursioni di un giorno a Kandy racchiudono l’ultima capitale reale dello Sri Lanka in un’unica immersione culturale: elefanti, rituali buddhisti sacri e te di Ceylon sulle colline. Visitate lungo il percorso la Millennium Elephant Foundation o l’orfanotrofio degli elefanti di Pinnawala, poi entrate nel Tempio del Sacro Dente, dove ogni giorno si svolgono cerimonie di puja attorno alla venerata reliquia del dente del Buddha. La visita a una fabbrica e piantagione di te in funzione spiega come il famoso te di Ceylon viene arrotolato, ossidato e degustato, mentre il Lago di Kandy e il punto panoramico superiore offrono viste da cartolina sulla citta lacustre. Una sosta opzionale in un giardino di erbe e spezie permette di conoscere cannella, pepe e piante ayurvediche, tempo permettendo. Sundown Tours copre gli ingressi alle attrazioni, i pedaggi autostradali e il trasporto privato climatizzato con un autista guida di lingua inglese. Il pranzo e flessibile, vicino al lago o in un bungalow di piantagione. Perfetta per i viaggiatori con base a Colombo, Negombo o Kandy che vogliono approfondire senza pernottare sulle colline.',
    highlights: [
      'Visita alla Millennium Elephant Foundation o all’orfanotrofio degli elefanti di Pinnawala',
      'Tempio del Sacro Dente con architettura kandiana e vista sul lago',
      'Visita a una fabbrica e piantagione di te con degustazione di te di Ceylon fresco',
      'Passeggiata al Lago di Kandy e soste fotografiche al punto panoramico sulla citta',
      'Giardino di erbe e spezie opzionale con dimostrazione della coltivazione locale',
    ],
    whoIsFor:
      'Adatta a coppie e famiglie appassionate di cultura e a chi visita per la prima volta, che vogliono scoprire l’essenziale di Kandy in un giorno senza doversi orientare da soli tra bus di montagna o tuk tuk.',
    bestTimeNote:
      'Disponibile tutto l’anno; il Triangolo Culturale e piu secco da giugno a settembre, mentre da dicembre a marzo i punti panoramici di Kandy offrono vedute piu nitide. La puja serale al Tempio del Dente merita di essere programmata chiedeteci di tenerne conto al momento della prenotazione.',
    faq: [
      {
        q: 'Pinnawala o Millennium Elephant Foundation: quale visitiamo?',
        a: 'Scegliamo in base al punto di ritiro e agli orari. Pinnawala e adatta agli itinerari da Colombo; la Millennium Elephant Foundation e comoda se siete gia vicini a Kandy. Comunicateci la vostra preferenza al momento della prenotazione.',
      },
      {
        q: 'L’ingresso al Tempio del Sacro Dente e incluso?',
        a: 'Si gli ingressi alle attrazioni indicate, i pedaggi autostradali e il parcheggio sono coperti. Per l’ingresso al tempio e richiesto un abbigliamento decoroso che copra spalle e ginocchia.',
      },
      {
        q: 'Questa escursione puo partire da Colombo e tornare la stessa sera?',
        a: 'Assolutamente si. Prevedete 3-4 ore di viaggio per tratta, con soste dagli elefanti e nelle zone del te a interrompere il percorso. Una partenza mattutina massimizza il tempo al Tempio del Dente.',
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
            type: 'Attivita',
            title: 'Tempio del Sacro Dente',
            description:
              'Visita il tempio buddhista piu sacro dello Sri Lanka, nel cuore di Kandy.',
          },
          {
            type: 'Tour guidato',
            title: 'Fabbrica e piantagione di te',
            description:
              'Esplora una fabbrica e una piantagione di te e scopri come nasce il celebre te di Ceylon.',
          },
          {
            type: 'Visita turistica',
            title: 'Lago di Kandy & punto panoramico',
            description:
              'Goditi vedute suggestive sulla citta di Kandy e rilassati vicino al pittoresco Lago di Kandy.',
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
    title: 'Excursion de un dia a Kandy, Sri Lanka',
    description:
      'Descubre el corazon cultural de Sri Lanka con una excursion guiada de un dia a Kandy, con elefantes, templos, te y vistas panoramicas.',
    duration: '1 dia',
    persons: '1 to 20 viajeros',
    tourType: 'Excursion de un dia',
    overview:
      'Este viaje de un dia a Kandy te lleva a traves de la capital cultural de Sri Lanka. Visita la Millennium Elephant Foundation o el orfanato de elefantes de Pinnawala, explora el sagrado Templo del Diente, disfruta de la visita a una fabrica y plantacion de te, relajate en el Lago Kandy y su mirador, y haz una parada opcional en un jardin de hierbas y especias. Perfecto para viajeros que buscan cultura, naturaleza y tradicion en un solo dia.',
    includes: [
      'Todas las entradas a las atracciones',
      'Peajes de autopista y aparcamiento',
      'Chofer profesional de habla inglesa',
      'Vehiculo privado con aire acondicionado',
    ],
    excludes: ['Comidas y bebidas', 'Entradas y costes de actividades'],
    seoIntro:
      'Las excursiones de un dia a Kandy condensan la ultima capital real de Sri Lanka en una sola inmersion cultural: elefantes, ritual budista sagrado y te de Ceilan en las colinas. Visite en el camino la Millennium Elephant Foundation o el orfanato de elefantes de Pinnawala, y luego entre en el Templo del Diente Sagrado, donde a diario se celebran ceremonias de puja alrededor de la venerada reliquia del diente de Buda. La visita a una fabrica y plantacion de te en funcionamiento explica como se enrolla, oxida y cata el famoso te de Ceilan, mientras que el Lago Kandy y el mirador superior ofrecen panoramicas de postal de la ciudad lacustre. Una parada opcional en un jardin de hierbas y especias presenta canela, pimienta y plantas ayurvedicas si el tiempo lo permite. Sundown Tours cubre las entradas a las atracciones, los peajes y el transporte privado con aire acondicionado con un chofer guia de habla inglesa. El almuerzo es flexible, cerca del lago o en un bungalow de plantacion. Perfecta para viajeros alojados en Colombo, Negombo o Kandy que desean profundizar sin pasar la noche en las colinas.',
    highlights: [
      'Visita a la Millennium Elephant Foundation o al orfanato de elefantes de Pinnawala',
      'Templo del Diente Sagrado con arquitectura kandiana y vistas al lago',
      'Visita a una fabrica y plantacion de te con degustacion de te de Ceilan fresco',
      'Paseo por el Lago Kandy y paradas fotograficas en el mirador panoramico de la ciudad',
      'Jardin de hierbas y especias opcional con demostracion de cultivo local',
    ],
    whoIsFor:
      'Adecuada para parejas y familias interesadas en la cultura y para quienes visitan por primera vez, que desean conocer lo esencial de Kandy en un dia sin tener que orientarse solos entre autobuses de montana o mototaxis.',
    bestTimeNote:
      'Disponible todo el ano; el Triangulo Cultural es mas seco de junio a septiembre, mientras que de diciembre a marzo los miradores de Kandy ofrecen vistas mas despejadas. La puja vespertina en el Templo del Diente merece planificarse preguntenos al reservar.',
    faq: [
      {
        q: 'Visitamos Pinnawala o la Millennium Elephant Foundation?',
        a: 'Elegimos segun su punto de recogida y el horario. Pinnawala es adecuada para rutas desde Colombo; la Millennium Elephant Foundation conviene si ya esta cerca de Kandy. Indiquenos su preferencia al reservar.',
      },
      {
        q: 'Esta incluida la entrada al Templo del Diente Sagrado?',
        a: 'Si las entradas a las atracciones indicadas, los peajes y el aparcamiento estan cubiertos. Se requiere ropa modesta que cubra hombros y rodillas para entrar al templo.',
      },
      {
        q: 'Puede esta excursion salir de Colombo y regresar la misma noche?',
        a: 'Sin duda. Cuente con 3-4 horas de trayecto en cada sentido, con paradas en la zona de elefantes y de te que rompen el viaje. Una salida temprana maximiza el tiempo en el Templo del Diente.',
      },
    ],
    days: [
      {
        title: 'Itinerario de la excursion a Kandy',
        activities: [
          {
            type: 'Tour guiado',
            title: 'Itinerario de la excursion a Kandy',
            description:
              'Observa a los elefantes de cerca y conoce su cuidado y los esfuerzos de conservacion.',
          },
          {
            type: 'Tour guiado',
            title: 'Millennium Elephant Foundation / Orfanato de elefantes de Pinnawala',
            description:
              'Observa a los elefantes de cerca y conoce su cuidado y los esfuerzos de conservacion.',
          },
          {
            type: 'Actividad',
            title: 'Templo del Diente Sagrado',
            description:
              'Visita el templo budista mas sagrado de Sri Lanka, en el corazon de Kandy.',
          },
          {
            type: 'Tour guiado',
            title: 'Fabrica y plantacion de te',
            description:
              'Explora una fabrica y plantacion de te y descubre como se elabora el famoso te de Ceilan.',
          },
          {
            type: 'Turismo',
            title: 'Lago Kandy y mirador',
            description:
              'Disfruta de vistas panoramicas de la ciudad de Kandy y relajate junto al pintoresco Lago Kandy.',
          },
          {
            type: 'Visita opcional',
            title: 'Jardin de hierbas y especias',
            description:
              'Visita opcional a un jardin de hierbas y especias para descubrir las especias y hierbas tipicas de Sri Lanka.',
          },
        ],
      },
    ],
  },

  pl: {
    title: 'Jednodniowa wycieczka do Kandy, Sri Lanka',
    description:
      'Poznaj kulturalne serce Sri Lanki podczas calodniowej wycieczki z przewodnikiem do Kandy, ze sloniami, swiatyniami, herbata i widokami.',
    duration: '1 dzien',
    persons: '1 to 20 podroznych',
    tourType: 'Wycieczka jednodniowa',
    overview:
      'Ta jednodniowa wycieczka do Kandy prowadzi przez kulturalna stolice Sri Lanki. Odwiedzisz Millennium Elephant Foundation lub sierociniec sloni w Pinnawali, zwiedzisz swieta Swiatynie Zeba Buddy, odbedziesz wizyte w fabryce i na plantacji herbaty, odpoczniesz nad Jeziorem Kandy przy punkcie widokowym, a opcjonalnie zajrzysz do ogrodu ziolowo przyprawowego. Idealna dla podroznych szukajacych kultury, natury i tradycji w jednym dniu.',
    includes: [
      'Wszystkie bilety wstepu do atrakcji',
      'Oplaty autostradowe i parkingowe',
      'Profesjonalny kierowca mowiacy po angielsku',
      'Klimatyzowany prywatny pojazd',
    ],
    excludes: ['Jedzenie i napoje', 'Bilety wstepu i oplaty za atrakcje'],
    seoIntro:
      'Jednodniowe wycieczki do Kandy skupiaja ostatnia krolewska stolice Sri Lanki w jednym kulturowym doswiadczeniu  slonie, swiety buddyjski rytual i cejlonska herbata w gorach. Po drodze odwiedzicie Millennium Elephant Foundation lub sierociniec sloni w Pinnawali, a nastepnie wejdziecie do Swiatyni Zeba Buddy, gdzie codziennie odbywaja sie ceremonie puja wokol czczonej relikwii zeba Buddy. Wizyta w dzialajacej fabryce i na plantacji herbaty pokazuje, jak slynna cejlonska herbata jest zwijana, poddawana oksydacji i degustowana, a Jezioro Kandy oraz gorny punkt widokowy oferuja widokowkowe panoramy miasta nad jeziorem. Opcjonalny przystanek w ogrodzie ziolowo przyprawowym pozwala  jesli czas pozwoli  poznac cynamon, pieprz i rosliny ajurwedyjskie. Sundown Tours pokrywa bilety wstepu, oplaty autostradowe i prywatny klimatyzowany transport z anglojezycznym kierowca przewodnikiem. Lunch mozna zjesc elastycznie nad jeziorem lub w bungalowie na plantacji. Idealna dla podroznych zatrzymujacych sie w Colombo, Negombo lub Kandy, ktorzy chca glebiej poznac miasto bez noclegu w gorach.',
    highlights: [
      'Wizyta w Millennium Elephant Foundation lub sierocincu sloni w Pinnawali',
      'Swiatynia Zeba Buddy z kandyjska architektura i widokiem na jezioro',
      'Wizyta w fabryce i na plantacji herbaty z degustacja swiezej cejlonskiej herbaty',
      'Spacer nad Jeziorem Kandy i przystanki fotograficzne na panoramicznym punkcie widokowym miasta',
      'Opcjonalny ogrod ziolowo przyprawowy z prezentacja lokalnej uprawy',
    ],
    whoIsFor:
      'Odpowiednia dla par i rodzin zainteresowanych kultura oraz osob odwiedzajacych Sri Lanke po raz pierwszy, ktore chca poznac najwazniejsze miejsca Kandy w jeden dzien, bez samodzielnego poruszania sie gorskimi autobusami czy tuk tukami.',
    bestTimeNote:
      'Dostepna przez caly rok; Trojkat Kulturowy jest najsuchszy od czerwca do wrzesnia, natomiast od grudnia do marca punkty widokowe Kandy oferuja wyrazniejsze widoki. Wieczorna puja w Swiatyni Zeba jest warta zaplanowania  zapytajcie nas o to przy rezerwacji.',
    faq: [
      {
        q: 'Odwiedzamy Pinnawale czy Millennium Elephant Foundation?',
        a: 'Wybieramy w zaleznosci od miejsca odbioru i harmonogramu. Pinnawala pasuje do trasy z Colombo; Millennium Elephant Foundation sprawdza sie, jesli jestescie juz w poblizu Kandy. Podajcie nam swoja preferencje przy rezerwacji.',
      },
      {
        q: 'Czy wstep do Swiatyni Zeba Buddy jest wliczony w cene?',
        a: 'Tak  wymienione bilety wstepu, oplaty autostradowe i parking sa wliczone. Do wejscia do swiatyni wymagany jest skromny stroj zakrywajacy ramiona i kolana.',
      },
      {
        q: 'Czy ta wycieczka moze zaczynac sie w Colombo i wracac tego samego wieczoru?',
        a: 'Zdecydowanie tak. Liczcie sie z 3 to 4 godzinami jazdy w kazda strone, z przystankami u sloni i w krainie herbaty przerywajacymi podroz. Wczesny wyjazd pozwala maksymalnie wykorzystac czas w Swiatyni Zeba.',
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
              'Obserwuj slonie z bliska i poznaj zasady opieki nad nimi oraz dzialania na rzecz ich ochrony.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Millennium Elephant Foundation / Sierociniec sloni w Pinnawali',
            description:
              'Obserwuj slonie z bliska i poznaj zasady opieki nad nimi oraz dzialania na rzecz ich ochrony.',
          },
          {
            type: 'Aktywnosc',
            title: 'Swiatynia Swietego Zeba Buddy',
            description:
              'Odwiedz najswietsza swiatynie buddyjska Sri Lanki, polozona w samym centrum Kandy.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Fabryka i plantacja herbaty',
            description:
              'Zwiedz fabryke i plantacje herbaty i poznaj proces produkcji slynnej herbaty cejlonskiej.',
          },
          {
            type: 'Zwiedzanie',
            title: 'Jezioro Kandy i punkt widokowy',
            description:
              'Podziwiaj piekne widoki na miasto Kandy i odpocznij nad malowniczym Jeziorem Kandy.',
          },
          {
            type: 'Wizyta opcjonalna',
            title: 'Ogrod ziolowo przyprawowy',
            description:
              'Opcjonalna wizyta w ogrodzie ziolowo przyprawowym, aby poznac sri lankijskie przyprawy i ziola.',
          },
        ],
      },
    ],
  },

  ru: {
    title: 'Однодневный тур в Канди, Шри Ланка',
    description:
      'Познакомьтесь с культурным сердцем Шри Ланки в однодневном туре с гидом в Канди, включающем слонов, храмы, чай и живописные виды.',
    duration: '1 день',
    persons: '1 to 20 путешественников',
    tourType: 'Однодневный тур',
    overview:
      'Эта однодневная поездка в Канди познакомит вас с культурной столицей Шри Ланки. Посетите Millennium Elephant Foundation или приют слонов Пиннавела, побывайте в священном Храме Зуба Будды, насладитесь визитом на чайную фабрику и плантацию, отдохните у озера Канди со смотровой площадкой и по желанию заглянете в сад трав и специй. Идеально для путешественников, ищущих культуру, природу и традиции за один день.',
    includes: [
      'Все входные билеты на достопримечательности',
      'Дорожные сборы и парковка',
      'Профессиональный англоговорящий водитель',
      'Частный автомобиль с кондиционером',
    ],
    excludes: ['Еда и напитки', 'Входные билеты и оплата активностей'],
    seoIntro:
      'Однодневные туры в Канди объединяют последнюю королевскую столицу Шри Ланки в одно культурное погружение слоны, священный буддийский ритуал и цейлонский чай среди гор. По пути посетите Millennium Elephant Foundation или приют слонов Пиннавела, а затем зайдите в Храм Зуба Будды, где ежедневно проходят церемонии пуджи вокруг почитаемой реликвии зуба Будды. Посещение действующей чайной фабрики и плантации показывает, как всемирно известный цейлонский чай скручивают, окисляют и дегустируют, а озеро Канди и верхняя смотровая площадка предлагают открыточные панорамы города у озера. Дополнительная остановка в саду трав и специй знакомит с корицей, перцем и аюрведическими растениями, если позволяет время. Sundown Tours берёт на себя входные билеты, дорожные сборы и частный транспорт с кондиционером и англоговорящим водителем гидом. Обед можно устроить гибко у озера или в плантационном бунгало. Идеально для путешественников, проживающих в Коломбо, Негомбо или Канди, которые хотят глубже познакомиться с городом без ночёвки в горах.',
    highlights: [
      'Посещение Millennium Elephant Foundation или приюта слонов Пиннавела',
      'Храм Зуба Будды с кандийской архитектурой и видом на озеро',
      'Визит на чайную фабрику и плантацию с дегустацией свежего цейлонского чая',
      'Прогулка у озера Канди и фотостопы на панорамной смотровой площадке города',
      'Дополнительный сад трав и специй с демонстрацией местного выращивания',
    ],
    whoIsFor:
      'Подходит парам и семьям, интересующимся культурой, а также тем, кто впервые посещает Шри Ланку и хочет увидеть главное в Канди за один день без самостоятельных поездок на горных автобусах или тук туках.',
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
        a: 'Да, безусловно. Рассчитывайте на 3 to 4 часа пути в каждую сторону с остановками у слонов и в чайном крае, разбивающими дорогу. Ранний выезд позволяет провести больше времени в Храме Зуба.',
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
              'Посетите самый священный буддийский храм Шри Ланки, расположенный в самом центре Канди.',
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
              'Дополнительное посещение сада трав и специй, чтобы узнать больше о шри ланкийских специях и травах.',
          },
        ],
      },
    ],
  },
  nl: {
    title: 'Sri Lanka Kandy Tagestour',
    description:
      'Erleben Sie das kulturelle Herz Sri Lankas mit einer gefuhrten Tagestour nach Kandy, inklusive Elefanten, Tempeln, Tee und malerischen Ausblicken.',
    duration: '1 Tag',
    persons: '1 to 20 Reisende',
    tourType: 'Tagestour',
    overview:
      'Diese eintagige Reise nach Kandy fuhrt Sie durch die kulturelle Hauptstadt Sri Lankas. Besuchen Sie die Millennium Elephant Foundation oder das Pinnawala Elephant Orphanage, erkunden Sie den heiligen Zahntempel, geniessen Sie den Besuch einer Teefabrik und Plantage, entspannen Sie am Kandy See mit Aussichtspunkt und machen Sie optional einen Abstecher zu einem Krauter und Gewurzgarten. Perfekt fur Reisende, die Kultur, Natur und Tradition an einem einzigen Tag erleben mochten.',
    includes: [
      'Alle Eintrittsgebuhren fur Attraktionen',
      'Autobahngebuhren und Parkgebuhren',
      'Englischsprachiger professioneller Fahrer',
      'Klimatisiertes Privatfahrzeug',
    ],
    excludes: ['Speisen & Getranke', 'Eintritts und Aktivitatsgebuhren'],
    seoIntro:
      'Tagestouren nach Kandy bundeln Sri Lankas letzte Konigsstadt in ein einziges kulturelles Erlebnis  Elefanten, heilige buddhistische Rituale und Ceylon Tee in den Bergen. Besuchen Sie auf dem Weg die Millennium Elephant Foundation oder das Pinnawala Elephant Orphanage und betreten Sie anschliessend den Zahntempel, in dem taglich Puja Zeremonien um die verehrte Zahnreliquie Buddhas stattfinden. Der Besuch einer aktiven Teefabrik und Plantage zeigt, wie der weltberuhmte Ceylon Tee gerollt, oxidiert und verkostet wird, wahrend der Kandy See und der obere Aussichtspunkt malerische Panoramen der Seestadt bieten. Ein optionaler Halt in einem Gewurz und Krautergarten stellt bei ausreichender Zeit Zimt, Pfeffer und ayurvedische Pflanzen vor. Sundown Tours ubernimmt Eintrittsgebuhren, Autobahngebuhren und den privaten klimatisierten Transport mit einem englischsprachigen Fahrer Guide. Das Mittagessen ist flexibel am See oder in einem Plantagen Bungalow moglich. Perfekt fur Reisende mit Standort in Colombo, Negombo oder Kandy, die Tiefe erleben mochten, ohne in den Bergen zu ubernachten.',
    highlights: [
      'Besuch der Millennium Elephant Foundation oder des Pinnawala Elephant Orphanage',
      'Zahntempel mit kandyanischer Architektur und Seeblick',
      'Teefabrik und Plantagenbesuch mit frischer Ceylon Tee Verkostung',
      'Spaziergang am Kandy See und Fotostopps am malerischen Stadt Aussichtspunkt',
      'Optionaler Krauter und Gewurzgarten mit Vorfuhrung des lokalen Anbaus',
    ],
    whoIsFor:
      'Geeignet fur kulturinteressierte Paare, Familien und Erstbesucher, die das Wesentliche von Kandy an einem Tag erleben mochten, ohne allein mit Bergland Bussen oder Tuk Tuk Anbietern zurechtkommen zu mussen.',
    bestTimeNote:
      'Ganzjahrig moglich; im Kulturellen Dreieck ist es von Juni bis September am trockensten, wahrend von Dezember bis Marz die Aussichtspunkte uber Kandy die klarste Sicht bieten. Die abendliche Puja im Zahntempel ist sehenswert  fragen Sie uns bei der Buchung danach.',
    faq: [
      {
        q: 'Pinnawala oder Millennium Elephant Foundation  welchen Ort besuchen wir?',
        a: 'Wir wahlen je nach Abholort und Zeitplan. Pinnawala passt gut zu Routen ab Colombo; das Millennium Elephant Foundation eignet sich, wenn Sie bereits in der Nahe von Kandy sind. Teilen Sie uns Ihre Praferenz bei der Buchung mit.',
      },
      {
        q: 'Ist der Eintritt zum Zahntempel enthalten?',
        a: 'Ja  die aufgefuhrten Eintrittsgebuhren, Autobahngebuhren und Parkgebuhren sind enthalten. Fur den Tempelbesuch ist bescheidene Kleidung mit bedeckten Schultern und Knien erforderlich.',
      },
      {
        q: 'Kann diese Tagestour ab Colombo starten und am selben Abend zuruckkehren?',
        a: 'Ja, problemlos. Rechnen Sie mit 3 to 4 Stunden Fahrzeit pro Strecke, unterbrochen durch Stopps bei den Elefanten und im Teeland. Eine fruhe Abfahrt maximiert die Zeit am Zahntempel.',
      },
    ],
    days: [
      {
        title: 'Kandy Tagestour Reiseroute',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Kandy Tagestour Reiseroute',
            description:
              'Beobachten Sie Elefanten aus nachster Nahe und erfahren Sie mehr uber Elefantenpflege und Artenschutz.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Millennium Elephant Foundation / Pinnawala Elephant Orphanage',
            description:
              'Beobachten Sie Elefanten aus nachster Nahe und erfahren Sie mehr uber Elefantenpflege und Artenschutz.',
          },
          {
            type: 'Aktivitat',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den heiligsten buddhistischen Tempel Sri Lankas im Herzen von Kandy.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Teefabrik & Teeplantage',
            description:
              'Erkunden Sie eine Teefabrik und Plantage und erfahren Sie, wie der weltberuhmte Ceylon Tee hergestellt wird.',
          },
          {
            type: 'Besichtigung',
            title: 'Kandy See & Aussichtspunkt',
            description:
              'Geniessen Sie malerische Ausblicke auf die Stadt Kandy und entspannen Sie am pittoresken Kandy See.',
          },
          {
            type: 'Optionaler Besuch',
            title: 'Krauter und Gewurzgarten',
            description:
              'Optionaler Besuch eines Krauter und Gewurzgartens, um mehr uber sri lankische Gewurze und Heilkrauter zu erfahren.',
          },
        ],
      },
    ],
  }
};
