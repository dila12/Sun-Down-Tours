import type { TourContent } from './localize';

/**
 * Ella one day tour (pageId: ellaDay).
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
      'air conditioned Private Vehicle',
      'English Speaking Professional Driver',
      "Driver's Accommodation & Meals",
      'Pickup & Drop Off',
      'Fuel & Parking Fees',
      '24 Hours Service',
      'Unlimited Mileage/Kilometer for entire round tour',
      'Your Accommodation',
    ],
    excludes: ['Food & Drinks', 'Entrance & Activities Fees'],
    seoIntro:
      'Ella packs more iconic highland scenery into one day than most destinations manage in a week. This private day tour from your hotel combines the Instagram famous Nine Arches Bridge timed for scenic train crossings with a short hike to Little Adam\'s Peak, the thunderous Ravana Falls, a slice of hill country train riding and a stop at Udawalawe Elephant Transit Home to see rescued elephants. Sundown Tours schedules the day to beat midday crowds at the bridge and match train timetables when possible. Your driver guide handles the narrow mountain roads while you focus on photography and fresh tea country air. Entrance fees and lunch remain at your discretion so you can extend or shorten stops on the go.',
    highlights: [
      'Nine Arches Bridge with viewpoints for the iconic blue train crossing',
      'Little Adam\'s Peak hike for 360 degree highland panoramas',
      'Ravana Falls one of Sri Lanka\'s widest and most photogenic cascades',
      'Scenic Ella train sector experience through tea plantations',
      'Udawalawe Elephant Transit Home visit for ethical wildlife viewing',
    ],
    faq: [
      {
        q: 'Can this Ella day tour pick up from Nuwara Eliya or only Ella town?',
        a: 'We can collect from Ella, Bandarawela, Haputale or Nuwara Eliya hotels. Pickup point affects departure time share your hotel when booking so we plan driving and train connections.',
      },
      {
        q: 'Do we ride the full Kandy to Ella train or a shorter sector?',
        a: 'The day tour includes a scenic mini sector around Ella rather than the full multi hour journey. If you want the classic Kandy to Ella leg, ask us to embed it in a multi day round tour instead.',
      },
      {
        q: 'How much walking is involved at Nine Arches Bridge and Little Adam\'s Peak?',
        a: 'Nine Arches requires 15 to 20 minutes on uneven paths to the main viewpoint. Little Adam\'s Peak is a gentle 30 to 45 minute uphill walk. Comfortable shoes and a hat are recommended.',
      },
    ],
  },

  de: {
    title: 'Sri Lanka Ella Tagestour',
    description:
      'Erleben Sie die Schonheit Ellas an einem erlebnisreichen Tag voller Abenteuer, Kultur und Entspannung.',
    duration: '1 Tag',
    persons: '1 to 20 Reisende',
    tourType: 'Tagestour',
    overview:
      'Entdecken Sie die Schonheit Sri Lankas auf dieser unvergesslichen Tour zur beruhmten Nine Arches Bridge in Ella, wo Sie die malerische Zuguberfahrt bestaunen konnen. Besuchen Sie das Udawalawe Elephant Orphanage, um gerettete Elefanten aus nachster Nahe zu beobachten. Erleben Sie die Naturschonheit der Ravana Wasserfalle, eines der beeindruckendsten Wasserfalle der Insel. Wandern Sie zum Little Adam’s Peak und geniessen Sie einen atemberaubenden Panoramablick uber das Bergland Sri Lankas. Kronen Sie Ihr Abenteuer mit einer Minizugfahrt durch die malerische Landschaft von Ella  fur bleibende Erinnerungen an diese zauberhafte Reise.',
    includes: [
      'Klimatisiertes Privatfahrzeug',
      'Englischsprachiger professioneller Fahrer',
      'Unterkunft & Verpflegung des Fahrers',
      'Abholung & Ruckbringung',
      'Kraftstoff & Parkgebuhren',
      '24 Stunden Service',
      'Unbegrenzte Kilometer fur die gesamte Tour',
      'Ihre Unterkunft',
    ],
    excludes: ['Speisen & Getranke', 'Eintritts und Aktivitatsgebuhren'],
    seoIntro:
      'Ella vereint an einem einzigen Tag mehr ikonische Hugellandschaft, als die meisten Reiseziele in einer ganzen Woche bieten. Diese private Tagestour ab Ihrem Hotel kombiniert die auf Instagram beruhmte Nine Arches Bridge  zeitlich abgestimmt auf malerische Zuguberfahrten  mit einer kurzen Wanderung zum Little Adam\'s Peak, den donnernden Ravana Wasserfallen, einem Abschnitt der Zugfahrt durchs Hugelland und einem Stopp im Udawalawe Elephant Transit Home, um gerettete Elefanten zu sehen. Sundown Tours plant den Tag so, dass Sie den Mittagsandrang an der Brucke vermeiden und, wo moglich, die Zugfahrplane einhalten. Ihr Fahrer Guide ubernimmt die engen Bergstrassen, wahrend Sie sich auf Fotografie und die frische Luft im Teeland konzentrieren konnen. Eintrittsgebuhren und Mittagessen bleiben Ihnen selbst uberlassen, sodass Sie Stopps unterwegs verlangern oder verkurzen konnen.',
    highlights: [
      'Nine Arches Bridge mit Aussichtspunkten fur die legendare Zuguberfahrt',
      'Wanderung zum Little Adam\'s Peak fur 360 Grad Panoramen im Hugelland',
      'Ravana Wasserfalle  einer der breitesten und fotogensten Wasserfalle Sri Lankas',
      'Malerische Zugfahrt durch die Teeplantagen von Ella',
      'Besuch des Udawalawe Elephant Transit Home fur ethisches Tierbeobachten',
    ],
    faq: [
      {
        q: 'Kann diese Ella Tagestour ab Nuwara Eliya oder nur ab Ella Stadt starten?',
        a: 'Wir konnen Sie von Hotels in Ella, Bandarawela, Haputale oder Nuwara Eliya abholen. Der Abholort beeinflusst die Abfahrtszeit  teilen Sie uns Ihr Hotel bei der Buchung mit, damit wir Fahrzeit und Zuganschlusse planen konnen.',
      },
      {
        q: 'Fahren wir die vollstandige Zugstrecke von Kandy nach Ella oder nur einen kurzeren Abschnitt?',
        a: 'Die Tagestour beinhaltet einen malerischen Mini Abschnitt rund um Ella statt der mehrstundigen Gesamtfahrt. Wenn Sie die klassische Strecke Kandy to Ella wunschen, bitten wir Sie, dies stattdessen in eine mehrtagige Rundreise einzubauen.',
      },
      {
        q: 'Wie viel Gehen ist an der Nine Arches Bridge und beim Little Adam\'s Peak erforderlich?',
        a: 'Die Nine Arches Bridge erfordert 15 to 20 Minuten auf unebenen Wegen zum Hauptaussichtspunkt. Little Adam\'s Peak ist ein sanfter 30 to 45 minutiger Aufstieg. Bequeme Schuhe und ein Hut werden empfohlen.',
      },
    ],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Nine Arches Bridge',
            description:
              'Die majestatische Nine Arches Bridge ist einer der Hauptgrunde dafur. Die imposante Brucke zwischen Ella und Demodara zahlt zu den technischen Meisterwerken des fruhen 20. Jahrhunderts.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Zugfahrt durch Ella',
            description:
              'Die Zugfahrt durch Ella gilt als eine der schonsten Bahnstrecken Sri Lankas  wenn nicht der Welt! Geniessen Sie atemberaubende Ausblicke auf uppige Teeplantagen, Berge, Viadukte und Taler.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Little Adam’s Peak',
            description:
              'Mit einer Hohe von 1.141 m dauert der Aufstieg vom Eingang aus etwa 30 to 45 minuten. Der Ausblick vom Gipfel ist grandios  ein 360 Grad Panorama.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Ravana Wasserfall',
            description:
              'Die Ravana Wasserfalle zahlen zu den breitesten Wasserfallen des Landes. Sie sind beeindruckend, und Sie konnen uber die Felsen klettern, um sie aus der Nahe zu erleben.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Elefanten Waisenhaus Udawalawe',
            description:
              'Vierter Stopp: Beobachten Sie eine lebendige Gruppe von rund 20 bis 30 jungen Elefanten, die viermal taglich gefuttert werden.',
          },
        ],
      },
    ],
  },

  fr: {
    title: 'Excursion a Ella au Sri Lanka',
    description:
      'Decouvrez la beaute d’Ella lors d’une journee complete d’aventure, de culture et de detente.',
    duration: '1 jour',
    persons: '1 to 20 voyageurs',
    tourType: 'Excursion d’une journee',
    overview:
      'Decouvrez la beaute du Sri Lanka avec cette excursion inoubliable au celebre Nine Arches Bridge d’Ella, ou vous admirerez le passage pittoresque du train. Visitez l’orphelinat d’elephants d’Udawalawe pour observer de pres des elephants sauves. Decouvrez la splendeur naturelle des chutes de Ravana, l’une des plus impressionnantes cascades de l’ile. Grimpez au Little Adam’s Peak pour des vues panoramiques a couper le souffle sur les hautes terres du Sri Lanka. Terminez votre aventure par un trajet en mini train a travers les paysages pittoresques d’Ella, pour des souvenirs inoubliables de ce voyage enchanteur.',
    includes: [
      'Vehicule prive climatise',
      'Chauffeur professionnel anglophone',
      'Hebergement & repas du chauffeur',
      'Prise en charge & depose',
      'Carburant & frais de parking',
      'Service 24h/24',
      'Kilometrage illimite pour toute l’excursion',
      'Votre hebergement',
    ],
    excludes: ['Repas & boissons', 'Entrees & frais d’activites'],
    seoIntro:
      'Ella concentre en une seule journee plus de paysages emblematiques des hauts plateaux que la plupart des destinations n’en offrent en une semaine. Ce circuit prive d’une journee depuis votre hotel associe le celebre pont Nine Arches chronometre pour les passages pittoresques du train a une courte randonnee jusqu’a Little Adam’s Peak, aux chutes tonitruantes de Ravana, a un troncon de train dans les hauts plateaux et a un arret au centre de transit des elephants d’Udawalawe pour observer des elephants secourus. Sundown Tours planifie la journee pour eviter la foule de midi au pont et respecter les horaires du train lorsque cela est possible. Votre chauffeur guide gere les routes de montagne etroites tandis que vous vous concentrez sur la photographie et l’air frais du pays du the. Les frais d’entree et le dejeuner restent a votre discretion afin que vous puissiez prolonger ou raccourcir les arrets en cours de route.',
    highlights: [
      'Pont Nine Arches avec points de vue pour le passage emblematique du train bleu',
      'Randonnee a Little Adam’s Peak pour des panoramas a 360° sur les hauts plateaux',
      'Chutes de Ravana l’une des cascades les plus larges et photogeniques du Sri Lanka',
      'Troncon panoramique du train d’Ella a travers les plantations de the',
      'Visite du centre de transit des elephants d’Udawalawe pour une observation ethique de la faune',
    ],
    faq: [
      {
        q: 'Ce circuit d’une journee a Ella peut il prendre en charge depuis Nuwara Eliya ou seulement depuis la ville d’Ella ?',
        a: 'Nous pouvons vous prendre en charge dans les hotels d’Ella, de Bandarawela, de Haputale ou de Nuwara Eliya. Le point de prise en charge influence l’heure de depart indiquez votre hotel lors de la reservation afin que nous planifiions la conduite et les correspondances du train.',
      },
      {
        q: 'Prenons nous le train complet de Kandy a Ella ou un troncon plus court ?',
        a: 'Le circuit d’une journee inclut un mini troncon panoramique autour d’Ella plutot que le trajet complet de plusieurs heures. Si vous souhaitez le troncon classique Kandy to Ella, demandez nous de l’integrer plutot dans un circuit de plusieurs jours.',
      },
      {
        q: 'Combien de marche faut il prevoir au pont Nine Arches et a Little Adam’s Peak ?',
        a: 'Le pont Nine Arches demande 15 a 20 minutes sur des chemins accidentes jusqu’au point de vue principal. Little Adam’s Peak est une montee douce de 30 a 45 minutes. Des chaussures confortables et un chapeau sont recommandes.',
      },
    ],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Nine Arches Bridge',
            description:
              'Le majestueux Nine Arches Bridge en est l’une des principales raisons. Ce pont impressionnant entre Ella et Demodara est l’une des prouesses d’ingenierie du debut du XXe siecle.',
          },
          {
            type: 'Visite guidee',
            title: 'Trajet en train a Ella',
            description:
              'Le trajet en train a Ella est considere comme l’un des plus beaux au monde ! Profitez de vues a couper le souffle sur les plantations de the verdoyantes, les montagnes, les viaducs et les vallees.',
          },
          {
            type: 'Visite guidee',
            title: 'Little Adam’s Peak',
            description:
              'Culminant a 1141 m, l’ascension depuis l’entree dure entre 30 et 45 minutes. La vue depuis le sommet est incroyable, avec un panorama a 360 degres.',
          },
          {
            type: 'Visite guidee',
            title: 'Chutes de Ravana',
            description:
              'Les chutes de Ravana comptent parmi les plus larges du pays. Elles sont impressionnantes et vous pouvez grimper sur certains rochers pour les admirer de plus pres.',
          },
          {
            type: 'Visite guidee',
            title: 'Orphelinat des elephants d’Udawalawe',
            description:
              '4ᵉ arret : observez un groupe anime d’environ 20 a 30 jeunes elephants, nourris quatre fois par jour.',
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
    persons: '1 to 20 viaggiatori',
    tourType: 'Tour di un giorno',
    overview:
      'Scopri la bellezza dello Sri Lanka con questo tour indimenticabile, che include l’iconico Nine Arches Bridge di Ella, dove potrai ammirare il pittoresco passaggio del treno. Visita l’orfanotrofio degli elefanti di Udawalawe per osservare da vicino gli elefanti salvati. Vivi la meraviglia naturale delle cascate di Ravana, una delle piu imponenti dell’isola. Sali al Little Adam’s Peak per una vista panoramica spettacolare sull’altopiano dello Sri Lanka. Concludi la tua avventura con un breve viaggio in treno tra i paesaggi pittoreschi di Ella, per un ricordo indelebile di questo viaggio incantevole.',
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
    excludes: ['Cibo e bevande', 'Ingressi e costi delle attivita'],
    seoIntro:
      'Ella racchiude in un solo giorno piu paesaggi iconici dell’altopiano di quanti la maggior parte delle destinazioni ne offra in una settimana. Questo tour privato di un giorno dal vostro hotel combina il celebre ponte Nine Arches programmato per gli attraversamenti panoramici del treno con una breve escursione a Little Adam’s Peak, le tonanti cascate di Ravana, un tratto panoramico del treno tra le colline e una sosta all’Udawalawe Elephant Transit Home per vedere elefanti salvati. Sundown Tours pianifica la giornata per evitare la folla di mezzogiorno al ponte e rispettare gli orari del treno quando possibile. Il vostro autista guida gestisce le strette strade di montagna mentre voi vi concentrate sulla fotografia e sull’aria fresca della terra del te. I biglietti d’ingresso e il pranzo restano a vostra discrezione, cosi potete prolungare o abbreviare le soste durante il percorso.',
    highlights: [
      'Ponte Nine Arches con punti panoramici per l’iconico passaggio del treno blu',
      'Escursione a Little Adam’s Peak per panorami a 360° sull’altopiano',
      'Cascate di Ravana una delle cascate piu larghe e fotogeniche dello Sri Lanka',
      'Tratto panoramico del treno di Ella tra le piantagioni di te',
      'Visita all’Udawalawe Elephant Transit Home per un’osservazione etica della fauna',
    ],
    faq: [
      {
        q: 'Questo tour di un giorno a Ella puo partire da Nuwara Eliya o solo dalla citta di Ella?',
        a: 'Possiamo venire a prendervi dagli hotel di Ella, Bandarawela, Haputale o Nuwara Eliya. Il punto di partenza influisce sull’orario comunicateci il vostro hotel al momento della prenotazione cosi pianifichiamo la guida e le coincidenze del treno.',
      },
      {
        q: 'Facciamo l’intero tratto ferroviario da Kandy a Ella o un tratto piu breve?',
        a: 'Il tour di un giorno include un mini tratto panoramico intorno a Ella piuttosto che il viaggio completo di piu ore. Se desiderate il tratto classico Kandy to Ella, chiedeteci di inserirlo invece in un tour di piu giorni.',
      },
      {
        q: 'Quanto bisogna camminare al ponte Nine Arches e a Little Adam’s Peak?',
        a: 'Il ponte Nine Arches richiede 15 to 20 minuti su sentieri irregolari fino al punto panoramico principale. Little Adam’s Peak e una salita leggera di 30-45 minuti. Si consigliano scarpe comode e un cappello.',
      },
    ],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Nine Arches Bridge',
            description:
              'Il maestoso Nine Arches Bridge e uno dei motivi principali. Il magnifico ponte tra Ella e Demodara e una delle meraviglie ingegneristiche dei primi anni del XX secolo.',
          },
          {
            type: 'Tour guidato',
            title: 'Viaggio in treno a Ella',
            description:
              'Il viaggio in treno attraverso Ella e considerato uno dei piu belli dello Sri Lanka, se non del mondo! Sali a bordo e ammira panorami straordinari tra piantagioni di te, montagne, viadotti e valli.',
          },
          {
            type: 'Tour guidato',
            title: 'Little Adam’s Peak',
            description:
              'Alto 1.141 metri, richiede dai 30 ai 45 minuti di camminata dall’ingresso. La vista dalla cima e incredibile: un panorama a 360 gradi.',
          },
          {
            type: 'Tour guidato',
            title: 'Cascata di Ravana',
            description:
              'Le cascate di Ravana sono tra le piu ampie del paese. Sono davvero suggestive e puoi arrampicarti su alcune rocce per osservarle piu da vicino.',
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
    title: 'Excursion de un dia a Ella, Sri Lanka',
    description:
      'Disfruta de la belleza de Ella en un dia completo lleno de aventura, cultura y relax.',
    duration: '1 dia',
    persons: '1 to 20 viajeros',
    tourType: 'Excursion de un dia',
    overview:
      'Descubre la belleza de Sri Lanka con este tour inolvidable, que incluye el iconico Nine Arches Bridge de Ella, donde podras admirar el pintoresco paso del tren. Visita el orfanato de elefantes de Udawalawe para observar de cerca a elefantes rescatados. Vive el esplendor natural de las cascadas de Ravana, una de las mas impresionantes de la isla. Sube al Little Adam’s Peak para disfrutar de vistas panoramicas espectaculares sobre las tierras altas de Sri Lanka. Completa tu aventura con un breve viaje en tren por los pintorescos paisajes de Ella, creando recuerdos inolvidables de este viaje magico.',
    includes: [
      'Vehiculo privado con aire acondicionado',
      'Chofer profesional de habla inglesa',
      'Alojamiento y comidas del chofer',
      'Recogida y regreso',
      'Combustible y aparcamiento',
      'Servicio 24 horas',
      'Kilometraje ilimitado durante todo el tour',
      'Tu alojamiento',
    ],
    excludes: ['Comidas y bebidas', 'Entradas y costes de actividades'],
    seoIntro:
      'Ella concentra en un solo dia mas paisajes emblematicos de las tierras altas de los que la mayoria de los destinos ofrecen en una semana entera. Este circuito privado de un dia desde su hotel combina el famoso puente Nine Archesprogramado para los pasos panoramicos del tren— con una breve caminata hasta Little Adam’s Peak, las atronadoras cataratas de Ravana, un tramo panoramico en tren por las tierras altas y una parada en el Udawalawe Elephant Transit Home para ver elefantes rescatados. Sundown Tours planifica el dia para evitar las multitudes del mediodia en el puente y respetar los horarios del tren cuando es posible. Su chofer guia se encarga de las estrechas carreteras de montana mientras usted se concentra en la fotografia y el aire fresco del pais del te. Las entradas y el almuerzo quedan a su discrecion para que pueda ampliar o acortar las paradas sobre la marcha.',
    highlights: [
      'Puente Nine Arches con miradores para el iconico paso del tren azul',
      'Caminata a Little Adam’s Peak para panoramicas de 360° de las tierras altas',
      'Cataratas de Ravana, una de las cascadas mas anchas y fotogenicas de Sri Lanka',
      'Tramo panoramico del tren de Ella a traves de las plantaciones de te',
      'Visita al Udawalawe Elephant Transit Home para una observacion etica de la fauna',
    ],
    faq: [
      {
        q: 'Este circuito de un dia por Ella puede recoger desde Nuwara Eliya o solo desde la ciudad de Ella?',
        a: 'Podemos recogerle en hoteles de Ella, Bandarawela, Haputale o Nuwara Eliya. El punto de recogida afecta la hora de salida; indique su hotel al reservar para que planifiquemos la conduccion y las conexiones del tren.',
      },
      {
        q: 'Recorremos todo el trayecto en tren de Kandy a Ella o un tramo mas corto?',
        a: 'El circuito de un dia incluye un mini tramo panoramico alrededor de Ella en lugar del trayecto completo de varias horas. Si desea el tramo clasico Kandy to Ella, pidanos incluirlo en un circuito de varios dias.',
      },
      {
        q: 'Cuanto hay que caminar en el puente Nine Arches y en Little Adam’s Peak?',
        a: 'El puente Nine Arches requiere entre 15 y 20 minutos por senderos irregulares hasta el mirador principal. Little Adam’s Peak es una subida suave de 30 a 45 minutos. Se recomiendan calzado comodo y sombrero.',
      },
    ],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Tour guiado',
            title: 'Nine Arches Bridge',
            description:
              'El majestuoso Nine Arches Bridge es una de las principales razones. Este imponente puente entre Ella y Demodara es una de las maravillas de la ingenieria de principios del siglo XX.',
          },
          {
            type: 'Tour guiado',
            title: 'Viaje en tren por Ella',
            description:
              'El viaje en tren por Ella es considerado uno de los mas bonitos de Sri Lanka, si no del mundo! Sube a bordo y disfruta de vistas espectaculares de plantaciones de te, montanas, viaductos y valles.',
          },
          {
            type: 'Tour guiado',
            title: 'Little Adam’s Peak',
            description:
              'Con 1141 m de altura, la subida desde la entrada dura entre 30 y 45 minutos. Las vistas desde la cima son increibles, con un panorama de 360 grados.',
          },
          {
            type: 'Tour guiado',
            title: 'Cascada de Ravana',
            description:
              'Las cascadas de Ravana son una de las mas anchas del pais. Son bastante impresionantes y puedes trepar por algunas rocas para verlas mas de cerca.',
          },
          {
            type: 'Tour guiado',
            title: 'Orfanato de elefantes de Udawalawe',
            description:
              '4ª parada: observaras un animado grupo de unos 20 a 30 elefantes jovenes, alimentados cuatro veces al dia.',
          },
        ],
      },
    ],
  },

  pl: {
    title: 'Jednodniowa wycieczka do Elli, Sri Lanka',
    description:
      'Poznaj urok Elli podczas calego dnia pelnego przygod, kultury i relaksu.',
    duration: '1 dzien',
    persons: '1 to 20 podroznych',
    tourType: 'Wycieczka jednodniowa',
    overview:
      'Odkryj piekno Sri Lanki podczas tej niezapomnianej wycieczki do slynnego mostu Nine Arches w Elli, gdzie zobaczysz malowniczy przejazd pociagu. Odwiedz sierociniec sloni w Udawalawe, aby z bliska obserwowac uratowane slonie. Poczuj naturalny majestat wodospadow Ravana, jednych z najbardziej efektownych na wyspie. Wejdz na Little Adam’s Peak, by zobaczyc zapierajaca dech panorame gorskiej krainy Sri Lanki. Zakoncz przygode przejazdem mini pociagiem przez malownicze krajobrazy Elli  na dlugo zapadajace w pamiec wspomnienia tej magicznej podrozy.',
    includes: [
      'Klimatyzowany prywatny pojazd',
      'Profesjonalny kierowca mowiacy po angielsku',
      'Zakwaterowanie i wyzywienie kierowcy',
      'Odbior i odwoz',
      'Paliwo i oplaty parkingowe',
      'Obsluga 24 godziny',
      'Nielimitowany kilometraz na cala wycieczke',
      'Twoje zakwaterowanie',
    ],
    excludes: ['Jedzenie i napoje', 'Bilety wstepu i oplaty za atrakcje'],
    seoIntro:
      'Ella oferuje w jeden dzien wiecej ikonicznych krajobrazow wyzyn, niz wiekszosc destynacji w caly tydzien. Ta prywatna jednodniowa wycieczka z Panstwa hotelu laczy popularny na Instagramie most Nine Arches  zaplanowany pod malownicze przejazdy pociagu  z krotka wedrowka na Little Adam’s Peak, grzmiacymi wodospadami Ravana, odcinkiem jazdy pociagiem przez wyzyny i przystankiem w Udawalawe Elephant Transit Home, gdzie mozna zobaczyc uratowane slonie. Sundown Tours planuje dzien tak, by uniknac tlumow w porze obiadowej przy moscie i, gdy to mozliwe, dopasowac sie do rozkladu pociagow. Kierowca przewodnik zajmuje sie waskimi gorskimi drogami, a Panstwo moga skupic sie na fotografii i swiezym powietrzu krainy herbaty. Oplaty za wstep i lunch pozostaja do Panstwa decyzji, dzieki czemu mozna wydluzyc lub skrocic przystanki w trakcie podrozy.',
    highlights: [
      'Most Nine Arches z punktami widokowymi na slynny przejazd niebieskiego pociagu',
      'Wedrowka na Little Adam’s Peak dla panoram 360° na wyzyny',
      'Wodospady Ravana  jedne z najszerszych i najbardziej fotogenicznych na Sri Lance',
      'Widokowy odcinek pociagu w Elli przez plantacje herbaty',
      'Wizyta w Udawalawe Elephant Transit Home w celu etycznej obserwacji dzikiej przyrody',
    ],
    faq: [
      {
        q: 'Czy ta jednodniowa wycieczka po Elli moze zaczynac sie z Nuwara Eliya, czy tylko z miasta Ella?',
        a: 'Mozemy odebrac Panstwa z hoteli w Elli, Bandarawela, Haputale lub Nuwara Eliya. Miejsce odbioru wplywa na godzine wyjazdu  podajcie swoj hotel przy rezerwacji, abysmy zaplanowali jazde i polaczenia kolejowe.',
      },
      {
        q: 'Czy jedziemy cala trasa kolejowa z Kandy do Elli, czy krotszym odcinkiem?',
        a: 'Jednodniowa wycieczka obejmuje widokowy mini odcinek wokol Elli, a nie pelna, wielogodzinna podroz. Jesli chcecie klasyczny odcinek Kandy to Ella, poproscie nas o wlaczenie go do wielodniowej wycieczki.',
      },
      {
        q: 'Ile trzeba chodzic przy moscie Nine Arches i na Little Adam’s Peak?',
        a: 'Most Nine Arches wymaga 15 to 20 minut po nierownych sciezkach do glownego punktu widokowego. Little Adam’s Peak to lagodne 30 to 45 minutowe podejscie. Zalecamy wygodne buty i nakrycie glowy.',
      },
    ],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Nine Arches Bridge',
            description:
              'Majestatyczny most Nine Arches to jeden z glownych powodow. Ten imponujacy most miedzy Ella i Demodara to jeden z inzynieryjnych cudow poczatku XX wieku.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Przejazd pociagiem przez Elle',
            description:
              'Przejazd pociagiem przez Elle uznawany jest za jedna z najpiekniejszych tras kolejowych Sri Lanki, jesli nie swiata! Podziwiaj zapierajace dech widoki na bujne plantacje herbaty, gory, wiadukty i doliny.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Little Adam’s Peak',
            description:
              'Szczyt ma wysokosc 1141 m, a wejscie od wejscia zajmuje 30 to 45 minut. Widoki ze szczytu sa niesamowite  panorama 360 stopni.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Wodospad Ravana',
            description:
              'Wodospady Ravana to jedne z najszerszych w kraju. Sa bardzo efektowne, a po niektorych skalach mozna sie wspiac, by zobaczyc je z bliska.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Sierociniec sloni w Udawalawe',
            description:
              'Czwarty przystanek: zobaczysz zywa grupe okolo 20 to 30 mlodych sloni, karmionych cztery razy dziennie.',
          },
        ],
      },
    ],
  },

  ru: {
    title: 'Однодневный тур в Эллу, Шри Ланка',
    description:
      'Откройте для себя красоту Эллы за один насыщенный день приключений, культуры и отдыха.',
    duration: '1 день',
    persons: '1 to 20 путешественников',
    tourType: 'Однодневный тур',
    overview:
      'Откройте для себя красоту Шри Ланки в этом незабываемом туре к знаменитому мосту Nine Arches в Элле, где вы полюбуетесь живописным проездом поезда. Посетите приют для слонов в Удавалаве, чтобы понаблюдать за спасёнными слонами вблизи. Насладитесь природным великолепием водопадов Равана одних из самых впечатляющих на острове. Поднимитесь на Little Adam’s Peak ради потрясающих панорамных видов на горную местность Шри Ланки. Завершите приключение поездкой на мини поезде через живописные ландшафты Эллы на память об этом волшебном путешествии.',
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
    seoIntro:
      'В Элле за один день можно увидеть больше знаковых пейзажей горной страны, чем большинство направлений предлагает за целую неделю. Этот частный однодневный тур из вашего отеля сочетает знаменитый на весь мир мост Nine Arches с расчётом времени на живописные проезды поезда с короткой прогулкой на Little Adam’s Peak, громогласными водопадами Равана, участком живописной железной дороги по горной стране и остановкой в Udawalawe Elephant Transit Home для наблюдения за спасёнными слонами. Sundown Tours планирует день так, чтобы избежать полуденных толп у моста и, если возможно, соответствовать расписанию поездов. Ваш водитель гид берёт на себя узкие горные дороги, пока вы концентрируетесь на фотографии и свежем воздухе чайного края. Входные билеты и обед остаются на ваш выбор, что позволяет продлевать или сокращать остановки по ходу дня.',
    highlights: [
      'Мост Nine Arches со смотровыми точками для знаменитого проезда синего поезда',
      'Поход на Little Adam’s Peak для панорам горной страны на 360°',
      'Водопады Равана одни из самых широких и живописных на Шри Ланке',
      'Живописный участок поезда в Элле через чайные плантации',
      'Посещение Udawalawe Elephant Transit Home для этичного наблюдения за дикой природой',
    ],
    faq: [
      {
        q: 'Может ли этот однодневный тур по Элле забирать из Нувара Элии, а не только из города Элла?',
        a: 'Мы можем забрать вас из отелей в Элле, Бандаравеле, Хапутале или Нувара Элии. Место посадки влияет на время отправления сообщите нам свой отель при бронировании, чтобы мы спланировали маршрут и стыковки с поездом.',
      },
      {
        q: 'Проезжаем ли мы весь маршрут поезда от Канди до Эллы или более короткий участок?',
        a: 'Однодневный тур включает живописный мини участок вокруг Эллы, а не полную многочасовую поездку. Если вы хотите классический участок Канди–Элла, попросите нас включить его в многодневный маршрут.',
      },
      {
        q: 'Сколько нужно идти пешком у моста Nine Arches и на Little Adam’s Peak?',
        a: 'Мост Nine Arches требует 15 to 20 минут по неровным тропам до главной смотровой точки. Little Adam’s Peak это лёгкий подъём на 30 to 45 минут. Рекомендуются удобная обувь и головной убор.',
      },
    ],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Nine Arches Bridge',
            description:
              'Величественный мост Nine Arches одна из главных причин. Этот впечатляющий мост между Эллой и Демодарой одно из инженерных чудес начала XX века.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Поездка на поезде через Эллу',
            description:
              'Поездка на поезде через Эллу считается одной из самых красивых в Шри Ланке, если не в мире! Полюбуйтесь захватывающими видами на пышные чайные плантации, горы, виадуки и долины.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Little Adam’s Peak',
            description:
              'Высота пика составляет 1141 м, подъём от входа занимает 30 to 45 минут. Виды с вершины невероятны панорама на 360 градусов.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Водопад Равана',
            description:
              'Водопады Равана одни из самых широких в стране. Они впечатляют, и вы можете взобраться на камни, чтобы рассмотреть их вблизи.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Приют для слонов в Удавалаве',
            description:
              'Четвёртая остановка: понаблюдайте за оживлённой группой из 20 to 30 молодых слонов, которых кормят четыре раза в день.',
          },
        ],
      },
    ],
  },
  nl: {
    title: 'Sri Lanka Ella Tagestour',
    description:
      'Erleben Sie die Schonheit Ellas an einem erlebnisreichen Tag voller Abenteuer, Kultur und Entspannung.',
    duration: '1 Tag',
    persons: '1 to 20 Reisende',
    tourType: 'Tagestour',
    overview:
      'Entdecken Sie die Schonheit Sri Lankas auf dieser unvergesslichen Tour zur beruhmten Nine Arches Bridge in Ella, wo Sie die malerische Zuguberfahrt bestaunen konnen. Besuchen Sie das Udawalawe Elephant Orphanage, um gerettete Elefanten aus nachster Nahe zu beobachten. Erleben Sie die Naturschonheit der Ravana Wasserfalle, eines der beeindruckendsten Wasserfalle der Insel. Wandern Sie zum Little Adam’s Peak und geniessen Sie einen atemberaubenden Panoramablick uber das Bergland Sri Lankas. Kronen Sie Ihr Abenteuer mit einer Minizugfahrt durch die malerische Landschaft von Ella  fur bleibende Erinnerungen an diese zauberhafte Reise.',
    includes: [
      'Klimatisiertes Privatfahrzeug',
      'Englischsprachiger professioneller Fahrer',
      'Unterkunft & Verpflegung des Fahrers',
      'Abholung & Ruckbringung',
      'Kraftstoff & Parkgebuhren',
      '24 Stunden Service',
      'Unbegrenzte Kilometer fur die gesamte Tour',
      'Ihre Unterkunft',
    ],
    excludes: ['Speisen & Getranke', 'Eintritts und Aktivitatsgebuhren'],
    seoIntro:
      'Ella vereint an einem einzigen Tag mehr ikonische Hugellandschaft, als die meisten Reiseziele in einer ganzen Woche bieten. Diese private Tagestour ab Ihrem Hotel kombiniert die auf Instagram beruhmte Nine Arches Bridge  zeitlich abgestimmt auf malerische Zuguberfahrten  mit einer kurzen Wanderung zum Little Adam\'s Peak, den donnernden Ravana Wasserfallen, einem Abschnitt der Zugfahrt durchs Hugelland und einem Stopp im Udawalawe Elephant Transit Home, um gerettete Elefanten zu sehen. Sundown Tours plant den Tag so, dass Sie den Mittagsandrang an der Brucke vermeiden und, wo moglich, die Zugfahrplane einhalten. Ihr Fahrer Guide ubernimmt die engen Bergstrassen, wahrend Sie sich auf Fotografie und die frische Luft im Teeland konzentrieren konnen. Eintrittsgebuhren und Mittagessen bleiben Ihnen selbst uberlassen, sodass Sie Stopps unterwegs verlangern oder verkurzen konnen.',
    highlights: [
      'Nine Arches Bridge mit Aussichtspunkten fur die legendare Zuguberfahrt',
      'Wanderung zum Little Adam\'s Peak fur 360 Grad Panoramen im Hugelland',
      'Ravana Wasserfalle  einer der breitesten und fotogensten Wasserfalle Sri Lankas',
      'Malerische Zugfahrt durch die Teeplantagen von Ella',
      'Besuch des Udawalawe Elephant Transit Home fur ethisches Tierbeobachten',
    ],
    faq: [
      {
        q: 'Kann diese Ella Tagestour ab Nuwara Eliya oder nur ab Ella Stadt starten?',
        a: 'Wir konnen Sie von Hotels in Ella, Bandarawela, Haputale oder Nuwara Eliya abholen. Der Abholort beeinflusst die Abfahrtszeit  teilen Sie uns Ihr Hotel bei der Buchung mit, damit wir Fahrzeit und Zuganschlusse planen konnen.',
      },
      {
        q: 'Fahren wir die vollstandige Zugstrecke von Kandy nach Ella oder nur einen kurzeren Abschnitt?',
        a: 'Die Tagestour beinhaltet einen malerischen Mini Abschnitt rund um Ella statt der mehrstundigen Gesamtfahrt. Wenn Sie die klassische Strecke Kandy to Ella wunschen, bitten wir Sie, dies stattdessen in eine mehrtagige Rundreise einzubauen.',
      },
      {
        q: 'Wie viel Gehen ist an der Nine Arches Bridge und beim Little Adam\'s Peak erforderlich?',
        a: 'Die Nine Arches Bridge erfordert 15 to 20 Minuten auf unebenen Wegen zum Hauptaussichtspunkt. Little Adam\'s Peak ist ein sanfter 30 to 45 minutiger Aufstieg. Bequeme Schuhe und ein Hut werden empfohlen.',
      },
    ],
    days: [
      {
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Nine Arches Bridge',
            description:
              'Die majestatische Nine Arches Bridge ist einer der Hauptgrunde dafur. Die imposante Brucke zwischen Ella und Demodara zahlt zu den technischen Meisterwerken des fruhen 20. Jahrhunderts.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Zugfahrt durch Ella',
            description:
              'Die Zugfahrt durch Ella gilt als eine der schonsten Bahnstrecken Sri Lankas  wenn nicht der Welt! Geniessen Sie atemberaubende Ausblicke auf uppige Teeplantagen, Berge, Viadukte und Taler.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Little Adam’s Peak',
            description:
              'Mit einer Hohe von 1.141 m dauert der Aufstieg vom Eingang aus etwa 30 to 45 minuten. Der Ausblick vom Gipfel ist grandios  ein 360 Grad Panorama.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Ravana Wasserfall',
            description:
              'Die Ravana Wasserfalle zahlen zu den breitesten Wasserfallen des Landes. Sie sind beeindruckend, und Sie konnen uber die Felsen klettern, um sie aus der Nahe zu erleben.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Elefanten Waisenhaus Udawalawe',
            description:
              'Vierter Stopp: Beobachten Sie eine lebendige Gruppe von rund 20 bis 30 jungen Elefanten, die viermal taglich gefuttert werden.',
          },
        ],
      },
    ],
  }
};
