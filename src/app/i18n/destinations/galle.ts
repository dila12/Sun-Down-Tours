import type { ArticleContent } from '../articles/types';

/**
 * Galle destination guide (pageId: destGalle).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const GALLE_DEST: ArticleContent = {
  en: {
    h1: 'Galle, Sri Lanka: A Fortified Colonial City on the Southern Coast',
    lead: 'Behind ramparts built by the Dutch on Portuguese foundations, Galle Fort is a living UNESCO World Heritage town cobbled lanes, colonial villas turned boutique hotels, and a working lighthouse still guiding ships past the same reef that has shaped this coast for centuries.',
    heroImage: 'assets/img/destination-6.webp',
    heroAlt: 'Galle Fort ramparts and lighthouse overlooking the Indian Ocean',
    sections: [
      {
        id: 'history',
        title: 'Portuguese origins, Dutch fortifications',
        body: 'The Portuguese built the first fort here in 1588, but it was the Dutch, who took control in 1640, who built the massive granite ramparts and bastions that still enclose the old town today. The fort changed hands again in 1796 when the British took Ceylon, though they largely preserved rather than replaced the Dutch layout.\n\nGalle Fort survived the devastating 2004 Indian Ocean tsunami with far less structural damage than the unwalled areas around it, a fact often credited to the same ramparts built centuries earlier for an entirely different threat.',
      },
      {
        id: 'culture',
        title: 'A genuine living heritage town',
        body: 'Unlike many restored colonial sites, Galle Fort is not a museum pieceund 400 families still live inside the walls, alongside boutique hotels, cafés and galleries in converted Dutch merchant houses. Mosques, churches and Buddhist temples sit within a few streets of each other, reflecting the trading-post diversity that shaped the town for four centuries.\n\nUNESCO listed the fort as a World Heritage Site in 1988, recognising it as the best-preserved example of a fortified colonial city built by Europeans in South and Southeast Asia.',
      },
      {
        id: 'thingsToDo',
        title: 'What to do in Galle',
        body: 'Walking the ramparts, roughly 90 minutes at an easy pace, is the essential Galle activityalls circle the entire peninsula and offer sea views on one side and rooftops on the other, best done at sunset when the light softens over the ocean. The Dutch Reformed Church, the old Dutch hospital (now shops and restaurants) and the National Maritime Museum fill in the historical detail.\n\nGalle’s narrow streets reward slow, aimless wandering more than any checklist of sights: independent boutiques selling batik, jewellery and antiques occupy converted colonial storefronts throughout the fort, and stopping for a coffee in a shaded courtyard is as much the point as any single monument.',
      },
      {
        id: 'travelTips',
        title: 'Practical tips for visiting',
        body: 'Galle Fort is genuinely walkable and largely car-free inside the walls, so leave your vehicle at a car park near the entrance and explore on foot. The cobbled lanes and uneven pavements make comfortable shoes more useful than anything else you pack.\n\nMidday sun on the exposed ramparts is intense; an early morning or late afternoon walk is far more pleasant than a visit at noon, and doubles as the best light for photography.',
      },
      {
        id: 'weather',
        title: 'Weather in Galle',
        body: 'Galle sits on the south-west coast, in the wetter of Sri Lanka’s two monsoon zones, with the main monsoon roughly May to September bringing the heaviest rain and rougher seas. December to March is generally the driest, sunniest stretch and the most popular season for both the fort and the surrounding beaches.\n\nEven in the drier months, brief showers are possible; the covered arcades of the old Dutch hospital and several fort cafés make convenient shelter if one catches you out.',
      },
      {
        id: 'nearby',
        title: 'Nearby attractions worth combining',
        body: 'Unawatuna and Mirissa, two of the south coast’s best-known beach towns, are 15–30 minutes and around an hour away respectively, making Galle an easy half-day cultural break from a beach-based stay. Whale watching boats depart from Mirissa in season (roughly November to April), often combined with a Galle Fort morning.\n\nKoggala and Weligama, known for stilt fishermen and surf breaks, sit along the same coastal road and suit travellers building a slower south-coast itinerary around Galle.',
      },
      {
        id: 'hotels',
        title: 'Where to stay',
        body: 'Staying inside the fort walls, in one of the many converted Dutch or colonial-era villas turned boutique guesthouses, is the most atmospheric option and puts every sight within a short walk. Rooms here book out well ahead in high season given how few properties the historic core can hold.\n\nOutside the walls, the wider Galle area and nearby beach towns offer far more choice at every price point, a practical option if fort accommodation is full or beyond budget.',
      },
      {
        id: 'restaurants',
        title: 'Eating in Galle',
        body: 'Galle Fort has one of the best small-scale dining scenes in Sri Lanka, with cafés and restaurants in converted colonial buildings serving everything from fresh seafood and Sri Lankan rice and curry to genuinely good coffee, pastries and international menus aimed at longer-staying travellers.\n\nFor the freshest catch, several restaurants source directly from the Galle fish market just outside the fort walls, and a seafood dinner here, particularly grilled fish or prawns, is one of the south coast’s reliable highlights.',
      },
    ],
    faq: [
      {
        q: 'How much time do I need to see Galle Fort?',
        a: 'Half a day covers the ramparts walk and main sights comfortably; a full day, or an overnight stay inside the fort, allows time to browse the boutiques, museums and cafés at an unhurried pace.',
      },
      {
        q: 'Is Galle Fort walkable, or do I need transport inside?',
        a: 'It is entirely walkable old town is small and largely pedestrian-friendly, with cars generally kept to the edges. This is one of the easiest historic sites in Sri Lanka to explore without a guide.',
      },
      {
        q: 'What is the best time of day to walk the Galle ramparts?',
        a: 'Early morning or the hour before sunset, both for cooler temperatures and for the best light over the ocean. Midday sun on the exposed walls is intense and best avoided.',
      },
      {
        q: 'Can I combine Galle with beach time on the south coast?',
        a: 'Yesna and Mirissa are both under an hour away, making a Galle Fort morning followed by a beach afternoon a common and easy combination on south-coast itineraries.',
      },
      {
        q: 'Is Galle Fort a good base for exploring the south coast?',
        a: 'It can be, especially for travellers who value culture and dining as much as beach time, though many prefer to stay in a beach town nearby and visit Galle Fort as a half-day excursion.',
      },
    ],
    ctaTitle: 'Add Galle to your south coast route',
    ctaBody: 'Our private tours combine Galle Fort with the south coast beaches, Yala National Park and, on longer itineraries, whale watching in Mirissa, with your chauffeur guide handling the driving between each stop.',
    ctaLabel: 'Plan your Galle visit',
    relatedTours: [
      { pageId: 'galleDay', label: 'Galle Day Tour' },
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
      { pageId: 'tour10', label: '10 Day Sri Lanka Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala National Park' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Sri Lanka Beaches Guide' },
      { pageId: 'guideFood', label: 'Sri Lanka Food Guide' },
    ],
  },

  de: {
    h1: 'Galle, Sri Lanka: eine befestigte Kolonialstadt an der Südküste',
    lead: 'Hinter Wällen, die die Niederländer auf portugiesischen Fundamenten errichteten, ist Galle Fort eine lebendige UNESCO-Welterbestadt – Kopfsteinpflastergassen, koloniale Villen als Boutique-Hotels und ein aktiver Leuchtturm, der Schiffe noch immer an demselben Riff vorbeileitet, das diese Küste seit Jahrhunderten prägt.',
    heroAlt: 'Die Wälle und der Leuchtturm von Galle Fort mit Blick auf den Indischen Ozean',
    sections: [
      {
        title: 'Portugiesische Ursprünge, niederländische Befestigungen',
        body: 'Die Portugiesen errichteten hier 1588 die erste Festung, doch waren es die Niederländer, die 1640 die Kontrolle übernahmen, die die massiven Granitwälle und Bastionen bauten, die die Altstadt noch heute umschließen. Die Festung wechselte 1796 erneut den Besitzer, als die Briten Ceylon einnahmen, bewahrten dabei aber weitgehend die niederländische Anlage, statt sie zu ersetzen.\n\nGalle Fort überstand die verwüstende Tsunami-Katastrophe im Indischen Ozean 2004 mit weit geringeren strukturellen Schäden als die ungeschützten Gebiete drumherum – ein Umstand, der oft denselben Jahrhunderte zuvor für eine ganz andere Bedrohung errichteten Wällen zugeschrieben wird.',
      },
      {
        title: 'Eine wirklich lebendige Erbestadt',
        body: 'Anders als viele restaurierte Kolonialstätten ist Galle Fort kein Museumsstück – rund 400 Familien leben noch immer innerhalb der Mauern, neben Boutique-Hotels, Cafés und Galerien in umgebauten niederländischen Handelshäusern. Moscheen, Kirchen und buddhistische Tempel liegen wenige Straßen voneinander entfernt und spiegeln die Vielfalt des Handelsposten wider, die die Stadt über vier Jahrhunderte prägte.\n\n1991 nahm die UNESCO die Festung als Weltkulturerbe auf und würdigte sie als das am besten erhaltene Beispiel einer von Europäern errichteten befestigten Kolonialstadt in Süd- und Südostasien.',
      },
      {
        title: 'Was man in Galle unternehmen sollte',
        body: 'Der Spaziergang auf den Wällen, etwa 90 Minuten in gemächlichem Tempo, ist die zentrale Aktivität in Galle – die Mauern umschließen die gesamte Halbinsel und bieten auf der einen Seite Meerblick, auf der anderen Blicke über die Dächer; am schönsten bei Sonnenuntergang, wenn sich das Licht über dem Ozean weicher zeigt. Die niederländisch-reformierte Kirche, das alte niederländische Krankenhaus (heute Geschäfte und Restaurants) und das Nationale Meeresmuseum ergänzen die historischen Details.\n\nGalles enge Straßen belohnen langsames, ziellloses Schlendern mehr als jede Sehenswürdigkeiten-Checkliste: Unabhängige Boutiquen mit Batik, Schmuck und Antiquitäten füllen die umgebauten Kolonialläden im gesamten Fort, und eine Kaffeepause in einem schattigen Innenhof ist genauso wichtig wie jedes einzelne Denkmal.',
      },
      {
        title: 'Praktische Tipps für den Besuch',
        body: 'Galle Fort ist wirklich zu Fuß erkundbar und innerhalb der Mauern weitgehend autofrei – lassen Sie Ihr Fahrzeug auf einem Parkplatz nahe dem Eingang stehen und erkunden Sie den Ort zu Fuß. Die Kopfsteinpflastergassen und unebenen Gehwege machen bequeme Schuhe nützlicher als alles andere, was Sie einpacken.\n\nDie Mittagssonne auf den exponierten Wällen ist intensiv; ein früher Morgen- oder späterer Nachmittagsspaziergang ist deutlich angenehmer als ein Besuch um die Mittagszeit und bietet zugleich das beste Fotolicht.',
      },
      {
        title: 'Wetter in Galle',
        body: 'Galle liegt an der Südwestküste, in der feuchteren der beiden Monsunzonen Sri Lankas; der Hauptmonsun etwa von Mai bis September bringt den stärksten Regen und rauere See. Dezember bis März ist meist die trockenste, sonnigste Phase und die beliebteste Saison sowohl für die Festung als auch für die umliegenden Strände.\n\nSelbst in den trockeneren Monaten sind kurze Schauer möglich; die überdachten Arkaden des alten niederländischen Krankenhauses und mehrere Cafés im Fort bieten bequemen Schutz, falls Sie einer davon überrascht.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Unawatuna und Mirissa, zwei der bekanntesten Strandorte der Südküste, liegen 15–30 Minuten bzw. etwa eine Stunde entfernt, was Galle zu einer einfachen halbtägigen kulturellen Abwechslung während eines Strandaufenthalts macht. Wal-Beobachtungsboote starten in der Saison (etwa November bis April) von Mirissa, oft kombiniert mit einem Vormittag in Galle Fort.\n\nKoggala und Weligama, bekannt für Stelzenfischer und Surf-Spots, liegen an derselben Küstenstraße und passen zu Reisenden, die eine ruhigere Südküsten-Route rund um Galle planen.',
      },
      {
        title: 'Wo man übernachten kann',
        body: 'Ein Aufenthalt innerhalb der Festungsmauern, in einer der vielen umgebauten niederländischen oder kolonialen Villen als Boutique-Gästehaus, ist die stimmungsvollste Option und bringt jede Sehenswürdigkeit in kurze Gehdistanz. Zimmer hier sind in der Hochsaison weit im Voraus ausgebucht, angesichts der wenigen Unterkünfte, die der historische Kern fasst.\n\nAußerhalb der Mauern bieten das weitere Galle-Gebiet und nahe Strandorte deutlich mehr Auswahl in jeder Preisklasse – eine praktische Option, wenn Unterkünfte im Fort ausgebucht oder zu teuer sind.',
      },
      {
        title: 'Essen in Galle',
        body: 'Galle Fort hat eine der besten kleinen Gastro-Szenen Sri Lankas, mit Cafés und Restaurants in umgebauten Kolonialgebäuden, die von frischen Meeresfrüchten und srilankischem Rice and Curry bis zu wirklich gutem Kaffee, Gebäck und internationalen Menüs für länger bleibende Reisende alles bieten.\n\nFür den frischesten Fang beziehen mehrere Restaurants direkt vom Galle-Fischmarkt gleich vor den Festungsmauern, und ein Meeresfrüchte-Abendessen hier, besonders gegrillter Fisch oder Garnelen, gehört zu den verlässlichen Höhepunkten der Südküste.',
      },
    ],
    faq: [
      {
        q: 'Wie viel Zeit brauche ich für Galle Fort?',
        a: 'Ein halber Tag deckt den Wallspaziergang und die Hauptsehenswürdigkeiten bequem ab; ein ganzer Tag oder eine Übernachtung innerhalb der Festung erlaubt es, Boutiquen, Museen und Cafés ohne Zeitdruck zu erkunden.',
      },
      {
        q: 'Ist Galle Fort zu Fuß erkundbar, oder braucht man Transport innerhalb?',
        a: 'Es ist vollständig zu Fuß erkundbar – die Altstadt ist klein und weitgehend fußgängerfreundlich, Autos bleiben meist an den Rändern. Dies ist eine der einfachsten historischen Stätten Sri Lankas, die man ohne Guide erkunden kann.',
      },
      {
        q: 'Was ist die beste Tageszeit für einen Spaziergang auf den Wällen von Galle?',
        a: 'Früher Morgen oder die Stunde vor Sonnenuntergang – beides für kühlere Temperaturen und das schönste Licht über dem Ozean. Die Mittagssonne auf den exponierten Mauern ist intensiv und sollte vermieden werden.',
      },
      {
        q: 'Kann ich Galle mit Strandzeit an der Südküste kombinieren?',
        a: 'Ja – Unawatuna und Mirissa sind beide weniger als eine Stunde entfernt, sodass ein Vormittag in Galle Fort gefolgt von einem Strandnachmittag eine übliche und einfache Kombination auf Südküsten-Routen ist.',
      },
      {
        q: 'Ist Galle Fort eine gute Basis, um die Südküste zu erkunden?',
        a: 'Das kann es sein, besonders für Reisende, die Kultur und Gastronomie ebenso schätzen wie Strandzeit, doch viele bevorzugen einen nahen Strandort als Basis und besuchen Galle Fort als halbtägigen Ausflug.',
      },
    ],
    ctaTitle: 'Nehmen Sie Galle in Ihre Südküsten-Route auf',
    ctaBody: 'Unsere privaten Rundreisen verbinden Galle Fort mit den Strände der Südküste, dem Yala-Nationalpark und, auf längeren Routen, Whale Watching in Mirissa – Ihr Fahrer-Guide übernimmt die Fahrt zwischen jedem Stopp.',
    ctaLabel: 'Galle-Besuch planen',
    relatedTours: [
      { pageId: 'galleDay', label: 'Galle Tagestour' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour10', label: '10-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala-Nationalpark' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Sri Lanka Strände-Ratgeber' },
      { pageId: 'guideFood', label: 'Sri Lanka Kulinarik-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Galle, Sri Lanka : une ville coloniale fortifiée sur la côte sud',
    lead: 'Derrière des remparts construits par les Néerlandais sur des fondations portugaises, le fort de Galle est une ville vivante classée au patrimoine mondial de l’UNESCOes pavées, villas coloniales transformées en hôtels de charme, et un phare toujours en activité guidant les navires au-delà du même récif qui façonne cette côte depuis des siècles.',
    heroAlt: 'Les remparts et le phare du fort de Galle surplombant l’océan Indien',
    sections: [
      {
        title: 'Origines portugaises, fortifications néerlandaises',
        body: 'Les Portugais construisirent ici le premier fort en 1588, mais ce sont les Néerlandais, qui prirent le contrôle en 1640, qui édifièrent les massifs remparts et bastions de granit qui enserrent encore la vieille ville aujourd’hui. Le fort changea de mains à nouveau en 1796 lorsque les Britanniques prirent Ceylan, mais ceux-ci préservèrent largement le plan néerlandais plutôt que de le remplacer.\n\nLe fort de Galle survécut au dévastateur tsunami de l’océan Indien de 2004 avec bien moins de dégâts structurels que les zones non fortifiées alentour, un fait souvent attribué aux mêmes remparts bâtis des siècles plus tôt pour une menace tout autre.',
      },
      {
        title: 'Une véritable ville-héritage vivante',
        body: 'Contrairement à de nombreux sites coloniaux restaurés, le fort de Galle n’est pas une pièce de musée 400 familles vivent encore à l’intérieur des murs, aux côtés d’hôtels de charme, de cafés et de galeries installés dans d’anciennes maisons de négociants néerlandais. Mosquées, églises et temples bouddhistes se côtoient à quelques rues d’intervalle, reflétant la diversité de ce comptoir commercial qui a façonné la ville durant quatre siècles.\n\nL’UNESCO a inscrit le fort au patrimoine mondial en 1988, le reconnaissant comme le meilleur exemple préservé d’une ville coloniale fortifiée construite par des Européens en Asie du Sud et du Sud-Est.',
      },
      {
        title: 'Que faire à Galle',
        body: 'Marcher sur les remparts, environ 90 minutes à allure tranquille, est l’activité incontournable de Galleurs encerclent toute la péninsule et offrent des vues sur la mer d’un côté et sur les toits de l’autre, idéalement au coucher du soleil quand la lumière s’adoucit sur l’océan. L’église réformée néerlandaise, l’ancien hôpital néerlandais (aujourd’hui boutiques et restaurants) et le Musée maritime national complètent le tableau historique.\n\nLes rues étroites de Galle récompensent la déambulation lente et sans but plus que toute liste de sites à voir : des boutiques indépendantes vendant batiks, bijoux et antiquités occupent des devantures coloniales reconverties dans tout le fort, et s’arrêter pour un café dans une cour ombragée compte tout autant que n’importe quel monument.',
      },
      {
        title: 'Conseils pratiques pour la visite',
        body: 'Le fort de Galle se parcourt vraiment à pied et reste largement sans voitures à l’intérieur des murs ; laissez donc votre véhicule sur un parking près de l’entrée et explorez à pied. Les ruelles pavées et les trottoirs irréguliers rendent des chaussures confortables plus utiles que tout autre chose à emporter.\n\nLe soleil de midi sur les remparts exposés est intense ; une promenade tôt le matin ou en fin d’après-midi est bien plus agréable qu’une visite à midi, et offre aussi la meilleure lumière pour la photographie.',
      },
      {
        title: 'Météo à Galle',
        body: 'Galle se trouve sur la côte sud-ouest, dans la plus humide des deux zones de mousson du Sri Lanka, la mousson principale de mai à septembre environ apportant les pluies les plus fortes et une mer plus agitée. Décembre à mars est en général la période la plus sèche et la plus ensoleillée, et la saison la plus prisée aussi bien pour le fort que pour les plages environnantes.\n\nMême durant les mois les plus secs, de brèves averses restent possibles ; les arcades couvertes de l’ancien hôpital néerlandais et plusieurs cafés du fort offrent un abri pratique en cas de surprise.',
      },
      {
        title: 'Sites à combiner aux alentours',
        body: 'Unawatuna et Mirissa, deux des villes balnéaires les plus connues de la côte sud, se trouvent respectivement à 15-30 minutes et environ une heure, faisant de Galle une escapade culturelle facile d’une demi-journée depuis un séjour à la plage. Des bateaux d’observation des baleines partent de Mirissa en saison (environ novembre à avril), souvent combinés avec une matinée au fort de Galle.\n\nKoggala et Weligama, connues pour leurs pêcheurs sur échasses et leurs spots de surf, se trouvent sur la même route côtière et conviennent aux voyageurs élaborant un itinéraire plus lent sur la côte sud autour de Galle.',
      },
      {
        title: 'Où loger',
        body: 'Loger à l’intérieur des murs du fort, dans l’une des nombreuses villas néerlandaises ou d’époque coloniale reconverties en pensions de charme, est l’option la plus atmosphérique et met chaque site à quelques minutes à pied. Les chambres ici se réservent bien à l’avance en haute saison, étant donné le peu d’établissements que le cœur historique peut accueillir.\n\nÀ l’extérieur des murs, la zone élargie de Galle et les villes balnéaires proches offrent un choix bien plus large à tous les prix, une option pratique si les hébergements du fort sont complets ou hors budget.',
      },
      {
        title: 'Se restaurer à Galle',
        body: 'Le fort de Galle possède l’une des meilleures scènes gastronomiques à petite échelle du Sri Lanka, avec des cafés et restaurants installés dans des bâtiments coloniaux reconvertis servant tout, des fruits de mer frais et du rice and curry sri-lankais à un vrai bon café, des pâtisseries et des menus internationaux destinés aux voyageurs qui restent plus longtemps.\n\nPour la pêche la plus fraîche, plusieurs restaurants s’approvisionnent directement au marché aux poissons de Galle, juste à l’extérieur des remparts, et un dîner de fruits de mer ici, en particulier du poisson grillé ou des crevettes, compte parmi les valeurs sûres de la côte sud.',
      },
    ],
    faq: [
      {
        q: 'Combien de temps faut-il pour visiter le fort de Galle ?',
        a: 'Une demi-journée couvre confortablement la marche sur les remparts et les sites principaux ; une journée complète, ou une nuit à l’intérieur du fort, laisse le temps de flâner dans les boutiques, musées et cafés sans se presser.',
      },
      {
        q: 'Le fort de Galle se visite-t-il à pied, ou faut-il un transport à l’intérieur ?',
        a: 'Il se visite entièrement à pieda vieille ville est petite et largement adaptée aux piétons, les voitures restant généralement en périphérie. C’est l’un des sites historiques les plus faciles du Sri Lanka à explorer sans guide.',
      },
      {
        q: 'Quel est le meilleur moment de la journée pour marcher sur les remparts de Galle ?',
        a: 'Le matin tôt ou l’heure précédant le coucher du soleil, à la fois pour des températures plus fraîches et pour la meilleure lumière sur l’océan. Le soleil de midi sur les murs exposés est intense et mieux évité.',
      },
      {
        q: 'Puis-je combiner Galle avec du temps à la plage sur la côte sud ?',
        a: 'Oui Unawatuna et Mirissa sont toutes deux à moins d’une heure, faisant d’une matinée au fort de Galle suivie d’un après-midi à la plage une combinaison courante et facile sur les itinéraires de la côte sud.',
      },
      {
        q: 'Le fort de Galle est-il une bonne base pour explorer la côte sud ?',
        a: 'Cela peut l’être, surtout pour les voyageurs qui accordent autant d’importance à la culture et à la gastronomie qu’à la plage, bien que beaucoup préfèrent séjourner dans une ville balnéaire proche et visiter le fort de Galle en excursion d’une demi-journée.',
      },
    ],
    ctaTitle: 'Ajoutez Galle à votre itinéraire côte sud',
    ctaBody: 'Nos circuits privés combinent le fort de Galle avec les plages de la côte sud, le parc national de Yala et, sur des itinéraires plus longs, l’observation des baleines à Mirissa, votre chauffeur-guide se chargeant de la conduite entre chaque étape.',
    ctaLabel: 'Planifier votre visite de Galle',
    relatedTours: [
      { pageId: 'galleDay', label: 'Excursion d’une journée à Galle' },
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
      { pageId: 'tour10', label: 'Circuit de 10 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parc national de Yala' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Guide des plages du Sri Lanka' },
      { pageId: 'guideFood', label: 'Guide gastronomique du Sri Lanka' },
    ],
  },

  it: {
    h1: 'Galle, Sri Lanka: una città coloniale fortificata sulla costa meridionale',
    lead: 'Dietro bastioni costruiti dagli olandesi su fondamenta portoghesi, il Forte di Galle è una città vivente patrimonio UNESCOiuzze in pietra, ville coloniali trasformate in boutique hotel e un faro ancora attivo che guida le navi oltre la stessa barriera corallina che modella questa costa da secoli.',
    heroAlt: 'I bastioni e il faro del Forte di Galle sull’Oceano Indiano',
    sections: [
      {
        title: 'Origini portoghesi, fortificazioni olandesi',
        body: 'I portoghesi costruirono qui il primo forte nel 1588, ma furono gli olandesi, che ne presero il controllo nel 1640, a costruire i massicci bastioni e mura in granito che ancora oggi racchiudono la città vecchia. Il forte cambiò nuovamente mano nel 1796, quando i britannici presero Ceylon, sebbene questi preservarono in gran parte l’impianto olandese piuttosto che sostituirlo.\n\nIl Forte di Galle sopravvisse al devastante tsunami dell’Oceano Indiano del 2004 con danni strutturali molto inferiori rispetto alle zone non murate circostanti, un fatto spesso attribuito agli stessi bastioni costruiti secoli prima per una minaccia del tutto diversa.',
      },
      {
        title: 'Una vera città-patrimonio vivente',
        body: 'A differenza di molti siti coloniali restaurati, il Forte di Galle non è un pezzo da museo circa 400 famiglie vivono ancora dentro le mura, insieme a boutique hotel, caffè e gallerie in case mercantili olandesi convertite. Moschee, chiese e templi buddhisti si trovano a poche strade di distanza l’uno dall’altro, riflettendo la diversità dell’avamposto commerciale che ha modellato la città per quattro secoli.\n\nL’UNESCO ha inserito il forte nel Patrimonio dell’Umanità nel 1988, riconoscendolo come il miglior esempio conservato di città coloniale fortificata costruita dagli europei nell’Asia meridionale e sud-orientale.',
      },
      {
        title: 'Cosa fare a Galle',
        body: 'Camminare sui bastioni, circa 90 minuti con passo tranquillo, è l’attività essenziale di Galle le mura circondano l’intera penisola e offrono vista mare da un lato e sui tetti dall’altro, ideale al tramonto quando la luce si addolcisce sull’oceano. La Chiesa Riformata Olandese, il vecchio ospedale olandese (oggi negozi e ristoranti) e il Museo Marittimo Nazionale completano il quadro storico.\n\nLe strette vie di Galle premiano il vagabondare lento e senza meta più di qualsiasi lista di luoghi da vedere: boutique indipendenti che vendono batik, gioielli e antiquariato occupano vetrine coloniali riconvertite in tutto il forte, e fermarsi per un caffè in un cortile ombreggiato conta quanto qualsiasi singolo monumento.',
      },
      {
        title: 'Consigli pratici per la visita',
        body: 'Il Forte di Galle è genuinamente percorribile a piedi e in gran parte privo di auto all’interno delle mura, quindi lasciate il veicolo in un parcheggio vicino all’ingresso ed esplorate a piedi. I vicoli in pietra e i marciapiedi irregolari rendono scarpe comode più utili di qualsiasi altra cosa portiate.\n\nIl sole di mezzogiorno sui bastioni esposti è intenso; una passeggiata al mattino presto o nel tardo pomeriggio è molto più piacevole di una visita a mezzogiorno, e offre anche la migliore luce per le fotografie.',
      },
      {
        title: 'Clima a Galle',
        body: 'Galle si trova sulla costa sud-occidentale, nella più umida delle due zone monsoniche dello Sri Lanka, con il monsone principale da maggio a settembre circa che porta le piogge più intense e un mare più agitato. Da dicembre a marzo si ha generalmente il periodo più secco e soleggiato, la stagione più popolare sia per il forte che per le spiagge circostanti.\n\nAnche nei mesi più secchi sono possibili brevi rovesci; i porticati coperti del vecchio ospedale olandese e diversi caffè del forte offrono un comodo riparo in caso di sorpresa.',
      },
      {
        title: 'Attrazioni nei dintorni da abbinare',
        body: 'Unawatuna e Mirissa, due delle località balneari più note della costa meridionale, distano rispettivamente 15-30 minuti e circa un’ora, rendendo Galle una facile pausa culturale di mezza giornata durante un soggiorno al mare. Le barche per l’avvistamento delle balene partono da Mirissa in stagione (circa da novembre ad aprile), spesso abbinate a una mattinata al Forte di Galle.\n\nKoggala e Weligama, note per i pescatori su palafitte e i punti di surf, si trovano sulla stessa strada costiera e sono adatte a chi costruisce un itinerario più lento sulla costa sud attorno a Galle.',
      },
      {
        title: 'Dove alloggiare',
        body: 'Alloggiare dentro le mura del forte, in una delle molte ville olandesi o di epoca coloniale trasformate in guesthouse boutique, è l’opzione più suggestiva e mette ogni luogo a pochi passi. Le camere qui si prenotano con largo anticipo in alta stagione, dato il numero limitato di strutture che il nucleo storico può ospitare.\n\nFuori dalle mura, l’area più ampia di Galle e le vicine località balneari offrono una scelta molto più ampia a ogni fascia di prezzo, un’opzione pratica se gli alloggi nel forte sono al completo o fuori budget.',
      },
      {
        title: 'Dove mangiare a Galle',
        body: 'Il Forte di Galle ha una delle migliori scene gastronomiche su piccola scala dello Sri Lanka, con caffè e ristoranti in edifici coloniali convertiti che servono di tutto, dai frutti di mare freschi e rice and curry singalese a un caffè davvero buono, pasticceria e menu internazionali pensati per i viaggiatori con soggiorni più lunghi.\n\nPer il pescato più fresco, diversi ristoranti si approvvigionano direttamente dal mercato del pesce di Galle, appena fuori le mura, e una cena di pesce qui, in particolare pesce grigliato o gamberi, è uno dei punti forti affidabili della costa meridionale.',
      },
    ],
    faq: [
      {
        q: 'Quanto tempo serve per visitare il Forte di Galle?',
        a: 'Mezza giornata copre comodamente la passeggiata sui bastioni e i luoghi principali; una giornata intera, o un pernottamento dentro il forte, permette di girare tra boutique, musei e caffè senza fretta.',
      },
      {
        q: 'Il Forte di Galle si visita a piedi o serve un mezzo di trasporto interno?',
        a: 'Si visita interamente a piedi la città vecchia è piccola e in gran parte adatta ai pedoni, con le auto generalmente relegate ai margini. È uno dei siti storici più facili da esplorare in Sri Lanka senza guida.',
      },
      {
        q: 'Qual è il momento migliore della giornata per camminare sui bastioni di Galle?',
        a: 'Il mattino presto o l’ora prima del tramonto, sia per temperature più fresche che per la luce migliore sull’oceano. Il sole di mezzogiorno sulle mura esposte è intenso ed è meglio evitarlo.',
      },
      {
        q: 'Posso combinare Galle con il mare sulla costa sud?',
        a: 'Sì Unawatuna e Mirissa sono entrambe a meno di un’ora, rendendo una mattinata al Forte di Galle seguita da un pomeriggio al mare una combinazione comune e semplice sugli itinerari della costa sud.',
      },
      {
        q: 'Il Forte di Galle è una buona base per esplorare la costa sud?',
        a: 'Può esserlo, specialmente per i viaggiatori che apprezzano cultura e gastronomia quanto il mare, sebbene molti preferiscano soggiornare in una località balneare vicina e visitare il Forte di Galle come escursione di mezza giornata.',
      },
    ],
    ctaTitle: 'Aggiungi Galle al tuo itinerario sulla costa sud',
    ctaBody: 'I nostri tour privati combinano il Forte di Galle con le spiagge della costa sud, il parco nazionale di Yala e, negli itinerari più lunghi, l’avvistamento delle balene a Mirissa, con il vostro autista-guida che gestisce la guida tra ogni tappa.',
    ctaLabel: 'Pianifica la tua visita a Galle',
    relatedTours: [
      { pageId: 'galleDay', label: 'Tour di un giorno a Galle' },
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
      { pageId: 'tour10', label: 'Tour di 10 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parco nazionale di Yala' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Guida alle spiagge dello Sri Lanka' },
      { pageId: 'guideFood', label: 'Guida gastronomica dello Sri Lanka' },
    ],
  },

  es: {
    h1: 'Galle, Sri Lanka: una ciudad colonial fortificada en la costa sur',
    lead: 'Tras murallas construidas por los holandeses sobre cimientos portugueses, el Fuerte de Galle es una ciudad viva declarada Patrimonio de la Humanidad por la UNESCO: calles empedradas, villas coloniales convertidas en hoteles boutique y un faro en activo que sigue guiando barcos más allá del mismo arrecife que ha marcado esta costa durante siglos.',
    heroAlt: 'Las murallas y el faro del Fuerte de Galle frente al océano Índico',
    sections: [
      {
        title: 'Orígenes portugueses, fortificaciones holandesas',
        body: 'Los portugueses construyeron aquí el primer fuerte en 1588, pero fueron los holandeses, que tomaron el control en 1640, quienes levantaron las macizas murallas y bastiones de granito que aún rodean el casco antiguo hoy en día. El fuerte cambió de manos de nuevo en 1796, cuando los británicos tomaron Ceilán, aunque estos preservaron en gran medida el trazado holandés en lugar de sustituirlo.\n\nEl Fuerte de Galle sobrevivió al devastador tsunami del océano Índico de 2004 con muchos menos daños estructurales que las zonas sin murallas de alrededor, un hecho que a menudo se atribuye a las mismas murallas construidas siglos antes para una amenaza completamente distinta.',
      },
      {
        title: 'Una auténtica ciudad-patrimonio viva',
        body: 'A diferencia de muchos sitios coloniales restaurados, el Fuerte de Galle no es una pieza de museo: alrededor de 400 familias siguen viviendo dentro de las murallas, junto a hoteles boutique, cafés y galerías en antiguas casas de comerciantes holandeses reconvertidas. Mezquitas, iglesias y templos budistas se encuentran a pocas calles unos de otros, reflejo de la diversidad de este puesto comercial que dio forma a la ciudad durante cuatro siglos.\n\nLa UNESCO declaró el fuerte Patrimonio de la Humanidad en 1988, reconociéndolo como el mejor ejemplo conservado de ciudad colonial fortificada construida por europeos en el sur y sudeste de Asia.',
      },
      {
        title: 'Qué hacer en Galle',
        body: 'Caminar por las murallas, unos 90 minutos a paso tranquilo, es la actividad esencial en Galle: los muros rodean toda la península y ofrecen vistas al mar por un lado y a los tejados por el otro, ideal al atardecer, cuando la luz se suaviza sobre el océano. La Iglesia Reformada Holandesa, el antiguo hospital holandés (hoy tiendas y restaurantes) y el Museo Marítimo Nacional completan el cuadro histórico.\n\nLas estrechas calles de Galle recompensan el paseo lento y sin rumbo más que cualquier lista de lugares que ver: boutiques independientes que venden batik, joyas y antigüedades ocupan escaparates coloniales reconvertidos por todo el fuerte, y detenerse a tomar un café en un patio con sombra cuenta tanto como cualquier monumento concreto.',
      },
      {
        title: 'Consejos prácticos para la visita',
        body: 'El Fuerte de Galle se recorre realmente a pie y está en gran parte libre de coches dentro de las murallas, así que deje su vehículo en un aparcamiento cerca de la entrada y explore andando. Las calles empedradas y las aceras irregulares hacen que un calzado cómodo sea más útil que cualquier otra cosa que lleve.\n\nEl sol de mediodía sobre las murallas expuestas es intenso; un paseo a primera hora de la mañana o última de la tarde resulta mucho más agradable que una visita al mediodía, y ofrece además la mejor luz para fotografiar.',
      },
      {
        title: 'Clima en Galle',
        body: 'Galle se encuentra en la costa suroeste, en la más húmeda de las dos zonas monzónicas de Sri Lanka, con el monzón principal, aproximadamente de mayo a septiembre, traiendo las lluvias más intensas y un mar más agitado. Diciembre a marzo suele ser el periodo más seco y soleado, y la temporada más popular tanto para el fuerte como para las playas circundantes.\n\nIncluso en los meses más secos son posibles chubascos breves; los soportales cubiertos del antiguo hospital holandés y varios cafés del fuerte ofrecen refugio práctico si le pilla uno por sorpresa.',
      },
      {
        title: 'Atracciones cercanas para combinar',
        body: 'Unawatuna y Mirissa, dos de las localidades de playa más conocidas de la costa sur, están a 15-30 minutos y a aproximadamente una hora, respectivamente, lo que convierte a Galle en una escapada cultural fácil de medio día desde una estancia en la playa. Los barcos de avistamiento de ballenas salen de Mirissa en temporada (aproximadamente de noviembre a abril), a menudo combinados con una mañana en el Fuerte de Galle.\n\nKoggala y Weligama, conocidas por sus pescadores sobre zancos y sus olas de surf, se encuentran en la misma carretera costera y son adecuadas para quienes diseñan un itinerario más pausado por la costa sur alrededor de Galle.',
      },
      {
        title: 'Dónde alojarse',
        body: 'Alojarse dentro de las murallas del fuerte, en una de las muchas villas holandesas o de época colonial convertidas en casas de huéspedes boutique, es la opción más evocadora y pone cada lugar a un corto paseo. Las habitaciones aquí se reservan con mucha antelación en temporada alta, dado lo poco que el núcleo histórico puede albergar.\n\nFuera de las murallas, la zona más amplia de Galle y las localidades de playa cercanas ofrecen mucha más variedad en todos los rangos de precio, una opción práctica si el alojamiento del fuerte está completo o fuera de presupuesto.',
      },
      {
        title: 'Dónde comer en Galle',
        body: 'El Fuerte de Galle tiene una de las mejores escenas gastronómicas a pequeña escala de Sri Lanka, con cafés y restaurantes en edificios coloniales reconvertidos que sirven de todo, desde marisco fresco y rice and curry srilankés hasta café realmente bueno, repostería y menús internacionales pensados para viajeros que se quedan más tiempo.\n\nPara la captura más fresca, varios restaurantes se abastecen directamente en el mercado de pescado de Galle, justo fuera de las murallas, y una cena de marisco aquí, especialmente pescado o gambas a la parrilla, es uno de los puntos fuertes fiables de la costa sur.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto tiempo necesito para ver el Fuerte de Galle?',
        a: 'Medio día cubre cómodamente el paseo por las murallas y los principales lugares de interés; un día completo, o pasar la noche dentro del fuerte, permite recorrer boutiques, museos y cafés sin prisas.',
      },
      {
        q: '¿Se puede recorrer el Fuerte de Galle a pie o hace falta transporte dentro?',
        a: 'Se recorre por completo a pie: el casco antiguo es pequeño y en gran parte apto para peatones, con los coches generalmente relegados a los bordes. Es uno de los sitios históricos más fáciles de explorar en Sri Lanka sin guía.',
      },
      {
        q: '¿Cuál es el mejor momento del día para caminar por las murallas de Galle?',
        a: 'Temprano por la mañana o la hora antes del atardecer, tanto por las temperaturas más frescas como por la mejor luz sobre el océano. El sol del mediodía sobre las murallas expuestas es intenso y mejor evitarlo.',
      },
      {
        q: '¿Puedo combinar Galle con tiempo de playa en la costa sur?',
        a: 'Sí: Unawatuna y Mirissa están ambas a menos de una hora, por lo que una mañana en el Fuerte de Galle seguida de una tarde de playa es una combinación habitual y sencilla en los itinerarios de la costa sur.',
      },
      {
        q: '¿Es el Fuerte de Galle una buena base para explorar la costa sur?',
        a: 'Puede serlo, especialmente para viajeros que valoran la cultura y la gastronomía tanto como la playa, aunque muchos prefieren alojarse en una localidad de playa cercana y visitar el Fuerte de Galle como excursión de medio día.',
      },
    ],
    ctaTitle: 'Añada Galle a su ruta por la costa sur',
    ctaBody: 'Nuestros tours privados combinan el Fuerte de Galle con las playas de la costa sur, el Parque Nacional de Yala y, en itinerarios más largos, la observación de ballenas en Mirissa, con su chófer-guía encargándose de la conducción entre cada parada.',
    ctaLabel: 'Planifique su visita a Galle',
    relatedTours: [
      { pageId: 'galleDay', label: 'Tour de un día a Galle' },
      { pageId: 'tour5', label: 'Tour de 5 días por Sri Lanka' },
      { pageId: 'tour10', label: 'Tour de 10 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parque Nacional de Yala' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Guía de playas de Sri Lanka' },
      { pageId: 'guideFood', label: 'Guía gastronómica de Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Galle, Sri Lanka: umocnione kolonialne miasto na południowym wybrzeżu',
    lead: 'Za murami wzniesionymi przez Holendrów na portugalskich fundamentach kryje się Fort Galle – żywe miasto z listy UNESCO: brukowane uliczki, kolonialne wille zamienione na butikowe hotele i wciąż działająca latarnia morska prowadząca statki wokół tej samej rafy, która kształtuje to wybrzeże od wieków.',
    heroAlt: 'Mury i latarnia morska Fortu Galle nad Oceanem Indyjskim',
    sections: [
      {
        title: 'Portugalskie początki, holenderskie fortyfikacje',
        body: 'Portugalczycy wybudowali tu pierwszy fort w 1588 roku, ale to Holendrzy, którzy przejęli kontrolę w 1640 roku, wznieśli masywne granitowe mury i bastiony, które wciąż otaczają starówkę. Fort ponownie zmienił właściciela w 1796 roku, gdy Brytyjczycy przejęli Cejlon, choć w dużej mierze zachowali holenderski układ, a nie zastąpili go.\n\nFort Galle przetrwał niszczące tsunami na Oceanie Indyjskim w 2004 roku ze znacznie mniejszymi szkodami strukturalnymi niż niemurowane okolice wokół niego – fakt często przypisywany tym samym murom wzniesionym wieki wcześniej wobec zupełnie innego zagrożenia.',
      },
      {
        title: 'Prawdziwie żywe miasto-dziedzictwo',
        body: 'W przeciwieństwie do wielu odrestaurowanych miejsc kolonialnych, Fort Galle nie jest eksponatem muzealnym – wewnątrz murów wciąż żyje około 400 rodzin, obok butikowych hoteli, kawiarni i galerii w przekształconych holenderskich domach kupieckich. Meczety, kościoły i buddyjskie świątynie stoją kilka ulic od siebie, odzwierciedlając różnorodność placówki handlowej, która kształtowała miasto przez cztery wieki.\n\nUNESCO wpisało fort na Listę Światowego Dziedzictwa w 1988 roku, uznając go za najlepiej zachowany przykład umocnionego kolonialnego miasta zbudowanego przez Europejczyków w Azji Południowej i Południowo-Wschodniej.',
      },
      {
        title: 'Co robić w Galle',
        body: 'Chodzenie po murach, zajmujące około 90 minut w spokojnym tempie, to podstawowa atrakcja Galle – mury okrążają cały półwysep, oferując widok na morze z jednej strony i na dachy z drugiej, najlepiej o zachodzie słońca, gdy światło łagodnieje nad oceanem. Holenderski Kościół Reformowany, stary holenderski szpital (dziś sklepy i restauracje) oraz Narodowe Muzeum Morskie uzupełniają historyczny obraz.\n\nWąskie ulice Galle wynagradzają powolne, bezcelowe wędrowanie bardziej niż jakakolwiek lista atrakcji: niezależne butiki sprzedające batik, biżuterię i antyki zajmują przekształcone kolonialne witryny na terenie całego fortu, a przystanek na kawę w zacienionym dworze liczy się tak samo, jak każdy pojedynczy zabytek.',
      },
      {
        title: 'Praktyczne wskazówki dla zwiedzających',
        body: 'Fort Galle jest naprawdę łatwy do zwiedzenia pieszo i w dużej mierze bezsamochodowy wewnątrz murów, więc zostaw pojazd na parkingu blisko wejścia i eksploruj na piechotę. Brukowane uliczki i nierówne chodniki sprawiają, że wygodne buty są bardziej przydatne niż cokolwiek innego, co zapakujesz.\n\nPołudniowe słońce na odsłoniętych murach jest intensywne; poranny lub późnopopołudniowy spacer jest dużo przyjemniejszy niż wizyta w południe i jednocześnie oferuje najlepsze światło do fotografii.',
      },
      {
        title: 'Pogoda w Galle',
        body: 'Galle leży na południowo-zachodnim wybrzeżu, w wilgotniejszej z dwóch monsunowych stref Sri Lanki, a główny monsun trwający od maja do września przynosi najsilniejsze deszcze i wzburzone morze. Grudzień–marzec to zwykle najsuchszy, najbardziej słoneczny okres i najpopularniejszy sezon, zarówno dla fortu, jak i okolicznych plaż.\n\nNawet w suchszych miesiącach możliwe są krótkie opady; kryte arkady starego holenderskiego szpitala i kilka kawiarni w forcie stanowią wygodne schronienie, jeśli deszcz Cię zaskoczy.',
      },
      {
        title: 'Atrakcje w okolicy warte połączenia',
        body: 'Unawatuna i Mirissa, dwie z najbardziej znanych plażowych miasteczek południowego wybrzeża, leżą odpowiednio 15–30 minut i około godzinę stąd, co czyni Galle łatwą, kulturalną przerwą na pół dnia podczas pobytu na plaży. Łodzie do obserwacji wielorybów wypływają z Mirissy w sezonie (około listopada–kwietnia), często łączone z porankiem w Forcie Galle.\n\nKoggala i Weligama, znane z rybaków na szczudłach i miejsc do surfowania, leżą przy tej samej drodze wybrzeżowej i odpowiadają podróżnym budującym wolniejszą trasę po południowym wybrzeżu wokół Galle.',
      },
      {
        title: 'Gdzie się zatrzymać',
        body: 'Zatrzymanie się wewnątrz murów fortu, w jednej z wielu przekształconych holenderskich lub kolonialnych willi zamienionych na butikowe pensjonaty, to najbardziej nastrojowa opcja, stawiająca każdą atrakcję w zasięgu krótkiego marszu. Pokoje tutaj są rezerwowane z dużym wyprzedzeniem w wysokim sezonie, biorąc pod uwagę niewielką liczbę obiektów, które może pomieścić historyczne centrum.\n\nPoza murami szersza okolica Galle i bliskie plażowe miasteczka oferują znacznie większy wybór w każdym przedziale cenowym – praktyczna opcja, jeśli zakwaterowanie w forcie jest wyprzedane lub poza budżetem.',
      },
      {
        title: 'Gdzie zjeść w Galle',
        body: 'Fort Galle ma jedną z najlepszych scen kulinarnych na małą skalę w Sri Lance, z kawiarniami i restauracjami w przekształconych kolonialnych budynkach serwującymi wszystko od świeżych owoców morza i lankijskiego rice and curry do naprawdę dobrej kawy, wypieków i międzynarodowych menu dla podróżnych zatrzymujących się na dłużej.\n\nPo najświeższy połów kilka restauracji zaopatruje się bezpośrednio na targu rybnym w Galle, tuż za murami fortu, a kolacja z owocami morza tutaj, zwłaszcza grillowana ryba lub krewetki, to jeden z niezawodnych punktów kulminacyjnych południowego wybrzeża.',
      },
    ],
    faq: [
      {
        q: 'Ile czasu potrzeba na zobaczenie Fortu Galle?',
        a: 'Pół dnia wystarczy na spokojne przejście po murach i główne atrakcje; cały dzień lub nocleg wewnątrz fortu pozwala przeglądać butiki, muzea i kawiarnie bez pośpiechu.',
      },
      {
        q: 'Czy Fort Galle można zwiedzić pieszo, czy potrzebny jest transport wewnątrz?',
        a: 'Można go zwiedzić w całości pieszo – starówka jest niewielka i w dużej mierze przyjazna pieszym, samochody zwykle trzymają się na obrzeżach. To jedno z najłatwiejszych historycznych miejsc na Sri Lance do samodzielnego zwiedzania bez przewodnika.',
      },
      {
        q: 'Jaka jest najlepsza pora dnia na spacer po murach Galle?',
        a: 'Wczesny ranek lub godzina przed zachodem słońca – zarówno ze względu na chłodniejsze temperatury, jak i najlepsze światło nad oceanem. Południowe słońce na odsłoniętych murach jest intensywne i lepiej go unikać.',
      },
      {
        q: 'Czy mogę połączyć Galle z czasem na plaży na południowym wybrzeżu?',
        a: 'Tak – Unawatuna i Mirissa są obie w odległości mniej niż godziny, więc poranek w Forcie Galle zakończony popołudniem na plaży jest częstym i łatwym połączeniem na trasach południowego wybrzeża.',
      },
      {
        q: 'Czy Fort Galle jest dobrą bazą do zwiedzania południowego wybrzeża?',
        a: 'Może być, szczególnie dla podróżnych, którzy cenią kulturę i gastronomię tak samo jak plażę, choć wielu woli zatrzymać się w bliskim plażowym miasteczku i odwiedzić Fort Galle jako wycieczkę na pół dnia.',
      },
    ],
    ctaTitle: 'Dodaj Galle do swojej trasy po południowym wybrzeżu',
    ctaBody: 'Nasze prywatne wycieczki łączą Fort Galle z plażami południowego wybrzeża, Parkiem Narodowym Yala oraz, na dłuższych trasach, obserwacją wielorybów w Mirissie, a Twój kierowca-przewodnik zajmuje się jazdą między każdym przystankiem.',
    ctaLabel: 'Zaplanuj wizytę w Galle',
    relatedTours: [
      { pageId: 'galleDay', label: 'Jednodniowa wycieczka do Galle' },
      { pageId: 'tour5', label: '5-dniowa wycieczka po Sri Lance' },
      { pageId: 'tour10', label: '10-dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Park Narodowy Yala' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Przewodnik po plażach Sri Lanki' },
      { pageId: 'guideFood', label: 'Przewodnik kulinarny po Sri Lance' },
    ],
  },

  ru: {
    h1: 'Галле, Шри-Ланка: укреплённый колониальный город на южном побережье',
    lead: 'За стенами, возведёнными голландцами на португальском фундаменте, форт Галле живой город из списка Всемирного наследия ЮНЕСКО: мощёные улочки, колониальные виллы, превращённые в бутик-отели, и действующий маяк, до сих пор проводящий суда мимо того же рифа, который формирует это побережье веками.',
    heroAlt: 'Стены и маяк форта Галле над Индийским океаном',
    sections: [
      {
        title: 'Португальские истоки, голландские укрепления',
        body: 'Португальцы построили здесь первый форт в 1588 году, но именно голландцы, взявшие контроль в 1640 году, возвели массивные гранитные стены и бастионы, до сих пор окружающие старый город. Форт снова сменил владельцев в 1796 году, когда британцы захватили Цейлон, хотя они в основном сохранили голландскую планировку, а не заменили её.\n\nФорт Галле пережил разрушительное цунами в Индийском океане 2004 года со значительно меньшими структурными повреждениями, чем незащищённые окрестности, факт, часто приписываемый тем же стенам, построенным столетиями ранее для совсем иной угрозы.',
      },
      {
        title: 'По-настоящему живой город-наследие',
        body: 'В отличие от многих отреставрированных колониальных объектов, форт Галле не музейный экспонатколо 400 семей до сих пор живут внутри стен, рядом с бутик-отелями, кафе и галереями в переоборудованных голландских купеческих домах. Мечети, церкви и буддийские храмы находятся в нескольких улицах друг от друга, отражая разнообразие торгового поста, сформировавшего город за четыре века.\n\nВ 1988 году ЮНЕСКО включила форт в список Всемирного наследия, признав его лучшим сохранившимся примером укреплённого колониального города, построенного европейцами в Южной и Юго-Восточной Азии.',
      },
      {
        title: 'Что посмотреть и сделать в Галле',
        body: 'Прогулка по стенам, занимающая около 90 минут в спокойном темпе, главное занятие в Галле: стены окружают весь полуостров, предлагая вид на море с одной стороны и на крыши с другой, лучше всего на закате, когда свет над океаном становится мягче. Голландская реформатская церковь, старая голландская больница (теперь магазины и рестораны) и Национальный морской музей дополняют историческую картину.\n\nУзкие улочки Галле вознаграждают медленное, бесцельное блуждание больше, чем любой список достопримечательностей: независимые бутики, торгующие батиком, украшениями и антиквариатом, занимают переоборудованные колониальные витрины по всему форту, а остановка на кофе в тенистом дворике значит не меньше, чем любой отдельный памятник.',
      },
      {
        title: 'Практические советы для посещения',
        body: 'Форт Галле действительно проходим пешком и в основном свободен от машин внутри стен, поэтому оставьте автомобиль на парковке у входа и исследуйте пешком. Мощёные улочки и неровные тротуары делают удобную обувь более полезной, чем что-либо ещё, что вы возьмёте с собой.\n\nПолуденное солнце на открытых стенах интенсивное; прогулка ранним утром или в конце дня гораздо приятнее визита в полдень и одновременно даёт лучший свет для фотографии.',
      },
      {
        title: 'Погода в Галле',
        body: 'Галле находится на юго-западном побережье, в более влажной из двух муссонных зон Шри-Ланки, а основной муссон, примерно с мая по сентябрь, приносит самые сильные дожди и более неспокойное море. С декабря по март обычно самый сухой, солнечный период и самый популярный сезон как для форта, так и для окружающих пляжей.\n\nДаже в более сухие месяцы возможны короткие ливни; крытые галереи старой голландской больницы и несколько кафе форта служат удобным укрытием, если дождь застанет вас врасплох.',
      },
      {
        title: 'Что посмотреть в окрестностях',
        body: 'Унавату и Мирисса, два самых известных пляжных городка южного побережья, находятся соответственно в 15–30 минутах и примерно в часе езды, что делает Галле удобной культурной вылазкой на полдня во время пляжного отдыха. Лодки для наблюдения за китами отправляются из Мириссы в сезон (примерно с ноября по апрель), часто в сочетании с утром в форте Галле.\n\nКоггала и Велигама, известные рыбаками на ходулях и точками для сёрфинга, находятся на той же прибрежной дороге и подходят путешественникам, строящим более медленный маршрут по южному побережью вокруг Галле.',
      },
      {
        title: 'Где остановиться',
        body: 'Проживание внутри стен форта, в одной из многочисленных переоборудованных голландских или колониальных вилл, превращённых в бутик-гостевые дома, самый атмосферный вариант, ставящий каждую достопримечательность в пределах короткой прогулки. Номера здесь бронируются задолго до высокого сезона, учитывая, как мало объектов может вместить исторический центр.\n\nЗа стенами более широкий район Галле и близкие пляжные городки предлагают гораздо больший выбор по любому бюджету практичный вариант, если жильё в форте распродано или недоступно по цене.',
      },
      {
        title: 'Где поесть в Галле',
        body: 'В форте Галле одна из лучших небольших гастрономических сцен Шри-Ланки: кафе и рестораны в переоборудованных колониальных зданиях подают всё, от свежих морепродуктов и шри-ланкийского rice and curry до по-настоящему хорошего кофе, выпечки и международных меню для путешественников, задерживающихся подольше.\n\nЗа самым свежим уловом несколько ресторанов закупаются прямо на рыбном рынке Галле, сразу за стенами форта, и ужин с морепродуктами здесь, особенно жареная рыба или креветки, один из надёжных кулинарных плюсов южного побережья.',
      },
    ],
    faq: [
      {
        q: 'Сколько времени нужно, чтобы увидеть форт Галле?',
        a: 'Полдня достаточно, чтобы спокойно пройтись по стенам и осмотреть основные объекты; полный день или ночёвка внутри форта дают время неспешно осмотреть бутики, музеи и кафе.',
      },
      {
        q: 'Можно ли обойти форт Галле пешком, или внутри нужен транспорт?',
        a: 'Его можно полностью обойти пешком старый город небольшой и в основном приспособлен для пешеходов, машины обычно держатся по краям. Это один из самых простых исторических объектов Шри-Ланки для самостоятельного изучения без гида.',
      },
      {
        q: 'Какое лучшее время дня для прогулки по стенам Галле?',
        a: 'Раннее утро или час перед закатом как для более прохладной температуры, так и для лучшего света над океаном. Полуденное солнце на открытых стенах интенсивно, и его лучше избегать.',
      },
      {
        q: 'Можно ли совместить Галле с пляжным отдыхом на южном побережье?',
        a: 'Да Унавату и Мирисса находятся менее часа езды, поэтому утро в форте Галле с последующим пляжным днём обычное и простое сочетание в маршрутах южного побережья.',
      },
      {
        q: 'Является ли форт Галле хорошей базой для изучения южного побережья?',
        a: 'Может быть, особенно для путешественников, ценящих культуру и гастрономию не меньше пляжа, хотя многие предпочитают остановиться в близком пляжном городке и посетить форт Галле как экскурсию на полдня.',
      },
    ],
    ctaTitle: 'Добавьте Галле в свой маршрут по южному побережью',
    ctaBody: 'Наши частные туры объединяют форт Галле с пляжами южного побережья, национальным парком Яла и, в более длинных маршрутах, наблюдением за китами в Мириссе водитель-гид берёт на себя дорогу между каждой остановкой.',
    ctaLabel: 'Спланировать визит в Галле',
    relatedTours: [
      { pageId: 'galleDay', label: 'Однодневный тур в Галле' },
      { pageId: 'tour5', label: '5-дневный тур по Шри-Ланке' },
      { pageId: 'tour10', label: '10-дневный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Национальный парк Яла' },
      { pageId: 'destElla', label: 'Элла' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Гид по пляжам Шри-Ланки' },
      { pageId: 'guideFood', label: 'Гид по еде Шри-Ланки' },
    ],
  },
  nl: {
    h1: 'Galle, Sri Lanka: eine befestigte Kolonialstadt an der Südküste',
    lead: 'Hinter Wällen, die die Niederländer auf portugiesischen Fundamenten errichteten, ist Galle Fort eine lebendige UNESCO-Welterbestadt – Kopfsteinpflastergassen, koloniale Villen als Boutique-Hotels und ein aktiver Leuchtturm, der Schiffe noch immer an demselben Riff vorbeileitet, das diese Küste seit Jahrhunderten prägt.',
    heroAlt: 'Die Wälle und der Leuchtturm von Galle Fort mit Blick auf den Indischen Ozean',
    sections: [
      {
        title: 'Portugiesische Ursprünge, niederländische Befestigungen',
        body: 'Die Portugiesen errichteten hier 1588 die erste Festung, doch waren es die Niederländer, die 1640 die Kontrolle übernahmen, die die massiven Granitwälle und Bastionen bauten, die die Altstadt noch heute umschließen. Die Festung wechselte 1796 erneut den Besitzer, als die Briten Ceylon einnahmen, bewahrten dabei aber weitgehend die niederländische Anlage, statt sie zu ersetzen.\n\nGalle Fort überstand die verwüstende Tsunami-Katastrophe im Indischen Ozean 2004 mit weit geringeren strukturellen Schäden als die ungeschützten Gebiete drumherum – ein Umstand, der oft denselben Jahrhunderte zuvor für eine ganz andere Bedrohung errichteten Wällen zugeschrieben wird.',
      },
      {
        title: 'Eine wirklich lebendige Erbestadt',
        body: 'Anders als viele restaurierte Kolonialstätten ist Galle Fort kein Museumsstück – rund 400 Familien leben noch immer innerhalb der Mauern, neben Boutique-Hotels, Cafés und Galerien in umgebauten niederländischen Handelshäusern. Moscheen, Kirchen und buddhistische Tempel liegen wenige Straßen voneinander entfernt und spiegeln die Vielfalt des Handelsposten wider, die die Stadt über vier Jahrhunderte prägte.\n\n1991 nahm die UNESCO die Festung als Weltkulturerbe auf und würdigte sie als das am besten erhaltene Beispiel einer von Europäern errichteten befestigten Kolonialstadt in Süd- und Südostasien.',
      },
      {
        title: 'Was man in Galle unternehmen sollte',
        body: 'Der Spaziergang auf den Wällen, etwa 90 Minuten in gemächlichem Tempo, ist die zentrale Aktivität in Galle – die Mauern umschließen die gesamte Halbinsel und bieten auf der einen Seite Meerblick, auf der anderen Blicke über die Dächer; am schönsten bei Sonnenuntergang, wenn sich das Licht über dem Ozean weicher zeigt. Die niederländisch-reformierte Kirche, das alte niederländische Krankenhaus (heute Geschäfte und Restaurants) und das Nationale Meeresmuseum ergänzen die historischen Details.\n\nGalles enge Straßen belohnen langsames, ziellloses Schlendern mehr als jede Sehenswürdigkeiten-Checkliste: Unabhängige Boutiquen mit Batik, Schmuck und Antiquitäten füllen die umgebauten Kolonialläden im gesamten Fort, und eine Kaffeepause in einem schattigen Innenhof ist genauso wichtig wie jedes einzelne Denkmal.',
      },
      {
        title: 'Praktische Tipps für den Besuch',
        body: 'Galle Fort ist wirklich zu Fuß erkundbar und innerhalb der Mauern weitgehend autofrei – lassen Sie Ihr Fahrzeug auf einem Parkplatz nahe dem Eingang stehen und erkunden Sie den Ort zu Fuß. Die Kopfsteinpflastergassen und unebenen Gehwege machen bequeme Schuhe nützlicher als alles andere, was Sie einpacken.\n\nDie Mittagssonne auf den exponierten Wällen ist intensiv; ein früher Morgen- oder späterer Nachmittagsspaziergang ist deutlich angenehmer als ein Besuch um die Mittagszeit und bietet zugleich das beste Fotolicht.',
      },
      {
        title: 'Wetter in Galle',
        body: 'Galle liegt an der Südwestküste, in der feuchteren der beiden Monsunzonen Sri Lankas; der Hauptmonsun etwa von Mai bis September bringt den stärksten Regen und rauere See. Dezember bis März ist meist die trockenste, sonnigste Phase und die beliebteste Saison sowohl für die Festung als auch für die umliegenden Strände.\n\nSelbst in den trockeneren Monaten sind kurze Schauer möglich; die überdachten Arkaden des alten niederländischen Krankenhauses und mehrere Cafés im Fort bieten bequemen Schutz, falls Sie einer davon überrascht.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Unawatuna und Mirissa, zwei der bekanntesten Strandorte der Südküste, liegen 15–30 Minuten bzw. etwa eine Stunde entfernt, was Galle zu einer einfachen halbtägigen kulturellen Abwechslung während eines Strandaufenthalts macht. Wal-Beobachtungsboote starten in der Saison (etwa November bis April) von Mirissa, oft kombiniert mit einem Vormittag in Galle Fort.\n\nKoggala und Weligama, bekannt für Stelzenfischer und Surf-Spots, liegen an derselben Küstenstraße und passen zu Reisenden, die eine ruhigere Südküsten-Route rund um Galle planen.',
      },
      {
        title: 'Wo man übernachten kann',
        body: 'Ein Aufenthalt innerhalb der Festungsmauern, in einer der vielen umgebauten niederländischen oder kolonialen Villen als Boutique-Gästehaus, ist die stimmungsvollste Option und bringt jede Sehenswürdigkeit in kurze Gehdistanz. Zimmer hier sind in der Hochsaison weit im Voraus ausgebucht, angesichts der wenigen Unterkünfte, die der historische Kern fasst.\n\nAußerhalb der Mauern bieten das weitere Galle-Gebiet und nahe Strandorte deutlich mehr Auswahl in jeder Preisklasse – eine praktische Option, wenn Unterkünfte im Fort ausgebucht oder zu teuer sind.',
      },
      {
        title: 'Essen in Galle',
        body: 'Galle Fort hat eine der besten kleinen Gastro-Szenen Sri Lankas, mit Cafés und Restaurants in umgebauten Kolonialgebäuden, die von frischen Meeresfrüchten und srilankischem Rice and Curry bis zu wirklich gutem Kaffee, Gebäck und internationalen Menüs für länger bleibende Reisende alles bieten.\n\nFür den frischesten Fang beziehen mehrere Restaurants direkt vom Galle-Fischmarkt gleich vor den Festungsmauern, und ein Meeresfrüchte-Abendessen hier, besonders gegrillter Fisch oder Garnelen, gehört zu den verlässlichen Höhepunkten der Südküste.',
      },
    ],
    faq: [
      {
        q: 'Wie viel Zeit brauche ich für Galle Fort?',
        a: 'Ein halber Tag deckt den Wallspaziergang und die Hauptsehenswürdigkeiten bequem ab; ein ganzer Tag oder eine Übernachtung innerhalb der Festung erlaubt es, Boutiquen, Museen und Cafés ohne Zeitdruck zu erkunden.',
      },
      {
        q: 'Ist Galle Fort zu Fuß erkundbar, oder braucht man Transport innerhalb?',
        a: 'Es ist vollständig zu Fuß erkundbar – die Altstadt ist klein und weitgehend fußgängerfreundlich, Autos bleiben meist an den Rändern. Dies ist eine der einfachsten historischen Stätten Sri Lankas, die man ohne Guide erkunden kann.',
      },
      {
        q: 'Was ist die beste Tageszeit für einen Spaziergang auf den Wällen von Galle?',
        a: 'Früher Morgen oder die Stunde vor Sonnenuntergang – beides für kühlere Temperaturen und das schönste Licht über dem Ozean. Die Mittagssonne auf den exponierten Mauern ist intensiv und sollte vermieden werden.',
      },
      {
        q: 'Kann ich Galle mit Strandzeit an der Südküste kombinieren?',
        a: 'Ja – Unawatuna und Mirissa sind beide weniger als eine Stunde entfernt, sodass ein Vormittag in Galle Fort gefolgt von einem Strandnachmittag eine übliche und einfache Kombination auf Südküsten-Routen ist.',
      },
      {
        q: 'Ist Galle Fort eine gute Basis, um die Südküste zu erkunden?',
        a: 'Das kann es sein, besonders für Reisende, die Kultur und Gastronomie ebenso schätzen wie Strandzeit, doch viele bevorzugen einen nahen Strandort als Basis und besuchen Galle Fort als halbtägigen Ausflug.',
      },
    ],
    ctaTitle: 'Nehmen Sie Galle in Ihre Südküsten-Route auf',
    ctaBody: 'Unsere privaten Rundreisen verbinden Galle Fort mit den Strände der Südküste, dem Yala-Nationalpark und, auf längeren Routen, Whale Watching in Mirissa – Ihr Fahrer-Guide übernimmt die Fahrt zwischen jedem Stopp.',
    ctaLabel: 'Galle-Besuch planen',
    relatedTours: [
      { pageId: 'galleDay', label: 'Galle Tagestour' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour10', label: '10-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala-Nationalpark' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Sri Lanka Strände-Ratgeber' },
      { pageId: 'guideFood', label: 'Sri Lanka Kulinarik-Ratgeber' },
    ],
  }
};
