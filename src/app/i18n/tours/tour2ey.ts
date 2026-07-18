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
    excludes: ['Entrance & Activity Fees', 'Food & Drinks', 'Accommodation (Can be arranged upon request)'],
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
    excludes: ['Eintritts- & Aktivitätsgebühren', 'Speisen & Getränke', 'Unterkunft (auf Anfrage arrangierbar)'],
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
    excludes: ['Entrées & frais d’activités', 'Repas & boissons', 'Hébergement (sur demande)'],
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
    excludes: ['Ingressi e costi delle attività', 'Cibo e bevande', 'Alloggio (disponibile su richiesta)'],
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
    excludes: ['Entradas y costes de actividades', 'Comidas y bebidas', 'Alojamiento (disponible a petición)'],
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
    excludes: ['Bilety wstępu i opłaty za atrakcje', 'Jedzenie i napoje', 'Zakwaterowanie (możliwe na życzenie)'],
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
    excludes: ['Входные билеты и оплата активностей', 'Еда и напитки', 'Проживание (по запросу)'],
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
              'Посетите прекрасный водопад Равана — один из самых знаменитых водопадов Шри-Ланки, расположенный рядом с Эллой.',
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
              'В парке Яла обитают 44 вида млекопитающих и 215 видов птиц. Среди самых известных обитателей — самая большая в мире концентрация леопардов.',
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
