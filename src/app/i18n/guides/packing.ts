import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka packing guide (pageId: guidePacking).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const PACKING_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Packing Guide: What to Bring for Beaches, Temples and Hill Country',
    lead: 'Sri Lanka packs tropical coasts, misty tea hills and ancient temple sites into one small island which means your bag needs layers, modest dress and sensible footwear rather than a single “beach holiday” wardrobe. Pack smart and you will move comfortably from Sigiriya’s rock steps to Ella’s cool evenings without overloading your suitcase.',
    heroImage: 'assets/img/5daysTours/17.webp',
    heroAlt: 'Travel bag packed for a multi-climate Sri Lanka round trip',
    sections: [
      {
        id: 'climateLayers',
        title: 'Climate zones: hot coasts versus cool hill country',
        body: 'The south and west coasts, Colombo and the Cultural Triangle lowlands run hot and humid year-roundightweight cotton and linen, loose trousers and breathable shirts work best. Nuwara Eliya, Ella and Horton Plains can feel genuinely cool in the evenings, especially June through September, when a light fleece or cardigan and long trousers at night are worth packing.\n\nMost round tours cross several zones in a week, so think in layers rather than one outfit type. A thin rain jacket or packable poncho covers sudden showers in the hills without adding much weight.',
      },
      {
        id: 'templeDress',
        title: 'Temple dress code and modest clothing',
        body: 'Buddhist and Hindu temples require shoulders and knees coveredhis applies to men and women at sites like the Temple of the Tooth in Kandy, Dambulla cave temple and smaller village shrines. Carry a sarong or lightweight scarf in your day bag; it doubles as a shoulder cover and is easier than changing full outfits at every stop.\n\nRemove hats and shoes before entering shrine rooms (socks are usually fine). Bright, respectful clothing is welcome; beachwear belongs at the beach, not at religious sites.',
      },
      {
        id: 'rainAndSun',
        title: 'Rain gear, sun protection and the two monsoons',
        body: 'Rain arrives differently depending on coast and seasonhe south-west monsoon (roughly May–September) wets the west coast and hill country, while the north-east monsoon (roughly October–January) affects the east. A compact umbrella or foldable rain jacket handles short tropical downpours better than assuming “dry season” means no rain at all.\n\nSun is intense at Sigiriya, on safari jeep rides and at open beachesack high-SPF sunscreen, a wide-brim hat and UV-protective sunglasses. Reef-safe sunscreen is considerate if you plan to snorkel.',
      },
      {
        id: 'footwear',
        title: 'Footwear for Sigiriya, hiking and daily touring',
        body: 'Sigiriya’s rock staircase is steep, uneven and hot underfoot by mid-morning closed-toe trainers with good grip beat flip-flops here. The same shoes work for Polonnaruwa ruins, Adam’s Peak if you attempt a climb, and Little Adam’s Peak in Ella.\n\nSlip-on sandals are practical for temples where you remove shoes repeatedly, and for beach evenings. Avoid packing heavy hiking boots unless you have a dedicated multi-day trek planned; trainers suffice for most visitor trails.',
      },
      {
        id: 'healthEssentials',
        title: 'Mosquito protection and health basics',
        body: 'Dengue is present in Sri Lanka; use DEET or picaridin repellent in the evening, especially after rain in urban and coastal areas. Long sleeves at dusk help alongside repellent. Malaria risk is low for typical tourist routes, but mosquito bites remain annoying without protection.\n\nPack any prescription medications in original containers with a copy of the prescription, basic stomach remedies, plasters for blisters and hand sanitiser for before meals. Travel insurance documents belong in carry-on, not checked luggage.',
      },
      {
        id: 'techAndLeaveHome',
        title: 'Power adapters, documents and what not to overpack',
        body: 'Sri Lanka uses Type D (three round pins) and Type G (UK-style) sockets a universal adapter with surge protection covers most hotels and guesthouses. Voltage is 230V; check hair tools if they are not dual-voltage.\n\nLeave heavy formal wear, multiple guidebooks and a full pharmacy at homeharmacies and bookshops exist in Colombo and tourist towns. One medium suitcase plus a daypack is enough for a week-long private tour when laundry is available at mid-range hotels.',
      },
    ],
    faq: [
      {
        q: 'Do I need warm clothes for Sri Lanka?',
        a: 'Yes, for the hill countrya, Nuwara Eliya and early-morning safari drives can feel cool. A light fleece or jacket and one pair of long trousers are enough for most travellers.',
      },
      {
        q: 'Can I wear shorts to temples in Sri Lanka?',
        a: 'Knees must be covered inside active temples, so long trousers or a sarong over shorts is required. Shoulders should also be covered; a scarf or light shirt resolves both.',
      },
      {
        q: 'What shoes are best for climbing Sigiriya?',
        a: 'Supportive trainers with good grip metal stair sections and sun-heated rock steps are slippery in sandals. Bring socks for temple visits where shoes come off frequently.',
      },
      {
        q: 'Should I bring a rain jacket to Sri Lanka?',
        a: 'A packable rain jacket or compact umbrella is useful year-round, especially for hill-country afternoons and shoulder-season travel when showers are brief but heavy.',
      },
      {
        q: 'What power adapter do I need for Sri Lanka?',
        a: 'Type D and Type G plugs are standard; a universal travel adapter works in most hotels. Voltage is 230Vfirm dual-voltage on hair dryers and straighteners.',
      },
    ],
    ctaTitle: 'Travel light on a fully planned private tour',
    ctaBody: 'Our chauffeur-driven itineraries handle daily logisticsl us your travel month and we will suggest a packing list matched to your route, from Yala safaris to tea-country train rides.',
    ctaLabel: 'Plan your Sri Lanka trip',
    relatedTours: [
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
      { pageId: 'tour8', label: '8 Day Sri Lanka Tour' },
      { pageId: 'tour5', label: '5 Day Sri Lanka Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Best Time to Visit Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Safety Guide' },
      { pageId: 'guideWildlife', label: 'Sri Lanka Wildlife Guide' },
    ],
  },

  de: {
    h1: 'Sri Lanka Packliste: Was Sie für Strände, Tempel und Bergland mitnehmen',
    lead: 'Sri Lanka vereint tropische Küsten, nebliges Tee-Hochland und antike Tempel auf einer kleinen Inselhr Gepäck braucht daher Schichten, dezentere Kleidung und vernünftiges Schuhwerk statt einer reinen Strandurlaubs-Garderobe. Clever packen heißt: bequem von Sigiriyas Felsstufen bis zu Ellas kühlen Abenden, ohne den Koffer zu überladen.',
    heroAlt: 'Reisetasche gepackt für eine Sri-Lanka-Rundreise durch mehrere Klimazonen',
    sections: [
      {
        title: 'Klimazonen: heiße Küsten versus kühles Bergland',
        body: 'Süd- und Westküste, Colombo und das Tiefland des Kulturdreiecks sind ganzjährig heiß und feuchteichte Baumwolle und Leinen, lockere Hosen und atmungsaktive Hemden funktionieren am besten. Nuwara Eliya, Ella und Horton Plains können abends spürbar kühl wirken, besonders Juni bis September, wenn eine leichte Fleecejacke oder Strickjacke und lange Hosen nachts sinnvoll sind.\n\nDie meisten Rundreisen durchqueren in einer Woche mehrere Zonenenken Sie in Schichten statt in einem Outfit-Typ. Eine dünne Regenjacke oder packbare Poncho-Variante fängt plötzliche Schauer in den Bergen ab, ohne viel Gewicht zu kosten.',
      },
      {
        title: 'Tempel-Kleiderordnung und dezente Kleidung',
        body: 'Buddhistische und hinduistische Tempel verlangen bedeckte Schultern und Knieür Männer und Frauen an Orten wie dem Zahntempel in Kandy, der Höhlentempel von Dambulla und kleineren Dorfschreinen. Tragen Sie ein Sarong oder leichtes Tuch in der Tages-Tasche; es deckt Schultern und ist einfacher als bei jedem Stopp das ganze Outfit zu wechseln.\n\nHüte und Schuhe vor dem Betreten der Schreinräume ablegen (Socken sind meist in Ordnung). Helle, respektvolle Kleidung ist willkommen; Strandmode gehört an den Strand, nicht in religiöse Stätten.',
      },
      {
        title: 'Regenausrüstung, Sonnenschutz und die zwei Monsune',
        body: 'Regen kommt je nach Küste und Saison unterschiedlich der Südwestmonsun (etwa Mai–September) benetzt Westküste und Bergland, der Nordostmonsun (etwa Oktober–Januar) die Ostküste. Ein kompakter Schirm oder faltbare Regenjacke bewältigt kurze tropische Schauer besser, als anzunehmen, „Trockenzeit“ bedeute keinen Regen.\n\nDie Sonne ist an Sigiriya, auf Safari-Jeeps und offenen Stränden intensiv packen Sie hohen LSF, breitkrempigen Hut und UV-Sonnenbrille. Riff-freundlicher Sonnenschutz ist sinnvoll beim Schnorcheln.',
      },
      {
        title: 'Schuhe für Sigiriya, Wanderungen und tägliche Touren',
        body: 'Sigiriyas Fels-Treppe ist steil, uneben und mittags heiß geschlossene Turnschuhe mit gutem Grip schlagen Flip-Flops. Dieselben Schuhe eignen sich für Polonnaruwa, Adams Peak bei einem Aufstieg und Little Adams Peak in Ella.\n\nSlip-on-Sandalen sind praktisch für Tempel, wo man Schuhe oft auszieht, und für Strandabende. Schwere Wanderschuhe nur mit geplantem Mehrtagestrek mitnehmen; Turnschuhe reichen für die meisten Besucherpfade.',
      },
      {
        title: 'Mückenschutz und Gesundheits-Basics',
        body: 'Dengue kommt auf Sri Lanka vor; nutzen Sie DEET- oder Picaridin-Spray abends, besonders nach Regen in urbanen und Küstengebieten. Lange Ärmel in der Dämmerung helfen zusätzlich. Malaria-Risiko ist auf typischen Touristenrouten gering, aber Mückenstiche ohne Schutz sind lästig.\n\nPacken Sie verschreibungspflichtige Medikamente in Originalverpackung mit Rezeptkopie, Basismittel gegen Magenbeschwerden, Pflaster gegen Blasen und Händedesinfektionsmittel vor Mahlzeiten. Reiseversicherungsunterlagen gehören ins Handgepäck, nicht in den Koffer.',
      },
      {
        title: 'Adapter, Dokumente und was Sie nicht mitnehmen sollten',
        body: 'Sri Lanka nutzt Typ D (drei runde Stifte) und Typ G (UK-Stecker)in Universaladapter mit Überspannungsschutz deckt die meisten Hotels ab. Spannung 230 V; prüfen Sie Haartools auf Dual-Voltage.\n\nLassen Sie schwere Abendgarderobe, mehrere Reiseführer und die komplette Hausapotheke zu Hause Apotheken und Buchhandlungen gibt es in Colombo und Touristenorten. Ein mittelgroßer Koffer plus Tagesrucksack reicht für eine Woche private Tour, wenn Wäsche in Mittelklasse-Hotels möglich ist.',
      },
    ],
    faq: [
      {
        q: 'Brauche ich warme Kleidung für Sri Lanka?',
        a: 'Ja, fürs Bergland Ella, Nuwara Eliya und frühe Safari-Fahrten können kühl sein. Eine leichte Fleecejacke und eine lange Hose reichen den meisten Reisenden.',
      },
      {
        q: 'Darf ich Shorts in Tempeln tragen?',
        a: 'Knie müssen in aktiven Tempeln bedeckt sein lange Hosen oder Sarong über Shorts. Schultern ebenfalls bedecken; Schal oder leichtes Hemd löst beides.',
      },
      {
        q: 'Welche Schuhe für Sigiriya?',
        a: 'Stützende Turnschuhe mit gutem Gripetalltreppen und erhitzter Fels rutschen in Sandalen. Socken für häufiges Schuhe-Ausziehen in Tempeln mitnehmen.',
      },
      {
        q: 'Soll ich eine Regenjacke mitnehmen?',
        a: 'Eine packbare Regenjacke oder kompakter Schirm ist ganzjährig nützlich, besonders für Bergland-Nachmittage und Zwischensaison mit kurzen, kräftigen Schauern.',
      },
      {
        q: 'Welchen Stecker brauche ich?',
        a: 'Typ D und Typ G sind Standard; Universaladapter funktionieren in den meisten Hotels. 230 Vual-Voltage bei Haartrockner und Glätteisen prüfen.',
      },
    ],
    ctaTitle: 'Leicht reisen auf einer voll geplanten Privatreise',
    ctaBody: 'Unsere Rundreisen mit Fahrer übernehmen die Tageslogistikennen Sie uns Ihren Reisemonat, und wir schlagen eine Packliste passend zu Ihrer Route vor, von Yala-Safaris bis Tee-Zugfahrten.',
    ctaLabel: 'Sri-Lanka-Reise planen',
    relatedTours: [
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'tour8', label: '8-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit für Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits-Ratgeber' },
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide des bagages pour le Sri Lanka : quoi emporter pour plages, temples et hautes terres',
    lead: 'Le Sri Lanka concentre côtes tropicales, collines brumeuses du thé et sites de temples anciens sur une petite îleotre sac a besoin de couches, de tenues modestes et de chaussures sensées plutôt que d’une garde-robe « vacances plage » unique. Bien préparer son bagage permet de passer confortablement des marches de Sigiriya aux soirées fraîches d’Ella sans surcharger la valise.',
    heroAlt: 'Sac de voyage préparé pour un circuit au Sri Lanka à travers plusieurs climats',
    sections: [
      {
        title: 'Zones climatiques : côtes chaudes versus hautes terres fraîches',
        body: 'Les côtes sud et ouest, Colombo et les basses terres du Triangle Culturel sont chaudes et humides toute l’année et lin légers, pantalons amples et chemises respirantes conviennent le mieux. Nuwara Eliya, Ella et Horton Plains peuvent sembler franchement frais le soir, surtout de juin à septembre, quand une polaire légère ou un cardigan et un pantalon long valent la peine.\n\nLa plupart des circuits traversent plusieurs zones en une semaineouches plutôt qu’en un seul type de tenue. Une fine veste de pluie ou un poncho compact gère les averses soudaines dans les collines sans alourdir.',
      },
      {
        title: 'Code vestimentaire des temples et tenues modestes',
        body: 'Les temples bouddhistes et hindous exigent épaules et genoux couvertsmes et femmes, à Kandy, Dambulla et les petits sanctuaires de village. Gardez un sarong ou foulard léger dans le sac du jour ; il couvre les épaules plus facilement qu’un changement complet à chaque arrêt.\n\nRetirez chapeaux et chaussures avant les salles de sanctuaire (les chaussettes passent généralement). Des vêtements clairs et respectueux sont bienvenus ; la tenue de plage reste à la plage, pas sur les sites religieux.',
      },
      {
        title: 'Équipement pluie, protection solaire et les deux moussons',
        body: 'La pluie varie selon la côte et la saisona mousson du sud-ouest (environ mai–septembre) arrose l’ouest et les hautes terres, celle du nord-est (environ octobre–janvier) l’est. Un parapluie compact ou une veste pliable gère mieux les averses tropicales courtes que supposer « saison sèche » sans pluie.\n\nLe soleil est intense à Sigiriya, en jeep safari et sur plages ouvertes crème haute protection, chapeau à large bord et lunettes UV. Une crème respectueuse des récifs si vous snorklez.',
      },
      {
        title: 'Chaussures pour Sigiriya, randonnées et visites quotidiennes',
        body: 'L’escalier de roche de Sigiriya est raide, irrégulier et brûlant en milieu de matinée des baskets fermées avec bonne adhérence battent les tongs. Les mêmes chaussures vont pour Polonnaruwa, le pic d’Adam si vous tentez l’ascension, et Little Adam’s Peak à Ella.\n\nDes sandales faciles à enfiler sont pratiques pour les temples où l’on retire souvent les chaussures, et pour les soirées plage. Évitez les grosses bottes sauf trek de plusieurs jours ; les baskets suffisent pour la plupart des sentiers touristiques.',
      },
      {
        title: 'Protection anti-moustiques et bases santé',
        body: 'La dengue est présente au Sri Lanka ; utilisez répulsif DEET ou picaridine le soir, surtout après pluie en zones urbaines et côtières. Manches longues au crépuscule aident. Le risque paludéen est faible sur les routes touristiques classiques, mais les piqûres sans protection restent pénibles.\n\nEmportez médicaments sur ordonnance dans emballages d’origine avec copie, remèdes digestifs de base, pansements pour ampoules et gel hydroalcoolique avant les repas. Les documents d’assurance voyage vont en cabine, pas en soute.',
      },
      {
        title: 'Adaptateurs, documents et ce qu’il vaut mieux ne pas surcharger',
        body: 'Le Sri Lanka utilise prises Type D (trois broches rondes) et Type G (style UK) un adaptateur universel avec protection surtension couvre la plupart des hôtels. Tension 230 V ; vérifiez vos appareils coiffants dual voltage.\n\nLaissez tenues de soirée lourdes, multiples guides papier et pharmacie complète pharmacies et librairies existent à Colombo et en zones touristiques. Une valise moyenne plus sac du jour suffit pour une semaine de circuit privé si la lessive est possible en hôtels milieu de gamme.',
      },
    ],
    faq: [
      {
        q: 'Faut-il des vêtements chauds au Sri Lanka ?',
        a: 'Oui pour les hautes terres Ella, Nuwara Eliya et safaris tôt le matin peuvent sembler frais. Une polaire légère et un pantalon long suffisent à la plupart des voyageurs.',
      },
      {
        q: 'Peut-on porter des shorts aux temples ?',
        a: 'Les genoux doivent être couverts dans les temples actifs pantalon long ou sarong par-dessus les shorts. Épaules couvertes aussi ; foulard ou chemise légère règle les deux.',
      },
      {
        q: 'Quelles chaussures pour Sigiriya ?',
        a: 'Baskets support avec bonne adhérence marches métalliques et roche chauffée glissent en sandales. Chaussettes pour les visites de temples fréquentes.',
      },
      {
        q: 'Faut-il une veste de pluie ?',
        a: 'Une veste pliable ou parapluie compact est utile toute l’année, surtout pour les après-midis des hautes terres et l’intersaison aux averses brèves mais fortes.',
      },
      {
        q: 'Quel adaptateur électrique ?',
        a: 'Types D et G sont standard ; adaptateur universel dans la plupart des hôtels. 230 V vérifiez le dual voltage des sèche-cheveux et lisseurs.',
      },
    ],
    ctaTitle: 'Voyagez léger avec un circuit privé entièrement planifié',
    ctaBody: 'Nos circuits avec chauffeur gèrent la logistique quotidienne indiquez votre mois de voyage et nous suggérerons une liste adaptée à votre route, des safaris de Yala aux trains du pays du thé.',
    ctaLabel: 'Planifier votre voyage au Sri Lanka',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
      { pageId: 'tour8', label: 'Circuit de 8 jours au Sri Lanka' },
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Meilleure période pour visiter le Sri Lanka' },
      { pageId: 'guideSafety', label: 'Guide sécurité Sri Lanka' },
      { pageId: 'guideWildlife', label: 'Guide faune du Sri Lanka' },
    ],
  },

  it: {
    h1: 'Guida ai bagagli per lo Sri Lanka: cosa portare per spiagge, templi e montagna',
    lead: 'Lo Sri Lanka concentra coste tropicali, colline nebbiose del tè e antichi templi in una piccola isola il bagaglio ha bisogno di strati, abiti modesti e calzature sensate, non di un solo guardaroba da spiaggia. Fare le valigie con intelligenza significa muoversi comodamente dalle scale di Sigiriya alle serate fresche di Ella senza sovraccaricare la valigia.',
    heroAlt: 'Borsa da viaggio preparata per un tour in Sri Lanka attraverso più climi',
    sections: [
      {
        title: 'Zone climatiche: coste calde versus entroterra fresco',
        body: 'Coste sud e ovest, Colombo e le pianure del Triangolo Culturale sono calde e umide tutto l’anno cotone e lino leggeri, pantaloni ampi e camicie traspiranti funzionano meglio. Nuwara Eliya, Ella e Horton Plains possono sembrare davvero freschi la sera, soprattutto giugno–settembre, quando una felpa leggera o cardigan e pantaloni lunghi la notte valgono la pena.\n\nLa maggior parte dei tour attraversa più zone in una settimanaensate a strati, non a un solo tipo di outfit. Una sottile giacca antipioggia o poncho pieghevole gestisce acquazzoni improvvisi in collina senza peso eccessivo.',
      },
      {
        title: 'Codice vestiario nei templi e abiti modesti',
        body: 'Templi buddhisti e induisti richiedono spalle e ginocchia coperteomini e donne, a Kandy, Dambulla e piccoli santuari di villaggio. Tenete un sarong o foulard leggero nella borsa del giorno; copre le spalle più facilmente che cambiare outfit a ogni tappa.\n\nTogliete cappelli e scarpe prima delle sale del santuario (i calzini di solito vanno bene). Abiti chiari e rispettosi sono benvenuti; il costume da bagno resta in spiaggia, non nei siti religiosi.',
      },
      {
        title: 'Antipioggia, protezione solare e i due monsoni',
        body: 'La pioggia varia per costa e stagionel monsone sud-occidentale (circa maggio–settembre) bagnata ovest e montagna, quello nord-orientale (circa ottobre–gennaio) l’est. Ombrello compatto o giacca pieghevole gestisce meglio rovesci tropicali brevi che assumere «stagione secca» senza pioggia.\n\nIl sole è intenso a Sigiriya, in jeep safari e su spiagge apertema ad alto SPF, cappello a tesa larga e occhiali UV. Crema reef-safe se fate snorkeling.',
      },
      {
        title: 'Calzature per Sigiriya, trekking e tour quotidiani',
        body: 'La scala di roccia di Sigiriya è ripida, irregolare e calda a metà mattinacarpe chiuse con buon grip battono le infradito. Le stesse scarpe vanno per Polonnaruwa, Adam’s Peak se lo tentate, e Little Adam’s Peak a Ella.\n\nSandali slip-on sono pratici per templi dove si tolgono spesso le scarpe e per serate in spiaggia. Evitate scarponi pesanti senza un trek multi-giorno dedicato; le sneaker bastano per la maggior parte dei sentieri turistici.',
      },
      {
        title: 'Protezione zanzare e basi salute',
        body: 'La dengue è presente in Sri Lanka; usate repellente DEET o picaridina la sera, soprattutto dopo pioggia in zone urbane e costiere. Maniche lunghe al crepuscolo aiutano. Rischio malaria basso sulle rotte turistiche tipiche, ma punture senza protezione restano fastidiose.\n\nPortate farmaci su prescrizione in confezione originale con copia, rimedi digestivi base, cerotti per vesciche e gel prima dei pasti. Documenti assicurazione viaggio in cabina, non in stiva.',
      },
      {
        title: 'Adattatori, documenti e cosa non portare in eccesso',
        body: 'Lo Sri Lanka usa spine Type D (tre tondi) e Type G (stile UK) adattatore universale con protezione sovratensione copre la maggior parte degli hotel. Tensione 230 V; verificate dual voltage su phon e piastre.\n\nLasciate abiti formali pesanti, più guide cartacee e farmacia completaarmacie e librerie ci sono a Colombo e in zone turistiche. Una valigia media più zaino giornaliero bastano per una settimana di tour privato con lavanderia in hotel mid-range.',
      },
    ],
    faq: [
      {
        q: 'Servono vestiti caldi per lo Sri Lanka?',
        a: 'Sì per l’entroterra collinarella, Nuwara Eliya e safari all’alba possono sembrare freschi. Felpa leggera e un paio di pantaloni lunghi bastano per la maggior parte dei viaggiatori.',
      },
      {
        q: 'Si possono indossare pantaloncini nei templi?',
        a: 'Le ginocchia devono essere coperte nei templi attivi pantaloni lunghi o sarong sopra i pantaloncini. Anche spalle coperte; foulard o camicia leggera risolve entrambi.',
      },
      {
        q: 'Quali scarpe per Sigiriya?',
        a: 'Sneaker supportive con buon grip scale metalliche e roccia riscaldata scivolano in sandali. Calzini per visite templi frequenti.',
      },
      {
        q: 'Serve una giacca antipioggia?',
        a: 'Giacca pieghevole o ombrello compatto utili tutto l’anno, soprattutto per pomeriggi in montagna e mezza stagione con rovesci brevi ma intensi.',
      },
      {
        q: 'Quale adattatore elettrico?',
        a: 'Type D e Type G standard; adattatore universale nella maggior parte degli hotel. 230 V verificare dual voltage su asciugacapelli e piastre.',
      },
    ],
    ctaTitle: 'Viaggiate leggeri con un tour privato pianificato',
    ctaBody: 'I nostri itinerari con autista gestiscono la logistica quotidiana indicate il mese di viaggio e suggeriremo una lista bagagli adatta al percorso, dai safari di Yala ai treni del paese del tè.',
    ctaLabel: 'Pianifica il tuo viaggio in Sri Lanka',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
      { pageId: 'tour8', label: 'Tour di 8 giorni in Sri Lanka' },
      { pageId: 'tour5', label: 'Tour di 5 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Periodo migliore per visitare lo Sri Lanka' },
      { pageId: 'guideSafety', label: 'Guida alla sicurezza in Sri Lanka' },
      { pageId: 'guideWildlife', label: 'Guida alla fauna dello Sri Lanka' },
    ],
  },

  es: {
    h1: 'Guía de equipaje para Sri Lanka: qué llevar para playas, templos y montaña',
    lead: 'Sri Lanka concentra costas tropicales, colinas brumosas del té y templos antiguos en una isla pequeña su maleta necesita capas, ropa modesta y calzado sensato, no un solo armario de vacaciones de playa. Hacer la maleta con criterio permite moverse cómodamente desde los escalones de Sigiriya hasta las noches frescas de Ella sin sobrecargar la valija.',
    heroAlt: 'Bolsa de viaje preparada para un tour por Sri Lanka con varios climas',
    sections: [
      {
        title: 'Zonas climáticas: costas calientes frente a montaña fresca',
        body: 'Las costas sur y oeste, Colombo y las tierras bajas del Triángulo Cultural son calurosas y húmedas todo el año algodón y lino ligeros, pantalones holgados y camisas transpirables funcionan mejor. Nuwara Eliya, Ella y Horton Plains pueden sentirse frescos por la noche, especialmente de junio a septiembre, cuando merece la pena llevar forro polar ligero o cárdigan y pantalón largo.\n\nLa mayoría de los tours cruzan varias zonas en una semana piense en capas, no en un solo tipo de ropa. Una chaqueta fina impermeable o poncho plegable cubre chaparrones súbitos en la montaña sin mucho peso.',
      },
      {
        title: 'Código de vestimenta en templos y ropa modesta',
        body: 'Los templos budistas e hindúes exigen hombros y rodillas cubiertosombres y mujeres, en Kandy, Dambulla y pequeños santuarios rurales. Lleve un sarong o pañuelo ligero en la bolsa del día; cubre hombros más fácil que cambiarse entero en cada parada.\n\nQuítese sombrero y zapatos antes de las salas del santuario (los calcetines suelen valer). Ropa clara y respetuosa es bienvenida; el bañador queda en la playa, no en sitios religiosos.',
      },
      {
        title: 'Equipo de lluvia, protección solar y los dos monzones',
        body: 'La lluvia varía según costa y temporada el monzón suroeste (aprox. mayo–septiembre) moja oeste y montaña, el noreste (aprox. octubre–enero) el este. Un paraguas compacto o chaqueta plegable maneja mejor aguaceros tropicales breves que suponer «temporada seca» sin lluvia.\n\nEl sol es intenso en Sigiriya, en jeep safari y en playas abiertasrema SPF alta, sombrero de ala ancha y gafas UV. Crema respetuosa con arrecifes si hace snorkel.',
      },
      {
        title: 'Calzado para Sigiriya, senderismo y tours diarios',
        body: 'La escalera de roca de Sigiriya es empinada, irregular y caliente a media mañanaatillas cerradas con buen agarre ganan a las chanclas. Las mismas valen para Polonnaruwa, el pico de Adam si lo intenta y Little Adam’s Peak en Ella.\n\nSandalias fáciles de quitar son prácticas para templos donde se descalza a menudo y para noches de playa. Evite botas pesadas salvo trek de varios días; las zapatillas bastan para la mayoría de senderos turísticos.',
      },
      {
        title: 'Protección antimosquitos y básicos de salud',
        body: 'El dengue está presente en Sri Lanka; use repelente DEET o picaridina por la noche, especialmente tras lluvia en zonas urbanas y costeras. Mangas largas al atardecer ayudan. El riesgo de malaria es bajo en rutas turísticas típicas, pero las picaduras sin protección molestan.\n\nLleve medicación recetada en envase original con copia, remedios digestivos básicos, tiritas para ampollas y gel antes de comer. Documentos del seguro de viaje en cabina, no en bodega.',
      },
      {
        title: 'Adaptadores, documentos y qué no llevar de más',
        body: 'Sri Lanka usa enchufes Type D (tres redondos) y Type G (estilo UK)adaptador universal con protección de sobretensión cubre la mayoría de hoteles. Tensión 230 V; compruebe dual voltage en secadores y planchas.\n\nDeje en casa ropa formal pesada, varias guías impresas y farmacia completacias y librerías en Colombo y pueblos turísticos. Una maleta mediana más mochila diaria bastan para una semana de tour privado con lavandería en hoteles de gama media.',
      },
    ],
    faq: [
      {
        q: '¿Necesito ropa de abrigo para Sri Lanka?',
        a: 'Sí, para la montañaa, Nuwara Eliya y safaris al amanecer pueden sentirse frescos. Forro polar ligero y un pantalón largo bastan para la mayoría.',
      },
      {
        q: '¿Puedo llevar pantalones cortos a los templos?',
        a: 'Las rodillas deben estar cubiertas en templos activosantalón largo o sarong sobre shorts. Hombros también; pañuelo o camisa ligera resuelve ambos.',
      },
      {
        q: '¿Qué calzado para Sigiriya?',
        a: 'Zapatillas de soporte con buen agarrescalones metálicos y roca caliente resbalan en sandalias. Calcetines para visitas frecuentes a templos.',
      },
      {
        q: '¿Debo llevar chaqueta de lluvia?',
        a: 'Chaqueta plegable o paraguas compacto útiles todo el año, sobre todo tardes en montaña y temporada media con chaparrones breves pero fuertes.',
      },
      {
        q: '¿Qué adaptador eléctrico necesito?',
        a: 'Type D y Type G son estándar; adaptador universal en la mayoría de hoteles. 230 V compruebe dual voltage en secador y plancha.',
      },
    ],
    ctaTitle: 'Viaje ligero con un tour privado planificado',
    ctaBody: 'Nuestros itinerarios con chófer gestionan la logística diaria indique su mes de viaje y sugeriremos una lista de equipaje acorde a su ruta, de safaris en Yala a trenes en tierras del té.',
    ctaLabel: 'Planifique su viaje a Sri Lanka',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
      { pageId: 'tour8', label: 'Tour de 8 días por Sri Lanka' },
      { pageId: 'tour5', label: 'Tour de 5 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Mejor época para visitar Sri Lanka' },
      { pageId: 'guideSafety', label: 'Guía de seguridad en Sri Lanka' },
      { pageId: 'guideWildlife', label: 'Guía de fauna de Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Przewodnik pakowania na Sri Lankę: co zabrać na plaże, świątynie i góry',
    lead: 'Sri Lanka mieści tropikalne wybrzeża, mgliste góry herbaciane i starożytne świątynie na małej wyspie walizka potrzebuje warstw, skromniejszej odzieży i rozsądnego obuwia, a nie jednej „plażowej” garderoby. Mądre pakowanie pozwala wygodnie przejść od schodów Sigiriya do chłodnych wieczorów w Ella bez przepakowanej walizki.',
    heroAlt: 'Torba podróżna spakowana na wycieczkę po Sri Lance przez różne strefy klimatyczne',
    sections: [
      {
        title: 'Strefy klimatyczne: gorące wybrzeża kontra chłodne góry',
        body: 'Południowe i zachodnie wybrzeże, Colombo i niziny Trójkąta Kulturowego są gorące i wilgotne przez cały rok lekka bawełna i len, luźne spodnie i przewiewne koszule sprawdzają się najlepiej. Nuwara Eliya, Ella i Horton Plains wieczorem bywają naprawdę chłodne, zwłaszcza czerwiec–wrzesień, gdy warto mieć lekki polar lub sweter i długie spodnie na noc.\n\nWiększość tras obejmuje kilka stref w tydzień myśl warstwami, nie jednym typem stroju. Cienka kurtka przeciwdeszczowa lub składany poncho radzi sobie z nagłymi opadami w górach bez dużej wagi.',
      },
      {
        title: 'Dress code w świątyniach i skromna odzież',
        body: 'Buddyjskie i hinduskie świątynie wymagają zakrytych ramion i kolan dla mężczyzn i kobiet w Kandy, Dambulli i mniejszych kapliczkach. Trzymaj sarong lub lekki szal w torbie dnia; zakrywa ramiona łatwiej niż pełna zmiana stroju na każdym postoju.\n\nZdejmij kapelusz i buty przed salami kaplicy (skarpetki zwykle w porządku). Jasna, szacunkowa odzież jest mile widziana; strój plażowy zostaje na plaży, nie w miejscach religijnych.',
      },
      {
        title: 'Odzież przeciwdeszczowa, ochrona słoneczna i dwa monsuny',
        body: 'Deszcz zależy od wybrzeża i sezonuonsun południowo-zachodni (ok. maj–wrzesień) moczy zachód i góry, północno-wschodni (ok. październik–styczeń) wschód. Kompaktowy parasol lub składana kurtka lepiej radzi sobie z krótkimi tropikalnymi ulewami niż założenie „pory suchej” bez deszczu.\n\nSłońce jest intensywne w Sigiriya, na jeepie safari i na otwartych plażach krem z wysokim SPF, kapelusz z szerokim rondem i okulary UV. Krem bezpieczny dla raf koralowych przy nurkowaniu z rurką.',
      },
      {
        title: 'Obuwie na Sigiriya, wędrówki i codzienne zwiedzanie',
        body: 'Kamienne schody Sigiriya są strome, nierówne i gorące w południe zamknięte tenisówki z dobrym grippem biją klapki. Te same buty sprawdzą się w Polonnaruwa, na Adams Peak i Little Adam’s Peak w Ella.\n\nSandały slip-on są praktyczne w świątyniach z częstym zdejmowaniem butów i na plażowe wieczory. Unikaj ciężkich butów trekkingowych bez wielodniowego szlaku; tenisówki wystarczą na większość tras turystycznych.',
      },
      {
        title: 'Ochrona przed komarami i podstawy zdrowia',
        body: 'Denga występuje na Sri Lance; stosuj repelent DEET lub picaridin wieczorem, zwłaszcza po deszczu w miastach i nad morzem. Długie rękawy o zmierzchu pomagają. Ryzyko malarii na typowych trasach turystycznych jest niskie, ale ukąszenia bez ochrony są uciążliwe.\n\nWeź leki na receptę w oryginalnych opakowaniach z kopią recepty, podstawowe środki na żołądek, plastry na pęcherze i żel przed posiłkami. Dokumenty ubezpieczenia podróżnego do bagażu podręcznego, nie do rejestrowanego.',
      },
      {
        title: 'Adaptery, dokumenty i czego nie pakować za dużo',
        body: 'Sri Lanka używa gniazdek Type D (trzy okrągłe bolce) i Type G (brytyjskie) uniwersalny adapter z ochroną przed przepięciem pasuje do większości hoteli. Napięcie 230 V; sprawdź dual voltage urządzeń do włosów.\n\nZostaw ciężkie stroje wieczorowe, wiele przewodników papierowych i pełną apteczkę apteki i księgarnie są w Colombo i miejscowościach turystycznych. Średnia walizka plus plecak dnia wystarczą na tydzień prywatnej wycieczki przy praniu w hotelach mid-range.',
      },
    ],
    faq: [
      {
        q: 'Czy potrzebuję ciepłej odzieży na Sri Lankę?',
        a: 'Tak, na góry Ella, Nuwara Eliya i wczesne safari bywają chłodne. Lekki polar i długie spodnie wystarczą większości podróżnych.',
      },
      {
        q: 'Czy mogę nosić szorty w świątyniach?',
        a: 'Kolana muszą być zakryte w aktywnych świątyniach długie spodnie lub sarong na szorty. Ramiona też; szal lub lekka koszula rozwiązuje oba.',
      },
      {
        q: 'Jakie buty na Sigiriya?',
        a: 'Tenisówki z dobrym grippemetalowe stopnie i rozgrzana skała ślizgają się w sandałach. Skarpetki przy częstych wizytach w świątyniach.',
      },
      {
        q: 'Czy zabrać kurtkę przeciwdeszczową?',
        a: 'Składana kurtka lub kompaktowy parasol przydają się przez cały rok, zwłaszcza na popołudnia w górach i sezon przejściowy z krótkimi, ulewnymi opadami.',
      },
      {
        q: 'Jaki adapter elektryczny?',
        a: 'Type D i Type G są standardem; uniwersalny adapter w większości hoteli. 230 Vprawdź dual voltage suszarki i prostownicy.',
      },
    ],
    ctaTitle: 'Podróżuj lekko na w pełni zaplanowanej prywatnej wycieczce',
    ctaBody: 'Nasze trasy z kierowcą ogarniają logistykę dniaaj miesiąc podróży, a zaproponujemy listę bagażu dopasowaną do trasy, od safari w Yali po przejazdy pociągiem w kraju herbaty.',
    ctaLabel: 'Zaplanuj podróż na Sri Lankę',
    relatedTours: [
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour8', label: '8-dniowa wycieczka po Sri Lance' },
      { pageId: 'tour5', label: '5-dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Najlepszy czas na wizytę na Sri Lance' },
      { pageId: 'guideSafety', label: 'Przewodnik bezpieczeństwa na Sri Lance' },
      { pageId: 'guideWildlife', label: 'Przewodnik po dzikiej przyrodzie Sri Lanki' },
    ],
  },

  ru: {
    h1: 'Гид по упаковке вещей для Шри-Ланки: что взять на пляж, в храмы и в горы',
    lead: 'Шри-Ланка сочетает тропические побережья, туманные чайные холмы и древние храмы на маленьком островеодану нужны слои одежды, скромные наряды и разумная обувь, а не один «пляжный» гардероб. Умная упаковка позволяет комфортно пройти от ступеней Сигирии до прохладных вечеров в Элле без перегруженного багажа.',
    heroAlt: 'Дорожная сумка, собранная для тура по Шри-Ланке через несколько климатических зон',
    sections: [
      {
        title: 'Климатические зоны: жаркое побережье и прохладные горы',
        body: 'Южное и западное побережья, Коломбо и низины Культурного треугольника жаркие и влажные круглый годй хлопок и лён, свободные брюки и дышащие рубашки работают лучше всего. Nuwara Eliya, Элла и Horton Plains вечером могут быть по-настоящему прохладными, особенно с июня по сентябрь, когда стоит взять лёгкую флиску или свитер и длинные брюки на ночь.\n\nБольшинство маршрутов за неделю пересекают несколько зонями, а не одним типом одежды. Тонкая дождевик или складной poncho справляется с внезапными ливнями в горах без лишнего веса.',
      },
      {
        title: 'Дресс-код в храмах и скромная одежда',
        body: 'Буддийские и индуистские храмы требуют закрытых плеч и колен мужчин и женщин в Канди, Дамбулле и деревенских святынях. Держите sarong или лёгкий шарф в дневной сумке; он закрывает плечи проще, чем полная переодевание на каждой остановке.\n\nСнимайте шляпы и обувь перед залами святыни (носки обычно допустимы). Светлая уважительная одежда приветствуется; пляжная остаётся на пляже, не на религиозных объектах.',
      },
      {
        title: 'Дождевик, защита от солнца и два муссона',
        body: 'Дождь приходит по-разному в зависимости от побережья и сезона-западный муссон (примерно май–сентябрь) мочит запад и горы, северо-восточный (примерно октябрь–январь)осток. Компактный зонт или складная куртка лучше справляются с короткими тропическими ливнями, чем предположение «сухой сезон» без дождя.\n\nСолнце интенсивно в Сигирии, на сафari-джипе и на открытых пляжах возьмите крем с высоким SPF, широкополую шляпу и UV-очки. Reef-safe крем уместен при снорклинге.',
      },
      {
        title: 'Обувь для Сигирии, походов и ежедневных поездок',
        body: 'Каменная лестница Сигирии крутая, неровная и раскалённая к полудню закрытые кроссовки с хорошим сцеплением лучше шлёпанцев. Те же подойдут для Полonnaruwa, Adam’s Peak при восхождении и Little Adam’s Peak в Элле.\n\nСlip-on сандалии удобны для храмов с частым снятием обуви и для пляжных вечеров. Тяжёлые трекинговые ботинки не нужны без многодневного похода; кроссовок хватит для большинства туристических троп.',
      },
      {
        title: 'Защита от комаров и базовое здоровье',
        body: 'Дengue встречается на Шри-Ланке; используйте репеллент с DEET или picaridin вечером, особенно после дождя в городах и на побережье. Длинные рукава на закате помогают. Риск малярии на типичных туристических маршрутах низок, но укусы без защиты неприятны.\n\nВозьмите рецептурные лекарства в оригинальной упаковке с копией рецепта, базовые средства от желудка, пластыри от мозолей и sanitizer перед едой. Документы страховки в ручную кладь, не в багаж.',
      },
      {
        title: 'Адаптеры, документы и что не стоит брать лишнего',
        body: 'На Шри-Ланке розетки Type D (три круглых штыря) и Type G (британский тип)ниверсальный адаптер с защитой от скачков покрывает большинство отелей. Напряжение 230 V; проверьте dual voltage для фена и выпрямителя.\n\nОставьте дома тяжёлые вечерние наряды, несколько бумажных путеводителей и полную аптекуеки и книжные есть в Коломбо и туристических городах. Средний чемодан плюс дневной рюкзак хватит на недельный частный тур при стирке в отелях mid-range.',
      },
    ],
    faq: [
      {
        q: 'Нужна ли тёплая одежда на Шри-Ланку?',
        a: 'Да, для горлла, Nuwara Eliya и ранние сафari могут быть прохладными. Лёгкая флиска и одни длинные брюки хватит большинству.',
      },
      {
        q: 'Можно ли носить шорты в храмах?',
        a: 'Колени должны быть закрыты в действующих храмахлинные брюки или sarong поверх шорт. Плечи тоже; шарф или лёгкая рубашка решает оба вопроса.',
      },
      {
        q: 'Какая обувь для Сигирии?',
        a: 'Поддерживающие кроссовки с хорошим сцеплениеметаллические ступени и раскалённый камень скользят в сандалиях. Носки для частых визитов в храмы.',
      },
      {
        q: 'Брать ли дождевик?',
        a: 'Складная куртка или компактный зонт полезны круглый год, особенно для горных послеполудений и межсезонья с короткими, но сильными ливнями.',
      },
      {
        q: 'Какой электрический адаптер нужен?',
        a: 'Стандарт Type D и Type G; универсальный адаптер подходит в большинстве отелей. 230 Vроверьте dual voltage фена и утюжка.',
      },
    ],
    ctaTitle: 'Путешествуйте легко на полностью спланированном частном туре',
    ctaBody: 'Маршруты с водителем берут на себя ежедневную логистику назовите месяц поездки, и мы предложим список вещей под ваш маршрут, от сафari в Яле до поездов в чайном крае.',
    ctaLabel: 'Спланировать поездку на Шри-Ланку',
    relatedTours: [
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
      { pageId: 'tour8', label: '8-дневный тур по Шри-Ланке' },
      { pageId: 'tour5', label: '5-дневный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Сигирия' },
      { pageId: 'destElla', label: 'Элла' },
      { pageId: 'destKandy', label: 'Канди' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Лучшее время для поездки в Шри-Ланку' },
      { pageId: 'guideSafety', label: 'Гид по безопасности на Шри-Ланке' },
      { pageId: 'guideWildlife', label: 'Гид по дикой природе Шри-Ланки' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Packliste: Was Sie für Strände, Tempel und Bergland mitnehmen',
    lead: 'Sri Lanka vereint tropische Küsten, nebliges Tee-Hochland und antike Tempel auf einer kleinen Inselhr Gepäck braucht daher Schichten, dezentere Kleidung und vernünftiges Schuhwerk statt einer reinen Strandurlaubs-Garderobe. Clever packen heißt: bequem von Sigiriyas Felsstufen bis zu Ellas kühlen Abenden, ohne den Koffer zu überladen.',
    heroAlt: 'Reisetasche gepackt für eine Sri-Lanka-Rundreise durch mehrere Klimazonen',
    sections: [
      {
        title: 'Klimazonen: heiße Küsten versus kühles Bergland',
        body: 'Süd- und Westküste, Colombo und das Tiefland des Kulturdreiecks sind ganzjährig heiß und feuchteichte Baumwolle und Leinen, lockere Hosen und atmungsaktive Hemden funktionieren am besten. Nuwara Eliya, Ella und Horton Plains können abends spürbar kühl wirken, besonders Juni bis September, wenn eine leichte Fleecejacke oder Strickjacke und lange Hosen nachts sinnvoll sind.\n\nDie meisten Rundreisen durchqueren in einer Woche mehrere Zonenenken Sie in Schichten statt in einem Outfit-Typ. Eine dünne Regenjacke oder packbare Poncho-Variante fängt plötzliche Schauer in den Bergen ab, ohne viel Gewicht zu kosten.',
      },
      {
        title: 'Tempel-Kleiderordnung und dezente Kleidung',
        body: 'Buddhistische und hinduistische Tempel verlangen bedeckte Schultern und Knieür Männer und Frauen an Orten wie dem Zahntempel in Kandy, der Höhlentempel von Dambulla und kleineren Dorfschreinen. Tragen Sie ein Sarong oder leichtes Tuch in der Tages-Tasche; es deckt Schultern und ist einfacher als bei jedem Stopp das ganze Outfit zu wechseln.\n\nHüte und Schuhe vor dem Betreten der Schreinräume ablegen (Socken sind meist in Ordnung). Helle, respektvolle Kleidung ist willkommen; Strandmode gehört an den Strand, nicht in religiöse Stätten.',
      },
      {
        title: 'Regenausrüstung, Sonnenschutz und die zwei Monsune',
        body: 'Regen kommt je nach Küste und Saison unterschiedlich der Südwestmonsun (etwa Mai–September) benetzt Westküste und Bergland, der Nordostmonsun (etwa Oktober–Januar) die Ostküste. Ein kompakter Schirm oder faltbare Regenjacke bewältigt kurze tropische Schauer besser, als anzunehmen, „Trockenzeit“ bedeute keinen Regen.\n\nDie Sonne ist an Sigiriya, auf Safari-Jeeps und offenen Stränden intensiv packen Sie hohen LSF, breitkrempigen Hut und UV-Sonnenbrille. Riff-freundlicher Sonnenschutz ist sinnvoll beim Schnorcheln.',
      },
      {
        title: 'Schuhe für Sigiriya, Wanderungen und tägliche Touren',
        body: 'Sigiriyas Fels-Treppe ist steil, uneben und mittags heiß geschlossene Turnschuhe mit gutem Grip schlagen Flip-Flops. Dieselben Schuhe eignen sich für Polonnaruwa, Adams Peak bei einem Aufstieg und Little Adams Peak in Ella.\n\nSlip-on-Sandalen sind praktisch für Tempel, wo man Schuhe oft auszieht, und für Strandabende. Schwere Wanderschuhe nur mit geplantem Mehrtagestrek mitnehmen; Turnschuhe reichen für die meisten Besucherpfade.',
      },
      {
        title: 'Mückenschutz und Gesundheits-Basics',
        body: 'Dengue kommt auf Sri Lanka vor; nutzen Sie DEET- oder Picaridin-Spray abends, besonders nach Regen in urbanen und Küstengebieten. Lange Ärmel in der Dämmerung helfen zusätzlich. Malaria-Risiko ist auf typischen Touristenrouten gering, aber Mückenstiche ohne Schutz sind lästig.\n\nPacken Sie verschreibungspflichtige Medikamente in Originalverpackung mit Rezeptkopie, Basismittel gegen Magenbeschwerden, Pflaster gegen Blasen und Händedesinfektionsmittel vor Mahlzeiten. Reiseversicherungsunterlagen gehören ins Handgepäck, nicht in den Koffer.',
      },
      {
        title: 'Adapter, Dokumente und was Sie nicht mitnehmen sollten',
        body: 'Sri Lanka nutzt Typ D (drei runde Stifte) und Typ G (UK-Stecker)in Universaladapter mit Überspannungsschutz deckt die meisten Hotels ab. Spannung 230 V; prüfen Sie Haartools auf Dual-Voltage.\n\nLassen Sie schwere Abendgarderobe, mehrere Reiseführer und die komplette Hausapotheke zu Hause Apotheken und Buchhandlungen gibt es in Colombo und Touristenorten. Ein mittelgroßer Koffer plus Tagesrucksack reicht für eine Woche private Tour, wenn Wäsche in Mittelklasse-Hotels möglich ist.',
      },
    ],
    faq: [
      {
        q: 'Brauche ich warme Kleidung für Sri Lanka?',
        a: 'Ja, fürs Bergland Ella, Nuwara Eliya und frühe Safari-Fahrten können kühl sein. Eine leichte Fleecejacke und eine lange Hose reichen den meisten Reisenden.',
      },
      {
        q: 'Darf ich Shorts in Tempeln tragen?',
        a: 'Knie müssen in aktiven Tempeln bedeckt sein lange Hosen oder Sarong über Shorts. Schultern ebenfalls bedecken; Schal oder leichtes Hemd löst beides.',
      },
      {
        q: 'Welche Schuhe für Sigiriya?',
        a: 'Stützende Turnschuhe mit gutem Gripetalltreppen und erhitzter Fels rutschen in Sandalen. Socken für häufiges Schuhe-Ausziehen in Tempeln mitnehmen.',
      },
      {
        q: 'Soll ich eine Regenjacke mitnehmen?',
        a: 'Eine packbare Regenjacke oder kompakter Schirm ist ganzjährig nützlich, besonders für Bergland-Nachmittage und Zwischensaison mit kurzen, kräftigen Schauern.',
      },
      {
        q: 'Welchen Stecker brauche ich?',
        a: 'Typ D und Typ G sind Standard; Universaladapter funktionieren in den meisten Hotels. 230 Vual-Voltage bei Haartrockner und Glätteisen prüfen.',
      },
    ],
    ctaTitle: 'Leicht reisen auf einer voll geplanten Privatreise',
    ctaBody: 'Unsere Rundreisen mit Fahrer übernehmen die Tageslogistikennen Sie uns Ihren Reisemonat, und wir schlagen eine Packliste passend zu Ihrer Route vor, von Yala-Safaris bis Tee-Zugfahrten.',
    ctaLabel: 'Sri-Lanka-Reise planen',
    relatedTours: [
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
      { pageId: 'tour8', label: '8-tägige Sri-Lanka-Rundreise' },
      { pageId: 'tour5', label: '5-tägige Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit für Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits-Ratgeber' },
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt-Ratgeber' },
    ],
  }
};
