/**
 * Generates 8 missing guide modules with EN base + DE/FR/IT/ES/PL/RU overlays.
 * Run: node scripts/generate-guide-content.mjs
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'src/app/i18n/guides';

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function ser(v, d = 0) {
  const p = '  '.repeat(d);
  const n = '  '.repeat(d + 1);
  if (typeof v === 'string') {
    return v.includes('\n') || v.length > 90 ? `\`${esc(v)}\`` : JSON.stringify(v);
  }
  if (v === null || typeof v !== 'object') return JSON.stringify(v);
  if (Array.isArray(v)) {
    return `[\n${v.map((x) => n + ser(x, d + 1)).join(',\n')},\n${p}]`;
  }
  return `{\n${Object.keys(v)
    .map((k) => `${n}${/^[a-zA-Z_][\w]*$/.test(k) ? k : JSON.stringify(k)}: ${ser(v[k], d + 1)}`)
    .join(',\n')},\n${p}}`;
}

function writeModule(file, exportName, pageId, comment, content) {
  writeFileSync(
    join(OUT, file),
    `import type { ArticleContent } from '../articles/types';\n\n/**\n * ${comment} (pageId: ${pageId}).\n */\nexport const ${exportName}: ArticleContent = ${ser(content)};\n`,
  );
  console.log('wrote', file);
}

/** Apply parallel translated strings onto EN structure for one locale. */
function overlay(en, L) {
  return {
    h1: L.h1,
    lead: L.lead,
    heroAlt: L.heroAlt,
    sections: en.sections.map((s, i) => ({
      title: L.sectionTitles[i],
      body: L.sectionBodies[i],
    })),
    faq: L.faq,
    ctaTitle: L.ctaTitle,
    ctaBody: L.ctaBody,
    ctaLabel: L.ctaLabel,
    relatedTours: L.relatedTours ?? en.relatedTours,
    relatedDestinations: L.relatedDestinations ?? en.relatedDestinations,
    relatedGuides: L.relatedGuides ?? en.relatedGuides,
  };
}

function link(pageId, label) {
  return { pageId, label };
}
function faq(q, a) {
  return { q, a };
}
function sec(id, title, body) {
  return { id, title, body };
}

const defs = [];

function add(def) {
  defs.push(def);
}

add({
  file: 'budget.ts',
  exportName: 'BUDGET_GUIDE',
  pageId: 'guideBudget',
  comment: 'Sri Lanka budget travel guide',
  en: {
    h1: 'Sri Lanka Budget Guide: What a Trip Really Costs',
    lead: 'Sri Lanka can be travelled on a modest budget or in serious comfort the difference is less about skipping highlights and more about how you move between them, where you sleep, and whether you share transport or travel privately.',
    heroImage: 'assets/img/mainpage/4.webp',
    heroAlt: 'Budget travel planning for a Sri Lanka trip',
    sections: [
      sec('dailyCosts', 'Daily costs at a glance', 'Expect guesthouse doubles from roughly USD 25–50 outside peak season, mid-range hotels from USD 60–120, and boutique stays well above that. Local rice-and-curry meals are inexpensive; tourist restaurants cost more. A private car with driver for a day is typically the largest line item on a mid-range trip, but it replaces multiple taxis, trains and wasted half-days.'),
      sec('savingMoney', 'Where you can save without losing the trip', 'Travel in shoulder season, eat where locals eat at least once a day, and mix a few nights in family guesthouses with nicer hotels in places you will linger. Book the famous Ella train early or skip the ticket scramble and enjoy the same scenery from a hilltop walk with your driver.'),
      sec('privateVsPublic', 'Private driver versus buses and trains', 'Buses are cheap and authentic but slow and crowded. Trains are scenic on a few routes and frustrating on others. A private driver costs more per day but often saves money overall on a short holiday by packing more into each day and avoiding missed connections.'),
      sec('hiddenCosts', 'Costs visitors underestimate', 'Temple and park entrance fees add up, especially for foreign visitors. Safari jeep hire is separate from park tickets. Bottled water, tips and card surcharges at smaller hotels are easy to forget when building a spreadsheet at home.'),
      sec('sampleBudgets', 'Sample budgets for a week', 'A careful backpacker sharing rooms and using public transport can keep daily costs low. A couple on a private mid-range tour with hotels, driver and most meals should budget more generously but still less than many European city breaks of the same length. Ask operators for an all-in quote so comparisons are fair.'),
      sec('valueTips', 'Getting more value from a private tour', 'Share your must-sees and pace upfront. Flexible drivers cut dead time. Combining Cultural Triangle stops in one block saves backtracking. Ending on the coast lets you drop the car earlier if you want beach days without a full-day driver rate.'),
    ],
    faq: [
      faq('Is Sri Lanka cheap to visit?', 'It can be, especially for food and local guesthouses, but entrance fees and private transport raise costs for short holidays that try to cover a lot of ground.'),
      faq('Should I tip in Sri Lanka?', 'Tips are appreciated for good service drivers on multi-day tours, safari trackers and hotel staff. There is no single fixed percentage; tip what feels fair for the service you received.'),
      faq('Are credit cards widely accepted?', 'In larger hotels and some restaurants yes; in rural areas and small shops you will need cash (Sri Lankan rupees). ATMs are common in towns.'),
      faq('How do I compare tour quotes fairly?', 'Ask what is included: vehicle type, fuel, driver expenses, hotels, entrance fees and meals. The cheapest headline price often excludes tickets and safari jeeps.'),
    ],
    ctaTitle: 'Get a clear, all-in quote for your dates',
    ctaBody: 'Tell us your travel month, group size and must-see places we will outline a private itinerary with transparent inclusions so you know what you are paying for.',
    ctaLabel: 'Request a budget outline',
    relatedTours: [link('tour4', '4 Day Sri Lanka Tour'), link('tour5', '5 Day Sri Lanka Tour')],
    relatedDestinations: [link('destElla', 'Ella'), link('destGalle', 'Galle')],
    relatedGuides: [link('guidePrivateDriver', 'Private Driver Guide'), link('guidePacking', 'Packing Guide')],
  },
  locales: {
    de: {
      h1: 'Sri Lanka Budget-Reiseführer: Was eine Reise wirklich kostet',
      lead: 'Sri Lanka lässt sich sparsam oder sehr komfortabel bereisen der Unterschied liegt weniger im Auslassen von Highlights als in Transport, Unterkunft und der Frage, ob Sie privat oder mit öffentlichen Mitteln unterwegs sind.',
      heroAlt: 'Budgetplanung für eine Sri-Lanka-Reise',
      sectionTitles: ['Tageskosten im Überblick', 'Wo Sie sparen können, ohne die Reise zu verlieren', 'Privater Fahrer versus Bus und Bahn', 'Kosten, die Besucher unterschätzen', 'Beispielbudgets für eine Woche', 'Mehr Wert aus einer Privattour'],
      sectionBodies: [
        'Gästehaus-Doppelzimmer liegen außerhalb der Hochsaison grob bei 25–50 USD, Mittelklassehotels bei 60–120 USD, Boutique-Unterkünfte deutlich darüber. Lokales Rice and Curry ist günstig; Touristenrestaurants teurer. Ein privater Wagen mit Fahrer ist oft der größte Posten einer Mittelklasse-Reise ersetzt aber Taxis, Züge und verlorene halbe Tage.',
        'Reisen Sie in der Zwischensaison, essen Sie mindestens einmal täglich dort, wo Einheimische essen, und mischen Sie Familiengästehäuser mit besseren Hotels an Orten, an denen Sie länger bleiben. Buchen Sie den Ella-Zug früh oder genießen Sie dieselbe Landschaft von einem Aussichtspunkt mit Ihrem Fahrer.',
        'Busse sind billig und echt, aber langsam und voll. Züge sind auf wenigen Strecken spektakulär und sonst frustrierend. Ein privater Fahrer kostet pro Tag mehr, spart auf einem kurzen Urlaub aber oft Geld, weil mehr in jeden Tag passt.',
        'Tempel- und Parkeintritte summieren sich für ausländische Besucher. Safari-Jeeps sind zusätzlich zu Parktickets. Wasser, Trinkgeld und Kartenzuschläge in kleinen Hotels werden zu Hause leicht vergessen.',
        'Rucksackreisende mit geteilten Zimmern und öffentlichen Verkehrsmitteln halten die Tageskosten niedrig. Paare auf einer privaten Mittelklasse-Tour mit Hotels und Fahrer sollten großzügiger planen oft immer noch günstiger als manche einwöchige Städtereise in Europa. Fordern Sie All-inklusive-Angebote an.',
        'Nennen Sie Muss-Sehenswürdiges und Tempo im Voraus. Flexible Fahrer vermeiden Leerlauf. Das Kulturdreieck in einem Block spart Hin- und Herfahren. Am Strand können Sie den Wagen früher abgeben, wenn Badetage ohne Tagespauschale reichen.',
      ],
      faq: [
        faq('Ist Sri Lanka günstig?', 'Ja bei Essen und Gästehäusern; Eintritte und Privattransport erhöhen die Kosten bei kurzen, inhaltsreichen Reisen.'),
        faq('Soll ich Trinkgeld geben?', 'Für guten Service ja Fahrer, Safari-Tracker, Hotelpersonal. Es gibt keinen festen Prozentsatz.'),
        faq('Werden Kreditkarten akzeptiert?', 'In größeren Hotels oft ja; auf dem Land brauchen Sie Bargeld (rupies). Geldautomaten gibt es in Städten.'),
        faq('Wie vergleiche ich Tourangebote fair?', 'Fragen Sie nach Fahrzeug, Sprit, Fahrerkosten, Hotels, Eintritten und Mahlzeiten. Der billigste Preis lässt oft Tickets weg.'),
      ],
      ctaTitle: 'Holen Sie sich ein klares Gesamtangebot',
      ctaBody: 'Nennen Sie Reisenmonat, Gruppengröße und Highlights wir skizzieren eine private Route mit transparenten Leistungen.',
      ctaLabel: 'Budget-Skizze anfragen',
    },
    fr: {
      h1: 'Guide budget Sri Lanka : ce que coûte vraiment un voyage',
      lead: 'On peut parcourir le Sri Lanka avec un budget serré ou en grand confort la différence tient surtout aux déplacements, à l’hébergement et au choix entre transport privé ou collectif.',
      heroAlt: 'Organisation d’un voyage au Sri Lanka avec un budget maîtrisé',
      sectionTitles: ['Coûts quotidiens en un coup d’œil', 'Où économiser sans gâcher le voyage', 'Chauffeur privé ou bus et trains', 'Frais souvent sous-estimés', 'Budgets types pour une semaine', 'Tirer le meilleur d’un circuit privé'],
      sectionBodies: [
        'Comptez environ 25–50 USD pour une chambre double en guest house hors haute saison, 60–120 USD en hôtel milieu de gamme, davantage en boutique. Le rice and curry local reste abordable ; les restaurants touristiques coûtent plus. Une voiture avec chauffeur est souvent la plus grosse ligne d’un séjour milieu de gamme, mais elle remplace taxis, trains et demi-journées perdues.',
        'Voyagez en saison intermédiaire, mangez au moins une fois par jour comme les habitants, et alternez guest houses et hôtels plus confortables là où vous restez plus longtemps. Réservez tôt le train d’Ella ou admirez les mêmes paysages depuis un belvédère avec votre chauffeur.',
        'Les bus sont bon marché mais lents et bondés. Les trains sont splendides sur quelques lignes, décevants ailleurs. Un chauffeur privé coûte plus cher à la journée mais rentabilise souvent un court séjour.',
        'Les entrées de temples et parcs s’additionnent pour les visiteurs étrangers. Le jeep safari est en plus des tickets. Eau, pourboires et frais de carte sont vite oubliés dans un tableur.',
        'Un backpacker prudent limite les coûts ; un couple en circuit privé milieu de gamme doit prévoir davantage, souvent moins qu’une semaine dans une grande ville européenne. Demandez un devis tout compris.',
        'Indiquez vos incontournables et votre rythme. Un chauffeur flexible évite les temps morts. Regrouper le Triangle culturel évite les allers-retours. Terminer à la plage permet de libérer le véhicule plus tôt.',
      ],
      faq: [
        faq('Le Sri Lanka est-il bon marché ?', 'Oui pour la nourriture et les guest houses ; entrées et transport privé font monter la note sur un court séjour dense.'),
        faq('Faut-il laisser un pourboire ?', 'Oui pour un bon service chauffeur, tracker, personnel d’hôtel. Pas de pourcentage fixe.'),
        faq('Les cartes bancaires sont-elles acceptées ?', 'Souvent dans les grands hôtels ; ailleurs prévoyez des roupies en espèces. Distributeurs dans les villes.'),
        faq('Comment comparer les devis ?', 'Vérifiez véhicule, carburant, frais chauffeur, hôtels, entrées et repas. Le prix le plus bas omet souvent les tickets.'),
      ],
      ctaTitle: 'Recevez un devis clair et détaillé',
      ctaBody: 'Indiquez mois de voyage, taille du groupe et priorités nous proposons un itinéraire privé aux inclusions transparentes.',
      ctaLabel: 'Demander une estimation',
    },
    it: {
      h1: 'Guida al budget Sri Lanka: quanto costa davvero un viaggio',
      lead: 'Lo Sri Lanka si può visitare con un budget contenuto o in grande comfort: la differenza sta soprattutto in spostamenti, alloggi e nella scelta tra mezzo privato o trasporto pubblico.',
      heroAlt: 'Pianificazione di un viaggio in Sri Lanka con budget',
      sectionTitles: ['Costi giornalieri in sintesi', 'Dove risparmiare senza rovinare il viaggio', 'Autista privato contro bus e treni', 'Costi sottovalutati', 'Budget tipo per una settimana', 'Ottenere più valore da un tour privato'],
      sectionBodies: [
        'Una doppia in guest house fuori stagione costa circa 25–50 USD, hotel di fascia media 60–120 USD, boutique di più. Il rice and curry locale è economico; i ristoranti turistici di più. L’auto con autista è spesso la voce più alta, ma sostituisce taxi, treni e mezze giornate perse.',
        'Viaggiate in mezza stagione, mangiate almeno una volta al giorno dove mangiano i locali e alternate guest house e hotel migliori dove vi fermate di più. Prenotate presto il treno di Ella o godetevi gli stessi paesaggi da un belvedere con l’autista.',
        'I bus sono economici ma lenti e affollati. I treni sono splendidi su poche linee. Un autista privato costa di più al giorno ma spesso conviene su una vacanza breve.',
        'Biglietti di templi e parchi si sommano. Il jeep safari è extra. Acqua, mance e commissioni sulle carte si dimenticano facilmente.',
        'Un backpacker attento tiene bassi i costi; una coppia in tour privato di fascia media deve prevedere di più, spesso meno di una settimana in una grande città europea. Chiedete un preventivo all-inclusive.',
        'Indicate le tappe imprescindibili e il ritmo. Autisti flessibili riducono i tempi morti. Concentrare il Triangolo Culturale evita andirivieni. Chiudere al mare permette di lasciare l’auto prima.',
      ],
      faq: [
        faq('Lo Sri Lanka è economico?', 'Sì per cibo e guest house; ingressi e trasporto privato alzano i costi su viaggi brevi e intensi.'),
        faq('Si lascia la mancia?', 'Sì per un buon servizio autista, tracker, staff. Non c’è una percentuale fissa.'),
        faq('Si accettano le carte?', 'Nei grandi hotel spesso sì; altrove servono rupie contanti. Bancomat nelle città.'),
        faq('Come confrontare i preventivi?', 'Chiedete veicolo, carburante, spese autista, hotel, ingressi e pasti. Il prezzo più basso spesso esclude i ticket.'),
      ],
      ctaTitle: 'Ricevete un preventivo chiaro e completo',
      ctaBody: 'Indicate mese, numero di persone e priorità prepariamo un itinerario privato con inclusioni trasparenti.',
      ctaLabel: 'Richiedi una stima',
    },
    es: {
      h1: 'Guía de presupuesto Sri Lanka: lo que realmente cuesta un viaje',
      lead: 'Sri Lanka se puede recorrer con poco presupuesto o con mucho confort: la diferencia está sobre todo en cómo se viaja, dónde se duerme y si el transporte es privado o público.',
      heroAlt: 'Planificación de un viaje a Sri Lanka con presupuesto',
      sectionTitles: ['Costes diarios de un vistazo', 'Dónde ahorrar sin perder el viaje', 'Conductor privado frente a buses y trenes', 'Gastos que se subestiman', 'Presupuestos de ejemplo para una semana', 'Sacar más partido a un tour privado'],
      sectionBodies: [
        'Una doble en guest house fuera de temporada ronda 25–50 USD; hoteles medios 60–120 USD; boutiques más. El rice and curry local es barato; los restaurantes turísticos, no. Un coche con conductor suele ser el mayor gasto de un viaje medio, pero sustituye taxis, trenes y medias jornadas perdidas.',
        'Viajen en temporada intermedia, coman al menos una vez al día donde comen los locales y combinen guest houses con mejores hoteles donde se queden más. Reserven pronto el tren de Ella o disfruten las mismas vistas desde un mirador con su conductor.',
        'Los buses son baratos pero lentos y llenos. Los trenes son espectaculares en pocas rutas. Un conductor privado cuesta más al día pero a menudo ahorra en vacaciones cortas.',
        'Las entradas a templos y parques suman. El jeep de safari es aparte. Agua, propinas y recargos de tarjeta se olvidan fácilmente.',
        'Un mochilero cuidadoso mantiene bajos los costes; una pareja en tour privado medio debe presupuestar más, a menudo menos que una semana en una gran ciudad europea. Pidan presupuestos todo incluido.',
        'Compartan imprescindibles y ritmo. Conductores flexibles evitan tiempos muertos. Agrupar el Triángulo Cultural evita idas y vueltas. Terminar en la costa permite dejar el coche antes.',
      ],
      faq: [
        faq('¿Es barato viajar a Sri Lanka?', 'Sí en comida y guest houses; entradas y transporte privado suben el coste en viajes cortos e intensos.'),
        faq('¿Hay que dejar propina?', 'Sí si el servicio es bueno conductor, tracker, personal. No hay un porcentaje fijo.'),
        faq('¿Se aceptan tarjetas?', 'En hoteles grandes a menudo sí; en zonas rurales hace falta efectivo en rupias. Hay cajeros en las ciudades.'),
        faq('¿Cómo comparar presupuestos?', 'Pregunten vehículo, combustible, gastos del conductor, hoteles, entradas y comidas. El precio más bajo suele excluir tickets.'),
      ],
      ctaTitle: 'Pida un presupuesto claro y completo',
      ctaBody: 'Indiquen mes, tamaño del grupo y prioridades prepararemos una ruta privada con inclusiones transparentes.',
      ctaLabel: 'Solicitar estimación',
    },
    pl: {
      h1: 'Przewodnik budżetowy po Sri Lance: ile naprawdę kosztuje podróż',
      lead: 'Po Sri Lance można podróżować skromnie albo bardzo komfortowo różnica leży głównie w transporcie, noclegach i wyborze między prywatnym a publicznym środkiem lokomocji.',
      heroAlt: 'Planowanie budżetowej podróży na Sri Lankę',
      sectionTitles: ['Koszty dzienne w skrócie', 'Gdzie oszczędzać bez psucia wyjazdu', 'Prywatny kierowca a autobusy i pociągi', 'Koszty niedoszacowane', 'Przykładowe budżety na tydzień', 'Więcej wartości z prywatnej wycieczki'],
      sectionBodies: [
        'Pokój dwuosobowy w guest house poza sezonem to ok. 25–50 USD, hotel średniej klasy 60–120 USD, boutique drożej. Lokalne rice and curry jest tanie; restauracje turystyczne droższe. Samochód z kierowcą to często największa pozycja, ale zastępuje taksówki, pociągi i stracone półdniówki.',
        'Podróżujcie w sezonie przejściowym, jedzcie przynajmniej raz dziennie tam, gdzie jedzą mieszkańcy, łączcie guest house’y z lepszymi hotelami. Rezerwujcie wcześnie pociąg do Elli albo podziwiajcie te same widoki z punktu widokowego z kierowcą.',
        'Autobusy są tanie, lecz wolne i pełne. Pociągi bywają spektakularne na kilku trasach. Prywatny kierowca kosztuje więcej dziennie, ale na krótkim urlopie często się opłaca.',
        'Bilety do świątyń i parków się sumują. Jeep safari jest osobno. Woda, napiwki i prowizje od kart łatwo umykają w domowym arkuszu.',
        'Oszczędny backpacker utrzyma niskie koszty; para na prywatnej trasie średniej klasy powinna zaplanować więcej często i tak mniej niż tydzień w dużym europejskim mieście. Proście o wycenę all-inclusive.',
        'Podajcie must-see i tempo. Elastyczni kierowcy ucinają martwy czas. Kulturowy Trójkąt w jednym bloku oszczędza wahadła. Zakończenie nad morzem pozwala wcześniej oddać samochód.',
      ],
      faq: [
        faq('Czy Sri Lanka jest tania?', 'Tak pod względem jedzenia i guest house’ów; bilety i prywatny transport podnoszą koszt krótkich, intensywnych wyjazdów.'),
        faq('Czy dawać napiwek?', 'Tak za dobrą obsługę kierowca, tracker, personel. Nie ma sztywnego procentu.'),
        faq('Czy karty są akceptowane?', 'W większych hotelach często tak; na prowincji potrzebna gotówka w rupiach. Bankomaty są w miastach.'),
        faq('Jak uczciwie porównać oferty?', 'Pytajcie o auto, paliwo, koszty kierowcy, hotele, bilety i posiłki. Najniższa cena często pomija bilety.'),
      ],
      ctaTitle: 'Otrzymaj jasną wycenę all-inclusive',
      ctaBody: 'Podajcie miesiąc, liczbę osób i priorytety przygotujemy prywatną trasę z przejrzystymi elementami składowymi.',
      ctaLabel: 'Poproś o szacunek',
    },
    ru: {
      h1: 'Бюджетный гид по Шри-Ланке: сколько на самом деле стоит поездка',
      lead: 'По Шри-Ланке можно путешествовать скромно или очень комфортно разница в основном в трансферах, жилье и выборе между частным и общественным транспортом.',
      heroAlt: 'Планирование бюджета поездки на Шри-Ланку',
      sectionTitles: ['Суточные расходы кратко', 'Где экономить, не теряя впечатлений', 'Частный водитель против автобусов и поездов', 'Расходы, которые недооценивают', 'Примерные бюджеты на неделю', 'Как получить больше от частного тура'],
      sectionBodies: [
        'Двухместный номер в гостевом доме вне сезона примерно 25–50 USD, отель среднего уровня 60–120 USD, бутик-отели дороже. Местный rice and curry недорог; туристические рестораны дороже. Машина с водителем часто самая крупная статья, но заменяет такси, поезда и потерянные полдня.',
        'Ездите в межсезонье, хотя бы раз в день ешьте там, где едят местные, сочетайте гостевые дома с более комфортными отелями. Бронируйте поезд в Эллу заранее или смотрите те же виды со смотровой площадки с водителем.',
        'Автобусы дешевы, но медленны и переполнены. Поезда прекрасны на нескольких маршрутах. Частный водитель дороже за день, но на коротком отдыхе часто выгоднее.',
        'Входные билеты в храмы и парки складываются. Джип для сафари отдельно. Вода, чаевые и комиссии карт легко забываются дома в таблице.',
        'Осторожный бэкпекер держит расходы низкими; пара на частном туре среднего уровня должна закладывать больше часто всё равно меньше недели в крупном европейском городе. Просите смету «всё включено».',
        'Назовите must-see и темп. Гибкие водители убирают простой. Культурный треугольник одним блоком экономит челноки. Финиш на побережье позволяет раньше отпустить машину.',
      ],
      faq: [
        faq('Шри-Ланка дешёвая?', 'Да по еде и гостевым домам; билеты и частный транспорт повышают стоимость коротких насыщенных поездок.'),
        faq('Нужны ли чаевые?', 'Да за хороший сервис водитель, трекер, персонал. Фиксированного процента нет.'),
        faq('Принимают ли карты?', 'В крупных отелях часто да; в провинции нужна наличность в рупиях. Банкоматы есть в городах.'),
        faq('Как честно сравнить предложения?', 'Спрашивайте про авто, топливо, расходы водителя, отели, билеты и питание. Самая низкая цена часто без билетов.'),
      ],
      ctaTitle: 'Получите понятную смету под ваши даты',
      ctaBody: 'Назовите месяц, состав группы и приоритеты мы набросаем частный маршрут с прозрачным составом услуг.',
      ctaLabel: 'Запросить расчёт',
    },
  },
});

// For remaining guides, use a compact factory to avoid a 2000-line script
const more = [
  {
    file: 'wildlife.ts',
    exportName: 'WILDLIFE_GUIDE',
    pageId: 'guideWildlife',
    comment: 'Sri Lanka wildlife guide',
    heroImage: 'assets/img/5daysTours/45.webp',
    titles: {
      en: 'Sri Lanka Wildlife Guide: Elephants, Leopards and Beyond',
      de: 'Sri Lanka Wildlife-Reiseführer: Elefanten, Leoparden und mehr',
      fr: 'Guide faune Sri Lanka : éléphants, léopards et bien plus',
      it: 'Guida alla fauna dello Sri Lanka: elefanti, leopardi e oltre',
      es: 'Guía de vida silvestre en Sri Lanka: elefantes, leopardos y más',
      pl: 'Przewodnik po dzikiej przyrodzie Sri Lanki: słonie, lamparty i więcej',
      ru: 'Гид по дикой природе Шри-Ланки: слоны, леопарды и не только',
    },
    leads: {
      en: 'Few countries pack so much wildlife into such a compact island elephants in dry-zone parks, leopards in Yala, whales off Mirissa, and birdlife almost everywhere you stop for tea.',
      de: 'Kaum ein Land bietet auf so kleiner Fläche so viel Wildlife Elefanten in Trockenzonen-Parks, Leoparden in Yala, Wale vor Mirissa und Vögel fast überall.',
      fr: 'Peu de pays concentrent autant de faune sur une île aussi compacte éléphants, léopards à Yala, baleines au large de Mirissa, et oiseaux presque partout.',
      it: 'Pochi Paesi concentrano tanta fauna in un’isola così compatta elefanti, leopardi a Yala, balene al largo di Mirissa e uccelli quasi ovunque.',
      es: 'Pocos países concentran tanta fauna en una isla tan compacta: elefantes, leopardos en Yala, ballenas frente a Mirissa y aves casi en todas partes.',
      pl: 'Niewiele krajów mieści tyle dzikiej przyrody na tak małej wyspie słonie, lamparty w Yali, wieloryby koło Mirissy i ptaki niemal wszędzie.',
      ru: 'Мало стран умещают столько дикой природы на таком компактном острове слоны, леопарды в Яле, киты у Мириссы и птицы почти везде.',
    },
    sectionIds: ['elephants', 'leopards', 'whales', 'birds', 'ethics', 'combining'],
    relatedTours: [link('tour2ey', '2 Day Ella & Yala Tour'), link('tour7', '7 Day Sri Lanka Tour')],
    relatedDestinations: [link('destYala', 'Yala'), link('destSigiriya', 'Sigiriya')],
    relatedGuides: [link('guideSafari', 'Safari Guide'), link('guideBestTime', 'Best Time to Visit')],
  },
];

// Write budget first with full locales, then generate remaining 7 with EN + quality overlays via template
for (const d of defs) {
  const content = { en: d.en };
  for (const [loc, L] of Object.entries(d.locales)) {
    content[loc] = overlay(d.en, L);
  }
  writeModule(d.file, d.exportName, d.pageId, d.comment, content);
}

/** Shared EN bodies + multilingual chrome for remaining guides */
const REST = [
  {
    file: 'wildlife.ts',
    exportName: 'WILDLIFE_GUIDE',
    pageId: 'guideWildlife',
    comment: 'Sri Lanka wildlife guide',
    heroImage: 'assets/img/5daysTours/45.webp',
    heroAlt: {
      en: 'Wild elephants in a Sri Lankan national park',
      de: 'Wilde Elefanten in einem Nationalpark Sri Lankas',
      fr: 'Éléphants sauvages dans un parc national du Sri Lanka',
      it: 'Elefanti selvatici in un parco nazionale dello Sri Lanka',
      es: 'Elefantes salvajes en un parque nacional de Sri Lanka',
      pl: 'Dziki słonie w parku narodowym na Sri Lance',
      ru: 'Дикие слоны в национальном парке Шри-Ланки',
    },
    h1: {
      en: 'Sri Lanka Wildlife Guide: Elephants, Leopards and Beyond',
      de: 'Sri Lanka Wildlife-Reiseführer: Elefanten, Leoparden und mehr',
      fr: 'Guide faune Sri Lanka : éléphants, léopards et bien plus',
      it: 'Guida alla fauna dello Sri Lanka: elefanti, leopardi e oltre',
      es: 'Guía de vida silvestre en Sri Lanka: elefantes, leopardos y más',
      pl: 'Przewodnik po dzikiej przyrodzie Sri Lanki: słonie, lamparty i więcej',
      ru: 'Гид по дикой природе Шри-Ланки: слоны, леопарды и не только',
    },
    lead: {
      en: 'Few countries pack so much wildlife into such a compact island elephants in dry-zone parks, leopards in Yala, whales off Mirissa, and birdlife almost everywhere you stop for tea.',
      de: 'Kaum ein Land bietet auf so kleiner Fläche so viel Wildlife Elefanten, Leoparden in Yala, Wale vor Mirissa und Vögel fast überall.',
      fr: 'Peu de pays concentrent autant de faune sur une île aussi compacte éléphants, léopards à Yala, baleines au large de Mirissa.',
      it: 'Pochi Paesi concentrano tanta fauna in un’isola così compatta elefanti, leopardi a Yala, balene al largo di Mirissa.',
      es: 'Pocos países concentran tanta fauna en una isla tan compacta: elefantes, leopardos en Yala, ballenas frente a Mirissa.',
      pl: 'Niewiele krajów mieści tyle dzikiej przyrody na tak małej wyspie słonie, lamparty w Yali, wieloryby koło Mirissy.',
      ru: 'Мало стран умещают столько дикой природы на таком компактном острове слоны, леопарды в Яле, киты у Мириссы.',
    },
    sectionsEn: [
      sec('elephants', 'Elephants: where and when', 'Sri Lanka’s Asian elephants are easiest to see in parks such as Udawalawe, Minneriya and Kaudulla. The famous gathering around Minneriya’s reservoir peaks in the dry months. Treat orphanages as educational stops, not a substitute for wild herds.'),
      sec('leopards', 'Leopards and Yala', 'Yala has one of the highest leopard densities in the world, but sightings are never guaranteed. Early drives in quieter blocks improve odds. Patience beats racing between crowds.'),
      sec('whales', 'Whales and the south coast', 'Blue and sperm whales pass Mirissa roughly November to April. Pick a reputable boat and a calm day. Combine with beach time rather than a rushed transfer.'),
      sec('birds', 'Birdwatching for non-specialists', 'Kingfishers, peacocks and bee-eaters appear even on casual stops. Bundala and wetlands near Tissamaharama reward binoculars. Hill-country gardens attract different species again.'),
      sec('ethics', 'Wildlife ethics that matter', 'Keep distance, stay in the vehicle in parks, and never feed wild animals. Avoid riding or close-contact elephant attractions. Good operators already refuse these.'),
      sec('combining', 'Building wildlife into a round tour', 'Pair Cultural Triangle sights with a safari day, then hill country and coast. Two safari sessions beat one rushed drive. Tell your driver if wildlife is the priority.'),
    ],
  },
];

function writeMultilingualGuide(g) {
  const en = {
    h1: g.h1.en,
    lead: g.lead.en,
    heroImage: g.heroImage,
    heroAlt: g.heroAlt.en,
    sections: g.sectionsEn,
    faq: g.faqEn,
    ctaTitle: g.cta.en.title,
    ctaBody: g.cta.en.body,
    ctaLabel: g.cta.en.label,
    relatedTours: g.relatedTours,
    relatedDestinations: g.relatedDestinations,
    relatedGuides: g.relatedGuides,
  };
  const content = { en };
  for (const loc of ['de', 'fr', 'it', 'es', 'pl', 'ru']) {
    content[loc] = {
      h1: g.h1[loc],
      lead: g.lead[loc],
      heroAlt: g.heroAlt[loc],
      sections: g.sectionsEn.map((s, i) => ({
        title: g.sectionTitles[loc][i],
        body: g.sectionBodies[loc][i],
      })),
      faq: g.faq[loc],
      ctaTitle: g.cta[loc].title,
      ctaBody: g.cta[loc].body,
      ctaLabel: g.cta[loc].label,
    };
  }
  writeModule(g.file, g.exportName, g.pageId, g.comment, content);
}

// Import remaining guide payloads
const { REST_GUIDES } = await import('./guide-rest-data.mjs');
for (const g of REST_GUIDES) writeMultilingualGuide(g);

console.log('All missing guides generated.');
