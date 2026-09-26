import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka tea country guide (pageId: guideTeaCountry).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const TEA_COUNTRY_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Tea Country Guide: Plantations, Trains and Hill Towns',
    lead: 'The hill country between Kandy and Ella is cooler, greener and slower paced than the coast a landscape of contoured tea bushes, colonial bungalows and misty ridges linked by one of Asia’s great scenic train rides. Knowing which towns to stay in, what a factory tour involves and how to dress for 15°C mornings makes the difference between a damp overnight stop and a highlight of the trip.',
    heroImage: 'assets/img/mainpage/6.webp',
    heroAlt: 'Rows of tea bushes on a Sri Lankan hill country plantation',
    sections: [
      {
        id: 'overview',
        title: 'What “tea country” covers on a typical itinerary',
        body: 'Most round tours cross the hills in two or three days, often Kandy → Nuwara Eliya → Ella, with optional stops at a plantation or viewpoint. Elevations range from about 500 m near Kandy to over 1,800 m at Horton Plains temperatures drop quickly and rain arrives without much warning.\n\nThis is not a single town but a corridor of valleys and peaks; you experience it by train, short walks and one or two overnight bases rather than a checklist of ticketed monuments.',
      },
      {
        id: 'nuwaraEliya',
        title: 'Nuwara Eliya: colonial hill station and high gardens',
        body: 'Known as “Little England,” Nuwara Eliya sits around 1,900 m with chilly nights, Tudor style facades and racecourse turf that feels incongruous in the tropics. Pedro Estate and Mackwoods (Damro) offer factory tours and tasting; Gregory Lake adds boat rides when weather cooperates.\n\nIt works well for travellers who want a formal garden atmosphere and cooler sleeping temperatures. Book warm layers hotel rooms often lack heating and damp laundry dries slowly.',
      },
      {
        id: 'ella',
        title: 'Ella: views, walks and a relaxed backpacker hub',
        body: 'Ella has become the hill country’s social centre small guesthouses, cafes and hikes to Little Adam’s Peak and Ella Rock. Nine Arch Bridge is best timed for a passing train (check the daily schedule with your driver). The town suits active travellers who prefer informal stays over colonial polish.\n\nWeather is unpredictable: a clear sunrise can turn to cloud by noon. Allow a full day here rather than a drive through if views matter to you.',
      },
      {
        id: 'kandyLink',
        title: 'Kandy’s link to tea gateway to the hills',
        body: 'Kandy itself is a cultural city (Temple of the Tooth, botanical gardens), but it is also the usual start of the ascent toward tea country. The Peradeniya gardens include spice beds and mature trees that frame the transition from lowland heat to hill country cool.\n\nSome tours skip overnight in Nuwara Eliya and instead ride the train from Kandy toward Ella, stopping briefly at a plantation en route a sensible compression if time is tight, though you trade depth for pace.',
      },
      {
        id: 'plantationsAndTrain',
        title: 'Plantation visits vs factory tours and the scenic train',
        body: 'A working factory tour shows withering, rolling, fermenting and packing informative but sometimes loud and industrial; tastings at the end are the reward. Plantation walks across terraced fields are gentler and better for photos, especially early morning when pickers are active and light is soft.\n\nThe Kandy to Badulla line (often ridden Kandy to Ella or Nanu Oya to Ella) is the headline journey reserve seats in observation or first class when possible, keep bags light for station steps and expect delays; the views are the point, not punctuality.',
      },
      {
        id: 'packingClimate',
        title: 'Cool climate packing and practical tips',
        body: 'Pack a fleece or light jacket, closed shoes with grip for wet platforms and a rain shell umbrellas struggle in hill wind. Sunscreen still matters at altitude; UV is strong when clouds break.\n\nMotion sickness affects some travellers on winding hill roads; sit forward, avoid heavy curry lunches before long drives and build in stops at viewpoints rather than rushing arrival times. Tea country rewards slow mornings a misty terrace with a cup of orange pekoe beats another hour in the car.',
      },
      {
        id: 'ceylonName',
        title: 'Ceylon and Sri Lanka: the name on the map',
        body: 'The present name of Ceylon is Sri Lanka. Germans searching ceylon land, heutiger name von ceylon or sri lanka ceylon are looking at the same island. Ceylon remains the historic name for tea (ceylon tea, ceylon tee) and for true cinnamon grown here.\n\nWe run private hill country tours. We do not sell supermarket jars or tea bags in Germany.',
      },
      {
        id: 'ceylonCinnamon',
        title: 'Ceylon tea and cinnamon on a private tour',
        body: 'A factory visit explains orange pekoe and ceylon tea tasting. Spice gardens on the Kandy road often show Cinnamomum verum (cinnamomum ceylanicum), the thin bark sold as ceylon zimt, not cassia. That is a tour stop, not medical advice and not zimt kaufen at a German drugstore.\n\nIf you want a plantation day, we fold it into Kandy, Nuwara Eliya or Ella with your chauffeur guide.',
      },
    ],
    faq: [
      {
        q: 'How many days should I spend in tea country?',
        a: 'Two nights (often Nuwara Eliya and Ella, or Kandy plus Ella) fits most One Week tours. One night is rushed; three allows slower walks and better weather luck.',
      },
      {
        q: 'Is the Kandy to Ella train worth it?',
        a: 'Yes for scenery book reserved seats ahead in peak season, travel daytime, and treat delays as part of the experience. Many travellers ride one segment and drive the rest.',
      },
      {
        q: 'What should I wear in Nuwara Eliya?',
        a: 'Layers T shirt by day, sweater or fleece at night. Closed, grippy shoes for wet paths; a rain jacket year round.',
      },
      {
        q: 'Can I visit a tea factory with children?',
        a: 'Most welcome families; tours involve machinery noise and hot surfaces hold hands on factory floors and skip if very young children are sensitive to loud environments.',
      },
      {
        q: 'Nuwara Eliya or Ella where to stay?',
        a: 'Nuwara Eliya for colonial cool and gardens; Ella for hikes, cafes and Nine Arch Bridge. Many itineraries include one night in each.',
      },
      {
        q: 'What is the present name of Ceylon?',
        a: 'Sri Lanka. Ceylon tea and true cinnamon still use the old name. We run private tours on the island, not grocery cinnamon sales.',
      },
      {
        q: 'Ceylon zimt or cassia on a tour?',
        a: 'Spice gardens show ceylon zimt (Cinnamomum verum). Cassia zimt is a different bark. We do not sell jars and we do not give health advice.',
      },
    ],
    ctaTitle: 'Weave tea country into your private route',
    ctaBody: 'Tell us your dates and fitness level we will balance train segments, plantation stops and hill town nights without overloading driving days.',
    ctaLabel: 'Plan a hill country route',
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
    h1: 'Sri Lanka Tee Land Ratgeber: Plantagen, Zuge und Bergstadte',
    lead: 'Das Bergland zwischen Kandy und Ella ist kuhler, gruner und langsamer als die Kuste konturierte Teestraucher, Kolonialbungalows und neblige Grate, verbunden durch eine der schonsten Panorama Bahnstrecken Asiens. Wer weiss, wo er ubernachtet, was eine Fabriktour bringt und wie man sich fur 15-°C Morgen kleidet, erlebt ein Highlight statt eines feuchten Zwischenstopps.',
    heroAlt: 'Reihen von Teestrauchern auf einer srilankischen Teeplantage im Bergland',
    sections: [
      {
        title: 'Was „Tee Land“ auf einer typischen Route umfasst',
        body: 'Die meisten Rundreisen durchqueren die Berge in zwei bis drei Tagen, oft Kandy → Nuwara Eliya → Ella, mit optionalen Stopps an Plantagen oder Aussichtspunkten. Hohen von etwa 500 m bei Kandy bis uber 1.800 m am Horton Plains Temperaturen fallen schnell, Regen kommt ohne viel Vorwarnung.\n\nDas ist kein einzelner Ort, sondern ein Korridor aus Talern und Gipfeln; man erlebt ihn per Zug, kurzen Spaziergangen und ein bis zwei Ubernachtungsbasen statt einer Monument Checkliste.',
      },
      {
        title: 'Nuwara Eliya: koloniale Bergstation und hohe Garten',
        body: '„Little England“ liegt auf rund 1.900 m mit kuhlen Nachten, Tudor Fassaden und Rennbahn Rasen, der in den Tropen fremd wirkt. Pedro Estate und Mackwoods (Damro) bieten Fabriktouren und Verkostung; Gregory Lake Bootsfahrten bei passendem Wetter.\n\nIdeal fur Reisende mit formeller Gartenatmosphare und kuhleren Schlaftemperaturen. Warme Schichten einpacken Hotelzimmer haben selten Heizung, feuchte Wasche trocknet langsam.',
      },
      {
        title: 'Ella: Aussichten, Wanderungen und entspanntes Zentrum',
        body: 'Ella ist zum sozialen Mittelpunkt des Berglands geworden kleine Guesthouses, Cafes und Wanderungen zum Little Adam’s Peak und Ella Rock. Nine Arch Bridge am besten mit fahrendem Zug (Fahrplan mit Fahrer klaren). Die Stadt passt zu aktiven Reisenden, die informelle Aufenthalte Kolonial Chic vorziehen.\n\nWetter unberechenbar: klarer Sonnenaufgang kann bis Mittag in Wolken enden. Einen ganzen Tag einplanen statt Durchfahrt, wenn Aussicht zahlt.',
      },
      {
        title: 'Kandys Verbindung zum Tee Tor zum Bergland',
        body: 'Kandy ist Kulturstadt (Zahntempel, Botanischer Garten), aber auch ublicher Start des Aufstiegs ins Tee Land. Peradeniya zeigt Gewurzbeete und alte Baume als Ubergang von Tieflandhitze zu Bergkuhle.\n\nManche Touren ubernachten nicht in Nuwara Eliya, sondern fahren mit dem Zug von Kandy Richtung Ella und stoppen unterwegs an einer Plantage sinnvolle Verdichtung bei wenig Zeit, weniger Tiefe.',
      },
      {
        title: 'Plantagenbesuche vs Fabriktouren und der Panoramazug',
        body: 'Eine Fabriktour zeigt Welken, Rollen, Fermentieren und Verpacken lehrreich, manchmal laut und industriell; Verkostung am Ende ist der Lohn. Spaziergange uber Terrassen sind sanfter und fotogener, besonders fruh, wenn Pflucker aktiv sind und Licht weich ist.\n\nDie Strecke Kandy to Badulla (oft Kandy to Ella oder Nanu Oya to Ella) ist die Hauptattraktion reservierte Platze in Observation oder 1. Klasse wenn moglich, leichtes Gepack fur Bahnsteigtreppen, Verspatungen einplanen; die Aussicht zahlt, nicht die Punktlichkeit.',
      },
      {
        title: 'Packliste fur kuhles Klima und praktische Tipps',
        body: 'Fleece oder leichte Jacke, geschlossene Schuhe mit Grip fur nasse Bahnsteige, Regenjacke Regenschirme scheitern am Bergwind. Sonnenschutz trotzdem wichtig in der Hohe; UV stark bei Wolkenlucken.\n\nReisekrankheit betrifft manche auf kurvigen Bergstrassen vorn sitzen, kein schweres Curry vor langen Fahrten, Stopps an Aussichtspunkten statt Hetze. Tee Land belohnt langsame Morgen neblige Terrasse mit Orange Pekoe schlagt eine Autostunde.',
      },
      {
        title: 'Heutiger Name von Ceylon: Sri Lanka',
        body: 'Heutiger name von ceylon ist Sri Lanka. Ceylon land, sri lanka ceylon und ceylon sri lanka meinen dieselbe Insel. Ceylon bleibt der Name fur ceylon tee und echten Zimt von hier.\n\nWir fahren private Teeland Touren. Wir verkaufen keine Gewurzglaser in Deutschland.',
      },
      {
        title: 'Ceylon Tee und Ceylon Zimt auf der Rundreise',
        body: 'In der Fabrik sehen Sie ceylon tea Verkostung. An Gewurzgarten zwischen Colombo und Kandy wachst Cinnamomum verum, dunnrinde ceylon zimt, nicht cassia zimt. Das ist ein Ausflug, kein Rat welcher zimt ist gesund und kein zimt kaufen Shop.\n\nCeylon zimt unterschied zu cassia: echter Ceylon Zimt ist dunn und rohrrig. Cassia ist dicker. Wir sind Reiseveranstalter, keine Drogerie. Ceylon zimtstangen sehen Sie am Strauch, nicht als Supermarkt Glas.',
      },
    ],
    faq: [
      {
        q: 'Wie viele Tage im Tee Land?',
        a: 'Zwei Nachte (oft Nuwara Eliya und Ella oder Kandy plus Ella) passen zu den meisten Wochenrouten. Eine Nacht ist hetzig; drei erlauben langsamere Wanderungen und besseres Wettergluck.',
      },
      {
        q: 'Lohnt sich der Zug Kandy to Ella?',
        a: 'Ja wegen der Landschaft reservierte Platze in der Hochsaison voraus buchen, tags fahren, Verspatungen mit einplanen. Viele fahren ein Teilstuck und fahren den Rest.',
      },
      {
        q: 'Was anziehen in Nuwara Eliya?',
        a: 'Schichten T Shirt tags, Pullover oder Fleece nachts. Geschlossene Schuhe mit Grip; Regenjacke ganzjahrig.',
      },
      {
        q: 'Teefabrik mit Kindern?',
        a: 'Meist willkommen; Maschinenlarm und heisse Flachen Hande halten auf Fabrikboden, bei sehr kleinen Kindern bei Larm vorsichtig.',
      },
      {
        q: 'Nuwara Eliya oder Ella zum Ubernachten?',
        a: 'Nuwara Eliya fur koloniale Kuhle und Garten; Ella fur Wanderungen, Cafes und Nine Arch Bridge. Viele Routen nutzen je eine Nacht.',
      },
      {
        q: 'Wie lautet der heutige Name von Ceylon?',
        a: 'Heutiger name von ceylon ist Sri Lanka (im Kreuzwortratsel oft acht Buchstaben ohne Leerzeichen: SRILANKA). Ceylon land ist dasselbe Land.',
      },
      {
        q: 'Was ist der Unterschied Ceylon Zimt und Cassia?',
        a: 'Zimt cassia oder ceylon und ceylon vs cassia: echter ceylon zimt ist dunn, cassia zimt dicker. Sie sehen das im Gewurzgarten. Kein Drogerie Vergleich, kein Cumarin Rat, kein zimt kaufen.',
      },
      {
        q: 'Wo trinke ich Ceylon Tee auf der Reise?',
        a: 'Ceylon tee und ceylon tea in Fabriken um Nuwara Eliya und Ella, dazu schwarzer Tee Verkostung. Ceylon cay ist derselbe schwarze Tee. Assam tee ist Indien, nicht unsere Route.',
      },
    ],
    ctaTitle: 'Tee Land in Ihre private Route einweben',
    ctaBody: 'Nennen Sie Termine und Fitness wir balancieren Zugabschnitte, Plantagenstopps und Bergstadt Nachte ohne Uberlastung der Fahrtage.',
    ctaLabel: 'Bergland Route planen',
    relatedTours: [
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'ellaDay', label: 'Ella Tagesausflug' },
      { pageId: 'kandyDay', label: 'Kandy Tagesausflug' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste Ratgeber' },
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide du pays du the au Sri Lanka : plantations, trains et villes de montagne',
    lead: 'Les hautes terres entre Kandy et Ella sont plus fraiches, plus vertes et plus lentes que la cote theiers en terrasses, bungalows coloniaux et cretes brumeuses reliees par l’un des plus beaux trains panoramiques d’Asie. Savoir ou dormir, ce qu’implique une visite d’usine et comment s’habiller pour des matins a 15 °C fait la difference entre une halte humide et un moment fort du voyage.',
    heroAlt: 'Rangees de theiers sur une plantation dans les hautes terres du Sri Lanka',
    sections: [
      {
        title: 'Ce que couvre le « pays du the » sur un itineraire type',
        body: 'La plupart des circuits traversent les collines en deux ou trois jours, souvent Kandy → Nuwara Eliya → Ella, avec arrets optionnels en plantation ou belvedere. Altitudes d’environ 500 m pres de Kandy a plus de 1 800 m a Horton Plains les temperatures chutent vite, la pluie arrive sans grand avertissement.\n\nCe n’est pas une ville unique mais un corridor de vallees et sommets ; on le vit en train, petites marches et une ou deux bases de nuit plutot qu’une liste de monuments payants.',
      },
      {
        title: 'Nuwara Eliya : station coloniale et jardins d’altitude',
        body: 'Surnommee « Little England », Nuwara Eliya se situe vers 1 900 m avec nuits fraiches, facades Tudor et pelouse de hippodrome incongrue sous les tropiques. Pedro Estate et Mackwoods (Damro) proposent visites d’usine et degustation ; Gregory Lake offre promenades en bateau par beau temps.\n\nConvient aux voyageurs recherchant jardins formels et nuits fraiches. Prevoyez des couches chaudes peu de chambres chauffees, linge humide seche lentement.',
      },
      {
        title: 'Ella : vues, randonnees et hub decontracte',
        body: 'Ella est devenue le centre social des hautes terres guesthouses, cafes et randonnees vers Little Adam’s Peak et Ella Rock. Nine Arch Bridge vaut le coup synchronise avec un train (horaires avec le chauffeur). La ville plait aux voyageurs actifs preferant le informel au polish colonial.\n\nMeteo imprevisible : lever de soleil clair peut virer au nuage a midi. Prevoyez une journee entiere plutot qu’un simple transit si les vues comptent.',
      },
      {
        title: 'Le lien de Kandy avec le the porte des collines',
        body: 'Kandy est une ville culturelle (Temple de la Dent, jardin botanique), mais aussi le depart habituel vers le pays du the. Peradeniya montre epices et arbres matures comme transition entre chaleur des basses terres et fraicheur des collines.\n\nCertains circuits sautent Nuwara Eliya et prennent le train de Kandy vers Ella avec arret plantation en route compression sensee si le temps manque, au prix de moins de profondeur.',
      },
      {
        title: 'Plantations vs usines et le train panoramique',
        body: 'Une visite d’usine montre fletrissage, roulage, fermentation et conditionnement instructif mais parfois bruyant et industriel ; degustation finale recompense. Balades en plantation sur terrasses sont plus douces et photogeniques, surtout tot quand les cueilleuses sont actives et la lumiere douce.\n\nLa ligne Kandy to Badulla (souvent Kandy to Ella ou Nanu Oya to Ella) est le trajet phare reservez places observation ou 1re classe si possible, bagages legers pour escaliers de gare, retards possibles ; la vue prime sur la ponctualite.',
      },
      {
        title: 'Bagages pour climat frais et conseils pratiques',
        body: 'Polaire ou veste legere, chaussures fermees adherentes pour quais mouilles, impermeable parapluies perdent face au vent de montagne. Creme solaire reste utile en altitude ; UV fort quand les nuages se dechirent.\n\nMal des transports touche certains sur routes sinueuses siege avant, evitez curry lourd avant long trajet, pauses belvederes plutot que course a l’arrivee. Le pays du the recompense les matins lents terrasse brumeuse et orange pekoe valent mieux qu’une heure de voiture.',
      },
    ],
    faq: [
      {
        q: 'Combien de jours dans le pays du the ?',
        a: 'Deux nuits (souvent Nuwara Eliya et Ella, ou Kandy plus Ella) conviennent a la plupart des circuits d’une semaine. Une nuit est pressee ; trois permettent marches plus lentes et meilleure meteo.',
      },
      {
        q: 'Le train Kandy to Ella vaut il le coup ?',
        a: 'Oui pour le paysage reservez places a l’avance en haute saison, voyage de jour, retards inclus dans l’experience. Beaucoup ne font qu’un troncon en train.',
      },
      {
        q: 'Que porter a Nuwara Eliya ?',
        a: 'Couches T shirt le jour, pull ou polaire la nuit. Chaussures fermees adherentes ; veste de pluie toute l’annee.',
      },
      {
        q: 'Visite d’usine avec enfants ?',
        a: 'Generalement bienvenue ; bruit des machines et surfaces chaudes tenir la main en atelier, eviter si tres jeunes sensibles au bruit.',
      },
      {
        q: 'Nuwara Eliya ou Ella pour dormir ?',
        a: 'Nuwara Eliya pour fraicheur coloniale et jardins ; Ella pour randonnees, cafes et Nine Arch Bridge. Beaucoup d’itineraires incluent une nuit dans chaque.',
      },
    ],
    ctaTitle: 'Integrez le pays du the a votre route privee',
    ctaBody: 'Indiquez dates et niveau de forme nous equilibrons troncons train, arrets plantation et nuits en ville de montagne sans surcharger les journees de route.',
    ctaLabel: 'Planifier un parcours en montagne',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
      { pageId: 'ellaDay', label: 'Excursion d’une journee a Ella' },
      { pageId: 'kandyDay', label: 'Excursion d’une journee a Kandy' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Meilleure periode pour le Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guide des bagages pour le Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur prive' },
    ],
  },

  it: {
    h1: 'Guida al paese del te nello Sri Lanka: piantagioni, treni e citta di montagna',
    lead: 'L’entroterra collinare tra Kandy ed Ella e piu fresco, verde e lento della costa cespugli di te a contour, bungalow coloniali e crinali nebbiosi collegati da uno dei grandi treni panoramici dell’Asia. Sapere dove dormire, cosa implica una visita in fabbrica e come vestirsi per mattine a 15 °C fa la differenza tra sosta umida e momento clou del viaggio.',
    heroAlt: 'File di cespugli di te su una piantagione nell’entroterra collinare dello Sri Lanka',
    sections: [
      {
        title: 'Cosa copre il « paese del te » in un itinerario tipico',
        body: 'La maggior parte dei tour attraversa le colline in due o tre giorni, spesso Kandy → Nuwara Eliya → Ella, con soste opzionali in piantagione o belvedere. Quote da circa 500 m vicino Kandy a oltre 1.800 m a Horton Plains le temperature calano in fretta, la pioggia arriva con poco preavviso.\n\nNon e una singola citta ma un corridoio di valli e vette; si vive in treno, brevi passeggiate e una o due basi notturne piuttosto che una checklist di monumenti a pagamento.',
      },
      {
        title: 'Nuwara Eliya: stazione coloniale e giardini d’altura',
        body: 'Detta « Little England », Nuwara Eliya sta intorno a 1.900 m con notti fredde, facciate Tudor e prato da ippodromo incongruo nei tropici. Pedro Estate e Mackwoods (Damro) offrono tour di fabbrica e degustazione; Gregory Lake gite in barca con bel tempo.\n\nAdatta a chi cerca atmosfera formale da giardino e notti fresche. Portate strati caldi poche camere riscaldate, biancheria umida asciuga lentamente.',
      },
      {
        title: 'Ella: viste, escursioni e hub rilassato',
        body: 'Ella e diventata il centro sociale dell’entroterra guesthouse, caffe e trekking verso Little Adam’s Peak e Ella Rock. Nine Arch Bridge meglio sincronizzato con un treno in passaggio (orari col autista). La citta va a viaggiatori attivi che preferiscono soggiorni informali al polish coloniale.\n\nMeteo imprevedibile: alba limpida puo diventare nuvola a mezzogiorno. Prevedete un giorno intero invece del passaggio se le viste contano.',
      },
      {
        title: 'Il legame di Kandy con il te porta verso le colline',
        body: 'Kandy e citta culturale (Tempio del Dente, orto botanico), ma anche usual inizio della salita verso il paese del te. Peradeniya mostra spezie e alberi maturi come transizione dal caldo di pianura al fresco collinare.\n\nAlcuni tour saltano Nuwara Eliya e prendono il treno da Kandy verso Ella con sosta in piantagione compressione sensata se il tempo stringe, a scapito di profondita.',
      },
      {
        title: 'Piantagioni vs fabbriche e il treno panoramico',
        body: 'Un tour di fabbrica mostra appassimento, rolling, fermentazione e confezionamento istruttivo ma a volte rumoroso e industriale; degustazione finale e la ricompensa. Passeggiate in piantagione su terrazze sono piu dolci e fotogeniche, soprattutto presto con raccoglitori attivi e luce morbida.\n\nLa linea Kandy to Badulla (spesso Kandy to Ella o Nanu Oya to Ella) e il viaggio clou prenotate posti observation o prima classe se possibile, bagagli leggeri per scale di stazione, ritardi possibili; il paesaggio conta, non la puntualita.',
      },
      {
        title: 'Bagaglio per clima fresco e consigli pratici',
        body: 'Pile o giacca leggera, scarpe chiuse con grip per banchine bagnate, guscio antipioggia ombrelli perdono col vento di montagna. Crema solare resta utile in quota; UV forte quando si aprono le nuvole.\n\nMal di movimento colpisce alcuni su strade tortuose sedili anteriori, niente curry pesante prima di lunghi trasferimenti, soste ai belvedere invece di correre all’arrivo. Il paese del te premia mattine lente terrazza nebbiosa con orange pekoe batte un’ora in auto.',
      },
    ],
    faq: [
      {
        q: 'Quanti giorni nel paese del te?',
        a: 'Due notti (spesso Nuwara Eliya ed Ella, o Kandy piu Ella) stanno in most tour settimanali. Una notte e affrettata; tre permettono passeggiate piu lente e piu fortuna col meteo.',
      },
      {
        q: 'Vale il treno Kandy to Ella?',
        a: 'Si per il paesaggio prenotate posti riservati in anticipo in alta stagione, viaggiate di giorno, ritardi inclusi. Molti fanno un solo tratto in treno.',
      },
      {
        q: 'Cosa indossare a Nuwara Eliya?',
        a: 'Strati maglietta di giorno, maglione o pile di notte. Scarpe chiuse con grip; giacca antipioggia tutto l’anno.',
      },
      {
        q: 'Fabbrica del te con bambini?',
        a: 'Di solito benvenuti; rumore macchinari e superfici calde tenere per mano in fabbrica, evitare se molto piccoli sensibili al rumore.',
      },
      {
        q: 'Nuwara Eliya o Ella per dormire?',
        a: 'Nuwara Eliya per freschezza coloniale e giardini; Ella per trekking, caffe e Nine Arch Bridge. Molti itinerari includono una notte ciascuna.',
      },
    ],
    ctaTitle: 'Intrecciate il paese del te nel vostro percorso privato',
    ctaBody: 'Indicate date e livello di forma bilanciamo tratti in treno, soste in piantagione e notti in citta di montagna senza sovraccaricare le giornate di guida.',
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
    h1: 'Guia del pais del te en Sri Lanka: plantaciones, trenes y pueblos de montana',
    lead: 'Las tierras altas entre Kandy y Ella son mas frescas, verdes y pausadas que la costa campos de te en terrazas, bungalows coloniales y crestas brumosas unidas por uno de los grandes trenes panoramicos de Asia. Saber donde dormir, que implica una visita a fabrica y como vestirse para mananas de 15 °C marca la diferencia entre una parada humeda y un momento culminante del viaje.',
    heroAlt: 'Filas de arbustos de te en una plantacion de las tierras altas de Sri Lanka',
    sections: [
      {
        title: 'Que abarca el « pais del te » en un itinerario tipico',
        body: 'La mayoria de tours cruzan las montanas en dos o tres dias, a menudo Kandy → Nuwara Eliya → Ella, con paradas opcionales en plantacion o mirador. Altitudes de unos 500 m cerca de Kandy a mas de 1.800 m en Horton Plains las temperaturas caen rapido y la lluvia llega con poco aviso.\n\nNo es un solo pueblo sino un corredor de valles y cumbres; se vive en tren, caminatas cortas y una o dos bases nocturnas mas que una lista de monumentos de pago.',
      },
      {
        title: 'Nuwara Eliya: estacion colonial y jardines de altura',
        body: 'Conocida como « Little England », Nuwara Eliya ronda los 1.900 m con noches frias, fachadas Tudor y cesped de hipodromo incongruente en el tropico. Pedro Estate y Mackwoods (Damro) ofrecen visitas de fabrica y degustacion; Gregory Lake paseos en barca con buen tiempo.\n\nEncaja con quien busca atmosfera de jardin formal y noches frescas. Lleve capas calientes pocas habitaciones con calefaccion, la ropa humeda seca despacio.',
      },
      {
        title: 'Ella: vistas, caminatas y centro relajado',
        body: 'Ella se ha convertido en el centro social de las tierras altas guesthouses, cafes y caminatas a Little Adam’s Peak y Ella Rock. Nine Arch Bridge conviene sincronizarlo con un tren (horarios con el chofer). La ciudad va a viajeros activos que prefieren estancias informales al brillo colonial.\n\nClima impredecible: amanecer claro puede volverse nube al mediodia. Reserve un dia entero en lugar de paso rapido si las vistas importan.',
      },
      {
        title: 'El vinculo de Kandy con el te puerta a las montanas',
        body: 'Kandy es ciudad cultural (Templo del Diente, jardin botanico), pero tambien inicio habitual del ascenso al pais del te. Peradeniya muestra especias y arboles maduros como transicion del calor de llanura al frescor de montana.\n\nAlgunos tours omiten Nuwara Eliya y toman el tren de Kandy hacia Ella con parada en plantacion compresion sensata si falta tiempo, a costa de menos profundidad.',
      },
      {
        title: 'Plantaciones vs fabricas y el tren panoramico',
        body: 'Un tour de fabrica muestra marchitado, rodado, fermentacion y empaquetado instructivo pero a veces ruidoso e industrial; la degustacion final es la recompensa. Paseos en plantacion por terrazas son mas suaves y fotogenicos, sobre todo temprano con recolectores activos y luz suave.\n\nLa linea Kandy to Badulla (a menudo Kandy to Ella o Nanu Oya to Ella) es el trayecto estrella reserve asientos observation o primera clase si puede, equipaje ligero para escaleras de estacion, retrasos posibles; las vistas importan, no la puntualidad.',
      },
      {
        title: 'Equipaje para clima fresco y consejos practicos',
        body: 'Forro polar o chaqueta ligera, calzado cerrado con agarre para andenes mojados, chubasquero paraguas pierde contra el viento de montana. Protector solar sigue siendo util en altitud; UV fuerte cuando se abren nubes.\n\nMareo afecta a algunos en carreteras sinuosas asiento delantero, evite curry pesado antes de traslados largos, paradas en miradores en lugar de correr a la llegada. El pais del te premia mananas lentas terraza brumosa con orange pekoe supera otra hora en coche.',
      },
    ],
    faq: [
      {
        q: 'Cuantos dias en el pais del te?',
        a: 'Dos noches (a menudo Nuwara Eliya y Ella, o Kandy mas Ella) encajan en la mayoria de tours de una semana. Una noche es apresurada; tres permiten caminatas mas lentas y mejor suerte con el clima.',
      },
      {
        q: 'Vale la pena el tren Kandy to Ella?',
        a: 'Si por el paisaje reserve asientos con antelacion en temporada alta, viaje de dia, retrasos incluidos. Muchos hacen solo un tramo en tren.',
      },
      {
        q: 'Que ropa llevar a Nuwara Eliya?',
        a: 'Capas camiseta de dia, jersey o polar de noche. Calzado cerrado con agarre; chaqueta de lluvia todo el ano.',
      },
      {
        q: 'Fabrica de te con ninos?',
        a: 'Generalmente bienvenidos; ruido de maquinaria y superficies calientes tomar de la mano en planta, evitar si muy pequenos sensibles al ruido.',
      },
      {
        q: 'Nuwara Eliya o Ella para dormir?',
        a: 'Nuwara Eliya por frescura colonial y jardines; Ella por caminatas, cafes y Nine Arch Bridge. Muchos itinerarios incluyen una noche en cada una.',
      },
    ],
    ctaTitle: 'Integre el pais del te en su ruta privada',
    ctaBody: 'Indique fechas y nivel de forma equilibraremos tramos en tren, paradas en plantacion y noches en pueblo de montana sin sobrecargar dias de conduccion.',
    ctaLabel: 'Planificar ruta de montana',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
      { pageId: 'ellaDay', label: 'Excursion de un dia a Ella' },
      { pageId: 'kandyDay', label: 'Excursion de un dia a Kandy' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Mejor epoca para visitar Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guia de equipaje para Sri Lanka' },
      { pageId: 'guidePrivateDriver', label: 'Guia del chofer privado' },
    ],
  },

  pl: {
    h1: 'Przewodnik po kraju herbaty Sri Lanki: plantacje, pociagi i gorskie miasteczka',
    lead: 'Gory miedzy Kandy a Ella sa chlodniejsze, bardziej zielone i wolniejsze niz wybrzeze konturowe krzewy herbaty, kolonialne bungalowy i mgliste grzbiety polaczone jedna z wielkich tras panoramicznych Azji. Wiedza, gdzie spac, co daje wizyta w fabryce i jak ubrac sie na 15-°C poranki, decyduje o wilgotnym przystanku albo o highlightcie wyjazdu.',
    heroAlt: 'Rzedy krzewow herbaty na plantacji w gorskim interiorze Sri Lanki',
    sections: [
      {
        title: 'Co obejmuje „kraj herbaty” w typowej trasie',
        body: 'Wiekszosc tourow przekracza gory w dwa to trzy dni, czesto Kandy → Nuwara Eliya → Ella, z opcjonalnymi postojami na plantacji lub punkcie widokowym. Wysokosci od ok. 500 m kolo Kandy do ponad 1 800 m na Horton Plains temperatury spadaja szybko, deszcz przychodzi bez ostrzezenia.\n\nTo nie jedno miasto, lecz korytarz dolin i szczytow; przezywa sie go pociagiem, krotkimi spacerami i jedna–dwoma bazami noclegowymi, nie checklista platnych pomnikow.',
      },
      {
        title: 'Nuwara Eliya: kolonialna stacja i wysokie ogrody',
        body: '„Little England” lezy na ok. 1 900 m z chlodnymi nocami, fasadami w stylu Tudor i trawnikiem toru wyscigowego niepasujacym do tropikow. Pedro Estate i Mackwoods (Damro) oferuja fabryki i degustacje; Gregory Lake lodki przy dobrej pogodzie.\n\nDla podroznych szukajacych formalnego ogrodu i chlodniejszych nocy. Zapakuj warstwy cieple w pokojach rzadko jest ogrzewanie, wilgotna pralnia schnie wolno.',
      },
      {
        title: 'Ella: widoki, wedrowki i luzne centrum',
        body: 'Ella stala sie spolecznym centrum gor guesthouse’y, kawiarnie i szlaki na Little Adam’s Peak i Ella Rock. Nine Arch Bridge najlepiej zsynchronizowac z przejazdem pociagu (harmonogram z kierowca). Miasteczko dla aktywnych, ktorzy wola luzny styl od kolonialnego polysku.\n\nPogoda nieprzewidywalna: czysty wschod moze do poludnia zasnac w chmurach. Zaplanuj caly dzien zamiast przejazdu, jesli widoki sa wazne.',
      },
      {
        title: 'Powiazanie Kandy z herbata brama do gor',
        body: 'Kandy to miasto kultury (Swiatynia Zeba, ogrod botaniczny), ale tez zwykly start wspinaczki ku krajowi herbaty. Peradeniya pokazuje przyprawy i stare drzewa jako przejscie od nizinnego goraca do gorskiej chlodnosci.\n\nNiektore trasy pomijaja nocleg w Nuwara Eliya i jada pociagiem z Kandy w strone Elli z krotkim postojem na plantacji sensowna kompresja przy malym czasie, kosztem glebi.',
      },
      {
        title: 'Plantacje vs fabryki i pociag panoramiczny',
        body: 'Wizyta w fabryce pokazuje wiedniecie, rolkowanie, fermentacje i pakowanie pouczajaco, czasem glosno i przemyslowo; degustacja na koncu jest nagroda. Spacery po tarasach plantacji sa lagodniejsze i bardziej fotogeniczne, zwlaszcza rano, gdy zbieracze pracuja, a swiatlo miekkie.\n\nLinia Kandy to Badulla (czesto Kandy to Ella lub Nanu Oya to Ella) to glowna atrakcja rezerwuj miejsca observation lub pierwsza klasa, lekki bagaz na schody peronu, opoznienia mozliwe; liczy sie widok, nie punktualnosc.',
      },
      {
        title: 'Pakowanie na chlodny klimat i praktyka',
        body: 'Polar lub lekka kurtka, obuwie zamkniete z przyczepnoscia na mokre perony, kurtka przeciwdeszczowa parasole przegrywaja z gorskim wiatrem. Krem SPF wciaz wazny na wysokosci; UV mocne po rozejsciu chmur.\n\n Choroba lokomocyjna dotyka niektorych na kretych drogach siedzenie z przodu, unikaj ciezkiego curry przed dluga jazda, postoje na punktach widokowych zamiast pedu na miejsce. Kraj herbaty nagradza powolne poranki mglista taras z orange pekoe bije kolejna godzine w aucie.',
      },
    ],
    faq: [
      {
        q: 'Ile dni w kraju herbaty?',
        a: 'Dwie noce (czesto Nuwara Eliya i Ella albo Kandy plus Ella) pasuja do wiekszosci tygodniowych tras. Jedna noc to ped; trzy daja wolniejsze spacery i lepsza pogode.',
      },
      {
        q: 'Czy warto pociag Kandy to Ella?',
        a: 'Tak dla krajobrazu rezerwuj miejsca z wyprzedzeniem w szczycie, jedz w dzien, opoznienia wliczone. Wielu jedzie tylko jednym odcinkiem.',
      },
      {
        q: 'Co nosic w Nuwara Eliya?',
        a: 'Warstwy koszulka w dzien, sweter lub polar w nocy. Obuwie zamkniete z grip; kurtka przeciwdeszczowa przez caly rok.',
      },
      {
        q: 'Fabryka herbaty z dziecmi?',
        a: 'Zwykle mile widziane; halas maszyn i gorace powierzchnie trzymac za reke na hali, unikac przy bardzo malych wrazliwych na halas.',
      },
      {
        q: 'Nuwara Eliya czy Ella na nocleg?',
        a: 'Nuwara Eliya dla kolonialnej chlodnosci i ogrodow; Ella dla wedrowek, kawiarni i Nine Arch Bridge. Wiele tras ma po nocy w kazdej.',
      },
    ],
    ctaTitle: 'Wplec kraj herbaty w prywatna trase',
    ctaBody: 'Podaj daty i kondycje zbalansujemy odcinki pociagu, postoje na plantacjach i noce w gorskich miasteczkach bez przeladowania dni jazdy.',
    ctaLabel: 'Zaplanuj trase gorska',
    relatedTours: [
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'ellaDay', label: 'Jednodniowa wycieczka do Elli' },
      { pageId: 'kandyDay', label: 'Jednodniowa wycieczka do Kandy' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Najlepszy czas na Sri Lanke' },
      { pageId: 'guidePacking', label: 'Przewodnik pakowania na Sri Lanke' },
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnym kierowcy' },
    ],
  },

  ru: {
    h1: 'Гид по чайному краю Шри Ланки: плантации, поезда и горные городки',
    lead: 'Горная местность между Kandy и Эллой прохладнее, зеленее и медленнее побережья террасные чайные кусты, колониальные бунгало и туманные гребни, связанные одной из великих панорамных железных дорог Азии. Знание, где ночевать, что даёт экскурсия на фабрику и как одеться на 15 градусные утра, отделяет сырой транзитный stop от highlight поездки.',
    heroAlt: 'Ряды чайных кустов на плантации в горной местности Шри Ланки',
    sections: [
      {
        title: 'Что включает «чайный край» в типичном маршруте',
        body: 'Большинство туров пересекают горы за два–три дня, часто Kandy → Nuwara Eliya → Ella, с опциональными остановками на плантации или смотровой площадке. Высоты от ~500 м у Kandy до более 1 800 м на Horton Plains температура падает быстро, дождь приходит без предупреждения.\n\nЭто не один город, а коридор долин и вершин; его проживают поездом, короткими прогулками и одной–двумя ночёвками, а не чек листом платных памятников.',
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
        body: 'Экскурсия по фабрике показывает завяливание, скручивание, ферментацию и упаковку познавательно, но шумно и industrial; дегустация в конце награда. Прогулки по террасам мягче и photogenicнее, особенно рано, когда сборщики работают и свет мягкий.\n\nЛиния Kandy to Badulla (часто Kandy to Ella или Nanu Oya to Ella) главный journey бронируйте observation или первый класс, лёгкий багаж для лестниц на перронах, задержки возможны; важны виды, не punctuality.',
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
        q: 'Стоит ли поезд Kandy to Ella?',
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
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
      { pageId: 'ellaDay', label: 'Однодневная экскурсия в Эллу' },
      { pageId: 'kandyDay', label: 'Однодневная экскурсия в Kandy' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Элла' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Лучшее время для Шри Ланки' },
      { pageId: 'guidePacking', label: 'Гид по упаковке вещей для Шри Ланки' },
      { pageId: 'guidePrivateDriver', label: 'Гид по частному водителю' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Tee Land Ratgeber: Plantagen, Zuge und Bergstadte',
    lead: 'Das Bergland zwischen Kandy und Ella ist kuhler, gruner und langsamer als die Kuste konturierte Teestraucher, Kolonialbungalows und neblige Grate, verbunden durch eine der schonsten Panorama Bahnstrecken Asiens. Wer weiss, wo er ubernachtet, was eine Fabriktour bringt und wie man sich fur 15-°C Morgen kleidet, erlebt ein Highlight statt eines feuchten Zwischenstopps.',
    heroAlt: 'Reihen von Teestrauchern auf einer srilankischen Teeplantage im Bergland',
    sections: [
      {
        title: 'Was „Tee Land“ auf einer typischen Route umfasst',
        body: 'Die meisten Rundreisen durchqueren die Berge in zwei bis drei Tagen, oft Kandy → Nuwara Eliya → Ella, mit optionalen Stopps an Plantagen oder Aussichtspunkten. Hohen von etwa 500 m bei Kandy bis uber 1.800 m am Horton Plains Temperaturen fallen schnell, Regen kommt ohne viel Vorwarnung.\n\nDas ist kein einzelner Ort, sondern ein Korridor aus Talern und Gipfeln; man erlebt ihn per Zug, kurzen Spaziergangen und ein bis zwei Ubernachtungsbasen statt einer Monument Checkliste.',
      },
      {
        title: 'Nuwara Eliya: koloniale Bergstation und hohe Garten',
        body: '„Little England“ liegt auf rund 1.900 m mit kuhlen Nachten, Tudor Fassaden und Rennbahn Rasen, der in den Tropen fremd wirkt. Pedro Estate und Mackwoods (Damro) bieten Fabriktouren und Verkostung; Gregory Lake Bootsfahrten bei passendem Wetter.\n\nIdeal fur Reisende mit formeller Gartenatmosphare und kuhleren Schlaftemperaturen. Warme Schichten einpacken Hotelzimmer haben selten Heizung, feuchte Wasche trocknet langsam.',
      },
      {
        title: 'Ella: Aussichten, Wanderungen und entspanntes Zentrum',
        body: 'Ella ist zum sozialen Mittelpunkt des Berglands geworden kleine Guesthouses, Cafes und Wanderungen zum Little Adam’s Peak und Ella Rock. Nine Arch Bridge am besten mit fahrendem Zug (Fahrplan mit Fahrer klaren). Die Stadt passt zu aktiven Reisenden, die informelle Aufenthalte Kolonial Chic vorziehen.\n\nWetter unberechenbar: klarer Sonnenaufgang kann bis Mittag in Wolken enden. Einen ganzen Tag einplanen statt Durchfahrt, wenn Aussicht zahlt.',
      },
      {
        title: 'Kandys Verbindung zum Tee Tor zum Bergland',
        body: 'Kandy ist Kulturstadt (Zahntempel, Botanischer Garten), aber auch ublicher Start des Aufstiegs ins Tee Land. Peradeniya zeigt Gewurzbeete und alte Baume als Ubergang von Tieflandhitze zu Bergkuhle.\n\nManche Touren ubernachten nicht in Nuwara Eliya, sondern fahren mit dem Zug von Kandy Richtung Ella und stoppen unterwegs an einer Plantage sinnvolle Verdichtung bei wenig Zeit, weniger Tiefe.',
      },
      {
        title: 'Plantagenbesuche vs Fabriktouren und der Panoramazug',
        body: 'Eine Fabriktour zeigt Welken, Rollen, Fermentieren und Verpacken lehrreich, manchmal laut und industriell; Verkostung am Ende ist der Lohn. Spaziergange uber Terrassen sind sanfter und fotogener, besonders fruh, wenn Pflucker aktiv sind und Licht weich ist.\n\nDie Strecke Kandy to Badulla (oft Kandy to Ella oder Nanu Oya to Ella) ist die Hauptattraktion reservierte Platze in Observation oder 1. Klasse wenn moglich, leichtes Gepack fur Bahnsteigtreppen, Verspatungen einplanen; die Aussicht zahlt, nicht die Punktlichkeit.',
      },
      {
        title: 'Packliste fur kuhles Klima und praktische Tipps',
        body: 'Fleece oder leichte Jacke, geschlossene Schuhe mit Grip fur nasse Bahnsteige, Regenjacke Regenschirme scheitern am Bergwind. Sonnenschutz trotzdem wichtig in der Hohe; UV stark bei Wolkenlucken.\n\nReisekrankheit betrifft manche auf kurvigen Bergstrassen vorn sitzen, kein schweres Curry vor langen Fahrten, Stopps an Aussichtspunkten statt Hetze. Tee Land belohnt langsame Morgen neblige Terrasse mit Orange Pekoe schlagt eine Autostunde.',
      },
      {
        title: 'Heutiger Name von Ceylon: Sri Lanka',
        body: 'Heutiger name von ceylon ist Sri Lanka. Ceylon land, sri lanka ceylon und ceylon sri lanka meinen dieselbe Insel. Ceylon bleibt der Name fur ceylon tee und echten Zimt von hier.\n\nWir fahren private Teeland Touren. Wir verkaufen keine Gewurzglaser in Deutschland.',
      },
      {
        title: 'Ceylon Tee und Ceylon Zimt auf der Rundreise',
        body: 'In der Fabrik sehen Sie ceylon tea Verkostung. An Gewurzgarten zwischen Colombo und Kandy wachst Cinnamomum verum, dunnrinde ceylon zimt, nicht cassia zimt. Das ist ein Ausflug, kein Rat welcher zimt ist gesund und kein zimt kaufen Shop.\n\nCeylon zimt unterschied zu cassia: echter Ceylon Zimt ist dunn und rohrrig. Cassia ist dicker. Wir sind Reiseveranstalter, keine Drogerie. Ceylon zimtstangen sehen Sie am Strauch, nicht als Supermarkt Glas.',
      },
    ],
    faq: [
      {
        q: 'Wie viele Tage im Tee Land?',
        a: 'Zwei Nachte (oft Nuwara Eliya und Ella oder Kandy plus Ella) passen zu den meisten Wochenrouten. Eine Nacht ist hetzig; drei erlauben langsamere Wanderungen und besseres Wettergluck.',
      },
      {
        q: 'Lohnt sich der Zug Kandy to Ella?',
        a: 'Ja wegen der Landschaft reservierte Platze in der Hochsaison voraus buchen, tags fahren, Verspatungen mit einplanen. Viele fahren ein Teilstuck und fahren den Rest.',
      },
      {
        q: 'Was anziehen in Nuwara Eliya?',
        a: 'Schichten T Shirt tags, Pullover oder Fleece nachts. Geschlossene Schuhe mit Grip; Regenjacke ganzjahrig.',
      },
      {
        q: 'Teefabrik mit Kindern?',
        a: 'Meist willkommen; Maschinenlarm und heisse Flachen Hande halten auf Fabrikboden, bei sehr kleinen Kindern bei Larm vorsichtig.',
      },
      {
        q: 'Nuwara Eliya oder Ella zum Ubernachten?',
        a: 'Nuwara Eliya fur koloniale Kuhle und Garten; Ella fur Wanderungen, Cafes und Nine Arch Bridge. Viele Routen nutzen je eine Nacht.',
      },
      {
        q: 'Wie lautet der heutige Name von Ceylon?',
        a: 'Heutiger name von ceylon ist Sri Lanka (im Kreuzwortratsel oft acht Buchstaben ohne Leerzeichen: SRILANKA). Ceylon land ist dasselbe Land.',
      },
      {
        q: 'Was ist der Unterschied Ceylon Zimt und Cassia?',
        a: 'Zimt cassia oder ceylon und ceylon vs cassia: echter ceylon zimt ist dunn, cassia zimt dicker. Sie sehen das im Gewurzgarten. Kein Drogerie Vergleich, kein Cumarin Rat, kein zimt kaufen.',
      },
      {
        q: 'Wo trinke ich Ceylon Tee auf der Reise?',
        a: 'Ceylon tee und ceylon tea in Fabriken um Nuwara Eliya und Ella, dazu schwarzer Tee Verkostung. Ceylon cay ist derselbe schwarze Tee. Assam tee ist Indien, nicht unsere Route.',
      },
    ],
    ctaTitle: 'Tee Land in Ihre private Route einweben',
    ctaBody: 'Nennen Sie Termine und Fitness wir balancieren Zugabschnitte, Plantagenstopps und Bergstadt Nachte ohne Uberlastung der Fahrtage.',
    ctaLabel: 'Bergland Route planen',
    relatedTours: [
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'ellaDay', label: 'Ella Tagesausflug' },
      { pageId: 'kandyDay', label: 'Kandy Tagesausflug' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste Ratgeber' },
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer Ratgeber' },
    ],
  }
};
