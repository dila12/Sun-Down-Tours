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
      'Half Board Accommodation (9 Nights) in carefully selected 3.5-Star or 4-Star hotels depending on availability',
      'Fuel & Parking Fees',
      'Airport Pickup & Drop Off',
    ],
    excludes: ['Entrance & Activity Fees', 'Lunch & Drinks', 'Personal Expenses'],
    seoIntro:
      'Ten days lets you absorb Sri Lanka at a human pace from leopard country in Wilpattu and the sacred bodhi tree of Anuradhapura through Sigiriya, Kandy, Ella\'s Nine Arches Bridge and extended south-coast beach days to a Colombo city finale. This private round tour layers two wildlife safaris, Ayurvedic wellness, tea-country waterfalls and unhurried Hikkaduwa beach time with Madu River mangroves, turtle hatcheries and capital landmarks like Gangaramaya Temple and Galle Face Green. Sundown Tours includes nine nights of half-board 4-star accommodation, airport transfers and an English-speaking chauffeur in a private air-conditioned vehicle. Entrance fees and lunches remain flexible so you control optional stops. The extra days versus a week-long itinerary mean less driving per highlight, room for spontaneous spice-garden visits and enough beach mornings that you actually relax not just photograph the ocean and move on.',
    highlights: [
      'Wilpattu and Minneriya jeep safaris plus Yala-style wildlife in the south',
      'Anuradhapura sacred sites, Sigiriya Lion Rock and Kandy Tooth Relic temple',
      'Ella Nine Arch Bridge, tea factories, Ramboda Falls and hill-country scenery',
      'Extended Hikkaduwa and Mirissa beach stays with turtle conservation visits',
      'Colombo city tour Independence Square, Gangaramaya, Galle Face and Pettah markets',
    ],
    whoIsFor:
      'Best for travellers with a full holiday week plus buffer days who want depth over speed families with teens, photographers and repeat visitors adding north-central heritage to the classic south route.',
    bestTimeNote:
      'December–April suits west- and south-coast beaches and Wilpattu access. May–September works well if you prioritise the Cultural Triangle and don\'t mind occasional afternoon showers in the hills.',
    faq: [
      {
        q: 'How does the 10-day tour differ from your 7- or 8-day itineraries?',
        a: 'You gain Wilpattu and Anuradhapura at the start, two extra beach nights around Hikkaduwa/Mirissa and a full Colombo sightseeing day at the end with fewer multi-hour drives crammed into a single day.',
      },
      {
        q: 'Are all nine hotel nights included in the price?',
        a: 'Yes nine nights in 4-star half-board hotels, private vehicle, driver and airport transfers are included. Park tickets, safari jeeps, lunches and optional Ayurvedic treatments are paid locally.',
      },
      {
        q: 'Can we finish at the airport instead of touring Colombo on Day 10?',
        a: 'Yes. If you have an afternoon flight we shorten the Colombo circuit to your must-see stops or transfer directly to Bandaranaike International Airport tell us your flight time when booking.',
      },
    ],
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
      'Halbpension-Unterkunft (9 Nächte) in sorgfältig ausgewählten 3,5- oder 4-Sterne-Hotels (je nach Verfügbarkeit)',
      'Kraftstoff & Parkgebühren',
      'Abholung & Rückfahrt zum Flughafen',
    ],
    excludes: ['Eintritts- & Aktivitätsgebühren', 'Mittagessen & Getränke', 'Persönliche Ausgaben'],
    seoIntro:
      'Zehn Tage lassen Sie Sri Lanka in menschlichem Tempo erleben – von Leopardengebiet in Wilpattu und dem heiligen Bodhi-Baum in Anuradhapura über Sigiriya, Kandy, die Nine Arches Bridge in Ella und ausgedehnte Strandtage an der Südküste bis zu einem Finale in Colombo. Diese private Rundreise kombiniert zwei Wildtier-Safaris, ayurvedisches Wellness, Wasserfälle im Teeland und entspannte Strandzeit in Hikkaduwa mit den Mangroven des Madu-Flusses, Schildkröten-Aufzuchtstationen und Hauptstadt-Sehenswürdigkeiten wie dem Gangaramaya-Tempel und Galle Face Green. Sundown Tours beinhaltet neun Nächte Halbpension in 4-Sterne-Unterkünften, Flughafentransfers und einen englischsprachigen Chauffeur in einem privaten klimatisierten Fahrzeug. Eintrittsgebühren und Mittagessen bleiben flexibel, sodass Sie die optionalen Stopps selbst steuern. Die zusätzlichen Tage im Vergleich zu einer einwöchigen Reise bedeuten weniger Fahrzeit pro Highlight, Raum für spontane Besuche von Gewürzgärten und genug Strandmorgen, um wirklich zu entspannen – statt nur den Ozean zu fotografieren und weiterzuziehen.',
    highlights: [
      'Jeep-Safaris in Wilpattu und Minneriya sowie Yala-ähnliche Tierwelt im Süden',
      'Heilige Stätten von Anuradhapura, Löwenfelsen Sigiriya und Zahnreliquien-Tempel in Kandy',
      'Nine Arch Bridge in Ella, Teefabriken, Ramboda-Wasserfälle und Landschaft des Hügellands',
      'Ausgedehnte Strandaufenthalte in Hikkaduwa und Mirissa mit Besuchen von Schildkröten-Schutzprojekten',
      'Stadtrundfahrt in Colombo – Independence Square, Gangaramaya, Galle Face und Pettah-Märkte',
    ],
    whoIsFor:
      'Am besten für Reisende mit einer vollen Ferienwoche plus Pufferzeit, die Tiefgang statt Tempo wünschen – Familien mit Teenagern, Fotografen und Wiederholungsbesucher, die das Kulturerbe im Norden der Mitte zur klassischen Südroute hinzufügen möchten.',
    bestTimeNote:
      'Dezember–April eignet sich für die West- und Südküstenstrände sowie den Zugang zu Wilpattu. Mai–September funktioniert gut, wenn Sie das Kultur-Dreieck priorisieren und gelegentliche Nachmittagsschauer im Hügelland nicht stören.',
    faq: [
      {
        q: 'Wie unterscheidet sich die 10-tägige Tour von Ihren 7- oder 8-tägigen Reisen?',
        a: 'Sie erhalten zusätzlich Wilpattu und Anuradhapura zu Beginn, zwei zusätzliche Strandnächte rund um Hikkaduwa/Mirissa und einen vollen Sightseeing-Tag in Colombo am Ende – mit weniger mehrstündigen Fahrten an einem einzigen Tag.',
      },
      {
        q: 'Sind alle neun Hotelnächte im Preis enthalten?',
        a: 'Ja – neun Nächte in 4-Sterne-Halbpension-Hotels, das Privatfahrzeug, der Fahrer und die Flughafentransfers sind enthalten. Parktickets, Safari-Jeeps, Mittagessen und optionale Ayurveda-Behandlungen werden vor Ort bezahlt.',
      },
      {
        q: 'Können wir am Flughafen enden, anstatt am 10. Tag Colombo zu besichtigen?',
        a: 'Ja. Bei einem Nachmittagsflug verkürzen wir die Colombo-Rundfahrt auf Ihre Wunsch-Stopps oder bringen Sie direkt zum Flughafen Bandaranaike – teilen Sie uns bei der Buchung Ihre Flugzeit mit.',
      },
    ],
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
      'Hébergement en demi-pension (9 nuits) dans des hôtels 3,5 ou 4 étoiles soigneusement sélectionnés, selon disponibilité',
      'Carburant & frais de parking',
      'Prise en charge & dépose à l’aéroport',
    ],
    excludes: ['Entrées & frais d’activités', 'Déjeuners & boissons', 'Dépenses personnelles'],
    seoIntro:
      'Dix jours vous permettent de découvrir le Sri Lanka à un rythme humain du territoire des léopards à Wilpattu et de l’arbre de la Bodhi sacré à Anuradhapura, en passant par Sigiriya, Kandy, le pont Nine Arches à Ella et de longues journées de plage sur la côte sud, jusqu’à une conclusion à Colombo. Ce circuit privé combine deux safaris fauniques, du bien-être ayurvédique, des cascades dans le pays du thé et un séjour tranquille à la plage de Hikkaduwa, avec les mangroves de la rivière Madu, des écloseries de tortues et des sites emblématiques de la capitale comme le temple de Gangaramaya et Galle Face Green. Sundown Tours inclut neuf nuits d’hébergement en demi-pension dans des hôtels 4 étoiles, les transferts aéroport et un chauffeur anglophone dans un véhicule privé climatisé. Les frais d’entrée et les déjeuners restent flexibles afin que vous gardiez le contrôle des arrêts optionnels. Les jours supplémentaires par rapport à un itinéraire d’une semaine signifient moins de route par site, de la place pour des visites spontanées de jardins d’épices et suffisamment de matinées à la plage pour vraiment vous détendre pas seulement photographier l’océan et repartir.',
    highlights: [
      'Safaris en jeep à Wilpattu et Minneriya, ainsi que faune de type Yala dans le sud',
      'Sites sacrés d’Anuradhapura, Rocher du Lion de Sigiriya et temple de la Dent à Kandy',
      'Nine Arch Bridge à Ella, fabriques de thé, chutes de Ramboda et paysages des hauts plateaux',
      'Longs séjours à la plage à Hikkaduwa et Mirissa avec visites de sites de conservation des tortues',
      'Visite de la ville de Colombo Independence Square, Gangaramaya, Galle Face et marchés de Pettah',
    ],
    whoIsFor:
      'Idéal pour les voyageurs disposant d’une semaine complète de vacances plus quelques jours tampons, qui préfèrent la profondeur à la vitesse familles avec adolescents, photographes et visiteurs récurrents ajoutant le patrimoine du centre-nord au parcours classique du sud.',
    bestTimeNote:
      'Décembre-avril convient aux plages des côtes ouest et sud ainsi qu’à l’accès à Wilpattu. Mai-septembre fonctionne bien si vous privilégiez le Triangle culturel et que quelques averses d’après-midi dans les collines ne vous dérangent pas.',
    faq: [
      {
        q: 'En quoi le circuit de 10 jours diffère-t-il de vos itinéraires de 7 ou 8 jours ?',
        a: 'Vous gagnez Wilpattu et Anuradhapura au début, deux nuits de plage supplémentaires autour de Hikkaduwa/Mirissa et une journée complète de visite de Colombo à la fin avec moins de trajets de plusieurs heures entassés dans une seule journée.',
      },
      {
        q: 'Les neuf nuits d’hôtel sont-elles toutes incluses dans le prix ?',
        a: 'Oui neuf nuits en hôtels 4 étoiles en demi-pension, le véhicule privé, le chauffeur et les transferts aéroport sont inclus. Les billets de parc, les jeeps de safari, les déjeuners et les soins ayurvédiques optionnels sont payés sur place.',
      },
      {
        q: 'Pouvons-nous terminer à l’aéroport plutôt que de visiter Colombo le jour 10 ?',
        a: 'Oui. Si vous avez un vol dans l’après-midi, nous raccourcissons le circuit de Colombo à vos incontournables ou vous transférons directement à l’aéroport international de Bandaranaike indiquez-nous l’heure de votre vol lors de la réservation.',
      },
    ],
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
      'Sistemazione in mezza pensione (9 notti) in hotel da 3,5 o 4 stelle attentamente selezionati, in base alla disponibilità',
      'Carburante e parcheggi',
      'Prelievo e riaccompagnamento in aeroporto',
    ],
    excludes: ['Ingressi e costi delle attività', 'Pranzo e bevande', 'Spese personali'],
    seoIntro:
      'Dieci giorni vi permettono di vivere lo Sri Lanka a un ritmo umano dal territorio dei leopardi a Wilpattu e il sacro albero della Bodhi ad Anuradhapura, passando per Sigiriya, Kandy, il ponte Nine Arches a Ella e lunghe giornate di spiaggia sulla costa meridionale, fino a un finale a Colombo. Questo tour privato combina due safari nella fauna selvatica, benessere ayurvedico, cascate nella terra del tè e tempo rilassato sulla spiaggia di Hikkaduwa, con le mangrovie del fiume Madu, vivai di tartarughe e luoghi simbolo della capitale come il Tempio di Gangaramaya e Galle Face Green. Sundown Tours include nove notti di sistemazione in mezza pensione in hotel 4 stelle, i transfer aeroportuali e un autista di lingua inglese in un veicolo privato climatizzato. I biglietti d’ingresso e i pranzi restano flessibili, così potete gestire le soste opzionali. I giorni extra rispetto a un itinerario di una settimana significano meno guida per ogni attrazione, spazio per visite spontanee ai giardini di spezie e sufficienti mattinate in spiaggia per rilassarvi davvero non solo fotografare l’oceano e proseguire.',
    highlights: [
      'Safari in jeep a Wilpattu e Minneriya, oltre a fauna selvatica in stile Yala nel sud',
      'Siti sacri di Anuradhapura, Lion Rock di Sigiriya e Tempio della Reliquia del Dente a Kandy',
      'Nine Arch Bridge a Ella, fabbriche di tè, cascate di Ramboda e panorami dell’altopiano',
      'Soggiorni prolungati in spiaggia a Hikkaduwa e Mirissa con visite ai centri di conservazione delle tartarughe',
      'Tour della città di Colombo Independence Square, Gangaramaya, Galle Face e mercati di Pettah',
    ],
    whoIsFor:
      'Ideale per i viaggiatori con una settimana intera di vacanza più giorni cuscinetto che preferiscono la profondità alla velocità famiglie con adolescenti, fotografi e visitatori abituali che aggiungono il patrimonio del nord-centrale al classico percorso meridionale.',
    bestTimeNote:
      'Dicembre-aprile è adatto alle spiagge della costa occidentale e meridionale e all’accesso a Wilpattu. Maggio-settembre funziona bene se date priorità al Triangolo Culturale e non vi dispiacciono occasionali piogge pomeridiane sulle colline.',
    faq: [
      {
        q: 'In cosa differisce il tour di 10 giorni dai vostri itinerari di 7 o 8 giorni?',
        a: 'Guadagnate Wilpattu e Anuradhapura all’inizio, due notti extra in spiaggia intorno a Hikkaduwa/Mirissa e una giornata completa di visite a Colombo alla fine con meno viaggi di più ore concentrati in un solo giorno.',
      },
      {
        q: 'Tutte le nove notti in hotel sono incluse nel prezzo?',
        a: 'Sì nove notti in hotel 4 stelle in mezza pensione, veicolo privato, autista e transfer aeroportuali sono inclusi. Biglietti dei parchi, jeep per il safari, pranzi e trattamenti ayurvedici opzionali si pagano in loco.',
      },
      {
        q: 'Possiamo concludere in aeroporto invece di visitare Colombo il decimo giorno?',
        a: 'Sì. Se avete un volo nel pomeriggio, accorciamo il tour di Colombo alle vostre tappe imperdibili oppure vi trasferiamo direttamente all’aeroporto di Bandaranaike comunicateci l’orario del vostro volo al momento della prenotazione.',
      },
    ],
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
      'Alojamiento en media pensión (9 noches) en hoteles de 3,5 o 4 estrellas cuidadosamente seleccionados, según disponibilidad',
      'Combustible y aparcamiento',
      'Recogida y traslado al aeropuerto',
    ],
    excludes: ['Entradas y costes de actividades', 'Almuerzo y bebidas', 'Gastos personales'],
    seoIntro:
      'Diez días le permiten disfrutar de Sri Lanka a un ritmo humano: desde el territorio de los leopardos en Wilpattu y el sagrado árbol de la Bodhi en Anuradhapura, pasando por Sigiriya, Kandy, el puente Nine Arches en Ella y largos días de playa en la costa sur, hasta un final en Colombo. Este circuito privado combina dos safaris de fauna, bienestar ayurvédico, cascadas en el país del té y un tiempo relajado en la playa de Hikkaduwa, con los manglares del río Madu, viveros de tortugas e hitos de la capital como el Templo de Gangaramaya y Galle Face Green. Sundown Tours incluye nueve noches de alojamiento en media pensión en hoteles de 4 estrellas, traslados al aeropuerto y un chófer de habla inglesa en un vehículo privado con aire acondicionado. Las entradas y los almuerzos se mantienen flexibles para que usted controle las paradas opcionales. Los días adicionales respecto a un itinerario de una semana significan menos conducción por cada punto destacado, espacio para visitas espontáneas a jardines de especias y suficientes mañanas de playa para relajarse de verdad, no solo fotografiar el océano y seguir adelante.',
    highlights: [
      'Safaris en jeep en Wilpattu y Minneriya, además de fauna al estilo Yala en el sur',
      'Lugares sagrados de Anuradhapura, Lion Rock de Sigiriya y templo de la Reliquia del Diente en Kandy',
      'Nine Arch Bridge en Ella, fábricas de té, cataratas de Ramboda y paisajes de las tierras altas',
      'Estancias prolongadas en las playas de Hikkaduwa y Mirissa con visitas a centros de conservación de tortugas',
      'Recorrido por la ciudad de Colombo: Independence Square, Gangaramaya, Galle Face y mercados de Pettah',
    ],
    whoIsFor:
      'Ideal para viajeros con una semana completa de vacaciones más días de margen que prefieren profundidad a velocidad: familias con adolescentes, fotógrafos y visitantes recurrentes que añaden el patrimonio del centro-norte a la ruta clásica del sur.',
    bestTimeNote:
      'Diciembre-abril es adecuado para las playas de las costas oeste y sur y el acceso a Wilpattu. Mayo-septiembre funciona bien si prioriza el Triángulo Cultural y no le importan algunas lluvias vespertinas ocasionales en las colinas.',
    faq: [
      {
        q: '¿En qué se diferencia el circuito de 10 días de sus itinerarios de 7 u 8 días?',
        a: 'Se añaden Wilpattu y Anuradhapura al inicio, dos noches de playa adicionales en Hikkaduwa/Mirissa y un día completo de turismo en Colombo al final, con menos trayectos de varias horas concentrados en un solo día.',
      },
      {
        q: '¿Están incluidas las nueve noches de hotel en el precio?',
        a: 'Sí: nueve noches en hoteles de 4 estrellas en media pensión, el vehículo privado, el conductor y los traslados al aeropuerto están incluidos. Las entradas a los parques, los jeeps de safari, los almuerzos y los tratamientos ayurvédicos opcionales se pagan in situ.',
      },
      {
        q: '¿Podemos terminar en el aeropuerto en lugar de hacer turismo en Colombo el día 10?',
        a: 'Sí. Si tiene un vuelo por la tarde, reducimos el recorrido por Colombo a sus paradas imprescindibles o le trasladamos directamente al aeropuerto internacional de Bandaranaike; indíquenos la hora de su vuelo al reservar.',
      },
    ],
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
      'Zakwaterowanie w opcji HB (9 nocy) w starannie wybranych hotelach 3,5- lub 4-gwiazdkowych, w zależności od dostępności',
      'Paliwo i opłaty parkingowe',
      'Odbiór i odwóz z lotniska',
    ],
    excludes: ['Bilety wstępu i opłaty za atrakcje', 'Lunch i napoje', 'Wydatki osobiste'],
    seoIntro:
      'Dziesięć dni pozwala poznać Sri Lankę w ludzkim tempie – od terytorium lampartów w Wilpattu i świętego drzewa Bodhi w Anuradhapurze, przez Sigiriya, Kandy, most Nine Arches w Elli i długie dni na plaży na południowym wybrzeżu, aż po finał w Colombo. Ta prywatna wycieczka łączy dwa safari z dziką przyrodą, ajurwedyjski wellness, wodospady w krainie herbaty i spokojny czas na plaży w Hikkaduwie z namorzynami rzeki Madu, wylęgarniami żółwi i symbolami stolicy, takimi jak świątynia Gangaramaya i Galle Face Green. Sundown Tours obejmuje dziewięć nocy zakwaterowania w formule half board w hotelach 4-gwiazdkowych, transfery na lotnisko oraz anglojęzycznego kierowcę w prywatnym klimatyzowanym pojeździe. Opłaty za wstęp i lunch pozostają elastyczne, dzięki czemu sami kontrolują Państwo opcjonalne przystanki. Dodatkowe dni w porównaniu do tygodniowego planu oznaczają mniej jazdy na każdą atrakcję, miejsce na spontaniczne wizyty w ogrodach przypraw i wystarczająco wiele plażowych poranków, by naprawdę odpocząć – a nie tylko sfotografować ocean i jechać dalej.',
    highlights: [
      'Safari jeepem w Wilpattu i Minneriya oraz dzika przyroda w stylu Yala na południu',
      'Święte miejsca Anuradhapury, Lion Rock w Sigiriya i świątynia Relikwii Zęba w Kandy',
      'Most Nine Arch w Elli, fabryki herbaty, wodospady Ramboda i krajobrazy górskiego kraju',
      'Wydłużone pobyty na plażach Hikkaduwa i Mirissa z wizytami w ośrodkach ochrony żółwi',
      'Wycieczka po Colombo – Independence Square, Gangaramaya, Galle Face i targi Pettah',
    ],
    whoIsFor:
      'Najlepsza dla podróżnych z pełnym tygodniem urlopu plus dniami buforowymi, którzy wolą głębię niż tempo – rodzin z nastolatkami, fotografów i powracających gości dodających dziedzictwo północno-centralne do klasycznej trasy południowej.',
    bestTimeNote:
      'Grudzień–kwiecień sprawdza się na plażach zachodniego i południowego wybrzeża oraz przy dostępie do Wilpattu. Maj–wrzesień działa dobrze, jeśli priorytetem jest Trójkąt Kulturowy i nie przeszkadzają Państwu okazjonalne popołudniowe deszcze w górach.',
    faq: [
      {
        q: 'Czym różni się 10-dniowa wycieczka od Państwa planów 7- lub 8-dniowych?',
        a: 'Zyskujecie Wilpattu i Anuradhapurę na początku, dwie dodatkowe noce na plaży w okolicach Hikkaduwy/Mirissy oraz cały dzień zwiedzania Colombo na koniec – z mniejszą liczbą wielogodzinnych przejazdów skupionych w jednym dniu.',
      },
      {
        q: 'Czy wszystkie dziewięć nocy w hotelu są wliczone w cenę?',
        a: 'Tak – dziewięć nocy w hotelach 4-gwiazdkowych z wyżywieniem HB, prywatny pojazd, kierowca i transfery na lotnisko są wliczone. Bilety do parków, jeepy na safari, lunche i opcjonalne zabiegi ajurwedyjskie płaci się na miejscu.',
      },
      {
        q: 'Czy możemy zakończyć na lotnisku, a nie zwiedzać Colombo 10. dnia?',
        a: 'Tak. Jeśli Państwa lot jest po południu, skracamy trasę po Colombo do najważniejszych punktów lub przewozimy Państwa bezpośrednio na lotnisko Bandaranaike – podajcie nam godzinę lotu przy rezerwacji.',
      },
    ],
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
      'Проживание на полупансионе (9 ночей) в тщательно отобранных отелях 3,5★ или 4★ в зависимости от наличия мест',
      'Топливо и парковка',
      'Встреча и трансфер из аэропорта',
    ],
    excludes: ['Входные билеты и оплата активностей', 'Обед и напитки', 'Личные расходы'],
    seoIntro:
      'Десять дней позволяют изучить Шри-Ланку в комфортном темпе от территории леопардов в Wilpattu и священного дерева Бодхи в Anuradhapura через Sigiriya, Канди, мост Nine Arches в Элле и продолжительные пляжные дни на южном побережье до финала в Коломбо. Этот частный тур сочетает два сафари по дикой природе, аюрведический велнес, водопады в чайном крае и спокойное время на пляже Hikkaduwa с мангровыми зарослями реки Маду, инкубаториями для черепах и достопримечательностями столицы, такими как храм Gangaramaya и Galle Face Green. Sundown Tours включает девять ночей проживания на полупансионе в отелях 4★, трансферы из/в аэропорт и англоговорящего шофёра в частном кондиционированном автомобиле. Входные билеты и обеды остаются гибкими, чтобы вы сами контролировали дополнительные остановки. Дополнительные дни по сравнению с недельным маршрутом означают меньше времени в дороге на каждую достопримечательность, место для спонтанных визитов в сады специй и достаточно пляжных утр, чтобы по-настоящему отдохнуть а не просто сфотографировать океан и поехать дальше.',
    highlights: [
      'Джип-сафари в Wilpattu и Minneriya, а также дикая природа в стиле Yala на юге',
      'Священные места Anuradhapura, Lion Rock в Sigiriya и храм Реликвии Зуба в Канди',
      'Мост Nine Arch в Элле, чайные фабрики, водопады Ramboda и пейзажи горной страны',
      'Продолжительное пребывание на пляжах Hikkaduwa и Мириссы с посещением центров охраны черепах',
      'Экскурсия по Коломбо Independence Square, Gangaramaya, Galle Face и рынки Pettah',
    ],
    whoIsFor:
      'Лучший вариант для путешественников с полной отпускной неделей плюс запасными днями, которые предпочитают глубину скорости семей с подростками, фотографов и повторных гостей, добавляющих наследие севера-центра к классическому южному маршруту.',
    bestTimeNote:
      'Декабрь–апрель подходит для пляжей западного и южного побережья и доступа к Wilpattu. Май–сентябрь хорошо работает, если приоритетом является Культурный треугольник и вас не смущают периодические послеобеденные дожди в горах.',
    faq: [
      {
        q: 'Чем 10-дневный тур отличается от ваших 7- или 8-дневных маршрутов?',
        a: 'Вы получаете Wilpattu и Anuradhapura в начале, две дополнительные пляжные ночи в районе Hikkaduwa/Мириссы и полноценный день экскурсий по Коломбо в конце с меньшим количеством многочасовых переездов в один день.',
      },
      {
        q: 'Включены ли все девять ночей в отеле в стоимость?',
        a: 'Да девять ночей в отелях 4★ на полупансионе, частный автомобиль, водитель и трансферы из/в аэропорт включены. Билеты в парки, джипы для сафари, обеды и дополнительные аюрведические процедуры оплачиваются на месте.',
      },
      {
        q: 'Можем ли мы закончить тур в аэропорту, а не осматривать Коломбо на 10-й день?',
        a: 'Да. Если у вас дневной рейс, мы сокращаем экскурсию по Коломбо до самых важных остановок или отвезём вас прямо в аэропорт Бандаранаике сообщите нам время рейса при бронировании.',
      },
    ],
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
              'Площадь Независимости в Коломбо исторический памятник, построенный в честь независимости Шри-Ланки, с величественной колониальной архитектурой, пышными садами и умиротворяющей атмосферой.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Храм Гангарамая',
            description:
              'Храм Гангарамая в Коломбо прекрасный буддийский храм, сочетающий шри-ланкийскую, тайскую и китайскую архитектуру, со статуями, реликвиями и спокойной обстановкой у озера.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Galle Face Green',
            description:
              'Galle Face Green в Коломбо живописная набережная, идеальная для неспешных прогулок, потрясающих закатов и уличной еды, с оживлённой атмосферой на берегу Индийского океана.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Рынок Петтах',
            description:
              'Colombo Fort Market оживлённый рынок с местными товарами, одеждой, специями и уличной едой, предлагающий яркий шопинг в самом сердце города.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Красная мечеть (мечеть Джами-уль-Альфар)',
            description:
              'Мечеть Джами-уль-Альфар, известная как Красная мечеть Коломбо, знаковая достопримечательность с яркой красно-белой архитектурой, раскрывающая богатое исламское наследие Шри-Ланки.',
          },
        ],
      },
    ],
  },
  nl: {
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
      'Halbpension-Unterkunft (9 Nächte) in sorgfältig ausgewählten 3,5- oder 4-Sterne-Hotels (je nach Verfügbarkeit)',
      'Kraftstoff & Parkgebühren',
      'Abholung & Rückfahrt zum Flughafen',
    ],
    excludes: ['Eintritts- & Aktivitätsgebühren', 'Mittagessen & Getränke', 'Persönliche Ausgaben'],
    seoIntro:
      'Zehn Tage lassen Sie Sri Lanka in menschlichem Tempo erleben – von Leopardengebiet in Wilpattu und dem heiligen Bodhi-Baum in Anuradhapura über Sigiriya, Kandy, die Nine Arches Bridge in Ella und ausgedehnte Strandtage an der Südküste bis zu einem Finale in Colombo. Diese private Rundreise kombiniert zwei Wildtier-Safaris, ayurvedisches Wellness, Wasserfälle im Teeland und entspannte Strandzeit in Hikkaduwa mit den Mangroven des Madu-Flusses, Schildkröten-Aufzuchtstationen und Hauptstadt-Sehenswürdigkeiten wie dem Gangaramaya-Tempel und Galle Face Green. Sundown Tours beinhaltet neun Nächte Halbpension in 4-Sterne-Unterkünften, Flughafentransfers und einen englischsprachigen Chauffeur in einem privaten klimatisierten Fahrzeug. Eintrittsgebühren und Mittagessen bleiben flexibel, sodass Sie die optionalen Stopps selbst steuern. Die zusätzlichen Tage im Vergleich zu einer einwöchigen Reise bedeuten weniger Fahrzeit pro Highlight, Raum für spontane Besuche von Gewürzgärten und genug Strandmorgen, um wirklich zu entspannen – statt nur den Ozean zu fotografieren und weiterzuziehen.',
    highlights: [
      'Jeep-Safaris in Wilpattu und Minneriya sowie Yala-ähnliche Tierwelt im Süden',
      'Heilige Stätten von Anuradhapura, Löwenfelsen Sigiriya und Zahnreliquien-Tempel in Kandy',
      'Nine Arch Bridge in Ella, Teefabriken, Ramboda-Wasserfälle und Landschaft des Hügellands',
      'Ausgedehnte Strandaufenthalte in Hikkaduwa und Mirissa mit Besuchen von Schildkröten-Schutzprojekten',
      'Stadtrundfahrt in Colombo – Independence Square, Gangaramaya, Galle Face und Pettah-Märkte',
    ],
    whoIsFor:
      'Am besten für Reisende mit einer vollen Ferienwoche plus Pufferzeit, die Tiefgang statt Tempo wünschen – Familien mit Teenagern, Fotografen und Wiederholungsbesucher, die das Kulturerbe im Norden der Mitte zur klassischen Südroute hinzufügen möchten.',
    bestTimeNote:
      'Dezember–April eignet sich für die West- und Südküstenstrände sowie den Zugang zu Wilpattu. Mai–September funktioniert gut, wenn Sie das Kultur-Dreieck priorisieren und gelegentliche Nachmittagsschauer im Hügelland nicht stören.',
    faq: [
      {
        q: 'Wie unterscheidet sich die 10-tägige Tour von Ihren 7- oder 8-tägigen Reisen?',
        a: 'Sie erhalten zusätzlich Wilpattu und Anuradhapura zu Beginn, zwei zusätzliche Strandnächte rund um Hikkaduwa/Mirissa und einen vollen Sightseeing-Tag in Colombo am Ende – mit weniger mehrstündigen Fahrten an einem einzigen Tag.',
      },
      {
        q: 'Sind alle neun Hotelnächte im Preis enthalten?',
        a: 'Ja – neun Nächte in 4-Sterne-Halbpension-Hotels, das Privatfahrzeug, der Fahrer und die Flughafentransfers sind enthalten. Parktickets, Safari-Jeeps, Mittagessen und optionale Ayurveda-Behandlungen werden vor Ort bezahlt.',
      },
      {
        q: 'Können wir am Flughafen enden, anstatt am 10. Tag Colombo zu besichtigen?',
        a: 'Ja. Bei einem Nachmittagsflug verkürzen wir die Colombo-Rundfahrt auf Ihre Wunsch-Stopps oder bringen Sie direkt zum Flughafen Bandaranaike – teilen Sie uns bei der Buchung Ihre Flugzeit mit.',
      },
    ],
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
  }
};
