import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka family tours guide (pageId: guideFamilyTours).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const FAMILY_TOURS_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Family Tours: Private Trips with Children',
    lead: 'Family holidays in Sri Lanka work best with a private vehicle, shorter driving days and a mix of wildlife, gentle culture stops and beach time. We plan around school holiday dates from Europe and the ages of your children not a fixed coach schedule.',
    heroImage: 'assets/img/5daysTours/33.webp',
    heroAlt: 'Family-friendly Sri Lanka private tour with wildlife and beach time',
    sections: [
      {
        id: 'whyPrivate',
        title: 'Why families prefer private tours',
        body: 'Children need snacks, bathroom breaks and flexible timing that a shared coach tour simply cannot offer. A private chauffeur can stop whenever it suits your family, keep the air conditioning running, and rework the day’s plan on the fly if someone is tired or feeling car-sick.\n\nLet us know your car seat or booster preferences before arrival so the right seats are already fitted in the vehicle when you land, instead of being sorted out on day one.',
      },
      {
        id: 'pacing',
        title: 'Pacing for different ages',
        body: 'Toddlers and pre-schoolers do best with fewer hotel changes and more downtime by the pool, garden or beach between activities. Older children and teens usually enjoy the climb at Sigiriya (with realistic expectations set in advance), a scenic train segment and an early-morning safari jeep.\n\nWe avoid stacking a temple visit, a hike and a long transfer into the same day unless your teenagers specifically ask for a packed schedule we work with slower mornings instead.',
      },
      {
        id: 'wildlife',
        title: 'Wildlife and safety with kids',
        body: 'Jeep safaris become genuinely memorable for families when timed for the cooler morning hours and paired with realistic expectations about what you will see. Our guides brief every guest, including children, on staying seated, keeping voices down and never feeding wild animals.\n\nTemple visits call for modest clothing and bare feet on the stone floors pack a pair of socks for hot afternoons and we explain the etiquette to your children beforehand so nobody feels caught out.',
      },
      {
        id: 'hotels',
        title: 'Hotels and practical logistics',
        body: 'Family rooms, connecting rooms or villa-style stays with a plunge pool are far easier on parents than hopping between boutique doubles every single night. We suggest bases that cut down on repacking and let your children unwind.\n\nA WhatsApp group with your driver-guide lets you share how the kids are coping each day tired, hungry, thriving so the itinerary can flex in real time rather than waiting for an evening review.',
      },
      {
        id: 'withSundown',
        title: 'Planning a family tour with Sundown Tours',
        body: 'Share your children’s ages, your school-holiday window and any must-see stops, and we will propose a private route with clear driving times, optional safaris and a few beach nights to recharge.\n\nAirport pickup at Bandaranaike International (CMB) is included on every multi-day family package, so the first, most tiring day of the trip stays calm and predictable.',
      },
    ],
    faq: [
      {
        q: 'What is a good length for a family Sri Lanka tour?',
        a: 'Seven to ten days suits most families, combining a few cultural highlights, one wildlife morning and enough beach time to avoid exhaustion by the end of the trip.',
      },
      {
        q: 'Are safaris suitable for young children?',
        a: 'Often yes, especially on shorter morning jeep drives, but tell us your children’s ages and nap schedules first so we can pick the right park and timing.',
      },
      {
        q: 'Can you provide child seats?',
        a: 'Yes request them when you book so we can confirm the right size and availability for your vehicle before you arrive.',
      },
      {
        q: 'How do you handle food for picky eaters?',
        a: 'Hotels and roadside restaurants almost always offer simple rice, noodle or western options alongside local dishes, and we plan lunch stops with families in mind.',
      },
    ],
    ctaTitle: 'Plan a private family tour',
    ctaBody: 'Tell us your children’s ages and travel dates and we will design a private chauffeur itinerary with sensible pacing built in.',
    ctaLabel: 'Contact us',
    relatedTours: [
      { pageId: 'tour7', label: '7-Day Sri Lanka Tour' },
      { pageId: 'tour10', label: '10-Day Sri Lanka Tour' },
      { pageId: 'tour5', label: '5-Day Sri Lanka Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Safari Guide' },
      { pageId: 'guideSafety', label: 'Safety Guide' },
      { pageId: 'guideBestTime', label: 'Best Time to Visit' },
      { pageId: 'guidePrivateDriver', label: 'Private Driver Guide' },
    ],
  },

  de: {
    h1: 'Sri Lanka Familienreisen: Private Touren mit Kindern',
    lead: 'Familienurlaub in Sri Lanka gelingt am besten mit einem privaten Fahrzeug, kürzeren Fahrtstrecken pro Tag und einer Mischung aus Wildlife, sanften Kulturstopps und Strandzeit. Wir planen rund um die Schulferien in Europa und das Alter Ihrer Kinder nicht nach einem starren Busfahrplan.',
    heroAlt: 'Familienfreundliche private Sri-Lanka-Rundreise mit Wildlife und Strandzeit',
    sections: [
      {
        title: 'Warum Familien private Touren bevorzugen',
        body: 'Kinder brauchen Snacks, Toilettenpausen und flexible Zeitplanung etwas, das ein Gruppenbus nicht bieten kann. Ein privater Fahrer hält an, wann immer es Ihrer Familie passt, hält die Klimaanlage am Laufen und passt den Tagesplan spontan an, wenn jemand müde ist oder ihm unterwegs schlecht wird.\n\nTeilen Sie uns Ihre Wünsche zu Kindersitzen oder Sitzerhöhungen schon vor der Anreise mit, damit die passenden Sitze bereits im Fahrzeug montiert sind, wenn Sie landen und nicht erst am ersten Tag organisiert werden müssen.',
      },
      {
        title: 'Das richtige Tempo für jedes Alter',
        body: 'Kleinkinder und Vorschulkinder kommen mit weniger Hotelwechseln und mehr Ruhezeit am Pool, im Garten oder am Strand besser zurecht. Ältere Kinder und Teenager genießen oft den Aufstieg zum Sigiriya-Felsen (mit realistischen Erwartungen vorab), eine Zugfahrt durch die Berge und einen frühen Safari-Vormittag im Jeep.\n\nWir vermeiden es, Tempelbesuch, Wanderung und lange Fahrstrecke in einen einzigen Tag zu packen es sei denn, Ihre Teenager wünschen sich ausdrücklich ein volles Programm. Lieber ruhigere Vormittage.',
      },
      {
        title: 'Wildlife und Sicherheit mit Kindern',
        body: 'Jeep-Safaris werden für Familien richtig unvergesslich, wenn sie in die kühleren Morgenstunden gelegt werden und die Erwartungen an Tierbeobachtungen realistisch bleiben. Unsere Guides erklären allen Gästen auch den Kindern , sitzen zu bleiben, leise zu sein und Wildtiere niemals zu füttern.\n\nTempelbesuche erfordern zurückhaltende Kleidung und bloße Füße auf dem Steinboden packen Sie Socken für heiße Nachmittage ein. Wir erklären die Etikette vorab auch Ihren Kindern, damit niemand überrascht wird.',
      },
      {
        title: 'Hotels und praktische Logistik',
        body: 'Familienzimmer, verbundene Zimmer oder Villen mit eigenem Pool sind für Eltern deutlich entspannter als jede Nacht ein neues Boutique-Doppelzimmer. Wir schlagen Unterkünfte vor, die das ständige Neupacken reduzieren und Ihren Kindern Zeit zum Entspannen lassen.\n\nEine WhatsApp-Gruppe mit Ihrem Fahrer-Guide hilft, täglich mitzuteilen, wie es den Kindern geht müde, hungrig, bestens gelaunt , damit sich die Route in Echtzeit anpassen lässt, statt erst am Abend zu reagieren.',
      },
      {
        title: 'Eine Familienreise mit Sundown Tours planen',
        body: 'Nennen Sie uns das Alter Ihrer Kinder, Ihren Schulferienzeitraum und die Highlights, die Sie unbedingt sehen möchten wir erstellen eine private Route mit klaren Fahrzeiten, optionalen Safaris und ein paar Strandnächten zur Erholung.\n\nDie Abholung am Flughafen Bandaranaike (CMB) ist bei jedem mehrtägigen Familienpaket inklusive, damit der anstrengendste Tag der Reise entspannt und planbar bleibt.',
      },
    ],
    faq: [
      {
        q: 'Wie lang sollte eine Familienreise durch Sri Lanka sein?',
        a: 'Sieben bis zehn Tage passen für die meisten Familien eine Mischung aus kulturellen Highlights, einem Wildlife-Vormittag und genügend Strandzeit, ohne dass jemand am Ende erschöpft ist.',
      },
      {
        q: 'Sind Safaris für kleine Kinder geeignet?',
        a: 'Oft ja, besonders bei kürzeren Jeep-Touren am Morgen sagen Sie uns aber vorab das Alter und die Schlafenszeiten Ihrer Kinder, damit wir Park und Timing passend wählen.',
      },
      {
        q: 'Können Sie Kindersitze bereitstellen?',
        a: 'Ja fragen Sie danach bereits bei der Buchung, damit wir die passende Größe und Verfügbarkeit für Ihr Fahrzeug bestätigen können.',
      },
      {
        q: 'Wie gehen Sie mit wählerischen Essern um?',
        a: 'Hotels und Restaurants am Straßenrand bieten fast immer einfache Reis-, Nudel- oder westliche Gerichte neben lokalen Speisen an, und wir planen Mittagsstopps mit Familien im Hinterkopf.',
      },
    ],
    ctaTitle: 'Private Familienreise planen',
    ctaBody: 'Nennen Sie uns das Alter Ihrer Kinder und Ihre Reisedaten wir gestalten eine private Chauffeur-Route mit einem Tempo, das zu Ihrer Familie passt.',
    ctaLabel: 'Kontakt aufnehmen',
    relatedTours: [
      { pageId: 'tour7', label: '7-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour10', label: '10-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Safari-Ratgeber' },
      { pageId: 'guideSafety', label: 'Sicherheitsratgeber' },
      { pageId: 'guideBestTime', label: 'Beste Reisezeit' },
      { pageId: 'guidePrivateDriver', label: 'Ratgeber privater Fahrer' },
    ],
  },

  fr: {
    h1: 'Circuits Sri Lanka en famille : voyages privés avec enfants',
    lead: 'Les vacances en famille au Sri Lanka se passent mieux avec un véhicule privé, des journées de route plus courtes et un mélange de faune, d’étapes culturelles douces et de temps à la plage. Nous planifions selon les dates de vacances scolaires en Europe et l’âge de vos enfants pas selon un horaire de bus fixe.',
    heroAlt: 'Circuit privé au Sri Lanka adapté aux familles, avec faune et temps à la plage',
    sections: [
      {
        title: 'Pourquoi les familles préfèrent les circuits privés',
        body: 'Les enfants ont besoin de collations, de pauses toilettes et d’horaires flexibles ce qu’un circuit en autocar partagé ne peut pas offrir. Un chauffeur privé s’arrête quand votre famille en a besoin, garde la climatisation en marche et ajuste le programme du jour si quelqu’un est fatigué ou a le mal des transports.\n\nIndiquez-nous vos préférences de siège auto ou de réhausseur avant votre arrivée, afin que les bons sièges soient déjà installés dans le véhicule à votre atterrissage, plutôt que réglés le premier jour.',
      },
      {
        title: 'Le bon rythme selon l’âge des enfants',
        body: 'Les tout-petits et les enfants d’âge préscolaire s’adaptent mieux avec moins de changements d’hôtel et plus de temps calme à la piscine, au jardin ou à la plage. Les enfants plus grands et les adolescents apprécient souvent l’ascension du Sigiriya (avec des attentes réalistes fixées à l’avance), un trajet en train panoramique et une matinée de safari en jeep.\n\nNous évitons de caser un temple, une randonnée et un long trajet dans une seule journée à moins que vos adolescents ne demandent expressément un programme chargé. Nous préférons des matinées plus tranquilles.',
      },
      {
        title: 'Faune et sécurité avec des enfants',
        body: 'Les safaris en jeep deviennent vraiment mémorables pour les familles lorsqu’ils sont programmés aux heures fraîches du matin, avec des attentes réalistes sur les animaux que l’on peut observer. Nos guides expliquent à tous les invités, enfants compris, de rester assis, de parler doucement et de ne jamais nourrir les animaux sauvages.\n\nLes visites de temples demandent une tenue modeste et des pieds nus sur le sol de pierre prévoyez des chaussettes pour les après-midis chauds. Nous expliquons l’étiquette à vos enfants à l’avance pour que personne ne soit pris au dépourvu.',
      },
      {
        title: 'Hôtels et logistique pratique',
        body: 'Des chambres familiales, des chambres communicantes ou des villas avec piscine privée sont bien plus reposantes pour les parents que de changer d’hôtel-boutique chaque soir. Nous proposons des bases qui réduisent le rangement des valises et laissent vos enfants souffler.\n\nUn groupe WhatsApp avec votre chauffeur-guide permet de signaler chaque jour la forme des enfants fatigués, affamés, en pleine forme afin d’ajuster l’itinéraire en temps réel plutôt que d’attendre un bilan en soirée.',
      },
      {
        title: 'Organiser un circuit en famille avec Sundown Tours',
        body: 'Indiquez-nous l’âge de vos enfants, votre période de vacances scolaires et vos incontournables ; nous proposerons un itinéraire privé avec des temps de route clairs, des safaris en option et quelques nuits à la plage pour récupérer.\n\nLe transfert depuis l’aéroport de Bandaranaike (CMB) est inclus dans tous nos forfaits familiaux de plusieurs jours, pour que la journée la plus fatigante du voyage reste calme et prévisible.',
      },
    ],
    faq: [
      {
        q: 'Quelle est une bonne durée pour un circuit en famille au Sri Lanka ?',
        a: 'Sept à dix jours conviennent à la plupart des familles, en combinant quelques temps forts culturels, une matinée de faune et assez de temps à la plage pour éviter l’épuisement en fin de séjour.',
      },
      {
        q: 'Les safaris conviennent-ils aux jeunes enfants ?',
        a: 'Souvent oui, surtout lors de sorties matinales plus courtes en jeep mais indiquez-nous d’abord l’âge de vos enfants et leurs horaires de sieste afin que nous choisissions le bon parc et le bon moment.',
      },
      {
        q: 'Pouvez-vous fournir des sièges enfant ?',
        a: 'Oui demandez-les dès la réservation afin que nous confirmions la taille adaptée et la disponibilité pour votre véhicule.',
      },
      {
        q: 'Comment gérez-vous les enfants difficiles à table ?',
        a: 'Les hôtels et restaurants en bord de route proposent presque toujours du riz, des nouilles ou des plats occidentaux simples à côté des plats locaux, et nous prévoyons les pauses déjeuner en pensant aux familles.',
      },
    ],
    ctaTitle: 'Organiser un circuit privé en famille',
    ctaBody: 'Indiquez-nous l’âge de vos enfants et vos dates de voyage nous concevrons un itinéraire privé avec chauffeur, au rythme adapté à votre famille.',
    ctaLabel: 'Nous contacter',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit de 7 jours au Sri Lanka' },
      { pageId: 'tour10', label: 'Circuit de 10 jours au Sri Lanka' },
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guide du safari' },
      { pageId: 'guideSafety', label: 'Guide de sécurité' },
      { pageId: 'guideBestTime', label: 'Meilleure période pour visiter' },
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur privé' },
    ],
  },

  it: {
    h1: 'Tour Sri Lanka in famiglia: viaggi privati con bambini',
    lead: 'Le vacanze in famiglia in Sri Lanka riescono meglio con un veicolo privato, giornate di guida più brevi e un mix di natura selvaggia, tappe culturali leggere e tempo in spiaggia. Pianifichiamo in base alle vacanze scolastiche europee e all’età dei vostri figli non secondo un orario di pullman fisso.',
    heroAlt: 'Tour privato in Sri Lanka adatto alle famiglie, con fauna selvatica e tempo in spiaggia',
    sections: [
      {
        title: 'Perché le famiglie preferiscono i tour privati',
        body: 'I bambini hanno bisogno di merende, pause bagno e orari flessibili qualcosa che un tour in pullman condiviso non può offrire. Un autista privato si ferma quando serve alla vostra famiglia, tiene l’aria condizionata accesa e modifica il programma della giornata se qualcuno è stanco o soffre il mal d’auto.\n\nComunicateci le vostre preferenze su seggiolini o rialzi prima dell’arrivo, così i seggiolini giusti sono già montati in auto quando atterrate, invece di essere sistemati il primo giorno.',
      },
      {
        title: 'Il ritmo giusto per ogni età',
        body: 'I bambini piccoli e in età prescolare si adattano meglio con meno cambi di hotel e più tempo di relax in piscina, in giardino o in spiaggia. I bambini più grandi e gli adolescenti spesso amano la salita a Sigiriya (con aspettative realistiche impostate in anticipo), un tratto in treno panoramico e una mattinata di safari in jeep.\n\nEvitiamo di concentrare tempio, escursione e lungo trasferimento in un solo giorno, a meno che i vostri adolescenti non chiedano esplicitamente un programma intenso. Preferiamo mattine più tranquille.',
      },
      {
        title: 'Fauna selvatica e sicurezza con i bambini',
        body: 'I safari in jeep diventano davvero memorabili per le famiglie quando sono programmati nelle ore più fresche del mattino, con aspettative realistiche su cosa si potrà osservare. Le nostre guide istruiscono tutti gli ospiti, bambini compresi, a restare seduti, parlare piano e non dare mai da mangiare agli animali selvatici.\n\nLe visite ai templi richiedono abbigliamento sobrio e piedi nudi sul pavimento di pietra portate un paio di calzini per i pomeriggi caldi. Spieghiamo l’etichetta ai vostri bambini in anticipo, così nessuno viene colto di sorpresa.',
      },
      {
        title: 'Hotel e logistica pratica',
        body: 'Camere familiari, camere comunicanti o soggiorni in villa con piscina privata sono molto più comodi per i genitori rispetto a cambiare boutique hotel ogni sera. Suggeriamo basi che riducano il continuo disfare e rifare le valigie e lascino ai bambini tempo per rilassarsi.\n\nUn gruppo WhatsApp con il vostro autista-guida permette di segnalare ogni giorno come stanno i bambini stanchi, affamati, in gran forma così l’itinerario può adattarsi in tempo reale invece di aspettare un bilancio serale.',
      },
      {
        title: 'Pianificare un tour in famiglia con Sundown Tours',
        body: 'Comunicateci l’età dei vostri figli, il periodo delle vacanze scolastiche e le tappe imperdibili: proporremo un itinerario privato con tempi di guida chiari, safari opzionali e alcune notti al mare per recuperare energie.\n\nIl trasferimento dall’aeroporto di Bandaranaike (CMB) è incluso in ogni pacchetto famiglia di più giorni, così il giorno più faticoso del viaggio resta tranquillo e prevedibile.',
      },
    ],
    faq: [
      {
        q: 'Qual è una buona durata per un tour in famiglia in Sri Lanka?',
        a: 'Da sette a dieci giorni vanno bene per la maggior parte delle famiglie, unendo alcuni momenti culturali, una mattinata dedicata alla fauna selvatica e abbastanza tempo in spiaggia per evitare la stanchezza a fine viaggio.',
      },
      {
        q: 'I safari sono adatti ai bambini piccoli?',
        a: 'Spesso sì, soprattutto con uscite mattutine più brevi in jeep ma diteci prima l’età dei vostri figli e gli orari dei pisolini, così possiamo scegliere il parco e l’orario giusti.',
      },
      {
        q: 'Potete fornire seggiolini per bambini?',
        a: 'Sì richiedeteli al momento della prenotazione, così possiamo confermare la misura corretta e la disponibilità per il vostro veicolo.',
      },
      {
        q: 'Come gestite i bambini più difficili con il cibo?',
        a: 'Hotel e ristoranti lungo strada offrono quasi sempre riso, pasta o piatti occidentali semplici accanto a quelli locali, e pianifichiamo le soste pranzo pensando alle famiglie.',
      },
    ],
    ctaTitle: 'Pianificate un tour privato in famiglia',
    ctaBody: 'Diteci l’età dei vostri figli e le date del viaggio: progetteremo un itinerario privato con autista, con un ritmo pensato per la vostra famiglia.',
    ctaLabel: 'Contattaci',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour di 7 giorni in Sri Lanka' },
      { pageId: 'tour10', label: 'Tour di 10 giorni in Sri Lanka' },
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guida al safari' },
      { pageId: 'guideSafety', label: 'Guida alla sicurezza' },
      { pageId: 'guideBestTime', label: 'Periodo migliore per visitare' },
      { pageId: 'guidePrivateDriver', label: 'Guida all’autista privato' },
    ],
  },

  es: {
    h1: 'Tours familiares por Sri Lanka: viajes privados con niños',
    lead: 'Las vacaciones en familia en Sri Lanka funcionan mejor con un vehículo privado, jornadas de carretera más cortas y una mezcla de fauna, paradas culturales suaves y tiempo de playa. Planificamos según las fechas de vacaciones escolares en Europa y la edad de sus hijos no según un horario fijo de autobús.',
    heroAlt: 'Tour privado por Sri Lanka apto para familias, con fauna y tiempo de playa',
    sections: [
      {
        title: 'Por qué las familias prefieren los tours privados',
        body: 'Los niños necesitan meriendas, paradas para el baño y horarios flexibles algo que un tour en autobús compartido no puede ofrecer. Un chófer privado se detiene cuando su familia lo necesita, mantiene el aire acondicionado encendido y ajusta el plan del día si alguien está cansado o mareado.\n\nCuéntenos sus preferencias de silla infantil o alzador antes de llegar, para que los asientos adecuados ya estén instalados en el vehículo cuando aterricen, en lugar de resolverlo el primer día.',
      },
      {
        title: 'El ritmo adecuado según la edad',
        body: 'Los más pequeños y los niños en edad preescolar se adaptan mejor con menos cambios de hotel y más tiempo tranquilo en la piscina, el jardín o la playa. Los niños mayores y los adolescentes suelen disfrutar de la subida a Sigiriya (con expectativas realistas fijadas de antemano), un tramo en tren panorámico y una mañana de safari en jeep.\n\nEvitamos meter un templo, una caminata y un traslado largo en un mismo día, salvo que sus adolescentes pidan expresamente un programa intenso. Preferimos mañanas más tranquilas.',
      },
      {
        title: 'Fauna y seguridad con niños',
        body: 'Los safaris en jeep se vuelven realmente memorables para las familias cuando se programan en las horas más frescas de la mañana y con expectativas realistas sobre lo que se podrá ver. Nuestros guías indican a todos los huéspedes, incluidos los niños, que permanezcan sentados, hablen bajo y nunca den de comer a los animales.\n\nLas visitas a los templos requieren ropa recatada y pies descalzos sobre el suelo de piedra lleve calcetines para las tardes calurosas. Explicamos la etiqueta a sus hijos de antemano para que nadie se sienta sorprendido.',
      },
      {
        title: 'Hoteles y logística práctica',
        body: 'Las habitaciones familiares, las habitaciones comunicadas o los alojamientos tipo villa con piscina propia son mucho más cómodos para los padres que cambiar de hotel boutique cada noche. Sugerimos bases que reduzcan el ir y venir de maletas y dejen a sus hijos tiempo para relajarse.\n\nUn grupo de WhatsApp con su chófer-guía permite contar cada día cómo están los niños cansados, hambrientos, animados para que el itinerario se ajuste en tiempo real en lugar de esperar a un balance por la noche.',
      },
      {
        title: 'Planificar un tour familiar con Sundown Tours',
        body: 'Cuéntenos la edad de sus hijos, su periodo de vacaciones escolares y las paradas imprescindibles, y le propondremos una ruta privada con tiempos de conducción claros, safaris opcionales y algunas noches de playa para recuperar energía.\n\nEl traslado desde el aeropuerto de Bandaranaike (CMB) está incluido en todos los paquetes familiares de varios días, para que el día más agotador del viaje se mantenga tranquilo y previsible.',
      },
    ],
    faq: [
      {
        q: '¿Cuál es una buena duración para un tour familiar por Sri Lanka?',
        a: 'De siete a diez días es lo que mejor funciona para la mayoría de las familias, combinando algunos momentos culturales, una mañana de fauna y suficiente tiempo de playa para evitar el agotamiento al final del viaje.',
      },
      {
        q: '¿Los safaris son adecuados para niños pequeños?',
        a: 'A menudo sí, sobre todo en salidas matutinas más cortas en jeep pero cuéntenos antes la edad de sus hijos y sus horarios de siesta para elegir el parque y el momento adecuados.',
      },
      {
        q: '¿Pueden proporcionar sillas infantiles?',
        a: 'Sí solicítelas al reservar para que podamos confirmar la talla correcta y la disponibilidad para su vehículo.',
      },
      {
        q: '¿Cómo gestionan a los niños más exigentes con la comida?',
        a: 'Los hoteles y restaurantes de carretera casi siempre ofrecen arroz, pasta o platos occidentales sencillos junto a los locales, y planificamos las paradas para comer pensando en las familias.',
      },
    ],
    ctaTitle: 'Planifique un tour privado en familia',
    ctaBody: 'Cuéntenos la edad de sus hijos y las fechas del viaje diseñaremos un itinerario privado con chófer, con un ritmo pensado para su familia.',
    ctaLabel: 'Contáctenos',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour de 7 días por Sri Lanka' },
      { pageId: 'tour10', label: 'Tour de 10 días por Sri Lanka' },
      { pageId: 'tour5', label: 'Tour de 5 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guía de safari' },
      { pageId: 'guideSafety', label: 'Guía de seguridad' },
      { pageId: 'guideBestTime', label: 'Mejor época para viajar' },
      { pageId: 'guidePrivateDriver', label: 'Guía del chófer privado' },
    ],
  },

  pl: {
    h1: 'Sri Lanka wycieczki rodzinne: prywatne podróże z dziećmi',
    lead: 'Rodzinne wakacje na Sri Lance najlepiej udają się z prywatnym samochodem, krótszymi dniami jazdy i połączeniem dzikiej przyrody, łagodnych przystanków kulturowych i czasu na plaży. Planujemy w oparciu o terminy wakacji szkolnych w Europie i wiek Waszych dzieci a nie sztywny grafik autokaru.',
    heroAlt: 'Przyjazna rodzinom prywatna wycieczka po Sri Lance z dziką przyrodą i czasem na plaży',
    sections: [
      {
        title: 'Dlaczego rodziny wybierają prywatne wycieczki',
        body: 'Dzieci potrzebują przekąsek, przerw na toaletę i elastycznego harmonogramu czegoś, czego wspólny autokar po prostu nie zapewni. Prywatny kierowca zatrzyma się, kiedy potrzebuje tego Wasza rodzina, utrzyma klimatyzację i na bieżąco zmieni plan dnia, jeśli ktoś jest zmęczony albo choruje w samochodzie.\n\nPoinformujcie nas o preferencjach dotyczących fotelików lub podkładek przed przylotem, aby odpowiednie foteliki były już zamontowane w samochodzie, gdy wylądujecie, zamiast załatwiać to pierwszego dnia.',
      },
      {
        title: 'Odpowiednie tempo dla różnego wieku',
        body: 'Maluchy i dzieci w wieku przedszkolnym lepiej radzą sobie przy mniejszej liczbie zmian hoteli i większej ilości czasu na relaks przy basenie, w ogrodzie lub na plaży. Starsze dzieci i nastolatki często lubią wspinaczkę na Sigiriya (z realistycznymi oczekiwaniami ustalonymi wcześniej), odcinek malowniczą koleją i poranne safari jeepem.\n\nUnikamy łączenia świątyni, wędrówki i długiego transferu w jednym dniu, chyba że Wasi nastolatkowie wyraźnie poproszą o napięty program. Wolimy spokojniejsze poranki.',
      },
      {
        title: 'Dzika przyroda i bezpieczeństwo z dziećmi',
        body: 'Safari jeepem stają się naprawdę niezapomniane dla rodzin, gdy są zaplanowane na chłodniejsze godziny poranne i połączone z realistycznymi oczekiwaniami co do zwierząt, które można zobaczyć. Nasi przewodnicy instruują wszystkich gości, także dzieci, aby siedzieli spokojnie, mówili cicho i nigdy nie karmili dzikich zwierząt.\n\nWizyty w świątyniach wymagają skromnego ubioru i bosych stóp na kamiennej posadzce spakujcie skarpetki na gorące popołudnia. Wcześniej tłumaczymy zasady etykiety Waszym dzieciom, aby nikt nie poczuł się zaskoczony.',
      },
      {
        title: 'Hotele i praktyczna logistyka',
        body: 'Pokoje rodzinne, pokoje połączone lub pobyty w stylu willi z własnym basenem są dla rodziców dużo wygodniejsze niż zmiana butikowego hotelu co noc. Proponujemy bazy, które ograniczają ciągłe pakowanie i dają dzieciom czas na odpoczynek.\n\nGrupa na WhatsAppie z Waszym kierowcą-przewodnikiem pozwala codziennie relacjonować, jak radzą sobie dzieci zmęczone, głodne, w świetnej formie dzięki czemu trasa może być modyfikowana na bieżąco, zamiast czekać na wieczorne podsumowanie.',
      },
      {
        title: 'Planowanie wycieczki rodzinnej z Sundown Tours',
        body: 'Podajcie nam wiek dzieci, termin wakacji szkolnych i miejsca, które koniecznie chcecie zobaczyć, a zaproponujemy prywatną trasę z jasnymi czasami jazdy, opcjonalnymi safari i kilkoma nocami na plaży dla regeneracji sił.\n\nOdbiór z lotniska Bandaranaike (CMB) jest wliczony w każdy wielodniowy pakiet rodzinny, dzięki czemu najbardziej męczący dzień podróży pozostaje spokojny i przewidywalny.',
      },
    ],
    faq: [
      {
        q: 'Jaka długość wycieczki rodzinnej po Sri Lance jest odpowiednia?',
        a: 'Siedem do dziesięciu dni sprawdza się dla większości rodzin, łącząc kilka atrakcji kulturowych, jeden poranek z dziką przyrodą i wystarczająco dużo czasu na plaży, by uniknąć zmęczenia pod koniec podróży.',
      },
      {
        q: 'Czy safari są odpowiednie dla małych dzieci?',
        a: 'Często tak, zwłaszcza podczas krótszych porannych wyjazdów jeepem ale podajcie nam wcześniej wiek dzieci i godziny drzemek, abyśmy mogli dobrać odpowiedni park i porę.',
      },
      {
        q: 'Czy zapewniacie foteliki dla dzieci?',
        a: 'Tak poproście o nie już przy rezerwacji, abyśmy mogli potwierdzić odpowiedni rozmiar i dostępność dla Waszego pojazdu.',
      },
      {
        q: 'Jak radzicie sobie z wybrednymi w jedzeniu dziećmi?',
        a: 'Hotele i restauracje przy drodze niemal zawsze oferują proste dania z ryżu, makaronu lub kuchni zachodniej obok dań lokalnych, a przystanki na lunch planujemy z myślą o rodzinach.',
      },
    ],
    ctaTitle: 'Zaplanuj prywatną wycieczkę rodzinną',
    ctaBody: 'Podajcie nam wiek dzieci i terminy podróży zaprojektujemy prywatną trasę z kierowcą, w tempie dopasowanym do Waszej rodziny.',
    ctaLabel: 'Skontaktuj się z nami',
    relatedTours: [
      { pageId: 'tour7', label: '7-dniowa wycieczka po Sri Lance' },
      { pageId: 'tour10', label: '10-dniowa wycieczka po Sri Lance' },
      { pageId: 'tour5', label: '5-dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Przewodnik po safari' },
      { pageId: 'guideSafety', label: 'Przewodnik po bezpieczeństwie' },
      { pageId: 'guideBestTime', label: 'Najlepszy czas na podróż' },
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnym kierowcy' },
    ],
  },

  ru: {
    h1: 'Семейные туры по Шри-Ланке: частные поездки с детьми',
    lead: 'Семейный отдых на Шри-Ланке проходит лучше всего с частным автомобилем, более короткими днями в дороге и сочетанием дикой природы, спокойных культурных остановок и времени на пляже. Мы планируем маршрут исходя из школьных каникул в Европе и возраста ваших детей а не по жёсткому расписанию автобуса.',
    heroAlt: 'Частный семейный тур по Шри-Ланке с дикой природой и пляжным отдыхом',
    sections: [
      {
        title: 'Почему семьи выбирают частные туры',
        body: 'Детям нужны перекусы, остановки в туалет и гибкое расписание то, что групповой автобусный тур предложить не может. Личный водитель остановится, когда это нужно вашей семье, не выключит кондиционер и на ходу скорректирует план дня, если кто-то устал или его укачало.\n\nСообщите нам заранее о предпочтениях по детским креслам или бустерам, чтобы нужные кресла уже стояли в машине к моменту вашего прилёта, а не решались в первый день поездки.',
      },
      {
        title: 'Правильный темп для разного возраста',
        body: 'Малышам и дошкольникам легче даётся меньше смен отелей и больше времени у бассейна, в саду или на пляже. Дети постарше и подростки часто с удовольствием поднимаются на скалу Сигирия (с реалистичными ожиданиями, обсуждёнными заранее), едут на живописном участке железной дороги и отправляются на утреннее сафари на джипе.\n\nМы стараемся не совмещать в один день храм, поход и долгий переезд разве что ваши подростки сами попросят насыщенную программу. В остальном предпочитаем более спокойные утра.',
      },
      {
        title: 'Дикая природа и безопасность с детьми',
        body: 'Сафари на джипах становятся по-настоящему запоминающимися для семей, если их планировать на прохладные утренние часы и с реалистичными ожиданиями по поводу того, каких животных удастся увидеть. Наши гиды инструктируют всех гостей, включая детей: сидеть на месте, говорить тихо и никогда не кормить диких животных.\n\nПосещение храмов требует скромной одежды и босых ног на каменном полу возьмите носки на жаркие дни. Мы заранее объясняем правила поведения и вашим детям, чтобы никто не оказался застигнут врасплох.',
      },
      {
        title: 'Отели и практическая логистика',
        body: 'Семейные номера, смежные комнаты или виллы с собственным бассейном гораздо удобнее для родителей, чем каждую ночь новый бутик-отель. Мы предлагаем базы, которые сокращают постоянную сборку чемоданов и дают детям время расслабиться.\n\nГруппа в WhatsApp с вашим водителем-гидом позволяет каждый день сообщать, как чувствуют себя дети устали, проголодались, полны энергии чтобы маршрут можно было скорректировать в реальном времени, а не ждать вечернего подведения итогов.',
      },
      {
        title: 'Планирование семейного тура с Sundown Tours',
        body: 'Сообщите нам возраст детей, период школьных каникул и обязательные пункты маршрута мы предложим частный маршрут с понятным временем в пути, сафари по желанию и несколькими пляжными ночами для отдыха.\n\nТрансфер из аэропорта Бандаранаике (CMB) включён в каждый многодневный семейный пакет, чтобы самый утомительный день поездки прошёл спокойно и предсказуемо.',
      },
    ],
    faq: [
      {
        q: 'Сколько дней лучше выделить на семейный тур по Шри-Ланке?',
        a: 'От семи до десяти дней подходят большинству семей: несколько культурных моментов, одно утро с дикой природой и достаточно времени на пляже, чтобы избежать усталости к концу поездки.',
      },
      {
        q: 'Подходят ли сафари для маленьких детей?',
        a: 'Часто да, особенно короткие утренние выезды на джипе но сначала сообщите нам возраст детей и время дневного сна, чтобы мы подобрали подходящий парк и время.',
      },
      {
        q: 'Можете ли вы предоставить детские кресла?',
        a: 'Да запросите их уже при бронировании, чтобы мы могли подтвердить нужный размер и наличие для вашего автомобиля.',
      },
      {
        q: 'Как вы решаете вопрос питания для привередливых детей?',
        a: 'В отелях и придорожных ресторанах почти всегда есть простые блюда из риса, лапши или европейская кухня наряду с местными, и мы планируем остановки на обед с учётом семей.',
      },
    ],
    ctaTitle: 'Спланировать частный семейный тур',
    ctaBody: 'Сообщите нам возраст детей и даты поездки мы разработаем частный маршрут с водителем и темпом, подходящим именно вашей семье.',
    ctaLabel: 'Связаться с нами',
    relatedTours: [
      { pageId: 'tour7', label: '7-дневный тур по Шри-Ланке' },
      { pageId: 'tour10', label: '10-дневный тур по Шри-Ланке' },
      { pageId: 'tour5', label: '5-дневный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Яла' },
      { pageId: 'destElla', label: 'Элла' },
      { pageId: 'destGalle', label: 'Галле' },
      { pageId: 'destSigiriya', label: 'Сигирия' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Гид по сафари' },
      { pageId: 'guideSafety', label: 'Гид по безопасности' },
      { pageId: 'guideBestTime', label: 'Лучшее время для поездки' },
      { pageId: 'guidePrivateDriver', label: 'Гид по частному водителю' },
    ],
  },
};
