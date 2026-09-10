import type { Locale } from '../../../../i18n/locales';

/**
 * Structured, per locale content for the homepage SEO guide section.
 * Kept as typed data (not the constrained i18n Dict) so the section can be
 * rendered generically with locale correct internal links built via
 * `LocaleService.path(pageId)`no hard coded English URLs.
 *
 * Paragraph strings may contain simple <strong>/<em> markup (rendered with
 * innerHTML). Internal links live in `seeAlso`/card `linkPageId` as page ids so
 * the correct localized, language prefixed URL is generated at runtime.
 */
export interface SeoLink {
  pageId: string;
  label: string;
}

export interface SeoCard {
  icon: string;
  title?: string;
  meta?: string;
  text: string;
  linkPageId?: string;
  linkLabel?: string;
}

export interface SeoSubsection {
  heading: string;
  paras?: string[];
  list?: string[];
}

export interface SeoSection {
  anchor?: string;
  eyebrow?: string;
  heading: string;
  intro?: string[];
  cards?: SeoCard[];
  cardCols?: number;
  subsections?: SeoSubsection[];
  list?: string[];
  seeAlso?: SeoLink[];
}

export interface HomeSeoFaq {
  q: string;
  a: string;
  links?: SeoLink[];
}

export interface HomeSeoContent {
  tag: string;
  title: string;
  subtitle: string;
  tocLabel: string;
  toc: { label: string; anchor: string }[];
  seeAlsoLabel: string;
  sections: SeoSection[];
  faqEyebrow: string;
  faqHeading: string;
  faqs: HomeSeoFaq[];
}

const en: HomeSeoContent = {
  tag: 'TRAVEL GUIDE',
  title: 'Sri Lanka Tours, Holiday Packages & Private Driver Guide',
  subtitle:
    'How to plan Sri Lanka tours and vacation packages with a licensed chauffeur guideitineraries, safari timing and tailor made holidays for travellers from the UK, Germany, France, Switzerland, Italy, Spain and Poland since 1992.',
  tocLabel: 'On this page',
  seeAlsoLabel: 'See also',
  toc: [
    { label: 'Why Visit Sri Lanka', anchor: 'why-sri-lanka' },
    { label: 'Best Time to Visit', anchor: 'best-time' },
    { label: 'Private Tours', anchor: 'chauffeur-tours' },
    { label: 'Tour Packages', anchor: 'tour-packages' },
    { label: 'Wildlife Safaris', anchor: 'wildlife-safaris' },
    { label: 'Cultural Triangle', anchor: 'cultural-triangle' },
    { label: 'Tea Country', anchor: 'tea-country' },
    { label: 'Beaches', anchor: 'beaches' },
    { label: 'Family Holidays', anchor: 'family-tours' },
    { label: 'Honeymoon Tours', anchor: 'honeymoon' },
    { label: 'Why Choose Us', anchor: 'why-choose-us' },
    { label: 'FAQs', anchor: 'faq-heading' },
  ],
  sections: [
    {
      anchor: 'why-sri-lanka',
      heading: 'Why Visit Sri Lanka?',
      intro: [
        'Sri Lanka is one of the most rewarding island destinations in Asia for European travellers who want variety without long internal flights. In a single <strong>Sri Lanka holiday</strong> you can climb an ancient rock fortress at sunrise, ride a scenic train through misty tea plantations, join a leopard safari and finish the week on a palm fringed beach.',
        'Because the island is compact, a well planned <strong>private Sri Lanka tour</strong> covers the Cultural Triangle, hill country, national parks and the south coast in seven to fourteen days at a comfortable pace never rushed, and always flexible.',
        'Sri Lanka is also outstanding value. Boutique hotels, excellent food and world class wildlife are available at prices that suit both mid range and <strong>luxury Sri Lanka tours</strong>, and the warmth of local hospitality makes first time visitors feel welcome the moment they land.',
      ],
      subsections: [
        {
          heading: 'What Makes Sri Lanka Different from Other Asian Destinations?',
        },
      ],
      cards: [
        { icon: 'fa-landmark', text: 'Eight UNESCO World Heritage Sites including Sigiriya, Kandy and Galle Fort.' },
        { icon: 'fa-globe', text: 'year round travel with two monsoon patterns there is always a sunny coast.' },
        { icon: 'fa-route', text: 'Compact size: most highlights are within three to five hours by road.' },
        { icon: 'fa-paw', text: 'Exceptional wildlife elephants, leopards, blue whales and tropical birds.' },
        { icon: 'fa-utensils', text: 'Authentic cuisine blending spices, coconut, seafood and hill country vegetables.' },
        { icon: 'fa-car', text: 'Private tours with a dedicated driver guide no crowded group coaches.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Sri Lanka destinations guide' },
        { pageId: 'tours', label: 'Sri Lanka tour packages' },
        { pageId: 'marketUK', label: 'Sri Lanka holidays from the UK' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Best Time to Visit Sri Lanka',
      intro: [
        'Sri Lanka is a year round destination. Because two monsoons affect different coasts at different times, there is almost always a region enjoying excellent weather the key is matching your itinerary to the right coast for your travel dates.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'West & South Coast', meta: 'November to April', text: 'Peak season for Europeans escaping winter. Colombo, Galle, Mirissa, Bentota and Hikkaduwa enjoy calm seas and sunny days.' },
        { icon: 'fa-water', title: 'East Coast', meta: 'May to September', text: 'Trincomalee, Pasikudah and Arugam Bay enjoy their finest weather while the southwest monsoon brings rain elsewhere.' },
        { icon: 'fa-mountain', title: 'Hill Country', meta: 'year round', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya and Dambulla can be visited all year, with clear mornings for sightseeing.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'West & South Coast (November to April)',
          paras: [
            'This is peak season for winter sun travellers. The south coast is ideal for beach stays, whale watching and combining a Galle day trip with southern wildlife. Most 7 and 10 day tours follow this window because it links the Cultural Triangle, hill country, Yala and the south coast in one logical loop.',
          ],
        },
        {
          heading: 'East Coast (May to September)',
          paras: [
            'While the southwest monsoon brings rain to Colombo and Galle, the east coast enjoys its best weather. European families with July and August school holidays often add an east coast beach extension.',
          ],
        },
        {
          heading: 'Hill Country & Cultural Triangle',
          paras: [
            'Kandy, Ella, Nuwara Eliya, Sigiriya and Dambulla work all year. Mornings are usually clear for climbing Sigiriya; brief afternoon showers rarely disrupt a full day of sightseeing.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Galle day tour' },
        { pageId: 'ellaDay', label: 'Ella day tour' },
        { pageId: 'kandyDay', label: 'Kandy day tour' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Private Chauffeur Tours in Sri Lanka',
      intro: [
        'A <strong>Sri Lanka chauffeur guide</strong> is far more than a driver he is your daily planner, cultural interpreter and safety net on unfamiliar roads. Every Sundown Tours private tour includes a licensed, experienced chauffeur guide who speaks clear English (and other languages on request).',
        'European travellers value air conditioned comfort, flexible departure times and the freedom to stop for photographs, a tea plantation or a spontaneous temple visit you are never bound to a group schedule.',
      ],
      subsections: [{ heading: 'What Is Included in a Private Chauffeur Tour?' }],
      list: [
        'Dedicated vehicle and licensed chauffeur guide for the full itinerary',
        'Airport pickup and drop off at Colombo (CMB) or regional airports',
        'Fuel, parking and driver accommodation, quoted transparently upfront',
        'Local knowledge of roads, attractions, restaurants and seasonal conditions',
        'Help with hotel check in, safari jeep bookings and train tickets',
        'A flexible daily schedule you set the pace',
      ],
      seeAlso: [
        { pageId: 'about', label: 'About Sundown Tours' },
        { pageId: 'services', label: 'Our Sri Lanka travel services' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Sri Lanka Tour Packages for Every Duration',
      intro: [
        'The right length for your <strong>Sri Lanka tour package</strong> depends on how deeply you want to explore. Short itineraries suit repeat visitors or beach focused trips; longer routes combine culture, wildlife and relaxation without rushing. Every package below can be customised.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Short Private Tours', meta: '4 to 6 Days', text: 'Focused loops covering Sigiriya, Kandy, Ella and Yala in a compact route.', linkPageId: 'tour4', linkLabel: '4 day Sri Lanka tour' },
        { icon: 'fa-calendar-alt', title: 'One Week Itineraries', meta: '7 to 8 Days', text: 'Our most popular option Cultural Triangle, tea country, Yala safari and south coast beaches.', linkPageId: 'tour7', linkLabel: '7 day Sri Lanka tour' },
        { icon: 'fa-calendar-alt', title: 'Extended Island Tours', meta: '10+ Days', text: 'North central heritage, several safari drives, hill country hiking and unhurried beach days.', linkPageId: 'tour10', linkLabel: '10 day Sri Lanka tour' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Short Private Tours (4 to 6 Days)',
          paras: [
            'Ideal for extensions or focused trips. The 4 day tour covers Sigiriya, Kandy, Ella and Yala in a compact loop; the 5 day tour adds time for temple visits and a scenic train segment; families often prefer the gentler pace of the 6 day private tour.',
          ],
        },
        {
          heading: 'One Week Itineraries (7 to 8 Days)',
          paras: [
            'The 7 day tour is our most popular option for UK and German travellers with one week off, balancing culture, tea country, Yala safari and beaches. The 8 day private tour adds Wilpattu or extended park time plus Hikkaduwa.',
          ],
        },
        {
          heading: 'Extended Island Tours (10+ Days)',
          paras: [
            'A 10 day tour allows North central heritage sites, multiple safari drives, hill country hiking and unhurried beach days popular with French and Italian honeymooners and multi generational families from Switzerland.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour5', label: '5 day Sri Lanka tour' },
        { pageId: 'tour6', label: '6 day Sri Lanka private tour' },
        { pageId: 'tour8', label: '8 day Sri Lanka private tour' },
        { pageId: 'tours', label: 'All Sri Lanka tour packages' },
      ],
    },
    {
      anchor: 'wildlife-safaris',
      heading: 'Wildlife Safaris & Yala National Park',
      intro: [
        '<strong>Sri Lanka safari tours</strong> are a highlight for European nature lovers. The island’s national parks are compact compared with African reserves, so meaningful sightings leopards, sloth bears, elephants, crocodiles and hundreds of birds happen within a half  day jeep safari.',
      ],
      subsections: [
        {
          heading: 'Yala Safari Leopard Country',
          paras: [
            'Yala National Park (Block 1) offers one of the highest leopard densities in the world. Morning drives deliver the best light and animal activity. Our Ella & Yala safari tour pairs hill country scenery with a game drive a favourite with British and Polish wildlife photographers.',
          ],
        },
        {
          heading: 'Other Notable Safari Parks',
          list: [
            '<strong>Udawalawe</strong> reliable elephant herds; ideal for families with children',
            '<strong>Wilpattu</strong> quieter leopard territory; featured on our 8 days route',
            '<strong>Minneriya / Kaudulla</strong> seasonal elephant gatherings (July to October)',
            '<strong>Bundala</strong> wetland and migratory birds for keen ornithologists',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour2ey', label: '2 day Ella & Yala safari tour' },
        { pageId: 'tours', label: 'Safari tour packages' },
      ],
    },
    {
      anchor: 'destinations-cards',
      eyebrow: 'DESTINATIONS',
      heading: 'Popular Sri Lanka Destinations',
      cards: [
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'Sri Lanka’s most iconic rock fortress, rising 200 metres above the central plains.', linkPageId: 'sigiriyaDay', linkLabel: 'Sigiriya tour' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'The last royal capital and home to the Temple of the Sacred Tooth Relic.', linkPageId: 'kandyDay', linkLabel: 'Kandy tour' },
        { icon: 'fa-train', title: 'Ella', text: 'hill country hub for hiking, cafes and the famous Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Ella tour' },
        { icon: 'fa-ship', title: 'Galle', text: 'UNESCO listed walled fort with Dutch colonial streets and sunset ramparts.', linkPageId: 'galleDay', linkLabel: 'Galle tour' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'The Cultural Triangle: Sigiriya, Kandy & Ancient Capitals',
      intro: [
        'The Cultural Triangle is the historic heart of Sri Lanka and essential on any first visit. Within a triangle formed by Kandy, Anuradhapura and Polonnaruwa you will find rock fortresses, cave temples, royal palaces and living Buddhist traditions dating back over two millennia.',
      ],
      subsections: [
        {
          heading: 'Sigiriya Rock Fortress',
          paras: [
            'Rising 200 metres above the plains, Sigiriya Lion Rock is Sri Lanka’s most iconic landmark. Climb in the cool early morning for frescoes, the lion’s paw gateway, the mirror wall and summit views over the jungle canopy.',
          ],
        },
        {
          heading: 'Kandy & the Temple of the Tooth',
          paras: [
            'Kandy, the last royal capital, sits beside a lake surrounded by hills. The Temple of the Sacred Tooth Relic is a living pilgrimage site with daily puja ceremonies, often combined with the Peradeniya Royal Botanical Gardens and a cultural dance show.',
          ],
        },
        {
          heading: 'Anuradhapura & Polonnaruwa',
          paras: [
            'These ancient cities feature enormous stupas, stone sculptures and monastery ruins. On longer itineraries we include a bicycle tour of Polonnaruwa a highlight for history focused travellers.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'sigiriyaDay', label: 'Sigiriya day tour' },
        { pageId: 'kandyDay', label: 'Kandy day tour' },
      ],
    },
    {
      anchor: 'tea-country',
      heading: 'Tea Country & Ella Hill Station',
      intro: [
        'Sri Lanka’s hill country historic Ceylon tea country offers cooler temperatures, spectacular viewpoints and one of the world’s great train journeys. Nuwara Eliya feels unexpectedly European; Ella has become the hub for hiking, cafes and the famous Nine Arch Bridge.',
        'The train from Kandy to Ella is consistently rated among the most beautiful rail routes on earth. We reserve seats where possible and coordinate private transfers when schedules do not align with your plan.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Ella day tour' },
        { pageId: 'tour2ek', label: '2 day Ella & Kandy private tour' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Sri Lanka Beaches & the Southern Coast',
      intro: [
        'After culture and safari, most <strong>Sri Lanka holidays</strong> finish with beach time. The south coast combines historic Galle Fort, surf at Weligama, Mirissa and Hiriketiya, calm swimming at Unawatuna and whale watching from Mirissa (November to April).',
        'Galle Fort is a UNESCO listed walled city with Dutch colonial buildings, boutique shops and sunset ramparts. Hikkaduwa and Bentota offer resort hotels for <strong>luxury Sri Lanka tours</strong>; Tangalle, Mirissa and Hiriketiya suit quieter boutique stays.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Galle Fort day tour' },
        { pageId: 'destHiriketiya', label: 'Hiriketiya beach guide' },
        { pageId: 'destMirissa', label: 'Mirissa guide' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Luxury Sri Lanka Tours & Bespoke Holidays',
      intro: [
        '<strong>Sri Lanka luxury tours</strong> are about privacy, space and curated experiences boutique villas in the hills, beachfront suites in Galle, private safari jeeps and chauffeur guides who anticipate your preferences from day one.',
        'We design <strong>tailor made Sri Lanka holidays</strong> with verified luxury partners and transparent pricing no hidden commissions or forced shopping stops.',
      ],
      list: [
        'Five star  and boutique hotel reservations at best available rates',
        'Private guides for archaeology, birding or photography interests',
        'Luxury vehicle fleet including spacious SUVs and vans for families',
        'Special occasion planning anniversaries, proposals and milestone birthdays',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Sri Lanka Family Tours',
      intro: [
        'Sri Lanka is exceptionally family friendly. Distances are manageable, hotels offer connecting rooms and pools, and children love elephant orphanages, turtle hatcheries, spice gardens and beach days. Our <strong>Sri Lanka family tours</strong> build in rest days and shorter drives so parents relax too.',
        'We recommend seven to ten days for families from Europe with school age children a typical route mixes Sigiriya, a jeep safari, the Kandy to Ella train and two or three beach days.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'family friendly tour packages' },
        { pageId: 'guides', label: 'Sri Lanka travel guides' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Sri Lanka Honeymoon Tours & Romantic Escapes',
      intro: [
        'For couples from Italy, France, Spain and the UK, <strong>Sri Lanka honeymoon tours</strong> combine adventure and intimacy sunrise from Sigiriya, a candlelit dinner at a tea estate bungalow, a south coast catamaran and a plunge pool villa by the ocean.',
        'We arrange flowers, cake surprises, couples’ spa treatments and photography on request. Honeymoon routes usually run eight to fourteen days with relaxed two nights stays.',
      ],
      seeAlso: [{ pageId: 'tour7', label: '7 day honeymoon idea' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'WHY CHOOSE US',
      heading: 'Trusted Local Experts Since 1992',
      cards: [
        { icon: 'fa-clock', title: 'Since 1992', text: 'More than three decades of trusted service to international travellers.' },
        { icon: 'fa-user', title: 'Licensed Guides', text: 'Licensed chauffeur guides with deep local knowledge.' },
        { icon: 'fa-heart', title: 'Happy Travellers', text: 'Thousands of happy travellers from across Europe and beyond.' },
        { icon: 'fa-map-marker-alt', title: 'tailor made', text: 'Every itinerary is tailor made no one size fits all coach tours.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Speak with our team' },
        { pageId: 'about', label: 'Our story' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Planning Your Sri Lanka Holiday from Europe',
      intro: [
        'Direct and one stop flights connect Colombo with London, Frankfurt, Paris, Zurich, Milan, Madrid and Warsaw. Most European travellers arrive overnight and begin their tour the next morning your chauffeur meets you at Bandaranaike International Airport (CMB).',
      ],
      subsections: [
        {
          heading: 'Essential Sri Lanka Travel Tips',
          list: [
            'Pack light, breathable clothing plus a layer for hill country mornings',
            'Remove shoes and cover shoulders and knees at Buddhist temples',
            'Book Sigiriya and Yala safari slots early in peak season',
            'Try hoppers, kottu roti and fresh fish curry the food is a highlight',
            'Carry sunscreen and insect repellent for safari and evening dining',
            'Keep photocopies of your passport and ETA visa approval',
          ],
        },
        {
          heading: 'Sri Lanka Visa (ETA) for European Citizens',
          paras: [
            'Most European passport holders need an Electronic Travel Authorisation (ETA) before arrival. Apply online at least 24 to 48 hours before departure, and keep your approval and reference number to show at immigration. Children need their own ETA.',
          ],
        },
        {
          heading: 'Is Sri Lanka Safe for Tourists?',
          paras: [
            'Sri Lanka is generally safe and welcoming; millions visit each year without incident. Travelling with a reputable chauffeur guide from an established operator removes most practical hassles around transport, pricing and route planning.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Sri Lanka travel guides' },
        { pageId: 'restaurants', label: 'Restaurants in Sri Lanka' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Frequently Asked Questions About Sri Lanka Tours',
  faqs: [
    {
      q: 'How many days do I need for a Sri Lanka tour?',
      a: 'Seven to ten days suits most first time visitors from Europe. A 7 day tour covers culture, hills, safari and beaches; fourteen days allows north, east and luxury south coast stays without rushing.',
    },
    {
      q: 'What is the difference between a group tour and a private Sri Lanka tour?',
      a: 'A private tour gives you a dedicated vehicle and chauffeur guide you choose departure times, stops and hotels. Group coach tours follow fixed schedules. Sundown Tours specialises exclusively in private, tailor made travel.',
    },
    {
      q: 'Is a Sri Lanka chauffeur guide worth the cost?',
      a: 'Yes. Road conditions, unmarked turns and busy town traffic make self driving stressful. A licensed guide saves time, explains culture at each site, handles tickets and adapts when the weather changes.',
    },
    {
      q: 'When is the best time for a Yala safari?',
      a: 'Yala Block 1 is open year round; dry months (February to July) make leopard spotting easier as animals gather near water. Book morning safaris for cooler temperatures and better light.',
    },
    {
      q: 'Are Sri Lanka tours suitable for families with children?',
      a: 'Absolutely. Shorter drives, hotel pools, elephant orphanages, turtle hatcheries and beach days keep children engaged. We plan family tours with flexible pacing and child friendly restaurants.',
    },
    {
      q: 'Do I need a visa to visit Sri Lanka from the UK or EU?',
      a: 'Most European citizens need an ETA (Electronic Travel Authorisation) obtained online before travel. Apply at least 48 hours before departure; children need their own ETA.',
    },
    {
      q: 'Can you customise a Sri Lanka honeymoon or luxury tour?',
      a: 'Every Sundown Tours itinerary is tailor made. We arrange boutique hotels, private dining, spa treatments and special surprises for honeymoons and luxury holidays.',
    },
    {
      q: 'How long is the flight from London to Sri Lanka?',
      a: 'Direct Heathrow to Colombo (CMB) flights are typically 10.5 to 11.5 hours hours. Connections via Dubai, Doha or Istanbul take longer. We do not sell air tickets; we meet you after landing with a private driver guide.',
      links: [{ pageId: 'marketUK', label: 'UK holidays guide' }],
    },
    {
      q: 'What are Sri Lanka entry requirements for UK travellers?',
      a: 'Apply for an ETA at eta.gov.lk before you fly. From 25 May 2026 the tourist ETA is free for UK passports for 30 days with double entry, but you still need approval in advance.',
      links: [{ pageId: 'guideVisa', label: 'Entry requirements / ETA' }],
    },
    {
      q: 'Is Sri Lanka safe for tourists from the UK?',
      a: 'Yes on standard holiday routes when you use reputable transport and normal precautions. A licensed chauffeur guide is how most UK visitors travel between sites.',
      links: [{ pageId: 'guideSafety', label: 'Safety guide' }],
    },
    {
      q: 'How do I book a private tour with Sundown Tours?',
      a: 'Browse our tour packages, choose a duration and submit an enquiry via the contact form or WhatsApp. We reply within 24 hours with a tailor made proposal and transparent pricing.',
      links: [{ pageId: 'contact', label: 'Contact us' }],
    },
    {
      q: 'What is included in a Sri Lanka holiday package?',
      a: 'A typical private package includes your chauffeur guide, air conditioned vehicle, fuel and driver costs. Hotels, national park jeeps and attraction tickets can be bundled or booked yourselfwe quote both options clearly.',
    },
    {
      q: 'Is a 7 day or 10 day Sri Lanka itinerary better?',
      a: 'Seven days covers Sigiriya, Kandy, Ella, a safari and a beach finish without rushing. Ten days adds slower hill country time, a second wildlife drive or the Cultural Triangle in more depthbetter if you have a two week vacation including flights.',
      links: [
        { pageId: 'tour7', label: '7 day tour' },
        { pageId: 'tour10', label: '10 day tour' },
      ],
    },
    {
      q: 'Can I hire a private driver in Sri Lanka without a full tour package?',
      a: 'Yes. Many guests book a chauffeur only  itinerary and arrange hotels independently. You still get a licensed local driver guide, airport pickup and a flexible daily plan.',
      links: [{ pageId: 'guidePrivateDriver', label: 'Private driver guide' }],
    },
  ],
};

const de: HomeSeoContent = {
  tag: 'REISEFUHRER',
  title: 'Sri Lanka Rundreisen, Urlaubspakete & privater Fahrer',
  subtitle:
    'Geschrieben von den lokalen Experten von Sundown Tours Sri Lanka  lizenzierte Fahrer Guides, massgeschneiderte Routen und seit 1992 tausende zufriedene Reisende aus Deutschland, der Schweiz, Osterreich und ganz Europa.',
  tocLabel: 'Auf dieser Seite',
  seeAlsoLabel: 'Siehe auch',
  toc: [
    { label: 'Warum Sri Lanka', anchor: 'why-sri-lanka' },
    { label: 'Beste Reisezeit', anchor: 'best-time' },
    { label: 'Privatreisen', anchor: 'chauffeur-tours' },
    { label: 'Reisepakete', anchor: 'tour-packages' },
    { label: 'Safaris', anchor: 'wildlife-safaris' },
    { label: 'Kulturdreieck', anchor: 'cultural-triangle' },
    { label: 'Teeland', anchor: 'tea-country' },
    { label: 'Strande', anchor: 'beaches' },
    { label: 'Familienurlaub', anchor: 'family-tours' },
    { label: 'Flitterwochen', anchor: 'honeymoon' },
    { label: 'Warum wir', anchor: 'why-choose-us' },
    { label: 'FAQ', anchor: 'faq-heading' },
  ],
  sections: [
    {
      anchor: 'why-sri-lanka',
      heading: 'Warum eine Reise nach Sri Lanka?',
      intro: [
        'Sri Lanka ist fur europaische Reisende eines der lohnendsten Inselziele Asiens  enorme Vielfalt ohne lange Inlandsfluge. In einem einzigen <strong>Sri Lanka Urlaub</strong> erklimmen Sie im Morgengrauen eine antike Felsenfestung, fahren mit dem Zug durch nebelverhangene Teeplantagen, gehen auf Leoparden Safari und lassen die Woche an einem palmengesaumten Strand ausklingen.',
        'Da die Insel kompakt ist, verbindet eine gut geplante <strong>private Sri Lanka Rundreise</strong> das Kulturdreieck, das Bergland, die Nationalparks und die Sudkuste in sieben bis vierzehn Tagen in angenehmem Tempo  ohne Hektik und jederzeit flexibel.',
        'Sri Lanka bietet zudem ein hervorragendes Preis Leistungs Verhaltnis. Boutique Hotels, gutes Essen und erstklassige Tierbeobachtungen sind zu Preisen moglich, die sowohl zur Mittelklasse als auch zu <strong>Luxus Reisen nach Sri Lanka</strong> passen. Die herzliche Gastfreundschaft lasst Erstbesucher sofort willkommen fuhlen.',
      ],
      subsections: [{ heading: 'Was unterscheidet Sri Lanka von anderen Zielen in Asien?' }],
      cards: [
        { icon: 'fa-landmark', text: 'Acht UNESCO Welterbestatten, darunter Sigiriya, Kandy und das Fort von Galle.' },
        { icon: 'fa-globe', text: 'Ganzjahrig bereisbar  dank zweier Monsune gibt es immer eine sonnige Kuste.' },
        { icon: 'fa-route', text: 'Kompakt: Die meisten Hohepunkte liegen drei bis funf Fahrstunden auseinander.' },
        { icon: 'fa-paw', text: 'Aussergewohnliche Tierwelt  Elefanten, Leoparden, Blauwale und tropische Vogel.' },
        { icon: 'fa-utensils', text: 'Authentische Kuche aus Gewurzen, Kokos, Meeresfruchten und Bergland Gemuse.' },
        { icon: 'fa-car', text: 'Privatreisen mit eigenem Fahrer Guide  keine uberfullten Reisebusse.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Reiseziele in Sri Lanka' },
        { pageId: 'tours', label: 'Sri Lanka Reisepakete' },
        { pageId: 'marketGermany', label: 'Rundreise aus Deutschland' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Beste Reisezeit fur Sri Lanka',
      intro: [
        'Sri Lanka ist ein Ganzjahresziel. Da zwei Monsune unterschiedliche Kusten zu unterschiedlichen Zeiten betreffen, hat fast immer eine Region ideales Wetter  entscheidend ist, die Route zu Ihren Reisedaten passend zu wahlen.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'West und Sudkuste', meta: 'November bis April', text: 'Hauptsaison fur Wintersonne. Colombo, Galle, Mirissa, Bentota und Hikkaduwa bieten ruhige See und Sonne.' },
        { icon: 'fa-water', title: 'Ostkuste', meta: 'Mai bis September', text: 'Trincomalee, Pasikudah und Arugam Bay zeigen ihr bestes Wetter, wahrend anderswo der Sudwestmonsun Regen bringt.' },
        { icon: 'fa-mountain', title: 'Bergland', meta: 'Ganzjahrig', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya und Dambulla sind das ganze Jahr uber bereisbar, morgens meist klar.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'West und Sudkuste (November bis April)',
          paras: [
            'Hauptsaison fur Reisende, die dem Winter entfliehen. Die Sudkuste ist ideal fur Strandtage, Whale Watching und die Kombination eines Galle Ausflugs mit der Tierwelt im Suden. Die meisten 7- und 10 tagigen Reisen folgen diesem Zeitraum.',
          ],
        },
        {
          heading: 'Ostkuste (Mai bis September)',
          paras: [
            'Wahrend der Sudwestmonsun Colombo und Galle Regen bringt, zeigt sich die Ostkuste von ihrer besten Seite. Familien mit Sommerferien im Juli und August verlangern hier gern am Strand.',
          ],
        },
        {
          heading: 'Bergland & Kulturdreieck',
          paras: [
            'Kandy, Ella, Nuwara Eliya, Sigiriya und Dambulla funktionieren ganzjahrig. Morgens ist es meist klar fur den Aufstieg auf Sigiriya; kurze Nachmittagsschauer storen selten.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Galle Tagestour' },
        { pageId: 'ellaDay', label: 'Ella Tagestour' },
        { pageId: 'kandyDay', label: 'Kandy Tagestour' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Private Rundreisen mit Fahrer Guide',
      intro: [
        'Ein <strong>Fahrer Guide in Sri Lanka</strong> ist weit mehr als ein Fahrer  er ist Ihr taglicher Planer, kultureller Dolmetscher und Sicherheitsnetz auf fremden Strassen. Jede private Sundown Tours Reise umfasst einen lizenzierten, erfahrenen Fahrer Guide, der klar Englisch spricht (weitere Sprachen auf Anfrage).',
        'Europaische Reisende schatzen klimatisierten Komfort, flexible Startzeiten und die Freiheit, fur Fotos, eine Teeplantage oder einen spontanen Tempelbesuch anzuhalten  Sie sind an keinen Gruppenplan gebunden.',
      ],
      subsections: [{ heading: 'Was ist in einer privaten Rundreise mit Fahrer enthalten?' }],
      list: [
        'Eigenes Fahrzeug und lizenzierter Fahrer Guide fur die gesamte Route',
        'Flughafenabholung und Ruckbringung in Colombo (CMB) oder Regionalflughafen',
        'Kraftstoff, Parkgebuhren und Fahrerunterkunft  transparent im Voraus kalkuliert',
        'Ortskenntnis zu Strassen, Sehenswurdigkeiten, Restaurants und Saison',
        'Hilfe bei Hotel Check in, Safari Jeep Buchungen und Zugtickets',
        'Ein flexibler Tagesablauf  Sie bestimmen das Tempo',
      ],
      seeAlso: [
        { pageId: 'about', label: 'Uber Sundown Tours' },
        { pageId: 'services', label: 'Unsere Reiseleistungen' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Sri Lanka Reisepakete fur jede Reisedauer',
      intro: [
        'Die passende Lange Ihres <strong>Sri Lanka Reisepakets</strong> hangt davon ab, wie tief Sie eintauchen mochten. Kurze Routen eignen sich fur Wiederkehrer oder Strandurlaub; langere Routen verbinden Kultur, Tierwelt und Erholung ohne Hektik. Alle Pakete sind anpassbar.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Kurze Privatreisen', meta: '4 bis 6 Tage', text: 'Kompakte Routen mit Sigiriya, Kandy, Ella und Yala.', linkPageId: 'tour4', linkLabel: '4 Tage Sri Lanka Rundreise' },
        { icon: 'fa-calendar-alt', title: 'Eine Woche', meta: '7 bis 8 Tage', text: 'Unsere beliebteste Wahl. Kulturdreieck, Teeland, Yala Safari und Sudkuste.', linkPageId: 'tour7', linkLabel: '7 Tage Sri Lanka Rundreise' },
        { icon: 'fa-calendar-alt', title: 'Ausfuhrliche Inselreisen', meta: 'Ab 10 Tagen', text: 'Nord zentrale Kultur, mehrere Safaris, Wandern im Bergland und entspannte Strandtage.', linkPageId: 'tour10', linkLabel: '10 Tage Sri Lanka Rundreise' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Kurze Privatreisen (4 bis 6 Tage)',
          paras: [
            'Ideal als Verlangerung oder fur fokussierte Reisen. Die 4 Tage Reise umfasst Sigiriya, Kandy, Ella und Yala; die 5 Tage Reise bietet mehr Zeit fur Tempel und eine Zugfahrt; Familien bevorzugen oft das ruhigere Tempo der 6 Tage Privatreise.',
          ],
        },
        {
          heading: 'Eine Woche (7 bis 8 Tage)',
          paras: [
            'Die 7 Tage Reise ist bei deutschen und britischen Reisenden mit einer Woche Urlaub am beliebtesten und verbindet Kultur, Teeland, Yala Safari und Strande. Die 8 Tage Privatreise erganzt Wilpattu und Hikkaduwa.',
          ],
        },
        {
          heading: 'Ausfuhrliche Inselreisen (ab 10 Tagen)',
          paras: [
            'Eine 10 Tage Reise ermoglicht nord zentrale Kulturstatten, mehrere Safaris, Bergland Wanderungen und entspannte Strandtage  beliebt bei Paaren und Mehrgenerationen Familien aus der Schweiz.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour5', label: '5 Tage Sri Lanka Rundreise' },
        { pageId: 'tour6', label: '6 Tage Sri Lanka Privatreise' },
        { pageId: 'tour8', label: '8 Tage Sri Lanka Privatreise' },
        { pageId: 'tours', label: 'Alle Sri Lanka Reisepakete' },
      ],
    },
    {
      anchor: 'wildlife-safaris',
      heading: 'Safaris & Yala Nationalpark',
      intro: [
        '<strong>Safari Touren in Sri Lanka</strong> sind ein Hohepunkt fur Naturliebhaber. Die Nationalparks sind im Vergleich zu afrikanischen Reservaten kompakt, sodass Leoparden, Lippenbaren, Elefanten, Krokodile und Hunderte Vogelarten schon bei einer halbtagigen Jeep Safari zu sehen sind.',
      ],
      subsections: [
        {
          heading: 'Yala Safari  Land der Leoparden',
          paras: [
            'Der Yala Nationalpark (Block 1) hat eine der hochsten Leopardendichten weltweit. Morgens sind Licht und Tieraktivitat am besten. Unsere Safari in Ella und Yala verbindet Berglandschaft mit einer Pirschfahrt, beliebt bei Fotografen aus Grossbritannien und Polen.',
          ],
        },
        {
          heading: 'Weitere bekannte Safari Parks',
          list: [
            '<strong>Udawalawe</strong>  zuverlassige Elefantenherden; ideal fur Familien',
            '<strong>Wilpattu</strong>  ruhigeres Leopardengebiet; Teil unserer 8 Tage Route',
            '<strong>Minneriya / Kaudulla</strong> saisonale Elefantentreffen (Juli bis Oktober)',
            '<strong>Bundala</strong>  Feuchtgebiets und Zugvogel fur Ornithologen',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour2ey', label: '2 Tage Ella & Yala Safari' },
        { pageId: 'tours', label: 'Safari Reisepakete' },
      ],
    },
    {
      anchor: 'destinations-cards',
      eyebrow: 'REISEZIELE',
      heading: 'Beliebte Reiseziele in Sri Lanka',
      cards: [
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'Sri Lankas beruhmteste Felsenfestung, 200 Meter uber der Ebene.', linkPageId: 'sigiriyaDay', linkLabel: 'Sigiriya Tour' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'Die letzte Konigsstadt und Heimat des Zahntempels.', linkPageId: 'kandyDay', linkLabel: 'Kandy Tour' },
        { icon: 'fa-train', title: 'Ella', text: 'Bergland Zentrum fur Wanderungen, Cafes und die Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Ella Tour' },
        { icon: 'fa-ship', title: 'Galle', text: 'UNESCO Fort mit hollandischen Kolonialgassen und Sonnenuntergangen.', linkPageId: 'galleDay', linkLabel: 'Galle Tour' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'Das Kulturdreieck: Sigiriya, Kandy & antike Konigsstadte',
      intro: [
        'Das Kulturdreieck ist das historische Herz Sri Lankas und bei jedem Erstbesuch ein Muss. Zwischen Kandy, Anuradhapura und Polonnaruwa finden Sie Felsenfestungen, Hohlentempel, Konigspalaste und lebendige buddhistische Traditionen, die uber zwei Jahrtausende zuruckreichen.',
      ],
      subsections: [
        {
          heading: 'Felsenfestung Sigiriya',
          paras: [
            'Sigiriya erhebt sich 200 Meter uber die Ebene und ist Sri Lankas ikonischstes Wahrzeichen. Steigen Sie am kuhlen fruhen Morgen zu Fresken, Spiegelwand und Gipfelblick uber das Dschungeldach auf.',
          ],
        },
        {
          heading: 'Kandy & der Zahntempel',
          paras: [
            'Kandy, die letzte Konigsstadt, liegt an einem See zwischen Hugeln. Der Zahntempel ist eine lebendige Pilgerstatte mit taglichen Puja Zeremonien  oft kombiniert mit dem Koniglichen Botanischen Garten und einer Tanzshow.',
          ],
        },
        {
          heading: 'Anuradhapura & Polonnaruwa',
          paras: [
            'Diese antiken Stadte bieten riesige Stupas, Steinskulpturen und Klosterruinen. Auf langeren Reisen bauen wir eine Fahrradtour durch Polonnaruwa ein  ein Hohepunkt fur geschichtsinteressierte Reisende.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'sigiriyaDay', label: 'Sigiriya Tagestour' },
        { pageId: 'kandyDay', label: 'Kandy Tagestour' },
      ],
    },
    {
      anchor: 'tea-country',
      heading: 'Teeland & Bergstation Ella',
      intro: [
        'Sri Lankas Bergland  das historische Ceylon Teeland  bietet kuhlere Temperaturen, spektakulare Aussichtspunkte und eine der schonsten Zugfahrten der Welt. Nuwara Eliya wirkt uberraschend europaisch; Ella ist das Zentrum fur Wanderungen, Cafes und die Nine Arch Bridge.',
        'Die Zugfahrt von Kandy nach Ella zahlt durchweg zu den schonsten Bahnstrecken der Welt. Wir reservieren nach Moglichkeit Sitzplatze und organisieren private Transfers, wenn die Fahrplane nicht zu Ihrer Route passen.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Ella Tagestour' },
        { pageId: 'tour2ek', label: '2 Tage Ella & Kandy Privatreise' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Strande & Sudkuste Sri Lankas',
      intro: [
        'Nach Kultur und Safari klingen die meisten <strong>Sri Lanka Urlaube</strong> am Strand aus. Die Sudkuste verbindet das historische Galle Fort, Surfen in Weligama und Mirissa, ruhiges Baden in Unawatuna und Whale Watching ab Mirissa (November bis April).',
        'Galle Fort ist eine von der UNESCO gelistete Festungsstadt mit hollandischen Kolonialbauten und Boutiquen. Hikkaduwa und Bentota bieten Resorthotels fur <strong>Luxusreisen</strong>; Tangalle und Mirissa eignen sich fur ruhigere Boutique Aufenthalte.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Galle Fort Tagestour' },
        { pageId: 'testimonials', label: 'Reisebewertungen lesen' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Luxusreisen & massgeschneiderte Sri Lanka Ferien',
      intro: [
        'Bei <strong>Luxusreisen nach Sri Lanka</strong> geht es um Privatsphare, Raum und kuratierte Erlebnisse  Boutique Villen im Bergland, Beachfront Suiten in Galle, private Safari Jeeps und Fahrer Guides, die Ihre Wunsche vorausahnen.',
        'Wir gestalten <strong>massgeschneiderte Sri Lanka Ferien</strong> mit gepruften Luxuspartnern und transparenten Preisen  ohne versteckte Provisionen oder erzwungene Einkaufsstopps.',
      ],
      list: [
        'Funf Sterne und Boutique Hotels zu besten verfugbaren Preisen',
        'Private Guides fur Archaologie, Vogelbeobachtung oder Fotografie',
        'Luxus Fuhrpark mit geraumigen SUVs und Vans fur Familien',
        'Planung besonderer Anlasse  Jubilaen, Heiratsantrage, runde Geburtstage',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Sri Lanka Familienreisen',
      intro: [
        'Sri Lanka ist aussergewohnlich familienfreundlich. Die Wege sind uberschaubar, Hotels bieten Verbindungszimmer und Pools, und Kinder lieben Elefantenwaisenhauser, Schildkroten Aufzuchtstationen, Gewurzgarten und Strandtage. Unsere <strong>Familienreisen</strong> planen Ruhetage und kurzere Fahrten ein.',
        'Fur Familien aus Europa mit Schulkindern empfehlen wir sieben bis zehn Tage. Eine typische Route verbindet Sigiriya, eine Jeep Safari, die Zugfahrt von Kandy nach Ella und zwei bis drei Strandtage.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Familienfreundliche Reisepakete' },
        { pageId: 'guides', label: 'Sri Lanka Reisefuhrer' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Flitterwochen & romantische Reisen in Sri Lanka',
      intro: [
        'Fur Paare aus Deutschland, Italien, Frankreich und der Schweiz verbinden <strong>Flitterwochen in Sri Lanka</strong> Abenteuer und Intimitat  Sonnenaufgang auf Sigiriya, Candle Light Dinner in einem Teeplantagen Bungalow, ein Katamaran an der Sudkuste und eine Villa mit Pool am Meer.',
        'Auf Wunsch organisieren wir Blumen, Uberraschungstorten, Paar Spa und Fotoshootings. Flitterwochen Routen dauern meist acht bis vierzehn Tage mit entspannten Zwei Nachte Aufenthalten.',
      ],
      seeAlso: [{ pageId: 'tour7', label: '7 Tage Flitterwochen Idee' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'WARUM WIR',
      heading: 'Vertrauenswurdige lokale Experten seit 1992',
      cards: [
        { icon: 'fa-clock', title: 'Seit 1992', text: 'Uber drei Jahrzehnte verlasslicher Service fur internationale Reisende.' },
        { icon: 'fa-user', title: 'Lizenzierte Guides', text: 'Lizenzierte Fahrer Guides mit fundierter Ortskenntnis.' },
        { icon: 'fa-heart', title: 'Zufriedene Reisende', text: 'Tausende zufriedene Reisende aus ganz Europa und daruber hinaus.' },
        { icon: 'fa-map-marker-alt', title: 'Massgeschneidert', text: 'Jede Route ist individuell  keine Bustouren von der Stange.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Mit unserem Team sprechen' },
        { pageId: 'about', label: 'Unsere Geschichte' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Ihre Sri Lanka Reise aus Europa planen',
      intro: [
        'Direkt und Umsteigeverbindungen verbinden Colombo mit Frankfurt, Zurich, Wien, Munchen, Paris und weiteren Stadten. Die meisten europaischen Reisenden landen uber Nacht und beginnen ihre Reise am nachsten Morgen  Ihr Fahrer erwartet Sie am Flughafen Bandaranaike (CMB).',
      ],
      subsections: [
        {
          heading: 'Wichtige Reisetipps fur Sri Lanka',
          list: [
            'Leichte, atmungsaktive Kleidung plus eine Schicht fur kuhle Bergland Morgen',
            'In buddhistischen Tempeln Schuhe ausziehen, Schultern und Knie bedecken',
            'Sigiriya und Yala Safari Zeiten in der Hauptsaison fruh buchen',
            'Hoppers, Kottu Roti und frisches Fischcurry probieren  die Kuche ist ein Highlight',
            'Sonnencreme und Insektenschutz fur Safari und Abende einpacken',
            'Kopien von Reisepass und ETA Visum bereithalten',
          ],
        },
        {
          heading: 'Sri Lanka Visum (ETA) fur europaische Burger',
          paras: [
            'Die meisten europaischen Pass Inhaber benotigen vor der Einreise eine elektronische Reisegenehmigung (ETA). Beantragen Sie diese online mindestens 24 bis 48 Stunden vor Abflug und halten Sie Genehmigung und Referenznummer fur die Einreise bereit. Kinder benotigen ein eigenes ETA.',
          ],
        },
        {
          heading: 'Ist Sri Lanka fur Touristen sicher?',
          paras: [
            'Sri Lanka ist grundsatzlich sicher und gastfreundlich; Millionen besuchen die Insel jedes Jahr ohne Zwischenfalle. Eine Reise mit einem seriosen Fahrer Guide eines etablierten Veranstalters nimmt Ihnen die meisten praktischen Sorgen rund um Transport, Preise und Routenplanung ab.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Sri Lanka Reisefuhrer' },
        { pageId: 'restaurants', label: 'Restaurants in Sri Lanka' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Haufige Fragen zu Sri Lanka Reisen',
  faqs: [
    {
      q: 'Wie viele Tage benotige ich fur eine Sri Lanka Reise?',
      a: 'Sieben bis zehn Tage passen fur die meisten Erstbesucher aus Europa. Eine 7 Tage Reise deckt Kultur, Bergland, Safari und Strande ab; vierzehn Tage erlauben Norden, Osten und Luxus an der Sudkuste ohne Hektik.',
    },
    {
      q: 'Was ist der Unterschied zwischen einer Gruppenreise und einer privaten Rundreise?',
      a: 'Eine Privatreise bietet Ihnen ein eigenes Fahrzeug und einen Fahrer Guide  Sie wahlen Abfahrtszeiten, Stopps und Hotels. Gruppenbusreisen folgen festen Planen. Sundown Tours ist ausschliesslich auf private, massgeschneiderte Reisen spezialisiert.',
    },
    {
      q: 'Lohnt sich ein Fahrer Guide in Sri Lanka?',
      a: 'Ja. Strassenverhaltnisse, unbeschilderte Abzweigungen und dichter Stadtverkehr machen Selbstfahren stressig. Ein lizenzierter Guide spart Zeit, erklart die Kultur, kummert sich um Tickets und passt die Route bei Wetteranderungen an.',
    },
    {
      q: 'Wann ist die beste Zeit fur eine Yala Safari?',
      a: 'Yala Block 1 ist ganzjahrig geoffnet; in den Trockenmonaten (Februar bis Juli) sind Leoparden leichter zu sehen, da sich Tiere am Wasser sammeln. Buchen Sie Morgensafaris fur kuhlere Temperaturen und besseres Licht.',
    },
    {
      q: 'Sind Sri Lanka Reisen fur Familien mit Kindern geeignet?',
      a: 'Absolut. Kurzere Fahrten, Hotelpools, Elefantenwaisenhauser, Schildkrotenstationen und Strandtage begeistern Kinder. Wir planen Familienreisen mit flexiblem Tempo und kinderfreundlichen Restaurants.',
    },
    {
      q: 'Brauche ich ein Visum fur Sri Lanka?',
      a: 'Die meisten europaischen Burger benotigen ein ETA (elektronische Reisegenehmigung), das online vor der Reise beantragt wird. Beantragen Sie es mindestens 48 Stunden vor Abflug; Kinder benotigen ein eigenes ETA.',
    },
    {
      q: 'Wie lange dauert der Flug von Frankfurt nach Sri Lanka?',
      a: 'In der Luft typischerweise etwa 9,5 bis 11 Stunden, plus Umsteigen. Ob ein Direktflug an Ihren Daten existiert, sagt der aktuelle Airline Flugplan. Wir verkaufen keine Tickets, planen aber die erste Nacht um Ihre Ankunft.',
      links: [{ pageId: 'marketGermany', label: 'Rundreise aus Deutschland' }],
    },
    {
      q: 'Was gilt bei der Einreise Sri Lanka aus Deutschland?',
      a: 'ETA vorab auf eta.gov.lk. Ab 25. Mai 2026 ist die Touristen ETA fur deutsche Passe 30 Tage mit Doppeleinreise kostenlos  die Genehmigung brauchen Sie trotzdem vor dem Flug.',
      links: [{ pageId: 'guideVisa', label: 'Einreise & ETA' }],
    },
    {
      q: 'Wie plane ich eine Rundreise Sri Lanka 2 Wochen?',
      a: 'Zehn bis vierzehn Tage vor Ort (plus Flugtage) erlauben Kulturdreieck, Teeland, Safari und Strand ohne Hektik. Unsere 10 Tage Route ist der Kern; den Rest passen wir an Saison und Ost- oder Sudkuste an.',
      links: [{ pageId: 'tour10', label: '10 Tage Rundreise' }],
    },
    {
      q: 'Konnen Sie Flitterwochen- oder Luxusreisen individuell gestalten?',
      a: 'Jede Sundown Tours Route ist massgeschneidert. Wir organisieren Boutique Hotels, private Dinner, Spa Behandlungen und besondere Uberraschungen fur Flitterwochen und Luxusurlaube.',
    },
    {
      q: 'Wie buche ich eine Privatreise bei Sundown Tours?',
      a: 'Wahlen Sie ein Reisepaket und eine Dauer und senden Sie eine Anfrage uber das Kontaktformular oder WhatsApp. Wir antworten innerhalb von 24 Stunden mit einem massgeschneiderten Vorschlag und transparenten Preisen.',
      links: [{ pageId: 'contact', label: 'Kontakt' }],
    },
  ],
};

const fr: HomeSeoContent = {
  tag: 'GUIDE DE VOYAGE',
  title: 'Circuits Sri Lanka, sejours & chauffeur prive',
  subtitle:
    'Redige par les experts locaux de Sundown Tours Sri Lanka  chauffeur guides agrees, itineraires sur mesure et des milliers de voyageurs satisfaits venus de France, de Belgique, de Suisse et de toute l’Europe depuis 1992.',
  tocLabel: 'Sur cette page',
  seeAlsoLabel: 'A voir aussi',
  toc: [
    { label: 'Pourquoi le Sri Lanka', anchor: 'why-sri-lanka' },
    { label: 'Quand partir', anchor: 'best-time' },
    { label: 'Circuits prives', anchor: 'chauffeur-tours' },
    { label: 'Nos circuits', anchor: 'tour-packages' },
    { label: 'Safaris', anchor: 'wildlife-safaris' },
    { label: 'Triangle culturel', anchor: 'cultural-triangle' },
    { label: 'Pays du the', anchor: 'tea-country' },
    { label: 'Plages', anchor: 'beaches' },
    { label: 'En famille', anchor: 'family-tours' },
    { label: 'Lune de miel', anchor: 'honeymoon' },
    { label: 'Pourquoi nous', anchor: 'why-choose-us' },
    { label: 'FAQ', anchor: 'faq-heading' },
  ],
  sections: [
    {
      anchor: 'why-sri-lanka',
      heading: 'Pourquoi visiter le Sri Lanka ?',
      intro: [
        'Le Sri Lanka est l’une des destinations insulaires les plus enrichissantes d’Asie pour les voyageurs europeens en quete de diversite sans longs vols interieurs. En un seul <strong>voyage au Sri Lanka</strong>, vous gravissez une forteresse rocheuse au lever du jour, traversez en train des plantations de the embrumees, partez en safari aux leopards et terminez la semaine sur une plage bordee de palmiers.',
        'L’ile etant compacte, un <strong>circuit prive au Sri Lanka</strong> bien pense relie le triangle culturel, les montagnes, les parcs nationaux et la cote sud en sept a quatorze jours, a un rythme agreable et toujours flexible.',
        'Le Sri Lanka offre aussi un excellent rapport qualite prix. Hotels de charme, cuisine savoureuse et faune d’exception sont accessibles a des tarifs adaptes aux voyages de milieu de gamme comme aux <strong>circuits de luxe au Sri Lanka</strong>, et la chaleur de l’accueil met a l’aise des l’arrivee.',
      ],
      subsections: [{ heading: 'Ce qui distingue le Sri Lanka des autres destinations asiatiques' }],
      cards: [
        { icon: 'fa-landmark', text: 'Huit sites classes a l’UNESCO, dont Sigiriya, Kandy et le fort de Galle.' },
        { icon: 'fa-globe', text: 'Voyage toute l’annee  avec deux moussons, une cote est toujours ensoleillee.' },
        { icon: 'fa-route', text: 'Ile compacte : la plupart des sites sont a trois a cinq heures de route.' },
        { icon: 'fa-paw', text: 'Faune exceptionnelle  elephants, leopards, baleines bleues et oiseaux tropicaux.' },
        { icon: 'fa-utensils', text: 'Cuisine authentique aux epices, noix de coco, fruits de mer et legumes des montagnes.' },
        { icon: 'fa-car', text: 'Circuits prives avec chauffeur guide dedie  sans autocars bondes.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Guide des destinations du Sri Lanka' },
        { pageId: 'tours', label: 'Nos circuits au Sri Lanka' },
        { pageId: 'marketFrance', label: 'Voyage Sri Lanka depuis la France' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Quand partir au Sri Lanka ?',
      intro: [
        'Le Sri Lanka se visite toute l’annee. Deux moussons touchant des cotes differentes a des periodes differentes, une region beneficie presque toujours d’une meteo ideale  l’essentiel est d’adapter l’itineraire a vos dates.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'Cotes ouest & sud', meta: 'Novembre a avril', text: 'Haute saison pour fuir l’hiver. Colombo, Galle, Mirissa, Bentota et Hikkaduwa offrent mer calme et soleil.' },
        { icon: 'fa-water', title: 'Cote est', meta: 'Mai a septembre', text: 'Trincomalee, Pasikudah et Arugam Bay affichent leur meilleure meteo pendant la mousson du sud ouest.' },
        { icon: 'fa-mountain', title: 'Montagnes', meta: 'Toute l’annee', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya et Dambulla se visitent toute l’annee, avec des matinees degagees.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Cotes ouest & sud (novembre a avril)',
          paras: [
            'Haute saison pour le soleil d’hiver. La cote sud est ideale pour les plages, l’observation des baleines et l’association d’une visite de Galle avec la faune du sud. La plupart des circuits de 7 et 10 jours suivent cette periode.',
          ],
        },
        {
          heading: 'Cote est (mai a septembre)',
          paras: [
            'Tandis que la mousson du sud ouest apporte la pluie a Colombo et Galle, la cote est profite de son meilleur climat. Les familles en vacances en juillet et aout y prolongent souvent leur sejour balneaire.',
          ],
        },
        {
          heading: 'Montagnes & triangle culturel',
          paras: [
            'Kandy, Ella, Nuwara Eliya, Sigiriya et Dambulla se visitent toute l’annee. Les matinees sont generalement degagees pour gravir Sigiriya ; les averses de l’apres midi perturbent rarement la journee.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Excursion a Galle' },
        { pageId: 'ellaDay', label: 'Excursion a Ella' },
        { pageId: 'guideBestTime', label: 'Quand partir au Sri Lanka' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Circuits prives avec chauffeur guide',
      intro: [
        'Un <strong>chauffeur guide au Sri Lanka</strong> est bien plus qu’un conducteur : il est votre organisateur quotidien, votre interprete culturel et votre securite sur des routes inconnues. Chaque circuit prive Sundown Tours inclut un chauffeur guide agree et experimente parlant un anglais clair (autres langues sur demande).',
        'Les voyageurs europeens apprecient le confort climatise, la souplesse des horaires et la liberte de s’arreter pour une photo, une plantation de the ou un temple  vous n’etes jamais lie a un programme de groupe.',
      ],
      subsections: [{ heading: 'Que comprend un circuit prive avec chauffeur ?' }],
      list: [
        'Vehicule dedie et chauffeur guide agree pour tout l’itineraire',
        'Transferts aeroport a Colombo (CMB) ou aeroports regionaux',
        'Carburant, parking et hebergement du chauffeur, chiffres en toute transparence',
        'Connaissance des routes, sites, restaurants et conditions saisonnieres',
        'Aide pour l’enregistrement a l’hotel, les jeeps de safari et les billets de train',
        'Un programme quotidien flexible  c’est vous qui donnez le rythme',
      ],
      seeAlso: [
        { pageId: 'about', label: 'A propos de Sundown Tours' },
        { pageId: 'services', label: 'Nos services' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Des circuits au Sri Lanka pour toutes les durees',
      intro: [
        'La bonne duree de votre <strong>circuit au Sri Lanka</strong> depend de votre envie d’exploration. Les itineraires courts conviennent aux habitues ou aux sejours plages ; les plus longs melent culture, faune et detente sans se presser. Chaque circuit est personnalisable.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Circuits courts', meta: '4 to 6 jours', text: 'Boucles ciblees : Sigiriya, Kandy, Ella et Yala.', linkPageId: 'tour4', linkLabel: 'Circuit 4 jours' },
        { icon: 'fa-calendar-alt', title: 'Une semaine', meta: '7 to 8 jours', text: 'Notre formule la plus prisee  triangle culturel, pays du the, safari a Yala et plages.', linkPageId: 'tour7', linkLabel: 'Circuit 7 jours' },
        { icon: 'fa-calendar-alt', title: 'Grands circuits', meta: '10 jours et +', text: 'Patrimoine du centre nord, plusieurs safaris, randonnees et plages tranquilles.', linkPageId: 'tour10', linkLabel: 'Circuit 10 jours' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Circuits courts (4 to 6 jours)',
          paras: [
            'Ideals en extension ou pour un voyage cible. Le circuit 4 jours couvre Sigiriya, Kandy, Ella et Yala ; le 5 jours ajoute du temps pour les temples et le train panoramique ; les familles preferent souvent le rythme plus doux du 6 jours.',
          ],
        },
        {
          heading: 'Une semaine (7 to 8 jours)',
          paras: [
            'Le circuit 7 jours est le plus prise des voyageurs francais et britanniques disposant d’une semaine, melant culture, pays du the, safari a Yala et plages. Le 8 jours ajoute Wilpattu et Hikkaduwa.',
          ],
        },
        {
          heading: 'Grands circuits (10 jours et plus)',
          paras: [
            'Un circuit de 10 jours permet le patrimoine du centre nord, plusieurs safaris, la randonnee en montagne et des plages tranquilles  prise des couples en lune de miel et des familles multigenerationnelles.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour5', label: 'Circuit 5 jours' },
        { pageId: 'tour6', label: 'Circuit prive 6 jours' },
        { pageId: 'tour8', label: 'Circuit prive 8 jours' },
        { pageId: 'tours', label: 'Tous nos circuits' },
      ],
    },
    {
      anchor: 'wildlife-safaris',
      heading: 'Safaris & parc national de Yala',
      intro: [
        'Les <strong>safaris au Sri Lanka</strong> sont un temps fort pour les amoureux de nature. Les parcs sont compacts par rapport aux reserves africaines : leopards, ours lippus, elephants, crocodiles et des centaines d’oiseaux s’observent en une demi journee de jeep.',
      ],
      subsections: [
        {
          heading: 'Safari a Yala  le pays des leopards',
          paras: [
            'Le parc de Yala (bloc 1) presente l’une des plus fortes densites de leopards au monde. Les sorties matinales offrent la meilleure lumiere et activite animale. Notre circuit Ella & Yala associe paysages de montagne et safari  prise des photographes britanniques et polonais.',
          ],
        },
        {
          heading: 'Autres parcs de safari',
          list: [
            '<strong>Udawalawe</strong>  troupeaux d’elephants fiables ; ideal en famille',
            '<strong>Wilpattu</strong>  territoire de leopards plus calme ; sur notre circuit 8 jours',
            '<strong>Minneriya / Kaudulla</strong>  rassemblements d’elephants (juillet to octobre)',
            '<strong>Bundala</strong>  oiseaux de zones humides et migrateurs',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour2ey', label: 'Circuit 2 jours Ella & Yala' },
        { pageId: 'tours', label: 'Circuits safari' },
      ],
    },
    {
      anchor: 'destinations-cards',
      eyebrow: 'DESTINATIONS',
      heading: 'Destinations phares du Sri Lanka',
      cards: [
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'La forteresse rocheuse la plus emblematique, a 200 m au dessus de la plaine.', linkPageId: 'sigiriyaDay', linkLabel: 'Excursion a Sigiriya' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'La derniere capitale royale et le Temple de la Dent sacree.', linkPageId: 'kandyDay', linkLabel: 'Excursion a Kandy' },
        { icon: 'fa-train', title: 'Ella', text: 'Coeur des montagnes : randonnees, cafes et le Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Excursion a Ella' },
        { icon: 'fa-ship', title: 'Galle', text: 'Fort colonial hollandais classe UNESCO et remparts au coucher du soleil.', linkPageId: 'galleDay', linkLabel: 'Excursion a Galle' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'Le triangle culturel : Sigiriya, Kandy & cites antiques',
      intro: [
        'Le triangle culturel est le coeur historique du Sri Lanka, incontournable lors d’une premiere visite. Entre Kandy, Anuradhapura et Polonnaruwa se trouvent forteresses, temples troglodytes, palais royaux et traditions bouddhistes vieilles de plus de deux millenaires.',
      ],
      subsections: [
        {
          heading: 'Forteresse de Sigiriya',
          paras: [
            'Culminant a 200 m au dessus de la plaine, Sigiriya est le site le plus emblematique du pays. Montez tot le matin pour les fresques, le mur miroir et la vue au sommet sur la canopee.',
          ],
        },
        {
          heading: 'Kandy & le Temple de la Dent',
          paras: [
            'Kandy, derniere capitale royale, borde un lac entoure de collines. Le Temple de la Dent sacree est un lieu de pelerinage vivant, souvent associe au jardin botanique de Peradeniya et a un spectacle de danse.',
          ],
        },
        {
          heading: 'Anuradhapura & Polonnaruwa',
          paras: [
            'Ces cites antiques offrent d’immenses stupas, des sculptures et des ruines de monasteres. Sur les circuits plus longs, nous incluons une visite a velo de Polonnaruwa  un temps fort pour les passionnes d’histoire.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'sigiriyaDay', label: 'Excursion a Sigiriya' },
        { pageId: 'kandyDay', label: 'Excursion a Kandy' },
      ],
    },
    {
      anchor: 'tea-country',
      heading: 'Le pays du the & la station d’Ella',
      intro: [
        'Les montagnes du Sri Lanka  l’historique pays du the de Ceylan  offrent fraicheur, panoramas spectaculaires et l’un des plus beaux trajets ferroviaires du monde. Nuwara Eliya parait etonnamment europeenne ; Ella est le centre des randonnees, cafes et du Nine Arch Bridge.',
        'Le train de Kandy a Ella figure parmi les plus belles lignes du monde. Nous reservons les places lorsque c’est possible et organisons des transferts prives si les horaires ne conviennent pas a votre programme.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Excursion a Ella' },
        { pageId: 'tour2ek', label: 'Circuit 2 jours Ella & Kandy' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Les plages & la cote sud du Sri Lanka',
      intro: [
        'Apres la culture et le safari, la plupart des <strong>sejours au Sri Lanka</strong> se terminent a la plage. La cote sud allie le fort de Galle, le surf a Weligama et Mirissa, la baignade paisible a Unawatuna et l’observation des baleines a Mirissa (novembre to avril).',
        'Le fort de Galle est une cite fortifiee classee UNESCO aux batiments coloniaux hollandais. Hikkaduwa et Bentota proposent des hotels clubs pour les <strong>circuits de luxe</strong> ; Tangalle et Mirissa conviennent aux sejours plus intimes.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Excursion au fort de Galle' },
        { pageId: 'testimonials', label: 'Lire les avis' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Circuits de luxe & sejours sur mesure',
      intro: [
        'Les <strong>circuits de luxe au Sri Lanka</strong> misent sur l’intimite, l’espace et des experiences soignees  villas de charme en montagne, suites face a la mer a Galle, jeeps privees de safari et chauffeur guides attentifs a vos preferences.',
        'Nous concevons des <strong>sejours sur mesure</strong> avec des partenaires de luxe verifies et des prix transparents  sans commissions cachees ni arrets shopping imposes.',
      ],
      list: [
        'Hotels 5 etoiles et de charme aux meilleurs tarifs',
        'Guides prives pour l’archeologie, l’ornithologie ou la photographie',
        'Flotte de vehicules haut de gamme, SUV et vans spacieux pour les familles',
        'Organisation d’occasions speciales  anniversaires, demandes en mariage',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Voyages en famille au Sri Lanka',
      intro: [
        'Le Sri Lanka est tres adapte aux familles. Les distances sont raisonnables, les hotels offrent chambres communicantes et piscines, et les enfants adorent orphelinats d’elephants, ecloseries de tortues, jardins d’epices et plages. Nos <strong>voyages en famille</strong> prevoient des jours de repos et des trajets plus courts.',
        'Pour les familles europeennes avec enfants scolarises, nous recommandons sept a dix jours  un itineraire type mele Sigiriya, un safari en jeep, le train Kandy to Ella et deux ou trois jours de plage.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Circuits adaptes aux familles' },
        { pageId: 'guides', label: 'Guides de voyage Sri Lanka' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Lune de miel & escapades romantiques au Sri Lanka',
      intro: [
        'Pour les couples de France, d’Italie et d’Espagne, la <strong>lune de miel au Sri Lanka</strong> mele aventure et intimite  lever de soleil a Sigiriya, diner aux chandelles dans un bungalow de plantation, catamaran sur la cote sud et villa avec piscine face a l’ocean.',
        'Sur demande, nous organisons fleurs, gateaux surprises, soins spa en duo et seances photo. Les itineraires lune de miel durent generalement huit a quatorze jours, a un rythme detendu.',
      ],
      seeAlso: [{ pageId: 'tour7', label: 'Idee lune de miel 7 jours' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'POURQUOI NOUS',
      heading: 'Experts locaux de confiance depuis 1992',
      cards: [
        { icon: 'fa-clock', title: 'Depuis 1992', text: 'Plus de trois decennies de service fiable aux voyageurs du monde entier.' },
        { icon: 'fa-user', title: 'Guides agrees', text: 'Chauffeurs guides agrees a la connaissance locale approfondie.' },
        { icon: 'fa-heart', title: 'Voyageurs satisfaits', text: 'Des milliers de voyageurs satisfaits venus de toute l’Europe.' },
        { icon: 'fa-map-marker-alt', title: 'Sur mesure', text: 'Chaque itineraire est personnalise  jamais d’autocar standardise.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Parler a notre equipe' },
        { pageId: 'about', label: 'Notre histoire' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Preparer votre voyage au Sri Lanka depuis l’Europe',
      intro: [
        'Des vols directs et avec escale relient Colombo a Paris, Geneve, Bruxelles, Milan, Madrid et d’autres villes. La plupart des voyageurs europeens arrivent de nuit et commencent leur circuit le lendemain  votre chauffeur vous accueille a l’aeroport Bandaranaike (CMB).',
      ],
      subsections: [
        {
          heading: 'Conseils essentiels pour le Sri Lanka',
          list: [
            'Vetements legers et respirants, plus une couche pour les matinees en montagne',
            'Retirer ses chaussures et couvrir epaules et genoux dans les temples',
            'Reserver tot les creneaux de Sigiriya et du safari de Yala en haute saison',
            'Gouter les hoppers, le kottu roti et le curry de poisson frais',
            'Prevoir creme solaire et anti moustiques pour le safari et les diners',
            'Conserver des copies du passeport et de l’autorisation ETA',
          ],
        },
        {
          heading: 'Visa (ETA) pour les citoyens europeens',
          paras: [
            'La plupart des ressortissants europeens ont besoin d’une autorisation electronique de voyage (ETA) avant l’arrivee. Faites la demande en ligne au moins 24 a 48 heures avant le depart et conservez l’approbation et le numero de reference. Les enfants ont besoin de leur propre ETA.',
          ],
        },
        {
          heading: 'Le Sri Lanka est il sur pour les touristes ?',
          paras: [
            'Le Sri Lanka est globalement sur et accueillant ; des millions de visiteurs s’y rendent chaque annee sans incident. Voyager avec un chauffeur guide repute d’un voyagiste etabli elimine la plupart des tracas lies au transport, aux prix et a l’organisation.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Guides de voyage Sri Lanka' },
        { pageId: 'restaurants', label: 'Restaurants au Sri Lanka' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Questions frequentes sur les circuits au Sri Lanka',
  faqs: [
    {
      q: 'Combien de jours faut il pour un circuit au Sri Lanka ?',
      a: 'Sept a dix jours conviennent a la plupart des primo visiteurs europeens. Un circuit de 7 jours couvre culture, montagnes, safari et plages ; quatorze jours permettent le nord, l’est et la cote sud de luxe sans se presser.',
    },
    {
      q: 'Quelle difference entre un circuit en groupe et un circuit prive ?',
      a: 'Un circuit prive vous offre un vehicule et un chauffeur guide dedies : vous choisissez horaires, arrets et hotels. Les circuits en autocar suivent des programmes fixes. Sundown Tours se consacre exclusivement au voyage prive sur mesure.',
    },
    {
      q: 'Un chauffeur guide en vaut il la peine ?',
      a: 'Oui. L’etat des routes, les virages non signales et la circulation dense rendent la conduite stressante. Un guide agree fait gagner du temps, explique la culture, gere les billets et adapte l’itineraire selon la meteo.',
    },
    {
      q: 'Quelle est la meilleure periode pour un safari a Yala ?',
      a: 'Le bloc 1 de Yala est ouvert toute l’annee ; les mois secs (fevrier to juillet) facilitent l’observation des leopards, les animaux se regroupant pres de l’eau. Preferez les safaris matinaux pour la fraicheur et la lumiere.',
    },
    {
      q: 'Les circuits conviennent ils aux familles avec enfants ?',
      a: 'Tout a fait. Trajets plus courts, piscines, orphelinats d’elephants, ecloseries de tortues et plages ravissent les enfants. Nous planifions des circuits familiaux au rythme souple avec des restaurants adaptes.',
    },
    {
      q: 'Faut il un visa pour le Sri Lanka ?',
      a: 'Les passeports francais ont besoin d’une ETA avant le vol, uniquement sur eta.gov.lk. Depuis le 25 mai 2026 l’ETA touristique est gratuite 30 jours (double entree). Les recherches « arrival card » visent cette demarche officielle, pas un site tiers.',
      links: [{ pageId: 'guideVisa', label: 'Visa, ETA et arrival card' }],
    },
    {
      q: 'Combien de temps dure le vol Paris to Sri Lanka ?',
      a: 'Environ 10 a 12 heures en l’air. Des vols directs existent selon les dates ; beaucoup d’itineraires correspondent dans le Golfe. Nous ne vendons pas de billets ; nous calons la premiere nuit sur l’arrivee reelle a CMB.',
      links: [{ pageId: 'marketFrance', label: 'Voyage depuis la France' }],
    },
    {
      q: 'Quand partir / que visiter au Sri Lanka ?',
      a: 'Decembre to mars pour le sud et l’ouest (Mirissa, Weligama, Galle). Mai to septembre souvent mieux pour l’est, le Triangle Culturel et le safari. Un premier voyage : rocher du lion de Sigiriya, Kandy, train vers Ella, Yala ou Udawalawe, puis la plage.',
      links: [{ pageId: 'guideBestTime', label: 'Quand partir' }],
    },
    {
      q: 'Pouvez vous personnaliser une lune de miel ou un circuit de luxe ?',
      a: 'Chaque itineraire Sundown Tours est sur mesure. Nous organisons hotels de charme, diners prives, soins spa et surprises pour les lunes de miel et sejours de luxe.',
    },
    {
      q: 'Comment reserver un circuit prive avec Sundown Tours ?',
      a: 'Parcourez nos circuits, choisissez une duree et envoyez une demande via le formulaire de contact ou WhatsApp. Nous repondons sous 24 heures avec une proposition sur mesure et des prix transparents.',
      links: [{ pageId: 'contact', label: 'Nous contacter' }],
    },
  ],
};

const it: HomeSeoContent = {
  tag: 'GUIDA DI VIAGGIO',
  title: 'Viaggio Sri Lanka: quando andare, tour privati e autista',
  subtitle:
    'Scritta dagli esperti locali di Sundown Tours Sri Lanka  autisti guida autorizzati, itinerari su misura e migliaia di viaggiatori soddisfatti da Italia, Svizzera e da tutta Europa dal 1992.',
  tocLabel: 'In questa pagina',
  seeAlsoLabel: 'Vedi anche',
  toc: [
    { label: 'Perche lo Sri Lanka', anchor: 'why-sri-lanka' },
    { label: 'Quando andare', anchor: 'best-time' },
    { label: 'Tour privati', anchor: 'chauffeur-tours' },
    { label: 'I nostri tour', anchor: 'tour-packages' },
    { label: 'Safari', anchor: 'wildlife-safaris' },
    { label: 'Triangolo culturale', anchor: 'cultural-triangle' },
    { label: 'Regione del te', anchor: 'tea-country' },
    { label: 'Spiagge', anchor: 'beaches' },
    { label: 'In famiglia', anchor: 'family-tours' },
    { label: 'Luna di miele', anchor: 'honeymoon' },
    { label: 'Perche noi', anchor: 'why-choose-us' },
    { label: 'FAQ', anchor: 'faq-heading' },
  ],
  sections: [
    {
      anchor: 'why-sri-lanka',
      heading: 'Perche visitare lo Sri Lanka?',
      intro: [
        'Lo Sri Lanka e una delle isole piu appaganti dell’Asia per i viaggiatori europei che cercano varieta senza lunghi voli interni. In un solo <strong>viaggio in Sri Lanka</strong> puoi salire su un’antica fortezza rocciosa all’alba, attraversare in treno piantagioni di te avvolte dalla nebbia, fare un safari ai leopardi e chiudere la settimana su una spiaggia di palme.',
        'Essendo l’isola compatta, un <strong>tour privato in Sri Lanka</strong> ben pianificato collega il triangolo culturale, le montagne, i parchi nazionali e la costa sud in sette quattordici giorni, a un ritmo piacevole e sempre flessibile.',
        'Lo Sri Lanka offre anche un ottimo rapporto qualita prezzo. Hotel di charme, cucina eccellente e fauna di livello mondiale sono accessibili a prezzi adatti sia alla fascia media sia ai <strong>tour di lusso in Sri Lanka</strong>, e il calore dell’accoglienza mette a proprio agio fin dall’arrivo.',
      ],
      subsections: [{ heading: 'Cosa distingue lo Sri Lanka dalle altre mete asiatiche' }],
      cards: [
        { icon: 'fa-landmark', text: 'Otto siti UNESCO, tra cui Sigiriya, Kandy e il Forte di Galle.' },
        { icon: 'fa-globe', text: 'Viaggi tutto l’anno  con due monsoni c’e sempre una costa soleggiata.' },
        { icon: 'fa-route', text: 'Isola compatta: gran parte delle attrazioni e a tre cinque ore di strada.' },
        { icon: 'fa-paw', text: 'Fauna eccezionale  elefanti, leopardi, balenottere azzurre e uccelli tropicali.' },
        { icon: 'fa-utensils', text: 'Cucina autentica con spezie, cocco, pesce e verdure di montagna.' },
        { icon: 'fa-car', text: 'Tour privati con autista guida dedicato  niente pullman affollati.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Guida alle destinazioni' },
        { pageId: 'tours', label: 'I nostri tour in Sri Lanka' },
        { pageId: 'marketItaly', label: 'Viaggio Sri Lanka dall’Italia' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Quando andare in Sri Lanka',
      intro: [
        'Lo Sri Lanka si visita tutto l’anno. Poiche due monsoni interessano coste diverse in periodi diversi, quasi sempre una regione gode di clima ideale  l’importante e adattare l’itinerario alle tue date.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'Coste ovest e sud', meta: 'Novembre to aprile', text: 'Alta stagione per il sole invernale. Colombo, Galle, Mirissa, Bentota e Hikkaduwa offrono mare calmo e sole.' },
        { icon: 'fa-water', title: 'Costa est', meta: 'Maggio to settembre', text: 'Trincomalee, Pasikudah e Arugam Bay danno il meglio mentre altrove piove per il monsone di sud ovest.' },
        { icon: 'fa-mountain', title: 'Montagne', meta: 'Tutto l’anno', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya e Dambulla si visitano tutto l’anno, con mattinate limpide.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Coste ovest e sud (novembre to aprile)',
          paras: [
            'Alta stagione per chi cerca il sole invernale. La costa sud e ideale per spiagge, whale watching e per unire una gita a Galle con la fauna del sud. La maggior parte dei tour di 7 e 10 giorni segue questo periodo.',
          ],
        },
        {
          heading: 'Costa est (maggio to settembre)',
          paras: [
            'Mentre il monsone di sud ovest porta pioggia a Colombo e Galle, la costa est vive il suo clima migliore. Le famiglie in vacanza a luglio e agosto vi prolungano spesso il soggiorno balneare.',
          ],
        },
        {
          heading: 'Montagne e triangolo culturale',
          paras: [
            'Kandy, Ella, Nuwara Eliya, Sigiriya e Dambulla si visitano tutto l’anno. Le mattine sono di solito limpide per salire a Sigiriya; i brevi acquazzoni pomeridiani raramente disturbano la giornata.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guideBestTime', label: 'Quando andare / meteo' },
        { pageId: 'monthAugust', label: 'Sri Lanka ad agosto' },
        { pageId: 'galleDay', label: 'Escursione a Galle' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Tour privati con autista guida',
      intro: [
        'Un <strong>autista guida in Sri Lanka</strong> e molto piu di un conducente: e il tuo organizzatore quotidiano, interprete culturale e sicurezza su strade sconosciute. Ogni tour privato Sundown Tours include un autista guida autorizzato ed esperto che parla un inglese chiaro (altre lingue su richiesta).',
        'I viaggiatori europei apprezzano il comfort climatizzato, gli orari flessibili e la liberta di fermarsi per una foto, una piantagione di te o un tempio  non sei mai vincolato a un programma di gruppo.',
      ],
      subsections: [{ heading: 'Cosa include un tour privato con autista?' }],
      list: [
        'Veicolo dedicato e autista guida autorizzato per tutto l’itinerario',
        'Transfer aeroportuali a Colombo (CMB) o aeroporti regionali',
        'Carburante, parcheggio e alloggio dell’autista, quotati in modo trasparente',
        'Conoscenza di strade, attrazioni, ristoranti e condizioni stagionali',
        'Assistenza per check in, jeep per il safari e biglietti del treno',
        'Un programma giornaliero flessibile  il ritmo lo decidi tu',
      ],
      seeAlso: [
        { pageId: 'about', label: 'Chi siamo' },
        { pageId: 'services', label: 'I nostri servizi' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Tour in Sri Lanka per ogni durata',
      intro: [
        'La durata giusta del tuo <strong>tour in Sri Lanka</strong> dipende da quanto vuoi esplorare. Gli itinerari brevi vanno bene per chi torna o per vacanze al mare; i piu lunghi uniscono cultura, fauna e relax senza fretta. Ogni tour e personalizzabile.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Tour brevi', meta: '4 to 6 giorni', text: 'Percorsi mirati: Sigiriya, Kandy, Ella e Yala.', linkPageId: 'tour4', linkLabel: 'Tour 4 giorni' },
        { icon: 'fa-calendar-alt', title: 'Una settimana', meta: '7 to 8 giorni', text: 'La scelta piu amata  triangolo culturale, regione del te, safari a Yala e spiagge.', linkPageId: 'tour7', linkLabel: 'Tour 7 giorni' },
        { icon: 'fa-calendar-alt', title: 'Grandi tour', meta: '10+ giorni', text: 'Patrimonio del centro nord, piu safari, trekking e giornate di mare rilassate.', linkPageId: 'tour10', linkLabel: 'Tour 10 giorni' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Tour brevi (4 to 6 giorni)',
          paras: [
            'Ideali come estensione o per un viaggio mirato. Il tour di 4 giorni copre Sigiriya, Kandy, Ella e Yala; quello di 5 aggiunge tempo per i templi e il treno panoramico; le famiglie preferiscono spesso il ritmo piu tranquillo dei 6 giorni.',
          ],
        },
        {
          heading: 'Una settimana (7 to 8 giorni)',
          paras: [
            'Il tour di 7 giorni e il piu amato da chi ha una settimana, unendo cultura, regione del te, safari a Yala e spiagge. Quello di 8 giorni aggiunge Wilpattu e Hikkaduwa.',
          ],
        },
        {
          heading: 'Grandi tour (10+ giorni)',
          paras: [
            'Un tour di 10 giorni permette i siti del centro nord, piu safari, trekking in montagna e spiagge tranquille  amato da coppie in luna di miele e famiglie multigenerazionali.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour5', label: 'Tour 5 giorni' },
        { pageId: 'tour6', label: 'Tour privato 6 giorni' },
        { pageId: 'tour8', label: 'Tour privato 8 giorni' },
        { pageId: 'tours', label: 'Tutti i tour' },
      ],
    },
    {
      anchor: 'wildlife-safaris',
      heading: 'Safari & Parco Nazionale di Yala',
      intro: [
        'I <strong>safari in Sri Lanka</strong> sono un momento clou per gli amanti della natura. I parchi sono compatti rispetto alle riserve africane: leopardi, orsi labiati, elefanti, coccodrilli e centinaia di uccelli si osservano in mezza giornata di jeep.',
      ],
      subsections: [
        {
          heading: 'Safari a Yala  il regno del leopardo',
          paras: [
            'Il parco di Yala (blocco 1) ha una delle densita di leopardi piu alte al mondo. Le uscite mattutine offrono luce e attivita migliori. Il nostro tour Ella & Yala unisce paesaggi di montagna e safari  amato dai fotografi britannici e polacchi.',
          ],
        },
        {
          heading: 'Altri parchi per il safari',
          list: [
            '<strong>Udawalawe</strong>  branchi di elefanti garantiti; ideale per famiglie',
            '<strong>Wilpattu</strong>  territorio di leopardi piu tranquillo; nel tour di 8 giorni',
            '<strong>Minneriya / Kaudulla</strong>  raduni di elefanti (luglio to ottobre)',
            '<strong>Bundala</strong>  uccelli di zone umide e migratori',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour2ey', label: 'Tour 2 giorni Ella & Yala' },
        { pageId: 'tours', label: 'Tour con safari' },
      ],
    },
    {
      anchor: 'destinations-cards',
      eyebrow: 'DESTINAZIONI',
      heading: 'Destinazioni piu amate dello Sri Lanka',
      cards: [
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'La fortezza rocciosa piu iconica, a 200 m sulla pianura.', linkPageId: 'sigiriyaDay', linkLabel: 'Escursione a Sigiriya' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'L’ultima capitale reale e il Tempio del Dente.', linkPageId: 'kandyDay', linkLabel: 'Escursione a Kandy' },
        { icon: 'fa-train', title: 'Ella', text: 'Cuore delle montagne: trekking, caffe e il Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Escursione a Ella' },
        { icon: 'fa-ship', title: 'Galle', text: 'Forte coloniale olandese UNESCO e mura al tramonto.', linkPageId: 'galleDay', linkLabel: 'Escursione a Galle' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'Il triangolo culturale: Sigiriya, Kandy & citta antiche',
      intro: [
        'Il triangolo culturale e il cuore storico dello Sri Lanka, imperdibile alla prima visita. Tra Kandy, Anuradhapura e Polonnaruwa trovi fortezze rocciose, templi rupestri, palazzi reali e tradizioni buddhiste vecchie di oltre due millenni.',
      ],
      subsections: [
        {
          heading: 'Fortezza di Sigiriya',
          paras: [
            'Alta 200 m sulla pianura, Sigiriya e il simbolo del Paese. Sali di primo mattino per affreschi, muro a specchio e vista sulla foresta dalla cima.',
          ],
        },
        {
          heading: 'Kandy & il Tempio del Dente',
          paras: [
            'Kandy, ultima capitale reale, si affaccia su un lago tra le colline. Il Tempio del Dente e un luogo di pellegrinaggio vivo con puja quotidiane, spesso unito al giardino botanico di Peradeniya e a uno spettacolo di danza.',
          ],
        },
        {
          heading: 'Anuradhapura & Polonnaruwa',
          paras: [
            'Queste citta antiche offrono enormi stupa, sculture e rovine di monasteri. Nei tour piu lunghi includiamo una visita in bici a Polonnaruwa  un piacere per gli appassionati di storia.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'sigiriyaDay', label: 'Escursione a Sigiriya' },
        { pageId: 'kandyDay', label: 'Escursione a Kandy' },
      ],
    },
    {
      anchor: 'tea-country',
      heading: 'La regione del te & la stazione di Ella',
      intro: [
        'Le montagne dello Sri Lanka  la storica regione del te di Ceylon  offrono temperature fresche, panorami spettacolari e uno dei viaggi in treno piu belli al mondo. Nuwara Eliya sembra sorprendentemente europea; Ella e il centro di trekking, caffe e del Nine Arch Bridge.',
        'Il treno da Kandy a Ella e tra le ferrovie piu belle del mondo. Prenotiamo i posti quando possibile e organizziamo transfer privati se gli orari non coincidono con il tuo programma.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Escursione a Ella' },
        { pageId: 'tour2ek', label: 'Tour 2 giorni Ella & Kandy' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Le spiagge & la costa sud dello Sri Lanka',
      intro: [
        'Dopo cultura e safari, gran parte delle <strong>vacanze in Sri Lanka</strong> si chiude al mare. La costa sud unisce il Forte di Galle, il surf a Weligama e Mirissa, il nuoto tranquillo a Unawatuna e il whale watching da Mirissa (novembre to aprile).',
        'Il Forte di Galle e una citta fortificata UNESCO con edifici coloniali olandesi. Hikkaduwa e Bentota offrono resort per i <strong>tour di lusso</strong>; Tangalle e Mirissa sono ideali per soggiorni piu intimi.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Escursione al Forte di Galle' },
        { pageId: 'testimonials', label: 'Leggi le recensioni' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Tour di lusso & vacanze su misura',
      intro: [
        'I <strong>tour di lusso in Sri Lanka</strong> puntano su privacy, spazio ed esperienze curate  ville di charme in montagna, suite fronte mare a Galle, jeep private per il safari e autisti guida attenti alle tue preferenze.',
        'Progettiamo <strong>vacanze su misura</strong> con partner di lusso verificati e prezzi trasparenti  senza commissioni nascoste ne soste shopping obbligate.',
      ],
      list: [
        'Hotel 5 stelle e di charme alle migliori tariffe disponibili',
        'Guide private per archeologia, birdwatching o fotografia',
        'Flotta di lusso con SUV e van spaziosi per le famiglie',
        'Organizzazione di occasioni speciali  anniversari, proposte di matrimonio',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Viaggi in famiglia in Sri Lanka',
      intro: [
        'Lo Sri Lanka e molto adatto alle famiglie. Le distanze sono gestibili, gli hotel offrono camere comunicanti e piscine, e i bambini amano orfanotrofi degli elefanti, vivai di tartarughe, giardini delle spezie e spiagge. I nostri <strong>viaggi in famiglia</strong> prevedono giorni di riposo e tratte piu brevi.',
        'Per le famiglie europee con bambini in eta scolare consigliamo sette dieci giorni  un itinerario tipo unisce Sigiriya, un safari in jeep, il treno Kandy to Ella e due o tre giorni di mare.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Tour adatti alle famiglie' },
        { pageId: 'guides', label: 'Guide di viaggio' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Luna di miele & fughe romantiche in Sri Lanka',
      intro: [
        'Per le coppie di Italia, Francia e Spagna, la <strong>luna di miele in Sri Lanka</strong> unisce avventura e intimita  alba a Sigiriya, cena a lume di candela in un bungalow tra le piantagioni, catamarano sulla costa sud e villa con piscina sull’oceano.',
        'Su richiesta organizziamo fiori, torte sorpresa, spa di coppia e servizi fotografici. Gli itinerari luna di miele durano di solito otto quattordici giorni, a ritmo rilassato.',
      ],
      seeAlso: [{ pageId: 'tour7', label: 'Idea luna di miele 7 giorni' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'PERCHE NOI',
      heading: 'Esperti locali di fiducia dal 1992',
      cards: [
        { icon: 'fa-clock', title: 'Dal 1992', text: 'Oltre trent’anni di servizio affidabile ai viaggiatori internazionali.' },
        { icon: 'fa-user', title: 'Guide autorizzate', text: 'Autisti guida autorizzati con profonda conoscenza locale.' },
        { icon: 'fa-heart', title: 'Viaggiatori felici', text: 'Migliaia di viaggiatori soddisfatti da tutta Europa.' },
        { icon: 'fa-map-marker-alt', title: 'Su misura', text: 'Ogni itinerario e personalizzato  mai tour in pullman standard.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Parla con il nostro team' },
        { pageId: 'about', label: 'La nostra storia' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Organizzare il viaggio in Sri Lanka dall’Europa',
      intro: [
        'Voli diretti e con scalo collegano Colombo a Milano, Roma, Zurigo, Parigi, Madrid e altre citta. La maggior parte dei viaggiatori europei arriva di notte e inizia il tour il mattino dopo  il tuo autista ti accoglie all’aeroporto Bandaranaike (CMB).',
      ],
      subsections: [
        {
          heading: 'Consigli utili per lo Sri Lanka',
          list: [
            'Abbigliamento leggero e traspirante, piu uno strato per le mattine in montagna',
            'Togliere le scarpe e coprire spalle e ginocchia nei templi buddhisti',
            'Prenotare per tempo Sigiriya e il safari di Yala in alta stagione',
            'Assaggiare hoppers, kottu roti e curry di pesce fresco',
            'Portare crema solare e repellente per safari e cene serali',
            'Conservare copie di passaporto e autorizzazione ETA',
          ],
        },
        {
          heading: 'Visto (ETA) per i cittadini europei',
          paras: [
            'La maggior parte dei cittadini europei necessita di un’autorizzazione elettronica di viaggio (ETA) prima dell’arrivo. Richiedila online almeno 24 to 48 ore prima della partenza e conserva approvazione e numero di riferimento. I bambini necessitano di un proprio ETA.',
          ],
        },
        {
          heading: 'Lo Sri Lanka e sicuro per i turisti?',
          paras: [
            'Lo Sri Lanka e generalmente sicuro e accogliente; milioni di visitatori vi si recano ogni anno senza problemi. Viaggiare con un autista guida affidabile di un operatore affermato elimina gran parte delle preoccupazioni su trasporti, prezzi e organizzazione.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Guide di viaggio' },
        { pageId: 'guideSafety', label: 'Viaggiare sicuri' },
        { pageId: 'marketItaly', label: 'Dall’Italia' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Domande frequenti sui tour in Sri Lanka',
  faqs: [
    {
      q: 'Di quanti giorni ho bisogno per un tour in Sri Lanka?',
      a: 'Sette dieci giorni vanno bene per la maggior parte dei primi visitatori europei. Un tour di 7 giorni copre cultura, montagne, safari e spiagge; quattordici giorni permettono nord, est e costa sud di lusso senza fretta.',
    },
    {
      q: 'Che differenza c’e tra un tour di gruppo e un tour privato?',
      a: 'Un tour privato ti offre veicolo e autista guida dedicati: scegli tu orari, soste e hotel. I tour in pullman seguono programmi fissi. Sundown Tours si dedica esclusivamente al viaggio privato su misura.',
    },
    {
      q: 'Vale la pena un autista guida in Sri Lanka?',
      a: 'Si. Condizioni stradali, svolte non segnalate e traffico rendono stressante guidare da soli. Una guida autorizzata fa risparmiare tempo, racconta la cultura, gestisce i biglietti e adatta l’itinerario al meteo.',
    },
    {
      q: 'Qual e il periodo migliore per un safari a Yala?',
      a: 'Il blocco 1 di Yala e aperto tutto l’anno; nei mesi secchi (febbraio to luglio) e piu facile avvistare i leopardi, perche gli animali si radunano vicino all’acqua. Preferisci i safari mattutini per fresco e luce migliore.',
    },
    {
      q: 'I tour sono adatti alle famiglie con bambini?',
      a: 'Assolutamente. Tratte piu brevi, piscine, orfanotrofi di elefanti, vivai di tartarughe e spiagge tengono impegnati i bambini. Pianifichiamo tour familiari con ritmo flessibile e ristoranti adatti.',
    },
    {
      q: 'Serve un visto per lo Sri Lanka?',
      a: 'Il passaporto italiano richiede un’ETA prima del volo, solo su eta.gov.lk. Dal 25 maggio 2026 l’ETA turistica e gratuita 30 giorni (doppio ingresso) per 40 Paesi tra cui l’Italia. Va comunque richiesta in anticipo.',
      links: [{ pageId: 'guideVisa', label: 'Visto e ETA' }],
    },
    {
      q: 'Quanto dura il volo da Milano allo Sri Lanka?',
      a: 'Di solito circa 10 to 13 ore in aria piu uno scalo (Doha, Dubai, Abu Dhabi o Istanbul). Non vendiamo biglietti; caliamo la prima notte sull’arrivo reale a CMB.',
      links: [{ pageId: 'marketItaly', label: 'Viaggio dall’Italia' }],
    },
    {
      q: 'Quando andare in Sri Lanka e qual e il periodo migliore?',
      a: 'Dicembre to marzo per mare ovest e sud. Maggio to settembre (Sri Lanka ad agosto) spesso meglio per costa est, Triangolo Culturale e safari di stagione secca. Due monsoni: adattate la costa alle date.',
      links: [{ pageId: 'guideBestTime', label: 'Quando andare / meteo' }],
    },
    {
      q: 'Cosa vedere in Sri Lanka al primo viaggio?',
      a: 'Lion Rock (Sigiriya), Kandy, treno per Ella, un safari (Yala, Udawalawe, Wilpattu o Minneriya) e mare a Mirissa, Weligama o Galle. Sette dieci giorni privati coprono questo.',
      links: [{ pageId: 'marketItaly', label: 'Itinerario dall’Italia' }],
    },
    {
      q: 'Come viaggiare sicuri in Sri Lanka?',
      a: 'Precauzioni standard su strada e truffe ai siti. Consultate gli avvisi MAECI «Viaggiare Sicuri»; la nostra guida pratica non sostituisce quel sito. Un autista guida riduce i rischi di trasporto.',
      links: [{ pageId: 'guideSafety', label: 'Viaggiare sicuri' }],
    },
    {
      q: 'Potete personalizzare una luna di miele o un tour di lusso?',
      a: 'Ogni itinerario Sundown Tours e su misura. Organizziamo hotel di charme, cene private, trattamenti spa e sorprese speciali per lune di miele e vacanze di lusso.',
    },
    {
      q: 'Come prenoto un tour privato con Sundown Tours?',
      a: 'Sfoglia i nostri tour, scegli una durata e invia una richiesta tramite il modulo di contatto o WhatsApp. Rispondiamo entro 24 ore con una proposta su misura e prezzi trasparenti.',
      links: [{ pageId: 'contact', label: 'Contattaci' }],
    },
  ],
};

const es: HomeSeoContent = {
  tag: 'GUIA DE VIAJE',
  title: 'Viajes a Sri Lanka, paquetes vacacionales y conductor privado',
  subtitle:
    'Escrita por los expertos locales de Sundown Tours Sri Lanka: choferes guia autorizados, itinerarios a medida y miles de viajeros satisfechos de Espana, America Latina y toda Europa desde 1992.',
  tocLabel: 'En esta pagina',
  seeAlsoLabel: 'Ver tambien',
  toc: [
    { label: 'Por que Sri Lanka', anchor: 'why-sri-lanka' },
    { label: 'Cuando viajar', anchor: 'best-time' },
    { label: 'Circuitos privados', anchor: 'chauffeur-tours' },
    { label: 'Nuestros circuitos', anchor: 'tour-packages' },
    { label: 'Safaris', anchor: 'wildlife-safaris' },
    { label: 'Triangulo cultural', anchor: 'cultural-triangle' },
    { label: 'Pais del te', anchor: 'tea-country' },
    { label: 'Playas', anchor: 'beaches' },
    { label: 'En familia', anchor: 'family-tours' },
    { label: 'Luna de miel', anchor: 'honeymoon' },
    { label: 'Por que elegirnos', anchor: 'why-choose-us' },
    { label: 'FAQ', anchor: 'faq-heading' },
  ],
  sections: [
    {
      anchor: 'why-sri-lanka',
      heading: 'Por que visitar Sri Lanka?',
      intro: [
        'Sri Lanka es uno de los destinos insulares mas gratificantes de Asia para los viajeros europeos que buscan variedad sin largos vuelos internos. En un solo <strong>viaje a Sri Lanka</strong> puedes subir a una antigua fortaleza rocosa al amanecer, cruzar en tren plantaciones de te entre la niebla, hacer un safari de leopardos y cerrar la semana en una playa de palmeras.',
        'Como la isla es compacta, un <strong>circuito privado por Sri Lanka</strong> bien planificado une el triangulo cultural, la montana, los parques nacionales y la costa sur en siete a catorce dias, a un ritmo comodo y siempre flexible.',
        'Sri Lanka ofrece ademas una excelente relacion calidad precio. Hoteles con encanto, buena gastronomia y fauna de primer nivel a precios adecuados tanto para viajes de gama media como para <strong>circuitos de lujo por Sri Lanka</strong>, y la calidez de su gente hace sentir bienvenido desde la llegada.',
      ],
      subsections: [{ heading: 'Que diferencia a Sri Lanka de otros destinos asiaticos' }],
      cards: [
        { icon: 'fa-landmark', text: 'Ocho sitios Patrimonio de la Humanidad, entre ellos Sigiriya, Kandy y el Fuerte de Galle.' },
        { icon: 'fa-globe', text: 'Viajes todo el ano: con dos monzones siempre hay una costa soleada.' },
        { icon: 'fa-route', text: 'Isla compacta: la mayoria de lugares estan a tres o cinco horas por carretera.' },
        { icon: 'fa-paw', text: 'Fauna excepcional: elefantes, leopardos, ballenas azules y aves tropicales.' },
        { icon: 'fa-utensils', text: 'Cocina autentica con especias, coco, marisco y verduras de montana.' },
        { icon: 'fa-car', text: 'Circuitos privados con chofer guia propio, sin autobuses abarrotados.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Guia de destinos de Sri Lanka' },
        { pageId: 'tours', label: 'Nuestros circuitos por Sri Lanka' },
        { pageId: 'marketSpain', label: 'Viajar a Sri Lanka desde Espana' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Cuando viajar a Sri Lanka',
      intro: [
        'Sri Lanka se visita todo el ano. Como dos monzones afectan a costas distintas en momentos distintos, casi siempre hay una region con clima ideal; la clave es adaptar el itinerario a tus fechas.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'Costas oeste y sur', meta: 'Noviembre a abril', text: 'Temporada alta para el sol de invierno. Colombo, Galle, Mirissa, Bentota y Hikkaduwa con mar en calma y sol.' },
        { icon: 'fa-water', title: 'Costa este', meta: 'Mayo a septiembre', text: 'Trincomalee, Pasikudah y Arugam Bay dan su mejor clima mientras el monzon del suroeste trae lluvia en otras zonas.' },
        { icon: 'fa-mountain', title: 'Montana', meta: 'Todo el ano', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya y Dambulla se visitan todo el ano, con mananas despejadas.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Costas oeste y sur (noviembre a abril)',
          paras: [
            'Temporada alta para el sol de invierno. La costa sur es ideal para playa, avistamiento de ballenas y combinar una visita a Galle con la fauna del sur. La mayoria de los circuitos de 7 y 10 dias siguen esta epoca.',
          ],
        },
        {
          heading: 'Costa este (mayo a septiembre)',
          paras: [
            'Mientras el monzon del suroeste lleva lluvia a Colombo y Galle, la costa este disfruta de su mejor clima. Las familias con vacaciones en julio y agosto suelen ampliar alli su estancia de playa.',
          ],
        },
        {
          heading: 'Montana y triangulo cultural',
          paras: [
            'Kandy, Ella, Nuwara Eliya, Sigiriya y Dambulla funcionan todo el ano. Las mananas suelen estar despejadas para subir a Sigiriya; los chubascos de tarde rara vez estropean el dia.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Excursion a Galle' },
        { pageId: 'ellaDay', label: 'Excursion a Ella' },
        { pageId: 'guideBestTime', label: 'Mejor epoca para viajar a Sri Lanka' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Circuitos privados con chofer guia',
      intro: [
        'Un <strong>chofer guia en Sri Lanka</strong> es mucho mas que un conductor: es tu organizador diario, interprete cultural y seguridad en carreteras desconocidas. Cada circuito privado de Sundown Tours incluye un chofer guia autorizado y experimentado que habla un ingles claro (otros idiomas bajo peticion).',
        'Los viajeros europeos valoran el confort del aire acondicionado, los horarios flexibles y la libertad de parar para una foto, una plantacion de te o un templo; nunca estas atado a un programa de grupo.',
      ],
      subsections: [{ heading: 'Que incluye un circuito privado con chofer?' }],
      list: [
        'Vehiculo propio y chofer guia autorizado para todo el itinerario',
        'Traslados de aeropuerto en Colombo (CMB) o aeropuertos regionales',
        'Combustible, aparcamiento y alojamiento del chofer, con precio transparente',
        'Conocimiento de carreteras, lugares, restaurantes y condiciones de temporada',
        'Ayuda con el check in, los jeeps de safari y los billetes de tren',
        'Un programa diario flexible: tu marcas el ritmo',
      ],
      seeAlso: [
        { pageId: 'about', label: 'Sobre Sundown Tours' },
        { pageId: 'services', label: 'Nuestros servicios' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Circuitos por Sri Lanka para cada duracion',
      intro: [
        'La duracion ideal de tu <strong>circuito por Sri Lanka</strong> depende de cuanto quieras explorar. Los itinerarios cortos van bien para repetidores o viajes de playa; los mas largos combinan cultura, fauna y descanso sin prisas. Todos son personalizables.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Circuitos cortos', meta: '4 to 6 dias', text: 'Rutas centradas: Sigiriya, Kandy, Ella y Yala.', linkPageId: 'tour4', linkLabel: 'Circuito 4 dias' },
        { icon: 'fa-calendar-alt', title: 'Una semana', meta: '7 to 8 dias', text: 'La opcion mas popular: triangulo cultural, pais del te, safari en Yala y playas.', linkPageId: 'tour7', linkLabel: 'Circuito 7 dias' },
        { icon: 'fa-calendar-alt', title: 'Grandes circuitos', meta: '10+ dias', text: 'Patrimonio del centro norte, varios safaris, senderismo y playas relajadas.', linkPageId: 'tour10', linkLabel: 'Circuito 10 dias' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Circuitos cortos (4 to 6 dias)',
          paras: [
            'Ideales como extension o para un viaje concreto. El de 4 dias cubre Sigiriya, Kandy, Ella y Yala; el de 5 anade tiempo para templos y el tren panoramico; las familias prefieren a menudo el ritmo mas tranquilo del de 6 dias.',
          ],
        },
        {
          heading: 'Una semana (7 to 8 dias)',
          paras: [
            'El circuito de 7 dias es el mas popular para quienes tienen una semana, con cultura, pais del te, safari en Yala y playas. El de 8 dias anade Wilpattu y Hikkaduwa.',
          ],
        },
        {
          heading: 'Grandes circuitos (10+ dias)',
          paras: [
            'Un circuito de 10 dias permite los sitios del centro norte, varios safaris, senderismo de montana y playas tranquilas; muy popular entre parejas en luna de miel y familias multigeneracionales.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour5', label: 'Circuito 5 dias' },
        { pageId: 'tour6', label: 'Circuito privado 6 dias' },
        { pageId: 'tour8', label: 'Circuito privado 8 dias' },
        { pageId: 'tours', label: 'Todos los circuitos' },
      ],
    },
    {
      anchor: 'wildlife-safaris',
      heading: 'Safaris y Parque Nacional de Yala',
      intro: [
        'Los <strong>safaris en Sri Lanka</strong> son un momento estrella para los amantes de la naturaleza. Los parques son compactos frente a las reservas africanas: leopardos, osos bezudos, elefantes, cocodrilos y cientos de aves se ven en medio dia de jeep.',
      ],
      subsections: [
        {
          heading: 'Safari en Yala, el reino del leopardo',
          paras: [
            'El parque de Yala (bloque 1) tiene una de las mayores densidades de leopardos del mundo. Las salidas de la manana ofrecen mejor luz y actividad animal. Nuestro circuito Ella y Yala combina paisajes de montana y safari; favorito de fotografos britanicos y polacos.',
          ],
        },
        {
          heading: 'Otros parques para safari',
          list: [
            '<strong>Udawalawe</strong>: manadas de elefantes garantizadas; ideal en familia',
            '<strong>Wilpattu</strong>: territorio de leopardos mas tranquilo; en el circuito de 8 dias',
            '<strong>Minneriya / Kaudulla</strong>: concentraciones de elefantes (julio to octubre)',
            '<strong>Bundala</strong>: aves de humedal y migratorias',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour2ey', label: 'Circuito 2 dias Ella y Yala' },
        { pageId: 'tours', label: 'Circuitos con safari' },
      ],
    },
    {
      anchor: 'destinations-cards',
      eyebrow: 'DESTINOS',
      heading: 'Destinos mas populares de Sri Lanka',
      cards: [
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'La fortaleza rocosa mas iconica, a 200 m sobre la llanura.', linkPageId: 'sigiriyaDay', linkLabel: 'Excursion a Sigiriya' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'La ultima capital real y el Templo del Diente.', linkPageId: 'kandyDay', linkLabel: 'Excursion a Kandy' },
        { icon: 'fa-train', title: 'Ella', text: 'Corazon de la montana: senderismo, cafes y el Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Excursion a Ella' },
        { icon: 'fa-ship', title: 'Galle', text: 'Fuerte colonial holandes Patrimonio de la Humanidad y murallas al atardecer.', linkPageId: 'galleDay', linkLabel: 'Excursion a Galle' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'El triangulo cultural: Sigiriya, Kandy y ciudades antiguas',
      intro: [
        'El triangulo cultural es el corazon historico de Sri Lanka e imprescindible en una primera visita. Entre Kandy, Anuradhapura y Polonnaruwa hay fortalezas rocosas, templos rupestres, palacios reales y tradiciones budistas de mas de dos milenios.',
      ],
      subsections: [
        {
          heading: 'Fortaleza de Sigiriya',
          paras: [
            'A 200 m sobre la llanura, Sigiriya es el simbolo del pais. Sube temprano por la manana para ver los frescos, el muro espejo y las vistas de la selva desde la cima.',
          ],
        },
        {
          heading: 'Kandy y el Templo del Diente',
          paras: [
            'Kandy, ultima capital real, se asoma a un lago rodeado de colinas. El Templo del Diente es un lugar de peregrinacion vivo con ceremonias puja diarias, a menudo combinado con el jardin botanico de Peradeniya y un espectaculo de danza.',
          ],
        },
        {
          heading: 'Anuradhapura y Polonnaruwa',
          paras: [
            'Estas ciudades antiguas ofrecen enormes estupas, esculturas y ruinas de monasterios. En los circuitos mas largos incluimos una visita en bici a Polonnaruwa, un placer para los amantes de la historia.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'sigiriyaDay', label: 'Excursion a Sigiriya' },
        { pageId: 'kandyDay', label: 'Excursion a Kandy' },
      ],
    },
    {
      anchor: 'tea-country',
      heading: 'El pais del te y la estacion de Ella',
      intro: [
        'La montana de Sri Lanka, el historico pais del te de Ceilan, ofrece temperaturas frescas, miradores espectaculares y uno de los viajes en tren mas bellos del mundo. Nuwara Eliya parece sorprendentemente europea; Ella es el centro de senderismo, cafes y el Nine Arch Bridge.',
        'El tren de Kandy a Ella figura entre las rutas ferroviarias mas bonitas del planeta. Reservamos asientos cuando es posible y organizamos traslados privados si los horarios no encajan con tu plan.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Excursion a Ella' },
        { pageId: 'tour2ek', label: 'Circuito 2 dias Ella y Kandy' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Las playas y la costa sur de Sri Lanka',
      intro: [
        'Tras la cultura y el safari, la mayoria de las <strong>vacaciones en Sri Lanka</strong> terminan en la playa. La costa sur reune el Fuerte de Galle, el surf en Weligama y Mirissa, el bano tranquilo en Unawatuna y el avistamiento de ballenas desde Mirissa (noviembre to abril).',
        'El Fuerte de Galle es una ciudad amurallada Patrimonio de la Humanidad con edificios coloniales holandeses. Hikkaduwa y Bentota ofrecen hoteles resort para los <strong>circuitos de lujo</strong>; Tangalle y Mirissa son ideales para estancias mas tranquilas.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Excursion al Fuerte de Galle' },
        { pageId: 'testimonials', label: 'Leer opiniones' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Circuitos de lujo y viajes a medida',
      intro: [
        'Los <strong>circuitos de lujo por Sri Lanka</strong> se centran en la privacidad, el espacio y las experiencias cuidadas: villas con encanto en la montana, suites frente al mar en Galle, jeeps privados de safari y choferes guia atentos a tus preferencias.',
        'Disenamos <strong>viajes a medida</strong> con socios de lujo verificados y precios transparentes, sin comisiones ocultas ni paradas de compras forzadas.',
      ],
      list: [
        'Hoteles de 5 estrellas y con encanto a las mejores tarifas',
        'Guias privados de arqueologia, ornitologia o fotografia',
        'Flota de lujo con SUV y furgonetas amplias para familias',
        'Organizacion de ocasiones especiales: aniversarios y pedidas de mano',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Viajes en familia por Sri Lanka',
      intro: [
        'Sri Lanka es muy adecuado para familias. Las distancias son asequibles, los hoteles ofrecen habitaciones comunicadas y piscinas, y a los ninos les encantan los orfanatos de elefantes, los criaderos de tortugas, los jardines de especias y las playas. Nuestros <strong>viajes en familia</strong> incluyen dias de descanso y trayectos mas cortos.',
        'Para familias europeas con ninos en edad escolar recomendamos de siete a diez dias; una ruta tipica combina Sigiriya, un safari en jeep, el tren Kandy to Ella y dos o tres dias de playa.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Circuitos para familias' },
        { pageId: 'guides', label: 'Guias de viaje' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Luna de miel y escapadas romanticas en Sri Lanka',
      intro: [
        'Para parejas de Espana, Italia y Francia, la <strong>luna de miel en Sri Lanka</strong> combina aventura e intimidad: amanecer en Sigiriya, cena a la luz de las velas en un bungalo de plantacion, catamaran por la costa sur y villa con piscina frente al oceano.',
        'Bajo peticion organizamos flores, tartas sorpresa, spa en pareja y sesiones de fotos. Las rutas de luna de miel duran normalmente de ocho a catorce dias, a ritmo relajado.',
      ],
      seeAlso: [{ pageId: 'tour7', label: 'Idea de luna de miel 7 dias' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'POR QUE ELEGIRNOS',
      heading: 'Expertos locales de confianza desde 1992',
      cards: [
        { icon: 'fa-clock', title: 'Desde 1992', text: 'Mas de tres decadas de servicio fiable a viajeros internacionales.' },
        { icon: 'fa-user', title: 'Guias autorizados', text: 'Choferes guia autorizados con profundo conocimiento local.' },
        { icon: 'fa-heart', title: 'Viajeros felices', text: 'Miles de viajeros satisfechos de toda Europa.' },
        { icon: 'fa-map-marker-alt', title: 'A medida', text: 'Cada itinerario es personalizado, nunca autobuses estandar.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Habla con nuestro equipo' },
        { pageId: 'about', label: 'Nuestra historia' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Planifica tu viaje a Sri Lanka desde Europa',
      intro: [
        'Vuelos directos y con escala conectan Colombo con Madrid, Barcelona, Zurich, Paris, Milan y otras ciudades. La mayoria de los viajeros europeos llegan de noche y empiezan su circuito al dia siguiente; tu chofer te recibe en el aeropuerto Bandaranaike (CMB).',
      ],
      subsections: [
        {
          heading: 'Consejos esenciales para Sri Lanka',
          list: [
            'Ropa ligera y transpirable, mas una capa para las mananas de montana',
            'Quitarse los zapatos y cubrir hombros y rodillas en los templos budistas',
            'Reservar pronto Sigiriya y el safari de Yala en temporada alta',
            'Probar hoppers, kottu roti y curry de pescado fresco',
            'Llevar protector solar y repelente para safaris y cenas',
            'Guardar copias del pasaporte y de la autorizacion ETA',
          ],
        },
        {
          heading: 'Visado (ETA) para ciudadanos europeos',
          paras: [
            'La mayoria de los ciudadanos europeos necesita una autorizacion electronica de viaje (ETA) antes de llegar. Solicitala en linea al menos 24 to 48 horas antes de salir y guarda la aprobacion y el numero de referencia. Los ninos necesitan su propia ETA.',
          ],
        },
        {
          heading: 'Es seguro Sri Lanka para los turistas?',
          paras: [
            'Sri Lanka es en general seguro y acogedor; millones de visitantes viajan cada ano sin incidentes. Viajar con un chofer guia de confianza de un operador consolidado elimina la mayoria de las preocupaciones de transporte, precios y organizacion.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Guias de viaje' },
        { pageId: 'restaurants', label: 'Restaurantes en Sri Lanka' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Preguntas frecuentes sobre los circuitos por Sri Lanka',
  faqs: [
    {
      q: 'Cuantos dias necesito para un circuito por Sri Lanka?',
      a: 'De siete a diez dias van bien para la mayoria de los viajeros europeos que llegan por primera vez. Un circuito de 7 dias cubre cultura, montana, safari y playas; catorce dias permiten norte, este y costa sur de lujo sin prisas.',
    },
    {
      q: 'Que diferencia hay entre un circuito en grupo y uno privado?',
      a: 'Un circuito privado te da vehiculo y chofer guia propios: tu eliges horarios, paradas y hoteles. Los circuitos en autobus siguen programas fijos. Sundown Tours se dedica en exclusiva al viaje privado a medida.',
    },
    {
      q: 'Merece la pena un chofer guia en Sri Lanka?',
      a: 'Si. El estado de las carreteras, los cruces sin senalizar y el trafico hacen estresante conducir uno mismo. Un guia autorizado ahorra tiempo, explica la cultura, gestiona las entradas y adapta la ruta segun el clima.',
    },
    {
      q: 'Cual es la mejor epoca para un safari en Yala?',
      a: 'El bloque 1 de Yala abre todo el ano; en los meses secos (febrero to julio) es mas facil ver leopardos, ya que los animales se reunen cerca del agua. Elige safaris matinales por el fresco y la mejor luz.',
    },
    {
      q: 'Son adecuados los circuitos para familias con ninos?',
      a: 'Por completo. Trayectos mas cortos, piscinas, orfanatos de elefantes, criaderos de tortugas y playas mantienen entretenidos a los ninos. Planificamos circuitos familiares con ritmo flexible y restaurantes adecuados.',
    },
    {
      q: 'Necesito visado para Sri Lanka?',
      a: 'Los pasaportes espanoles necesitan una ETA antes del vuelo, solo en eta.gov.lk. Desde el 25 de mayo de 2026 la ETA turistica es gratuita 30 dias (doble entrada). Hay que solicitarla igual por adelantado.',
      links: [{ pageId: 'guideVisa', label: 'Visado y ETA' }],
    },
    {
      q: 'Cuanto dura el vuelo de Espana a Sri Lanka?',
      a: 'Unas 11 to 14 horas en el aire mas una escala (Doha, Abu Dabi, Dubai o Estambul son habituales). No vendemos billetes; calzamos la primera noche con la llegada real a CMB.',
      links: [{ pageId: 'marketSpain', label: 'Viajar desde Espana' }],
    },
    {
      q: 'Que hora es en Sri Lanka y que ver en un primer viaje?',
      a: 'UTC+5:30: 4 h 30 de adelanto en invierno y 3 h 30 en verano espanol. Un primer viaje: Lion Rock de Sigiriya, Kandy, tren a Ella, safari en Yala o Wilpattu y playa en Mirissa o Weligama.',
      links: [{ pageId: 'guideBestTime', label: 'Mejor epoca y tiempo' }],
    },
    {
      q: 'Pueden personalizar una luna de miel o un circuito de lujo?',
      a: 'Cada itinerario de Sundown Tours es a medida. Organizamos hoteles con encanto, cenas privadas, tratamientos de spa y sorpresas especiales para lunas de miel y viajes de lujo.',
    },
    {
      q: 'Como reservo un circuito privado con Sundown Tours?',
      a: 'Explora nuestros circuitos, elige una duracion y envia una solicitud por el formulario de contacto o WhatsApp. Respondemos en 24 horas con una propuesta a medida y precios transparentes.',
      links: [{ pageId: 'contact', label: 'Contactanos' }],
    },
  ],
};

const pl: HomeSeoContent = {
  tag: 'PRZEWODNIK',
  title: 'Wycieczki Sri Lanka, pakiety wakacyjne i prywatny kierowca',
  subtitle:
    'Napisany przez lokalnych ekspertow Sundown Tours Sri Lanka  licencjonowani kierowcy przewodnicy, indywidualne trasy i tysiace zadowolonych podroznych z Polski i calej Europy od 1992 roku.',
  tocLabel: 'Na tej stronie',
  seeAlsoLabel: 'Zobacz tez',
  toc: [
    { label: 'Dlaczego Sri Lanka', anchor: 'why-sri-lanka' },
    { label: 'Kiedy jechac', anchor: 'best-time' },
    { label: 'Wycieczki prywatne', anchor: 'chauffeur-tours' },
    { label: 'Nasze wycieczki', anchor: 'tour-packages' },
    { label: 'Safari', anchor: 'wildlife-safaris' },
    { label: 'Trojkat kultury', anchor: 'cultural-triangle' },
    { label: 'Kraina herbaty', anchor: 'tea-country' },
    { label: 'Plaze', anchor: 'beaches' },
    { label: 'Z rodzina', anchor: 'family-tours' },
    { label: 'Podroz poslubna', anchor: 'honeymoon' },
    { label: 'Dlaczego my', anchor: 'why-choose-us' },
    { label: 'FAQ', anchor: 'faq-heading' },
  ],
  sections: [
    {
      anchor: 'why-sri-lanka',
      heading: 'Dlaczego warto odwiedzic Sri Lanke?',
      intro: [
        'Sri Lanka to jeden z najbardziej satysfakcjonujacych kierunkow wyspiarskich Azji dla europejskich podroznych szukajacych roznorodnosci bez dlugich lotow krajowych. Podczas jednego <strong>wyjazdu na Sri Lanke</strong> wejdziesz o swicie na starozytna fortece na skale, przejedziesz pociagiem przez zamglone plantacje herbaty, wybierzesz sie na safari z lampartami i zakonczysz tydzien na plazy wsrod palm.',
        'Poniewaz wyspa jest niewielka, dobrze zaplanowana <strong>prywatna wycieczka po Sri Lance</strong> laczy trojkat kultury, gory, parki narodowe i poludniowe wybrzeze w siedem to czternascie dni, w komfortowym tempie i zawsze elastycznie.',
        'Sri Lanka to rowniez swietny stosunek jakosci do ceny. Butikowe hotele, znakomite jedzenie i swiatowej klasy przyroda dostepne sa w cenach odpowiednich zarowno dla wyjazdow sredniej polki, jak i <strong>luksusowych wycieczek po Sri Lance</strong>, a serdeczna goscinnosc sprawia, ze czujesz sie mile widziany od chwili przylotu.',
      ],
      subsections: [{ heading: 'Czym Sri Lanka rozni sie od innych kierunkow w Azji?' }],
      cards: [
        { icon: 'fa-landmark', text: 'Osiem obiektow UNESCO, w tym Sigiriya, Kandy i Fort Galle.' },
        { icon: 'fa-globe', text: 'Podroze przez caly rok  przy dwoch monsunach zawsze jest sloneczne wybrzeze.' },
        { icon: 'fa-route', text: 'Zwarta wyspa: wiekszosc atrakcji w zasiegu trzech to pieciu godzin jazdy.' },
        { icon: 'fa-paw', text: 'Wyjatkowa przyroda  slonie, lamparty, pletwale blekitne i tropikalne ptaki.' },
        { icon: 'fa-utensils', text: 'Autentyczna kuchnia: przyprawy, kokos, owoce morza i warzywa z gor.' },
        { icon: 'fa-car', text: 'Prywatne wycieczki z wlasnym kierowca przewodnikiem  bez zatloczonych autokarow.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Przewodnik po kierunkach' },
        { pageId: 'tours', label: 'Nasze wycieczki po Sri Lance' },
        { pageId: 'marketPoland', label: 'Wakacje Sri Lanka z Polski' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Kiedy jechac na Sri Lanke',
      intro: [
        'Sri Lanke mozna zwiedzac przez caly rok. Poniewaz dwa monsuny obejmuja rozne wybrzeza w roznym czasie, prawie zawsze jakis region ma idealna pogode  kluczem jest dopasowanie trasy do terminu wyjazdu.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'Zachod i poludnie', meta: 'Listopad to kwiecien', text: 'Sezon na zimowe slonce. Colombo, Galle, Mirissa, Bentota i Hikkaduwa  spokojne morze i slonce.' },
        { icon: 'fa-water', title: 'Wschodnie wybrzeze', meta: 'Maj to wrzesien', text: 'Trincomalee, Pasikudah i Arugam Bay maja najlepsza pogode, gdy monsun poludniowo zachodni przynosi deszcz gdzie indziej.' },
        { icon: 'fa-mountain', title: 'Gory', meta: 'Caly rok', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya i Dambulla mozna zwiedzac caly rok, z pogodnymi porankami.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Zachod i poludnie (listopad to kwiecien)',
          paras: [
            'Sezon na zimowe slonce. Poludniowe wybrzeze jest idealne na plazowanie, obserwacje wielorybow i polaczenie wizyty w Galle z przyroda poludnia. Wiekszosc wycieczek 7- i 10 dniowych przypada na ten okres.',
          ],
        },
        {
          heading: 'Wschodnie wybrzeze (maj to wrzesien)',
          paras: [
            'Gdy monsun poludniowo zachodni przynosi deszcz do Colombo i Galle, wschodnie wybrzeze cieszy sie najlepsza pogoda. Rodziny z wakacjami w lipcu i sierpniu czesto przedluzaja tu pobyt na plazy.',
          ],
        },
        {
          heading: 'Gory i trojkat kultury',
          paras: [
            'Kandy, Ella, Nuwara Eliya, Sigiriya i Dambulla dzialaja caly rok. Poranki sa zwykle pogodne na wejscie na Sigiriye; krotkie popoludniowe opady rzadko psuja dzien.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Wycieczka do Galle' },
        { pageId: 'ellaDay', label: 'Wycieczka do Elli' },
        { pageId: 'guideBestTime', label: 'Pogoda i kiedy jechac' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Prywatne wycieczki z kierowca przewodnikiem',
      intro: [
        '<strong>Kierowca przewodnik na Sri Lance</strong> to znacznie wiecej niz kierowca  to Twoj codzienny organizator, tlumacz kultury i wsparcie na nieznanych drogach. Kazda prywatna wycieczka Sundown Tours obejmuje licencjonowanego, doswiadczonego kierowce przewodnika mowiacego wyraznie po angielsku (inne jezyki na zyczenie).',
        'Europejscy podrozni cenia klimatyzowany komfort, elastyczne godziny i swobode zatrzymania sie na zdjecie, plantacje herbaty czy swiatynie  nigdy nie jestes zwiazany planem grupy.',
      ],
      subsections: [{ heading: 'Co obejmuje prywatna wycieczka z kierowca?' }],
      list: [
        'Dedykowany pojazd i licencjonowany kierowca przewodnik na cala trase',
        'Transfery z lotniska w Colombo (CMB) lub lotnisk regionalnych',
        'Paliwo, parking i nocleg kierowcy  z przejrzysta wycena z gory',
        'Znajomosc drog, atrakcji, restauracji i warunkow sezonowych',
        'Pomoc przy zameldowaniu, rezerwacji jeepow na safari i biletow kolejowych',
        'Elastyczny plan dnia  to Ty nadajesz tempo',
      ],
      seeAlso: [
        { pageId: 'about', label: 'O Sundown Tours' },
        { pageId: 'services', label: 'Nasze uslugi' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Wycieczki po Sri Lance na kazda dlugosc',
      intro: [
        'Wlasciwa dlugosc <strong>wycieczki po Sri Lance</strong> zalezy od tego, jak gleboko chcesz poznac wyspe. Krotkie trasy pasuja dla powracajacych lub wyjazdow plazowych; dluzsze lacza kulture, przyrode i relaks bez pospiechu. Kazda mozna dostosowac.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Krotkie wycieczki', meta: '4 to 6 dni', text: 'Skoncentrowane trasy: Sigiriya, Kandy, Ella i Yala.', linkPageId: 'tour4', linkLabel: 'Wycieczka 4 dni' },
        { icon: 'fa-calendar-alt', title: 'Tydzien', meta: '7 to 8 dni', text: 'Najpopularniejszy wybor  trojkat kultury, kraina herbaty, safari w Yali i plaze.', linkPageId: 'tour7', linkLabel: 'Wycieczka 7 dni' },
        { icon: 'fa-calendar-alt', title: 'Duze wyprawy', meta: '10+ dni', text: 'Dziedzictwo srodkowej polnocy, kilka safari, trekking i spokojne dni na plazy.', linkPageId: 'tour10', linkLabel: 'Wycieczka 10 dni' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Krotkie wycieczki (4 to 6 dni)',
          paras: [
            'Idealne jako przedluzenie lub skoncentrowany wyjazd. 4 dniowa obejmuje Sigiriye, Kandy, Elle i Yale; 5 dniowa dodaje czas na swiatynie i widokowy pociag; rodziny czesto wola spokojniejsze tempo 6 dniowej.',
          ],
        },
        {
          heading: 'Tydzien (7 to 8 dni)',
          paras: [
            '7 dniowa wycieczka jest najpopularniejsza dla osob z tygodniem urlopu i laczy kulture, kraine herbaty, safari w Yali i plaze. 8 dniowa dodaje Wilpattu i Hikkaduwe.',
          ],
        },
        {
          heading: 'Duze wyprawy (10+ dni)',
          paras: [
            '10 dniowa wycieczka pozwala zobaczyc zabytki srodkowej polnocy, kilka safari, trekking w gorach i spokojne dni na plazy  lubiana przez pary w podrozy poslubnej i wielopokoleniowe rodziny.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour5', label: 'Wycieczka 5 dni' },
        { pageId: 'tour6', label: 'Prywatna wycieczka 6 dni' },
        { pageId: 'tour8', label: 'Prywatna wycieczka 8 dni' },
        { pageId: 'tours', label: 'Wszystkie wycieczki' },
      ],
    },
    {
      anchor: 'wildlife-safaris',
      heading: 'Safari i Park Narodowy Yala',
      intro: [
        '<strong>Safari na Sri Lance</strong> to gratka dla milosnikow przyrody. Parki sa zwarte w porownaniu z afrykanskimi rezerwatami, wiec lamparty, niedzwiedzie wargacze, slonie, krokodyle i setki ptakow mozna zobaczyc podczas poldniowego safari jeepem.',
      ],
      subsections: [
        {
          heading: 'Safari w Yali  kraina lampartow',
          paras: [
            'Park Yala (blok 1) ma jedna z najwyzszych na swiecie gestosci lampartow. Poranne wyjazdy daja najlepsze swiatlo i aktywnosc zwierzat. Nasza wycieczka Ella i Yala laczy gorskie krajobrazy z safari  ulubiona przez fotografow z Wielkiej Brytanii i Polski.',
          ],
        },
        {
          heading: 'Inne znane parki safari',
          list: [
            '<strong>Udawalawe</strong>  pewne stada sloni; idealne dla rodzin',
            '<strong>Wilpattu</strong>  spokojniejszy teren lampartow; w 8 dniowej trasie',
            '<strong>Minneriya / Kaudulla</strong>  sezonowe zgromadzenia sloni (lipiec to pazdziernik)',
            '<strong>Bundala</strong>  ptaki mokradel i wedrowne',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour2ey', label: 'Wycieczka 2 dni Ella i Yala' },
        { pageId: 'tours', label: 'Wycieczki z safari' },
      ],
    },
    {
      anchor: 'destinations-cards',
      eyebrow: 'KIERUNKI',
      heading: 'Najpopularniejsze miejsca na Sri Lance',
      cards: [
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'Najbardziej kultowa forteca na skale, 200 m nad rownina.', linkPageId: 'sigiriyaDay', linkLabel: 'Wycieczka do Sigiriyi' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'Ostatnia krolewska stolica i Swiatynia Zeba.', linkPageId: 'kandyDay', linkLabel: 'Wycieczka do Kandy' },
        { icon: 'fa-train', title: 'Ella', text: 'Serce gor: trekking, kawiarnie i Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Wycieczka do Elli' },
        { icon: 'fa-ship', title: 'Galle', text: 'Holenderski fort z listy UNESCO i mury o zachodzie slonca.', linkPageId: 'galleDay', linkLabel: 'Wycieczka do Galle' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'Trojkat kultury: Sigiriya, Kandy i starozytne stolice',
      intro: [
        'Trojkat kultury to historyczne serce Sri Lanki i punkt obowiazkowy przy pierwszej wizycie. Miedzy Kandy, Anuradhapura i Polonnaruwa znajdziesz gorskie fortece, swiatynie w jaskiniach, krolewskie palace i zywe tradycje buddyjskie sprzed ponad dwoch tysiacleci.',
      ],
      subsections: [
        {
          heading: 'Forteca Sigiriya',
          paras: [
            'Sigiriya wznosi sie 200 m nad rownina i jest najbardziej kultowym symbolem kraju. Wejdz wczesnym rankiem, by zobaczyc freski, lustrzana sciane i widok na dzungle ze szczytu.',
          ],
        },
        {
          heading: 'Kandy i Swiatynia Zeba',
          paras: [
            'Kandy, ostatnia krolewska stolica, lezy nad jeziorem otoczonym wzgorzami. Swiatynia Zeba to zywe miejsce pielgrzymek z codziennymi ceremoniami puja, czesto laczone z ogrodem botanicznym w Peradeniyi i pokazem tanca.',
          ],
        },
        {
          heading: 'Anuradhapura i Polonnaruwa',
          paras: [
            'Te starozytne miasta to ogromne stupy, kamienne rzezby i ruiny klasztorow. Na dluzszych trasach dodajemy zwiedzanie Polonnaruwy rowerem  gratka dla milosnikow historii.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'sigiriyaDay', label: 'Wycieczka do Sigiriyi' },
        { pageId: 'kandyDay', label: 'Wycieczka do Kandy' },
      ],
    },
    {
      anchor: 'tea-country',
      heading: 'Kraina herbaty i miasteczko Ella',
      intro: [
        'Gory Sri Lanki  historyczna cejlonska kraina herbaty  oferuja chlodniejsze temperatury, spektakularne punkty widokowe i jedna z najpiekniejszych tras kolejowych swiata. Nuwara Eliya wyglada zaskakujaco europejsko; Ella to centrum trekkingu, kawiarni i Nine Arch Bridge.',
        'Pociag z Kandy do Elli nalezy do najpiekniejszych tras kolejowych na swiecie. W miare mozliwosci rezerwujemy miejsca i organizujemy prywatne transfery, gdy rozklad nie pasuje do planu.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Wycieczka do Elli' },
        { pageId: 'tour2ek', label: 'Wycieczka 2 dni Ella i Kandy' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Plaze i poludniowe wybrzeze Sri Lanki',
      intro: [
        'Po kulturze i safari wiekszosc <strong>wakacji na Sri Lance</strong> konczy sie na plazy. Poludniowe wybrzeze laczy historyczny Fort Galle, surfing w Weligamie i Mirissie, spokojne kapiele w Unawatunie i obserwacje wielorybow z Mirissy (listopad to kwiecien).',
        'Fort Galle to otoczone murami miasto z listy UNESCO z holenderska architektura kolonialna. Hikkaduwa i Bentota oferuja hotele resort na <strong>luksusowe wyjazdy</strong>; Tangalle i Mirissa sa idealne na spokojniejszy pobyt.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Wycieczka do Fortu Galle' },
        { pageId: 'testimonials', label: 'Przeczytaj opinie' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Luksusowe wycieczki i wyjazdy na miare',
      intro: [
        '<strong>Luksusowe wycieczki po Sri Lance</strong> stawiaja na prywatnosc, przestrzen i dopracowane doswiadczenia  butikowe wille w gorach, apartamenty przy plazy w Galle, prywatne jeepy na safari i kierowcow przewodnikow przewidujacych Twoje potrzeby.',
        'Projektujemy <strong>wyjazdy na miare</strong> ze sprawdzonymi luksusowymi partnerami i przejrzystymi cenami  bez ukrytych prowizji i wymuszonych zakupow.',
      ],
      list: [
        'Hotele 5 gwiazdkowe i butikowe w najlepszych dostepnych cenach',
        'Prywatni przewodnicy do archeologii, ptakow lub fotografii',
        'Luksusowa flota z przestronnymi SUV ami i vanami dla rodzin',
        'Organizacja wyjatkowych okazji  rocznice, oswiadczyny, okragle urodziny',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Wyjazdy rodzinne na Sri Lanke',
      intro: [
        'Sri Lanka jest wyjatkowo przyjazna rodzinom. Odleglosci sa rozsadne, hotele oferuja pokoje polaczone i baseny, a dzieci uwielbiaja sierocince sloni, wylegarnie zolwi, ogrody przypraw i plaze. Nasze <strong>wyjazdy rodzinne</strong> uwzgledniaja dni odpoczynku i krotsze przejazdy.',
        'Rodzinom z Europy z dziecmi w wieku szkolnym polecamy siedem to dziesiec dni; typowa trasa laczy Sigiriye, safari jeepem, pociag Kandy to Ella i dwa to trzy dni na plazy.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Wycieczki dla rodzin' },
        { pageId: 'guides', label: 'Przewodniki po Sri Lance' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Podroze poslubne i romantyczne wyjazdy na Sri Lanke',
      intro: [
        'Dla par z Polski, Wloch i Hiszpanii <strong>podroz poslubna na Sri Lanke</strong> laczy przygode i intymnosc  wschod slonca na Sigiriyi, kolacja przy swiecach w bungalowie na plantacji, katamaran u poludniowego wybrzeza i willa z basenem nad oceanem.',
        'Na zyczenie organizujemy kwiaty, torty niespodzianki, spa dla par i sesje zdjeciowe. Trasy poslubne trwaja zwykle osiem to czternascie dni, w spokojnym tempie.',
      ],
      seeAlso: [{ pageId: 'tour7', label: 'Pomysl na 7 dniowy miesiac miodowy' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'DLACZEGO MY',
      heading: 'Zaufani lokalni eksperci od 1992 roku',
      cards: [
        { icon: 'fa-clock', title: 'Od 1992', text: 'Ponad trzy dekady rzetelnej obslugi podroznych z calego swiata.' },
        { icon: 'fa-user', title: 'Licencjonowani przewodnicy', text: 'Licencjonowani kierowcy przewodnicy z gleboka wiedza lokalna.' },
        { icon: 'fa-heart', title: 'Zadowoleni podrozni', text: 'Tysiace zadowolonych podroznych z calej Europy.' },
        { icon: 'fa-map-marker-alt', title: 'Na miare', text: 'Kazda trasa jest indywidualna  zadnych autokarow z polki.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Porozmawiaj z naszym zespolem' },
        { pageId: 'about', label: 'Nasza historia' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Planowanie wyjazdu na Sri Lanke z Europy',
      intro: [
        'Loty bezposrednie i z przesiadka lacza Colombo z Warszawa, Frankfurtem, Zurychem, Paryzem, Mediolanem i innymi miastami. Wiekszosc europejskich podroznych przylatuje noca i zaczyna wycieczke nastepnego ranka  kierowca czeka na lotnisku Bandaranaike (CMB).',
      ],
      subsections: [
        {
          heading: 'Niezbedne wskazowki na Sri Lanke',
          list: [
            'Lekka, przewiewna odziez plus warstwa na chlodne gorskie poranki',
            'W swiatyniach buddyjskich zdejmij buty i zakryj ramiona oraz kolana',
            'W sezonie rezerwuj z wyprzedzeniem Sigiriye i safari w Yali',
            'Sprobuj hoppers, kottu roti i swiezego curry rybnego',
            'Zabierz krem z filtrem i srodek na owady na safari i wieczory',
            'Miej kopie paszportu i zgody ETA',
          ],
        },
        {
          heading: 'Wiza (ETA) dla obywateli europejskich',
          paras: [
            'Wiekszosc obywateli Europy potrzebuje elektronicznej zgody na podroz (ETA) przed przylotem. Zloz wniosek online co najmniej 24 to 48 godzin przed wylotem i zachowaj potwierdzenie oraz numer referencyjny. Dzieci potrzebuja wlasnej ETA.',
          ],
        },
        {
          heading: 'Czy Sri Lanka jest bezpieczna dla turystow?',
          paras: [
            'Sri Lanka jest ogolnie bezpieczna i goscinna; co roku odwiedzaja ja miliony turystow bez incydentow. Podroz z rzetelnym kierowca przewodnikiem uznanego organizatora eliminuje wiekszosc klopotow z transportem, cenami i planowaniem trasy.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Przewodniki po Sri Lance' },
        { pageId: 'restaurants', label: 'Restauracje na Sri Lance' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Najczestsze pytania o wycieczki po Sri Lance',
  faqs: [
    {
      q: 'Ile dni potrzeba na wycieczke po Sri Lance?',
      a: 'Siedem to dziesiec dni odpowiada wiekszosci podroznych z Europy odwiedzajacych wyspe po raz pierwszy. 7 dniowa wycieczka obejmuje kulture, gory, safari i plaze; czternascie dni pozwala na polnoc, wschod i luksusowe poludnie bez pospiechu.',
    },
    {
      q: 'Czym rozni sie wycieczka grupowa od prywatnej?',
      a: 'Wycieczka prywatna daje wlasny pojazd i kierowce przewodnika  to Ty wybierasz godziny, przystanki i hotele. Wycieczki autokarowe maja sztywny plan. Sundown Tours specjalizuje sie wylacznie w prywatnych podrozach na miare.',
    },
    {
      q: 'Czy kierowca przewodnik na Sri Lance sie oplaca?',
      a: 'Tak. Stan drog, nieoznakowane zjazdy i ruch w miastach sprawiaja, ze samodzielna jazda jest stresujaca. Licencjonowany przewodnik oszczedza czas, opowiada o kulturze, zalatwia bilety i dostosowuje trase do pogody.',
    },
    {
      q: 'Kiedy jest najlepszy czas na safari w Yali?',
      a: 'Blok 1 w Yali jest otwarty caly rok; w suchych miesiacach (luty to lipiec) latwiej wypatrzyc lamparty, bo zwierzeta gromadza sie przy wodzie. Wybieraj poranne safari dla chlodu i lepszego swiatla.',
    },
    {
      q: 'Czy wycieczki sa odpowiednie dla rodzin z dziecmi?',
      a: 'Jak najbardziej. Krotsze przejazdy, baseny, sierocince sloni, wylegarnie zolwi i plaze zajmuja dzieci. Planujemy wycieczki rodzinne w elastycznym tempie i z restauracjami przyjaznymi dzieciom.',
    },
    {
      q: 'Czy potrzebuje wizy na Sri Lanke?',
      a: 'Paszport polski wymaga ETA przed lotem, tylko na eta.gov.lk. Od 25 maja 2026 turystyczna ETA jest bezplatna 30 dni (podwojny wjazd). Wniosek i tak skladasz z wyprzedzeniem.',
      links: [{ pageId: 'guideVisa', label: 'Wiza i ETA' }],
    },
    {
      q: 'Ile trwa lot z Warszawy na Sri Lanke?',
      a: 'Zwykle ok. 10 to 13 godzin w powietrzu plus przesiadka (Dubaj, Doha, Abu Zabi lub Stambul). Nie sprzedajemy biletow; dopasowujemy pierwsza noc do realnego ladowania na CMB.',
      links: [{ pageId: 'marketPoland', label: 'Wakacje z Polski' }],
    },
    {
      q: 'Jaka jest pogoda i co zobaczyc na Sri Lance?',
      a: 'Grudzien–marzec (styczen, luty) na zachod i poludnie. Maj to wrzesien czesto lepiej na wschod, Trojkat Kulturowy i safari. Pierwsza wycieczka: Lion Rock, Kandy, pociag do Elli, Yala lub Udawalawe i plaza w Bentocie lub Mirissie.',
      links: [{ pageId: 'guideBestTime', label: 'Pogoda Sri Lanka' }],
    },
    {
      q: 'Czy mozna dopasowac podroz poslubna lub wyjazd luksusowy?',
      a: 'Kazda trasa Sundown Tours jest na miare. Organizujemy butikowe hotele, prywatne kolacje, zabiegi spa i specjalne niespodzianki na podroze poslubne i wyjazdy luksusowe.',
    },
    {
      q: 'Jak zarezerwowac prywatna wycieczke w Sundown Tours?',
      a: 'Przejrzyj nasze wycieczki, wybierz dlugosc i wyslij zapytanie przez formularz kontaktowy lub WhatsApp. Odpowiadamy w ciagu 24 godzin z propozycja na miare i przejrzystymi cenami.',
      links: [{ pageId: 'contact', label: 'Kontakt' }],
    },
  ],
};

const ru: HomeSeoContent = {
  tag: 'ПУТЕВОДИТЕЛЬ',
  title: 'Туры на Шри Ланку: пакеты, аэропорт Коломбо и водитель',
  subtitle:
    'Составлено местными экспертами Sundown Tours Sri Lanka  лицензированные водители гиды, индивидуальные маршруты и тысячи довольных путешественников из России, СНГ и всей Европы с 1992 года.',
  tocLabel: 'На этой странице',
  seeAlsoLabel: 'Смотрите также',
  toc: [
    { label: 'Почему Шри Ланка', anchor: 'why-sri-lanka' },
    { label: 'Когда ехать', anchor: 'best-time' },
    { label: 'Частные туры', anchor: 'chauffeur-tours' },
    { label: 'Наши туры', anchor: 'tour-packages' },
    { label: 'Сафари', anchor: 'wildlife-safaris' },
    { label: 'Культурный треугольник', anchor: 'cultural-triangle' },
    { label: 'Чайный край', anchor: 'tea-country' },
    { label: 'Пляжи', anchor: 'beaches' },
    { label: 'С семьёй', anchor: 'family-tours' },
    { label: 'Медовый месяц', anchor: 'honeymoon' },
    { label: 'Почему мы', anchor: 'why-choose-us' },
    { label: 'FAQ', anchor: 'faq-heading' },
  ],
  sections: [
    {
      anchor: 'why-sri-lanka',
      heading: 'Почему стоит поехать на Шри Ланку?',
      intro: [
        'Шри Ланка  один из самых благодарных островных направлений Азии для европейских путешественников, которым нужна разнообразие без долгих внутренних перелётов. За один <strong>отпуск на Шри Ланке</strong> вы подниметесь на древнюю скальную крепость на рассвете, проедете на поезде сквозь туманные чайные плантации, отправитесь на сафари за леопардами и завершите неделю на пляже под пальмами.',
        'Остров компактный, поэтому хорошо спланированный <strong>частный тур по Шри Ланке</strong> соединяет культурный треугольник, горы, национальные парки и южное побережье за семь–четырнадцать дней в комфортном темпе и всегда гибко.',
        'Шри Ланка также отличается прекрасным соотношением цены и качества. Бутик отели, отличная кухня и природа мирового класса доступны по ценам, подходящим и для среднего сегмента, и для <strong>люксовых туров по Шри Ланке</strong>, а тёплое гостеприимство создаёт ощущение желанного гостя с первых минут.',
      ],
      subsections: [{ heading: 'Чем Шри Ланка отличается от других направлений Азии?' }],
      cards: [
        { icon: 'fa-landmark', text: 'Восемь объектов ЮНЕСКО, включая Сигирию, Канди и форт Галле.' },
        { icon: 'fa-globe', text: 'Поездки круглый год  при двух муссонах всегда есть солнечное побережье.' },
        { icon: 'fa-route', text: 'Компактный остров: большинство мест в пределах трёх–пяти часов езды.' },
        { icon: 'fa-paw', text: 'Исключительная природа  слоны, леопарды, синие киты и тропические птицы.' },
        { icon: 'fa-utensils', text: 'Аутентичная кухня: специи, кокос, морепродукты и горные овощи.' },
        { icon: 'fa-car', text: 'Частные туры с личным водителем гидом  без переполненных автобусов.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Гид по направлениям' },
        { pageId: 'tours', label: 'Наши туры по Шри Ланке' },
        { pageId: 'marketRussia', label: 'Туры Шри Ланка из России' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Когда лучше ехать на Шри Ланку',
      intro: [
        'Шри Ланку можно посещать круглый год. Поскольку два муссона затрагивают разные побережья в разное время, почти всегда есть регион с идеальной погодой  главное подобрать маршрут под ваши даты.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'Запад и юг', meta: 'Ноябрь–апрель', text: 'Высокий сезон для зимнего солнца. Коломбо, Галле, Мирисса, Бентота и Хиккадува  спокойное море и солнце.' },
        { icon: 'fa-water', title: 'Восточное побережье', meta: 'Май–сентябрь', text: 'Тринкомали, Пасикуда и Аругам Бэй радуют лучшей погодой, пока юго западный муссон приносит дождь в других местах.' },
        { icon: 'fa-mountain', title: 'Горы', meta: 'Круглый год', text: 'Канди, Элла, Нувара Элия, Сигирия и Дамбулла доступны круглый год, с ясными утрами.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Запад и юг (ноябрь–апрель)',
          paras: [
            'Высокий сезон для тех, кто бежит от зимы. Южное побережье идеально для пляжей, наблюдения за китами и сочетания поездки в Галле с природой юга. Большинство туров на 7 и 10 дней приходятся на этот период.',
          ],
        },
        {
          heading: 'Восточное побережье (май–сентябрь)',
          paras: [
            'Пока юго западный муссон приносит дождь в Коломбо и Галле, восточное побережье радует лучшей погодой. Семьи с летними каникулами в июле и августе часто продлевают здесь пляжный отдых.',
          ],
        },
        {
          heading: 'Горы и культурный треугольник',
          paras: [
            'Канди, Элла, Нувара Элия, Сигирия и Дамбулла хороши круглый год. Утро обычно ясное для подъёма на Сигирию; короткие дневные дожди редко мешают.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guideBestTime', label: 'Когда ехать' },
        { pageId: 'guideBeaches', label: 'Пляжи' },
        { pageId: 'galleDay', label: 'Тур в Галле' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Частные туры с водителем гидом',
      intro: [
        '<strong>Водитель гид на Шри Ланке</strong>  это гораздо больше, чем водитель: это ваш ежедневный организатор, переводчик культуры и опора на незнакомых дорогах. Каждый частный тур Sundown Tours включает лицензированного опытного водителя гида, который ясно говорит по английски (другие языки по запросу).',
        'Европейские путешественники ценят комфорт кондиционера, гибкое время выезда и свободу остановиться ради фото, чайной плантации или храма  вы не связаны групповым графиком.',
      ],
      subsections: [{ heading: 'Что входит в частный тур с водителем?' }],
      list: [
        'Отдельный автомобиль и лицензированный водитель гид на весь маршрут',
        'Трансферы из аэропорта Коломбо (CMB) или региональных аэропортов',
        'Топливо, парковка и проживание водителя  прозрачно рассчитаны заранее',
        'Знание дорог, достопримечательностей, ресторанов и сезонных условий',
        'Помощь с заселением, джипами для сафари и билетами на поезд',
        'Гибкий график дня  темп задаёте вы',
      ],
      seeAlso: [
        { pageId: 'about', label: 'О Sundown Tours' },
        { pageId: 'services', label: 'Наши услуги' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Туры по Шри Ланке на любую продолжительность',
      intro: [
        'Оптимальная длина <strong>тура по Шри Ланке</strong> зависит от того, насколько глубоко вы хотите узнать остров. Короткие маршруты подходят для повторных визитов или пляжного отдыха; длинные сочетают культуру, природу и релакс без спешки. Любой тур можно адаптировать.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Короткие туры', meta: '4 to 6 дней', text: 'Сфокусированные маршруты: Сигирия, Канди, Элла и Яла.', linkPageId: 'tour4', linkLabel: 'Тур 4 дня' },
        { icon: 'fa-calendar-alt', title: 'Неделя', meta: '7 to 8 дней', text: 'Самый популярный вариант  культурный треугольник, чайный край, сафари в Яле и пляжи.', linkPageId: 'tour7', linkLabel: 'Тур 7 дней' },
        { icon: 'fa-calendar-alt', title: 'Большие туры', meta: '10+ дней', text: 'Наследие центра севера, несколько сафари, треккинг и спокойные дни на пляже.', linkPageId: 'tour10', linkLabel: 'Тур 10 дней' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Короткие туры (4 to 6 дней)',
          paras: [
            'Идеальны как продолжение или для целевой поездки. Тур на 4 дня охватывает Сигирию, Канди, Эллу и Ялу; на 5 дней добавляет время на храмы и живописный поезд; семьи часто предпочитают более спокойный темп тура на 6 дней.',
          ],
        },
        {
          heading: 'Неделя (7 to 8 дней)',
          paras: [
            'Тур на 7 дней  самый популярный у тех, у кого неделя отпуска, сочетает культуру, чайный край, сафари в Яле и пляжи. Тур на 8 дней добавляет Вилпатту и Хиккадуву.',
          ],
        },
        {
          heading: 'Большие туры (10+ дней)',
          paras: [
            'Тур на 10 дней позволяет увидеть памятники центра севера, несколько сафари, горный треккинг и спокойные пляжные дни  популярен у пар в медовый месяц и больших семей.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour5', label: 'Тур 5 дней' },
        { pageId: 'tour6', label: 'Частный тур 6 дней' },
        { pageId: 'tour8', label: 'Частный тур 8 дней' },
        { pageId: 'tours', label: 'Все туры' },
      ],
    },
    {
      anchor: 'wildlife-safaris',
      heading: 'Сафари и национальный парк Яла',
      intro: [
        '<strong>Сафари на Шри Ланке</strong>  яркий момент для любителей природы. Парки компактны по сравнению с африканскими заповедниками, поэтому леопардов, медведей губачей, слонов, крокодилов и сотни птиц можно увидеть за полдня на джипе.',
      ],
      subsections: [
        {
          heading: 'Сафари в Яле  царство леопардов',
          paras: [
            'Парк Яла (блок 1) обладает одной из самых высоких в мире плотностей леопардов. Утренние выезды дают лучший свет и активность животных. Наш тур Элла и Яла сочетает горные пейзажи и сафари  любимый фотографами из Великобритании и Польши.',
          ],
        },
        {
          heading: 'Другие известные парки для сафари',
          list: [
            '<strong>Удавалаве</strong>  гарантированные стада слонов; идеально для семей',
            '<strong>Вилпатту</strong>  более тихая территория леопардов; в туре на 8 дней',
            '<strong>Миннерия / Каудулла</strong>  сезонные скопления слонов (июль–октябрь)',
            '<strong>Бундала</strong>  птицы водно болотных угодий и перелётные виды',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour2ey', label: 'Тур 2 дня Элла и Яла' },
        { pageId: 'tours', label: 'Туры с сафари' },
      ],
    },
    {
      anchor: 'destinations-cards',
      eyebrow: 'НАПРАВЛЕНИЯ',
      heading: 'Популярные места Шри Ланки',
      cards: [
        { icon: 'fa-landmark', title: 'Сигирия', text: 'Самая известная скальная крепость, 200 м над равниной.', linkPageId: 'sigiriyaDay', linkLabel: 'Тур в Сигирию' },
        { icon: 'fa-place-of-worship', title: 'Канди', text: 'Последняя королевская столица и Храм Зуба Будды.', linkPageId: 'kandyDay', linkLabel: 'Тур в Канди' },
        { icon: 'fa-train', title: 'Элла', text: 'Сердце гор: треккинг, кафе и мост Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Тур в Эллу' },
        { icon: 'fa-ship', title: 'Галле', text: 'Голландский форт ЮНЕСКО и стены на закате.', linkPageId: 'galleDay', linkLabel: 'Тур в Галле' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'Культурный треугольник: Сигирия, Канди и древние столицы',
      intro: [
        'Культурный треугольник  историческое сердце Шри Ланки и обязательный пункт первой поездки. Между Канди, Анурадхапурой и Полоннарувой вы найдёте скальные крепости, пещерные храмы, королевские дворцы и живые буддийские традиции возрастом более двух тысячелетий.',
      ],
      subsections: [
        {
          heading: 'Скальная крепость Сигирия',
          paras: [
            'Сигирия возвышается на 200 м над равниной и является самым узнаваемым символом страны. Поднимайтесь ранним прохладным утром ради фресок, зеркальной стены и вида на джунгли с вершины.',
          ],
        },
        {
          heading: 'Канди и Храм Зуба Будды',
          paras: [
            'Канди, последняя королевская столица, стоит у озера в окружении холмов. Храм Зуба Будды  живое место паломничества с ежедневными церемониями пуджа, часто в сочетании с ботаническим садом Перадении и танцевальным шоу.',
          ],
        },
        {
          heading: 'Анурадхапура и Полоннарува',
          paras: [
            'Эти древние города  огромные ступы, каменные скульптуры и руины монастырей. В длинных турах мы добавляем осмотр Полоннарувы на велосипеде  находка для любителей истории.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'sigiriyaDay', label: 'Тур в Сигирию' },
        { pageId: 'kandyDay', label: 'Тур в Канди' },
      ],
    },
    {
      anchor: 'tea-country',
      heading: 'Чайный край и горная станция Элла',
      intro: [
        'Горы Шри Ланки  исторический цейлонский чайный край  дарят прохладу, впечатляющие смотровые площадки и одну из красивейших железных дорог мира. Нувара Элия выглядит неожиданно по европейски; Элла  центр треккинга, кафе и моста Nine Arch Bridge.',
        'Поезд из Канди в Эллу неизменно входит в число красивейших маршрутов мира. По возможности мы бронируем места и организуем частные трансферы, если расписание не совпадает с вашим планом.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Тур в Эллу' },
        { pageId: 'tour2ek', label: 'Тур 2 дня Элла и Канди' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Пляжи и южное побережье Шри Ланки',
      intro: [
        'После культуры и сафари большинство <strong>отпусков на Шри Ланке</strong> завершается на пляже. Южное побережье сочетает исторический форт Галле, сёрфинг в Велигаме и Мириссе, спокойное купание в Унаватуне и наблюдение за китами из Мириссы (ноябрь–апрель).',
        'Форт Галле  окружённый стенами город ЮНЕСКО с голландской колониальной архитектурой. Хиккадува и Бентота предлагают отели курорты для <strong>люксовых туров</strong>; Тангалле и Мирисса подходят для более спокойного отдыха.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Тур в форт Галле' },
        { pageId: 'testimonials', label: 'Читать отзывы' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Люксовые туры и отдых на заказ',
      intro: [
        '<strong>Люксовые туры по Шри Ланке</strong>  это приватность, простор и продуманные впечатления: бутик виллы в горах, номера у моря в Галле, частные джипы для сафари и водители гиды, предугадывающие ваши пожелания.',
        'Мы создаём <strong>индивидуальный отдых</strong> с проверенными люксовыми партнёрами и прозрачными ценами  без скрытых комиссий и навязанных магазинов.',
      ],
      list: [
        'Отели 5 звёзд и бутик отели по лучшим доступным ценам',
        'Частные гиды по археологии, орнитологии или фотографии',
        'Люксовый автопарк с просторными внедорожниками и минивэнами для семей',
        'Организация особых событий  годовщины, предложения руки и сердца',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Семейные туры по Шри Ланке',
      intro: [
        'Шри Ланка исключительно удобна для семей. Расстояния разумны, в отелях есть смежные номера и бассейны, а дети обожают приюты слонов, черепашьи питомники, сады специй и пляжи. Наши <strong>семейные туры</strong> включают дни отдыха и более короткие переезды.',
        'Семьям из Европы с детьми школьного возраста мы рекомендуем семь–десять дней; типичный маршрут сочетает Сигирию, сафари на джипе, поезд Канди–Элла и два–три дня на пляже.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Туры для семей' },
        { pageId: 'guides', label: 'Путеводители по Шри Ланке' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Медовый месяц и романтические поездки на Шри Ланку',
      intro: [
        'Для пар из России, Италии и Испании <strong>медовый месяц на Шри Ланке</strong> сочетает приключение и уединение  рассвет на Сигирии, ужин при свечах в бунгало на чайной плантации, катамаран у южного побережья и вилла с бассейном у океана.',
        'По запросу мы организуем цветы, торты сюрпризы, спа для двоих и фотосессии. Маршруты медового месяца обычно длятся восемь–четырнадцать дней в спокойном темпе.',
      ],
      seeAlso: [{ pageId: 'tour7', label: 'Идея медового месяца на 7 дней' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'ПОЧЕМУ МЫ',
      heading: 'Надёжные местные эксперты с 1992 года',
      cards: [
        { icon: 'fa-clock', title: 'С 1992 года', text: 'Более трёх десятилетий надёжного сервиса для путешественников со всего мира.' },
        { icon: 'fa-user', title: 'Лицензированные гиды', text: 'Лицензированные водители гиды с глубоким знанием региона.' },
        { icon: 'fa-heart', title: 'Довольные путешественники', text: 'Тысячи довольных путешественников со всей Европы.' },
        { icon: 'fa-map-marker-alt', title: 'На заказ', text: 'Каждый маршрут индивидуален  никаких шаблонных автобусных туров.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Связаться с командой' },
        { pageId: 'about', label: 'Наша история' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Планирование поездки на Шри Ланку из Европы',
      intro: [
        'Прямые и стыковочные рейсы связывают Коломбо с Москвой, Франкфуртом, Цюрихом, Парижем, Миланом и другими городами. Большинство европейских путешественников прилетают ночью и начинают тур на следующее утро  водитель встречает вас в аэропорту Бандаранаике (CMB).',
      ],
      subsections: [
        {
          heading: 'Полезные советы для поездки на Шри Ланку',
          list: [
            'Лёгкая дышащая одежда плюс слой для прохладного горного утра',
            'В буддийских храмах снимайте обувь и прикрывайте плечи и колени',
            'В высокий сезон заранее бронируйте Сигирию и сафари в Яле',
            'Попробуйте хопперы, котту роти и свежее рыбное карри',
            'Возьмите солнцезащитный крем и репеллент для сафари и вечеров',
            'Держите копии паспорта и разрешения ETA',
          ],
        },
        {
          heading: 'Виза (ETA) для граждан Европы',
          paras: [
            'Большинству европейских граждан нужна электронная виза (ETA) до прибытия. Подайте заявку онлайн минимум за 24 to 48 часов до вылета и сохраните подтверждение и номер. Детям нужна отдельная ETA.',
          ],
        },
        {
          heading: 'Безопасна ли Шри Ланка для туристов?',
          paras: [
            'Шри Ланка в целом безопасна и гостеприимна; миллионы туристов посещают её ежегодно без происшествий. Поездка с надёжным водителем гидом от проверенного оператора избавляет от большинства хлопот с транспортом, ценами и маршрутом.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Путеводители по Шри Ланке' },
        { pageId: 'guidePrivateDriver', label: 'Авто с водителем' },
        { pageId: 'marketRussia', label: 'Из России' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Частые вопросы о турах по Шри Ланке',
  faqs: [
    {
      q: 'Сколько дней нужно для тура по Шри Ланке?',
      a: 'Семь–десять дней подходят большинству впервые приезжающих европейцев. Тур на 7 дней охватывает культуру, горы, сафари и пляжи; четырнадцать дней позволяют север, восток и люксовый юг без спешки.',
    },
    {
      q: 'В чём разница между групповым и частным туром?',
      a: 'Частный тур даёт вам отдельный автомобиль и водителя гида  вы выбираете время, остановки и отели. Автобусные туры следуют фиксированному графику. Sundown Tours занимается исключительно частными турами на заказ.',
    },
    {
      q: 'Стоит ли брать водителя гида на Шри Ланке?',
      a: 'Да. Состояние дорог, неотмеченные повороты и плотное движение делают самостоятельное вождение стрессовым. Лицензированный гид экономит время, рассказывает о культуре, занимается билетами и корректирует маршрут при смене погоды.',
    },
    {
      q: 'Когда лучшее время для сафари в Яле?',
      a: 'Блок 1 в Яле открыт круглый год; в сухие месяцы (февраль–июль) леопардов проще заметить, так как животные собираются у воды. Выбирайте утренние сафари ради прохлады и лучшего света.',
    },
    {
      q: 'Подходят ли туры для семей с детьми?',
      a: 'Безусловно. Более короткие переезды, бассейны, приюты слонов, черепашьи питомники и пляжи увлекают детей. Мы планируем семейные туры в гибком темпе и с подходящими ресторанами.',
    },
    {
      q: 'Нужна ли виза на Шри Ланку?',
      a: 'Российский паспорт требует ETA до рейса, только на eta.gov.lk. С 25 мая 2026 туристическая ETA бесплатна 30 дней (двойной въезд) для 40 стран, включая Россию. Arrival card её не заменяет.',
      links: [{ pageId: 'guideVisa', label: 'Виза и ETA' }],
    },
    {
      q: 'Сколько лететь из Москвы на Шри Ланку?',
      a: 'Обычно около 8 to 12 часов в воздухе плюс стыковка (Дубай, Доха, Абу Даби или Стамбул). Билеты не продаём; первую ночь подгоняем под реальное прибытие в CMB.',
      links: [{ pageId: 'marketRussia', label: 'Туры из России' }],
    },
    {
      q: 'Это аренда машины или турпакет с гидом?',
      a: 'Лицензированный водитель гид с автомобилемне self drive. «Car rental with driver»наш формат: встреча в аэропорту, осмотры, сафари и пляж. RIU, Marriott и Heritanceотельные бренды; можем включить курорт запада как ночи тура, если подходит.',
      links: [{ pageId: 'guidePrivateDriver', label: 'Авто с водителем' }],
    },
    {
      q: 'Что посмотреть и какие пляжи выбрать?',
      a: 'Львиная скала (Сигирия), Канди, поезд до Эллы, сафари в Яле, затем Хиккадува, Мирисса, Негомбо или Бентота по сезону. Мальдивыотдельный перелёт из CMB.',
      links: [{ pageId: 'guideBeaches', label: 'Пляжи' }],
    },
    {
      q: 'Можно ли составить индивидуальный медовый месяц или люксовый тур?',
      a: 'Каждый маршрут Sundown Tours создаётся на заказ. Мы организуем бутик отели, приватные ужины, спа процедуры и особые сюрпризы для медового месяца и люксового отдыха.',
    },
    {
      q: 'Как забронировать частный тур в Sundown Tours?',
      a: 'Выберите тур и продолжительность и отправьте запрос через форму обратной связи или WhatsApp. Мы ответим в течение 24 часов с индивидуальным предложением и прозрачными ценами.',
      links: [{ pageId: 'contact', label: 'Связаться с нами' }],
    },
  ],
};

export const HOME_SEO: Record<Locale, HomeSeoContent> = { en, de, fr, it, es, pl, ru, nl: en };
