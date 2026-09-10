import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka safety guide (pageId: guideSafety).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const SAFETY_GUIDE: ArticleContent = {
  en: {
    h1: 'Is Sri Lanka Safe to Travel? Practical Tips for a Confident Trip',
    lead: 'Sri Lanka is generally a safe, welcoming destination for international visitors, with low violent crime rates compared with many countries but like anywhere, sensible habits around roads, scams, wildlife and health make the difference between a smooth holiday and an avoidable headache. This guide covers what to watch for, not what to fear.',
    heroImage: 'assets/img/5daysTours/26.webp',
    heroAlt: 'Traveller preparing safely for a Sri Lanka road trip with a private driver',
    sections: [
      {
        id: 'generalSafety',
        title: 'General safety: what visitors should actually expect',
        body: 'Petty theft exists in busy markets, bus stations and crowded beaches. Keep phones and wallets in front pockets or a cross body bag, not hanging from a chair at a cafe. Violent crime targeting tourists is rare; disputes are more often about money, transport fares or misunderstood “guides” at sites.\n\nPolitical demonstrations occur occasionally in Colombo; avoid large gatherings, follow local news and trust your driver guide to reroute if needed. Sri Lankans are broadly hospitable. Asking your hotel or driver about local conditions beats relying on outdated forum posts.',
      },
      {
        id: 'scamsToAvoid',
        title: 'Common scams and how to sidestep them',
        body: 'At Sigiriya, Dambulla and the Temple of the Tooth, unofficial “guides” may claim you need them to enter or offer gemstones and spice shop detours with heavy commission pressure. Official tickets are sold at clear counters; politely decline unsolicited escorts. Tuk tuk drivers offering “free” temple tours often end at overpriced shops.\n\nGem and spice purchases should be treated as optional sightseeing, not obligations. Agree tuk tuk and taxi fares before setting off, or use ride apps in Colombo. Your private chauffeur guide removes most of this friction on a booked ahead round tour.',
      },
      {
        id: 'roadTravel',
        title: 'Road travel, tuk tuks and private drivers',
        body: 'Sri Lankan driving is assertive by Western standards. Narrow roads, buses overtaking on bends and pedestrians on highway edges are normal. As a passenger, wear seatbelts when available and avoid night driving on unfamiliar hill country roads if you self drive.\n\nMost visitors on round tours travel with a licensed chauffeur guide in an insured vehicle, which is the safest and least stressful way to cover distance. If you use tuk tuks locally, choose drivers with roadworthy vehicles and helmet yourself on busy routes.',
      },
      {
        id: 'templesAndRespect',
        title: 'Temples, cultural respect and photography',
        body: 'Religious sites require modest dress, quiet behaviour and no selfies with your back to Buddha statues serious cultural offence. Photography rules vary: some inner shrines prohibit cameras entirely; ask before shooting monks or worshippers at prayer.\n\nRemove shoes before entering shrine floors; socks help on hot stone. Small donations are welcome but never mandatory. Ignore anyone insisting on a fixed “entry fee” beyond the official ticket counter.',
      },
      {
        id: 'wildlifeDistance',
        title: 'Wildlife, national parks and keeping your distance',
        body: 'Yala, Udawalawe and Minneriya are not zoos. Elephants, buffalo and leopards are wild. Stay inside safari jeeps unless guides instruct otherwise; never approach elephants on foot, especially lone males or herds with calves. Feeding monkeys at temples and roadside creates aggressive behaviour and risks bites.\n\nSea currents on the south coast can be strong. Heed local flags and lifeguard advice. Snorkelling and diving operators should be licensed; do not touch coral or marine life.',
      },
      {
        id: 'healthEmergency',
        title: 'Water, food, emergencies and solo women travellers',
        body: 'Drink sealed bottled or filtered water; avoid tap water for brushing teeth outside trusted hotels. Eat freshly cooked food and peel fruit yourself see our food guide for street eating nuance. Travel insurance with medical evacuation cover is strongly recommended.\n\nEmergency numbers: police 119, ambulance 1990, tourist police hotline 1912 (English often available). Solo women travellers generally report few serious issues; use registered transport at night, dress modestly at religious sites and trust instincts in empty areas the same practical rules as most of Asia.',
      },
    ],
    faq: [
      {
        q: 'Is Sri Lanka safe for tourists in 2026?',
        a: 'Yes, for typical holiday routes Colombo, the Cultural Triangle, hill country and south coast beaches when standard precautions apply. Stay informed about local news, use reputable transport and keep valuables secure in crowds.',
      },
      {
        q: 'What is the most common tourist scam in Sri Lanka?',
        a: 'Unofficial “guides” at major temples and rock sites, plus tuk tuk detours to commission gem or spice shops, are the most frequent nuisances. Pre booked tickets and a private driver reduce exposure significantly.',
      },
      {
        q: 'Is it safe to drive yourself in Sri Lanka?',
        a: 'self driving is legal but demanding traffic is chaotic and signage limited outside main routes. Most visitors prefer a licensed chauffeur guide who knows road conditions and handles parking at busy sites.',
      },
      {
        q: 'Are safaris in Yala safe?',
        a: 'Yes when you stay in approved jeeps with licensed park guides and follow distance rules around elephants and other wildlife. Never exit the vehicle inside the park unless explicitly permitted.',
      },
      {
        q: 'Is it safe to travel to Sri Lanka from the UK?',
        a: 'Yes for typical holiday routes when you use reputable transport, keep valuables secure in crowds and follow temple etiquette. Check current FCDO advice before you fly. A licensed private chauffeur guide is how most UK visitors move around.',
      },
      {
        q: 'What emergency numbers should I save in Sri Lanka?',
        a: 'Save 119 for police, 1990 for ambulance services and 1912 for tourist police. Keep your embassy contact and travel insurance emergency line in your phone as well.',
      },
    ],
    ctaTitle: 'Travel with a trusted local driver guide',
    ctaBody: 'Our insured private tours pair you with licensed chauffeur guides who handle navigation, site logistics and vetted lunch stops so you focus on the experience, not on avoiding pitfalls.',
    ctaLabel: 'Book a safe private tour',
    relatedTours: [
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
      { pageId: 'tour8', label: '8 Day Sri Lanka Tour' },
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala National Park' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Private Driver Guide' },
      { pageId: 'guideFood', label: 'Sri Lanka Food Guide' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packing Guide' },
      { pageId: 'marketUK', label: 'Sri Lanka holidays from the UK' },
    ],
  },

  de: {
    h1: 'Ist Sri Lanka sicher? Praktische Tipps fur eine selbstbewusste Reise',
    lead: 'Sri Lanka ist fur internationale Besucher im Allgemeinen sicher und gastfreundlich, mit niedrigeren Raten gewalttatiger Kriminalitat als in vielen Landern doch wie uberall machen vernunftige Gewohnheiten bei Strassenverkehr, Betrug, Wildtieren und Gesundheit den Unterschied zwischen reibungslosem Urlaub und vermeidbarem Arger. Dieser Ratgeber zeigt, worauf Sie achten sollten, nicht wovor Sie Angst haben mussen.',
    heroAlt: 'Reisender bereitet sich sicher auf eine Sri Lanka Roadtrip mit Privatfahrer vor',
    sections: [
      {
        title: 'Allgemeine Sicherheit: was Besucher wirklich erwarten sollten',
        body: 'Kleine Diebstahle gibt es auf belebten Markten, Busbahnhofen und vollen Stranden Handy und Geldborse in Vorder- oder Umhangetasche, nicht uber dem Stuhl im Cafe hangen. Gewalttaten gegen Touristen sind selten; Streit geht eher um Geld, Fahrpreise oder missverstandene „Fuhrer“ an Sehenswurdigkeiten.\n\nPolitische Demonstrationen kommen gelegentlich in Colombo vor; grosse Ansammlungen meiden, lokale Nachrichten verfolgen und Ihrem Fahrer Guide vertrauen, wenn Umleitung notig ist. Sri Lanker sind uberwiegend gastfreundlich Hotel oder Fahrer nach lokalen Bedingungen fragen schlagt veraltete Forenbeitrage.',
      },
      {
        title: 'Haufige Betrugereien und wie man sie umgeht',
        body: 'An Sigiriya, Dambulla und am Zahntempel behaupten inoffizielle „Fuhrer“ manchmal, man brauche sie zum Eintritt, oder locken zu Edelstein und Gewurzshops mit hohem Provisionsdruck offizielle Tickets gibt es an klaren Schaltern; ungebetene Begleiter hoflich ablehnen. Tuk tuk Fahrer mit „kostenlosen“ Tempeltouren enden oft in uberteuerten Laden.\n\nEdelstein und Gewurzkaufe sind optionales Sightseeing, keine Pflicht. Tuk tuk und Taxipreise vor Fahrtantritt vereinbaren oder Fahr Apps in Colombo nutzen. Ihr Privatfahrer Guide nimmt bei gebuchter Rundreise den Grossteil dieser Reibung.',
      },
      {
        title: 'Strassenverkehr, Tuk tuks und Privatfahrer',
        body: 'Srilankisches Fahren wirkt nach westlichem Mass assertiv enge Strassen, Busse in Kurven, Fussganger am Fahrbahnrand sind normal. Als Passagier Anschnallgurte nutzen, wenn vorhanden, und Nachtfahrten auf unbekannten Bergstrassen beim Selbstfahren meiden.\n\nDie meisten Rundreisenden fahren mit lizenziertem Fahrer Guide in versichertem Fahrzeug der sicherste und entspannteste Weg uber Distanzen. Bei lokalen Tuk tuks Fahrer mit verkehrstuchtigen Fahrzeugen wahlen und auf belebten Strecken Helm tragen.',
      },
      {
        title: 'Tempel, kultureller Respekt und Fotografie',
        body: 'Religiose Statten verlangen dezente Kleidung, ruhiges Verhalten und keine Selfies mit dem Rucken zu Buddha Statuen ein ernsthafter kultureller Fehler. Fotoregeln variieren: innere Schreine verbieten Kameras; vor Fotos von Monchen oder Betenden fragen.\n\nSchuhe vor dem Betreten der Schreinboden ausziehen; Socken helfen auf heissem Stein. Kleine Spenden willkommen, nie Pflicht ignorieren Sie feste „Eintrittsgebuhren“ jenseits des offiziellen Schalters.',
      },
      {
        title: 'Wildtiere, Nationalparks und Abstand halten',
        body: 'Yala, Udawalawe und Minneriya sind keine Zoos Elefanten, Buffel und Leoparden sind wild. In Safari Jeeps bleiben, sofern Guides nichts anderes anweisen; Elefanten nie zu Fuss nahern, besonders Einzelmanner oder Herden mit Kalbern. Affen an Tempeln und Strassen futtern erzeugt Aggression und Bissrisiko.\n\nMeeresstromungen an der Sudkuste konnen stark sein Flaggen und Rettungsschwimmer beachten. Schnorchel und Tauchbetreiber sollten lizenziert sein; Korallen und Meeresleben nicht anfassen.',
      },
      {
        title: 'Wasser, Essen, Notfalle und alleinreisende Frauen',
        body: 'Versiegeltes Flaschen- oder gefiltertes Wasser trinken; Leitungswasser zum Zahneputzen ausserhalb vertrauenswurdiger Hotels meiden. Frisch gekochtes Essen und selbst geschaltes Obst siehe unseren Kulinarik Ratgeber fur Street Food Nuancen. Reiseversicherung mit medizinischer Evakuierung dringend empfohlen.\n\nNotrufnummern: Polizei 119, Rettungsdienst 1990, Touristenpolizei 1912 (oft Englisch). Alleinreisende Frauen berichten selten ernsthafte Probleme; registrierten Transport nachts nutzen, in Tempeln dezent kleiden und Instinkte in leeren Gegenden vertrauen dieselben praktischen Regeln wie in weiten Teilen Asiens.',
      },
    ],
    faq: [
      {
        q: 'Ist Sri Lanka fur Touristen sicher?',
        a: 'Ja, auf typischen Urlaubsrouten Colombo, Kulturdreieck, Bergland und Sudkuste bei Standardvorsicht. Lokale Nachrichten verfolgen, seriosen Transport nutzen und Wertsachen in Menschenmengen sichern.',
      },
      {
        q: 'Was ist der haufigste Touristenbetrug?',
        a: 'Inoffizielle „Fuhrer“ an grossen Tempeln und Felsstatten plus Tuk tuk Umwege zu Provisions Edelstein- oder Gewurzshops. Vorgebuchte Tickets und Privatfahrer reduzieren das deutlich.',
      },
      {
        q: 'Ist Selbstfahren in Sri Lanka sicher?',
        a: 'Legal, aber anspruchsvoll chaotischer Verkehr und begrenzte Beschilderung abseits Hauptrouten. Die meisten Besucher bevorzugen lizenzierte Fahrer Guides, die Strassen und Parkplatze kennen.',
      },
      {
        q: 'Sind Yala Safaris sicher?',
        a: 'Ja in zugelassenen Jeeps mit lizenzierten Parkfuhrern und Abstandsregeln zu Elefanten und anderer Wildnis. Fahrzeug im Park nicht verlassen, ausser ausdrucklich erlaubt.',
      },
      {
        q: 'Ist Sri Lanka sicher fur Reisende aus Deutschland?',
        a: 'Ja auf den ublichen Urlaubsrouten bei seriosem Transport und normaler Vorsicht. Hinweise des Auswartigen Amts vor dem Flug prufen. Ein lizenzierter Fahrer Guide ist fur die meisten Gaste aus DE, AT und CH die Standardlosung.',
      },
      {
        q: 'Welche Notrufnummern sollte ich speichern?',
        a: '119 Polizei, 1990 Rettungsdienst, 1912 Touristenpolizei. Botschaftskontakt und Notfallnummer der Reiseversicherung ebenfalls im Telefon speichern.',
      },
    ],
    ctaTitle: 'Reisen Sie mit einem vertrauenswurdigen Fahrer Guide',
    ctaBody: 'Unsere versicherten Privatreisen verbinden Sie mit lizenzierten Fahrer Guides, die Navigation, Logistik an Sehenswurdigkeiten und geprufte Mittagsstopps ubernehmen Sie konzentrieren sich auf das Erlebnis, nicht auf Fallstricke.',
    ctaLabel: 'Sichere Privatreise buchen',
    relatedTours: [
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige Sri Lanka Rundreise' },
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala Nationalpark' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer Ratgeber' },
      { pageId: 'guideFood', label: 'Sri Lanka Kulinarik Ratgeber' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste Ratgeber' },
      { pageId: 'marketGermany', label: 'Rundreise aus Deutschland' },
    ],
  },

  fr: {
    h1: 'Guide securite Sri Lanka : conseils pratiques pour voyager sereinement',
    lead: 'Le Sri Lanka est generalement une destination sure et accueillante pour les visiteurs internationaux, avec des taux de criminalite violente plus bas que dans de nombreux pays mais comme partout, des habitudes sensees sur la route, les arnaques, la faune et la sante font la difference entre des vacances fluides et des tracas evitables. Ce guide indique ce qu’il faut surveiller, pas ce qu’il faut craindre.',
    heroAlt: 'Voyageur se preparant en toute securite pour un road trip au Sri Lanka avec chauffeur prive',
    sections: [
      {
        title: 'Securite generale : ce que les visiteurs doivent reellement attendre',
        body: 'Les petits vols existent sur les marches animes, gares routieres et plages bondees telephone et portefeuille en poche avant ou sac bandouliere, pas pendus au dossier d’une chaise. La criminalite violente visant les touristes est rare ; les disputes portent plutot sur l’argent, les tarifs ou des « guides » mal compris sur les sites.\n\nDes manifestations politiques surviennent parfois a Colombo ; evitez les grandes foules, suivez l’actualite locale et faites confiance a votre chauffeur guide pour devier si besoin. Les Sri Lankais sont globalement hospitaliers demander a l’hotel ou au chauffeur vaut mieux que d’anciens posts de forum.',
      },
      {
        title: 'Arnaques courantes et comment les eviter',
        body: 'A Sigiriya, Dambulla et au Temple de la Dent, des « guides » non officiels pretendent parfois qu’ils sont necessaires pour entrer ou proposent des detours gemmes et epices a forte commission les billets officiels se vendent a des guichets clairs ; refusez poliment les escortes non sollicitees. Les tuk tuk « gratuits » vers les temples finissent souvent en boutiques hors de prix.\n\nAchats de gemmes et epices : sightseeing optionnel, pas obligation. Convenez du tarif tuk tuk ou taxi avant le depart, ou utilisez les apps a Colombo. Votre chauffeur prive pre reserve supprime la plupart de ces frictions.',
      },
      {
        title: 'Route, tuk tuks et chauffeurs prives',
        body: 'La conduite sri lankaise est assertive aux yeux occidentauxoutes etroites, bus qui doublent dans les virages, pietons au bord des voies. En passager, ceinture quand disponible ; evitez la nuit sur routes de montagne inconnues en conduite autonome.\n\nLa plupart des visiteurs en circuit voyagent avec chauffeur guide licencie en vehicule assuree moyen le plus sur et serein de couvrir les distances. En tuk tuk local, choisissez des vehicules en bon etat et portez un casque sur routes chargees.',
      },
      {
        title: 'Temples, respect culturel et photographie',
        body: 'Les sites religieux exigent tenue modeste, comportement calme et pas de selfies dos tourne aux statues de Bouddhaffense culturelle serieuse. Regles photo variables : certains sanctuaires interieurs interdisent les appareils ; demandez avant de photographier moines ou fideles en priere.\n\nRetirez chaussures avant les sols de sanctuaire ; chaussettes utiles sur pierre chaude. Petites donations bienvenues, jamais obligatoiresez les « droits d’entree » fixes hors guichet officiel.',
      },
      {
        title: 'Faune, parcs nationaux et distance a respecter',
        body: 'Yala, Udawalawe et Minneriya ne sont pas des zooslephants, buffles et leopards sont sauvages. Restez dans les jeeps safari sauf consigne contraire ; n’approchez jamais les elephants a pied, surtout males solitaires ou troupeaux avec petits. Nourrir les singes aux temples cree agressivite et risque de morsure.\n\nCourants marins sur la cote sud parfois fortsespectez drapeaux et consignes des maitres nageurs. Operateurs snorkel et plongee licencies ; ne touchez pas coraux ni vie marine.',
      },
      {
        title: 'Eau, nourriture, urgences et voyageuses solo',
        body: 'Buvez eau en bouteille scellee ou filtree ; evitez le robinet pour les dents hors hotels de confiance. Mangez cuit chaud et epluchez les fruits voir notre guide gastronomique pour la street food. Assurance voyage avec evacuation medicale fortement recommandee.\n\nNumeros d’urgence : police 119, ambulance 1990, police touristique 1912 (souvent anglais). Les voyageuses solo signalent rarement des problemes graves ; transport enregistre la nuit, tenue modeste aux sites religieux, instincts dans zones vides memes regles pratiques que dans une grande partie de l’Asie.',
      },
    ],
    faq: [
      {
        q: 'Le Sri Lanka est il sur pour les touristes ?',
        a: 'Oui, sur les itineraires classiques Colombo, Triangle Culturel, hautes terres et cote sud avec precautions standard. Restez informe, utilisez un transport repute et securisez vos objets de valeur dans la foule.',
      },
      {
        q: 'Quelle est l’arnaque touristique la plus courante ?',
        a: '« Guides » non officiels aux grands temples et sites rocheux, plus detours tuk tuk vers boutiques gemmes ou epices a commission. Billets pre reserves et chauffeur prive reduisent fortement l’exposition.',
      },
      {
        q: 'Est il sur de conduire soi meme au Sri Lanka ?',
        a: 'Legal mais exigeant trafic chaotique et signalisation limitee hors routes principales. La plupart des visiteurs preferent un chauffeur guide licencie connaissant routes et stationnement.',
      },
      {
        q: 'Les safaris a Yala sont ils surs ?',
        a: 'Oui dans les jeeps approuves avec guides licencies et regles de distance autour des elephants et de la faune. Ne sortez pas du vehicule dans le parc sauf autorisation explicite.',
      },
      {
        q: 'Quels numeros d’urgence enregistrer ?',
        a: '119 police, 1990 ambulance, 1912 police touristique. Gardez aussi l’ambassade et la ligne d’urgence de votre assurance voyage.',
      },
    ],
    ctaTitle: 'Voyagez avec un chauffeur guide local de confiance',
    ctaBody: 'Nos circuits prives assures vous associent a des chauffeur guides licencies qui gerent navigation, logistique sur les sites et arrets dejeuner verifiesous profitez de l’experience, pas des pieges.',
    ctaLabel: 'Reserver un circuit prive sur',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
      { pageId: 'tour8', label: 'Circuit de 8 jours au Sri Lanka' },
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parc national de Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur prive' },
      { pageId: 'guideFood', label: 'Guide gastronomique du Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guide des bagages pour le Sri Lanka' },
    ],
  },

  it: {
    h1: 'Viaggiare sicuri in Sri Lanka: consigli pratici, non allarmi',
    lead: 'Lo Sri Lanka e in generale una destinazione sicura e accogliente per i visitatori internazionali, con tassi di criminalita violenta piu bassi di molti paesi ma come ovunque, abitudini sensate su strada, truffe, fauna e salute fanno la differenza tra vacanza fluida e grattacapi evitabili. Integrate gli avvisi MAECI «Viaggiare Sicuri»; questa guida e pratica, non un clone del sito governativo.',
    heroAlt: 'Viaggiatore che si prepara in sicurezza per un road trip in Sri Lanka con autista privato',
    sections: [
      {
        title: 'Sicurezza generale: cosa aspettarsi davvero',
        body: 'Furti di piccola entita capitano in mercati affollati, stazioni degli autobus e spiagge piene. Tenete telefono e portafoglio in tasca anteriore o borsa a tracolla, non appesi allo schienale al bar. Crimini violenti contro turisti sono rari; le dispute riguardano piu spesso soldi, tariffe o «guide» fraintese ai siti.\n\nPer gli avvisi ufficiali italiani usate MAECI Viaggiare Sicuri: noi non copiamo quel sito. Manifestazioni politiche occasionali a Colombo; evitate folle numerose, seguite notizie locali e fidatevi dell’autista guida per deviare se serve.',
      },
      {
        title: 'Truffe comuni e come evitarle',
        body: 'A Sigiriya, Dambulla e al Tempio del Dente, «guide» non ufficiali possono dire che servono per entrare o proporre deviazioni a gemme e spezie con forte commissione biglietti ufficiali a sportelli chiari; rifiutate cortesemente scorti non richieste. Tuk tuk con tour «gratuiti» ai templi finiscono spesso in negozi cari.\n\nAcquisti di gemme e spezie: sightseeing opzionale, non obbligo. Concordate tariffe tuk tuk o taxi prima di partire, o usate app a Colombo. L’autista privato prenotato elimina gran parte di questi attriti.',
      },
      {
        title: 'Viaggio su strada, tuk tuk e autisti privati',
        body: 'La guida sri lankese e assertiva agli standard occidentali: strade strette, bus in curva, pedoni sul ciglio. Come passeggero, cinture quando disponibili; evitate guida notturna su strade di montagna sconosciute se guidate da soli.\n\nLa maggior parte dei visitatori in tour viaggia con autista guida licenziato in veicolo assicuratoil modo piu sicuro e rilassato per coprire distanze. Con tuk tuk locali, scegliete veicoli in buono stato e casco su strade trafficate.',
      },
      {
        title: 'Templi, rispetto culturale e fotografia',
        body: 'I siti religiosi richiedono abiti modesti, comportamento quieto e niente selfie con le spalle alle statue del Buddha: offesa culturale seria. Regole foto variabili: alcuni santuari interni vietano macchine fotografiche; chiedete prima di fotografare monaci o fedeli in preghiera.\n\nTogliete scarpe prima dei pavimenti del santuario; calzini utili su pietra calda. Piccole donazioni benvenute, mai obbligatorie; ignorate «tasse d’ingresso» fisse oltre lo sportello ufficiale.',
      },
      {
        title: 'Fauna, parchi nazionali e distanza da mantenere',
        body: 'Yala, Udawalawe e Minneriya non sono zoo elefanti, bufali e leopardi sono selvatici. Restate nei jeep safari salvo diversa istruzione; non avvicinatevi agli elefanti a piedi, soprattutto maschi solitari o branchi con piccoli. Dare cibo alle scimmie ai templi crea aggressivita e rischio morsi.\n\nCorrenti marine sulla costa sud possono essere forti: rispettate bandiere e bagnini. Operatori snorkel e immersioni licenziati; non toccate coralli o vita marina.',
      },
      {
        title: 'Acqua, cibo, emergenze e viaggiatrici sole',
        body: 'Bevete acqua in bottiglia sigillata o filtrata; evitate rubinetto per i denti fuori hotel affidabili. Mangiate cibo appena cotto e sbucciate la frutta vedi la nostra guida gastronomica per lo street food. Assicurazione viaggio con evacuazione medica fortemente consigliata.\n\nNumeri di emergenza: polizia 119, ambulanza 1990, polizia turistica 1912 (spesso inglese). Viaggiatrici sole segnalano raramente problemi gravi; trasporto registrato di notte, abiti modesti nei siti religiosi, istinto in zone vuote stesse regole pratiche di gran parte dell’Asia.',
      },
    ],
    faq: [
      {
        q: 'Lo Sri Lanka e sicuro per i turisti?',
        a: 'Si, sulle rotte tipiche Colombo, Triangolo Culturale, entroterra collinare e costa sud con precauzioni standard. Restate informati, usate trasporti affidabili e tenete al sicuro oggetti di valore nella folla.',
      },
      {
        q: 'Qual e la truffa turistica piu comune?',
        a: '«Guide» non ufficiali ai grandi templi e siti rocciosi, piu deviazioni tuk tuk a negozi gemme o spezie a commissione. Biglietti prenotati e autista privato riducono molto l’esposizione.',
      },
      {
        q: 'E sicuro guidare da soli in Sri Lanka?',
        a: 'Legale ma impegnativo traffico caotico e segnaletica limitata fuori dalle rotte principali. La maggior parte preferisce autista guida licenziato che conosce strade e parcheggi.',
      },
      {
        q: 'I safari a Yala sono sicuri?',
        a: 'Si nei jeep approvati con guide licenziate e regole di distanza attorno a elefanti e fauna. Non uscite dal veicolo nel parco salvo permesso esplicito.',
      },
      {
        q: 'Quali numeri di emergenza salvare?',
        a: '119 polizia, 1990 ambulanza, 1912 polizia turistica. Tenete anche ambasciata e linea emergenze assicurazione viaggio.',
      },
    ],
    ctaTitle: 'Viaggiate con un autista guida locale affidabile',
    ctaBody: 'I nostri tour privati assicurati vi abbinano ad autisti guide licenziati che gestiscono navigazione, logistica sui siti e soste pranzo verificate voi vi concentrate sull’esperienza, non sulle insidie.',
    ctaLabel: 'Prenota un tour privato sicuro',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
      { pageId: 'tour8', label: 'Tour di 8 giorni in Sri Lanka' },
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parco nazionale di Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Guida all’autista privato' },
      { pageId: 'guideFood', label: 'Guida gastronomica dello Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guida ai bagagli per lo Sri Lanka' },
      { pageId: 'marketItaly', label: 'Viaggio dall’Italia' },
    ],
  },

  es: {
    h1: 'Guia de seguridad en Sri Lanka: consejos practicos para viajar con confianza',
    lead: 'Sri Lanka es en general un destino seguro y acogedor para visitantes internacionales, con tasas de delitos violentos mas bajas que en muchos paises pero como en cualquier lugar, habitos sensatos en carretera, estafas, fauna y salud marcan la diferencia entre unas vacaciones fluidas y un dolor de cabeza evitable. Esta guia cubre que vigilar, no que temer.',
    heroAlt: 'Viajero preparandose con seguridad para un road trip en Sri Lanka con chofer privado',
    sections: [
      {
        title: 'Seguridad general: que deben esperar realmente los visitantes',
        body: 'Existen hurtos menores en mercados concurridos, estaciones de autobus y playas llenaselefono y cartera en bolsillo delantero o bolso cruzado, no colgados de la silla en un cafe. La delincuencia violenta contra turistas es rara; las disputas suelen ser por dinero, tarifas o «guias» mal entendidos en los sitios.\n\nOcasionalmente hay manifestaciones politicas en Colombo; evite grandes aglomeraciones, siga noticias locales y confie en su chofer guia para desviarse si hace falta. Los sri lankeses son en general hospitalariosguntar al hotel o al chofer supera posts antiguos de foros.',
      },
      {
        title: 'Estafas comunes y como evitarlas',
        body: 'En Sigiriya, Dambulla y el Templo del Diente, «guias» no oficiales pueden decir que son necesarios para entrar o proponer desvios a tiendas de gemas y especias con fuerte comisionos tickets oficiales se venden en mostradores claros; decline cortesmente acompanantes no solicitados. Tuk tuk con tours «gratis» a templos suelen terminar en tiendas caras.\n\nCompras de gemas y especias: turismo opcional, no obligacion. Acuerde tarifas de tuk tuk o taxi antes de salir, o use apps en Colombo. Su chofer privado reservado elimina gran parte de esta friccion.',
      },
      {
        title: 'Viajes por carretera, tuk tuk y choferes privados',
        body: 'La conduccion sri lankesa es assertiva segun estandares occidentalesreteras estrechas, autobuses adelantando en curvas, peatones al borde. Como pasajero, cinturon cuando haya; evite conducir de noche por carreteras de montana desconocidas si conduce usted.\n\nLa mayoria de visitantes en circuito viajan con chofer guia licenciado en vehiculo aseguradoforma mas segura y tranquila de cubrir distancias. Con tuk tuk locales, elija vehiculos en buen estado y casco en rutas concurridas.',
      },
      {
        title: 'Templos, respeto cultural y fotografia',
        body: 'Los sitios religiosos exigen ropa modesta, comportamiento tranquilo y no selfies de espaldas a estatuas de Buda ofensa cultural seria. Reglas de foto variables: algunos santuarios interiores prohiben camaras; pregunte antes de fotografiar monjes o fieles en oracion.\n\nQuitese zapatos antes de los suelos del santuario; calcetines ayudan sobre piedra caliente. Donaciones pequenas bienvenidas, nunca obligatorias ignore «tasas de entrada» fijas mas alla del mostrador oficial.',
      },
      {
        title: 'Fauna, parques nacionales y mantener distancia',
        body: 'Yala, Udawalawe y Minneriya no son zoos elefantes, bufalos y leopardos son salvajes. Permanezca en jeeps safari salvo instruccion contraria; nunca se acerque a elefantes a pie, especialmente machos solitarios o manadas con crias. Alimentar monos en templos crea agresividad y riesgo de mordeduras.\n\nCorrientes marinas en la costa sur pueden ser fuertes respete banderas y socorristas. Operadores de snorkel y buceo licenciados; no toque coral ni vida marina.',
      },
      {
        title: 'Agua, comida, emergencias y mujeres que viajan solas',
        body: 'Beba agua embotellada sellada o filtrada; evite grifo para cepillarse fuera de hoteles de confianza. Coma recien cocinado y pela fruta usted mismo vea nuestra guia gastronomica para matices de comida callejera. Seguro de viaje con evacuacion medica muy recomendable.\n\nNumeros de emergencia: policia 119, ambulancia 1990, policia turistica 1912 (a menudo ingles). Mujeres solas reportan raramente problemas graves; transporte registrado de noche, ropa modesta en sitios religiosos, instinto en zonas vacias mismas reglas practicas que en gran parte de Asia.',
      },
    ],
    faq: [
      {
        q: 'Es seguro Sri Lanka para turistas?',
        a: 'Si, en rutas tipicas Colombo, Triangulo Cultural, tierras altas y costa sur con precauciones estandar. Mantengase informado, use transporte reputado y asegure objetos de valor en multitudes.',
      },
      {
        q: 'Cual es la estafa turistica mas comun?',
        a: '«Guias» no oficiales en grandes templos y sitios rocosos, mas desvios en tuk tuk a tiendas de gemas o especias con comision. Tickets reservados y chofer privado reducen mucho la exposicion.',
      },
      {
        q: 'Es seguro conducir por uno mismo en Sri Lanka?',
        a: 'Legal pero exigente trafico caotico y senalizacion limitada fuera de rutas principales. La mayoria prefiere chofer guia licenciado que conoce carreteras y aparcamiento.',
      },
      {
        q: 'Son seguros los safaris en Yala?',
        a: 'Si en jeeps aprobados con guias licenciados y reglas de distancia con elefantes y fauna. No salga del vehiculo dentro del parque salvo permiso explicito.',
      },
      {
        q: 'Que numeros de emergencia guardar?',
        a: '119 policia, 1990 ambulancia, 1912 policia turistica. Guarde tambien embajada y linea de emergencia del seguro de viaje.',
      },
    ],
    ctaTitle: 'Viaje con un chofer guia local de confianza',
    ctaBody: 'Nuestros tours privados asegurados le emparejan con choferes guia licenciados que gestionan navegacion, logistica en sitios y paradas de almuerzo verificadas usted se centra en la experiencia, no en evitar trampas.',
    ctaLabel: 'Reservar un tour privado seguro',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
      { pageId: 'tour8', label: 'Tour de 8 dias por Sri Lanka' },
      { pageId: 'tour5', label: 'Tour de 5 dias por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parque Nacional de Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Guia del chofer privado' },
      { pageId: 'guideFood', label: 'Guia gastronomica de Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guia de equipaje para Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Przewodnik bezpieczenstwa na Sri Lance: praktyczne wskazowki na pewny wyjazd',
    lead: 'Sri Lanka jest ogolnie bezpiecznym i goscinnym celem dla turystow z zagranicy, z nizszym poziomem przestepczosci z uzyciem przemocy niz w wielu krajach lecz jak wszedzie, rozsadne nawyki na drodze, wobec oszustw, dzikiej przyrody i zdrowia decyduja o plynnym urlopie albo uniknietych klopotach. Ten przewodnik mowi, na co uwazac, nie czego sie bac.',
    heroAlt: 'Podrozny bezpiecznie przygotowujacy sie do trasy po Sri Lance z prywatnym kierowca',
    sections: [
      {
        title: 'Bezpieczenstwo ogolne: czego naprawde oczekiwac',
        body: 'Drobne kradzieze zdarzaja sie na tlocznych targach, dworcach autobusowych i zatloczonych plazach telefon i portfel w przedniej kieszeni lub torbie przez ramie, nie na oparciu krzesla w kawiarni. Przestepczosc z uzyciem przemocy wobec turystow jest rzadka; spory dotycza raczej pieniedzy, taryf lub „przewodnikow” przy atrakcjach.\n\nDemonstracje polityczne zdarzaja sie czasem w Colombo; unikaj tlumow, sledz lokalne wiadomosci i ufaj kierowcy przewodnikowi przy omijaniu tras. Srilankijczycy sa w wiekszosci goscinni pytanie hotelu lub kierowcy o lokalne warunki bije przestarzale posty na forach.',
      },
      {
        title: 'Typowe oszustwa i jak ich unikac',
        body: 'W Sigiriya, Dambulli i przy Swiatyni Zeba nieoficjalni „przewodnicy” twierdza czasem, ze sa konieczni do wejscia, lub ciagna do sklepow z kamieniami i przyprawami z wysoka prowizja oficjalne bilety sa przy jasnych kasach; grzecznie odmawiaj nieproszonych towarzyszy. Tuk tuk z „darmowymi” wycieczkami po swiatyniach czesto konczy sie w drogich sklepach.\n\nZakupy kamieni i przypraw traktuj jako opcjonalne zwiedzanie, nie obowiazek. Ustal taryfe tuk tuk lub taxi przed jazda albo uzywaj aplikacji w Colombo. Prywatny kierowca w zarezerwowanej wycieczce usuwa wiekszosc tych tarc.',
      },
      {
        title: 'Podroz droga, tuk tuk i prywatni kierowcy',
        body: 'Jazda na Sri Lance jest asertywna wedlug zachodnich standardow waskie drogi, autobusy wyprzedzajace na zakretach, piesi przy krawedzi. Jako pasazer zapinaj pasy, gdy sa; unikaj nocnej jazdy po nieznanych gorskich drogach przy samodzielnej jezdzie.\n\nWiekszosc turystow na trasach okreznych jedzie z licencjonowanym kierowca przewodnikiem w ubezpieczonym aucie najbezpieczniej i najspokojniej na dystansie. Przy lokalnych tuk tuk wybieraj sprawne pojazdy i nos kask na ruchliwych trasach.',
      },
      {
        title: 'Swiatynie, szacunek kulturowy i fotografia',
        body: 'Miejsca religijne wymagaja skromnej odziezy, spokojnego zachowania i braku selfie tylem do posagow Buddy powazne obrazenie kulturowe. Zasady fotografii rozne: niektore wewnetrzne kaplice zabraniaja aparatow; pytaj przed fotografowaniem mnichow lub modlacych sie.\n\nZdejmuj buty przed posadzka kaplicy; skarpetki pomagaja na goracym kamieniu. Drobne datki mile widziane, nigdy obowiazkowe ignoruj stale „oplaty wejscia” poza oficjalna kasa.',
      },
      {
        title: 'Dzika przyroda, parki narodowe i zachowanie dystansu',
        body: 'Yala, Udawalawe i Minneriya to nie zoo slonie, bawoly i lamparty sa dzikie. Zostan w jeepach safari, chyba ze przewodnik kaze inaczej; nie podchodz do sloni pieszo, zwlaszcza samotnych samcow czy stad z mlodymi. Karmienie malp przy swiatyniach prowokuje agresje i ugryzienia.\n\nPrady morskie na poludniowym wybrzezu bywaja silne sluchaj flag i ratownikow. Operatorzy snorkelingu i nurkowania powinni byc licencjonowani; nie dotykaj korali ani zycia morskiego.',
      },
      {
        title: 'Woda, jedzenie, nagle wypadki i kobiety podrozujace solo',
        body: 'Pij wode butelkowana z plomba lub filtrowana; unikaj kranu do mycia zebow poza zaufanymi hotelami. Jedz swiezo ugotowane i obieraj owoce sam zobacz przewodnik kulinarny o street foodzie. Ubezpieczenie podrozne z ewakuacja medyczna mocno zalecane.\n\nNumery alarmowe: policja 119, pogotowie 1990, policja turystyczna 1912 (czesto po angielsku). Kobiety podrozujace same rzadko zglaszaja powazne problemy; zarejestrowany transport noca, skromny stroj w miejscach religijnych, instynkt w pustych miejscach te same praktyczne zasady co w wiekszosci Azji.',
      },
    ],
    faq: [
      {
        q: 'Czy Sri Lanka jest bezpieczna dla turystow?',
        a: 'Tak, na typowych trasach Colombo, Trojkat Kulturowy, gory i poludniowe wybrzeze przy standardowych srodkach ostroznosci. Badz na biezaco z wiadomosciami, korzystaj z renomowanego transportu i zabezpiecz wartosciowe rzeczy w tlumie.',
      },
      {
        q: 'Jakie jest najczestsze oszustwo turystyczne?',
        a: 'Nieoficjalni „przewodnicy” przy duzych swiatyniach i skalach oraz objazdy tuk tuk do sklepow z kamieniami lub przyprawami za prowizje. Wczesniej kupione bilety i prywatny kierowca mocno to ograniczaja.',
      },
      {
        q: 'Czy bezpiecznie jest jezdzic samemu po Sri Lance?',
        a: 'Legalne, lecz wymagajace chaotyczny ruch i ograniczone oznakowanie poza glownymi trasami. Wiekszosc woli licencjonowanego kierowce przewodnika znajacego drogi i parkingi.',
      },
      {
        q: 'Czy safari w Yali sa bezpieczne?',
        a: 'Tak w zatwierdzonych jeepach z licencjonowanymi przewodnikami parku i zasadami dystansu wobec sloni i innej dzikiej przyrody. Nie wychodz z pojazdu w parku, chyba ze wyraznie dozwolone.',
      },
      {
        q: 'Jakie numery alarmowe zapisac?',
        a: '119 policja, 1990 pogotowie, 1912 policja turystyczna. Zapisz tez kontakt ambasady i numer alarmowy ubezpieczenia podroznego.',
      },
    ],
    ctaTitle: 'Podrozuj z zaufanym lokalnym kierowca przewodnikiem',
    ctaBody: 'Nasze ubezpieczone prywatne wycieczki lacza Cie z licencjonowanymi kierowcami przewodnikami, ktorzy ogarniaja nawigacje, logistyke na miejscach i sprawdzone przystanki obiadowe Ty skupiasz sie na doswiadczeniu, nie na pulapkach.',
    ctaLabel: 'Zarezerwuj bezpieczna prywatna wycieczke',
    relatedTours: [
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour8', label: '8 dniowa wycieczka po Sri Lance' },
      { pageId: 'tour5', label: '5 dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Park Narodowy Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnym kierowcy' },
      { pageId: 'guideFood', label: 'Przewodnik kulinarny po Sri Lance' },
      { pageId: 'guidePacking', label: 'Przewodnik pakowania na Sri Lanke' },
    ],
  },

  ru: {
    h1: 'Гид по безопасности на Шри Ланке: практические советы для уверенной поездки',
    lead: 'Шри Ланка в целом безопасна и гостеприимна для иностранных гостей, с более низким уровнем насильственной преступности, чем во многих странах но как везде, разумные привычки на дороге, в отношении мошенничества, дикой природы и здоровья отличают спокойный отдых от избегаемых проблем. Этот гид о том, на что смотреть, а не чего бояться.',
    heroAlt: 'Путешественник готовится к поездке по Шри Ланке с частным водителем',
    sections: [
      {
        title: 'Общая безопасность: чего ждать на самом деле',
        body: 'Мелкие кражи бывают на оживлённых рынках, автовокзалах и людных пляжах телефон и кошелёк в переднем кармане или через плечо, не на спинке стула в кафе. Насильственные преступления против туристов редки; споры чаще о деньгах, тарифах или «гидах» у достопримечательностей.\n\nПолитические демонстрации иногда проходят в Коломбо; избегайте больших скоплений, следите за новостями и доверяйте водителю гиду при объезде. Шри ланкийцы в основном гостеприимны спросить отель или водителя лучше, чем опираться на старые форумные посты.',
      },
      {
        title: 'Распространённые мошенничества и как их обойти',
        body: 'В Сигирии, Дамбулле и у Храма Зуба неофициальные «гиды» могут утверждать, что без них не войти, или вести в магазины камней и специй с высокой комиссией официальные билеты продаются у понятных касс; вежливо отказывайтесь от навязанного сопровождения. Tuk tuk с «бесплатными» турами по храмам часто заканчиваются в дорогих лавках.\n\nПокупки камней и специй опциональный осмотр, не обязанность. Договаривайтесь о цене tuk tuk или такси до поездки или используйте приложения в Коломбо. Частный водитель в забронированном туре снимает большую часть этих трений.',
      },
      {
        title: 'Дорожные поездки, tuk tuk и частные водители',
        body: 'Вождение на Шри Ланке кажется напористым по западным меркам узкие дороги, автобусы на поворотах, пешеходы у обочины. Как пассажир ремни, где есть; избегайте ночной езды по незнакомым горным дорогам при самостоятельной аренде.\n\nБольшинство туристов в круговых турах ездят с лицензированным водителем гидом в застрахованном авто самый безопасный и спокойный способ преодолевать расстояния. На местных tuk tuk выбирайте исправные машины и надевайте шлем на оживлённых маршрутах.',
      },
      {
        title: 'Храмы, культурное уважение и фотография',
        body: 'Религиозные места требуют скромной одежды, тихого поведения и запрещают селфи спиной к статуям Будды серьёзное культурное нарушение. Правила съёмки разные: внутренние святыни иногда запрещают камеры; спрашивайте перед съёмкой монахов или молящихся.\n\nСнимайте обувь перед полом святыни; носки помогают на раскалённом камне. Небольшие пожертвования приветствуются, но не обязательны игнорируйте «фиксированные сборы» вне официальной кассы.',
      },
      {
        title: 'Дикая природа, нацпарки и дистанция',
        body: 'Яла, Удавalawe и Миннерия не зоопарки; слоны, буйволы и леопарды дикие. Оставайтесь в сафari-джипах, если гид не разрешит иное; не подходите к слонам пешком, особенно к одиноким самцам или стадам с детёнышами. Кормление обезьян у храмов провоцирует агрессию и укусы.\n\nМорские течения на южном побережье могут быть сильными слушайте флаги и спасателей. Операторы снорклинга и дайвинга должны быть лицензированы; не трогайте кораллы и морскую жизнь.',
      },
      {
        title: 'Вода, еда, экстренные случаи и женщины в solo-поездках',
        body: 'Пейте запечатанную бутилированную или фильтрованную воду; избегайте водопроводной для чистки зубов вне доверенных отелей. Ешьте свежеприготовленное и чистите фрукты сами см. наш гастрономический гид про уличную еду. Настоятельно рекомендуется туристическая страховка с медицинским покрытием.\n\nЭкстренные номера: полиция 119, скорая 1990, туристическая полиция 1912 (часто по английски). Женщины в solo-поездках редко сообщают о серьёзных проблемах; ночью зарегистрированный транспорт, скромная одежда в религиозных местах, инстинкт в пустых районах те же практичные правила, что и в большей части Азии.',
      },
    ],
    faq: [
      {
        q: 'Безопасна ли Шри Ланка для туристов?',
        a: 'Да, на типичных маршрутах Коломбо, Культурный треугольник, горная местность и южное побережье при стандартных мерах предосторожности. Следите за новостями, используйте надёжный транспорт и берегите ценности в толпе.',
      },
      {
        q: 'Какое мошенничество встречается чаще всего?',
        a: 'Неофициальные «гиды» у крупных храмов и скальных объектов плюс объезды tuk tuk в магазины камней и специй за комиссию. Предварительные билеты и частный водитель сильно снижают риск.',
      },
      {
        q: 'Безопасно ли арендовать авто и ехать самому?',
        a: 'Законно, но требовательно хаотичный трафик и слабая разметка вне главных маршрутов. Большинство предпочитает лицензированного водителя гида, знающего дороги и парковки.',
      },
      {
        q: 'Безопасны ли сафari в Яле?',
        a: 'Да в одобренных джипах с лицензированными гидами парка и правилами дистанции к слонам и другой дикой природе. Не выходите из машины в парке без явного разрешения.',
      },
      {
        q: 'Какие номера экстренных служб сохранить?',
        a: '119 полиция, 1990 скорая, 1912 туристическая полиция. Также сохраните контакт посольства и линию экстренной помощи страховки.',
      },
    ],
    ctaTitle: 'Путешествуйте с проверенным местным водителем гидом',
    ctaBody: 'Наши застрахованные частные туры сопоставляют вас с лицензированными водителями гидами, которые берут на себя навигацию, логистику на объектах и проверенные обеденные остановки вы сосредоточены на впечатлениях, а не на ловушках.',
    ctaLabel: 'Забронировать безопасный частный тур',
    relatedTours: [
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
      { pageId: 'tour8', label: '8 дневный тур по Шри Ланке' },
      { pageId: 'tour5', label: '5 дневный тур по Шри Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Национальный парк Яла' },
      { pageId: 'destSigiriya', label: 'Сигирия' },
      { pageId: 'destKandy', label: 'Канди' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Гид по частному водителю' },
      { pageId: 'guideFood', label: 'Гид по еде Шри Ланки' },
      { pageId: 'guidePacking', label: 'Гид по упаковке вещей для Шри Ланки' },
      { pageId: 'marketRussia', label: 'Туры из России' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Sicherheits Ratgeber: praktische Tipps fur eine selbstbewusste Reise',
    lead: 'Sri Lanka ist fur internationale Besucher im Allgemeinen sicher und gastfreundlich, mit niedrigeren Raten gewalttatiger Kriminalitat als in vielen Landern doch wie uberall machen vernunftige Gewohnheiten bei Strassenverkehr, Betrug, Wildtieren und Gesundheit den Unterschied zwischen reibungslosem Urlaub und vermeidbarem Arger. Dieser Ratgeber zeigt, worauf Sie achten sollten, nicht wovor Sie Angst haben mussen.',
    heroAlt: 'Reisender bereitet sich sicher auf eine Sri Lanka Roadtrip mit Privatfahrer vor',
    sections: [
      {
        title: 'Allgemeine Sicherheit: was Besucher wirklich erwarten sollten',
        body: 'Kleine Diebstahle gibt es auf belebten Markten, Busbahnhofen und vollen Stranden Handy und Geldborse in Vorder- oder Umhangetasche, nicht uber dem Stuhl im Cafe hangen. Gewalttaten gegen Touristen sind selten; Streit geht eher um Geld, Fahrpreise oder missverstandene „Fuhrer“ an Sehenswurdigkeiten.\n\nPolitische Demonstrationen kommen gelegentlich in Colombo vor; grosse Ansammlungen meiden, lokale Nachrichten verfolgen und Ihrem Fahrer Guide vertrauen, wenn Umleitung notig ist. Sri Lanker sind uberwiegend gastfreundlich Hotel oder Fahrer nach lokalen Bedingungen fragen schlagt veraltete Forenbeitrage.',
      },
      {
        title: 'Haufige Betrugereien und wie man sie umgeht',
        body: 'An Sigiriya, Dambulla und am Zahntempel behaupten inoffizielle „Fuhrer“ manchmal, man brauche sie zum Eintritt, oder locken zu Edelstein und Gewurzshops mit hohem Provisionsdruck offizielle Tickets gibt es an klaren Schaltern; ungebetene Begleiter hoflich ablehnen. Tuk tuk Fahrer mit „kostenlosen“ Tempeltouren enden oft in uberteuerten Laden.\n\nEdelstein und Gewurzkaufe sind optionales Sightseeing, keine Pflicht. Tuk tuk und Taxipreise vor Fahrtantritt vereinbaren oder Fahr Apps in Colombo nutzen. Ihr Privatfahrer Guide nimmt bei gebuchter Rundreise den Grossteil dieser Reibung.',
      },
      {
        title: 'Strassenverkehr, Tuk tuks und Privatfahrer',
        body: 'Srilankisches Fahren wirkt nach westlichem Mass assertiv enge Strassen, Busse in Kurven, Fussganger am Fahrbahnrand sind normal. Als Passagier Anschnallgurte nutzen, wenn vorhanden, und Nachtfahrten auf unbekannten Bergstrassen beim Selbstfahren meiden.\n\nDie meisten Rundreisenden fahren mit lizenziertem Fahrer Guide in versichertem Fahrzeug der sicherste und entspannteste Weg uber Distanzen. Bei lokalen Tuk tuks Fahrer mit verkehrstuchtigen Fahrzeugen wahlen und auf belebten Strecken Helm tragen.',
      },
      {
        title: 'Tempel, kultureller Respekt und Fotografie',
        body: 'Religiose Statten verlangen dezente Kleidung, ruhiges Verhalten und keine Selfies mit dem Rucken zu Buddha Statuen ein ernsthafter kultureller Fehler. Fotoregeln variieren: innere Schreine verbieten Kameras; vor Fotos von Monchen oder Betenden fragen.\n\nSchuhe vor dem Betreten der Schreinboden ausziehen; Socken helfen auf heissem Stein. Kleine Spenden willkommen, nie Pflicht ignorieren Sie feste „Eintrittsgebuhren“ jenseits des offiziellen Schalters.',
      },
      {
        title: 'Wildtiere, Nationalparks und Abstand halten',
        body: 'Yala, Udawalawe und Minneriya sind keine Zoos Elefanten, Buffel und Leoparden sind wild. In Safari Jeeps bleiben, sofern Guides nichts anderes anweisen; Elefanten nie zu Fuss nahern, besonders Einzelmanner oder Herden mit Kalbern. Affen an Tempeln und Strassen futtern erzeugt Aggression und Bissrisiko.\n\nMeeresstromungen an der Sudkuste konnen stark sein Flaggen und Rettungsschwimmer beachten. Schnorchel und Tauchbetreiber sollten lizenziert sein; Korallen und Meeresleben nicht anfassen.',
      },
      {
        title: 'Wasser, Essen, Notfalle und alleinreisende Frauen',
        body: 'Versiegeltes Flaschen- oder gefiltertes Wasser trinken; Leitungswasser zum Zahneputzen ausserhalb vertrauenswurdiger Hotels meiden. Frisch gekochtes Essen und selbst geschaltes Obst siehe unseren Kulinarik Ratgeber fur Street Food Nuancen. Reiseversicherung mit medizinischer Evakuierung dringend empfohlen.\n\nNotrufnummern: Polizei 119, Rettungsdienst 1990, Touristenpolizei 1912 (oft Englisch). Alleinreisende Frauen berichten selten ernsthafte Probleme; registrierten Transport nachts nutzen, in Tempeln dezent kleiden und Instinkte in leeren Gegenden vertrauen dieselben praktischen Regeln wie in weiten Teilen Asiens.',
      },
    ],
    faq: [
      {
        q: 'Ist Sri Lanka fur Touristen sicher?',
        a: 'Ja, auf typischen Urlaubsrouten Colombo, Kulturdreieck, Bergland und Sudkuste bei Standardvorsicht. Lokale Nachrichten verfolgen, seriosen Transport nutzen und Wertsachen in Menschenmengen sichern.',
      },
      {
        q: 'Was ist der haufigste Touristenbetrug?',
        a: 'Inoffizielle „Fuhrer“ an grossen Tempeln und Felsstatten plus Tuk tuk Umwege zu Provisions Edelstein- oder Gewurzshops. Vorgebuchte Tickets und Privatfahrer reduzieren das deutlich.',
      },
      {
        q: 'Ist Selbstfahren in Sri Lanka sicher?',
        a: 'Legal, aber anspruchsvoll chaotischer Verkehr und begrenzte Beschilderung abseits Hauptrouten. Die meisten Besucher bevorzugen lizenzierte Fahrer Guides, die Strassen und Parkplatze kennen.',
      },
      {
        q: 'Sind Yala Safaris sicher?',
        a: 'Ja in zugelassenen Jeeps mit lizenzierten Parkfuhrern und Abstandsregeln zu Elefanten und anderer Wildnis. Fahrzeug im Park nicht verlassen, ausser ausdrucklich erlaubt.',
      },
      {
        q: 'Welche Notrufnummern sollte ich speichern?',
        a: '119 Polizei, 1990 Rettungsdienst, 1912 Touristenpolizei. Botschaftskontakt und Notfallnummer der Reiseversicherung ebenfalls im Telefon speichern.',
      },
    ],
    ctaTitle: 'Reisen Sie mit einem vertrauenswurdigen Fahrer Guide',
    ctaBody: 'Unsere versicherten Privatreisen verbinden Sie mit lizenzierten Fahrer Guides, die Navigation, Logistik an Sehenswurdigkeiten und geprufte Mittagsstopps ubernehmen Sie konzentrieren sich auf das Erlebnis, nicht auf Fallstricke.',
    ctaLabel: 'Sichere Privatreise buchen',
    relatedTours: [
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige Sri Lanka Rundreise' },
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala Nationalpark' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer Ratgeber' },
      { pageId: 'guideFood', label: 'Sri Lanka Kulinarik Ratgeber' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste Ratgeber' },
    ],
  }
};
