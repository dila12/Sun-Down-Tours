import type { ArticleContent } from '../articles/types';

/**
 * Yala destination guide (pageId: destYala).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const YALA_DEST: ArticleContent = {
  en: {
    h1: 'Yala National Park, Sri Lanka: The Best Place on Earth to See a Leopard',
    lead: 'Yala holds one of the highest densities of leopards anywhere in the world, alongside elephants, sloth bears, crocodiles and hundreds of bird species all inside a dry-zone park that feels genuinely wild despite being one of the most visited in Sri Lanka.',
    heroImage: 'assets/img/destination-3.webp',
    heroAlt: 'A leopard resting on a rock outcrop in Yala National Park',
    sections: [
      {
        id: 'history',
        title: 'From royal hunting ground to national park',
        body: 'Long before it protected wildlife, the Yala region was hunted by Sri Lankan royalty and later by British colonial officers, who used it as a private game reserve into the 20th century. It was designated a wildlife sanctuary in 1900 and upgraded to national park status in 1938, making it one of the oldest and best-established parks in Asia.\n\nCivil conflict closed parts of Yala’s eastern blocks for years, which paradoxically let wildlife recover with almost no human pressure; today most of that area has reopened, and Yala’s leopard population is considered one of the healthiest and most studied on the continent.',
      },
      {
        id: 'culture',
        title: 'Ancient ruins hidden inside the park',
        body: 'Yala is not only wilderness: Sithulpahuwa, a working forest monastery inside the park boundaries, dates back over two thousand years and once housed thousands of monks, with dagobas and meditation caves still visited by pilgrims today. Magul Maha Viharaya, a smaller ruined temple complex, points to the same long Buddhist history layered underneath the jungle.\n\nFor centuries the area also sat within the ancient Ruhuna kingdom, whose irrigation tankseral now used as wildlife-watering reservoirs inside the parkhydraulic engineering that shaped Sri Lanka’s dry-zone civilisations.',
      },
      {
        id: 'thingsToDo',
        title: 'Safari experiences in Yala',
        body: 'Block 1, the most visited section, offers the best odds of a leopard sighting thanks to its density of sightings over decades, though it can feel busy with jeeps at peak season. A morning game drive (roughly 6–10 am) and an afternoon drive (2:30–6:30 pm) are the two standard sessions, each run in an open 4x4 jeep with a park tracker alongside your driver.\n\nBeyond leopards, expect sightings of elephants, sloth bears, spotted deer, wild buffalo, crocodiles basking at waterholes, and a genuinely serious bird list that includes painted storks, peacocks and several species of eagles patience as much as luck.',
      },
      {
        id: 'travelTips',
        title: 'Practical tips for a Yala safari',
        body: 'Book your jeep and park entry through your driver or hotel a day ahead where possible, since permit numbers are capped per block and popular slots fill up in peak season (December to March, and again around August). Neutral-coloured clothing, a hat, sunscreen and binoculars matter more here than at almost any cultural site in Sri Lanka.\n\nThe roads inside the park are unpaved and dusty; a scarf or buff for your face is a small comfort worth packing, and a zoom lens or binoculars will do far more for your leopard sighting than getting close.',
      },
      {
        id: 'weather',
        title: 'Weather and the best safari season',
        body: 'Yala sits in the dry zone, and the driest months from May to September concentrate wildlife around the park’s remaining waterholes, generally improving sighting odds. The park closes entirely for around a month each year, usually September, for the dry season’s controlled burn-off and habitat management.\n\nThe short rains around October–November green up the landscape and disperse animals more widely, which can mean quieter game drives but occasionally spectacular light for photography.',
      },
      {
        id: 'nearby',
        title: 'Nearby attractions worth combining',
        body: 'Ella is roughly two hours north-west by road, making a hill-country stop after an early Yala safari an efficient combination for travellers moving between the coast and the highlands. Tissamaharama and the nearby Kataragama temple complex, an important multi-faith pilgrimage site, sit just outside the park gates.\n\nMirissa and the south coast beaches are about two hours south-west, a natural next stop for travellers combining safari with beach time on a longer itinerary.',
      },
      {
        id: 'hotels',
        title: 'Where to stay near Yala',
        body: 'Accommodation clusters around Tissamaharama and the park’s main entrance, ranging from simple family guesthouses to safari-style tented camps and a few genuine luxury lodges set inside buffer-zone land where elephants occasionally wander past at night.\n\nStaying close to the entrance you plan to use matters more here than almost anywhere else in Sri Lanka, since it directly affects how early you can start your morning game drive and your odds of decent sightings before the midday heat.',
      },
      {
        id: 'restaurants',
        title: 'Eating around Yala',
        body: 'Most safari lodges and camps run full-board, building breakfast and dinner around the two game-drive sessions, with rice and curry, fresh seafood from nearby Tissamaharama and simple grilled options the norm. A packed breakfast box for the early morning drive is standard practice at almost every property.\n\nIn Tissamaharama town itself, a handful of local eateries serve honest, inexpensive Sri Lankan food away from the safari-lodge premium, worth seeking out if you are on a tighter budget.',
      },
    ],
    faq: [
      {
        q: 'What is the best time to visit Yala for leopard sightings?',
        a: 'The dry months from May to September usually give the best odds, as animals concentrate around fewer waterholes. That said, leopards are seen in Yala year-round, and the park closes for roughly a month each year for habitat management.',
      },
      {
        q: 'How many safaris should I book in Yala?',
        a: 'Two drivesng, one afternoonbly improve your odds of a good sighting compared with a single session, since animal activity and light change significantly between the two. A single morning drive is still worthwhile if time is limited.',
      },
      {
        q: 'Is a Yala safari guaranteed to include a leopard sighting?',
        a: 'No safari can guarantee a specific sighting, but Yala has one of the highest leopard densities in the world, and most multi-drive visits do see one. An experienced tracker riding alongside your driver meaningfully improves your chances.',
      },
      {
        q: 'How do I get to Yala from Colombo or the south coast?',
        a: 'Yala is roughly 4–5 hours by road from Colombo and about 2 hours from the south coast beaches around Mirissa, making it a natural stop on a beach-and-safari itinerary rather than a standalone day trip from the capital.',
      },
      {
        q: 'What should I wear and bring on a Yala safari?',
        a: 'Neutral, muted colours, a hat, sunscreen, and closed shoes for early cold mornings and dusty roads. Binoculars and a zoom lens matter far more than trying to get physically close to any animal.',
      },
    ],
    ctaTitle: 'Ready for a Yala safari?',
    ctaBody: 'We arrange private jeep safaris in Yala with licensed trackers, timed for the best morning or afternoon light, and combine them naturally with Ella, the south coast or the Cultural Triangle on longer private tours.',
    ctaLabel: 'Plan your Yala safari',
    relatedTours: [
      { pageId: 'tour2ey', label: '2 Day Ella & Yala Tour' },
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Sri Lanka Safari Guide' },
      { pageId: 'guideWildlife', label: 'Sri Lanka Wildlife Guide' },
    ],
  },

  de: {
    h1: 'Yala-Nationalpark, Sri Lanka: der beste Ort der Welt, um einen Leoparden zu sehen',
    lead: 'Yala hat eine der höchsten Leopardendichten weltweit, dazu Elefanten, Lippenbären, Krokodile und Hunderte Vogelarten – alles in einem Trockenzonen-Park, der trotz seiner Beliebtheit noch immer echte Wildnis ausstrahlt.',
    heroAlt: 'Ein Leopard ruht auf einem Felsvorsprung im Yala-Nationalpark',
    sections: [
      {
        title: 'Vom königlichen Jagdgebiet zum Nationalpark',
        body: 'Lange bevor er Wildtiere schützte, wurde das Gebiet um Yala von srilankischen Königen und später von britischen Kolonialoffizieren bejagt, die es bis ins 20. Jahrhundert als privates Jagdrevier nutzten. 1900 wurde es zum Wildschutzgebiet erklärt, 1938 zum Nationalpark aufgewertet – einer der ältesten und etabliertesten Parks Asiens.\n\nDer Bürgerkrieg hielt Teile der östlichen Zonen Yalas jahrelang geschlossen, was der Tierwelt paradoxerweise erlaubte, sich fast ohne menschlichen Druck zu erholen; heute ist der größte Teil dieses Gebiets wieder zugänglich, und Yalas Leopardenpopulation zählt zu den gesündesten und am besten erforschten des Kontinents.',
      },
      {
        title: 'Antike Ruinen mitten im Park',
        body: 'Yala ist nicht nur Wildnis: Sithulpahuwa, ein aktives Waldkloster innerhalb der Parkgrenzen, ist über zweitausend Jahre alt und beherbergte einst Tausende Mönche; Dagobas und Meditationshöhlen werden noch heute von Pilgern besucht. Magul Maha Viharaya, ein kleinerer Tempelruinenkomplex, zeugt von derselben langen buddhistischen Geschichte unter dem Dschungel.\n\nJahrhundertelang lag das Gebiet außerdem im alten Königreich Ruhuna, dessen Bewässerungstanks – einige heute Tränken für Wildtiere im Park – dieselbe hydraulische Ingenieurskunst widerspiegeln, die Sri Lankas Trockenzonen-Zivilisationen prägte.',
      },
      {
        title: 'Safari-Erlebnisse in Yala',
        body: 'Block 1, der meistbesuchte Bereich, bietet die besten Chancen auf eine Leopardensichtung dank jahrzehntelanger Beobachtungsdichte, kann aber zur Hochsaison voll mit Jeeps sein. Eine Morgenfahrt (etwa 6–10 Uhr) und eine Nachmittagsfahrt (14:30–18:30 Uhr) sind die beiden Standardtermine, jeweils in einem offenen 4x4-Jeep mit einem Park-Tracker neben Ihrem Fahrer.\n\nNeben Leoparden sind Elefanten, Lippenbären, Axishirsche, Wildbüffel, sich an Wasserlöchern sonnende Krokodile und eine wirklich beachtliche Vogelwelt zu erwarten, darunter Buntstörche, Pfauen und mehrere Adlerarten – Yala belohnt Geduld ebenso wie Glück.',
      },
      {
        title: 'Praktische Tipps für eine Yala-Safari',
        body: 'Buchen Sie Jeep und Parkeintritt wenn möglich einen Tag im Voraus über Ihren Fahrer oder Ihr Hotel, da die Permit-Zahlen pro Block begrenzt sind und beliebte Zeiten in der Hochsaison (Dezember bis März, erneut um August) ausgebucht sind. Neutrale Kleidung, Hut, Sonnencreme und Fernglas zählen hier mehr als an fast jedem Kulturort Sri Lankas.\n\nDie Straßen im Park sind unbefestigt und staubig; ein Schal oder Buff fürs Gesicht ist eine kleine, lohnende Ergänzung, und ein Zoomobjektiv oder Fernglas bringt für die Leopardensichtung deutlich mehr als körperliche Nähe.',
      },
      {
        title: 'Wetter und beste Safari-Saison',
        body: 'Yala liegt in der Trockenzone, und die trockensten Monate von Mai bis September konzentrieren die Tierwelt um die verbleibenden Wasserlöcher, was die Sichtungschancen meist verbessert. Der Park schließt jedes Jahr für etwa einen Monat, meist im September, wegen kontrollierter Brandrodung und Habitatpflege in der Trockenzeit.\n\nDie kurzen Regenfälle um Oktober–November lassen die Landschaft ergrünen und verteilen die Tiere weiter, was ruhigere Fahrten, aber gelegentlich spektakuläres Fotolicht bedeuten kann.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Ella liegt etwa zwei Autostunden nordwestlich, sodass sich ein Bergland-Stopp nach einer frühen Yala-Safari gut mit der Weiterreise zwischen Küste und Hochland kombinieren lässt. Tissamaharama und der nahe Kataragama-Tempelkomplex, ein bedeutender multireligiöser Pilgerort, liegen direkt vor den Parktoren.\n\nMirissa und die Strände der Südküste sind etwa zwei Stunden südwestlich entfernt – ein naheliegender nächster Stopp für Reisende, die Safari mit Strandzeit auf einer längeren Route verbinden möchten.',
      },
      {
        title: 'Wo man in der Nähe von Yala übernachten kann',
        body: 'Unterkünfte konzentrieren sich rund um Tissamaharama und den Haupteingang des Parks, von einfachen Familienpensionen bis zu Zeltcamps im Safari-Stil und einigen echten Luxus-Lodges im Pufferzonenland, an denen nachts gelegentlich Elefanten vorbeiziehen.\n\nDie Nähe zum geplanten Parkeingang zählt hier mehr als fast überall sonst in Sri Lanka, da sie direkt beeinflusst, wie früh Sie die morgendliche Pirschfahrt starten können und wie gut Ihre Chancen auf gute Sichtungen vor der Mittagshitze sind.',
      },
      {
        title: 'Essen rund um Yala',
        body: 'Die meisten Safari-Lodges und -Camps bieten Vollpension und richten Frühstück und Abendessen an den beiden Pirschfahrten aus, mit Rice and Curry, frischem Fisch aus dem nahen Tissamaharama und einfachen gegrillten Optionen als Standard. Eine Frühstücksbox für die frühe Morgenfahrt ist in fast jeder Unterkunft üblich.\n\nIn Tissamaharama selbst servieren einige lokale Lokale ehrliches, günstiges srilankisches Essen ohne den Safari-Lodge-Aufpreis – lohnend für alle mit kleinerem Budget.',
      },
    ],
    faq: [
      {
        q: 'Wann ist die beste Zeit für Leopardensichtungen in Yala?',
        a: 'Die Trockenmonate von Mai bis September bieten meist die besten Chancen, da sich Tiere um weniger Wasserlöcher konzentrieren. Leoparden werden in Yala jedoch das ganze Jahr über gesichtet, und der Park schließt jährlich etwa einen Monat wegen Habitatpflege.',
      },
      {
        q: 'Wie viele Safaris sollte ich in Yala buchen?',
        a: 'Zwei Fahrten – eine morgens, eine nachmittags – verbessern die Sichtungschancen deutlich gegenüber nur einer Fahrt, da sich Tieraktivität und Licht zwischen beiden stark unterscheiden. Bei begrenzter Zeit lohnt sich aber auch eine einzelne Morgenfahrt.',
      },
      {
        q: 'Ist eine Leopardensichtung bei einer Yala-Safari garantiert?',
        a: 'Keine Safari kann eine bestimmte Sichtung garantieren, aber Yala hat eine der weltweit höchsten Leopardendichten, und die meisten Besuche mit mehreren Fahrten sehen tatsächlich einen. Ein erfahrener Tracker neben Ihrem Fahrer verbessert die Chancen deutlich.',
      },
      {
        q: 'Wie komme ich von Colombo oder der Südküste nach Yala?',
        a: 'Yala ist etwa 4–5 Autostunden von Colombo und rund 2 Stunden von den Südküstenstränden um Mirissa entfernt – eher ein natürlicher Zwischenstopp auf einer Strand-und-Safari-Route als ein Tagesausflug ab der Hauptstadt.',
      },
      {
        q: 'Was sollte ich für eine Yala-Safari mitbringen und tragen?',
        a: 'Neutrale, gedeckte Farben, einen Hut, Sonnencreme und geschlossene Schuhe für kalte frühe Morgen und staubige Straßen. Fernglas und Zoomobjektiv sind weit wichtiger, als körperlich nahe an ein Tier zu kommen.',
      },
    ],
    ctaTitle: 'Bereit für eine Yala-Safari?',
    ctaBody: 'Wir organisieren private Jeep-Safaris in Yala mit lizenzierten Trackern, zeitlich auf das beste Morgen- oder Nachmittagslicht abgestimmt, und verbinden sie auf längeren privaten Rundreisen natürlich mit Ella, der Südküste oder dem Kulturdreieck.',
    ctaLabel: 'Yala-Safari planen',
    relatedTours: [
      { pageId: 'tour2ey', label: '2-tägige Ella & Yala Tour' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Sri Lanka Safari-Ratgeber' },
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Parc national de Yala, Sri Lanka : le meilleur endroit au monde pour voir un léopard',
    lead: 'Yala abrite l’une des plus fortes densités de léopards au monde, aux côtés d’éléphants, d’ours lippus, de crocodiles et de centaines d’espèces d’oiseaux un parc de zone sèche qui garde un caractère véritablement sauvage malgré sa popularité.',
    heroAlt: 'Un léopard reposant sur un affleurement rocheux dans le parc national de Yala',
    sections: [
      {
        title: 'D’un terrain de chasse royal à un parc national',
        body: 'Longtemps avant de protéger la faune, la région de Yala fut chassée par la royauté sri-lankaise puis par les officiers coloniaux britanniques, qui en firent une réserve de chasse privée jusqu’au XXe siècle. Elle fut classée sanctuaire faunique en 1900, puis élevée au rang de parc national en 1938, ce qui en fait l’un des parcs les plus anciens et les mieux établis d’Asie.\n\nLe conflit civil ferma pendant des années certaines zones orientales de Yala, ce qui, paradoxalement, permit à la faune de se rétablir presque sans pression humaine ; la majeure partie de cette zone est aujourd’hui rouverte, et la population de léopards de Yala est considérée comme l’une des plus saines et des plus étudiées du continent.',
      },
      {
        title: 'Des ruines anciennes cachées dans le parc',
        body: 'Yala n’est pas que nature sauvage : Sithulpahuwa, un monastère forestier actif à l’intérieur du parc, remonte à plus de deux mille ans et abritait autrefois des milliers de moines ; ses dagobas et grottes de méditation sont encore visités par des pèlerins aujourd’hui. Magul Maha Viharaya, un complexe de temples en ruine plus modeste, témoigne de cette même longue histoire bouddhiste enfouie sous la jungle.\n\nPendant des siècles, la région appartint également à l’ancien royaume de Ruhuna, dont les réservoirs d’irrigationlusieurs servant aujourd’hui de points d’eau pour la faune à l’intérieur du parceflètent le même génie hydraulique qui a façonné les civilisations de la zone sèche du Sri Lanka.',
      },
      {
        title: 'Les safaris à Yala',
        body: 'Le Bloc 1, la section la plus fréquentée, offre les meilleures chances d’apercevoir un léopard grâce à des décennies d’observations, même s’il peut sembler encombré de jeeps en haute saison. Un safari matinal (environ 6h-10h) et un safari en après-midi (14h30-18h30) constituent les deux créneaux standards, chacun réalisé en jeep 4x4 découverte avec un pisteur du parc aux côtés de votre chauffeur.\n\nAu-delà des léopards, attendez-vous à observer éléphants, ours lippus, cerfs axis, buffles sauvages, crocodiles se chauffant au bord des points d’eau, et une avifaune vraiment remarquable comprenant tantales indiens, paons et plusieurs espèces d’aigles Yala récompense autant la patience que la chance.',
      },
      {
        title: 'Conseils pratiques pour un safari à Yala',
        body: 'Réservez votre jeep et votre entrée au parc via votre chauffeur ou votre hôtel un jour à l’avance si possible, car le nombre de permis est plafonné par bloc et les créneaux populaires se remplissent vite en haute saison (décembre à mars, puis à nouveau vers août). Vêtements de couleurs neutres, chapeau, crème solaire et jumelles comptent ici plus que sur presque tout site culturel du Sri Lanka.\n\nLes pistes du parc sont non goudronnées et poussiéreuses ; une écharpe ou un tour de cou pour le visage est un petit confort qui vaut la peine, et un téléobjectif ou des jumelles feront bien plus pour votre observation d’un léopard que de chercher à s’en approcher.',
      },
      {
        title: 'Météo et meilleure saison pour le safari',
        body: 'Yala se trouve en zone sèche, et les mois les plus secs de mai à septembre concentrent la faune autour des points d’eau restants, ce qui améliore généralement les chances d’observation. Le parc ferme entièrement environ un mois chaque année, généralement en septembre, pour le brûlage contrôlé et la gestion de l’habitat en saison sèche.\n\nLes courtes pluies d’octobre-novembre reverdissent le paysage et dispersent davantage les animaux, ce qui peut donner des safaris plus calmes mais une lumière parfois spectaculaire pour la photographie.',
      },
      {
        title: 'Sites à combiner aux alentours',
        body: 'Ella se trouve à environ deux heures de route au nord-ouest, faisant d’une étape dans les hautes terres après un safari matinal à Yala une combinaison efficace pour les voyageurs se déplaçant entre la côte et les hauts plateaux. Tissamaharama et le complexe de temples voisin de Kataragama, important lieu de pèlerinage multiconfessionnel, se trouvent juste à l’extérieur des grilles du parc.\n\nMirissa et les plages de la côte sud sont à environ deux heures au sud-ouest, une étape naturelle pour les voyageurs combinant safari et détente balnéaire sur un itinéraire plus long.',
      },
      {
        title: 'Où loger près de Yala',
        body: 'Les hébergements se concentrent autour de Tissamaharama et de l’entrée principale du parc, allant de simples pensions familiales à des camps de tentes façon safari et quelques véritables lodges de luxe situés en zone tampon, où des éléphants passent parfois la nuit.\n\nLoger près de l’entrée que vous prévoyez d’utiliser compte ici plus que presque partout ailleurs au Sri Lanka, car cela influence directement l’heure à laquelle vous pouvez démarrer votre safari matinal et vos chances de bonnes observations avant la chaleur de midi.',
      },
      {
        title: 'Se restaurer autour de Yala',
        body: 'La plupart des lodges et camps de safari fonctionnent en pension complète, organisant petit-déjeuner et dîner autour des deux sessions de safari, avec rice and curry, poisson frais de Tissamaharama et options grillées simples en usage courant. Un panier petit-déjeuner pour le départ matinal est une pratique standard dans presque tous les établissements.\n\nÀ Tissamaharama même, quelques restaurants locaux servent une cuisine sri-lankaise honnête et bon marché, loin des tarifs des lodges de safari à chercher pour les budgets plus serrés.',
      },
    ],
    faq: [
      {
        q: 'Quelle est la meilleure période pour observer les léopards à Yala ?',
        a: 'Les mois secs de mai à septembre offrent généralement les meilleures chances, car les animaux se concentrent autour de moins de points d’eau. Cela dit, des léopards sont observés à Yala toute l’année, et le parc ferme environ un mois chaque année pour la gestion de l’habitat.',
      },
      {
        q: 'Combien de safaris devrais-je réserver à Yala ?',
        a: 'Deux sorties une le matin, une l’après-midi améliorent nettement vos chances d’une belle observation par rapport à une seule session, car l’activité animale et la lumière changent beaucoup entre les deux. Un seul safari matinal reste néanmoins intéressant si le temps est limité.',
      },
      {
        q: 'Un safari à Yala garantit-il de voir un léopard ?',
        a: 'Aucun safari ne peut garantir une observation précise, mais Yala a l’une des plus fortes densités de léopards au monde, et la plupart des visites avec plusieurs sorties en voient un. Un pisteur expérimenté aux côtés de votre chauffeur améliore sensiblement les chances.',
      },
      {
        q: 'Comment se rendre à Yala depuis Colombo ou la côte sud ?',
        a: 'Yala est à environ 4-5 heures de route de Colombo et à environ 2 heures des plages de la côte sud autour de Mirissa, ce qui en fait une étape naturelle sur un itinéraire plage-safari plutôt qu’une excursion d’une journée depuis la capitale.',
      },
      {
        q: 'Que dois-je porter et apporter pour un safari à Yala ?',
        a: 'Des couleurs neutres et discrètes, un chapeau, de la crème solaire et des chaussures fermées pour les matins frais et les pistes poussiéreuses. Jumelles et téléobjectif comptent bien plus que chercher à s’approcher physiquement d’un animal.',
      },
    ],
    ctaTitle: 'Prêt pour un safari à Yala ?',
    ctaBody: 'Nous organisons des safaris privés en jeep à Yala avec des pisteurs agréés, programmés pour la meilleure lumière du matin ou de l’après-midi, et les combinons naturellement avec Ella, la côte sud ou le Triangle Culturel sur des circuits privés plus longs.',
    ctaLabel: 'Organiser votre safari à Yala',
    relatedTours: [
      { pageId: 'tour2ey', label: 'Circuit de 2 jours Ella & Yala' },
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guide des safaris au Sri Lanka' },
      { pageId: 'guideWildlife', label: 'Guide de la faune du Sri Lanka' },
    ],
  },

  it: {
    h1: 'Parco nazionale di Yala, Sri Lanka: il posto migliore al mondo per vedere un leopardo',
    lead: 'Yala ha una delle più alte densità di leopardi al mondo, insieme a elefanti, orsi labiati, coccodrilli e centinaia di specie di uccelli un parco della zona secca che resta genuinamente selvaggio nonostante sia tra i più visitati dello Sri Lanka.',
    heroAlt: 'Un leopardo riposa su una roccia nel parco nazionale di Yala',
    sections: [
      {
        title: 'Da riserva di caccia reale a parco nazionale',
        body: 'Molto prima di proteggere la fauna, la regione di Yala era cacciata dalla nobiltà singalese e poi dagli ufficiali coloniali britannici, che la usarono come riserva di caccia privata fino al XX secolo. Fu dichiarata santuario faunistico nel 1900 e promossa a parco nazionale nel 1938, rendendola uno dei parchi più antichi e consolidati dell’Asia.\n\nIl conflitto civile chiuse per anni parti dei settori orientali di Yala, il che, paradossalmente, permise alla fauna di recuperare quasi senza pressione umana; oggi gran parte di quell’area è di nuovo aperta, e la popolazione di leopardi di Yala è considerata tra le più sane e studiate del continente.',
      },
      {
        title: 'Antiche rovine nascoste nel parco',
        body: 'Yala non è solo natura selvaggia: Sithulpahuwa, un monastero forestale attivo all’interno dei confini del parco, risale a oltre duemila anni fa e ospitò migliaia di monaci; dagoba e grotte di meditazione sono ancora visitate da pellegrini oggi. Magul Maha Viharaya, un complesso templare più piccolo e in rovina, testimonia la stessa lunga storia buddhista sepolta sotto la giungla.\n\nPer secoli l’area appartenne anche all’antico regno di Ruhuna, i cui bacini di irrigazione alcuni oggi usati come pozze d’acqua per la fauna all’interno del parco riflettono la stessa ingegneria idraulica che ha modellato le civiltà della zona secca dello Sri Lanka.',
      },
      {
        title: 'Esperienze di safari a Yala',
        body: 'Il Blocco 1, la sezione più visitata, offre le migliori probabilità di avvistare un leopardo grazie a decenni di osservazioni, anche se in alta stagione può risultare affollato di jeep. Un safari al mattino (circa 6-10) e uno al pomeriggio (14:30-18:30) sono le due sessioni standard, ciascuna su una jeep 4x4 scoperta con un tracker del parco al fianco del vostro autista.\n\nOltre ai leopardi, aspettatevi avvistamenti di elefanti, orsi labiati, cervi pomellati, bufali selvatici, coccodrilli che si scaldano ai punti d’acqua e una lista di uccelli davvero notevole, tra cui cicogne dipinte, pavoni e diverse specie di aquile: Yala premia la pazienza tanto quanto la fortuna.',
      },
      {
        title: 'Consigli pratici per un safari a Yala',
        body: 'Prenotate jeep e ingresso al parco tramite il vostro autista o hotel un giorno prima, se possibile, poiché il numero di permessi è limitato per blocco e gli orari più richiesti si esauriscono in alta stagione (dicembre-marzo, e di nuovo verso agosto). Abiti di colori neutri, cappello, protezione solare e binocolo contano qui più che in quasi ogni sito culturale dello Sri Lanka.\n\nLe strade all’interno del parco sono sterrate e polverose; una sciarpa o un buff per il viso è un piccolo comfort utile da portare, e un teleobiettivo o un binocolo faranno molto più per il vostro avvistamento di un leopardo che cercare di avvicinarvi fisicamente.',
      },
      {
        title: 'Clima e stagione migliore per il safari',
        body: 'Yala si trova nella zona secca, e i mesi più aridi da maggio a settembre concentrano la fauna intorno ai punti d’acqua rimanenti, generalmente migliorando le probabilità di avvistamento. Il parco chiude completamente per circa un mese ogni anno, di solito a settembre, per la bruciatura controllata e la gestione dell’habitat in stagione secca.\n\nLe brevi piogge tra ottobre e novembre rinverdiscono il paesaggio e disperdono gli animali su un’area più ampia, il che può significare safari più tranquilli ma una luce a volte spettacolare per le fotografie.',
      },
      {
        title: 'Attrazioni nei dintorni da abbinare',
        body: 'Ella si trova a circa due ore di auto a nord-ovest, rendendo una tappa collinare dopo un safari mattutino a Yala una combinazione efficiente per chi si muove tra costa e altopiani. Tissamaharama e il vicino complesso templare di Kataragama, importante luogo di pellegrinaggio multiconfessionale, si trovano appena fuori dai cancelli del parco.\n\nMirissa e le spiagge della costa meridionale sono a circa due ore a sud-ovest, una tappa naturale successiva per chi combina safari e mare in un itinerario più lungo.',
      },
      {
        title: 'Dove alloggiare vicino a Yala',
        body: 'Le strutture si concentrano intorno a Tissamaharama e all’ingresso principale del parco, dalle semplici guesthouse familiari ai campi tendati in stile safari e ad alcuni veri lodge di lusso situati in zone cuscinetto, dove di notte capita che passino elefanti.\n\nAlloggiare vicino all’ingresso che si intende usare conta qui più che quasi ovunque altrove in Sri Lanka, perché influisce direttamente su quanto presto si può partire per il safari mattutino e sulle probabilità di buoni avvistamenti prima del caldo di mezzogiorno.',
      },
      {
        title: 'Dove mangiare intorno a Yala',
        body: 'La maggior parte dei lodge e campi safari offre pensione completa, organizzando colazione e cena attorno alle due sessioni di safari, con rice and curry, pesce fresco dalla vicina Tissamaharama e semplici opzioni alla griglia come norma. Un cestino colazione per la partenza mattutina è pratica standard in quasi tutte le strutture.\n\nA Tissamaharama stessa, alcuni locali servono cibo sri-lankese onesto ed economico, lontano dai prezzi premium dei lodge safari da cercare per chi ha un budget più contenuto.',
      },
    ],
    faq: [
      {
        q: 'Qual è il periodo migliore per vedere i leopardi a Yala?',
        a: 'I mesi secchi da maggio a settembre offrono generalmente le migliori probabilità, poiché gli animali si concentrano intorno a meno punti d’acqua. Detto questo, a Yala si vedono leopardi tutto l’anno, e il parco chiude circa un mese all’anno per la gestione dell’habitat.',
      },
      {
        q: 'Quanti safari dovrei prenotare a Yala?',
        a: 'Due uscite una al mattino, una al pomeriggio migliorano sensibilmente le probabilità di un buon avvistamento rispetto a una sola sessione, poiché l’attività degli animali e la luce cambiano molto tra le due. Un solo safari mattutino resta comunque utile se il tempo è limitato.',
      },
      {
        q: 'Un safari a Yala garantisce l’avvistamento di un leopardo?',
        a: 'Nessun safari può garantire un avvistamento specifico, ma Yala ha una delle densità di leopardi più alte al mondo, e la maggior parte delle visite con più uscite ne vede uno. Un tracker esperto al fianco del vostro autista migliora concretamente le probabilità.',
      },
      {
        q: 'Come si arriva a Yala da Colombo o dalla costa sud?',
        a: 'Yala è a circa 4-5 ore di auto da Colombo e a circa 2 ore dalle spiagge della costa sud vicino a Mirissa, il che la rende una tappa naturale in un itinerario mare-safari piuttosto che una gita di un giorno dalla capitale.',
      },
      {
        q: 'Cosa dovrei indossare e portare per un safari a Yala?',
        a: 'Colori neutri e discreti, un cappello, protezione solare e scarpe chiuse per le mattine fresche e le strade polverose. Binocolo e teleobiettivo contano molto più che cercare di avvicinarsi fisicamente a un animale.',
      },
    ],
    ctaTitle: 'Pronti per un safari a Yala?',
    ctaBody: 'Organizziamo safari privati in jeep a Yala con tracker autorizzati, programmati per la luce migliore del mattino o del pomeriggio, e li combiniamo naturalmente con Ella, la costa sud o il Triangolo Culturale nei tour privati più lunghi.',
    ctaLabel: 'Organizza il tuo safari a Yala',
    relatedTours: [
      { pageId: 'tour2ey', label: 'Tour di 2 giorni Ella e Yala' },
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guida ai safari in Sri Lanka' },
      { pageId: 'guideWildlife', label: 'Guida alla fauna dello Sri Lanka' },
    ],
  },

  es: {
    h1: 'Parque Nacional de Yala, Sri Lanka: el mejor lugar del mundo para ver un leopardo',
    lead: 'Yala tiene una de las mayores densidades de leopardos del mundo, junto a elefantes, osos labiados, cocodrilos y cientos de especies de aves, todo dentro de un parque de zona seca que se siente genuinamente salvaje pese a ser uno de los más visitados de Sri Lanka.',
    heroAlt: 'Un leopardo descansando sobre una roca en el Parque Nacional de Yala',
    sections: [
      {
        title: 'De coto de caza real a parque nacional',
        body: 'Mucho antes de proteger la fauna, la región de Yala fue cazada por la realeza cingalesa y después por oficiales coloniales británicos, que la usaron como reserva de caza privada hasta el siglo XX. Fue declarada santuario de vida salvaje en 1900 y ascendida a parque nacional en 1938, lo que la convierte en uno de los parques más antiguos y consolidados de Asia.\n\nEl conflicto civil mantuvo cerradas durante años partes de los sectores orientales de Yala, lo que, paradójicamente, permitió que la fauna se recuperara casi sin presión humana; hoy la mayor parte de esa zona ha reabierto, y la población de leopardos de Yala se considera una de las más sanas y estudiadas del continente.',
      },
      {
        title: 'Ruinas antiguas escondidas dentro del parque',
        body: 'Yala no es solo naturaleza salvaje: Sithulpahuwa, un monasterio forestal activo dentro de los límites del parque, tiene más de dos mil años y en su día albergó a miles de monjes; sus dagobas y cuevas de meditación siguen recibiendo peregrinos hoy en día. Magul Maha Viharaya, un complejo de templos en ruinas más pequeño, apunta a esa misma larga historia budista bajo la jungla.\n\nDurante siglos, la zona también formó parte del antiguo reino de Ruhuna, cuyos embalses de irrigaciónvarios usados hoy como abrevaderos para la fauna dentro del parque— reflejan la misma ingeniería hidráulica que dio forma a las civilizaciones de la zona seca de Sri Lanka.',
      },
      {
        title: 'Experiencias de safari en Yala',
        body: 'El Bloque 1, la sección más visitada, ofrece las mejores probabilidades de ver un leopardo gracias a décadas de avistamientos, aunque puede sentirse concurrido de jeeps en temporada alta. Un safari matutino (aproximadamente de 6 a 10) y uno vespertino (14:30-18:30) son las dos sesiones estándar, cada una en un jeep 4x4 descubierto con un rastreador del parque junto a su conductor.\n\nMás allá de los leopardos, se pueden ver elefantes, osos labiados, ciervos moteados, búfalos salvajes, cocodrilos tomando el sol junto a las charcas y una lista de aves realmente notable, con cigüeñas pintadas, pavos reales y varias especies de águilas: Yala recompensa tanto la paciencia como la suerte.',
      },
      {
        title: 'Consejos prácticos para un safari en Yala',
        body: 'Reserve el jeep y la entrada al parque a través de su conductor o su hotel con un día de antelación si es posible, ya que el número de permisos está limitado por bloque y las franjas horarias más populares se agotan en temporada alta (diciembre a marzo, y de nuevo hacia agosto). La ropa de colores neutros, un sombrero, protector solar y prismáticos importan aquí más que en casi cualquier sitio cultural de Sri Lanka.\n\nLas pistas dentro del parque no están asfaltadas y son polvorientas; una bufanda o braga de cuello para la cara es una pequeña comodidad que merece la pena, y un teleobjetivo o unos prismáticos harán mucho más por su avistamiento de un leopardo que intentar acercarse físicamente.',
      },
      {
        title: 'Clima y mejor temporada para el safari',
        body: 'Yala está en la zona seca, y los meses más secos, de mayo a septiembre, concentran la fauna alrededor de las charcas restantes, lo que suele mejorar las probabilidades de avistamiento. El parque cierra por completo alrededor de un mes cada año, normalmente en septiembre, para la quema controlada y la gestión del hábitat en temporada seca.\n\nLas breves lluvias de octubre-noviembre reverdecen el paisaje y dispersan más a los animales, lo que puede significar safaris más tranquilos, pero con una luz a veces espectacular para la fotografía.',
      },
      {
        title: 'Atracciones cercanas para combinar',
        body: 'Ella está a unas dos horas en coche al noroeste, lo que convierte una parada en las tierras altas tras un safari matutino en Yala en una combinación eficiente para quienes se mueven entre la costa y el altiplano. Tissamaharama y el cercano complejo de templos de Kataragama, importante lugar de peregrinación multiconfesional, se encuentran justo a las puertas del parque.\n\nMirissa y las playas de la costa sur están a unas dos horas al suroeste, una siguiente parada natural para quienes combinan safari y playa en un itinerario más largo.',
      },
      {
        title: 'Dónde alojarse cerca de Yala',
        body: 'El alojamiento se concentra alrededor de Tissamaharama y la entrada principal del parque, desde sencillas casas de huéspedes familiares hasta campamentos de estilo safari con tiendas y algunos auténticos lodges de lujo situados en zonas de amortiguamiento, donde de noche a veces pasan elefantes.\n\nAlojarse cerca de la entrada que planea usar importa aquí más que en casi cualquier otro lugar de Sri Lanka, ya que influye directamente en lo temprano que puede empezar su safari matutino y en sus probabilidades de buenos avistamientos antes del calor del mediodía.',
      },
      {
        title: 'Dónde comer cerca de Yala',
        body: 'La mayoría de los lodges y campamentos de safari funcionan en pensión completa, organizando el desayuno y la cena en torno a las dos sesiones de safari, con rice and curry, pescado fresco de la cercana Tissamaharama y sencillas opciones a la parrilla como norma. Una caja de desayuno para la salida matutina es práctica habitual en casi todos los alojamientos.\n\nEn el propio pueblo de Tissamaharama, algunos restaurantes locales sirven comida srilankesa honesta y económica, lejos del precio premium de los lodges de safari, que merece la pena buscar si el presupuesto es más ajustado.',
      },
    ],
    faq: [
      {
        q: '¿Cuál es la mejor época para ver leopardos en Yala?',
        a: 'Los meses secos de mayo a septiembre suelen ofrecer las mejores probabilidades, ya que los animales se concentran alrededor de menos charcas. Aun así, se ven leopardos en Yala durante todo el año, y el parque cierra alrededor de un mes cada año para la gestión del hábitat.',
      },
      {
        q: '¿Cuántos safaris debería reservar en Yala?',
        a: 'Dos salidasa matutina, otra vespertina— mejoran notablemente las probabilidades de un buen avistamiento frente a una sola sesión, ya que la actividad animal y la luz cambian mucho entre ambas. Un único safari matutino sigue mereciendo la pena si el tiempo es limitado.',
      },
      {
        q: '¿Un safari en Yala garantiza ver un leopardo?',
        a: 'Ningún safari puede garantizar un avistamiento concreto, pero Yala tiene una de las mayores densidades de leopardos del mundo, y la mayoría de las visitas con varias salidas sí ven uno. Un rastreador experimentado junto a su conductor mejora notablemente las probabilidades.',
      },
      {
        q: '¿Cómo se llega a Yala desde Colombo o la costa sur?',
        a: 'Yala está a unas 4-5 horas en coche desde Colombo y a unas 2 horas de las playas de la costa sur cerca de Mirissa, lo que la convierte en una parada natural en un itinerario de playa y safari en lugar de una excursión de un día desde la capital.',
      },
      {
        q: '¿Qué debo llevar y ponerme para un safari en Yala?',
        a: 'Colores neutros y discretos, un sombrero, protector solar y calzado cerrado para las mañanas frías y las pistas polvorientas. Los prismáticos y el teleobjetivo importan mucho más que intentar acercarse físicamente a un animal.',
      },
    ],
    ctaTitle: '¿Listo para un safari en Yala?',
    ctaBody: 'Organizamos safaris privados en jeep en Yala con rastreadores autorizados, programados para la mejor luz de la mañana o la tarde, y los combinamos de forma natural con Ella, la costa sur o el Triángulo Cultural en tours privados más largos.',
    ctaLabel: 'Planifique su safari en Yala',
    relatedTours: [
      { pageId: 'tour2ey', label: 'Tour de 2 días Ella y Yala' },
      { pageId: 'tour5', label: 'Tour de 5 días por Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guía de safaris en Sri Lanka' },
      { pageId: 'guideWildlife', label: 'Guía de fauna de Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Park Narodowy Yala, Sri Lanka: najlepsze miejsce na świecie, by zobaczyć lamparta',
    lead: 'Yala ma jedną z najwyższych na świecie zagęszczeń lampartów, a do tego słonie, niedźwiedzie wargowe, krokodyle i setki gatunków ptaków – wszystko w suchym parku, który wciąż wydaje się naprawdę dziki, choć jest jednym z najczęściej odwiedzanych na Sri Lance.',
    heroAlt: 'Lampart odpoczywający na skalnym występie w Parku Narodowym Yala',
    sections: [
      {
        title: 'Od królewskich terenów łowieckich do parku narodowego',
        body: 'Długo przed ochroną dzikiej przyrody region Yali był terenem polowań lankijskiej szlachty, a później brytyjskich oficerów kolonialnych, którzy do XX wieku wykorzystywali go jako prywatny rezerwat łowny. W 1900 roku ogłoszono go rezerwatem przyrody, a w 1938 roku podniesiono do statusu parku narodowego, co czyni go jednym z najstarszych i najlepiej ugruntowanych parków w Azji.\n\nKonflikt wewnętrzny na lata zamknął część wschodnich sektorów Yali, co paradoksalnie pozwoliło dzikiej przyrodzie odbudować się przy praktycznie zerowej presji ludzkiej; dziś większość tego obszaru jest ponownie otwarta, a populacja lampartów w Yali uważana jest za jedną z najzdrowszych i najlepiej zbadanych na kontynencie.',
      },
      {
        title: 'Starożytne ruiny skryte w parku',
        body: 'Yala to nie tylko dzika przyroda: Sithulpahuwa, działający leśny klasztor na terenie parku, ma ponad dwa tysiące lat i kiedyś mieścił tysiące mnichów; dagoby i jaskinie medytacyjne wciąż odwiedzają pielgrzymi. Magul Maha Viharaya, mniejszy zrujnowany kompleks świątynny, wskazuje na tę samą długą buddyjską historię skrytą pod dżunglą.\n\nPrzez wieki region należał również do starożytnego królestwa Ruhuna, którego zbiorniki irygacyjne – kilka z nich dziś służy jako wodopoje dla zwierząt w parku – odzwierciedlają tę samą inżynierię wodną, która ukształtowała cywilizacje suchej strefy Sri Lanki.',
      },
      {
        title: 'Safari w Yali',
        body: 'Blok 1, najczęściej odwiedzana część, daje najlepsze szanse na spotkanie lamparta dzięki dziesięcioleciom obserwacji, choć w wysokim sezonie bywa zatłoczony dżipami. Poranna przejażdżka (ok. 6:00–10:00) i popołudniowa (14:30–18:30) to dwie standardowe sesje, każda w odkrytym dżipie 4x4 z parkowym tropicielem obok kierowcy.\n\nOprócz lampartów można liczyć na słonie, niedźwiedzie wargowe, jelenie plamiste, bawoły dzikie, krokodyle wygrzewające się przy wodopojach oraz naprawdę bogatą listę ptaków, w tym bociany malowane, pawie i kilka gatunków orłów – Yala nagradza zarówno cierpliwość, jak i szczęście.',
      },
      {
        title: 'Praktyczne wskazówki na safari w Yali',
        body: 'Zarezerwuj dżipa i wstęp do parku przez swojego kierowcę lub hotel z dnia wyprzedzeniem, jeśli to możliwe, ponieważ liczba pozwoleń na blok jest ograniczona, a popularne terminy wypełniają się w wysokim sezonie (grudzień–marzec i ponownie wokół sierpnia). Neutralne kolory ubrania, kapelusz, krem z filtrem i lornetka liczą się tu bardziej niż na prawie każdym miejscu kulturowym Sri Lanki.\n\nDrogi w parku są nieutwardzone i zapylone; szal lub buff na twarz to mały, ale wartościowy dodatek, a teleobiektyw lub lornetka zrobią znacznie więcej dla obserwacji lamparta niż próba fizycznego zbliżenia.',
      },
      {
        title: 'Pogoda i najlepszy sezon na safari',
        body: 'Yala leży w suchej strefie, a najsuchsze miesiące od maja do września skupiają dzikie zwierzęta wokół pozostałych wodopojów, co zwykle zwiększa szanse na obserwacje. Park zamyka się całkowicie na około miesiąc każdego roku, zwykle w wrześniu, na potrzeby kontrolowanego wypalania i zarządzania siedliskiem w sezonie suchym.\n\nKrótkie deszcze wokół października–listopada zazieleniają krajobraz i rozpraszają zwierzęta na większym obszarze, co może oznaczać spokojniejsze przejażdżki, ale czasem spektakularne światło do fotografii.',
      },
      {
        title: 'Atrakcje w okolicy warte połączenia',
        body: 'Ella leży około dwóch godzin jazdy na północny zachód, co sprawia, że przystanek w górach po wczesnym safari w Yali jest efektywnym połączeniem dla podróżnych przemieszczających się między wybrzeżem a wyżynami. Tissamaharama i pobliski kompleks świątynny Kataragama, ważne miejsce wielowyznaniowych pielgrzymek, leżą tuż za bramami parku.\n\nMirissa i plaże południowego wybrzeża są około dwóch godzin na południowy zachód – naturalny kolejny przystanek dla podróżnych łączących safari z czasem na plaży w dłuższej trasie.',
      },
      {
        title: 'Gdzie się zatrzymać w pobliżu Yali',
        body: 'Zakwaterowanie skupia się wokół Tissamaharamy i głównego wejścia do parku, od prostych rodzinnych pensjonatów po namiotowe obozy w stylu safari i kilka prawdziwie luksusowych lodży na terenie strefy buforowej, gdzie nocą czasem przechodzą słonie.\n\nZatrzymanie się blisko planowanego wejścia do parku liczy się tu bardziej niż niemal wszędzie na Sri Lance, ponieważ wpływa bezpośrednio na to, jak wcześnie możesz zacząć poranną przejażdżkę i jakie masz szanse na dobre obserwacje przed południowym upałem.',
      },
      {
        title: 'Gdzie zjeść w okolicy Yali',
        body: 'Większość lodży i obozów safari działa na zasadzie pełnego wyżywienia, organizując śniadanie i kolację wokół dwóch sesji safari, ze standardowym rice and curry, świeżymi owocami morza z pobliskiej Tissamaharamy i prostymi opcjami z grilla. Pudełko śniadaniowe na wczesny wyjazd to standard w niemal każdym obiekcie.\n\nW samej Tissamaharamie kilka lokalnych restauracji serwuje uczciwe, niedrogie lankijskie jedzenie bez narzutu typowego dla lodży safari – warto ich poszukać przy ograniczonym budżecie.',
      },
    ],
    faq: [
      {
        q: 'Jaki jest najlepszy czas na obserwację lampartów w Yali?',
        a: 'Suche miesiące od maja do września zwykle dają najlepsze szanse, bo zwierzęta skupiają się wokół mniejszej liczby wodopojów. Lamparty widuje się w Yali jednak przez cały rok, a park zamyka się na około miesiąc rocznie w celu zarządzania siedliskiem.',
      },
      {
        q: 'Ile safari powinienem zarezerwować w Yali?',
        a: 'Dwie przejażdżki – jedna poranna, jedna popołudniowa – znacznie zwiększają szanse na dobrą obserwację w porównaniu z jedną sesją, bo aktywność zwierząt i światło mocno się między nimi różnią. Jedna poranna przejażdżka wciąż jest wartościowa, jeśli czasu jest mało.',
      },
      {
        q: 'Czy safari w Yali gwarantuje zobaczenie lamparta?',
        a: 'Żadne safari nie może zagwarantować konkretnej obserwacji, ale Yala ma jedną z najwyższych na świecie gęstości populacji lampartów, i większość wizyt z kilkoma przejażdżkami kończy się jego zobaczeniem. Doświadczony tropiciel jadący z kierowcą realnie zwiększa szanse.',
      },
      {
        q: 'Jak dojechać do Yali z Colombo lub z południowego wybrzeża?',
        a: 'Yala leży około 4–5 godzin jazdy od Colombo i około 2 godzin od plaż południowego wybrzeża wokół Mirissy, co czyni ją naturalnym przystankiem na trasie plaża–safari, a nie samodzielną jednodniową wycieczką ze stolicy.',
      },
      {
        q: 'Co powinienem nosić i zabrać na safari w Yali?',
        a: 'Neutralne, spokojne kolory, kapelusz, krem z filtrem i zakryte buty na chłodne wczesne poranki i zapylone drogi. Lornetka i teleobiektyw liczą się znacznie bardziej niż próba fizycznego zbliżenia się do zwierzęcia.',
      },
    ],
    ctaTitle: 'Gotowy na safari w Yali?',
    ctaBody: 'Organizujemy prywatne safari dżipem w Yali z licencjonowanymi tropicielami, zaplanowane na najlepsze światło poranne lub popołudniowe, i naturalnie łączymy je z Ellą, południowym wybrzeżem lub Trójkątem Kulturowym w dłuższych prywatnych wycieczkach.',
    ctaLabel: 'Zaplanuj swoje safari w Yali',
    relatedTours: [
      { pageId: 'tour2ey', label: '2-dniowa wycieczka Ella i Yala' },
      { pageId: 'tour5', label: '5-dniowa wycieczka po Sri Lance' },
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Przewodnik safari po Sri Lance' },
      { pageId: 'guideWildlife', label: 'Przewodnik po dzikiej przyrodzie Sri Lanki' },
    ],
  },

  ru: {
    h1: 'Национальный парк Яла, Шри-Ланка: лучшее место на земле, чтобы увидеть леопарда',
    lead: 'В Яле одна из самых высоких в мире плотностей леопардов, а также слоны, губастые медведи, крокодилы и сотни видов птиц всё это в парке засушливой зоны, который остаётся по-настоящему диким, несмотря на популярность.',
    heroAlt: 'Леопард отдыхает на скальном выступе в национальном парке Яла',
    sections: [
      {
        title: 'От королевских охотничьих угодий до национального парка',
        body: 'Задолго до того, как стать заповедником, регион Яла был охотничьими угодьями шри-ланкийской знати, а затем британских колониальных офицеров, использовавших его как частный охотничий резерват до XX века. В 1900 году территория получила статус заповедника, а в 1938 годутатус национального парка, что делает его одним из старейших и наиболее устоявшихся парков Азии.\n\nГражданский конфликт на годы закрыл часть восточных секторов Ялы, что парадоксальным образом позволило дикой природе восстановиться почти без давления человека; сегодня большая часть этой территории снова открыта, а популяция леопардов в Яле считается одной из самых здоровых и изученных на континенте.',
      },
      {
        title: 'Древние руины, скрытые в парке',
        body: 'Ялато не только дикая природа: Ситхулпахува, действующий лесной монастырь на территории парка, существует более двух тысяч лет и когда-то принимал тысячи монахов; дагобы и пещеры для медитации до сих пор посещают паломники. Магул Маха Вихарая, меньший руинированный храмовый комплекс, свидетельствует о той же долгой буддийской истории, скрытой под джунглями.\n\nВеками эта территория также входила в древнее королевство Рухуна, чьи оросительные резервуарыоторые сегодня служат водопоями для животных внутри парка отражают ту же гидротехническую инженерию, сформировавшую цивилизации засушливой зоны Шри-Ланки.',
      },
      {
        title: 'Сафари в Яле',
        body: 'Блок 1, самая посещаемая часть парка, даёт наилучшие шансы увидеть леопарда благодаря десятилетиям наблюдений, хотя в высокий сезон здесь может быть многолюдно от джипов. Утреннее сафари (примерно 6:00–10:00) и дневное (14:30–18:30) два стандартных сеанса, каждый на открытом джипе 4x4 с парковым следопытом рядом с водителем.\n\nКроме леопардов, ожидайте встреч со слонами, губастыми медведями, пятнистыми оленями, дикими буйволами, крокодилами, греющимися у водопоев, и по-настоящему впечатляющим списком птиц, включающим расписных аистов, павлинов и несколько видов орлов Яла вознаграждает терпение не меньше, чем удачу.',
      },
      {
        title: 'Практические советы для сафари в Яле',
        body: 'Бронируйте джип и вход в парк через своего водителя или отель за день, если возможно, поскольку количество разрешений на блок ограничено, а популярные слоты быстро заканчиваются в высокий сезон (декабрь–март и снова около августа). Одежда неброских цветов, шляпа, солнцезащитный крем и бинокль значат здесь больше, чем почти на любом культурном объекте Шри-Ланки.\n\nДороги внутри парка немощёные и пыльные; шарф или бафф для лица небольшое, но полезное дополнение, а телеобъектив или бинокль сделают для наблюдения за леопардом гораздо больше, чем попытка физически приблизиться.',
      },
      {
        title: 'Погода и лучший сезон для сафари',
        body: 'Яла находится в засушливой зоне, и самые сухие месяцы с мая по сентябрь концентрируют животных вокруг оставшихся водопоев, что обычно повышает шансы на наблюдения. Парк полностью закрывается примерно на месяц каждый год, обычно в сентябре, для контролируемого выжигания и управления местообитаниями в сухой сезон.\n\nКороткие дожди в октябре–ноябре делают ландшафт зеленее и рассеивают животных на большей территории, что может означать более спокойные поездки, но иногда впечатляющий свет для фотографии.',
      },
      {
        title: 'Что посмотреть в окрестностях',
        body: 'Элла находится примерно в двух часах езды к северо-западу, что делает остановку в горах после раннего сафари в Яле эффективным сочетанием для путешественников, перемещающихся между побережьем и нагорьем. Тиссамахарама и близкий храмовый комплекс Катарагама, важное место паломничества разных религий, находятся прямо у ворот парка.\n\nМирисса и пляжи южного побережья находятся примерно в двух часах езды на юго-запад естественная следующая остановка для тех, кто сочетает сафари с пляжным отдыхом в более длинном маршруте.',
      },
      {
        title: 'Где остановиться возле Ялы',
        body: 'Жильё сосредоточено вокруг Тиссамахарамы и главного входа в парк от простых семейных гостевых домов до палаточных лагерей в стиле сафари и нескольких настоящих люксовых лоджей на территории буферной зоны, где по ночам иногда проходят слоны.\n\nВыбор жилья рядом с тем входом, которым вы планируете пользоваться, здесь важнее почти чем где-либо ещё в Шри-Ланке, поскольку это напрямую влияет на то, как рано вы сможете начать утреннее сафари, и на ваши шансы на хорошие наблюдения до полуденной жары.',
      },
      {
        title: 'Где поесть в районе Ялы',
        body: 'Большинство сафари-лоджей и лагерей работают по системе полного пансиона, строя завтрак и ужин вокруг двух сеансов сафари, с рисом и карри, свежими морепродуктами из близкой Тиссамахарамы и простыми блюдами на гриле как нормой. Коробка с завтраком для раннего выезда обычная практика почти в каждом отеле.\n\nВ самой Тиссамахараме несколько местных заведений подают честную, недорогую шри-ланкийскую еду без наценки сафари-лоджей стоит поискать их при более скромном бюджете.',
      },
    ],
    faq: [
      {
        q: 'Когда лучше всего ехать в Ялу, чтобы увидеть леопарда?',
        a: 'Сухие месяцы с мая по сентябрь обычно дают лучшие шансы, поскольку животные концентрируются вокруг меньшего числа водопоев. При этом леопардов в Яле видят весь год, а парк закрывается примерно на месяц ежегодно для управления местообитаниями.',
      },
      {
        q: 'Сколько сафари стоит забронировать в Яле?',
        a: 'Две поездки утренняя и дневная заметно повышают шансы на хорошее наблюдение по сравнению с одной, поскольку активность животных и освещение сильно меняются между ними. Одна утренняя поездка всё же стоит своего, если времени мало.',
      },
      {
        q: 'Гарантирует ли сафари в Яле встречу с леопардом?',
        a: 'Никакое сафари не может гарантировать конкретное наблюдение, но в Яле одна из самых высоких плотностей леопардов в мире, и большинство визитов с несколькими поездками действительно видят одного. Опытный следопыт рядом с водителем заметно повышает шансы.',
      },
      {
        q: 'Как добраться до Ялы из Коломбо или с южного побережья?',
        a: 'Яла находится примерно в 4–5 часах езды от Коломбо и около 2 часов от пляжей южного побережья возле Мириссы, что делает её естественной остановкой в маршруте «пляж плюс сафари», а не самостоятельной однодневной поездкой из столицы.',
      },
      {
        q: 'Что взять и надеть на сафари в Яле?',
        a: 'Неброские, нейтральные цвета одежды, шляпу, солнцезащитный крем и закрытую обувь для прохладных ранних утр и пыльных дорог. Бинокль и телеобъектив важнее, чем попытка физически приблизиться к животному.',
      },
    ],
    ctaTitle: 'Готовы к сафари в Яле?',
    ctaBody: 'Мы организуем частные джип-сафари в Яле с лицензированными следопытами, приуроченные к лучшему утреннему или дневному свету, и естественно сочетаем их с Эллой, южным побережьем или Культурным треугольником в более длинных частных турах.',
    ctaLabel: 'Спланировать сафари в Яле',
    relatedTours: [
      { pageId: 'tour2ey', label: '2-дневный тур Элла и Яла' },
      { pageId: 'tour5', label: '5-дневный тур по Шри-Ланке' },
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Элла' },
      { pageId: 'destGalle', label: 'Галле' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Гид по сафари в Шри-Ланке' },
      { pageId: 'guideWildlife', label: 'Гид по дикой природе Шри-Ланки' },
    ],
  },
  nl: {
    h1: 'Yala-Nationalpark, Sri Lanka: der beste Ort der Welt, um einen Leoparden zu sehen',
    lead: 'Yala hat eine der höchsten Leopardendichten weltweit, dazu Elefanten, Lippenbären, Krokodile und Hunderte Vogelarten – alles in einem Trockenzonen-Park, der trotz seiner Beliebtheit noch immer echte Wildnis ausstrahlt.',
    heroAlt: 'Ein Leopard ruht auf einem Felsvorsprung im Yala-Nationalpark',
    sections: [
      {
        title: 'Vom königlichen Jagdgebiet zum Nationalpark',
        body: 'Lange bevor er Wildtiere schützte, wurde das Gebiet um Yala von srilankischen Königen und später von britischen Kolonialoffizieren bejagt, die es bis ins 20. Jahrhundert als privates Jagdrevier nutzten. 1900 wurde es zum Wildschutzgebiet erklärt, 1938 zum Nationalpark aufgewertet – einer der ältesten und etabliertesten Parks Asiens.\n\nDer Bürgerkrieg hielt Teile der östlichen Zonen Yalas jahrelang geschlossen, was der Tierwelt paradoxerweise erlaubte, sich fast ohne menschlichen Druck zu erholen; heute ist der größte Teil dieses Gebiets wieder zugänglich, und Yalas Leopardenpopulation zählt zu den gesündesten und am besten erforschten des Kontinents.',
      },
      {
        title: 'Antike Ruinen mitten im Park',
        body: 'Yala ist nicht nur Wildnis: Sithulpahuwa, ein aktives Waldkloster innerhalb der Parkgrenzen, ist über zweitausend Jahre alt und beherbergte einst Tausende Mönche; Dagobas und Meditationshöhlen werden noch heute von Pilgern besucht. Magul Maha Viharaya, ein kleinerer Tempelruinenkomplex, zeugt von derselben langen buddhistischen Geschichte unter dem Dschungel.\n\nJahrhundertelang lag das Gebiet außerdem im alten Königreich Ruhuna, dessen Bewässerungstanks – einige heute Tränken für Wildtiere im Park – dieselbe hydraulische Ingenieurskunst widerspiegeln, die Sri Lankas Trockenzonen-Zivilisationen prägte.',
      },
      {
        title: 'Safari-Erlebnisse in Yala',
        body: 'Block 1, der meistbesuchte Bereich, bietet die besten Chancen auf eine Leopardensichtung dank jahrzehntelanger Beobachtungsdichte, kann aber zur Hochsaison voll mit Jeeps sein. Eine Morgenfahrt (etwa 6–10 Uhr) und eine Nachmittagsfahrt (14:30–18:30 Uhr) sind die beiden Standardtermine, jeweils in einem offenen 4x4-Jeep mit einem Park-Tracker neben Ihrem Fahrer.\n\nNeben Leoparden sind Elefanten, Lippenbären, Axishirsche, Wildbüffel, sich an Wasserlöchern sonnende Krokodile und eine wirklich beachtliche Vogelwelt zu erwarten, darunter Buntstörche, Pfauen und mehrere Adlerarten – Yala belohnt Geduld ebenso wie Glück.',
      },
      {
        title: 'Praktische Tipps für eine Yala-Safari',
        body: 'Buchen Sie Jeep und Parkeintritt wenn möglich einen Tag im Voraus über Ihren Fahrer oder Ihr Hotel, da die Permit-Zahlen pro Block begrenzt sind und beliebte Zeiten in der Hochsaison (Dezember bis März, erneut um August) ausgebucht sind. Neutrale Kleidung, Hut, Sonnencreme und Fernglas zählen hier mehr als an fast jedem Kulturort Sri Lankas.\n\nDie Straßen im Park sind unbefestigt und staubig; ein Schal oder Buff fürs Gesicht ist eine kleine, lohnende Ergänzung, und ein Zoomobjektiv oder Fernglas bringt für die Leopardensichtung deutlich mehr als körperliche Nähe.',
      },
      {
        title: 'Wetter und beste Safari-Saison',
        body: 'Yala liegt in der Trockenzone, und die trockensten Monate von Mai bis September konzentrieren die Tierwelt um die verbleibenden Wasserlöcher, was die Sichtungschancen meist verbessert. Der Park schließt jedes Jahr für etwa einen Monat, meist im September, wegen kontrollierter Brandrodung und Habitatpflege in der Trockenzeit.\n\nDie kurzen Regenfälle um Oktober–November lassen die Landschaft ergrünen und verteilen die Tiere weiter, was ruhigere Fahrten, aber gelegentlich spektakuläres Fotolicht bedeuten kann.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Ella liegt etwa zwei Autostunden nordwestlich, sodass sich ein Bergland-Stopp nach einer frühen Yala-Safari gut mit der Weiterreise zwischen Küste und Hochland kombinieren lässt. Tissamaharama und der nahe Kataragama-Tempelkomplex, ein bedeutender multireligiöser Pilgerort, liegen direkt vor den Parktoren.\n\nMirissa und die Strände der Südküste sind etwa zwei Stunden südwestlich entfernt – ein naheliegender nächster Stopp für Reisende, die Safari mit Strandzeit auf einer längeren Route verbinden möchten.',
      },
      {
        title: 'Wo man in der Nähe von Yala übernachten kann',
        body: 'Unterkünfte konzentrieren sich rund um Tissamaharama und den Haupteingang des Parks, von einfachen Familienpensionen bis zu Zeltcamps im Safari-Stil und einigen echten Luxus-Lodges im Pufferzonenland, an denen nachts gelegentlich Elefanten vorbeiziehen.\n\nDie Nähe zum geplanten Parkeingang zählt hier mehr als fast überall sonst in Sri Lanka, da sie direkt beeinflusst, wie früh Sie die morgendliche Pirschfahrt starten können und wie gut Ihre Chancen auf gute Sichtungen vor der Mittagshitze sind.',
      },
      {
        title: 'Essen rund um Yala',
        body: 'Die meisten Safari-Lodges und -Camps bieten Vollpension und richten Frühstück und Abendessen an den beiden Pirschfahrten aus, mit Rice and Curry, frischem Fisch aus dem nahen Tissamaharama und einfachen gegrillten Optionen als Standard. Eine Frühstücksbox für die frühe Morgenfahrt ist in fast jeder Unterkunft üblich.\n\nIn Tissamaharama selbst servieren einige lokale Lokale ehrliches, günstiges srilankisches Essen ohne den Safari-Lodge-Aufpreis – lohnend für alle mit kleinerem Budget.',
      },
    ],
    faq: [
      {
        q: 'Wann ist die beste Zeit für Leopardensichtungen in Yala?',
        a: 'Die Trockenmonate von Mai bis September bieten meist die besten Chancen, da sich Tiere um weniger Wasserlöcher konzentrieren. Leoparden werden in Yala jedoch das ganze Jahr über gesichtet, und der Park schließt jährlich etwa einen Monat wegen Habitatpflege.',
      },
      {
        q: 'Wie viele Safaris sollte ich in Yala buchen?',
        a: 'Zwei Fahrten – eine morgens, eine nachmittags – verbessern die Sichtungschancen deutlich gegenüber nur einer Fahrt, da sich Tieraktivität und Licht zwischen beiden stark unterscheiden. Bei begrenzter Zeit lohnt sich aber auch eine einzelne Morgenfahrt.',
      },
      {
        q: 'Ist eine Leopardensichtung bei einer Yala-Safari garantiert?',
        a: 'Keine Safari kann eine bestimmte Sichtung garantieren, aber Yala hat eine der weltweit höchsten Leopardendichten, und die meisten Besuche mit mehreren Fahrten sehen tatsächlich einen. Ein erfahrener Tracker neben Ihrem Fahrer verbessert die Chancen deutlich.',
      },
      {
        q: 'Wie komme ich von Colombo oder der Südküste nach Yala?',
        a: 'Yala ist etwa 4–5 Autostunden von Colombo und rund 2 Stunden von den Südküstenstränden um Mirissa entfernt – eher ein natürlicher Zwischenstopp auf einer Strand-und-Safari-Route als ein Tagesausflug ab der Hauptstadt.',
      },
      {
        q: 'Was sollte ich für eine Yala-Safari mitbringen und tragen?',
        a: 'Neutrale, gedeckte Farben, einen Hut, Sonnencreme und geschlossene Schuhe für kalte frühe Morgen und staubige Straßen. Fernglas und Zoomobjektiv sind weit wichtiger, als körperlich nahe an ein Tier zu kommen.',
      },
    ],
    ctaTitle: 'Bereit für eine Yala-Safari?',
    ctaBody: 'Wir organisieren private Jeep-Safaris in Yala mit lizenzierten Trackern, zeitlich auf das beste Morgen- oder Nachmittagslicht abgestimmt, und verbinden sie auf längeren privaten Rundreisen natürlich mit Ella, der Südküste oder dem Kulturdreieck.',
    ctaLabel: 'Yala-Safari planen',
    relatedTours: [
      { pageId: 'tour2ey', label: '2-tägige Ella & Yala Tour' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Sri Lanka Safari-Ratgeber' },
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt-Ratgeber' },
    ],
  }
};
