import type { ArticleContent } from '../articles/types';

/**
 * Best time to visit Sri Lanka guide (pageId: guideBestTime).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const BEST_TIME_GUIDE: ArticleContent = {
  en: {
    h1: 'Best Time to Visit Sri Lanka: A Month by Month Guide',
    lead: 'Sri Lanka has two monsoons hitting opposite coasts at different times of year, which means there is almost always a dry, sunny region somewhere on the island the real skill is matching your itinerary to the season, not finding a single "best" month.',
    heroImage: 'assets/img/mainpage/1.webp',
    heroAlt: 'Sunny beach and palm trees on the Sri Lankan coast',
    sections: [
      {
        id: 'twoMonsoons',
        title: 'Why Sri Lanka has two dry seasons, not one',
        body: 'The Yala monsoon brings rain to the southwest coast and hill country roughly from May to September, while the Maha monsoon brings rain to the north east and Cultural Triangle roughly from October to January. This means the west and south coasts, the hill country and the Cultural Triangle rarely have their wet season at the same time.\n\nFor a single region beach holiday this matters enormously; for a multi day round tour that moves between regions, it matters less, since your itinerary can be built around whichever areas are driest during your travel dates.',
      },
      {
        id: 'decToMarch',
        title: 'December to March: peak season for the west and south',
        body: 'This is the driest, sunniest window for Colombo, the southwest beaches (Bentota, Mirissa, Unawatuna), Galle and the hill country, and consequently the busiest and most expensive time to travel. Whale watching off Mirissa also peaks in this window.\n\nBook accommodation and any scenic train seats well ahead if travelling in this period, particularly around Christmas, New Year and the Sinhala and Tamil New Year in April.',
      },
      {
        id: 'aprToSep',
        title: 'April to September: the east coast’s turn',
        body: 'As the southwest monsoon arrives, the east coast around Trincomalee and Arugam Bay dries out and becomes the better beach choice, while surfers in particular favour Arugam Bay’s waves from around April to October.\n\nThis period also brings excellent conditions for Cultural Triangle sightseeing (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), since that region sits largely outside both monsoon belts and stays comfortably dry.',
      },
      {
        id: 'wildlifeTiming',
        title: 'Timing wildlife and safari trips',
        body: 'Yala National Park is generally best from May to September, when the dry season concentrates animals around remaining waterholes; the park also closes for about a month, usually in September, for habitat management. Minneriya and Kaudulla’s elephant "gathering" peaks from July to October.\n\nWhale watching from Mirissa runs roughly November to April, overlapping neatly with the south coast’s dry season.',
      },
      {
        id: 'festivalTiming',
        title: 'Festivals worth timing a trip around',
        body: 'Kandy’s Esala Perahera, one of Asia’s great religious processions, runs for ten nights in July or August on the lunar calendar; book accommodation months ahead if this is a priority. The Sinhala and Tamil New Year in mid April is a major national holiday with widespread closures, worth planning around rather than through.\n\nVesak Poya in May, marking the Buddha’s birth, enlightenment and death, brings citywide lantern displays and free food stalls (dansal) that are worth experiencing if your dates align.',
      },
      {
        id: 'shoulderSeasons',
        title: 'The case for shoulder season travel',
        body: 'Late April to early June and September to early November sit between the two monsoon peaks and often deliver a good mix of manageable rain, lower prices and thinner crowds at major sites like Sigiriya and the Temple of the Tooth. Short, intense afternoon showers rather than day long rain are typical in these windows.\n\nA private driver guide who can adjust the day’s plan around weather in real time is particularly valuable in shoulder season, when conditions can change from region to region within the same week.',
      },
    ],
    faq: [
      {
        q: 'What is the single best month to visit Sri Lanka?',
        a: 'There isn’t onet depends entirely on which regions you plan to visit. February is a reasonably safe all round choice since it falls in the dry season for both the west/south coast and the Cultural Triangle, but a well planned itinerary can work in almost any month.',
      },
      {
        q: 'When is the rainy season in Sri Lanka?',
        a: 'The southwest monsoon runs roughly May to September and affects the west coast, south coast and hill country; the north east monsoon runs roughly October to January and affects the east coast and parts of the Cultural Triangle. The two rarely overlap.',
      },
      {
        q: 'Is Sri Lanka worth visiting in the off season?',
        a: 'Yes, especially for value and smaller crowdsn in the tropics is usually a heavy afternoon shower rather than an all day washout, and a flexible, private driver itinerary can route around the wettest regions on any given date.',
      },
      {
        q: 'When should I book a Yala safari for the best chance of sightings?',
        a: 'May to September generally gives the best odds, as the dry season concentrates wildlife around fewer waterholes. The park closes for roughly a month each year, usually in September, for habitat management.',
      },
      {
        q: 'What is the weather in Sri Lanka like?',
        a: 'It depends which coast you visit. Two monsoons mean the west and south are typically driest December to March, while the east is often better April to September. The Cultural Triangle is visitable most of the year. See our August guide if you are travelling in UK school summer holidays.',
      },
      {
        q: 'Is Sri Lanka in August a good idea?',
        a: 'Yes for the Cultural Triangle, Kandy (Perahera timing permitting) and the east coast. It is a weaker month for Galle, Mirissa and Hiriketiya beach weather because of the southwest monsoon.',
      },
      {
        q: 'Does Sri Lanka have a hurricane or cyclone season?',
        a: 'Sri Lanka sits south of the main cyclone belt and is rarely hit directly, though monsoon depressions can bring heavy, sustained rain, particularly to the east coast around November.',
      },
    ],
    ctaTitle: 'Let us build your itinerary around the weather',
    ctaBody: 'Our private, chauffeur driven tours are planned month by month around Sri Lanka’s two monsoons, routing you toward whichever regions are driest on your travel dates.',
    ctaLabel: 'Plan your trip by season',
    relatedTours: [
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala National Park' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Sri Lanka Wildlife Guide' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packing Guide' },
      { pageId: 'monthAugust', label: 'Sri Lanka in August' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
  },

  de: {
    h1: 'Beste Reisezeit Sri Lanka: Wetter und Monat fur Monat',
    lead: 'Wetter sri lanka und sri lanka reisezeit: zwei Monsune treffen gegensatzliche Kusten. Fast immer ist irgendwo Sonne. Die Kunst ist die Route, nicht ein einziger bester Monat.',
    heroAlt: 'Sonniger Strand mit Palmen an der srilankischen Kuste',
    sections: [
      {
        title: 'Warum Sri Lanka zwei Trockenzeiten hat, nicht nur eine',
        body: 'Der Yala Monsun bringt der Sudwestkuste und dem Bergland etwa von Mai bis September Regen, wahrend der Maha Monsun dem Nordosten und dem Kulturdreieck etwa von Oktober bis Januar Regen bringt. Das bedeutet, dass Westkuste, Sudkuste, Bergland und Kulturdreieck selten gleichzeitig Regenzeit haben.\n\nFur einen Strandurlaub in einer einzigen Region ist das enorm wichtig; fur eine mehrtagige Rundreise durch verschiedene Regionen weniger, da sich die Route um die jeweils trockensten Gebiete wahrend Ihrer Reisedaten herum planen lasst.',
      },
      {
        title: 'Dezember bis Marz: Hochsaison fur Westen und Suden',
        body: 'Dies ist das trockenste, sonnigste Fenster fur Colombo, die Sudwestkuste Strande (Bentota, Mirissa, Unawatuna), Galle und das Bergland  und damit die geschaftigste und teuerste Reisezeit. Auch die Walbeobachtung vor Mirissa erreicht in diesem Zeitraum ihren Hohepunkt.\n\nBuchen Sie Unterkunfte und Platze im malerischen Zug rechtzeitig, wenn Sie in diesem Zeitraum reisen, besonders rund um Weihnachten, Neujahr und das singhalesisch tamilische Neujahr im April.',
      },
      {
        title: 'April bis September: die Ostkuste kommt zum Zug',
        body: 'Wenn der Sudwestmonsun eintrifft, trocknet die Ostkuste rund um Trincomalee und Arugam Bay ab und wird zur besseren Strandwahl; Surfer bevorzugen besonders die Wellen von Arugam Bay etwa von April bis Oktober.\n\nDiese Zeit bietet auch ausgezeichnete Bedingungen fur Besichtigungen im Kulturdreieck (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), da diese Region weitgehend ausserhalb beider Monsungurtel liegt und angenehm trocken bleibt.',
      },
      {
        title: 'Timing fur Wildtier und Safari Reisen',
        body: 'Der Yala Nationalpark ist allgemein von Mai bis September am besten, wenn die Trockenzeit Tiere um verbleibende Wasserlocher konzentriert; der Park schliesst ausserdem etwa einen Monat, meist im September, fur die Habitatpflege. Das Elefanten-„Gathering“ in Minneriya und Kaudulla erreicht von Juli bis Oktober seinen Hohepunkt.\n\nDie Walbeobachtung von Mirissa lauft etwa von November bis April und uberlappt sich genau mit der Trockenzeit der Sudkuste.',
      },
      {
        title: 'Festivals, um die sich eine Reise lohnt',
        body: 'Kandys Esala Perahera, eine der grossen religiosen Prozessionen Asiens, dauert zehn Nachte im Juli oder August nach dem Mondkalender; buchen Sie Unterkunfte Monate im Voraus, wenn dies fur Sie wichtig ist. Das singhalesisch tamilische Neujahr Mitte April ist ein bedeutender nationaler Feiertag mit weitverbreiteten Schliessungen  planen Sie eher darum als hindurch.\n\nVesak Poya im Mai, das Geburt, Erleuchtung und Tod Buddhas markiert, bringt landesweite Laternenschauspiele und kostenlose Essensstande (Dansal), die eine Erfahrung wert sind, wenn Ihre Termine passen.',
      },
      {
        title: 'Warum sich die Zwischensaison lohnt',
        body: 'Ende April bis Anfang Juni und September bis Anfang November liegen zwischen den beiden Monsunhohepunkten und bieten oft eine gute Mischung aus uberschaubarem Regen, niedrigeren Preisen und weniger Andrang an grossen Sehenswurdigkeiten wie Sigiriya und dem Zahntempel. Kurze, intensive Nachmittagsschauer statt tagelangem Regen sind in diesen Zeitraumen typisch.\n\nEin privater Fahrer Guide, der den Tagesplan in Echtzeit ans Wetter anpassen kann, ist in der Zwischensaison besonders wertvoll, wenn sich die Bedingungen innerhalb derselben Woche von Region zu Region andern konnen.',
      },
    ],
    faq: [
      {
        q: 'Was ist der eine beste Monat, um Sri Lanka zu besuchen?',
        a: 'Es gibt keinen  es hangt ganz davon ab, welche Regionen Sie besuchen mochten. Februar ist eine relativ sichere Rundum Wahl, da er sowohl fur die West-/Sudkuste als auch fur das Kulturdreieck in die Trockenzeit fallt, aber eine gut geplante Route funktioniert in fast jedem Monat.',
      },
      {
        q: 'Wann ist die Regenzeit in Sri Lanka?',
        a: 'Sri lanka regenzeit: Sudwestmonsun etwa Mai bis September (West, Sud, Bergland); Nordostmonsun etwa Oktober bis Januar (Ostkuste). Beide uberlappen sich selten.',
      },
      {
        q: 'Wie ist sri lanka wetter november und dezember?',
        a: 'Sri lanka wetter november: Sud und Westkuste werden oft trockener. Sri lanka wetter dezember ist Hochsaison dort. Die Ostkuste kann nasser sein. Eine Rundreise wechselt die Kuste.',
      },
      {
        q: 'Was ist die beste reisezeit sri lanka rundreise?',
        a: 'Beste reisezeit sri lanka rundreise: Dezember bis Marz fur Klassiker plus Baden im Suden; Mai bis September oft Ostkuste und Kulturdreieck. Wir legen die Route auf Ihre Daten.',
      },
      {
        q: 'Lohnt sich Sri Lanka in der Nebensaison?',
        a: 'Ja, besonders preislich und wegen weniger Andrang  Regen in den Tropen ist meist ein kraftiger Nachmittagsschauer, kein Regentag durchgehend, und eine flexible Route mit privatem Fahrer kann die feuchtesten Regionen an jedem Tag umgehen.',
      },
      {
        q: 'Wann sollte ich eine Yala Safari fur die besten Sichtungschancen buchen?',
        a: 'Mai bis September bietet allgemein die besten Chancen, da die Trockenzeit Wildtiere um weniger Wasserlocher konzentriert. Der Park schliesst jedes Jahr fur etwa einen Monat, meist im September, wegen Habitatpflege.',
      },
      {
        q: 'Gibt es in Sri Lanka eine Hurrikan- oder Zyklonsaison?',
        a: 'Sri Lanka liegt sudlich des Hauptzyklongurtels und wird selten direkt getroffen, obwohl Monsuntiefs vor allem der Ostkuste um November starken, anhaltenden Regen bringen konnen.',
      },
    ],
    ctaTitle: 'Lassen Sie uns Ihre Route ums Wetter herum planen',
    ctaBody: 'Unsere privaten Rundreisen mit Fahrer werden monatsgenau um Sri Lankas zwei Monsune geplant und fuhren Sie zu den Regionen, die an Ihren Reisedaten am trockensten sind.',
    ctaLabel: 'Reise nach Saison planen',
    relatedTours: [
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala Nationalpark' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt Ratgeber' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste Ratgeber' },
      { pageId: 'monthAugust', label: 'Sri Lanka im August' },
      { pageId: 'marketGermany', label: 'Rundreise aus Deutschland' },
    ],
  },

  fr: {
    h1: 'Quand partir au Sri Lanka : meteo, saisons et meilleure periode',
    lead: 'Le Sri Lanka connait deux moussons qui touchent des cotes opposees a des periodes differentes de l’annee, ce qui signifie qu’il y a presque toujours une region seche et ensoleillee quelque part sur l’ilessentiel est d’adapter son itineraire a la saison plutot que de chercher un seul « meilleur » mois.',
    heroAlt: 'Plage ensoleillee bordee de palmiers sur la cote du Sri Lanka',
    sections: [
      {
        title: 'Pourquoi le Sri Lanka a deux saisons seches, pas une',
        body: 'La mousson de Yala apporte la pluie a la cote sud ouest et aux hautes terres environ de mai a septembre, tandis que la mousson de Maha apporte la pluie au nord est et au Triangle Culturel environ d’octobre a janvier. Cela signifie que la cote ouest, la cote sud, les hautes terres et le Triangle Culturel connaissent rarement leur saison des pluies simultanement.\n\nPour des vacances a la plage dans une seule region, cela compte enormement ; pour un circuit de plusieurs jours entre differentes regions, cela compte moins, car l’itineraire peut s’organiser autour des zones les plus seches a vos dates de voyage.',
      },
      {
        title: 'Decembre a mars : haute saison pour l’ouest et le sud',
        body: 'C’est la periode la plus seche et la plus ensoleillee pour Colombo, les plages du sud ouest (Bentota, Mirissa, Unawatuna), Galle et les hautes terres, et donc la periode la plus frequentee et la plus chere pour voyager. L’observation des baleines depuis Mirissa atteint aussi son pic durant cette fenetre.\n\nReservez hebergements et places de train panoramique bien a l’avance si vous voyagez durant cette periode, en particulier autour de Noel, du Nouvel An et du Nouvel An cinghalais et tamoul en avril.',
      },
      {
        title: 'Avril a septembre : le tour de la cote est',
        body: 'A l’arrivee de la mousson du sud ouest, la cote est autour de Trincomalee et d’Arugam Bay s’asseche et devient le meilleur choix balneaire, les surfeurs privilegiant particulierement les vagues d’Arugam Bay d’environ avril a octobre.\n\nCette periode offre aussi d’excellentes conditions pour visiter le Triangle Culturel (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), cette region se trouvant largement hors des deux ceintures de mousson et restant agreablement seche.',
      },
      {
        title: 'Programmer les sorties safari et faune',
        body: 'Le parc national de Yala est generalement meilleur de mai a septembre, quand la saison seche concentre les animaux autour des points d’eau restants ; le parc ferme aussi environ un mois, generalement en septembre, pour la gestion de l’habitat. Le « rassemblement » d’elephants a Minneriya et Kaudulla atteint son pic de juillet a octobre.\n\nL’observation des baleines depuis Mirissa se deroule environ de novembre a avril, se superposant idealement a la saison seche de la cote sud.',
      },
      {
        title: 'Des festivals qui meritent qu’on organise un voyage autour',
        body: 'L’Esala Perahera de Kandy, l’une des grandes processions religieuses d’Asie, dure dix nuits en juillet ou aout selon le calendrier lunaire ; reservez un hebergement des mois a l’avance si c’est une priorite. Le Nouvel An cinghalais et tamoul a la mi avril est une fete nationale majeure avec de nombreuses fermeturesieux vaut organiser son voyage autour que pendant.\n\nVesak Poya en mai, marquant la naissance, l’eveil et la mort du Bouddha, apporte des lanternes dans toute la ville et des stands de nourriture gratuite (dansal) qui meritent d’etre vecus si vos dates coincident.',
      },
      {
        title: 'Pourquoi voyager en intersaison',
        body: 'Fin avril a debut juin et septembre a debut novembre se situent entre les deux pics de mousson et offrent souvent un bon compromis entre pluie maitrisable, prix plus bas et foules plus clairsemees sur les grands sites comme Sigiriya et le temple de la Dent. De courtes averses intenses l’apres midi, plutot qu’une pluie continue toute la journee, sont typiques de ces periodes.\n\nUn chauffeur guide prive capable d’ajuster le programme du jour en fonction de la meteo en temps reel est particulierement precieux en intersaison, ou les conditions peuvent changer de region a region au sein d’une meme semaine.',
      },
    ],
    faq: [
      {
        q: 'Quel est le meilleur mois unique pour visiter le Sri Lanka ?',
        a: 'Il n’y en a pasout depend des regions que vous prevoyez de visiter. Fevrier est un choix globalement sur, car il tombe en saison seche a la fois pour la cote ouest/sud et le Triangle Culturel, mais un itineraire bien concu peut fonctionner presque tous les mois.',
      },
      {
        q: 'Quand est la saison des pluies au Sri Lanka ?',
        a: 'La mousson du sud ouest dure environ de mai a septembre et touche la cote ouest, la cote sud et les hautes terres ; la mousson du nord est dure environ d’octobre a janvier et touche la cote est et certaines parties du Triangle Culturel. Les deux se superposent rarement.',
      },
      {
        q: 'Le Sri Lanka vaut il le voyage en basse saison ?',
        a: 'Oui, surtout pour le rapport qualite prix et des foules plus reduites la pluie tropicale est generalement une forte averse d’apres midi plutot qu’une journee entiere sous la pluie, et un itineraire flexible avec chauffeur prive peut contourner les regions les plus humides a n’importe quelle date.',
      },
      {
        q: 'Quand reserver un safari a Yala pour les meilleures chances d’observation ?',
        a: 'Mai a septembre offre generalement les meilleures chances, la saison seche concentrant la faune autour de moins de points d’eau. Le parc ferme environ un mois chaque annee, generalement en septembre, pour la gestion de l’habitat.',
      },
      {
        q: 'Le Sri Lanka connait il une saison des ouragans ou cyclones ?',
        a: 'Le Sri Lanka se trouve au sud de la principale ceinture cyclonique et est rarement touche directement, bien que des depressions de mousson puissent apporter des pluies fortes et soutenues, notamment sur la cote est vers novembre.',
      },
      {
        q: 'Quand partir au Sri Lanka et quand aller ?',
        a: 'Quand partir sri lanka, quand partir au sri lanka, sri lanka quand partir et quand aller au sri lanka : sud et ouest de decembre a mars ; est souvent de mai a septembre. Meteo sri lanka / sri lanka meteo selon la cote, pas un seul mois.',
      },
    ],
    ctaTitle: 'Laissez nous organiser votre itineraire autour de la meteo',
    ctaBody: 'Nos circuits prives avec chauffeur sont planifies mois par mois en fonction des deux moussons du Sri Lanka, vous orientant vers les regions les plus seches a vos dates de voyage.',
    ctaLabel: 'Planifier votre voyage par saison',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Parc national de Yala' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Guide de la faune du Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guide des bagages pour le Sri Lanka' },
      { pageId: 'monthAugust', label: 'Sri Lanka en aout' },
      { pageId: 'marketFrance', label: 'Voyage depuis la France' },
    ],
  },

  it: {
    h1: 'Quando andare in Sri Lanka: meteo, periodo migliore e mesi',
    lead: 'Lo Sri Lanka ha due monsoni che colpiscono coste opposte in periodi diversi dell’anno, il che significa che c’e quasi sempre una regione secca e soleggiata da qualche parte sull’isola l’abilita vera sta nell’adattare l’itinerario alla stagione, non nel trovare un singolo mese “migliore”.',
    heroAlt: 'Spiaggia soleggiata con palme sulla costa dello Sri Lanka',
    sections: [
      {
        title: 'Perche lo Sri Lanka ha due stagioni secche, non una',
        body: 'Il monsone di Yala porta pioggia alla costa sud occidentale e all’entroterra collinare circa da maggio a settembre, mentre il monsone di Maha porta pioggia al nord est e al Triangolo Culturale circa da ottobre a gennaio. Cio significa che costa ovest, costa sud, entroterra collinare e Triangolo Culturale raramente hanno la stagione delle piogge nello stesso periodo.\n\nPer una vacanza al mare in una sola regione questo conta moltissimo; per un tour di piu giorni che si sposta tra le regioni conta meno, poiche l’itinerario puo essere costruito attorno alle aree piu secche nelle date del vostro viaggio.',
      },
      {
        title: 'Da dicembre a marzo: alta stagione per ovest e sud',
        body: 'Questo e il periodo piu secco e soleggiato per Colombo, le spiagge sud occidentali (Bentota, Mirissa, Unawatuna), Galle e l’entroterra collinare, e quindi il periodo piu affollato e costoso per viaggiare. Anche l’osservazione delle balene al largo di Mirissa raggiunge il picco in questo periodo.\n\nPrenotate alloggio e posti sul treno panoramico con largo anticipo se viaggiate in questo periodo, in particolare intorno a Natale, Capodanno e il Capodanno singalese e tamil di aprile.',
      },
      {
        title: 'Da aprile a settembre: il turno della costa orientale',
        body: 'Con l’arrivo del monsone sud occidentale, la costa orientale intorno a Trincomalee e Arugam Bay si asciuga e diventa la scelta migliore per il mare, mentre i surfisti preferiscono in particolare le onde di Arugam Bay da circa aprile a ottobre.\n\nQuesto periodo offre anche ottime condizioni per visitare il Triangolo Culturale (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), poiche questa regione si trova in gran parte fuori da entrambe le fasce monsoniche e resta comodamente secca.',
      },
      {
        title: 'Pianificare i viaggi di fauna e safari',
        body: 'Il parco nazionale di Yala e generalmente migliore da maggio a settembre, quando la stagione secca concentra gli animali intorno ai punti d’acqua rimanenti; il parco chiude anche per circa un mese, di solito a settembre, per la gestione dell’habitat. Il “raduno” degli elefanti a Minneriya e Kaudulla raggiunge il picco da luglio a ottobre.\n\nL’osservazione delle balene da Mirissa si svolge circa da novembre ad aprile, sovrapponendosi perfettamente alla stagione secca della costa sud.',
      },
      {
        title: 'Festival attorno ai quali vale la pena pianificare un viaggio',
        body: 'L’Esala Perahera di Kandy, una delle grandi processioni religiose dell’Asia, dura dieci notti a luglio o agosto secondo il calendario lunare; prenotate l’alloggio con mesi di anticipo se questo e una priorita. Il Capodanno singalese e tamil a meta aprile e una festivita nazionale importante con chiusure diffuse meglio pianificare un viaggio attorno che durante.\n\nVesak Poya a maggio, che segna la nascita, l’illuminazione e la morte del Buddha, porta lanterne in tutta la citta e bancarelle di cibo gratuito (dansal) che vale la pena vivere se le date coincidono.',
      },
      {
        title: 'Perche viaggiare in bassa stagione intermedia',
        body: 'Da fine aprile a inizio giugno e da settembre a inizio novembre si trovano tra i due picchi monsonici e spesso offrono un buon equilibrio tra pioggia gestibile, prezzi piu bassi e minore folla nei siti principali come Sigiriya e il Tempio del Dente. Brevi e intensi temporali pomeridiani, piuttosto che pioggia per tutto il giorno, sono tipici in questi periodi.\n\nUn autista guida privato in grado di adattare il programma della giornata al meteo in tempo reale e particolarmente utile nella bassa stagione intermedia, quando le condizioni possono cambiare da regione a regione nella stessa settimana.',
      },
    ],
    faq: [
      {
        q: 'Qual e il singolo mese migliore per visitare lo Sri Lanka?',
        a: 'Non ce n’e uno dipende interamente da quali regioni intendete visitare. Febbraio e una scelta ragionevolmente sicura per tutto il paese, poiche cade nella stagione secca sia per la costa ovest/sud che per il Triangolo Culturale, ma un itinerario ben pianificato puo funzionare quasi in ogni mese.',
      },
      {
        q: 'Quando e la stagione delle piogge in Sri Lanka?',
        a: 'Il monsone sud occidentale dura circa da maggio a settembre e colpisce la costa ovest, la costa sud e l’entroterra collinare; il monsone nord orientale dura circa da ottobre a gennaio e colpisce la costa orientale e parti del Triangolo Culturale. I due raramente si sovrappongono.',
      },
      {
        q: 'Vale la pena visitare lo Sri Lanka in bassa stagione?',
        a: 'Si, specialmente per il rapporto qualita prezzo e folle piu ridotte la pioggia tropicale e di solito un forte temporale pomeridiano piuttosto che una giornata intera di pioggia, e un itinerario flessibile con autista privato puo evitare le regioni piu piovose in qualsiasi data.',
      },
      {
        q: 'Quando prenotare un safari a Yala per le migliori probabilita di avvistamento?',
        a: 'Maggio settembre offre generalmente le migliori probabilita, poiche la stagione secca concentra la fauna intorno a meno punti d’acqua. Il parco chiude circa un mese ogni anno, di solito a settembre, per la gestione dell’habitat.',
      },
      {
        q: 'Lo Sri Lanka ha una stagione di uragani o cicloni?',
        a: 'Lo Sri Lanka si trova a sud della principale fascia dei cicloni ed e raramente colpito direttamente, sebbene le depressioni monsoniche possano portare piogge forti e prolungate, in particolare sulla costa orientale intorno a novembre.',
      },
    ],
    ctaTitle: 'Lasciate che pianifichiamo il vostro itinerario in base al meteo',
    ctaBody: 'I nostri tour privati con autista sono pianificati mese per mese in base ai due monsoni dello Sri Lanka, indirizzandovi verso le regioni piu secche nelle vostre date di viaggio.',
    ctaLabel: 'Pianifica il tuo viaggio per stagione',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Parco nazionale di Yala' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Guida alla fauna dello Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guida ai bagagli per lo Sri Lanka' },
      { pageId: 'monthAugust', label: 'Sri Lanka ad agosto' },
      { pageId: 'marketItaly', label: 'Viaggio dall’Italia' },
    ],
  },

  es: {
    h1: 'Mejor epoca para viajar a Sri Lanka: tiempo, monzones y mes a mes',
    lead: 'Sri Lanka tiene dos monzones que afectan a costas opuestas en distintos momentos del ano, lo que significa que casi siempre hay una region seca y soleada en algun lugar de la isla: la habilidad real esta en ajustar el itinerario a la temporada, no en buscar un unico mes «mejor».',
    heroAlt: 'Playa soleada con palmeras en la costa de Sri Lanka',
    sections: [
      {
        title: 'Por que Sri Lanka tiene dos temporadas secas, no una',
        body: 'El monzon de Yala trae lluvias a la costa suroeste y las tierras altas aproximadamente de mayo a septiembre, mientras que el monzon de Maha trae lluvias al noreste y al Triangulo Cultural aproximadamente de octubre a enero. Esto significa que la costa oeste, la costa sur, las tierras altas y el Triangulo Cultural rara vez tienen su temporada de lluvias al mismo tiempo.\n\nPara unas vacaciones de playa en una sola region esto importa enormemente; para un recorrido de varios dias que se mueve entre regiones importa menos, ya que el itinerario puede disenarse en torno a las zonas mas secas en sus fechas de viaje.',
      },
      {
        title: 'De diciembre a marzo: temporada alta para el oeste y el sur',
        body: 'Esta es la ventana mas seca y soleada para Colombo, las playas del suroeste (Bentota, Mirissa, Unawatuna), Galle y las tierras altas, y por tanto la epoca mas concurrida y cara para viajar. El avistamiento de ballenas frente a Mirissa tambien alcanza su punto maximo en este periodo.\n\nReserve alojamiento y asientos en el tren panoramico con bastante antelacion si viaja en este periodo, especialmente en torno a Navidad, Ano Nuevo y el Ano Nuevo cingales y tamil de abril.',
      },
      {
        title: 'De abril a septiembre: el turno de la costa este',
        body: 'A medida que llega el monzon del suroeste, la costa este alrededor de Trincomalee y Arugam Bay se seca y se convierte en la mejor opcion de playa, mientras que los surfistas prefieren especialmente las olas de Arugam Bay entre abril y octubre aproximadamente.\n\nEste periodo tambien ofrece excelentes condiciones para visitar el Triangulo Cultural (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), ya que esta region queda en gran parte fuera de ambos cinturones monzonicos y se mantiene agradablemente seca.',
      },
      {
        title: 'Como planificar los viajes de fauna y safari',
        body: 'El Parque Nacional de Yala suele ser mejor de mayo a septiembre, cuando la temporada seca concentra a los animales alrededor de las charcas restantes; el parque tambien cierra unas cuatro semanas, normalmente en septiembre, para la gestion del habitat. La «concentracion» de elefantes en Minneriya y Kaudulla alcanza su punto maximo de julio a octubre.\n\nEl avistamiento de ballenas desde Mirissa se desarrolla aproximadamente de noviembre a abril, coincidiendo perfectamente con la temporada seca de la costa sur.',
      },
      {
        title: 'Festivales que merecen planificar un viaje alrededor',
        body: 'El Esala Perahera de Kandy, una de las grandes procesiones religiosas de Asia, dura diez noches en julio o agosto segun el calendario lunar; reserve alojamiento con meses de antelacion si esto es una prioridad. El Ano Nuevo cingales y tamil a mediados de abril es una festividad nacional importante con muchos cierres, mejor planificar el viaje alrededor que durante.\n\nVesak Poya en mayo, que conmemora el nacimiento, la iluminacion y la muerte de Buda, trae exhibiciones de faroles por toda la ciudad y puestos de comida gratuita (dansal) que merece la pena vivir si sus fechas coinciden.',
      },
      {
        title: 'El argumento a favor de viajar en temporada media',
        body: 'De finales de abril a principios de junio y de septiembre a principios de noviembre se situan entre los dos picos monzonicos y a menudo ofrecen una buena combinacion de lluvia manejable, precios mas bajos y menos aglomeraciones en lugares importantes como Sigiriya y el Templo del Diente. Chubascos cortos e intensos por la tarde, en lugar de lluvia durante todo el dia, son tipicos en estos periodos.\n\nUn chofer guia privado que pueda ajustar el plan del dia segun el clima en tiempo real resulta especialmente valioso en temporada media, cuando las condiciones pueden cambiar de una region a otra en la misma semana.',
      },
    ],
    faq: [
      {
        q: 'Cual es el unico mejor mes para visitar Sri Lanka?',
        a: 'No existe uno: depende totalmente de que regiones planee visitar. Febrero es una opcion razonablemente segura en general, ya que cae en temporada seca tanto para la costa oeste/sur como para el Triangulo Cultural, pero un itinerario bien planificado puede funcionar casi cualquier mes.',
      },
      {
        q: 'Cuando es la temporada de lluvias en Sri Lanka?',
        a: 'El monzon del suroeste dura aproximadamente de mayo a septiembre y afecta a la costa oeste, la costa sur y las tierras altas; el monzon del noreste dura aproximadamente de octubre a enero y afecta a la costa este y partes del Triangulo Cultural. Ambos rara vez se superponen.',
      },
      {
        q: 'Merece la pena visitar Sri Lanka en temporada baja?',
        a: 'Si, especialmente por el valor y las menores aglomeraciones: la lluvia tropical suele ser un fuerte chubasco de tarde en lugar de un dia entero encapotado, y un itinerario flexible con chofer privado puede evitar las regiones mas lluviosas en cualquier fecha.',
      },
      {
        q: 'Cuando deberia reservar un safari en Yala para tener mas posibilidades de avistamientos?',
        a: 'De mayo a septiembre suele ofrecer las mejores probabilidades, ya que la temporada seca concentra la fauna alrededor de menos charcas. El parque cierra alrededor de un mes cada ano, normalmente en septiembre, para la gestion del habitat.',
      },
      {
        q: 'Tiene Sri Lanka temporada de huracanes o ciclones?',
        a: 'Sri Lanka se encuentra al sur del principal cinturon de ciclones y rara vez se ve afectada directamente, aunque las depresiones monzonicas pueden traer lluvias intensas y prolongadas, especialmente en la costa este alrededor de noviembre.',
      },
      {
        q: 'Cual es la mejor epoca para viajar a Sri Lanka?',
        a: 'Mejor epoca para viajar a sri lanka: sur y oeste de diciembre a marzo; este a menudo de mayo a septiembre. Tiempo sri lanka, tiempo en sri lanka y sri lanka weather segun la costa, no un solo mes.',
      },
    ],
    ctaTitle: 'Dejenos organizar su itinerario segun el clima',
    ctaBody: 'Nuestros tours privados con chofer se planifican mes a mes segun los dos monzones de Sri Lanka, dirigiendole hacia las regiones mas secas en sus fechas de viaje.',
    ctaLabel: 'Planifique su viaje por temporada',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
      { pageId: 'tour5', label: 'Tour de 5 dias por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Parque Nacional de Yala' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Guia de fauna de Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guia de equipaje para Sri Lanka' },
      { pageId: 'monthAugust', label: 'Sri Lanka en agosto' },
      { pageId: 'marketSpain', label: 'Viajar desde Espana' },
    ],
  },

  pl: {
    h1: 'Pogoda Sri Lanka i kiedy jechac: pory deszczowe i miesiace',
    lead: 'Sri Lanka ma dwa monsuny uderzajace w przeciwne wybrzeza w roznych porach roku, co oznacza, ze na wyspie zawsze gdzies jest sucho i slonecznie  prawdziwa sztuka polega na dopasowaniu trasy do sezonu, a nie na szukaniu jednego „najlepszego” miesiaca.',
    heroAlt: 'Sloneczna plaza z palmami na wybrzezu Sri Lanki',
    sections: [
      {
        title: 'Czemu Sri Lanka ma dwa sezony suche, nie jeden',
        body: 'Monsun Yala przynosi deszcz na poludniowo zachodnie wybrzeze i w gory od maja do wrzesnia, a monsun Maha przynosi deszcz na polnocny wschod i do Trojkata Kulturowego od pazdziernika do stycznia. To oznacza, ze wybrzeze zachodnie, poludniowe, gory i Trojkat Kulturowy rzadko maja sezon deszczowy w tym samym czasie.\n\nDla urlopu plazowego w jednym regionie ma to olbrzymie znaczenie; dla wielodniowej trasy miedzy regionami znaczenie mniejsze, bo plan mozna zbudowac wokol najbardziej suchych obszarow w danym terminie.',
      },
      {
        title: 'Grudzien–marzec: szczyt sezonu dla zachodu i poludnia',
        body: 'To najsuchszy, najbardziej sloneczny okres dla Colombo, plaz poludniowo zachodnich (Bentota, Mirissa, Unawatuna), Galle i gorzystego interioru, a wiec tez najbardziej zatloczony i najdrozszy czas na podroz. Obserwacja wielorybow przy Mirissie rowniez szczytuje w tym okresie.\n\nZarezerwuj zakwaterowanie i miejsca w widokowym pociagu z wyprzedzeniem, jesli podrozujesz w tym czasie, szczegolnie wokol Bozego Narodzenia, Nowego Roku i syngalesko tamilskiego Nowego Roku w kwietniu.',
      },
      {
        title: 'Kwiecien–wrzesien: kolej na wschodnie wybrzeze',
        body: 'Gdy przychodzi monsun poludniowo zachodni, wschodnie wybrzeze wokol Trinkomali i Arugam Bay wysycha i staje sie lepszym wyborem plazowym, a surferzy szczegolnie cenia fale w Arugam Bay od okolo kwietnia do pazdziernika.\n\nTen okres to tez doskonale warunki na zwiedzanie Trojkata Kulturowego (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), gdyz ten region lezy w duzej mierze poza obydwoma pasami monsunowymi i pozostaje wygodnie suchy.',
      },
      {
        title: 'Planowanie wyjazdow safari i obserwacji dzikiej przyrody',
        body: 'Park Narodowy Yala jest zwykle najlepszy od maja do wrzesnia, gdy sezon suchy skupia zwierzeta wokol pozostalych wodopojow; park zamyka sie tez na okolo miesiac, zwykle w wrzesniu, na potrzeby zarzadzania siedliskiem. „Zbiorka” sloni w Minneriya i Kaudulli szczytuje od lipca do pazdziernika.\n\nObserwacja wielorybow z Mirissy trwa od listopada do kwietnia, dokladnie pokrywajac sie z sezonem suchym poludniowego wybrzeza.',
      },
      {
        title: 'Festiwale, wokol ktorych warto zaplanowac podroz',
        body: 'Esala Perahera w Kandy, jedna z wielkich religijnych procesji Azji, trwa dziesiec nocy w lipcu lub sierpniu wedlug kalendarza ksiezycowego; zarezerwuj nocleg z miesiecznym wyprzedzeniem, jesli to dla Ciebie priorytet. Syngalesko tamilski Nowy Rok w polowie kwietnia to wazne swieto narodowe z licznymi zamknieciami  lepiej zaplanowac podroz wokol niego, niz w jego trakcie.\n\nVesak Poya w maju, obchodzone na pamiatke narodzin, oswiecenia i smierci Buddy, przynosi ogolnomiejskie wystawy lampionow i darmowe stragany z jedzeniem (dansal), warte przezycia, jesli terminy sie zgadzaja.',
      },
      {
        title: 'Argumenty za podroza w sezonie przejsciowym',
        body: 'Koniec kwietnia do poczatku czerwca oraz wrzesien do poczatku listopada leza miedzy dwoma szczytami monsunowymi i czesto daja dobra mieszanke umiarkowanego deszczu, nizszych cen i mniejszych tlumow w glownych miejscach jak Sigiriya i Swiatynia Zeba. Krotkie, intensywne popoludniowe burze, a nie calodniowy deszcz, sa typowe w tych okresach.\n\nPrywatny kierowca przewodnik, ktory moze w czasie rzeczywistym dostosowac plan dnia do pogody, jest szczegolnie wartosciowy w sezonie przejsciowym, gdy warunki moga zmieniac sie z regionu na region w ciagu tego samego tygodnia.',
      },
    ],
    faq: [
      {
        q: 'Jaki jest jeden najlepszy miesiac na wizyte na Sri Lance?',
        a: 'Nie ma takiego  zalezy w calosci od tego, jakie regiony planujesz odwiedzic. Luty jest rozsadnie bezpiecznym uniwersalnym wyborem, bo przypada w sezon suchy zarowno dla wybrzeza zachodniego/poludniowego, jak i Trojkata Kulturowego, ale dobrze zaplanowana trasa moze dzialac w prawie kazdym miesiacu.',
      },
      {
        q: 'Kiedy jest sezon deszczowy na Sri Lance?',
        a: 'Monsun poludniowo zachodni trwa od maja do wrzesnia i dotyczy wybrzeza zachodniego, poludniowego i gorskiego interioru; monsun polnocno wschodni trwa od pazdziernika do stycznia i dotyczy wschodniego wybrzeza oraz czesci Trojkata Kulturowego. Rzadko sie nakladaja.',
      },
      {
        q: 'Czy warto jechac na Sri Lanke w sezonie niskim?',
        a: 'Tak, szczegolnie dla wartosci i mniejszych tlumow  deszcz w tropikach to zwykle intensywna popoludniowa ulewa, a nie calodniowa niepogoda, a elastyczna trasa z prywatnym kierowca pozwala obchodzic najbardziej mokre regiony w danym terminie.',
      },
      {
        q: 'Kiedy zarezerwowac safari w Yali dla najlepszych szans na obserwacje?',
        a: 'Maj to wrzesien zwykle daje najlepsze szanse, bo sezon suchy skupia dzika przyrode wokol mniejszej liczby wodopojow. Park zamyka sie na okolo miesiac rocznie, zwykle w wrzesniu, w celu zarzadzania siedliskiem.',
      },
      {
        q: 'Czy Sri Lanka ma sezon huraganow lub cyklonow?',
        a: 'Sri Lanka lezy na poludnie od glownego pasa cyklonowego i rzadko jest bezposrednio dotykana, choc nize monsunowe moga przyniesc silne, dlugotrwale deszcze, szczegolnie na wschodnim wybrzezu wokol listopada.',
      },
    ],
    ctaTitle: 'Zaplanujemy Twoja trase wokol pogody',
    ctaBody: 'Nasze prywatne wycieczki z kierowca sa planowane miesiac po miesiacu wokol dwoch monsunow Sri Lanki, prowadzac Cie do regionow najbardziej suchych w Twoich terminach podrozy.',
    ctaLabel: 'Zaplanuj podroz wedlug sezonu',
    relatedTours: [
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour5', label: '5 dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Park Narodowy Yala' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Przewodnik po dzikiej przyrodzie Sri Lanki' },
      { pageId: 'guidePacking', label: 'Przewodnik pakowania na Sri Lanke' },
      { pageId: 'monthAugust', label: 'Sri Lanka w sierpniu' },
      { pageId: 'marketPoland', label: 'Wakacje z Polski' },
    ],
  },

  ru: {
    h1: 'Сезон шри ланка: погода, когда лучше ехать, лето и июль',
    lead: 'Шри ланка погода и погода шри ланка это два муссона на разных берегах. Сезон шри ланка / шри ланка сезон / сезон отдыха: почти всегда где то сухо. Шри ланка когда сезон и шри ланка когда лучше ехать зависят от пляжа, который вы хотите.',
    heroAlt: 'Солнечный пляж с пальмами на побережье Шри Ланки',
    sections: [
      {
        title: 'Почему в Шри Ланке два сухих сезона, а не один',
        body: 'Шри ланка сезон дождей это не один календарь на весь остров. Муссон Яла мочит юго запад и холмы примерно с мая по сентябрь; муссон Маха северо восток примерно с октября по январь. Запад, юг, горы и культурный треугольник редко мокнут одновременно.\n\nДля пляжа в одном регионе это важно; для многодневного тура шри ланка меньше, потому что маршрут можно вести по сухому берегу ваших дат.',
      },
      {
        title: 'С декабря по март: высокий сезон для запада и юга',
        body: 'Это самый сухой и солнечный период для Коломбо, пляжей юго запада (Бентота, Мирисса, Унавату), Галле и горной местности, а значит, и самое многолюдное и дорогое время для путешествий. Наблюдение за китами у Мириссы также достигает пика в этот период.\n\nБронируйте жильё и места в живописном поезде заранее, если путешествуете в этот период, особенно вокруг Рождества, Нового года и сингальско тамильского Нового года в апреле.',
      },
      {
        title: 'С апреля по сентябрь: черёд восточного побережья',
        body: 'Когда приходит юго западный муссон, восточное побережье вокруг Тринкомали и Аругам Бей высыхает и становится лучшим вариантом для пляжа, а сёрферы особенно ценят волны Аругам Бей примерно с апреля по октябрь.\n\nЭтот период также даёт отличные условия для осмотра Культурного треугольника (Сигирия, Дамбулла, Полоннарува, Анурадхапура), поскольку этот регион в основном находится за пределами обоих муссонных поясов и остаётся комфортно сухим.',
      },
      {
        title: 'Планирование поездок для наблюдения за дикой природой и сафари',
        body: 'Национальный парк Яла обычно лучше всего посещать с мая по сентябрь, когда сухой сезон концентрирует животных вокруг оставшихся водопоев; парк также закрывается примерно на месяц, обычно в сентябре, для управления местообитаниями. «Сбор» слонов в Миннерии и Каудулле достигает пика с июля по октябрь.\n\nНаблюдение за китами из Мириссы проходит примерно с ноября по апрель, точно совпадая с сухим сезоном южного побережья.',
      },
      {
        title: 'Фестивали, вокруг которых стоит спланировать поездку',
        body: 'Эсала Перахера в Канди, одна из великих религиозных процессий Азии, длится десять ночей в июле или августе по лунному календарю; бронируйте жильё за несколько месяцев, если это важно для вас. Сингальско тамильский Новый год в середине апреля крупный национальный праздник с массовыми закрытиями, лучше планировать поездку вокруг него, а не во время него.\n\nВесак Пойя в мае, отмечающий рождение, просветление и смерть Будды, приносит городские выставки фонарей и бесплатные пункты еды (дансал), которые стоит увидеть, если ваши даты совпадают.',
      },
      {
        title: 'В пользу путешествия в межсезонье',
        body: 'Конец апреля  начало июня и сентябрь  начало ноября находятся между двумя пиками муссонов и часто дают хорошее сочетание умеренного дождя, более низких цен и меньших толп в главных местах, таких как Сигирия и Храм Зуба. Короткие, интенсивные послеполуденные ливни, а не дождь весь день, типичны в эти периоды.\n\nЧастный водитель гид, способный подстраивать план дня под погоду в реальном времени, особенно ценен в межсезонье, когда условия могут меняться от региона к региону в течение одной недели.',
      },
    ],
    faq: [
      {
        q: 'Какой единственный лучший месяц для поездки в Шри Ланку?',
        a: 'Такого нет. Шри ланка когда лучше ехать зависит от региона. Февраль часто универсален для запада, юга и культуры; шри ланка летом и шри ланка в июле лучше на востоке плюс сафари, не южный пляж.',
      },
      {
        q: 'Когда сезон дождей в Шри Ланке?',
        a: 'Шри ланка сезон дождей: юго запад примерно май–сентябрь; северо восток примерно октябрь–январь. Они редко полностью совпадают. Сезон на шри ланке для купания это сухое окно выбранного берега.',
      },
      {
        q: 'Стоит ли ехать в Шри Ланку в низкий сезон?',
        a: 'Да, особенно из за выгодных цен и меньшего числа туристов тропический дождь обычно означает сильный послеполуденный ливень, а не дождь весь день, а гибкий маршрут с частным водителем позволяет обходить самые дождливые регионы в любую дату.',
      },
      {
        q: 'Когда бронировать сафари в Яле для лучших шансов на наблюдения?',
        a: 'Май–сентябрь обычно дают лучшие шансы, поскольку сухой сезон концентрирует животных вокруг меньшего числа водопоев. Парк закрывается примерно на месяц ежегодно, обычно в сентябре, для управления местообитаниями.',
      },
      {
        q: 'Есть ли в Шри Ланке сезон ураганов или циклонов?',
        a: 'Шри Ланка находится южнее основного циклонового пояса и редко подвергается прямому удару, хотя муссонные депрессии могут приносить сильные, продолжительные дожди, особенно на восточное побережье около ноября.',
      },
      {
        q: 'Какая шри ланка погода сейчас для планирования тура?',
        a: 'Погода шри ланка на карте не одна цифра. Назовите месяц: мы ставим пляж туда, где сезон отдыха реально сухой, а культуру и сафари оставляем в маршруте.',
      },
    ],
    ctaTitle: 'Позвольте нам спланировать маршрут с учётом погоды',
    ctaBody: 'Наши частные туры с водителем планируются месяц за месяцем с учётом двух муссонов Шри Ланки, направляя вас в те регионы, которые будут самыми сухими в ваши даты поездки.',
    ctaLabel: 'Спланировать поездку по сезону',
    relatedTours: [
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
      { pageId: 'tour5', label: '5 дневный тур по Шри Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Сигирия' },
      { pageId: 'destElla', label: 'Элла' },
      { pageId: 'destYala', label: 'Национальный парк Яла' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Гид по дикой природе Шри Ланки' },
      { pageId: 'guidePacking', label: 'Гид по упаковке вещей для Шри Ланки' },
      { pageId: 'monthAugust', label: 'Шри Ланка в августе' },
      { pageId: 'marketRussia', label: 'Туры из России' },
    ],
  },
  nl: {
    h1: 'Beste tijd sri lanka: weer, seizoen en wanneer gaan',
    lead: 'Sri lanka weer hangt van de kust af. Twee moessons, dus bijna altijd ergens droog. Beste tijd sri lanka is de droge fase van de kust die u wilt, niet een enkele beste maand.',
    heroAlt: 'Sonniger Strand mit Palmen an der srilankischen Kuste',
    sections: [
      {
        title: 'Warum Sri Lanka zwei Trockenzeiten hat, nicht nur eine',
        body: 'Der Yala Monsun bringt der Sudwestkuste und dem Bergland etwa von Mai bis September Regen, wahrend der Maha Monsun dem Nordosten und dem Kulturdreieck etwa von Oktober bis Januar Regen bringt. Das bedeutet, dass Westkuste, Sudkuste, Bergland und Kulturdreieck selten gleichzeitig Regenzeit haben.\n\nFur einen Strandurlaub in einer einzigen Region ist das enorm wichtig; fur eine mehrtagige Rundreise durch verschiedene Regionen weniger, da sich die Route um die jeweils trockensten Gebiete wahrend Ihrer Reisedaten herum planen lasst.',
      },
      {
        title: 'Dezember bis Marz: Hochsaison fur Westen und Suden',
        body: 'Dies ist das trockenste, sonnigste Fenster fur Colombo, die Sudwestkuste Strande (Bentota, Mirissa, Unawatuna), Galle und das Bergland  und damit die geschaftigste und teuerste Reisezeit. Auch die Walbeobachtung vor Mirissa erreicht in diesem Zeitraum ihren Hohepunkt.\n\nBuchen Sie Unterkunfte und Platze im malerischen Zug rechtzeitig, wenn Sie in diesem Zeitraum reisen, besonders rund um Weihnachten, Neujahr und das singhalesisch tamilische Neujahr im April.',
      },
      {
        title: 'April bis September: die Ostkuste kommt zum Zug',
        body: 'Wenn der Sudwestmonsun eintrifft, trocknet die Ostkuste rund um Trincomalee und Arugam Bay ab und wird zur besseren Strandwahl; Surfer bevorzugen besonders die Wellen von Arugam Bay etwa von April bis Oktober.\n\nDiese Zeit bietet auch ausgezeichnete Bedingungen fur Besichtigungen im Kulturdreieck (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), da diese Region weitgehend ausserhalb beider Monsungurtel liegt und angenehm trocken bleibt.',
      },
      {
        title: 'Timing fur Wildtier und Safari Reisen',
        body: 'Der Yala Nationalpark ist allgemein von Mai bis September am besten, wenn die Trockenzeit Tiere um verbleibende Wasserlocher konzentriert; der Park schliesst ausserdem etwa einen Monat, meist im September, fur die Habitatpflege. Das Elefanten-„Gathering“ in Minneriya und Kaudulla erreicht von Juli bis Oktober seinen Hohepunkt.\n\nDie Walbeobachtung von Mirissa lauft etwa von November bis April und uberlappt sich genau mit der Trockenzeit der Sudkuste.',
      },
      {
        title: 'Festivals, um die sich eine Reise lohnt',
        body: 'Kandys Esala Perahera, eine der grossen religiosen Prozessionen Asiens, dauert zehn Nachte im Juli oder August nach dem Mondkalender; buchen Sie Unterkunfte Monate im Voraus, wenn dies fur Sie wichtig ist. Das singhalesisch tamilische Neujahr Mitte April ist ein bedeutender nationaler Feiertag mit weitverbreiteten Schliessungen  planen Sie eher darum als hindurch.\n\nVesak Poya im Mai, das Geburt, Erleuchtung und Tod Buddhas markiert, bringt landesweite Laternenschauspiele und kostenlose Essensstande (Dansal), die eine Erfahrung wert sind, wenn Ihre Termine passen.',
      },
      {
        title: 'Warum sich die Zwischensaison lohnt',
        body: 'Ende April bis Anfang Juni und September bis Anfang November liegen zwischen den beiden Monsunhohepunkten und bieten oft eine gute Mischung aus uberschaubarem Regen, niedrigeren Preisen und weniger Andrang an grossen Sehenswurdigkeiten wie Sigiriya und dem Zahntempel. Kurze, intensive Nachmittagsschauer statt tagelangem Regen sind in diesen Zeitraumen typisch.\n\nEin privater Fahrer Guide, der den Tagesplan in Echtzeit ans Wetter anpassen kann, ist in der Zwischensaison besonders wertvoll, wenn sich die Bedingungen innerhalb derselben Woche von Region zu Region andern konnen.',
      },
    ],
    faq: [
      {
        q: 'Was ist der eine beste Monat, um Sri Lanka zu besuchen?',
        a: 'Es gibt keinen  es hangt ganz davon ab, welche Regionen Sie besuchen mochten. Februar ist eine relativ sichere Rundum Wahl, da er sowohl fur die West-/Sudkuste als auch fur das Kulturdreieck in die Trockenzeit fallt, aber eine gut geplante Route funktioniert in fast jedem Monat.',
      },
      {
        q: 'Wann ist die Regenzeit in Sri Lanka?',
        a: 'Sri lanka regenzeit: Sudwestmonsun etwa Mai bis September (West, Sud, Bergland); Nordostmonsun etwa Oktober bis Januar (Ostkuste). Beide uberlappen sich selten.',
      },
      {
        q: 'Wie ist sri lanka wetter november und dezember?',
        a: 'Sri lanka wetter november: Sud und Westkuste werden oft trockener. Sri lanka wetter dezember ist Hochsaison dort. Die Ostkuste kann nasser sein. Eine Rundreise wechselt die Kuste.',
      },
      {
        q: 'Was ist die beste reisezeit sri lanka rundreise?',
        a: 'Beste reisezeit sri lanka rundreise: Dezember bis Marz fur Klassiker plus Baden im Suden; Mai bis September oft Ostkuste und Kulturdreieck. Wir legen die Route auf Ihre Daten.',
      },
      {
        q: 'Lohnt sich Sri Lanka in der Nebensaison?',
        a: 'Ja, besonders preislich und wegen weniger Andrang  Regen in den Tropen ist meist ein kraftiger Nachmittagsschauer, kein Regentag durchgehend, und eine flexible Route mit privatem Fahrer kann die feuchtesten Regionen an jedem Tag umgehen.',
      },
      {
        q: 'Wann sollte ich eine Yala Safari fur die besten Sichtungschancen buchen?',
        a: 'Mai bis September bietet allgemein die besten Chancen, da die Trockenzeit Wildtiere um weniger Wasserlocher konzentriert. Der Park schliesst jedes Jahr fur etwa einen Monat, meist im September, wegen Habitatpflege.',
      },
      {
        q: 'Gibt es in Sri Lanka eine Hurrikan- oder Zyklonsaison?',
        a: 'Sri Lanka liegt sudlich des Hauptzyklongurtels und wird selten direkt getroffen, obwohl Monsuntiefs vor allem der Ostkuste um November starken, anhaltenden Regen bringen konnen.',
      },
    ],
    ctaTitle: 'Lassen Sie uns Ihre Route ums Wetter herum planen',
    ctaBody: 'Unsere privaten Rundreisen mit Fahrer werden monatsgenau um Sri Lankas zwei Monsune geplant und fuhren Sie zu den Regionen, die an Ihren Reisedaten am trockensten sind.',
    ctaLabel: 'Reise nach Saison planen',
    relatedTours: [
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala Nationalpark' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt Ratgeber' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste Ratgeber' },
    ],
  }
};
