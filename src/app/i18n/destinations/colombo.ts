import type { ArticleContent } from '../articles/types';

/**
 * Colombo destination (pageId: destColombo).
 * High volume UK related query: "colombo sri lanka" / "colombo".
 */
export const COLOMBO_DEST: ArticleContent = {
  en: {
    h1: 'Colombo, Sri Lanka: Airport Gateway, City Stop and First Night',
    lead:
      'Colombo is where almost every UK flight to Sri Lanka lands. Bandaranaike International Airport (CMB) sits north of the city at Katunayake; the commercial capital itself is a first or last night of markets, colonial streets, Buddhist temples and Indian Ocean promenadenot usually a week long holiday on its own.',
    heroImage: 'assets/img/destination-6.webp',
    heroAlt: 'Colombo city and Indian Ocean coastline, Sri Lanka',
    sections: [
      {
        id: 'gateway',
        title: 'Colombo airport vs Colombo city',
        body: 'CMB (Bandaranaike International Airport) is in Katunayake, not downtown. Negombo beach hotels are 20 to 40 minutes from the terminal and suit late Heathrow arrivals. Colombo city hotels are typically  45 to 90 minutes depending on traffic. Mixing up “Colombo airport” and “Colombo city” is the most common first night planning mistake.\n\nA booked ahead private transfer beats informal taxi offers in the arrivals hall. Share your flight number so the driver can track delays.',
      },
      {
        id: 'whatToDo',
        title: 'What to do with one day in Colombo',
        body: 'If you have a full day, a private city loop can cover Galle Face Green, the National Museum or Independence Memorial, Gangaramaya Temple, Pettah market (go with a guide, keep bags close) and a cinnamon or colonial quarter walk. The Port City and newer high rises change the skyline; older Cinnamon Gardens and the Fort area still show the trading port history.\n\nFood is a reason to linger: hoppers, kottu, seafood and Malay influenced dishes. If you only have a jet lagged evening, a quiet hotel, a short Galle Face walk and an early night is the kinder plan.',
      },
      {
        id: 'inAnItinerary',
        title: 'Where Colombo sits on a round tour',
        body: 'Classic private tours leave Colombo or Negombo for Sigiriya and the Cultural Triangle, then hill country, safari and the south coast, returning to CMB at the end. Spending three nights in Colombo at the start usually wastes beach and wildlife time.\n\nA last night in the city works if your outbound flight is late and you do not want a 3 a.m. pickup from Galle. Otherwise west coast hotels (Kalutara, Waskaduwa) or Negombo keep the airport run shorter.',
      },
      {
        id: 'practical',
        title: 'Practical tips',
        body: 'Traffic is heavy in weekday peaks. Ride hailing apps work in the city; for intercity travel a chauffeur guide is still the standard. Dress modestly for temples. Keep valuables secure in Pettah. Colombo weather is hot and humid year round, with heavier rain in the southwest monsoon (May to September).\n\nTime in Sri Lanka is UTC+5:30. Set your watch on the aircraft so morning temple visits and safari starts are not a surprise.',
      },
    ],
    faq: [
      {
        q: 'Is Colombo worth visiting on a Sri Lanka holiday?',
        a: 'Yes as a gateway: one night or a focused city day. Most UK visitors then leave for Sigiriya, Kandy, Ella, Yala and the coast rather than treating Colombo as the main destination.',
      },
      {
        q: 'How far is Colombo airport from the city?',
        a: 'Typically  45 to 90 minutes by road, traffic dependent. Negombo is closer to CMB than downtown Colombo.',
      },
      {
        q: 'Should I stay in Colombo after a London flight?',
        a: 'If you land late, Negombo or a west coast hotel is often easier than a city centre hotel. If you want a city dinner and museums, Colombo works as a first full day after sleep.',
      },
    ],
    ctaTitle: 'Start or finish in Colombo with a private driver',
    ctaBody: 'We arrange CMB pickup, a sensible first night hotel and the onward route to the Cultural Triangle or the coast.',
    ctaLabel: 'Plan airport pickup',
    relatedTours: [
      { pageId: 'tour7', label: '7 day Sri Lanka tour' },
      { pageId: 'tour5', label: '5 day Sri Lanka tour' },
    ],
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideAirportTransfers', label: 'Airport transfers' },
      { pageId: 'guidePrivateDriver', label: 'Sri Lanka private driver guide' },
      { pageId: 'guideVisa', label: 'Entry requirements' },
    ],
  },
  de: {
    h1: 'Colombo, Sri Lanka: Flughafen, Stadtstopp und erste Nacht',
    lead:
      'In Colombo landen fast alle Fluge aus Deutschland. Der Bandaranaike International Airport (CMB) liegt nordlich der Stadt in Katunayake; die Handelsmetropole selbst ist erste oder letzte Nacht mit Markten, Kolonialstrassen, Tempeln und Galle Face  selten ein Wochenurlaub fur sich.',
    heroAlt: 'Colombo und die Indik Kuste, Sri Lanka',
    sections: [
      {
        title: 'Flughafen Colombo vs. Colombo Stadt',
        body: 'CMB liegt in Katunayake, nicht downtown. Strandhotels in Negombo sind 20 to 40 minuten vom Terminal und passen zu spaten Ankunften aus Frankfurt. Colombo Stadt dauert typischerweise  45 to 90 minuten. „Flughafen Sri Lanka“ und „Colombo Stadt“ zu verwechseln ist der haufigste Fehler der ersten Nacht.\n\nEin vorab gebuchter privater Transfer schlagt informelle Taxi Angebote in der Ankunftshalle. Flugnummer nennen, dann verfolgt der Fahrer Verspatungen.',
      },
      {
        title: 'Was man mit einem Tag in Colombo macht',
        body: 'Ein privater Stadtrundgang kann Galle Face Green, Nationalmuseum oder Independence Memorial, Gangaramaya Tempel, Pettah (mit Guide, Taschen im Blick) und die Fort-/Cinnamon Gardens Viertel abdecken. Port City verandert die Skyline; die altere Hafenstadt bleibt sichtbar.\n\nEssen lohnt: Hoppers, Kottu, Meeresfruchte. Nach einem Nachtflug oft besser: ruhiges Hotel, kurzer Galle Face Spaziergang, fruhe Nacht.',
      },
      {
        title: 'Colombo in der Rundreise',
        body: 'Klassische Privatreisen verlassen Colombo oder Negombo Richtung Sigiriya, dann Bergland, Safari und Sudkuste, zuruck zu CMB. Drei Nachte Colombo am Anfang kosten meist Strand und Wildlife Zeit.\n\nEine letzte Stadtnacht lohnt, wenn der Ruckflug spat ist und Sie keine 3 Uhr Abholung aus Galle wollen. Sonst halten Westkuste oder Negombo den Transfer kurzer.',
      },
      {
        title: 'Praktische Tipps',
        body: 'Berufsverkehr ist dicht. In der Stadt funktionieren Ride Apps; zwischen den Regionen bleibt der Fahrer Guide Standard. In Tempeln bedeckt kleiden. In Pettah Wertsachen sichern. Colombo ist ganzjahrig heiss und feucht, mit mehr Regen im Sudwestmonsun (Mai to September).\n\nUhrzeit Sri Lanka: UTC+5:30. Zeitverschiebung zu Deutschland: 4,5 Stunden im Winter, 3,5 in der Sommerzeit.',
      },
    ],
    faq: [
      {
        q: 'Lohnt sich Colombo im Sri Lanka Urlaub?',
        a: 'Ja als Tor: eine Nacht oder ein gezielter Stadttag. Die meisten Gaste aus Deutschland fahren danach nach Sigiriya, Kandy, Ella, Yala und an die Kuste.',
      },
      {
        q: 'Wie weit ist der Flughafen Sri Lanka von Colombo Stadt?',
        a: 'Typischerweise  45 to 90 minuten, verkehrsabhangig. Negombo liegt naher an CMB als die Innenstadt.',
      },
      {
        q: 'Nach dem Flug aus Frankfurt in Colombo ubernachten?',
        a: 'Bei spater Landung sind Negombo oder ein Westkustenhotel oft einfacher. Colombo wahlen, wenn Sie nach dem Schlafen Museen und Stadt wollen.',
      },
    ],
    ctaTitle: 'In Colombo mit privatem Fahrer starten oder enden',
    ctaBody: 'Wir organisieren CMB Abholung, eine sinnvolle erste Nacht und die Weiterfahrt ins Kulturdreieck oder an die Kuste.',
    ctaLabel: 'Flughafenabholung planen',
    relatedTours: [
      { pageId: 'tour7', label: '7 Tage Rundreise' },
      { pageId: 'tour5', label: '5 Tage Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideAirportTransfers', label: 'Flughafentransfer' },
      { pageId: 'marketGermany', label: 'Rundreise aus Deutschland' },
      { pageId: 'guideVisa', label: 'Einreise' },
    ],
  },
  fr: {
    h1: 'Colombo Sri Lanka : aeroport CMB, capitale et premiere nuit',
    lead:
      'Presque tous les vols depuis Paris atterrissent a Colombo. L’aeroport international Bandaranaike (CMB) est au nord, a Katunayake ; Colombo reste la porte d’entree commerciale. La capitale administrative est Sri Jayawardenepura Kotte, juste a cote. Une nuit ou une journee en ville suffisent avant le circuit.',
    heroAlt: 'Colombo et la cote de l’ocean Indien, Sri Lanka',
    sections: [
      {
        title: 'Aeroport Sri Lanka vs Colombo ville',
        body: 'CMB est a Katunayake, pas au centre. Negombo est a 20 to 40 minutes du terminal et convient aux arrivees tardives depuis Paris. Colombo ville prend en general 45 a 90 minutes. Confondre « aeroport Sri Lanka » et le centre ville est l’erreur classique de la premiere nuit.\n\nUn transfert prive reserve a l’avance vaut mieux que les taxis informels du hall. Donnez le numero de vol : le chauffeur suit les retards.',
      },
      {
        title: 'Que faire en un jour a Colombo',
        body: 'Un circuit prive peut inclure Galle Face Green, le musee national ou Independence Memorial, le temple Gangaramaya, Pettah (avec guide, sacs surveilles) et les quartiers Fort / Cinnamon Gardens. Port City change la skyline ; le vieux port reste lisible.\n\nApres un vol de nuit, un hotel calme, une courte promenade a Galle Face et un coucher tot sont souvent plus sages qu’un programme musees charge.',
      },
      {
        title: 'Colombo dans un voyage au Sri Lanka',
        body: 'Les circuits prives quittent Colombo ou Negombo vers Sigiriya, puis le pays du the, un safari et la cote, avant de revenir a CMB. Trois nuits Colombo au debut coutent en general du temps plage et safari.\n\nUne derniere nuit en ville a du sens si le vol retour est tard et que vous refusez un depart a 3 h depuis Galle. Sinon Negombo ou la cote ouest raccourcissent le transfert.',
      },
      {
        title: 'Heure, decalage et conseils pratiques',
        body: 'Heure Sri Lanka : UTC+5:30. Decalage avec la France : 4 h 30 en hiver, 3 h 30 pendant l’heure d’ete. Circulation dense aux heures de pointe. Tenue correcte dans les temples. Colombo est chaud et humide toute l’annee, plus pluvieux pendant la mousson du sud ouest (mai to septembre).',
      },
    ],
    faq: [
      {
        q: 'Quelle est la capitale du Sri Lanka ?',
        a: 'Sri Jayawardenepura Kotte est la capitale administrative. Colombo reste la ville d’arrivee des vols internationaux et le hub commercial que visent presque toutes les recherches « Colombo Sri Lanka ».',
      },
      {
        q: 'A quelle distance l’aeroport Sri Lanka est il de Colombo ?',
        a: 'Typiquement  45 to 90 minutes selon le trafic. Negombo est plus proche de CMB que le centre ville.',
      },
      {
        q: 'Faut il dormir a Colombo apres un vol Paris ?',
        a: 'Si vous atterrissez tard, Negombo ou un hotel de la cote ouest est souvent plus simple. Choisissez Colombo ville si vous voulez musees et urbanisme le lendemain.',
      },
    ],
    ctaTitle: 'Commencer ou finir a Colombo avec un chauffeur prive',
    ctaBody: 'Nous organisons la prise en charge CMB, une premiere nuit utile et la suite vers le Triangle Culturel ou la cote.',
    ctaLabel: 'Planifier le transfert aeroport',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit 7 jours' },
      { pageId: 'tour5', label: 'Circuit 5 jours' },
    ],
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideAirportTransfers', label: 'Transfert aeroport' },
      { pageId: 'marketFrance', label: 'Voyage depuis la France' },
      { pageId: 'guideVisa', label: 'Visa / ETA' },
    ],
  },
  es: {
    h1: 'Colombo Sri Lanka: aeropuerto CMB, ciudad y primera noche',
    lead:
      'Casi todos los vuelos desde Espana aterrizan en Colombo. El aeropuerto internacional Bandaranaike (CMB) esta al norte, en Katunayake; Colombo es la puerta comercial. Una noche o un dia en la ciudad bastan antes del circuito.',
    heroAlt: 'Colombo y la costa del oceano Indico, Sri Lanka',
    sections: [
      {
        title: 'Aeropuerto de Sri Lanka frente a Colombo ciudad',
        body: 'CMB esta en Katunayake, no en el centro. Negombo queda a 20 to 40 minutos de la terminal y encaja con llegadas tardias desde Madrid o Barcelona. Colombo ciudad suele llevar  45 to 90 minutos. Confundir «aeropuerto Sri Lanka» con el centro es el error clasico de la primera noche.\n\nUn traslado privado reservado supera a los taxis informales del hall. Dad el numero de vuelo: el chofer sigue los retrasos.',
      },
      {
        title: 'Que ver en un dia en Colombo',
        body: 'Un circuito privado puede incluir Galle Face Green, el museo nacional o Independence Memorial, el templo Gangaramaya, Pettah (con guia, bolsos a la vista) y Fort / Cinnamon Gardens. Tras un vuelo nocturno, hotel tranquilo y una paseo corto suelen ser mas sensatos que un dia de museos cargado.',
      },
      {
        title: 'Colombo en un viaje a Sri Lanka',
        body: 'Los circuitos privados salen de Colombo o Negombo hacia Sigiriya, pais del te, safari y costa, y vuelven a CMB. Tres noches en Colombo al inicio suelen restar playa y fauna.\n\nUna ultima noche en ciudad tiene sentido si el vuelo de vuelta es tarde. Si no, Negombo o la costa oeste acortan el traslado.',
      },
      {
        title: 'Hora, diferencia horaria y consejos',
        body: 'Hora en Sri Lanka: UTC+5:30. Respecto a Espana: 4 h 30 en invierno, 3 h 30 en verano. Trafico denso. Vestid modestos en templos. Colombo es calido y humedo todo el ano, mas lluvioso en el monzon del suroeste (mayo to septiembre).',
      },
    ],
    faq: [
      {
        q: 'Donde esta el aeropuerto de Sri Lanka respecto a Colombo?',
        a: 'En Katunayake, tipicamente  45 to 90 minutos del centro. Negombo esta mas cerca de CMB que el casco urbano.',
      },
      {
        q: 'Dormir en Colombo tras un vuelo desde Espana?',
        a: 'Si aterrizais tarde, Negombo o un hotel de la costa oeste suele ser mas facil. Elegid Colombo ciudad si quereis museos al dia siguiente.',
      },
    ],
    ctaTitle: 'Empezar o terminar en Colombo con chofer privado',
    ctaBody: 'Organizamos la recogida en CMB, una primera noche util y la continuacion hacia el Triangulo Cultural o la costa.',
    ctaLabel: 'Planificar el traslado',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuito 7 dias' },
      { pageId: 'tour5', label: 'Circuito 5 dias' },
    ],
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideAirportTransfers', label: 'Traslado aeropuerto' },
      { pageId: 'marketSpain', label: 'Viajar desde Espana' },
      { pageId: 'guideVisa', label: 'Visado / ETA' },
    ],
  },
  pl: {
    h1: 'Kolombo Sri Lanka: lotnisko CMB, miasto i pierwsza noc',
    lead:
      'Prawie wszystkie loty z Polski laduja w Kolombo. Lotnisko Bandaranaike (CMB) lezy na polnoc, w Katunayake; Colombo/Kolombo to brama handlowa. Jedna noc lub dzien w miescie wystarczy przed objazdem.',
    heroAlt: 'Kolombo i wybrzeze Oceanu Indyjskiego, Sri Lanka',
    sections: [
      {
        title: 'Lotnisko Sri Lanka a miasto Kolombo',
        body: 'CMB jest w Katunayake, nie w centrum. Negombo to 20 to 40 minut od terminalu i pasuje do poznych przylotow z Warszawy. Miasto Colombo to zwykle  45 to 90 minut. Mylenie „lotnisko Sri Lanka” z centrum to klasyczny blad pierwszej nocy.\n\nPrywatny transfer z rezerwacja bije taksowki z hali. Podajcie numer lotu: kierowca sledzi opoznienia.',
      },
      {
        title: 'Co zobaczyc w Kolombo w jeden dzien',
        body: 'Prywatny objazd moze objac Galle Face Green, muzeum narodowe, swiatynie Gangaramaya, Pettah (z przewodnikiem) i Fort. Po nocnym locie spokojny hotel i krotki spacer zwykle bija przeladowany dzien muzeow.',
      },
      {
        title: 'Godzina i praktyka',
        body: 'Godzina na Sri Lance: UTC+5:30. Wzgledem Polski: 4 h 30 zima, 3 h 30 latem. Ruch gesty. Skromny stroj w swiatyniach.',
      },
    ],
    faq: [
      {
        q: 'Jak daleko lotnisko Sri Lanka jest od Kolombo?',
        a: 'Zwykle  45 to 90 minut. Negombo jest blizej CMB niz centrum.',
      },
    ],
    ctaTitle: 'Zaczac lub skonczyc w Kolombo z prywatnym kierowca',
    ctaBody: 'Organizujemy odbior z CMB, rozsadna pierwsza noc i wyjazd do Trojkata Kulturowego lub na wybrzeze.',
    ctaLabel: 'Zaplanuj transfer',
    relatedTours: [
      { pageId: 'tour7', label: 'Wycieczka 7 dni' },
      { pageId: 'tour5', label: 'Wycieczka 5 dni' },
    ],
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideAirportTransfers', label: 'Transfer z lotniska' },
      { pageId: 'marketPoland', label: 'Wakacje z Polski' },
      { pageId: 'guideVisa', label: 'Wiza / ETA' },
    ],
  },
  it: {
    h1: 'Colombo Sri Lanka: aeroporto CMB, capitale e prima notte',
    lead:
      'Quasi tutti i voli dall’Italia atterrano a Colombo. L’aeroporto Bandaranaike (CMB) e a nord, a Katunayake. La capitale amministrativa e Sri Jayawardenepura Kotte; Colombo resta la porta commerciale. Una notte o un giorno in citta bastano prima del tour.',
    heroAlt: 'Colombo e la costa dell’Oceano Indiano, Sri Lanka',
    sections: [
      {
        title: 'Aeroporto Sri Lanka e Colombo citta',
        body: 'CMB e a Katunayake, non in centro. Negombo e a 20 to 40 minuti dal terminal e va bene per arrivi tardi da Milano. Colombo citta richiede in genere  45 to 90 minuti. Confondere «aeroporto Sri Lanka» con il centro e l’errore classico della prima notte.',
      },
      {
        title: 'Cosa vedere in un giorno a Colombo',
        body: 'Un giro privato puo includere Galle Face Green, il museo nazionale, il tempio Gangaramaya, Pettah (con guida) e Fort. Dopo un volo notturno, hotel tranquillo e una passeggiata breve battono un giorno di musei carico.',
      },
    ],
    faq: [
      {
        q: 'Qual e la capitale dello Sri Lanka?',
        a: 'Sri Jayawardenepura Kotte e la capitale amministrativa. Colombo resta la citta d’arrivo dei voli internazionali e l’hub commerciale.',
      },
    ],
    ctaTitle: 'Iniziare o finire a Colombo con autista privato',
    ctaBody: 'Organizziamo il prelievo a CMB, una prima notte utile e la prosecuzione verso il Triangolo Culturale o la costa.',
    ctaLabel: 'Pianificare il transfer',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour 7 giorni' },
      { pageId: 'tour5', label: 'Tour 5 giorni' },
    ],
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideAirportTransfers', label: 'Transfer aeroporto' },
      { pageId: 'marketItaly', label: 'Viaggio dall’Italia' },
      { pageId: 'guideVisa', label: 'Visto / ETA' },
    ],
  },
  ru: {
    h1: 'Коломбо Шри Ланка: аэропорт CMB, столица и первая ночь',
    lead:
      'Почти все рейсы из России садятся в Коломбо. Аэропорт Бандаранайке (CMB) севернее, в Катунаяке. Административная столицаШри Джаяварденепура Котте; Коломбо остаётся коммерческими воротами. Одной ночи или дня в городе достаточно перед туром.',
    heroAlt: 'Коломбо и побережье Индийского океана, Шри Ланка',
    sections: [
      {
        title: 'Аэропорт Шри Ланки и город Коломбо',
        body: 'CMB в Катунаяке, не в центре. Коломбо шри ланка и шри ланка коломбо: коммерческие ворота. Аэропорт шри ланка / шри ланка аэропорт это Бандаранайке, не Котте. Негомбо 20–40 минут от терминала после Москвы.',
      },
      {
        title: 'Что успеть за день в Коломбо',
        body: 'Частный круг может включать Galle Face Green, национальный музей, храм Гангарамая, Петтах (с гидом) и Форт. После ночного рейса спокойный отель и короткая прогулка лучше перегруженного дня музеев.',
      },
    ],
    faq: [
      {
        q: 'Какая столица Шри Ланки?',
        a: 'Шри Джаяварденепура Котте административная столица шри ланка / шри ланка столица / столица шри ланки. Коломбо остаётся городом прилёта и деловым центром. На карте оба рядом на западном берегу.',
      },
    ],
    ctaTitle: 'Начать или закончить в Коломбо с частным водителем',
    ctaBody: 'Организуем встречу в CMB, разумную первую ночь и выезд в Культурный треугольник или на побережье.',
    ctaLabel: 'Спланировать трансфер',
    relatedTours: [
      { pageId: 'tour7', label: 'Тур 7 дней' },
      { pageId: 'tour5', label: 'Тур 5 дней' },
    ],
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Негомбо' },
      { pageId: 'destGalle', label: 'Галле' },
      { pageId: 'destKandy', label: 'Канди' },
    ],
    relatedGuides: [
      { pageId: 'guideAirportTransfers', label: 'Трансфер из аэропорта' },
      { pageId: 'marketRussia', label: 'Туры из России' },
      { pageId: 'guideVisa', label: 'Виза / ETA' },
    ],
  },
  nl: {
    h1: 'Colombo sri lanka: luchthaven CMB, stad en eerste nacht',
    lead:
      'Bijna alle vluchten vanuit Nederland landen in Colombo. Luchthaven colombo (CMB) ligt in Katunayake, niet in het centrum. Een nacht of een dag in de stad volstaat voor een prive rondreis.',
    heroAlt: 'Colombo en de Indische Oceaan, Sri Lanka',
    sections: [
      {
        title: 'Luchthaven sri lanka versus Colombo stad',
        body: 'CMB ligt in Katunayake. Negombo is 20 tot 40 minuten van de terminal na een late landing. Colombo stad is meestal 45 tot 90 minuten. Verwissel luchthaven colombo niet met het stadscentrum.',
      },
      {
        title: 'Wat te doen in een dag in Colombo',
        body: 'Een prive ronde kan Galle Face Green, het nationale museum, Gangaramaya, Pettah (met gids) en Fort omvatten. Na een nachtvlucht is een rustig hotel vaak beter dan een volle museumdag.',
      },
    ],
    faq: [
      {
        q: 'Waar is de luchthaven sri lanka ten opzichte van Colombo?',
        a: 'In Katunayake. Negombo is dichterbij CMB dan het centrum.',
      },
    ],
    ctaTitle: 'Begin of eindig in Colombo met prive chauffeur',
    ctaBody: 'Wij regelen ophalen in CMB, een zinnige eerste nacht en vertrek naar de Culturele Driehoek of de kust.',
    ctaLabel: 'Transfer plannen',
    relatedTours: [
      { pageId: 'tour7', label: 'Rondreis 7 dagen' },
      { pageId: 'tour5', label: 'Rondreis 5 dagen' },
    ],
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideAirportTransfers', label: 'Luchthaven transfer' },
      { pageId: 'marketNetherlands', label: 'Vakantie vanuit Nederland' },
      { pageId: 'guideVisa', label: 'Visum / ETA' },
    ],
  },
};
