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
        body: 'Unlike many restored colonial sites, Galle Fort is not a museum piece. Around 400 families still live inside the walls, alongside boutique hotels, cafes and galleries in converted Dutch merchant houses. Mosques, churches and Buddhist temples sit within a few streets of each other, reflecting the trading post diversity that shaped the town for four centuries.\n\nUNESCO listed the fort as a World Heritage Site in 1988, recognising it as the best preserved example of a fortified colonial city built by Europeans in South and Southeast Asia.',
      },
      {
        id: 'thingsToDo',
        title: 'What to do in Galle',
        body: 'Walking the ramparts, roughly 90 minutes at an easy pace, is the essential Galle activity. The walls circle the entire peninsula and offer sea views on one side and rooftops on the other, best done at sunset when the light softens over the ocean. The Dutch Reformed Church, the old Dutch hospital (now shops and restaurants) and the National Maritime Museum fill in the historical detail.\n\nGalle’s narrow streets reward slow, aimless wandering more than any checklist of sights: independent boutiques selling batik, jewellery and antiques occupy converted colonial storefronts throughout the fort, and stopping for a coffee in a shaded courtyard is as much the point as any single monument.',
      },
      {
        id: 'travelTips',
        title: 'Practical tips for visiting',
        body: 'Galle Fort is genuinely walkable and largely car free inside the walls, so leave your vehicle at a car park near the entrance and explore on foot. The cobbled lanes and uneven pavements make comfortable shoes more useful than anything else you pack.\n\nMidday sun on the exposed ramparts is intense; an early morning or late afternoon walk is far more pleasant than a visit at noon, and doubles as the best light for photography.',
      },
      {
        id: 'weather',
        title: 'Weather in Galle',
        body: 'Galle sits on the southwest coast, in the wetter of Sri Lanka’s two monsoon zones, with the main monsoon roughly May to September bringing the heaviest rain and rougher seas. December to March is generally the driest, sunniest stretch and the most popular season for both the fort and the surrounding beaches.\n\nEven in the drier months, brief showers are possible; the covered arcades of the old Dutch hospital and several fort cafes make convenient shelter if one catches you out.',
      },
      {
        id: 'nearby',
        title: 'Nearby attractions worth combining',
        body: 'Unawatuna and Mirissa, two of the south coast’s best known beach towns, are 15 to 30 minutes and around an hour away respectively, making Galle an easy half day cultural break from a beach based stay. Whale watching boats depart from Mirissa in season (roughly November to April), often combined with a Galle Fort morning.\n\nKoggala and Weligama, known for stilt fishermen and surf breaks, sit along the same coastal road and suit travellers building a slower south coast itinerary around Galle.',
      },
      {
        id: 'hotels',
        title: 'Where to stay',
        body: 'Staying inside the fort walls, in one of the many converted Dutch or colonial era villas turned boutique guesthouses, is the most atmospheric option and puts every sight within a short walk. Rooms here book out well ahead in high season given how few properties the historic core can hold.\n\nOutside the walls, the wider Galle area and nearby beach towns offer far more choice at every price point, a practical option if fort accommodation is full or beyond budget.',
      },
      {
        id: 'restaurants',
        title: 'Eating in Galle',
        body: 'Galle Fort has one of the best small scale dining scenes in Sri Lanka, with cafes and restaurants in converted colonial buildings serving everything from fresh seafood and Sri Lankan rice and curry to genuinely good coffee, pastries and international menus aimed at longer staying travellers.\n\nFor the freshest catch, several restaurants source directly from the Galle fish market just outside the fort walls, and a seafood dinner here, particularly grilled fish or prawns, is one of the south coast’s reliable highlights.',
      },
    ],
    faq: [
      {
        q: 'How much time do I need to see Galle Fort?',
        a: 'Half a day covers the ramparts walk and main sights comfortably; a full day, or an overnight stay inside the fort, allows time to browse the boutiques, museums and cafes at an unhurried pace.',
      },
      {
        q: 'Is Galle Fort walkable, or do I need transport inside?',
        a: 'It is entirely walkable old town is small and largely pedestrian friendly, with cars generally kept to the edges. This is one of the easiest historic sites in Sri Lanka to explore without a guide.',
      },
      {
        q: 'What is the best time of day to walk the Galle ramparts?',
        a: 'Early morning or the hour before sunset, both for cooler temperatures and for the best light over the ocean. Midday sun on the exposed walls is intense and best avoided.',
      },
      {
        q: 'Can I combine Galle with beach time on the south coast?',
        a: 'Yes. Unawatuna and Mirissa are both under an hour away, making a Galle Fort morning followed by a beach afternoon a common and easy combination on south coast itineraries.',
      },
      {
        q: 'Is Galle Fort a good base for exploring the south coast?',
        a: 'It can be, especially for travellers who value culture and dining as much as beach time, though many prefer to stay in a beach town nearby and visit Galle Fort as a half day excursion.',
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
    h1: 'Galle Sri Lanka: eine befestigte Kolonialstadt an der Sudkuste',
    lead: 'Hinter Wallen, die die Niederlander auf portugiesischen Fundamenten errichteten, ist Galle Fort eine lebendige UNESCO Welterbestadt  Kopfsteinpflastergassen, koloniale Villen als Boutique Hotels und ein aktiver Leuchtturm, der Schiffe noch immer an demselben Riff vorbeileitet, das diese Kuste seit Jahrhunderten pragt.',
    heroAlt: 'Die Walle und der Leuchtturm von Galle Fort mit Blick auf den Indischen Ozean',
    sections: [
      {
        title: 'Portugiesische Ursprunge, niederlandische Befestigungen',
        body: 'Die Portugiesen errichteten hier 1588 die erste Festung, doch waren es die Niederlander, die 1640 die Kontrolle ubernahmen, die die massiven Granitwalle und Bastionen bauten, die die Altstadt noch heute umschliessen. Die Festung wechselte 1796 erneut den Besitzer, als die Briten Ceylon einnahmen, bewahrten dabei aber weitgehend die niederlandische Anlage, statt sie zu ersetzen.\n\nGalle Fort uberstand die verwustende Tsunami Katastrophe im Indischen Ozean 2004 mit weit geringeren strukturellen Schaden als die ungeschutzten Gebiete drumherum  ein Umstand, der oft denselben Jahrhunderte zuvor fur eine ganz andere Bedrohung errichteten Wallen zugeschrieben wird.',
      },
      {
        title: 'Eine wirklich lebendige Erbestadt',
        body: 'Anders als viele restaurierte Kolonialstatten ist Galle Fort kein Museumsstuck  rund 400 Familien leben noch immer innerhalb der Mauern, neben Boutique Hotels, Cafes und Galerien in umgebauten niederlandischen Handelshausern. Moscheen, Kirchen und buddhistische Tempel liegen wenige Strassen voneinander entfernt und spiegeln die Vielfalt des Handelsposten wider, die die Stadt uber vier Jahrhunderte pragte.\n\n1991 nahm die UNESCO die Festung als Weltkulturerbe auf und wurdigte sie als das am besten erhaltene Beispiel einer von Europaern errichteten befestigten Kolonialstadt in Sud und Sudostasien.',
      },
      {
        title: 'Was man in Galle unternehmen sollte',
        body: 'Der Spaziergang auf den Wallen, etwa 90 Minuten in gemachlichem Tempo, ist die zentrale Aktivitat in Galle  die Mauern umschliessen die gesamte Halbinsel und bieten auf der einen Seite Meerblick, auf der anderen Blicke uber die Dacher; am schonsten bei Sonnenuntergang, wenn sich das Licht uber dem Ozean weicher zeigt. Die niederlandisch reformierte Kirche, das alte niederlandische Krankenhaus (heute Geschafte und Restaurants) und das Nationale Meeresmuseum erganzen die historischen Details.\n\nGalles enge Strassen belohnen langsames, ziellloses Schlendern mehr als jede Sehenswurdigkeiten Checkliste: Unabhangige Boutiquen mit Batik, Schmuck und Antiquitaten fullen die umgebauten Kolonialladen im gesamten Fort, und eine Kaffeepause in einem schattigen Innenhof ist genauso wichtig wie jedes einzelne Denkmal.',
      },
      {
        title: 'Praktische Tipps fur den Besuch',
        body: 'Galle Fort ist wirklich zu Fuss erkundbar und innerhalb der Mauern weitgehend autofrei  lassen Sie Ihr Fahrzeug auf einem Parkplatz nahe dem Eingang stehen und erkunden Sie den Ort zu Fuss. Die Kopfsteinpflastergassen und unebenen Gehwege machen bequeme Schuhe nutzlicher als alles andere, was Sie einpacken.\n\nDie Mittagssonne auf den exponierten Wallen ist intensiv; ein fruher Morgen- oder spaterer Nachmittagsspaziergang ist deutlich angenehmer als ein Besuch um die Mittagszeit und bietet zugleich das beste Fotolicht.',
      },
      {
        title: 'Wetter in Galle',
        body: 'Galle liegt an der Sudwestkuste, in der feuchteren der beiden Monsunzonen Sri Lankas; der Hauptmonsun etwa von Mai bis September bringt den starksten Regen und rauere See. Dezember bis Marz ist meist die trockenste, sonnigste Phase und die beliebteste Saison sowohl fur die Festung als auch fur die umliegenden Strande.\n\nSelbst in den trockeneren Monaten sind kurze Schauer moglich; die uberdachten Arkaden des alten niederlandischen Krankenhauses und mehrere Cafes im Fort bieten bequemen Schutz, falls Sie einer davon uberrascht.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Unawatuna und Mirissa, zwei der bekanntesten Strandorte der Sudkuste, liegen 15 to 30 Minuten bzw. etwa eine Stunde entfernt, was Galle zu einer einfachen halbtagigen kulturellen Abwechslung wahrend eines Strandaufenthalts macht. Wal Beobachtungsboote starten in der Saison (etwa November bis April) von Mirissa, oft kombiniert mit einem Vormittag in Galle Fort.\n\nKoggala und Weligama, bekannt fur Stelzenfischer und Surf Spots, liegen an derselben Kustenstrasse und passen zu Reisenden, die eine ruhigere Sudkusten Route rund um Galle planen.',
      },
      {
        title: 'Wo man ubernachten kann',
        body: 'Ein Aufenthalt innerhalb der Festungsmauern, in einer der vielen umgebauten niederlandischen oder kolonialen Villen als Boutique Gastehaus, ist die stimmungsvollste Option und bringt jede Sehenswurdigkeit in kurze Gehdistanz. Zimmer hier sind in der Hochsaison weit im Voraus ausgebucht, angesichts der wenigen Unterkunfte, die der historische Kern fasst.\n\nAusserhalb der Mauern bieten das weitere Galle Gebiet und nahe Strandorte deutlich mehr Auswahl in jeder Preisklasse  eine praktische Option, wenn Unterkunfte im Fort ausgebucht oder zu teuer sind.',
      },
      {
        title: 'Essen in Galle',
        body: 'Galle Fort hat eine der besten kleinen Gastro Szenen Sri Lankas, mit Cafes und Restaurants in umgebauten Kolonialgebauden, die von frischen Meeresfruchten und srilankischem Rice and Curry bis zu wirklich gutem Kaffee, Geback und internationalen Menus fur langer bleibende Reisende alles bieten.\n\nFur den frischesten Fang beziehen mehrere Restaurants direkt vom Galle Fischmarkt gleich vor den Festungsmauern, und ein Meeresfruchte Abendessen hier, besonders gegrillter Fisch oder Garnelen, gehort zu den verlasslichen Hohepunkten der Sudkuste.',
      },
    ],
    faq: [
      {
        q: 'Wie viel Zeit brauche ich fur Galle Fort?',
        a: 'Ein halber Tag deckt den Wallspaziergang und die Hauptsehenswurdigkeiten bequem ab; ein ganzer Tag oder eine Ubernachtung innerhalb der Festung erlaubt es, Boutiquen, Museen und Cafes ohne Zeitdruck zu erkunden.',
      },
      {
        q: 'Ist Galle Fort zu Fuss erkundbar, oder braucht man Transport innerhalb?',
        a: 'Es ist vollstandig zu Fuss erkundbar  die Altstadt ist klein und weitgehend fussgangerfreundlich, Autos bleiben meist an den Randern. Dies ist eine der einfachsten historischen Statten Sri Lankas, die man ohne Guide erkunden kann.',
      },
      {
        q: 'Was ist die beste Tageszeit fur einen Spaziergang auf den Wallen von Galle?',
        a: 'Fruher Morgen oder die Stunde vor Sonnenuntergang  beides fur kuhlere Temperaturen und das schonste Licht uber dem Ozean. Die Mittagssonne auf den exponierten Mauern ist intensiv und sollte vermieden werden.',
      },
      {
        q: 'Kann ich Galle mit Strandzeit an der Sudkuste kombinieren?',
        a: 'Ja  Unawatuna und Mirissa sind beide weniger als eine Stunde entfernt, sodass ein Vormittag in Galle Fort gefolgt von einem Strandnachmittag eine ubliche und einfache Kombination auf Sudkusten Routen ist.',
      },
      {
        q: 'Ist Galle Fort eine gute Basis, um die Sudkuste zu erkunden?',
        a: 'Das kann es sein, besonders fur Reisende, die Kultur und Gastronomie ebenso schatzen wie Strandzeit, doch viele bevorzugen einen nahen Strandort als Basis und besuchen Galle Fort als halbtagigen Ausflug.',
      },
    ],
    ctaTitle: 'Nehmen Sie Galle in Ihre Sudkusten Route auf',
    ctaBody: 'Unsere privaten Rundreisen verbinden Galle Fort mit den Strande der Sudkuste, dem Yala Nationalpark und, auf langeren Routen, Whale Watching in Mirissa  Ihr Fahrer Guide ubernimmt die Fahrt zwischen jedem Stopp.',
    ctaLabel: 'Galle Besuch planen',
    relatedTours: [
      { pageId: 'galleDay', label: 'Galle Tagestour' },
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour10', label: '10 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala Nationalpark' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Sri Lanka Strande Ratgeber' },
      { pageId: 'guideFood', label: 'Sri Lanka Kulinarik Ratgeber' },
    ],
  },

  fr: {
    h1: 'Galle, Sri Lanka : une ville coloniale fortifiee sur la cote sud',
    lead: 'Derriere des remparts construits par les Neerlandais sur des fondations portugaises, le fort de Galle est une ville vivante classee au patrimoine mondial de l’UNESCO : rues pavees, villas coloniales transformees en hotels de charme, et un phare toujours en activite guidant les navires au dela du meme recif qui faconne cette cote depuis des siecles.',
    heroAlt: 'Les remparts et le phare du fort de Galle surplombant l’ocean Indien',
    sections: [
      {
        title: 'Origines portugaises, fortifications neerlandaises',
        body: 'Les Portugais construisirent ici le premier fort en 1588, mais ce sont les Neerlandais, qui prirent le controle en 1640, qui edifierent les massifs remparts et bastions de granit qui enserrent encore la vieille ville aujourd’hui. Le fort changea de mains a nouveau en 1796 lorsque les Britanniques prirent Ceylan, mais ceux ci preserverent largement le plan neerlandais plutot que de le remplacer.\n\nLe fort de Galle survecut au devastateur tsunami de l’ocean Indien de 2004 avec bien moins de degats structurels que les zones non fortifiees alentour, un fait souvent attribue aux memes remparts batis des siecles plus tot pour une menace tout autre.',
      },
      {
        title: 'Une veritable ville heritage vivante',
        body: 'Contrairement a de nombreux sites coloniaux restaures, le fort de Galle n’est pas une piece de musee : environ 400 familles vivent encore a l’interieur des murs, aux cotes d’hotels de charme, de cafes et de galeries installes dans d’anciennes maisons de negociants neerlandais. Mosquees, eglises et temples bouddhistes se cotoient a quelques rues d’intervalle, refletant la diversite de ce comptoir commercial qui a faconne la ville durant quatre siecles.\n\nL’UNESCO a inscrit le fort au patrimoine mondial en 1988, le reconnaissant comme le meilleur exemple preserve d’une ville coloniale fortifiee construite par des Europeens en Asie du Sud et du Sud Est.',
      },
      {
        title: 'Que faire a Galle',
        body: 'Marcher sur les remparts, environ 90 minutes a allure tranquille, est l’activite incontournable de Galle. Les murs encerclent toute la peninsule et offrent des vues sur la mer d’un cote et sur les toits de l’autre, idealement au coucher du soleil quand la lumiere s’adoucit sur l’ocean. L’eglise reformee neerlandaise, l’ancien hopital neerlandais (aujourd’hui boutiques et restaurants) et le Musee maritime national completent le tableau historique.\n\nLes rues etroites de Galle recompensent la deambulation lente et sans but plus que toute liste de sites a voir : des boutiques independantes vendant batiks, bijoux et antiquites occupent des devantures coloniales reconverties dans tout le fort, et s’arreter pour un cafe dans une cour ombragee compte tout autant que n’importe quel monument.',
      },
      {
        title: 'Conseils pratiques pour la visite',
        body: 'Le fort de Galle se parcourt vraiment a pied et reste largement sans voitures a l’interieur des murs ; laissez donc votre vehicule sur un parking pres de l’entree et explorez a pied. Les ruelles pavees et les trottoirs irreguliers rendent des chaussures confortables plus utiles que tout autre chose a emporter.\n\nLe soleil de midi sur les remparts exposes est intense ; une promenade tot le matin ou en fin d’apres midi est bien plus agreable qu’une visite a midi, et offre aussi la meilleure lumiere pour la photographie.',
      },
      {
        title: 'Meteo a Galle',
        body: 'Galle se trouve sur la cote sud ouest, dans la plus humide des deux zones de mousson du Sri Lanka, la mousson principale de mai a septembre environ apportant les pluies les plus fortes et une mer plus agitee. Decembre a mars est en general la periode la plus seche et la plus ensoleillee, et la saison la plus prisee aussi bien pour le fort que pour les plages environnantes.\n\nMeme durant les mois les plus secs, de breves averses restent possibles ; les arcades couvertes de l’ancien hopital neerlandais et plusieurs cafes du fort offrent un abri pratique en cas de surprise.',
      },
      {
        title: 'Sites a combiner aux alentours',
        body: 'Unawatuna et Mirissa, deux des villes balneaires les plus connues de la cote sud, se trouvent respectivement a 15-30 minutes et environ une heure, faisant de Galle une escapade culturelle facile d’une demi journee depuis un sejour a la plage. Des bateaux d’observation des baleines partent de Mirissa en saison (environ novembre a avril), souvent combines avec une matinee au fort de Galle.\n\nKoggala et Weligama, connues pour leurs pecheurs sur echasses et leurs spots de surf, se trouvent sur la meme route cotiere et conviennent aux voyageurs elaborant un itineraire plus lent sur la cote sud autour de Galle. Depuis Waskaduwa ou Kalutara, ou est base Sundown Tours, le fort se fait en excursion d’une journee via l’autoroute du Sud, avec dejeuner de fruits de mer au retour si vous ne dinez pas dans le fort.',
      },
      {
        title: 'Ou loger',
        body: 'Loger a l’interieur des murs du fort, dans l’une des nombreuses villas neerlandaises ou d’epoque coloniale reconverties en pensions de charme, est l’option la plus atmospherique et met chaque site a quelques minutes a pied. Les chambres ici se reservent bien a l’avance en haute saison, etant donne le peu d’etablissements que le coeur historique peut accueillir.\n\nA l’exterieur des murs, la zone elargie de Galle et les villes balneaires proches offrent un choix bien plus large a tous les prix, une option pratique si les hebergements du fort sont complets ou hors budget.',
      },
      {
        title: 'Se restaurer a Galle',
        body: 'Le fort de Galle possede l’une des meilleures scenes gastronomiques a petite echelle du Sri Lanka, avec des cafes et restaurants installes dans des batiments coloniaux reconvertis servant tout, des fruits de mer frais et du rice and curry sri lankais a un vrai bon cafe, des patisseries et des menus internationaux destines aux voyageurs qui restent plus longtemps.\n\nPour la peche la plus fraiche, plusieurs restaurants s’approvisionnent directement au marche aux poissons de Galle, juste a l’exterieur des remparts, et un diner de fruits de mer ici, en particulier du poisson grille ou des crevettes, compte parmi les valeurs sures de la cote sud.',
      },
    ],
    faq: [
      {
        q: 'Combien de temps faut il pour visiter le fort de Galle ?',
        a: 'Une demi journee couvre confortablement la marche sur les remparts et les sites principaux ; une journee complete, ou une nuit a l’interieur du fort, laisse le temps de flaner dans les boutiques, musees et cafes sans se presser.',
      },
      {
        q: 'Le fort de Galle se visite t il a pied, ou faut il un transport a l’interieur ?',
        a: 'Il se visite entierement a pied. La vieille ville est petite et largement adaptee aux pietons, les voitures restant generalement en peripherie. C’est l’un des sites historiques les plus faciles du Sri Lanka a explorer sans guide.',
      },
      {
        q: 'Quel est le meilleur moment de la journee pour marcher sur les remparts de Galle ?',
        a: 'Le matin tot ou l’heure precedant le coucher du soleil, a la fois pour des temperatures plus fraiches et pour la meilleure lumiere sur l’ocean. Le soleil de midi sur les murs exposes est intense et mieux evite.',
      },
      {
        q: 'Puis je combiner Galle avec du temps a la plage sur la cote sud ?',
        a: 'Oui. Unawatuna et Mirissa sont toutes deux a moins d’une heure, faisant d’une matinee au fort de Galle suivie d’un apres midi a la plage une combinaison courante et facile sur les itineraires de la cote sud.',
      },
      {
        q: 'Le fort de Galle est il une bonne base pour explorer la cote sud ?',
        a: 'Cela peut l’etre, surtout pour les voyageurs qui accordent autant d’importance a la culture et a la gastronomie qu’a la plage, bien que beaucoup preferent sejourner dans une ville balneaire proche et visiter le fort de Galle en excursion d’une demi journee.',
      },
    ],
    ctaTitle: 'Ajoutez Galle a votre itineraire cote sud',
    ctaBody: 'Nos circuits prives combinent le fort de Galle avec les plages de la cote sud, le parc national de Yala et, sur des itineraires plus longs, l’observation des baleines a Mirissa, votre chauffeur guide se chargeant de la conduite entre chaque etape.',
    ctaLabel: 'Planifier votre visite de Galle',
    relatedTours: [
      { pageId: 'galleDay', label: 'Excursion d’une journee a Galle' },
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
    h1: 'Galle, Sri Lanka: una citta coloniale fortificata sulla costa meridionale',
    lead: 'Dietro bastioni costruiti dagli olandesi su fondamenta portoghesi, il Forte di Galle e una citta vivente patrimonio UNESCOiuzze in pietra, ville coloniali trasformate in boutique hotel e un faro ancora attivo che guida le navi oltre la stessa barriera corallina che modella questa costa da secoli.',
    heroAlt: 'I bastioni e il faro del Forte di Galle sull’Oceano Indiano',
    sections: [
      {
        title: 'Origini portoghesi, fortificazioni olandesi',
        body: 'I portoghesi costruirono qui il primo forte nel 1588, ma furono gli olandesi, che ne presero il controllo nel 1640, a costruire i massicci bastioni e mura in granito che ancora oggi racchiudono la citta vecchia. Il forte cambio nuovamente mano nel 1796, quando i britannici presero Ceylon, sebbene questi preservarono in gran parte l’impianto olandese piuttosto che sostituirlo.\n\nIl Forte di Galle sopravvisse al devastante tsunami dell’Oceano Indiano del 2004 con danni strutturali molto inferiori rispetto alle zone non murate circostanti, un fatto spesso attribuito agli stessi bastioni costruiti secoli prima per una minaccia del tutto diversa.',
      },
      {
        title: 'Una vera citta patrimonio vivente',
        body: 'A differenza di molti siti coloniali restaurati, il Forte di Galle non e un pezzo da museo circa 400 famiglie vivono ancora dentro le mura, insieme a boutique hotel, caffe e gallerie in case mercantili olandesi convertite. Moschee, chiese e templi buddhisti si trovano a poche strade di distanza l’uno dall’altro, riflettendo la diversita dell’avamposto commerciale che ha modellato la citta per quattro secoli.\n\nL’UNESCO ha inserito il forte nel Patrimonio dell’Umanita nel 1988, riconoscendolo come il miglior esempio conservato di citta coloniale fortificata costruita dagli europei nell’Asia meridionale e sud orientale.',
      },
      {
        title: 'Cosa fare a Galle',
        body: 'Camminare sui bastioni, circa 90 minuti con passo tranquillo, e l’attivita essenziale di Galle le mura circondano l’intera penisola e offrono vista mare da un lato e sui tetti dall’altro, ideale al tramonto quando la luce si addolcisce sull’oceano. La Chiesa Riformata Olandese, il vecchio ospedale olandese (oggi negozi e ristoranti) e il Museo Marittimo Nazionale completano il quadro storico.\n\nLe strette vie di Galle premiano il vagabondare lento e senza meta piu di qualsiasi lista di luoghi da vedere: boutique indipendenti che vendono batik, gioielli e antiquariato occupano vetrine coloniali riconvertite in tutto il forte, e fermarsi per un caffe in un cortile ombreggiato conta quanto qualsiasi singolo monumento.',
      },
      {
        title: 'Consigli pratici per la visita',
        body: 'Il Forte di Galle e genuinamente percorribile a piedi e in gran parte privo di auto all’interno delle mura, quindi lasciate il veicolo in un parcheggio vicino all’ingresso ed esplorate a piedi. I vicoli in pietra e i marciapiedi irregolari rendono scarpe comode piu utili di qualsiasi altra cosa portiate.\n\nIl sole di mezzogiorno sui bastioni esposti e intenso; una passeggiata al mattino presto o nel tardo pomeriggio e molto piu piacevole di una visita a mezzogiorno, e offre anche la migliore luce per le fotografie.',
      },
      {
        title: 'Clima a Galle',
        body: 'Galle si trova sulla costa sud occidentale, nella piu umida delle due zone monsoniche dello Sri Lanka, con il monsone principale da maggio a settembre circa che porta le piogge piu intense e un mare piu agitato. Da dicembre a marzo si ha generalmente il periodo piu secco e soleggiato, la stagione piu popolare sia per il forte che per le spiagge circostanti.\n\nAnche nei mesi piu secchi sono possibili brevi rovesci; i porticati coperti del vecchio ospedale olandese e diversi caffe del forte offrono un comodo riparo in caso di sorpresa.',
      },
      {
        title: 'Attrazioni nei dintorni da abbinare',
        body: 'Unawatuna e Mirissa, due delle localita balneari piu note della costa meridionale, distano rispettivamente 15-30 minuti e circa un’ora, rendendo Galle una facile pausa culturale di mezza giornata durante un soggiorno al mare. Le barche per l’avvistamento delle balene partono da Mirissa in stagione (circa da novembre ad aprile), spesso abbinate a una mattinata al Forte di Galle.\n\nKoggala e Weligama, note per i pescatori su palafitte e i punti di surf, si trovano sulla stessa strada costiera e sono adatte a chi costruisce un itinerario piu lento sulla costa sud attorno a Galle.',
      },
      {
        title: 'Dove alloggiare',
        body: 'Alloggiare dentro le mura del forte, in una delle molte ville olandesi o di epoca coloniale trasformate in guesthouse boutique, e l’opzione piu suggestiva e mette ogni luogo a pochi passi. Le camere qui si prenotano con largo anticipo in alta stagione, dato il numero limitato di strutture che il nucleo storico puo ospitare.\n\nFuori dalle mura, l’area piu ampia di Galle e le vicine localita balneari offrono una scelta molto piu ampia a ogni fascia di prezzo, un’opzione pratica se gli alloggi nel forte sono al completo o fuori budget.',
      },
      {
        title: 'Dove mangiare a Galle',
        body: 'Il Forte di Galle ha una delle migliori scene gastronomiche su piccola scala dello Sri Lanka, con caffe e ristoranti in edifici coloniali convertiti che servono di tutto, dai frutti di mare freschi e rice and curry singalese a un caffe davvero buono, pasticceria e menu internazionali pensati per i viaggiatori con soggiorni piu lunghi.\n\nPer il pescato piu fresco, diversi ristoranti si approvvigionano direttamente dal mercato del pesce di Galle, appena fuori le mura, e una cena di pesce qui, in particolare pesce grigliato o gamberi, e uno dei punti forti affidabili della costa meridionale.',
      },
    ],
    faq: [
      {
        q: 'Quanto tempo serve per visitare il Forte di Galle?',
        a: 'Mezza giornata copre comodamente la passeggiata sui bastioni e i luoghi principali; una giornata intera, o un pernottamento dentro il forte, permette di girare tra boutique, musei e caffe senza fretta.',
      },
      {
        q: 'Il Forte di Galle si visita a piedi o serve un mezzo di trasporto interno?',
        a: 'Si visita interamente a piedi la citta vecchia e piccola e in gran parte adatta ai pedoni, con le auto generalmente relegate ai margini. E uno dei siti storici piu facili da esplorare in Sri Lanka senza guida.',
      },
      {
        q: 'Qual e il momento migliore della giornata per camminare sui bastioni di Galle?',
        a: 'Il mattino presto o l’ora prima del tramonto, sia per temperature piu fresche che per la luce migliore sull’oceano. Il sole di mezzogiorno sulle mura esposte e intenso ed e meglio evitarlo.',
      },
      {
        q: 'Posso combinare Galle con il mare sulla costa sud?',
        a: 'Si Unawatuna e Mirissa sono entrambe a meno di un’ora, rendendo una mattinata al Forte di Galle seguita da un pomeriggio al mare una combinazione comune e semplice sugli itinerari della costa sud.',
      },
      {
        q: 'Il Forte di Galle e una buona base per esplorare la costa sud?',
        a: 'Puo esserlo, specialmente per i viaggiatori che apprezzano cultura e gastronomia quanto il mare, sebbene molti preferiscano soggiornare in una localita balneare vicina e visitare il Forte di Galle come escursione di mezza giornata.',
      },
    ],
    ctaTitle: 'Aggiungi Galle al tuo itinerario sulla costa sud',
    ctaBody: 'I nostri tour privati combinano il Forte di Galle con le spiagge della costa sud, il parco nazionale di Yala e, negli itinerari piu lunghi, l’avvistamento delle balene a Mirissa, con il vostro autista guida che gestisce la guida tra ogni tappa.',
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
    lead: 'Tras murallas construidas por los holandeses sobre cimientos portugueses, el Fuerte de Galle es una ciudad viva declarada Patrimonio de la Humanidad por la UNESCO: calles empedradas, villas coloniales convertidas en hoteles boutique y un faro en activo que sigue guiando barcos mas alla del mismo arrecife que ha marcado esta costa durante siglos.',
    heroAlt: 'Las murallas y el faro del Fuerte de Galle frente al oceano Indico',
    sections: [
      {
        title: 'Origenes portugueses, fortificaciones holandesas',
        body: 'Los portugueses construyeron aqui el primer fuerte en 1588, pero fueron los holandeses, que tomaron el control en 1640, quienes levantaron las macizas murallas y bastiones de granito que aun rodean el casco antiguo hoy en dia. El fuerte cambio de manos de nuevo en 1796, cuando los britanicos tomaron Ceilan, aunque estos preservaron en gran medida el trazado holandes en lugar de sustituirlo.\n\nEl Fuerte de Galle sobrevivio al devastador tsunami del oceano Indico de 2004 con muchos menos danos estructurales que las zonas sin murallas de alrededor, un hecho que a menudo se atribuye a las mismas murallas construidas siglos antes para una amenaza completamente distinta.',
      },
      {
        title: 'Una autentica ciudad patrimonio viva',
        body: 'A diferencia de muchos sitios coloniales restaurados, el Fuerte de Galle no es una pieza de museo: alrededor de 400 familias siguen viviendo dentro de las murallas, junto a hoteles boutique, cafes y galerias en antiguas casas de comerciantes holandeses reconvertidas. Mezquitas, iglesias y templos budistas se encuentran a pocas calles unos de otros, reflejo de la diversidad de este puesto comercial que dio forma a la ciudad durante cuatro siglos.\n\nLa UNESCO declaro el fuerte Patrimonio de la Humanidad en 1988, reconociendolo como el mejor ejemplo conservado de ciudad colonial fortificada construida por europeos en el sur y sudeste de Asia.',
      },
      {
        title: 'Que hacer en Galle',
        body: 'Caminar por las murallas, unos 90 minutos a paso tranquilo, es la actividad esencial en Galle: los muros rodean toda la peninsula y ofrecen vistas al mar por un lado y a los tejados por el otro, ideal al atardecer, cuando la luz se suaviza sobre el oceano. La Iglesia Reformada Holandesa, el antiguo hospital holandes (hoy tiendas y restaurantes) y el Museo Maritimo Nacional completan el cuadro historico.\n\nLas estrechas calles de Galle recompensan el paseo lento y sin rumbo mas que cualquier lista de lugares que ver: boutiques independientes que venden batik, joyas y antiguedades ocupan escaparates coloniales reconvertidos por todo el fuerte, y detenerse a tomar un cafe en un patio con sombra cuenta tanto como cualquier monumento concreto.',
      },
      {
        title: 'Consejos practicos para la visita',
        body: 'El Fuerte de Galle se recorre realmente a pie y esta en gran parte libre de coches dentro de las murallas, asi que deje su vehiculo en un aparcamiento cerca de la entrada y explore andando. Las calles empedradas y las aceras irregulares hacen que un calzado comodo sea mas util que cualquier otra cosa que lleve.\n\nEl sol de mediodia sobre las murallas expuestas es intenso; un paseo a primera hora de la manana o ultima de la tarde resulta mucho mas agradable que una visita al mediodia, y ofrece ademas la mejor luz para fotografiar.',
      },
      {
        title: 'Clima en Galle',
        body: 'Galle se encuentra en la costa suroeste, en la mas humeda de las dos zonas monzonicas de Sri Lanka, con el monzon principal, aproximadamente de mayo a septiembre, traiendo las lluvias mas intensas y un mar mas agitado. Diciembre a marzo suele ser el periodo mas seco y soleado, y la temporada mas popular tanto para el fuerte como para las playas circundantes.\n\nIncluso en los meses mas secos son posibles chubascos breves; los soportales cubiertos del antiguo hospital holandes y varios cafes del fuerte ofrecen refugio practico si le pilla uno por sorpresa.',
      },
      {
        title: 'Atracciones cercanas para combinar',
        body: 'Unawatuna y Mirissa, dos de las localidades de playa mas conocidas de la costa sur, estan a 15-30 minutos y a aproximadamente una hora, respectivamente, lo que convierte a Galle en una escapada cultural facil de medio dia desde una estancia en la playa. Los barcos de avistamiento de ballenas salen de Mirissa en temporada (aproximadamente de noviembre a abril), a menudo combinados con una manana en el Fuerte de Galle.\n\nKoggala y Weligama, conocidas por sus pescadores sobre zancos y sus olas de surf, se encuentran en la misma carretera costera y son adecuadas para quienes disenan un itinerario mas pausado por la costa sur alrededor de Galle.',
      },
      {
        title: 'Donde alojarse',
        body: 'Alojarse dentro de las murallas del fuerte, en una de las muchas villas holandesas o de epoca colonial convertidas en casas de huespedes boutique, es la opcion mas evocadora y pone cada lugar a un corto paseo. Las habitaciones aqui se reservan con mucha antelacion en temporada alta, dado lo poco que el nucleo historico puede albergar.\n\nFuera de las murallas, la zona mas amplia de Galle y las localidades de playa cercanas ofrecen mucha mas variedad en todos los rangos de precio, una opcion practica si el alojamiento del fuerte esta completo o fuera de presupuesto.',
      },
      {
        title: 'Donde comer en Galle',
        body: 'El Fuerte de Galle tiene una de las mejores escenas gastronomicas a pequena escala de Sri Lanka, con cafes y restaurantes en edificios coloniales reconvertidos que sirven de todo, desde marisco fresco y rice and curry srilankes hasta cafe realmente bueno, reposteria y menus internacionales pensados para viajeros que se quedan mas tiempo.\n\nPara la captura mas fresca, varios restaurantes se abastecen directamente en el mercado de pescado de Galle, justo fuera de las murallas, y una cena de marisco aqui, especialmente pescado o gambas a la parrilla, es uno de los puntos fuertes fiables de la costa sur.',
      },
    ],
    faq: [
      {
        q: 'Cuanto tiempo necesito para ver el Fuerte de Galle?',
        a: 'Medio dia cubre comodamente el paseo por las murallas y los principales lugares de interes; un dia completo, o pasar la noche dentro del fuerte, permite recorrer boutiques, museos y cafes sin prisas.',
      },
      {
        q: 'Se puede recorrer el Fuerte de Galle a pie o hace falta transporte dentro?',
        a: 'Se recorre por completo a pie: el casco antiguo es pequeno y en gran parte apto para peatones, con los coches generalmente relegados a los bordes. Es uno de los sitios historicos mas faciles de explorar en Sri Lanka sin guia.',
      },
      {
        q: 'Cual es el mejor momento del dia para caminar por las murallas de Galle?',
        a: 'Temprano por la manana o la hora antes del atardecer, tanto por las temperaturas mas frescas como por la mejor luz sobre el oceano. El sol del mediodia sobre las murallas expuestas es intenso y mejor evitarlo.',
      },
      {
        q: 'Puedo combinar Galle con tiempo de playa en la costa sur?',
        a: 'Si: Unawatuna y Mirissa estan ambas a menos de una hora, por lo que una manana en el Fuerte de Galle seguida de una tarde de playa es una combinacion habitual y sencilla en los itinerarios de la costa sur.',
      },
      {
        q: 'Es el Fuerte de Galle una buena base para explorar la costa sur?',
        a: 'Puede serlo, especialmente para viajeros que valoran la cultura y la gastronomia tanto como la playa, aunque muchos prefieren alojarse en una localidad de playa cercana y visitar el Fuerte de Galle como excursion de medio dia.',
      },
    ],
    ctaTitle: 'Anada Galle a su ruta por la costa sur',
    ctaBody: 'Nuestros tours privados combinan el Fuerte de Galle con las playas de la costa sur, el Parque Nacional de Yala y, en itinerarios mas largos, la observacion de ballenas en Mirissa, con su chofer guia encargandose de la conduccion entre cada parada.',
    ctaLabel: 'Planifique su visita a Galle',
    relatedTours: [
      { pageId: 'galleDay', label: 'Tour de un dia a Galle' },
      { pageId: 'tour5', label: 'Tour de 5 dias por Sri Lanka' },
      { pageId: 'tour10', label: 'Tour de 10 dias por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parque Nacional de Yala' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Guia de playas de Sri Lanka' },
      { pageId: 'guideFood', label: 'Guia gastronomica de Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Galle, Sri Lanka: umocnione kolonialne miasto na poludniowym wybrzezu',
    lead: 'Za murami wzniesionymi przez Holendrow na portugalskich fundamentach kryje sie Fort Galle  zywe miasto z listy UNESCO: brukowane uliczki, kolonialne wille zamienione na butikowe hotele i wciaz dzialajaca latarnia morska prowadzaca statki wokol tej samej rafy, ktora ksztaltuje to wybrzeze od wiekow.',
    heroAlt: 'Mury i latarnia morska Fortu Galle nad Oceanem Indyjskim',
    sections: [
      {
        title: 'Portugalskie poczatki, holenderskie fortyfikacje',
        body: 'Portugalczycy wybudowali tu pierwszy fort w 1588 roku, ale to Holendrzy, ktorzy przejeli kontrole w 1640 roku, wzniesli masywne granitowe mury i bastiony, ktore wciaz otaczaja starowke. Fort ponownie zmienil wlasciciela w 1796 roku, gdy Brytyjczycy przejeli Cejlon, choc w duzej mierze zachowali holenderski uklad, a nie zastapili go.\n\nFort Galle przetrwal niszczace tsunami na Oceanie Indyjskim w 2004 roku ze znacznie mniejszymi szkodami strukturalnymi niz niemurowane okolice wokol niego  fakt czesto przypisywany tym samym murom wzniesionym wieki wczesniej wobec zupelnie innego zagrozenia.',
      },
      {
        title: 'Prawdziwie zywe miasto dziedzictwo',
        body: 'W przeciwienstwie do wielu odrestaurowanych miejsc kolonialnych, Fort Galle nie jest eksponatem muzealnym  wewnatrz murow wciaz zyje okolo 400 rodzin, obok butikowych hoteli, kawiarni i galerii w przeksztalconych holenderskich domach kupieckich. Meczety, koscioly i buddyjskie swiatynie stoja kilka ulic od siebie, odzwierciedlajac roznorodnosc placowki handlowej, ktora ksztaltowala miasto przez cztery wieki.\n\nUNESCO wpisalo fort na Liste Swiatowego Dziedzictwa w 1988 roku, uznajac go za najlepiej zachowany przyklad umocnionego kolonialnego miasta zbudowanego przez Europejczykow w Azji Poludniowej i Poludniowo Wschodniej.',
      },
      {
        title: 'Co robic w Galle',
        body: 'Chodzenie po murach, zajmujace okolo 90 minut w spokojnym tempie, to podstawowa atrakcja Galle  mury okrazaja caly polwysep, oferujac widok na morze z jednej strony i na dachy z drugiej, najlepiej o zachodzie slonca, gdy swiatlo lagodnieje nad oceanem. Holenderski Kosciol Reformowany, stary holenderski szpital (dzis sklepy i restauracje) oraz Narodowe Muzeum Morskie uzupelniaja historyczny obraz.\n\nWaskie ulice Galle wynagradzaja powolne, bezcelowe wedrowanie bardziej niz jakakolwiek lista atrakcji: niezalezne butiki sprzedajace batik, bizuterie i antyki zajmuja przeksztalcone kolonialne witryny na terenie calego fortu, a przystanek na kawe w zacienionym dworze liczy sie tak samo, jak kazdy pojedynczy zabytek.',
      },
      {
        title: 'Praktyczne wskazowki dla zwiedzajacych',
        body: 'Fort Galle jest naprawde latwy do zwiedzenia pieszo i w duzej mierze bezsamochodowy wewnatrz murow, wiec zostaw pojazd na parkingu blisko wejscia i eksploruj na piechote. Brukowane uliczki i nierowne chodniki sprawiaja, ze wygodne buty sa bardziej przydatne niz cokolwiek innego, co zapakujesz.\n\nPoludniowe slonce na odslonietych murach jest intensywne; poranny lub poznopopoludniowy spacer jest duzo przyjemniejszy niz wizyta w poludnie i jednoczesnie oferuje najlepsze swiatlo do fotografii.',
      },
      {
        title: 'Pogoda w Galle',
        body: 'Galle lezy na poludniowo zachodnim wybrzezu, w wilgotniejszej z dwoch monsunowych stref Sri Lanki, a glowny monsun trwajacy od maja do wrzesnia przynosi najsilniejsze deszcze i wzburzone morze. Grudzien–marzec to zwykle najsuchszy, najbardziej sloneczny okres i najpopularniejszy sezon, zarowno dla fortu, jak i okolicznych plaz.\n\nNawet w suchszych miesiacach mozliwe sa krotkie opady; kryte arkady starego holenderskiego szpitala i kilka kawiarni w forcie stanowia wygodne schronienie, jesli deszcz Cie zaskoczy.',
      },
      {
        title: 'Atrakcje w okolicy warte polaczenia',
        body: 'Unawatuna i Mirissa, dwie z najbardziej znanych plazowych miasteczek poludniowego wybrzeza, leza odpowiednio 15 to 30 minut i okolo godzine stad, co czyni Galle latwa, kulturalna przerwa na pol dnia podczas pobytu na plazy. Lodzie do obserwacji wielorybow wyplywaja z Mirissy w sezonie (okolo listopada to kwietnia), czesto laczone z porankiem w Forcie Galle.\n\nKoggala i Weligama, znane z rybakow na szczudlach i miejsc do surfowania, leza przy tej samej drodze wybrzezowej i odpowiadaja podroznym budujacym wolniejsza trase po poludniowym wybrzezu wokol Galle.',
      },
      {
        title: 'Gdzie sie zatrzymac',
        body: 'Zatrzymanie sie wewnatrz murow fortu, w jednej z wielu przeksztalconych holenderskich lub kolonialnych willi zamienionych na butikowe pensjonaty, to najbardziej nastrojowa opcja, stawiajaca kazda atrakcje w zasiegu krotkiego marszu. Pokoje tutaj sa rezerwowane z duzym wyprzedzeniem w wysokim sezonie, biorac pod uwage niewielka liczbe obiektow, ktore moze pomiescic historyczne centrum.\n\nPoza murami szersza okolica Galle i bliskie plazowe miasteczka oferuja znacznie wiekszy wybor w kazdym przedziale cenowym  praktyczna opcja, jesli zakwaterowanie w forcie jest wyprzedane lub poza budzetem.',
      },
      {
        title: 'Gdzie zjesc w Galle',
        body: 'Fort Galle ma jedna z najlepszych scen kulinarnych na mala skale w Sri Lance, z kawiarniami i restauracjami w przeksztalconych kolonialnych budynkach serwujacymi wszystko od swiezych owocow morza i lankijskiego rice and curry do naprawde dobrej kawy, wypiekow i miedzynarodowych menu dla podroznych zatrzymujacych sie na dluzej.\n\nPo najswiezszy polow kilka restauracji zaopatruje sie bezposrednio na targu rybnym w Galle, tuz za murami fortu, a kolacja z owocami morza tutaj, zwlaszcza grillowana ryba lub krewetki, to jeden z niezawodnych punktow kulminacyjnych poludniowego wybrzeza.',
      },
    ],
    faq: [
      {
        q: 'Ile czasu potrzeba na zobaczenie Fortu Galle?',
        a: 'Pol dnia wystarczy na spokojne przejscie po murach i glowne atrakcje; caly dzien lub nocleg wewnatrz fortu pozwala przegladac butiki, muzea i kawiarnie bez pospiechu.',
      },
      {
        q: 'Czy Fort Galle mozna zwiedzic pieszo, czy potrzebny jest transport wewnatrz?',
        a: 'Mozna go zwiedzic w calosci pieszo  starowka jest niewielka i w duzej mierze przyjazna pieszym, samochody zwykle trzymaja sie na obrzezach. To jedno z najlatwiejszych historycznych miejsc na Sri Lance do samodzielnego zwiedzania bez przewodnika.',
      },
      {
        q: 'Jaka jest najlepsza pora dnia na spacer po murach Galle?',
        a: 'Wczesny ranek lub godzina przed zachodem slonca  zarowno ze wzgledu na chlodniejsze temperatury, jak i najlepsze swiatlo nad oceanem. Poludniowe slonce na odslonietych murach jest intensywne i lepiej go unikac.',
      },
      {
        q: 'Czy moge polaczyc Galle z czasem na plazy na poludniowym wybrzezu?',
        a: 'Tak  Unawatuna i Mirissa sa obie w odleglosci mniej niz godziny, wiec poranek w Forcie Galle zakonczony popoludniem na plazy jest czestym i latwym polaczeniem na trasach poludniowego wybrzeza.',
      },
      {
        q: 'Czy Fort Galle jest dobra baza do zwiedzania poludniowego wybrzeza?',
        a: 'Moze byc, szczegolnie dla podroznych, ktorzy cenia kulture i gastronomie tak samo jak plaze, choc wielu woli zatrzymac sie w bliskim plazowym miasteczku i odwiedzic Fort Galle jako wycieczke na pol dnia.',
      },
    ],
    ctaTitle: 'Dodaj Galle do swojej trasy po poludniowym wybrzezu',
    ctaBody: 'Nasze prywatne wycieczki lacza Fort Galle z plazami poludniowego wybrzeza, Parkiem Narodowym Yala oraz, na dluzszych trasach, obserwacja wielorybow w Mirissie, a Twoj kierowca przewodnik zajmuje sie jazda miedzy kazdym przystankiem.',
    ctaLabel: 'Zaplanuj wizyte w Galle',
    relatedTours: [
      { pageId: 'galleDay', label: 'Jednodniowa wycieczka do Galle' },
      { pageId: 'tour5', label: '5 dniowa wycieczka po Sri Lance' },
      { pageId: 'tour10', label: '10 dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Park Narodowy Yala' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Przewodnik po plazach Sri Lanki' },
      { pageId: 'guideFood', label: 'Przewodnik kulinarny po Sri Lance' },
    ],
  },

  ru: {
    h1: 'Галле, Шри Ланка: укреплённый колониальный город на южном побережье',
    lead: 'За стенами форта Галле живой город ЮНЕСКО. Рядом унаватуна шри ланка: защищённая бухта для шри ланка море после экскурсии по форту.',
    heroAlt: 'Стены и маяк форта Галле над Индийским океаном',
    sections: [
      {
        title: 'Португальские истоки, голландские укрепления',
        body: 'Португальцы построили здесь первый форт в 1588 году, но именно голландцы, взявшие контроль в 1640 году, возвели массивные гранитные стены и бастионы, до сих пор окружающие старый город. Форт снова сменил владельцев в 1796 году, когда британцы захватили Цейлон, хотя они в основном сохранили голландскую планировку, а не заменили её.\n\nФорт Галле пережил разрушительное цунами в Индийском океане 2004 года со значительно меньшими структурными повреждениями, чем незащищённые окрестности, факт, часто приписываемый тем же стенам, построенным столетиями ранее для совсем иной угрозы.',
      },
      {
        title: 'По настоящему живой город наследие',
        body: 'В отличие от многих отреставрированных колониальных объектов, форт Галле не музейный экспонатколо 400 семей до сих пор живут внутри стен, рядом с бутик отелями, кафе и галереями в переоборудованных голландских купеческих домах. Мечети, церкви и буддийские храмы находятся в нескольких улицах друг от друга, отражая разнообразие торгового поста, сформировавшего город за четыре века.\n\nВ 1988 году ЮНЕСКО включила форт в список Всемирного наследия, признав его лучшим сохранившимся примером укреплённого колониального города, построенного европейцами в Южной и Юго Восточной Азии.',
      },
      {
        title: 'Что посмотреть и сделать в Галле',
        body: 'Прогулка по стенам, занимающая около 90 минут в спокойном темпе, главное занятие в Галле: стены окружают весь полуостров, предлагая вид на море с одной стороны и на крыши с другой, лучше всего на закате, когда свет над океаном становится мягче. Голландская реформатская церковь, старая голландская больница (теперь магазины и рестораны) и Национальный морской музей дополняют историческую картину.\n\nУзкие улочки Галле вознаграждают медленное, бесцельное блуждание больше, чем любой список достопримечательностей: независимые бутики, торгующие батиком, украшениями и антиквариатом, занимают переоборудованные колониальные витрины по всему форту, а остановка на кофе в тенистом дворике значит не меньше, чем любой отдельный памятник.',
      },
      {
        title: 'Практические советы для посещения',
        body: 'Форт Галле действительно проходим пешком и в основном свободен от машин внутри стен, поэтому оставьте автомобиль на парковке у входа и исследуйте пешком. Мощёные улочки и неровные тротуары делают удобную обувь более полезной, чем что либо ещё, что вы возьмёте с собой.\n\nПолуденное солнце на открытых стенах интенсивное; прогулка ранним утром или в конце дня гораздо приятнее визита в полдень и одновременно даёт лучший свет для фотографии.',
      },
      {
        title: 'Погода в Галле',
        body: 'Галле находится на юго западном побережье, в более влажной из двух муссонных зон Шри Ланки, а основной муссон, примерно с мая по сентябрь, приносит самые сильные дожди и более неспокойное море. С декабря по март обычно самый сухой, солнечный период и самый популярный сезон как для форта, так и для окружающих пляжей.\n\nДаже в более сухие месяцы возможны короткие ливни; крытые галереи старой голландской больницы и несколько кафе форта служат удобным укрытием, если дождь застанет вас врасплох.',
      },
      {
        title: 'Что посмотреть в окрестностях',
        body: 'Унавату и Мирисса, два самых известных пляжных городка южного побережья, находятся соответственно в 15 to 30 минутах и примерно в часе езды, что делает Галле удобной культурной вылазкой на полдня во время пляжного отдыха. Лодки для наблюдения за китами отправляются из Мириссы в сезон (примерно с ноября по апрель), часто в сочетании с утром в форте Галле.\n\nКоггала и Велигама, известные рыбаками на ходулях и точками для сёрфинга, находятся на той же прибрежной дороге и подходят путешественникам, строящим более медленный маршрут по южному побережью вокруг Галле.',
      },
      {
        title: 'Где остановиться',
        body: 'Проживание внутри стен форта, в одной из многочисленных переоборудованных голландских или колониальных вилл, превращённых в бутик гостевые дома, самый атмосферный вариант, ставящий каждую достопримечательность в пределах короткой прогулки. Номера здесь бронируются задолго до высокого сезона, учитывая, как мало объектов может вместить исторический центр.\n\nЗа стенами более широкий район Галле и близкие пляжные городки предлагают гораздо больший выбор по любому бюджету практичный вариант, если жильё в форте распродано или недоступно по цене.',
      },
      {
        title: 'Где поесть в Галле',
        body: 'В форте Галле одна из лучших небольших гастрономических сцен Шри Ланки: кафе и рестораны в переоборудованных колониальных зданиях подают всё, от свежих морепродуктов и шри ланкийского rice and curry до по настоящему хорошего кофе, выпечки и международных меню для путешественников, задерживающихся подольше.\n\nЗа самым свежим уловом несколько ресторанов закупаются прямо на рыбном рынке Галле, сразу за стенами форта, и ужин с морепродуктами здесь, особенно жареная рыба или креветки, один из надёжных кулинарных плюсов южного побережья.',
      },
    ],
    faq: [
      {
        q: 'Сколько времени нужно, чтобы увидеть форт Галле?',
        a: 'Полдня достаточно, чтобы спокойно пройтись по стенам и осмотреть основные объекты; полный день или ночёвка внутри форта дают время неспешно осмотреть бутики, музеи и кафе.',
      },
      {
        q: 'Можно ли обойти форт Галле пешком, или внутри нужен транспорт?',
        a: 'Его можно полностью обойти пешком старый город небольшой и в основном приспособлен для пешеходов, машины обычно держатся по краям. Это один из самых простых исторических объектов Шри Ланки для самостоятельного изучения без гида.',
      },
      {
        q: 'Какое лучшее время дня для прогулки по стенам Галле?',
        a: 'Раннее утро или час перед закатом как для более прохладной температуры, так и для лучшего света над океаном. Полуденное солнце на открытых стенах интенсивно, и его лучше избегать.',
      },
      {
        q: 'Можно ли совместить Галле с пляжным отдыхом на южном побережье?',
        a: 'Да. Унаватуна шри ланка и Мирисса менее часа езды. Утро в форте и день на шри ланка море обычное сочетание. Шри ланка унаватуна и унаватуна это одна бухта у Галле.',
      },
      {
        q: 'Является ли форт Галле хорошей базой для изучения южного побережья?',
        a: 'Может быть, особенно для путешественников, ценящих культуру и гастрономию не меньше пляжа, хотя многие предпочитают остановиться в близком пляжном городке и посетить форт Галле как экскурсию на полдня.',
      },
    ],
    ctaTitle: 'Добавьте Галле в свой маршрут по южному побережью',
    ctaBody: 'Наши частные туры объединяют форт Галле с пляжами южного побережья, национальным парком Яла и, в более длинных маршрутах, наблюдением за китами в Мириссе водитель гид берёт на себя дорогу между каждой остановкой.',
    ctaLabel: 'Спланировать визит в Галле',
    relatedTours: [
      { pageId: 'galleDay', label: 'Однодневный тур в Галле' },
      { pageId: 'tour5', label: '5 дневный тур по Шри Ланке' },
      { pageId: 'tour10', label: '10 дневный тур по Шри Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Национальный парк Яла' },
      { pageId: 'destElla', label: 'Элла' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Гид по пляжам Шри Ланки' },
      { pageId: 'guideFood', label: 'Гид по еде Шри Ланки' },
    ],
  },
  nl: {
    h1: 'Galle Sri Lanka: eine befestigte Kolonialstadt an der Sudkuste',
    lead: 'Hinter Wallen, die die Niederlander auf portugiesischen Fundamenten errichteten, ist Galle Fort eine lebendige UNESCO Welterbestadt  Kopfsteinpflastergassen, koloniale Villen als Boutique Hotels und ein aktiver Leuchtturm, der Schiffe noch immer an demselben Riff vorbeileitet, das diese Kuste seit Jahrhunderten pragt.',
    heroAlt: 'Die Walle und der Leuchtturm von Galle Fort mit Blick auf den Indischen Ozean',
    sections: [
      {
        title: 'Portugiesische Ursprunge, niederlandische Befestigungen',
        body: 'Die Portugiesen errichteten hier 1588 die erste Festung, doch waren es die Niederlander, die 1640 die Kontrolle ubernahmen, die die massiven Granitwalle und Bastionen bauten, die die Altstadt noch heute umschliessen. Die Festung wechselte 1796 erneut den Besitzer, als die Briten Ceylon einnahmen, bewahrten dabei aber weitgehend die niederlandische Anlage, statt sie zu ersetzen.\n\nGalle Fort uberstand die verwustende Tsunami Katastrophe im Indischen Ozean 2004 mit weit geringeren strukturellen Schaden als die ungeschutzten Gebiete drumherum  ein Umstand, der oft denselben Jahrhunderte zuvor fur eine ganz andere Bedrohung errichteten Wallen zugeschrieben wird.',
      },
      {
        title: 'Eine wirklich lebendige Erbestadt',
        body: 'Anders als viele restaurierte Kolonialstatten ist Galle Fort kein Museumsstuck  rund 400 Familien leben noch immer innerhalb der Mauern, neben Boutique Hotels, Cafes und Galerien in umgebauten niederlandischen Handelshausern. Moscheen, Kirchen und buddhistische Tempel liegen wenige Strassen voneinander entfernt und spiegeln die Vielfalt des Handelsposten wider, die die Stadt uber vier Jahrhunderte pragte.\n\n1991 nahm die UNESCO die Festung als Weltkulturerbe auf und wurdigte sie als das am besten erhaltene Beispiel einer von Europaern errichteten befestigten Kolonialstadt in Sud und Sudostasien.',
      },
      {
        title: 'Was man in Galle unternehmen sollte',
        body: 'Der Spaziergang auf den Wallen, etwa 90 Minuten in gemachlichem Tempo, ist die zentrale Aktivitat in Galle  die Mauern umschliessen die gesamte Halbinsel und bieten auf der einen Seite Meerblick, auf der anderen Blicke uber die Dacher; am schonsten bei Sonnenuntergang, wenn sich das Licht uber dem Ozean weicher zeigt. Die niederlandisch reformierte Kirche, das alte niederlandische Krankenhaus (heute Geschafte und Restaurants) und das Nationale Meeresmuseum erganzen die historischen Details.\n\nGalles enge Strassen belohnen langsames, ziellloses Schlendern mehr als jede Sehenswurdigkeiten Checkliste: Unabhangige Boutiquen mit Batik, Schmuck und Antiquitaten fullen die umgebauten Kolonialladen im gesamten Fort, und eine Kaffeepause in einem schattigen Innenhof ist genauso wichtig wie jedes einzelne Denkmal.',
      },
      {
        title: 'Praktische Tipps fur den Besuch',
        body: 'Galle Fort ist wirklich zu Fuss erkundbar und innerhalb der Mauern weitgehend autofrei  lassen Sie Ihr Fahrzeug auf einem Parkplatz nahe dem Eingang stehen und erkunden Sie den Ort zu Fuss. Die Kopfsteinpflastergassen und unebenen Gehwege machen bequeme Schuhe nutzlicher als alles andere, was Sie einpacken.\n\nDie Mittagssonne auf den exponierten Wallen ist intensiv; ein fruher Morgen- oder spaterer Nachmittagsspaziergang ist deutlich angenehmer als ein Besuch um die Mittagszeit und bietet zugleich das beste Fotolicht.',
      },
      {
        title: 'Wetter in Galle',
        body: 'Galle liegt an der Sudwestkuste, in der feuchteren der beiden Monsunzonen Sri Lankas; der Hauptmonsun etwa von Mai bis September bringt den starksten Regen und rauere See. Dezember bis Marz ist meist die trockenste, sonnigste Phase und die beliebteste Saison sowohl fur die Festung als auch fur die umliegenden Strande.\n\nSelbst in den trockeneren Monaten sind kurze Schauer moglich; die uberdachten Arkaden des alten niederlandischen Krankenhauses und mehrere Cafes im Fort bieten bequemen Schutz, falls Sie einer davon uberrascht.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Unawatuna und Mirissa, zwei der bekanntesten Strandorte der Sudkuste, liegen 15 to 30 Minuten bzw. etwa eine Stunde entfernt, was Galle zu einer einfachen halbtagigen kulturellen Abwechslung wahrend eines Strandaufenthalts macht. Wal Beobachtungsboote starten in der Saison (etwa November bis April) von Mirissa, oft kombiniert mit einem Vormittag in Galle Fort.\n\nKoggala und Weligama, bekannt fur Stelzenfischer und Surf Spots, liegen an derselben Kustenstrasse und passen zu Reisenden, die eine ruhigere Sudkusten Route rund um Galle planen.',
      },
      {
        title: 'Wo man ubernachten kann',
        body: 'Ein Aufenthalt innerhalb der Festungsmauern, in einer der vielen umgebauten niederlandischen oder kolonialen Villen als Boutique Gastehaus, ist die stimmungsvollste Option und bringt jede Sehenswurdigkeit in kurze Gehdistanz. Zimmer hier sind in der Hochsaison weit im Voraus ausgebucht, angesichts der wenigen Unterkunfte, die der historische Kern fasst.\n\nAusserhalb der Mauern bieten das weitere Galle Gebiet und nahe Strandorte deutlich mehr Auswahl in jeder Preisklasse  eine praktische Option, wenn Unterkunfte im Fort ausgebucht oder zu teuer sind.',
      },
      {
        title: 'Essen in Galle',
        body: 'Galle Fort hat eine der besten kleinen Gastro Szenen Sri Lankas, mit Cafes und Restaurants in umgebauten Kolonialgebauden, die von frischen Meeresfruchten und srilankischem Rice and Curry bis zu wirklich gutem Kaffee, Geback und internationalen Menus fur langer bleibende Reisende alles bieten.\n\nFur den frischesten Fang beziehen mehrere Restaurants direkt vom Galle Fischmarkt gleich vor den Festungsmauern, und ein Meeresfruchte Abendessen hier, besonders gegrillter Fisch oder Garnelen, gehort zu den verlasslichen Hohepunkten der Sudkuste.',
      },
    ],
    faq: [
      {
        q: 'Wie viel Zeit brauche ich fur Galle Fort?',
        a: 'Ein halber Tag deckt den Wallspaziergang und die Hauptsehenswurdigkeiten bequem ab; ein ganzer Tag oder eine Ubernachtung innerhalb der Festung erlaubt es, Boutiquen, Museen und Cafes ohne Zeitdruck zu erkunden.',
      },
      {
        q: 'Ist Galle Fort zu Fuss erkundbar, oder braucht man Transport innerhalb?',
        a: 'Es ist vollstandig zu Fuss erkundbar  die Altstadt ist klein und weitgehend fussgangerfreundlich, Autos bleiben meist an den Randern. Dies ist eine der einfachsten historischen Statten Sri Lankas, die man ohne Guide erkunden kann.',
      },
      {
        q: 'Was ist die beste Tageszeit fur einen Spaziergang auf den Wallen von Galle?',
        a: 'Fruher Morgen oder die Stunde vor Sonnenuntergang  beides fur kuhlere Temperaturen und das schonste Licht uber dem Ozean. Die Mittagssonne auf den exponierten Mauern ist intensiv und sollte vermieden werden.',
      },
      {
        q: 'Kann ich Galle mit Strandzeit an der Sudkuste kombinieren?',
        a: 'Ja  Unawatuna und Mirissa sind beide weniger als eine Stunde entfernt, sodass ein Vormittag in Galle Fort gefolgt von einem Strandnachmittag eine ubliche und einfache Kombination auf Sudkusten Routen ist.',
      },
      {
        q: 'Ist Galle Fort eine gute Basis, um die Sudkuste zu erkunden?',
        a: 'Das kann es sein, besonders fur Reisende, die Kultur und Gastronomie ebenso schatzen wie Strandzeit, doch viele bevorzugen einen nahen Strandort als Basis und besuchen Galle Fort als halbtagigen Ausflug.',
      },
    ],
    ctaTitle: 'Nehmen Sie Galle in Ihre Sudkusten Route auf',
    ctaBody: 'Unsere privaten Rundreisen verbinden Galle Fort mit den Strande der Sudkuste, dem Yala Nationalpark und, auf langeren Routen, Whale Watching in Mirissa  Ihr Fahrer Guide ubernimmt die Fahrt zwischen jedem Stopp.',
    ctaLabel: 'Galle Besuch planen',
    relatedTours: [
      { pageId: 'galleDay', label: 'Galle Tagestour' },
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour10', label: '10 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala Nationalpark' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Sri Lanka Strande Ratgeber' },
      { pageId: 'guideFood', label: 'Sri Lanka Kulinarik Ratgeber' },
    ],
  }
};
