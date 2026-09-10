import type { TourContent } from './localize';
import { PACKAGE_EXCLUDES, PACKAGE_INCLUDES } from './package-inclusions';

/**
 * 4 day Sri Lanka round tour (id: tour4).
 * English is the full BaseTour; locale overlays are authored separately.
 */
export const TOUR4: TourContent = {
  en: {
    title: '4 Day Sri Lanka Private Tour | Kandy, Ella, Yala & South Coast',
    description:
      'Explore Sri Lanka in 4 unforgettable days including Kandy cultural heritage, Ella hill country, Yala safari adventure and the stunning southern coastline.',
    duration: '4 Days',
    persons: '1-20 Persons',
    filecode: '4-day-sri-lanka-tour',
    overview:
      'Discover Sri Lanka’s perfect combination of culture, scenic beauty, wildlife and coastal charm in this 4 day private tour. Visit the sacred city of Kandy, experience the breathtaking hill country of Ella, enjoy a thrilling safari in Yala National Park and explore the historic Galle Fort before your airport drop.',
    tourType: 'Round Tour',
    itinerary: [
      {
        day: 1,
        title: 'Airport / Hotel  Kandy Cultural Experience',
        activities: [
          {
            type: 'Wildlife Experience',
            title: { title: 'Pinnawala Elephant Orphanage', icon: 'fa-paw', color: '#27ae60' },
            description:
              'Visit the famous Pinnawala Elephant Orphanage where rescued elephants are cared for and protected. Observe elephants bathing in the river and learn about conservation efforts.',
            image: 'assets/img/5daysTours/7.jpg',
          },
          {
            type: 'Cultural Visit',
            title: { title: 'Temple of the Sacred Tooth Relic', icon: 'fa-place-of-worship', color: '#2980b9' },
            description:
              'Explore Sri Dalada Maligawa, one of the most sacred Buddhist temples in the world, home to the sacred tooth relic of Lord Buddha.',
            image: 'assets/img/5daysTours/14.jpg',
          },
          {
            type: 'Cultural Experience',
            title: { title: 'Kandy Cultural Dance Show', icon: 'fa-theater-masks', color: '#e74c3c' },
            description:
              'Enjoy a traditional Kandyan dance performance featuring fire walking, drumming and vibrant cultural costumes.',
            image: 'assets/img/5daysTours/fifyrnqt5tvouhpgh6kk.jpg',
          },
          {
            type: 'Scenic View',
            title: { title: 'Kandy View Point', icon: 'fa-mountain', color: '#8e44ad' },
            description: 'Stop at Kandy View Point for panoramic views of Kandy city, the lake and surrounding hills.',
            image: 'assets/img/5daysTours/476465443_947365727374414_5703532547629723678_n.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Overnight Stay Topez Hotel in Kandy', icon: 'fa-hotel', color: '#16a085' },
            description: 'Stay overnight in a comfortable star class hotel in Kandy on a half  Board basis.',
            extra: ['Dinner Included', 'Private Room'],
          },
        ],
      },
      {
        day: 2,
        title: 'Kandy  Ella Hill Country Journey',
        activities: [
          {
            type: 'Nature',
            title: { title: 'Royal Botanic Gardens Peradeniya', icon: 'fa-tree', color: '#2ecc71' },
            description:
              'Walk through one of Asia’s most beautiful botanical gardens featuring orchids, palms, bamboo and tropical plants.',
            image: 'assets/img/5daysTours/himbgjcj6zckm6de1mhe.jpg',
          },
          {
            type: 'Tea Experience',
            title: { title: 'Glenloch Tea Factory Visit', icon: 'fa-mug-hot', color: '#8B4513' },
            description:
              'Discover how world famous Ceylon tea is produced and enjoy a fresh cup while overlooking scenic tea plantations.',
            image: 'assets/img/5daysTours/17.jpg',
          },
          {
            type: 'Scenic Visit',
            title: { title: 'Nine Arch Bridge', icon: 'fa-bridge', color: '#A9A9A9' },
            description: 'Visit the iconic colonial era Nine Arch Bridge surrounded by lush greenery and rolling hills.',
            image: 'assets/img/5daysTours/5.jpg',
          },
          {
            type: 'Hiking',
            title: { title: "Little Adam's Peak", icon: 'fa-mountain', color: '#f39c12' },
            description: 'Enjoy a gentle hike offering panoramic views over Ella Gap and the surrounding mountain range.',
            image: 'assets/img/5daysTours/9.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Overnight Stay Oak Ray Ella Gap Hotel or similar - HB Basis in Ella',
              icon: 'fa-hotel',
              color: '#16a085',
            },
            description: 'Overnight stay in a scenic hill country hotel on half  Board basis.',
            extra: ['Breakfast & Dinner Included', 'Private Room'],
          },
        ],
      },
      {
        day: 3,
        title: 'Ella  Yala Wildlife Safari',
        activities: [
          {
            type: 'Waterfall',
            title: { title: 'Ravana Falls', icon: 'fa-water', color: '#3498db' },
            description:
              'Stop at Ravana Falls, one of Sri Lanka’s most picturesque waterfalls located along the Ella to Wellawaya road.',
            image: 'assets/img/5daysTours/n0oxsxmicxgleixkq2rx.jpg',
          },
          {
            type: 'Historical Site',
            title: { title: 'Buduruwagala Temple', icon: 'fa-landmark', color: '#e67e22' },
            description: 'Visit this ancient rock temple complex featuring impressive carved Buddha statues.',
            image: 'assets/img/5daysTours/18.jpg',
          },
          {
            type: 'Safari',
            title: { title: 'Yala National Park Safari', icon: 'fa-paw', color: '#27ae60' },
            description:
              'Experience a thrilling jeep safari in Yala National Park, home to leopards, elephants, crocodiles and diverse wildlife.',
            image: 'assets/img/5daysTours/xj7qybc2bk5bwnxdkubp.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Overnight Stay in Yala', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay in a comfortable safari area hotel with half  Board.',
            extra: ['Breakfast & Dinner Included'],
          },
        ],
      },
      {
        day: 4,
        title: 'Yala  Galle  Bentota  Airport',
        activities: [
          {
            type: 'Beach Visit',
            title: { title: 'Mirissa Beach', icon: 'fa-umbrella-beach', color: '#f39c12' },
            description: 'Relax at Mirissa Beach or enjoy optional whale watching and coastal views.',
            image: 'assets/img/5daysTours/21.jpg',
          },
          {
            type: 'Heritage',
            title: { title: 'Galle Dutch Fort', icon: 'fa-landmark', color: '#8e44ad' },
            description: 'Explore the UNESCO listed Galle Fort with colonial architecture, ramparts and ocean views.',
            image: 'assets/img/5daysTours/22.jpg',
          },
          {
            type: 'Boat Safari',
            title: { title: 'Madu River Safari', icon: 'fa-ship', color: '#3498db' },
            description:
              'Enjoy a peaceful boat ride through mangroves and small islands in one of Sri Lanka’s richest wetland ecosystems.',
            image: 'assets/img/5daysTours/23.jpg',
          },
        ],
      },
    ],
    includes: PACKAGE_INCLUDES.en,
    excludes: PACKAGE_EXCLUDES.en,
    seoIntro:
      'Four days is the sweet spot when you want Sri Lanka\'s greatest hits without a full week commitment. This private round tour links the sacred lake city of Kandy, Ella\'s misty ridges and Nine Arches Bridge, a Yala National Park jeep safari for elephants and leopards, and the colonial charm of Galle Fort on the south coast all with one English speaking chauffeur and unlimited mileage. Sundown Tours paces the driving so you enjoy Peradeniya Gardens and tea country viewpoints rather than rushing between checkpoints. Hotels are arranged on half  board in star class properties; entrance fees and lunches stay flexible so you choose which temples, parks and restaurants matter most. Ideal as a standalone holiday or as a focused add on before a beach extension.',
    highlights: [
      'Kandy Sacred Tooth Relic Temple, cultural dance show and lake viewpoints',
      'Ella Nine Arch Bridge, tea factory visit and scenic hill country drives',
      'Yala National Park 4x4 safari for wild elephants and leopard country',
      'Galle Fort UNESCO walk and Madu River mangrove boat safari',
      'Private air conditioned vehicle with professional driver guide throughout',
    ],
    faq: [
      {
        q: 'Can this 4 day tour start from Colombo or only the airport?',
        a: 'Both work. We can pick you up at Bandaranaike International Airport or any Colombo/West Coast hotel and drop you at the airport or your preferred exit point on Day 4.',
      },
      {
        q: 'Is Yala National Park always open on the itinerary?',
        a: 'Yala closes briefly for maintenance each year, usually around September. If your dates coincide, we substitute Udawalawe or another park with strong elephant sightings at no change to the tour structure.',
      },
      {
        q: 'Does the price include hotels and safari jeep fees?',
        a: 'half board hotel accommodation and your private vehicle with driver are included. National park entrance tickets, safari jeep hire and activity fees are paid locally so you can tailor optional extras.',
      },
    ],
  },
  de: {
    title: 'Sri Lanka Privatreise  4 Tage | Kandy, Ella, Yala & Sudkuste',
    description:
      'Erleben Sie Sri Lanka in 4 unvergesslichen Tagen mit dem Kulturerbe von Kandy, dem Hugelland von Ella, einem spannenden Safari Abenteuer in Yala und der traumhaften Sudkuste.',
    duration: '4 Tage',
    persons: '1-20 Personen',
    tourType: 'Privatreise',
    overview:
      'Entdecken Sie auf dieser 4 tagigen Privatreise die perfekte Mischung aus Kultur, Landschaft, Tierwelt und Kustenzauber Sri Lankas. Besuchen Sie die heilige Stadt Kandy, erleben Sie das atemberaubende Hugelland von Ella, geniessen Sie eine spannende Safari im Yala Nationalpark und erkunden Sie das historische Galle Fort vor Ihrem Transfer zum Flughafen.',
    includes: PACKAGE_INCLUDES.de,
    excludes: PACKAGE_EXCLUDES.de,
    seoIntro:
      'Vier Tage sind der ideale Zeitrahmen, um die Hohepunkte Sri Lankas zu erleben, ohne sich fur eine ganze Woche zu binden. Diese private Rundreise verbindet die heilige Seenstadt Kandy, die nebligen Hugel von Ella mit der Nine Arches Bridge, eine Jeep Safari im Yala Nationalpark auf der Suche nach Elefanten und Leoparden sowie den kolonialen Charme des Galle Forts an der Sudkuste  alles mit einem englischsprachigen Chauffeur und unbegrenzter Kilometerleistung. Sundown Tours plant die Fahrzeiten so, dass Sie die Peradeniya Garten und die Aussichtspunkte im Teeland geniessen konnen, statt zwischen den Stationen zu hetzen. Die Hotels werden auf Halbpension in Hausern gehobener Kategorie gebucht; Eintrittsgebuhren und Mittagessen bleiben flexibel, sodass Sie selbst entscheiden, welche Tempel, Parks und Restaurants Ihnen am wichtigsten sind. Ideal als eigenstandiger Urlaub oder als gezielte Erganzung vor einer Strandverlangerung.',
    highlights: [
      'Zahntempel in Kandy, kulturelle Tanzshow und Aussichtspunkte am See',
      'Nine Arch Bridge in Ella, Besuch einer Teefabrik und malerische Fahrten durchs Hugelland',
      '4x4 Safari im Yala Nationalpark auf der Suche nach wilden Elefanten und Leoparden',
      'Spaziergang durch das UNESCO Galle Fort und Bootssafari durch die Mangroven des Madu Flusses',
      'Privates klimatisiertes Fahrzeug mit professionellem Fahrer Guide wahrend der gesamten Reise',
    ],
    faq: [
      {
        q: 'Kann diese 4 tagige Tour in Colombo starten oder nur am Flughafen?',
        a: 'Beides ist moglich. Wir holen Sie am Flughafen Bandaranaike oder in jedem Hotel in Colombo bzw. an der Westkuste ab und bringen Sie am 4. Tag zum Flughafen oder an Ihren gewunschten Zielort zuruck.',
      },
      {
        q: 'Ist der Yala Nationalpark im Reiseverlauf immer geoffnet?',
        a: 'Yala schliesst jedes Jahr kurzzeitig fur Wartungsarbeiten, meist im September. Fallt Ihre Reise in diesen Zeitraum, weichen wir ohne Anderung des Reiseablaufs auf Udawalawe oder einen anderen Park mit guten Elefantensichtungen aus.',
      },
      {
        q: 'Sind Hotels und Safari Jeep Gebuhren im Preis enthalten?',
        a: 'Die Halbpension Unterkunft und Ihr privates Fahrzeug mit Fahrer sind inklusive. Eintrittsgebuhren fur Nationalparks, die Jeep Miete und Aktivitatsgebuhren werden vor Ort bezahlt, sodass Sie optionale Extras flexibel wahlen konnen.',
      },
    ],
    days: [
      {
        title: 'Flughafen / Hotel  Kulturerlebnis in Kandy',
        activities: [
          {
            type: 'Tiererlebnis',
            title: 'Pinnawala Elefantenwaisenhaus',
            description:
              'Besuchen Sie das beruhmte Pinnawala Elefantenwaisenhaus, in dem gerettete Elefanten versorgt und geschutzt werden. Beobachten Sie die Tiere beim Baden im Fluss und erfahren Sie mehr uber die Schutzprojekte.',
          },
          {
            type: 'Kulturbesuch',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Erkunden Sie den Zahntempel, einen der heiligsten buddhistischen Tempel der Welt, in dem die heilige Zahnreliquie Buddhas aufbewahrt wird.',
          },
          {
            type: 'Kulturerlebnis',
            title: 'Kandyanische Tanzshow',
            description:
              'Erleben Sie eine traditionelle kandyanische Tanzvorfuhrung mit Feuerlauf, Trommelmusik und farbenprachtigen Kostumen.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Aussichtspunkt Kandy',
            description:
              'Halten Sie am Aussichtspunkt Kandy fur einen Panoramablick auf die Stadt, den See und die umliegenden Hugel.',
          },
          {
            type: 'Unterkunft',
            title: 'Ubernachtung im Topez Hotel in Kandy',
            description: 'Ubernachtung in einem komfortablen Sterne Hotel in Kandy auf Halbpension.',
            extra: ['Abendessen inklusive', 'Privatzimmer'],
          },
        ],
      },
      {
        title: 'Kandy  Reise ins Hugelland von Ella',
        activities: [
          {
            type: 'Natur',
            title: 'Royal Botanic Gardens Peradeniya',
            description:
              'Spazieren Sie durch einen der schonsten botanischen Garten Asiens mit Orchideen, Palmen, Bambus und tropischen Pflanzen.',
          },
          {
            type: 'Tee Erlebnis',
            title: 'Besuch der Glenloch Teefabrik',
            description:
              'Erfahren Sie, wie der weltberuhmte Ceylon Tee hergestellt wird, und geniessen Sie eine frische Tasse mit Blick auf die Teeplantagen.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Nine Arch Bridge',
            description:
              'Besuchen Sie die beruhmte Nine Arch Bridge aus der Kolonialzeit, umgeben von uppigem Grun und sanften Hugeln.',
          },
          {
            type: 'Wanderung',
            title: 'Little Adam’s Peak',
            description:
              'Geniessen Sie eine leichte Wanderung mit Panoramablick auf den Ella Gap und die umliegende Berglandschaft.',
          },
          {
            type: 'Unterkunft',
            title: 'Ubernachtung im Oak Ray Ella Gap Hotel oder ahnlich  Halbpension in Ella',
            description: 'Ubernachtung in einem malerischen Hotel im Hugelland auf Halbpension.',
            extra: ['Fruhstuck & Abendessen inklusive', 'Privatzimmer'],
          },
        ],
      },
      {
        title: 'Ella  Wildlife Safari in Yala',
        activities: [
          {
            type: 'Wasserfall',
            title: 'Ravana Wasserfalle',
            description:
              'Halten Sie an den Ravana Wasserfallen, einem der malerischsten Wasserfalle Sri Lankas an der Strasse zwischen Ella und Wellawaya.',
          },
          {
            type: 'Historische Statte',
            title: 'Buduruwagala Tempel',
            description:
              'Besuchen Sie diesen antiken Felsentempel mit beeindruckenden, in den Fels gemeisselten Buddha Statuen.',
          },
          {
            type: 'Safari',
            title: 'Safari im Yala Nationalpark',
            description:
              'Erleben Sie eine spannende Jeep Safari im Yala Nationalpark, Heimat von Leoparden, Elefanten, Krokodilen und einer vielfaltigen Tierwelt.',
          },
          {
            type: 'Unterkunft',
            title: 'Ubernachtung in Yala',
            description: 'Ubernachtung in einem komfortablen Hotel im Safari Gebiet mit Halbpension.',
            extra: ['Fruhstuck & Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Yala  Galle  Bentota  Flughafen',
        activities: [
          {
            type: 'Strandbesuch',
            title: 'Mirissa Beach',
            description: 'Entspannen Sie am Mirissa Beach oder geniessen Sie optional Whale Watching und die Kustenlandschaft.',
          },
          {
            type: 'Kulturerbe',
            title: 'Galle Dutch Fort',
            description: 'Erkunden Sie das UNESCO gelistete Galle Fort mit kolonialer Architektur, Festungsmauern und Meerblick.',
          },
          {
            type: 'Bootssafari',
            title: 'Bootssafari auf dem Madu Fluss',
            description:
              'Geniessen Sie eine entspannte Bootsfahrt durch Mangroven und kleine Inseln in einem der artenreichsten Feuchtgebiete Sri Lankas.',
          },
        ],
      },
    ],
  },
  fr: {
    title: 'Circuit Prive de 4 Jours au Sri Lanka | Kandy, Ella, Yala & Cote Sud',
    description:
      'Decouvrez le Sri Lanka en 4 jours inoubliables : patrimoine culturel de Kandy, hauts plateaux d’Ella, safari palpitant a Yala et la magnifique cote sud.',
    duration: '4 jours',
    persons: '1 a 20 personnes',
    tourType: 'Circuit',
    overview:
      'Decouvrez la combinaison parfaite entre culture, paysages, faune et charme cotier du Sri Lanka lors de ce circuit prive de 4 jours. Visitez la ville sacree de Kandy, explorez les hauts plateaux d’Ella a couper le souffle, profitez d’un safari palpitant dans le parc national de Yala et decouvrez le fort historique de Galle avant votre transfert a l’aeroport.',
    includes: PACKAGE_INCLUDES.fr,
    excludes: PACKAGE_EXCLUDES.fr,
    seoIntro:
      'Quatre jours, c’est la duree ideale pour decouvrir les incontournables du Sri Lanka sans s’engager sur une semaine entiere. Ce circuit prive relie la ville sacree au bord du lac de Kandy, les cretes brumeuses d’Ella et le pont Nine Arches, un safari en jeep dans le parc national de Yala a la recherche d’elephants et de leopards, ainsi que le charme colonial du fort de Galle sur la cote sud tout cela avec un chauffeur anglophone et un kilometrage illimite. Sundown Tours rythme les trajets pour que vous puissiez profiter des jardins de Peradeniya et des points de vue sur les plantations de the plutot que de vous precipiter d’un site a l’autre. Les hotels sont reserves en demi pension dans des etablissements de standing ; les frais d’entree et les dejeuners restent flexibles afin que vous choisissiez vous meme les temples, parcs et restaurants qui vous tiennent le plus a coeur. Ideal comme sejour autonome ou comme complement avant une prolongation en bord de mer.',
    highlights: [
      'Temple de la Dent Sacree a Kandy, spectacle de danse traditionnelle et points de vue sur le lac',
      'Nine Arch Bridge a Ella, visite d’une fabrique de the et routes panoramiques dans les hauts plateaux',
      'Safari en 4x4 dans le parc national de Yala a la recherche d’elephants sauvages et de leopards',
      'Balade dans le fort de Galle classe UNESCO et safari en bateau dans les mangroves de la riviere Madu',
      'Vehicule prive climatise avec chauffeur guide professionnel pendant tout le circuit',
    ],
    faq: [
      {
        q: 'Ce circuit de 4 jours peut il debuter a Colombo ou uniquement a l’aeroport ?',
        a: 'Les deux sont possibles. Nous pouvons vous prendre en charge a l’aeroport international de Bandaranaike ou dans tout hotel de Colombo/cote ouest, et vous deposer a l’aeroport ou au point de sortie de votre choix le jour 4.',
      },
      {
        q: 'Le parc national de Yala est il toujours ouvert sur cet itineraire ?',
        a: 'Yala ferme brievement chaque annee pour entretien, generalement en septembre. Si vos dates coincident, nous le remplacons par Udawalawe ou un autre parc offrant de belles observations d’elephants, sans modifier la structure du circuit.',
      },
      {
        q: 'Le prix inclut il les hotels et les frais de jeep pour le safari ?',
        a: 'L’hebergement en demi pension et votre vehicule prive avec chauffeur sont inclus. Les billets d’entree des parcs nationaux, la location du jeep et les frais d’activites sont payes sur place, ce qui vous permet de choisir vos extras optionnels.',
      },
    ],
    days: [
      {
        title: 'Aeroport / Hotel  Decouverte culturelle de Kandy',
        activities: [
          {
            type: 'Rencontre animaliere',
            title: 'Orphelinat des elephants de Pinnawala',
            description:
              'Visitez le celebre orphelinat des elephants de Pinnawala, ou des elephants secourus sont soignes et proteges. Observez les se baigner dans la riviere et decouvrez les actions de preservation menees sur place.',
          },
          {
            type: 'Visite culturelle',
            title: 'Temple de la Dent Sacree',
            description:
              'Explorez le Sri Dalada Maligawa, l’un des temples bouddhistes les plus sacres au monde, qui abrite la relique de la dent sacree du Bouddha.',
          },
          {
            type: 'Experience culturelle',
            title: 'Spectacle de danse traditionnelle de Kandy',
            description:
              'Assistez a un spectacle de danse kandyenne traditionnelle melant marche sur le feu, percussions et costumes chatoyants.',
          },
          {
            type: 'Point de vue',
            title: 'Point de vue de Kandy',
            description: 'Arret au point de vue de Kandy pour une vue panoramique sur la ville, le lac et les collines environnantes.',
          },
          {
            type: 'Hebergement',
            title: 'Nuit au Topez Hotel a Kandy',
            description: 'Nuit dans un hotel confortable de standing a Kandy, en demi pension.',
            extra: ['Diner inclus', 'Chambre privee'],
          },
        ],
      },
      {
        title: 'Kandy  Voyage vers les hauts plateaux d’Ella',
        activities: [
          {
            type: 'Nature',
            title: 'Jardins botaniques royaux de Peradeniya',
            description:
              'Promenez vous dans l’un des plus beaux jardins botaniques d’Asie, avec ses orchidees, palmiers, bambous et plantes tropicales.',
          },
          {
            type: 'Decouverte du the',
            title: 'Visite de la fabrique de the de Glenloch',
            description:
              'Decouvrez comment est produit le celebre the de Ceylan et degustez une tasse fraiche avec vue sur les plantations.',
          },
          {
            type: 'Visite panoramique',
            title: 'Nine Arch Bridge',
            description:
              'Decouvrez l’emblematique pont Nine Arch datant de l’epoque coloniale, entoure d’une vegetation luxuriante et de collines verdoyantes.',
          },
          {
            type: 'Randonnee',
            title: 'Little Adam’s Peak',
            description: 'Profitez d’une randonnee facile offrant une vue panoramique sur l’Ella Gap et les montagnes environnantes.',
          },
          {
            type: 'Hebergement',
            title: 'Nuit au Oak Ray Ella Gap Hotel ou similaire  demi pension a Ella',
            description: 'Nuit dans un hotel pittoresque des hauts plateaux, en demi pension.',
            extra: ['Petit dejeuner & diner inclus', 'Chambre privee'],
          },
        ],
      },
      {
        title: 'Ella  Safari animalier a Yala',
        activities: [
          {
            type: 'Cascade',
            title: 'Chutes de Ravana',
            description:
              'Arret aux chutes de Ravana, l’une des cascades les plus pittoresques du Sri Lanka, situee sur la route entre Ella et Wellawaya.',
          },
          {
            type: 'Site historique',
            title: 'Temple de Buduruwagala',
            description:
              'Visitez ce complexe de temples rupestres antiques abritant d’impressionnantes statues de Bouddha sculptees dans la roche.',
          },
          {
            type: 'Safari',
            title: 'Safari au parc national de Yala',
            description:
              'Vivez un safari en jeep palpitant dans le parc national de Yala, refuge des leopards, elephants, crocodiles et d’une faune variee.',
          },
          {
            type: 'Hebergement',
            title: 'Nuit a Yala',
            description: 'Nuit dans un hotel confortable proche de la zone de safari, en demi pension.',
            extra: ['Petit dejeuner & diner inclus'],
          },
        ],
      },
      {
        title: 'Yala  Galle  Bentota  Aeroport',
        activities: [
          {
            type: 'Detente a la plage',
            title: 'Plage de Mirissa',
            description: 'Detendez vous sur la plage de Mirissa ou profitez, en option, d’une sortie d’observation des baleines et du panorama cotier.',
          },
          {
            type: 'Patrimoine',
            title: 'Fort hollandais de Galle',
            description: 'Explorez le fort de Galle, classe au patrimoine mondial de l’UNESCO, avec son architecture coloniale, ses remparts et sa vue sur l’ocean.',
          },
          {
            type: 'Safari fluvial',
            title: 'Safari sur la riviere Madu',
            description:
              'Profitez d’une paisible balade en bateau a travers les mangroves et petites iles de l’un des ecosystemes humides les plus riches du Sri Lanka.',
          },
        ],
      },
    ],
  },
  it: {
    title: 'Tour Privato di 4 Giorni in Sri Lanka | Kandy, Ella, Yala e Costa Sud',
    description:
      'Scoprite lo Sri Lanka in 4 giorni indimenticabili tra il patrimonio culturale di Kandy, le colline di Ella, un emozionante safari a Yala e il magnifico litorale meridionale.',
    duration: '4 giorni',
    persons: '1-20 persone',
    tourType: 'Tour',
    overview:
      'Scoprite la combinazione perfetta tra cultura, paesaggi, fauna selvatica e fascino costiero dello Sri Lanka in questo tour privato di 4 giorni. Visitate la citta sacra di Kandy, vivete le splendide colline di Ella, godetevi un emozionante safari nel Parco Nazionale di Yala ed esplorate lo storico Forte di Galle prima del trasferimento in aeroporto.',
    includes: PACKAGE_INCLUDES.it,
    excludes: PACKAGE_EXCLUDES.it,
    seoIntro:
      'Quattro giorni sono la durata ideale per vivere il meglio dello Sri Lanka senza impegnarsi per un’intera settimana. Questo tour privato collega la sacra citta lacustre di Kandy, le colline avvolte nella nebbia di Ella con il ponte Nine Arches, un safari in jeep nel Parco Nazionale di Yala alla ricerca di elefanti e leopardi, e il fascino coloniale del Forte di Galle sulla costa meridionale tutto con un autista di lingua inglese e chilometraggio illimitato. Sundown Tours scandisce i tempi di guida in modo da godersi i Giardini di Peradeniya e i punti panoramici delle piantagioni di te invece di correre da una tappa all’altra. Gli hotel sono prenotati in mezza pensione in strutture di categoria; i biglietti d’ingresso e i pranzi restano flessibili, cosi potete scegliere quali templi, parchi e ristoranti preferite. Ideale come vacanza autonoma o come tappa mirata prima di un’estensione al mare.',
    highlights: [
      'Tempio della Sacra Reliquia del Dente a Kandy, spettacolo di danza tradizionale e punti panoramici sul lago',
      'Nine Arch Bridge a Ella, visita a una fabbrica di te e percorsi panoramici tra le colline',
      'Safari in 4x4 nel Parco Nazionale di Yala alla ricerca di elefanti selvatici e leopardi',
      'Passeggiata nel Forte di Galle, patrimonio UNESCO, e safari in barca tra le mangrovie del fiume Madu',
      'Veicolo privato climatizzato con autista guida professionale per tutta la durata del tour',
    ],
    faq: [
      {
        q: 'Questo tour di 4 giorni puo partire da Colombo o solo dall’aeroporto?',
        a: 'Entrambe le opzioni sono possibili. Possiamo venire a prendervi all’aeroporto di Bandaranaike o in qualsiasi hotel di Colombo/costa occidentale e riportarvi in aeroporto o nel luogo desiderato il quarto giorno.',
      },
      {
        q: 'Il Parco Nazionale di Yala e sempre aperto nell’itinerario?',
        a: 'Yala chiude brevemente ogni anno per manutenzione, di solito a settembre. Se le vostre date coincidono, lo sostituiamo con Udawalawe o un altro parco con buone probabilita di avvistare elefanti, senza modificare la struttura del tour.',
      },
      {
        q: 'Il prezzo include hotel e costi del jeep per il safari?',
        a: 'L’alloggio in mezza pensione e il veicolo privato con autista sono inclusi. I biglietti d’ingresso ai parchi nazionali, il noleggio del jeep e i costi delle attivita si pagano in loco, cosi potete scegliere liberamente gli extra opzionali.',
      },
    ],
    days: [
      {
        title: 'Aeroporto / Hotel  Esperienza Culturale a Kandy',
        activities: [
          {
            type: 'Esperienza con la fauna',
            title: 'Orfanotrofio degli elefanti di Pinnawala',
            description:
              'Visitate il famoso orfanotrofio degli elefanti di Pinnawala, dove gli elefanti salvati vengono curati e protetti. Osservateli mentre si bagnano nel fiume e scoprite i progetti di conservazione.',
          },
          {
            type: 'Visita culturale',
            title: 'Tempio della Sacra Reliquia del Dente',
            description:
              'Esplorate il Sri Dalada Maligawa, uno dei templi buddisti piu sacri al mondo, custode della sacra reliquia del dente del Buddha.',
          },
          {
            type: 'Esperienza culturale',
            title: 'Spettacolo di danza tradizionale di Kandy',
            description: 'Assistete a uno spettacolo di danza kandyana con camminate sul fuoco, percussioni tradizionali e costumi variopinti.',
          },
          {
            type: 'Punto panoramico',
            title: 'Punto panoramico di Kandy',
            description: 'Sosta al punto panoramico di Kandy per una vista a 360° sulla citta, il lago e le colline circostanti.',
          },
          {
            type: 'Alloggio',
            title: 'Pernottamento al Topez Hotel a Kandy',
            description: 'Pernottamento in un confortevole hotel di categoria a Kandy in mezza pensione.',
            extra: ['Cena inclusa', 'Camera privata'],
          },
        ],
      },
      {
        title: 'Kandy  Viaggio verso le Colline di Ella',
        activities: [
          {
            type: 'Natura',
            title: 'Royal Botanic Gardens di Peradeniya',
            description: 'Passeggiate in uno dei piu bei giardini botanici dell’Asia, tra orchidee, palme, bambu e piante tropicali.',
          },
          {
            type: 'Esperienza del te',
            title: 'Visita alla fabbrica di te di Glenloch',
            description: 'Scoprite come viene prodotto il famoso te di Ceylon e gustate una tazza fresca ammirando le piantagioni.',
          },
          {
            type: 'Visita panoramica',
            title: 'Nine Arch Bridge',
            description: 'Visitate l’iconico ponte coloniale Nine Arch, circondato da una vegetazione lussureggiante e dolci colline.',
          },
          {
            type: 'Escursione',
            title: 'Little Adam’s Peak',
            description: 'Godetevi una piacevole escursione con vista panoramica sull’Ella Gap e sulle montagne circostanti.',
          },
          {
            type: 'Alloggio',
            title: 'Pernottamento all’Oak Ray Ella Gap Hotel o similare  mezza pensione a Ella',
            description: 'Pernottamento in un pittoresco hotel tra le colline in mezza pensione.',
            extra: ['Colazione e cena incluse', 'Camera privata'],
          },
        ],
      },
      {
        title: 'Ella  Safari nella Fauna di Yala',
        activities: [
          {
            type: 'Cascata',
            title: 'Cascate di Ravana',
            description: 'Sosta alle cascate di Ravana, una delle piu suggestive dello Sri Lanka, lungo la strada tra Ella e Wellawaya.',
          },
          {
            type: 'Sito storico',
            title: 'Tempio di Buduruwagala',
            description: 'Visitate questo antico complesso rupestre con imponenti statue del Buddha scolpite nella roccia.',
          },
          {
            type: 'Safari',
            title: 'Safari nel Parco Nazionale di Yala',
            description:
              'Vivete un emozionante safari in jeep nel Parco Nazionale di Yala, rifugio di leopardi, elefanti, coccodrilli e numerose altre specie.',
          },
          {
            type: 'Alloggio',
            title: 'Pernottamento a Yala',
            description: 'Pernottamento in un confortevole hotel vicino all’area safari, in mezza pensione.',
            extra: ['Colazione e cena incluse'],
          },
        ],
      },
      {
        title: 'Yala  Galle  Bentota  Aeroporto',
        activities: [
          {
            type: 'Sosta in spiaggia',
            title: 'Spiaggia di Mirissa',
            description: 'Rilassatevi sulla spiaggia di Mirissa o, facoltativamente, godetevi un’uscita per l’osservazione delle balene e il panorama costiero.',
          },
          {
            type: 'Patrimonio storico',
            title: 'Forte Olandese di Galle',
            description: 'Esplorate il Forte di Galle, patrimonio UNESCO, con la sua architettura coloniale, i bastioni e la vista sull’oceano.',
          },
          {
            type: 'Safari in barca',
            title: 'Safari sul fiume Madu',
            description:
              'Godetevi una tranquilla gita in barca tra le mangrovie e le piccole isole di uno degli ecosistemi umidi piu ricchi dello Sri Lanka.',
          },
        ],
      },
    ],
  },
  es: {
    title: 'Circuito Privado de 4 Dias en Sri Lanka | Kandy, Ella, Yala y Costa Sur',
    description:
      'Descubra Sri Lanka en 4 dias inolvidables: el patrimonio cultural de Kandy, las colinas de Ella, una emocionante aventura de safari en Yala y la impresionante costa sur.',
    duration: '4 dias',
    persons: '1-20 personas',
    tourType: 'Circuito',
    overview:
      'Descubra la combinacion perfecta de cultura, paisajes, fauna y encanto costero de Sri Lanka en este circuito privado de 4 dias. Visite la sagrada ciudad de Kandy, disfrute de las impresionantes colinas de Ella, viva un emocionante safari en el Parque Nacional de Yala y explore el historico Fuerte de Galle antes de su traslado al aeropuerto.',
    includes: PACKAGE_INCLUDES.es,
    excludes: PACKAGE_EXCLUDES.es,
    seoIntro:
      'Cuatro dias son la duracion perfecta para disfrutar de lo mejor de Sri Lanka sin comprometerse a una semana completa. Este circuito privado conecta la sagrada ciudad lacustre de Kandy, las colinas neblinosas de Ella con el puente Nine Arches, un safari en jeep por el Parque Nacional de Yala en busca de elefantes y leopardos, y el encanto colonial del Fuerte de Galle en la costa sur, todo ello con un chofer de habla inglesa y kilometraje ilimitado. Sundown Tours organiza los trayectos para que pueda disfrutar de los Jardines de Peradeniya y los miradores de las plantaciones de te sin tener que correr de un punto a otro. Los hoteles se reservan en media pension en establecimientos de categoria; las entradas y los almuerzos se mantienen flexibles para que usted decida que templos, parques y restaurantes le interesan mas. Ideal como escapada independiente o como complemento antes de una ampliacion de playa.',
    highlights: [
      'Templo de la Sagrada Reliquia del Diente en Kandy, espectaculo de danza tradicional y miradores junto al lago',
      'Nine Arch Bridge en Ella, visita a una fabrica de te y trayectos panoramicos por las colinas',
      'Safari en 4x4 por el Parque Nacional de Yala en busca de elefantes salvajes y leopardos',
      'Paseo por el Fuerte de Galle, Patrimonio de la Humanidad, y safari en barco por los manglares del rio Madu',
      'Vehiculo privado con aire acondicionado y chofer guia profesional durante todo el circuito',
    ],
    faq: [
      {
        q: 'Este circuito de 4 dias puede comenzar en Colombo o solo en el aeropuerto?',
        a: 'Ambas opciones son posibles. Podemos recogerle en el aeropuerto internacional de Bandaranaike o en cualquier hotel de Colombo/costa oeste y dejarle en el aeropuerto o en el punto de salida que prefiera el dia 4.',
      },
      {
        q: 'El Parque Nacional de Yala esta siempre abierto en el itinerario?',
        a: 'Yala cierra brevemente cada ano por mantenimiento, normalmente en septiembre. Si sus fechas coinciden, lo sustituimos por Udawalawe u otro parque con buenas probabilidades de avistar elefantes, sin cambiar la estructura del circuito.',
      },
      {
        q: 'El precio incluye los hoteles y las tarifas del jeep del safari?',
        a: 'El alojamiento en media pension y su vehiculo privado con conductor estan incluidos. Las entradas a los parques nacionales, el alquiler del jeep y las tarifas de actividades se pagan in situ, para que pueda elegir libremente sus extras opcionales.',
      },
    ],
    days: [
      {
        title: 'Aeropuerto / Hotel  Experiencia Cultural en Kandy',
        activities: [
          {
            type: 'Experiencia con fauna',
            title: 'Orfanato de Elefantes de Pinnawala',
            description:
              'Visite el famoso orfanato de elefantes de Pinnawala, donde se cuida y protege a elefantes rescatados. Observe a los elefantes banandose en el rio y conozca las labores de conservacion.',
          },
          {
            type: 'Visita cultural',
            title: 'Templo de la Sagrada Reliquia del Diente',
            description:
              'Explore el Sri Dalada Maligawa, uno de los templos budistas mas sagrados del mundo, hogar de la sagrada reliquia del diente de Buda.',
          },
          {
            type: 'Experiencia cultural',
            title: 'Espectaculo de Danza Tradicional de Kandy',
            description: 'Disfrute de una danza kandiana tradicional con caminata sobre fuego, percusion y vistosos trajes.',
          },
          {
            type: 'Mirador',
            title: 'Mirador de Kandy',
            description: 'Parada en el mirador de Kandy para disfrutar de vistas panoramicas de la ciudad, el lago y las colinas circundantes.',
          },
          {
            type: 'Alojamiento',
            title: 'Noche en el Topez Hotel en Kandy',
            description: 'Alojamiento en un comodo hotel de categoria en Kandy en regimen de media pension.',
            extra: ['Cena incluida', 'Habitacion privada'],
          },
        ],
      },
      {
        title: 'Kandy  Viaje a las Colinas de Ella',
        activities: [
          {
            type: 'Naturaleza',
            title: 'Jardines Botanicos Reales de Peradeniya',
            description: 'Paseo por uno de los jardines botanicos mas bellos de Asia, con orquideas, palmeras, bambu y plantas tropicales.',
          },
          {
            type: 'Experiencia del te',
            title: 'Visita a la Fabrica de Te de Glenloch',
            description: 'Descubra como se produce el famoso te de Ceilan y disfrute de una taza recien hecha con vistas a las plantaciones.',
          },
          {
            type: 'Visita panoramica',
            title: 'Nine Arch Bridge',
            description: 'Visite el iconico puente colonial Nine Arch, rodeado de exuberante vegetacion y suaves colinas.',
          },
          {
            type: 'Senderismo',
            title: 'Little Adam’s Peak',
            description: 'Disfrute de una caminata suave con vistas panoramicas del Ella Gap y las montanas circundantes.',
          },
          {
            type: 'Alojamiento',
            title: 'Noche en el Oak Ray Ella Gap Hotel o similar  media pension en Ella',
            description: 'Alojamiento en un pintoresco hotel de montana en regimen de media pension.',
            extra: ['Desayuno y cena incluidos', 'Habitacion privada'],
          },
        ],
      },
      {
        title: 'Ella  Safari de Fauna en Yala',
        activities: [
          {
            type: 'Cascada',
            title: 'Cataratas de Ravana',
            description: 'Parada en las cataratas de Ravana, una de las mas pintorescas de Sri Lanka, en la carretera entre Ella y Wellawaya.',
          },
          {
            type: 'Sitio historico',
            title: 'Templo de Buduruwagala',
            description: 'Visite este antiguo complejo de templos rupestres con impresionantes estatuas de Buda talladas en piedra.',
          },
          {
            type: 'Safari',
            title: 'Safari en el Parque Nacional de Yala',
            description:
              'Viva un emocionante safari en jeep por el Parque Nacional de Yala, hogar de leopardos, elefantes, cocodrilos y una gran diversidad de fauna.',
          },
          {
            type: 'Alojamiento',
            title: 'Noche en Yala',
            description: 'Alojamiento en un comodo hotel en la zona del safari, en regimen de media pension.',
            extra: ['Desayuno y cena incluidos'],
          },
        ],
      },
      {
        title: 'Yala  Galle  Bentota  Aeropuerto',
        activities: [
          {
            type: 'Visita a la playa',
            title: 'Playa de Mirissa',
            description: 'Relajese en la playa de Mirissa o disfrute, de forma opcional, de un avistamiento de ballenas y las vistas costeras.',
          },
          {
            type: 'Patrimonio',
            title: 'Fuerte Holandes de Galle',
            description: 'Explore el Fuerte de Galle, declarado Patrimonio de la Humanidad por la UNESCO, con su arquitectura colonial, murallas y vistas al mar.',
          },
          {
            type: 'Safari en barco',
            title: 'Safari por el Rio Madu',
            description:
              'Disfrute de un tranquilo paseo en barco por los manglares y pequenas islas de uno de los ecosistemas de humedales mas ricos de Sri Lanka.',
          },
        ],
      },
    ],
  },
  pl: {
    title: 'Prywatna Wycieczka 4 Dniowa po Sri Lance | Kandy, Ella, Yala i Wybrzeze Poludniowe',
    description:
      'Odkryj Sri Lanke podczas 4 niezapomnianych dni: dziedzictwo kulturowe Kandy, wyzyny Elli, emocjonujace safari w Yali oraz wspaniale poludniowe wybrzeze.',
    duration: '4 dni',
    persons: '1-20 osob',
    tourType: 'Wycieczka',
    overview:
      'Odkryj idealne polaczenie kultury, malowniczych krajobrazow, dzikiej przyrody i nadmorskiego uroku Sri Lanki podczas tej 4 dniowej prywatnej wycieczki. Odwiedz swieta Kandy, poznaj zapierajace dech w piersiach wyzyny Elli, zobacz emocjonujace safari w Parku Narodowym Yala i zwiedz historyczny Fort Galle przed transferem na lotnisko.',
    includes: PACKAGE_INCLUDES.pl,
    excludes: PACKAGE_EXCLUDES.pl,
    seoIntro:
      'Cztery dni to idealny czas, aby poznac najwazniejsze atrakcje Sri Lanki bez koniecznosci poswiecania calego tygodnia. Ta prywatna wycieczka laczy swieta Kandy nad jeziorem, mgliste wzniesienia Elli z mostem Nine Arches, safari jeepem w Parku Narodowym Yala w poszukiwaniu sloni i lampartow oraz kolonialny urok Fortu Galle na poludniowym wybrzezu  wszystko z anglojezycznym kierowca i nielimitowanym przebiegiem. Sundown Tours rozklada czas jazdy tak, aby moc cieszyc sie Ogrodami Peradeniya i punktami widokowymi wsrod plantacji herbaty, a nie pedzic miedzy punktami programu. Hotele rezerwowane sa w formule half  board w obiektach wyzszej kategorii; oplaty za wstep i lunch pozostaja elastyczne, dzieki czemu sami wybieraja Panstwo, ktore swiatynie, parki i restauracje sa dla Was najwazniejsze. Idealna jako samodzielny wyjazd lub jako uzupelnienie przed wydluzeniem pobytu na plazy.',
    highlights: [
      'Swiatynia Swietej Relikwii Zeba w Kandy, tradycyjny pokaz tanca i punkty widokowe nad jeziorem',
      'Most Nine Arch w Elli, wizyta w fabryce herbaty i widokowe trasy przez wzgorza',
      'Safari 4x4 w Parku Narodowym Yala w poszukiwaniu dzikich sloni i lampartow',
      'Spacer po Forcie Galle wpisanym na liste UNESCO i safari lodzia przez namorzyny rzeki Madu',
      'Prywatny klimatyzowany pojazd z profesjonalnym kierowca przewodnikiem przez cala podroz',
    ],
    faq: [
      {
        q: 'Czy ta 4 dniowa wycieczka moze zaczynac sie w Colombo, czy tylko na lotnisku?',
        a: 'Obie opcje sa mozliwe. Mozemy odebrac Panstwa z lotniska Bandaranaike lub z kazdego hotelu w Colombo/na wybrzezu zachodnim, a 4. dnia odwiezc na lotnisko lub w wybrane miejsce.',
      },
      {
        q: 'Czy Park Narodowy Yala jest zawsze otwarty w trakcie tej trasy?',
        a: 'Yala zamyka sie raz w roku na krotka konserwacje, zwykle we wrzesniu. Jesli Panstwa termin sie z tym pokrywa, zastepujemy go Udawalawe lub innym parkiem z dobrymi szansami na spotkanie sloni, bez zmiany struktury wycieczki.',
      },
      {
        q: 'Czy cena obejmuje hotele i oplaty za jeepa na safari?',
        a: 'Nocleg ze sniadaniem i kolacja oraz prywatny pojazd z kierowca sa wliczone w cene. Bilety wstepu do parkow narodowych, wynajem jeepa i oplaty za atrakcje placi sie na miejscu, dzieki czemu moga Panstwo swobodnie wybierac opcjonalne dodatki.',
      },
    ],
    days: [
      {
        title: 'Lotnisko / Hotel  Doswiadczenie Kulturowe w Kandy',
        activities: [
          {
            type: 'Spotkanie z dzika przyroda',
            title: 'Sierociniec dla Sloni w Pinnawali',
            description:
              'Odwiedz slynny sierociniec dla sloni w Pinnawali, gdzie opiekuja sie uratowanymi sloniami. Zobacz slonie kapiace sie w rzece i poznaj dzialania na rzecz ich ochrony.',
          },
          {
            type: 'Wizyta kulturowa',
            title: 'Swiatynia Swietej Relikwii Zeba',
            description:
              'Zwiedz Sri Dalada Maligawa, jedna z najswietszych buddyjskich swiatyn na swiecie, w ktorej przechowywana jest swieta relikwia zeba Buddy.',
          },
          {
            type: 'Doswiadczenie kulturowe',
            title: 'Pokaz Tradycyjnych Tancow Kandy',
            description: 'Zobacz tradycyjny pokaz tanca kandyjskiego z chodzeniem po ogniu, gra na bebnach i barwnymi kostiumami.',
          },
          {
            type: 'Punkt widokowy',
            title: 'Punkt Widokowy Kandy',
            description: 'Zatrzymaj sie w punkcie widokowym Kandy, aby zobaczyc panorame miasta, jeziora i otaczajacych wzgorz.',
          },
          {
            type: 'Nocleg',
            title: 'Nocleg w Topez Hotel w Kandy',
            description: 'Nocleg w komfortowym hotelu w Kandy ze sniadaniem i kolacja.',
            extra: ['Kolacja wliczona w cene', 'Prywatny pokoj'],
          },
        ],
      },
      {
        title: 'Kandy  Podroz w Wyzyny Elli',
        activities: [
          {
            type: 'Natura',
            title: 'Krolewskie Ogrody Botaniczne w Peradeniya',
            description: 'Przejdz sie po jednym z najpiekniejszych ogrodow botanicznych Azji, z orchideami, palmami, bambusem i tropikalnymi roslinami.',
          },
          {
            type: 'Doswiadczenie z herbata',
            title: 'Wizyta w Fabryce Herbaty Glenloch',
            description: 'Poznaj proces produkcji slynnej herbaty cejlonskiej i napij sie swiezo parzonej herbaty z widokiem na plantacje.',
          },
          {
            type: 'Wizyta widokowa',
            title: 'Most Dziewieciu Lukow',
            description: 'Zobacz slynny kolonialny Most Dziewieciu Lukow otoczony bujna zielenia i lagodnymi wzgorzami.',
          },
          {
            type: 'Piesza wedrowka',
            title: 'Little Adam’s Peak',
            description: 'Zazyj lagodnej wedrowki z panoramicznym widokiem na Ella Gap i otaczajace gory.',
          },
          {
            type: 'Nocleg',
            title: 'Nocleg w Oak Ray Ella Gap Hotel lub podobnym  wyzywienie HB w Elli',
            description: 'Nocleg w malowniczym hotelu w gorach ze sniadaniem i kolacja.',
            extra: ['Sniadanie i kolacja wliczone', 'Prywatny pokoj'],
          },
        ],
      },
      {
        title: 'Ella  Safari w Yali',
        activities: [
          {
            type: 'Wodospad',
            title: 'Wodospad Ravana',
            description: 'Zatrzymaj sie przy wodospadzie Ravana, jednym z najbardziej malowniczych wodospadow Sri Lanki, przy drodze miedzy Ella i Wellawaya.',
          },
          {
            type: 'Miejsce historyczne',
            title: 'Swiatynia Buduruwagala',
            description: 'Odwiedz ten starozytny kompleks skalny z imponujacymi posagami Buddy wykutymi w skale.',
          },
          {
            type: 'Safari',
            title: 'Safari w Parku Narodowym Yala',
            description:
              'Przezyj emocjonujace safari jeepem w Parku Narodowym Yala, domu lampartow, sloni, krokodyli i roznorodnej dzikiej przyrody.',
          },
          {
            type: 'Nocleg',
            title: 'Nocleg w Yali',
            description: 'Nocleg w komfortowym hotelu w okolicy safari ze sniadaniem i kolacja.',
            extra: ['Sniadanie i kolacja wliczone'],
          },
        ],
      },
      {
        title: 'Yala  Galle  Bentota  Lotnisko',
        activities: [
          {
            type: 'Wizyta na plazy',
            title: 'Plaza Mirissa',
            description: 'Odpocznij na plazy Mirissa lub skorzystaj opcjonalnie z wycieczki na obserwacje wielorybow i widokow na wybrzeze.',
          },
          {
            type: 'Dziedzictwo',
            title: 'Holenderski Fort w Galle',
            description: 'Zwiedz wpisany na liste UNESCO Fort Galle z kolonialna architektura, murami obronnymi i widokiem na ocean.',
          },
          {
            type: 'Safari lodzia',
            title: 'Safari na Rzece Madu',
            description:
              'Skorzystaj ze spokojnej przejazdzki lodzia przez namorzyny i male wyspy jednego z najbogatszych ekosystemow wodno blotnych Sri Lanki.',
          },
        ],
      },
    ],
  },
  ru: {
    title: 'Частный тур на 4 дня по Шри Ланке | Канди, Элла, Яла и Южное побережье',
    description:
      'Откройте для себя Шри Ланку за 4 незабываемых дня: культурное наследие Канди, горную страну Эллы, увлекательное сафари в Яле и потрясающее южное побережье.',
    duration: '4 дня',
    persons: '1-20 человек',
    tourType: 'Тур',
    overview:
      'Откройте идеальное сочетание культуры, живописной природы, дикой природы и очарования побережья Шри Ланки в этом частном туре на 4 дня. Посетите священный город Канди, познакомьтесь с захватывающей дух горной страной Эллы, насладитесь увлекательным сафари в национальном парке Яла и исследуйте исторический форт Галле перед трансфером в аэропорт.',
    includes: PACKAGE_INCLUDES.ru,
    excludes: PACKAGE_EXCLUDES.ru,
    seoIntro:
      'Четыре дня оптимальная продолжительность, чтобы увидеть главные достопримечательности Шри Ланки, не тратя на это целую неделю. Этот частный тур соединяет священный город у озера Канди, туманные гряды Эллы с мостом Nine Arches, джип сафари в национальном парке Яла в поисках слонов и леопардов, а также колониальное очарование форта Галле на южном побережье и всё это с англоговорящим шофёром и неограниченным пробегом. Sundown Tours распределяет время в пути так, чтобы вы успели насладиться садами Перадении и видовыми точками чайных плантаций, а не спешили между остановками. Отели бронируются на полупансионе в категорийных заведениях; входные билеты и обеды остаются гибкими, чтобы вы сами выбирали, какие храмы, парки и рестораны для вас важнее. Идеально подходит как самостоятельный отпуск или как дополнение перед продлением отдыха на побережье.',
    highlights: [
      'Храм Зуба Будды в Канди, культурное танцевальное шоу и смотровые площадки у озера',
      'Мост Nine Arch в Элле, посещение чайной фабрики и живописные дороги горной страны',
      'Джип сафари 4x4 в национальном парке Яла в поисках диких слонов и леопардов',
      'Прогулка по форту Галле, объекту ЮНЕСКО, и лодочное сафари по мангровым зарослям реки Маду',
      'Частный автомобиль с кондиционером и профессиональным водителем гидом на протяжении всего тура',
    ],
    faq: [
      {
        q: 'Может ли этот 4 дневный тур начинаться в Коломбо, а не только в аэропорту?',
        a: 'Возможны оба варианта. Мы можем встретить вас в аэропорту Бандаранаике или в любом отеле Коломбо/западного побережья и отвезти в аэропорт или в удобное для вас место в 4 й день.',
      },
      {
        q: 'Всегда ли национальный парк Яла открыт по маршруту?',
        a: 'Яла ежегодно закрывается на короткое время для технического обслуживания, обычно в сентябре. Если ваши даты совпадают, мы без изменения структуры тура заменяем его на Удавалаве или другой парк с хорошими шансами увидеть слонов.',
      },
      {
        q: 'Включены ли в стоимость отели и сборы за джип для сафари?',
        a: 'Проживание на полупансионе и частный автомобиль с водителем включены в стоимость. Входные билеты в национальные парки, аренда джипа и плата за активности оплачиваются на месте, что позволяет гибко выбирать дополнительные опции.',
      },
    ],
    days: [
      {
        title: 'Аэропорт / Отель  Культурный опыт в Канди',
        activities: [
          {
            type: 'Знакомство с животными',
            title: 'Приют для слонов Пиннавела',
            description:
              'Посетите знаменитый приют для слонов Пиннавела, где заботятся о спасённых слонах. Понаблюдайте за купанием слонов в реке и узнайте о программах по их защите.',
          },
          {
            type: 'Культурный визит',
            title: 'Храм Зуба Будды',
            description:
              'Исследуйте Шри Далада Малигава один из самых священных буддийских храмов в мире, где хранится священная реликвия зуба Будды.',
          },
          {
            type: 'Культурная программа',
            title: 'Танцевальное шоу Канди',
            description: 'Насладитесь традиционным канди танцевальным представлением с хождением по огню, барабанным боем и яркими костюмами.',
          },
          {
            type: 'Обзорная точка',
            title: 'Смотровая площадка Канди',
            description: 'Остановка на смотровой площадке Канди с панорамным видом на город, озеро и окружающие холмы.',
          },
          {
            type: 'Проживание',
            title: 'Ночь в отеле Topez в Канди',
            description: 'Ночь в комфортабельном отеле категории в Канди с полупансионом.',
            extra: ['Ужин включён', 'Отдельный номер'],
          },
        ],
      },
      {
        title: 'Канди  Путешествие в горную страну Эллы',
        activities: [
          {
            type: 'Природа',
            title: 'Королевский ботанический сад Перадения',
            description: 'Прогуляйтесь по одному из самых красивых ботанических садов Азии с орхидеями, пальмами, бамбуком и тропическими растениями.',
          },
          {
            type: 'Чайный опыт',
            title: 'Посещение чайной фабрики Гленлок',
            description: 'Узнайте, как производится всемирно известный цейлонский чай, и насладитесь свежей чашкой с видом на чайные плантации.',
          },
          {
            type: 'Обзорная экскурсия',
            title: 'Мост Девяти Арок',
            description: 'Посетите знаменитый мост Девяти Арок колониальной эпохи, окружённый пышной зеленью и мягкими холмами.',
          },
          {
            type: 'Пеший поход',
            title: 'Малый пик Адама',
            description: 'Насладитесь лёгким походом с панорамным видом на ущелье Элла Гэп и окружающие горы.',
          },
          {
            type: 'Проживание',
            title: 'Ночь в отеле Oak Ray Ella Gap или подобном  полупансион в Элле',
            description: 'Ночь в живописном отеле горной страны с полупансионом.',
            extra: ['Завтрак и ужин включены', 'Отдельный номер'],
          },
        ],
      },
      {
        title: 'Элла  Сафари в Яле',
        activities: [
          {
            type: 'Водопад',
            title: 'Водопад Равана',
            description: 'Остановка у водопада Равана одного из самых живописных водопадов Шри Ланки на дороге между Эллой и Веллавайей.',
          },
          {
            type: 'Историческое место',
            title: 'Храм Будурувагала',
            description: 'Посетите этот древний скальный храмовый комплекс с впечатляющими статуями Будды, вырезанными в камне.',
          },
          {
            type: 'Сафари',
            title: 'Сафари в национальном парке Яла',
            description:
              'Отправьтесь в захватывающее джип сафари по национальному парку Яла, дому леопардов, слонов, крокодилов и разнообразной дикой природы.',
          },
          {
            type: 'Проживание',
            title: 'Ночь в Яле',
            description: 'Ночь в комфортабельном отеле рядом с зоной сафари с полупансионом.',
            extra: ['Завтрак и ужин включены'],
          },
        ],
      },
      {
        title: 'Яла  Галле  Бентота  Аэропорт',
        activities: [
          {
            type: 'Пляжный отдых',
            title: 'Пляж Мирисса',
            description: 'Отдохните на пляже Мирисса или, по желанию, отправьтесь на наблюдение за китами и полюбуйтесь побережьем.',
          },
          {
            type: 'Наследие',
            title: 'Голландский форт Галле',
            description: 'Исследуйте форт Галле, включённый в список ЮНЕСКО, с колониальной архитектурой, крепостными стенами и видом на океан.',
          },
          {
            type: 'Лодочное сафари',
            title: 'Сафари на реке Маду',
            description:
              'Насладитесь спокойной прогулкой на лодке через мангровые заросли и небольшие острова одной из самых богатых водно болотных экосистем Шри Ланки.',
          },
        ],
      },
    ],
  },
  nl: {
    title: 'Sri Lanka Privatreise  4 Tage | Kandy, Ella, Yala & Sudkuste',
    description:
      'Erleben Sie Sri Lanka in 4 unvergesslichen Tagen mit dem Kulturerbe von Kandy, dem Hugelland von Ella, einem spannenden Safari Abenteuer in Yala und der traumhaften Sudkuste.',
    duration: '4 Tage',
    persons: '1-20 Personen',
    tourType: 'Privatreise',
    overview:
      'Entdecken Sie auf dieser 4 tagigen Privatreise die perfekte Mischung aus Kultur, Landschaft, Tierwelt und Kustenzauber Sri Lankas. Besuchen Sie die heilige Stadt Kandy, erleben Sie das atemberaubende Hugelland von Ella, geniessen Sie eine spannende Safari im Yala Nationalpark und erkunden Sie das historische Galle Fort vor Ihrem Transfer zum Flughafen.',
    includes: PACKAGE_INCLUDES.nl,
    excludes: PACKAGE_EXCLUDES.nl,
    seoIntro:
      'Vier Tage sind der ideale Zeitrahmen, um die Hohepunkte Sri Lankas zu erleben, ohne sich fur eine ganze Woche zu binden. Diese private Rundreise verbindet die heilige Seenstadt Kandy, die nebligen Hugel von Ella mit der Nine Arches Bridge, eine Jeep Safari im Yala Nationalpark auf der Suche nach Elefanten und Leoparden sowie den kolonialen Charme des Galle Forts an der Sudkuste  alles mit einem englischsprachigen Chauffeur und unbegrenzter Kilometerleistung. Sundown Tours plant die Fahrzeiten so, dass Sie die Peradeniya Garten und die Aussichtspunkte im Teeland geniessen konnen, statt zwischen den Stationen zu hetzen. Die Hotels werden auf Halbpension in Hausern gehobener Kategorie gebucht; Eintrittsgebuhren und Mittagessen bleiben flexibel, sodass Sie selbst entscheiden, welche Tempel, Parks und Restaurants Ihnen am wichtigsten sind. Ideal als eigenstandiger Urlaub oder als gezielte Erganzung vor einer Strandverlangerung.',
    highlights: [
      'Zahntempel in Kandy, kulturelle Tanzshow und Aussichtspunkte am See',
      'Nine Arch Bridge in Ella, Besuch einer Teefabrik und malerische Fahrten durchs Hugelland',
      '4x4 Safari im Yala Nationalpark auf der Suche nach wilden Elefanten und Leoparden',
      'Spaziergang durch das UNESCO Galle Fort und Bootssafari durch die Mangroven des Madu Flusses',
      'Privates klimatisiertes Fahrzeug mit professionellem Fahrer Guide wahrend der gesamten Reise',
    ],
    faq: [
      {
        q: 'Kann diese 4 tagige Tour in Colombo starten oder nur am Flughafen?',
        a: 'Beides ist moglich. Wir holen Sie am Flughafen Bandaranaike oder in jedem Hotel in Colombo bzw. an der Westkuste ab und bringen Sie am 4. Tag zum Flughafen oder an Ihren gewunschten Zielort zuruck.',
      },
      {
        q: 'Ist der Yala Nationalpark im Reiseverlauf immer geoffnet?',
        a: 'Yala schliesst jedes Jahr kurzzeitig fur Wartungsarbeiten, meist im September. Fallt Ihre Reise in diesen Zeitraum, weichen wir ohne Anderung des Reiseablaufs auf Udawalawe oder einen anderen Park mit guten Elefantensichtungen aus.',
      },
      {
        q: 'Sind Hotels und Safari Jeep Gebuhren im Preis enthalten?',
        a: 'Die Halbpension Unterkunft und Ihr privates Fahrzeug mit Fahrer sind inklusive. Eintrittsgebuhren fur Nationalparks, die Jeep Miete und Aktivitatsgebuhren werden vor Ort bezahlt, sodass Sie optionale Extras flexibel wahlen konnen.',
      },
    ],
    days: [
      {
        title: 'Flughafen / Hotel  Kulturerlebnis in Kandy',
        activities: [
          {
            type: 'Tiererlebnis',
            title: 'Pinnawala Elefantenwaisenhaus',
            description:
              'Besuchen Sie das beruhmte Pinnawala Elefantenwaisenhaus, in dem gerettete Elefanten versorgt und geschutzt werden. Beobachten Sie die Tiere beim Baden im Fluss und erfahren Sie mehr uber die Schutzprojekte.',
          },
          {
            type: 'Kulturbesuch',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Erkunden Sie den Zahntempel, einen der heiligsten buddhistischen Tempel der Welt, in dem die heilige Zahnreliquie Buddhas aufbewahrt wird.',
          },
          {
            type: 'Kulturerlebnis',
            title: 'Kandyanische Tanzshow',
            description:
              'Erleben Sie eine traditionelle kandyanische Tanzvorfuhrung mit Feuerlauf, Trommelmusik und farbenprachtigen Kostumen.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Aussichtspunkt Kandy',
            description:
              'Halten Sie am Aussichtspunkt Kandy fur einen Panoramablick auf die Stadt, den See und die umliegenden Hugel.',
          },
          {
            type: 'Unterkunft',
            title: 'Ubernachtung im Topez Hotel in Kandy',
            description: 'Ubernachtung in einem komfortablen Sterne Hotel in Kandy auf Halbpension.',
            extra: ['Abendessen inklusive', 'Privatzimmer'],
          },
        ],
      },
      {
        title: 'Kandy  Reise ins Hugelland von Ella',
        activities: [
          {
            type: 'Natur',
            title: 'Royal Botanic Gardens Peradeniya',
            description:
              'Spazieren Sie durch einen der schonsten botanischen Garten Asiens mit Orchideen, Palmen, Bambus und tropischen Pflanzen.',
          },
          {
            type: 'Tee Erlebnis',
            title: 'Besuch der Glenloch Teefabrik',
            description:
              'Erfahren Sie, wie der weltberuhmte Ceylon Tee hergestellt wird, und geniessen Sie eine frische Tasse mit Blick auf die Teeplantagen.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Nine Arch Bridge',
            description:
              'Besuchen Sie die beruhmte Nine Arch Bridge aus der Kolonialzeit, umgeben von uppigem Grun und sanften Hugeln.',
          },
          {
            type: 'Wanderung',
            title: 'Little Adam’s Peak',
            description:
              'Geniessen Sie eine leichte Wanderung mit Panoramablick auf den Ella Gap und die umliegende Berglandschaft.',
          },
          {
            type: 'Unterkunft',
            title: 'Ubernachtung im Oak Ray Ella Gap Hotel oder ahnlich  Halbpension in Ella',
            description: 'Ubernachtung in einem malerischen Hotel im Hugelland auf Halbpension.',
            extra: ['Fruhstuck & Abendessen inklusive', 'Privatzimmer'],
          },
        ],
      },
      {
        title: 'Ella  Wildlife Safari in Yala',
        activities: [
          {
            type: 'Wasserfall',
            title: 'Ravana Wasserfalle',
            description:
              'Halten Sie an den Ravana Wasserfallen, einem der malerischsten Wasserfalle Sri Lankas an der Strasse zwischen Ella und Wellawaya.',
          },
          {
            type: 'Historische Statte',
            title: 'Buduruwagala Tempel',
            description:
              'Besuchen Sie diesen antiken Felsentempel mit beeindruckenden, in den Fels gemeisselten Buddha Statuen.',
          },
          {
            type: 'Safari',
            title: 'Safari im Yala Nationalpark',
            description:
              'Erleben Sie eine spannende Jeep Safari im Yala Nationalpark, Heimat von Leoparden, Elefanten, Krokodilen und einer vielfaltigen Tierwelt.',
          },
          {
            type: 'Unterkunft',
            title: 'Ubernachtung in Yala',
            description: 'Ubernachtung in einem komfortablen Hotel im Safari Gebiet mit Halbpension.',
            extra: ['Fruhstuck & Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Yala  Galle  Bentota  Flughafen',
        activities: [
          {
            type: 'Strandbesuch',
            title: 'Mirissa Beach',
            description: 'Entspannen Sie am Mirissa Beach oder geniessen Sie optional Whale Watching und die Kustenlandschaft.',
          },
          {
            type: 'Kulturerbe',
            title: 'Galle Dutch Fort',
            description: 'Erkunden Sie das UNESCO gelistete Galle Fort mit kolonialer Architektur, Festungsmauern und Meerblick.',
          },
          {
            type: 'Bootssafari',
            title: 'Bootssafari auf dem Madu Fluss',
            description:
              'Geniessen Sie eine entspannte Bootsfahrt durch Mangroven und kleine Inseln in einem der artenreichsten Feuchtgebiete Sri Lankas.',
          },
        ],
      },
    ],
  }
};
