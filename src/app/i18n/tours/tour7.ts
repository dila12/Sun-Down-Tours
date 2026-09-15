import type { TourContent } from './localize';
import { PACKAGE_EXCLUDES, PACKAGE_INCLUDES } from './package-inclusions';

/**
 * 7 day Sri Lanka round tour (id: tour7).
 * English is the full BaseTour; de/fr/it/es/pl/ru overlay text by index.
 */
export const TOUR7: TourContent = {
  en: {
    title: 'Sri Lanka Seven Days Tour',
    description:
      'Experience the beauty of Sri Lanka with 7 days full of adventure, culture, and relaxation.',
    duration: '7 Days',
    persons: '20 Persons',
    filecode: '7-day-sri-lanka-tour',
    overview: `We are here for you to organize the perfect holiday you always dreamed of in 'Paradise Island', Sri Lanka.
    Our 7days(6 nights) travel package is scheduled in a way that you'll cover not only all the famous attractions but also some of the rare experiences that are very unique to Sundown Tours while accomadating our guests in Sri Lanka's finest 4 star category hotels on half  board basis.
    Yala Safari, Sigiriya, Ella Nine Arches Bridge, Ella train journey, Kandy Sacred Tooth Relic Temple, Ramboda watefall, Little Adam's Peak hike, Nuwara Eliya, Galle Fort, Bentota River tour are just to name a few main attractions that you'll cover during the journey.
    Altogether you'll be visiting 28 attractions in total covering 10 districts of Sri Lanka while enjoing private trasportation.`,
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
        title: 'Wilpattu  Sigiriya',
        activities: [
          {
            type: 'Scenic Hike',
            title: { title: 'Hiriwadunna Village and Lake Adventure', icon: 'fa-mountain', color: '#43bb26' },
            description:
              'Experience authentic rural life in Sri Lanka with a traditional village tour in Hiriwadunna. This immersive experience allows travelers to explore the countryside and learn about local farming, village culture, and traditional cooking methods. Begin with a peaceful walk through the village, passing paddy fields, vegetable gardens, and local homes. Enjoy a traditional bullock cart ride and a canoe ride across a scenic lake surrounded by nature. During the cookery session, you will join a local family to prepare traditional Sri Lankan dishes using fresh ingredients and clay pots over a wood fire. Learn about local spices, coconut preparation, and authentic cooking techniques before enjoying the freshly prepared meal. This experience offers a unique opportunity to connect with local people and understand Sri Lanka’s rural lifestyle and traditions.',
            image: 'assets/img/5daysTours/ee9i4pplrqkjewusnhko.jpg',
          },
          {
            type: 'Scenic Hike',
            title: { title: 'Kaudulla & Minneriya Friendly Jeep Safari', icon: 'fa-mountain', color: '#e74c3c' },
            description:
              'Enjoy an exciting 4x4 jeep safari in either Kaudulla National Park or Minneriya National Park, depending on wildlife movements and seasonal conditions. These parks are famous for their large gatherings of Asian elephants, especially during the dry season. Your safari begins with a comfortable jeep ride accompanied by an experienced local driver/guide. As you explore the park’s grasslands, wetlands, and forest areas, you may encounter herds of elephants, deer, wild buffalo, crocodiles, monkeys, and a variety of bird species. During certain times of the year, visitors can witness the spectacular “Elephant Gathering,” where hundreds of elephants come together near the reservoir one of Asia’s most impressive wildlife events. This safari offers a fantastic opportunity to experience Sri Lanka’s wildlife and natural beauty in a safe and memorable way.',
            image: 'assets/img/5daysTours/xj7qybc2bk5bwnxdkubp.jpg',
          },
          {
            type: 'Scenic Hike',
            title: { title: 'Ayurveda Isiwara Paura Sigiriya - Healthy side of your life', icon: 'fa-mountain', color: '#e74c3c' },
            description:
              'After an active day exploring Sigiriya and the surrounding attractions, enjoy a relaxing Ayurvedic wellness experience at a traditional Ayurveda center in Sigiriya. This session includes a traditional Sri Lankan herbal oil massage performed by experienced therapists using natural oils prepared with local medicinal herbs. The treatment is designed to help relieve muscle tension, improve circulation, and promote overall relaxation. Guests will learn about the principles of Ayurveda, Sri Lanka’s ancient healing system, and how natural therapies are used to balance the body and mind. The peaceful environment provides the perfect opportunity to unwind and refresh after sightseeing activities. This experience offers a soothing and authentic wellness touch to your Cultural Triangle journey.',
            image: 'assets/img/5daysTours/43.jpg',
          },
          {
            type: 'Scenic Hike',
            title: { title: 'Pidurangala Rock Sunset', icon: 'fa-mountain', color: '#e74c3c' },
            description:
              'In the evening, climb Pidurangala Rock for one of the most breathtaking sunset views in Sri Lanka. Located near Sigiriya, this rock offers a panoramic viewpoint overlooking the iconic Sigiriya Lion Rock and the surrounding jungle landscape. The climb takes approximately 20 to 30 minutes and includes stone steps followed by a short rock scramble near the summit. Your guide/driver will assist you and ensure a safe and comfortable experience. At the top, enjoy stunning 360 degree views of forests, lakes, and distant mountains as the sun sets over the horizon. This is one of the best photography spots in the Sigiriya region and a peaceful way to end the day. Travelers will have time to relax, take photos, and enjoy the natural beauty before descending.',
            image: 'assets/img/5daysTours/41.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Fresco Water Villa  Sigiriya', icon: 'fa-hotel', color: '#16a085' },
            description:
              'Overnight stay at Fresco Water Villa (or similar).',
            image: 'assets/img/5daysTours/c.jpg',
            extra: ['Breakfast & Dinner Included'],
          },
        ],
      },
      {
        day: 3,
        title: 'Sigiriya to Kandy',
        activities: [
          {
            type: 'UNESCO Site',
            title: { title: 'Sigiriya Lion Rock Fortress', icon: 'fa-mountain', color: '#c0392b' },
            description:
              'Explore the iconic Sigiriya Lion Rock Fortress, a UNESCO World Heritage Site and one of Sri Lanka’s most famous historical landmarks. Built in the 5th century by King Kashyapa, this ancient rock fortress rises nearly 200 meters above the surrounding plains. Your visit begins with a walk through the beautifully landscaped royal gardens, including water gardens, fountains, and symmetrical pathways. As you climb the rock, you will pass the famous Sigiriya frescoes, the Mirror Wall, and the impressive Lion’s Paw entrance. At the summit, discover the ruins of the ancient royal palace and enjoy breathtaking panoramic views of the surrounding jungle, lakes, and countryside. Your guide/driver will explain the fascinating history, architecture, and legends connected to this extraordinary site. This experience offers a perfect combination of history, adventure, and stunning scenery.',
            image: 'assets/img/5daysTours/42.jpg',
          },
          {
            type: 'UNESCO Site',
            title: { title: 'Matale Herbal and Spice Garden', icon: 'fa-mountain', color: '#c0392b' },
            description:
              'Visit a traditional Herbal and Spice Garden in Matale, where you will discover Sri Lanka’s world famous spices and medicinal plants. During this guided walk, you will see how cinnamon, cardamom, pepper, vanilla, cocoa, and many other spices are grown and processed. The local guide will explain the health benefits and traditional uses of various herbs and Ayurvedic plants used in Sri Lankan cooking and natural medicine. You will also learn about herbal remedies, essential oils, and natural treatments that have been practiced for centuries. Guests will have the opportunity to experience a short demonstration of herbal products and taste freshly prepared spice tea. This visit offers an educational and cultural insight into Sri Lanka’s rich spice heritage.',
            image: 'assets/img/5daysTours/kt2ugiesd68bdog5kdab.jpg',
          },
          {
            type: 'UNESCO Site',
            title: { title: 'Natural Gems and Gemmological Museum', icon: 'fa-mountain', color: '#17777a' },
            description:
              'Discover the beauty of Sri Lanka’s precious gemstones at the Natural Gems and Gemmological Museum in Kandy. Travelers can explore a fascinating collection of rare gems, learn about the history of Sri Lanka’s gem industry, and see how gemstones are mined, cut, and polished. The museum offers an educational and cultural experience, showcasing the craftsmanship and heritage behind the world famous Ceylon gems.',
            image: 'assets/img/5daysTours/47.jpg',
          },
          {
            type: 'UNESCO Site',
            title: { title: 'Temple of the Sacred Tooth Relic', icon: 'fa-mountain', color: '#6ac53f' },
            description:
              'Visit the Temple of the Sacred Tooth Relic in Kandy, one of the most sacred Buddhist sites in the world and a UNESCO World Heritage Site. This historic temple houses the sacred tooth relic of Lord Buddha and is an important pilgrimage destination for Buddhists. During your visit, explore the beautiful temple complex located beside Kandy Lake. Admire the traditional Kandyan architecture, golden roof, intricate wood carvings, and detailed paintings that decorate the shrine rooms. If visiting during prayer time (Pooja ceremony), travelers will witness traditional drumming and devotional rituals performed by local worshippers. Your guide/driver will explain the religious and historical importance of the temple and its role in Sri Lanka’s heritage. This experience offers a meaningful cultural and spiritual insight into Sri Lanka’s rich Buddhist traditions.',
            image: 'assets/img/5daysTours/14.jpg',
          },
          {
            type: 'UNESCO Site',
            title: { title: 'Kandy Lake Club Cultural Show', icon: 'fa-mountain', color: '#c72943' },
            description:
              'Enjoy an evening of traditional Sri Lankan culture at the Kandy Lake Club Cultural Show. This vibrant performance showcases the rich heritage of Kandyan dance, music, and traditional rituals that have been passed down for generations. The show features colorful costumes, energetic drum performances, and various traditional dance forms from different regions of Sri Lanka. Highlights include Kandyan Ves dancers, mask dances, fire walking, and thrilling fire performances. Travelers will experience the rhythm of traditional Sri Lankan drums and witness impressive acrobatic and cultural displays in a comfortable indoor setting near Kandy Lake. This performance provides a perfect cultural ending to your day in Kandy, offering insight into the island’s artistic traditions and folklore.',
            image: 'assets/img/5daysTours/fifyrnqt5tvouhpgh6kk.jpg',
          },
          {
            type: 'UNESCO Site',
            title: { title: 'Kandy View Point', icon: 'fa-mountain', color: '#967b06' },
            description:
              'Stop at the Kandy View Point to enjoy a panoramic view of the beautiful city of Kandy. Located on a hill overlooking Kandy Lake and the Temple of the Sacred Tooth Relic, this viewpoint offers one of the best photo opportunities in the city. From the top, travelers can admire the scenic landscape of rolling hills, lush greenery, and the peaceful lake at the heart of Kandy. Your guide/driver will briefly explain the layout of the city and highlight important landmarks visible from the viewpoint. This short stop provides a perfect opportunity to capture memorable photographs and appreciate the natural beauty of Sri Lanka’s cultural capital.',
            image: 'assets/img/5daysTours/476465443_947365727374414_5703532547629723678_n.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Hotel Topaz  Kandy', icon: 'fa-hotel', color: '#16a085' },
            description:
              'Overnight stay at Hotel Topaz (or similar).',
            image: 'assets/img/5daysTours/25.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 4,
        title: 'Kandy To Ella',
        activities: [
          {
            type: 'Cultural Visit',
            title: { title: 'Ambuluwawa Tower', icon: 'fa-hotel', color: '#b6d6b6' },
            description:
              'Visit Ambuluwawa Tower in Gampola, a unique multi religious sanctuary and biodiversity complex located on a hilltop with stunning 360 degree views. The highlight of this visit is the spiral white tower, which offers breathtaking panoramic views of the surrounding mountains, rivers, and valleys. Travelers can climb the narrow spiral staircase to the top of the tower for an adventurous and memorable experience. From the summit, enjoy spectacular views of the central highlands, including distant mountain ranges and lush greenery. The Ambuluwawa complex also features symbols representing Buddhism, Hinduism, Islam, and Christianity, reflecting Sri Lanka’s religious harmony. This stop offers a combination of light adventure, scenic beauty, and cultural insight.',
            image: 'assets/img/5daysTours/12.jpg',
          },
          {
            type: 'UNESCO Site',
            title: { title: 'Visit Tea Factory', icon: 'fa-seedling', color: '#2980b9' },
            description:
              'Visit the Tea Factory in Upcountry, located in the scenic hill country of Sri Lanka. This working tea factory offers an insightful experience into how world famous Ceylon tea is produced. During the guided factory tour, travelers will learn about the full tea making process from plucking fresh tea leaves in the plantations to withering, rolling, fermenting, drying, and grading. The guide will explain the differences between various tea types such as black tea, green tea, and white tea. After the tour, guests can enjoy a freshly brewed cup of pure Ceylon tea while admiring the beautiful mountain views surrounding the factory. There will also be an opportunity to purchase high quality tea directly from the source. This stop provides both an educational and scenic experience in Sri Lanka’s tea country.',
            image: 'assets/img/5daysTours/28.png',
          },
          {
            type: 'Cultural Show',
            title: { title: 'Ramboda Waterfall', icon: 'fa-water', color: '#1a64a1' },
            description:
              'Stop at Ramboda Waterfall, one of the tallest and most beautiful waterfalls in Sri Lanka, located in the scenic hill country near Pussellawa. Surrounded by lush greenery and tea plantations, this impressive waterfall cascades down approximately 109 meters, creating a stunning natural spectacle. Travelers can enjoy a short walk to the viewpoint to admire the waterfall and take memorable photographs. The cool mountain climate and peaceful environment make this a refreshing stop during your journey through the central highlands. Your guide/driver will provide information about the surrounding area and allow time to relax and enjoy the natural beauty before continuing the tour. This stop offers a perfect scenic break while traveling between Kandy and Nuwara Eliya.',
            image: 'assets/img/5daysTours/11.jpg',
          },
          {
            type: 'City Tour',
            title: { title: 'Nine Arch Bridge', icon: 'fa-mountain', color: '#bdcf16' },
            description:
              'Visit the iconic Nine Arch Bridge in Ella, one of Sri Lanka’s most photographed landmarks. Surrounded by lush green tea plantations and dense jungle, this impressive colonial era railway bridge was built entirely of stone and brick without the use of steel. Travelers will enjoy a short walk through scenic pathways to reach the bridge viewpoint. If timing allows, you may witness a train passing over the bridge a memorable and picturesque moment perfect for photography. From the viewing area, admire the beautiful arches stretching across the valley and the peaceful hill country landscape surrounding the bridge. This stop offers excellent photo opportunities and a chance to experience one of Ella’s most famous attractions.',
            image: 'assets/img/5daysTours/beqnuxidbmckapjcag2m.jpg',
          },
          {
            type: 'City Tour',
            title: { title: 'Ella Night City Tour', icon: 'fa-city', color: '#bdcf16' },
            description:
              'Enjoy a scenic city tour of Ella, one of Sri Lanka’s most charming hill country towns. Surrounded by lush tea plantations, rolling hills, and breathtaking mountain views, Ella offers a perfect combination of nature and relaxation. During the tour, travelers will visit popular attractions such as the famous Nine Arch Bridge, Little Adam’s Peak viewpoint, and Ravana Falls (depending on time availability). Enjoy panoramic views of the Ella Gap and the surrounding valleys while experiencing the peaceful atmosphere of this mountain town. The tour provides excellent photography opportunities and light adventure experiences, making Ella one of the highlights of the hill country journey.',
            image: 'assets/img/5daysTours/493941167_1168713261935959_7694929961337031118_n.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: ' La Ella Breeze  Hotel', icon: 'fa-hotel', color: '#16a085' },
            description:
              'Accommodation in  La Ella Breeze  Hotel or Similar hotel - HB Basis',
            image: 'assets/img/5daysTours/DJI_20240418061903_0457_D.png',
            extra: [
              'Hotel 4 stars (Premium)',
              'Breakfast',
              'Private bathroom',
              'Dinner',
            ],
          },
        ],
      },
      {
        day: 5,
        title: 'Ella - Mirissa',
        activities: [
          {
            type: 'Ella Train Ride',
            title: { title: 'Ella Train Ride', icon: 'fa-train', color: '#33138b' },
            description:
              'Travelers will experience the famous Ella train ride, one of the most scenic railway journeys in the world. The journey passes through lush tea plantations, misty mountains, tunnels, waterfalls, and picturesque villages, offering breathtaking views of Sri Lanka’s hill country. Guests can relax and enjoy the spectacular landscapes while capturing memorable photos from the train. This iconic rail journey provides a unique opportunity to experience local culture, stunning natural beauty, and the charm of Sri Lanka’s historic railway system, making it one of the highlights of the tour.',
            image: 'assets/img/5daysTours/6.jpg',
          },
          {
            type: 'Little Adam’s Peak View Point',
            title: { title: 'Little Adam’s Peak View Point', icon: 'fa-mountain', color: '#079e78' },
            description:
              'Hike to Little Adam’s Peak in Ella for one of the most rewarding and easily accessible viewpoints in Sri Lanka’s hill country. This gentle trek takes you through lush tea plantations and scenic pathways with breathtaking views along the way. The hike is suitable for most fitness levels and typically takes about 30 to 45 minutes to reach the summit. At the top, travelers can enjoy panoramic views of the Ella Gap, surrounding mountains, valleys, and rolling tea estates. This experience offers a perfect mix of light adventure and stunning natural scenery, making it one of the highlights of visiting Ella. It is also an excellent location for photography, especially during early morning or late afternoon.',
            image: 'assets/img/5daysTours/9.jpg',
          },
          {
            type: 'Ravana Ella Falls',
            title: { title: 'Ravana Ella Falls', icon: 'fa-water', color: '#3498db' },
            description:
              'Stop at Ravana Ella Falls, one of the widest and most impressive waterfalls in Sri Lanka, located along the scenic road near Ella. Surrounded by lush greenery and dramatic rock formations, this beautiful waterfall cascades down from a height of approximately 25 meters. According to local legend, the falls are connected to the ancient Ramayana story, where King Ravana is believed to have hidden Princess Sita in nearby caves. Your guide/driver will briefly explain the cultural and historical significance of the area. Travelers can enjoy the refreshing mountain air, take memorable photographs, and admire the natural beauty of this popular hill country attraction. This stop offers a relaxing and scenic break during your journey through Ella.',
            image: 'assets/img/7dayschange/zauxzn86ulp9ddnrzlvw.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'mandara resort Hotel', icon: 'fa-hotel', color: '#0f4572' },
            description:
              'Overnight stay in Mirissa.',
            image: 'assets/img/5daysTours/mandara-resort.jpg',
            extra: ['Breakfast & Dinner Included', '4 Star Hotel'],
          },
        ],
      },
      {
        day: 6,
        title: 'Mirissa - Whale Watching & Water Activities',
        activities: [
          {
            type: 'Whale Watching',
            title: {
              title: 'Mirissa Whale & Dolphin Watching',
              icon: 'fa-water',
              color: '#3498db',
            },
            description:
              'Embark on an unforgettable whale and dolphin watching adventure in Mirissa, Sri Lanka’s premier marine wildlife destination. Cruise into the deep waters of the Indian Ocean in search of magnificent Blue Whales, Sperm Whales, Bryde’s Whales, and large pods of playful dolphins. Mirissa is recognized as one of the best whale watching locations in the world, offering visitors a rare opportunity to witness these gentle giants in their natural habitat while enjoying breathtaking ocean views and a memorable wildlife experience.',
            image: 'assets/img/5daysTours/Mirissa-Whale-Watching-1.jpg',
          },
          {
            type: 'Snorkeling',
            title: {
              title: 'Mirissa Whale Snorkeling Experience',
              icon: 'fa-mask-snorkel',
              color: '#1abc9c',
            },
            description:
              'Discover the vibrant underwater world of Mirissa through an exciting snorkeling experience in crystal clear tropical waters. Explore colorful coral formations, tropical reef fish, and diverse marine ecosystems along Sri Lanka’s southern coastline. This activity is perfect for ocean lovers seeking an immersive marine adventure surrounded by stunning natural beauty and rich biodiversity.',
            image: 'assets/img/5daysTours/images.jpg',
          },
          {
            type: 'Snorkeling',
            title: {
              title: 'Mirissa Turtle Snorkeling Adventure',
              icon: 'fa-fish',
              color: '#27ae60',
            },
            description:
              'Swim alongside graceful sea turtles in the warm waters of Mirissa and experience one of Sri Lanka’s most popular marine activities. Observe Green Turtles and Hawksbill Turtles in their natural environment while snorkeling among tropical fish and coral reefs. This unforgettable encounter offers incredible photo opportunities and a unique connection with the marine life of the Indian Ocean.',
            image: 'assets/img/5daysTours/5d.jpg',
          },
          {
            type: 'Water Activity',
            title: {
              title: 'Mirissa Sunset Kayak Ride',
              icon: 'fa-water',
              color: '#e67e22',
            },
            description:
              'Experience the magic of a tropical sunset with a peaceful kayak journey along the picturesque coastline of Mirissa. Paddle through calm ocean waters as the sky transforms into vibrant shades of orange, pink, and gold. This relaxing adventure combines stunning coastal scenery, refreshing sea breezes, and unforgettable sunset views, making it one of the most scenic water activities in southern Sri Lanka.',
            image: 'assets/img/5daysTours/7a.jpg',
          },
          {
            type: 'Boat Ride',
            title: {
              title: 'Mirissa Sunset Boat Ride',
              icon: 'fa-ship',
              color: '#9b59b6',
            },
            description:
              'Set sail on a relaxing sunset boat ride in Mirissa and enjoy panoramic views of Sri Lanka’s breathtaking southern coastline. Watch the sun slowly disappear over the Indian Ocean while cruising through tranquil waters surrounded by spectacular scenery. This romantic and family friendly experience provides the perfect opportunity to capture stunning photographs and create lasting memories of your Sri Lankan beach holiday.',
            image: 'assets/img/5daysTours/mirissa-sunset-boat.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Mandara Resort Hotel',
              icon: 'fa-hotel',
              color: '#16a085',
            },
            description:
              'Enjoy a comfortable overnight stay at Mandara Resort Hotel or a similar premium beachfront property in Mirissa. Located close to the beach and major attractions, the hotel offers modern amenities, spacious rooms, excellent hospitality, and a relaxing atmosphere. The package includes half  Board accommodation with breakfast and dinner, ensuring a pleasant and memorable stay on Sri Lanka’s beautiful southern coast.',
            image: 'assets/img/5daysTours/mandara-resort.jpg',
            extra: [
              'Hotel 4 Stars (Premium)',
              'Breakfast Included',
              'Private Bathroom',
              'Dinner Included',
            ],
          },
        ],
      },
      {
        day: 7,
        title: 'water Activities & Departure',
        activities: [
          {
            type: 'Nature & Cultural Experience',
            title: {
              title: 'Coconut Tree Hill Mirissa',
              icon: 'fa-camera',
              color: '#27ae60',
            },
            description:
              'Visit the iconic Coconut Tree Hill in Mirissa, one of the most photographed coastal viewpoints in Sri Lanka. Perched on a cliff overlooking the turquoise waters of the Indian Ocean, this breathtaking location is lined with towering coconut palms, creating a picture perfect tropical landscape. Enjoy panoramic ocean views, capture stunning sunrise or sunset photographs, and experience the natural beauty that has made Coconut Tree Hill a must visit attraction for travelers exploring Sri Lanka’s southern coast.',
            image: 'assets/img/5daysTours/loepkav24dt36ngebdpp.jpg',
          },
          {
            type: 'Wildlife Conservation',
            title: {
              title: 'Koggala Turtle Hatchery Visit',
              icon: 'fa-water',
              color: '#27ae60',
            },
            description:
              'Visit the Koggala Turtle Hatchery and Conservation Center where endangered sea turtles are protected and rehabilitated. Learn about Sri Lanka’s marine conservation efforts, observe baby turtles in hatchery pools and understand how rescued turtles are released back into the Indian Ocean.',
            image: 'assets/img/5daysTours/31.jpg',
          },
          {
            type: 'Boat Safari',
            title: {
              title: 'Madu River Boat Safari',
              icon: 'fa-ship',
              color: '#16a085',
            },
            description:
              'Experience a scenic boat safari through the mangrove forests and small islands of the Madu River. Visit traditional cinnamon plantations and explore one of Sri Lanka’s most beautiful wetland ecosystems.',
            image: 'assets/img/5daysTours/32.jpg',
          },
          {
            type: 'Departure',
            title: {
              title: 'Departure Transfer',
              icon: 'fa-plane',
              color: '#2c3e50',
            },
          },
        ],
      },
    ],
    includes: PACKAGE_INCLUDES.en,
    excludes: PACKAGE_EXCLUDES.en,
    seoIntro:
      'A seven day Sri Lanka round tour is the benchmark first time itinerary and for good reason. In one week you move from the ancient Cultural Triangle through misty tea country to leopard territory and the palm lined south coast, without wasteful backtracking or a new hotel every night. Sundown Tours built this private route for couples, families and small groups who want breadth and depth: Wilpattu wildlife at the start, village life and elephant gatherings near Sigiriya, the Lion Rock ascent and Tooth Relic rituals in Kandy, scenic train views into Ella, Nine Arches Bridge and Little Adam\'s Peak, a Yala National Park jeep safari, and UNESCO Galle Fort plus river and turtle experiences before departure. Your English speaking chauffeur guide handles navigation, timing and local insight while you travel in an air conditioned private vehicle with unlimited mileage. Accommodation is arranged in selected 4 Star hotels on half  board, though we can adjust category or add beach nights on request. This is not a rushed coach tour each day balances iconic landmarks with hands on experiences like Ayurvedic massage, spice gardens and cultural dance shows that many operators skip.',
    highlights: [
      '28 curated stops across 10 districts in 7 days with a private chauffeur and unlimited mileage',
      'Wilpattu safari, Sigiriya Lion Rock, Kandy Temple of the Tooth and Ella hill country train views',
      'Yala National Park leopard and elephant safari in your own 4x4 jeep',
      'half board stays in carefully selected 4 Star hotels',
      'Sundown extras: village cooking, Ayurvedic wellness, Pidurangala sunset and Madu River mangroves',
    ],
    whoIsFor:
      'Ideal for first time visitors, families with teens, and couples who want culture, wildlife and scenery in one week without self driving. Requires moderate fitness for rock climbs and short hikes; we adapt pacing for seniors on request.',
    bestTimeNote:
      'year round, but December to April offers the driest weather on the west and south coasts and reliable Yala access. May to September suits the Cultural Triangle and east coast extensions; we adjust safari parks seasonally for elephant gatherings.',
    faq: [
      {
        q: 'How many nights of hotel accommodation are included on the 7 day tour?',
        a: 'The package covers 6 nights in 4 Star half board hotels along the route. Your driver guide\'s accommodation and meals are included separately; entrance fees and lunches remain at your discretion.',
      },
      {
        q: 'Can we customize the Day 1 Wilpattu safari or swap Yala for another park?',
        a: 'Yes. Wildlife routes vary by season we may use Minneriya/Kaudulla for elephant gatherings or Udawalawe as alternatives. Tell us your priorities when booking and we will align park choices and driving times.',
      },
      {
        q: 'Is the scenic train ride in Ella included in the price?',
        a: 'The iconic Ella train sector is part of the itinerary; ticket costs for the train segment are not included in the base tour price but our guide arranges the best available class and timing for your group.',
      },
      {
        q: 'What fitness level is needed for Sigiriya and Little Adam\'s Peak?',
        a: 'Sigiriya involves roughly 1,000 steps with some steep sections; Little Adam\'s Peak is a gentler 45 minute walk. Travelers who prefer a lighter option can choose Pidurangala for sunset views instead of the full Sigiriya ascent.',
      },
    ],
  },
  de: {
    title: 'Sri Lanka Rundreise  7 Tage',
    description:
      'Erleben Sie die Schonheit Sri Lankas auf einer 7 tagigen Privatreise voller Abenteuer, Kultur und Erholung.',
    duration: '7 Tage',
    persons: '20 Personen',
    tourType: 'Rundreise',
    overview:
      'Wir organisieren fur Sie den perfekten Urlaub auf der „Paradiesinsel" Sri Lanka. Unser 7 Tage Paket (6 Nachte) verbindet alle beruhmten Hohepunkte mit seltenen, fur Sundown Tours typischen Erlebnissen  Unterbringung in Sri Lankas besten 4 Sterne Hotels auf Halbpension. Yala Safari, Sigiriya, die Nine Arches Bridge in Ella, die Zugfahrt nach Ella, der Zahntempel in Kandy, der Ramboda Wasserfall, die Wanderung auf Little Adam’s Peak, Nuwara Eliya, das Fort von Galle und eine Bootstour auf dem Bentota Fluss sind nur einige der Attraktionen. Insgesamt besuchen Sie 28 Attraktionen in 10 Distrikten  mit privatem Transport.',
    includes: PACKAGE_INCLUDES.de,
    excludes: PACKAGE_EXCLUDES.de,
    seoIntro:
      'Eine siebentagige Sri Lanka Rundreise ist das klassische Erstbesucher Programm und das aus gutem Grund. In einer Woche reisen Sie vom antiken Kultur Dreieck uber das neblige Teehochland bis in Leopardengebiete und an die palmen gesaumte Sudkuste, ohne sinnlose Umwege oder taglich ein neues Hotel. Sundown Tours hat diese private Route fur Paare, Familien und kleine Gruppen konzipiert, die Kultur, Tierwelt und Landschaft kombinieren mochten: Wilpattu Wildlife zu Beginn, Dorfleben und Elefantentreffen bei Sigiriya, Aufstieg auf den Lowenfelsen und Zahntempel Rituale in Kandy, malerische Zugfahrt nach Ella, Nine Arches Bridge und Little Adam\'s Peak, Jeep Safari im Yala Nationalpark sowie UNESCO Galle Fort plus Fluss und Schildkroten Erlebnisse vor der Abreise. Ihr englischsprachiger Chauffeur kummert sich um Navigation, Timing und lokales Wissen, wahrend Sie in einem klimatisierten Privatfahrzeug mit unbegrenzter Kilometerleistung reisen. Die Unterbringung erfolgt in ausgewahlten 4 Sterne Hotels auf Halbpension; Kategorie und Strandnachte passen wir auf Wunsch an.',
    highlights: [
      '28 kuratierte Stopps in 10 Distrikten an 7 Tagen mit privatem Chauffeur und unbegrenzter Kilometerleistung',
      'Wilpattu Safari, Sigiriya Lowenfelsen, Zahntempel in Kandy und Zugpanorama im Hugelland von Ella',
      'Leoparden und Elefanten Safari im Yala Nationalpark im eigenen 4x4 Jeep',
      'Halbpension in sorgfaltig ausgewahlten 4 Sterne Hotels',
      'Sundown Extras: Dorfkochkurs, Ayurveda, Sonnenuntergang am Pidurangala und Madu Fluss Mangroven',
    ],
    whoIsFor:
      'Ideal fur Erstbesucher, Familien mit Teenagern und Paare, die Kultur, Tierwelt und Landschaft in einer Woche ohne Selbstfahren wunschen. Moderate Fitness fur Felsbesteigungen und kurze Wanderungen; fur Senioren passen wir das Tempo auf Wunsch an.',
    bestTimeNote:
      'Ganzjahrig moglich; Dezember to April bietet trockeneres Wetter an West und Sudkuste und zuverlassigen Yala Zugang. Mai to September eignet sich fur das Kultur Dreieck und Ostkusten Erweiterungen; Safariparks passen wir saisonal fur Elefantentreffen an.',
    faq: [
      {
        q: 'Wie viele Hotelubernachtungen sind in der 7 Tage Tour enthalten?',
        a: 'Das Paket umfasst 6 Nachte in 4 Sterne Hotels auf Halbpension entlang der Route. Unterkunft und Verpflegung des Fahrers sind separat inklusive; Eintrittsgebuhren und Mittagessen tragen Sie selbst.',
      },
      {
        q: 'Konnen wir die Wilpattu Safari an Tag 1 anpassen oder Yala gegen einen anderen Park tauschen?',
        a: 'Ja. Wildtierrouten variieren je nach Saison wir nutzen gegebenenfalls Minneriya/Kaudulla fur Elefantentreffen oder Udawalawe als Alternative. Nennen Sie uns Ihre Prioritaten bei der Buchung.',
      },
      {
        q: 'Ist die malerische Zugfahrt in Ella im Preis enthalten?',
        a: 'Der ikonische Ella Zugabschnitt gehort zur Route; Fahrkarten sind nicht im Basispaket enthalten, aber unser Guide organisiert die bestmogliche Klasse und Zeit fur Ihre Gruppe.',
      },
      {
        q: 'Welche Fitness braucht man fur Sigiriya und Little Adam\'s Peak?',
        a: 'Sigiriya erfordert etwa 1.000 Stufen mit steileren Passagen; Little Adam\'s Peak ist eine sanftere 45 minutige Wanderung. Wer es leichter mochte, kann Pidurangala fur den Sonnenuntergang wahlen.',
      },
    ],
    days: [
      {
        title: 'Flughafen / Hotel  Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Safari im Wilpattu Nationalpark',
            description:
              'Erkunden Sie Sri Lankas grossten Nationalpark bei einer 5 stundigen Jeep Safari im 4x4. Halten Sie Ausschau nach Leoparden, Lippenbaren, Elefanten, Hirschen, Krokodilen und einer vielfaltigen Vogelwelt.',
          },
          {
            type: 'Unterkunft',
            title: 'Thimbiri Wewa Resort  Wilpattu',
            description: 'Ubernachtung im Thimbiri Wewa Resort Wilpattu (oder ahnlich). Auf Halbpension.',
            extra: ['Abendessen inklusive', 'Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Wilpattu  Sigiriya',
        activities: [
          {
            type: 'Landerlebnis',
            title: 'Dorf und See Abenteuer in Hiriwadunna',
            description:
              'Erleben Sie das echte Landleben Sri Lankas bei einer traditionellen Dorftour in Hiriwadunna: ein Spaziergang durch Reisfelder, eine Ochsenkarrenfahrt und eine Kanufahrt uber den See. Beim Kochkurs bereiten Sie mit einer Familie authentische Gerichte im Tontopf uber dem Holzfeuer zu.',
          },
          {
            type: 'Safari',
            title: 'Jeep Safari in Kaudulla & Minneriya',
            description:
              'Geniessen Sie eine 4x4 Jeep Safari in Kaudulla oder Minneriya  je nach Tierbewegungen und Saison. Beide Parks sind fur ihre grossen Elefantenherden bekannt; zur Trockenzeit erleben Sie mitunter die spektakulare „Elephant Gathering".',
          },
          {
            type: 'Wellness',
            title: 'Ayurveda in Sigiriya  die gesunde Seite Ihrer Reise',
            description:
              'Entspannen Sie nach dem aktiven Tag bei einer ayurvedischen Olmassage mit naturlichen Krauterolen in einem traditionellen Ayurveda Zentrum in Sigiriya  ideal, um Muskeln zu lockern und neue Energie zu tanken.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Sonnenuntergang am Pidurangala Felsen',
            description:
              'Erklimmen Sie am Abend den Pidurangala Felsen fur einen der schonsten Sonnenuntergange Sri Lankas mit 360 Grad Blick auf den Sigiriya Lowenfelsen und den Dschungel. Der Aufstieg dauert etwa 20 to 30 Minuten.',
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
        title: 'Sigiriya nach Kandy',
        activities: [
          {
            type: 'UNESCO Statte',
            title: 'Lowenfelsen Festung Sigiriya',
            description:
              'Besuchen Sie die Felsenfestung Sigiriya, UNESCO Welterbe und im 5. Jahrhundert von Konig Kashyapa erbaut. Durch die koniglichen Wassergarten fuhrt der Weg vorbei an den beruhmten Fresken und der Spiegelwand bis zum Gipfel mit Palastruinen und Panoramablick.',
          },
          {
            type: 'UNESCO Statte',
            title: 'Krauter und Gewurzgarten in Matale',
            description:
              'In einem Gewurzgarten in Matale sehen Sie, wie Zimt, Kardamom, Pfeffer, Vanille und Kakao angebaut werden, und erfahren mehr uber ihre ayurvedische Verwendung  mit einer Kostprobe frischen Gewurztees.',
          },
          {
            type: 'UNESCO Statte',
            title: 'Edelstein und Gemmologie Museum',
            description:
              'Entdecken Sie im Gemmologie Museum in Kandy die beruhmten Ceylon Edelsteine und lernen Sie, wie sie abgebaut, geschliffen und poliert werden.',
          },
          {
            type: 'UNESCO Statte',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den Zahntempel in Kandy, eine der heiligsten buddhistischen Statten und UNESCO Welterbe. Bewundern Sie die kandyanische Architektur am See; zur Puja Zeit erleben Sie traditionelles Trommeln und Andachtsrituale.',
          },
          {
            type: 'Kulturshow',
            title: 'Kulturshow im Kandy Lake Club',
            description:
              'Geniessen Sie am Abend eine traditionelle Kandy Tanzshow mit farbenprachtigen Kostumen, Trommelmusik, Maskentanzen und Feuerlauf  ein perfekter kultureller Tagesabschluss.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Aussichtspunkt Kandy',
            description:
              'Vom Aussichtspunkt uber dem Kandy See geniessen Sie einen Panoramablick auf die Stadt, den Zahntempel und die grunen Hugel  ein idealer Fotostopp.',
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
        title: 'Kandy nach Ella',
        activities: [
          {
            type: 'Kulturbesuch',
            title: 'Ambuluwawa Turm',
            description:
              'Besuchen Sie den Ambuluwawa Turm bei Gampola, ein multireligioses Heiligtum auf einem Hugel. Uber die spiralformige Treppe erreichen Sie die Spitze mit atemberaubendem 360 Grad Blick auf das Hochland.',
          },
          {
            type: 'UNESCO Statte',
            title: 'Besuch einer Teefabrik',
            description:
              'In einer Teefabrik im Hochland erleben Sie, wie der weltberuhmte Ceylon Tee hergestellt wird  vom Pflucken uber Welken und Rollen bis zum Trocknen. Zum Abschluss eine Tasse frisch aufgebruhten Tees mit Bergblick.',
          },
          {
            type: 'Kulturshow',
            title: 'Ramboda Wasserfall',
            description:
              'Halten Sie am rund 109 Meter hohen Ramboda Wasserfall bei Pussellawa, umgeben von Teeplantagen und uppigem Grun  ein erfrischender Panoramastopp im zentralen Hochland.',
          },
          {
            type: 'Stadttour',
            title: 'Nine Arch Bridge',
            description:
              'Besuchen Sie die beruhmte Nine Arch Bridge in Ella, ganz aus Stein und Ziegeln erbaut, inmitten von Teeplantagen und Dschungel. Mit etwas Gluck fahrt gerade ein Zug uber die Brucke  ein perfektes Fotomotiv.',
          },
          {
            type: 'Stadttour',
            title: 'Abendtour durch Ella',
            description:
              'Eine kurze Tour durch das charmante Bergstadtchen Ella mit Blick auf den Ella Gap und die umliegenden Taler  entspannte Atmosphare und viele Fotomoglichkeiten.',
          },
          {
            type: 'Unterkunft',
            title: 'La Ella Breeze Hotel',
            description: 'Ubernachtung im La Ella Breeze Hotel oder ahnlich  auf Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Ella  Mirissa',
        activities: [
          {
            type: 'Zugfahrt',
            title: 'Zugfahrt durch Ella',
            description:
              'Erleben Sie die beruhmte Zugfahrt durch Ella, eine der schonsten Bahnstrecken der Welt  vorbei an Teeplantagen, Nebelbergen, Tunneln und Wasserfallen mit spektakularen Ausblicken.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Little Adam’s Peak',
            description:
              'Eine leichte Wanderung von 30 to 45 minuten durch Teefelder fuhrt zum Little Adam’s Peak mit Panoramablick auf den Ella Gap  fur fast alle Fitnesslevel geeignet.',
          },
          {
            type: 'Wasserfall',
            title: 'Ravana Wasserfalle',
            description:
              'Halt an den breiten Ravana Wasserfallen nahe Ella, laut Legende mit der Ramayana Geschichte verbunden  ein schoner, erfrischender Stopp mit klarer Bergluft.',
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
              'Begeben Sie sich auf eine unvergessliche Wal und Delfinbeobachtung in Mirissa, einem der besten Reviere weltweit. Auf dem Indischen Ozean suchen Sie nach Blauwalen, Pottwalen und verspielten Delfinschulen.',
          },
          {
            type: 'Schnorcheln',
            title: 'Schnorchel Erlebnis in Mirissa',
            description:
              'Entdecken Sie beim Schnorcheln in kristallklarem Wasser die bunte Unterwasserwelt Mirissas mit Korallen und tropischen Riffischen.',
          },
          {
            type: 'Schnorcheln',
            title: 'Schnorcheln mit Meeresschildkroten',
            description:
              'Schwimmen Sie neben anmutigen Grunen und Echten Karettschildkroten in den warmen Gewassern Mirissas  ein unvergessliches Naturerlebnis.',
          },
          {
            type: 'Wasseraktivitat',
            title: 'Sonnenuntergangs Kajaktour in Mirissa',
            description:
              'Paddeln Sie bei einer ruhigen Kajaktour entlang der Kuste, wahrend der Himmel sich in Orange, Pink und Gold verfarbt  eine der schonsten Wasseraktivitaten im Suden.',
          },
          {
            type: 'Bootsfahrt',
            title: 'Sonnenuntergangs Bootsfahrt in Mirissa',
            description:
              'Eine entspannte Bootsfahrt bei Sonnenuntergang mit Panoramablick auf die Sudkuste  romantisch und familienfreundlich zugleich.',
          },
          {
            type: 'Unterkunft',
            title: 'Mandara Resort Hotel',
            description:
              'Komfortable Ubernachtung im Mandara Resort Hotel oder einem ahnlichen Strandhotel in Mirissa, auf Halbpension mit Fruhstuck und Abendessen.',
            extra: ['4 Sterne Hotel (Premium)', 'Fruhstuck inklusive', 'Eigenes Bad', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Wasseraktivitaten & Abreise',
        activities: [
          {
            type: 'Natur & Kultur',
            title: 'Coconut Tree Hill in Mirissa',
            description:
              'Besuchen Sie den Coconut Tree Hill, einen der meistfotografierten Aussichtspunkte Sri Lankas: eine von Kokospalmen gesaumte Klippe mit Panoramablick uber den turkisen Ozean.',
          },
          {
            type: 'Artenschutz',
            title: 'Schildkroten Aufzuchtstation Koggala',
            description:
              'Besuchen Sie die Schildkroten Aufzuchtstation in Koggala, wo bedrohte Meeresschildkroten geschutzt und aufgezogen werden, und erfahren Sie mehr uber Sri Lankas Meeresschutz.',
          },
          {
            type: 'Bootssafari',
            title: 'Bootssafari auf dem Madu Fluss',
            description:
              'Eine landschaftlich reizvolle Bootssafari durch die Mangrovenwalder und kleinen Inseln des Madu Flusses, mit Besuch einer traditionellen Zimtplantage.',
          },
          {
            type: 'Abreise',
            title: 'Transfer zur Abreise',
          },
        ],
      },
    ],
  },

  fr: {
    title: 'Circuit au Sri Lanka  7 jours',
    description:
      'Decouvrez la beaute du Sri Lanka lors d’un circuit prive de 7 jours melant aventure, culture et detente.',
    duration: '7 jours',
    persons: '20 personnes',
    tourType: 'Circuit',
    overview:
      'Nous organisons pour vous les vacances parfaites sur l’« ile paradis », le Sri Lanka. Notre formule de 7 jours (6 nuits) reunit tous les sites celebres et des experiences rares propres a Sundown Tours, avec un hebergement dans les meilleurs hotels 4 etoiles en demi pension. Safari a Yala, Sigiriya, le Nine Arches Bridge d’Ella, le train d’Ella, le Temple de la Dent a Kandy, la cascade de Ramboda, l’ascension du Little Adam’s Peak, Nuwara Eliya, le fort de Galle et une balade en bateau sur la riviere Bentota ne sont que quelques temps forts. Au total, vous visiterez 28 sites repartis sur 10 districts, en transport prive.',
    includes: PACKAGE_INCLUDES.fr,
    excludes: PACKAGE_EXCLUDES.fr,
    seoIntro:
      'Un circuit de sept jours au Sri Lanka est l’itineraire de reference pour une premiere visite. En une semaine, vous passez du Triangle culturel au pays du the brumeux, aux territoires des leopards et a la cote sud bordee de palmiers, sans retours inutiles ni changement d’hotel chaque soir. Sundown Tours a concu ce parcours prive pour les couples, familles et petits groupes : safari a Wilpattu, vie villageoise et rassemblements d’elephants pres de Sigiriya, ascension du Rocher du Lion et rituels au Temple de la Dent a Kandy, train panoramique vers Ella, Nine Arches Bridge et Little Adam’s Peak, safari en jeep a Yala, Fort de Galle classe UNESCO et experiences fluviales avant le depart. Votre chauffeur anglophone gere navigation et timing dans un vehicule prive climatise au kilometrage illimite. Hebergement en hotels 4 etoiles en demi pension, modifiable sur demande.',
    highlights: [
      '28 etapes selectionnees dans 10 districts en 7 jours avec chauffeur prive et kilometrage illimite',
      'Safari Wilpattu, Sigiriya, Temple de la Dent a Kandy et vues en train dans les collines d’Ella',
      'Safari leopards et elephants a Yala en jeep 4x4 prive',
      'Demi pension dans des hotels 4 etoiles soigneusement choisis',
      'Extras Sundown : cuisine villageoise, ayurveda, coucher de soleil a Pidurangala et mangroves de la riviere Madu',
    ],
    whoIsFor:
      'Ideal pour les primo visiteurs, familles avec ados et couples souhaitant culture, faune et paysages en une semaine sans conduire. Fitness moderee pour les ascensions ; rythme adaptable pour les seniors.',
    bestTimeNote:
      'Toute l’annee ; decembre to avril offre le temps le plus sec sur les cotes ouest et sud et un acces fiable a Yala. Mai to septembre convient au Triangle culturel ; nous adaptons les parcs safari selon la saison.',
    faq: [
      {
        q: 'Combien de nuits d’hotel sont incluses dans le circuit de 7 jours ?',
        a: 'Le forfait couvre 6 nuits en hotels 4 etoiles en demi pension. L’hebergement et les repas du chauffeur sont inclus ; entrees et dejeuners restent a votre charge.',
      },
      {
        q: 'Peut on personnaliser le safari Wilpattu ou remplacer Yala par un autre parc ?',
        a: 'Oui. Les itineraires faune varient selon la saison Minneriya/Kaudulla ou Udawalawe sont des alternatives. Indiquez vos priorites a la reservation.',
      },
      {
        q: 'Le train panoramique a Ella est il inclus dans le prix ?',
        a: 'Le troncon emblematique fait partie du programme ; les billets ne sont pas inclus dans le tarif de base, mais notre guide organise la meilleure classe et horaire.',
      },
      {
        q: 'Quel niveau de forme pour Sigiriya et Little Adam’s Peak ?',
        a: 'Sigiriya compte environ 1 000 marches ; Little Adam’s Peak est une marche plus douce d’environ 45 minutes. Pidurangala au coucher du soleil est une option plus legere.',
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
        title: 'Wilpattu  Sigiriya',
        activities: [
          {
            type: 'Experience rurale',
            title: 'Village et lac de Hiriwadunna',
            description:
              'Vivez la vie rurale authentique du Sri Lanka a Hiriwadunna : marche a travers les rizieres, balade en char a boeufs et en pirogue sur le lac. Lors d’un cours de cuisine, preparez des plats traditionnels avec une famille locale, dans des pots en terre au feu de bois.',
          },
          {
            type: 'Safari',
            title: 'Safari en jeep a Kaudulla & Minneriya',
            description:
              'Profitez d’un safari en 4x4 a Kaudulla ou Minneriya selon la saison et les deplacements des animaux. Ces parcs sont reputes pour leurs grands troupeaux d’elephants ; en saison seche, vous pouvez assister au spectaculaire « rassemblement des elephants ».',
          },
          {
            type: 'Bien etre',
            title: 'Ayurveda a Sigiriya  le cote bien etre du voyage',
            description:
              'Apres une journee active, detendez vous avec un massage ayurvedique aux huiles de plantes dans un centre traditionnel de Sigiriya, ideal pour relacher les muscles et retrouver de l’energie.',
          },
          {
            type: 'Point de vue',
            title: 'Coucher de soleil au rocher de Pidurangala',
            description:
              'En soiree, grimpez au rocher de Pidurangala pour l’un des plus beaux couchers de soleil du Sri Lanka, avec vue a 360° sur le rocher du Lion de Sigiriya et la jungle. Ascension d’environ 20 a 30 minutes.',
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
        title: 'Sigiriya vers Kandy',
        activities: [
          {
            type: 'Site UNESCO',
            title: 'Forteresse du rocher du Lion de Sigiriya',
            description:
              'Visitez la forteresse de Sigiriya, site du patrimoine mondial de l’UNESCO bati au Ve siecle par le roi Kashyapa. Traversez les jardins royaux, passez devant les celebres fresques et le mur miroir, puis atteignez le sommet et ses ruines de palais avec vue panoramique.',
          },
          {
            type: 'Site UNESCO',
            title: 'Jardin d’epices et de plantes de Matale',
            description:
              'Dans un jardin d’epices a Matale, decouvrez la culture de la cannelle, de la cardamome, du poivre, de la vanille et du cacao, ainsi que leurs usages ayurvediques, avec une degustation de the aux epices.',
          },
          {
            type: 'Site UNESCO',
            title: 'Musee des pierres precieuses',
            description:
              'Decouvrez au musee gemmologique de Kandy les celebres pierres de Ceylan et apprenez comment elles sont extraites, taillees et polies.',
          },
          {
            type: 'Site UNESCO',
            title: 'Temple de la Dent sacree',
            description:
              'Visitez le Temple de la Dent a Kandy, l’un des sites bouddhistes les plus sacres et classe a l’UNESCO. Admirez l’architecture kandyenne au bord du lac ; a l’heure de la puja, assistez aux tambours et rituels devotionnels.',
          },
          {
            type: 'Spectacle culturel',
            title: 'Spectacle culturel du Kandy Lake Club',
            description:
              'En soiree, assistez a un spectacle de danse kandyenne : costumes colores, tambours, danses masquees et marche sur le feu  une belle conclusion culturelle de la journee.',
          },
          {
            type: 'Point de vue',
            title: 'Point de vue de Kandy',
            description:
              'Depuis le belvedere surplombant le lac de Kandy, profitez d’une vue panoramique sur la ville, le Temple de la Dent et les collines verdoyantes  un arret photo ideal.',
          },
          {
            type: 'Hebergement',
            title: 'Hotel Topaz  Kandy',
            description: 'Nuit a l’hotel Topaz (ou similaire).',
            extra: ['Petit dejeuner & diner inclus', 'Hotel 4 etoiles'],
          },
        ],
      },
      {
        title: 'Kandy vers Ella',
        activities: [
          {
            type: 'Visite culturelle',
            title: 'Tour d’Ambuluwawa',
            description:
              'Visitez la tour d’Ambuluwawa pres de Gampola, sanctuaire multireligieux perche sur une colline. Montez l’escalier en spirale jusqu’au sommet pour une vue a 360° epoustouflante sur les hauts plateaux.',
          },
          {
            type: 'Site UNESCO',
            title: 'Visite d’une fabrique de the',
            description:
              'Dans une fabrique de the des hauts plateaux, decouvrez comment se fabrique le celebre the de Ceylan  de la cueillette au sechage  puis degustez une tasse fraichement infusee face aux montagnes.',
          },
          {
            type: 'Spectacle culturel',
            title: 'Cascade de Ramboda',
            description:
              'Arret a la cascade de Ramboda (environ 109 m) pres de Pussellawa, entouree de plantations de the et de verdure  une pause panoramique rafraichissante dans les hauts plateaux.',
          },
          {
            type: 'Visite de ville',
            title: 'Nine Arch Bridge',
            description:
              'Visitez le celebre Nine Arch Bridge d’Ella, entierement construit en pierre et brique, au milieu des plantations de the et de la jungle. Avec un peu de chance, un train le traverse  un cliche parfait.',
          },
          {
            type: 'Visite de ville',
            title: 'Tour d’Ella en soiree',
            description:
              'Une courte visite de la charmante bourgade d’Ella, avec vue sur l’Ella Gap et les vallees environnantes  ambiance paisible et belles occasions de photos.',
          },
          {
            type: 'Hebergement',
            title: 'La Ella Breeze Hotel',
            description: 'Nuit au La Ella Breeze Hotel ou similaire, en demi pension.',
            extra: ['Hotel 4 etoiles (premium)', 'Petit dejeuner', 'Salle de bain privee', 'Diner'],
          },
        ],
      },
      {
        title: 'Ella  Mirissa',
        activities: [
          {
            type: 'Trajet en train',
            title: 'Trajet en train a Ella',
            description:
              'Vivez le celebre trajet en train d’Ella, l’un des plus beaux au monde  a travers plantations de the, montagnes brumeuses, tunnels et cascades, avec des panoramas spectaculaires.',
          },
          {
            type: 'Point de vue',
            title: 'Little Adam’s Peak',
            description:
              'Une randonnee facile de 30 a 45 minutes a travers les theiers mene au Little Adam’s Peak, avec vue panoramique sur l’Ella Gap  accessible a presque tous.',
          },
          {
            type: 'Cascade',
            title: 'Chutes de Ravana',
            description:
              'Arret aux larges chutes de Ravana pres d’Ella, liees selon la legende au Ramayana  une pause rafraichissante avec l’air pur des montagnes.',
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
            title: 'Observation des baleines & dauphins a Mirissa',
            description:
              'Partez pour une sortie inoubliable d’observation des baleines et dauphins a Mirissa, l’un des meilleurs spots au monde. Sur l’ocean Indien, guettez baleines bleues, cachalots et bancs de dauphins joueurs.',
          },
          {
            type: 'Snorkeling',
            title: 'Snorkeling a Mirissa',
            description:
              'Decouvrez en snorkeling les eaux cristallines de Mirissa, ses coraux colores et ses poissons tropicaux.',
          },
          {
            type: 'Snorkeling',
            title: 'Snorkeling avec les tortues',
            description:
              'Nagez aux cotes des gracieuses tortues vertes et imbriquees dans les eaux chaudes de Mirissa  une rencontre nature inoubliable.',
          },
          {
            type: 'Activite nautique',
            title: 'Sortie en kayak au coucher du soleil',
            description:
              'Pagayez le long de la cote lors d’une sortie tranquille en kayak, tandis que le ciel se pare d’orange, de rose et d’or  l’une des plus belles activites nautiques du sud.',
          },
          {
            type: 'Balade en bateau',
            title: 'Balade en bateau au coucher du soleil',
            description:
              'Une balade en bateau paisible au coucher du soleil, avec vue panoramique sur la cote sud  a la fois romantique et familiale.',
          },
          {
            type: 'Hebergement',
            title: 'Mandara Resort Hotel',
            description:
              'Nuit confortable au Mandara Resort Hotel ou un hotel de plage similaire a Mirissa, en demi pension (petit dejeuner et diner).',
            extra: ['Hotel 4 etoiles (premium)', 'Petit dejeuner inclus', 'Salle de bain privee', 'Diner inclus'],
          },
        ],
      },
      {
        title: 'Activites nautiques & depart',
        activities: [
          {
            type: 'Nature & culture',
            title: 'Coconut Tree Hill a Mirissa',
            description:
              'Visitez Coconut Tree Hill, l’un des points de vue cotiers les plus photographies du Sri Lanka : une falaise bordee de cocotiers avec vue panoramique sur l’ocean turquoise.',
          },
          {
            type: 'Conservation',
            title: 'Ecloserie de tortues de Koggala',
            description:
              'Visitez l’ecloserie de tortues de Koggala, ou des tortues marines menacees sont protegees et rehabilitees, et decouvrez les efforts de conservation marine du Sri Lanka.',
          },
          {
            type: 'Safari en bateau',
            title: 'Safari en bateau sur la riviere Madu',
            description:
              'Un safari en bateau a travers les mangroves et les petites iles de la riviere Madu, avec la visite d’une plantation de cannelle traditionnelle.',
          },
          {
            type: 'Depart',
            title: 'Transfert de depart',
          },
        ],
      },
    ],
  },

  it: {
    title: 'Tour dello Sri Lanka  7 giorni',
    description:
      'Scopri la bellezza dello Sri Lanka in un tour privato di 7 giorni tra avventura, cultura e relax.',
    duration: '7 giorni',
    persons: '20 persone',
    tourType: 'Tour completo',
    overview:
      'Organizziamo per te la vacanza perfetta sull’«isola paradiso», lo Sri Lanka. Il nostro pacchetto di 7 giorni (6 notti) unisce tutte le attrazioni famose a esperienze rare tipiche di Sundown Tours, con sistemazione nei migliori hotel 4 stelle in mezza pensione. Safari a Yala, Sigiriya, il Nine Arches Bridge di Ella, il treno di Ella, il Tempio del Dente a Kandy, la cascata di Ramboda, la salita al Little Adam’s Peak, Nuwara Eliya, il Forte di Galle e un giro in barca sul fiume Bentota sono solo alcune delle attrazioni. In tutto visiterai 28 attrazioni in 10 distretti, con trasporto privato.',
    includes: PACKAGE_INCLUDES.it,
    excludes: PACKAGE_EXCLUDES.it,
    seoIntro:
      'Un tour di sette giorni in Sri Lanka e l’itinerario classico per chi visita l’isola per la prima volta. In una settimana si attraversano il Triangolo culturale, le colline del te, i territori dei leopardi e la costa sud, senza spostamenti inutili. Sundown Tours ha creato questo percorso privato per coppie, famiglie e piccoli gruppi: safari a Wilpattu, vita di villaggio e raduni di elefanti vicino a Sigiriya, salita al Lion Rock e riti al Tempio del Dente a Kandy, treno panoramico verso Ella, Nine Arches Bridge e Little Adam’s Peak, safari in jeep a Yala, Forte di Galle UNESCO ed esperienze fluviali prima della partenza. Il autista parlante inglese guida in un veicolo privato climatizzato con chilometraggio illimitato. Sistemazione in hotel 4 stelle in mezza pensione, personalizzabile su richiesta.',
    highlights: [
      '28 tappe selezionate in 10 distretti in 7 giorni con autista privato e chilometraggio illimitato',
      'Safari Wilpattu, Sigiriya, Tempio del Dente a Kandy e viste in treno sulle colline di Ella',
      'Safari leopardi ed elefanti a Yala in jeep 4x4 privata',
      'Mezza pensione in hotel 4 stelle selezionati',
      'Extra Sundown: cucina villaggiana, ayurveda, tramonto a Pidurangala e mangrovie del fiume Madu',
    ],
    whoIsFor:
      'Ideale per chi visita l’isola per la prima volta, famiglie con adolescenti e coppie che vogliono cultura, fauna e paesaggi in una settimana senza guidare. Fitness moderata per le salite; ritmo adattabile per anziani.',
    bestTimeNote:
      'Tutto l’anno; dicembre to aprile offre il clima piu secco sulla costa ovest e sud e accesso affidabile a Yala. Maggio to settembre conviene al Triangolo culturale; adattiamo i parchi safari stagionalmente.',
    faq: [
      {
        q: 'Quante notti in hotel sono incluse nel tour di 7 giorni?',
        a: 'Il pacchetto copre 6 notti in hotel 4 stelle in mezza pensione. Alloggio e pasti dell’autista sono inclusi; ingressi e pranzi restano a carico del viaggiatore.',
      },
      {
        q: 'Possiamo personalizzare il safari Wilpattu o sostituire Yala con un altro parco?',
        a: 'Si. Gli itinerari fauna variano per stagione Minneriya/Kaudulla o Udawalawe sono alternative. Comunicate le priorita alla prenotazione.',
      },
      {
        q: 'Il treno panoramico a Ella e incluso nel prezzo?',
        a: 'Il tratto iconico fa parte del programma; i biglietti non sono nel prezzo base, ma la guida organizza classe e orario migliori.',
      },
      {
        q: 'Quale livello di forma per Sigiriya e Little Adam’s Peak?',
        a: 'Sigiriya richiede circa 1.000 gradini; Little Adam’s Peak e una camminata piu leggera di 45 minuti. Pidurangala al tramonto e un’opzione piu facile.',
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
        title: 'Wilpattu  Sigiriya',
        activities: [
          {
            type: 'Esperienza rurale',
            title: 'Villaggio e lago di Hiriwadunna',
            description:
              'Vivi l’autentica vita rurale dello Sri Lanka a Hiriwadunna: passeggiata tra le risaie, giro su carro trainato da buoi e in canoa sul lago. Durante la lezione di cucina prepari piatti tradizionali con una famiglia locale, in pentole di terracotta sul fuoco a legna.',
          },
          {
            type: 'Safari',
            title: 'Safari in jeep a Kaudulla & Minneriya',
            description:
              'Goditi un safari in 4x4 a Kaudulla o Minneriya, in base alla stagione e agli spostamenti degli animali. Questi parchi sono famosi per i grandi branchi di elefanti; in stagione secca puoi assistere allo spettacolare «raduno degli elefanti».',
          },
          {
            type: 'Benessere',
            title: 'Ayurveda a Sigiriya  il lato benessere del viaggio',
            description:
              'Dopo una giornata attiva, rilassati con un massaggio ayurvedico agli oli di erbe in un centro tradizionale a Sigiriya, ideale per sciogliere i muscoli e ritrovare energia.',
          },
          {
            type: 'Punto panoramico',
            title: 'Tramonto alla roccia di Pidurangala',
            description:
              'In serata sali sulla roccia di Pidurangala per uno dei tramonti piu belli dello Sri Lanka, con vista a 360° sulla roccia del Leone di Sigiriya e sulla giungla. Salita di circa 20 to 30 minuti.',
          },
          {
            type: 'Sistemazione',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Pernottamento alla Fresco Water Villa (o simile).',
            extra: ['Colazione e cena incluse'],
          },
        ],
      },
      {
        title: 'Da Sigiriya a Kandy',
        activities: [
          {
            type: 'Sito UNESCO',
            title: 'Fortezza della Roccia del Leone di Sigiriya',
            description:
              'Visita la fortezza di Sigiriya, patrimonio UNESCO costruita nel V secolo dal re Kashyapa. Attraversa i giardini reali, passa davanti ai celebri affreschi e al muro a specchio, poi raggiungi la cima con le rovine del palazzo e una vista panoramica.',
          },
          {
            type: 'Sito UNESCO',
            title: 'Giardino delle spezie di Matale',
            description:
              'In un giardino delle spezie a Matale scopri come si coltivano cannella, cardamomo, pepe, vaniglia e cacao e i loro usi ayurvedici, con degustazione di te alle spezie.',
          },
          {
            type: 'Sito UNESCO',
            title: 'Museo delle pietre preziose',
            description:
              'Al museo gemmologico di Kandy scopri le famose pietre di Ceylon e come vengono estratte, tagliate e lucidate.',
          },
          {
            type: 'Sito UNESCO',
            title: 'Tempio del Sacro Dente',
            description:
              'Visita il Tempio del Dente a Kandy, uno dei luoghi buddhisti piu sacri e patrimonio UNESCO. Ammira l’architettura kandyana in riva al lago; all’ora della puja assisti a tamburi e rituali devozionali.',
          },
          {
            type: 'Spettacolo culturale',
            title: 'Spettacolo culturale al Kandy Lake Club',
            description:
              'In serata assisti a uno spettacolo di danza kandyana: costumi colorati, tamburi, danze con maschere e camminata sul fuoco  una splendida chiusura culturale della giornata.',
          },
          {
            type: 'Punto panoramico',
            title: 'Punto panoramico di Kandy',
            description:
              'Dal belvedere sopra il lago di Kandy goditi una vista panoramica sulla citta, sul Tempio del Dente e sulle colline verdi  una sosta fotografica ideale.',
          },
          {
            type: 'Sistemazione',
            title: 'Hotel Topaz  Kandy',
            description: 'Pernottamento all’Hotel Topaz (o simile).',
            extra: ['Colazione e cena incluse', 'Hotel 4 stelle'],
          },
        ],
      },
      {
        title: 'Da Kandy a Ella',
        activities: [
          {
            type: 'Visita culturale',
            title: 'Torre di Ambuluwawa',
            description:
              'Visita la torre di Ambuluwawa vicino a Gampola, santuario multireligioso su una collina. Sali la scala a spirale fino in cima per una vista mozzafiato a 360° sugli altopiani centrali.',
          },
          {
            type: 'Sito UNESCO',
            title: 'Visita a una fabbrica di te',
            description:
              'In una fabbrica di te sugli altopiani scopri come nasce il celebre te di Ceylon  dalla raccolta all’essiccazione  e gusta una tazza appena preparata con vista sulle montagne.',
          },
          {
            type: 'Spettacolo culturale',
            title: 'Cascata di Ramboda',
            description:
              'Sosta alla cascata di Ramboda (circa 109 m) vicino a Pussellawa, tra piantagioni di te e verde rigoglioso  una pausa panoramica rinfrescante negli altopiani.',
          },
          {
            type: 'Tour della citta',
            title: 'Nine Arch Bridge',
            description:
              'Visita il celebre Nine Arch Bridge di Ella, costruito interamente in pietra e mattoni, tra piantagioni di te e giungla. Con un po’ di fortuna un treno lo attraversa  uno scatto perfetto.',
          },
          {
            type: 'Tour della citta',
            title: 'Tour serale di Ella',
            description:
              'Una breve visita dell’incantevole cittadina di Ella, con vista sull’Ella Gap e sulle valli circostanti  atmosfera tranquilla e tante occasioni fotografiche.',
          },
          {
            type: 'Sistemazione',
            title: 'La Ella Breeze Hotel',
            description: 'Pernottamento al La Ella Breeze Hotel o simile, in mezza pensione.',
            extra: ['Hotel 4 stelle (premium)', 'Colazione', 'Bagno privato', 'Cena'],
          },
        ],
      },
      {
        title: 'Ella  Mirissa',
        activities: [
          {
            type: 'Viaggio in treno',
            title: 'Viaggio in treno a Ella',
            description:
              'Vivi il celebre viaggio in treno di Ella, uno dei piu belli al mondo  tra piantagioni di te, montagne nebbiose, gallerie e cascate, con panorami spettacolari.',
          },
          {
            type: 'Punto panoramico',
            title: 'Little Adam’s Peak',
            description:
              'Un’escursione facile di 30 to 45 minuti tra i campi di te porta al Little Adam’s Peak, con vista panoramica sull’Ella Gap  adatta a quasi tutti.',
          },
          {
            type: 'Cascata',
            title: 'Cascate di Ravana',
            description:
              'Sosta alle ampie cascate di Ravana vicino a Ella, legate secondo la leggenda al Ramayana  una pausa rinfrescante con l’aria pura di montagna.',
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
        title: 'Mirissa  Avvistamento balene & attivita acquatiche',
        activities: [
          {
            type: 'Avvistamento balene',
            title: 'Avvistamento di balene e delfini a Mirissa',
            description:
              'Parti per un’indimenticabile escursione di avvistamento di balene e delfini a Mirissa, uno dei migliori spot al mondo. Sull’Oceano Indiano cerca balenottere azzurre, capodogli e branchi di delfini giocosi.',
          },
          {
            type: 'Snorkeling',
            title: 'Snorkeling a Mirissa',
            description:
              'Scopri con lo snorkeling le acque cristalline di Mirissa, i coralli colorati e i pesci tropicali della barriera.',
          },
          {
            type: 'Snorkeling',
            title: 'Snorkeling con le tartarughe',
            description:
              'Nuota accanto alle eleganti tartarughe verdi ed embricate nelle acque calde di Mirissa  un incontro con la natura indimenticabile.',
          },
          {
            type: 'Attivita acquatica',
            title: 'Kayak al tramonto',
            description:
              'Pagaia lungo la costa in una tranquilla uscita in kayak, mentre il cielo si tinge di arancione, rosa e oro  una delle attivita acquatiche piu belle del sud.',
          },
          {
            type: 'Gita in barca',
            title: 'Gita in barca al tramonto',
            description:
              'Una rilassante gita in barca al tramonto con vista panoramica sulla costa sud  romantica e adatta alle famiglie.',
          },
          {
            type: 'Sistemazione',
            title: 'Mandara Resort Hotel',
            description:
              'Comodo pernottamento al Mandara Resort Hotel o hotel fronte spiaggia simile a Mirissa, in mezza pensione (colazione e cena).',
            extra: ['Hotel 4 stelle (premium)', 'Colazione inclusa', 'Bagno privato', 'Cena inclusa'],
          },
        ],
      },
      {
        title: 'Attivita acquatiche & partenza',
        activities: [
          {
            type: 'Natura & cultura',
            title: 'Coconut Tree Hill a Mirissa',
            description:
              'Visita Coconut Tree Hill, uno dei punti panoramici costieri piu fotografati dello Sri Lanka: una scogliera orlata di palme con vista sull’oceano turchese.',
          },
          {
            type: 'Conservazione',
            title: 'Centro tartarughe di Koggala',
            description:
              'Visita il centro tartarughe di Koggala, dove le tartarughe marine minacciate vengono protette e riabilitate, e scopri gli sforzi di conservazione marina dello Sri Lanka.',
          },
          {
            type: 'Safari in barca',
            title: 'Safari in barca sul fiume Madu',
            description:
              'Un safari in barca tra le mangrovie e le piccole isole del fiume Madu, con visita a una piantagione tradizionale di cannella.',
          },
          {
            type: 'Partenza',
            title: 'Transfer di partenza',
          },
        ],
      },
    ],
  },

  es: {
    title: 'Circuito por Sri Lanka  7 dias',
    description:
      'Descubre la belleza de Sri Lanka en un circuito privado de 7 dias con aventura, cultura y relax.',
    duration: '7 dias',
    persons: '20 personas',
    tourType: 'Circuito',
    overview:
      'Organizamos para ti las vacaciones perfectas en la «isla paraiso», Sri Lanka. Nuestro paquete de 7 dias (6 noches) reune todas las atracciones famosas y experiencias singulares propias de Sundown Tours, con alojamiento en los mejores hoteles de 4 estrellas en media pension. Safari en Yala, Sigiriya, el Nine Arches Bridge de Ella, el tren de Ella, el Templo del Diente en Kandy, la cascada de Ramboda, la subida al Little Adam’s Peak, Nuwara Eliya, el Fuerte de Galle y un paseo en barco por el rio Bentota son solo algunas. En total visitaras 28 lugares en 10 distritos, con transporte privado.',
    includes: PACKAGE_INCLUDES.es,
    excludes: PACKAGE_EXCLUDES.es,
    seoIntro:
      'Un tour de siete dias por Sri Lanka es el itinerario de referencia para quienes visitan la isla por primera vez. En una semana se recorre el Triangulo Cultural, las montanas del te, territorio de leopardos y la costa sur, sin desplazamientos innecesarios. Sundown Tours diseno esta ruta privada para parejas, familias y grupos pequenos: safari en Wilpattu, vida rural y reuniones de elefantes cerca de Sigiriya, ascenso al Lion Rock y rituales en el Templo del Diente en Kandy, tren panoramico a Ella, Nine Arches Bridge y Little Adam\'s Peak, safari en jeep en Yala, Fuerte de Galle UNESCO y experiencias fluviales antes de la salida. Su chofer de habla inglesa conduce un vehiculo privado con aire acondicionado y kilometraje ilimitado. Alojamiento en hoteles 4 estrellas en media pension, adaptable bajo peticion.',
    highlights: [
      '28 paradas seleccionadas en 10 distritos en 7 dias con chofer privado y kilometraje ilimitado',
      'Safari Wilpattu, Sigiriya, Templo del Diente en Kandy y vistas en tren en las colinas de Ella',
      'Safari de leopardos y elefantes en Yala en jeep 4x4 privado',
      'Media pension en hoteles 4 estrellas cuidadosamente elegidos',
      'Extras Sundown: cocina village, ayurveda, atardecer en Pidurangala y manglares del rio Madu',
    ],
    whoIsFor:
      'Ideal para primerizos, familias con adolescentes y parejas que buscan cultura, fauna y paisajes en una semana sin conducir. Fitness moderada para subidas; ritmo adaptable para mayores.',
    bestTimeNote:
      'Todo el ano; diciembre to abril ofrece el clima mas seco en las costas oeste y sur y acceso fiable a Yala. Mayo to septiembre conviene al Triangulo Cultural; adaptamos parques safari segun temporada.',
    faq: [
      {
        q: 'Cuantas noches de hotel incluye el tour de 7 dias?',
        a: 'El paquete cubre 6 noches en hoteles 4 estrellas en media pension. Alojamiento y comidas del chofer incluidos; entradas y almuerzos corren por su cuenta.',
      },
      {
        q: 'Podemos personalizar el safari Wilpattu o cambiar Yala por otro parque?',
        a: 'Si. Las rutas de fauna varian por temporada Minneriya/Kaudulla o Udawalawe son alternativas. Indique sus prioridades al reservar.',
      },
      {
        q: 'El tren panoramico en Ella esta incluido en el precio?',
        a: 'El tramo iconico forma parte del itinerario; los billetes no estan en el precio base, pero la guia organiza la mejor clase y horario.',
      },
      {
        q: 'Que nivel de forma se necesita para Sigiriya y Little Adam\'s Peak?',
        a: 'Sigiriya implica unos 1.000 escalones; Little Adam\'s Peak es una caminata mas suave de 45 minutos. Pidurangala al atardecer es una opcion mas ligera.',
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
        title: 'Wilpattu  Sigiriya',
        activities: [
          {
            type: 'Experiencia rural',
            title: 'Aldea y lago de Hiriwadunna',
            description:
              'Vive la autentica vida rural de Sri Lanka en Hiriwadunna: paseo entre arrozales, viaje en carro de bueyes y en canoa por el lago. En la clase de cocina preparas platos tradicionales con una familia local, en ollas de barro al fuego de lena.',
          },
          {
            type: 'Safari',
            title: 'Safari en jeep en Kaudulla y Minneriya',
            description:
              'Disfruta de un safari en 4x4 en Kaudulla o Minneriya segun la temporada y el movimiento de los animales. Estos parques son famosos por sus grandes manadas de elefantes; en la estacion seca puedes ver la espectacular «reunion de elefantes».',
          },
          {
            type: 'Bienestar',
            title: 'Ayurveda en Sigiriya  el lado del bienestar',
            description:
              'Tras un dia activo, relajate con un masaje ayurvedico con aceites de hierbas en un centro tradicional de Sigiriya, ideal para aliviar los musculos y recuperar energia.',
          },
          {
            type: 'Mirador',
            title: 'Atardecer en la roca de Pidurangala',
            description:
              'Por la tarde sube a la roca de Pidurangala para uno de los atardeceres mas bonitos de Sri Lanka, con vista de 360° a la roca del Leon de Sigiriya y la jungla. Subida de unos 20 to 30 minutos.',
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
        title: 'De Sigiriya a Kandy',
        activities: [
          {
            type: 'Sitio UNESCO',
            title: 'Fortaleza de la Roca del Leon de Sigiriya',
            description:
              'Visita la fortaleza de Sigiriya, Patrimonio de la Humanidad construida en el siglo V por el rey Kashyapa. Cruza los jardines reales, pasa junto a los famosos frescos y el muro espejo, y llega a la cima con las ruinas del palacio y vistas panoramicas.',
          },
          {
            type: 'Sitio UNESCO',
            title: 'Jardin de especias de Matale',
            description:
              'En un jardin de especias en Matale descubre como se cultivan la canela, el cardamomo, la pimienta, la vainilla y el cacao y sus usos ayurvedicos, con una degustacion de te de especias.',
          },
          {
            type: 'Sitio UNESCO',
            title: 'Museo de piedras preciosas',
            description:
              'En el museo gemologico de Kandy descubre las famosas gemas de Ceilan y como se extraen, tallan y pulen.',
          },
          {
            type: 'Sitio UNESCO',
            title: 'Templo del Diente Sagrado',
            description:
              'Visita el Templo del Diente en Kandy, uno de los lugares budistas mas sagrados y Patrimonio de la Humanidad. Admira la arquitectura kandiana junto al lago; a la hora de la puja veras tambores y rituales devocionales.',
          },
          {
            type: 'Espectaculo cultural',
            title: 'Espectaculo cultural del Kandy Lake Club',
            description:
              'Por la noche asiste a un espectaculo de danza kandiana: trajes coloridos, tambores, danzas con mascaras y caminata sobre fuego  un gran cierre cultural del dia.',
          },
          {
            type: 'Mirador',
            title: 'Mirador de Kandy',
            description:
              'Desde el mirador sobre el lago de Kandy disfruta de una vista panoramica de la ciudad, el Templo del Diente y las colinas verdes  una parada fotografica ideal.',
          },
          {
            type: 'Alojamiento',
            title: 'Hotel Topaz  Kandy',
            description: 'Noche en el Hotel Topaz (o similar).',
            extra: ['Desayuno y cena incluidos', 'Hotel 4 estrellas'],
          },
        ],
      },
      {
        title: 'De Kandy a Ella',
        activities: [
          {
            type: 'Visita cultural',
            title: 'Torre de Ambuluwawa',
            description:
              'Visita la torre de Ambuluwawa cerca de Gampola, un santuario multirreligioso en una colina. Sube la escalera de caracol hasta la cima para una impresionante vista de 360° de las tierras altas centrales.',
          },
          {
            type: 'Sitio UNESCO',
            title: 'Visita a una fabrica de te',
            description:
              'En una fabrica de te de las tierras altas descubre como se elabora el famoso te de Ceilan  de la recoleccion al secado  y prueba una taza recien hecha frente a las montanas.',
          },
          {
            type: 'Espectaculo cultural',
            title: 'Cascada de Ramboda',
            description:
              'Parada en la cascada de Ramboda (unos 109 m) cerca de Pussellawa, entre plantaciones de te y vegetacion  una pausa panoramica refrescante en las tierras altas.',
          },
          {
            type: 'Tour por la ciudad',
            title: 'Nine Arch Bridge',
            description:
              'Visita el famoso Nine Arch Bridge de Ella, construido totalmente en piedra y ladrillo, entre plantaciones de te y jungla. Con suerte, un tren lo cruza  una foto perfecta.',
          },
          {
            type: 'Tour por la ciudad',
            title: 'Tour nocturno por Ella',
            description:
              'Una breve visita del encantador pueblo de Ella, con vistas al Ella Gap y los valles cercanos  ambiente tranquilo y muchas oportunidades para fotos.',
          },
          {
            type: 'Alojamiento',
            title: 'La Ella Breeze Hotel',
            description: 'Noche en La Ella Breeze Hotel o similar, en media pension.',
            extra: ['Hotel 4 estrellas (premium)', 'Desayuno', 'Bano privado', 'Cena'],
          },
        ],
      },
      {
        title: 'Ella  Mirissa',
        activities: [
          {
            type: 'Viaje en tren',
            title: 'Viaje en tren por Ella',
            description:
              'Vive el famoso viaje en tren de Ella, uno de los mas bonitos del mundo  entre plantaciones de te, montanas neblinosas, tuneles y cascadas, con panoramicas espectaculares.',
          },
          {
            type: 'Mirador',
            title: 'Little Adam’s Peak',
            description:
              'Una caminata facil de 30 to 45 minutos entre campos de te lleva al Little Adam’s Peak, con vista panoramica del Ella Gap  apta para casi todos.',
          },
          {
            type: 'Cascada',
            title: 'Cascadas de Ravana',
            description:
              'Parada en las anchas cascadas de Ravana cerca de Ella, ligadas segun la leyenda al Ramayana  una pausa refrescante con aire puro de montana.',
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
              'Sal a un inolvidable avistamiento de ballenas y delfines en Mirissa, uno de los mejores lugares del mundo. En el oceano Indico busca ballenas azules, cachalotes y bancos de delfines juguetones.',
          },
          {
            type: 'Snorkel',
            title: 'Snorkel en Mirissa',
            description:
              'Descubre con snorkel las aguas cristalinas de Mirissa, sus corales coloridos y sus peces tropicales.',
          },
          {
            type: 'Snorkel',
            title: 'Snorkel con tortugas',
            description:
              'Nada junto a las elegantes tortugas verdes y carey en las calidas aguas de Mirissa  un encuentro con la naturaleza inolvidable.',
          },
          {
            type: 'Actividad acuatica',
            title: 'Kayak al atardecer',
            description:
              'Rema por la costa en una tranquila salida en kayak mientras el cielo se tine de naranja, rosa y dorado  una de las actividades acuaticas mas bonitas del sur.',
          },
          {
            type: 'Paseo en barco',
            title: 'Paseo en barco al atardecer',
            description:
              'Un relajante paseo en barco al atardecer con vista panoramica de la costa sur  romantico y familiar.',
          },
          {
            type: 'Alojamiento',
            title: 'Mandara Resort Hotel',
            description:
              'Comoda noche en el Mandara Resort Hotel o un hotel frente al mar similar en Mirissa, en media pension (desayuno y cena).',
            extra: ['Hotel 4 estrellas (premium)', 'Desayuno incluido', 'Bano privado', 'Cena incluida'],
          },
        ],
      },
      {
        title: 'Actividades acuaticas y salida',
        activities: [
          {
            type: 'Naturaleza y cultura',
            title: 'Coconut Tree Hill en Mirissa',
            description:
              'Visita Coconut Tree Hill, uno de los miradores costeros mas fotografiados de Sri Lanka: un acantilado bordeado de cocoteros con vista al oceano turquesa.',
          },
          {
            type: 'Conservacion',
            title: 'Criadero de tortugas de Koggala',
            description:
              'Visita el criadero de tortugas de Koggala, donde se protegen y rehabilitan tortugas marinas amenazadas, y conoce los esfuerzos de conservacion marina de Sri Lanka.',
          },
          {
            type: 'Safari en barco',
            title: 'Safari en barco por el rio Madu',
            description:
              'Un safari en barco entre los manglares y las pequenas islas del rio Madu, con visita a una plantacion tradicional de canela.',
          },
          {
            type: 'Salida',
            title: 'Traslado de salida',
          },
        ],
      },
    ],
  },

  pl: {
    title: 'Wycieczka po Sri Lance  7 dni',
    description:
      'Odkryj piekno Sri Lanki podczas 7 dniowej prywatnej wycieczki pelnej przygod, kultury i relaksu.',
    duration: '7 dni',
    persons: '20 osob',
    tourType: 'Wycieczka objazdowa',
    overview:
      'Organizujemy dla Ciebie idealny urlop na „rajskiej wyspie" Sri Lance. Nasz 7 dniowy pakiet (6 nocy) laczy wszystkie slynne atrakcje z rzadkimi przezyciami typowymi dla Sundown Tours, z zakwaterowaniem w najlepszych 4 gwiazdkowych hotelach w opcji HB. Safari w Yali, Sigiriya, most Nine Arches w Elli, przejazd pociagiem do Elli, Swiatynia Zeba w Kandy, wodospad Ramboda, wejscie na Little Adam’s Peak, Nuwara Eliya, Fort Galle i rejs po rzece Bentota to tylko niektore z nich. Lacznie odwiedzisz 28 atrakcji w 10 dystryktach, korzystajac z prywatnego transportu.',
    includes: PACKAGE_INCLUDES.pl,
    excludes: PACKAGE_EXCLUDES.pl,
    seoIntro:
      'Siedmiodniowa wycieczka po Sri Lance to klasyczny program dla osob odwiedzajacych wyspe po raz pierwszy. W tydzien przemierzysz Trojkat Kulturowy, mgliste regiony herbaciane, terytoria lampartow i poludniowe wybrzeze bez zbednych objazdow. Sundown Tours stworzylo te prywatna trase dla par, rodzin i malych grup: safari Wilpattu, zycie wioski i zgromadzenia sloni przy Sigiriya, wspinaczka na Lion Rock i rytualy w Swiatyni Zeba w Kandy, panoramiczny pociag do Ella, Nine Arches Bridge i Little Adam\'s Peak, safari jeepowe w Yala, twierdza Galle UNESCO i doswiadczenia rzeczne przed wyjazdem. Anglojezyczny kierowca prowadzi klimatyzowany pojazd prywatny z nieograniczonym przebiegiem. Zakwaterowanie w hotelach 4 gwiazdkowych w formule half  board, dostosowywane na zyczenie.',
    highlights: [
      '28 wybranych przystankow w 10 dystryktach w 7 dni z prywatnym kierowca i nieograniczonym przebiegiem',
      'Safari Wilpattu, Sigiriya, Swiatynia Zeba w Kandy i widoki z pociagu w regionie Ella',
      'Safari po lampartach i sloniach w Yala we wlasnym jeepie 4x4',
      'half  board w starannie dobranych hotelach 4 gwiazdkowych',
      'Dodatki Sundown: gotowanie wiejskie, ajurweda, zachod slonca na Pidurangala i namorzyny rzeki Madu',
    ],
    whoIsFor:
      'Idealne dla debiutantow, rodzin z nastolatkami i par pragnacych kultury, przyrody i krajobrazow w tydzien bez samodzielnej jazdy. Umiarkowana kondycja na wspinaczki; tempo dostosowujemy dla seniorow.',
    bestTimeNote:
      'Caly rok; grudzien–kwiecien to najsuchsza pogoda na wybrzezach zachodnim i poludniowym oraz pewny dostep do Yala. Maj to wrzesien pasuje do Trojkata Kulturowego; parki safari dobieramy sezonowo.',
    faq: [
      {
        q: 'Ile noclegow w hotelu obejmuje 7 dniowa wycieczka?',
        a: 'Pakiet obejmuje 6 nocy w hotelach 4 gwiazdkowych na half  board. Zakwaterowanie i posilki kierowcy w cenie; bilety wstepu i lunche we wlasnym zakresie.',
      },
      {
        q: 'Czy mozna dostosowac safari Wilpattu lub zamienic Yala na inny park?',
        a: 'Tak. Trasy wildlife zaleza od sezonu Minneriya/Kaudulla lub Udawalawe to alternatywy. Podaj priorytety przy rezerwacji.',
      },
      {
        q: 'Czy panoramiczny pociag w Ella jest w cenie?',
        a: 'Ikoniczny odcinek jest w programie; bilety nie wchodza w cene bazowa, ale przewodnik organizuje najlepsza klase i termin.',
      },
      {
        q: 'Jaka kondycja jest potrzebna na Sigiriya i Little Adam\'s Peak?',
        a: 'Sigiriya to ok. 1000 stopni; Little Adam\'s Peak to lagodniejszy 45 minutowy spacer. Pidurangala o zachodzie slonca to lzejsza opcja.',
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
        title: 'Wilpattu  Sigiriya',
        activities: [
          {
            type: 'Doswiadczenie wiejskie',
            title: 'Wioska i jezioro Hiriwadunna',
            description:
              'Poznaj autentyczne wiejskie zycie Sri Lanki w Hiriwadunna: spacer wsrod pol ryzowych, przejazdzka wozem zaprzezonym w woly i kajakiem po jeziorze. Podczas lekcji gotowania przygotujesz z lokalna rodzina tradycyjne dania w glinianych garnkach na ogniu.',
          },
          {
            type: 'Safari',
            title: 'Safari jeepem w Kaudulli i Minneriyi',
            description:
              'Ciesz sie safari 4x4 w Kaudulli lub Minneriyi, zaleznie od sezonu i przemieszczania sie zwierzat. Parki slyna z duzych stad sloni; w porze suchej mozesz zobaczyc spektakularne „zgromadzenie sloni".',
          },
          {
            type: 'Wellness',
            title: 'Ajurweda w Sigiriya  zdrowa strona podrozy',
            description:
              'Po aktywnym dniu zrelaksuj sie przy ajurwedyjskim masazu olejkami ziolowymi w tradycyjnym centrum w Sigiriya  idealnym na rozluznienie miesni i regeneracje.',
          },
          {
            type: 'Punkt widokowy',
            title: 'Zachod slonca na skale Pidurangala',
            description:
              'Wieczorem wejdz na skale Pidurangala, by zobaczyc jeden z najpiekniejszych zachodow slonca na Sri Lance, z widokiem 360° na Lwia Skale Sigiriya i dzungle. Wejscie trwa okolo 20 to 30 minut.',
          },
          {
            type: 'Nocleg',
            title: 'Fresco Water Villa  Sigiriya',
            description: 'Nocleg we Fresco Water Villa (lub podobnym).',
            extra: ['Sniadanie i kolacja w cenie'],
          },
        ],
      },
      {
        title: 'Sigiriya do Kandy',
        activities: [
          {
            type: 'Obiekt UNESCO',
            title: 'Twierdza Lwiej Skaly Sigiriya',
            description:
              'Zwiedz twierdze Sigiriya, obiekt UNESCO zbudowany w V wieku przez krola Kashyape. Przejdz przez krolewskie ogrody, minij slynne freski i lustrzana sciane, a na szczycie zobacz ruiny palacu i panorame okolicy.',
          },
          {
            type: 'Obiekt UNESCO',
            title: 'Ogrod przypraw w Matale',
            description:
              'W ogrodzie przypraw w Matale zobaczysz, jak uprawia sie cynamon, kardamon, pieprz, wanilie i kakao, oraz poznasz ich zastosowania ajurwedyjskie, z degustacja herbaty przyprawowej.',
          },
          {
            type: 'Obiekt UNESCO',
            title: 'Muzeum kamieni szlachetnych',
            description:
              'W muzeum gemmologicznym w Kandy poznaj slynne cejlonskie kamienie szlachetne i sposob ich wydobycia, szlifowania i polerowania.',
          },
          {
            type: 'Obiekt UNESCO',
            title: 'Swiatynia Zeba Buddy',
            description:
              'Odwiedz Swiatynie Zeba w Kandy, jedno z najswietszych miejsc buddyzmu i obiekt UNESCO. Podziwiaj architekture kandyjska nad jeziorem; w porze puja uslyszysz bebny i obrzedy modlitewne.',
          },
          {
            type: 'Pokaz kultury',
            title: 'Pokaz kultury w Kandy Lake Club',
            description:
              'Wieczorem obejrzyj pokaz tanca kandyjskiego: barwne stroje, bebny, tance w maskach i chodzenie po ogniu  piekne kulturalne zwienczenie dnia.',
          },
          {
            type: 'Punkt widokowy',
            title: 'Punkt widokowy Kandy',
            description:
              'Z punktu widokowego nad jeziorem Kandy podziwiaj panorame miasta, Swiatyni Zeba i zielonych wzgorz  idealne miejsce na zdjecia.',
          },
          {
            type: 'Nocleg',
            title: 'Hotel Topaz  Kandy',
            description: 'Nocleg w Hotelu Topaz (lub podobnym).',
            extra: ['Sniadanie i kolacja w cenie', 'Hotel 4 gwiazdki'],
          },
        ],
      },
      {
        title: 'Kandy do Elli',
        activities: [
          {
            type: 'Wizyta kulturalna',
            title: 'Wieza Ambuluwawa',
            description:
              'Odwiedz wieze Ambuluwawa kolo Gampoli, wielowyznaniowe sanktuarium na wzgorzu. Wejdz spiralnymi schodami na szczyt, by zobaczyc zapierajaca dech panorame 360° centralnych wyzyn.',
          },
          {
            type: 'Obiekt UNESCO',
            title: 'Wizyta w fabryce herbaty',
            description:
              'W fabryce herbaty na wyzynach zobaczysz, jak powstaje slynna herbata cejlonska  od zbioru po suszenie  i skosztujesz swiezo zaparzonej filizanki z widokiem na gory.',
          },
          {
            type: 'Pokaz kultury',
            title: 'Wodospad Ramboda',
            description:
              'Postoj przy wodospadzie Ramboda (ok. 109 m) kolo Pussellawy, wsrod plantacji herbaty i bujnej zieleni  odswiezajaca panoramiczna przerwa na wyzynach.',
          },
          {
            type: 'Zwiedzanie miasta',
            title: 'Nine Arch Bridge',
            description:
              'Zobacz slynny most Nine Arch w Elli, zbudowany w calosci z kamienia i cegly, wsrod plantacji herbaty i dzungli. Przy odrobinie szczescia przejedzie przez niego pociag  idealne ujecie.',
          },
          {
            type: 'Zwiedzanie miasta',
            title: 'Wieczorne zwiedzanie Elli',
            description:
              'Krotkie zwiedzanie uroczego gorskiego miasteczka Ella, z widokiem na Ella Gap i okoliczne doliny  spokojna atmosfera i wiele okazji do zdjec.',
          },
          {
            type: 'Nocleg',
            title: 'La Ella Breeze Hotel',
            description: 'Nocleg w La Ella Breeze Hotel lub podobnym, w opcji HB.',
            extra: ['Hotel 4 gwiazdki (premium)', 'Sniadanie', 'Prywatna lazienka', 'Kolacja'],
          },
        ],
      },
      {
        title: 'Ella  Mirissa',
        activities: [
          {
            type: 'Przejazd pociagiem',
            title: 'Przejazd pociagiem przez Elle',
            description:
              'Przezyj slynny przejazd pociagiem przez Elle, jeden z najpiekniejszych na swiecie  wsrod plantacji herbaty, mglistych gor, tuneli i wodospadow, z zapierajacymi dech widokami.',
          },
          {
            type: 'Punkt widokowy',
            title: 'Little Adam’s Peak',
            description:
              'Latwa wedrowka 30 to 45 minut wsrod pol herbacianych prowadzi na Little Adam’s Peak, z panorama Ella Gap  odpowiednia niemal dla wszystkich.',
          },
          {
            type: 'Wodospad',
            title: 'Wodospady Ravana',
            description:
              'Postoj przy szerokich wodospadach Ravana kolo Elli, wiazanych wedlug legendy z Ramajana  odswiezajaca przerwa z czystym gorskim powietrzem.',
          },
          {
            type: 'Nocleg',
            title: 'Mandara Resort Hotel',
            description: 'Nocleg w Mirissie.',
            extra: ['Sniadanie i kolacja w cenie', 'Hotel 4 gwiazdki'],
          },
        ],
      },
      {
        title: 'Mirissa  Obserwacja wielorybow i aktywnosci wodne',
        activities: [
          {
            type: 'Obserwacja wielorybow',
            title: 'Obserwacja wielorybow i delfinow w Mirissie',
            description:
              'Wyrusz na niezapomniana obserwacje wielorybow i delfinow w Mirissie, jednym z najlepszych miejsc na swiecie. Na Oceanie Indyjskim wypatruj pletwali blekitnych, kaszalotow i stad figlarnych delfinow.',
          },
          {
            type: 'Snorkeling',
            title: 'Snorkeling w Mirissie',
            description:
              'Odkryj podczas snorkelingu krystaliczne wody Mirissy, kolorowe koralowce i tropikalne ryby rafowe.',
          },
          {
            type: 'Snorkeling',
            title: 'Snorkeling z zolwiami',
            description:
              'Poplywaj obok pelnych gracji zolwi zielonych i szylkretowych w cieplych wodach Mirissy  niezapomniane spotkanie z natura.',
          },
          {
            type: 'Aktywnosc wodna',
            title: 'Kajak o zachodzie slonca',
            description:
              'Wiosluj wzdluz wybrzeza podczas spokojnej wyprawy kajakiem, gdy niebo mieni sie pomaranczem, rozem i zlotem  jedna z najpiekniejszych aktywnosci wodnych na poludniu.',
          },
          {
            type: 'Rejs lodzia',
            title: 'Rejs lodzia o zachodzie slonca',
            description:
              'Relaksujacy rejs lodzia o zachodzie slonca z panorama poludniowego wybrzeza  romantyczny i przyjazny rodzinom.',
          },
          {
            type: 'Nocleg',
            title: 'Mandara Resort Hotel',
            description:
              'Wygodny nocleg w Mandara Resort Hotel lub podobnym hotelu przy plazy w Mirissie, w opcji HB (sniadanie i kolacja).',
            extra: ['Hotel 4 gwiazdki (premium)', 'Sniadanie w cenie', 'Prywatna lazienka', 'Kolacja w cenie'],
          },
        ],
      },
      {
        title: 'Aktywnosci wodne i wylot',
        activities: [
          {
            type: 'Natura i kultura',
            title: 'Coconut Tree Hill w Mirissie',
            description:
              'Odwiedz Coconut Tree Hill, jeden z najczesciej fotografowanych punktow widokowych na wybrzezu Sri Lanki: klif obsadzony palmami kokosowymi z widokiem na turkusowy ocean.',
          },
          {
            type: 'Ochrona przyrody',
            title: 'Wylegarnia zolwi w Koggali',
            description:
              'Odwiedz wylegarnie zolwi w Koggali, gdzie chroni sie i rehabilituje zagrozone zolwie morskie, i poznaj wysilki Sri Lanki na rzecz ochrony morz.',
          },
          {
            type: 'Safari lodzia',
            title: 'Safari lodzia po rzece Madu',
            description:
              'Malownicze safari lodzia wsrod lasow namorzynowych i malych wysp rzeki Madu, z wizyta na tradycyjnej plantacji cynamonu.',
          },
          {
            type: 'Wylot',
            title: 'Transfer na wylot',
          },
        ],
      },
    ],
  },

  ru: {
    title: 'Тур по Шри Ланке  7 дней',
    description:
      'Откройте красоту Шри Ланки в 7 дневном частном туре, полном приключений, культуры и отдыха.',
    duration: '7 дней',
    persons: '20 человек',
    tourType: 'Обзорный тур',
    overview:
      'Мы организуем для вас идеальный отдых на «райском острове» Шри Ланка. Наш 7 дневный пакет (6 ночей) объединяет все знаменитые достопримечательности и редкие впечатления, характерные для Sundown Tours, с проживанием в лучших 4 звёздочных отелях на полупансионе. Сафари в Яле, Сигирия, мост Nine Arches в Элле, поездка на поезде в Эллу, Храм Зуба Будды в Канди, водопад Рамбода, восхождение на Little Adam’s Peak, Нувара Элия, форт Галле и прогулка по реке Бентота лишь некоторые из них. Всего вы посетите 28 достопримечательностей в 10 округах на частном транспорте.',
    includes: PACKAGE_INCLUDES.ru,
    excludes: PACKAGE_EXCLUDES.ru,
    seoIntro:
      'Семидневный тур по Шри Ланке классический маршрут для первого визита. За неделю вы проедете Культурный треугольник, чайные горы, земли леопардов и южное побережье без лишних объездов. Sundown Tours создала этот частный маршрут для пар, семей и небольших групп: сафари в Wilpattu, деревенская жизнь и слоновьи стада у Sigiriya, восхождение на Lion Rock и ритуалы в Храме Зуба в Kandy, живописный поезд в Ella, Nine Arches Bridge и Little Adam\'s Peak, сафари на джипе в Yala, фортец Galle UNESCO и речные впечатления перед отъездом. Англоговорящий шофёр ведёт кондиционированный автомобиль с неограниченным пробегом. Размещение в отелях 4★ на полупансионе, настраивается по запросу.',
    highlights: [
      '28 отобранных остановок в 10 округах за 7 дней с частным шофёром и неограниченным пробегом',
      'Safari Wilpattu, Sigiriya, Храм Зуба в Kandy и виды из поезда в горах Ella',
      'Сафари на леопардов и слонов в Yala на частном джипе 4x4',
      'Полупансион в тщательно отобранных отелях 4★',
      'Бонусы Sundown: деревенская кухня, аюрведа, закат на Pidurangala и мангровые заросли Madu',
    ],
    whoIsFor:
      'Идеально для первого визита, семей с подростками и пар, желающих культуру, природу и пейзажи за неделю без самостоятельного вождения. Умеренная физическая форма для подъёмов; темп адаптируем для пожилых.',
    bestTimeNote:
      'Круглый год; декабрь–апрель сухая погода на западном и южном побережьях и надёжный доступ к Yala. Май–сентябрь подходит для Культурного треугольника; парки сафари подбираем по сезону.',
    faq: [
      {
        q: 'Сколько ночей в отеле включено в 7 дневный тур?',
        a: 'Пакет включает 6 ночей в отелях 4★ на полупансионе. Проживание и питание водителя включены; входные билеты и обеды оплачиваются отдельно.',
      },
      {
        q: 'Можно ли изменить safari Wilpattu или заменить Yala другим парком?',
        a: 'Да. Маршруты зависят от сезона Minneriya/Kaudulla или Udawalawe как альтернативы. Укажите приоритеты при бронировании.',
      },
      {
        q: 'Включён ли живописный поезд в Ella в цену?',
        a: 'Знаменитый участок входит в программу; билеты не включены в базовую цену, но гид организует лучший класс и время.',
      },
      {
        q: 'Какая физическая форма нужна для Sigiriya и Little Adam\'s Peak?',
        a: 'Sigiriya около 1000 ступеней; Little Adam\'s Peak более лёгкая 45 минутная прогулка. Pidurangala на закате облегчённый вариант.',
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
        title: 'Вилпатту  Сигирия',
        activities: [
          {
            type: 'Сельское впечатление',
            title: 'Деревня и озеро Хиривадунна',
            description:
              'Познакомьтесь с настоящей сельской жизнью Шри Ланки в Хиривадунне: прогулка по рисовым полям, поездка на воловьей повозке и на каноэ по озеру. На кулинарном уроке вы приготовите с местной семьёй традиционные блюда в глиняных горшках на дровах.',
          },
          {
            type: 'Сафари',
            title: 'Сафари на джипе в Каудулле и Миннерии',
            description:
              'Насладитесь сафари на 4x4 в Каудулле или Миннерии в зависимости от сезона и передвижения животных. Парки известны крупными стадами слонов; в сухой сезон можно увидеть впечатляющее «собрание слонов».',
          },
          {
            type: 'Оздоровление',
            title: 'Аюрведа в Сигирии  здоровая сторона путешествия',
            description:
              'После активного дня расслабьтесь на аюрведическом массаже с травяными маслами в традиционном центре в Сигирии идеально для снятия напряжения и восстановления сил.',
          },
          {
            type: 'Смотровая площадка',
            title: 'Закат на скале Пидурангала',
            description:
              'Вечером поднимитесь на скалу Пидурангала ради одного из красивейших закатов Шри Ланки с обзором на 360° на Львиную скалу Сигирия и джунгли. Подъём занимает около 20 to 30 минут.',
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
        title: 'Сигирия  Канди',
        activities: [
          {
            type: 'Объект ЮНЕСКО',
            title: 'Крепость Львиная скала Сигирия',
            description:
              'Посетите крепость Сигирия, объект ЮНЕСКО, построенный в V веке царём Кашьяпой. Пройдите через королевские сады, мимо знаменитых фресок и зеркальной стены, а на вершине увидите руины дворца и панораму.',
          },
          {
            type: 'Объект ЮНЕСКО',
            title: 'Сад специй в Матале',
            description:
              'В саду специй в Матале вы увидите, как выращивают корицу, кардамон, перец, ваниль и какао, и узнаете об их аюрведическом применении, с дегустацией чая со специями.',
          },
          {
            type: 'Объект ЮНЕСКО',
            title: 'Музей драгоценных камней',
            description:
              'В геммологическом музее Канди познакомьтесь со знаменитыми цейлонскими камнями и узнайте, как их добывают, гранят и полируют.',
          },
          {
            type: 'Объект ЮНЕСКО',
            title: 'Храм Зуба Будды',
            description:
              'Посетите Храм Зуба в Канди одну из главных святынь буддизма и объект ЮНЕСКО. Полюбуйтесь кандийской архитектурой у озера; во время пуджи услышите барабаны и молитвенные ритуалы.',
          },
          {
            type: 'Культурное шоу',
            title: 'Культурное шоу в Kandy Lake Club',
            description:
              'Вечером посмотрите кандийское танцевальное шоу: яркие костюмы, барабаны, танцы в масках и хождение по огню прекрасное культурное завершение дня.',
          },
          {
            type: 'Смотровая площадка',
            title: 'Смотровая площадка Канди',
            description:
              'Со смотровой площадки над озером Канди откроется панорама города, Храма Зуба и зелёных холмов идеальное место для фото.',
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
        title: 'Канди  Элла',
        activities: [
          {
            type: 'Культурный визит',
            title: 'Башня Амбулувава',
            description:
              'Посетите башню Амбулувава у Гамполы многоконфессиональное святилище на холме. Поднимитесь по спиральной лестнице на вершину ради захватывающего обзора на 360° на центральное нагорье.',
          },
          {
            type: 'Объект ЮНЕСКО',
            title: 'Посещение чайной фабрики',
            description:
              'На чайной фабрике в горах вы увидите, как делают знаменитый цейлонский чай от сбора до сушки и попробуете свежезаваренную чашку с видом на горы.',
          },
          {
            type: 'Культурное шоу',
            title: 'Водопад Рамбода',
            description:
              'Остановка у водопада Рамбода (около 109 м) близ Пусселлавы, среди чайных плантаций и зелени освежающая панорамная пауза в горах.',
          },
          {
            type: 'Обзор города',
            title: 'Мост Nine Arch',
            description:
              'Посетите знаменитый мост Nine Arch в Элле, целиком из камня и кирпича, среди чайных плантаций и джунглей. Если повезёт, по нему проедет поезд идеальный кадр.',
          },
          {
            type: 'Обзор города',
            title: 'Вечерний тур по Элле',
            description:
              'Короткая прогулка по очаровательному горному городку Элла с видом на Ella Gap и окрестные долины спокойная атмосфера и множество мест для фото.',
          },
          {
            type: 'Проживание',
            title: 'La Ella Breeze Hotel',
            description: 'Ночь в La Ella Breeze Hotel или подобном, на полупансионе.',
            extra: ['Отель 4 звезды (премиум)', 'Завтрак', 'Отдельная ванная', 'Ужин'],
          },
        ],
      },
      {
        title: 'Элла  Мирисса',
        activities: [
          {
            type: 'Поездка на поезде',
            title: 'Поездка на поезде по Элле',
            description:
              'Совершите знаменитую поездку на поезде по Элле одну из красивейших в мире среди чайных плантаций, туманных гор, тоннелей и водопадов с потрясающими видами.',
          },
          {
            type: 'Смотровая площадка',
            title: 'Little Adam’s Peak',
            description:
              'Лёгкая прогулка 30 to 45 минут среди чайных полей ведёт на Little Adam’s Peak с панорамой Ella Gap подходит почти всем.',
          },
          {
            type: 'Водопад',
            title: 'Водопад Равана',
            description:
              'Остановка у широкого водопада Равана близ Эллы, связанного по легенде с Рамаяной освежающая пауза с чистым горным воздухом.',
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
        title: 'Мирисса  наблюдение за китами и водные активности',
        activities: [
          {
            type: 'Наблюдение за китами',
            title: 'Наблюдение за китами и дельфинами в Мириссе',
            description:
              'Отправьтесь на незабываемое наблюдение за китами и дельфинами в Мириссе одном из лучших мест в мире. В Индийском океане ищите синих китов, кашалотов и стаи игривых дельфинов.',
          },
          {
            type: 'Снорклинг',
            title: 'Снорклинг в Мириссе',
            description:
              'Откройте во время снорклинга кристально чистые воды Мириссы, красочные кораллы и тропических рифовых рыб.',
          },
          {
            type: 'Снорклинг',
            title: 'Снорклинг с черепахами',
            description:
              'Поплавайте рядом с грациозными зелёными черепахами и биссами в тёплых водах Мириссы незабываемая встреча с природой.',
          },
          {
            type: 'Водная активность',
            title: 'Каяк на закате',
            description:
              'Гребите вдоль побережья в спокойной прогулке на каяке, пока небо окрашивается в оранжевый, розовый и золотой одна из красивейших водных активностей юга.',
          },
          {
            type: 'Прогулка на лодке',
            title: 'Прогулка на лодке на закате',
            description:
              'Спокойная прогулка на лодке на закате с панорамой южного побережья романтично и подходит для семей.',
          },
          {
            type: 'Проживание',
            title: 'Mandara Resort Hotel',
            description:
              'Комфортная ночь в Mandara Resort Hotel или подобном отеле у пляжа в Мириссе, на полупансионе (завтрак и ужин).',
            extra: ['Отель 4 звезды (премиум)', 'Завтрак включён', 'Отдельная ванная', 'Ужин включён'],
          },
        ],
      },
      {
        title: 'Водные активности и вылет',
        activities: [
          {
            type: 'Природа и культура',
            title: 'Coconut Tree Hill в Мириссе',
            description:
              'Посетите Coconut Tree Hill один из самых фотографируемых прибрежных видов Шри Ланки: обрыв с кокосовыми пальмами и панорамой бирюзового океана.',
          },
          {
            type: 'Охрана природы',
            title: 'Черепаший питомник в Коггале',
            description:
              'Посетите черепаший питомник в Коггале, где защищают и восстанавливают исчезающих морских черепах, и узнайте об усилиях Шри Ланки по охране моря.',
          },
          {
            type: 'Лодочное сафари',
            title: 'Лодочное сафари по реке Маду',
            description:
              'Живописное лодочное сафари среди мангровых лесов и небольших островов реки Маду с посещением традиционной плантации корицы.',
          },
          {
            type: 'Вылет',
            title: 'Трансфер на вылет',
          },
        ],
      },
    ],
  },
  nl: {
    title: 'Sri Lanka Rundreise  7 Tage',
    description:
      'Erleben Sie die Schonheit Sri Lankas auf einer 7 tagigen Privatreise voller Abenteuer, Kultur und Erholung.',
    duration: '7 Tage',
    persons: '20 Personen',
    tourType: 'Rundreise',
    overview:
      'Wir organisieren fur Sie den perfekten Urlaub auf der „Paradiesinsel" Sri Lanka. Unser 7 Tage Paket (6 Nachte) verbindet alle beruhmten Hohepunkte mit seltenen, fur Sundown Tours typischen Erlebnissen  Unterbringung in Sri Lankas besten 4 Sterne Hotels auf Halbpension. Yala Safari, Sigiriya, die Nine Arches Bridge in Ella, die Zugfahrt nach Ella, der Zahntempel in Kandy, der Ramboda Wasserfall, die Wanderung auf Little Adam’s Peak, Nuwara Eliya, das Fort von Galle und eine Bootstour auf dem Bentota Fluss sind nur einige der Attraktionen. Insgesamt besuchen Sie 28 Attraktionen in 10 Distrikten  mit privatem Transport.',
    includes: PACKAGE_INCLUDES.nl,
    excludes: PACKAGE_EXCLUDES.nl,
    seoIntro:
      'Eine siebentagige Sri Lanka Rundreise ist das klassische Erstbesucher Programm und das aus gutem Grund. In einer Woche reisen Sie vom antiken Kultur Dreieck uber das neblige Teehochland bis in Leopardengebiete und an die palmen gesaumte Sudkuste, ohne sinnlose Umwege oder taglich ein neues Hotel. Sundown Tours hat diese private Route fur Paare, Familien und kleine Gruppen konzipiert, die Kultur, Tierwelt und Landschaft kombinieren mochten: Wilpattu Wildlife zu Beginn, Dorfleben und Elefantentreffen bei Sigiriya, Aufstieg auf den Lowenfelsen und Zahntempel Rituale in Kandy, malerische Zugfahrt nach Ella, Nine Arches Bridge und Little Adam\'s Peak, Jeep Safari im Yala Nationalpark sowie UNESCO Galle Fort plus Fluss und Schildkroten Erlebnisse vor der Abreise. Ihr englischsprachiger Chauffeur kummert sich um Navigation, Timing und lokales Wissen, wahrend Sie in einem klimatisierten Privatfahrzeug mit unbegrenzter Kilometerleistung reisen. Die Unterbringung erfolgt in ausgewahlten 4 Sterne Hotels auf Halbpension; Kategorie und Strandnachte passen wir auf Wunsch an.',
    highlights: [
      '28 kuratierte Stopps in 10 Distrikten an 7 Tagen mit privatem Chauffeur und unbegrenzter Kilometerleistung',
      'Wilpattu Safari, Sigiriya Lowenfelsen, Zahntempel in Kandy und Zugpanorama im Hugelland von Ella',
      'Leoparden und Elefanten Safari im Yala Nationalpark im eigenen 4x4 Jeep',
      'Halbpension in sorgfaltig ausgewahlten 4 Sterne Hotels',
      'Sundown Extras: Dorfkochkurs, Ayurveda, Sonnenuntergang am Pidurangala und Madu Fluss Mangroven',
    ],
    whoIsFor:
      'Ideal fur Erstbesucher, Familien mit Teenagern und Paare, die Kultur, Tierwelt und Landschaft in einer Woche ohne Selbstfahren wunschen. Moderate Fitness fur Felsbesteigungen und kurze Wanderungen; fur Senioren passen wir das Tempo auf Wunsch an.',
    bestTimeNote:
      'Ganzjahrig moglich; Dezember to April bietet trockeneres Wetter an West und Sudkuste und zuverlassigen Yala Zugang. Mai to September eignet sich fur das Kultur Dreieck und Ostkusten Erweiterungen; Safariparks passen wir saisonal fur Elefantentreffen an.',
    faq: [
      {
        q: 'Wie viele Hotelubernachtungen sind in der 7 Tage Tour enthalten?',
        a: 'Das Paket umfasst 6 Nachte in 4 Sterne Hotels auf Halbpension entlang der Route. Unterkunft und Verpflegung des Fahrers sind separat inklusive; Eintrittsgebuhren und Mittagessen tragen Sie selbst.',
      },
      {
        q: 'Konnen wir die Wilpattu Safari an Tag 1 anpassen oder Yala gegen einen anderen Park tauschen?',
        a: 'Ja. Wildtierrouten variieren je nach Saison wir nutzen gegebenenfalls Minneriya/Kaudulla fur Elefantentreffen oder Udawalawe als Alternative. Nennen Sie uns Ihre Prioritaten bei der Buchung.',
      },
      {
        q: 'Ist die malerische Zugfahrt in Ella im Preis enthalten?',
        a: 'Der ikonische Ella Zugabschnitt gehort zur Route; Fahrkarten sind nicht im Basispaket enthalten, aber unser Guide organisiert die bestmogliche Klasse und Zeit fur Ihre Gruppe.',
      },
      {
        q: 'Welche Fitness braucht man fur Sigiriya und Little Adam\'s Peak?',
        a: 'Sigiriya erfordert etwa 1.000 Stufen mit steileren Passagen; Little Adam\'s Peak ist eine sanftere 45 minutige Wanderung. Wer es leichter mochte, kann Pidurangala fur den Sonnenuntergang wahlen.',
      },
    ],
    days: [
      {
        title: 'Flughafen / Hotel  Wilpattu',
        activities: [
          {
            type: 'Safari',
            title: 'Safari im Wilpattu Nationalpark',
            description:
              'Erkunden Sie Sri Lankas grossten Nationalpark bei einer 5 stundigen Jeep Safari im 4x4. Halten Sie Ausschau nach Leoparden, Lippenbaren, Elefanten, Hirschen, Krokodilen und einer vielfaltigen Vogelwelt.',
          },
          {
            type: 'Unterkunft',
            title: 'Thimbiri Wewa Resort  Wilpattu',
            description: 'Ubernachtung im Thimbiri Wewa Resort Wilpattu (oder ahnlich). Auf Halbpension.',
            extra: ['Abendessen inklusive', 'Sterne Hotel'],
          },
        ],
      },
      {
        title: 'Wilpattu  Sigiriya',
        activities: [
          {
            type: 'Landerlebnis',
            title: 'Dorf und See Abenteuer in Hiriwadunna',
            description:
              'Erleben Sie das echte Landleben Sri Lankas bei einer traditionellen Dorftour in Hiriwadunna: ein Spaziergang durch Reisfelder, eine Ochsenkarrenfahrt und eine Kanufahrt uber den See. Beim Kochkurs bereiten Sie mit einer Familie authentische Gerichte im Tontopf uber dem Holzfeuer zu.',
          },
          {
            type: 'Safari',
            title: 'Jeep Safari in Kaudulla & Minneriya',
            description:
              'Geniessen Sie eine 4x4 Jeep Safari in Kaudulla oder Minneriya  je nach Tierbewegungen und Saison. Beide Parks sind fur ihre grossen Elefantenherden bekannt; zur Trockenzeit erleben Sie mitunter die spektakulare „Elephant Gathering".',
          },
          {
            type: 'Wellness',
            title: 'Ayurveda in Sigiriya  die gesunde Seite Ihrer Reise',
            description:
              'Entspannen Sie nach dem aktiven Tag bei einer ayurvedischen Olmassage mit naturlichen Krauterolen in einem traditionellen Ayurveda Zentrum in Sigiriya  ideal, um Muskeln zu lockern und neue Energie zu tanken.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Sonnenuntergang am Pidurangala Felsen',
            description:
              'Erklimmen Sie am Abend den Pidurangala Felsen fur einen der schonsten Sonnenuntergange Sri Lankas mit 360 Grad Blick auf den Sigiriya Lowenfelsen und den Dschungel. Der Aufstieg dauert etwa 20 to 30 Minuten.',
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
        title: 'Sigiriya nach Kandy',
        activities: [
          {
            type: 'UNESCO Statte',
            title: 'Lowenfelsen Festung Sigiriya',
            description:
              'Besuchen Sie die Felsenfestung Sigiriya, UNESCO Welterbe und im 5. Jahrhundert von Konig Kashyapa erbaut. Durch die koniglichen Wassergarten fuhrt der Weg vorbei an den beruhmten Fresken und der Spiegelwand bis zum Gipfel mit Palastruinen und Panoramablick.',
          },
          {
            type: 'UNESCO Statte',
            title: 'Krauter und Gewurzgarten in Matale',
            description:
              'In einem Gewurzgarten in Matale sehen Sie, wie Zimt, Kardamom, Pfeffer, Vanille und Kakao angebaut werden, und erfahren mehr uber ihre ayurvedische Verwendung  mit einer Kostprobe frischen Gewurztees.',
          },
          {
            type: 'UNESCO Statte',
            title: 'Edelstein und Gemmologie Museum',
            description:
              'Entdecken Sie im Gemmologie Museum in Kandy die beruhmten Ceylon Edelsteine und lernen Sie, wie sie abgebaut, geschliffen und poliert werden.',
          },
          {
            type: 'UNESCO Statte',
            title: 'Zahntempel (Sri Dalada Maligawa)',
            description:
              'Besuchen Sie den Zahntempel in Kandy, eine der heiligsten buddhistischen Statten und UNESCO Welterbe. Bewundern Sie die kandyanische Architektur am See; zur Puja Zeit erleben Sie traditionelles Trommeln und Andachtsrituale.',
          },
          {
            type: 'Kulturshow',
            title: 'Kulturshow im Kandy Lake Club',
            description:
              'Geniessen Sie am Abend eine traditionelle Kandy Tanzshow mit farbenprachtigen Kostumen, Trommelmusik, Maskentanzen und Feuerlauf  ein perfekter kultureller Tagesabschluss.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Aussichtspunkt Kandy',
            description:
              'Vom Aussichtspunkt uber dem Kandy See geniessen Sie einen Panoramablick auf die Stadt, den Zahntempel und die grunen Hugel  ein idealer Fotostopp.',
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
        title: 'Kandy nach Ella',
        activities: [
          {
            type: 'Kulturbesuch',
            title: 'Ambuluwawa Turm',
            description:
              'Besuchen Sie den Ambuluwawa Turm bei Gampola, ein multireligioses Heiligtum auf einem Hugel. Uber die spiralformige Treppe erreichen Sie die Spitze mit atemberaubendem 360 Grad Blick auf das Hochland.',
          },
          {
            type: 'UNESCO Statte',
            title: 'Besuch einer Teefabrik',
            description:
              'In einer Teefabrik im Hochland erleben Sie, wie der weltberuhmte Ceylon Tee hergestellt wird  vom Pflucken uber Welken und Rollen bis zum Trocknen. Zum Abschluss eine Tasse frisch aufgebruhten Tees mit Bergblick.',
          },
          {
            type: 'Kulturshow',
            title: 'Ramboda Wasserfall',
            description:
              'Halten Sie am rund 109 Meter hohen Ramboda Wasserfall bei Pussellawa, umgeben von Teeplantagen und uppigem Grun  ein erfrischender Panoramastopp im zentralen Hochland.',
          },
          {
            type: 'Stadttour',
            title: 'Nine Arch Bridge',
            description:
              'Besuchen Sie die beruhmte Nine Arch Bridge in Ella, ganz aus Stein und Ziegeln erbaut, inmitten von Teeplantagen und Dschungel. Mit etwas Gluck fahrt gerade ein Zug uber die Brucke  ein perfektes Fotomotiv.',
          },
          {
            type: 'Stadttour',
            title: 'Abendtour durch Ella',
            description:
              'Eine kurze Tour durch das charmante Bergstadtchen Ella mit Blick auf den Ella Gap und die umliegenden Taler  entspannte Atmosphare und viele Fotomoglichkeiten.',
          },
          {
            type: 'Unterkunft',
            title: 'La Ella Breeze Hotel',
            description: 'Ubernachtung im La Ella Breeze Hotel oder ahnlich  auf Halbpension.',
            extra: ['4 Sterne Hotel (Premium)', 'Fruhstuck', 'Eigenes Bad', 'Abendessen'],
          },
        ],
      },
      {
        title: 'Ella  Mirissa',
        activities: [
          {
            type: 'Zugfahrt',
            title: 'Zugfahrt durch Ella',
            description:
              'Erleben Sie die beruhmte Zugfahrt durch Ella, eine der schonsten Bahnstrecken der Welt  vorbei an Teeplantagen, Nebelbergen, Tunneln und Wasserfallen mit spektakularen Ausblicken.',
          },
          {
            type: 'Aussichtspunkt',
            title: 'Little Adam’s Peak',
            description:
              'Eine leichte Wanderung von 30 to 45 minuten durch Teefelder fuhrt zum Little Adam’s Peak mit Panoramablick auf den Ella Gap  fur fast alle Fitnesslevel geeignet.',
          },
          {
            type: 'Wasserfall',
            title: 'Ravana Wasserfalle',
            description:
              'Halt an den breiten Ravana Wasserfallen nahe Ella, laut Legende mit der Ramayana Geschichte verbunden  ein schoner, erfrischender Stopp mit klarer Bergluft.',
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
              'Begeben Sie sich auf eine unvergessliche Wal und Delfinbeobachtung in Mirissa, einem der besten Reviere weltweit. Auf dem Indischen Ozean suchen Sie nach Blauwalen, Pottwalen und verspielten Delfinschulen.',
          },
          {
            type: 'Schnorcheln',
            title: 'Schnorchel Erlebnis in Mirissa',
            description:
              'Entdecken Sie beim Schnorcheln in kristallklarem Wasser die bunte Unterwasserwelt Mirissas mit Korallen und tropischen Riffischen.',
          },
          {
            type: 'Schnorcheln',
            title: 'Schnorcheln mit Meeresschildkroten',
            description:
              'Schwimmen Sie neben anmutigen Grunen und Echten Karettschildkroten in den warmen Gewassern Mirissas  ein unvergessliches Naturerlebnis.',
          },
          {
            type: 'Wasseraktivitat',
            title: 'Sonnenuntergangs Kajaktour in Mirissa',
            description:
              'Paddeln Sie bei einer ruhigen Kajaktour entlang der Kuste, wahrend der Himmel sich in Orange, Pink und Gold verfarbt  eine der schonsten Wasseraktivitaten im Suden.',
          },
          {
            type: 'Bootsfahrt',
            title: 'Sonnenuntergangs Bootsfahrt in Mirissa',
            description:
              'Eine entspannte Bootsfahrt bei Sonnenuntergang mit Panoramablick auf die Sudkuste  romantisch und familienfreundlich zugleich.',
          },
          {
            type: 'Unterkunft',
            title: 'Mandara Resort Hotel',
            description:
              'Komfortable Ubernachtung im Mandara Resort Hotel oder einem ahnlichen Strandhotel in Mirissa, auf Halbpension mit Fruhstuck und Abendessen.',
            extra: ['4 Sterne Hotel (Premium)', 'Fruhstuck inklusive', 'Eigenes Bad', 'Abendessen inklusive'],
          },
        ],
      },
      {
        title: 'Wasseraktivitaten & Abreise',
        activities: [
          {
            type: 'Natur & Kultur',
            title: 'Coconut Tree Hill in Mirissa',
            description:
              'Besuchen Sie den Coconut Tree Hill, einen der meistfotografierten Aussichtspunkte Sri Lankas: eine von Kokospalmen gesaumte Klippe mit Panoramablick uber den turkisen Ozean.',
          },
          {
            type: 'Artenschutz',
            title: 'Schildkroten Aufzuchtstation Koggala',
            description:
              'Besuchen Sie die Schildkroten Aufzuchtstation in Koggala, wo bedrohte Meeresschildkroten geschutzt und aufgezogen werden, und erfahren Sie mehr uber Sri Lankas Meeresschutz.',
          },
          {
            type: 'Bootssafari',
            title: 'Bootssafari auf dem Madu Fluss',
            description:
              'Eine landschaftlich reizvolle Bootssafari durch die Mangrovenwalder und kleinen Inseln des Madu Flusses, mit Besuch einer traditionellen Zimtplantage.',
          },
          {
            type: 'Abreise',
            title: 'Transfer zur Abreise',
          },
        ],
      },
    ],
  }
};
