import type { Dict } from './types';

/**
 * English is the master dictionary and defines the full key surface. Every
 * other locale mirrors these keys; any missing key falls back to English at
 * runtime.
 */
export const en: Dict = {
  common: {
    brand: { name: 'Sundown Tours Sri Lanka', short: 'Sundown Tours' },
    nav: {
      home: 'Home',
      tours: 'Tour Packages',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    cta: {
      whatsapp: 'WhatsApp',
      exploreTours: 'Explore Tours',
      viewMore: 'View More',
      loading: 'Loading...',
      planTour: 'Plan Your Sri Lanka Tour',
      bookNow: 'Book Now',
      readMore: 'Read More',
      signUp: 'Sign Up',
      sendMessage: 'Send Message',
      viewTour: 'View Tour',
    },
    footer: {
      tagline:
        'Your trusted travel partner in Sri Lanka, offering guided tours, round trips, and tailor-made holiday experiences with reliable service.',
      followUs: 'Follow Us',
      servicesTitle: 'Our Services',
      quickMenuTitle: 'Quick Menu',
      contactTitle: 'Contact Us',
      newsletter: 'Newsletter',
      emailPlaceholder: 'Your Email',
      rights: 'All Rights Reserved.',
      dayTours: 'Sri Lankan Day Tours',
      multiDayTours: 'Multi Day Tours',
      destination: 'Destinations',
      packages: 'Packages',
    },
    consent: {
      title: 'Your privacy matters',
      subtitle: 'Analytics preferences',
      message:
        'We use optional analytics cookies to understand how visitors use our website and improve our tours and services. You can accept or reject analytics cookies at any time.',
      privacy: 'Privacy policy',
      accept: 'Accept',
      reject: 'Reject',
    },
    breadcrumb: { home: 'Home' },
    language: 'Language',
    tourUi: {
      duration: 'Duration',
      maxPeople: 'Max People',
      price: 'Price',
      priceBasis: '(based on 2 people)',
      tourType: 'Tour Type',
      overview: 'Tour Overview',
      plan: 'Tour Plan',
      day: 'Day',
      included: 'Included',
      excluded: 'Excluded',
      relatedEyebrow: 'You might also like...',
      relatedTitle: 'Highly Rated Tours',
      imageAlt: 'Sri Lanka tour photo',
      previewAlt: 'Tour photo preview',
    },
    card: {
      perPerson: '/ person',
      freeCancel: 'Free Cancel',
      instantConfirm: 'Instant Confirm',
      payLater: 'Pay Later',
    },
    booking: {
      title: 'Book This Tour',
      freeCancel: 'Free cancel',
      payLater: 'Pay later',
      travelers: 'Travelers',
      travelersWord: 'travellers',
      date: 'Date',
      onlineUpToPre: 'Online booking for up to',
      onlineUpToPost: 'travellers',
      travelersInvalid: 'Required (1\u201320)',
      dateRequired: 'Date required',
      groupTitle: 'Group Booking',
      groupText:
        'For groups of 7 or more travellers, online pricing is not available. Our team will prepare a custom itinerary and offer you the best group rate.',
      groupHintPre: 'Need instant booking? Select',
      groupHintPost: 'travellers or fewer above.',
      emailTeam: 'Email Our Team',
      whatsappUs: 'WhatsApp Us',
      firstName: 'First Name',
      lastName: 'Last Name',
      required: 'Required',
      email: 'Email',
      emailInvalid: 'Valid email required',
      phone: 'Phone',
      phoneInvalid: 'Valid phone required',
      country: 'Country',
      selectCountry: 'Select country',
      countryRequired: 'Country required',
      total: 'Total',
      payAtDestination: 'Pay at destination',
      agreeTerms: 'I agree to the terms & conditions',
      acceptTermsError: 'You must accept terms',
      complete: 'Complete Booking',
      processing: 'Processing...',
      toastProcessing: 'Processing your booking...',
      toastPleaseWait: 'Please wait',
      toastSuccess: 'Your booking has been completed successfully!',
      toastConfirmed: 'Booking Confirmed',
      toastErrorMsg: 'There was an error processing your booking. Please try again later.',
      toastFailed: 'Booking Failed',
    },
  },

  home: {
    hero: {
      title: 'Sri Lanka Tours & Private Driver Services',
      subtitle:
        'Discover private Sri Lanka tours with experienced local chauffeur guides. Explore Sigiriya, Ella, Yala, Kandy, Nuwara Eliya, Mirissa and Galle with customized itineraries for couples, families and luxury travelers.',
      slide2: 'Unforgettable Sri Lanka Tour Packages',
      slide3: 'Private Tours Across Beautiful Sri Lanka',
      slide4: 'Discover Sigiriya, Ella & Sri Lanka Highlights',
      slide5: 'Sri Lanka Wildlife Safaris & Adventure Tours',
    },
    intro: {
      title: 'Sri Lanka Tours with Local Experts',
      subtitle: 'Private tours, chauffeur driver services and tailor-made holidays across Sri Lanka.',
      feature1: 'Private Tours',
      feature2: 'Chauffeur Drivers',
      feature3: 'Tailor-Made Packages',
      feature4: 'Trusted Local Guides',
    },
    destinations: {
      title: 'Top Sri Lanka Destinations',
      subtitle: 'Discover handpicked destinations with luxury experiences across Sri Lanka.',
      explore: 'Explore Tours',
      exploreAria: 'Explore tours for',
      sigiriya: 'Sigiriya',
      sigiriyaAlt: 'Sigiriya Rock Fortress Sri Lanka',
      ella: 'Ella',
      ellaAlt: 'Ella scenic train journey Sri Lanka',
      yala: 'Yala Safari',
      yalaAlt: 'Yala National Park safari Sri Lanka',
      kandy: 'Kandy',
      kandyAlt: 'Kandy cultural city Sri Lanka',
      dambulla: 'Dambulla',
      dambullaAlt: 'Dambulla cave temple Sri Lanka',
      galle: 'Galle',
      galleAlt: 'Galle Fort Sri Lanka',
    },
    packages: {
      tag: 'PACKAGES',
      title: 'Explore Our Best Tours',
      subtitle: 'Choose from our best-selling Sri Lanka tours or customize your private experience.',
      multiDay: 'Multi-Day Tours',
      day: 'Day Tours',
    },
    about: {
      tag: 'ABOUT US',
      title: 'Trusted Sri Lanka Tour Company',
      p1: 'Sundown Tours Sri Lanka has been delivering trusted travel experiences since 1992. With over three decades of expertise, we specialize in private tours, tailor-made holidays, and chauffeur driven journeys designed around each traveler\u2019s unique needs.',
      p2: 'From the cultural heritage of Sigiriya and Kandy to the scenic beauty of Ella, Nuwara Eliya, and the wildlife of Yala National Park, we create unforgettable journeys across Sri Lanka.',
      gallery1Alt: 'Private Sri Lanka tour with Sundown Tours',
      gallery2Alt: 'Sri Lanka tour packages with chauffeur guide',
    },
    features: {
      f1Title: 'Affordable Sri Lanka Tour Packages',
      f1Desc: 'Affordable private Sri Lanka tours and tailor-made holiday packages for every budget.',
      f2Title: 'Professional Chauffeur Guides & Personalized Service',
      f2Desc: 'Experienced chauffeur guides covering Sigiriya, Kandy, Ella, Yala, and Galle.',
      f3Title: 'Trusted Sri Lanka Travel Experts',
      f3Desc: 'Cultural tours, wildlife safaris, beach holidays, and luxury private round tours.',
    },
    services: {
      eyebrow: 'Sri Lanka Travel Services',
      title: 'Premium Sri Lanka Tours, Travel & Chauffeur Services',
      lead: 'Complete Sri Lanka travel solutions including private tours, chauffeur driven round tours, hotel reservations, train tickets, and customized holiday packages.',
      s1Title: 'Multilingual Private Chauffeur Guides in Sri Lanka',
      s1Desc: 'Professional multilingual chauffeur guides for personalized private tours.',
      s2Title: 'Train Tickets & Attraction Entrance Booking',
      s2Desc: 'Ella train tickets, safari bookings, and entrance tickets arranged for you.',
      s3Title: 'Hotel Booking & Tailor-Made Accommodation',
      s3Desc: 'Handpicked hotel bookings from luxury resorts to budget guesthouses.',
    },
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'How do I book a private Sri Lanka tour?',
        a: 'You can book directly through WhatsApp or our contact form. We reply within 24 hours with a tailor-made itinerary and a transparent quote for your private tour.',
      },
      {
        q: 'Do your tours include a private driver guide?',
        a: 'Yes. Every Sundown Tours package includes a licensed English-speaking chauffeur guide, a comfortable air-conditioned vehicle, fuel and all driver expenses.',
      },
      {
        q: 'Can the itinerary be customized?',
        a: 'Absolutely. All of our Sri Lanka tours are fully tailor-made. Tell us your travel dates, interests and budget and we will design the perfect route for you.',
      },
      {
        q: 'When is the best time to visit Sri Lanka?',
        a: 'Sri Lanka is a year-round destination. The south and west coasts are best from December to April, while the east coast shines from May to September.',
      },
    ],
  },

  about: {
    header: 'About',
    breadcrumb: 'About',
    eyebrow: 'About Us',
    title: 'Trusted Sri Lanka Tour Company',
    p1: 'Sundown Tours Sri Lanka is a trusted local tour company offering private Sri Lanka tours, tailor-made holiday packages, and chauffeur driven round tours across the island.',
    p2: 'Explore the best of Sri Lanka including Sigiriya, Kandy, Ella, Nuwara Eliya, Galle, and Yala National Park. We provide comfortable vehicles, friendly chauffeur guides, and personalized travel experiences for families, couples, and honeymoon travelers.',
    p3: 'Plan your perfect Sri Lanka holiday with a reliable local tour operator and enjoy safe, comfortable, and unforgettable travel experiences.',
    features: {
      f1Title: 'Affordable Sri Lanka Tour Packages',
      f1Desc:
        'We provide affordable private Sri Lanka tours, tailor-made holiday packages, and chauffeur-driven tours designed to fit every budget without compromising comfort, safety, and quality travel experiences.',
      f2Title: 'Professional Chauffeur Guides & Personalized Service',
      f2Desc:
        'Our experienced chauffeur guides and travel experts ensure a safe, comfortable, and personalized Sri Lanka travel experience, covering top destinations like Sigiriya, Kandy, Ella, Yala, and Galle.',
      f3Title: 'Trusted Sri Lanka Travel Experts',
      f3Desc:
        'As a trusted local Sri Lanka tour operator, we welcome travelers worldwide and offer unforgettable experiences including cultural tours, wildlife safaris, beach holidays, and luxury private round tours across Sri Lanka.',
    },
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'How long has Sundown Tours operated in Sri Lanka?',
        a: 'We have been crafting private tours across Sri Lanka since 1992, with more than 30 years of local expertise and thousands of happy travelers from across Europe.',
      },
      {
        q: 'Are you a licensed local tour operator?',
        a: 'Yes, Sundown Tours is a locally registered and licensed Sri Lankan tour operator with professional, government-approved chauffeur guides.',
      },
      {
        q: 'Which languages do your guides speak?',
        a: 'Our chauffeur guides speak fluent English, and we can arrange guides for other European languages on request.',
      },
    ],
  },

  services: {
    header: 'Our Services',
    breadcrumb: 'Services',
    eyebrow: 'What We Offer',
    title: 'Sri Lanka Travel & Chauffeur Services',
    lead: 'From private round tours and day trips to hotel reservations and train tickets, we handle every detail of your Sri Lanka holiday.',
    items: {
      s1Title: 'Private Sri Lanka Round Tours',
      s1Desc:
        'Multi-day private round tours with a dedicated chauffeur guide, covering culture, wildlife, hill country and beaches.',
      s2Title: 'Chauffeur Driver Services',
      s2Desc:
        'Comfortable air-conditioned vehicles with a licensed English-speaking driver for the entire journey.',
      s3Title: 'Tailor-Made Holiday Packages',
      s3Desc: 'Fully customized itineraries designed around your dates, interests, pace and budget.',
      s4Title: 'Wildlife Safari Tours',
      s4Desc: 'Jeep safaris in Yala, Udawalawe and Wilpattu to see leopards, elephants and exotic birds.',
      s5Title: 'Hotel & Accommodation Booking',
      s5Desc: 'Handpicked stays from luxury resorts to boutique guesthouses at the best available rates.',
      s6Title: 'Airport Transfers & Day Tours',
      s6Desc: 'Reliable airport pick-up and drop-off plus flexible private day tours to top attractions.',
    },
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What is included in your chauffeur service?',
        a: 'Our chauffeur service includes a modern air-conditioned vehicle, a licensed English-speaking driver guide, fuel, parking and all driver accommodation and meals.',
      },
      {
        q: 'Do you offer airport pick-up?',
        a: 'Yes, we provide reliable pick-up and drop-off at Bandaranaike International Airport (CMB) as part of every tour.',
      },
    ],
  },

  tours: {
    header: 'Sri Lanka Tour Packages',
    breadcrumb: 'Tour Packages',
    eyebrow: 'Private Round Tours',
    title: 'Private Sri Lanka Tour Packages',
    lead: 'Discover our best-selling private Sri Lanka round tours, from short 2-day escapes to complete 10-day island journeys. Every tour is private, tailor-made and led by an experienced chauffeur guide.',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'Are these Sri Lanka tours private?',
        a: 'Yes, every tour is 100% private. You travel only with your own group, your own chauffeur guide and your own vehicle, with the freedom to adjust the itinerary.',
      },
      {
        q: 'How much does a private Sri Lanka tour cost?',
        a: 'Prices depend on the number of travelers, hotel category and season. Contact us for a transparent, tailor-made quote with no hidden fees.',
      },
      {
        q: 'Which tour is best for first-time visitors?',
        a: 'Our 7 to 10 day round tours are ideal for first-time visitors as they combine culture, wildlife, hill country and beaches in one balanced itinerary.',
      },
    ],
  },

  contact: {
    header: 'Contact Us',
    breadcrumb: 'Contact',
    eyebrow: 'Get In Touch',
    title: 'Plan Your Sri Lanka Tour',
    lead: 'Tell us about your dream Sri Lanka holiday and our local team will reply within 24 hours with a tailor-made itinerary.',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Your Phone',
      message: 'Your Message',
      submit: 'Send Message',
    },
    infoTitle: 'Contact Information',
    address: 'No 302, Mahawaskaduwa, Waskaduwa, Kalutara North, Sri Lanka',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'How quickly will you reply to my enquiry?',
        a: 'We reply to all tour enquiries within 24 hours, usually much faster via WhatsApp.',
      },
      {
        q: 'Can I contact you on WhatsApp?',
        a: 'Yes, WhatsApp is the fastest way to reach us. Message us any time and our local team will help plan your trip.',
      },
    ],
  },

  tour7: {
    header: '7 Day Sri Lanka Tour',
    breadcrumb: '7 Day Sri Lanka Tour',
    title: '7 Day Sri Lanka Private Tour',
    lead: 'Experience the best of Sri Lanka in seven days: the Sigiriya rock fortress, the sacred city of Kandy, the scenic hill country of Ella and an unforgettable Yala safari, all with your private chauffeur guide.',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What does the 7 day Sri Lanka tour include?',
        a: 'The tour includes a private chauffeur guide, air-conditioned vehicle, all transport, and a flexible itinerary covering Sigiriya, Kandy, Ella and Yala National Park. Hotels can be added in your preferred category.',
      },
      {
        q: 'Is 7 days enough to see Sri Lanka?',
        a: 'Seven days is a perfect introduction to Sri Lanka, comfortably combining culture, hill country scenery and a wildlife safari without feeling rushed.',
      },
      {
        q: 'Can I extend the 7 day tour with a beach stay?',
        a: 'Yes. We can easily add extra nights on the south or west coast for a relaxing beach finish to your Sri Lanka holiday.',
      },
    ],
  },

  seo: {
    home: {
      title: 'Sundown Tours Sri Lanka | Private & Tailor-Made Tours',
      description:
        'Explore Sri Lanka with private tours, tailor-made holiday packages and experienced local driver guides. Discover beaches, wildlife and cultural heritage.',
      keywords: 'Sri Lanka private tours, Sri Lanka tour packages, tailor made Sri Lanka tours, Sri Lanka private driver',
    },
    tours: {
      title: 'Sri Lanka Tour Packages | Private Round Tours from UK & Europe',
      description:
        'Discover our customizable Sri Lanka tour packages for European travelers. Tailor-made holidays, private drivers, and luxury safaris.',
      keywords: 'Sri Lanka tour packages, Sri Lanka round tours, Sri Lanka holidays from UK, private tours',
    },
    services: {
      title: 'Our Services | Sundown Tours Sri Lanka',
      description:
        'Explore our range of services including private tours, tailor-made holiday packages, chauffeur driven round tours and day trips.',
      keywords: 'Sri Lanka private tours, Sri Lanka tour packages, tailor made Sri Lanka tours, chauffeur service',
    },
    about: {
      title: 'About Sundown Tours | Trusted Sri Lanka Travel Agency',
      description:
        'Learn about Sundown Tours Sri Lanka, your trusted local tour operator providing customized and private Sri Lanka tours since 1992.',
      keywords: 'Sri Lanka travel agency, Sri Lanka tour operator, trusted Sri Lanka tours',
    },
    contact: {
      title: 'Contact Sundown Tours Sri Lanka | Plan Your Private Tour',
      description:
        'Get in touch with Sundown Tours for customized Sri Lanka tour packages and private travel services. We reply within 24 hours.',
      keywords: 'contact Sri Lanka tour company, book Sri Lanka private tour',
    },
    tour7: {
      title: '7 Day Sri Lanka Tour Package | Cultural & Scenic Round Trip',
      description:
        'Experience the best of Sri Lanka in 7 days including Sigiriya, Kandy, Ella and Yala safari with a private chauffeur guide.',
      keywords: '7 day Sri Lanka tour, Sri Lanka 1 week itinerary, private Sri Lanka round tour',
    },
    tour10: {
      title: '10 Day Sri Lanka Tour | Complete Island Exploration',
      description:
        'Explore Sri Lanka in 10 days with beaches, wildlife safaris, hill country and cultural heritage sites.',
      keywords: '10 day Sri Lanka tour, Sri Lanka 10 day itinerary',
    },
    tour8: {
      title: '8 Day Sri Lanka Private Tour | Wilpattu Safari, Sigiriya, Kandy, Ella & Beach Stay',
      description:
        'Discover Sri Lanka in 8 days with a private guided tour covering Wilpattu National Park safari, Anuradhapura, Sigiriya, Kandy, Ella and a relaxing beach stay in Hikkaduwa.',
      keywords: '8 day Sri Lanka tour, Sri Lanka 8 day itinerary, Wilpattu safari tour',
    },
    tour6: {
      title: '6 Day Sri Lanka Private Tour | Sigiriya, Kandy, Ella & Yala Safari',
      description:
        'Explore Sri Lanka in 6 days with a private guided tour covering Sigiriya, Kandy, Ella hill country, Yala safari and scenic beaches.',
      keywords: '6 day Sri Lanka tour, Sri Lanka 6 day itinerary, Sigiriya Kandy Ella tour',
    },
    tour5: {
      title: '5 Day Sri Lanka Tour | Balanced Cultural & Scenic Experience',
      description: 'Discover a balanced mix of cultural heritage, scenic beauty and wildlife in 5 days.',
      keywords: '5 day Sri Lanka tour, Sri Lanka 5 day itinerary',
    },
    tour4: {
      title: '4 Day Sri Lanka Tour | Cultural & Scenic Highlights',
      description:
        'Experience the best of Sri Lanka in 4 days with a private guided tour covering Sigiriya, Kandy, Ella and Yala safari.',
      keywords: '4 day Sri Lanka tour, Sri Lanka 4 day itinerary',
    },
    tour2ek: {
      title: '2 Day Sri Lanka Private Tour \u2013 Ella, Kandy & Udawalawa | Airport or Hotel Drop',
      description:
        'Book a 2 day Sri Lanka private tour covering Udawalawa, Ella highlights, Ramboda Falls, Ambuluwawa Tower and Kandy Temple of the Tooth.',
      keywords: '2 day Sri Lanka tour, Ella Kandy 2 day tour, Sri Lanka private tour',
    },
    tour2ey: {
      title: '2 Day Ella & Yala Safari Private Tour | Sri Lanka Wildlife Experience',
      description:
        'A 2 day private tour covering Ella highlights and an exciting Yala National Park jeep safari to see leopards, elephants and wildlife.',
      keywords: 'Ella Yala safari tour, 2 day Sri Lanka safari tour, Yala national park safari',
    },
    ellaDay: {
      title: 'Ella Day Tour | Scenic Train & Nine Arch Bridge',
      description: "Enjoy a private Ella day tour including Nine Arch Bridge, Little Adam's Peak and Ravana Falls.",
      keywords: 'Ella day tour, Ella private tour',
    },
    galleDay: {
      title: 'Galle Day Tour | Galle Fort & Southern Coast',
      description: 'Discover Galle Fort, beaches and southern coastal attractions with our private day tour.',
      keywords: 'Galle day tour, Galle fort tour',
    },
    kandyDay: {
      title: 'Kandy Day Tour | Cultural & Scenic Highlights',
      description:
        'Experience the cultural and scenic highlights of Kandy including the Temple of the Sacred Tooth Relic and royal gardens.',
      keywords: 'Kandy day tour, Kandy private tour',
    },
    sigiriyaDay: {
      title: 'Sigiriya Day Tour | Ancient Rock Fortress',
      description: 'Explore the ancient Sigiriya rock fortress and its surrounding gardens with our private day tour.',
      keywords: 'Sigiriya day tour, Sigiriya private tour',
    },
    destinations: {
      title: 'Sri Lanka Destinations | Beaches, Wildlife & Cultural Sites',
      description: 'Explore the top Sri Lanka destinations including beaches, wildlife parks and cultural heritage sites.',
      keywords: 'Sri Lanka destinations, best places to visit in Sri Lanka',
    },
    guides: {
      title: 'Sri Lanka Travel Guides | Expert Insights & Tips',
      description: 'Explore our comprehensive travel guides for Sri Lanka, offering expert insights and practical tips.',
      keywords: 'Sri Lanka travel guides, Sri Lanka travel tips',
    },
    restaurants: {
      title: 'Restaurants in Sri Lanka | Best Local Cuisine',
      description: 'Discover the best restaurants in Sri Lanka offering authentic local cuisine and international dishes.',
      keywords: 'Sri Lanka restaurants, best restaurants in Sri Lanka',
    },
    testimonials: {
      title: 'Customer Testimonials | Sundown Tours Sri Lanka',
      description: 'Read testimonials from our satisfied customers who have experienced our private Sri Lanka tours.',
      keywords: 'Sri Lanka tour testimonials, customer reviews',
    },
    privacy: {
      title: 'Privacy Policy | Sundown Tours Sri Lanka',
      description: 'Read the privacy and analytics cookie policy of Sundown Tours Sri Lanka.',
      keywords: 'privacy policy',
    },
    bookingSuccess: {
      title: 'Booking Received | Sundown Tours Sri Lanka',
      description: 'Thank you for your Sri Lanka tour enquiry. Our team will contact you shortly.',
      keywords: '',
    },
  },
};
