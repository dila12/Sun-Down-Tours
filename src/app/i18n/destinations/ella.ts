import type { ArticleContent } from '../articles/types';

/**
 * Ella destination guide (pageId: destElla).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const ELLA_DEST: ArticleContent = {
  en: {
    h1: 'Ella, Sri Lanka: Hill Country Views, Tea and the Nine Arch Bridge',
    lead: 'Cool mountain air, a valley of tea bushes rolling away in every direction, and the sound of the blue train crossing a century-old viaduct Ella is the hill-country stop that makes travellers extend their itinerary by an extra day.',
    heroImage: 'assets/img/destination-2.webp',
    heroAlt: 'Nine Arch Bridge surrounded by green tea plantations near Ella',
    sections: [
      {
        id: 'history',
        title: 'From colonial plantation outpost to hill-country favourite',
        body: 'Ella grew up in the shadow of British-era tea planting, when the surrounding slopes were cleared of forest and replanted with the neat contour rows of tea bush still seen today. The town itself stayed small and sleepy long after independence, known mainly to planters and passing rail traffic on the line built to move tea chests down to the coast.\n\nIt only became a fixture on the traveller trail in the last two decades, as word spread about the views from Ella Gap and the engineering feat of the Nine Arch Bridge. What was once a one-street village is now a genuine hill-station town, though it has largely kept its relaxed, walkable scale.',
      },
      {
        id: 'culture',
        title: 'Tamil, Sinhalese and planter heritage side by side',
        body: 'The tea industry that shaped Ella also shaped its population: many families working the surrounding estates trace their roots to Tamil workers brought from South India in the 19th century, and Hindu kovils sit within walking distance of Buddhist temples and a small Anglican church built for planter families.\n\nA visit to a working tea factory here most offer short, informal tours is as much social history as agriculture: you see the same withering, rolling and firing process used since colonial times, now run largely by the descendants of the original plantation workforce.',
      },
      {
        id: 'thingsToDo',
        title: 'What to do in Ella',
        body: 'The Nine Arch Bridge is the postcard shot everyone comes for a curved stone viaduct with no steel reinforcement at all, best seen (or better, walked across between trains) in the early morning light. Little Adam’s Peak is a gentler alternative to its famous namesake, a 45–60 minute climb rewarded with a 360-degree view over the valley and tea estates.\n\nElla Rock is the more serious hike of the two, three to four hours round trip through active tea plantations with a local guide recommended, since the trail crosses estate land and isn’t always clearly marked. Ravana Falls, a short tuk-tuk ride away, is an easy add-on, especially after rain when the falls run at full force.',
      },
      {
        id: 'travelTips',
        title: 'Practical tips for visiting',
        body: 'The scenic train journey between Ella and Kandy (or Ella and Nuwara Eliya) is one of the most photographed rail routes in Asia, and reserved second-class seats sell out weeks ahead in high season book as early as your dates allow, or travel by private car and simply stop wherever the view demands it.\n\nElla sits at roughly 1,000 metres, so evenings are genuinely cool; pack a light jacket even in the dry season. Distances in town are short enough to walk, but the roads to Little Adam’s Peak, Ella Rock and the viewpoints have no real footpaths, so wear shoes with grip rather than sandals.',
      },
      {
        id: 'weather',
        title: 'Weather in Ella',
        body: 'Ella’s hill-country climate is noticeably cooler and greener than the coast or the Cultural Triangle year-round, with the driest, clearest spells typically from January to April. Mist frequently rolls into the valley in the afternoon, which can make for beautiful, moody photographs but occasionally obscures the classic Nine Arch Bridge view.\n\nRain is possible in any month; a light waterproof is worth packing regardless of season, since afternoon showers can arrive with little warning at this elevation.',
      },
      {
        id: 'nearby',
        title: 'Nearby attractions worth combining',
        body: 'Yala National Park is roughly a two-hour drive south-east, making an early-morning safari followed by an afternoon in Ella an efficient combination for travellers short on time. Nuwara Eliya, Sri Lanka’s highest town and its most vivid tea country, is around two to three hours by road or a scenic train ride away.\n\nDiyaluma Falls, one of the country’s tallest waterfalls, and the Uda Walawe elephant-viewing park are both reachable as half-day or full-day excursions from Ella for travellers with an extra day to spare.',
      },
      {
        id: 'hotels',
        title: 'Where to stay',
        body: 'Ella’s accommodation is heavily view-driven: many guesthouses and mid-range hotels are built into the hillside specifically to frame Ella Gap or the surrounding tea estates from the breakfast table. Budget travellers are well served by family-run homestays in the centre of town, an easy walk from restaurants and the railway station.\n\nFor a quieter stay, a handful of properties sit a short tuk-tuk ride outside town on working tea estates, trading a little convenience for genuine plantation surroundings and total quiet at night.',
      },
      {
        id: 'restaurants',
        title: 'Eating in Ella',
        body: 'Ella’s traveller-friendly food scene is more varied than most hill-country towns, with rooftop restaurants serving Sri Lankan rice and curry alongside pizza, pasta and good espresso for those craving a change from the road. Fresh, locally grown vegetables and the region’s cooler climate make salads and soups genuinely worth ordering here, unlike in the hotter lowlands.\n\nDon’t skip a proper cup of tea while you’re here: several cafés serve estate-fresh tea brewed the traditional way, and it tastes noticeably different from what reaches export markets.',
      },
    ],
    faq: [
      {
        q: 'Is the train from Kandy to Ella worth it?',
        a: 'Yes, for most travellers it is the line climbs through tea estates, tunnels and viaducts with views that are hard to match by road. Book a reserved seat well in advance in high season, or be prepared to stand or sit in an unreserved carriage.',
      },
      {
        q: 'How many days should I spend in Ella?',
        a: 'Two full days lets you see the Nine Arch Bridge, hike Little Adam’s Peak or Ella Rock, and visit a tea factory without rushing. Add a third day if you want to combine Ella with Diyaluma Falls or an early Yala safari.',
      },
      {
        q: 'Is Ella Rock hike difficult?',
        a: 'It is more demanding than Little Adam’s Peak three to four hours round trip with some steep, unmarked sections through tea estate land so a local guide and proper shoes are recommended rather than optional.',
      },
      {
        q: 'What is the best time to visit Ella?',
        a: 'January to April generally brings the clearest skies and driest trails, though Ella’s elevation keeps it cooler and greener than the coast at any time of year, and short afternoon showers are possible in every month.',
      },
      {
        q: 'Can I visit Ella and Yala on the same trip?',
        a: 'Yes Yala is around two hours from Ella by private vehicle, so many itineraries pair a Yala morning safari with an Ella afternoon, or base in Ella for two nights and add a full-day Yala excursion.',
      },
    ],
    ctaTitle: 'Plan your time in Ella',
    ctaBody: 'Our private tours include Ella as a hill-country stop on multi-day itineraries, with your chauffeur guide timing the drive around the scenic train, tea factory visits and the best light for the Nine Arch Bridge.',
    ctaLabel: 'Build your Ella itinerary',
    relatedTours: [
      { pageId: 'ellaDay', label: 'Ella Day Tour' },
      { pageId: 'tour2ey', label: '2 Day Ella & Yala Tour' },
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala National Park' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Sri Lanka Tea Country Guide' },
      { pageId: 'guideBestTime', label: 'Best Time to Visit Sri Lanka' },
    ],
  },

  de: {
    h1: 'Ella, Sri Lanka: Bergpanorama, Tee und die Nine Arch Bridge',
    lead: 'Kühle Bergluft, ein Tal voller Teebüsche, das sich in jede Richtung erstreckt, und das Geräusch des blauen Zuges, der ein jahrhundertealtes Viadukt überquert – Ella ist der Bergland-Stopp, wegen dem Reisende ihre Route gerne um einen Tag verlängern.',
    heroAlt: 'Die Nine Arch Bridge inmitten grüner Teeplantagen bei Ella',
    sections: [
      {
        title: 'Vom kolonialen Plantagenort zum Lieblingsort im Bergland',
        body: 'Ella wuchs im Schatten des britischen Teeanbaus heran, als die umliegenden Hänge gerodet und mit den ordentlichen Konturreihen aus Teebüschen bepflanzt wurden, die man noch heute sieht. Der Ort selbst blieb lange nach der Unabhängigkeit klein und verschlafen, bekannt vor allem bei Plantagenbesitzern und der Eisenbahn, die Teekisten zur Küste transportierte.\n\nErst in den letzten zwei Jahrzehnten wurde Ella zu einem festen Ziel auf der Reiseroute, als sich die Aussicht vom Ella Gap und die Ingenieurleistung der Nine Arch Bridge herumsprachen. Aus dem einstigen Ein-Straßen-Dorf ist heute eine echte Bergstadt geworden, die sich jedoch weitgehend ihren entspannten, überschaubaren Maßstab bewahrt hat.',
      },
      {
        title: 'Tamilisches, singhalesisches und koloniales Erbe nebeneinander',
        body: 'Die Teeindustrie, die Ella geprägt hat, prägte auch seine Bevölkerung: Viele Familien, die auf den umliegenden Plantagen arbeiten, führen ihre Wurzeln auf tamilische Arbeiter zurück, die im 19. Jahrhundert aus Südindien geholt wurden. Hindu-Kovils liegen zu Fuß erreichbar neben buddhistischen Tempeln und einer kleinen anglikanischen Kirche, die für Plantagenfamilien errichtet wurde.\n\nEin Besuch einer arbeitenden Teefabrik – die meisten bieten kurze, informelle Führungen an – ist ebenso Sozialgeschichte wie Landwirtschaft: Man sieht denselben Prozess des Welkens, Rollens und Röstens, der seit Kolonialzeiten genutzt wird, heute größtenteils betrieben von den Nachfahren der ursprünglichen Plantagenarbeiter.',
      },
      {
        title: 'Was man in Ella unternehmen sollte',
        body: 'Die Nine Arch Bridge ist das Postkartenmotiv, für das alle kommen – ein geschwungenes Steinviadukt ganz ohne Stahlbewehrung, am schönsten im frühen Morgenlicht zu sehen (oder besser noch, zwischen zwei Zügen zu überqueren). Little Adam’s Peak ist eine sanftere Alternative zu seinem berühmten Namensvetter: ein 45- bis 60-minütiger Aufstieg, belohnt mit einem 360-Grad-Blick über das Tal und die Teeplantagen.\n\nElla Rock ist die anspruchsvollere der beiden Wanderungen, drei bis vier Stunden Hin- und Rückweg durch aktive Teeplantagen; ein lokaler Guide wird empfohlen, da der Pfad über Plantagengelände führt und nicht immer klar markiert ist. Die Ravana Falls, eine kurze Tuk-Tuk-Fahrt entfernt, sind ein einfacher Zusatzstopp, besonders nach Regen, wenn die Fälle mit voller Kraft fließen.',
      },
      {
        title: 'Praktische Tipps für den Besuch',
        body: 'Die malerische Zugfahrt zwischen Ella und Kandy (oder Ella und Nuwara Eliya) gehört zu den meistfotografierten Bahnstrecken Asiens, und reservierte Sitzplätze der zweiten Klasse sind in der Hochsaison Wochen im Voraus ausgebucht – buchen Sie so früh wie möglich oder reisen Sie mit einem Privatwagen und halten Sie einfach dort, wo die Aussicht es verlangt.\n\nElla liegt auf etwa 1.000 Metern Höhe, daher sind die Abende wirklich kühl; packen Sie auch in der Trockenzeit eine leichte Jacke ein. Die Entfernungen im Ort sind zu Fuß gut zu bewältigen, aber die Wege zum Little Adam’s Peak, zum Ella Rock und zu den Aussichtspunkten haben keine echten Gehwege – tragen Sie also Schuhe mit gutem Grip statt Sandalen.',
      },
      {
        title: 'Wetter in Ella',
        body: 'Ellas Bergklima ist ganzjährig deutlich kühler und grüner als an der Küste oder im Kulturdreieck, mit den trockensten, klarsten Phasen typischerweise von Januar bis April. Nachmittags zieht häufig Nebel ins Tal, was wunderschöne, stimmungsvolle Fotos ermöglicht, gelegentlich aber den klassischen Blick auf die Nine Arch Bridge verdeckt.\n\nRegen ist in jedem Monat möglich; eine leichte Regenjacke lohnt sich unabhängig von der Saison, da Nachmittagsschauer in dieser Höhenlage oft ohne viel Vorwarnung kommen.',
      },
      {
        title: 'Sehenswertes in der Umgebung',
        body: 'Der Yala-Nationalpark liegt etwa zwei Autostunden südöstlich, sodass sich ein früher Morgen-Safari mit einem Nachmittag in Ella für Reisende mit wenig Zeit gut kombinieren lässt. Nuwara Eliya, Sri Lankas höchstgelegene Stadt und lebendigstes Teeland, ist etwa zwei bis drei Stunden per Straße oder eine malerische Zugfahrt entfernt.\n\nDie Diyaluma-Wasserfälle, einer der höchsten des Landes, und der Elefanten-Beobachtungspark Uda Walawe sind beide als Halbtags- oder Tagesausflug von Ella aus erreichbar, wenn Sie einen zusätzlichen Tag Zeit haben.',
      },
      {
        title: 'Wo man übernachten kann',
        body: 'Die Unterkünfte in Ella sind stark aussichtsorientiert: Viele Gästehäuser und Mittelklassehotels sind gezielt am Hang gebaut, um den Blick auf den Ella Gap oder die umliegenden Teeplantagen vom Frühstückstisch aus einzurahmen. Reisende mit kleinerem Budget finden gut geführte, familiäre Homestays im Ortszentrum, nur einen kurzen Fußweg von Restaurants und Bahnhof entfernt.\n\nFür einen ruhigeren Aufenthalt liegen einige Unterkünfte eine kurze Tuk-Tuk-Fahrt außerhalb des Ortes auf aktiven Teeplantagen – etwas weniger Bequemlichkeit gegen echte Plantagenatmosphäre und nächtliche Stille.',
      },
      {
        title: 'Essen in Ella',
        body: 'Ellas reisefreundliche Gastroszene ist vielfältiger als in den meisten Bergstädten: Dachterrassenrestaurants servieren srilankisches Rice and Curry neben Pizza, Pasta und gutem Espresso für alle, die eine Abwechslung von der Reise suchen. Frisches, lokal angebautes Gemüse und das kühlere Klima der Region machen Salate und Suppen hier tatsächlich lohnenswert – anders als im heißeren Tiefland.\n\nVerpassen Sie hier nicht eine richtige Tasse Tee: Mehrere Cafés servieren frischen Tee direkt von der Plantage, traditionell zubereitet, und er schmeckt deutlich anders als das, was in den Export geht.',
      },
    ],
    faq: [
      {
        q: 'Lohnt sich die Zugfahrt von Kandy nach Ella?',
        a: 'Für die meisten Reisenden ja – die Strecke führt durch Teeplantagen, Tunnel und Viadukte mit Ausblicken, die auf der Straße kaum zu erreichen sind. Buchen Sie in der Hochsaison einen reservierten Platz frühzeitig, sonst müssen Sie eventuell stehen oder in einem unreservierten Waggon sitzen.',
      },
      {
        q: 'Wie viele Tage sollte ich in Ella verbringen?',
        a: 'Zwei volle Tage reichen, um die Nine Arch Bridge zu sehen, Little Adam’s Peak oder Ella Rock zu besteigen und eine Teefabrik zu besuchen, ohne zu hetzen. Fügen Sie einen dritten Tag hinzu, wenn Sie Ella mit den Diyaluma Falls oder einer frühen Yala-Safari verbinden möchten.',
      },
      {
        q: 'Ist die Wanderung zum Ella Rock schwierig?',
        a: 'Sie ist anspruchsvoller als Little Adam’s Peak – drei bis vier Stunden Hin- und Rückweg mit einigen steilen, unmarkierten Abschnitten durch Teeplantagengelände –, weshalb ein lokaler Guide und geeignetes Schuhwerk empfehlenswert statt optional sind.',
      },
      {
        q: 'Wann ist die beste Reisezeit für Ella?',
        a: 'Januar bis April bringt meist den klarsten Himmel und trockensten Pfade, doch Ellas Höhenlage hält es das ganze Jahr über kühler und grüner als die Küste, und kurze Nachmittagsschauer sind in jedem Monat möglich.',
      },
      {
        q: 'Kann ich Ella und Yala in derselben Reise besuchen?',
        a: 'Ja – Yala liegt etwa zwei Autostunden von Ella entfernt, sodass viele Reisepläne eine Yala-Morgen-Safari mit einem Ella-Nachmittag kombinieren oder Ella für zwei Nächte als Basis nutzen und einen ganztägigen Yala-Ausflug ergänzen.',
      },
    ],
    ctaTitle: 'Planen Sie Ihre Zeit in Ella',
    ctaBody: 'Unsere privaten Rundreisen führen über mehrere Tage auch nach Ella als Bergland-Stopp, wobei Ihr Fahrer-Guide die Fahrt rund um die malerische Zugfahrt, Teefabrikbesuche und das beste Licht für die Nine Arch Bridge plant.',
    ctaLabel: 'Ella-Route zusammenstellen',
    relatedTours: [
      { pageId: 'ellaDay', label: 'Ella Tagestour' },
      { pageId: 'tour2ey', label: '2-tägige Ella & Yala Tour' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala-Nationalpark' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Sri Lanka Teeland-Ratgeber' },
      { pageId: 'guideBestTime', label: 'Beste Reisezeit für Sri Lanka' },
    ],
  },

  fr: {
    h1: 'Ella, Sri Lanka : panoramas des hautes terres, thé et pont des neuf arches',
    lead: 'Un air de montagne frais, une vallée de théiers qui s’étend à perte de vue, et le bruit du train bleu traversant un viaduc centenaire : Ella est l’étape des hautes terres qui pousse les voyageurs à prolonger leur itinéraire d’un jour supplémentaire.',
    heroAlt: 'Le pont des neuf arches entouré de plantations de thé verdoyantes près d’Ella',
    sections: [
      {
        title: 'D’avant-poste colonial des plantations à halte préférée des hautes terres',
        body: 'Ella s’est développée dans l’ombre de la culture du thé de l’époque britannique, lorsque les pentes environnantes furent déboisées et replantées avec les rangées de théiers en courbes de niveau que l’on voit encore aujourd’hui. Le village lui-même resta petit et paisible longtemps après l’indépendance, connu surtout des planteurs et du trafic ferroviaire qui acheminait les caisses de thé vers la côte.\n\nCe n’est que ces vingt dernières années qu’Ella s’est imposée sur la route des voyageurs, à mesure que se répandait la réputation de la vue depuis Ella Gap et de la prouesse technique du pont des neuf arches. Ce qui n’était qu’un village à une seule rue est aujourd’hui une véritable petite ville de montagne, qui a néanmoins largement conservé son échelle détendue et facile à parcourir à pied.',
      },
      {
        title: 'Héritages tamoul, cinghalais et colonial côte à côte',
        body: 'L’industrie du thé qui a façonné Ella a aussi façonné sa population : de nombreuses familles travaillant sur les plantations environnantes descendent d’ouvriers tamouls venus du sud de l’Inde au XIXe siècle, et des temples hindous (kovils) se trouvent à distance de marche de temples bouddhistes et d’une petite église anglicane construite pour les familles de planteurs.\n\nVisiter une usine de thé en activité la plupart proposent de courtes visites informelles relève autant de l’histoire sociale que de l’agriculture : on y observe le même processus de flétrissage, de roulage et de torréfaction utilisé depuis l’époque coloniale, aujourd’hui géré en grande partie par les descendants de la main-d’œuvre originelle des plantations.',
      },
      {
        title: 'Que faire à Ella',
        body: 'Le pont des neuf arches est la photo de carte postale que tout le monde vient chercher un viaduc de pierre courbe, entièrement sans armature d’acier, à voir idéalement dans la lumière du petit matin (ou mieux encore, à traverser entre deux passages de train). Little Adam’s Peak est une alternative plus douce à son célèbre homonyme : une montée de 45 à 60 minutes récompensée par une vue à 360 degrés sur la vallée et les plantations de thé.\n\nElla Rock est la randonnée la plus sérieuse des deux, trois à quatre heures aller-retour à travers des plantations de thé en activité ; un guide local est recommandé, car le sentier traverse des terrains privés et n’est pas toujours clairement balisé. Les chutes de Ravana, à une courte course de tuk-tuk, constituent un ajout facile, surtout après la pluie lorsque les chutes sont à leur plus fort débit.',
      },
      {
        title: 'Conseils pratiques pour la visite',
        body: 'Le trajet en train panoramique entre Ella et Kandy (ou Ella et Nuwara Eliya) est l’une des lignes ferroviaires les plus photographiées d’Asie, et les places réservées en seconde classe se vendent des semaines à l’avance en haute saisonéservez dès que possible, ou voyagez en véhicule privé et arrêtez-vous simplement où la vue le mérite.\n\nElla se situe à environ 1 000 mètres d’altitude, les soirées y sont donc réellement fraîches ; prévoyez une veste légère même en saison sèche. Les distances dans le village se parcourent aisément à pied, mais les chemins vers Little Adam’s Peak, Ella Rock et les points de vue n’ont pas de véritables sentiers aménagésréférez donc des chaussures accrochantes aux sandales.',
      },
      {
        title: 'Météo à Ella',
        body: 'Le climat des hautes terres d’Ella est nettement plus frais et plus vert que celui de la côte ou du Triangle Culturel toute l’année, avec les périodes les plus sèches et les plus claires généralement de janvier à avril. La brume envahit souvent la vallée l’après-midi, ce qui donne de superbes photos pleines d’atmosphère mais masque parfois la vue classique sur le pont des neuf arches.\n\nLa pluie est possible n’importe quel mois ; un coupe-vent léger vaut la peine d’être emporté quelle que soit la saison, car les averses de l’après-midi peuvent survenir sans grand préavis à cette altitude.',
      },
      {
        title: 'Sites à combiner aux alentours',
        body: 'Le parc national de Yala se trouve à environ deux heures de route au sud-est, ce qui permet de combiner efficacement un safari matinal et un après-midi à Ella pour les voyageurs disposant de peu de temps. Nuwara Eliya, la ville la plus élevée du Sri Lanka et son pays du thé le plus emblématique, est à deux ou trois heures de route ou un trajet de train panoramique.\n\nLes chutes de Diyaluma, parmi les plus hautes du pays, et le parc d’observation des éléphants d’Uda Walawe sont tous deux accessibles en excursion d’une demi-journée ou d’une journée complète depuis Ella pour les voyageurs disposant d’un jour supplémentaire.',
      },
      {
        title: 'Où loger',
        body: 'Les hébergements d’Ella misent fortement sur la vue : de nombreuses pensions et hôtels de milieu de gamme sont construits à flanc de colline précisément pour encadrer Ella Gap ou les plantations de thé environnantes depuis la table du petit-déjeuner. Les voyageurs à petit budget trouveront de bons hébergements chez l’habitant en plein centre du village, à deux pas des restaurants et de la gare.\n\nPour un séjour plus tranquille, quelques établissements se trouvent à une courte course de tuk-tuk du centre, au cœur de plantations de thé en activitépeu moins pratique, mais un cadre authentique et un calme total la nuit.',
      },
      {
        title: 'Se restaurer à Ella',
        body: 'La scène culinaire d’Ella, tournée vers les voyageurs, est plus variée que celle de la plupart des villages des hautes terres : les restaurants en terrasse servent du rice and curry sri-lankais aux côtés de pizzas, de pâtes et de bons espressos pour ceux qui recherchent un changement. Les légumes frais cultivés localement et le climat plus frais de la région font que les salades et les soupes valent vraiment le détour ici, contrairement aux plaines plus chaudes.\n\nNe manquez pas une véritable tasse de thé pendant votre séjour : plusieurs cafés servent du thé fraîchement récolté préparé selon la méthode traditionnelle, avec un goût nettement différent de celui destiné à l’exportation.',
      },
    ],
    faq: [
      {
        q: 'Le train de Kandy à Ella en vaut-il la peine ?',
        a: 'Oui, pour la plupart des voyageursgne traverse plantations de thé, tunnels et viaducs avec des vues difficiles à égaler par la route. Réservez une place à l’avance en haute saison, sinon préparez-vous à voyager debout ou dans un wagon non réservé.',
      },
      {
        q: 'Combien de jours passer à Ella ?',
        a: 'Deux journées complètes permettent de voir le pont des neuf arches, de grimper à Little Adam’s Peak ou à Ella Rock, et de visiter une usine de thé sans se presser. Ajoutez une troisième journée pour combiner Ella avec les chutes de Diyaluma ou un safari matinal à Yala.',
      },
      {
        q: 'La randonnée d’Ella Rock est-elle difficile ?',
        a: 'Elle est plus exigeante que Little Adam’s Peakis à quatre heures aller-retour avec des passages raides et non balisés à travers des plantations de théun guide local et de bonnes chaussures sont donc recommandés plutôt que facultatifs.',
      },
      {
        q: 'Quelle est la meilleure période pour visiter Ella ?',
        a: 'Janvier à avril offre généralement le ciel le plus dégagé et les sentiers les plus secs, mais l’altitude d’Ella la garde plus fraîche et plus verte que la côte toute l’année, avec de courtes averses possibles à tout moment.',
      },
      {
        q: 'Peut-on visiter Ella et Yala dans le même voyage ?',
        a: 'Oui Yala se trouve à environ deux heures d’Ella en véhicule privé, si bien que de nombreux itinéraires associent un safari matinal à Yala à un après-midi à Ella, ou utilisent Ella comme base pour deux nuits avec une excursion d’une journée à Yala.',
      },
    ],
    ctaTitle: 'Organisez votre séjour à Ella',
    ctaBody: 'Nos circuits privés incluent Ella comme étape des hautes terres sur plusieurs jours, votre chauffeur-guide organisant la conduite autour du trajet en train panoramique, des visites d’usines de thé et de la meilleure lumière pour le pont des neuf arches.',
    ctaLabel: 'Construire votre itinéraire à Ella',
    relatedTours: [
      { pageId: 'ellaDay', label: 'Excursion d’une journée à Ella' },
      { pageId: 'tour2ey', label: 'Circuit de 2 jours Ella & Yala' },
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parc national de Yala' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Guide du pays du thé au Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Meilleure période pour visiter le Sri Lanka' },
    ],
  },

  it: {
    h1: 'Ella, Sri Lanka: panorami collinari, tè e il ponte dei nove archi',
    lead: 'Aria fresca di montagna, una valle di piantagioni di tè che si estende in ogni direzione e il suono del treno blu che attraversa un viadotto secolare: Ella è la tappa dell’entroterra collinare che spinge i viaggiatori ad allungare l’itinerario di un giorno in più.',
    heroAlt: 'Il ponte dei nove archi circondato da verdi piantagioni di tè vicino a Ella',
    sections: [
      {
        title: 'Da avamposto coloniale delle piantagioni a meta preferita dell’entroterra',
        body: 'Ella crebbe all’ombra della coltivazione del tè in epoca britannica, quando i pendii circostanti furono disboscati e ripiantati con le ordinate file a curve di livello di cespugli di tè ancora visibili oggi. Il villaggio rimase piccolo e tranquillo per molto tempo dopo l’indipendenza, noto soprattutto ai piantatori e al traffico ferroviario che portava le casse di tè verso la costa.\n\nSolo negli ultimi due decenni Ella è diventata una tappa fissa dei viaggiatori, man mano che si diffondeva la fama della vista da Ella Gap e dell’impresa ingegneristica del ponte dei nove archi. Quello che era un villaggio con una sola strada è oggi una vera cittadina collinare, che però ha in gran parte conservato le sue dimensioni rilassate e percorribili a piedi.',
      },
      {
        title: 'Eredità tamil, singalese e coloniale fianco a fianco',
        body: 'L’industria del tè che ha modellato Ella ne ha modellato anche la popolazione: molte famiglie che lavorano nelle piantagioni circostanti fanno risalire le proprie radici ai lavoratori tamil portati dal Sud dell’India nel XIX secolo, e i kovil induisti si trovano a pochi passi da templi buddhisti e da una piccola chiesa anglicana costruita per le famiglie dei piantatori.\n\nVisitare una fabbrica di tè attiva la maggior parte offre brevi visite informali è tanto storia sociale quanto agricoltura: si osserva lo stesso processo di appassimento, arrotolamento e tostatura in uso dai tempi coloniali, oggi gestito in gran parte dai discendenti della manodopera originaria delle piantagioni.',
      },
      {
        title: 'Cosa fare a Ella',
        body: 'Il ponte dei nove archi è la foto da cartolina per cui tutti vengono qui un viadotto in pietra curvo, completamente privo di armatura in acciaio, da vedere idealmente nella luce del primo mattino (o meglio ancora, da attraversare a piedi tra un treno e l’altro). Little Adam’s Peak è un’alternativa più dolce al suo celebre omonimo: una salita di 45-60 minuti ricompensata da una vista a 360 gradi sulla valle e sulle piantagioni di tè.\n\nElla Rock è l’escursione più impegnativa delle due, tre-quattro ore andata e ritorno attraverso piantagioni di tè attive; è consigliata una guida locale, poiché il sentiero attraversa terreni privati e non è sempre segnalato con chiarezza. Le cascate di Ravana, a breve distanza in tuk-tuk, sono un’aggiunta semplice, soprattutto dopo la pioggia quando le cascate sono al massimo della portata.',
      },
      {
        title: 'Consigli pratici per la visita',
        body: 'Il viaggio panoramico in treno tra Ella e Kandy (o tra Ella e Nuwara Eliya) è una delle linee ferroviarie più fotografate dell’Asia, e i posti prenotati in seconda classe si esauriscono settimane prima in alta stagione: prenotate il prima possibile, oppure viaggiate con un veicolo privato e fermatevi semplicemente dove il panorama lo merita.\n\nElla si trova a circa 1.000 metri di altitudine, quindi le serate sono davvero fresche; portate una giacca leggera anche in stagione secca. Le distanze in paese si percorrono facilmente a piedi, ma i sentieri per Little Adam’s Peak, Ella Rock e i punti panoramici non hanno veri percorsi pedonali: indossate quindi scarpe con una buona presa piuttosto che sandali.',
      },
      {
        title: 'Clima a Ella',
        body: 'Il clima collinare di Ella è notevolmente più fresco e verde rispetto alla costa o al Triangolo Culturale durante tutto l’anno, con i periodi più secchi e limpidi generalmente tra gennaio e aprile. Nel pomeriggio la nebbia scende spesso nella valle, creando fotografie splendide e suggestive ma a volte offuscando la classica vista sul ponte dei nove archi.\n\nLa pioggia è possibile in qualsiasi mese; conviene portare un leggero impermeabile indipendentemente dalla stagione, poiché a questa altitudine i temporali pomeridiani possono arrivare con poco preavviso.',
      },
      {
        title: 'Attrazioni nei dintorni da abbinare',
        body: 'Il parco nazionale di Yala si trova a circa due ore di auto a sud-est, il che permette di combinare in modo efficiente un safari al mattino presto con un pomeriggio a Ella per chi ha poco tempo. Nuwara Eliya, la città più alta dello Sri Lanka e il suo territorio del tè più suggestivo, è a due o tre ore di strada oppure un viaggio panoramico in treno.\n\nLe cascate di Diyaluma, tra le più alte del paese, e il parco di osservazione degli elefanti di Uda Walawe sono entrambi raggiungibili come escursione di mezza giornata o di una giornata intera da Ella per chi ha un giorno in più a disposizione.',
      },
      {
        title: 'Dove alloggiare',
        body: 'Le strutture di Ella puntano molto sulla vista: molte guesthouse e hotel di fascia media sono costruiti sul pendio proprio per inquadrare Ella Gap o le piantagioni di tè circostanti dal tavolo della colazione. I viaggiatori con budget limitato trovano buone soluzioni in homestay familiari nel centro del paese, a due passi da ristoranti e stazione ferroviaria.\n\nPer un soggiorno più tranquillo, alcune strutture si trovano a breve distanza in tuk-tuk dal centro, all’interno di piantagioni di tè attive: un po’ meno comode, ma con un’atmosfera autentica e assoluta tranquillità di notte.',
      },
      {
        title: 'Dove mangiare a Ella',
        body: 'La scena gastronomica di Ella, pensata per i viaggiatori, è più varia rispetto alla maggior parte dei villaggi dell’entroterra: i ristoranti sui tetti servono rice and curry sri-lankese insieme a pizza, pasta e un buon espresso per chi desidera un cambio di ritmo. Le verdure fresche coltivate localmente e il clima più fresco della regione rendono insalate e zuppe davvero apprezzabili qui, a differenza delle pianure più calde.\n\nNon perdetevi una vera tazza di tè durante la visita: diversi caffè servono tè appena raccolto preparato secondo il metodo tradizionale, con un gusto decisamente diverso da quello destinato all’esportazione.',
      },
    ],
    faq: [
      {
        q: 'Vale la pena prendere il treno da Kandy a Ella?',
        a: 'Sì, per la maggior parte dei viaggiatori la linea attraversa piantagioni di tè, gallerie e viadotti con panorami difficili da eguagliare in auto. Prenotate un posto in anticipo in alta stagione, altrimenti preparatevi a viaggiare in piedi o in una carrozza senza prenotazione.',
      },
      {
        q: 'Quanti giorni dedicare a Ella?',
        a: 'Due giornate intere permettono di vedere il ponte dei nove archi, salire a Little Adam’s Peak o Ella Rock e visitare una fabbrica di tè senza fretta. Aggiungete una terza giornata per combinare Ella con le cascate di Diyaluma o un safari mattutino a Yala.',
      },
      {
        q: 'L’escursione a Ella Rock è difficile?',
        a: 'È più impegnativa di Little Adam’s Peak tre-quattro ore andata e ritorno con alcuni tratti scoscesi e non segnalati attraverso piantagioni di tè quindi una guida locale e scarpe adeguate sono consigliate più che opzionali.',
      },
      {
        q: 'Qual è il periodo migliore per visitare Ella?',
        a: 'Gennaio-aprile offre generalmente i cieli più tersi e i sentieri più asciutti, ma l’altitudine di Ella la mantiene più fresca e verde della costa in qualsiasi periodo, con possibili brevi temporali pomeridiani in ogni mese.',
      },
      {
        q: 'Posso visitare Ella e Yala nello stesso viaggio?',
        a: 'Sì Yala si trova a circa due ore da Ella in auto privata, quindi molti itinerari abbinano un safari mattutino a Yala a un pomeriggio a Ella, oppure usano Ella come base per due notti aggiungendo un’escursione di un giorno a Yala.',
      },
    ],
    ctaTitle: 'Organizza il tuo soggiorno a Ella',
    ctaBody: 'I nostri tour privati includono Ella come tappa collinare negli itinerari di più giorni, con il vostro autista-guida che organizza il percorso attorno al treno panoramico, alle visite alle fabbriche di tè e alla luce migliore per il ponte dei nove archi.',
    ctaLabel: 'Costruisci il tuo itinerario a Ella',
    relatedTours: [
      { pageId: 'ellaDay', label: 'Tour di un giorno a Ella' },
      { pageId: 'tour2ey', label: 'Tour di 2 giorni Ella e Yala' },
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parco nazionale di Yala' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Guida al paese del tè in Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Periodo migliore per visitare lo Sri Lanka' },
    ],
  },

  es: {
    h1: 'Ella, Sri Lanka: vistas de montaña, té y el puente de los Nueve Arcos',
    lead: 'Aire fresco de montaña, un valle de plantaciones de té que se extiende en todas direcciones y el sonido del tren azul cruzando un viaducto centenario: Ella es la parada de las tierras altas que hace que los viajeros alarguen su itinerario un día más.',
    heroAlt: 'El puente de los Nueve Arcos rodeado de verdes plantaciones de té cerca de Ella',
    sections: [
      {
        title: 'De puesto colonial de plantaciones a favorita de las tierras altas',
        body: 'Ella creció a la sombra del cultivo de té de la época británica, cuando las laderas circundantes fueron deforestadas y replantadas con las ordenadas hileras siguiendo las curvas del terreno de arbustos de té que aún se ven hoy. El propio pueblo se mantuvo pequeño y tranquilo mucho después de la independencia, conocido principalmente por los plantadores y el tráfico ferroviario que llevaba las cajas de té hacia la costa.\n\nSolo en las últimas dos décadas se convirtió en una parada fija en la ruta viajera, a medida que se difundía la fama de las vistas desde Ella Gap y la proeza de ingeniería del puente de los Nueve Arcos. Lo que antes era un pueblo de una sola calle es hoy un auténtico pueblo de montaña, aunque ha conservado en gran medida su escala relajada y transitable a pie.',
      },
      {
        title: 'Herencia tamil, cingalesa y de plantadores lado a lado',
        body: 'La industria del té que dio forma a Ella también dio forma a su población: muchas familias que trabajan en las plantaciones circundantes tienen raíces en trabajadores tamiles traídos del sur de la India en el siglo XIX, y los templos hindúes (kovils) se encuentran a poca distancia a pie de templos budistas y de una pequeña iglesia anglicana construida para las familias de plantadores.\n\nVisitar una fábrica de té en funcionamientola mayoría ofrece visitas breves e informales— es tanto historia social como agricultura: se observa el mismo proceso de marchitado, enrollado y tostado usado desde la época colonial, gestionado hoy en gran parte por descendientes de los trabajadores originales de las plantaciones.',
      },
      {
        title: 'Qué hacer en Ella',
        body: 'El puente de los Nueve Arcos es la foto de postal que todos vienen a buscar: un viaducto de piedra curvo, sin refuerzo de acero alguno, mejor visto (o mejor aún, cruzado a pie entre trenes) con la luz de la mañana temprana. Little Adam’s Peak es una alternativa más suave a su famoso homónimo: una subida de 45 a 60 minutos recompensada con una vista de 360 grados sobre el valle y las plantaciones de té.\n\nElla Rock es la caminata más exigente de las dos, de tres a cuatro horas en total a través de plantaciones de té en activo; se recomienda un guía local, ya que el sendero cruza terrenos privados y no siempre está claramente señalizado. Las cascadas de Ravana, a un corto trayecto en tuk-tuk, son un complemento sencillo, especialmente después de la lluvia, cuando corren a plena fuerza.',
      },
      {
        title: 'Consejos prácticos para la visita',
        body: 'El trayecto panorámico en tren entre Ella y Kandy (o Ella y Nuwara Eliya) es una de las líneas ferroviarias más fotografiadas de Asia, y los asientos reservados de segunda clase se agotan semanas antes en temporada alta: reserve lo antes posible, o viaje en vehículo privado y detente simplemente donde la vista lo merezca.\n\nElla se encuentra a unos 1.000 metros de altitud, así que las noches son realmente frescas; lleve una chaqueta ligera incluso en temporada seca. Las distancias en el pueblo se recorren fácilmente a pie, pero los caminos hacia Little Adam’s Peak, Ella Rock y los miradores no tienen senderos reales, así que use calzado con buen agarre en lugar de sandalias.',
      },
      {
        title: 'Clima en Ella',
        body: 'El clima de las tierras altas de Ella es notablemente más fresco y verde que el de la costa o el Triángulo Cultural durante todo el año, con los periodos más secos y despejados normalmente entre enero y abril. La niebla suele entrar en el valle por la tarde, lo que da lugar a fotografías preciosas y evocadoras, pero a veces oculta la clásica vista del puente de los Nueve Arcos.\n\nLa lluvia es posible en cualquier mes; conviene llevar un chubasquero ligero sea cual sea la temporada, ya que los chubascos de la tarde pueden llegar con poco aviso a esta altitud.',
      },
      {
        title: 'Atracciones cercanas para combinar',
        body: 'El Parque Nacional de Yala está a unas dos horas en coche al sureste, lo que permite combinar de forma eficiente un safari de madrugada con una tarde en Ella para viajeros con poco tiempo. Nuwara Eliya, la ciudad más alta de Sri Lanka y su región de té más vistosa, está a dos o tres horas por carretera o un trayecto panorámico en tren.\n\nLas cataratas de Diyaluma, entre las más altas del país, y el parque de observación de elefantes de Uda Walawe son accesibles como excursión de medio día o de día completo desde Ella para quienes dispongan de un día adicional.',
      },
      {
        title: 'Dónde alojarse',
        body: 'El alojamiento de Ella está muy orientado a las vistas: muchas casas de huéspedes y hoteles de gama media están construidos en la ladera precisamente para enmarcar Ella Gap o las plantaciones de té circundantes desde la mesa del desayuno. Los viajeros con presupuesto ajustado encuentran buenas opciones en casas familiares en el centro del pueblo, a un paseo de restaurantes y de la estación de tren.\n\nPara una estancia más tranquila, algunos alojamientos se encuentran a un corto trayecto en tuk-tuk del centro, en plantaciones de té en activo, a cambio de algo menos de comodidad pero un entorno auténtico y silencio total por la noche.',
      },
      {
        title: 'Dónde comer en Ella',
        body: 'La oferta gastronómica de Ella, orientada al viajero, es más variada que la de la mayoría de los pueblos de las tierras altas: los restaurantes con terraza sirven rice and curry de Sri Lanka junto con pizza, pasta y buen espresso para quienes buscan un cambio. Las verduras frescas de cultivo local y el clima más fresco de la región hacen que las ensaladas y las sopas valgan realmente la pena aquí, a diferencia de las tierras bajas más calurosas.\n\nNo se pierda una taza de té como es debido mientras esté aquí: varios cafés sirven té recién recolectado preparado de forma tradicional, con un sabor notablemente distinto al que llega a los mercados de exportación.',
      },
    ],
    faq: [
      {
        q: '¿Merece la pena el tren de Kandy a Ella?',
        a: 'Sí, para la mayoría de los viajeros: la línea sube entre plantaciones de té, túneles y viaductos con vistas difíciles de igualar por carretera. Reserve un asiento con antelación en temporada alta, o esté preparado para viajar de pie o en un vagón sin reserva.',
      },
      {
        q: '¿Cuántos días dedicar a Ella?',
        a: 'Dos días completos permiten ver el puente de los Nueve Arcos, subir a Little Adam’s Peak o Ella Rock, y visitar una fábrica de té sin prisas. Añada un tercer día si quiere combinar Ella con las cataratas de Diyaluma o un safari matutino en Yala.',
      },
      {
        q: '¿Es difícil la caminata a Ella Rock?',
        a: 'Es más exigente que Little Adam’s Peak: de tres a cuatro horas en total con algunos tramos empinados y sin señalizar a través de plantaciones de té, por lo que un guía local y calzado adecuado son recomendables, no opcionales.',
      },
      {
        q: '¿Cuál es la mejor época para visitar Ella?',
        a: 'Enero a abril suele traer los cielos más despejados y los senderos más secos, aunque la altitud de Ella la mantiene más fresca y verde que la costa en cualquier época, con posibles chubascos breves por la tarde en cualquier mes.',
      },
      {
        q: '¿Puedo visitar Ella y Yala en el mismo viaje?',
        a: 'Sí: Yala está a unas dos horas de Ella en vehículo privado, por lo que muchos itinerarios combinan un safari matutino en Yala con una tarde en Ella, o usan Ella como base durante dos noches añadiendo una excursión de un día completo a Yala.',
      },
    ],
    ctaTitle: 'Planifique su tiempo en Ella',
    ctaBody: 'Nuestros tours privados incluyen Ella como parada de las tierras altas en itinerarios de varios días, con su chófer-guía organizando la conducción en torno al tren panorámico, las visitas a fábricas de té y la mejor luz para el puente de los Nueve Arcos.',
    ctaLabel: 'Diseñe su itinerario en Ella',
    relatedTours: [
      { pageId: 'ellaDay', label: 'Tour de un día a Ella' },
      { pageId: 'tour2ey', label: 'Tour de 2 días Ella y Yala' },
      { pageId: 'tour5', label: 'Tour de 5 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parque Nacional de Yala' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Guía del país del té de Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Mejor época para visitar Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Ella, Sri Lanka: górskie widoki, herbata i most Dziewięciu Łuków',
    lead: 'Chłodne górskie powietrze, dolina krzewów herbaty rozciągająca się w każdą stronę i odgłos niebieskiego pociągu przejeżdżającego przez stuletni wiadukt – Ella to przystanek w górach, przez który podróżni chętnie wydłużają trasę o dodatkowy dzień.',
    heroAlt: 'Most Dziewięciu Łuków otoczony zielonymi plantacjami herbaty blisko Elli',
    sections: [
      {
        title: 'Od kolonialnej osady plantacyjnej do ulubionego miejsca w górach',
        body: 'Ella wyrosła w cieniu brytyjskiej hodowli herbaty, gdy okoliczne stoki wykarczowano i obsadzono równymi, poziomicowymi rzędami krzewów herbaty widocznymi do dziś. Samo miasteczko długo po odzyskaniu niepodległości pozostawało małe i senne, znane głównie plantatorom i kolei przewożącej skrzynie z herbatą na wybrzeże.\n\nDopiero w ostatnich dwóch dekadach Ella stała się stałym punktem na trasie podróżnych, gdy rozniosła się fama widoku z Ella Gap i inżynieryjnego osiągnięcia w postaci mostu Dziewięciu Łuków. Z jednoulicznej wioski wyrosło prawdziwe górskie miasteczko, które w dużej mierze zachowało swój spokojny, łatwy do zwiedzenia pieszo charakter.',
      },
      {
        title: 'Tamilskie, syngaleskie i plantatorskie dziedzictwo obok siebie',
        body: 'Przemysł herbaciany, który ukształtował Ellę, ukształtował też jej mieszkańców: wiele rodzin pracujących na okolicznych plantacjach wywodzi swoje korzenie od tamilskich robotników przywiezionych z południowych Indii w XIX wieku, a hinduskie świątynie (kowile) stoją w odległości spacerowej od buddyjskich świątyń i niewielkiego anglikańskiego kościoła zbudowanego dla rodzin plantatorów.\n\nWizyta w działającej fabryce herbaty – większość oferuje krótkie, nieformalne zwiedzanie – to tyle samo historia społeczna, co rolnictwo: widać tu ten sam proces zwiędania, zwijania i suszenia stosowany od czasów kolonialnych, prowadzony obecnie w dużej mierze przez potomków pierwotnych plantacyjnych pracowników.',
      },
      {
        title: 'Co robić w Elli',
        body: 'Most Dziewięciu Łuków to widokówkowe ujęcie, po które przyjeżdżają wszyscy – zakrzywiony kamienny wiadukt bez jakiegokolwiek zbrojenia stalowego, najlepiej widoczny (a jeszcze lepiej – przejść nim między pociągami) w świetle wczesnego ranka. Little Adam’s Peak to łagodniejsza alternatywa dla swojego sławnego imiennika: 45–60-minutowe podejście wynagradzane widokiem 360 stopni na dolinę i plantacje herbaty.\n\nElla Rock to trudniejsza z dwóch wędrówek, trzy do czterech godzin w obie strony przez aktywne plantacje herbaty; zalecany lokalny przewodnik, ponieważ szlak przebiega przez tereny plantacji i nie jest zawsze wyraźnie oznaczony. Wodospady Ravana, krótki odcinek tuk-tukiem stąd, to łatwe dodatkowe miejsce, zwłaszcza po deszczu, gdy wodospady płyną z pełną siłą.',
      },
      {
        title: 'Praktyczne wskazówki dla zwiedzających',
        body: 'Widokowa podróż kolejowa między Ellą a Kandy (lub Ellą a Nuwara Eliya) to jedna z najczęściej fotografowanych linii kolejowych w Azji, a zarezerwowane miejsca w drugiej klasie wykupywane są z wyprzedzeniem kilku tygodni w wysokim sezonie – rezerwuj tak wcześnie, jak pozwalają terminy, albo podróżuj prywatnym samochodem i zatrzymuj się tam, gdzie widok tego wymaga.\n\nElla leży na wysokości około 1000 metrów, więc wieczory są naprawdę chłodne; zapakuj lekką kurtkę nawet w sezonie suchym. Odległości w miasteczku są na tyle małe, że da się je przejść pieszo, ale drogi do Little Adam’s Peak, Ella Rock i punktów widokowych nie mają prawdziwych chodników – noś więc buty z dobrą przyczepnością, a nie sandały.',
      },
      {
        title: 'Pogoda w Elli',
        body: 'Górski klimat Elli jest przez cały rok wyraźnie chłodniejszy i bardziej zielony niż na wybrzeżu czy w Trójkącie Kulturowym, przy czym najsuchsze i najbardziej pogodne okresy przypadają zwykle od stycznia do kwietnia. Popołudniami do doliny często wpływa mgła, co daje piękne, nastrojowe zdjęcia, ale czasem zasłania klasyczny widok na most Dziewięciu Łuków.\n\nDeszcz jest możliwy w każdym miesiącu; warto zapakować lekką kurtkę przeciwdeszczową niezależnie od sezonu, gdyż popołudniowe ulewy na tej wysokości mogą przyjść z niewielkim ostrzeżeniem.',
      },
      {
        title: 'Atrakcje w okolicy warte połączenia',
        body: 'Park Narodowy Yala leży około dwóch godzin jazdy na południowy wschód, co pozwala efektywnie połączyć poranne safari z popołudniem w Elli dla podróżnych mających mało czasu. Nuwara Eliya, najwyżej położone miasto Sri Lanki i najbardziej wyraziste krajobrazy herbaciane, znajduje się dwie do trzech godzin drogą lub widokową podróżą kolejową stąd.\n\nWodospady Diyaluma, jedne z najwyższych w kraju, oraz park do obserwacji słoni Uda Walawe są dostępne jako wycieczka na pół dnia lub cały dzień z Elli dla podróżnych mających dodatkowy dzień.',
      },
      {
        title: 'Gdzie się zatrzymać',
        body: 'Zakwaterowanie w Elli jest silnie zorientowane na widok: wiele pensjonatów i hoteli w średniej cenie zbudowano na zboczu specjalnie tak, by kadrować Ella Gap lub okoliczne plantacje herbaty już przy śniadaniowym stole. Podróżni z mniejszym budżetem znajdą dobrze prowadzone rodzinne kwatery prywatne w centrum miasteczka, blisko restauracji i stacji kolejowej.\n\nDla spokojniejszego pobytu kilka obiektów leży krótką jazdę tuk-tukiem od centrum, na terenie działających plantacji herbaty – nieco mniej wygody w zamian za autentyczne otoczenie i całkowitą ciszę nocą.',
      },
      {
        title: 'Gdzie zjeść w Elli',
        body: 'Przyjazna podróżnym scena gastronomiczna Elli jest bardziej zróżnicowana niż w większości górskich miasteczek: restauracje na tarasach serwują lankijskie rice and curry razem z pizzą, makaronem i dobrym espresso dla tych, którzy chcą odmiany. Świeże, lokalnie uprawiane warzywa i chłodniejszy klimat regionu sprawiają, że sałatki i zupy naprawdę warto tu zamawiać, w przeciwieństwie do gorętszych nizin.\n\nNie przegap tu prawdziwej filiżanki herbaty: kilka kawiarni serwuje świeżą herbatę z plantacji przygotowaną tradycyjną metodą, a jej smak wyraźnie różni się od tej trafiającej na rynki eksportowe.',
      },
    ],
    faq: [
      {
        q: 'Czy warto jechać pociągiem z Kandy do Elli?',
        a: 'Dla większości podróżnych tak – trasa wspina się przez plantacje herbaty, tunele i wiadukty z widokami trudnymi do powtórzenia drogą samochodową. W wysokim sezonie zarezerwuj miejsce z dużym wyprzedzeniem, inaczej musisz liczyć się ze staniem lub podróżą w wagonie bez rezerwacji.',
      },
      {
        q: 'Ile dni warto spędzić w Elli?',
        a: 'Dwa pełne dni pozwalają zobaczyć most Dziewięciu Łuków, wejść na Little Adam’s Peak lub Ella Rock i odwiedzić fabrykę herbaty bez pośpiechu. Dodaj trzeci dzień, jeśli chcesz połączyć Ellę z wodospadami Diyaluma lub wczesnym safari w Yali.',
      },
      {
        q: 'Czy wędrówka na Ella Rock jest trudna?',
        a: 'Jest bardziej wymagająca niż Little Adam’s Peak – trzy do czterech godzin w obie strony z pewnymi stromymi, nieoznakowanymi odcinkami przez tereny plantacji herbaty – dlatego lokalny przewodnik i odpowiednie buty są zalecane, a nie opcjonalne.',
      },
      {
        q: 'Jaki jest najlepszy czas na wizytę w Elli?',
        a: 'Styczeń–kwiecień zwykle zapewnia najczystsze niebo i najsuchsze szlaki, choć wysokość Elli utrzymuje ją chłodniejszą i bardziej zieloną niż wybrzeże przez cały rok, a krótkie popołudniowe ulewy są możliwe w każdym miesiącu.',
      },
      {
        q: 'Czy mogę odwiedzić Ellę i Yalę w tej samej podróży?',
        a: 'Tak – Yala leży około dwóch godzin od Elli prywatnym samochodem, dlatego wiele planów łączy poranne safari w Yali z popołudniem w Elli, albo wykorzystuje Ellę jako bazę na dwie noce, dodając całodniową wycieczkę do Yali.',
      },
    ],
    ctaTitle: 'Zaplanuj swój czas w Elli',
    ctaBody: 'Nasze prywatne wycieczki uwzględniają Ellę jako górski przystanek w trasach wielodniowych, a Twój kierowca-przewodnik ustala jazdę wokół widokowej podróży kolejowej, wizyt w fabrykach herbaty i najlepszego światła na most Dziewięciu Łuków.',
    ctaLabel: 'Zbuduj swój plan podróży do Elli',
    relatedTours: [
      { pageId: 'ellaDay', label: 'Jednodniowa wycieczka do Elli' },
      { pageId: 'tour2ey', label: '2-dniowa wycieczka Ella i Yala' },
      { pageId: 'tour5', label: '5-dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Park Narodowy Yala' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Przewodnik po krainie herbaty na Sri Lance' },
      { pageId: 'guideBestTime', label: 'Najlepszy czas na wizytę na Sri Lance' },
    ],
  },

  ru: {
    h1: 'Элла, Шри-Ланка: горные пейзажи, чай и мост Девяти Арок',
    lead: 'Прохладный горный воздух, долина чайных кустов, простирающаяся во все стороны, и звук синего поезда, пересекающего вековой виадук Элла та остановка в горах, из-за которой путешественники продлевают маршрут на лишний день.',
    heroAlt: 'Мост Девяти Арок среди зелёных чайных плантаций возле Эллы',
    sections: [
      {
        title: 'От колониального плантационного посёлка до любимого горного курорта',
        body: 'Элла выросла в тени британского чаеводства, когда окружающие склоны были расчищены от леса и засажены рядами чайных кустов вдоль контуров склона теми же, что видны и сегодня. Сам посёлок долго после обретения независимости оставался маленьким и тихим, известным в основном плантаторам и железнодорожникам, перевозившим ящики с чаем к побережью.\n\nТолько в последние два десятилетия Элла закрепилась в маршрутах путешественников, когда распространилась слава о видах с Ella Gap и инженерном чуде моста Девяти Арок. То, что было деревней с одной улицей, теперь настоящий горный городок, хотя он во многом сохранил свой спокойный, компактный масштаб, удобный для пеших прогулок.',
      },
      {
        title: 'Тамильское, сингальское и плантаторское наследие рядом',
        body: 'Чайная промышленность, сформировавшая Эллу, сформировала и её население: многие семьи, работающие на окружающих плантациях, ведут свои корни от тамильских рабочих, привезённых из Южной Индии в XIX веке, а индуистские храмы (ковилы) находятся в шаговой доступности от буддийских храмов и небольшой англиканской церкви, построенной для семей плантаторов.\n\nПосещение действующей чайной фабрикиольшинство предлагает короткие неформальные экскурсии столько же социальная история, сколько сельское хозяйство: здесь наблюдают тот же процесс завяливания, скручивания и обжарки, что использовался с колониальных времён, теперь в основном ведомый потомками первоначальных плантационных рабочих.',
      },
      {
        title: 'Что посмотреть и сделать в Элле',
        body: 'Мост Девяти Арока самая открыточная фотография, за которой все приезжают: изогнутый каменный виадук без какого-либо стального арматурного каркаса, лучше всего видимый в свете раннего утра (а ещё лучшеройти по нему между поездами). Little Adam’s Peak более мягкая альтернатива своему знаменитому тёзке: подъём на 45–60 минут, вознаграждаемый видом на 360 градусов на долину и чайные плантации.\n\nElla Rock более серьёзный из двух маршрутов, три-четыре часа в обе стороны через действующие чайные плантации; рекомендуется местный гид, поскольку тропа проходит по частной плантационной земле и не всегда чётко размечена. Водопады Равана, короткая поездка на тук-туке отсюда, простое дополнение, особенно после дождя, когда водопады текут в полную силу.',
      },
      {
        title: 'Практические советы для посещения',
        body: 'Живописная железнодорожная поездка между Эллой и Канди (или Эллой и Нувара-Элией) один из самых фотографируемых железнодорожных маршрутов Азии, а забронированные места второго класса раскупаются за недели в высокий сезон бронируйте как можно раньше или путешествуйте на частном автомобиле, останавливаясь там, где вид этого требует.\n\nЭлла расположена на высоте около 1000 метров, поэтому вечера здесь действительно прохладные; берите лёгкую куртку даже в сухой сезон. Расстояния в посёлке невелики и легко проходятся пешком, но дороги к Little Adam’s Peak, Ella Rock и смотровым площадкам не имеют настоящих тротуаров надевайте обувь с хорошим сцеплением, а не сандалии.',
      },
      {
        title: 'Погода в Элле',
        body: 'Горный климат Эллы заметно прохладнее и зеленее побережья или Культурного треугольника в течение всего года, а самые сухие и ясные периоды обычно приходятся на январь–апрель. Днём в долину часто наплывает туман, что создаёт красивые атмосферные фотографии, но иногда скрывает классический вид на мост Девяти Арок.\n\nДождь возможен в любой месяц; лёгкий дождевик стоит взять независимо от сезона, поскольку послеполуденные ливни на этой высоте могут начаться почти без предупреждения.',
      },
      {
        title: 'Что посмотреть в окрестностях',
        body: 'Национальный парк Яла находится примерно в двух часах езды к юго-востоку, что позволяет эффективно совместить раннее утреннее сафари с послеобеденным временем в Элле для путешественников, у которых мало времени. Нувара-Элия, самый высокогорный город Шри-Ланки и самый живописный чайный край, находится в двух-трёх часах езды или в живописной поездке на поезде.\n\nВодопады Диялума, одни из самых высоких в стране, и парк для наблюдения за слонами Уда-Валаве доступны как экскурсия на полдня или на целый день из Эллы для тех, у кого есть лишний день.',
      },
      {
        title: 'Где остановиться',
        body: 'Жильё в Элле сильно ориентировано на виды: многие гостевые дома и отели среднего класса построены на склоне специально для того, чтобы Ella Gap или окружающие чайные плантации были видны прямо со стола для завтрака. Путешественникам с ограниченным бюджетом хорошо подойдут семейные гостевые дома в центре посёлка, недалеко от ресторанов и железнодорожной станции.\n\nДля более спокойного отдыха несколько объектов находятся в короткой поездке на тук-туке от центра, на территории действующих чайных плантаций немного меньше удобств в обмен на подлинную атмосферу плантации и полную тишину по ночам.',
      },
      {
        title: 'Где поесть в Элле',
        body: 'Ориентированная на путешественников гастрономическая сцена Эллы разнообразнее, чем в большинстве горных посёлков: рестораны на крышах подают шри-ланкийский rice and curry вместе с пиццей, пастой и хорошим эспрессо для тех, кто хочет разнообразия. Свежие местные овощи и более прохладный климат региона делают салаты и супы здесь действительно стоящими заказа, в отличие от более жарких низменностей.\n\nНе пропустите здесь по-настоящему хорошую чашку чая: в нескольких кафе подают свежий чай прямо с плантации, приготовленный традиционным способом, и на вкус он заметно отличается от того, что идёт на экспорт.',
      },
    ],
    faq: [
      {
        q: 'Стоит ли ехать на поезде из Канди в Эллу?',
        a: 'Да, для большинства путешественников линия поднимается через чайные плантации, тоннели и виадуки с видами, которые сложно повторить на машине. В высокий сезон бронируйте место заранее, иначе придётся ехать стоя или в вагоне без брони.',
      },
      {
        q: 'Сколько дней стоит провести в Элле?',
        a: 'Двух полных дней достаточно, чтобы увидеть мост Девяти Арок, подняться на Little Adam’s Peak или Ella Rock и посетить чайную фабрику без спешки. Добавьте третий день, если хотите совместить Эллу с водопадами Диялума или ранним сафари в Яле.',
      },
      {
        q: 'Сложен ли подъём на Ella Rock?',
        a: 'Он более требовательный, чем Little Adam’s Peak три-четыре часа в обе стороны с крутыми, немаркированными участками через чайные плантации, поэтому местный гид и подходящая обувь скорее необходимы, чем желательны.',
      },
      {
        q: 'Какое лучшее время для посещения Эллы?',
        a: 'Январь–апрель обычно даёт самое чистое небо и самые сухие тропы, но высота Эллы делает её прохладнее и зеленее побережья в любое время года, а короткие послеполуденные ливни возможны в любой месяц.',
      },
      {
        q: 'Можно ли посетить Эллу и Ялу в одной поездке?',
        a: 'Да Яла находится примерно в двух часах от Эллы на частном автомобиле, поэтому многие маршруты сочетают утреннее сафари в Яле с послеобеденным временем в Элле, либо используют Эллу как базу на две ночи, добавляя полнодневную экскурсию в Ялу.',
      },
    ],
    ctaTitle: 'Спланируйте время в Элле',
    ctaBody: 'Наши частные туры включают Эллу как горную остановку в многодневных маршрутах водитель-гид подстраивает поездку под живописный поезд, посещение чайных фабрик и лучший свет для моста Девяти Арок.',
    ctaLabel: 'Составить маршрут по Элле',
    relatedTours: [
      { pageId: 'ellaDay', label: 'Однодневный тур в Эллу' },
      { pageId: 'tour2ey', label: '2-дневный тур Элла и Яла' },
      { pageId: 'tour5', label: '5-дневный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Национальный парк Яла' },
      { pageId: 'destKandy', label: 'Канди' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Гид по чайному краю Шри-Ланки' },
      { pageId: 'guideBestTime', label: 'Лучшее время для поездки в Шри-Ланку' },
    ],
  },
};
