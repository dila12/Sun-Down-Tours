import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka visa guide (pageId: guideVisa).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const VISA_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Entry Requirements: ETA, Visa and How to Apply',
    lead: 'Almost every visitor to Sri Lanka still needs an Electronic Travel Authorisation (ETA) before boardingincluding UK nationals and the 40 countries that receive a free 30 day tourist ETA from 25 May 2026. The process is straightforward on the official site, but validity, double entry rules and unofficial lookalike websites still catch first time travellers out.',
    heroImage: 'assets/img/mainpage/2.webp',
    heroAlt: 'Passport and travel documents prepared for a Sri Lanka trip',
    sections: [
      {
        id: 'etaBasics',
        title: 'What the ETA is and who needs one',
        body: 'The Electronic Travel Authorisation (ETA) is Sri Lanka’s online pre arrival permission for tourism, business or transit. All foreign nationals must obtain an ETA before arrival, including countries that now receive it free of charge. Apply only at the official portal eta.gov.lk (or eta.gov.lk/slvisa). Third party sites that charge inflated “service fees” for the same form are a common trap.\n\nFrom 25 May 2026, nationals of 40 countriesincluding the United Kingdom, Germany, France, Italy, Spain, Poland, the Netherlands, Russia, the United States, Canada, India, Australia and Chinacan obtain a tourist ETA free of charge for 30 days with double entry. Maldives, Seychelles and Singapore continue to receive free processing (Maldivian nationals: 90 days). Fees paid before 25 May 2026 are not refunded. Other passports follow the standard paid ETA rules. Always re check the official list for your passport before you fly.',
      },
      {
        id: 'howToApply',
        title: 'How and when to apply',
        body: 'Apply online at least a few days before departure, though approval is often issued within 24 hours for straightforward tourist applications. You will need your passport details and a return or onward flight itinerary. If a fee applies, have a valid credit or debit card ready; under the free tourist scheme the same form is still required, just without payment.\n\nPrint or save a digital copy of your approval to show at check in and immigration; airlines have been known to deny boarding to passengers who cannot produce evidence of ETA approval, even though immigration itself can verify it electronically.',
      },
      {
        id: 'validityStay',
        title: 'Validity and length of stay',
        body: 'The standard tourist ETAincluding the free scheme for the 40 listed countriespermits an initial stay of up to 30 days from first arrival, with double entry allowed inside that window (useful for a short Maldives or India side trip). Avoid applying many months ahead of a flexible trip; use the approval window stated on the official site.\n\nCheck the exact current validity period and permitted stay on eta.gov.lk before booking flights. Rules are updated by gazette and the portal text is the source of truth, not blog posts or airline rumours.',
      },
      {
        id: 'extensions',
        title: 'Extending your stay',
        body: 'Tourist stays can generally be extended beyond the initial 30 days by applying through the Department of Immigration and Emigration in Colombo, or online where available, typically allowing a total stay of up to 90 days for tourism with the correct extensions and fees paid in advance.\n\nOverstaying without an approved extension can result in fines and complications on departure, so apply for an extension before your current authorisation expires rather than after.',
      },
      {
        id: 'passportRequirements',
        title: 'Passport and other entry requirements',
        body: 'Your passport should generally be valid for at least six months beyond your arrival date, and you should carry proof of onward or return travel and sufficient funds for your stay, as immigration officers can request these at their discretion. A printed or digital copy of your accommodation booking is a sensible addition, even if rarely checked.\n\nDouble check any currently required health documentation before travel, since requirements have changed over time and can vary by country of departure.',
      },
      {
        id: 'commonMistakes',
        title: 'Common mistakes to avoid',
        body: 'Applying through unofficial third party websites at inflated prices is the most common and avoidable mistake the official government ETA fee is fixed and the process takes only a few minutes on the correct site. Entering passport details incorrectly, particularly names that don’t exactly match your passport, is the next most common cause of delayed or rejected applications.\n\nLeaving the application until the airport, or assuming a valid ETA from a previous trip still applies, are both avoidable problems: always apply fresh, ahead of time, for each visit.',
      },
    ],
    faq: [
      {
        q: 'Do I need a visa to visit Sri Lanka?',
        a: 'Yes. Almost all visitors must get an ETA online before travel at eta.gov.lkeven if your nationality qualifies for the free 30 day tourist ETA from 25 May 2026. Free does not mean walk in on arrival.',
      },
      {
        q: 'How long does ETA approval take?',
        a: 'Straightforward tourist applications are often approved within 24 hours, though it is sensible to apply at least a few days before departure rather than at the last minute.',
      },
      {
        q: 'How long can I stay in Sri Lanka on a tourist ETA?',
        a: 'The standard tourist ETA permits an initial stay of up to 30 days, with extensions generally available through the Department of Immigration and Emigration up to a total of around 90 days for tourism.',
      },
      {
        q: 'Can I extend my Sri Lanka visa after arrival?',
        a: 'Yes apply for an extension through the Department of Immigration and Emigration in Colombo, or online where available, before your current authorisation expires to avoid fines or complications.',
      },
      {
        q: 'Is the Sri Lanka ETA free in 2026?',
        a: 'For nationals of 40 listed countries (including the UK, much of the EU, Russia, the US, Canada, India and Australia) the tourist ETA is free from 25 May 2026 for 30 days with double entry. Everyone still applies in advance on eta.gov.lk. Other passports follow paid ETA rules.',
      },
      {
        q: 'What are Sri Lanka entry requirements for European travellers?',
        a: 'UK passport holders must obtain an ETA at eta.gov.lk before travel. From 25 May 2026 the tourist ETA is free for 30 days with double entry, but you still apply in advance. Keep roughly six months’ passport validity and proof of onward travel.',
      },
      {
        q: 'Where should I apply for my Sri Lanka ETA?',
        a: 'Only through the official government site eta.gov.lk. Third party sites often charge significantly inflated fees for the same form.',
      },
    ],
    ctaTitle: 'Let us help with the practical details',
    ctaBody: 'Once your ETA is approved, our team can help plan an itinerary around your exact travel dates, with airport pickup and a private driver guide from the moment you land.',
    ctaLabel: 'Plan your trip with us',
    relatedTours: [
      { pageId: 'tour7', label: '7 Day Sri Lanka Private Tour' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Sri Lanka Safety Guide' },
      { pageId: 'guideBudget', label: 'Sri Lanka Budget Travel Guide' },
      { pageId: 'guidePrivateDriver', label: 'Sri Lanka private driver guide' },
    ],
  },

  de: {
    h1: 'Einreise Sri Lanka: ETA, Visum und Antragstellung',
    lead: 'Fast jeder Besucher Sri Lankas benotigt vor dem Boarding eine elektronische Reisegenehmigung (ETA)  ein unkomplizierter Online Vorgang, allerdings mit genug Kleingedrucktem zu Gultigkeit, Verlangerungen und Passregeln, dass es sich lohnt, ihn rechtzeitig vor der Abreise korrekt zu erledigen.',
    heroAlt: 'Reisepass und Reisedokumente fur eine Sri Lanka Reise vorbereitet',
    sections: [
      {
        title: 'Was die ETA ist und wer eine braucht',
        body: 'Die Electronic Travel Authorisation (ETA) ist Sri Lankas Aquivalent zum Visum bei Einreise, online vor der Reise beantragt und genehmigt, fur Tourismus, Geschaft oder Transit. Burger der meisten Lander benotigen eine ETA; eine kurze Liste von Nationalitaten hat visumfreie Regelungen oder andere Anforderungen  prufen Sie das offizielle Regierungsportal fur Ihren spezifischen Pass, statt es anzunehmen.\n\nBeantragen Sie die ETA nur uber die offizielle Sri Lanka ETA Website  Drittanbieter Seiten, die uberhohte „Servicegebuhren“ fur denselben Antrag verlangen, sind eine haufige Falle fur Erstbesucher.',
      },
      {
        title: 'Wie und wann man den Antrag stellt',
        body: 'Beantragen Sie die ETA online mindestens einige Tage vor der Abreise, obwohl die Genehmigung fur unkomplizierte touristische Antrage oft innerhalb von 24 Stunden erfolgt. Sie benotigen Ihre Passdaten, ein Ruck- oder Weiterflugticket und eine gultige Kredit- oder Debitkarte fur die Gebuhr.\n\nDrucken Sie Ihre Genehmigung aus oder speichern Sie eine digitale Kopie, um sie beim check in und bei der Einreise vorzuzeigen; Fluggesellschaften haben Passagieren schon das Boarding verweigert, die keinen Nachweis der ETA Genehmigung vorlegen konnten, obwohl die Einreisebehorde selbst diese elektronisch prufen kann.',
      },
      {
        title: 'Gultigkeit und Aufenthaltsdauer',
        body: 'Die Standard Touristen ETA erlaubt einen ersten Aufenthalt von bis zu 30 Tagen ab Einreisedatum und ist im Allgemeinen innerhalb eines festgelegten Zeitfensters ab dem Genehmigungsdatum gultig  beantragen Sie sie daher nicht viele Monate vor einer flexiblen Reise. Fur Reisende, die wahrend ihrer Reise aus und wieder einreisen mochten, etwa fur einen Abstecher auf die Maldiven oder nach Indien, gibt es Mehrfacheinreise Optionen.\n\nPrufen Sie den genauen aktuellen Gultigkeitszeitraum und die zulassige Aufenthaltsdauer auf der offiziellen ETA Seite, bevor Sie Fluge buchen, da sich die Regeln regelmassig andern.',
      },
      {
        title: 'Aufenthalt verlangern',
        body: 'Touristische Aufenthalte lassen sich in der Regel uber die anfanglichen 30 Tage hinaus verlangern, indem man einen Antrag beim Department of Immigration and Emigration in Colombo oder, wo verfugbar, online stellt  ublicherweise bis zu insgesamt 90 Tagen fur touristische Zwecke, bei korrekt beantragter Verlangerung und im Voraus bezahlten Gebuhren.\n\nEin Uberschreiten der Aufenthaltsdauer ohne genehmigte Verlangerung kann bei der Ausreise zu Strafen und Komplikationen fuhren  beantragen Sie die Verlangerung daher vor Ablauf Ihrer aktuellen Genehmigung, nicht danach.',
      },
      {
        title: 'Pass und weitere Einreiseanforderungen',
        body: 'Ihr Reisepass sollte in der Regel noch mindestens sechs Monate uber das Einreisedatum hinaus gultig sein, und Sie sollten einen Nachweis fur Weiter- oder Ruckreise sowie ausreichende Mittel fur Ihren Aufenthalt mitfuhren, da Einreisebeamte diese nach eigenem Ermessen verlangen konnen. Eine ausgedruckte oder digitale Kopie Ihrer Unterkunftsbuchung ist eine sinnvolle Erganzung, auch wenn sie selten kontrolliert wird.\n\nPrufen Sie vor der Reise etwaige aktuell erforderliche Gesundheitsdokumente, da sich die Anforderungen im Laufe der Zeit andern konnen und je nach Abflugland variieren.',
      },
      {
        title: 'Haufige Fehler, die man vermeiden sollte',
        body: 'Der Antrag uber inoffizielle Drittanbieter Websites zu uberhohten Preisen ist der haufigste und vermeidbarste Fehler  die offizielle staatliche ETA Gebuhr ist festgelegt, und der Vorgang dauert auf der richtigen Seite nur wenige Minuten. Falsch eingegebene Passdaten, insbesondere Namen, die nicht exakt mit dem Pass ubereinstimmen, sind die zweithaufigste Ursache fur verzogerte oder abgelehnte Antrage.\n\nDen Antrag bis zum Flughafen aufzuschieben oder anzunehmen, eine gultige ETA aus einer fruheren Reise gelte weiterhin, sind beide vermeidbare Probleme: Beantragen Sie fur jede Reise stets neu und rechtzeitig im Voraus.',
      },
    ],
    faq: [
      {
        q: 'Brauche ich ein Visum fur Sri Lanka?',
        a: 'Fast alle Besucher benotigen eine online vor der Reise beantragte elektronische Reisegenehmigung (ETA); eine kleine Zahl von Nationalitaten hat andere Regelungen  prufen Sie das offizielle ETA Portal speziell fur Ihren Pass.',
      },
      {
        q: 'Wie lange dauert die ETA Genehmigung?',
        a: 'Unkomplizierte touristische Antrage werden oft innerhalb von 24 Stunden genehmigt, es ist jedoch sinnvoll, mindestens einige Tage vor der Abreise zu beantragen statt in letzter Minute.',
      },
      {
        q: 'Wie lange darf ich mit einer touristischen ETA in Sri Lanka bleiben?',
        a: 'Die Standard Touristen ETA erlaubt einen ersten Aufenthalt von bis zu 30 Tagen, mit Verlangerungen uber das Department of Immigration and Emigration in der Regel bis zu insgesamt rund 90 Tagen fur touristische Zwecke.',
      },
      {
        q: 'Kann ich mein Sri Lanka Visum nach der Einreise verlangern?',
        a: 'Ja  beantragen Sie eine Verlangerung beim Department of Immigration and Emigration in Colombo oder, wo verfugbar, online, bevor Ihre aktuelle Genehmigung ablauft, um Strafen oder Komplikationen zu vermeiden.',
      },
      {
        q: 'Was gilt bei der Einreise Sri Lanka mit deutschem Pass?',
        a: 'ETA vorab auf eta.gov.lk beantragen. Ab 25. Mai 2026 ist die Touristen ETA fur Deutschland 30 Tage mit Doppeleinreise kostenlos  die Genehmigung brauchen Sie trotzdem vor dem Flug.',
      },
      {
        q: 'Wo sollte ich meine Sri Lanka ETA beantragen?',
        a: 'Ausschliesslich uber die offizielle ETA Website der srilankischen Regierung. Drittanbieter Seiten verlangen fur denselben unkomplizierten Antrag oft deutlich uberhohte Gebuhren.',
      },
    ],
    ctaTitle: 'Lassen Sie uns bei den praktischen Details helfen',
    ctaBody: 'Sobald Ihre ETA genehmigt ist, kann unser Team eine Route rund um Ihre genauen Reisedaten planen  mit Flughafenabholung und einem privaten Fahrer Guide vom Moment der Landung an.',
    ctaLabel: 'Reise mit uns planen',
    relatedTours: [
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits Ratgeber' },
      { pageId: 'guideBudget', label: 'Sri Lanka Budgetreise Ratgeber' },
      { pageId: 'marketGermany', label: 'Rundreise aus Deutschland' },
    ],
  },

  fr: {
    h1: 'Visa Sri Lanka : ETA, arrival card et demarche officielle',
    lead: 'Presque tous les visiteurs du Sri Lanka doivent toujours obtenir une autorisation de voyage electronique (ETA) avant l’embarquementy compris les ressortissants des 40 pays qui beneficient d’une ETA touristique gratuite de 30 jours depuis le 25 mai 2026. La demarche est simple sur le site officiel, mais la validite, la double entree et les sites tiers restent des pieges frequents.',
    heroAlt: 'Passeport et documents de voyage prepares pour un sejour au Sri Lanka',
    sections: [
      {
        title: 'Ce qu’est l’ETA et qui en a besoin',
        body: 'L’Electronic Travel Authorisation (ETA) est l’autorisation en ligne a obtenir avant l’arrivee, pour le tourisme, les affaires ou le transit. Tous les ressortissants etrangers doivent en faire la demande avant d’arriver, y compris les pays desormais exoneres de frais. Demandez uniquement sur le portail officiel eta.gov.lk. Les sites tiers qui facturent des « frais de service » gonfles pour le meme formulaire restent un piege courant.\n\nLes recherches « arrival card Sri Lanka » designent ce processus officiel d’avant arriveepas un formulaire papier qui remplacerait l’ETA, ni un site clone. Depuis le 25 mai 2026, les ressortissants de 40 paysdont la France, l’Allemagne, l’Italie, l’Espagne, la Pologne, les Pays Bas, le Royaume Uni, la Russie, les Etats Unis, le Canada, l’Inde et l’Australiepeuvent obtenir une ETA touristique gratuite de 30 jours avec double entree. Maldives, Seychelles et Singapour restent en traitement gratuit (Maldives : 90 jours). Les frais payes avant le 25 mai 2026 ne sont pas rembourses. Verifiez toujours la liste officielle pour votre passeport.',
      },
      {
        title: 'Comment et quand faire sa demande',
        body: 'Faites votre demande en ligne au moins quelques jours avant le depart, bien que l’approbation soit souvent delivree sous 24 heures pour les demandes touristiques simples. Vous aurez besoin des informations de votre passeport, d’un itineraire de retour ou de vol de continuation, et d’une carte de credit ou de debit valide pour regler les frais.\n\nImprimez ou enregistrez une copie numerique de votre approbation a presenter a l’enregistrement et a l’immigration ; certaines compagnies aeriennes ont refuse l’embarquement a des passagers incapables de prouver leur approbation d’ETA, meme si l’immigration elle meme peut la verifier electroniquement.',
      },
      {
        title: 'Validite et duree du sejour',
        body: 'L’ETA touristique standardy compris le regime gratuit pour les 40 pays listesautorise un sejour initial de jusqu’a 30 jours a compter de la premiere arrivee, avec double entree dans cette fenetre (utile pour une courte escapade aux Maldives ou en Inde). Evitez de la demander de nombreux mois avant un voyage aux dates flexibles.\n\nVerifiez la validite exacte et la duree autorisee sur eta.gov.lk avant de reserver vos vols. Le texte du portail officiel prime sur les blogs et les rumeurs des compagnies aeriennes.',
      },
      {
        title: 'Prolonger votre sejour',
        body: 'Les sejours touristiques peuvent generalement etre prolonges au dela des 30 jours initiaux en deposant une demande aupres du Department of Immigration and Emigration a Colombo, ou en ligne le cas echeant, permettant en general un sejour total allant jusqu’a 90 jours pour le tourisme, avec les prolongations correctement demandees et les frais payes a l’avance.\n\nDepasser la duree autorisee sans prolongation approuvee peut entrainer des amendes et des complications au depart demandez donc une prolongation avant l’expiration de votre autorisation actuelle, pas apres.',
      },
      {
        title: 'Passeport et autres conditions d’entree',
        body: 'Votre passeport doit generalement etre valide au moins six mois apres votre date d’arrivee, et vous devez avoir une preuve de vol de continuation ou de retour ainsi que des fonds suffisants pour votre sejour, les agents d’immigration pouvant les demander a leur discretion. Une copie imprimee ou numerique de votre reservation d’hebergement est un ajout judicieux, meme si elle est rarement controlee.\n\nVerifiez au prealable tout document sanitaire actuellement requis, car les exigences ont change au fil du temps et peuvent varier selon le pays de depart.',
      },
      {
        title: 'Erreurs courantes a eviter',
        body: 'Faire sa demande via des sites tiers non officiels a prix gonfles est l’erreur la plus courante et la plus evitable les frais officiels de l’ETA gouvernementale sont fixes et la demarche ne prend que quelques minutes sur le bon site. Saisir incorrectement les informations du passeport, en particulier des noms qui ne correspondent pas exactement au passeport, est la deuxieme cause la plus frequente de retards ou de rejets.\n\nAttendre l’aeroport pour faire sa demande, ou supposer qu’une ETA valide d’un voyage precedent s’applique encore, sont deux problemes evitables : faites toujours une nouvelle demande, a l’avance, pour chaque visite.',
      },
    ],
    faq: [
      {
        q: 'Ai je besoin d’un visa pour visiter le Sri Lanka ?',
        a: 'Oui. Presque tous les visiteurs doivent obtenir une ETA en ligne avant le voyage sur eta.gov.lkmeme si votre nationalite entre dans le regime d’ETA touristique gratuite de 30 jours depuis le 25 mai 2026. Gratuit ne veut pas dire sans demande a l’arrivee.',
      },
      {
        q: 'Combien de temps prend l’approbation de l’ETA ?',
        a: 'Les demandes touristiques simples sont souvent approuvees sous 24 heures, mais il est sage de faire sa demande au moins quelques jours avant le depart plutot qu’a la derniere minute.',
      },
      {
        q: 'Combien de temps puis je rester au Sri Lanka avec une ETA touristique ?',
        a: 'L’ETA touristique standard autorise un sejour initial de jusqu’a 30 jours, avec des prolongations generalement disponibles via le Department of Immigration and Emigration jusqu’a un total d’environ 90 jours pour le tourisme.',
      },
      {
        q: 'Puis je prolonger mon visa sri lankais apres mon arrivee ?',
        a: 'Oui demandez une prolongation aupres du Department of Immigration and Emigration a Colombo, ou en ligne le cas echeant, avant l’expiration de votre autorisation actuelle pour eviter amendes ou complications.',
      },
      {
        q: 'L’ETA sri lankaise est elle gratuite en 2026 ?',
        a: 'Pour les ressortissants de 40 pays listes (dont la France, une grande partie de l’UE, la Russie, le Royaume Uni, les Etats Unis, le Canada, l’Inde et l’Australie), l’ETA touristique est gratuite depuis le 25 mai 2026 pour 30 jours avec double entree. Tout le monde doit quand meme faire la demande a l’avance sur eta.gov.lk.',
      },
      {
        q: 'Faut il une arrival card en plus de l’ETA ?',
        a: 'L’ETA sur eta.gov.lk est l’autorisation obligatoire avant le vol. « Arrival card » dans les recherches francaises designe en pratique cette demarche officielle, pas un formulaire alternatif payant. Ignorez les sites qui vendent le meme processus.',
      },
      {
        q: 'Ou dois je demander mon ETA pour le Sri Lanka ?',
        a: 'Uniquement sur le site officiel eta.gov.lk. Les sites tiers facturent souvent des frais nettement gonfles pour le meme formulaire.',
      },
    ],
    ctaTitle: 'Laissez nous vous aider pour les details pratiques',
    ctaBody: 'Une fois votre ETA approuvee, notre equipe peut planifier un itineraire autour de vos dates de voyage exactes, avec prise en charge a l’aeroport et un chauffeur guide prive des votre arrivee.',
    ctaLabel: 'Planifier votre voyage avec nous',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit prive de 7 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Guide de securite au Sri Lanka' },
      { pageId: 'guideBudget', label: 'Guide du voyage economique au Sri Lanka' },
      { pageId: 'marketFrance', label: 'Voyage Sri Lanka depuis la France' },
    ],
  },

  it: {
    h1: 'Visto Sri Lanka: ETA 2026, eta.gov.lk e passaporto italiano',
    lead: 'Quasi ogni visitatore dello Sri Lanka deve ancora ottenere un’autorizzazione di viaggio elettronica (ETA) prima di imbarcarsicompresi i cittadini dei 40 Paesi che dal 25 maggio 2026 ricevono un’ETA turistica gratuita di 30 giorni. La procedura e semplice sul sito ufficiale, ma validita, doppio ingresso e siti clone restano trappole frequenti.',
    heroAlt: 'Passaporto e documenti di viaggio pronti per un viaggio in Sri Lanka',
    sections: [
      {
        title: 'Cos’e l’ETA e chi ne ha bisogno',
        body: 'L’Electronic Travel Authorisation (ETA) e il permesso online da ottenere prima dell’arrivo, per turismo, affari o transito. Tutti i cittadini stranieri devono richiederla prima di arrivare, compresi i Paesi ora esenti da tassa. Domanda solo su eta.gov.lk. I siti terzi che applicano “commissioni di servizio” gonfiate per lo stesso modulo restano una trappola comune.\n\nDal 25 maggio 2026 i cittadini di 40 Paesitra cui Italia, Francia, Germania, Spagna, Polonia, Paesi Bassi, Regno Unito, Russia, Stati Uniti, Canada, India e Australiapossono ottenere un’ETA turistica gratuita di 30 giorni con doppio ingresso. Maldive, Seychelles e Singapore restano in elaborazione gratuita (Maldive: 90 giorni). Le tasse pagate prima del 25 maggio 2026 non sono rimborsate. Controllate sempre l’elenco ufficiale per il vostro passaporto.',
      },
      {
        title: 'Come e quando fare domanda',
        body: 'Fate domanda online almeno qualche giorno prima della partenza, sebbene l’approvazione venga spesso rilasciata entro 24 ore per le domande turistiche semplici. Vi serviranno i dati del passaporto, un itinerario di ritorno o di proseguimento del viaggio e una carta di credito o debito valida per la tassa.\n\nStampate o salvate una copia digitale della vostra approvazione da mostrare al check in e all’immigrazione; alcune compagnie aeree hanno negato l’imbarco a passeggeri che non potevano dimostrare l’approvazione dell’ETA, anche se l’immigrazione stessa puo verificarla elettronicamente.',
      },
      {
        title: 'Validita e durata del soggiorno',
        body: 'L’ETA turistica standardincluso il regime gratuito per i 40 Paesi elencaticonsente un soggiorno iniziale fino a 30 giorni dal primo arrivo, con doppio ingresso in quella finestra (utile per una breve deviazione alle Maldive o in India). Evitate di richiederla molti mesi prima di un viaggio con date flessibili.\n\nControllate validita e soggiorno consentito su eta.gov.lk prima di prenotare i voli. Il testo del portale ufficiale prevale su blog e voci delle compagnie aeree.',
      },
      {
        title: 'Prolungare il soggiorno',
        body: 'I soggiorni turistici possono generalmente essere prolungati oltre i 30 giorni iniziali facendo domanda tramite il Department of Immigration and Emigration a Colombo, o online dove disponibile, consentendo tipicamente un soggiorno totale fino a 90 giorni per turismo, con le proroghe corrette e le tasse pagate in anticipo.\n\nRimanere oltre il periodo consentito senza una proroga approvata puo comportare multe e complicazioni alla partenza, quindi richiedete la proroga prima della scadenza della vostra autorizzazione attuale, non dopo.',
      },
      {
        title: 'Passaporto e altri requisiti d’ingresso',
        body: 'Il vostro passaporto dovrebbe generalmente essere valido per almeno sei mesi oltre la data di arrivo, e dovreste portare con voi la prova del viaggio di proseguimento o ritorno e fondi sufficienti per il soggiorno, poiche i funzionari dell’immigrazione possono richiederli a loro discrezione. Una copia stampata o digitale della prenotazione dell’alloggio e un’aggiunta sensata, anche se raramente controllata.\n\nControllate in anticipo qualsiasi documentazione sanitaria attualmente richiesta, poiche i requisiti sono cambiati nel tempo e possono variare in base al paese di partenza.',
      },
      {
        title: 'Errori comuni da evitare',
        body: 'Fare domanda tramite siti di terze parti non ufficiali a prezzi gonfiati e l’errore piu comune ed evitabile la tassa ufficiale governativa per l’ETA e fissa e la procedura richiede solo pochi minuti sul sito corretto. Inserire in modo errato i dati del passaporto, in particolare nomi che non corrispondono esattamente al passaporto, e la seconda causa piu comune di domande ritardate o respinte.\n\nRimandare la domanda fino all’aeroporto, o supporre che un’ETA valida di un viaggio precedente sia ancora applicabile, sono entrambi problemi evitabili: fate sempre una nuova domanda, in anticipo, per ogni visita.',
      },
    ],
    faq: [
      {
        q: 'Ho bisogno di un visto per visitare lo Sri Lanka?',
        a: 'Si. Quasi tutti i visitatori devono ottenere un’ETA online prima del viaggio su eta.gov.lkanche se la vostra nazionalita rientra nell’ETA turistica gratuita di 30 giorni dal 25 maggio 2026. Gratuito non significa senza domanda all’arrivo.',
      },
      {
        q: 'Quanto tempo richiede l’approvazione dell’ETA?',
        a: 'Le domande turistiche semplici vengono spesso approvate entro 24 ore, ma e consigliabile fare domanda almeno qualche giorno prima della partenza piuttosto che all’ultimo minuto.',
      },
      {
        q: 'Quanto posso restare in Sri Lanka con un’ETA turistica?',
        a: 'L’ETA turistica standard consente un soggiorno iniziale fino a 30 giorni, con proroghe generalmente disponibili tramite il Department of Immigration and Emigration fino a un totale di circa 90 giorni per il turismo.',
      },
      {
        q: 'Posso prolungare il mio visto per lo Sri Lanka dopo l’arrivo?',
        a: 'Si richiedete una proroga tramite il Department of Immigration and Emigration a Colombo, o online dove disponibile, prima che scada la vostra autorizzazione attuale, per evitare multe o complicazioni.',
      },
      {
        q: 'L’ETA dello Sri Lanka e gratuita nel 2026?',
        a: 'Per i cittadini di 40 Paesi elencati (tra cui Italia, gran parte dell’UE, Russia, Regno Unito, USA, Canada, India e Australia) l’ETA turistica e gratuita dal 25 maggio 2026 per 30 giorni con doppio ingresso. Tutti devono comunque fare domanda in anticipo su eta.gov.lk.',
      },
      {
        q: 'Dove dovrei richiedere la mia ETA per lo Sri Lanka?',
        a: 'Solo sul sito ufficiale eta.gov.lk. I siti di terze parti spesso applicano tariffe gonfiate per lo stesso modulo.',
      },
    ],
    ctaTitle: 'Lasciateci aiutare con i dettagli pratici',
    ctaBody: 'Una volta approvata la vostra ETA, il nostro team puo pianificare un itinerario in base alle vostre date di viaggio esatte, con prelievo dall’aeroporto e un autista guida privato dal momento dell’atterraggio.',
    ctaLabel: 'Pianifica il tuo viaggio con noi',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privato di 7 giorni in Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Guida alla sicurezza in Sri Lanka' },
      { pageId: 'guideBudget', label: 'Guida al viaggio economico in Sri Lanka' },
      { pageId: 'marketItaly', label: 'Viaggio Sri Lanka dall’Italia' },
    ],
  },

  es: {
    h1: 'Visado Sri Lanka: ETA 2026, requisitos y eta.gov.lk',
    lead: 'Casi todos los visitantes de Sri Lanka necesitan una Autorizacion Electronica de Viaje antes de embarcar: un tramite en linea sencillo, pero con suficiente letra pequena sobre validez, prorrogas y normas de pasaporte como para merecer la pena hacerlo bien antes de salir.',
    heroAlt: 'Pasaporte y documentos de viaje preparados para un viaje a Sri Lanka',
    sections: [
      {
        title: 'Que es la ETA y quien la necesita',
        body: 'La Electronic Travel Authorisation (ETA) es el permiso en linea que hay que obtener antes de llegar, para turismo, negocios o transito. Pedidla solo en el portal oficial eta.gov.lk. Los sitios de terceros que cobran «tasas de servicio» infladas por el mismo formulario son una trampa habitual.\n\nDesde el 25 de mayo de 2026, los nacionales de 40 paisesincluida Espana, Francia, Alemania, Italia, Polonia, Paises Bajos, Reino Unido, Rusia, Estados Unidos, Canada, India y Australia— pueden obtener una ETA turistica gratuita de 30 dias con doble entrada. Maldivas, Seychelles y Singapur siguen en tramitacion gratuita (Maldivas: 90 dias). Las tasas pagadas antes del 25 de mayo de 2026 no se reembolsan. Comprobad siempre la lista oficial para vuestro pasaporte.',
      },
      {
        title: 'Como y cuando solicitarla',
        body: 'Solicitela en linea al menos unos dias antes de la salida, aunque la aprobacion suele emitirse en 24 horas para solicitudes turisticas sencillas. Necesitara los datos de su pasaporte, un itinerario de vuelo de regreso o continuacion, y una tarjeta de credito o debito valida para la tasa.\n\nImprima o guarde una copia digital de su aprobacion para mostrarla en el check in y en inmigracion; algunas aerolineas han denegado el embarque a pasajeros que no podian presentar prueba de la aprobacion de la ETA, aunque la propia inmigracion pueda verificarla electronicamente.',
      },
      {
        title: 'Validez y duracion de la estancia',
        body: 'La ETA turistica estandar permite una estancia inicial de hasta 30 dias desde la fecha de llegada, y generalmente es valida para su uso dentro de un plazo determinado desde la fecha de aprobacion, asi que evite solicitarla muchos meses antes de un viaje flexible. Existen opciones de entradas multiples para viajeros que planean salir y volver a entrar en Sri Lanka durante su viaje, por ejemplo para una escapada a Maldivas o India.\n\nCompruebe el periodo de validez actual exacto y la estancia permitida en el sitio oficial de la ETA antes de reservar vuelos, ya que las normas se actualizan periodicamente.',
      },
      {
        title: 'Ampliar su estancia',
        body: 'Las estancias turisticas generalmente pueden ampliarse mas alla de los 30 dias iniciales solicitandolo a traves del Department of Immigration and Emigration en Colombo, o en linea donde este disponible, permitiendo normalmente una estancia total de hasta 90 dias para turismo, con las prorrogas correctamente solicitadas y las tasas pagadas por adelantado.\n\nQuedarse mas tiempo del permitido sin una prorroga aprobada puede acarrear multas y complicaciones a la salida, asi que solicite la prorroga antes de que caduque su autorizacion actual, no despues.',
      },
      {
        title: 'Pasaporte y otros requisitos de entrada',
        body: 'Su pasaporte generalmente debe ser valido durante al menos seis meses mas alla de la fecha de llegada, y debe llevar prueba de viaje de continuacion o regreso y fondos suficientes para su estancia, ya que los agentes de inmigracion pueden solicitarlos a su discrecion. Una copia impresa o digital de la reserva de su alojamiento es una anadido sensato, aunque rara vez se comprueba.\n\nCompruebe con antelacion cualquier documentacion sanitaria actualmente requerida, ya que los requisitos han cambiado con el tiempo y pueden variar segun el pais de salida.',
      },
      {
        title: 'Errores comunes que evitar',
        body: 'Solicitarla a traves de sitios web de terceros no oficiales a precios inflados es el error mas comun y evitable: la tasa oficial del gobierno para la ETA es fija y el proceso solo lleva unos minutos en el sitio correcto. Introducir mal los datos del pasaporte, especialmente nombres que no coinciden exactamente con el pasaporte, es la segunda causa mas habitual de solicitudes retrasadas o rechazadas.\n\nDejar la solicitud para el aeropuerto, o suponer que una ETA valida de un viaje anterior sigue aplicandose, son ambos problemas evitables: solicite siempre una nueva, con antelacion, para cada visita.',
      },
    ],
    faq: [
      {
        q: 'Necesito visado para visitar Sri Lanka?',
        a: 'Si. Casi todos los visitantes deben obtener una ETA en linea antes del viaje en eta.gov.lk, tambien si vuestra nacionalidad entra en la ETA turistica gratuita de 30 dias desde el 25 de mayo de 2026. Gratis no significa sin solicitud a la llegada.',
      },
      {
        q: 'Cuanto tarda la aprobacion de la ETA?',
        a: 'Las solicitudes turisticas sencillas suelen aprobarse en 24 horas, aunque es sensato solicitarla al menos unos dias antes de la salida en lugar de a ultima hora.',
      },
      {
        q: 'Cuanto tiempo puedo quedarme en Sri Lanka con una ETA turistica?',
        a: 'La ETA turistica estandar permite una estancia inicial de hasta 30 dias, con prorrogas generalmente disponibles a traves del Department of Immigration and Emigration hasta un total de unos 90 dias para turismo.',
      },
      {
        q: 'Puedo prolongar mi visado de Sri Lanka tras la llegada?',
        a: 'Si: solicite una prorroga a traves del Department of Immigration and Emigration en Colombo, o en linea donde este disponible, antes de que caduque su autorizacion actual, para evitar multas o complicaciones.',
      },
      {
        q: 'Donde deberia solicitar mi ETA para Sri Lanka?',
        a: 'Unicamente a traves del sitio web oficial eta.gov.lk. Los sitios de terceros a menudo cobran tarifas infladas por la misma solicitud.',
      },
      {
        q: 'La ETA de Sri Lanka es gratuita en 2026 para pasaporte espanol?',
        a: 'Para nacionales de 40 paises listados (incluida Espana) la ETA turistica es gratuita desde el 25 de mayo de 2026, 30 dias con doble entrada. Hay que pedirla igual por adelantado en eta.gov.lk.',
      },
    ],
    ctaTitle: 'Dejenos ayudarle con los detalles practicos',
    ctaBody: 'Una vez aprobada su ETA, nuestro equipo puede planificar un itinerario segun sus fechas exactas de viaje, con recogida en el aeropuerto y un chofer guia privado desde el momento en que aterrice.',
    ctaLabel: 'Planifique su viaje con nosotros',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privado de 7 dias por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Guia de seguridad de Sri Lanka' },
      { pageId: 'guideBudget', label: 'Guia de viaje economico por Sri Lanka' },
      { pageId: 'marketSpain', label: 'Viajar a Sri Lanka desde Espana' },
    ],
  },

  pl: {
    h1: 'Wiza Sri Lanka: ETA 2026, eta.gov.lk i wymagania',
    lead: 'Prawie kazdy odwiedzajacy Sri Lanke potrzebuje elektronicznej autoryzacji podrozy przed wejsciem na poklad  prosty proces online, ale z wystarczajaco duza liczba szczegolow dotyczacych waznosci, przedluzen i zasad paszportowych, by warto bylo zrobic to dobrze na czas przed wyjazdem.',
    heroAlt: 'Paszport i dokumenty podrozne przygotowane na wyjazd na Sri Lanke',
    sections: [
      {
        title: 'Czym jest ETA i kto jej potrzebuje',
        body: 'Electronic Travel Authorisation (ETA) to pozwolenie online przed przylotem, na turystyke, biznes lub tranzyt. Skladaj wniosek tylko na oficjalnym portalu eta.gov.lk (sri lanka gov od wjazdu). Strony trzecie z zawyzonymi „oplatami za usluge” za ten sam formularz to czesta pulapka.\n\nOd 25 maja 2026 obywatele 40 krajoww tym Polski, Niemiec, Francji, Wloch, Hiszpanii, Holandii, Wielkiej Brytanii, Rosji, USA, Kanady, Indii i Australiimoga uzyskac bezplatna turystyczna ETA na 30 dni z podwojnym wjazdem. Malediwy, Seszele i Singapur nadal bez oplaty (Malediwy: 90 dni). Oplaty uiszczone przed 25 maja 2026 nie sa zwracane. Zawsze sprawdzaj oficjalna liste dla swojego paszportu.',
      },
      {
        title: 'Jak i kiedy zlozyc wniosek',
        body: 'Zloz wniosek online co najmniej kilka dni przed wyjazdem, choc zatwierdzenie prostych wnioskow turystycznych nastepuje czesto w ciagu 24 godzin. Bedziesz potrzebowac danych paszportowych, planu podrozy powrotnej lub dalszej oraz waznej karty kredytowej lub debetowej do zaplaty oplaty.\n\nWydrukuj lub zapisz cyfrowa kopie swojej zgody, by pokazac ja przy odprawie i na kontroli granicznej; linie lotnicze odmawialy wejscia na poklad pasazerom, ktorzy nie mogli przedstawic dowodu zatwierdzenia ETA, mimo ze sama kontrola graniczna moze zweryfikowac to elektronicznie.',
      },
      {
        title: 'Waznosc i dlugosc pobytu',
        body: 'Standardowa turystyczna ETA umozliwia poczatkowy pobyt do 30 dni od daty przyjazdu i jest zwykle wazna w okreslonym oknie czasowym od daty zatwierdzenia, wiec nie skladaj wniosku wiele miesiecy przed elastyczna podroza. Dla podroznych planujacych wyjazd i powrot na Sri Lanke w trakcie podrozy, na przyklad na wypad na Malediwy lub do Indii, istnieja opcje wielokrotnego wjazdu.\n\nSprawdz dokladny aktualny okres waznosci i dozwolony pobyt na oficjalnej stronie ETA przed rezerwacja lotow, poniewaz przepisy sa okresowo aktualizowane.',
      },
      {
        title: 'Przedluzanie pobytu',
        body: 'Pobyty turystyczne mozna zwykle przedluzyc poza poczatkowe 30 dni, skladajac wniosek w Departamencie Imigracji i Emigracji w Kolombo lub online, gdzie to mozliwe, umozliwiajac zazwyczaj laczny pobyt do 90 dni w celach turystycznych, po prawidlowym zlozeniu wniosku o przedluzenie i wczesniejszej oplacie.\n\nPrzekroczenie dozwolonego pobytu bez zatwierdzonego przedluzenia moze skutkowac karami i komplikacjami przy wyjezdzie, wiec zloz wniosek o przedluzenie przed wygasnieciem obecnej autoryzacji, a nie po.',
      },
      {
        title: 'Paszport i inne wymagania wjazdowe',
        body: 'Twoj paszport powinien byc zwykle wazny co najmniej szesc miesiecy po dacie przyjazdu, i powinienes miec przy sobie dowod dalszej podrozy lub powrotu oraz wystarczajace srodki na pobyt, poniewaz funkcjonariusze imigracyjni moga je zazadac wedlug wlasnego uznania. Wydrukowana lub cyfrowa kopia rezerwacji noclegu to rozsadny dodatek, choc rzadko jest sprawdzana.\n\nSprawdz z wyprzedzeniem wszelka aktualnie wymagana dokumentacje zdrowotna, poniewaz wymagania zmienialy sie w czasie i moga roznic sie w zaleznosci od kraju wylotu.',
      },
      {
        title: 'Czeste bledy, ktorych warto unikac',
        body: 'Skladanie wniosku przez nieoficjalne strony trzecie po zawyzonych cenach to najczestszy i najlatwiejszy do unikniecia blad  oficjalna rzadowa oplata za ETA jest stala, a proces na wlasciwej stronie zajmuje tylko kilka minut. Nieprawidlowe wprowadzenie danych paszportowych, szczegolnie imion i nazwisk, ktore nie zgadzaja sie dokladnie z paszportem, to druga najczestsza przyczyna opoznionych lub odrzuconych wnioskow.\n\nOdkladanie wniosku do momentu bycia na lotnisku lub zakladanie, ze wazna ETA z poprzedniej podrozy wciaz obowiazuje, to dwa problemy, ktorych mozna uniknac: zawsze skladaj nowy wniosek, z wyprzedzeniem, na kazda wizyte.',
      },
    ],
    faq: [
      {
        q: 'Czy potrzebuje wizy, aby odwiedzic Sri Lanke?',
        a: 'Tak. Prawie wszyscy odwiedzajacy musza uzyskac ETA online przed lotem na eta.gov.lktakze jesli narodowosc wchodzi w bezplatna 30 dniowa ETA turystyczna od 25 maja 2026. Bezplatnie nie znaczy bez wniosku na lotnisku.',
      },
      {
        q: 'Jak dlugo trwa zatwierdzenie ETA?',
        a: 'Proste wnioski turystyczne sa czesto zatwierdzane w ciagu 24 godzin, ale rozsadnie jest zlozyc wniosek co najmniej kilka dni przed wyjazdem, a nie w ostatniej chwili.',
      },
      {
        q: 'Jak dlugo moge zostac na Sri Lance z turystyczna ETA?',
        a: 'Standardowa turystyczna ETA umozliwia poczatkowy pobyt do 30 dni, z przedluzeniami zwykle dostepnymi przez Departament Imigracji i Emigracji do lacznie okolo 90 dni w celach turystycznych.',
      },
      {
        q: 'Czy moge przedluzyc wize na Sri Lanke po przyjezdzie?',
        a: 'Tak  zloz wniosek o przedluzenie w Departamencie Imigracji i Emigracji w Kolombo lub online, gdzie to mozliwe, przed wygasnieciem obecnej autoryzacji, aby uniknac kar lub komplikacji.',
      },
      {
        q: 'Gdzie powinienem zlozyc wniosek o ETA na Sri Lanke?',
        a: 'Tylko przez oficjalna strone eta.gov.lk. Strony trzecie czesto naliczaja zawyzone oplaty za ten sam wniosek.',
      },
      {
        q: 'Czy ETA Sri Lanki jest bezplatna w 2026 dla paszportu polskiego?',
        a: 'Dla obywateli 40 wymienionych krajow (w tym Polski) turystyczna ETA jest bezplatna od 25 maja 2026, 30 dni z podwojnym wjazdem. Wniosek i tak skladasz z wyprzedzeniem na eta.gov.lk.',
      },
    ],
    ctaTitle: 'Pomozemy Ci w praktycznych szczegolach',
    ctaBody: 'Po zatwierdzeniu ETA nasz zespol moze zaplanowac trase wokol Twoich konkretnych dat podrozy, z odbiorem z lotniska i prywatnym kierowca przewodnikiem od momentu ladowania.',
    ctaLabel: 'Zaplanuj podroz z nami',
    relatedTours: [
      { pageId: 'tour7', label: '7 dniowa prywatna wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Przewodnik bezpieczenstwa na Sri Lance' },
      { pageId: 'guideBudget', label: 'Przewodnik budzetowej podrozy po Sri Lance' },
      { pageId: 'marketPoland', label: 'Wakacje Sri Lanka z Polski' },
    ],
  },

  ru: {
    h1: 'ETA Шри Ланка 2026: виза, arrival card и российский паспорт',
    lead: 'Почти каждому посетителю Шри Ланки по прежнему нужно электронное разрешение на поездку (ETA) до посадкивключая граждан 40 стран, которые с 25 мая 2026 года получают бесплатную туристическую ETA на 30 дней. На официальном сайте процесс простой, но срок действия, двойной въезд и сторонние сайты двойники всё ещё подводят тех, кто едет впервые.',
    heroAlt: 'Паспорт и документы, подготовленные для поездки в Шри Ланку',
    sections: [
      {
        title: 'Что такое ETA и кому она нужна',
        body: 'Electronic Travel Authorisation (ETA)онлайн разрешение, которое нужно получить до прибытия, для туризма, бизнеса или транзита. Все иностранные граждане должны оформить ETA заранее, включая страны, для которых сбор теперь не взимается. Подавайте заявку только на официальном портале eta.gov.lk. Сторонние сайты с завышенными «сервисными сборами» за ту же формучастая ловушка.\n\nС 25 мая 2026 года граждане 40 странвключая Россию, Великобританию, Германию, Францию, Италию, Испанию, Польшу, Нидерланды, США, Канаду, Индию и Австралиюмогут получить бесплатную туристическую ETA на 30 дней с правом двойного въезда. Мальдивы, Сейшелы и Сингапур по прежнему без сбора (Мальдивы: 90 дней). Сборы, уплаченные до 25 мая 2026, не возвращаются. Всегда сверяйтесь с официальным списком для вашего паспорта.',
      },
      {
        title: 'Как и когда подавать заявку',
        body: 'Подавайте заявку онлайн как минимум за несколько дней до отъезда, хотя одобрение простых туристических заявок часто приходит в течение 24 часов. Вам понадобятся данные паспорта, маршрут обратного или дальнейшего рейса и действующая кредитная или дебетовая карта для оплаты сбора.\n\nРаспечатайте или сохраните цифровую копию своего одобрения, чтобы показать её при регистрации и на границе; авиакомпании отказывали в посадке пассажирам, не сумевшим предъявить доказательство одобрения ETA, хотя сама иммиграционная служба может проверить это электронно.',
      },
      {
        title: 'Срок действия и продолжительность пребывания',
        body: 'Стандартная туристическая ETAвключая бесплатную схему для 40 перечисленных странразрешает первоначальное пребывание до 30 дней с первого въезда, с двойным въездом в этом окне (удобно для короткой вылазки на Мальдивы или в Индию). Не подавайте заявку за много месяцев до поездки с гибкими датами.\n\nПроверьте точный срок действия и разрешённое пребывание на eta.gov.lk перед бронированием рейсов. Текст официального портала важнее блогов и слухов авиакомпаний.',
      },
      {
        title: 'Продление пребывания',
        body: 'Туристическое пребывание обычно можно продлить сверх первоначальных 30 дней, подав заявку в Департамент иммиграции и эмиграции в Коломбо или онлайн, где это доступно, что как правило позволяет общее пребывание до примерно 90 дней для туризма при правильно оформленном продлении и заранее оплаченных сборах.\n\nПревышение разрешённого срока без одобренного продления может привести к штрафам и осложнениям при выезде, поэтому подавайте заявку на продление до истечения текущего разрешения, а не после.',
      },
      {
        title: 'Паспорт и другие требования на въезд',
        body: 'Ваш паспорт обычно должен быть действителен не менее шести месяцев после даты прибытия, и у вас должно быть доказательство дальнейшего или обратного путешествия, а также достаточные средства на пребывание, поскольку сотрудники иммиграционной службы могут запросить это по своему усмотрению. Распечатанная или цифровая копия бронирования жильё разумное дополнение, хотя проверяется редко.\n\nЗаранее проверьте любые актуально требуемые медицинские документы, поскольку требования со временем менялись и могут различаться в зависимости от страны выезда.',
      },
      {
        title: 'Распространённые ошибки, которых стоит избегать',
        body: 'Подача заявки через неофициальные сторонние сайты по завышенным ценам самая распространённая и легко избегаемая ошибка: официальный государственный сбор за ETA фиксирован, а процесс на правильном сайте занимает всего несколько минут. Неправильный ввод паспортных данных, особенно имён, которые не точно совпадают с паспортом, вторая по распространённости причина задержанных или отклонённых заявок.\n\nОткладывание заявки до аэропорта или предположение, что действующая ETA с предыдущей поездки всё ещё применима, обе проблемы легко избежать: всегда подавайте новую заявку заранее для каждого визита.',
      },
    ],
    faq: [
      {
        q: 'Нужна ли мне виза для посещения Шри Ланки?',
        a: 'Да. Почти всем посетителям нужно оформить ETA онлайн до поездки на eta.gov.lkдаже если ваша страна входит в бесплатную 30 дневную туристическую ETA с 25 мая 2026 года. Бесплатно не значит без заявки по прилёту.',
      },
      {
        q: 'Сколько времени занимает одобрение ETA?',
        a: 'Простые туристические заявки часто одобряются в течение 24 часов, но разумно подавать заявку как минимум за несколько дней до отъезда, а не в последнюю минуту.',
      },
      {
        q: 'Сколько я могу оставаться в Шри Ланке по туристической ETA?',
        a: 'Стандартная туристическая ETA разрешает первоначальное пребывание до 30 дней, а продление обычно доступно через Департамент иммиграции и эмиграции до общего срока около 90 дней для туризма.',
      },
      {
        q: 'Могу ли я продлить визу в Шри Ланку после прибытия?',
        a: 'Да подайте заявку на продление в Департамент иммиграции и эмиграции в Коломбо или онлайн, где это доступно, до истечения текущего разрешения, чтобы избежать штрафов или осложнений.',
      },
      {
        q: 'Бесплатна ли ETA Шри Ланки в 2026 году?',
        a: 'Для граждан 40 перечисленных стран (включая Россию, большую часть ЕС, Великобританию, США, Канаду, Индию и Австралию) туристическая ETA бесплатна с 25 мая 2026 года на 30 дней с двойным въездом. Заявку всё равно нужно подать заранее на eta.gov.lk.',
      },
      {
        q: 'Где мне следует подавать заявку на ETA в Шри Ланку?',
        a: 'Только на официальном сайте eta.gov.lk. Сторонние сайты часто берут сильно завышенную плату за ту же форму.',
      },
      {
        q: 'Нужна ли ещё arrival card, если есть ETA?',
        a: 'ETA обязательна до посадки. Arrival card не заменяет её. Следуйте официальной иммиграционной процедуре по прилёте; не покупайте «карточки» на сторонних сайтах.',
      },
    ],
    ctaTitle: 'Позвольте нам помочь с практическими деталями',
    ctaBody: 'После одобрения вашей ETA наша команда может спланировать маршрут точно под ваши даты поездки, с встречей в аэропорту и частным водителем гидом с момента приземления.',
    ctaLabel: 'Спланировать поездку с нами',
    relatedTours: [
      { pageId: 'tour7', label: '7 дневный частный тур по Шри Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Сигирия' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Гид по безопасности в Шри Ланке' },
      { pageId: 'guideBudget', label: 'Гид по бюджетному путешествию в Шри Ланке' },
      { pageId: 'marketRussia', label: 'Туры Шри Ланка из России' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Visum Ratgeber: ETA, Anforderungen und Antragstellung',
    lead: 'Fast jeder Besucher Sri Lankas benotigt vor dem Boarding eine elektronische Reisegenehmigung (ETA)  ein unkomplizierter Online Vorgang, allerdings mit genug Kleingedrucktem zu Gultigkeit, Verlangerungen und Passregeln, dass es sich lohnt, ihn rechtzeitig vor der Abreise korrekt zu erledigen.',
    heroAlt: 'Reisepass und Reisedokumente fur eine Sri Lanka Reise vorbereitet',
    sections: [
      {
        title: 'Was die ETA ist und wer eine braucht',
        body: 'Die Electronic Travel Authorisation (ETA) ist Sri Lankas Aquivalent zum Visum bei Einreise, online vor der Reise beantragt und genehmigt, fur Tourismus, Geschaft oder Transit. Burger der meisten Lander benotigen eine ETA; eine kurze Liste von Nationalitaten hat visumfreie Regelungen oder andere Anforderungen  prufen Sie das offizielle Regierungsportal fur Ihren spezifischen Pass, statt es anzunehmen.\n\nBeantragen Sie die ETA nur uber die offizielle Sri Lanka ETA Website  Drittanbieter Seiten, die uberhohte „Servicegebuhren“ fur denselben Antrag verlangen, sind eine haufige Falle fur Erstbesucher.',
      },
      {
        title: 'Wie und wann man den Antrag stellt',
        body: 'Beantragen Sie die ETA online mindestens einige Tage vor der Abreise, obwohl die Genehmigung fur unkomplizierte touristische Antrage oft innerhalb von 24 Stunden erfolgt. Sie benotigen Ihre Passdaten, ein Ruck- oder Weiterflugticket und eine gultige Kredit- oder Debitkarte fur die Gebuhr.\n\nDrucken Sie Ihre Genehmigung aus oder speichern Sie eine digitale Kopie, um sie beim check in und bei der Einreise vorzuzeigen; Fluggesellschaften haben Passagieren schon das Boarding verweigert, die keinen Nachweis der ETA Genehmigung vorlegen konnten, obwohl die Einreisebehorde selbst diese elektronisch prufen kann.',
      },
      {
        title: 'Gultigkeit und Aufenthaltsdauer',
        body: 'Die Standard Touristen ETA erlaubt einen ersten Aufenthalt von bis zu 30 Tagen ab Einreisedatum und ist im Allgemeinen innerhalb eines festgelegten Zeitfensters ab dem Genehmigungsdatum gultig  beantragen Sie sie daher nicht viele Monate vor einer flexiblen Reise. Fur Reisende, die wahrend ihrer Reise aus und wieder einreisen mochten, etwa fur einen Abstecher auf die Maldiven oder nach Indien, gibt es Mehrfacheinreise Optionen.\n\nPrufen Sie den genauen aktuellen Gultigkeitszeitraum und die zulassige Aufenthaltsdauer auf der offiziellen ETA Seite, bevor Sie Fluge buchen, da sich die Regeln regelmassig andern.',
      },
      {
        title: 'Aufenthalt verlangern',
        body: 'Touristische Aufenthalte lassen sich in der Regel uber die anfanglichen 30 Tage hinaus verlangern, indem man einen Antrag beim Department of Immigration and Emigration in Colombo oder, wo verfugbar, online stellt  ublicherweise bis zu insgesamt 90 Tagen fur touristische Zwecke, bei korrekt beantragter Verlangerung und im Voraus bezahlten Gebuhren.\n\nEin Uberschreiten der Aufenthaltsdauer ohne genehmigte Verlangerung kann bei der Ausreise zu Strafen und Komplikationen fuhren  beantragen Sie die Verlangerung daher vor Ablauf Ihrer aktuellen Genehmigung, nicht danach.',
      },
      {
        title: 'Pass und weitere Einreiseanforderungen',
        body: 'Ihr Reisepass sollte in der Regel noch mindestens sechs Monate uber das Einreisedatum hinaus gultig sein, und Sie sollten einen Nachweis fur Weiter- oder Ruckreise sowie ausreichende Mittel fur Ihren Aufenthalt mitfuhren, da Einreisebeamte diese nach eigenem Ermessen verlangen konnen. Eine ausgedruckte oder digitale Kopie Ihrer Unterkunftsbuchung ist eine sinnvolle Erganzung, auch wenn sie selten kontrolliert wird.\n\nPrufen Sie vor der Reise etwaige aktuell erforderliche Gesundheitsdokumente, da sich die Anforderungen im Laufe der Zeit andern konnen und je nach Abflugland variieren.',
      },
      {
        title: 'Haufige Fehler, die man vermeiden sollte',
        body: 'Der Antrag uber inoffizielle Drittanbieter Websites zu uberhohten Preisen ist der haufigste und vermeidbarste Fehler  die offizielle staatliche ETA Gebuhr ist festgelegt, und der Vorgang dauert auf der richtigen Seite nur wenige Minuten. Falsch eingegebene Passdaten, insbesondere Namen, die nicht exakt mit dem Pass ubereinstimmen, sind die zweithaufigste Ursache fur verzogerte oder abgelehnte Antrage.\n\nDen Antrag bis zum Flughafen aufzuschieben oder anzunehmen, eine gultige ETA aus einer fruheren Reise gelte weiterhin, sind beide vermeidbare Probleme: Beantragen Sie fur jede Reise stets neu und rechtzeitig im Voraus.',
      },
    ],
    faq: [
      {
        q: 'Brauche ich ein Visum fur Sri Lanka?',
        a: 'Fast alle Besucher benotigen eine online vor der Reise beantragte elektronische Reisegenehmigung (ETA); eine kleine Zahl von Nationalitaten hat andere Regelungen  prufen Sie das offizielle ETA Portal speziell fur Ihren Pass.',
      },
      {
        q: 'Wie lange dauert die ETA Genehmigung?',
        a: 'Unkomplizierte touristische Antrage werden oft innerhalb von 24 Stunden genehmigt, es ist jedoch sinnvoll, mindestens einige Tage vor der Abreise zu beantragen statt in letzter Minute.',
      },
      {
        q: 'Wie lange darf ich mit einer touristischen ETA in Sri Lanka bleiben?',
        a: 'Die Standard Touristen ETA erlaubt einen ersten Aufenthalt von bis zu 30 Tagen, mit Verlangerungen uber das Department of Immigration and Emigration in der Regel bis zu insgesamt rund 90 Tagen fur touristische Zwecke.',
      },
      {
        q: 'Kann ich mein Sri Lanka Visum nach der Einreise verlangern?',
        a: 'Ja  beantragen Sie eine Verlangerung beim Department of Immigration and Emigration in Colombo oder, wo verfugbar, online, bevor Ihre aktuelle Genehmigung ablauft, um Strafen oder Komplikationen zu vermeiden.',
      },
      {
        q: 'Wo sollte ich meine Sri Lanka ETA beantragen?',
        a: 'Ausschliesslich uber die offizielle ETA Website der srilankischen Regierung. Drittanbieter Seiten verlangen fur denselben unkomplizierten Antrag oft deutlich uberhohte Gebuhren.',
      },
    ],
    ctaTitle: 'Lassen Sie uns bei den praktischen Details helfen',
    ctaBody: 'Sobald Ihre ETA genehmigt ist, kann unser Team eine Route rund um Ihre genauen Reisedaten planen  mit Flughafenabholung und einem privaten Fahrer Guide vom Moment der Landung an.',
    ctaLabel: 'Reise mit uns planen',
    relatedTours: [
      { pageId: 'tour7', label: '7 tagige private Sri Lanka Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits Ratgeber' },
      { pageId: 'guideBudget', label: 'Sri Lanka Budgetreise Ratgeber' },
    ],
  }
};
