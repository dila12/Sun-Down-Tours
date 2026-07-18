import type { TourContent } from './localize';

/**
 * Galle one-day tour (pageId: galleDay).
 * English is the full BaseTour; other locales overlay text by index.
 */
export const GALLE_DAY: TourContent = {
  en: {
    title: 'Sri Lanka Galle One Day Tour',
    description:
      'Enjoy a full-day guided tour to Galle with scenic coastal attractions, cultural landmarks, and memorable experiences.',
    duration: 'one Day',
    persons: '20 Persons',
    filecode: 'galle-day-tour',
    overview: `This full-day guided tour to Galle offers a perfect mix of nature, history, and culture.
You will visit the famous Sea Turtle Hatchery, explore the historic Galle Dutch Fort,
enjoy a relaxing Bentota River boat ride, and learn about Sri Lanka’s history at the
Tsunami Memorial and Moonstone Mine Centre.
Ideal for couples, families, and small groups looking for a comfortable and enriching day tour.`,
    tourType: 'Day Tour',

    itinerary: [
      {
        day: 1,
        title: 'Galle Day Tour Itinerary',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Galle Day Tour Itinerary',
              icon: 'fa-hiking',
              color: '#f39c12',
            },
            description:
              'Visit a sea turtle hatchery and learn about conservation efforts while observing different turtle species.',
            image: 'assets/img/onedayTour/Galle/6.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Galle Dutch Fort',
              icon: 'fa-Galle Dutch Fort',
              color: '#8e44ad',
            },
            description:
              'Explore the UNESCO World Heritage site of Galle Dutch Fort, rich in colonial history and stunning ocean views.',
            image: 'assets/img/onedayTour/Galle/5.jpg',
          },
          {
            type: 'Activity',
            title: {
              title: 'Bentota River Boat Ride',
              icon: 'fa-ship',
              color: '#2980b9',
            },
            description:
              'Enjoy a relaxing boat ride along the Bentota River surrounded by mangroves and wildlife.',
            image: 'assets/img/onedayTour/Galle/3.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Tsunami Memorial',
              icon: 'fa-monument',
              color: '#c0392b',
            },
            description:
              'Visit the Tsunami Memorial and learn about the 2004 tsunami and its impact on Sri Lanka.',
            image: 'assets/img/onedayTour/Galle/8.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Moonstone Mine Centre',
              icon: 'fa-gem',
              color: '#f39c12',
            },
            description:
              'Discover how Sri Lanka’s famous moonstones are mined and processed.',
            image: 'assets/img/onedayTour/Galle/9.jpg',
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
    title: 'Sri Lanka Galle Tagestour',
    description:
      'Genießen Sie eine geführte Tagestour nach Galle mit malerischen Küstenattraktionen, kulturellen Sehenswürdigkeiten und unvergesslichen Erlebnissen.',
    duration: '1 Tag',
    persons: '1–20 Reisende',
    tourType: 'Tagestour',
    overview:
      'Diese geführte Tagestour nach Galle bietet die perfekte Mischung aus Natur, Geschichte und Kultur. Sie besuchen die berühmte Meeresschildkröten-Aufzuchtstation, erkunden das historische Galle Dutch Fort, genießen eine entspannte Bootsfahrt auf dem Bentota-Fluss und erfahren mehr über die Geschichte Sri Lankas im Tsunami-Denkmal und im Moonstone Mine Centre. Ideal für Paare, Familien und kleine Gruppen, die einen komfortablen und bereichernden Tagesausflug suchen.',
    includes: [
      'Alle Eintrittsgebühren für Attraktionen',
      'Autobahngebühren und Parkgebühren',
      'Englischsprachiger professioneller Fahrer',
      'Klimatisiertes Privatfahrzeug',
    ],
    excludes: ['Speisen & Getränke', 'Eintritts- & Aktivitätsgebühren'],
    days: [
      {
        title: 'Galle Tagestour Reiseroute',
        activities: [
          {
            type: 'Geführte Tour',
            title: 'Meeresschildkröten-Aufzuchtstation',
            description:
              'Besuchen Sie eine Meeresschildkröten-Aufzuchtstation und erfahren Sie mehr über Schutzprojekte, während Sie verschiedene Schildkrötenarten beobachten.',
          },
          {
            type: 'Geführte Tour',
            title: 'Galle Dutch Fort',
            description:
              'Erkunden Sie die UNESCO-Welterbestätte Galle Dutch Fort, reich an Kolonialgeschichte und mit atemberaubenden Meerblicken.',
          },
          {
            type: 'Aktivität',
            title: 'Bootsfahrt auf dem Bentota-Fluss',
            description:
              'Genießen Sie eine entspannte Bootsfahrt auf dem Bentota-Fluss, umgeben von Mangroven und Tierwelt.',
          },
          {
            type: 'Geführte Tour',
            title: 'Tsunami-Denkmal',
            description:
              'Besuchen Sie das Tsunami-Denkmal und erfahren Sie mehr über den Tsunami von 2004 und seine Auswirkungen auf Sri Lanka.',
          },
          {
            type: 'Geführte Tour',
            title: 'Moonstone Mine Centre',
            description:
              'Entdecken Sie, wie Sri Lankas berühmte Mondsteine abgebaut und verarbeitet werden.',
          },
        ],
      },
    ],
  },

  fr: {
    title: 'Excursion à Galle au Sri Lanka',
    description:
      'Profitez d’une excursion guidée d’une journée à Galle avec de superbes sites côtiers, des monuments culturels et des expériences mémorables.',
    duration: '1 jour',
    persons: '1–20 voyageurs',
    tourType: 'Excursion d’une journée',
    overview:
      'Cette excursion guidée d’une journée à Galle offre un mélange parfait de nature, d’histoire et de culture. Vous visiterez la célèbre écloserie de tortues marines, explorerez le fort historique de Galle (Dutch Fort), profiterez d’une balade en bateau reposante sur la rivière Bentota et découvrirez l’histoire du Sri Lanka au Mémorial du tsunami et au Moonstone Mine Centre. Idéal pour les couples, les familles et les petits groupes en quête d’une journée confortable et enrichissante.',
    includes: [
      'Tous les frais d’entrée aux sites',
      'Péages d’autoroute et frais de parking',
      'Chauffeur professionnel anglophone',
      'Véhicule privé climatisé',
    ],
    excludes: ['Repas & boissons', 'Entrées & frais d’activités'],
    days: [
      {
        title: 'Itinéraire de l’excursion à Galle',
        activities: [
          {
            type: 'Visite guidée',
            title: 'Écloserie de tortues marines',
            description:
              'Visitez une écloserie de tortues marines et découvrez les efforts de conservation en observant différentes espèces de tortues.',
          },
          {
            type: 'Visite guidée',
            title: 'Fort de Galle (Dutch Fort)',
            description:
              'Explorez le site classé au patrimoine mondial de l’UNESCO du fort de Galle, riche en histoire coloniale et offrant de superbes vues sur l’océan.',
          },
          {
            type: 'Activité',
            title: 'Balade en bateau sur la rivière Bentota',
            description:
              'Profitez d’une balade en bateau reposante le long de la rivière Bentota, entourée de mangroves et de faune sauvage.',
          },
          {
            type: 'Visite guidée',
            title: 'Mémorial du tsunami',
            description:
              'Visitez le Mémorial du tsunami et découvrez le tsunami de 2004 et son impact sur le Sri Lanka.',
          },
          {
            type: 'Visite guidée',
            title: 'Moonstone Mine Centre',
            description:
              'Découvrez comment les célèbres pierres de lune du Sri Lanka sont extraites et traitées.',
          },
        ],
      },
    ],
  },

  it: {
    title: 'Escursione di un giorno a Galle, Sri Lanka',
    description:
      'Vivi un’escursione guidata di un giorno a Galle tra affascinanti scorci costieri, siti culturali ed esperienze memorabili.',
    duration: '1 giorno',
    persons: '1–20 viaggiatori',
    tourType: 'Tour di un giorno',
    overview:
      'Questa escursione guidata di un giorno a Galle offre il mix perfetto di natura, storia e cultura. Visiterai il famoso vivaio di tartarughe marine, esplorerai il Forte Olandese di Galle, farai una rilassante gita in barca sul fiume Bentota e scoprirai la storia dello Sri Lanka al Memoriale dello Tsunami e al Moonstone Mine Centre. Ideale per coppie, famiglie e piccoli gruppi in cerca di una giornata confortevole e ricca di scoperte.',
    includes: [
      'Tutti gli ingressi alle attrazioni',
      'Pedaggi autostradali e parcheggi',
      'Autista professionista di lingua inglese',
      'Veicolo privato climatizzato',
    ],
    excludes: ['Cibo e bevande', 'Ingressi e costi delle attività'],
    days: [
      {
        title: 'Itinerario dell’escursione a Galle',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Vivaio di tartarughe marine',
            description:
              'Visita un vivaio di tartarughe marine e scopri gli sforzi di conservazione osservando diverse specie di tartarughe.',
          },
          {
            type: 'Tour guidato',
            title: 'Forte Olandese di Galle',
            description:
              'Esplora il sito Patrimonio dell’Umanità UNESCO del Forte Olandese di Galle, ricco di storia coloniale e con vedute spettacolari sull’oceano.',
          },
          {
            type: 'Attività',
            title: 'Gita in barca sul fiume Bentota',
            description:
              'Goditi una rilassante gita in barca lungo il fiume Bentota, circondato da mangrovie e fauna selvatica.',
          },
          {
            type: 'Tour guidato',
            title: 'Memoriale dello Tsunami',
            description:
              'Visita il Memoriale dello Tsunami e scopri lo tsunami del 2004 e il suo impatto sullo Sri Lanka.',
          },
          {
            type: 'Tour guidato',
            title: 'Moonstone Mine Centre',
            description:
              'Scopri come vengono estratte e lavorate le famose pietre di luna dello Sri Lanka.',
          },
        ],
      },
    ],
  },

  es: {
    title: 'Excursión de un día a Galle, Sri Lanka',
    description:
      'Disfruta de una excursión guiada de un día a Galle con atractivos parajes costeros, hitos culturales y experiencias memorables.',
    duration: '1 día',
    persons: '1–20 viajeros',
    tourType: 'Excursión de un día',
    overview:
      'Esta excursión guiada de un día a Galle ofrece una mezcla perfecta de naturaleza, historia y cultura. Visitarás el famoso vivero de tortugas marinas, explorarás el histórico Fuerte Holandés de Galle, disfrutarás de un relajante paseo en barco por el río Bentota y conocerás la historia de Sri Lanka en el Memorial del Tsunami y el Moonstone Mine Centre. Ideal para parejas, familias y grupos pequeños que buscan un día cómodo y enriquecedor.',
    includes: [
      'Todas las entradas a las atracciones',
      'Peajes de autopista y aparcamiento',
      'Chófer profesional de habla inglesa',
      'Vehículo privado con aire acondicionado',
    ],
    excludes: ['Comidas y bebidas', 'Entradas y costes de actividades'],
    days: [
      {
        title: 'Itinerario de la excursión a Galle',
        activities: [
          {
            type: 'Tour guiado',
            title: 'Vivero de tortugas marinas',
            description:
              'Visita un vivero de tortugas marinas y conoce los esfuerzos de conservación mientras observas distintas especies de tortugas.',
          },
          {
            type: 'Tour guiado',
            title: 'Fuerte Holandés de Galle',
            description:
              'Explora el sitio Patrimonio de la Humanidad del Fuerte Holandés de Galle, rico en historia colonial y con vistas espectaculares al océano.',
          },
          {
            type: 'Actividad',
            title: 'Paseo en barco por el río Bentota',
            description:
              'Disfruta de un relajante paseo en barco por el río Bentota, rodeado de manglares y fauna salvaje.',
          },
          {
            type: 'Tour guiado',
            title: 'Memorial del Tsunami',
            description:
              'Visita el Memorial del Tsunami y conoce el tsunami de 2004 y su impacto en Sri Lanka.',
          },
          {
            type: 'Tour guiado',
            title: 'Moonstone Mine Centre',
            description:
              'Descubre cómo se extraen y procesan las famosas piedras lunares de Sri Lanka.',
          },
        ],
      },
    ],
  },

  pl: {
    title: 'Jednodniowa wycieczka do Galle, Sri Lanka',
    description:
      'Zafunduj sobie całodniową wycieczkę z przewodnikiem do Galle, pełną nadmorskich atrakcji, kulturowych zabytków i niezapomnianych wrażeń.',
    duration: '1 dzień',
    persons: '1–20 podróżnych',
    tourType: 'Wycieczka jednodniowa',
    overview:
      'Ta całodniowa wycieczka z przewodnikiem do Galle to idealne połączenie natury, historii i kultury. Odwiedzisz słynne wylęgarnie żółwi morskich, zwiedzisz historyczny Holenderski Fort w Galle, odbędziesz relaksujący rejs łodzią po rzece Bentota oraz poznasz historię Sri Lanki w Pomniku Tsunami i Moonstone Mine Centre. Idealna dla par, rodzin i małych grup szukających komfortowego i wartościowego dnia.',
    includes: [
      'Wszystkie bilety wstępu do atrakcji',
      'Opłaty autostradowe i parkingowe',
      'Profesjonalny kierowca mówiący po angielsku',
      'Klimatyzowany prywatny pojazd',
    ],
    excludes: ['Jedzenie i napoje', 'Bilety wstępu i opłaty za atrakcje'],
    days: [
      {
        title: 'Plan wycieczki do Galle',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Wylęgarnia żółwi morskich',
            description:
              'Odwiedź wylęgarnię żółwi morskich i poznaj działania na rzecz ich ochrony, obserwując różne gatunki żółwi.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Holenderski Fort w Galle',
            description:
              'Zwiedź obiekt UNESCO – Holenderski Fort w Galle, bogaty w historię kolonialną i z zapierającymi dech widokami na ocean.',
          },
          {
            type: 'Aktywność',
            title: 'Rejs łodzią po rzece Bentota',
            description:
              'Zrelaksuj się podczas rejsu łodzią po rzece Bentota, otoczonej lasami namorzynowymi i dziką przyrodą.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Pomnik Tsunami',
            description:
              'Odwiedź Pomnik Tsunami i poznaj historię tsunami z 2004 roku oraz jego wpływ na Sri Lankę.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Moonstone Mine Centre',
            description:
              'Zobacz, jak wydobywa się i przetwarza słynne sri-lankijskie kamienie księżycowe.',
          },
        ],
      },
    ],
  },

  ru: {
    title: 'Однодневный тур в Галле, Шри-Ланка',
    description:
      'Насладитесь однодневным туром с гидом в Галле с живописными прибрежными достопримечательностями, культурными памятниками и незабываемыми впечатлениями.',
    duration: '1 день',
    persons: '1–20 путешественников',
    tourType: 'Однодневный тур',
    overview:
      'Этот однодневный тур с гидом в Галле — идеальное сочетание природы, истории и культуры. Вы посетите знаменитую станцию по спасению морских черепах, исследуете исторический Голландский форт Галле, насладитесь спокойной прогулкой на лодке по реке Бентота и узнаете об истории Шри-Ланки у Мемориала цунами и в центре Moonstone Mine Centre. Идеально для пар, семей и небольших групп, которые ищут комфортный и познавательный день.',
    includes: [
      'Все входные билеты на достопримечательности',
      'Дорожные сборы и парковка',
      'Профессиональный англоговорящий водитель',
      'Частный автомобиль с кондиционером',
    ],
    excludes: ['Еда и напитки', 'Входные билеты и оплата активностей'],
    days: [
      {
        title: 'Маршрут тура в Галле',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Станция по спасению морских черепах',
            description:
              'Посетите станцию по спасению морских черепах и узнайте о работе по их охране, наблюдая за разными видами черепах.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Голландский форт Галле',
            description:
              'Исследуйте объект Всемирного наследия ЮНЕСКО — Голландский форт Галле, богатый колониальной историей и потрясающими видами на океан.',
          },
          {
            type: 'Активность',
            title: 'Прогулка на лодке по реке Бентота',
            description:
              'Насладитесь спокойной прогулкой на лодке по реке Бентота среди мангровых зарослей и дикой природы.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Мемориал цунами',
            description:
              'Посетите Мемориал цунами и узнайте о цунами 2004 года и его последствиях для Шри-Ланки.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Moonstone Mine Centre',
            description:
              'Узнайте, как добывают и обрабатывают знаменитые шри-ланкийские лунные камни.',
          },
        ],
      },
    ],
  },
};
