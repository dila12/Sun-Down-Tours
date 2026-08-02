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
      trustPayLater: 'Pay at destination',
      trustLocal: 'Local team since 1992',
      reviewsTripAdvisor: 'Read TripAdvisor reviews',
      mobileBookBar: 'Ready to book?',
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
      payAtDestination: 'Pay at destination',
      agreeTerms: 'I agree to the terms & conditions',
      acceptTermsError: 'You must accept terms',
      complete: 'Complete Booking',
      bookAheadLead: 'Dates fill fast',
      bookAheadDetail: 'Private tours are limited — secure your preferred date now.',
      demandWarningLead: 'High demand',
      demandWarningDetail: 'This day books fast — reserve soon to keep your preferred date. Still available online.',
      oneBookingLeftLead: 'Only 1 booking left',
      oneBookingLeftDetail: 'This date is almost gone — complete booking now to secure your spot.',
      bookingsLeftLead1: 'Only 1 booking left',
      bookingsLeftLead2: 'Only 2 bookings left',
      bookingsLeftLead3: 'Only 3 bookings left',
      bookingsLeftDetail1: 'This date is almost gone — complete booking now to secure your spot.',
      bookingsLeftDetail2: 'Only a couple of bookings left for this date — reserve soon to keep it.',
      bookingsLeftDetail3: 'Just a few bookings left for this date — reserve soon to keep it.',
      fewSpotsLeft: 'Few spots left',
      almostFullLead: 'Almost full',
      almostFullDetail: 'This date is filling fast — complete your booking now to secure it. Still available online.',
      demandBookSoon: 'Still bookable online — secure this date before it goes.',
      softUrgencyLead: 'Popular dates fill fast',
      softUrgencyDetail: 'Private tours book out early on busy weekdays.',
      popularDates: 'Popular dates',
      blockedTitle: 'Fully booked',
      blockedText:
        'This departure date is fully booked. Contact our team for a waitlist or another start date.',
      peakTitle: 'High demand day',
      peakText:
        'Saturdays are often fully booked for private multi-day tours. Message us to check real-time availability.',
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
      explore: 'Explore destination',
      exploreAria: 'Explore',
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
      s3Title: '4-Star Hotel Accommodation',
      s3Desc: 'Carefully selected 4-Star Hotel Accommodation for private Sri Lanka tour packages.',
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
    title: 'Trusted Sri Lanka Tour Company Since 1992',
    p1: 'Sundown Tours Sri Lanka is a locally registered tour operator based in Waskaduwa on the west coast. Since 1992 we have planned private chauffeur-driven tours for travellers from the UK, Europe and beyond focusing on clear communication, licensed guides and itineraries that match your pace rather than a fixed group schedule.',
    p2: 'Our routes cover the Cultural Triangle (Sigiriya, Dambulla, Anuradhapura), Kandy and the hill country (Ella, Nuwara Eliya), wildlife parks such as Yala and Udawalawe, and the south-west coast around Galle and Hikkaduwa. Every package includes a private air-conditioned vehicle, an English-speaking chauffeur guide, fuel and driver expenses hotels, entrance tickets and safaris can be arranged with transparent pricing.',
    p3: 'Whether you need a one-day Sigiriya excursion or a ten-day island circuit finishing at the beach, you speak directly with our planning team on WhatsApp or email. We reply within 24 hours with a proposed route, realistic driving times and a clear quoteo call centres, no hard sell.',
    whyTitle: 'Why Choose Sundown Tours',
    whyIntro:
      'We are a Waskaduwa-based family tour company. You speak with the same local planners who build your route call centreravel with a private chauffeur guide who knows the roads, timings and seasonal conditions.',
    why1Title: 'Local expertise since 1992',
    why1Body:
      'Three decades of private chauffeur-driven tours for travellers from the UK, Europe and beyond, with realistic driving times and transparent quotes.',
    why2Title: 'Named people you can message',
    why2Body:
      'Meet Dilan (Founder) and Yohan (Senior Consultant) on our team sectiontsApp them directly for itinerary questions before you book.',
    why3Title: 'Private vehicle, your pace',
    why3Body:
      'Every package includes a private air-conditioned vehicle and chauffeur guide. Hotels, tickets and safaris can be arranged with clear pricing.',
    teamTitle: 'Meet Our Team',
    teamLead:
      'The same local planners who answer your WhatsApp also help shape your route. Photos and roles below match the people you will speak with.',
    founderName: 'Dilan Lakshitha',
    founderRole: 'Owner & Founder',
    founderBio:
      'Founder of Sundown Tours Sri Lanka. Plans private itineraries from Waskaduwa and coordinates chauffeur guides across the Cultural Triangle, hill country, wildlife parks and the south-west coast.',
    consultantName: 'Yohan Malshika',
    consultantRole: 'Senior Consultant',
    consultantBio:
      'Senior consultant supporting Europe-bound travellers with day-to-day planning, WhatsApp updates and adjustments while you are on the road in Sri Lanka.',
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
      'Sundown Tours is a locally registered Sri Lankan tour operator. We do not publish registration or tourism-board certificate numbers on this page unless a scanned certificate is available for verification. Ask us on WhatsApp if you need documentation for your booking.',
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
      phoneRequired: 'Please enter a valid phone number (7–15 digits)',
      messageRequired: 'Please enter your message',
      trustReply: 'Reply within 24h',
      trustPrivate: 'Private enquiry',
    },
    infoTitle: 'Contact Information',
    infoSubtitle: 'Speak directly with our Sri Lanka-based planning team.',
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
      tailored: 'Tailor-made tours',
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
      'This page explains how Sundown Tours Sri Lanka handles booking changes, deposits and cancellations for private tours and chauffeur-driver services.',
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
    tier3Label: 'Less than 7 days before the start date, or no-show:',
    tier3Text: 'deposit is non-refundable',
    sec3Note:
      'Bank or payment-provider fees already incurred may be deducted from any refund. Third-party costs we have prepaid on your behalf (park tickets, hotel deposits, safari jeeps, etc.) are refunded only if those suppliers allow a refund.',
    sec4Title: '4. Changes to your booking',
    sec4P1:
      'Date changes, route adjustments and group-size updates are often possible if we have enough notice and availability. Minor changes made more than 7 days before travel are usually handled at no extra charge.',
    sec4P2:
      'Major changes close to your start date, or changes that require rebooking prepaid services, may incur additional costs. We will always explain any fees before you confirm the change.',
    sec5Title: '5. Cancellation or changes by Sundown Tours',
    sec5P1:
      'We rarely cancel confirmed tours. If we must do so because of vehicle breakdown, driver illness or another issue within our control, we will offer an alternative driver or vehicle, reschedule your dates, or provide a full refund of amounts paid to us for undelivered services.',
    sec6Title: '6. Force majeure',
    sec6P1:
      'Events beyond our reasonable control \u2014 such as severe weather, natural disasters, civil unrest, public-health restrictions, or government travel bans \u2014 may affect your tour or our ability to operate on certain routes.',
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
      toursBody: 'See multi-day private itineraries guests commonly book after reading reviews.',
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
      driverBody: 'What a driver-guide service includes and how European guests typically use it.',
      driverLink: 'Private driver guide',
      destinationsTitle: 'Destinations',
      destinationsBody: 'Deep-dive destination pages for Sigiriya, Ella, Yala, Kandy, Dambulla and Galle.',
      destinationsLink: 'Browse destinations',
    },
    ariaCarousel: 'Guest reviews',
    ariaSlide: 'Review',
  },

  destinationsHub: {
    h1: 'Sri Lanka Destinations',
    breadcrumb: 'Destinations',
    lead: 'From Sigiriya’s rock fortress to Yala’s leopard country and Galle’s colonial fort explore the places that shape every great Sri Lanka itinerary.',
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
    title: 'Explore nearby destinations & tours',
    lead: 'Sundown Beach Restaurant is our Waskaduwa coastal dining partner pair a meal with south-west coast destinations and day tours.',
    contactCta: 'Plan a private tour',
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
    payment: 'Payment',
    payAtDestination: 'Pay at destination',
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
    destSigiriya: {
      title: 'Sigiriya Rock Fortress Guide | Climb, Tips & Day Tours',
      description:
        'Plan your Sigiriya visit: climb timing, frescoes, Pidurangala, entrance tips and how to combine the rock fortress with Dambulla or a Cultural Triangle tour.',
      keywords: 'Sigiriya Sri Lanka, Sigiriya rock fortress, climb Sigiriya, Sigiriya day tour',
    },
    destElla: {
      title: 'Ella Sri Lanka Guide | Nine Arch Bridge, Hikes & Hill Country',
      description:
        'Discover Ella’s Nine Arch Bridge, Little Adam’s Peak, tea trails and the scenic train with practical tips for a private day trip or multi-day hill-country stay.',
      keywords: 'Ella Sri Lanka, Nine Arch Bridge, Ella day tour, Sri Lanka hill country',
    },
    destYala: {
      title: 'Yala National Park Guide | Safari Tips, Wildlife & Best Time',
      description:
        'Plan a Yala safari: leopard odds, jeep booking tips, best months to visit and how to combine Yala with Ella or a south-coast beach stay.',
      keywords: 'Yala National Park, Yala safari, Sri Lanka leopards, Yala jeep safari',
    },
    destKandy: {
      title: 'Kandy Sri Lanka Guide | Temple of the Tooth & Cultural Capital',
      description:
        'Explore Kandy’s Temple of the Tooth, lake walks, Peradeniya Gardens and Esala Perahera plus tips for pairing Kandy with Ella or the Cultural Triangle.',
      keywords: 'Kandy Sri Lanka, Temple of the Tooth, Kandy day tour, Sri Lanka cultural capital',
    },
    destDambulla: {
      title: 'Dambulla Cave Temple Guide | Golden Rock Temple Tips',
      description:
        'Visit Dambulla’s UNESCO cave temple: murals, Buddha statues, climb tips and how to combine it with Sigiriya on a Cultural Triangle day tour.',
      keywords: 'Dambulla cave temple, Golden Temple Dambulla, Dambulla Sri Lanka',
    },
    destGalle: {
      title: 'Galle Fort Sri Lanka Guide | Ramparts, Lighthouse & Coast',
      description:
        'Walk Galle Fort’s Dutch ramparts, lighthouse and boutique lanes with tips for a private day tour and combining the fort with south-coast beaches.',
      keywords: 'Galle Fort, Galle Sri Lanka, Galle day tour, UNESCO Galle',
    },
    guideBestTime: {
      title: 'Best Time to Visit Sri Lanka | Month-by-Month Season Guide',
      description:
        'When to visit Sri Lanka: two monsoons explained, best months by region, safari and whale-watching timing, and how to plan a private itinerary around the weather.',
      keywords: 'best time to visit Sri Lanka, Sri Lanka weather, Sri Lanka monsoon, when to go Sri Lanka',
    },
    guideVisa: {
      title: 'Sri Lanka Visa Guide | ETA, Entry Rules & Practical Tips',
      description:
        'How the Sri Lanka ETA and visa-on-arrival process works for travellers, what documents to prepare, and common entry mistakes to avoid.',
      keywords: 'Sri Lanka visa, Sri Lanka ETA, visa on arrival Sri Lanka, entry requirements',
    },
    guidePrivateDriver: {
      title: 'Sri Lanka Private Driver Guide | Chauffeur Tours Explained',
      description:
        'Why travellers choose a private chauffeur-driver in Sri Lanka, what is included, typical daily distances, and how to plan a flexible round-tour itinerary.',
      keywords: 'Sri Lanka private driver, chauffeur guide Sri Lanka, private tour Sri Lanka',
    },
    guideBudget: {
      title: 'Sri Lanka Budget Travel Guide | Costs & Money Tips',
      description:
        'Daily costs, cash and ATMs, tipping customs, and where your money goes on a private Sri Lanka tour practical budget tips for travellers.',
      keywords: 'Sri Lanka budget travel, Sri Lanka costs, money tips Sri Lanka, travel budget',
    },
    guideWildlife: {
      title: 'Sri Lanka Wildlife Guide | Elephants, Leopards & Whales',
      description:
        'Where to see elephants, leopards, whales and birds in Sri Lanka national parks, seasons and wildlife hotspots explained.',
      keywords: 'Sri Lanka wildlife, elephants Sri Lanka, leopard safari, whale watching Sri Lanka',
    },
    guideSafari: {
      title: 'Sri Lanka Safari Guide | Yala, Udawalawe & Jeep Tips',
      description:
        'Plan a jeep safari in Sri Lanka: Yala vs Udawalawe, booking tips, park fees and what to expect on a morning or afternoon game drive.',
      keywords: 'Sri Lanka safari, Yala safari, Udawalawe jeep safari, safari booking tips',
    },
    guideBeaches: {
      title: 'Best Beaches in Sri Lanka | South, West & East Coast',
      description:
        'Choose the right coast for your dates south, west and east beaches compared by monsoon season, surf and calm-water bays.',
      keywords: 'Sri Lanka beaches, best beaches Sri Lanka, south coast beaches, east coast Sri Lanka',
    },
    guideTeaCountry: {
      title: 'Sri Lanka Tea Country Guide | Hill Country & Plantations',
      description:
        'Explore Nuwara Eliya, Ella and the hill-country tea trails plantation visits, scenic trains and highland walks.',
      keywords: 'Sri Lanka tea country, Nuwara Eliya, Ella hill country, tea plantations Sri Lanka',
    },
    guideFood: {
      title: 'Sri Lanka Food Guide | Rice & Curry, Spices & Street Food',
      description:
        'Sri Lankan cuisine explained: rice and curry, hoppers, kottu, spices and street food what to try and how to order with confidence.',
      keywords: 'Sri Lanka food, rice and curry, Sri Lankan street food, Sri Lanka cuisine',
    },
    guidePacking: {
      title: 'What to Pack for Sri Lanka | Clothing & Essentials',
      description:
        'A practical packing list for Sri Lanka clothing for heat and hill-country cool, temple dress codes, safari gear and essentials.',
      keywords: 'packing list Sri Lanka, what to pack Sri Lanka, Sri Lanka travel essentials',
    },
    guideSafety: {
      title: 'Sri Lanka Travel Safety Guide | Tips for Visitors',
      description:
        'Practical safety advice for visitors: road travel, health basics, scams to avoid, and staying safe on a private tour.',
      keywords: 'Sri Lanka travel safety, safe travel Sri Lanka, visitor safety tips',
    },
    cancellation: {
      title: 'Cancellation Policy | Sundown Tours Sri Lanka',
      description:
        'Booking changes, deposit rules and cancellation terms for private tours and chauffeur-driver services with Sundown Tours Sri Lanka.',
      keywords: 'cancellation policy, tour cancellation Sri Lanka, booking changes',
    },
    restaurants: {
      title: 'Restaurants in Sri Lanka | Best Local Cuisine',
      description: 'Discover the best restaurants in Sri Lanka offering authentic local cuisine and international dishes.',
      keywords: 'Sri Lanka restaurants, best restaurants in Sri Lanka',
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
      title: "Colombo Sri Lanka Travel Guide | Private Tours",
      description: "Plan Colombo as your arrival hub with private airport transfers and tailor-made Sri Lanka itineraries.",
      keywords: "destColombo",
    },
    destNegombo: {
      title: "Negombo Sri Lanka | Beach Near Airport",
      description: "Stay in Negombo near Bandaranaike Airport before a private Cultural Triangle or west-coast tour.",
      keywords: "destNegombo",
    },
    destBentota: {
      title: "Bentota Sri Lanka | West Coast Beach Holidays",
      description: "Bentota beach holidays with private chauffeur links to Galle and the south coast.",
      keywords: "destBentota",
    },
    destMirissa: {
      title: 'Mirissa Sri Lanka Guide | Whale Watching, Beaches & Coconut Tree Hill',
      description:
        'Plan Mirissa: whale watching season, Coconut Tree Hill, beaches and pairing with Galle Fort on a private south-coast Sri Lanka tour.',
      keywords: 'Mirissa Sri Lanka, Mirissa whale watching, Coconut Tree Hill, Mirissa beach',
    },
    destNuwaraEliya: {
      title: "Nuwara Eliya Sri Lanka | Tea Country Highlands",
      description: "Nuwara Eliya tea country stays between Kandy and Ella on private hill-country itineraries.",
      keywords: "destNuwaraEliya",
    },
    destAnuradhapura: {
      title: "Anuradhapura Sri Lanka | Ancient Sacred City",
      description: "Explore Anuradhapura with a private driver in Sri Lanka Cultural Triangle itineraries.",
      keywords: "destAnuradhapura",
    },
    destPolonnaruwa: {
      title: "Polonnaruwa Sri Lanka | Medieval Ruins Guide",
      description: "Visit Polonnaruwa ruins on a private Cultural Triangle tour with Sundown Tours.",
      keywords: "destPolonnaruwa",
    },
    destTrincomalee: {
      title: "Trincomalee Sri Lanka | East Coast Beaches",
      description: "Trincomalee east-coast beaches and harbour stops on seasonal private itineraries.",
      keywords: "destTrincomalee",
    },
    destArugamBay: {
      title: "Arugam Bay Sri Lanka | Surf and East Coast",
      description: "Arugam Bay surf town stays linked by private transfer after wildlife or culture days.",
      keywords: "destArugamBay",
    },
    destKalpitiya: {
      title: "Kalpitiya Sri Lanka | Lagoon and Dolphins",
      description: "Kalpitiya lagoon, kitesurf and dolphin trips with private transfers from Negombo.",
      keywords: "destKalpitiya",
    },
    guideWhaleWatching: {
      title: "Whale Watching Sri Lanka | Mirissa & Private Tours",
      description:
        "Plan seasonal whale watching from Mirissa or Trincomalee inside a private chauffeur itinerary realistic seasons, no guaranteed sightings.",
      keywords: "whale watching Sri Lanka, Mirissa whales, private south coast tour",
    },
    guideTrainJourneys: {
      title: "Sri Lanka Train Journeys | Kandy to Ella",
      description:
        "How to ride the scenic Kandy–Ella tea country train with reserved seats and private driver station transfers.",
      keywords: "Sri Lanka train, Kandy Ella train, tea country railway",
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
        "Family-friendly private Sri Lanka tours with sensible driving days, wildlife mornings and beach recovery time.",
      keywords: "Sri Lanka family tour, private tour with kids, family safari Sri Lanka",
    },
    guideLuxuryTours: {
      title: "Sri Lanka Luxury Tours | Private Chauffeur Travel",
      description:
        "Luxury private chauffeur tours with boutique hotel options, honest pacing and transparent inclusions.",
      keywords: "Sri Lanka luxury tour, boutique private chauffeur, premium Sri Lanka holiday",
    },
    guideAirportTransfers: {
      title: "Sri Lanka Airport Transfers | Private CMB Pickup",
      description:
        "Private airport transfers from Colombo (CMB) to Negombo, Colombo city or your first tour hotel fixed quotes.",
      keywords: "Colombo airport transfer, CMB private pickup, Negombo airport transfer",
    },
    marketGermany: {
      title: "Sri Lanka Tours from Germany | Private Rundreisen",
      description: "Private Sri Lanka tours for travellers from Germany with local chauffeur-guides.",
      keywords: "marketGermany",
    },
    marketFrance: {
      title: "Sri Lanka Tours from France | Circuits Privés",
      description: "Private Sri Lanka circuits for travellers from France with flexible hotels.",
      keywords: "marketFrance",
    },
    marketItaly: {
      title: "Sri Lanka Tours from Italy | Private Travel",
      description: "Tailor-made private Sri Lanka tours for travellers from Italy.",
      keywords: "marketItaly",
    },
    marketSpain: {
      title: "Sri Lanka Tours from Spain | Private Holidays",
      description: "Private Sri Lanka holidays for travellers from Spain with coast and culture.",
      keywords: "marketSpain",
    },
    marketPoland: {
      title: "Sri Lanka Tours from Poland | Private Itineraries",
      description: "Private Sri Lanka itineraries for travellers from Poland.",
      keywords: "marketPoland",
    },
    marketRussia: {
      title: "Sri Lanka Tours from Russia | Private Driver Holidays",
      description: "Private chauffeur holidays in Sri Lanka for travellers from Russia.",
      keywords: "marketRussia",
    },
    marketNetherlands: {
      title: "Sri Lanka Tours from the Netherlands | Privé Rondreizen",
      description: "Private Sri Lanka rondreizen for travellers from the Netherlands.",
      keywords: "marketNetherlands",
    },
    marketUK: {
      title: "Sri Lanka Tours from the UK | Private Holidays",
      description: "Private Sri Lanka holidays for travellers from the United Kingdom.",
      keywords: "marketUK",
    },
    marketAustria: {
      title: "Sri Lanka Tours from Austria | Private Rundreisen",
      description: "Private Sri Lanka Rundreisen for travellers from Austria.",
      keywords: "marketAustria",
    },
    marketSwitzerland: {
      title: "Sri Lanka Tours from Switzerland | Tailor-Made Travel",
      description: "Tailor-made private Sri Lanka travel for visitors from Switzerland.",
      keywords: "marketSwitzerland",
    },
    monthJanuary: {
      title: "Sri Lanka in January | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in January regions, weather and private itinerary ideas.",
      keywords: "monthJanuary",
    },
    monthFebruary: {
      title: "Sri Lanka in February | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in February regions, weather and private itinerary ideas.",
      keywords: "monthFebruary",
    },
    monthMarch: {
      title: "Sri Lanka in March | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in March regions, weather and private itinerary ideas.",
      keywords: "monthMarch",
    },
    monthApril: {
      title: "Sri Lanka in April | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in April regions, weather and private itinerary ideas.",
      keywords: "monthApril",
    },
    monthMay: {
      title: "Sri Lanka in May | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in May regions, weather and private itinerary ideas.",
      keywords: "monthMay",
    },
    monthJune: {
      title: "Sri Lanka in June | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in June regions, weather and private itinerary ideas.",
      keywords: "monthJune",
    },
    monthJuly: {
      title: "Sri Lanka in July | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in July regions, weather and private itinerary ideas.",
      keywords: "monthJuly",
    },
    monthAugust: {
      title: "Sri Lanka in August | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in August regions, weather and private itinerary ideas.",
      keywords: "monthAugust",
    },
    monthSeptember: {
      title: "Sri Lanka in September | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in September regions, weather and private itinerary ideas.",
      keywords: "monthSeptember",
    },
    monthOctober: {
      title: "Sri Lanka in October | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in October regions, weather and private itinerary ideas.",
      keywords: "monthOctober",
    },
    monthNovember: {
      title: "Sri Lanka in November | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in November regions, weather and private itinerary ideas.",
      keywords: "monthNovember",
    },
    monthDecember: {
      title: "Sri Lanka in December | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in December regions, weather and private itinerary ideas.",
      keywords: "monthDecember",
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
