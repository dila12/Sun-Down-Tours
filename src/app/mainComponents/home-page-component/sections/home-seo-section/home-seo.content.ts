import type { Locale } from '../../../../i18n/locales';

/**
 * Structured, per-locale content for the homepage SEO guide section.
 * Kept as typed data (not the constrained i18n Dict) so the section can be
 * rendered generically with locale-correct internal links built via
 * `LocaleService.path(pageId)` — no hard-coded English URLs.
 *
 * Paragraph strings may contain simple <strong>/<em> markup (rendered with
 * innerHTML). Internal links live in `seeAlso`/card `linkPageId` as page ids so
 * the correct localized, language-prefixed URL is generated at runtime.
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
    'How to plan Sri Lanka tours and vacation packages with a licensed chauffeur guide — itineraries, safari timing and tailor-made holidays for travellers from the UK, Germany, France, Switzerland, Italy, Spain and Poland since 1992.',
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
        'Sri Lanka is one of the most rewarding island destinations in Asia for European travellers who want variety without long internal flights. In a single <strong>Sri Lanka holiday</strong> you can climb an ancient rock fortress at sunrise, ride a scenic train through misty tea plantations, join a leopard safari and finish the week on a palm-fringed beach.',
        'Because the island is compact, a well-planned <strong>private Sri Lanka tour</strong> covers the Cultural Triangle, hill country, national parks and the south coast in seven to fourteen days at a comfortable pace never rushed, and always flexible.',
        'Sri Lanka is also outstanding value. Boutique hotels, excellent food and world-class wildlife are available at prices that suit both mid-range and <strong>luxury Sri Lanka tours</strong>, and the warmth of local hospitality makes first-time visitors feel welcome the moment they land.',
      ],
      subsections: [
        {
          heading: 'What Makes Sri Lanka Different from Other Asian Destinations?',
        },
      ],
      cards: [
        { icon: 'fa-landmark', text: 'Eight UNESCO World Heritage Sites including Sigiriya, Kandy and Galle Fort.' },
        { icon: 'fa-globe', text: 'Year-round travel with two monsoon patterns there is always a sunny coast.' },
        { icon: 'fa-route', text: 'Compact size: most highlights are within three to five hours by road.' },
        { icon: 'fa-paw', text: 'Exceptional wildlife elephants, leopards, blue whales and tropical birds.' },
        { icon: 'fa-utensils', text: 'Authentic cuisine blending spices, coconut, seafood and hill-country vegetables.' },
        { icon: 'fa-car', text: 'Private tours with a dedicated driver-guide no crowded group coaches.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Sri Lanka destinations guide' },
        { pageId: 'tours', label: 'Sri Lanka tour packages' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Best Time to Visit Sri Lanka',
      intro: [
        'Sri Lanka is a year-round destination. Because two monsoons affect different coasts at different times, there is almost always a region enjoying excellent weather the key is matching your itinerary to the right coast for your travel dates.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'West & South Coast', meta: 'November to April', text: 'Peak season for Europeans escaping winter. Colombo, Galle, Mirissa, Bentota and Hikkaduwa enjoy calm seas and sunny days.' },
        { icon: 'fa-water', title: 'East Coast', meta: 'May to September', text: 'Trincomalee, Pasikudah and Arugam Bay enjoy their finest weather while the south-west monsoon brings rain elsewhere.' },
        { icon: 'fa-mountain', title: 'Hill Country', meta: 'Year-round', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya and Dambulla can be visited all year, with clear mornings for sightseeing.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'West & South Coast (November to April)',
          paras: [
            'This is peak season for winter-sun travellers. The south coast is ideal for beach stays, whale watching and combining a Galle day trip with southern wildlife. Most 7 and 10 day tours follow this window because it links the Cultural Triangle, hill country, Yala and the south coast in one logical loop.',
          ],
        },
        {
          heading: 'East Coast (May to September)',
          paras: [
            'While the south-west monsoon brings rain to Colombo and Galle, the east coast enjoys its best weather. European families with July and August school holidays often add an east-coast beach extension.',
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
        'European travellers value air-conditioned comfort, flexible departure times and the freedom to stop for photographs, a tea plantation or a spontaneous temple visit you are never bound to a group schedule.',
      ],
      subsections: [{ heading: 'What Is Included in a Private Chauffeur Tour?' }],
      list: [
        'Dedicated vehicle and licensed chauffeur guide for the full itinerary',
        'Airport pickup and drop-off at Colombo (CMB) or regional airports',
        'Fuel, parking and driver accommodation, quoted transparently upfront',
        'Local knowledge of roads, attractions, restaurants and seasonal conditions',
        'Help with hotel check-in, safari jeep bookings and train tickets',
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
        'The right length for your <strong>Sri Lanka tour package</strong> depends on how deeply you want to explore. Short itineraries suit repeat visitors or beach-focused trips; longer routes combine culture, wildlife and relaxation without rushing. Every package below can be customised.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Short Private Tours', meta: '4–6 Days', text: 'Focused loops covering Sigiriya, Kandy, Ella and Yala in a compact route.', linkPageId: 'tour4', linkLabel: '4 day Sri Lanka tour' },
        { icon: 'fa-calendar-alt', title: 'One-Week Itineraries', meta: '7–8 Days', text: 'Our most popular option Cultural Triangle, tea country, Yala safari and south-coast beaches.', linkPageId: 'tour7', linkLabel: '7 day Sri Lanka tour' },
        { icon: 'fa-calendar-alt', title: 'Extended Island Tours', meta: '10+ Days', text: 'North-central heritage, several safari drives, hill-country hiking and unhurried beach days.', linkPageId: 'tour10', linkLabel: '10 day Sri Lanka tour' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Short Private Tours (4–6 Days)',
          paras: [
            'Ideal for extensions or focused trips. The 4 day tour covers Sigiriya, Kandy, Ella and Yala in a compact loop; the 5 day tour adds time for temple visits and a scenic train segment; families often prefer the gentler pace of the 6 day private tour.',
          ],
        },
        {
          heading: 'One-Week Itineraries (7–8 Days)',
          paras: [
            'The 7 day tour is our most popular option for UK and German travellers with one week off, balancing culture, tea country, Yala safari and beaches. The 8 day private tour adds Wilpattu or extended park time plus Hikkaduwa.',
          ],
        },
        {
          heading: 'Extended Island Tours (10+ Days)',
          paras: [
            'A 10 day tour allows north-central heritage sites, multiple safari drives, hill-country hiking and unhurried beach days popular with French and Italian honeymooners and multi-generational families from Switzerland.',
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
        '<strong>Sri Lanka safari tours</strong> are a highlight for European nature lovers. The island’s national parks are compact compared with African reserves, so meaningful sightings leopards, sloth bears, elephants, crocodiles and hundreds of birds happen within a half-day jeep safari.',
      ],
      subsections: [
        {
          heading: 'Yala Safari Leopard Country',
          paras: [
            'Yala National Park (Block 1) offers one of the highest leopard densities in the world. Morning drives deliver the best light and animal activity. Our Ella & Yala safari tour pairs hill-country scenery with a game drive a favourite with British and Polish wildlife photographers.',
          ],
        },
        {
          heading: 'Other Notable Safari Parks',
          list: [
            '<strong>Udawalawe</strong> reliable elephant herds; ideal for families with children',
            '<strong>Wilpattu</strong> quieter leopard territory; featured on our 8-day route',
            '<strong>Minneriya / Kaudulla</strong> seasonal elephant gatherings (July–October)',
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
        { icon: 'fa-train', title: 'Ella', text: 'Hill-country hub for hiking, cafés and the famous Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Ella tour' },
        { icon: 'fa-ship', title: 'Galle', text: 'UNESCO-listed walled fort with Dutch colonial streets and sunset ramparts.', linkPageId: 'galleDay', linkLabel: 'Galle tour' },
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
            'Rising 200 metres above the plains, Sigiriya is Sri Lanka’s most iconic landmark. Climb in the cool early morning for frescoes, the mirror wall and summit views over the jungle canopy.',
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
            'These ancient cities feature enormous stupas, stone sculptures and monastery ruins. On longer itineraries we include a bicycle tour of Polonnaruwa a highlight for history-focused travellers.',
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
        'Sri Lanka’s hill country historic Ceylon tea country offers cooler temperatures, spectacular viewpoints and one of the world’s great train journeys. Nuwara Eliya feels unexpectedly European; Ella has become the hub for hiking, cafés and the famous Nine Arch Bridge.',
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
        'After culture and safari, most <strong>Sri Lanka holidays</strong> finish with beach time. The south coast combines historic Galle Fort, surf at Weligama and Mirissa, calm swimming at Unawatuna and whale-watching from Mirissa (November–April).',
        'Galle Fort is a UNESCO-listed walled city with Dutch colonial buildings, boutique shops and sunset ramparts. Hikkaduwa and Bentota offer resort hotels for <strong>luxury Sri Lanka tours</strong>; Tangalle and Mirissa suit quieter boutique stays.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Galle Fort day tour' },
        { pageId: 'testimonials', label: 'Read traveller reviews' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Luxury Sri Lanka Tours & Bespoke Holidays',
      intro: [
        '<strong>Sri Lanka luxury tours</strong> are about privacy, space and curated experiences boutique villas in the hills, beachfront suites in Galle, private safari jeeps and chauffeur guides who anticipate your preferences from day one.',
        'We design <strong>tailor-made Sri Lanka holidays</strong> with verified luxury partners and transparent pricing no hidden commissions or forced shopping stops.',
      ],
      list: [
        'Five-star and boutique hotel reservations at best-available rates',
        'Private guides for archaeology, birding or photography interests',
        'Luxury vehicle fleet including spacious SUVs and vans for families',
        'Special-occasion planning anniversaries, proposals and milestone birthdays',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Sri Lanka Family Tours',
      intro: [
        'Sri Lanka is exceptionally family-friendly. Distances are manageable, hotels offer connecting rooms and pools, and children love elephant orphanages, turtle hatcheries, spice gardens and beach days. Our <strong>Sri Lanka family tours</strong> build in rest days and shorter drives so parents relax too.',
        'We recommend seven to ten days for families from Europe with school-age children a typical route mixes Sigiriya, a jeep safari, the Kandy-to-Ella train and two or three beach days.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Family-friendly tour packages' },
        { pageId: 'guides', label: 'Sri Lanka travel guides' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Sri Lanka Honeymoon Tours & Romantic Escapes',
      intro: [
        'For couples from Italy, France, Spain and the UK, <strong>Sri Lanka honeymoon tours</strong> combine adventure and intimacy sunrise from Sigiriya, a candlelit dinner at a tea-estate bungalow, a south-coast catamaran and a plunge-pool villa by the ocean.',
        'We arrange flowers, cake surprises, couples’ spa treatments and photography on request. Honeymoon routes usually run eight to fourteen days with relaxed two-night stays.',
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
        { icon: 'fa-map-marker-alt', title: 'Tailor-Made', text: 'Every itinerary is tailor-made no one-size-fits-all coach tours.' },
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
        'Direct and one-stop flights connect Colombo with London, Frankfurt, Paris, Zurich, Milan, Madrid and Warsaw. Most European travellers arrive overnight and begin their tour the next morning your chauffeur meets you at Bandaranaike International Airport (CMB).',
      ],
      subsections: [
        {
          heading: 'Essential Sri Lanka Travel Tips',
          list: [
            'Pack light, breathable clothing plus a layer for hill-country mornings',
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
            'Most European passport holders need an Electronic Travel Authorisation (ETA) before arrival. Apply online at least 24–48 hours before departure, and keep your approval and reference number to show at immigration. Children need their own ETA.',
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
      a: 'Seven to ten days suits most first-time visitors from Europe. A 7 day tour covers culture, hills, safari and beaches; fourteen days allows north, east and luxury south-coast stays without rushing.',
    },
    {
      q: 'What is the difference between a group tour and a private Sri Lanka tour?',
      a: 'A private tour gives you a dedicated vehicle and chauffeur guide you choose departure times, stops and hotels. Group coach tours follow fixed schedules. Sundown Tours specialises exclusively in private, tailor-made travel.',
    },
    {
      q: 'Is a Sri Lanka chauffeur guide worth the cost?',
      a: 'Yes. Road conditions, unmarked turns and busy town traffic make self-driving stressful. A licensed guide saves time, explains culture at each site, handles tickets and adapts when the weather changes.',
    },
    {
      q: 'When is the best time for a Yala safari?',
      a: 'Yala Block 1 is open year-round; dry months (February–July) make leopard spotting easier as animals gather near water. Book morning safaris for cooler temperatures and better light.',
    },
    {
      q: 'Are Sri Lanka tours suitable for families with children?',
      a: 'Absolutely. Shorter drives, hotel pools, elephant orphanages, turtle hatcheries and beach days keep children engaged. We plan family tours with flexible pacing and child-friendly restaurants.',
    },
    {
      q: 'Do I need a visa to visit Sri Lanka from the UK or EU?',
      a: 'Most European citizens need an ETA (Electronic Travel Authorisation) obtained online before travel. Apply at least 48 hours before departure; children need their own ETA.',
    },
    {
      q: 'Can you customise a Sri Lanka honeymoon or luxury tour?',
      a: 'Every Sundown Tours itinerary is tailor-made. We arrange boutique hotels, private dining, spa treatments and special surprises for honeymoons and luxury holidays.',
    },
    {
      q: 'How do I book a private tour with Sundown Tours?',
      a: 'Browse our tour packages, choose a duration and submit an enquiry via the contact form or WhatsApp. We reply within 24 hours with a tailor-made proposal and transparent pricing.',
      links: [{ pageId: 'contact', label: 'Contact us' }],
    },
    {
      q: 'What is included in a Sri Lanka holiday package?',
      a: 'A typical private package includes your chauffeur-guide, air-conditioned vehicle, fuel and driver costs. Hotels, national-park jeeps and attraction tickets can be bundled or booked yourself — we quote both options clearly.',
    },
    {
      q: 'Is a 7 day or 10 day Sri Lanka itinerary better?',
      a: 'Seven days covers Sigiriya, Kandy, Ella, a safari and a beach finish without rushing. Ten days adds slower hill-country time, a second wildlife drive or the Cultural Triangle in more depth — better if you have a two-week vacation including flights.',
      links: [
        { pageId: 'tour7', label: '7 day tour' },
        { pageId: 'tour10', label: '10 day tour' },
      ],
    },
    {
      q: 'Can I hire a private driver in Sri Lanka without a full tour package?',
      a: 'Yes. Many guests book a chauffeur-only itinerary and arrange hotels independently. You still get a licensed local driver-guide, airport pickup and a flexible daily plan.',
      links: [{ pageId: 'guidePrivateDriver', label: 'Private driver guide' }],
    },
  ],
};

const de: HomeSeoContent = {
  tag: 'REISEFÜHRER',
  title: 'Der komplette Ratgeber für private Sri Lanka Rundreisen & maßgeschneiderten Urlaub',
  subtitle:
    'Geschrieben von den lokalen Experten von Sundown Tours Sri Lanka – lizenzierte Fahrer-Guides, maßgeschneiderte Routen und seit 1992 tausende zufriedene Reisende aus Deutschland, der Schweiz, Österreich und ganz Europa.',
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
    { label: 'Strände', anchor: 'beaches' },
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
        'Sri Lanka ist für europäische Reisende eines der lohnendsten Inselziele Asiens – enorme Vielfalt ohne lange Inlandsflüge. In einem einzigen <strong>Sri Lanka Urlaub</strong> erklimmen Sie im Morgengrauen eine antike Felsenfestung, fahren mit dem Zug durch nebelverhangene Teeplantagen, gehen auf Leoparden-Safari und lassen die Woche an einem palmengesäumten Strand ausklingen.',
        'Da die Insel kompakt ist, verbindet eine gut geplante <strong>private Sri Lanka Rundreise</strong> das Kulturdreieck, das Bergland, die Nationalparks und die Südküste in sieben bis vierzehn Tagen in angenehmem Tempo – ohne Hektik und jederzeit flexibel.',
        'Sri Lanka bietet zudem ein hervorragendes Preis-Leistungs-Verhältnis. Boutique-Hotels, gutes Essen und erstklassige Tierbeobachtungen sind zu Preisen möglich, die sowohl zur Mittelklasse als auch zu <strong>Luxus-Reisen nach Sri Lanka</strong> passen. Die herzliche Gastfreundschaft lässt Erstbesucher sofort willkommen fühlen.',
      ],
      subsections: [{ heading: 'Was unterscheidet Sri Lanka von anderen Zielen in Asien?' }],
      cards: [
        { icon: 'fa-landmark', text: 'Acht UNESCO-Welterbestätten, darunter Sigiriya, Kandy und das Fort von Galle.' },
        { icon: 'fa-globe', text: 'Ganzjährig bereisbar – dank zweier Monsune gibt es immer eine sonnige Küste.' },
        { icon: 'fa-route', text: 'Kompakt: Die meisten Höhepunkte liegen drei bis fünf Fahrstunden auseinander.' },
        { icon: 'fa-paw', text: 'Außergewöhnliche Tierwelt – Elefanten, Leoparden, Blauwale und tropische Vögel.' },
        { icon: 'fa-utensils', text: 'Authentische Küche aus Gewürzen, Kokos, Meeresfrüchten und Bergland-Gemüse.' },
        { icon: 'fa-car', text: 'Privatreisen mit eigenem Fahrer-Guide – keine überfüllten Reisebusse.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Reiseziele in Sri Lanka' },
        { pageId: 'tours', label: 'Sri Lanka Reisepakete' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Beste Reisezeit für Sri Lanka',
      intro: [
        'Sri Lanka ist ein Ganzjahresziel. Da zwei Monsune unterschiedliche Küsten zu unterschiedlichen Zeiten betreffen, hat fast immer eine Region ideales Wetter – entscheidend ist, die Route zu Ihren Reisedaten passend zu wählen.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'West- & Südküste', meta: 'November bis April', text: 'Hauptsaison für Wintersonne. Colombo, Galle, Mirissa, Bentota und Hikkaduwa bieten ruhige See und Sonne.' },
        { icon: 'fa-water', title: 'Ostküste', meta: 'Mai bis September', text: 'Trincomalee, Pasikudah und Arugam Bay zeigen ihr bestes Wetter, während anderswo der Südwestmonsun Regen bringt.' },
        { icon: 'fa-mountain', title: 'Bergland', meta: 'Ganzjährig', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya und Dambulla sind das ganze Jahr über bereisbar, morgens meist klar.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'West- & Südküste (November bis April)',
          paras: [
            'Hauptsaison für Reisende, die dem Winter entfliehen. Die Südküste ist ideal für Strandtage, Whale Watching und die Kombination eines Galle-Ausflugs mit der Tierwelt im Süden. Die meisten 7- und 10-tägigen Reisen folgen diesem Zeitraum.',
          ],
        },
        {
          heading: 'Ostküste (Mai bis September)',
          paras: [
            'Während der Südwestmonsun Colombo und Galle Regen bringt, zeigt sich die Ostküste von ihrer besten Seite. Familien mit Sommerferien im Juli und August verlängern hier gern am Strand.',
          ],
        },
        {
          heading: 'Bergland & Kulturdreieck',
          paras: [
            'Kandy, Ella, Nuwara Eliya, Sigiriya und Dambulla funktionieren ganzjährig. Morgens ist es meist klar für den Aufstieg auf Sigiriya; kurze Nachmittagsschauer stören selten.',
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
      heading: 'Private Rundreisen mit Fahrer-Guide',
      intro: [
        'Ein <strong>Fahrer-Guide in Sri Lanka</strong> ist weit mehr als ein Fahrer – er ist Ihr täglicher Planer, kultureller Dolmetscher und Sicherheitsnetz auf fremden Straßen. Jede private Sundown-Tours-Reise umfasst einen lizenzierten, erfahrenen Fahrer-Guide, der klar Englisch spricht (weitere Sprachen auf Anfrage).',
        'Europäische Reisende schätzen klimatisierten Komfort, flexible Startzeiten und die Freiheit, für Fotos, eine Teeplantage oder einen spontanen Tempelbesuch anzuhalten – Sie sind an keinen Gruppenplan gebunden.',
      ],
      subsections: [{ heading: 'Was ist in einer privaten Rundreise mit Fahrer enthalten?' }],
      list: [
        'Eigenes Fahrzeug und lizenzierter Fahrer-Guide für die gesamte Route',
        'Flughafenabholung und -rückbringung in Colombo (CMB) oder Regionalflughäfen',
        'Kraftstoff, Parkgebühren und Fahrerunterkunft – transparent im Voraus kalkuliert',
        'Ortskenntnis zu Straßen, Sehenswürdigkeiten, Restaurants und Saison',
        'Hilfe bei Hotel-Check-in, Safari-Jeep-Buchungen und Zugtickets',
        'Ein flexibler Tagesablauf – Sie bestimmen das Tempo',
      ],
      seeAlso: [
        { pageId: 'about', label: 'Über Sundown Tours' },
        { pageId: 'services', label: 'Unsere Reiseleistungen' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Sri Lanka Reisepakete für jede Reisedauer',
      intro: [
        'Die passende Länge Ihres <strong>Sri Lanka Reisepakets</strong> hängt davon ab, wie tief Sie eintauchen möchten. Kurze Routen eignen sich für Wiederkehrer oder Strandurlaub; längere Routen verbinden Kultur, Tierwelt und Erholung ohne Hektik. Alle Pakete sind anpassbar.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Kurze Privatreisen', meta: '4–6 Tage', text: 'Kompakte Routen mit Sigiriya, Kandy, Ella und Yala.', linkPageId: 'tour4', linkLabel: '4 Tage Sri Lanka Rundreise' },
        { icon: 'fa-calendar-alt', title: 'Eine Woche', meta: '7–8 Tage', text: 'Unsere beliebteste Wahl – Kulturdreieck, Teeland, Yala-Safari und Südküste.', linkPageId: 'tour7', linkLabel: '7 Tage Sri Lanka Rundreise' },
        { icon: 'fa-calendar-alt', title: 'Ausführliche Inselreisen', meta: 'Ab 10 Tagen', text: 'Nord-zentrale Kultur, mehrere Safaris, Wandern im Bergland und entspannte Strandtage.', linkPageId: 'tour10', linkLabel: '10 Tage Sri Lanka Rundreise' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Kurze Privatreisen (4–6 Tage)',
          paras: [
            'Ideal als Verlängerung oder für fokussierte Reisen. Die 4-Tage-Reise umfasst Sigiriya, Kandy, Ella und Yala; die 5-Tage-Reise bietet mehr Zeit für Tempel und eine Zugfahrt; Familien bevorzugen oft das ruhigere Tempo der 6-Tage-Privatreise.',
          ],
        },
        {
          heading: 'Eine Woche (7–8 Tage)',
          paras: [
            'Die 7-Tage-Reise ist bei deutschen und britischen Reisenden mit einer Woche Urlaub am beliebtesten und verbindet Kultur, Teeland, Yala-Safari und Strände. Die 8-Tage-Privatreise ergänzt Wilpattu und Hikkaduwa.',
          ],
        },
        {
          heading: 'Ausführliche Inselreisen (ab 10 Tagen)',
          paras: [
            'Eine 10-Tage-Reise ermöglicht nord-zentrale Kulturstätten, mehrere Safaris, Bergland-Wanderungen und entspannte Strandtage – beliebt bei Paaren und Mehrgenerationen-Familien aus der Schweiz.',
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
      heading: 'Safaris & Yala-Nationalpark',
      intro: [
        '<strong>Safari-Touren in Sri Lanka</strong> sind ein Höhepunkt für Naturliebhaber. Die Nationalparks sind im Vergleich zu afrikanischen Reservaten kompakt, sodass Leoparden, Lippenbären, Elefanten, Krokodile und Hunderte Vogelarten schon bei einer halbtägigen Jeep-Safari zu sehen sind.',
      ],
      subsections: [
        {
          heading: 'Yala-Safari – Land der Leoparden',
          paras: [
            'Der Yala-Nationalpark (Block 1) hat eine der höchsten Leopardendichten weltweit. Morgens sind Licht und Tieraktivität am besten. Unsere Ella-&-Yala-Safari verbindet Berglandschaft mit einer Pirschfahrt – beliebt bei Fotografen aus Großbritannien und Polen.',
          ],
        },
        {
          heading: 'Weitere bekannte Safari-Parks',
          list: [
            '<strong>Udawalawe</strong> – zuverlässige Elefantenherden; ideal für Familien',
            '<strong>Wilpattu</strong> – ruhigeres Leopardengebiet; Teil unserer 8-Tage-Route',
            '<strong>Minneriya / Kaudulla</strong> – saisonale Elefantentreffen (Juli–Oktober)',
            '<strong>Bundala</strong> – Feuchtgebiets- und Zugvögel für Ornithologen',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour2ey', label: '2 Tage Ella & Yala Safari' },
        { pageId: 'tours', label: 'Safari-Reisepakete' },
      ],
    },
    {
      anchor: 'destinations-cards',
      eyebrow: 'REISEZIELE',
      heading: 'Beliebte Reiseziele in Sri Lanka',
      cards: [
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'Sri Lankas berühmteste Felsenfestung, 200 Meter über der Ebene.', linkPageId: 'sigiriyaDay', linkLabel: 'Sigiriya Tour' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'Die letzte Königsstadt und Heimat des Zahntempels.', linkPageId: 'kandyDay', linkLabel: 'Kandy Tour' },
        { icon: 'fa-train', title: 'Ella', text: 'Bergland-Zentrum für Wanderungen, Cafés und die Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Ella Tour' },
        { icon: 'fa-ship', title: 'Galle', text: 'UNESCO-Fort mit holländischen Kolonialgassen und Sonnenuntergängen.', linkPageId: 'galleDay', linkLabel: 'Galle Tour' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'Das Kulturdreieck: Sigiriya, Kandy & antike Königsstädte',
      intro: [
        'Das Kulturdreieck ist das historische Herz Sri Lankas und bei jedem Erstbesuch ein Muss. Zwischen Kandy, Anuradhapura und Polonnaruwa finden Sie Felsenfestungen, Höhlentempel, Königspaläste und lebendige buddhistische Traditionen, die über zwei Jahrtausende zurückreichen.',
      ],
      subsections: [
        {
          heading: 'Felsenfestung Sigiriya',
          paras: [
            'Sigiriya erhebt sich 200 Meter über die Ebene und ist Sri Lankas ikonischstes Wahrzeichen. Steigen Sie am kühlen frühen Morgen zu Fresken, Spiegelwand und Gipfelblick über das Dschungeldach auf.',
          ],
        },
        {
          heading: 'Kandy & der Zahntempel',
          paras: [
            'Kandy, die letzte Königsstadt, liegt an einem See zwischen Hügeln. Der Zahntempel ist eine lebendige Pilgerstätte mit täglichen Puja-Zeremonien – oft kombiniert mit dem Königlichen Botanischen Garten und einer Tanzshow.',
          ],
        },
        {
          heading: 'Anuradhapura & Polonnaruwa',
          paras: [
            'Diese antiken Städte bieten riesige Stupas, Steinskulpturen und Klosterruinen. Auf längeren Reisen bauen wir eine Fahrradtour durch Polonnaruwa ein – ein Höhepunkt für geschichtsinteressierte Reisende.',
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
        'Sri Lankas Bergland – das historische Ceylon-Teeland – bietet kühlere Temperaturen, spektakuläre Aussichtspunkte und eine der schönsten Zugfahrten der Welt. Nuwara Eliya wirkt überraschend europäisch; Ella ist das Zentrum für Wanderungen, Cafés und die Nine Arch Bridge.',
        'Die Zugfahrt von Kandy nach Ella zählt durchweg zu den schönsten Bahnstrecken der Welt. Wir reservieren nach Möglichkeit Sitzplätze und organisieren private Transfers, wenn die Fahrpläne nicht zu Ihrer Route passen.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Ella Tagestour' },
        { pageId: 'tour2ek', label: '2 Tage Ella & Kandy Privatreise' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Strände & Südküste Sri Lankas',
      intro: [
        'Nach Kultur und Safari klingen die meisten <strong>Sri Lanka Urlaube</strong> am Strand aus. Die Südküste verbindet das historische Galle Fort, Surfen in Weligama und Mirissa, ruhiges Baden in Unawatuna und Whale Watching ab Mirissa (November–April).',
        'Galle Fort ist eine von der UNESCO gelistete Festungsstadt mit holländischen Kolonialbauten und Boutiquen. Hikkaduwa und Bentota bieten Resorthotels für <strong>Luxusreisen</strong>; Tangalle und Mirissa eignen sich für ruhigere Boutique-Aufenthalte.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Galle Fort Tagestour' },
        { pageId: 'testimonials', label: 'Reisebewertungen lesen' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Luxusreisen & maßgeschneiderte Sri-Lanka-Ferien',
      intro: [
        'Bei <strong>Luxusreisen nach Sri Lanka</strong> geht es um Privatsphäre, Raum und kuratierte Erlebnisse – Boutique-Villen im Bergland, Beachfront-Suiten in Galle, private Safari-Jeeps und Fahrer-Guides, die Ihre Wünsche vorausahnen.',
        'Wir gestalten <strong>maßgeschneiderte Sri-Lanka-Ferien</strong> mit geprüften Luxuspartnern und transparenten Preisen – ohne versteckte Provisionen oder erzwungene Einkaufsstopps.',
      ],
      list: [
        'Fünf-Sterne- und Boutique-Hotels zu besten verfügbaren Preisen',
        'Private Guides für Archäologie, Vogelbeobachtung oder Fotografie',
        'Luxus-Fuhrpark mit geräumigen SUVs und Vans für Familien',
        'Planung besonderer Anlässe – Jubiläen, Heiratsanträge, runde Geburtstage',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Sri Lanka Familienreisen',
      intro: [
        'Sri Lanka ist außergewöhnlich familienfreundlich. Die Wege sind überschaubar, Hotels bieten Verbindungszimmer und Pools, und Kinder lieben Elefantenwaisenhäuser, Schildkröten-Aufzuchtstationen, Gewürzgärten und Strandtage. Unsere <strong>Familienreisen</strong> planen Ruhetage und kürzere Fahrten ein.',
        'Für Familien aus Europa mit Schulkindern empfehlen wir sieben bis zehn Tage – eine typische Route verbindet Sigiriya, eine Jeep-Safari, die Zugfahrt Kandy–Ella und zwei bis drei Strandtage.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Familienfreundliche Reisepakete' },
        { pageId: 'guides', label: 'Sri Lanka Reiseführer' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Flitterwochen & romantische Reisen in Sri Lanka',
      intro: [
        'Für Paare aus Deutschland, Italien, Frankreich und der Schweiz verbinden <strong>Flitterwochen in Sri Lanka</strong> Abenteuer und Intimität – Sonnenaufgang auf Sigiriya, Candle-Light-Dinner in einem Teeplantagen-Bungalow, ein Katamaran an der Südküste und eine Villa mit Pool am Meer.',
        'Auf Wunsch organisieren wir Blumen, Überraschungstorten, Paar-Spa und Fotoshootings. Flitterwochen-Routen dauern meist acht bis vierzehn Tage mit entspannten Zwei-Nächte-Aufenthalten.',
      ],
      seeAlso: [{ pageId: 'tour7', label: '7 Tage Flitterwochen-Idee' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'WARUM WIR',
      heading: 'Vertrauenswürdige lokale Experten seit 1992',
      cards: [
        { icon: 'fa-clock', title: 'Seit 1992', text: 'Über drei Jahrzehnte verlässlicher Service für internationale Reisende.' },
        { icon: 'fa-user', title: 'Lizenzierte Guides', text: 'Lizenzierte Fahrer-Guides mit fundierter Ortskenntnis.' },
        { icon: 'fa-heart', title: 'Zufriedene Reisende', text: 'Tausende zufriedene Reisende aus ganz Europa und darüber hinaus.' },
        { icon: 'fa-map-marker-alt', title: 'Maßgeschneidert', text: 'Jede Route ist individuell – keine Bustouren von der Stange.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Mit unserem Team sprechen' },
        { pageId: 'about', label: 'Unsere Geschichte' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Ihre Sri-Lanka-Reise aus Europa planen',
      intro: [
        'Direkt- und Umsteigeverbindungen verbinden Colombo mit Frankfurt, Zürich, Wien, München, Paris und weiteren Städten. Die meisten europäischen Reisenden landen über Nacht und beginnen ihre Reise am nächsten Morgen – Ihr Fahrer erwartet Sie am Flughafen Bandaranaike (CMB).',
      ],
      subsections: [
        {
          heading: 'Wichtige Reisetipps für Sri Lanka',
          list: [
            'Leichte, atmungsaktive Kleidung plus eine Schicht für kühle Bergland-Morgen',
            'In buddhistischen Tempeln Schuhe ausziehen, Schultern und Knie bedecken',
            'Sigiriya- und Yala-Safari-Zeiten in der Hauptsaison früh buchen',
            'Hoppers, Kottu Roti und frisches Fischcurry probieren – die Küche ist ein Highlight',
            'Sonnencreme und Insektenschutz für Safari und Abende einpacken',
            'Kopien von Reisepass und ETA-Visum bereithalten',
          ],
        },
        {
          heading: 'Sri Lanka Visum (ETA) für europäische Bürger',
          paras: [
            'Die meisten europäischen Pass-Inhaber benötigen vor der Einreise eine elektronische Reisegenehmigung (ETA). Beantragen Sie diese online mindestens 24–48 Stunden vor Abflug und halten Sie Genehmigung und Referenznummer für die Einreise bereit. Kinder benötigen ein eigenes ETA.',
          ],
        },
        {
          heading: 'Ist Sri Lanka für Touristen sicher?',
          paras: [
            'Sri Lanka ist grundsätzlich sicher und gastfreundlich; Millionen besuchen die Insel jedes Jahr ohne Zwischenfälle. Eine Reise mit einem seriösen Fahrer-Guide eines etablierten Veranstalters nimmt Ihnen die meisten praktischen Sorgen rund um Transport, Preise und Routenplanung ab.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Sri Lanka Reiseführer' },
        { pageId: 'restaurants', label: 'Restaurants in Sri Lanka' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Häufige Fragen zu Sri Lanka Reisen',
  faqs: [
    {
      q: 'Wie viele Tage benötige ich für eine Sri Lanka Reise?',
      a: 'Sieben bis zehn Tage passen für die meisten Erstbesucher aus Europa. Eine 7-Tage-Reise deckt Kultur, Bergland, Safari und Strände ab; vierzehn Tage erlauben Norden, Osten und Luxus an der Südküste ohne Hektik.',
    },
    {
      q: 'Was ist der Unterschied zwischen einer Gruppenreise und einer privaten Rundreise?',
      a: 'Eine Privatreise bietet Ihnen ein eigenes Fahrzeug und einen Fahrer-Guide – Sie wählen Abfahrtszeiten, Stopps und Hotels. Gruppenbusreisen folgen festen Plänen. Sundown Tours ist ausschließlich auf private, maßgeschneiderte Reisen spezialisiert.',
    },
    {
      q: 'Lohnt sich ein Fahrer-Guide in Sri Lanka?',
      a: 'Ja. Straßenverhältnisse, unbeschilderte Abzweigungen und dichter Stadtverkehr machen Selbstfahren stressig. Ein lizenzierter Guide spart Zeit, erklärt die Kultur, kümmert sich um Tickets und passt die Route bei Wetteränderungen an.',
    },
    {
      q: 'Wann ist die beste Zeit für eine Yala-Safari?',
      a: 'Yala Block 1 ist ganzjährig geöffnet; in den Trockenmonaten (Februar–Juli) sind Leoparden leichter zu sehen, da sich Tiere am Wasser sammeln. Buchen Sie Morgensafaris für kühlere Temperaturen und besseres Licht.',
    },
    {
      q: 'Sind Sri Lanka Reisen für Familien mit Kindern geeignet?',
      a: 'Absolut. Kürzere Fahrten, Hotelpools, Elefantenwaisenhäuser, Schildkrötenstationen und Strandtage begeistern Kinder. Wir planen Familienreisen mit flexiblem Tempo und kinderfreundlichen Restaurants.',
    },
    {
      q: 'Brauche ich ein Visum für Sri Lanka?',
      a: 'Die meisten europäischen Bürger benötigen ein ETA (elektronische Reisegenehmigung), das online vor der Reise beantragt wird. Beantragen Sie es mindestens 48 Stunden vor Abflug; Kinder benötigen ein eigenes ETA.',
    },
    {
      q: 'Können Sie Flitterwochen- oder Luxusreisen individuell gestalten?',
      a: 'Jede Sundown-Tours-Route ist maßgeschneidert. Wir organisieren Boutique-Hotels, private Dinner, Spa-Behandlungen und besondere Überraschungen für Flitterwochen und Luxusurlaube.',
    },
    {
      q: 'Wie buche ich eine Privatreise bei Sundown Tours?',
      a: 'Wählen Sie ein Reisepaket und eine Dauer und senden Sie eine Anfrage über das Kontaktformular oder WhatsApp. Wir antworten innerhalb von 24 Stunden mit einem maßgeschneiderten Vorschlag und transparenten Preisen.',
      links: [{ pageId: 'contact', label: 'Kontakt' }],
    },
  ],
};

const fr: HomeSeoContent = {
  tag: 'GUIDE DE VOYAGE',
  title: 'Le guide complet des circuits privés au Sri Lanka & séjours sur mesure',
  subtitle:
    'Rédigé par les experts locaux de Sundown Tours Sri Lanka – chauffeurs-guides agréés, itinéraires sur mesure et des milliers de voyageurs satisfaits venus de France, de Belgique, de Suisse et de toute l’Europe depuis 1992.',
  tocLabel: 'Sur cette page',
  seeAlsoLabel: 'À voir aussi',
  toc: [
    { label: 'Pourquoi le Sri Lanka', anchor: 'why-sri-lanka' },
    { label: 'Quand partir', anchor: 'best-time' },
    { label: 'Circuits privés', anchor: 'chauffeur-tours' },
    { label: 'Nos circuits', anchor: 'tour-packages' },
    { label: 'Safaris', anchor: 'wildlife-safaris' },
    { label: 'Triangle culturel', anchor: 'cultural-triangle' },
    { label: 'Pays du thé', anchor: 'tea-country' },
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
        'Le Sri Lanka est l’une des destinations insulaires les plus enrichissantes d’Asie pour les voyageurs européens en quête de diversité sans longs vols intérieurs. En un seul <strong>voyage au Sri Lanka</strong>, vous gravissez une forteresse rocheuse au lever du jour, traversez en train des plantations de thé embrumées, partez en safari aux léopards et terminez la semaine sur une plage bordée de palmiers.',
        'L’île étant compacte, un <strong>circuit privé au Sri Lanka</strong> bien pensé relie le triangle culturel, les montagnes, les parcs nationaux et la côte sud en sept à quatorze jours, à un rythme agréable et toujours flexible.',
        'Le Sri Lanka offre aussi un excellent rapport qualité-prix. Hôtels de charme, cuisine savoureuse et faune d’exception sont accessibles à des tarifs adaptés aux voyages de milieu de gamme comme aux <strong>circuits de luxe au Sri Lanka</strong>, et la chaleur de l’accueil met à l’aise dès l’arrivée.',
      ],
      subsections: [{ heading: 'Ce qui distingue le Sri Lanka des autres destinations asiatiques' }],
      cards: [
        { icon: 'fa-landmark', text: 'Huit sites classés à l’UNESCO, dont Sigiriya, Kandy et le fort de Galle.' },
        { icon: 'fa-globe', text: 'Voyage toute l’année – avec deux moussons, une côte est toujours ensoleillée.' },
        { icon: 'fa-route', text: 'Île compacte : la plupart des sites sont à trois à cinq heures de route.' },
        { icon: 'fa-paw', text: 'Faune exceptionnelle – éléphants, léopards, baleines bleues et oiseaux tropicaux.' },
        { icon: 'fa-utensils', text: 'Cuisine authentique aux épices, noix de coco, fruits de mer et légumes des montagnes.' },
        { icon: 'fa-car', text: 'Circuits privés avec chauffeur-guide dédié – sans autocars bondés.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Guide des destinations du Sri Lanka' },
        { pageId: 'tours', label: 'Nos circuits au Sri Lanka' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Quand partir au Sri Lanka ?',
      intro: [
        'Le Sri Lanka se visite toute l’année. Deux moussons touchant des côtes différentes à des périodes différentes, une région bénéficie presque toujours d’une météo idéale – l’essentiel est d’adapter l’itinéraire à vos dates.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'Côtes ouest & sud', meta: 'Novembre à avril', text: 'Haute saison pour fuir l’hiver. Colombo, Galle, Mirissa, Bentota et Hikkaduwa offrent mer calme et soleil.' },
        { icon: 'fa-water', title: 'Côte est', meta: 'Mai à septembre', text: 'Trincomalee, Pasikudah et Arugam Bay affichent leur meilleure météo pendant la mousson du sud-ouest.' },
        { icon: 'fa-mountain', title: 'Montagnes', meta: 'Toute l’année', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya et Dambulla se visitent toute l’année, avec des matinées dégagées.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Côtes ouest & sud (novembre à avril)',
          paras: [
            'Haute saison pour le soleil d’hiver. La côte sud est idéale pour les plages, l’observation des baleines et l’association d’une visite de Galle avec la faune du sud. La plupart des circuits de 7 et 10 jours suivent cette période.',
          ],
        },
        {
          heading: 'Côte est (mai à septembre)',
          paras: [
            'Tandis que la mousson du sud-ouest apporte la pluie à Colombo et Galle, la côte est profite de son meilleur climat. Les familles en vacances en juillet et août y prolongent souvent leur séjour balnéaire.',
          ],
        },
        {
          heading: 'Montagnes & triangle culturel',
          paras: [
            'Kandy, Ella, Nuwara Eliya, Sigiriya et Dambulla se visitent toute l’année. Les matinées sont généralement dégagées pour gravir Sigiriya ; les averses de l’après-midi perturbent rarement la journée.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Excursion à Galle' },
        { pageId: 'ellaDay', label: 'Excursion à Ella' },
        { pageId: 'kandyDay', label: 'Excursion à Kandy' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Circuits privés avec chauffeur-guide',
      intro: [
        'Un <strong>chauffeur-guide au Sri Lanka</strong> est bien plus qu’un conducteur : il est votre organisateur quotidien, votre interprète culturel et votre sécurité sur des routes inconnues. Chaque circuit privé Sundown Tours inclut un chauffeur-guide agréé et expérimenté parlant un anglais clair (autres langues sur demande).',
        'Les voyageurs européens apprécient le confort climatisé, la souplesse des horaires et la liberté de s’arrêter pour une photo, une plantation de thé ou un temple – vous n’êtes jamais lié à un programme de groupe.',
      ],
      subsections: [{ heading: 'Que comprend un circuit privé avec chauffeur ?' }],
      list: [
        'Véhicule dédié et chauffeur-guide agréé pour tout l’itinéraire',
        'Transferts aéroport à Colombo (CMB) ou aéroports régionaux',
        'Carburant, parking et hébergement du chauffeur, chiffrés en toute transparence',
        'Connaissance des routes, sites, restaurants et conditions saisonnières',
        'Aide pour l’enregistrement à l’hôtel, les jeeps de safari et les billets de train',
        'Un programme quotidien flexible – c’est vous qui donnez le rythme',
      ],
      seeAlso: [
        { pageId: 'about', label: 'À propos de Sundown Tours' },
        { pageId: 'services', label: 'Nos services' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Des circuits au Sri Lanka pour toutes les durées',
      intro: [
        'La bonne durée de votre <strong>circuit au Sri Lanka</strong> dépend de votre envie d’exploration. Les itinéraires courts conviennent aux habitués ou aux séjours plages ; les plus longs mêlent culture, faune et détente sans se presser. Chaque circuit est personnalisable.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Circuits courts', meta: '4–6 jours', text: 'Boucles ciblées : Sigiriya, Kandy, Ella et Yala.', linkPageId: 'tour4', linkLabel: 'Circuit 4 jours' },
        { icon: 'fa-calendar-alt', title: 'Une semaine', meta: '7–8 jours', text: 'Notre formule la plus prisée – triangle culturel, pays du thé, safari à Yala et plages.', linkPageId: 'tour7', linkLabel: 'Circuit 7 jours' },
        { icon: 'fa-calendar-alt', title: 'Grands circuits', meta: '10 jours et +', text: 'Patrimoine du centre-nord, plusieurs safaris, randonnées et plages tranquilles.', linkPageId: 'tour10', linkLabel: 'Circuit 10 jours' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Circuits courts (4–6 jours)',
          paras: [
            'Idéals en extension ou pour un voyage ciblé. Le circuit 4 jours couvre Sigiriya, Kandy, Ella et Yala ; le 5 jours ajoute du temps pour les temples et le train panoramique ; les familles préfèrent souvent le rythme plus doux du 6 jours.',
          ],
        },
        {
          heading: 'Une semaine (7–8 jours)',
          paras: [
            'Le circuit 7 jours est le plus prisé des voyageurs français et britanniques disposant d’une semaine, mêlant culture, pays du thé, safari à Yala et plages. Le 8 jours ajoute Wilpattu et Hikkaduwa.',
          ],
        },
        {
          heading: 'Grands circuits (10 jours et plus)',
          paras: [
            'Un circuit de 10 jours permet le patrimoine du centre-nord, plusieurs safaris, la randonnée en montagne et des plages tranquilles – prisé des couples en lune de miel et des familles multigénérationnelles.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour5', label: 'Circuit 5 jours' },
        { pageId: 'tour6', label: 'Circuit privé 6 jours' },
        { pageId: 'tour8', label: 'Circuit privé 8 jours' },
        { pageId: 'tours', label: 'Tous nos circuits' },
      ],
    },
    {
      anchor: 'wildlife-safaris',
      heading: 'Safaris & parc national de Yala',
      intro: [
        'Les <strong>safaris au Sri Lanka</strong> sont un temps fort pour les amoureux de nature. Les parcs sont compacts par rapport aux réserves africaines : léopards, ours lippus, éléphants, crocodiles et des centaines d’oiseaux s’observent en une demi-journée de jeep.',
      ],
      subsections: [
        {
          heading: 'Safari à Yala – le pays des léopards',
          paras: [
            'Le parc de Yala (bloc 1) présente l’une des plus fortes densités de léopards au monde. Les sorties matinales offrent la meilleure lumière et activité animale. Notre circuit Ella & Yala associe paysages de montagne et safari – prisé des photographes britanniques et polonais.',
          ],
        },
        {
          heading: 'Autres parcs de safari',
          list: [
            '<strong>Udawalawe</strong> – troupeaux d’éléphants fiables ; idéal en famille',
            '<strong>Wilpattu</strong> – territoire de léopards plus calme ; sur notre circuit 8 jours',
            '<strong>Minneriya / Kaudulla</strong> – rassemblements d’éléphants (juillet–octobre)',
            '<strong>Bundala</strong> – oiseaux de zones humides et migrateurs',
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
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'La forteresse rocheuse la plus emblématique, à 200 m au-dessus de la plaine.', linkPageId: 'sigiriyaDay', linkLabel: 'Excursion à Sigiriya' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'La dernière capitale royale et le Temple de la Dent sacrée.', linkPageId: 'kandyDay', linkLabel: 'Excursion à Kandy' },
        { icon: 'fa-train', title: 'Ella', text: 'Cœur des montagnes : randonnées, cafés et le Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Excursion à Ella' },
        { icon: 'fa-ship', title: 'Galle', text: 'Fort colonial hollandais classé UNESCO et remparts au coucher du soleil.', linkPageId: 'galleDay', linkLabel: 'Excursion à Galle' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'Le triangle culturel : Sigiriya, Kandy & cités antiques',
      intro: [
        'Le triangle culturel est le cœur historique du Sri Lanka, incontournable lors d’une première visite. Entre Kandy, Anuradhapura et Polonnaruwa se trouvent forteresses, temples troglodytes, palais royaux et traditions bouddhistes vieilles de plus de deux millénaires.',
      ],
      subsections: [
        {
          heading: 'Forteresse de Sigiriya',
          paras: [
            'Culminant à 200 m au-dessus de la plaine, Sigiriya est le site le plus emblématique du pays. Montez tôt le matin pour les fresques, le mur-miroir et la vue au sommet sur la canopée.',
          ],
        },
        {
          heading: 'Kandy & le Temple de la Dent',
          paras: [
            'Kandy, dernière capitale royale, borde un lac entouré de collines. Le Temple de la Dent sacrée est un lieu de pèlerinage vivant, souvent associé au jardin botanique de Peradeniya et à un spectacle de danse.',
          ],
        },
        {
          heading: 'Anuradhapura & Polonnaruwa',
          paras: [
            'Ces cités antiques offrent d’immenses stûpas, des sculptures et des ruines de monastères. Sur les circuits plus longs, nous incluons une visite à vélo de Polonnaruwa – un temps fort pour les passionnés d’histoire.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'sigiriyaDay', label: 'Excursion à Sigiriya' },
        { pageId: 'kandyDay', label: 'Excursion à Kandy' },
      ],
    },
    {
      anchor: 'tea-country',
      heading: 'Le pays du thé & la station d’Ella',
      intro: [
        'Les montagnes du Sri Lanka – l’historique pays du thé de Ceylan – offrent fraîcheur, panoramas spectaculaires et l’un des plus beaux trajets ferroviaires du monde. Nuwara Eliya paraît étonnamment européenne ; Ella est le centre des randonnées, cafés et du Nine Arch Bridge.',
        'Le train de Kandy à Ella figure parmi les plus belles lignes du monde. Nous réservons les places lorsque c’est possible et organisons des transferts privés si les horaires ne conviennent pas à votre programme.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Excursion à Ella' },
        { pageId: 'tour2ek', label: 'Circuit 2 jours Ella & Kandy' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Les plages & la côte sud du Sri Lanka',
      intro: [
        'Après la culture et le safari, la plupart des <strong>séjours au Sri Lanka</strong> se terminent à la plage. La côte sud allie le fort de Galle, le surf à Weligama et Mirissa, la baignade paisible à Unawatuna et l’observation des baleines à Mirissa (novembre–avril).',
        'Le fort de Galle est une cité fortifiée classée UNESCO aux bâtiments coloniaux hollandais. Hikkaduwa et Bentota proposent des hôtels-clubs pour les <strong>circuits de luxe</strong> ; Tangalle et Mirissa conviennent aux séjours plus intimes.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Excursion au fort de Galle' },
        { pageId: 'testimonials', label: 'Lire les avis' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Circuits de luxe & séjours sur mesure',
      intro: [
        'Les <strong>circuits de luxe au Sri Lanka</strong> misent sur l’intimité, l’espace et des expériences soignées – villas de charme en montagne, suites face à la mer à Galle, jeeps privées de safari et chauffeurs-guides attentifs à vos préférences.',
        'Nous concevons des <strong>séjours sur mesure</strong> avec des partenaires de luxe vérifiés et des prix transparents – sans commissions cachées ni arrêts shopping imposés.',
      ],
      list: [
        'Hôtels 5 étoiles et de charme aux meilleurs tarifs',
        'Guides privés pour l’archéologie, l’ornithologie ou la photographie',
        'Flotte de véhicules haut de gamme, SUV et vans spacieux pour les familles',
        'Organisation d’occasions spéciales – anniversaires, demandes en mariage',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Voyages en famille au Sri Lanka',
      intro: [
        'Le Sri Lanka est très adapté aux familles. Les distances sont raisonnables, les hôtels offrent chambres communicantes et piscines, et les enfants adorent orphelinats d’éléphants, écloseries de tortues, jardins d’épices et plages. Nos <strong>voyages en famille</strong> prévoient des jours de repos et des trajets plus courts.',
        'Pour les familles européennes avec enfants scolarisés, nous recommandons sept à dix jours – un itinéraire type mêle Sigiriya, un safari en jeep, le train Kandy–Ella et deux ou trois jours de plage.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Circuits adaptés aux familles' },
        { pageId: 'guides', label: 'Guides de voyage Sri Lanka' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Lune de miel & escapades romantiques au Sri Lanka',
      intro: [
        'Pour les couples de France, d’Italie et d’Espagne, la <strong>lune de miel au Sri Lanka</strong> mêle aventure et intimité – lever de soleil à Sigiriya, dîner aux chandelles dans un bungalow de plantation, catamaran sur la côte sud et villa avec piscine face à l’océan.',
        'Sur demande, nous organisons fleurs, gâteaux surprises, soins spa en duo et séances photo. Les itinéraires lune de miel durent généralement huit à quatorze jours, à un rythme détendu.',
      ],
      seeAlso: [{ pageId: 'tour7', label: 'Idée lune de miel 7 jours' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'POURQUOI NOUS',
      heading: 'Experts locaux de confiance depuis 1992',
      cards: [
        { icon: 'fa-clock', title: 'Depuis 1992', text: 'Plus de trois décennies de service fiable aux voyageurs du monde entier.' },
        { icon: 'fa-user', title: 'Guides agréés', text: 'Chauffeurs-guides agréés à la connaissance locale approfondie.' },
        { icon: 'fa-heart', title: 'Voyageurs satisfaits', text: 'Des milliers de voyageurs satisfaits venus de toute l’Europe.' },
        { icon: 'fa-map-marker-alt', title: 'Sur mesure', text: 'Chaque itinéraire est personnalisé – jamais d’autocar standardisé.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Parler à notre équipe' },
        { pageId: 'about', label: 'Notre histoire' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Préparer votre voyage au Sri Lanka depuis l’Europe',
      intro: [
        'Des vols directs et avec escale relient Colombo à Paris, Genève, Bruxelles, Milan, Madrid et d’autres villes. La plupart des voyageurs européens arrivent de nuit et commencent leur circuit le lendemain – votre chauffeur vous accueille à l’aéroport Bandaranaike (CMB).',
      ],
      subsections: [
        {
          heading: 'Conseils essentiels pour le Sri Lanka',
          list: [
            'Vêtements légers et respirants, plus une couche pour les matinées en montagne',
            'Retirer ses chaussures et couvrir épaules et genoux dans les temples',
            'Réserver tôt les créneaux de Sigiriya et du safari de Yala en haute saison',
            'Goûter les hoppers, le kottu roti et le curry de poisson frais',
            'Prévoir crème solaire et anti-moustiques pour le safari et les dîners',
            'Conserver des copies du passeport et de l’autorisation ETA',
          ],
        },
        {
          heading: 'Visa (ETA) pour les citoyens européens',
          paras: [
            'La plupart des ressortissants européens ont besoin d’une autorisation électronique de voyage (ETA) avant l’arrivée. Faites la demande en ligne au moins 24 à 48 heures avant le départ et conservez l’approbation et le numéro de référence. Les enfants ont besoin de leur propre ETA.',
          ],
        },
        {
          heading: 'Le Sri Lanka est-il sûr pour les touristes ?',
          paras: [
            'Le Sri Lanka est globalement sûr et accueillant ; des millions de visiteurs s’y rendent chaque année sans incident. Voyager avec un chauffeur-guide réputé d’un voyagiste établi élimine la plupart des tracas liés au transport, aux prix et à l’organisation.',
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
  faqHeading: 'Questions fréquentes sur les circuits au Sri Lanka',
  faqs: [
    {
      q: 'Combien de jours faut-il pour un circuit au Sri Lanka ?',
      a: 'Sept à dix jours conviennent à la plupart des primo-visiteurs européens. Un circuit de 7 jours couvre culture, montagnes, safari et plages ; quatorze jours permettent le nord, l’est et la côte sud de luxe sans se presser.',
    },
    {
      q: 'Quelle différence entre un circuit en groupe et un circuit privé ?',
      a: 'Un circuit privé vous offre un véhicule et un chauffeur-guide dédiés : vous choisissez horaires, arrêts et hôtels. Les circuits en autocar suivent des programmes fixes. Sundown Tours se consacre exclusivement au voyage privé sur mesure.',
    },
    {
      q: 'Un chauffeur-guide en vaut-il la peine ?',
      a: 'Oui. L’état des routes, les virages non signalés et la circulation dense rendent la conduite stressante. Un guide agréé fait gagner du temps, explique la culture, gère les billets et adapte l’itinéraire selon la météo.',
    },
    {
      q: 'Quelle est la meilleure période pour un safari à Yala ?',
      a: 'Le bloc 1 de Yala est ouvert toute l’année ; les mois secs (février–juillet) facilitent l’observation des léopards, les animaux se regroupant près de l’eau. Préférez les safaris matinaux pour la fraîcheur et la lumière.',
    },
    {
      q: 'Les circuits conviennent-ils aux familles avec enfants ?',
      a: 'Tout à fait. Trajets plus courts, piscines, orphelinats d’éléphants, écloseries de tortues et plages ravissent les enfants. Nous planifions des circuits familiaux au rythme souple avec des restaurants adaptés.',
    },
    {
      q: 'Faut-il un visa pour le Sri Lanka ?',
      a: 'La plupart des citoyens européens ont besoin d’une ETA (autorisation électronique de voyage) obtenue en ligne avant le départ. Faites la demande au moins 48 heures à l’avance ; les enfants ont besoin de leur propre ETA.',
    },
    {
      q: 'Pouvez-vous personnaliser une lune de miel ou un circuit de luxe ?',
      a: 'Chaque itinéraire Sundown Tours est sur mesure. Nous organisons hôtels de charme, dîners privés, soins spa et surprises pour les lunes de miel et séjours de luxe.',
    },
    {
      q: 'Comment réserver un circuit privé avec Sundown Tours ?',
      a: 'Parcourez nos circuits, choisissez une durée et envoyez une demande via le formulaire de contact ou WhatsApp. Nous répondons sous 24 heures avec une proposition sur mesure et des prix transparents.',
      links: [{ pageId: 'contact', label: 'Nous contacter' }],
    },
  ],
};

const it: HomeSeoContent = {
  tag: 'GUIDA DI VIAGGIO',
  title: 'La guida completa ai tour privati in Sri Lanka & vacanze su misura',
  subtitle:
    'Scritta dagli esperti locali di Sundown Tours Sri Lanka – autisti-guida autorizzati, itinerari su misura e migliaia di viaggiatori soddisfatti da Italia, Svizzera e da tutta Europa dal 1992.',
  tocLabel: 'In questa pagina',
  seeAlsoLabel: 'Vedi anche',
  toc: [
    { label: 'Perché lo Sri Lanka', anchor: 'why-sri-lanka' },
    { label: 'Quando andare', anchor: 'best-time' },
    { label: 'Tour privati', anchor: 'chauffeur-tours' },
    { label: 'I nostri tour', anchor: 'tour-packages' },
    { label: 'Safari', anchor: 'wildlife-safaris' },
    { label: 'Triangolo culturale', anchor: 'cultural-triangle' },
    { label: 'Regione del tè', anchor: 'tea-country' },
    { label: 'Spiagge', anchor: 'beaches' },
    { label: 'In famiglia', anchor: 'family-tours' },
    { label: 'Luna di miele', anchor: 'honeymoon' },
    { label: 'Perché noi', anchor: 'why-choose-us' },
    { label: 'FAQ', anchor: 'faq-heading' },
  ],
  sections: [
    {
      anchor: 'why-sri-lanka',
      heading: 'Perché visitare lo Sri Lanka?',
      intro: [
        'Lo Sri Lanka è una delle isole più appaganti dell’Asia per i viaggiatori europei che cercano varietà senza lunghi voli interni. In un solo <strong>viaggio in Sri Lanka</strong> puoi salire su un’antica fortezza rocciosa all’alba, attraversare in treno piantagioni di tè avvolte dalla nebbia, fare un safari ai leopardi e chiudere la settimana su una spiaggia di palme.',
        'Essendo l’isola compatta, un <strong>tour privato in Sri Lanka</strong> ben pianificato collega il triangolo culturale, le montagne, i parchi nazionali e la costa sud in sette-quattordici giorni, a un ritmo piacevole e sempre flessibile.',
        'Lo Sri Lanka offre anche un ottimo rapporto qualità-prezzo. Hotel di charme, cucina eccellente e fauna di livello mondiale sono accessibili a prezzi adatti sia alla fascia media sia ai <strong>tour di lusso in Sri Lanka</strong>, e il calore dell’accoglienza mette a proprio agio fin dall’arrivo.',
      ],
      subsections: [{ heading: 'Cosa distingue lo Sri Lanka dalle altre mete asiatiche' }],
      cards: [
        { icon: 'fa-landmark', text: 'Otto siti UNESCO, tra cui Sigiriya, Kandy e il Forte di Galle.' },
        { icon: 'fa-globe', text: 'Viaggi tutto l’anno – con due monsoni c’è sempre una costa soleggiata.' },
        { icon: 'fa-route', text: 'Isola compatta: gran parte delle attrazioni è a tre-cinque ore di strada.' },
        { icon: 'fa-paw', text: 'Fauna eccezionale – elefanti, leopardi, balenottere azzurre e uccelli tropicali.' },
        { icon: 'fa-utensils', text: 'Cucina autentica con spezie, cocco, pesce e verdure di montagna.' },
        { icon: 'fa-car', text: 'Tour privati con autista-guida dedicato – niente pullman affollati.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Guida alle destinazioni' },
        { pageId: 'tours', label: 'I nostri tour in Sri Lanka' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Quando andare in Sri Lanka',
      intro: [
        'Lo Sri Lanka si visita tutto l’anno. Poiché due monsoni interessano coste diverse in periodi diversi, quasi sempre una regione gode di clima ideale – l’importante è adattare l’itinerario alle tue date.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'Coste ovest e sud', meta: 'Novembre–aprile', text: 'Alta stagione per il sole invernale. Colombo, Galle, Mirissa, Bentota e Hikkaduwa offrono mare calmo e sole.' },
        { icon: 'fa-water', title: 'Costa est', meta: 'Maggio–settembre', text: 'Trincomalee, Pasikudah e Arugam Bay danno il meglio mentre altrove piove per il monsone di sud-ovest.' },
        { icon: 'fa-mountain', title: 'Montagne', meta: 'Tutto l’anno', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya e Dambulla si visitano tutto l’anno, con mattinate limpide.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Coste ovest e sud (novembre–aprile)',
          paras: [
            'Alta stagione per chi cerca il sole invernale. La costa sud è ideale per spiagge, whale watching e per unire una gita a Galle con la fauna del sud. La maggior parte dei tour di 7 e 10 giorni segue questo periodo.',
          ],
        },
        {
          heading: 'Costa est (maggio–settembre)',
          paras: [
            'Mentre il monsone di sud-ovest porta pioggia a Colombo e Galle, la costa est vive il suo clima migliore. Le famiglie in vacanza a luglio e agosto vi prolungano spesso il soggiorno balneare.',
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
        { pageId: 'galleDay', label: 'Escursione a Galle' },
        { pageId: 'ellaDay', label: 'Escursione a Ella' },
        { pageId: 'kandyDay', label: 'Escursione a Kandy' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Tour privati con autista-guida',
      intro: [
        'Un <strong>autista-guida in Sri Lanka</strong> è molto più di un conducente: è il tuo organizzatore quotidiano, interprete culturale e sicurezza su strade sconosciute. Ogni tour privato Sundown Tours include un autista-guida autorizzato ed esperto che parla un inglese chiaro (altre lingue su richiesta).',
        'I viaggiatori europei apprezzano il comfort climatizzato, gli orari flessibili e la libertà di fermarsi per una foto, una piantagione di tè o un tempio – non sei mai vincolato a un programma di gruppo.',
      ],
      subsections: [{ heading: 'Cosa include un tour privato con autista?' }],
      list: [
        'Veicolo dedicato e autista-guida autorizzato per tutto l’itinerario',
        'Transfer aeroportuali a Colombo (CMB) o aeroporti regionali',
        'Carburante, parcheggio e alloggio dell’autista, quotati in modo trasparente',
        'Conoscenza di strade, attrazioni, ristoranti e condizioni stagionali',
        'Assistenza per check-in, jeep per il safari e biglietti del treno',
        'Un programma giornaliero flessibile – il ritmo lo decidi tu',
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
        'La durata giusta del tuo <strong>tour in Sri Lanka</strong> dipende da quanto vuoi esplorare. Gli itinerari brevi vanno bene per chi torna o per vacanze al mare; i più lunghi uniscono cultura, fauna e relax senza fretta. Ogni tour è personalizzabile.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Tour brevi', meta: '4–6 giorni', text: 'Percorsi mirati: Sigiriya, Kandy, Ella e Yala.', linkPageId: 'tour4', linkLabel: 'Tour 4 giorni' },
        { icon: 'fa-calendar-alt', title: 'Una settimana', meta: '7–8 giorni', text: 'La scelta più amata – triangolo culturale, regione del tè, safari a Yala e spiagge.', linkPageId: 'tour7', linkLabel: 'Tour 7 giorni' },
        { icon: 'fa-calendar-alt', title: 'Grandi tour', meta: '10+ giorni', text: 'Patrimonio del centro-nord, più safari, trekking e giornate di mare rilassate.', linkPageId: 'tour10', linkLabel: 'Tour 10 giorni' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Tour brevi (4–6 giorni)',
          paras: [
            'Ideali come estensione o per un viaggio mirato. Il tour di 4 giorni copre Sigiriya, Kandy, Ella e Yala; quello di 5 aggiunge tempo per i templi e il treno panoramico; le famiglie preferiscono spesso il ritmo più tranquillo dei 6 giorni.',
          ],
        },
        {
          heading: 'Una settimana (7–8 giorni)',
          paras: [
            'Il tour di 7 giorni è il più amato da chi ha una settimana, unendo cultura, regione del tè, safari a Yala e spiagge. Quello di 8 giorni aggiunge Wilpattu e Hikkaduwa.',
          ],
        },
        {
          heading: 'Grandi tour (10+ giorni)',
          paras: [
            'Un tour di 10 giorni permette i siti del centro-nord, più safari, trekking in montagna e spiagge tranquille – amato da coppie in luna di miele e famiglie multigenerazionali.',
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
          heading: 'Safari a Yala – il regno del leopardo',
          paras: [
            'Il parco di Yala (blocco 1) ha una delle densità di leopardi più alte al mondo. Le uscite mattutine offrono luce e attività migliori. Il nostro tour Ella & Yala unisce paesaggi di montagna e safari – amato dai fotografi britannici e polacchi.',
          ],
        },
        {
          heading: 'Altri parchi per il safari',
          list: [
            '<strong>Udawalawe</strong> – branchi di elefanti garantiti; ideale per famiglie',
            '<strong>Wilpattu</strong> – territorio di leopardi più tranquillo; nel tour di 8 giorni',
            '<strong>Minneriya / Kaudulla</strong> – raduni di elefanti (luglio–ottobre)',
            '<strong>Bundala</strong> – uccelli di zone umide e migratori',
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
      heading: 'Destinazioni più amate dello Sri Lanka',
      cards: [
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'La fortezza rocciosa più iconica, a 200 m sulla pianura.', linkPageId: 'sigiriyaDay', linkLabel: 'Escursione a Sigiriya' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'L’ultima capitale reale e il Tempio del Dente.', linkPageId: 'kandyDay', linkLabel: 'Escursione a Kandy' },
        { icon: 'fa-train', title: 'Ella', text: 'Cuore delle montagne: trekking, caffè e il Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Escursione a Ella' },
        { icon: 'fa-ship', title: 'Galle', text: 'Forte coloniale olandese UNESCO e mura al tramonto.', linkPageId: 'galleDay', linkLabel: 'Escursione a Galle' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'Il triangolo culturale: Sigiriya, Kandy & città antiche',
      intro: [
        'Il triangolo culturale è il cuore storico dello Sri Lanka, imperdibile alla prima visita. Tra Kandy, Anuradhapura e Polonnaruwa trovi fortezze rocciose, templi rupestri, palazzi reali e tradizioni buddhiste vecchie di oltre due millenni.',
      ],
      subsections: [
        {
          heading: 'Fortezza di Sigiriya',
          paras: [
            'Alta 200 m sulla pianura, Sigiriya è il simbolo del Paese. Sali di primo mattino per affreschi, muro a specchio e vista sulla foresta dalla cima.',
          ],
        },
        {
          heading: 'Kandy & il Tempio del Dente',
          paras: [
            'Kandy, ultima capitale reale, si affaccia su un lago tra le colline. Il Tempio del Dente è un luogo di pellegrinaggio vivo con puja quotidiane, spesso unito al giardino botanico di Peradeniya e a uno spettacolo di danza.',
          ],
        },
        {
          heading: 'Anuradhapura & Polonnaruwa',
          paras: [
            'Queste città antiche offrono enormi stupa, sculture e rovine di monasteri. Nei tour più lunghi includiamo una visita in bici a Polonnaruwa – un piacere per gli appassionati di storia.',
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
      heading: 'La regione del tè & la stazione di Ella',
      intro: [
        'Le montagne dello Sri Lanka – la storica regione del tè di Ceylon – offrono temperature fresche, panorami spettacolari e uno dei viaggi in treno più belli al mondo. Nuwara Eliya sembra sorprendentemente europea; Ella è il centro di trekking, caffè e del Nine Arch Bridge.',
        'Il treno da Kandy a Ella è tra le ferrovie più belle del mondo. Prenotiamo i posti quando possibile e organizziamo transfer privati se gli orari non coincidono con il tuo programma.',
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
        'Dopo cultura e safari, gran parte delle <strong>vacanze in Sri Lanka</strong> si chiude al mare. La costa sud unisce il Forte di Galle, il surf a Weligama e Mirissa, il nuoto tranquillo a Unawatuna e il whale watching da Mirissa (novembre–aprile).',
        'Il Forte di Galle è una città fortificata UNESCO con edifici coloniali olandesi. Hikkaduwa e Bentota offrono resort per i <strong>tour di lusso</strong>; Tangalle e Mirissa sono ideali per soggiorni più intimi.',
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
        'I <strong>tour di lusso in Sri Lanka</strong> puntano su privacy, spazio ed esperienze curate – ville di charme in montagna, suite fronte mare a Galle, jeep private per il safari e autisti-guida attenti alle tue preferenze.',
        'Progettiamo <strong>vacanze su misura</strong> con partner di lusso verificati e prezzi trasparenti – senza commissioni nascoste né soste shopping obbligate.',
      ],
      list: [
        'Hotel 5 stelle e di charme alle migliori tariffe disponibili',
        'Guide private per archeologia, birdwatching o fotografia',
        'Flotta di lusso con SUV e van spaziosi per le famiglie',
        'Organizzazione di occasioni speciali – anniversari, proposte di matrimonio',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Viaggi in famiglia in Sri Lanka',
      intro: [
        'Lo Sri Lanka è molto adatto alle famiglie. Le distanze sono gestibili, gli hotel offrono camere comunicanti e piscine, e i bambini amano orfanotrofi degli elefanti, vivai di tartarughe, giardini delle spezie e spiagge. I nostri <strong>viaggi in famiglia</strong> prevedono giorni di riposo e tratte più brevi.',
        'Per le famiglie europee con bambini in età scolare consigliamo sette-dieci giorni – un itinerario tipo unisce Sigiriya, un safari in jeep, il treno Kandy–Ella e due o tre giorni di mare.',
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
        'Per le coppie di Italia, Francia e Spagna, la <strong>luna di miele in Sri Lanka</strong> unisce avventura e intimità – alba a Sigiriya, cena a lume di candela in un bungalow tra le piantagioni, catamarano sulla costa sud e villa con piscina sull’oceano.',
        'Su richiesta organizziamo fiori, torte sorpresa, spa di coppia e servizi fotografici. Gli itinerari luna di miele durano di solito otto-quattordici giorni, a ritmo rilassato.',
      ],
      seeAlso: [{ pageId: 'tour7', label: 'Idea luna di miele 7 giorni' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'PERCHÉ NOI',
      heading: 'Esperti locali di fiducia dal 1992',
      cards: [
        { icon: 'fa-clock', title: 'Dal 1992', text: 'Oltre trent’anni di servizio affidabile ai viaggiatori internazionali.' },
        { icon: 'fa-user', title: 'Guide autorizzate', text: 'Autisti-guida autorizzati con profonda conoscenza locale.' },
        { icon: 'fa-heart', title: 'Viaggiatori felici', text: 'Migliaia di viaggiatori soddisfatti da tutta Europa.' },
        { icon: 'fa-map-marker-alt', title: 'Su misura', text: 'Ogni itinerario è personalizzato – mai tour in pullman standard.' },
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
        'Voli diretti e con scalo collegano Colombo a Milano, Roma, Zurigo, Parigi, Madrid e altre città. La maggior parte dei viaggiatori europei arriva di notte e inizia il tour il mattino dopo – il tuo autista ti accoglie all’aeroporto Bandaranaike (CMB).',
      ],
      subsections: [
        {
          heading: 'Consigli utili per lo Sri Lanka',
          list: [
            'Abbigliamento leggero e traspirante, più uno strato per le mattine in montagna',
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
            'La maggior parte dei cittadini europei necessita di un’autorizzazione elettronica di viaggio (ETA) prima dell’arrivo. Richiedila online almeno 24–48 ore prima della partenza e conserva approvazione e numero di riferimento. I bambini necessitano di un proprio ETA.',
          ],
        },
        {
          heading: 'Lo Sri Lanka è sicuro per i turisti?',
          paras: [
            'Lo Sri Lanka è generalmente sicuro e accogliente; milioni di visitatori vi si recano ogni anno senza problemi. Viaggiare con un autista-guida affidabile di un operatore affermato elimina gran parte delle preoccupazioni su trasporti, prezzi e organizzazione.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Guide di viaggio' },
        { pageId: 'restaurants', label: 'Ristoranti in Sri Lanka' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Domande frequenti sui tour in Sri Lanka',
  faqs: [
    {
      q: 'Di quanti giorni ho bisogno per un tour in Sri Lanka?',
      a: 'Sette-dieci giorni vanno bene per la maggior parte dei primi visitatori europei. Un tour di 7 giorni copre cultura, montagne, safari e spiagge; quattordici giorni permettono nord, est e costa sud di lusso senza fretta.',
    },
    {
      q: 'Che differenza c’è tra un tour di gruppo e un tour privato?',
      a: 'Un tour privato ti offre veicolo e autista-guida dedicati: scegli tu orari, soste e hotel. I tour in pullman seguono programmi fissi. Sundown Tours si dedica esclusivamente al viaggio privato su misura.',
    },
    {
      q: 'Vale la pena un autista-guida in Sri Lanka?',
      a: 'Sì. Condizioni stradali, svolte non segnalate e traffico rendono stressante guidare da soli. Una guida autorizzata fa risparmiare tempo, racconta la cultura, gestisce i biglietti e adatta l’itinerario al meteo.',
    },
    {
      q: 'Qual è il periodo migliore per un safari a Yala?',
      a: 'Il blocco 1 di Yala è aperto tutto l’anno; nei mesi secchi (febbraio–luglio) è più facile avvistare i leopardi, perché gli animali si radunano vicino all’acqua. Preferisci i safari mattutini per fresco e luce migliore.',
    },
    {
      q: 'I tour sono adatti alle famiglie con bambini?',
      a: 'Assolutamente. Tratte più brevi, piscine, orfanotrofi di elefanti, vivai di tartarughe e spiagge tengono impegnati i bambini. Pianifichiamo tour familiari con ritmo flessibile e ristoranti adatti.',
    },
    {
      q: 'Serve un visto per lo Sri Lanka?',
      a: 'La maggior parte dei cittadini europei necessita di un ETA (autorizzazione elettronica di viaggio) ottenuto online prima della partenza. Richiedilo almeno 48 ore prima; i bambini necessitano di un proprio ETA.',
    },
    {
      q: 'Potete personalizzare una luna di miele o un tour di lusso?',
      a: 'Ogni itinerario Sundown Tours è su misura. Organizziamo hotel di charme, cene private, trattamenti spa e sorprese speciali per lune di miele e vacanze di lusso.',
    },
    {
      q: 'Come prenoto un tour privato con Sundown Tours?',
      a: 'Sfoglia i nostri tour, scegli una durata e invia una richiesta tramite il modulo di contatto o WhatsApp. Rispondiamo entro 24 ore con una proposta su misura e prezzi trasparenti.',
      links: [{ pageId: 'contact', label: 'Contattaci' }],
    },
  ],
};

const es: HomeSeoContent = {
  tag: 'GUÍA DE VIAJE',
  title: 'La guía completa de circuitos privados por Sri Lanka y viajes a medida',
  subtitle:
    'Escrita por los expertos locales de Sundown Tours Sri Lanka: chóferes-guía autorizados, itinerarios a medida y miles de viajeros satisfechos de España, América Latina y toda Europa desde 1992.',
  tocLabel: 'En esta página',
  seeAlsoLabel: 'Ver también',
  toc: [
    { label: 'Por qué Sri Lanka', anchor: 'why-sri-lanka' },
    { label: 'Cuándo viajar', anchor: 'best-time' },
    { label: 'Circuitos privados', anchor: 'chauffeur-tours' },
    { label: 'Nuestros circuitos', anchor: 'tour-packages' },
    { label: 'Safaris', anchor: 'wildlife-safaris' },
    { label: 'Triángulo cultural', anchor: 'cultural-triangle' },
    { label: 'País del té', anchor: 'tea-country' },
    { label: 'Playas', anchor: 'beaches' },
    { label: 'En familia', anchor: 'family-tours' },
    { label: 'Luna de miel', anchor: 'honeymoon' },
    { label: 'Por qué elegirnos', anchor: 'why-choose-us' },
    { label: 'FAQ', anchor: 'faq-heading' },
  ],
  sections: [
    {
      anchor: 'why-sri-lanka',
      heading: '¿Por qué visitar Sri Lanka?',
      intro: [
        'Sri Lanka es uno de los destinos insulares más gratificantes de Asia para los viajeros europeos que buscan variedad sin largos vuelos internos. En un solo <strong>viaje a Sri Lanka</strong> puedes subir a una antigua fortaleza rocosa al amanecer, cruzar en tren plantaciones de té entre la niebla, hacer un safari de leopardos y cerrar la semana en una playa de palmeras.',
        'Como la isla es compacta, un <strong>circuito privado por Sri Lanka</strong> bien planificado une el triángulo cultural, la montaña, los parques nacionales y la costa sur en siete a catorce días, a un ritmo cómodo y siempre flexible.',
        'Sri Lanka ofrece además una excelente relación calidad-precio. Hoteles con encanto, buena gastronomía y fauna de primer nivel a precios adecuados tanto para viajes de gama media como para <strong>circuitos de lujo por Sri Lanka</strong>, y la calidez de su gente hace sentir bienvenido desde la llegada.',
      ],
      subsections: [{ heading: 'Qué diferencia a Sri Lanka de otros destinos asiáticos' }],
      cards: [
        { icon: 'fa-landmark', text: 'Ocho sitios Patrimonio de la Humanidad, entre ellos Sigiriya, Kandy y el Fuerte de Galle.' },
        { icon: 'fa-globe', text: 'Viajes todo el año: con dos monzones siempre hay una costa soleada.' },
        { icon: 'fa-route', text: 'Isla compacta: la mayoría de lugares están a tres o cinco horas por carretera.' },
        { icon: 'fa-paw', text: 'Fauna excepcional: elefantes, leopardos, ballenas azules y aves tropicales.' },
        { icon: 'fa-utensils', text: 'Cocina auténtica con especias, coco, marisco y verduras de montaña.' },
        { icon: 'fa-car', text: 'Circuitos privados con chófer-guía propio, sin autobuses abarrotados.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Guía de destinos de Sri Lanka' },
        { pageId: 'tours', label: 'Nuestros circuitos por Sri Lanka' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Cuándo viajar a Sri Lanka',
      intro: [
        'Sri Lanka se visita todo el año. Como dos monzones afectan a costas distintas en momentos distintos, casi siempre hay una región con clima ideal; la clave es adaptar el itinerario a tus fechas.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'Costas oeste y sur', meta: 'Noviembre a abril', text: 'Temporada alta para el sol de invierno. Colombo, Galle, Mirissa, Bentota y Hikkaduwa con mar en calma y sol.' },
        { icon: 'fa-water', title: 'Costa este', meta: 'Mayo a septiembre', text: 'Trincomalee, Pasikudah y Arugam Bay dan su mejor clima mientras el monzón del suroeste trae lluvia en otras zonas.' },
        { icon: 'fa-mountain', title: 'Montaña', meta: 'Todo el año', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya y Dambulla se visitan todo el año, con mañanas despejadas.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Costas oeste y sur (noviembre a abril)',
          paras: [
            'Temporada alta para el sol de invierno. La costa sur es ideal para playa, avistamiento de ballenas y combinar una visita a Galle con la fauna del sur. La mayoría de los circuitos de 7 y 10 días siguen esta época.',
          ],
        },
        {
          heading: 'Costa este (mayo a septiembre)',
          paras: [
            'Mientras el monzón del suroeste lleva lluvia a Colombo y Galle, la costa este disfruta de su mejor clima. Las familias con vacaciones en julio y agosto suelen ampliar allí su estancia de playa.',
          ],
        },
        {
          heading: 'Montaña y triángulo cultural',
          paras: [
            'Kandy, Ella, Nuwara Eliya, Sigiriya y Dambulla funcionan todo el año. Las mañanas suelen estar despejadas para subir a Sigiriya; los chubascos de tarde rara vez estropean el día.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Excursión a Galle' },
        { pageId: 'ellaDay', label: 'Excursión a Ella' },
        { pageId: 'kandyDay', label: 'Excursión a Kandy' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Circuitos privados con chófer-guía',
      intro: [
        'Un <strong>chófer-guía en Sri Lanka</strong> es mucho más que un conductor: es tu organizador diario, intérprete cultural y seguridad en carreteras desconocidas. Cada circuito privado de Sundown Tours incluye un chófer-guía autorizado y experimentado que habla un inglés claro (otros idiomas bajo petición).',
        'Los viajeros europeos valoran el confort del aire acondicionado, los horarios flexibles y la libertad de parar para una foto, una plantación de té o un templo; nunca estás atado a un programa de grupo.',
      ],
      subsections: [{ heading: '¿Qué incluye un circuito privado con chófer?' }],
      list: [
        'Vehículo propio y chófer-guía autorizado para todo el itinerario',
        'Traslados de aeropuerto en Colombo (CMB) o aeropuertos regionales',
        'Combustible, aparcamiento y alojamiento del chófer, con precio transparente',
        'Conocimiento de carreteras, lugares, restaurantes y condiciones de temporada',
        'Ayuda con el check-in, los jeeps de safari y los billetes de tren',
        'Un programa diario flexible: tú marcas el ritmo',
      ],
      seeAlso: [
        { pageId: 'about', label: 'Sobre Sundown Tours' },
        { pageId: 'services', label: 'Nuestros servicios' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Circuitos por Sri Lanka para cada duración',
      intro: [
        'La duración ideal de tu <strong>circuito por Sri Lanka</strong> depende de cuánto quieras explorar. Los itinerarios cortos van bien para repetidores o viajes de playa; los más largos combinan cultura, fauna y descanso sin prisas. Todos son personalizables.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Circuitos cortos', meta: '4–6 días', text: 'Rutas centradas: Sigiriya, Kandy, Ella y Yala.', linkPageId: 'tour4', linkLabel: 'Circuito 4 días' },
        { icon: 'fa-calendar-alt', title: 'Una semana', meta: '7–8 días', text: 'La opción más popular: triángulo cultural, país del té, safari en Yala y playas.', linkPageId: 'tour7', linkLabel: 'Circuito 7 días' },
        { icon: 'fa-calendar-alt', title: 'Grandes circuitos', meta: '10+ días', text: 'Patrimonio del centro-norte, varios safaris, senderismo y playas relajadas.', linkPageId: 'tour10', linkLabel: 'Circuito 10 días' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Circuitos cortos (4–6 días)',
          paras: [
            'Ideales como extensión o para un viaje concreto. El de 4 días cubre Sigiriya, Kandy, Ella y Yala; el de 5 añade tiempo para templos y el tren panorámico; las familias prefieren a menudo el ritmo más tranquilo del de 6 días.',
          ],
        },
        {
          heading: 'Una semana (7–8 días)',
          paras: [
            'El circuito de 7 días es el más popular para quienes tienen una semana, con cultura, país del té, safari en Yala y playas. El de 8 días añade Wilpattu y Hikkaduwa.',
          ],
        },
        {
          heading: 'Grandes circuitos (10+ días)',
          paras: [
            'Un circuito de 10 días permite los sitios del centro-norte, varios safaris, senderismo de montaña y playas tranquilas; muy popular entre parejas en luna de miel y familias multigeneracionales.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour5', label: 'Circuito 5 días' },
        { pageId: 'tour6', label: 'Circuito privado 6 días' },
        { pageId: 'tour8', label: 'Circuito privado 8 días' },
        { pageId: 'tours', label: 'Todos los circuitos' },
      ],
    },
    {
      anchor: 'wildlife-safaris',
      heading: 'Safaris y Parque Nacional de Yala',
      intro: [
        'Los <strong>safaris en Sri Lanka</strong> son un momento estrella para los amantes de la naturaleza. Los parques son compactos frente a las reservas africanas: leopardos, osos bezudos, elefantes, cocodrilos y cientos de aves se ven en medio día de jeep.',
      ],
      subsections: [
        {
          heading: 'Safari en Yala, el reino del leopardo',
          paras: [
            'El parque de Yala (bloque 1) tiene una de las mayores densidades de leopardos del mundo. Las salidas de la mañana ofrecen mejor luz y actividad animal. Nuestro circuito Ella y Yala combina paisajes de montaña y safari; favorito de fotógrafos británicos y polacos.',
          ],
        },
        {
          heading: 'Otros parques para safari',
          list: [
            '<strong>Udawalawe</strong>: manadas de elefantes garantizadas; ideal en familia',
            '<strong>Wilpattu</strong>: territorio de leopardos más tranquilo; en el circuito de 8 días',
            '<strong>Minneriya / Kaudulla</strong>: concentraciones de elefantes (julio–octubre)',
            '<strong>Bundala</strong>: aves de humedal y migratorias',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'tour2ey', label: 'Circuito 2 días Ella y Yala' },
        { pageId: 'tours', label: 'Circuitos con safari' },
      ],
    },
    {
      anchor: 'destinations-cards',
      eyebrow: 'DESTINOS',
      heading: 'Destinos más populares de Sri Lanka',
      cards: [
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'La fortaleza rocosa más icónica, a 200 m sobre la llanura.', linkPageId: 'sigiriyaDay', linkLabel: 'Excursión a Sigiriya' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'La última capital real y el Templo del Diente.', linkPageId: 'kandyDay', linkLabel: 'Excursión a Kandy' },
        { icon: 'fa-train', title: 'Ella', text: 'Corazón de la montaña: senderismo, cafés y el Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Excursión a Ella' },
        { icon: 'fa-ship', title: 'Galle', text: 'Fuerte colonial holandés Patrimonio de la Humanidad y murallas al atardecer.', linkPageId: 'galleDay', linkLabel: 'Excursión a Galle' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'El triángulo cultural: Sigiriya, Kandy y ciudades antiguas',
      intro: [
        'El triángulo cultural es el corazón histórico de Sri Lanka e imprescindible en una primera visita. Entre Kandy, Anuradhapura y Polonnaruwa hay fortalezas rocosas, templos rupestres, palacios reales y tradiciones budistas de más de dos milenios.',
      ],
      subsections: [
        {
          heading: 'Fortaleza de Sigiriya',
          paras: [
            'A 200 m sobre la llanura, Sigiriya es el símbolo del país. Sube temprano por la mañana para ver los frescos, el muro espejo y las vistas de la selva desde la cima.',
          ],
        },
        {
          heading: 'Kandy y el Templo del Diente',
          paras: [
            'Kandy, última capital real, se asoma a un lago rodeado de colinas. El Templo del Diente es un lugar de peregrinación vivo con ceremonias puja diarias, a menudo combinado con el jardín botánico de Peradeniya y un espectáculo de danza.',
          ],
        },
        {
          heading: 'Anuradhapura y Polonnaruwa',
          paras: [
            'Estas ciudades antiguas ofrecen enormes estupas, esculturas y ruinas de monasterios. En los circuitos más largos incluimos una visita en bici a Polonnaruwa, un placer para los amantes de la historia.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'sigiriyaDay', label: 'Excursión a Sigiriya' },
        { pageId: 'kandyDay', label: 'Excursión a Kandy' },
      ],
    },
    {
      anchor: 'tea-country',
      heading: 'El país del té y la estación de Ella',
      intro: [
        'La montaña de Sri Lanka, el histórico país del té de Ceilán, ofrece temperaturas frescas, miradores espectaculares y uno de los viajes en tren más bellos del mundo. Nuwara Eliya parece sorprendentemente europea; Ella es el centro de senderismo, cafés y el Nine Arch Bridge.',
        'El tren de Kandy a Ella figura entre las rutas ferroviarias más bonitas del planeta. Reservamos asientos cuando es posible y organizamos traslados privados si los horarios no encajan con tu plan.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Excursión a Ella' },
        { pageId: 'tour2ek', label: 'Circuito 2 días Ella y Kandy' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Las playas y la costa sur de Sri Lanka',
      intro: [
        'Tras la cultura y el safari, la mayoría de las <strong>vacaciones en Sri Lanka</strong> terminan en la playa. La costa sur reúne el Fuerte de Galle, el surf en Weligama y Mirissa, el baño tranquilo en Unawatuna y el avistamiento de ballenas desde Mirissa (noviembre–abril).',
        'El Fuerte de Galle es una ciudad amurallada Patrimonio de la Humanidad con edificios coloniales holandeses. Hikkaduwa y Bentota ofrecen hoteles resort para los <strong>circuitos de lujo</strong>; Tangalle y Mirissa son ideales para estancias más tranquilas.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Excursión al Fuerte de Galle' },
        { pageId: 'testimonials', label: 'Leer opiniones' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Circuitos de lujo y viajes a medida',
      intro: [
        'Los <strong>circuitos de lujo por Sri Lanka</strong> se centran en la privacidad, el espacio y las experiencias cuidadas: villas con encanto en la montaña, suites frente al mar en Galle, jeeps privados de safari y chóferes-guía atentos a tus preferencias.',
        'Diseñamos <strong>viajes a medida</strong> con socios de lujo verificados y precios transparentes, sin comisiones ocultas ni paradas de compras forzadas.',
      ],
      list: [
        'Hoteles de 5 estrellas y con encanto a las mejores tarifas',
        'Guías privados de arqueología, ornitología o fotografía',
        'Flota de lujo con SUV y furgonetas amplias para familias',
        'Organización de ocasiones especiales: aniversarios y pedidas de mano',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Viajes en familia por Sri Lanka',
      intro: [
        'Sri Lanka es muy adecuado para familias. Las distancias son asequibles, los hoteles ofrecen habitaciones comunicadas y piscinas, y a los niños les encantan los orfanatos de elefantes, los criaderos de tortugas, los jardines de especias y las playas. Nuestros <strong>viajes en familia</strong> incluyen días de descanso y trayectos más cortos.',
        'Para familias europeas con niños en edad escolar recomendamos de siete a diez días; una ruta típica combina Sigiriya, un safari en jeep, el tren Kandy–Ella y dos o tres días de playa.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Circuitos para familias' },
        { pageId: 'guides', label: 'Guías de viaje' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Luna de miel y escapadas románticas en Sri Lanka',
      intro: [
        'Para parejas de España, Italia y Francia, la <strong>luna de miel en Sri Lanka</strong> combina aventura e intimidad: amanecer en Sigiriya, cena a la luz de las velas en un bungaló de plantación, catamarán por la costa sur y villa con piscina frente al océano.',
        'Bajo petición organizamos flores, tartas sorpresa, spa en pareja y sesiones de fotos. Las rutas de luna de miel duran normalmente de ocho a catorce días, a ritmo relajado.',
      ],
      seeAlso: [{ pageId: 'tour7', label: 'Idea de luna de miel 7 días' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'POR QUÉ ELEGIRNOS',
      heading: 'Expertos locales de confianza desde 1992',
      cards: [
        { icon: 'fa-clock', title: 'Desde 1992', text: 'Más de tres décadas de servicio fiable a viajeros internacionales.' },
        { icon: 'fa-user', title: 'Guías autorizados', text: 'Chóferes-guía autorizados con profundo conocimiento local.' },
        { icon: 'fa-heart', title: 'Viajeros felices', text: 'Miles de viajeros satisfechos de toda Europa.' },
        { icon: 'fa-map-marker-alt', title: 'A medida', text: 'Cada itinerario es personalizado, nunca autobuses estándar.' },
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
        'Vuelos directos y con escala conectan Colombo con Madrid, Barcelona, Zúrich, París, Milán y otras ciudades. La mayoría de los viajeros europeos llegan de noche y empiezan su circuito al día siguiente; tu chófer te recibe en el aeropuerto Bandaranaike (CMB).',
      ],
      subsections: [
        {
          heading: 'Consejos esenciales para Sri Lanka',
          list: [
            'Ropa ligera y transpirable, más una capa para las mañanas de montaña',
            'Quitarse los zapatos y cubrir hombros y rodillas en los templos budistas',
            'Reservar pronto Sigiriya y el safari de Yala en temporada alta',
            'Probar hoppers, kottu roti y curry de pescado fresco',
            'Llevar protector solar y repelente para safaris y cenas',
            'Guardar copias del pasaporte y de la autorización ETA',
          ],
        },
        {
          heading: 'Visado (ETA) para ciudadanos europeos',
          paras: [
            'La mayoría de los ciudadanos europeos necesita una autorización electrónica de viaje (ETA) antes de llegar. Solicítala en línea al menos 24–48 horas antes de salir y guarda la aprobación y el número de referencia. Los niños necesitan su propia ETA.',
          ],
        },
        {
          heading: '¿Es seguro Sri Lanka para los turistas?',
          paras: [
            'Sri Lanka es en general seguro y acogedor; millones de visitantes viajan cada año sin incidentes. Viajar con un chófer-guía de confianza de un operador consolidado elimina la mayoría de las preocupaciones de transporte, precios y organización.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Guías de viaje' },
        { pageId: 'restaurants', label: 'Restaurantes en Sri Lanka' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Preguntas frecuentes sobre los circuitos por Sri Lanka',
  faqs: [
    {
      q: '¿Cuántos días necesito para un circuito por Sri Lanka?',
      a: 'De siete a diez días van bien para la mayoría de los viajeros europeos que llegan por primera vez. Un circuito de 7 días cubre cultura, montaña, safari y playas; catorce días permiten norte, este y costa sur de lujo sin prisas.',
    },
    {
      q: '¿Qué diferencia hay entre un circuito en grupo y uno privado?',
      a: 'Un circuito privado te da vehículo y chófer-guía propios: tú eliges horarios, paradas y hoteles. Los circuitos en autobús siguen programas fijos. Sundown Tours se dedica en exclusiva al viaje privado a medida.',
    },
    {
      q: '¿Merece la pena un chófer-guía en Sri Lanka?',
      a: 'Sí. El estado de las carreteras, los cruces sin señalizar y el tráfico hacen estresante conducir uno mismo. Un guía autorizado ahorra tiempo, explica la cultura, gestiona las entradas y adapta la ruta según el clima.',
    },
    {
      q: '¿Cuál es la mejor época para un safari en Yala?',
      a: 'El bloque 1 de Yala abre todo el año; en los meses secos (febrero–julio) es más fácil ver leopardos, ya que los animales se reúnen cerca del agua. Elige safaris matinales por el fresco y la mejor luz.',
    },
    {
      q: '¿Son adecuados los circuitos para familias con niños?',
      a: 'Por completo. Trayectos más cortos, piscinas, orfanatos de elefantes, criaderos de tortugas y playas mantienen entretenidos a los niños. Planificamos circuitos familiares con ritmo flexible y restaurantes adecuados.',
    },
    {
      q: '¿Necesito visado para Sri Lanka?',
      a: 'La mayoría de los ciudadanos europeos necesita una ETA (autorización electrónica de viaje) obtenida en línea antes de viajar. Solicítala al menos 48 horas antes; los niños necesitan su propia ETA.',
    },
    {
      q: '¿Pueden personalizar una luna de miel o un circuito de lujo?',
      a: 'Cada itinerario de Sundown Tours es a medida. Organizamos hoteles con encanto, cenas privadas, tratamientos de spa y sorpresas especiales para lunas de miel y viajes de lujo.',
    },
    {
      q: '¿Cómo reservo un circuito privado con Sundown Tours?',
      a: 'Explora nuestros circuitos, elige una duración y envía una solicitud por el formulario de contacto o WhatsApp. Respondemos en 24 horas con una propuesta a medida y precios transparentes.',
      links: [{ pageId: 'contact', label: 'Contáctanos' }],
    },
  ],
};

const pl: HomeSeoContent = {
  tag: 'PRZEWODNIK',
  title: 'Kompletny przewodnik po prywatnych wycieczkach po Sri Lance i wyjazdach na miarę',
  subtitle:
    'Napisany przez lokalnych ekspertów Sundown Tours Sri Lanka – licencjonowani kierowcy-przewodnicy, indywidualne trasy i tysiące zadowolonych podróżnych z Polski i całej Europy od 1992 roku.',
  tocLabel: 'Na tej stronie',
  seeAlsoLabel: 'Zobacz też',
  toc: [
    { label: 'Dlaczego Sri Lanka', anchor: 'why-sri-lanka' },
    { label: 'Kiedy jechać', anchor: 'best-time' },
    { label: 'Wycieczki prywatne', anchor: 'chauffeur-tours' },
    { label: 'Nasze wycieczki', anchor: 'tour-packages' },
    { label: 'Safari', anchor: 'wildlife-safaris' },
    { label: 'Trójkąt kultury', anchor: 'cultural-triangle' },
    { label: 'Kraina herbaty', anchor: 'tea-country' },
    { label: 'Plaże', anchor: 'beaches' },
    { label: 'Z rodziną', anchor: 'family-tours' },
    { label: 'Podróż poślubna', anchor: 'honeymoon' },
    { label: 'Dlaczego my', anchor: 'why-choose-us' },
    { label: 'FAQ', anchor: 'faq-heading' },
  ],
  sections: [
    {
      anchor: 'why-sri-lanka',
      heading: 'Dlaczego warto odwiedzić Sri Lankę?',
      intro: [
        'Sri Lanka to jeden z najbardziej satysfakcjonujących kierunków wyspiarskich Azji dla europejskich podróżnych szukających różnorodności bez długich lotów krajowych. Podczas jednego <strong>wyjazdu na Sri Lankę</strong> wejdziesz o świcie na starożytną fortecę na skale, przejedziesz pociągiem przez zamglone plantacje herbaty, wybierzesz się na safari z lampartami i zakończysz tydzień na plaży wśród palm.',
        'Ponieważ wyspa jest niewielka, dobrze zaplanowana <strong>prywatna wycieczka po Sri Lance</strong> łączy trójkąt kultury, góry, parki narodowe i południowe wybrzeże w siedem–czternaście dni, w komfortowym tempie i zawsze elastycznie.',
        'Sri Lanka to również świetny stosunek jakości do ceny. Butikowe hotele, znakomite jedzenie i światowej klasy przyroda dostępne są w cenach odpowiednich zarówno dla wyjazdów średniej półki, jak i <strong>luksusowych wycieczek po Sri Lance</strong>, a serdeczna gościnność sprawia, że czujesz się mile widziany od chwili przylotu.',
      ],
      subsections: [{ heading: 'Czym Sri Lanka różni się od innych kierunków w Azji?' }],
      cards: [
        { icon: 'fa-landmark', text: 'Osiem obiektów UNESCO, w tym Sigiriya, Kandy i Fort Galle.' },
        { icon: 'fa-globe', text: 'Podróże przez cały rok – przy dwóch monsunach zawsze jest słoneczne wybrzeże.' },
        { icon: 'fa-route', text: 'Zwarta wyspa: większość atrakcji w zasięgu trzech–pięciu godzin jazdy.' },
        { icon: 'fa-paw', text: 'Wyjątkowa przyroda – słonie, lamparty, płetwale błękitne i tropikalne ptaki.' },
        { icon: 'fa-utensils', text: 'Autentyczna kuchnia: przyprawy, kokos, owoce morza i warzywa z gór.' },
        { icon: 'fa-car', text: 'Prywatne wycieczki z własnym kierowcą-przewodnikiem – bez zatłoczonych autokarów.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Przewodnik po kierunkach' },
        { pageId: 'tours', label: 'Nasze wycieczki po Sri Lance' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Kiedy jechać na Sri Lankę',
      intro: [
        'Sri Lankę można zwiedzać przez cały rok. Ponieważ dwa monsuny obejmują różne wybrzeża w różnym czasie, prawie zawsze jakiś region ma idealną pogodę – kluczem jest dopasowanie trasy do terminu wyjazdu.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'Zachód i południe', meta: 'Listopad–kwiecień', text: 'Sezon na zimowe słońce. Colombo, Galle, Mirissa, Bentota i Hikkaduwa – spokojne morze i słońce.' },
        { icon: 'fa-water', title: 'Wschodnie wybrzeże', meta: 'Maj–wrzesień', text: 'Trincomalee, Pasikudah i Arugam Bay mają najlepszą pogodę, gdy monsun południowo-zachodni przynosi deszcz gdzie indziej.' },
        { icon: 'fa-mountain', title: 'Góry', meta: 'Cały rok', text: 'Kandy, Ella, Nuwara Eliya, Sigiriya i Dambulla można zwiedzać cały rok, z pogodnymi porankami.' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Zachód i południe (listopad–kwiecień)',
          paras: [
            'Sezon na zimowe słońce. Południowe wybrzeże jest idealne na plażowanie, obserwację wielorybów i połączenie wizyty w Galle z przyrodą południa. Większość wycieczek 7- i 10-dniowych przypada na ten okres.',
          ],
        },
        {
          heading: 'Wschodnie wybrzeże (maj–wrzesień)',
          paras: [
            'Gdy monsun południowo-zachodni przynosi deszcz do Colombo i Galle, wschodnie wybrzeże cieszy się najlepszą pogodą. Rodziny z wakacjami w lipcu i sierpniu często przedłużają tu pobyt na plaży.',
          ],
        },
        {
          heading: 'Góry i trójkąt kultury',
          paras: [
            'Kandy, Ella, Nuwara Eliya, Sigiriya i Dambulla działają cały rok. Poranki są zwykle pogodne na wejście na Sigiriyę; krótkie popołudniowe opady rzadko psują dzień.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Wycieczka do Galle' },
        { pageId: 'ellaDay', label: 'Wycieczka do Elli' },
        { pageId: 'kandyDay', label: 'Wycieczka do Kandy' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Prywatne wycieczki z kierowcą-przewodnikiem',
      intro: [
        '<strong>Kierowca-przewodnik na Sri Lance</strong> to znacznie więcej niż kierowca – to Twój codzienny organizator, tłumacz kultury i wsparcie na nieznanych drogach. Każda prywatna wycieczka Sundown Tours obejmuje licencjonowanego, doświadczonego kierowcę-przewodnika mówiącego wyraźnie po angielsku (inne języki na życzenie).',
        'Europejscy podróżni cenią klimatyzowany komfort, elastyczne godziny i swobodę zatrzymania się na zdjęcie, plantację herbaty czy świątynię – nigdy nie jesteś związany planem grupy.',
      ],
      subsections: [{ heading: 'Co obejmuje prywatna wycieczka z kierowcą?' }],
      list: [
        'Dedykowany pojazd i licencjonowany kierowca-przewodnik na całą trasę',
        'Transfery z lotniska w Colombo (CMB) lub lotnisk regionalnych',
        'Paliwo, parking i nocleg kierowcy – z przejrzystą wyceną z góry',
        'Znajomość dróg, atrakcji, restauracji i warunków sezonowych',
        'Pomoc przy zameldowaniu, rezerwacji jeepów na safari i biletów kolejowych',
        'Elastyczny plan dnia – to Ty nadajesz tempo',
      ],
      seeAlso: [
        { pageId: 'about', label: 'O Sundown Tours' },
        { pageId: 'services', label: 'Nasze usługi' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Wycieczki po Sri Lance na każdą długość',
      intro: [
        'Właściwa długość <strong>wycieczki po Sri Lance</strong> zależy od tego, jak głęboko chcesz poznać wyspę. Krótkie trasy pasują dla powracających lub wyjazdów plażowych; dłuższe łączą kulturę, przyrodę i relaks bez pośpiechu. Każdą można dostosować.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Krótkie wycieczki', meta: '4–6 dni', text: 'Skoncentrowane trasy: Sigiriya, Kandy, Ella i Yala.', linkPageId: 'tour4', linkLabel: 'Wycieczka 4 dni' },
        { icon: 'fa-calendar-alt', title: 'Tydzień', meta: '7–8 dni', text: 'Najpopularniejszy wybór – trójkąt kultury, kraina herbaty, safari w Yali i plaże.', linkPageId: 'tour7', linkLabel: 'Wycieczka 7 dni' },
        { icon: 'fa-calendar-alt', title: 'Duże wyprawy', meta: '10+ dni', text: 'Dziedzictwo środkowej północy, kilka safari, trekking i spokojne dni na plaży.', linkPageId: 'tour10', linkLabel: 'Wycieczka 10 dni' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Krótkie wycieczki (4–6 dni)',
          paras: [
            'Idealne jako przedłużenie lub skoncentrowany wyjazd. 4-dniowa obejmuje Sigiriyę, Kandy, Ellę i Yalę; 5-dniowa dodaje czas na świątynie i widokowy pociąg; rodziny często wolą spokojniejsze tempo 6-dniowej.',
          ],
        },
        {
          heading: 'Tydzień (7–8 dni)',
          paras: [
            '7-dniowa wycieczka jest najpopularniejsza dla osób z tygodniem urlopu i łączy kulturę, krainę herbaty, safari w Yali i plaże. 8-dniowa dodaje Wilpattu i Hikkaduwę.',
          ],
        },
        {
          heading: 'Duże wyprawy (10+ dni)',
          paras: [
            '10-dniowa wycieczka pozwala zobaczyć zabytki środkowej północy, kilka safari, trekking w górach i spokojne dni na plaży – lubiana przez pary w podróży poślubnej i wielopokoleniowe rodziny.',
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
        '<strong>Safari na Sri Lance</strong> to gratka dla miłośników przyrody. Parki są zwarte w porównaniu z afrykańskimi rezerwatami, więc lamparty, niedźwiedzie wargacze, słonie, krokodyle i setki ptaków można zobaczyć podczas półdniowego safari jeepem.',
      ],
      subsections: [
        {
          heading: 'Safari w Yali – kraina lampartów',
          paras: [
            'Park Yala (blok 1) ma jedną z najwyższych na świecie gęstości lampartów. Poranne wyjazdy dają najlepsze światło i aktywność zwierząt. Nasza wycieczka Ella i Yala łączy górskie krajobrazy z safari – ulubiona przez fotografów z Wielkiej Brytanii i Polski.',
          ],
        },
        {
          heading: 'Inne znane parki safari',
          list: [
            '<strong>Udawalawe</strong> – pewne stada słoni; idealne dla rodzin',
            '<strong>Wilpattu</strong> – spokojniejszy teren lampartów; w 8-dniowej trasie',
            '<strong>Minneriya / Kaudulla</strong> – sezonowe zgromadzenia słoni (lipiec–październik)',
            '<strong>Bundala</strong> – ptaki mokradeł i wędrowne',
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
        { icon: 'fa-landmark', title: 'Sigiriya', text: 'Najbardziej kultowa forteca na skale, 200 m nad równiną.', linkPageId: 'sigiriyaDay', linkLabel: 'Wycieczka do Sigiriyi' },
        { icon: 'fa-place-of-worship', title: 'Kandy', text: 'Ostatnia królewska stolica i Świątynia Zęba.', linkPageId: 'kandyDay', linkLabel: 'Wycieczka do Kandy' },
        { icon: 'fa-train', title: 'Ella', text: 'Serce gór: trekking, kawiarnie i Nine Arch Bridge.', linkPageId: 'ellaDay', linkLabel: 'Wycieczka do Elli' },
        { icon: 'fa-ship', title: 'Galle', text: 'Holenderski fort z listy UNESCO i mury o zachodzie słońca.', linkPageId: 'galleDay', linkLabel: 'Wycieczka do Galle' },
      ],
      cardCols: 4,
    },
    {
      anchor: 'cultural-triangle',
      heading: 'Trójkąt kultury: Sigiriya, Kandy i starożytne stolice',
      intro: [
        'Trójkąt kultury to historyczne serce Sri Lanki i punkt obowiązkowy przy pierwszej wizycie. Między Kandy, Anuradhapurą i Polonnaruwą znajdziesz górskie fortece, świątynie w jaskiniach, królewskie pałace i żywe tradycje buddyjskie sprzed ponad dwóch tysiącleci.',
      ],
      subsections: [
        {
          heading: 'Forteca Sigiriya',
          paras: [
            'Sigiriya wznosi się 200 m nad równiną i jest najbardziej kultowym symbolem kraju. Wejdź wczesnym rankiem, by zobaczyć freski, lustrzaną ścianę i widok na dżunglę ze szczytu.',
          ],
        },
        {
          heading: 'Kandy i Świątynia Zęba',
          paras: [
            'Kandy, ostatnia królewska stolica, leży nad jeziorem otoczonym wzgórzami. Świątynia Zęba to żywe miejsce pielgrzymek z codziennymi ceremoniami puja, często łączone z ogrodem botanicznym w Peradeniyi i pokazem tańca.',
          ],
        },
        {
          heading: 'Anuradhapura i Polonnaruwa',
          paras: [
            'Te starożytne miasta to ogromne stupy, kamienne rzeźby i ruiny klasztorów. Na dłuższych trasach dodajemy zwiedzanie Polonnaruwy rowerem – gratka dla miłośników historii.',
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
        'Góry Sri Lanki – historyczna cejlońska kraina herbaty – oferują chłodniejsze temperatury, spektakularne punkty widokowe i jedną z najpiękniejszych tras kolejowych świata. Nuwara Eliya wygląda zaskakująco europejsko; Ella to centrum trekkingu, kawiarni i Nine Arch Bridge.',
        'Pociąg z Kandy do Elli należy do najpiękniejszych tras kolejowych na świecie. W miarę możliwości rezerwujemy miejsca i organizujemy prywatne transfery, gdy rozkład nie pasuje do planu.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Wycieczka do Elli' },
        { pageId: 'tour2ek', label: 'Wycieczka 2 dni Ella i Kandy' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Plaże i południowe wybrzeże Sri Lanki',
      intro: [
        'Po kulturze i safari większość <strong>wakacji na Sri Lance</strong> kończy się na plaży. Południowe wybrzeże łączy historyczny Fort Galle, surfing w Weligamie i Mirissie, spokojne kąpiele w Unawatunie i obserwację wielorybów z Mirissy (listopad–kwiecień).',
        'Fort Galle to otoczone murami miasto z listy UNESCO z holenderską architekturą kolonialną. Hikkaduwa i Bentota oferują hotele resort na <strong>luksusowe wyjazdy</strong>; Tangalle i Mirissa są idealne na spokojniejszy pobyt.',
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Wycieczka do Fortu Galle' },
        { pageId: 'testimonials', label: 'Przeczytaj opinie' },
      ],
    },
    {
      anchor: 'luxury-tours',
      heading: 'Luksusowe wycieczki i wyjazdy na miarę',
      intro: [
        '<strong>Luksusowe wycieczki po Sri Lance</strong> stawiają na prywatność, przestrzeń i dopracowane doświadczenia – butikowe wille w górach, apartamenty przy plaży w Galle, prywatne jeepy na safari i kierowców-przewodników przewidujących Twoje potrzeby.',
        'Projektujemy <strong>wyjazdy na miarę</strong> ze sprawdzonymi luksusowymi partnerami i przejrzystymi cenami – bez ukrytych prowizji i wymuszonych zakupów.',
      ],
      list: [
        'Hotele 5-gwiazdkowe i butikowe w najlepszych dostępnych cenach',
        'Prywatni przewodnicy do archeologii, ptaków lub fotografii',
        'Luksusowa flota z przestronnymi SUV-ami i vanami dla rodzin',
        'Organizacja wyjątkowych okazji – rocznice, oświadczyny, okrągłe urodziny',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Wyjazdy rodzinne na Sri Lankę',
      intro: [
        'Sri Lanka jest wyjątkowo przyjazna rodzinom. Odległości są rozsądne, hotele oferują pokoje połączone i baseny, a dzieci uwielbiają sierocińce słoni, wylęgarnie żółwi, ogrody przypraw i plaże. Nasze <strong>wyjazdy rodzinne</strong> uwzględniają dni odpoczynku i krótsze przejazdy.',
        'Rodzinom z Europy z dziećmi w wieku szkolnym polecamy siedem–dziesięć dni; typowa trasa łączy Sigiriyę, safari jeepem, pociąg Kandy–Ella i dwa–trzy dni na plaży.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Wycieczki dla rodzin' },
        { pageId: 'guides', label: 'Przewodniki po Sri Lance' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Podróże poślubne i romantyczne wyjazdy na Sri Lankę',
      intro: [
        'Dla par z Polski, Włoch i Hiszpanii <strong>podróż poślubna na Sri Lankę</strong> łączy przygodę i intymność – wschód słońca na Sigiriyi, kolacja przy świecach w bungalowie na plantacji, katamaran u południowego wybrzeża i willa z basenem nad oceanem.',
        'Na życzenie organizujemy kwiaty, torty-niespodzianki, spa dla par i sesje zdjęciowe. Trasy poślubne trwają zwykle osiem–czternaście dni, w spokojnym tempie.',
      ],
      seeAlso: [{ pageId: 'tour7', label: 'Pomysł na 7-dniowy miesiąc miodowy' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'DLACZEGO MY',
      heading: 'Zaufani lokalni eksperci od 1992 roku',
      cards: [
        { icon: 'fa-clock', title: 'Od 1992', text: 'Ponad trzy dekady rzetelnej obsługi podróżnych z całego świata.' },
        { icon: 'fa-user', title: 'Licencjonowani przewodnicy', text: 'Licencjonowani kierowcy-przewodnicy z głęboką wiedzą lokalną.' },
        { icon: 'fa-heart', title: 'Zadowoleni podróżni', text: 'Tysiące zadowolonych podróżnych z całej Europy.' },
        { icon: 'fa-map-marker-alt', title: 'Na miarę', text: 'Każda trasa jest indywidualna – żadnych autokarów z półki.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Porozmawiaj z naszym zespołem' },
        { pageId: 'about', label: 'Nasza historia' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Planowanie wyjazdu na Sri Lankę z Europy',
      intro: [
        'Loty bezpośrednie i z przesiadką łączą Colombo z Warszawą, Frankfurtem, Zurychem, Paryżem, Mediolanem i innymi miastami. Większość europejskich podróżnych przylatuje nocą i zaczyna wycieczkę następnego ranka – kierowca czeka na lotnisku Bandaranaike (CMB).',
      ],
      subsections: [
        {
          heading: 'Niezbędne wskazówki na Sri Lankę',
          list: [
            'Lekka, przewiewna odzież plus warstwa na chłodne górskie poranki',
            'W świątyniach buddyjskich zdejmij buty i zakryj ramiona oraz kolana',
            'W sezonie rezerwuj z wyprzedzeniem Sigiriyę i safari w Yali',
            'Spróbuj hoppers, kottu roti i świeżego curry rybnego',
            'Zabierz krem z filtrem i środek na owady na safari i wieczory',
            'Miej kopie paszportu i zgody ETA',
          ],
        },
        {
          heading: 'Wiza (ETA) dla obywateli europejskich',
          paras: [
            'Większość obywateli Europy potrzebuje elektronicznej zgody na podróż (ETA) przed przylotem. Złóż wniosek online co najmniej 24–48 godzin przed wylotem i zachowaj potwierdzenie oraz numer referencyjny. Dzieci potrzebują własnej ETA.',
          ],
        },
        {
          heading: 'Czy Sri Lanka jest bezpieczna dla turystów?',
          paras: [
            'Sri Lanka jest ogólnie bezpieczna i gościnna; co roku odwiedzają ją miliony turystów bez incydentów. Podróż z rzetelnym kierowcą-przewodnikiem uznanego organizatora eliminuje większość kłopotów z transportem, cenami i planowaniem trasy.',
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
  faqHeading: 'Najczęstsze pytania o wycieczki po Sri Lance',
  faqs: [
    {
      q: 'Ile dni potrzeba na wycieczkę po Sri Lance?',
      a: 'Siedem–dziesięć dni odpowiada większości podróżnych z Europy odwiedzających wyspę po raz pierwszy. 7-dniowa wycieczka obejmuje kulturę, góry, safari i plaże; czternaście dni pozwala na północ, wschód i luksusowe południe bez pośpiechu.',
    },
    {
      q: 'Czym różni się wycieczka grupowa od prywatnej?',
      a: 'Wycieczka prywatna daje własny pojazd i kierowcę-przewodnika – to Ty wybierasz godziny, przystanki i hotele. Wycieczki autokarowe mają sztywny plan. Sundown Tours specjalizuje się wyłącznie w prywatnych podróżach na miarę.',
    },
    {
      q: 'Czy kierowca-przewodnik na Sri Lance się opłaca?',
      a: 'Tak. Stan dróg, nieoznakowane zjazdy i ruch w miastach sprawiają, że samodzielna jazda jest stresująca. Licencjonowany przewodnik oszczędza czas, opowiada o kulturze, załatwia bilety i dostosowuje trasę do pogody.',
    },
    {
      q: 'Kiedy jest najlepszy czas na safari w Yali?',
      a: 'Blok 1 w Yali jest otwarty cały rok; w suchych miesiącach (luty–lipiec) łatwiej wypatrzyć lamparty, bo zwierzęta gromadzą się przy wodzie. Wybieraj poranne safari dla chłodu i lepszego światła.',
    },
    {
      q: 'Czy wycieczki są odpowiednie dla rodzin z dziećmi?',
      a: 'Jak najbardziej. Krótsze przejazdy, baseny, sierocińce słoni, wylęgarnie żółwi i plaże zajmują dzieci. Planujemy wycieczki rodzinne w elastycznym tempie i z restauracjami przyjaznymi dzieciom.',
    },
    {
      q: 'Czy potrzebuję wizy na Sri Lankę?',
      a: 'Większość obywateli Europy potrzebuje ETA (elektronicznej zgody na podróż) uzyskanej online przed wyjazdem. Złóż wniosek co najmniej 48 godzin wcześniej; dzieci potrzebują własnej ETA.',
    },
    {
      q: 'Czy można dopasować podróż poślubną lub wyjazd luksusowy?',
      a: 'Każda trasa Sundown Tours jest na miarę. Organizujemy butikowe hotele, prywatne kolacje, zabiegi spa i specjalne niespodzianki na podróże poślubne i wyjazdy luksusowe.',
    },
    {
      q: 'Jak zarezerwować prywatną wycieczkę w Sundown Tours?',
      a: 'Przejrzyj nasze wycieczki, wybierz długość i wyślij zapytanie przez formularz kontaktowy lub WhatsApp. Odpowiadamy w ciągu 24 godzin z propozycją na miarę i przejrzystymi cenami.',
      links: [{ pageId: 'contact', label: 'Kontakt' }],
    },
  ],
};

const ru: HomeSeoContent = {
  tag: 'ПУТЕВОДИТЕЛЬ',
  title: 'Полный гид по частным турам на Шри-Ланку и индивидуальному отдыху',
  subtitle:
    'Составлено местными экспертами Sundown Tours Sri Lanka – лицензированные водители-гиды, индивидуальные маршруты и тысячи довольных путешественников из России, СНГ и всей Европы с 1992 года.',
  tocLabel: 'На этой странице',
  seeAlsoLabel: 'Смотрите также',
  toc: [
    { label: 'Почему Шри-Ланка', anchor: 'why-sri-lanka' },
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
      heading: 'Почему стоит поехать на Шри-Ланку?',
      intro: [
        'Шри-Ланка – один из самых благодарных островных направлений Азии для европейских путешественников, которым нужна разнообразие без долгих внутренних перелётов. За один <strong>отпуск на Шри-Ланке</strong> вы подниметесь на древнюю скальную крепость на рассвете, проедете на поезде сквозь туманные чайные плантации, отправитесь на сафари за леопардами и завершите неделю на пляже под пальмами.',
        'Остров компактный, поэтому хорошо спланированный <strong>частный тур по Шри-Ланке</strong> соединяет культурный треугольник, горы, национальные парки и южное побережье за семь–четырнадцать дней в комфортном темпе и всегда гибко.',
        'Шри-Ланка также отличается прекрасным соотношением цены и качества. Бутик-отели, отличная кухня и природа мирового класса доступны по ценам, подходящим и для среднего сегмента, и для <strong>люксовых туров по Шри-Ланке</strong>, а тёплое гостеприимство создаёт ощущение желанного гостя с первых минут.',
      ],
      subsections: [{ heading: 'Чем Шри-Ланка отличается от других направлений Азии?' }],
      cards: [
        { icon: 'fa-landmark', text: 'Восемь объектов ЮНЕСКО, включая Сигирию, Канди и форт Галле.' },
        { icon: 'fa-globe', text: 'Поездки круглый год – при двух муссонах всегда есть солнечное побережье.' },
        { icon: 'fa-route', text: 'Компактный остров: большинство мест в пределах трёх–пяти часов езды.' },
        { icon: 'fa-paw', text: 'Исключительная природа – слоны, леопарды, синие киты и тропические птицы.' },
        { icon: 'fa-utensils', text: 'Аутентичная кухня: специи, кокос, морепродукты и горные овощи.' },
        { icon: 'fa-car', text: 'Частные туры с личным водителем-гидом – без переполненных автобусов.' },
      ],
      cardCols: 2,
      seeAlso: [
        { pageId: 'destinations', label: 'Гид по направлениям' },
        { pageId: 'tours', label: 'Наши туры по Шри-Ланке' },
      ],
    },
    {
      anchor: 'best-time',
      heading: 'Когда лучше ехать на Шри-Ланку',
      intro: [
        'Шри-Ланку можно посещать круглый год. Поскольку два муссона затрагивают разные побережья в разное время, почти всегда есть регион с идеальной погодой – главное подобрать маршрут под ваши даты.',
      ],
      cards: [
        { icon: 'fa-umbrella-beach', title: 'Запад и юг', meta: 'Ноябрь–апрель', text: 'Высокий сезон для зимнего солнца. Коломбо, Галле, Мирисса, Бентота и Хиккадува – спокойное море и солнце.' },
        { icon: 'fa-water', title: 'Восточное побережье', meta: 'Май–сентябрь', text: 'Тринкомали, Пасикуда и Аругам-Бэй радуют лучшей погодой, пока юго-западный муссон приносит дождь в других местах.' },
        { icon: 'fa-mountain', title: 'Горы', meta: 'Круглый год', text: 'Канди, Элла, Нувара-Элия, Сигирия и Дамбулла доступны круглый год, с ясными утрами.' },
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
            'Пока юго-западный муссон приносит дождь в Коломбо и Галле, восточное побережье радует лучшей погодой. Семьи с летними каникулами в июле и августе часто продлевают здесь пляжный отдых.',
          ],
        },
        {
          heading: 'Горы и культурный треугольник',
          paras: [
            'Канди, Элла, Нувара-Элия, Сигирия и Дамбулла хороши круглый год. Утро обычно ясное для подъёма на Сигирию; короткие дневные дожди редко мешают.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'galleDay', label: 'Тур в Галле' },
        { pageId: 'ellaDay', label: 'Тур в Эллу' },
        { pageId: 'kandyDay', label: 'Тур в Канди' },
      ],
    },
    {
      anchor: 'chauffeur-tours',
      heading: 'Частные туры с водителем-гидом',
      intro: [
        '<strong>Водитель-гид на Шри-Ланке</strong> – это гораздо больше, чем водитель: это ваш ежедневный организатор, переводчик культуры и опора на незнакомых дорогах. Каждый частный тур Sundown Tours включает лицензированного опытного водителя-гида, который ясно говорит по-английски (другие языки по запросу).',
        'Европейские путешественники ценят комфорт кондиционера, гибкое время выезда и свободу остановиться ради фото, чайной плантации или храма – вы не связаны групповым графиком.',
      ],
      subsections: [{ heading: 'Что входит в частный тур с водителем?' }],
      list: [
        'Отдельный автомобиль и лицензированный водитель-гид на весь маршрут',
        'Трансферы из аэропорта Коломбо (CMB) или региональных аэропортов',
        'Топливо, парковка и проживание водителя – прозрачно рассчитаны заранее',
        'Знание дорог, достопримечательностей, ресторанов и сезонных условий',
        'Помощь с заселением, джипами для сафари и билетами на поезд',
        'Гибкий график дня – темп задаёте вы',
      ],
      seeAlso: [
        { pageId: 'about', label: 'О Sundown Tours' },
        { pageId: 'services', label: 'Наши услуги' },
      ],
    },
    {
      anchor: 'tour-packages',
      heading: 'Туры по Шри-Ланке на любую продолжительность',
      intro: [
        'Оптимальная длина <strong>тура по Шри-Ланке</strong> зависит от того, насколько глубоко вы хотите узнать остров. Короткие маршруты подходят для повторных визитов или пляжного отдыха; длинные сочетают культуру, природу и релакс без спешки. Любой тур можно адаптировать.',
      ],
      cards: [
        { icon: 'fa-clock', title: 'Короткие туры', meta: '4–6 дней', text: 'Сфокусированные маршруты: Сигирия, Канди, Элла и Яла.', linkPageId: 'tour4', linkLabel: 'Тур 4 дня' },
        { icon: 'fa-calendar-alt', title: 'Неделя', meta: '7–8 дней', text: 'Самый популярный вариант – культурный треугольник, чайный край, сафари в Яле и пляжи.', linkPageId: 'tour7', linkLabel: 'Тур 7 дней' },
        { icon: 'fa-calendar-alt', title: 'Большие туры', meta: '10+ дней', text: 'Наследие центра-севера, несколько сафари, треккинг и спокойные дни на пляже.', linkPageId: 'tour10', linkLabel: 'Тур 10 дней' },
      ],
      cardCols: 3,
      subsections: [
        {
          heading: 'Короткие туры (4–6 дней)',
          paras: [
            'Идеальны как продолжение или для целевой поездки. Тур на 4 дня охватывает Сигирию, Канди, Эллу и Ялу; на 5 дней добавляет время на храмы и живописный поезд; семьи часто предпочитают более спокойный темп тура на 6 дней.',
          ],
        },
        {
          heading: 'Неделя (7–8 дней)',
          paras: [
            'Тур на 7 дней – самый популярный у тех, у кого неделя отпуска, сочетает культуру, чайный край, сафари в Яле и пляжи. Тур на 8 дней добавляет Вилпатту и Хиккадуву.',
          ],
        },
        {
          heading: 'Большие туры (10+ дней)',
          paras: [
            'Тур на 10 дней позволяет увидеть памятники центра-севера, несколько сафари, горный треккинг и спокойные пляжные дни – популярен у пар в медовый месяц и больших семей.',
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
        '<strong>Сафари на Шри-Ланке</strong> – яркий момент для любителей природы. Парки компактны по сравнению с африканскими заповедниками, поэтому леопардов, медведей-губачей, слонов, крокодилов и сотни птиц можно увидеть за полдня на джипе.',
      ],
      subsections: [
        {
          heading: 'Сафари в Яле – царство леопардов',
          paras: [
            'Парк Яла (блок 1) обладает одной из самых высоких в мире плотностей леопардов. Утренние выезды дают лучший свет и активность животных. Наш тур Элла и Яла сочетает горные пейзажи и сафари – любимый фотографами из Великобритании и Польши.',
          ],
        },
        {
          heading: 'Другие известные парки для сафари',
          list: [
            '<strong>Удавалаве</strong> – гарантированные стада слонов; идеально для семей',
            '<strong>Вилпатту</strong> – более тихая территория леопардов; в туре на 8 дней',
            '<strong>Миннерия / Каудулла</strong> – сезонные скопления слонов (июль–октябрь)',
            '<strong>Бундала</strong> – птицы водно-болотных угодий и перелётные виды',
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
      heading: 'Популярные места Шри-Ланки',
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
        'Культурный треугольник – историческое сердце Шри-Ланки и обязательный пункт первой поездки. Между Канди, Анурадхапурой и Полоннарувой вы найдёте скальные крепости, пещерные храмы, королевские дворцы и живые буддийские традиции возрастом более двух тысячелетий.',
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
            'Канди, последняя королевская столица, стоит у озера в окружении холмов. Храм Зуба Будды – живое место паломничества с ежедневными церемониями пуджа, часто в сочетании с ботаническим садом Перадении и танцевальным шоу.',
          ],
        },
        {
          heading: 'Анурадхапура и Полоннарува',
          paras: [
            'Эти древние города – огромные ступы, каменные скульптуры и руины монастырей. В длинных турах мы добавляем осмотр Полоннарувы на велосипеде – находка для любителей истории.',
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
        'Горы Шри-Ланки – исторический цейлонский чайный край – дарят прохладу, впечатляющие смотровые площадки и одну из красивейших железных дорог мира. Нувара-Элия выглядит неожиданно по-европейски; Элла – центр треккинга, кафе и моста Nine Arch Bridge.',
        'Поезд из Канди в Эллу неизменно входит в число красивейших маршрутов мира. По возможности мы бронируем места и организуем частные трансферы, если расписание не совпадает с вашим планом.',
      ],
      seeAlso: [
        { pageId: 'ellaDay', label: 'Тур в Эллу' },
        { pageId: 'tour2ek', label: 'Тур 2 дня Элла и Канди' },
      ],
    },
    {
      anchor: 'beaches',
      heading: 'Пляжи и южное побережье Шри-Ланки',
      intro: [
        'После культуры и сафари большинство <strong>отпусков на Шри-Ланке</strong> завершается на пляже. Южное побережье сочетает исторический форт Галле, сёрфинг в Велигаме и Мириссе, спокойное купание в Унаватуне и наблюдение за китами из Мириссы (ноябрь–апрель).',
        'Форт Галле – окружённый стенами город ЮНЕСКО с голландской колониальной архитектурой. Хиккадува и Бентота предлагают отели-курорты для <strong>люксовых туров</strong>; Тангалле и Мирисса подходят для более спокойного отдыха.',
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
        '<strong>Люксовые туры по Шри-Ланке</strong> – это приватность, простор и продуманные впечатления: бутик-виллы в горах, номера у моря в Галле, частные джипы для сафари и водители-гиды, предугадывающие ваши пожелания.',
        'Мы создаём <strong>индивидуальный отдых</strong> с проверенными люксовыми партнёрами и прозрачными ценами – без скрытых комиссий и навязанных магазинов.',
      ],
      list: [
        'Отели 5 звёзд и бутик-отели по лучшим доступным ценам',
        'Частные гиды по археологии, орнитологии или фотографии',
        'Люксовый автопарк с просторными внедорожниками и минивэнами для семей',
        'Организация особых событий – годовщины, предложения руки и сердца',
      ],
    },
    {
      anchor: 'family-tours',
      heading: 'Семейные туры по Шри-Ланке',
      intro: [
        'Шри-Ланка исключительно удобна для семей. Расстояния разумны, в отелях есть смежные номера и бассейны, а дети обожают приюты слонов, черепашьи питомники, сады специй и пляжи. Наши <strong>семейные туры</strong> включают дни отдыха и более короткие переезды.',
        'Семьям из Европы с детьми школьного возраста мы рекомендуем семь–десять дней; типичный маршрут сочетает Сигирию, сафари на джипе, поезд Канди–Элла и два–три дня на пляже.',
      ],
      seeAlso: [
        { pageId: 'tours', label: 'Туры для семей' },
        { pageId: 'guides', label: 'Путеводители по Шри-Ланке' },
      ],
    },
    {
      anchor: 'honeymoon',
      heading: 'Медовый месяц и романтические поездки на Шри-Ланку',
      intro: [
        'Для пар из России, Италии и Испании <strong>медовый месяц на Шри-Ланке</strong> сочетает приключение и уединение – рассвет на Сигирии, ужин при свечах в бунгало на чайной плантации, катамаран у южного побережья и вилла с бассейном у океана.',
        'По запросу мы организуем цветы, торты-сюрпризы, спа для двоих и фотосессии. Маршруты медового месяца обычно длятся восемь–четырнадцать дней в спокойном темпе.',
      ],
      seeAlso: [{ pageId: 'tour7', label: 'Идея медового месяца на 7 дней' }],
    },
    {
      anchor: 'why-choose-us',
      eyebrow: 'ПОЧЕМУ МЫ',
      heading: 'Надёжные местные эксперты с 1992 года',
      cards: [
        { icon: 'fa-clock', title: 'С 1992 года', text: 'Более трёх десятилетий надёжного сервиса для путешественников со всего мира.' },
        { icon: 'fa-user', title: 'Лицензированные гиды', text: 'Лицензированные водители-гиды с глубоким знанием региона.' },
        { icon: 'fa-heart', title: 'Довольные путешественники', text: 'Тысячи довольных путешественников со всей Европы.' },
        { icon: 'fa-map-marker-alt', title: 'На заказ', text: 'Каждый маршрут индивидуален – никаких шаблонных автобусных туров.' },
      ],
      cardCols: 4,
      seeAlso: [
        { pageId: 'contact', label: 'Связаться с командой' },
        { pageId: 'about', label: 'Наша история' },
      ],
    },
    {
      anchor: 'europe-travellers',
      heading: 'Планирование поездки на Шри-Ланку из Европы',
      intro: [
        'Прямые и стыковочные рейсы связывают Коломбо с Москвой, Франкфуртом, Цюрихом, Парижем, Миланом и другими городами. Большинство европейских путешественников прилетают ночью и начинают тур на следующее утро – водитель встречает вас в аэропорту Бандаранаике (CMB).',
      ],
      subsections: [
        {
          heading: 'Полезные советы для поездки на Шри-Ланку',
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
            'Большинству европейских граждан нужна электронная виза (ETA) до прибытия. Подайте заявку онлайн минимум за 24–48 часов до вылета и сохраните подтверждение и номер. Детям нужна отдельная ETA.',
          ],
        },
        {
          heading: 'Безопасна ли Шри-Ланка для туристов?',
          paras: [
            'Шри-Ланка в целом безопасна и гостеприимна; миллионы туристов посещают её ежегодно без происшествий. Поездка с надёжным водителем-гидом от проверенного оператора избавляет от большинства хлопот с транспортом, ценами и маршрутом.',
          ],
        },
      ],
      seeAlso: [
        { pageId: 'guides', label: 'Путеводители по Шри-Ланке' },
        { pageId: 'restaurants', label: 'Рестораны Шри-Ланки' },
      ],
    },
  ],
  faqEyebrow: 'FAQ',
  faqHeading: 'Частые вопросы о турах по Шри-Ланке',
  faqs: [
    {
      q: 'Сколько дней нужно для тура по Шри-Ланке?',
      a: 'Семь–десять дней подходят большинству впервые приезжающих европейцев. Тур на 7 дней охватывает культуру, горы, сафари и пляжи; четырнадцать дней позволяют север, восток и люксовый юг без спешки.',
    },
    {
      q: 'В чём разница между групповым и частным туром?',
      a: 'Частный тур даёт вам отдельный автомобиль и водителя-гида – вы выбираете время, остановки и отели. Автобусные туры следуют фиксированному графику. Sundown Tours занимается исключительно частными турами на заказ.',
    },
    {
      q: 'Стоит ли брать водителя-гида на Шри-Ланке?',
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
      q: 'Нужна ли виза на Шри-Ланку?',
      a: 'Большинству граждан Европы нужна ETA (электронная виза), оформленная онлайн до поездки. Подайте заявку минимум за 48 часов; детям нужна отдельная ETA.',
    },
    {
      q: 'Можно ли составить индивидуальный медовый месяц или люксовый тур?',
      a: 'Каждый маршрут Sundown Tours создаётся на заказ. Мы организуем бутик-отели, приватные ужины, спа-процедуры и особые сюрпризы для медового месяца и люксового отдыха.',
    },
    {
      q: 'Как забронировать частный тур в Sundown Tours?',
      a: 'Выберите тур и продолжительность и отправьте запрос через форму обратной связи или WhatsApp. Мы ответим в течение 24 часов с индивидуальным предложением и прозрачными ценами.',
      links: [{ pageId: 'contact', label: 'Связаться с нами' }],
    },
  ],
};

export const HOME_SEO: Record<Locale, HomeSeoContent> = { en, de, fr, it, es, pl, ru, nl: en };
