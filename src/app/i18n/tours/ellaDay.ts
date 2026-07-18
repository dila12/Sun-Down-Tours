import type { TourContent } from './localize';

/**
 * Ella one-day tour (pageId: ellaDay).
 * English is the full BaseTour; other locales overlay text by index.
 */
export const ELLA_DAY: TourContent = {
  en: {
    title: 'Sri Lanka Ella One Day Tour',
    description:
      'Experience the beauty of Ella with one day full of adventure, culture, and relaxation.',
    duration: 'one Day',
    persons: '20 Persons',
    filecode: 'ella-day-tour',
    overview: `Discover the beauty of Sri Lanka with our unforgettable tour, featuring the iconic Ella Nine Arches Bridge, where you can marvel at the scenic train crossing. Visit the Udawalawe Elephant Orphanage to observe rescued elephants up close. Experience the natural splendor of Ravana Falls, one of the island’s most impressive waterfalls. Hike up Little Adam’s Peak for stunning panoramic views, capturing the essence of Sri Lanka’s highlands. Complete your adventure with a mini train ride through Ella’s picturesque landscapes, creating lasting memories of this enchanting journey.`,
    tourType: 'Day Tour',

    itinerary: [
      {
        day: 1,
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Nine Arches Bridge',
              icon: 'fa-hiking',
              color: '#f39c12',
            },
            description:
              'The majestic Nine Arch Bridge is one of the many reasons for that. The glorious Nine Arch Bridge between Ella and Demodara station is one of the engineering marvels in the early 20th century',
            image: 'assets/img/onedayTour/ella/1.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ella Train Trips',
              icon: 'fa-train',
              color: '#063764ff',
            },
            description:
              'Ella train ride is the most beautiful train ride in Sri Lanka, if not in the world! Board the train and experience breathtaking views of lush green tea plantations, mountains, viaducts, valleys etc.',
            image: 'assets/img/onedayTour/ella/3.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Little Adams Peak',
              icon: 'fa-leaf',
              color: '#0f6935ff',
            },
            description:
              'It is 1141 m in height and from the entrance it takes up to 30-45 min for the hike. Views from the summit are incredible. 360 degrees panoramic views.',
            image: 'assets/img/onedayTour/ella/6.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ravana waterfall',
              icon: 'fa-water',
              color: '#8e44ad',
            },
            description:
              'Ravana Falls, one of the widest falls in the country.The falls are quite impressive, and you can climb over some of the rocks to get a closer look.',
            image: 'assets/img/onedayTour/ella/2.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'elephant orphanage udawalawa',
              icon: 'fa-elephant',
              color: '#8e44ad',
            },
            description:
              '4th Stop: You are able to observe an animated group of around 20 or 30 juvenile and teenage pachyderms, who are fed four times a day.',
            image: 'assets/img/onedayTour/ella/7.jpg',
          },
        ],
      },
    ],

    includes: [
      'Air-Conditioned Private Vehicle',
      'English Speaking Professional Driver',
      "Driver's Accommodation & Meals",
      'Pickup & Drop Off',
      'Fuel & Parking Fees',
      '24 Hours Service',
      'Unlimited Mileage/Kilometer for entire round tour',
      'Your Accommodation',
    ],
    excludes: ['Food & Drinks', 'Entrance & Activities Fees'],
  },

  de: {
    title: 'Sri Lanka Ella Tagestour',
    description:
      'Erleben Sie die Schönheit Ellas an einem erlebnisreichen Tag voller Abenteuer, Kultur und Entspannung.',
    duration: '1 Tag',
    persons: '1–20 Reisende',
    tourType: 'Tagestour',
    overview:
      'Entdecken Sie die Schönheit Sri Lankas auf dieser unvergesslichen Tour zur berühmten Nine Arches Bridge in Ella, wo Sie die malerische Zugüberfahrt bestaunen können. Besuchen Sie das Udawalawe Elephant Orphanage, um gerettete Elefanten aus nächster Nähe zu beobachten. Erleben Sie die Naturschönheit der Ravana-Wasserfälle, eines der beeindruckendsten Wasserfälle der Insel. Wandern Sie zum Little Adam’s Peak und genießen Sie einen atemberaubenden Panoramablick über das Bergland Sri Lankas. Krönen Sie Ihr Abenteuer mit einer Minizugfahrt durch die malerische Landschaft von Ella – für bleibende Erinnerungen an diese zauberhafte Reise.',
    includes: [
      'Klimatisiertes Privatfahrzeug',
      'Englischsprachiger professioneller Fahrer',
      'Unterkunft & Verpflegung des Fahrers',
      'Abholung & Rückbringung',
      'Kraftstoff & Parkgebühren',
      '24-Stunden-Service',
      'Unbegrenzte Kilometer für die gesamte Tour',
      'Ihre Unterkunft',
    ],
    excludes: ['Speisen & Getränke', 'Eintritts- & Aktivitätsgebühren'],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Geführte Tour',
            title: 'Nine Arches Bridge',
            description:
              'Die majestätische Nine Arches Bridge ist einer der Hauptgründe dafür. Die imposante Brücke zwischen Ella und Demodara zählt zu den technischen Meisterwerken des frühen 20. Jahrhunderts.',
          },
          {
            type: 'Geführte Tour',
            title: 'Zugfahrt durch Ella',
            description:
              'Die Zugfahrt durch Ella gilt als eine der schönsten Bahnstrecken Sri Lankas – wenn nicht der Welt! Genießen Sie atemberaubende Ausblicke auf üppige Teeplantagen, Berge, Viadukte und Täler.',
          },
          {
            type: 'Geführte Tour',
            title: 'Little Adam’s Peak',
            description:
              'Mit einer Höhe von 1.141 m dauert der Aufstieg vom Eingang aus etwa 30–45 Minuten. Der Ausblick vom Gipfel ist grandios – ein 360-Grad-Panorama.',
          },
          {
            type: 'Geführte Tour',
            title: 'Ravana-Wasserfall',
            description:
              'Die Ravana-Wasserfälle zählen zu den breitesten Wasserfällen des Landes. Sie sind beeindruckend, und Sie können über die Felsen klettern, um sie aus der Nähe zu erleben.',
          },
          {
            type: 'Geführte Tour',
            title: 'Elefanten-Waisenhaus Udawalawe',
            description:
              'Vierter Stopp: Beobachten Sie eine lebendige Gruppe von rund 20 bis 30 jungen Elefanten, die viermal täglich gefüttert werden.',
          },
        ],
      },
    ],
  },

  fr: {
    title: 'Excursion à Ella au Sri Lanka',
    description:
      'Découvrez la beauté d’Ella lors d’une journée complète d’aventure, de culture et de détente.',
    duration: '1 jour',
    persons: '1–20 voyageurs',
    tourType: 'Excursion d’une journée',
    overview:
      'Découvrez la beauté du Sri Lanka avec cette excursion inoubliable au célèbre Nine Arches Bridge d’Ella, où vous admirerez le passage pittoresque du train. Visitez l’orphelinat d’éléphants d’Udawalawe pour observer de près des éléphants sauvés. Découvrez la splendeur naturelle des chutes de Ravana, l’une des plus impressionnantes cascades de l’île. Grimpez au Little Adam’s Peak pour des vues panoramiques à couper le souffle sur les hautes terres du Sri Lanka. Terminez votre aventure par un trajet en mini-train à travers les paysages pittoresques d’Ella, pour des souvenirs inoubliables de ce voyage enchanteur.',
    includes: [
      'Véhicule privé climatisé',
      'Chauffeur professionnel anglophone',
      'Hébergement & repas du chauffeur',
      'Prise en charge & dépose',
      'Carburant & frais de parking',
      'Service 24h/24',
      'Kilométrage illimité pour toute l’excursion',
      'Votre hébergement',
    ],
    excludes: ['Repas & boissons', 'Entrées & frais d’activités'],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Visite guidée',
            title: 'Nine Arches Bridge',
            description:
              'Le majestueux Nine Arches Bridge en est l’une des principales raisons. Ce pont impressionnant entre Ella et Demodara est l’une des prouesses d’ingénierie du début du XXe siècle.',
          },
          {
            type: 'Visite guidée',
            title: 'Trajet en train à Ella',
            description:
              'Le trajet en train à Ella est considéré comme l’un des plus beaux au monde ! Profitez de vues à couper le souffle sur les plantations de thé verdoyantes, les montagnes, les viaducs et les vallées.',
          },
          {
            type: 'Visite guidée',
            title: 'Little Adam’s Peak',
            description:
              'Culminant à 1141 m, l’ascension depuis l’entrée dure entre 30 et 45 minutes. La vue depuis le sommet est incroyable, avec un panorama à 360 degrés.',
          },
          {
            type: 'Visite guidée',
            title: 'Chutes de Ravana',
            description:
              'Les chutes de Ravana comptent parmi les plus larges du pays. Elles sont impressionnantes et vous pouvez grimper sur certains rochers pour les admirer de plus près.',
          },
          {
            type: 'Visite guidée',
            title: 'Orphelinat des éléphants d’Udawalawe',
            description:
              '4ᵉ arrêt : observez un groupe animé d’environ 20 à 30 jeunes éléphants, nourris quatre fois par jour.',
          },
        ],
      },
    ],
  },

  it: {
    title: 'Escursione di un giorno a Ella, Sri Lanka',
    description:
      'Vivi la bellezza di Ella in una giornata intera all’insegna dell’avventura, della cultura e del relax.',
    duration: '1 giorno',
    persons: '1–20 viaggiatori',
    tourType: 'Tour di un giorno',
    overview:
      'Scopri la bellezza dello Sri Lanka con questo tour indimenticabile, che include l’iconico Nine Arches Bridge di Ella, dove potrai ammirare il pittoresco passaggio del treno. Visita l’orfanotrofio degli elefanti di Udawalawe per osservare da vicino gli elefanti salvati. Vivi la meraviglia naturale delle cascate di Ravana, una delle più imponenti dell’isola. Sali al Little Adam’s Peak per una vista panoramica spettacolare sull’altopiano dello Sri Lanka. Concludi la tua avventura con un breve viaggio in treno tra i paesaggi pittoreschi di Ella, per un ricordo indelebile di questo viaggio incantevole.',
    includes: [
      'Veicolo privato climatizzato',
      'Autista professionista di lingua inglese',
      'Vitto e alloggio dell’autista',
      'Prelievo e riaccompagnamento',
      'Carburante e parcheggi',
      'Servizio 24 ore',
      'Chilometraggio illimitato per tutto il tour',
      'Il tuo alloggio',
    ],
    excludes: ['Cibo e bevande', 'Ingressi e costi delle attività'],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Nine Arches Bridge',
            description:
              'Il maestoso Nine Arches Bridge è uno dei motivi principali. Il magnifico ponte tra Ella e Demodara è una delle meraviglie ingegneristiche dei primi anni del XX secolo.',
          },
          {
            type: 'Tour guidato',
            title: 'Viaggio in treno a Ella',
            description:
              'Il viaggio in treno attraverso Ella è considerato uno dei più belli dello Sri Lanka, se non del mondo! Sali a bordo e ammira panorami straordinari tra piantagioni di tè, montagne, viadotti e valli.',
          },
          {
            type: 'Tour guidato',
            title: 'Little Adam’s Peak',
            description:
              'Alto 1.141 metri, richiede dai 30 ai 45 minuti di camminata dall’ingresso. La vista dalla cima è incredibile: un panorama a 360 gradi.',
          },
          {
            type: 'Tour guidato',
            title: 'Cascata di Ravana',
            description:
              'Le cascate di Ravana sono tra le più ampie del paese. Sono davvero suggestive e puoi arrampicarti su alcune rocce per osservarle più da vicino.',
          },
          {
            type: 'Tour guidato',
            title: 'Orfanotrofio degli elefanti di Udawalawe',
            description:
              '4ª tappa: potrai osservare un vivace gruppo di circa 20-30 elefanti giovani, nutriti quattro volte al giorno.',
          },
        ],
      },
    ],
  },

  es: {
    title: 'Excursión de un día a Ella, Sri Lanka',
    description:
      'Disfruta de la belleza de Ella en un día completo lleno de aventura, cultura y relax.',
    duration: '1 día',
    persons: '1–20 viajeros',
    tourType: 'Excursión de un día',
    overview:
      'Descubre la belleza de Sri Lanka con este tour inolvidable, que incluye el icónico Nine Arches Bridge de Ella, donde podrás admirar el pintoresco paso del tren. Visita el orfanato de elefantes de Udawalawe para observar de cerca a elefantes rescatados. Vive el esplendor natural de las cascadas de Ravana, una de las más impresionantes de la isla. Sube al Little Adam’s Peak para disfrutar de vistas panorámicas espectaculares sobre las tierras altas de Sri Lanka. Completa tu aventura con un breve viaje en tren por los pintorescos paisajes de Ella, creando recuerdos inolvidables de este viaje mágico.',
    includes: [
      'Vehículo privado con aire acondicionado',
      'Chófer profesional de habla inglesa',
      'Alojamiento y comidas del chófer',
      'Recogida y regreso',
      'Combustible y aparcamiento',
      'Servicio 24 horas',
      'Kilometraje ilimitado durante todo el tour',
      'Tu alojamiento',
    ],
    excludes: ['Comidas y bebidas', 'Entradas y costes de actividades'],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Tour guiado',
            title: 'Nine Arches Bridge',
            description:
              'El majestuoso Nine Arches Bridge es una de las principales razones. Este imponente puente entre Ella y Demodara es una de las maravillas de la ingeniería de principios del siglo XX.',
          },
          {
            type: 'Tour guiado',
            title: 'Viaje en tren por Ella',
            description:
              'El viaje en tren por Ella es considerado uno de los más bonitos de Sri Lanka, ¡si no del mundo! Sube a bordo y disfruta de vistas espectaculares de plantaciones de té, montañas, viaductos y valles.',
          },
          {
            type: 'Tour guiado',
            title: 'Little Adam’s Peak',
            description:
              'Con 1141 m de altura, la subida desde la entrada dura entre 30 y 45 minutos. Las vistas desde la cima son increíbles, con un panorama de 360 grados.',
          },
          {
            type: 'Tour guiado',
            title: 'Cascada de Ravana',
            description:
              'Las cascadas de Ravana son una de las más anchas del país. Son bastante impresionantes y puedes trepar por algunas rocas para verlas más de cerca.',
          },
          {
            type: 'Tour guiado',
            title: 'Orfanato de elefantes de Udawalawe',
            description:
              '4ª parada: observarás un animado grupo de unos 20 a 30 elefantes jóvenes, alimentados cuatro veces al día.',
          },
        ],
      },
    ],
  },

  pl: {
    title: 'Jednodniowa wycieczka do Elli, Sri Lanka',
    description:
      'Poznaj urok Elli podczas całego dnia pełnego przygód, kultury i relaksu.',
    duration: '1 dzień',
    persons: '1–20 podróżnych',
    tourType: 'Wycieczka jednodniowa',
    overview:
      'Odkryj piękno Sri Lanki podczas tej niezapomnianej wycieczki do słynnego mostu Nine Arches w Elli, gdzie zobaczysz malowniczy przejazd pociągu. Odwiedź sierociniec słoni w Udawalawe, aby z bliska obserwować uratowane słonie. Poczuj naturalny majestat wodospadów Ravana, jednych z najbardziej efektownych na wyspie. Wejdź na Little Adam’s Peak, by zobaczyć zapierającą dech panoramę górskiej krainy Sri Lanki. Zakończ przygodę przejazdem mini pociągiem przez malownicze krajobrazy Elli – na długo zapadające w pamięć wspomnienia tej magicznej podróży.',
    includes: [
      'Klimatyzowany prywatny pojazd',
      'Profesjonalny kierowca mówiący po angielsku',
      'Zakwaterowanie i wyżywienie kierowcy',
      'Odbiór i odwóz',
      'Paliwo i opłaty parkingowe',
      'Obsługa 24 godziny',
      'Nielimitowany kilometraż na całą wycieczkę',
      'Twoje zakwaterowanie',
    ],
    excludes: ['Jedzenie i napoje', 'Bilety wstępu i opłaty za atrakcje'],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Nine Arches Bridge',
            description:
              'Majestatyczny most Nine Arches to jeden z głównych powodów. Ten imponujący most między Ellą i Demodarą to jeden z inżynieryjnych cudów początku XX wieku.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Przejazd pociągiem przez Ellę',
            description:
              'Przejazd pociągiem przez Ellę uznawany jest za jedną z najpiękniejszych tras kolejowych Sri Lanki, jeśli nie świata! Podziwiaj zapierające dech widoki na bujne plantacje herbaty, góry, wiadukty i doliny.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Little Adam’s Peak',
            description:
              'Szczyt ma wysokość 1141 m, a wejście od wejścia zajmuje 30–45 minut. Widoki ze szczytu są niesamowite – panorama 360 stopni.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Wodospad Ravana',
            description:
              'Wodospady Ravana to jedne z najszerszych w kraju. Są bardzo efektowne, a po niektórych skałach można się wspiąć, by zobaczyć je z bliska.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Sierociniec słoni w Udawalawe',
            description:
              'Czwarty przystanek: zobaczysz żywą grupę około 20–30 młodych słoni, karmionych cztery razy dziennie.',
          },
        ],
      },
    ],
  },

  ru: {
    title: 'Однодневный тур в Эллу, Шри-Ланка',
    description:
      'Откройте для себя красоту Эллы за один насыщенный день приключений, культуры и отдыха.',
    duration: '1 день',
    persons: '1–20 путешественников',
    tourType: 'Однодневный тур',
    overview:
      'Откройте для себя красоту Шри-Ланки в этом незабываемом туре к знаменитому мосту Nine Arches в Элле, где вы полюбуетесь живописным проездом поезда. Посетите приют для слонов в Удавалаве, чтобы понаблюдать за спасёнными слонами вблизи. Насладитесь природным великолепием водопадов Равана — одних из самых впечатляющих на острове. Поднимитесь на Little Adam’s Peak ради потрясающих панорамных видов на горную местность Шри-Ланки. Завершите приключение поездкой на мини-поезде через живописные ландшафты Эллы — на память об этом волшебном путешествии.',
    includes: [
      'Частный автомобиль с кондиционером',
      'Профессиональный англоговорящий водитель',
      'Проживание и питание водителя',
      'Встреча и проводы',
      'Топливо и парковка',
      'Обслуживание 24 часа',
      'Неограниченный пробег на весь тур',
      'Ваше проживание',
    ],
    excludes: ['Еда и напитки', 'Входные билеты и оплата активностей'],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Nine Arches Bridge',
            description:
              'Величественный мост Nine Arches — одна из главных причин. Этот впечатляющий мост между Эллой и Демодарой — одно из инженерных чудес начала XX века.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Поездка на поезде через Эллу',
            description:
              'Поездка на поезде через Эллу считается одной из самых красивых в Шри-Ланке, если не в мире! Полюбуйтесь захватывающими видами на пышные чайные плантации, горы, виадуки и долины.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Little Adam’s Peak',
            description:
              'Высота пика составляет 1141 м, подъём от входа занимает 30–45 минут. Виды с вершины невероятны — панорама на 360 градусов.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Водопад Равана',
            description:
              'Водопады Равана — одни из самых широких в стране. Они впечатляют, и вы можете взобраться на камни, чтобы рассмотреть их вблизи.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Приют для слонов в Удавалаве',
            description:
              'Четвёртая остановка: понаблюдайте за оживлённой группой из 20–30 молодых слонов, которых кормят четыре раза в день.',
          },
        ],
      },
    ],
  },
};
