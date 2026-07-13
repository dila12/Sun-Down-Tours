import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  TourDetails,
  TourDetailsComponent,
} from '../../../../sharedComponents/tour-details-component/tour-details-component';
import toursData from '../../../../databaseJson/tours.json';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../../../Services/country.service';
import { SeoService } from '../../../../../seo.service';

@Component({
  selector: 'app-seven-days-tour-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TourDetailsComponent,
    PackageItemComponent,
  ],
  templateUrl: './seven-days-tour-component.html',
  styleUrls: ['./seven-days-tour-component.css'],
})
export class SevenDaysTourComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/img/5daysTours/1.jpg',
    'assets/img/5daysTours/18.jpg',
    'assets/img/5daysTours/28.png',
    'assets/img/5daysTours/24.jpg',
    'assets/img/5daysTours/34.jpg',
  ];

  currentIndex = 0;
  intervalId: any;
  multiDayTours: any[] = [];
  selectedTours: any[] = [];
  userCountry = 'US';
  price = 0;

  tour = {
    title: 'Sri Lanka Seven Days Tour',
    description:
      'Experience the beauty of Sri Lanka with 7 days full of adventure, culture, and relaxation.',
    duration: '7 Days',
    persons: '20 Persons',
    filecode: '7-day-sri-lanka-tour',
    overview: `We are here for you to organize the perfect holiday you always dreamed of in 'Paradise Island', Sri Lanka.
    Our 7days(6 nights) travel package is scheduled in a way that you'll cover not only all the famous attractions but also some of the rare experiences that are very unique to Sundown Tours while accomadating our guests in Sri Lanka's finest 4 star category hotels on half board basis.
    Yala Safari, Sigiriya, Ella Nine Arches Bridge, Ella train journey, Kandy Sacred Tooth Relic Temple, Ramboda watefall, Little Adam's Peak hike, Nuwara Eliya, Galle Fort, Bentota River tour are just to name a few main attractions that you'll cover during the journey.
    Altogether you'll be visiting 28 attractions in total covering 10 districts of Sri Lanka while enjoing private trasportation.`,
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
        title: 'Wilpattu – Sigiriya',
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
              'In the evening, climb Pidurangala Rock for one of the most breathtaking sunset views in Sri Lanka. Located near Sigiriya, this rock offers a panoramic viewpoint overlooking the iconic Sigiriya Lion Rock and the surrounding jungle landscape. The climb takes approximately 20–30 minutes and includes stone steps followed by a short rock scramble near the summit. Your guide/driver will assist you and ensure a safe and comfortable experience. At the top, enjoy stunning 360-degree views of forests, lakes, and distant mountains as the sun sets over the horizon. This is one of the best photography spots in the Sigiriya region and a peaceful way to end the day. Travelers will have time to relax, take photos, and enjoy the natural beauty before descending.',
            image: 'assets/img/5daysTours/41.jpg',
          },
          {
            type: 'Accommodation',
            title: { title: 'Fresco Water Villa – Sigiriya', icon: 'fa-hotel', color: '#16a085' },
            description:
              'Overnight stay at Fresco Water Villa (or similar).',
            image: 'assets/img/5daysTours/c.jpg',
            extra: ['Breakfast & Dinner Included', '3.5 Star Hotel'],
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
              'Visit a traditional Herbal and Spice Garden in Matale, where you will discover Sri Lanka’s world-famous spices and medicinal plants. During this guided walk, you will see how cinnamon, cardamom, pepper, vanilla, cocoa, and many other spices are grown and processed. The local guide will explain the health benefits and traditional uses of various herbs and Ayurvedic plants used in Sri Lankan cooking and natural medicine. You will also learn about herbal remedies, essential oils, and natural treatments that have been practiced for centuries. Guests will have the opportunity to experience a short demonstration of herbal products and taste freshly prepared spice tea. This visit offers an educational and cultural insight into Sri Lanka’s rich spice heritage.',
            image: 'assets/img/5daysTours/kt2ugiesd68bdog5kdab.jpg',
          },
          {
            type: 'UNESCO Site',
            title: { title: 'Natural Gems and Gemmological Museum', icon: 'fa-mountain', color: '#17777a' },
            description:
              'Discover the beauty of Sri Lanka’s precious gemstones at the Natural Gems and Gemmological Museum in Kandy. Travelers can explore a fascinating collection of rare gems, learn about the history of Sri Lanka’s gem industry, and see how gemstones are mined, cut, and polished. The museum offers an educational and cultural experience, showcasing the craftsmanship and heritage behind the world-famous Ceylon gems.',
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
            title: { title: 'Hotel Topaz – Kandy', icon: 'fa-hotel', color: '#16a085' },
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
              'Visit Ambuluwawa Tower in Gampola, a unique multi-religious sanctuary and biodiversity complex located on a hilltop with stunning 360-degree views. The highlight of this visit is the spiral white tower, which offers breathtaking panoramic views of the surrounding mountains, rivers, and valleys. Travelers can climb the narrow spiral staircase to the top of the tower for an adventurous and memorable experience. From the summit, enjoy spectacular views of the central highlands, including distant mountain ranges and lush greenery. The Ambuluwawa complex also features symbols representing Buddhism, Hinduism, Islam, and Christianity, reflecting Sri Lanka’s religious harmony. This stop offers a combination of light adventure, scenic beauty, and cultural insight.',
            image: 'assets/img/5daysTours/12.jpg',
          },
          {
            type: 'UNESCO Site',
            title: { title: 'Visit Tea Factory', icon: 'fa-seedling', color: '#2980b9' },
            description:
              'Visit the Tea Factory in Upcountry, located in the scenic hill country of Sri Lanka. This working tea factory offers an insightful experience into how world-famous Ceylon tea is produced. During the guided factory tour, travelers will learn about the full tea-making process from plucking fresh tea leaves in the plantations to withering, rolling, fermenting, drying, and grading. The guide will explain the differences between various tea types such as black tea, green tea, and white tea. After the tour, guests can enjoy a freshly brewed cup of pure Ceylon tea while admiring the beautiful mountain views surrounding the factory. There will also be an opportunity to purchase high-quality tea directly from the source. This stop provides both an educational and scenic experience in Sri Lanka’s tea country.',
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
              'Visit the iconic Nine Arch Bridge in Ella, one of Sri Lanka’s most photographed landmarks. Surrounded by lush green tea plantations and dense jungle, this impressive colonial-era railway bridge was built entirely of stone and brick without the use of steel. Travelers will enjoy a short walk through scenic pathways to reach the bridge viewpoint. If timing allows, you may witness a train passing over the bridge a memorable and picturesque moment perfect for photography. From the viewing area, admire the beautiful arches stretching across the valley and the peaceful hill country landscape surrounding the bridge. This stop offers excellent photo opportunities and a chance to experience one of Ella’s most famous attractions.',
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
          }
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
              'Hike to Little Adam’s Peak in Ella for one of the most rewarding and easily accessible viewpoints in Sri Lanka’s hill country. This gentle trek takes you through lush tea plantations and scenic pathways with breathtaking views along the way. The hike is suitable for most fitness levels and typically takes about 30–45 minutes to reach the summit. At the top, travelers can enjoy panoramic views of the Ella Gap, surrounding mountains, valleys, and rolling tea estates. This experience offers a perfect mix of light adventure and stunning natural scenery, making it one of the highlights of visiting Ella. It is also an excellent location for photography, especially during early morning or late afternoon.',
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
              color: '#3498db'
            },
            description:
              'Embark on an unforgettable whale and dolphin watching adventure in Mirissa, Sri Lanka’s premier marine wildlife destination. Cruise into the deep waters of the Indian Ocean in search of magnificent Blue Whales, Sperm Whales, Bryde’s Whales, and large pods of playful dolphins. Mirissa is recognized as one of the best whale-watching locations in the world, offering visitors a rare opportunity to witness these gentle giants in their natural habitat while enjoying breathtaking ocean views and a memorable wildlife experience.',
            image: 'assets/img/5daysTours/Mirissa-Whale-Watching-1.jpg',
          },
          {
            type: 'Snorkeling',
            title: {
              title: 'Mirissa Whale Snorkeling Experience',
              icon: 'fa-mask-snorkel',
              color: '#1abc9c'
            },
            description:
              'Discover the vibrant underwater world of Mirissa through an exciting snorkeling experience in crystal-clear tropical waters. Explore colorful coral formations, tropical reef fish, and diverse marine ecosystems along Sri Lanka’s southern coastline. This activity is perfect for ocean lovers seeking an immersive marine adventure surrounded by stunning natural beauty and rich biodiversity.',
            image: 'assets/img/5daysTours/images.jpg',
          },
          {
            type: 'Snorkeling',
            title: {
              title: 'Mirissa Turtle Snorkeling Adventure',
              icon: 'fa-fish',
              color: '#27ae60'
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
              color: '#e67e22'
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
              color: '#9b59b6'
            },
            description:
              'Set sail on a relaxing sunset boat ride in Mirissa and enjoy panoramic views of Sri Lanka’s breathtaking southern coastline. Watch the sun slowly disappear over the Indian Ocean while cruising through tranquil waters surrounded by spectacular scenery. This romantic and family-friendly experience provides the perfect opportunity to capture stunning photographs and create lasting memories of your Sri Lankan beach holiday.',
            image: 'assets/img/5daysTours/mirissa-sunset-boat.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Mandara Resort Hotel',
              icon: 'fa-hotel',
              color: '#16a085'
            },
            description:
              'Enjoy a comfortable overnight stay at Mandara Resort Hotel or a similar premium beachfront property in Mirissa. Located close to the beach and major attractions, the hotel offers modern amenities, spacious rooms, excellent hospitality, and a relaxing atmosphere. The package includes Half Board accommodation with breakfast and dinner, ensuring a pleasant and memorable stay on Sri Lanka’s beautiful southern coast.',
            image: 'assets/img/5daysTours/mandara-resort.jpg',
            extra: [
              'Hotel 4 Stars (Premium)',
              'Breakfast Included',
              'Private Bathroom',
              'Dinner Included',
            ],
          }
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
              'Visit the iconic Coconut Tree Hill in Mirissa, one of the most photographed coastal viewpoints in Sri Lanka. Perched on a cliff overlooking the turquoise waters of the Indian Ocean, this breathtaking location is lined with towering coconut palms, creating a picture-perfect tropical landscape. Enjoy panoramic ocean views, capture stunning sunrise or sunset photographs, and experience the natural beauty that has made Coconut Tree Hill a must-visit attraction for travelers exploring Sri Lanka’s southern coast.',
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

    includes: [
      'Air-Conditioned Private Vehicle',
      'English Speaking Professional Driver',
      "Driver's Accommodation & Meals",
      'Pickup & Drop Off',
      'Fuel & Parking Fees',
      '24 Hours Service',
      'Unlimited Mileage/Kilometer for entire round tour',
      'Tour Accommodation',
    ],
    excludes: ['Food & Drinks', 'Entrance & Activities Fees'],
  };


  constructor(
    private router: Router,
    private http: HttpClient,
    private countryService: CountryService,
    private seo: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  get currentImage() {
    return this.images[this.currentIndex];
  }

  get tourForDetails(): TourDetails {
    return {
      title: this.tour.title,
      description: this.tour.description,
      duration: this.tour.duration,
      persons: this.tour.persons,
      price: this.price,
      tourType: this.tour.tourType,
      overview: this.tour.overview,
      itinerary: this.tour.itinerary,
      includes: this.tour.includes,
      excludes: this.tour.excludes,
    };
  }

  get nextImages() {
    return Array.from({ length: 4 }, (_, i) => {
      const index = (this.currentIndex + i + 1) % this.images.length;
      return { src: this.images[index], index };
    });
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }

  goToImageFromThumb(index: number) {
    this.currentIndex = index;
  }

  async ngOnInit() {
    this.seo.updateCanonicalUrl('https://www.sundowntours.com/7-day-sri-lanka-tour');
    if (isPlatformBrowser(this.platformId)) {
      this.userCountry = await this.countryService.detectCountry();
      this.price = await this.loadPrice(this.tour.filecode);
      this.multiDayTours = await this.loadToursWithPrices(
        toursData.multiDayTours,
      );
      this.selectedTours = this.multiDayTours
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      this.intervalId = setInterval(() => this.nextImage(), 3000);
    } else {
      this.userCountry = 'US';
      this.price = 0;
      this.multiDayTours = toursData.multiDayTours.slice(0, 3);
      this.selectedTours = this.multiDayTours;
    }
  }

  async loadToursWithPrices(tours: any[]) {
    return Promise.all(
      tours.map(async (tour) => {
        const price = await this.loadPrice(tour.filecode);
        return { ...tour, price };
      }),
    );
  }

  loadPrice(filecode: string): Promise<number> {
    if (!isPlatformBrowser(this.platformId)) {
      return Promise.resolve(0);
    }
    //const countryFile = `assets/data/${this.userCountry}${filecode}.json`;
    const defaultFile = `assets/data/US${filecode}.json`;

    return new Promise((resolve) => {
      this.http.get(defaultFile).subscribe({
        next: (data: any) => resolve(data?.price?.['2'] ?? 0),
        error: () => {
          this.http.get(defaultFile).subscribe({
            next: (data: any) => resolve(data?.price?.['2'] ?? 0),
            error: () => resolve(0)
          });
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
