import type { ArticleContent } from '../articles/types';

/**
 * Dambulla destination guide (pageId: destDambulla).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const DAMBULLA_DEST: ArticleContent = {
  en: {
    h1: 'Dambulla, Sri Lanka: The Golden Cave Temple of the Cultural Triangle',
    lead: 'Five caves carved into a single rock outcrop hold over 2,000 years of continuous Buddhist worship 153 Buddha statues, painted ceilings covering more than 2,100 square metres, and a working temple that pilgrims still climb to every day.',
    heroImage: 'assets/img/destination-5.webp',
    heroAlt: 'Golden Buddha statue and cave temple murals at Dambulla',
    sections: [
      {
        id: 'history',
        title: 'Over two millennia of continuous worship',
        body: 'Legend holds that King Valagamba took refuge in these caves in the 1st century BC after being driven from Anuradhapura, and vowed to build a temple here if he reclaimed his throne. He did, and Dambulla has functioned as an active place of worship ever since one of the longest unbroken religious sites in South Asia.\n\nSuccessive kings added statues, murals and shrines over the centuries, most notably during the Kandyan period in the 18th century, when much of the vivid painting seen today was completed. UNESCO listed the cave complex as a World Heritage Site in 1991.',
      },
      {
        id: 'culture',
        title: 'Five caves, five distinct atmospheres',
        body: 'Cave 1, the "Cave of the Divine King," centres on a 14 metre reclining Buddha carved directly from the rock. Cave 2, the largest and most visited, holds 56 statues and ceiling paintings depicting key events from the Buddha’s life and Sri Lankan history side by side.\n\nThe smaller caves 3, 4 and 5 are quieter and easy to overlook, but reward a slower visit with more intimate statue groupings and murals in noticeably different styles, reflecting different centuries of royal patronage.',
      },
      {
        id: 'thingsToDo',
        title: 'What to do at Dambulla',
        body: 'The climb from the base to the cave entrance takes 15 to 20 minutes up a paved path and stairway, considerably gentler than Sigiriya, with wide views over the surrounding plains and Sigiriya rock itself visible on a clear day. Removing shoes is required at the entrance and must be carried through all five caves, so a small bag helps.\n\nA new golden Buddha statue, over 30 metres tall, stands at the base near the museum and makes for an easy, air conditioned stop before or after the climb a useful break for travellers pairing Dambulla with Sigiriya on the same day.',
      },
      {
        id: 'travelTips',
        title: 'Practical tips for visiting',
        body: 'Modest dress is required throughout shoulders and knees covered and shoes come off entirely at the cave entrance, so socks are worth wearing since the stone floors can be hot at midday. Photography is generally permitted but flash photography of the statues is not.\n\nDambulla pairs naturally with Sigiriya as a single day, and doing Dambulla first, in the cooler morning, then Sigiriya once the initial rush has cleared, tends to work better than the reverse order.',
      },
      {
        id: 'weather',
        title: 'Weather at Dambulla',
        body: 'Like Sigiriya, Dambulla sits in the dry zone and is comfortable to visit most of the year, with January to April usually the driest and hottest window. The caves themselves stay relatively cool regardless of the weather outside, since the rock overhang provides natural shade and insulation.\n\nAfternoon thunderstorms are more common from October to December; the paved approach path can become slippery, so morning visits are preferable in that period.',
      },
      {
        id: 'nearby',
        title: 'Nearby attractions worth combining',
        body: 'Sigiriya Rock Fortress is just twenty minutes away and is by far the most common pairing for a single day trip. Kandy is roughly two hours south, a natural next stop for travellers heading into the hill country after the Cultural Triangle.\n\nThe wild elephant gathering grounds at Minneriya and Kaudulla National Parks are 30 to 40 minutes north east, particularly rewarding from July to October when large herds congregate along the reservoir shores.',
      },
      {
        id: 'hotels',
        title: 'Where to stay',
        body: 'Dambulla town itself has a practical mix of mid range hotels and guesthouses convenient for an early start on the caves, while the nearby village of Habarana offers a more scenic base with jungle lodges and lake view properties, many oriented towards views of Sigiriya rock in the distance.\n\nEither base works well for a Cultural Triangle itinerary; Habarana generally offers a quieter, greener stay at a similar price point.',
      },
      {
        id: 'restaurants',
        title: 'Eating around Dambulla',
        body: 'Rice and curry buffets aimed at day tour groups are common along the main road between Dambulla and Sigiriya, convenient for a quick, filling lunch between sightseeing stops. Several restaurants here serve a genuinely wide curry spread, since the volume of passing travellers supports more variety than smaller towns can.\n\nFor a quieter dinner, lodges in Habarana often serve open air meals overlooking paddy fields or small lakes, a pleasant contrast to the roadside lunch spots.',
      },
    ],
    faq: [
      {
        q: 'How long does a visit to Dambulla Cave Temple take?',
        a: 'Most visitors need 60 to 90 minutes to see all five caves comfortably, including the walk up from the base. Add extra time if you also want to visit the golden Buddha statue and small museum at the entrance.',
      },
      {
        q: 'Is Dambulla worth visiting if I’m also seeing Sigiriya?',
        a: 'Yes the two sites are only twenty minutes apart and are almost always visited together. Dambulla offers a gentler, shaded contrast to Sigiriya’s exposed rock climb, and the two together cover both the region’s religious and royal history.',
      },
      {
        q: 'What should I wear to visit Dambulla Cave Temple?',
        a: 'Modest clothing covering shoulders and knees is required, and shoes must be removed at the cave entrance. Bring socks if you are sensitive to hot stone floors, and a small bag to carry your shoes through all five caves.',
      },
      {
        q: 'Is photography allowed inside the caves?',
        a: 'General photography is usually permitted, but flash photography is not allowed near the painted ceilings and statues, both to protect the artwork and out of respect for the active place of worship.',
      },
      {
        q: 'What is the best time of day to visit Dambulla?',
        a: 'Morning visits are cooler and less crowded, especially useful if you plan to continue to Sigiriya the same day. The stone floors inside the caves also stay noticeably cooler underfoot earlier in the day.',
      },
    ],
    ctaTitle: 'Combine Dambulla with Sigiriya',
    ctaBody: 'Our Cultural Triangle day tours pair the Golden Cave Temple with Sigiriya Rock Fortress and an optional wild elephant safari, with your driver guide managing timing, tickets and the walk in walk out logistics of both sites.',
    ctaLabel: 'Plan your Dambulla day',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Sigiriya Day Tour' },
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
      { pageId: 'tour8', label: '8 Day Sri Lanka Private Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Best Time to Visit Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Sri Lanka Private Driver Guide' },
    ],
  },

  de: {
    h1: 'Dambulla, Sri Lanka: der Goldene Hohlentempel im Kulturdreieck',
    lead: 'Funf Hohlen, gehauen in einen einzigen Felsvorsprung, bewahren uber 2.000 Jahre ununterbrochenen buddhistischen Kultus  153 Buddha Statuen, bemalte Decken auf uber 2.100 Quadratmetern und einen aktiven Tempel, den Pilger noch taglich besteigen.',
    heroAlt: 'Goldene Buddha Statue und Hohlentempel Wandmalereien in Dambulla',
    sections: [
      {
        title: 'Uber zwei Jahrtausende ununterbrochener Verehrung',
        body: 'Der Legende nach suchte Konig Valagamba im 1. Jahrhundert v. Chr. Zuflucht in diesen Hohlen, nachdem er aus Anuradhapura vertrieben worden war, und schwor, hier einen Tempel zu errichten, sollte er seinen Thron zuruckgewinnen. Er tat es, und Dambulla dient seither ununterbrochen als aktiver Ort der Verehrung  eine der am langsten durchgehend genutzten religiosen Statten Sudasiens.\n\nAufeinanderfolgende Konige fugten uber Jahrhunderte Statuen, Wandmalereien und Schreine hinzu, insbesondere wahrend der Kandy Periode im 18. Jahrhundert, als ein Grossteil der heute sichtbaren lebendigen Malerei entstand. 1991 nahm die UNESCO den Hohlenkomplex in die Liste des Weltkulturerbes auf.',
      },
      {
        title: 'Funf Hohlen, funf verschiedene Atmospharen',
        body: 'Hohle 1, die „Hohle des gottlichen Konigs“, zentriert sich um einen 14 Meter langen liegenden Buddha, direkt aus dem Fels gehauen. Hohle 2, die grosste und meistbesuchte, beherbergt 56 Statuen und Deckenmalereien, die Schlusselszenen aus dem Leben Buddhas und der srilankischen Geschichte nebeneinander darstellen.\n\nDie kleineren Hohlen 3, 4 und 5 sind ruhiger und werden leicht ubersehen, belohnen aber einen langsameren Besuch mit intimeren Statuengruppen und Wandmalereien in deutlich unterschiedlichen Stilen, die verschiedene Jahrhunderte koniglicher Forderung widerspiegeln.',
      },
      {
        title: 'Was man in Dambulla unternehmen sollte',
        body: 'Der Aufstieg von der Basis zum Hohleneingang dauert 15 to 20 Minuten uber einen gepflasterten Weg und Stufen, deutlich sanfter als in Sigiriya, mit weiten Blicken uber die umliegenden Ebenen und, an klaren Tagen, den Sigiriya Felsen selbst. Am Eingang mussen die Schuhe ausgezogen werden und durch alle funf Hohlen getragen werden  eine kleine Tasche hilft dabei.\n\nEine neue, uber 30 Meter hohe goldene Buddha Statue steht an der Basis nahe dem Museum und bietet einen einfachen, klimatisierten Stopp vor oder nach dem Aufstieg  nutzlich fur Reisende, die Dambulla am selben Tag mit Sigiriya verbinden.',
      },
      {
        title: 'Praktische Tipps fur den Besuch',
        body: 'Dezente Kleidung ist uberall erforderlich  Schultern und Knie bedeckt  und Schuhe werden komplett am Hohleneingang ausgezogen; Socken sind daher sinnvoll, da die Steinboden mittags heiss werden konnen. Fotografieren ist grundsatzlich erlaubt, Blitzlicht bei den Statuen jedoch nicht.\n\nDambulla lasst sich naturlich mit Sigiriya an einem Tag verbinden, wobei sich Dambulla zuerst am kuhleren Morgen und Sigiriya danach, wenn der erste Andrang abgeklungen ist, besser bewahrt als die umgekehrte Reihenfolge.',
      },
      {
        title: 'Wetter in Dambulla',
        body: 'Wie Sigiriya liegt Dambulla in der Trockenzone und ist fast das ganze Jahr uber angenehm zu besuchen, wobei Januar bis April meist die trockenste und heisseste Phase ist. Die Hohlen selbst bleiben unabhangig vom Wetter draussen relativ kuhl, da der Felsuberhang naturlichen Schatten und Isolierung bietet.\n\nNachmittagsgewitter sind von Oktober bis Dezember haufiger; der gepflasterte Zugangsweg kann dann rutschig werden, weshalb Morgenbesuche in dieser Zeit vorzuziehen sind.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Die Felsenfestung Sigiriya liegt nur zwanzig Minuten entfernt und ist bei weitem die haufigste Kombination fur einen Tagesausflug. Kandy liegt etwa zwei Stunden sudlich, ein naturlicher nachster Stopp fur Reisende, die nach dem Kulturdreieck ins Bergland weiterreisen.\n\nDie Wildelefanten Sammelgebiete der Nationalparks Minneriya und Kaudulla liegen 30 to 40 Minuten nordostlich und sind besonders von Juli bis Oktober lohnend, wenn sich grosse Herden an den Ufern der Stauseen versammeln.',
      },
      {
        title: 'Wo man ubernachten kann',
        body: 'Die Stadt Dambulla selbst bietet eine praktische Mischung aus Mittelklassehotels und Gastehausern, gunstig fur einen fruhen Start zu den Hohlen, wahrend das nahe Habarana eine landschaftlich reizvollere Basis mit Dschungel Lodges und Seeblick Unterkunften bietet, viele mit Blick auf den fernen Sigiriya Felsen.\n\nBeide Basen funktionieren gut fur eine Kulturdreieck Route; Habarana bietet in der Regel einen ruhigeren, gruneren Aufenthalt zu ahnlichem Preis.',
      },
      {
        title: 'Essen rund um Dambulla',
        body: 'Rice and Curry Buffets fur Tagesausflugsgruppen sind entlang der Hauptstrasse zwischen Dambulla und Sigiriya ublich, praktisch fur ein schnelles, sattigendes Mittagessen zwischen den Besichtigungen. Mehrere Restaurants hier bieten eine wirklich breite Curry Auswahl, da das Aufkommen an durchreisenden Gasten mehr Vielfalt tragt als kleinere Ortschaften.\n\nFur ein ruhigeres Abendessen servieren Lodges in Habarana oft Mahlzeiten im Freien mit Blick auf Reisfelder oder kleine Seen  ein angenehmer Kontrast zu den Mittagsstopps an der Strasse.',
      },
    ],
    faq: [
      {
        q: 'Wie lange dauert ein Besuch im Hohlentempel von Dambulla?',
        a: 'Die meisten Besucher benotigen 60 to 90 Minuten, um alle funf Hohlen bequem zu sehen, einschliesslich des Aufstiegs von der Basis. Planen Sie zusatzliche Zeit ein, wenn Sie auch die goldene Buddha Statue und das kleine Museum am Eingang besuchen mochten.',
      },
      {
        q: 'Lohnt sich Dambulla, wenn ich auch Sigiriya besuche?',
        a: 'Ja  beide Orte liegen nur zwanzig Minuten voneinander entfernt und werden fast immer gemeinsam besucht. Dambulla bietet einen sanfteren, schattigen Kontrast zum exponierten Felsaufstieg von Sigiriya, und beide zusammen decken die religiose wie konigliche Geschichte der Region ab.',
      },
      {
        q: 'Was sollte ich fur den Besuch des Hohlentempels von Dambulla anziehen?',
        a: 'Dezente Kleidung, die Schultern und Knie bedeckt, ist erforderlich, und Schuhe mussen am Hohleneingang ausgezogen werden. Bringen Sie Socken mit, wenn Sie empfindlich auf heisse Steinboden reagieren, sowie eine kleine Tasche, um Ihre Schuhe durch alle funf Hohlen zu tragen.',
      },
      {
        q: 'Ist Fotografieren in den Hohlen erlaubt?',
        a: 'Fotografieren ist im Allgemeinen erlaubt, Blitzlicht jedoch nicht in der Nahe der bemalten Decken und Statuen  zum Schutz der Kunstwerke und aus Respekt vor dem aktiven Andachtsort.',
      },
      {
        q: 'Was ist die beste Tageszeit fur einen Besuch in Dambulla?',
        a: 'Morgenbesuche sind kuhler und weniger uberfullt, besonders nutzlich, wenn Sie am selben Tag nach Sigiriya weiterfahren mochten. Auch die Steinboden in den Hohlen bleiben fruh am Tag deutlich kuhler unter den Fussen.',
      },
    ],
    ctaTitle: 'Kombinieren Sie Dambulla mit Sigiriya',
    ctaBody: 'Unsere Kulturdreieck Tagestouren verbinden den Goldenen Hohlentempel mit der Felsenfestung Sigiriya und einer optionalen Wildelefanten Safari  Ihr Fahrer Guide ubernimmt Zeitplan, Tickets und die Logistik beider Orte.',
    ctaLabel: 'Dambulla Tag planen',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Sigiriya Tagestour' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige private Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Sri Lanka Fahrer Ratgeber' },
    ],
  },

  fr: {
    h1: 'Dambulla, Sri Lanka : le temple des grottes d’or du Triangle Culturel',
    lead: 'Cinq grottes creusees dans un seul affleurement rocheux conservent plus de 2 000 ans de culte bouddhiste ininterrompu 153 statues de Bouddha, des plafonds peints couvrant plus de 2 100 metres carres, et un temple actif que les pelerins gravissent encore chaque jour.',
    heroAlt: 'Statue doree de Bouddha et fresques du temple des grottes de Dambulla',
    sections: [
      {
        title: 'Plus de deux millenaires de culte ininterrompu',
        body: 'La legende raconte que le roi Valagamba se refugia dans ces grottes au Ier siecle avant notre ere apres avoir ete chasse d’Anuradhapura, et fit le voeu d’y construire un temple s’il retrouvait son trone. Il le fit, et Dambulla fonctionne depuis comme lieu de culte actif l’un des sites religieux les plus anciens sans interruption d’Asie du Sud.\n\nDes rois successifs ajouterent statues, fresques et sanctuaires au fil des siecles, notamment durant la periode kandyenne au XVIIIe siecle, quand fut achevee une grande partie de la peinture eclatante visible aujourd’hui. L’UNESCO a inscrit le complexe de grottes au patrimoine mondial en 1991.',
      },
      {
        title: 'Cinq grottes, cinq ambiances distinctes',
        body: 'La grotte 1, la « Grotte du roi divin », s’organise autour d’un Bouddha couche de 14 metres sculpte directement dans la roche. La grotte 2, la plus grande et la plus visitee, abrite 56 statues et des peintures de plafond representant cote a cote des episodes cles de la vie du Bouddha et de l’histoire du Sri Lanka.\n\nLes grottes plus petites, 3, 4 et 5, sont plus calmes et faciles a negliger, mais recompensent une visite plus lente par des groupes de statues plus intimes et des fresques dans des styles nettement differents, refletant divers siecles de mecenat royal.',
      },
      {
        title: 'Que faire a Dambulla',
        body: 'La montee depuis la base jusqu’a l’entree des grottes prend 15 a 20 minutes sur un chemin pave et des escaliers, bien plus douce qu’a Sigiriya, avec de larges vues sur les plaines environnantes et, par temps clair, le rocher de Sigiriya lui meme. Le retrait des chaussures est obligatoire a l’entree et elles doivent etre portees a travers les cinq grottes un petit sac facilite les choses.\n\nUne nouvelle statue doree de Bouddha, haute de plus de 30 metres, se dresse a la base pres du musee et constitue une halte facile et climatisee avant ou apres la montee utile pour les voyageurs combinant Dambulla et Sigiriya le meme jour.',
      },
      {
        title: 'Conseils pratiques pour la visite',
        body: 'Une tenue modeste est requise partout epaules et genoux couverts et les chaussures sont entierement retirees a l’entree des grottes ; des chaussettes valent donc la peine d’etre portees, car les sols en pierre peuvent chauffer a midi. La photographie est generalement permise, mais pas avec flash pres des statues.\n\nDambulla se combine naturellement avec Sigiriya en une seule journee, et commencer par Dambulla le matin, plus frais, puis Sigiriya une fois la premiere affluence retombee, fonctionne generalement mieux que l’ordre inverse.',
      },
      {
        title: 'Meteo a Dambulla',
        body: 'Comme Sigiriya, Dambulla se trouve en zone seche et se visite confortablement presque toute l’annee, janvier a avril etant generalement la periode la plus seche et la plus chaude. Les grottes elles memes restent relativement fraiches quel que soit le temps exterieur, l’avancee rocheuse offrant ombre et isolation naturelles.\n\nLes orages d’apres midi sont plus frequents d’octobre a decembre ; le chemin pave d’acces peut alors devenir glissant, rendant les visites matinales preferables durant cette periode.',
      },
      {
        title: 'Sites a combiner aux alentours',
        body: 'La forteresse rocheuse de Sigiriya n’est qu’a vingt minutes et constitue de loin la combinaison la plus courante pour une excursion d’une journee. Kandy se trouve a environ deux heures au sud, une etape naturelle suivante pour les voyageurs se dirigeant vers les hautes terres apres le Triangle Culturel.\n\nLes zones de rassemblement d’elephants sauvages des parcs nationaux de Minneriya et Kaudulla sont a 30-40 minutes au nord est, particulierement gratifiantes de juillet a octobre lorsque de grands troupeaux se reunissent le long des rives des reservoirs.',
      },
      {
        title: 'Ou loger',
        body: 'La ville de Dambulla propose un melange pratique d’hotels de milieu de gamme et de pensions, pratique pour un depart matinal vers les grottes, tandis que le village voisin d’Habarana offre une base plus pittoresque avec des lodges en pleine jungle et des hebergements avec vue sur le lac, beaucoup orientes vers le rocher de Sigiriya au loin.\n\nLes deux bases fonctionnent bien pour un itineraire dans le Triangle Culturel ; Habarana offre generalement un sejour plus calme et plus verdoyant a prix similaire.',
      },
      {
        title: 'Se restaurer autour de Dambulla',
        body: 'Les buffets de rice and curry destines aux groupes en excursion d’une journee sont courants le long de la route principale entre Dambulla et Sigiriya, pratiques pour un dejeuner rapide et copieux entre deux visites. Plusieurs restaurants ici proposent une offre de currys vraiment large, le volume de voyageurs de passage permettant plus de variete que dans les petites villes.\n\nPour un diner plus tranquille, les lodges d’Habarana servent souvent des repas en plein air avec vue sur les rizieres ou de petits lacs, un contraste agreable avec les haltes dejeuner en bord de route.',
      },
    ],
    faq: [
      {
        q: 'Combien de temps dure la visite du temple des grottes de Dambulla ?',
        a: 'La plupart des visiteurs ont besoin de 60 a 90 minutes pour voir confortablement les cinq grottes, montee depuis la base incluse. Prevoyez du temps supplementaire si vous souhaitez aussi visiter la statue doree de Bouddha et le petit musee a l’entree.',
      },
      {
        q: 'Dambulla vaut il la visite si je vois aussi Sigiriya ?',
        a: 'Oui les deux sites ne sont qu’a vingt minutes l’un de l’autre et sont presque toujours visites ensemble. Dambulla offre un contraste plus doux et ombrage a l’ascension exposee de Sigiriya, et les deux ensemble couvrent l’histoire religieuse et royale de la region.',
      },
      {
        q: 'Que dois je porter pour visiter le temple des grottes de Dambulla ?',
        a: 'Une tenue modeste couvrant epaules et genoux est requise, et les chaussures doivent etre retirees a l’entree des grottes. Apportez des chaussettes si vous etes sensible aux sols en pierre chauds, ainsi qu’un petit sac pour porter vos chaussures dans les cinq grottes.',
      },
      {
        q: 'La photographie est elle autorisee a l’interieur des grottes ?',
        a: 'La photographie generale est generalement autorisee, mais pas avec flash pres des plafonds peints et des statues, a la fois pour proteger les oeuvres d’art et par respect pour ce lieu de culte actif.',
      },
      {
        q: 'Quel est le meilleur moment de la journee pour visiter Dambulla ?',
        a: 'Les visites matinales sont plus fraiches et moins frequentees, particulierement utile si vous prevoyez de continuer vers Sigiriya le meme jour. Les sols en pierre des grottes restent aussi nettement plus frais sous les pieds tot dans la journee.',
      },
    ],
    ctaTitle: 'Combinez Dambulla avec Sigiriya',
    ctaBody: 'Nos excursions d’une journee dans le Triangle Culturel associent le temple des grottes d’or a la forteresse rocheuse de Sigiriya et, en option, a un safari aux elephants sauvages, votre chauffeur guide gerant les horaires, les billets et la logistique des deux sites.',
    ctaLabel: 'Planifier votre journee a Dambulla',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Excursion d’une journee a Sigiriya' },
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
      { pageId: 'tour8', label: 'Circuit prive de 8 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Meilleure periode pour visiter le Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur prive au Sri Lanka' },
    ],
  },

  it: {
    h1: 'Dambulla, Sri Lanka: il tempio delle grotte d’oro del Triangolo Culturale',
    lead: 'Cinque grotte scavate in un unico affioramento roccioso custodiscono oltre 2.000 anni di culto buddhista ininterrotto 153 statue del Buddha, soffitti dipinti che coprono piu di 2.100 metri quadrati e un tempio attivo che i pellegrini salgono ancora ogni giorno.',
    heroAlt: 'Statua dorata del Buddha e murales del tempio delle grotte a Dambulla',
    sections: [
      {
        title: 'Oltre due millenni di culto ininterrotto',
        body: 'La leggenda narra che il re Valagamba si rifugio in queste grotte nel I secolo a.C. dopo essere stato cacciato da Anuradhapura, e giuro di costruirvi un tempio se avesse riconquistato il trono. Cosi fece, e Dambulla funziona da allora come luogo di culto attivo uno dei siti religiosi ininterrotti piu longevi dell’Asia meridionale.\n\nRe successivi aggiunsero statue, murales e santuari nel corso dei secoli, in particolare durante il periodo kandyano nel XVIII secolo, quando fu completata gran parte della vivace pittura visibile oggi. L’UNESCO ha inserito il complesso di grotte nel Patrimonio dell’Umanita nel 1991.',
      },
      {
        title: 'Cinque grotte, cinque atmosfere distinte',
        body: 'La Grotta 1, la “Grotta del Re Divino”, e incentrata su un Buddha sdraiato di 14 metri scolpito direttamente nella roccia. La Grotta 2, la piu grande e visitata, custodisce 56 statue e dipinti sul soffitto che rappresentano fianco a fianco episodi chiave della vita del Buddha e della storia dello Sri Lanka.\n\nLe grotte piu piccole, 3, 4 e 5, sono piu tranquille e facili da trascurare, ma ricompensano una visita piu lenta con gruppi di statue piu intimi e murales in stili nettamente diversi, che riflettono diversi secoli di patronato reale.',
      },
      {
        title: 'Cosa fare a Dambulla',
        body: 'La salita dalla base all’ingresso delle grotte richiede 15 to 20 minuti su un sentiero pavimentato e scalinate, molto piu dolce che a Sigiriya, con ampie vedute sulle pianure circostanti e, nelle giornate limpide, sulla stessa roccia di Sigiriya. E obbligatorio togliersi le scarpe all’ingresso e portarle attraverso tutte le cinque grotte, quindi una piccola borsa e utile.\n\nUna nuova statua dorata del Buddha, alta oltre 30 metri, si trova alla base vicino al museo e offre una sosta semplice e climatizzata prima o dopo la salita utile per i viaggiatori che abbinano Dambulla a Sigiriya nella stessa giornata.',
      },
      {
        title: 'Consigli pratici per la visita',
        body: 'E richiesto un abbigliamento modesto ovunque spalle e ginocchia coperte e le scarpe si tolgono completamente all’ingresso delle grotte; i calzini sono quindi utili, poiche i pavimenti in pietra possono scaldarsi a mezzogiorno. La fotografia e generalmente consentita, ma non con il flash vicino alle statue.\n\nDambulla si combina naturalmente con Sigiriya in un’unica giornata, e visitare prima Dambulla al mattino piu fresco, poi Sigiriya una volta calato l’afflusso iniziale, funziona generalmente meglio dell’ordine inverso.',
      },
      {
        title: 'Clima a Dambulla',
        body: 'Come Sigiriya, Dambulla si trova nella zona secca ed e comoda da visitare quasi tutto l’anno, con gennaio aprile generalmente il periodo piu secco e caldo. Le grotte stesse restano relativamente fresche indipendentemente dal tempo esterno, poiche lo sperone roccioso offre ombra e isolamento naturali.\n\nI temporali pomeridiani sono piu frequenti da ottobre a dicembre; il sentiero pavimentato di accesso puo diventare scivoloso, rendendo preferibili le visite al mattino in quel periodo.',
      },
      {
        title: 'Attrazioni nei dintorni da abbinare',
        body: 'La fortezza rocciosa di Sigiriya e a soli venti minuti e rappresenta di gran lunga l’abbinamento piu comune per un’escursione di un giorno. Kandy si trova a circa due ore a sud, una naturale tappa successiva per chi si dirige verso l’entroterra collinare dopo il Triangolo Culturale.\n\nLe aree di raduno degli elefanti selvatici nei parchi nazionali di Minneriya e Kaudulla sono a 30-40 minuti a nord est, particolarmente gratificanti da luglio a ottobre quando grandi mandrie si riuniscono lungo le rive dei bacini.',
      },
      {
        title: 'Dove alloggiare',
        body: 'La citta di Dambulla offre un pratico mix di hotel di fascia media e guesthouse, comodo per una partenza mattutina verso le grotte, mentre il vicino villaggio di Habarana offre una base piu panoramica con lodge nella giungla e alloggi con vista lago, molti orientati verso la roccia di Sigiriya in lontananza.\n\nEntrambe le basi funzionano bene per un itinerario nel Triangolo Culturale; Habarana offre generalmente un soggiorno piu tranquillo e verde a un prezzo simile.',
      },
      {
        title: 'Dove mangiare intorno a Dambulla',
        body: 'I buffet di rice and curry pensati per i gruppi in gita giornaliera sono comuni lungo la strada principale tra Dambulla e Sigiriya, comodi per un pranzo rapido e abbondante tra una visita e l’altra. Diversi ristoranti qui offrono una selezione di curry davvero ampia, poiche il volume di viaggiatori in transito sostiene piu varieta rispetto ai centri piu piccoli.\n\nPer una cena piu tranquilla, i lodge di Habarana servono spesso pasti all’aperto con vista su risaie o piccoli laghi, un contrasto piacevole rispetto alle soste pranzo lungo la strada.',
      },
    ],
    faq: [
      {
        q: 'Quanto tempo richiede la visita al tempio delle grotte di Dambulla?',
        a: 'La maggior parte dei visitatori impiega 60-90 minuti per vedere comodamente tutte le cinque grotte, inclusa la salita dalla base. Aggiungete tempo extra se volete visitare anche la statua dorata del Buddha e il piccolo museo all’ingresso.',
      },
      {
        q: 'Dambulla vale la visita se vedo anche Sigiriya?',
        a: 'Si i due siti distano solo venti minuti e sono quasi sempre visitati insieme. Dambulla offre un contrasto piu dolce e ombreggiato rispetto alla scalata esposta di Sigiriya, e insieme coprono sia la storia religiosa che quella reale della regione.',
      },
      {
        q: 'Cosa dovrei indossare per visitare il tempio delle grotte di Dambulla?',
        a: 'E richiesto un abbigliamento modesto che copra spalle e ginocchia, e le scarpe devono essere tolte all’ingresso delle grotte. Portate calzini se siete sensibili ai pavimenti in pietra caldi, e una piccola borsa per portare le scarpe attraverso le cinque grotte.',
      },
      {
        q: 'E consentito fotografare all’interno delle grotte?',
        a: 'La fotografia generale e solitamente consentita, ma non con il flash vicino ai soffitti dipinti e alle statue, sia per proteggere le opere d’arte sia per rispetto verso questo luogo di culto attivo.',
      },
      {
        q: 'Qual e il momento migliore della giornata per visitare Dambulla?',
        a: 'Le visite al mattino sono piu fresche e meno affollate, particolarmente utili se prevedete di continuare verso Sigiriya lo stesso giorno. Anche i pavimenti in pietra delle grotte restano notevolmente piu freschi sotto i piedi nelle prime ore del giorno.',
      },
    ],
    ctaTitle: 'Abbina Dambulla a Sigiriya',
    ctaBody: 'I nostri tour di un giorno nel Triangolo Culturale abbinano il tempio delle grotte d’oro alla fortezza rocciosa di Sigiriya e, come opzione, a un safari tra gli elefanti selvatici, con il vostro autista guida che gestisce tempistiche, biglietti e la logistica di entrambi i siti.',
    ctaLabel: 'Pianifica la tua giornata a Dambulla',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Tour di un giorno a Sigiriya' },
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
      { pageId: 'tour8', label: 'Tour privato di 8 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Periodo migliore per visitare lo Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guida all’autista privato in Sri Lanka' },
    ],
  },

  es: {
    h1: 'Dambulla, Sri Lanka: el templo de las cuevas doradas del Triangulo Cultural',
    lead: 'Cinco cuevas excavadas en un unico afloramiento rocoso conservan mas de 2.000 anos de culto budista ininterrumpido: 153 estatuas de Buda, techos pintados que cubren mas de 2.100 metros cuadrados y un templo activo al que los peregrinos siguen subiendo cada dia.',
    heroAlt: 'Estatua dorada de Buda y murales del templo de las cuevas en Dambulla',
    sections: [
      {
        title: 'Mas de dos milenios de culto ininterrumpido',
        body: 'La leyenda cuenta que el rey Valagamba se refugio en estas cuevas en el siglo I a.C. tras ser expulsado de Anuradhapura, y prometio construir aqui un templo si recuperaba su trono. Asi lo hizo, y Dambulla ha funcionado desde entonces como un lugar de culto activo, uno de los sitios religiosos ininterrumpidos mas antiguos del sur de Asia.\n\nReyes sucesivos anadieron estatuas, murales y santuarios a lo largo de los siglos, sobre todo durante el periodo candiano en el siglo XVIII, cuando se completo gran parte de la vivida pintura que se ve hoy. La UNESCO declaro el complejo de cuevas Patrimonio de la Humanidad en 1991.',
      },
      {
        title: 'Cinco cuevas, cinco atmosferas distintas',
        body: 'La Cueva 1, la «Cueva del Rey Divino», se centra en un Buda reclinado de 14 metros esculpido directamente en la roca. La Cueva 2, la mas grande y visitada, alberga 56 estatuas y pinturas en el techo que representan lado a lado episodios clave de la vida de Buda y de la historia de Sri Lanka.\n\nLas cuevas mas pequenas, 3, 4 y 5, son mas tranquilas y faciles de pasar por alto, pero recompensan una visita mas pausada con agrupaciones de estatuas mas intimas y murales en estilos claramente distintos, reflejo de diferentes siglos de patronazgo real.',
      },
      {
        title: 'Que hacer en Dambulla',
        body: 'La subida desde la base hasta la entrada de las cuevas dura entre 15 y 20 minutos por un camino pavimentado y escalinatas, considerablemente mas suave que en Sigiriya, con amplias vistas sobre las llanuras circundantes y, en dias claros, la propia roca de Sigiriya. Es obligatorio quitarse el calzado en la entrada y llevarlo durante las cinco cuevas, asi que una bolsa pequena ayuda.\n\nUna nueva estatua dorada de Buda, de mas de 30 metros de altura, se alza en la base cerca del museo y ofrece una parada sencilla y con aire acondicionado antes o despues de la subida, util para quienes combinan Dambulla con Sigiriya el mismo dia.',
      },
      {
        title: 'Consejos practicos para la visita',
        body: 'Se requiere vestimenta recatada en todo momentohombros y rodillas cubiertos— y el calzado se retira completamente en la entrada de las cuevas, asi que merece la pena llevar calcetines, ya que los suelos de piedra pueden calentarse al mediodia. La fotografia suele estar permitida, pero no con flash cerca de las estatuas.\n\nDambulla se combina de forma natural con Sigiriya en un mismo dia, y visitar primero Dambulla por la manana, mas fresca, y despues Sigiriya una vez pasada la avalancha inicial, suele funcionar mejor que el orden inverso.',
      },
      {
        title: 'Clima en Dambulla',
        body: 'Igual que Sigiriya, Dambulla se encuentra en la zona seca y es comoda de visitar casi todo el ano, siendo enero a abril generalmente el periodo mas seco y caluroso. Las propias cuevas se mantienen relativamente frescas sin importar el clima exterior, ya que el saliente rocoso proporciona sombra y aislamiento naturales.\n\nLas tormentas de la tarde son mas frecuentes de octubre a diciembre; el camino pavimentado de acceso puede volverse resbaladizo, por lo que las visitas matutinas son preferibles en ese periodo.',
      },
      {
        title: 'Atracciones cercanas para combinar',
        body: 'La Fortaleza Rocosa de Sigiriya esta a solo veinte minutos y es, con diferencia, la combinacion mas habitual para una excursion de un dia. Kandy se encuentra a unas dos horas al sur, una siguiente parada natural para quienes se dirigen hacia las tierras altas tras el Triangulo Cultural.\n\nLas zonas de concentracion de elefantes salvajes en los parques nacionales de Minneriya y Kaudulla estan a 30-40 minutos al noreste, especialmente gratificantes de julio a octubre, cuando grandes manadas se reunen junto a las orillas de los embalses.',
      },
      {
        title: 'Donde alojarse',
        body: 'La propia localidad de Dambulla ofrece una mezcla practica de hoteles de gama media y casas de huespedes, comoda para salir temprano hacia las cuevas, mientras que el cercano pueblo de Habarana ofrece una base mas pintoresca con lodges en la selva y alojamientos con vista al lago, muchos orientados hacia la roca de Sigiriya en la distancia.\n\nAmbas bases funcionan bien para un itinerario por el Triangulo Cultural; Habarana suele ofrecer una estancia mas tranquila y verde a un precio similar.',
      },
      {
        title: 'Donde comer cerca de Dambulla',
        body: 'Los bufes de rice and curry pensados para grupos de excursion de un dia son habituales a lo largo de la carretera principal entre Dambulla y Sigiriya, practicos para un almuerzo rapido y abundante entre visitas. Varios restaurantes aqui ofrecen una seleccion de curry realmente amplia, ya que el volumen de viajeros de paso sostiene mas variedad que en poblaciones mas pequenas.\n\nPara una cena mas tranquila, los lodges de Habarana suelen servir comidas al aire libre con vistas a arrozales o pequenos lagos, un contraste agradable con las paradas de almuerzo junto a la carretera.',
      },
    ],
    faq: [
      {
        q: 'Cuanto dura la visita al templo de las cuevas de Dambulla?',
        a: 'La mayoria de los visitantes necesita entre 60 y 90 minutos para ver comodamente las cinco cuevas, incluida la subida desde la base. Anada tiempo extra si tambien quiere visitar la estatua dorada de Buda y el pequeno museo de la entrada.',
      },
      {
        q: 'Merece la pena Dambulla si tambien voy a ver Sigiriya?',
        a: 'Si: ambos lugares estan a solo veinte minutos entre si y casi siempre se visitan juntos. Dambulla ofrece un contraste mas suave y sombreado frente a la expuesta subida de Sigiriya, y juntos cubren tanto la historia religiosa como la real de la region.',
      },
      {
        q: 'Que debo ponerme para visitar el templo de las cuevas de Dambulla?',
        a: 'Se requiere ropa recatada que cubra hombros y rodillas, y el calzado debe retirarse en la entrada de las cuevas. Lleve calcetines si es sensible a los suelos de piedra calientes, y una bolsa pequena para llevar su calzado por las cinco cuevas.',
      },
      {
        q: 'Se puede fotografiar dentro de las cuevas?',
        a: 'La fotografia general suele estar permitida, pero no con flash cerca de los techos pintados y las estatuas, tanto para proteger las obras de arte como por respeto a este lugar de culto activo.',
      },
      {
        q: 'Cual es el mejor momento del dia para visitar Dambulla?',
        a: 'Las visitas por la manana son mas frescas y menos concurridas, especialmente util si planea continuar hacia Sigiriya el mismo dia. Los suelos de piedra de las cuevas tambien se mantienen notablemente mas frescos bajo los pies temprano en el dia.',
      },
    ],
    ctaTitle: 'Combine Dambulla con Sigiriya',
    ctaBody: 'Nuestros tours de un dia por el Triangulo Cultural combinan el templo de las cuevas doradas con la Fortaleza Rocosa de Sigiriya y, opcionalmente, un safari de elefantes salvajes, con su chofer guia gestionando los horarios, las entradas y la logistica de ambos lugares.',
    ctaLabel: 'Planifique su dia en Dambulla',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Tour de un dia a Sigiriya' },
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
      { pageId: 'tour8', label: 'Tour privado de 8 dias por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Mejor epoca para visitar Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guia del chofer privado en Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Dambulla, Sri Lanka: Zlota Swiatynia Jaskiniowa w Trojkacie Kulturowym',
    lead: 'Piec jaskin wykutych w jednym skalnym wzgorzu przechowuje ponad 2000 lat nieprzerwanego kultu buddyjskiego  153 posagi Buddy, malowane sufity na ponad 2100 metrach kwadratowych oraz dzialajaca swiatynie, na ktora pielgrzymi wciaz wchodza codziennie.',
    heroAlt: 'Zloty posag Buddy i malowidla swiatyni jaskiniowej w Dambulli',
    sections: [
      {
        title: 'Ponad dwa tysiaclecia nieprzerwanego kultu',
        body: 'Legenda mowi, ze krol Valagamba schronil sie w tych jaskiniach w I wieku p.n.e. po wygnaniu z Anuradhapury i przysiagl zbudowac tu swiatynie, jesli odzyska tron. Uczynil tak, a Dambulla od tego czasu funkcjonuje jako aktywne miejsce kultu  jedno z najdluzej nieprzerwanie dzialajacych miejsc religijnych w Azji Poludniowej.\n\nKolejni krolowie dodawali posagi, malowidla i sanktuaria przez wieki, zwlaszcza w okresie kandyjskim w XVIII wieku, kiedy powstala znaczna czesc zywej dzis kolorystyki. UNESCO wpisalo kompleks jaskin na Liste Swiatowego Dziedzictwa w 1991 roku.',
      },
      {
        title: 'Piec jaskin, piec odmiennych atmosfer',
        body: 'Jaskinia 1, „Jaskinia Boskiego Krola”, skupia sie na 14 metrowym lezacym Buddzie wykutym prosto w skale. Jaskinia 2, najwiesza i najczesciej odwiedzana, zawiera 56 posagow i malowidla na sufitach przedstawiajace obok siebie kluczowe wydarzenia z zycia Buddy i historii Sri Lanki.\n\nMniejsze jaskinie 3, 4 i 5 sa spokojniejsze i latwo je przeoczyc, ale wolniejsza wizyta wynagradza bardziej intymnymi grupami posagow i malowidlami w wyraznie roznych stylach, odzwierciedlajacych rozne wieki krolewskiego patronatu.',
      },
      {
        title: 'Co robic w Dambulli',
        body: 'Podejscie od podstawy do wejscia do jaskin zajmuje 15 to 20 minut po utwardzonej sciezce i schodach, znacznie lagodniejsze niz w Sigiriyi, z szerokimi widokami na otaczajace rowniny i, w pogodny dzien, na sama skale Sigiriya. Przy wejsciu obowiazuje zdjecie butow, ktore trzeba niesc przez wszystkie piec jaskin  przydaje sie mala torba.\n\nNowy zloty posag Buddy, o wysokosci ponad 30 metrow, stoi u podstawy blisko muzeum i stanowi latwy, klimatyzowany przystanek przed lub po podejsciu  przydatny dla podroznych laczacych Dambulle z Sigiriya tego samego dnia.',
      },
      {
        title: 'Praktyczne wskazowki dla zwiedzajacych',
        body: 'Skromny stroj jest wymagany na calym terenie  zakryte ramiona i kolana  a buty sa zdejmowane calkowicie przy wejsciu do jaskin, wiec warto nosic skarpetki, bo kamienne podlogi moga byc gorace w poludnie. Fotografowanie jest ogolnie dozwolone, ale nie z lampa blyskowa w poblizu posagow.\n\nDambulla naturalnie laczy sie z Sigiriya w jeden dzien, a odwiedzenie najpierw Dambulli w chlodniejszy poranek, a potem Sigiriyi, gdy pierwszy tlum juz zejdzie, zwykle dziala lepiej niz odwrotna kolejnosc.',
      },
      {
        title: 'Pogoda w Dambulli',
        body: 'Podobnie jak Sigiriya, Dambulla lezy w suchej strefie i jest wygodna do zwiedzania przez prawie caly rok, przy czym styczen–kwiecien to zwykle najsuchszy i najgoretszy okres. Same jaskinie pozostaja relatywnie chlodne niezaleznie od pogody na zewnatrz, poniewaz skalny nawis zapewnia naturalny cien i izolacje.\n\nPopoludniowe burze sa czestsze od pazdziernika do grudnia; utwardzona sciezka dojsciowa moze wtedy stac sie sliska, dlatego w tym okresie lepsze sa poranne wizyty.',
      },
      {
        title: 'Atrakcje w okolicy warte polaczenia',
        body: 'Skalna forteca Sigiriya jest tylko dwadziescia minut stad i to zdecydowanie najczestsze polaczenie na jednodniowa wycieczke. Kandy lezy okolo dwoch godzin na poludnie  naturalny kolejny przystanek dla podroznych kierujacych sie w gory po Trojkacie Kulturowym.\n\nTereny zbierania sie dzikich sloni w parkach narodowych Minneriya i Kaudulla sa 30 to 40 minut na polnocny wschod, szczegolnie satysfakcjonujace od lipca do pazdziernika, gdy duze stada gromadza sie wzdluz brzegow zbiornikow.',
      },
      {
        title: 'Gdzie sie zatrzymac',
        body: 'Samo miasto Dambulla oferuje praktyczna mieszanke hoteli sredniej klasy i pensjonatow, wygodna na wczesny start do jaskin, natomiast pobliska wioska Habarana oferuje bardziej krajobrazowa baze z lodzami w dzungli i obiektami z widokiem na jezioro, wiele zorientowanych na widok skaly Sigiriya w oddali.\n\nOba miejsca dobrze dzialaja jako baza na trase po Trojkacie Kulturowym; Habarana zwykle oferuje spokojniejszy, bardziej zielony pobyt w podobnej cenie.',
      },
      {
        title: 'Gdzie zjesc w okolicy Dambulli',
        body: 'Bufety rice and curry przeznaczone dla grup wycieczkowych sa powszechne wzdluz glownej drogi Dambulla and Sigiriya, wygodne na szybki, sycacy obiad miedzy atrakcjami. Kilka restauracji tutaj oferuje naprawde szeroki wybor curry, poniewaz liczba przejezdnych podroznych wspiera wieksza roznorodnosc niz mniejsze miasteczka.\n\nNa spokojniejsza kolacje lodze w Habaranie czesto serwuja posilki na swiezym powietrzu z widokiem na pola ryzowe lub male jeziora  przyjemny kontrast wobec przydroznych miejsc na obiad.',
      },
    ],
    faq: [
      {
        q: 'Jak dlugo trwa wizyta w Swiatyni Jaskiniowej w Dambulli?',
        a: 'Wiekszosci zwiedzajacych wystarczy 60 to 90 minut, by spokojnie zobaczyc wszystkie piec jaskin, wliczajac podejscie od podstawy. Dodaj dodatkowy czas, jesli chcesz tez odwiedzic zloty posag Buddy i male muzeum przy wejsciu.',
      },
      {
        q: 'Czy warto odwiedzic Dambulle, jesli zobacze tez Sigiriye?',
        a: 'Tak  oba miejsca sa w odleglosci tylko dwudziestu minut i prawie zawsze odwiedzane razem. Dambulla oferuje lagodniejszy, zacieniony kontrast do eksponowanej wspinaczki na Sigiriye, a razem pokrywaja zarowno religijna, jak i krolewska historie regionu.',
      },
      {
        q: 'Co powinienem nosic do Swiatyni Jaskiniowej w Dambulli?',
        a: 'Wymagany jest skromny stroj zakrywajacy ramiona i kolana, a buty musza byc zdjete przy wejsciu do jaskin. Wez skarpetki, jesli jestes wrazliwy na gorace kamienne podlogi, oraz mala torbe na buty do noszenia przez wszystkie piec jaskin.',
      },
      {
        q: 'Czy fotografowanie wewnatrz jaskin jest dozwolone?',
        a: 'Fotografowanie ogolnie jest dozwolone, ale nie z lampa blyskowa w poblizu malowanych sufitow i posagow, zarowno dla ochrony dziel sztuki, jak i z szacunku dla aktywnego miejsca kultu.',
      },
      {
        q: 'Jaka jest najlepsza pora dnia na wizyte w Dambulli?',
        a: 'Poranne wizyty sa chlodniejsze i mniej zatloczone, szczegolnie przydatne, jesli planujesz kontynuowac podroz do Sigiriyi tego samego dnia. Kamienne podlogi w jaskiniach rowniez pozostaja wyraznie chlodniejsze pod stopami wczesnie rano.',
      },
    ],
    ctaTitle: 'Polacz Dambulle z Sigiriya',
    ctaBody: 'Nasze jednodniowe wycieczki po Trojkacie Kulturowym lacza Zlota Swiatynie Jaskiniowa ze Skalna Forteca Sigiriya i opcjonalnym safari po dzikie slonie, a Twoj kierowca przewodnik zajmuje sie harmonogramem, biletami i logistyka obu miejsc.',
    ctaLabel: 'Zaplanuj swoj dzien w Dambulli',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Jednodniowa wycieczka do Sigiriyi' },
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour8', label: '8 dniowa prywatna wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Najlepszy czas na wizyte na Sri Lance' },
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnych kierowcach na Sri Lance' },
    ],
  },

  ru: {
    h1: 'Дамбулла, Шри Ланка: Золотой пещерный храм Культурного треугольника',
    lead: 'Пять пещер, вырезанных в одном скальном массиве, хранят более 2000 лет непрерывного буддийского культа 153 статуи Будды, расписные потолки площадью более 2100 квадратных метров и действующий храм, куда паломники до сих пор поднимаются каждый день.',
    heroAlt: 'Золотая статуя Будды и росписи пещерного храма в Дамбулле',
    sections: [
      {
        title: 'Более двух тысячелетий непрерывного культа',
        body: 'По легенде, царь Валагамба укрылся в этих пещерах в I веке до н.э. после изгнания из Анурадхапуры и дал обет построить здесь храм, если вернёт себе трон. Он это сделал, и с тех пор Дамбулла действует как активное место культа один из самых длительно непрерывно действующих религиозных объектов Южной Азии.\n\nСменявшие друг друга цари добавляли статуи, росписи и святыни на протяжении веков, особенно в канди период в XVIII веке, когда была завершена большая часть яркой живописи, видимой сегодня. В 1991 году ЮНЕСКО включила пещерный комплекс в список Всемирного наследия.',
      },
      {
        title: 'Пять пещер, пять разных атмосфер',
        body: 'Пещера 1, «Пещера Божественного Царя», центрируется вокруг лежащего Будды длиной 14 метров, вырезанного прямо в скале. Пещера 2, самая большая и посещаемая, хранит 56 статуй и росписи на потолке, изображающие рядом ключевые моменты из жизни Будды и истории Шри Ланки.\n\nМеньшие пещеры 3, 4 и 5 более тихие и легко упускаются из внимания, но вознаграждают более медленный визит более интимными группами статуй и росписями в заметно разных стилях, отражающих разные века королевского покровительства.',
      },
      {
        title: 'Что посмотреть и сделать в Дамбулле',
        body: 'Подъём от подножия к входу в пещеры занимает 15 to 20 минут по вымощенной тропе и лестнице значительно мягче, чем в Сигирии, с широкими видами на окружающие равнины и, в ясный день, на саму скалу Сигирии. При входе требуется снять обувь и нести её через все пять пещер, поэтому небольшая сумка будет полезна.\n\nНовая золотая статуя Будды высотой более 30 метров стоит у подножия рядом с музеем и служит простой, кондиционированной остановкой до или после подъёма удобной для путешественников, совмещающих Дамбуллу с Сигирией в один день.',
      },
      {
        title: 'Практические советы для посещения',
        body: 'Повсюду требуется скромная одежда закрытые плечи и колени, а обувь полностью снимается при входе в пещеры; поэтому стоит надеть носки, так как каменные полы могут быть горячими в полдень. Фотографирование обычно разрешено, но со вспышкой возле статуй нет.\n\nДамбулла естественно сочетается с Сигирией в один день, и посещение сначала Дамбуллы в более прохладное утро, а затем Сигирии, когда первый наплыв посетителей спадёт, обычно работает лучше, чем обратный порядок.',
      },
      {
        title: 'Погода в Дамбулле',
        body: 'Как и Сигирия, Дамбулла находится в засушливой зоне и удобна для посещения почти весь год, при этом январь–апрель обычно самый сухой и жаркий период. Сами пещеры остаются относительно прохладными независимо от погоды снаружи, поскольку скальный навес обеспечивает естественную тень и изоляцию.\n\nПослеполуденные грозы чаще случаются с октября по декабрь; вымощенная подходная тропа может стать скользкой, поэтому в этот период предпочтительны утренние визиты.',
      },
      {
        title: 'Что посмотреть в окрестностях',
        body: 'Скальная крепость Сигирия находится всего в двадцати минутах и является безусловно самым распространённым сочетанием для однодневной поездки. Канди расположен примерно в двух часах езды на юг естественная следующая остановка для путешественников, направляющихся в горную местность после Культурного треугольника.\n\nМеста сбора диких слонов в национальных парках Миннерия и Каудулла находятся в 30 to 40 минутах к северо востоку, особенно впечатляющие с июля по октябрь, когда большие стада собираются вдоль берегов водоёмов.',
      },
      {
        title: 'Где остановиться',
        body: 'Сам городок Дамбулла предлагает практичное сочетание отелей среднего класса и гостевых домов, удобное для раннего старта к пещерам, а близкая деревня Хабарана предлагает более живописную базу с лоджами в джунглях и жильём с видом на озеро, многие ориентированы на вид на скалу Сигирия в отдалении.\n\nОба варианта хорошо работают как база для маршрута по Культурному треугольнику; Хабарана обычно предлагает более спокойное, зелёное пребывание по схожей цене.',
      },
      {
        title: 'Где поесть в районе Дамбуллы',
        body: 'Буфеты rice and curry, рассчитанные на группы однодневных туров, распространены вдоль главной дороги Дамбулла–Сигирия, удобны для быстрого, сытного обеда между осмотрами. Несколько ресторанов здесь предлагают действительно широкий выбор карри, поскольку поток проезжающих путешественников поддерживает большее разнообразие, чем в небольших городках.\n\nДля более спокойного ужина лоджи в Хабаране часто подают еду на открытом воздухе с видом на рисовые поля или небольшие озёра приятный контраст с обеденными местами у дороги.',
      },
    ],
    faq: [
      {
        q: 'Сколько времени занимает посещение пещерного храма Дамбулла?',
        a: 'Большинству посетителей нужно 60 to 90 минут, чтобы спокойно осмотреть все пять пещер, включая подъём от подножия. Добавьте время, если хотите также посетить золотую статую Будды и небольшой музей у входа.',
      },
      {
        q: 'Стоит ли посещать Дамбуллу, если я также увижу Сигирию?',
        a: 'Да эти два места находятся всего в двадцати минутах друг от друга и почти всегда посещаются вместе. Дамбулла предлагает более мягкий, тенистый контраст открытому подъёму на Сигирию, а вместе они охватывают и религиозную, и королевскую историю региона.',
      },
      {
        q: 'Что надеть для посещения пещерного храма Дамбулла?',
        a: 'Требуется скромная одежда, закрывающая плечи и колени, а обувь нужно снять при входе в пещеры. Возьмите носки, если чувствительны к горячим каменным полам, и небольшую сумку, чтобы нести обувь через все пять пещер.',
      },
      {
        q: 'Разрешена ли фотосъёмка внутри пещер?',
        a: 'Обычная фотосъёмка, как правило, разрешена, но со вспышкой возле расписных потолков и статуй нет, как для защиты произведений искусства, так и из уважения к этому действующему месту культа.',
      },
      {
        q: 'Какое лучшее время дня для посещения Дамбуллы?',
        a: 'Утренние визиты прохладнее и менее многолюдны, что особенно полезно, если вы планируете продолжить путь в Сигирию в тот же день. Каменные полы в пещерах также остаются заметно прохладнее под ногами в начале дня.',
      },
    ],
    ctaTitle: 'Совместите Дамбуллу с Сигирией',
    ctaBody: 'Наши однодневные туры по Культурному треугольнику объединяют Золотой пещерный храм со скальной крепостью Сигирия и, по желанию, сафари к диким слонам водитель гид берёт на себя расписание, билеты и логистику обоих объектов.',
    ctaLabel: 'Спланировать день в Дамбулле',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Однодневный тур в Сигирию' },
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
      { pageId: 'tour8', label: '8 дневный частный тур по Шри Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Сигирия' },
      { pageId: 'destKandy', label: 'Канди' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Лучшее время для поездки в Шри Ланку' },
      { pageId: 'guidePrivateDriver', label: 'Гид по частным водителям Шри Ланки' },
    ],
  },
  nl: {
    h1: 'Dambulla, Sri Lanka: der Goldene Hohlentempel im Kulturdreieck',
    lead: 'Funf Hohlen, gehauen in einen einzigen Felsvorsprung, bewahren uber 2.000 Jahre ununterbrochenen buddhistischen Kultus  153 Buddha Statuen, bemalte Decken auf uber 2.100 Quadratmetern und einen aktiven Tempel, den Pilger noch taglich besteigen.',
    heroAlt: 'Goldene Buddha Statue und Hohlentempel Wandmalereien in Dambulla',
    sections: [
      {
        title: 'Uber zwei Jahrtausende ununterbrochener Verehrung',
        body: 'Der Legende nach suchte Konig Valagamba im 1. Jahrhundert v. Chr. Zuflucht in diesen Hohlen, nachdem er aus Anuradhapura vertrieben worden war, und schwor, hier einen Tempel zu errichten, sollte er seinen Thron zuruckgewinnen. Er tat es, und Dambulla dient seither ununterbrochen als aktiver Ort der Verehrung  eine der am langsten durchgehend genutzten religiosen Statten Sudasiens.\n\nAufeinanderfolgende Konige fugten uber Jahrhunderte Statuen, Wandmalereien und Schreine hinzu, insbesondere wahrend der Kandy Periode im 18. Jahrhundert, als ein Grossteil der heute sichtbaren lebendigen Malerei entstand. 1991 nahm die UNESCO den Hohlenkomplex in die Liste des Weltkulturerbes auf.',
      },
      {
        title: 'Funf Hohlen, funf verschiedene Atmospharen',
        body: 'Hohle 1, die „Hohle des gottlichen Konigs“, zentriert sich um einen 14 Meter langen liegenden Buddha, direkt aus dem Fels gehauen. Hohle 2, die grosste und meistbesuchte, beherbergt 56 Statuen und Deckenmalereien, die Schlusselszenen aus dem Leben Buddhas und der srilankischen Geschichte nebeneinander darstellen.\n\nDie kleineren Hohlen 3, 4 und 5 sind ruhiger und werden leicht ubersehen, belohnen aber einen langsameren Besuch mit intimeren Statuengruppen und Wandmalereien in deutlich unterschiedlichen Stilen, die verschiedene Jahrhunderte koniglicher Forderung widerspiegeln.',
      },
      {
        title: 'Was man in Dambulla unternehmen sollte',
        body: 'Der Aufstieg von der Basis zum Hohleneingang dauert 15 to 20 Minuten uber einen gepflasterten Weg und Stufen, deutlich sanfter als in Sigiriya, mit weiten Blicken uber die umliegenden Ebenen und, an klaren Tagen, den Sigiriya Felsen selbst. Am Eingang mussen die Schuhe ausgezogen werden und durch alle funf Hohlen getragen werden  eine kleine Tasche hilft dabei.\n\nEine neue, uber 30 Meter hohe goldene Buddha Statue steht an der Basis nahe dem Museum und bietet einen einfachen, klimatisierten Stopp vor oder nach dem Aufstieg  nutzlich fur Reisende, die Dambulla am selben Tag mit Sigiriya verbinden.',
      },
      {
        title: 'Praktische Tipps fur den Besuch',
        body: 'Dezente Kleidung ist uberall erforderlich  Schultern und Knie bedeckt  und Schuhe werden komplett am Hohleneingang ausgezogen; Socken sind daher sinnvoll, da die Steinboden mittags heiss werden konnen. Fotografieren ist grundsatzlich erlaubt, Blitzlicht bei den Statuen jedoch nicht.\n\nDambulla lasst sich naturlich mit Sigiriya an einem Tag verbinden, wobei sich Dambulla zuerst am kuhleren Morgen und Sigiriya danach, wenn der erste Andrang abgeklungen ist, besser bewahrt als die umgekehrte Reihenfolge.',
      },
      {
        title: 'Wetter in Dambulla',
        body: 'Wie Sigiriya liegt Dambulla in der Trockenzone und ist fast das ganze Jahr uber angenehm zu besuchen, wobei Januar bis April meist die trockenste und heisseste Phase ist. Die Hohlen selbst bleiben unabhangig vom Wetter draussen relativ kuhl, da der Felsuberhang naturlichen Schatten und Isolierung bietet.\n\nNachmittagsgewitter sind von Oktober bis Dezember haufiger; der gepflasterte Zugangsweg kann dann rutschig werden, weshalb Morgenbesuche in dieser Zeit vorzuziehen sind.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Die Felsenfestung Sigiriya liegt nur zwanzig Minuten entfernt und ist bei weitem die haufigste Kombination fur einen Tagesausflug. Kandy liegt etwa zwei Stunden sudlich, ein naturlicher nachster Stopp fur Reisende, die nach dem Kulturdreieck ins Bergland weiterreisen.\n\nDie Wildelefanten Sammelgebiete der Nationalparks Minneriya und Kaudulla liegen 30 to 40 Minuten nordostlich und sind besonders von Juli bis Oktober lohnend, wenn sich grosse Herden an den Ufern der Stauseen versammeln.',
      },
      {
        title: 'Wo man ubernachten kann',
        body: 'Die Stadt Dambulla selbst bietet eine praktische Mischung aus Mittelklassehotels und Gastehausern, gunstig fur einen fruhen Start zu den Hohlen, wahrend das nahe Habarana eine landschaftlich reizvollere Basis mit Dschungel Lodges und Seeblick Unterkunften bietet, viele mit Blick auf den fernen Sigiriya Felsen.\n\nBeide Basen funktionieren gut fur eine Kulturdreieck Route; Habarana bietet in der Regel einen ruhigeren, gruneren Aufenthalt zu ahnlichem Preis.',
      },
      {
        title: 'Essen rund um Dambulla',
        body: 'Rice and Curry Buffets fur Tagesausflugsgruppen sind entlang der Hauptstrasse zwischen Dambulla und Sigiriya ublich, praktisch fur ein schnelles, sattigendes Mittagessen zwischen den Besichtigungen. Mehrere Restaurants hier bieten eine wirklich breite Curry Auswahl, da das Aufkommen an durchreisenden Gasten mehr Vielfalt tragt als kleinere Ortschaften.\n\nFur ein ruhigeres Abendessen servieren Lodges in Habarana oft Mahlzeiten im Freien mit Blick auf Reisfelder oder kleine Seen  ein angenehmer Kontrast zu den Mittagsstopps an der Strasse.',
      },
    ],
    faq: [
      {
        q: 'Wie lange dauert ein Besuch im Hohlentempel von Dambulla?',
        a: 'Die meisten Besucher benotigen 60 to 90 Minuten, um alle funf Hohlen bequem zu sehen, einschliesslich des Aufstiegs von der Basis. Planen Sie zusatzliche Zeit ein, wenn Sie auch die goldene Buddha Statue und das kleine Museum am Eingang besuchen mochten.',
      },
      {
        q: 'Lohnt sich Dambulla, wenn ich auch Sigiriya besuche?',
        a: 'Ja  beide Orte liegen nur zwanzig Minuten voneinander entfernt und werden fast immer gemeinsam besucht. Dambulla bietet einen sanfteren, schattigen Kontrast zum exponierten Felsaufstieg von Sigiriya, und beide zusammen decken die religiose wie konigliche Geschichte der Region ab.',
      },
      {
        q: 'Was sollte ich fur den Besuch des Hohlentempels von Dambulla anziehen?',
        a: 'Dezente Kleidung, die Schultern und Knie bedeckt, ist erforderlich, und Schuhe mussen am Hohleneingang ausgezogen werden. Bringen Sie Socken mit, wenn Sie empfindlich auf heisse Steinboden reagieren, sowie eine kleine Tasche, um Ihre Schuhe durch alle funf Hohlen zu tragen.',
      },
      {
        q: 'Ist Fotografieren in den Hohlen erlaubt?',
        a: 'Fotografieren ist im Allgemeinen erlaubt, Blitzlicht jedoch nicht in der Nahe der bemalten Decken und Statuen  zum Schutz der Kunstwerke und aus Respekt vor dem aktiven Andachtsort.',
      },
      {
        q: 'Was ist die beste Tageszeit fur einen Besuch in Dambulla?',
        a: 'Morgenbesuche sind kuhler und weniger uberfullt, besonders nutzlich, wenn Sie am selben Tag nach Sigiriya weiterfahren mochten. Auch die Steinboden in den Hohlen bleiben fruh am Tag deutlich kuhler unter den Fussen.',
      },
    ],
    ctaTitle: 'Kombinieren Sie Dambulla mit Sigiriya',
    ctaBody: 'Unsere Kulturdreieck Tagestouren verbinden den Goldenen Hohlentempel mit der Felsenfestung Sigiriya und einer optionalen Wildelefanten Safari  Ihr Fahrer Guide ubernimmt Zeitplan, Tickets und die Logistik beider Orte.',
    ctaLabel: 'Dambulla Tag planen',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Sigiriya Tagestour' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige private Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Sri Lanka Fahrer Ratgeber' },
    ],
  }
};
