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
    seoIntro:
      'A Galle day tour packs UNESCO fort walls, river mangroves and coastal conservation into one relaxed private outing from Colombo or the south coast. Begin at a sea turtle hatchery to see rehabilitation work, wander the cobbled lanes and ramparts of Galle Dutch Fort with Indian Ocean views, then glide through Bentota River mangroves on a boat safari. Sundown Tours also includes the Peraliya Tsunami Memorial for sobering local history and a moonstone mine visit where Sri Lanka\'s famous blue sheen gems are cut and polished. Your English-speaking driver handles highway tolls and parking in a private air-conditioned vehicle while entrance fees for listed attractions are covered. Lunch stops are flexible at fort cafés or seafood restaurants. Perfect for cruise passengers, beach-hotel guests and families who want culture and nature without an overnight away from the coast.',
    highlights: [
      'Sea turtle hatchery visit with conservation briefing',
      'UNESCO Galle Dutch Fort ramparts, lighthouse and colonial streets',
      'Scenic Bentota River boat ride through mangroves and cinnamon islands',
      'Peraliya Tsunami Memorial and moonstone mine demonstration',
      'Private air-conditioned transport with highway tolls and attraction entrances included',
    ],
    whoIsFor:
      'Ideal for couples, families and cruise-ship visitors based in Colombo, Bentota or Mirissa who want a guided coastal culture day without multi-day driving.',
    bestTimeNote:
      'Year-round; November–April offers calmer seas for the river boat. Morning fort walks avoid midday heat on the ramparts.',
    faq: [
      {
        q: 'Can you pick up from Colombo hotels for the Galle day tour?',
        a: 'Yes we collect from Colombo, Negombo, Bentota, Mirissa and Galle-area hotels. Departure time depends on distance; expect an early start from Colombo to maximise fort and river time.',
      },
      {
        q: 'Are entrance fees really included?',
        a: 'The tour price covers listed attraction entrances, highway tickets and parking. Meals, optional shopping and personal expenses are yours to manage.',
      },
      {
        q: 'How much walking is involved at Galle Fort?',
        a: 'The fort is mostly flat cobblestones with optional rampart walks of 30–60 minutes. Comfortable shoes and sun protection are recommended; we can shorten walking for seniors.',
      },
    ],
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
    seoIntro:
      'Eine Tagestour nach Galle vereint UNESCO-Festungsmauern, Flussmangroven und Meeresschildkröten-Schutz in einem entspannten privaten Ausflug ab Colombo oder der Südküste. Beginnen Sie an einer Meeresschildkröten-Aufzuchtstation, um die Rehabilitationsarbeit zu sehen, schlendern Sie durch die gepflasterten Gassen und Wallanlagen des Galle Dutch Fort mit Blick auf den Indischen Ozean und gleiten Sie anschließend auf einer Bootssafari durch die Mangroven des Bentota-Flusses. Sundown Tours besucht außerdem das Tsunami-Denkmal in Peraliya für einen bewegenden Einblick in die lokale Geschichte sowie eine Mondstein-Mine, in der die berühmten blau schimmernden Edelsteine Sri Lankas geschliffen und poliert werden. Ihr englischsprachiger Fahrer übernimmt Autobahngebühren und Parkplätze in einem klimatisierten Privatfahrzeug, während die Eintrittsgebühren der genannten Attraktionen bereits enthalten sind. Mittagspausen können flexibel in Fort-Cafés oder Fischrestaurants eingelegt werden. Perfekt für Kreuzfahrtgäste, Strandhotel-Reisende und Familien, die Kultur und Natur erleben möchten, ohne eine Übernachtung außerhalb der Küste einzuplanen.',
    highlights: [
      'Besuch der Meeresschildkröten-Aufzuchtstation mit Informationen zum Artenschutz',
      'UNESCO-Weltkulturerbe Galle Dutch Fort mit Wallanlagen, Leuchtturm und Kolonialstraßen',
      'Malerische Bootsfahrt auf dem Bentota-Fluss durch Mangroven und Zimtinseln',
      'Tsunami-Denkmal in Peraliya und Vorführung in einer Mondstein-Mine',
      'Privater klimatisierter Transport inklusive Autobahngebühren und Eintrittsgeldern',
    ],
    whoIsFor:
      'Ideal für Paare, Familien und Kreuzfahrtgäste mit Standort in Colombo, Bentota oder Mirissa, die einen geführten Küsten- und Kulturtag ohne mehrtägige Fahrten wünschen.',
    bestTimeNote:
      'Ganzjährig möglich; von November bis April ist die See für die Bootsfahrt ruhiger. Frühe Spaziergänge durch das Fort vermeiden die Mittagshitze auf den Wallanlagen.',
    faq: [
      {
        q: 'Können Sie Gäste aus Hotels in Colombo für die Galle-Tagestour abholen?',
        a: 'Ja – wir holen Sie in Colombo, Negombo, Bentota, Mirissa und in Hotels der Region Galle ab. Die Abfahrtszeit hängt von der Entfernung ab; aus Colombo ist ein früher Start sinnvoll, um möglichst viel Zeit im Fort und auf dem Fluss zu haben.',
      },
      {
        q: 'Sind die Eintrittsgebühren wirklich enthalten?',
        a: 'Der Tourpreis umfasst die aufgeführten Eintrittsgebühren, Autobahngebühren und Parkgebühren. Mahlzeiten, optionale Einkäufe und persönliche Ausgaben organisieren Sie selbst.',
      },
      {
        q: 'Wie viel muss man im Galle Fort zu Fuß gehen?',
        a: 'Das Fort besteht größtenteils aus flachem Kopfsteinpflaster mit optionalen 30- bis 60-minütigen Spaziergängen auf den Wallanlagen. Bequeme Schuhe und Sonnenschutz werden empfohlen; für Senioren können wir die Gehstrecke verkürzen.',
      },
    ],
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
    seoIntro:
      'Une excursion d’une journée à Galle réunit les remparts classés à l’UNESCO, les mangroves fluviales et la protection marine en une seule sortie privée relaxante depuis Colombo ou la côte sud. Commencez par une écloserie de tortues marines pour découvrir le travail de réhabilitation, puis flânez dans les ruelles pavées et sur les remparts du fort de Galle (Dutch Fort) avec vue sur l’océan Indien, avant de glisser à travers les mangroves de la rivière Bentota lors d’une balade en bateau. Sundown Tours inclut également le Mémorial du tsunami de Peraliya pour un moment d’histoire locale poignant et la visite d’une mine de pierres de lune, où sont taillées et polies les célèbres gemmes bleutées du Sri Lanka. Votre chauffeur anglophone se charge des péages et du stationnement à bord d’un véhicule privé climatisé, tandis que les droits d’entrée des sites mentionnés sont inclus. Les pauses repas sont flexibles, dans des cafés du fort ou des restaurants de fruits de mer. Idéal pour les passagers de croisière, les vacanciers en hôtel de plage et les familles souhaitant allier culture et nature sans nuitée hors de la côte.',
    highlights: [
      'Visite d’une écloserie de tortues marines avec explications sur la conservation',
      'Remparts, phare et rues coloniales du fort de Galle classé à l’UNESCO',
      'Balade en bateau pittoresque sur la rivière Bentota à travers mangroves et îles à cannelle',
      'Mémorial du tsunami de Peraliya et démonstration dans une mine de pierres de lune',
      'Transport privé climatisé avec péages et droits d’entrée inclus',
    ],
    whoIsFor:
      'Idéal pour les couples, les familles et les passagers de croisière basés à Colombo, Bentota ou Mirissa souhaitant une journée culturelle et côtière guidée sans road-trip de plusieurs jours.',
    bestTimeNote:
      'Praticable toute l’année ; de novembre à avril, la mer est plus calme pour la balade en bateau. Une visite matinale du fort permet d’éviter la chaleur de midi sur les remparts.',
    faq: [
      {
        q: 'Peut-on être pris en charge depuis un hôtel de Colombo pour l’excursion à Galle ?',
        a: 'Oui nous assurons la prise en charge depuis Colombo, Negombo, Bentota, Mirissa et les hôtels de la région de Galle. L’heure de départ dépend de la distance ; prévoyez un départ matinal depuis Colombo pour profiter au maximum du fort et de la rivière.',
      },
      {
        q: 'Les droits d’entrée sont-ils vraiment inclus ?',
        a: 'Le prix de l’excursion couvre les droits d’entrée des sites listés, les péages et le stationnement. Les repas, les achats optionnels et les dépenses personnelles restent à votre charge.',
      },
      {
        q: 'Faut-il marcher beaucoup dans le fort de Galle ?',
        a: 'Le fort est presque entièrement plat, sur des pavés, avec des promenades optionnelles sur les remparts de 30 à 60 minutes. Chaussures confortables et protection solaire recommandées ; nous pouvons réduire la marche pour les personnes âgées.',
      },
    ],
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
    seoIntro:
      'Un’escursione di un giorno a Galle racchiude le mura del forte patrimonio UNESCO, le mangrovie fluviali e la tutela marina in un’unica rilassante gita privata da Colombo o dalla costa sud. Si inizia in un vivaio di tartarughe marine per scoprire il lavoro di riabilitazione, per poi passeggiare tra le stradine in pietra e i bastioni del Forte Olandese di Galle con vista sull’Oceano Indiano, e infine scivolare tra le mangrovie del fiume Bentota durante una gita in barca. Sundown Tours include anche il Memoriale dello Tsunami di Peraliya, per un momento di storia locale toccante, e la visita a una miniera di pietre di luna, dove vengono tagliate e lucidate le famose gemme dai riflessi blu dello Sri Lanka. Il vostro autista di lingua inglese si occupa di pedaggi e parcheggi a bordo di un veicolo privato climatizzato, mentre gli ingressi alle attrazioni indicate sono già inclusi. Le soste per il pranzo sono flessibili, tra caffè del forte o ristoranti di pesce. Perfetta per i passeggeri delle crociere, gli ospiti degli hotel sulla spiaggia e le famiglie che desiderano vivere cultura e natura senza pernottare fuori dalla costa.',
    highlights: [
      'Visita al vivaio di tartarughe marine con spiegazione sulla conservazione',
      'Bastioni, faro e vie coloniali del Forte Olandese di Galle, patrimonio UNESCO',
      'Panoramica gita in barca sul fiume Bentota tra mangrovie e isole di cannella',
      'Memoriale dello Tsunami di Peraliya e dimostrazione in una miniera di pietre di luna',
      'Trasporto privato climatizzato con pedaggi e ingressi alle attrazioni incluse',
    ],
    whoIsFor:
      'Ideale per coppie, famiglie e passeggeri di crociera con base a Colombo, Bentota o Mirissa che desiderano una giornata guidata di cultura costiera senza spostamenti di più giorni.',
    bestTimeNote:
      'Disponibile tutto l’anno; da novembre ad aprile il mare è più calmo per la gita in barca. Le passeggiate al forte al mattino evitano il caldo di mezzogiorno sui bastioni.',
    faq: [
      {
        q: 'È possibile il ritiro dagli hotel di Colombo per l’escursione a Galle?',
        a: 'Sì effettuiamo il ritiro da Colombo, Negombo, Bentota, Mirissa e dagli hotel della zona di Galle. L’orario di partenza dipende dalla distanza; da Colombo conviene partire presto per avere più tempo al forte e sul fiume.',
      },
      {
        q: 'Gli ingressi alle attrazioni sono davvero inclusi?',
        a: 'Il prezzo del tour comprende gli ingressi alle attrazioni indicate, i pedaggi autostradali e il parcheggio. Pasti, shopping opzionale e spese personali restano a vostro carico.',
      },
      {
        q: 'Quanto si cammina al Forte di Galle?',
        a: 'Il forte è quasi tutto pianeggiante su ciottoli, con camminate opzionali sui bastioni di 30-60 minuti. Si consigliano scarpe comode e protezione solare; per gli anziani possiamo ridurre il tratto a piedi.',
      },
    ],
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
    seoIntro:
      'Una excursión de un día a Galle reúne las murallas del fuerte declarado Patrimonio de la Humanidad, los manglares del río y la conservación marina en una única salida privada y relajada desde Colombo o la costa sur. Comience en un vivero de tortugas marinas para conocer la labor de rehabilitación, pasee por las calles empedradas y las murallas del Fuerte Holandés de Galle con vistas al océano Índico, y navegue después por los manglares del río Bentota en un paseo en barco. Sundown Tours incluye también el Memorial del Tsunami de Peraliya, para un emotivo recorrido por la historia local, y la visita a una mina de piedra lunar, donde se tallan y pulen las famosas gemas de brillo azulado de Sri Lanka. Su chófer de habla inglesa se encarga de los peajes y el aparcamiento en un vehículo privado con aire acondicionado, mientras que las entradas a las atracciones indicadas ya están incluidas. Las paradas para comer son flexibles, en cafés del fuerte o restaurantes de marisco. Perfecta para pasajeros de crucero, huéspedes de hoteles de playa y familias que desean disfrutar de cultura y naturaleza sin pasar la noche fuera de la costa.',
    highlights: [
      'Visita a un vivero de tortugas marinas con explicación sobre su conservación',
      'Murallas, faro y calles coloniales del Fuerte Holandés de Galle, Patrimonio de la Humanidad',
      'Pintoresco paseo en barco por el río Bentota entre manglares e islas de canela',
      'Memorial del Tsunami de Peraliya y demostración en una mina de piedra lunar',
      'Transporte privado con aire acondicionado, con peajes y entradas incluidos',
    ],
    whoIsFor:
      'Ideal para parejas, familias y pasajeros de crucero alojados en Colombo, Bentota o Mirissa que buscan un día costero y cultural guiado sin desplazamientos de varios días.',
    bestTimeNote:
      'Disponible todo el año; de noviembre a abril el mar está más calmado para el paseo en barco. Las visitas matutinas al fuerte evitan el calor del mediodía en las murallas.',
    faq: [
      {
        q: '¿Se puede recoger desde hoteles de Colombo para la excursión a Galle?',
        a: 'Sí, recogemos en Colombo, Negombo, Bentota, Mirissa y hoteles de la zona de Galle. La hora de salida depende de la distancia; conviene salir temprano desde Colombo para aprovechar más tiempo en el fuerte y el río.',
      },
      {
        q: '¿Las entradas están realmente incluidas?',
        a: 'El precio de la excursión incluye las entradas a las atracciones indicadas, los peajes y el aparcamiento. Las comidas, las compras opcionales y los gastos personales corren por su cuenta.',
      },
      {
        q: '¿Cuánto se camina en el Fuerte de Galle?',
        a: 'El fuerte es en su mayoría llano y empedrado, con paseos opcionales por las murallas de 30 a 60 minutos. Se recomienda calzado cómodo y protección solar; para personas mayores podemos reducir el recorrido a pie.',
      },
    ],
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
    seoIntro:
      'Jednodniowa wycieczka do Galle łączy mury fortu wpisanego na listę UNESCO, namorzynowe lasy nad rzeką i ochronę morskich żółwi w jednym relaksującym, prywatnym wypadzie z Colombo lub z południowego wybrzeża. Zaczynamy w wylęgarni żółwi morskich, aby zobaczyć pracę na rzecz ich ochrony, następnie przechadzamy się brukowanymi uliczkami i wałami Holenderskiego Fortu w Galle z widokiem na Ocean Indyjski, po czym płyniemy łodzią przez namorzyny rzeki Bentota. Sundown Tours obejmuje również Pomnik Tsunami w Peraliya, będący poruszającym świadectwem lokalnej historii, oraz wizytę w kopalni kamieni księżycowych, gdzie szlifuje się i poleruje słynne, niebiesko połyskujące klejnoty Sri Lanki. Nasz anglojęzyczny kierowca zajmuje się opłatami autostradowymi i parkingiem, prowadząc klimatyzowany prywatny pojazd, a bilety wstępu do wymienionych atrakcji są już wliczone w cenę. Przerwy na lunch są elastyczne – w kawiarniach na terenie fortu lub restauracjach z owocami morza. Idealna opcja dla pasażerów wycieczkowców, gości hoteli plażowych i rodzin, które chcą poznać kulturę i naturę bez noclegu poza wybrzeżem.',
    highlights: [
      'Wizyta w wylęgarni żółwi morskich z omówieniem działań ochronnych',
      'Wpisane na listę UNESCO wały, latarnia morska i kolonialne uliczki Holenderskiego Fortu w Galle',
      'Malowniczy rejs łodzią po rzece Bentota wśród namorzynów i wysp cynamonowych',
      'Pomnik Tsunami w Peraliya oraz prezentacja w kopalni kamieni księżycowych',
      'Prywatny klimatyzowany transport z wliczonymi opłatami autostradowymi i biletami wstępu',
    ],
    whoIsFor:
      'Idealna dla par, rodzin i pasażerów wycieczkowców zatrzymujących się w Colombo, Bentota lub Mirissie, którzy chcą spędzić dzień na wybrzeżu z przewodnikiem bez wielodniowej podróży samochodem.',
    bestTimeNote:
      'Dostępna przez cały rok; od listopada do kwietnia morze jest spokojniejsze podczas rejsu łodzią. Poranne zwiedzanie fortu pozwala uniknąć południowego upału na wałach.',
    faq: [
      {
        q: 'Czy możecie odebrać nas z hoteli w Colombo na wycieczkę do Galle?',
        a: 'Tak – odbieramy z Colombo, Negombo, Bentota, Mirissy oraz hoteli w okolicy Galle. Godzina wyjazdu zależy od odległości; z Colombo warto wyruszyć wcześnie, aby mieć więcej czasu na fort i rzekę.',
      },
      {
        q: 'Czy bilety wstępu są naprawdę wliczone w cenę?',
        a: 'Cena wycieczki obejmuje bilety wstępu do wymienionych atrakcji, opłaty autostradowe i parking. Posiłki, opcjonalne zakupy i wydatki osobiste pokrywają Państwo samodzielnie.',
      },
      {
        q: 'Jak dużo trzeba chodzić w Forcie Galle?',
        a: 'Fort jest w większości płaski i wybrukowany, z opcjonalnymi 30–60-minutowymi spacerami po wałach. Zalecamy wygodne buty i ochronę przed słońcem; dla seniorów możemy skrócić trasę pieszą.',
      },
    ],
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
      'Этот однодневный тур с гидом в Галле идеальное сочетание природы, истории и культуры. Вы посетите знаменитую станцию по спасению морских черепах, исследуете исторический Голландский форт Галле, насладитесь спокойной прогулкой на лодке по реке Бентота и узнаете об истории Шри-Ланки у Мемориала цунами и в центре Moonstone Mine Centre. Идеально для пар, семей и небольших групп, которые ищут комфортный и познавательный день.',
    includes: [
      'Все входные билеты на достопримечательности',
      'Дорожные сборы и парковка',
      'Профессиональный англоговорящий водитель',
      'Частный автомобиль с кондиционером',
    ],
    excludes: ['Еда и напитки', 'Входные билеты и оплата активностей'],
    seoIntro:
      'Однодневный тур в Галле объединяет стены форта, включённого в список ЮНЕСКО, речные мангровые заросли и охрану морских черепах в одной спокойной частной поездке из Коломбо или с южного побережья. Начните со станции по спасению морских черепах, чтобы увидеть работу по их реабилитации, затем прогуляйтесь по мощёным улочкам и бастионам Голландского форта Галле с видом на Индийский океан, а после отправляйтесь на лодочную прогулку через мангровые заросли реки Бентота. Sundown Tours также включает Мемориал цунами в Пералии трогательное напоминание о местной истории и посещение мондстоуновой шахты, где обрабатывают и полируют знаменитые голубоватые лунные камни Шри-Ланки. Ваш англоговорящий водитель берёт на себя дорожные сборы и парковку на частном автомобиле с кондиционером, а входные билеты на указанные достопримечательности уже включены. Обеденные остановки гибкие в кафе форта или ресторанах морепродуктов. Идеально для пассажиров круизов, гостей пляжных отелей и семей, которые хотят познакомиться с культурой и природой без ночёвки вдали от побережья.',
    highlights: [
      'Посещение станции по спасению морских черепах с рассказом об охране видов',
      'Бастионы, маяк и колониальные улочки Голландского форта Галле, объекта ЮНЕСКО',
      'Живописная лодочная прогулка по реке Бентота среди мангровых зарослей и коричных островов',
      'Мемориал цунами в Пералии и демонстрация обработки лунного камня на шахте',
      'Частный транспорт с кондиционером, включающий дорожные сборы и входные билеты',
    ],
    whoIsFor:
      'Идеально для пар, семей и пассажиров круизов, проживающих в Коломбо, Бентота или Мирисса, которые хотят провести день у побережья с гидом без многодневных переездов.',
    bestTimeNote:
      'Доступен круглый год; с ноября по апрель море спокойнее для лодочной прогулки. Утренняя прогулка по форту помогает избежать полуденной жары на бастионах.',
    faq: [
      {
        q: 'Можно ли забрать нас из отелей Коломбо для тура в Галле?',
        a: 'Да мы забираем гостей из Коломбо, Негомбо, Бентота, Мирисса и отелей в районе Галле. Время выезда зависит от расстояния; из Коломбо рекомендуется ранний старт, чтобы было больше времени на форт и реку.',
      },
      {
        q: 'Действительно ли входные билеты включены в стоимость?',
        a: 'Стоимость тура включает входные билеты на указанные достопримечательности, дорожные сборы и парковку. Питание, дополнительный шопинг и личные расходы вы оплачиваете самостоятельно.',
      },
      {
        q: 'Много ли нужно ходить пешком в форте Галле?',
        a: 'Форт в основном плоский и вымощен камнем, с необязательными 30–60-минутными прогулками по бастионам. Рекомендуем удобную обувь и защиту от солнца; для пожилых гостей маршрут можно сократить.',
      },
    ],
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
              'Исследуйте объект Всемирного наследия ЮНЕСКО Голландский форт Галле, богатый колониальной историей и потрясающими видами на океан.',
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
