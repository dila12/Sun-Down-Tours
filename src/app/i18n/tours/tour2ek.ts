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
    excludes: ['Entrance & Activity Fees', 'Food & Drinks', 'Accommodation available on request primarily 4-Star Hotels (equivalent 3.5-Star may be used if selected hotels are unavailable in peak periods)'],
    seoIntro:
      'Two days is enough to link Ella\'s highland icons with Kandy\'s sacred heritage when a private chauffeur handles the mountain roads. Day one combines Udawalawe Elephant Transit Home ethical viewing of rescued calves with Nine Arches Bridge, Little Adam\'s Peak, optional Flying Ravana zip-lining and Ravana Falls. Day two descends through Ramboda Falls and the spiral Ambuluwawa Tower before Kandy\'s Temple of the Sacred Tooth and a Pinnawala elephant stop en route to the airport or your hotel. Sundown Tours times train viewpoints and hikes to beat midday crowds while you travel in an air-conditioned vehicle with unlimited mileage. Accommodation is optional; entrance fees and meals stay at your discretion. Ideal as a pre-flight mini circuit from the south coast or a focused add-on between beach days and departure.',
    highlights: [
      'Udawalawe Elephant Transit Home and Ella Nine Arches Bridge viewpoints',
      'Little Adam\'s Peak hike and optional Flying Ravana zip-line adventure',
      'Ramboda Falls and Ambuluwawa Tower 360-degree mountain panoramas',
      'Kandy Temple of the Sacred Tooth Relic and Pinnawala Elephant Orphanage',
      'Private vehicle with English-speaking driver and flexible airport or hotel drop-off',
    ],
    whoIsFor:
      'Perfect for transit passengers, honeymooners and small groups with limited time who still want hill-country scenery and Kandy culture without a week-long commitment.',
    bestTimeNote:
      'Year-round; dry months January–March and July–August offer the clearest highland views. Morning starts help finish Kandy and Pinnawala before airport traffic on Day 2.',
    faq: [
      {
        q: 'Can this 2-day tour end at Bandaranaike International Airport?',
        a: 'Yes the route is designed for convenient airport or hotel drop-off on Day 2. Share your flight time so we plan Pinnawala and Kandy pacing accordingly.',
      },
      {
        q: 'Is overnight accommodation included?',
        a: 'Accommodation is not in the base price but we can arrange a hill-country or Kandy hotel on half board. Many travellers book this tour back-to-back with a beach stay.',
      },
      {
        q: 'Do we have time for the Flying Ravana zip line?',
        a: 'The zip line is optional and weather-dependent. If you book it, we shorten another Ella stop usually a longer Ravana Falls visit so the day stays relaxed.',
      },
    ],
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
    excludes: [
      'Eintritts- & Aktivitätsgebühren',
      'Speisen & Getränke',
      'Unterkunft auf Anfrage verfügbar – überwiegend 4-Sterne-Hotels (bei Nichtverfügbarkeit in der Hochsaison ggf. vergleichbare 3,5-Sterne-Hotels)',
    ],
    seoIntro:
      'Zwei Tage reichen aus, um die Highlights von Ella mit dem heiligen Kulturerbe von Kandy zu verbinden, wenn ein privater Chauffeur die Bergstraßen übernimmt. Tag eins kombiniert das Udawalawe Elephant Transit Home – die ethische Beobachtung geretteter Elefantenkälber – mit der Nine Arches Bridge, Little Adam\'s Peak, dem optionalen Flying-Ravana-Zipline-Abenteuer und den Ravana-Wasserfällen. Tag zwei führt über die Ramboda-Wasserfälle und den spiralförmigen Ambuluwawa-Turm zum Zahntempel in Kandy und einem Stopp im Pinnawala-Elefantenwaisenhaus auf dem Weg zum Flughafen oder Ihrem Hotel. Sundown Tours plant Zugblicke und Wanderungen so, dass Sie den Mittagsandrang vermeiden, während Sie in einem klimatisierten Fahrzeug mit unbegrenzter Kilometerleistung reisen. Die Unterkunft ist optional; Eintrittsgebühren und Mahlzeiten bleiben Ihnen selbst überlassen. Ideal als Mini-Rundreise vor dem Flug ab der Südküste oder als gezielte Ergänzung zwischen Strandtagen und Abreise.',
    highlights: [
      'Udawalawe Elephant Transit Home und Aussichtspunkte an der Nine Arches Bridge in Ella',
      'Wanderung zum Little Adam\'s Peak und optionales Flying-Ravana-Zipline-Abenteuer',
      'Ramboda-Wasserfälle und 360-Grad-Bergpanorama am Ambuluwawa-Turm',
      'Zahntempel in Kandy und Pinnawala-Elefantenwaisenhaus',
      'Privatfahrzeug mit englischsprachigem Fahrer und flexiblem Transfer zum Flughafen oder Hotel',
    ],
    whoIsFor:
      'Perfekt für Transitreisende, Hochzeitsreisende und kleine Gruppen mit begrenzter Zeit, die trotzdem die Landschaft des Hügellands und die Kultur von Kandy erleben möchten, ohne sich für eine ganze Woche zu binden.',
    bestTimeNote:
      'Ganzjährig möglich; die trockenen Monate Januar–März und Juli–August bieten die klarsten Ausblicke im Hochland. Ein früher Start hilft, Kandy und Pinnawala am 2. Tag vor dem Flughafenverkehr abzuschließen.',
    faq: [
      {
        q: 'Kann diese 2-tägige Tour am Flughafen Bandaranaike enden?',
        a: 'Ja – die Route ist für eine bequeme Ankunft am Flughafen oder Hotel am 2. Tag ausgelegt. Teilen Sie uns Ihre Flugzeit mit, damit wir Kandy und Pinnawala entsprechend timen.',
      },
      {
        q: 'Ist eine Übernachtung im Preis enthalten?',
        a: 'Die Unterkunft ist nicht im Grundpreis enthalten, wir können aber gerne ein Hotel im Hügelland oder in Kandy auf Halbpension organisieren. Viele Reisende buchen diese Tour direkt im Anschluss an einen Strandaufenthalt.',
      },
      {
        q: 'Haben wir Zeit für die Flying-Ravana-Zipline?',
        a: 'Die Zipline ist optional und wetterabhängig. Wenn Sie sie buchen, verkürzen wir einen anderen Stopp in Ella – meist den Besuch der Ravana-Wasserfälle –, damit der Tag entspannt bleibt.',
      },
    ],
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
    excludes: [
      'Entrées & frais d’activités',
      'Repas & boissons',
      'Hébergement disponible sur demande principalement des hôtels 4 étoiles (des hôtels équivalents 3,5 étoiles peuvent être utilisés si les hôtels sélectionnés ne sont pas disponibles en haute saison)',
    ],
    seoIntro:
      'Deux jours suffisent pour relier les incontournables d’Ella au patrimoine sacré de Kandy lorsqu’un chauffeur privé prend en charge les routes de montagne. Le premier jour associe le centre de transit des éléphants d’Udawalawe une observation éthique de bébés éléphants secourus au pont Nine Arches, à Little Adam’s Peak, à la tyrolienne optionnelle Flying Ravana et aux chutes de Ravana. Le second jour descend par les chutes de Ramboda et la tour en spirale d’Ambuluwawa avant le Temple de la Dent Sacrée à Kandy et un arrêt à l’orphelinat des éléphants de Pinnawala en route vers l’aéroport ou votre hôtel. Sundown Tours planifie les points de vue du train et les randonnées pour éviter la foule de midi, tandis que vous voyagez dans un véhicule climatisé au kilométrage illimité. L’hébergement est optionnel ; les frais d’entrée et les repas restent à votre discrétion. Idéal comme mini-circuit avant un vol depuis la côte sud ou comme complément ciblé entre les jours de plage et le départ.',
    highlights: [
      'Centre de transit des éléphants d’Udawalawe et points de vue du pont Nine Arches à Ella',
      'Randonnée à Little Adam’s Peak et tyrolienne optionnelle Flying Ravana',
      'Chutes de Ramboda et panoramas à 360° depuis la tour d’Ambuluwawa',
      'Temple de la Dent Sacrée à Kandy et orphelinat des éléphants de Pinnawala',
      'Véhicule privé avec chauffeur anglophone et dépose flexible à l’aéroport ou à l’hôtel',
    ],
    whoIsFor:
      'Parfait pour les voyageurs en transit, les jeunes mariés et les petits groupes disposant de peu de temps mais souhaitant tout de même découvrir les paysages des hauts plateaux et la culture de Kandy sans s’engager sur une semaine complète.',
    bestTimeNote:
      'Toute l’année ; les mois secs de janvier à mars et de juillet à août offrent les vues les plus dégagées sur les hauts plateaux. Un départ matinal aide à terminer Kandy et Pinnawala avant le trafic aéroportuaire du jour 2.',
    faq: [
      {
        q: 'Ce circuit de 2 jours peut-il se terminer à l’aéroport international de Bandaranaike ?',
        a: 'Oui l’itinéraire est conçu pour une dépose pratique à l’aéroport ou à l’hôtel le jour 2. Indiquez-nous l’heure de votre vol afin que nous planifiions le rythme de Kandy et Pinnawala en conséquence.',
      },
      {
        q: 'L’hébergement pour la nuit est-il inclus ?',
        a: 'L’hébergement n’est pas inclus dans le tarif de base, mais nous pouvons organiser un hôtel dans les hauts plateaux ou à Kandy en demi-pension. De nombreux voyageurs réservent ce circuit juste après un séjour à la plage.',
      },
      {
        q: 'Avons-nous le temps pour la tyrolienne Flying Ravana ?',
        a: 'La tyrolienne est optionnelle et dépend de la météo. Si vous la réservez, nous raccourcissons un autre arrêt à Ella généralement une visite plus longue des chutes de Ravana afin que la journée reste détendue.',
      },
    ],
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
    excludes: [
      'Ingressi e costi delle attività',
      'Cibo e bevande',
      'Alloggio disponibile su richiesta principalmente hotel 4 stelle (in alta stagione, se non disponibili, potranno essere utilizzati hotel equivalenti a 3,5 stelle)',
    ],
    seoIntro:
      'Due giorni sono sufficienti per collegare le icone dell’altopiano di Ella al patrimonio sacro di Kandy, con un autista privato che gestisce le strade di montagna. Il primo giorno combina l’Udawalawe Elephant Transit Home osservazione etica di cuccioli di elefante salvati con il ponte Nine Arches, Little Adam’s Peak, la tirolesa opzionale Flying Ravana e le cascate di Ravana. Il secondo giorno scende attraverso le cascate di Ramboda e la torre a spirale di Ambuluwawa prima del Tempio della Sacra Reliquia del Dente a Kandy e una sosta all’orfanotrofio degli elefanti di Pinnawala in viaggio verso l’aeroporto o il vostro hotel. Sundown Tours pianifica i punti panoramici del treno e le escursioni per evitare la folla di mezzogiorno, mentre viaggiate in un veicolo climatizzato con chilometraggio illimitato. L’alloggio è opzionale; i biglietti d’ingresso e i pasti restano a vostra discrezione. Ideale come mini circuito pre-volo dalla costa meridionale o come tappa mirata tra i giorni di spiaggia e la partenza.',
    highlights: [
      'Udawalawe Elephant Transit Home e punti panoramici del ponte Nine Arches a Ella',
      'Escursione a Little Adam’s Peak e tirolesa opzionale Flying Ravana',
      'Cascate di Ramboda e panorami montani a 360° dalla Torre di Ambuluwawa',
      'Tempio della Sacra Reliquia del Dente a Kandy e orfanotrofio degli elefanti di Pinnawala',
      'Veicolo privato con autista di lingua inglese e trasferimento flessibile in aeroporto o in hotel',
    ],
    whoIsFor:
      'Perfetto per i passeggeri in transito, le coppie in luna di miele e i piccoli gruppi con poco tempo che desiderano comunque vivere i panorami dell’altopiano e la cultura di Kandy senza impegnarsi per un’intera settimana.',
    bestTimeNote:
      'Tutto l’anno; i mesi secchi da gennaio a marzo e da luglio ad agosto offrono le vedute più limpide sull’altopiano. Una partenza al mattino aiuta a concludere Kandy e Pinnawala prima del traffico aeroportuale del secondo giorno.',
    faq: [
      {
        q: 'Questo tour di 2 giorni può concludersi all’aeroporto di Bandaranaike?',
        a: 'Sì il percorso è pensato per un comodo arrivo in aeroporto o in hotel il secondo giorno. Comunicateci l’orario del vostro volo così pianifichiamo i tempi di Kandy e Pinnawala di conseguenza.',
      },
      {
        q: 'Il pernottamento è incluso?',
        a: 'L’alloggio non è incluso nel prezzo base, ma possiamo organizzare un hotel sull’altopiano o a Kandy in mezza pensione. Molti viaggiatori prenotano questo tour subito dopo un soggiorno in spiaggia.',
      },
      {
        q: 'Abbiamo tempo per la tirolesa Flying Ravana?',
        a: 'La tirolesa è opzionale e dipende dal meteo. Se la prenotate, accorciamo un’altra tappa a Ella di solito una visita più lunga alle cascate di Ravana così la giornata resta rilassata.',
      },
    ],
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
    excludes: [
      'Entradas y costes de actividades',
      'Comidas y bebidas',
      'Alojamiento disponible bajo petición principalmente hoteles de 4 estrellas (se podrán utilizar hoteles equivalentes de 3,5 estrellas si los hoteles seleccionados no están disponibles en temporada alta)',
    ],
    seoIntro:
      'Dos días son suficientes para conectar los iconos de las tierras altas de Ella con el patrimonio sagrado de Kandy cuando un chófer privado se encarga de las carreteras de montaña. El primer día combina el Udawalawe Elephant Transit Homeobservación ética de crías de elefante rescatadas— con el puente Nine Arches, Little Adam’s Peak, la tirolina opcional Flying Ravana y las cataratas de Ravana. El segundo día desciende por las cataratas de Ramboda y la torre en espiral de Ambuluwawa antes del Templo de la Sagrada Reliquia del Diente en Kandy y una parada en el orfanato de elefantes de Pinnawala en el camino al aeropuerto o a su hotel. Sundown Tours programa los miradores del tren y las caminatas para evitar las multitudes del mediodía mientras usted viaja en un vehículo con aire acondicionado y kilometraje ilimitado. El alojamiento es opcional; las entradas y las comidas quedan a su discreción. Ideal como mini circuito antes de un vuelo desde la costa sur o como complemento entre días de playa y la salida.',
    highlights: [
      'Udawalawe Elephant Transit Home y miradores del puente Nine Arches en Ella',
      'Caminata a Little Adam’s Peak y tirolina opcional Flying Ravana',
      'Cataratas de Ramboda y panorámicas de 360° desde la Torre de Ambuluwawa',
      'Templo de la Sagrada Reliquia del Diente en Kandy y orfanato de elefantes de Pinnawala',
      'Vehículo privado con conductor de habla inglesa y traslado flexible al aeropuerto o al hotel',
    ],
    whoIsFor:
      'Perfecto para pasajeros en tránsito, parejas en luna de miel y grupos pequeños con tiempo limitado que aun así desean disfrutar del paisaje de las tierras altas y la cultura de Kandy sin comprometerse a una semana completa.',
    bestTimeNote:
      'Disponible todo el año; los meses secos de enero a marzo y de julio a agosto ofrecen las vistas más despejadas de las tierras altas. Salir por la mañana ayuda a terminar Kandy y Pinnawala antes del tráfico del aeropuerto en el día 2.',
    faq: [
      {
        q: '¿Puede este circuito de 2 días terminar en el aeropuerto internacional de Bandaranaike?',
        a: 'Sí: la ruta está diseñada para un traslado cómodo al aeropuerto o al hotel el día 2. Indíquenos la hora de su vuelo para planificar el ritmo de Kandy y Pinnawala en consecuencia.',
      },
      {
        q: '¿El alojamiento nocturno está incluido?',
        a: 'El alojamiento no está incluido en el precio base, pero podemos organizar un hotel en las tierras altas o en Kandy en media pensión. Muchos viajeros reservan este circuito justo después de una estancia en la playa.',
      },
      {
        q: '¿Tenemos tiempo para la tirolina Flying Ravana?',
        a: 'La tirolina es opcional y depende del clima. Si la reserva, acortamos otra parada en Ellanormalmente una visita más larga a las cataratas de Ravana— para que el día siga siendo relajado.',
      },
    ],
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
    excludes: [
      'Bilety wstępu i opłaty za atrakcje',
      'Jedzenie i napoje',
      'Zakwaterowanie dostępne na życzenie – głównie hotele 4-gwiazdkowe (w sezonie szczytowym, jeśli wybrane hotele są niedostępne, mogą zostać zastąpione równoważnymi hotelami 3,5-gwiazdkowymi)',
    ],
    seoIntro:
      'Dwa dni wystarczą, aby połączyć ikoniczne miejsca wyżyn Elli ze świętym dziedzictwem Kandy, gdy prywatny kierowca zajmuje się górskimi drogami. Pierwszy dzień łączy Udawalawe Elephant Transit Home – etyczną obserwację uratowanych młodych słoni – z mostem Nine Arches, Little Adam’s Peak, opcjonalną tyrolką Flying Ravana i wodospadami Ravana. Drugi dzień prowadzi przez wodospady Ramboda i spiralną wieżę Ambuluwawa, a następnie do Świątyni Świętej Relikwii Zęba w Kandy oraz do przystanku w sierocińcu dla słoni w Pinnawali w drodze na lotnisko lub do hotelu. Sundown Tours planuje punkty widokowe pociągu i wędrówki tak, by uniknąć tłumów w środku dnia, podczas gdy Państwo podróżują klimatyzowanym pojazdem z nielimitowanym przebiegiem. Nocleg jest opcjonalny; opłaty za wstęp i posiłki pozostają do Państwa decyzji. Idealna jako mini-wycieczka przed lotem z południowego wybrzeża lub jako dodatek między dniami na plaży a wyjazdem.',
    highlights: [
      'Udawalawe Elephant Transit Home i punkty widokowe mostu Nine Arches w Elli',
      'Wędrówka na Little Adam’s Peak i opcjonalna tyrolka Flying Ravana',
      'Wodospady Ramboda i panorama 360° z wieży Ambuluwawa',
      'Świątynia Świętej Relikwii Zęba w Kandy i sierociniec dla słoni w Pinnawali',
      'Prywatny pojazd z anglojęzycznym kierowcą i elastyczny transfer na lotnisko lub do hotelu',
    ],
    whoIsFor:
      'Idealna dla podróżnych w tranzycie, par w podróży poślubnej i małych grup z ograniczonym czasem, które wciąż chcą doświadczyć krajobrazów wyżyn i kultury Kandy bez zobowiązania na cały tydzień.',
    bestTimeNote:
      'Dostępna cały rok; suche miesiące styczeń–marzec i lipiec–sierpień oferują najczystsze widoki na wyżyny. Wczesny start pomaga zakończyć Kandy i Pinnawalę przed ruchem lotniskowym 2. dnia.',
    faq: [
      {
        q: 'Czy ta 2-dniowa wycieczka może zakończyć się na lotnisku Bandaranaike?',
        a: 'Tak – trasa została zaprojektowana z myślą o wygodnym transferze na lotnisko lub do hotelu 2. dnia. Podajcie nam godzinę lotu, abyśmy odpowiednio zaplanowali tempo w Kandy i Pinnawali.',
      },
      {
        q: 'Czy nocleg jest wliczony w cenę?',
        a: 'Nocleg nie jest wliczony w cenę podstawową, ale możemy zorganizować hotel na wyżynach lub w Kandy z wyżywieniem HB. Wielu podróżnych rezerwuje tę wycieczkę bezpośrednio po pobycie na plaży.',
      },
      {
        q: 'Czy mamy czas na tyrolkę Flying Ravana?',
        a: 'Tyrolka jest opcjonalna i zależy od pogody. Jeśli ją zarezerwujecie, skracamy inny przystanek w Elli – zwykle dłuższą wizytę przy wodospadach Ravana – aby dzień pozostał spokojny.',
      },
    ],
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
    excludes: [
      'Входные билеты и оплата активностей',
      'Еда и напитки',
      'Проживание доступно по запросу преимущественно отели 4★ (в высокий сезон, если выбранные отели недоступны, может использоваться эквивалентный отель 3,5★)',
    ],
    seoIntro:
      'Двух дней достаточно, чтобы соединить главные достопримечательности горной Эллы со священным наследием Канди, когда частный шофёр берёт на себя горные дороги. Первый день сочетает Udawalawe Elephant Transit Home этичное наблюдение за спасёнными слонятами с мостом Nine Arches, Little Adam’s Peak, опциональным зип-лайном Flying Ravana и водопадами Равана. Второй день проходит через водопады Ramboda и спиральную башню Ambuluwawa перед Храмом Священной Реликвии Зуба в Канди и остановкой в приюте для слонов Пиннавела на пути в аэропорт или ваш отель. Sundown Tours планирует смотровые точки поезда и походы так, чтобы избежать полуденных толп, пока вы путешествуете в кондиционированном автомобиле с неограниченным пробегом. Проживание опционально; входные билеты и питание остаются на ваш выбор. Идеально как мини-маршрут перед вылетом с южного побережья или как дополнение между пляжными днями и отъездом.',
    highlights: [
      'Udawalawe Elephant Transit Home и смотровые точки моста Nine Arches в Элле',
      'Поход на Little Adam’s Peak и опциональный зип-лайн Flying Ravana',
      'Водопады Ramboda и панорама горной страны на 360° с башни Ambuluwawa',
      'Храм Священной Реликвии Зуба в Канди и приют для слонов Пиннавела',
      'Частный автомобиль с англоговорящим водителем и гибкий трансфер в аэропорт или отель',
    ],
    whoIsFor:
      'Идеально для транзитных пассажиров, молодожёнов и небольших групп с ограниченным временем, которые всё же хотят увидеть пейзажи горной страны и культуру Канди без обязательств на целую неделю.',
    bestTimeNote:
      'Доступно круглый год; сухие месяцы январь–март и июль–август дают самые чистые виды в горах. Ранний старт помогает завершить Канди и Пиннавелу до начала аэропортового трафика на 2-й день.',
    faq: [
      {
        q: 'Может ли этот 2-дневный тур завершиться в аэропорту Бандаранаике?',
        a: 'Да маршрут разработан для удобной высадки в аэропорту или отеле на 2-й день. Сообщите нам время вашего рейса, чтобы мы соответствующим образом спланировали темп Канди и Пиннавелы.',
      },
      {
        q: 'Включено ли проживание с ночёвкой?',
        a: 'Проживание не входит в базовую стоимость, но мы можем организовать отель в горной стране или Канди на полупансионе. Многие путешественники бронируют этот тур сразу после пляжного отдыха.',
      },
      {
        q: 'Есть ли у нас время на зип-лайн Flying Ravana?',
        a: 'Зип-лайн опционален и зависит от погоды. Если вы его бронируете, мы сокращаем другую остановку в Элле обычно более длительное посещение водопадов Равана чтобы день оставался спокойным.',
      },
    ],
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
              'Посетите прекрасный водопад Равана один из самых знаменитых водопадов Шри-Ланки, расположенный рядом с Эллой.',
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
              'Остановитесь у водопада Рамбода впечатляющего водопада в самом сердце живописной горной местности Шри-Ланки.',
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
              'Посетите священный Храм Зуба в Канди одну из важнейших буддийских святынь мира.',
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
  nl: {
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
    excludes: [
      'Eintritts- & Aktivitätsgebühren',
      'Speisen & Getränke',
      'Unterkunft auf Anfrage verfügbar – überwiegend 4-Sterne-Hotels (bei Nichtverfügbarkeit in der Hochsaison ggf. vergleichbare 3,5-Sterne-Hotels)',
    ],
    seoIntro:
      'Zwei Tage reichen aus, um die Highlights von Ella mit dem heiligen Kulturerbe von Kandy zu verbinden, wenn ein privater Chauffeur die Bergstraßen übernimmt. Tag eins kombiniert das Udawalawe Elephant Transit Home – die ethische Beobachtung geretteter Elefantenkälber – mit der Nine Arches Bridge, Little Adam\'s Peak, dem optionalen Flying-Ravana-Zipline-Abenteuer und den Ravana-Wasserfällen. Tag zwei führt über die Ramboda-Wasserfälle und den spiralförmigen Ambuluwawa-Turm zum Zahntempel in Kandy und einem Stopp im Pinnawala-Elefantenwaisenhaus auf dem Weg zum Flughafen oder Ihrem Hotel. Sundown Tours plant Zugblicke und Wanderungen so, dass Sie den Mittagsandrang vermeiden, während Sie in einem klimatisierten Fahrzeug mit unbegrenzter Kilometerleistung reisen. Die Unterkunft ist optional; Eintrittsgebühren und Mahlzeiten bleiben Ihnen selbst überlassen. Ideal als Mini-Rundreise vor dem Flug ab der Südküste oder als gezielte Ergänzung zwischen Strandtagen und Abreise.',
    highlights: [
      'Udawalawe Elephant Transit Home und Aussichtspunkte an der Nine Arches Bridge in Ella',
      'Wanderung zum Little Adam\'s Peak und optionales Flying-Ravana-Zipline-Abenteuer',
      'Ramboda-Wasserfälle und 360-Grad-Bergpanorama am Ambuluwawa-Turm',
      'Zahntempel in Kandy und Pinnawala-Elefantenwaisenhaus',
      'Privatfahrzeug mit englischsprachigem Fahrer und flexiblem Transfer zum Flughafen oder Hotel',
    ],
    whoIsFor:
      'Perfekt für Transitreisende, Hochzeitsreisende und kleine Gruppen mit begrenzter Zeit, die trotzdem die Landschaft des Hügellands und die Kultur von Kandy erleben möchten, ohne sich für eine ganze Woche zu binden.',
    bestTimeNote:
      'Ganzjährig möglich; die trockenen Monate Januar–März und Juli–August bieten die klarsten Ausblicke im Hochland. Ein früher Start hilft, Kandy und Pinnawala am 2. Tag vor dem Flughafenverkehr abzuschließen.',
    faq: [
      {
        q: 'Kann diese 2-tägige Tour am Flughafen Bandaranaike enden?',
        a: 'Ja – die Route ist für eine bequeme Ankunft am Flughafen oder Hotel am 2. Tag ausgelegt. Teilen Sie uns Ihre Flugzeit mit, damit wir Kandy und Pinnawala entsprechend timen.',
      },
      {
        q: 'Ist eine Übernachtung im Preis enthalten?',
        a: 'Die Unterkunft ist nicht im Grundpreis enthalten, wir können aber gerne ein Hotel im Hügelland oder in Kandy auf Halbpension organisieren. Viele Reisende buchen diese Tour direkt im Anschluss an einen Strandaufenthalt.',
      },
      {
        q: 'Haben wir Zeit für die Flying-Ravana-Zipline?',
        a: 'Die Zipline ist optional und wetterabhängig. Wenn Sie sie buchen, verkürzen wir einen anderen Stopp in Ella – meist den Besuch der Ravana-Wasserfälle –, damit der Tag entspannt bleibt.',
      },
    ],
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
  }
};
