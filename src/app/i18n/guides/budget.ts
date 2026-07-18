import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka budget travel guide (pageId: guideBudget).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const BUDGET_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Budget Travel Guide: Realistic Costs for a Private Trip',
    lead: 'Sri Lanka remains one of Asia’s better-value destinations, but “cheap” depends entirely on how you travel a private driver-guided round tour sits in a different cost bracket from backpacker buses, and knowing where money actually goes helps you plan without unpleasant surprises.',
    heroImage: 'assets/img/mainpage/4.webp',
    heroAlt: 'Budget travel planning notes and map for a Sri Lanka trip',
    sections: [
      {
        id: 'dailyCosts',
        title: 'What a day in Sri Lanka really costs',
        body: 'A mid-range private trip typically lands around USD 80–150 per person per day when accommodation, meals, a shared private driver and main entrance fees are averaged across a week. Budget travellers eating local and staying in simple guesthouses can keep food and lodging under USD 40–50 a day, but transport and park tickets still add up.\n\nLuxury lodge stays, spa hotels in the hill country and exclusive safari camps push daily totals well above USD 250. The useful figure is not a single “average”is the mix of transport style, hotel standard and how many ticketed sites you visit.',
      },
      {
        id: 'transportCosts',
        title: 'Transport: the line item that reshapes the budget',
        body: 'Public buses and trains are inexpensive, but they consume time and limit how much of the island you can see comfortably in a week. A private air-conditioned car with an English-speaking chauffeur-guide costs more per day, yet often works out sensibly when split between two to four people and when you factor in door-to-door timing, flexible stops and no luggage hassle.\n\nFuel, driver meals and overnight driver lodging are usually built into a tour quotation; confirm what is included so you are not comparing a “car only” rate with a full guided package.',
      },
      {
        id: 'foodLodging',
        title: 'Food and accommodation ranges',
        body: 'A filling rice-and-curry lunch at a local place often costs a few dollars; tourist-facing restaurants in Galle, Ella and beach towns charge more, especially for seafood and Western dishes. Breakfast is frequently included in guesthouse and hotel rates.\n\nClean double rooms start very affordably outside peak season; boutique villas and heritage hotels in Galle Fort or tea-country estates sit at the other end. December to March on the south and west coasts is when prices rise fastestook early or shift dates if flexibility exists.',
      },
      {
        id: 'ticketsFees',
        title: 'Entrance fees and experiences that add up',
        body: 'Foreign visitor tickets at Sigiriya, the Temple of the Tooth, Dambulla’s caves and major national parks are priced separately from local rates and are among the more noticeable cash outlays on a cultural or wildlife itinerary. Yala and similar safari parks also involve jeep hire on top of the park fee.\n\nWhale watching, cookery classes, train seat reservations on the scenic hill-country line and optional activities should be listed in your trip budget so the daily average stays honest.',
      },
      {
        id: 'moneyTips',
        title: 'Cash, cards and practical money tips',
        body: 'ATMs are widespread in towns and tourist areas; smaller villages and some rural hotels still prefer cash in Sri Lankan rupees. Major cards work at many hotels and larger restaurants, but smaller eateries and tip boxes often do not.\n\nCarry a mix of cash and card, keep a small float for tips and temple donations, and avoid exchanging large amounts at the worst airport rates if you can wait for a bank or reputable exchanger in Colombo or Negombo.',
      },
      {
        id: 'valueChoices',
        title: 'Where spending more (or less) actually helps',
        body: 'Spending on a reliable private driver and mid-range hotels with good reviews usually improves the trip more than upgrading every meal. Cutting corners on safari jeep quality or rushing UNESCO sites to save a day often costs more in disappointment than it saves in cash.\n\nShoulder-season travel, sharing a vehicle among three or four, and combining nearby sights in one day (Sigiriya with Dambulla, for example) are the cleanest ways to protect value without stripping the itinerary bare.',
      },
    ],
    faq: [
      {
        q: 'Is Sri Lanka expensive for tourists?',
        a: 'It is mid-range by South Asian standards: local food and simple lodging are inexpensive, while foreign entrance fees, private transport and peak-season beach hotels raise the total. A clear itinerary quotation avoids most sticker shock.',
      },
      {
        q: 'How much cash should I bring to Sri Lanka?',
        a: 'Many travellers withdraw rupees from ATMs as needed and keep a modest USD or card backup. Plan cash for tips, small restaurants, markets and some entrance counters; hotels often take cards.',
      },
      {
        q: 'Is a private driver worth the cost on a budget?',
        a: 'For couples or small groups covering several regions in one week, a shared private car often costs less per person than the time and taxi hops of public transport, while giving far more flexibility.',
      },
      {
        q: 'What is the biggest unexpected cost on a Sri Lanka trip?',
        a: 'Entrance fees for foreigners at major cultural sites and national parks, plus safari jeep hire, are the costs visitors most often underestimate when they only budget for hotels and meals.',
      },
      {
        q: 'When are hotels cheapest in Sri Lanka?',
        a: 'Outside December–March on the south and west coasts, and away from major holidays, rates soften. East-coast peak timing differs, so match your beach region to the season for better value.',
      },
    ],
    ctaTitle: 'Get a clear quote for your dates',
    ctaBody: 'Tell us your travel window, group size and pace we will outline a private itinerary with transparent inclusions so you know what you are paying for before you book.',
    ctaLabel: 'Request a trip quote',
    relatedTours: [
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Private Driver Guide' },
      { pageId: 'guideFood', label: 'Sri Lanka Food Guide' },
    ],
  },

  de: {
    h1: 'Sri Lanka Budgetreise-Ratgeber: realistische Kosten für eine Privatreise',
    lead: 'Sri Lanka gehört weiterhin zu Asiens lohnenden Reisezielen – aber „günstig“ hängt ganz davon ab, wie Sie reisen. Eine private Rundreise mit Fahrer-Guide liegt in einer anderen Preisklasse als Rucksackbusse; wer weiß, wohin das Geld wirklich fließt, plant ohne böse Überraschungen.',
    heroAlt: 'Notizen und Karte zur Budgetplanung für eine Sri-Lanka-Reise',
    sections: [
      {
        title: 'Was ein Tag in Sri Lanka wirklich kostet',
        body: 'Eine private Reise der Mittelklasse liegt typischerweise bei etwa 80–150 USD pro Person und Tag, wenn Unterkunft, Mahlzeiten, ein geteilter Privatfahrer und wichtige Eintritte über eine Woche gemittelt werden. Budgetreisende mit lokaler Küche und einfachen Gästehäusern halten Essen und Übernachtung oft unter 40–50 USD täglich – Transport und Parktickets summieren sich dennoch.\n\nLuxuslodges, Spa-Hotels im Bergland und exklusive Safaricamps treiben die Tageskosten deutlich über 250 USD. Entscheidend ist nicht ein einzelner „Durchschnitt“, sondern die Mischung aus Transportart, Hotelstandard und der Zahl kostenpflichtiger Sehenswürdigkeiten.',
      },
      {
        title: 'Transport: der Posten, der das Budget prägt',
        body: 'Öffentliche Busse und Züge sind günstig, kosten aber Zeit und begrenzen, wie viel Insel Sie in einer Woche entspannt sehen. Ein privates Klimafahrzeug mit englischsprachigem Fahrer-Guide kostet mehr pro Tag, rechnet sich aber oft sinnvoll bei zwei bis vier Personen – inklusive direkter Verbindungen, flexibler Stopps und ohne Gepäckstress.\n\nKraftstoff, Fahrermahlzeiten und Übernachtung des Fahrers sind meist in Tourangeboten enthalten; klären Sie die Leistungen, damit Sie keinen „nur Auto“-Tarif mit einem Komplettpaket vergleichen.',
      },
      {
        title: 'Essen und Unterkunft im Überblick',
        body: 'Ein sättigendes Rice-and-Curry-Mittagessen kostet lokal oft nur wenige Dollar; touristische Restaurants in Galle, Ella und Strandorten verlangen mehr, besonders für Meeresfrüchte und westliche Gerichte. Frühstück ist in Gästehäusern und Hotels häufig inklusive.\n\nSaubere Doppelzimmer sind außerhalb der Hochsaison sehr erschwinglich; Boutique-Villen und Heritage-Hotels in Galle Fort oder Teeplantagen liegen am anderen Ende. Dezember bis März an Süd- und Westküste steigen die Preise am schnellsten – früh buchen oder Termine verschieben, wenn möglich.',
      },
      {
        title: 'Eintritte und Erlebnisse, die sich summieren',
        body: 'Ausländertickets für Sigiriya, den Zahntempel, die Höhlen von Dambulla und große Nationalparks sind getrennt von Einheimischenpreisen und gehören zu den spürbarsten Ausgaben einer Kultur- oder Wildtierreise. In Yala und ähnlichen Parks kommt zur Parkgebühr oft noch die Jeepmiete.\n\nWalbeobachtung, Kochkurse, Sitzplatzreservierungen im Panoramazug und optionale Aktivitäten gehören in Ihr Reisebudget, damit der Tagesdurchschnitt ehrlich bleibt.',
      },
      {
        title: 'Bargeld, Karten und praktische Geldtipps',
        body: 'Geldautomaten sind in Städten und Touristenorten verbreitet; kleinere Dörfer und manche Landhotels bevorzugen weiterhin Bargeld in sri-lankischen Rupien. Große Karten funktionieren in vielen Hotels und größeren Restaurants, in kleinen Imbissen und bei Trinkgeld oft nicht.\n\nNehmen Sie eine Mischung aus Bargeld und Karte mit, halten Sie etwas Reserve für Trinkgelder und Tempelspenden bereit, und wechseln Sie große Beträge möglichst nicht zu den schlechtesten Flughafen Kursen, wenn Sie auf eine Bank oder seriöse Wechselstube in Colombo oder Negombo warten können.',
      },
      {
        title: 'Wo mehr (oder weniger) Ausgeben wirklich hilft',
        body: 'Geld für einen zuverlässigen Privatfahrer und Mittelklasse-Hotels mit guten Bewertungen verbessert die Reise meist mehr als jedes Essen aufzuwerten. Bei der Safari-Jeep-Qualität oder dem Hetzen durch UNESCO-Stätten zu sparen kostet oft mehr Enttäuschung als Bargeld.\n\nReisen in der Zwischensaison, ein Fahrzeug zu dritt oder viert teilen und nahe gelegene Sehenswürdigkeiten an einem Tag kombinieren (etwa Sigiriya mit Dambulla) sind die saubersten Wege, Wert zu halten, ohne die Route auszudünnen.',
      },
    ],
    faq: [
      {
        q: 'Ist Sri Lanka teuer für Touristen?',
        a: 'Im südasiatischen Vergleich mittel: lokales Essen und einfache Unterkünfte sind günstig, Ausländereintritte, Privattransport und Strandhotels in der Hochsaison treiben die Summe. Ein klares Reiseangebot verhindert die meisten Preisschocks.',
      },
      {
        q: 'Wie viel Bargeld sollte ich nach Sri Lanka mitnehmen?',
        a: 'Viele Reisende heben bei Bedarf Rupien am Automaten ab und behalten eine bescheidene USD- oder Kartenreserve. Planen Sie Bargeld für Trinkgelder, kleine Restaurants, Märkte und manche Eintrittskassen; Hotels nehmen oft Karten.',
      },
      {
        q: 'Lohnt sich ein Privatfahrer auch im Budget?',
        a: 'Für Paare oder kleine Gruppen, die in einer Woche mehrere Regionen bereisen, kostet ein geteiltes Privatfahrzeug oft weniger pro Person als Zeit und Taxi-Hops des öffentlichen Verkehrs – bei deutlich mehr Flexibilität.',
      },
      {
        q: 'Was ist die größte unerwartete Kostenstelle?',
        a: 'Ausländereintritte an großen Kulturstätten und Nationalparks sowie Safari-Jeepmiete unterschätzen Besucher am häufigsten, wenn sie nur Hotels und Essen kalkulieren.',
      },
      {
        q: 'Wann sind Hotels in Sri Lanka am günstigsten?',
        a: 'Außerhalb von Dezember–März an Süd- und Westküste und abseits großer Feiertage sinken die Preise. Die Ostküsten-Hochsaison liegt anders – passen Sie Strandregion und Saison für besseren Wert an.',
      },
    ],
    ctaTitle: 'Holen Sie ein klares Angebot für Ihre Termine',
    ctaBody: 'Nennen Sie uns Reisezeitraum, Gruppengröße und Tempo – wir skizzieren eine private Route mit transparenten Leistungen, damit Sie vor der Buchung wissen, wofür Sie zahlen.',
    ctaLabel: 'Reiseangebot anfragen',
    relatedTours: [
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer-Ratgeber' },
      { pageId: 'guideFood', label: 'Sri Lanka Kulinarik-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide budget Sri Lanka : coûts réalistes pour un voyage privé',
    lead: 'Le Sri Lanka reste l’une des destinations les plus abordables d’Asie, mais « pas cher » dépend entièrement de votre façon de voyagern circuit privé avec chauffeur n’est pas dans la même fourchette qu’un trajet en bus de backpacker, et savoir où va vraiment l’argent évite les mauvaises surprises.',
    heroAlt: 'Notes et carte pour planifier un voyage au Sri Lanka avec un budget',
    sections: [
      {
        title: 'Ce que coûte vraiment une journée au Sri Lanka',
        body: 'Un voyage privé de standing moyen tourne souvent autour de 80 à 150 USD par personne et par jour lorsque l’hébergement, les repas, un chauffeur privé partagé et les principaux droits d’entrée sont moyennés sur une semaine. Les voyageurs économiques mangeant local et dormant en maisons d’hôtes simples peuvent garder nourriture et logement sous 40–50 USD par jour, mais transport et billets de parc s’additionnent.\n\nLodges de luxe, hôtels spa dans les hautes terres et camps safari exclusifs poussent le quotidien bien au-delà de 250 USD. Le chiffre utile n’est pas une seule « moyenne » c’est le mélange style de transport, standing d’hôtel et nombre de sites payants.',
      },
      {
        title: 'Transport : la ligne qui redessine le budget',
        body: 'Bus et trains publics sont peu coûteux, mais chronophages et limitent ce que vous voyez confortablement en une semaine. Une voiture climatisée privée avec chauffeur-guide anglophone coûte plus cher au jour, mais revient souvent raisonnable à deux à quatre personnes, avec horaires porte-à-porte, arrêts flexibles et sans bagages à porter.\n\nCarburant, repas du chauffeur et son hébergement sont souvent inclus dans un devis de circuit ; vérifiez ce qui est compris pour ne pas comparer un tarif « voiture seule » à un forfait complet.',
      },
      {
        title: 'Fourchettes nourriture et hébergement',
        body: 'Un déjeuner rice and curry copieux dans un établissement local coûte souvent quelques dollars ; les restaurants touristiques à Galle, Ella et sur les plages facturent plus, surtout fruits de mer et plats occidentaux. Le petit-déjeuner est fréquemment inclus.\n\nLes chambres doubles propres restent très abordables hors haute saison ; villas boutique et hôtels patrimoniaux à Galle Fort ou dans les domaines de thé sont à l’autre extrémité. Décembre à mars sur les côtes sud et ouest fait monter les prix le plus vite réservez tôt ou décalez les dates si possible.',
      },
      {
        title: 'Billets et expériences qui s’additionnent',
        body: 'Les tarifs visiteurs étrangers à Sigiriya, au Temple de la Dent, aux grottes de Dambulla et dans les grands parcs nationaux sont distincts des tarifs locaux et figurent parmi les sorties d’argent les plus visibles d’un circuit culturel ou nature. Yala et parcs similaires impliquent aussi la location de jeep en plus du droit d’entrée.\n\nObservation des baleines, cours de cuisine, réservations de train panoramique et activités optionnelles doivent figurer au budget pour garder une moyenne quotidienne honnête.',
      },
      {
        title: 'Espèces, cartes et conseils pratiques',
        body: 'Les distributeurs sont répandus en ville et zones touristiques ; villages plus petits et certains hôtels ruraux préfèrent encore les roupies en liquide. Les cartes majeures marchent dans beaucoup d’hôtels et grands restaurants, rarement dans les petites cantines et pour les pourboires.\n\nEmportez un mix espèces/carte, gardez une petite réserve pour pourboires et dons aux temples, et évitez de changer de gros montants aux pires taux d’aéroport si vous pouvez attendre une banque ou un changeur sérieux à Colombo ou Negombo.',
      },
      {
        title: 'Où dépenser plus (ou moins) aide vraiment',
        body: 'Investir dans un chauffeur fiable et des hôtels milieu de gamme bien notés améliore souvent plus le voyage que d’upgrader chaque repas. Économiser sur la qualité du jeep safari ou bâcler les sites UNESCO pour gagner une journée coûte souvent plus en déception qu’en argent.\n\nVoyager en intersaison, partager un véhicule à trois ou quatre, et combiner des sites proches le même jour (Sigiriya et Dambulla, par exemple) sont les moyens les plus propres de préserver la valeur sans vider l’itinéraire.',
      },
    ],
    faq: [
      {
        q: 'Le Sri Lanka est-il cher pour les touristes ?',
        a: 'C’est du milieu de gamme en Asie du Sud : nourriture locale et hébergement simple sont abordables, tandis que droits d’entrée étrangers, transport privé et hôtels de plage en haute saison font monter le total. Un devis clair évite la plupart des surprises.',
      },
      {
        q: 'Combien d’espèces emporter au Sri Lanka ?',
        a: 'Beaucoup retirent des roupies aux distributeurs selon les besoins et gardent une réserve modeste en USD ou carte. Prévoyez du liquide pour pourboires, petits restaurants, marchés et certains guichets ; les hôtels prennent souvent la carte.',
      },
      {
        q: 'Un chauffeur privé vaut-il le coût en mode budget ?',
        a: 'Pour un couple ou un petit groupe couvrant plusieurs régions en une semaine, une voiture privée partagée coûte souvent moins par personne que le temps et les taxis du transport public, avec bien plus de flexibilité.',
      },
      {
        q: 'Quelle est la plus grande dépense imprévue ?',
        a: 'Les droits d’entrée étrangers sur les grands sites culturels et parcs nationaux, plus la location de jeep safari, sont ce que les visiteurs sous-estiment le plus en ne budgétant que hôtels et repas.',
      },
      {
        q: 'Quand les hôtels sont-ils les moins chers ?',
        a: 'Hors décembre–mars sur les côtes sud et ouest, et hors grandes fêtes, les tarifs baissent. Le pic de la côte est diffère alignez région balnéaire et saison pour un meilleur rapport qualité-prix.',
      },
    ],
    ctaTitle: 'Obtenez un devis clair pour vos dates',
    ctaBody: 'Indiquez-nous votre période, la taille du groupe et le rythme souhaité nous tracerons un itinéraire privé avec inclusions transparentes avant toute réservation.',
    ctaLabel: 'Demander un devis',
    relatedTours: [
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur privé' },
      { pageId: 'guideFood', label: 'Guide gastronomique du Sri Lanka' },
    ],
  },

  it: {
    h1: 'Guida budget Sri Lanka: costi realistici per un viaggio privato',
    lead: 'Lo Sri Lanka resta una delle destinazioni asiatiche dal miglior rapporto qualità-prezzo, ma “economico” dipende del tutto da come viaggiate un tour privato con autista non è nella stessa fascia dei bus da backpacker, e sapere dove finiscono davvero i soldi evita sorprese.',
    heroAlt: 'Appunti e mappa per pianificare un viaggio in Sri Lanka con budget',
    sections: [
      {
        title: 'Quanto costa davvero un giorno in Sri Lanka',
        body: 'Un viaggio privato di fascia media si aggira tipicamente sui 80–150 USD a persona al giorno quando alloggio, pasti, autista privato condiviso e principali biglietti d’ingresso sono medi su una settimana. Chi viaggia low-cost mangiando locale e dormendo in guest house semplici può tenere cibo e letto sotto i 40–50 USD al giorno, ma trasporti e ticket dei parchi si sommano.\n\nLodge di lusso, hotel spa nell’entroterra collinare e camp safari esclusivi spingono il quotidiano ben oltre i 250 USD. La cifra utile non è una sola “media” è il mix di stile di trasporto, standard alberghiero e quanti siti a pagamento visitate.',
      },
      {
        title: 'Trasporti: la voce che ridisegna il budget',
        body: 'Bus e treni pubblici costano poco, ma consumano tempo e limitano quanto dell’isola vedete con agio in una settimana. Un’auto privata climatizzata con autista-guida anglofono costa di più al giorno, ma spesso conviene a due-quattro persone, con tempi porta a porta, soste flessibili e senza bagagli da gestire.\n\nCarburante, pasti dell’autista e suo pernottamento di solito sono nel preventivo del tour; verificate cosa è incluso per non confrontare una tariffa “solo auto” con un pacchetto completo.',
      },
      {
        title: 'Fasce cibo e alloggio',
        body: 'Un pranzo rice and curry sostanzioso in un locale tipico costa spesso pochi dollari; i ristoranti turistici a Galle, Ella e nelle località balneari chiedono di più, soprattutto per seafood e piatti occidentali. La colazione è spesso inclusa.\n\nCamere doppie pulite restano molto accessibili fuori alta stagione; ville boutique e hotel heritage a Galle Fort o nelle piantagioni di tè sono all’altro estremo. Dicembre–marzo sulle coste sud e ovest è quando i prezzi salgono più in fretta prenotate presto o spostate le date se potete.',
      },
      {
        title: 'Biglietti ed esperienze che si accumulano',
        body: 'I ticket per stranieri a Sigiriya, al Tempio del Dente, alle grotte di Dambulla e nei grandi parchi nazionali sono distinti dai tariffe locali e tra le uscite di cassa più evidenti di un itinerario culturale o wildlife. Yala e parchi simili richiedono anche il noleggio del jeep oltre al biglietto del parco.\n\nWhale watching, corsi di cucina, prenotazioni sul treno panoramico e attività opzionali vanno nel budget di viaggio perché la media giornaliera resti onesta.',
      },
      {
        title: 'Contanti, carte e consigli pratici',
        body: 'Gli ATM sono diffusi in città e zone turistiche; villaggi più piccoli e alcuni hotel rurali preferiscono ancora contanti in rupie. Le principali carte funzionano in molti hotel e ristoranti grandi, raramente nelle piccole trattorie e per le mance.\n\nPortate un mix contanti/carta, tenete una piccola scorta per mance e offerte ai templi, ed evitate di cambiare grosse somme ai peggiori tassi aeroportuali se potete aspettare una banca o un cambio affidabile a Colombo o Negombo.',
      },
      {
        title: 'Dove spendere di più (o di meno) aiuta davvero',
        body: 'Investire in un autista affidabile e hotel mid-range con buone recensioni migliora di solito il viaggio più che alzare ogni pasto. Risparmiare sulla qualità del jeep safari o correre i siti UNESCO per guadagnare un giorno costa spesso più delusione che denaro.\n\nViaggiare in mezza stagione, condividere il veicolo in tre o quattro e combinare siti vicini in un giorno (Sigiriya con Dambulla, ad esempio) sono i modi più puliti per tutelare il valore senza svuotare l’itinerario.',
      },
    ],
    faq: [
      {
        q: 'Lo Sri Lanka è caro per i turisti?',
        a: 'È di fascia media nel Sud Asia: cibo locale e alloggi semplici costano poco, mentre biglietti per stranieri, trasporto privato e hotel balneari in alta stagione alzano il totale. Un preventivo chiaro evita la maggior parte delle sorprese.',
      },
      {
        q: 'Quanti contanti portare in Sri Lanka?',
        a: 'Molti prelevano rupie dagli ATM secondo necessità e tengono una riserva modesta in USD o carta. Prevedete contanti per mance, piccoli ristoranti, mercati e alcuni sportelli; gli hotel spesso accettano carte.',
      },
      {
        q: 'Un autista privato conviene anche in budget?',
        a: 'Per coppie o piccoli gruppi che coprono più regioni in una settimana, un’auto privata condivisa costa spesso meno a persona del tempo e dei taxi del trasporto pubblico, con molta più flessibilità.',
      },
      {
        q: 'Qual è il costo imprevisto più grande?',
        a: 'I biglietti per stranieri nei grandi siti culturali e parchi nazionali, più il noleggio del jeep safari, sono ciò che i visitatori sottostimano di più se calcolano solo hotel e pasti.',
      },
      {
        q: 'Quando gli hotel sono più economici?',
        a: 'Fuori da dicembre–marzo sulle coste sud e ovest, e lontano dalle grandi festività, le tariffe scendono. Il picco della costa est è diverso allineate regione balneare e stagione per un miglior valore.',
      },
    ],
    ctaTitle: 'Ricevete un preventivo chiaro per le vostre date',
    ctaBody: 'Indicaci periodo, numero di persone e ritmo tracceremo un itinerario privato con inclusioni trasparenti prima della prenotazione.',
    ctaLabel: 'Richiedi un preventivo',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Guida all’autista privato' },
      { pageId: 'guideFood', label: 'Guida gastronomica dello Sri Lanka' },
    ],
  },

  es: {
    h1: 'Guía de presupuesto Sri Lanka: costes reales de un viaje privado',
    lead: 'Sri Lanka sigue siendo uno de los destinos asiáticos con mejor relación calidad-precio, pero “barato” depende por completo de cómo viajen un circuito privado con chófer no está en el mismo tramo que los buses de mochilero, y saber adónde va el dinero evita sorpresas.',
    heroAlt: 'Notas y mapa para planificar un viaje a Sri Lanka con presupuesto',
    sections: [
      {
        title: 'Lo que cuesta de verdad un día en Sri Lanka',
        body: 'Un viaje privado de gama media suele situarse en torno a 80–150 USD por persona y día cuando alojamiento, comidas, chófer privado compartido y las principales entradas se promedian en una semana. Quien viaja con presupuesto comiendo local y en pensiones sencillas puede mantener comida y cama bajo 40–50 USD al día, pero transporte y tickets de parque suman.\n\nLodges de lujo, hoteles spa en la zona de té y campamentos safari exclusivos empujan el diario muy por encima de 250 USD. La cifra útil no es un solo “promedio” es la mezcla de transporte, estándar hotelero y cuántos sitios de pago visitan.',
      },
      {
        title: 'Transporte: la partida que redefine el presupuesto',
        body: 'Autobuses y trenes públicos son baratos, pero consumen tiempo y limitan cuánto ven con comodidad en una semana. Un coche privado con aire y chófer-guía anglófono cuesta más al día, pero a menudo sale razonable entre dos y cuatro personas, con tiempos puerta a puerta, paradas flexibles y sin líos de maletas.\n\nCombustible, comidas del chófer y su alojamiento suelen ir en el presupuesto del tour; confirmen qué está incluido para no comparar una tarifa “solo coche” con un paquete completo.',
      },
      {
        title: 'Rangos de comida y alojamiento',
        body: 'Un almuerzo rice and curry abundante en un local típico suele costar pocos dólares; los restaurantes turísticos en Galle, Ella y pueblos de playa cobran más, sobre todo marisco y platos occidentales. El desayuno suele estar incluido.\n\nHabitaciones dobles limpias siguen siendo muy asequibles fuera de temporada alta; villas boutique y hoteles patrimoniales en Galle Fort o fincas de té están en el otro extremo. Diciembre a marzo en las costas sur y oeste es cuando más suben los precios reserven pronto o muevan fechas si pueden.',
      },
      {
        title: 'Entradas y experiencias que suman',
        body: 'Los tickets para extranjeros en Sigiriya, el Templo del Diente, las cuevas de Dambulla y los grandes parques nacionales van aparte de las tarifas locales y son de los gastos más notables de un itinerario cultural o de fauna. Yala y parques similares también implican alquiler de jeep además de la entrada al parque.\n\nAvistamiento de ballenas, clases de cocina, reservas del tren panorámico y actividades opcionales deben entrar en el presupuesto para que el promedio diario sea honesto.',
      },
      {
        title: 'Efectivo, tarjetas y consejos prácticos',
        body: 'Hay cajeros en ciudades y zonas turísticas; pueblos pequeños y algunos hoteles rurales siguen prefiriendo efectivo en rupias. Las tarjetas principales funcionan en muchos hoteles y restaurantes grandes; en comedores pequeños y propinas, a menudo no.\n\nLleven mezcla de efectivo y tarjeta, una pequeña reserva para propinas y donativos en templos, y eviten cambiar grandes sumas a los peores tipos del aeropuerto si pueden esperar a un banco o casa de cambio seria en Colombo o Negombo.',
      },
      {
        title: 'Dónde gastar más (o menos) ayuda de verdad',
        body: 'Invertir en un chófer fiable y hoteles de gama media con buenas reseñas suele mejorar el viaje más que subir cada comida. Ahorrar en la calidad del jeep de safari o precipitar sitios UNESCO para ganar un día suele costar más decepción que dinero.\n\nViajar en temporada intermedia, compartir vehículo entre tres o cuatro y combinar sitios cercanos el mismo día (Sigiriya con Dambulla, por ejemplo) son las formas más limpias de proteger el valor sin vaciar el itinerario.',
      },
    ],
    faq: [
      {
        q: '¿Es caro Sri Lanka para turistas?',
        a: 'Es de gama media en el sur de Asia: comida local y alojamiento sencillo son baratos; entradas para extranjeros, transporte privado y hoteles de playa en temporada alta suben el total. Un presupuesto claro evita la mayoría de sorpresas.',
      },
      {
        q: '¿Cuánto efectivo llevar a Sri Lanka?',
        a: 'Muchos sacan rupias en cajeros según necesidad y guardan una reserva modesta en USD o tarjeta. Planifiquen efectivo para propinas, restaurantes pequeños, mercados y algunas taquillas; los hoteles suelen aceptar tarjeta.',
      },
      {
        q: '¿Compensa un chófer privado con presupuesto ajustado?',
        a: 'Para parejas o grupos pequeños que cubren varias regiones en una semana, un coche privado compartido suele costar menos por persona que el tiempo y los taxis del transporte público, con mucha más flexibilidad.',
      },
      {
        q: '¿Cuál es el gasto imprevisto más grande?',
        a: 'Las entradas para extranjeros en grandes sitios culturales y parques nacionales, más el alquiler del jeep de safari, son lo que más subestiman quienes solo presupuestan hoteles y comidas.',
      },
      {
        q: '¿Cuándo están más baratos los hoteles?',
        a: 'Fuera de diciembre–marzo en las costas sur y oeste, y lejos de fiestas importantes, bajan las tarifas. El pico de la costa este es distinto alineen región de playa y temporada para mejor valor.',
      },
    ],
    ctaTitle: 'Consigan un presupuesto claro para sus fechas',
    ctaBody: 'Cuéntenos ventana de viaje, tamaño del grupo y ritmo esbozaremos un itinerario privado con inclusiones transparentes antes de reservar.',
    ctaLabel: 'Solicitar presupuesto',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour de 5 días por Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Guía del chófer privado' },
      { pageId: 'guideFood', label: 'Guía gastronómica de Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Przewodnik budżetowy po Sri Lance: realne koszty prywatnej podróży',
    lead: 'Sri Lanka nadal należy do atrakcyjniejszych cenowo destynacji Azji, ale „tanio” zależy wyłącznie od sposobu podróżowania prywatny tour z kierowcą to inny przedział kosztów niż autobusy dla backpackerów, a wiedza, dokąd idą pieniądze, pozwala planować bez niespodzianek.',
    heroAlt: 'Notatki i mapa do planowania budżetu podróży na Sri Lankę',
    sections: [
      {
        title: 'Ile naprawdę kosztuje dzień na Sri Lance',
        body: 'Prywatna podróż w średnim standardzie to zwykle ok. 80–150 USD na osobę dziennie, gdy noclegi, posiłki, wspólny prywatny kierowca i główne bilety wstępu uśredni się w tygodniu. Podróżujący budżetowo, jedzący lokalnie i nocujący w prostych guesthouse’ach, często utrzymują jedzenie i nocleg poniżej 40–50 USD dziennie transport i bilety do parków i tak się sumują.\n\nLuksusowe lodge’e, hotele spa w kraju herbaty i ekskluzywne obozy safari windują dzień wyraźnie powyżej 250 USD. Przydatna nie jest jedna „średnia”, lecz mix stylu transportu, standardu hoteli i liczby płatnych atrakcji.',
      },
      {
        title: 'Transport: pozycja, która zmienia budżet',
        body: 'Autobusy i pociągi publiczne są tanie, ale zjadają czas i ograniczają, ile wyspy zobaczycie wygodnie w tydzień. Prywatny klimatyzowany samochód z anglojęzycznym kierowcą-przewodnikiem kosztuje więcej dziennie, lecz przy dwóch–czterech osobach często wychodzi rozsądnie z dojazdami door-to-door, elastycznymi postojami i bez kombinowania z bagażem.\n\nPaliwo, posiłki kierowcy i jego nocleg zwykle są w ofercie touru; upewnijcie się, co jest wliczone, by nie porównywać stawki „sam samochód” z pełnym pakietem.',
      },
      {
        title: 'Zakresy cen jedzenia i noclegów',
        body: 'Sycący lunch rice and curry w lokalnym miejscu często kosztuje kilka dolarów; restauracje turystyczne w Galle, Ella i nad plażami biorą więcej, zwłaszcza za owoce morza i dania zachodnie. Śniadanie bywa wliczone.\n\nCzyste pokoje dwuosobowe poza szczytem sezonu są bardzo przystępne; boutique’owe wille i hotele heritage w Galle Fort lub na herbacianych plantacjach to drugi biegun. Grudzień–marzec na południu i zachodzie to najszybszy wzrost cen rezerwujcie wcześnie lub przesuńcie terminy, jeśli możecie.',
      },
      {
        title: 'Bilety i atrakcje, które się sumują',
        body: 'Bilety dla cudzoziemców do Sigiriya, Świątyni Zęba, jaskiń Dambulli i dużych parków narodowych są osobne od stawek lokalnych i należą do najbardziej odczuwalnych wydatków trasy kulturowej lub przyrodniczej. Yala i podobne parki wymagają też wynajmu jeepa ponad opłatę wstępu.\n\nWhale watching, kursy gotowania, rezerwacje miejsc w panoramicznym pociągu i atrakcje opcjonalne powinny znaleźć się w budżecie, by średnia dzienna była uczciwa.',
      },
      {
        title: 'Gotówka, karty i praktyczne wskazówki',
        body: 'Bankomaty są powszechne w miastach i miejscowościach turystycznych; mniejsze wsie i niektóre hotele wiejskie wciąż wolą gotówkę w rupiach. Główne karty działają w wielu hotelach i większych restauracjach; w małych barach i przy napiwkach często nie.\n\nNoście mix gotówki i karty, trzymajcie drobną rezerwę na napiwki i datki w świątyniach, i unikajcie wymiany dużych kwot po najgorszych kursach na lotnisku, jeśli możecie poczekać na bank lub rzetelną kantor w Colombo albo Negombo.',
      },
      {
        title: 'Gdzie wydawać więcej (lub mniej) naprawdę pomaga',
        body: 'Wydatki na rzetelnego prywatnego kierowcę i hotele mid-range z dobrymi opiniami zwykle poprawiają podróż bardziej niż podnoszenie każdego posiłku. Oszczędzanie na jakości jeepa safari lub pędzenie przez obiekty UNESCO, by „zaoszczędzić dzień”, często kosztuje więcej rozczarowania niż gotówki.\n\nPodróż w sezonie przejściowym, dzielenie auta na trzy–cztery osoby i łączenie bliskich atrakcji jednego dnia (np. Sigiriya z Dambullą) to najczystsze sposoby chronić wartość bez ogołacania trasy.',
      },
    ],
    faq: [
      {
        q: 'Czy Sri Lanka jest droga dla turystów?',
        a: 'To średnia półka w Azji Południowej: lokalne jedzenie i proste noclegi są tanie, a bilety dla cudzoziemców, prywatny transport i hotele plażowe w szczycie sezonu podnoszą sumę. Jasna wycena ogranicza niespodzianki.',
      },
      {
        q: 'Ile gotówki zabrać na Sri Lankę?',
        a: 'Wielu wypłaca rupie z bankomatów w miarę potrzeb i trzyma skromną rezerwę w USD lub na karcie. Zaplanujcie gotówkę na napiwki, małe restauracje, targi i niektóre kasy; hotele często biorą karty.',
      },
      {
        q: 'Czy prywatny kierowca ma sens przy budżecie?',
        a: 'Dla par lub małych grup obejmujących kilka regionów w tydzień wspólne prywatne auto często wychodzi taniej na osobę niż czas i taksówki przy transporcie publicznym przy znacznie większej elastyczności.',
      },
      {
        q: 'Jaki jest największy nieoczekiwany koszt?',
        a: 'Bilety dla cudzoziemców do dużych obiektów kulturowych i parków narodowych oraz wynajem jeepa safari to koszty, które turyści najczęściej zaniżają, licząc tylko hotele i posiłki.',
      },
      {
        q: 'Kiedy hotele na Sri Lance są najtańsze?',
        a: 'Poza grudniem–marcem na południu i zachodzie oraz z dala od dużych świąt ceny spadają. Szczyt na wschodnim wybrzeżu wypada inaczej dopasujcie region plażowy do sezonu.',
      },
    ],
    ctaTitle: 'Uzyskajcie jasną wycenę na Wasze terminy',
    ctaBody: 'Podajcie okno podróży, liczbę osób i tempo naszkicujemy prywatną trasę z przejrzystymi składowymi przed rezerwacją.',
    ctaLabel: 'Poproś o wycenę',
    relatedTours: [
      { pageId: 'tour5', label: '5-dniowa wycieczka po Sri Lance' },
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnym kierowcy' },
      { pageId: 'guideFood', label: 'Przewodnik kulinarny po Sri Lance' },
    ],
  },

  ru: {
    h1: 'Бюджетный гид по Шри-Ланке: реальные расходы частной поездки',
    lead: 'Шри-Ланка по-прежнему одна из выгодных азиатских стран для путешествий, но «дёшево» зависит только от форматаастный тур с водителем и автобусы бэкпекеров это разные статьи бюджета; понимание, куда уходят деньги, помогает планировать без сюрпризов.',
    heroAlt: 'Заметки и карта для планирования бюджета поездки на Шри-Ланку',
    sections: [
      {
        title: 'Сколько на самом деле стоит день на Шри-Ланке',
        body: 'Частная поездка среднего уровня обычно укладывается примерно в 80–150 USD на человека в день, если усреднить жильё, еду, общего частного водителя и основные входные билеты за неделю. Бюджетные путешественники с местной кухней и простыми гестхаусами часто держат еду и ночёвку ниже 40–50 USD в деньранспорт и билеты в парки всё равно суммируются.\n\nЛюксовые лоджи, спа-отели в чайном крае и эксклюзивные сафари-кемпы поднимают сутки заметно выше 250 USD. Полезна не одна «средняя», а сочетание транспорта, уровня отелей и числа платных объектов.',
      },
      {
        title: 'Транспорт: строка, которая меняет бюджет',
        body: 'Общественные автобусы и поезда недороги, но съедают время и ограничивают, сколько острова вы увидите комфортно за неделю. Частный кондиционированный автомобиль с англоязычным водителем-гидом дороже в сутки, но при двух–четырёх людях часто выходит разумно доставкой door-to-door, гибкими остановками и без возни с багажом.\n\nТопливо, питание водителя и его ночёвка обычно входят в коммерческое предложение тура; уточняйте состав, чтобы не сравнивать тариф «только машина» с полным пакетом.',
      },
      {
        title: 'Диапазоны цен на еду и жильё',
        body: 'Сытный обед rice and curry в местном заведении часто стоит несколько долларов; туристические рестораны в Галле, Элле и на пляжах берут больше, особенно за морепродукты и западные блюда. Завтрак нередко включён.\n\nЧистые двухместные номера вне пика сезона очень доступны; бутик-виллы и heritage-отели в форте Галле или на чайных плантацияхругой полюс. Декабрь–март на юге и западеамый быстрый рост цен: бронируйте заранее или сдвигайте даты, если можете.',
      },
      {
        title: 'Билеты и впечатления, которые суммируются',
        body: 'Иностранные тарифы в Сигирии, Храме Зуба, пещерах Дамбуллы и крупных нацпарках отделены от местных и входят в самые заметные траты культурного или природного маршрута. Яла и похожие парки требуют также аренды джипа сверх входного сбора.\n\nНаблюдение за китами, кулинарные классы, места в панорамном поезде и опции стоит закладывать в бюджет, чтобы дневная средняя оставалась честной.',
      },
      {
        title: 'Наличные, карты и практические советы',
        body: 'Банкоматы распространены в городах и турзонах; в небольших деревнях и части сельских отелей по-прежнему предпочитают наличные в рупиях. Крупные карты работают во многих отелях и больших ресторанах; в мелких едальнях и на чаевые часто нет.\n\nБерите смесь наличных и карты, держите небольшой запас на чаевые и пожертвования в храмах и не меняйте крупные суммы по худшим аэропортовым курсам, если можете подождать банк или надёжный обмен в Коломбо или Негомбо.',
      },
      {
        title: 'Где тратить больше (или меньше) действительно помогает',
        body: 'Вложения в надёжного частного водителя и отели mid-range с хорошими отзывами обычно улучшают поездку сильнее, чем апгрейд каждого ужина. Экономия на качестве сафари-джипа или гонка по объектам ЮНЕСКО «ради лишнего дня» чаще стоит разочарования, а не денег.\n\nМежсезонье, делёж машины на троих–четверых и объединение близких объектов в один день (Сигирия с Дамбуллой)амые чистые способы сохранить ценность без обеднения маршрута.',
      },
    ],
    faq: [
      {
        q: 'Дорогая ли Шри-Ланка для туристов?',
        a: 'Это средний сегмент Южной Азии: местная еда и простое жильё недороги, а иностранные входные, частный транспорт и пляжные отели в пик сезона поднимают итог. Прозрачная смета убирает большинство сюрпризов.',
      },
      {
        q: 'Сколько наличных брать на Шри-Ланку?',
        a: 'Многие снимают рупии в банкоматах по необходимости и держат скромный запас в USD или на карте. Заложите наличные на чаевые, мелкие кафе, рынки и часть касс; отели часто принимают карты.',
      },
      {
        q: 'Имеет ли смысл частный водитель при бюджете?',
        a: 'Для пары или небольшой группы, охватывающей несколько регионов за неделю, общий частный авто часто выходит дешевле на человека, чем время и такси общественного транспорта при куда большей гибкости.',
      },
      {
        q: 'Какая самая большая неожиданная статья расходов?',
        a: 'Иностранные билеты на крупные культурные объекты и в нацпарки плюс аренда сафари-джипа то, что чаще всего занижают, считая только отели и еду.',
      },
      {
        q: 'Когда отели на Шри-Ланке дешевле всего?',
        a: 'Вне декабря–марта на юге и западе и вдали от крупных праздников тарифы мягче. Пик на восточном побережье другой стыкуйте пляжный регион с сезоном.',
      },
    ],
    ctaTitle: 'Получите прозрачную смету на ваши даты',
    ctaBody: 'Назовите окно поездки, размер группы и темп набросаем частный маршрут с понятными включениями до бронирования.',
    ctaLabel: 'Запросить расчёт',
    relatedTours: [
      { pageId: 'tour5', label: '5-дневный тур по Шри-Ланке' },
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Элла' },
      { pageId: 'destGalle', label: 'Галле' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Гид по частному водителю' },
      { pageId: 'guideFood', label: 'Гид по еде Шри-Ланки' },
    ],
  },
};
