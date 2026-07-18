import type { ArticleContent } from '../articles/types';

/**
 * Kandy destination guide (pageId: destKandy).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const KANDY_DEST: ArticleContent = {
  en: {
    h1: 'Kandy, Sri Lanka: The Sacred Hill Capital of the Last Kingdom',
    lead: 'The last capital to fall to colonial rule, Kandy still feels like the spiritual heart of Sri Lanka a lake-side city built around a temple that holds one of Buddhism’s most sacred relics, ringed by hills, botanical gardens and the tea estates beyond.',
    heroImage: 'assets/img/destination-4.webp',
    heroAlt: 'Temple of the Sacred Tooth Relic reflected in Kandy Lake',
    sections: [
      {
        id: 'history',
        title: 'The last independent kingdom',
        body: 'Kandy became the capital of Sri Lanka’s central kingdom in the 16th century and, through sheer terrain and strategy, held out against Portuguese and Dutch invasions for over 250 yearsonger than any other regional power. It finally fell to the British in 1815, ending nearly 2,400 years of unbroken Sri Lankan monarchy.\n\nThat late fall means Kandy’s royal architecture, courtly rituals and temple traditions survived largely intact into the modern era, giving the city a continuity with the pre-colonial past that is harder to find elsewhere on the island.',
      },
      {
        id: 'culture',
        title: 'Home to the Temple of the Sacred Tooth Relic',
        body: 'The Sri Dalada Maligawa houses what Buddhists believe is a tooth relic of the Buddha, brought to Sri Lanka in the 4th century and moved to Kandy when the kingdom relocated its capital here. The relic itself is rarely shown, but the twice-daily drumming ceremonies and the flow of devotees are reason enough to visit.\n\nEach August, the Esala Perahera festival parades a replica casket through the streets on a decorated elephant, accompanied by fire dancers, drummers and Kandyan dancers in full costumene of Asia’s great religious processions and worth planning a trip around if your dates align.',
      },
      {
        id: 'thingsToDo',
        title: 'What to do in Kandy',
        body: 'Beyond the Temple of the Tooth, the Royal Botanical Gardens at Peradeniya, a short drive from the centre, hold one of Asia’s finest orchid collections and an avenue of towering palms planted by royalty and visiting heads of state. The Kandy Lake walk at dusk, with fruit bats streaming overhead, is a simple free pleasure most visitors underrate.\n\nA Kandyan dance performance in the eveningmming, fire-walking and acrobatic masked dance rooted in ritual exorcism traditions useful context before or after the temple visit, and the nearby hills above the lake offer quiet viewpoints over the whole city.',
      },
      {
        id: 'travelTips',
        title: 'Practical tips for visiting',
        body: 'Dress modestly for the Temple of the Tooth: shoulders and knees covered, shoes removed at the entrance, and be prepared to walk part of the site barefoot. Ceremony times (roughly 5:30–6:45 am, 9:30–11 am and 6:30–8 pm) are worth timing your visit around if you want to hear the drummers.\n\nKandy’s traffic can be dense and slow, especially around the lake at peak times, so build in extra time between activities rather than a tight schedule if you are moving around independently.',
      },
      {
        id: 'weather',
        title: 'Weather in Kandy',
        body: 'At around 500 metres elevation, Kandy is noticeably cooler than the coast but warmer and less misty than Ella or Nuwara Eliya, making it comfortable for walking year-round. The wetter months tend to fall around October–November and again in April–May, linked to the island’s two monsoon systems overlapping in the central highlands.\n\nJanuary to March generally offers the most reliably dry, clear conditions for sightseeing and the evening lake walk.',
      },
      {
        id: 'nearby',
        title: 'Nearby attractions worth combining',
        body: 'Sigiriya and Dambulla are both roughly 1.5–2 hours north, making Kandy a natural overnight stop between the Cultural Triangle and the hill country. Pinnawala Elephant Orphanage, about 45 minutes away, is a popular half-day add-on, though independent travellers increasingly favour the more naturalistic elephant encounters near Udawalawe or Minneriya instead.\n\nEla and the tea country begin roughly two to three hours south-east by road or a scenic train ride, making Kandy the classic starting point for the hill-country rail journey.',
      },
      {
        id: 'hotels',
        title: 'Where to stay in Kandy',
        body: 'Lakeside hotels put you within walking distance of the Temple of the Tooth and the evening lake walk, generally the most convenient base for a short stay. Hillside properties above the town trade a little convenience for sweeping views over the lake and rooftops, especially pleasant at sunset.\n\nBudget guesthouses cluster in the streets just back from the lake, an easy walk from restaurants, the temple and the railway station.',
      },
      {
        id: 'restaurants',
        title: 'Eating in Kandy',
        body: 'Kandy has some of the country’s best rice and curry buffets, often built around a central kitchen serving twenty or more small dishes at oncen excellent introduction to the range of Sri Lankan vegetable and lentil cooking. The city’s size also supports a reasonable spread of Indian, Chinese and Western options for travellers wanting variety.\n\nA short walk from the lake, a handful of simple local cafés serve kottu roti cooked to order on a hot griddleorth trying at least once for the theatre of it as much as the food.',
      },
    ],
    faq: [
      {
        q: 'How long should I spend in Kandy?',
        a: 'One full day covers the Temple of the Tooth, the botanical gardens and an evening lake walk comfortably; two days allow a more relaxed pace with time for a Kandyan dance show and the surrounding hills.',
      },
      {
        q: 'What should I wear to visit the Temple of the Sacred Tooth Relic?',
        a: 'Modest dress covering shoulders and knees, and shoes off before entering the inner temple areas. Sarongs and shawls are sold near the entrance for visitors who arrive underdressed.',
      },
      {
        q: 'When is the Esala Perahera festival in Kandy?',
        a: 'It runs over ten nights in July or August, timed to the lunar calendar and varying slightly each year check the current dates before booking if this is a priority, as accommodation sells out well in advance.',
      },
      {
        q: 'Is Kandy a good base for exploring the hill country?',
        a: 'Yes Kandy sits at the northern end of the scenic hill-country railway to Ella and Nuwara Eliya, and is roughly equidistant from the Cultural Triangle and the highlands, making it a practical hub on multi-day itineraries.',
      },
      {
        q: 'Is Pinnawala Elephant Orphanage worth visiting?',
        a: 'Opinions vary Pinnawala is convenient and easy to reach from Kandy, but many independent travellers now prefer wild elephant sightings at Minneriya, Kaudulla or Udawalawe National Park for a more naturalistic experience.',
      },
    ],
    ctaTitle: 'Add Kandy to your itinerary',
    ctaBody: 'Every one of our multi-day private tours passes through Kandy, timed around the Temple of the Tooth ceremonies and the Royal Botanical Gardens, with your chauffeur guide handling traffic and logistics.',
    ctaLabel: 'Plan your Kandy visit',
    relatedTours: [
      { pageId: 'kandyDay', label: 'Kandy Day Tour' },
      { pageId: 'tour2ek', label: '2 Day Ella & Kandy Tour' },
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destDambulla', label: 'Dambulla' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Sri Lanka Tea Country Guide' },
      { pageId: 'guideBestTime', label: 'Best Time to Visit Sri Lanka' },
    ],
  },

  de: {
    h1: 'Kandy, Sri Lanka: die heilige Bergstadt des letzten Königreichs',
    lead: 'Als letzte Hauptstadt, die der Kolonialherrschaft unterlag, fühlt sich Kandy noch immer wie das spirituelle Herz Sri Lankas an – eine Stadt am See, gebaut um einen Tempel mit einer der heiligsten Reliquien des Buddhismus, umgeben von Hügeln, botanischen Gärten und Teeplantagen.',
    heroAlt: 'Der Zahntempel spiegelt sich im Kandy-See',
    sections: [
      {
        title: 'Das letzte unabhängige Königreich',
        body: 'Kandy wurde im 16. Jahrhundert Hauptstadt des zentralen Königreichs Sri Lankas und hielt dank seines Geländes und kluger Strategie über 250 Jahre lang portugiesischen und niederländischen Invasionen stand – länger als jede andere Regionalmacht. Erst 1815 fiel es an die Briten und beendete damit fast 2.400 Jahre ununterbrochener srilankischer Monarchie.\n\nDieser späte Fall bedeutet, dass Kandys königliche Architektur, höfische Rituale und Tempeltraditionen bis in die Moderne weitgehend intakt überlebten – eine Kontinuität zur vorkolonialen Vergangenheit, die man anderswo auf der Insel kaum findet.',
      },
      {
        title: 'Heimat des Zahntempels',
        body: 'Die Sri Dalada Maligawa beherbergt, was Buddhisten als Zahnreliquie Buddhas verehren, im 4. Jahrhundert nach Sri Lanka gebracht und nach Kandy verlegt, als das Königreich seine Hauptstadt hierher verlegte. Die Reliquie selbst wird selten gezeigt, doch die zweimal täglichen Trommelzeremonien und der stete Zustrom von Gläubigen sind Grund genug für einen Besuch.\n\nJeden August zieht das Esala-Perahera-Festival eine Nachbildung des Reliquienschreins auf einem geschmückten Elefanten durch die Straßen, begleitet von Feuertänzern, Trommlern und Kandy-Tänzern in voller Tracht – eine der großen religiösen Prozessionen Asiens, um die sich eine Reise durchaus planen lässt, wenn die Termine passen.',
      },
      {
        title: 'Was man in Kandy unternehmen sollte',
        body: 'Neben dem Zahntempel beherbergt der Königliche Botanische Garten in Peradeniya, kurz vom Zentrum entfernt, eine der schönsten Orchideensammlungen Asiens und eine Allee hoher Palmen, gepflanzt von Königen und Staatsgästen. Der Spaziergang am Kandy-See in der Abenddämmerung, mit Fruchtfledermäusen über dem Kopf, ist ein einfaches, kostenloses Vergnügen, das viele Besucher unterschätzen.\n\nEine abendliche Kandy-Tanzvorführung – Trommeln, Feuerlauf und akrobatischer Maskentanz mit Wurzeln in rituellen Exorzismustraditionen – liefert nützlichen Kontext vor oder nach dem Tempelbesuch, und die Hügel über dem See bieten ruhige Ausblicke über die ganze Stadt.',
      },
      {
        title: 'Praktische Tipps für den Besuch',
        body: 'Kleiden Sie sich für den Zahntempel dezent: Schultern und Knie bedeckt, Schuhe am Eingang ausziehen, und rechnen Sie damit, einen Teil des Geländes barfuß zu gehen. Die Zeremonienzeiten (etwa 5:30–6:45 Uhr, 9:30–11 Uhr und 18:30–20 Uhr) lohnen sich für die Planung, wenn Sie die Trommler hören möchten.\n\nDer Verkehr in Kandy kann dicht und langsam sein, besonders rund um den See zu Stoßzeiten – planen Sie daher lieber zusätzliche Zeit zwischen den Aktivitäten ein, statt einen engen Zeitplan, wenn Sie sich selbstständig fortbewegen.',
      },
      {
        title: 'Wetter in Kandy',
        body: 'Auf rund 500 Metern Höhe ist Kandy deutlich kühler als die Küste, aber wärmer und weniger nebelig als Ella oder Nuwara Eliya, was es das ganze Jahr über angenehm zum Erkunden macht. Die feuchteren Monate liegen meist um Oktober–November und erneut im April–Mai, bedingt durch die Überlagerung der beiden Monsunsysteme der Insel im zentralen Bergland.\n\nJanuar bis März bietet meist die zuverlässigsten trockenen, klaren Bedingungen für Besichtigungen und den abendlichen Seespaziergang.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Sigiriya und Dambulla liegen beide etwa 1,5–2 Stunden nördlich, sodass Kandy ein natürlicher Übernachtungsstopp zwischen Kulturdreieck und Bergland ist. Das Elefanten-Waisenhaus Pinnawala, etwa 45 Minuten entfernt, ist ein beliebter Halbtagesausflug, obwohl unabhängige Reisende zunehmend die naturnäheren Elefantenbegegnungen bei Udawalawe oder Minneriya bevorzugen.\n\nElla und das Teeland beginnen etwa zwei bis drei Stunden südöstlich per Straße oder mit einer malerischen Zugfahrt, was Kandy zum klassischen Ausgangspunkt für die Bergland-Bahnreise macht.',
      },
      {
        title: 'Wo man in Kandy übernachten kann',
        body: 'Hotels am See bringen Sie in Gehdistanz zum Zahntempel und zum abendlichen Seespaziergang und sind meist die praktischste Basis für einen kurzen Aufenthalt. Unterkünfte am Hügel über der Stadt bieten dafür weite Ausblicke über See und Dächer, besonders schön zum Sonnenuntergang.\n\nGünstige Gästehäuser konzentrieren sich in den Straßen etwas hinter dem See, mit kurzem Fußweg zu Restaurants, Tempel und Bahnhof.',
      },
      {
        title: 'Essen in Kandy',
        body: 'Kandy bietet einige der besten Rice-and-Curry-Buffets des Landes, oft rund um eine zentrale Küche mit zwanzig oder mehr kleinen Gerichten gleichzeitig – eine ausgezeichnete Einführung in die Vielfalt der srilankischen Gemüse- und Linsenküche. Die Stadtgröße unterstützt auch ein ordentliches Angebot an indischen, chinesischen und westlichen Optionen für Reisende, die Abwechslung suchen.\n\nEinen kurzen Fußweg vom See entfernt servieren einige einfache lokale Cafés Kottu Roti, frisch auf der heißen Platte zubereitet – mindestens einmal probieren, allein schon wegen des Schauspiels.',
      },
    ],
    faq: [
      {
        q: 'Wie viel Zeit sollte ich in Kandy einplanen?',
        a: 'Ein voller Tag reicht bequem für den Zahntempel, den botanischen Garten und einen abendlichen Seespaziergang; zwei Tage erlauben ein entspannteres Tempo mit Zeit für eine Kandy-Tanzvorführung und die umliegenden Hügel.',
      },
      {
        q: 'Was sollte ich für den Besuch des Zahntempels anziehen?',
        a: 'Dezente Kleidung, die Schultern und Knie bedeckt, sowie Schuhe aus vor den inneren Tempelbereichen. Sarongs und Schals werden nahe dem Eingang für Besucher verkauft, die zu leicht bekleidet ankommen.',
      },
      {
        q: 'Wann findet das Esala-Perahera-Festival in Kandy statt?',
        a: 'Es dauert zehn Nächte im Juli oder August, ausgerichtet am Mondkalender und daher jedes Jahr leicht verschoben – prüfen Sie die aktuellen Termine vor der Buchung, falls dies für Sie wichtig ist, da Unterkünfte lange vorher ausgebucht sind.',
      },
      {
        q: 'Ist Kandy eine gute Basis, um das Bergland zu erkunden?',
        a: 'Ja – Kandy liegt am nördlichen Ende der malerischen Bergland-Bahnstrecke nach Ella und Nuwara Eliya und ist etwa gleich weit vom Kulturdreieck und vom Hochland entfernt, was es zu einem praktischen Knotenpunkt für mehrtägige Rundreisen macht.',
      },
      {
        q: 'Lohnt sich ein Besuch im Elefanten-Waisenhaus Pinnawala?',
        a: 'Die Meinungen gehen auseinander – Pinnawala ist praktisch und leicht von Kandy erreichbar, doch viele unabhängige Reisende bevorzugen heute Wildelefanten-Sichtungen in Minneriya, Kaudulla oder im Udawalawe-Nationalpark für ein naturnäheres Erlebnis.',
      },
    ],
    ctaTitle: 'Nehmen Sie Kandy in Ihre Route auf',
    ctaBody: 'Jede unserer mehrtägigen privaten Rundreisen führt durch Kandy, zeitlich abgestimmt auf die Zeremonien im Zahntempel und den Königlichen Botanischen Garten – Ihr Fahrer-Guide übernimmt Verkehr und Logistik.',
    ctaLabel: 'Kandy-Besuch planen',
    relatedTours: [
      { pageId: 'kandyDay', label: 'Kandy Tagestour' },
      { pageId: 'tour2ek', label: '2-tägige Ella & Kandy Tour' },
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destDambulla', label: 'Dambulla' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Sri Lanka Teeland-Ratgeber' },
      { pageId: 'guideBestTime', label: 'Beste Reisezeit für Sri Lanka' },
    ],
  },

  fr: {
    h1: 'Kandy, Sri Lanka : la capitale sacrée des collines du dernier royaume',
    lead: 'Dernière capitale à tomber sous domination coloniale, Kandy reste le cœur spirituel du Sri Lanka une ville au bord d’un lac construite autour d’un temple qui abrite l’une des reliques les plus sacrées du bouddhisme, entourée de collines, de jardins botaniques et de plantations de thé.',
    heroAlt: 'Le temple de la Dent sacrée se reflétant dans le lac de Kandy',
    sections: [
      {
        title: 'Le dernier royaume indépendant',
        body: 'Kandy devint la capitale du royaume central du Sri Lanka au XVIe siècle et, grâce à son terrain et à sa stratégie, résista aux invasions portugaises et néerlandaises pendant plus de 250 ans plus longtemps que toute autre puissance régionale. Elle finit par tomber aux mains des Britanniques en 1815, mettant fin à près de 2 400 ans de monarchie sri-lankaise ininterrompue.\n\nCette chute tardive explique que l’architecture royale, les rituels de cour et les traditions religieuses de Kandy aient survécu largement intactes jusqu’à l’ère moderne, offrant à la ville une continuité avec le passé précolonial plus rare ailleurs sur l’île.',
      },
      {
        title: 'La demeure du temple de la Dent sacrée',
        body: 'Le Sri Dalada Maligawa abrite ce que les bouddhistes considèrent comme une relique de la dent de Bouddha, apportée au Sri Lanka au IVe siècle et transférée à Kandy lorsque le royaume y installa sa capitale. La relique elle-même est rarement montrée, mais les cérémonies de tambours deux fois par jour et le flux constant de fidèles suffisent à justifier la visite.\n\nChaque mois d’août, le festival Esala Perahera fait défiler un reliquaire de réplique dans les rues sur un éléphant décoré, accompagné de danseurs de feu, de percussionnistes et de danseurs kandyens en costume complet l’une des grandes processions religieuses d’Asie, qui mérite qu’on organise son voyage autour, si les dates coïncident.',
      },
      {
        title: 'Que faire à Kandy',
        body: 'Au-delà du temple de la Dent, le Jardin botanique royal de Peradeniya, à quelques minutes du centre, abrite une des plus belles collections d’orchidées d’Asie et une allée de palmiers imposants plantés par des membres de la royauté et des chefs d’État en visite. La promenade au bord du lac de Kandy au crépuscule, avec des renards volants filant au-dessus des têtes, est un plaisir simple et gratuit souvent sous-estimé.\n\nUn spectacle de danse kandyenne en soirée percussions, marche sur le feu et danse acrobatique masquée enracinée dans des rituels d’exorcisme apporte un contexte utile avant ou après la visite du temple, et les collines au-dessus du lac offrent des points de vue tranquilles sur toute la ville.',
      },
      {
        title: 'Conseils pratiques pour la visite',
        body: 'Habillez-vous modestement pour le temple de la Dent : épaules et genoux couverts, chaussures retirées à l’entrée, et préparez-vous à marcher pieds nus sur une partie du site. Les horaires des cérémonies (environ 5h30-6h45, 9h30-11h et 18h30-20h) valent la peine d’organiser votre visite autour, si vous souhaitez entendre les tambours.\n\nLa circulation à Kandy peut être dense et lente, surtout autour du lac aux heures de pointe : prévoyez donc du temps supplémentaire entre les activités plutôt qu’un programme serré si vous vous déplacez de façon indépendante.',
      },
      {
        title: 'Météo à Kandy',
        body: 'À environ 500 mètres d’altitude, Kandy est nettement plus fraîche que la côte, mais plus chaude et moins brumeuse qu’Ella ou Nuwara Eliya, ce qui la rend agréable à parcourir à pied toute l’année. Les mois les plus humides se situent généralement autour d’octobre-novembre puis à nouveau en avril-mai, en raison du chevauchement des deux systèmes de mousson de l’île dans les hautes terres centrales.\n\nJanvier à mars offre en général les conditions sèches et claires les plus fiables pour les visites et la promenade du soir au bord du lac.',
      },
      {
        title: 'Sites à combiner aux alentours',
        body: 'Sigiriya et Dambulla sont toutes deux à environ 1h30-2h au nord, faisant de Kandy une étape nocturne naturelle entre le Triangle Culturel et les hautes terres. L’orphelinat d’éléphants de Pinnawala, à environ 45 minutes, est un ajout d’une demi-journée populaire, bien que les voyageurs indépendants privilégient de plus en plus les rencontres plus naturelles avec les éléphants près d’Udawalawe ou de Minneriya.\n\nElla et le pays du thé commencent à environ deux à trois heures au sud-est par la route ou par un trajet en train panoramique, ce qui fait de Kandy le point de départ classique pour le voyage ferroviaire dans les hautes terres.',
      },
      {
        title: 'Où loger à Kandy',
        body: 'Les hôtels au bord du lac vous placent à distance de marche du temple de la Dent et de la promenade nocturne, généralement la base la plus pratique pour un court séjour. Les établissements sur les collines au-dessus de la ville offrent en échange de larges vues sur le lac et les toits, particulièrement agréables au coucher du soleil.\n\nLes pensions économiques se regroupent dans les rues juste en retrait du lac, à deux pas des restaurants, du temple et de la gare.',
      },
      {
        title: 'Se restaurer à Kandy',
        body: 'Kandy propose certains des meilleurs buffets de rice and curry du pays, souvent organisés autour d’une cuisine centrale servant vingt plats ou plus à la fois une excellente introduction à la diversité de la cuisine sri-lankaise à base de légumes et de lentilles. La taille de la ville permet aussi une offre raisonnable de cuisine indienne, chinoise et occidentale pour les voyageurs en quête de variété.\n\nÀ quelques pas du lac, quelques cafés locaux simples préparent le kottu roti à la commande sur une plaque chaude à essayer au moins une fois, pour le spectacle autant que pour le plat.',
      },
    ],
    faq: [
      {
        q: 'Combien de temps passer à Kandy ?',
        a: 'Une journée complète permet de voir confortablement le temple de la Dent, le jardin botanique et une promenade en soirée au bord du lac ; deux jours offrent un rythme plus détendu avec le temps pour un spectacle de danse kandyenne et les collines environnantes.',
      },
      {
        q: 'Comment s’habiller pour visiter le temple de la Dent sacrée ?',
        a: 'Une tenue modeste couvrant épaules et genoux, et des chaussures retirées avant d’entrer dans les zones intérieures du temple. Sarongs et châles sont vendus près de l’entrée pour les visiteurs arrivés trop légèrement vêtus.',
      },
      {
        q: 'Quand a lieu le festival Esala Perahera à Kandy ?',
        a: 'Il se déroule sur dix nuits en juillet ou août, calé sur le calendrier lunaire et variant légèrement chaque année vérifiez les dates actuelles avant de réserver si c’est une priorité, car les hébergements se remplissent bien à l’avance.',
      },
      {
        q: 'Kandy est-elle une bonne base pour explorer les hautes terres ?',
        a: 'Oui Kandy se trouve à l’extrémité nord de la ligne ferroviaire panoramique des hautes terres vers Ella et Nuwara Eliya, et se situe à peu près à égale distance du Triangle Culturel et des hauts plateaux, ce qui en fait un point de départ pratique pour des circuits de plusieurs jours.',
      },
      {
        q: 'L’orphelinat d’éléphants de Pinnawala vaut-il la visite ?',
        a: 'Les avis divergent Pinnawala est pratique et facile d’accès depuis Kandy, mais de nombreux voyageurs indépendants préfèrent désormais les observations d’éléphants sauvages à Minneriya, Kaudulla ou dans le parc national d’Udawalawe pour une expérience plus naturelle.',
      },
    ],
    ctaTitle: 'Ajoutez Kandy à votre itinéraire',
    ctaBody: 'Chacun de nos circuits privés de plusieurs jours passe par Kandy, programmé autour des cérémonies du temple de la Dent et du Jardin botanique royal, votre chauffeur-guide se chargeant de la circulation et de la logistique.',
    ctaLabel: 'Planifier votre visite de Kandy',
    relatedTours: [
      { pageId: 'kandyDay', label: 'Excursion d’une journée à Kandy' },
      { pageId: 'tour2ek', label: 'Circuit de 2 jours Ella & Kandy' },
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destDambulla', label: 'Dambulla' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Guide du pays du thé au Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Meilleure période pour visiter le Sri Lanka' },
    ],
  },

  it: {
    h1: 'Kandy, Sri Lanka: la sacra capitale collinare dell’ultimo regno',
    lead: 'Ultima capitale a cadere sotto il dominio coloniale, Kandy sembra ancora il cuore spirituale dello Sri Lanka una città sul lago costruita attorno a un tempio che custodisce una delle reliquie più sacre del buddhismo, circondata da colline, giardini botanici e piantagioni di tè.',
    heroAlt: 'Il Tempio del Sacro Dente riflesso nel lago di Kandy',
    sections: [
      {
        title: 'L’ultimo regno indipendente',
        body: 'Kandy divenne la capitale del regno centrale dello Sri Lanka nel XVI secolo e, grazie al terreno e alla strategia, resistette alle invasioni portoghesi e olandesi per oltre 250 anni più a lungo di qualsiasi altra potenza regionale. Cadde infine ai britannici nel 1815, ponendo fine a quasi 2.400 anni di monarchia singalese ininterrotta.\n\nQuesta caduta tardiva significa che l’architettura reale, i rituali di corte e le tradizioni templari di Kandy sono sopravvissuti in gran parte intatti fino all’epoca moderna, offrendo alla città una continuità con il passato precoloniale più difficile da trovare altrove sull’isola.',
      },
      {
        title: 'La casa del Tempio del Sacro Dente',
        body: 'Il Sri Dalada Maligawa custodisce ciò che i buddhisti credono essere una reliquia del dente del Buddha, portata in Sri Lanka nel IV secolo e trasferita a Kandy quando il regno vi spostò la capitale. La reliquia stessa è raramente mostrata, ma le cerimonie con i tamburi due volte al giorno e il flusso costante di devoti bastano da soli a giustificare la visita.\n\nOgni agosto, il festival Esala Perahera fa sfilare per le strade una teca reliquiario replica su un elefante decorato, accompagnato da danzatori del fuoco, percussionisti e danzatori kandyani in costume completo una delle grandi processioni religiose dell’Asia, attorno alla quale vale la pena organizzare un viaggio se le date coincidono.',
      },
      {
        title: 'Cosa fare a Kandy',
        body: 'Oltre al Tempio del Dente, il Giardino Botanico Reale di Peradeniya, a pochi minuti dal centro, ospita una delle migliori collezioni di orchidee dell’Asia e un viale di palme imponenti piantate da reali e capi di stato in visita. La passeggiata al lago di Kandy al tramonto, con le volpi volanti che sfrecciano sopra la testa, è un piacere semplice e gratuito spesso sottovalutato.\n\nUno spettacolo di danza kandyana in serata tamburi, camminata sul fuoco e danza acrobatica mascherata radicata in tradizioni rituali di esorcismo offre un contesto utile prima o dopo la visita al tempio, e le colline sopra il lago offrono punti panoramici tranquilli su tutta la città.',
      },
      {
        title: 'Consigli pratici per la visita',
        body: 'Vestitevi in modo modesto per il Tempio del Dente: spalle e ginocchia coperte, scarpe tolte all’ingresso, e preparatevi a camminare scalzi in parte del sito. Gli orari delle cerimonie (circa 5:30-6:45, 9:30-11 e 18:30-20) valgono la pena di essere considerati se volete sentire i tamburi.\n\nIl traffico a Kandy può essere intenso e lento, specialmente intorno al lago nelle ore di punta, quindi prevedete tempo extra tra le attività piuttosto che un programma serrato se vi muovete in autonomia.',
      },
      {
        title: 'Clima a Kandy',
        body: 'A circa 500 metri di altitudine, Kandy è notevolmente più fresca della costa, ma più calda e meno nebbiosa di Ella o Nuwara Eliya, il che la rende comoda da visitare a piedi tutto l’anno. I mesi più piovosi tendono a cadere intorno a ottobre-novembre e di nuovo ad aprile-maggio, legati alla sovrapposizione dei due sistemi monsonici dell’isola sull’altopiano centrale.\n\nDa gennaio a marzo si hanno generalmente le condizioni più affidabilmente secche e limpide per le visite e la passeggiata serale al lago.',
      },
      {
        title: 'Attrazioni nei dintorni da abbinare',
        body: 'Sigiriya e Dambulla si trovano entrambe a circa 1,5-2 ore a nord, rendendo Kandy una naturale tappa notturna tra il Triangolo Culturale e l’entroterra collinare. L’orfanotrofio degli elefanti di Pinnawala, a circa 45 minuti, è un’aggiunta di mezza giornata popolare, sebbene i viaggiatori indipendenti preferiscano sempre più gli incontri più naturalistici con gli elefanti vicino a Udawalawe o Minneriya.\n\nElla e il paese del tè iniziano a circa due-tre ore a sud-est per strada o con un viaggio panoramico in treno, il che rende Kandy il classico punto di partenza per il viaggio ferroviario nell’entroterra collinare.',
      },
      {
        title: 'Dove alloggiare a Kandy',
        body: 'Gli hotel sul lago vi collocano a distanza a piedi dal Tempio del Dente e dalla passeggiata serale, generalmente la base più comoda per un breve soggiorno. Le strutture sulle colline sopra la città offrono in cambio ampie vedute sul lago e sui tetti, particolarmente piacevoli al tramonto.\n\nLe guesthouse economiche si concentrano nelle strade appena dietro al lago, a due passi da ristoranti, tempio e stazione ferroviaria.',
      },
      {
        title: 'Dove mangiare a Kandy',
        body: 'Kandy offre alcuni dei migliori buffet di rice and curry del paese, spesso organizzati attorno a una cucina centrale che serve venti o più piccoli piatti contemporaneamente un’ottima introduzione alla varietà della cucina singalese a base di verdure e legumi. Le dimensioni della città permettono anche una discreta offerta di cucina indiana, cinese e occidentale per chi cerca varietà.\n\nA pochi passi dal lago, alcuni semplici caffè locali servono kottu roti preparato al momento su una piastra calda da provare almeno una volta, tanto per lo spettacolo quanto per il piatto.',
      },
    ],
    faq: [
      {
        q: 'Quanto tempo dedicare a Kandy?',
        a: 'Una giornata intera copre comodamente il Tempio del Dente, il giardino botanico e una passeggiata serale al lago; due giorni permettono un ritmo più rilassato con tempo per uno spettacolo di danza kandyana e le colline circostanti.',
      },
      {
        q: 'Come vestirsi per visitare il Tempio del Sacro Dente?',
        a: 'Abbigliamento modesto che copra spalle e ginocchia, e scarpe tolte prima di entrare nelle aree interne del tempio. Sarong e scialli sono venduti vicino all’ingresso per i visitatori arrivati troppo scoperti.',
      },
      {
        q: 'Quando si svolge il festival Esala Perahera a Kandy?',
        a: 'Si svolge per dieci notti a luglio o agosto, secondo il calendario lunare e con variazioni ogni anno controllate le date attuali prima di prenotare se è una priorità, poiché gli alloggi si esauriscono con largo anticipo.',
      },
      {
        q: 'Kandy è una buona base per esplorare l’entroterra collinare?',
        a: 'Sì Kandy si trova all’estremità nord della panoramica ferrovia dell’entroterra verso Ella e Nuwara Eliya, ed è più o meno equidistante dal Triangolo Culturale e dall’altopiano, il che la rende un hub pratico per itinerari di più giorni.',
      },
      {
        q: 'Vale la pena visitare l’orfanotrofio degli elefanti di Pinnawala?',
        a: 'Le opinioni varianoinnawala è comodo e facile da raggiungere da Kandy, ma molti viaggiatori indipendenti preferiscono ora gli avvistamenti di elefanti selvatici a Minneriya, Kaudulla o nel parco nazionale di Udawalawe per un’esperienza più naturalistica.',
      },
    ],
    ctaTitle: 'Aggiungi Kandy al tuo itinerario',
    ctaBody: 'Ognuno dei nostri tour privati di più giorni passa per Kandy, programmato attorno alle cerimonie del Tempio del Dente e al Giardino Botanico Reale, con il vostro autista-guida che gestisce traffico e logistica.',
    ctaLabel: 'Pianifica la tua visita a Kandy',
    relatedTours: [
      { pageId: 'kandyDay', label: 'Tour di un giorno a Kandy' },
      { pageId: 'tour2ek', label: 'Tour di 2 giorni Ella e Kandy' },
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destDambulla', label: 'Dambulla' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Guida al paese del tè in Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Periodo migliore per visitare lo Sri Lanka' },
    ],
  },

  es: {
    h1: 'Kandy, Sri Lanka: la sagrada capital de las colinas del último reino',
    lead: 'Última capital en caer bajo el dominio colonial, Kandy sigue sintiéndose como el corazón espiritual de Sri Lanka: una ciudad junto a un lago construida alrededor de un templo que guarda una de las reliquias más sagradas del budismo, rodeada de colinas, jardines botánicos y plantaciones de té.',
    heroAlt: 'El Templo del Diente Sagrado reflejado en el lago de Kandy',
    sections: [
      {
        title: 'El último reino independiente',
        body: 'Kandy se convirtió en la capital del reino central de Sri Lanka en el siglo XVI y, gracias a su terreno y su estrategia, resistió las invasiones portuguesas y holandesas durante más de 250 años, más tiempo que cualquier otra potencia regional. Finalmente cayó ante los británicos en 1815, poniendo fin a casi 2.400 años de monarquía cingalesa ininterrumpida.\n\nEsa caída tardía significa que la arquitectura real, los rituales de corte y las tradiciones religiosas de Kandy sobrevivieron en gran parte intactos hasta la era moderna, dando a la ciudad una continuidad con el pasado precolonial más difícil de encontrar en otras partes de la isla.',
      },
      {
        title: 'Sede del Templo del Diente Sagrado',
        body: 'El Sri Dalada Maligawa alberga lo que los budistas consideran una reliquia del diente de Buda, traída a Sri Lanka en el siglo IV y trasladada a Kandy cuando el reino trasladó aquí su capital. La reliquia en sí rara vez se muestra, pero las ceremonias de tambores dos veces al día y el flujo constante de devotos son motivo suficiente para visitarla.\n\nCada agosto, el festival Esala Perahera hace desfilar por las calles un relicario réplica sobre un elefante decorado, acompañado de bailarines de fuego, percusionistas y bailarines candianos con trajes completos: una de las grandes procesiones religiosas de Asia, en torno a la que merece la pena planificar un viaje si las fechas coinciden.',
      },
      {
        title: 'Qué hacer en Kandy',
        body: 'Más allá del Templo del Diente, el Jardín Botánico Real de Peradeniya, a pocos minutos del centro, alberga una de las mejores colecciones de orquídeas de Asia y una avenida de palmeras imponentes plantadas por realeza y jefes de estado visitantes. El paseo por el lago de Kandy al atardecer, con zorros voladores surcando el cielo, es un placer sencillo y gratuito que muchos visitantes subestiman.\n\nUn espectáculo de danza candiana por la nocheores, caminata sobre fuego y danza acrobática enmascarada con raíces en rituales de exorcismo— aporta un contexto útil antes o después de la visita al templo, y las colinas sobre el lago ofrecen miradores tranquilos sobre toda la ciudad.',
      },
      {
        title: 'Consejos prácticos para la visita',
        body: 'Vista con recato para el Templo del Diente: hombros y rodillas cubiertos, calzado retirado en la entrada, y prepárese para caminar descalzo por parte del recinto. Los horarios de las ceremonias (aproximadamente 5:30-6:45, 9:30-11 y 18:30-20) merecen tenerse en cuenta si quiere escuchar a los tamborileros.\n\nEl tráfico en Kandy puede ser denso y lento, especialmente alrededor del lago en horas punta, así que reserve tiempo adicional entre actividades en lugar de un horario ajustado si se mueve de forma independiente.',
      },
      {
        title: 'Clima en Kandy',
        body: 'A unos 500 metros de altitud, Kandy es notablemente más fresca que la costa, pero más cálida y menos brumosa que Ella o Nuwara Eliya, lo que la hace agradable para caminar durante todo el año. Los meses más húmedos suelen darse alrededor de octubre-noviembre y de nuevo en abril-mayo, debido a la superposición de los dos sistemas monzónicos de la isla en las tierras altas centrales.\n\nDe enero a marzo suele ofrecer las condiciones secas y despejadas más fiables para las visitas y el paseo nocturno junto al lago.',
      },
      {
        title: 'Atracciones cercanas para combinar',
        body: 'Sigiriya y Dambulla están ambas a unas 1,5-2 horas al norte, lo que convierte a Kandy en una parada nocturna natural entre el Triángulo Cultural y las tierras altas. El orfanato de elefantes de Pinnawala, a unos 45 minutos, es un popular complemento de medio día, aunque los viajeros independientes cada vez prefieren más los encuentros más naturales con elefantes cerca de Udawalawe o Minneriya.\n\nElla y el país del té comienzan a unas dos o tres horas al sureste por carretera o con un trayecto panorámico en tren, lo que convierte a Kandy en el punto de partida clásico para el viaje ferroviario por las tierras altas.',
      },
      {
        title: 'Dónde alojarse en Kandy',
        body: 'Los hoteles junto al lago le sitúan a poca distancia a pie del Templo del Diente y del paseo nocturno, generalmente la base más práctica para una estancia corta. Los alojamientos en las colinas sobre la ciudad ofrecen a cambio amplias vistas sobre el lago y los tejados, especialmente agradables al atardecer.\n\nLas casas de huéspedes económicas se concentran en las calles justo detrás del lago, a poca distancia de restaurantes, el templo y la estación de tren.',
      },
      {
        title: 'Dónde comer en Kandy',
        body: 'Kandy tiene algunos de los mejores bufés de rice and curry del país, a menudo organizados en torno a una cocina central que sirve veinte o más platos pequeños a la vez, una excelente introducción a la variedad de la cocina cingalesa a base de verduras y legumbres. El tamaño de la ciudad también sostiene una oferta razonable de cocina india, china y occidental para quienes buscan variedad.\n\nA pocos pasos del lago, algunos cafés locales sencillos sirven kottu roti preparado al momento en una plancha caliente: vale la pena probarlo al menos una vez, tanto por el espectáculo como por el plato.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto tiempo dedicar a Kandy?',
        a: 'Un día completo cubre cómodamente el Templo del Diente, el jardín botánico y un paseo nocturno junto al lago; dos días permiten un ritmo más relajado con tiempo para un espectáculo de danza candiana y las colinas circundantes.',
      },
      {
        q: '¿Cómo vestirse para visitar el Templo del Diente Sagrado?',
        a: 'Ropa recatada que cubra hombros y rodillas, y calzado retirado antes de entrar en las zonas interiores del templo. Cerca de la entrada se venden sarongs y chales para los visitantes que llegan demasiado ligeros de ropa.',
      },
      {
        q: '¿Cuándo se celebra el festival Esala Perahera en Kandy?',
        a: 'Se celebra durante diez noches en julio o agosto, según el calendario lunar y con ligeras variaciones cada año; conviene comprobar las fechas actuales antes de reservar si es una prioridad, ya que el alojamiento se agota con mucha antelación.',
      },
      {
        q: '¿Es Kandy una buena base para explorar las tierras altas?',
        a: 'Sí: Kandy se encuentra en el extremo norte de la panorámica línea ferroviaria de las tierras altas hacia Ella y Nuwara Eliya, y está a una distancia similar del Triángulo Cultural y del altiplano, lo que la convierte en un punto de partida práctico para itinerarios de varios días.',
      },
      {
        q: '¿Merece la pena visitar el orfanato de elefantes de Pinnawala?',
        a: 'Las opiniones varían: Pinnawala es práctico y fácil de alcanzar desde Kandy, pero muchos viajeros independientes prefieren ahora los avistamientos de elefantes salvajes en Minneriya, Kaudulla o el Parque Nacional de Udawalawe para una experiencia más natural.',
      },
    ],
    ctaTitle: 'Añada Kandy a su itinerario',
    ctaBody: 'Todos nuestros tours privados de varios días pasan por Kandy, programados en torno a las ceremonias del Templo del Diente y el Jardín Botánico Real, con su chófer-guía encargándose del tráfico y la logística.',
    ctaLabel: 'Planifique su visita a Kandy',
    relatedTours: [
      { pageId: 'kandyDay', label: 'Tour de un día a Kandy' },
      { pageId: 'tour2ek', label: 'Tour de 2 días Ella y Kandy' },
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destDambulla', label: 'Dambulla' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Guía del país del té de Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Mejor época para visitar Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Kandy, Sri Lanka: święta górska stolica ostatniego królestwa',
    lead: 'Jako ostatnia stolica, która poddała się władzy kolonialnej, Kandy wciąż wydaje się duchowym sercem Sri Lanki – miasto nad jeziorem zbudowane wokół świątyni przechowującej jedną z najświętszych relikwii buddyzmu, otoczone wzgórzami, ogrodami botanicznymi i plantacjami herbaty.',
    heroAlt: 'Świątynia Świętego Zęba Buddy odbita w jeziorze Kandy',
    sections: [
      {
        title: 'Ostatnie niezależne królestwo',
        body: 'Kandy stało się stolicą centralnego królestwa Sri Lanki w XVI wieku i, dzięki terenowi oraz strategii, przez ponad 250 lat opierało się inwazjom portugalskim i holenderskim – dłużej niż jakakolwiek inna regionalna potęga. Ostatecznie padło pod władzą Brytyjczyków w 1815 roku, kończąc niemal 2400 lat nieprzerwanej monarchii lankijskiej.\n\nTo późne upadnięcie oznacza, że królewska architektura, dworskie rytuały i tradycje świątynne Kandy przetrwały w dużej mierze nienaruszone do epoki nowoczesnej, dając miastu ciągłość z przedkolonialną przeszłością, którą trudniej znaleźć gdzie indziej na wyspie.',
      },
      {
        title: 'Dom Świątyni Świętego Zęba Buddy',
        body: 'Sri Dalada Maligawa przechowuje to, co buddyści uznają za relikwię zęba Buddy, przywiezioną na Sri Lankę w IV wieku i przeniesioną do Kandy, gdy królestwo przeniosło tu swoją stolicę. Sama relikwia jest rzadko pokazywana, ale odbywające się dwa razy dziennie ceremonie z bębnami oraz nieprzerwany napływ wiernych są wystarczającym powodem do wizyty.\n\nKażdego sierpnia festiwal Esala Perahera prowadzi replikę relikwiarza ulicami na ozdobionym słoniu, w towarzystwie tancerzy ognia, bębniarzy i tancerzy kandyjskich w pełnych kostiumach – jedna z wielkich religijnych procesji Azji, wokół której warto zaplanować podróż, jeśli terminy się zgadzają.',
      },
      {
        title: 'Co robić w Kandy',
        body: 'Poza Świątynią Zęba, Królewski Ogród Botaniczny w Peradeniya, kilka minut od centrum, mieści jedną z najlepszych kolekcji orchidei w Azji oraz alejkę wysokich palm posadzonych przez rodzinę królewską i odwiedzających głów państw. Wieczorny spacer wokół jeziora Kandy, z nietoperzami owocożernymi przelatującymi nad głową, to prosta, darmowa przyjemność, którą wielu odwiedzających niedocenia.\n\nWieczorny spektakl tańca kandyjskiego – bębny, chodzenie po ogniu i akrobatyczny taniec w maskach zakorzeniony w rytualnych tradycjach egzorcyzmu – daje przydatny kontekst przed lub po wizycie w świątyni, a wzgórza nad jeziorem oferują spokojne punkty widokowe na całe miasto.',
      },
      {
        title: 'Praktyczne wskazówki dla zwiedzających',
        body: 'Ubierz się skromnie do Świątyni Zęba: zakryte ramiona i kolana, buty zdjęte przy wejściu, i przygotuj się na przejście części terenu na bosaka. Godziny ceremonii (około 5:30–6:45, 9:30–11 i 18:30–20:00) warto uwzględnić w planie wizyty, jeśli chcesz usłyszeć bębniarzy.\n\nRuch w Kandy bywa gęsty i wolny, szczególnie wokół jeziora w godzinach szczytu, więc zaplanuj dodatkowy czas między atrakcjami, a nie napięty harmonogram, jeśli poruszasz się samodzielnie.',
      },
      {
        title: 'Pogoda w Kandy',
        body: 'Na wysokości około 500 metrów Kandy jest wyraźnie chłodniejsze niż wybrzeże, ale cieplejsze i mniej mgliste niż Ella czy Nuwara Eliya, co czyni je przyjemnym do zwiedzania pieszo przez cały rok. Wilgotniejsze miesiące przypadają zwykle na październik–listopad oraz ponownie na kwiecień–maj, co wiąże się z nakładaniem się dwóch monsunowych systemów wyspy na centralnym wyżynie.\n\nStyczeń–marzec zwykle zapewnia najbardziej niezawodnie suche i przejrzyste warunki do zwiedzania i wieczornego spaceru wokół jeziora.',
      },
      {
        title: 'Atrakcje w okolicy warte połączenia',
        body: 'Sigiriya i Dambulla leżą obie około 1,5–2 godziny na północ, co czyni Kandy naturalnym przystankiem noclegowym między Trójkątem Kulturowym a górzystym interiorem. Sierociniec dla słoni w Pinnawali, około 45 minut stąd, to popularny dodatek na pół dnia, choć niezależni podróżni coraz częściej wolą bardziej naturalne spotkania ze słoniami w okolicach Udawalawe czy Minneriya.\n\nElla i kraina herbaty zaczynają się około dwie do trzech godzin na południowy wschód drogą lub widokową podróżą kolejową, co czyni Kandy klasycznym punktem wyjścia do kolejowej podróży po górach.',
      },
      {
        title: 'Gdzie się zatrzymać w Kandy',
        body: 'Hotele nad jeziorem umieszczają cię w zasięgu marszu od Świątyni Zęba i wieczornego spaceru, generalnie to najwygodniejsza baza na krótki pobyt. Obiekty na wzgórzach nad miastem oferują w zamian rozległe widoki na jezioro i dachy, szczególnie piękne o zachodzie słońca.\n\nBudżetowe pensjonaty skupiają się na ulicach tuż za jeziorem, blisko restauracji, świątyni i stacji kolejowej.',
      },
      {
        title: 'Gdzie zjeść w Kandy',
        body: 'Kandy ma niektóre z najlepszych bufetów rice and curry w kraju, często zorganizowanych wokół centralnej kuchni serwującej dwadzieścia lub więcej małych dań jednocześnie – doskonałe wprowadzenie do bogactwa lankijskiej kuchni warzywnej i strączkowej. Wielkość miasta wspiera też rozsądny wybór kuchni indyjskiej, chińskiej i zachodniej dla podróżnych szukających odmiany.\n\nKilka minut od jeziora, garstka prostych lokalnych kawiarni serwuje kottu roti przygotowywane na zamówienie na gorącej płycie – warto spróbować przynajmniej raz, choćby dla samego widowiska.',
      },
    ],
    faq: [
      {
        q: 'Ile czasu warto poświęcić na Kandy?',
        a: 'Jeden pełny dzień wystarczy na Świątynię Zęba, ogród botaniczny i wieczorny spacer wokół jeziora; dwa dni pozwalają na spokojniejsze tempo z czasem na spektakl tańca kandyjskiego i okoliczne wzgórza.',
      },
      {
        q: 'Jak się ubrać do wizyty w Świątyni Świętego Zęba Buddy?',
        a: 'Skromny strój zakrywający ramiona i kolana, buty zdjęte przed wejściem do wewnętrznych części świątyni. Sarongi i szale są sprzedawane blisko wejścia dla zwiedzających, którzy przyjechali w zbyt odkrytym ubraniu.',
      },
      {
        q: 'Kiedy odbywa się festiwal Esala Perahera w Kandy?',
        a: 'Trwa dziesięć nocy w lipcu lub sierpniu, zgodnie z kalendarzem księżycowym, co powoduje niewielkie zmiany terminu każdego roku – sprawdź aktualne daty przed rezerwacją, jeśli to dla Ciebie priorytet, bo noclegi wyprzedają się z dużym wyprzedzeniem.',
      },
      {
        q: 'Czy Kandy jest dobrą bazą do zwiedzania górskiego interioru?',
        a: 'Tak – Kandy leży na północnym końcu widokowej górskiej linii kolejowej do Elli i Nuwara Eliya i znajduje się w zbliżonej odległości od Trójkąta Kulturowego i wyżyny, co czyni je praktycznym węzłem na wielodniowych trasach.',
      },
      {
        q: 'Czy warto odwiedzić sierociniec dla słoni w Pinnawali?',
        a: 'Opinie są podzielone – Pinnawala jest wygodna i łatwo dostępna z Kandy, ale wielu niezależnych podróżnych obecnie preferuje bardziej naturalne spotkania z dzikimi słoniami w Minneriya, Kaudulli czy Parku Narodowym Udawalawe.',
      },
    ],
    ctaTitle: 'Dodaj Kandy do swojej trasy',
    ctaBody: 'Każda z naszych wielodniowych prywatnych wycieczek przejeżdża przez Kandy, zaplanowana wokół ceremonii w Świątyni Zęba i Królewskiego Ogrodu Botanicznego, a Twój kierowca-przewodnik zajmuje się ruchem i logistyką.',
    ctaLabel: 'Zaplanuj wizytę w Kandy',
    relatedTours: [
      { pageId: 'kandyDay', label: 'Jednodniowa wycieczka do Kandy' },
      { pageId: 'tour2ek', label: '2-dniowa wycieczka Ella i Kandy' },
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destDambulla', label: 'Dambulla' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Przewodnik po krainie herbaty na Sri Lance' },
      { pageId: 'guideBestTime', label: 'Najlepszy czas na wizytę na Sri Lance' },
    ],
  },

  ru: {
    h1: 'Канди, Шри-Ланка: священная горная столица последнего королевства',
    lead: 'Последняя столица, павшая под колониальным правлением, Канди до сих пор ощущается духовным сердцем Шри-Ланкиод у озера, построенный вокруг храма, хранящего одну из самых священных реликвий буддизма, окружённый холмами, ботаническими садами и чайными плантациями.',
    heroAlt: 'Храм Священного Зуба Будды отражается в озере Канди',
    sections: [
      {
        title: 'Последнее независимое королевство',
        body: 'Канди стал столицей центрального королевства Шри-Ланки в XVI веке и благодаря рельефу и стратегии более 250 лет сопротивлялся португальским и голландским завоеваниямьше, чем любая другая региональная власть. В итоге в 1815 году он пал под властью британцев, положив конец почти 2400-летней непрерывной шри-ланкийской монархии.\n\nЭто позднее падение означает, что королевская архитектура, придворные ритуалы и храмовые традиции Канди в значительной степени сохранились в неприкосновенности до наших дней, придавая городу связь с доколониальным прошлым, которую сложнее найти в других частях острова.',
      },
      {
        title: 'Дом Храма Священного Зуба Будды',
        body: 'Шри Далада Малигава хранит то, что буддисты считают реликвией зуба Будды, привезённой в Шри-Ланку в IV веке и перенесённой в Канди, когда королевство перенесло сюда свою столицу. Сама реликвия показывается редко, но церемонии барабанного боя, проходящие дважды в день, и непрерывный поток паломниковостаточная причина для визита.\n\nКаждый август фестиваль Эсала Перахера проводит по улицам копию раки с реликвией на украшенном слоне в сопровождении танцоров огня, барабанщиков и канди-танцоров в полном костюмедна из великих религиозных процессий Азии, вокруг которой стоит спланировать поездку, если даты совпадают.',
      },
      {
        title: 'Что посмотреть и сделать в Канди',
        body: 'Помимо Храма Зуба, Королевский ботанический сад в Перадении, в нескольких минутах от центра, хранит одну из лучших коллекций орхидей в Азии и аллею величественных пальм, посаженных членами королевской семьи и главами государств. Вечерняя прогулка вдоль озера Канди с летучими лисицами над головой простое бесплатное удовольствие, которое многие посетители недооценивают.\n\nВечернее представление канди-танца барабаны, хождение по огню и акробатический танец в масках, коренящийся в ритуальных традициях экзорцизма даёт полезный контекст до или после посещения храма, а холмы над озером предлагают спокойные виды на весь город.',
      },
      {
        title: 'Практические советы для посещения',
        body: 'Оденьтесь скромно для Храма Зуба: плечи и колени закрыты, обувь снимается при входе, будьте готовы пройти часть территории босиком. Время церемоний (примерно 5:30–6:45, 9:30–11 и 18:30–20:00) стоит учесть при планировании визита, если хотите услышать барабанщиков.\n\nДвижение в Канди может быть плотным и медленным, особенно вокруг озера в часы пик, поэтому закладывайте дополнительное время между мероприятиями, а не плотный график, если передвигаетесь самостоятельно.',
      },
      {
        title: 'Погода в Канди',
        body: 'На высоте около 500 метров Канди заметно прохладнее побережья, но теплее и менее туманно, чем Элла или Нувара-Элия, что делает город удобным для прогулок весь год. Более влажные месяцы обычно приходятся на октябрь–ноябрь и снова на апрель–май, что связано с перекрытием двух муссонных систем острова в центральном нагорье.\n\nС января по март обычно наблюдаются самые надёжно сухие и ясные условия для осмотра достопримечательностей и вечерней прогулки у озера.',
      },
      {
        title: 'Что посмотреть в окрестностях',
        body: 'Сигирия и Дамбулла находятся примерно в 1,5–2 часах езды на север, что делает Канди естественной остановкой с ночёвкой между Культурным треугольником и горной местностью. Приют для слонов в Пиннавале, примерно 45 минут езды, популярное дополнение на полдня, хотя самостоятельные путешественники всё чаще предпочитают более естественные встречи со слонами возле Удавалаве или Миннерии.\n\nЭлла и чайный край начинаются примерно в двух-трёх часах езды на юго-восток по дороге или живописной поездкой на поезде, что делает Канди классической отправной точкой для железнодорожного путешествия по горной местности.',
      },
      {
        title: 'Где остановиться в Канди',
        body: 'Отели у озера ставят вас в шаговой доступности от Храма Зуба и вечерней прогулки обычно это самая удобная база для короткого визита. Отели на холмах над городом предлагают взамен широкие виды на озеро и крыши, особенно приятные на закате.\n\nБюджетные гостевые дома сосредоточены на улицах чуть в стороне от озера, в двух шагах от ресторанов, храма и железнодорожной станции.',
      },
      {
        title: 'Где поесть в Канди',
        body: 'В Канди одни из лучших в стране буфетов rice and curry, часто организованных вокруг центральной кухни, подающей одновременно двадцать и более маленьких блюд отличное знакомство с разнообразием шри-ланкийской овощной и бобовой кухни. Размер города также поддерживает неплохой выбор индийской, китайской и западной кухни для тех, кто хочет разнообразия.\n\nВ нескольких минутах от озера несколько простых местных кафе готовят котту роти на заказ на горячей сковороде стоит попробовать хотя бы раз, ради самого зрелища не меньше, чем ради блюда.',
      },
    ],
    faq: [
      {
        q: 'Сколько времени провести в Канди?',
        a: 'Одного полного дня достаточно, чтобы спокойно осмотреть Храм Зуба, ботанический сад и совершить вечернюю прогулку у озера; два дня позволяют более расслабленный темп с представлением канди-танца и окрестными холмами.',
      },
      {
        q: 'Как одеться для посещения Храма Священного Зуба Будды?',
        a: 'Скромная одежда, закрывающая плечи и колени, обувь снимается перед входом во внутренние помещения храма. Возле входа продаются саронги и шали для посетителей, одетых слишком легко.',
      },
      {
        q: 'Когда проходит фестиваль Эсала Перахера в Канди?',
        a: 'Он длится десять ночей в июле или августе, приурочен к лунному календарю и немного смещается каждый год проверьте актуальные даты перед бронированием, если это важно для вас, поскольку жильё раскупается заранее.',
      },
      {
        q: 'Хорошая ли Канди база для изучения горной местности?',
        a: 'Да Канди находится на северном конце живописной горной железной дороги в Эллу и Нувара-Элию и примерно равноудалён от Культурного треугольника и нагорья, что делает его практичным узлом для многодневных маршрутов.',
      },
      {
        q: 'Стоит ли посещать приют для слонов в Пиннавале?',
        a: 'Мнения расходятся Пиннавала удобна и легко доступна из Канди, но многие самостоятельные путешественники теперь предпочитают наблюдение за дикими слонами в Миннерии, Каудулле или национальном парке Удавалаве для более естественного опыта.',
      },
    ],
    ctaTitle: 'Добавьте Канди в свой маршрут',
    ctaBody: 'Каждый из наших многодневных частных туров проходит через Канди, приурочен к церемониям в Храме Зуба и Королевскому ботаническому саду, а водитель-гид берёт на себя движение и логистику.',
    ctaLabel: 'Спланировать визит в Канди',
    relatedTours: [
      { pageId: 'kandyDay', label: 'Однодневный тур в Канди' },
      { pageId: 'tour2ek', label: '2-дневный тур Элла и Канди' },
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Сигирия' },
      { pageId: 'destDambulla', label: 'Дамбулла' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Гид по чайному краю Шри-Ланки' },
      { pageId: 'guideBestTime', label: 'Лучшее время для поездки в Шри-Ланку' },
    ],
  },
};
