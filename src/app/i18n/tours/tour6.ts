import type { TourContent } from './localize';

/**
 * 6-day Sri Lanka round tour (id: tour6).
 * English is the full BaseTour; locale overlays are authored separately.
 */
export const TOUR6: TourContent = {
  en: {
    title: '6 Day Sri Lanka Private Tour | Cultural Heritage, Hill Country & Wildlife Safari',
    description:
      'Explore Sri Lanka in 6 unforgettable days with ancient cities, UNESCO heritage sites, scenic tea plantations, thrilling wildlife safaris and relaxing coastal experiences.',
    duration: '6 Days',
    persons: '2-20 Persons',
    filecode: '6-day-sri-lanka-private-tour',
    overview: `Discover the highlights of Sri Lanka in this perfectly balanced 6-day private round tour. 
  Travel through the Cultural Triangle, explore Sigiriya Rock Fortress, experience Kandy’s sacred Temple of the Tooth Relic, journey through the misty tea plantations of Nuwara Eliya, enjoy an exciting Udawalawa National Park safari, and unwind along the beautiful South West Coast. 
  With private transportation, experienced English-speaking driver guide, and comfortable accommodation options, this tour offers the ideal combination of culture, nature, wildlife and relaxation — perfect for couples, families and small groups.`,
    tourType: 'Round Tour',
    itinerary: [
      {
        day: 1,
        title: 'Airport to Sigiriya – Elephants & Safari Adventure',
        activities: [
          {
            type: 'Arrival',
            title: { title: 'Airport Pickup', icon: 'fa-plane', color: '#2c3e50' },
            description:
              'Meet your professional driver guide at Bandaranaike International Airport and begin your private Sri Lanka journey heading towards the Cultural Triangle.',
          },
          {
            type: 'Wildlife Experience',
            title: { title: 'Pinnawala Elephant Orphanage', icon: 'fa-paw', color: '#27ae60' },
            description:
              'Visit Pinnawala Elephant Orphanage, a renowned sanctuary caring for rescued and orphaned elephants. Observe elephants up close and, depending on timing, witness their memorable river bathing session.',
            image: 'assets/img/5daysTours/33.jpg',
          },
          {
            type: 'Safari',
            title: { title: 'Minneriya National Park Safari', icon: 'fa-leaf', color: '#8e44ad' },
            description:
              'Enjoy a thrilling 4x4 jeep safari in Minneriya National Park, famous for “The Gathering” — one of Asia’s largest wild elephant congregations. Spot elephants, deer, buffalo and diverse bird species.',
            image: 'assets/img/5daysTours/24.jpg',
          },
          {
            type: 'Village Experience',
            title: { title: 'Hiriwadunna Village Tour', icon: 'fa-leaf', color: '#27ae60' },
            description: 'Experience authentic rural Sri Lankan village life.',
            image: 'assets/img/5daysTours/34.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Fresco Water Villa – Sigiriya', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Fresco Water Villa (or similar).',
            image: 'assets/img/5daysTours/c.jpg',
            extra: ['Breakfast & Dinner Included', '3.5 Star Hotel'],
          },
        ],
      },
      {
        day: 2,
        title: 'Sigiriya to Kandy – Cultural Heritage',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Sigiriya Rock Fortress', icon: 'fa-mountain', color: '#e74c3c' },
            description:
              'Climb the UNESCO-listed Sigiriya Lion Rock Fortress, a 5th-century royal palace rising dramatically above the jungle plains. Explore ancient frescoes, the Mirror Wall and panoramic summit views.',
            image: 'assets/img/5daysTours/imbkh8kscrihzyrtdllf.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Temple of the Sacred Tooth Relic', icon: 'fa-place-of-worship', color: '#2980b9' },
            description:
              'Visit Sri Dalada Maligawa in Kandy, one of the most sacred Buddhist temples in the world. Witness traditional rituals and admire the temple’s beautiful Kandyan architecture.',
            image: 'assets/img/5daysTours/14.jpg',
          },
          {
            type: 'Cultural Experience',
            title: { title: 'Kandy Cultural Dance Show', icon: 'fa-theater-masks', color: '#e74c3c' },
            description:
              'Enjoy an evening cultural dance performance featuring traditional Kandyan drumming, fire walking and vibrant costumes that showcase Sri Lanka’s rich artistic heritage.',
            image: 'assets/img/5daysTours/fifyrnqt5tvouhpgh6kk.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Hotel Topaz – Kandy', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Hotel Topaz (or similar).',
            image: 'assets/img/5daysTours/25.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 3,
        title: 'Kandy to Nuwara Eliya – Scenic Tea Country',
        activities: [
          {
            type: 'Nature',
            title: { title: 'Royal Botanical Gardens Peradeniya', icon: 'fa-tree', color: '#16a085' },
            description:
              'Explore one of Asia’s finest botanical gardens featuring exotic orchids, towering palm avenues, medicinal plants and beautifully landscaped grounds along the Mahaweli River.',
            image: 'assets/img/5daysTours/26.jpg',
          },
          {
            type: 'Nature',
            title: { title: 'Ramboda Waterfall', icon: 'fa-water', color: '#3498db' },
            description:
              'Stop at Ramboda Falls, one of Sri Lanka’s tallest waterfalls, surrounded by scenic tea estates and cool mountain air.',
            image: 'assets/img/5daysTours/27.jpg',
          },
          {
            type: 'Tea Experience',
            title: { title: 'Tea Factory & Plantation Visit', icon: 'fa-mug-hot', color: '#8B4513' },
            description:
              'Discover how world-famous Ceylon tea is produced from leaf to cup. Walk through lush tea plantations and enjoy a fresh tea tasting session in Sri Lanka’s hill country.',
            image: 'assets/img/5daysTours/28.png',
          },
          {
            type: 'Accommodation',
            title: { title: 'Ramboda Falls Hotel', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Ramboda Falls Hotel (or similar).',
            image: 'assets/img/5daysTours/gn4ipm14don7nlmrz52v.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 4,
        title: 'Nuwara Eliya to Yala – Wildlife Encounter',
        activities: [
          {
            type: 'Safari',
            title: { title: 'Yala National Park Safari', icon: 'fa-paw', color: '#27ae60' },
            description:
              'Embark on an exciting safari in Yala National Park, one of the best places in Sri Lanka to see wild elephants in their natural habitat. Spot elephants, crocodiles, deer and birdlife across open grasslands.',
            image: 'assets/img/5daysTours/xj7qybc2bk5bwnxdkubp.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Grand Tamarind Lake (or similar) - HB Basis', icon: 'fa-hotel', color: '#2c3e50' },
            description: 'Accommodation in Grand Tamarind Lake or Similar hotel - HB Basis',
            image: 'assets/img/7daystour/lrqee4ssqh6w9efbewzi.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 5,
        title: 'Yala to South West Coast – River & Conservation',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Coconut Tree Hill (Mirissa)', icon: 'fa-mountain', color: '#228B22' },
            description: 'A picturesque spot in Mirissa with stunning views of lush coconut palms and the Indian Ocean.',
            image: 'assets/img/7daystour/kolleldbe5pt7keqqls3.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Dondra Head Lighthouse', icon: 'fa-landmark', color: '#A9A9A9' },
            description: 'Located at Sri Lanka’s southern tip, offering panoramic ocean views and historic charm.',
            image: 'assets/img/7daystour/gf3kppt2kpvcfd5bgmgh.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Mirissa Beach', icon: 'fa-solid fa-umbrella-beach', color: '#00BFFF' },
            description: 'A tropical paradise known for golden sands, clear waters, and vibrant sunsets.',
            image: 'assets/img/7daystour/goayffj226ceow8zxhey.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Somerset Mirissa Hotel', icon: 'fa-hotel', color: '#2c3e50' },
            description: 'Accommodation in Somerset Mirissa Hotel or Similar hotel - HB Basis',
            image: 'assets/img/5daystour/35.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Breakfast', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 6,
        title: 'Departure from South West Coast – Conservation & Safari',
        activities: [
          {
            type: 'Conservation',
            title: { title: 'Sea Turtle Conservation Project', icon: 'fa-water', color: '#2980b9' },
            description:
              'Visit a sea turtle conservation center along the south coast and learn about marine wildlife protection, hatchery programs and rehabilitation efforts.',
            image: 'assets/img/5daysTours/31.jpg',
          },
          {
            type: 'Boat Safari',
            title: { title: 'Madu River Safari', icon: 'fa-ship', color: '#3498db' },
            description:
              'Enjoy a scenic boat safari through the mangrove forests and small islands of the Madu River. Discover local cinnamon cultivation and diverse wetland wildlife.',
            image: 'assets/img/5daysTours/32.jpg',
          },
        ],
      },
    ],
    includes: [
      'Air-Conditioned Private Vehicle',
      'English Speaking Professional Driver',
      'Pickup & Airport Drop Off',
      'Fuel & Parking Fees',
      'Unlimited Mileage for entire tour',
    ],
    excludes: ['Entrance & Activity Fees', 'Food & Drinks', 'Accommodation (Can be arranged upon request)'],
  },
  de: {
    title: 'Sri Lanka Privatreise – 6 Tage | Kulturerbe, Hügelland & Wildlife-Safari',
    description:
      'Erleben Sie Sri Lanka in 6 unvergesslichen Tagen mit antiken Städten, UNESCO-Welterbestätten, malerischen Teeplantagen, spannenden Wildlife-Safaris und entspannten Küstenerlebnissen.',
    duration: '6 Tage',
    persons: '2-20 Personen',
    tourType: 'Rundreise',
    overview:
      'Erleben Sie die Highlights Sri Lankas auf dieser ausgewogenen 6-tägigen Privatreise. Reisen Sie durch das Kulturdreieck, erkunden Sie die Felsenfestung Sigiriya, besuchen Sie den heiligen Zahntempel in Kandy, fahren Sie durch die nebligen Teeplantagen von Nuwara Eliya, erleben Sie eine spannende Safari im Udawalawe-Nationalpark und entspannen Sie an der wunderschönen Südwestküste. Mit privatem Transport, einem erfahrenen englischsprachigen Fahrer und komfortablen Unterkünften bietet diese Reise die ideale Mischung aus Kultur, Natur, Tierwelt und Erholung – perfekt für Paare, Familien und kleine Gruppen.',
    includes: [
      'Klimatisiertes Privatfahrzeug',
      'Englischsprachiger professioneller Fahrer',
      'Abholung & Rückfahrt zum Flughafen',
      'Kraftstoff & Parkgebühren',
      'Unbegrenzte Kilometer für die gesamte Reise',
    ],
    excludes: ['Eintritts- & Aktivitätsgebühren', 'Speisen & Getränke', 'Unterkunft (auf Anfrage arrangierbar)'],
    days: [
      {
        title: 'Flughafen nach Sigiriya – Elefanten & Safari-Abenteuer',
        activities: [
          {
            type: 'Ankunft',
            title: 'Flughafenabholung',
            description:
              'Treffen Sie Ihren professionellen Fahrer am Flughafen Bandaranaike und beginnen Sie Ihre private Sri-Lanka-Reise in Richtung Kulturdreieck.',
          },
          {
            type: 'Tiererlebnis',
            title: 'Pinnawala-Elefantenwaisenhaus',
            description:
              'Besuchen Sie das Pinnawala-Elefantenwaisenhaus, ein bekanntes Schutzzentrum für gerettete und verwaiste Elefanten. Beobachten Sie die Tiere aus der Nähe und – je nach Zeitpunkt – ihr unvergessliches Bad im Fluss.',
          },
          {
            type: 'Safari',
            title: 'Safari im Minneriya-Nationalpark',
            description:
              'Erleben Sie eine spannende 4x4-Jeep-Safari im Minneriya-Nationalpark, bekannt für „The Gathering" – eine der größten Ansammlungen wilder Elefanten in Asien. Entdecken Sie Elefanten, Hirsche, Büffel und eine vielfältige Vogelwelt.',
          },
          {
            type: 'Dorferlebnis',
            title: 'Dorftour Hiriwadunna',
            description: 'Erleben Sie das authentische ländliche Leben Sri Lankas.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Übernachtung in der Fresco Water Villa (oder ähnlich).',
            extra: ['Frühstück & Abendessen inklusive', '3,5-Sterne-Hotel'],
          },
        ],
      },
      {
        title: 'Sigiriya nach Kandy – Kulturerbe',
        activities: [
          {
            type: 'Geführte Tour',
            title: 'Sigiriya-Felsenfestung',
            description:
              'Besteigen Sie die UNESCO-gelistete Löwenfelsen-Festung Sigiriya, einen im 5. Jahrhundert errichteten Königspalast, der dramatisch über den Dschungelebenen aufragt. Entdecken Sie antike Fresken, die Spiegelwand und den Panoramablick vom Gipfel.',
          },
          {
            type: 'Geführte Tour',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den Zahntempel in Kandy, einen der heiligsten buddhistischen Tempel der Welt. Erleben Sie traditionelle Rituale und bewundern Sie die schöne kandyanische Architektur.',
          },
          {
            type: 'Kulturerlebnis',
            title: 'Kandyanische Tanzshow',
            description:
              'Genießen Sie am Abend eine Kulturshow mit traditioneller kandyanischer Trommelmusik, Feuerlauf und farbenprächtigen Kostümen, die Sri Lankas reiches künstlerisches Erbe zeigen.',
          },
          {
            type: 'Unterkunft',
            title: 'Hotel Topaz – Kandy',
            description: 'Übernachtung im Hotel Topaz (oder ähnlich).',
            extra: ['Frühstück & Abendessen inklusive', '4-Sterne-Hotel'],
          },
        ],
      },
      {
        title: 'Kandy nach Nuwara Eliya – Malerisches Teeland',
        activities: [
          {
            type: 'Natur',
            title: 'Royal Botanical Gardens Peradeniya',
            description:
              'Erkunden Sie einen der schönsten botanischen Gärten Asiens mit exotischen Orchideen, hohen Palmenallee, Heilpflanzen und wunderschön angelegten Anlagen am Mahaweli-Fluss.',
          },
          {
            type: 'Natur',
            title: 'Ramboda-Wasserfall',
            description:
              'Halten Sie an den Ramboda-Wasserfällen, einem der höchsten Wasserfälle Sri Lankas, umgeben von malerischen Teeplantagen und kühler Bergluft.',
          },
          {
            type: 'Tee-Erlebnis',
            title: 'Besuch einer Teefabrik & Plantage',
            description:
              'Erfahren Sie, wie der weltberühmte Ceylon-Tee vom Blatt bis zur Tasse hergestellt wird. Spazieren Sie durch üppige Teeplantagen und genießen Sie eine frische Tee-Verkostung im Hochland Sri Lankas.',
          },
          {
            type: 'Unterkunft',
            title: 'Ramboda Falls Hotel',
            description: 'Übernachtung im Ramboda Falls Hotel (oder ähnlich).',
            extra: ['Frühstück & Abendessen inklusive', '4-Sterne-Hotel'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya nach Yala – Begegnung mit der Tierwelt',
        activities: [
          {
            type: 'Safari',
            title: 'Safari im Yala-Nationalpark',
            description:
              'Erleben Sie eine aufregende Safari im Yala-Nationalpark, einem der besten Orte Sri Lankas, um wilde Elefanten in ihrem natürlichen Lebensraum zu beobachten. Entdecken Sie Elefanten, Krokodile, Hirsche und Vogelwelt in den weiten Graslandschaften.',
          },
          {
            type: 'Unterkunft',
            title: 'Grand Tamarind Lake (oder ähnlich) – Halbpension',
            description: 'Unterkunft im Grand Tamarind Lake oder ähnlichem Hotel – Halbpension.',
            extra: ['4-Sterne-Hotel (Premium)', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Yala zur Südwestküste – Fluss & Naturschutz',
        activities: [
          {
            type: 'Geführte Tour',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Ein malerischer Ort in Mirissa mit atemberaubendem Blick auf hohe Kokospalmen und den Indischen Ozean.',
          },
          {
            type: 'Geführte Tour',
            title: 'Leuchtturm Dondra Head',
            description:
              'Am südlichsten Punkt Sri Lankas gelegen, bietet dieser Leuchtturm einen Panoramablick auf den Ozean und historischen Charme.',
          },
          {
            type: 'Geführte Tour',
            title: 'Mirissa Beach',
            description: 'Ein tropisches Paradies, bekannt für goldenen Sand, klares Wasser und lebendige Sonnenuntergänge.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Unterkunft im Somerset Mirissa Hotel oder ähnlichem Hotel – Halbpension.',
            extra: ['4-Sterne-Hotel (Premium)', 'Frühstück', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Abreise von der Südwestküste – Naturschutz & Safari',
        activities: [
          {
            type: 'Naturschutz',
            title: 'Meeresschildkröten-Schutzprojekt',
            description:
              'Besuchen Sie ein Meeresschildkröten-Schutzzentrum an der Südküste und erfahren Sie mehr über den Schutz der Meeresfauna, Brutprogramme und Rehabilitationsmaßnahmen.',
          },
          {
            type: 'Bootssafari',
            title: 'Bootssafari auf dem Madu-Fluss',
            description:
              'Genießen Sie eine malerische Bootssafari durch die Mangrovenwälder und kleinen Inseln des Madu-Flusses. Entdecken Sie den lokalen Zimtanbau und die vielfältige Feuchtgebietswelt.',
          },
        ],
      },
    ],
  },
  fr: {
    title: 'Circuit Privé de 6 Jours au Sri Lanka | Patrimoine Culturel, Hauts Plateaux & Safari Animalier',
    description:
      'Découvrez le Sri Lanka en 6 jours inoubliables : cités antiques, sites classés à l’UNESCO, plantations de thé pittoresques, safaris palpitants et moments de détente sur la côte.',
    duration: '6 jours',
    persons: '2 à 20 personnes',
    tourType: 'Circuit',
    overview:
      'Découvrez les incontournables du Sri Lanka lors de ce circuit privé de 6 jours parfaitement équilibré. Traversez le Triangle Culturel, explorez la forteresse rocheuse de Sigiriya, découvrez le sacré Temple de la Dent à Kandy, parcourez les plantations de thé brumeuses de Nuwara Eliya, profitez d’un safari palpitant dans le parc national d’Udawalawe et détendez-vous le long de la magnifique côte sud-ouest. Avec un transport privé, un chauffeur-guide anglophone expérimenté et des hébergements confortables, ce circuit offre la combinaison idéale de culture, de nature, de faune et de détente – parfait pour les couples, les familles et les petits groupes.',
    includes: [
      'Véhicule privé climatisé',
      'Chauffeur professionnel anglophone',
      'Prise en charge & dépose à l’aéroport',
      'Carburant & frais de parking',
      'Kilométrage illimité pour tout le circuit',
    ],
    excludes: ['Entrées & frais d’activités', 'Repas & boissons', 'Hébergement (sur demande)'],
    days: [
      {
        title: 'De l’aéroport à Sigiriya – Éléphants & aventure safari',
        activities: [
          {
            type: 'Arrivée',
            title: 'Prise en charge à l’aéroport',
            description:
              'Rencontrez votre chauffeur-guide professionnel à l’aéroport international de Bandaranaike et débutez votre voyage privé au Sri Lanka en direction du Triangle Culturel.',
          },
          {
            type: 'Rencontre animalière',
            title: 'Orphelinat des éléphants de Pinnawala',
            description:
              'Visitez l’orphelinat des éléphants de Pinnawala, un sanctuaire réputé qui prend soin des éléphants secourus et orphelins. Observez-les de près et, selon l’horaire, assistez à leur mémorable baignade dans la rivière.',
          },
          {
            type: 'Safari',
            title: 'Safari au parc national de Minneriya',
            description:
              'Profitez d’un safari en 4x4 palpitant dans le parc national de Minneriya, célèbre pour « Le Rassemblement » — l’un des plus grands regroupements d’éléphants sauvages d’Asie. Observez éléphants, cerfs, buffles et une avifaune variée.',
          },
          {
            type: 'Expérience villageoise',
            title: 'Visite du village de Hiriwadunna',
            description: 'Découvrez la vie rurale authentique du Sri Lanka.',
          },
          {
            type: 'Hébergement',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Nuit à la Fresco Water Villa (ou similaire).',
            extra: ['Petit-déjeuner & dîner inclus', 'Hôtel 3,5 étoiles'],
          },
        ],
      },
      {
        title: 'De Sigiriya à Kandy – Patrimoine culturel',
        activities: [
          {
            type: 'Visite guidée',
            title: 'Forteresse rocheuse de Sigiriya',
            description:
              'Gravissez la forteresse du Rocher du Lion de Sigiriya, classée à l’UNESCO, un palais royal du Ve siècle qui s’élève de façon spectaculaire au-dessus de la jungle. Découvrez les fresques anciennes, le Mur des Miroirs et la vue panoramique du sommet.',
          },
          {
            type: 'Visite guidée',
            title: 'Temple de la Dent Sacrée',
            description:
              'Visitez le Sri Dalada Maligawa à Kandy, l’un des temples bouddhistes les plus sacrés au monde. Assistez aux rituels traditionnels et admirez la belle architecture kandyenne du temple.',
          },
          {
            type: 'Expérience culturelle',
            title: 'Spectacle de danse traditionnelle de Kandy',
            description:
              'Profitez d’un spectacle de danse en soirée mettant en valeur les percussions kandyennes traditionnelles, la marche sur le feu et des costumes chatoyants, reflet du riche héritage artistique du Sri Lanka.',
          },
          {
            type: 'Hébergement',
            title: 'Hotel Topaz – Kandy',
            description: 'Nuit à l’Hotel Topaz (ou similaire).',
            extra: ['Petit-déjeuner & dîner inclus', 'Hôtel 4 étoiles'],
          },
        ],
      },
      {
        title: 'De Kandy à Nuwara Eliya – Pays du thé pittoresque',
        activities: [
          {
            type: 'Nature',
            title: 'Jardins botaniques royaux de Peradeniya',
            description:
              'Explorez l’un des plus beaux jardins botaniques d’Asie, avec ses orchidées exotiques, ses allées de palmiers, ses plantes médicinales et ses jardins magnifiquement aménagés le long de la rivière Mahaweli.',
          },
          {
            type: 'Nature',
            title: 'Cascade de Ramboda',
            description:
              'Arrêt à la cascade de Ramboda, l’une des plus hautes cascades du Sri Lanka, entourée de plantations de thé et d’un air de montagne rafraîchissant.',
          },
          {
            type: 'Découverte du thé',
            title: 'Visite d’une fabrique et plantation de thé',
            description:
              'Découvrez comment le célèbre thé de Ceylan est produit, de la feuille à la tasse. Promenez-vous dans de luxuriantes plantations de thé et savourez une dégustation fraîche dans les hauts plateaux du Sri Lanka.',
          },
          {
            type: 'Hébergement',
            title: 'Ramboda Falls Hotel',
            description: 'Nuit au Ramboda Falls Hotel (ou similaire).',
            extra: ['Petit-déjeuner & dîner inclus', 'Hôtel 4 étoiles'],
          },
        ],
      },
      {
        title: 'De Nuwara Eliya à Yala – Rencontre avec la faune',
        activities: [
          {
            type: 'Safari',
            title: 'Safari au parc national de Yala',
            description:
              'Partez pour un safari palpitant dans le parc national de Yala, l’un des meilleurs endroits du Sri Lanka pour observer les éléphants sauvages dans leur habitat naturel. Repérez éléphants, crocodiles, cerfs et oiseaux dans les vastes plaines herbeuses.',
          },
          {
            type: 'Hébergement',
            title: 'Grand Tamarind Lake (ou similaire) – demi-pension',
            description: 'Hébergement au Grand Tamarind Lake ou hôtel similaire – demi-pension.',
            extra: ['Hôtel 4 étoiles (Premium)', 'Salle de bain privée', 'Dîner'],
          },
        ],
      },
      {
        title: 'De Yala à la côte sud-ouest – Rivière & préservation',
        activities: [
          {
            type: 'Visite guidée',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Un site pittoresque à Mirissa offrant une vue imprenable sur des cocotiers luxuriants et l’océan Indien.',
          },
          {
            type: 'Visite guidée',
            title: 'Phare de Dondra Head',
            description: 'Situé à la pointe sud du Sri Lanka, il offre une vue panoramique sur l’océan et un charme historique.',
          },
          {
            type: 'Visite guidée',
            title: 'Plage de Mirissa',
            description: 'Un paradis tropical réputé pour son sable doré, ses eaux cristallines et ses couchers de soleil éclatants.',
          },
          {
            type: 'Hébergement',
            title: 'Somerset Mirissa Hotel',
            description: 'Hébergement au Somerset Mirissa Hotel ou hôtel similaire – demi-pension.',
            extra: ['Hôtel 4 étoiles (Premium)', 'Petit-déjeuner', 'Salle de bain privée', 'Dîner'],
          },
        ],
      },
      {
        title: 'Départ de la côte sud-ouest – Préservation & safari',
        activities: [
          {
            type: 'Préservation',
            title: 'Projet de conservation des tortues marines',
            description:
              'Visitez un centre de conservation des tortues marines sur la côte sud et découvrez la protection de la faune marine, les programmes d’élevage et les efforts de réhabilitation.',
          },
          {
            type: 'Safari fluvial',
            title: 'Safari sur la rivière Madu',
            description:
              'Profitez d’un safari en bateau pittoresque à travers les mangroves et petites îles de la rivière Madu. Découvrez la culture locale de la cannelle et la faune variée des zones humides.',
          },
        ],
      },
    ],
  },
  it: {
    title: 'Tour Privato di 6 Giorni in Sri Lanka | Patrimonio Culturale, Colline e Safari nella Fauna Selvatica',
    description:
      'Scoprite lo Sri Lanka in 6 giorni indimenticabili tra città antiche, siti UNESCO, pittoresche piantagioni di tè, emozionanti safari nella fauna selvatica ed esperienze costiere rilassanti.',
    duration: '6 giorni',
    persons: '2-20 persone',
    tourType: 'Tour',
    overview:
      'Scoprite le meraviglie dello Sri Lanka in questo tour privato di 6 giorni perfettamente equilibrato. Attraversate il Triangolo Culturale, esplorate la Fortezza Rocciosa di Sigiriya, visitate il sacro Tempio della Reliquia del Dente a Kandy, percorrete le nebbiose piantagioni di tè di Nuwara Eliya, godetevi un emozionante safari nel Parco Nazionale di Udawalawe e rilassatevi lungo la splendida costa sud-occidentale. Con trasporto privato, un autista-guida di lingua inglese esperto e soluzioni di alloggio confortevoli, questo tour offre la combinazione ideale di cultura, natura, fauna selvatica e relax, perfetto per coppie, famiglie e piccoli gruppi.',
    includes: [
      'Veicolo privato con aria condizionata',
      'Autista professionista di lingua inglese',
      'Trasferimento andata e ritorno dall’aeroporto',
      'Carburante e parcheggi',
      'Chilometraggio illimitato per tutto il tour',
    ],
    excludes: ['Biglietti d’ingresso e attività', 'Cibo e bevande', 'Alloggio (organizzabile su richiesta)'],
    days: [
      {
        title: 'Dall’Aeroporto a Sigiriya – Elefanti e Avventura Safari',
        activities: [
          {
            type: 'Arrivo',
            title: 'Trasferimento dall’aeroporto',
            description:
              'Incontrate il vostro autista-guida professionista all’Aeroporto Internazionale di Bandaranaike e iniziate il vostro viaggio privato in Sri Lanka verso il Triangolo Culturale.',
          },
          {
            type: 'Esperienza con la fauna',
            title: 'Orfanotrofio degli elefanti di Pinnawala',
            description:
              'Visitate l’orfanotrofio degli elefanti di Pinnawala, un rinomato santuario che si occupa di elefanti salvati e orfani. Osservateli da vicino e, a seconda dell’orario, assistete al loro memorabile bagno nel fiume.',
          },
          {
            type: 'Safari',
            title: 'Safari nel Parco Nazionale di Minneriya',
            description:
              'Godetevi un emozionante safari in 4x4 nel Parco Nazionale di Minneriya, famoso per “The Gathering” — uno dei più grandi raduni di elefanti selvatici in Asia. Avvistate elefanti, cervi, bufali e una ricca avifauna.',
          },
          {
            type: 'Esperienza di villaggio',
            title: 'Tour del villaggio di Hiriwadunna',
            description: 'Vivete l’autentica vita rurale dello Sri Lanka.',
          },
          {
            type: 'Alloggio',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Pernottamento alla Fresco Water Villa (o similare).',
            extra: ['Colazione e cena incluse', 'Hotel 3,5 stelle'],
          },
        ],
      },
      {
        title: 'Da Sigiriya a Kandy – Patrimonio Culturale',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Fortezza Rocciosa di Sigiriya',
            description:
              'Scalate la Fortezza del Leone di Sigiriya, patrimonio UNESCO, un palazzo reale del V secolo che si innalza spettacolarmente sopra la giungla. Scoprite gli antichi affreschi, il Muro degli Specchi e la vista panoramica dalla cima.',
          },
          {
            type: 'Tour guidato',
            title: 'Tempio della Sacra Reliquia del Dente',
            description:
              'Visitate il Sri Dalada Maligawa a Kandy, uno dei templi buddisti più sacri al mondo. Assistete ai rituali tradizionali e ammirate la splendida architettura kandyana del tempio.',
          },
          {
            type: 'Esperienza culturale',
            title: 'Spettacolo di danza tradizionale di Kandy',
            description:
              'Godetevi uno spettacolo serale con percussioni kandyane tradizionali, camminate sul fuoco e costumi variopinti, che mostrano il ricco patrimonio artistico dello Sri Lanka.',
          },
          {
            type: 'Alloggio',
            title: 'Hotel Topaz – Kandy',
            description: 'Pernottamento all’Hotel Topaz (o similare).',
            extra: ['Colazione e cena incluse', 'Hotel 4 stelle'],
          },
        ],
      },
      {
        title: 'Da Kandy a Nuwara Eliya – Pittoresca Regione del Tè',
        activities: [
          {
            type: 'Natura',
            title: 'Royal Botanical Gardens di Peradeniya',
            description:
              'Esplorate uno dei più bei giardini botanici dell’Asia, con orchidee esotiche, alti viali di palme, piante medicinali e giardini splendidamente disposti lungo il fiume Mahaweli.',
          },
          {
            type: 'Natura',
            title: 'Cascata di Ramboda',
            description:
              'Sosta alla cascata di Ramboda, una delle più alte dello Sri Lanka, circondata da pittoresche piantagioni di tè e dall’aria fresca di montagna.',
          },
          {
            type: 'Esperienza del tè',
            title: 'Visita a una fabbrica e piantagione di tè',
            description:
              'Scoprite come viene prodotto il famoso tè di Ceylon, dalla foglia alla tazza. Passeggiate tra le rigogliose piantagioni di tè e gustate una degustazione fresca sulle colline dello Sri Lanka.',
          },
          {
            type: 'Alloggio',
            title: 'Ramboda Falls Hotel',
            description: 'Pernottamento al Ramboda Falls Hotel (o similare).',
            extra: ['Colazione e cena incluse', 'Hotel 4 stelle'],
          },
        ],
      },
      {
        title: 'Da Nuwara Eliya a Yala – Incontro con la Fauna Selvatica',
        activities: [
          {
            type: 'Safari',
            title: 'Safari nel Parco Nazionale di Yala',
            description:
              'Partite per un emozionante safari nel Parco Nazionale di Yala, uno dei luoghi migliori dello Sri Lanka per osservare gli elefanti selvatici nel loro habitat naturale. Avvistate elefanti, coccodrilli, cervi e uccelli tra le vaste praterie.',
          },
          {
            type: 'Alloggio',
            title: 'Grand Tamarind Lake (o similare) – mezza pensione',
            description: 'Alloggio al Grand Tamarind Lake o hotel simile – mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Bagno privato', 'Cena'],
          },
        ],
      },
      {
        title: 'Da Yala alla Costa Sud-Occidentale – Fiume e Conservazione',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Un luogo pittoresco a Mirissa con una vista straordinaria su alte palme di cocco e l’Oceano Indiano.',
          },
          {
            type: 'Tour guidato',
            title: 'Faro di Dondra Head',
            description: 'Situato all’estremità meridionale dello Sri Lanka, offre una vista panoramica sull’oceano e un fascino storico.',
          },
          {
            type: 'Tour guidato',
            title: 'Spiaggia di Mirissa',
            description: 'Un paradiso tropicale famoso per la sabbia dorata, le acque cristalline e i vivaci tramonti.',
          },
          {
            type: 'Alloggio',
            title: 'Somerset Mirissa Hotel',
            description: 'Alloggio al Somerset Mirissa Hotel o hotel simile – mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Colazione', 'Bagno privato', 'Cena'],
          },
        ],
      },
      {
        title: 'Partenza dalla Costa Sud-Occidentale – Conservazione e Safari',
        activities: [
          {
            type: 'Conservazione',
            title: 'Progetto di Conservazione delle Tartarughe Marine',
            description:
              'Visitate un centro di conservazione delle tartarughe marine sulla costa meridionale e scoprite la protezione della fauna marina, i programmi di incubazione e gli interventi di riabilitazione.',
          },
          {
            type: 'Safari in barca',
            title: 'Safari sul fiume Madu',
            description:
              'Godetevi un pittoresco safari in barca tra le foreste di mangrovie e le piccole isole del fiume Madu. Scoprite la coltivazione locale della cannella e la variegata fauna delle zone umide.',
          },
        ],
      },
    ],
  },
  es: {
    title: 'Circuito Privado de 6 Días en Sri Lanka | Patrimonio Cultural, Colinas y Safari de Fauna Salvaje',
    description:
      'Descubra Sri Lanka en 6 días inolvidables con ciudades antiguas, sitios declarados Patrimonio de la Humanidad, pintorescas plantaciones de té, emocionantes safaris de fauna y relajantes experiencias costeras.',
    duration: '6 días',
    persons: '2-20 personas',
    tourType: 'Circuito',
    overview:
      'Descubra lo más destacado de Sri Lanka en este circuito privado de 6 días perfectamente equilibrado. Recorra el Triángulo Cultural, explore la Fortaleza Rocosa de Sigiriya, visite el sagrado Templo de la Reliquia del Diente en Kandy, atraviese las neblinosas plantaciones de té de Nuwara Eliya, disfrute de un emocionante safari en el Parque Nacional de Udawalawe y relájese en la hermosa costa suroeste. Con transporte privado, un conductor-guía de habla inglesa experimentado y alojamientos cómodos, este circuito ofrece la combinación ideal de cultura, naturaleza, fauna y relax, perfecto para parejas, familias y grupos pequeños.',
    includes: [
      'Vehículo privado con aire acondicionado',
      'Conductor profesional de habla inglesa',
      'Traslado de ida y vuelta al aeropuerto',
      'Combustible y tasas de aparcamiento',
      'Kilometraje ilimitado durante todo el circuito',
    ],
    excludes: ['Entradas y actividades', 'Comidas y bebidas', 'Alojamiento (disponible bajo petición)'],
    days: [
      {
        title: 'Del Aeropuerto a Sigiriya – Elefantes y Aventura de Safari',
        activities: [
          {
            type: 'Llegada',
            title: 'Recogida en el aeropuerto',
            description:
              'Reúnase con su conductor-guía profesional en el Aeropuerto Internacional Bandaranaike e inicie su viaje privado por Sri Lanka rumbo al Triángulo Cultural.',
          },
          {
            type: 'Experiencia con fauna',
            title: 'Orfanato de Elefantes de Pinnawala',
            description:
              'Visite el orfanato de elefantes de Pinnawala, un reconocido santuario que cuida de elefantes rescatados y huérfanos. Observe a los elefantes de cerca y, según el horario, presencie su memorable baño en el río.',
          },
          {
            type: 'Safari',
            title: 'Safari en el Parque Nacional de Minneriya',
            description:
              'Disfrute de un emocionante safari en 4x4 por el Parque Nacional de Minneriya, famoso por “El Encuentro” — una de las mayores congregaciones de elefantes salvajes de Asia. Observe elefantes, ciervos, búfalos y una gran variedad de aves.',
          },
          {
            type: 'Experiencia de aldea',
            title: 'Visita a la aldea de Hiriwadunna',
            description: 'Viva la auténtica vida rural de Sri Lanka.',
          },
          {
            type: 'Alojamiento',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Noche en Fresco Water Villa (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel de 3,5 estrellas'],
          },
        ],
      },
      {
        title: 'De Sigiriya a Kandy – Patrimonio Cultural',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Fortaleza Rocosa de Sigiriya',
            description:
              'Suba a la Fortaleza de la Roca del León de Sigiriya, declarada Patrimonio de la Humanidad, un palacio real del siglo V que se eleva de forma espectacular sobre la selva. Descubra los antiguos frescos, el Muro de los Espejos y las vistas panorámicas de la cima.',
          },
          {
            type: 'Visita guiada',
            title: 'Templo de la Sagrada Reliquia del Diente',
            description:
              'Visite el Sri Dalada Maligawa en Kandy, uno de los templos budistas más sagrados del mundo. Sea testigo de rituales tradicionales y admire la hermosa arquitectura kandiana del templo.',
          },
          {
            type: 'Experiencia cultural',
            title: 'Espectáculo de Danza Tradicional de Kandy',
            description:
              'Disfrute de un espectáculo de danza nocturno con percusión kandiana tradicional, caminata sobre fuego y coloridos trajes que muestran el rico patrimonio artístico de Sri Lanka.',
          },
          {
            type: 'Alojamiento',
            title: 'Hotel Topaz – Kandy',
            description: 'Noche en el Hotel Topaz (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel de 4 estrellas'],
          },
        ],
      },
      {
        title: 'De Kandy a Nuwara Eliya – Pintoresco País del Té',
        activities: [
          {
            type: 'Naturaleza',
            title: 'Jardines Botánicos Reales de Peradeniya',
            description:
              'Explore uno de los jardines botánicos más bellos de Asia, con orquídeas exóticas, avenidas de palmeras, plantas medicinales y jardines maravillosamente diseñados junto al río Mahaweli.',
          },
          {
            type: 'Naturaleza',
            title: 'Cascada de Ramboda',
            description:
              'Parada en las cascadas de Ramboda, una de las más altas de Sri Lanka, rodeada de pintorescas plantaciones de té y aire fresco de montaña.',
          },
          {
            type: 'Experiencia del té',
            title: 'Visita a una fábrica y plantación de té',
            description:
              'Descubra cómo se produce el famoso té de Ceilán, de la hoja a la taza. Camine entre exuberantes plantaciones de té y disfrute de una cata fresca en las tierras altas de Sri Lanka.',
          },
          {
            type: 'Alojamiento',
            title: 'Ramboda Falls Hotel',
            description: 'Noche en el Ramboda Falls Hotel (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel de 4 estrellas'],
          },
        ],
      },
      {
        title: 'De Nuwara Eliya a Yala – Encuentro con la Fauna Salvaje',
        activities: [
          {
            type: 'Safari',
            title: 'Safari en el Parque Nacional de Yala',
            description:
              'Embárquese en un emocionante safari en el Parque Nacional de Yala, uno de los mejores lugares de Sri Lanka para ver elefantes salvajes en su hábitat natural. Observe elefantes, cocodrilos, ciervos y aves en amplias praderas.',
          },
          {
            type: 'Alojamiento',
            title: 'Grand Tamarind Lake (o similar) – media pensión',
            description: 'Alojamiento en Grand Tamarind Lake o hotel similar – media pensión.',
            extra: ['Hotel de 4 estrellas (Premium)', 'Baño privado', 'Cena'],
          },
        ],
      },
      {
        title: 'De Yala a la Costa Suroeste – Río y Conservación',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Un lugar pintoresco en Mirissa con vistas impresionantes de altas palmeras de coco y el océano Índico.',
          },
          {
            type: 'Visita guiada',
            title: 'Faro de Dondra Head',
            description: 'Situado en el extremo sur de Sri Lanka, ofrece vistas panorámicas del océano y encanto histórico.',
          },
          {
            type: 'Visita guiada',
            title: 'Playa de Mirissa',
            description: 'Un paraíso tropical conocido por su arena dorada, aguas cristalinas y vibrantes atardeceres.',
          },
          {
            type: 'Alojamiento',
            title: 'Somerset Mirissa Hotel',
            description: 'Alojamiento en el Somerset Mirissa Hotel o hotel similar – media pensión.',
            extra: ['Hotel de 4 estrellas (Premium)', 'Desayuno', 'Baño privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Salida desde la Costa Suroeste – Conservación y Safari',
        activities: [
          {
            type: 'Conservación',
            title: 'Proyecto de Conservación de Tortugas Marinas',
            description:
              'Visite un centro de conservación de tortugas marinas en la costa sur y conozca la protección de la fauna marina, los programas de incubación y los esfuerzos de rehabilitación.',
          },
          {
            type: 'Safari en barco',
            title: 'Safari por el Río Madu',
            description:
              'Disfrute de un pintoresco safari en barco por los manglares y pequeñas islas del río Madu. Descubra el cultivo local de canela y la variada fauna de los humedales.',
          },
        ],
      },
    ],
  },
  pl: {
    title: 'Prywatna Wycieczka 6-Dniowa po Sri Lance | Dziedzictwo Kulturowe, Wyżyny i Safari z Dziką Przyrodą',
    description:
      'Odkryj Sri Lankę podczas 6 niezapomnianych dni pełnych starożytnych miast, obiektów UNESCO, malowniczych plantacji herbaty, emocjonujących safari i relaksującego wypoczynku na wybrzeżu.',
    duration: '6 dni',
    persons: '2-20 osób',
    tourType: 'Wycieczka',
    overview:
      'Odkryj najważniejsze atrakcje Sri Lanki podczas tej idealnie zbalansowanej 6-dniowej prywatnej wycieczki. Przemierz Trójkąt Kulturowy, zwiedź Skalną Fortecę Sigiriya, odwiedź świętą Świątynię Zęba Buddy w Kandy, przejedź przez mgliste plantacje herbaty w Nuwara Eliya, przeżyj emocjonujące safari w Parku Narodowym Udawalawe i odpocznij na przepięknym południowo-zachodnim wybrzeżu. Dzięki prywatnemu transportowi, doświadczonemu kierowcy-przewodnikowi mówiącemu po angielsku oraz komfortowym opcjom noclegowym ta wycieczka oferuje idealne połączenie kultury, natury, dzikiej przyrody i relaksu – doskonała dla par, rodzin i małych grup.',
    includes: [
      'Prywatny klimatyzowany pojazd',
      'Profesjonalny kierowca mówiący po angielsku',
      'Transfer z i na lotnisko',
      'Paliwo i opłaty parkingowe',
      'Nielimitowany przebieg podczas całej wycieczki',
    ],
    excludes: ['Opłaty za wstęp i atrakcje', 'Jedzenie i napoje', 'Nocleg (do uzgodnienia na życzenie)'],
    days: [
      {
        title: 'Z Lotniska do Sigiriya – Słonie i Przygoda Safari',
        activities: [
          {
            type: 'Przyjazd',
            title: 'Odbiór z lotniska',
            description:
              'Spotkaj się ze swoim profesjonalnym kierowcą-przewodnikiem na Międzynarodowym Lotnisku Bandaranaike i zacznij swoją prywatną podróż po Sri Lance w kierunku Trójkąta Kulturowego.',
          },
          {
            type: 'Spotkanie z dziką przyrodą',
            title: 'Sierociniec dla Słoni w Pinnawali',
            description:
              'Odwiedź sierociniec dla słoni w Pinnawali, znane sanktuarium opiekujące się uratowanymi i osieroconymi słoniami. Obserwuj słonie z bliska i, w zależności od godziny, zobacz ich niezapomnianą kąpiel w rzece.',
          },
          {
            type: 'Safari',
            title: 'Safari w Parku Narodowym Minneriya',
            description:
              'Zażyj emocjonującego safari 4x4 w Parku Narodowym Minneriya, znanym z „Zgromadzenia" — jednego z największych skupisk dzikich słoni w Azji. Zobacz słonie, jelenie, bawoły i bogatą awifaunę.',
          },
          {
            type: 'Doświadczenie wioski',
            title: 'Wycieczka do wioski Hiriwadunna',
            description: 'Poznaj autentyczne wiejskie życie Sri Lanki.',
          },
          {
            type: 'Nocleg',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Nocleg w Fresco Water Villa (lub podobnym).',
            extra: ['Śniadanie i kolacja wliczone', 'Hotel 3,5-gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Z Sigiriya do Kandy – Dziedzictwo Kulturowe',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Skalna Forteca Sigiriya',
            description:
              'Wspinaj się na wpisaną na listę UNESCO Skalną Fortecę Lwa w Sigiriya, królewski pałac z V wieku wznoszący się dramatycznie nad dżunglą. Odkryj starożytne freski, Mur Zwierciadlany i panoramiczny widok ze szczytu.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Świątynia Świętej Relikwii Zęba',
            description:
              'Odwiedź Sri Dalada Maligawa w Kandy, jedną z najświętszych buddyjskich świątyń na świecie. Zobacz tradycyjne rytuały i podziwiaj piękną kandyjską architekturę świątyni.',
          },
          {
            type: 'Doświadczenie kulturowe',
            title: 'Pokaz Tradycyjnych Tańców Kandy',
            description:
              'Zażyj wieczornego pokazu tańca z tradycyjnymi kandyjskimi bębnami, chodzeniem po ogniu i barwnymi kostiumami, prezentującymi bogate artystyczne dziedzictwo Sri Lanki.',
          },
          {
            type: 'Nocleg',
            title: 'Hotel Topaz – Kandy',
            description: 'Nocleg w Hotelu Topaz (lub podobnym).',
            extra: ['Śniadanie i kolacja wliczone', 'Hotel 4-gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Z Kandy do Nuwara Eliya – Malownicza Kraina Herbaty',
        activities: [
          {
            type: 'Natura',
            title: 'Królewskie Ogrody Botaniczne w Peradeniya',
            description:
              'Zwiedź jeden z najpiękniejszych ogrodów botanicznych Azji, z egzotycznymi orchideami, wysokimi alejami palm, roślinami leczniczymi i pięknie zaprojektowanymi terenami wzdłuż rzeki Mahaweli.',
          },
          {
            type: 'Natura',
            title: 'Wodospad Ramboda',
            description:
              'Zatrzymaj się przy wodospadzie Ramboda, jednym z najwyższych na Sri Lance, otoczonym malowniczymi plantacjami herbaty i chłodnym górskim powietrzem.',
          },
          {
            type: 'Doświadczenie z herbatą',
            title: 'Wizyta w fabryce i na plantacji herbaty',
            description:
              'Poznaj proces produkcji słynnej herbaty cejlońskiej – od liścia do filiżanki. Przejdź się przez bujne plantacje herbaty i skosztuj świeżej herbaty w górskiej krainie Sri Lanki.',
          },
          {
            type: 'Nocleg',
            title: 'Ramboda Falls Hotel',
            description: 'Nocleg w Ramboda Falls Hotel (lub podobnym).',
            extra: ['Śniadanie i kolacja wliczone', 'Hotel 4-gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Z Nuwara Eliya do Yali – Spotkanie z Dziką Przyrodą',
        activities: [
          {
            type: 'Safari',
            title: 'Safari w Parku Narodowym Yala',
            description:
              'Wyrusz na emocjonujące safari w Parku Narodowym Yala, jednym z najlepszych miejsc na Sri Lance do obserwacji dzikich słoni w naturalnym środowisku. Zobacz słonie, krokodyle, jelenie i ptaki na rozległych trawiastych równinach.',
          },
          {
            type: 'Nocleg',
            title: 'Grand Tamarind Lake (lub podobny) – wyżywienie HB',
            description: 'Nocleg w Grand Tamarind Lake lub podobnym hotelu – ze śniadaniem i kolacją.',
            extra: ['Hotel 4-gwiazdkowy (Premium)', 'Prywatna łazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Z Yali na Południowo-Zachodnie Wybrzeże – Rzeka i Ochrona Przyrody',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Malownicze miejsce w Mirissa z zapierającym dech widokiem na wysokie palmy kokosowe i Ocean Indyjski.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Latarnia morska Dondra Head',
            description: 'Położona na najbardziej południowym punkcie Sri Lanki, oferuje panoramiczny widok na ocean i historyczny charakter.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Plaża Mirissa',
            description: 'Tropikalna rajska plaża znana ze złotego piasku, czystej wody i barwnych zachodów słońca.',
          },
          {
            type: 'Nocleg',
            title: 'Somerset Mirissa Hotel',
            description: 'Nocleg w Somerset Mirissa Hotel lub podobnym hotelu – ze śniadaniem i kolacją.',
            extra: ['Hotel 4-gwiazdkowy (Premium)', 'Śniadanie', 'Prywatna łazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Wyjazd z Południowo-Zachodniego Wybrzeża – Ochrona Przyrody i Safari',
        activities: [
          {
            type: 'Ochrona przyrody',
            title: 'Projekt Ochrony Żółwi Morskich',
            description:
              'Odwiedź centrum ochrony żółwi morskich na południowym wybrzeżu i poznaj programy ochrony fauny morskiej, wylęgarnie i działania rehabilitacyjne.',
          },
          {
            type: 'Safari łodzią',
            title: 'Safari na Rzece Madu',
            description:
              'Skorzystaj z malowniczego safari łodzią przez lasy namorzynowe i małe wyspy rzeki Madu. Poznaj lokalne uprawy cynamonu i bogatą przyrodę terenów podmokłych.',
          },
        ],
      },
    ],
  },
  ru: {
    title: 'Частный тур на 6 дней по Шри-Ланке | Культурное наследие, горная страна и сафари с дикой природой',
    description:
      'Откройте для себя Шри-Ланку за 6 незабываемых дней с древними городами, объектами ЮНЕСКО, живописными чайными плантациями, увлекательными сафари и расслабляющим отдыхом на побережье.',
    duration: '6 дней',
    persons: '2-20 человек',
    tourType: 'Тур',
    overview:
      'Откройте для себя главные достопримечательности Шри-Ланки в этом идеально сбалансированном частном туре на 6 дней. Проедьте через Культурный треугольник, исследуйте скальную крепость Сигирия, посетите священный Храм Зуба Будды в Канди, проедьте через туманные чайные плантации Нувара-Элии, насладитесь увлекательным сафари в национальном парке Удавалаве и отдохните на прекрасном юго-западном побережье. Благодаря частному транспорту, опытному англоговорящему водителю-гиду и комфортному проживанию этот тур предлагает идеальное сочетание культуры, природы, дикой природы и отдыха — идеально для пар, семей и небольших групп.',
    includes: [
      'Кондиционированный частный автомобиль',
      'Профессиональный англоговорящий водитель',
      'Трансфер из/в аэропорт',
      'Топливо и парковочные сборы',
      'Неограниченный пробег на протяжении всего тура',
    ],
    excludes: ['Входные билеты и плата за мероприятия', 'Еда и напитки', 'Проживание (по запросу)'],
    days: [
      {
        title: 'От Аэропорта до Сигирии – Слоны и Сафари-Приключение',
        activities: [
          {
            type: 'Прибытие',
            title: 'Встреча в аэропорту',
            description:
              'Встретьтесь с профессиональным водителем-гидом в международном аэропорту Бандаранаике и начните частное путешествие по Шри-Ланке в направлении Культурного треугольника.',
          },
          {
            type: 'Знакомство с животными',
            title: 'Приют для слонов Пиннавела',
            description:
              'Посетите приют для слонов Пиннавела — известный центр, заботящийся о спасённых и осиротевших слонах. Понаблюдайте за слонами вблизи и, в зависимости от времени, за их незабываемым купанием в реке.',
          },
          {
            type: 'Сафари',
            title: 'Сафари в национальном парке Миннерия',
            description:
              'Отправьтесь в увлекательное джип-сафари по национальному парку Миннерия, известному «Сбором слонов» — одним из крупнейших скоплений диких слонов в Азии. Увидите слонов, оленей, буйволов и разнообразных птиц.',
          },
          {
            type: 'Знакомство с деревней',
            title: 'Экскурсия в деревню Хиривадунна',
            description: 'Познайте подлинную сельскую жизнь Шри-Ланки.',
          },
          {
            type: 'Проживание',
            title: 'Fresco Water Villa – Сигирия',
            description: 'Ночь в Fresco Water Villa (или подобном).',
            extra: ['Завтрак и ужин включены', 'Отель 3,5 звезды'],
          },
        ],
      },
      {
        title: 'От Сигирии до Канди – Культурное наследие',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Скальная крепость Сигирия',
            description:
              'Подниметесь на крепость Львиной скалы Сигирия, объект ЮНЕСКО — королевский дворец V века, возвышающийся над джунглями. Откройте для себя древние фрески, Зеркальную стену и панорамный вид с вершины.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Храм Зуба Будды',
            description:
              'Посетите Шри Далада Малигава в Канди — один из самых священных буддийских храмов в мире. Понаблюдайте за традиционными ритуалами и полюбуйтесь красивой канди-архитектурой храма.',
          },
          {
            type: 'Культурная программа',
            title: 'Танцевальное шоу Канди',
            description:
              'Насладитесь вечерним танцевальным представлением с традиционными канди-барабанами, хождением по огню и яркими костюмами, демонстрирующими богатое художественное наследие Шри-Ланки.',
          },
          {
            type: 'Проживание',
            title: 'Hotel Topaz – Канди',
            description: 'Ночь в Hotel Topaz (или подобном).',
            extra: ['Завтрак и ужин включены', 'Отель 4 звезды'],
          },
        ],
      },
      {
        title: 'От Канди до Нувара-Элии – Живописный чайный край',
        activities: [
          {
            type: 'Природа',
            title: 'Королевский ботанический сад Перадения',
            description:
              'Исследуйте один из самых красивых ботанических садов Азии с экзотическими орхидеями, высокими пальмовыми аллеями, лекарственными растениями и прекрасно спланированными территориями вдоль реки Махавели.',
          },
          {
            type: 'Природа',
            title: 'Водопад Рамбода',
            description:
              'Остановка у водопада Рамбода — одного из самых высоких водопадов Шри-Ланки, окружённого живописными чайными плантациями и прохладным горным воздухом.',
          },
          {
            type: 'Чайный опыт',
            title: 'Посещение чайной фабрики и плантации',
            description:
              'Узнайте, как производится всемирно известный цейлонский чай — от листа до чашки. Пройдитесь по пышным чайным плантациям и попробуйте свежий чай в горной местности Шри-Ланки.',
          },
          {
            type: 'Проживание',
            title: 'Ramboda Falls Hotel',
            description: 'Ночь в Ramboda Falls Hotel (или подобном).',
            extra: ['Завтрак и ужин включены', 'Отель 4 звезды'],
          },
        ],
      },
      {
        title: 'От Нувара-Элии до Ялы – Встреча с дикой природой',
        activities: [
          {
            type: 'Сафари',
            title: 'Сафари в национальном парке Яла',
            description:
              'Отправьтесь в увлекательное сафари по национальному парку Яла — одному из лучших мест Шри-Ланки для наблюдения за дикими слонами в естественной среде обитания. Увидите слонов, крокодилов, оленей и птиц на открытых лугах.',
          },
          {
            type: 'Проживание',
            title: 'Grand Tamarind Lake (или подобный) – полупансион',
            description: 'Проживание в Grand Tamarind Lake или подобном отеле — с полупансионом.',
            extra: ['Отель 4 звезды (Премиум)', 'Отдельная ванная комната', 'Ужин'],
          },
        ],
      },
      {
        title: 'От Ялы до Юго-Западного побережья – Река и охрана природы',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Coconut Tree Hill (Мирисса)',
            description: 'Живописное место в Мириссе с потрясающим видом на высокие кокосовые пальмы и Индийский океан.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Маяк Дондра-Хед',
            description: 'Расположенный на самой южной точке Шри-Ланки, этот маяк предлагает панорамный вид на океан и историческое очарование.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Пляж Мирисса',
            description: 'Тропический рай, известный золотистым песком, кристально чистой водой и яркими закатами.',
          },
          {
            type: 'Проживание',
            title: 'Somerset Mirissa Hotel',
            description: 'Проживание в Somerset Mirissa Hotel или подобном отеле — с полупансионом.',
            extra: ['Отель 4 звезды (Премиум)', 'Завтрак', 'Отдельная ванная комната', 'Ужин'],
          },
        ],
      },
      {
        title: 'Отъезд с Юго-Западного побережья – Охрана природы и сафари',
        activities: [
          {
            type: 'Охрана природы',
            title: 'Проект по охране морских черепах',
            description:
              'Посетите центр по охране морских черепах на южном побережье и узнайте о защите морской фауны, программах инкубации и мерах по восстановлению популяции.',
          },
          {
            type: 'Лодочное сафари',
            title: 'Сафари на реке Маду',
            description:
              'Насладитесь живописным лодочным сафари через мангровые леса и небольшие острова реки Маду. Познакомьтесь с местным выращиванием корицы и разнообразной флорой и фауной водно-болотных угодий.',
          },
        ],
      },
    ],
  },
};
