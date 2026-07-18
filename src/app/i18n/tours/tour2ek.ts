import type { TourContent } from './localize';

/**
 * 2-day Ella + Kandy Sri Lanka round tour (id: tour2ek).
 * English is the full BaseTour; locale overlays are authored separately.
 */
export const TOUR2EK: TourContent = {
  en: {
    title: '2 Day Sri Lanka Private Tour – Ella, Kandy & Udawalawa Safari | Airport Drop',
    description:
      'Discover Sri Lanka’s wildlife, scenic hill country and cultural heritage in this 2-day private tour ending at the airport or your hotel.',
    duration: '2 Days',
    persons: 'Private Tour (1-20 Persons)',
    filecode: '2-day-ella-kandy-private-tour-sri-lanka',
    overview: `Experience an unforgettable 2-day journey through Sri Lanka’s wildlife, hill country and cultural capital.
  On day one, visit the Udawalawa Elephant Transit Home before heading to Ella to explore Nine Arch Bridge, Little Adam’s Peak, Flying Ravana and Ravana Falls.
  On day two, travel through the scenic hills to Ramboda Falls and Ambuluwawa Tower before discovering the sacred Temple of the Tooth in Kandy and Pinnawala Elephant Orphanage.
  This private tour ends conveniently at the airport or your hotel.`,
    tourType: 'Round Tour',
    itinerary: [
      {
        day: 1,
        title: 'Udawalawa & Ella Adventure',
        activities: [
          {
            type: 'Wildlife Experience',
            title: { title: 'Udawalawa Elephant Transit Home', icon: 'fa-paw', color: '#27ae60' },
            description:
              'Visit the Udawalawa Elephant Transit Home to observe rescued baby elephants being cared for and rehabilitated before returning to the wild.',
            image: 'assets/img/2daysTours/7.jpg',
          },
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
        ],
      },
      {
        day: 2,
        title: 'Hill Country & Kandy Cultural Tour',
        activities: [
          {
            type: 'Waterfall Visit',
            title: { title: 'Ramboda Falls', icon: 'fa-water', color: '#3498db' },
            description: 'Stop at Ramboda Falls, a stunning waterfall nestled in Sri Lanka’s scenic hill country.',
            image: 'assets/img/2daysTours/13.jpg',
          },
          {
            type: 'Scenic Tower Visit',
            title: { title: 'Ambuluwawa Tower', icon: 'fa-mountain', color: '#9b59b6' },
            description:
              'Climb the unique Ambuluwawa Biodiversity Tower for breathtaking 360-degree views of the surrounding mountains.',
            image: 'assets/img/2daysTours/12.jpg',
          },
          {
            type: 'Cultural Visit',
            title: { title: 'Temple of the Sacred Tooth Relic', icon: 'fa-place-of-worship', color: '#d35400' },
            description: 'Visit the sacred Temple of the Tooth in Kandy, one of the most important Buddhist sites in the world.',
            image: 'assets/img/2daysTours/4.jpg',
          },
          {
            type: 'Wildlife Experience',
            title: { title: 'Pinnawala Elephant Orphanage', icon: 'fa-paw', color: '#16a085' },
            description: 'Observe elephants bathing and feeding at the famous Pinnawala Elephant Orphanage.',
            image: 'assets/img/2daysTours/7.jpg',
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
        title: 'Udawalawa- & Ella-Abenteuer',
        activities: [
          {
            type: 'Naturerlebnis',
            title: 'Udawalawa Elephant Transit Home',
            description:
              'Besuchen Sie das Udawalawa Elephant Transit Home, um gerettete Elefantenbabys zu beobachten, die versorgt und auf ihre Rückkehr in die Wildnis vorbereitet werden.',
          },
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
        ],
      },
      {
        title: 'Bergland & Kulturtour nach Kandy',
        activities: [
          {
            type: 'Wasserfall-Besuch',
            title: 'Ramboda-Wasserfall',
            description:
              'Halten Sie am Ramboda-Wasserfall, einem beeindruckenden Wasserfall inmitten von Sri Lankas malerischem Bergland.',
          },
          {
            type: 'Aussichtsturm-Besuch',
            title: 'Ambuluwawa-Turm',
            description:
              'Besteigen Sie den einzigartigen Ambuluwawa-Biodiversitätsturm für einen atemberaubenden 360-Grad-Blick auf die umliegenden Berge.',
          },
          {
            type: 'Kulturbesuch',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den heiligen Zahntempel in Kandy, eine der bedeutendsten buddhistischen Stätten der Welt.',
          },
          {
            type: 'Naturerlebnis',
            title: 'Pinnawala Elephant Orphanage',
            description:
              'Beobachten Sie Elefanten beim Baden und Fressen im berühmten Pinnawala Elephant Orphanage.',
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
        title: 'Aventure à Udawalawa et Ella',
        activities: [
          {
            type: 'Expérience faune',
            title: 'Udawalawa Elephant Transit Home',
            description:
              'Visitez l’Udawalawa Elephant Transit Home pour observer des bébés éléphants secourus, soignés avant leur retour dans la nature.',
          },
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
        ],
      },
      {
        title: 'Hauts plateaux & circuit culturel à Kandy',
        activities: [
          {
            type: 'Cascade',
            title: 'Chutes de Ramboda',
            description:
              'Faites une halte aux chutes de Ramboda, une cascade impressionnante au cœur des hauts plateaux pittoresques du Sri Lanka.',
          },
          {
            type: 'Visite de tour panoramique',
            title: 'Tour d’Ambuluwawa',
            description:
              'Grimpez à l’unique tour de biodiversité d’Ambuluwawa pour une vue à 360° à couper le souffle sur les montagnes environnantes.',
          },
          {
            type: 'Visite culturelle',
            title: 'Temple de la Dent sacrée',
            description:
              'Visitez le sacré Temple de la Dent à Kandy, l’un des sites bouddhistes les plus importants au monde.',
          },
          {
            type: 'Expérience faune',
            title: 'Orphelinat d’éléphants de Pinnawala',
            description:
              'Observez les éléphants se baigner et se nourrir au célèbre orphelinat d’éléphants de Pinnawala.',
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
        title: 'Avventura a Udawalawa ed Ella',
        activities: [
          {
            type: 'Esperienza naturalistica',
            title: 'Udawalawa Elephant Transit Home',
            description:
              'Visita l’Udawalawa Elephant Transit Home per osservare cuccioli di elefante salvati, curati prima del loro ritorno in natura.',
          },
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
        ],
      },
      {
        title: 'Altopiani e tour culturale a Kandy',
        activities: [
          {
            type: 'Cascata',
            title: 'Cascata di Ramboda',
            description:
              'Sosta alla cascata di Ramboda, un’imponente cascata nel cuore dei pittoreschi altopiani dello Sri Lanka.',
          },
          {
            type: 'Visita alla torre panoramica',
            title: 'Torre di Ambuluwawa',
            description:
              'Sali sulla singolare torre della biodiversità di Ambuluwawa per una vista panoramica a 360° sulle montagne circostanti.',
          },
          {
            type: 'Visita culturale',
            title: 'Tempio del Sacro Dente',
            description:
              'Visita il sacro Tempio del Dente a Kandy, uno dei siti buddhisti più importanti al mondo.',
          },
          {
            type: 'Esperienza naturalistica',
            title: 'Orfanotrofio degli elefanti di Pinnawala',
            description:
              'Osserva gli elefanti fare il bagno e nutrirsi nel famoso orfanotrofio degli elefanti di Pinnawala.',
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
        title: 'Aventura en Udawalawa y Ella',
        activities: [
          {
            type: 'Experiencia de fauna',
            title: 'Udawalawa Elephant Transit Home',
            description:
              'Visita el Udawalawa Elephant Transit Home para observar crías de elefante rescatadas, cuidadas antes de su regreso a la naturaleza.',
          },
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
        ],
      },
      {
        title: 'Tierras altas y tour cultural por Kandy',
        activities: [
          {
            type: 'Cascada',
            title: 'Cascada de Ramboda',
            description:
              'Haz una parada en la cascada de Ramboda, una impresionante caída de agua en el corazón de las pintorescas tierras altas de Sri Lanka.',
          },
          {
            type: 'Visita a la torre panorámica',
            title: 'Torre de Ambuluwawa',
            description:
              'Sube a la singular torre de biodiversidad de Ambuluwawa para disfrutar de una vista de 360° sobre las montañas circundantes.',
          },
          {
            type: 'Visita cultural',
            title: 'Templo del Diente Sagrado',
            description:
              'Visita el sagrado Templo del Diente en Kandy, uno de los lugares budistas más importantes del mundo.',
          },
          {
            type: 'Experiencia de fauna',
            title: 'Orfanato de elefantes de Pinnawala',
            description:
              'Observa a los elefantes bañarse y alimentarse en el famoso orfanato de elefantes de Pinnawala.',
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
        title: 'Przygoda w Udawalawie i Elli',
        activities: [
          {
            type: 'Doświadczenie z dziką przyrodą',
            title: 'Udawalawa Elephant Transit Home',
            description:
              'Odwiedź Udawalawa Elephant Transit Home, aby zobaczyć uratowane słoniątka, którymi opiekuje się personel przed ich powrotem na wolność.',
          },
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
        ],
      },
      {
        title: 'Wyżyny i wycieczka kulturalna do Kandy',
        activities: [
          {
            type: 'Wodospad',
            title: 'Wodospad Ramboda',
            description:
              'Zatrzymaj się przy wodospadzie Ramboda, imponującym wodospadzie w samym sercu malowniczych wyżyn Sri Lanki.',
          },
          {
            type: 'Wizyta na wieży widokowej',
            title: 'Wieża Ambuluwawa',
            description:
              'Wejdź na niezwykłą wieżę bioróżnorodności Ambuluwawa, by zobaczyć zapierającą dech panoramę 360° na okoliczne góry.',
          },
          {
            type: 'Wizyta kulturalna',
            title: 'Świątynia Świętego Zęba Buddy',
            description:
              'Odwiedź świętą Świątynię Zęba w Kandy, jedno z najważniejszych miejsc buddyjskich na świecie.',
          },
          {
            type: 'Doświadczenie z dziką przyrodą',
            title: 'Sierociniec słoni w Pinnawali',
            description:
              'Zobacz, jak słonie kąpią się i jedzą w słynnym sierocińcu słoni w Pinnawali.',
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
        title: 'Приключение в Удавалаве и Элле',
        activities: [
          {
            type: 'Знакомство с животным миром',
            title: 'Udawalawa Elephant Transit Home',
            description:
              'Посетите Udawalawa Elephant Transit Home, чтобы увидеть спасённых слонят, которых выхаживают перед возвращением в дикую природу.',
          },
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
        ],
      },
      {
        title: 'Горная местность и культурный тур в Канди',
        activities: [
          {
            type: 'Водопад',
            title: 'Водопад Рамбода',
            description:
              'Остановитесь у водопада Рамбода — впечатляющего водопада в самом сердце живописной горной местности Шри-Ланки.',
          },
          {
            type: 'Посещение смотровой башни',
            title: 'Башня Амбулувава',
            description:
              'Взойдите на уникальную башню биоразнообразия Амбулувава ради захватывающего вида на 360° на окружающие горы.',
          },
          {
            type: 'Культурный визит',
            title: 'Храм Священного Зуба Будды',
            description:
              'Посетите священный Храм Зуба в Канди — одну из важнейших буддийских святынь мира.',
          },
          {
            type: 'Знакомство с животным миром',
            title: 'Приют слонов Пиннавела',
            description:
              'Понаблюдайте, как слоны купаются и питаются в знаменитом приюте слонов Пиннавела.',
          },
        ],
      },
    ],
  },
};
