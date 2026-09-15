import type { TourContent } from './localize';
import { PACKAGE_EXCLUDES, PACKAGE_INCLUDES } from './package-inclusions';

/**
 * 5 day Sri Lanka round tour (id: tour5).
 * English is the full BaseTour; locale overlays are authored separately.
 */
export const TOUR5: TourContent = {
  en: {
    title: '5 Day Sri Lanka Private Tour | Cultural Heritage, Hill Country & Wildlife Safari',
    description:
      'Explore Sri Lanka in 5 unforgettable days with ancient cities, UNESCO heritage sites, scenic tea plantations, thrilling wildlife safaris and relaxing coastal experiences.',
    duration: '5 Days',
    persons: '1-20 Persons',
    filecode: '5-day-sri-lanka-tour',
    overview: `Discover the highlights of Sri Lanka in this perfectly balanced 5 day private round tour. 
  Travel through the Cultural Triangle, explore Sigiriya Rock Fortress, experience Kandy’s sacred Temple of the Tooth Relic, journey through the misty tea plantations of Nuwara Eliya, enjoy an exciting Udawalawa National Park safari, and unwind along the beautiful South West Coast. 
  With private transportation, experienced English speaking driver guide, and comfortable accommodation options, this tour offers the ideal combination of culture, nature, wildlife and relaxation perfect for couples, families and small groups.`,
    tourType: 'Round Tour',
    itinerary: [
      {
        day: 1,
        title: 'Airport to Sigiriya  Elephants & Safari Adventure',
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
            image: 'assets/img/5daysTours/7.jpg',
          },
          {
            type: 'Safari',
            title: { title: 'Minneriya National Park Safari', icon: 'fa-leaf', color: '#8e44ad' },
            description:
              'Enjoy a thrilling 4x4 jeep safari in Minneriya National Park, famous for “The Gathering” one of Asia’s largest wild elephant congregations. Spot elephants, deer, buffalo and diverse bird species.',
            image: 'assets/img/5daysTours/24.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Fresco Water Villa  Sigiriya', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Fresco Water Villa (or similar).',
            image: 'assets/img/5daysTours/c.jpg',
            extra: ['Breakfast & Dinner Included'],
          },
        ],
      },
      {
        day: 2,
        title: 'Sigiriya to Kandy  Cultural Heritage',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Sigiriya Rock Fortress', icon: 'fa-mountain', color: '#e74c3c' },
            description:
              'Climb the UNESCO listed Sigiriya Lion Rock Fortress, a 5th century royal palace rising dramatically above the jungle plains. Explore ancient frescoes, the Mirror Wall and panoramic summit views.',
            image: 'assets/img/5daysTours/c8dyxgodivrwf4hxzziq.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Temple of the Sacred Tooth Relic', icon: 'fa-place-of-worship', color: '#2980b9' },
            description:
              'Visit Sri Dalada Maligawa in Kandy, one of the most sacred Buddhist temples in the world. Witness traditional rituals and admire the temple’s beautiful Kandyan architecture.',
            image: 'assets/img/5daysTours/4.jpg',
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
            title: { title: 'Hotel Topaz  Kandy', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Hotel Topaz (or similar).',
            image: 'assets/img/5daysTours/25.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 3,
        title: 'Kandy to Nuwara Eliya  Scenic Tea Country',
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
              'Discover how world famous Ceylon tea is produced from leaf to cup. Walk through lush tea plantations and enjoy a fresh tea tasting session in Sri Lanka’s hill country.',
            image: 'assets/img/5daysTours/28.png',
          },
          {
            type: 'Accommodation',
            title: { title: 'Hotel Yara Nuwara Eliya', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Yara Nuwara Eliya (or similar).',
            image: 'assets/img/5daysTours/29.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 4,
        title: 'Nuwara Eliya to Ella  Mountain Scenery ',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Nine Arches Bridge', icon: 'fa-bridge', color: '#c0392b' },
            description:
              'The majestic Nine Arch Bridge is one of the many reasons for that. The glorious Nine Arch Bridge between Ella and Demodara station is one of the engineering marvels in the early 20th century.',
            image: 'assets/img/5daysTours/5.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: "Little Adam's Peak", icon: 'fa-mountain', color: '#8e44ad' },
            description:
              'It is 1141 m in height and from the entrance it takes up to 30-45 min for the hike. Views from the summit are incredible. 360 degrees panoramic views with clouds rolling in, is a treat to watch.',
            image: 'assets/img/5daysTours/9.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Oak Ray Ella Gap Hotel', icon: 'fa-hotel', color: '#27ae60' },
            description: 'Accommodation in Oak Ray Ella Gap Hotel or Similar HB Basis',
            image: 'assets/img/5daysTours/30.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom'],
          },
        ],
      },
      {
        day: 5,
        title: 'Udawalawa to South West Coast  River & Conservation',
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
    includes: PACKAGE_INCLUDES.en,
    excludes: PACKAGE_EXCLUDES.en,
    seoIntro:
      'Five days unlock Sri Lanka\'s cultural triangle, hill country and wildlife corridor in a single private journey. From Pinnawala elephants and Minneriya gatherings near Sigiriya to the Lion Rock ascent, Kandy\'s Tooth Relic ceremonies, Nuwara Eliya tea estates and an Udawalawe or south coast safari, this Sundown Tours route balances UNESCO heritage with hands on experiences. Your chauffeur guide handles the winding mountain roads and early safari starts while you travel in an air conditioned vehicle with unlimited mileage. Accommodation can be arranged in your preferred star category on half  board; we keep entrance fees separate so you control optional stops. Perfect for couples and families who want more depth than a four day sampler without committing to a full week.',
    highlights: [
      'Sigiriya Rock Fortress, Minneriya elephant safari and Cultural Triangle highlights',
      'Kandy Temple of the Tooth, spice gardens and traditional dance performance',
      'Nuwara Eliya tea country, Ramboda Falls and scenic highland viewpoints',
      'Udawalawe or south coast wildlife safari and turtle conservation visit',
      'Flexible private transport with English speaking driver guide and unlimited mileage',
    ],
    faq: [
      {
        q: 'Is hotel accommodation included in the 5 day tour price?',
        a: 'Yes. Selected 4 Star hotels with daily breakfast and dinner (Half Board) are included in the package.',
      },
      {
        q: 'Which safari park do we visit Minneriya, Udawalawe or Yala?',
        a: 'Day 1 features Minneriya or Kaudulla for elephant gatherings when seasonal. Later days use Udawalawe or a south coast park depending on your route and park closures we confirm the best fit for your travel dates.',
      },
      {
        q: 'How much driving is involved between Sigiriya, Kandy and the south coast?',
        a: 'Expect 3 to 5 hours on the longest transfer days. We break journeys with spice gardens, viewpoints and meal stops so the pace stays comfortable for families and seniors.',
      },
    ],
  },
  de: {
    title: 'Sri Lanka Privatreise  5 Tage | Kulturerbe, Hugelland & Wildlife Safari',
    description:
      'Erleben Sie Sri Lanka in 5 unvergesslichen Tagen mit antiken Stadten, UNESCO Welterbestatten, malerischen Teeplantagen, spannenden Wildlife Safaris und entspannten Kustenerlebnissen.',
    duration: '5 Tage',
    persons: '1-20 Personen',
    tourType: 'Rundreise',
    overview:
      'Erleben Sie die Highlights Sri Lankas auf dieser ausgewogenen 5 tagigen Privatreise. Reisen Sie durch das Kulturdreieck, erkunden Sie die Felsenfestung Sigiriya, besuchen Sie den heiligen Zahntempel in Kandy, fahren Sie durch die nebligen Teeplantagen von Nuwara Eliya, erleben Sie eine spannende Safari im Udawalawe Nationalpark und entspannen Sie an der wunderschonen Sudwestkuste. Mit privatem Transport, einem erfahrenen englischsprachigen Fahrer und komfortablen Unterkunften bietet diese Reise die ideale Mischung aus Kultur, Natur, Tierwelt und Erholung  perfekt fur Paare, Familien und kleine Gruppen.',
    includes: PACKAGE_INCLUDES.de,
    excludes: PACKAGE_EXCLUDES.de,
    seoIntro:
      'Funf Tage erschliessen Sri Lankas Kultur Dreieck, das Hugelland und den Wildtier Korridor auf einer einzigen privaten Reise. Von den Elefanten in Pinnawala und den Ansammlungen in Minneriya bei Sigiriya uber den Aufstieg zum Lowenfelsen, die Zahntempel Zeremonien in Kandy, die Teeplantagen von Nuwara Eliya bis zu einer Safari in Udawalawe oder an der Sudkuste verbindet diese Route von Sundown Tours UNESCO Kulturerbe mit hautnahen Erlebnissen. Ihr Fahrer Guide ubernimmt die kurvigen Bergstrassen und die fruhen Safari Starts, wahrend Sie in einem klimatisierten Fahrzeug mit unbegrenzter Kilometerleistung reisen. Die Unterkunft kann auf Wunsch in Ihrer bevorzugten Sternekategorie auf Halbpension organisiert werden; Eintrittsgebuhren halten wir separat, damit Sie die optionalen Stopps selbst steuern. Perfekt fur Paare und Familien, die mehr Tiefgang als bei einer Vier Tage Tour wunschen, ohne sich fur eine ganze Woche zu binden.',
    highlights: [
      'Sigiriya Felsenfestung, Elefanten Safari in Minneriya und Hohepunkte des Kultur Dreiecks',
      'Zahntempel in Kandy, Gewurzgarten und traditionelle Tanzvorfuhrung',
      'Teeland Nuwara Eliya, Ramboda Wasserfalle und malerische Aussichtspunkte im Hochland',
      'Wildtier Safari in Udawalawe oder an der Sudkuste sowie Besuch eines Schildkroten Schutzprojekts',
      'Flexibler Privattransport mit englischsprachigem Fahrer Guide und unbegrenzter Kilometerleistung',
    ],
    faq: [
      {
        q: 'Ist die Hotelunterkunft im Preis der 5 tagigen Tour enthalten?',
        a: 'Ja. Ausgewahlte 4 Sterne Hotels mit taglichem Fruhstuck und Abendessen (Halbpension) sind im Paket enthalten.',
      },
      {
        q: 'Welchen Safaripark besuchen wir  Minneriya, Udawalawe oder Yala?',
        a: 'Tag 1 fuhrt je nach Saison nach Minneriya oder Kaudulla fur Elefantenansammlungen. An spateren Tagen nutzen wir Udawalawe oder einen Park an der Sudkuste, abhangig von Ihrer Route und Parkschliessungen  wir bestatigen die beste Option fur Ihre Reisedaten.',
      },
      {
        q: 'Wie viel Fahrzeit liegt zwischen Sigiriya, Kandy und der Sudkuste?',
        a: 'Rechnen Sie mit 3 to 5 Stunden an den langsten Fahrtagen. Wir unterbrechen die Fahrten mit Gewurzgarten, Aussichtspunkten und Essenspausen, damit das Tempo fur Familien und Senioren angenehm bleibt.',
      },
    ],
    days: [
      {
        title: 'Flughafen nach Sigiriya  Elefanten & Safari Abenteuer',
        activities: [
          {
            type: 'Ankunft',
            title: 'Flughafenabholung',
            description:
              'Treffen Sie Ihren professionellen Fahrer am Flughafen Bandaranaike und beginnen Sie Ihre private Sri Lanka Reise in Richtung Kulturdreieck.',
          },
          {
            type: 'Tiererlebnis',
            title: 'Pinnawala Elefantenwaisenhaus',
            description:
              'Besuchen Sie das Pinnawala Elefantenwaisenhaus, ein bekanntes Schutzzentrum fur gerettete und verwaiste Elefanten. Beobachten Sie die Tiere aus der Nahe und  je nach Zeitpunkt  ihr unvergessliches Bad im Fluss.',
          },
          {
            type: 'Safari',
            title: 'Safari im Minneriya Nationalpark',
            description:
              'Erleben Sie eine spannende 4x4 Jeep Safari im Minneriya Nationalpark, bekannt fur „The Gathering"  eine der grossten Ansammlungen wilder Elefanten in Asien. Entdecken Sie Elefanten, Hirsche, Buffel und eine vielfaltige Vogelwelt.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Ubernachtung in der Fresco Water Villa (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Sigiriya nach Kandy  Kulturerbe',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Sigiriya Felsenfestung',
            description:
              'Besteigen Sie die UNESCO gelistete Lowenfelsen Festung Sigiriya, einen im 5. Jahrhundert errichteten Konigspalast, der dramatisch uber den Dschungelebenen aufragt. Entdecken Sie antike Fresken, die Spiegelwand und den Panoramablick vom Gipfel.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den Zahntempel in Kandy, einen der heiligsten buddhistischen Tempel der Welt. Erleben Sie traditionelle Rituale und bewundern Sie die schone kandyanische Architektur.',
          },
          {
            type: 'Kulturerlebnis',
            title: 'Kandyanische Tanzshow',
            description:
              'Geniessen Sie am Abend eine Kulturshow mit traditioneller kandyanischer Trommelmusik, Feuerlauf und farbenprachtigen Kostumen, die Sri Lankas reiches kunstlerisches Erbe zeigen.',
          },
          {
            type: 'Unterkunft',
            title: 'Hotel Topaz  Kandy',
            description: 'Ubernachtung im Hotel Topaz (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Kandy nach Nuwara Eliya  Malerisches Teeland',
        activities: [
          {
            type: 'Natur',
            title: 'Royal Botanical Gardens Peradeniya',
            description:
              'Erkunden Sie einen der schonsten botanischen Garten Asiens mit exotischen Orchideen, hohen Palmenallee, Heilpflanzen und wunderschon angelegten Anlagen am Mahaweli Fluss.',
          },
          {
            type: 'Natur',
            title: 'Ramboda Wasserfall',
            description:
              'Halten Sie an den Ramboda Wasserfallen, einem der hochsten Wasserfalle Sri Lankas, umgeben von malerischen Teeplantagen und kuhler Bergluft.',
          },
          {
            type: 'Tee Erlebnis',
            title: 'Besuch einer Teefabrik & Plantage',
            description:
              'Erfahren Sie, wie der weltberuhmte Ceylon Tee vom Blatt bis zur Tasse hergestellt wird. Spazieren Sie durch uppige Teeplantagen und geniessen Sie eine frische Tee Verkostung im Hochland Sri Lankas.',
          },
          {
            type: 'Unterkunft',
            title: 'Hotel Yara Nuwara Eliya',
            description: 'Ubernachtung im Yara Nuwara Eliya (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya nach Ella  Bergpanorama',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Nine Arch Bridge',
            description:
              'Die imposante Nine Arch Bridge ist einer der Hauptgrunde fur einen Besuch. Diese beeindruckende Brucke zwischen Ella und der Station Demodara zahlt zu den technischen Meisterleistungen des fruhen 20. Jahrhunderts.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Little Adam’s Peak',
            description:
              'Mit einer Hohe von 1.141 m dauert der Aufstieg vom Eingang aus etwa 30 to 45 minuten. Der Blick vom Gipfel ist unglaublich  ein 360 Grad Panorama mit vorbeiziehenden Wolken ist ein wahres Erlebnis.',
          },
          {
            type: 'Unterkunft',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Unterkunft im Oak Ray Ella Gap Hotel oder ahnlich  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad'],
          },
        ],
      },
      {
        title: 'Udawalawe zur Sudwestkuste  Fluss & Naturschutz',
        activities: [
          {
            type: 'Naturschutz',
            title: 'Meeresschildkroten Schutzprojekt',
            description:
              'Besuchen Sie ein Meeresschildkroten Schutzzentrum an der Sudkuste und erfahren Sie mehr uber den Schutz der Meeresfauna, Brutprogramme und Rehabilitationsmassnahmen.',
          },
          {
            type: 'Bootssafari',
            title: 'Bootssafari auf dem Madu Fluss',
            description:
              'Geniessen Sie eine malerische Bootssafari durch die Mangrovenwalder und kleinen Inseln des Madu Flusses. Entdecken Sie den lokalen Zimtanbau und die vielfaltige Feuchtgebietswelt.',
          },
        ],
      },
    ],
  },
  fr: {
    title: 'Circuit Prive de 5 Jours au Sri Lanka | Patrimoine Culturel, Hauts Plateaux & Safari Animalier',
    description:
      'Decouvrez le Sri Lanka en 5 jours inoubliables : cites antiques, sites classes a l’UNESCO, plantations de the pittoresques, safaris palpitants et moments de detente sur la cote.',
    duration: '5 jours',
    persons: '1 a 20 personnes',
    tourType: 'Circuit',
    overview:
      'Decouvrez les incontournables du Sri Lanka lors de ce circuit prive de 5 jours parfaitement equilibre. Traversez le Triangle Culturel, explorez la forteresse rocheuse de Sigiriya, decouvrez le sacre Temple de la Dent a Kandy, parcourez les plantations de the brumeuses de Nuwara Eliya, profitez d’un safari palpitant dans le parc national d’Udawalawe et detendez vous le long de la magnifique cote sud ouest. Avec un transport prive, un chauffeur guide anglophone experimente et des hebergements confortables, ce circuit offre la combinaison ideale de culture, de nature, de faune et de detente  parfait pour les couples, les familles et les petits groupes.',
    includes: PACKAGE_INCLUDES.fr,
    excludes: PACKAGE_EXCLUDES.fr,
    seoIntro:
      'Cinq jours permettent de decouvrir le triangle culturel, les hauts plateaux et le corridor faunique du Sri Lanka au cours d’un seul voyage prive. Des elephants de Pinnawala et des rassemblements de Minneriya pres de Sigiriya a l’ascension du Rocher du Lion, aux ceremonies du Temple de la Dent a Kandy, aux plantations de the de Nuwara Eliya et a un safari a Udawalawe ou sur la cote sud, cet itineraire de Sundown Tours allie patrimoine UNESCO et experiences immersives. Votre chauffeur guide gere les routes de montagne sinueuses et les departs matinaux pour le safari, tandis que vous voyagez dans un vehicule climatise au kilometrage illimite. L’hebergement peut etre organise dans la categorie d’etoiles de votre choix en demi pension ; nous conservons les frais d’entree separement afin que vous gardiez le controle des arrets optionnels. Parfait pour les couples et les familles qui souhaitent plus de profondeur qu’un apercu de quatre jours sans s’engager sur une semaine complete.',
    highlights: [
      'Forteresse rocheuse de Sigiriya, safari aux elephants a Minneriya et points forts du Triangle culturel',
      'Temple de la Dent a Kandy, jardins d’epices et spectacle de danse traditionnelle',
      'Pays du the de Nuwara Eliya, chutes de Ramboda et points de vue panoramiques sur les hauts plateaux',
      'Safari faunique a Udawalawe ou sur la cote sud et visite d’un centre de conservation des tortues',
      'Transport prive flexible avec chauffeur guide anglophone et kilometrage illimite',
    ],
    faq: [
      {
        q: 'L’hebergement hotelier est il inclus dans le prix du circuit de 5 jours ?',
        a: 'Oui. Des hotels 4 etoiles selectionnes avec petit dejeuner et diner (demi pension) sont inclus dans le forfait.',
      },
      {
        q: 'Quel parc de safari visitons nous Minneriya, Udawalawe ou Yala ?',
        a: 'Le jour 1 propose Minneriya ou Kaudulla pour les rassemblements d’elephants selon la saison. Les jours suivants utilisent Udawalawe ou un parc de la cote sud selon votre itineraire et les fermetures de parcs nous confirmons la meilleure option pour vos dates de voyage.',
      },
      {
        q: 'Combien de temps de route entre Sigiriya, Kandy et la cote sud ?',
        a: 'Comptez 3 a 5 heures lors des plus longues journees de transfert. Nous ponctuons les trajets de jardins d’epices, de points de vue et de pauses repas pour garder un rythme confortable pour les familles et les seniors.',
      },
    ],
    days: [
      {
        title: 'De l’aeroport a Sigiriya  Elephants & aventure safari',
        activities: [
          {
            type: 'Arrivee',
            title: 'Prise en charge a l’aeroport',
            description:
              'Rencontrez votre chauffeur guide professionnel a l’aeroport international de Bandaranaike et debutez votre voyage prive au Sri Lanka en direction du Triangle Culturel.',
          },
          {
            type: 'Rencontre animaliere',
            title: 'Orphelinat des elephants de Pinnawala',
            description:
              'Visitez l’orphelinat des elephants de Pinnawala, un sanctuaire repute qui prend soin des elephants secourus et orphelins. Observez les de pres et, selon l’horaire, assistez a leur memorable baignade dans la riviere.',
          },
          {
            type: 'Safari',
            title: 'Safari au parc national de Minneriya',
            description:
              'Profitez d’un safari en 4x4 palpitant dans le parc national de Minneriya, celebre pour « Le Rassemblement » l’un des plus grands regroupements d’elephants sauvages d’Asie. Observez elephants, cerfs, buffles et une avifaune variee.',
          },
          {
            type: 'Hebergement',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Nuit a la Fresco Water Villa (ou similaire).',
            extra: ['Petit dejeuner & diner inclus'],
          },
        ],
      },
      {
        title: 'De Sigiriya a Kandy  Patrimoine culturel',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Forteresse rocheuse de Sigiriya',
            description:
              'Gravissez la forteresse du Rocher du Lion de Sigiriya, classee a l’UNESCO, un palais royal du Ve siecle qui s’eleve de facon spectaculaire au dessus de la jungle. Decouvrez les fresques anciennes, le Mur des Miroirs et la vue panoramique du sommet.',
          },
          {
            type: 'Visite guidee',
            title: 'Temple de la Dent Sacree',
            description:
              'Visitez le Sri Dalada Maligawa a Kandy, l’un des temples bouddhistes les plus sacres au monde. Assistez aux rituels traditionnels et admirez la belle architecture kandyenne du temple.',
          },
          {
            type: 'Experience culturelle',
            title: 'Spectacle de danse traditionnelle de Kandy',
            description:
              'Profitez d’un spectacle de danse en soiree mettant en valeur les percussions kandyennes traditionnelles, la marche sur le feu et des costumes chatoyants, reflet du riche heritage artistique du Sri Lanka.',
          },
          {
            type: 'Hebergement',
            title: 'Hotel Topaz  Kandy',
            description: 'Nuit a l’Hotel Topaz (ou similaire).',
            extra: ['Petit dejeuner & diner inclus', 'Hotel 4 etoiles'],
          },
        ],
      },
      {
        title: 'De Kandy a Nuwara Eliya  Pays du the pittoresque',
        activities: [
          {
            type: 'Nature',
            title: 'Jardins botaniques royaux de Peradeniya',
            description:
              'Explorez l’un des plus beaux jardins botaniques d’Asie, avec ses orchidees exotiques, ses allees de palmiers, ses plantes medicinales et ses jardins magnifiquement amenages le long de la riviere Mahaweli.',
          },
          {
            type: 'Nature',
            title: 'Cascade de Ramboda',
            description:
              'Arret a la cascade de Ramboda, l’une des plus hautes cascades du Sri Lanka, entouree de plantations de the et d’un air de montagne rafraichissant.',
          },
          {
            type: 'Decouverte du the',
            title: 'Visite d’une fabrique et plantation de the',
            description:
              'Decouvrez comment le celebre the de Ceylan est produit, de la feuille a la tasse. Promenez vous dans de luxuriantes plantations de the et savourez une degustation fraiche dans les hauts plateaux du Sri Lanka.',
          },
          {
            type: 'Hebergement',
            title: 'Hotel Yara Nuwara Eliya',
            description: 'Nuit au Yara Nuwara Eliya (ou similaire).',
            extra: ['Petit dejeuner & diner inclus', 'Hotel 4 etoiles'],
          },
        ],
      },
      {
        title: 'De Nuwara Eliya a Ella  Panoramas de montagne',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Nine Arches Bridge',
            description:
              'Le majestueux Nine Arch Bridge est l’une des nombreuses raisons de faire escale ici. Ce pont impressionnant entre Ella et la gare de Demodara est l’une des merveilles d’ingenierie du debut du XXe siecle.',
          },
          {
            type: 'Visite guidee',
            title: 'Little Adam’s Peak',
            description:
              'D’une hauteur de 1141 m, l’ascension depuis l’entree prend 30 a 45 minutes. La vue depuis le sommet est incroyable : un panorama a 360 degres avec des nuages qui defilent, un vrai regal pour les yeux.',
          },
          {
            type: 'Hebergement',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Hebergement au Oak Ray Ella Gap Hotel ou similaire  en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Salle de bain privee'],
          },
        ],
      },
      {
        title: 'D’Udawalawe a la cote sud ouest  Riviere & preservation',
        activities: [
          {
            type: 'Preservation',
            title: 'Projet de conservation des tortues marines',
            description:
              'Visitez un centre de conservation des tortues marines sur la cote sud et decouvrez la protection de la faune marine, les programmes d’elevage et les efforts de rehabilitation.',
          },
          {
            type: 'Safari fluvial',
            title: 'Safari sur la riviere Madu',
            description:
              'Profitez d’un safari en bateau pittoresque a travers les mangroves et petites iles de la riviere Madu. Decouvrez la culture locale de la cannelle et la faune variee des zones humides.',
          },
        ],
      },
    ],
  },
  it: {
    title: 'Tour Privato di 5 Giorni in Sri Lanka | Patrimonio Culturale, Colline e Safari nella Fauna Selvatica',
    description:
      'Scoprite lo Sri Lanka in 5 giorni indimenticabili tra citta antiche, siti UNESCO, pittoresche piantagioni di te, emozionanti safari nella fauna selvatica ed esperienze costiere rilassanti.',
    duration: '5 giorni',
    persons: '1-20 persone',
    tourType: 'Tour',
    overview:
      'Scoprite le meraviglie dello Sri Lanka in questo tour privato di 5 giorni perfettamente equilibrato. Attraversate il Triangolo Culturale, esplorate la Fortezza Rocciosa di Sigiriya, visitate il sacro Tempio della Reliquia del Dente a Kandy, percorrete le nebbiose piantagioni di te di Nuwara Eliya, godetevi un emozionante safari nel Parco Nazionale di Udawalawe e rilassatevi lungo la splendida costa sud occidentale. Con trasporto privato, un autista guida di lingua inglese esperto e soluzioni di alloggio confortevoli, questo tour offre la combinazione ideale di cultura, natura, fauna selvatica e relax, perfetto per coppie, famiglie e piccoli gruppi.',
    includes: PACKAGE_INCLUDES.it,
    excludes: PACKAGE_EXCLUDES.it,
    seoIntro:
      'Cinque giorni permettono di scoprire il triangolo culturale, l’altopiano centrale e il corridoio della fauna selvatica dello Sri Lanka in un unico viaggio privato. Dagli elefanti di Pinnawala e i raduni di Minneriya vicino a Sigiriya, alla salita al Lion Rock, alle cerimonie del Tempio del Dente a Kandy, alle piantagioni di te di Nuwara Eliya, fino a un safari a Udawalawe o sulla costa meridionale, questo itinerario di Sundown Tours unisce patrimonio UNESCO ed esperienze pratiche. Il vostro autista guida gestisce le tortuose strade di montagna e le partenze mattutine per il safari, mentre viaggiate in un veicolo climatizzato con chilometraggio illimitato. L’alloggio puo essere organizzato nella categoria di stelle preferita in mezza pensione; teniamo i biglietti d’ingresso separati cosi potete gestire le soste opzionali. Perfetto per coppie e famiglie che desiderano maggiore profondita rispetto a un tour di quattro giorni senza impegnarsi per un’intera settimana.',
    highlights: [
      'Fortezza rocciosa di Sigiriya, safari agli elefanti a Minneriya e punti salienti del Triangolo Culturale',
      'Tempio del Dente a Kandy, giardini di spezie e spettacolo di danza tradizionale',
      'Terra del te di Nuwara Eliya, cascate di Ramboda e punti panoramici sull’altopiano',
      'Safari nella fauna selvatica a Udawalawe o sulla costa meridionale e visita a un centro di conservazione delle tartarughe',
      'Trasporto privato flessibile con autista guida di lingua inglese e chilometraggio illimitato',
    ],
    faq: [
      {
        q: 'L’alloggio in hotel e incluso nel prezzo del tour di 5 giorni?',
        a: 'Si. Hotel 4 stelle selezionati con colazione e cena (mezza pensione) sono inclusi nel pacchetto.',
      },
      {
        q: 'Quale parco safari visitiamo Minneriya, Udawalawe o Yala?',
        a: 'Il giorno 1 prevede Minneriya o Kaudulla per i raduni di elefanti in base alla stagione. Nei giorni successivi si utilizza Udawalawe o un parco della costa meridionale in base al vostro percorso e alle chiusure dei parchi confermiamo l’opzione migliore per le vostre date di viaggio.',
      },
      {
        q: 'Quanto tempo di guida c’e tra Sigiriya, Kandy e la costa meridionale?',
        a: 'Prevedete 3-5 ore nei giorni di trasferimento piu lunghi. Suddividiamo i tragitti con giardini di spezie, punti panoramici e soste per i pasti, cosi il ritmo resta comodo per famiglie e anziani.',
      },
    ],
    days: [
      {
        title: 'Dall’Aeroporto a Sigiriya  Elefanti e Avventura Safari',
        activities: [
          {
            type: 'Arrivo',
            title: 'Trasferimento dall’aeroporto',
            description:
              'Incontrate il vostro autista guida professionista all’Aeroporto Internazionale di Bandaranaike e iniziate il vostro viaggio privato in Sri Lanka verso il Triangolo Culturale.',
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
              'Godetevi un emozionante safari in 4x4 nel Parco Nazionale di Minneriya, famoso per “The Gathering” uno dei piu grandi raduni di elefanti selvatici in Asia. Avvistate elefanti, cervi, bufali e una ricca avifauna.',
          },
          {
            type: 'Alloggio',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Pernottamento alla Fresco Water Villa (o similare).',
            extra: ['Colazione e cena incluse'],
          },
        ],
      },
      {
        title: 'Da Sigiriya a Kandy  Patrimonio Culturale',
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
              'Visitate il Sri Dalada Maligawa a Kandy, uno dei templi buddisti piu sacri al mondo. Assistete ai rituali tradizionali e ammirate la splendida architettura kandyana del tempio.',
          },
          {
            type: 'Esperienza culturale',
            title: 'Spettacolo di danza tradizionale di Kandy',
            description:
              'Godetevi uno spettacolo serale con percussioni kandyane tradizionali, camminate sul fuoco e costumi variopinti, che mostrano il ricco patrimonio artistico dello Sri Lanka.',
          },
          {
            type: 'Alloggio',
            title: 'Hotel Topaz  Kandy',
            description: 'Pernottamento all’Hotel Topaz (o similare).',
            extra: ['Colazione e cena incluse', 'Hotel 4 stelle'],
          },
        ],
      },
      {
        title: 'Da Kandy a Nuwara Eliya  Pittoresca Regione del Te',
        activities: [
          {
            type: 'Natura',
            title: 'Royal Botanical Gardens di Peradeniya',
            description:
              'Esplorate uno dei piu bei giardini botanici dell’Asia, con orchidee esotiche, alti viali di palme, piante medicinali e giardini splendidamente disposti lungo il fiume Mahaweli.',
          },
          {
            type: 'Natura',
            title: 'Cascata di Ramboda',
            description:
              'Sosta alla cascata di Ramboda, una delle piu alte dello Sri Lanka, circondata da pittoresche piantagioni di te e dall’aria fresca di montagna.',
          },
          {
            type: 'Esperienza del te',
            title: 'Visita a una fabbrica e piantagione di te',
            description:
              'Scoprite come viene prodotto il famoso te di Ceylon, dalla foglia alla tazza. Passeggiate tra le rigogliose piantagioni di te e gustate una degustazione fresca sulle colline dello Sri Lanka.',
          },
          {
            type: 'Alloggio',
            title: 'Hotel Yara Nuwara Eliya',
            description: 'Pernottamento al Yara Nuwara Eliya (o similare).',
            extra: ['Colazione e cena incluse', 'Hotel 4 stelle'],
          },
        ],
      },
      {
        title: 'Da Nuwara Eliya a Ella  Panorami di Montagna',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Nine Arches Bridge',
            description:
              'Il maestoso Nine Arch Bridge e uno dei tanti motivi per visitare quest’area. Questo straordinario ponte tra Ella e la stazione di Demodara e una delle meraviglie ingegneristiche del primo Novecento.',
          },
          {
            type: 'Tour guidato',
            title: 'Little Adam’s Peak',
            description:
              'Alto 1.141 m, richiede dai 30 ai 45 minuti di camminata dall’ingresso. Le vedute dalla cima sono incredibili: un panorama a 360 gradi con nuvole che scorrono e uno spettacolo da non perdere.',
          },
          {
            type: 'Alloggio',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Alloggio all’Oak Ray Ella Gap Hotel o similare  in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Bagno privato'],
          },
        ],
      },
      {
        title: 'Da Udawalawe alla Costa Sud Occidentale  Fiume e Conservazione',
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
    title: 'Circuito Privado de 5 Dias en Sri Lanka | Patrimonio Cultural, Colinas y Safari de Fauna Salvaje',
    description:
      'Descubra Sri Lanka en 5 dias inolvidables con ciudades antiguas, sitios declarados Patrimonio de la Humanidad, pintorescas plantaciones de te, emocionantes safaris de fauna y relajantes experiencias costeras.',
    duration: '5 dias',
    persons: '1-20 personas',
    tourType: 'Circuito',
    overview:
      'Descubra lo mas destacado de Sri Lanka en este circuito privado de 5 dias perfectamente equilibrado. Recorra el Triangulo Cultural, explore la Fortaleza Rocosa de Sigiriya, visite el sagrado Templo de la Reliquia del Diente en Kandy, atraviese las neblinosas plantaciones de te de Nuwara Eliya, disfrute de un emocionante safari en el Parque Nacional de Udawalawe y relajese en la hermosa costa suroeste. Con transporte privado, un conductor guia de habla inglesa experimentado y alojamientos comodos, este circuito ofrece la combinacion ideal de cultura, naturaleza, fauna y relax, perfecto para parejas, familias y grupos pequenos.',
    includes: PACKAGE_INCLUDES.es,
    excludes: PACKAGE_EXCLUDES.es,
    seoIntro:
      'Cinco dias permiten descubrir el triangulo cultural, las montanas del te y el corredor de fauna de Sri Lanka en un unico viaje privado. Desde los elefantes de Pinnawala y las concentraciones de Minneriya cerca de Sigiriya, hasta la ascension al Lion Rock, las ceremonias del Templo del Diente en Kandy, las plantaciones de te de Nuwara Eliya y un safari en Udawalawe o en la costa sur, esta ruta de Sundown Tours combina patrimonio UNESCO con experiencias practicas. Su chofer guia se encarga de las carreteras de montana sinuosas y las salidas tempranas para el safari, mientras usted viaja en un vehiculo con aire acondicionado y kilometraje ilimitado. El alojamiento puede organizarse en la categoria de estrellas que prefiera en media pension; mantenemos las entradas por separado para que usted controle las paradas opcionales. Perfecto para parejas y familias que buscan mas profundidad que en un circuito de cuatro dias, sin comprometerse a una semana completa.',
    highlights: [
      'Fortaleza rocosa de Sigiriya, safari de elefantes en Minneriya y lo mas destacado del Triangulo Cultural',
      'Templo del Diente en Kandy, jardines de especias y espectaculo de danza tradicional',
      'Pais del te de Nuwara Eliya, cataratas de Ramboda y miradores panoramicos en las tierras altas',
      'Safari de fauna en Udawalawe o en la costa sur y visita a un centro de conservacion de tortugas',
      'Transporte privado flexible con chofer guia de habla inglesa y kilometraje ilimitado',
    ],
    faq: [
      {
        q: 'El alojamiento en hotel esta incluido en el precio del circuito de 5 dias?',
        a: 'Si. Hoteles de 4 estrellas seleccionados con desayuno y cena (media pension) estan incluidos en el paquete.',
      },
      {
        q: 'Que parque de safari visitamos: Minneriya, Udawalawe o Yala?',
        a: 'El dia 1 incluye Minneriya o Kaudulla para las concentraciones de elefantes segun la temporada. Los dias siguientes se utiliza Udawalawe o un parque de la costa sur segun su ruta y los cierres de parques; confirmamos la mejor opcion para sus fechas de viaje.',
      },
      {
        q: 'Cuanto tiempo de conduccion hay entre Sigiriya, Kandy y la costa sur?',
        a: 'Calcule entre 3 y 5 horas en los dias de traslado mas largos. Dividimos los trayectos con jardines de especias, miradores y paradas para comer, de modo que el ritmo sea comodo para familias y personas mayores.',
      },
    ],
    days: [
      {
        title: 'Del Aeropuerto a Sigiriya  Elefantes y Aventura de Safari',
        activities: [
          {
            type: 'Llegada',
            title: 'Recogida en el aeropuerto',
            description:
              'Reunase con su conductor guia profesional en el Aeropuerto Internacional Bandaranaike e inicie su viaje privado por Sri Lanka rumbo al Triangulo Cultural.',
          },
          {
            type: 'Experiencia con fauna',
            title: 'Orfanato de Elefantes de Pinnawala',
            description:
              'Visite el orfanato de elefantes de Pinnawala, un reconocido santuario que cuida de elefantes rescatados y huerfanos. Observe a los elefantes de cerca y, segun el horario, presencie su memorable bano en el rio.',
          },
          {
            type: 'Safari',
            title: 'Safari en el Parque Nacional de Minneriya',
            description:
              'Disfrute de un emocionante safari en 4x4 por el Parque Nacional de Minneriya, famoso por “El Encuentro” una de las mayores congregaciones de elefantes salvajes de Asia. Observe elefantes, ciervos, bufalos y una gran variedad de aves.',
          },
          {
            type: 'Alojamiento',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Noche en Fresco Water Villa (o similar).',
            extra: ['Desayuno y cena incluidos'],
          },
        ],
      },
      {
        title: 'De Sigiriya a Kandy  Patrimonio Cultural',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Fortaleza Rocosa de Sigiriya',
            description:
              'Suba a la Fortaleza de la Roca del Leon de Sigiriya, declarada Patrimonio de la Humanidad, un palacio real del siglo V que se eleva de forma espectacular sobre la selva. Descubra los antiguos frescos, el Muro de los Espejos y las vistas panoramicas de la cima.',
          },
          {
            type: 'Visita guiada',
            title: 'Templo de la Sagrada Reliquia del Diente',
            description:
              'Visite el Sri Dalada Maligawa en Kandy, uno de los templos budistas mas sagrados del mundo. Sea testigo de rituales tradicionales y admire la hermosa arquitectura kandiana del templo.',
          },
          {
            type: 'Experiencia cultural',
            title: 'Espectaculo de Danza Tradicional de Kandy',
            description:
              'Disfrute de un espectaculo de danza nocturno con percusion kandiana tradicional, caminata sobre fuego y coloridos trajes que muestran el rico patrimonio artistico de Sri Lanka.',
          },
          {
            type: 'Alojamiento',
            title: 'Hotel Topaz  Kandy',
            description: 'Noche en el Hotel Topaz (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel de 4 estrellas'],
          },
        ],
      },
      {
        title: 'De Kandy a Nuwara Eliya  Pintoresco Pais del Te',
        activities: [
          {
            type: 'Naturaleza',
            title: 'Jardines Botanicos Reales de Peradeniya',
            description:
              'Explore uno de los jardines botanicos mas bellos de Asia, con orquideas exoticas, avenidas de palmeras, plantas medicinales y jardines maravillosamente disenados junto al rio Mahaweli.',
          },
          {
            type: 'Naturaleza',
            title: 'Cascada de Ramboda',
            description:
              'Parada en las cascadas de Ramboda, una de las mas altas de Sri Lanka, rodeada de pintorescas plantaciones de te y aire fresco de montana.',
          },
          {
            type: 'Experiencia del te',
            title: 'Visita a una fabrica y plantacion de te',
            description:
              'Descubra como se produce el famoso te de Ceilan, de la hoja a la taza. Camine entre exuberantes plantaciones de te y disfrute de una cata fresca en las tierras altas de Sri Lanka.',
          },
          {
            type: 'Alojamiento',
            title: 'Hotel Yara Nuwara Eliya',
            description: 'Noche en el Yara Nuwara Eliya (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel de 4 estrellas'],
          },
        ],
      },
      {
        title: 'De Nuwara Eliya a Ella  Paisajes de Montana',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Nine Arches Bridge',
            description:
              'El majestuoso Nine Arch Bridge es una de las muchas razones para hacer esta parada. Este impresionante puente entre Ella y la estacion de Demodara es una de las maravillas de la ingenieria de principios del siglo XX.',
          },
          {
            type: 'Visita guiada',
            title: 'Little Adam’s Peak',
            description:
              'Con una altura de 1141 m, la caminata desde la entrada dura entre 30 y 45 minutos. Las vistas desde la cima son increibles: un panorama de 360 grados con nubes en movimiento es todo un espectaculo.',
          },
          {
            type: 'Alojamiento',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Alojamiento en el Oak Ray Ella Gap Hotel o similar, en media pension.',
            extra: ['Hotel de 4 estrellas (Premium)', 'Bano privado'],
          },
        ],
      },
      {
        title: 'De Udawalawe a la Costa Suroeste  Rio y Conservacion',
        activities: [
          {
            type: 'Conservacion',
            title: 'Proyecto de Conservacion de Tortugas Marinas',
            description:
              'Visite un centro de conservacion de tortugas marinas en la costa sur y conozca la proteccion de la fauna marina, los programas de incubacion y los esfuerzos de rehabilitacion.',
          },
          {
            type: 'Safari en barco',
            title: 'Safari por el Rio Madu',
            description:
              'Disfrute de un pintoresco safari en barco por los manglares y pequenas islas del rio Madu. Descubra el cultivo local de canela y la variada fauna de los humedales.',
          },
        ],
      },
    ],
  },
  pl: {
    title: 'Prywatna Wycieczka 5 Dniowa po Sri Lance | Dziedzictwo Kulturowe, Wyzyny i Safari z Dzika Przyroda',
    description:
      'Odkryj Sri Lanke podczas 5 niezapomnianych dni pelnych starozytnych miast, obiektow UNESCO, malowniczych plantacji herbaty, emocjonujacych safari i relaksujacego wypoczynku na wybrzezu.',
    duration: '5 dni',
    persons: '1-20 osob',
    tourType: 'Wycieczka',
    overview:
      'Odkryj najwazniejsze atrakcje Sri Lanki podczas tej idealnie zbalansowanej 5 dniowej prywatnej wycieczki. Przemierz Trojkat Kulturowy, zwiedz Skalna Fortece Sigiriya, odwiedz swieta Swiatynie Zeba Buddy w Kandy, przejedz przez mgliste plantacje herbaty w Nuwara Eliya, przezyj emocjonujace safari w Parku Narodowym Udawalawe i odpocznij na przepieknym poludniowo zachodnim wybrzezu. Dzieki prywatnemu transportowi, doswiadczonemu kierowcy przewodnikowi mowiacemu po angielsku oraz komfortowym opcjom noclegowym ta wycieczka oferuje idealne polaczenie kultury, natury, dzikiej przyrody i relaksu  doskonala dla par, rodzin i malych grup.',
    includes: PACKAGE_INCLUDES.pl,
    excludes: PACKAGE_EXCLUDES.pl,
    seoIntro:
      'Piec dni pozwala odkryc Trojkat Kulturowy, wyzyny herbaciane i korytarz dzikiej przyrody Sri Lanki podczas jednej prywatnej podrozy. Od sloni w Pinnawali i zgromadzen w Minneriya blisko Sigiriya, przez wspinaczke na Lion Rock, ceremonie w Swiatyni Zeba w Kandy, plantacje herbaty w Nuwara Eliya, az po safari w Udawalawe lub na poludniowym wybrzezu  ta trasa Sundown Tours laczy dziedzictwo UNESCO z praktycznymi doswiadczeniami. Kierowca przewodnik zajmuje sie kretymi gorskimi drogami i wczesnymi wyjazdami na safari, a Panstwo podrozuja klimatyzowanym pojazdem z nielimitowanym przebiegiem. Nocleg mozna zorganizowac w wybranej kategorii gwiazdek w formule half  board; oplaty za wstep trzymamy osobno, dzieki czemu sami decyduja Panstwo o opcjonalnych przystankach. Idealne dla par i rodzin, ktore chca wiecej niz w czterodniowym wyjezdzie, ale nie chca poswiecac calego tygodnia.',
    highlights: [
      'Skalna forteca Sigiriya, safari ze sloniami w Minneriya i najwazniejsze punkty Trojkata Kulturowego',
      'Swiatynia Zeba w Kandy, ogrody przypraw i tradycyjny pokaz tanca',
      'Kraina herbaty Nuwara Eliya, wodospady Ramboda i widokowe punkty w gorach',
      'Safari z dzika przyroda w Udawalawe lub na poludniowym wybrzezu oraz wizyta w osrodku ochrony zolwi',
      'Elastyczny prywatny transport z anglojezycznym kierowca przewodnikiem i nielimitowanym przebiegiem',
    ],
    faq: [
      {
        q: 'Czy zakwaterowanie w hotelu jest wliczone w cene 5 dniowej wycieczki?',
        a: 'Tak. Wybrane hotele 4 gwiazdkowe ze sniadaniem i kolacja (Half Board) sa wliczone w cene pakietu.',
      },
      {
        q: 'Ktory park safari odwiedzamy  Minneriya, Udawalawe czy Yala?',
        a: 'Dzien 1 obejmuje Minneriya lub Kaudulla dla zgromadzen sloni, zaleznie od sezonu. W kolejnych dniach korzystamy z Udawalawe lub parku na poludniowym wybrzezu, w zaleznosci od trasy i zamkniec parkow  potwierdzamy najlepsza opcje dla Panstwa dat podrozy.',
      },
      {
        q: 'Ile czasu zajmuje jazda miedzy Sigiriya, Kandy i poludniowym wybrzezem?',
        a: 'W najdluzszych dniach transferu nalezy liczyc na 3 to 5 godzin. Trasy przerywamy ogrodami przypraw, punktami widokowymi i przystankami na posilki, aby tempo bylo komfortowe dla rodzin i seniorow.',
      },
    ],
    days: [
      {
        title: 'Z Lotniska do Sigiriya  Slonie i Przygoda Safari',
        activities: [
          {
            type: 'Przyjazd',
            title: 'Odbior z lotniska',
            description:
              'Spotkaj sie ze swoim profesjonalnym kierowca przewodnikiem na Miedzynarodowym Lotnisku Bandaranaike i zacznij swoja prywatna podroz po Sri Lance w kierunku Trojkata Kulturowego.',
          },
          {
            type: 'Spotkanie z dzika przyroda',
            title: 'Sierociniec dla Sloni w Pinnawali',
            description:
              'Odwiedz sierociniec dla sloni w Pinnawali, znane sanktuarium opiekujace sie uratowanymi i osieroconymi sloniami. Obserwuj slonie z bliska i, w zaleznosci od godziny, zobacz ich niezapomniana kapiel w rzece.',
          },
          {
            type: 'Safari',
            title: 'Safari w Parku Narodowym Minneriya',
            description:
              'Zazyj emocjonujacego safari 4x4 w Parku Narodowym Minneriya, znanym z „Zgromadzenia" jednego z najwiekszych skupisk dzikich sloni w Azji. Zobacz slonie, jelenie, bawoly i bogata awifaune.',
          },
          {
            type: 'Nocleg',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Nocleg w Fresco Water Villa (lub podobnym).',
            extra: ['Sniadanie i kolacja wliczone'],
          },
        ],
      },
      {
        title: 'Z Sigiriya do Kandy  Dziedzictwo Kulturowe',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Skalna Forteca Sigiriya',
            description:
              'Wspinaj sie na wpisana na liste UNESCO Skalna Fortece Lwa w Sigiriya, krolewski palac z V wieku wznoszacy sie dramatycznie nad dzungla. Odkryj starozytne freski, Mur Zwierciadlany i panoramiczny widok ze szczytu.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Swiatynia Swietej Relikwii Zeba',
            description:
              'Odwiedz Sri Dalada Maligawa w Kandy, jedna z najswietszych buddyjskich swiatyn na swiecie. Zobacz tradycyjne rytualy i podziwiaj piekna kandyjska architekture swiatyni.',
          },
          {
            type: 'Doswiadczenie kulturowe',
            title: 'Pokaz Tradycyjnych Tancow Kandy',
            description:
              'Zazyj wieczornego pokazu tanca z tradycyjnymi kandyjskimi bebnami, chodzeniem po ogniu i barwnymi kostiumami, prezentujacymi bogate artystyczne dziedzictwo Sri Lanki.',
          },
          {
            type: 'Nocleg',
            title: 'Hotel Topaz  Kandy',
            description: 'Nocleg w Hotelu Topaz (lub podobnym).',
            extra: ['Sniadanie i kolacja wliczone', 'Hotel 4 gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Z Kandy do Nuwara Eliya  Malownicza Kraina Herbaty',
        activities: [
          {
            type: 'Natura',
            title: 'Krolewskie Ogrody Botaniczne w Peradeniya',
            description:
              'Zwiedz jeden z najpiekniejszych ogrodow botanicznych Azji, z egzotycznymi orchideami, wysokimi alejami palm, roslinami leczniczymi i pieknie zaprojektowanymi terenami wzdluz rzeki Mahaweli.',
          },
          {
            type: 'Natura',
            title: 'Wodospad Ramboda',
            description:
              'Zatrzymaj sie przy wodospadzie Ramboda, jednym z najwyzszych na Sri Lance, otoczonym malowniczymi plantacjami herbaty i chlodnym gorskim powietrzem.',
          },
          {
            type: 'Doswiadczenie z herbata',
            title: 'Wizyta w fabryce i na plantacji herbaty',
            description:
              'Poznaj proces produkcji slynnej herbaty cejlonskiej  od liscia do filizanki. Przejdz sie przez bujne plantacje herbaty i skosztuj swiezej herbaty w gorskiej krainie Sri Lanki.',
          },
          {
            type: 'Nocleg',
            title: 'Hotel Yara Nuwara Eliya',
            description: 'Nocleg w Yara Nuwara Eliya (lub podobnym).',
            extra: ['Sniadanie i kolacja wliczone', 'Hotel 4 gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Z Nuwara Eliya do Elli  Gorska Panorama',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Most Dziewieciu Lukow',
            description:
              'Majestatyczny Most Dziewieciu Lukow to jeden z wielu powodow, by sie tu zatrzymac. Ten wspanialy most miedzy Ella i stacja Demodara to jeden z inzynieryjnych cudow poczatku XX wieku.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Little Adam’s Peak',
            description:
              'Ma wysokosc 1141 m, a wedrowka od wejscia zajmuje 30 to 45 minut. Widoki ze szczytu sa niesamowite  panorama 360 stopni z przeplywajacymi oblokami to prawdziwa uczta dla oczu.',
          },
          {
            type: 'Nocleg',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Nocleg w Oak Ray Ella Gap Hotel lub podobnym  ze sniadaniem i kolacja.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Prywatna lazienka'],
          },
        ],
      },
      {
        title: 'Z Udawalawe na Poludniowo Zachodnie Wybrzeze  Rzeka i Ochrona Przyrody',
        activities: [
          {
            type: 'Ochrona przyrody',
            title: 'Projekt Ochrony Zolwi Morskich',
            description:
              'Odwiedz centrum ochrony zolwi morskich na poludniowym wybrzezu i poznaj programy ochrony fauny morskiej, wylegarnie i dzialania rehabilitacyjne.',
          },
          {
            type: 'Safari lodzia',
            title: 'Safari na Rzece Madu',
            description:
              'Skorzystaj z malowniczego safari lodzia przez lasy namorzynowe i male wyspy rzeki Madu. Poznaj lokalne uprawy cynamonu i bogata przyrode terenow podmoklych.',
          },
        ],
      },
    ],
  },
  ru: {
    title: 'Частный тур на 5 дней по Шри Ланке | Культурное наследие, горная страна и сафари с дикой природой',
    description:
      'Откройте для себя Шри Ланку за 5 незабываемых дней с древними городами, объектами ЮНЕСКО, живописными чайными плантациями, увлекательными сафари и расслабляющим отдыхом на побережье.',
    duration: '5 дней',
    persons: '1-20 человек',
    tourType: 'Тур',
    overview:
      'Откройте для себя главные достопримечательности Шри Ланки в этом идеально сбалансированном частном туре на 5 дней. Проедьте через Культурный треугольник, исследуйте скальную крепость Сигирия, посетите священный Храм Зуба Будды в Канди, проедьте через туманные чайные плантации Нувара Элии, насладитесь увлекательным сафари в национальном парке Удавалаве и отдохните на прекрасном юго западном побережье. Благодаря частному транспорту, опытному англоговорящему водителю гиду и комфортному проживанию этот тур предлагает идеальное сочетание культуры, природы, дикой природы и отдыха идеально для пар, семей и небольших групп.',
    includes: PACKAGE_INCLUDES.ru,
    excludes: PACKAGE_EXCLUDES.ru,
    seoIntro:
      'Пять дней открывают Культурный треугольник, чайные горы и коридор дикой природы Шри Ланки в рамках одной частной поездки. От слонов Пиннавелы и скоплений в Миннерии рядом с Sigiriya, через восхождение на Lion Rock, церемонии в Храме Зуба в Канди, чайные плантации Нувара Элии и сафари в Удавалаве или на южном побережье этот маршрут Sundown Tours сочетает наследие ЮНЕСКО с живыми впечатлениями. Ваш водитель гид берёт на себя извилистые горные дороги и ранние выезды на сафари, пока вы путешествуете в кондиционированном автомобиле с неограниченным пробегом. Проживание можно организовать в предпочитаемой категории звёзд на полупансионе; входные билеты мы держим отдельно, чтобы вы сами управляли дополнительными остановками. Идеально для пар и семей, которым нужно больше глубины, чем в четырёхдневном туре, но без обязательств на целую неделю.',
    highlights: [
      'Скальная крепость Sigiriya, слоновье сафари в Миннерии и главные достопримечательности Культурного треугольника',
      'Храм Зуба в Канди, сады специй и традиционное танцевальное представление',
      'Чайный край Нувара Элия, водопады Ramboda и живописные смотровые площадки в горах',
      'Сафари в поисках диких животных в Удавалаве или на южном побережье и визит в центр по охране черепах',
      'Гибкий частный транспорт с англоговорящим водителем гидом и неограниченным пробегом',
    ],
    faq: [
      {
        q: 'Включено ли проживание в отеле в стоимость 5 дневного тура?',
        a: 'Да. Выбранные отели 4 звезды с завтраком и ужином (полупансион) включены в пакет.',
      },
      {
        q: 'Какой парк для сафари мы посещаем Миннерию, Удавалаве или Ялу?',
        a: 'В 1 й день, в зависимости от сезона, используется Миннерия или Каудулла для наблюдения за скоплениями слонов. В последующие дни используется Удавалаве или парк на южном побережье в зависимости от маршрута и закрытий парков мы подтверждаем оптимальный вариант для ваших дат поездки.',
      },
      {
        q: 'Сколько времени занимает дорога между Sigiriya, Канди и южным побережьем?',
        a: 'В самые долгие дни переезда рассчитывайте на 3 to 5 часов. Мы разбиваем поездки садами специй, смотровыми площадками и остановками на еду, чтобы темп был комфортным для семей и пожилых людей.',
      },
    ],
    days: [
      {
        title: 'От Аэропорта до Сигирии  Слоны и Сафари Приключение',
        activities: [
          {
            type: 'Прибытие',
            title: 'Встреча в аэропорту',
            description:
              'Встретьтесь с профессиональным водителем гидом в международном аэропорту Бандаранаике и начните частное путешествие по Шри Ланке в направлении Культурного треугольника.',
          },
          {
            type: 'Знакомство с животными',
            title: 'Приют для слонов Пиннавела',
            description:
              'Посетите приют для слонов Пиннавела известный центр, заботящийся о спасённых и осиротевших слонах. Понаблюдайте за слонами вблизи и, в зависимости от времени, за их незабываемым купанием в реке.',
          },
          {
            type: 'Сафари',
            title: 'Сафари в национальном парке Миннерия',
            description:
              'Отправьтесь в увлекательное джип сафари по национальному парку Миннерия, известному «Сбором слонов» одним из крупнейших скоплений диких слонов в Азии. Увидите слонов, оленей, буйволов и разнообразных птиц.',
          },
          {
            type: 'Проживание',
            title: 'Fresco Water Villa  Сигирия',
            description: 'Ночь в Fresco Water Villa (или подобном).',
            extra: ['Завтрак и ужин включены'],
          },
        ],
      },
      {
        title: 'От Сигирии до Канди  Культурное наследие',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Скальная крепость Сигирия',
            description:
              'Подниметесь на крепость Львиной скалы Сигирия, объект ЮНЕСКО королевский дворец V века, возвышающийся над джунглями. Откройте для себя древние фрески, Зеркальную стену и панорамный вид с вершины.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Храм Зуба Будды',
            description:
              'Посетите Шри Далада Малигава в Канди один из самых священных буддийских храмов в мире. Понаблюдайте за традиционными ритуалами и полюбуйтесь красивой канди архитектурой храма.',
          },
          {
            type: 'Культурная программа',
            title: 'Танцевальное шоу Канди',
            description:
              'Насладитесь вечерним танцевальным представлением с традиционными канди барабанами, хождением по огню и яркими костюмами, демонстрирующими богатое художественное наследие Шри Ланки.',
          },
          {
            type: 'Проживание',
            title: 'Hotel Topaz  Канди',
            description: 'Ночь в Hotel Topaz (или подобном).',
            extra: ['Завтрак и ужин включены', 'Отель 4 звезды'],
          },
        ],
      },
      {
        title: 'От Канди до Нувара Элии  Живописный чайный край',
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
              'Остановка у водопада Рамбода одного из самых высоких водопадов Шри Ланки, окружённого живописными чайными плантациями и прохладным горным воздухом.',
          },
          {
            type: 'Чайный опыт',
            title: 'Посещение чайной фабрики и плантации',
            description:
              'Узнайте, как производится всемирно известный цейлонский чай от листа до чашки. Пройдитесь по пышным чайным плантациям и попробуйте свежий чай в горной местности Шри Ланки.',
          },
          {
            type: 'Проживание',
            title: 'Hotel Yara Nuwara Eliya',
            description: 'Ночь в Yara Nuwara Eliya (или подобном).',
            extra: ['Завтрак и ужин включены', 'Отель 4 звезды'],
          },
        ],
      },
      {
        title: 'От Нувара Элии до Эллы  Горные пейзажи',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Мост Девяти Арок',
            description:
              'Величественный мост Девяти Арок одна из многих причин остановиться здесь. Этот впечатляющий мост между Эллой и станцией Демодара одно из инженерных чудес начала XX века.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Малый пик Адама',
            description:
              'Высотой 1141 м, подъём от входа занимает 30 to 45 минут. Виды с вершины невероятны панорама на 360 градусов с проплывающими облаками настоящее удовольствие для глаз.',
          },
          {
            type: 'Проживание',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Проживание в Oak Ray Ella Gap Hotel или подобном с полупансионом.',
            extra: ['Отель 4 звезды (Премиум)', 'Отдельная ванная комната'],
          },
        ],
      },
      {
        title: 'От Удавалаве до Юго Западного побережья  Река и охрана природы',
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
              'Насладитесь живописным лодочным сафари через мангровые леса и небольшие острова реки Маду. Познакомьтесь с местным выращиванием корицы и разнообразной флорой и фауной водно болотных угодий.',
          },
        ],
      },
    ],
  },
  nl: {
    title: 'Sri Lanka Privatreise  5 Tage | Kulturerbe, Hugelland & Wildlife Safari',
    description:
      'Erleben Sie Sri Lanka in 5 unvergesslichen Tagen mit antiken Stadten, UNESCO Welterbestatten, malerischen Teeplantagen, spannenden Wildlife Safaris und entspannten Kustenerlebnissen.',
    duration: '5 Tage',
    persons: '1-20 Personen',
    tourType: 'Rundreise',
    overview:
      'Erleben Sie die Highlights Sri Lankas auf dieser ausgewogenen 5 tagigen Privatreise. Reisen Sie durch das Kulturdreieck, erkunden Sie die Felsenfestung Sigiriya, besuchen Sie den heiligen Zahntempel in Kandy, fahren Sie durch die nebligen Teeplantagen von Nuwara Eliya, erleben Sie eine spannende Safari im Udawalawe Nationalpark und entspannen Sie an der wunderschonen Sudwestkuste. Mit privatem Transport, einem erfahrenen englischsprachigen Fahrer und komfortablen Unterkunften bietet diese Reise die ideale Mischung aus Kultur, Natur, Tierwelt und Erholung  perfekt fur Paare, Familien und kleine Gruppen.',
    includes: PACKAGE_INCLUDES.nl,
    excludes: PACKAGE_EXCLUDES.nl,
    seoIntro:
      'Funf Tage erschliessen Sri Lankas Kultur Dreieck, das Hugelland und den Wildtier Korridor auf einer einzigen privaten Reise. Von den Elefanten in Pinnawala und den Ansammlungen in Minneriya bei Sigiriya uber den Aufstieg zum Lowenfelsen, die Zahntempel Zeremonien in Kandy, die Teeplantagen von Nuwara Eliya bis zu einer Safari in Udawalawe oder an der Sudkuste verbindet diese Route von Sundown Tours UNESCO Kulturerbe mit hautnahen Erlebnissen. Ihr Fahrer Guide ubernimmt die kurvigen Bergstrassen und die fruhen Safari Starts, wahrend Sie in einem klimatisierten Fahrzeug mit unbegrenzter Kilometerleistung reisen. Die Unterkunft kann auf Wunsch in Ihrer bevorzugten Sternekategorie auf Halbpension organisiert werden; Eintrittsgebuhren halten wir separat, damit Sie die optionalen Stopps selbst steuern. Perfekt fur Paare und Familien, die mehr Tiefgang als bei einer Vier Tage Tour wunschen, ohne sich fur eine ganze Woche zu binden.',
    highlights: [
      'Sigiriya Felsenfestung, Elefanten Safari in Minneriya und Hohepunkte des Kultur Dreiecks',
      'Zahntempel in Kandy, Gewurzgarten und traditionelle Tanzvorfuhrung',
      'Teeland Nuwara Eliya, Ramboda Wasserfalle und malerische Aussichtspunkte im Hochland',
      'Wildtier Safari in Udawalawe oder an der Sudkuste sowie Besuch eines Schildkroten Schutzprojekts',
      'Flexibler Privattransport mit englischsprachigem Fahrer Guide und unbegrenzter Kilometerleistung',
    ],
    faq: [
      {
        q: 'Ist die Hotelunterkunft im Preis der 5 tagigen Tour enthalten?',
        a: 'Ja. Ausgewahlte 4 Sterne Hotels mit taglichem Fruhstuck und Abendessen (Halbpension) sind im Paket enthalten.',
      },
      {
        q: 'Welchen Safaripark besuchen wir  Minneriya, Udawalawe oder Yala?',
        a: 'Tag 1 fuhrt je nach Saison nach Minneriya oder Kaudulla fur Elefantenansammlungen. An spateren Tagen nutzen wir Udawalawe oder einen Park an der Sudkuste, abhangig von Ihrer Route und Parkschliessungen  wir bestatigen die beste Option fur Ihre Reisedaten.',
      },
      {
        q: 'Wie viel Fahrzeit liegt zwischen Sigiriya, Kandy und der Sudkuste?',
        a: 'Rechnen Sie mit 3 to 5 Stunden an den langsten Fahrtagen. Wir unterbrechen die Fahrten mit Gewurzgarten, Aussichtspunkten und Essenspausen, damit das Tempo fur Familien und Senioren angenehm bleibt.',
      },
    ],
    days: [
      {
        title: 'Flughafen nach Sigiriya  Elefanten & Safari Abenteuer',
        activities: [
          {
            type: 'Ankunft',
            title: 'Flughafenabholung',
            description:
              'Treffen Sie Ihren professionellen Fahrer am Flughafen Bandaranaike und beginnen Sie Ihre private Sri Lanka Reise in Richtung Kulturdreieck.',
          },
          {
            type: 'Tiererlebnis',
            title: 'Pinnawala Elefantenwaisenhaus',
            description:
              'Besuchen Sie das Pinnawala Elefantenwaisenhaus, ein bekanntes Schutzzentrum fur gerettete und verwaiste Elefanten. Beobachten Sie die Tiere aus der Nahe und  je nach Zeitpunkt  ihr unvergessliches Bad im Fluss.',
          },
          {
            type: 'Safari',
            title: 'Safari im Minneriya Nationalpark',
            description:
              'Erleben Sie eine spannende 4x4 Jeep Safari im Minneriya Nationalpark, bekannt fur „The Gathering"  eine der grossten Ansammlungen wilder Elefanten in Asien. Entdecken Sie Elefanten, Hirsche, Buffel und eine vielfaltige Vogelwelt.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Ubernachtung in der Fresco Water Villa (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Sigiriya nach Kandy  Kulturerbe',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Sigiriya Felsenfestung',
            description:
              'Besteigen Sie die UNESCO gelistete Lowenfelsen Festung Sigiriya, einen im 5. Jahrhundert errichteten Konigspalast, der dramatisch uber den Dschungelebenen aufragt. Entdecken Sie antike Fresken, die Spiegelwand und den Panoramablick vom Gipfel.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den Zahntempel in Kandy, einen der heiligsten buddhistischen Tempel der Welt. Erleben Sie traditionelle Rituale und bewundern Sie die schone kandyanische Architektur.',
          },
          {
            type: 'Kulturerlebnis',
            title: 'Kandyanische Tanzshow',
            description:
              'Geniessen Sie am Abend eine Kulturshow mit traditioneller kandyanischer Trommelmusik, Feuerlauf und farbenprachtigen Kostumen, die Sri Lankas reiches kunstlerisches Erbe zeigen.',
          },
          {
            type: 'Unterkunft',
            title: 'Hotel Topaz  Kandy',
            description: 'Ubernachtung im Hotel Topaz (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Kandy nach Nuwara Eliya  Malerisches Teeland',
        activities: [
          {
            type: 'Natur',
            title: 'Royal Botanical Gardens Peradeniya',
            description:
              'Erkunden Sie einen der schonsten botanischen Garten Asiens mit exotischen Orchideen, hohen Palmenallee, Heilpflanzen und wunderschon angelegten Anlagen am Mahaweli Fluss.',
          },
          {
            type: 'Natur',
            title: 'Ramboda Wasserfall',
            description:
              'Halten Sie an den Ramboda Wasserfallen, einem der hochsten Wasserfalle Sri Lankas, umgeben von malerischen Teeplantagen und kuhler Bergluft.',
          },
          {
            type: 'Tee Erlebnis',
            title: 'Besuch einer Teefabrik & Plantage',
            description:
              'Erfahren Sie, wie der weltberuhmte Ceylon Tee vom Blatt bis zur Tasse hergestellt wird. Spazieren Sie durch uppige Teeplantagen und geniessen Sie eine frische Tee Verkostung im Hochland Sri Lankas.',
          },
          {
            type: 'Unterkunft',
            title: 'Hotel Yara Nuwara Eliya',
            description: 'Ubernachtung im Yara Nuwara Eliya (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya nach Ella  Bergpanorama',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Nine Arch Bridge',
            description:
              'Die imposante Nine Arch Bridge ist einer der Hauptgrunde fur einen Besuch. Diese beeindruckende Brucke zwischen Ella und der Station Demodara zahlt zu den technischen Meisterleistungen des fruhen 20. Jahrhunderts.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Little Adam’s Peak',
            description:
              'Mit einer Hohe von 1.141 m dauert der Aufstieg vom Eingang aus etwa 30 to 45 minuten. Der Blick vom Gipfel ist unglaublich  ein 360 Grad Panorama mit vorbeiziehenden Wolken ist ein wahres Erlebnis.',
          },
          {
            type: 'Unterkunft',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Unterkunft im Oak Ray Ella Gap Hotel oder ahnlich  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad'],
          },
        ],
      },
      {
        title: 'Udawalawe zur Sudwestkuste  Fluss & Naturschutz',
        activities: [
          {
            type: 'Naturschutz',
            title: 'Meeresschildkroten Schutzprojekt',
            description:
              'Besuchen Sie ein Meeresschildkroten Schutzzentrum an der Sudkuste und erfahren Sie mehr uber den Schutz der Meeresfauna, Brutprogramme und Rehabilitationsmassnahmen.',
          },
          {
            type: 'Bootssafari',
            title: 'Bootssafari auf dem Madu Fluss',
            description:
              'Geniessen Sie eine malerische Bootssafari durch die Mangrovenwalder und kleinen Inseln des Madu Flusses. Entdecken Sie den lokalen Zimtanbau und die vielfaltige Feuchtgebietswelt.',
          },
        ],
      },
    ],
  }
};
