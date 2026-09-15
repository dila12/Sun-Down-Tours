import type { TourContent } from './localize';
import { PACKAGE_EXCLUDES, PACKAGE_INCLUDES } from './package-inclusions';

/**
 * 8 day Sri Lanka round tour (id: tour8).
 * English is the full BaseTour; locale overlays are authored separately.
 */
export const TOUR8: TourContent = {
  en: {
    title: '8 Day Sri Lanka Private Tour | Safari, Culture, Hill Country & Beach',
    description:
      'An unforgettable 8 day private Sri Lanka tour covering Wilpattu Safari, Anuradhapura, Sigiriya, Kandy, Ella adventures and a relaxing southern beach stay.',
    duration: '8 Days',
    persons: '1-20 Persons',
    filecode: '8-day-sri-lanka-private-tour',
    overview: `Discover Sri Lanka’s wildlife, ancient kingdoms, scenic mountains and golden beaches in one perfectly balanced 8 day journey. 
  This tour combines safari adventure, UNESCO heritage sites, hill country landscapes, tea plantations, waterfalls and relaxing coastal experiences with half  board accommodation and private transportation.`,
    tourType: 'Round Tour',
    itinerary: [
      {
        day: 1,
        title: 'Arrival  & Pidurangala Rock',
        activities: [
          {
            type: 'Arrival ',
            title: { title: 'Arrival ', icon: 'fa-plane', color: '#2c3e50' },
          },
          {
            type: 'Guided tour',
            title: { title: 'Pidurangala Rock', icon: 'fa-hiking', color: '#f39c12' },
            description:
              'Begin your Sri Lankan adventure with a memorable hike to Pidurangala Rock, one of the most spectacular viewpoints in the Cultural Triangle. Climb through ancient temple grounds and natural rock formations to reach the summit, where breathtaking panoramic views await. From the top, enjoy an unforgettable sunset overlooking the iconic Sigiriya Rock Fortress, lush forests, tranquil lakes, and surrounding countryside. This hidden gem offers one of the best photography opportunities in Sri Lanka and provides an authentic blend of nature, history, adventure, and cultural heritage.',
            image: 'assets/img/5daysTours/c8dyxgodivrwf4hxzziq.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Fresco Water Villa', icon: 'fa-hotel', color: '#27ae60' },
            description: 'Accommodation in Hotel Fresco Water Villa or Similar Hotel - HB Basis',
            image: 'assets/img/7dayschange/f4yqlbw3bjsz3szp3hbq.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 2,
        title: 'Sigiriya & Dambulla',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Sigiriya Lion Rock', icon: 'fa-mountain', color: '#e74c3c' },
            description:
              'Explore the legendary Sigiriya Lion Rock Fortress, a UNESCO World Heritage Site and one of Sri Lanka’s most iconic landmarks. Built by King Kashyapa in the 5th century, this ancient rock citadel rises nearly 200 meters above the surrounding plains and features remarkable frescoes, landscaped gardens, mirror walls, and impressive engineering achievements. Climb to the summit and enjoy breathtaking panoramic views of the Cultural Triangle, making this an unforgettable blend of history, archaeology, culture, and adventure.',
            image: 'assets/img/7dayschange/ihyw8fdom33yg8zqkmfi.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Hiriwadunna Village & Lake Adventure', icon: 'fa-leaf', color: '#8e44ad' },
            description:
              'Experience authentic rural life in Sri Lanka with a guided visit to the traditional village of Hiriwadunna. Travel through picturesque countryside, scenic lakes, lush farmlands, and local communities while learning about centuries old traditions and agricultural practices. Enjoy a peaceful catamaran ride across the village lake, interact with local residents, and discover the simplicity and charm of village life that remains unchanged by modern development.',
            image: 'assets/img/5daysTours/36.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Dambulla Cave Temple', icon: 'fa-place-of-worship', color: '#2980b9' },
            description:
              'Visit the magnificent Dambulla Royal Cave Temple, Sri Lanka’s largest and best preserved cave temple complex and a UNESCO World Heritage Site. Dating back over 2,000 years, this sacred pilgrimage destination features five impressive cave shrines filled with ancient Buddhist murals, beautifully preserved statues, and remarkable religious artwork. The temple offers visitors a fascinating insight into Sri Lanka’s spiritual heritage, cultural traditions, and architectural achievements.',
            image: 'assets/img/7dayschange/d2ap1r8hoijw6wsm5xgy.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Dambulla Dedicated Economic Center', icon: 'fa-shopping-basket', color: '#16a085' },
            description:
              'Explore the vibrant Dambulla Dedicated Economic Center, Sri Lanka’s largest wholesale fruit and vegetable market. Witness the bustling atmosphere as farmers and traders from across the island gather to exchange fresh produce. Discover a colorful variety of tropical fruits, vegetables, spices, and local products while experiencing an authentic slice of everyday Sri Lankan life and commerce.',
            image: 'assets/img/7dayschange/v54wmh9aukt4toblznpu.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Fresco Water Villa', icon: 'fa-hotel', color: '#27ae60' },
            description: 'Stay overnight with HB basis',
            image: 'assets/img/7dayschange/f4yqlbw3bjsz3szp3hbq.jpg',
            extra: ['Breakfast', 'Dinner'],
          },
        ],
      },
      {
        day: 3,
        title: 'Kandy City Tour',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Sri Dalada Maligawa', icon: 'fa-place-of-worship', color: '#2980b9' },
            description:
              'Visit the world renowned Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), one of the most sacred Buddhist pilgrimage sites in the world and a UNESCO listed landmark in the historic city of Kandy. This magnificent temple houses the revered Sacred Tooth Relic of Lord Buddha and attracts thousands of devotees and visitors each year. Admire the temple’s stunning Kandyan architecture, intricate carvings, golden roofed shrines, and rich spiritual atmosphere while learning about its importance in Sri Lanka’s religious and cultural heritage.',
            image: 'assets/img/7dayschange/f3pqyx8y4gpwmqhzleh0.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Kandy Lake Club - Cultural Dance Show', icon: 'fa-theater-masks', color: '#8e44ad' },
            description:
              'Experience the vibrant traditions of Sri Lanka through the famous Kandy Cultural Dance Show. Witness an exciting performance featuring traditional Kandyan drumming, energetic folk dances, colorful costumes, fire walking, and fire breathing acts. This captivating cultural experience showcases centuries old Sri Lankan performing arts and offers visitors a deeper understanding of the island’s rich heritage and cultural diversity.',
            image: 'assets/img/7dayschange/upxn0ge9htdg20ycpgp6.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Sri Muthumariamman Temple', icon: 'fa-place-of-worship', color: '#2980b9' },
            description:
              'Explore the magnificent Sri Muthumariamman Temple, one of the most beautiful Hindu temples in Sri Lanka. Renowned for its colorful architecture, detailed sculptures, and spiritual significance, the temple stands as a symbol of the country’s multicultural and multi religious heritage. Admire the impressive Dravidian style design while learning about Hindu traditions, rituals, and the harmonious coexistence of diverse cultures in Sri Lanka.',
            image: 'assets/img/7dayschange/gt14exwu7ogp3rz9aun9.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Nalanda Gedige', icon: 'fa-landmark', color: '#16a085' },
            description:
              'Discover the mysterious Nalanda Gedige, an ancient archaeological treasure located near Matale and considered one of Sri Lanka’s most unique historical monuments. Dating back over a thousand years, this remarkable stone structure combines both Hindu and Buddhist architectural influences, making it a fascinating site for history enthusiasts. Surrounded by peaceful landscapes, Nalanda Gedige offers visitors a glimpse into the island’s rich past and ancient craftsmanship.',
            image: 'assets/img/7dayschange/u9901tv9mcxlz9rd9mgw.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Hotel Topaz', icon: 'fa-hotel', color: '#27ae60' },
            description: 'Accommodation in Hotel Topaz or similar - HB Basis',
            image: 'assets/img/7dayschange/sxapeujg7mpergbd5nic.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom'],
          },
        ],
      },
      {
        day: 4,
        title: 'Nuwara Eliya via Ramboda Falls',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Royal Botanical Garden', icon: 'fa-leaf', color: '#2ecc71' },
            description:
              'Explore the world famous Royal Botanical Gardens in Peradeniya, one of the largest and most beautiful botanical gardens in Asia. Spanning over 147 acres, the gardens are home to more than 4,000 species of plants, including rare orchids, towering palm avenues, medicinal plants, giant bamboo, and tropical flowering trees. Surrounded by lush greenery and scenic landscapes, this botanical paradise offers a relaxing experience while showcasing Sri Lanka’s rich biodiversity and horticultural heritage.',
            image: 'assets/img/7dayschange/asojmlldivxq8vforwxt.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Ambuluwawa Tower', icon: 'fa-mountain', color: '#e67e22' },
            description:
              'Visit the iconic Ambuluwawa Biodiversity Complex and climb the famous Ambuluwawa Tower, one of Sri Lanka’s most unique viewpoints. Situated atop a mountain peak, the tower offers breathtaking 360 degree panoramic views of surrounding mountain ranges, forests, rivers, tea plantations, and rural villages. This unforgettable experience combines adventure, nature, photography, and spectacular scenery, making it one of the most popular attractions in Sri Lanka’s hill country.',
            image: 'assets/img/7dayschange/w3a48osbcocecoaaq9hd.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Bluefield Tea Factory', icon: 'fa-coffee', color: '#8e44ad' },
            description:
              'Discover the rich heritage of Ceylon Tea with a guided visit to the renowned Bluefield Tea Factory in Nuwara Eliya. Located amidst rolling tea plantations and mist covered hills, the factory offers a fascinating insight into the traditional tea making process, from leaf plucking to final production. Learn about the history of Sri Lanka’s world famous tea industry, observe the manufacturing process, and enjoy freshly brewed Ceylon Tea while admiring the breathtaking scenery of the hill country.',
            image: 'assets/img/7dayschange/tijr5ztiozgdesbxotm4.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Ramboda Falls View Point', icon: 'fa-water', color: '#3498db' },
            description:
              'Enjoy spectacular views of Ramboda Falls, one of the tallest and most picturesque waterfalls in Sri Lanka. Nestled among lush tea estates and misty mountain landscapes, the waterfall cascades down rocky cliffs creating a breathtaking natural spectacle. The surrounding region is famous for its scenic highlands, winding roads, cool climate, and panoramic viewpoints, offering visitors some of the most beautiful landscapes in Sri Lanka’s central hill country.',
            image: 'assets/img/7dayschange/ovdxsgglrdreodbe1tmv.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Ramboda Falls Hotel', icon: 'fa-hotel', color: '#27ae60' },
            description: 'Accommodation in Ramboda Falls Hotel or Similar - HB Basis',
            image: 'assets/img/7dayschange/zxla06noouvzn6e0teui.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom'],
          },
        ],
      },
      {
        day: 5,
        title: 'Ella Adventures',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Nine Arches Bridge', icon: 'fa-bridge', color: '#c0392b' },
            description:
              'Visit the iconic Nine Arches Bridge, one of Sri Lanka’s most photographed landmarks and a masterpiece of colonial era railway engineering. Nestled amidst lush tea plantations and tropical forests in Ella, this magnificent stone bridge was constructed entirely without steel and remains an active railway bridge to this day. Admire its impressive architecture, capture stunning photographs, and witness the famous blue train passing through one of the most scenic landscapes in Sri Lanka’s hill country.',
            image: 'assets/img/7dayschange/yka3mpx2nahiftrb0lpu.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Lake Gregory', icon: 'fa-water', color: '#2980b9' },
            description:
              'Enjoy a relaxing visit to the picturesque Lake Gregory, one of Nuwara Eliya’s most popular recreational attractions. Surrounded by beautiful mountain scenery and cool hill country weather, the lake offers a peaceful atmosphere ideal for sightseeing, photography, and leisure activities. Visitors can enjoy stunning lakeside views, boat rides, walking paths, and family friendly attractions while experiencing the charm of Sri Lanka’s famous hill station.',
            image: 'assets/img/7dayschange/sd3y8zh2cskrddig22n7.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: "Little Adam's Peak", icon: 'fa-mountain', color: '#8e44ad' },
            description:
              'Embark on a scenic hike to Little Adam’s Peak, one of Ella’s most popular viewpoints and a must visit destination for nature lovers. This easy and rewarding trek takes you through lush tea plantations, rolling green hills, and breathtaking mountain landscapes. Upon reaching the summit, enjoy spectacular 360 degree panoramic views of Ella Gap, surrounding valleys, forests, and distant mountain ranges. The stunning scenery and peaceful atmosphere make this one of the most memorable experiences in Sri Lanka’s hill country.',
            image: 'assets/img/7dayschange/e7sgetzhdjoahy2h9wgh.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: ' La Ella Breeze  Hotel', icon: 'fa-hotel', color: '#16a085' },
            description: 'Accommodation in  La Ella Breeze  Hotel or Similar hotel - HB Basis',
            image: 'assets/img/5daysTours/DJI_20240418061903_0457_D.png',
            extra: ['Hotel 4 stars (Premium)', 'Breakfast', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 6,
        title: 'Yala National Park & Ravana Falls',
        activities: [
          {
            type: 'Guided tour',
            title: { title: 'Yala National Park', icon: 'fa-paw', color: '#2ecc71' },
            description:
              'Embark on an unforgettable wildlife safari in Yala National Park, Sri Lanka’s most famous national park and one of the best places in Asia for spotting leopards in the wild. Home to an incredible diversity of wildlife, Yala shelters elephants, sloth bears, crocodiles, spotted deer, wild boars, buffaloes, and over 215 species of birds. Explore vast grasslands, lagoons, forests, and rocky landscapes while experiencing the thrill of observing animals in their natural habitat. This exciting safari adventure offers nature lovers and wildlife enthusiasts a truly authentic Sri Lankan wildlife experience.',
            image: 'assets/img/7dayschange/u1iadnsusjf2h8zdhma5.jpg',
          },
          {
            type: 'Guided tour',
            title: { title: 'Ravana Falls', icon: 'fa-water', color: '#3498db' },
            description:
              'Visit the breathtaking Ravana Falls, one of Sri Lanka’s most beautiful and iconic waterfalls located amidst the lush mountains of Ella. Cascading down multiple rock formations, this spectacular waterfall is surrounded by tropical forests and stunning natural scenery. Deeply connected to the ancient Indian epic Ramayana, local legends believe King Ravana hid Princess Sita in nearby caves, making the site both a natural attraction and an important cultural landmark. Enjoy the refreshing atmosphere, scenic viewpoints, and excellent photography opportunities at this popular destination.',
            image: 'assets/img/7dayschange/zauxzn86ulp9ddnrzlvw.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'mandara resort Hotel', icon: 'fa-hotel', color: '#0f4572' },
            description: 'Overnight stay in Mirissa.',
            image: 'assets/img/5daysTours/mandara-resort.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 7,
        title: 'Mirissa - Whale Watching & Water Activities',
        activities: [
          {
            type: 'Whale Watching',
            title: { title: 'Mirissa Whale & Dolphin Watching', icon: 'fa-water', color: '#3498db' },
            description:
              'Embark on an unforgettable whale and dolphin watching adventure in Mirissa, Sri Lanka’s premier marine wildlife destination. Cruise into the deep waters of the Indian Ocean in search of magnificent Blue Whales, Sperm Whales, Bryde’s Whales, and large pods of playful dolphins. Mirissa is recognized as one of the best whale watching locations in the world, offering visitors a rare opportunity to witness these gentle giants in their natural habitat while enjoying breathtaking ocean views and a memorable wildlife experience.',
            image: 'assets/img/5daysTours/Mirissa-Whale-Watching-1.jpg',
          },
          {
            type: 'Snorkeling',
            title: { title: 'Mirissa Whale Snorkeling Experience', icon: 'fa-mask-snorkel', color: '#1abc9c' },
            description:
              'Discover the vibrant underwater world of Mirissa through an exciting snorkeling experience in crystal clear tropical waters. Explore colorful coral formations, tropical reef fish, and diverse marine ecosystems along Sri Lanka’s southern coastline. This activity is perfect for ocean lovers seeking an immersive marine adventure surrounded by stunning natural beauty and rich biodiversity.',
            image: 'assets/img/5daysTours/images.jpg',
          },
          {
            type: 'Snorkeling',
            title: { title: 'Mirissa Turtle Snorkeling Adventure', icon: 'fa-fish', color: '#27ae60' },
            description:
              'Swim alongside graceful sea turtles in the warm waters of Mirissa and experience one of Sri Lanka’s most popular marine activities. Observe Green Turtles and Hawksbill Turtles in their natural environment while snorkeling among tropical fish and coral reefs. This unforgettable encounter offers incredible photo opportunities and a unique connection with the marine life of the Indian Ocean.',
            image: 'assets/img/5daysTours/5d.jpg',
          },
          {
            type: 'Water Activity',
            title: { title: 'Mirissa Sunset Kayak Ride', icon: 'fa-water', color: '#e67e22' },
            description:
              'Experience the magic of a tropical sunset with a peaceful kayak journey along the picturesque coastline of Mirissa. Paddle through calm ocean waters as the sky transforms into vibrant shades of orange, pink, and gold. This relaxing adventure combines stunning coastal scenery, refreshing sea breezes, and unforgettable sunset views, making it one of the most scenic water activities in southern Sri Lanka.',
            image: 'assets/img/5daysTours/7a.jpg',
          },
          {
            type: 'Boat Ride',
            title: { title: 'Mirissa Sunset Boat Ride', icon: 'fa-ship', color: '#9b59b6' },
            description:
              'Set sail on a relaxing sunset boat ride in Mirissa and enjoy panoramic views of Sri Lanka’s breathtaking southern coastline. Watch the sun slowly disappear over the Indian Ocean while cruising through tranquil waters surrounded by spectacular scenery. This romantic and family friendly experience provides the perfect opportunity to capture stunning photographs and create lasting memories of your Sri Lankan beach holiday.',
            image: 'assets/img/5daysTours/mirissa-sunset-boat.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Mandara Resort Hotel', icon: 'fa-hotel', color: '#16a085' },
            description:
              'Enjoy a comfortable overnight stay at Mandara Resort Hotel or a similar premium beachfront property in Mirissa. Located close to the beach and major attractions, the hotel offers modern amenities, spacious rooms, excellent hospitality, and a relaxing atmosphere. The package includes half  Board accommodation with breakfast and dinner, ensuring a pleasant and memorable stay on Sri Lanka’s beautiful southern coast.',
            image: 'assets/img/5daysTours/mandara-resort.jpg',
            extra: ['Hotel 4 Stars (Premium)', 'Breakfast Included', 'Private Bathroom', 'Dinner Included'],
          },
        ],
      },
      {
        day: 8,
        title: 'Mirissa & Departure',
        activities: [
          {
            type: 'Nature & Cultural Experience',
            title: { title: 'Coconut Tree Hill Mirissa', icon: 'fa-camera', color: '#27ae60' },
            description:
              'Visit the iconic Coconut Tree Hill in Mirissa, one of the most photographed coastal viewpoints in Sri Lanka. Perched on a cliff overlooking the turquoise waters of the Indian Ocean, this breathtaking location is lined with towering coconut palms, creating a picture perfect tropical landscape. Enjoy panoramic ocean views, capture stunning sunrise or sunset photographs, and experience the natural beauty that has made Coconut Tree Hill a must visit attraction for travelers exploring Sri Lanka’s southern coast.',
            image: 'assets/img/5daysTours/loepkav24dt36ngebdpp.jpg',
          },
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
          {
            type: 'Departure',
            title: { title: 'Departure Transfer', icon: 'fa-plane', color: '#2c3e50' },
          },
        ],
      },
    ],
    includes: PACKAGE_INCLUDES.en,
    excludes: PACKAGE_EXCLUDES.en,
    seoIntro:
      'Eight days is the sweet spot when you want ancient kingdoms, hill country drama and a proper beach finale without rushing. This private Sri Lanka round tour pairs Pidurangala sunset views and Sigiriya Lion Rock with Dambulla cave temples, Kandy\'s Tooth Relic rituals and Ambuluwawa Tower panoramas above the tea estates. Ella delivers Nine Arches Bridge, Little Adam\'s Peak and Ravana Falls before a Yala leopard safari and two nights on the Mirissa coast for whale watching, turtle snorkeling and sunset kayaking. Sundown Tours includes seven nights of half board 4 Star hotels, airport transfers and an English speaking chauffeur with unlimited mileage in your private vehicle. Entrance fees and optional marine activities stay at your discretion so you can lean into wildlife or beach time. Each day balances UNESCO heritage with hands on experiences village catamaran rides, spice markets and cinnamon boat safaris that coach tours often skip.',
    highlights: [
      'Pidurangala sunset, Sigiriya Lion Rock and Dambulla Cave Temple UNESCO sites',
      'Kandy Sacred Tooth Relic, cultural dance show and Ambuluwawa Tower viewpoints',
      'Ella Nine Arch Bridge, Little Adam\'s Peak and Yala National Park jeep safari',
      'Mirissa whale and dolphin watching, turtle snorkeling and sunset water activities',
      'Seven nights half board in carefully selected 4 Star hotels, with private chauffeur and airport transfers',
    ],
    whoIsFor:
      'Perfect for first time visitors, honeymooners and active families who want culture, wildlife and beach days in one itinerary. Whale watching requires an early start; we adapt pacing for travellers who prefer more temple time over marine activities.',
    bestTimeNote:
      'December to April is prime for Mirissa whale season and dry south coast weather. The Cultural Triangle and hill country work year round; Yala may close briefly around September we adjust park choice accordingly.',
    faq: [
      {
        q: 'How many hotel nights are included on the 8 days tour?',
        a: 'The package covers seven nights in 4 Star half board hotels along the route, plus airport pickup and drop off. Lunch, park entrance fees and whale watching boat tickets are paid locally.',
      },
      {
        q: 'Is whale watching guaranteed in Mirissa?',
        a: 'Whale sightings are very common November to April but nature is unpredictable. We book reputable operators at the best morning slot; if seas are rough we suggest turtle snorkeling or a relaxed beach morning instead.',
      },
      {
        q: 'Can we swap Pidurangala for the full Sigiriya Rock climb?',
        a: 'Absolutely. Day 2 focuses on Sigiriya Lion Rock while Day 1 uses Pidurangala for sunset. Tell us your fitness level and we can reverse or drop one climb to protect your knees.',
      },
    ],
  },
  de: {
    title: '8 Tage Sri Lanka Privatreise | Safari, Kultur, Bergland & Strand',
    description:
      'Eine unvergessliche 8 tagige Sri Lanka Privatreise mit Wilpattu Safari, Anuradhapura, Sigiriya, Kandy, Abenteuern in Ella und einem entspannten Aufenthalt an der Sudkuste.',
    duration: '8 Tage',
    persons: '1-20 Personen',
    tourType: 'Rundreise',
    overview:
      'Entdecken Sie Sri Lankas Tierwelt, antike Konigreiche, malerische Berge und goldene Strande auf dieser perfekt ausbalancierten 8 tagigen Reise. Diese Rundreise verbindet Safari Abenteuer, UNESCO Welterbestatten, Berglandschaften, Teeplantagen, Wasserfalle und entspannte Kustenerlebnisse mit Halbpension und privatem Transport.',
    includes: PACKAGE_INCLUDES.de,
    excludes: PACKAGE_EXCLUDES.de,
    seoIntro:
      'Acht Tage sind der ideale Zeitrahmen fur antike Konigreiche, das dramatische Hugelland und einen richtigen Strandabschluss, ohne Eile. Diese private Sri Lanka Rundreise verbindet den Sonnenuntergang am Pidurangala und den Lowenfelsen Sigiriya mit den Hohlentempeln von Dambulla, den Zahnreliquien Ritualen in Kandy und den Panoramen des Ambuluwawa Turms uber den Teeplantagen. In Ella erwarten Sie die Nine Arches Bridge, Little Adam\'s Peak und die Ravana Wasserfalle, bevor eine Leoparden Safari in Yala und zwei Nachte an der Kuste von Mirissa mit Whale Watching, Schildkroten Schnorcheln und Sonnenuntergangs Kajaktouren folgen. Sundown Tours beinhaltet sieben Nachte Halbpension in 4 Sterne Hotels, Flughafentransfers und einen englischsprachigen Chauffeur mit unbegrenzter Kilometerleistung in Ihrem Privatfahrzeug. Eintrittsgebuhren und optionale Wasseraktivitaten bleiben Ihnen selbst uberlassen, sodass Sie sich starker auf Tierwelt oder Strandzeit konzentrieren konnen. Jeder Tag verbindet UNESCO Kulturerbe mit hautnahen Erlebnissen  Katamaranfahrten im Dorf, Gewurzmarkte und Zimt Bootssafaris , die bei Bustouren oft fehlen.',
    highlights: [
      'Sonnenuntergang am Pidurangala, Lowenfelsen Sigiriya und UNESCO Hohlentempel von Dambulla',
      'Heilige Zahnreliquie in Kandy, kulturelle Tanzshow und Aussichtspunkte am Ambuluwawa Turm',
      'Nine Arch Bridge in Ella, Little Adam\'s Peak und Jeep Safari im Yala Nationalpark',
      'Wal und Delfinbeobachtung in Mirissa, Schildkroten Schnorcheln und Wasseraktivitaten bei Sonnenuntergang',
      'Sieben Nachte Halbpension in sorgfaltig ausgewahlten 4 Sterne Hotels, mit privatem Chauffeur und Flughafentransfers',
    ],
    whoIsFor:
      'Perfekt fur Erstbesucher, Hochzeitsreisende und aktive Familien, die Kultur, Tierwelt und Strandtage in einer Reise verbinden mochten. Whale Watching erfordert einen fruhen Start; fur Reisende, die mehr Tempelzeit statt Wasseraktivitaten bevorzugen, passen wir das Tempo an.',
    bestTimeNote:
      'Dezember to April ist die beste Zeit fur die Walsaison in Mirissa und trockenes Wetter an der Sudkuste. Das Kultur Dreieck und das Hugelland eignen sich ganzjahrig; Yala kann um September kurzzeitig schliessen  wir passen die Parkwahl entsprechend an.',
    faq: [
      {
        q: 'Wie viele Hotelnachte sind in der 8 tagigen Tour enthalten?',
        a: 'Das Paket umfasst sieben Nachte in 4 Sterne Halbpension Hotels entlang der Route sowie Abholung und Ruckfahrt zum Flughafen. Mittagessen, Parkeintrittsgebuhren und whale watching Bootstickets werden vor Ort bezahlt.',
      },
      {
        q: 'Ist Whale Watching in Mirissa garantiert?',
        a: 'Walsichtungen sind von November bis April sehr haufig, aber die Natur ist unvorhersehbar. Wir buchen seriose Anbieter fur den besten Morgenslot; bei rauer See empfehlen wir alternativ Schildkroten Schnorcheln oder einen entspannten Strandmorgen.',
      },
      {
        q: 'Konnen wir Pidurangala gegen den vollstandigen Aufstieg auf den Sigiriya Felsen tauschen?',
        a: 'Absolut. Tag 2 konzentriert sich auf den Lowenfelsen Sigiriya, wahrend Tag 1 Pidurangala fur den Sonnenuntergang nutzt. Teilen Sie uns Ihr Fitnessniveau mit, und wir konnen einen Aufstieg umkehren oder streichen, um Ihre Knie zu schonen.',
      },
    ],
    days: [
      {
        title: 'Ankunft & Pidurangala Felsen',
        activities: [
          { type: 'Ankunft', title: 'Ankunft' },
          {
            type: 'Gefuhrte Tour',
            title: 'Pidurangala Felsen',
            description:
              'Beginnen Sie Ihr Sri Lanka Abenteuer mit einer Wanderung zum Pidurangala Felsen, einem der spektakularsten Aussichtspunkte im Kulturdreieck. Uber antike Tempelanlagen und Felsformationen erreichen Sie den Gipfel und erleben einen unvergesslichen Sonnenuntergang mit Blick auf die Felsenfestung Sigiriya, uppige Walder und ruhige Seen.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa',
            description: 'Ubernachtung im Hotel Fresco Water Villa (oder ahnlich)  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Sigiriya & Dambulla',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Sigiriya Felsenfestung',
            description:
              'Erkunden Sie die legendare Felsenfestung Sigiriya, eine UNESCO Welterbestatte und eines der beruhmtesten Wahrzeichen Sri Lankas. Die im 5. Jahrhundert von Konig Kashyapa errichtete Festung erhebt sich fast 200 Meter uber die Ebene und besticht durch Fresken, Gartenanlagen, die Spiegelwand und beeindruckende Ingenieurskunst.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Dorf und Seeabenteuer Hiriwadunna',
            description:
              'Erleben Sie das authentische Dorfleben Sri Lankas bei einem gefuhrten Besuch in Hiriwadunna. Durchqueren Sie malerische Landschaften, Seen und Felder, lernen Sie jahrhundertealte Traditionen kennen und unternehmen Sie eine ruhige Katamaran Fahrt uber den Dorfsee.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Hohlentempel von Dambulla',
            description:
              'Besuchen Sie den prachtigen Hohlentempel von Dambulla, Sri Lankas grossten und besterhaltenen Hohlentempelkomplex und eine UNESCO Welterbestatte. Die uber 2.000 Jahre alte Pilgerstatte umfasst funf Hohlenschreine mit buddhistischen Wandmalereien und gut erhaltenen Statuen.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Dambulla Wirtschaftszentrum',
            description:
              'Entdecken Sie das lebhafte Dambulla Economic Center, Sri Lankas grossten Grossmarkt fur Obst und Gemuse. Erleben Sie das geschaftige Treiben der Handler aus dem ganzen Land und die bunte Vielfalt an tropischen Fruchten, Gemuse und Gewurzen.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa',
            description: 'Ubernachtung mit Halbpension.',
            extra: ['Fruhstuck', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Kandy Stadtrundfahrt',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Sri Dalada Maligawa',
            description:
              'Besuchen Sie den weltberuhmten Zahntempel (Sri Dalada Maligawa), eine der heiligsten buddhistischen Pilgerstatten und UNESCO Welterbestatte im historischen Kandy. Bewundern Sie die kandyanische Architektur, kunstvolle Schnitzereien und goldverzierte Schreine.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Kandy Lake Club  Kulturelle Tanzshow',
            description:
              'Erleben Sie die lebendigen Traditionen Sri Lankas bei der beruhmten Kandy Tanzshow mit traditionellem Trommelspiel, energiegeladenen Volkstanzen, farbenprachtigen Kostumen sowie Feuerlauf und Feuerspuck Darbietungen.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Sri Muthumariamman Tempel',
            description:
              'Erkunden Sie den prachtvollen Sri Muthumariamman Tempel, einen der schonsten Hindutempel Sri Lankas. Bekannt fur seine farbenfrohe Architektur und detailreichen Skulpturen im drawidischen Stil, spiegelt er die multikulturelle Geschichte des Landes wider.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Nalanda Gedige',
            description:
              'Entdecken Sie das geheimnisvolle Nalanda Gedige nahe Matale, eines der einzigartigsten historischen Monumente Sri Lankas. Das uber tausend Jahre alte Steinbauwerk vereint hinduistische und buddhistische Architektur inmitten friedlicher Landschaften.',
          },
          {
            type: 'Unterkunft',
            title: 'Hotel Topaz',
            description: 'Ubernachtung im Hotel Topaz (oder ahnlich)  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya uber die Ramboda Wasserfalle',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Royal Botanical Garden',
            description:
              'Besuchen Sie die weltberuhmten Royal Botanical Gardens in Peradeniya, einen der grossten und schonsten botanischen Garten Asiens. Auf uber 147 Hektar wachsen mehr als 4.000 Pflanzenarten  seltene Orchideen, eine Palmenallee, Heilpflanzen und tropische Blutenbaume.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Ambuluwawa Turm',
            description:
              'Besteigen Sie den beruhmten Ambuluwawa Turm im gleichnamigen Biodiversitatskomplex, einen der einzigartigsten Aussichtspunkte Sri Lankas. Auf einem Berggipfel gelegen, bietet er einen 360 Grad Panoramablick auf Bergketten, Walder, Flusse, Teeplantagen und Dorfer.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Bluefield Teefabrik',
            description:
              'Entdecken Sie das Erbe des Ceylon Tees bei einem gefuhrten Besuch der bekannten Bluefield Teefabrik in Nuwara Eliya. Inmitten uppiger Teeplantagen und nebelverhangener Hugel erfahren Sie alles uber den traditionellen Herstellungsprozess vom Blattpflucken bis zur fertigen Tasse.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Aussichtspunkt Ramboda Wasserfalle',
            description:
              'Geniessen Sie spektakulare Ausblicke auf die Ramboda Wasserfalle, einen der hochsten und malerischsten Wasserfalle Sri Lankas. Umgeben von Teeplantagen und nebligen Berglandschaften sturzt der Wasserfall uber schroffe Felsen  ein beeindruckendes Naturschauspiel.',
          },
          {
            type: 'Unterkunft',
            title: 'Ramboda Falls Hotel',
            description: 'Ubernachtung im Ramboda Falls Hotel (oder ahnlich)  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad'],
          },
        ],
      },
      {
        title: 'Ella Abenteuer',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Nine Arches Bridge',
            description:
              'Besuchen Sie die beruhmte Nine Arches Bridge, eines der meistfotografierten Wahrzeichen Sri Lankas und ein Meisterwerk kolonialer Eisenbahnbaukunst. Die aus Stein errichtete Brucke inmitten von Teeplantagen ist bis heute in Betrieb.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Lake Gregory',
            description:
              'Geniessen Sie einen entspannten Besuch am malerischen Lake Gregory, einer der beliebtesten Freizeitattraktionen von Nuwara Eliya. Umgeben von Berglandschaften und kuhlem Hochlandklima ladt der See zu Bootsfahrten, Spaziergangen und Fotografie ein.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Little Adam’s Peak',
            description:
              'Wandern Sie zum Little Adam’s Peak, einem der beliebtesten Aussichtspunkte Ellas. Der leichte, lohnende Aufstieg fuhrt durch Teeplantagen und grune Hugel bis zum Gipfel, wo ein 360 Grad Panoramablick auf die Ella Gap und die Taler wartet.',
          },
          {
            type: 'Unterkunft',
            title: 'La Ella Breeze Hotel',
            description: 'Ubernachtung im La Ella Breeze Hotel (oder ahnlich)  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Yala Nationalpark & Ravana Wasserfalle',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Yala Nationalpark',
            description:
              'Erleben Sie eine unvergessliche Safari im Yala Nationalpark, Sri Lankas beruhmtestem Park und einem der besten Orte Asiens, um wilde Leoparden zu beobachten. Der Park beherbergt Elefanten, Lippenbaren, Krokodile, Sikahirsche, Wildschweine, Buffel und uber 215 Vogelarten.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Ravana Wasserfalle',
            description:
              'Besuchen Sie die atemberaubenden Ravana Wasserfalle, eines der schonsten und bekanntesten Wasserfalle Sri Lankas inmitten der Berge von Ella. Der Legende nach versteckte Konig Ravana hier Prinzessin Sita in nahegelegenen Hohlen.',
          },
          {
            type: 'Unterkunft',
            title: 'Mandara Resort Hotel',
            description: 'Ubernachtung in Mirissa.',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Mirissa  Whale Watching & Wasseraktivitaten',
        activities: [
          {
            type: 'Whale Watching',
            title: 'Wal und Delfinbeobachtung in Mirissa',
            description:
              'Erleben Sie ein unvergessliches Whale und Dolphin Watching Abenteuer in Mirissa, Sri Lankas fuhrendem Ziel fur Meereswildtiere. Fahren Sie hinaus in den Indischen Ozean auf der Suche nach Blauwalen, Pottwalen, Bryde Walen und verspielten Delfinschulen.',
          },
          {
            type: 'Schnorcheln',
            title: 'Schnorchel Erlebnis mit Walen in Mirissa',
            description:
              'Entdecken Sie die farbenfrohe Unterwasserwelt Mirissas bei einem spannenden Schnorchelausflug in kristallklarem, tropischem Wasser. Erkunden Sie bunte Korallenformationen und eine vielfaltige Riff Tierwelt entlang der Sudkuste Sri Lankas.',
          },
          {
            type: 'Schnorcheln',
            title: 'Schildkroten Schnorchelabenteuer in Mirissa',
            description:
              'Schwimmen Sie mit anmutigen Meeresschildkroten im warmen Wasser von Mirissa  eines der beliebtesten Meereserlebnisse Sri Lankas. Beobachten Sie Grune Meeresschildkroten und Karettschildkroten zwischen Korallenriffen und tropischen Fischen.',
          },
          {
            type: 'Wasseraktivitat',
            title: 'Sonnenuntergangs Kajaktour in Mirissa',
            description:
              'Erleben Sie einen tropischen Sonnenuntergang bei einer ruhigen Kajaktour entlang der malerischen Kuste von Mirissa, wahrend sich der Himmel in Orange, Rosa und Goldtone verfarbt.',
          },
          {
            type: 'Bootsfahrt',
            title: 'Sonnenuntergangs Bootsfahrt in Mirissa',
            description:
              'Gehen Sie an Bord fur eine entspannte Sonnenuntergangs Bootsfahrt in Mirissa mit Panoramablick auf die Sudkuste Sri Lankas. Beobachten Sie, wie die Sonne uber dem Indischen Ozean versinkt  ein romantisches Erlebnis fur die ganze Familie.',
          },
          {
            type: 'Unterkunft',
            title: 'Mandara Resort Hotel',
            description:
              'Verbringen Sie eine komfortable Ubernachtung im Mandara Resort Hotel oder einem ahnlichen Strandhotel in Mirissa. Das Paket beinhaltet Halbpension mit Fruhstuck und Abendessen fur einen angenehmen Aufenthalt an Sri Lankas schoner Sudkuste.',
            extra: ['4 Sterne Hotel (Premium)', 'Fruhstuck inklusive', 'Eigenes Bad', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Mirissa & Abreise',
        activities: [
          {
            type: 'Natur und Kulturerlebnis',
            title: 'Coconut Tree Hill Mirissa',
            description:
              'Besuchen Sie den ikonischen Coconut Tree Hill in Mirissa, einen der meistfotografierten Kustenaussichtspunkte Sri Lankas. Auf einer Klippe uber dem turkisblauen Indischen Ozean gelegen, saumen hohe Kokospalmen diese malerische Landschaft.',
          },
          {
            type: 'Naturschutz',
            title: 'Meeresschildkroten Schutzprojekt',
            description:
              'Besuchen Sie ein Meeresschildkroten Schutzzentrum an der Sudkuste und erfahren Sie mehr uber den Schutz der Meeresfauna, Brutprogramme und Rehabilitationsmassnahmen.',
          },
          {
            type: 'Bootssafari',
            title: 'Madu Fluss Safari',
            description:
              'Geniessen Sie eine malerische Bootssafari durch die Mangrovenwalder und kleinen Inseln des Madu Flusses. Entdecken Sie den lokalen Zimtanbau und die vielfaltige Feuchtgebietswelt.',
          },
          { type: 'Abreise', title: 'Abreisetransfer' },
        ],
      },
    ],
  },
  fr: {
    title: 'Circuit Prive de 8 Jours au Sri Lanka | Safari, Culture, Montagnes & Plage',
    description:
      'Un circuit prive inoubliable de 8 jours au Sri Lanka, avec le safari de Wilpattu, Anuradhapura, Sigiriya, Kandy, les aventures d’Ella et un sejour reposant sur la cote sud.',
    duration: '8 jours',
    persons: '1-20 personnes',
    tourType: 'Circuit',
    overview:
      'Decouvrez la faune, les royaumes antiques, les montagnes pittoresques et les plages dorees du Sri Lanka lors de ce circuit de 8 jours parfaitement equilibre. Ce voyage combine safari, sites classes UNESCO, paysages de montagne, plantations de the, cascades et detente cotiere, avec hebergement en demi pension et transport prive.',
    includes: PACKAGE_INCLUDES.fr,
    excludes: PACKAGE_EXCLUDES.fr,
    seoIntro:
      'Huit jours, c’est la duree ideale pour decouvrir des royaumes anciens, le spectaculaire pays des collines et une vraie conclusion en bord de mer, sans se presser. Ce circuit prive au Sri Lanka associe le coucher de soleil sur Pidurangala et le Rocher du Lion de Sigiriya aux temples grottes de Dambulla, aux rituels de la Relique de la Dent a Kandy et aux panoramas de la tour d’Ambuluwawa au dessus des plantations de the. Ella offre le pont Nine Arches, Little Adam’s Peak et les chutes de Ravana, avant un safari aux leopards a Yala et deux nuits sur la cote de Mirissa pour l’observation des baleines, la plongee avec les tortues et le kayak au coucher du soleil. Sundown Tours inclut sept nuits en demi pension dans des hotels 4 etoiles, les transferts aeroport et un chauffeur anglophone au kilometrage illimite dans votre vehicule prive. Les frais d’entree et les activites nautiques optionnelles restent a votre discretion, afin que vous puissiez privilegier la faune ou le temps de plage. Chaque jour associe patrimoine UNESCO et experiences immersives sorties en catamaran de village, marches d’epices et safaris en bateau a cannelle que les circuits en autocar omettent souvent.',
    highlights: [
      'Coucher de soleil a Pidurangala, Rocher du Lion de Sigiriya et temples grottes UNESCO de Dambulla',
      'Relique de la Dent Sacree a Kandy, spectacle de danse traditionnelle et points de vue de la tour d’Ambuluwawa',
      'Nine Arch Bridge a Ella, Little Adam’s Peak et safari en jeep dans le parc national de Yala',
      'Observation des baleines et dauphins a Mirissa, plongee avec les tortues et activites nautiques au coucher du soleil',
      'Sept nuits en demi pension dans des hotels 4 etoiles soigneusement selectionnes, avec chauffeur prive et transferts aeroport',
    ],
    whoIsFor:
      'Parfait pour les primo visiteurs, les jeunes maries et les familles actives qui souhaitent combiner culture, faune et journees a la plage dans un seul itineraire. L’observation des baleines necessite un depart matinal ; nous adaptons le rythme pour les voyageurs preferant plus de temps dans les temples que d’activites marines.',
    bestTimeNote:
      'Decembre avril est ideal pour la saison des baleines a Mirissa et un temps sec sur la cote sud. Le Triangle culturel et le pays des collines se visitent toute l’annee ; Yala peut fermer brievement autour de septembre nous ajustons le choix du parc en consequence.',
    faq: [
      {
        q: 'Combien de nuits d’hotel sont incluses dans le circuit de 8 jours ?',
        a: 'Le forfait couvre sept nuits en hotels 4 etoiles en demi pension le long du parcours, ainsi que la prise en charge et la depose a l’aeroport. Les dejeuners, les frais d’entree des parcs et les billets de bateau pour l’observation des baleines sont payes sur place.',
      },
      {
        q: 'L’observation des baleines a Mirissa est elle garantie ?',
        a: 'Les observations de baleines sont tres frequentes de novembre a avril, mais la nature reste imprevisible. Nous reservons des operateurs reputes pour le meilleur creneau matinal ; en cas de mer agitee, nous proposons plutot la plongee avec les tortues ou une matinee plage detendue.',
      },
      {
        q: 'Peut on remplacer Pidurangala par l’ascension complete du rocher de Sigiriya ?',
        a: 'Bien sur. Le jour 2 est consacre au Rocher du Lion de Sigiriya tandis que le jour 1 utilise Pidurangala pour le coucher de soleil. Indiquez nous votre niveau de forme physique et nous pouvons inverser ou supprimer une ascension pour preserver vos genoux.',
      },
    ],
    days: [
      {
        title: 'Arrivee & Rocher de Pidurangala',
        activities: [
          { type: 'Arrivee', title: 'Arrivee' },
          {
            type: 'Visite guidee',
            title: 'Rocher de Pidurangala',
            description:
              'Debutez votre aventure sri lankaise par une randonnee memorable jusqu’au rocher de Pidurangala, l’un des points de vue les plus spectaculaires du Triangle Culturel. Grimpez a travers d’anciens sites de temples et des formations rocheuses jusqu’au sommet, ou un coucher de soleil inoubliable devoile la forteresse de Sigiriya, les forets luxuriantes et les lacs paisibles.',
          },
          {
            type: 'Hebergement',
            title: 'Fresco Water Villa',
            description: 'Hebergement a l’hotel Fresco Water Villa (ou similaire), en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Salle de bain privee', 'Diner'],
          },
        ],
      },
      {
        title: 'Sigiriya & Dambulla',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Rocher du Lion de Sigiriya',
            description:
              'Explorez la legendaire forteresse du Rocher du Lion de Sigiriya, site classe UNESCO et l’un des monuments les plus emblematiques du Sri Lanka. Construite au Ve siecle par le roi Kashyapa, cette citadelle s’eleve a pres de 200 metres au dessus de la plaine et presente fresques, jardins, mur des miroirs et prouesses d’ingenierie remarquables.',
          },
          {
            type: 'Visite guidee',
            title: 'Village et lac de Hiriwadunna',
            description:
              'Vivez la vie rurale authentique du Sri Lanka lors d’une visite guidee du village traditionnel de Hiriwadunna. Traversez une campagne pittoresque, des lacs et des rizieres tout en decouvrant des traditions seculaires, avant une paisible balade en catamaran sur le lac du village.',
          },
          {
            type: 'Visite guidee',
            title: 'Temple des Grottes de Dambulla',
            description:
              'Visitez le magnifique Temple des Grottes de Dambulla, le plus grand et le mieux preserve complexe de grottes du Sri Lanka, classe UNESCO. Vieux de plus de 2 000 ans, ce lieu de pelerinage abrite cinq sanctuaires ornes de fresques bouddhistes et de statues remarquablement conservees.',
          },
          {
            type: 'Visite guidee',
            title: 'Marche economique de Dambulla',
            description:
              'Explorez le marche de gros de Dambulla, le plus grand marche de fruits et legumes du Sri Lanka. Decouvrez l’effervescence des commercants venus de toute l’ile et la variete coloree de fruits tropicaux, legumes et epices.',
          },
          {
            type: 'Hebergement',
            title: 'Fresco Water Villa',
            description: 'Nuit en demi pension.',
            extra: ['Petit dejeuner', 'Diner'],
          },
        ],
      },
      {
        title: 'Visite de la ville de Kandy',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Sri Dalada Maligawa',
            description:
              'Visitez le celebre Temple de la Dent Sacree (Sri Dalada Maligawa), l’un des sites de pelerinage bouddhistes les plus sacres au monde et un site classe UNESCO dans la ville historique de Kandy. Admirez son architecture kandyenne, ses sculptures raffinees et ses sanctuaires aux toits dores.',
          },
          {
            type: 'Visite guidee',
            title: 'Kandy Lake Club  Spectacle de danse culturelle',
            description:
              'Decouvrez les traditions vivantes du Sri Lanka lors du celebre spectacle de danse de Kandy, avec percussions traditionnelles, danses folkloriques energiques, costumes colores et numeros de marche sur le feu.',
          },
          {
            type: 'Visite guidee',
            title: 'Temple Sri Muthumariamman',
            description:
              'Explorez le magnifique temple Sri Muthumariamman, l’un des plus beaux temples hindous du Sri Lanka. Repute pour son architecture coloree de style dravidien et ses sculptures detaillees, il symbolise l’heritage multiculturel du pays.',
          },
          {
            type: 'Visite guidee',
            title: 'Nalanda Gedige',
            description:
              'Decouvrez le mysterieux Nalanda Gedige, pres de Matale, l’un des monuments historiques les plus singuliers du Sri Lanka. Cette structure en pierre vieille de plus de mille ans mele influences hindoues et bouddhistes dans un cadre paisible.',
          },
          {
            type: 'Hebergement',
            title: 'Hotel Topaz',
            description: 'Hebergement a l’Hotel Topaz (ou similaire), en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Salle de bain privee'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya via les chutes de Ramboda',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Jardins botaniques royaux',
            description:
              'Explorez les celebres jardins botaniques royaux de Peradeniya, l’un des plus grands et plus beaux jardins botaniques d’Asie. Sur plus de 147 hectares, decouvrez plus de 4 000 especes de plantes, dont des orchidees rares, une allee de palmiers et des plantes medicinales.',
          },
          {
            type: 'Visite guidee',
            title: 'Tour d’Ambuluwawa',
            description:
              'Visitez le complexe de biodiversite d’Ambuluwawa et grimpez a sa celebre tour, l’un des points de vue les plus originaux du Sri Lanka. Perchee au sommet d’une montagne, elle offre une vue panoramique a 360° sur les chaines montagneuses, forets, rivieres et plantations de the.',
          },
          {
            type: 'Visite guidee',
            title: 'Fabrique de the Bluefield',
            description:
              'Decouvrez l’heritage du the de Ceylan lors d’une visite guidee de la reputee usine Bluefield a Nuwara Eliya. Au coeur de plantations vallonnees et de collines embrumees, apprenez tout du processus de fabrication du the, de la cueillette a la tasse.',
          },
          {
            type: 'Visite guidee',
            title: 'Point de vue des chutes de Ramboda',
            description:
              'Admirez les spectaculaires chutes de Ramboda, parmi les plus hautes et les plus pittoresques du Sri Lanka. Nichee entre plantations de the et paysages montagneux embrumes, la cascade devale des falaises rocheuses pour un spectacle naturel impressionnant.',
          },
          {
            type: 'Hebergement',
            title: 'Ramboda Falls Hotel',
            description: 'Hebergement au Ramboda Falls Hotel (ou similaire), en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Salle de bain privee'],
          },
        ],
      },
      {
        title: 'Aventures a Ella',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Nine Arches Bridge',
            description:
              'Visitez l’emblematique Nine Arches Bridge, l’un des sites les plus photographies du Sri Lanka et un chef d’oeuvre de l’ingenierie ferroviaire coloniale. Ce pont de pierre, construit sans acier au coeur des plantations de the d’Ella, reste aujourd’hui un pont ferroviaire actif.',
          },
          {
            type: 'Visite guidee',
            title: 'Lake Gregory',
            description:
              'Profitez d’une visite reposante au pittoresque lac Gregory, l’une des attractions les plus populaires de Nuwara Eliya. Entoure de paysages montagneux et d’un climat frais, il invite a la balade, la photographie et les activites nautiques.',
          },
          {
            type: 'Visite guidee',
            title: 'Little Adam’s Peak',
            description:
              'Partez pour une randonnee pittoresque jusqu’au Little Adam’s Peak, l’un des points de vue les plus prises d’Ella. Cette ascension facile traverse plantations de the et collines verdoyantes jusqu’a un panorama a 360° sur l’Ella Gap et les vallees environnantes.',
          },
          {
            type: 'Hebergement',
            title: 'La Ella Breeze Hotel',
            description: 'Hebergement au La Ella Breeze Hotel (ou similaire), en demi pension.',
            extra: ['Hotel 4 etoiles (Premium)', 'Petit dejeuner', 'Salle de bain privee', 'Diner'],
          },
        ],
      },
      {
        title: 'Parc national de Yala & chutes de Ravana',
        activities: [
          {
            type: 'Visite guidee',
            title: 'Parc national de Yala',
            description:
              'Partez pour un safari inoubliable dans le parc national de Yala, le plus celebre du Sri Lanka et l’un des meilleurs endroits d’Asie pour observer les leopards sauvages. Le parc abrite elephants, ours lippus, crocodiles, cerfs tachetes, sangliers, buffles et plus de 215 especes d’oiseaux.',
          },
          {
            type: 'Visite guidee',
            title: 'Chutes de Ravana',
            description:
              'Visitez les magnifiques chutes de Ravana, parmi les plus belles et emblematiques cascades du Sri Lanka, au coeur des montagnes d’Ella. Selon la legende, le roi Ravana y aurait cache la princesse Sita dans des grottes voisines.',
          },
          {
            type: 'Hebergement',
            title: 'Mandara Resort Hotel',
            description: 'Nuit a Mirissa.',
            extra: ['Petit dejeuner & diner inclus', 'Hotel 4 etoiles'],
          },
        ],
      },
      {
        title: 'Mirissa  Observation des baleines & activites nautiques',
        activities: [
          {
            type: 'Observation des baleines',
            title: 'Observation des baleines et dauphins de Mirissa',
            description:
              'Partez pour une inoubliable sortie d’observation des baleines et dauphins a Mirissa, la destination phare du Sri Lanka pour la faune marine. Naviguez en haute mer a la recherche de baleines bleues, cachalots, baleines de Bryde et de bancs de dauphins joueurs.',
          },
          {
            type: 'Plongee avec tuba',
            title: 'Snorkeling sur les sites de baleines de Mirissa',
            description:
              'Decouvrez le monde sous marin colore de Mirissa lors d’une seance de snorkeling dans des eaux tropicales cristallines. Explorez formations coralliennes et poissons de recif le long de la cote sud du Sri Lanka.',
          },
          {
            type: 'Plongee avec tuba',
            title: 'Aventure snorkeling avec les tortues de Mirissa',
            description:
              'Nagez aupres de gracieuses tortues marines dans les eaux chaudes de Mirissa, l’une des activites marines les plus populaires du Sri Lanka. Observez tortues vertes et tortues imbriquees parmi poissons tropicaux et recifs coralliens.',
          },
          {
            type: 'Activite nautique',
            title: 'Sortie kayak au coucher du soleil a Mirissa',
            description:
              'Vivez la magie d’un coucher de soleil tropical lors d’une paisible sortie en kayak le long de la cote pittoresque de Mirissa, tandis que le ciel se pare de teintes orangees, roses et dorees.',
          },
          {
            type: 'Sortie en bateau',
            title: 'Balade en bateau au coucher du soleil a Mirissa',
            description:
              'Embarquez pour une croisiere reposante au coucher du soleil a Mirissa, avec vue panoramique sur la cote sud du Sri Lanka. Regardez le soleil disparaitre dans l’ocean Indien lors de cette experience romantique et familiale.',
          },
          {
            type: 'Hebergement',
            title: 'Mandara Resort Hotel',
            description:
              'Profitez d’une nuit confortable au Mandara Resort Hotel ou dans un etablissement balneaire similaire a Mirissa. Le forfait comprend la demi pension avec petit dejeuner et diner pour un sejour agreable sur la magnifique cote sud du Sri Lanka.',
            extra: ['Hotel 4 etoiles (Premium)', 'Petit dejeuner inclus', 'Salle de bain privee', 'Diner inclus'],
          },
        ],
      },
      {
        title: 'Mirissa & depart',
        activities: [
          {
            type: 'Experience nature & culture',
            title: 'Coconut Tree Hill Mirissa',
            description:
              'Visitez l’emblematique Coconut Tree Hill a Mirissa, l’un des points de vue cotiers les plus photographies du Sri Lanka. Perche sur une falaise dominant les eaux turquoise de l’ocean Indien, ce site borde de cocotiers offre un cadre tropical de carte postale.',
          },
          {
            type: 'Conservation',
            title: 'Projet de conservation des tortues marines',
            description:
              'Visitez un centre de conservation des tortues marines sur la cote sud et decouvrez les efforts de protection de la faune marine, les programmes d’ecloserie et de rehabilitation.',
          },
          {
            type: 'Safari en bateau',
            title: 'Safari sur la riviere Madu',
            description:
              'Profitez d’un safari en bateau pittoresque a travers les mangroves et petites iles de la riviere Madu. Decouvrez la culture locale de la cannelle et une faune de zones humides variee.',
          },
          { type: 'Depart', title: 'Transfert de depart' },
        ],
      },
    ],
  },
  it: {
    title: 'Tour Privato di 8 Giorni in Sri Lanka | Safari, Cultura, Montagne & Mare',
    description:
      'Un indimenticabile tour privato di 8 giorni in Sri Lanka con il safari a Wilpattu, Anuradhapura, Sigiriya, Kandy, le avventure di Ella e un relax finale sulla costa meridionale.',
    duration: '8 giorni',
    persons: '1-20 persone',
    tourType: 'Tour completo',
    overview:
      'Scopri la fauna selvatica, gli antichi regni, le montagne panoramiche e le spiagge dorate dello Sri Lanka in questo tour di 8 giorni perfettamente equilibrato. Il viaggio unisce safari, siti UNESCO, paesaggi di montagna, piantagioni di te, cascate ed esperienze costiere rilassanti, con pernottamento in mezza pensione e trasporto privato.',
    includes: PACKAGE_INCLUDES.it,
    excludes: PACKAGE_EXCLUDES.it,
    seoIntro:
      'Otto giorni sono la durata ideale per antichi regni, il fascino drammatico delle colline e un vero finale in spiaggia, senza fretta. Questo tour privato in Sri Lanka abbina il tramonto a Pidurangala e il Lion Rock di Sigiriya ai templi rupestri di Dambulla, ai rituali della Reliquia del Dente a Kandy e ai panorami della Torre di Ambuluwawa sopra le piantagioni di te. Ella offre il ponte Nine Arches, Little Adam’s Peak e le cascate di Ravana, prima di un safari ai leopardi a Yala e due notti sulla costa di Mirissa per l’osservazione delle balene, lo snorkeling con le tartarughe e il kayak al tramonto. Sundown Tours include sette notti in mezza pensione in hotel 4 stelle, i transfer aeroportuali e un autista di lingua inglese con chilometraggio illimitato nel vostro veicolo privato. I biglietti d’ingresso e le attivita marine opzionali restano a vostra discrezione, cosi potete concentrarvi maggiormente sulla fauna selvatica o sul tempo in spiaggia. Ogni giorno unisce patrimonio UNESCO ed esperienze pratiche gite in catamarano nei villaggi, mercati delle spezie e safari in barca tra le piantagioni di cannella che i tour in autobus spesso saltano.',
    highlights: [
      'Tramonto a Pidurangala, Lion Rock di Sigiriya e templi rupestri UNESCO di Dambulla',
      'Sacra Reliquia del Dente a Kandy, spettacolo di danza tradizionale e panorami dalla Torre di Ambuluwawa',
      'Nine Arch Bridge a Ella, Little Adam’s Peak e safari in jeep nel Parco Nazionale di Yala',
      'Osservazione di balene e delfini a Mirissa, snorkeling con le tartarughe e attivita acquatiche al tramonto',
      'Sette notti in mezza pensione in hotel da 4 stelle attentamente selezionati, con autista privato e transfer aeroportuali',
    ],
    whoIsFor:
      'Perfetto per chi visita lo Sri Lanka per la prima volta, le coppie in luna di miele e le famiglie attive che desiderano unire cultura, fauna selvatica e giornate in spiaggia in un unico itinerario. L’osservazione delle balene richiede una partenza anticipata; per chi preferisce piu tempo nei templi rispetto alle attivita marine adattiamo il ritmo.',
    bestTimeNote:
      'Dicembre aprile e il periodo migliore per la stagione delle balene a Mirissa e per il clima secco sulla costa meridionale. Il Triangolo Culturale e le colline si visitano tutto l’anno; Yala puo chiudere brevemente intorno a settembre adattiamo di conseguenza la scelta del parco.',
    faq: [
      {
        q: 'Quante notti in hotel sono incluse nel tour di 8 giorni?',
        a: 'Il pacchetto comprende sette notti in hotel 4 stelle in mezza pensione lungo il percorso, oltre al prelievo e riaccompagnamento in aeroporto. Pranzi, biglietti d’ingresso ai parchi e biglietti per l’osservazione delle balene si pagano in loco.',
      },
      {
        q: 'L’osservazione delle balene a Mirissa e garantita?',
        a: 'Gli avvistamenti di balene sono molto frequenti da novembre ad aprile, ma la natura resta imprevedibile. Prenotiamo operatori affidabili per la fascia orario migliore del mattino; in caso di mare agitato proponiamo lo snorkeling con le tartarughe o una tranquilla mattinata in spiaggia.',
      },
      {
        q: 'Possiamo sostituire Pidurangala con la scalata completa alla Rocca di Sigiriya?',
        a: 'Certamente. Il giorno 2 e dedicato al Lion Rock di Sigiriya, mentre il giorno 1 utilizza Pidurangala per il tramonto. Comunicateci il vostro livello di forma fisica e potremo invertire o eliminare una delle due scalate per proteggere le vostre ginocchia.',
      },
    ],
    days: [
      {
        title: 'Arrivo & Roccia di Pidurangala',
        activities: [
          { type: 'Arrivo', title: 'Arrivo' },
          {
            type: 'Tour guidato',
            title: 'Roccia di Pidurangala',
            description:
              'Inizia la tua avventura sri lankese con un’escursione memorabile alla Roccia di Pidurangala, uno dei punti panoramici piu spettacolari del Triangolo Culturale. Attraverso antichi templi e formazioni rocciose raggiungerai la cima, dove un tramonto indimenticabile svela la Rocca di Sigiriya, foreste lussureggianti e laghi tranquilli.',
          },
          {
            type: 'Sistemazione',
            title: 'Fresco Water Villa',
            description: 'Pernottamento presso l’Hotel Fresco Water Villa (o simile), in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Bagno privato', 'Cena'],
          },
        ],
      },
      {
        title: 'Sigiriya & Dambulla',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Roccia del Leone di Sigiriya',
            description:
              'Esplora la leggendaria Fortezza della Roccia del Leone di Sigiriya, sito UNESCO e uno dei simboli piu iconici dello Sri Lanka. Costruita nel V secolo dal re Kashyapa, questa cittadella rocciosa si innalza per quasi 200 metri e custodisce affreschi, giardini, il Muro degli Specchi e straordinarie opere di ingegneria.',
          },
          {
            type: 'Tour guidato',
            title: 'Villaggio e lago di Hiriwadunna',
            description:
              'Vivi l’autentica vita rurale dello Sri Lanka con una visita guidata al villaggio tradizionale di Hiriwadunna. Attraversa campagne pittoresche, laghi e risaie scoprendo tradizioni secolari, con una tranquilla gita in catamarano sul lago del villaggio.',
          },
          {
            type: 'Tour guidato',
            title: 'Tempio delle Grotte di Dambulla',
            description:
              'Visita il magnifico Tempio delle Grotte di Dambulla, il complesso rupestre piu grande e meglio conservato dello Sri Lanka e sito UNESCO. Con oltre 2.000 anni di storia, questo luogo di pellegrinaggio custodisce cinque santuari con affreschi buddisti e statue ben conservate.',
          },
          {
            type: 'Tour guidato',
            title: 'Mercato economico di Dambulla',
            description:
              'Scopri il vivace mercato all’ingrosso di Dambulla, il piu grande mercato di frutta e verdura dello Sri Lanka. Osserva il fermento di commercianti provenienti da tutta l’isola e la varieta colorata di frutti tropicali, verdure e spezie.',
          },
          {
            type: 'Sistemazione',
            title: 'Fresco Water Villa',
            description: 'Pernottamento in mezza pensione.',
            extra: ['Colazione', 'Cena'],
          },
        ],
      },
      {
        title: 'Tour della citta di Kandy',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Sri Dalada Maligawa',
            description:
              'Visita il celebre Tempio del Sacro Dente (Sri Dalada Maligawa), uno dei luoghi di pellegrinaggio buddisti piu sacri al mondo e sito UNESCO nella storica citta di Kandy. Ammira l’architettura kandyana, gli intagli e i santuari dai tetti dorati.',
          },
          {
            type: 'Tour guidato',
            title: 'Kandy Lake Club  Spettacolo di danza tradizionale',
            description:
              'Scopri le vivaci tradizioni dello Sri Lanka con il famoso spettacolo di danza di Kandy: percussioni tradizionali, danze folkloristiche energiche, costumi colorati ed esibizioni di fuoco.',
          },
          {
            type: 'Tour guidato',
            title: 'Tempio Sri Muthumariamman',
            description:
              'Esplora il magnifico Tempio Sri Muthumariamman, uno dei templi induisti piu belli dello Sri Lanka. Noto per l’architettura colorata in stile dravidico e le sculture dettagliate, simboleggia il patrimonio multiculturale del paese.',
          },
          {
            type: 'Tour guidato',
            title: 'Nalanda Gedige',
            description:
              'Scopri il misterioso Nalanda Gedige, vicino a Matale, uno dei monumenti storici piu singolari dello Sri Lanka. Questa struttura in pietra millenaria unisce influenze induiste e buddiste in un paesaggio pacifico.',
          },
          {
            type: 'Sistemazione',
            title: 'Hotel Topaz',
            description: 'Pernottamento all’Hotel Topaz (o simile), in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Bagno privato'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya attraverso le cascate di Ramboda',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Giardini botanici reali',
            description:
              'Esplora i celebri Giardini Botanici Reali di Peradeniya, uno dei piu grandi e belli dell’Asia. Su oltre 147 acri troverai piu di 4.000 specie vegetali, tra cui orchidee rare, viali di palme e piante medicinali.',
          },
          {
            type: 'Tour guidato',
            title: 'Torre di Ambuluwawa',
            description:
              'Visita il complesso di biodiversita di Ambuluwawa e sali sulla sua famosa torre, uno dei punti panoramici piu singolari dello Sri Lanka. In cima a un monte, offre una vista a 360° su catene montuose, foreste, fiumi e piantagioni di te.',
          },
          {
            type: 'Tour guidato',
            title: 'Fabbrica di te Bluefield',
            description:
              'Scopri l’eredita del te di Ceylon con una visita guidata alla rinomata fabbrica Bluefield a Nuwara Eliya. Tra piantagioni ondulate e colline nebbiose, conoscerai il processo di produzione del te dalla raccolta alla tazza.',
          },
          {
            type: 'Tour guidato',
            title: 'Punto panoramico delle cascate di Ramboda',
            description:
              'Ammira le spettacolari Cascate di Ramboda, tra le piu alte e pittoresche dello Sri Lanka. Circondate da piantagioni di te e paesaggi montani nebbiosi, precipitano su scogliere rocciose in uno spettacolo naturale straordinario.',
          },
          {
            type: 'Sistemazione',
            title: 'Ramboda Falls Hotel',
            description: 'Pernottamento al Ramboda Falls Hotel (o simile), in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Bagno privato'],
          },
        ],
      },
      {
        title: 'Avventure a Ella',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Nine Arches Bridge',
            description:
              'Visita l’iconico Nine Arches Bridge, uno dei luoghi piu fotografati dello Sri Lanka e un capolavoro dell’ingegneria ferroviaria coloniale. Costruito in pietra senza acciaio tra le piantagioni di te di Ella, e ancora oggi un ponte ferroviario attivo.',
          },
          {
            type: 'Tour guidato',
            title: 'Lake Gregory',
            description:
              'Concediti una visita rilassante al pittoresco Lake Gregory, una delle attrazioni piu amate di Nuwara Eliya. Circondato da paesaggi montani e clima fresco, invita a passeggiate, fotografia e gite in barca.',
          },
          {
            type: 'Tour guidato',
            title: 'Little Adam’s Peak',
            description:
              'Percorri un sentiero panoramico fino al Little Adam’s Peak, uno dei punti panoramici piu amati di Ella. La facile salita attraversa piantagioni di te e colline verdi fino a una vista a 360° sull’Ella Gap e le valli circostanti.',
          },
          {
            type: 'Sistemazione',
            title: 'La Ella Breeze Hotel',
            description: 'Pernottamento al La Ella Breeze Hotel (o simile), in mezza pensione.',
            extra: ['Hotel 4 stelle (Premium)', 'Colazione', 'Bagno privato', 'Cena'],
          },
        ],
      },
      {
        title: 'Parco Nazionale di Yala & Cascate di Ravana',
        activities: [
          {
            type: 'Tour guidato',
            title: 'Parco Nazionale di Yala',
            description:
              'Vivi un safari indimenticabile nel Parco Nazionale di Yala, il piu famoso dello Sri Lanka e uno dei migliori luoghi in Asia per osservare i leopardi selvatici. Il parco ospita elefanti, orsi labiati, coccodrilli, cervi pomellati, cinghiali, bufali e oltre 215 specie di uccelli.',
          },
          {
            type: 'Tour guidato',
            title: 'Cascate di Ravana',
            description:
              'Visita le splendide Cascate di Ravana, tra le piu belle e iconiche dello Sri Lanka, tra le montagne di Ella. Secondo la leggenda, il re Ravana vi avrebbe nascosto la principessa Sita in grotte vicine.',
          },
          {
            type: 'Sistemazione',
            title: 'Mandara Resort Hotel',
            description: 'Pernottamento a Mirissa.',
            extra: ['Colazione e cena incluse', 'Hotel 4 stelle'],
          },
        ],
      },
      {
        title: 'Mirissa  Whale watching & attivita acquatiche',
        activities: [
          {
            type: 'Whale watching',
            title: 'Whale e dolphin watching a Mirissa',
            description:
              'Vivi un’indimenticabile avventura di whale watching a Mirissa, la principale destinazione dello Sri Lanka per la fauna marina. Naviga al largo alla ricerca di balenottere azzurre, capodogli, balenottere di Bryde e allegri branchi di delfini.',
          },
          {
            type: 'Snorkeling',
            title: 'Snorkeling sui siti delle balene di Mirissa',
            description:
              'Scopri il vivace mondo sottomarino di Mirissa con un’emozionante esperienza di snorkeling in acque tropicali cristalline, tra formazioni coralline e pesci di barriera lungo la costa meridionale.',
          },
          {
            type: 'Snorkeling',
            title: 'Avventura di snorkeling con le tartarughe a Mirissa',
            description:
              'Nuota accanto a graziose tartarughe marine nelle acque calde di Mirissa, una delle attivita marine piu amate dello Sri Lanka. Osserva tartarughe verdi ed embricate tra pesci tropicali e barriere coralline.',
          },
          {
            type: 'Attivita acquatica',
            title: 'Gita in kayak al tramonto a Mirissa',
            description:
              'Vivi la magia di un tramonto tropicale con una tranquilla escursione in kayak lungo la pittoresca costa di Mirissa, mentre il cielo si tinge di arancione, rosa e oro.',
          },
          {
            type: 'Gita in barca',
            title: 'Gita in barca al tramonto a Mirissa',
            description:
              'Salpa per una rilassante crociera al tramonto a Mirissa con vista panoramica sulla costa meridionale dello Sri Lanka, osservando il sole scomparire nell’Oceano Indiano.',
          },
          {
            type: 'Sistemazione',
            title: 'Mandara Resort Hotel',
            description:
              'Goditi un comodo pernottamento al Mandara Resort Hotel o in una struttura balneare simile a Mirissa. Il pacchetto include la mezza pensione con colazione e cena per un soggiorno piacevole sulla splendida costa meridionale.',
            extra: ['Hotel 4 stelle (Premium)', 'Colazione inclusa', 'Bagno privato', 'Cena inclusa'],
          },
        ],
      },
      {
        title: 'Mirissa & partenza',
        activities: [
          {
            type: 'Esperienza natura & cultura',
            title: 'Coconut Tree Hill Mirissa',
            description:
              'Visita l’iconica Coconut Tree Hill a Mirissa, uno dei punti panoramici costieri piu fotografati dello Sri Lanka. Su una scogliera che domina le acque turchesi dell’Oceano Indiano, questo luogo bordato di palme da cocco offre un paesaggio tropicale da cartolina.',
          },
          {
            type: 'Conservazione',
            title: 'Progetto di conservazione delle tartarughe marine',
            description:
              'Visita un centro di conservazione delle tartarughe marine sulla costa meridionale e scopri gli sforzi di protezione della fauna marina, i programmi di incubazione e riabilitazione.',
          },
          {
            type: 'Safari in barca',
            title: 'Safari sul fiume Madu',
            description:
              'Goditi un pittoresco safari in barca tra le foreste di mangrovie e le piccole isole del fiume Madu, scoprendo la coltivazione locale della cannella e la ricca fauna delle zone umide.',
          },
          { type: 'Partenza', title: 'Trasferimento di partenza' },
        ],
      },
    ],
  },
  es: {
    title: 'Tour Privado de 8 Dias por Sri Lanka | Safari, Cultura, Montanas & Playa',
    description:
      'Un inolvidable tour privado de 8 dias por Sri Lanka que incluye el safari de Wilpattu, Anuradhapura, Sigiriya, Kandy, aventuras en Ella y una relajante estancia en la costa sur.',
    duration: '8 dias',
    persons: '1-20 personas',
    tourType: 'Circuito',
    overview:
      'Descubre la fauna, los antiguos reinos, las montanas escenicas y las playas doradas de Sri Lanka en este circuito de 8 dias perfectamente equilibrado. El viaje combina safari, sitios declarados Patrimonio de la Humanidad, paisajes de montana, plantaciones de te, cascadas y experiencias costeras relajantes, con alojamiento en media pension y transporte privado.',
    includes: PACKAGE_INCLUDES.es,
    excludes: PACKAGE_EXCLUDES.es,
    seoIntro:
      'Ocho dias son la duracion perfecta para reinos antiguos, el espectacular paisaje de las colinas y un autentico final de playa, sin prisas. Este circuito privado por Sri Lanka combina el atardecer en Pidurangala y el Lion Rock de Sigiriya con los templos rupestres de Dambulla, los rituales de la Reliquia del Diente en Kandy y las vistas panoramicas de la Torre de Ambuluwawa sobre las plantaciones de te. Ella ofrece el puente Nine Arches, Little Adam’s Peak y las cataratas de Ravana, antes de un safari de leopardos en Yala y dos noches en la costa de Mirissa para el avistamiento de ballenas, el esnorquel con tortugas y el kayak al atardecer. Sundown Tours incluye siete noches en media pension en hoteles de 4 estrellas, traslados al aeropuerto y un chofer de habla inglesa con kilometraje ilimitado en su vehiculo privado. Las entradas y las actividades marinas opcionales quedan a su discrecion, para que pueda centrarse mas en la fauna o en el tiempo de playa. Cada dia combina patrimonio UNESCO con experiencias practicas: paseos en catamaran por pueblos, mercados de especias y safaris en barco entre plantaciones de canela, que los tours en autobus suelen omitir.',
    highlights: [
      'Atardecer en Pidurangala, Lion Rock de Sigiriya y templos rupestres UNESCO de Dambulla',
      'Reliquia del Diente Sagrado en Kandy, espectaculo de danza tradicional y vistas desde la Torre de Ambuluwawa',
      'Nine Arch Bridge en Ella, Little Adam’s Peak y safari en jeep por el Parque Nacional de Yala',
      'Avistamiento de ballenas y delfines en Mirissa, esnorquel con tortugas y actividades acuaticas al atardecer',
      'Siete noches en media pension en hoteles de 4 estrellas cuidadosamente seleccionados, con chofer privado y traslados al aeropuerto',
    ],
    whoIsFor:
      'Perfecto para quienes visitan Sri Lanka por primera vez, parejas en luna de miel y familias activas que desean combinar cultura, fauna y dias de playa en un solo itinerario. El avistamiento de ballenas requiere salir temprano; para quienes prefieren mas tiempo en templos que en actividades marinas, adaptamos el ritmo.',
    bestTimeNote:
      'Diciembre abril es la mejor epoca para la temporada de ballenas en Mirissa y el clima seco en la costa sur. El Triangulo Cultural y las tierras altas se visitan todo el ano; Yala puede cerrar brevemente alrededor de septiembre, por lo que ajustamos la eleccion del parque en consecuencia.',
    faq: [
      {
        q: 'Cuantas noches de hotel estan incluidas en el circuito de 8 dias?',
        a: 'El paquete incluye siete noches en hoteles de 4 estrellas en media pension a lo largo de la ruta, ademas de la recogida y el traslado al aeropuerto. El almuerzo, las entradas a los parques y los tickets del barco para el avistamiento de ballenas se pagan in situ.',
      },
      {
        q: 'Esta garantizado el avistamiento de ballenas en Mirissa?',
        a: 'Los avistamientos de ballenas son muy frecuentes de noviembre a abril, pero la naturaleza es impredecible. Reservamos operadores de confianza en el mejor horario matutino; si el mar esta agitado, proponemos como alternativa el esnorquel con tortugas o una manana tranquila de playa.',
      },
      {
        q: 'Podemos cambiar Pidurangala por la subida completa a la roca de Sigiriya?',
        a: 'Por supuesto. El dia 2 se centra en el Lion Rock de Sigiriya, mientras que el dia 1 utiliza Pidurangala para el atardecer. Indiquenos su nivel de forma fisica y podremos invertir o eliminar una de las subidas para proteger sus rodillas.',
      },
    ],
    days: [
      {
        title: 'Llegada y Roca de Pidurangala',
        activities: [
          { type: 'Llegada', title: 'Llegada' },
          {
            type: 'Visita guiada',
            title: 'Roca de Pidurangala',
            description:
              'Comienza tu aventura en Sri Lanka con una memorable caminata a la Roca de Pidurangala, uno de los miradores mas espectaculares del Triangulo Cultural. A traves de antiguos templos y formaciones rocosas llegaras a la cima, donde un inolvidable atardecer revela la Roca Fortaleza de Sigiriya, bosques exuberantes y lagos tranquilos.',
          },
          {
            type: 'Alojamiento',
            title: 'Fresco Water Villa',
            description: 'Alojamiento en el Hotel Fresco Water Villa (o similar), en media pension.',
            extra: ['Hotel 4 estrellas (Premium)', 'Bano privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Sigiriya y Dambulla',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Roca Fortaleza del Leon de Sigiriya',
            description:
              'Explora la legendaria Roca Fortaleza del Leon de Sigiriya, sitio Patrimonio de la Humanidad y uno de los simbolos mas iconicos de Sri Lanka. Construida en el siglo V por el rey Kashyapa, esta ciudadela se eleva casi 200 metros sobre la llanura y alberga frescos, jardines, el Muro de los Espejos y notables logros de ingenieria.',
          },
          {
            type: 'Visita guiada',
            title: 'Aldea y lago de Hiriwadunna',
            description:
              'Vive la autentica vida rural de Sri Lanka con una visita guiada al pueblo tradicional de Hiriwadunna. Recorre campos pintorescos, lagos y arrozales mientras descubres tradiciones centenarias, con un tranquilo paseo en catamaran por el lago del pueblo.',
          },
          {
            type: 'Visita guiada',
            title: 'Templo de las Cuevas de Dambulla',
            description:
              'Visita el magnifico Templo de las Cuevas de Dambulla, el complejo rupestre mas grande y mejor conservado de Sri Lanka, declarado Patrimonio de la Humanidad. Con mas de 2.000 anos de historia, este lugar de peregrinacion alberga cinco santuarios con murales budistas y estatuas bien conservadas.',
          },
          {
            type: 'Visita guiada',
            title: 'Mercado economico de Dambulla',
            description:
              'Descubre el animado mercado mayorista de Dambulla, el mayor mercado de frutas y verduras de Sri Lanka. Observa el bullicio de comerciantes de toda la isla y la colorida variedad de frutas tropicales, verduras y especias.',
          },
          {
            type: 'Alojamiento',
            title: 'Fresco Water Villa',
            description: 'Noche en media pension.',
            extra: ['Desayuno', 'Cena'],
          },
        ],
      },
      {
        title: 'Recorrido por la ciudad de Kandy',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Sri Dalada Maligawa',
            description:
              'Visita el celebre Templo del Diente Sagrado (Sri Dalada Maligawa), uno de los lugares de peregrinacion budista mas sagrados del mundo y sitio Patrimonio de la Humanidad en la historica ciudad de Kandy. Admira su arquitectura candiana, sus tallados y sus santuarios de techos dorados.',
          },
          {
            type: 'Visita guiada',
            title: 'Kandy Lake Club  Espectaculo de danza cultural',
            description:
              'Descubre las vibrantes tradiciones de Sri Lanka en el famoso espectaculo de danza de Kandy, con tambores tradicionales, energeticas danzas folcloricas, coloridos trajes y actuaciones de fuego.',
          },
          {
            type: 'Visita guiada',
            title: 'Templo Sri Muthumariamman',
            description:
              'Explora el magnifico Templo Sri Muthumariamman, uno de los templos hindues mas bellos de Sri Lanka. Conocido por su arquitectura colorida de estilo dravidico y sus detalladas esculturas, simboliza el patrimonio multicultural del pais.',
          },
          {
            type: 'Visita guiada',
            title: 'Nalanda Gedige',
            description:
              'Descubre el misterioso Nalanda Gedige, cerca de Matale, uno de los monumentos historicos mas singulares de Sri Lanka. Esta estructura de piedra milenaria combina influencias hindues y budistas en un paisaje sereno.',
          },
          {
            type: 'Alojamiento',
            title: 'Hotel Topaz',
            description: 'Alojamiento en el Hotel Topaz (o similar), en media pension.',
            extra: ['Hotel 4 estrellas (Premium)', 'Bano privado'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya via las cascadas de Ramboda',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Jardines Botanicos Reales',
            description:
              'Explora los celebres Jardines Botanicos Reales de Peradeniya, uno de los mas grandes y hermosos de Asia. En mas de 147 hectareas encontraras mas de 4.000 especies de plantas, incluidas orquideas raras, una avenida de palmeras y plantas medicinales.',
          },
          {
            type: 'Visita guiada',
            title: 'Torre de Ambuluwawa',
            description:
              'Visita el complejo de biodiversidad de Ambuluwawa y sube a su famosa torre, uno de los miradores mas singulares de Sri Lanka. Situada en la cima de una montana, ofrece vistas panoramicas de 360° sobre cadenas montanosas, bosques, rios y plantaciones de te.',
          },
          {
            type: 'Visita guiada',
            title: 'Fabrica de te Bluefield',
            description:
              'Descubre la herencia del te de Ceilan con una visita guiada a la reconocida fabrica Bluefield en Nuwara Eliya. Entre ondulantes plantaciones y colinas cubiertas de niebla, conoceras el proceso tradicional de elaboracion del te.',
          },
          {
            type: 'Visita guiada',
            title: 'Mirador de las Cascadas de Ramboda',
            description:
              'Disfruta de vistas espectaculares de las Cascadas de Ramboda, una de las mas altas y pintorescas de Sri Lanka. Rodeada de plantaciones de te y paisajes montanosos brumosos, la cascada cae sobre acantilados rocosos en un impresionante espectaculo natural.',
          },
          {
            type: 'Alojamiento',
            title: 'Ramboda Falls Hotel',
            description: 'Alojamiento en el Ramboda Falls Hotel (o similar), en media pension.',
            extra: ['Hotel 4 estrellas (Premium)', 'Bano privado'],
          },
        ],
      },
      {
        title: 'Aventuras en Ella',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Nine Arches Bridge',
            description:
              'Visita el iconico Nine Arches Bridge, uno de los lugares mas fotografiados de Sri Lanka y una obra maestra de la ingenieria ferroviaria colonial. Construido en piedra sin usar acero entre las plantaciones de te de Ella, sigue siendo un puente ferroviario activo.',
          },
          {
            type: 'Visita guiada',
            title: 'Lake Gregory',
            description:
              'Disfruta de una visita relajante al pintoresco Lake Gregory, una de las atracciones mas populares de Nuwara Eliya. Rodeado de paisajes montanosos y clima fresco, invita a paseos, fotografia y paseos en bote.',
          },
          {
            type: 'Visita guiada',
            title: 'Little Adam’s Peak',
            description:
              'Emprende una caminata escenica hasta el Little Adam’s Peak, uno de los miradores mas populares de Ella. La sencilla y gratificante subida atraviesa plantaciones de te y colinas verdes hasta una vista de 360° sobre el Ella Gap y los valles circundantes.',
          },
          {
            type: 'Alojamiento',
            title: 'La Ella Breeze Hotel',
            description: 'Alojamiento en el La Ella Breeze Hotel (o similar), en media pension.',
            extra: ['Hotel 4 estrellas (Premium)', 'Desayuno', 'Bano privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Parque Nacional de Yala y Cascadas de Ravana',
        activities: [
          {
            type: 'Visita guiada',
            title: 'Parque Nacional de Yala',
            description:
              'Vive un safari inolvidable en el Parque Nacional de Yala, el mas famoso de Sri Lanka y uno de los mejores lugares de Asia para avistar leopardos salvajes. El parque alberga elefantes, osos perezosos, cocodrilos, ciervos moteados, jabalies, bufalos y mas de 215 especies de aves.',
          },
          {
            type: 'Visita guiada',
            title: 'Cascadas de Ravana',
            description:
              'Visita las impresionantes Cascadas de Ravana, entre las mas bellas e iconicas de Sri Lanka, en las montanas de Ella. Segun la leyenda, el rey Ravana escondio alli a la princesa Sita en cuevas cercanas.',
          },
          {
            type: 'Alojamiento',
            title: 'Mandara Resort Hotel',
            description: 'Noche en Mirissa.',
            extra: ['Desayuno y cena incluidos', 'Hotel 4 estrellas'],
          },
        ],
      },
      {
        title: 'Mirissa  Avistamiento de ballenas y actividades acuaticas',
        activities: [
          {
            type: 'Avistamiento de ballenas',
            title: 'Avistamiento de ballenas y delfines en Mirissa',
            description:
              'Vive una inolvidable aventura de avistamiento de ballenas y delfines en Mirissa, el principal destino de Sri Lanka para la fauna marina. Navega mar adentro en busca de ballenas azules, cachalotes, ballenas de Bryde y juguetones grupos de delfines.',
          },
          {
            type: 'Buceo con tubo',
            title: 'Esnorquel en los puntos de avistamiento de ballenas de Mirissa',
            description:
              'Descubre el vibrante mundo submarino de Mirissa con una emocionante experiencia de esnorquel en aguas tropicales cristalinas, entre formaciones de coral y peces de arrecife en la costa sur.',
          },
          {
            type: 'Buceo con tubo',
            title: 'Aventura de esnorquel con tortugas en Mirissa',
            description:
              'Nada junto a elegantes tortugas marinas en las calidas aguas de Mirissa, una de las actividades marinas mas populares de Sri Lanka. Observa tortugas verdes y carey entre peces tropicales y arrecifes de coral.',
          },
          {
            type: 'Actividad acuatica',
            title: 'Paseo en kayak al atardecer en Mirissa',
            description:
              'Vive la magia de un atardecer tropical con un tranquilo paseo en kayak por la pintoresca costa de Mirissa, mientras el cielo se tine de tonos naranjas, rosados y dorados.',
          },
          {
            type: 'Paseo en barco',
            title: 'Paseo en barco al atardecer en Mirissa',
            description:
              'Embarcate en un relajante paseo en barco al atardecer en Mirissa con vistas panoramicas de la costa sur de Sri Lanka, viendo como el sol se pone sobre el Oceano Indico.',
          },
          {
            type: 'Alojamiento',
            title: 'Mandara Resort Hotel',
            description:
              'Disfruta de una comoda noche en el Mandara Resort Hotel o en un establecimiento frente a la playa similar en Mirissa. El paquete incluye media pension con desayuno y cena para una estancia agradable en la hermosa costa sur de Sri Lanka.',
            extra: ['Hotel 4 estrellas (Premium)', 'Desayuno incluido', 'Bano privado', 'Cena incluida'],
          },
        ],
      },
      {
        title: 'Mirissa y salida',
        activities: [
          {
            type: 'Experiencia natural y cultural',
            title: 'Coconut Tree Hill Mirissa',
            description:
              'Visita el iconico Coconut Tree Hill en Mirissa, uno de los miradores costeros mas fotografiados de Sri Lanka. Sobre un acantilado con vistas a las aguas turquesas del Oceano Indico, este lugar bordeado de cocoteros ofrece un paisaje tropical de postal.',
          },
          {
            type: 'Conservacion',
            title: 'Proyecto de conservacion de tortugas marinas',
            description:
              'Visita un centro de conservacion de tortugas marinas en la costa sur y descubre los esfuerzos de proteccion de la fauna marina, los programas de incubacion y rehabilitacion.',
          },
          {
            type: 'Safari en barco',
            title: 'Safari por el rio Madu',
            description:
              'Disfruta de un pintoresco safari en barco por los manglares y pequenas islas del rio Madu, descubriendo el cultivo local de canela y una diversa fauna de humedales.',
          },
          { type: 'Salida', title: 'Traslado de salida' },
        ],
      },
    ],
  },
  pl: {
    title: '8 dniowa Prywatna Wycieczka po Sri Lance | Safari, Kultura, Wyzyny i Plaza',
    description:
      'Niezapomniana 8 dniowa prywatna wycieczka po Sri Lance obejmujaca safari w Wilpattu, Anuradhapure, Sigiriya, Kandy, przygody w Elli oraz relaksujacy pobyt na poludniowym wybrzezu.',
    duration: '8 dni',
    persons: '1-20 osob',
    tourType: 'Wycieczka objazdowa',
    overview:
      'Odkryj dzika przyrode, starozytne krolestwa, malownicze gory i zlote plaze Sri Lanki podczas tej doskonale zbalansowanej 8 dniowej podrozy. Wycieczka laczy przygode safari, obiekty UNESCO, krajobrazy wyzynne, plantacje herbaty, wodospady i relaksujace doswiadczenia nadmorskie, z zakwaterowaniem w opcji HB i prywatnym transportem.',
    includes: PACKAGE_INCLUDES.pl,
    excludes: PACKAGE_EXCLUDES.pl,
    seoIntro:
      'Osiem dni to idealny czas na starozytne krolestwa, dramatyczne krajobrazy gorskie i prawdziwy final na plazy, bez pospiechu. Ta prywatna wycieczka po Sri Lance laczy zachod slonca na Pidurangali i Lion Rock w Sigiriya z jaskiniowymi swiatyniami Dambulli, rytualami Relikwii Zeba w Kandy oraz panoramami z wiezy Ambuluwawa nad plantacjami herbaty. Ella oferuje most Nine Arches, Little Adam’s Peak i wodospady Ravana, a potem safari z lampartami w Yali oraz dwie noce na wybrzezu Mirissy z obserwacja wielorybow, snorkelingiem z zolwiami i kajakami o zachodzie slonca. Sundown Tours obejmuje siedem nocy w formule half  board w hotelach 4 gwiazdkowych, transfery na lotnisko oraz anglojezycznego kierowce z nielimitowanym przebiegiem w Panstwa prywatnym pojezdzie. Oplaty za wstep i opcjonalne aktywnosci morskie pozostaja do Panstwa decyzji, dzieki czemu mozna skupic sie bardziej na dzikiej przyrodzie lub czasie na plazy. Kazdy dzien laczy dziedzictwo UNESCO z praktycznymi doswiadczeniami  rejsy katamaranem po wioskach, targi przypraw i safari lodzia wsrod plantacji cynamonu  ktore w wycieczkach autokarowych czesto sa pomijane.',
    highlights: [
      'Zachod slonca na Pidurangali, Lion Rock w Sigiriya i jaskiniowe swiatynie UNESCO w Dambulli',
      'Swieta Relikwia Zeba w Kandy, tradycyjny pokaz tanca i panoramy z wiezy Ambuluwawa',
      'Most Nine Arch w Elli, Little Adam’s Peak i safari jeepem w Parku Narodowym Yala',
      'Obserwacja wielorybow i delfinow w Mirissie, snorkeling z zolwiami i aktywnosci wodne o zachodzie slonca',
      'Siedem nocy w formule half  board w starannie wybranych hotelach 4 gwiazdkowych, z prywatnym kierowca i transferami na lotnisko',
    ],
    whoIsFor:
      'Idealna dla osob odwiedzajacych Sri Lanke po raz pierwszy, par w podrozy poslubnej i aktywnych rodzin, ktore chca polaczyc kulture, dzika przyrode i dni na plazy w jednym planie podrozy. Obserwacja wielorybow wymaga wczesnego wyjazdu; dla podroznych preferujacych wiecej czasu w swiatyniach niz na aktywnosciach morskich dostosowujemy tempo.',
    bestTimeNote:
      'Grudzien–kwiecien to najlepszy czas na sezon wielorybow w Mirissie i sucha pogode na poludniowym wybrzezu. Trojkat Kulturowy i wyzyny mozna zwiedzac caly rok; Yala moze byc zamknieta na krotko wokol wrzesnia  odpowiednio dostosowujemy wybor parku.',
    faq: [
      {
        q: 'Ile nocy w hotelu jest wliczonych w 8 dniowa wycieczke?',
        a: 'Pakiet obejmuje siedem nocy w hotelach 4 gwiazdkowych z wyzywieniem HB wzdluz trasy, a takze odbior i odwoz z lotniska. Lunch, oplaty za wstep do parkow i bilety na lodz do obserwacji wielorybow placi sie na miejscu.',
      },
      {
        q: 'Czy obserwacja wielorybow w Mirissie jest gwarantowana?',
        a: 'Obserwacje wielorybow sa bardzo czeste od listopada do kwietnia, ale natura jest nieprzewidywalna. Rezerwujemy renomowanych operatorow na najlepszy poranny termin; w razie wzburzonego morza proponujemy snorkeling z zolwiami lub spokojny poranek na plazy.',
      },
      {
        q: 'Czy mozemy zamienic Pidurangale na pelna wspinaczke na skale Sigiriya?',
        a: 'Oczywiscie. Dzien 2 skupia sie na Lion Rock w Sigiriya, a dzien 1 wykorzystuje Pidurangale na zachod slonca. Podajcie nam swoj poziom sprawnosci fizycznej, a my mozemy odwrocic lub pominac jedna ze wspinaczek, by chronic Panstwa kolana.',
      },
    ],
    days: [
      {
        title: 'Przyjazd i Skala Pidurangala',
        activities: [
          { type: 'Przyjazd', title: 'Przyjazd' },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Skala Pidurangala',
            description:
              'Zacznij swoja przygode na Sri Lance od niezapomnianej wedrowki na Skale Pidurangala, jeden z najbardziej spektakularnych punktow widokowych Trojkata Kulturowego. Przejdz przez tereny starozytnych swiatyn i formacje skalne, by na szczycie ujrzec zachod slonca nad Skalna Forteca Sigiriya, bujnymi lasami i spokojnymi jeziorami.',
          },
          {
            type: 'Nocleg',
            title: 'Fresco Water Villa',
            description: 'Nocleg w hotelu Fresco Water Villa (lub podobnym), w opcji HB.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Prywatna lazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Sigiriya i Dambulla',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Skalna Forteca Sigiriya',
            description:
              'Zwiedz legendarna Skalna Fortece Sigiriya, wpisana na liste UNESCO i jeden z najbardziej ikonicznych symboli Sri Lanki. Wybudowana w V wieku przez krola Kasjape forteca wznosi sie na blisko 200 metrow i skrywa freski, ogrody, Mur Zwierciadel oraz imponujace osiagniecia inzynieryjne.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Wioska i jezioro Hiriwadunna',
            description:
              'Poznaj autentyczne zycie wiejskie Sri Lanki podczas wycieczki z przewodnikiem do tradycyjnej wioski Hiriwadunna. Przemierzaj malownicza okolice, jeziora i pola ryzowe, odkrywajac wielowiekowe tradycje, a nastepnie odbadz spokojny rejs katamaranem po wioskowym jeziorze.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Swiatynia Jaskiniowa w Dambulli',
            description:
              'Odwiedz wspaniala Swiatynie Jaskiniowa w Dambulli, najwiekszy i najlepiej zachowany kompleks jaskiniowy Sri Lanki, wpisany na liste UNESCO. To ponad 2000 letnie miejsce pielgrzymek obejmuje piec sanktuariow z buddyjskimi malowidlami i dobrze zachowanymi statuami.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Centrum Ekonomiczne w Dambulli',
            description:
              'Odkryj tetniace zyciem Centrum Ekonomiczne w Dambulli, najwiekszy hurtowy rynek owocow i warzyw na Sri Lance. Zobacz gwar handlowcow z calej wyspy oraz kolorowa rozmaitosc tropikalnych owocow, warzyw i przypraw.',
          },
          {
            type: 'Nocleg',
            title: 'Fresco Water Villa',
            description: 'Nocleg w opcji HB.',
            extra: ['Sniadanie', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Zwiedzanie miasta Kandy',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Sri Dalada Maligawa',
            description:
              'Odwiedz slynna Swiatynie Zeba Buddy (Sri Dalada Maligawa), jedno z najswietszych miejsc pielgrzymek buddyjskich na swiecie i obiekt UNESCO w historycznym Kandy. Podziwiaj kandyjska architekture, kunsztowne rzezbienia i zlocone sanktuaria.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Kandy Lake Club  Widowisko taneczne',
            description:
              'Poznaj zywe tradycje Sri Lanki podczas slynnego widowiska tanecznego w Kandy z tradycyjnymi bebnami, energicznymi tancami ludowymi, kolorowymi kostiumami oraz pokazami chodzenia po ogniu.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Swiatynia Sri Muthumariamman',
            description:
              'Zwiedz wspaniala swiatynie Sri Muthumariamman, jedna z najpiekniejszych swiatyn hinduskich na Sri Lance. Znana z kolorowej architektury w stylu drawidyjskim i szczegolowych rzezb, symbolizuje wielokulturowe dziedzictwo kraju.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Nalanda Gedige',
            description:
              'Odkryj tajemniczy Nalanda Gedige w poblizu Matale, jeden z najbardziej unikalnych zabytkow historycznych Sri Lanki. Ta ponad tysiacletnia kamienna budowla laczy wplywy hinduskie i buddyjskie wsrod spokojnych krajobrazow.',
          },
          {
            type: 'Nocleg',
            title: 'Hotel Topaz',
            description: 'Nocleg w Hotelu Topaz (lub podobnym), w opcji HB.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Prywatna lazienka'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya przez wodospady Ramboda',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Krolewskie Ogrody Botaniczne',
            description:
              'Zwiedz slynne Krolewskie Ogrody Botaniczne w Peradeniya, jedne z najwiekszych i najpiekniejszych w Azji. Na ponad 147 hektarach znajdziesz ponad 4000 gatunkow roslin, w tym rzadkie orchidee, aleje palmowa i rosliny lecznicze.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Wieza Ambuluwawa',
            description:
              'Odwiedz kompleks bioroznorodnosci Ambuluwawa i wejdz na slynna wieze, jeden z najbardziej niezwyklych punktow widokowych Sri Lanki. Usytuowana na szczycie gory, oferuje panoramiczny widok 360° na pasma gorskie, lasy, rzeki i plantacje herbaty.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Fabryka herbaty Bluefield',
            description:
              'Odkryj dziedzictwo herbaty cejlonskiej podczas wycieczki z przewodnikiem do znanej fabryki Bluefield w Nuwara Eliya. Wsrod rozleglych plantacji i mglistych wzgorz poznaj tradycyjny proces produkcji herbaty.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Punkt widokowy wodospadow Ramboda',
            description:
              'Zachwyc sie widokiem wodospadow Ramboda, jednych z najwyzszych i najbardziej malowniczych na Sri Lance. Otoczony plantacjami herbaty i mglistymi gorskimi krajobrazami wodospad spada po skalistych klifach, tworzac zjawiskowy widok.',
          },
          {
            type: 'Nocleg',
            title: 'Ramboda Falls Hotel',
            description: 'Nocleg w Ramboda Falls Hotel (lub podobnym), w opcji HB.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Prywatna lazienka'],
          },
        ],
      },
      {
        title: 'Przygody w Elli',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Most Dziewieciu Lukow',
            description:
              'Odwiedz ikoniczny Most Dziewieciu Lukow, jedno z najczesciej fotografowanych miejsc na Sri Lance i arcydzielo kolonialnej inzynierii kolejowej. Zbudowany z kamienia bez uzycia stali most wsrod plantacji herbaty Elli wciaz sluzy jako aktywna linia kolejowa.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Jezioro Gregory',
            description:
              'Skorzystaj z relaksujacej wizyty przy malowniczym Jeziorze Gregory, jednej z najpopularniejszych atrakcji Nuwara Eliya. Otoczone gorskim krajobrazem i chlodnym klimatem, zaprasza do spacerow, fotografii i przejazdzek lodka.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Little Adam’s Peak',
            description:
              'Wybierz sie na malownicza wedrowke na Little Adam’s Peak, jeden z najpopularniejszych punktow widokowych Elli. Latwe podejscie prowadzi przez plantacje herbaty i zielone wzgorza do panoramy 360° na Ella Gap i okoliczne doliny.',
          },
          {
            type: 'Nocleg',
            title: 'La Ella Breeze Hotel',
            description: 'Nocleg w La Ella Breeze Hotel (lub podobnym), w opcji HB.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Sniadanie', 'Prywatna lazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Park Narodowy Yala i wodospady Ravana',
        activities: [
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Park Narodowy Yala',
            description:
              'Przezyj niezapomniane safari w Parku Narodowym Yala, najslynniejszym na Sri Lance i jednym z najlepszych miejsc w Azji do obserwacji dzikich lampartow. Park jest domem dla sloni, niedzwiedzi wargaczy, krokodyli, jeleni plamistych, dzikich swin, bawolow i ponad 215 gatunkow ptakow.',
          },
          {
            type: 'Wycieczka z przewodnikiem',
            title: 'Wodospady Ravana',
            description:
              'Odwiedz zapierajace dech wodospady Ravana, jedne z najpiekniejszych i najbardziej ikonicznych na Sri Lance, wsrod gor Elli. Wedlug legendy krol Rawana ukryl tu ksiezniczke Site w pobliskich jaskiniach.',
          },
          {
            type: 'Nocleg',
            title: 'Mandara Resort Hotel',
            description: 'Nocleg w Mirissie.',
            extra: ['Sniadanie i kolacja w cenie', 'Hotel 4 gwiazdkowy'],
          },
        ],
      },
      {
        title: 'Mirissa  Obserwacja wielorybow i sporty wodne',
        activities: [
          {
            type: 'Obserwacja wielorybow',
            title: 'Obserwacja wielorybow i delfinow w Mirissie',
            description:
              'Wyrusz na niezapomniana wyprawe obserwacji wielorybow i delfinow w Mirissie, glownym osrodku fauny morskiej Sri Lanki. Wyplyn na wody Oceanu Indyjskiego w poszukiwaniu waleni blekitnych, kaszalotow, waleni Brydy oraz swobodnych stad delfinow.',
          },
          {
            type: 'Snorkeling',
            title: 'Snorkeling w miejscach obserwacji wielorybow w Mirissie',
            description:
              'Odkryj kolorowy podwodny swiat Mirissy podczas snorkelingu w krystalicznie czystych tropikalnych wodach, wsrod formacji koralowych i ryb rafowych na poludniowym wybrzezu.',
          },
          {
            type: 'Snorkeling',
            title: 'Przygoda snorkelingowa z zolwiami w Mirissie',
            description:
              'Poplyn u boku pelnych gracji zolwi morskich w cieplych wodach Mirissy, jednej z najpopularniejszych atrakcji morskich Sri Lanki. Obserwuj zolwie zielone i zolwie szylkretowe wsrod tropikalnych ryb i raf koralowych.',
          },
          {
            type: 'Sport wodny',
            title: 'Rejs kajakiem o zachodzie slonca w Mirissie',
            description:
              'Poczuj magie tropikalnego zachodu slonca podczas spokojnego rejsu kajakiem wzdluz malowniczego wybrzeza Mirissy, gdy niebo przybiera odcienie pomaranczu, rozu i zlota.',
          },
          {
            type: 'Rejs lodzia',
            title: 'Rejs lodzia o zachodzie slonca w Mirissie',
            description:
              'Wyplyn na relaksujacy rejs o zachodzie slonca w Mirissie z panoramicznym widokiem na poludniowe wybrzeze Sri Lanki, obserwujac, jak slonce zachodzi nad Oceanem Indyjskim.',
          },
          {
            type: 'Nocleg',
            title: 'Mandara Resort Hotel',
            description:
              'Ciesz sie komfortowym noclegiem w Mandara Resort Hotel lub podobnym obiekcie przy plazy w Mirissie. Pakiet obejmuje opcje HB ze sniadaniem i kolacja, zapewniajac przyjemny pobyt na przepieknym poludniowym wybrzezu Sri Lanki.',
            extra: ['Hotel 4 gwiazdkowy (Premium)', 'Sniadanie w cenie', 'Prywatna lazienka', 'Kolacja w cenie'],
          },
        ],
      },
      {
        title: 'Mirissa i wyjazd',
        activities: [
          {
            type: 'Doswiadczenie przyrodnicze i kulturowe',
            title: 'Coconut Tree Hill Mirissa',
            description:
              'Odwiedz ikoniczne Coconut Tree Hill w Mirissie, jeden z najczesciej fotografowanych punktow widokowych na wybrzezu Sri Lanki. Na klifie z widokiem na turkusowe wody Oceanu Indyjskiego, to miejsce otoczone wysokimi palmami kokosowymi tworzy krajobraz jak z pocztowki.',
          },
          {
            type: 'Ochrona przyrody',
            title: 'Projekt ochrony zolwi morskich',
            description:
              'Odwiedz centrum ochrony zolwi morskich na poludniowym wybrzezu i poznaj dzialania na rzecz ochrony fauny morskiej, programy wylegu i rehabilitacji.',
          },
          {
            type: 'Safari lodzia',
            title: 'Safari na rzece Madu',
            description:
              'Skorzystaj z malowniczego safari lodzia przez lasy namorzynowe i male wyspy rzeki Madu, odkrywajac lokalne uprawy cynamonu i bogata flore i faune terenow podmoklych.',
          },
          { type: 'Wyjazd', title: 'Transfer na wyjazd' },
        ],
      },
    ],
  },
  ru: {
    title: 'Частный тур по Шри Ланке на 8 дней | Сафари, культура, горы и пляж',
    description:
      'Незабываемый частный тур по Шри Ланке на 8 дней с сафари в Вилпатту, Анурадхапурой, Сигирией, Канди, приключениями в Элле и отдыхом на южном побережье.',
    duration: '8 дней',
    persons: '1-20 человек',
    tourType: 'Обзорный тур',
    overview:
      'Откройте для себя дикую природу, древние королевства, живописные горы и золотые пляжи Шри Ланки в этом идеально сбалансированном туре на 8 дней. Путешествие сочетает сафари, объекты ЮНЕСКО, горные пейзажи, чайные плантации, водопады и отдых на побережье, с проживанием на полупансионе и частным транспортом.',
    includes: PACKAGE_INCLUDES.ru,
    excludes: PACKAGE_EXCLUDES.ru,
    seoIntro:
      'Восемь дней оптимальная продолжительность для древних королевств, впечатляющей горной страны и настоящего пляжного финала без спешки. Этот частный тур по Шри Ланке сочетает закат на Pidurangala и Lion Rock в Sigiriya с пещерными храмами Dambulla, ритуалами Реликвии Зуба в Канди и панорамами башни Ambuluwawa над чайными плантациями. В Элле вас ждут мост Nine Arches, Little Adam’s Peak и водопады Ravana, а затем сафари на леопардов в Яле и две ночи на побережье Мириссы с наблюдением за китами, снорклингом с черепахами и катанием на каяках на закате. Sundown Tours включает семь ночей на полупансионе в отелях 4★, трансферы из/в аэропорт и англоговорящего шофёра с неограниченным пробегом в вашем частном автомобиле. Входные билеты и дополнительные морские активности остаются на ваш выбор, чтобы вы могли уделить больше внимания дикой природе или пляжному отдыху. Каждый день сочетает наследие ЮНЕСКО с живыми впечатлениями катамаранные прогулки в деревнях, рынки специй и лодочные сафари среди плантаций корицы которые автобусные туры часто пропускают.',
    highlights: [
      'Закат на Pidurangala, Lion Rock в Sigiriya и пещерные храмы ЮНЕСКО в Dambulla',
      'Священная реликвия зуба в Канди, культурное танцевальное шоу и панорамы башни Ambuluwawa',
      'Мост Nine Arch в Элле, Little Adam’s Peak и джип сафари в национальном парке Яла',
      'Наблюдение за китами и дельфинами в Мириссе, снорклинг с черепахами и водные активности на закате',
      'Семь ночей на полупансионе в тщательно отобранных отелях 4★, с частным шофёром и трансферами из/в аэропорт',
    ],
    whoIsFor:
      'Идеально для тех, кто впервые посещает Шри Ланку, молодожёнов и активных семей, которые хотят объединить культуру, дикую природу и пляжные дни в одном маршруте. Наблюдение за китами требует раннего выезда; для путешественников, предпочитающих больше времени в храмах, чем на морских активностях, мы адаптируем темп.',
    bestTimeNote:
      'Декабрь–апрель лучшее время для сезона китов в Мириссе и сухой погоды на южном побережье. Культурный треугольник и горную страну можно посещать круглый год; Яла может быть закрыта на короткое время около сентября мы соответствующим образом корректируем выбор парка.',
    faq: [
      {
        q: 'Сколько ночей в отеле включено в 8 дневный тур?',
        a: 'Пакет включает семь ночей в отелях 4★ на полупансионе по маршруту, а также встречу и трансфер в аэропорт. Обед, входные билеты в парки и билеты на лодку для наблюдения за китами оплачиваются на месте.',
      },
      {
        q: 'Гарантировано ли наблюдение за китами в Мириссе?',
        a: 'Наблюдения за китами очень часты с ноября по апрель, но природа непредсказуема. Мы бронируем надёжных операторов на лучшее утреннее время; при неспокойном море мы предлагаем вместо этого снорклинг с черепахами или спокойное утро на пляже.',
      },
      {
        q: 'Можем ли мы заменить Pidurangala на полное восхождение на скалу Sigiriya?',
        a: 'Конечно. День 2 посвящён Lion Rock в Sigiriya, а день 1 использует Pidurangala для наблюдения заката. Сообщите нам ваш уровень физической подготовки, и мы можем поменять порядок или убрать одно из восхождений, чтобы поберечь ваши колени.',
      },
    ],
    days: [
      {
        title: 'Прибытие и скала Пидурангала',
        activities: [
          { type: 'Прибытие', title: 'Прибытие' },
          {
            type: 'Экскурсия с гидом',
            title: 'Скала Пидурангала',
            description:
              'Начните своё шри ланкийское приключение с незабываемого похода на скалу Пидурангала одну из самых впечатляющих смотровых площадок Культурного треугольника. Пройдя через древние храмовые комплексы и скальные образования, вы поднимитесь на вершину, откуда откроется потрясающий закат над скалой крепостью Сигирия, зелёными лесами и спокойными озёрами.',
          },
          {
            type: 'Проживание',
            title: 'Fresco Water Villa',
            description: 'Проживание в отеле Fresco Water Villa (или подобном) на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Собственная ванная комната', 'Ужин'],
          },
        ],
      },
      {
        title: 'Сигирия и Дамбулла',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Скала крепость Сигирия',
            description:
              'Исследуйте легендарную скалу крепость Сигирия, объект ЮНЕСКО и один из самых узнаваемых символов Шри Ланки. Построенная в V веке королём Кашьяпой, эта древняя крепость поднимается почти на 200 метров над равниной и хранит фрески, ландшафтные сады, Зеркальную стену и впечатляющие инженерные решения.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Деревня и озеро Хиривадунна',
            description:
              'Познакомьтесь с подлинной сельской жизнью Шри Ланки во время экскурсии в традиционную деревню Хиривадунна. Пройдите через живописную сельскую местность, озёра и рисовые поля, узнавая о вековых традициях, а затем совершите спокойную прогулку на катамаране по деревенскому озеру.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Пещерный храм Дамбулла',
            description:
              'Посетите величественный пещерный храм Дамбулла крупнейший и лучше всего сохранившийся пещерный комплекс Шри Ланки, объект ЮНЕСКО. Этому более чем 2000 летнему месту паломничества принадлежат пять пещерных святилищ с буддийскими фресками и хорошо сохранившимися статуями.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Экономический центр Дамбулла',
            description:
              'Откройте для себя оживлённый оптовый рынок Дамбулла крупнейший рынок фруктов и овощей на Шри Ланке. Понаблюдайте за суетой торговцев со всего острова и красочным изобилием тропических фруктов, овощей и специй.',
          },
          {
            type: 'Проживание',
            title: 'Fresco Water Villa',
            description: 'Ночь на полупансионе.',
            extra: ['Завтрак', 'Ужин'],
          },
        ],
      },
      {
        title: 'Обзорная экскурсия по Канди',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Шри Далада Малигава',
            description:
              'Посетите всемирно известный Храм Зуба Будды (Шри Далада Малигава) одно из самых священных мест паломничества буддистов и объект ЮНЕСКО в историческом городе Канди. Полюбуйтесь кандийской архитектурой, изящной резьбой и святилищами с золочёными крышами.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Kandy Lake Club  танцевальное шоу',
            description:
              'Познакомьтесь с яркими традициями Шри Ланки на знаменитом танцевальном шоу в Канди с традиционными барабанами, энергичными народными танцами, красочными костюмами и огненными представлениями.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Храм Шри Мутумариамман',
            description:
              'Исследуйте великолепный храм Шри Мутумариамман один из самых красивых индуистских храмов Шри Ланки. Известный своей яркой архитектурой в дравидийском стиле и детальными скульптурами, он символизирует многокультурное наследие страны.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Наланда Гедиге',
            description:
              'Откройте для себя загадочный Наланда Гедиге неподалёку от Матале один из самых уникальных исторических памятников Шри Ланки. Этому каменному сооружению более тысячи лет, и оно объединяет индуистские и буддийские архитектурные традиции среди спокойных ландшафтов.',
          },
          {
            type: 'Проживание',
            title: 'Hotel Topaz',
            description: 'Проживание в отеле Topaz (или подобном) на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Собственная ванная комната'],
          },
        ],
      },
      {
        title: 'Нувара Элия через водопад Рамбода',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Королевский ботанический сад',
            description:
              'Посетите знаменитые Королевские ботанические сады в Перадении один из крупнейших и красивейших ботанических садов Азии. На территории свыше 147 гектаров произрастает более 4000 видов растений, включая редкие орхидеи, пальмовую аллею и лекарственные растения.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Башня Амбулувава',
            description:
              'Посетите биоразнообразный комплекс Амбулувава и подниметесь на знаменитую башню одну из самых необычных смотровых площадок Шри Ланки. Расположенная на вершине горы, она открывает панораму 360° на горные хребты, леса, реки и чайные плантации.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Чайная фабрика Bluefield',
            description:
              'Откройте для себя наследие цейлонского чая во время экскурсии на известную чайную фабрику Bluefield в Нувара Элии. Среди холмистых плантаций и туманных гор вы узнаете о традиционном процессе производства чая от сбора листьев до готовой чашки.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Смотровая площадка водопада Рамбода',
            description:
              'Полюбуйтесь захватывающими видами водопада Рамбода одного из самых высоких и живописных на Шри Ланке. Окружённый чайными плантациями и туманными горными ландшафтами, водопад низвергается по скалистым уступам, создавая впечатляющее природное зрелище.',
          },
          {
            type: 'Проживание',
            title: 'Ramboda Falls Hotel',
            description: 'Проживание в отеле Ramboda Falls Hotel (или подобном) на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Собственная ванная комната'],
          },
        ],
      },
      {
        title: 'Приключения в Элле',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Мост Девяти Арок',
            description:
              'Посетите знаменитый мост Девяти Арок одну из самых фотографируемых достопримечательностей Шри Ланки и шедевр колониальной железнодорожной инженерии. Построенный из камня без использования стали среди чайных плантаций Эллы, он до сих пор остаётся действующим железнодорожным мостом.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Озеро Грегори',
            description:
              'Насладитесь спокойным отдыхом у живописного озера Грегори одной из самых популярных достопримечательностей Нувара Элии. Окружённое горными пейзажами и прохладным климатом высокогорья, озеро располагает к прогулкам, фотографии и лодочным прогулкам.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Малый пик Адама',
            description:
              'Отправьтесь в живописный поход на Малый пик Адама одну из самых популярных смотровых площадок Эллы. Лёгкий, но увлекательный подъём проходит через чайные плантации и зелёные холмы до панорамы 360° на разлом Элла и окружающие долины.',
          },
          {
            type: 'Проживание',
            title: 'La Ella Breeze Hotel',
            description: 'Проживание в отеле La Ella Breeze Hotel (или подобном) на полупансионе.',
            extra: ['Отель 4 звезды (Премиум)', 'Завтрак', 'Собственная ванная комната', 'Ужин'],
          },
        ],
      },
      {
        title: 'Национальный парк Яла и водопад Равана',
        activities: [
          {
            type: 'Экскурсия с гидом',
            title: 'Национальный парк Яла',
            description:
              'Совершите незабываемое сафари в национальном парке Яла самом известном парке Шри Ланки и одном из лучших мест в Азии для наблюдения за леопардами в дикой природе. В парке обитают слоны, губачи, крокодилы, пятнистые олени, дикие кабаны, буйволы и более 215 видов птиц.',
          },
          {
            type: 'Экскурсия с гидом',
            title: 'Водопад Равана',
            description:
              'Посетите захватывающий водопад Равана один из самых красивых и знаменитых водопадов Шри Ланки среди гор Эллы. По легенде, царь Равана прятал здесь принцессу Ситу в соседних пещерах.',
          },
          {
            type: 'Проживание',
            title: 'Mandara Resort Hotel',
            description: 'Ночь в Мириссе.',
            extra: ['Завтрак и ужин включены', 'Отель 4 звезды'],
          },
        ],
      },
      {
        title: 'Мирисса  наблюдение за китами и водные развлечения',
        activities: [
          {
            type: 'Наблюдение за китами',
            title: 'Наблюдение за китами и дельфинами в Мириссе',
            description:
              'Отправьтесь в незабываемое путешествие по наблюдению за китами и дельфинами в Мириссе главном месте Шри Ланки для встречи с морской фауной. Выйдите в открытый океан в поисках синих китов, кашалотов, китов Брайда и весёлых стай дельфинов.',
          },
          {
            type: 'Снорклинг',
            title: 'Снорклинг у мест наблюдения за китами в Мириссе',
            description:
              'Откройте для себя яркий подводный мир Мириссы во время увлекательного плавания с маской в кристально чистых тропических водах, среди коралловых образований и рыб южного побережья.',
          },
          {
            type: 'Снорклинг',
            title: 'Снорклинг с черепахами в Мириссе',
            description:
              'Поплавайте рядом с изящными морскими черепахами в тёплых водах Мириссы одно из самых популярных морских развлечений Шри Ланки. Понаблюдайте за зелёными черепахами и бисса среди тропических рыб и коралловых рифов.',
          },
          {
            type: 'Водная активность',
            title: 'Прогулка на каяке на закате в Мириссе',
            description:
              'Почувствуйте магию тропического заката во время спокойной прогулки на каяке вдоль живописного побережья Мириссы, пока небо окрашивается в оранжевые, розовые и золотые тона.',
          },
          {
            type: 'Прогулка на лодке',
            title: 'Прогулка на лодке на закате в Мириссе',
            description:
              'Отправьтесь в расслабляющую прогулку на закате в Мириссе с панорамным видом на южное побережье Шри Ланки, наблюдая, как солнце садится над Индийским океаном.',
          },
          {
            type: 'Проживание',
            title: 'Mandara Resort Hotel',
            description:
              'Насладитесь комфортной ночью в отеле Mandara Resort или подобном пляжном отеле в Мириссе. Пакет включает полупансион с завтраком и ужином для приятного отдыха на прекрасном южном побережье Шри Ланки.',
            extra: ['Отель 4 звезды (Премиум)', 'Завтрак включён', 'Собственная ванная комната', 'Ужин включён'],
          },
        ],
      },
      {
        title: 'Мирисса и отъезд',
        activities: [
          {
            type: 'Природный и культурный опыт',
            title: 'Coconut Tree Hill в Мириссе',
            description:
              'Посетите знаменитый холм Кокосовых пальм в Мириссе одну из самых фотографируемых прибрежных смотровых площадок Шри Ланки. Расположенный на утёсе над бирюзовыми водами Индийского океана, этот живописный уголок с высокими кокосовыми пальмами создаёт идеальный тропический пейзаж.',
          },
          {
            type: 'Охрана природы',
            title: 'Проект охраны морских черепах',
            description:
              'Посетите центр охраны морских черепах на южном побережье и узнайте о защите морской фауны, программах инкубации и реабилитации.',
          },
          {
            type: 'Сафари на лодке',
            title: 'Сафари по реке Мадука',
            description:
              'Насладитесь живописным сафари на лодке через мангровые леса и небольшие острова реки Мадука. Узнайте о местном выращивании корицы и разнообразии флоры и фауны водно болотных угодий.',
          },
          { type: 'Отъезд', title: 'Трансфер в аэропорт' },
        ],
      },
    ],
  },
  nl: {
    title: '8 Tage Sri Lanka Privatreise | Safari, Kultur, Bergland & Strand',
    description:
      'Eine unvergessliche 8 tagige Sri Lanka Privatreise mit Wilpattu Safari, Anuradhapura, Sigiriya, Kandy, Abenteuern in Ella und einem entspannten Aufenthalt an der Sudkuste.',
    duration: '8 Tage',
    persons: '1-20 Personen',
    tourType: 'Rundreise',
    overview:
      'Entdecken Sie Sri Lankas Tierwelt, antike Konigreiche, malerische Berge und goldene Strande auf dieser perfekt ausbalancierten 8 tagigen Reise. Diese Rundreise verbindet Safari Abenteuer, UNESCO Welterbestatten, Berglandschaften, Teeplantagen, Wasserfalle und entspannte Kustenerlebnisse mit Halbpension und privatem Transport.',
    includes: PACKAGE_INCLUDES.nl,
    excludes: PACKAGE_EXCLUDES.nl,
    seoIntro:
      'Acht Tage sind der ideale Zeitrahmen fur antike Konigreiche, das dramatische Hugelland und einen richtigen Strandabschluss, ohne Eile. Diese private Sri Lanka Rundreise verbindet den Sonnenuntergang am Pidurangala und den Lowenfelsen Sigiriya mit den Hohlentempeln von Dambulla, den Zahnreliquien Ritualen in Kandy und den Panoramen des Ambuluwawa Turms uber den Teeplantagen. In Ella erwarten Sie die Nine Arches Bridge, Little Adam\'s Peak und die Ravana Wasserfalle, bevor eine Leoparden Safari in Yala und zwei Nachte an der Kuste von Mirissa mit Whale Watching, Schildkroten Schnorcheln und Sonnenuntergangs Kajaktouren folgen. Sundown Tours beinhaltet sieben Nachte Halbpension in 4 Sterne Hotels, Flughafentransfers und einen englischsprachigen Chauffeur mit unbegrenzter Kilometerleistung in Ihrem Privatfahrzeug. Eintrittsgebuhren und optionale Wasseraktivitaten bleiben Ihnen selbst uberlassen, sodass Sie sich starker auf Tierwelt oder Strandzeit konzentrieren konnen. Jeder Tag verbindet UNESCO Kulturerbe mit hautnahen Erlebnissen  Katamaranfahrten im Dorf, Gewurzmarkte und Zimt Bootssafaris , die bei Bustouren oft fehlen.',
    highlights: [
      'Sonnenuntergang am Pidurangala, Lowenfelsen Sigiriya und UNESCO Hohlentempel von Dambulla',
      'Heilige Zahnreliquie in Kandy, kulturelle Tanzshow und Aussichtspunkte am Ambuluwawa Turm',
      'Nine Arch Bridge in Ella, Little Adam\'s Peak und Jeep Safari im Yala Nationalpark',
      'Wal und Delfinbeobachtung in Mirissa, Schildkroten Schnorcheln und Wasseraktivitaten bei Sonnenuntergang',
      'Sieben Nachte Halbpension in sorgfaltig ausgewahlten 4 Sterne Hotels, mit privatem Chauffeur und Flughafentransfers',
    ],
    whoIsFor:
      'Perfekt fur Erstbesucher, Hochzeitsreisende und aktive Familien, die Kultur, Tierwelt und Strandtage in einer Reise verbinden mochten. Whale Watching erfordert einen fruhen Start; fur Reisende, die mehr Tempelzeit statt Wasseraktivitaten bevorzugen, passen wir das Tempo an.',
    bestTimeNote:
      'Dezember to April ist die beste Zeit fur die Walsaison in Mirissa und trockenes Wetter an der Sudkuste. Das Kultur Dreieck und das Hugelland eignen sich ganzjahrig; Yala kann um September kurzzeitig schliessen  wir passen die Parkwahl entsprechend an.',
    faq: [
      {
        q: 'Wie viele Hotelnachte sind in der 8 tagigen Tour enthalten?',
        a: 'Das Paket umfasst sieben Nachte in 4 Sterne Halbpension Hotels entlang der Route sowie Abholung und Ruckfahrt zum Flughafen. Mittagessen, Parkeintrittsgebuhren und whale watching Bootstickets werden vor Ort bezahlt.',
      },
      {
        q: 'Ist Whale Watching in Mirissa garantiert?',
        a: 'Walsichtungen sind von November bis April sehr haufig, aber die Natur ist unvorhersehbar. Wir buchen seriose Anbieter fur den besten Morgenslot; bei rauer See empfehlen wir alternativ Schildkroten Schnorcheln oder einen entspannten Strandmorgen.',
      },
      {
        q: 'Konnen wir Pidurangala gegen den vollstandigen Aufstieg auf den Sigiriya Felsen tauschen?',
        a: 'Absolut. Tag 2 konzentriert sich auf den Lowenfelsen Sigiriya, wahrend Tag 1 Pidurangala fur den Sonnenuntergang nutzt. Teilen Sie uns Ihr Fitnessniveau mit, und wir konnen einen Aufstieg umkehren oder streichen, um Ihre Knie zu schonen.',
      },
    ],
    days: [
      {
        title: 'Ankunft & Pidurangala Felsen',
        activities: [
          { type: 'Ankunft', title: 'Ankunft' },
          {
            type: 'Gefuhrte Tour',
            title: 'Pidurangala Felsen',
            description:
              'Beginnen Sie Ihr Sri Lanka Abenteuer mit einer Wanderung zum Pidurangala Felsen, einem der spektakularsten Aussichtspunkte im Kulturdreieck. Uber antike Tempelanlagen und Felsformationen erreichen Sie den Gipfel und erleben einen unvergesslichen Sonnenuntergang mit Blick auf die Felsenfestung Sigiriya, uppige Walder und ruhige Seen.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa',
            description: 'Ubernachtung im Hotel Fresco Water Villa (oder ahnlich)  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Sigiriya & Dambulla',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Sigiriya Felsenfestung',
            description:
              'Erkunden Sie die legendare Felsenfestung Sigiriya, eine UNESCO Welterbestatte und eines der beruhmtesten Wahrzeichen Sri Lankas. Die im 5. Jahrhundert von Konig Kashyapa errichtete Festung erhebt sich fast 200 Meter uber die Ebene und besticht durch Fresken, Gartenanlagen, die Spiegelwand und beeindruckende Ingenieurskunst.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Dorf und Seeabenteuer Hiriwadunna',
            description:
              'Erleben Sie das authentische Dorfleben Sri Lankas bei einem gefuhrten Besuch in Hiriwadunna. Durchqueren Sie malerische Landschaften, Seen und Felder, lernen Sie jahrhundertealte Traditionen kennen und unternehmen Sie eine ruhige Katamaran Fahrt uber den Dorfsee.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Hohlentempel von Dambulla',
            description:
              'Besuchen Sie den prachtigen Hohlentempel von Dambulla, Sri Lankas grossten und besterhaltenen Hohlentempelkomplex und eine UNESCO Welterbestatte. Die uber 2.000 Jahre alte Pilgerstatte umfasst funf Hohlenschreine mit buddhistischen Wandmalereien und gut erhaltenen Statuen.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Dambulla Wirtschaftszentrum',
            description:
              'Entdecken Sie das lebhafte Dambulla Economic Center, Sri Lankas grossten Grossmarkt fur Obst und Gemuse. Erleben Sie das geschaftige Treiben der Handler aus dem ganzen Land und die bunte Vielfalt an tropischen Fruchten, Gemuse und Gewurzen.',
          },
          {
            type: 'Unterkunft',
            title: 'Fresco Water Villa',
            description: 'Ubernachtung mit Halbpension.',
            extra: ['Fruhstuck', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Kandy Stadtrundfahrt',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Sri Dalada Maligawa',
            description:
              'Besuchen Sie den weltberuhmten Zahntempel (Sri Dalada Maligawa), eine der heiligsten buddhistischen Pilgerstatten und UNESCO Welterbestatte im historischen Kandy. Bewundern Sie die kandyanische Architektur, kunstvolle Schnitzereien und goldverzierte Schreine.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Kandy Lake Club  Kulturelle Tanzshow',
            description:
              'Erleben Sie die lebendigen Traditionen Sri Lankas bei der beruhmten Kandy Tanzshow mit traditionellem Trommelspiel, energiegeladenen Volkstanzen, farbenprachtigen Kostumen sowie Feuerlauf und Feuerspuck Darbietungen.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Sri Muthumariamman Tempel',
            description:
              'Erkunden Sie den prachtvollen Sri Muthumariamman Tempel, einen der schonsten Hindutempel Sri Lankas. Bekannt fur seine farbenfrohe Architektur und detailreichen Skulpturen im drawidischen Stil, spiegelt er die multikulturelle Geschichte des Landes wider.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Nalanda Gedige',
            description:
              'Entdecken Sie das geheimnisvolle Nalanda Gedige nahe Matale, eines der einzigartigsten historischen Monumente Sri Lankas. Das uber tausend Jahre alte Steinbauwerk vereint hinduistische und buddhistische Architektur inmitten friedlicher Landschaften.',
          },
          {
            type: 'Unterkunft',
            title: 'Hotel Topaz',
            description: 'Ubernachtung im Hotel Topaz (oder ahnlich)  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad'],
          },
        ],
      },
      {
        title: 'Nuwara Eliya uber die Ramboda Wasserfalle',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Royal Botanical Garden',
            description:
              'Besuchen Sie die weltberuhmten Royal Botanical Gardens in Peradeniya, einen der grossten und schonsten botanischen Garten Asiens. Auf uber 147 Hektar wachsen mehr als 4.000 Pflanzenarten  seltene Orchideen, eine Palmenallee, Heilpflanzen und tropische Blutenbaume.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Ambuluwawa Turm',
            description:
              'Besteigen Sie den beruhmten Ambuluwawa Turm im gleichnamigen Biodiversitatskomplex, einen der einzigartigsten Aussichtspunkte Sri Lankas. Auf einem Berggipfel gelegen, bietet er einen 360 Grad Panoramablick auf Bergketten, Walder, Flusse, Teeplantagen und Dorfer.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Bluefield Teefabrik',
            description:
              'Entdecken Sie das Erbe des Ceylon Tees bei einem gefuhrten Besuch der bekannten Bluefield Teefabrik in Nuwara Eliya. Inmitten uppiger Teeplantagen und nebelverhangener Hugel erfahren Sie alles uber den traditionellen Herstellungsprozess vom Blattpflucken bis zur fertigen Tasse.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Aussichtspunkt Ramboda Wasserfalle',
            description:
              'Geniessen Sie spektakulare Ausblicke auf die Ramboda Wasserfalle, einen der hochsten und malerischsten Wasserfalle Sri Lankas. Umgeben von Teeplantagen und nebligen Berglandschaften sturzt der Wasserfall uber schroffe Felsen  ein beeindruckendes Naturschauspiel.',
          },
          {
            type: 'Unterkunft',
            title: 'Ramboda Falls Hotel',
            description: 'Ubernachtung im Ramboda Falls Hotel (oder ahnlich)  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Eigenes Bad'],
          },
        ],
      },
      {
        title: 'Ella Abenteuer',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Nine Arches Bridge',
            description:
              'Besuchen Sie die beruhmte Nine Arches Bridge, eines der meistfotografierten Wahrzeichen Sri Lankas und ein Meisterwerk kolonialer Eisenbahnbaukunst. Die aus Stein errichtete Brucke inmitten von Teeplantagen ist bis heute in Betrieb.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Lake Gregory',
            description:
              'Geniessen Sie einen entspannten Besuch am malerischen Lake Gregory, einer der beliebtesten Freizeitattraktionen von Nuwara Eliya. Umgeben von Berglandschaften und kuhlem Hochlandklima ladt der See zu Bootsfahrten, Spaziergangen und Fotografie ein.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Little Adam’s Peak',
            description:
              'Wandern Sie zum Little Adam’s Peak, einem der beliebtesten Aussichtspunkte Ellas. Der leichte, lohnende Aufstieg fuhrt durch Teeplantagen und grune Hugel bis zum Gipfel, wo ein 360 Grad Panoramablick auf die Ella Gap und die Taler wartet.',
          },
          {
            type: 'Unterkunft',
            title: 'La Ella Breeze Hotel',
            description: 'Ubernachtung im La Ella Breeze Hotel (oder ahnlich)  Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Yala Nationalpark & Ravana Wasserfalle',
        activities: [
          {
            type: 'Gefuhrte Tour',
            title: 'Yala Nationalpark',
            description:
              'Erleben Sie eine unvergessliche Safari im Yala Nationalpark, Sri Lankas beruhmtestem Park und einem der besten Orte Asiens, um wilde Leoparden zu beobachten. Der Park beherbergt Elefanten, Lippenbaren, Krokodile, Sikahirsche, Wildschweine, Buffel und uber 215 Vogelarten.',
          },
          {
            type: 'Gefuhrte Tour',
            title: 'Ravana Wasserfalle',
            description:
              'Besuchen Sie die atemberaubenden Ravana Wasserfalle, eines der schonsten und bekanntesten Wasserfalle Sri Lankas inmitten der Berge von Ella. Der Legende nach versteckte Konig Ravana hier Prinzessin Sita in nahegelegenen Hohlen.',
          },
          {
            type: 'Unterkunft',
            title: 'Mandara Resort Hotel',
            description: 'Ubernachtung in Mirissa.',
            extra: ['Fruhstuck & Abendessen inklusive', '4 Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Mirissa  Whale Watching & Wasseraktivitaten',
        activities: [
          {
            type: 'Whale Watching',
            title: 'Wal und Delfinbeobachtung in Mirissa',
            description:
              'Erleben Sie ein unvergessliches Whale und Dolphin Watching Abenteuer in Mirissa, Sri Lankas fuhrendem Ziel fur Meereswildtiere. Fahren Sie hinaus in den Indischen Ozean auf der Suche nach Blauwalen, Pottwalen, Bryde Walen und verspielten Delfinschulen.',
          },
          {
            type: 'Schnorcheln',
            title: 'Schnorchel Erlebnis mit Walen in Mirissa',
            description:
              'Entdecken Sie die farbenfrohe Unterwasserwelt Mirissas bei einem spannenden Schnorchelausflug in kristallklarem, tropischem Wasser. Erkunden Sie bunte Korallenformationen und eine vielfaltige Riff Tierwelt entlang der Sudkuste Sri Lankas.',
          },
          {
            type: 'Schnorcheln',
            title: 'Schildkroten Schnorchelabenteuer in Mirissa',
            description:
              'Schwimmen Sie mit anmutigen Meeresschildkroten im warmen Wasser von Mirissa  eines der beliebtesten Meereserlebnisse Sri Lankas. Beobachten Sie Grune Meeresschildkroten und Karettschildkroten zwischen Korallenriffen und tropischen Fischen.',
          },
          {
            type: 'Wasseraktivitat',
            title: 'Sonnenuntergangs Kajaktour in Mirissa',
            description:
              'Erleben Sie einen tropischen Sonnenuntergang bei einer ruhigen Kajaktour entlang der malerischen Kuste von Mirissa, wahrend sich der Himmel in Orange, Rosa und Goldtone verfarbt.',
          },
          {
            type: 'Bootsfahrt',
            title: 'Sonnenuntergangs Bootsfahrt in Mirissa',
            description:
              'Gehen Sie an Bord fur eine entspannte Sonnenuntergangs Bootsfahrt in Mirissa mit Panoramablick auf die Sudkuste Sri Lankas. Beobachten Sie, wie die Sonne uber dem Indischen Ozean versinkt  ein romantisches Erlebnis fur die ganze Familie.',
          },
          {
            type: 'Unterkunft',
            title: 'Mandara Resort Hotel',
            description:
              'Verbringen Sie eine komfortable Ubernachtung im Mandara Resort Hotel oder einem ahnlichen Strandhotel in Mirissa. Das Paket beinhaltet Halbpension mit Fruhstuck und Abendessen fur einen angenehmen Aufenthalt an Sri Lankas schoner Sudkuste.',
            extra: ['4 Sterne Hotel (Premium)', 'Fruhstuck inklusive', 'Eigenes Bad', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Mirissa & Abreise',
        activities: [
          {
            type: 'Natur und Kulturerlebnis',
            title: 'Coconut Tree Hill Mirissa',
            description:
              'Besuchen Sie den ikonischen Coconut Tree Hill in Mirissa, einen der meistfotografierten Kustenaussichtspunkte Sri Lankas. Auf einer Klippe uber dem turkisblauen Indischen Ozean gelegen, saumen hohe Kokospalmen diese malerische Landschaft.',
          },
          {
            type: 'Naturschutz',
            title: 'Meeresschildkroten Schutzprojekt',
            description:
              'Besuchen Sie ein Meeresschildkroten Schutzzentrum an der Sudkuste und erfahren Sie mehr uber den Schutz der Meeresfauna, Brutprogramme und Rehabilitationsmassnahmen.',
          },
          {
            type: 'Bootssafari',
            title: 'Madu Fluss Safari',
            description:
              'Geniessen Sie eine malerische Bootssafari durch die Mangrovenwalder und kleinen Inseln des Madu Flusses. Entdecken Sie den lokalen Zimtanbau und die vielfaltige Feuchtgebietswelt.',
          },
          { type: 'Abreise', title: 'Abreisetransfer' },
        ],
      },
    ],
  }
};
