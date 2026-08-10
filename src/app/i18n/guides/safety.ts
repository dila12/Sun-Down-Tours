import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka safety guide (pageId: guideSafety).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const SAFETY_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Safety Guide: Practical Tips for a Confident Trip',
    lead: 'Sri Lanka is generally a safe, welcoming destination for international visitors, with low violent-crime rates compared with many countries but like anywhere, sensible habits around roads, scams, wildlife and health make the difference between a smooth holiday and an avoidable headache. This guide covers what to watch for, not what to fear.',
    heroImage: 'assets/img/5daysTours/26.webp',
    heroAlt: 'Traveller preparing safely for a Sri Lanka road trip with a private driver',
    sections: [
      {
        id: 'generalSafety',
        title: 'General safety: what visitors should actually expect',
        body: 'Petty theft exists in busy markets, bus stations and crowded beaches. Keep phones and wallets in front pockets or a cross-body bag, not hanging from a chair at a café. Violent crime targeting tourists is rare; disputes are more often about money, transport fares or misunderstood “guides” at sites.\n\nPolitical demonstrations occur occasionally in Colombo; avoid large gatherings, follow local news and trust your driver-guide to reroute if needed. Sri Lankans are broadly hospitable. Asking your hotel or driver about local conditions beats relying on outdated forum posts.',
      },
      {
        id: 'scamsToAvoid',
        title: 'Common scams and how to sidestep them',
        body: 'At Sigiriya, Dambulla and the Temple of the Tooth, unofficial “guides” may claim you need them to enter or offer gemstones and spice-shop detours with heavy commission pressure. Official tickets are sold at clear counters; politely decline unsolicited escorts. Tuk-tuk drivers offering “free” temple tours often end at overpriced shops.\n\nGem and spice purchases should be treated as optional sightseeing, not obligations. Agree tuk-tuk and taxi fares before setting off, or use ride apps in Colombo. Your private chauffeur-guide removes most of this friction on a pre-booked round tour.',
      },
      {
        id: 'roadTravel',
        title: 'Road travel, tuk-tuks and private drivers',
        body: 'Sri Lankan driving is assertive by Western standards. Narrow roads, buses overtaking on bends and pedestrians on highway edges are normal. As a passenger, wear seatbelts when available and avoid night driving on unfamiliar hill-country roads if you self-drive.\n\nMost visitors on round tours travel with a licensed chauffeur-guide in an insured vehicle, which is the safest and least stressful way to cover distance. If you use tuk-tuks locally, choose drivers with roadworthy vehicles and helmet yourself on busy routes.',
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
        body: 'Drink sealed bottled or filtered water; avoid tap water for brushing teeth outside trusted hotels. Eat freshly cooked food and peel fruit yourself see our food guide for street-eating nuance. Travel insurance with medical evacuation cover is strongly recommended.\n\nEmergency numbers: police 119, ambulance 1990, tourist police hotline 1912 (English often available). Solo women travellers generally report few serious issues; use registered transport at night, dress modestly at religious sites and trust instincts in empty areas the same practical rules as most of Asia.',
      },
    ],
    faq: [
      {
        q: 'Is Sri Lanka safe for tourists in 2026?',
        a: 'Yes, for typical holiday routes Colombo, the Cultural Triangle, hill country and south-coast beaches when standard precautions apply. Stay informed about local news, use reputable transport and keep valuables secure in crowds.',
      },
      {
        q: 'What is the most common tourist scam in Sri Lanka?',
        a: 'Unofficial “guides” at major temples and rock sites, plus tuk-tuk detours to commission gem or spice shops, are the most frequent nuisances. Pre-booked tickets and a private driver reduce exposure significantly.',
      },
      {
        q: 'Is it safe to drive yourself in Sri Lanka?',
        a: 'Self-driving is legal but demanding traffic is chaotic and signage limited outside main routes. Most visitors prefer a licensed chauffeur-guide who knows road conditions and handles parking at busy sites.',
      },
      {
        q: 'Are safaris in Yala safe?',
        a: 'Yes when you stay in approved jeeps with licensed park guides and follow distance rules around elephants and other wildlife. Never exit the vehicle inside the park unless explicitly permitted.',
      },
      {
        q: 'What emergency numbers should I save in Sri Lanka?',
        a: 'Save 119 for police, 1990 for ambulance services and 1912 for tourist police. Keep your embassy contact and travel-insurance emergency line in your phone as well.',
      },
    ],
    ctaTitle: 'Travel with a trusted local driver-guide',
    ctaBody: 'Our insured private tours pair you with licensed chauffeur-guides who handle navigation, site logistics and vetted lunch stops so you focus on the experience, not on avoiding pitfalls.',
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
    ],
  },

  de: {
    h1: 'Sri Lanka Sicherheits-Ratgeber: praktische Tipps für eine selbstbewusste Reise',
    lead: 'Sri Lanka ist für internationale Besucher im Allgemeinen sicher und gastfreundlich, mit niedrigeren Raten gewalttätiger Kriminalität als in vielen Ländern doch wie überall machen vernünftige Gewohnheiten bei Straßenverkehr, Betrug, Wildtieren und Gesundheit den Unterschied zwischen reibungslosem Urlaub und vermeidbarem Ärger. Dieser Ratgeber zeigt, worauf Sie achten sollten, nicht wovor Sie Angst haben müssen.',
    heroAlt: 'Reisender bereitet sich sicher auf eine Sri-Lanka-Roadtrip mit Privatfahrer vor',
    sections: [
      {
        title: 'Allgemeine Sicherheit: was Besucher wirklich erwarten sollten',
        body: 'Kleine Diebstähle gibt es auf belebten Märkten, Busbahnhöfen und vollen Stränden Handy und Geldbörse in Vorder- oder Umhängetasche, nicht über dem Stuhl im Café hängen. Gewalttaten gegen Touristen sind selten; Streit geht eher um Geld, Fahrpreise oder missverstandene „Führer“ an Sehenswürdigkeiten.\n\nPolitische Demonstrationen kommen gelegentlich in Colombo vor; große Ansammlungen meiden, lokale Nachrichten verfolgen und Ihrem Fahrer-Guide vertrauen, wenn Umleitung nötig ist. Sri Lanker sind überwiegend gastfreundlich Hotel oder Fahrer nach lokalen Bedingungen fragen schlägt veraltete Forenbeiträge.',
      },
      {
        title: 'Häufige Betrügereien und wie man sie umgeht',
        body: 'An Sigiriya, Dambulla und am Zahntempel behaupten inoffizielle „Führer“ manchmal, man brauche sie zum Eintritt, oder locken zu Edelstein- und Gewürzshops mit hohem Provisionsdruck offizielle Tickets gibt es an klaren Schaltern; ungebetene Begleiter höflich ablehnen. Tuk-tuk-Fahrer mit „kostenlosen“ Tempeltouren enden oft in überteuerten Läden.\n\nEdelstein- und Gewürzkäufe sind optionales Sightseeing, keine Pflicht. Tuk-tuk- und Taxipreise vor Fahrtantritt vereinbaren oder Fahr-Apps in Colombo nutzen. Ihr Privatfahrer-Guide nimmt bei gebuchter Rundreise den Großteil dieser Reibung.',
      },
      {
        title: 'Straßenverkehr, Tuk-tuks und Privatfahrer',
        body: 'Srilankisches Fahren wirkt nach westlichem Maß assertiv enge Straßen, Busse in Kurven, Fußgänger am Fahrbahnrand sind normal. Als Passagier Anschnallgurte nutzen, wenn vorhanden, und Nachtfahrten auf unbekannten Bergstraßen beim Selbstfahren meiden.\n\nDie meisten Rundreisenden fahren mit lizenziertem Fahrer-Guide in versichertem Fahrzeug der sicherste und entspannteste Weg über Distanzen. Bei lokalen Tuk-tuks Fahrer mit verkehrstüchtigen Fahrzeugen wählen und auf belebten Strecken Helm tragen.',
      },
      {
        title: 'Tempel, kultureller Respekt und Fotografie',
        body: 'Religiöse Stätten verlangen dezente Kleidung, ruhiges Verhalten und keine Selfies mit dem Rücken zu Buddha-Statuen ein ernsthafter kultureller Fehler. Fotoregeln variieren: innere Schreine verbieten Kameras; vor Fotos von Mönchen oder Betenden fragen.\n\nSchuhe vor dem Betreten der Schreinböden ausziehen; Socken helfen auf heißem Stein. Kleine Spenden willkommen, nie Pflicht ignorieren Sie feste „Eintrittsgebühren“ jenseits des offiziellen Schalters.',
      },
      {
        title: 'Wildtiere, Nationalparks und Abstand halten',
        body: 'Yala, Udawalawe und Minneriya sind keine Zoos Elefanten, Büffel und Leoparden sind wild. In Safari-Jeeps bleiben, sofern Guides nichts anderes anweisen; Elefanten nie zu Fuß nähern, besonders Einzelmänner oder Herden mit Kälbern. Affen an Tempeln und Straßen füttern erzeugt Aggression und Bissrisiko.\n\nMeeresströmungen an der Südküste können stark sein Flaggen und Rettungsschwimmer beachten. Schnorchel- und Tauchbetreiber sollten lizenziert sein; Korallen und Meeresleben nicht anfassen.',
      },
      {
        title: 'Wasser, Essen, Notfälle und alleinreisende Frauen',
        body: 'Versiegeltes Flaschen- oder gefiltertes Wasser trinken; Leitungswasser zum Zähneputzen außerhalb vertrauenswürdiger Hotels meiden. Frisch gekochtes Essen und selbst geschältes Obst siehe unseren Kulinarik-Ratgeber für Street-Food-Nuancen. Reiseversicherung mit medizinischer Evakuierung dringend empfohlen.\n\nNotrufnummern: Polizei 119, Rettungsdienst 1990, Touristenpolizei 1912 (oft Englisch). Alleinreisende Frauen berichten selten ernsthafte Probleme; registrierten Transport nachts nutzen, in Tempeln dezent kleiden und Instinkte in leeren Gegenden vertrauen dieselben praktischen Regeln wie in weiten Teilen Asiens.',
      },
    ],
    faq: [
      {
        q: 'Ist Sri Lanka für Touristen sicher?',
        a: 'Ja, auf typischen Urlaubsrouten Colombo, Kulturdreieck, Bergland und Südküste bei Standardvorsicht. Lokale Nachrichten verfolgen, seriösen Transport nutzen und Wertsachen in Menschenmengen sichern.',
      },
      {
        q: 'Was ist der häufigste Touristenbetrug?',
        a: 'Inoffizielle „Führer“ an großen Tempeln und Felsstätten plus Tuk-tuk-Umwege zu Provisions-Edelstein- oder Gewürzshops. Vorgebuchte Tickets und Privatfahrer reduzieren das deutlich.',
      },
      {
        q: 'Ist Selbstfahren in Sri Lanka sicher?',
        a: 'Legal, aber anspruchsvoll chaotischer Verkehr und begrenzte Beschilderung abseits Hauptrouten. Die meisten Besucher bevorzugen lizenzierte Fahrer-Guides, die Straßen und Parkplätze kennen.',
      },
      {
        q: 'Sind Yala-Safaris sicher?',
        a: 'Ja in zugelassenen Jeeps mit lizenzierten Parkführern und Abstandsregeln zu Elefanten und anderer Wildnis. Fahrzeug im Park nicht verlassen, außer ausdrücklich erlaubt.',
      },
      {
        q: 'Welche Notrufnummern sollte ich speichern?',
        a: '119 Polizei, 1990 Rettungsdienst, 1912 Touristenpolizei. Botschaftskontakt und Notfallnummer der Reiseversicherung ebenfalls im Telefon speichern.',
      },
    ],
    ctaTitle: 'Reisen Sie mit einem vertrauenswürdigen Fahrer-Guide',
    ctaBody: 'Unsere versicherten Privatreisen verbinden Sie mit lizenzierten Fahrer-Guides, die Navigation, Logistik an Sehenswürdigkeiten und geprüfte Mittagsstopps übernehmen Sie konzentrieren sich auf das Erlebnis, nicht auf Fallstricke.',
    ctaLabel: 'Sichere Privatreise buchen',
    relatedTours: [
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'tour8', label: '8-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala-Nationalpark' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer-Ratgeber' },
      { pageId: 'guideFood', label: 'Sri Lanka Kulinarik-Ratgeber' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide sécurité Sri Lanka : conseils pratiques pour voyager sereinement',
    lead: 'Le Sri Lanka est généralement une destination sûre et accueillante pour les visiteurs internationaux, avec des taux de criminalité violente plus bas que dans de nombreux pays mais comme partout, des habitudes sensées sur la route, les arnaques, la faune et la santé font la différence entre des vacances fluides et des tracas évitables. Ce guide indique ce qu’il faut surveiller, pas ce qu’il faut craindre.',
    heroAlt: 'Voyageur se préparant en toute sécurité pour un road trip au Sri Lanka avec chauffeur privé',
    sections: [
      {
        title: 'Sécurité générale : ce que les visiteurs doivent réellement attendre',
        body: 'Les petits vols existent sur les marchés animés, gares routières et plages bondées téléphone et portefeuille en poche avant ou sac bandoulière, pas pendus au dossier d’une chaise. La criminalité violente visant les touristes est rare ; les disputes portent plutôt sur l’argent, les tarifs ou des « guides » mal compris sur les sites.\n\nDes manifestations politiques surviennent parfois à Colombo ; évitez les grandes foules, suivez l’actualité locale et faites confiance à votre chauffeur-guide pour dévier si besoin. Les Sri-Lankais sont globalement hospitaliers demander à l’hôtel ou au chauffeur vaut mieux que d’anciens posts de forum.',
      },
      {
        title: 'Arnaques courantes et comment les éviter',
        body: 'À Sigiriya, Dambulla et au Temple de la Dent, des « guides » non officiels prétendent parfois qu’ils sont nécessaires pour entrer ou proposent des détours gemmes et épices à forte commission les billets officiels se vendent à des guichets clairs ; refusez poliment les escortes non sollicitées. Les tuk-tuk « gratuits » vers les temples finissent souvent en boutiques hors de prix.\n\nAchats de gemmes et épices : sightseeing optionnel, pas obligation. Convenez du tarif tuk-tuk ou taxi avant le départ, ou utilisez les apps à Colombo. Votre chauffeur privé pré-réservé supprime la plupart de ces frictions.',
      },
      {
        title: 'Route, tuk-tuks et chauffeurs privés',
        body: 'La conduite sri-lankaise est assertive aux yeux occidentauxoutes étroites, bus qui doublent dans les virages, piétons au bord des voies. En passager, ceinture quand disponible ; évitez la nuit sur routes de montagne inconnues en conduite autonome.\n\nLa plupart des visiteurs en circuit voyagent avec chauffeur-guide licencié en véhicule assurée moyen le plus sûr et serein de couvrir les distances. En tuk-tuk local, choisissez des véhicules en bon état et portez un casque sur routes chargées.',
      },
      {
        title: 'Temples, respect culturel et photographie',
        body: 'Les sites religieux exigent tenue modeste, comportement calme et pas de selfies dos tourné aux statues de Bouddhaffense culturelle sérieuse. Règles photo variables : certains sanctuaires intérieurs interdisent les appareils ; demandez avant de photographier moines ou fidèles en prière.\n\nRetirez chaussures avant les sols de sanctuaire ; chaussettes utiles sur pierre chaude. Petites donations bienvenues, jamais obligatoiresez les « droits d’entrée » fixes hors guichet officiel.',
      },
      {
        title: 'Faune, parcs nationaux et distance à respecter',
        body: 'Yala, Udawalawe et Minneriya ne sont pas des zoosléphants, buffles et léopards sont sauvages. Restez dans les jeeps safari sauf consigne contraire ; n’approchez jamais les éléphants à pied, surtout mâles solitaires ou troupeaux avec petits. Nourrir les singes aux temples crée agressivité et risque de morsure.\n\nCourants marins sur la côte sud parfois fortsespectez drapeaux et consignes des maîtres-nageurs. Opérateurs snorkel et plongée licenciés ; ne touchez pas coraux ni vie marine.',
      },
      {
        title: 'Eau, nourriture, urgences et voyageuses solo',
        body: 'Buvez eau en bouteille scellée ou filtrée ; évitez le robinet pour les dents hors hôtels de confiance. Mangez cuit chaud et épluchez les fruits voir notre guide gastronomique pour la street food. Assurance voyage avec évacuation médicale fortement recommandée.\n\nNuméros d’urgence : police 119, ambulance 1990, police touristique 1912 (souvent anglais). Les voyageuses solo signalent rarement des problèmes graves ; transport enregistré la nuit, tenue modeste aux sites religieux, instincts dans zones vides mêmes règles pratiques que dans une grande partie de l’Asie.',
      },
    ],
    faq: [
      {
        q: 'Le Sri Lanka est-il sûr pour les touristes ?',
        a: 'Oui, sur les itinéraires classiques Colombo, Triangle Culturel, hautes terres et côte sud avec précautions standard. Restez informé, utilisez un transport réputé et sécurisez vos objets de valeur dans la foule.',
      },
      {
        q: 'Quelle est l’arnaque touristique la plus courante ?',
        a: '« Guides » non officiels aux grands temples et sites rocheux, plus détours tuk-tuk vers boutiques gemmes ou épices à commission. Billets pré-réservés et chauffeur privé réduisent fortement l’exposition.',
      },
      {
        q: 'Est-il sûr de conduire soi-même au Sri Lanka ?',
        a: 'Légal mais exigeant trafic chaotique et signalisation limitée hors routes principales. La plupart des visiteurs préfèrent un chauffeur-guide licencié connaissant routes et stationnement.',
      },
      {
        q: 'Les safaris à Yala sont-ils sûrs ?',
        a: 'Oui dans les jeeps approuvés avec guides licenciés et règles de distance autour des éléphants et de la faune. Ne sortez pas du véhicule dans le parc sauf autorisation explicite.',
      },
      {
        q: 'Quels numéros d’urgence enregistrer ?',
        a: '119 police, 1990 ambulance, 1912 police touristique. Gardez aussi l’ambassade et la ligne d’urgence de votre assurance voyage.',
      },
    ],
    ctaTitle: 'Voyagez avec un chauffeur-guide local de confiance',
    ctaBody: 'Nos circuits privés assurés vous associent à des chauffeur-guides licenciés qui gèrent navigation, logistique sur les sites et arrêts déjeuner vérifiésous profitez de l’expérience, pas des pièges.',
    ctaLabel: 'Réserver un circuit privé sûr',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
      { pageId: 'tour8', label: 'Circuit de 8 jours au Sri Lanka' },
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parc national de Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Guide du chauffeur privé' },
      { pageId: 'guideFood', label: 'Guide gastronomique du Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guide des bagages pour le Sri Lanka' },
    ],
  },

  it: {
    h1: 'Guida alla sicurezza in Sri Lanka: consigli pratici per un viaggio sereno',
    lead: 'Lo Sri Lanka è in generale una destinazione sicura e accogliente per i visitatori internazionali, con tassi di criminalità violenta più bassi di molti paesi ma come ovunque, abitudini sensate su strada, truffe, fauna e salute fanno la differenza tra vacanza fluida e grattacapi evitabili. Questa guida copre cosa osservare, non cosa temere.',
    heroAlt: 'Viaggiatore che si prepara in sicurezza per un road trip in Sri Lanka con autista privato',
    sections: [
      {
        title: 'Sicurezza generale: cosa aspettarsi davvero',
        body: 'Furti di piccola entità capitano in mercati affollati, stazioni degli autobus e spiagge piene. Tenete telefono e portafoglio in tasca anteriore o borsa a tracolla, non appesi allo schienale al bar. Crimini violenti contro turisti sono rari; le dispute riguardano più spesso soldi, tariffe o «guide» fraintese ai siti.\n\nManifestazioni politiche occasionali a Colombo; evitate folle numerose, seguite notizie locali e fidatevi dell’autista-guida per deviare se serve. I sri-lankesi sono in massima parte ospitali: chiedere all’hotel o all’autista batte post forum datati.',
      },
      {
        title: 'Truffe comuni e come evitarle',
        body: 'A Sigiriya, Dambulla e al Tempio del Dente, «guide» non ufficiali possono dire che servono per entrare o proporre deviazioni a gemme e spezie con forte commissione biglietti ufficiali a sportelli chiari; rifiutate cortesemente scorti non richieste. Tuk-tuk con tour «gratuiti» ai templi finiscono spesso in negozi cari.\n\nAcquisti di gemme e spezie: sightseeing opzionale, non obbligo. Concordate tariffe tuk-tuk o taxi prima di partire, o usate app a Colombo. L’autista privato prenotato elimina gran parte di questi attriti.',
      },
      {
        title: 'Viaggio su strada, tuk-tuk e autisti privati',
        body: 'La guida sri-lankese è assertiva agli standard occidentali: strade strette, bus in curva, pedoni sul ciglio. Come passeggero, cinture quando disponibili; evitate guida notturna su strade di montagna sconosciute se guidate da soli.\n\nLa maggior parte dei visitatori in tour viaggia con autista-guida licenziato in veicolo assicurato — il modo più sicuro e rilassato per coprire distanze. Con tuk-tuk locali, scegliete veicoli in buono stato e casco su strade trafficate.',
      },
      {
        title: 'Templi, rispetto culturale e fotografia',
        body: 'I siti religiosi richiedono abiti modesti, comportamento quieto e niente selfie con le spalle alle statue del Buddha: offesa culturale seria. Regole foto variabili: alcuni santuari interni vietano macchine fotografiche; chiedete prima di fotografare monaci o fedeli in preghiera.\n\nTogliete scarpe prima dei pavimenti del santuario; calzini utili su pietra calda. Piccole donazioni benvenute, mai obbligatorie; ignorate «tasse d’ingresso» fisse oltre lo sportello ufficiale.',
      },
      {
        title: 'Fauna, parchi nazionali e distanza da mantenere',
        body: 'Yala, Udawalawe e Minneriya non sono zoo elefanti, bufali e leopardi sono selvatici. Restate nei jeep safari salvo diversa istruzione; non avvicinatevi agli elefanti a piedi, soprattutto maschi solitari o branchi con piccoli. Dare cibo alle scimmie ai templi crea aggressività e rischio morsi.\n\nCorrenti marine sulla costa sud possono essere forti: rispettate bandiere e bagnini. Operatori snorkel e immersioni licenziati; non toccate coralli o vita marina.',
      },
      {
        title: 'Acqua, cibo, emergenze e viaggiatrici sole',
        body: 'Bevete acqua in bottiglia sigillata o filtrata; evitate rubinetto per i denti fuori hotel affidabili. Mangiate cibo appena cotto e sbucciate la frutta vedi la nostra guida gastronomica per lo street food. Assicurazione viaggio con evacuazione medica fortemente consigliata.\n\nNumeri di emergenza: polizia 119, ambulanza 1990, polizia turistica 1912 (spesso inglese). Viaggiatrici sole segnalano raramente problemi gravi; trasporto registrato di notte, abiti modesti nei siti religiosi, istinto in zone vuote stesse regole pratiche di gran parte dell’Asia.',
      },
    ],
    faq: [
      {
        q: 'Lo Sri Lanka è sicuro per i turisti?',
        a: 'Sì, sulle rotte tipiche Colombo, Triangolo Culturale, entroterra collinare e costa sud con precauzioni standard. Restate informati, usate trasporti affidabili e tenete al sicuro oggetti di valore nella folla.',
      },
      {
        q: 'Qual è la truffa turistica più comune?',
        a: '«Guide» non ufficiali ai grandi templi e siti rocciosi, più deviazioni tuk-tuk a negozi gemme o spezie a commissione. Biglietti prenotati e autista privato riducono molto l’esposizione.',
      },
      {
        q: 'È sicuro guidare da soli in Sri Lanka?',
        a: 'Legale ma impegnativo traffico caotico e segnaletica limitata fuori dalle rotte principali. La maggior parte preferisce autista-guida licenziato che conosce strade e parcheggi.',
      },
      {
        q: 'I safari a Yala sono sicuri?',
        a: 'Sì nei jeep approvati con guide licenziate e regole di distanza attorno a elefanti e fauna. Non uscite dal veicolo nel parco salvo permesso esplicito.',
      },
      {
        q: 'Quali numeri di emergenza salvare?',
        a: '119 polizia, 1990 ambulanza, 1912 polizia turistica. Tenete anche ambasciata e linea emergenze assicurazione viaggio.',
      },
    ],
    ctaTitle: 'Viaggiate con un autista-guida locale affidabile',
    ctaBody: 'I nostri tour privati assicurati vi abbinano ad autisti-guide licenziati che gestiscono navigazione, logistica sui siti e soste pranzo verificate voi vi concentrate sull’esperienza, non sulle insidie.',
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
    ],
  },

  es: {
    h1: 'Guía de seguridad en Sri Lanka: consejos prácticos para viajar con confianza',
    lead: 'Sri Lanka es en general un destino seguro y acogedor para visitantes internacionales, con tasas de delitos violentos más bajas que en muchos países pero como en cualquier lugar, hábitos sensatos en carretera, estafas, fauna y salud marcan la diferencia entre unas vacaciones fluidas y un dolor de cabeza evitable. Esta guía cubre qué vigilar, no qué temer.',
    heroAlt: 'Viajero preparándose con seguridad para un road trip en Sri Lanka con chófer privado',
    sections: [
      {
        title: 'Seguridad general: qué deben esperar realmente los visitantes',
        body: 'Existen hurtos menores en mercados concurridos, estaciones de autobús y playas llenaseléfono y cartera en bolsillo delantero o bolso cruzado, no colgados de la silla en un café. La delincuencia violenta contra turistas es rara; las disputas suelen ser por dinero, tarifas o «guías» mal entendidos en los sitios.\n\nOcasionalmente hay manifestaciones políticas en Colombo; evite grandes aglomeraciones, siga noticias locales y confíe en su chófer-guía para desviarse si hace falta. Los sri-lankeses son en general hospitalariosguntar al hotel o al chófer supera posts antiguos de foros.',
      },
      {
        title: 'Estafas comunes y cómo evitarlas',
        body: 'En Sigiriya, Dambulla y el Templo del Diente, «guías» no oficiales pueden decir que son necesarios para entrar o proponer desvíos a tiendas de gemas y especias con fuerte comisiónos tickets oficiales se venden en mostradores claros; decline cortésmente acompañantes no solicitados. Tuk-tuk con tours «gratis» a templos suelen terminar en tiendas caras.\n\nCompras de gemas y especias: turismo opcional, no obligación. Acuerde tarifas de tuk-tuk o taxi antes de salir, o use apps en Colombo. Su chófer privado reservado elimina gran parte de esta fricción.',
      },
      {
        title: 'Viajes por carretera, tuk-tuk y chóferes privados',
        body: 'La conducción sri-lankesa es assertiva según estándares occidentalesreteras estrechas, autobuses adelantando en curvas, peatones al borde. Como pasajero, cinturón cuando haya; evite conducir de noche por carreteras de montaña desconocidas si conduce usted.\n\nLa mayoría de visitantes en circuito viajan con chófer-guía licenciado en vehículo aseguradoforma más segura y tranquila de cubrir distancias. Con tuk-tuk locales, elija vehículos en buen estado y casco en rutas concurridas.',
      },
      {
        title: 'Templos, respeto cultural y fotografía',
        body: 'Los sitios religiosos exigen ropa modesta, comportamiento tranquilo y no selfies de espaldas a estatuas de Buda ofensa cultural seria. Reglas de foto variables: algunos santuarios interiores prohíben cámaras; pregunte antes de fotografiar monjes o fieles en oración.\n\nQuítese zapatos antes de los suelos del santuario; calcetines ayudan sobre piedra caliente. Donaciones pequeñas bienvenidas, nunca obligatorias ignore «tasas de entrada» fijas más allá del mostrador oficial.',
      },
      {
        title: 'Fauna, parques nacionales y mantener distancia',
        body: 'Yala, Udawalawe y Minneriya no son zoos elefantes, búfalos y leopardos son salvajes. Permanezca en jeeps safari salvo instrucción contraria; nunca se acerque a elefantes a pie, especialmente machos solitarios o manadas con crías. Alimentar monos en templos crea agresividad y riesgo de mordeduras.\n\nCorrientes marinas en la costa sur pueden ser fuertes respete banderas y socorristas. Operadores de snorkel y buceo licenciados; no toque coral ni vida marina.',
      },
      {
        title: 'Agua, comida, emergencias y mujeres que viajan solas',
        body: 'Beba agua embotellada sellada o filtrada; evite grifo para cepillarse fuera de hoteles de confianza. Coma recién cocinado y pela fruta usted mismo vea nuestra guía gastronómica para matices de comida callejera. Seguro de viaje con evacuación médica muy recomendable.\n\nNúmeros de emergencia: policía 119, ambulancia 1990, policía turística 1912 (a menudo inglés). Mujeres solas reportan raramente problemas graves; transporte registrado de noche, ropa modesta en sitios religiosos, instinto en zonas vacías mismas reglas prácticas que en gran parte de Asia.',
      },
    ],
    faq: [
      {
        q: '¿Es seguro Sri Lanka para turistas?',
        a: 'Sí, en rutas típicas Colombo, Triángulo Cultural, tierras altas y costa sur con precauciones estándar. Manténgase informado, use transporte reputado y asegure objetos de valor en multitudes.',
      },
      {
        q: '¿Cuál es la estafa turística más común?',
        a: '«Guías» no oficiales en grandes templos y sitios rocosos, más desvíos en tuk-tuk a tiendas de gemas o especias con comisión. Tickets reservados y chófer privado reducen mucho la exposición.',
      },
      {
        q: '¿Es seguro conducir por uno mismo en Sri Lanka?',
        a: 'Legal pero exigente tráfico caótico y señalización limitada fuera de rutas principales. La mayoría prefiere chófer-guía licenciado que conoce carreteras y aparcamiento.',
      },
      {
        q: '¿Son seguros los safaris en Yala?',
        a: 'Sí en jeeps aprobados con guías licenciados y reglas de distancia con elefantes y fauna. No salga del vehículo dentro del parque salvo permiso explícito.',
      },
      {
        q: '¿Qué números de emergencia guardar?',
        a: '119 policía, 1990 ambulancia, 1912 policía turística. Guarde también embajada y línea de emergencia del seguro de viaje.',
      },
    ],
    ctaTitle: 'Viaje con un chófer-guía local de confianza',
    ctaBody: 'Nuestros tours privados asegurados le emparejan con chóferes-guía licenciados que gestionan navegación, logística en sitios y paradas de almuerzo verificadas usted se centra en la experiencia, no en evitar trampas.',
    ctaLabel: 'Reservar un tour privado seguro',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
      { pageId: 'tour8', label: 'Tour de 8 días por Sri Lanka' },
      { pageId: 'tour5', label: 'Tour de 5 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Parque Nacional de Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Guía del chófer privado' },
      { pageId: 'guideFood', label: 'Guía gastronómica de Sri Lanka' },
      { pageId: 'guidePacking', label: 'Guía de equipaje para Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Przewodnik bezpieczeństwa na Sri Lance: praktyczne wskazówki na pewny wyjazd',
    lead: 'Sri Lanka jest ogólnie bezpiecznym i gościnnym celem dla turystów z zagranicy, z niższym poziomem przestępczości z użyciem przemocy niż w wielu krajach lecz jak wszędzie, rozsądne nawyki na drodze, wobec oszustw, dzikiej przyrody i zdrowia decydują o płynnym urlopie albo unikniętych kłopotach. Ten przewodnik mówi, na co uważać, nie czego się bać.',
    heroAlt: 'Podróżny bezpiecznie przygotowujący się do trasy po Sri Lance z prywatnym kierowcą',
    sections: [
      {
        title: 'Bezpieczeństwo ogólne: czego naprawdę oczekiwać',
        body: 'Drobne kradzieże zdarzają się na tłocznych targach, dworcach autobusowych i zatłoczonych plażach telefon i portfel w przedniej kieszeni lub torbie przez ramię, nie na oparciu krzesła w kawiarni. Przestępczość z użyciem przemocy wobec turystów jest rzadka; spory dotyczą raczej pieniędzy, taryf lub „przewodników” przy atrakcjach.\n\nDemonstracje polityczne zdarzają się czasem w Colombo; unikaj tłumów, śledź lokalne wiadomości i ufaj kierowcy-przewodnikowi przy omijaniu tras. Srilankijczycy są w większości gościnni pytanie hotelu lub kierowcy o lokalne warunki bije przestarzałe posty na forach.',
      },
      {
        title: 'Typowe oszustwa i jak ich unikać',
        body: 'W Sigiriya, Dambulli i przy Świątyni Zęba nieoficjalni „przewodnicy” twierdzą czasem, że są konieczni do wejścia, lub ciągną do sklepów z kamieniami i przyprawami z wysoką prowizją oficjalne bilety są przy jasnych kasach; grzecznie odmawiaj nieproszonych towarzyszy. Tuk-tuk z „darmowymi” wycieczkami po świątyniach często kończy się w drogich sklepach.\n\nZakupy kamieni i przypraw traktuj jako opcjonalne zwiedzanie, nie obowiązek. Ustal taryfę tuk-tuk lub taxi przed jazdą albo używaj aplikacji w Colombo. Prywatny kierowca w zarezerwowanej wycieczce usuwa większość tych tarć.',
      },
      {
        title: 'Podróż drogą, tuk-tuk i prywatni kierowcy',
        body: 'Jazda na Sri Lance jest asertywna według zachodnich standardów wąskie drogi, autobusy wyprzedzające na zakrętach, piesi przy krawędzi. Jako pasażer zapinaj pasy, gdy są; unikaj nocnej jazdy po nieznanych górskich drogach przy samodzielnej jeździe.\n\nWiększość turystów na trasach okrężnych jedzie z licencjonowanym kierowcą-przewodnikiem w ubezpieczonym aucie najbezpieczniej i najspokojniej na dystansie. Przy lokalnych tuk-tuk wybieraj sprawne pojazdy i noś kask na ruchliwych trasach.',
      },
      {
        title: 'Świątynie, szacunek kulturowy i fotografia',
        body: 'Miejsca religijne wymagają skromnej odzieży, spokojnego zachowania i braku selfie tyłem do posągów Buddy poważne obrażenie kulturowe. Zasady fotografii różne: niektóre wewnętrzne kaplice zabraniają aparatów; pytaj przed fotografowaniem mnichów lub modlących się.\n\nZdejmuj buty przed posadzką kaplicy; skarpetki pomagają na gorącym kamieniu. Drobné datki mile widziane, nigdy obowiązkowe ignoruj stałe „opłaty wejścia” poza oficjalną kasą.',
      },
      {
        title: 'Dzika przyroda, parki narodowe i zachowanie dystansu',
        body: 'Yala, Udawalawe i Minneriya to nie zoo słonie, bawoły i lamparty są dzikie. Zostań w jeepach safari, chyba że przewodnik każe inaczej; nie podchodź do słoni pieszo, zwłaszcza samotnych samców czy stad z młodymi. Karmienie małp przy świątyniach prowokuje agresję i ugryzienia.\n\nPrądy morskie na południowym wybrzeżu bywają silne słuchaj flag i ratowników. Operatorzy snorkelingu i nurkowania powinni być licencjonowani; nie dotykaj korali ani życia morskiego.',
      },
      {
        title: 'Woda, jedzenie, nagłe wypadki i kobiety podróżujące solo',
        body: 'Pij wodę butelkowaną z plombą lub filtrowaną; unikaj kranu do mycia zębów poza zaufanymi hotelami. Jedz świeżo ugotowane i obieraj owoce sam zobacz przewodnik kulinarny o street foodzie. Ubezpieczenie podróżne z ewakuacją medyczną mocno zalecane.\n\nNumery alarmowe: policja 119, pogotowie 1990, policja turystyczna 1912 (często po angielsku). Kobiety podróżujące same rzadko zgłaszają poważne problemy; zarejestrowany transport nocą, skromny strój w miejscach religijnych, instynkt w pustych miejscach te same praktyczne zasady co w większości Azji.',
      },
    ],
    faq: [
      {
        q: 'Czy Sri Lanka jest bezpieczna dla turystów?',
        a: 'Tak, na typowych trasach Colombo, Trójkąt Kulturowy, góry i południowe wybrzeże przy standardowych środkach ostrożności. Bądź na bieżąco z wiadomościami, korzystaj z renomowanego transportu i zabezpiecz wartościowe rzeczy w tłumie.',
      },
      {
        q: 'Jakie jest najczęstsze oszustwo turystyczne?',
        a: 'Nieoficjalni „przewodnicy” przy dużych świątyniach i skałach oraz objazdy tuk-tuk do sklepów z kamieniami lub przyprawami za prowizję. Wcześniej kupione bilety i prywatny kierowca mocno to ograniczają.',
      },
      {
        q: 'Czy bezpiecznie jest jeździć samemu po Sri Lance?',
        a: 'Legalne, lecz wymagające chaotyczny ruch i ograniczone oznakowanie poza głównymi trasami. Większość woli licencjonowanego kierowcę-przewodnika znającego drogi i parkingi.',
      },
      {
        q: 'Czy safari w Yali są bezpieczne?',
        a: 'Tak w zatwierdzonych jeepach z licencjonowanymi przewodnikami parku i zasadami dystansu wobec słoni i innej dzikiej przyrody. Nie wychodź z pojazdu w parku, chyba że wyraźnie dozwolone.',
      },
      {
        q: 'Jakie numery alarmowe zapisać?',
        a: '119 policja, 1990 pogotowie, 1912 policja turystyczna. Zapisz też kontakt ambasady i numer alarmowy ubezpieczenia podróżnego.',
      },
    ],
    ctaTitle: 'Podróżuj z zaufanym lokalnym kierowcą-przewodnikiem',
    ctaBody: 'Nasze ubezpieczone prywatne wycieczki łączą Cię z licencjonowanymi kierowcami-przewodnikami, którzy ogarniają nawigację, logistykę na miejscach i sprawdzone przystanki obiadowe Ty skupiasz się na doświadczeniu, nie na pułapkach.',
    ctaLabel: 'Zarezerwuj bezpieczną prywatną wycieczkę',
    relatedTours: [
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour8', label: '8-dniowa wycieczka po Sri Lance' },
      { pageId: 'tour5', label: '5-dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Park Narodowy Yala' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Przewodnik po prywatnym kierowcy' },
      { pageId: 'guideFood', label: 'Przewodnik kulinarny po Sri Lance' },
      { pageId: 'guidePacking', label: 'Przewodnik pakowania na Sri Lankę' },
    ],
  },

  ru: {
    h1: 'Гид по безопасности на Шри-Ланке: практические советы для уверенной поездки',
    lead: 'Шри-Ланка в целом безопасна и гостеприимна для иностранных гостей, с более низким уровнем насильственной преступности, чем во многих странах но как везде, разумные привычки на дороге, в отношении мошенничества, дикой природы и здоровья отличают спокойный отдых от избегаемых проблем. Этот гид о том, на что смотреть, а не чего бояться.',
    heroAlt: 'Путешественник готовится к поездке по Шри-Ланке с частным водителем',
    sections: [
      {
        title: 'Общая безопасность: чего ждать на самом деле',
        body: 'Мелкие кражи бывают на оживлённых рынках, автовокзалах и людных пляжах телефон и кошелёк в переднем кармане или через плечо, не на спинке стула в кафе. Насильственные преступления против туристов редки; споры чаще о деньгах, тарифах или «гидах» у достопримечательностей.\n\nПолитические демонстрации иногда проходят в Коломбо; избегайте больших скоплений, следите за новостями и доверяйте водителю-гиду при объезде. Шри-ланкийцы в основном гостеприимны спросить отель или водителя лучше, чем опираться на старые форумные посты.',
      },
      {
        title: 'Распространённые мошенничества и как их обойти',
        body: 'В Сигирии, Дамбулле и у Храма Зуба неофициальные «гиды» могут утверждать, что без них не войти, или вести в магазины камней и специй с высокой комиссией официальные билеты продаются у понятных касс; вежливо отказывайтесь от навязанного сопровождения. Tuk-tuk с «бесплатными» турами по храмам часто заканчиваются в дорогих лавках.\n\nПокупки камней и специй опциональный осмотр, не обязанность. Договаривайтесь о цене tuk-tuk или такси до поездки или используйте приложения в Коломбо. Частный водитель в забронированном туре снимает большую часть этих трений.',
      },
      {
        title: 'Дорожные поездки, tuk-tuk и частные водители',
        body: 'Вождение на Шри-Ланке кажется напористым по западным меркам узкие дороги, автобусы на поворотах, пешеходы у обочины. Как пассажир ремни, где есть; избегайте ночной езды по незнакомым горным дорогам при самостоятельной аренде.\n\nБольшинство туристов в круговых турах ездят с лицензированным водителем-гидом в застрахованном авто самый безопасный и спокойный способ преодолевать расстояния. На местных tuk-tuk выбирайте исправные машины и надевайте шлем на оживлённых маршрутах.',
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
        body: 'Пейте запечатанную бутилированную или фильтрованную воду; избегайте водопроводной для чистки зубов вне доверенных отелей. Ешьте свежеприготовленное и чистите фрукты сами см. наш гастрономический гид про уличную еду. Настоятельно рекомендуется туристическая страховка с медицинским покрытием.\n\nЭкстренные номера: полиция 119, скорая 1990, туристическая полиция 1912 (часто по-английски). Женщины в solo-поездках редко сообщают о серьёзных проблемах; ночью зарегистрированный транспорт, скромная одежда в религиозных местах, инстинкт в пустых районах те же практичные правила, что и в большей части Азии.',
      },
    ],
    faq: [
      {
        q: 'Безопасна ли Шри-Ланка для туристов?',
        a: 'Да, на типичных маршрутах Коломбо, Культурный треугольник, горная местность и южное побережье при стандартных мерах предосторожности. Следите за новостями, используйте надёжный транспорт и берегите ценности в толпе.',
      },
      {
        q: 'Какое мошенничество встречается чаще всего?',
        a: 'Неофициальные «гиды» у крупных храмов и скальных объектов плюс объезды tuk-tuk в магазины камней и специй за комиссию. Предварительные билеты и частный водитель сильно снижают риск.',
      },
      {
        q: 'Безопасно ли арендовать авто и ехать самому?',
        a: 'Законно, но требовательно хаотичный трафик и слабая разметка вне главных маршрутов. Большинство предпочитает лицензированного водителя-гида, знающего дороги и парковки.',
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
    ctaTitle: 'Путешествуйте с проверенным местным водителем-гидом',
    ctaBody: 'Наши застрахованные частные туры сопоставляют вас с лицензированными водителями-гидами, которые берут на себя навигацию, логистику на объектах и проверенные обеденные остановки вы сосредоточены на впечатлениях, а не на ловушках.',
    ctaLabel: 'Забронировать безопасный частный тур',
    relatedTours: [
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
      { pageId: 'tour8', label: '8-дневный тур по Шри-Ланке' },
      { pageId: 'tour5', label: '5-дневный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Национальный парк Яла' },
      { pageId: 'destSigiriya', label: 'Сигирия' },
      { pageId: 'destKandy', label: 'Канди' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Гид по частному водителю' },
      { pageId: 'guideFood', label: 'Гид по еде Шри-Ланки' },
      { pageId: 'guidePacking', label: 'Гид по упаковке вещей для Шри-Ланки' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Sicherheits-Ratgeber: praktische Tipps für eine selbstbewusste Reise',
    lead: 'Sri Lanka ist für internationale Besucher im Allgemeinen sicher und gastfreundlich, mit niedrigeren Raten gewalttätiger Kriminalität als in vielen Ländern doch wie überall machen vernünftige Gewohnheiten bei Straßenverkehr, Betrug, Wildtieren und Gesundheit den Unterschied zwischen reibungslosem Urlaub und vermeidbarem Ärger. Dieser Ratgeber zeigt, worauf Sie achten sollten, nicht wovor Sie Angst haben müssen.',
    heroAlt: 'Reisender bereitet sich sicher auf eine Sri-Lanka-Roadtrip mit Privatfahrer vor',
    sections: [
      {
        title: 'Allgemeine Sicherheit: was Besucher wirklich erwarten sollten',
        body: 'Kleine Diebstähle gibt es auf belebten Märkten, Busbahnhöfen und vollen Stränden Handy und Geldbörse in Vorder- oder Umhängetasche, nicht über dem Stuhl im Café hängen. Gewalttaten gegen Touristen sind selten; Streit geht eher um Geld, Fahrpreise oder missverstandene „Führer“ an Sehenswürdigkeiten.\n\nPolitische Demonstrationen kommen gelegentlich in Colombo vor; große Ansammlungen meiden, lokale Nachrichten verfolgen und Ihrem Fahrer-Guide vertrauen, wenn Umleitung nötig ist. Sri Lanker sind überwiegend gastfreundlich Hotel oder Fahrer nach lokalen Bedingungen fragen schlägt veraltete Forenbeiträge.',
      },
      {
        title: 'Häufige Betrügereien und wie man sie umgeht',
        body: 'An Sigiriya, Dambulla und am Zahntempel behaupten inoffizielle „Führer“ manchmal, man brauche sie zum Eintritt, oder locken zu Edelstein- und Gewürzshops mit hohem Provisionsdruck offizielle Tickets gibt es an klaren Schaltern; ungebetene Begleiter höflich ablehnen. Tuk-tuk-Fahrer mit „kostenlosen“ Tempeltouren enden oft in überteuerten Läden.\n\nEdelstein- und Gewürzkäufe sind optionales Sightseeing, keine Pflicht. Tuk-tuk- und Taxipreise vor Fahrtantritt vereinbaren oder Fahr-Apps in Colombo nutzen. Ihr Privatfahrer-Guide nimmt bei gebuchter Rundreise den Großteil dieser Reibung.',
      },
      {
        title: 'Straßenverkehr, Tuk-tuks und Privatfahrer',
        body: 'Srilankisches Fahren wirkt nach westlichem Maß assertiv enge Straßen, Busse in Kurven, Fußgänger am Fahrbahnrand sind normal. Als Passagier Anschnallgurte nutzen, wenn vorhanden, und Nachtfahrten auf unbekannten Bergstraßen beim Selbstfahren meiden.\n\nDie meisten Rundreisenden fahren mit lizenziertem Fahrer-Guide in versichertem Fahrzeug der sicherste und entspannteste Weg über Distanzen. Bei lokalen Tuk-tuks Fahrer mit verkehrstüchtigen Fahrzeugen wählen und auf belebten Strecken Helm tragen.',
      },
      {
        title: 'Tempel, kultureller Respekt und Fotografie',
        body: 'Religiöse Stätten verlangen dezente Kleidung, ruhiges Verhalten und keine Selfies mit dem Rücken zu Buddha-Statuen ein ernsthafter kultureller Fehler. Fotoregeln variieren: innere Schreine verbieten Kameras; vor Fotos von Mönchen oder Betenden fragen.\n\nSchuhe vor dem Betreten der Schreinböden ausziehen; Socken helfen auf heißem Stein. Kleine Spenden willkommen, nie Pflicht ignorieren Sie feste „Eintrittsgebühren“ jenseits des offiziellen Schalters.',
      },
      {
        title: 'Wildtiere, Nationalparks und Abstand halten',
        body: 'Yala, Udawalawe und Minneriya sind keine Zoos Elefanten, Büffel und Leoparden sind wild. In Safari-Jeeps bleiben, sofern Guides nichts anderes anweisen; Elefanten nie zu Fuß nähern, besonders Einzelmänner oder Herden mit Kälbern. Affen an Tempeln und Straßen füttern erzeugt Aggression und Bissrisiko.\n\nMeeresströmungen an der Südküste können stark sein Flaggen und Rettungsschwimmer beachten. Schnorchel- und Tauchbetreiber sollten lizenziert sein; Korallen und Meeresleben nicht anfassen.',
      },
      {
        title: 'Wasser, Essen, Notfälle und alleinreisende Frauen',
        body: 'Versiegeltes Flaschen- oder gefiltertes Wasser trinken; Leitungswasser zum Zähneputzen außerhalb vertrauenswürdiger Hotels meiden. Frisch gekochtes Essen und selbst geschältes Obst siehe unseren Kulinarik-Ratgeber für Street-Food-Nuancen. Reiseversicherung mit medizinischer Evakuierung dringend empfohlen.\n\nNotrufnummern: Polizei 119, Rettungsdienst 1990, Touristenpolizei 1912 (oft Englisch). Alleinreisende Frauen berichten selten ernsthafte Probleme; registrierten Transport nachts nutzen, in Tempeln dezent kleiden und Instinkte in leeren Gegenden vertrauen dieselben praktischen Regeln wie in weiten Teilen Asiens.',
      },
    ],
    faq: [
      {
        q: 'Ist Sri Lanka für Touristen sicher?',
        a: 'Ja, auf typischen Urlaubsrouten Colombo, Kulturdreieck, Bergland und Südküste bei Standardvorsicht. Lokale Nachrichten verfolgen, seriösen Transport nutzen und Wertsachen in Menschenmengen sichern.',
      },
      {
        q: 'Was ist der häufigste Touristenbetrug?',
        a: 'Inoffizielle „Führer“ an großen Tempeln und Felsstätten plus Tuk-tuk-Umwege zu Provisions-Edelstein- oder Gewürzshops. Vorgebuchte Tickets und Privatfahrer reduzieren das deutlich.',
      },
      {
        q: 'Ist Selbstfahren in Sri Lanka sicher?',
        a: 'Legal, aber anspruchsvoll chaotischer Verkehr und begrenzte Beschilderung abseits Hauptrouten. Die meisten Besucher bevorzugen lizenzierte Fahrer-Guides, die Straßen und Parkplätze kennen.',
      },
      {
        q: 'Sind Yala-Safaris sicher?',
        a: 'Ja in zugelassenen Jeeps mit lizenzierten Parkführern und Abstandsregeln zu Elefanten und anderer Wildnis. Fahrzeug im Park nicht verlassen, außer ausdrücklich erlaubt.',
      },
      {
        q: 'Welche Notrufnummern sollte ich speichern?',
        a: '119 Polizei, 1990 Rettungsdienst, 1912 Touristenpolizei. Botschaftskontakt und Notfallnummer der Reiseversicherung ebenfalls im Telefon speichern.',
      },
    ],
    ctaTitle: 'Reisen Sie mit einem vertrauenswürdigen Fahrer-Guide',
    ctaBody: 'Unsere versicherten Privatreisen verbinden Sie mit lizenzierten Fahrer-Guides, die Navigation, Logistik an Sehenswürdigkeiten und geprüfte Mittagsstopps übernehmen Sie konzentrieren sich auf das Erlebnis, nicht auf Fallstricke.',
    ctaLabel: 'Sichere Privatreise buchen',
    relatedTours: [
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'tour8', label: '8-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala-Nationalpark' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Privatfahrer-Ratgeber' },
      { pageId: 'guideFood', label: 'Sri Lanka Kulinarik-Ratgeber' },
      { pageId: 'guidePacking', label: 'Sri Lanka Packliste-Ratgeber' },
    ],
  }
};
