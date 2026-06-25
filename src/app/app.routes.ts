import { Routes } from '@angular/router';
import { LayoutComponent } from './mainComponents/layout-component/layout-component';

const seoData = (title: string, description: string, keywords: string) => ({
  title,
  description,
  keywords,
});

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./mainComponents/home-page-component/home-page-component').then(
            (m) => m.HomePageComponent,
          ),
        data: seoData(
          'Sundown Tours Sri Lanka | Private & Tailor-Made Tours',
          'Explore Sri Lanka with private tours, tailor-made holiday packages and experienced local driver guides. Discover beaches, wildlife and cultural heritage.',
          'Sri Lanka private tours, Sri Lanka tour packages, tailor made Sri Lanka tours',
        ),
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('./mainComponents/about-component/about-component').then((m) => m.AboutComponent),
        data: seoData(
          'About Sundown Tours | Trusted Sri Lanka Travel Agency',
          'Learn about Sundown Tours Sri Lanka, your trusted local tour operator providing customized and private Sri Lanka tours.',
          'Sri Lanka travel agency, Sri Lanka tour operator',
        ),
      },
      {
        path: 'our-services',
        loadComponent: () =>
          import('./mainComponents/service-component/service-component').then((m) => m.ServiceComponent),
        data: seoData(
          'Our Services | Sundown Tours Sri Lanka',
          'Explore our range of services including private tours, tailor-made holiday packages, chauffeur driven round tours and day trips.',
          'Sri Lanka private tours, Sri Lanka tour packages, tailor made Sri Lanka tours',
        ),
      },
      {
        path: 'sri-lanka-private-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/tour-packages').then((m) => m.TourPackages),
        data: seoData(
          'Sri Lanka Tour Packages | Private Round Tours',
          'Discover our customizable Sri Lanka tour packages including round tours, wildlife safaris and beach holidays.',
          'Sri Lanka tour packages, Sri Lanka round tours',
        ),
      },
      {
        path: '7-day-sri-lanka-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/roundTours/seven-days-tour-component/seven-days-tour-component').then(
            (m) => m.SevenDaysTourComponent,
          ),
        data: seoData(
          '7 Day Sri Lanka Tour Package | Cultural & Scenic Round Trip',
          'Experience the best of Sri Lanka in 7 days including Sigiriya, Kandy, Ella and Yala safari.',
          '7 day Sri Lanka tour, Sri Lanka 1 week itinerary',
        ),
      },
      {
        path: '10-day-sri-lanka-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/roundTours/ten-days-tour-component/ten-days-tour-component').then(
            (m) => m.TenDaysTourComponent,
          ),
        data: seoData(
          '10 Day Sri Lanka Tour | Complete Island Exploration',
          'Explore Sri Lanka in 10 days with beaches, wildlife safaris, hill country and cultural heritage sites.',
          '10 day Sri Lanka tour, Sri Lanka 10 day itinerary',
        ),
      },
      {
        path: '5-day-sri-lanka-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/roundTours/five-days-tour-component/five-days-tour-component').then(
            (m) => m.FiveDaysTourComponent,
          ),
        data: seoData(
          '5 Day Sri Lanka Tour | Balanced Cultural & Scenic Experience',
          'Discover a balanced mix of cultural heritage, scenic beauty and wildlife in 5 days.',
          '5 day Sri Lanka tour, Sri Lanka 5 day itinerary',
        ),
      },
      {
        path: 'ella-day-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/dayTours/ella-day-tour-component/ella-day-tour-component').then(
            (m) => m.EllaDayTourComponent,
          ),
        data: seoData(
          'Ella Day Tour | Scenic Train & Nine Arch Bridge',
          "Enjoy a private Ella day tour including Nine Arch Bridge, Little Adam's Peak and Ravana Falls.",
          'Ella day tour, Ella private tour',
        ),
      },
      {
        path: 'galle-day-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/dayTours/galle-day-tour/galle-day-tour').then((m) => m.GalleDayTour),
        data: seoData(
          'Galle Day Tour | Galle Fort & Southern Coast',
          'Discover Galle Fort, beaches and southern coastal attractions with our private day tour.',
          'Galle day tour, Galle fort tour',
        ),
      },
      {
        path: 'kandy-day-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/dayTours/kandy-day-tour-component/kandy-day-tour-component').then(
            (m) => m.KandyDayTourComponent,
          ),
        data: seoData(
          'Kandy Day Tour | Cultural & Scenic Highlights',
          'Experience the cultural and scenic highlights of Kandy including the Temple of the Sacred Tooth Relic and royal gardens.',
          'Kandy day tour, Kandy private tour',
        ),
      },
      {
        path: 'sigiriya-day-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/dayTours/sigiriya-day-tour-component/sigiriya-day-tour-component').then(
            (m) => m.SigiriyaDayTourComponent,
          ),
        data: seoData(
          'Sigiriya Day Tour | Ancient Rock Fortress',
          'Explore the ancient Sigiriya rock fortress and its surrounding gardens with our private day tour.',
          'Sigiriya day tour, Sigiriya private tour',
        ),
      },
      {
        path: 'booking-success',
        loadComponent: () =>
          import('./sharedComponents/booking-success/booking-success').then((m) => m.BookingSuccessComponent),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./sharedComponents/contact-us-component/contact-us-component').then((m) => m.ContactUsComponent),
        data: seoData(
          'Contact Sundown Tours Sri Lanka',
          'Get in touch with Sundown Tours for customized Sri Lanka tour packages and private travel services.',
          'contact Sri Lanka tour company',
        ),
      },
      {
        path: 'restaurants-in-sri-lanka',
        loadComponent: () =>
          import('./mainComponents/resturant-component/resturant-component').then((m) => m.ResturantComponent),
        data: seoData(
          'Restaurants in Sri Lanka | Best Local Cuisine',
          'Discover the best restaurants in Sri Lanka offering authentic local cuisine and international dishes.',
          'Sri Lanka restaurants, best restaurants in Sri Lanka',
        ),
      },
      {
        path: 'destinations-sri-lanka',
        loadComponent: () =>
          import('./sharedComponents/destination-component/destination-component').then(
            (m) => m.DestinationComponent,
          ),
        data: seoData(
          'Sri Lanka Destinations | Beaches, Wildlife & Cultural Sites',
          'Explore the top Sri Lanka destinations including beaches, wildlife parks and cultural heritage sites.',
          'Sri Lanka destinations, best places to visit in Sri Lanka',
        ),
      },
      {
        path: 'customer-testimonials',
        loadComponent: () =>
          import('./sharedComponents/testimonial/testimonial').then((m) => m.Testimonial),
        data: seoData(
          'Customer Testimonials | Sundown Tours Sri Lanka',
          'Read testimonials from our satisfied customers who have experienced our private Sri Lanka tours.',
          'Sri Lanka tour testimonials, customer reviews',
        ),
      },
      {
        path: 'sri-lanka-travel-guides',
        loadComponent: () =>
          import('./sharedComponents/travel-guides/travel-guides').then((m) => m.TravelGuides),
        data: seoData(
          'Sri Lanka Travel Guides | Expert Insights & Tips',
          'Explore our comprehensive travel guides for Sri Lanka, offering expert insights and practical tips.',
          'Sri Lanka travel guides, Sri Lanka travel tips',
        ),
      },
      {
        path: '2-day-ella-kandy-private-tour-sri-lanka',
        loadComponent: () =>
          import('./mainComponents/tour-packages/roundTours/two-days-tour-plus/two-days-tour-plus').then(
            (m) => m.TwoDaysTourPlus,
          ),
        data: seoData(
          '2 Day Sri Lanka Private Tour – Ella, Kandy & Udawalawa | Airport or Hotel Drop',
          'Book a 2 day Sri Lanka private tour covering Udawalawa Elephant Transit Home, Ella highlights, Ramboda Falls, Ambuluwawa Tower and Kandy Temple of the Tooth. Airport or hotel drop included.',
          '2 day Sri Lanka tour, Ella Kandy 2 day tour, Sri Lanka private tour, Udawalawa safari tour, Sri Lanka hill country tour',
        ),
      },
      {
        path: '2-day-ella-yala-private-tour-sri-lanka',
        loadComponent: () =>
          import('./mainComponents/tour-packages/roundTours/ella-yala-two-day-tour/ella-yala-two-day-tour').then(
            (m) => m.EllaYalaTwoDayTour,
          ),
        data: seoData(
          '2 Day Ella & Yala Safari Private Tour | Sri Lanka Wildlife Experience',
          "Enjoy a 2 day private tour covering Ella highlights including Nine Arch Bridge, Little Adam's Peak and Ravana Falls, followed by an exciting Yala National Park jeep safari to see leopards, elephants and wildlife.",
          'Ella Yala safari tour, 2 day Sri Lanka safari tour, Ella Yala private tour, Yala national park safari tour Sri Lanka',
        ),
      },
      {
        path: '6-day-sri-lanka-private-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/roundTours/six-days-tour/six-days-tour').then((m) => m.SixDaysTour),
        data: seoData(
          '6 Day Sri Lanka Private Tour | Sigiriya, Kandy, Ella & Yala Safari',
          'Explore Sri Lanka in 6 days with a private guided tour covering Sigiriya Rock Fortress, Kandy Temple of the Tooth, Ella hill country, Yala National Park safari and scenic beaches.',
          '6 day Sri Lanka tour, Sri Lanka 6 day itinerary, Sri Lanka private tour 6 days, Sigiriya Kandy Ella tour, Yala safari tour Sri Lanka',
        ),
      },
      {
        path: '4-day-sri-lanka-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/roundTours/fourdays-tour-component/fourdays-tour-component').then(
            (m) => m.FourdaysTourComponent,
          ),
        data: seoData(
          '4 Day Sri Lanka Tour | Cultural & Scenic Highlights',
          'Experience the best of Sri Lanka in 4 days with a private guided tour covering Sigiriya, Kandy, Ella and Yala safari.',
          '4 day Sri Lanka tour, Sri Lanka 4 day itinerary',
        ),
      },
      {
        path: '8-day-sri-lanka-private-tour',
        loadComponent: () =>
          import('./mainComponents/tour-packages/roundTours/eightdays-component/eightdays-component').then(
            (m) => m.EightdaysComponent,
          ),
        data: seoData(
          '8 Day Sri Lanka Private Tour | Wilpattu Safari, Sigiriya, Kandy, Ella & Beach Stay',
          'Discover Sri Lanka in 8 days with a private guided tour covering Wilpattu National Park safari, Anuradhapura ancient city, Sigiriya Rock Fortress, Kandy Temple of the Tooth, Ella hill country and relaxing beach stay in Hikkaduwa.',
          '8 day Sri Lanka tour, Sri Lanka 8 day itinerary, Sri Lanka private tour 8 days, Wilpattu safari tour, Sigiriya Kandy Ella beach tour',
        ),
      },
    ],
  },
];
