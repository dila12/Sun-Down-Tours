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
        'Your trusted travel partner in Sri Lanka, offering guided tours, round trips, and tailor made holiday experiences with reliable service.',
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
      travelGuides: 'Travel Guides',
      cancellation: 'Cancellation Policy',
      privacy: 'Privacy Policy',
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
    faqTitle: 'Frequently Asked Questions',
    language: 'Language',
    tourUi: {
      duration: 'Duration',
      maxPeople: 'Max People',
      price: 'Price',
      priceBasis: '(based on 2 people)',
      tourType: 'Tour Type',
      overview: 'Tour Overview',
      highlights: 'Tour Highlights',
      whoIsFor: 'Who This Tour Is For',
      bestTimeNote: 'Best Time to Go',
      plan: 'Tour Plan',
      day: 'Day',
      included: 'Included',
      excluded: 'Excluded',
      relatedEyebrow: 'You might also like...',
      relatedTitle: 'Highly Rated Tours',
      exploreGraphTitle: 'Plan this trip',
      exploreGraphLead: 'Continue with destinations, travel guides and dining linked to this tour.',
      exploreDestinations: 'Destinations on this route',
      exploreGuides: 'Helpful travel guides',
      exploreRestaurants: 'Where to eat',
      exploreSimilarTours: 'Similar tours',
      imageAlt: 'Sri Lanka tour photo',
      previewAlt: 'Tour photo preview',
      bookNow: 'Book this tour',
      chatWhatsApp: 'Chat on WhatsApp',
      trustFreeCancel: 'Free cancellation',
      trustPayLater: 'Pay later',
      trustLocal: 'Local team since 1992',
      reviewsTripAdvisor: 'Read TripAdvisor reviews',
      mobileBookBar: 'Ready to book?',
    },
    card: {
      perPerson: '/ person',
      freeCancel: 'Free Cancel',
      instantConfirm: 'Instant Confirm',
      payLater: 'Payment Later',
    },
    booking: {
      title: 'Book This Tour',
      freeCancel: 'Free cancel',
      payLater: 'Payment Later',
      travelers: 'Travelers',
      travelersWord: 'travellers',
      date: 'Date',
      onlineUpToPre: 'Online booking for up to',
      onlineUpToPost: 'travellers',
      travelersInvalid: 'Required (1\u201320)',
      dateRequired: 'Date required',
      prevMonth: 'Previous month',
      nextMonth: 'Next month',
      groupTitle: 'Group Booking',
      groupText:
        'For groups of 7 or more travellers, online pricing is not available. Our team will prepare a custom itinerary and offer you the best group rate.',
      groupHintPre: 'Need instant booking? Select',
      groupHintPost: 'travellers or fewer above.',
      emailTeam: 'Email Our Team',
      whatsappUs: 'WhatsApp Us',
      firstName: 'First Name',
      firstNamePh: 'John',
      lastName: 'Last Name',
      lastNamePh: 'Doe',
      required: 'Required',
      email: 'Email',
      emailInvalid: 'Valid email required',
      phone: 'Phone',
      phoneInvalid: 'Valid phone required',
      country: 'Country',
      selectCountry: 'Select country',
      countryRequired: 'Country required',
      total: 'Total',
      paymentMethod: 'Payment Method',
      payAtDestination: 'Payment Later (Pay at Destination)',
      agreeTerms: 'I agree to the terms & conditions',
      acceptTermsError: 'You must accept terms',
      complete: 'Complete Booking',
      bookAheadLead: 'Dates fill fast',
      bookAheadDetail: 'Private tours are limitedsecure your preferred date now.',
      demandWarningLead: 'High demand',
      demandWarningDetail: 'This day books fastreserve soon to keep your preferred date. Still available online.',
      oneBookingLeftLead: 'Only 1 booking left',
      oneBookingLeftDetail: 'This date is almost gonecomplete booking now to secure your spot.',
      bookingsLeftLead1: 'Only 1 booking left',
      bookingsLeftLead2: 'Only 2 bookings left',
      bookingsLeftLead3: 'Only 3 bookings left',
      bookingsLeftDetail1: 'This date is almost gonecomplete booking now to secure your spot.',
      bookingsLeftDetail2: 'Only a couple of bookings left for this datereserve soon to keep it.',
      bookingsLeftDetail3: 'Just a few bookings left for this datereserve soon to keep it.',
      fewSpotsLeft: 'Few spots left',
      almostFullLead: 'Almost full',
      almostFullDetail: 'This date is filling fastcomplete your booking now to secure it. Still available online.',
      demandBookSoon: 'Still bookable onlinesecure this date before it goes.',
      softUrgencyLead: 'Popular dates fill fast',
      softUrgencyDetail: 'Private tours book out early on busy weekdays.',
      popularDates: 'Popular dates',
      blockedTitle: 'Fully booked',
      blockedText:
        'This departure date is fully booked. Contact our team for a waitlist or another start date.',
      peakTitle: 'High demand day',
      peakText:
        'Saturdays are often fully booked for private multi day tours. Message us to check real time availability.',
      confirmLead: 'Subject to confirmation',
      confirmDetail: 'We will confirm your private driver within 24 hours after booking.',
      tryAnotherDate: 'Or pick another date above to book online.',
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
      title: 'Tours in Sri Lanka, Private Tours and Holiday Packages',
      subtitle:
        'Tours to Sri Lanka and tours of Sri Lanka with a local private driver. Plan Sri Lanka holidays, day tours, safari tours and itineraries covering Sigiriya, Kandy, Ella and Galle.',
      slide2: 'Unforgettable Sri Lanka Tour Packages',
      slide3: 'Private Tours Across Beautiful Sri Lanka',
      slide4: 'Discover Sigiriya, Ella & Sri Lanka Highlights',
      slide5: 'Sri Lanka Wildlife Safaris & Adventure Tours',
    },
    intro: {
      title: 'Sri Lanka Tours with Local Experts',
      subtitle: 'Tours in Sri Lanka with a private chauffeur guide: hire a driver for tailor made holidays, safari tours, day tours and beach time.',
      feature1: 'Private Tours',
      feature2: 'Chauffeur Drivers',
      feature3: 'tailor made Packages',
      feature4: 'Trusted Local Guides',
    },
    destinations: {
      title: 'What to See in Sri Lanka',
      subtitle: 'Top 10 places to visit in Sri Lanka on a private tour: Sigiriya, Kandy Temple of the Tooth, Ella train, Nuwara Eliya Sri Lanka, Yala safari and Galle.',
      explore: 'Explore destination',
      exploreAria: 'Explore',
      sigiriya: 'Sigiriya Rock Fortress',
      sigiriyaAlt: 'Sigiriya Rock Fortress Sri Lanka',
      ella: 'Ella & Nine Arch Bridge',
      ellaAlt: 'Nine Arch Bridge and Ella scenic train journey Sri Lanka',
      yala: 'Yala National Park Safari',
      yalaAlt: 'Yala National Park safari Sri Lanka',
      kandy: 'Kandy Temple of the Tooth',
      kandyAlt: 'Temple of the Tooth Relic Kandy Sri Lanka',
      dambulla: 'Dambulla',
      dambullaAlt: 'Dambulla cave temple Sri Lanka',
      galle: 'Galle Fort',
      galleAlt: 'Galle Fort Sri Lanka',
    },
    popular: {
      title: 'Popular Sri Lanka Tours',
      tour7: '7 Day Sri Lanka Tour',
      tour8: '8 Day Private Tour',
      ellaDay: 'Ella Day Tour',
      sigiriyaDay: 'Sigiriya Day Tour',
    },
    packages: {
      tag: 'PACKAGES',
      title: 'Explore Our Best Tours',
      subtitle: 'Tours in Sri Lanka, tours to Sri Lanka and Sri Lanka tour packages. Private guided tours, not large coach groups.',
      multiDay: 'Multi Day Tours',
      day: 'Day Tours',
    },
    about: {
      tag: 'ABOUT US',
      title: 'Trusted Sri Lanka Tour Company',
      p1: 'Sundown Tours Sri Lanka has been a licensed inbound tourism operator since 1992. With over three decades of expertise, we specialise in Sri Lanka private tours, tailor-made holidays and chauffeur-driven journeys designed around each traveller’s needs.',
      p2: 'From Sigiriya Rock Fortress and the Kandy Temple of the Tooth to Ella’s Nine Arch Bridge, the hill-country train ride and Yala National Park safari, we plan the most beautiful places in Sri Lanka into one private itinerary.',
      gallery1Alt: 'Private Sri Lanka tour with Sundown Tours',
      gallery2Alt: 'Sri Lanka tour packages with chauffeur guide',
    },
    features: {
      f1Title: 'Affordable Sri Lanka Tour Packages',
      f1Desc: 'Affordable private Sri Lanka tours and tailor made holiday packages for every budget.',
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
      s3Title: '4 Star Hotel Accommodation',
      s3Desc: 'Carefully selected 4 Star Hotel Accommodation for private Sri Lanka tour packages.',
    },
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'How do I book a private Sri Lanka tour?',
        a: 'You can book directly through WhatsApp or our contact form. We reply within 24 hours with a tailor made itinerary and a transparent quote for your private tour.',
      },
      {
        q: 'Do your Sri Lanka tour packages include a private driver?',
        a: 'Yes. Every Sundown Tours holiday package includes a licensed English speaking chauffeur guide, an air conditioned vehicle, fuel and all driver expenses. You do not share the car with other groups.',
      },
      {
        q: 'Can the itinerary be customized?',
        a: 'Absolutely. All of our Sri Lanka tours are fully tailor-made. Tell us your travel dates, interests and budget and we will design the perfect route for you.',
      },
      {
        q: 'What are the most beautiful places in Sri Lanka?',
        a: 'On a private tour we usually include Sigiriya Rock Fortress, the Kandy Temple of the Tooth, Ella’s Nine Arch Bridge and hill-country train, a Yala National Park safari, and a south-coast stay near Galle or Mirissa.',
      },
      {
        q: 'Do you handle Sri Lanka inbound tourism for private groups?',
        a: 'Yes. Sundown Tours is a local inbound tourism operator based in Waskaduwa. We plan Sri Lanka private tours for travellers from the UK and Europe, with a chauffeur guide, hotels and safari bookings.',
      },
      {
        q: 'Where is the best Sri Lanka safari?',
        a: 'Yala National Park is the best-known Sri Lanka safari for leopards. Udawalawe is stronger for elephants and families. We book private jeep safaris to match your dates and route.',
      },
      {
        q: 'When is the best time to visit Sri Lanka from Europe?',
        a: 'Sri Lanka is a year round destination. The south and west coasts are best from December to April; the east coast is typically better from May to September. We plan private itineraries around the monsoon that matches your travel month.',
      },
      {
        q: 'Which Sri Lanka tour package is best for first time visitors?',
        a: 'Most first time visitors choose a 7, 8 or 10 day private round tour: Cultural Triangle (Sigiriya, Kandy), hill country (Ella, Nuwara Eliya), a wildlife safari and a beach finish.',
      },
      {
        q: 'Do you offer Sri Lanka holidays for travellers from Europe?',
        a: 'Yes. We specialise in private chauffeur tours for guests from Germany, the UK, France, Italy, Spain, the Netherlands, Switzerland and Poland, with driver guides in English, German, Polish and Russian and WhatsApp planning before you fly.',
      },
      {
        q: 'Can I hire a Sri Lanka private driver or chauffeur?',
        a: 'Yes. Searchers looking for driver Sri Lanka, Sri Lanka private driver or chauffeur Sri Lanka get a licensed chauffeur guide, not a shared coach. Airport pickup in Colombo is included on multi day tours.',
      },
      {
        q: 'What to see in Sri Lanka in one trip?',
        a: 'Top 10 places to visit in Sri Lanka on our routes include Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella train, Yala or Wilpattu safari, Galle, Mirissa whale watching in season, Bentota or Madu River, and Colombo if you want a city day.',
      },
      {
        q: 'Do you run Sri Lanka group tours or private tours?',
        a: 'We run Sri Lanka private tours for your own family or friends. That is a small private group with your own vehicle and tour guide, not a large Sri Lanka group tour coach. If you searched Sri Lanka small group tours, this private format is usually the better fit.',
      },
      {
        q: 'Do you offer Sri Lanka day tours and guided tours from Colombo?',
        a: 'Yes. Sri Lanka day tours include Sigiriya, Kandy, Ella and Galle with a licensed chauffeur tour guide. Multi day tours of Sri Lanka add safari, hill country and beach time.',
      },
      {
        q: 'Where is Sri Lanka and what time is it from the UK?',
        a: 'Where is sri lanka: island south of India. Time sri lanka / sri lanka time: UTC+5:30. We plan sri lanka holidays, not england vs sri lanka cricket.',
      },
      {
        q: 'Are you TUI or Intrepid?',
        a: 'No. Sri lanka private tours and sri lanka guided tours with a local chauffeur. Not TUI sri lanka, not Intrepid, not Trailfinders, not helicopter tours.',
      },
    ],
  },

  about: {
    header: 'About',
    breadcrumb: 'About',
    eyebrow: 'About Us',
    title: 'Trusted Sri Lanka Tour Company Since 1992',
    p1: 'Sundown Tours Sri Lanka is a locally registered inbound tourism operator based in Waskaduwa on the west coast. Since 1992 we have planned Sri Lanka private tours for travellers from the UK, Europe and beyond — licensed chauffeur guides and itineraries that match your pace rather than a fixed group schedule.',
    p2: 'Our routes cover the most beautiful places in Sri Lanka: Sigiriya Rock Fortress, the Kandy Temple of the Tooth, Ella’s Nine Arch Bridge and hill-country train, Yala National Park safari, and the south-west coast around Galle. Every package includes a private air-conditioned vehicle, an English-speaking chauffeur guide, fuel and driver expenses; hotels, entrance tickets and safaris can be arranged with transparent pricing.',
    p3: 'Whether you need a one-day Sigiriya excursion or a ten-day island circuit finishing at the beach, you speak directly with our planning team on WhatsApp or email. We reply within 24 hours with a proposed route, realistic driving times and a clear quoteo call centres, no hard sell.',
    whyTitle: 'Why Choose Sundown Tours',
    whyIntro:
      'We are a Waskaduwa based family tour company. You speak with the same local planners who build your route call centreravel with a private chauffeur guide who knows the roads, timings and seasonal conditions.',
    why1Title: 'Local expertise since 1992',
    why1Body:
      'Three decades of private chauffeur driven tours for travellers from Germany, the UK, France, Italy, Spain, Poland and beyond, with realistic driving times and transparent quotes.',
    why2Title: 'Named people you can message',
    why2Body:
      'Meet Dilan (Founder) and Yohan (Senior Consultant) on our team sectiontsApp them directly for itinerary questions before you book.',
    why3Title: 'Private vehicle, your pace',
    why3Body:
      'Every package includes a private air conditioned vehicle and chauffeur guide. Hotels, tickets and safaris can be arranged with clear pricing.',
    teamTitle: 'Meet Our Team',
    teamLead:
      'The same local planners who answer your WhatsApp also help shape your route. Photos and roles below match the people you will speak with.',
    founderName: 'Dilan Lakshitha',
    founderRole: 'Owner & Founder',
    founderBio:
      'Founder of Sundown Tours Sri Lanka. Plans private itineraries from Waskaduwa and coordinates chauffeur guides across the Cultural Triangle, hill country, wildlife parks and the southwest coast.',
    consultantName: 'Yohan Malshika',
    consultantRole: 'Senior Consultant',
    consultantBio:
      'Senior consultant supporting Europe bound travellers with day to day planning, WhatsApp updates and adjustments while you are on the road in Sri Lanka.',
    driversTitle: 'Chauffeur guides',
    driversBody:
      'Your journey is with a professional chauffeur guide in a private vehicle. Guides speak fluent English; other European languages can be arranged on request. We do not publish individual driver licence numbers on this website.',
    hqTitle: 'Headquarters',
    hqBody:
      'Our only published office is our headquarters in Waskaduwa, Kalutara North, Sri Lanka. We do not claim regional or international branch offices on this website.',
    successTitle: 'Traveller feedback',
    successBody:
      'Read recent guest experiences on TripAdvisor and the review widget on our homepage. We do not invent testimonials or awards we have not earned.',
    partnershipsTitle: 'Local partnerships',
    partnershipsBody:
      'We work with hotels, safari jeep operators and local restaurants along our routes including Sundown Beach Restaurant in Waskaduwa and disclose booking prices transparently in your quote.',
    credentialsTitle: 'Licensing & registration',
    credentialsBody:
      'Sundown Tours is a locally registered Sri Lankan tour operator. We do not publish registration or tourism board certificate numbers on this page unless a scanned certificate is available for verification. Ask us on WhatsApp if you need documentation for your booking.',
    features: {
      f1Title: 'Affordable Sri Lanka Tour Packages',
      f1Desc:
        'We provide affordable private Sri Lanka tours, tailor made holiday packages, and chauffeur driven tours designed to fit every budget without compromising comfort, safety, and quality travel experiences.',
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
        a: 'Yes, Sundown Tours is a locally registered and licensed Sri Lankan tour operator with professional, government approved chauffeur guides.',
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
        'Multi day private round tours with a dedicated chauffeur guide, covering culture, wildlife, hill country and beaches.',
      s2Title: 'Chauffeur Driver Services',
      s2Desc:
        'Comfortable air conditioned vehicles with a licensed English speaking driver for the entire journey.',
      s3Title: 'tailor made Holiday Packages',
      s3Desc: 'Fully customized itineraries designed around your dates, interests, pace and budget.',
      s4Title: 'Wildlife Safari Tours',
      s4Desc: 'Jeep safaris in Yala, Udawalawe and Wilpattu to see leopards, elephants and exotic birds.',
      s5Title: 'Hotel & Accommodation Booking',
      s5Desc: 'Handpicked stays from luxury resorts to boutique guesthouses at the best available rates.',
      s6Title: 'Airport Transfers & Day Tours',
      s6Desc: 'Reliable airport pick up and drop off plus flexible private day tours to top attractions.',
    },
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What is included in your chauffeur service?',
        a: 'Our chauffeur service includes a modern air conditioned vehicle, a licensed English speaking driver guide, fuel, parking and all driver accommodation and meals.',
      },
      {
        q: 'Do you offer airport pick up?',
        a: 'Yes, we provide reliable pick up and drop off at Bandaranaike International Airport (CMB) as part of every tour.',
      },
    ],
  },

  tours: {
    header: 'Sri Lanka Tour Packages',
    breadcrumb: 'Tour Packages',
    eyebrow: 'Private Round Tours',
    title: 'Tours of Sri Lanka and Tour Packages',
    lead: 'Compare tours in Sri Lanka, tours to Sri Lanka and Sri Lanka tour packages from Colombo. Private holiday tours, package tours and guided tours for 4 to 10 days. We also plan Sri Lanka tours from India and Sri Lanka tours from Australia with a clear quote.',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'Are these Sri Lanka tours private?',
        a: 'Yes, every tour is 100% private. You travel only with your own group, your own chauffeur guide and your own vehicle, with the freedom to adjust the itinerary.',
      },
      {
        q: 'How much do Sri Lanka tour packages cost?',
        a: 'Prices depend on travellers, hotel category and season. We quote in a clear package (vehicle, driver guide, fuel) so you can compare private holidays without hidden extras. Message us for a tailored quote.',
      },
      {
        q: 'Which Sri Lanka holiday is best for first time visitors?',
        a: 'Our 7 to 10 day round tours are ideal for first time visitors as they combine culture, wildlife, hill country and beaches in one balanced itinerary.',
      },
      {
        q: 'Can I book a Sri Lanka vacation with a private driver only?',
        a: 'Yes. Choose a full tour package with hotels arranged, or a chauffeur only itinerary if you prefer to book stays yourself. Both options include a licensed private driver guide.',
      },
      {
        q: 'Do you offer Sri Lanka tour packages from India?',
        a: 'Yes. Travellers searching for Sri Lanka tours from India, India and Sri Lanka tours, or Sri Lanka trip cost from India receive a private driver quote from Colombo airport, with hotels optional.',
      },
      {
        q: 'What is a good Sri Lanka itinerary for 7 or 10 days?',
        a: 'A 7 day Sri Lanka itinerary covers Sigiriya, Kandy, Ella and safari plus beach. A 10 day Sri Lanka itinerary adds slower hill country, Nuwara Eliya and extra wildlife or coast time.',
      },
      {
        q: 'Do you offer Sri Lanka tours from Australia?',
        a: 'Yes. Guests booking tours to Sri Lanka from Australia get the same private guided format after they land in Colombo. We do not sell flights. We plan the island tour, driver and hotels.',
      },
      {
        q: 'Are these Sri Lanka package tours private or group?',
        a: 'Every Sri Lanka tour package is private. You do not join a large group tour. Your own small group travels with one chauffeur tour guide.',
      },
    ],
  },

  contact: {
    header: 'Contact Us',
    breadcrumb: 'Contact',
    eyebrow: 'Get In Touch',
    title: 'Plan Your Sri Lanka Tour',
    lead: 'Tell us about your dream Sri Lanka holiday and our local team will reply within 24 hours with a tailor made itinerary.',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Your Phone',
      phonePlaceholder: '712345678',
      countryCode: 'Country code',
      message: 'Your Message',
      submit: 'Send Message',
      sending: 'Sending…',
      success: 'Your message has been sent successfully!',
      successToast: 'Message sent successfully!',
      error: 'There was an error sending your message. Please try again later.',
      errorToast: 'Failed to send message',
      nameRequired: 'Please enter your name',
      emailRequired: 'Please enter a valid email',
      phoneRequired: 'Please enter a valid phone number (7 to 15 digits)',
      messageRequired: 'Please enter your message',
      trustReply: 'Reply within 24h',
      trustPrivate: 'Private enquiry',
    },
    infoTitle: 'Contact Information',
    infoSubtitle: 'Speak directly with our Sri Lanka based planning team.',
    address: 'No 302, Mahawaskaduwa, Waskaduwa, Kalutara North, Sri Lanka',
    responseTime: 'Within 24 hours usually faster on WhatsApp',
    labels: {
      headquarters: 'Headquarters',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      hours: 'Business hours',
      response: 'Response time',
    },
    cta: {
      whatsapp: 'Chat on WhatsApp',
      tripadvisor: 'Read TripAdvisor Reviews',
      maps: 'Open Google Maps',
    },
    trustTitle: 'Why travellers choose us',
    trust: {
      experts: 'Local Sri Lankan experts',
      tailored: 'tailor made tours',
      response: 'Fast response within 24 hours',
      travelers: 'Happy travelers since 1992',
    },
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
        a: 'The tour includes a private chauffeur guide, air conditioned vehicle, all transport, and a flexible itinerary covering Sigiriya, Kandy, Ella and Yala National Park. Hotels can be added in your preferred category.',
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

  notFound: {
    title: 'Page Not Found',
    breadcrumb: '404',
    heading: 'We could not find that page',
    body: 'The link may be outdated, mistyped, or the page may have moved. Use the links below to continue planning your private Sri Lanka tour.',
    ctaHome: 'Back to home',
    ctaTours: 'View tour packages',
    ctaContact: 'Contact us',
    helpfulLinks: 'Helpful links',
    linkDriver: 'Private driver guide',
  },

  cancellation: {
    eyebrow: 'Bookings & Changes',
    h1: 'Cancellation Policy',
    heroText:
      'This page explains how Sundown Tours Sri Lanka handles booking changes, deposits and cancellations for private tours and chauffeur driver  services.',
    lastUpdated: 'Last updated: 18 July 2026',
    backLink: 'Back to home',
    summaryTitle: 'At a glance',
    s1: 'Enquiries are free \u2014 no charge before confirmation',
    s2: 'A deposit may be required to hold your dates',
    s3: 'Free cancellation up to 14 days before your tour starts',
    s4: 'Contact us by WhatsApp or email to request changes',
    sec1Title: '1. Before your booking is confirmed',
    sec1P1:
      'Sending an enquiry or receiving a quotation does not commit you to travel. You may withdraw at any time before paying a deposit, at no cost.',
    sec1P2:
      'We will confirm availability, itinerary details and the total price in writing before asking for any payment.',
    sec2Title: '2. Deposits and confirmation',
    sec2P1:
      'To secure your preferred dates, vehicle and driver, we may ask for a deposit. The amount and due date will be stated clearly in your booking confirmation.',
    sec2P2:
      'Your tour is considered confirmed once we receive the agreed deposit and send written confirmation. The remaining balance is typically due before or at the start of your tour, as stated in your confirmation.',
    sec3Title: '3. Cancellation by you',
    sec3Intro:
      'If you need to cancel a confirmed booking, please contact us as soon as possible. Refunds depend on how far in advance you cancel:',
    tier1Label: '14 or more days before the tour start date:',
    tier1Text: 'full refund of any deposit paid',
    tier2Label: '7\u201313 days before the tour start date:',
    tier2Text: '50% refund of the deposit',
    tier3Label: 'Less than 7 days before the start date, or no show:',
    tier3Text: 'deposit is non refundable',
    sec3Note:
      'Bank or payment provider fees already incurred may be deducted from any refund. Third party costs we have prepaid on your behalf (park tickets, hotel deposits, safari jeeps, etc.) are refunded only if those suppliers allow a refund.',
    sec4Title: '4. Changes to your booking',
    sec4P1:
      'Date changes, route adjustments and group size updates are often possible if we have enough notice and availability. Minor changes made more than 7 days before travel are usually handled at no extra charge.',
    sec4P2:
      'Major changes close to your start date, or changes that require rebooking prepaid services, may incur additional costs. We will always explain any fees before you confirm the change.',
    sec5Title: '5. Cancellation or changes by Sundown Tours',
    sec5P1:
      'We rarely cancel confirmed tours. If we must do so because of vehicle breakdown, driver illness or another issue within our control, we will offer an alternative driver or vehicle, reschedule your dates, or provide a full refund of amounts paid to us for undelivered services.',
    sec6Title: '6. Force majeure',
    sec6P1:
      'Events beyond our reasonable control \u2014 such as severe weather, natural disasters, civil unrest, public health restrictions, or government travel bans \u2014 may affect your tour or our ability to operate on certain routes.',
    sec6P2:
      'In such cases we will work with you in good faith to reschedule where possible. If travel is not feasible, refunds will be handled fairly based on services already delivered and costs we cannot recover from suppliers.',
    sec7Title: '7. Travel insurance',
    sec7P1:
      'We recommend travel insurance that covers cancellation, medical expenses and trip interruption. Insurance claims are handled directly between you and your insurer; we can provide documentation to support a claim where appropriate.',
    sec8Title: '8. How to request a change or cancellation',
    sec8P1:
      'Please contact us as soon as your plans change. The fastest way to reach us is WhatsApp; email is fine for written records.',
    whatsappLabel: 'WhatsApp:',
    emailLabel: 'Email:',
    locationLabel: 'Location:',
    sec8P2: 'Include your name, tour dates and booking reference (if you have one) so we can respond quickly.',
  },

  testimonials: {
    header: 'Guest Reviews',
    breadcrumb: 'Reviews',
    eyebrow: 'Review Center',
    title: 'Real Guest Reviews for Sundown Tours Sri Lanka',
    intro:
      'Read recent feedback from travellers who booked private chauffeur tours with us. Reviews below are loaded from our live review widget and our TripAdvisor listing we do not invent testimonials or star ratings on this page.',
    attribution:
      'Every review is attributed on the platform where it was published. If review schema is shown in search results elsewhere, it must match visible platform reviews only.',
    ctaTripadvisor: 'Open TripAdvisor reviews',
    ctaWhatsapp: 'Ask us on WhatsApp',
    ctaTours: 'Browse private tour packages',
    topicsHeading: 'Explore related tours and guides',
    topics: {
      toursTitle: 'Tour package reviews',
      toursBody: 'See multi day private itineraries guests commonly book after reading reviews.',
      toursLink: 'View tour packages',
      safariTitle: 'Safari experiences',
      safariBody: 'Plan Yala and wildlife days with our safari guide, then confirm details on WhatsApp.',
      safariLink: 'Read the safari guide',
      familyTitle: 'Family travellers',
      familyBody: 'Pacing tips for private family tours with children of different ages.',
      familyLink: 'Family tours guide',
      honeymoonTitle: 'Honeymoon & couples',
      honeymoonBody: 'Private routes mixing culture, tea country and beach time for couples.',
      honeymoonLink: 'Honeymoon guide',
      driverTitle: 'Private chauffeur',
      driverBody: 'What a driver guide service includes and how European guests typically use it.',
      driverLink: 'Private driver guide',
      destinationsTitle: 'Destinations',
      destinationsBody: 'Deep dive destination pages for Sigiriya, Ella, Yala, Kandy, Dambulla and Galle.',
      destinationsLink: 'Browse destinations',
    },
    ariaCarousel: 'Guest reviews',
    ariaSlide: 'Review',
  },

  destinationsHub: {
    h1: 'Most Beautiful Places in Sri Lanka',
    breadcrumb: 'Destinations',
    lead: 'Sri Lanka travel places that shape a private tour: Sigiriya rock fortress, Kandy Temple of the Tooth, Ella’s Nine Arch Bridge and hill-country train, Yala National Park safari, Dambulla, Galle Fort and Mirissa.',
    relatedTitle: 'Related destinations',
  },
  guidesHub: {
    h1: 'Sri Lanka Travel Guides',
    breadcrumb: 'Travel Guides',
    lead: 'Practical, locally written guides covering visas, seasons, wildlife, beaches and how to travel Sri Lanka with a private driver.',
    relatedTitle: 'Related guides',
    cardCta: 'Read guide',
    restaurantsTitle: 'Where to eat',
    restaurantLink: 'Sundown Beach Restaurant',
    foodGuideLink: 'Sri Lanka food guide',
  },

  restaurantsExplore: {
    h1: 'Where to Eat in Sri Lanka: Coast Dining & Sundown Beach Restaurant',
    breadcrumb: 'Restaurants',
    intro:
      'Eating well in Sri Lanka is less about a single “best restaurant” list and more about matching the meal to the coast, the time of day and how far you want to travel after dinner. Rice and curry is the everyday staple inland; grilled seafood defines the south and west coasts; Galle Fort mixes colonial dining rooms with serious coffee. This page explains where travellers actually eat on a private tour, then lists the full menu at Sundown Beach Restaurant in Waskaduwaour own coastal kitchen between Colombo and Galle.',
    aroundTitle: 'How dining works on a Sri Lanka tour',
    aroundBody:
      'On a chauffeur guided round tour, lunch is usually a set rice and curry house chosen for cleanliness and pace, not a long restaurant stop. Dinner is where you choose: hotel restaurant, a beach grill, or a town you are already sleeping in. Confirm whether seafood is priced per kilo before ordering whole fish or crabthe most common bill surprise on the south coast.\n\nVegetarians eat easily if you ask for vegetable curries without Maldive fish; vegans should say so clearly. Drink sealed water. Tip 5 to 10% only when service is not already included.',
    westTitle: 'West coast: Negombo, Kalutara and Waskaduwa',
    westBody:
      'The west coast is where most European flights land, so the first and last meals of a trip often happen here. Negombo has tourist grills near the beach; Colombo has hotel dining and a few strong local rice and curry rooms. Between Kalutara and Waskaduwa the catch is localtuna, seer, prawns and crabcooked the same day.\n\nSundown Beach Restaurant sits on this stretch (No 302, Mahawaskaduwa, Waskaduwa). Guests on our private tours often stop for a seafood lunch or a last dinner before a CMB departure. Opening hours are 8:00 to 22:00 daily; call +94 70 629 3585 to reserve a table.',
    southTitle: 'South coast and Galle Fort',
    southBody:
      'Unawatuna, Mirissa and Tangalle are strongest for simply grilled fish with lime, chilli and garlic butter. Inside Galle Fort, converted Dutch houses serve Sri Lankan spice with international technique; prices rise inside the walls, quality is usually reliable. Combine a morning on the ramparts with lunch in the fort or a later meal back on the Kalutara to Waskaduwa coast if you are heading north.\n\nFor a wider food primerhoppers, kottu, hoppers vs string hoppers, and spice levelsread our Sri Lanka food guide. The menu below is the working card at Sundown Beach Restaurant, not a generic island wide list.',
    title: 'Explore nearby destinations & tours',
    lead: 'Sundown Beach Restaurant in Waskaduwa pairs easily with southwest coast stops and day toursGalle Fort, west coast beaches and private chauffeur itineraries.',
    contactCta: 'Plan a private tour',
    faqTitle: 'Restaurants & Sundown Beach FAQ',
    faq: [
      {
        q: 'Is Sundown Beach Restaurant open to non hotel guests?',
        a: 'Yes. It is a coastal restaurant in Waskaduwa, open daily 8:00 to 22:00. You do not need to be on a Sundown Tours package to book a table.',
      },
      {
        q: 'Where should I eat on a first night after landing at CMB?',
        a: 'Most guests stay near Negombo or on the west coast (Kalutara/Waskaduwa) and eat locally rather than driving to Galle the same evening. Sundown Beach Restaurant is a straightforward seafood stop on that stretch.',
      },
      {
        q: 'Is seafood priced per portion or per kilo?',
        a: 'At Sundown Beach Restaurant the listed menu prices are per dish. Elsewhere on the south coast, always confirm per kilo versus per portion pricing before ordering whole fish or crab.',
      },
      {
        q: 'Can you include restaurant stops on a private tour?',
        a: 'Yes. Tell us dietary needs when you book. Lunch stops are planned around driving time; dinner can be at Sundown Beach Restaurant when you sleep on the west coast, or in Galle Fort / a beach town on south coast nights.',
      },
    ],
  },

  bookingSuccess: {
    heroTitle: 'Booking Confirmed!',
    thankYouPrefix: 'Thank you,',
    emailSentTo: 'A confirmation email has been sent to',
    tagline: 'Sri Lanka Private Tours',
    confirmedBadge: 'CONFIRMED',
    issued: 'Issued',
    travelerDetails: 'Traveler Details',
    tourDetails: 'Tour Details',
    paymentSummary: 'Payment Summary',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    country: 'Country',
    travelDate: 'Travel Date',
    travelers: 'Travelers',
    personSingular: 'person',
    personPlural: 'persons',
    tour: 'Tour',
    duration: 'Duration',
    tourType: 'Tour Type',
    payment: 'Payment Method',
    payAtDestination: 'Payment Later (Pay at Destination)',
    description: 'Description',
    qty: 'Qty',
    amount: 'Amount',
    tourPackageFallback: 'Tour Package',
    subtotal: 'Subtotal',
    amountPaid: 'Amount Paid',
    amountDue: 'Amount Due',
    presentInvoice:
      'Please present this invoice on arrival. Our team will contact you if any details are needed.',
    thanks: 'We appreciate your booking enjoy your Sri Lanka adventure!',
    printInvoice: 'Print Invoice',
    backHome: 'Back to Home',
    defaultTravelerName: 'Traveler',
    emptyValue: '—',
  },

  seo: {
    home: {
      title: 'Tours in Sri Lanka | Private Tours to Sri Lanka 2026',
      description:
        'Tours in Sri Lanka, tours to Sri Lanka and tours of Sri Lanka with a private driver. Guided tours, day tours, safari tours and holiday packages from Colombo since 1992.',
      keywords:
        'tours in sri lanka, tours to sri lanka, tours of sri lanka, sri lanka tours, sri lanka tour, sri lanka private tours, sri lanka guided tours, sri lanka day tours, visit sri lanka tours, sri lanka holidays, holidays to sri lanka, sri lanka holiday, sri lanka tourism, sri lanka things to do, things to do in sri lanka, visiting sri lanka',
    },
    tours: {
      title: 'Sri Lanka Tour Packages | Package Tours and Holiday Tours',
      description:
        'Sri Lanka tour packages, package tours and holiday tours. Private tours of Sri Lanka from Colombo, plus tours from India and tours from Australia. Not a large group coach.',
      keywords:
        'sri lanka tour packages, sri lanka tours packages, sri lanka package tours, sri lanka tour package, sri lanka holiday tours, sri lanka holidays, holidays in sri lanka, sri lanka private tours, sri lanka group tours, sri lanka small group tours, sri lanka luxury tours, sri lanka safari tours, sri lanka adventure tours, sri lanka holidays 2026',
    },
    services: {
      title: 'Private Driver Sri Lanka | Chauffeur Tours and Holiday Services',
      description:
        'Hire a Sri Lanka private driver, chauffeur guide and private tours from Colombo. Day trips, round tours and holiday packages with a licensed local operator.',
      keywords:
        'sri lanka private driver, private driver sri lanka, chauffeur sri lanka, driver sri lanka, sri lanka adventure tours, sri lanka day tours, sri lanka guided tours',
    },
    about: {
      title: 'About Sundown Tours | Local Travel Agency Sri Lanka',
      description:
        'Sundown Tours is a local travel agency and tour operator in Sri Lanka since 1992. Private tours, chauffeur guide and holidays from Colombo.',
      keywords:
        'sri lanka travel agency, local travel agency sri lanka, sri lanka tour operator, travel agency in colombo sri lanka, sri lanka tours and travels',
    },
    contact: {
      title: 'Travel to Sri Lanka | Book a Private Tour from the UK',
      description:
        'Travel to sri lanka and sri lanka travel: WhatsApp for sri lanka private tours. We reply within 24 hours. Not TUI, not airline tickets.',
      keywords: 'travel to sri lanka, sri lanka travel, visiting sri lanka, sri lanka private tours, sri lanka holidays',
    },
    tour7: {
      title: '7 Day Sri Lanka Tour | One Week Itinerary with Private Driver',
      description:
        'One week in Sri Lanka itinerary: Sigiriya, Kandy, Ella and Yala safari with a private chauffeur guide. Best Sri Lanka itinerary for first time visitors.',
      keywords:
        '7 day sri lanka tour, sri lanka in 7 days, one week in sri lanka, 1 week in sri lanka itinerary, sri lanka one week, best sri lanka itinerary',
    },
    tour10: {
      title: '10 Day Sri Lanka Tour | 10 Day Itinerary and Island Circuit',
      description:
        'Sri Lanka 10 day itinerary with beaches, safari, hill country and cultural sites. Also a base for 12 day and 14 day itinerary Sri Lanka private tours.',
      keywords:
        'sri lanka 10 day itinerary, sri lanka itinerary 10 days, sri lanka in 10 days, 10 days in sri lanka, sri lanka 10 days itinerary, 14 day itinerary sri lanka, 12 day itinerary sri lanka',
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
      title: '5 Day Sri Lanka Tour | 5 Day Itinerary Private Round Trip',
      description: 'Sri Lanka 5 day itinerary mixing culture, hill country and wildlife with a private driver.',
      keywords: '5 day sri lanka tour, sri lanka 5 day itinerary, 5 days in sri lanka itinerary',
    },
    tour4: {
      title: '4 Day Sri Lanka Tour | 4 Days Highlights with Private Driver',
      description:
        '4 days Sri Lanka private tour: Sigiriya, Kandy, Ella and Yala safari with a chauffeur guide.',
      keywords: '4 days sri lanka, 4 day sri lanka tour, sri lanka 4 days itinerary',
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
      keywords: 'Ella Yala safari tour, sri lanka safari tours, sri lanka wildlife tours, yala national park safari',
    },
    ellaDay: {
      title: 'Ella Day Tour | Sri Lanka Day Tours from Hill Country',
      description:
        'Sri Lanka day tours to Ella: Nine Arch Bridge, scenic train views, Little Adams Peak and Ravana Falls with a private chauffeur tour guide.',
      keywords: 'sri lanka day tours, ella day tour, ella sri lanka, nine arch bridge, ella private tour',
    },
    galleDay: {
      title: 'Galle Day Tour | Sri Lanka Day Tours to Galle Fort',
      description: 'Sri Lanka day tours to Galle Fort, beaches and the southern coast with a private driver.',
      keywords: 'sri lanka day tours, galle day tour, galle sri lanka, galle fort tour',
    },
    kandyDay: {
      title: 'Kandy Day Tour | Sri Lanka Day Tours to the Temple of the Tooth',
      description:
        'Sri Lanka day tours to Kandy: Temple of the Tooth, Kandy Lake and Peradeniya Gardens with a chauffeur tour guide.',
      keywords: 'sri lanka day tours, kandy day tour, kandy sri lanka, kandy lake, temple of the sacred tooth relic, temple of the tooth',
    },
    sigiriyaDay: {
      title: 'Sigiriya Day Tour | Sri Lanka Day Tours to Lion Rock',
      description:
        'Sri Lanka day tours to Sigiriya rock fortress, Dambulla cave temple and optional elephant safari with a private driver.',
      keywords: 'sri lanka day tours, sigiriya day tour, sigiriya sri lanka, lion rock, lions rock, sigiriya rock fortress, what to do in sigiriya',
    },
    destinations: {
      title: 'What to See in Sri Lanka | Things to Do and Top 10 Places',
      description:
        'Things to do in Sri Lanka and what to see: Sigiriya, Kandy, Ella train, Nuwara Eliya, Yala safari, Galle, Mirissa and Colombo on a private tour.',
      keywords:
        'things to do in sri lanka, sri lanka things to do, what to see in sri lanka, sri lanka map, where is sri lanka, sigiriya sri lanka, kandy sri lanka, ella sri lanka',
    },
    guides: {
      title: 'Sri Lanka Travel Guides | Itinerary Tips and Local Advice',
      description: 'Sri Lanka travel guides for itineraries, private driver hire, safari, trains and holidays.',
      keywords: 'sri lanka travel guide, sri lanka travel, sri lanka itinerary, sri lanka tourism',
    },
    destSigiriya: {
      title: 'Sigiriya Sri Lanka | Lion Rock, Fortress and Day Tours',
      description:
        'Sigiriya sri lanka, lion rock sri lanka and lions rock: climb, water gardens, pidurangala, what to do in sigiriya. Private day tour from Colombo, Negombo or Kandy.',
      keywords:
        'sigiriya, sigiriya sri lanka, sri lanka sigiriya, sigiriya rock, sigiriya rock sri lanka, lion rock, lion rock sri lanka, sri lanka lion rock, lions rock, the lion rock, lions rock sigiriya, sigiriya fortress, sigiriya rock fortress, where is sigiriya located, what to do in sigiriya, sigiriya things to do, pidurangala, pidurangala rock, weather sigiriya, sigiriya weather, colombo to sigiriya, sigiriya to colombo, kandy to sigiriya, sigiriya to kandy, negombo to sigiriya, colombo airport to sigiriya',
    },
    destElla: {
      title: 'Ella Sri Lanka | Nine Arch Bridge, Train Ride & Hill Country',
      description:
        'Visit Ella, Sri Lanka: Nine Arch Bridge, the Kandy to Ella train ride, Little Adam’s Peak and tea trails on a private hill-country day trip or overnight stay.',
      keywords:
        'ella sri lanka, things to do in ella, ella rock, kandy to ella, kandy to ella train, sri lanka train, nine arch bridge, ella day tour',
    },
    destYala: {
      title: 'Yala National Park Safari | Jeep Safari & Leopards',
      description:
        'Book a Yala National Park safari in Sri Lanka: leopard jeep safari tips, best time to visit, park fees and how to combine Yala with Ella or the south coast.',
      keywords: 'yala national park safari, yala safari, safari sri lanka, sri lanka safari, sri lanka safari tours, sri lanka wildlife tours, wilpattu national park, ella to yala national park',
    },
    destKandy: {
      title: 'Kandy Sri Lanka | Temple of the Tooth and Day Tours',
      description:
        'Visit the Kandy Temple of the Tooth (Sri Dalada Maligawa): ceremony times, dress code, lake walks, Peradeniya Gardens and private day tours from Colombo.',
      keywords: 'kandy sri lanka, kandy, kandy lake, what to do in kandy, what to do in kandy sri lanka, temple of the sacred tooth relic, kandy temple of the tooth, kandy weather, kandy day tour',
    },
    destDambulla: {
      title: 'Dambulla Cave Temple | Golden Rock Temple & Sigiriya Day Tours',
      description:
        'Visit Dambulla’s UNESCO cave temple: murals, Buddha statues, climb tips and how to combine it with Sigiriya on a Cultural Triangle day tour.',
      keywords: 'dambulla sri lanka, dambulla, dambulla to sigiriya, Dambulla cave temple, Golden Temple Dambulla',
    },
    destGalle: {
      title: 'Galle Fort Sri Lanka | Ramparts, Lighthouse & Coast Tours',
      description:
        'Walk Galle Fort’s Dutch ramparts, lighthouse and boutique lanes. Private day tour tips and how to combine Galle Sri Lanka with Mirissa or Hiriketiya beaches.',
      keywords: 'galle sri lanka, galle, galle fort, galle day tour, unesco galle',
    },
    guideBestTime: {
      title: 'Best Time to Visit Sri Lanka | Weather & Month by Month Guide',
      description:
        'Best time to visit Sri Lanka: two monsoons, weather by region, safari and whale watching timing, and how to plan a private itinerary around the season.',
      keywords: 'best time to visit sri lanka, sri lanka weather, weather sri lanka, weather in sri lanka, sri lanka weather january, colombo weather, kandy weather, weather sigiriya',
    },
    guideVisa: {
      title: 'Sri Lanka Entry Requirements 2026 | ETA & Visa Guide',
      description:
        'Sri Lanka entry requirements for European travellers: ETA rules from 25 May 2026, free 30 day tourist ETA for 40 countries. Apply before travel at eta.gov.lk, not on unofficial sites.',
      keywords: 'sri lanka entry requirements, sri lanka visa, Sri Lanka ETA 2026, eta.gov.lk',
    },
    guidePrivateDriver: {
      title: 'Sri Lanka Private Driver | Hire a Chauffeur Guide',
      description:
        'Hire a Sri Lanka private driver or chauffeur. What a driver Sri Lanka tour includes, daily costs, tipping and how to plan a flexible itinerary with a local chauffeur guide.',
      keywords:
        'sri lanka private driver, private driver sri lanka, sri lanka tour guide, sri lanka guided tours, driver sri lanka, sri lanka driver, sri lanka driver guide, chauffeur sri lanka, private taxi sri lanka, sri lanka tour driver, private driver tours sri lanka',
    },
    guideBudget: {
      title: 'GBP to LKR | Sri Lanka Costs on a Private Holiday',
      description:
        'Gbp to lkr changes daily. We quote sri lanka holidays clearly. We do not send money to sri lanka from uk or run a Global Exchange ticker.',
      keywords: 'gbp to lkr, sri lanka hotels, Sri Lanka budget travel, Sri Lanka costs',
    },
    guideWildlife: {
      title: 'Sri Lanka Wildlife Guide | Elephants, Leopards & Whales',
      description:
        'Where to see elephants, leopards, whales and birds in Sri Lanka national parks, seasons and wildlife hotspots explained.',
      keywords: 'sri lanka wildlife tours, sri lanka wildlife, elephants sri lanka, leopard safari, whale watching sri lanka',
    },
    guideSafari: {
      title: 'Sri Lanka Safari | Yala, Udawalawe & Jeep Safari Guide',
      description:
        'Plan a Sri Lanka safari: Yala vs Udawalawe, jeep booking, park fees and what to expect on a morning or afternoon game drive with a private driver.',
      keywords: 'sri lanka safari tours, sri lanka safari, safari sri lanka, safaris in sri lanka, yala safari, udawalawe jeep safari, wilpattu national park, minneriya safari, kaudulla national park safari, madu river safari sri lanka',
    },
    guideBeaches: {
      title: 'Sri Lanka Beaches Guide | Mirissa, Hiriketiya, Galle & East Coast',
      description:
        'Choose the right Sri Lanka beach for your dates: Mirissa, Hiriketiya, Galle coast, west coast resorts and east coast bays compared by monsoon season.',
      keywords: 'sri lanka beaches, sri lanka beach, Mirissa, Hiriketiya, Galle beaches, best beaches Sri Lanka',
    },
    guideTeaCountry: {
      title: 'Sri Lanka Tea Country Guide | Hill Country & Plantations',
      description:
        'Explore Nuwara Eliya, Ella and the hill country tea trails plantation visits, scenic trains and highland walks.',
      keywords: 'Sri Lanka tea country, Nuwara Eliya, Ella hill country, tea plantations Sri Lanka',
    },
    guideFood: {
      title: 'Sri Lanka Food Guide | Rice & Curry, Spices & Street Food',
      description:
        'Sri Lankan cuisine explained: rice and curry, hoppers, kottu, spices and street food what to try and how to order with confidence.',
      keywords: 'sri lanka food tours, sri lanka food, rice and curry, sri lankan street food, sri lanka cuisine',
    },
    guidePacking: {
      title: 'What to Pack for Sri Lanka | Clothing & Essentials',
      description:
        'A practical packing list for Sri Lanka clothing for heat and hill country cool, temple dress codes, safari gear and essentials.',
      keywords: 'packing list Sri Lanka, what to pack Sri Lanka, Sri Lanka travel essentials',
    },
    guideSafety: {
      title: 'Is Sri Lanka Safe to Travel? | Safety Guide for Visitors',
      description:
        'Is it safe to travel to Sri Lanka? Practical advice for European visitors: roads, scams, wildlife, health and travelling with a private driver.',
      keywords: 'is sri lanka safe, is it safe to travel to sri lanka, sri lanka travel, travel to sri lanka',
    },
    cancellation: {
      title: 'Cancellation Policy | Sundown Tours Sri Lanka',
      description:
        'Booking changes, deposit rules and cancellation terms for private tours and chauffeur driver  services with Sundown Tours Sri Lanka.',
      keywords: 'cancellation policy, tour cancellation Sri Lanka, booking changes',
    },
    restaurants: {
      title: 'Where to Eat in Sri Lanka | Sundown Beach Restaurant Menu',
      description:
        'Where travellers eat on a Sri Lanka private tour: west coast seafood, Galle Fort dining and the full Sundown Beach Restaurant menu in Waskaduwa.',
      keywords: 'Sri Lanka restaurants, where to eat Sri Lanka, Sundown Beach Restaurant, Waskaduwa seafood',
    },
    testimonials: {
      title: 'Guest Reviews | Sundown Tours Sri Lanka Review Center',
      description:
        'Read real guest reviews for Sundown Tours private Sri Lanka chauffeur tours via our live review widget and TripAdvisor no invented testimonials.',
      keywords: 'Sundown Tours reviews, Sri Lanka private tour reviews, TripAdvisor Sundown Tours',
    },
    privacy: {
      title: 'Privacy Policy | Sundown Tours Sri Lanka',
      description: 'Read the privacy and analytics cookie policy of Sundown Tours Sri Lanka.',
      keywords: 'privacy policy',
    },
    destColombo: {
      title: 'Colombo Sri Lanka Guide | Airport, City and First Night',
      description:
        'Colombo Sri Lanka as your UK flight gateway: CMB vs the city, first night hotels, a one day city loop and how Colombo fits a private island itinerary.',
      keywords: 'colombo sri lanka, colombo, sri lanka airport, colombo airport, colombo weather, colombo to sigiriya, colombo to kandy, colombo to negombo',
    },
    destNegombo: {
      title: 'Negombo Sri Lanka | Beach Next to Colombo Airport',
      description:
        'Negombo as first night after CMB: 20 to 40 minute transfer, lagoon town, then private tour onward to Sigiriya or the west coast.',
      keywords: 'negombo sri lanka, negombo, colombo airport, colombo to negombo, negombo to sigiriya',
    },
    destBentota: {
      title: 'Bentota Sri Lanka | West Coast Beach Holidays',
      description:
        'Bentota beach holidays with private chauffeur links to Galle, Mirissa and Weligamabest in the west coast dry season.',
      keywords: 'bentota sri lanka, bentota river, madu river safari sri lanka, madu ganga balapitiya, bentota tour',
    },
    destMirissa: {
      title: 'Mirissa Sri Lanka | Whale Watching, Beaches & Coconut Tree Hill',
      description:
        'Plan Mirissa Sri Lanka: whale watching season, Coconut Tree Hill, beaches and pairing with Galle Fort or Hiriketiya on a private south coast tour.',
      keywords: 'mirissa, mirissa sri lanka, mirissa whale watching, coconut tree hill, mirissa beach',
    },
    destHiriketiya: {
      title: 'Hiriketiya Sri Lanka Guide | Surf Bay, Cafes & South Coast',
      description:
        'Hiriketiya is a compact south coast surf bay. When to visit, how it compares with Mirissa, and how to add it to a private Sri Lanka holiday.',
      keywords: 'hiriketiya, hiriketiya sri lanka, Hiriketiya beach, south coast Sri Lanka',
    },
    destWeligama: {
      title: 'Weligama Sri Lanka Guide | Beginner Surf & south coast Bay',
      description:
        'Weligama surf beach between Galle and Mirissa: lessons, season, and how to use it as the beach finish on a private round tour.',
      keywords: 'Weligama Sri Lanka, Weligama surf, Weligama beach',
    },
    destNuwaraEliya: {
      title: "Nuwara Eliya Sri Lanka | Tea Country Tours and Highlands",
      description: "Nuwara Eliya Sri Lanka tea country stays between Kandy and Ella on private hill country itineraries.",
      keywords: 'nuwara eliya sri lanka, nuwara eliya, tea country, kandy to nuwara eliya by train',
    },
    destAnuradhapura: {
      title: "Anuradhapura Sri Lanka | Ancient Sacred City",
      description: "Explore Anuradhapura with a private driver in Sri Lanka Cultural Triangle itineraries.",
      keywords: "Anuradhapura Sri Lanka, mihintale, Anuradhapura tour, Cultural Triangle",
    },
    destPolonnaruwa: {
      title: "Polonnaruwa Sri Lanka | Medieval Ruins Guide",
      description: "Visit Polonnaruwa ruins on a private Cultural Triangle tour with Sundown Tours.",
      keywords: "polonnaruwa ancient city, Polonnaruwa Sri Lanka, Polonnaruwa tour, Cultural Triangle",
    },
    destTrincomalee: {
      title: 'Trincomalee Sri Lanka | East Coast Beaches & Harbour',
      description:
        'Trincomalee, Nilaveli and Uppuveli: when the east coast is drier than Galle, what to do, and how to fit it into a 10 to 14 day private tour.',
      keywords: 'Trincomalee Sri Lanka, trincomalee, nilaveli beach, Nilaveli, east coast Sri Lanka, sigiriya to trincomalee',
    },
    destArugamBay: {
      title: "Arugam Bay Sri Lanka | Surf and East Coast",
      description: "Arugam Bay surf town stays linked by private transfer after wildlife or culture days.",
      keywords: "Arugam Bay Sri Lanka, Arugam Bay surf, east coast Sri Lanka",
    },
    destKalpitiya: {
      title: "Kalpitiya Sri Lanka | Lagoon and Dolphins",
      description: "Kalpitiya lagoon, kitesurf and dolphin trips with private transfers from Negombo.",
      keywords: "Kalpitiya Sri Lanka, Kalpitiya dolphins, west coast lagoon",
    },
    guideWhaleWatching: {
      title: "Whale Watching Sri Lanka | Mirissa & Private Tours",
      description:
        "Plan seasonal whale watching from Mirissa or Trincomalee inside a private chauffeur itinerary realistic seasons, no guaranteed sightings.",
      keywords: 'whale watching sri lanka, mirissa whale watching, whale watching mirissa',
    },
    guideTrainJourneys: {
      title: 'Kandy to Ella Train | Scenic Sri Lanka Train Ride & Nine Arch',
      description:
        'Ride the Kandy to Ella train through tea country: reserved seats, Nine Arch Bridge views, Nanu Oya stops and private driver station transfers.',
      keywords: 'kandy to ella train, kandy to ella, sri lanka train, nanu oya to ella train, ella train ride sri lanka',
    },
    guideHoneymoon: {
      title: "Sri Lanka Honeymoon Tours | Private Couples Travel",
      description:
        "Private honeymoon routes mixing Sigiriya, tea country and beach nights flexible pacing for couples from Europe.",
      keywords: "Sri Lanka honeymoon, private couples tour, romantic Sri Lanka",
    },
    guideFamilyTours: {
      title: "Sri Lanka Family Tours | Private Trips with Kids",
      description:
        "family friendly private Sri Lanka tours with sensible driving days, wildlife mornings and beach recovery time.",
      keywords: 'sri lanka family tour, things to do in sri lanka with kids, places to visit in sri lanka with family, travel with family sri lanka',
    },
    guideLuxuryTours: {
      title: 'Sri Lanka Luxury Tours | Private Chauffeur and Boutique Stays',
      description:
        'Sri Lanka luxury tours with a private chauffeur, boutique hotels and honest pacing. Premium private holidays, not a group coach.',
      keywords: 'sri lanka luxury tours, sri lanka luxury tour, boutique private chauffeur, premium sri lanka holiday',
    },
    guideAirportTransfers: {
      title: 'Sri Lanka Airport Transfers | CMB Drive Times & Private Pickup',
      description:
        'Private transfers from Colombo Bandaranaike (CMB): drive times to Negombo, Colombo, Waskaduwa, Kandy, Sigiriya and Galle, night arrivals and fixed quotes.',
      keywords: 'sri lanka airport, colombo airport, colombo airport to sigiriya, london to sri lanka, flights to sri lanka, flight to sri lanka, sri lanka flights',
    },
    marketGermany: {
      title: 'Sri Lanka Rundreise from Germany | Flights, Best Time & Private Tours',
      description:
        'Sri Lanka tours from Germany: Frankfurt flight time, direct flights, ETA entry rules, best travel season, two week round trips and private chauffeur itineraries after you land.',
      keywords:
        'sri lanka rundreise, sri lanka urlaub, fahrer sri lanka, privater fahrer sri lanka, flughafen colombo, rundreise sri lanka',
    },
    marketFrance: {
      title: 'Sri Lanka Tours from France | Paris Flights, When to Go & Private Circuits',
      description:
        'Sri Lanka travel from France: Paris to Colombo flight time, direct flights, ETA and arrival card, weather, Lion Rock, safari and private chauffeur circuits after you land.',
      keywords:
        'voyage sri lanka, circuit sri lanka, chauffeur sri lanka, chauffeur prive sri lanka, agence locale sri lanka, 10 jours au sri lanka, visiter sri lanka',
    },
    marketItaly: {
      title: 'Sri Lanka Tours from Italy | When to Go, Milan Flights & Private Travel',
      description:
        'Sri Lanka from Italy: Milan flight time, when to go, August vs December weather, ETA, Lion Rock, safari and private chauffeur itineraries after CMB.',
      keywords:
        'viaggio sri lanka, tour sri lanka, autista privato sri lanka, itinerario sri lanka, tour sri lanka 10 giorni, viaggio organizzato in sri lanka, cosa vedere in sri lanka',
    },
    marketSpain: {
      title: 'Sri Lanka Tours from Spain | Flights, What to See & Private Holidays',
      description:
        'Sri Lanka travel from Spain: Madrid/Barcelona flight time, ETA, weather, Lion Rock, safari, Ella train and private chauffeur itineraries after you land in Colombo.',
      keywords:
        'viaje a sri lanka, sri lanka viaje, viajar a sri lanka, conductor privado sri lanka, chofer guia sri lanka en espanol, itinerario sri lanka, viaje organizado sri lanka, que ver en sri lanka, sri lanka 10 dias',
    },
    marketPoland: {
      title: 'Sri Lanka Holidays from Poland | Weather, Warsaw Flights & Private Tours',
      description:
        'Sri Lanka from Poland: Warsaw flight time, weather and rainy season, ETA visa, Lion Rock, safari, Bentota beaches and private chauffeur itineraries after CMB.',
      keywords:
        'wycieczka Sri Lanka, wakacje Sri Lanka, pogoda Sri Lanka, loty Sri Lanka, wiza Sri Lanka',
    },
    marketRussia: {
      title: 'Sri Lanka Tours from Russia | Packages, CMB Airport & Private Driver',
      description:
        'Sri Lanka from Russia: Moscow flight time, Colombo airport, ETA, car with driver, Lion Rock, Yala, Hikkaduwa and Mirissa beachesprivate packages after CMB, not airline tickets or hotel brands.',
      keywords:
        'sri lanka tours, sri lanka tour packages, туры Шри Ланка, sri lanka holidays, travel agents in sri lanka, car rental with driver sri lanka',
    },
    marketNetherlands: {
      title: 'Sri Lanka holidays from the Netherlands | Private rondreis',
      description:
        'Sri lanka vakantie and sri lanka rondreis from the Netherlands: private chauffeur after Colombo, visa ETA, best time, Sigiriya and safari. Not airline tickets.',
      keywords:
        'sri lanka vakantie, sri lanka rondreis, prive chauffeur sri lanka, sri lanka tours from netherlands',
    },
    marketUK: {
      title: 'Sri Lanka Holidays from the UK | Private Tours 2026',
      description:
        'Sri lanka holidays, holidays to sri lanka and sri lanka tours from the UK: london to sri lanka, sri lanka visa, sri lanka weather, time in sri lanka, sigiriya lion rock, kandy sri lanka. Private chauffeur after CMB. Not TUI.',
      keywords:
        'sri lanka holidays, sri lanka holiday, holidays to sri lanka, holidays in sri lanka, sri lanka holidays 2026, sri lanka holidays 2025, sri lanka tours, tours to sri lanka, tours in sri lanka, sri lanka tour, visit sri lanka tours, sri lanka private tours, sri lanka guided tours, sri lanka package tours, sri lanka tour package, sri lanka day tours, sri lanka luxury tours, sri lanka safari tours, sri lanka things to do, things to do in sri lanka, travel to sri lanka, sri lanka travel, visiting sri lanka, sri lanka visa, sri lanka entry requirements, sri lanka weather, weather sri lanka, best time to visit sri lanka, time in sri lanka, sri lanka time, london to sri lanka, flights to sri lanka, colombo sri lanka, sri lanka airport, sri lanka map, where is sri lanka, is sri lanka safe, kandy sri lanka, ella sri lanka, galle sri lanka, mirissa sri lanka, gbp to lkr',
    },
    marketAustria: {
      title: "Sri Lanka Tours from Austria | Private Rundreisen",
      description: "Private Sri Lanka Rundreisen for travellers from Austria.",
      keywords: "Sri Lanka Rundreise Osterreich, Privatreise Sri Lanka",
    },
    marketSwitzerland: {
      title: "Sri Lanka Tours from Switzerland | tailor made Travel",
      description: "tailor made private Sri Lanka travel for visitors from Switzerland.",
      keywords: "Sri Lanka Rundreise Schweiz, Sri Lanka holidays Switzerland",
    },
    monthJanuary: {
      title: "Sri Lanka in January | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in January regions, weather and private itinerary ideas.",
      keywords: "sri lanka weather january, Sri Lanka in January, January Sri Lanka weather, Sri Lanka holiday January",
    },
    monthFebruary: {
      title: "Sri Lanka in February | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in February regions, weather and private itinerary ideas.",
      keywords: "Sri Lanka in February, February Sri Lanka weather",
    },
    monthMarch: {
      title: "Sri Lanka in March | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in March regions, weather and private itinerary ideas.",
      keywords: "Sri Lanka in March, March Sri Lanka weather",
    },
    monthApril: {
      title: "Sri Lanka in April | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in April regions, weather and private itinerary ideas.",
      keywords: "Sri Lanka in April, April Sri Lanka weather",
    },
    monthMay: {
      title: "Sri Lanka in May | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in May regions, weather and private itinerary ideas.",
      keywords: "Sri Lanka in May, May Sri Lanka weather",
    },
    monthJune: {
      title: "Sri Lanka in June | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in June regions, weather and private itinerary ideas.",
      keywords: "Sri Lanka in June, June Sri Lanka weather",
    },
    monthJuly: {
      title: "Sri Lanka in July | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in July regions, weather and private itinerary ideas.",
      keywords: "Sri Lanka in July, July Sri Lanka weather",
    },
    monthAugust: {
      title: 'Sri Lanka in August | Weather, East Coast & Cultural Triangle',
      description:
        'Sri Lanka in August: southwest monsoon vs east coast, Sigiriya and Kandy Perahera timing, Yala safari notes and private itinerary ideas for European travellers.',
      keywords: 'sri lanka in august, weather in Sri Lanka August, August Sri Lanka holiday',
    },
    monthSeptember: {
      title: "Sri Lanka in September | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in September regions, weather and private itinerary ideas.",
      keywords: "sri lanka in september, sri lanka en septiembre",
    },
    monthOctober: {
      title: "Sri Lanka in October | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in October regions, weather and private itinerary ideas.",
      keywords: "sri lanka in october, sri lanka october, sri lanka octubre",
    },
    monthNovember: {
      title: "Sri Lanka in November | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in November regions, weather and private itinerary ideas.",
      keywords: "Sri Lanka in November, November Sri Lanka weather",
    },
    monthDecember: {
      title: "Sri Lanka in December | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in December regions, weather and private itinerary ideas.",
      keywords: "sri lanka in december, sri lanka places to visit in december, sri lanka diciembre",
    },
    terms: {
      title: "Terms of Service | Sundown Tours Sri Lanka",
      description: "Terms of service for private tours and chauffeur bookings with Sundown Tours Sri Lanka.",
      keywords: "terms",
    },
    bookingPolicy: {
      title: "Booking Policy | Sundown Tours Sri Lanka",
      description: "How deposits, confirmations and booking changes work for Sundown Tours private itineraries.",
      keywords: "bookingPolicy",
    },
    bookingSuccess: {
      title: 'Booking Received | Sundown Tours Sri Lanka',
      description: 'Thank you for your Sri Lanka tour enquiry. Our team will contact you shortly.',
      keywords: '',
    },
  },
};
