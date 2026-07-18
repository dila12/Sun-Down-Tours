import type { TourContent } from './localize';

/**
 * 4-day Sri Lanka round tour (id: tour4).
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
      'Discover Sri Lanka’s perfect combination of culture, scenic beauty, wildlife and coastal charm in this 4-day private tour. Visit the sacred city of Kandy, experience the breathtaking hill country of Ella, enjoy a thrilling safari in Yala National Park and explore the historic Galle Fort before your airport drop.',
    tourType: 'Round Tour',
    itinerary: [
      {
        day: 1,
        title: 'Airport / Hotel – Kandy Cultural Experience',
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
            description: 'Stay overnight in a comfortable star-class hotel in Kandy on a Half Board basis.',
            extra: ['Dinner Included', 'Private Room'],
          },
        ],
      },
      {
        day: 2,
        title: 'Kandy – Ella Hill Country Journey',
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
              'Discover how world-famous Ceylon tea is produced and enjoy a fresh cup while overlooking scenic tea plantations.',
            image: 'assets/img/5daysTours/17.jpg',
          },
          {
            type: 'Scenic Visit',
            title: { title: 'Nine Arch Bridge', icon: 'fa-bridge', color: '#A9A9A9' },
            description: 'Visit the iconic colonial-era Nine Arch Bridge surrounded by lush greenery and rolling hills.',
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
            description: 'Overnight stay in a scenic hill country hotel on Half Board basis.',
            extra: ['Breakfast & Dinner Included', 'Private Room'],
          },
        ],
      },
      {
        day: 3,
        title: 'Ella – Yala Wildlife Safari',
        activities: [
          {
            type: 'Waterfall',
            title: { title: 'Ravana Falls', icon: 'fa-water', color: '#3498db' },
            description:
              'Stop at Ravana Falls, one of Sri Lanka’s most picturesque waterfalls located along the Ella–Wellawaya road.',
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
            description: 'Overnight stay in a comfortable safari-area hotel with Half Board.',
            extra: ['Breakfast & Dinner Included'],
          },
        ],
      },
      {
        day: 4,
        title: 'Yala – Galle – Bentota – Airport',
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
            description: 'Explore the UNESCO-listed Galle Fort with colonial architecture, ramparts and ocean views.',
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
    includes: [
      'Air-Conditioned Private Vehicle',
      'English Speaking Professional Driver',
      'Half Board Accommodation in carefully selected 3.5-Star or 4-Star hotels depending on availability',
      'Airport Pickup & Drop Off',
      'Fuel & Parking Fees',
    ],
    excludes: ['Entrance Fees', 'Lunch & Drinks', 'Personal Expenses'],
    seoIntro:
      'Four days is the sweet spot when you want Sri Lanka\'s greatest hits without a full-week commitment. This private round tour links the sacred lake city of Kandy, Ella\'s misty ridges and Nine Arches Bridge, a Yala National Park jeep safari for elephants and leopards, and the colonial charm of Galle Fort on the south coast all with one English-speaking chauffeur and unlimited mileage. Sundown Tours paces the driving so you enjoy Peradeniya Gardens and tea country viewpoints rather than rushing between checkpoints. Hotels are arranged on half board in star-class properties; entrance fees and lunches stay flexible so you choose which temples, parks and restaurants matter most. Ideal as a standalone holiday or as a focused add-on before a beach extension.',
    highlights: [
      'Kandy Sacred Tooth Relic Temple, cultural dance show and lake viewpoints',
      'Ella Nine Arch Bridge, tea factory visit and scenic hill-country drives',
      'Yala National Park 4x4 safari for wild elephants and leopard country',
      'Galle Fort UNESCO walk and Madu River mangrove boat safari',
      'Private air-conditioned vehicle with professional driver-guide throughout',
    ],
    faq: [
      {
        q: 'Can this 4-day tour start from Colombo or only the airport?',
        a: 'Both work. We can pick you up at Bandaranaike International Airport or any Colombo/West Coast hotel and drop you at the airport or your preferred exit point on Day 4.',
      },
      {
        q: 'Is Yala National Park always open on the itinerary?',
        a: 'Yala closes briefly for maintenance each year, usually around September. If your dates coincide, we substitute Udawalawe or another park with strong elephant sightings at no change to the tour structure.',
      },
      {
        q: 'Does the price include hotels and safari jeep fees?',
        a: 'Half-board hotel accommodation and your private vehicle with driver are included. National park entrance tickets, safari jeep hire and activity fees are paid locally so you can tailor optional extras.',
      },
    ],
  },
  de: {
    title: 'Sri Lanka Privatreise – 4 Tage | Kandy, Ella, Yala & Südküste',
    description:
      'Erleben Sie Sri Lanka in 4 unvergesslichen Tagen mit dem Kulturerbe von Kandy, dem Hügelland von Ella, einem spannenden Safari-Abenteuer in Yala und der traumhaften Südküste.',
    duration: '4 Tage',
    persons: '1-20 Personen',
    tourType: 'Privatreise',
    overview:
      'Entdecken Sie auf dieser 4-tägigen Privatreise die perfekte Mischung aus Kultur, Landschaft, Tierwelt und Küstenzauber Sri Lankas. Besuchen Sie die heilige Stadt Kandy, erleben Sie das atemberaubende Hügelland von Ella, genießen Sie eine spannende Safari im Yala-Nationalpark und erkunden Sie das historische Galle Fort vor Ihrem Transfer zum Flughafen.',
    includes: [
      'Klimatisiertes Privatfahrzeug',
      'Englischsprachiger professioneller Fahrer',
      'Halbpension in sorgfältig ausgewählten 3,5- oder 4-Sterne-Hotels (je nach Verfügbarkeit)',
      'Abholung & Rückfahrt zum Flughafen',
      'Kraftstoff & Parkgebühren',
    ],
    excludes: ['Eintrittsgebühren', 'Mittagessen & Getränke', 'Persönliche Ausgaben'],
    seoIntro:
      'Vier Tage sind der ideale Zeitrahmen, um die Höhepunkte Sri Lankas zu erleben, ohne sich für eine ganze Woche zu binden. Diese private Rundreise verbindet die heilige Seenstadt Kandy, die nebligen Hügel von Ella mit der Nine Arches Bridge, eine Jeep-Safari im Yala-Nationalpark auf der Suche nach Elefanten und Leoparden sowie den kolonialen Charme des Galle Forts an der Südküste – alles mit einem englischsprachigen Chauffeur und unbegrenzter Kilometerleistung. Sundown Tours plant die Fahrzeiten so, dass Sie die Peradeniya-Gärten und die Aussichtspunkte im Teeland genießen können, statt zwischen den Stationen zu hetzen. Die Hotels werden auf Halbpension in Häusern gehobener Kategorie gebucht; Eintrittsgebühren und Mittagessen bleiben flexibel, sodass Sie selbst entscheiden, welche Tempel, Parks und Restaurants Ihnen am wichtigsten sind. Ideal als eigenständiger Urlaub oder als gezielte Ergänzung vor einer Strandverlängerung.',
    highlights: [
      'Zahntempel in Kandy, kulturelle Tanzshow und Aussichtspunkte am See',
      'Nine Arch Bridge in Ella, Besuch einer Teefabrik und malerische Fahrten durchs Hügelland',
      '4x4-Safari im Yala-Nationalpark auf der Suche nach wilden Elefanten und Leoparden',
      'Spaziergang durch das UNESCO-Galle-Fort und Bootssafari durch die Mangroven des Madu-Flusses',
      'Privates klimatisiertes Fahrzeug mit professionellem Fahrer-Guide während der gesamten Reise',
    ],
    faq: [
      {
        q: 'Kann diese 4-tägige Tour in Colombo starten oder nur am Flughafen?',
        a: 'Beides ist möglich. Wir holen Sie am Flughafen Bandaranaike oder in jedem Hotel in Colombo bzw. an der Westküste ab und bringen Sie am 4. Tag zum Flughafen oder an Ihren gewünschten Zielort zurück.',
      },
      {
        q: 'Ist der Yala-Nationalpark im Reiseverlauf immer geöffnet?',
        a: 'Yala schließt jedes Jahr kurzzeitig für Wartungsarbeiten, meist im September. Fällt Ihre Reise in diesen Zeitraum, weichen wir ohne Änderung des Reiseablaufs auf Udawalawe oder einen anderen Park mit guten Elefantensichtungen aus.',
      },
      {
        q: 'Sind Hotels und Safari-Jeep-Gebühren im Preis enthalten?',
        a: 'Die Halbpension-Unterkunft und Ihr privates Fahrzeug mit Fahrer sind inklusive. Eintrittsgebühren für Nationalparks, die Jeep-Miete und Aktivitätsgebühren werden vor Ort bezahlt, sodass Sie optionale Extras flexibel wählen können.',
      },
    ],
    days: [
      {
        title: 'Flughafen / Hotel – Kulturerlebnis in Kandy',
        activities: [
          {
            type: 'Tiererlebnis',
            title: 'Pinnawala-Elefantenwaisenhaus',
            description:
              'Besuchen Sie das berühmte Pinnawala-Elefantenwaisenhaus, in dem gerettete Elefanten versorgt und geschützt werden. Beobachten Sie die Tiere beim Baden im Fluss und erfahren Sie mehr über die Schutzprojekte.',
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
              'Erleben Sie eine traditionelle kandyanische Tanzvorführung mit Feuerlauf, Trommelmusik und farbenprächtigen Kostümen.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Aussichtspunkt Kandy',
            description:
              'Halten Sie am Aussichtspunkt Kandy für einen Panoramablick auf die Stadt, den See und die umliegenden Hügel.',
          },
          {
            type: 'Unterkunft',
            title: 'Übernachtung im Topez Hotel in Kandy',
            description: 'Übernachtung in einem komfortablen Sterne-Hotel in Kandy auf Halbpension.',
            extra: ['Abendessen inklusive', 'Privatzimmer'],
          },
        ],
      },
      {
        title: 'Kandy – Reise ins Hügelland von Ella',
        activities: [
          {
            type: 'Natur',
            title: 'Royal Botanic Gardens Peradeniya',
            description:
              'Spazieren Sie durch einen der schönsten botanischen Gärten Asiens mit Orchideen, Palmen, Bambus und tropischen Pflanzen.',
          },
          {
            type: 'Tee-Erlebnis',
            title: 'Besuch der Glenloch-Teefabrik',
            description:
              'Erfahren Sie, wie der weltberühmte Ceylon-Tee hergestellt wird, und genießen Sie eine frische Tasse mit Blick auf die Teeplantagen.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Nine Arch Bridge',
            description:
              'Besuchen Sie die berühmte Nine Arch Bridge aus der Kolonialzeit, umgeben von üppigem Grün und sanften Hügeln.',
          },
          {
            type: 'Wanderung',
            title: 'Little Adam’s Peak',
            description:
              'Genießen Sie eine leichte Wanderung mit Panoramablick auf den Ella Gap und die umliegende Berglandschaft.',
          },
          {
            type: 'Unterkunft',
            title: 'Übernachtung im Oak Ray Ella Gap Hotel oder ähnlich – Halbpension in Ella',
            description: 'Übernachtung in einem malerischen Hotel im Hügelland auf Halbpension.',
            extra: ['Frühstück & Abendessen inklusive', 'Privatzimmer'],
          },
        ],
      },
      {
        title: 'Ella – Wildlife-Safari in Yala',
        activities: [
          {
            type: 'Wasserfall',
            title: 'Ravana-Wasserfälle',
            description:
              'Halten Sie an den Ravana-Wasserfällen, einem der malerischsten Wasserfälle Sri Lankas an der Straße zwischen Ella und Wellawaya.',
          },
          {
            type: 'Historische Stätte',
            title: 'Buduruwagala-Tempel',
            description:
              'Besuchen Sie diesen antiken Felsentempel mit beeindruckenden, in den Fels gemeißelten Buddha-Statuen.',
          },
          {
            type: 'Safari',
            title: 'Safari im Yala-Nationalpark',
            description:
              'Erleben Sie eine spannende Jeep-Safari im Yala-Nationalpark, Heimat von Leoparden, Elefanten, Krokodilen und einer vielfältigen Tierwelt.',
          },
          {
            type: 'Unterkunft',
            title: 'Übernachtung in Yala',
            description: 'Übernachtung in einem komfortablen Hotel im Safari-Gebiet mit Halbpension.',
            extra: ['Frühstück & Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Yala – Galle – Bentota – Flughafen',
        activities: [
          {
            type: 'Strandbesuch',
            title: 'Mirissa Beach',
            description: 'Entspannen Sie am Mirissa Beach oder genießen Sie optional Whale Watching und die Küstenlandschaft.',
          },
          {
            type: 'Kulturerbe',
            title: 'Galle Dutch Fort',
            description: 'Erkunden Sie das UNESCO-gelistete Galle Fort mit kolonialer Architektur, Festungsmauern und Meerblick.',
          },
          {
            type: 'Bootssafari',
            title: 'Bootssafari auf dem Madu-Fluss',
            description:
              'Genießen Sie eine entspannte Bootsfahrt durch Mangroven und kleine Inseln in einem der artenreichsten Feuchtgebiete Sri Lankas.',
          },
        ],
      },
    ],
  },
  fr: {
    title: 'Circuit Privé de 4 Jours au Sri Lanka | Kandy, Ella, Yala & Côte Sud',
    description:
      'Découvrez le Sri Lanka en 4 jours inoubliables : patrimoine culturel de Kandy, hauts plateaux d’Ella, safari palpitant à Yala et la magnifique côte sud.',
    duration: '4 jours',
    persons: '1 à 20 personnes',
    tourType: 'Circuit',
    overview:
      'Découvrez la combinaison parfaite entre culture, paysages, faune et charme côtier du Sri Lanka lors de ce circuit privé de 4 jours. Visitez la ville sacrée de Kandy, explorez les hauts plateaux d’Ella à couper le souffle, profitez d’un safari palpitant dans le parc national de Yala et découvrez le fort historique de Galle avant votre transfert à l’aéroport.',
    includes: [
      'Véhicule privé climatisé',
      'Chauffeur professionnel anglophone',
      'Hébergement en demi-pension dans des hôtels 3,5 ou 4 étoiles soigneusement sélectionnés, selon disponibilité',
      'Prise en charge & dépose à l’aéroport',
      'Carburant & frais de parking',
    ],
    excludes: ['Frais d’entrée', 'Déjeuners & boissons', 'Dépenses personnelles'],
    seoIntro:
      'Quatre jours, c’est la durée idéale pour découvrir les incontournables du Sri Lanka sans s’engager sur une semaine entière. Ce circuit privé relie la ville sacrée au bord du lac de Kandy, les crêtes brumeuses d’Ella et le pont Nine Arches, un safari en jeep dans le parc national de Yala à la recherche d’éléphants et de léopards, ainsi que le charme colonial du fort de Galle sur la côte sud tout cela avec un chauffeur anglophone et un kilométrage illimité. Sundown Tours rythme les trajets pour que vous puissiez profiter des jardins de Peradeniya et des points de vue sur les plantations de thé plutôt que de vous précipiter d’un site à l’autre. Les hôtels sont réservés en demi-pension dans des établissements de standing ; les frais d’entrée et les déjeuners restent flexibles afin que vous choisissiez vous-même les temples, parcs et restaurants qui vous tiennent le plus à cœur. Idéal comme séjour autonome ou comme complément avant une prolongation en bord de mer.',
    highlights: [
      'Temple de la Dent Sacrée à Kandy, spectacle de danse traditionnelle et points de vue sur le lac',
      'Nine Arch Bridge à Ella, visite d’une fabrique de thé et routes panoramiques dans les hauts plateaux',
      'Safari en 4x4 dans le parc national de Yala à la recherche d’éléphants sauvages et de léopards',
      'Balade dans le fort de Galle classé UNESCO et safari en bateau dans les mangroves de la rivière Madu',
      'Véhicule privé climatisé avec chauffeur-guide professionnel pendant tout le circuit',
    ],
    faq: [
      {
        q: 'Ce circuit de 4 jours peut-il débuter à Colombo ou uniquement à l’aéroport ?',
        a: 'Les deux sont possibles. Nous pouvons vous prendre en charge à l’aéroport international de Bandaranaike ou dans tout hôtel de Colombo/côte ouest, et vous déposer à l’aéroport ou au point de sortie de votre choix le jour 4.',
      },
      {
        q: 'Le parc national de Yala est-il toujours ouvert sur cet itinéraire ?',
        a: 'Yala ferme brièvement chaque année pour entretien, généralement en septembre. Si vos dates coïncident, nous le remplaçons par Udawalawe ou un autre parc offrant de belles observations d’éléphants, sans modifier la structure du circuit.',
      },
      {
        q: 'Le prix inclut-il les hôtels et les frais de jeep pour le safari ?',
        a: 'L’hébergement en demi-pension et votre véhicule privé avec chauffeur sont inclus. Les billets d’entrée des parcs nationaux, la location du jeep et les frais d’activités sont payés sur place, ce qui vous permet de choisir vos extras optionnels.',
      },
    ],
    days: [
      {
        title: 'Aéroport / Hôtel – Découverte culturelle de Kandy',
        activities: [
          {
            type: 'Rencontre animalière',
            title: 'Orphelinat des éléphants de Pinnawala',
            description:
              'Visitez le célèbre orphelinat des éléphants de Pinnawala, où des éléphants secourus sont soignés et protégés. Observez-les se baigner dans la rivière et découvrez les actions de préservation menées sur place.',
          },
          {
            type: 'Visite culturelle',
            title: 'Temple de la Dent Sacrée',
            description:
              'Explorez le Sri Dalada Maligawa, l’un des temples bouddhistes les plus sacrés au monde, qui abrite la relique de la dent sacrée du Bouddha.',
          },
          {
            type: 'Expérience culturelle',
            title: 'Spectacle de danse traditionnelle de Kandy',
            description:
              'Assistez à un spectacle de danse kandyenne traditionnelle mêlant marche sur le feu, percussions et costumes chatoyants.',
          },
          {
            type: 'Point de vue',
            title: 'Point de vue de Kandy',
            description: 'Arrêt au point de vue de Kandy pour une vue panoramique sur la ville, le lac et les collines environnantes.',
          },
          {
            type: 'Hébergement',
            title: 'Nuit au Topez Hotel à Kandy',
            description: 'Nuit dans un hôtel confortable de standing à Kandy, en demi-pension.',
            extra: ['Dîner inclus', 'Chambre privée'],
          },
        ],
      },
      {
        title: 'Kandy – Voyage vers les hauts plateaux d’Ella',
        activities: [
          {
            type: 'Nature',
            title: 'Jardins botaniques royaux de Peradeniya',
            description:
              'Promenez-vous dans l’un des plus beaux jardins botaniques d’Asie, avec ses orchidées, palmiers, bambous et plantes tropicales.',
          },
          {
            type: 'Découverte du thé',
            title: 'Visite de la fabrique de thé de Glenloch',
            description:
              'Découvrez comment est produit le célèbre thé de Ceylan et dégustez une tasse fraîche avec vue sur les plantations.',
          },
          {
            type: 'Visite panoramique',
            title: 'Nine Arch Bridge',
            description:
              'Découvrez l’emblématique pont Nine Arch datant de l’époque coloniale, entouré d’une végétation luxuriante et de collines verdoyantes.',
          },
          {
            type: 'Randonnée',
            title: 'Little Adam’s Peak',
            description: 'Profitez d’une randonnée facile offrant une vue panoramique sur l’Ella Gap et les montagnes environnantes.',
          },
          {
            type: 'Hébergement',
            title: 'Nuit au Oak Ray Ella Gap Hotel ou similaire – demi-pension à Ella',
            description: 'Nuit dans un hôtel pittoresque des hauts plateaux, en demi-pension.',
            extra: ['Petit-déjeuner & dîner inclus', 'Chambre privée'],
          },
        ],
      },
      {
        title: 'Ella – Safari animalier à Yala',
        activities: [
          {
            type: 'Cascade',
            title: 'Chutes de Ravana',
            description:
              'Arrêt aux chutes de Ravana, l’une des cascades les plus pittoresques du Sri Lanka, située sur la route entre Ella et Wellawaya.',
          },
          {
            type: 'Site historique',
            title: 'Temple de Buduruwagala',
            description:
              'Visitez ce complexe de temples rupestres antiques abritant d’impressionnantes statues de Bouddha sculptées dans la roche.',
          },
          {
            type: 'Safari',
            title: 'Safari au parc national de Yala',
            description:
              'Vivez un safari en jeep palpitant dans le parc national de Yala, refuge des léopards, éléphants, crocodiles et d’une faune variée.',
          },
          {
            type: 'Hébergement',
            title: 'Nuit à Yala',
            description: 'Nuit dans un hôtel confortable proche de la zone de safari, en demi-pension.',
            extra: ['Petit-déjeuner & dîner inclus'],
          },
        ],
      },
      {
        title: 'Yala – Galle – Bentota – Aéroport',
        activities: [
          {
            type: 'Détente à la plage',
            title: 'Plage de Mirissa',
            description: 'Détendez-vous sur la plage de Mirissa ou profitez, en option, d’une sortie d’observation des baleines et du panorama côtier.',
          },
          {
            type: 'Patrimoine',
            title: 'Fort hollandais de Galle',
            description: 'Explorez le fort de Galle, classé au patrimoine mondial de l’UNESCO, avec son architecture coloniale, ses remparts et sa vue sur l’océan.',
          },
          {
            type: 'Safari fluvial',
            title: 'Safari sur la rivière Madu',
            description:
              'Profitez d’une paisible balade en bateau à travers les mangroves et petites îles de l’un des écosystèmes humides les plus riches du Sri Lanka.',
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
      'Scoprite la combinazione perfetta tra cultura, paesaggi, fauna selvatica e fascino costiero dello Sri Lanka in questo tour privato di 4 giorni. Visitate la città sacra di Kandy, vivete le splendide colline di Ella, godetevi un emozionante safari nel Parco Nazionale di Yala ed esplorate lo storico Forte di Galle prima del trasferimento in aeroporto.',
    includes: [
      'Veicolo privato con aria condizionata',
      'Autista professionista di lingua inglese',
      'Soggiorno in mezza pensione in hotel da 3,5 o 4 stelle attentamente selezionati, in base alla disponibilità',
      'Trasferimento andata e ritorno dall’aeroporto',
      'Carburante e parcheggi',
    ],
    excludes: ['Biglietti d’ingresso', 'Pranzi e bevande', 'Spese personali'],
    seoIntro:
      'Quattro giorni sono la durata ideale per vivere il meglio dello Sri Lanka senza impegnarsi per un’intera settimana. Questo tour privato collega la sacra città lacustre di Kandy, le colline avvolte nella nebbia di Ella con il ponte Nine Arches, un safari in jeep nel Parco Nazionale di Yala alla ricerca di elefanti e leopardi, e il fascino coloniale del Forte di Galle sulla costa meridionale tutto con un autista di lingua inglese e chilometraggio illimitato. Sundown Tours scandisce i tempi di guida in modo da godersi i Giardini di Peradeniya e i punti panoramici delle piantagioni di tè invece di correre da una tappa all’altra. Gli hotel sono prenotati in mezza pensione in strutture di categoria; i biglietti d’ingresso e i pranzi restano flessibili, così potete scegliere quali templi, parchi e ristoranti preferite. Ideale come vacanza autonoma o come tappa mirata prima di un’estensione al mare.',
    highlights: [
      'Tempio della Sacra Reliquia del Dente a Kandy, spettacolo di danza tradizionale e punti panoramici sul lago',
      'Nine Arch Bridge a Ella, visita a una fabbrica di tè e percorsi panoramici tra le colline',
      'Safari in 4x4 nel Parco Nazionale di Yala alla ricerca di elefanti selvatici e leopardi',
      'Passeggiata nel Forte di Galle, patrimonio UNESCO, e safari in barca tra le mangrovie del fiume Madu',
      'Veicolo privato climatizzato con autista-guida professionale per tutta la durata del tour',
    ],
    faq: [
      {
        q: 'Questo tour di 4 giorni può partire da Colombo o solo dall’aeroporto?',
        a: 'Entrambe le opzioni sono possibili. Possiamo venire a prendervi all’aeroporto di Bandaranaike o in qualsiasi hotel di Colombo/costa occidentale e riportarvi in aeroporto o nel luogo desiderato il quarto giorno.',
      },
      {
        q: 'Il Parco Nazionale di Yala è sempre aperto nell’itinerario?',
        a: 'Yala chiude brevemente ogni anno per manutenzione, di solito a settembre. Se le vostre date coincidono, lo sostituiamo con Udawalawe o un altro parco con buone probabilità di avvistare elefanti, senza modificare la struttura del tour.',
      },
      {
        q: 'Il prezzo include hotel e costi del jeep per il safari?',
        a: 'L’alloggio in mezza pensione e il veicolo privato con autista sono inclusi. I biglietti d’ingresso ai parchi nazionali, il noleggio del jeep e i costi delle attività si pagano in loco, così potete scegliere liberamente gli extra opzionali.',
      },
    ],
    days: [
      {
        title: 'Aeroporto / Hotel – Esperienza Culturale a Kandy',
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
              'Esplorate il Sri Dalada Maligawa, uno dei templi buddisti più sacri al mondo, custode della sacra reliquia del dente del Buddha.',
          },
          {
            type: 'Esperienza culturale',
            title: 'Spettacolo di danza tradizionale di Kandy',
            description: 'Assistete a uno spettacolo di danza kandyana con camminate sul fuoco, percussioni tradizionali e costumi variopinti.',
          },
          {
            type: 'Punto panoramico',
            title: 'Punto panoramico di Kandy',
            description: 'Sosta al punto panoramico di Kandy per una vista a 360° sulla città, il lago e le colline circostanti.',
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
        title: 'Kandy – Viaggio verso le Colline di Ella',
        activities: [
          {
            type: 'Natura',
            title: 'Royal Botanic Gardens di Peradeniya',
            description: 'Passeggiate in uno dei più bei giardini botanici dell’Asia, tra orchidee, palme, bambù e piante tropicali.',
          },
          {
            type: 'Esperienza del tè',
            title: 'Visita alla fabbrica di tè di Glenloch',
            description: 'Scoprite come viene prodotto il famoso tè di Ceylon e gustate una tazza fresca ammirando le piantagioni.',
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
            title: 'Pernottamento all’Oak Ray Ella Gap Hotel o similare – mezza pensione a Ella',
            description: 'Pernottamento in un pittoresco hotel tra le colline in mezza pensione.',
            extra: ['Colazione e cena incluse', 'Camera privata'],
          },
        ],
      },
      {
        title: 'Ella – Safari nella Fauna di Yala',
        activities: [
          {
            type: 'Cascata',
            title: 'Cascate di Ravana',
            description: 'Sosta alle cascate di Ravana, una delle più suggestive dello Sri Lanka, lungo la strada tra Ella e Wellawaya.',
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
        title: 'Yala – Galle – Bentota – Aeroporto',
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
              'Godetevi una tranquilla gita in barca tra le mangrovie e le piccole isole di uno degli ecosistemi umidi più ricchi dello Sri Lanka.',
          },
        ],
      },
    ],
  },
  es: {
    title: 'Circuito Privado de 4 Días en Sri Lanka | Kandy, Ella, Yala y Costa Sur',
    description:
      'Descubra Sri Lanka en 4 días inolvidables: el patrimonio cultural de Kandy, las colinas de Ella, una emocionante aventura de safari en Yala y la impresionante costa sur.',
    duration: '4 días',
    persons: '1-20 personas',
    tourType: 'Circuito',
    overview:
      'Descubra la combinación perfecta de cultura, paisajes, fauna y encanto costero de Sri Lanka en este circuito privado de 4 días. Visite la sagrada ciudad de Kandy, disfrute de las impresionantes colinas de Ella, viva un emocionante safari en el Parque Nacional de Yala y explore el histórico Fuerte de Galle antes de su traslado al aeropuerto.',
    includes: [
      'Vehículo privado con aire acondicionado',
      'Conductor profesional de habla inglesa',
      'Alojamiento en media pensión en hoteles de 3,5 o 4 estrellas cuidadosamente seleccionados, según disponibilidad',
      'Traslado de ida y vuelta al aeropuerto',
      'Combustible y tasas de aparcamiento',
    ],
    excludes: ['Entradas', 'Almuerzos y bebidas', 'Gastos personales'],
    seoIntro:
      'Cuatro días son la duración perfecta para disfrutar de lo mejor de Sri Lanka sin comprometerse a una semana completa. Este circuito privado conecta la sagrada ciudad lacustre de Kandy, las colinas neblinosas de Ella con el puente Nine Arches, un safari en jeep por el Parque Nacional de Yala en busca de elefantes y leopardos, y el encanto colonial del Fuerte de Galle en la costa sur, todo ello con un chófer de habla inglesa y kilometraje ilimitado. Sundown Tours organiza los trayectos para que pueda disfrutar de los Jardines de Peradeniya y los miradores de las plantaciones de té sin tener que correr de un punto a otro. Los hoteles se reservan en media pensión en establecimientos de categoría; las entradas y los almuerzos se mantienen flexibles para que usted decida qué templos, parques y restaurantes le interesan más. Ideal como escapada independiente o como complemento antes de una ampliación de playa.',
    highlights: [
      'Templo de la Sagrada Reliquia del Diente en Kandy, espectáculo de danza tradicional y miradores junto al lago',
      'Nine Arch Bridge en Ella, visita a una fábrica de té y trayectos panorámicos por las colinas',
      'Safari en 4x4 por el Parque Nacional de Yala en busca de elefantes salvajes y leopardos',
      'Paseo por el Fuerte de Galle, Patrimonio de la Humanidad, y safari en barco por los manglares del río Madu',
      'Vehículo privado con aire acondicionado y chófer-guía profesional durante todo el circuito',
    ],
    faq: [
      {
        q: '¿Este circuito de 4 días puede comenzar en Colombo o solo en el aeropuerto?',
        a: 'Ambas opciones son posibles. Podemos recogerle en el aeropuerto internacional de Bandaranaike o en cualquier hotel de Colombo/costa oeste y dejarle en el aeropuerto o en el punto de salida que prefiera el día 4.',
      },
      {
        q: '¿El Parque Nacional de Yala está siempre abierto en el itinerario?',
        a: 'Yala cierra brevemente cada año por mantenimiento, normalmente en septiembre. Si sus fechas coinciden, lo sustituimos por Udawalawe u otro parque con buenas probabilidades de avistar elefantes, sin cambiar la estructura del circuito.',
      },
      {
        q: '¿El precio incluye los hoteles y las tarifas del jeep del safari?',
        a: 'El alojamiento en media pensión y su vehículo privado con conductor están incluidos. Las entradas a los parques nacionales, el alquiler del jeep y las tarifas de actividades se pagan in situ, para que pueda elegir libremente sus extras opcionales.',
      },
    ],
    days: [
      {
        title: 'Aeropuerto / Hotel – Experiencia Cultural en Kandy',
        activities: [
          {
            type: 'Experiencia con fauna',
            title: 'Orfanato de Elefantes de Pinnawala',
            description:
              'Visite el famoso orfanato de elefantes de Pinnawala, donde se cuida y protege a elefantes rescatados. Observe a los elefantes bañándose en el río y conozca las labores de conservación.',
          },
          {
            type: 'Visita cultural',
            title: 'Templo de la Sagrada Reliquia del Diente',
            description:
              'Explore el Sri Dalada Maligawa, uno de los templos budistas más sagrados del mundo, hogar de la sagrada reliquia del diente de Buda.',
          },
          {
            type: 'Experiencia cultural',
            title: 'Espectáculo de Danza Tradicional de Kandy',
            description: 'Disfrute de una danza kandiana tradicional con caminata sobre fuego, percusión y vistosos trajes.',
          },
          {
            type: 'Mirador',
            title: 'Mirador de Kandy',
            description: 'Parada en el mirador de Kandy para disfrutar de vistas panorámicas de la ciudad, el lago y las colinas circundantes.',
          },
          {
            type: 'Alojamiento',
            title: 'Noche en el Topez Hotel en Kandy',
            description: 'Alojamiento en un cómodo hotel de categoría en Kandy en régimen de media pensión.',
            extra: ['Cena incluida', 'Habitación privada'],
          },
        ],
      },
      {
        title: 'Kandy – Viaje a las Colinas de Ella',
        activities: [
          {
            type: 'Naturaleza',
            title: 'Jardines Botánicos Reales de Peradeniya',
            description: 'Paseo por uno de los jardines botánicos más bellos de Asia, con orquídeas, palmeras, bambú y plantas tropicales.',
          },
          {
            type: 'Experiencia del té',
            title: 'Visita a la Fábrica de Té de Glenloch',
            description: 'Descubra cómo se produce el famoso té de Ceilán y disfrute de una taza recién hecha con vistas a las plantaciones.',
          },
          {
            type: 'Visita panorámica',
            title: 'Nine Arch Bridge',
            description: 'Visite el icónico puente colonial Nine Arch, rodeado de exuberante vegetación y suaves colinas.',
          },
          {
            type: 'Senderismo',
            title: 'Little Adam’s Peak',
            description: 'Disfrute de una caminata suave con vistas panorámicas del Ella Gap y las montañas circundantes.',
          },
          {
            type: 'Alojamiento',
            title: 'Noche en el Oak Ray Ella Gap Hotel o similar – media pensión en Ella',
            description: 'Alojamiento en un pintoresco hotel de montaña en régimen de media pensión.',
            extra: ['Desayuno y cena incluidos', 'Habitación privada'],
          },
        ],
      },
      {
        title: 'Ella – Safari de Fauna en Yala',
        activities: [
          {
            type: 'Cascada',
            title: 'Cataratas de Ravana',
            description: 'Parada en las cataratas de Ravana, una de las más pintorescas de Sri Lanka, en la carretera entre Ella y Wellawaya.',
          },
          {
            type: 'Sitio histórico',
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
            description: 'Alojamiento en un cómodo hotel en la zona del safari, en régimen de media pensión.',
            extra: ['Desayuno y cena incluidos'],
          },
        ],
      },
      {
        title: 'Yala – Galle – Bentota – Aeropuerto',
        activities: [
          {
            type: 'Visita a la playa',
            title: 'Playa de Mirissa',
            description: 'Relájese en la playa de Mirissa o disfrute, de forma opcional, de un avistamiento de ballenas y las vistas costeras.',
          },
          {
            type: 'Patrimonio',
            title: 'Fuerte Holandés de Galle',
            description: 'Explore el Fuerte de Galle, declarado Patrimonio de la Humanidad por la UNESCO, con su arquitectura colonial, murallas y vistas al mar.',
          },
          {
            type: 'Safari en barco',
            title: 'Safari por el Río Madu',
            description:
              'Disfrute de un tranquilo paseo en barco por los manglares y pequeñas islas de uno de los ecosistemas de humedales más ricos de Sri Lanka.',
          },
        ],
      },
    ],
  },
  pl: {
    title: 'Prywatna Wycieczka 4-Dniowa po Sri Lance | Kandy, Ella, Yala i Wybrzeże Południowe',
    description:
      'Odkryj Sri Lankę podczas 4 niezapomnianych dni: dziedzictwo kulturowe Kandy, wyżyny Elli, emocjonujące safari w Yali oraz wspaniałe południowe wybrzeże.',
    duration: '4 dni',
    persons: '1-20 osób',
    tourType: 'Wycieczka',
    overview:
      'Odkryj idealne połączenie kultury, malowniczych krajobrazów, dzikiej przyrody i nadmorskiego uroku Sri Lanki podczas tej 4-dniowej prywatnej wycieczki. Odwiedź świętą Kandy, poznaj zapierające dech w piersiach wyżyny Elli, zobacz emocjonujące safari w Parku Narodowym Yala i zwiedź historyczny Fort Galle przed transferem na lotnisko.',
    includes: [
      'Prywatny klimatyzowany pojazd',
      'Profesjonalny kierowca mówiący po angielsku',
      'Nocleg ze śniadaniem i kolacją (HB) w starannie wybranych hotelach 3,5- lub 4-gwiazdkowych, w zależności od dostępności',
      'Transfer z i na lotnisko',
      'Paliwo i opłaty parkingowe',
    ],
    excludes: ['Opłaty za wstęp', 'Lunche i napoje', 'Wydatki osobiste'],
    seoIntro:
      'Cztery dni to idealny czas, aby poznać najważniejsze atrakcje Sri Lanki bez konieczności poświęcania całego tygodnia. Ta prywatna wycieczka łączy świętą Kandy nad jeziorem, mgliste wzniesienia Elli z mostem Nine Arches, safari jeepem w Parku Narodowym Yala w poszukiwaniu słoni i lampartów oraz kolonialny urok Fortu Galle na południowym wybrzeżu – wszystko z anglojęzycznym kierowcą i nielimitowanym przebiegiem. Sundown Tours rozkłada czas jazdy tak, aby móc cieszyć się Ogrodami Peradeniya i punktami widokowymi wśród plantacji herbaty, a nie pędzić między punktami programu. Hotele rezerwowane są w formule half board w obiektach wyższej kategorii; opłaty za wstęp i lunch pozostają elastyczne, dzięki czemu sami wybierają Państwo, które świątynie, parki i restauracje są dla Was najważniejsze. Idealna jako samodzielny wyjazd lub jako uzupełnienie przed wydłużeniem pobytu na plaży.',
    highlights: [
      'Świątynia Świętej Relikwii Zęba w Kandy, tradycyjny pokaz tańca i punkty widokowe nad jeziorem',
      'Most Nine Arch w Elli, wizyta w fabryce herbaty i widokowe trasy przez wzgórza',
      'Safari 4x4 w Parku Narodowym Yala w poszukiwaniu dzikich słoni i lampartów',
      'Spacer po Forcie Galle wpisanym na listę UNESCO i safari łodzią przez namorzyny rzeki Madu',
      'Prywatny klimatyzowany pojazd z profesjonalnym kierowcą-przewodnikiem przez całą podróż',
    ],
    faq: [
      {
        q: 'Czy ta 4-dniowa wycieczka może zaczynać się w Colombo, czy tylko na lotnisku?',
        a: 'Obie opcje są możliwe. Możemy odebrać Państwa z lotniska Bandaranaike lub z każdego hotelu w Colombo/na wybrzeżu zachodnim, a 4. dnia odwieźć na lotnisko lub w wybrane miejsce.',
      },
      {
        q: 'Czy Park Narodowy Yala jest zawsze otwarty w trakcie tej trasy?',
        a: 'Yala zamyka się raz w roku na krótką konserwację, zwykle we wrześniu. Jeśli Państwa termin się z tym pokrywa, zastępujemy go Udawalawe lub innym parkiem z dobrymi szansami na spotkanie słoni, bez zmiany struktury wycieczki.',
      },
      {
        q: 'Czy cena obejmuje hotele i opłaty za jeepa na safari?',
        a: 'Nocleg ze śniadaniem i kolacją oraz prywatny pojazd z kierowcą są wliczone w cenę. Bilety wstępu do parków narodowych, wynajem jeepa i opłaty za atrakcje płaci się na miejscu, dzięki czemu mogą Państwo swobodnie wybierać opcjonalne dodatki.',
      },
    ],
    days: [
      {
        title: 'Lotnisko / Hotel – Doświadczenie Kulturowe w Kandy',
        activities: [
          {
            type: 'Spotkanie z dziką przyrodą',
            title: 'Sierociniec dla Słoni w Pinnawali',
            description:
              'Odwiedź słynny sierociniec dla słoni w Pinnawali, gdzie opiekują się uratowanymi słoniami. Zobacz słonie kąpiące się w rzece i poznaj działania na rzecz ich ochrony.',
          },
          {
            type: 'Wizyta kulturowa',
            title: 'Świątynia Świętej Relikwii Zęba',
            description:
              'Zwiedź Sri Dalada Maligawa, jedną z najświętszych buddyjskich świątyń na świecie, w której przechowywana jest święta relikwia zęba Buddy.',
          },
          {
            type: 'Doświadczenie kulturowe',
            title: 'Pokaz Tradycyjnych Tańców Kandy',
            description: 'Zobacz tradycyjny pokaz tańca kandyjskiego z chodzeniem po ogniu, grą na bębnach i barwnymi kostiumami.',
          },
          {
            type: 'Punkt widokowy',
            title: 'Punkt Widokowy Kandy',
            description: 'Zatrzymaj się w punkcie widokowym Kandy, aby zobaczyć panoramę miasta, jeziora i otaczających wzgórz.',
          },
          {
            type: 'Nocleg',
            title: 'Nocleg w Topez Hotel w Kandy',
            description: 'Nocleg w komfortowym hotelu w Kandy ze śniadaniem i kolacją.',
            extra: ['Kolacja wliczona w cenę', 'Prywatny pokój'],
          },
        ],
      },
      {
        title: 'Kandy – Podróż w Wyżyny Elli',
        activities: [
          {
            type: 'Natura',
            title: 'Królewskie Ogrody Botaniczne w Peradeniya',
            description: 'Przejdź się po jednym z najpiękniejszych ogrodów botanicznych Azji, z orchideami, palmami, bambusem i tropikalnymi roślinami.',
          },
          {
            type: 'Doświadczenie z herbatą',
            title: 'Wizyta w Fabryce Herbaty Glenloch',
            description: 'Poznaj proces produkcji słynnej herbaty cejlońskiej i napij się świeżo parzonej herbaty z widokiem na plantacje.',
          },
          {
            type: 'Wizyta widokowa',
            title: 'Most Dziewięciu Łuków',
            description: 'Zobacz słynny kolonialny Most Dziewięciu Łuków otoczony bujną zielenią i łagodnymi wzgórzami.',
          },
          {
            type: 'Piesza wędrówka',
            title: 'Little Adam’s Peak',
            description: 'Zażyj łagodnej wędrówki z panoramicznym widokiem na Ella Gap i otaczające góry.',
          },
          {
            type: 'Nocleg',
            title: 'Nocleg w Oak Ray Ella Gap Hotel lub podobnym – wyżywienie HB w Elli',
            description: 'Nocleg w malowniczym hotelu w górach ze śniadaniem i kolacją.',
            extra: ['Śniadanie i kolacja wliczone', 'Prywatny pokój'],
          },
        ],
      },
      {
        title: 'Ella – Safari w Yali',
        activities: [
          {
            type: 'Wodospad',
            title: 'Wodospad Ravana',
            description: 'Zatrzymaj się przy wodospadzie Ravana, jednym z najbardziej malowniczych wodospadów Sri Lanki, przy drodze między Ellą i Wellawaya.',
          },
          {
            type: 'Miejsce historyczne',
            title: 'Świątynia Buduruwagala',
            description: 'Odwiedź ten starożytny kompleks skalny z imponującymi posągami Buddy wykutymi w skale.',
          },
          {
            type: 'Safari',
            title: 'Safari w Parku Narodowym Yala',
            description:
              'Przeżyj emocjonujące safari jeepem w Parku Narodowym Yala, domu lampartów, słoni, krokodyli i różnorodnej dzikiej przyrody.',
          },
          {
            type: 'Nocleg',
            title: 'Nocleg w Yali',
            description: 'Nocleg w komfortowym hotelu w okolicy safari ze śniadaniem i kolacją.',
            extra: ['Śniadanie i kolacja wliczone'],
          },
        ],
      },
      {
        title: 'Yala – Galle – Bentota – Lotnisko',
        activities: [
          {
            type: 'Wizyta na plaży',
            title: 'Plaża Mirissa',
            description: 'Odpocznij na plaży Mirissa lub skorzystaj opcjonalnie z wycieczki na obserwację wielorybów i widoków na wybrzeże.',
          },
          {
            type: 'Dziedzictwo',
            title: 'Holenderski Fort w Galle',
            description: 'Zwiedź wpisany na listę UNESCO Fort Galle z kolonialną architekturą, murami obronnymi i widokiem na ocean.',
          },
          {
            type: 'Safari łodzią',
            title: 'Safari na Rzece Madu',
            description:
              'Skorzystaj ze spokojnej przejażdżki łodzią przez namorzyny i małe wyspy jednego z najbogatszych ekosystemów wodno-błotnych Sri Lanki.',
          },
        ],
      },
    ],
  },
  ru: {
    title: 'Частный тур на 4 дня по Шри-Ланке | Канди, Элла, Яла и Южное побережье',
    description:
      'Откройте для себя Шри-Ланку за 4 незабываемых дня: культурное наследие Канди, горную страну Эллы, увлекательное сафари в Яле и потрясающее южное побережье.',
    duration: '4 дня',
    persons: '1-20 человек',
    tourType: 'Тур',
    overview:
      'Откройте идеальное сочетание культуры, живописной природы, дикой природы и очарования побережья Шри-Ланки в этом частном туре на 4 дня. Посетите священный город Канди, познакомьтесь с захватывающей дух горной страной Эллы, насладитесь увлекательным сафари в национальном парке Яла и исследуйте исторический форт Галле перед трансфером в аэропорт.',
    includes: [
      'Кондиционированный частный автомобиль',
      'Профессиональный англоговорящий водитель',
      'Проживание на полупансионе в тщательно отобранных отелях 3,5★ или 4★ в зависимости от наличия мест',
      'Трансфер из/в аэропорт',
      'Топливо и парковочные сборы',
    ],
    excludes: ['Входные билеты', 'Обед и напитки', 'Личные расходы'],
    seoIntro:
      'Четыре дня оптимальная продолжительность, чтобы увидеть главные достопримечательности Шри-Ланки, не тратя на это целую неделю. Этот частный тур соединяет священный город у озера Канди, туманные гряды Эллы с мостом Nine Arches, джип-сафари в национальном парке Яла в поисках слонов и леопардов, а также колониальное очарование форта Галле на южном побережье и всё это с англоговорящим шофёром и неограниченным пробегом. Sundown Tours распределяет время в пути так, чтобы вы успели насладиться садами Перадении и видовыми точками чайных плантаций, а не спешили между остановками. Отели бронируются на полупансионе в категорийных заведениях; входные билеты и обеды остаются гибкими, чтобы вы сами выбирали, какие храмы, парки и рестораны для вас важнее. Идеально подходит как самостоятельный отпуск или как дополнение перед продлением отдыха на побережье.',
    highlights: [
      'Храм Зуба Будды в Канди, культурное танцевальное шоу и смотровые площадки у озера',
      'Мост Nine Arch в Элле, посещение чайной фабрики и живописные дороги горной страны',
      'Джип-сафари 4x4 в национальном парке Яла в поисках диких слонов и леопардов',
      'Прогулка по форту Галле, объекту ЮНЕСКО, и лодочное сафари по мангровым зарослям реки Маду',
      'Частный автомобиль с кондиционером и профессиональным водителем-гидом на протяжении всего тура',
    ],
    faq: [
      {
        q: 'Может ли этот 4-дневный тур начинаться в Коломбо, а не только в аэропорту?',
        a: 'Возможны оба варианта. Мы можем встретить вас в аэропорту Бандаранаике или в любом отеле Коломбо/западного побережья и отвезти в аэропорт или в удобное для вас место в 4-й день.',
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
        title: 'Аэропорт / Отель – Культурный опыт в Канди',
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
            description: 'Насладитесь традиционным канди-танцевальным представлением с хождением по огню, барабанным боем и яркими костюмами.',
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
        title: 'Канди – Путешествие в горную страну Эллы',
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
            description: 'Насладитесь лёгким походом с панорамным видом на ущелье Элла-Гэп и окружающие горы.',
          },
          {
            type: 'Проживание',
            title: 'Ночь в отеле Oak Ray Ella Gap или подобном – полупансион в Элле',
            description: 'Ночь в живописном отеле горной страны с полупансионом.',
            extra: ['Завтрак и ужин включены', 'Отдельный номер'],
          },
        ],
      },
      {
        title: 'Элла – Сафари в Яле',
        activities: [
          {
            type: 'Водопад',
            title: 'Водопад Равана',
            description: 'Остановка у водопада Равана одного из самых живописных водопадов Шри-Ланки на дороге между Эллой и Веллавайей.',
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
              'Отправьтесь в захватывающее джип-сафари по национальному парку Яла, дому леопардов, слонов, крокодилов и разнообразной дикой природы.',
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
        title: 'Яла – Галле – Бентота – Аэропорт',
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
              'Насладитесь спокойной прогулкой на лодке через мангровые заросли и небольшие острова одной из самых богатых водно-болотных экосистем Шри-Ланки.',
          },
        ],
      },
    ],
  },
};
