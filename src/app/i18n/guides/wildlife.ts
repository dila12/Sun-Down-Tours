import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka wildlife guide (pageId: guideWildlife).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const WILDLIFE_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Wildlife Guide: Elephants, Leopards, Whales and Where to See Them',
    lead: 'For an island roughly the size of Ireland, Sri Lanka packs an extraordinary density of wildlife Asian elephants in open grasslands, leopards in dry forest, blue whales off the south coast and endemic birds in rainforest pockets. The trick is matching species to the right park and season, not trying to see everything in one rushed morning.',
    heroImage: 'assets/img/5daysTours/45.webp',
    heroAlt: 'Wild elephants grazing in a Sri Lankan national park',
    sections: [
      {
        id: 'elephants',
        title: 'Elephants: the island’s most reliable wildlife encounter',
        body: 'Sri Lanka holds one of the largest Asian elephant populations in the region, and several parks make sightings almost routine rather than lucky. Udawalawe National Park, in the south-central dry zone, is the most dependable choice for families open terrain, a large resident herd and shorter drives than Yala often mean elephants within the first hour.\n\nMinneriya and Kaudulla national parks, near Sigiriya, are famous for “The Gathering” from roughly July to October, when hundreds of elephants converge on the receding tank edges. It is seasonal and weather-dependent, but when conditions align it is one of Asia’s great wildlife spectacles.',
      },
      {
        id: 'leopards',
        title: 'Leopards: Yala’s star, Wilpattu’s quieter alternative',
        body: 'Yala Block I holds one of the world’s highest leopard densities, which sounds impressive until you remember leopards are solitary, nocturnal and perfectly camouflaged. A good morning drive with a patient tracker still gives reasonable odds; back-to-back drives improve them further. Crowds, especially around weekends and public holidays, can reduce the experience start early and accept that a sighting is never guaranteed.\n\nWilpattu National Park, on the north-west coast, offers a more forested, less congested setting with leopards, sloth bears and birdlife. It suits travellers who prefer fewer jeeps over the highest headline density.',
      },
      {
        id: 'whalesAndMarine',
        title: 'Whales, dolphins and coastal wildlife',
        body: 'Mirissa and Kalpitiya are the two main whale-watching bases. Blue whales and sperm whales appear off Mirissa roughly from November to April, overlapping the south coast’s dry season; boats leave early and conditions are best on calm mornings. Kalpitiya suits a different calendar dolphins year-round and sperm whales in deeper offshore windows and works well combined with Wilpattu or the north-west coast.\n\nTurtle hatcheries along the south coast are educational rather than wild encounters; if ethics matter to you, favour centres that release hatchlings properly and avoid venues that keep adult turtles in tanks for display.',
      },
      {
        id: 'birdlife',
        title: 'Birds and smaller mammals worth the detour',
        body: 'Bundala National Park, near Hambantota, is an Ramsar wetland stronghold for migratory waders, flamingos and saltwater crocodiles excellent for birders and often overlooked on standard round tours. Sinharaja Forest Reserve, a UNESCO rainforest, holds a high proportion of Sri Lanka’s endemic birds and is best explored on foot with a local guide rather than from a jeep.\n\nSmaller parks like Gal Oya (boat safaris on the reservoir) and Horton Plains (sambar deer and highland birds) reward travellers who want variety beyond the Yala–Udawalawe axis.',
      },
      {
        id: 'parkGuide',
        title: 'Choosing between Yala, Udawalawe, Minneriya and Wilpattu',
        body: 'Yala: best for leopards, varied habitat and combined cultural-triangle itineraries, but busy and closed for roughly a month each year (usually September) for maintenance. Udawalawe: best for elephants, especially with children or limited time. Minneriya/Kaudulla: seasonal elephant gatherings near Sigiriya check water levels before booking. Wilpattu: quieter leopard and bear country with a longer, more forested drive.\n\nMost one-week round tours sensibly include one or two parks, not four. Your driver-guide can sequence parks by season, driving time and what you have already seen elsewhere in Asia.',
      },
      {
        id: 'ethicsAndSeasons',
        title: 'Ethics, seasons and responsible viewing',
        body: 'Stay inside the jeep unless the park rules explicitly allow otherwise; never encourage drivers to chase animals, block their path or crowd mothers with calves. Flash photography and loud behaviour stress wildlife binoculars and patience beat close-ups every time.\n\nDry-season months (roughly May–September in the south-east parks, November–April for whales) concentrate animals at water and improve visibility. Monsoon rain rarely cancels safaris entirely but can mean muddy tracks and fewer cats on the move. Pair park choice with our best-time guide and book jeeps through reputable operators rather than ad-hoc touts at the gate.',
      },
    ],
    faq: [
      {
        q: 'Which park is best for seeing elephants in Sri Lanka?',
        a: 'Udawalawe is the most reliable year-round; Minneriya and Kaudulla are spectacular for large gatherings from roughly July to October when water levels draw herds to the tank edges.',
      },
      {
        q: 'Can I see leopards on a single Yala safari?',
        a: 'Possible, but not guaranteed leopards are elusive even in Yala. Two drives (morning and evening) on consecutive days give noticeably better odds than one rushed round.',
      },
      {
        q: 'When is whale watching season in Mirissa?',
        a: 'Roughly November to April, with calm seas most common in the morning. Outside that window, focus on parks or the east coast rather than forcing an offshore trip.',
      },
      {
        q: 'Is it ethical to visit elephant orphanages?',
        a: 'Many travellers now prefer wild parks over captive facilities. If you visit a sanctuary, research whether elephants are chained, ridden or used for performances reputable conservation centres do neither.',
      },
      {
        q: 'How many national parks fit in a one-week Sri Lanka trip?',
        a: 'One or two wildlife stops work well alongside culture and hills for example Udawalawe plus a whale trip, or Yala with Minneriya if dates align with the gathering.',
      },
    ],
    ctaTitle: 'Build wildlife into your private itinerary',
    ctaBody: 'Tell us your travel dates and priorities we will slot the right parks, jeep times and driving legs into a chauffeur-guided round tour without overloading the week.',
    ctaLabel: 'Plan a wildlife route',
    relatedTours: [
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
      { pageId: 'tour8', label: '8 Day Sri Lanka Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala National Park' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Sri Lanka Safari Guide' },
      { pageId: 'guideBestTime', label: 'Best Time to Visit Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Private Driver Guide' },
    ],
  },

  de: {
    h1: 'Sri Lanka Tierwelt-Ratgeber: Elefanten, Leoparden, Wale und wo man sie sieht',
    lead: 'Für eine Insel etwa so groß wie Irland birgt Sri Lanka eine außergewöhnliche Wildtierdichte asiatische Elefanten in offenen Graslandschaften, Leoparden im Trockenwald, Blauwale vor der Südküste und endemische Vögel in Regenwaldinseln. Entscheidend ist, Art und Saison passend zu wählen, statt alles in einem hetzigen Vormittag sehen zu wollen.',
    heroAlt: 'Freilebende Elefanten in einem srilankischen Nationalpark',
    sections: [
      {
        title: 'Elefanten: die verlässlichste Wildtierbegegnung der Insel',
        body: 'Sri Lanka beherbergt eine der größten Asiatischen-Elefanten-Populationen der Region; in mehreren Parks sind Sichtungen fast Routine. Udawalawe im südzentralen Trockengebiet ist für Familien am zuverlässigsten offenes Gelände, große Herde und kürzere Fahrten als in Yala bedeuten oft Elefanten schon in der ersten Stunde.\n\nMinneriya und Kaudulla nahe Sigiriya sind berühmt für das „Gathering“ von etwa Juli bis Oktober, wenn Hunderte Elefanten an den zurückweichenden Tankufern zusammenkommen. Es ist wetterabhängig, aber bei passenden Bedingungen eines der großen Naturereignisse Asiens.',
      },
      {
        title: 'Leoparden: Yalas Star, Wilpattus ruhigere Alternative',
        body: 'Yala Block I hat eine der weltweit höchsten Leoparden-Dichten beeindruckend, bis man bedenkt, dass Leoparden Einzelgänger, nachtaktiv und perfekt getarnt sind. Eine gute Morgenfahrt mit geduldigem Tracker gibt dennoch vernünftige Chancen; zwei aufeinanderfolgende Drives verbessern sie deutlich. Andrang an Wochenenden mindert das Erlebnis früh starten und akzeptieren, dass nichts garantiert ist.\n\nWilpattu an der Nordwestküste bietet waldigeres, weniger überfülltes Terrain mit Leoparden, Lippenbären und Vogelwelt ideal, wer weniger Jeeps als maximale Dichte bevorzugt.',
      },
      {
        title: 'Wale, Delfine und Küstenfauna',
        body: 'Mirissa und Kalpitiya sind die Hauptbasen für Walbeobachtung. Blau- und Pottwale erscheinen vor Mirissa etwa von November bis April; Boote fahren früh, ruhige Morgen sind am besten. Kalpitiya passt zu einem anderen Kalender Delfine ganzjährig, Pottwale in bestimmten Offshore-Fenstern und kombiniert sich gut mit Wilpattu.\n\nSchildkröten-Aufzuchtstationen an der Südküste sind eher Bildung als Wildnis; wer Ethik wichtig findet, bevorzugt Zentren mit ordentlicher Auswilderung und ohne adulte Tiere in Schauaquarien.',
      },
      {
        title: 'Vögel und kleinere Säugetiere, die Umwege lohnen',
        body: 'Bundala nahe Hambantota ist ein Ramsar-Feuchtgebiet für Zugvögel, Flamingos und Salzwasserkrokodile hervorragend für Birding, oft übersehen auf Standardrundreisen. Sinharaja, UNESCO-Regenwald, birgt viele endemische Vögel und lohnt sich am besten zu Fuß mit lokalem Guide statt aus dem Jeep.\n\nKleinere Parks wie Gal Oya (Bootssafaris) und Horton Plains (Sambar und Hochlandvögel) belohnen Reisende, die mehr als die Yala–Udawalawe-Achse wollen.',
      },
      {
        title: 'Yala, Udawalawe, Minneriya oder Wilpattu was passt?',
        body: 'Yala: Leoparden, abwechslungsreiches Habitat, gut mit Kulturdreieck kombinierbar, aber voll und etwa einen Monat jährlich geschlossen (meist September). Udawalawe: Elefanten, ideal mit Kindern oder wenig Zeit. Minneriya/Kaudulla: saisonale Versammlungen nahe Sigiriya Wasserstand vor Buchung prüfen. Wilpattu: ruhigeres Leopard- und Bärenland mit längeren Waldfahrten.\n\nDie meisten Wochenrundreisen schaffen sinnvoll ein bis zwei Parks, nicht vier. Ihr Fahrer-Guide ordnet nach Saison, Fahrzeit und dem, was Sie in Asien schon gesehen haben.',
      },
      {
        title: 'Ethik, Jahreszeiten und verantwortungsvolles Beobachten',
        body: 'Im Jeep bleiben, sofern Parkregeln nichts anderes erlauben; Fahrer nie zum Jagen, Blockieren oder Bedrängen von Muttertieren mit Kälbern ermutigen. Blitzlicht und Lärm stressen Tiere Fernglas und Geduld schlagen Close-ups.\n\nTrockenzeit (etwa Mai–September in Südostparks, November–April für Wale) konzentriert Tiere an Wasser. Monsunregen stoppt Safaris selten ganz, bedeutet aber matschige Pisten und weniger aktive Katzen. Parkwahl mit unserem Beste-Reisezeit-Ratgeber abstimmen und Jeeps über seriöse Anbieter buchen.',
      },
    ],
    faq: [
      {
        q: 'Welcher Park ist am besten für Elefanten?',
        a: 'Udawalawe ist ganzjährig am verlässlichsten; Minneriya und Kaudulla sind von etwa Juli bis Oktober spektakulär, wenn Herden an den Tankufern zusammenkommen.',
      },
      {
        q: 'Sieht man Leoparden bei einer einzigen Yala-Safari?',
        a: 'Möglich, aber nicht garantiert. Zwei Drives (Morgen und Abend) an aufeinanderfolgenden Tagen geben deutlich bessere Chancen als eine hetzte Runde.',
      },
      {
        q: 'Wann ist Walbeobachtungssaison in Mirissa?',
        a: 'Etwa November bis April, ruhigste See meist am Morgen. Außerhalb dieses Fensters lieber Parks oder die Ostküste statt einer erzwungenen Bootsfahrt.',
      },
      {
        q: 'Sind Elefanten-Waisenhäuser ethisch vertretbar?',
        a: 'Viele Reisende bevorzugen heute Wildparks. Wer ein Sanctuary besucht, sollte prüfen, ob Tiere gefesselt, geritten oder für Shows genutzt werden seriöse Zentren tun das nicht.',
      },
      {
        q: 'Wie viele Nationalparks passen in eine Woche?',
        a: 'Ein bis zwei Wildtierstopps neben Kultur und Bergen z. B. Udawalawe plus Walbeobachtung oder Yala mit Minneriya, wenn das Gathering passt.',
      },
    ],
    ctaTitle: 'Wildtierbeobachtung in Ihre private Route einbauen',
    ctaBody: 'Nennen Sie uns Reisedaten und Prioritäten wir ordnen die passenden Parks, Jeepzeiten und Fahrtetappen in eine Rundreise mit Chauffeur ein, ohne die Woche zu überladen.',
    ctaLabel: 'Wildtier-Route planen',
    relatedTours: [
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'tour8', label: '8-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala-Nationalpark' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Sri Lanka Safari-Ratgeber' },
      { pageId: 'guideBestTime', label: 'Beste Reisezeit für Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide faune du Sri Lanka : éléphants, léopards, baleines et où les observer',
    lead: 'Pour une île à peu près de la taille de l’Irlande, le Sri Lanka concentre une densité faunique remarquable éléphants d’Asie en savane, léopards en forêt sèche, rorquals bleus au large du sud et oiseaux endémiques en pockets de forêt tropicale. L’essentiel est d’associer espèces, parc et saison, sans vouloir tout voir en une matinée précipitée.',
    heroAlt: 'Éléphants sauvages paissant dans un parc national du Sri Lanka',
    sections: [
      {
        title: 'Éléphants : la rencontre faunique la plus fiable de l’île',
        body: 'Le Sri Lanka abrite l’une des plus importantes populations d’éléphants d’Asie de la région ; plusieurs parcs rendent les observations quasi routinières. Udawalawe, dans la zone sèche sud-centrale, est le choix le plus fiable pour les familles terrain ouvert, grand troupeau résident et trajets plus courts qu’à Yala signifient souvent des éléphants dès la première heure.\n\nMinneriya et Kaudulla, près de Sigiriya, sont célèbres pour le « Gathering » d’environ juillet à octobre, quand des centaines d’éléphants convergent vers les berges des réservoirs en retrait. C’est saisonnier et dépendant de l’eau, mais quand les conditions s’alignent, c’est l’un des grands spectacles naturels d’Asie.',
      },
      {
        title: 'Léopards : la star de Yala, l’alternative plus calme de Wilpattu',
        body: 'Le bloc I de Yala affiche l’une des plus fortes densités de léopards au monde impressionnant jusqu’à ce qu’on se rappelle qu’ils sont solitaires, nocturnes et parfaitement camouflés. Une bonne sortie matinale avec un tracker patient offre des chances raisonnables ; deux drives consécutifs les améliorent nettement. La foule, surtout le week-end, peut gâcher l’expérience partez tôt et acceptez qu’aucune observation n’est garantie.\n\nWilpattu, sur la côte nord-ouest, propose un cadre plus forestier et moins congestionné avec léopards, ours lippus et oiseaux idéal pour qui préfère moins de jeeps à la densité maximale.',
      },
      {
        title: 'Baleines, dauphins et faune côtière',
        body: 'Mirissa et Kalpitiya sont les deux bases principales pour l’observation des baleines. Rorquals bleus et cachalots apparaissent au large de Mirissa environ de novembre à avril ; les bateaux partent tôt, les matins calmes sont les meilleurs. Kalpitiya convient à un autre calendrier dauphins toute l’année et cachalots offshore et se combine bien avec Wilpattu.\n\nLes élevages de tortues sur la côte sud sont éducatifs plutôt que sauvages ; si l’éthique compte, privilégiez les centres qui relâchent correctement les petits et évitent les adultes en bassins d’exposition.',
      },
      {
        title: 'Oiseaux et petits mammifères qui valent le détour',
        body: 'Bundala, près d’Hambantota, est une zone humide Ramsar pour migrateurs, flamants roses et crocodiles excellent pour les ornithologues, souvent négligé sur les circuits standards. Sinharaja, forêt tropicale UNESCO, abrite une forte proportion d’oiseaux endémiques et se visite mieux à pied avec un guide local qu’en jeep.\n\nDes parcs plus petits comme Gal Oya (safaris en bateau) et Horton Plains (sambar et oiseaux de montagne) récompensent ceux qui veulent plus que l’axe Yala–Udawalawe.',
      },
      {
        title: 'Choisir entre Yala, Udawalawe, Minneriya et Wilpattu',
        body: 'Yala : léopards, habitats variés, combinable avec le Triangle Culturel, mais fréquenté et fermé environ un mois par an (souvent septembre). Udawalawe : éléphants, surtout avec enfants ou peu de temps. Minneriya/Kaudulla : rassemblements saisonniers près de Sigiriya vérifiez le niveau d’eau avant de réserver. Wilpattu : léopards et ours plus au calme, drives plus longs en forêt.\n\nLa plupart des circuits d’une semaine incluent sensément un ou deux parcs, pas quatre. Votre chauffeur-guide peut les enchaîner selon la saison, les temps de route et ce que vous avez déjà vu ailleurs en Asie.',
      },
      {
        title: 'Éthique, saisons et observation responsable',
        body: 'Restez dans le jeep sauf règles contraires ; ne encouragez jamais les chauffeurs à poursuivre les animaux, bloquer leur passage ou harceler mères et petits. Flash et bruit stressent la faune jumelles et patience valent mieux que les gros plans.\n\nLa saison sèche (environ mai–septembre dans les parcs du sud-est, novembre–avril pour les baleines) concentre les animaux autour de l’eau. La mousson n’annule pas toujours les safaris mais rend les pistes boueuses et les félins moins actifs. Alignez le parc avec notre guide des saisons et réservez les jeeps via des opérateurs sérieux.',
      },
    ],
    faq: [
      {
        q: 'Quel parc est le meilleur pour voir des éléphants ?',
        a: 'Udawalawe est le plus fiable toute l’année ; Minneriya et Kaudulla sont spectaculaires d’environ juillet à octobre quand les troupeaux se regroupent au bord des réservoirs.',
      },
      {
        q: 'Peut-on voir un léopard lors d’un seul safari à Yala ?',
        a: 'C’est possible, mais jamais garanti. Deux drives (matin et soir) sur deux jours consécutifs offrent de bien meilleures chances qu’une seule sortie précipitée.',
      },
      {
        q: 'Quand observer les baleines à Mirissa ?',
        a: 'Environ de novembre à avril, mer la plus calme le matin. Hors de cette fenêtre, privilégiez les parcs ou la côte est plutôt qu’une sortie en mer forcée.',
      },
      {
        q: 'Est-il éthique de visiter des orphelinats d’éléphants ?',
        a: 'Beaucoup de voyageurs préfèrent désormais les parcs sauvages. Si vous visitez un sanctuaire, renseignez-vous sur les chaînes, le montage ou les spectacles les bons centres n’en font pas.',
      },
      {
        q: 'Combien de parcs nationaux dans une semaine au Sri Lanka ?',
        a: 'Un ou deux arrêts faune conviennent bien avec culture et montagnes par exemple Udawalawe plus baleines, ou Yala avec Minneriya si le Gathering coïncide.',
      },
    ],
    ctaTitle: 'Intégrez la faune à votre itinéraire privé',
    ctaBody: 'Indiquez vos dates et priorités nous placerons les bons parcs, horaires de jeep et étapes de route dans un circuit avec chauffeur sans surcharger la semaine.',
    ctaLabel: 'Planifier un parcours faune',
    relatedTours: [
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
      { pageId: 'tour8', label: 'Circuit de 8 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parc national de Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guide safari au Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Meilleure période pour le Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur privé' },
    ],
  },

  it: {
    h1: 'Guida alla fauna dello Sri Lanka: elefanti, leopardi, balene e dove osservarli',
    lead: 'Per un’isola grossomodo grande quanto l’Irlanda, lo Sri Lanka concentra una densità faunistica straordinaria elefanti asiatici in praterie aperte, leopardi nella foresta secca, balenottere al largo del sud e uccelli endemici in lembi di foresta pluviale. La chiave è abbinare specie, parco e stagione, senza voler vedere tutto in una mattina di corsa.',
    heroAlt: 'Elefanti selvatici al pascolo in un parco nazionale dello Sri Lanka',
    sections: [
      {
        title: 'Elefanti: l’incontro faunistico più affidabile dell’isola',
        body: 'Lo Sri Lanka ospita una delle più grandi popolazioni di elefanti asiatici della regione; in diversi parchi gli avvistamenti sono quasi scontati. Udawalawe, nella zona arida sud-centrale, è la scelta più sicura per le famiglie terreno aperto, grande branco residente e drive più brevi di Yala spesso significano elefanti entro la prima ora.\n\nMinneriya e Kaudulla, vicino a Sigiriya, sono famosi per il “Gathering” da circa luglio a ottobre, quando centinaia di elefanti convergono sui bordi dei bacini in ritirata. È stagionale e dipende dall’acqua, ma quando le condizioni coincidono è uno dei grandi spettacoli naturali dell’Asia.',
      },
      {
        title: 'Leopardi: la star di Yala, l’alternativa più tranquilla di Wilpattu',
        body: 'Il Blocco I di Yala ha una delle densità di leopardi più alte al mondo impressionante finché non si ricorda che sono solitari, notturni e perfettamente mimetizzati. Un buon drive mattutino con tracker paziente offre probabilità ragionevoli; due uscite consecutive le migliorano nettamente. La folla, soprattutto nei weekend, può rovinare l’esperienza partite presto e accettate che nulla è garantito.\n\nWilpattu, sulla costa nord-occidentale, offre un ambiente più boscoso e meno affollato con leopardi, orsi labiati e uccelli adatto a chi preferisce meno jeep alla massima densità.',
      },
      {
        title: 'Balene, delfini e fauna costiera',
        body: 'Mirissa e Kalpitiya sono le due basi principali per l’osservazione delle balene. Balenottere e capodogli compaiono al largo di Mirissa circa da novembre ad aprile; le barche partono presto, le mattine calme sono le migliori. Kalpitiya segue un calendario diverso delfini tutto l’anno e capodogli offshore e si combina bene con Wilpattu.\n\nLe tartarughe sulla costa sud sono più educative che selvagge; se l’etica conta, preferite centri che rilasciano correttamente i piccoli ed evitano adulti in vasche espositive.',
      },
      {
        title: 'Uccelli e piccoli mammiferi che meritano una deviazione',
        body: 'Bundala, vicino a Hambantota, è una zona umida Ramsar per migratori, fenicotteri e coccodrilli ottimo per birdwatching, spesso trascurato nei tour standard. Sinharaja, foresta pluviale UNESCO, ospita molti uccelli endemici ed è meglio esplorata a piedi con guida locale che in jeep.\n\nParchi più piccoli come Gal Oya (safari in barca) e Horton Plains (sambar e uccelli di montagna) premiano chi vuole varietà oltre l’asse Yala–Udawalawe.',
      },
      {
        title: 'Scegliere tra Yala, Udawalawe, Minneriya e Wilpattu',
        body: 'Yala: leopardi, habitat vario, combinabile col Triangolo Culturale, ma affollato e chiuso circa un mese l’anno (di solito settembre). Udawalawe: elefanti, ideale con bambini o poco tempo. Minneriya/Kaudulla: raduni stagionali vicino Sigiriya verificate il livello dell’acqua prima di prenotare. Wilpattu: leopardi e orsi più tranquilli, drive più lunghi in foresta.\n\nLa maggior parte dei tour settimanali include sensatamente uno o due parchi, non quattro. Il vostro autista-guida può sequenziarli per stagione, tempi di guida e ciò che avete già visto altrove in Asia.',
      },
      {
        title: 'Etica, stagioni e osservazione responsabile',
        body: 'Restate in jeep salvo regole diverse; non incoraggiate mai i conducenti a inseguire animali, bloccarne il passaggio o stressare madri con piccoli. Flash e rumore stressano la fauna binocolo e pazienza battono i primi piani.\n\nLa stagione secca (circa maggio–settembre nei parchi sud-est, novembre–aprile per le balene) concentra gli animali intorno all’acqua. I monsoni raramente annullano i safari ma significano piste fangose e felini meno attivi. Allineate il parco alla nostra guida sulle stagioni e prenotate jeep tramite operatori affidabili.',
      },
    ],
    faq: [
      {
        q: 'Quale parco è migliore per vedere gli elefanti?',
        a: 'Udawalawe è il più affidabile tutto l’anno; Minneriya e Kaudulla sono spettacolari da circa luglio a ottobre quando i branchi si radunano ai bordi dei bacini.',
      },
      {
        q: 'Si vede un leopardo con un solo safari a Yala?',
        a: 'Possibile, ma non garantito. Due drive (mattina e sera) in giorni consecutivi danno probabilità nettamente migliori di un giro affrettato.',
      },
      {
        q: 'Quando è la stagione delle balene a Mirissa?',
        a: 'Circa da novembre ad aprile, mare più calmo al mattino. Fuori da questa finestra, meglio parchi o costa orientale che un’uscita in mare forzata.',
      },
      {
        q: 'È etico visitare orfanotrofi per elefanti?',
        a: 'Molti viaggiatori preferiscono ora i parchi selvaggi. Se visitate un santuario, informatevi su catene, cavalcature o spettacoli i centri seri non li praticano.',
      },
      {
        q: 'Quanti parchi nazionali in una settimana nello Sri Lanka?',
        a: 'Uno o due stop faunistici vanno bene con cultura e colline ad esempio Udawalawe più balene, o Yala con Minneriya se il Gathering coincide.',
      },
    ],
    ctaTitle: 'Inserite la fauna nel vostro itinerario privato',
    ctaBody: 'Indicate date e priorità inseriremo i parchi giusti, orari jeep e tappe di guida in un tour con autista senza sovraccaricare la settimana.',
    ctaLabel: 'Pianifica un percorso faunistico',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
      { pageId: 'tour8', label: 'Tour di 8 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parco nazionale di Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guida safari nello Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Periodo migliore per lo Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guida all’autista privato' },
    ],
  },

  es: {
    h1: 'Guía de fauna de Sri Lanka: elefantes, leopardos, ballenas y dónde verlos',
    lead: 'Para una isla del tamaño aproximado de Irlanda, Sri Lanka concentra una densidad faunística extraordinaria elefantes asiáticos en praderas abiertas, leopardos en bosque seco, rorcuales azules frente al sur y aves endémicas en fragmentos de selva. La clave es combinar especie, parque y temporada, sin intentar verlo todo en una mañana apresurada.',
    heroAlt: 'Elefantes salvajes pastando en un parque nacional de Sri Lanka',
    sections: [
      {
        title: 'Elefantes: el encuentro faunístico más fiable de la isla',
        body: 'Sri Lanka alberga una de las mayores poblaciones de elefantes asiáticos de la región; en varios parques los avistamientos son casi rutinarios. Udawalawe, en la zona seca sur-central, es la opción más fiable para familias terreno abierto, gran manada residente y recorridos más cortos que Yala suelen significar elefantes en la primera hora.\n\nMinneriya y Kaudulla, cerca de Sigiriya, son famosos por el «Gathering» de aproximadamente julio a octubre, cuando cientos de elefantes convergen en los bordes de los embalses en retirada. Es estacional y depende del agua, pero cuando las condiciones coinciden es uno de los grandes espectáculos naturales de Asia.',
      },
      {
        title: 'Leopardos: la estrella de Yala, la alternativa más tranquila de Wilpattu',
        body: 'El bloque I de Yala tiene una de las densidades de leopardos más altas del mundo impresionante hasta que recuerdas que son solitarios, nocturnos y perfectamente camuflados. Un buen drive matutino con rastreador paciente da probabilidades razonables; dos salidas consecutivas las mejoran notablemente. Las multitudes, sobre todo en fines de semana, pueden arruinar la experiencia salgan temprano y acepten que nada está garantizado.\n\nWilpattu, en la costa noroeste, ofrece un entorno más boscoso y menos congestionado con leopardos, osos labiados y aves ideal para quien prefiere menos jeeps a la máxima densidad.',
      },
      {
        title: 'Ballenas, delfines y fauna costera',
        body: 'Mirissa y Kalpitiya son las dos bases principales para avistamiento de ballenas. Rorcuales y cachalotes aparecen frente a Mirissa aproximadamente de noviembre a abril; los barcos salen temprano y las mañanas calmadas son las mejores. Kalpitiya encaja en otro calendario delfines todo el año y cachalotes en ventanas offshore y combina bien con Wilpattu.\n\nLas crías de tortugas en la costa sur son más educativas que salvajes; si la ética importa, prefieran centros que sueltan correctamente a las crías y evitan adultos en estanques de exhibición.',
      },
      {
        title: 'Aves y pequeños mamíferos que merecen un desvío',
        body: 'Bundala, cerca de Hambantota, es un humedal Ramsar para migratorios, flamencos y cocodrilos excelente para birding, a menudo ignorado en tours estándar. Sinharaja, selva tropical UNESCO, alberga muchas aves endémicas y se recorre mejor a pie con guía local que en jeep.\n\nParques más pequeños como Gal Oya (safaris en barca) y Horton Plains (sambar y aves de montaña) premian a quien busca variedad más allá del eje Yala–Udawalawe.',
      },
      {
        title: 'Elegir entre Yala, Udawalawe, Minneriya y Wilpattu',
        body: 'Yala: leopardos, hábitats variados, combinable con el Triángulo Cultural, pero concurrido y cerrado un mes al año (normalmente septiembre). Udawalawe: elefantes, ideal con niños o poco tiempo. Minneriya/Kaudulla: concentraciones estacionales cerca de Sigiriya comprueben el nivel de agua antes de reservar. Wilpattu: leopardos y osos más tranquilos, drives más largos en bosque.\n\nLa mayoría de tours de una semana incluyen sensatamente uno o dos parques, no cuatro. Su chófer-guía puede ordenarlos según temporada, tiempos de conducción y lo que ya hayan visto en Asia.',
      },
      {
        title: 'Ética, temporadas y observación responsable',
        body: 'Permanezcan en el jeep salvo reglas distintas; nunca animen a los conductores a perseguir animales, bloquear su paso o acosar madres con crías. Flash y ruido estresan la fauna prismáticos y paciencia superan los primeros planos.\n\nLa temporada seca (aprox. mayo–septiembre en parques del sureste, noviembre–abril para ballenas) concentra animales en el agua. La lluvia monzónica rara vez cancela safaris por completo pero implica pistas embarradas y felinos menos activos. Alineen el parque con nuestra guía de temporadas y reserven jeeps con operadores serios.',
      },
    ],
    faq: [
      {
        q: '¿Qué parque es mejor para ver elefantes?',
        a: 'Udawalawe es el más fiable todo el año; Minneriya y Kaudulla son espectaculares de aproximadamente julio a octubre cuando las manadas se agrupan en los bordes de los embalses.',
      },
      {
        q: '¿Se puede ver un leopardo en un solo safari en Yala?',
        a: 'Es posible, pero no garantizado. Dos drives (mañana y tarde) en días consecutivos dan mucho mejores probabilidades que una vuelta apresurada.',
      },
      {
        q: '¿Cuándo es la temporada de ballenas en Mirissa?',
        a: 'Aproximadamente de noviembre a abril, con mar más calmado por la mañana. Fuera de esa ventana, mejor parques o costa este que forzar una salida en barco.',
      },
      {
        q: '¿Es ético visitar orfanatos de elefantes?',
        a: 'Muchos viajeros prefieren ahora parques salvajes. Si visitan un santuario, investiguen cadenas, monta o espectáculos los centros serios no lo permiten.',
      },
      {
        q: '¿Cuántos parques nacionales caben en una semana?',
        a: 'Uno o dos paradas faunísticas encajan bien con cultura y montañas por ejemplo Udawalawe más ballenas, o Yala con Minneriya si coincide el Gathering.',
      },
    ],
    ctaTitle: 'Integre la fauna en su itinerario privado',
    ctaBody: 'Indíquenos fechas y prioridades encajaremos los parques, horarios de jeep y tramos de conducción en un tour con chófer sin sobrecargar la semana.',
    ctaLabel: 'Planificar ruta faunística',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour de 5 días por Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
      { pageId: 'tour8', label: 'Tour de 8 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parque Nacional de Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guía de safari en Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Mejor época para visitar Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guía del chófer privado' },
    ],
  },

  pl: {
    h1: 'Przewodnik po dzikiej przyrodzie Sri Lanki: słonie, lamparty, wieloryby i gdzie je zobaczyć',
    lead: 'Jak na wyspę wielkości Irlandii Sri Lanka ma niezwykłą koncentrację fauny azjatyckie słonie na otwartych łąkach, lamparty w suchym lesie, wieloryby u południowego wybrzeża i endemiczne ptaki w fragmentach lasu deszczowego. Kluczem jest dopasowanie gatunku, parku i sezonu, a nie próba zobaczenia wszystkiego w jeden pośpieszny poranek.',
    heroAlt: 'Dzikie słonie pasące się w parku narodowym na Sri Lance',
    sections: [
      {
        title: 'Słonie: najpewniejsze spotkanie z dziką naturą wyspy',
        body: 'Sri Lanka ma jedną z największych populacji słoni azjatyckich w regionie; w kilku parkach obserwacje są niemal rutynowe. Udawalawe w suchej strefie południowo-centralnej to najpewniejszy wybór dla rodzin otwarty teren, duże stado i krótsze trasy niż w Yali często dają słonie w pierwszej godzinie.\n\nMinneriya i Kaudulla koło Sigiriyi słyną z „Gathering” od około lipca do października, gdy setki słoni schodzą się na brzegach opadających zbiorników. To sezonowe i zależne od wody, ale przy dobrych warunkach to jedno z wielkich widowisk natury w Azji.',
      },
      {
        title: 'Lamparty: gwiazda Yali, spokojniejsza alternatywa Wilpattu',
        body: 'Blok I Yali ma jedną z najwyższych gęstości lampartów na świecie imponujące, dopóki nie przypomnimy sobie, że są samotnicze, nocne i doskonale zamaskowane. Dobry poranny drive z cierpliwym trackerem daje rozsądne szanse; dwa kolejne wyjazdy je wyraźnie poprawiają. Tłumy, zwłaszcza w weekendy, psują wrażenia zacznijcie wcześnie i zaakceptujcie brak gwarancji.\n\nWilpattu na północno-zachodnim wybrzeżu oferuje bardziej leśne, mniej zatłoczone tereny z lampartami, niedźwiedziami wargowatymi i ptakami dla tych, którzy wolą mniej jeepów niż maksymalną gęstość.',
      },
      {
        title: 'Wieloryby, delfiny i fauna wybrzeża',
        body: 'Mirissa i Kalpitiya to główne bazy obserwacji wielorybów. Błękitne wieloryby i kaszaloty pojawiają się u Mirissy od listopada do kwietnia; łodzie wypływają wcześnie, spokojne ranki są najlepsze. Kalpitiya ma inny kalendarz delfiny przez cały rok i kaszaloty offshore i dobrze łączy się z Wilpattu.\n\nHodowle żółwi na południu są raczej edukacyjne niż dzikie; jeśli liczy się etyka, wybierajcie ośrodki z prawidłowym wypuszczaniem młodych i bez dorosłych w basenach wystawowych.',
      },
      {
        title: 'Ptaki i mniejsze ssaki warte objazdu',
        body: 'Bundala koło Hambantoty to mokrada Ramsar dla ptaków przelotnych, flamingów i krokodyli świetne dla birderów, często pomijane w standardowych trasach. Sinharaja, las deszczowy UNESCO, ma wiele endemicznych ptaków i najlepiej zwiedza się ją pieszo z lokalnym przewodnikiem niż z jeepa.\n\nMniejsze parki jak Gal Oya (safari łodzią) i Horton Plains (sambar i ptaki górskie) nagradzają tych, którzy chcą więcej niż oś Yala–Udawalawe.',
      },
      {
        title: 'Yala, Udawalawe, Minneriya czy Wilpattu co wybrać?',
        body: 'Yala: lamparty, zróżnicowane siedliska, dobrze z Trójkątem Kulturowym, ale tłoczno i zamknięta około miesiąca rocznie (zwykle wrzesień). Udawalawe: słonie, idealnie z dziećmi lub małą ilością czasu. Minneriya/Kaudulla: sezonowe zgromadzenia koło Sigiriyi sprawdźcie poziom wody przed rezerwacją. Wilpattu: spokojniejsze lamparty i niedźwiedzie, dłuższe trasy w lesie.\n\nWiększość tygodniowych tras sensownie obejmuje jeden–dwa parki, nie cztery. Kierowca-przewodnik ułoży je według sezonu, czasu jazdy i tego, co widzieliście już gdzie indziej w Azji.',
      },
      {
        title: 'Etyka, sezony i odpowiedzialna obserwacja',
        body: 'Zostańcie w jeepie, o ile regulamin nie stanowi inaczej; nie zachęcajcie kierowców do pogonii, blokowania drogi ani zaczepiania matek z młodymi. Lampy błyskowe i hałas stresują zwierzęta lornetka i cierpliwość są lepsze od zbliżeń.\n\nSezon suchy (mniej więcej maj–wrzesień na południowym wschodzie, listopad–kwiecień dla wielorybów) skupia zwierzęta przy wodzie. Monsun rzadko całkowicie odwołuje safari, ale oznacza błotniste drogi i mniej aktywne koty. Dopasujcie park do naszego przewodnika po sezonach i rezerwujcie jeepy u rzetelnych operatorów.',
      },
    ],
    faq: [
      {
        q: 'Który park jest najlepszy na słonie?',
        a: 'Udawalawe jest najpewniejsze przez cały rok; Minneriya i Kaudulla są spektakularne od lipca do października, gdy stada schodzą się na brzegach zbiorników.',
      },
      {
        q: 'Czy widać lamparta podczas jednego safari w Yali?',
        a: 'Możliwe, ale nie gwarantowane. Dwa wyjazdy (rano i wieczorem) w kolejnych dniach dają wyraźnie lepsze szanse niż jedna pośpieszna trasa.',
      },
      {
        q: 'Kiedy jest sezon wielorybów w Mirissie?',
        a: 'Od listopada do kwietnia, najspokojniejsza morze zwykle rano. Poza tym oknem lepiej parki lub wschodnie wybrzeże niż wymuszony rejs.',
      },
      {
        q: 'Czy sierocińce słoni są etyczne?',
        a: 'Wielu podróżnych woli dziś parki dzikie. Jeśli odwiedzacie schronisko, sprawdźcie łańcuchy, jazdę i pokazy rzetelne ośrodki tego nie robią.',
      },
      {
        q: 'Ile parków narodowych w tygodniu na Sri Lance?',
        a: 'Jeden–dwa przystanki przyrodnicze dobrze łączą się z kulturą i górami np. Udawalawe plus wieloryby albo Yala z Minneriyą, gdy Gathering się zgadza.',
      },
    ],
    ctaTitle: 'Włącz dziką przyrodę do prywatnej trasy',
    ctaBody: 'Podajcie daty i priorytety dopasujemy parki, godziny jeepów i odcinki jazdy w tourze z kierowcą bez przeładowania tygodnia.',
    ctaLabel: 'Zaplanuj trasę przyrodniczą',
    relatedTours: [
      { pageId: 'tour5', label: '5-dniowa wycieczka po Sri Lance' },
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour8', label: '8-dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Park Narodowy Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Przewodnik safari po Sri Lance' },
      { pageId: 'guideBestTime', label: 'Najlepszy czas na Sri Lankę' },
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnym kierowcy' },
    ],
  },

  ru: {
    h1: 'Гид по дикой природе Шри-Ланки: слоны, леопарды, киты и где их увидеть',
    lead: 'Для острова размером примерно с Ирландию Шри-Ланка поражает плотностью фауны азиатские слоны на открытых лугах, леопарды в сухом лесу, синие киты у южного побережья и эндемичные птицы в клочках тропического леса. Главное сочетать вид, парк и сезон, а не пытаться увидеть всё за один спешный утренний выезд.',
    heroAlt: 'Дикие слоны на пастбище в национальном парке Шри-Ланки',
    sections: [
      {
        title: 'Слоны: самая надёжная встреча с дикой природой острова',
        body: 'На Шри-Ланке одна из крупнейших в регионе популяций азиатских слонов; в нескольких парках наблюдения почти гарантированы. Удавалаве в южно-центральной сухой зоне самый надёжный выбор для семей: открытая местность, большое стадо и более короткие маршруты, чем в Яле, часто дают слонов уже в первый час.\n\nМиннерия и Каудулла у Сигирии знамениты «Gathering» примерно с июля по октябрь, когда сотни слонов сходятся к отступающим берегам водохранилищ. Это сезонно и зависит от воды, но при удачных условиях одно из великих природных зрелищ Азии.',
      },
      {
        title: 'Леопарды: звезда Ялы, более спокойная альтернатива Вилпатту',
        body: 'Блок I Ялы имеет одну из самых высоких плотностей леопардов в мире впечатляет, пока не вспомнишь, что они одиночны, ночны и идеально замаскированы. Хороший утренний drive с терпеливым трекером даёт разумные шансы; два выезда подряд заметно их улучшают. Толпы, особенно в выходные, портят впечатление выезжайте рано и принимайте отсутствие гарантий.\n\nВилпатту на северо-западном побережье предлагает более лесистую, менее перегруженную среду со леопардами, медведями-губачами и птицами для тех, кто предпочитает меньше джипов, а не максимальную плотность.',
      },
      {
        title: 'Киты, дельфины и прибрежная фауна',
        body: 'Мирисса и Калпития две основные базы для наблюдения за китами. Синие киты и кашалоты появляются у Мириссы примерно с ноября по апрель; лодки уходят рано, спокойнее всего утром. Калпития подходит к другому календарю дельфины круглый год и кашалоты в открытом море и хорошо сочетается с Вилпатту.\n\nПитомники черепах на юге скорее познавательные, чем дикие; если важна этика, выбирайте центры с правильным выпуском молоди и без взрослых в выставочных бассейнах.',
      },
      {
        title: 'Птицы и мелкие млекопитающие, ради которых стоит свернуть',
        body: 'Бундала у Хамбантоты Ramsar-зона для перелётных птиц, фламинго и крокодилов; отлично для бёрдинга, часто пропускается в стандартных турах. Синharaja, тропический лес ЮНЕСКО, хранит множество эндемичных птиц и лучше исследуется пешком с местным гидом, а не из джипа.\n\nМеньшие парки вроде Gal Oya (сафари на лодке) и Horton Plains (самбар и горные птицы) награждают тех, кто хочет больше, чем ось Яла–Удавалаве.',
      },
      {
        title: 'Выбор между Ялой, Удавалаве, Миннерией и Вилпатту',
        body: 'Яла: леопарды, разнообразные ландшафты, удобно с Культурным треугольником, но многолюдно и закрыта примерно месяц в год (обычно сентябрь). Удавалаве: слоны, идеально с детьми или малым временем. Миннерия/Каудулла: сезонные скопления у Сигирии проверьте уровень воды перед бронированием. Вилпатту: более спокойные леопарды и медведи, более длинные лесные маршруты.\n\nБольшинство недельных маршрутов разумно включает один–два парка, не четыре. Водитель-гид выстроит их по сезону, времени в пути и тому, что вы уже видели в Азии.',
      },
      {
        title: 'Этика, сезоны и ответственное наблюдение',
        body: 'Оставайтесь в джипе, если правила не разрешают иное; не поощряйте погоню, перекрытие пути или преследование матерей с детёнышами. Вспышки и шум стрессируют животных бинокль и терпение лучше крупных планов.\n\nСухой сезон (примерно май–сентябрь на юго-востоке, ноябрь–апрель для китов) концентрирует животных у воды. Муссон редко отменяет сафари полностью, но означает грязные дороги и менее активных кошек. Согласуйте парк с нашим гидом по сезонам и бронируйте джипы у проверенных операторов.',
      },
    ],
    faq: [
      {
        q: 'Какой парк лучше для слонов?',
        a: 'Удавалаве надёжен круглый год; Миннерия и Каудулла впечатляют примерно с июля по октябрь, когда стада собираются у водохранилищ.',
      },
      {
        q: 'Увидеть леопарда за одно сафари в Яле?',
        a: 'Возможно, но не гарантировано. Два выезда (утро и вечер) в соседние дни дают заметно лучшие шансы, чем один спешный круг.',
      },
      {
        q: 'Когда сезон китов в Мириссе?',
        a: 'Примерно с ноября по апрель, спокойнее всего утром. Вне этого окна лучше парки или восточное побережье, чем насильственный морской рейс.',
      },
      {
        q: 'Этично ли посещать слоновьи приюты?',
        a: 'Многие теперь предпочитают дикие парки. Если идёте в sanctuary, узнайте о цепях, верховой езде и шоу серьёзные центры этого не делают.',
      },
      {
        q: 'Сколько парков вместить за неделю?',
        a: 'Один–два природных стопа хорошо сочетаются с культурой и горами например Удавалаве плюс киты или Яла с Миннерией при совпадении Gathering.',
      },
    ],
    ctaTitle: 'Встроим дикую природу в ваш частный маршрут',
    ctaBody: 'Назовите даты и приоритеты впишем нужные парки, время джипов и переезды в тур с водителем без перегрузки недели.',
    ctaLabel: 'Спланировать маршрут по природе',
    relatedTours: [
      { pageId: 'tour5', label: '5-дневный тур по Шри-Ланке' },
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
      { pageId: 'tour8', label: '8-дневный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Национальный парк Яла' },
      { pageId: 'destSigiriya', label: 'Сигирия' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Гид по сафари на Шри-Ланке' },
      { pageId: 'guideBestTime', label: 'Лучшее время для Шри-Ланки' },
      { pageId: 'guidePrivateDriver', label: 'Гид по частному водителю' },
    ],
  },
};
