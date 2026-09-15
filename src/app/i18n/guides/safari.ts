import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka safari guide (pageId: guideSafari).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const SAFARI_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Safari: Jeeps, National Parks and What to Expect on Game Drives',
    lead: 'A Sri Lanka safari is a jeep game drive through national parks, not the open-bush format of East Africa. Understanding how bookings work, which park fits your dates and what a morning drive realistically delivers will save you from disappointment and from paying twice for the same muddy track.',
    heroImage: 'assets/img/5daysTours/33.webp',
    heroAlt: 'Open safari jeep on a game drive in a Sri Lankan national park',
    sections: [
      {
        id: 'howSafarisWork',
        title: 'How safaris actually work in Sri Lanka',
        body: 'Every visitor needs a park entrance ticket, a registered safari jeep and in most parks a tracker from the wildlife department who joins the vehicle at the gate. Your driver guide handles timing and driving; the tracker reads tracks and coordinates with other jeeps on sightings. Drives typically last three to four hours; full day options exist in some parks but are tiring and rarely better for leopards.\n\nYou cannot self drive inside major parks. The jeep, driver and tracker are booked as a package, either through your tour operator or directly with a licensed safari company near the park entrance.',
      },
      {
        id: 'jeepBooking',
        title: 'Booking jeeps: through your tour or at the gate',
        body: 'The cleanest approach on a private round tour is to let your chauffeur company reserve the jeep, entrance slots and preferred drive time when they build the itinerary especially for Yala, where morning entry queues can be long in peak season. Last minute jeeps at the gate are sometimes available but quality varies wildly.\n\nAsk whether the quoted rate includes park fees, tracker tips and VAT. Cheaper online rates often exclude the foreign visitor ticket, which is paid separately at the counter in US dollars or rupees. Shared jeeps (joining strangers) cut cost but remove flexibility on stops and time at sightings.',
      },
      {
        id: 'parkComparison',
        title: 'Yala vs Udawalawe vs Wilpattu vs Minneriya',
        body: 'Yala Block I: leopards, crocodiles, varied scenery the busiest park and the one most sensitive to crowds and annual closure (usually around September). Udawalawe: open grassland optimised for elephants; easier with young children and shorter transfers from the south coast. Wilpattu: forest lakes, leopards and sloth bears with fewer jeeps but longer, slower drives. Minneriya/Kaudulla: seasonal elephant gatherings near Sigiriya superb when water levels are right, quiet otherwise.\n\nOne park per region per trip is enough for most travellers. Stacking Yala and Udawalawe back to back only makes sense if wildlife is the main focus of the holiday.',
      },
      {
        id: 'driveTiming',
        title: 'Morning vs evening drives',
        body: 'Morning drives (entry from roughly 6:00 to 6:30) are cooler, better lit for photography and statistically stronger for leopard movement before midday heat. Evening drives catch elephants heading to water and dramatic light, but dust, lower contrast and tired animals after a hot day can make photography harder.\n\nMany visitors do one morning drive only; two drives on consecutive days beat one marathon session. Full day packages sound comprehensive but involve long idle periods leopards are rarely active at noon.',
      },
      {
        id: 'whatToBring',
        title: 'What to pack and wear on a game drive',
        body: 'Neutral colours (khaki, olive, grey) help; bright white and neon stand out and attract dust. Layer up open jeeps are cold at dawn and hot by 10:00. Binoculars matter more than a long zoom lens; a rain cover for gear helps in sudden showers.\n\nSunscreen, hat, insect repellent and a dust mask or buff are underrated. Toilets are scarce inside parks use facilities at the gate before entry. Plastic bags are restricted; carry water in reusable bottles.',
      },
      {
        id: 'expectations',
        title: 'Realistic expectations and etiquette',
        body: 'A safari is not a zoo guarantee. You may see elephants, deer, crocodiles and peacocks on every drive and still miss a leopard that is normal. Drivers who race between sightings or block animal paths create stress for wildlife and a worse experience for everyone; politely ask to hang back if your jeep is behaving badly.\n\nTip the tracker separately if they added real value. Review your photos and memories, not just checklist species Sri Lanka’s parks reward patience over a single Instagram moment.',
      },
    ],
    faq: [
      {
        q: 'Do I need to book Yala safari in advance?',
        a: 'Yes, during peak season (especially December to March and July to August weekends). Your tour operator or a licensed safari company should reserve jeep and entry slot; walk up availability exists off peak but is not reliable.',
      },
      {
        q: 'How much does a safari jeep cost in Sri Lanka?',
        a: 'Prices vary by park and season; expect the jeep package plus a separate foreign visitor park ticket. Shared jeeps cost less per seat; private jeeps give full control of timing and stops.',
      },
      {
        q: 'Is Yala or Udawalawe better?',
        a: 'Yala for leopards and habitat variety; Udawalawe for reliable elephant sightings and a gentler, more open landscape. Many itineraries include one, not both, unless wildlife is the primary focus.',
      },
      {
        q: 'Can children join a safari in Sri Lanka?',
        a: 'Yes Udawalawe and Minneriya are often easier than long, bumpy Yala drives. Bring snacks, sun protection and realistic expectations about early starts and toilet breaks.',
      },
      {
        q: 'What time should we start a morning safari?',
        a: 'Be at the park gate around 5:45 to 6:00 for the first entry wave. Later starts mean more jeeps ahead of you on popular leopard routes.',
      },
    ],
    ctaTitle: 'We handle jeep bookings on your route',
    ctaBody: 'Our private tours include coordinated park entries, reputable jeep partners and sensible drive timing so safari day fits smoothly between culture, hills and coast.',
    ctaLabel: 'Plan a safari day',
    relatedTours: [
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
      { pageId: 'tour8', label: '8 Day Sri Lanka Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala National Park' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Sri Lanka Wildlife Guide' },
      { pageId: 'guideBestTime', label: 'Best Time to Visit Sri Lanka' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packing Guide' },
    ],
  },

  de: {
    h1: 'Sri Lanka Safari Ratgeber: Jeeps, Parks und was Sie bei Game Drives erwartet',
    lead: 'Safaris in Sri Lanka sind Jeep Pirschfahrten durch Nationalparksicht das offene Busch Format Ostafrikas. Wer Buchung, passenden Park und realistische Morgenerlebnisse versteht, spart Enttauschung und doppelte Kosten fur dieselbe staubige Piste.',
    heroAlt: 'Offener Safari Jeep auf Pirschfahrt in einem srilankischen Nationalpark',
    sections: [
      {
        title: 'So funktionieren Safaris in Sri Lanka wirklich',
        body: 'Jeder Besucher braucht Parkticket, registrierten Safari Jeep und in den meisten Parks einen Tracker der Wildschutzbehorde am Tor. Ihr Fahrer Guide steuert Timing und Fahrt; der Tracker liest Spuren und koordiniert Sichtungen. Fahrten dauern typisch drei bis vier Stunden; Ganztagesoptionen gibt es, sind aber anstrengend und selten besser fur Leoparden.\n\nSelbstfahren in grossen Parks ist nicht erlaubt. Jeep, Fahrer und Tracker werden als Paket gebucht uber Ihren Reiseveranstalter oder lizenzierte Safari Firmen am Parkeingang.',
      },
      {
        title: 'Jeep buchen: uber die Tour oder am Tor',
        body: 'Auf einer privaten Rundreise ist es am saubersten, wenn Ihre Chauffeur Firma Jeep, Einlass und Wunschzeit mitplant besonders in Yala, wo morgens in der Hochsaison Schlangen entstehen. Last Minute Jeeps am Tor gibt es manchmal, Qualitat schwankt stark.\n\nFragen Sie, ob Parkgebuhr, Tracker Trinkgeld und MwSt. enthalten sind. Gunstige Onlinepreise schliessen oft das Auslanderticket aus, das separat am Schalter gezahlt wird. Geteilte Jeeps sparen Geld, aber nicht Flexibilitat.',
      },
      {
        title: 'Yala vs Udawalawe vs Wilpattu vs Minneriya',
        body: 'Yala Block I: Leoparden, Krokodile, abwechslungsreiche Landschaftelebtester Park, empfindlich gegenuber Andrang und jahrlicher Schliessung (meist um September). Udawalawe: offenes Grasland fur Elefanten; kinderfreundlicher, kurzere Anfahrt von der Sudkuste. Wilpattu: Waldseen, Leoparden und Lippenbaren mit weniger Jeeps, aber langsameren Fahrten. Minneriya/Kaudulla: saisonale Elefantenversammlungen nahe Sigiriya grandios bei passendem Wasserstand.\n\nEin Park pro Region reicht den meisten Reisenden. Yala und Udawalawe direkt hintereinander lohnt nur, wenn Wildtiere im Mittelpunkt stehen.',
      },
      {
        title: 'Morgen- vs Abendfahrten',
        body: 'Morgenfahrten (Einlass ab ca. 6:00 to 6:30) sind kuhler, fotografisch besser beleuchtet und statistisch starker fur Leoparden vor der Mittagshitze. Abendfahrten treffen Elefanten am Wasser und bieten dramatisches Licht aber Staub und Mudigkeit nach heissem Tag erschweren Fotos.\n\nViele Gaste fahren nur einmal morgens; zwei Fahrten an aufeinanderfolgenden Tagen schlagen eine Marathon Session. Ganztagespakete klingen umfassend, bringen aber lange Leerlaufphasen Leoparden sind mittags selten aktiv.',
      },
      {
        title: 'Was Sie zur Pirschfahrt mitnehmen sollten',
        body: 'Neutrale Farben (Khaki, Olive, Grau) helfen; knalliges Weiss zieht Staub an. Schichten kleiden offene Jeeps sind morgens kalt und gegen 10:00 heiss. Fernglas schlagt oft ein langes Tele; Regenschutz fur die Kamera hilft bei Schauern.\n\nSonnencreme, Hut, Muckenschutz und Staubmaske sind unterschatzt. Toiletten im Park sind rar vor dem Tor nutzen. Plastiktuten sind eingeschrankt; Wasser in Mehrwegflaschen mitbringen.',
      },
      {
        title: 'Realistische Erwartungen und Etikette',
        body: 'Safari ist kein Zoo Garantie. Elefanten, Hirsche, Krokodile und Pfauen sind haufig ein Leopard kann trotzdem ausbleiben, das ist normal. Fahrer, die hetzen oder Tiere blockieren, stressen Wildtiere und andere Gaste; hoflich bitten, Abstand zu halten.\n\nTracker separat trinkgelden, wenn sie echten Mehrwert boten. Erinnerungen zahlen mehr als eine Spezies Checkliste Sri Lankas Parks belohnen Geduld.',
      },
    ],
    faq: [
      {
        q: 'Muss ich Yala Safari im Voraus buchen?',
        a: 'Ja, in der Hochsaison (besonders Dezember to Marz und Wochenenden im Juli/August). Ihr Veranstalter oder lizenzierte Safari Firma sollte Jeep und Einlass reservieren; spontan geht off season manchmal, ist aber unzuverlassig.',
      },
      {
        q: 'Was kostet ein Safari Jeep?',
        a: 'Preise variieren nach Park und Saison; Jeep Paket plus separates Auslanderticket. Geteilte Jeeps pro Sitz gunstiger; private Jeeps volle Kontrolle uber Zeit und Stopps.',
      },
      {
        q: 'Yala oder Udawalawe was ist besser?',
        a: 'Yala fur Leoparden und Vielfalt; Udawalawe fur verlassliche Elefanten und sanfteres Gelande. Die meisten Routen wahlen einen Park, nicht beide.',
      },
      {
        q: 'Konnen Kinder mit auf Safari?',
        a: 'Ja Udawalawe und Minneriya sind oft einfacher als lange, holprige Yala Fahrten. Snacks, Sonnenschutz und realistische Erwartungen an fruhe Starts helfen.',
      },
      {
        q: 'Wann sollte die Morgensafari starten?',
        a: 'Am Parktor gegen 5:45 to 6:00 fur die erste Einlasswelle. Spater heisst mehr Jeeps vor Ihnen auf beliebten Leopardrouten.',
      },
    ],
    ctaTitle: 'Wir ubernehmen Jeep Buchungen auf Ihrer Route',
    ctaBody: 'Unsere privaten Touren koordinieren Parkeintritt, seriose Jeep Partner und sinnvolle Fahrzeiten damit der Safari Tag zwischen Kultur, Bergen und Kuste passt.',
    ctaLabel: 'Safari Tag planen',
    relatedTours: [
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala Nationalpark' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt Ratgeber' },
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide safari au Sri Lanka : jeeps, parcs et attentes realistes',
    lead: 'Les safaris au Sri Lanka sont des sorties en jeep dans les parcs nationauxas le format brousse ouverte d’Afrique de l’Est. Comprendre reservations, choix du parc et ce qu’apporte vraiment une sortie matinale evite deception et double paiement pour la meme piste poussiereuse.',
    heroAlt: 'Jeep safari ouvert en game drive dans un parc national du Sri Lanka',
    sections: [
      {
        title: 'Comment fonctionnent vraiment les safaris au Sri Lanka',
        body: 'Chaque visiteur a besoin d’un billet d’entree, d’un jeep safari enregistre et dans la plupart des parcs d’un tracker du departement faune qui monte a la porte. Votre chauffeur guide gere timing et conduite ; le tracker lit les pistes et coordonne les observations. Les sorties durent typiquement trois a quatre heures ; les journees completes existent mais fatiguent et ameliorent rarement les chances de leopard.\n\nPas de conduite personnelle dans les grands parcs. Jeep, chauffeur et tracker se reservent en forfait via votre operateur ou une societe safari agreee pres de l’entree.',
      },
      {
        title: 'Reserver le jeep : via le circuit ou a la porte',
        body: 'Sur un circuit prive, le plus propre est de laisser votre societe de chauffeur reserver jeep, creneaux d’entree et horaire surtout a Yala, ou les files matinales peuvent etre longues en haute saison. Des jeeps de derniere minute existent parfois a la porte, avec une qualite tres variable.\n\nDemandez si les frais de parc, pourboires tracker et TVA sont inclus. Les tarifs bas en ligne excluent souvent le billet visiteur etranger, paye separement au guichet. Jeeps partages moins chers, moins flexibles.',
      },
      {
        title: 'Yala vs Udawalawe vs Wilpattu vs Minneriya',
        body: 'Yala bloc I : leopards, crocodiles, paysages varies parc le plus frequente, sensible a la foule et a la fermeture annuelle (souvent vers septembre). Udawalawe : savane ouverte pour elephants ; plus facile avec enfants, transferts plus courts depuis le sud. Wilpattu : lacs forestiers, leopards et ours lippus, moins de jeeps, drives plus lents. Minneriya/Kaudulla : rassemblements d’elephants saisonniers pres de Sigiriya superbes si le niveau d’eau convient.\n\nUn parc par region suffit a la plupart des voyageurs. Enchainer Yala et Udawalawe n’a de sens que si la faune est la priorite absolue.',
      },
      {
        title: 'Sorties du matin vs du soir',
        body: 'Le matin (entree vers 6h00 to 6h30) : plus frais, meilleure lumiere photo, plus de mouvement de leopard avant la chaleur de midi. Le soir : elephants vers l’eau et belle lumiere mais poussiere, contraste faible et animaux fatigues compliquent la photo.\n\nBeaucoup ne font qu’une sortie matinale ; deux drives sur jours consecutifs valent mieux qu’une marathon. Les forfaits journee entiere sonnent complets mais impliquent de longues periodes d’attente les leopards sont rarement actifs a midi.',
      },
      {
        title: 'Quoi emporter et porter en game drive',
        body: 'Couleurs neutres (kaki, olive, gris) ; le blanc vif attire la poussiere. Habillez vous en couches jeeps ouverts froids a l’aube, chauds vers 10h. Jumelles plus utiles qu’un long teleobjectif ; housse pluie pour le materiel.\n\nCreme solaire, chapeau, anti moustiques et masque poussiere sous estimes. Toilettes rares dans les parcs utilisez celles de la porte avant l’entree. Sacs plastique restreints ; eau en bouteille reutilisable.',
      },
      {
        title: 'Attentes realistes et etiquette',
        body: 'Un safari n’est pas une garantie de zoo. Elephants, cerfs, crocodiles et paons sont frequents ; manquer un leopard est normal. Les chauffeurs qui courent ou bloquent les animaux stressent la faune demandez poliment de reculer si votre jeep derape.\n\nPourboire au tracker separement s’il a apporte une vraie valeur. Souvenirs et photos comptent plus qu’une liste d’especes les parcs du Sri Lanka recompensent la patience.',
      },
    ],
    faq: [
      {
        q: 'Faut il reserver Yala a l’avance ?',
        a: 'Oui en haute saison (surtout decembre to mars et week ends juillet to aout). Votre operateur ou societe safari agreee doit reserver jeep et creneau ; le walk in existe hors pic mais n’est pas fiable.',
      },
      {
        q: 'Combien coute un jeep safari ?',
        a: 'Varie selon parc et saison ; forfait jeep plus billet etranger separe. Jeeps partages moins chers par place ; jeep prive controle total du timing.',
      },
      {
        q: 'Yala ou Udawalawe lequel choisir ?',
        a: 'Yala pour leopards et variete ; Udawalawe pour elephants fiables et paysage plus doux. La plupart des itineraires n’en incluent qu’un.',
      },
      {
        q: 'Les enfants peuvent ils venir en safari ?',
        a: 'Oui Udawalawe et Minneriya sont souvent plus faciles que de longs drives cahoteux a Yala. Collations, protection solaire et attentes realistes sur les departs matinaux.',
      },
      {
        q: 'A quelle heure commencer le matin ?',
        a: 'A la porte vers 5h45 to 6h00 pour la premiere vague d’entree. Plus tard signifie plus de jeeps devant vous sur les routes leopard.',
      },
    ],
    ctaTitle: 'Nous gerons les reservations jeep sur votre route',
    ctaBody: 'Nos circuits prives coordonnent entrees parc, partenaires jeep fiables et horaires sensesour que le jour safari s’insere entre culture, montagnes et cote.',
    ctaLabel: 'Planifier un jour safari',
    relatedTours: [
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
      { pageId: 'tour8', label: 'Circuit de 8 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parc national de Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Guide faune du Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Meilleure periode pour le Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guide des bagages pour le Sri Lanka' },
      { pageId: 'marketFrance', label: 'Voyage depuis la France' },
    ],
  },

  it: {
    h1: 'Guida safari nello Sri Lanka: jeep, parchi e cosa aspettarsi dai game drive',
    lead: 'I safari nello Sri Lanka sono uscite in jeep nei parchi nazionalion il formato savana aperta dell’Africa orientale. Capire prenotazioni, parco giusto e cosa offre davvero un mattino evita delusioni e doppi pagamenti sulla stessa pista polverosa.',
    heroAlt: 'Jeep safari aperta in game drive in un parco nazionale dello Sri Lanka',
    sections: [
      {
        title: 'Come funzionano davvero i safari nello Sri Lanka',
        body: 'Ogni visitatore ha bisogno di biglietto d’ingresso, jeep safari registrata e maggior parte dei parchidel dipartimento fauna che sale al cancello. L’autista guida gestisce tempi e guida; il tracker legge le tracce e coordina gli avvistamenti. Le uscite durano tipicamente tre to quattro ore; opzioni full day esistono ma stancano e raramente migliorano i leopardi.\n\nNon si guida da soli nei grandi parchi. Jeep, autista e tracker si prenotano in pacchettomite tour operator o societa safari autorizzata vicino all’ingresso.',
      },
      {
        title: 'Prenotare la jeep: tramite il tour o al cancello',
        body: 'In un tour privato conviene far riservare jeep, ingressi e orario preferito alla societa del chauffeuroprattutto a Yala, dove le code mattutine in alta stagione possono essere lunghe. Jeep last minute al cancello a volte ci sono, con qualita molto variabile.\n\nChiedete se fee del parco, mance al tracker e IVA sono incluse. Tariffe basse online spesso escludono il ticket straniero, pagato separatamente allo sportello. Jeep condivise costano meno, flex zero.',
      },
      {
        title: 'Yala vs Udawalawe vs Wilpattu vs Minneriya',
        body: 'Yala blocco I: leopardi, coccodrilli, scenari vari parco piu affollato, sensibile a folla e chiusura annuale (di solito verso settembre). Udawalawe: prateria aperta per elefanti; piu facile con bambini, trasferimenti piu corti dal sud. Wilpattu: laghi forestali, leopardi e orsi labiati, meno jeep, drive piu lenti. Minneriya/Kaudulla: raduni stagionali di elefanti vicino Sigiriyapettacolari con livello d’acqua giusto.\n\nUn parco per regione basta alla maggior parte dei viaggiatori. Yala e Udawalawe di fila ha senso solo se la fauna e il focus principale.',
      },
      {
        title: 'Drive mattutini vs serali',
        body: 'Il mattino (ingresso circa 6:00 to 6:30) e piu fresco, meglio per foto e statisticamente piu forte per leopardi prima del caldo di mezzogiorno. La sera: elefanti verso l’acqua e luce drammaticaa polvere, contrasto basso e animali stanchi complicano lo scatto.\n\nMolti fanno solo un mattino; due drive in giorni consecutivi battono una maratona. I pacchetti full day suonano completi ma hanno lunghe attese i leopardi a mezzogiorno sono rari.',
      },
      {
        title: 'Cosa portare e indossare in game drive',
        body: 'Colori neutri (khaki, oliva, grigio); il bianco accattivante attira polvere. Vestite a strati jeep aperte fredde all’alba, calde verso le 10. Binocolo spesso piu utile di un tele lungo; copertura antipioggia per la gear.\n\nCrema solare, cappello, repellente e mascherina antipolvere sottovalutati. Servizi igienici rari dentro i parchi usate quelli al cancello prima dell’ingresso. Sacchetti di plastica limitati; acqua in borraccia riutilizzabile.',
      },
      {
        title: 'Aspettative realistiche ed etichetta',
        body: 'Il safari non e garanzia da zoo. Elefanti, cervi, coccodrilli e pavoni sono frequenti; mancare un leopardo e normale. Autisti che corrono o bloccano animali stressano la fauna chiedete educatamente di tenere distanza se la jeep eccede.\n\nMancia al tracker a parte se ha aggiunto valore reale. Ricordi e foto contano piu di una checklist di specie i parchi dello Sri Lanka premiano la pazienza.',
      },
    ],
    faq: [
      {
        q: 'Bisogna prenotare Yala in anticipo?',
        a: 'Si in alta stagione (soprattutto dicembre to marzo e weekend luglio to agosto). Tour operator o societa safari autorizzata dovrebbero riservare jeep e slot; walk in off season a volte possibile, non affidabile.',
      },
      {
        q: 'Quanto costa una jeep safari?',
        a: 'Varia per parco e stagione; pacchetto jeep plus ticket straniero separato. Jeep condivise meno per posto; jeep privata controllo totale su tempi e soste.',
      },
      {
        q: 'Yala o Udawalaweuale e meglio?',
        a: 'Yala per leopardi e varieta; Udawalawe per elefanti affidabili e paesaggio piu dolce. La maggior parte degli itinerari ne include uno solo.',
      },
      {
        q: 'I bambini possono fare safari?',
        a: 'Sidawalawe e Minneriya sono spesso piu facili dei lunghi drive sconnessi a Yala. Snack, protezione solare e aspettative realistiche su partenze mattutine.',
      },
      {
        q: 'A che ora iniziare la mattina?',
        a: 'Al cancello verso 5:45 to 6:00 per la prima ondata d’ingresso. Piu tardi significa piu jeep davanti sulle rotte leopardo.',
      },
    ],
    ctaTitle: 'Gestiamo le prenotazioni jeep sulla vostra route',
    ctaBody: 'I nostri tour privati coordinano ingressi parco, partner jeep affidabili e orari sensatii il giorno safari si inserisce tra cultura, colline e costa.',
    ctaLabel: 'Pianifica un giorno safari',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
      { pageId: 'tour8', label: 'Tour di 8 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parco nazionale di Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Guida alla fauna dello Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Periodo migliore per lo Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guida ai bagagli per lo Sri Lanka' },
      { pageId: 'marketItaly', label: 'Viaggio dall’Italia' },
    ],
  },

  es: {
    h1: 'Guia de safari en Sri Lanka: jeeps, parques y que esperar en los game drives',
    lead: 'Los safaris en Sri Lanka son salidas en jeep por parques nacionalesel formato de sabana abierta de Africa oriental. Entender reservas, parque adecuado y lo que aporta de verdad una manana evita decepciones y pagar dos veces la misma pista polvorienta.',
    heroAlt: 'Jeep safari abierto en game drive en un parque nacional de Sri Lanka',
    sections: [
      {
        title: 'Como funcionan realmente los safaris en Sri Lanka',
        body: 'Cada visitante necesita entrada al parque, jeep safari registrado y mayoriar del departamento de fauna que sube en la puerta. Su chofer guia maneja tiempos y conduccion; el tracker lee huellas y coordina avistamientos. Las salidas duran tipicamente tres a cuatro horas; existen jornadas completas pero cansan y rara vez mejoran los leopardos.\n\nNo se puede conducir por cuenta propia en los grandes parques. Jeep, conductor y tracker se reservan en paquete operador o empresa safari autorizada junto a la entrada.',
      },
      {
        title: 'Reservar el jeep: con el tour o en la puerta',
        body: 'En un tour privado lo mas limpio es que su empresa de chofer reserve jeep, horario de entrada y drive preferido especialmente en Yala, donde las colas matutinas pueden ser largas en temporada alta. Jeeps de ultima hora en la puerta a veces existen, con calidad muy variable.\n\nPregunten si incluyen tarifa del parque, propinas al tracker e IVA. Tarifas baratas online suelen excluir el ticket extranjero, pagado aparte en taquilla. Jeeps compartidos cuestan menos pero sin flexibilidad.',
      },
      {
        title: 'Yala vs Udawalawe vs Wilpattu vs Minneriya',
        body: 'Yala bloque I: leopardos, cocodrilos, paisaje variado parque mas concurrido, sensible a multitudes y cierre anual (normalmente hacia septiembre). Udawalawe: pradera abierta para elefantes; mas facil con ninos, traslados mas cortos desde el sur. Wilpattu: lagos forestales, leopardos y osos labiados, menos jeeps, drives mas lentos. Minneriya/Kaudulla: concentraciones estacionales de elefantes cerca de Sigiriya espectaculares con buen nivel de agua.\n\nUn parque por region basta a la mayoria. Encadenar Yala y Udawalawe solo tiene sentido si la fauna es el foco principal.',
      },
      {
        title: 'Drives matutinos vs vespertinos',
        body: 'Por la manana (entrada ~6:00 to 6:30) hace mas fresco, mejor luz fotografica y mas movimiento de leopardo antes del calor del mediodia. Por la tarde: elefantes hacia el agua y luz dramatica pero polvo, bajo contraste y animales cansados complican la foto.\n\nMuchos hacen solo una manana; dos drives en dias consecutivos superan una maraton. Paquetes de dia completo suenan integrales pero implican largas esperas los leopardos rara vez estan activos al mediodia.',
      },
      {
        title: 'Que llevar y vestir en un game drive',
        body: 'Colores neutros (caqui, oliva, gris); el blanco llamativo atrae polvo. Vistan capas jeeps abiertos frios al amanecer, calurosos hacia las 10. Prismaticos suelen importar mas que un tele largo; funda antilluvia para el equipo.\n\nProtector solar, sombrero, repelente y mascarilla antipolvo infravalorados. Banos escasos dentro del parque usen los de la puerta antes de entrar. Bolsas plasticas restringidas; agua en botella reutilizable.',
      },
      {
        title: 'Expectativas realistas y etiqueta',
        body: 'Un safari no garantiza zoo. Elefantes, ciervos, cocodrilos y pavos reales son frecuentes; no ver un leopardo es normal. Conductores que corren o bloquean animales estresan la fauna pidan con cortesia que mantengan distancia si el jeep excede.\n\nPropina al tracker aparte si aporto valor real. Recuerdos y fotos cuentan mas que una lista de especies los parques de Sri Lanka premian la paciencia.',
      },
    ],
    faq: [
      {
        q: 'Hay que reservar Yala con antelacion?',
        a: 'Si en temporada alta (especialmente diciembre to marzo y fines de semana julio to agosto). Operador o empresa safari autorizada deben reservar jeep y horario; walk in fuera de pico a veces posible, no fiable.',
      },
      {
        q: 'Cuanto cuesta un jeep safari?',
        a: 'Varia por parque y temporada; paquete jeep mas ticket extranjero aparte. Jeeps compartidos menos por asiento; jeep privado control total de tiempos y paradas.',
      },
      {
        q: 'Yala o Udawalawe cual es mejor?',
        a: 'Yala para leopardos y variedad; Udawalawe para elefantes fiables y paisaje mas suave. La mayoria de itinerarios incluyen uno solo.',
      },
      {
        q: 'Pueden ir ninos al safari?',
        a: 'Si Udawalawe y Minneriya suelen ser mas faciles que largos drives bacheados en Yala. Snacks, proteccion solar y expectativas realistas sobre salidas tempranas.',
      },
      {
        q: 'A que hora empezar por la manana?',
        a: 'En la puerta hacia 5:45 to 6:00 para la primera oleada de entrada. Mas tarde significa mas jeeps delante en rutas de leopardo.',
      },
    ],
    ctaTitle: 'Gestionamos reservas de jeep en su ruta',
    ctaBody: 'Nuestros tours privados coordinan entradas al parque, socios jeep fiables y horarios sensatos para que el dia safari encaje entre cultura, montanas y costa.',
    ctaLabel: 'Planificar un dia safari',
    relatedTours: [
      { pageId: 'tour5', label: 'Tour de 5 dias por Sri Lanka' },
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
      { pageId: 'tour8', label: 'Tour de 8 dias por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parque Nacional de Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Guia de fauna de Sri Lanka' },
      { pageId: 'guideBestTime', label: 'Mejor epoca para visitar Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guia de equipaje para Sri Lanka' },
      { pageId: 'marketSpain', label: 'Viajar desde Espana' },
    ],
  },

  pl: {
    h1: 'Przewodnik safari po Sri Lance: jeepy, parki i czego oczekiwac na game drive',
    lead: 'Safari na Sri Lance to wyjazdy jeepami po parkach narodowychie format otwartej sawanny Afryki Wschodniej. Zrozumienie rezerwacji, wlasciwego parku i tego, co naprawde daje poranek, oszczedza rozczarowanie i podwojnej oplaty za te sama pylista droge.',
    heroAlt: 'Otwarty jeep safari na game drive w parku narodowym na Sri Lance',
    sections: [
      {
        title: 'Jak naprawde dzialaja safari na Sri Lance',
        body: 'Kazdy gosc potrzebuje biletu wstepu, zarejestrowanego jeepa safari i w wiekszosci parkow trackera z departamentu przyrody, ktory wsiada przy bramce. Kierowca przewodnik zarzadza czasem i jazda; tracker czyta tropy i koordynuje obserwacje. Wyjazdy trwaja zwykle trzy to cztery godziny; opcje calodniowe istnieja, ale mecza i rzadko poprawiaja szanse na lamparty.\n\nSamodzielna jazda w duzych parkach jest niedozwolona. Jeep, kierowca i tracker rezerwuje sie w pakiecie przez touroperatora lub licencjonowana firme safari przy wejsciu.',
      },
      {
        title: 'Rezerwacja jeepa: przez tour czy przy bramce',
        body: 'W prywatnym tourze najczysciej, gdy firma chauffeur rezerwuje jeep, slot wejscia i preferowany drive zwlaszcza w Yali, gdzie poranne kolejki w szczycie sezonu bywaja dlugie. Jeepy last minute przy bramce czasem sa, jakosc bardzo zroznicowana.\n\nZapytajcie, czy w cenie sa oplaty parkowe, napiwki dla trackera i VAT. Tanie stawki online czesto wykluczaja bilet dla cudzoziemcow, platny osobno w kasie. Wspolne jeepy tansze, mniej elastyczne.',
      },
      {
        title: 'Yala vs Udawalawe vs Wilpattu vs Minneriya',
        body: 'Yala blok I: lamparty, krokodyle, zroznicowany krajobraz najbardziej ruchliwy park, wrazliwy na tlumy i roczne zamkniecie (zwykle wrzesien). Udawalawe: otwarta trawa pod slonie; latwiej z dziecmi, krotsze transfery z poludnia. Wilpattu: lesne jeziora, lamparty i niedzwiedzie wargowate, mniej jeepow, wolniejsze trasy. Minneriya/Kaudulla: sezonowe zgromadzenia sloni kolo Sigiriyi wspaniale przy dobrym poziomie wody.\n\nJeden park na region wystarczy wiekszosci. Yala i Udawalawe pod rzad ma sens tylko, gdy dzika przyroda jest glownym celem.',
      },
      {
        title: 'Poranne vs wieczorne wyjazdy',
        body: 'Rano (wejscie ok. 6:00 to 6:30) jest chlodniej, lepiej do zdjec i statystycznie lepiej dla lampartow przed poludniowym goracem. Wieczorem: slonie przy wodzie i dramatyczne swiatlo ale kurz, niski kontrast i zmeczone zwierzeta utrudniaja fotografie.\n\nWielu robi tylko jedno rano; dwa drive’y w kolejnych dniach bija maraton. Pakiety calodniowe brzmia kompleksowo, ale oznaczaja dlugie przestojeamparty w poludnie rzadko aktywne.',
      },
      {
        title: 'Co spakowac i nosic na game drive',
        body: 'Neutralne kolory (khaki, oliwka, szary); jaskrawa biel przyciaga kurz. Ubierajcie warstwowotwarte jeepy zimne o swicie, gorace ok. 10:00. Lornetka czesto wazniejsza niz dlugi tele; oslona przeciwdeszczowa na sprzet.\n\nKrem SPF, kapelusz, repelent i maska przeciwkurzowa niedoceniane. Toalety w parku rzadkiekorzystajcie przy bramce przed wjazdem. Worki plastikowe ograniczone; woda w butelce wielorazowej.',
      },
      {
        title: 'Realistyczne oczekiwania i etykieta',
        body: 'Safari to nie gwarancja zoo. Slonie, jelenie, krokodyle i pawie bywaja czesto; brak lamparta jest normalny. Kierowcy, ktorzy gonia lub blokuja zwierzeta, stresuja faune grzecznie poproscie o dystans, jesli jeep przesadza.\n\nNapiwek dla trackera osobno, jesli dal realna wartosc. Wspomnienia i zdjecia licza sie bardziej niz checklista gatunkow parki Sri Lanki nagradzaja cierpliwosc.',
      },
    ],
    faq: [
      {
        q: 'Czy trzeba rezerwowac Yala z wyprzedzeniem?',
        a: 'Tak w szczycie sezonu (szczegolnie grudzien–marzec i weekendy lipiec to sierpien). Touroperator lub licencjonowana firma safari powinni zarezerwowac jeep i slot; walk in poza szczytem czasem mozliwy, niepewny.',
      },
      {
        q: 'Ile kosztuje jeep safari?',
        a: 'Zalezy od parku i sezonu; pakiet jeep plus osobny bilet dla cudzoziemca. Wspolne jeepy taniej za miejsce; prywatny jeep pelna kontrola czasu i postojow.',
      },
      {
        q: 'Yala czy Udawalawe co lepsze?',
        a: 'Yala pod lamparty i roznorodnosc; Udawalawe pod pewne slonie i lagodniejszy krajobraz. Wiekszosc tras obejmuje jeden park.',
      },
      {
        q: 'Czy dzieci moga jechac na safari?',
        a: 'Tak Udawalawe i Minneriya czesto latwiejsze niz dlugie, wyboiste trasy w Yali. Przekaski, ochrona przeciwsloneczna i realistyczne oczekiwania co do wczesnych startow.',
      },
      {
        q: 'O ktorej zaczac poranne safari?',
        a: 'Przy bramce ok. 5:45 to 6:00 na pierwsza fale wjazdu. Pozniej oznacza wiecej jeepow przed wami na trasach lampartow.',
      },
    ],
    ctaTitle: 'Zalatwiamy rezerwacje jeepow na Waszej trasie',
    ctaBody: 'Nasze prywatne tury koordynuja wejscia do parkow, rzetelnych partnerow jeep i sensowne godziny by dzien safari wpasowal sie miedzy kulture, gory i wybrzeze.',
    ctaLabel: 'Zaplanuj dzien safari',
    relatedTours: [
      { pageId: 'tour5', label: '5 dniowa wycieczka po Sri Lance' },
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour8', label: '8 dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Park Narodowy Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Przewodnik po dzikiej przyrodzie Sri Lanki' },
      { pageId: 'guideBestTime', label: 'Najlepszy czas na Sri Lanke' },
      { pageId: 'guidePacking', label: 'Przewodnik pakowania na Sri Lanke' },
      { pageId: 'marketPoland', label: 'Wakacje z Polski' },
    ],
  },

  ru: {
    h1: 'Гид по сафари на Шри Ланке: джипы, парки и чего ждать от выезда в парк',
    lead: 'Сафари на Шри Ланке это выезды на джипах по национальным паркам, а не формат открытой саванны Восточной Африки. Понимание бронирования, выбора парка и реалистичных утренних ожиданий избавит от разочарований и двойной оплаты за ту же пыльную дорогу.',
    heroAlt: 'Открытый сафари джип на маршруте наблюдения за дикой природой в национальном парке Шри Ланки',
    sections: [
      {
        title: 'Как на самом деле устроены сафари на Шри Ланке',
        body: 'Каждому нужен входной билет, зарегистрированный сафари джип и большинстве парковрекер из департамента дикой природы, который садится у ворот. Водитель гид управляет временем и вождением; трекер читает следы и координирует находки. Выезды длятся обычно три–четыре часа; целодневные варианты есть, но утомляют и редко улучшают шансы увидеть leopards.\n\nСамостоятельная езда в крупных парках запрещена. Джип, водитель и трекер бронируются пакетом через туроператора или лицензированную сафари компанию у входа.',
      },
      {
        title: 'Бронирование джипа: через тур или у ворот',
        body: 'В частном туре проще всего, когда компания с водителем резервирует джип, слот входа и желаемое время особенно в Яле, где утренние очереди в пик сезона длинные. Джипы в последний момент у ворот иногда есть, качество сильно различается.\n\nУточняйте, включены ли парковый сбор, чаевые трекеру и НДС. Дешёвые онлайн ставки часто без иностранного билета, который платят отдельно в кассе. Общие джипы дешевле, но без гибкости.',
      },
      {
        title: 'Яла vs Удавалаве vs Вилпатту vs Миннерия',
        body: 'Яла блок I: леопардов, крокодилы, разнообразные ландшафты самый загруженный парк, чувствителен к толпам и ежегодному закрытию (обычно сентябрь). Удавалаве: открытая трава под слонов; проще с детьми, короче трансферы с юга. Вилпатту: лесные озёра, леопардов и медведи губачи, меньше джипов, более медленные маршруты. Миннерия/Каудулла: сезонные скопления слонов у Сигирии впечатляюще при правильном уровне воды.\n\nОдного парка на регион достаточно большинству. Яла и Удавалаве подряд имеет смысл только если природа главный фокус.',
      },
      {
        title: 'Утренние vs вечерние выезды',
        body: 'Утро (вход около 6:00 to 6:30) прохладнее, лучше для фото и статистически сильнее для леопардов до полуденной жары. Вечер: слоны к воде и драматический свет но пыль, низкий контраст и уставшие животные усложняют съёмку.\n\nМногие делают только одно утро; два выезда подряд в соседние дни лучше марафона. Пакеты на весь день звучат полно, но означают долгие простои леопардов в полдень редко активны.',
      },
      {
        title: 'Что взять и надеть в парк',
        body: 'Нейтральные цвета (хаки, оливковый, серый); яркий белый притягивает пыль. Одевайтесь слоями открытые джипы холодны на рассвете и жарки к 10:00. Бинокль часто важнее длинного телеобъектива; чехол от дождя для техники.\n\nSPF, шляпа, репеллент и маска от пыли недооценены. Туалеты в парке редки воспользуйтесь у ворот до входа. Пластиковые пакеты ограничены; вода в многоразовой бутылке.',
      },
      {
        title: 'Реалистичные ожидания и этикет',
        body: 'Сафари не гарантия зоопарка. Слоны, олени, крокодилы и павлины часты; не увидеть леопардов нормально. Водители, которые гонятся или блокируют животных, стрессируют \u0444\u0430\u0443\u043d\u0443 вежливо попросите держать дистанцию.\n\nЧаевые трекеру отдельно, если он реально помог. Воспоминания и фото важнее чек листа видов парки Шри Ланки награждают терпение.',
      },
    ],
    faq: [
      {
        q: 'Нужно ли бронировать Ялу заранее?',
        a: 'Да в пик сезона (особенно декабрь–март и выходные июль–август). Туроператор или лицензированная сафари компания должны зарезервировать джип и слот; без брони вне пика иногда возможно, но ненадёжно.',
      },
      {
        q: 'Сколько стоит сафари джип?',
        a: 'Зависит от парка и сезона; пакет джипа плюс отдельный иностранный билет. Общие джипы дешевле за место; частный джип полный контроль времени и остановок.',
      },
      {
        q: 'Яла или Удавалаве что лучше?',
        a: 'Яла для леопардов и разнообразия; Удавалаве для надёжных слонов и более мягкого ландшафта. Большинство маршрутов включает один парк.',
      },
      {
        q: 'Можно ли с детьми на сафари?',
        a: 'Да Удавалаве и Миннерия часто проще длинных ухабистых маршрутов в Яле. Перекусы, защита от солнца и реалистичные ожидания от ранних стартов.',
      },
      {
        q: 'Во сколько начинать утреннее сафари?',
        a: 'У ворот около 5:45 to 6:00 на первую волну входа. Позже больше джипов впереди на маршрутах леопардов.',
      },
    ],
    ctaTitle: 'Мы оформим бронирование джипов на вашем маршруте',
    ctaBody: 'Наши частные туры координируют входы в парки, проверенных партнёров джипов и разумное время чтобы день сафари вписался между культурой, горами и побережьем.',
    ctaLabel: 'Спланировать день сафари',
    relatedTours: [
      { pageId: 'tour5', label: '5 дневный тур по Шри Ланке' },
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
      { pageId: 'tour8', label: '8 дневный тур по Шри Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Национальный парк Яла' },
      { pageId: 'destSigiriya', label: 'Сигирия' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Гид по дикой природе Шри Ланки' },
      { pageId: 'guideBestTime', label: 'Лучшее время для Шри Ланки' },
      { pageId: 'guidePacking', label: 'Гид по упаковке вещей для Шри Ланки' },
      { pageId: 'marketRussia', label: 'Туры из России' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Safari Ratgeber: Jeeps, Parks und was Sie bei Game Drives erwartet',
    lead: 'Safaris in Sri Lanka sind Jeep Pirschfahrten durch Nationalparksicht das offene Busch Format Ostafrikas. Wer Buchung, passenden Park und realistische Morgenerlebnisse versteht, spart Enttauschung und doppelte Kosten fur dieselbe staubige Piste.',
    heroAlt: 'Offener Safari Jeep auf Pirschfahrt in einem srilankischen Nationalpark',
    sections: [
      {
        title: 'So funktionieren Safaris in Sri Lanka wirklich',
        body: 'Jeder Besucher braucht Parkticket, registrierten Safari Jeep und in den meisten Parks einen Tracker der Wildschutzbehorde am Tor. Ihr Fahrer Guide steuert Timing und Fahrt; der Tracker liest Spuren und koordiniert Sichtungen. Fahrten dauern typisch drei bis vier Stunden; Ganztagesoptionen gibt es, sind aber anstrengend und selten besser fur Leoparden.\n\nSelbstfahren in grossen Parks ist nicht erlaubt. Jeep, Fahrer und Tracker werden als Paket gebucht uber Ihren Reiseveranstalter oder lizenzierte Safari Firmen am Parkeingang.',
      },
      {
        title: 'Jeep buchen: uber die Tour oder am Tor',
        body: 'Auf einer privaten Rundreise ist es am saubersten, wenn Ihre Chauffeur Firma Jeep, Einlass und Wunschzeit mitplant besonders in Yala, wo morgens in der Hochsaison Schlangen entstehen. Last Minute Jeeps am Tor gibt es manchmal, Qualitat schwankt stark.\n\nFragen Sie, ob Parkgebuhr, Tracker Trinkgeld und MwSt. enthalten sind. Gunstige Onlinepreise schliessen oft das Auslanderticket aus, das separat am Schalter gezahlt wird. Geteilte Jeeps sparen Geld, aber nicht Flexibilitat.',
      },
      {
        title: 'Yala vs Udawalawe vs Wilpattu vs Minneriya',
        body: 'Yala Block I: Leoparden, Krokodile, abwechslungsreiche Landschaftelebtester Park, empfindlich gegenuber Andrang und jahrlicher Schliessung (meist um September). Udawalawe: offenes Grasland fur Elefanten; kinderfreundlicher, kurzere Anfahrt von der Sudkuste. Wilpattu: Waldseen, Leoparden und Lippenbaren mit weniger Jeeps, aber langsameren Fahrten. Minneriya/Kaudulla: saisonale Elefantenversammlungen nahe Sigiriya grandios bei passendem Wasserstand.\n\nEin Park pro Region reicht den meisten Reisenden. Yala und Udawalawe direkt hintereinander lohnt nur, wenn Wildtiere im Mittelpunkt stehen.',
      },
      {
        title: 'Morgen- vs Abendfahrten',
        body: 'Morgenfahrten (Einlass ab ca. 6:00 to 6:30) sind kuhler, fotografisch besser beleuchtet und statistisch starker fur Leoparden vor der Mittagshitze. Abendfahrten treffen Elefanten am Wasser und bieten dramatisches Licht aber Staub und Mudigkeit nach heissem Tag erschweren Fotos.\n\nViele Gaste fahren nur einmal morgens; zwei Fahrten an aufeinanderfolgenden Tagen schlagen eine Marathon Session. Ganztagespakete klingen umfassend, bringen aber lange Leerlaufphasen Leoparden sind mittags selten aktiv.',
      },
      {
        title: 'Was Sie zur Pirschfahrt mitnehmen sollten',
        body: 'Neutrale Farben (Khaki, Olive, Grau) helfen; knalliges Weiss zieht Staub an. Schichten kleiden offene Jeeps sind morgens kalt und gegen 10:00 heiss. Fernglas schlagt oft ein langes Tele; Regenschutz fur die Kamera hilft bei Schauern.\n\nSonnencreme, Hut, Muckenschutz und Staubmaske sind unterschatzt. Toiletten im Park sind rar vor dem Tor nutzen. Plastiktuten sind eingeschrankt; Wasser in Mehrwegflaschen mitbringen.',
      },
      {
        title: 'Realistische Erwartungen und Etikette',
        body: 'Safari ist kein Zoo Garantie. Elefanten, Hirsche, Krokodile und Pfauen sind haufig ein Leopard kann trotzdem ausbleiben, das ist normal. Fahrer, die hetzen oder Tiere blockieren, stressen Wildtiere und andere Gaste; hoflich bitten, Abstand zu halten.\n\nTracker separat trinkgelden, wenn sie echten Mehrwert boten. Erinnerungen zahlen mehr als eine Spezies Checkliste Sri Lankas Parks belohnen Geduld.',
      },
    ],
    faq: [
      {
        q: 'Muss ich Yala Safari im Voraus buchen?',
        a: 'Ja, in der Hochsaison (besonders Dezember to Marz und Wochenenden im Juli/August). Ihr Veranstalter oder lizenzierte Safari Firma sollte Jeep und Einlass reservieren; spontan geht off season manchmal, ist aber unzuverlassig.',
      },
      {
        q: 'Was kostet ein Safari Jeep?',
        a: 'Preise variieren nach Park und Saison; Jeep Paket plus separates Auslanderticket. Geteilte Jeeps pro Sitz gunstiger; private Jeeps volle Kontrolle uber Zeit und Stopps.',
      },
      {
        q: 'Yala oder Udawalawe was ist besser?',
        a: 'Yala fur Leoparden und Vielfalt; Udawalawe fur verlassliche Elefanten und sanfteres Gelande. Die meisten Routen wahlen einen Park, nicht beide.',
      },
      {
        q: 'Konnen Kinder mit auf Safari?',
        a: 'Ja Udawalawe und Minneriya sind oft einfacher als lange, holprige Yala Fahrten. Snacks, Sonnenschutz und realistische Erwartungen an fruhe Starts helfen.',
      },
      {
        q: 'Wann sollte die Morgensafari starten?',
        a: 'Am Parktor gegen 5:45 to 6:00 fur die erste Einlasswelle. Spater heisst mehr Jeeps vor Ihnen auf beliebten Leopardrouten.',
      },
    ],
    ctaTitle: 'Wir ubernehmen Jeep Buchungen auf Ihrer Route',
    ctaBody: 'Unsere privaten Touren koordinieren Parkeintritt, seriose Jeep Partner und sinnvolle Fahrzeiten damit der Safari Tag zwischen Kultur, Bergen und Kuste passt.',
    ctaLabel: 'Safari Tag planen',
    relatedTours: [
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala Nationalpark' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt Ratgeber' },
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste Ratgeber' },
    ],
  }
};
