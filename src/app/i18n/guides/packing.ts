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
    heroAlt: 'Travel bag packed for a multi climate Sri Lanka round trip',
    sections: [
      {
        id: 'climateLayers',
        title: 'Climate zones: hot coasts versus cool hill country',
        body: 'The south and west coasts, Colombo and the Cultural Triangle lowlands run hot and humid year roundightweight cotton and linen, loose trousers and breathable shirts work best. Nuwara Eliya, Ella and Horton Plains can feel genuinely cool in the evenings, especially June through September, when a light fleece or cardigan and long trousers at night are worth packing.\n\nMost round tours cross several zones in a week, so think in layers rather than one outfit type. A thin rain jacket or packable poncho covers sudden showers in the hills without adding much weight.',
      },
      {
        id: 'templeDress',
        title: 'Temple dress code and modest clothing',
        body: 'Buddhist and Hindu temples require shoulders and knees coveredhis applies to men and women at sites like the Temple of the Tooth in Kandy, Dambulla cave temple and smaller village shrines. Carry a sarong or lightweight scarf in your day bag; it doubles as a shoulder cover and is easier than changing full outfits at every stop.\n\nRemove hats and shoes before entering shrine rooms (socks are usually fine). Bright, respectful clothing is welcome; beachwear belongs at the beach, not at religious sites.',
      },
      {
        id: 'rainAndSun',
        title: 'Rain gear, sun protection and the two monsoons',
        body: 'Rain arrives differently depending on coast and seasonhe southwest monsoon (roughly May to September) wets the west coast and hill country, while the north east monsoon (roughly October to January) affects the east. A compact umbrella or foldable rain jacket handles short tropical downpours better than assuming “dry season” means no rain at all.\n\nSun is intense at Sigiriya, on safari jeep rides and at open beachesack high SPF sunscreen, a wide brim hat and UV protective sunglasses. Reef safe sunscreen is considerate if you plan to snorkel.',
      },
      {
        id: 'footwear',
        title: 'Footwear for Sigiriya, hiking and daily touring',
        body: 'Sigiriya’s rock staircase is steep, uneven and hot underfoot by mid morning closed toe trainers with good grip beat flip flops here. The same shoes work for Polonnaruwa ruins, Adam’s Peak if you attempt a climb, and Little Adam’s Peak in Ella.\n\nSlip on sandals are practical for temples where you remove shoes repeatedly, and for beach evenings. Avoid packing heavy hiking boots unless you have a dedicated multi day trek planned; trainers suffice for most visitor trails.',
      },
      {
        id: 'healthEssentials',
        title: 'Mosquito protection and health basics',
        body: 'Dengue is present in Sri Lanka; use DEET or picaridin repellent in the evening, especially after rain in urban and coastal areas. Long sleeves at dusk help alongside repellent. Malaria risk is low for typical tourist routes, but mosquito bites remain annoying without protection.\n\nPack any prescription medications in original containers with a copy of the prescription, basic stomach remedies, plasters for blisters and hand sanitiser for before meals. Travel insurance documents belong in carry on, not checked luggage.',
      },
      {
        id: 'techAndLeaveHome',
        title: 'Power adapters, documents and what not to overpack',
        body: 'Sri Lanka uses Type D (three round pins) and Type G (UK style) sockets a universal adapter with surge protection covers most hotels and guesthouses. Voltage is 230V; check hair tools if they are not dual voltage.\n\nLeave heavy formal wear, multiple guidebooks and a full pharmacy at homeharmacies and bookshops exist in Colombo and tourist towns. One medium suitcase plus a daypack is enough for a week long private tour when laundry is available at mid range hotels.',
      },
    ],
    faq: [
      {
        q: 'Do I need warm clothes for Sri Lanka?',
        a: 'Yes, for the hill countrya, Nuwara Eliya and early morning safari drives can feel cool. A light fleece or jacket and one pair of long trousers are enough for most travellers.',
      },
      {
        q: 'Can I wear shorts to temples in Sri Lanka?',
        a: 'Knees must be covered inside active temples, so long trousers or a sarong over shorts is required. Shoulders should also be covered; a scarf or light shirt resolves both.',
      },
      {
        q: 'What shoes are best for climbing Sigiriya?',
        a: 'Supportive trainers with good grip metal stair sections and sun heated rock steps are slippery in sandals. Bring socks for temple visits where shoes come off frequently.',
      },
      {
        q: 'Should I bring a rain jacket to Sri Lanka?',
        a: 'A packable rain jacket or compact umbrella is useful year round, especially for hill country afternoons and shoulder season travel when showers are brief but heavy.',
      },
      {
        q: 'What power adapter do I need for Sri Lanka?',
        a: 'Type D and Type G plugs are standard; a universal travel adapter works in most hotels. Voltage is 230Vfirm dual voltage on hair dryers and straighteners.',
      },
    ],
    ctaTitle: 'Travel light on a fully planned private tour',
    ctaBody: 'Our chauffeur driven itineraries handle daily logisticsl us your travel month and we will suggest a packing list matched to your route, from Yala safaris to tea country train rides.',
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
    h1: 'Sri Lanka Packliste: Was Sie fur Strande, Tempel und Bergland mitnehmen',
    lead: 'Sri Lanka vereint tropische Kusten, nebliges Tee Hochland und antike Tempel auf einer kleinen Inselhr Gepack braucht daher Schichten, dezentere Kleidung und vernunftiges Schuhwerk statt einer reinen Strandurlaubs Garderobe. Clever packen heisst: bequem von Sigiriyas Felsstufen bis zu Ellas kuhlen Abenden, ohne den Koffer zu uberladen.',
    heroAlt: 'Reisetasche gepackt fur eine Sri Lanka Rundreise durch mehrere Klimazonen',
    sections: [
      {
        title: 'Klimazonen: heisse Kusten versus kuhles Bergland',
        body: 'Sud und Westkuste, Colombo und das Tiefland des Kulturdreiecks sind ganzjahrig heiss und feuchteichte Baumwolle und Leinen, lockere Hosen und atmungsaktive Hemden funktionieren am besten. Nuwara Eliya, Ella und Horton Plains konnen abends spurbar kuhl wirken, besonders Juni bis September, wenn eine leichte Fleecejacke oder Strickjacke und lange Hosen nachts sinnvoll sind.\n\nDie meisten Rundreisen durchqueren in einer Woche mehrere Zonenenken Sie in Schichten statt in einem Outfit Typ. Eine dunne Regenjacke oder packbare Poncho Variante fangt plotzliche Schauer in den Bergen ab, ohne viel Gewicht zu kosten.',
      },
      {
        title: 'Tempel Kleiderordnung und dezente Kleidung',
        body: 'Buddhistische und hinduistische Tempel verlangen bedeckte Schultern und Knieur Manner und Frauen an Orten wie dem Zahntempel in Kandy, der Hohlentempel von Dambulla und kleineren Dorfschreinen. Tragen Sie ein Sarong oder leichtes Tuch in der Tages Tasche; es deckt Schultern und ist einfacher als bei jedem Stopp das ganze Outfit zu wechseln.\n\nHute und Schuhe vor dem Betreten der Schreinraume ablegen (Socken sind meist in Ordnung). Helle, respektvolle Kleidung ist willkommen; Strandmode gehort an den Strand, nicht in religiose Statten.',
      },
      {
        title: 'Regenausrustung, Sonnenschutz und die zwei Monsune',
        body: 'Regen kommt je nach Kuste und Saison unterschiedlich der Sudwestmonsun (etwa Mai to September) benetzt Westkuste und Bergland, der Nordostmonsun (etwa Oktober to Januar) die Ostkuste. Ein kompakter Schirm oder faltbare Regenjacke bewaltigt kurze tropische Schauer besser, als anzunehmen, „Trockenzeit“ bedeute keinen Regen.\n\nDie Sonne ist an Sigiriya, auf Safari Jeeps und offenen Stranden intensiv packen Sie hohen LSF, breitkrempigen Hut und UV Sonnenbrille. Riff freundlicher Sonnenschutz ist sinnvoll beim Schnorcheln.',
      },
      {
        title: 'Schuhe fur Sigiriya, Wanderungen und tagliche Touren',
        body: 'Sigiriyas Fels Treppe ist steil, uneben und mittags heiss geschlossene Turnschuhe mit gutem Grip schlagen Flip Flops. Dieselben Schuhe eignen sich fur Polonnaruwa, Adams Peak bei einem Aufstieg und Little Adams Peak in Ella.\n\nSlip on Sandalen sind praktisch fur Tempel, wo man Schuhe oft auszieht, und fur Strandabende. Schwere Wanderschuhe nur mit geplantem Mehrtagestrek mitnehmen; Turnschuhe reichen fur die meisten Besucherpfade.',
      },
      {
        title: 'Muckenschutz und Gesundheits Basics',
        body: 'Dengue kommt auf Sri Lanka vor; nutzen Sie DEET- oder Picaridin Spray abends, besonders nach Regen in urbanen und Kustengebieten. Lange Armel in der Dammerung helfen zusatzlich. Malaria Risiko ist auf typischen Touristenrouten gering, aber Muckenstiche ohne Schutz sind lastig.\n\nPacken Sie verschreibungspflichtige Medikamente in Originalverpackung mit Rezeptkopie, Basismittel gegen Magenbeschwerden, Pflaster gegen Blasen und Handedesinfektionsmittel vor Mahlzeiten. Reiseversicherungsunterlagen gehoren ins Handgepack, nicht in den Koffer.',
      },
      {
        title: 'Adapter, Dokumente und was Sie nicht mitnehmen sollten',
        body: 'Sri Lanka nutzt Typ D (drei runde Stifte) und Typ G (UK Stecker)in Universaladapter mit Uberspannungsschutz deckt die meisten Hotels ab. Spannung 230 V; prufen Sie Haartools auf Dual Voltage.\n\nLassen Sie schwere Abendgarderobe, mehrere Reisefuhrer und die komplette Hausapotheke zu Hause Apotheken und Buchhandlungen gibt es in Colombo und Touristenorten. Ein mittelgrosser Koffer plus Tagesrucksack reicht fur eine Woche private Tour, wenn Wasche in Mittelklasse Hotels moglich ist.',
      },
    ],
    faq: [
      {
        q: 'Brauche ich warme Kleidung fur Sri Lanka?',
        a: 'Ja, furs Bergland Ella, Nuwara Eliya und fruhe Safari Fahrten konnen kuhl sein. Eine leichte Fleecejacke und eine lange Hose reichen den meisten Reisenden.',
      },
      {
        q: 'Darf ich Shorts in Tempeln tragen?',
        a: 'Knie mussen in aktiven Tempeln bedeckt sein lange Hosen oder Sarong uber Shorts. Schultern ebenfalls bedecken; Schal oder leichtes Hemd lost beides.',
      },
      {
        q: 'Welche Schuhe fur Sigiriya?',
        a: 'Stutzende Turnschuhe mit gutem Gripetalltreppen und erhitzter Fels rutschen in Sandalen. Socken fur haufiges Schuhe Ausziehen in Tempeln mitnehmen.',
      },
      {
        q: 'Soll ich eine Regenjacke mitnehmen?',
        a: 'Eine packbare Regenjacke oder kompakter Schirm ist ganzjahrig nutzlich, besonders fur Bergland Nachmittage und Zwischensaison mit kurzen, kraftigen Schauern.',
      },
      {
        q: 'Welchen Stecker brauche ich?',
        a: 'Typ D und Typ G sind Standard; Universaladapter funktionieren in den meisten Hotels. 230 Vual Voltage bei Haartrockner und Glatteisen prufen.',
      },
    ],
    ctaTitle: 'Leicht reisen auf einer voll geplanten Privatreise',
    ctaBody: 'Unsere Rundreisen mit Fahrer ubernehmen die Tageslogistikennen Sie uns Ihren Reisemonat, und wir schlagen eine Packliste passend zu Ihrer Route vor, von Yala Safaris bis Tee Zugfahrten.',
    ctaLabel: 'Sri Lanka Reise planen',
    relatedTours: [
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige Sri Lanka Rundreise' },
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits Ratgeber' },
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide des bagages pour le Sri Lanka : quoi emporter pour plages, temples et hautes terres',
    lead: 'Le Sri Lanka concentre cotes tropicales, collines brumeuses du the et sites de temples anciens sur une petite ileotre sac a besoin de couches, de tenues modestes et de chaussures sensees plutot que d’une garde robe « vacances plage » unique. Bien preparer son bagage permet de passer confortablement des marches de Sigiriya aux soirees fraiches d’Ella sans surcharger la valise.',
    heroAlt: 'Sac de voyage prepare pour un circuit au Sri Lanka a travers plusieurs climats',
    sections: [
      {
        title: 'Zones climatiques : cotes chaudes versus hautes terres fraiches',
        body: 'Les cotes sud et ouest, Colombo et les basses terres du Triangle Culturel sont chaudes et humides toute l’annee et lin legers, pantalons amples et chemises respirantes conviennent le mieux. Nuwara Eliya, Ella et Horton Plains peuvent sembler franchement frais le soir, surtout de juin a septembre, quand une polaire legere ou un cardigan et un pantalon long valent la peine.\n\nLa plupart des circuits traversent plusieurs zones en une semaineouches plutot qu’en un seul type de tenue. Une fine veste de pluie ou un poncho compact gere les averses soudaines dans les collines sans alourdir.',
      },
      {
        title: 'Code vestimentaire des temples et tenues modestes',
        body: 'Les temples bouddhistes et hindous exigent epaules et genoux couvertsmes et femmes, a Kandy, Dambulla et les petits sanctuaires de village. Gardez un sarong ou foulard leger dans le sac du jour ; il couvre les epaules plus facilement qu’un changement complet a chaque arret.\n\nRetirez chapeaux et chaussures avant les salles de sanctuaire (les chaussettes passent generalement). Des vetements clairs et respectueux sont bienvenus ; la tenue de plage reste a la plage, pas sur les sites religieux.',
      },
      {
        title: 'Equipement pluie, protection solaire et les deux moussons',
        body: 'La pluie varie selon la cote et la saisona mousson du sud ouest (environ mai to septembre) arrose l’ouest et les hautes terres, celle du nord est (environ octobre to janvier) l’est. Un parapluie compact ou une veste pliable gere mieux les averses tropicales courtes que supposer « saison seche » sans pluie.\n\nLe soleil est intense a Sigiriya, en jeep safari et sur plages ouvertes creme haute protection, chapeau a large bord et lunettes UV. Une creme respectueuse des recifs si vous snorklez.',
      },
      {
        title: 'Chaussures pour Sigiriya, randonnees et visites quotidiennes',
        body: 'L’escalier de roche de Sigiriya est raide, irregulier et brulant en milieu de matinee des baskets fermees avec bonne adherence battent les tongs. Les memes chaussures vont pour Polonnaruwa, le pic d’Adam si vous tentez l’ascension, et Little Adam’s Peak a Ella.\n\nDes sandales faciles a enfiler sont pratiques pour les temples ou l’on retire souvent les chaussures, et pour les soirees plage. Evitez les grosses bottes sauf trek de plusieurs jours ; les baskets suffisent pour la plupart des sentiers touristiques.',
      },
      {
        title: 'Protection anti moustiques et bases sante',
        body: 'La dengue est presente au Sri Lanka ; utilisez repulsif DEET ou picaridine le soir, surtout apres pluie en zones urbaines et cotieres. Manches longues au crepuscule aident. Le risque paludeen est faible sur les routes touristiques classiques, mais les piqures sans protection restent penibles.\n\nEmportez medicaments sur ordonnance dans emballages d’origine avec copie, remedes digestifs de base, pansements pour ampoules et gel hydroalcoolique avant les repas. Les documents d’assurance voyage vont en cabine, pas en soute.',
      },
      {
        title: 'Adaptateurs, documents et ce qu’il vaut mieux ne pas surcharger',
        body: 'Le Sri Lanka utilise prises Type D (trois broches rondes) et Type G (style UK) un adaptateur universel avec protection surtension couvre la plupart des hotels. Tension 230 V ; verifiez vos appareils coiffants dual voltage.\n\nLaissez tenues de soiree lourdes, multiples guides papier et pharmacie complete pharmacies et librairies existent a Colombo et en zones touristiques. Une valise moyenne plus sac du jour suffit pour une semaine de circuit prive si la lessive est possible en hotels milieu de gamme.',
      },
    ],
    faq: [
      {
        q: 'Faut il des vetements chauds au Sri Lanka ?',
        a: 'Oui pour les hautes terres Ella, Nuwara Eliya et safaris tot le matin peuvent sembler frais. Une polaire legere et un pantalon long suffisent a la plupart des voyageurs.',
      },
      {
        q: 'Peut on porter des shorts aux temples ?',
        a: 'Les genoux doivent etre couverts dans les temples actifs pantalon long ou sarong par dessus les shorts. Epaules couvertes aussi ; foulard ou chemise legere regle les deux.',
      },
      {
        q: 'Quelles chaussures pour Sigiriya ?',
        a: 'Baskets support avec bonne adherence marches metalliques et roche chauffee glissent en sandales. Chaussettes pour les visites de temples frequentes.',
      },
      {
        q: 'Faut il une veste de pluie ?',
        a: 'Une veste pliable ou parapluie compact est utile toute l’annee, surtout pour les apres midis des hautes terres et l’intersaison aux averses breves mais fortes.',
      },
      {
        q: 'Quel adaptateur electrique ?',
        a: 'Types D et G sont standard ; adaptateur universel dans la plupart des hotels. 230 V verifiez le dual voltage des seche cheveux et lisseurs.',
      },
    ],
    ctaTitle: 'Voyagez leger avec un circuit prive entierement planifie',
    ctaBody: 'Nos circuits avec chauffeur gerent la logistique quotidienne indiquez votre mois de voyage et nous suggererons une liste adaptee a votre route, des safaris de Yala aux trains du pays du the.',
    ctaLabel: 'Planifier votre voyage au Sri Lanka',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
      { pageId: 'tour8', label: 'Circuit de 8 jours au Sri Lanka' },
      { pageId: 'tour5', label: 'Circuit de 5 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Meilleure periode pour visiter le Sri Lanka' },
      { pageId: 'guideSafety', label: 'Guide securite Sri Lanka' },
      { pageId: 'guideWildlife', label: 'Guide faune du Sri Lanka' },
    ],
  },

  it: {
    h1: 'Guida ai bagagli per lo Sri Lanka: cosa portare per spiagge, templi e montagna',
    lead: 'Lo Sri Lanka concentra coste tropicali, colline nebbiose del te e antichi templi in una piccola isola il bagaglio ha bisogno di strati, abiti modesti e calzature sensate, non di un solo guardaroba da spiaggia. Fare le valigie con intelligenza significa muoversi comodamente dalle scale di Sigiriya alle serate fresche di Ella senza sovraccaricare la valigia.',
    heroAlt: 'Borsa da viaggio preparata per un tour in Sri Lanka attraverso piu climi',
    sections: [
      {
        title: 'Zone climatiche: coste calde versus entroterra fresco',
        body: 'Coste sud e ovest, Colombo e le pianure del Triangolo Culturale sono calde e umide tutto l’anno cotone e lino leggeri, pantaloni ampi e camicie traspiranti funzionano meglio. Nuwara Eliya, Ella e Horton Plains possono sembrare davvero freschi la sera, soprattutto giugno to settembre, quando una felpa leggera o cardigan e pantaloni lunghi la notte valgono la pena.\n\nLa maggior parte dei tour attraversa piu zone in una settimanaensate a strati, non a un solo tipo di outfit. Una sottile giacca antipioggia o poncho pieghevole gestisce acquazzoni improvvisi in collina senza peso eccessivo.',
      },
      {
        title: 'Codice vestiario nei templi e abiti modesti',
        body: 'Templi buddhisti e induisti richiedono spalle e ginocchia coperteomini e donne, a Kandy, Dambulla e piccoli santuari di villaggio. Tenete un sarong o foulard leggero nella borsa del giorno; copre le spalle piu facilmente che cambiare outfit a ogni tappa.\n\nTogliete cappelli e scarpe prima delle sale del santuario (i calzini di solito vanno bene). Abiti chiari e rispettosi sono benvenuti; il costume da bagno resta in spiaggia, non nei siti religiosi.',
      },
      {
        title: 'Antipioggia, protezione solare e i due monsoni',
        body: 'La pioggia varia per costa e stagionel monsone sud occidentale (circa maggio to settembre) bagnata ovest e montagna, quello nord orientale (circa ottobre to gennaio) l’est. Ombrello compatto o giacca pieghevole gestisce meglio rovesci tropicali brevi che assumere «stagione secca» senza pioggia.\n\nIl sole e intenso a Sigiriya, in jeep safari e su spiagge apertema ad alto SPF, cappello a tesa larga e occhiali UV. Crema reef safe se fate snorkeling.',
      },
      {
        title: 'Calzature per Sigiriya, trekking e tour quotidiani',
        body: 'La scala di roccia di Sigiriya e ripida, irregolare e calda a meta mattinacarpe chiuse con buon grip battono le infradito. Le stesse scarpe vanno per Polonnaruwa, Adam’s Peak se lo tentate, e Little Adam’s Peak a Ella.\n\nSandali slip on sono pratici per templi dove si tolgono spesso le scarpe e per serate in spiaggia. Evitate scarponi pesanti senza un trek multi giorno dedicato; le sneaker bastano per la maggior parte dei sentieri turistici.',
      },
      {
        title: 'Protezione zanzare e basi salute',
        body: 'La dengue e presente in Sri Lanka; usate repellente DEET o picaridina la sera, soprattutto dopo pioggia in zone urbane e costiere. Maniche lunghe al crepuscolo aiutano. Rischio malaria basso sulle rotte turistiche tipiche, ma punture senza protezione restano fastidiose.\n\nPortate farmaci su prescrizione in confezione originale con copia, rimedi digestivi base, cerotti per vesciche e gel prima dei pasti. Documenti assicurazione viaggio in cabina, non in stiva.',
      },
      {
        title: 'Adattatori, documenti e cosa non portare in eccesso',
        body: 'Lo Sri Lanka usa spine Type D (tre tondi) e Type G (stile UK) adattatore universale con protezione sovratensione copre la maggior parte degli hotel. Tensione 230 V; verificate dual voltage su phon e piastre.\n\nLasciate abiti formali pesanti, piu guide cartacee e farmacia completaarmacie e librerie ci sono a Colombo e in zone turistiche. Una valigia media piu zaino giornaliero bastano per una settimana di tour privato con lavanderia in hotel mid range.',
      },
    ],
    faq: [
      {
        q: 'Servono vestiti caldi per lo Sri Lanka?',
        a: 'Si per l’entroterra collinarella, Nuwara Eliya e safari all’alba possono sembrare freschi. Felpa leggera e un paio di pantaloni lunghi bastano per la maggior parte dei viaggiatori.',
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
    ctaBody: 'I nostri itinerari con autista gestiscono la logistica quotidiana indicate il mese di viaggio e suggeriremo una lista bagagli adatta al percorso, dai safari di Yala ai treni del paese del te.',
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
    h1: 'Guia de equipaje para Sri Lanka: que llevar para playas, templos y montana',
    lead: 'Sri Lanka concentra costas tropicales, colinas brumosas del te y templos antiguos en una isla pequena su maleta necesita capas, ropa modesta y calzado sensato, no un solo armario de vacaciones de playa. Hacer la maleta con criterio permite moverse comodamente desde los escalones de Sigiriya hasta las noches frescas de Ella sin sobrecargar la valija.',
    heroAlt: 'Bolsa de viaje preparada para un tour por Sri Lanka con varios climas',
    sections: [
      {
        title: 'Zonas climaticas: costas calientes frente a montana fresca',
        body: 'Las costas sur y oeste, Colombo y las tierras bajas del Triangulo Cultural son calurosas y humedas todo el ano algodon y lino ligeros, pantalones holgados y camisas transpirables funcionan mejor. Nuwara Eliya, Ella y Horton Plains pueden sentirse frescos por la noche, especialmente de junio a septiembre, cuando merece la pena llevar forro polar ligero o cardigan y pantalon largo.\n\nLa mayoria de los tours cruzan varias zonas en una semana piense en capas, no en un solo tipo de ropa. Una chaqueta fina impermeable o poncho plegable cubre chaparrones subitos en la montana sin mucho peso.',
      },
      {
        title: 'Codigo de vestimenta en templos y ropa modesta',
        body: 'Los templos budistas e hindues exigen hombros y rodillas cubiertosombres y mujeres, en Kandy, Dambulla y pequenos santuarios rurales. Lleve un sarong o panuelo ligero en la bolsa del dia; cubre hombros mas facil que cambiarse entero en cada parada.\n\nQuitese sombrero y zapatos antes de las salas del santuario (los calcetines suelen valer). Ropa clara y respetuosa es bienvenida; el banador queda en la playa, no en sitios religiosos.',
      },
      {
        title: 'Equipo de lluvia, proteccion solar y los dos monzones',
        body: 'La lluvia varia segun costa y temporada el monzon suroeste (aprox. mayo to septiembre) moja oeste y montana, el noreste (aprox. octubre to enero) el este. Un paraguas compacto o chaqueta plegable maneja mejor aguaceros tropicales breves que suponer «temporada seca» sin lluvia.\n\nEl sol es intenso en Sigiriya, en jeep safari y en playas abiertasrema SPF alta, sombrero de ala ancha y gafas UV. Crema respetuosa con arrecifes si hace snorkel.',
      },
      {
        title: 'Calzado para Sigiriya, senderismo y tours diarios',
        body: 'La escalera de roca de Sigiriya es empinada, irregular y caliente a media mananaatillas cerradas con buen agarre ganan a las chanclas. Las mismas valen para Polonnaruwa, el pico de Adam si lo intenta y Little Adam’s Peak en Ella.\n\nSandalias faciles de quitar son practicas para templos donde se descalza a menudo y para noches de playa. Evite botas pesadas salvo trek de varios dias; las zapatillas bastan para la mayoria de senderos turisticos.',
      },
      {
        title: 'Proteccion antimosquitos y basicos de salud',
        body: 'El dengue esta presente en Sri Lanka; use repelente DEET o picaridina por la noche, especialmente tras lluvia en zonas urbanas y costeras. Mangas largas al atardecer ayudan. El riesgo de malaria es bajo en rutas turisticas tipicas, pero las picaduras sin proteccion molestan.\n\nLleve medicacion recetada en envase original con copia, remedios digestivos basicos, tiritas para ampollas y gel antes de comer. Documentos del seguro de viaje en cabina, no en bodega.',
      },
      {
        title: 'Adaptadores, documentos y que no llevar de mas',
        body: 'Sri Lanka usa enchufes Type D (tres redondos) y Type G (estilo UK)adaptador universal con proteccion de sobretension cubre la mayoria de hoteles. Tension 230 V; compruebe dual voltage en secadores y planchas.\n\nDeje en casa ropa formal pesada, varias guias impresas y farmacia completacias y librerias en Colombo y pueblos turisticos. Una maleta mediana mas mochila diaria bastan para una semana de tour privado con lavanderia en hoteles de gama media.',
      },
    ],
    faq: [
      {
        q: 'Necesito ropa de abrigo para Sri Lanka?',
        a: 'Si, para la montanaa, Nuwara Eliya y safaris al amanecer pueden sentirse frescos. Forro polar ligero y un pantalon largo bastan para la mayoria.',
      },
      {
        q: 'Puedo llevar pantalones cortos a los templos?',
        a: 'Las rodillas deben estar cubiertas en templos activosantalon largo o sarong sobre shorts. Hombros tambien; panuelo o camisa ligera resuelve ambos.',
      },
      {
        q: 'Que calzado para Sigiriya?',
        a: 'Zapatillas de soporte con buen agarrescalones metalicos y roca caliente resbalan en sandalias. Calcetines para visitas frecuentes a templos.',
      },
      {
        q: 'Debo llevar chaqueta de lluvia?',
        a: 'Chaqueta plegable o paraguas compacto utiles todo el ano, sobre todo tardes en montana y temporada media con chaparrones breves pero fuertes.',
      },
      {
        q: 'Que adaptador electrico necesito?',
        a: 'Type D y Type G son estandar; adaptador universal en la mayoria de hoteles. 230 V compruebe dual voltage en secador y plancha.',
      },
    ],
    ctaTitle: 'Viaje ligero con un tour privado planificado',
    ctaBody: 'Nuestros itinerarios con chofer gestionan la logistica diaria indique su mes de viaje y sugeriremos una lista de equipaje acorde a su ruta, de safaris en Yala a trenes en tierras del te.',
    ctaLabel: 'Planifique su viaje a Sri Lanka',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
      { pageId: 'tour8', label: 'Tour de 8 dias por Sri Lanka' },
      { pageId: 'tour5', label: 'Tour de 5 dias por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Mejor epoca para visitar Sri Lanka' },
      { pageId: 'guideSafety', label: 'Guia de seguridad en Sri Lanka' },
      { pageId: 'guideWildlife', label: 'Guia de fauna de Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Przewodnik pakowania na Sri Lanke: co zabrac na plaze, swiatynie i gory',
    lead: 'Sri Lanka miesci tropikalne wybrzeza, mgliste gory herbaciane i starozytne swiatynie na malej wyspie walizka potrzebuje warstw, skromniejszej odziezy i rozsadnego obuwia, a nie jednej „plazowej” garderoby. Madre pakowanie pozwala wygodnie przejsc od schodow Sigiriya do chlodnych wieczorow w Ella bez przepakowanej walizki.',
    heroAlt: 'Torba podrozna spakowana na wycieczke po Sri Lance przez rozne strefy klimatyczne',
    sections: [
      {
        title: 'Strefy klimatyczne: gorace wybrzeza kontra chlodne gory',
        body: 'Poludniowe i zachodnie wybrzeze, Colombo i niziny Trojkata Kulturowego sa gorace i wilgotne przez caly rok lekka bawelna i len, luzne spodnie i przewiewne koszule sprawdzaja sie najlepiej. Nuwara Eliya, Ella i Horton Plains wieczorem bywaja naprawde chlodne, zwlaszcza czerwiec to wrzesien, gdy warto miec lekki polar lub sweter i dlugie spodnie na noc.\n\nWiekszosc tras obejmuje kilka stref w tydzien mysl warstwami, nie jednym typem stroju. Cienka kurtka przeciwdeszczowa lub skladany poncho radzi sobie z naglymi opadami w gorach bez duzej wagi.',
      },
      {
        title: 'Dress code w swiatyniach i skromna odziez',
        body: 'Buddyjskie i hinduskie swiatynie wymagaja zakrytych ramion i kolan dla mezczyzn i kobiet w Kandy, Dambulli i mniejszych kapliczkach. Trzymaj sarong lub lekki szal w torbie dnia; zakrywa ramiona latwiej niz pelna zmiana stroju na kazdym postoju.\n\nZdejmij kapelusz i buty przed salami kaplicy (skarpetki zwykle w porzadku). Jasna, szacunkowa odziez jest mile widziana; stroj plazowy zostaje na plazy, nie w miejscach religijnych.',
      },
      {
        title: 'Odziez przeciwdeszczowa, ochrona sloneczna i dwa monsuny',
        body: 'Deszcz zalezy od wybrzeza i sezonuonsun poludniowo zachodni (ok. maj to wrzesien) moczy zachod i gory, polnocno wschodni (ok. pazdziernik to styczen) wschod. Kompaktowy parasol lub skladana kurtka lepiej radzi sobie z krotkimi tropikalnymi ulewami niz zalozenie „pory suchej” bez deszczu.\n\nSlonce jest intensywne w Sigiriya, na jeepie safari i na otwartych plazach krem z wysokim SPF, kapelusz z szerokim rondem i okulary UV. Krem bezpieczny dla raf koralowych przy nurkowaniu z rurka.',
      },
      {
        title: 'Obuwie na Sigiriya, wedrowki i codzienne zwiedzanie',
        body: 'Kamienne schody Sigiriya sa strome, nierowne i gorace w poludnie zamkniete tenisowki z dobrym grippem bija klapki. Te same buty sprawdza sie w Polonnaruwa, na Adams Peak i Little Adam’s Peak w Ella.\n\nSandaly slip on sa praktyczne w swiatyniach z czestym zdejmowaniem butow i na plazowe wieczory. Unikaj ciezkich butow trekkingowych bez wielodniowego szlaku; tenisowki wystarcza na wiekszosc tras turystycznych.',
      },
      {
        title: 'Ochrona przed komarami i podstawy zdrowia',
        body: 'Denga wystepuje na Sri Lance; stosuj repelent DEET lub picaridin wieczorem, zwlaszcza po deszczu w miastach i nad morzem. Dlugie rekawy o zmierzchu pomagaja. Ryzyko malarii na typowych trasach turystycznych jest niskie, ale ukaszenia bez ochrony sa uciazliwe.\n\nWez leki na recepte w oryginalnych opakowaniach z kopia recepty, podstawowe srodki na zoladek, plastry na pecherze i zel przed posilkami. Dokumenty ubezpieczenia podroznego do bagazu podrecznego, nie do rejestrowanego.',
      },
      {
        title: 'Adaptery, dokumenty i czego nie pakowac za duzo',
        body: 'Sri Lanka uzywa gniazdek Type D (trzy okragle bolce) i Type G (brytyjskie) uniwersalny adapter z ochrona przed przepieciem pasuje do wiekszosci hoteli. Napiecie 230 V; sprawdz dual voltage urzadzen do wlosow.\n\nZostaw ciezkie stroje wieczorowe, wiele przewodnikow papierowych i pelna apteczke apteki i ksiegarnie sa w Colombo i miejscowosciach turystycznych. Srednia walizka plus plecak dnia wystarcza na tydzien prywatnej wycieczki przy praniu w hotelach mid range.',
      },
    ],
    faq: [
      {
        q: 'Czy potrzebuje cieplej odziezy na Sri Lanke?',
        a: 'Tak, na gory Ella, Nuwara Eliya i wczesne safari bywaja chlodne. Lekki polar i dlugie spodnie wystarcza wiekszosci podroznych.',
      },
      {
        q: 'Czy moge nosic szorty w swiatyniach?',
        a: 'Kolana musza byc zakryte w aktywnych swiatyniach dlugie spodnie lub sarong na szorty. Ramiona tez; szal lub lekka koszula rozwiazuje oba.',
      },
      {
        q: 'Jakie buty na Sigiriya?',
        a: 'Tenisowki z dobrym grippemetalowe stopnie i rozgrzana skala slizgaja sie w sandalach. Skarpetki przy czestych wizytach w swiatyniach.',
      },
      {
        q: 'Czy zabrac kurtke przeciwdeszczowa?',
        a: 'Skladana kurtka lub kompaktowy parasol przydaja sie przez caly rok, zwlaszcza na popoludnia w gorach i sezon przejsciowy z krotkimi, ulewnymi opadami.',
      },
      {
        q: 'Jaki adapter elektryczny?',
        a: 'Type D i Type G sa standardem; uniwersalny adapter w wiekszosci hoteli. 230 Vprawdz dual voltage suszarki i prostownicy.',
      },
    ],
    ctaTitle: 'Podrozuj lekko na w pelni zaplanowanej prywatnej wycieczce',
    ctaBody: 'Nasze trasy z kierowca ogarniaja logistyke dniaaj miesiac podrozy, a zaproponujemy liste bagazu dopasowana do trasy, od safari w Yali po przejazdy pociagiem w kraju herbaty.',
    ctaLabel: 'Zaplanuj podroz na Sri Lanke',
    relatedTours: [
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
      { pageId: 'tour8', label: '8 dniowa wycieczka po Sri Lance' },
      { pageId: 'tour5', label: '5 dniowa wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Najlepszy czas na wizyte na Sri Lance' },
      { pageId: 'guideSafety', label: 'Przewodnik bezpieczenstwa na Sri Lance' },
      { pageId: 'guideWildlife', label: 'Przewodnik po dzikiej przyrodzie Sri Lanki' },
    ],
  },

  ru: {
    h1: 'Гид по упаковке вещей для Шри Ланки: что взять на пляж, в храмы и в горы',
    lead: 'Шри Ланка сочетает тропические побережья, туманные чайные холмы и древние храмы на маленьком островеодану нужны слои одежды, скромные наряды и разумная обувь, а не один «пляжный» гардероб. Умная упаковка позволяет комфортно пройти от ступеней Сигирии до прохладных вечеров в Элле без перегруженного багажа.',
    heroAlt: 'Дорожная сумка, собранная для тура по Шри Ланке через несколько климатических зон',
    sections: [
      {
        title: 'Климатические зоны: жаркое побережье и прохладные горы',
        body: 'Южное и западное побережья, Коломбо и низины Культурного треугольника жаркие и влажные круглый годй хлопок и лён, свободные брюки и дышащие рубашки работают лучше всего. Nuwara Eliya, Элла и Horton Plains вечером могут быть по настоящему прохладными, особенно с июня по сентябрь, когда стоит взять лёгкую флиску или свитер и длинные брюки на ночь.\n\nБольшинство маршрутов за неделю пересекают несколько зонями, а не одним типом одежды. Тонкая дождевик или складной poncho справляется с внезапными ливнями в горах без лишнего веса.',
      },
      {
        title: 'Дресс код в храмах и скромная одежда',
        body: 'Буддийские и индуистские храмы требуют закрытых плеч и колен мужчин и женщин в Канди, Дамбулле и деревенских святынях. Держите sarong или лёгкий шарф в дневной сумке; он закрывает плечи проще, чем полная переодевание на каждой остановке.\n\nСнимайте шляпы и обувь перед залами святыни (носки обычно допустимы). Светлая уважительная одежда приветствуется; пляжная остаётся на пляже, не на религиозных объектах.',
      },
      {
        title: 'Дождевик, защита от солнца и два муссона',
        body: 'Дождь приходит по разному в зависимости от побережья и сезона западный муссон (примерно май–сентябрь) мочит запад и горы, северо восточный (примерно октябрь–январь)осток. Компактный зонт или складная куртка лучше справляются с короткими тропическими ливнями, чем предположение «сухой сезон» без дождя.\n\nСолнце интенсивно в Сигирии, на сафari-джипе и на открытых пляжах возьмите крем с высоким SPF, широкополую шляпу и UV-очки. Reef safe крем уместен при снорклинге.',
      },
      {
        title: 'Обувь для Сигирии, походов и ежедневных поездок',
        body: 'Каменная лестница Сигирии крутая, неровная и раскалённая к полудню закрытые кроссовки с хорошим сцеплением лучше шлёпанцев. Те же подойдут для Полonnaruwa, Adam’s Peak при восхождении и Little Adam’s Peak в Элле.\n\nСlip on сандалии удобны для храмов с частым снятием обуви и для пляжных вечеров. Тяжёлые трекинговые ботинки не нужны без многодневного похода; кроссовок хватит для большинства туристических троп.',
      },
      {
        title: 'Защита от комаров и базовое здоровье',
        body: 'Дengue встречается на Шри Ланке; используйте репеллент с DEET или picaridin вечером, особенно после дождя в городах и на побережье. Длинные рукава на закате помогают. Риск малярии на типичных туристических маршрутах низок, но укусы без защиты неприятны.\n\nВозьмите рецептурные лекарства в оригинальной упаковке с копией рецепта, базовые средства от желудка, пластыри от мозолей и sanitizer перед едой. Документы страховки в ручную кладь, не в багаж.',
      },
      {
        title: 'Адаптеры, документы и что не стоит брать лишнего',
        body: 'На Шри Ланке розетки Type D (три круглых штыря) и Type G (британский тип)ниверсальный адаптер с защитой от скачков покрывает большинство отелей. Напряжение 230 V; проверьте dual voltage для фена и выпрямителя.\n\nОставьте дома тяжёлые вечерние наряды, несколько бумажных путеводителей и полную аптекуеки и книжные есть в Коломбо и туристических городах. Средний чемодан плюс дневной рюкзак хватит на недельный частный тур при стирке в отелях mid range.',
      },
    ],
    faq: [
      {
        q: 'Нужна ли тёплая одежда на Шри Ланку?',
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
    ctaLabel: 'Спланировать поездку на Шри Ланку',
    relatedTours: [
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
      { pageId: 'tour8', label: '8 дневный тур по Шри Ланке' },
      { pageId: 'tour5', label: '5 дневный тур по Шри Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Сигирия' },
      { pageId: 'destElla', label: 'Элла' },
      { pageId: 'destKandy', label: 'Канди' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Лучшее время для поездки в Шри Ланку' },
      { pageId: 'guideSafety', label: 'Гид по безопасности на Шри Ланке' },
      { pageId: 'guideWildlife', label: 'Гид по дикой природе Шри Ланки' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Packliste: Was Sie fur Strande, Tempel und Bergland mitnehmen',
    lead: 'Sri Lanka vereint tropische Kusten, nebliges Tee Hochland und antike Tempel auf einer kleinen Inselhr Gepack braucht daher Schichten, dezentere Kleidung und vernunftiges Schuhwerk statt einer reinen Strandurlaubs Garderobe. Clever packen heisst: bequem von Sigiriyas Felsstufen bis zu Ellas kuhlen Abenden, ohne den Koffer zu uberladen.',
    heroAlt: 'Reisetasche gepackt fur eine Sri Lanka Rundreise durch mehrere Klimazonen',
    sections: [
      {
        title: 'Klimazonen: heisse Kusten versus kuhles Bergland',
        body: 'Sud und Westkuste, Colombo und das Tiefland des Kulturdreiecks sind ganzjahrig heiss und feuchteichte Baumwolle und Leinen, lockere Hosen und atmungsaktive Hemden funktionieren am besten. Nuwara Eliya, Ella und Horton Plains konnen abends spurbar kuhl wirken, besonders Juni bis September, wenn eine leichte Fleecejacke oder Strickjacke und lange Hosen nachts sinnvoll sind.\n\nDie meisten Rundreisen durchqueren in einer Woche mehrere Zonenenken Sie in Schichten statt in einem Outfit Typ. Eine dunne Regenjacke oder packbare Poncho Variante fangt plotzliche Schauer in den Bergen ab, ohne viel Gewicht zu kosten.',
      },
      {
        title: 'Tempel Kleiderordnung und dezente Kleidung',
        body: 'Buddhistische und hinduistische Tempel verlangen bedeckte Schultern und Knieur Manner und Frauen an Orten wie dem Zahntempel in Kandy, der Hohlentempel von Dambulla und kleineren Dorfschreinen. Tragen Sie ein Sarong oder leichtes Tuch in der Tages Tasche; es deckt Schultern und ist einfacher als bei jedem Stopp das ganze Outfit zu wechseln.\n\nHute und Schuhe vor dem Betreten der Schreinraume ablegen (Socken sind meist in Ordnung). Helle, respektvolle Kleidung ist willkommen; Strandmode gehort an den Strand, nicht in religiose Statten.',
      },
      {
        title: 'Regenausrustung, Sonnenschutz und die zwei Monsune',
        body: 'Regen kommt je nach Kuste und Saison unterschiedlich der Sudwestmonsun (etwa Mai to September) benetzt Westkuste und Bergland, der Nordostmonsun (etwa Oktober to Januar) die Ostkuste. Ein kompakter Schirm oder faltbare Regenjacke bewaltigt kurze tropische Schauer besser, als anzunehmen, „Trockenzeit“ bedeute keinen Regen.\n\nDie Sonne ist an Sigiriya, auf Safari Jeeps und offenen Stranden intensiv packen Sie hohen LSF, breitkrempigen Hut und UV Sonnenbrille. Riff freundlicher Sonnenschutz ist sinnvoll beim Schnorcheln.',
      },
      {
        title: 'Schuhe fur Sigiriya, Wanderungen und tagliche Touren',
        body: 'Sigiriyas Fels Treppe ist steil, uneben und mittags heiss geschlossene Turnschuhe mit gutem Grip schlagen Flip Flops. Dieselben Schuhe eignen sich fur Polonnaruwa, Adams Peak bei einem Aufstieg und Little Adams Peak in Ella.\n\nSlip on Sandalen sind praktisch fur Tempel, wo man Schuhe oft auszieht, und fur Strandabende. Schwere Wanderschuhe nur mit geplantem Mehrtagestrek mitnehmen; Turnschuhe reichen fur die meisten Besucherpfade.',
      },
      {
        title: 'Muckenschutz und Gesundheits Basics',
        body: 'Dengue kommt auf Sri Lanka vor; nutzen Sie DEET- oder Picaridin Spray abends, besonders nach Regen in urbanen und Kustengebieten. Lange Armel in der Dammerung helfen zusatzlich. Malaria Risiko ist auf typischen Touristenrouten gering, aber Muckenstiche ohne Schutz sind lastig.\n\nPacken Sie verschreibungspflichtige Medikamente in Originalverpackung mit Rezeptkopie, Basismittel gegen Magenbeschwerden, Pflaster gegen Blasen und Handedesinfektionsmittel vor Mahlzeiten. Reiseversicherungsunterlagen gehoren ins Handgepack, nicht in den Koffer.',
      },
      {
        title: 'Adapter, Dokumente und was Sie nicht mitnehmen sollten',
        body: 'Sri Lanka nutzt Typ D (drei runde Stifte) und Typ G (UK Stecker)in Universaladapter mit Uberspannungsschutz deckt die meisten Hotels ab. Spannung 230 V; prufen Sie Haartools auf Dual Voltage.\n\nLassen Sie schwere Abendgarderobe, mehrere Reisefuhrer und die komplette Hausapotheke zu Hause Apotheken und Buchhandlungen gibt es in Colombo und Touristenorten. Ein mittelgrosser Koffer plus Tagesrucksack reicht fur eine Woche private Tour, wenn Wasche in Mittelklasse Hotels moglich ist.',
      },
    ],
    faq: [
      {
        q: 'Brauche ich warme Kleidung fur Sri Lanka?',
        a: 'Ja, furs Bergland Ella, Nuwara Eliya und fruhe Safari Fahrten konnen kuhl sein. Eine leichte Fleecejacke und eine lange Hose reichen den meisten Reisenden.',
      },
      {
        q: 'Darf ich Shorts in Tempeln tragen?',
        a: 'Knie mussen in aktiven Tempeln bedeckt sein lange Hosen oder Sarong uber Shorts. Schultern ebenfalls bedecken; Schal oder leichtes Hemd lost beides.',
      },
      {
        q: 'Welche Schuhe fur Sigiriya?',
        a: 'Stutzende Turnschuhe mit gutem Gripetalltreppen und erhitzter Fels rutschen in Sandalen. Socken fur haufiges Schuhe Ausziehen in Tempeln mitnehmen.',
      },
      {
        q: 'Soll ich eine Regenjacke mitnehmen?',
        a: 'Eine packbare Regenjacke oder kompakter Schirm ist ganzjahrig nutzlich, besonders fur Bergland Nachmittage und Zwischensaison mit kurzen, kraftigen Schauern.',
      },
      {
        q: 'Welchen Stecker brauche ich?',
        a: 'Typ D und Typ G sind Standard; Universaladapter funktionieren in den meisten Hotels. 230 Vual Voltage bei Haartrockner und Glatteisen prufen.',
      },
    ],
    ctaTitle: 'Leicht reisen auf einer voll geplanten Privatreise',
    ctaBody: 'Unsere Rundreisen mit Fahrer ubernehmen die Tageslogistikennen Sie uns Ihren Reisemonat, und wir schlagen eine Packliste passend zu Ihrer Route vor, von Yala Safaris bis Tee Zugfahrten.',
    ctaLabel: 'Sri Lanka Reise planen',
    relatedTours: [
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
      { pageId: 'tour8', label: '8 tagige Sri Lanka Rundreise' },
      { pageId: 'tour5', label: '5 tagige Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Beste Reisezeit fur Sri Lanka' },
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits Ratgeber' },
      { pageId: 'guideWildlife', label: 'Sri Lanka Tierwelt Ratgeber' },
    ],
  }
};
