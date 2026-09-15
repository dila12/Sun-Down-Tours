import type { ArticleContent } from '../articles/types';

/**
 * Yala destination guide (pageId: destYala).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const YALA_DEST: ArticleContent = {
  en: {
    h1: 'Yala National Park Safari, Sri Lanka: The Best Place to See a Leopard',
    lead: 'A Yala National Park safari is the classic Sri Lanka wildlife day: one of the highest leopard densities in the world, plus elephants, sloth bears, crocodiles and hundreds of bird species in a dry-zone park that still feels wild despite being one of the most visited on the island.',
    heroImage: 'assets/img/destination-3.webp',
    heroAlt: 'A leopard resting on a rock outcrop in Yala National Park',
    sections: [
      {
        id: 'history',
        title: 'From royal hunting ground to national park',
        body: 'Long before it protected wildlife, the Yala region was hunted by Sri Lankan royalty and later by British colonial officers, who used it as a private game reserve into the 20th century. It was designated a wildlife sanctuary in 1900 and upgraded to national park status in 1938, making it one of the oldest and best established parks in Asia.\n\nCivil conflict closed parts of Yala’s eastern blocks for years, which paradoxically let wildlife recover with almost no human pressure; today most of that area has reopened, and Yala’s leopard population is considered one of the healthiest and most studied on the continent.',
      },
      {
        id: 'culture',
        title: 'Ancient ruins hidden inside the park',
        body: 'Yala is not only wilderness: Sithulpahuwa, a working forest monastery inside the park boundaries, dates back over two thousand years and once housed thousands of monks, with dagobas and meditation caves still visited by pilgrims today. Magul Maha Viharaya, a smaller ruined temple complex, points to the same long Buddhist history layered underneath the jungle.\n\nFor centuries the area also sat within the ancient Ruhuna kingdom, whose irrigation tankseral now used as wildlife watering reservoirs inside the parkhydraulic engineering that shaped Sri Lanka’s dry zone civilisations.',
      },
      {
        id: 'thingsToDo',
        title: 'Safari experiences in Yala',
        body: 'Block 1, the most visited section, offers the best odds of a leopard sighting thanks to its density of sightings over decades, though it can feel busy with jeeps at peak season. A morning game drive (roughly 6 to 10 am) and an afternoon drive (2:30 to 6:30 pm) are the two standard sessions, each run in an open 4x4 jeep with a park tracker alongside your driver.\n\nBeyond leopards, expect sightings of elephants, sloth bears, spotted deer, wild buffalo, crocodiles basking at waterholes, and a genuinely serious bird list that includes painted storks, peacocks and several species of eagles patience as much as luck.',
      },
      {
        id: 'travelTips',
        title: 'Practical tips for a Yala safari',
        body: 'Book your jeep and park entry through your driver or hotel a day ahead where possible, since permit numbers are capped per block and popular slots fill up in peak season (December to March, and again around August). Neutral coloured clothing, a hat, sunscreen and binoculars matter more here than at almost any cultural site in Sri Lanka.\n\nThe roads inside the park are unpaved and dusty; a scarf or buff for your face is a small comfort worth packing, and a zoom lens or binoculars will do far more for your leopard sighting than getting close.',
      },
      {
        id: 'weather',
        title: 'Weather and the best safari season',
        body: 'Yala sits in the dry zone, and the driest months from May to September concentrate wildlife around the park’s remaining waterholes, generally improving sighting odds. The park closes entirely for around a month each year, usually September, for the dry season’s controlled burn off and habitat management.\n\nThe short rains around October to November green up the landscape and disperse animals more widely, which can mean quieter game drives but occasionally spectacular light for photography.',
      },
      {
        id: 'nearby',
        title: 'Nearby attractions worth combining',
        body: 'Ella is roughly two hours north west by road, making a hill country stop after an early Yala safari an efficient combination for travellers moving between the coast and the highlands. Tissamaharama and the nearby Kataragama temple complex, an important multi faith pilgrimage site, sit just outside the park gates.\n\nMirissa and the south coast beaches are about two hours southwest, a natural next stop for travellers combining safari with beach time on a longer itinerary.',
      },
      {
        id: 'hotels',
        title: 'Where to stay near Yala',
        body: 'Accommodation clusters around Tissamaharama and the park’s main entrance, ranging from simple family guesthouses to safari style tented camps and a few genuine luxury lodges set inside buffer zone land where elephants occasionally wander past at night.\n\nStaying close to the entrance you plan to use matters more here than almost anywhere else in Sri Lanka, since it directly affects how early you can start your morning game drive and your odds of decent sightings before the midday heat.',
      },
      {
        id: 'restaurants',
        title: 'Eating around Yala',
        body: 'Most safari lodges and camps run full board, building breakfast and dinner around the two game drive sessions, with rice and curry, fresh seafood from nearby Tissamaharama and simple grilled options the norm. A packed breakfast box for the early morning drive is standard practice at almost every property.\n\nIn Tissamaharama town itself, a handful of local eateries serve honest, inexpensive Sri Lankan food away from the safari lodge premium, worth seeking out if you are on a tighter budget.',
      },
    ],
    faq: [
      {
        q: 'What is the best time to visit Yala for leopard sightings?',
        a: 'The dry months from May to September usually give the best odds, as animals concentrate around fewer waterholes. That said, leopards are seen in Yala year round, and the park closes for roughly a month each year for habitat management.',
      },
      {
        q: 'How many safaris should I book in Yala?',
        a: 'Two drivesng, one afternoonbly improve your odds of a good sighting compared with a single session, since animal activity and light change significantly between the two. A single morning drive is still worthwhile if time is limited.',
      },
      {
        q: 'Is a Yala safari guaranteed to include a leopard sighting?',
        a: 'No safari can guarantee a specific sighting, but Yala has one of the highest leopard densities in the world, and most multi drive visits do see one. An experienced tracker riding alongside your driver meaningfully improves your chances.',
      },
      {
        q: 'How do I get to Yala from Colombo or the south coast?',
        a: 'Yala is roughly 4 to 5 hours by road from Colombo and about 2 hours from the south coast beaches around Mirissa, making it a natural stop on a beach and safari itinerary rather than a standalone day trip from the capital.',
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
    h1: 'Yala Nationalpark, Sri Lanka: der beste Ort der Welt, um einen Leoparden zu sehen',
    lead: 'Yala hat eine der hochsten Leopardendichten weltweit, dazu Elefanten, Lippenbaren, Krokodile und Hunderte Vogelarten  alles in einem Trockenzonen Park, der trotz seiner Beliebtheit noch immer echte Wildnis ausstrahlt.',
    heroAlt: 'Ein Leopard ruht auf einem Felsvorsprung im Yala Nationalpark',
    sections: [
      {
        title: 'Vom koniglichen Jagdgebiet zum Nationalpark',
        body: 'Lange bevor er Wildtiere schutzte, wurde das Gebiet um Yala von srilankischen Konigen und spater von britischen Kolonialoffizieren bejagt, die es bis ins 20. Jahrhundert als privates Jagdrevier nutzten. 1900 wurde es zum Wildschutzgebiet erklart, 1938 zum Nationalpark aufgewertet  einer der altesten und etabliertesten Parks Asiens.\n\nDer Burgerkrieg hielt Teile der ostlichen Zonen Yalas jahrelang geschlossen, was der Tierwelt paradoxerweise erlaubte, sich fast ohne menschlichen Druck zu erholen; heute ist der grosste Teil dieses Gebiets wieder zuganglich, und Yalas Leopardenpopulation zahlt zu den gesundesten und am besten erforschten des Kontinents.',
      },
      {
        title: 'Antike Ruinen mitten im Park',
        body: 'Yala ist nicht nur Wildnis: Sithulpahuwa, ein aktives Waldkloster innerhalb der Parkgrenzen, ist uber zweitausend Jahre alt und beherbergte einst Tausende Monche; Dagobas und Meditationshohlen werden noch heute von Pilgern besucht. Magul Maha Viharaya, ein kleinerer Tempelruinenkomplex, zeugt von derselben langen buddhistischen Geschichte unter dem Dschungel.\n\nJahrhundertelang lag das Gebiet ausserdem im alten Konigreich Ruhuna, dessen Bewasserungstanks  einige heute Tranken fur Wildtiere im Park  dieselbe hydraulische Ingenieurskunst widerspiegeln, die Sri Lankas Trockenzonen Zivilisationen pragte.',
      },
      {
        title: 'Safari Erlebnisse in Yala',
        body: 'Block 1, der meistbesuchte Bereich, bietet die besten Chancen auf eine Leopardensichtung dank jahrzehntelanger Beobachtungsdichte, kann aber zur Hochsaison voll mit Jeeps sein. Eine Morgenfahrt (etwa 6 to 10 Uhr) und eine Nachmittagsfahrt (14:30 to 18:30 Uhr) sind die beiden Standardtermine, jeweils in einem offenen 4x4 Jeep mit einem Park Tracker neben Ihrem Fahrer.\n\nNeben Leoparden sind Elefanten, Lippenbaren, Axishirsche, Wildbuffel, sich an Wasserlochern sonnende Krokodile und eine wirklich beachtliche Vogelwelt zu erwarten, darunter Buntstorche, Pfauen und mehrere Adlerarten  Yala belohnt Geduld ebenso wie Gluck.',
      },
      {
        title: 'Praktische Tipps fur eine Yala Safari',
        body: 'Buchen Sie Jeep und Parkeintritt wenn moglich einen Tag im Voraus uber Ihren Fahrer oder Ihr Hotel, da die Permit Zahlen pro Block begrenzt sind und beliebte Zeiten in der Hochsaison (Dezember bis Marz, erneut um August) ausgebucht sind. Neutrale Kleidung, Hut, Sonnencreme und Fernglas zahlen hier mehr als an fast jedem Kulturort Sri Lankas.\n\nDie Strassen im Park sind unbefestigt und staubig; ein Schal oder Buff furs Gesicht ist eine kleine, lohnende Erganzung, und ein Zoomobjektiv oder Fernglas bringt fur die Leopardensichtung deutlich mehr als korperliche Nahe.',
      },
      {
        title: 'Wetter und beste Safari Saison',
        body: 'Yala liegt in der Trockenzone, und die trockensten Monate von Mai bis September konzentrieren die Tierwelt um die verbleibenden Wasserlocher, was die Sichtungschancen meist verbessert. Der Park schliesst jedes Jahr fur etwa einen Monat, meist im September, wegen kontrollierter Brandrodung und Habitatpflege in der Trockenzeit.\n\nDie kurzen Regenfalle um Oktober to November lassen die Landschaft ergrunen und verteilen die Tiere weiter, was ruhigere Fahrten, aber gelegentlich spektakulares Fotolicht bedeuten kann.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Ella liegt etwa zwei Autostunden nordwestlich, sodass sich ein Bergland Stopp nach einer fruhen Yala Safari gut mit der Weiterreise zwischen Kuste und Hochland kombinieren lasst. Tissamaharama und der nahe Kataragama Tempelkomplex, ein bedeutender multireligioser Pilgerort, liegen direkt vor den Parktoren.\n\nMirissa und die Strande der Sudkuste sind etwa zwei Stunden sudwestlich entfernt  ein naheliegender nachster Stopp fur Reisende, die Safari mit Strandzeit auf einer langeren Route verbinden mochten.',
      },
      {
        title: 'Wo man in der Nahe von Yala ubernachten kann',
        body: 'Unterkunfte konzentrieren sich rund um Tissamaharama und den Haupteingang des Parks, von einfachen Familienpensionen bis zu Zeltcamps im Safari Stil und einigen echten Luxus Lodges im Pufferzonenland, an denen nachts gelegentlich Elefanten vorbeiziehen.\n\nDie Nahe zum geplanten Parkeingang zahlt hier mehr als fast uberall sonst in Sri Lanka, da sie direkt beeinflusst, wie fruh Sie die morgendliche Pirschfahrt starten konnen und wie gut Ihre Chancen auf gute Sichtungen vor der Mittagshitze sind.',
      },
      {
        title: 'Essen rund um Yala',
        body: 'Die meisten Safari Lodges und Camps bieten Vollpension und richten Fruhstuck und Abendessen an den beiden Pirschfahrten aus, mit Rice and Curry, frischem Fisch aus dem nahen Tissamaharama und einfachen gegrillten Optionen als Standard. Eine Fruhstucksbox fur die fruhe Morgenfahrt ist in fast jeder Unterkunft ublich.\n\nIn Tissamaharama selbst servieren einige lokale Lokale ehrliches, gunstiges srilankisches Essen ohne den Safari Lodge Aufpreis  lohnend fur alle mit kleinerem Budget.',
      },
    ],
    faq: [
      {
        q: 'Wann ist die beste Zeit fur Leopardensichtungen in Yala?',
        a: 'Die Trockenmonate von Mai bis September bieten meist die besten Chancen, da sich Tiere um weniger Wasserlocher konzentrieren. Leoparden werden in Yala jedoch das ganze Jahr uber gesichtet, und der Park schliesst jahrlich etwa einen Monat wegen Habitatpflege.',
      },
      {
        q: 'Wie viele Safaris sollte ich in Yala buchen?',
        a: 'Zwei Fahrten  eine morgens, eine nachmittags  verbessern die Sichtungschancen deutlich gegenuber nur einer Fahrt, da sich Tieraktivitat und Licht zwischen beiden stark unterscheiden. Bei begrenzter Zeit lohnt sich aber auch eine einzelne Morgenfahrt.',
      },
      {
        q: 'Ist eine Leopardensichtung bei einer Yala Safari garantiert?',
        a: 'Keine Safari kann eine bestimmte Sichtung garantieren, aber Yala hat eine der weltweit hochsten Leopardendichten, und die meisten Besuche mit mehreren Fahrten sehen tatsachlich einen. Ein erfahrener Tracker neben Ihrem Fahrer verbessert die Chancen deutlich.',
      },
      {
        q: 'Wie komme ich von Colombo oder der Sudkuste nach Yala?',
        a: 'Yala ist etwa 4 to 5 Autostunden von Colombo und rund 2 Stunden von den Sudkustenstranden um Mirissa entfernt  eher ein naturlicher Zwischenstopp auf einer Strand und Safari Route als ein Tagesausflug ab der Hauptstadt.',
      },
      {
        q: 'Was sollte ich fur eine Yala Safari mitbringen und tragen?',
        a: 'Neutrale, gedeckte Farben, einen Hut, Sonnencreme und geschlossene Schuhe fur kalte fruhe Morgen und staubige Strassen. Fernglas und Zoomobjektiv sind weit wichtiger, als korperlich nahe an ein Tier zu kommen.',
      },
    ],
    ctaTitle: 'Bereit fur eine Yala Safari?',
    ctaBody: 'Wir organisieren private Jeep Safaris in Yala mit lizenzierten Trackern, zeitlich auf das beste Morgen- oder Nachmittagslicht abgestimmt, und verbinden sie auf langeren privaten Rundreisen naturlich mit Ella, der Sudkuste oder dem Kulturdreieck.',
    ctaLabel: 'Yala Safari planen',
    relatedTours: [
      { pageId: 'tour2ey', label: '2 tagige Ella & Yala Tour' },
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Sri Lanka Safari Ratgeber' },
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt Ratgeber' },
    ],
  },

  fr: {
    h1: 'Parc national de Yala, Sri Lanka : le meilleur endroit au monde pour voir un leopard',
    lead: 'Yala abrite l’une des plus fortes densites de leopards au monde, aux cotes d’elephants, d’ours lippus, de crocodiles et de centaines d’especes d’oiseaux un parc de zone seche qui garde un caractere veritablement sauvage malgre sa popularite.',
    heroAlt: 'Un leopard reposant sur un affleurement rocheux dans le parc national de Yala',
    sections: [
      {
        title: 'D’un terrain de chasse royal a un parc national',
        body: 'Longtemps avant de proteger la faune, la region de Yala fut chassee par la royaute sri lankaise puis par les officiers coloniaux britanniques, qui en firent une reserve de chasse privee jusqu’au XXe siecle. Elle fut classee sanctuaire faunique en 1900, puis elevee au rang de parc national en 1938, ce qui en fait l’un des parcs les plus anciens et les mieux etablis d’Asie.\n\nLe conflit civil ferma pendant des annees certaines zones orientales de Yala, ce qui, paradoxalement, permit a la faune de se retablir presque sans pression humaine ; la majeure partie de cette zone est aujourd’hui rouverte, et la population de leopards de Yala est consideree comme l’une des plus saines et des plus etudiees du continent.',
      },
      {
        title: 'Des ruines anciennes cachees dans le parc',
        body: 'Yala n’est pas que nature sauvage : Sithulpahuwa, un monastere forestier actif a l’interieur du parc, remonte a plus de deux mille ans et abritait autrefois des milliers de moines ; ses dagobas et grottes de meditation sont encore visites par des pelerins aujourd’hui. Magul Maha Viharaya, un complexe de temples en ruine plus modeste, temoigne de cette meme longue histoire bouddhiste enfouie sous la jungle.\n\nPendant des siecles, la region appartint egalement a l’ancien royaume de Ruhuna, dont les reservoirs d’irrigationlusieurs servant aujourd’hui de points d’eau pour la faune a l’interieur du parcefletent le meme genie hydraulique qui a faconne les civilisations de la zone seche du Sri Lanka.',
      },
      {
        title: 'Les safaris a Yala',
        body: 'Le Bloc 1, la section la plus frequentee, offre les meilleures chances d’apercevoir un leopard grace a des decennies d’observations, meme s’il peut sembler encombre de jeeps en haute saison. Un safari matinal (environ 6h-10h) et un safari en apres midi (14h30-18h30) constituent les deux creneaux standards, chacun realise en jeep 4x4 decouverte avec un pisteur du parc aux cotes de votre chauffeur.\n\nAu dela des leopards, attendez vous a observer elephants, ours lippus, cerfs axis, buffles sauvages, crocodiles se chauffant au bord des points d’eau, et une avifaune vraiment remarquable comprenant tantales indiens, paons et plusieurs especes d’aigles Yala recompense autant la patience que la chance.',
      },
      {
        title: 'Conseils pratiques pour un safari a Yala',
        body: 'Reservez votre jeep et votre entree au parc via votre chauffeur ou votre hotel un jour a l’avance si possible, car le nombre de permis est plafonne par bloc et les creneaux populaires se remplissent vite en haute saison (decembre a mars, puis a nouveau vers aout). Vetements de couleurs neutres, chapeau, creme solaire et jumelles comptent ici plus que sur presque tout site culturel du Sri Lanka.\n\nLes pistes du parc sont non goudronnees et poussiereuses ; une echarpe ou un tour de cou pour le visage est un petit confort qui vaut la peine, et un teleobjectif ou des jumelles feront bien plus pour votre observation d’un leopard que de chercher a s’en approcher.',
      },
      {
        title: 'Meteo et meilleure saison pour le safari',
        body: 'Yala se trouve en zone seche, et les mois les plus secs de mai a septembre concentrent la faune autour des points d’eau restants, ce qui ameliore generalement les chances d’observation. Le parc ferme entierement environ un mois chaque annee, generalement en septembre, pour le brulage controle et la gestion de l’habitat en saison seche.\n\nLes courtes pluies d’octobre novembre reverdissent le paysage et dispersent davantage les animaux, ce qui peut donner des safaris plus calmes mais une lumiere parfois spectaculaire pour la photographie.',
      },
      {
        title: 'Sites a combiner aux alentours',
        body: 'Ella se trouve a environ deux heures de route au nord ouest, faisant d’une etape dans les hautes terres apres un safari matinal a Yala une combinaison efficace pour les voyageurs se deplacant entre la cote et les hauts plateaux. Tissamaharama et le complexe de temples voisin de Kataragama, important lieu de pelerinage multiconfessionnel, se trouvent juste a l’exterieur des grilles du parc.\n\nMirissa et les plages de la cote sud sont a environ deux heures au sud ouest, une etape naturelle pour les voyageurs combinant safari et detente balneaire sur un itineraire plus long.',
      },
      {
        title: 'Ou loger pres de Yala',
        body: 'Les hebergements se concentrent autour de Tissamaharama et de l’entree principale du parc, allant de simples pensions familiales a des camps de tentes facon safari et quelques veritables lodges de luxe situes en zone tampon, ou des elephants passent parfois la nuit.\n\nLoger pres de l’entree que vous prevoyez d’utiliser compte ici plus que presque partout ailleurs au Sri Lanka, car cela influence directement l’heure a laquelle vous pouvez demarrer votre safari matinal et vos chances de bonnes observations avant la chaleur de midi.',
      },
      {
        title: 'Se restaurer autour de Yala',
        body: 'La plupart des lodges et camps de safari fonctionnent en pension complete, organisant petit dejeuner et diner autour des deux sessions de safari, avec rice and curry, poisson frais de Tissamaharama et options grillees simples en usage courant. Un panier petit dejeuner pour le depart matinal est une pratique standard dans presque tous les etablissements.\n\nA Tissamaharama meme, quelques restaurants locaux servent une cuisine sri lankaise honnete et bon marche, loin des tarifs des lodges de safari a chercher pour les budgets plus serres.',
      },
    ],
    faq: [
      {
        q: 'Quelle est la meilleure periode pour observer les leopards a Yala ?',
        a: 'Les mois secs de mai a septembre offrent generalement les meilleures chances, car les animaux se concentrent autour de moins de points d’eau. Cela dit, des leopards sont observes a Yala toute l’annee, et le parc ferme environ un mois chaque annee pour la gestion de l’habitat.',
      },
      {
        q: 'Combien de safaris devrais je reserver a Yala ?',
        a: 'Deux sorties une le matin, une l’apres midi ameliorent nettement vos chances d’une belle observation par rapport a une seule session, car l’activite animale et la lumiere changent beaucoup entre les deux. Un seul safari matinal reste neanmoins interessant si le temps est limite.',
      },
      {
        q: 'Un safari a Yala garantit il de voir un leopard ?',
        a: 'Aucun safari ne peut garantir une observation precise, mais Yala a l’une des plus fortes densites de leopards au monde, et la plupart des visites avec plusieurs sorties en voient un. Un pisteur experimente aux cotes de votre chauffeur ameliore sensiblement les chances.',
      },
      {
        q: 'Comment se rendre a Yala depuis Colombo ou la cote sud ?',
        a: 'Yala est a environ 4-5 heures de route de Colombo et a environ 2 heures des plages de la cote sud autour de Mirissa, ce qui en fait une etape naturelle sur un itineraire plage safari plutot qu’une excursion d’une journee depuis la capitale.',
      },
      {
        q: 'Que dois je porter et apporter pour un safari a Yala ?',
        a: 'Des couleurs neutres et discretes, un chapeau, de la creme solaire et des chaussures fermees pour les matins frais et les pistes poussiereuses. Jumelles et teleobjectif comptent bien plus que chercher a s’approcher physiquement d’un animal.',
      },
    ],
    ctaTitle: 'Pret pour un safari a Yala ?',
    ctaBody: 'Nous organisons des safaris prives en jeep a Yala avec des pisteurs agrees, programmes pour la meilleure lumiere du matin ou de l’apres midi, et les combinons naturellement avec Ella, la cote sud ou le Triangle Culturel sur des circuits prives plus longs.',
    ctaLabel: 'Organiser votre safari a Yala',
    relatedTours: [
      { pageId: 'tour2ey', label: 'Circuit de 2 jours Ella & Yala' },
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
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
    lead: 'Yala ha una delle piu alte densita di leopardi al mondo, insieme a elefanti, orsi labiati, coccodrilli e centinaia di specie di uccelli un parco della zona secca che resta genuinamente selvaggio nonostante sia tra i piu visitati dello Sri Lanka.',
    heroAlt: 'Un leopardo riposa su una roccia nel parco nazionale di Yala',
    sections: [
      {
        title: 'Da riserva di caccia reale a parco nazionale',
        body: 'Molto prima di proteggere la fauna, la regione di Yala era cacciata dalla nobilta singalese e poi dagli ufficiali coloniali britannici, che la usarono come riserva di caccia privata fino al XX secolo. Fu dichiarata santuario faunistico nel 1900 e promossa a parco nazionale nel 1938, rendendola uno dei parchi piu antichi e consolidati dell’Asia.\n\nIl conflitto civile chiuse per anni parti dei settori orientali di Yala, il che, paradossalmente, permise alla fauna di recuperare quasi senza pressione umana; oggi gran parte di quell’area e di nuovo aperta, e la popolazione di leopardi di Yala e considerata tra le piu sane e studiate del continente.',
      },
      {
        title: 'Antiche rovine nascoste nel parco',
        body: 'Yala non e solo natura selvaggia: Sithulpahuwa, un monastero forestale attivo all’interno dei confini del parco, risale a oltre duemila anni fa e ospito migliaia di monaci; dagoba e grotte di meditazione sono ancora visitate da pellegrini oggi. Magul Maha Viharaya, un complesso templare piu piccolo e in rovina, testimonia la stessa lunga storia buddhista sepolta sotto la giungla.\n\nPer secoli l’area appartenne anche all’antico regno di Ruhuna, i cui bacini di irrigazione alcuni oggi usati come pozze d’acqua per la fauna all’interno del parco riflettono la stessa ingegneria idraulica che ha modellato le civilta della zona secca dello Sri Lanka.',
      },
      {
        title: 'Esperienze di safari a Yala',
        body: 'Il Blocco 1, la sezione piu visitata, offre le migliori probabilita di avvistare un leopardo grazie a decenni di osservazioni, anche se in alta stagione puo risultare affollato di jeep. Un safari al mattino (circa 6-10) e uno al pomeriggio (14:30-18:30) sono le due sessioni standard, ciascuna su una jeep 4x4 scoperta con un tracker del parco al fianco del vostro autista.\n\nOltre ai leopardi, aspettatevi avvistamenti di elefanti, orsi labiati, cervi pomellati, bufali selvatici, coccodrilli che si scaldano ai punti d’acqua e una lista di uccelli davvero notevole, tra cui cicogne dipinte, pavoni e diverse specie di aquile: Yala premia la pazienza tanto quanto la fortuna.',
      },
      {
        title: 'Consigli pratici per un safari a Yala',
        body: 'Prenotate jeep e ingresso al parco tramite il vostro autista o hotel un giorno prima, se possibile, poiche il numero di permessi e limitato per blocco e gli orari piu richiesti si esauriscono in alta stagione (dicembre marzo, e di nuovo verso agosto). Abiti di colori neutri, cappello, protezione solare e binocolo contano qui piu che in quasi ogni sito culturale dello Sri Lanka.\n\nLe strade all’interno del parco sono sterrate e polverose; una sciarpa o un buff per il viso e un piccolo comfort utile da portare, e un teleobiettivo o un binocolo faranno molto piu per il vostro avvistamento di un leopardo che cercare di avvicinarvi fisicamente.',
      },
      {
        title: 'Clima e stagione migliore per il safari',
        body: 'Yala si trova nella zona secca, e i mesi piu aridi da maggio a settembre concentrano la fauna intorno ai punti d’acqua rimanenti, generalmente migliorando le probabilita di avvistamento. Il parco chiude completamente per circa un mese ogni anno, di solito a settembre, per la bruciatura controllata e la gestione dell’habitat in stagione secca.\n\nLe brevi piogge tra ottobre e novembre rinverdiscono il paesaggio e disperdono gli animali su un’area piu ampia, il che puo significare safari piu tranquilli ma una luce a volte spettacolare per le fotografie.',
      },
      {
        title: 'Attrazioni nei dintorni da abbinare',
        body: 'Ella si trova a circa due ore di auto a nord ovest, rendendo una tappa collinare dopo un safari mattutino a Yala una combinazione efficiente per chi si muove tra costa e altopiani. Tissamaharama e il vicino complesso templare di Kataragama, importante luogo di pellegrinaggio multiconfessionale, si trovano appena fuori dai cancelli del parco.\n\nMirissa e le spiagge della costa meridionale sono a circa due ore a sud ovest, una tappa naturale successiva per chi combina safari e mare in un itinerario piu lungo.',
      },
      {
        title: 'Dove alloggiare vicino a Yala',
        body: 'Le strutture si concentrano intorno a Tissamaharama e all’ingresso principale del parco, dalle semplici guesthouse familiari ai campi tendati in stile safari e ad alcuni veri lodge di lusso situati in zone cuscinetto, dove di notte capita che passino elefanti.\n\nAlloggiare vicino all’ingresso che si intende usare conta qui piu che quasi ovunque altrove in Sri Lanka, perche influisce direttamente su quanto presto si puo partire per il safari mattutino e sulle probabilita di buoni avvistamenti prima del caldo di mezzogiorno.',
      },
      {
        title: 'Dove mangiare intorno a Yala',
        body: 'La maggior parte dei lodge e campi safari offre pensione completa, organizzando colazione e cena attorno alle due sessioni di safari, con rice and curry, pesce fresco dalla vicina Tissamaharama e semplici opzioni alla griglia come norma. Un cestino colazione per la partenza mattutina e pratica standard in quasi tutte le strutture.\n\nA Tissamaharama stessa, alcuni locali servono cibo sri lankese onesto ed economico, lontano dai prezzi premium dei lodge safari da cercare per chi ha un budget piu contenuto.',
      },
    ],
    faq: [
      {
        q: 'Qual e il periodo migliore per vedere i leopardi a Yala?',
        a: 'I mesi secchi da maggio a settembre offrono generalmente le migliori probabilita, poiche gli animali si concentrano intorno a meno punti d’acqua. Detto questo, a Yala si vedono leopardi tutto l’anno, e il parco chiude circa un mese all’anno per la gestione dell’habitat.',
      },
      {
        q: 'Quanti safari dovrei prenotare a Yala?',
        a: 'Due uscite una al mattino, una al pomeriggio migliorano sensibilmente le probabilita di un buon avvistamento rispetto a una sola sessione, poiche l’attivita degli animali e la luce cambiano molto tra le due. Un solo safari mattutino resta comunque utile se il tempo e limitato.',
      },
      {
        q: 'Un safari a Yala garantisce l’avvistamento di un leopardo?',
        a: 'Nessun safari puo garantire un avvistamento specifico, ma Yala ha una delle densita di leopardi piu alte al mondo, e la maggior parte delle visite con piu uscite ne vede uno. Un tracker esperto al fianco del vostro autista migliora concretamente le probabilita.',
      },
      {
        q: 'Come si arriva a Yala da Colombo o dalla costa sud?',
        a: 'Yala e a circa 4-5 ore di auto da Colombo e a circa 2 ore dalle spiagge della costa sud vicino a Mirissa, il che la rende una tappa naturale in un itinerario mare safari piuttosto che una gita di un giorno dalla capitale.',
      },
      {
        q: 'Cosa dovrei indossare e portare per un safari a Yala?',
        a: 'Colori neutri e discreti, un cappello, protezione solare e scarpe chiuse per le mattine fresche e le strade polverose. Binocolo e teleobiettivo contano molto piu che cercare di avvicinarsi fisicamente a un animale.',
      },
    ],
    ctaTitle: 'Pronti per un safari a Yala?',
    ctaBody: 'Organizziamo safari privati in jeep a Yala con tracker autorizzati, programmati per la luce migliore del mattino o del pomeriggio, e li combiniamo naturalmente con Ella, la costa sud o il Triangolo Culturale nei tour privati piu lunghi.',
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
    lead: 'Yala tiene una de las mayores densidades de leopardos del mundo, junto a elefantes, osos labiados, cocodrilos y cientos de especies de aves, todo dentro de un parque de zona seca que se siente genuinamente salvaje pese a ser uno de los mas visitados de Sri Lanka.',
    heroAlt: 'Un leopardo descansando sobre una roca en el Parque Nacional de Yala',
    sections: [
      {
        title: 'De coto de caza real a parque nacional',
        body: 'Mucho antes de proteger la fauna, la region de Yala fue cazada por la realeza cingalesa y despues por oficiales coloniales britanicos, que la usaron como reserva de caza privada hasta el siglo XX. Fue declarada santuario de vida salvaje en 1900 y ascendida a parque nacional en 1938, lo que la convierte en uno de los parques mas antiguos y consolidados de Asia.\n\nEl conflicto civil mantuvo cerradas durante anos partes de los sectores orientales de Yala, lo que, paradojicamente, permitio que la fauna se recuperara casi sin presion humana; hoy la mayor parte de esa zona ha reabierto, y la poblacion de leopardos de Yala se considera una de las mas sanas y estudiadas del continente.',
      },
      {
        title: 'Ruinas antiguas escondidas dentro del parque',
        body: 'Yala no es solo naturaleza salvaje: Sithulpahuwa, un monasterio forestal activo dentro de los limites del parque, tiene mas de dos mil anos y en su dia albergo a miles de monjes; sus dagobas y cuevas de meditacion siguen recibiendo peregrinos hoy en dia. Magul Maha Viharaya, un complejo de templos en ruinas mas pequeno, apunta a esa misma larga historia budista bajo la jungla.\n\nDurante siglos, la zona tambien formo parte del antiguo reino de Ruhuna, cuyos embalses de irrigacionvarios usados hoy como abrevaderos para la fauna dentro del parque— reflejan la misma ingenieria hidraulica que dio forma a las civilizaciones de la zona seca de Sri Lanka.',
      },
      {
        title: 'Experiencias de safari en Yala',
        body: 'El Bloque 1, la seccion mas visitada, ofrece las mejores probabilidades de ver un leopardo gracias a decadas de avistamientos, aunque puede sentirse concurrido de jeeps en temporada alta. Un safari matutino (aproximadamente de 6 a 10) y uno vespertino (14:30-18:30) son las dos sesiones estandar, cada una en un jeep 4x4 descubierto con un rastreador del parque junto a su conductor.\n\nMas alla de los leopardos, se pueden ver elefantes, osos labiados, ciervos moteados, bufalos salvajes, cocodrilos tomando el sol junto a las charcas y una lista de aves realmente notable, con ciguenas pintadas, pavos reales y varias especies de aguilas: Yala recompensa tanto la paciencia como la suerte.',
      },
      {
        title: 'Consejos practicos para un safari en Yala',
        body: 'Reserve el jeep y la entrada al parque a traves de su conductor o su hotel con un dia de antelacion si es posible, ya que el numero de permisos esta limitado por bloque y las franjas horarias mas populares se agotan en temporada alta (diciembre a marzo, y de nuevo hacia agosto). La ropa de colores neutros, un sombrero, protector solar y prismaticos importan aqui mas que en casi cualquier sitio cultural de Sri Lanka.\n\nLas pistas dentro del parque no estan asfaltadas y son polvorientas; una bufanda o braga de cuello para la cara es una pequena comodidad que merece la pena, y un teleobjetivo o unos prismaticos haran mucho mas por su avistamiento de un leopardo que intentar acercarse fisicamente.',
      },
      {
        title: 'Clima y mejor temporada para el safari',
        body: 'Yala esta en la zona seca, y los meses mas secos, de mayo a septiembre, concentran la fauna alrededor de las charcas restantes, lo que suele mejorar las probabilidades de avistamiento. El parque cierra por completo alrededor de un mes cada ano, normalmente en septiembre, para la quema controlada y la gestion del habitat en temporada seca.\n\nLas breves lluvias de octubre noviembre reverdecen el paisaje y dispersan mas a los animales, lo que puede significar safaris mas tranquilos, pero con una luz a veces espectacular para la fotografia.',
      },
      {
        title: 'Atracciones cercanas para combinar',
        body: 'Ella esta a unas dos horas en coche al noroeste, lo que convierte una parada en las tierras altas tras un safari matutino en Yala en una combinacion eficiente para quienes se mueven entre la costa y el altiplano. Tissamaharama y el cercano complejo de templos de Kataragama, importante lugar de peregrinacion multiconfesional, se encuentran justo a las puertas del parque.\n\nMirissa y las playas de la costa sur estan a unas dos horas al suroeste, una siguiente parada natural para quienes combinan safari y playa en un itinerario mas largo.',
      },
      {
        title: 'Donde alojarse cerca de Yala',
        body: 'El alojamiento se concentra alrededor de Tissamaharama y la entrada principal del parque, desde sencillas casas de huespedes familiares hasta campamentos de estilo safari con tiendas y algunos autenticos lodges de lujo situados en zonas de amortiguamiento, donde de noche a veces pasan elefantes.\n\nAlojarse cerca de la entrada que planea usar importa aqui mas que en casi cualquier otro lugar de Sri Lanka, ya que influye directamente en lo temprano que puede empezar su safari matutino y en sus probabilidades de buenos avistamientos antes del calor del mediodia.',
      },
      {
        title: 'Donde comer cerca de Yala',
        body: 'La mayoria de los lodges y campamentos de safari funcionan en pension completa, organizando el desayuno y la cena en torno a las dos sesiones de safari, con rice and curry, pescado fresco de la cercana Tissamaharama y sencillas opciones a la parrilla como norma. Una caja de desayuno para la salida matutina es practica habitual en casi todos los alojamientos.\n\nEn el propio pueblo de Tissamaharama, algunos restaurantes locales sirven comida srilankesa honesta y economica, lejos del precio premium de los lodges de safari, que merece la pena buscar si el presupuesto es mas ajustado.',
      },
    ],
    faq: [
      {
        q: 'Cual es la mejor epoca para ver leopardos en Yala?',
        a: 'Los meses secos de mayo a septiembre suelen ofrecer las mejores probabilidades, ya que los animales se concentran alrededor de menos charcas. Aun asi, se ven leopardos en Yala durante todo el ano, y el parque cierra alrededor de un mes cada ano para la gestion del habitat.',
      },
      {
        q: 'Cuantos safaris deberia reservar en Yala?',
        a: 'Dos salidasa matutina, otra vespertina— mejoran notablemente las probabilidades de un buen avistamiento frente a una sola sesion, ya que la actividad animal y la luz cambian mucho entre ambas. Un unico safari matutino sigue mereciendo la pena si el tiempo es limitado.',
      },
      {
        q: 'Un safari en Yala garantiza ver un leopardo?',
        a: 'Ningun safari puede garantizar un avistamiento concreto, pero Yala tiene una de las mayores densidades de leopardos del mundo, y la mayoria de las visitas con varias salidas si ven uno. Un rastreador experimentado junto a su conductor mejora notablemente las probabilidades.',
      },
      {
        q: 'Como se llega a Yala desde Colombo o la costa sur?',
        a: 'Yala esta a unas 4-5 horas en coche desde Colombo y a unas 2 horas de las playas de la costa sur cerca de Mirissa, lo que la convierte en una parada natural en un itinerario de playa y safari en lugar de una excursion de un dia desde la capital.',
      },
      {
        q: 'Que debo llevar y ponerme para un safari en Yala?',
        a: 'Colores neutros y discretos, un sombrero, protector solar y calzado cerrado para las mananas frias y las pistas polvorientas. Los prismaticos y el teleobjetivo importan mucho mas que intentar acercarse fisicamente a un animal.',
      },
    ],
    ctaTitle: 'Listo para un safari en Yala?',
    ctaBody: 'Organizamos safaris privados en jeep en Yala con rastreadores autorizados, programados para la mejor luz de la manana o la tarde, y los combinamos de forma natural con Ella, la costa sur o el Triangulo Cultural en tours privados mas largos.',
    ctaLabel: 'Planifique su safari en Yala',
    relatedTours: [
      { pageId: 'tour2ey', label: 'Tour de 2 dias Ella y Yala' },
      { pageId: 'tour5', label: 'Tour de 5 dias por Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guia de safaris en Sri Lanka' },
      { pageId: 'guideWildlife', label: 'Guia de fauna de Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Park Narodowy Yala, Sri Lanka: najlepsze miejsce na swiecie, by zobaczyc lamparta',
    lead: 'Yala ma jedna z najwyzszych na swiecie zageszczen lampartow, a do tego slonie, niedzwiedzie wargowe, krokodyle i setki gatunkow ptakow  wszystko w suchym parku, ktory wciaz wydaje sie naprawde dziki, choc jest jednym z najczesciej odwiedzanych na Sri Lance.',
    heroAlt: 'Lampart odpoczywajacy na skalnym wystepie w Parku Narodowym Yala',
    sections: [
      {
        title: 'Od krolewskich terenow lowieckich do parku narodowego',
        body: 'Dlugo przed ochrona dzikiej przyrody region Yali byl terenem polowan lankijskiej szlachty, a pozniej brytyjskich oficerow kolonialnych, ktorzy do XX wieku wykorzystywali go jako prywatny rezerwat lowny. W 1900 roku ogloszono go rezerwatem przyrody, a w 1938 roku podniesiono do statusu parku narodowego, co czyni go jednym z najstarszych i najlepiej ugruntowanych parkow w Azji.\n\nKonflikt wewnetrzny na lata zamknal czesc wschodnich sektorow Yali, co paradoksalnie pozwolilo dzikiej przyrodzie odbudowac sie przy praktycznie zerowej presji ludzkiej; dzis wiekszosc tego obszaru jest ponownie otwarta, a populacja lampartow w Yali uwazana jest za jedna z najzdrowszych i najlepiej zbadanych na kontynencie.',
      },
      {
        title: 'Starozytne ruiny skryte w parku',
        body: 'Yala to nie tylko dzika przyroda: Sithulpahuwa, dzialajacy lesny klasztor na terenie parku, ma ponad dwa tysiace lat i kiedys miescil tysiace mnichow; dagoby i jaskinie medytacyjne wciaz odwiedzaja pielgrzymi. Magul Maha Viharaya, mniejszy zrujnowany kompleks swiatynny, wskazuje na te sama dluga buddyjska historie skryta pod dzungla.\n\nPrzez wieki region nalezal rowniez do starozytnego krolestwa Ruhuna, ktorego zbiorniki irygacyjne  kilka z nich dzis sluzy jako wodopoje dla zwierzat w parku  odzwierciedlaja te sama inzynierie wodna, ktora uksztaltowala cywilizacje suchej strefy Sri Lanki.',
      },
      {
        title: 'Safari w Yali',
        body: 'Blok 1, najczesciej odwiedzana czesc, daje najlepsze szanse na spotkanie lamparta dzieki dziesiecioleciom obserwacji, choc w wysokim sezonie bywa zatloczony dzipami. Poranna przejazdzka (ok. 6:00 to 10:00) i popoludniowa (14:30 to 18:30) to dwie standardowe sesje, kazda w odkrytym dzipie 4x4 z parkowym tropicielem obok kierowcy.\n\nOprocz lampartow mozna liczyc na slonie, niedzwiedzie wargowe, jelenie plamiste, bawoly dzikie, krokodyle wygrzewajace sie przy wodopojach oraz naprawde bogata liste ptakow, w tym bociany malowane, pawie i kilka gatunkow orlow  Yala nagradza zarowno cierpliwosc, jak i szczescie.',
      },
      {
        title: 'Praktyczne wskazowki na safari w Yali',
        body: 'Zarezerwuj dzipa i wstep do parku przez swojego kierowce lub hotel z dnia wyprzedzeniem, jesli to mozliwe, poniewaz liczba pozwolen na blok jest ograniczona, a popularne terminy wypelniaja sie w wysokim sezonie (grudzien–marzec i ponownie wokol sierpnia). Neutralne kolory ubrania, kapelusz, krem z filtrem i lornetka licza sie tu bardziej niz na prawie kazdym miejscu kulturowym Sri Lanki.\n\nDrogi w parku sa nieutwardzone i zapylone; szal lub buff na twarz to maly, ale wartosciowy dodatek, a teleobiektyw lub lornetka zrobia znacznie wiecej dla obserwacji lamparta niz proba fizycznego zblizenia.',
      },
      {
        title: 'Pogoda i najlepszy sezon na safari',
        body: 'Yala lezy w suchej strefie, a najsuchsze miesiace od maja do wrzesnia skupiaja dzikie zwierzeta wokol pozostalych wodopojow, co zwykle zwieksza szanse na obserwacje. Park zamyka sie calkowicie na okolo miesiac kazdego roku, zwykle w wrzesniu, na potrzeby kontrolowanego wypalania i zarzadzania siedliskiem w sezonie suchym.\n\nKrotkie deszcze wokol pazdziernika to listopada zazieleniaja krajobraz i rozpraszaja zwierzeta na wiekszym obszarze, co moze oznaczac spokojniejsze przejazdzki, ale czasem spektakularne swiatlo do fotografii.',
      },
      {
        title: 'Atrakcje w okolicy warte polaczenia',
        body: 'Ella lezy okolo dwoch godzin jazdy na polnocny zachod, co sprawia, ze przystanek w gorach po wczesnym safari w Yali jest efektywnym polaczeniem dla podroznych przemieszczajacych sie miedzy wybrzezem a wyzynami. Tissamaharama i pobliski kompleks swiatynny Kataragama, wazne miejsce wielowyznaniowych pielgrzymek, leza tuz za bramami parku.\n\nMirissa i plaze poludniowego wybrzeza sa okolo dwoch godzin na poludniowy zachod  naturalny kolejny przystanek dla podroznych laczacych safari z czasem na plazy w dluzszej trasie.',
      },
      {
        title: 'Gdzie sie zatrzymac w poblizu Yali',
        body: 'Zakwaterowanie skupia sie wokol Tissamaharamy i glownego wejscia do parku, od prostych rodzinnych pensjonatow po namiotowe obozy w stylu safari i kilka prawdziwie luksusowych lodzy na terenie strefy buforowej, gdzie noca czasem przechodza slonie.\n\nZatrzymanie sie blisko planowanego wejscia do parku liczy sie tu bardziej niz niemal wszedzie na Sri Lance, poniewaz wplywa bezposrednio na to, jak wczesnie mozesz zaczac poranna przejazdzke i jakie masz szanse na dobre obserwacje przed poludniowym upalem.',
      },
      {
        title: 'Gdzie zjesc w okolicy Yali',
        body: 'Wiekszosc lodzy i obozow safari dziala na zasadzie pelnego wyzywienia, organizujac sniadanie i kolacje wokol dwoch sesji safari, ze standardowym rice and curry, swiezymi owocami morza z pobliskiej Tissamaharamy i prostymi opcjami z grilla. Pudelko sniadaniowe na wczesny wyjazd to standard w niemal kazdym obiekcie.\n\nW samej Tissamaharamie kilka lokalnych restauracji serwuje uczciwe, niedrogie lankijskie jedzenie bez narzutu typowego dla lodzy safari  warto ich poszukac przy ograniczonym budzecie.',
      },
    ],
    faq: [
      {
        q: 'Jaki jest najlepszy czas na obserwacje lampartow w Yali?',
        a: 'Suche miesiace od maja do wrzesnia zwykle daja najlepsze szanse, bo zwierzeta skupiaja sie wokol mniejszej liczby wodopojow. Lamparty widuje sie w Yali jednak przez caly rok, a park zamyka sie na okolo miesiac rocznie w celu zarzadzania siedliskiem.',
      },
      {
        q: 'Ile safari powinienem zarezerwowac w Yali?',
        a: 'Dwie przejazdzki  jedna poranna, jedna popoludniowa  znacznie zwiekszaja szanse na dobra obserwacje w porownaniu z jedna sesja, bo aktywnosc zwierzat i swiatlo mocno sie miedzy nimi roznia. Jedna poranna przejazdzka wciaz jest wartosciowa, jesli czasu jest malo.',
      },
      {
        q: 'Czy safari w Yali gwarantuje zobaczenie lamparta?',
        a: 'Zadne safari nie moze zagwarantowac konkretnej obserwacji, ale Yala ma jedna z najwyzszych na swiecie gestosci populacji lampartow, i wiekszosc wizyt z kilkoma przejazdzkami konczy sie jego zobaczeniem. Doswiadczony tropiciel jadacy z kierowca realnie zwieksza szanse.',
      },
      {
        q: 'Jak dojechac do Yali z Colombo lub z poludniowego wybrzeza?',
        a: 'Yala lezy okolo 4 to 5 godzin jazdy od Colombo i okolo 2 godzin od plaz poludniowego wybrzeza wokol Mirissy, co czyni ja naturalnym przystankiem na trasie plaza–safari, a nie samodzielna jednodniowa wycieczka ze stolicy.',
      },
      {
        q: 'Co powinienem nosic i zabrac na safari w Yali?',
        a: 'Neutralne, spokojne kolory, kapelusz, krem z filtrem i zakryte buty na chlodne wczesne poranki i zapylone drogi. Lornetka i teleobiektyw licza sie znacznie bardziej niz proba fizycznego zblizenia sie do zwierzecia.',
      },
    ],
    ctaTitle: 'Gotowy na safari w Yali?',
    ctaBody: 'Organizujemy prywatne safari dzipem w Yali z licencjonowanymi tropicielami, zaplanowane na najlepsze swiatlo poranne lub popoludniowe, i naturalnie laczymy je z Ella, poludniowym wybrzezem lub Trojkatem Kulturowym w dluzszych prywatnych wycieczkach.',
    ctaLabel: 'Zaplanuj swoje safari w Yali',
    relatedTours: [
      { pageId: 'tour2ey', label: '2 dniowa wycieczka Ella i Yala' },
      { pageId: 'tour5', label: '5 dniowa wycieczka po Sri Lance' },
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
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
    h1: 'Национальный парк Яла, Шри Ланка: лучшее место на земле, чтобы увидеть леопарда',
    lead: 'В Яле одна из самых высоких в мире плотностей леопардов, а также слоны, губастые медведи, крокодилы и сотни видов птиц всё это в парке засушливой зоны, который остаётся по настоящему диким, несмотря на популярность.',
    heroAlt: 'Леопард отдыхает на скальном выступе в национальном парке Яла',
    sections: [
      {
        title: 'От королевских охотничьих угодий до национального парка',
        body: 'Задолго до того, как стать заповедником, регион Яла был охотничьими угодьями шри ланкийской знати, а затем британских колониальных офицеров, использовавших его как частный охотничий резерват до XX века. В 1900 году территория получила статус заповедника, а в 1938 годутатус национального парка, что делает его одним из старейших и наиболее устоявшихся парков Азии.\n\nГражданский конфликт на годы закрыл часть восточных секторов Ялы, что парадоксальным образом позволило дикой природе восстановиться почти без давления человека; сегодня большая часть этой территории снова открыта, а популяция леопардов в Яле считается одной из самых здоровых и изученных на континенте.',
      },
      {
        title: 'Древние руины, скрытые в парке',
        body: 'Ялато не только дикая природа: Ситхулпахува, действующий лесной монастырь на территории парка, существует более двух тысяч лет и когда то принимал тысячи монахов; дагобы и пещеры для медитации до сих пор посещают паломники. Магул Маха Вихарая, меньший руинированный храмовый комплекс, свидетельствует о той же долгой буддийской истории, скрытой под джунглями.\n\nВеками эта территория также входила в древнее королевство Рухуна, чьи оросительные резервуарыоторые сегодня служат водопоями для животных внутри парка отражают ту же гидротехническую инженерию, сформировавшую цивилизации засушливой зоны Шри Ланки.',
      },
      {
        title: 'Сафари в Яле',
        body: 'Блок 1, самая посещаемая часть парка, даёт наилучшие шансы увидеть леопарда благодаря десятилетиям наблюдений, хотя в высокий сезон здесь может быть многолюдно от джипов. Утреннее сафари (примерно 6:00 to 10:00) и дневное (14:30 to 18:30) два стандартных сеанса, каждый на открытом джипе 4x4 с парковым следопытом рядом с водителем.\n\nКроме леопардов, ожидайте встреч со слонами, губастыми медведями, пятнистыми оленями, дикими буйволами, крокодилами, греющимися у водопоев, и по настоящему впечатляющим списком птиц, включающим расписных аистов, павлинов и несколько видов орлов Яла вознаграждает терпение не меньше, чем удачу.',
      },
      {
        title: 'Практические советы для сафари в Яле',
        body: 'Бронируйте джип и вход в парк через своего водителя или отель за день, если возможно, поскольку количество разрешений на блок ограничено, а популярные слоты быстро заканчиваются в высокий сезон (декабрь–март и снова около августа). Одежда неброских цветов, шляпа, солнцезащитный крем и бинокль значат здесь больше, чем почти на любом культурном объекте Шри Ланки.\n\nДороги внутри парка немощёные и пыльные; шарф или бафф для лица небольшое, но полезное дополнение, а телеобъектив или бинокль сделают для наблюдения за леопардом гораздо больше, чем попытка физически приблизиться.',
      },
      {
        title: 'Погода и лучший сезон для сафари',
        body: 'Яла находится в засушливой зоне, и самые сухие месяцы с мая по сентябрь концентрируют животных вокруг оставшихся водопоев, что обычно повышает шансы на наблюдения. Парк полностью закрывается примерно на месяц каждый год, обычно в сентябре, для контролируемого выжигания и управления местообитаниями в сухой сезон.\n\nКороткие дожди в октябре–ноябре делают ландшафт зеленее и рассеивают животных на большей территории, что может означать более спокойные поездки, но иногда впечатляющий свет для фотографии.',
      },
      {
        title: 'Что посмотреть в окрестностях',
        body: 'Элла находится примерно в двух часах езды к северо западу, что делает остановку в горах после раннего сафари в Яле эффективным сочетанием для путешественников, перемещающихся между побережьем и нагорьем. Тиссамахарама и близкий храмовый комплекс Катарагама, важное место паломничества разных религий, находятся прямо у ворот парка.\n\nМирисса и пляжи южного побережья находятся примерно в двух часах езды на юго запад естественная следующая остановка для тех, кто сочетает сафари с пляжным отдыхом в более длинном маршруте.',
      },
      {
        title: 'Где остановиться возле Ялы',
        body: 'Жильё сосредоточено вокруг Тиссамахарамы и главного входа в парк от простых семейных гостевых домов до палаточных лагерей в стиле сафари и нескольких настоящих люксовых лоджей на территории буферной зоны, где по ночам иногда проходят слоны.\n\nВыбор жилья рядом с тем входом, которым вы планируете пользоваться, здесь важнее почти чем где либо ещё в Шри Ланке, поскольку это напрямую влияет на то, как рано вы сможете начать утреннее сафари, и на ваши шансы на хорошие наблюдения до полуденной жары.',
      },
      {
        title: 'Где поесть в районе Ялы',
        body: 'Большинство сафари лоджей и лагерей работают по системе полного пансиона, строя завтрак и ужин вокруг двух сеансов сафари, с рисом и карри, свежими морепродуктами из близкой Тиссамахарамы и простыми блюдами на гриле как нормой. Коробка с завтраком для раннего выезда обычная практика почти в каждом отеле.\n\nВ самой Тиссамахараме несколько местных заведений подают честную, недорогую шри ланкийскую еду без наценки сафари лоджей стоит поискать их при более скромном бюджете.',
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
        a: 'Яла находится примерно в 4 to 5 часах езды от Коломбо и около 2 часов от пляжей южного побережья возле Мириссы, что делает её естественной остановкой в маршруте «пляж плюс сафари», а не самостоятельной однодневной поездкой из столицы.',
      },
      {
        q: 'Что взять и надеть на сафари в Яле?',
        a: 'Неброские, нейтральные цвета одежды, шляпу, солнцезащитный крем и закрытую обувь для прохладных ранних утр и пыльных дорог. Бинокль и телеобъектив важнее, чем попытка физически приблизиться к животному.',
      },
    ],
    ctaTitle: 'Готовы к сафари в Яле?',
    ctaBody: 'Мы организуем частные джип сафари в Яле с лицензированными следопытами, приуроченные к лучшему утреннему или дневному свету, и естественно сочетаем их с Эллой, южным побережьем или Культурным треугольником в более длинных частных турах.',
    ctaLabel: 'Спланировать сафари в Яле',
    relatedTours: [
      { pageId: 'tour2ey', label: '2 дневный тур Элла и Яла' },
      { pageId: 'tour5', label: '5 дневный тур по Шри Ланке' },
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Элла' },
      { pageId: 'destGalle', label: 'Галле' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Гид по сафари в Шри Ланке' },
      { pageId: 'guideWildlife', label: 'Гид по дикой природе Шри Ланки' },
    ],
  },
  nl: {
    h1: 'Yala Nationalpark, Sri Lanka: der beste Ort der Welt, um einen Leoparden zu sehen',
    lead: 'Yala hat eine der hochsten Leopardendichten weltweit, dazu Elefanten, Lippenbaren, Krokodile und Hunderte Vogelarten  alles in einem Trockenzonen Park, der trotz seiner Beliebtheit noch immer echte Wildnis ausstrahlt.',
    heroAlt: 'Ein Leopard ruht auf einem Felsvorsprung im Yala Nationalpark',
    sections: [
      {
        title: 'Vom koniglichen Jagdgebiet zum Nationalpark',
        body: 'Lange bevor er Wildtiere schutzte, wurde das Gebiet um Yala von srilankischen Konigen und spater von britischen Kolonialoffizieren bejagt, die es bis ins 20. Jahrhundert als privates Jagdrevier nutzten. 1900 wurde es zum Wildschutzgebiet erklart, 1938 zum Nationalpark aufgewertet  einer der altesten und etabliertesten Parks Asiens.\n\nDer Burgerkrieg hielt Teile der ostlichen Zonen Yalas jahrelang geschlossen, was der Tierwelt paradoxerweise erlaubte, sich fast ohne menschlichen Druck zu erholen; heute ist der grosste Teil dieses Gebiets wieder zuganglich, und Yalas Leopardenpopulation zahlt zu den gesundesten und am besten erforschten des Kontinents.',
      },
      {
        title: 'Antike Ruinen mitten im Park',
        body: 'Yala ist nicht nur Wildnis: Sithulpahuwa, ein aktives Waldkloster innerhalb der Parkgrenzen, ist uber zweitausend Jahre alt und beherbergte einst Tausende Monche; Dagobas und Meditationshohlen werden noch heute von Pilgern besucht. Magul Maha Viharaya, ein kleinerer Tempelruinenkomplex, zeugt von derselben langen buddhistischen Geschichte unter dem Dschungel.\n\nJahrhundertelang lag das Gebiet ausserdem im alten Konigreich Ruhuna, dessen Bewasserungstanks  einige heute Tranken fur Wildtiere im Park  dieselbe hydraulische Ingenieurskunst widerspiegeln, die Sri Lankas Trockenzonen Zivilisationen pragte.',
      },
      {
        title: 'Safari Erlebnisse in Yala',
        body: 'Block 1, der meistbesuchte Bereich, bietet die besten Chancen auf eine Leopardensichtung dank jahrzehntelanger Beobachtungsdichte, kann aber zur Hochsaison voll mit Jeeps sein. Eine Morgenfahrt (etwa 6 to 10 Uhr) und eine Nachmittagsfahrt (14:30 to 18:30 Uhr) sind die beiden Standardtermine, jeweils in einem offenen 4x4 Jeep mit einem Park Tracker neben Ihrem Fahrer.\n\nNeben Leoparden sind Elefanten, Lippenbaren, Axishirsche, Wildbuffel, sich an Wasserlochern sonnende Krokodile und eine wirklich beachtliche Vogelwelt zu erwarten, darunter Buntstorche, Pfauen und mehrere Adlerarten  Yala belohnt Geduld ebenso wie Gluck.',
      },
      {
        title: 'Praktische Tipps fur eine Yala Safari',
        body: 'Buchen Sie Jeep und Parkeintritt wenn moglich einen Tag im Voraus uber Ihren Fahrer oder Ihr Hotel, da die Permit Zahlen pro Block begrenzt sind und beliebte Zeiten in der Hochsaison (Dezember bis Marz, erneut um August) ausgebucht sind. Neutrale Kleidung, Hut, Sonnencreme und Fernglas zahlen hier mehr als an fast jedem Kulturort Sri Lankas.\n\nDie Strassen im Park sind unbefestigt und staubig; ein Schal oder Buff furs Gesicht ist eine kleine, lohnende Erganzung, und ein Zoomobjektiv oder Fernglas bringt fur die Leopardensichtung deutlich mehr als korperliche Nahe.',
      },
      {
        title: 'Wetter und beste Safari Saison',
        body: 'Yala liegt in der Trockenzone, und die trockensten Monate von Mai bis September konzentrieren die Tierwelt um die verbleibenden Wasserlocher, was die Sichtungschancen meist verbessert. Der Park schliesst jedes Jahr fur etwa einen Monat, meist im September, wegen kontrollierter Brandrodung und Habitatpflege in der Trockenzeit.\n\nDie kurzen Regenfalle um Oktober to November lassen die Landschaft ergrunen und verteilen die Tiere weiter, was ruhigere Fahrten, aber gelegentlich spektakulares Fotolicht bedeuten kann.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Ella liegt etwa zwei Autostunden nordwestlich, sodass sich ein Bergland Stopp nach einer fruhen Yala Safari gut mit der Weiterreise zwischen Kuste und Hochland kombinieren lasst. Tissamaharama und der nahe Kataragama Tempelkomplex, ein bedeutender multireligioser Pilgerort, liegen direkt vor den Parktoren.\n\nMirissa und die Strande der Sudkuste sind etwa zwei Stunden sudwestlich entfernt  ein naheliegender nachster Stopp fur Reisende, die Safari mit Strandzeit auf einer langeren Route verbinden mochten.',
      },
      {
        title: 'Wo man in der Nahe von Yala ubernachten kann',
        body: 'Unterkunfte konzentrieren sich rund um Tissamaharama und den Haupteingang des Parks, von einfachen Familienpensionen bis zu Zeltcamps im Safari Stil und einigen echten Luxus Lodges im Pufferzonenland, an denen nachts gelegentlich Elefanten vorbeiziehen.\n\nDie Nahe zum geplanten Parkeingang zahlt hier mehr als fast uberall sonst in Sri Lanka, da sie direkt beeinflusst, wie fruh Sie die morgendliche Pirschfahrt starten konnen und wie gut Ihre Chancen auf gute Sichtungen vor der Mittagshitze sind.',
      },
      {
        title: 'Essen rund um Yala',
        body: 'Die meisten Safari Lodges und Camps bieten Vollpension und richten Fruhstuck und Abendessen an den beiden Pirschfahrten aus, mit Rice and Curry, frischem Fisch aus dem nahen Tissamaharama und einfachen gegrillten Optionen als Standard. Eine Fruhstucksbox fur die fruhe Morgenfahrt ist in fast jeder Unterkunft ublich.\n\nIn Tissamaharama selbst servieren einige lokale Lokale ehrliches, gunstiges srilankisches Essen ohne den Safari Lodge Aufpreis  lohnend fur alle mit kleinerem Budget.',
      },
    ],
    faq: [
      {
        q: 'Wann ist die beste Zeit fur Leopardensichtungen in Yala?',
        a: 'Die Trockenmonate von Mai bis September bieten meist die besten Chancen, da sich Tiere um weniger Wasserlocher konzentrieren. Leoparden werden in Yala jedoch das ganze Jahr uber gesichtet, und der Park schliesst jahrlich etwa einen Monat wegen Habitatpflege.',
      },
      {
        q: 'Wie viele Safaris sollte ich in Yala buchen?',
        a: 'Zwei Fahrten  eine morgens, eine nachmittags  verbessern die Sichtungschancen deutlich gegenuber nur einer Fahrt, da sich Tieraktivitat und Licht zwischen beiden stark unterscheiden. Bei begrenzter Zeit lohnt sich aber auch eine einzelne Morgenfahrt.',
      },
      {
        q: 'Ist eine Leopardensichtung bei einer Yala Safari garantiert?',
        a: 'Keine Safari kann eine bestimmte Sichtung garantieren, aber Yala hat eine der weltweit hochsten Leopardendichten, und die meisten Besuche mit mehreren Fahrten sehen tatsachlich einen. Ein erfahrener Tracker neben Ihrem Fahrer verbessert die Chancen deutlich.',
      },
      {
        q: 'Wie komme ich von Colombo oder der Sudkuste nach Yala?',
        a: 'Yala ist etwa 4 to 5 Autostunden von Colombo und rund 2 Stunden von den Sudkustenstranden um Mirissa entfernt  eher ein naturlicher Zwischenstopp auf einer Strand und Safari Route als ein Tagesausflug ab der Hauptstadt.',
      },
      {
        q: 'Was sollte ich fur eine Yala Safari mitbringen und tragen?',
        a: 'Neutrale, gedeckte Farben, einen Hut, Sonnencreme und geschlossene Schuhe fur kalte fruhe Morgen und staubige Strassen. Fernglas und Zoomobjektiv sind weit wichtiger, als korperlich nahe an ein Tier zu kommen.',
      },
    ],
    ctaTitle: 'Bereit fur eine Yala Safari?',
    ctaBody: 'Wir organisieren private Jeep Safaris in Yala mit lizenzierten Trackern, zeitlich auf das beste Morgen- oder Nachmittagslicht abgestimmt, und verbinden sie auf langeren privaten Rundreisen naturlich mit Ella, der Sudkuste oder dem Kulturdreieck.',
    ctaLabel: 'Yala Safari planen',
    relatedTours: [
      { pageId: 'tour2ey', label: '2 tagige Ella & Yala Tour' },
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Sri Lanka Safari Ratgeber' },
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt Ratgeber' },
    ],
  }
};
