import type { TourContent } from './localize';
import { PACKAGE_EXCLUDES, PACKAGE_INCLUDES } from './package-inclusions';

/**
 * 6 day Sri Lanka round tour (id: tour6).
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
    overview: `Discover the highlights of Sri Lanka in this perfectly balanced 6 day private round tour. 
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
            image: 'assets/img/5daysTours/33.jpg',
          },
          {
            type: 'Safari',
            title: { title: 'Minneriya National Park Safari', icon: 'fa-leaf', color: '#8e44ad' },
            description:
              'Enjoy a thrilling 4x4 jeep safari in Minneriya National Park, famous for “The Gathering” one of Asia’s largest wild elephant congregations. Spot elephants, deer, buffalo and diverse bird species.',
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
            title: { title: 'Ramboda Falls Hotel', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Ramboda Falls Hotel (or similar).',
            image: 'assets/img/5daysTours/gn4ipm14don7nlmrz52v.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 4,
        title: 'Nuwara Eliya to Yala  Wildlife Encounter',
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
            title: { title: 'Grand Tamarind Lake (or similar) HB Basis', icon: 'fa-hotel', color: '#2c3e50' },
            description: 'Accommodation in Grand Tamarind Lake or Similar hotel HB Basis',
            image: 'assets/img/7daystour/lrqee4ssqh6w9efbewzi.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 5,
        title: 'Yala to South West Coast  River & Conservation',
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
            description: 'Accommodation in Somerset Mirissa Hotel or Similar hotel HB Basis',
            image: 'assets/img/5daystour/35.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Breakfast', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 6,
        title: 'Departure from South West Coast  Conservation & Safari',
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
      'Six days gives you Sri Lanka\'s cultural triangle, misty tea country, leopard territory and the palm fringed south coast without the pace of a marathon week. This private round tour opens with Pinnawala elephants and a Minneriya jeep safari near Sigiriya, then climbs the Lion Rock fortress and Kandy\'s Sacred Tooth Relic before winding through Peradeniya Gardens, Ramboda Falls and working tea estates in Nuwara Eliya. Day four delivers a Yala National Park 4x4 safari; the final stretch swaps wildlife for Mirissa viewpoints, Dondra Head lighthouse, sea turtle conservation and a Madu River mangrove boat ride. Sundown Tours schedules driving to protect your energy at rock climbs and early safari starts. Your English speaking chauffeur handles navigation in a private air conditioned vehicle with unlimited mileage. Hotels can be arranged on half  board in 3 to 4 star properties; entrance fees and lunches stay flexible so you choose which temples, parks and restaurants matter most.',
    highlights: [
      'Minneriya elephant gathering safari and Sigiriya Lion Rock UNESCO ascent',
      'Kandy Temple of the Tooth, cultural dance show and Peradeniya Botanical Gardens',
      'Nuwara Eliya tea factory visit, Ramboda Falls and scenic hill country drives',
      'Yala National Park jeep safari for elephants, leopards and coastal wetlands',
      'Mirissa coast, Dondra lighthouse, turtle hatchery and Madu River boat safari',
    ],
    whoIsFor:
      'Ideal for couples, families and small groups who want culture, wildlife and beaches in under a week without self driving. Moderate fitness helps for Sigiriya; we can suggest lighter viewpoints for seniors.',
    bestTimeNote:
      'year round, but December to April offers driest weather on the south coast and reliable Yala access. May to September suits the Cultural Triangle; we substitute Udawalawe if Yala closes for maintenance.',
    faq: [
      {
        q: 'Is hotel accommodation included in the 6 day tour price?',
        a: 'Yes. Selected 4 Star hotels with daily breakfast and dinner (Half Board) are included in the package.',
      },
      {
        q: 'Which elephant safari do we visit Minneriya or Kaudulla?',
        a: 'We use Minneriya or nearby Kaudulla depending on the seasonal elephant gathering. Your driver confirms the best park for your travel dates to maximise wild elephant sightings.',
      },
      {
        q: 'Can this tour start from Colombo instead of the airport?',
        a: 'Yes. We can pick up at Bandaranaike International Airport, any Colombo hotel or the south coast and drop you at your preferred exit point on Day 6.',
      },
    ],
  },
  de: {
    title: 'Sri Lanka Privatreise  6 Tage | Kulturerbe, Hugelland & Wildlife Safari',
    description:
      'Erleben Sie Sri Lanka in 6 unvergesslichen Tagen mit antiken Stadten, UNESCO Welterbestatten, malerischen Teeplantagen, spannenden Wildlife Safaris und entspannten Kustenerlebnissen.',
    duration: '6 Tage',
    persons: '2-20 Personen',
    tourType: 'Rundreise',
    overview:
      'Erleben Sie die Highlights Sri Lankas auf dieser ausgewogenen 6 tagigen Privatreise. Reisen Sie durch das Kulturdreieck, erkunden Sie die Felsenfestung Sigiriya, besuchen Sie den heiligen Zahntempel in Kandy, fahren Sie durch die nebligen Teeplantagen von Nuwara Eliya, erleben Sie eine spannende Safari im Udawalawe Nationalpark und entspannen Sie an der wunderschonen Sudwestkuste. Mit privatem Transport, einem erfahrenen englischsprachigen Fahrer und komfortablen Unterkunften bietet diese Reise die ideale Mischung aus Kultur, Natur, Tierwelt und Erholung  perfekt fur Paare, Familien und kleine Gruppen.',
    includes: PACKAGE_INCLUDES.de,
    excludes: PACKAGE_EXCLUDES.de,
    seoIntro:
      'Sechs Tage bieten Ihnen Sri Lankas Kultur Dreieck, das nebelige Teeland, Leopardengebiete und die von Palmen gesaumte Sudkuste, ohne das Tempo einer Marathonwoche. Diese private Rundreise beginnt mit den Elefanten von Pinnawala und einer Jeep Safari in Minneriya bei Sigiriya, fuhrt dann zum Aufstieg auf den Lowenfelsen und zur heiligen Zahnreliquie in Kandy, bevor es weiter durch die Peradeniya Garten, die Ramboda Wasserfalle und aktive Teeplantagen in Nuwara Eliya geht. Am vierten Tag folgt eine 4x4 Safari im Yala Nationalpark; auf der letzten Etappe stehen statt Tierwelt die Aussichtspunkte von Mirissa, der Leuchtturm Dondra Head, der Schutz von Meeresschildkroten und eine Bootstour durch die Mangroven des Madu Flusses auf dem Programm. Sundown Tours plant die Fahrzeiten so, dass Ihre Energie fur die Felsbesteigung und die fruhen Safari Starts erhalten bleibt. Ihr englischsprachiger Chauffeur ubernimmt die Navigation in einem privaten klimatisierten Fahrzeug mit unbegrenzter Kilometerleistung. Die Hotels konnen auf Halbpension in der 3 to 4 Sterne Kategorie organisiert werden; Eintrittsgebuhren und Mittagessen bleiben flexibel, sodass Sie entscheiden, welche Tempel, Parks und Restaurants Ihnen am wichtigsten sind.',
    highlights: [
      'Elefanten Safari in Minneriya und Aufstieg zum UNESCO Lowenfelsen Sigiriya',
      'Zahntempel in Kandy, kulturelle Tanzshow und Peradeniya Botanical Gardens',
      'Besuch einer Teefabrik in Nuwara Eliya, Ramboda Wasserfalle und malerische Fahrten durchs Hugelland',
      'Jeep Safari im Yala Nationalpark auf der Suche nach Elefanten, Leoparden und Kustenfeuchtgebieten',
      'Kuste von Mirissa, Leuchtturm Dondra, Schildkroten Aufzuchtstation und Bootssafari auf dem Madu Fluss',
    ],
    whoIsFor:
      'Ideal fur Paare, Familien und kleine Gruppen, die Kultur, Tierwelt und Strande in weniger als einer Woche ohne Selbstfahren erleben mochten. Moderate Fitness ist fur Sigiriya hilfreich; fur Senioren schlagen wir gerne leichtere Aussichtspunkte vor.',
    bestTimeNote:
      'Ganzjahrig moglich, doch Dezember to April bietet das trockenste Wetter an der Sudkuste und zuverlassigen Zugang zu Yala. Mai to September eignet sich fur das Kultur Dreieck; bei Schliessung von Yala wegen Wartungsarbeiten weichen wir auf Udawalawe aus.',
    faq: [
      {
        q: 'Ist die Hotelunterkunft im Preis der 6 tagigen Tour enthalten?',
        a: 'Ja. Ausgewahlte 4 Sterne Hotels mit taglichem Fruhstuck und Abendessen (Halbpension) sind im Paket enthalten.'
      },
      {
        q: 'Welche Elefanten Safari besuchen wir  Minneriya oder Kaudulla?',
        a: 'Wir nutzen Minneriya oder das nahegelegene Kaudulla, je nach saisonaler Elefantenansammlung. Ihr Fahrer bestatigt den besten Park fur Ihre Reisedaten, um die Sichtungschancen wilder Elefanten zu maximieren.',
      },
      {
        q: 'Kann diese Tour in Colombo statt am Flughafen beginnen?',
        a: 'Ja. Wir holen Sie am Flughafen Bandaranaike, in jedem Hotel in Colombo oder an der Sudkuste ab und bringen Sie am 6. Tag zu Ihrem gewunschten Zielort.',
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
            type: 'Dorferlebnis',
            title: 'Dorftour Hiriwadunna',
            description: 'Erleben Sie das authentische landliche Leben Sri Lankas.',
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
            title: 'Ramboda Falls Hotel',
            description: 'Ubernachtung im Ramboda Falls Hotel (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya nach Yala  Begegnung mit der Tierwelt',
        activities: [
          {
            type: 'Safari',
            title: 'Safari im Yala Nationalpark',
            description:
              'Erleben Sie eine aufregende Safari im Yala Nationalpark, einem der besten Orte Sri Lankas, um wilde Elefanten in ihrem naturlichen Lebensraum zu beobachten. Entdecken Sie Elefanten, Krokodile, Hirsche und Vogelwelt in den weiten Graslandschaften.',
          },
          {
            type: 'Unterkunft',
            title: 'Grand Tamarind Lake (oder ahnlich)  Halbpension',
            description: 'Unterkunft im Grand Tamarind Lake oder ahnlichem Hotel  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Yala zur Sudwestkuste  Fluss & Naturschutz',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Ein malerischer Ort in Mirissa mit atemberaubendem Blick auf hohe Kokospalmen und den Indischen Ozean.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Leuchtturm Dondra Head',
            description:
              'Am sudlichsten Punkt Sri Lankas gelegen, bietet dieser Leuchtturm einen Panoramablick auf den Ozean und historischen Charme.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Mirissa Beach',
            description: 'Ein tropisches Paradies, bekannt fur goldenen Sand, klares Wasser und lebendige Sonnenuntergange.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Unterkunft im Somerset Mirissa Hotel oder ahnlichem Hotel  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Abreise von der Sudwestkuste  Naturschutz & Safari',
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
    title: 'Circuit Prive de 6 Jours au Sri Lanka | Patrimoine Culturel, Hauts Plateaux & Safari Animalier',
    description:
      'Decouvrez le Sri Lanka en 6 jours inoubliables : cites antiques, sites classes a l’UNESCO, plantations de the pittoresques, safaris palpitants et moments de detente sur la cote.',
    duration: '6 jours',
    persons: '2 a 20 personnes',
    tourType: 'Circuit',
    overview:
      'Decouvrez les incontournables du Sri Lanka lors de ce circuit prive de 6 jours parfaitement equilibre. Traversez le Triangle Culturel, explorez la forteresse rocheuse de Sigiriya, decouvrez le sacre Temple de la Dent a Kandy, parcourez les plantations de the brumeuses de Nuwara Eliya, profitez d’un safari palpitant dans le parc national d’Udawalawe et detendez vous le long de la magnifique cote sud ouest. Avec un transport prive, un chauffeur guide anglophone experimente et des hebergements confortables, ce circuit offre la combinaison ideale de culture, de nature, de faune et de detente  parfait pour les couples, les familles et les petits groupes.',
    includes: PACKAGE_INCLUDES.fr,
    excludes: PACKAGE_EXCLUDES.fr,
    seoIntro:
      'Six jours permettent de decouvrir le triangle culturel du Sri Lanka, le pays du the embrume, le territoire des leopards et la cote sud bordee de palmiers, sans le rythme d’une semaine marathon. Ce circuit prive debute avec les elephants de Pinnawala et un safari en jeep a Minneriya pres de Sigiriya, puis l’ascension de la forteresse du Rocher du Lion et la Relique de la Dent Sacree a Kandy, avant de traverser les jardins de Peradeniya, les chutes de Ramboda et des plantations de the en activite a Nuwara Eliya. Le quatrieme jour propose un safari en 4x4 dans le parc national de Yala ; la derniere etape remplace la faune par les points de vue de Mirissa, le phare de Dondra Head, la conservation des tortues marines et une balade en bateau dans les mangroves de la riviere Madu. Sundown Tours planifie les trajets pour preserver votre energie lors des ascensions et des departs matinaux en safari. Votre chauffeur anglophone gere la navigation dans un vehicule prive climatise au kilometrage illimite. Les hotels peuvent etre organises en demi pension dans des etablissements 3-4 etoiles ; les frais d’entree et les dejeuners restent flexibles afin que vous choisissiez les temples, parcs et restaurants qui vous tiennent le plus a coeur.',
    highlights: [
      'Safari aux elephants a Minneriya et ascension du Rocher du Lion classe UNESCO a Sigiriya',
      'Temple de la Dent a Kandy, spectacle de danse traditionnelle et jardins botaniques de Peradeniya',
      'Visite d’une fabrique de the a Nuwara Eliya, chutes de Ramboda et routes panoramiques dans les hauts plateaux',
      'Safari en jeep dans le parc national de Yala a la recherche d’elephants, de leopards et de zones humides cotieres',
      'Cote de Mirissa, phare de Dondra, ecloserie de tortues et safari en bateau sur la riviere Madu',
    ],
    whoIsFor:
      'Ideal pour les couples, familles et petits groupes qui souhaitent culture, faune et plages en moins d’une semaine sans conduire eux memes. Une forme physique moderee aide pour Sigiriya ; nous pouvons proposer des points de vue plus legers pour les seniors.',
    bestTimeNote:
      'Toute l’annee, mais decembre avril offre le temps le plus sec sur la cote sud et un acces fiable a Yala. Mai septembre convient au Triangle culturel ; nous remplacons par Udawalawe si Yala ferme pour entretien.',
    faq: [
      {
        q: 'L’hebergement hotelier est il inclus dans le prix du circuit de 6 jours ?',
        a: 'Oui. Des hotels 4 etoiles selectionnes avec petit dejeuner et diner (demi pension) sont inclus dans le forfait.',
      },
      {
        q: 'Quel safari aux elephants visitons nous Minneriya ou Kaudulla ?',
        a: 'Nous utilisons Minneriya ou le proche parc de Kaudulla selon le rassemblement saisonnier des elephants. Votre chauffeur confirme le meilleur parc pour vos dates de voyage afin de maximiser les observations d’elephants sauvages.',
      },
      {
        q: 'Ce circuit peut il debuter a Colombo plutot qu’a l’aeroport ?',
        a: 'Oui. Nous pouvons vous prendre en charge a l’aeroport international de Bandaranaike, dans tout hotel de Colombo ou sur la cote sud, et vous deposer au point de sortie de votre choix le jour 6.',
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
            type: 'Experience villageoise',
            title: 'Visite du village de Hiriwadunna',
            description: 'Decouvrez la vie rurale authentique du Sri Lanka.',
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
            title: 'Ramboda Falls Hotel',
            description: 'Nuit au Ramboda Falls Hotel (ou similaire).',
            extra: ['Petit dejeuner & diner inclus', 'Hotel 4 etoiles'],
          },
        ],
      },
      {
        title: 'De Nuwara Eliya a Yala  Rencontre avec la faune',
        activities: [
          {
            type: 'Safari',
            title: 'Safari au parc national de Yala',
            description:
              'Partez pour un safari palpitant dans le parc national de Yala, l’un des meilleurs endroits du Sri Lanka pour observer les elephants sauvages dans leur habitat naturel. Reperez elephants, crocodiles, cerfs et oiseaux dans les vastes plaines herbeuses.',
          },
          {
            type: 'Hebergement',
            title: 'Grand Tamarind Lake (ou similaire)  demi pension',
            description: 'Hebergement au Grand Tamarind Lake ou hotel similaire  demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Salle de bain privee', 'Diner'],
          },
        ],
      },
      {
        title: 'De Yala a la cote sud ouest  Riviere & preservation',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Un site pittoresque a Mirissa offrant une vue imprenable sur des cocotiers luxuriants et l’ocean Indien.',
          },
          {
            type: 'Visite guidee',
            title: 'Phare de Dondra Head',
            description: 'Situe a la pointe sud du Sri Lanka, il offre une vue panoramique sur l’ocean et un charme historique.',
          },
          {
            type: 'Visite guidee',
            title: 'Plage de Mirissa',
            description: 'Un paradis tropical repute pour son sable dore, ses eaux cristallines et ses couchers de soleil eclatants.',
          },
          {
            type: 'Hebergement',
            title: 'Somerset Mirissa Hotel',
            description: 'Hebergement au Somerset Mirissa Hotel ou hotel similaire  demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Petit dejeuner', 'Salle de bain privee', 'Diner'],
          },
        ],
      },
      {
        title: 'Depart de la cote sud ouest  Preservation & safari',
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
    title: 'Tour Privato di 6 Giorni in Sri Lanka | Patrimonio Culturale, Colline e Safari nella Fauna Selvatica',
    description:
      'Scoprite lo Sri Lanka in 6 giorni indimenticabili tra citta antiche, siti UNESCO, pittoresche piantagioni di te, emozionanti safari nella fauna selvatica ed esperienze costiere rilassanti.',
    duration: '6 giorni',
    persons: '2-20 persone',
    tourType: 'Tour',
    overview:
      'Scoprite le meraviglie dello Sri Lanka in questo tour privato di 6 giorni perfettamente equilibrato. Attraversate il Triangolo Culturale, esplorate la Fortezza Rocciosa di Sigiriya, visitate il sacro Tempio della Reliquia del Dente a Kandy, percorrete le nebbiose piantagioni di te di Nuwara Eliya, godetevi un emozionante safari nel Parco Nazionale di Udawalawe e rilassatevi lungo la splendida costa sud occidentale. Con trasporto privato, un autista guida di lingua inglese esperto e soluzioni di alloggio confortevoli, questo tour offre la combinazione ideale di cultura, natura, fauna selvatica e relax, perfetto per coppie, famiglie e piccoli gruppi.',
    includes: PACKAGE_INCLUDES.it,
    excludes: PACKAGE_EXCLUDES.it,
    seoIntro:
      'Sei giorni vi regalano il triangolo culturale dello Sri Lanka, le nebbiose piantagioni di te, il territorio dei leopardi e la costa meridionale orlata di palme, senza il ritmo di una settimana maratona. Questo tour privato inizia con gli elefanti di Pinnawala e un safari in jeep a Minneriya vicino a Sigiriya, poi sale alla fortezza del Lion Rock e al Tempio della Sacra Reliquia del Dente a Kandy, prima di attraversare i Giardini di Peradeniya, le cascate di Ramboda e le piantagioni di te attive di Nuwara Eliya. Il quarto giorno offre un safari in 4x4 nel Parco Nazionale di Yala; l’ultima tappa sostituisce la fauna con i punti panoramici di Mirissa, il faro di Dondra Head, la conservazione delle tartarughe marine e una gita in barca tra le mangrovie del fiume Madu. Sundown Tours pianifica i trasferimenti per preservare le vostre energie durante le scalate e le partenze anticipate per il safari. Il vostro autista di lingua inglese gestisce la navigazione in un veicolo privato climatizzato con chilometraggio illimitato. Gli hotel possono essere organizzati in mezza pensione in strutture da 3-4 stelle; i biglietti d’ingresso e i pranzi restano flessibili, cosi potete scegliere quali templi, parchi e ristoranti preferite.',
    highlights: [
      'Safari agli elefanti a Minneriya e scalata al Lion Rock, patrimonio UNESCO di Sigiriya',
      'Tempio del Dente a Kandy, spettacolo di danza tradizionale e Giardini Botanici di Peradeniya',
      'Visita a una fabbrica di te a Nuwara Eliya, cascate di Ramboda e percorsi panoramici tra le colline',
      'Safari in jeep nel Parco Nazionale di Yala alla ricerca di elefanti, leopardi e zone umide costiere',
      'Costa di Mirissa, faro di Dondra, vivaio delle tartarughe e safari in barca sul fiume Madu',
    ],
    whoIsFor:
      'Ideale per coppie, famiglie e piccoli gruppi che desiderano cultura, fauna selvatica e spiagge in meno di una settimana senza guidare. Una forma fisica moderata e utile per Sigiriya; per gli anziani possiamo suggerire punti panoramici piu accessibili.',
    bestTimeNote:
      'Tutto l’anno, ma dicembre aprile offre il clima piu secco sulla costa meridionale e un accesso affidabile a Yala. Maggio settembre e adatto al Triangolo Culturale; sostituiamo con Udawalawe se Yala chiude per manutenzione.',
    faq: [
      {
        q: 'L’alloggio in hotel e incluso nel prezzo del tour di 6 giorni?',
        a: 'Si. Hotel 4 stelle selezionati con colazione e cena (mezza pensione) sono inclusi nel pacchetto.',
      },
      {
        q: 'Quale safari agli elefanti visitiamo Minneriya o Kaudulla?',
        a: 'Utilizziamo Minneriya o il vicino Kaudulla in base al raduno stagionale degli elefanti. Il vostro autista confermera il parco migliore per le vostre date di viaggio per massimizzare gli avvistamenti di elefanti selvatici.',
      },
      {
        q: 'Questo tour puo iniziare da Colombo invece che dall’aeroporto?',
        a: 'Si. Possiamo venire a prendervi all’aeroporto di Bandaranaike, in qualsiasi hotel di Colombo o sulla costa meridionale e riportarvi nel luogo desiderato il sesto giorno.',
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
            type: 'Esperienza di villaggio',
            title: 'Tour del villaggio di Hiriwadunna',
            description: 'Vivete l’autentica vita rurale dello Sri Lanka.',
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
            title: 'Ramboda Falls Hotel',
            description: 'Pernottamento al Ramboda Falls Hotel (o similare).',
            extra: ['Colazione e cena incluse', 'Hotel 4 stelle'],
          },
        ],
      },
      {
        title: 'Da Nuwara Eliya a Yala  Incontro con la Fauna Selvatica',
        activities: [
          {
            type: 'Safari',
            title: 'Safari nel Parco Nazionale di Yala',
            description:
              'Partite per un emozionante safari nel Parco Nazionale di Yala, uno dei luoghi migliori dello Sri Lanka per osservare gli elefanti selvatici nel loro habitat naturale. Avvistate elefanti, coccodrilli, cervi e uccelli tra le vaste praterie.',
          },
          {
            type: 'Alloggio',
            title: 'Grand Tamarind Lake (o similare)  mezza pensione',
            description: 'Alloggio al Grand Tamarind Lake o hotel simile  mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Bagno privato', 'Cena'],
          },
        ],
      },
      {
        title: 'Da Yala alla Costa Sud Occidentale  Fiume e Conservazione',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Un luogo pittoresco a Mirissa con una vista straordinaria su alte palme di cocco e l’Oceano Indiano.',
          },
          {
            type: 'Tour guidato',
            title: 'Faro di Dondra Head',
            description: 'Situato all’estremita meridionale dello Sri Lanka, offre una vista panoramica sull’oceano e un fascino storico.',
          },
          {
            type: 'Tour guidato',
            title: 'Spiaggia di Mirissa',
            description: 'Un paradiso tropicale famoso per la sabbia dorata, le acque cristalline e i vivaci tramonti.',
          },
          {
            type: 'Alloggio',
            title: 'Somerset Mirissa Hotel',
            description: 'Alloggio al Somerset Mirissa Hotel o hotel simile  mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Colazione', 'Bagno privato', 'Cena'],
          },
        ],
      },
      {
        title: 'Partenza dalla Costa Sud Occidentale  Conservazione e Safari',
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
    title: 'Circuito Privado de 6 Dias en Sri Lanka | Patrimonio Cultural, Colinas y Safari de Fauna Salvaje',
    description:
      'Descubra Sri Lanka en 6 dias inolvidables con ciudades antiguas, sitios declarados Patrimonio de la Humanidad, pintorescas plantaciones de te, emocionantes safaris de fauna y relajantes experiencias costeras.',
    duration: '6 dias',
    persons: '2-20 personas',
    tourType: 'Circuito',
    overview:
      'Descubra lo mas destacado de Sri Lanka en este circuito privado de 6 dias perfectamente equilibrado. Recorra el Triangulo Cultural, explore la Fortaleza Rocosa de Sigiriya, visite el sagrado Templo de la Reliquia del Diente en Kandy, atraviese las neblinosas plantaciones de te de Nuwara Eliya, disfrute de un emocionante safari en el Parque Nacional de Udawalawe y relajese en la hermosa costa suroeste. Con transporte privado, un conductor guia de habla inglesa experimentado y alojamientos comodos, este circuito ofrece la combinacion ideal de cultura, naturaleza, fauna y relax, perfecto para parejas, familias y grupos pequenos.',
    includes: PACKAGE_INCLUDES.es,
    excludes: PACKAGE_EXCLUDES.es,
    seoIntro:
      'Seis dias le ofrecen el triangulo cultural de Sri Lanka, las neblinosas montanas del te, el territorio de los leopardos y la costa sur bordeada de palmeras, sin el ritmo de una semana maraton. Este circuito privado comienza con los elefantes de Pinnawala y un safari en jeep en Minneriya cerca de Sigiriya, despues asciende a la fortaleza del Lion Rock y a la Reliquia del Diente Sagrado en Kandy, antes de recorrer los Jardines de Peradeniya, las cataratas de Ramboda y plantaciones de te en activo en Nuwara Eliya. El cuarto dia ofrece un safari en 4x4 por el Parque Nacional de Yala; el ultimo tramo sustituye la fauna por los miradores de Mirissa, el faro de Dondra Head, la conservacion de tortugas marinas y un paseo en barco por los manglares del rio Madu. Sundown Tours planifica los trayectos para preservar su energia en las subidas y las salidas tempranas de safari. Su chofer de habla inglesa se encarga de la navegacion en un vehiculo privado con aire acondicionado y kilometraje ilimitado. Los hoteles pueden organizarse en media pension en establecimientos de 3-4 estrellas; las entradas y los almuerzos se mantienen flexibles para que usted decida que templos, parques y restaurantes le interesan mas.',
    highlights: [
      'Safari de elefantes en Minneriya y ascenso al Lion Rock, Patrimonio de la Humanidad en Sigiriya',
      'Templo del Diente en Kandy, espectaculo de danza tradicional y Jardines Botanicos de Peradeniya',
      'Visita a una fabrica de te en Nuwara Eliya, cataratas de Ramboda y trayectos panoramicos por las colinas',
      'Safari en jeep por el Parque Nacional de Yala en busca de elefantes, leopardos y humedales costeros',
      'Costa de Mirissa, faro de Dondra, vivero de tortugas y safari en barco por el rio Madu',
    ],
    whoIsFor:
      'Ideal para parejas, familias y grupos pequenos que desean cultura, fauna y playas en menos de una semana sin conducir. Una forma fisica moderada ayuda en Sigiriya; para personas mayores podemos sugerir miradores mas accesibles.',
    bestTimeNote:
      'Disponible todo el ano, aunque diciembre abril ofrece el clima mas seco en la costa sur y un acceso fiable a Yala. Mayo septiembre es adecuado para el Triangulo Cultural; sustituimos por Udawalawe si Yala cierra por mantenimiento.',
    faq: [
      {
        q: 'El alojamiento en hotel esta incluido en el precio del circuito de 6 dias?',
        a: 'Si. Hoteles de 4 estrellas seleccionados con desayuno y cena (media pension) estan incluidos en el paquete.',
      },
      {
        q: 'Que safari de elefantes visitamos: Minneriya o Kaudulla?',
        a: 'Utilizamos Minneriya o el cercano Kaudulla segun la concentracion estacional de elefantes. Su conductor confirmara el mejor parque para sus fechas de viaje para maximizar las posibilidades de ver elefantes salvajes.',
      },
      {
        q: 'Puede este circuito comenzar en Colombo en lugar del aeropuerto?',
        a: 'Si. Podemos recogerle en el aeropuerto internacional de Bandaranaike, en cualquier hotel de Colombo o en la costa sur, y dejarle en el punto de salida que prefiera el dia 6.',
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
            type: 'Experiencia de aldea',
            title: 'Visita a la aldea de Hiriwadunna',
            description: 'Viva la autentica vida rural de Sri Lanka.',
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
            title: 'Ramboda Falls Hotel',
            description: 'Noche en el Ramboda Falls Hotel (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel de 4 estrellas'],
          },
        ],
      },
      {
        title: 'De Nuwara Eliya a Yala  Encuentro con la Fauna Salvaje',
        activities: [
          {
            type: 'Safari',
            title: 'Safari en el Parque Nacional de Yala',
            description:
              'Embarquese en un emocionante safari en el Parque Nacional de Yala, uno de los mejores lugares de Sri Lanka para ver elefantes salvajes en su habitat natural. Observe elefantes, cocodrilos, ciervos y aves en amplias praderas.',
          },
          {
            type: 'Alojamiento',
            title: 'Grand Tamarind Lake (o similar)  media pension',
            description: 'Alojamiento en Grand Tamarind Lake o hotel similar  media pension.',
            extra: ['Hotel de 4 estrellas (Premium)', 'Bano privado', 'Cena'],
          },
        ],
      },
      {
        title: 'De Yala a la Costa Suroeste  Rio y Conservacion',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Un lugar pintoresco en Mirissa con vistas impresionantes de altas palmeras de coco y el oceano Indico.',
          },
          {
            type: 'Visita guiada',
            title: 'Faro de Dondra Head',
            description: 'Situado en el extremo sur de Sri Lanka, ofrece vistas panoramicas del oceano y encanto historico.',
          },
          {
            type: 'Visita guiada',
            title: 'Playa de Mirissa',
            description: 'Un paraiso tropical conocido por su arena dorada, aguas cristalinas y vibrantes atardeceres.',
          },
          {
            type: 'Alojamiento',
            title: 'Somerset Mirissa Hotel',
            description: 'Alojamiento en el Somerset Mirissa Hotel o hotel similar  media pension.',
            extra: ['Hotel de 4 estrellas (Premium)', 'Desayuno', 'Bano privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Salida desde la Costa Suroeste  Conservacion y Safari',
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
    title: 'Prywatna Wycieczka 6 Dniowa po Sri Lance | Dziedzictwo Kulturowe, Wyzyny i Safari z Dzika Przyroda',
    description:
      'Odkryj Sri Lanke podczas 6 niezapomnianych dni pelnych starozytnych miast, obiektow UNESCO, malowniczych plantacji herbaty, emocjonujacych safari i relaksujacego wypoczynku na wybrzezu.',
    duration: '6 dni',
    persons: '2-20 osob',
    tourType: 'Wycieczka',
    overview:
      'Odkryj najwazniejsze atrakcje Sri Lanki podczas tej idealnie zbalansowanej 6 dniowej prywatnej wycieczki. Przemierz Trojkat Kulturowy, zwiedz Skalna Fortece Sigiriya, odwiedz swieta Swiatynie Zeba Buddy w Kandy, przejedz przez mgliste plantacje herbaty w Nuwara Eliya, przezyj emocjonujace safari w Parku Narodowym Udawalawe i odpocznij na przepieknym poludniowo zachodnim wybrzezu. Dzieki prywatnemu transportowi, doswiadczonemu kierowcy przewodnikowi mowiacemu po angielsku oraz komfortowym opcjom noclegowym ta wycieczka oferuje idealne polaczenie kultury, natury, dzikiej przyrody i relaksu  doskonala dla par, rodzin i malych grup.',
    includes: PACKAGE_INCLUDES.pl,
    excludes: PACKAGE_EXCLUDES.pl,
    seoIntro:
      'Szesc dni to Trojkat Kulturowy Sri Lanki, mgliste krainy herbaty, terytorium lampartow i poludniowe wybrzeze otoczone palmami, bez tempa maratonskiego tygodnia. Ta prywatna wycieczka zaczyna sie od sloni w Pinnawali i safari jeepem w Minneriya blisko Sigiriya, nastepnie prowadzi na szczyt fortecy Lion Rock i do Swietej Relikwii Zeba w Kandy, a potem przez Ogrody Peradeniya, wodospady Ramboda i dzialajace plantacje herbaty w Nuwara Eliya. Czwarty dzien to safari 4x4 w Parku Narodowym Yala; ostatni etap zamienia dzika przyrode na punkty widokowe w Mirissie, latarnie morska Dondra Head, ochrone zolwi morskich i przejazdzke lodzia przez namorzyny rzeki Madu. Sundown Tours planuje trasy tak, by zachowac Panstwa energie na wspinaczki i wczesne wyjazdy na safari. Anglojezyczny kierowca zajmuje sie nawigacja w prywatnym klimatyzowanym pojezdzie z nielimitowanym przebiegiem. Hotele mozna zorganizowac w formule half  board w obiektach 3-4 gwiazdkowych; oplaty za wstep i lunch pozostaja elastyczne, dzieki czemu sami wybieraja Panstwo, ktore swiatynie, parki i restauracje sa najwazniejsze.',
    highlights: [
      'Safari ze sloniami w Minneriya i wspinaczka na Lion Rock, obiekt UNESCO w Sigiriya',
      'Swiatynia Zeba w Kandy, tradycyjny pokaz tanca i Ogrody Botaniczne Peradeniya',
      'Wizyta w fabryce herbaty w Nuwara Eliya, wodospady Ramboda i widokowe trasy przez wzgorza',
      'Safari jeepem w Parku Narodowym Yala w poszukiwaniu sloni, lampartow i przybrzeznych mokradel',
      'Wybrzeze Mirissa, latarnia morska Dondra, wylegarnia zolwi i safari lodzia na rzece Madu',
    ],
    whoIsFor:
      'Idealna dla par, rodzin i malych grup, ktore chca doswiadczyc kultury, dzikiej przyrody i plaz w mniej niz tydzien bez samodzielnej jazdy. Umiarkowana kondycja pomaga przy Sigiriya; dla seniorow mozemy zaproponowac latwiejsze punkty widokowe.',
    bestTimeNote:
      'Dostepna caly rok, choc grudzien–kwiecien to najsuchsza pogoda na poludniowym wybrzezu i pewny dostep do Yala. Maj to wrzesien pasuje do Trojkata Kulturowego; jesli Yala jest zamknieta z powodu prac konserwacyjnych, zastepujemy ja Udawalawe.',
    faq: [
      {
        q: 'Czy zakwaterowanie w hotelu jest wliczone w cene 6 dniowej wycieczki?',
        a: 'Tak. Wybrane hotele 4 gwiazdkowe ze sniadaniem i kolacja (Half Board) sa wliczone w cene pakietu.',
      },
      {
        q: 'Ktore safari ze sloniami odwiedzamy  Minneriya czy Kaudulla?',
        a: 'Korzystamy z Minneriya lub sasiedniego Kaudulla, zaleznie od sezonowego zgromadzenia sloni. Kierowca potwierdzi najlepszy park na Panstwa daty podrozy, aby zmaksymalizowac szanse zobaczenia dzikich sloni.',
      },
      {
        q: 'Czy ta wycieczka moze zaczynac sie w Colombo, a nie na lotnisku?',
        a: 'Tak. Mozemy odebrac Panstwa z lotniska Bandaranaike, z kazdego hotelu w Colombo lub z poludniowego wybrzeza i odwiezc w wybrane miejsce 6. dnia.',
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
            type: 'Doswiadczenie wioski',
            title: 'Wycieczka do wioski Hiriwadunna',
            description: 'Poznaj autentyczne wiejskie zycie Sri Lanki.',
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
            title: 'Ramboda Falls Hotel',
            description: 'Nocleg w Ramboda Falls Hotel (lub podobnym).',
            extra: ['Sniadanie i kolacja wliczone', 'Hotel 4 gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Z Nuwara Eliya do Yali  Spotkanie z Dzika Przyroda',
        activities: [
          {
            type: 'Safari',
            title: 'Safari w Parku Narodowym Yala',
            description:
              'Wyrusz na emocjonujace safari w Parku Narodowym Yala, jednym z najlepszych miejsc na Sri Lance do obserwacji dzikich sloni w naturalnym srodowisku. Zobacz slonie, krokodyle, jelenie i ptaki na rozleglych trawiastych rowninach.',
          },
          {
            type: 'Nocleg',
            title: 'Grand Tamarind Lake (lub podobny)  wyzywienie HB',
            description: 'Nocleg w Grand Tamarind Lake lub podobnym hotelu  ze sniadaniem i kolacja.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Prywatna lazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Z Yali na Poludniowo Zachodnie Wybrzeze  Rzeka i Ochrona Przyrody',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Malownicze miejsce w Mirissa z zapierajacym dech widokiem na wysokie palmy kokosowe i Ocean Indyjski.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Latarnia morska Dondra Head',
            description: 'Polozona na najbardziej poludniowym punkcie Sri Lanki, oferuje panoramiczny widok na ocean i historyczny charakter.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Plaza Mirissa',
            description: 'Tropikalna rajska plaza znana ze zlotego piasku, czystej wody i barwnych zachodow slonca.',
          },
          {
            type: 'Nocleg',
            title: 'Somerset Mirissa Hotel',
            description: 'Nocleg w Somerset Mirissa Hotel lub podobnym hotelu  ze sniadaniem i kolacja.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Sniadanie', 'Prywatna lazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Wyjazd z Poludniowo Zachodniego Wybrzeza  Ochrona Przyrody i Safari',
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
    title: 'Частный тур на 6 дней по Шри Ланке | Культурное наследие, горная страна и сафари с дикой природой',
    description:
      'Откройте для себя Шри Ланку за 6 незабываемых дней с древними городами, объектами ЮНЕСКО, живописными чайными плантациями, увлекательными сафари и расслабляющим отдыхом на побережье.',
    duration: '6 дней',
    persons: '2-20 человек',
    tourType: 'Тур',
    overview:
      'Откройте для себя главные достопримечательности Шри Ланки в этом идеально сбалансированном частном туре на 6 дней. Проедьте через Культурный треугольник, исследуйте скальную крепость Сигирия, посетите священный Храм Зуба Будды в Канди, проедьте через туманные чайные плантации Нувара Элии, насладитесь увлекательным сафари в национальном парке Удавалаве и отдохните на прекрасном юго западном побережье. Благодаря частному транспорту, опытному англоговорящему водителю гиду и комфортному проживанию этот тур предлагает идеальное сочетание культуры, природы, дикой природы и отдыха идеально для пар, семей и небольших групп.',
    includes: PACKAGE_INCLUDES.ru,
    excludes: PACKAGE_EXCLUDES.ru,
    seoIntro:
      'Шесть дней дают вам Культурный треугольник Шри Ланки, туманные чайные горы, территорию леопардов и южное побережье, окружённое пальмами, без темпа марафонской недели. Этот частный тур начинается со слонов Пиннавелы и джип сафари в Миннерии рядом с Sigiriya, затем идёт восхождение на крепость Lion Rock и к Священной реликвии зуба в Канди, а после через сады Перадении, водопады Ramboda и действующие чайные плантации в Нувара Элии. Четвёртый день предлагает джип сафари 4x4 в национальном парке Яла; на последнем этапе дикую природу сменяют смотровые площадки Мириссы, маяк Dondra Head, охрана морских черепах и прогулка на лодке по мангровым зарослям реки Маду. Sundown Tours планирует переезды так, чтобы сохранить ваши силы для восхождений и ранних выездов на сафари. Ваш англоговорящий шофёр берёт на себя навигацию в частном кондиционированном автомобиле с неограниченным пробегом. Отели можно организовать на полупансионе в категории 3 to 4★; входные билеты и обеды остаются гибкими, чтобы вы сами выбирали, какие храмы, парки и рестораны для вас важнее.',
    highlights: [
      'Сафари к слонам в Миннерии и восхождение на объект ЮНЕСКО Lion Rock в Sigiriya',
      'Храм Зуба в Канди, культурное танцевальное шоу и ботанический сад Перадении',
      'Посещение чайной фабрики в Нувара Элии, водопады Ramboda и живописные дороги горной страны',
      'Джип сафари в национальном парке Яла в поисках слонов, леопардов и прибрежных водно болотных угодий',
      'Побережье Мириссы, маяк Dondra, инкубатор для черепах и лодочное сафари по реке Маду',
    ],
    whoIsFor:
      'Идеально для пар, семей и небольших групп, которые хотят увидеть культуру, дикую природу и пляжи менее чем за неделю без самостоятельного вождения. Умеренная физическая форма пригодится для Sigiriya; для пожилых людей мы можем предложить более лёгкие смотровые площадки.',
    bestTimeNote:
      'Доступно круглый год, но декабрь–апрель самая сухая погода на южном побережье и надёжный доступ к Яле. Май–сентябрь подходит для Культурного треугольника; при закрытии Ялы на техобслуживание мы заменяем её на Удавалаве.',
    faq: [
      {
        q: 'Включено ли проживание в отеле в стоимость 6 дневного тура?',
        a: 'Да. Выбранные отели 4 звезды с завтраком и ужином (полупансион) включены в пакет.',
      },
      {
        q: 'Какое сафари к слонам мы посещаем Миннерию или Каудуллу?',
        a: 'Мы используем Миннерию или соседнюю Каудуллу в зависимости от сезонного скопления слонов. Ваш водитель подтвердит лучший парк для ваших дат поездки, чтобы максимизировать шансы увидеть диких слонов.',
      },
      {
        q: 'Может ли этот тур начинаться в Коломбо, а не в аэропорту?',
        a: 'Да. Мы можем встретить вас в аэропорту Бандаранаике, в любом отеле Коломбо или на южном побережье и отвезти в удобное для вас место в 6 й день.',
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
            type: 'Знакомство с деревней',
            title: 'Экскурсия в деревню Хиривадунна',
            description: 'Познайте подлинную сельскую жизнь Шри Ланки.',
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
            title: 'Ramboda Falls Hotel',
            description: 'Ночь в Ramboda Falls Hotel (или подобном).',
            extra: ['Завтрак и ужин включены', 'Отель 4 звезды'],
          },
        ],
      },
      {
        title: 'От Нувара Элии до Ялы  Встреча с дикой природой',
        activities: [
          {
            type: 'Сафари',
            title: 'Сафари в национальном парке Яла',
            description:
              'Отправьтесь в увлекательное сафари по национальному парку Яла одному из лучших мест Шри Ланки для наблюдения за дикими слонами в естественной среде обитания. Увидите слонов, крокодилов, оленей и птиц на открытых лугах.',
          },
          {
            type: 'Проживание',
            title: 'Grand Tamarind Lake (или подобный)  полупансион',
            description: 'Проживание в Grand Tamarind Lake или подобном отеле с полупансионом.',
            extra: ['Отель 4 звезды (Премиум)', 'Отдельная ванная комната', 'Ужин'],
          },
        ],
      },
      {
        title: 'От Ялы до Юго Западного побережья  Река и охрана природы',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Coconut Tree Hill (Мирисса)',
            description: 'Живописное место в Мириссе с потрясающим видом на высокие кокосовые пальмы и Индийский океан.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Маяк Дондра Хед',
            description: 'Расположенный на самой южной точке Шри Ланки, этот маяк предлагает панорамный вид на океан и историческое очарование.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Пляж Мирисса',
            description: 'Тропический рай, известный золотистым песком, кристально чистой водой и яркими закатами.',
          },
          {
            type: 'Проживание',
            title: 'Somerset Mirissa Hotel',
            description: 'Проживание в Somerset Mirissa Hotel или подобном отеле с полупансионом.',
            extra: ['Отель 4 звезды (Премиум)', 'Завтрак', 'Отдельная ванная комната', 'Ужин'],
          },
        ],
      },
      {
        title: 'Отъезд с Юго Западного побережья  Охрана природы и сафари',
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
    title: 'Sri Lanka Privatreise  6 Tage | Kulturerbe, Hugelland & Wildlife Safari',
    description:
      'Erleben Sie Sri Lanka in 6 unvergesslichen Tagen mit antiken Stadten, UNESCO Welterbestatten, malerischen Teeplantagen, spannenden Wildlife Safaris und entspannten Kustenerlebnissen.',
    duration: '6 Tage',
    persons: '2-20 Personen',
    tourType: 'Rundreise',
    overview:
      'Erleben Sie die Highlights Sri Lankas auf dieser ausgewogenen 6 tagigen Privatreise. Reisen Sie durch das Kulturdreieck, erkunden Sie die Felsenfestung Sigiriya, besuchen Sie den heiligen Zahntempel in Kandy, fahren Sie durch die nebligen Teeplantagen von Nuwara Eliya, erleben Sie eine spannende Safari im Udawalawe Nationalpark und entspannen Sie an der wunderschonen Sudwestkuste. Mit privatem Transport, einem erfahrenen englischsprachigen Fahrer und komfortablen Unterkunften bietet diese Reise die ideale Mischung aus Kultur, Natur, Tierwelt und Erholung  perfekt fur Paare, Familien und kleine Gruppen.',
    includes: PACKAGE_INCLUDES.nl,
    excludes: PACKAGE_EXCLUDES.nl,
    seoIntro:
      'Sechs Tage bieten Ihnen Sri Lankas Kultur Dreieck, das nebelige Teeland, Leopardengebiete und die von Palmen gesaumte Sudkuste, ohne das Tempo einer Marathonwoche. Diese private Rundreise beginnt mit den Elefanten von Pinnawala und einer Jeep Safari in Minneriya bei Sigiriya, fuhrt dann zum Aufstieg auf den Lowenfelsen und zur heiligen Zahnreliquie in Kandy, bevor es weiter durch die Peradeniya Garten, die Ramboda Wasserfalle und aktive Teeplantagen in Nuwara Eliya geht. Am vierten Tag folgt eine 4x4 Safari im Yala Nationalpark; auf der letzten Etappe stehen statt Tierwelt die Aussichtspunkte von Mirissa, der Leuchtturm Dondra Head, der Schutz von Meeresschildkroten und eine Bootstour durch die Mangroven des Madu Flusses auf dem Programm. Sundown Tours plant die Fahrzeiten so, dass Ihre Energie fur die Felsbesteigung und die fruhen Safari Starts erhalten bleibt. Ihr englischsprachiger Chauffeur ubernimmt die Navigation in einem privaten klimatisierten Fahrzeug mit unbegrenzter Kilometerleistung. Die Hotels konnen auf Halbpension in der 3 to 4 Sterne Kategorie organisiert werden; Eintrittsgebuhren und Mittagessen bleiben flexibel, sodass Sie entscheiden, welche Tempel, Parks und Restaurants Ihnen am wichtigsten sind.',
    highlights: [
      'Elefanten Safari in Minneriya und Aufstieg zum UNESCO Lowenfelsen Sigiriya',
      'Zahntempel in Kandy, kulturelle Tanzshow und Peradeniya Botanical Gardens',
      'Besuch einer Teefabrik in Nuwara Eliya, Ramboda Wasserfalle und malerische Fahrten durchs Hugelland',
      'Jeep Safari im Yala Nationalpark auf der Suche nach Elefanten, Leoparden und Kustenfeuchtgebieten',
      'Kuste von Mirissa, Leuchtturm Dondra, Schildkroten Aufzuchtstation und Bootssafari auf dem Madu Fluss',
    ],
    whoIsFor:
      'Ideal fur Paare, Familien und kleine Gruppen, die Kultur, Tierwelt und Strande in weniger als einer Woche ohne Selbstfahren erleben mochten. Moderate Fitness ist fur Sigiriya hilfreich; fur Senioren schlagen wir gerne leichtere Aussichtspunkte vor.',
    bestTimeNote:
      'Ganzjahrig moglich, doch Dezember to April bietet das trockenste Wetter an der Sudkuste und zuverlassigen Zugang zu Yala. Mai to September eignet sich fur das Kultur Dreieck; bei Schliessung von Yala wegen Wartungsarbeiten weichen wir auf Udawalawe aus.',
    faq: [
      {
        q: 'Ist die Hotelunterkunft im Preis der 6 tagigen Tour enthalten?',
        a: 'Ja. Ausgewahlte 4 Sterne Hotels mit taglichem Fruhstuck und Abendessen (Halbpension) sind im Paket enthalten.'
      },
      {
        q: 'Welche Elefanten Safari besuchen wir  Minneriya oder Kaudulla?',
        a: 'Wir nutzen Minneriya oder das nahegelegene Kaudulla, je nach saisonaler Elefantenansammlung. Ihr Fahrer bestatigt den besten Park fur Ihre Reisedaten, um die Sichtungschancen wilder Elefanten zu maximieren.',
      },
      {
        q: 'Kann diese Tour in Colombo statt am Flughafen beginnen?',
        a: 'Ja. Wir holen Sie am Flughafen Bandaranaike, in jedem Hotel in Colombo oder an der Sudkuste ab und bringen Sie am 6. Tag zu Ihrem gewunschten Zielort.',
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
            type: 'Dorferlebnis',
            title: 'Dorftour Hiriwadunna',
            description: 'Erleben Sie das authentische landliche Leben Sri Lankas.',
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
            title: 'Ramboda Falls Hotel',
            description: 'Ubernachtung im Ramboda Falls Hotel (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya nach Yala  Begegnung mit der Tierwelt',
        activities: [
          {
            type: 'Safari',
            title: 'Safari im Yala Nationalpark',
            description:
              'Erleben Sie eine aufregende Safari im Yala Nationalpark, einem der besten Orte Sri Lankas, um wilde Elefanten in ihrem naturlichen Lebensraum zu beobachten. Entdecken Sie Elefanten, Krokodile, Hirsche und Vogelwelt in den weiten Graslandschaften.',
          },
          {
            type: 'Unterkunft',
            title: 'Grand Tamarind Lake (oder ahnlich)  Halbpension',
            description: 'Unterkunft im Grand Tamarind Lake oder ahnlichem Hotel  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Yala zur Sudwestkuste  Fluss & Naturschutz',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Coconut Tree Hill (Mirissa)',
            description: 'Ein malerischer Ort in Mirissa mit atemberaubendem Blick auf hohe Kokospalmen und den Indischen Ozean.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Leuchtturm Dondra Head',
            description:
              'Am sudlichsten Punkt Sri Lankas gelegen, bietet dieser Leuchtturm einen Panoramablick auf den Ozean und historischen Charme.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Mirissa Beach',
            description: 'Ein tropisches Paradies, bekannt fur goldenen Sand, klares Wasser und lebendige Sonnenuntergange.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Unterkunft im Somerset Mirissa Hotel oder ahnlichem Hotel  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Abreise von der Sudwestkuste  Naturschutz & Safari',
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
