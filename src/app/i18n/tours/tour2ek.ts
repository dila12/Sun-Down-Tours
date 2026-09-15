import type { TourContent } from './localize';
import { PACKAGE_EXCLUDES, PACKAGE_INCLUDES } from './package-inclusions';

/**
 * 2 day Ella + Kandy Sri Lanka round tour (id: tour2ek).
 * English is the full BaseTour; locale overlays are authored separately.
 */
export const TOUR2EK: TourContent = {
  en: {
    title: '2 Day Sri Lanka Private Tour  Ella, Kandy & Udawalawa Safari | Airport Drop',
    description:
      'Discover Sri Lanka’s wildlife, scenic hill country and cultural heritage in this 2 day private tour ending at the airport or your hotel.',
    duration: '2 Days',
    persons: 'Private Tour (1-20 Persons)',
    filecode: '2-day-ella-kandy-private-tour-sri-lanka',
    overview: `Experience an unforgettable 2 day journey through Sri Lanka’s wildlife, hill country and cultural capital.
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
              'Experience thrilling zip lining at Flying Ravana Adventure Park overlooking the stunning Ella landscape.',
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
              'Climb the unique Ambuluwawa Biodiversity Tower for breathtaking 360 degree views of the surrounding mountains.',
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
    includes: PACKAGE_INCLUDES.en,
    excludes: PACKAGE_EXCLUDES.en,
    seoIntro:
      'Two days is enough to link Ella\'s highland icons with Kandy\'s sacred heritage when a private chauffeur handles the mountain roads. Day one combines Udawalawe Elephant Transit Home ethical viewing of rescued calves with Nine Arches Bridge, Little Adam\'s Peak, optional Flying Ravana zip lining and Ravana Falls. Day two descends through Ramboda Falls and the spiral Ambuluwawa Tower before Kandy\'s Temple of the Sacred Tooth and a Pinnawala elephant stop en route to the airport or your hotel. Sundown Tours times train viewpoints and hikes to beat midday crowds while you travel in an air conditioned vehicle with unlimited mileage. Accommodation is optional; entrance fees and meals stay at your discretion. Ideal as a pre flight mini circuit from the south coast or a focused add on between beach days and departure.',
    highlights: [
      'Udawalawe Elephant Transit Home and Ella Nine Arches Bridge viewpoints',
      'Little Adam\'s Peak hike and optional Flying Ravana zip line adventure',
      'Ramboda Falls and Ambuluwawa Tower 360 degree mountain panoramas',
      'Kandy Temple of the Sacred Tooth Relic and Pinnawala Elephant Orphanage',
      'Private vehicle with English speaking driver and flexible airport or hotel drop off',
    ],
    whoIsFor:
      'Perfect for transit passengers, honeymooners and small groups with limited time who still want hill country scenery and Kandy culture without a week long commitment.',
    bestTimeNote:
      'year round; dry months January to March and July to August offer the clearest highland views. Morning starts help finish Kandy and Pinnawala before airport traffic on Day 2.',
    faq: [
      {
        q: 'Can this 2 day tour end at Bandaranaike International Airport?',
        a: 'Yes the route is designed for convenient airport or hotel drop off on Day 2. Share your flight time so we plan Pinnawala and Kandy pacing accordingly.',
      },
      {
        q: 'Is overnight accommodation included?',
        a: 'Yes. Overnight stay in a selected 4 Star hotel with breakfast and dinner (Half Board) is included.',
      },
      {
        q: 'Do we have time for the Flying Ravana zip line?',
        a: 'The zip line is optional and weather dependent. If you book it, we shorten another Ella stop usually a longer Ravana Falls visit so the day stays relaxed.',
      },
    ],
  },

  de: {
    title: '2 Tage Sri Lanka Privatreise  Ella, Kandy & Udawalawa Safari | Flughafentransfer',
    description:
      'Entdecken Sie Sri Lankas Tierwelt, malerisches Bergland und kulturelles Erbe auf dieser 2 tagigen Privatreise, die am Flughafen oder in Ihrem Hotel endet.',
    duration: '2 Tage',
    persons: 'Privatreise (1 to 20 Personen)',
    tourType: 'Rundreise',
    overview:
      'Erleben Sie eine unvergessliche 2 tagige Reise durch Sri Lankas Tierwelt, Bergland und kulturelle Hauptstadt. Am ersten Tag besuchen Sie das Udawalawa Elephant Transit Home, bevor es nach Ella geht, um die Nine Arch Bridge, Little Adam’s Peak, Flying Ravana und die Ravana Wasserfalle zu entdecken. Am zweiten Tag reisen Sie durch die malerischen Hugel zu den Ramboda Wasserfallen und dem Ambuluwawa Turm, bevor Sie den heiligen Zahntempel in Kandy und das Pinnawala Elephant Orphanage besuchen. Diese Privatreise endet bequem am Flughafen oder in Ihrem Hotel.',
    includes: PACKAGE_INCLUDES.de,
    excludes: PACKAGE_EXCLUDES.de,
    seoIntro:
      'Zwei Tage reichen aus, um die Highlights von Ella mit dem heiligen Kulturerbe von Kandy zu verbinden, wenn ein privater Chauffeur die Bergstrassen ubernimmt. Tag eins kombiniert das Udawalawe Elephant Transit Home  die ethische Beobachtung geretteter Elefantenkalber  mit der Nine Arches Bridge, Little Adam\'s Peak, dem optionalen Flying Ravana Zipline Abenteuer und den Ravana Wasserfallen. Tag zwei fuhrt uber die Ramboda Wasserfalle und den spiralformigen Ambuluwawa Turm zum Zahntempel in Kandy und einem Stopp im Pinnawala Elefantenwaisenhaus auf dem Weg zum Flughafen oder Ihrem Hotel. Sundown Tours plant Zugblicke und Wanderungen so, dass Sie den Mittagsandrang vermeiden, wahrend Sie in einem klimatisierten Fahrzeug mit unbegrenzter Kilometerleistung reisen. Die Unterkunft ist optional; Eintrittsgebuhren und Mahlzeiten bleiben Ihnen selbst uberlassen. Ideal als Mini Rundreise vor dem Flug ab der Sudkuste oder als gezielte Erganzung zwischen Strandtagen und Abreise.',
    highlights: [
      'Udawalawe Elephant Transit Home und Aussichtspunkte an der Nine Arches Bridge in Ella',
      'Wanderung zum Little Adam\'s Peak und optionales Flying Ravana Zipline Abenteuer',
      'Ramboda Wasserfalle und 360 Grad Bergpanorama am Ambuluwawa Turm',
      'Zahntempel in Kandy und Pinnawala Elefantenwaisenhaus',
      'Privatfahrzeug mit englischsprachigem Fahrer und flexiblem Transfer zum Flughafen oder Hotel',
    ],
    whoIsFor:
      'Perfekt fur Transitreisende, Hochzeitsreisende und kleine Gruppen mit begrenzter Zeit, die trotzdem die Landschaft des Hugellands und die Kultur von Kandy erleben mochten, ohne sich fur eine ganze Woche zu binden.',
    bestTimeNote:
      'Ganzjahrig moglich; die trockenen Monate Januar to Marz und Juli to August bieten die klarsten Ausblicke im Hochland. Ein fruher Start hilft, Kandy und Pinnawala am 2. Tag vor dem Flughafenverkehr abzuschliessen.',
    faq: [
      {
        q: 'Kann diese 2 tagige Tour am Flughafen Bandaranaike enden?',
        a: 'Ja  die Route ist fur eine bequeme Ankunft am Flughafen oder Hotel am 2. Tag ausgelegt. Teilen Sie uns Ihre Flugzeit mit, damit wir Kandy und Pinnawala entsprechend timen.',
      },
      {
        q: 'Ist eine Ubernachtung im Preis enthalten?',
        a: 'Ja. Die Ubernachtung in einem ausgewahlten 4 Sterne Hotel mit Fruhstuck und Abendessen (Halbpension) ist enthalten.'
      },
      {
        q: 'Haben wir Zeit fur die Flying Ravana Zipline?',
        a: 'Die Zipline ist optional und wetterabhangig. Wenn Sie sie buchen, verkurzen wir einen anderen Stopp in Ella  meist den Besuch der Ravana Wasserfalle , damit der Tag entspannt bleibt.',
      },
    ],
    days: [
      {
        title: 'Udawalawa und Ella Abenteuer',
        activities: [
          {
            type: 'Naturerlebnis',
            title: 'Udawalawa Elephant Transit Home',
            description:
              'Besuchen Sie das Udawalawa Elephant Transit Home, um gerettete Elefantenbabys zu beobachten, die versorgt und auf ihre Ruckkehr in die Wildnis vorbereitet werden.',
          },
          {
            type: 'Aussichtsbesuch',
            title: 'Nine Arch Bridge',
            description:
              'Entdecken Sie die legendare Nine Arch Bridge in Ella, umgeben von uppigem Grun und atemberaubenden Ausblicken auf das Bergland.',
          },
          {
            type: 'Wanderung',
            title: 'Little Adam’s Peak',
            description:
              'Geniessen Sie eine kurze, malerische Wanderung zum Little Adam’s Peak mit Panoramablick auf den Ella Gap und die umliegenden Teeplantagen.',
          },
          {
            type: 'Abenteuer',
            title: 'Flying Ravana Zipline',
            description:
              'Erleben Sie spannendes Zip Lining im Flying Ravana Adventure Park mit Blick auf die atemberaubende Landschaft von Ella.',
          },
          {
            type: 'Wasserfall Besuch',
            title: 'Ravana Wasserfall',
            description:
              'Besuchen Sie den wunderschonen Ravana Wasserfall, einen der beruhmtesten Wasserfalle Sri Lankas, in der Nahe von Ella.',
          },
        ],
      },
      {
        title: 'Bergland & Kulturtour nach Kandy',
        activities: [
          {
            type: 'Wasserfall Besuch',
            title: 'Ramboda Wasserfall',
            description:
              'Halten Sie am Ramboda Wasserfall, einem beeindruckenden Wasserfall inmitten von Sri Lankas malerischem Bergland.',
          },
          {
            type: 'Aussichtsturm Besuch',
            title: 'Ambuluwawa Turm',
            description:
              'Besteigen Sie den einzigartigen Ambuluwawa Biodiversitatsturm fur einen atemberaubenden 360 Grad Blick auf die umliegenden Berge.',
          },
          {
            type: 'Kulturbesuch',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den heiligen Zahntempel in Kandy, eine der bedeutendsten buddhistischen Statten der Welt.',
          },
          {
            type: 'Naturerlebnis',
            title: 'Pinnawala Elephant Orphanage',
            description:
              'Beobachten Sie Elefanten beim Baden und Fressen im beruhmten Pinnawala Elephant Orphanage.',
          },
        ],
      },
    ],
  },

  fr: {
    title: '2 jours Circuit prive au Sri Lanka  Ella, Kandy & Safari a Udawalawa | Depose a l’aeroport',
    description:
      'Decouvrez la faune, les paysages de montagne et le patrimoine culturel du Sri Lanka lors de ce circuit prive de 2 jours se terminant a l’aeroport ou a votre hotel.',
    duration: '2 jours',
    persons: 'Circuit prive (1 a 20 personnes)',
    tourType: 'Circuit',
    overview:
      'Vivez un voyage inoubliable de 2 jours a travers la faune, les hauts plateaux et la capitale culturelle du Sri Lanka. Le premier jour, visitez l’Udawalawa Elephant Transit Home avant de rejoindre Ella pour decouvrir le Nine Arch Bridge, le Little Adam’s Peak, Flying Ravana et les chutes de Ravana. Le deuxieme jour, traversez les collines pittoresques jusqu’aux chutes de Ramboda et a la tour d’Ambuluwawa avant de decouvrir le sacre Temple de la Dent a Kandy et l’orphelinat d’elephants de Pinnawala. Ce circuit prive se termine confortablement a l’aeroport ou a votre hotel.',
    includes: PACKAGE_INCLUDES.fr,
    excludes: PACKAGE_EXCLUDES.fr,
    seoIntro:
      'Deux jours suffisent pour relier les incontournables d’Ella au patrimoine sacre de Kandy lorsqu’un chauffeur prive prend en charge les routes de montagne. Le premier jour associe le centre de transit des elephants d’Udawalawe une observation ethique de bebes elephants secourus au pont Nine Arches, a Little Adam’s Peak, a la tyrolienne optionnelle Flying Ravana et aux chutes de Ravana. Le second jour descend par les chutes de Ramboda et la tour en spirale d’Ambuluwawa avant le Temple de la Dent Sacree a Kandy et un arret a l’orphelinat des elephants de Pinnawala en route vers l’aeroport ou votre hotel. Sundown Tours planifie les points de vue du train et les randonnees pour eviter la foule de midi, tandis que vous voyagez dans un vehicule climatise au kilometrage illimite. L’hebergement est optionnel ; les frais d’entree et les repas restent a votre discretion. Ideal comme mini circuit avant un vol depuis la cote sud ou comme complement cible entre les jours de plage et le depart.',
    highlights: [
      'Centre de transit des elephants d’Udawalawe et points de vue du pont Nine Arches a Ella',
      'Randonnee a Little Adam’s Peak et tyrolienne optionnelle Flying Ravana',
      'Chutes de Ramboda et panoramas a 360° depuis la tour d’Ambuluwawa',
      'Temple de la Dent Sacree a Kandy et orphelinat des elephants de Pinnawala',
      'Vehicule prive avec chauffeur anglophone et depose flexible a l’aeroport ou a l’hotel',
    ],
    whoIsFor:
      'Parfait pour les voyageurs en transit, les jeunes maries et les petits groupes disposant de peu de temps mais souhaitant tout de meme decouvrir les paysages des hauts plateaux et la culture de Kandy sans s’engager sur une semaine complete.',
    bestTimeNote:
      'Toute l’annee ; les mois secs de janvier a mars et de juillet a aout offrent les vues les plus degagees sur les hauts plateaux. Un depart matinal aide a terminer Kandy et Pinnawala avant le trafic aeroportuaire du jour 2.',
    faq: [
      {
        q: 'Ce circuit de 2 jours peut il se terminer a l’aeroport international de Bandaranaike ?',
        a: 'Oui l’itineraire est concu pour une depose pratique a l’aeroport ou a l’hotel le jour 2. Indiquez nous l’heure de votre vol afin que nous planifiions le rythme de Kandy et Pinnawala en consequence.',
      },
      {
        q: 'L’hebergement pour la nuit est il inclus ?',
        a: 'Oui. La nuit en hotel 4 etoiles selectionne avec petit dejeuner et diner (demi pension) est incluse.',
      },
      {
        q: 'Avons nous le temps pour la tyrolienne Flying Ravana ?',
        a: 'La tyrolienne est optionnelle et depend de la meteo. Si vous la reservez, nous raccourcissons un autre arret a Ella generalement une visite plus longue des chutes de Ravana afin que la journee reste detendue.',
      },
    ],
    days: [
      {
        title: 'Aventure a Udawalawa et Ella',
        activities: [
          {
            type: 'Experience faune',
            title: 'Udawalawa Elephant Transit Home',
            description:
              'Visitez l’Udawalawa Elephant Transit Home pour observer des bebes elephants secourus, soignes avant leur retour dans la nature.',
          },
          {
            type: 'Visite panoramique',
            title: 'Nine Arch Bridge',
            description:
              'Decouvrez l’emblematique Nine Arch Bridge a Ella, entoure d’une vegetation luxuriante et de vues a couper le souffle sur les hauts plateaux.',
          },
          {
            type: 'Randonnee',
            title: 'Little Adam’s Peak',
            description:
              'Profitez d’une courte randonnee panoramique jusqu’au Little Adam’s Peak pour des vues a 360° sur l’Ella Gap et les plantations de the environnantes.',
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
              'Visitez les magnifiques chutes de Ravana, l’une des cascades les plus celebres du Sri Lanka, situees pres d’Ella.',
          },
        ],
      },
      {
        title: 'Hauts plateaux & circuit culturel a Kandy',
        activities: [
          {
            type: 'Cascade',
            title: 'Chutes de Ramboda',
            description:
              'Faites une halte aux chutes de Ramboda, une cascade impressionnante au coeur des hauts plateaux pittoresques du Sri Lanka.',
          },
          {
            type: 'Visite de tour panoramique',
            title: 'Tour d’Ambuluwawa',
            description:
              'Grimpez a l’unique tour de biodiversite d’Ambuluwawa pour une vue a 360° a couper le souffle sur les montagnes environnantes.',
          },
          {
            type: 'Visite culturelle',
            title: 'Temple de la Dent sacree',
            description:
              'Visitez le sacre Temple de la Dent a Kandy, l’un des sites bouddhistes les plus importants au monde.',
          },
          {
            type: 'Experience faune',
            title: 'Orphelinat d’elephants de Pinnawala',
            description:
              'Observez les elephants se baigner et se nourrir au celebre orphelinat d’elephants de Pinnawala.',
          },
        ],
      },
    ],
  },

  it: {
    title: '2 giorni Tour privato in Sri Lanka  Ella, Kandy e Safari a Udawalawa | Arrivo in aeroporto',
    description:
      'Scopri la fauna selvatica, i paesaggi collinari e il patrimonio culturale dello Sri Lanka in questo tour privato di 2 giorni con arrivo finale in aeroporto o in hotel.',
    duration: '2 giorni',
    persons: 'Tour privato (1-20 persone)',
    tourType: 'Tour completo',
    overview:
      'Vivi un indimenticabile viaggio di 2 giorni tra la fauna selvatica, le colline e la capitale culturale dello Sri Lanka. Il primo giorno visita l’Udawalawa Elephant Transit Home prima di dirigerti a Ella per scoprire il Nine Arch Bridge, il Little Adam’s Peak, Flying Ravana e le cascate di Ravana. Il secondo giorno, attraversa le colline panoramiche fino alle cascate di Ramboda e alla torre di Ambuluwawa, prima di scoprire il sacro Tempio del Dente a Kandy e l’orfanotrofio degli elefanti di Pinnawala. Questo tour privato si conclude comodamente in aeroporto o nel tuo hotel.',
    includes: PACKAGE_INCLUDES.it,
    excludes: PACKAGE_EXCLUDES.it,
    seoIntro:
      'Due giorni sono sufficienti per collegare le icone dell’altopiano di Ella al patrimonio sacro di Kandy, con un autista privato che gestisce le strade di montagna. Il primo giorno combina l’Udawalawe Elephant Transit Home osservazione etica di cuccioli di elefante salvati con il ponte Nine Arches, Little Adam’s Peak, la tirolesa opzionale Flying Ravana e le cascate di Ravana. Il secondo giorno scende attraverso le cascate di Ramboda e la torre a spirale di Ambuluwawa prima del Tempio della Sacra Reliquia del Dente a Kandy e una sosta all’orfanotrofio degli elefanti di Pinnawala in viaggio verso l’aeroporto o il vostro hotel. Sundown Tours pianifica i punti panoramici del treno e le escursioni per evitare la folla di mezzogiorno, mentre viaggiate in un veicolo climatizzato con chilometraggio illimitato. L’alloggio e opzionale; i biglietti d’ingresso e i pasti restano a vostra discrezione. Ideale come mini circuito pre volo dalla costa meridionale o come tappa mirata tra i giorni di spiaggia e la partenza.',
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
      'Tutto l’anno; i mesi secchi da gennaio a marzo e da luglio ad agosto offrono le vedute piu limpide sull’altopiano. Una partenza al mattino aiuta a concludere Kandy e Pinnawala prima del traffico aeroportuale del secondo giorno.',
    faq: [
      {
        q: 'Questo tour di 2 giorni puo concludersi all’aeroporto di Bandaranaike?',
        a: 'Si il percorso e pensato per un comodo arrivo in aeroporto o in hotel il secondo giorno. Comunicateci l’orario del vostro volo cosi pianifichiamo i tempi di Kandy e Pinnawala di conseguenza.',
      },
      {
        q: 'Il pernottamento e incluso?',
        a: 'Si. Il pernottamento in un hotel 4 stelle selezionato con colazione e cena (mezza pensione) e incluso.',
      },
      {
        q: 'Abbiamo tempo per la tirolesa Flying Ravana?',
        a: 'La tirolesa e opzionale e dipende dal meteo. Se la prenotate, accorciamo un’altra tappa a Ella di solito una visita piu lunga alle cascate di Ravana cosi la giornata resta rilassata.',
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
              'Goditi una breve escursione panoramica al Little Adam’s Peak per vedute a 360° sull’Ella Gap e le piantagioni di te circostanti.',
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
              'Visita le splendide cascate di Ravana, una delle cascate piu famose dello Sri Lanka, situata vicino a Ella.',
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
              'Sali sulla singolare torre della biodiversita di Ambuluwawa per una vista panoramica a 360° sulle montagne circostanti.',
          },
          {
            type: 'Visita culturale',
            title: 'Tempio del Sacro Dente',
            description:
              'Visita il sacro Tempio del Dente a Kandy, uno dei siti buddhisti piu importanti al mondo.',
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
    title: '2 dias Tour privado por Sri Lanka  Ella, Kandy y Safari en Udawalawa | Llegada al aeropuerto',
    description:
      'Descubre la fauna, el paisaje montanoso y el patrimonio cultural de Sri Lanka en este tour privado de 2 dias que termina en el aeropuerto o en tu hotel.',
    duration: '2 dias',
    persons: 'Tour privado (1-20 personas)',
    tourType: 'Circuito',
    overview:
      'Vive un viaje inolvidable de 2 dias a traves de la fauna, las tierras altas y la capital cultural de Sri Lanka. El primer dia, visita el Udawalawa Elephant Transit Home antes de dirigirte a Ella para explorar el Nine Arch Bridge, el Little Adam’s Peak, Flying Ravana y las cascadas de Ravana. El segundo dia, viaja por las colinas panoramicas hasta la cascada de Ramboda y la torre de Ambuluwawa antes de descubrir el sagrado Templo del Diente en Kandy y el orfanato de elefantes de Pinnawala. Este tour privado termina comodamente en el aeropuerto o en tu hotel.',
    includes: PACKAGE_INCLUDES.es,
    excludes: PACKAGE_EXCLUDES.es,
    seoIntro:
      'Dos dias son suficientes para conectar los iconos de las tierras altas de Ella con el patrimonio sagrado de Kandy cuando un chofer privado se encarga de las carreteras de montana. El primer dia combina el Udawalawe Elephant Transit Homeobservacion etica de crias de elefante rescatadas— con el puente Nine Arches, Little Adam’s Peak, la tirolina opcional Flying Ravana y las cataratas de Ravana. El segundo dia desciende por las cataratas de Ramboda y la torre en espiral de Ambuluwawa antes del Templo de la Sagrada Reliquia del Diente en Kandy y una parada en el orfanato de elefantes de Pinnawala en el camino al aeropuerto o a su hotel. Sundown Tours programa los miradores del tren y las caminatas para evitar las multitudes del mediodia mientras usted viaja en un vehiculo con aire acondicionado y kilometraje ilimitado. El alojamiento es opcional; las entradas y las comidas quedan a su discrecion. Ideal como mini circuito antes de un vuelo desde la costa sur o como complemento entre dias de playa y la salida.',
    highlights: [
      'Udawalawe Elephant Transit Home y miradores del puente Nine Arches en Ella',
      'Caminata a Little Adam’s Peak y tirolina opcional Flying Ravana',
      'Cataratas de Ramboda y panoramicas de 360° desde la Torre de Ambuluwawa',
      'Templo de la Sagrada Reliquia del Diente en Kandy y orfanato de elefantes de Pinnawala',
      'Vehiculo privado con conductor de habla inglesa y traslado flexible al aeropuerto o al hotel',
    ],
    whoIsFor:
      'Perfecto para pasajeros en transito, parejas en luna de miel y grupos pequenos con tiempo limitado que aun asi desean disfrutar del paisaje de las tierras altas y la cultura de Kandy sin comprometerse a una semana completa.',
    bestTimeNote:
      'Disponible todo el ano; los meses secos de enero a marzo y de julio a agosto ofrecen las vistas mas despejadas de las tierras altas. Salir por la manana ayuda a terminar Kandy y Pinnawala antes del trafico del aeropuerto en el dia 2.',
    faq: [
      {
        q: 'Puede este circuito de 2 dias terminar en el aeropuerto internacional de Bandaranaike?',
        a: 'Si: la ruta esta disenada para un traslado comodo al aeropuerto o al hotel el dia 2. Indiquenos la hora de su vuelo para planificar el ritmo de Kandy y Pinnawala en consecuencia.',
      },
      {
        q: 'El alojamiento nocturno esta incluido?',
        a: 'Si. El alojamiento nocturno en un hotel de 4 estrellas seleccionado con desayuno y cena (media pension) esta incluido.',
      },
      {
        q: 'Tenemos tiempo para la tirolina Flying Ravana?',
        a: 'La tirolina es opcional y depende del clima. Si la reserva, acortamos otra parada en Ellanormalmente una visita mas larga a las cataratas de Ravana— para que el dia siga siendo relajado.',
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
              'Visita el Udawalawa Elephant Transit Home para observar crias de elefante rescatadas, cuidadas antes de su regreso a la naturaleza.',
          },
          {
            type: 'Visita panoramica',
            title: 'Nine Arch Bridge',
            description:
              'Explora el iconico Nine Arch Bridge en Ella, rodeado de exuberante vegetacion y vistas impresionantes de las tierras altas.',
          },
          {
            type: 'Senderismo',
            title: 'Little Adam’s Peak',
            description:
              'Disfruta de una breve caminata panoramica hasta el Little Adam’s Peak con vistas de 360° del Ella Gap y las plantaciones de te circundantes.',
          },
          {
            type: 'Aventura',
            title: 'Tirolina Flying Ravana',
            description:
              'Vive la emocion de la tirolina en el Flying Ravana Adventure Park con vistas al espectacular paisaje de Ella.',
          },
          {
            type: 'Cascada',
            title: 'Cascada de Ravana',
            description:
              'Visita la hermosa cascada de Ravana, una de las cascadas mas famosas de Sri Lanka, cerca de Ella.',
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
              'Haz una parada en la cascada de Ramboda, una impresionante caida de agua en el corazon de las pintorescas tierras altas de Sri Lanka.',
          },
          {
            type: 'Visita a la torre panoramica',
            title: 'Torre de Ambuluwawa',
            description:
              'Sube a la singular torre de biodiversidad de Ambuluwawa para disfrutar de una vista de 360° sobre las montanas circundantes.',
          },
          {
            type: 'Visita cultural',
            title: 'Templo del Diente Sagrado',
            description:
              'Visita el sagrado Templo del Diente en Kandy, uno de los lugares budistas mas importantes del mundo.',
          },
          {
            type: 'Experiencia de fauna',
            title: 'Orfanato de elefantes de Pinnawala',
            description:
              'Observa a los elefantes banarse y alimentarse en el famoso orfanato de elefantes de Pinnawala.',
          },
        ],
      },
    ],
  },

  pl: {
    title: '2 dni Prywatna wycieczka po Sri Lance  Ella, Kandy i safari w Udawalawa | Dowoz na lotnisko',
    description:
      'Odkryj dzika przyrode, malownicze wzgorza i dziedzictwo kulturowe Sri Lanki podczas tej 2 dniowej prywatnej wycieczki zakonczonej na lotnisku lub w hotelu.',
    duration: '2 dni',
    persons: 'Prywatna wycieczka (1-20 osob)',
    tourType: 'Wycieczka objazdowa',
    overview:
      'Przezyj niezapomniana 2 dniowa podroz przez dzika przyrode, wzgorza i kulturalna stolice Sri Lanki. Pierwszego dnia odwiedzisz Udawalawa Elephant Transit Home, a nastepnie wyruszysz do Elli, by zobaczyc Nine Arch Bridge, Little Adam’s Peak, Flying Ravana i wodospady Ravana. Drugiego dnia przejedziesz przez malownicze wzgorza do wodospadu Ramboda i wiezy Ambuluwawa, a nastepnie odwiedzisz swieta Swiatynie Zeba Buddy w Kandy i sierociniec sloni w Pinnawali. Ta prywatna wycieczka zakonczy sie wygodnie na lotnisku lub w hotelu.',
    includes: PACKAGE_INCLUDES.pl,
    excludes: PACKAGE_EXCLUDES.pl,
    seoIntro:
      'Dwa dni wystarcza, aby polaczyc ikoniczne miejsca wyzyn Elli ze swietym dziedzictwem Kandy, gdy prywatny kierowca zajmuje sie gorskimi drogami. Pierwszy dzien laczy Udawalawe Elephant Transit Home  etyczna obserwacje uratowanych mlodych sloni  z mostem Nine Arches, Little Adam’s Peak, opcjonalna tyrolka Flying Ravana i wodospadami Ravana. Drugi dzien prowadzi przez wodospady Ramboda i spiralna wieze Ambuluwawa, a nastepnie do Swiatyni Swietej Relikwii Zeba w Kandy oraz do przystanku w sierocincu dla sloni w Pinnawali w drodze na lotnisko lub do hotelu. Sundown Tours planuje punkty widokowe pociagu i wedrowki tak, by uniknac tlumow w srodku dnia, podczas gdy Panstwo podrozuja klimatyzowanym pojazdem z nielimitowanym przebiegiem. Nocleg jest opcjonalny; oplaty za wstep i posilki pozostaja do Panstwa decyzji. Idealna jako mini wycieczka przed lotem z poludniowego wybrzeza lub jako dodatek miedzy dniami na plazy a wyjazdem.',
    highlights: [
      'Udawalawe Elephant Transit Home i punkty widokowe mostu Nine Arches w Elli',
      'Wedrowka na Little Adam’s Peak i opcjonalna tyrolka Flying Ravana',
      'Wodospady Ramboda i panorama 360° z wiezy Ambuluwawa',
      'Swiatynia Swietej Relikwii Zeba w Kandy i sierociniec dla sloni w Pinnawali',
      'Prywatny pojazd z anglojezycznym kierowca i elastyczny transfer na lotnisko lub do hotelu',
    ],
    whoIsFor:
      'Idealna dla podroznych w tranzycie, par w podrozy poslubnej i malych grup z ograniczonym czasem, ktore wciaz chca doswiadczyc krajobrazow wyzyn i kultury Kandy bez zobowiazania na caly tydzien.',
    bestTimeNote:
      'Dostepna caly rok; suche miesiace styczen–marzec i lipiec to sierpien oferuja najczystsze widoki na wyzyny. Wczesny start pomaga zakonczyc Kandy i Pinnawale przed ruchem lotniskowym 2. dnia.',
    faq: [
      {
        q: 'Czy ta 2 dniowa wycieczka moze zakonczyc sie na lotnisku Bandaranaike?',
        a: 'Tak  trasa zostala zaprojektowana z mysla o wygodnym transferze na lotnisko lub do hotelu 2. dnia. Podajcie nam godzine lotu, abysmy odpowiednio zaplanowali tempo w Kandy i Pinnawali.',
      },
      {
        q: 'Czy nocleg jest wliczony w cene?',
        a: 'Tak. Nocleg w wybranym hotelu 4 gwiazdkowym ze sniadaniem i kolacja (Half Board) jest wliczony.',
      },
      {
        q: 'Czy mamy czas na tyrolke Flying Ravana?',
        a: 'Tyrolka jest opcjonalna i zalezy od pogody. Jesli ja zarezerwujecie, skracamy inny przystanek w Elli  zwykle dluzsza wizyte przy wodospadach Ravana  aby dzien pozostal spokojny.',
      },
    ],
    days: [
      {
        title: 'Przygoda w Udawalawie i Elli',
        activities: [
          {
            type: 'Doswiadczenie z dzika przyroda',
            title: 'Udawalawa Elephant Transit Home',
            description:
              'Odwiedz Udawalawa Elephant Transit Home, aby zobaczyc uratowane sloniatka, ktorymi opiekuje sie personel przed ich powrotem na wolnosc.',
          },
          {
            type: 'Wizyta widokowa',
            title: 'Nine Arch Bridge',
            description:
              'Odkryj slynny most Nine Arch w Elli, otoczony bujna zielenia i zapierajacymi dech widokami na wzgorza.',
          },
          {
            type: 'Wedrowka',
            title: 'Little Adam’s Peak',
            description:
              'Wybierz sie na krotka, widokowa wedrowke na Little Adam’s Peak, skad zobaczysz panorame Ella Gap i okolicznych plantacji herbaty.',
          },
          {
            type: 'Przygoda',
            title: 'Zjazd na linie Flying Ravana',
            description:
              'Poczuj emocje zjazdu na linie w Flying Ravana Adventure Park z widokiem na piekny krajobraz Elli.',
          },
          {
            type: 'Wodospad',
            title: 'Wodospad Ravana',
            description:
              'Odwiedz piekny wodospad Ravana, jeden z najslynniejszych wodospadow Sri Lanki, polozony niedaleko Elli.',
          },
        ],
      },
      {
        title: 'Wyzyny i wycieczka kulturalna do Kandy',
        activities: [
          {
            type: 'Wodospad',
            title: 'Wodospad Ramboda',
            description:
              'Zatrzymaj sie przy wodospadzie Ramboda, imponujacym wodospadzie w samym sercu malowniczych wyzyn Sri Lanki.',
          },
          {
            type: 'Wizyta na wiezy widokowej',
            title: 'Wieza Ambuluwawa',
            description:
              'Wejdz na niezwykla wieze bioroznorodnosci Ambuluwawa, by zobaczyc zapierajaca dech panorame 360° na okoliczne gory.',
          },
          {
            type: 'Wizyta kulturalna',
            title: 'Swiatynia Swietego Zeba Buddy',
            description:
              'Odwiedz swieta Swiatynie Zeba w Kandy, jedno z najwazniejszych miejsc buddyjskich na swiecie.',
          },
          {
            type: 'Doswiadczenie z dzika przyroda',
            title: 'Sierociniec sloni w Pinnawali',
            description:
              'Zobacz, jak slonie kapia sie i jedza w slynnym sierocincu sloni w Pinnawali.',
          },
        ],
      },
    ],
  },

  ru: {
    title: '2 дня Частный тур по Шри Ланке  Элла, Канди и сафари в Удавалаве | Трансфер в аэропорт',
    description:
      'Откройте для себя дикую природу, живописную горную местность и культурное наследие Шри Ланки в этом частном туре на 2 дня, завершающемся в аэропорту или в вашем отеле.',
    duration: '2 дня',
    persons: 'Частный тур (1-20 человек)',
    tourType: 'Обзорный тур',
    overview:
      'Совершите незабываемое 2 дневное путешествие по дикой природе, горной местности и культурной столице Шри Ланки. В первый день вы посетите Udawalawa Elephant Transit Home перед тем, как отправиться в Эллу, чтобы увидеть Nine Arch Bridge, Little Adam’s Peak, Flying Ravana и водопады Равана. На второй день вы проедете через живописные холмы к водопаду Рамбода и башне Амбулувава, а затем посетите священный Храм Зуба Будды в Канди и приют слонов Пиннавела. Этот частный тур удобно завершается в аэропорту или в вашем отеле.',
    includes: PACKAGE_INCLUDES.ru,
    excludes: PACKAGE_EXCLUDES.ru,
    seoIntro:
      'Двух дней достаточно, чтобы соединить главные достопримечательности горной Эллы со священным наследием Канди, когда частный шофёр берёт на себя горные дороги. Первый день сочетает Udawalawe Elephant Transit Home этичное наблюдение за спасёнными слонятами с мостом Nine Arches, Little Adam’s Peak, опциональным зип лайном Flying Ravana и водопадами Равана. Второй день проходит через водопады Ramboda и спиральную башню Ambuluwawa перед Храмом Священной Реликвии Зуба в Канди и остановкой в приюте для слонов Пиннавела на пути в аэропорт или ваш отель. Sundown Tours планирует смотровые точки поезда и походы так, чтобы избежать полуденных толп, пока вы путешествуете в кондиционированном автомобиле с неограниченным пробегом. Проживание опционально; входные билеты и питание остаются на ваш выбор. Идеально как мини маршрут перед вылетом с южного побережья или как дополнение между пляжными днями и отъездом.',
    highlights: [
      'Udawalawe Elephant Transit Home и смотровые точки моста Nine Arches в Элле',
      'Поход на Little Adam’s Peak и опциональный зип лайн Flying Ravana',
      'Водопады Ramboda и панорама горной страны на 360° с башни Ambuluwawa',
      'Храм Священной Реликвии Зуба в Канди и приют для слонов Пиннавела',
      'Частный автомобиль с англоговорящим водителем и гибкий трансфер в аэропорт или отель',
    ],
    whoIsFor:
      'Идеально для транзитных пассажиров, молодожёнов и небольших групп с ограниченным временем, которые всё же хотят увидеть пейзажи горной страны и культуру Канди без обязательств на целую неделю.',
    bestTimeNote:
      'Доступно круглый год; сухие месяцы январь–март и июль–август дают самые чистые виды в горах. Ранний старт помогает завершить Канди и Пиннавелу до начала аэропортового трафика на 2 й день.',
    faq: [
      {
        q: 'Может ли этот 2 дневный тур завершиться в аэропорту Бандаранаике?',
        a: 'Да маршрут разработан для удобной высадки в аэропорту или отеле на 2 й день. Сообщите нам время вашего рейса, чтобы мы соответствующим образом спланировали темп Канди и Пиннавелы.',
      },
      {
        q: 'Включено ли проживание с ночёвкой?',
        a: 'Да. Ночь в выбранном отеле 4 звезды с завтраком и ужином (полупансион) включена.',
      },
      {
        q: 'Есть ли у нас время на зип лайн Flying Ravana?',
        a: 'Зип лайн опционален и зависит от погоды. Если вы его бронируете, мы сокращаем другую остановку в Элле обычно более длительное посещение водопадов Равана чтобы день оставался спокойным.',
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
            title: 'Zip line Flying Ravana',
            description:
              'Испытайте азарт зип лайна в парке приключений Flying Ravana с видом на потрясающий ландшафт Эллы.',
          },
          {
            type: 'Водопад',
            title: 'Водопад Равана',
            description:
              'Посетите прекрасный водопад Равана один из самых знаменитых водопадов Шри Ланки, расположенный рядом с Эллой.',
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
              'Остановитесь у водопада Рамбода впечатляющего водопада в самом сердце живописной горной местности Шри Ланки.',
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
    title: '2 Tage Sri Lanka Privatreise  Ella, Kandy & Udawalawa Safari | Flughafentransfer',
    description:
      'Entdecken Sie Sri Lankas Tierwelt, malerisches Bergland und kulturelles Erbe auf dieser 2 tagigen Privatreise, die am Flughafen oder in Ihrem Hotel endet.',
    duration: '2 Tage',
    persons: 'Privatreise (1 to 20 Personen)',
    tourType: 'Rundreise',
    overview:
      'Erleben Sie eine unvergessliche 2 tagige Reise durch Sri Lankas Tierwelt, Bergland und kulturelle Hauptstadt. Am ersten Tag besuchen Sie das Udawalawa Elephant Transit Home, bevor es nach Ella geht, um die Nine Arch Bridge, Little Adam’s Peak, Flying Ravana und die Ravana Wasserfalle zu entdecken. Am zweiten Tag reisen Sie durch die malerischen Hugel zu den Ramboda Wasserfallen und dem Ambuluwawa Turm, bevor Sie den heiligen Zahntempel in Kandy und das Pinnawala Elephant Orphanage besuchen. Diese Privatreise endet bequem am Flughafen oder in Ihrem Hotel.',
    includes: PACKAGE_INCLUDES.nl,
    excludes: PACKAGE_EXCLUDES.nl,
    seoIntro:
      'Zwei Tage reichen aus, um die Highlights von Ella mit dem heiligen Kulturerbe von Kandy zu verbinden, wenn ein privater Chauffeur die Bergstrassen ubernimmt. Tag eins kombiniert das Udawalawe Elephant Transit Home  die ethische Beobachtung geretteter Elefantenkalber  mit der Nine Arches Bridge, Little Adam\'s Peak, dem optionalen Flying Ravana Zipline Abenteuer und den Ravana Wasserfallen. Tag zwei fuhrt uber die Ramboda Wasserfalle und den spiralformigen Ambuluwawa Turm zum Zahntempel in Kandy und einem Stopp im Pinnawala Elefantenwaisenhaus auf dem Weg zum Flughafen oder Ihrem Hotel. Sundown Tours plant Zugblicke und Wanderungen so, dass Sie den Mittagsandrang vermeiden, wahrend Sie in einem klimatisierten Fahrzeug mit unbegrenzter Kilometerleistung reisen. Die Unterkunft ist optional; Eintrittsgebuhren und Mahlzeiten bleiben Ihnen selbst uberlassen. Ideal als Mini Rundreise vor dem Flug ab der Sudkuste oder als gezielte Erganzung zwischen Strandtagen und Abreise.',
    highlights: [
      'Udawalawe Elephant Transit Home und Aussichtspunkte an der Nine Arches Bridge in Ella',
      'Wanderung zum Little Adam\'s Peak und optionales Flying Ravana Zipline Abenteuer',
      'Ramboda Wasserfalle und 360 Grad Bergpanorama am Ambuluwawa Turm',
      'Zahntempel in Kandy und Pinnawala Elefantenwaisenhaus',
      'Privatfahrzeug mit englischsprachigem Fahrer und flexiblem Transfer zum Flughafen oder Hotel',
    ],
    whoIsFor:
      'Perfekt fur Transitreisende, Hochzeitsreisende und kleine Gruppen mit begrenzter Zeit, die trotzdem die Landschaft des Hugellands und die Kultur von Kandy erleben mochten, ohne sich fur eine ganze Woche zu binden.',
    bestTimeNote:
      'Ganzjahrig moglich; die trockenen Monate Januar to Marz und Juli to August bieten die klarsten Ausblicke im Hochland. Ein fruher Start hilft, Kandy und Pinnawala am 2. Tag vor dem Flughafenverkehr abzuschliessen.',
    faq: [
      {
        q: 'Kann diese 2 tagige Tour am Flughafen Bandaranaike enden?',
        a: 'Ja  die Route ist fur eine bequeme Ankunft am Flughafen oder Hotel am 2. Tag ausgelegt. Teilen Sie uns Ihre Flugzeit mit, damit wir Kandy und Pinnawala entsprechend timen.',
      },
      {
        q: 'Ist eine Ubernachtung im Preis enthalten?',
        a: 'Ja. Die Ubernachtung in einem ausgewahlten 4 Sterne Hotel mit Fruhstuck und Abendessen (Halbpension) ist enthalten.'
      },
      {
        q: 'Haben wir Zeit fur die Flying Ravana Zipline?',
        a: 'Die Zipline ist optional und wetterabhangig. Wenn Sie sie buchen, verkurzen wir einen anderen Stopp in Ella  meist den Besuch der Ravana Wasserfalle , damit der Tag entspannt bleibt.',
      },
    ],
    days: [
      {
        title: 'Udawalawa und Ella Abenteuer',
        activities: [
          {
            type: 'Naturerlebnis',
            title: 'Udawalawa Elephant Transit Home',
            description:
              'Besuchen Sie das Udawalawa Elephant Transit Home, um gerettete Elefantenbabys zu beobachten, die versorgt und auf ihre Ruckkehr in die Wildnis vorbereitet werden.',
          },
          {
            type: 'Aussichtsbesuch',
            title: 'Nine Arch Bridge',
            description:
              'Entdecken Sie die legendare Nine Arch Bridge in Ella, umgeben von uppigem Grun und atemberaubenden Ausblicken auf das Bergland.',
          },
          {
            type: 'Wanderung',
            title: 'Little Adam’s Peak',
            description:
              'Geniessen Sie eine kurze, malerische Wanderung zum Little Adam’s Peak mit Panoramablick auf den Ella Gap und die umliegenden Teeplantagen.',
          },
          {
            type: 'Abenteuer',
            title: 'Flying Ravana Zipline',
            description:
              'Erleben Sie spannendes Zip Lining im Flying Ravana Adventure Park mit Blick auf die atemberaubende Landschaft von Ella.',
          },
          {
            type: 'Wasserfall Besuch',
            title: 'Ravana Wasserfall',
            description:
              'Besuchen Sie den wunderschonen Ravana Wasserfall, einen der beruhmtesten Wasserfalle Sri Lankas, in der Nahe von Ella.',
          },
        ],
      },
      {
        title: 'Bergland & Kulturtour nach Kandy',
        activities: [
          {
            type: 'Wasserfall Besuch',
            title: 'Ramboda Wasserfall',
            description:
              'Halten Sie am Ramboda Wasserfall, einem beeindruckenden Wasserfall inmitten von Sri Lankas malerischem Bergland.',
          },
          {
            type: 'Aussichtsturm Besuch',
            title: 'Ambuluwawa Turm',
            description:
              'Besteigen Sie den einzigartigen Ambuluwawa Biodiversitatsturm fur einen atemberaubenden 360 Grad Blick auf die umliegenden Berge.',
          },
          {
            type: 'Kulturbesuch',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den heiligen Zahntempel in Kandy, eine der bedeutendsten buddhistischen Statten der Welt.',
          },
          {
            type: 'Naturerlebnis',
            title: 'Pinnawala Elephant Orphanage',
            description:
              'Beobachten Sie Elefanten beim Baden und Fressen im beruhmten Pinnawala Elephant Orphanage.',
          },
        ],
      },
    ],
  }
};
