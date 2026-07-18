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
    seoIntro:
      'A Sigiriya day tour distils two thousand years of history and wild elephant country into a single unforgettable outing. Begin at the Dambulla Cave Temple\'s golden Buddha statues, continue with your choice of climbing Sigiriya Lion Rock or the sunset-friendly Pidurangala viewpoint, and finish with an afternoon jeep safari where herds of elephants roam free. Sundown Tours handles early starts, ticket queues and the heat of the rock ascent so you travel in a private air-conditioned vehicle with an English-speaking driver-guide. Lunch is included; safari jeep and park entrance fees are billed locally so you can opt in or out on the day. Perfect for culture lovers and wildlife photographers based in Colombo, Kandy or the Cultural Triangle.',
    highlights: [
      'UNESCO Dambulla Cave Temple with ancient murals and golden statues',
      'Sigiriya Lion Rock or Pidurangala Rock climb for fortress ruins and jungle views',
      'Afternoon wild elephant safari in Minneriya, Kaudulla or nearby park',
      'Private air-conditioned transport with professional English-speaking driver',
      'Included lunch at a local restaurant between cultural and safari stops',
    ],
    faq: [
      {
        q: 'Should we climb Sigiriya Rock or Pidurangala on a one-day tour?',
        a: 'Sigiriya offers the UNESCO fortress experience with frescoes and palace ruins but involves more steps and heat. Pidurangala is shorter, cheaper and famous for Lion Rock views ideal if you prefer lighter climbing or travel with younger children.',
      },
      {
        q: 'Are safari jeep and national park fees included?',
        a: 'Your tour price covers the vehicle, driver, guide, temple entrances and lunch. Safari park tickets and jeep hire are paid locally (typically USD 30–50 per person) so you can skip the safari if you prefer more time at the rocks.',
      },
      {
        q: 'How early does the day start from Colombo or Kandy?',
        a: 'Plan a 5:00–6:00 am departure from Colombo or 7:00–8:00 am from Kandy to fit Dambulla, the rock climb and an afternoon safari before dusk. We confirm exact pickup when you book.',
      },
    ],
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
    seoIntro:
      'Eine Sigiriya-Tagestour verdichtet zweitausend Jahre Geschichte und wilde Elefantengebiete in einen einzigen unvergesslichen Ausflug. Beginnen Sie bei den goldenen Buddha-Statuen des Höhlentempels von Dambulla, entscheiden Sie sich anschließend für den Aufstieg auf den Löwenfelsen Sigiriya oder den sonnenuntergangsfreundlichen Aussichtspunkt Pidurangala, und schließen Sie den Tag mit einer nachmittäglichen Jeep-Safari ab, bei der Elefantenherden frei umherziehen. Sundown Tours übernimmt frühe Startzeiten, Ticket-Warteschlangen und die Hitze beim Felsaufstieg, während Sie in einem privaten klimatisierten Fahrzeug mit einem englischsprachigen Fahrer-Guide reisen. Mittagessen ist inklusive; Safari-Jeep und Parkeintrittsgebühren werden vor Ort abgerechnet, sodass Sie am Tag selbst entscheiden können. Perfekt für Kulturliebhaber und Tierfotografen mit Standort in Colombo, Kandy oder dem Kultur-Dreieck.',
    highlights: [
      'UNESCO-Höhlentempel von Dambulla mit antiken Wandmalereien und goldenen Statuen',
      'Aufstieg auf den Löwenfelsen Sigiriya oder den Pidurangala-Felsen für Festungsruinen und Dschungelblicke',
      'Nachmittägliche Wildelefanten-Safari in Minneriya, Kaudulla oder einem nahegelegenen Park',
      'Privater klimatisierter Transport mit professionellem englischsprachigem Fahrer',
      'Inklusive Mittagessen in einem lokalen Restaurant zwischen Kultur- und Safari-Stopps',
    ],
    faq: [
      {
        q: 'Sollten wir bei einer eintägigen Tour Sigiriya-Felsen oder Pidurangala besteigen?',
        a: 'Sigiriya bietet das UNESCO-Festungserlebnis mit Fresken und Palastruinen, erfordert aber mehr Stufen und Hitze. Pidurangala ist kürzer, günstiger und berühmt für die Aussicht auf den Löwenfelsen – ideal, wenn Sie einen leichteren Aufstieg bevorzugen oder mit jüngeren Kindern reisen.',
      },
      {
        q: 'Sind Safari-Jeep und Nationalpark-Gebühren enthalten?',
        a: 'Ihr Tourpreis umfasst Fahrzeug, Fahrer, Guide, Tempeleintritte und Mittagessen. Safari-Parktickets und Jeep-Miete werden vor Ort bezahlt (in der Regel 30–50 USD pro Person), sodass Sie die Safari auch auslassen können, um mehr Zeit an den Felsen zu haben.',
      },
      {
        q: 'Wie früh beginnt der Tag von Colombo oder Kandy aus?',
        a: 'Planen Sie eine Abfahrt um 5:00–6:00 Uhr von Colombo oder 7:00–8:00 Uhr von Kandy, um Dambulla, den Felsaufstieg und eine Nachmittags-Safari vor Einbruch der Dunkelheit unterzubringen. Wir bestätigen die genaue Abholzeit bei der Buchung.',
      },
    ],
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
    seoIntro:
      'Une excursion d’une journée à Sigiriya condense deux mille ans d’histoire et un territoire d’éléphants sauvages en une seule sortie inoubliable. Commencez par les statues de Bouddha dorées du temple-grotte de Dambulla, poursuivez au choix par l’ascension du Rocher du Lion de Sigiriya ou le point de vue de Pidurangala, idéal au coucher du soleil, et terminez par un safari en jeep l’après-midi où des troupeaux d’éléphants évoluent en liberté. Sundown Tours gère les départs matinaux, les files d’attente aux billets et la chaleur de l’ascension du rocher, tandis que vous voyagez dans un véhicule privé climatisé avec un chauffeur-guide anglophone. Le déjeuner est inclus ; le jeep de safari et les frais d’entrée au parc sont facturés sur place, vous laissant le choix d’y participer ou non le jour même. Parfait pour les amateurs de culture et les photographes de faune basés à Colombo, Kandy ou dans le Triangle culturel.',
    highlights: [
      'Temple-grotte de Dambulla classé UNESCO avec fresques anciennes et statues dorées',
      'Ascension du Rocher du Lion de Sigiriya ou du rocher de Pidurangala pour les ruines de la forteresse et les vues sur la jungle',
      'Safari aux éléphants sauvages l’après-midi à Minneriya, Kaudulla ou dans un parc voisin',
      'Transport privé climatisé avec chauffeur professionnel anglophone',
      'Déjeuner inclus dans un restaurant local entre les arrêts culturels et le safari',
    ],
    faq: [
      {
        q: 'Devons-nous gravir le rocher de Sigiriya ou celui de Pidurangala lors d’un circuit d’une journée ?',
        a: 'Sigiriya offre l’expérience de la forteresse classée UNESCO avec fresques et ruines du palais, mais implique plus de marches et de chaleur. Pidurangala est plus court, moins cher et réputé pour ses vues sur le Rocher du Lion idéal si vous préférez une ascension plus légère ou voyagez avec de jeunes enfants.',
      },
      {
        q: 'Le jeep de safari et les frais du parc national sont-ils inclus ?',
        a: 'Le prix de votre circuit couvre le véhicule, le chauffeur, le guide, les entrées des temples et le déjeuner. Les billets du parc safari et la location du jeep sont payés sur place (généralement 30 à 50 USD par personne), ce qui vous permet de sauter le safari si vous préférez plus de temps aux rochers.',
      },
      {
        q: 'À quelle heure la journée commence-t-elle depuis Colombo ou Kandy ?',
        a: 'Prévoyez un départ entre 5h00 et 6h00 depuis Colombo ou entre 7h00 et 8h00 depuis Kandy pour intégrer Dambulla, l’ascension du rocher et un safari l’après-midi avant la tombée de la nuit. Nous confirmons l’heure exacte de prise en charge lors de la réservation.',
      },
    ],
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
    seoIntro:
      'Un’escursione di un giorno a Sigiriya condensa duemila anni di storia e un territorio di elefanti selvatici in una sola indimenticabile uscita. Iniziate con le statue dorate del Buddha nel tempio rupestre di Dambulla, continuate scegliendo tra la scalata al Lion Rock di Sigiriya o il punto panoramico di Pidurangala, ideale al tramonto, e concludete con un safari in jeep nel pomeriggio dove mandrie di elefanti vivono libere. Sundown Tours gestisce le partenze anticipate, le code ai biglietti e il caldo della scalata alla roccia, mentre voi viaggiate in un veicolo privato climatizzato con un autista-guida di lingua inglese. Il pranzo è incluso; il jeep per il safari e i biglietti d’ingresso al parco vengono fatturati in loco, così potete decidere il giorno stesso se partecipare o no. Perfetto per gli amanti della cultura e i fotografi naturalisti con base a Colombo, Kandy o nel Triangolo Culturale.',
    highlights: [
      'Tempio rupestre UNESCO di Dambulla con antichi murales e statue dorate',
      'Scalata al Lion Rock di Sigiriya o alla Rocca di Pidurangala per le rovine della fortezza e le viste sulla giungla',
      'Safari agli elefanti selvatici nel pomeriggio a Minneriya, Kaudulla o in un parco vicino',
      'Trasporto privato climatizzato con autista professionista di lingua inglese',
      'Pranzo incluso in un ristorante locale tra le soste culturali e il safari',
    ],
    faq: [
      {
        q: 'Dobbiamo scalare la Roccia di Sigiriya o quella di Pidurangala in un tour di un giorno?',
        a: 'Sigiriya offre l’esperienza della fortezza UNESCO con affreschi e rovine del palazzo, ma comporta più gradini e caldo. Pidurangala è più breve, più economica e famosa per le vedute sul Lion Rock ideale se preferite una salita più leggera o viaggiate con bambini piccoli.',
      },
      {
        q: 'Il jeep per il safari e i biglietti del parco nazionale sono inclusi?',
        a: 'Il prezzo del tour comprende veicolo, autista, guida, ingressi ai templi e pranzo. I biglietti del parco safari e il noleggio del jeep si pagano in loco (generalmente 30-50 USD a persona), così potete saltare il safari se preferite più tempo alle rocce.',
      },
      {
        q: 'A che ora inizia la giornata da Colombo o Kandy?',
        a: 'Prevedete una partenza tra le 5:00 e le 6:00 da Colombo o tra le 7:00 e le 8:00 da Kandy per inserire Dambulla, la scalata alla roccia e un safari pomeridiano prima del tramonto. Confermiamo l’orario esatto di ritiro al momento della prenotazione.',
      },
    ],
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
    seoIntro:
      'Una excursión de un día a Sigiriya condensa dos mil años de historia y un territorio de elefantes salvajes en una sola salida inolvidable. Comience con las estatuas doradas de Buda del templo rupestre de Dambulla, continúe eligiendo entre la ascensión al Lion Rock de Sigiriya o el mirador de Pidurangala, ideal para el atardecer, y termine con un safari en jeep por la tarde donde manadas de elefantes se mueven en libertad. Sundown Tours se encarga de las salidas tempranas, las colas de entradas y el calor de la subida a la roca, mientras usted viaja en un vehículo privado con aire acondicionado y un chófer-guía de habla inglesa. El almuerzo está incluido; el jeep de safari y las entradas al parque se facturan in situ, para que pueda decidir participar o no el mismo día. Perfecto para los amantes de la cultura y los fotógrafos de naturaleza con base en Colombo, Kandy o el Triángulo Cultural.',
    highlights: [
      'Templo rupestre de Dambulla, Patrimonio UNESCO, con antiguos murales y estatuas doradas',
      'Ascenso al Lion Rock de Sigiriya o a la roca de Pidurangala para ver las ruinas de la fortaleza y vistas de la jungla',
      'Safari de elefantes salvajes por la tarde en Minneriya, Kaudulla o un parque cercano',
      'Transporte privado con aire acondicionado y conductor profesional de habla inglesa',
      'Almuerzo incluido en un restaurante local entre las paradas culturales y el safari',
    ],
    faq: [
      {
        q: '¿Deberíamos subir a la roca de Sigiriya o a Pidurangala en un circuito de un día?',
        a: 'Sigiriya ofrece la experiencia de la fortaleza UNESCO con frescos y ruinas del palacio, pero implica más escalones y calor. Pidurangala es más corta, más económica y famosa por sus vistas del Lion Rock, ideal si prefiere una subida más ligera o viaja con niños pequeños.',
      },
      {
        q: '¿Están incluidos el jeep de safari y las tarifas del parque nacional?',
        a: 'El precio de su circuito cubre el vehículo, el conductor, el guía, las entradas a los templos y el almuerzo. Las entradas al parque de safari y el alquiler del jeep se pagan in situ (normalmente entre 30 y 50 USD por persona), por lo que puede omitir el safari si prefiere pasar más tiempo en las rocas.',
      },
      {
        q: '¿A qué hora empieza el día desde Colombo o Kandy?',
        a: 'Planifique una salida entre las 5:00 y las 6:00 desde Colombo o entre las 7:00 y las 8:00 desde Kandy para incluir Dambulla, la subida a la roca y un safari por la tarde antes del atardecer. Confirmamos la hora exacta de recogida al reservar.',
      },
    ],
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
    seoIntro:
      'Jednodniowa wycieczka do Sigiriyi łączy dwa tysiące lat historii i teren dzikich słoni w jedną niezapomnianą wyprawę. Zacznij od złotych posągów Buddy w jaskiniowej świątyni Dambulla, następnie wybierz wspinaczkę na Lion Rock w Sigiriya lub punkt widokowy Pidurangala, idealny na zachód słońca, a na koniec weź udział w popołudniowym safari jeepem, gdzie stada słoni żyją na wolności. Sundown Tours zajmuje się wczesnymi wyjazdami, kolejkami po bilety i upałem podczas wspinaczki na skałę, podczas gdy Państwo podróżują prywatnym klimatyzowanym pojazdem z anglojęzycznym kierowcą-przewodnikiem. Lunch jest wliczony; jeep na safari i opłaty za wstęp do parku są rozliczane na miejscu, dzięki czemu można zdecydować tego samego dnia. Idealna dla miłośników kultury i fotografów przyrody mieszkających w Colombo, Kandy lub Trójkącie Kulturowym.',
    highlights: [
      'Jaskiniowa świątynia Dambulla wpisana na listę UNESCO z antycznymi malowidłami i złotymi posągami',
      'Wspinaczka na Lion Rock w Sigiriya lub skałę Pidurangala dla widoku na ruiny fortecy i dżunglę',
      'Popołudniowe safari z dzikimi słoniami w Minneriya, Kaudulla lub pobliskim parku',
      'Prywatny klimatyzowany transport z profesjonalnym anglojęzycznym kierowcą',
      'Wliczony lunch w lokalnej restauracji między przystankami kulturowymi i safari',
    ],
    faq: [
      {
        q: 'Czy w ramach jednodniowej wycieczki powinniśmy wspinać się na skałę Sigiriya czy Pidurangala?',
        a: 'Sigiriya oferuje doświadczenie fortecy UNESCO z freskami i ruinami pałacu, ale wymaga więcej stopni i wytrzymania upału. Pidurangala jest krótsza, tańsza i znana z widoków na Lion Rock – idealna, jeśli preferujecie łatwiejszą wspinaczkę lub podróżujecie z małymi dziećmi.',
      },
      {
        q: 'Czy jeep na safari i opłaty za park narodowy są wliczone?',
        a: 'Cena wycieczki obejmuje pojazd, kierowcę, przewodnika, wstępy do świątyń i lunch. Bilety do parku safari i wynajem jeepa płaci się na miejscu (zwykle 30–50 USD na osobę), dzięki czemu można pominąć safari, jeśli wolicie więcej czasu przy skałach.',
      },
      {
        q: 'Jak wcześnie zaczyna się dzień z Colombo lub Kandy?',
        a: 'Planujcie wyjazd o 5:00–6:00 z Colombo lub 7:00–8:00 z Kandy, aby zmieścić Dambullę, wspinaczkę na skałę i popołudniowe safari przed zmierzchem. Potwierdzamy dokładną godzinę odbioru przy rezerwacji.',
      },
    ],
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
      'Этот однодневный тур в Сигирию предлагает идеальное сочетание культуры, приключений и дикой природы. Начните с посещения Золотого пещерного храма в Дамбулле, затем взойдите на скальную крепость Сигирия или на скалу Пидурангала ради захватывающих видов. Завершите день увлекательным сафари в поисках диких слонов идеально для любителей природы и истории.',
    includes: [
      'Все входные билеты на достопримечательности (без входа на сафари и джипа)',
      'Дорожные сборы и парковка',
      'Профессиональный англоговорящий водитель',
      'Частный автомобиль с кондиционером',
      'Обед',
    ],
    excludes: ['Входные билеты на сафари и джип', 'Личные расходы'],
    seoIntro:
      'Однодневный тур в Сигирию объединяет две тысячи лет истории и территорию диких слонов в одну незабываемую поездку. Начните с золотых статуй Будды в пещерном храме Dambulla, затем выберите восхождение на Lion Rock в Sigiriya или смотровую точку Pidurangala, идеальную для закатов, и завершите день послеобеденным джип-сафари, где стада слонов свободно бродят по местности. Sundown Tours берёт на себя ранние выезды, очереди за билетами и жару при подъёме на скалу, пока вы путешествуете в частном кондиционированном автомобиле с англоговорящим водителем-гидом. Обед включён; сафари-джип и входные билеты в парк оплачиваются на месте, что позволяет решить в день поездки, участвовать ли в сафари. Идеально для любителей культуры и фотографов дикой природы, проживающих в Коломбо, Канди или Культурном треугольнике.',
    highlights: [
      'Пещерный храм Dambulla, объект ЮНЕСКО, с древними росписями и золотыми статуями',
      'Восхождение на Lion Rock в Sigiriya или скалу Pidurangala с видом на руины крепости и джунгли',
      'Послеобеденное сафари на диких слонов в Minneriya, Kaudulla или соседнем парке',
      'Частный кондиционированный транспорт с профессиональным англоговорящим водителем',
      'Включённый обед в местном ресторане между культурными остановками и сафари',
    ],
    faq: [
      {
        q: 'Стоит ли подниматься на скалу Sigiriya или Pidurangala в рамках однодневного тура?',
        a: 'Sigiriya предлагает впечатления от крепости ЮНЕСКО с фресками и руинами дворца, но требует больше ступеней и жары. Pidurangala короче, дешевле и славится видами на Lion Rock идеально, если вы предпочитаете более лёгкий подъём или путешествуете с маленькими детьми.',
      },
      {
        q: 'Включены ли сафари-джип и сборы за национальный парк?',
        a: 'Стоимость тура включает автомобиль, водителя, гида, входные билеты в храмы и обед. Билеты в парк для сафари и аренда джипа оплачиваются на месте (обычно 30–50 долларов США на человека), так что вы можете пропустить сафари, если предпочитаете больше времени у скал.',
      },
      {
        q: 'Как рано начинается день из Коломбо или Канди?',
        a: 'Планируйте выезд в 5:00–6:00 из Коломбо или в 7:00–8:00 из Канди, чтобы успеть в Dambulla, подняться на скалу и провести послеобеденное сафари до наступления темноты. Мы подтверждаем точное время встречи при бронировании.',
      },
    ],
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
  nl: {
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
    seoIntro:
      'Eine Sigiriya-Tagestour verdichtet zweitausend Jahre Geschichte und wilde Elefantengebiete in einen einzigen unvergesslichen Ausflug. Beginnen Sie bei den goldenen Buddha-Statuen des Höhlentempels von Dambulla, entscheiden Sie sich anschließend für den Aufstieg auf den Löwenfelsen Sigiriya oder den sonnenuntergangsfreundlichen Aussichtspunkt Pidurangala, und schließen Sie den Tag mit einer nachmittäglichen Jeep-Safari ab, bei der Elefantenherden frei umherziehen. Sundown Tours übernimmt frühe Startzeiten, Ticket-Warteschlangen und die Hitze beim Felsaufstieg, während Sie in einem privaten klimatisierten Fahrzeug mit einem englischsprachigen Fahrer-Guide reisen. Mittagessen ist inklusive; Safari-Jeep und Parkeintrittsgebühren werden vor Ort abgerechnet, sodass Sie am Tag selbst entscheiden können. Perfekt für Kulturliebhaber und Tierfotografen mit Standort in Colombo, Kandy oder dem Kultur-Dreieck.',
    highlights: [
      'UNESCO-Höhlentempel von Dambulla mit antiken Wandmalereien und goldenen Statuen',
      'Aufstieg auf den Löwenfelsen Sigiriya oder den Pidurangala-Felsen für Festungsruinen und Dschungelblicke',
      'Nachmittägliche Wildelefanten-Safari in Minneriya, Kaudulla oder einem nahegelegenen Park',
      'Privater klimatisierter Transport mit professionellem englischsprachigem Fahrer',
      'Inklusive Mittagessen in einem lokalen Restaurant zwischen Kultur- und Safari-Stopps',
    ],
    faq: [
      {
        q: 'Sollten wir bei einer eintägigen Tour Sigiriya-Felsen oder Pidurangala besteigen?',
        a: 'Sigiriya bietet das UNESCO-Festungserlebnis mit Fresken und Palastruinen, erfordert aber mehr Stufen und Hitze. Pidurangala ist kürzer, günstiger und berühmt für die Aussicht auf den Löwenfelsen – ideal, wenn Sie einen leichteren Aufstieg bevorzugen oder mit jüngeren Kindern reisen.',
      },
      {
        q: 'Sind Safari-Jeep und Nationalpark-Gebühren enthalten?',
        a: 'Ihr Tourpreis umfasst Fahrzeug, Fahrer, Guide, Tempeleintritte und Mittagessen. Safari-Parktickets und Jeep-Miete werden vor Ort bezahlt (in der Regel 30–50 USD pro Person), sodass Sie die Safari auch auslassen können, um mehr Zeit an den Felsen zu haben.',
      },
      {
        q: 'Wie früh beginnt der Tag von Colombo oder Kandy aus?',
        a: 'Planen Sie eine Abfahrt um 5:00–6:00 Uhr von Colombo oder 7:00–8:00 Uhr von Kandy, um Dambulla, den Felsaufstieg und eine Nachmittags-Safari vor Einbruch der Dunkelheit unterzubringen. Wir bestätigen die genaue Abholzeit bei der Buchung.',
      },
    ],
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
  }
};
