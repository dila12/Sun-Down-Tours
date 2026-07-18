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
