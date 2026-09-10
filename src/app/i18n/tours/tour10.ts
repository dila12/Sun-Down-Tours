import type { TourContent } from './localize';
import { PACKAGE_EXCLUDES, PACKAGE_INCLUDES } from './package-inclusions';

/**
 * 10 day Sri Lanka round tour (id: tour10).
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
  This tour combines safari adventure, UNESCO heritage sites, hill country landscapes, tea plantations, waterfalls and relaxing coastal experiences with half  board accommodation and private transportation.`,
    tourType: 'Round Tour',
    itinerary: [
      {
        day: 1,
        title: 'Airport / Hotel  Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: { title: 'Wilpattu National Park Safari', icon: 'fa-paw', color: '#27ae60' },
            description:
              'Explore Sri Lanka’s largest national park on a 5 hour 4x4 jeep safari. Spot leopards, sloth bears, elephants, deer, crocodiles and diverse birdlife.',
            image: 'assets/img/5daysTours/37.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Thimbiri Wewa Resort  Wilpattu', icon: 'fa-hotel', color: '#16a085' },
            description:
              'Overnight stay at Thimbiri Wewa Resort Wilpattu (or similar). half  Board basis.',
            image: 'assets/img/5daysTours/38.jpg',
            extra: ['Dinner Included', 'Star Class Hotel'],
          },
        ],
      },
      {
        day: 2,
        title: 'Wilpattu  Anuradhapura  Sigiriya',
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
            title: { title: 'Fresco Water Villa  Sigiriya', icon: 'fa-hotel', color: '#16a085' },
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
            description: 'Climb the UNESCO listed Sigiriya Rock Fortress.',
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
            title: { title: 'Fresco Water Villa  Sigiriya', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Fresco Water Villa (or similar).',
            image: 'assets/img/5daysTours/c.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 4,
        title: 'Sigiriya  Kandy',
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
            title: { title: 'Hotel Topaz  Kandy', icon: 'fa-hotel', color: '#16a085' },
            description: 'Overnight stay at Hotel Topaz (or similar) in Kandy. half  Board basis.',
            image: 'assets/img/5daysTours/25.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Breakfast', 'Dinner Included'],
          },
        ],
      },
      {
        day: 5,
        title: 'Kandy  Nuwara Eliya  Ella',
        activities: [
          {
            type: 'Tea Experience',
            title: { title: 'Blue Field Tea Factory', icon: 'fa-mug-hot', color: '#8B4513' },
            description: 'Learn how world famous Ceylon tea is produced.',
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
        title: 'Ella  Hikkaduwa',
        activities: [
          {
            type: 'Landmark',
            title: { title: 'Nine Arch Bridge', icon: 'fa-bridge', color: '#A9A9A9' },
            description: 'Visit the famous colonial era railway bridge.',
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
            title: { title: 'Red Mosque (Jami Ul Alfar Mosque)', icon: 'fa-mosque', color: '#FF0000' },
            description:
              'Jami Ul Alfar Mosque, or the Red Mosque in Colombo, is an iconic landmark with striking red and white architecture, offering a glimpse into Sri Lanka’s rich Islamic heritage.',
            image: 'assets/img/5daysTours/owzua0jhk0zazg9d8hcn.jpg',
          },
        ],
      },
    ],
    includes: PACKAGE_INCLUDES.en,
    excludes: PACKAGE_EXCLUDES.en,
    seoIntro:
      'Ten days lets you absorb Sri Lanka at a human pace from leopard country in Wilpattu and the sacred bodhi tree of Anuradhapura through Sigiriya, Kandy, Ella\'s Nine Arches Bridge and extended south coast beach days to a Colombo city finale. This private round tour layers two wildlife safaris, Ayurvedic wellness, tea country waterfalls and unhurried Hikkaduwa beach time with Madu River mangroves, turtle hatcheries and capital landmarks like Gangaramaya Temple and Galle Face Green. Sundown Tours includes nine nights of half board 4 Star accommodation, airport transfers and an English speaking chauffeur in a private air conditioned vehicle. Entrance fees and lunches remain flexible so you control optional stops. The extra days versus a week long itinerary mean less driving per highlight, room for spontaneous spice garden visits and enough beach mornings that you actually relax not just photograph the ocean and move on.',
    highlights: [
      'Wilpattu and Minneriya jeep safaris plus Yala style wildlife in the south',
      'Anuradhapura sacred sites, Sigiriya Lion Rock and Kandy Tooth Relic temple',
      'Ella Nine Arch Bridge, tea factories, Ramboda Falls and hill country scenery',
      'Extended Hikkaduwa and Mirissa beach stays with turtle conservation visits',
      'Colombo city tour Independence Square, Gangaramaya, Galle Face and Pettah markets',
    ],
    whoIsFor:
      'Best for travellers with a full holiday week plus buffer days who want depth over speed families with teens, photographers and repeat visitors adding North central heritage to the classic south route.',
    bestTimeNote:
      'December to April suits west- and south coast beaches and Wilpattu access. May to September works well if you prioritise the Cultural Triangle and don\'t mind occasional afternoon showers in the hills.',
    faq: [
      {
        q: 'How does the 10 day tour differ from your 7- or 8 days itineraries?',
        a: 'You gain Wilpattu and Anuradhapura at the start, two extra beach nights around Hikkaduwa/Mirissa and a full Colombo sightseeing day at the end with fewer multi hour drives crammed into a single day.',
      },
      {
        q: 'Are all nine hotel nights included in the price?',
        a: 'Yes nine nights in 4 Star half board hotels, private vehicle, driver and airport transfers are included. Park tickets, safari jeeps, lunches and optional Ayurvedic treatments are paid locally.',
      },
      {
        q: 'Can we finish at the airport instead of touring Colombo on Day 10?',
        a: 'Yes. If you have an afternoon flight we shorten the Colombo circuit to your must see stops or transfer directly to Bandaranaike International Airport tell us your flight time when booking.',
      },
    ],
  },
  de: {
    title: '10 Tage Sri Lanka Privatreise | Safari, Kultur, Bergland & Strand',
    description:
      'Eine unvergessliche 10 tagige Sri Lanka Privatreise mit Wilpattu Safari, Anuradhapura, Sigiriya, Kandy, Abenteuern in Ella und einem entspannten Aufenthalt an der Sudkuste.',
    duration: '10 Tage',
    persons: '1-20 Personen',
    tourType: 'Rundreise',
    overview:
      'Entdecken Sie Sri Lankas Tierwelt, antike Konigreiche, malerische Berge und goldene Strande auf dieser perfekt ausbalancierten 10 tagigen Reise. Diese Rundreise verbindet Safari Abenteuer, UNESCO Welterbestatten, Berglandschaften, Teeplantagen, Wasserfalle und entspannte Kustenerlebnisse mit Halbpension und privatem Transport.',
    includes: PACKAGE_INCLUDES.de,
    excludes: PACKAGE_EXCLUDES.de,
    seoIntro:
      'Zehn Tage lassen Sie Sri Lanka in menschlichem Tempo erleben  von Leopardengebiet in Wilpattu und dem heiligen Bodhi Baum in Anuradhapura uber Sigiriya, Kandy, die Nine Arches Bridge in Ella und ausgedehnte Strandtage an der Sudkuste bis zu einem Finale in Colombo. Diese private Rundreise kombiniert zwei Wildtier Safaris, ayurvedisches Wellness, Wasserfalle im Teeland und entspannte Strandzeit in Hikkaduwa mit den Mangroven des Madu Flusses, Schildkroten Aufzuchtstationen und Hauptstadt Sehenswurdigkeiten wie dem Gangaramaya Tempel und Galle Face Green. Sundown Tours beinhaltet neun Nachte Halbpension in 4 Sterne Unterkunften, Flughafentransfers und einen englischsprachigen Chauffeur in einem privaten klimatisierten Fahrzeug. Eintrittsgebuhren und Mittagessen bleiben flexibel, sodass Sie die optionalen Stopps selbst steuern. Die zusatzlichen Tage im Vergleich zu einer einwochigen Reise bedeuten weniger Fahrzeit pro Highlight, Raum fur spontane Besuche von Gewurzgarten und genug Strandmorgen, um wirklich zu entspannen  statt nur den Ozean zu fotografieren und weiterzuziehen.',
    highlights: [
      'Jeep Safaris in Wilpattu und Minneriya sowie Yala ahnliche Tierwelt im Suden',
      'Heilige Statten von Anuradhapura, Lowenfelsen Sigiriya und Zahnreliquien Tempel in Kandy',
      'Nine Arch Bridge in Ella, Teefabriken, Ramboda Wasserfalle und Landschaft des Hugellands',
      'Ausgedehnte Strandaufenthalte in Hikkaduwa und Mirissa mit Besuchen von Schildkroten Schutzprojekten',
      'Stadtrundfahrt in Colombo  Independence Square, Gangaramaya, Galle Face und Pettah Markte',
    ],
    whoIsFor:
      'Am besten fur Reisende mit einer vollen Ferienwoche plus Pufferzeit, die Tiefgang statt Tempo wunschen  Familien mit Teenagern, Fotografen und Wiederholungsbesucher, die das Kulturerbe im Norden der Mitte zur klassischen Sudroute hinzufugen mochten.',
    bestTimeNote:
      'Dezember to April eignet sich fur die West und Sudkustenstrande sowie den Zugang zu Wilpattu. Mai to September funktioniert gut, wenn Sie das Kultur Dreieck priorisieren und gelegentliche Nachmittagsschauer im Hugelland nicht storen.',
    faq: [
      {
        q: 'Wie unterscheidet sich die 10 tagige Tour von Ihren 7- oder 8 tagigen Reisen?',
        a: 'Sie erhalten zusatzlich Wilpattu und Anuradhapura zu Beginn, zwei zusatzliche Strandnachte rund um Hikkaduwa/Mirissa und einen vollen Sightseeing Tag in Colombo am Ende  mit weniger mehrstundigen Fahrten an einem einzigen Tag.',
      },
      {
        q: 'Sind alle neun Hotelnachte im Preis enthalten?',
        a: 'Ja  neun Nachte in 4 Sterne Halbpension Hotels, das Privatfahrzeug, der Fahrer und die Flughafentransfers sind enthalten. Parktickets, Safari Jeeps, Mittagessen und optionale Ayurveda Behandlungen werden vor Ort bezahlt.',
      },
      {
        q: 'Konnen wir am Flughafen enden, anstatt am 10. Tag Colombo zu besichtigen?',
        a: 'Ja. Bei einem Nachmittagsflug verkurzen wir die Colombo Rundfahrt auf Ihre Wunsch Stopps oder bringen Sie direkt zum Flughafen Bandaranaike  teilen Sie uns bei der Buchung Ihre Flugzeit mit.',
      },
    ],
    days: [
      {
        title: 'Flughafen / Hotel  Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Wilpattu Nationalpark Safari',
            description:
              'Erkunden Sie Sri Lankas grossten Nationalpark bei einer 5 stundigen 4x4 Jeep Safari. Halten Sie Ausschau nach Leoparden, Lippenbaren, Elefanten, Hirschen, Krokodilen und einer vielfaltigen Vogelwelt.',
          },
          {
            type: 'Unterkunft',
            title: 'Thimbiri Wewa Resort  Wilpattu',
            description: 'Ubernachtung im Thimbiri Wewa Resort Wilpattu (oder ahnlich)  Halbpension.',
            extra: ['Abendessen inklusive', 'Hotel gehobener Klasse'],
          },
        ],
      },
      {
        title: 'Wilpattu  Anuradhapura  Sigiriya',
        activities: [
          {
            type: 'Religioser Besuch',
            title: 'Sri Maha Bodhi Tempel',
            description: 'Besuchen Sie den heiligen Sri Maha Bodhi Baum in Anuradhapura.',
          },
          {
            type: 'Historischer Besuch',
            title: 'Ruwanweli Maha Seya',
            description: 'Erkunden Sie eines der heiligsten buddhistischen Monumente Sri Lankas.',
          },
          {
            type: 'Aussichtswanderung',
            title: 'Sonnenuntergang am Pidurangala Felsen',
            description: 'Besteigen Sie den Pidurangala Felsen fur einen atemberaubenden Sonnenuntergang.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Ubernachtung in der Fresco Water Villa (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Sigiriya Kulturdreieck',
        activities: [
          {
            type: 'UNESCO Statte',
            title: 'Sigiriya Felsenfestung',
            description: 'Besteigen Sie die UNESCO gelistete Felsenfestung Sigiriya.',
          },
          {
            type: 'Dorferlebnis',
            title: 'Dorftour Hiriwadunna',
            description: 'Erleben Sie das authentische landliche Leben Sri Lankas.',
          },
          {
            type: 'Safari',
            title: 'Minneriya Safari',
            description: 'Geniessen Sie eine 4x4 Jeep Safari, bekannt fur ihre Elefantenansammlungen.',
          },
          {
            type: 'Wellness',
            title: 'Ayurveda Massage',
            description: 'Entspannen Sie bei einer traditionellen Krauterolmassage.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Ubernachtung in der Fresco Water Villa (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Sigiriya  Kandy',
        activities: [
          {
            type: 'Kulturbesuch',
            title: 'Matale Gewurzgarten',
            description: 'Entdecken Sie Sri Lankas beruhmte Gewurze und Krauter.',
          },
          {
            type: 'UNESCO Statte',
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
            title: 'Hotel Topaz  Kandy',
            description: 'Ubernachtung im Hotel Topaz (oder ahnlich) in Kandy  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Eigenes Bad', 'Fruhstuck', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Kandy  Nuwara Eliya  Ella',
        activities: [
          {
            type: 'Tee Erlebnis',
            title: 'Bluefield Teefabrik',
            description: 'Erfahren Sie, wie der weltberuhmte Ceylon Tee hergestellt wird.',
          },
          {
            type: 'Natur',
            title: 'Ramboda Wasserfall',
            description: 'Besuchen Sie einen der hochsten Wasserfalle Sri Lankas.',
          },
          {
            type: 'Unterkunft',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Ubernachtung im Oak Ray Ella Gap Hotel (oder ahnlich)  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Eigenes Bad', 'Fruhstuck', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Ella  Hikkaduwa',
        activities: [
          {
            type: 'Sehenswurdigkeit',
            title: 'Nine Arches Bridge',
            description: 'Besuchen Sie die beruhmte Eisenbahnbrucke aus der Kolonialzeit.',
          },
          {
            type: 'Tierwelt',
            title: 'Elephant Transit Home',
            description: 'Beobachten Sie gerettete Elefantenbabys.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Ubernachtung im Somerset Mirissa Hotel (oder ahnlich)  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Hikkaduwa Strand',
        activities: [
          {
            type: 'Strandentspannung',
            title: 'Hikkaduwa Beach',
            description: 'Entspannen Sie an goldenen Stranden und schwimmen Sie im Indischen Ozean.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Ubernachtung im Somerset Mirissa Hotel (oder ahnlich)  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Hikkaduwa Strand',
        activities: [
          {
            type: 'Strandentspannung',
            title: 'Hikkaduwa Beach',
            description: 'Entspannen Sie an goldenen Stranden und schwimmen Sie im Indischen Ozean.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Ubernachtung im Somerset Mirissa Hotel (oder ahnlich)  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Wasseraktivitaten nach Kalutara',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Peraliya Tsunami Denkmal',
            description:
              'Das Peraliya Tsunami Denkmal ehrt die Opfer des Tsunamis von 2004 mit einer imposanten Buddha Statue als Symbol fur Frieden und Erinnerung, nahe dem Ort der schlimmsten Tsunami Katastrophe Sri Lankas.',
          },
          {
            type: 'Naturschutz',
            title: 'Besuch der Koggala Schildkrotenaufzucht',
            description:
              'Besuchen Sie die Koggala Schildkrotenaufzucht und das Schutzzentrum, in dem gefahrdete Meeresschildkroten geschutzt und rehabilitiert werden. Erfahren Sie mehr uber Sri Lankas Meeresschutzbemuhungen und beobachten Sie Jungschildkroten in den Aufzuchtbecken.',
          },
          {
            type: 'Bootssafari',
            title: 'Madu Fluss Bootssafari',
            description:
              'Erleben Sie eine malerische Bootssafari durch die Mangrovenwalder und kleinen Inseln des Madu Flusses. Besuchen Sie traditionelle Zimtplantagen und eines der schonsten Feuchtgebiete Sri Lankas.',
          },
          {
            type: 'Unterkunft',
            title: 'Kamili Beach Resort',
            description: 'Ubernachtung im Kamili Beach Resort (oder ahnlich)  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Eigenes Bad', 'Fruhstuck', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Abreise von Colombo',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Peraliya Tsunami Denkmal',
            description:
              'Das Peraliya Tsunami Denkmal ehrt die Opfer des Tsunamis von 2004 mit einer imposanten Buddha Statue als Symbol fur Frieden und Erinnerung, nahe dem Ort der schlimmsten Tsunami Katastrophe Sri Lankas.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Independence Memorial Hall',
            description:
              'Der Unabhangigkeitsplatz in Colombo ist ein historisches Denkmal zur Erinnerung an die Unabhangigkeit Sri Lankas mit prachtvoller Kolonialarchitektur, uppigen Garten und einer friedlichen Atmosphare.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Gangaramaya Tempel',
            description:
              'Der Gangaramaya Tempel in Colombo ist ein wunderschoner buddhistischer Tempel, der sri lankische, thailandische und chinesische Architektur vereint, mit Statuen, Reliquien und einer ruhigen Lage am See.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Galle Face Green',
            description:
              'Galle Face Green in Colombo ist eine malerische Uferpromenade  perfekt fur entspannte Spaziergange, atemberaubende Sonnenuntergange und Streetfood in lebendiger Atmosphare am Indischen Ozean.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Pettah Markt',
            description:
              'Der Colombo Fort Market ist ein belebtes Zentrum mit einer Mischung aus lokalen Waren, Kleidung, Gewurzen und Streetfood  ein lebendiges Einkaufserlebnis im Herzen der Stadt.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Rote Moschee (Jami Ul Alfar Moschee)',
            description:
              'Die Jami Ul Alfar Moschee, bekannt als Rote Moschee in Colombo, ist ein ikonisches Wahrzeichen mit auffalliger rot weisser Architektur und gibt Einblick in Sri Lankas reiches islamisches Erbe.',
          },
        ],
      },
    ],
  },
  fr: {
    title: 'Circuit Prive de 10 Jours au Sri Lanka | Safari, Culture, Montagnes & Plage',
    description:
      'Un circuit prive inoubliable de 10 jours au Sri Lanka, avec le safari de Wilpattu, Anuradhapura, Sigiriya, Kandy, les aventures d’Ella et un sejour reposant sur la cote sud.',
    duration: '10 jours',
    persons: '1-20 personnes',
    tourType: 'Circuit',
    overview:
      'Decouvrez la faune, les royaumes antiques, les montagnes pittoresques et les plages dorees du Sri Lanka lors de ce circuit de 10 jours parfaitement equilibre. Ce voyage combine safari, sites classes UNESCO, paysages de montagne, plantations de the, cascades et detente cotiere, avec hebergement en demi pension et transport prive.',
    includes: PACKAGE_INCLUDES.fr,
    excludes: PACKAGE_EXCLUDES.fr,
    seoIntro:
      'Dix jours vous permettent de decouvrir le Sri Lanka a un rythme humain du territoire des leopards a Wilpattu et de l’arbre de la Bodhi sacre a Anuradhapura, en passant par Sigiriya, Kandy, le pont Nine Arches a Ella et de longues journees de plage sur la cote sud, jusqu’a une conclusion a Colombo. Ce circuit prive combine deux safaris fauniques, du bien etre ayurvedique, des cascades dans le pays du the et un sejour tranquille a la plage de Hikkaduwa, avec les mangroves de la riviere Madu, des ecloseries de tortues et des sites emblematiques de la capitale comme le temple de Gangaramaya et Galle Face Green. Sundown Tours inclut neuf nuits d’hebergement en demi pension dans des hotels 4 etoiles, les transferts aeroport et un chauffeur anglophone dans un vehicule prive climatise. Les frais d’entree et les dejeuners restent flexibles afin que vous gardiez le controle des arrets optionnels. Les jours supplementaires par rapport a un itineraire d’une semaine signifient moins de route par site, de la place pour des visites spontanees de jardins d’epices et suffisamment de matinees a la plage pour vraiment vous detendre pas seulement photographier l’ocean et repartir.',
    highlights: [
      'Safaris en jeep a Wilpattu et Minneriya, ainsi que faune de type Yala dans le sud',
      'Sites sacres d’Anuradhapura, Rocher du Lion de Sigiriya et temple de la Dent a Kandy',
      'Nine Arch Bridge a Ella, fabriques de the, chutes de Ramboda et paysages des hauts plateaux',
      'Longs sejours a la plage a Hikkaduwa et Mirissa avec visites de sites de conservation des tortues',
      'Visite de la ville de Colombo Independence Square, Gangaramaya, Galle Face et marches de Pettah',
    ],
    whoIsFor:
      'Ideal pour les voyageurs disposant d’une semaine complete de vacances plus quelques jours tampons, qui preferent la profondeur a la vitesse familles avec adolescents, photographes et visiteurs recurrents ajoutant le patrimoine du centre nord au parcours classique du sud.',
    bestTimeNote:
      'Decembre avril convient aux plages des cotes ouest et sud ainsi qu’a l’acces a Wilpattu. Mai septembre fonctionne bien si vous privilegiez le Triangle culturel et que quelques averses d’apres midi dans les collines ne vous derangent pas.',
    faq: [
      {
        q: 'En quoi le circuit de 10 jours differe t il de vos itineraires de 7 ou 8 jours ?',
        a: 'Vous gagnez Wilpattu et Anuradhapura au debut, deux nuits de plage supplementaires autour de Hikkaduwa/Mirissa et une journee complete de visite de Colombo a la fin avec moins de trajets de plusieurs heures entasses dans une seule journee.',
      },
      {
        q: 'Les neuf nuits d’hotel sont elles toutes incluses dans le prix ?',
        a: 'Oui neuf nuits en hotels 4 etoiles en demi pension, le vehicule prive, le chauffeur et les transferts aeroport sont inclus. Les billets de parc, les jeeps de safari, les dejeuners et les soins ayurvediques optionnels sont payes sur place.',
      },
      {
        q: 'Pouvons nous terminer a l’aeroport plutot que de visiter Colombo le jour 10 ?',
        a: 'Oui. Si vous avez un vol dans l’apres midi, nous raccourcissons le circuit de Colombo a vos incontournables ou vous transferons directement a l’aeroport international de Bandaranaike indiquez nous l’heure de votre vol lors de la reservation.',
      },
    ],
    days: [
      {
        title: 'Aeroport / Hotel  Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Safari au parc national de Wilpattu',
            description:
              'Explorez le plus grand parc national du Sri Lanka lors d’un safari en 4x4 de 5 heures. Guettez leopards, ours lippus, elephants, cerfs, crocodiles et une riche avifaune.',
          },
          {
            type: 'Hebergement',
            title: 'Thimbiri Wewa Resort  Wilpattu',
            description: 'Nuit au Thimbiri Wewa Resort Wilpattu (ou similaire), en demi pension.',
            extra: ['Diner inclus', 'Hotel de standing'],
          },
        ],
      },
      {
        title: 'Wilpattu  Anuradhapura  Sigiriya',
        activities: [
          {
            type: 'Visite religieuse',
            title: 'Temple de Sri Maha Bodhi',
            description: 'Visitez l’arbre sacre Sri Maha Bodhi a Anuradhapura.',
          },
          {
            type: 'Visite historique',
            title: 'Ruwanweli Maha Seya',
            description: 'Decouvrez l’un des monuments bouddhistes les plus sacres du Sri Lanka.',
          },
          {
            type: 'Randonnee panoramique',
            title: 'Coucher de soleil au rocher de Pidurangala',
            description: 'Grimpez au rocher de Pidurangala pour un coucher de soleil a couper le souffle.',
          },
          {
            type: 'Hebergement',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Nuit au Fresco Water Villa (ou similaire).',
            extra: ['Petit dejeuner & diner inclus', 'Hotel 4 etoiles'],
          },
        ],
      },
      {
        title: 'Triangle Culturel de Sigiriya',
        activities: [
          {
            type: 'Site classe UNESCO',
            title: 'Forteresse du Rocher du Lion de Sigiriya',
            description: 'Grimpez a la forteresse du Rocher du Lion de Sigiriya, classee UNESCO.',
          },
          {
            type: 'Experience villageoise',
            title: 'Visite du village de Hiriwadunna',
            description: 'Decouvrez la vie rurale authentique du Sri Lanka.',
          },
          {
            type: 'Safari',
            title: 'Safari de Minneriya',
            description: 'Profitez d’un safari en 4x4 repute pour ses rassemblements d’elephants.',
          },
          {
            type: 'Bien etre',
            title: 'Massage ayurvedique',
            description: 'Detendez vous avec un massage traditionnel a l’huile d’herbes.',
          },
          {
            type: 'Hebergement',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Nuit au Fresco Water Villa (ou similaire).',
            extra: ['Petit dejeuner & diner inclus', 'Hotel 4 etoiles'],
          },
        ],
      },
      {
        title: 'Sigiriya  Kandy',
        activities: [
          {
            type: 'Visite culturelle',
            title: 'Jardin d’epices de Matale',
            description: 'Decouvrez les epices et herbes celebres du Sri Lanka.',
          },
          {
            type: 'Site classe UNESCO',
            title: 'Temple de la Dent Sacree',
            description: 'Visitez le temple bouddhiste le plus sacre du Sri Lanka, a Kandy.',
          },
          {
            type: 'Spectacle culturel',
            title: 'Spectacle de danse culturelle de Kandy',
            description: 'Profitez de danses traditionnelles kandyennes.',
          },
          {
            type: 'Hebergement',
            title: 'Hotel Topaz  Kandy',
            description: 'Nuit a l’Hotel Topaz (ou similaire) a Kandy, en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Salle de bain privee', 'Petit dejeuner', 'Diner inclus'],
          },
        ],
      },
      {
        title: 'Kandy  Nuwara Eliya  Ella',
        activities: [
          {
            type: 'Experience du the',
            title: 'Fabrique de the Blue Field',
            description: 'Decouvrez comment le celebre the de Ceylan est produit.',
          },
          {
            type: 'Nature',
            title: 'Cascade de Ramboda',
            description: 'Visitez l’une des plus hautes cascades du Sri Lanka.',
          },
          {
            type: 'Hebergement',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Nuit a l’Oak Ray Ella Gap Hotel (ou similaire), en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Salle de bain privee', 'Petit dejeuner', 'Diner inclus'],
          },
        ],
      },
      {
        title: 'Ella  Hikkaduwa',
        activities: [
          {
            type: 'Site remarquable',
            title: 'Nine Arch Bridge',
            description: 'Visitez le celebre pont ferroviaire de l’epoque coloniale.',
          },
          {
            type: 'Faune sauvage',
            title: 'Elephant Transit Home',
            description: 'Observez de jeunes elephants secourus.',
          },
          {
            type: 'Hebergement',
            title: 'Somerset Mirissa Hotel',
            description: 'Hebergement au Somerset Mirissa Hotel (ou similaire), en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Petit dejeuner', 'Salle de bain privee', 'Diner'],
          },
        ],
      },
      {
        title: 'Plage de Hikkaduwa',
        activities: [
          {
            type: 'Detente a la plage',
            title: 'Plage de Hikkaduwa',
            description: 'Detendez vous sur des plages dorees et baignez vous dans l’ocean Indien.',
          },
          {
            type: 'Hebergement',
            title: 'Somerset Mirissa Hotel',
            description: 'Hebergement au Somerset Mirissa Hotel (ou similaire), en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Petit dejeuner', 'Salle de bain privee', 'Diner'],
          },
        ],
      },
      {
        title: 'Plage de Hikkaduwa',
        activities: [
          {
            type: 'Detente a la plage',
            title: 'Plage de Hikkaduwa',
            description: 'Detendez vous sur des plages dorees et baignez vous dans l’ocean Indien.',
          },
          {
            type: 'Hebergement',
            title: 'Somerset Mirissa Hotel',
            description: 'Hebergement au Somerset Mirissa Hotel (ou similaire), en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Petit dejeuner', 'Salle de bain privee', 'Diner'],
          },
        ],
      },
      {
        title: 'Activites nautiques vers Kalutara',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Memorial du tsunami de Peraliya',
            description:
              'Le memorial du tsunami de Peraliya honore les victimes du tsunami de 2004, avec une imposante statue de Bouddha symbolisant la paix et le souvenir, pres du site de la pire catastrophe tsunamique du Sri Lanka.',
          },
          {
            type: 'Conservation de la faune',
            title: 'Visite de l’ecloserie de tortues de Koggala',
            description:
              'Visitez l’ecloserie et le centre de conservation des tortues de Koggala, ou des tortues marines menacees sont protegees et rehabilitees. Decouvrez les efforts de conservation marine du Sri Lanka et observez les bebes tortues dans les bassins d’ecloserie.',
          },
          {
            type: 'Safari en bateau',
            title: 'Safari en bateau sur la riviere Madu',
            description:
              'Decouvrez un safari en bateau pittoresque a travers les mangroves et petites iles de la riviere Madu. Visitez des plantations traditionnelles de cannelle et explorez l’un des plus beaux ecosystemes humides du Sri Lanka.',
          },
          {
            type: 'Hebergement',
            title: 'Kamili Beach Resort',
            description: 'Nuit au Kamili Beach Resort (ou similaire), en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Salle de bain privee', 'Petit dejeuner', 'Diner inclus'],
          },
        ],
      },
      {
        title: 'Depart depuis Colombo',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Memorial du tsunami de Peraliya',
            description:
              'Le memorial du tsunami de Peraliya honore les victimes du tsunami de 2004, avec une imposante statue de Bouddha symbolisant la paix et le souvenir, pres du site de la pire catastrophe tsunamique du Sri Lanka.',
          },
          {
            type: 'Visite guidee',
            title: 'Independence Memorial Hall',
            description:
              'Le Independence Square de Colombo est un site historique commemorant l’independance du Sri Lanka, avec une architecture coloniale majestueuse, des jardins luxuriants et une atmosphere paisible.',
          },
          {
            type: 'Visite guidee',
            title: 'Temple Gangaramaya',
            description:
              'Le temple Gangaramaya de Colombo est un magnifique temple bouddhiste melant architectures sri lankaise, thailandaise et chinoise, avec statues, reliques et un cadre paisible au bord du lac.',
          },
          {
            type: 'Visite guidee',
            title: 'Galle Face Green',
            description:
              'Galle Face Green a Colombo est une promenade pittoresque en bord de mer, ideale pour des balades relaxantes, des couchers de soleil superbes et la street food, dans une ambiance animee au bord de l’ocean Indien.',
          },
          {
            type: 'Visite guidee',
            title: 'Marche de Pettah',
            description:
              'Le Colombo Fort Market est un lieu anime proposant un melange de produits locaux, vetements, epices et street food, offrant une experience de shopping vivante au coeur de la ville.',
          },
          {
            type: 'Visite guidee',
            title: 'Mosquee Rouge (mosquee Jami Ul Alfar)',
            description:
              'La mosquee Jami Ul Alfar, ou Mosquee Rouge de Colombo, est un site emblematique a l’architecture rouge et blanche saisissante, offrant un apercu du riche patrimoine islamique du Sri Lanka.',
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
      'Scopri la fauna selvatica, gli antichi regni, le montagne panoramiche e le spiagge dorate dello Sri Lanka in questo tour di 10 giorni perfettamente equilibrato. Il viaggio unisce safari, siti UNESCO, paesaggi di montagna, piantagioni di te, cascate ed esperienze costiere rilassanti, con pernottamento in mezza pensione e trasporto privato.',
    includes: PACKAGE_INCLUDES.it,
    excludes: PACKAGE_EXCLUDES.it,
    seoIntro:
      'Dieci giorni vi permettono di vivere lo Sri Lanka a un ritmo umano dal territorio dei leopardi a Wilpattu e il sacro albero della Bodhi ad Anuradhapura, passando per Sigiriya, Kandy, il ponte Nine Arches a Ella e lunghe giornate di spiaggia sulla costa meridionale, fino a un finale a Colombo. Questo tour privato combina due safari nella fauna selvatica, benessere ayurvedico, cascate nella terra del te e tempo rilassato sulla spiaggia di Hikkaduwa, con le mangrovie del fiume Madu, vivai di tartarughe e luoghi simbolo della capitale come il Tempio di Gangaramaya e Galle Face Green. Sundown Tours include nove notti di sistemazione in mezza pensione in hotel 4 stelle, i transfer aeroportuali e un autista di lingua inglese in un veicolo privato climatizzato. I biglietti d’ingresso e i pranzi restano flessibili, cosi potete gestire le soste opzionali. I giorni extra rispetto a un itinerario di una settimana significano meno guida per ogni attrazione, spazio per visite spontanee ai giardini di spezie e sufficienti mattinate in spiaggia per rilassarvi davvero non solo fotografare l’oceano e proseguire.',
    highlights: [
      'Safari in jeep a Wilpattu e Minneriya, oltre a fauna selvatica in stile Yala nel sud',
      'Siti sacri di Anuradhapura, Lion Rock di Sigiriya e Tempio della Reliquia del Dente a Kandy',
      'Nine Arch Bridge a Ella, fabbriche di te, cascate di Ramboda e panorami dell’altopiano',
      'Soggiorni prolungati in spiaggia a Hikkaduwa e Mirissa con visite ai centri di conservazione delle tartarughe',
      'Tour della citta di Colombo Independence Square, Gangaramaya, Galle Face e mercati di Pettah',
    ],
    whoIsFor:
      'Ideale per i viaggiatori con una settimana intera di vacanza piu giorni cuscinetto che preferiscono la profondita alla velocita famiglie con adolescenti, fotografi e visitatori abituali che aggiungono il patrimonio del nord centrale al classico percorso meridionale.',
    bestTimeNote:
      'Dicembre aprile e adatto alle spiagge della costa occidentale e meridionale e all’accesso a Wilpattu. Maggio settembre funziona bene se date priorita al Triangolo Culturale e non vi dispiacciono occasionali piogge pomeridiane sulle colline.',
    faq: [
      {
        q: 'In cosa differisce il tour di 10 giorni dai vostri itinerari di 7 o 8 giorni?',
        a: 'Guadagnate Wilpattu e Anuradhapura all’inizio, due notti extra in spiaggia intorno a Hikkaduwa/Mirissa e una giornata completa di visite a Colombo alla fine con meno viaggi di piu ore concentrati in un solo giorno.',
      },
      {
        q: 'Tutte le nove notti in hotel sono incluse nel prezzo?',
        a: 'Si nove notti in hotel 4 stelle in mezza pensione, veicolo privato, autista e transfer aeroportuali sono inclusi. Biglietti dei parchi, jeep per il safari, pranzi e trattamenti ayurvedici opzionali si pagano in loco.',
      },
      {
        q: 'Possiamo concludere in aeroporto invece di visitare Colombo il decimo giorno?',
        a: 'Si. Se avete un volo nel pomeriggio, accorciamo il tour di Colombo alle vostre tappe imperdibili oppure vi trasferiamo direttamente all’aeroporto di Bandaranaike comunicateci l’orario del vostro volo al momento della prenotazione.',
      },
    ],
    days: [
      {
        title: 'Aeroporto / Hotel  Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Safari al Parco Nazionale di Wilpattu',
            description:
              'Esplora il parco nazionale piu grande dello Sri Lanka in un safari in 4x4 di 5 ore. Cerca leopardi, orsi labiati, elefanti, cervi, coccodrilli e una ricca avifauna.',
          },
          {
            type: 'Sistemazione',
            title: 'Thimbiri Wewa Resort  Wilpattu',
            description: 'Pernottamento al Thimbiri Wewa Resort Wilpattu (o simile), in mezza pensione.',
            extra: ['Cena inclusa', 'Hotel di categoria'],
          },
        ],
      },
      {
        title: 'Wilpattu  Anuradhapura  Sigiriya',
        activities: [
          {
            type: 'Visita religiosa',
            title: 'Tempio di Sri Maha Bodhi',
            description: 'Visita il sacro albero Sri Maha Bodhi ad Anuradhapura.',
          },
          {
            type: 'Visita storica',
            title: 'Ruwanweli Maha Seya',
            description: 'Esplora uno dei monumenti buddisti piu sacri dello Sri Lanka.',
          },
          {
            type: 'Escursione panoramica',
            title: 'Tramonto alla Roccia di Pidurangala',
            description: 'Sali sulla Roccia di Pidurangala per un tramonto spettacolare.',
          },
          {
            type: 'Sistemazione',
            title: 'Fresco Water Villa  Sigiriya',
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
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Pernottamento presso il Fresco Water Villa (o simile).',
            extra: ['Colazione e cena incluse', 'Hotel 4 stelle'],
          },
        ],
      },
      {
        title: 'Sigiriya  Kandy',
        activities: [
          {
            type: 'Visita culturale',
            title: 'Giardino delle spezie di Matale',
            description: 'Scopri le famose spezie ed erbe dello Sri Lanka.',
          },
          {
            type: 'Sito UNESCO',
            title: 'Tempio del Sacro Dente',
            description: 'Visita il tempio buddista piu sacro dello Sri Lanka, a Kandy.',
          },
          {
            type: 'Spettacolo culturale',
            title: 'Spettacolo di danza culturale di Kandy',
            description: 'Goditi le tradizionali danze kandyane.',
          },
          {
            type: 'Sistemazione',
            title: 'Hotel Topaz  Kandy',
            description: 'Pernottamento all’Hotel Topaz (o simile) a Kandy, in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Bagno privato', 'Colazione', 'Cena inclusa'],
          },
        ],
      },
      {
        title: 'Kandy  Nuwara Eliya  Ella',
        activities: [
          {
            type: 'Esperienza del te',
            title: 'Fabbrica di te Blue Field',
            description: 'Scopri come viene prodotto il celebre te di Ceylon.',
          },
          {
            type: 'Natura',
            title: 'Cascata di Ramboda',
            description: 'Visita una delle cascate piu alte dello Sri Lanka.',
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
        title: 'Ella  Hikkaduwa',
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
        title: 'Attivita acquatiche verso Kalutara',
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
              'Vivi un pittoresco safari in barca tra le mangrovie e le piccole isole del fiume Madu. Visita le tradizionali piantagioni di cannella ed esplora uno dei piu bei ecosistemi umidi dello Sri Lanka.',
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
              'L’Independence Square di Colombo e un monumento storico che celebra l’indipendenza dello Sri Lanka, con una grandiosa architettura coloniale, giardini rigogliosi e un’atmosfera serena.',
          },
          {
            type: 'Tour guidato',
            title: 'Tempio Gangaramaya',
            description:
              'Il tempio Gangaramaya di Colombo e un magnifico tempio buddista che unisce architettura singalese, thailandese e cinese, con statue, reliquie e una serena posizione lacustre.',
          },
          {
            type: 'Tour guidato',
            title: 'Galle Face Green',
            description:
              'Galle Face Green a Colombo e una pittoresca passeggiata sul lungomare, perfetta per rilassanti camminate, splendidi tramonti e street food, con un’atmosfera vivace sull’Oceano Indiano.',
          },
          {
            type: 'Tour guidato',
            title: 'Mercato di Pettah',
            description:
              'Il Colombo Fort Market e un vivace mercato che offre un mix di prodotti locali, abbigliamento, spezie e street food, per un’esperienza di shopping vibrante nel cuore della citta.',
          },
          {
            type: 'Tour guidato',
            title: 'Moschea Rossa (Moschea Jami Ul Alfar)',
            description:
              'La Moschea Jami Ul Alfar, o Moschea Rossa di Colombo, e un monumento iconico con una sorprendente architettura rosso bianca, che offre uno sguardo sul ricco patrimonio islamico dello Sri Lanka.',
          },
        ],
      },
    ],
  },
  es: {
    title: 'Tour Privado de 10 Dias por Sri Lanka | Safari, Cultura, Montanas & Playa',
    description:
      'Un inolvidable tour privado de 10 dias por Sri Lanka que incluye el safari de Wilpattu, Anuradhapura, Sigiriya, Kandy, aventuras en Ella y una relajante estancia en la costa sur.',
    duration: '10 dias',
    persons: '1-20 personas',
    tourType: 'Circuito',
    overview:
      'Descubre la fauna, los antiguos reinos, las montanas escenicas y las playas doradas de Sri Lanka en este circuito de 10 dias perfectamente equilibrado. El viaje combina safari, sitios declarados Patrimonio de la Humanidad, paisajes de montana, plantaciones de te, cascadas y experiencias costeras relajantes, con alojamiento en media pension y transporte privado.',
    includes: PACKAGE_INCLUDES.es,
    excludes: PACKAGE_EXCLUDES.es,
    seoIntro:
      'Diez dias le permiten disfrutar de Sri Lanka a un ritmo humano: desde el territorio de los leopardos en Wilpattu y el sagrado arbol de la Bodhi en Anuradhapura, pasando por Sigiriya, Kandy, el puente Nine Arches en Ella y largos dias de playa en la costa sur, hasta un final en Colombo. Este circuito privado combina dos safaris de fauna, bienestar ayurvedico, cascadas en el pais del te y un tiempo relajado en la playa de Hikkaduwa, con los manglares del rio Madu, viveros de tortugas e hitos de la capital como el Templo de Gangaramaya y Galle Face Green. Sundown Tours incluye nueve noches de alojamiento en media pension en hoteles de 4 estrellas, traslados al aeropuerto y un chofer de habla inglesa en un vehiculo privado con aire acondicionado. Las entradas y los almuerzos se mantienen flexibles para que usted controle las paradas opcionales. Los dias adicionales respecto a un itinerario de una semana significan menos conduccion por cada punto destacado, espacio para visitas espontaneas a jardines de especias y suficientes mananas de playa para relajarse de verdad, no solo fotografiar el oceano y seguir adelante.',
    highlights: [
      'Safaris en jeep en Wilpattu y Minneriya, ademas de fauna al estilo Yala en el sur',
      'Lugares sagrados de Anuradhapura, Lion Rock de Sigiriya y templo de la Reliquia del Diente en Kandy',
      'Nine Arch Bridge en Ella, fabricas de te, cataratas de Ramboda y paisajes de las tierras altas',
      'Estancias prolongadas en las playas de Hikkaduwa y Mirissa con visitas a centros de conservacion de tortugas',
      'Recorrido por la ciudad de Colombo: Independence Square, Gangaramaya, Galle Face y mercados de Pettah',
    ],
    whoIsFor:
      'Ideal para viajeros con una semana completa de vacaciones mas dias de margen que prefieren profundidad a velocidad: familias con adolescentes, fotografos y visitantes recurrentes que anaden el patrimonio del centro norte a la ruta clasica del sur.',
    bestTimeNote:
      'Diciembre abril es adecuado para las playas de las costas oeste y sur y el acceso a Wilpattu. Mayo septiembre funciona bien si prioriza el Triangulo Cultural y no le importan algunas lluvias vespertinas ocasionales en las colinas.',
    faq: [
      {
        q: 'En que se diferencia el circuito de 10 dias de sus itinerarios de 7 u 8 dias?',
        a: 'Se anaden Wilpattu y Anuradhapura al inicio, dos noches de playa adicionales en Hikkaduwa/Mirissa y un dia completo de turismo en Colombo al final, con menos trayectos de varias horas concentrados en un solo dia.',
      },
      {
        q: 'Estan incluidas las nueve noches de hotel en el precio?',
        a: 'Si: nueve noches en hoteles de 4 estrellas en media pension, el vehiculo privado, el conductor y los traslados al aeropuerto estan incluidos. Las entradas a los parques, los jeeps de safari, los almuerzos y los tratamientos ayurvedicos opcionales se pagan in situ.',
      },
      {
        q: 'Podemos terminar en el aeropuerto en lugar de hacer turismo en Colombo el dia 10?',
        a: 'Si. Si tiene un vuelo por la tarde, reducimos el recorrido por Colombo a sus paradas imprescindibles o le trasladamos directamente al aeropuerto internacional de Bandaranaike; indiquenos la hora de su vuelo al reservar.',
      },
    ],
    days: [
      {
        title: 'Aeropuerto / Hotel  Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Safari en el Parque Nacional de Wilpattu',
            description:
              'Explora el parque nacional mas grande de Sri Lanka en un safari en 4x4 de 5 horas. Busca leopardos, osos bezudos, elefantes, ciervos, cocodrilos y una rica avifauna.',
          },
          {
            type: 'Alojamiento',
            title: 'Thimbiri Wewa Resort  Wilpattu',
            description: 'Noche en el Thimbiri Wewa Resort Wilpattu (o similar), en media pension.',
            extra: ['Cena incluida', 'Hotel de categoria'],
          },
        ],
      },
      {
        title: 'Wilpattu  Anuradhapura  Sigiriya',
        activities: [
          {
            type: 'Visita religiosa',
            title: 'Templo de Sri Maha Bodhi',
            description: 'Visita el sagrado arbol Sri Maha Bodhi en Anuradhapura.',
          },
          {
            type: 'Visita historica',
            title: 'Ruwanweli Maha Seya',
            description: 'Explora uno de los monumentos budistas mas sagrados de Sri Lanka.',
          },
          {
            type: 'Caminata panoramica',
            title: 'Atardecer en la Roca de Pidurangala',
            description: 'Sube a la Roca de Pidurangala para disfrutar de un atardecer espectacular.',
          },
          {
            type: 'Alojamiento',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Noche en el Fresco Water Villa (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel 4 estrellas'],
          },
        ],
      },
      {
        title: 'Triangulo Cultural de Sigiriya',
        activities: [
          {
            type: 'Sitio Patrimonio de la Humanidad',
            title: 'Roca Fortaleza del Leon de Sigiriya',
            description: 'Sube a la Roca Fortaleza de Sigiriya, declarada Patrimonio de la Humanidad.',
          },
          {
            type: 'Experiencia rural',
            title: 'Recorrido por el pueblo de Hiriwadunna',
            description: 'Descubre la autentica vida rural de Sri Lanka.',
          },
          {
            type: 'Safari',
            title: 'Safari en Minneriya',
            description: 'Disfruta de un safari en 4x4 famoso por sus concentraciones de elefantes.',
          },
          {
            type: 'Bienestar',
            title: 'Masaje ayurvedico',
            description: 'Relajate con un tradicional masaje con aceites herbales.',
          },
          {
            type: 'Alojamiento',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Noche en el Fresco Water Villa (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel 4 estrellas'],
          },
        ],
      },
      {
        title: 'Sigiriya  Kandy',
        activities: [
          {
            type: 'Visita cultural',
            title: 'Jardin de especias de Matale',
            description: 'Descubre las famosas especias y hierbas de Sri Lanka.',
          },
          {
            type: 'Sitio Patrimonio de la Humanidad',
            title: 'Templo del Diente Sagrado',
            description: 'Visita el templo budista mas sagrado de Sri Lanka, en Kandy.',
          },
          {
            type: 'Espectaculo cultural',
            title: 'Espectaculo de danza cultural de Kandy',
            description: 'Disfruta de las tradicionales danzas candianas.',
          },
          {
            type: 'Alojamiento',
            title: 'Hotel Topaz  Kandy',
            description: 'Noche en el Hotel Topaz (o similar) en Kandy, en media pension.',
            extra: ['Hotel 4 estrellas (Premium)', 'Bano privado', 'Desayuno', 'Cena incluida'],
          },
        ],
      },
      {
        title: 'Kandy  Nuwara Eliya  Ella',
        activities: [
          {
            type: 'Experiencia del te',
            title: 'Fabrica de te Blue Field',
            description: 'Descubre como se produce el famoso te de Ceilan.',
          },
          {
            type: 'Naturaleza',
            title: 'Cascada de Ramboda',
            description: 'Visita una de las cascadas mas altas de Sri Lanka.',
          },
          {
            type: 'Alojamiento',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Noche en el Oak Ray Ella Gap Hotel (o similar), en media pension.',
            extra: ['Hotel 4 estrellas (Premium)', 'Bano privado', 'Desayuno', 'Cena incluida'],
          },
        ],
      },
      {
        title: 'Ella  Hikkaduwa',
        activities: [
          {
            type: 'Lugar emblematico',
            title: 'Nine Arch Bridge',
            description: 'Visita el famoso puente ferroviario de la epoca colonial.',
          },
          {
            type: 'Vida salvaje',
            title: 'Elephant Transit Home',
            description: 'Observa a las crias de elefante rescatadas.',
          },
          {
            type: 'Alojamiento',
            title: 'Somerset Mirissa Hotel',
            description: 'Alojamiento en el Somerset Mirissa Hotel (o similar), en media pension.',
            extra: ['Hotel 4 estrellas (Premium)', 'Desayuno', 'Bano privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Playa de Hikkaduwa',
        activities: [
          {
            type: 'Relax en la playa',
            title: 'Playa de Hikkaduwa',
            description: 'Relajate en playas doradas y nada en el Oceano Indico.',
          },
          {
            type: 'Alojamiento',
            title: 'Somerset Mirissa Hotel',
            description: 'Alojamiento en el Somerset Mirissa Hotel (o similar), en media pension.',
            extra: ['Hotel 4 estrellas (Premium)', 'Desayuno', 'Bano privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Playa de Hikkaduwa',
        activities: [
          {
            type: 'Relax en la playa',
            title: 'Playa de Hikkaduwa',
            description: 'Relajate en playas doradas y nada en el Oceano Indico.',
          },
          {
            type: 'Alojamiento',
            title: 'Somerset Mirissa Hotel',
            description: 'Alojamiento en el Somerset Mirissa Hotel (o similar), en media pension.',
            extra: ['Hotel 4 estrellas (Premium)', 'Desayuno', 'Bano privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Actividades acuaticas hacia Kalutara',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Memorial del Tsunami de Peraliya',
            description:
              'El Memorial del Tsunami de Peraliya honra a las victimas del tsunami de 2004, con una imponente estatua de Buda como simbolo de paz y recuerdo cerca del lugar del peor desastre de tsunami de Sri Lanka.',
          },
          {
            type: 'Conservacion de fauna',
            title: 'Visita al criadero de tortugas de Koggala',
            description:
              'Visita el criadero y centro de conservacion de tortugas de Koggala, donde se protegen y rehabilitan tortugas marinas en peligro. Descubre los esfuerzos de conservacion marina de Sri Lanka y observa a las crias en los tanques de cria.',
          },
          {
            type: 'Safari en barco',
            title: 'Safari en barco por el rio Madu',
            description:
              'Disfruta de un pintoresco safari en barco por los manglares y pequenas islas del rio Madu. Visita plantaciones tradicionales de canela y explora uno de los ecosistemas de humedales mas bellos de Sri Lanka.',
          },
          {
            type: 'Alojamiento',
            title: 'Kamili Beach Resort',
            description: 'Noche en el Kamili Beach Resort (o similar), en media pension.',
            extra: ['Hotel 4 estrellas (Premium)', 'Bano privado', 'Desayuno', 'Cena incluida'],
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
              'El Memorial del Tsunami de Peraliya honra a las victimas del tsunami de 2004, con una imponente estatua de Buda como simbolo de paz y recuerdo cerca del lugar del peor desastre de tsunami de Sri Lanka.',
          },
          {
            type: 'Visita guiada',
            title: 'Independence Memorial Hall',
            description:
              'La Plaza de la Independencia en Colombo es un hito historico construido para conmemorar la independencia de Sri Lanka, con una grandiosa arquitectura colonial, jardines exuberantes y un ambiente sereno.',
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
              'Galle Face Green en Colombo es un pintoresco paseo frente al mar, ideal para caminatas relajantes, atardeceres impresionantes y comida callejera, con un ambiente animado junto al Oceano Indico.',
          },
          {
            type: 'Visita guiada',
            title: 'Mercado de Pettah',
            description:
              'El Colombo Fort Market es un animado centro que ofrece una mezcla de productos locales, ropa, especias y comida callejera, brindando una vibrante experiencia de compras en el corazon de la ciudad.',
          },
          {
            type: 'Visita guiada',
            title: 'Mezquita Roja (Mezquita Jami Ul Alfar)',
            description:
              'La Mezquita Jami Ul Alfar, o Mezquita Roja de Colombo, es un hito iconico con una llamativa arquitectura roja y blanca, que ofrece una vision del rico patrimonio islamico de Sri Lanka.',
          },
        ],
      },
    ],
  },
  pl: {
    title: '10 dniowa Prywatna Wycieczka po Sri Lance | Safari, Kultura, Wyzyny i Plaza',
    description:
      'Niezapomniana 10 dniowa prywatna wycieczka po Sri Lance obejmujaca safari w Wilpattu, Anuradhapure, Sigiriya, Kandy, przygody w Elli oraz relaksujacy pobyt na poludniowym wybrzezu.',
    duration: '10 dni',
    persons: '1-20 osob',
    tourType: 'Wycieczka objazdowa',
    overview:
      'Odkryj dzika przyrode, starozytne krolestwa, malownicze gory i zlote plaze Sri Lanki podczas tej doskonale zbalansowanej 10 dniowej podrozy. Wycieczka laczy przygode safari, obiekty UNESCO, krajobrazy wyzynne, plantacje herbaty, wodospady i relaksujace doswiadczenia nadmorskie, z zakwaterowaniem w opcji HB i prywatnym transportem.',
    includes: PACKAGE_INCLUDES.pl,
    excludes: PACKAGE_EXCLUDES.pl,
    seoIntro:
      'Dziesiec dni pozwala poznac Sri Lanke w ludzkim tempie  od terytorium lampartow w Wilpattu i swietego drzewa Bodhi w Anuradhapurze, przez Sigiriya, Kandy, most Nine Arches w Elli i dlugie dni na plazy na poludniowym wybrzezu, az po final w Colombo. Ta prywatna wycieczka laczy dwa safari z dzika przyroda, ajurwedyjski wellness, wodospady w krainie herbaty i spokojny czas na plazy w Hikkaduwie z namorzynami rzeki Madu, wylegarniami zolwi i symbolami stolicy, takimi jak swiatynia Gangaramaya i Galle Face Green. Sundown Tours obejmuje dziewiec nocy zakwaterowania w formule half  board w hotelach 4 gwiazdkowych, transfery na lotnisko oraz anglojezycznego kierowce w prywatnym klimatyzowanym pojezdzie. Oplaty za wstep i lunch pozostaja elastyczne, dzieki czemu sami kontroluja Panstwo opcjonalne przystanki. Dodatkowe dni w porownaniu do tygodniowego planu oznaczaja mniej jazdy na kazda atrakcje, miejsce na spontaniczne wizyty w ogrodach przypraw i wystarczajaco wiele plazowych porankow, by naprawde odpoczac  a nie tylko sfotografowac ocean i jechac dalej.',
    highlights: [
      'Safari jeepem w Wilpattu i Minneriya oraz dzika przyroda w stylu Yala na poludniu',
      'Swiete miejsca Anuradhapury, Lion Rock w Sigiriya i swiatynia Relikwii Zeba w Kandy',
      'Most Nine Arch w Elli, fabryki herbaty, wodospady Ramboda i krajobrazy gorskiego kraju',
      'Wydluzone pobyty na plazach Hikkaduwa i Mirissa z wizytami w osrodkach ochrony zolwi',
      'Wycieczka po Colombo  Independence Square, Gangaramaya, Galle Face i targi Pettah',
    ],
    whoIsFor:
      'Najlepsza dla podroznych z pelnym tygodniem urlopu plus dniami buforowymi, ktorzy wola glebie niz tempo  rodzin z nastolatkami, fotografow i powracajacych gosci dodajacych dziedzictwo polnocno centralne do klasycznej trasy poludniowej.',
    bestTimeNote:
      'Grudzien–kwiecien sprawdza sie na plazach zachodniego i poludniowego wybrzeza oraz przy dostepie do Wilpattu. Maj to wrzesien dziala dobrze, jesli priorytetem jest Trojkat Kulturowy i nie przeszkadzaja Panstwu okazjonalne popoludniowe deszcze w gorach.',
    faq: [
      {
        q: 'Czym rozni sie 10 dniowa wycieczka od Panstwa planow 7- lub 8 dniowych?',
        a: 'Zyskujecie Wilpattu i Anuradhapure na poczatku, dwie dodatkowe noce na plazy w okolicach Hikkaduwy/Mirissy oraz caly dzien zwiedzania Colombo na koniec  z mniejsza liczba wielogodzinnych przejazdow skupionych w jednym dniu.',
      },
      {
        q: 'Czy wszystkie dziewiec nocy w hotelu sa wliczone w cene?',
        a: 'Tak  dziewiec nocy w hotelach 4 gwiazdkowych z wyzywieniem HB, prywatny pojazd, kierowca i transfery na lotnisko sa wliczone. Bilety do parkow, jeepy na safari, lunche i opcjonalne zabiegi ajurwedyjskie placi sie na miejscu.',
      },
      {
        q: 'Czy mozemy zakonczyc na lotnisku, a nie zwiedzac Colombo 10. dnia?',
        a: 'Tak. Jesli Panstwa lot jest po poludniu, skracamy trase po Colombo do najwazniejszych punktow lub przewozimy Panstwa bezposrednio na lotnisko Bandaranaike  podajcie nam godzine lotu przy rezerwacji.',
      },
    ],
    days: [
      {
        title: 'Lotnisko / Hotel  Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Safari w Parku Narodowym Wilpattu',
            description:
              'Zwiedz najwiekszy park narodowy Sri Lanki podczas 5 godzinnego safari terenowym 4x4. Wypatruj lampartow, niedzwiedzi wargaczy, sloni, jeleni, krokodyli i bogatego ptactwa.',
          },
          {
            type: 'Nocleg',
            title: 'Thimbiri Wewa Resort  Wilpattu',
            description: 'Nocleg w Thimbiri Wewa Resort Wilpattu (lub podobnym), w opcji HB.',
            extra: ['Kolacja w cenie', 'Hotel wyzszej klasy'],
          },
        ],
      },
      {
        title: 'Wilpattu  Anuradhapura  Sigiriya',
        activities: [
          {
            type: 'Wizyta religijna',
            title: 'Swiatynia Sri Maha Bodhi',
            description: 'Odwiedz swieta figowiec Sri Maha Bodhi w Anuradhapurze.',
          },
          {
            type: 'Wizyta historyczna',
            title: 'Ruwanweli Maha Seya',
            description: 'Zwiedz jeden z najswietszych buddyjskich pomnikow Sri Lanki.',
          },
          {
            type: 'Malownicza wedrowka',
            title: 'Zachod slonca na Skale Pidurangala',
            description: 'Wejdz na Skale Pidurangala, by zobaczyc zapierajacy dech zachod slonca.',
          },
          {
            type: 'Nocleg',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Nocleg w Fresco Water Villa (lub podobnym).',
            extra: ['Sniadanie i kolacja w cenie', 'Hotel 4 gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Trojkat Kulturowy Sigiriya',
        activities: [
          {
            type: 'Obiekt UNESCO',
            title: 'Skalna Forteca Sigiriya',
            description: 'Wejdz na wpisana na liste UNESCO Skalna Fortece Sigiriya.',
          },
          {
            type: 'Doswiadczenie wiejskie',
            title: 'Wycieczka do wioski Hiriwadunna',
            description: 'Poznaj autentyczne zycie wiejskie Sri Lanki.',
          },
          {
            type: 'Safari',
            title: 'Safari w Minneriya',
            description: 'Skorzystaj z safari terenowego 4x4, znanego ze zgromadzen sloni.',
          },
          {
            type: 'Wellness',
            title: 'Masaz ajurwedyjski',
            description: 'Zrelaksuj sie przy tradycyjnym masazu ziolowymi olejkami.',
          },
          {
            type: 'Nocleg',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Nocleg w Fresco Water Villa (lub podobnym).',
            extra: ['Sniadanie i kolacja w cenie', 'Hotel 4 gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Sigiriya  Kandy',
        activities: [
          {
            type: 'Wizyta kulturalna',
            title: 'Ogrod przypraw w Matale',
            description: 'Odkryj slynne przyprawy i ziola Sri Lanki.',
          },
          {
            type: 'Obiekt UNESCO',
            title: 'Swiatynia Zeba Buddy',
            description: 'Odwiedz najswietsza buddyjska swiatynie Sri Lanki w Kandy.',
          },
          {
            type: 'Widowisko kulturalne',
            title: 'Widowisko taneczne w Kandy',
            description: 'Ciesz sie tradycyjnymi kandyjskimi tancami.',
          },
          {
            type: 'Nocleg',
            title: 'Hotel Topaz  Kandy',
            description: 'Nocleg w Hotelu Topaz (lub podobnym) w Kandy, w opcji HB.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Prywatna lazienka', 'Sniadanie', 'Kolacja w cenie'],
          },
        ],
      },
      {
        title: 'Kandy  Nuwara Eliya  Ella',
        activities: [
          {
            type: 'Doswiadczenie herbaciane',
            title: 'Fabryka herbaty Blue Field',
            description: 'Poznaj proces produkcji slynnej herbaty cejlonskiej.',
          },
          {
            type: 'Natura',
            title: 'Wodospad Ramboda',
            description: 'Odwiedz jeden z najwyzszych wodospadow Sri Lanki.',
          },
          {
            type: 'Nocleg',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Nocleg w Oak Ray Ella Gap Hotel (lub podobnym), w opcji HB.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Prywatna lazienka', 'Sniadanie', 'Kolacja w cenie'],
          },
        ],
      },
      {
        title: 'Ella  Hikkaduwa',
        activities: [
          {
            type: 'Atrakcja',
            title: 'Most Nine Arch',
            description: 'Odwiedz slynny kolejowy most z czasow kolonialnych.',
          },
          {
            type: 'Dzika przyroda',
            title: 'Elephant Transit Home',
            description: 'Zobacz uratowane sloniatka.',
          },
          {
            type: 'Nocleg',
            title: 'Somerset Mirissa Hotel',
            description: 'Nocleg w Somerset Mirissa Hotel (lub podobnym), w opcji HB.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Sniadanie', 'Prywatna lazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Plaza Hikkaduwa',
        activities: [
          {
            type: 'Relaks na plazy',
            title: 'Plaza Hikkaduwa',
            description: 'Odpocznij na zlotych plazach i poplywaj w Oceanie Indyjskim.',
          },
          {
            type: 'Nocleg',
            title: 'Somerset Mirissa Hotel',
            description: 'Nocleg w Somerset Mirissa Hotel (lub podobnym), w opcji HB.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Sniadanie', 'Prywatna lazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Plaza Hikkaduwa',
        activities: [
          {
            type: 'Relaks na plazy',
            title: 'Plaza Hikkaduwa',
            description: 'Odpocznij na zlotych plazach i poplywaj w Oceanie Indyjskim.',
          },
          {
            type: 'Nocleg',
            title: 'Somerset Mirissa Hotel',
            description: 'Nocleg w Somerset Mirissa Hotel (lub podobnym), w opcji HB.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Sniadanie', 'Prywatna lazienka', 'Kolacja'],
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
              'Pomnik Tsunami w Peraliya czci pamiec ofiar tsunami z 2004 roku, z gorujaca figura Buddy jako symbolem pokoju i pamieci, blisko miejsca najgorszej katastrofy tsunami w historii Sri Lanki.',
          },
          {
            type: 'Ochrona dzikiej przyrody',
            title: 'Wizyta w wylegarni zolwi w Koggali',
            description:
              'Odwiedz wylegarnie i centrum ochrony zolwi w Koggali, gdzie chronione i przywracane do zdrowia sa zagrozone zolwie morskie. Poznaj dzialania Sri Lanki na rzecz ochrony morskiej i zobacz male zolwie w basenach wylegowych.',
          },
          {
            type: 'Safari lodzia',
            title: 'Safari lodzia po rzece Madu',
            description:
              'Doswiadcz malowniczego safari lodzia przez lasy namorzynowe i male wyspy rzeki Madu. Odwiedz tradycyjne plantacje cynamonu i odkryj jeden z najpiekniejszych ekosystemow podmoklych Sri Lanki.',
          },
          {
            type: 'Nocleg',
            title: 'Kamili Beach Resort',
            description: 'Nocleg w Kamili Beach Resort (lub podobnym), w opcji HB.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Prywatna lazienka', 'Sniadanie', 'Kolacja w cenie'],
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
              'Pomnik Tsunami w Peraliya czci pamiec ofiar tsunami z 2004 roku, z gorujaca figura Buddy jako symbolem pokoju i pamieci, blisko miejsca najgorszej katastrofy tsunami w historii Sri Lanki.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Independence Memorial Hall',
            description:
              'Independence Square w Kolombo to historyczny zabytek wzniesiony na pamiatke niepodleglosci Sri Lanki, z okazala kolonialna architektura, bujnymi ogrodami i spokojna atmosfera.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Swiatynia Gangaramaya',
            description:
              'Swiatynia Gangaramaya w Kolombo to piekna buddyjska swiatynia laczaca architekture syngaleska, tajska i chinska, z figurami, relikwiami i spokojnym otoczeniem nad jeziorem.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Galle Face Green',
            description:
              'Galle Face Green w Kolombo to malownicza nadmorska promenada, idealna na relaksujace spacery, wspaniale zachody slonca i street food, z zywa atmosfera nad Oceanem Indyjskim.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Rynek Pettah',
            description:
              'Colombo Fort Market to gwarne centrum handlowe z lokalnymi towarami, odzieza, przyprawami i street foodem, zapewniajace zywe zakupy w samym sercu miasta.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Czerwony Meczet (Meczet Jami Ul Alfar)',
            description:
              'Meczet Jami Ul Alfar, znany jako Czerwony Meczet w Kolombo, to ikoniczny zabytek o charakterystycznej czerwono bialej architekturze, ukazujacy bogate islamskie dziedzictwo Sri Lanki.',
          },
        ],
      },
    ],
  },
  ru: {
    title: 'Частный тур по Шри Ланке на 10 дней | Сафари, культура, горы и пляж',
    description:
      'Незабываемый частный тур по Шри Ланке на 10 дней с сафари в Вилпатту, Анурадхапурой, Сигирией, Канди, приключениями в Элле и отдыхом на южном побережье.',
    duration: '10 дней',
    persons: '1-20 человек',
    tourType: 'Обзорный тур',
    overview:
      'Откройте для себя дикую природу, древние королевства, живописные горы и золотые пляжи Шри Ланки в этом идеально сбалансированном туре на 10 дней. Путешествие сочетает сафари, объекты ЮНЕСКО, горные пейзажи, чайные плантации, водопады и отдых на побережье, с проживанием на полупансионе и частным транспортом.',
    includes: PACKAGE_INCLUDES.ru,
    excludes: PACKAGE_EXCLUDES.ru,
    seoIntro:
      'Десять дней позволяют изучить Шри Ланку в комфортном темпе от территории леопардов в Wilpattu и священного дерева Бодхи в Anuradhapura через Sigiriya, Канди, мост Nine Arches в Элле и продолжительные пляжные дни на южном побережье до финала в Коломбо. Этот частный тур сочетает два сафари по дикой природе, аюрведический велнес, водопады в чайном крае и спокойное время на пляже Hikkaduwa с мангровыми зарослями реки Маду, инкубаториями для черепах и достопримечательностями столицы, такими как храм Gangaramaya и Galle Face Green. Sundown Tours включает девять ночей проживания на полупансионе в отелях 4★, трансферы из/в аэропорт и англоговорящего шофёра в частном кондиционированном автомобиле. Входные билеты и обеды остаются гибкими, чтобы вы сами контролировали дополнительные остановки. Дополнительные дни по сравнению с недельным маршрутом означают меньше времени в дороге на каждую достопримечательность, место для спонтанных визитов в сады специй и достаточно пляжных утр, чтобы по настоящему отдохнуть а не просто сфотографировать океан и поехать дальше.',
    highlights: [
      'Джип сафари в Wilpattu и Minneriya, а также дикая природа в стиле Yala на юге',
      'Священные места Anuradhapura, Lion Rock в Sigiriya и храм Реликвии Зуба в Канди',
      'Мост Nine Arch в Элле, чайные фабрики, водопады Ramboda и пейзажи горной страны',
      'Продолжительное пребывание на пляжах Hikkaduwa и Мириссы с посещением центров охраны черепах',
      'Экскурсия по Коломбо Independence Square, Gangaramaya, Galle Face и рынки Pettah',
    ],
    whoIsFor:
      'Лучший вариант для путешественников с полной отпускной неделей плюс запасными днями, которые предпочитают глубину скорости семей с подростками, фотографов и повторных гостей, добавляющих наследие севера центра к классическому южному маршруту.',
    bestTimeNote:
      'Декабрь–апрель подходит для пляжей западного и южного побережья и доступа к Wilpattu. Май–сентябрь хорошо работает, если приоритетом является Культурный треугольник и вас не смущают периодические послеобеденные дожди в горах.',
    faq: [
      {
        q: 'Чем 10 дневный тур отличается от ваших 7- или 8 дневных маршрутов?',
        a: 'Вы получаете Wilpattu и Anuradhapura в начале, две дополнительные пляжные ночи в районе Hikkaduwa/Мириссы и полноценный день экскурсий по Коломбо в конце с меньшим количеством многочасовых переездов в один день.',
      },
      {
        q: 'Включены ли все девять ночей в отеле в стоимость?',
        a: 'Да девять ночей в отелях 4★ на полупансионе, частный автомобиль, водитель и трансферы из/в аэропорт включены. Билеты в парки, джипы для сафари, обеды и дополнительные аюрведические процедуры оплачиваются на месте.',
      },
      {
        q: 'Можем ли мы закончить тур в аэропорту, а не осматривать Коломбо на 10 й день?',
        a: 'Да. Если у вас дневной рейс, мы сокращаем экскурсию по Коломбо до самых важных остановок или отвезём вас прямо в аэропорт Бандаранаике сообщите нам время рейса при бронировании.',
      },
    ],
    days: [
      {
        title: 'Аэропорт / отель  Вилпатту',
        activities: [
          {
            type: 'Сафари',
            title: 'Сафари в национальном парке Вилпатту',
            description:
              'Исследуйте крупнейший национальный парк Шри Ланки на 5 часовом сафари на джипе 4x4. Ищите леопардов, медведей губачей, слонов, оленей, крокодилов и разнообразных птиц.',
          },
          {
            type: 'Проживание',
            title: 'Thimbiri Wewa Resort  Вилпатту',
            description: 'Ночь в Thimbiri Wewa Resort Wilpattu (или подобном), на полупансионе.',
            extra: ['Ужин включён', 'Отель высокого класса'],
          },
        ],
      },
      {
        title: 'Вилпатту  Анурадхапура  Сигирия',
        activities: [
          {
            type: 'Религиозный визит',
            title: 'Храм Шри Маха Бодхи',
            description: 'Посетите священное дерево Шри Маха Бодхи в Анурадхапуре.',
          },
          {
            type: 'Исторический визит',
            title: 'Руванвели Маха Сея',
            description: 'Исследуйте один из самых священных буддийских памятников Шри Ланки.',
          },
          {
            type: 'Живописный поход',
            title: 'Закат на скале Пидурангала',
            description: 'Подниметесь на скалу Пидурангала, чтобы увидеть захватывающий закат.',
          },
          {
            type: 'Проживание',
            title: 'Fresco Water Villa  Сигирия',
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
            title: 'Скала крепость Сигирия',
            description: 'Подниметесь на скалу крепость Сигирия, объект ЮНЕСКО.',
          },
          {
            type: 'Деревенский опыт',
            title: 'Экскурсия в деревню Хиривадунна',
            description: 'Познакомьтесь с подлинной сельской жизнью Шри Ланки.',
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
            title: 'Fresco Water Villa  Сигирия',
            description: 'Ночь в Fresco Water Villa (или подобном).',
            extra: ['Завтрак и ужин включены', 'Отель 4 звезды'],
          },
        ],
      },
      {
        title: 'Сигирия  Канди',
        activities: [
          {
            type: 'Культурный визит',
            title: 'Сад специй в Матале',
            description: 'Откройте для себя знаменитые специи и травы Шри Ланки.',
          },
          {
            type: 'Объект ЮНЕСКО',
            title: 'Храм Зуба Будды',
            description: 'Посетите самый священный буддийский храм Шри Ланки в Канди.',
          },
          {
            type: 'Культурное шоу',
            title: 'Танцевальное шоу в Канди',
            description: 'Насладитесь традиционными кандийскими танцами.',
          },
          {
            type: 'Проживание',
            title: 'Hotel Topaz  Канди',
            description: 'Ночь в отеле Topaz (или подобном) в Канди, на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Собственная ванная комната', 'Завтрак', 'Ужин включён'],
          },
        ],
      },
      {
        title: 'Канди  Нувара Элия  Элла',
        activities: [
          {
            type: 'Чайный опыт',
            title: 'Чайная фабрика Blue Field',
            description: 'Узнайте, как производится всемирно известный цейлонский чай.',
          },
          {
            type: 'Природа',
            title: 'Водопад Рамбода',
            description: 'Посетите один из самых высоких водопадов Шри Ланки.',
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
        title: 'Элла  Хиккадува',
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
              'Мемориал цунами в Пералии чтит память жертв цунами 2004 года: возвышающаяся статуя Будды символизирует мир и память рядом с местом самой страшной катастрофы цунами в истории Шри Ланки.',
          },
          {
            type: 'Охрана дикой природы',
            title: 'Посещение черепаховой инкубационной станции в Коггале',
            description:
              'Посетите инкубационную станцию и центр охраны черепах в Коггале, где находящиеся под угрозой морские черепахи получают защиту и реабилитацию. Узнайте о работе Шри Ланки по охране морской среды и понаблюдайте за детёнышами черепах в бассейнах инкубатора.',
          },
          {
            type: 'Сафари на лодке',
            title: 'Сафари на лодке по реке Мадука',
            description:
              'Насладитесь живописным сафари на лодке через мангровые леса и небольшие острова реки Мадука. Посетите традиционные плантации корицы и исследуйте один из самых красивых водно болотных экосистем Шри Ланки.',
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
              'Мемориал цунами в Пералии чтит память жертв цунами 2004 года: возвышающаяся статуя Будды символизирует мир и память рядом с местом самой страшной катастрофы цунами в истории Шри Ланки.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Мемориальный зал Независимости',
            description:
              'Площадь Независимости в Коломбо исторический памятник, построенный в честь независимости Шри Ланки, с величественной колониальной архитектурой, пышными садами и умиротворяющей атмосферой.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Храм Гангарамая',
            description:
              'Храм Гангарамая в Коломбо прекрасный буддийский храм, сочетающий шри ланкийскую, тайскую и китайскую архитектуру, со статуями, реликвиями и спокойной обстановкой у озера.',
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
            title: 'Красная мечеть (мечеть Джами уль Альфар)',
            description:
              'Мечеть Джами уль Альфар, известная как Красная мечеть Коломбо, знаковая достопримечательность с яркой красно белой архитектурой, раскрывающая богатое исламское наследие Шри Ланки.',
          },
        ],
      },
    ],
  },
  nl: {
    title: '10 Tage Sri Lanka Privatreise | Safari, Kultur, Bergland & Strand',
    description:
      'Eine unvergessliche 10 tagige Sri Lanka Privatreise mit Wilpattu Safari, Anuradhapura, Sigiriya, Kandy, Abenteuern in Ella und einem entspannten Aufenthalt an der Sudkuste.',
    duration: '10 Tage',
    persons: '1-20 Personen',
    tourType: 'Rundreise',
    overview:
      'Entdecken Sie Sri Lankas Tierwelt, antike Konigreiche, malerische Berge und goldene Strande auf dieser perfekt ausbalancierten 10 tagigen Reise. Diese Rundreise verbindet Safari Abenteuer, UNESCO Welterbestatten, Berglandschaften, Teeplantagen, Wasserfalle und entspannte Kustenerlebnisse mit Halbpension und privatem Transport.',
    includes: PACKAGE_INCLUDES.nl,
    excludes: PACKAGE_EXCLUDES.nl,
    seoIntro:
      'Zehn Tage lassen Sie Sri Lanka in menschlichem Tempo erleben  von Leopardengebiet in Wilpattu und dem heiligen Bodhi Baum in Anuradhapura uber Sigiriya, Kandy, die Nine Arches Bridge in Ella und ausgedehnte Strandtage an der Sudkuste bis zu einem Finale in Colombo. Diese private Rundreise kombiniert zwei Wildtier Safaris, ayurvedisches Wellness, Wasserfalle im Teeland und entspannte Strandzeit in Hikkaduwa mit den Mangroven des Madu Flusses, Schildkroten Aufzuchtstationen und Hauptstadt Sehenswurdigkeiten wie dem Gangaramaya Tempel und Galle Face Green. Sundown Tours beinhaltet neun Nachte Halbpension in 4 Sterne Unterkunften, Flughafentransfers und einen englischsprachigen Chauffeur in einem privaten klimatisierten Fahrzeug. Eintrittsgebuhren und Mittagessen bleiben flexibel, sodass Sie die optionalen Stopps selbst steuern. Die zusatzlichen Tage im Vergleich zu einer einwochigen Reise bedeuten weniger Fahrzeit pro Highlight, Raum fur spontane Besuche von Gewurzgarten und genug Strandmorgen, um wirklich zu entspannen  statt nur den Ozean zu fotografieren und weiterzuziehen.',
    highlights: [
      'Jeep Safaris in Wilpattu und Minneriya sowie Yala ahnliche Tierwelt im Suden',
      'Heilige Statten von Anuradhapura, Lowenfelsen Sigiriya und Zahnreliquien Tempel in Kandy',
      'Nine Arch Bridge in Ella, Teefabriken, Ramboda Wasserfalle und Landschaft des Hugellands',
      'Ausgedehnte Strandaufenthalte in Hikkaduwa und Mirissa mit Besuchen von Schildkroten Schutzprojekten',
      'Stadtrundfahrt in Colombo  Independence Square, Gangaramaya, Galle Face und Pettah Markte',
    ],
    whoIsFor:
      'Am besten fur Reisende mit einer vollen Ferienwoche plus Pufferzeit, die Tiefgang statt Tempo wunschen  Familien mit Teenagern, Fotografen und Wiederholungsbesucher, die das Kulturerbe im Norden der Mitte zur klassischen Sudroute hinzufugen mochten.',
    bestTimeNote:
      'Dezember to April eignet sich fur die West und Sudkustenstrande sowie den Zugang zu Wilpattu. Mai to September funktioniert gut, wenn Sie das Kultur Dreieck priorisieren und gelegentliche Nachmittagsschauer im Hugelland nicht storen.',
    faq: [
      {
        q: 'Wie unterscheidet sich die 10 tagige Tour von Ihren 7- oder 8 tagigen Reisen?',
        a: 'Sie erhalten zusatzlich Wilpattu und Anuradhapura zu Beginn, zwei zusatzliche Strandnachte rund um Hikkaduwa/Mirissa und einen vollen Sightseeing Tag in Colombo am Ende  mit weniger mehrstundigen Fahrten an einem einzigen Tag.',
      },
      {
        q: 'Sind alle neun Hotelnachte im Preis enthalten?',
        a: 'Ja  neun Nachte in 4 Sterne Halbpension Hotels, das Privatfahrzeug, der Fahrer und die Flughafentransfers sind enthalten. Parktickets, Safari Jeeps, Mittagessen und optionale Ayurveda Behandlungen werden vor Ort bezahlt.',
      },
      {
        q: 'Konnen wir am Flughafen enden, anstatt am 10. Tag Colombo zu besichtigen?',
        a: 'Ja. Bei einem Nachmittagsflug verkurzen wir die Colombo Rundfahrt auf Ihre Wunsch Stopps oder bringen Sie direkt zum Flughafen Bandaranaike  teilen Sie uns bei der Buchung Ihre Flugzeit mit.',
      },
    ],
    days: [
      {
        title: 'Flughafen / Hotel  Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Wilpattu Nationalpark Safari',
            description:
              'Erkunden Sie Sri Lankas grossten Nationalpark bei einer 5 stundigen 4x4 Jeep Safari. Halten Sie Ausschau nach Leoparden, Lippenbaren, Elefanten, Hirschen, Krokodilen und einer vielfaltigen Vogelwelt.',
          },
          {
            type: 'Unterkunft',
            title: 'Thimbiri Wewa Resort  Wilpattu',
            description: 'Ubernachtung im Thimbiri Wewa Resort Wilpattu (oder ahnlich)  Halbpension.',
            extra: ['Abendessen inklusive', 'Hotel gehobener Klasse'],
          },
        ],
      },
      {
        title: 'Wilpattu  Anuradhapura  Sigiriya',
        activities: [
          {
            type: 'Religioser Besuch',
            title: 'Sri Maha Bodhi Tempel',
            description: 'Besuchen Sie den heiligen Sri Maha Bodhi Baum in Anuradhapura.',
          },
          {
            type: 'Historischer Besuch',
            title: 'Ruwanweli Maha Seya',
            description: 'Erkunden Sie eines der heiligsten buddhistischen Monumente Sri Lankas.',
          },
          {
            type: 'Aussichtswanderung',
            title: 'Sonnenuntergang am Pidurangala Felsen',
            description: 'Besteigen Sie den Pidurangala Felsen fur einen atemberaubenden Sonnenuntergang.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Ubernachtung in der Fresco Water Villa (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Sigiriya Kulturdreieck',
        activities: [
          {
            type: 'UNESCO Statte',
            title: 'Sigiriya Felsenfestung',
            description: 'Besteigen Sie die UNESCO gelistete Felsenfestung Sigiriya.',
          },
          {
            type: 'Dorferlebnis',
            title: 'Dorftour Hiriwadunna',
            description: 'Erleben Sie das authentische landliche Leben Sri Lankas.',
          },
          {
            type: 'Safari',
            title: 'Minneriya Safari',
            description: 'Geniessen Sie eine 4x4 Jeep Safari, bekannt fur ihre Elefantenansammlungen.',
          },
          {
            type: 'Wellness',
            title: 'Ayurveda Massage',
            description: 'Entspannen Sie bei einer traditionellen Krauterolmassage.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Ubernachtung in der Fresco Water Villa (oder ahnlich).',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Sigiriya  Kandy',
        activities: [
          {
            type: 'Kulturbesuch',
            title: 'Matale Gewurzgarten',
            description: 'Entdecken Sie Sri Lankas beruhmte Gewurze und Krauter.',
          },
          {
            type: 'UNESCO Statte',
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
            title: 'Hotel Topaz  Kandy',
            description: 'Ubernachtung im Hotel Topaz (oder ahnlich) in Kandy  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Eigenes Bad', 'Fruhstuck', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Kandy  Nuwara Eliya  Ella',
        activities: [
          {
            type: 'Tee Erlebnis',
            title: 'Bluefield Teefabrik',
            description: 'Erfahren Sie, wie der weltberuhmte Ceylon Tee hergestellt wird.',
          },
          {
            type: 'Natur',
            title: 'Ramboda Wasserfall',
            description: 'Besuchen Sie einen der hochsten Wasserfalle Sri Lankas.',
          },
          {
            type: 'Unterkunft',
            title: 'Oak Ray Ella Gap Hotel',
            description: 'Ubernachtung im Oak Ray Ella Gap Hotel (oder ahnlich)  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Eigenes Bad', 'Fruhstuck', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Ella  Hikkaduwa',
        activities: [
          {
            type: 'Sehenswurdigkeit',
            title: 'Nine Arches Bridge',
            description: 'Besuchen Sie die beruhmte Eisenbahnbrucke aus der Kolonialzeit.',
          },
          {
            type: 'Tierwelt',
            title: 'Elephant Transit Home',
            description: 'Beobachten Sie gerettete Elefantenbabys.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Ubernachtung im Somerset Mirissa Hotel (oder ahnlich)  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Hikkaduwa Strand',
        activities: [
          {
            type: 'Strandentspannung',
            title: 'Hikkaduwa Beach',
            description: 'Entspannen Sie an goldenen Stranden und schwimmen Sie im Indischen Ozean.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Ubernachtung im Somerset Mirissa Hotel (oder ahnlich)  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Hikkaduwa Strand',
        activities: [
          {
            type: 'Strandentspannung',
            title: 'Hikkaduwa Beach',
            description: 'Entspannen Sie an goldenen Stranden und schwimmen Sie im Indischen Ozean.',
          },
          {
            type: 'Unterkunft',
            title: 'Somerset Mirissa Hotel',
            description: 'Ubernachtung im Somerset Mirissa Hotel (oder ahnlich)  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Wasseraktivitaten nach Kalutara',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Peraliya Tsunami Denkmal',
            description:
              'Das Peraliya Tsunami Denkmal ehrt die Opfer des Tsunamis von 2004 mit einer imposanten Buddha Statue als Symbol fur Frieden und Erinnerung, nahe dem Ort der schlimmsten Tsunami Katastrophe Sri Lankas.',
          },
          {
            type: 'Naturschutz',
            title: 'Besuch der Koggala Schildkrotenaufzucht',
            description:
              'Besuchen Sie die Koggala Schildkrotenaufzucht und das Schutzzentrum, in dem gefahrdete Meeresschildkroten geschutzt und rehabilitiert werden. Erfahren Sie mehr uber Sri Lankas Meeresschutzbemuhungen und beobachten Sie Jungschildkroten in den Aufzuchtbecken.',
          },
          {
            type: 'Bootssafari',
            title: 'Madu Fluss Bootssafari',
            description:
              'Erleben Sie eine malerische Bootssafari durch die Mangrovenwalder und kleinen Inseln des Madu Flusses. Besuchen Sie traditionelle Zimtplantagen und eines der schonsten Feuchtgebiete Sri Lankas.',
          },
          {
            type: 'Unterkunft',
            title: 'Kamili Beach Resort',
            description: 'Ubernachtung im Kamili Beach Resort (oder ahnlich)  Halbpension.',
            extra: ['Hotel 4 Sterne (Premium)', 'Eigenes Bad', 'Fruhstuck', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Abreise von Colombo',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Peraliya Tsunami Denkmal',
            description:
              'Das Peraliya Tsunami Denkmal ehrt die Opfer des Tsunamis von 2004 mit einer imposanten Buddha Statue als Symbol fur Frieden und Erinnerung, nahe dem Ort der schlimmsten Tsunami Katastrophe Sri Lankas.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Independence Memorial Hall',
            description:
              'Der Unabhangigkeitsplatz in Colombo ist ein historisches Denkmal zur Erinnerung an die Unabhangigkeit Sri Lankas mit prachtvoller Kolonialarchitektur, uppigen Garten und einer friedlichen Atmosphare.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Gangaramaya Tempel',
            description:
              'Der Gangaramaya Tempel in Colombo ist ein wunderschoner buddhistischer Tempel, der sri lankische, thailandische und chinesische Architektur vereint, mit Statuen, Reliquien und einer ruhigen Lage am See.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Galle Face Green',
            description:
              'Galle Face Green in Colombo ist eine malerische Uferpromenade  perfekt fur entspannte Spaziergange, atemberaubende Sonnenuntergange und Streetfood in lebendiger Atmosphare am Indischen Ozean.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Pettah Markt',
            description:
              'Der Colombo Fort Market ist ein belebtes Zentrum mit einer Mischung aus lokalen Waren, Kleidung, Gewurzen und Streetfood  ein lebendiges Einkaufserlebnis im Herzen der Stadt.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Rote Moschee (Jami Ul Alfar Moschee)',
            description:
              'Die Jami Ul Alfar Moschee, bekannt als Rote Moschee in Colombo, ist ein ikonisches Wahrzeichen mit auffalliger rot weisser Architektur und gibt Einblick in Sri Lankas reiches islamisches Erbe.',
          },
        ],
      },
    ],
  }
};
