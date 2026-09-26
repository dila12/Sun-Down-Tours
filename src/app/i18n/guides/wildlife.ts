import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka wildlife guide (pageId: guideWildlife).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const WILDLIFE_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Wildlife Tours: Elephants, Leopards, Whales and Where to See Them',
    lead: 'For an island roughly the size of Ireland, Sri Lanka packs an extraordinary density of wildlife Asian elephants in open grasslands, leopards in dry forest, blue whales off the south coast and endemic birds in rainforest pockets. The trick is matching species to the right park and season, not trying to see everything in one rushed morning.',
    heroImage: 'assets/img/5daysTours/45.webp',
    heroAlt: 'Wild elephants grazing in a Sri Lankan national park',
    sections: [
      {
        id: 'elephants',
        title: 'Elephants: the island’s most reliable wildlife encounter',
        body: 'Sri Lanka holds one of the largest Asian elephant populations in the region, and several parks make sightings almost routine rather than lucky. Udawalawe National Park, in the south central dry zone, is the most dependable choice for families open terrain, a large resident herd and shorter drives than Yala often mean elephants within the first hour.\n\nMinneriya and Kaudulla national parks, near Sigiriya, are famous for “The Gathering” from roughly July to October, when hundreds of elephants converge on the receding tank edges. It is seasonal and weather dependent, but when conditions align it is one of Asia’s great wildlife spectacles.',
      },
      {
        id: 'leopards',
        title: 'Leopards: Yala’s star, Wilpattu’s quieter alternative',
        body: 'Yala Block I holds one of the world’s highest leopard densities, which sounds impressive until you remember leopards are solitary, nocturnal and perfectly camouflaged. A good morning drive with a patient tracker still gives reasonable odds; back to back drives improve them further. Crowds, especially around weekends and public holidays, can reduce the experience start early and accept that a sighting is never guaranteed.\n\nWilpattu National Park, on the north west coast, offers a more forested, less congested setting with leopards, sloth bears and birdlife. It suits travellers who prefer fewer jeeps over the highest headline density.',
      },
      {
        id: 'whalesAndMarine',
        title: 'Whales, dolphins and coastal wildlife',
        body: 'Mirissa and Kalpitiya are the two main whale watching bases. Blue whales and sperm whales appear off Mirissa roughly from November to April, overlapping the south coast’s dry season; boats leave early and conditions are best on calm mornings. Kalpitiya suits a different calendar dolphins year round and sperm whales in deeper offshore windows and works well combined with Wilpattu or the north west coast.\n\nTurtle hatcheries along the south coast are educational rather than wild encounters; if ethics matter to you, favour centres that release hatchlings properly and avoid venues that keep adult turtles in tanks for display.',
      },
      {
        id: 'birdlife',
        title: 'Birds and smaller mammals worth the detour',
        body: 'Bundala National Park, near Hambantota, is an Ramsar wetland stronghold for migratory waders, flamingos and saltwater crocodiles excellent for birders and often overlooked on standard round tours. Sinharaja Forest Reserve, a UNESCO rainforest, holds a high proportion of Sri Lanka’s endemic birds and is best explored on foot with a local guide rather than from a jeep.\n\nSmaller parks like Gal Oya (boat safaris on the reservoir) and Horton Plains (sambar deer and highland birds) reward travellers who want variety beyond the Yala to Udawalawe axis.',
      },
      {
        id: 'parkGuide',
        title: 'Choosing between Yala, Udawalawe, Minneriya and Wilpattu',
        body: 'Yala: best for leopards, varied habitat and combined cultural triangle itineraries, but busy and closed for roughly a month each year (usually September) for maintenance. Udawalawe: best for elephants, especially with children or limited time. Minneriya/Kaudulla: seasonal elephant gatherings near Sigiriya check water levels before booking. Wilpattu: quieter leopard and bear country with a longer, more forested drive.\n\nMost One Week round tours sensibly include one or two parks, not four. Your driver guide can sequence parks by season, driving time and what you have already seen elsewhere in Asia.',
      },
      {
        id: 'ethicsAndSeasons',
        title: 'Ethics, seasons and responsible viewing',
        body: 'Stay inside the jeep unless the park rules explicitly allow otherwise; never encourage drivers to chase animals, block their path or crowd mothers with calves. Flash photography and loud behaviour stress wildlife binoculars and patience beat close ups every time.\n\nDry season months (roughly May to September in the south east parks, November to April for whales) concentrate animals at water and improve visibility. Monsoon rain rarely cancels safaris entirely but can mean muddy tracks and fewer cats on the move. Pair park choice with our best time guide and book jeeps through reputable operators rather than ad hoc touts at the gate.',
      },
    ],
    faq: [
      {
        q: 'Which park is best for seeing elephants in Sri Lanka?',
        a: 'Udawalawe is the most reliable year round; Minneriya and Kaudulla are spectacular for large gatherings from roughly July to October when water levels draw herds to the tank edges.',
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
        q: 'How many national parks fit in a One Week Sri Lanka trip?',
        a: 'One or two wildlife stops work well alongside culture and hills for example Udawalawe plus a whale trip, or Yala with Minneriya if dates align with the gathering.',
      },
    ],
    ctaTitle: 'Build wildlife into your private itinerary',
    ctaBody: 'Tell us your travel dates and priorities we will slot the right parks, jeep times and driving legs into a chauffeur guided round tour without overloading the week.',
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
    h1: 'Sri Lanka Tierwelt Ratgeber: Elefanten, Leoparden, Wale und wo man sie sieht',
    lead: 'Fur eine Insel etwa so gross wie Irland birgt Sri Lanka eine aussergewohnliche Wildtierdichte asiatische Elefanten in offenen Graslandschaften, Leoparden im Trockenwald, Blauwale vor der Sudkuste und endemische Vogel in Regenwaldinseln. Entscheidend ist, Art und Saison passend zu wahlen, statt alles in einem hetzigen Vormittag sehen zu wollen.',
    heroAlt: 'Freilebende Elefanten in einem srilankischen Nationalpark',
    sections: [
      {
        title: 'Elefanten: die verlasslichste Wildtierbegegnung der Insel',
        body: 'Sri Lanka beherbergt eine der grossten Asiatischen Elefanten Populationen der Region; in mehreren Parks sind Sichtungen fast Routine. Udawalawe im sudzentralen Trockengebiet ist fur Familien am zuverlassigsten offenes Gelande, grosse Herde und kurzere Fahrten als in Yala bedeuten oft Elefanten schon in der ersten Stunde.\n\nMinneriya und Kaudulla nahe Sigiriya sind beruhmt fur das „Gathering“ von etwa Juli bis Oktober, wenn Hunderte Elefanten an den zuruckweichenden Tankufern zusammenkommen. Es ist wetterabhangig, aber bei passenden Bedingungen eines der grossen Naturereignisse Asiens.',
      },
      {
        title: 'Leoparden: Yalas Star, Wilpattus ruhigere Alternative',
        body: 'Yala Block I hat eine der weltweit hochsten Leoparden Dichten beeindruckend, bis man bedenkt, dass Leoparden Einzelganger, nachtaktiv und perfekt getarnt sind. Eine gute Morgenfahrt mit geduldigem Tracker gibt dennoch vernunftige Chancen; zwei aufeinanderfolgende Drives verbessern sie deutlich. Andrang an Wochenenden mindert das Erlebnis fruh starten und akzeptieren, dass nichts garantiert ist.\n\nWilpattu an der Nordwestkuste bietet waldigeres, weniger uberfulltes Terrain mit Leoparden, Lippenbaren und Vogelwelt ideal, wer weniger Jeeps als maximale Dichte bevorzugt.',
      },
      {
        title: 'Wale, Delfine und Kustenfauna',
        body: 'Mirissa und Kalpitiya sind die Hauptbasen fur Walbeobachtung. Blau und Pottwale erscheinen vor Mirissa etwa von November bis April; Boote fahren fruh, ruhige Morgen sind am besten. Kalpitiya passt zu einem anderen Kalender Delfine ganzjahrig, Pottwale in bestimmten Offshore Fenstern und kombiniert sich gut mit Wilpattu.\n\nSchildkroten Aufzuchtstationen an der Sudkuste sind eher Bildung als Wildnis; wer Ethik wichtig findet, bevorzugt Zentren mit ordentlicher Auswilderung und ohne adulte Tiere in Schauaquarien.',
      },
      {
        title: 'Vogel und kleinere Saugetiere, die Umwege lohnen',
        body: 'Bundala nahe Hambantota ist ein Ramsar Feuchtgebiet fur Zugvogel, Flamingos und Salzwasserkrokodile hervorragend fur Birding, oft ubersehen auf Standardrundreisen. Sinharaja, UNESCO Regenwald, birgt viele endemische Vogel und lohnt sich am besten zu Fuss mit lokalem Guide statt aus dem Jeep.\n\nKleinere Parks wie Gal Oya (Bootssafaris) und Horton Plains (Sambar und Hochlandvogel) belohnen Reisende, die mehr als die Yala to Udawalawe Achse wollen.',
      },
      {
        title: 'Yala, Udawalawe, Minneriya oder Wilpattu was passt?',
        body: 'Yala: Leoparden, abwechslungsreiches Habitat, gut mit Kulturdreieck kombinierbar, aber voll und etwa einen Monat jahrlich geschlossen (meist September). Udawalawe: Elefanten, ideal mit Kindern oder wenig Zeit. Minneriya/Kaudulla: saisonale Versammlungen nahe Sigiriya Wasserstand vor Buchung prufen. Wilpattu: ruhigeres Leopard und Barenland mit langeren Waldfahrten.\n\nDie meisten Wochenrundreisen schaffen sinnvoll ein bis zwei Parks, nicht vier. Ihr Fahrer Guide ordnet nach Saison, Fahrzeit und dem, was Sie in Asien schon gesehen haben.',
      },
      {
        title: 'Ethik, Jahreszeiten und verantwortungsvolles Beobachten',
        body: 'Im Jeep bleiben, sofern Parkregeln nichts anderes erlauben; Fahrer nie zum Jagen, Blockieren oder Bedrangen von Muttertieren mit Kalbern ermutigen. Blitzlicht und Larm stressen Tiere Fernglas und Geduld schlagen Close ups.\n\nTrockenzeit (etwa Mai to September in Sudostparks, November to April fur Wale) konzentriert Tiere an Wasser. Monsunregen stoppt Safaris selten ganz, bedeutet aber matschige Pisten und weniger aktive Katzen. Parkwahl mit unserem Beste Reisezeit Ratgeber abstimmen und Jeeps uber seriose Anbieter buchen.',
      },
    ],
    faq: [
      {
        q: 'Welcher Park ist am besten fur Elefanten?',
        a: 'Udawalawe ist ganzjahrig am verlasslichsten; Minneriya und Kaudulla sind von etwa Juli bis Oktober spektakular, wenn Herden an den Tankufern zusammenkommen.',
      },
      {
        q: 'Sieht man Leoparden bei einer einzigen Yala Safari?',
        a: 'Moglich, aber nicht garantiert. Zwei Drives (Morgen und Abend) an aufeinanderfolgenden Tagen geben deutlich bessere Chancen als eine hetzte Runde.',
      },
      {
        q: 'Wann ist Walbeobachtungssaison in Mirissa?',
        a: 'Etwa November bis April, ruhigste See meist am Morgen. Ausserhalb dieses Fensters lieber Parks oder die Ostkuste statt einer erzwungenen Bootsfahrt.',
      },
      {
        q: 'Sind Elefanten Waisenhauser ethisch vertretbar?',
        a: 'Viele Reisende bevorzugen heute Wildparks. Wer ein Sanctuary besucht, sollte prufen, ob Tiere gefesselt, geritten oder fur Shows genutzt werden seriose Zentren tun das nicht.',
      },
      {
        q: 'Wie viele Nationalparks passen in eine Woche?',
        a: 'Ein bis zwei Wildtierstopps neben Kultur und Bergen z. B. Udawalawe plus Walbeobachtung oder Yala mit Minneriya, wenn das Gathering passt.',
      },
    ],
    ctaTitle: 'Wildtierbeobachtung in Ihre private Route einbauen',
    ctaBody: 'Nennen Sie uns Reisedaten und Prioritaten wir ordnen die passenden Parks, Jeepzeiten und Fahrtetappen in eine Rundreise mit Chauffeur ein, ohne die Woche zu uberladen.',
    ctaLabel: 'Wildtier Route planen',
    relatedTours: [
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala Nationalpark' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Sri Lanka Safari Ratgeber' },
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide faune du Sri Lanka : elephants, leopards, baleines et ou les observer',
    lead: 'Pour une ile a peu pres de la taille de l’Irlande, le Sri Lanka concentre une densite faunique remarquable elephants d’Asie en savane, leopards en foret seche, rorquals bleus au large du sud et oiseaux endemiques en pockets de foret tropicale. L’essentiel est d’associer especes, parc et saison, sans vouloir tout voir en une matinee precipitee.',
    heroAlt: 'Elephants sauvages paissant dans un parc national du Sri Lanka',
    sections: [
      {
        title: 'Elephants : la rencontre faunique la plus fiable de l’ile',
        body: 'Le Sri Lanka abrite l’une des plus importantes populations d’elephants d’Asie de la region ; plusieurs parcs rendent les observations quasi routinieres. Udawalawe, dans la zone seche sud centrale, est le choix le plus fiable pour les familles terrain ouvert, grand troupeau resident et trajets plus courts qu’a Yala signifient souvent des elephants des la premiere heure.\n\nMinneriya et Kaudulla, pres de Sigiriya, sont celebres pour le « Gathering » d’environ juillet a octobre, quand des centaines d’elephants convergent vers les berges des reservoirs en retrait. C’est saisonnier et dependant de l’eau, mais quand les conditions s’alignent, c’est l’un des grands spectacles naturels d’Asie.',
      },
      {
        title: 'Leopards : la star de Yala, l’alternative plus calme de Wilpattu',
        body: 'Le bloc I de Yala affiche l’une des plus fortes densites de leopards au monde impressionnant jusqu’a ce qu’on se rappelle qu’ils sont solitaires, nocturnes et parfaitement camoufles. Une bonne sortie matinale avec un tracker patient offre des chances raisonnables ; deux drives consecutifs les ameliorent nettement. La foule, surtout le week end, peut gacher l’experience partez tot et acceptez qu’aucune observation n’est garantie.\n\nWilpattu, sur la cote nord ouest, propose un cadre plus forestier et moins congestionne avec leopards, ours lippus et oiseaux ideal pour qui prefere moins de jeeps a la densite maximale.',
      },
      {
        title: 'Baleines, dauphins et faune cotiere',
        body: 'Mirissa et Kalpitiya sont les deux bases principales pour l’observation des baleines. Rorquals bleus et cachalots apparaissent au large de Mirissa environ de novembre a avril ; les bateaux partent tot, les matins calmes sont les meilleurs. Kalpitiya convient a un autre calendrier dauphins toute l’annee et cachalots offshore et se combine bien avec Wilpattu.\n\nLes elevages de tortues sur la cote sud sont educatifs plutot que sauvages ; si l’ethique compte, privilegiez les centres qui relachent correctement les petits et evitent les adultes en bassins d’exposition.',
      },
      {
        title: 'Oiseaux et petits mammiferes qui valent le detour',
        body: 'Bundala, pres d’Hambantota, est une zone humide Ramsar pour migrateurs, flamants roses et crocodiles excellent pour les ornithologues, souvent neglige sur les circuits standards. Sinharaja, foret tropicale UNESCO, abrite une forte proportion d’oiseaux endemiques et se visite mieux a pied avec un guide local qu’en jeep.\n\nDes parcs plus petits comme Gal Oya (safaris en bateau) et Horton Plains (sambar et oiseaux de montagne) recompensent ceux qui veulent plus que l’axe Yala to Udawalawe.',
      },
      {
        title: 'Choisir entre Yala, Udawalawe, Minneriya et Wilpattu',
        body: 'Yala : leopards, habitats varies, combinable avec le Triangle Culturel, mais frequente et ferme environ un mois par an (souvent septembre). Udawalawe : elephants, surtout avec enfants ou peu de temps. Minneriya/Kaudulla : rassemblements saisonniers pres de Sigiriya verifiez le niveau d’eau avant de reserver. Wilpattu : leopards et ours plus au calme, drives plus longs en foret.\n\nLa plupart des circuits d’une semaine incluent sensement un ou deux parcs, pas quatre. Votre chauffeur guide peut les enchainer selon la saison, les temps de route et ce que vous avez deja vu ailleurs en Asie.',
      },
      {
        title: 'Ethique, saisons et observation responsable',
        body: 'Restez dans le jeep sauf regles contraires ; ne encouragez jamais les chauffeurs a poursuivre les animaux, bloquer leur passage ou harceler meres et petits. Flash et bruit stressent la faune jumelles et patience valent mieux que les gros plans.\n\nLa saison seche (environ mai to septembre dans les parcs du sud est, novembre to avril pour les baleines) concentre les animaux autour de l’eau. La mousson n’annule pas toujours les safaris mais rend les pistes boueuses et les felins moins actifs. Alignez le parc avec notre guide des saisons et reservez les jeeps via des operateurs serieux.',
      },
    ],
    faq: [
      {
        q: 'Quel parc est le meilleur pour voir des elephants ?',
        a: 'Udawalawe est le plus fiable toute l’annee ; Minneriya et Kaudulla sont spectaculaires d’environ juillet a octobre quand les troupeaux se regroupent au bord des reservoirs.',
      },
      {
        q: 'Peut on voir un leopard lors d’un seul safari a Yala ?',
        a: 'C’est possible, mais jamais garanti. Deux drives (matin et soir) sur deux jours consecutifs offrent de bien meilleures chances qu’une seule sortie precipitee.',
      },
      {
        q: 'Quand observer les baleines a Mirissa ?',
        a: 'Environ de novembre a avril, mer la plus calme le matin. Hors de cette fenetre, privilegiez les parcs ou la cote est plutot qu’une sortie en mer forcee.',
      },
      {
        q: 'Est il ethique de visiter des orphelinats d’elephants ?',
        a: 'Beaucoup de voyageurs preferent desormais les parcs sauvages. Si vous visitez un sanctuaire, renseignez vous sur les chaines, le montage ou les spectacles les bons centres n’en font pas.',
      },
      {
        q: 'Combien de parcs nationaux dans une semaine au Sri Lanka ?',
        a: 'Un ou deux arrets faune conviennent bien avec culture et montagnes par exemple Udawalawe plus baleines, ou Yala avec Minneriya si le Gathering coincide.',
      },
    ],
    ctaTitle: 'Integrez la faune a votre itineraire prive',
    ctaBody: 'Indiquez vos dates et priorites nous placerons les bons parcs, horaires de jeep et etapes de route dans un circuit avec chauffeur sans surcharger la semaine.',
    ctaLabel: 'Planifier un parcours faune',
    relatedTours: [
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
      { pageId: 'tour8', label: 'Circuit de 8 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parc national de Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guide safari au Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Meilleure periode pour le Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur prive' },
    ],
  },

  it: {
    h1: 'Guida alla fauna dello Sri Lanka: elefanti, leopardi, balene e dove osservarli',
    lead: 'Per un’isola grossomodo grande quanto l’Irlanda, lo Sri Lanka concentra una densita faunistica straordinaria elefanti asiatici in praterie aperte, leopardi nella foresta secca, balenottere al largo del sud e uccelli endemici in lembi di foresta pluviale. La chiave e abbinare specie, parco e stagione, senza voler vedere tutto in una mattina di corsa.',
    heroAlt: 'Elefanti selvatici al pascolo in un parco nazionale dello Sri Lanka',
    sections: [
      {
        title: 'Elefanti: l’incontro faunistico piu affidabile dell’isola',
        body: 'Lo Sri Lanka ospita una delle piu grandi popolazioni di elefanti asiatici della regione; in diversi parchi gli avvistamenti sono quasi scontati. Udawalawe, nella zona arida sud centrale, e la scelta piu sicura per le famiglie terreno aperto, grande branco residente e drive piu brevi di Yala spesso significano elefanti entro la prima ora.\n\nMinneriya e Kaudulla, vicino a Sigiriya, sono famosi per il “Gathering” da circa luglio a ottobre, quando centinaia di elefanti convergono sui bordi dei bacini in ritirata. E stagionale e dipende dall’acqua, ma quando le condizioni coincidono e uno dei grandi spettacoli naturali dell’Asia.',
      },
      {
        title: 'Leopardi: la star di Yala, l’alternativa piu tranquilla di Wilpattu',
        body: 'Il Blocco I di Yala ha una delle densita di leopardi piu alte al mondo impressionante finche non si ricorda che sono solitari, notturni e perfettamente mimetizzati. Un buon drive mattutino con tracker paziente offre probabilita ragionevoli; due uscite consecutive le migliorano nettamente. La folla, soprattutto nei weekend, puo rovinare l’esperienza partite presto e accettate che nulla e garantito.\n\nWilpattu, sulla costa nord occidentale, offre un ambiente piu boscoso e meno affollato con leopardi, orsi labiati e uccelli adatto a chi preferisce meno jeep alla massima densita.',
      },
      {
        title: 'Balene, delfini e fauna costiera',
        body: 'Mirissa e Kalpitiya sono le due basi principali per l’osservazione delle balene. Balenottere e capodogli compaiono al largo di Mirissa circa da novembre ad aprile; le barche partono presto, le mattine calme sono le migliori. Kalpitiya segue un calendario diverso delfini tutto l’anno e capodogli offshore e si combina bene con Wilpattu.\n\nLe tartarughe sulla costa sud sono piu educative che selvagge; se l’etica conta, preferite centri che rilasciano correttamente i piccoli ed evitano adulti in vasche espositive.',
      },
      {
        title: 'Uccelli e piccoli mammiferi che meritano una deviazione',
        body: 'Bundala, vicino a Hambantota, e una zona umida Ramsar per migratori, fenicotteri e coccodrilli ottimo per birdwatching, spesso trascurato nei tour standard. Sinharaja, foresta pluviale UNESCO, ospita molti uccelli endemici ed e meglio esplorata a piedi con guida locale che in jeep.\n\nParchi piu piccoli come Gal Oya (safari in barca) e Horton Plains (sambar e uccelli di montagna) premiano chi vuole varieta oltre l’asse Yala to Udawalawe.',
      },
      {
        title: 'Scegliere tra Yala, Udawalawe, Minneriya e Wilpattu',
        body: 'Yala: leopardi, habitat vario, combinabile col Triangolo Culturale, ma affollato e chiuso circa un mese l’anno (di solito settembre). Udawalawe: elefanti, ideale con bambini o poco tempo. Minneriya/Kaudulla: raduni stagionali vicino Sigiriya verificate il livello dell’acqua prima di prenotare. Wilpattu: leopardi e orsi piu tranquilli, drive piu lunghi in foresta.\n\nLa maggior parte dei tour settimanali include sensatamente uno o due parchi, non quattro. Il vostro autista guida puo sequenziarli per stagione, tempi di guida e cio che avete gia visto altrove in Asia.',
      },
      {
        title: 'Etica, stagioni e osservazione responsabile',
        body: 'Restate in jeep salvo regole diverse; non incoraggiate mai i conducenti a inseguire animali, bloccarne il passaggio o stressare madri con piccoli. Flash e rumore stressano la fauna binocolo e pazienza battono i primi piani.\n\nLa stagione secca (circa maggio to settembre nei parchi sud est, novembre to aprile per le balene) concentra gli animali intorno all’acqua. I monsoni raramente annullano i safari ma significano piste fangose e felini meno attivi. Allineate il parco alla nostra guida sulle stagioni e prenotate jeep tramite operatori affidabili.',
      },
    ],
    faq: [
      {
        q: 'Quale parco e migliore per vedere gli elefanti?',
        a: 'Udawalawe e il piu affidabile tutto l’anno; Minneriya e Kaudulla sono spettacolari da circa luglio a ottobre quando i branchi si radunano ai bordi dei bacini.',
      },
      {
        q: 'Si vede un leopardo con un solo safari a Yala?',
        a: 'Possibile, ma non garantito. Due drive (mattina e sera) in giorni consecutivi danno probabilita nettamente migliori di un giro affrettato.',
      },
      {
        q: 'Quando e la stagione delle balene a Mirissa?',
        a: 'Circa da novembre ad aprile, mare piu calmo al mattino. Fuori da questa finestra, meglio parchi o costa orientale che un’uscita in mare forzata.',
      },
      {
        q: 'E etico visitare orfanotrofi per elefanti?',
        a: 'Molti viaggiatori preferiscono ora i parchi selvaggi. Se visitate un santuario, informatevi su catene, cavalcature o spettacoli i centri seri non li praticano.',
      },
      {
        q: 'Quanti parchi nazionali in una settimana nello Sri Lanka?',
        a: 'Uno o due stop faunistici vanno bene con cultura e colline ad esempio Udawalawe piu balene, o Yala con Minneriya se il Gathering coincide.',
      },
    ],
    ctaTitle: 'Inserite la fauna nel vostro itinerario privato',
    ctaBody: 'Indicate date e priorita inseriremo i parchi giusti, orari jeep e tappe di guida in un tour con autista senza sovraccaricare la settimana.',
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
    h1: 'Guia de fauna de Sri Lanka: elefantes, leopardos, ballenas y donde verlos',
    lead: 'Para una isla del tamano aproximado de Irlanda, Sri Lanka concentra una densidad faunistica extraordinaria elefantes asiaticos en praderas abiertas, leopardos en bosque seco, rorcuales azules frente al sur y aves endemicas en fragmentos de selva. La clave es combinar especie, parque y temporada, sin intentar verlo todo en una manana apresurada.',
    heroAlt: 'Elefantes salvajes pastando en un parque nacional de Sri Lanka',
    sections: [
      {
        title: 'Elefantes: el encuentro faunistico mas fiable de la isla',
        body: 'Sri Lanka alberga una de las mayores poblaciones de elefantes asiaticos de la region; en varios parques los avistamientos son casi rutinarios. Udawalawe, en la zona seca sur central, es la opcion mas fiable para familias terreno abierto, gran manada residente y recorridos mas cortos que Yala suelen significar elefantes en la primera hora.\n\nMinneriya y Kaudulla, cerca de Sigiriya, son famosos por el «Gathering» de aproximadamente julio a octubre, cuando cientos de elefantes convergen en los bordes de los embalses en retirada. Es estacional y depende del agua, pero cuando las condiciones coinciden es uno de los grandes espectaculos naturales de Asia.',
      },
      {
        title: 'Leopardos: la estrella de Yala, la alternativa mas tranquila de Wilpattu',
        body: 'El bloque I de Yala tiene una de las densidades de leopardos mas altas del mundo impresionante hasta que recuerdas que son solitarios, nocturnos y perfectamente camuflados. Un buen drive matutino con rastreador paciente da probabilidades razonables; dos salidas consecutivas las mejoran notablemente. Las multitudes, sobre todo en fines de semana, pueden arruinar la experiencia salgan temprano y acepten que nada esta garantizado.\n\nWilpattu, en la costa noroeste, ofrece un entorno mas boscoso y menos congestionado con leopardos, osos labiados y aves ideal para quien prefiere menos jeeps a la maxima densidad.',
      },
      {
        title: 'Ballenas, delfines y fauna costera',
        body: 'Mirissa y Kalpitiya son las dos bases principales para avistamiento de ballenas. Rorcuales y cachalotes aparecen frente a Mirissa aproximadamente de noviembre a abril; los barcos salen temprano y las mananas calmadas son las mejores. Kalpitiya encaja en otro calendario delfines todo el ano y cachalotes en ventanas offshore y combina bien con Wilpattu.\n\nLas crias de tortugas en la costa sur son mas educativas que salvajes; si la etica importa, prefieran centros que sueltan correctamente a las crias y evitan adultos en estanques de exhibicion.',
      },
      {
        title: 'Aves y pequenos mamiferos que merecen un desvio',
        body: 'Bundala, cerca de Hambantota, es un humedal Ramsar para migratorios, flamencos y cocodrilos excelente para birding, a menudo ignorado en tours estandar. Sinharaja, selva tropical UNESCO, alberga muchas aves endemicas y se recorre mejor a pie con guia local que en jeep.\n\nParques mas pequenos como Gal Oya (safaris en barca) y Horton Plains (sambar y aves de montana) premian a quien busca variedad mas alla del eje Yala to Udawalawe.',
      },
      {
        title: 'Elegir entre Yala, Udawalawe, Minneriya y Wilpattu',
        body: 'Yala: leopardos, habitats variados, combinable con el Triangulo Cultural, pero concurrido y cerrado un mes al ano (normalmente septiembre). Udawalawe: elefantes, ideal con ninos o poco tiempo. Minneriya/Kaudulla: concentraciones estacionales cerca de Sigiriya comprueben el nivel de agua antes de reservar. Wilpattu: leopardos y osos mas tranquilos, drives mas largos en bosque.\n\nLa mayoria de tours de una semana incluyen sensatamente uno o dos parques, no cuatro. Su chofer guia puede ordenarlos segun temporada, tiempos de conduccion y lo que ya hayan visto en Asia.',
      },
      {
        title: 'Etica, temporadas y observacion responsable',
        body: 'Permanezcan en el jeep salvo reglas distintas; nunca animen a los conductores a perseguir animales, bloquear su paso o acosar madres con crias. Flash y ruido estresan la fauna prismaticos y paciencia superan los primeros planos.\n\nLa temporada seca (aprox. mayo to septiembre en parques del sureste, noviembre to abril para ballenas) concentra animales en el agua. La lluvia monzonica rara vez cancela safaris por completo pero implica pistas embarradas y felinos menos activos. Alineen el parque con nuestra guia de temporadas y reserven jeeps con operadores serios.',
      },
    ],
    faq: [
      {
        q: 'Que parque es mejor para ver elefantes?',
        a: 'Udawalawe es el mas fiable todo el ano; Minneriya y Kaudulla son espectaculares de aproximadamente julio a octubre cuando las manadas se agrupan en los bordes de los embalses.',
      },
      {
        q: 'Se puede ver un leopardo en un solo safari en Yala?',
        a: 'Es posible, pero no garantizado. Dos drives (manana y tarde) en dias consecutivos dan mucho mejores probabilidades que una vuelta apresurada.',
      },
      {
        q: 'Cuando es la temporada de ballenas en Mirissa?',
        a: 'Aproximadamente de noviembre a abril, con mar mas calmado por la manana. Fuera de esa ventana, mejor parques o costa este que forzar una salida en barco.',
      },
      {
        q: 'Es etico visitar orfanatos de elefantes?',
        a: 'Muchos viajeros prefieren ahora parques salvajes. Si visitan un santuario, investiguen cadenas, monta o espectaculos los centros serios no lo permiten.',
      },
      {
        q: 'Cuantos parques nacionales caben en una semana?',
        a: 'Uno o dos paradas faunisticas encajan bien con cultura y montanas por ejemplo Udawalawe mas ballenas, o Yala con Minneriya si coincide el Gathering.',
      },
    ],
    ctaTitle: 'Integre la fauna en su itinerario privado',
    ctaBody: 'Indiquenos fechas y prioridades encajaremos los parques, horarios de jeep y tramos de conduccion en un tour con chofer sin sobrecargar la semana.',
    ctaLabel: 'Planificar ruta faunistica',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour de 5 dias por Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
      { pageId: 'tour8', label: 'Tour de 8 dias por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parque Nacional de Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Guia de safari en Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Mejor epoca para visitar Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guia del chofer privado' },
    ],
  },

  pl: {
    h1: 'Przewodnik po dzikiej przyrodzie Sri Lanki: slonie, lamparty, wieloryby i gdzie je zobaczyc',
    lead: 'Jak na wyspe wielkosci Irlandii Sri Lanka ma niezwykla koncentracje fauny azjatyckie slonie na otwartych lakach, lamparty w suchym lesie, wieloryby u poludniowego wybrzeza i endemiczne ptaki w fragmentach lasu deszczowego. Kluczem jest dopasowanie gatunku, parku i sezonu, a nie proba zobaczenia wszystkiego w jeden pospieszny poranek.',
    heroAlt: 'Dzikie slonie pasace sie w parku narodowym na Sri Lance',
    sections: [
      {
        title: 'Slonie: najpewniejsze spotkanie z dzika natura wyspy',
        body: 'Sri Lanka ma jedna z najwiekszych populacji sloni azjatyckich w regionie; w kilku parkach obserwacje sa niemal rutynowe. Udawalawe w suchej strefie poludniowo centralnej to najpewniejszy wybor dla rodzin otwarty teren, duze stado i krotsze trasy niz w Yali czesto daja slonie w pierwszej godzinie.\n\nMinneriya i Kaudulla kolo Sigiriyi slyna z „Gathering” od okolo lipca do pazdziernika, gdy setki sloni schodza sie na brzegach opadajacych zbiornikow. To sezonowe i zalezne od wody, ale przy dobrych warunkach to jedno z wielkich widowisk natury w Azji.',
      },
      {
        title: 'Lamparty: gwiazda Yali, spokojniejsza alternatywa Wilpattu',
        body: 'Blok I Yali ma jedna z najwyzszych gestosci lampartow na swiecie imponujace, dopoki nie przypomnimy sobie, ze sa samotnicze, nocne i doskonale zamaskowane. Dobry poranny drive z cierpliwym trackerem daje rozsadne szanse; dwa kolejne wyjazdy je wyraznie poprawiaja. Tlumy, zwlaszcza w weekendy, psuja wrazenia zacznijcie wczesnie i zaakceptujcie brak gwarancji.\n\nWilpattu na polnocno zachodnim wybrzezu oferuje bardziej lesne, mniej zatloczone tereny z lampartami, niedzwiedziami wargowatymi i ptakami dla tych, ktorzy wola mniej jeepow niz maksymalna gestosc.',
      },
      {
        title: 'Wieloryby, delfiny i fauna wybrzeza',
        body: 'Mirissa i Kalpitiya to glowne bazy obserwacji wielorybow. Blekitne wieloryby i kaszaloty pojawiaja sie u Mirissy od listopada do kwietnia; lodzie wyplywaja wczesnie, spokojne ranki sa najlepsze. Kalpitiya ma inny kalendarz delfiny przez caly rok i kaszaloty offshore i dobrze laczy sie z Wilpattu.\n\nHodowle zolwi na poludniu sa raczej edukacyjne niz dzikie; jesli liczy sie etyka, wybierajcie osrodki z prawidlowym wypuszczaniem mlodych i bez doroslych w basenach wystawowych.',
      },
      {
        title: 'Ptaki i mniejsze ssaki warte objazdu',
        body: 'Bundala kolo Hambantoty to mokrada Ramsar dla ptakow przelotnych, flamingow i krokodyli swietne dla birderow, czesto pomijane w standardowych trasach. Sinharaja, las deszczowy UNESCO, ma wiele endemicznych ptakow i najlepiej zwiedza sie ja pieszo z lokalnym przewodnikiem niz z jeepa.\n\nMniejsze parki jak Gal Oya (safari lodzia) i Horton Plains (sambar i ptaki gorskie) nagradzaja tych, ktorzy chca wiecej niz os Yala to Udawalawe.',
      },
      {
        title: 'Yala, Udawalawe, Minneriya czy Wilpattu co wybrac?',
        body: 'Yala: lamparty, zroznicowane siedliska, dobrze z Trojkatem Kulturowym, ale tloczno i zamknieta okolo miesiaca rocznie (zwykle wrzesien). Udawalawe: slonie, idealnie z dziecmi lub mala iloscia czasu. Minneriya/Kaudulla: sezonowe zgromadzenia kolo Sigiriyi sprawdzcie poziom wody przed rezerwacja. Wilpattu: spokojniejsze lamparty i niedzwiedzie, dluzsze trasy w lesie.\n\nWiekszosc tygodniowych tras sensownie obejmuje jeden to dwa parki, nie cztery. Kierowca przewodnik ulozy je wedlug sezonu, czasu jazdy i tego, co widzieliscie juz gdzie indziej w Azji.',
      },
      {
        title: 'Etyka, sezony i odpowiedzialna obserwacja',
        body: 'Zostancie w jeepie, o ile regulamin nie stanowi inaczej; nie zachecajcie kierowcow do pogonii, blokowania drogi ani zaczepiania matek z mlodymi. Lampy blyskowe i halas stresuja zwierzeta lornetka i cierpliwosc sa lepsze od zblizen.\n\nSezon suchy (mniej wiecej maj to wrzesien na poludniowym wschodzie, listopad to kwiecien dla wielorybow) skupia zwierzeta przy wodzie. Monsun rzadko calkowicie odwoluje safari, ale oznacza blotniste drogi i mniej aktywne koty. Dopasujcie park do naszego przewodnika po sezonach i rezerwujcie jeepy u rzetelnych operatorow.',
      },
    ],
    faq: [
      {
        q: 'Ktory park jest najlepszy na slonie?',
        a: 'Udawalawe jest najpewniejsze przez caly rok; Minneriya i Kaudulla sa spektakularne od lipca do pazdziernika, gdy stada schodza sie na brzegach zbiornikow.',
      },
      {
        q: 'Czy widac lamparta podczas jednego safari w Yali?',
        a: 'Mozliwe, ale nie gwarantowane. Dwa wyjazdy (rano i wieczorem) w kolejnych dniach daja wyraznie lepsze szanse niz jedna pospieszna trasa.',
      },
      {
        q: 'Kiedy jest sezon wielorybow w Mirissie?',
        a: 'Od listopada do kwietnia, najspokojniejsza morze zwykle rano. Poza tym oknem lepiej parki lub wschodnie wybrzeze niz wymuszony rejs.',
      },
      {
        q: 'Czy sierocince sloni sa etyczne?',
        a: 'Wielu podroznych woli dzis parki dzikie. Jesli odwiedzacie schronisko, sprawdzcie lancuchy, jazde i pokazy rzetelne osrodki tego nie robia.',
      },
      {
        q: 'Ile parkow narodowych w tygodniu na Sri Lance?',
        a: 'Jeden to dwa przystanki przyrodnicze dobrze lacza sie z kultura i gorami np. Udawalawe plus wieloryby albo Yala z Minneriya, gdy Gathering sie zgadza.',
      },
    ],
    ctaTitle: 'Wlacz dzika przyrode do prywatnej trasy',
    ctaBody: 'Podajcie daty i priorytety dopasujemy parki, godziny jeepow i odcinki jazdy w tourze z kierowca bez przeladowania tygodnia.',
    ctaLabel: 'Zaplanuj trase przyrodnicza',
    relatedTours: [
      { pageId: 'tour5', label: '5 dniowa wycieczka po Sri Lance' },
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour8', label: '8 dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Park Narodowy Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Przewodnik safari po Sri Lance' },
      { pageId: 'guideBestTime', label: 'Najlepszy czas na Sri Lanke' },
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnym kierowcy' },
    ],
  },

  ru: {
    h1: 'Гид по дикой природе Шри Ланки: слоны, леопарды, киты и где их увидеть',
    lead: 'Для острова размером примерно с Ирландию Шри Ланка поражает плотностью фауны азиатские слоны на открытых лугах, леопарды в сухом лесу, синие киты у южного побережья и эндемичные птицы в клочках тропического леса. Главное сочетать вид, парк и сезон, а не пытаться увидеть всё за один спешный утренний выезд.',
    heroAlt: 'Дикие слоны на пастбище в национальном парке Шри Ланки',
    sections: [
      {
        title: 'Слоны: самая надёжная встреча с дикой природой острова',
        body: 'На Шри Ланке одна из крупнейших в регионе популяций азиатских слонов; в нескольких парках наблюдения почти гарантированы. Удавалаве в южно центральной сухой зоне самый надёжный выбор для семей: открытая местность, большое стадо и более короткие маршруты, чем в Яле, часто дают слонов уже в первый час.\n\nМиннерия и Каудулла у Сигирии знамениты «Gathering» примерно с июля по октябрь, когда сотни слонов сходятся к отступающим берегам водохранилищ. Это сезонно и зависит от воды, но при удачных условиях одно из великих природных зрелищ Азии.',
      },
      {
        title: 'Леопарды: звезда Ялы, более спокойная альтернатива Вилпатту',
        body: 'Блок I Ялы имеет одну из самых высоких плотностей леопардов в мире впечатляет, пока не вспомнишь, что они одиночны, ночны и идеально замаскированы. Хороший утренний drive с терпеливым трекером даёт разумные шансы; два выезда подряд заметно их улучшают. Толпы, особенно в выходные, портят впечатление выезжайте рано и принимайте отсутствие гарантий.\n\nВилпатту на северо западном побережье предлагает более лесистую, менее перегруженную среду со леопардами, медведями губачами и птицами для тех, кто предпочитает меньше джипов, а не максимальную плотность.',
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
        body: 'Яла: леопарды, разнообразные ландшафты, удобно с Культурным треугольником, но многолюдно и закрыта примерно месяц в год (обычно сентябрь). Удавалаве: слоны, идеально с детьми или малым временем. Миннерия/Каудулла: сезонные скопления у Сигирии проверьте уровень воды перед бронированием. Вилпатту: более спокойные леопарды и медведи, более длинные лесные маршруты.\n\nБольшинство недельных маршрутов разумно включает один–два парка, не четыре. Водитель гид выстроит их по сезону, времени в пути и тому, что вы уже видели в Азии.',
      },
      {
        title: 'Этика, сезоны и ответственное наблюдение',
        body: 'Оставайтесь в джипе, если правила не разрешают иное; не поощряйте погоню, перекрытие пути или преследование матерей с детёнышами. Вспышки и шум стрессируют животных бинокль и терпение лучше крупных планов.\n\nСухой сезон (примерно май–сентябрь на юго востоке, ноябрь–апрель для китов) концентрирует животных у воды. Муссон редко отменяет сафари полностью, но означает грязные дороги и менее активных кошек. Согласуйте парк с нашим гидом по сезонам и бронируйте джипы у проверенных операторов.',
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
      { pageId: 'tour5', label: '5 дневный тур по Шри Ланке' },
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
      { pageId: 'tour8', label: '8 дневный тур по Шри Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Национальный парк Яла' },
      { pageId: 'destSigiriya', label: 'Сигирия' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Гид по сафари на Шри Ланке' },
      { pageId: 'guideBestTime', label: 'Лучшее время для Шри Ланки' },
      { pageId: 'guidePrivateDriver', label: 'Гид по частному водителю' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Tierwelt Ratgeber: Elefanten, Leoparden, Wale und wo man sie sieht',
    lead: 'Fur eine Insel etwa so gross wie Irland birgt Sri Lanka eine aussergewohnliche Wildtierdichte asiatische Elefanten in offenen Graslandschaften, Leoparden im Trockenwald, Blauwale vor der Sudkuste und endemische Vogel in Regenwaldinseln. Entscheidend ist, Art und Saison passend zu wahlen, statt alles in einem hetzigen Vormittag sehen zu wollen.',
    heroAlt: 'Freilebende Elefanten in einem srilankischen Nationalpark',
    sections: [
      {
        title: 'Elefanten: die verlasslichste Wildtierbegegnung der Insel',
        body: 'Sri Lanka beherbergt eine der grossten Asiatischen Elefanten Populationen der Region; in mehreren Parks sind Sichtungen fast Routine. Udawalawe im sudzentralen Trockengebiet ist fur Familien am zuverlassigsten offenes Gelande, grosse Herde und kurzere Fahrten als in Yala bedeuten oft Elefanten schon in der ersten Stunde.\n\nMinneriya und Kaudulla nahe Sigiriya sind beruhmt fur das „Gathering“ von etwa Juli bis Oktober, wenn Hunderte Elefanten an den zuruckweichenden Tankufern zusammenkommen. Es ist wetterabhangig, aber bei passenden Bedingungen eines der grossen Naturereignisse Asiens.',
      },
      {
        title: 'Leoparden: Yalas Star, Wilpattus ruhigere Alternative',
        body: 'Yala Block I hat eine der weltweit hochsten Leoparden Dichten beeindruckend, bis man bedenkt, dass Leoparden Einzelganger, nachtaktiv und perfekt getarnt sind. Eine gute Morgenfahrt mit geduldigem Tracker gibt dennoch vernunftige Chancen; zwei aufeinanderfolgende Drives verbessern sie deutlich. Andrang an Wochenenden mindert das Erlebnis fruh starten und akzeptieren, dass nichts garantiert ist.\n\nWilpattu an der Nordwestkuste bietet waldigeres, weniger uberfulltes Terrain mit Leoparden, Lippenbaren und Vogelwelt ideal, wer weniger Jeeps als maximale Dichte bevorzugt.',
      },
      {
        title: 'Wale, Delfine und Kustenfauna',
        body: 'Mirissa und Kalpitiya sind die Hauptbasen fur Walbeobachtung. Blau und Pottwale erscheinen vor Mirissa etwa von November bis April; Boote fahren fruh, ruhige Morgen sind am besten. Kalpitiya passt zu einem anderen Kalender Delfine ganzjahrig, Pottwale in bestimmten Offshore Fenstern und kombiniert sich gut mit Wilpattu.\n\nSchildkroten Aufzuchtstationen an der Sudkuste sind eher Bildung als Wildnis; wer Ethik wichtig findet, bevorzugt Zentren mit ordentlicher Auswilderung und ohne adulte Tiere in Schauaquarien.',
      },
      {
        title: 'Vogel und kleinere Saugetiere, die Umwege lohnen',
        body: 'Bundala nahe Hambantota ist ein Ramsar Feuchtgebiet fur Zugvogel, Flamingos und Salzwasserkrokodile hervorragend fur Birding, oft ubersehen auf Standardrundreisen. Sinharaja, UNESCO Regenwald, birgt viele endemische Vogel und lohnt sich am besten zu Fuss mit lokalem Guide statt aus dem Jeep.\n\nKleinere Parks wie Gal Oya (Bootssafaris) und Horton Plains (Sambar und Hochlandvogel) belohnen Reisende, die mehr als die Yala to Udawalawe Achse wollen.',
      },
      {
        title: 'Yala, Udawalawe, Minneriya oder Wilpattu was passt?',
        body: 'Yala: Leoparden, abwechslungsreiches Habitat, gut mit Kulturdreieck kombinierbar, aber voll und etwa einen Monat jahrlich geschlossen (meist September). Udawalawe: Elefanten, ideal mit Kindern oder wenig Zeit. Minneriya/Kaudulla: saisonale Versammlungen nahe Sigiriya Wasserstand vor Buchung prufen. Wilpattu: ruhigeres Leopard und Barenland mit langeren Waldfahrten.\n\nDie meisten Wochenrundreisen schaffen sinnvoll ein bis zwei Parks, nicht vier. Ihr Fahrer Guide ordnet nach Saison, Fahrzeit und dem, was Sie in Asien schon gesehen haben.',
      },
      {
        title: 'Ethik, Jahreszeiten und verantwortungsvolles Beobachten',
        body: 'Im Jeep bleiben, sofern Parkregeln nichts anderes erlauben; Fahrer nie zum Jagen, Blockieren oder Bedrangen von Muttertieren mit Kalbern ermutigen. Blitzlicht und Larm stressen Tiere Fernglas und Geduld schlagen Close ups.\n\nTrockenzeit (etwa Mai to September in Sudostparks, November to April fur Wale) konzentriert Tiere an Wasser. Monsunregen stoppt Safaris selten ganz, bedeutet aber matschige Pisten und weniger aktive Katzen. Parkwahl mit unserem Beste Reisezeit Ratgeber abstimmen und Jeeps uber seriose Anbieter buchen.',
      },
    ],
    faq: [
      {
        q: 'Welcher Park ist am besten fur Elefanten?',
        a: 'Udawalawe ist ganzjahrig am verlasslichsten; Minneriya und Kaudulla sind von etwa Juli bis Oktober spektakular, wenn Herden an den Tankufern zusammenkommen.',
      },
      {
        q: 'Sieht man Leoparden bei einer einzigen Yala Safari?',
        a: 'Moglich, aber nicht garantiert. Zwei Drives (Morgen und Abend) an aufeinanderfolgenden Tagen geben deutlich bessere Chancen als eine hetzte Runde.',
      },
      {
        q: 'Wann ist Walbeobachtungssaison in Mirissa?',
        a: 'Etwa November bis April, ruhigste See meist am Morgen. Ausserhalb dieses Fensters lieber Parks oder die Ostkuste statt einer erzwungenen Bootsfahrt.',
      },
      {
        q: 'Sind Elefanten Waisenhauser ethisch vertretbar?',
        a: 'Viele Reisende bevorzugen heute Wildparks. Wer ein Sanctuary besucht, sollte prufen, ob Tiere gefesselt, geritten oder fur Shows genutzt werden seriose Zentren tun das nicht.',
      },
      {
        q: 'Wie viele Nationalparks passen in eine Woche?',
        a: 'Ein bis zwei Wildtierstopps neben Kultur und Bergen z. B. Udawalawe plus Walbeobachtung oder Yala mit Minneriya, wenn das Gathering passt.',
      },
    ],
    ctaTitle: 'Wildtierbeobachtung in Ihre private Route einbauen',
    ctaBody: 'Nennen Sie uns Reisedaten und Prioritaten wir ordnen die passenden Parks, Jeepzeiten und Fahrtetappen in eine Rundreise mit Chauffeur ein, ohne die Woche zu uberladen.',
    ctaLabel: 'Wildtier Route planen',
    relatedTours: [
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala Nationalpark' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Sri Lanka Safari Ratgeber' },
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer Ratgeber' },
    ],
  }
};
