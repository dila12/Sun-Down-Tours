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
        body: 'Cave 1, the "Cave of the Divine King," centres on a 14-metre reclining Buddha carved directly from the rock. Cave 2, the largest and most visited, holds 56 statues and ceiling paintings depicting key events from the Buddha’s life and Sri Lankan history side by side.\n\nThe smaller caves 3, 4 and 5 are quieter and easy to overlook, but reward a slower visit with more intimate statue groupings and murals in noticeably different styles, reflecting different centuries of royal patronage.',
      },
      {
        id: 'thingsToDo',
        title: 'What to do at Dambulla',
        body: 'The climb from the base to the cave entrance takes 15–20 minutes up a paved path and stairway, considerably gentler than Sigiriya, with wide views over the surrounding plains and Sigiriya rock itself visible on a clear day. Removing shoes is required at the entrance and must be carried through all five caves, so a small bag helps.\n\nA new golden Buddha statue, over 30 metres tall, stands at the base near the museum and makes for an easy, air-conditioned stop before or after the climb a useful break for travellers pairing Dambulla with Sigiriya on the same day.',
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
        body: 'Sigiriya Rock Fortress is just twenty minutes away and is by far the most common pairing for a single day trip. Kandy is roughly two hours south, a natural next stop for travellers heading into the hill country after the Cultural Triangle.\n\nThe wild elephant gathering grounds at Minneriya and Kaudulla National Parks are 30–40 minutes north-east, particularly rewarding from July to October when large herds congregate along the reservoir shores.',
      },
      {
        id: 'hotels',
        title: 'Where to stay',
        body: 'Dambulla town itself has a practical mix of mid-range hotels and guesthouses convenient for an early start on the caves, while the nearby village of Habarana offers a more scenic base with jungle lodges and lake-view properties, many oriented towards views of Sigiriya rock in the distance.\n\nEither base works well for a Cultural Triangle itinerary; Habarana generally offers a quieter, greener stay at a similar price point.',
      },
      {
        id: 'restaurants',
        title: 'Eating around Dambulla',
        body: 'Rice and curry buffets aimed at day-tour groups are common along the main Dambulla–Sigiriya road, convenient for a quick, filling lunch between sightseeing stops. Several restaurants here serve a genuinely wide curry spread, since the volume of passing travellers supports more variety than smaller towns can.\n\nFor a quieter dinner, lodges in Habarana often serve open-air meals overlooking paddy fields or small lakes, a pleasant contrast to the roadside lunch spots.',
      },
    ],
    faq: [
      {
        q: 'How long does a visit to Dambulla Cave Temple take?',
        a: 'Most visitors need 60–90 minutes to see all five caves comfortably, including the walk up from the base. Add extra time if you also want to visit the golden Buddha statue and small museum at the entrance.',
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
    ctaBody: 'Our Cultural Triangle day tours pair the Golden Cave Temple with Sigiriya Rock Fortress and an optional wild elephant safari, with your driver-guide managing timing, tickets and the walk-in-walk-out logistics of both sites.',
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
    h1: 'Dambulla, Sri Lanka: der Goldene Höhlentempel im Kulturdreieck',
    lead: 'Fünf Höhlen, gehauen in einen einzigen Felsvorsprung, bewahren über 2.000 Jahre ununterbrochenen buddhistischen Kultus – 153 Buddha-Statuen, bemalte Decken auf über 2.100 Quadratmetern und einen aktiven Tempel, den Pilger noch täglich besteigen.',
    heroAlt: 'Goldene Buddha-Statue und Höhlentempel-Wandmalereien in Dambulla',
    sections: [
      {
        title: 'Über zwei Jahrtausende ununterbrochener Verehrung',
        body: 'Der Legende nach suchte König Valagamba im 1. Jahrhundert v. Chr. Zuflucht in diesen Höhlen, nachdem er aus Anuradhapura vertrieben worden war, und schwor, hier einen Tempel zu errichten, sollte er seinen Thron zurückgewinnen. Er tat es, und Dambulla dient seither ununterbrochen als aktiver Ort der Verehrung – eine der am längsten durchgehend genutzten religiösen Stätten Südasiens.\n\nAufeinanderfolgende Könige fügten über Jahrhunderte Statuen, Wandmalereien und Schreine hinzu, insbesondere während der Kandy-Periode im 18. Jahrhundert, als ein Großteil der heute sichtbaren lebendigen Malerei entstand. 1991 nahm die UNESCO den Höhlenkomplex in die Liste des Weltkulturerbes auf.',
      },
      {
        title: 'Fünf Höhlen, fünf verschiedene Atmosphären',
        body: 'Höhle 1, die „Höhle des göttlichen Königs“, zentriert sich um einen 14 Meter langen liegenden Buddha, direkt aus dem Fels gehauen. Höhle 2, die größte und meistbesuchte, beherbergt 56 Statuen und Deckenmalereien, die Schlüsselszenen aus dem Leben Buddhas und der srilankischen Geschichte nebeneinander darstellen.\n\nDie kleineren Höhlen 3, 4 und 5 sind ruhiger und werden leicht übersehen, belohnen aber einen langsameren Besuch mit intimeren Statuengruppen und Wandmalereien in deutlich unterschiedlichen Stilen, die verschiedene Jahrhunderte königlicher Förderung widerspiegeln.',
      },
      {
        title: 'Was man in Dambulla unternehmen sollte',
        body: 'Der Aufstieg von der Basis zum Höhleneingang dauert 15–20 Minuten über einen gepflasterten Weg und Stufen, deutlich sanfter als in Sigiriya, mit weiten Blicken über die umliegenden Ebenen und, an klaren Tagen, den Sigiriya-Felsen selbst. Am Eingang müssen die Schuhe ausgezogen werden und durch alle fünf Höhlen getragen werden – eine kleine Tasche hilft dabei.\n\nEine neue, über 30 Meter hohe goldene Buddha-Statue steht an der Basis nahe dem Museum und bietet einen einfachen, klimatisierten Stopp vor oder nach dem Aufstieg – nützlich für Reisende, die Dambulla am selben Tag mit Sigiriya verbinden.',
      },
      {
        title: 'Praktische Tipps für den Besuch',
        body: 'Dezente Kleidung ist überall erforderlich – Schultern und Knie bedeckt – und Schuhe werden komplett am Höhleneingang ausgezogen; Socken sind daher sinnvoll, da die Steinböden mittags heiß werden können. Fotografieren ist grundsätzlich erlaubt, Blitzlicht bei den Statuen jedoch nicht.\n\nDambulla lässt sich natürlich mit Sigiriya an einem Tag verbinden, wobei sich Dambulla zuerst am kühleren Morgen und Sigiriya danach, wenn der erste Andrang abgeklungen ist, besser bewährt als die umgekehrte Reihenfolge.',
      },
      {
        title: 'Wetter in Dambulla',
        body: 'Wie Sigiriya liegt Dambulla in der Trockenzone und ist fast das ganze Jahr über angenehm zu besuchen, wobei Januar bis April meist die trockenste und heißeste Phase ist. Die Höhlen selbst bleiben unabhängig vom Wetter draußen relativ kühl, da der Felsüberhang natürlichen Schatten und Isolierung bietet.\n\nNachmittagsgewitter sind von Oktober bis Dezember häufiger; der gepflasterte Zugangsweg kann dann rutschig werden, weshalb Morgenbesuche in dieser Zeit vorzuziehen sind.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Die Felsenfestung Sigiriya liegt nur zwanzig Minuten entfernt und ist bei weitem die häufigste Kombination für einen Tagesausflug. Kandy liegt etwa zwei Stunden südlich, ein natürlicher nächster Stopp für Reisende, die nach dem Kulturdreieck ins Bergland weiterreisen.\n\nDie Wildelefanten-Sammelgebiete der Nationalparks Minneriya und Kaudulla liegen 30–40 Minuten nordöstlich und sind besonders von Juli bis Oktober lohnend, wenn sich große Herden an den Ufern der Stauseen versammeln.',
      },
      {
        title: 'Wo man übernachten kann',
        body: 'Die Stadt Dambulla selbst bietet eine praktische Mischung aus Mittelklassehotels und Gästehäusern, günstig für einen frühen Start zu den Höhlen, während das nahe Habarana eine landschaftlich reizvollere Basis mit Dschungel-Lodges und Seeblick-Unterkünften bietet, viele mit Blick auf den fernen Sigiriya-Felsen.\n\nBeide Basen funktionieren gut für eine Kulturdreieck-Route; Habarana bietet in der Regel einen ruhigeren, grüneren Aufenthalt zu ähnlichem Preis.',
      },
      {
        title: 'Essen rund um Dambulla',
        body: 'Rice-and-Curry-Buffets für Tagesausflugsgruppen sind entlang der Hauptstraße Dambulla–Sigiriya üblich, praktisch für ein schnelles, sättigendes Mittagessen zwischen den Besichtigungen. Mehrere Restaurants hier bieten eine wirklich breite Curry-Auswahl, da das Aufkommen an durchreisenden Gästen mehr Vielfalt trägt als kleinere Ortschaften.\n\nFür ein ruhigeres Abendessen servieren Lodges in Habarana oft Mahlzeiten im Freien mit Blick auf Reisfelder oder kleine Seen – ein angenehmer Kontrast zu den Mittagsstopps an der Straße.',
      },
    ],
    faq: [
      {
        q: 'Wie lange dauert ein Besuch im Höhlentempel von Dambulla?',
        a: 'Die meisten Besucher benötigen 60–90 Minuten, um alle fünf Höhlen bequem zu sehen, einschließlich des Aufstiegs von der Basis. Planen Sie zusätzliche Zeit ein, wenn Sie auch die goldene Buddha-Statue und das kleine Museum am Eingang besuchen möchten.',
      },
      {
        q: 'Lohnt sich Dambulla, wenn ich auch Sigiriya besuche?',
        a: 'Ja – beide Orte liegen nur zwanzig Minuten voneinander entfernt und werden fast immer gemeinsam besucht. Dambulla bietet einen sanfteren, schattigen Kontrast zum exponierten Felsaufstieg von Sigiriya, und beide zusammen decken die religiöse wie königliche Geschichte der Region ab.',
      },
      {
        q: 'Was sollte ich für den Besuch des Höhlentempels von Dambulla anziehen?',
        a: 'Dezente Kleidung, die Schultern und Knie bedeckt, ist erforderlich, und Schuhe müssen am Höhleneingang ausgezogen werden. Bringen Sie Socken mit, wenn Sie empfindlich auf heiße Steinböden reagieren, sowie eine kleine Tasche, um Ihre Schuhe durch alle fünf Höhlen zu tragen.',
      },
      {
        q: 'Ist Fotografieren in den Höhlen erlaubt?',
        a: 'Fotografieren ist im Allgemeinen erlaubt, Blitzlicht jedoch nicht in der Nähe der bemalten Decken und Statuen – zum Schutz der Kunstwerke und aus Respekt vor dem aktiven Andachtsort.',
      },
      {
        q: 'Was ist die beste Tageszeit für einen Besuch in Dambulla?',
        a: 'Morgenbesuche sind kühler und weniger überfüllt, besonders nützlich, wenn Sie am selben Tag nach Sigiriya weiterfahren möchten. Auch die Steinböden in den Höhlen bleiben früh am Tag deutlich kühler unter den Füßen.',
      },
    ],
    ctaTitle: 'Kombinieren Sie Dambulla mit Sigiriya',
    ctaBody: 'Unsere Kulturdreieck-Tagestouren verbinden den Goldenen Höhlentempel mit der Felsenfestung Sigiriya und einer optionalen Wildelefanten-Safari – Ihr Fahrer-Guide übernimmt Zeitplan, Tickets und die Logistik beider Orte.',
    ctaLabel: 'Dambulla-Tag planen',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Sigiriya Tagestour' },
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'tour8', label: '8-tägige private Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit für Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Sri Lanka Fahrer-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Dambulla, Sri Lanka : le temple des grottes d’or du Triangle Culturel',
    lead: 'Cinq grottes creusées dans un seul affleurement rocheux conservent plus de 2 000 ans de culte bouddhiste ininterrompu 153 statues de Bouddha, des plafonds peints couvrant plus de 2 100 mètres carrés, et un temple actif que les pèlerins gravissent encore chaque jour.',
    heroAlt: 'Statue dorée de Bouddha et fresques du temple des grottes de Dambulla',
    sections: [
      {
        title: 'Plus de deux millénaires de culte ininterrompu',
        body: 'La légende raconte que le roi Valagamba se réfugia dans ces grottes au Ier siècle avant notre ère après avoir été chassé d’Anuradhapura, et fit le vœu d’y construire un temple s’il retrouvait son trône. Il le fit, et Dambulla fonctionne depuis comme lieu de culte actif l’un des sites religieux les plus anciens sans interruption d’Asie du Sud.\n\nDes rois successifs ajoutèrent statues, fresques et sanctuaires au fil des siècles, notamment durant la période kandyenne au XVIIIe siècle, quand fut achevée une grande partie de la peinture éclatante visible aujourd’hui. L’UNESCO a inscrit le complexe de grottes au patrimoine mondial en 1991.',
      },
      {
        title: 'Cinq grottes, cinq ambiances distinctes',
        body: 'La grotte 1, la « Grotte du roi divin », s’organise autour d’un Bouddha couché de 14 mètres sculpté directement dans la roche. La grotte 2, la plus grande et la plus visitée, abrite 56 statues et des peintures de plafond représentant côte à côte des épisodes clés de la vie du Bouddha et de l’histoire du Sri Lanka.\n\nLes grottes plus petites, 3, 4 et 5, sont plus calmes et faciles à négliger, mais récompensent une visite plus lente par des groupes de statues plus intimes et des fresques dans des styles nettement différents, reflétant divers siècles de mécénat royal.',
      },
      {
        title: 'Que faire à Dambulla',
        body: 'La montée depuis la base jusqu’à l’entrée des grottes prend 15 à 20 minutes sur un chemin pavé et des escaliers, bien plus douce qu’à Sigiriya, avec de larges vues sur les plaines environnantes et, par temps clair, le rocher de Sigiriya lui-même. Le retrait des chaussures est obligatoire à l’entrée et elles doivent être portées à travers les cinq grottes un petit sac facilite les choses.\n\nUne nouvelle statue dorée de Bouddha, haute de plus de 30 mètres, se dresse à la base près du musée et constitue une halte facile et climatisée avant ou après la montée utile pour les voyageurs combinant Dambulla et Sigiriya le même jour.',
      },
      {
        title: 'Conseils pratiques pour la visite',
        body: 'Une tenue modeste est requise partout épaules et genoux couverts et les chaussures sont entièrement retirées à l’entrée des grottes ; des chaussettes valent donc la peine d’être portées, car les sols en pierre peuvent chauffer à midi. La photographie est généralement permise, mais pas avec flash près des statues.\n\nDambulla se combine naturellement avec Sigiriya en une seule journée, et commencer par Dambulla le matin, plus frais, puis Sigiriya une fois la première affluence retombée, fonctionne généralement mieux que l’ordre inverse.',
      },
      {
        title: 'Météo à Dambulla',
        body: 'Comme Sigiriya, Dambulla se trouve en zone sèche et se visite confortablement presque toute l’année, janvier à avril étant généralement la période la plus sèche et la plus chaude. Les grottes elles-mêmes restent relativement fraîches quel que soit le temps extérieur, l’avancée rocheuse offrant ombre et isolation naturelles.\n\nLes orages d’après-midi sont plus fréquents d’octobre à décembre ; le chemin pavé d’accès peut alors devenir glissant, rendant les visites matinales préférables durant cette période.',
      },
      {
        title: 'Sites à combiner aux alentours',
        body: 'La forteresse rocheuse de Sigiriya n’est qu’à vingt minutes et constitue de loin la combinaison la plus courante pour une excursion d’une journée. Kandy se trouve à environ deux heures au sud, une étape naturelle suivante pour les voyageurs se dirigeant vers les hautes terres après le Triangle Culturel.\n\nLes zones de rassemblement d’éléphants sauvages des parcs nationaux de Minneriya et Kaudulla sont à 30-40 minutes au nord-est, particulièrement gratifiantes de juillet à octobre lorsque de grands troupeaux se réunissent le long des rives des réservoirs.',
      },
      {
        title: 'Où loger',
        body: 'La ville de Dambulla propose un mélange pratique d’hôtels de milieu de gamme et de pensions, pratique pour un départ matinal vers les grottes, tandis que le village voisin d’Habarana offre une base plus pittoresque avec des lodges en pleine jungle et des hébergements avec vue sur le lac, beaucoup orientés vers le rocher de Sigiriya au loin.\n\nLes deux bases fonctionnent bien pour un itinéraire dans le Triangle Culturel ; Habarana offre généralement un séjour plus calme et plus verdoyant à prix similaire.',
      },
      {
        title: 'Se restaurer autour de Dambulla',
        body: 'Les buffets de rice and curry destinés aux groupes en excursion d’une journée sont courants le long de la route principale Dambulla–Sigiriya, pratiques pour un déjeuner rapide et copieux entre deux visites. Plusieurs restaurants ici proposent une offre de currys vraiment large, le volume de voyageurs de passage permettant plus de variété que dans les petites villes.\n\nPour un dîner plus tranquille, les lodges d’Habarana servent souvent des repas en plein air avec vue sur les rizières ou de petits lacs, un contraste agréable avec les haltes déjeuner en bord de route.',
      },
    ],
    faq: [
      {
        q: 'Combien de temps dure la visite du temple des grottes de Dambulla ?',
        a: 'La plupart des visiteurs ont besoin de 60 à 90 minutes pour voir confortablement les cinq grottes, montée depuis la base incluse. Prévoyez du temps supplémentaire si vous souhaitez aussi visiter la statue dorée de Bouddha et le petit musée à l’entrée.',
      },
      {
        q: 'Dambulla vaut-il la visite si je vois aussi Sigiriya ?',
        a: 'Oui les deux sites ne sont qu’à vingt minutes l’un de l’autre et sont presque toujours visités ensemble. Dambulla offre un contraste plus doux et ombragé à l’ascension exposée de Sigiriya, et les deux ensemble couvrent l’histoire religieuse et royale de la région.',
      },
      {
        q: 'Que dois-je porter pour visiter le temple des grottes de Dambulla ?',
        a: 'Une tenue modeste couvrant épaules et genoux est requise, et les chaussures doivent être retirées à l’entrée des grottes. Apportez des chaussettes si vous êtes sensible aux sols en pierre chauds, ainsi qu’un petit sac pour porter vos chaussures dans les cinq grottes.',
      },
      {
        q: 'La photographie est-elle autorisée à l’intérieur des grottes ?',
        a: 'La photographie générale est généralement autorisée, mais pas avec flash près des plafonds peints et des statues, à la fois pour protéger les œuvres d’art et par respect pour ce lieu de culte actif.',
      },
      {
        q: 'Quel est le meilleur moment de la journée pour visiter Dambulla ?',
        a: 'Les visites matinales sont plus fraîches et moins fréquentées, particulièrement utile si vous prévoyez de continuer vers Sigiriya le même jour. Les sols en pierre des grottes restent aussi nettement plus frais sous les pieds tôt dans la journée.',
      },
    ],
    ctaTitle: 'Combinez Dambulla avec Sigiriya',
    ctaBody: 'Nos excursions d’une journée dans le Triangle Culturel associent le temple des grottes d’or à la forteresse rocheuse de Sigiriya et, en option, à un safari aux éléphants sauvages, votre chauffeur-guide gérant les horaires, les billets et la logistique des deux sites.',
    ctaLabel: 'Planifier votre journée à Dambulla',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Excursion d’une journée à Sigiriya' },
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
      { pageId: 'tour8', label: 'Circuit privé de 8 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Meilleure période pour visiter le Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur privé au Sri Lanka' },
    ],
  },

  it: {
    h1: 'Dambulla, Sri Lanka: il tempio delle grotte d’oro del Triangolo Culturale',
    lead: 'Cinque grotte scavate in un unico affioramento roccioso custodiscono oltre 2.000 anni di culto buddhista ininterrotto 153 statue del Buddha, soffitti dipinti che coprono più di 2.100 metri quadrati e un tempio attivo che i pellegrini salgono ancora ogni giorno.',
    heroAlt: 'Statua dorata del Buddha e murales del tempio delle grotte a Dambulla',
    sections: [
      {
        title: 'Oltre due millenni di culto ininterrotto',
        body: 'La leggenda narra che il re Valagamba si rifugiò in queste grotte nel I secolo a.C. dopo essere stato cacciato da Anuradhapura, e giurò di costruirvi un tempio se avesse riconquistato il trono. Così fece, e Dambulla funziona da allora come luogo di culto attivo uno dei siti religiosi ininterrotti più longevi dell’Asia meridionale.\n\nRe successivi aggiunsero statue, murales e santuari nel corso dei secoli, in particolare durante il periodo kandyano nel XVIII secolo, quando fu completata gran parte della vivace pittura visibile oggi. L’UNESCO ha inserito il complesso di grotte nel Patrimonio dell’Umanità nel 1991.',
      },
      {
        title: 'Cinque grotte, cinque atmosfere distinte',
        body: 'La Grotta 1, la “Grotta del Re Divino”, è incentrata su un Buddha sdraiato di 14 metri scolpito direttamente nella roccia. La Grotta 2, la più grande e visitata, custodisce 56 statue e dipinti sul soffitto che rappresentano fianco a fianco episodi chiave della vita del Buddha e della storia dello Sri Lanka.\n\nLe grotte più piccole, 3, 4 e 5, sono più tranquille e facili da trascurare, ma ricompensano una visita più lenta con gruppi di statue più intimi e murales in stili nettamente diversi, che riflettono diversi secoli di patronato reale.',
      },
      {
        title: 'Cosa fare a Dambulla',
        body: 'La salita dalla base all’ingresso delle grotte richiede 15-20 minuti su un sentiero pavimentato e scalinate, molto più dolce che a Sigiriya, con ampie vedute sulle pianure circostanti e, nelle giornate limpide, sulla stessa roccia di Sigiriya. È obbligatorio togliersi le scarpe all’ingresso e portarle attraverso tutte le cinque grotte, quindi una piccola borsa è utile.\n\nUna nuova statua dorata del Buddha, alta oltre 30 metri, si trova alla base vicino al museo e offre una sosta semplice e climatizzata prima o dopo la salita utile per i viaggiatori che abbinano Dambulla a Sigiriya nella stessa giornata.',
      },
      {
        title: 'Consigli pratici per la visita',
        body: 'È richiesto un abbigliamento modesto ovunque spalle e ginocchia coperte e le scarpe si tolgono completamente all’ingresso delle grotte; i calzini sono quindi utili, poiché i pavimenti in pietra possono scaldarsi a mezzogiorno. La fotografia è generalmente consentita, ma non con il flash vicino alle statue.\n\nDambulla si combina naturalmente con Sigiriya in un’unica giornata, e visitare prima Dambulla al mattino più fresco, poi Sigiriya una volta calato l’afflusso iniziale, funziona generalmente meglio dell’ordine inverso.',
      },
      {
        title: 'Clima a Dambulla',
        body: 'Come Sigiriya, Dambulla si trova nella zona secca ed è comoda da visitare quasi tutto l’anno, con gennaio-aprile generalmente il periodo più secco e caldo. Le grotte stesse restano relativamente fresche indipendentemente dal tempo esterno, poiché lo sperone roccioso offre ombra e isolamento naturali.\n\nI temporali pomeridiani sono più frequenti da ottobre a dicembre; il sentiero pavimentato di accesso può diventare scivoloso, rendendo preferibili le visite al mattino in quel periodo.',
      },
      {
        title: 'Attrazioni nei dintorni da abbinare',
        body: 'La fortezza rocciosa di Sigiriya è a soli venti minuti e rappresenta di gran lunga l’abbinamento più comune per un’escursione di un giorno. Kandy si trova a circa due ore a sud, una naturale tappa successiva per chi si dirige verso l’entroterra collinare dopo il Triangolo Culturale.\n\nLe aree di raduno degli elefanti selvatici nei parchi nazionali di Minneriya e Kaudulla sono a 30-40 minuti a nord-est, particolarmente gratificanti da luglio a ottobre quando grandi mandrie si riuniscono lungo le rive dei bacini.',
      },
      {
        title: 'Dove alloggiare',
        body: 'La città di Dambulla offre un pratico mix di hotel di fascia media e guesthouse, comodo per una partenza mattutina verso le grotte, mentre il vicino villaggio di Habarana offre una base più panoramica con lodge nella giungla e alloggi con vista lago, molti orientati verso la roccia di Sigiriya in lontananza.\n\nEntrambe le basi funzionano bene per un itinerario nel Triangolo Culturale; Habarana offre generalmente un soggiorno più tranquillo e verde a un prezzo simile.',
      },
      {
        title: 'Dove mangiare intorno a Dambulla',
        body: 'I buffet di rice and curry pensati per i gruppi in gita giornaliera sono comuni lungo la strada principale Dambulla–Sigiriya, comodi per un pranzo rapido e abbondante tra una visita e l’altra. Diversi ristoranti qui offrono una selezione di curry davvero ampia, poiché il volume di viaggiatori in transito sostiene più varietà rispetto ai centri più piccoli.\n\nPer una cena più tranquilla, i lodge di Habarana servono spesso pasti all’aperto con vista su risaie o piccoli laghi, un contrasto piacevole rispetto alle soste pranzo lungo la strada.',
      },
    ],
    faq: [
      {
        q: 'Quanto tempo richiede la visita al tempio delle grotte di Dambulla?',
        a: 'La maggior parte dei visitatori impiega 60-90 minuti per vedere comodamente tutte le cinque grotte, inclusa la salita dalla base. Aggiungete tempo extra se volete visitare anche la statua dorata del Buddha e il piccolo museo all’ingresso.',
      },
      {
        q: 'Dambulla vale la visita se vedo anche Sigiriya?',
        a: 'Sì i due siti distano solo venti minuti e sono quasi sempre visitati insieme. Dambulla offre un contrasto più dolce e ombreggiato rispetto alla scalata esposta di Sigiriya, e insieme coprono sia la storia religiosa che quella reale della regione.',
      },
      {
        q: 'Cosa dovrei indossare per visitare il tempio delle grotte di Dambulla?',
        a: 'È richiesto un abbigliamento modesto che copra spalle e ginocchia, e le scarpe devono essere tolte all’ingresso delle grotte. Portate calzini se siete sensibili ai pavimenti in pietra caldi, e una piccola borsa per portare le scarpe attraverso le cinque grotte.',
      },
      {
        q: 'È consentito fotografare all’interno delle grotte?',
        a: 'La fotografia generale è solitamente consentita, ma non con il flash vicino ai soffitti dipinti e alle statue, sia per proteggere le opere d’arte sia per rispetto verso questo luogo di culto attivo.',
      },
      {
        q: 'Qual è il momento migliore della giornata per visitare Dambulla?',
        a: 'Le visite al mattino sono più fresche e meno affollate, particolarmente utili se prevedete di continuare verso Sigiriya lo stesso giorno. Anche i pavimenti in pietra delle grotte restano notevolmente più freschi sotto i piedi nelle prime ore del giorno.',
      },
    ],
    ctaTitle: 'Abbina Dambulla a Sigiriya',
    ctaBody: 'I nostri tour di un giorno nel Triangolo Culturale abbinano il tempio delle grotte d’oro alla fortezza rocciosa di Sigiriya e, come opzione, a un safari tra gli elefanti selvatici, con il vostro autista-guida che gestisce tempistiche, biglietti e la logistica di entrambi i siti.',
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
    h1: 'Dambulla, Sri Lanka: el templo de las cuevas doradas del Triángulo Cultural',
    lead: 'Cinco cuevas excavadas en un único afloramiento rocoso conservan más de 2.000 años de culto budista ininterrumpido: 153 estatuas de Buda, techos pintados que cubren más de 2.100 metros cuadrados y un templo activo al que los peregrinos siguen subiendo cada día.',
    heroAlt: 'Estatua dorada de Buda y murales del templo de las cuevas en Dambulla',
    sections: [
      {
        title: 'Más de dos milenios de culto ininterrumpido',
        body: 'La leyenda cuenta que el rey Valagamba se refugió en estas cuevas en el siglo I a.C. tras ser expulsado de Anuradhapura, y prometió construir aquí un templo si recuperaba su trono. Así lo hizo, y Dambulla ha funcionado desde entonces como un lugar de culto activo, uno de los sitios religiosos ininterrumpidos más antiguos del sur de Asia.\n\nReyes sucesivos añadieron estatuas, murales y santuarios a lo largo de los siglos, sobre todo durante el periodo candiano en el siglo XVIII, cuando se completó gran parte de la vívida pintura que se ve hoy. La UNESCO declaró el complejo de cuevas Patrimonio de la Humanidad en 1991.',
      },
      {
        title: 'Cinco cuevas, cinco atmósferas distintas',
        body: 'La Cueva 1, la «Cueva del Rey Divino», se centra en un Buda reclinado de 14 metros esculpido directamente en la roca. La Cueva 2, la más grande y visitada, alberga 56 estatuas y pinturas en el techo que representan lado a lado episodios clave de la vida de Buda y de la historia de Sri Lanka.\n\nLas cuevas más pequeñas, 3, 4 y 5, son más tranquilas y fáciles de pasar por alto, pero recompensan una visita más pausada con agrupaciones de estatuas más íntimas y murales en estilos claramente distintos, reflejo de diferentes siglos de patronazgo real.',
      },
      {
        title: 'Qué hacer en Dambulla',
        body: 'La subida desde la base hasta la entrada de las cuevas dura entre 15 y 20 minutos por un camino pavimentado y escalinatas, considerablemente más suave que en Sigiriya, con amplias vistas sobre las llanuras circundantes y, en días claros, la propia roca de Sigiriya. Es obligatorio quitarse el calzado en la entrada y llevarlo durante las cinco cuevas, así que una bolsa pequeña ayuda.\n\nUna nueva estatua dorada de Buda, de más de 30 metros de altura, se alza en la base cerca del museo y ofrece una parada sencilla y con aire acondicionado antes o después de la subida, útil para quienes combinan Dambulla con Sigiriya el mismo día.',
      },
      {
        title: 'Consejos prácticos para la visita',
        body: 'Se requiere vestimenta recatada en todo momentohombros y rodillas cubiertos— y el calzado se retira completamente en la entrada de las cuevas, así que merece la pena llevar calcetines, ya que los suelos de piedra pueden calentarse al mediodía. La fotografía suele estar permitida, pero no con flash cerca de las estatuas.\n\nDambulla se combina de forma natural con Sigiriya en un mismo día, y visitar primero Dambulla por la mañana, más fresca, y después Sigiriya una vez pasada la avalancha inicial, suele funcionar mejor que el orden inverso.',
      },
      {
        title: 'Clima en Dambulla',
        body: 'Igual que Sigiriya, Dambulla se encuentra en la zona seca y es cómoda de visitar casi todo el año, siendo enero a abril generalmente el periodo más seco y caluroso. Las propias cuevas se mantienen relativamente frescas sin importar el clima exterior, ya que el saliente rocoso proporciona sombra y aislamiento naturales.\n\nLas tormentas de la tarde son más frecuentes de octubre a diciembre; el camino pavimentado de acceso puede volverse resbaladizo, por lo que las visitas matutinas son preferibles en ese periodo.',
      },
      {
        title: 'Atracciones cercanas para combinar',
        body: 'La Fortaleza Rocosa de Sigiriya está a solo veinte minutos y es, con diferencia, la combinación más habitual para una excursión de un día. Kandy se encuentra a unas dos horas al sur, una siguiente parada natural para quienes se dirigen hacia las tierras altas tras el Triángulo Cultural.\n\nLas zonas de concentración de elefantes salvajes en los parques nacionales de Minneriya y Kaudulla están a 30-40 minutos al noreste, especialmente gratificantes de julio a octubre, cuando grandes manadas se reúnen junto a las orillas de los embalses.',
      },
      {
        title: 'Dónde alojarse',
        body: 'La propia localidad de Dambulla ofrece una mezcla práctica de hoteles de gama media y casas de huéspedes, cómoda para salir temprano hacia las cuevas, mientras que el cercano pueblo de Habarana ofrece una base más pintoresca con lodges en la selva y alojamientos con vista al lago, muchos orientados hacia la roca de Sigiriya en la distancia.\n\nAmbas bases funcionan bien para un itinerario por el Triángulo Cultural; Habarana suele ofrecer una estancia más tranquila y verde a un precio similar.',
      },
      {
        title: 'Dónde comer cerca de Dambulla',
        body: 'Los bufés de rice and curry pensados para grupos de excursión de un día son habituales a lo largo de la carretera principal Dambulla–Sigiriya, prácticos para un almuerzo rápido y abundante entre visitas. Varios restaurantes aquí ofrecen una selección de curry realmente amplia, ya que el volumen de viajeros de paso sostiene más variedad que en poblaciones más pequeñas.\n\nPara una cena más tranquila, los lodges de Habarana suelen servir comidas al aire libre con vistas a arrozales o pequeños lagos, un contraste agradable con las paradas de almuerzo junto a la carretera.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto dura la visita al templo de las cuevas de Dambulla?',
        a: 'La mayoría de los visitantes necesita entre 60 y 90 minutos para ver cómodamente las cinco cuevas, incluida la subida desde la base. Añada tiempo extra si también quiere visitar la estatua dorada de Buda y el pequeño museo de la entrada.',
      },
      {
        q: '¿Merece la pena Dambulla si también voy a ver Sigiriya?',
        a: 'Sí: ambos lugares están a solo veinte minutos entre sí y casi siempre se visitan juntos. Dambulla ofrece un contraste más suave y sombreado frente a la expuesta subida de Sigiriya, y juntos cubren tanto la historia religiosa como la real de la región.',
      },
      {
        q: '¿Qué debo ponerme para visitar el templo de las cuevas de Dambulla?',
        a: 'Se requiere ropa recatada que cubra hombros y rodillas, y el calzado debe retirarse en la entrada de las cuevas. Lleve calcetines si es sensible a los suelos de piedra calientes, y una bolsa pequeña para llevar su calzado por las cinco cuevas.',
      },
      {
        q: '¿Se puede fotografiar dentro de las cuevas?',
        a: 'La fotografía general suele estar permitida, pero no con flash cerca de los techos pintados y las estatuas, tanto para proteger las obras de arte como por respeto a este lugar de culto activo.',
      },
      {
        q: '¿Cuál es el mejor momento del día para visitar Dambulla?',
        a: 'Las visitas por la mañana son más frescas y menos concurridas, especialmente útil si planea continuar hacia Sigiriya el mismo día. Los suelos de piedra de las cuevas también se mantienen notablemente más frescos bajo los pies temprano en el día.',
      },
    ],
    ctaTitle: 'Combine Dambulla con Sigiriya',
    ctaBody: 'Nuestros tours de un día por el Triángulo Cultural combinan el templo de las cuevas doradas con la Fortaleza Rocosa de Sigiriya y, opcionalmente, un safari de elefantes salvajes, con su chófer-guía gestionando los horarios, las entradas y la logística de ambos lugares.',
    ctaLabel: 'Planifique su día en Dambulla',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Tour de un día a Sigiriya' },
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
      { pageId: 'tour8', label: 'Tour privado de 8 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Mejor época para visitar Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guía del chófer privado en Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Dambulla, Sri Lanka: Złota Świątynia Jaskiniowa w Trójkącie Kulturowym',
    lead: 'Pięć jaskiń wykutych w jednym skalnym wzgórzu przechowuje ponad 2000 lat nieprzerwanego kultu buddyjskiego – 153 posągi Buddy, malowane sufity na ponad 2100 metrach kwadratowych oraz działającą świątynię, na którą pielgrzymi wciąż wchodzą codziennie.',
    heroAlt: 'Złoty posąg Buddy i malowidła świątyni jaskiniowej w Dambulli',
    sections: [
      {
        title: 'Ponad dwa tysiąclecia nieprzerwanego kultu',
        body: 'Legenda mówi, że król Valagamba schronił się w tych jaskiniach w I wieku p.n.e. po wygnaniu z Anuradhapury i przysiągł zbudować tu świątynię, jeśli odzyska tron. Uczynił tak, a Dambulla od tego czasu funkcjonuje jako aktywne miejsce kultu – jedno z najdłużej nieprzerwanie działających miejsc religijnych w Azji Południowej.\n\nKolejni królowie dodawali posągi, malowidła i sanktuaria przez wieki, zwłaszcza w okresie kandyjskim w XVIII wieku, kiedy powstała znaczna część żywej dziś kolorystyki. UNESCO wpisało kompleks jaskiń na Listę Światowego Dziedzictwa w 1991 roku.',
      },
      {
        title: 'Pięć jaskiń, pięć odmiennych atmosfer',
        body: 'Jaskinia 1, „Jaskinia Boskiego Króla”, skupia się na 14-metrowym leżącym Buddzie wykutym prosto w skale. Jaskinia 2, najwięsza i najczęściej odwiedzana, zawiera 56 posągów i malowidła na sufitach przedstawiające obok siebie kluczowe wydarzenia z życia Buddy i historii Sri Lanki.\n\nMniejsze jaskinie 3, 4 i 5 są spokojniejsze i łatwo je przeoczyć, ale wolniejsza wizyta wynagradza bardziej intymnymi grupami posągów i malowidłami w wyraźnie różnych stylach, odzwierciedlających różne wieki królewskiego patronatu.',
      },
      {
        title: 'Co robić w Dambulli',
        body: 'Podejście od podstawy do wejścia do jaskiń zajmuje 15–20 minut po utwardzonej ścieżce i schodach, znacznie łagodniejsze niż w Sigiriyi, z szerokimi widokami na otaczające równiny i, w pogodny dzień, na samą skałę Sigiriya. Przy wejściu obowiązuje zdjęcie butów, które trzeba nieść przez wszystkie pięć jaskiń – przydaje się mała torba.\n\nNowy złoty posąg Buddy, o wysokości ponad 30 metrów, stoi u podstawy blisko muzeum i stanowi łatwy, klimatyzowany przystanek przed lub po podejściu – przydatny dla podróżnych łączących Dambullę z Sigiriyą tego samego dnia.',
      },
      {
        title: 'Praktyczne wskazówki dla zwiedzających',
        body: 'Skromny strój jest wymagany na całym terenie – zakryte ramiona i kolana – a buty są zdejmowane całkowicie przy wejściu do jaskiń, więc warto nosić skarpetki, bo kamienne podłogi mogą być gorące w południe. Fotografowanie jest ogólnie dozwolone, ale nie z lampą błyskową w pobliżu posągów.\n\nDambulla naturalnie łączy się z Sigiriyą w jeden dzień, a odwiedzenie najpierw Dambulli w chłodniejszy poranek, a potem Sigiriyi, gdy pierwszy tłum już zejdzie, zwykle działa lepiej niż odwrotna kolejność.',
      },
      {
        title: 'Pogoda w Dambulli',
        body: 'Podobnie jak Sigiriya, Dambulla leży w suchej strefie i jest wygodna do zwiedzania przez prawie cały rok, przy czym styczeń–kwiecień to zwykle najsuchszy i najgorętszy okres. Same jaskinie pozostają relatywnie chłodne niezależnie od pogody na zewnątrz, ponieważ skalny nawis zapewnia naturalny cień i izolację.\n\nPopołudniowe burze są częstsze od października do grudnia; utwardzona ścieżka dojściowa może wtedy stać się śliska, dlatego w tym okresie lepsze są poranne wizyty.',
      },
      {
        title: 'Atrakcje w okolicy warte połączenia',
        body: 'Skalna forteca Sigiriya jest tylko dwadzieścia minut stąd i to zdecydowanie najczęstsze połączenie na jednodniową wycieczkę. Kandy leży około dwóch godzin na południe – naturalny kolejny przystanek dla podróżnych kierujących się w góry po Trójkącie Kulturowym.\n\nTereny zbierania się dzikich słoni w parkach narodowych Minneriya i Kaudulla są 30–40 minut na północny wschód, szczególnie satysfakcjonujące od lipca do października, gdy duże stada gromadzą się wzdłuż brzegów zbiorników.',
      },
      {
        title: 'Gdzie się zatrzymać',
        body: 'Samo miasto Dambulla oferuje praktyczną mieszankę hoteli średniej klasy i pensjonatów, wygodną na wczesny start do jaskiń, natomiast pobliska wioska Habarana oferuje bardziej krajobrazową bazę z lodżami w dżungli i obiektami z widokiem na jezioro, wiele zorientowanych na widok skały Sigiriya w oddali.\n\nOba miejsca dobrze działają jako baza na trasę po Trójkącie Kulturowym; Habarana zwykle oferuje spokojniejszy, bardziej zielony pobyt w podobnej cenie.',
      },
      {
        title: 'Gdzie zjeść w okolicy Dambulli',
        body: 'Bufety rice and curry przeznaczone dla grup wycieczkowych są powszechne wzdłuż głównej drogi Dambulla–Sigiriya, wygodne na szybki, sycący obiad między atrakcjami. Kilka restauracji tutaj oferuje naprawdę szeroki wybór curry, ponieważ liczba przejezdnych podróżnych wspiera większą różnorodność niż mniejsze miasteczka.\n\nNa spokojniejszą kolację lodże w Habaranie często serwują posiłki na świeżym powietrzu z widokiem na pola ryżowe lub małe jeziora – przyjemny kontrast wobec przydrożnych miejsc na obiad.',
      },
    ],
    faq: [
      {
        q: 'Jak długo trwa wizyta w Świątyni Jaskiniowej w Dambulli?',
        a: 'Większości zwiedzających wystarczy 60–90 minut, by spokojnie zobaczyć wszystkie pięć jaskiń, wliczając podejście od podstawy. Dodaj dodatkowy czas, jeśli chcesz też odwiedzić złoty posąg Buddy i małe muzeum przy wejściu.',
      },
      {
        q: 'Czy warto odwiedzić Dambullę, jeśli zobaczę też Sigiriyę?',
        a: 'Tak – oba miejsca są w odległości tylko dwudziestu minut i prawie zawsze odwiedzane razem. Dambulla oferuje łagodniejszy, zacieniony kontrast do eksponowanej wspinaczki na Sigiriyę, a razem pokrywają zarówno religijną, jak i królewską historię regionu.',
      },
      {
        q: 'Co powinienem nosić do Świątyni Jaskiniowej w Dambulli?',
        a: 'Wymagany jest skromny strój zakrywający ramiona i kolana, a buty muszą być zdjęte przy wejściu do jaskiń. Weź skarpetki, jeśli jesteś wrażliwy na gorące kamienne podłogi, oraz małą torbę na buty do noszenia przez wszystkie pięć jaskiń.',
      },
      {
        q: 'Czy fotografowanie wewnątrz jaskiń jest dozwolone?',
        a: 'Fotografowanie ogólnie jest dozwolone, ale nie z lampą błyskową w pobliżu malowanych sufitów i posągów, zarówno dla ochrony dzieł sztuki, jak i z szacunku dla aktywnego miejsca kultu.',
      },
      {
        q: 'Jaka jest najlepsza pora dnia na wizytę w Dambulli?',
        a: 'Poranne wizyty są chłodniejsze i mniej zatłoczone, szczególnie przydatne, jeśli planujesz kontynuować podróż do Sigiriyi tego samego dnia. Kamienne podłogi w jaskiniach również pozostają wyraźnie chłodniejsze pod stopami wcześnie rano.',
      },
    ],
    ctaTitle: 'Połącz Dambullę z Sigiriyą',
    ctaBody: 'Nasze jednodniowe wycieczki po Trójkącie Kulturowym łączą Złotą Świątynię Jaskiniową ze Skalną Fortecą Sigiriya i opcjonalnym safari po dzikie słonie, a Twój kierowca-przewodnik zajmuje się harmonogramem, biletami i logistyką obu miejsc.',
    ctaLabel: 'Zaplanuj swój dzień w Dambulli',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Jednodniowa wycieczka do Sigiriyi' },
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour8', label: '8-dniowa prywatna wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Najlepszy czas na wizytę na Sri Lance' },
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnych kierowcach na Sri Lance' },
    ],
  },

  ru: {
    h1: 'Дамбулла, Шри-Ланка: Золотой пещерный храм Культурного треугольника',
    lead: 'Пять пещер, вырезанных в одном скальном массиве, хранят более 2000 лет непрерывного буддийского культа 153 статуи Будды, расписные потолки площадью более 2100 квадратных метров и действующий храм, куда паломники до сих пор поднимаются каждый день.',
    heroAlt: 'Золотая статуя Будды и росписи пещерного храма в Дамбулле',
    sections: [
      {
        title: 'Более двух тысячелетий непрерывного культа',
        body: 'По легенде, царь Валагамба укрылся в этих пещерах в I веке до н.э. после изгнания из Анурадхапуры и дал обет построить здесь храм, если вернёт себе трон. Он это сделал, и с тех пор Дамбулла действует как активное место культа один из самых длительно непрерывно действующих религиозных объектов Южной Азии.\n\nСменявшие друг друга цари добавляли статуи, росписи и святыни на протяжении веков, особенно в канди-период в XVIII веке, когда была завершена большая часть яркой живописи, видимой сегодня. В 1991 году ЮНЕСКО включила пещерный комплекс в список Всемирного наследия.',
      },
      {
        title: 'Пять пещер, пять разных атмосфер',
        body: 'Пещера 1, «Пещера Божественного Царя», центрируется вокруг лежащего Будды длиной 14 метров, вырезанного прямо в скале. Пещера 2, самая большая и посещаемая, хранит 56 статуй и росписи на потолке, изображающие рядом ключевые моменты из жизни Будды и истории Шри-Ланки.\n\nМеньшие пещеры 3, 4 и 5 более тихие и легко упускаются из внимания, но вознаграждают более медленный визит более интимными группами статуй и росписями в заметно разных стилях, отражающих разные века королевского покровительства.',
      },
      {
        title: 'Что посмотреть и сделать в Дамбулле',
        body: 'Подъём от подножия к входу в пещеры занимает 15–20 минут по вымощенной тропе и лестнице значительно мягче, чем в Сигирии, с широкими видами на окружающие равнины и, в ясный день, на саму скалу Сигирии. При входе требуется снять обувь и нести её через все пять пещер, поэтому небольшая сумка будет полезна.\n\nНовая золотая статуя Будды высотой более 30 метров стоит у подножия рядом с музеем и служит простой, кондиционированной остановкой до или после подъёма удобной для путешественников, совмещающих Дамбуллу с Сигирией в один день.',
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
        body: 'Скальная крепость Сигирия находится всего в двадцати минутах и является безусловно самым распространённым сочетанием для однодневной поездки. Канди расположен примерно в двух часах езды на юг естественная следующая остановка для путешественников, направляющихся в горную местность после Культурного треугольника.\n\nМеста сбора диких слонов в национальных парках Миннерия и Каудулла находятся в 30–40 минутах к северо-востоку, особенно впечатляющие с июля по октябрь, когда большие стада собираются вдоль берегов водоёмов.',
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
        a: 'Большинству посетителей нужно 60–90 минут, чтобы спокойно осмотреть все пять пещер, включая подъём от подножия. Добавьте время, если хотите также посетить золотую статую Будды и небольшой музей у входа.',
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
    ctaBody: 'Наши однодневные туры по Культурному треугольнику объединяют Золотой пещерный храм со скальной крепостью Сигирия и, по желанию, сафари к диким слонам водитель-гид берёт на себя расписание, билеты и логистику обоих объектов.',
    ctaLabel: 'Спланировать день в Дамбулле',
    relatedTours: [
      { pageId: 'sigiriyaDay', label: 'Однодневный тур в Сигирию' },
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
      { pageId: 'tour8', label: '8-дневный частный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Сигирия' },
      { pageId: 'destKandy', label: 'Канди' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Лучшее время для поездки в Шри-Ланку' },
      { pageId: 'guidePrivateDriver', label: 'Гид по частным водителям Шри-Ланки' },
    ],
  },
};
