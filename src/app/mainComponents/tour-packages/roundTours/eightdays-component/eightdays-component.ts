import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TourDetails, TourDetailsComponent } from '../../../../sharedComponents/tour-details-component/tour-details-component';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../../../Services/country.service';
import toursData from '../../../../databaseJson/tours.json';
import { SeoService } from '../../../../../seo.service';

@Component({
  selector: 'app-eightdays-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TourDetailsComponent,
    PackageItemComponent,
  ],
  templateUrl: './eightdays-component.html',
  styleUrl: './eightdays-component.css'
})
export class EightdaysComponent {
  images: string[] = [
    'assets/img/7dayschange/2.jpeg',
    'assets/img/7dayschange/1.jpeg',
    'assets/img/7dayschange/w3a48osbcocecoaaq9hd.jpg',
    'assets/img/7dayschange/tijr5ztiozgdesbxotm4.jpg',
    'assets/img/7dayschange/dqzhbtiaqzhf0hxbbrar.jpg',
  ];

  currentIndex = 0;
  intervalId: any;
  multiDayTours: any[] = [];
  selectedTours: any[] = [];
  userCountry = 'US';
  price = 0;

  tour = {
    title: '8 Day Sri Lanka Private Tour | Safari, Culture, Hill Country & Beach',
    description:
      'An unforgettable 8 day private Sri Lanka tour covering Wilpattu Safari, Anuradhapura, Sigiriya, Kandy, Ella adventures and a relaxing southern beach stay.',
    duration: '8 Days',
    persons: '1-20 Persons',
    filecode: '8-day-sri-lanka-private-tour',
    overview: `Discover Sri Lanka’s wildlife, ancient kingdoms, scenic mountains and golden beaches in one perfectly balanced 8 day journey. 
  This tour combines safari adventure, UNESCO heritage sites, hill country landscapes, tea plantations, waterfalls and relaxing coastal experiences with half board accommodation and private transportation.`,

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
            title: {
              title: 'Pidurangala Rock',
              icon: 'fa-hiking',
              color: '#f39c12',
            },
            description:
              'Begin your Sri Lankan adventure with a memorable hike to Pidurangala Rock, one of the most spectacular viewpoints in the Cultural Triangle. Climb through ancient temple grounds and natural rock formations to reach the summit, where breathtaking panoramic views await. From the top, enjoy an unforgettable sunset overlooking the iconic Sigiriya Rock Fortress, lush forests, tranquil lakes, and surrounding countryside. This hidden gem offers one of the best photography opportunities in Sri Lanka and provides an authentic blend of nature, history, adventure, and cultural heritage.',
            image: 'assets/img/5daysTours/c8dyxgodivrwf4hxzziq.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Fresco Water Villa',
              icon: 'fa-hotel',
              color: '#27ae60',
            },
            description:
              'Accommodation in Hotel Fresco Water Villa or Similar Hotel - HB Basis',
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
            title: {
              title: 'Sigiriya Lion Rock',
              icon: 'fa-mountain',
              color: '#e74c3c',
            },
            description:
              'Explore the legendary Sigiriya Lion Rock Fortress, a UNESCO World Heritage Site and one of Sri Lanka’s most iconic landmarks. Built by King Kashyapa in the 5th century, this ancient rock citadel rises nearly 200 meters above the surrounding plains and features remarkable frescoes, landscaped gardens, mirror walls, and impressive engineering achievements. Climb to the summit and enjoy breathtaking panoramic views of the Cultural Triangle, making this an unforgettable blend of history, archaeology, culture, and adventure.',
            image: 'assets/img/7dayschange/ihyw8fdom33yg8zqkmfi.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Hiriwadunna Village & Lake Adventure',
              icon: 'fa-leaf',
              color: '#8e44ad',
            },
            description:
              'Experience authentic rural life in Sri Lanka with a guided visit to the traditional village of Hiriwadunna. Travel through picturesque countryside, scenic lakes, lush farmlands, and local communities while learning about centuries-old traditions and agricultural practices. Enjoy a peaceful catamaran ride across the village lake, interact with local residents, and discover the simplicity and charm of village life that remains unchanged by modern development.',
            image: 'assets/img/5daysTours/36.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Dambulla Cave Temple',
              icon: 'fa-place-of-worship',
              color: '#2980b9',
            },
            description:
              'Visit the magnificent Dambulla Royal Cave Temple, Sri Lanka’s largest and best-preserved cave temple complex and a UNESCO World Heritage Site. Dating back over 2,000 years, this sacred pilgrimage destination features five impressive cave shrines filled with ancient Buddhist murals, beautifully preserved statues, and remarkable religious artwork. The temple offers visitors a fascinating insight into Sri Lanka’s spiritual heritage, cultural traditions, and architectural achievements.',
            image: 'assets/img/7dayschange/d2ap1r8hoijw6wsm5xgy.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Dambulla Dedicated Economic Center',
              icon: 'fa-shopping-basket',
              color: '#16a085',
            },
            description:
              'Explore the vibrant Dambulla Dedicated Economic Center, Sri Lanka’s largest wholesale fruit and vegetable market. Witness the bustling atmosphere as farmers and traders from across the island gather to exchange fresh produce. Discover a colorful variety of tropical fruits, vegetables, spices, and local products while experiencing an authentic slice of everyday Sri Lankan life and commerce.',
            image: 'assets/img/7dayschange/v54wmh9aukt4toblznpu.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Fresco Water Villa',
              icon: 'fa-hotel',
              color: '#27ae60',
            },
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
            title: {
              title: 'Sri Dalada Maligawa',
              icon: 'fa-place-of-worship',
              color: '#2980b9',
            },
            description:
              'Visit the world-renowned Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), one of the most sacred Buddhist pilgrimage sites in the world and a UNESCO-listed landmark in the historic city of Kandy. This magnificent temple houses the revered Sacred Tooth Relic of Lord Buddha and attracts thousands of devotees and visitors each year. Admire the temple’s stunning Kandyan architecture, intricate carvings, golden-roofed shrines, and rich spiritual atmosphere while learning about its importance in Sri Lanka’s religious and cultural heritage.',
            image: 'assets/img/7dayschange/f3pqyx8y4gpwmqhzleh0.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Kandy Lake Club - Cultural Dance Show',
              icon: 'fa-theater-masks',
              color: '#8e44ad',
            },
            description:
              'Experience the vibrant traditions of Sri Lanka through the famous Kandy Cultural Dance Show. Witness an exciting performance featuring traditional Kandyan drumming, energetic folk dances, colorful costumes, fire-walking, and fire-breathing acts. This captivating cultural experience showcases centuries-old Sri Lankan performing arts and offers visitors a deeper understanding of the island’s rich heritage and cultural diversity.',
            image: 'assets/img/7dayschange/upxn0ge9htdg20ycpgp6.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Sri Muthumariamman Temple',
              icon: 'fa-place-of-worship',
              color: '#2980b9',
            },
            description:
              'Explore the magnificent Sri Muthumariamman Temple, one of the most beautiful Hindu temples in Sri Lanka. Renowned for its colorful architecture, detailed sculptures, and spiritual significance, the temple stands as a symbol of the country’s multicultural and multi-religious heritage. Admire the impressive Dravidian-style design while learning about Hindu traditions, rituals, and the harmonious coexistence of diverse cultures in Sri Lanka.',
            image: 'assets/img/7dayschange/gt14exwu7ogp3rz9aun9.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Nalanda Gedige',
              icon: 'fa-landmark',
              color: '#16a085',
            },
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
            title: {
              title: 'Royal Botanical Garden',
              icon: 'fa-leaf',
              color: '#2ecc71',
            },
            description:
              'Explore the world-famous Royal Botanical Gardens in Peradeniya, one of the largest and most beautiful botanical gardens in Asia. Spanning over 147 acres, the gardens are home to more than 4,000 species of plants, including rare orchids, towering palm avenues, medicinal plants, giant bamboo, and tropical flowering trees. Surrounded by lush greenery and scenic landscapes, this botanical paradise offers a relaxing experience while showcasing Sri Lanka’s rich biodiversity and horticultural heritage.',
            image: 'assets/img/7dayschange/asojmlldivxq8vforwxt.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ambuluwawa Tower',
              icon: 'fa-mountain',
              color: '#e67e22',
            },
            description:
              'Visit the iconic Ambuluwawa Biodiversity Complex and climb the famous Ambuluwawa Tower, one of Sri Lanka’s most unique viewpoints. Situated atop a mountain peak, the tower offers breathtaking 360-degree panoramic views of surrounding mountain ranges, forests, rivers, tea plantations, and rural villages. This unforgettable experience combines adventure, nature, photography, and spectacular scenery, making it one of the most popular attractions in Sri Lanka’s hill country.',
            image: 'assets/img/7dayschange/w3a48osbcocecoaaq9hd.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Bluefield Tea Factory',
              icon: 'fa-coffee',
              color: '#8e44ad',
            },
            description:
              'Discover the rich heritage of Ceylon Tea with a guided visit to the renowned Bluefield Tea Factory in Nuwara Eliya. Located amidst rolling tea plantations and mist-covered hills, the factory offers a fascinating insight into the traditional tea-making process, from leaf plucking to final production. Learn about the history of Sri Lanka’s world-famous tea industry, observe the manufacturing process, and enjoy freshly brewed Ceylon Tea while admiring the breathtaking scenery of the hill country.',
            image: 'assets/img/7dayschange/tijr5ztiozgdesbxotm4.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ramboda Falls View Point',
              icon: 'fa-water',
              color: '#3498db',
            },
            description:
              'Enjoy spectacular views of Ramboda Falls, one of the tallest and most picturesque waterfalls in Sri Lanka. Nestled among lush tea estates and misty mountain landscapes, the waterfall cascades down rocky cliffs creating a breathtaking natural spectacle. The surrounding region is famous for its scenic highlands, winding roads, cool climate, and panoramic viewpoints, offering visitors some of the most beautiful landscapes in Sri Lanka’s central hill country.',
            image: 'assets/img/7dayschange/ovdxsgglrdreodbe1tmv.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Ramboda Falls Hotel',
              icon: 'fa-hotel',
              color: '#27ae60',
            },
            description:
              'Accommodation in Ramboda Falls Hotel or Similar - HB Basis',
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
            title: {
              title: 'Nine Arches Bridge',
              icon: 'fa-bridge',
              color: '#c0392b',
            },
            description:
              'Visit the iconic Nine Arches Bridge, one of Sri Lanka’s most photographed landmarks and a masterpiece of colonial-era railway engineering. Nestled amidst lush tea plantations and tropical forests in Ella, this magnificent stone bridge was constructed entirely without steel and remains an active railway bridge to this day. Admire its impressive architecture, capture stunning photographs, and witness the famous blue train passing through one of the most scenic landscapes in Sri Lanka’s hill country.',
            image: 'assets/img/7dayschange/yka3mpx2nahiftrb0lpu.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Lake Gregory',
              icon: 'fa-water',
              color: '#2980b9',
            },
            description:
              'Enjoy a relaxing visit to the picturesque Lake Gregory, one of Nuwara Eliya’s most popular recreational attractions. Surrounded by beautiful mountain scenery and cool hill-country weather, the lake offers a peaceful atmosphere ideal for sightseeing, photography, and leisure activities. Visitors can enjoy stunning lakeside views, boat rides, walking paths, and family-friendly attractions while experiencing the charm of Sri Lanka’s famous hill station.',
            image: 'assets/img/7dayschange/sd3y8zh2cskrddig22n7.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: "Little Adam's Peak",
              icon: 'fa-mountain',
              color: '#8e44ad',
            },
            description:
              'Embark on a scenic hike to Little Adam’s Peak, one of Ella’s most popular viewpoints and a must-visit destination for nature lovers. This easy and rewarding trek takes you through lush tea plantations, rolling green hills, and breathtaking mountain landscapes. Upon reaching the summit, enjoy spectacular 360-degree panoramic views of Ella Gap, surrounding valleys, forests, and distant mountain ranges. The stunning scenery and peaceful atmosphere make this one of the most memorable experiences in Sri Lanka’s hill country.',
            image: 'assets/img/7dayschange/e7sgetzhdjoahy2h9wgh.jpg',
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
        day: 6,
        title: 'Yala National Park & Ravana Falls',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Yala National Park',
              icon: 'fa-paw',
              color: '#2ecc71',
            },
            description:
              'Embark on an unforgettable wildlife safari in Yala National Park, Sri Lanka’s most famous national park and one of the best places in Asia for spotting leopards in the wild. Home to an incredible diversity of wildlife, Yala shelters elephants, sloth bears, crocodiles, spotted deer, wild boars, buffaloes, and over 215 species of birds. Explore vast grasslands, lagoons, forests, and rocky landscapes while experiencing the thrill of observing animals in their natural habitat. This exciting safari adventure offers nature lovers and wildlife enthusiasts a truly authentic Sri Lankan wildlife experience.',
            image: 'assets/img/7dayschange/u1iadnsusjf2h8zdhma5.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ravana Falls',
              icon: 'fa-water',
              color: '#3498db',
            },
            description:
              'Visit the breathtaking Ravana Falls, one of Sri Lanka’s most beautiful and iconic waterfalls located amidst the lush mountains of Ella. Cascading down multiple rock formations, this spectacular waterfall is surrounded by tropical forests and stunning natural scenery. Deeply connected to the ancient Indian epic Ramayana, local legends believe King Ravana hid Princess Sita in nearby caves, making the site both a natural attraction and an important cultural landmark. Enjoy the refreshing atmosphere, scenic viewpoints, and excellent photography opportunities at this popular destination.',
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
        day: 7,
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
        day: 8,
        title: 'Mirissa & Departure',
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
            type: 'Conservation',
            title: {
              title: 'Sea Turtle Conservation Project',
              icon: 'fa-water',
              color: '#2980b9',
            },
            description:
              'Visit a sea turtle conservation center along the south coast and learn about marine wildlife protection, hatchery programs and rehabilitation efforts.',
            image: 'assets/img/5daysTours/31.jpg',
          },
          {
            type: 'Boat Safari',
            title: {
              title: 'Madu River Safari',
              icon: 'fa-ship',
              color: '#3498db',
            },
            description:
              'Enjoy a scenic boat safari through the mangrove forests and small islands of the Madu River. Discover local cinnamon cultivation and diverse wetland wildlife.',
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
      'Half Board Accommodation (7 Nights)',
      'Fuel & Parking Fees',
      'Airport Pickup & Drop Off',
    ],

    excludes: [
      'Entrance & Activity Fees',
      'Lunch & Drinks',
      'Personal Expenses',
    ],
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
    this.seo.updateCanonicalUrl('https://www.sundowntours.com/8-day-sri-lanka-private-tour');
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
