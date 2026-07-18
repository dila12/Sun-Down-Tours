import type { TourContent } from './localize';

/**
 * 10-day Sri Lanka round tour (id: tour10).
 * English is the full BaseTour; locale overlays are authored separately.
 */
export const TOUR10: TourContent = {
  en: {
    title: '10 Day Sri Lanka Private Tour | Safari, Culture, Hill Country & Beach',
    description:
      'An unforgettable 10 day private Sri Lanka tour covering Wilpattu Safari, Anuradhapura, Sigiriya, Kandy, Ella adventures and a relaxing southern beach stay.',
    duration: '10 Days',
    persons: '1-20 Persons',
    filecode: '10-day-sri-lanka-tour',
    overview: `Discover Sri Lanka’s wildlife, ancient kingdoms, scenic mountains and golden beaches in one perfectly balanced 8 day journey. 
  This tour combines safari adventure, UNESCO heritage sites, hill country landscapes, tea plantations, waterfalls and relaxing coastal experiences with half board accommodation and private transportation.`,
    tourType: 'Round Tour',
    itinerary: [
      {
        day: 1,
        title: 'Airport / Hotel – Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: { title: 'Wilpattu National Park Safari', icon: 'fa-paw', color: '#27ae60' },
            description:
              'Explore Sri Lanka’s largest national park on a 5-hour 4x4 jeep safari. Spot leopards, sloth bears, elephants, deer, crocodiles and diverse birdlife.',
            image: 'assets/img/5daysTours/37.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Thimbiri Wewa Resort – Wilpattu', icon: 'fa-hotel', color: '#16a085' },
            description:
              'Overnight stay at Thimbiri Wewa Resort Wilpattu (or similar). Half Board basis.',
            image: 'assets/img/5daysTours/38.jpg',
            extra: ['Dinner Included', 'Star Class Hotel'],
          },
        ],
      },
      {
        day: 2,
        title: 'Wilpattu – Anuradhapura – Sigiriya',
        activities: [
          {
            type: 'Religious Visit',
            title: { title: 'Sri Maha Bodhi Temple', icon: 'fa-place-of-worship', color: '#8e44ad' },
            description: 'Visit the sacred Sri Maha Bodhi Tree in Anuradhapura.',
            image: 'assets/img/5daysTours/39.jpg',
          },
          {
            type: 'Historical Visit',
            title: { title: 'Ruwanweli Maha Seya', icon: 'fa-landmark', color: '#e67e22' },
            description: 'Explore one of Sri Lanka’s most sacred Buddhist monuments.',
            image: 'assets/img/5daysTours/40.jpg',
          },
          {
            type: 'Scenic Hike',
            title: { title: 'Pidurangala Rock Sunset', icon: 'fa-mountain', color: '#e74c3c' },
            description: 'Climb Pidurangala Rock for breathtaking sunset views.',
            image: 'assets/img/5daysTours/41.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Fresco Water Villa – Sigiriya', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Fresco Water Villa (or similar).',
            image: 'assets/img/5daysTours/c.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 3,
        title: 'Sigiriya Cultural Triangle',
        activities: [
          {
            type: 'UNESCO Site',
            title: { title: 'Sigiriya Lion Rock Fortress', icon: 'fa-mountain', color: '#c0392b' },
            description: 'Climb the UNESCO-listed Sigiriya Rock Fortress.',
            image: 'assets/img/5daysTours/42.jpg',
          },
          {
            type: 'Village Experience',
            title: { title: 'Hiriwadunna Village Tour', icon: 'fa-leaf', color: '#27ae60' },
            description: 'Experience authentic rural Sri Lankan village life.',
            image: 'assets/img/5daysTours/36.jpg',
          },
          {
            type: 'Safari',
            title: { title: 'Minneriya Safari', icon: 'fa-paw', color: '#2ecc71' },
            description: 'Enjoy a 4x4 jeep safari famous for elephant gatherings.',
            image: 'assets/img/5daysTours/37.jpg',
          },
          {
            type: 'Wellness',
            title: { title: 'Ayurveda Massage', icon: 'fa-spa', color: '#9b59b6' },
            description: 'Relax with a traditional herbal oil massage.',
            image: 'assets/img/5daysTours/43.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Fresco Water Villa – Sigiriya', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Fresco Water Villa (or similar).',
            image: 'assets/img/5daysTours/c.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 4,
        title: 'Sigiriya – Kandy',
        activities: [
          {
            type: 'Cultural Visit',
            title: { title: 'Matale Spice Garden', icon: 'fa-seedling', color: '#32CD32' },
            description: 'Discover Sri Lanka’s famous spices and herbs.',
            image: 'assets/img/5daysTours/44.jpg',
          },
          {
            type: 'UNESCO Site',
            title: { title: 'Temple of the Sacred Tooth Relic', icon: 'fa-place-of-worship', color: '#2980b9' },
            description: 'Visit Sri Lanka’s most sacred Buddhist temple in Kandy.',
            image: 'assets/img/5daysTours/14.jpg',
          },
          {
            type: 'Cultural Show',
            title: { title: 'Kandy Cultural Dance Show', icon: 'fa-theater-masks', color: '#e74c3c' },
            description: 'Enjoy traditional Kandyan dance performances.',
            image: 'assets/img/5daysTours/fifyrnqt5tvouhpgh6kk.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Hotel Topaz – Kandy', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Hotel Topaz (or similar) in Kandy. Half Board basis.',
            image: 'assets/img/5daysTours/25.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Breakfast', 'Dinner Included'],
          },
        ],
      },
      {
        day: 5,
        title: 'Kandy – Nuwara Eliya – Ella',
        activities: [
          {
            type: 'Tea Experience',
            title: { title: 'Blue Field Tea Factory', icon: 'fa-mug-hot', color: '#8B4513' },
            description: 'Learn how world-famous Ceylon tea is produced.',
            image: 'assets/img/5daysTours/28.png',
          },
          {
            type: 'Nature',
            title: { title: 'Ramboda Waterfall', icon: 'fa-water', color: '#3498db' },
            description: 'Visit one of Sri Lanka’s tallest waterfalls.',
            image: 'assets/img/5daysTours/27.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: ' Oak Ray Ella Gap Hotel (or similar) - HB Basis', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay in  Oak Ray Ella Gap Hotel (or similar) - HB Basis.',
            image: 'assets/img/5daysTours/xowpqo2nib4z21zdldhp.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Breakfast', 'Dinner Included'],
          },
        ],
      },
      {
        day: 6,
        title: 'Ella – Hikkaduwa',
        activities: [
          {
            type: 'Landmark',
            title: { title: 'Nine Arch Bridge', icon: 'fa-bridge', color: '#A9A9A9' },
            description: 'Visit the famous colonial-era railway bridge.',
            image: 'assets/img/5daysTours/3.jpeg',
          },
          {
            type: 'Wildlife',
            title: { title: 'Elephant Transit Home', icon: 'fa-elephant', color: '#2ecc71' },
            description: 'Observe rescued baby elephants.',
            image: 'assets/img/5daysTours/7.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Somerset Mirissa Hotel', icon: 'fa-hotel', color: '#16a085' },
            description: 'Accommodation in Somerset Mirissa Hotel or Similar hotel - HB Basis',
            image: 'assets/img/5daysTours/35.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Breakfast', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 7,
        title: 'Hikkaduwa Beach',
        activities: [
          {
            type: 'Beach Relaxation',
            title: { title: 'Hikkaduwa Beach', icon: 'fa-umbrella-beach', color: '#f1c40f' },
            description: 'Relax on golden beaches and swim in the Indian Ocean.',
            image: 'assets/img/5daysTours/45.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Somerset Mirissa Hotel', icon: 'fa-hotel', color: '#16a085' },
            description: 'Accommodation in Somerset Mirissa Hotel or Similar hotel - HB Basis',
            image: 'assets/img/5daysTours/35.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Breakfast', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 8,
        title: 'Hikkaduwa Beach',
        activities: [
          {
            type: 'Beach Relaxation',
            title: { title: 'Hikkaduwa Beach', icon: 'fa-umbrella-beach', color: '#f1c40f' },
            description: 'Relax on golden beaches and swim in the Indian Ocean.',
            image: 'assets/img/5daysTours/45.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Somerset Mirissa Hotel', icon: 'fa-hotel', color: '#16a085' },
            description: 'Accommodation in Somerset Mirissa Hotel or Similar hotel - HB Basis',
            image: 'assets/img/5daysTours/35.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Breakfast', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 9,
        title: 'water Activities to Kalutara',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Peraliya Tsunami Memorial', icon: 'fa-monument', color: '#FF8C00' },
            description:
              'Peraliya Tsunami Memorial honors the victims of the 2004 tsunami, featuring a towering Buddha statue as a symbol of peace and remembrance near the site of Sri Lanka’s worst tsunami disaster.',
            image: 'assets/img/7daystour/lf8xpxoe67nlur3zr3da.jpg',
          },
          {
            type: 'Wildlife Conservation',
            title: { title: 'Koggala Turtle Hatchery Visit', icon: 'fa-water', color: '#27ae60' },
            description:
              'Visit the Koggala Turtle Hatchery and Conservation Center where endangered sea turtles are protected and rehabilitated. Learn about Sri Lanka’s marine conservation efforts, observe baby turtles in hatchery pools and understand how rescued turtles are released back into the Indian Ocean.',
            image: 'assets/img/5daysTours/31.jpg',
          },
          {
            type: 'Boat Safari',
            title: { title: 'Madu River Boat Safari', icon: 'fa-ship', color: '#16a085' },
            description:
              'Experience a scenic boat safari through the mangrove forests and small islands of the Madu River. Visit traditional cinnamon plantations and explore one of Sri Lanka’s most beautiful wetland ecosystems.',
            image: 'assets/img/5daysTours/32.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Kamili Beach Resort (or similar) - HB Basis', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay in  Kamili Beach Resort (or similar) - HB Basis.',
            image: 'assets/img/5daysTours/46.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Breakfast', 'Dinner Included'],
          },
        ],
      },
      {
        day: 10,
        title: 'Departure from Colombo',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Peraliya Tsunami Memorial', icon: 'fa-monument', color: '#FF8C00' },
            description:
              'Peraliya Tsunami Memorial honors the victims of the 2004 tsunami, featuring a towering Buddha statue as a symbol of peace and remembrance near the site of Sri Lanka’s worst tsunami disaster.',
            image: 'assets/img/5daysTours/lf8xpxoe67nlur3zr3da.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Independence Memorial Hall', icon: 'fa-landmark', color: '#A9A9A9' },
            description:
              'Independence Square in Colombo is a historic landmark built to commemorate Sri Lanka’s independence, featuring grand colonial architecture, lush gardens, and a peaceful atmosphere for visitors.',
            image: 'assets/img/5daysTours/fsrleaf7977wcxityzu8.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Gangaramaya Temple', icon: 'fa-landmark', color: '#FFD700' },
            description:
              'Gangaramaya Temple in Colombo is a beautiful Buddhist temple blending Sri Lankan, Thai, and Chinese architecture, featuring statues, relics, and a serene lakeside setting.',
            image: 'assets/img/5daysTours/fn10nlk7fc0dzyawswa5.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Galle Face Green', icon: 'fa-park', color: '#32CD32' },
            description:
              'Galle Face Green in Colombo is a scenic oceanfront promenade, perfect for relaxing walks, stunning sunsets, and enjoying street food, offering a lively atmosphere by the Indian Ocean.',
            image: 'assets/img/5daysTours/qu0e7cjpkcfhfds1zeem.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Pettah Market', icon: 'fa-store', color: '#FF4500' },
            description:
              'Colombo Fort Market is a bustling hub offering a mix of local goods, clothing, spices, and street food, providing a vibrant shopping experience in the heart of the city.',
            image: 'assets/img/5daysTours/vlk48jx8ywhuzyqlvqg8.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Red Mosque (Jami Ul-Alfar Mosque)', icon: 'fa-mosque', color: '#FF0000' },
            description:
              'Jami Ul-Alfar Mosque, or the Red Mosque in Colombo, is an iconic landmark with striking red-and-white architecture, offering a glimpse into Sri Lanka’s rich Islamic heritage.',
            image: 'assets/img/5daysTours/owzua0jhk0zazg9d8hcn.jpg',
          },
        ],
      },
    ],
    includes: [
      'Air-Conditioned Private Vehicle',
      'English Speaking Professional Driver',
      'Half Board Accommodation (9 Nights)',
      'Fuel & Parking Fees',
      'Airport Pickup & Drop Off',
    ],
    excludes: ['Entrance & Activity Fees', 'Lunch & Drinks', 'Personal Expenses'],
  },
  de: {
    title: '10 Tage Sri Lanka Privatreise | Safari, Kultur, Bergland & Strand',
    description:
      'Eine unvergessliche 10-tägige Sri-Lanka-Privatreise mit Wilpattu-Safari, Anuradhapura, Sigiriya, Kandy, Abenteuern in Ella und einem entspannten Aufenthalt an der Südküste.',
    duration: '10 Tage',
    persons: '1-20 Personen',
    tourType: 'Rundreise',
    overview:
      'Entdecken Sie Sri Lankas Tierwelt, antike Königreiche, malerische Berge und goldene Strände auf dieser perfekt ausbalancierten 10-tägigen Reise. Diese Rundreise verbindet Safari-Abenteuer, UNESCO-Welterbestätten, Berglandschaften, Teeplantagen, Wasserfälle und entspannte Küstenerlebnisse mit Halbpension und privatem Transport.',
    includes: [
      'Klimatisiertes Privatfahrzeug',
      'Englischsprachiger professioneller Fahrer',
      'Halbpension-Unterkunft (9 Nächte)',
      'Kraftstoff & Parkgebühren',
      'Abholung & Rückfahrt zum Flughafen',
    ],
    excludes: ['Eintritts- & Aktivitätsgebühren', 'Mittagessen & Getränke', 'Persönliche Ausgaben'],
    days: [
      {
        title: 'Flughafen / Hotel – Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Wilpattu-Nationalpark-Safari',
            description:
              'Erkunden Sie Sri Lankas größten Nationalpark bei einer 5-stündigen 4x4-Jeep-Safari. Halten Sie Ausschau nach Leoparden, Lippenbären, Elefanten, Hirschen, Krokodilen und einer vielfältigen Vogelwelt.',
          },
          {
            type: 'Unterkunft',
            title: 'Thimbiri Wewa Resort – Wilpattu',
            description: 'Übernachtung im Thimbiri Wewa Resort Wilpattu (oder ähnlich) – Halbpension.',
            extra: ['Abendessen inklusive', 'Hotel gehobener Klasse'],
          },
        ],
      },
      {
        title: 'Wilpattu – Anuradhapura – Sigiriya',
        activities: [
          {
            type: 'Religiöser Besuch',
            title: 'Sri-Maha-Bodhi-Tempel',
            description: 'Besuchen Sie den heiligen Sri-Maha-Bodhi-Baum in Anuradhapura.',
          },
          {
            type: 'Historischer Besuch',
            title: 'Ruwanweli Maha Seya',
            description: 'Erkunden Sie eines der heiligsten buddhistischen Monumente Sri Lankas.',
          },
          {
            type: 'Aussichtswanderung',
            title: 'Sonnenuntergang am Pidurangala-Felsen',
            description: 'Besteigen Sie den Pidurangala-Felsen für einen atemberaubenden Sonnenuntergang.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Übernachtung in der Fresco Water Villa (oder ähnlich).',
            extra: ['Frühstück & Abendessen inklusive', '4-Sterne-Hotel'],
          },
        ],
      },
      {
        title: 'Sigiriya Kulturdreieck',
        activities: [
          {
            type: 'UNESCO-Stätte',
            title: 'Sigiriya-Felsenfestung',
            description: 'Besteigen Sie die UNESCO-gelistete Felsenfestung Sigiriya.',
          },
          {
            type: 'Dorferlebnis',
            title: 'Dorftour Hiriwadunna',
            description: 'Erleben Sie das authentische ländliche Leben Sri Lankas.',
          },
          {
            type: 'Safari',
            title: 'Minneriya-Safari',
            description: 'Genießen Sie eine 4x4-Jeep-Safari, bekannt für ihre Elefantenansammlungen.',
          },
          {
            type: 'Wellness',
            title: 'Ayurveda-Massage',
            description: 'Entspannen Sie bei einer traditionellen Kräuterölmassage.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Übernachtung in der Fresco Water Villa (oder ähnlich).',
            extra: ['Frühstück & Abendessen inklusive', '4-Sterne-Hotel'],
          },
        ],
      },
      {
        title: 'Sigiriya – Kandy',
        activities: [
          {
            type: 'Kulturbesuch',
            title: 'Matale Gewürzgarten',
            description: 'Entdecken Sie Sri Lankas berühmte Gewürze und Kräuter.',
          },
          {
            type: 'UNESCO-Stätte',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description: 'Besuchen Sie Sri Lankas heiligsten buddhistischen Tempel in Kandy.',
          },
          {
            type: 'Kulturshow',
            title: 'Kandy Kulturelle Tanzshow',
            description: 'Erleben Sie traditionelle kandyanische Tanzdarbietungen.',
          },
          {
            type: 'Unterkunft',
            title: 'Hotel Topaz – Kandy',
            description: 'Übernachtung im Hotel Topaz (oder ähnlich) in Kandy – Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Eigenes Bad', 'Frühstück', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Kandy – Nuwara Eliya – Ella',
        activities: [
          {
            type: 'Tee-Erlebnis',
            title: 'Bluefield-Teefabrik',
            description: 'Erfahren Sie, wie der weltberühmte Ceylon-Tee hergestellt wird.',
          },
          {
            type: 'Natur',
            title: 'Ramboda-Wasserfall',
            description: 'Besuchen Sie einen der höchsten Wasserfälle Sri Lankas.',
          },
          {
            type: 'Unterkunft',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Übernachtung im Oak Ray Ella Gap Hotel (oder ähnlich) – Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Eigenes Bad', 'Frühstück', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Ella – Hikkaduwa',
        activities: [
          {
            type: 'Sehenswürdigkeit',
            title: 'Nine-Arches-Bridge',
            description: 'Besuchen Sie die berühmte Eisenbahnbrücke aus der Kolonialzeit.',
          },
          {
            type: 'Tierwelt',
            title: 'Elephant Transit Home',
            description: 'Beobachten Sie gerettete Elefantenbabys.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Übernachtung im Somerset Mirissa Hotel (oder ähnlich) – Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Frühstück', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Hikkaduwa Strand',
        activities: [
          {
            type: 'Strandentspannung',
            title: 'Hikkaduwa Beach',
            description: 'Entspannen Sie an goldenen Stränden und schwimmen Sie im Indischen Ozean.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Übernachtung im Somerset Mirissa Hotel (oder ähnlich) – Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Frühstück', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Hikkaduwa Strand',
        activities: [
          {
            type: 'Strandentspannung',
            title: 'Hikkaduwa Beach',
            description: 'Entspannen Sie an goldenen Stränden und schwimmen Sie im Indischen Ozean.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Übernachtung im Somerset Mirissa Hotel (oder ähnlich) – Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Frühstück', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Wasseraktivitäten nach Kalutara',
        activities: [
          {
            type: 'Geführte Tour',
            title: 'Peraliya Tsunami-Denkmal',
            description:
              'Das Peraliya-Tsunami-Denkmal ehrt die Opfer des Tsunamis von 2004 mit einer imposanten Buddha-Statue als Symbol für Frieden und Erinnerung, nahe dem Ort der schlimmsten Tsunami-Katastrophe Sri Lankas.',
          },
          {
            type: 'Naturschutz',
            title: 'Besuch der Koggala-Schildkrötenaufzucht',
            description:
              'Besuchen Sie die Koggala-Schildkrötenaufzucht und das Schutzzentrum, in dem gefährdete Meeresschildkröten geschützt und rehabilitiert werden. Erfahren Sie mehr über Sri Lankas Meeresschutzbemühungen und beobachten Sie Jungschildkröten in den Aufzuchtbecken.',
          },
          {
            type: 'Bootssafari',
            title: 'Madu-Fluss-Bootssafari',
            description:
              'Erleben Sie eine malerische Bootssafari durch die Mangrovenwälder und kleinen Inseln des Madu-Flusses. Besuchen Sie traditionelle Zimtplantagen und eines der schönsten Feuchtgebiete Sri Lankas.',
          },
          {
            type: 'Unterkunft',
            title: 'Kamili Beach Resort',
            description: 'Übernachtung im Kamili Beach Resort (oder ähnlich) – Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Eigenes Bad', 'Frühstück', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Abreise von Colombo',
        activities: [
          {
            type: 'Geführte Tour',
            title: 'Peraliya Tsunami-Denkmal',
            description:
              'Das Peraliya-Tsunami-Denkmal ehrt die Opfer des Tsunamis von 2004 mit einer imposanten Buddha-Statue als Symbol für Frieden und Erinnerung, nahe dem Ort der schlimmsten Tsunami-Katastrophe Sri Lankas.',
          },
          {
            type: 'Geführte Tour',
            title: 'Independence Memorial Hall',
            description:
              'Der Unabhängigkeitsplatz in Colombo ist ein historisches Denkmal zur Erinnerung an die Unabhängigkeit Sri Lankas mit prachtvoller Kolonialarchitektur, üppigen Gärten und einer friedlichen Atmosphäre.',
          },
          {
            type: 'Geführte Tour',
            title: 'Gangaramaya-Tempel',
            description:
              'Der Gangaramaya-Tempel in Colombo ist ein wunderschöner buddhistischer Tempel, der sri-lankische, thailändische und chinesische Architektur vereint, mit Statuen, Reliquien und einer ruhigen Lage am See.',
          },
          {
            type: 'Geführte Tour',
            title: 'Galle Face Green',
            description:
              'Galle Face Green in Colombo ist eine malerische Uferpromenade – perfekt für entspannte Spaziergänge, atemberaubende Sonnenuntergänge und Streetfood in lebendiger Atmosphäre am Indischen Ozean.',
          },
          {
            type: 'Geführte Tour',
            title: 'Pettah-Markt',
            description:
              'Der Colombo Fort Market ist ein belebtes Zentrum mit einer Mischung aus lokalen Waren, Kleidung, Gewürzen und Streetfood – ein lebendiges Einkaufserlebnis im Herzen der Stadt.',
          },
          {
            type: 'Geführte Tour',
            title: 'Rote Moschee (Jami Ul-Alfar Moschee)',
            description:
              'Die Jami-Ul-Alfar-Moschee, bekannt als Rote Moschee in Colombo, ist ein ikonisches Wahrzeichen mit auffälliger rot-weißer Architektur und gibt Einblick in Sri Lankas reiches islamisches Erbe.',
          },
        ],
      },
    ],
  },
  fr: {
    title: 'Circuit Privé de 10 Jours au Sri Lanka | Safari, Culture, Montagnes & Plage',
    description:
      'Un circuit privé inoubliable de 10 jours au Sri Lanka, avec le safari de Wilpattu, Anuradhapura, Sigiriya, Kandy, les aventures d’Ella et un séjour reposant sur la côte sud.',
    duration: '10 jours',
    persons: '1-20 personnes',
    tourType: 'Circuit',
    overview:
      'Découvrez la faune, les royaumes antiques, les montagnes pittoresques et les plages dorées du Sri Lanka lors de ce circuit de 10 jours parfaitement équilibré. Ce voyage combine safari, sites classés UNESCO, paysages de montagne, plantations de thé, cascades et détente côtière, avec hébergement en demi-pension et transport privé.',
    includes: [
      'Véhicule privé climatisé',
      'Chauffeur professionnel anglophone',
      'Hébergement en demi-pension (9 nuits)',
      'Carburant & frais de parking',
      'Prise en charge & dépose à l’aéroport',
    ],
    excludes: ['Entrées & frais d’activités', 'Déjeuners & boissons', 'Dépenses personnelles'],
    days: [
      {
        title: 'Aéroport / Hôtel – Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Safari au parc national de Wilpattu',
            description:
              'Explorez le plus grand parc national du Sri Lanka lors d’un safari en 4x4 de 5 heures. Guettez léopards, ours lippus, éléphants, cerfs, crocodiles et une riche avifaune.',
          },
          {
            type: 'Hébergement',
            title: 'Thimbiri Wewa Resort – Wilpattu',
            description: 'Nuit au Thimbiri Wewa Resort Wilpattu (ou similaire), en demi-pension.',
            extra: ['Dîner inclus', 'Hôtel de standing'],
          },
        ],
      },
      {
        title: 'Wilpattu – Anuradhapura – Sigiriya',
        activities: [
          {
            type: 'Visite religieuse',
            title: 'Temple de Sri Maha Bodhi',
            description: 'Visitez l’arbre sacré Sri Maha Bodhi à Anuradhapura.',
          },
          {
            type: 'Visite historique',
            title: 'Ruwanweli Maha Seya',
            description: 'Découvrez l’un des monuments bouddhistes les plus sacrés du Sri Lanka.',
          },
          {
            type: 'Randonnée panoramique',
            title: 'Coucher de soleil au rocher de Pidurangala',
            description: 'Grimpez au rocher de Pidurangala pour un coucher de soleil à couper le souffle.',
          },
          {
            type: 'Hébergement',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Nuit au Fresco Water Villa (ou similaire).',
            extra: ['Petit-déjeuner & dîner inclus', 'Hôtel 4 étoiles'],
          },
        ],
      },
      {
        title: 'Triangle Culturel de Sigiriya',
        activities: [
          {
            type: 'Site classé UNESCO',
            title: 'Forteresse du Rocher du Lion de Sigiriya',
            description: 'Grimpez à la forteresse du Rocher du Lion de Sigiriya, classée UNESCO.',
          },
          {
            type: 'Expérience villageoise',
            title: 'Visite du village de Hiriwadunna',
            description: 'Découvrez la vie rurale authentique du Sri Lanka.',
          },
          {
            type: 'Safari',
            title: 'Safari de Minneriya',
            description: 'Profitez d’un safari en 4x4 réputé pour ses rassemblements d’éléphants.',
          },
          {
            type: 'Bien-être',
            title: 'Massage ayurvédique',
            description: 'Détendez-vous avec un massage traditionnel à l’huile d’herbes.',
          },
          {
            type: 'Hébergement',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Nuit au Fresco Water Villa (ou similaire).',
            extra: ['Petit-déjeuner & dîner inclus', 'Hôtel 4 étoiles'],
          },
        ],
      },
      {
        title: 'Sigiriya – Kandy',
        activities: [
          {
            type: 'Visite culturelle',
            title: 'Jardin d’épices de Matale',
            description: 'Découvrez les épices et herbes célèbres du Sri Lanka.',
          },
          {
            type: 'Site classé UNESCO',
            title: 'Temple de la Dent Sacrée',
            description: 'Visitez le temple bouddhiste le plus sacré du Sri Lanka, à Kandy.',
          },
          {
            type: 'Spectacle culturel',
            title: 'Spectacle de danse culturelle de Kandy',
            description: 'Profitez de danses traditionnelles kandyennes.',
          },
          {
            type: 'Hébergement',
            title: 'Hotel Topaz – Kandy',
            description: 'Nuit à l’Hotel Topaz (ou similaire) à Kandy, en demi-pension.',
            extra: ['Hôtel 4 étoiles (Premium)', 'Salle de bain privée', 'Petit-déjeuner', 'Dîner inclus'],
          },
        ],
      },
      {
        title: 'Kandy – Nuwara Eliya – Ella',
        activities: [
          {
            type: 'Expérience du thé',
            title: 'Fabrique de thé Blue Field',
            description: 'Découvrez comment le célèbre thé de Ceylan est produit.',
          },
          {
            type: 'Nature',
            title: 'Cascade de Ramboda',
            description: 'Visitez l’une des plus hautes cascades du Sri Lanka.',
          },
          {
            type: 'Hébergement',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Nuit à l’Oak Ray Ella Gap Hotel (ou similaire), en demi-pension.',
            extra: ['Hôtel 4 étoiles (Premium)', 'Salle de bain privée', 'Petit-déjeuner', 'Dîner inclus'],
          },
        ],
      },
      {
        title: 'Ella – Hikkaduwa',
        activities: [
          {
            type: 'Site remarquable',
            title: 'Nine Arch Bridge',
            description: 'Visitez le célèbre pont ferroviaire de l’époque coloniale.',
          },
          {
            type: 'Faune sauvage',
            title: 'Elephant Transit Home',
            description: 'Observez de jeunes éléphants secourus.',
          },
          {
            type: 'Hébergement',
            title: 'Somerset Mirissa Hotel',
            description: 'Hébergement au Somerset Mirissa Hotel (ou similaire), en demi-pension.',
            extra: ['Hôtel 4 étoiles (Premium)', 'Petit-déjeuner', 'Salle de bain privée', 'Dîner'],
          },
        ],
      },
      {
        title: 'Plage de Hikkaduwa',
        activities: [
          {
            type: 'Détente à la plage',
            title: 'Plage de Hikkaduwa',
            description: 'Détendez-vous sur des plages dorées et baignez-vous dans l’océan Indien.',
          },
          {
            type: 'Hébergement',
            title: 'Somerset Mirissa Hotel',
            description: 'Hébergement au Somerset Mirissa Hotel (ou similaire), en demi-pension.',
            extra: ['Hôtel 4 étoiles (Premium)', 'Petit-déjeuner', 'Salle de bain privée', 'Dîner'],
          },
        ],
      },
      {
        title: 'Plage de Hikkaduwa',
        activities: [
          {
            type: 'Détente à la plage',
            title: 'Plage de Hikkaduwa',
            description: 'Détendez-vous sur des plages dorées et baignez-vous dans l’océan Indien.',
          },
          {
            type: 'Hébergement',
            title: 'Somerset Mirissa Hotel',
            description: 'Hébergement au Somerset Mirissa Hotel (ou similaire), en demi-pension.',
            extra: ['Hôtel 4 étoiles (Premium)', 'Petit-déjeuner', 'Salle de bain privée', 'Dîner'],
          },
        ],
      },
      {
        title: 'Activités nautiques vers Kalutara',
        activities: [
          {
            type: 'Visite guidée',
            title: 'Mémorial du tsunami de Peraliya',
            description:
              'Le mémorial du tsunami de Peraliya honore les victimes du tsunami de 2004, avec une imposante statue de Bouddha symbolisant la paix et le souvenir, près du site de la pire catastrophe tsunamique du Sri Lanka.',
          },
          {
            type: 'Conservation de la faune',
            title: 'Visite de l’écloserie de tortues de Koggala',
            description:
              'Visitez l’écloserie et le centre de conservation des tortues de Koggala, où des tortues marines menacées sont protégées et réhabilitées. Découvrez les efforts de conservation marine du Sri Lanka et observez les bébés tortues dans les bassins d’écloserie.',
          },
          {
            type: 'Safari en bateau',
            title: 'Safari en bateau sur la rivière Madu',
            description:
              'Découvrez un safari en bateau pittoresque à travers les mangroves et petites îles de la rivière Madu. Visitez des plantations traditionnelles de cannelle et explorez l’un des plus beaux écosystèmes humides du Sri Lanka.',
          },
          {
            type: 'Hébergement',
            title: 'Kamili Beach Resort',
            description: 'Nuit au Kamili Beach Resort (ou similaire), en demi-pension.',
            extra: ['Hôtel 4 étoiles (Premium)', 'Salle de bain privée', 'Petit-déjeuner', 'Dîner inclus'],
          },
        ],
      },
      {
        title: 'Départ depuis Colombo',
        activities: [
          {
            type: 'Visite guidée',
            title: 'Mémorial du tsunami de Peraliya',
            description:
              'Le mémorial du tsunami de Peraliya honore les victimes du tsunami de 2004, avec une imposante statue de Bouddha symbolisant la paix et le souvenir, près du site de la pire catastrophe tsunamique du Sri Lanka.',
          },
          {
            type: 'Visite guidée',
            title: 'Independence Memorial Hall',
            description:
              'Le Independence Square de Colombo est un site historique commémorant l’indépendance du Sri Lanka, avec une architecture coloniale majestueuse, des jardins luxuriants et une atmosphère paisible.',
          },
          {
            type: 'Visite guidée',
            title: 'Temple Gangaramaya',
            description:
              'Le temple Gangaramaya de Colombo est un magnifique temple bouddhiste mêlant architectures sri-lankaise, thaïlandaise et chinoise, avec statues, reliques et un cadre paisible au bord du lac.',
          },
          {
            type: 'Visite guidée',
            title: 'Galle Face Green',
            description:
              'Galle Face Green à Colombo est une promenade pittoresque en bord de mer, idéale pour des balades relaxantes, des couchers de soleil superbes et la street food, dans une ambiance animée au bord de l’océan Indien.',
          },
          {
            type: 'Visite guidée',
            title: 'Marché de Pettah',
            description:
              'Le Colombo Fort Market est un lieu animé proposant un mélange de produits locaux, vêtements, épices et street food, offrant une expérience de shopping vivante au cœur de la ville.',
          },
          {
            type: 'Visite guidée',
            title: 'Mosquée Rouge (mosquée Jami Ul-Alfar)',
            description:
              'La mosquée Jami Ul-Alfar, ou Mosquée Rouge de Colombo, est un site emblématique à l’architecture rouge et blanche saisissante, offrant un aperçu du riche patrimoine islamique du Sri Lanka.',
          },
        ],
      },
    ],
  },
  it: {
    title: 'Tour Privato di 10 Giorni in Sri Lanka | Safari, Cultura, Montagne & Mare',
    description:
      'Un indimenticabile tour privato di 10 giorni in Sri Lanka con il safari a Wilpattu, Anuradhapura, Sigiriya, Kandy, le avventure di Ella e un relax finale sulla costa meridionale.',
    duration: '10 giorni',
    persons: '1-20 persone',
    tourType: 'Tour completo',
    overview:
      'Scopri la fauna selvatica, gli antichi regni, le montagne panoramiche e le spiagge dorate dello Sri Lanka in questo tour di 10 giorni perfettamente equilibrato. Il viaggio unisce safari, siti UNESCO, paesaggi di montagna, piantagioni di tè, cascate ed esperienze costiere rilassanti, con pernottamento in mezza pensione e trasporto privato.',
    includes: [
      'Veicolo privato climatizzato',
      'Autista professionista di lingua inglese',
      'Sistemazione in mezza pensione (9 notti)',
      'Carburante e parcheggi',
      'Prelievo e riaccompagnamento in aeroporto',
    ],
    excludes: ['Ingressi e costi delle attività', 'Pranzo e bevande', 'Spese personali'],
    days: [
      {
        title: 'Aeroporto / Hotel – Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Safari al Parco Nazionale di Wilpattu',
            description:
              'Esplora il parco nazionale più grande dello Sri Lanka in un safari in 4x4 di 5 ore. Cerca leopardi, orsi labiati, elefanti, cervi, coccodrilli e una ricca avifauna.',
          },
          {
            type: 'Sistemazione',
            title: 'Thimbiri Wewa Resort – Wilpattu',
            description: 'Pernottamento al Thimbiri Wewa Resort Wilpattu (o simile), in mezza pensione.',
            extra: ['Cena inclusa', 'Hotel di categoria'],
          },
        ],
      },
      {
        title: 'Wilpattu – Anuradhapura – Sigiriya',
        activities: [
          {
            type: 'Visita religiosa',
            title: 'Tempio di Sri Maha Bodhi',
            description: 'Visita il sacro albero Sri Maha Bodhi ad Anuradhapura.',
          },
          {
            type: 'Visita storica',
            title: 'Ruwanweli Maha Seya',
            description: 'Esplora uno dei monumenti buddisti più sacri dello Sri Lanka.',
          },
          {
            type: 'Escursione panoramica',
            title: 'Tramonto alla Roccia di Pidurangala',
            description: 'Sali sulla Roccia di Pidurangala per un tramonto spettacolare.',
          },
          {
            type: 'Sistemazione',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Pernottamento presso il Fresco Water Villa (o simile).',
            extra: ['Colazione e cena incluse', 'Hotel 4 stelle'],
          },
        ],
      },
      {
        title: 'Triangolo Culturale di Sigiriya',
        activities: [
          {
            type: 'Sito UNESCO',
            title: 'Fortezza della Roccia del Leone di Sigiriya',
            description: 'Sali sulla fortezza rocciosa di Sigiriya, patrimonio UNESCO.',
          },
          {
            type: 'Esperienza di villaggio',
            title: 'Tour del villaggio di Hiriwadunna',
            description: 'Scopri l’autentica vita rurale dello Sri Lanka.',
          },
          {
            type: 'Safari',
            title: 'Safari a Minneriya',
            description: 'Goditi un safari in 4x4 famoso per i raduni di elefanti.',
          },
          {
            type: 'Benessere',
            title: 'Massaggio ayurvedico',
            description: 'Rilassati con un tradizionale massaggio a olio di erbe.',
          },
          {
            type: 'Sistemazione',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Pernottamento presso il Fresco Water Villa (o simile).',
            extra: ['Colazione e cena incluse', 'Hotel 4 stelle'],
          },
        ],
      },
      {
        title: 'Sigiriya – Kandy',
        activities: [
          {
            type: 'Visita culturale',
            title: 'Giardino delle spezie di Matale',
            description: 'Scopri le famose spezie ed erbe dello Sri Lanka.',
          },
          {
            type: 'Sito UNESCO',
            title: 'Tempio del Sacro Dente',
            description: 'Visita il tempio buddista più sacro dello Sri Lanka, a Kandy.',
          },
          {
            type: 'Spettacolo culturale',
            title: 'Spettacolo di danza culturale di Kandy',
            description: 'Goditi le tradizionali danze kandyane.',
          },
          {
            type: 'Sistemazione',
            title: 'Hotel Topaz – Kandy',
            description: 'Pernottamento all’Hotel Topaz (o simile) a Kandy, in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Bagno privato', 'Colazione', 'Cena inclusa'],
          },
        ],
      },
      {
        title: 'Kandy – Nuwara Eliya – Ella',
        activities: [
          {
            type: 'Esperienza del tè',
            title: 'Fabbrica di tè Blue Field',
            description: 'Scopri come viene prodotto il celebre tè di Ceylon.',
          },
          {
            type: 'Natura',
            title: 'Cascata di Ramboda',
            description: 'Visita una delle cascate più alte dello Sri Lanka.',
          },
          {
            type: 'Sistemazione',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Pernottamento all’Oak Ray Ella Gap Hotel (o simile), in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Bagno privato', 'Colazione', 'Cena inclusa'],
          },
        ],
      },
      {
        title: 'Ella – Hikkaduwa',
        activities: [
          {
            type: 'Luogo iconico',
            title: 'Nine Arch Bridge',
            description: 'Visita il famoso ponte ferroviario dell’epoca coloniale.',
          },
          {
            type: 'Fauna selvatica',
            title: 'Elephant Transit Home',
            description: 'Osserva i cuccioli di elefante salvati.',
          },
          {
            type: 'Sistemazione',
            title: 'Somerset Mirissa Hotel',
            description: 'Sistemazione al Somerset Mirissa Hotel (o simile), in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Colazione', 'Bagno privato', 'Cena'],
          },
        ],
      },
      {
        title: 'Spiaggia di Hikkaduwa',
        activities: [
          {
            type: 'Relax in spiaggia',
            title: 'Spiaggia di Hikkaduwa',
            description: 'Rilassati su spiagge dorate e nuota nell’Oceano Indiano.',
          },
          {
            type: 'Sistemazione',
            title: 'Somerset Mirissa Hotel',
            description: 'Sistemazione al Somerset Mirissa Hotel (o simile), in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Colazione', 'Bagno privato', 'Cena'],
          },
        ],
      },
      {
        title: 'Spiaggia di Hikkaduwa',
        activities: [
          {
            type: 'Relax in spiaggia',
            title: 'Spiaggia di Hikkaduwa',
            description: 'Rilassati su spiagge dorate e nuota nell’Oceano Indiano.',
          },
          {
            type: 'Sistemazione',
            title: 'Somerset Mirissa Hotel',
            description: 'Sistemazione al Somerset Mirissa Hotel (o simile), in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Colazione', 'Bagno privato', 'Cena'],
          },
        ],
      },
      {
        title: 'Attività acquatiche verso Kalutara',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Memoriale dello Tsunami di Peraliya',
            description:
              'Il Memoriale dello Tsunami di Peraliya onora le vittime dello tsunami del 2004, con un’imponente statua del Buddha come simbolo di pace e memoria vicino al luogo del peggior disastro da tsunami dello Sri Lanka.',
          },
          {
            type: 'Conservazione della fauna',
            title: 'Visita alla schiusa di tartarughe di Koggala',
            description:
              'Visita il centro di conservazione e schiusa delle tartarughe di Koggala, dove le tartarughe marine in pericolo vengono protette e riabilitate. Scopri gli sforzi di conservazione marina dello Sri Lanka e osserva i piccoli nelle vasche di schiusa.',
          },
          {
            type: 'Safari in barca',
            title: 'Safari in barca sul fiume Madu',
            description:
              'Vivi un pittoresco safari in barca tra le mangrovie e le piccole isole del fiume Madu. Visita le tradizionali piantagioni di cannella ed esplora uno dei più bei ecosistemi umidi dello Sri Lanka.',
          },
          {
            type: 'Sistemazione',
            title: 'Kamili Beach Resort',
            description: 'Pernottamento al Kamili Beach Resort (o simile), in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Bagno privato', 'Colazione', 'Cena inclusa'],
          },
        ],
      },
      {
        title: 'Partenza da Colombo',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Memoriale dello Tsunami di Peraliya',
            description:
              'Il Memoriale dello Tsunami di Peraliya onora le vittime dello tsunami del 2004, con un’imponente statua del Buddha come simbolo di pace e memoria vicino al luogo del peggior disastro da tsunami dello Sri Lanka.',
          },
          {
            type: 'Tour guidato',
            title: 'Independence Memorial Hall',
            description:
              'L’Independence Square di Colombo è un monumento storico che celebra l’indipendenza dello Sri Lanka, con una grandiosa architettura coloniale, giardini rigogliosi e un’atmosfera serena.',
          },
          {
            type: 'Tour guidato',
            title: 'Tempio Gangaramaya',
            description:
              'Il tempio Gangaramaya di Colombo è un magnifico tempio buddista che unisce architettura singalese, thailandese e cinese, con statue, reliquie e una serena posizione lacustre.',
          },
          {
            type: 'Tour guidato',
            title: 'Galle Face Green',
            description:
              'Galle Face Green a Colombo è una pittoresca passeggiata sul lungomare, perfetta per rilassanti camminate, splendidi tramonti e street food, con un’atmosfera vivace sull’Oceano Indiano.',
          },
          {
            type: 'Tour guidato',
            title: 'Mercato di Pettah',
            description:
              'Il Colombo Fort Market è un vivace mercato che offre un mix di prodotti locali, abbigliamento, spezie e street food, per un’esperienza di shopping vibrante nel cuore della città.',
          },
          {
            type: 'Tour guidato',
            title: 'Moschea Rossa (Moschea Jami Ul-Alfar)',
            description:
              'La Moschea Jami Ul-Alfar, o Moschea Rossa di Colombo, è un monumento iconico con una sorprendente architettura rosso-bianca, che offre uno sguardo sul ricco patrimonio islamico dello Sri Lanka.',
          },
        ],
      },
    ],
  },
  es: {
    title: 'Tour Privado de 10 Días por Sri Lanka | Safari, Cultura, Montañas & Playa',
    description:
      'Un inolvidable tour privado de 10 días por Sri Lanka que incluye el safari de Wilpattu, Anuradhapura, Sigiriya, Kandy, aventuras en Ella y una relajante estancia en la costa sur.',
    duration: '10 días',
    persons: '1-20 personas',
    tourType: 'Circuito',
    overview:
      'Descubre la fauna, los antiguos reinos, las montañas escénicas y las playas doradas de Sri Lanka en este circuito de 10 días perfectamente equilibrado. El viaje combina safari, sitios declarados Patrimonio de la Humanidad, paisajes de montaña, plantaciones de té, cascadas y experiencias costeras relajantes, con alojamiento en media pensión y transporte privado.',
    includes: [
      'Vehículo privado con aire acondicionado',
      'Chófer profesional de habla inglesa',
      'Alojamiento en media pensión (9 noches)',
      'Combustible y aparcamiento',
      'Recogida y traslado al aeropuerto',
    ],
    excludes: ['Entradas y costes de actividades', 'Almuerzo y bebidas', 'Gastos personales'],
    days: [
      {
        title: 'Aeropuerto / Hotel – Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Safari en el Parque Nacional de Wilpattu',
            description:
              'Explora el parque nacional más grande de Sri Lanka en un safari en 4x4 de 5 horas. Busca leopardos, osos bezudos, elefantes, ciervos, cocodrilos y una rica avifauna.',
          },
          {
            type: 'Alojamiento',
            title: 'Thimbiri Wewa Resort – Wilpattu',
            description: 'Noche en el Thimbiri Wewa Resort Wilpattu (o similar), en media pensión.',
            extra: ['Cena incluida', 'Hotel de categoría'],
          },
        ],
      },
      {
        title: 'Wilpattu – Anuradhapura – Sigiriya',
        activities: [
          {
            type: 'Visita religiosa',
            title: 'Templo de Sri Maha Bodhi',
            description: 'Visita el sagrado árbol Sri Maha Bodhi en Anuradhapura.',
          },
          {
            type: 'Visita histórica',
            title: 'Ruwanweli Maha Seya',
            description: 'Explora uno de los monumentos budistas más sagrados de Sri Lanka.',
          },
          {
            type: 'Caminata panorámica',
            title: 'Atardecer en la Roca de Pidurangala',
            description: 'Sube a la Roca de Pidurangala para disfrutar de un atardecer espectacular.',
          },
          {
            type: 'Alojamiento',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Noche en el Fresco Water Villa (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel 4 estrellas'],
          },
        ],
      },
      {
        title: 'Triángulo Cultural de Sigiriya',
        activities: [
          {
            type: 'Sitio Patrimonio de la Humanidad',
            title: 'Roca Fortaleza del León de Sigiriya',
            description: 'Sube a la Roca Fortaleza de Sigiriya, declarada Patrimonio de la Humanidad.',
          },
          {
            type: 'Experiencia rural',
            title: 'Recorrido por el pueblo de Hiriwadunna',
            description: 'Descubre la auténtica vida rural de Sri Lanka.',
          },
          {
            type: 'Safari',
            title: 'Safari en Minneriya',
            description: 'Disfruta de un safari en 4x4 famoso por sus concentraciones de elefantes.',
          },
          {
            type: 'Bienestar',
            title: 'Masaje ayurvédico',
            description: 'Relájate con un tradicional masaje con aceites herbales.',
          },
          {
            type: 'Alojamiento',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Noche en el Fresco Water Villa (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel 4 estrellas'],
          },
        ],
      },
      {
        title: 'Sigiriya – Kandy',
        activities: [
          {
            type: 'Visita cultural',
            title: 'Jardín de especias de Matale',
            description: 'Descubre las famosas especias y hierbas de Sri Lanka.',
          },
          {
            type: 'Sitio Patrimonio de la Humanidad',
            title: 'Templo del Diente Sagrado',
            description: 'Visita el templo budista más sagrado de Sri Lanka, en Kandy.',
          },
          {
            type: 'Espectáculo cultural',
            title: 'Espectáculo de danza cultural de Kandy',
            description: 'Disfruta de las tradicionales danzas candianas.',
          },
          {
            type: 'Alojamiento',
            title: 'Hotel Topaz – Kandy',
            description: 'Noche en el Hotel Topaz (o similar) en Kandy, en media pensión.',
            extra: ['Hotel 4 estrellas (Premium)', 'Baño privado', 'Desayuno', 'Cena incluida'],
          },
        ],
      },
      {
        title: 'Kandy – Nuwara Eliya – Ella',
        activities: [
          {
            type: 'Experiencia del té',
            title: 'Fábrica de té Blue Field',
            description: 'Descubre cómo se produce el famoso té de Ceilán.',
          },
          {
            type: 'Naturaleza',
            title: 'Cascada de Ramboda',
            description: 'Visita una de las cascadas más altas de Sri Lanka.',
          },
          {
            type: 'Alojamiento',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Noche en el Oak Ray Ella Gap Hotel (o similar), en media pensión.',
            extra: ['Hotel 4 estrellas (Premium)', 'Baño privado', 'Desayuno', 'Cena incluida'],
          },
        ],
      },
      {
        title: 'Ella – Hikkaduwa',
        activities: [
          {
            type: 'Lugar emblemático',
            title: 'Nine Arch Bridge',
            description: 'Visita el famoso puente ferroviario de la época colonial.',
          },
          {
            type: 'Vida salvaje',
            title: 'Elephant Transit Home',
            description: 'Observa a las crías de elefante rescatadas.',
          },
          {
            type: 'Alojamiento',
            title: 'Somerset Mirissa Hotel',
            description: 'Alojamiento en el Somerset Mirissa Hotel (o similar), en media pensión.',
            extra: ['Hotel 4 estrellas (Premium)', 'Desayuno', 'Baño privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Playa de Hikkaduwa',
        activities: [
          {
            type: 'Relax en la playa',
            title: 'Playa de Hikkaduwa',
            description: 'Relájate en playas doradas y nada en el Océano Índico.',
          },
          {
            type: 'Alojamiento',
            title: 'Somerset Mirissa Hotel',
            description: 'Alojamiento en el Somerset Mirissa Hotel (o similar), en media pensión.',
            extra: ['Hotel 4 estrellas (Premium)', 'Desayuno', 'Baño privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Playa de Hikkaduwa',
        activities: [
          {
            type: 'Relax en la playa',
            title: 'Playa de Hikkaduwa',
            description: 'Relájate en playas doradas y nada en el Océano Índico.',
          },
          {
            type: 'Alojamiento',
            title: 'Somerset Mirissa Hotel',
            description: 'Alojamiento en el Somerset Mirissa Hotel (o similar), en media pensión.',
            extra: ['Hotel 4 estrellas (Premium)', 'Desayuno', 'Baño privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Actividades acuáticas hacia Kalutara',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Memorial del Tsunami de Peraliya',
            description:
              'El Memorial del Tsunami de Peraliya honra a las víctimas del tsunami de 2004, con una imponente estatua de Buda como símbolo de paz y recuerdo cerca del lugar del peor desastre de tsunami de Sri Lanka.',
          },
          {
            type: 'Conservación de fauna',
            title: 'Visita al criadero de tortugas de Koggala',
            description:
              'Visita el criadero y centro de conservación de tortugas de Koggala, donde se protegen y rehabilitan tortugas marinas en peligro. Descubre los esfuerzos de conservación marina de Sri Lanka y observa a las crías en los tanques de cría.',
          },
          {
            type: 'Safari en barco',
            title: 'Safari en barco por el río Madu',
            description:
              'Disfruta de un pintoresco safari en barco por los manglares y pequeñas islas del río Madu. Visita plantaciones tradicionales de canela y explora uno de los ecosistemas de humedales más bellos de Sri Lanka.',
          },
          {
            type: 'Alojamiento',
            title: 'Kamili Beach Resort',
            description: 'Noche en el Kamili Beach Resort (o similar), en media pensión.',
            extra: ['Hotel 4 estrellas (Premium)', 'Baño privado', 'Desayuno', 'Cena incluida'],
          },
        ],
      },
      {
        title: 'Salida desde Colombo',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Memorial del Tsunami de Peraliya',
            description:
              'El Memorial del Tsunami de Peraliya honra a las víctimas del tsunami de 2004, con una imponente estatua de Buda como símbolo de paz y recuerdo cerca del lugar del peor desastre de tsunami de Sri Lanka.',
          },
          {
            type: 'Visita guiada',
            title: 'Independence Memorial Hall',
            description:
              'La Plaza de la Independencia en Colombo es un hito histórico construido para conmemorar la independencia de Sri Lanka, con una grandiosa arquitectura colonial, jardines exuberantes y un ambiente sereno.',
          },
          {
            type: 'Visita guiada',
            title: 'Templo Gangaramaya',
            description:
              'El templo Gangaramaya en Colombo es un hermoso templo budista que combina arquitectura cingalesa, tailandesa y china, con estatuas, reliquias y un entorno junto al lago.',
          },
          {
            type: 'Visita guiada',
            title: 'Galle Face Green',
            description:
              'Galle Face Green en Colombo es un pintoresco paseo frente al mar, ideal para caminatas relajantes, atardeceres impresionantes y comida callejera, con un ambiente animado junto al Océano Índico.',
          },
          {
            type: 'Visita guiada',
            title: 'Mercado de Pettah',
            description:
              'El Colombo Fort Market es un animado centro que ofrece una mezcla de productos locales, ropa, especias y comida callejera, brindando una vibrante experiencia de compras en el corazón de la ciudad.',
          },
          {
            type: 'Visita guiada',
            title: 'Mezquita Roja (Mezquita Jami Ul-Alfar)',
            description:
              'La Mezquita Jami Ul-Alfar, o Mezquita Roja de Colombo, es un hito icónico con una llamativa arquitectura roja y blanca, que ofrece una visión del rico patrimonio islámico de Sri Lanka.',
          },
        ],
      },
    ],
  },
  pl: {
    title: '10-dniowa Prywatna Wycieczka po Sri Lance | Safari, Kultura, Wyżyny i Plaża',
    description:
      'Niezapomniana 10-dniowa prywatna wycieczka po Sri Lance obejmująca safari w Wilpattu, Anuradhapurę, Sigiriya, Kandy, przygody w Elli oraz relaksujący pobyt na południowym wybrzeżu.',
    duration: '10 dni',
    persons: '1-20 osób',
    tourType: 'Wycieczka objazdowa',
    overview:
      'Odkryj dziką przyrodę, starożytne królestwa, malownicze góry i złote plaże Sri Lanki podczas tej doskonale zbalansowanej 10-dniowej podróży. Wycieczka łączy przygodę safari, obiekty UNESCO, krajobrazy wyżynne, plantacje herbaty, wodospady i relaksujące doświadczenia nadmorskie, z zakwaterowaniem w opcji HB i prywatnym transportem.',
    includes: [
      'Klimatyzowany prywatny pojazd',
      'Profesjonalny kierowca mówiący po angielsku',
      'Zakwaterowanie w opcji HB (9 nocy)',
      'Paliwo i opłaty parkingowe',
      'Odbiór i odwóz z lotniska',
    ],
    excludes: ['Bilety wstępu i opłaty za atrakcje', 'Lunch i napoje', 'Wydatki osobiste'],
    days: [
      {
        title: 'Lotnisko / Hotel – Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Safari w Parku Narodowym Wilpattu',
            description:
              'Zwiedź największy park narodowy Sri Lanki podczas 5-godzinnego safari terenowym 4x4. Wypatruj lampartów, niedźwiedzi wargaczy, słoni, jeleni, krokodyli i bogatego ptactwa.',
          },
          {
            type: 'Nocleg',
            title: 'Thimbiri Wewa Resort – Wilpattu',
            description: 'Nocleg w Thimbiri Wewa Resort Wilpattu (lub podobnym), w opcji HB.',
            extra: ['Kolacja w cenie', 'Hotel wyższej klasy'],
          },
        ],
      },
      {
        title: 'Wilpattu – Anuradhapura – Sigiriya',
        activities: [
          {
            type: 'Wizyta religijna',
            title: 'Świątynia Sri Maha Bodhi',
            description: 'Odwiedź świętą figowiec Sri Maha Bodhi w Anuradhapurze.',
          },
          {
            type: 'Wizyta historyczna',
            title: 'Ruwanweli Maha Seya',
            description: 'Zwiedź jeden z najświętszych buddyjskich pomników Sri Lanki.',
          },
          {
            type: 'Malownicza wędrówka',
            title: 'Zachód słońca na Skale Pidurangala',
            description: 'Wejdź na Skałę Pidurangala, by zobaczyć zapierający dech zachód słońca.',
          },
          {
            type: 'Nocleg',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Nocleg w Fresco Water Villa (lub podobnym).',
            extra: ['Śniadanie i kolacja w cenie', 'Hotel 4-gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Trójkąt Kulturowy Sigiriya',
        activities: [
          {
            type: 'Obiekt UNESCO',
            title: 'Skalna Forteca Sigiriya',
            description: 'Wejdź na wpisaną na listę UNESCO Skalną Fortecę Sigiriya.',
          },
          {
            type: 'Doświadczenie wiejskie',
            title: 'Wycieczka do wioski Hiriwadunna',
            description: 'Poznaj autentyczne życie wiejskie Sri Lanki.',
          },
          {
            type: 'Safari',
            title: 'Safari w Minneriya',
            description: 'Skorzystaj z safari terenowego 4x4, znanego ze zgromadzeń słoni.',
          },
          {
            type: 'Wellness',
            title: 'Masaż ajurwedyjski',
            description: 'Zrelaksuj się przy tradycyjnym masażu ziołowymi olejkami.',
          },
          {
            type: 'Nocleg',
            title: 'Fresco Water Villa – Sigiriya',
            description: 'Nocleg w Fresco Water Villa (lub podobnym).',
            extra: ['Śniadanie i kolacja w cenie', 'Hotel 4-gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Sigiriya – Kandy',
        activities: [
          {
            type: 'Wizyta kulturalna',
            title: 'Ogród przypraw w Matale',
            description: 'Odkryj słynne przyprawy i zioła Sri Lanki.',
          },
          {
            type: 'Obiekt UNESCO',
            title: 'Świątynia Zęba Buddy',
            description: 'Odwiedź najświętszą buddyjską świątynię Sri Lanki w Kandy.',
          },
          {
            type: 'Widowisko kulturalne',
            title: 'Widowisko taneczne w Kandy',
            description: 'Ciesz się tradycyjnymi kandyjskimi tańcami.',
          },
          {
            type: 'Nocleg',
            title: 'Hotel Topaz – Kandy',
            description: 'Nocleg w Hotelu Topaz (lub podobnym) w Kandy, w opcji HB.',
            extra: ['Hotel 4-gwiazdkowy (Premium)', 'Prywatna łazienka', 'Śniadanie', 'Kolacja w cenie'],
          },
        ],
      },
      {
        title: 'Kandy – Nuwara Eliya – Ella',
        activities: [
          {
            type: 'Doświadczenie herbaciane',
            title: 'Fabryka herbaty Blue Field',
            description: 'Poznaj proces produkcji słynnej herbaty cejlońskiej.',
          },
          {
            type: 'Natura',
            title: 'Wodospad Ramboda',
            description: 'Odwiedź jeden z najwyższych wodospadów Sri Lanki.',
          },
          {
            type: 'Nocleg',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Nocleg w Oak Ray Ella Gap Hotel (lub podobnym), w opcji HB.',
            extra: ['Hotel 4-gwiazdkowy (Premium)', 'Prywatna łazienka', 'Śniadanie', 'Kolacja w cenie'],
          },
        ],
      },
      {
        title: 'Ella – Hikkaduwa',
        activities: [
          {
            type: 'Atrakcja',
            title: 'Most Nine Arch',
            description: 'Odwiedź słynny kolejowy most z czasów kolonialnych.',
          },
          {
            type: 'Dzika przyroda',
            title: 'Elephant Transit Home',
            description: 'Zobacz uratowane słoniątka.',
          },
          {
            type: 'Nocleg',
            title: 'Somerset Mirissa Hotel',
            description: 'Nocleg w Somerset Mirissa Hotel (lub podobnym), w opcji HB.',
            extra: ['Hotel 4-gwiazdkowy (Premium)', 'Śniadanie', 'Prywatna łazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Plaża Hikkaduwa',
        activities: [
          {
            type: 'Relaks na plaży',
            title: 'Plaża Hikkaduwa',
            description: 'Odpocznij na złotych plażach i popływaj w Oceanie Indyjskim.',
          },
          {
            type: 'Nocleg',
            title: 'Somerset Mirissa Hotel',
            description: 'Nocleg w Somerset Mirissa Hotel (lub podobnym), w opcji HB.',
            extra: ['Hotel 4-gwiazdkowy (Premium)', 'Śniadanie', 'Prywatna łazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Plaża Hikkaduwa',
        activities: [
          {
            type: 'Relaks na plaży',
            title: 'Plaża Hikkaduwa',
            description: 'Odpocznij na złotych plażach i popływaj w Oceanie Indyjskim.',
          },
          {
            type: 'Nocleg',
            title: 'Somerset Mirissa Hotel',
            description: 'Nocleg w Somerset Mirissa Hotel (lub podobnym), w opcji HB.',
            extra: ['Hotel 4-gwiazdkowy (Premium)', 'Śniadanie', 'Prywatna łazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Atrakcje wodne w drodze do Kalutary',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Pomnik Tsunami w Peraliya',
            description:
              'Pomnik Tsunami w Peraliya czci pamięć ofiar tsunami z 2004 roku, z górującą figurą Buddy jako symbolem pokoju i pamięci, blisko miejsca najgorszej katastrofy tsunami w historii Sri Lanki.',
          },
          {
            type: 'Ochrona dzikiej przyrody',
            title: 'Wizyta w wylęgarni żółwi w Koggali',
            description:
              'Odwiedź wylęgarnię i centrum ochrony żółwi w Koggali, gdzie chronione i przywracane do zdrowia są zagrożone żółwie morskie. Poznaj działania Sri Lanki na rzecz ochrony morskiej i zobacz małe żółwie w basenach wylęgowych.',
          },
          {
            type: 'Safari łodzią',
            title: 'Safari łodzią po rzece Madu',
            description:
              'Doświadcz malowniczego safari łodzią przez lasy namorzynowe i małe wyspy rzeki Madu. Odwiedź tradycyjne plantacje cynamonu i odkryj jeden z najpiękniejszych ekosystemów podmokłych Sri Lanki.',
          },
          {
            type: 'Nocleg',
            title: 'Kamili Beach Resort',
            description: 'Nocleg w Kamili Beach Resort (lub podobnym), w opcji HB.',
            extra: ['Hotel 4-gwiazdkowy (Premium)', 'Prywatna łazienka', 'Śniadanie', 'Kolacja w cenie'],
          },
        ],
      },
      {
        title: 'Wyjazd z Kolombo',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Pomnik Tsunami w Peraliya',
            description:
              'Pomnik Tsunami w Peraliya czci pamięć ofiar tsunami z 2004 roku, z górującą figurą Buddy jako symbolem pokoju i pamięci, blisko miejsca najgorszej katastrofy tsunami w historii Sri Lanki.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Independence Memorial Hall',
            description:
              'Independence Square w Kolombo to historyczny zabytek wzniesiony na pamiątkę niepodległości Sri Lanki, z okazałą kolonialną architekturą, bujnymi ogrodami i spokojną atmosferą.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Świątynia Gangaramaya',
            description:
              'Świątynia Gangaramaya w Kolombo to piękna buddyjska świątynia łącząca architekturę syngaleską, tajską i chińską, z figurami, relikwiami i spokojnym otoczeniem nad jeziorem.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Galle Face Green',
            description:
              'Galle Face Green w Kolombo to malownicza nadmorska promenada, idealna na relaksujące spacery, wspaniałe zachody słońca i street food, z żywą atmosferą nad Oceanem Indyjskim.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Rynek Pettah',
            description:
              'Colombo Fort Market to gwarne centrum handlowe z lokalnymi towarami, odzieżą, przyprawami i street foodem, zapewniające żywe zakupy w samym sercu miasta.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Czerwony Meczet (Meczet Jami Ul-Alfar)',
            description:
              'Meczet Jami Ul-Alfar, znany jako Czerwony Meczet w Kolombo, to ikoniczny zabytek o charakterystycznej czerwono-białej architekturze, ukazujący bogate islamskie dziedzictwo Sri Lanki.',
          },
        ],
      },
    ],
  },
  ru: {
    title: 'Частный тур по Шри-Ланке на 10 дней | Сафари, культура, горы и пляж',
    description:
      'Незабываемый частный тур по Шри-Ланке на 10 дней с сафари в Вилпатту, Анурадхапурой, Сигирией, Канди, приключениями в Элле и отдыхом на южном побережье.',
    duration: '10 дней',
    persons: '1-20 человек',
    tourType: 'Обзорный тур',
    overview:
      'Откройте для себя дикую природу, древние королевства, живописные горы и золотые пляжи Шри-Ланки в этом идеально сбалансированном туре на 10 дней. Путешествие сочетает сафари, объекты ЮНЕСКО, горные пейзажи, чайные плантации, водопады и отдых на побережье, с проживанием на полупансионе и частным транспортом.',
    includes: [
      'Частный автомобиль с кондиционером',
      'Профессиональный англоговорящий водитель',
      'Проживание на полупансионе (9 ночей)',
      'Топливо и парковка',
      'Встреча и трансфер из аэропорта',
    ],
    excludes: ['Входные билеты и оплата активностей', 'Обед и напитки', 'Личные расходы'],
    days: [
      {
        title: 'Аэропорт / отель – Вилпатту',
        activities: [
          {
            type: 'Сафари',
            title: 'Сафари в национальном парке Вилпатту',
            description:
              'Исследуйте крупнейший национальный парк Шри-Ланки на 5-часовом сафари на джипе 4x4. Ищите леопардов, медведей-губачей, слонов, оленей, крокодилов и разнообразных птиц.',
          },
          {
            type: 'Проживание',
            title: 'Thimbiri Wewa Resort – Вилпатту',
            description: 'Ночь в Thimbiri Wewa Resort Wilpattu (или подобном), на полупансионе.',
            extra: ['Ужин включён', 'Отель высокого класса'],
          },
        ],
      },
      {
        title: 'Вилпатту – Анурадхапура – Сигирия',
        activities: [
          {
            type: 'Религиозный визит',
            title: 'Храм Шри Маха Бодхи',
            description: 'Посетите священное дерево Шри Маха Бодхи в Анурадхапуре.',
          },
          {
            type: 'Исторический визит',
            title: 'Руванвели Маха Сея',
            description: 'Исследуйте один из самых священных буддийских памятников Шри-Ланки.',
          },
          {
            type: 'Живописный поход',
            title: 'Закат на скале Пидурангала',
            description: 'Подниметесь на скалу Пидурангала, чтобы увидеть захватывающий закат.',
          },
          {
            type: 'Проживание',
            title: 'Fresco Water Villa – Сигирия',
            description: 'Ночь в Fresco Water Villa (или подобном).',
            extra: ['Завтрак и ужин включены', 'Отель 4 звезды'],
          },
        ],
      },
      {
        title: 'Культурный треугольник Сигирии',
        activities: [
          {
            type: 'Объект ЮНЕСКО',
            title: 'Скала-крепость Сигирия',
            description: 'Подниметесь на скалу-крепость Сигирия, объект ЮНЕСКО.',
          },
          {
            type: 'Деревенский опыт',
            title: 'Экскурсия в деревню Хиривадунна',
            description: 'Познакомьтесь с подлинной сельской жизнью Шри-Ланки.',
          },
          {
            type: 'Сафари',
            title: 'Сафари в Миннерии',
            description: 'Насладитесь сафари на джипе 4x4, известным скоплениями слонов.',
          },
          {
            type: 'Оздоровление',
            title: 'Аюрведический массаж',
            description: 'Расслабьтесь с традиционным массажем травяными маслами.',
          },
          {
            type: 'Проживание',
            title: 'Fresco Water Villa – Сигирия',
            description: 'Ночь в Fresco Water Villa (или подобном).',
            extra: ['Завтрак и ужин включены', 'Отель 4 звезды'],
          },
        ],
      },
      {
        title: 'Сигирия – Канди',
        activities: [
          {
            type: 'Культурный визит',
            title: 'Сад специй в Матале',
            description: 'Откройте для себя знаменитые специи и травы Шри-Ланки.',
          },
          {
            type: 'Объект ЮНЕСКО',
            title: 'Храм Зуба Будды',
            description: 'Посетите самый священный буддийский храм Шри-Ланки в Канди.',
          },
          {
            type: 'Культурное шоу',
            title: 'Танцевальное шоу в Канди',
            description: 'Насладитесь традиционными кандийскими танцами.',
          },
          {
            type: 'Проживание',
            title: 'Hotel Topaz – Канди',
            description: 'Ночь в отеле Topaz (или подобном) в Канди, на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Собственная ванная комната', 'Завтрак', 'Ужин включён'],
          },
        ],
      },
      {
        title: 'Канди – Нувара-Элия – Элла',
        activities: [
          {
            type: 'Чайный опыт',
            title: 'Чайная фабрика Blue Field',
            description: 'Узнайте, как производится всемирно известный цейлонский чай.',
          },
          {
            type: 'Природа',
            title: 'Водопад Рамбода',
            description: 'Посетите один из самых высоких водопадов Шри-Ланки.',
          },
          {
            type: 'Проживание',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Ночь в Oak Ray Ella Gap Hotel (или подобном), на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Собственная ванная комната', 'Завтрак', 'Ужин включён'],
          },
        ],
      },
      {
        title: 'Элла – Хиккадува',
        activities: [
          {
            type: 'Достопримечательность',
            title: 'Мост Nine Arch',
            description: 'Посетите знаменитый железнодорожный мост колониальной эпохи.',
          },
          {
            type: 'Дикая природа',
            title: 'Elephant Transit Home',
            description: 'Понаблюдайте за спасёнными слонятами.',
          },
          {
            type: 'Проживание',
            title: 'Somerset Mirissa Hotel',
            description: 'Проживание в Somerset Mirissa Hotel (или подобном), на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Завтрак', 'Собственная ванная комната', 'Ужин'],
          },
        ],
      },
      {
        title: 'Пляж Хиккадувы',
        activities: [
          {
            type: 'Отдых на пляже',
            title: 'Пляж Хиккадувы',
            description: 'Отдохните на золотых пляжах и поплавайте в Индийском океане.',
          },
          {
            type: 'Проживание',
            title: 'Somerset Mirissa Hotel',
            description: 'Проживание в Somerset Mirissa Hotel (или подобном), на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Завтрак', 'Собственная ванная комната', 'Ужин'],
          },
        ],
      },
      {
        title: 'Пляж Хиккадувы',
        activities: [
          {
            type: 'Отдых на пляже',
            title: 'Пляж Хиккадувы',
            description: 'Отдохните на золотых пляжах и поплавайте в Индийском океане.',
          },
          {
            type: 'Проживание',
            title: 'Somerset Mirissa Hotel',
            description: 'Проживание в Somerset Mirissa Hotel (или подобном), на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Завтрак', 'Собственная ванная комната', 'Ужин'],
          },
        ],
      },
      {
        title: 'Водные развлечения на пути в Калутару',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Мемориал цунами в Пералии',
            description:
              'Мемориал цунами в Пералии чтит память жертв цунами 2004 года: возвышающаяся статуя Будды символизирует мир и память рядом с местом самой страшной катастрофы цунами в истории Шри-Ланки.',
          },
          {
            type: 'Охрана дикой природы',
            title: 'Посещение черепаховой инкубационной станции в Коггале',
            description:
              'Посетите инкубационную станцию и центр охраны черепах в Коггале, где находящиеся под угрозой морские черепахи получают защиту и реабилитацию. Узнайте о работе Шри-Ланки по охране морской среды и понаблюдайте за детёнышами черепах в бассейнах инкубатора.',
          },
          {
            type: 'Сафари на лодке',
            title: 'Сафари на лодке по реке Мадука',
            description:
              'Насладитесь живописным сафари на лодке через мангровые леса и небольшие острова реки Мадука. Посетите традиционные плантации корицы и исследуйте один из самых красивых водно-болотных экосистем Шри-Ланки.',
          },
          {
            type: 'Проживание',
            title: 'Kamili Beach Resort',
            description: 'Ночь в Kamili Beach Resort (или подобном), на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Собственная ванная комната', 'Завтрак', 'Ужин включён'],
          },
        ],
      },
      {
        title: 'Отъезд из Коломбо',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Мемориал цунами в Пералии',
            description:
              'Мемориал цунами в Пералии чтит память жертв цунами 2004 года: возвышающаяся статуя Будды символизирует мир и память рядом с местом самой страшной катастрофы цунами в истории Шри-Ланки.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Мемориальный зал Независимости',
            description:
              'Площадь Независимости в Коломбо — исторический памятник, построенный в честь независимости Шри-Ланки, с величественной колониальной архитектурой, пышными садами и умиротворяющей атмосферой.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Храм Гангарамая',
            description:
              'Храм Гангарамая в Коломбо — прекрасный буддийский храм, сочетающий шри-ланкийскую, тайскую и китайскую архитектуру, со статуями, реликвиями и спокойной обстановкой у озера.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Galle Face Green',
            description:
              'Galle Face Green в Коломбо — живописная набережная, идеальная для неспешных прогулок, потрясающих закатов и уличной еды, с оживлённой атмосферой на берегу Индийского океана.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Рынок Петтах',
            description:
              'Colombo Fort Market — оживлённый рынок с местными товарами, одеждой, специями и уличной едой, предлагающий яркий шопинг в самом сердце города.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Красная мечеть (мечеть Джами-уль-Альфар)',
            description:
              'Мечеть Джами-уль-Альфар, известная как Красная мечеть Коломбо, — знаковая достопримечательность с яркой красно-белой архитектурой, раскрывающая богатое исламское наследие Шри-Ланки.',
          },
        ],
      },
    ],
  },
};
