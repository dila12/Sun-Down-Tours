import type { ArticleContent } from '../articles/types';

/**
 * Best time to visit Sri Lanka guide (pageId: guideBestTime).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const BEST_TIME_GUIDE: ArticleContent = {
  en: {
    h1: 'Best Time to Visit Sri Lanka: A Month-by-Month Guide',
    lead: 'Sri Lanka has two monsoons hitting opposite coasts at different times of year, which means there is almost always a dry, sunny region somewhere on the island the real skill is matching your itinerary to the season, not finding a single "best" month.',
    heroImage: 'assets/img/mainpage/1.webp',
    heroAlt: 'Sunny beach and palm trees on the Sri Lankan coast',
    sections: [
      {
        id: 'twoMonsoons',
        title: 'Why Sri Lanka has two dry seasons, not one',
        body: 'The Yala monsoon brings rain to the south-west coast and hill country roughly from May to September, while the Maha monsoon brings rain to the north-east and Cultural Triangle roughly from October to January. This means the west and south coasts, the hill country and the Cultural Triangle rarely have their wet season at the same time.\n\nFor a single-region beach holiday this matters enormously; for a multi-day round tour that moves between regions, it matters less, since your itinerary can be built around whichever areas are driest during your travel dates.',
      },
      {
        id: 'decToMarch',
        title: 'December to March: peak season for the west and south',
        body: 'This is the driest, sunniest window for Colombo, the south-west beaches (Bentota, Mirissa, Unawatuna), Galle and the hill country, and consequently the busiest and most expensive time to travel. Whale watching off Mirissa also peaks in this window.\n\nBook accommodation and any scenic-train seats well ahead if travelling in this period, particularly around Christmas, New Year and the Sinhala and Tamil New Year in April.',
      },
      {
        id: 'aprToSep',
        title: 'April to September: the east coast’s turn',
        body: 'As the south-west monsoon arrives, the east coast around Trincomalee and Arugam Bay dries out and becomes the better beach choice, while surfers in particular favour Arugam Bay’s waves from around April to October.\n\nThis period also brings excellent conditions for Cultural Triangle sightseeing (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), since that region sits largely outside both monsoon belts and stays comfortably dry.',
      },
      {
        id: 'wildlifeTiming',
        title: 'Timing wildlife and safari trips',
        body: 'Yala National Park is generally best from May to September, when the dry season concentrates animals around remaining waterholes; the park also closes for about a month, usually in September, for habitat management. Minneriya and Kaudulla’s elephant "gathering" peaks from July to October.\n\nWhale watching from Mirissa runs roughly November to April, overlapping neatly with the south coast’s dry season.',
      },
      {
        id: 'festivalTiming',
        title: 'Festivals worth timing a trip around',
        body: 'Kandy’s Esala Perahera, one of Asia’s great religious processions, runs for ten nights in July or August on the lunar calendar; book accommodation months ahead if this is a priority. The Sinhala and Tamil New Year in mid-April is a major national holiday with widespread closures, worth planning around rather than through.\n\nVesak Poya in May, marking the Buddha’s birth, enlightenment and death, brings citywide lantern displays and free food stalls (dansal) that are worth experiencing if your dates align.',
      },
      {
        id: 'shoulderSeasons',
        title: 'The case for shoulder-season travel',
        body: 'Late April to early June and September to early November sit between the two monsoon peaks and often deliver a good mix of manageable rain, lower prices and thinner crowds at major sites like Sigiriya and the Temple of the Tooth. Short, intense afternoon showers rather than day-long rain are typical in these windows.\n\nA private driver-guide who can adjust the day’s plan around weather in real time is particularly valuable in shoulder season, when conditions can change from region to region within the same week.',
      },
    ],
    faq: [
      {
        q: 'What is the single best month to visit Sri Lanka?',
        a: 'There isn’t onet depends entirely on which regions you plan to visit. February is a reasonably safe all-round choice since it falls in the dry season for both the west/south coast and the Cultural Triangle, but a well-planned itinerary can work in almost any month.',
      },
      {
        q: 'When is the rainy season in Sri Lanka?',
        a: 'The south-west monsoon runs roughly May to September and affects the west coast, south coast and hill country; the north-east monsoon runs roughly October to January and affects the east coast and parts of the Cultural Triangle. The two rarely overlap.',
      },
      {
        q: 'Is Sri Lanka worth visiting in the off-season?',
        a: 'Yes, especially for value and smaller crowdsn in the tropics is usually a heavy afternoon shower rather than an all-day washout, and a flexible, private-driver itinerary can route around the wettest regions on any given date.',
      },
      {
        q: 'When should I book a Yala safari for the best chance of sightings?',
        a: 'May to September generally gives the best odds, as the dry season concentrates wildlife around fewer waterholes. The park closes for roughly a month each year, usually in September, for habitat management.',
      },
      {
        q: 'Does Sri Lanka have a hurricane or cyclone season?',
        a: 'Sri Lanka sits south of the main cyclone belt and is rarely hit directly, though monsoon depressions can bring heavy, sustained rain, particularly to the east coast around November.',
      },
    ],
    ctaTitle: 'Let us build your itinerary around the weather',
    ctaBody: 'Our private, chauffeur-driven tours are planned month by month around Sri Lanka’s two monsoons, routing you toward whichever regions are driest on your travel dates.',
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
    ],
  },

  de: {
    h1: 'Beste Reisezeit für Sri Lanka: ein Monat-für-Monat-Ratgeber',
    lead: 'Sri Lanka hat zwei Monsune, die zu unterschiedlichen Jahreszeiten entgegengesetzte Küsten treffen – daher gibt es fast immer irgendwo auf der Insel eine trockene, sonnige Region. Die eigentliche Kunst besteht darin, die Route der Saison anzupassen, statt einen einzigen „besten“ Monat zu suchen.',
    heroAlt: 'Sonniger Strand mit Palmen an der srilankischen Küste',
    sections: [
      {
        title: 'Warum Sri Lanka zwei Trockenzeiten hat, nicht nur eine',
        body: 'Der Yala-Monsun bringt der Südwestküste und dem Bergland etwa von Mai bis September Regen, während der Maha-Monsun dem Nordosten und dem Kulturdreieck etwa von Oktober bis Januar Regen bringt. Das bedeutet, dass Westküste, Südküste, Bergland und Kulturdreieck selten gleichzeitig Regenzeit haben.\n\nFür einen Strandurlaub in einer einzigen Region ist das enorm wichtig; für eine mehrtägige Rundreise durch verschiedene Regionen weniger, da sich die Route um die jeweils trockensten Gebiete während Ihrer Reisedaten herum planen lässt.',
      },
      {
        title: 'Dezember bis März: Hochsaison für Westen und Süden',
        body: 'Dies ist das trockenste, sonnigste Fenster für Colombo, die Südwestküste-Strände (Bentota, Mirissa, Unawatuna), Galle und das Bergland – und damit die geschäftigste und teuerste Reisezeit. Auch die Walbeobachtung vor Mirissa erreicht in diesem Zeitraum ihren Höhepunkt.\n\nBuchen Sie Unterkünfte und Plätze im malerischen Zug rechtzeitig, wenn Sie in diesem Zeitraum reisen, besonders rund um Weihnachten, Neujahr und das singhalesisch-tamilische Neujahr im April.',
      },
      {
        title: 'April bis September: die Ostküste kommt zum Zug',
        body: 'Wenn der Südwestmonsun eintrifft, trocknet die Ostküste rund um Trincomalee und Arugam Bay ab und wird zur besseren Strandwahl; Surfer bevorzugen besonders die Wellen von Arugam Bay etwa von April bis Oktober.\n\nDiese Zeit bietet auch ausgezeichnete Bedingungen für Besichtigungen im Kulturdreieck (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), da diese Region weitgehend außerhalb beider Monsungürtel liegt und angenehm trocken bleibt.',
      },
      {
        title: 'Timing für Wildtier- und Safari-Reisen',
        body: 'Der Yala-Nationalpark ist allgemein von Mai bis September am besten, wenn die Trockenzeit Tiere um verbleibende Wasserlöcher konzentriert; der Park schließt außerdem etwa einen Monat, meist im September, für die Habitatpflege. Das Elefanten-„Gathering“ in Minneriya und Kaudulla erreicht von Juli bis Oktober seinen Höhepunkt.\n\nDie Walbeobachtung von Mirissa läuft etwa von November bis April und überlappt sich genau mit der Trockenzeit der Südküste.',
      },
      {
        title: 'Festivals, um die sich eine Reise lohnt',
        body: 'Kandys Esala Perahera, eine der großen religiösen Prozessionen Asiens, dauert zehn Nächte im Juli oder August nach dem Mondkalender; buchen Sie Unterkünfte Monate im Voraus, wenn dies für Sie wichtig ist. Das singhalesisch-tamilische Neujahr Mitte April ist ein bedeutender nationaler Feiertag mit weitverbreiteten Schließungen – planen Sie eher darum als hindurch.\n\nVesak Poya im Mai, das Geburt, Erleuchtung und Tod Buddhas markiert, bringt landesweite Laternenschauspiele und kostenlose Essensstände (Dansal), die eine Erfahrung wert sind, wenn Ihre Termine passen.',
      },
      {
        title: 'Warum sich die Zwischensaison lohnt',
        body: 'Ende April bis Anfang Juni und September bis Anfang November liegen zwischen den beiden Monsunhöhepunkten und bieten oft eine gute Mischung aus überschaubarem Regen, niedrigeren Preisen und weniger Andrang an großen Sehenswürdigkeiten wie Sigiriya und dem Zahntempel. Kurze, intensive Nachmittagsschauer statt tagelangem Regen sind in diesen Zeiträumen typisch.\n\nEin privater Fahrer-Guide, der den Tagesplan in Echtzeit ans Wetter anpassen kann, ist in der Zwischensaison besonders wertvoll, wenn sich die Bedingungen innerhalb derselben Woche von Region zu Region ändern können.',
      },
    ],
    faq: [
      {
        q: 'Was ist der eine beste Monat, um Sri Lanka zu besuchen?',
        a: 'Es gibt keinen – es hängt ganz davon ab, welche Regionen Sie besuchen möchten. Februar ist eine relativ sichere Rundum-Wahl, da er sowohl für die West-/Südküste als auch für das Kulturdreieck in die Trockenzeit fällt, aber eine gut geplante Route funktioniert in fast jedem Monat.',
      },
      {
        q: 'Wann ist die Regenzeit in Sri Lanka?',
        a: 'Der Südwestmonsun dauert etwa von Mai bis September und betrifft Westküste, Südküste und Bergland; der Nordostmonsun dauert etwa von Oktober bis Januar und betrifft die Ostküste und Teile des Kulturdreiecks. Beide überlappen sich selten.',
      },
      {
        q: 'Lohnt sich Sri Lanka in der Nebensaison?',
        a: 'Ja, besonders preislich und wegen weniger Andrang – Regen in den Tropen ist meist ein kräftiger Nachmittagsschauer, kein Regentag durchgehend, und eine flexible Route mit privatem Fahrer kann die feuchtesten Regionen an jedem Tag umgehen.',
      },
      {
        q: 'Wann sollte ich eine Yala-Safari für die besten Sichtungschancen buchen?',
        a: 'Mai bis September bietet allgemein die besten Chancen, da die Trockenzeit Wildtiere um weniger Wasserlöcher konzentriert. Der Park schließt jedes Jahr für etwa einen Monat, meist im September, wegen Habitatpflege.',
      },
      {
        q: 'Gibt es in Sri Lanka eine Hurrikan- oder Zyklonsaison?',
        a: 'Sri Lanka liegt südlich des Hauptzyklongürtels und wird selten direkt getroffen, obwohl Monsuntiefs vor allem der Ostküste um November starken, anhaltenden Regen bringen können.',
      },
    ],
    ctaTitle: 'Lassen Sie uns Ihre Route ums Wetter herum planen',
    ctaBody: 'Unsere privaten Rundreisen mit Fahrer werden monatsgenau um Sri Lankas zwei Monsune geplant und führen Sie zu den Regionen, die an Ihren Reisedaten am trockensten sind.',
    ctaLabel: 'Reise nach Saison planen',
    relatedTours: [
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala-Nationalpark' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt-Ratgeber' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Meilleure période pour visiter le Sri Lanka : guide mois par mois',
    lead: 'Le Sri Lanka connaît deux moussons qui touchent des côtes opposées à des périodes différentes de l’année, ce qui signifie qu’il y a presque toujours une région sèche et ensoleillée quelque part sur l’îlessentiel est d’adapter son itinéraire à la saison plutôt que de chercher un seul « meilleur » mois.',
    heroAlt: 'Plage ensoleillée bordée de palmiers sur la côte du Sri Lanka',
    sections: [
      {
        title: 'Pourquoi le Sri Lanka a deux saisons sèches, pas une',
        body: 'La mousson de Yala apporte la pluie à la côte sud-ouest et aux hautes terres environ de mai à septembre, tandis que la mousson de Maha apporte la pluie au nord-est et au Triangle Culturel environ d’octobre à janvier. Cela signifie que la côte ouest, la côte sud, les hautes terres et le Triangle Culturel connaissent rarement leur saison des pluies simultanément.\n\nPour des vacances à la plage dans une seule région, cela compte énormément ; pour un circuit de plusieurs jours entre différentes régions, cela compte moins, car l’itinéraire peut s’organiser autour des zones les plus sèches à vos dates de voyage.',
      },
      {
        title: 'Décembre à mars : haute saison pour l’ouest et le sud',
        body: 'C’est la période la plus sèche et la plus ensoleillée pour Colombo, les plages du sud-ouest (Bentota, Mirissa, Unawatuna), Galle et les hautes terres, et donc la période la plus fréquentée et la plus chère pour voyager. L’observation des baleines depuis Mirissa atteint aussi son pic durant cette fenêtre.\n\nRéservez hébergements et places de train panoramique bien à l’avance si vous voyagez durant cette période, en particulier autour de Noël, du Nouvel An et du Nouvel An cinghalais et tamoul en avril.',
      },
      {
        title: 'Avril à septembre : le tour de la côte est',
        body: 'À l’arrivée de la mousson du sud-ouest, la côte est autour de Trincomalee et d’Arugam Bay s’assèche et devient le meilleur choix balnéaire, les surfeurs privilégiant particulièrement les vagues d’Arugam Bay d’environ avril à octobre.\n\nCette période offre aussi d’excellentes conditions pour visiter le Triangle Culturel (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), cette région se trouvant largement hors des deux ceintures de mousson et restant agréablement sèche.',
      },
      {
        title: 'Programmer les sorties safari et faune',
        body: 'Le parc national de Yala est généralement meilleur de mai à septembre, quand la saison sèche concentre les animaux autour des points d’eau restants ; le parc ferme aussi environ un mois, généralement en septembre, pour la gestion de l’habitat. Le « rassemblement » d’éléphants à Minneriya et Kaudulla atteint son pic de juillet à octobre.\n\nL’observation des baleines depuis Mirissa se déroule environ de novembre à avril, se superposant idéalement à la saison sèche de la côte sud.',
      },
      {
        title: 'Des festivals qui méritent qu’on organise un voyage autour',
        body: 'L’Esala Perahera de Kandy, l’une des grandes processions religieuses d’Asie, dure dix nuits en juillet ou août selon le calendrier lunaire ; réservez un hébergement des mois à l’avance si c’est une priorité. Le Nouvel An cinghalais et tamoul à la mi-avril est une fête nationale majeure avec de nombreuses fermeturesieux vaut organiser son voyage autour que pendant.\n\nVesak Poya en mai, marquant la naissance, l’éveil et la mort du Bouddha, apporte des lanternes dans toute la ville et des stands de nourriture gratuite (dansal) qui méritent d’être vécus si vos dates coïncident.',
      },
      {
        title: 'Pourquoi voyager en intersaison',
        body: 'Fin avril à début juin et septembre à début novembre se situent entre les deux pics de mousson et offrent souvent un bon compromis entre pluie maîtrisable, prix plus bas et foules plus clairsemées sur les grands sites comme Sigiriya et le temple de la Dent. De courtes averses intenses l’après-midi, plutôt qu’une pluie continue toute la journée, sont typiques de ces périodes.\n\nUn chauffeur-guide privé capable d’ajuster le programme du jour en fonction de la météo en temps réel est particulièrement précieux en intersaison, où les conditions peuvent changer de région à région au sein d’une même semaine.',
      },
    ],
    faq: [
      {
        q: 'Quel est le meilleur mois unique pour visiter le Sri Lanka ?',
        a: 'Il n’y en a pasout dépend des régions que vous prévoyez de visiter. Février est un choix globalement sûr, car il tombe en saison sèche à la fois pour la côte ouest/sud et le Triangle Culturel, mais un itinéraire bien conçu peut fonctionner presque tous les mois.',
      },
      {
        q: 'Quand est la saison des pluies au Sri Lanka ?',
        a: 'La mousson du sud-ouest dure environ de mai à septembre et touche la côte ouest, la côte sud et les hautes terres ; la mousson du nord-est dure environ d’octobre à janvier et touche la côte est et certaines parties du Triangle Culturel. Les deux se superposent rarement.',
      },
      {
        q: 'Le Sri Lanka vaut-il le voyage en basse saison ?',
        a: 'Oui, surtout pour le rapport qualité-prix et des foules plus réduites la pluie tropicale est généralement une forte averse d’après-midi plutôt qu’une journée entière sous la pluie, et un itinéraire flexible avec chauffeur privé peut contourner les régions les plus humides à n’importe quelle date.',
      },
      {
        q: 'Quand réserver un safari à Yala pour les meilleures chances d’observation ?',
        a: 'Mai à septembre offre généralement les meilleures chances, la saison sèche concentrant la faune autour de moins de points d’eau. Le parc ferme environ un mois chaque année, généralement en septembre, pour la gestion de l’habitat.',
      },
      {
        q: 'Le Sri Lanka connaît-il une saison des ouragans ou cyclones ?',
        a: 'Le Sri Lanka se trouve au sud de la principale ceinture cyclonique et est rarement touché directement, bien que des dépressions de mousson puissent apporter des pluies fortes et soutenues, notamment sur la côte est vers novembre.',
      },
    ],
    ctaTitle: 'Laissez-nous organiser votre itinéraire autour de la météo',
    ctaBody: 'Nos circuits privés avec chauffeur sont planifiés mois par mois en fonction des deux moussons du Sri Lanka, vous orientant vers les régions les plus sèches à vos dates de voyage.',
    ctaLabel: 'Planifier votre voyage par saison',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
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
    ],
  },

  it: {
    h1: 'Periodo migliore per visitare lo Sri Lanka: guida mese per mese',
    lead: 'Lo Sri Lanka ha due monsoni che colpiscono coste opposte in periodi diversi dell’anno, il che significa che c’è quasi sempre una regione secca e soleggiata da qualche parte sull’isola l’abilità vera sta nell’adattare l’itinerario alla stagione, non nel trovare un singolo mese “migliore”.',
    heroAlt: 'Spiaggia soleggiata con palme sulla costa dello Sri Lanka',
    sections: [
      {
        title: 'Perché lo Sri Lanka ha due stagioni secche, non una',
        body: 'Il monsone di Yala porta pioggia alla costa sud-occidentale e all’entroterra collinare circa da maggio a settembre, mentre il monsone di Maha porta pioggia al nord-est e al Triangolo Culturale circa da ottobre a gennaio. Ciò significa che costa ovest, costa sud, entroterra collinare e Triangolo Culturale raramente hanno la stagione delle piogge nello stesso periodo.\n\nPer una vacanza al mare in una sola regione questo conta moltissimo; per un tour di più giorni che si sposta tra le regioni conta meno, poiché l’itinerario può essere costruito attorno alle aree più secche nelle date del vostro viaggio.',
      },
      {
        title: 'Da dicembre a marzo: alta stagione per ovest e sud',
        body: 'Questo è il periodo più secco e soleggiato per Colombo, le spiagge sud-occidentali (Bentota, Mirissa, Unawatuna), Galle e l’entroterra collinare, e quindi il periodo più affollato e costoso per viaggiare. Anche l’osservazione delle balene al largo di Mirissa raggiunge il picco in questo periodo.\n\nPrenotate alloggio e posti sul treno panoramico con largo anticipo se viaggiate in questo periodo, in particolare intorno a Natale, Capodanno e il Capodanno singalese e tamil di aprile.',
      },
      {
        title: 'Da aprile a settembre: il turno della costa orientale',
        body: 'Con l’arrivo del monsone sud-occidentale, la costa orientale intorno a Trincomalee e Arugam Bay si asciuga e diventa la scelta migliore per il mare, mentre i surfisti preferiscono in particolare le onde di Arugam Bay da circa aprile a ottobre.\n\nQuesto periodo offre anche ottime condizioni per visitare il Triangolo Culturale (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), poiché questa regione si trova in gran parte fuori da entrambe le fasce monsoniche e resta comodamente secca.',
      },
      {
        title: 'Pianificare i viaggi di fauna e safari',
        body: 'Il parco nazionale di Yala è generalmente migliore da maggio a settembre, quando la stagione secca concentra gli animali intorno ai punti d’acqua rimanenti; il parco chiude anche per circa un mese, di solito a settembre, per la gestione dell’habitat. Il “raduno” degli elefanti a Minneriya e Kaudulla raggiunge il picco da luglio a ottobre.\n\nL’osservazione delle balene da Mirissa si svolge circa da novembre ad aprile, sovrapponendosi perfettamente alla stagione secca della costa sud.',
      },
      {
        title: 'Festival attorno ai quali vale la pena pianificare un viaggio',
        body: 'L’Esala Perahera di Kandy, una delle grandi processioni religiose dell’Asia, dura dieci notti a luglio o agosto secondo il calendario lunare; prenotate l’alloggio con mesi di anticipo se questo è una priorità. Il Capodanno singalese e tamil a metà aprile è una festività nazionale importante con chiusure diffuse meglio pianificare un viaggio attorno che durante.\n\nVesak Poya a maggio, che segna la nascita, l’illuminazione e la morte del Buddha, porta lanterne in tutta la città e bancarelle di cibo gratuito (dansal) che vale la pena vivere se le date coincidono.',
      },
      {
        title: 'Perché viaggiare in bassa stagione intermedia',
        body: 'Da fine aprile a inizio giugno e da settembre a inizio novembre si trovano tra i due picchi monsonici e spesso offrono un buon equilibrio tra pioggia gestibile, prezzi più bassi e minore folla nei siti principali come Sigiriya e il Tempio del Dente. Brevi e intensi temporali pomeridiani, piuttosto che pioggia per tutto il giorno, sono tipici in questi periodi.\n\nUn autista-guida privato in grado di adattare il programma della giornata al meteo in tempo reale è particolarmente utile nella bassa stagione intermedia, quando le condizioni possono cambiare da regione a regione nella stessa settimana.',
      },
    ],
    faq: [
      {
        q: 'Qual è il singolo mese migliore per visitare lo Sri Lanka?',
        a: 'Non ce n’è uno dipende interamente da quali regioni intendete visitare. Febbraio è una scelta ragionevolmente sicura per tutto il paese, poiché cade nella stagione secca sia per la costa ovest/sud che per il Triangolo Culturale, ma un itinerario ben pianificato può funzionare quasi in ogni mese.',
      },
      {
        q: 'Quando è la stagione delle piogge in Sri Lanka?',
        a: 'Il monsone sud-occidentale dura circa da maggio a settembre e colpisce la costa ovest, la costa sud e l’entroterra collinare; il monsone nord-orientale dura circa da ottobre a gennaio e colpisce la costa orientale e parti del Triangolo Culturale. I due raramente si sovrappongono.',
      },
      {
        q: 'Vale la pena visitare lo Sri Lanka in bassa stagione?',
        a: 'Sì, specialmente per il rapporto qualità-prezzo e folle più ridotte la pioggia tropicale è di solito un forte temporale pomeridiano piuttosto che una giornata intera di pioggia, e un itinerario flessibile con autista privato può evitare le regioni più piovose in qualsiasi data.',
      },
      {
        q: 'Quando prenotare un safari a Yala per le migliori probabilità di avvistamento?',
        a: 'Maggio-settembre offre generalmente le migliori probabilità, poiché la stagione secca concentra la fauna intorno a meno punti d’acqua. Il parco chiude circa un mese ogni anno, di solito a settembre, per la gestione dell’habitat.',
      },
      {
        q: 'Lo Sri Lanka ha una stagione di uragani o cicloni?',
        a: 'Lo Sri Lanka si trova a sud della principale fascia dei cicloni ed è raramente colpito direttamente, sebbene le depressioni monsoniche possano portare piogge forti e prolungate, in particolare sulla costa orientale intorno a novembre.',
      },
    ],
    ctaTitle: 'Lasciate che pianifichiamo il vostro itinerario in base al meteo',
    ctaBody: 'I nostri tour privati con autista sono pianificati mese per mese in base ai due monsoni dello Sri Lanka, indirizzandovi verso le regioni più secche nelle vostre date di viaggio.',
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
    ],
  },

  es: {
    h1: 'Mejor época para visitar Sri Lanka: guía mes a mes',
    lead: 'Sri Lanka tiene dos monzones que afectan a costas opuestas en distintos momentos del año, lo que significa que casi siempre hay una región seca y soleada en algún lugar de la isla: la habilidad real está en ajustar el itinerario a la temporada, no en buscar un único mes «mejor».',
    heroAlt: 'Playa soleada con palmeras en la costa de Sri Lanka',
    sections: [
      {
        title: 'Por qué Sri Lanka tiene dos temporadas secas, no una',
        body: 'El monzón de Yala trae lluvias a la costa suroeste y las tierras altas aproximadamente de mayo a septiembre, mientras que el monzón de Maha trae lluvias al noreste y al Triángulo Cultural aproximadamente de octubre a enero. Esto significa que la costa oeste, la costa sur, las tierras altas y el Triángulo Cultural rara vez tienen su temporada de lluvias al mismo tiempo.\n\nPara unas vacaciones de playa en una sola región esto importa enormemente; para un recorrido de varios días que se mueve entre regiones importa menos, ya que el itinerario puede diseñarse en torno a las zonas más secas en sus fechas de viaje.',
      },
      {
        title: 'De diciembre a marzo: temporada alta para el oeste y el sur',
        body: 'Esta es la ventana más seca y soleada para Colombo, las playas del suroeste (Bentota, Mirissa, Unawatuna), Galle y las tierras altas, y por tanto la época más concurrida y cara para viajar. El avistamiento de ballenas frente a Mirissa también alcanza su punto máximo en este periodo.\n\nReserve alojamiento y asientos en el tren panorámico con bastante antelación si viaja en este periodo, especialmente en torno a Navidad, Año Nuevo y el Año Nuevo cingalés y tamil de abril.',
      },
      {
        title: 'De abril a septiembre: el turno de la costa este',
        body: 'A medida que llega el monzón del suroeste, la costa este alrededor de Trincomalee y Arugam Bay se seca y se convierte en la mejor opción de playa, mientras que los surfistas prefieren especialmente las olas de Arugam Bay entre abril y octubre aproximadamente.\n\nEste periodo también ofrece excelentes condiciones para visitar el Triángulo Cultural (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), ya que esta región queda en gran parte fuera de ambos cinturones monzónicos y se mantiene agradablemente seca.',
      },
      {
        title: 'Cómo planificar los viajes de fauna y safari',
        body: 'El Parque Nacional de Yala suele ser mejor de mayo a septiembre, cuando la temporada seca concentra a los animales alrededor de las charcas restantes; el parque también cierra unas cuatro semanas, normalmente en septiembre, para la gestión del hábitat. La «concentración» de elefantes en Minneriya y Kaudulla alcanza su punto máximo de julio a octubre.\n\nEl avistamiento de ballenas desde Mirissa se desarrolla aproximadamente de noviembre a abril, coincidiendo perfectamente con la temporada seca de la costa sur.',
      },
      {
        title: 'Festivales que merecen planificar un viaje alrededor',
        body: 'El Esala Perahera de Kandy, una de las grandes procesiones religiosas de Asia, dura diez noches en julio o agosto según el calendario lunar; reserve alojamiento con meses de antelación si esto es una prioridad. El Año Nuevo cingalés y tamil a mediados de abril es una festividad nacional importante con muchos cierres, mejor planificar el viaje alrededor que durante.\n\nVesak Poya en mayo, que conmemora el nacimiento, la iluminación y la muerte de Buda, trae exhibiciones de faroles por toda la ciudad y puestos de comida gratuita (dansal) que merece la pena vivir si sus fechas coinciden.',
      },
      {
        title: 'El argumento a favor de viajar en temporada media',
        body: 'De finales de abril a principios de junio y de septiembre a principios de noviembre se sitúan entre los dos picos monzónicos y a menudo ofrecen una buena combinación de lluvia manejable, precios más bajos y menos aglomeraciones en lugares importantes como Sigiriya y el Templo del Diente. Chubascos cortos e intensos por la tarde, en lugar de lluvia durante todo el día, son típicos en estos periodos.\n\nUn chófer-guía privado que pueda ajustar el plan del día según el clima en tiempo real resulta especialmente valioso en temporada media, cuando las condiciones pueden cambiar de una región a otra en la misma semana.',
      },
    ],
    faq: [
      {
        q: '¿Cuál es el único mejor mes para visitar Sri Lanka?',
        a: 'No existe uno: depende totalmente de qué regiones planee visitar. Febrero es una opción razonablemente segura en general, ya que cae en temporada seca tanto para la costa oeste/sur como para el Triángulo Cultural, pero un itinerario bien planificado puede funcionar casi cualquier mes.',
      },
      {
        q: '¿Cuándo es la temporada de lluvias en Sri Lanka?',
        a: 'El monzón del suroeste dura aproximadamente de mayo a septiembre y afecta a la costa oeste, la costa sur y las tierras altas; el monzón del noreste dura aproximadamente de octubre a enero y afecta a la costa este y partes del Triángulo Cultural. Ambos rara vez se superponen.',
      },
      {
        q: '¿Merece la pena visitar Sri Lanka en temporada baja?',
        a: 'Sí, especialmente por el valor y las menores aglomeraciones: la lluvia tropical suele ser un fuerte chubasco de tarde en lugar de un día entero encapotado, y un itinerario flexible con chófer privado puede evitar las regiones más lluviosas en cualquier fecha.',
      },
      {
        q: '¿Cuándo debería reservar un safari en Yala para tener más posibilidades de avistamientos?',
        a: 'De mayo a septiembre suele ofrecer las mejores probabilidades, ya que la temporada seca concentra la fauna alrededor de menos charcas. El parque cierra alrededor de un mes cada año, normalmente en septiembre, para la gestión del hábitat.',
      },
      {
        q: '¿Tiene Sri Lanka temporada de huracanes o ciclones?',
        a: 'Sri Lanka se encuentra al sur del principal cinturón de ciclones y rara vez se ve afectada directamente, aunque las depresiones monzónicas pueden traer lluvias intensas y prolongadas, especialmente en la costa este alrededor de noviembre.',
      },
    ],
    ctaTitle: 'Déjenos organizar su itinerario según el clima',
    ctaBody: 'Nuestros tours privados con chófer se planifican mes a mes según los dos monzones de Sri Lanka, dirigiéndole hacia las regiones más secas en sus fechas de viaje.',
    ctaLabel: 'Planifique su viaje por temporada',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
      { pageId: 'tour5', label: 'Tour de 5 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Parque Nacional de Yala' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Guía de fauna de Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guía de equipaje para Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Najlepszy czas na wizytę na Sri Lance: przewodnik miesiąc po miesiącu',
    lead: 'Sri Lanka ma dwa monsuny uderzające w przeciwne wybrzeża w różnych porach roku, co oznacza, że na wyspie zawsze gdzieś jest sucho i słonecznie – prawdziwa sztuka polega na dopasowaniu trasy do sezonu, a nie na szukaniu jednego „najlepszego” miesiąca.',
    heroAlt: 'Słoneczna plaża z palmami na wybrzeżu Sri Lanki',
    sections: [
      {
        title: 'Czemu Sri Lanka ma dwa sezony suche, nie jeden',
        body: 'Monsun Yala przynosi deszcz na południowo-zachodnie wybrzeże i w góry od maja do września, a monsun Maha przynosi deszcz na północny wschód i do Trójkąta Kulturowego od października do stycznia. To oznacza, że wybrzeże zachodnie, południowe, góry i Trójkąt Kulturowy rzadko mają sezon deszczowy w tym samym czasie.\n\nDla urlopu plażowego w jednym regionie ma to olbrzymie znaczenie; dla wielodniowej trasy między regionami znaczenie mniejsze, bo plan można zbudować wokół najbardziej suchych obszarów w danym terminie.',
      },
      {
        title: 'Grudzień–marzec: szczyt sezonu dla zachodu i południa',
        body: 'To najsuchszy, najbardziej słoneczny okres dla Colombo, plaż południowo-zachodnich (Bentota, Mirissa, Unawatuna), Galle i górzystego interioru, a więc też najbardziej zatłoczony i najdroższy czas na podróż. Obserwacja wielorybów przy Mirissie również szczytuje w tym okresie.\n\nZarezerwuj zakwaterowanie i miejsca w widokowym pociągu z wyprzedzeniem, jeśli podróżujesz w tym czasie, szczególnie wokół Bożego Narodzenia, Nowego Roku i syngalesko-tamilskiego Nowego Roku w kwietniu.',
      },
      {
        title: 'Kwiecień–wrzesień: kolej na wschodnie wybrzeże',
        body: 'Gdy przychodzi monsun południowo-zachodni, wschodnie wybrzeże wokół Trinkomali i Arugam Bay wysycha i staje się lepszym wyborem plażowym, a surferzy szczególnie cenią falę w Arugam Bay od około kwietnia do października.\n\nTen okres to też doskonałe warunki na zwiedzanie Trójkąta Kulturowego (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), gdyż ten region leży w dużej mierze poza obydwoma pasami monsunowymi i pozostaje wygodnie suchy.',
      },
      {
        title: 'Planowanie wyjazdów safari i obserwacji dzikiej przyrody',
        body: 'Park Narodowy Yala jest zwykle najlepszy od maja do września, gdy sezon suchy skupia zwierzęta wokół pozostałych wodopojów; park zamyka się też na około miesiąc, zwykle w wrześniu, na potrzeby zarządzania siedliskiem. „Zbiórka” słoni w Minneriya i Kaudulli szczytuje od lipca do października.\n\nObserwacja wielorybów z Mirissy trwa od listopada do kwietnia, dokładnie pokrywając się z sezonem suchym południowego wybrzeża.',
      },
      {
        title: 'Festiwale, wokół których warto zaplanować podróż',
        body: 'Esala Perahera w Kandy, jedna z wielkich religijnych procesji Azji, trwa dziesięć nocy w lipcu lub sierpniu według kalendarza księżycowego; zarezerwuj nocleg z miesięcznym wyprzedzeniem, jeśli to dla Ciebie priorytet. Syngalesko-tamilski Nowy Rok w połowie kwietnia to ważne święto narodowe z licznymi zamknięciami – lepiej zaplanować podróż wokół niego, niż w jego trakcie.\n\nVesak Poya w maju, obchodzone na pamiątkę narodzin, oświecenia i śmierci Buddy, przynosi ogólnomiejskie wystawy lampionów i darmowe stragany z jedzeniem (dansal), warte przeżycia, jeśli terminy się zgadzają.',
      },
      {
        title: 'Argumenty za podróżą w sezonie przejściowym',
        body: 'Koniec kwietnia do początku czerwca oraz wrzesień do początku listopada leżą między dwoma szczytami monsunowymi i często dają dobrą mieszankę umiarkowanego deszczu, niższych cen i mniejszych tłumów w głównych miejscach jak Sigiriya i Świątynia Zęba. Krótkie, intensywne popołudniowe burze, a nie całodniowy deszcz, są typowe w tych okresach.\n\nPrywatny kierowca-przewodnik, który może w czasie rzeczywistym dostosować plan dnia do pogody, jest szczególnie wartościowy w sezonie przejściowym, gdy warunki mogą zmieniać się z regionu na region w ciągu tego samego tygodnia.',
      },
    ],
    faq: [
      {
        q: 'Jaki jest jeden najlepszy miesiąc na wizytę na Sri Lance?',
        a: 'Nie ma takiego – zależy w całości od tego, jakie regiony planujesz odwiedzić. Luty jest rozsądnie bezpiecznym uniwersalnym wyborem, bo przypada w sezon suchy zarówno dla wybrzeża zachodniego/południowego, jak i Trójkąta Kulturowego, ale dobrze zaplanowana trasa może działać w prawie każdym miesiącu.',
      },
      {
        q: 'Kiedy jest sezon deszczowy na Sri Lance?',
        a: 'Monsun południowo-zachodni trwa od maja do września i dotyczy wybrzeża zachodniego, południowego i górskiego interioru; monsun północno-wschodni trwa od października do stycznia i dotyczy wschodniego wybrzeża oraz części Trójkąta Kulturowego. Rzadko się nakładają.',
      },
      {
        q: 'Czy warto jechać na Sri Lankę w sezonie niskim?',
        a: 'Tak, szczególnie dla wartości i mniejszych tłumów – deszcz w tropikach to zwykle intensywna popołudniowa ulewa, a nie całodniowa niepogoda, a elastyczna trasa z prywatnym kierowcą pozwala obchodzić najbardziej mokre regiony w danym terminie.',
      },
      {
        q: 'Kiedy zarezerwować safari w Yali dla najlepszych szans na obserwacje?',
        a: 'Maj–wrzesień zwykle daje najlepsze szanse, bo sezon suchy skupia dziką przyrodę wokół mniejszej liczby wodopojów. Park zamyka się na około miesiąc rocznie, zwykle w wrześniu, w celu zarządzania siedliskiem.',
      },
      {
        q: 'Czy Sri Lanka ma sezon huraganów lub cyklonów?',
        a: 'Sri Lanka leży na południe od głównego pasa cyklonowego i rzadko jest bezpośrednio dotykana, choć niże monsunowe mogą przynieść silne, długotrwałe deszcze, szczególnie na wschodnim wybrzeżu wokół listopada.',
      },
    ],
    ctaTitle: 'Zaplanujemy Twoją trasę wokół pogody',
    ctaBody: 'Nasze prywatne wycieczki z kierowcą są planowane miesiąc po miesiącu wokół dwóch monsunów Sri Lanki, prowadząc Cię do regionów najbardziej suchych w Twoich terminach podróży.',
    ctaLabel: 'Zaplanuj podróż według sezonu',
    relatedTours: [
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour5', label: '5-dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Park Narodowy Yala' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Przewodnik po dzikiej przyrodzie Sri Lanki' },
      { pageId: 'guidePacking', label: 'Przewodnik pakowania na Sri Lankę' },
    ],
  },

  ru: {
    h1: 'Лучшее время для поездки в Шри-Ланку: гид по месяцам',
    lead: 'В Шри-Ланке два муссона, которые обрушиваются на противоположные побережья в разное время года, поэтому почти всегда где-то на острове сухо и солнечно настоящее искусство в том, чтобы подстроить маршрут под сезон, а не искать один «лучший» месяц.',
    heroAlt: 'Солнечный пляж с пальмами на побережье Шри-Ланки',
    sections: [
      {
        title: 'Почему в Шри-Ланке два сухих сезона, а не один',
        body: 'Муссон Яла приносит дожди на юго-западное побережье и в горную местность примерно с мая по сентябрь, а муссон Маха приносит дожди на северо-восток и в Культурный треугольник примерно с октября по январь. Это означает, что западное побережье, южное побережье, горная местность и Культурный треугольник редко переживают сезон дождей одновременно.\n\nДля пляжного отдыха в одном регионе это имеет огромное значение; для многодневного маршрута, охватывающего разные регионы, меньшее, так как маршрут можно построить вокруг тех областей, которые будут наиболее сухими в ваши даты поездки.',
      },
      {
        title: 'С декабря по март: высокий сезон для запада и юга',
        body: 'Это самый сухой и солнечный период для Коломбо, пляжей юго-запада (Бентота, Мирисса, Унавату), Галле и горной местности, а значит, и самое многолюдное и дорогое время для путешествий. Наблюдение за китами у Мириссы также достигает пика в этот период.\n\nБронируйте жильё и места в живописном поезде заранее, если путешествуете в этот период, особенно вокруг Рождества, Нового года и сингальско-тамильского Нового года в апреле.',
      },
      {
        title: 'С апреля по сентябрь: черёд восточного побережья',
        body: 'Когда приходит юго-западный муссон, восточное побережье вокруг Тринкомали и Аругам-Бей высыхает и становится лучшим вариантом для пляжа, а сёрферы особенно ценят волны Аругам-Бей примерно с апреля по октябрь.\n\nЭтот период также даёт отличные условия для осмотра Культурного треугольника (Сигирия, Дамбулла, Полоннарува, Анурадхапура), поскольку этот регион в основном находится за пределами обоих муссонных поясов и остаётся комфортно сухим.',
      },
      {
        title: 'Планирование поездок для наблюдения за дикой природой и сафари',
        body: 'Национальный парк Яла обычно лучше всего посещать с мая по сентябрь, когда сухой сезон концентрирует животных вокруг оставшихся водопоев; парк также закрывается примерно на месяц, обычно в сентябре, для управления местообитаниями. «Сбор» слонов в Миннерии и Каудулле достигает пика с июля по октябрь.\n\nНаблюдение за китами из Мириссы проходит примерно с ноября по апрель, точно совпадая с сухим сезоном южного побережья.',
      },
      {
        title: 'Фестивали, вокруг которых стоит спланировать поездку',
        body: 'Эсала Перахера в Канди, одна из великих религиозных процессий Азии, длится десять ночей в июле или августе по лунному календарю; бронируйте жильё за несколько месяцев, если это важно для вас. Сингальско-тамильский Новый год в середине апреля крупный национальный праздник с массовыми закрытиями, лучше планировать поездку вокруг него, а не во время него.\n\nВесак Пойя в мае, отмечающий рождение, просветление и смерть Будды, приносит городские выставки фонарей и бесплатные пункты еды (дансал), которые стоит увидеть, если ваши даты совпадают.',
      },
      {
        title: 'В пользу путешествия в межсезонье',
        body: 'Конец апреля – начало июня и сентябрь – начало ноября находятся между двумя пиками муссонов и часто дают хорошее сочетание умеренного дождя, более низких цен и меньших толп в главных местах, таких как Сигирия и Храм Зуба. Короткие, интенсивные послеполуденные ливни, а не дождь весь день, типичны в эти периоды.\n\nЧастный водитель-гид, способный подстраивать план дня под погоду в реальном времени, особенно ценен в межсезонье, когда условия могут меняться от региона к региону в течение одной недели.',
      },
    ],
    faq: [
      {
        q: 'Какой единственный лучший месяц для поездки в Шри-Ланку?',
        a: 'Такого нет всё зависит от того, какие регионы вы планируете посетить. Февраль разумно безопасный универсальный выбор, поскольку попадает в сухой сезон и для запада/юга побережья, и для Культурного треугольника, но хорошо спланированный маршрут может сработать почти в любой месяц.',
      },
      {
        q: 'Когда сезон дождей в Шри-Ланке?',
        a: 'Юго-западный муссон длится примерно с мая по сентябрь и затрагивает западное побережье, южное побережье и горную местность; северо-восточный муссон длится примерно с октября по январь и затрагивает восточное побережье и часть Культурного треугольника. Они редко перекрываются.',
      },
      {
        q: 'Стоит ли ехать в Шри-Ланку в низкий сезон?',
        a: 'Да, особенно из-за выгодных цен и меньшего числа туристов тропический дождь обычно означает сильный послеполуденный ливень, а не дождь весь день, а гибкий маршрут с частным водителем позволяет обходить самые дождливые регионы в любую дату.',
      },
      {
        q: 'Когда бронировать сафари в Яле для лучших шансов на наблюдения?',
        a: 'Май–сентябрь обычно дают лучшие шансы, поскольку сухой сезон концентрирует животных вокруг меньшего числа водопоев. Парк закрывается примерно на месяц ежегодно, обычно в сентябре, для управления местообитаниями.',
      },
      {
        q: 'Есть ли в Шри-Ланке сезон ураганов или циклонов?',
        a: 'Шри-Ланка находится южнее основного циклонового пояса и редко подвергается прямому удару, хотя муссонные депрессии могут приносить сильные, продолжительные дожди, особенно на восточное побережье около ноября.',
      },
    ],
    ctaTitle: 'Позвольте нам спланировать маршрут с учётом погоды',
    ctaBody: 'Наши частные туры с водителем планируются месяц за месяцем с учётом двух муссонов Шри-Ланки, направляя вас в те регионы, которые будут самыми сухими в ваши даты поездки.',
    ctaLabel: 'Спланировать поездку по сезону',
    relatedTours: [
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
      { pageId: 'tour5', label: '5-дневный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Сигирия' },
      { pageId: 'destElla', label: 'Элла' },
      { pageId: 'destYala', label: 'Национальный парк Яла' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Гид по дикой природе Шри-Ланки' },
      { pageId: 'guidePacking', label: 'Гид по упаковке вещей для Шри-Ланки' },
    ],
  },
  nl: {
    h1: 'Beste Reisezeit für Sri Lanka: ein Monat-für-Monat-Ratgeber',
    lead: 'Sri Lanka hat zwei Monsune, die zu unterschiedlichen Jahreszeiten entgegengesetzte Küsten treffen – daher gibt es fast immer irgendwo auf der Insel eine trockene, sonnige Region. Die eigentliche Kunst besteht darin, die Route der Saison anzupassen, statt einen einzigen „besten“ Monat zu suchen.',
    heroAlt: 'Sonniger Strand mit Palmen an der srilankischen Küste',
    sections: [
      {
        title: 'Warum Sri Lanka zwei Trockenzeiten hat, nicht nur eine',
        body: 'Der Yala-Monsun bringt der Südwestküste und dem Bergland etwa von Mai bis September Regen, während der Maha-Monsun dem Nordosten und dem Kulturdreieck etwa von Oktober bis Januar Regen bringt. Das bedeutet, dass Westküste, Südküste, Bergland und Kulturdreieck selten gleichzeitig Regenzeit haben.\n\nFür einen Strandurlaub in einer einzigen Region ist das enorm wichtig; für eine mehrtägige Rundreise durch verschiedene Regionen weniger, da sich die Route um die jeweils trockensten Gebiete während Ihrer Reisedaten herum planen lässt.',
      },
      {
        title: 'Dezember bis März: Hochsaison für Westen und Süden',
        body: 'Dies ist das trockenste, sonnigste Fenster für Colombo, die Südwestküste-Strände (Bentota, Mirissa, Unawatuna), Galle und das Bergland – und damit die geschäftigste und teuerste Reisezeit. Auch die Walbeobachtung vor Mirissa erreicht in diesem Zeitraum ihren Höhepunkt.\n\nBuchen Sie Unterkünfte und Plätze im malerischen Zug rechtzeitig, wenn Sie in diesem Zeitraum reisen, besonders rund um Weihnachten, Neujahr und das singhalesisch-tamilische Neujahr im April.',
      },
      {
        title: 'April bis September: die Ostküste kommt zum Zug',
        body: 'Wenn der Südwestmonsun eintrifft, trocknet die Ostküste rund um Trincomalee und Arugam Bay ab und wird zur besseren Strandwahl; Surfer bevorzugen besonders die Wellen von Arugam Bay etwa von April bis Oktober.\n\nDiese Zeit bietet auch ausgezeichnete Bedingungen für Besichtigungen im Kulturdreieck (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), da diese Region weitgehend außerhalb beider Monsungürtel liegt und angenehm trocken bleibt.',
      },
      {
        title: 'Timing für Wildtier- und Safari-Reisen',
        body: 'Der Yala-Nationalpark ist allgemein von Mai bis September am besten, wenn die Trockenzeit Tiere um verbleibende Wasserlöcher konzentriert; der Park schließt außerdem etwa einen Monat, meist im September, für die Habitatpflege. Das Elefanten-„Gathering“ in Minneriya und Kaudulla erreicht von Juli bis Oktober seinen Höhepunkt.\n\nDie Walbeobachtung von Mirissa läuft etwa von November bis April und überlappt sich genau mit der Trockenzeit der Südküste.',
      },
      {
        title: 'Festivals, um die sich eine Reise lohnt',
        body: 'Kandys Esala Perahera, eine der großen religiösen Prozessionen Asiens, dauert zehn Nächte im Juli oder August nach dem Mondkalender; buchen Sie Unterkünfte Monate im Voraus, wenn dies für Sie wichtig ist. Das singhalesisch-tamilische Neujahr Mitte April ist ein bedeutender nationaler Feiertag mit weitverbreiteten Schließungen – planen Sie eher darum als hindurch.\n\nVesak Poya im Mai, das Geburt, Erleuchtung und Tod Buddhas markiert, bringt landesweite Laternenschauspiele und kostenlose Essensstände (Dansal), die eine Erfahrung wert sind, wenn Ihre Termine passen.',
      },
      {
        title: 'Warum sich die Zwischensaison lohnt',
        body: 'Ende April bis Anfang Juni und September bis Anfang November liegen zwischen den beiden Monsunhöhepunkten und bieten oft eine gute Mischung aus überschaubarem Regen, niedrigeren Preisen und weniger Andrang an großen Sehenswürdigkeiten wie Sigiriya und dem Zahntempel. Kurze, intensive Nachmittagsschauer statt tagelangem Regen sind in diesen Zeiträumen typisch.\n\nEin privater Fahrer-Guide, der den Tagesplan in Echtzeit ans Wetter anpassen kann, ist in der Zwischensaison besonders wertvoll, wenn sich die Bedingungen innerhalb derselben Woche von Region zu Region ändern können.',
      },
    ],
    faq: [
      {
        q: 'Was ist der eine beste Monat, um Sri Lanka zu besuchen?',
        a: 'Es gibt keinen – es hängt ganz davon ab, welche Regionen Sie besuchen möchten. Februar ist eine relativ sichere Rundum-Wahl, da er sowohl für die West-/Südküste als auch für das Kulturdreieck in die Trockenzeit fällt, aber eine gut geplante Route funktioniert in fast jedem Monat.',
      },
      {
        q: 'Wann ist die Regenzeit in Sri Lanka?',
        a: 'Der Südwestmonsun dauert etwa von Mai bis September und betrifft Westküste, Südküste und Bergland; der Nordostmonsun dauert etwa von Oktober bis Januar und betrifft die Ostküste und Teile des Kulturdreiecks. Beide überlappen sich selten.',
      },
      {
        q: 'Lohnt sich Sri Lanka in der Nebensaison?',
        a: 'Ja, besonders preislich und wegen weniger Andrang – Regen in den Tropen ist meist ein kräftiger Nachmittagsschauer, kein Regentag durchgehend, und eine flexible Route mit privatem Fahrer kann die feuchtesten Regionen an jedem Tag umgehen.',
      },
      {
        q: 'Wann sollte ich eine Yala-Safari für die besten Sichtungschancen buchen?',
        a: 'Mai bis September bietet allgemein die besten Chancen, da die Trockenzeit Wildtiere um weniger Wasserlöcher konzentriert. Der Park schließt jedes Jahr für etwa einen Monat, meist im September, wegen Habitatpflege.',
      },
      {
        q: 'Gibt es in Sri Lanka eine Hurrikan- oder Zyklonsaison?',
        a: 'Sri Lanka liegt südlich des Hauptzyklongürtels und wird selten direkt getroffen, obwohl Monsuntiefs vor allem der Ostküste um November starken, anhaltenden Regen bringen können.',
      },
    ],
    ctaTitle: 'Lassen Sie uns Ihre Route ums Wetter herum planen',
    ctaBody: 'Unsere privaten Rundreisen mit Fahrer werden monatsgenau um Sri Lankas zwei Monsune geplant und führen Sie zu den Regionen, die an Ihren Reisedaten am trockensten sind.',
    ctaLabel: 'Reise nach Saison planen',
    relatedTours: [
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala-Nationalpark' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt-Ratgeber' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste-Ratgeber' },
    ],
  }
};
