import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka tea country guide (pageId: guideTeaCountry).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const TEA_COUNTRY_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Tea Country Guide: Plantations, Trains and Hill Towns',
    lead: 'The hill country between Kandy and Ella is cooler, greener and slower-paced than the coast a landscape of contoured tea bushes, colonial bungalows and misty ridges linked by one of Asia’s great scenic train rides. Knowing which towns to stay in, what a factory tour involves and how to dress for 15°C mornings makes the difference between a damp overnight stop and a highlight of the trip.',
    heroImage: 'assets/img/mainpage/6.webp',
    heroAlt: 'Rows of tea bushes on a Sri Lankan hill-country plantation',
    sections: [
      {
        id: 'overview',
        title: 'What “tea country” covers on a typical itinerary',
        body: 'Most round tours cross the hills in two or three days, often Kandy → Nuwara Eliya → Ella, with optional stops at a plantation or viewpoint. Elevations range from about 500 m near Kandy to over 1,800 m at Horton Plains temperatures drop quickly and rain arrives without much warning.\n\nThis is not a single town but a corridor of valleys and peaks; you experience it by train, short walks and one or two overnight bases rather than a checklist of ticketed monuments.',
      },
      {
        id: 'nuwaraEliya',
        title: 'Nuwara Eliya: colonial hill station and high gardens',
        body: 'Known as “Little England,” Nuwara Eliya sits around 1,900 m with chilly nights, Tudor-style facades and racecourse turf that feels incongruous in the tropics. Pedro Estate and Mackwoods (Damro) offer factory tours and tasting; Gregory Lake adds boat rides when weather cooperates.\n\nIt works well for travellers who want a formal garden atmosphere and cooler sleeping temperatures. Book warm layers hotel rooms often lack heating and damp laundry dries slowly.',
      },
      {
        id: 'ella',
        title: 'Ella: views, walks and a relaxed backpacker hub',
        body: 'Ella has become the hill country’s social centre small guesthouses, cafes and hikes to Little Adam’s Peak and Ella Rock. Nine Arch Bridge is best timed for a passing train (check the daily schedule with your driver). The town suits active travellers who prefer informal stays over colonial polish.\n\nWeather is unpredictable: a clear sunrise can turn to cloud by noon. Allow a full day here rather than a drive-through if views matter to you.',
      },
      {
        id: 'kandyLink',
        title: 'Kandy’s link to tea gateway to the hills',
        body: 'Kandy itself is a cultural city (Temple of the Tooth, botanical gardens), but it is also the usual start of the ascent toward tea country. The Peradeniya gardens include spice beds and mature trees that frame the transition from lowland heat to hill-country cool.\n\nSome tours skip overnight in Nuwara Eliya and instead ride the train from Kandy toward Ella, stopping briefly at a plantation en route a sensible compression if time is tight, though you trade depth for pace.',
      },
      {
        id: 'plantationsAndTrain',
        title: 'Plantation visits vs factory tours and the scenic train',
        body: 'A working factory tour shows withering, rolling, fermenting and packing informative but sometimes loud and industrial; tastings at the end are the reward. Plantation walks across terraced fields are gentler and better for photos, especially early morning when pickers are active and light is soft.\n\nThe Kandy–Badulla line (often ridden Kandy to Ella or Nanu Oya to Ella) is the headline journey reserve seats in observation or first class when possible, keep bags light for station steps and expect delays; the views are the point, not punctuality.',
      },
      {
        id: 'packingClimate',
        title: 'Cool-climate packing and practical tips',
        body: 'Pack a fleece or light jacket, closed shoes with grip for wet platforms and a rain shell umbrellas struggle in hill wind. Sunscreen still matters at altitude; UV is strong when clouds break.\n\nMotion sickness affects some travellers on winding hill roads; sit forward, avoid heavy curry lunches before long drives and build in stops at viewpoints rather than rushing arrival times. Tea country rewards slow mornings a misty terrace with a cup of orange pekoe beats another hour in the car.',
      },
    ],
    faq: [
      {
        q: 'How many days should I spend in tea country?',
        a: 'Two nights (often Nuwara Eliya and Ella, or Kandy plus Ella) fits most one-week tours. One night is rushed; three allows slower walks and better weather luck.',
      },
      {
        q: 'Is the Kandy to Ella train worth it?',
        a: 'Yes for scenery book reserved seats ahead in peak season, travel daytime, and treat delays as part of the experience. Many travellers ride one segment and drive the rest.',
      },
      {
        q: 'What should I wear in Nuwara Eliya?',
        a: 'Layers T-shirt by day, sweater or fleece at night. Closed, grippy shoes for wet paths; a rain jacket year-round.',
      },
      {
        q: 'Can I visit a tea factory with children?',
        a: 'Most welcome families; tours involve machinery noise and hot surfaces hold hands on factory floors and skip if very young children are sensitive to loud environments.',
      },
      {
        q: 'Nuwara Eliya or Ella where to stay?',
        a: 'Nuwara Eliya for colonial cool and gardens; Ella for hikes, cafes and Nine Arch Bridge. Many itineraries include one night in each.',
      },
    ],
    ctaTitle: 'Weave tea country into your private route',
    ctaBody: 'Tell us your dates and fitness level we will balance train segments, plantation stops and hill-town nights without overloading driving days.',
    ctaLabel: 'Plan a hill-country route',
    relatedTours: [
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
      { pageId: 'ellaDay', label: 'Ella Day Tour' },
      { pageId: 'kandyDay', label: 'Kandy Day Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Best Time to Visit Sri Lanka' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packing Guide' },
      { pageId: 'guidePrivateDriver', label: 'Private Driver Guide' },
    ],
  },

  de: {
    h1: 'Sri Lanka Tee-Land Ratgeber: Plantagen, Züge und Bergstädte',
    lead: 'Das Bergland zwischen Kandy und Ella ist kühler, grüner und langsamer als die Küste konturierte Teesträucher, Kolonialbungalows und neblige Grate, verbunden durch eine der schönsten Panorama-Bahnstrecken Asiens. Wer weiß, wo er übernachtet, was eine Fabriktour bringt und wie man sich für 15-°C-Morgen kleidet, erlebt ein Highlight statt eines feuchten Zwischenstopps.',
    heroAlt: 'Reihen von Teesträuchern auf einer srilankischen Teeplantage im Bergland',
    sections: [
      {
        title: 'Was „Tee-Land“ auf einer typischen Route umfasst',
        body: 'Die meisten Rundreisen durchqueren die Berge in zwei bis drei Tagen, oft Kandy → Nuwara Eliya → Ella, mit optionalen Stopps an Plantagen oder Aussichtspunkten. Höhen von etwa 500 m bei Kandy bis über 1.800 m am Horton Plains Temperaturen fallen schnell, Regen kommt ohne viel Vorwarnung.\n\nDas ist kein einzelner Ort, sondern ein Korridor aus Tälern und Gipfeln; man erlebt ihn per Zug, kurzen Spaziergängen und ein bis zwei Übernachtungsbasen statt einer Monument-Checkliste.',
      },
      {
        title: 'Nuwara Eliya: koloniale Bergstation und hohe Gärten',
        body: '„Little England“ liegt auf rund 1.900 m mit kühlen Nächten, Tudor-Fassaden und Rennbahn-Rasen, der in den Tropen fremd wirkt. Pedro Estate und Mackwoods (Damro) bieten Fabriktouren und Verkostung; Gregory Lake Bootsfahrten bei passendem Wetter.\n\nIdeal für Reisende mit formeller Gartenatmosphäre und kühleren Schlaftemperaturen. Warme Schichten einpacken Hotelzimmer haben selten Heizung, feuchte Wäsche trocknet langsam.',
      },
      {
        title: 'Ella: Aussichten, Wanderungen und entspanntes Zentrum',
        body: 'Ella ist zum sozialen Mittelpunkt des Berglands geworden kleine Guesthouses, Cafés und Wanderungen zum Little Adam’s Peak und Ella Rock. Nine Arch Bridge am besten mit fahrendem Zug (Fahrplan mit Fahrer klären). Die Stadt passt zu aktiven Reisenden, die informelle Aufenthalte Kolonial-Chic vorziehen.\n\nWetter unberechenbar: klarer Sonnenaufgang kann bis Mittag in Wolken enden. Einen ganzen Tag einplanen statt Durchfahrt, wenn Aussicht zählt.',
      },
      {
        title: 'Kandys Verbindung zum Tee Tor zum Bergland',
        body: 'Kandy ist Kulturstadt (Zahntempel, Botanischer Garten), aber auch üblicher Start des Aufstiegs ins Tee-Land. Peradeniya zeigt Gewürzbeete und alte Bäume als Übergang von Tieflandhitze zu Bergkühle.\n\nManche Touren übernachten nicht in Nuwara Eliya, sondern fahren mit dem Zug von Kandy Richtung Ella und stoppen unterwegs an einer Plantage sinnvolle Verdichtung bei wenig Zeit, weniger Tiefe.',
      },
      {
        title: 'Plantagenbesuche vs Fabriktouren und der Panoramazug',
        body: 'Eine Fabriktour zeigt Welken, Rollen, Fermentieren und Verpacken lehrreich, manchmal laut und industriell; Verkostung am Ende ist der Lohn. Spaziergänge über Terrassen sind sanfter und fotogener, besonders früh, wenn Pflücker aktiv sind und Licht weich ist.\n\nDie Strecke Kandy–Badulla (oft Kandy–Ella oder Nanu Oya–Ella) ist die Hauptattraktion reservierte Plätze in Observation oder 1. Klasse wenn möglich, leichtes Gepäck für Bahnsteigtreppen, Verspätungen einplanen; die Aussicht zählt, nicht die Pünktlichkeit.',
      },
      {
        title: 'Packliste für kühles Klima und praktische Tipps',
        body: 'Fleece oder leichte Jacke, geschlossene Schuhe mit Grip für nasse Bahnsteige, Regenjacke Regenschirme scheitern am Bergwind. Sonnenschutz trotzdem wichtig in der Höhe; UV stark bei Wolkenlücken.\n\nReisekrankheit betrifft manche auf kurvigen Bergstraßen vorn sitzen, kein schweres Curry vor langen Fahrten, Stopps an Aussichtspunkten statt Hetze. Tee-Land belohnt langsame Morgen neblige Terrasse mit Orange Pekoe schlägt eine Autostunde.',
      },
    ],
    faq: [
      {
        q: 'Wie viele Tage im Tee-Land?',
        a: 'Zwei Nächte (oft Nuwara Eliya und Ella oder Kandy plus Ella) passen zu den meisten Wochenrouten. Eine Nacht ist hetzig; drei erlauben langsamere Wanderungen und besseres Wetterglück.',
      },
      {
        q: 'Lohnt sich der Zug Kandy–Ella?',
        a: 'Ja wegen der Landschaft reservierte Plätze in der Hochsaison voraus buchen, tags fahren, Verspätungen mit einplanen. Viele fahren ein Teilstück und fahren den Rest.',
      },
      {
        q: 'Was anziehen in Nuwara Eliya?',
        a: 'Schichten T-Shirt tags, Pullover oder Fleece nachts. Geschlossene Schuhe mit Grip; Regenjacke ganzjährig.',
      },
      {
        q: 'Teefabrik mit Kindern?',
        a: 'Meist willkommen; Maschinenlärm und heiße Flächen Hände halten auf Fabrikboden, bei sehr kleinen Kindern bei Lärm vorsichtig.',
      },
      {
        q: 'Nuwara Eliya oder Ella zum Übernachten?',
        a: 'Nuwara Eliya für koloniale Kühle und Gärten; Ella für Wanderungen, Cafés und Nine Arch Bridge. Viele Routen nutzen je eine Nacht.',
      },
    ],
    ctaTitle: 'Tee-Land in Ihre private Route einweben',
    ctaBody: 'Nennen Sie Termine und Fitness wir balancieren Zugabschnitte, Plantagenstopps und Bergstadt-Nächte ohne Überlastung der Fahrtage.',
    ctaLabel: 'Bergland-Route planen',
    relatedTours: [
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'ellaDay', label: 'Ella Tagesausflug' },
      { pageId: 'kandyDay', label: 'Kandy Tagesausflug' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit für Sri Lanka' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste-Ratgeber' },
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide du pays du thé au Sri Lanka : plantations, trains et villes de montagne',
    lead: 'Les hautes terres entre Kandy et Ella sont plus fraîches, plus vertes et plus lentes que la côte théiers en terrasses, bungalows coloniaux et crêtes brumeuses reliées par l’un des plus beaux trains panoramiques d’Asie. Savoir où dormir, ce qu’implique une visite d’usine et comment s’habiller pour des matins à 15 °C fait la différence entre une halte humide et un moment fort du voyage.',
    heroAlt: 'Rangées de théiers sur une plantation dans les hautes terres du Sri Lanka',
    sections: [
      {
        title: 'Ce que couvre le « pays du thé » sur un itinéraire type',
        body: 'La plupart des circuits traversent les collines en deux ou trois jours, souvent Kandy → Nuwara Eliya → Ella, avec arrêts optionnels en plantation ou belvédère. Altitudes d’environ 500 m près de Kandy à plus de 1 800 m à Horton Plains les températures chutent vite, la pluie arrive sans grand avertissement.\n\nCe n’est pas une ville unique mais un corridor de vallées et sommets ; on le vit en train, petites marches et une ou deux bases de nuit plutôt qu’une liste de monuments payants.',
      },
      {
        title: 'Nuwara Eliya : station coloniale et jardins d’altitude',
        body: 'Surnommée « Little England », Nuwara Eliya se situe vers 1 900 m avec nuits fraîches, façades Tudor et pelouse de hippodrome incongrue sous les tropiques. Pedro Estate et Mackwoods (Damro) proposent visites d’usine et dégustation ; Gregory Lake offre promenades en bateau par beau temps.\n\nConvient aux voyageurs recherchant jardins formels et nuits fraîches. Prévoyez des couches chaudes peu de chambres chauffées, linge humide sèche lentement.',
      },
      {
        title: 'Ella : vues, randonnées et hub décontracté',
        body: 'Ella est devenue le centre social des hautes terres guesthouses, cafés et randonnées vers Little Adam’s Peak et Ella Rock. Nine Arch Bridge vaut le coup synchronisé avec un train (horaires avec le chauffeur). La ville plaît aux voyageurs actifs préférant le informel au polish colonial.\n\nMétéo imprévisible : lever de soleil clair peut virer au nuage à midi. Prévoyez une journée entière plutôt qu’un simple transit si les vues comptent.',
      },
      {
        title: 'Le lien de Kandy avec le thé porte des collines',
        body: 'Kandy est une ville culturelle (Temple de la Dent, jardin botanique), mais aussi le départ habituel vers le pays du thé. Peradeniya montre épices et arbres matures comme transition entre chaleur des basses terres et fraîcheur des collines.\n\nCertains circuits sautent Nuwara Eliya et prennent le train de Kandy vers Ella avec arrêt plantation en route compression sensée si le temps manque, au prix de moins de profondeur.',
      },
      {
        title: 'Plantations vs usines et le train panoramique',
        body: 'Une visite d’usine montre flétrissage, roulage, fermentation et conditionnement instructif mais parfois bruyant et industriel ; dégustation finale récompense. Balades en plantation sur terrasses sont plus douces et photogéniques, surtout tôt quand les cueilleuses sont actives et la lumière douce.\n\nLa ligne Kandy–Badulla (souvent Kandy–Ella ou Nanu Oya–Ella) est le trajet phare réservez places observation ou 1re classe si possible, bagages légers pour escaliers de gare, retards possibles ; la vue prime sur la ponctualité.',
      },
      {
        title: 'Bagages pour climat frais et conseils pratiques',
        body: 'Polaire ou veste légère, chaussures fermées adhérentes pour quais mouillés, imperméable parapluies perdent face au vent de montagne. Crème solaire reste utile en altitude ; UV fort quand les nuages se déchirent.\n\nMal des transports touche certains sur routes sinueuses siège avant, évitez curry lourd avant long trajet, pauses belvédères plutôt que course à l’arrivée. Le pays du thé récompense les matins lents terrasse brumeuse et orange pekoe valent mieux qu’une heure de voiture.',
      },
    ],
    faq: [
      {
        q: 'Combien de jours dans le pays du thé ?',
        a: 'Deux nuits (souvent Nuwara Eliya et Ella, ou Kandy plus Ella) conviennent à la plupart des circuits d’une semaine. Une nuit est pressée ; trois permettent marches plus lentes et meilleure météo.',
      },
      {
        q: 'Le train Kandy–Ella vaut-il le coup ?',
        a: 'Oui pour le paysage réservez places à l’avance en haute saison, voyage de jour, retards inclus dans l’expérience. Beaucoup ne font qu’un tronçon en train.',
      },
      {
        q: 'Que porter à Nuwara Eliya ?',
        a: 'Couches T-shirt le jour, pull ou polaire la nuit. Chaussures fermées adhérentes ; veste de pluie toute l’année.',
      },
      {
        q: 'Visite d’usine avec enfants ?',
        a: 'Généralement bienvenue ; bruit des machines et surfaces chaudes tenir la main en atelier, éviter si très jeunes sensibles au bruit.',
      },
      {
        q: 'Nuwara Eliya ou Ella pour dormir ?',
        a: 'Nuwara Eliya pour fraîcheur coloniale et jardins ; Ella pour randonnées, cafés et Nine Arch Bridge. Beaucoup d’itinéraires incluent une nuit dans chaque.',
      },
    ],
    ctaTitle: 'Intégrez le pays du thé à votre route privée',
    ctaBody: 'Indiquez dates et niveau de forme nous équilibrons tronçons train, arrêts plantation et nuits en ville de montagne sans surcharger les journées de route.',
    ctaLabel: 'Planifier un parcours en montagne',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
      { pageId: 'ellaDay', label: 'Excursion d’une journée à Ella' },
      { pageId: 'kandyDay', label: 'Excursion d’une journée à Kandy' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Meilleure période pour le Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guide des bagages pour le Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur privé' },
    ],
  },

  it: {
    h1: 'Guida al paese del tè nello Sri Lanka: piantagioni, treni e città di montagna',
    lead: 'L’entroterra collinare tra Kandy ed Ella è più fresco, verde e lento della costa cespugli di tè a contour, bungalow coloniali e crinali nebbiosi collegati da uno dei grandi treni panoramici dell’Asia. Sapere dove dormire, cosa implica una visita in fabbrica e come vestirsi per mattine a 15 °C fa la differenza tra sosta umida e momento clou del viaggio.',
    heroAlt: 'File di cespugli di tè su una piantagione nell’entroterra collinare dello Sri Lanka',
    sections: [
      {
        title: 'Cosa copre il « paese del tè » in un itinerario tipico',
        body: 'La maggior parte dei tour attraversa le colline in due o tre giorni, spesso Kandy → Nuwara Eliya → Ella, con soste opzionali in piantagione o belvedere. Quote da circa 500 m vicino Kandy a oltre 1.800 m a Horton Plains le temperature calano in fretta, la pioggia arriva con poco preavviso.\n\nNon è una singola città ma un corridoio di valli e vette; si vive in treno, brevi passeggiate e una o due basi notturne piuttosto che una checklist di monumenti a pagamento.',
      },
      {
        title: 'Nuwara Eliya: stazione coloniale e giardini d’altura',
        body: 'Detta « Little England », Nuwara Eliya sta intorno a 1.900 m con notti fredde, facciate Tudor e prato da ippodromo incongruo nei tropici. Pedro Estate e Mackwoods (Damro) offrono tour di fabbrica e degustazione; Gregory Lake gite in barca con bel tempo.\n\nAdatta a chi cerca atmosfera formale da giardino e notti fresche. Portate strati caldi poche camere riscaldate, biancheria umida asciuga lentamente.',
      },
      {
        title: 'Ella: viste, escursioni e hub rilassato',
        body: 'Ella è diventata il centro sociale dell’entroterra guesthouse, caffè e trekking verso Little Adam’s Peak e Ella Rock. Nine Arch Bridge meglio sincronizzato con un treno in passaggio (orari col autista). La città va a viaggiatori attivi che preferiscono soggiorni informali al polish coloniale.\n\nMeteo imprevedibile: alba limpida può diventare nuvola a mezzogiorno. Prevedete un giorno intero invece del passaggio se le viste contano.',
      },
      {
        title: 'Il legame di Kandy con il tè porta verso le colline',
        body: 'Kandy è città culturale (Tempio del Dente, orto botanico), ma anche usual inizio della salita verso il paese del tè. Peradeniya mostra spezie e alberi maturi come transizione dal caldo di pianura al fresco collinare.\n\nAlcuni tour saltano Nuwara Eliya e prendono il treno da Kandy verso Ella con sosta in piantagione compressione sensata se il tempo stringe, a scapito di profondità.',
      },
      {
        title: 'Piantagioni vs fabbriche e il treno panoramico',
        body: 'Un tour di fabbrica mostra appassimento, rolling, fermentazione e confezionamento istruttivo ma a volte rumoroso e industriale; degustazione finale è la ricompensa. Passeggiate in piantagione su terrazze sono più dolci e fotogeniche, soprattutto presto con raccoglitori attivi e luce morbida.\n\nLa linea Kandy–Badulla (spesso Kandy–Ella o Nanu Oya–Ella) è il viaggio clou prenotate posti observation o prima classe se possibile, bagagli leggeri per scale di stazione, ritardi possibili; il paesaggio conta, non la puntualità.',
      },
      {
        title: 'Bagaglio per clima fresco e consigli pratici',
        body: 'Pile o giacca leggera, scarpe chiuse con grip per banchine bagnate, guscio antipioggia ombrelli perdono col vento di montagna. Crema solare resta utile in quota; UV forte quando si aprono le nuvole.\n\nMal di movimento colpisce alcuni su strade tortuose sedili anteriori, niente curry pesante prima di lunghi trasferimenti, soste ai belvedere invece di correre all’arrivo. Il paese del tè premia mattine lente terrazza nebbiosa con orange pekoe batte un’ora in auto.',
      },
    ],
    faq: [
      {
        q: 'Quanti giorni nel paese del tè?',
        a: 'Due notti (spesso Nuwara Eliya ed Ella, o Kandy più Ella) stanno in most tour settimanali. Una notte è affrettata; tre permettono passeggiate più lente e più fortuna col meteo.',
      },
      {
        q: 'Vale il treno Kandy–Ella?',
        a: 'Sì per il paesaggio prenotate posti riservati in anticipo in alta stagione, viaggiate di giorno, ritardi inclusi. Molti fanno un solo tratto in treno.',
      },
      {
        q: 'Cosa indossare a Nuwara Eliya?',
        a: 'Strati maglietta di giorno, maglione o pile di notte. Scarpe chiuse con grip; giacca antipioggia tutto l’anno.',
      },
      {
        q: 'Fabbrica del tè con bambini?',
        a: 'Di solito benvenuti; rumore macchinari e superfici calde tenere per mano in fabbrica, evitare se molto piccoli sensibili al rumore.',
      },
      {
        q: 'Nuwara Eliya o Ella per dormire?',
        a: 'Nuwara Eliya per freschezza coloniale e giardini; Ella per trekking, caffè e Nine Arch Bridge. Molti itinerari includono una notte ciascuna.',
      },
    ],
    ctaTitle: 'Intrecciate il paese del tè nel vostro percorso privato',
    ctaBody: 'Indicate date e livello di forma bilanciamo tratti in treno, soste in piantagione e notti in città di montagna senza sovraccaricare le giornate di guida.',
    ctaLabel: 'Pianifica un percorso collinare',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
      { pageId: 'ellaDay', label: 'Gita di un giorno a Ella' },
      { pageId: 'kandyDay', label: 'Gita di un giorno a Kandy' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Periodo migliore per lo Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guida ai bagagli per lo Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guida all’autista privato' },
    ],
  },

  es: {
    h1: 'Guía del país del té en Sri Lanka: plantaciones, trenes y pueblos de montaña',
    lead: 'Las tierras altas entre Kandy y Ella son más frescas, verdes y pausadas que la costa campos de té en terrazas, bungalows coloniales y crestas brumosas unidas por uno de los grandes trenes panorámicos de Asia. Saber dónde dormir, qué implica una visita a fábrica y cómo vestirse para mañanas de 15 °C marca la diferencia entre una parada húmeda y un momento culminante del viaje.',
    heroAlt: 'Filas de arbustos de té en una plantación de las tierras altas de Sri Lanka',
    sections: [
      {
        title: 'Qué abarca el « país del té » en un itinerario típico',
        body: 'La mayoría de tours cruzan las montañas en dos o tres días, a menudo Kandy → Nuwara Eliya → Ella, con paradas opcionales en plantación o mirador. Altitudes de unos 500 m cerca de Kandy a más de 1.800 m en Horton Plains las temperaturas caen rápido y la lluvia llega con poco aviso.\n\nNo es un solo pueblo sino un corredor de valles y cumbres; se vive en tren, caminatas cortas y una o dos bases nocturnas más que una lista de monumentos de pago.',
      },
      {
        title: 'Nuwara Eliya: estación colonial y jardines de altura',
        body: 'Conocida como « Little England », Nuwara Eliya ronda los 1.900 m con noches frías, fachadas Tudor y césped de hipódromo incongruente en el trópico. Pedro Estate y Mackwoods (Damro) ofrecen visitas de fábrica y degustación; Gregory Lake paseos en barca con buen tiempo.\n\nEncaja con quien busca atmósfera de jardín formal y noches frescas. Lleve capas calientes pocas habitaciones con calefacción, la ropa húmeda seca despacio.',
      },
      {
        title: 'Ella: vistas, caminatas y centro relajado',
        body: 'Ella se ha convertido en el centro social de las tierras altas guesthouses, cafés y caminatas a Little Adam’s Peak y Ella Rock. Nine Arch Bridge conviene sincronizarlo con un tren (horarios con el chófer). La ciudad va a viajeros activos que prefieren estancias informales al brillo colonial.\n\nClima impredecible: amanecer claro puede volverse nube al mediodía. Reserve un día entero en lugar de paso rápido si las vistas importan.',
      },
      {
        title: 'El vínculo de Kandy con el té puerta a las montañas',
        body: 'Kandy es ciudad cultural (Templo del Diente, jardín botánico), pero también inicio habitual del ascenso al país del té. Peradeniya muestra especias y árboles maduros como transición del calor de llanura al frescor de montaña.\n\nAlgunos tours omiten Nuwara Eliya y toman el tren de Kandy hacia Ella con parada en plantación compresión sensata si falta tiempo, a costa de menos profundidad.',
      },
      {
        title: 'Plantaciones vs fábricas y el tren panorámico',
        body: 'Un tour de fábrica muestra marchitado, rodado, fermentación y empaquetado instructivo pero a veces ruidoso e industrial; la degustación final es la recompensa. Paseos en plantación por terrazas son más suaves y fotogénicos, sobre todo temprano con recolectores activos y luz suave.\n\nLa línea Kandy–Badulla (a menudo Kandy–Ella o Nanu Oya–Ella) es el trayecto estrella reserve asientos observation o primera clase si puede, equipaje ligero para escaleras de estación, retrasos posibles; las vistas importan, no la puntualidad.',
      },
      {
        title: 'Equipaje para clima fresco y consejos prácticos',
        body: 'Forro polar o chaqueta ligera, calzado cerrado con agarre para andenes mojados, chubasquero paraguas pierde contra el viento de montaña. Protector solar sigue siendo útil en altitud; UV fuerte cuando se abren nubes.\n\nMareo afecta a algunos en carreteras sinuosas asiento delantero, evite curry pesado antes de traslados largos, paradas en miradores en lugar de correr a la llegada. El país del té premia mañanas lentas terraza brumosa con orange pekoe supera otra hora en coche.',
      },
    ],
    faq: [
      {
        q: '¿Cuántos días en el país del té?',
        a: 'Dos noches (a menudo Nuwara Eliya y Ella, o Kandy más Ella) encajan en la mayoría de tours de una semana. Una noche es apresurada; tres permiten caminatas más lentas y mejor suerte con el clima.',
      },
      {
        q: '¿Vale la pena el tren Kandy–Ella?',
        a: 'Sí por el paisaje reserve asientos con antelación en temporada alta, viaje de día, retrasos incluidos. Muchos hacen solo un tramo en tren.',
      },
      {
        q: '¿Qué ropa llevar a Nuwara Eliya?',
        a: 'Capas camiseta de día, jersey o polar de noche. Calzado cerrado con agarre; chaqueta de lluvia todo el año.',
      },
      {
        q: '¿Fábrica de té con niños?',
        a: 'Generalmente bienvenidos; ruido de maquinaria y superficies calientes tomar de la mano en planta, evitar si muy pequeños sensibles al ruido.',
      },
      {
        q: '¿Nuwara Eliya o Ella para dormir?',
        a: 'Nuwara Eliya por frescura colonial y jardines; Ella por caminatas, cafés y Nine Arch Bridge. Muchos itinerarios incluyen una noche en cada una.',
      },
    ],
    ctaTitle: 'Integre el país del té en su ruta privada',
    ctaBody: 'Indique fechas y nivel de forma equilibraremos tramos en tren, paradas en plantación y noches en pueblo de montaña sin sobrecargar días de conducción.',
    ctaLabel: 'Planificar ruta de montaña',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
      { pageId: 'ellaDay', label: 'Excursión de un día a Ella' },
      { pageId: 'kandyDay', label: 'Excursión de un día a Kandy' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Mejor época para visitar Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guía de equipaje para Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guía del chófer privado' },
    ],
  },

  pl: {
    h1: 'Przewodnik po kraju herbaty Sri Lanki: plantacje, pociągi i górskie miasteczka',
    lead: 'Góry między Kandy a Ellą są chłodniejsze, bardziej zielone i wolniejsze niż wybrzeże konturowe krzewy herbaty, kolonialne bungalowy i mgliste grzbiety połączone jedną z wielkich tras panoramicznych Azji. Wiedza, gdzie spać, co daje wizyta w fabryce i jak ubrać się na 15-°C poranki, decyduje o wilgotnym przystanku albo o highlightcie wyjazdu.',
    heroAlt: 'Rzędy krzewów herbaty na plantacji w górskim interiorze Sri Lanki',
    sections: [
      {
        title: 'Co obejmuje „kraj herbaty” w typowej trasie',
        body: 'Większość tourów przekracza góry w dwa–trzy dni, często Kandy → Nuwara Eliya → Ella, z opcjonalnymi postojami na plantacji lub punkcie widokowym. Wysokości od ok. 500 m koło Kandy do ponad 1 800 m na Horton Plains temperatury spadają szybko, deszcz przychodzi bez ostrzeżenia.\n\nTo nie jedno miasto, lecz korytarz dolin i szczytów; przeżywa się go pociągiem, krótkimi spacerami i jedną–dwoma bazami noclegowymi, nie checklistą płatnych pomników.',
      },
      {
        title: 'Nuwara Eliya: kolonialna stacja i wysokie ogrody',
        body: '„Little England” leży na ok. 1 900 m z chłodnymi nocami, fasadami w stylu Tudor i trawnikiem toru wyścigowego niepasującym do tropików. Pedro Estate i Mackwoods (Damro) oferują fabryki i degustację; Gregory Lake łódki przy dobrej pogodzie.\n\nDla podróżnych szukających formalnego ogrodu i chłodniejszych nocy. Zapakuj warstwy ciepłe w pokojach rzadko jest ogrzewanie, wilgotna pralnia schnie wolno.',
      },
      {
        title: 'Ella: widoki, wędrówki i luźne centrum',
        body: 'Ella stała się społecznym centrum gór guesthouse’y, kawiarnie i szlaki na Little Adam’s Peak i Ella Rock. Nine Arch Bridge najlepiej zsynchronizować z przejazdem pociągu (harmonogram z kierowcą). Miasteczko dla aktywnych, którzy wolą luźny styl od kolonialnego połysku.\n\nPogoda nieprzewidywalna: czysty wschód może do południa zasnąć w chmurach. Zaplanuj cały dzień zamiast przejazdu, jeśli widoki są ważne.',
      },
      {
        title: 'Powiązanie Kandy z herbatą brama do gór',
        body: 'Kandy to miasto kultury (Świątynia Zęba, ogród botaniczny), ale też zwykły start wspinaczki ku krajowi herbaty. Peradeniya pokazuje przyprawy i stare drzewa jako przejście od nizinnego gorąca do górskiej chłodności.\n\nNiektóre trasy pomijają nocleg w Nuwara Eliya i jadą pociągiem z Kandy w stronę Elli z krótkim postojem na plantacji sensowna kompresja przy małym czasie, kosztem głębi.',
      },
      {
        title: 'Plantacje vs fabryki i pociąg panoramiczny',
        body: 'Wizyta w fabryce pokazuje więdnięcie, rolkowanie, fermentację i pakowanie pouczająco, czasem głośno i przemysłowo; degustacja na końcu jest nagrodą. Spacery po tarasach plantacji są łagodniejsze i bardziej fotogeniczne, zwłaszcza rano, gdy zbieracze pracują, a światło miękkie.\n\nLinia Kandy–Badulla (często Kandy–Ella lub Nanu Oya–Ella) to główna atrakcja rezerwuj miejsca observation lub pierwsza klasa, lekki bagaż na schody peronu, opóźnienia możliwe; liczy się widok, nie punktualność.',
      },
      {
        title: 'Pakowanie na chłodny klimat i praktyka',
        body: 'Polar lub lekka kurtka, obuwie zamknięte z przyczepnością na mokre perony, kurtka przeciwdeszczowa parasole przegrywają z górskim wiatrem. Krem SPF wciąż ważny na wysokości; UV mocne po rozejściu chmur.\n\n Choroba lokomocyjna dotyka niektórych na krętych drogach siedzenie z przodu, unikaj ciężkiego curry przed długą jazdą, postoje na punktach widokowych zamiast pędu na miejsce. Kraj herbaty nagradza powolne poranki mglista taras z orange pekoe bije kolejną godzinę w aucie.',
      },
    ],
    faq: [
      {
        q: 'Ile dni w kraju herbaty?',
        a: 'Dwie noce (często Nuwara Eliya i Ella albo Kandy plus Ella) pasują do większości tygodniowych tras. Jedna noc to pęd; trzy dają wolniejsze spacery i lepszą pogodę.',
      },
      {
        q: 'Czy warto pociąg Kandy–Ella?',
        a: 'Tak dla krajobrazu rezerwuj miejsca z wyprzedzeniem w szczycie, jedź w dzień, opóźnienia wliczone. Wielu jedzie tylko jednym odcinkiem.',
      },
      {
        q: 'Co nosić w Nuwara Eliya?',
        a: 'Warstwy koszulka w dzień, sweter lub polar w nocy. Obuwie zamknięte z grip; kurtka przeciwdeszczowa przez cały rok.',
      },
      {
        q: 'Fabryka herbaty z dziećmi?',
        a: 'Zwykle mile widziane; hałas maszyn i gorące powierzchnie trzymać za rękę na hali, unikać przy bardzo małych wrażliwych na hałas.',
      },
      {
        q: 'Nuwara Eliya czy Ella na nocleg?',
        a: 'Nuwara Eliya dla kolonialnej chłodności i ogrodów; Ella dla wędrówek, kawiarni i Nine Arch Bridge. Wiele tras ma po nocy w każdej.',
      },
    ],
    ctaTitle: 'Wpleć kraj herbaty w prywatną trasę',
    ctaBody: 'Podaj daty i kondycję zbalansujemy odcinki pociągu, postoje na plantacjach i noce w górskich miasteczkach bez przeładowania dni jazdy.',
    ctaLabel: 'Zaplanuj trasę górską',
    relatedTours: [
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'ellaDay', label: 'Jednodniowa wycieczka do Elli' },
      { pageId: 'kandyDay', label: 'Jednodniowa wycieczka do Kandy' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Najlepszy czas na Sri Lankę' },
      { pageId: 'guidePacking', label: 'Przewodnik pakowania na Sri Lankę' },
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnym kierowcy' },
    ],
  },

  ru: {
    h1: 'Гид по чайному краю Шри-Ланки: плантации, поезда и горные городки',
    lead: 'Горная местность между Kandy и Эллой прохладнее, зеленее и медленнее побережья террасные чайные кусты, колониальные бунгало и туманные гребни, связанные одной из великих панорамных железных дорог Азии. Знание, где ночевать, что даёт экскурсия на фабрику и как одеться на 15-градусные утра, отделяет сырой транзитный stop от highlight поездки.',
    heroAlt: 'Ряды чайных кустов на плантации в горной местности Шри-Ланки',
    sections: [
      {
        title: 'Что включает «чайный край» в типичном маршруте',
        body: 'Большинство туров пересекают горы за два–три дня, часто Kandy → Nuwara Eliya → Ella, с опциональными остановками на плантации или смотровой площадке. Высоты от ~500 м у Kandy до более 1 800 м на Horton Plains температура падает быстро, дождь приходит без предупреждения.\n\nЭто не один город, а коридор долин и вершин; его проживают поездом, короткими прогулками и одной–двумя ночёвками, а не чек-листом платных памятников.',
      },
      {
        title: 'Nuwara Eliya: колониальный курорт и высокие сады',
        body: '«Little England» на ~1 900 м с прохладными ночами, фасадами в стиле Tudor и ипподромным газоном, неожиданным в тропиках. Pedro Estate и Mackwoods (Damro) предлагают фабрики и дегустацию; Gregory Lake лодки в хорошую погоду.\n\nПодходит тем, кто хочет формальный сад и прохладный сон. Берите тёплые слои отопление в номерах редко, мокрая одежда сохнет медленно.',
      },
      {
        title: 'Ella: виды, прогулки и расслабленный центр',
        body: 'Ella стала социальным центром гор guesthouse, кафе и hikes к Little Adam’s Peak и Ella Rock. Nine Arch Bridge лучше совместить с проходящим поездом (расписание у водителя). Городок для активных, кто предпочитает неформальный отдых колониальному лоску.\n\nПогода непредсказуема: ясный рассвет к полудню может стать облачным. Заложите полный день, а не проезд, если виды важны.',
      },
      {
        title: 'Связь Kandy с чаем ворота в горы',
        body: 'Kandy культурный город (Храм Зуба, ботанический сад), но и обычный старт подъёма в чайный край. Peradeniya показывает специи и старые деревья как переход от низинной жары к горной прохладе.\n\nНекоторые туры пропускают ночёвку в Nuwara Eliya и едут поездом из Kandy к Ella с короткой остановкой на плантации разумное сжатие при нехватке времени, но меньше глубины.',
      },
      {
        title: 'Плантации vs фабрики и панорамный поезд',
        body: 'Экскурсия по фабрике показывает завяливание, скручивание, ферментацию и упаковку познавательно, но шумно и industrial; дегустация в конце награда. Прогулки по террасам мягче и photogenicнее, особенно рано, когда сборщики работают и свет мягкий.\n\nЛиния Kandy–Badulla (часто Kandy–Ella или Nanu Oya–Ella) главный journey бронируйте observation или первый класс, лёгкий багаж для лестниц на перронах, задержки возможны; важны виды, не punctuality.',
      },
      {
        title: 'Сборы для прохладного климата и практика',
        body: 'Флис или лёгкая куртка, закрытая обувь с grip для мокрых перронов, дождевик зонты проигрывают горному ветру. SPF всё равно нужен на высоте; UV силён при просветах.\n\nУкачивание на извилистых дорогах бывает сидите спереди, избегайте тяжёлого curry перед длинными переездами, останавливайтесь на viewpoints вместо гонки. Чайный край награждает медленные утра туманная терраса с orange pekoe лучше лишнего часа в машине.',
      },
    ],
    faq: [
      {
        q: 'Сколько дней в чайном краю?',
        a: 'Две ночи (часто Nuwara Eliya и Ella или Kandy плюс Ella) подходят большинству недельных туров. Одна ночь спешка; три дают медленные прогулки и больше шансов на погоду.',
      },
      {
        q: 'Стоит ли поезд Kandy–Ella?',
        a: 'Да ради пейзажа бронируйте места заранее в пик сезона, ездите днём, задержки часть опыта. Многие проезжают только один участок.',
      },
      {
        q: 'Что надеть в Nuwara Eliya?',
        a: 'Слои футболка днём, свитер или флис ночью. Закрытая обувь с grip; дождевик круглый год.',
      },
      {
        q: 'Чайная фабрика с детьми?',
        a: 'Обычно welcome; шум машин и горячие поверхности держите за руку в цехе, избегайте при очень маленьких, чувствительных к шуму.',
      },
      {
        q: 'Nuwara Eliya или Ella для ночёвки?',
        a: 'Nuwara Eliya для колониальной прохлады и садов; Ella для hikes, кафе и Nine Arch Bridge. Многие маршруты включают по ночи в каждой.',
      },
    ],
    ctaTitle: 'Вплетём чайный край в ваш частный маршрут',
    ctaBody: 'Назовите даты и уровень активности сбалансируем участки поезда, остановки на плантациях и ночи в горных городках без перегрузки дорожных дней.',
    ctaLabel: 'Спланировать горный маршрут',
    relatedTours: [
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
      { pageId: 'ellaDay', label: 'Однодневная экскурсия в Эллу' },
      { pageId: 'kandyDay', label: 'Однодневная экскурсия в Kandy' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Элла' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Лучшее время для Шри-Ланки' },
      { pageId: 'guidePacking', label: 'Гид по упаковке вещей для Шри-Ланки' },
      { pageId: 'guidePrivateDriver', label: 'Гид по частному водителю' },
    ],
  },
};
