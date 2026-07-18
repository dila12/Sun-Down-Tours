import type { TourContent } from './localize';

/**
 * Sigiriya one-day tour (pageId: sigiriyaDay).
 * English is the full BaseTour; other locales overlay text by index.
 */
export const SIGIRIYA_DAY: TourContent = {
  en: {
    title: 'Sri Lanka Sigiriya One Day Tour',
    description:
      'Discover Sri Lanka’s cultural and natural heritage on a full-day tour to Sigiriya, including temples, rock climbing, and wildlife.',
    duration: 'One Day',
    persons: '20 Persons',
    filecode: 'sigiriya-day-tour',
    overview: `
    This one-day tour to Sigiriya offers a perfect blend of culture, adventure, and wildlife.
    Begin with a visit to the Golden Cave Temple in Dambulla, followed by climbing either
    Sigiriya Rock Fortress or Pidurangala Rock for breathtaking views.
    End the day with an exciting wild elephant safari, making this tour ideal for nature
    and history lovers.
      `,
    tourType: 'Day Tour',

    itinerary: [
      {
        day: 1,
        title: 'Sigiriya Day Tour Itinerary',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Sigiriya Day Tour Itinerary',
              icon: 'fa-car',
              color: '#f39c12',
            },
            description:
              'Pickup from your hotel in a comfortable private air-conditioned vehicle.',
            image: 'assets/img/onedayTour/Sigiriya/1.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Golden Cave Temple – Dambulla',
              icon: 'fa-gopuram',
              color: '#c0392b',
            },
            description:
              'Visit the UNESCO World Heritage Dambulla Cave Temple, famous for its ancient murals and Buddha statues.',
            image: 'assets/img/onedayTour/Sigiriya/6.jpg',
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
            image: 'assets/img/onedayTour/Sigiriya/7.jpg',
          },
          {
            type: 'Adventure',
            title: {
              title: 'Sigiriya or Pidurangala Rock Climbing',
              icon: 'fa-mountain',
              color: '#f39c12',
            },
            description:
              'Climb either the iconic Sigiriya Rock Fortress or Pidurangala Rock for stunning panoramic views.',
            image: 'assets/img/onedayTour/Sigiriya/8.jpg',
          },
          {
            type: 'Safari',
            title: {
              title: 'Wild Elephant Safari',
              icon: 'fa-paw',
              color: '#27ae60',
            },
            description:
              'Experience an exciting wild elephant safari in a national park (jeep & entrance tickets not included).',
            image: 'assets/img/onedayTour/Sigiriya/9.jpg',
          },
        ],
      },
    ],

    includes: [
      'All attraction entrance fees (excluding safari entrance & jeep)',
      'Highway tickets and parking fees',
      'English speaking professional driver',
      'Private air-conditioned vehicle',
      'Lunch',
    ],
    excludes: ['Safari entrance tickets and jeep', 'Personal expenses'],
  },

  de: {
    title: 'Sri Lanka Sigiriya Tagestour',
    description:
      'Entdecken Sie Sri Lankas kulturelles und natürliches Erbe auf einer Tagestour nach Sigiriya, inklusive Tempel, Felsklettern und Tierwelt.',
    duration: '1 Tag',
    persons: '1–20 Reisende',
    tourType: 'Tagestour',
    overview:
      'Diese Tagestour nach Sigiriya bietet die perfekte Mischung aus Kultur, Abenteuer und Tierwelt. Beginnen Sie mit einem Besuch des Goldenen Höhlentempels in Dambulla, gefolgt von der Besteigung der Felsenfestung Sigiriya oder des Pidurangala-Felsens für atemberaubende Ausblicke. Beenden Sie den Tag mit einer spannenden Wildelefanten-Safari – ideal für Natur- und Geschichtsliebhaber.',
    includes: [
      'Alle Eintrittsgebühren für Attraktionen (ohne Safari-Eintritt & Jeep)',
      'Autobahngebühren und Parkgebühren',
      'Englischsprachiger professioneller Fahrer',
      'Klimatisiertes Privatfahrzeug',
      'Mittagessen',
    ],
    excludes: ['Safari-Eintrittstickets und Jeep', 'Persönliche Ausgaben'],
    days: [
      {
        title: 'Sigiriya Tagestour Reiseroute',
        activities: [
          {
            type: 'Geführte Tour',
            title: 'Sigiriya Tagestour Reiseroute',
            description:
              'Abholung von Ihrem Hotel in einem komfortablen, klimatisierten Privatfahrzeug.',
          },
          {
            type: 'Geführte Tour',
            title: 'Goldener Höhlentempel – Dambulla',
            description:
              'Besuchen Sie den UNESCO-Welterbe-Höhlentempel von Dambulla, berühmt für seine antiken Wandmalereien und Buddha-Statuen.',
          },
          {
            type: 'Aktivität',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den heiligsten buddhistischen Tempel Sri Lankas im Herzen von Kandy.',
          },
          {
            type: 'Abenteuer',
            title: 'Besteigung von Sigiriya oder Pidurangala',
            description:
              'Besteigen Sie entweder die ikonische Felsenfestung Sigiriya oder den Pidurangala-Felsen für atemberaubende Panoramablicke.',
          },
          {
            type: 'Safari',
            title: 'Wildelefanten-Safari',
            description:
              'Erleben Sie eine spannende Wildelefanten-Safari in einem Nationalpark (Jeep & Eintrittsgebühren nicht inklusive).',
          },
        ],
      },
    ],
  },

  fr: {
    title: 'Excursion à Sigiriya au Sri Lanka',
    description:
      'Découvrez le patrimoine culturel et naturel du Sri Lanka lors d’une excursion d’une journée à Sigiriya, avec temples, ascension de rocher et faune sauvage.',
    duration: '1 jour',
    persons: '1–20 voyageurs',
    tourType: 'Excursion d’une journée',
    overview:
      'Cette excursion d’une journée à Sigiriya offre un mélange parfait de culture, d’aventure et de faune sauvage. Commencez par la visite du Temple d’or des grottes de Dambulla, puis grimpez soit à la forteresse rocheuse de Sigiriya, soit au rocher de Pidurangala pour des vues à couper le souffle. Terminez la journée par un safari passionnant à la recherche d’éléphants sauvages – idéal pour les amoureux de nature et d’histoire.',
    includes: [
      'Tous les frais d’entrée aux sites (hors entrée safari & jeep)',
      'Péages d’autoroute et frais de parking',
      'Chauffeur professionnel anglophone',
      'Véhicule privé climatisé',
      'Déjeuner',
    ],
    excludes: ['Billets d’entrée safari et jeep', 'Dépenses personnelles'],
    days: [
      {
        title: 'Itinéraire de l’excursion à Sigiriya',
        activities: [
          {
            type: 'Visite guidée',
            title: 'Itinéraire de l’excursion à Sigiriya',
            description:
              'Prise en charge à votre hôtel dans un confortable véhicule privé climatisé.',
          },
          {
            type: 'Visite guidée',
            title: 'Temple d’or des grottes – Dambulla',
            description:
              'Visitez le temple des grottes de Dambulla, classé au patrimoine mondial de l’UNESCO, célèbre pour ses fresques anciennes et ses statues de Bouddha.',
          },
          {
            type: 'Activité',
            title: 'Temple de la Dent sacrée',
            description:
              'Visitez le temple bouddhiste le plus sacré du Sri Lanka, situé au cœur de Kandy.',
          },
          {
            type: 'Aventure',
            title: 'Ascension de Sigiriya ou du rocher de Pidurangala',
            description:
              'Grimpez à l’emblématique forteresse rocheuse de Sigiriya ou au rocher de Pidurangala pour des vues panoramiques à couper le souffle.',
          },
          {
            type: 'Safari',
            title: 'Safari aux éléphants sauvages',
            description:
              'Vivez un safari passionnant à la recherche d’éléphants sauvages dans un parc national (jeep et billets d’entrée non inclus).',
          },
        ],
      },
    ],
  },

  it: {
    title: 'Escursione di un giorno a Sigiriya, Sri Lanka',
    description:
      'Scopri il patrimonio culturale e naturale dello Sri Lanka in un tour di un giorno a Sigiriya, tra templi, arrampicate sulla roccia e fauna selvatica.',
    duration: '1 giorno',
    persons: '1–20 viaggiatori',
    tourType: 'Tour di un giorno',
    overview:
      'Questo tour di un giorno a Sigiriya offre il perfetto mix di cultura, avventura e fauna selvatica. Inizia con la visita al Tempio d’Oro delle grotte di Dambulla, poi sali alla fortezza rocciosa di Sigiriya oppure alla roccia di Pidurangala per vedute spettacolari. Concludi la giornata con un emozionante safari alla ricerca di elefanti selvatici – ideale per gli amanti della natura e della storia.',
    includes: [
      'Tutti gli ingressi alle attrazioni (escluso ingresso safari e jeep)',
      'Pedaggi autostradali e parcheggi',
      'Autista professionista di lingua inglese',
      'Veicolo privato climatizzato',
      'Pranzo',
    ],
    excludes: ['Biglietti d’ingresso safari e jeep', 'Spese personali'],
    days: [
      {
        title: 'Itinerario dell’escursione a Sigiriya',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Itinerario dell’escursione a Sigiriya',
            description:
              'Prelievo dal tuo hotel con un comodo veicolo privato climatizzato.',
          },
          {
            type: 'Tour guidato',
            title: 'Tempio d’Oro delle Grotte – Dambulla',
            description:
              'Visita il Tempio delle Grotte di Dambulla, Patrimonio dell’Umanità UNESCO, famoso per i suoi antichi murales e le statue del Buddha.',
          },
          {
            type: 'Attività',
            title: 'Tempio del Sacro Dente',
            description:
              'Visita il tempio buddhista più sacro dello Sri Lanka, nel cuore di Kandy.',
          },
          {
            type: 'Avventura',
            title: 'Salita a Sigiriya o alla roccia di Pidurangala',
            description:
              'Sali sull’iconica fortezza rocciosa di Sigiriya oppure sulla roccia di Pidurangala per vedute panoramiche spettacolari.',
          },
          {
            type: 'Safari',
            title: 'Safari degli elefanti selvatici',
            description:
              'Vivi un emozionante safari alla ricerca di elefanti selvatici in un parco nazionale (jeep e biglietti d’ingresso non incluse).',
          },
        ],
      },
    ],
  },

  es: {
    title: 'Excursión de un día a Sigiriya, Sri Lanka',
    description:
      'Descubre el patrimonio cultural y natural de Sri Lanka en un tour de un día a Sigiriya, con templos, escalada en roca y fauna salvaje.',
    duration: '1 día',
    persons: '1–20 viajeros',
    tourType: 'Excursión de un día',
    overview:
      'Este tour de un día a Sigiriya ofrece la combinación perfecta de cultura, aventura y fauna salvaje. Comienza con una visita al Templo Dorado de las cuevas de Dambulla, seguido de la subida a la Fortaleza Rocosa de Sigiriya o a la Roca de Pidurangala para disfrutar de vistas impresionantes. Termina el día con un emocionante safari en busca de elefantes salvajes, ideal para los amantes de la naturaleza y la historia.',
    includes: [
      'Todas las entradas a las atracciones (sin incluir entrada al safari ni jeep)',
      'Peajes de autopista y aparcamiento',
      'Chófer profesional de habla inglesa',
      'Vehículo privado con aire acondicionado',
      'Almuerzo',
    ],
    excludes: ['Entradas del safari y jeep', 'Gastos personales'],
    days: [
      {
        title: 'Itinerario de la excursión a Sigiriya',
        activities: [
          {
            type: 'Tour guiado',
            title: 'Itinerario de la excursión a Sigiriya',
            description:
              'Recogida en tu hotel en un cómodo vehículo privado con aire acondicionado.',
          },
          {
            type: 'Tour guiado',
            title: 'Templo Dorado de las Cuevas – Dambulla',
            description:
              'Visita el Templo de las Cuevas de Dambulla, Patrimonio de la Humanidad, famoso por sus murales antiguos y estatuas de Buda.',
          },
          {
            type: 'Actividad',
            title: 'Templo del Diente Sagrado',
            description:
              'Visita el templo budista más sagrado de Sri Lanka, en el corazón de Kandy.',
          },
          {
            type: 'Aventura',
            title: 'Subida a Sigiriya o a la Roca de Pidurangala',
            description:
              'Sube a la icónica Fortaleza Rocosa de Sigiriya o a la Roca de Pidurangala para disfrutar de vistas panorámicas espectaculares.',
          },
          {
            type: 'Safari',
            title: 'Safari de elefantes salvajes',
            description:
              'Vive un emocionante safari en busca de elefantes salvajes en un parque nacional (jeep y entradas no incluidas).',
          },
        ],
      },
    ],
  },

  pl: {
    title: 'Jednodniowa wycieczka do Sigiriyi, Sri Lanka',
    description:
      'Odkryj dziedzictwo kulturowe i naturalne Sri Lanki podczas jednodniowej wycieczki do Sigiriyi, ze świątyniami, wspinaczką na skałę i dziką przyrodą.',
    duration: '1 dzień',
    persons: '1–20 podróżnych',
    tourType: 'Wycieczka jednodniowa',
    overview:
      'Ta jednodniowa wycieczka do Sigiriyi to idealne połączenie kultury, przygody i dzikiej przyrody. Zacznij od wizyty w Złotej Świątyni Jaskiniowej w Dambulli, a następnie wejdź na Skalną Fortecę Sigiriya lub na skałę Pidurangala, by zobaczyć zapierające dech widoki. Zakończ dzień emocjonującym safari w poszukiwaniu dzikich słoni – idealne dla miłośników natury i historii.',
    includes: [
      'Wszystkie bilety wstępu do atrakcji (bez wstępu na safari i jeepa)',
      'Opłaty autostradowe i parkingowe',
      'Profesjonalny kierowca mówiący po angielsku',
      'Klimatyzowany prywatny pojazd',
      'Obiad',
    ],
    excludes: ['Bilety wstępu na safari i jeep', 'Wydatki osobiste'],
    days: [
      {
        title: 'Plan wycieczki do Sigiriyi',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Plan wycieczki do Sigiriyi',
            description:
              'Odbiór z hotelu w komfortowym, klimatyzowanym prywatnym pojeździe.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Złota Świątynia Jaskiniowa – Dambulla',
            description:
              'Odwiedź Świątynię Jaskiniową w Dambulli, obiekt UNESCO, znany ze starożytnych fresków i posągów Buddy.',
          },
          {
            type: 'Aktywność',
            title: 'Świątynia Świętego Zęba Buddy',
            description:
              'Odwiedź najświętszą świątynię buddyjską Sri Lanki, położoną w samym centrum Kandy.',
          },
          {
            type: 'Przygoda',
            title: 'Wejście na Sigiriyę lub skałę Pidurangala',
            description:
              'Wejdź na ikoniczną Skalną Fortecę Sigiriya lub na skałę Pidurangala, by zobaczyć zapierające dech panoramy.',
          },
          {
            type: 'Safari',
            title: 'Safari z dzikimi słoniami',
            description:
              'Przeżyj emocjonujące safari w poszukiwaniu dzikich słoni w parku narodowym (jeep i bilety wstępu nie są wliczone).',
          },
        ],
      },
    ],
  },

  ru: {
    title: 'Однодневный тур в Сигирию, Шри-Ланка',
    description:
      'Откройте для себя культурное и природное наследие Шри-Ланки в однодневном туре в Сигирию, включающем храмы, восхождение на скалу и дикую природу.',
    duration: '1 день',
    persons: '1–20 путешественников',
    tourType: 'Однодневный тур',
    overview:
      'Этот однодневный тур в Сигирию предлагает идеальное сочетание культуры, приключений и дикой природы. Начните с посещения Золотого пещерного храма в Дамбулле, затем взойдите на скальную крепость Сигирия или на скалу Пидурангала ради захватывающих видов. Завершите день увлекательным сафари в поисках диких слонов — идеально для любителей природы и истории.',
    includes: [
      'Все входные билеты на достопримечательности (без входа на сафари и джипа)',
      'Дорожные сборы и парковка',
      'Профессиональный англоговорящий водитель',
      'Частный автомобиль с кондиционером',
      'Обед',
    ],
    excludes: ['Входные билеты на сафари и джип', 'Личные расходы'],
    days: [
      {
        title: 'Маршрут тура в Сигирию',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Маршрут тура в Сигирию',
            description:
              'Трансфер из отеля на комфортабельном частном автомобиле с кондиционером.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Золотой пещерный храм – Дамбулла',
            description:
              'Посетите пещерный храм Дамбуллы, объект Всемирного наследия ЮНЕСКО, знаменитый своими древними фресками и статуями Будды.',
          },
          {
            type: 'Активность',
            title: 'Храм Священного Зуба Будды',
            description:
              'Посетите самый священный буддийский храм Шри-Ланки, расположенный в самом центре Канди.',
          },
          {
            type: 'Приключение',
            title: 'Восхождение на Сигирию или скалу Пидурангала',
            description:
              'Взойдите на легендарную скальную крепость Сигирия или на скалу Пидурангала ради захватывающих панорамных видов.',
          },
          {
            type: 'Сафари',
            title: 'Сафари с дикими слонами',
            description:
              'Отправьтесь в увлекательное сафари в поисках диких слонов в национальном парке (джип и входные билеты не включены).',
          },
        ],
      },
    ],
  },
};
