import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka food guide (pageId: guideFood).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const FOOD_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Food Guide: What to Eat, Where to Try It and How to Order',
    lead: 'Sri Lankan cuisine is built around rice, coconut, spice and the sea from a simple rice and curry lunch to late night kottu on a Colombo street corner. Knowing a few dishes, how heat is handled and where hygiene matters most helps you eat confidently without missing the island’s best flavours.',
    heroImage: 'assets/img/5daysTours/9.webp',
    heroAlt: 'Colourful Sri Lankan rice and curry spread with sambols and side dishes',
    sections: [
      {
        id: 'riceAndCurry',
        title: 'Rice and curry: the meal that defines the island',
        body: 'The everyday Sri Lankan meal is a mound of rice surrounded by several curries dhal, jackfruit, beetroot, fish or chicken plus sambols, papadam and sometimes a mallung of lightly stir fried greens. Portions are generous and meant to be shared; a “rice and curry” lunch at a local restaurant or guesthouse is often the best value and most authentic introduction.\n\nCurries vary sharply by region: coconut milk is heavier in the south, while the hill country and Kandy area lean toward drier, spicier preparations. Ask for a “small portion” if you want to sample without over ordering, and expect the table to refill rice once without charge at many family run places.',
      },
      {
        id: 'hoppersAndShortEats',
        title: 'Hoppers, string hoppers and short eats',
        body: 'Appa (hoppers) are bowl shaped pancakes made from fermented rice batter, crisp at the edges and soft in the centre; egg hoppers add a runny yolk at the bottom and are a classic breakfast or light dinner. String hoppers steamed nests of rice noodles arrive with a mild coconut sambol and curry, especially popular in the morning.\n\nShort eats are the island’s answer to snacks: vegetable roti, fish buns (maalu paan), cutlets and vada sold from glass cases at bakeries and train stations. They are inexpensive and filling, though quality varies look for busy counters with high turnover rather than items sitting for hours.',
      },
      {
        id: 'kottuAndStreetFood',
        title: 'Kottu, roti and street food rhythm',
        body: 'Kottu roti is Sri Lanka’s signature street dish: chopped godamba roti tossed on a hot griddle with vegetables, egg, chicken or cheese, rhythmically shredded with metal blades you will hear it before you see it. It is best eaten fresh, late afternoon through evening, at dedicated kottu shops rather than generic tourist buffets.\n\nOther street staples include isso wade (lentil fritters topped with prawns), achcharu (pickled fruit) and corn roasted over charcoal. Hygiene improves when you choose stalls with a steady queue of locals, visible cooking and food prepared to order rather than pre plated in the heat.',
      },
      {
        id: 'coastalSeafood',
        title: 'Seafood on the coasts: Galle, Mirissa and beyond',
        body: 'The south and west coasts excel at fresh fish, prawns, crab and lobster often simply grilled with lime, chilli and garlic butter at beachside shacks in Unawatuna, Mirissa and Tangalle. Galle Fort’s restaurants blend Sri Lankan spice with international technique; prices rise inside the fort walls but quality is generally reliable.\n\nAlways confirm whether seafood is priced per kilo or per portion before ordering whole fish or crab a common source of bill shock. Lagoon crab from Negombo and jumbo prawns from the east coast are seasonal highlights worth asking your driver about when dates align.',
      },
      {
        id: 'spiceVegetarian',
        title: 'Spice levels, vegetarian eating and allergies',
        body: 'Sri Lankan food can be fiercely hot, but heat is usually layered through sambols and curries rather than hidden everywhere you can ask for “less chilli” (podi miris) or eat around the sambol. Coconut milk often softens spice in southern curries; hill country versions may feel sharper.\n\nVegetarian and vegan options are widespread thanks to Buddhist traditions: dhal, jackfruit curry, gotu kola mallung and vegetable roti are reliably meat free. Temple towns and Ayurveda retreats often serve fully vegetarian meals. Nut allergies are less commonly accommodated in kitchens mention them clearly, and carry medication if severe.',
      },
      {
        id: 'drinksAndHygiene',
        title: 'What to drink and practical hygiene tips',
        body: 'King coconut (thambili) sold from roadside stalls is a safe, refreshing choice when the vendor cuts it fresh in front of you. Ceylon tea needs no introduction drink it plain, with milk or as iced tea in the heat. Lion beer and arrack (coconut spirit) are local staples; bottled water should be your default for drinking and brushing teeth outside upscale hotels.\n\nEat cooked food hot where possible, peel fruit yourself and use hand sanitiser before short eats. Upscale hotels and established restaurants in tourist towns generally meet international hygiene standards; on long driving days, your chauffeur guide often knows dependable lunch stops that balance authenticity with cleanliness.',
      },
    ],
    faq: [
      {
        q: 'Is street food safe to eat in Sri Lanka?',
        a: 'Often yes, if you choose busy stalls with high turnover, food cooked to order and sealed bottled drinks. Avoid pre cut fruit sitting in the sun and unrefrigerated seafood. Many travellers mix street snacks with sit down rice and curry lunches at reputable local restaurants.',
      },
      {
        q: 'How spicy is Sri Lankan food for Western visitors?',
        a: 'It can be very hot, especially sambols and certain fish curries, but restaurants can usually reduce chilli on request. Coconut based curries in the south tend to be milder; start with dhal and vegetable curries if you are sensitive to heat.',
      },
      {
        q: 'Can vegetarians eat well in Sri Lanka?',
        a: 'Yes Buddhist dining culture means most kitchens offer multiple vegetable curries, dhal, hoppers and roti without meat. Confirm that dishes are cooked without fish or shrimp paste (Maldive fish) if you are strictly vegetarian.',
      },
      {
        q: 'What should I definitely try on a first visit?',
        a: 'A full rice and curry lunch, egg hopper with sambol, kottu roti after dark and fresh grilled fish on the south coast cover the essentials. Add a king coconut and a cup of Ceylon tea at a plantation stop in the hill country.',
      },
      {
        q: 'Is tap water safe in Sri Lanka?',
        a: 'No stick to sealed bottled or filtered water for drinking and tooth brushing outside trusted hotels. Ice in established restaurants and hotels is usually fine; be cautious with ice from unknown street vendors.',
      },
    ],
    ctaTitle: 'Taste the island on a private round tour',
    ctaBody: 'Our chauffeur guided itineraries build in trusted local lunch stops, coastal seafood evenings and hill country tea breaks tell us your dietary preferences when you request a quote.',
    ctaLabel: 'Plan a food friendly itinerary',
    relatedTours: [
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
      { pageId: 'tour8', label: '8 Day Sri Lanka Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBudget', label: 'Sri Lanka Budget Travel Guide' },
      { pageId: 'guideBeaches', label: 'Sri Lanka Beaches Guide' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packing Guide' },
    ],
  },

  de: {
    h1: 'Sri Lanka Kulinarik Ratgeber: Was man isst, wo man probiert und wie man bestellt',
    lead: 'Die srilankische Kuche baut auf Reis, Kokosnuss, Gewurzen und dem Meer auf vom einfachen Rice and Curry Mittagessen bis zum nachtlichen Kottu an einer Strassenecke in Colombo. Wer einige Gerichte kennt, weiss, wie Scharfe gehandhabt wird und wo Hygiene am meisten zahlt, isst selbstbewusst, ohne die besten Aromen der Insel zu verpassen.',
    heroAlt: 'Buntes srilankisches Rice and Curry mit Sambols und Beilagen',
    sections: [
      {
        title: 'Rice and Curry: die Mahlzeit, die die Insel pragt',
        body: 'Die alltagliche srilankische Mahlzeit ist ein Hugel Reis, umgeben von mehreren Currys Dhal, Jackfrucht, Rote Bete, Fisch oder Huhn plus Sambols, Papadam und manchmal Mallung aus leicht angebratenem Grunzeug. Portionen sind grosszugig und zum Teilen gedacht; ein Rice and Curry Mittagessen in einem lokalen Restaurant oder Gastehaus ist oft der beste Einstieg zu Preis und Authentizitat.\n\nCurrys variieren stark nach Region: Kokosmilch dominiert im Suden, wahrend Bergland und Kandy eher trockenere, scharfere Zubereitungen bevorzugen. Fragen Sie nach einer „kleinen Portion“, wenn Sie probieren mochten, und rechnen Sie in vielen Familienbetrieben damit, dass Reis einmal kostenlos nachgefullt wird.',
      },
      {
        title: 'Hoppers, String Hoppers und Short Eats',
        body: 'Appa (Hoppers) sind schalenformige Pfannkuchen aus fermentiertem Reisteig, aussen knusprig und innen weich; Egg Hoppers mit flussigem Dotter sind klassisches Fruhstuck oder leichtes Abendessen. String Hoppers gedampfte Reisnudelnester kommen mit mildem Kokos Sambol und Curry, besonders morgens beliebt.\n\nShort Eats sind die Snack Kultur der Insel: Gemuseroti, Fischbrotchen (Maalu Paan), Cutlets und Vada aus Glasvitrinen in Backereien und Bahnhofen. Sie sind gunstig und sattigend, die Qualitat schwankt wahlen Sie belebte Theken mit hohem Umschlag statt Ware, die stundenlang liegt.',
      },
      {
        title: 'Kottu, Roti und der Rhythmus des Street Food',
        body: 'Kottu Roti ist Sri Lankas Strassengericht schlechthin: gehacktes Godamba Roti auf der heissen Platte mit Gemuse, Ei, Huhn oder Kase, rhythmisch mit Metallklingen zerkleinert man hort es, bevor man es sieht. Am besten frisch am spaten Nachmittag und Abend in spezialisierten Kottu Laden, nicht an generischen Touristenbuffets.\n\nWeitere Strassenklassiker sind Isso Wade (Linsenfrikadellen mit Garnelen), Achcharu (eingelegtes Obst) und uber Holzkohle gerosteter Mais. Hygiene ist besser bei Standen mit lokaler Schlange, sichtbarem Kochen und Zubereitung auf Bestellung statt vorgelegter Ware in der Hitze.',
      },
      {
        title: 'Meeresfruchte an den Kusten: Galle, Mirissa und daruber hinaus',
        body: 'Sud und Westkuste glanzen mit frischem Fisch, Garnelen, Krabben und Hummer oft einfach gegrillt mit Limette, Chili und Knoblauchbutter in Strandhutten in Unawatuna, Mirissa und Tangalle. Restaurants in Galle Fort verbinden srilankische Gewurze mit internationaler Technik; Preise steigen innerhalb der Festungsmauern, die Qualitat ist meist zuverlassig.\n\nKlaren Sie vor Bestellung, ob Meeresfruchte pro Kilo oder pro Portion berechnet werden eine haufige Quelle fur Rechnungsschock. Lagunenkrebs aus Negombo und Riesengarnelen von der Ostkuste sind saisonale Highlights, nach denen Sie Ihren Fahrer fragen konnen.',
      },
      {
        title: 'Scharfe, vegetarisches Essen und Allergien',
        body: 'Srilankisches Essen kann sehr scharf sein, doch die Hitze steckt meist in Sambols und Currys, nicht uberall versteckt Sie konnen um „weniger Chili“ (Podi Miris) bitten oder den Sambol meiden. Kokosmilch mildert im Suden oft die Scharfe; Bergland Versionen wirken scharfer.\n\nVegetarische und vegane Optionen sind dank buddhistischer Tradition weit verbreitet: Dhal, Jackfrucht Curry, Gotu Kola Mallung und Gemuseroti sind zuverlassig fleischfrei. In Tempelstadten und Ayurveda Retreats gibt es oft vollstandig vegetarische Mahlzeiten. Nussallergien werden seltener berucksichtigt deutlich erwahnen und bei schweren Fallen Medikamente mitfuhren.',
      },
      {
        title: 'Getranke und praktische Hygienetipps',
        body: 'King Coconut (Thambili) von Strassenstanden ist eine sichere, erfrischende Wahl, wenn der Verkaufer sie frisch vor Ihnen offnet. Ceylon Tee braucht keine Vorstellung pur, mit Milch oder als Eistee in der Hitze. Lion Beer und Arrack (Kokosbrand) sind lokale Klassiker; Flaschenwasser sollte ausserhalb gehobener Hotels Standard zum Trinken und Zahneputzen sein.\n\nEssen Sie gekochtes Essen moglichst heiss, schalen Sie Obst selbst und nutzen Sie Handedesinfektionsmittel vor Short Eats. Gehobene Hotels und etablierte Restaurants in Touristenorten entsprechen meist internationalen Hygienestandards; an langen Fahrtagen kennt Ihr Fahrer Guide oft verlassliche Mittagsstopps zwischen Authentizitat und Sauberkeit.',
      },
    ],
    faq: [
      {
        q: 'Ist Street Food in Sri Lanka sicher?',
        a: 'Oft ja, wenn Sie belebte Stande mit hohem Umschlag, frisch zubereitetes Essen und verschlossene Getranke wahlen. Vermeiden Sie vorgeschnittenes Obst in der Sonne und nicht gekuhlte Meeresfruchte. Viele Reisende mischen Strassensnacks mit Rice and Curry Mittagessen in seriosen lokalen Restaurants.',
      },
      {
        q: 'Wie scharf ist srilankisches Essen fur westliche Besucher?',
        a: 'Es kann sehr scharf sein, besonders Sambols und bestimmte Fischcurrys, aber Restaurants reduzieren Chili meist auf Wunsch. Kokosbasierte Currys im Suden sind oft milder; beginnen Sie mit Dhal und Gemusecurrys, wenn Sie empfindlich sind.',
      },
      {
        q: 'Konnen Vegetarier gut essen?',
        a: 'Ja die buddhistische Esskultur bedeutet mehrere Gemusecurrys, Dhal, Hoppers und Roti ohne Fleisch in den meisten Kuchen. Fragen Sie nach, ob ohne Fisch- oder Garnelenpaste (Maldive Fish) gekocht wird, wenn Sie streng vegetarisch sind.',
      },
      {
        q: 'Was sollte man beim ersten Besuch unbedingt probieren?',
        a: 'Ein vollstandiges Rice and Curry Mittagessen, Egg Hopper mit Sambol, Kottu Roti nach Einbruch der Dunkelheit und frisch gegrillter Fisch an der Sudkuste decken das Wesentliche ab. Erganzen Sie King Coconut und Ceylon Tee an einer Teeplantage im Bergland.',
      },
      {
        q: 'Ist Leitungswasser in Sri Lanka sicher?',
        a: 'Nein verwenden Sie verschlossenes Flaschen- oder gefiltertes Wasser zum Trinken und Zahneputzen ausserhalb vertrauenswurdiger Hotels. Eis in etablierten Restaurants und Hotels ist meist in Ordnung; seien Sie vorsichtig bei unbekannten Strassenverkaufern.',
      },
    ],
    ctaTitle: 'Probieren Sie die Insel auf einer privaten Rundreise',
    ctaBody: 'Unsere Rundreisen mit Fahrer integrieren verlassliche lokale Mittagsstopps, Meeresfruchte Abende an der Kuste und Tee Pausen im Bergland nennen Sie uns Ihre Ernahrungswunsche bei der Anfrage.',
    ctaLabel: 'Kulinarische Route planen',
    relatedTours: [
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBudget', label: 'Sri Lanka Budgetreise Ratgeber' },
      { pageId: 'guideBeaches', label: 'Sri Lanka Strande Ratgeber' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide gastronomique du Sri Lanka : quoi manger, ou gouter et comment commander',
    lead: 'La cuisine sri lankaise repose sur le riz, la noix de coco, les epices et la mer du simple dejeuner rice and curry au kottu tardif dans une rue de Colombo. Connaitre quelques plats, la gestion du piquant et les endroits ou l’hygiene compte le plus permet de manger en confiance sans manquer les meilleures saveurs de l’ile.',
    heroAlt: 'Plateau colore de rice and curry sri lankais avec sambols et accompagnements',
    sections: [
      {
        title: 'Rice and curry : le repas qui definit l’ile',
        body: 'Le repas quotidien sri lankais est un monticule de riz entoure de plusieurs currys lentilles, jacquier, betterave, poisson ou poulet plus sambols, papadam et parfois un mallung de legumes verts legerement sautes. Les portions sont genereuses et faites pour etre partagees ; un dejeuner rice and curry dans un restaurant local ou une maison d’hotes est souvent la meilleure introduction au rapport qualite authenticite.\n\nLes currys varient fortement selon les regions : la lait de coco domine au sud, tandis que les hautes terres et Kandy privilegient des preparations plus seches et plus epicees. Demandez une « petite portion » pour gouter sans surcommander, et attendez vous a ce que le riz soit resservi une fois sans frais dans de nombreuses maisons familiales.',
      },
      {
        title: 'Hoppers, string hoppers et short eats',
        body: 'Les appa (hoppers) sont des crepes en forme de bol a base de pate de riz fermentee, croustillantes sur les bords et moelleuses au centre ; les egg hoppers ajoutent un jaune coulant au fond et sont un classique du petit dejeuner ou d’un diner leger. Les string hoppers nids de nouilles de riz vapeur arrivent avec un sambol de coco doux et un curry, surtout le matin.\n\nLes short eats sont la reponse de l’ile aux en cas : roti aux legumes, pains au poisson (maalu paan), cutlets et vada vendus dans des vitrines de boulangeries et gares. Ils sont bon marche et rassasiants, mais la qualite varie choisissez des comptoirs animes a fort renouvellement plutot que des produits restes des heures.',
      },
      {
        title: 'Kottu, roti et le rythme de la street food',
        body: 'Le kottu roti est le plat de rue emblematique du Sri Lanka : godamba roti hache sur une plaque chaude avec legumes, oeuf, poulet ou fromage, rythmiquement dechiquete a la lame on l’entend avant de le voir. Mieux vaut le manger frais, de fin d’apres midi au soir, dans des echoppes specialisees plutot que des buffets touristiques generiques.\n\nAutres incontournables de rue : isso wade (beignets de lentilles garnis de crevettes), achcharu (fruits marines) et mais grille au charbon. L’hygiene s’ameliore avec les stands ou la file d’attente locale est constante, la cuisson visible et la preparation a la commande plutot que des assiettes preparees sous la chaleur.',
      },
      {
        title: 'Fruits de mer sur les cotes : Galle, Mirissa et au dela',
        body: 'Les cotes sud et ouest excellent en poisson frais, crevettes, crabe et homard souvent simplement grilles au citron vert, piment et beurre a l’ail dans des cabanes de plage a Unawatuna, Mirissa et Tangalle. Les restaurants du fort de Galle melent epices sri lankaises et technique internationale ; les prix montent a l’interieur des remparts, mais la qualite est generalement fiable.\n\nConfirmez toujours si les fruits de mer sont factures au kilo ou a la portion avant de commander un poisson entier ou un crabe source frequente de mauvaise surprise. Le crabe de lagune de Negombo et les crevettes geantes de la cote est sont des highlights saisonniers a demander a votre chauffeur.',
      },
      {
        title: 'Niveau de piquant, cuisine vegetarienne et allergies',
        body: 'La cuisine sri lankaise peut etre tres piquante, mais le feu se concentre surtout dans les sambols et currys plutot que partout vous pouvez demander « moins de piment » (pod miris) ou eviter le sambol. Le lait de coco adoucit souvent le piquant au sud ; les versions des hautes terres peuvent sembler plus vives.\n\nOptions vegetariennes et veganes tres repandues grace aux traditions bouddhistes : dhal, curry de jacquier, mallung de gotu kola et roti aux legumes sont fiables sans viande. Les villes de temples et retraites ayurvediques servent souvent des repas entierement vegetariens. Les allergies aux noix sont moins couramment prises en compte signalez les clairement et gardez vos medicaments si besoin.',
      },
      {
        title: 'Boissons et conseils d’hygiene pratiques',
        body: 'La king coconut (thambili) vendue au bord des routes est un choix sur et rafraichissant lorsque le vendeur l’ouvre devant vous. Le the de Ceylan se boit nature, au lait ou en the glace sous la chaleur. Lion beer et arrack (eau de vie de coco) sont des classiques locaux ; l’eau en bouteille doit etre votre reflexe pour boire et vous brosser les dents hors hotels haut de gamme.\n\nMangez les plats cuits bien chauds si possible, epluchez les fruits vous meme et utilisez du gel hydroalcoolique avant les short eats. Hotels haut de gamme et restaurants etablis dans les zones touristiques respectent generalement les normes internationales ; lors des longues journees de route, votre chauffeur guide connait souvent des arrets dejeuner fiables entre authenticite et proprete.',
      },
    ],
    faq: [
      {
        q: 'La street food est elle sure au Sri Lanka ?',
        a: 'Souvent oui, si vous choisissez des stands animes a fort renouvellement, une cuisine a la commande et des boissons scellees. Evitez les fruits pre coupes au soleil et les fruits de mer non refrigeres. Beaucoup de voyageurs alternent snacks de rue et dejeuners rice and curry dans des restaurants locaux serieux.',
      },
      {
        q: 'Quel est le niveau de piquant pour les visiteurs occidentaux ?',
        a: 'Il peut etre tres fort, surtout les sambols et certains currys de poisson, mais les restaurants reduisent generalement le piment sur demande. Les currys au coco au sud tendent a etre plus doux ; commencez par dhal et currys de legumes si vous etes sensible.',
      },
      {
        q: 'Les vegetariens mangent ils bien au Sri Lanka ?',
        a: 'Oui la culture bouddhiste implique plusieurs currys de legumes, dhal, hoppers et roti sans viande dans la plupart des cuisines. Verifiez l’absence de pate de poisson ou crevettes (Maldive fish) si vous etes strictement vegetarien.',
      },
      {
        q: 'Que faut il absolument gouter lors d’une premiere visite ?',
        a: 'Un dejeuner rice and curry complet, un egg hopper avec sambol, un kottu roti apres la tombee de la nuit et du poisson grille frais sur la cote sud couvrent l’essentiel. Ajoutez une king coconut et une tasse de the de Ceylan dans une plantation des hautes terres.',
      },
      {
        q: 'L’eau du robinet est elle potable au Sri Lanka ?',
        a: 'Non utilisez de l’eau en bouteille scellee ou filtree pour boire et vous brosser les dents hors hotels de confiance. La glace dans les restaurants et hotels etablis est generalement acceptable ; soyez prudent avec la glace de vendeurs de rue inconnus.',
      },
    ],
    ctaTitle: 'Goutez l’ile lors d’un circuit prive',
    ctaBody: 'Nos itineraires avec chauffeur integrent des arrets dejeuner locaux fiables, des soirees fruits de mer sur la cote et des pauses the dans les hautes terres indiquez nous vos preferences alimentaires lors de votre demande de devis.',
    ctaLabel: 'Planifier un itineraire gourmand',
    relatedTours: [
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
      { pageId: 'tour8', label: 'Circuit de 8 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBudget', label: 'Guide budget Sri Lanka' },
      { pageId: 'guideBeaches', label: 'Guide des plages du Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guide des bagages pour le Sri Lanka' },
    ],
  },

  it: {
    h1: 'Guida gastronomica dello Sri Lanka: cosa mangiare, dove assaggiare e come ordinare',
    lead: 'La cucina sri lankese si fonda su riso, cocco, spezie e mare da un semplice pranzo rice and curry al kottu notturno in un angolo di strada a Colombo. Conoscere alcuni piatti, come si gestisce il piccante e dove l’igiene conta di piu aiuta a mangiare con sicurezza senza perdere i migliori sapori dell’isola.',
    heroAlt: 'Colorato piatto di rice and curry sri lankese con sambol e contorni',
    sections: [
      {
        title: 'Rice and curry: il pasto che definisce l’isola',
        body: 'Il pasto quotidiano sri lankese e un mucchio di riso circondato da diversi curry dhal, jackfruit, barbabietola, pesce o pollo piu sambol, papadam e talvolta mallung di verdure saltate leggermente. Le porzioni sono generose e pensate per essere condivise; un pranzo rice and curry in un ristorante locale o guest house e spesso la migliore introduzione per valore e autenticita.\n\nI curry variano molto per regione: il latte di cocco domina al sud, mentre l’entroterra collinare e Kandy preferiscono preparazioni piu secche e piccanti. Chiedete una “porzione piccola” per assaggiare senza ordinare troppo, e aspettatevi che il riso venga riempito una volta gratuitamente in molte trattorie familiari.',
      },
      {
        title: 'Hoppers, string hoppers e short eats',
        body: 'Gli appa (hoppers) sono pancake a ciotola di pastella di riso fermentato, croccanti ai bordi e morbidi al centro; gli egg hoppers aggiungono un tuorlo colato sul fondo e sono un classico della colazione o di una cena leggera. Gli string hoppers nidi di noodles di riso al vapore arrivano con un sambol di cocco delicato e curry, soprattutto la mattina.\n\nGli short eats sono la risposta dell’isola agli spuntini: roti di verdure, panini al pesce (maalu paan), cutlet e vada venduti in vetrine di panetterie e stazioni. Sono economici e sazianti, ma la qualita varia scegliete banconi affollati con alto ricambio piuttosto che prodotti fermi da ore.',
      },
      {
        title: 'Kottu, roti e il ritmo dello street food',
        body: 'Il kottu roti e il piatto di strada simbolo dello Sri Lanka: godamba roti tritato su una piastra calda con verdure, uovo, pollo o formaggio, ritmicamente sminuzzato con lame di metallo lo sentite prima di vederlo. Meglio mangiarlo fresco, dal tardo pomeriggio alla sera, in botteghe specializzate piuttosto che in buffet turistici generici.\n\nAltri classici di strada: isso wade (frittelle di lenticchie con gamberi), achcharu (frutta sottaceto) e mais arrostito sul carbone. L’igiene migliora con bancarelle con fila di locali, cottura visibile e preparazione all’ordine invece di piatti pronti al caldo.',
      },
      {
        title: 'Frutti di mare sulle coste: Galle, Mirissa e oltre',
        body: 'Le coste sud e ovest eccellono in pesce fresco, gamberi, granchio e aragosta spesso semplicemente grigliati con lime, peperoncino e burro all’aglio in capanne sulla spiaggia a Unawatuna, Mirissa e Tangalle. I ristoranti di Galle Fort uniscono spezie sri lankesi e tecnica internazionale; i prezzi salgono dentro le mura, ma la qualita e generalmente affidabile.\n\nConfermate sempre se i frutti di mare sono prezzati al chilo o a porzione prima di ordinare pesce intero o granchio fonte comune di shock in conto. Granchio di laguna da Negombo e gamberi giganti dalla costa orientale sono highlight stagionali da chiedere al vostro autista.',
      },
      {
        title: 'Livello di piccante, cucina vegetariana e allergie',
        body: 'Il cibo sri lankese puo essere molto piccante, ma il fuoco sta soprattutto in sambol e curry piuttosto che ovunque potete chiedere “meno peperoncino” (pod miris) o evitare il sambol. Il latte di cocco spesso ammorbidisce il piccante nei curry meridionali; le versioni dell’entroterra collinare possono sembrare piu intense.\n\nOpzioni vegetariane e vegane diffuse grazie alle tradizioni buddhiste: dhal, curry di jackfruit, mallung di gotu kola e roti di verdure sono affidabilmente senza carne. Citta dei templi e retreat ayurvedici servono spesso pasti interamente vegetariani. Le allergie alle noci sono meno comuni in cucina segnalatele chiaramente e portate i farmaci se gravi.',
      },
      {
        title: 'Bevande e consigli pratici sull’igiene',
        body: 'La king coconut (thambili) venduta ai bordi strada e una scelta sicura e rinfrescante quando il venditore la apre davanti a voi. Il te di Ceylon non ha bisogno di presentazioni naturale, con latte o freddo sotto il caldo. Lion beer e arrack (distillato di cocco) sono classici locali; l’acqua in bottiglia dovrebbe essere il default per bere e lavarsi i denti fuori dagli hotel di lusso.\n\nMangiate cibo cotto caldo quando possibile, sbucciate la frutta da soli e usate disinfettante prima degli short eats. Hotel di lusso e ristoranti consolidati nelle zone turistiche rispettano generalmente standard igienici internazionali; nelle lunghe giornate in auto, il vostro autista guida conosce spesso fermate pranzo affidabili tra autenticita e pulizia.',
      },
    ],
    faq: [
      {
        q: 'Lo street food e sicuro in Sri Lanka?',
        a: 'Spesso si, se scegliete bancarelle affollate con alto ricambio, cibo cucinato all’ordine e bevande sigillate. Evitate frutta gia tagliata al sole e frutti di mare non refrigerati. Molti viaggiatori alternano snack di strada e pranzi rice and curry in ristoranti locali seri.',
      },
      {
        q: 'Quanto e piccante il cibo sri lankese per visitatori occidentali?',
        a: 'Puo essere molto piccante, soprattutto sambol e certi curry di pesce, ma i ristoranti di solito riducono il peperoncino su richiesta. I curry al cocco al sud tendono a essere piu miti; iniziate con dhal e curry di verdure se siete sensibili.',
      },
      {
        q: 'I vegetariani mangiano bene in Sri Lanka?',
        a: 'Si la cultura buddhista significa piu curry di verdure, dhal, hoppers e roti senza carne nella maggior parte delle cucine. Verificate che non ci sia pasta di pesce o gamberi (Maldive fish) se siete rigorosamente vegetariani.',
      },
      {
        q: 'Cosa assaggiare assolutamente al primo viaggio?',
        a: 'Un pranzo rice and curry completo, un egg hopper con sambol, kottu roti dopo il tramonto e pesce grigliato fresco sulla costa sud coprono l’essenziale. Aggiungete king coconut e una tazza di te di Ceylon in una piantagione dell’entroterra collinare.',
      },
      {
        q: 'L’acqua del rubinetto e potabile in Sri Lanka?',
        a: 'No usate acqua in bottiglia sigillata o filtrata per bere e lavarvi i denti fuori dagli hotel affidabili. Il ghiaccio in ristoranti e hotel consolidati di solito va bene; siate cauti con il ghiaccio di venditori di strada sconosciuti.',
      },
    ],
    ctaTitle: 'Assaggiate l’isola con un tour privato',
    ctaBody: 'I nostri itinerari con autista includono fermate pranzo locali affidabili, serate di frutti di mare sulla costa e pause te nell’entroterra collinare indicate le vostre preferenze alimentari quando richiedete un preventivo.',
    ctaLabel: 'Pianifica un itinerario gastronomico',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
      { pageId: 'tour8', label: 'Tour di 8 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBudget', label: 'Guida budget Sri Lanka' },
      { pageId: 'guideBeaches', label: 'Guida alle spiagge dello Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guida ai bagagli per lo Sri Lanka' },
    ],
  },

  es: {
    h1: 'Guia gastronomica de Sri Lanka: que comer, donde probarlo y como pedir',
    lead: 'La cocina de Sri Lanka se basa en arroz, coco, especias y mar desde un sencillo almuerzo rice and curry hasta un kottu nocturno en una esquina de Colombo. Conocer algunos platos, como se maneja el picante y donde importa mas la higiene ayuda a comer con confianza sin perderse los mejores sabores de la isla.',
    heroAlt: 'Colorido plato de rice and curry sri lankes con sambols y guarniciones',
    sections: [
      {
        title: 'Rice and curry: la comida que define la isla',
        body: 'La comida cotidiana sri lankesa es un monticulo de arroz rodeado de varios currys dhal, yaca, remolacha, pescado o pollo mas sambols, papadam y a veces mallung de verduras salteadas. Las raciones son generosas y pensadas para compartir; un almuerzo rice and curry en un restaurante local o guesthouse suele ser la mejor introduccion en valor y autenticidad.\n\nLos currys varian mucho por region: la leche de coco domina en el sur, mientras que las tierras altas y Kandy prefieren preparaciones mas secas y picantes. Pida una “porcion pequena” para probar sin pedir de mas, y espere que el arroz se reponga una vez sin cargo en muchos negocios familiares.',
      },
      {
        title: 'Hoppers, string hoppers y short eats',
        body: 'Los appa (hoppers) son tortitas en forma de cuenco de masa de arroz fermentada, crujientes en los bordes y blandas en el centro; los egg hoppers anaden yema liquida abajo y son un clasico del desayuno o cena ligera. Los string hoppers nidos de fideos de arroz al vapor llegan con sambol de coco suave y curry, especialmente por la manana.\n\nLos short eats son la respuesta de la isla a los tentempies: roti de verduras, bollos de pescado (maalu paan), cutlets y vada vendidos en vitrinas de panaderias y estaciones. Son baratos y saciantes, pero la calidad varia elija mostradores concurrido con alto rotativo en lugar de productos horas en vitrina.',
      },
      {
        title: 'Kottu, roti y el ritmo de la comida callejera',
        body: 'El kottu roti es el plato callejero emblematico de Sri Lanka: godamba roti picado en plancha caliente con verduras, huevo, pollo o queso, ritmicamente troceado con cuchillas metalicas se oye antes de verse. Mejor comerlo fresco, de tarde a noche, en locales especializados que en buffets turisticos genericos.\n\nOtros clasicos callejeros: isso wade (bunuelos de lentejas con gambas), achcharu (fruta encurtida) y maiz asado al carbon. La higiene mejora en puestos con cola de locales, cocina visible y preparacion al momento en lugar de platos prefabricados al calor.',
      },
      {
        title: 'Marisco en las costas: Galle, Mirissa y mas alla',
        body: 'Las costas sur y oeste destacan en pescado fresco, gambas, cangrejo y langosta a menudo simplemente a la parrilla con lima, chile y mantequilla de ajo en chiringuitos de Unawatuna, Mirissa y Tangalle. Los restaurantes de Galle Fort combinan especias sri lankesas con tecnica internacional; los precios suben dentro de las murallas, pero la calidad suele ser fiable.\n\nConfirme siempre si el marisco se cobra por kilo o por racion antes de pedir pescado entero o cangrejo fuente frecuente de sorpresa en la cuenta. Cangrejo de laguna de Negombo y gambas gigantes de la costa este son joyas estacionales que puede preguntar a su chofer.',
      },
      {
        title: 'Nivel de picante, comida vegetariana y alergias',
        body: 'La comida sri lankesa puede ser muy picante, pero el fuego suele estar en sambols y currys mas que escondido en todo puede pedir “menos chile” (pod miris) o evitar el sambol. La leche de coco a menudo suaviza el picante en currys del sur; las versiones de tierras altas pueden sentirse mas intensas.\n\nOpciones vegetarianas y veganas muy extendidas gracias a tradiciones budistas: dhal, curry de yaca, mallung de gotu kola y roti de verduras son fiablemente sin carne. Ciudades de templos y retiros ayurvedicos suelen servir comidas totalmente vegetarianas. Las alergias a frutos secos se atienden menos indiquelas claramente y lleve medicacion si es grave.',
      },
      {
        title: 'Bebidas y consejos practicos de higiene',
        body: 'La king coconut (thambili) vendida en puestos de carretera es una opcion segura y refrescante cuando el vendedor la abre delante de usted. El te de Ceilan no necesita presentacion solo, con leche o helado bajo el calor. Lion beer y arrack (aguardiente de coco) son clasicos locales; el agua embotellada debe ser su norma para beber y cepillarse fuera de hoteles de lujo.\n\nComa comida cocinada caliente cuando pueda, pela la fruta usted mismo y use gel hidroalcoholico antes de short eats. Hoteles de lujo y restaurantes establecidos en zonas turisticas suelen cumplir estandares internacionales; en largas jornadas de carretera, su chofer guia conoce paradas de almuerzo fiables que equilibran autenticidad e higiene.',
      },
    ],
    faq: [
      {
        q: 'Es segura la comida callejera en Sri Lanka?',
        a: 'A menudo si, si elige puestos concurridos con alto rotativo, comida cocinada al momento y bebidas selladas. Evite fruta precortada al sol y marisco sin refrigerar. Muchos viajeros combinan snacks callejeros con almuerzos rice and curry en restaurantes locales serios.',
      },
      {
        q: 'Que tan picante es la comida sri lankesa para visitantes occidentales?',
        a: 'Puede ser muy picante, especialmente sambols y ciertos currys de pescado, pero los restaurantes suelen reducir el chile a peticion. Los currys con coco en el sur tienden a ser mas suaves; empiece con dhal y currys de verduras si es sensible.',
      },
      {
        q: 'Comen bien los vegetarianos en Sri Lanka?',
        a: 'Si la cultura budista implica varios currys de verduras, dhal, hoppers y roti sin carne en la mayoria de cocinas. Confirme que no llevan pasta de pescado o gambas (Maldive fish) si es estrictamente vegetariano.',
      },
      {
        q: 'Que deberia probar si o si en una primera visita?',
        a: 'Un almuerzo rice and curry completo, egg hopper con sambol, kottu roti al anochecer y pescado a la parrilla fresco en la costa sur cubren lo esencial. Anada king coconut y una taza de te de Ceilan en una plantacion de tierras altas.',
      },
      {
        q: 'Es potable el agua del grifo en Sri Lanka?',
        a: 'No use agua embotellada sellada o filtrada para beber y cepillarse fuera de hoteles de confianza. El hielo en restaurantes y hoteles establecidos suele estar bien; sea cauteloso con hielo de vendedores callejeros desconocidos.',
      },
    ],
    ctaTitle: 'Pruebe la isla en un tour privado',
    ctaBody: 'Nuestros itinerarios con chofer incluyen paradas de almuerzo locales fiables, noches de marisco en la costa y pausas de te en tierras altas indiquenos sus preferencias dieteticas al solicitar presupuesto.',
    ctaLabel: 'Planificar un itinerario gastronomico',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour de 5 dias por Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
      { pageId: 'tour8', label: 'Tour de 8 dias por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBudget', label: 'Guia de presupuesto Sri Lanka' },
      { pageId: 'guideBeaches', label: 'Guia de playas de Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guia de equipaje para Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Przewodnik kulinarny po Sri Lance: co jesc, gdzie sprobowac i jak zamawiac',
    lead: 'Kuchnia Sri Lanki opiera sie na ryzu, kokosie, przyprawach i morzu od prostego lunchu rice and curry po nocne kottu na rogu ulicy w Colombo. Znajomosc kilku dan, sposobu radzenia sobie z ostroscia i miejsc, gdzie higiena ma najwieksze znaczenie, pozwala jesc pewnie, nie tracac najlepszych smakow wyspy.',
    heroAlt: 'Kolorowy sri lankijski rice and curry z sambolami i dodatkami',
    sections: [
      {
        title: 'Rice and curry: posilek definiujacy wyspe',
        body: 'Codzienny posilek na Sri Lance to kopiec ryzu otoczony kilkoma curry dhal, jackfruit, buraki, ryba lub kurczak plus sambol, papadam i czasem mallung z lekko podsmazonych zielonych warzyw. Porcje sa hojne i do dzielenia; lunch rice and curry w lokalnej restauracji lub guesthouse to czesto najlepsze wprowadzenie pod wzgledem wartosci i autentycznosci.\n\nCurry roznia sie mocno regionami: mleko kokosowe dominuje na poludniu, a gory i Kandy preferuja bardziej suche, ostrzejsze wersje. Popros o „mala porcje”, jesli chcesz sprobowac bez przesadnego zamowienia, i licz na darmowe dosypanie ryzu raz w wielu rodzinnych lokalach.',
      },
      {
        title: 'Hoppers, string hoppers i short eats',
        body: 'Appa (hoppers) to miseczkowate nalesniki z fermentowanego ciasta ryzowego, chrupiace na brzegach i miekkie w srodku; egg hoppers z plynnym zoltkiem na dnie to klasyk sniadania lub lekkiej kolacji. String hoppers parowane gniazda makaronu ryzowego podawane sa z lagodnym sambol kokosowym i curry, szczegolnie rano.\n\nShort eats to przekaski wyspy: warzywne roti, bulki rybne (maalu paan), cutlety i vada z witryn w piekarniach i na dworcach. Sa tanie i sycace, ale jakosc bywa rozna wybieraj ruchliwe lady z duzym obrotem zamiast produktow stojacych godzinami.',
      },
      {
        title: 'Kottu, roti i rytm street foodu',
        body: 'Kottu roti to kultowe danie uliczne Sri Lanki: siekane godamba roti na goracej plycie z warzywami, jajkiem, kurczakiem lub serem, rytmicznie siekane metalowymi ostrzami slychac je, zanim sie zobaczy. Najlepiej jesc swieze, od poznego popoludnia do wieczora, w specjalistycznych kottu barach, nie na generycznych bufetach turystycznych.\n\nInne klasyki uliczne: isso wade ( kotlety z soczewicy z krewetkami), achcharu ( marynowane owoce) i kukurydza pieczona na weglu. Higiena jest lepsza przy stoiskach z kolejka miejscowych, widocznym gotowaniem i przygotowaniem na zamowienie zamiast wczesniej nakladanych porcji na goracu.',
      },
      {
        title: 'Owoce morza na wybrzezach: Galle, Mirissa i dalej',
        body: 'Poludniowe i zachodnie wybrzeze swietnie serwuja swieza rybe, krewetki, kraby i homaryzesto po prostu grillowane z limonka, chili i maslem czosnkowym w plazowych barach w Unawatunie, Mirissie i Tangalle. Restauracje w Galle Fort lacza sri lankijskie przyprawy z miedzynarodowa technika; ceny rosna w murach, ale jakosc zwykle jest niezawodna.\n\nZawsze potwierdz, czy owoce morza sa liczone za kilogram czy za porcje przed zamowieniem calej ryby czy krabaste zrodlo szoku na rachunku. Krab lagunowy z Negombo i ogromne krewetki ze wschodniego wybrzeza to sezonowe perelki, o ktore warto zapytac kierowce.',
      },
      {
        title: 'Ostrosc, jedzenie wegetarianskie i alergie',
        body: 'Kuchnia sri lankijska moze byc bardzo ostra, ale ogien siedzi glownie w sambolach i curry, a nie wszedziez poprosic o „mniej chili” (pod miris) albo omijac sambol. Mleko kokosowe czesto lagodzi ostrosc na poludniu; wersje z gor moga wydawac sie ostrzejsze.\n\nOpcje wegetarianskie i weganskie sa powszechne dzieki tradycjom buddyjskim: dhal, curry z jackfruit, mallung z gotu kola i warzywne roti sa wiarygodnie bez miesa. Miasta swiatynne i retreaty ajurwedyjskie czesto serwuja w pelni wegetarianskie posilki. Alergie na orzechy bywaja slabiej uwzglednianewyraznie i miej leki, jesli to powazne.',
      },
      {
        title: 'Napoje i praktyczne wskazowki higieniczne',
        body: 'King coconut (thambili) sprzedawana przy drodze to bezpieczny, orzezwiajacy wybor, gdy sprzedawca otwiera ja na Twoich oczach. Herbata cejlonska nie wymaga przedstawieniaysto, z mlekiem lub na zimno w upale. Lion beer i arrack ( alkohol z kokosa) to lokalne klasyki; woda butelkowana powinna byc standardem do picia i mycia zebow poza luksusowymi hotelami.\n\nJedz gorace, ugotowane jedzenie, gdy mozesz, obieraj owoce sam i uzywaj zelu przed short eats. Luksusowe hotele i ugruntowane restauracje w strefach turystycznych zwykle spelniaja miedzynarodowe normy; w dlugich dniach jazdy kierowca przewodnik czesto zna pewne przystanki obiadowe laczace autentycznosc z czystoscia.',
      },
    ],
    faq: [
      {
        q: 'Czy street food na Sri Lance jest bezpieczny?',
        a: 'Czesto tak, jesli wybierzesz ruchliwe stoiska z duzym obrotem, jedzenie na zamowienie i zamkniete napoje. Unikaj pokrojonych owocow na sloncu i nie schlodzonych owocow morza. Wielu podroznych laczy przekaski uliczne z lunchami rice and curry w rzetelnych lokalnych restauracjach.',
      },
      {
        q: 'Jak ostra jest kuchnia sri lankijska dla zachodnich gosci?',
        a: 'Moze byc bardzo ostra, zwlaszcza sambol i niektore curry rybne, ale restauracje zwykle redukuja chili na prosbe. Curry kokosowe na poludniu bywaja lagodniejsze; zacznij od dhal i curry warzywnych, jesli jestes wrazliwy.',
      },
      {
        q: 'Czy wegetarianie dobrze jedza na Sri Lance?',
        a: 'Taktura buddyjska oznacza wiele curry warzywnych, dhal, hoppers i roti bez miesa w wiekszosci kuchni. Upewnij sie, ze nie uzyto pasty rybnej lub krewetkowej (Maldive fish), jesli jestes scisle wegetarianinem.',
      },
      {
        q: 'Co koniecznie sprobowac przy pierwszej wizycie?',
        a: 'Pelny lunch rice and curry, egg hopper z sambol, kottu roti po zmroku i swiezo grillowana ryba na poludniowym wybrzezu pokrywaja podstawy. Dodaj king coconut i filizanke herbaty cejlonskiej na plantacji w gorach.',
      },
      {
        q: 'Czy woda z kranu na Sri Lance jest bezpieczna?',
        a: 'Niezywaj zamknietej wody butelkowanej lub filtrowanej do picia i mycia zebow poza zaufanymi hotelami. Lod w ugruntowanych restauracjach i hotelach zwykle jest w porzadku; uwazaj na lod od nieznanych ulicznych sprzedawcow.',
      },
    ],
    ctaTitle: 'Skosztuj wyspy podczas prywatnej wycieczki',
    ctaBody: 'Nasze trasy z kierowca uwzgledniaja sprawdzone lokalne przystanki obiadowe, wieczory z owocami morza na wybrzezu i przerwy herbaciane w gorachodaj preferencje dietetyczne przy wycenie.',
    ctaLabel: 'Zaplanuj trase kulinarna',
    relatedTours: [
      { pageId: 'tour5', label: '5 dniowa wycieczka po Sri Lance' },
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour8', label: '8 dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBudget', label: 'Przewodnik budzetowy po Sri Lance' },
      { pageId: 'guideBeaches', label: 'Przewodnik po plazach Sri Lanki' },
      { pageId: 'guidePacking', label: 'Przewodnik pakowania na Sri Lanke' },
    ],
  },

  ru: {
    h1: 'Гид по еде Шри Ланки: что есть, где попробовать и как заказывать',
    lead: 'Кухня Шри Ланки строится на рисе, кокосе, специях и море от простого обеда rice and curry до позднего kottu на углу улицы в Коломбо. Знание нескольких блюд, того, как обращаются с остротой, и где гигиена важнее всего, помогает есть уверенно, не упуская лучшие вкусы острова.',
    heroAlt: 'Яркая тарелка rice and curry с самболами и гарнирами',
    sections: [
      {
        title: 'Rice and curry: блюдо, определяющее остров',
        body: 'Повседневная трапеза горка риса, окружённая несколькими карри дал, джекфрут, свёкла, рыба или курица плюс самболы, пападам и иногда mallung из слегка обжаренной зелени. Порции щедрые и рассчитаны на совместную трапезу; обед rice and curry в местном ресторане или гестхаусе часто лучший старт по соотношению цены и аутентичности.\n\nКарри сильно различаются по регионам: кокосовое молоко гуще на юге, а горная местность и Канди склоняются к более сухим, острым версиям. Попросите «маленькую порцию», если хотите попробовать без перезаказа, и ожидайте бесплатной досыпки риса один раз во многих семейных заведениях.',
      },
      {
        title: 'Hoppers, string hoppers и short eats',
        body: 'Appa (hoppers) чашеобразные блинчики из ферментированного рисового теста, хрустящие по краям и мягкие внутри; egg hoppers с жидким желтком внизу классика завтрака или лёгкого ужина. String hoppers паровые гнёзда рисовой лапши подаются с мягким кокосовым самболом и карри, особенно утром.\n\nShort eats ответ острова на перекусы: овощные roti, булочки с рыбой (maalu paan), котлеты и vada из витрин пекарен и вокзалов. Они недороги и сытны, но качество разное выбирайте оживлённые прилавки с высоким оборотом, а не товар, стоящий часами.',
      },
      {
        title: 'Kottu, roti и ритм уличной еды',
        body: 'Kottu roti знаковое уличное блюдо Шри Ланки: нарезанный godamba roti на горячей плите с овощами, яйцом, курицей или сыром, ритмично рубится металлическими лезвиями его слышно раньше, чем видно. Лучше есть свежим, с позднего дня до вечера, в специализированных kottu-лавках, а не на обычных туристических шведских столах.\n\nДругие уличные классики: isso wade (линзовые оладьи с креветками), achcharu (маринованные фрукты) и кукуруза, жаренная на углях. Гигиена лучше у ларьков с очередью местных, видимой готовкой и приготовлением на заказ, а не заранее разложенными порциями на жаре.',
      },
      {
        title: 'Морепродукты на побережьях: Галле, Мирисса и дальше',
        body: 'Южное и западное побережья славятся свежей рыбой, креветками, крабами и лобстерамиасто просто на гриле с лаймом, чили и чесночным маслом в пляжных ларьках в Унаватуне, Мириссе и Тангалле. Рестораны форта Галле сочетают шри ланкийские специи с международной техникой; цены выше внутри стен, но качество обычно надёжное.\n\nВсегда уточняйте, считают ли морепродукты за килограмм или за порцию, прежде чем заказывать целую рыбу или крабаастый источник шока в счёте. Лагунный краб из Негомбо и гигантские креветки с восточного побережья сезонные жемчужины, о которых стоит спросить водителя.',
      },
      {
        title: 'Острота, вегетарианство и аллергии',
        body: 'Еда может быть очень острой, но огонь обычно в самболах и карри, а не везде скрыт можно попросить «меньше чили» (pod miris) или обойти самбол. Кокосовое молоко часто смягчает остроту в южных карри; горные версии могут казаться резче.\n\nВегетарианские и веганские блюда распространены благодаря буддийским традициям: дал, карри из джекфрута, mallung из gotu kola и овощные roti надёжно без мяса. Храмовые города и ayurveda-ретриты часто подают полностью вегетарианские трапезы. Ореховые аллергии учитывают реже сообщите явно и носите лекарства при тяжёлых случаях.',
      },
      {
        title: 'Напитки и практические советы по гигиене',
        body: 'King coconut (thambili) у дороги безопасный освежающий выбор, когда продавец вскрывает её при вас. Цейлонский чай не нуждается в представлении без всего, с молоком или холодный в жару. Lion beer и arrack (кокосовый спирт) местная классика; бутилированная вода должна быть нормой для питья и чистки зубов вне люксовых отелей.\n\nЕшьте горячую приготовленную еду, когда возможно, чистите фрукты сами и используйте санitizer перед short eats. Люксовые отели и устоявшиеся рестораны в туристических зонах обычно соответствуют международным стандартам; в длинные дорожные дни ваш водитель гид часто знает надёжные обеденные остановки между аутентичностью и чистотой.',
      },
    ],
    faq: [
      {
        q: 'Безопасна ли уличная еда на Шри Ланке?',
        a: 'Часто да, если выбирать оживлённые ларьки с высоким оборотом, еду на заказ и запечатанные напитки. Избегайте нарезанных фруктов на солнце и неохлаждённых морепродуктов. Многие сочетают уличные закуски с обедами rice and curry в надёжных местных ресторанах.',
      },
      {
        q: 'Насколько острая еда для западных гостей?',
        a: 'Она может быть очень острой, особенно самболы и некоторые рыбные карри, но рестораны обычно уменьшают chili по просьбе. Кокосовые карри на юге мягче; начните с dal и овощных карри, если чувствительны к остроте.',
      },
      {
        q: 'Хорошо ли питаются вегетарианцы?',
        a: 'Да буддийская культура означает несколько овощных карри, дal, hoppers и roti без мяса в большинстве кухонь. Уточните отсутствие рыбной или креветочной пасты (Maldive fish), если вы строгий вегетарианец.',
      },
      {
        q: 'Что обязательно попробовать при первом визите?',
        a: 'Полный обед rice and curry, egg hopper с самболом, kottu roti после наступления темноты и свежая рыба на гриле на южном побережье покрывают основы. Добавьте king coconut и чашку цейлонского чая на чайной плантации в горах.',
      },
      {
        q: 'Безопасна ли водопроводная вода?',
        a: 'Нет используйте запечатанную бутилированную или фильтрованную воду для питья и чистки зубов вне доверенных отелей. Лёд в устоявшихся ресторанах и отелях обычно нормален; осторожнее с льдом у незнакомых уличных продавцов.',
      },
    ],
    ctaTitle: 'Попробуйте остров в частном туре',
    ctaBody: 'Маршруты с водителем включают проверенные местные обеды, вечера с морепродуктами на побережье и чайные паузы в горах укажите диетические предпочтения при запросе расчёта.',
    ctaLabel: 'Спланировать гастрономический маршрут',
    relatedTours: [
      { pageId: 'tour5', label: '5 дневный тур по Шри Ланке' },
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
      { pageId: 'tour8', label: '8 дневный тур по Шри Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Галле' },
      { pageId: 'destKandy', label: 'Канди' },
      { pageId: 'destElla', label: 'Элла' },
    ],
    relatedGuides: [
      { pageId: 'guideBudget', label: 'Бюджетный гид по Шри Ланке' },
      { pageId: 'guideBeaches', label: 'Гид по пляжам Шри Ланки' },
      { pageId: 'guidePacking', label: 'Гид по упаковке вещей для Шри Ланки' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Kulinarik Ratgeber: Was man isst, wo man probiert und wie man bestellt',
    lead: 'Die srilankische Kuche baut auf Reis, Kokosnuss, Gewurzen und dem Meer auf vom einfachen Rice and Curry Mittagessen bis zum nachtlichen Kottu an einer Strassenecke in Colombo. Wer einige Gerichte kennt, weiss, wie Scharfe gehandhabt wird und wo Hygiene am meisten zahlt, isst selbstbewusst, ohne die besten Aromen der Insel zu verpassen.',
    heroAlt: 'Buntes srilankisches Rice and Curry mit Sambols und Beilagen',
    sections: [
      {
        title: 'Rice and Curry: die Mahlzeit, die die Insel pragt',
        body: 'Die alltagliche srilankische Mahlzeit ist ein Hugel Reis, umgeben von mehreren Currys Dhal, Jackfrucht, Rote Bete, Fisch oder Huhn plus Sambols, Papadam und manchmal Mallung aus leicht angebratenem Grunzeug. Portionen sind grosszugig und zum Teilen gedacht; ein Rice and Curry Mittagessen in einem lokalen Restaurant oder Gastehaus ist oft der beste Einstieg zu Preis und Authentizitat.\n\nCurrys variieren stark nach Region: Kokosmilch dominiert im Suden, wahrend Bergland und Kandy eher trockenere, scharfere Zubereitungen bevorzugen. Fragen Sie nach einer „kleinen Portion“, wenn Sie probieren mochten, und rechnen Sie in vielen Familienbetrieben damit, dass Reis einmal kostenlos nachgefullt wird.',
      },
      {
        title: 'Hoppers, String Hoppers und Short Eats',
        body: 'Appa (Hoppers) sind schalenformige Pfannkuchen aus fermentiertem Reisteig, aussen knusprig und innen weich; Egg Hoppers mit flussigem Dotter sind klassisches Fruhstuck oder leichtes Abendessen. String Hoppers gedampfte Reisnudelnester kommen mit mildem Kokos Sambol und Curry, besonders morgens beliebt.\n\nShort Eats sind die Snack Kultur der Insel: Gemuseroti, Fischbrotchen (Maalu Paan), Cutlets und Vada aus Glasvitrinen in Backereien und Bahnhofen. Sie sind gunstig und sattigend, die Qualitat schwankt wahlen Sie belebte Theken mit hohem Umschlag statt Ware, die stundenlang liegt.',
      },
      {
        title: 'Kottu, Roti und der Rhythmus des Street Food',
        body: 'Kottu Roti ist Sri Lankas Strassengericht schlechthin: gehacktes Godamba Roti auf der heissen Platte mit Gemuse, Ei, Huhn oder Kase, rhythmisch mit Metallklingen zerkleinert man hort es, bevor man es sieht. Am besten frisch am spaten Nachmittag und Abend in spezialisierten Kottu Laden, nicht an generischen Touristenbuffets.\n\nWeitere Strassenklassiker sind Isso Wade (Linsenfrikadellen mit Garnelen), Achcharu (eingelegtes Obst) und uber Holzkohle gerosteter Mais. Hygiene ist besser bei Standen mit lokaler Schlange, sichtbarem Kochen und Zubereitung auf Bestellung statt vorgelegter Ware in der Hitze.',
      },
      {
        title: 'Meeresfruchte an den Kusten: Galle, Mirissa und daruber hinaus',
        body: 'Sud und Westkuste glanzen mit frischem Fisch, Garnelen, Krabben und Hummer oft einfach gegrillt mit Limette, Chili und Knoblauchbutter in Strandhutten in Unawatuna, Mirissa und Tangalle. Restaurants in Galle Fort verbinden srilankische Gewurze mit internationaler Technik; Preise steigen innerhalb der Festungsmauern, die Qualitat ist meist zuverlassig.\n\nKlaren Sie vor Bestellung, ob Meeresfruchte pro Kilo oder pro Portion berechnet werden eine haufige Quelle fur Rechnungsschock. Lagunenkrebs aus Negombo und Riesengarnelen von der Ostkuste sind saisonale Highlights, nach denen Sie Ihren Fahrer fragen konnen.',
      },
      {
        title: 'Scharfe, vegetarisches Essen und Allergien',
        body: 'Srilankisches Essen kann sehr scharf sein, doch die Hitze steckt meist in Sambols und Currys, nicht uberall versteckt Sie konnen um „weniger Chili“ (Podi Miris) bitten oder den Sambol meiden. Kokosmilch mildert im Suden oft die Scharfe; Bergland Versionen wirken scharfer.\n\nVegetarische und vegane Optionen sind dank buddhistischer Tradition weit verbreitet: Dhal, Jackfrucht Curry, Gotu Kola Mallung und Gemuseroti sind zuverlassig fleischfrei. In Tempelstadten und Ayurveda Retreats gibt es oft vollstandig vegetarische Mahlzeiten. Nussallergien werden seltener berucksichtigt deutlich erwahnen und bei schweren Fallen Medikamente mitfuhren.',
      },
      {
        title: 'Getranke und praktische Hygienetipps',
        body: 'King Coconut (Thambili) von Strassenstanden ist eine sichere, erfrischende Wahl, wenn der Verkaufer sie frisch vor Ihnen offnet. Ceylon Tee braucht keine Vorstellung pur, mit Milch oder als Eistee in der Hitze. Lion Beer und Arrack (Kokosbrand) sind lokale Klassiker; Flaschenwasser sollte ausserhalb gehobener Hotels Standard zum Trinken und Zahneputzen sein.\n\nEssen Sie gekochtes Essen moglichst heiss, schalen Sie Obst selbst und nutzen Sie Handedesinfektionsmittel vor Short Eats. Gehobene Hotels und etablierte Restaurants in Touristenorten entsprechen meist internationalen Hygienestandards; an langen Fahrtagen kennt Ihr Fahrer Guide oft verlassliche Mittagsstopps zwischen Authentizitat und Sauberkeit.',
      },
    ],
    faq: [
      {
        q: 'Ist Street Food in Sri Lanka sicher?',
        a: 'Oft ja, wenn Sie belebte Stande mit hohem Umschlag, frisch zubereitetes Essen und verschlossene Getranke wahlen. Vermeiden Sie vorgeschnittenes Obst in der Sonne und nicht gekuhlte Meeresfruchte. Viele Reisende mischen Strassensnacks mit Rice and Curry Mittagessen in seriosen lokalen Restaurants.',
      },
      {
        q: 'Wie scharf ist srilankisches Essen fur westliche Besucher?',
        a: 'Es kann sehr scharf sein, besonders Sambols und bestimmte Fischcurrys, aber Restaurants reduzieren Chili meist auf Wunsch. Kokosbasierte Currys im Suden sind oft milder; beginnen Sie mit Dhal und Gemusecurrys, wenn Sie empfindlich sind.',
      },
      {
        q: 'Konnen Vegetarier gut essen?',
        a: 'Ja die buddhistische Esskultur bedeutet mehrere Gemusecurrys, Dhal, Hoppers und Roti ohne Fleisch in den meisten Kuchen. Fragen Sie nach, ob ohne Fisch- oder Garnelenpaste (Maldive Fish) gekocht wird, wenn Sie streng vegetarisch sind.',
      },
      {
        q: 'Was sollte man beim ersten Besuch unbedingt probieren?',
        a: 'Ein vollstandiges Rice and Curry Mittagessen, Egg Hopper mit Sambol, Kottu Roti nach Einbruch der Dunkelheit und frisch gegrillter Fisch an der Sudkuste decken das Wesentliche ab. Erganzen Sie King Coconut und Ceylon Tee an einer Teeplantage im Bergland.',
      },
      {
        q: 'Ist Leitungswasser in Sri Lanka sicher?',
        a: 'Nein verwenden Sie verschlossenes Flaschen- oder gefiltertes Wasser zum Trinken und Zahneputzen ausserhalb vertrauenswurdiger Hotels. Eis in etablierten Restaurants und Hotels ist meist in Ordnung; seien Sie vorsichtig bei unbekannten Strassenverkaufern.',
      },
    ],
    ctaTitle: 'Probieren Sie die Insel auf einer privaten Rundreise',
    ctaBody: 'Unsere Rundreisen mit Fahrer integrieren verlassliche lokale Mittagsstopps, Meeresfruchte Abende an der Kuste und Tee Pausen im Bergland nennen Sie uns Ihre Ernahrungswunsche bei der Anfrage.',
    ctaLabel: 'Kulinarische Route planen',
    relatedTours: [
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBudget', label: 'Sri Lanka Budgetreise Ratgeber' },
      { pageId: 'guideBeaches', label: 'Sri Lanka Strande Ratgeber' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste Ratgeber' },
    ],
  }
};
