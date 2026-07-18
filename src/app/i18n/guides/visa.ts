import type { ArticleContent } from '../articles/types';

/**
 * Sri Lanka visa guide (pageId: guideVisa).
 * English is the full BaseArticle; other locales overlay text by index.
 */
export const VISA_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Visa Guide: ETA, Requirements and How to Apply',
    lead: 'Almost every visitor to Sri Lanka needs an Electronic Travel Authorisation before boarding their flight a straightforward online process, but one with enough fine print about validity, extensions and passport rules that it pays to get right well before departure.',
    heroImage: 'assets/img/mainpage/2.webp',
    heroAlt: 'Passport and travel documents prepared for a Sri Lanka trip',
    sections: [
      {
        id: 'etaBasics',
        title: 'What the ETA is and who needs one',
        body: 'The Electronic Travel Authorisation (ETA) is Sri Lanka’s visa-on-arrival equivalent, applied for and approved online before you travel, for tourism, business or transit purposes. Citizens of most countries need an ETA; a short list of nationalities have visa-free arrangements or different requirements, so check the official government portal for your specific passport before assuming.\n\nApply through the official Sri Lanka ETA website only third-party sites that charge inflated "service fees" for the same application are a common trap for first-time visitors.',
      },
      {
        id: 'howToApply',
        title: 'How and when to apply',
        body: 'Apply online at least a few days before departure, though approval is often issued within 24 hours for straightforward tourist applications. You will need your passport details, a return or onward flight itinerary, and a valid credit or debit card for the fee.\n\nPrint or save a digital copy of your approval to show at check-in and immigration; airlines have been known to deny boarding to passengers who cannot produce evidence of ETA approval, even though immigration itself can verify it electronically.',
      },
      {
        id: 'validityStay',
        title: 'Validity and length of stay',
        body: 'The standard tourist ETA permits an initial stay of up to 30 days from the date of arrival, and is generally valid for use within a set window from the date of approval, so avoid applying many months ahead of a flexible trip. Multiple-entry options exist for travellers planning to leave and re-enter Sri Lanka during their trip, such as a side trip to the Maldives or India.\n\nCheck the exact current validity period and permitted stay on the official ETA site before booking flights, as rules are updated periodically.',
      },
      {
        id: 'extensions',
        title: 'Extending your stay',
        body: 'Tourist stays can generally be extended beyond the initial 30 days by applying through the Department of Immigration and Emigration in Colombo, or online where available, typically allowing a total stay of up to 90 days for tourism with the correct extensions and fees paid in advance.\n\nOverstaying without an approved extension can result in fines and complications on departure, so apply for an extension before your current authorisation expires rather than after.',
      },
      {
        id: 'passportRequirements',
        title: 'Passport and other entry requirements',
        body: 'Your passport should generally be valid for at least six months beyond your arrival date, and you should carry proof of onward or return travel and sufficient funds for your stay, as immigration officers can request these at their discretion. A printed or digital copy of your accommodation booking is a sensible addition, even if rarely checked.\n\nDouble-check any currently required health documentation before travel, since requirements have changed over time and can vary by country of departure.',
      },
      {
        id: 'commonMistakes',
        title: 'Common mistakes to avoid',
        body: 'Applying through unofficial third-party websites at inflated prices is the most common and avoidable mistake the official government ETA fee is fixed and the process takes only a few minutes on the correct site. Entering passport details incorrectly, particularly names that don’t exactly match your passport, is the next most common cause of delayed or rejected applications.\n\nLeaving the application until the airport, or assuming a valid ETA from a previous trip still applies, are both avoidable problems: always apply fresh, ahead of time, for each visit.',
      },
    ],
    faq: [
      {
        q: 'Do I need a visa to visit Sri Lanka?',
        a: 'Almost all visitors need an Electronic Travel Authorisation (ETA) applied for online before travel; a small number of nationalities have different arrangements, so check the official ETA portal for your passport specifically.',
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
        q: 'Where should I apply for my Sri Lanka ETA?',
        a: 'Only through the official Sri Lanka government ETA website. Third-party sites often charge significantly inflated fees for the same straightforward application.',
      },
    ],
    ctaTitle: 'Let us help with the practical details',
    ctaBody: 'Once your ETA is approved, our team can help plan an itinerary around your exact travel dates, with airport pickup and a private driver-guide from the moment you land.',
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
    ],
  },

  de: {
    h1: 'Sri Lanka Visum-Ratgeber: ETA, Anforderungen und Antragstellung',
    lead: 'Fast jeder Besucher Sri Lankas benötigt vor dem Boarding eine elektronische Reisegenehmigung (ETA) – ein unkomplizierter Online-Vorgang, allerdings mit genug Kleingedrucktem zu Gültigkeit, Verlängerungen und Passregeln, dass es sich lohnt, ihn rechtzeitig vor der Abreise korrekt zu erledigen.',
    heroAlt: 'Reisepass und Reisedokumente für eine Sri-Lanka-Reise vorbereitet',
    sections: [
      {
        title: 'Was die ETA ist und wer eine braucht',
        body: 'Die Electronic Travel Authorisation (ETA) ist Sri Lankas Äquivalent zum Visum bei Einreise, online vor der Reise beantragt und genehmigt, für Tourismus, Geschäft oder Transit. Bürger der meisten Länder benötigen eine ETA; eine kurze Liste von Nationalitäten hat visumfreie Regelungen oder andere Anforderungen – prüfen Sie das offizielle Regierungsportal für Ihren spezifischen Pass, statt es anzunehmen.\n\nBeantragen Sie die ETA nur über die offizielle Sri-Lanka-ETA-Website – Drittanbieter-Seiten, die überhöhte „Servicegebühren“ für denselben Antrag verlangen, sind eine häufige Falle für Erstbesucher.',
      },
      {
        title: 'Wie und wann man den Antrag stellt',
        body: 'Beantragen Sie die ETA online mindestens einige Tage vor der Abreise, obwohl die Genehmigung für unkomplizierte touristische Anträge oft innerhalb von 24 Stunden erfolgt. Sie benötigen Ihre Passdaten, ein Rück- oder Weiterflugticket und eine gültige Kredit- oder Debitkarte für die Gebühr.\n\nDrucken Sie Ihre Genehmigung aus oder speichern Sie eine digitale Kopie, um sie beim Check-in und bei der Einreise vorzuzeigen; Fluggesellschaften haben Passagieren schon das Boarding verweigert, die keinen Nachweis der ETA-Genehmigung vorlegen konnten, obwohl die Einreisebehörde selbst diese elektronisch prüfen kann.',
      },
      {
        title: 'Gültigkeit und Aufenthaltsdauer',
        body: 'Die Standard-Touristen-ETA erlaubt einen ersten Aufenthalt von bis zu 30 Tagen ab Einreisedatum und ist im Allgemeinen innerhalb eines festgelegten Zeitfensters ab dem Genehmigungsdatum gültig – beantragen Sie sie daher nicht viele Monate vor einer flexiblen Reise. Für Reisende, die während ihrer Reise aus- und wieder einreisen möchten, etwa für einen Abstecher auf die Maldiven oder nach Indien, gibt es Mehrfacheinreise-Optionen.\n\nPrüfen Sie den genauen aktuellen Gültigkeitszeitraum und die zulässige Aufenthaltsdauer auf der offiziellen ETA-Seite, bevor Sie Flüge buchen, da sich die Regeln regelmäßig ändern.',
      },
      {
        title: 'Aufenthalt verlängern',
        body: 'Touristische Aufenthalte lassen sich in der Regel über die anfänglichen 30 Tage hinaus verlängern, indem man einen Antrag beim Department of Immigration and Emigration in Colombo oder, wo verfügbar, online stellt – üblicherweise bis zu insgesamt 90 Tagen für touristische Zwecke, bei korrekt beantragter Verlängerung und im Voraus bezahlten Gebühren.\n\nEin Überschreiten der Aufenthaltsdauer ohne genehmigte Verlängerung kann bei der Ausreise zu Strafen und Komplikationen führen – beantragen Sie die Verlängerung daher vor Ablauf Ihrer aktuellen Genehmigung, nicht danach.',
      },
      {
        title: 'Pass- und weitere Einreiseanforderungen',
        body: 'Ihr Reisepass sollte in der Regel noch mindestens sechs Monate über das Einreisedatum hinaus gültig sein, und Sie sollten einen Nachweis für Weiter- oder Rückreise sowie ausreichende Mittel für Ihren Aufenthalt mitführen, da Einreisebeamte diese nach eigenem Ermessen verlangen können. Eine ausgedruckte oder digitale Kopie Ihrer Unterkunftsbuchung ist eine sinnvolle Ergänzung, auch wenn sie selten kontrolliert wird.\n\nPrüfen Sie vor der Reise etwaige aktuell erforderliche Gesundheitsdokumente, da sich die Anforderungen im Laufe der Zeit ändern können und je nach Abflugland variieren.',
      },
      {
        title: 'Häufige Fehler, die man vermeiden sollte',
        body: 'Der Antrag über inoffizielle Drittanbieter-Websites zu überhöhten Preisen ist der häufigste und vermeidbarste Fehler – die offizielle staatliche ETA-Gebühr ist festgelegt, und der Vorgang dauert auf der richtigen Seite nur wenige Minuten. Falsch eingegebene Passdaten, insbesondere Namen, die nicht exakt mit dem Pass übereinstimmen, sind die zweithäufigste Ursache für verzögerte oder abgelehnte Anträge.\n\nDen Antrag bis zum Flughafen aufzuschieben oder anzunehmen, eine gültige ETA aus einer früheren Reise gelte weiterhin, sind beide vermeidbare Probleme: Beantragen Sie für jede Reise stets neu und rechtzeitig im Voraus.',
      },
    ],
    faq: [
      {
        q: 'Brauche ich ein Visum für Sri Lanka?',
        a: 'Fast alle Besucher benötigen eine online vor der Reise beantragte elektronische Reisegenehmigung (ETA); eine kleine Zahl von Nationalitäten hat andere Regelungen – prüfen Sie das offizielle ETA-Portal speziell für Ihren Pass.',
      },
      {
        q: 'Wie lange dauert die ETA-Genehmigung?',
        a: 'Unkomplizierte touristische Anträge werden oft innerhalb von 24 Stunden genehmigt, es ist jedoch sinnvoll, mindestens einige Tage vor der Abreise zu beantragen statt in letzter Minute.',
      },
      {
        q: 'Wie lange darf ich mit einer touristischen ETA in Sri Lanka bleiben?',
        a: 'Die Standard-Touristen-ETA erlaubt einen ersten Aufenthalt von bis zu 30 Tagen, mit Verlängerungen über das Department of Immigration and Emigration in der Regel bis zu insgesamt rund 90 Tagen für touristische Zwecke.',
      },
      {
        q: 'Kann ich mein Sri-Lanka-Visum nach der Einreise verlängern?',
        a: 'Ja – beantragen Sie eine Verlängerung beim Department of Immigration and Emigration in Colombo oder, wo verfügbar, online, bevor Ihre aktuelle Genehmigung abläuft, um Strafen oder Komplikationen zu vermeiden.',
      },
      {
        q: 'Wo sollte ich meine Sri-Lanka-ETA beantragen?',
        a: 'Ausschließlich über die offizielle ETA-Website der srilankischen Regierung. Drittanbieter-Seiten verlangen für denselben unkomplizierten Antrag oft deutlich überhöhte Gebühren.',
      },
    ],
    ctaTitle: 'Lassen Sie uns bei den praktischen Details helfen',
    ctaBody: 'Sobald Ihre ETA genehmigt ist, kann unser Team eine Route rund um Ihre genauen Reisedaten planen – mit Flughafenabholung und einem privaten Fahrer-Guide vom Moment der Landung an.',
    ctaLabel: 'Reise mit uns planen',
    relatedTours: [
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits-Ratgeber' },
      { pageId: 'guideBudget', label: 'Sri Lanka Budgetreise-Ratgeber' },
    ],
  },

  fr: {
    h1: 'Guide du visa pour le Sri Lanka : ETA, conditions et démarche',
    lead: 'Presque tous les visiteurs du Sri Lanka doivent obtenir une autorisation de voyage électronique avant l’embarquement une démarche en ligne simple, mais avec suffisamment de subtilités sur la validité, les prolongations et les règles de passeport pour qu’il vaille la peine de bien s’en occuper avant le départ.',
    heroAlt: 'Passeport et documents de voyage préparés pour un séjour au Sri Lanka',
    sections: [
      {
        title: 'Ce qu’est l’ETA et qui en a besoin',
        body: 'L’Electronic Travel Authorisation (ETA) est l’équivalent sri-lankais du visa à l’arrivée, demandé et approuvé en ligne avant le voyage, pour le tourisme, les affaires ou le transit. Les ressortissants de la plupart des pays ont besoin d’une ETA ; une courte liste de nationalités bénéficie de dispenses de visa ou de règles différentes vérifiez le portail officiel du gouvernement pour votre passeport spécifique plutôt que de le supposer.\n\nFaites votre demande uniquement via le site officiel de l’ETA sri-lankaise les sites tiers qui facturent des « frais de service » gonflés pour la même demande sont un piège courant pour les primo-visiteurs.',
      },
      {
        title: 'Comment et quand faire sa demande',
        body: 'Faites votre demande en ligne au moins quelques jours avant le départ, bien que l’approbation soit souvent délivrée sous 24 heures pour les demandes touristiques simples. Vous aurez besoin des informations de votre passeport, d’un itinéraire de retour ou de vol de continuation, et d’une carte de crédit ou de débit valide pour régler les frais.\n\nImprimez ou enregistrez une copie numérique de votre approbation à présenter à l’enregistrement et à l’immigration ; certaines compagnies aériennes ont refusé l’embarquement à des passagers incapables de prouver leur approbation d’ETA, même si l’immigration elle-même peut la vérifier électroniquement.',
      },
      {
        title: 'Validité et durée du séjour',
        body: 'L’ETA touristique standard autorise un séjour initial de jusqu’à 30 jours à compter de la date d’arrivée, et reste généralement valable dans une fenêtre définie à partir de la date d’approbation évitez donc de la demander de nombreux mois avant un voyage flexible. Des options d’entrées multiples existent pour les voyageurs prévoyant de quitter puis de revenir au Sri Lanka durant leur séjour, par exemple pour une escapade aux Maldives ou en Inde.\n\nVérifiez la période de validité exacte actuelle et la durée de séjour autorisée sur le site officiel de l’ETA avant de réserver vos vols, car les règles sont mises à jour périodiquement.',
      },
      {
        title: 'Prolonger votre séjour',
        body: 'Les séjours touristiques peuvent généralement être prolongés au-delà des 30 jours initiaux en déposant une demande auprès du Department of Immigration and Emigration à Colombo, ou en ligne le cas échéant, permettant en général un séjour total allant jusqu’à 90 jours pour le tourisme, avec les prolongations correctement demandées et les frais payés à l’avance.\n\nDépasser la durée autorisée sans prolongation approuvée peut entraîner des amendes et des complications au départ demandez donc une prolongation avant l’expiration de votre autorisation actuelle, pas après.',
      },
      {
        title: 'Passeport et autres conditions d’entrée',
        body: 'Votre passeport doit généralement être valide au moins six mois après votre date d’arrivée, et vous devez avoir une preuve de vol de continuation ou de retour ainsi que des fonds suffisants pour votre séjour, les agents d’immigration pouvant les demander à leur discrétion. Une copie imprimée ou numérique de votre réservation d’hébergement est un ajout judicieux, même si elle est rarement contrôlée.\n\nVérifiez au préalable tout document sanitaire actuellement requis, car les exigences ont changé au fil du temps et peuvent varier selon le pays de départ.',
      },
      {
        title: 'Erreurs courantes à éviter',
        body: 'Faire sa demande via des sites tiers non officiels à prix gonflés est l’erreur la plus courante et la plus évitable les frais officiels de l’ETA gouvernementale sont fixes et la démarche ne prend que quelques minutes sur le bon site. Saisir incorrectement les informations du passeport, en particulier des noms qui ne correspondent pas exactement au passeport, est la deuxième cause la plus fréquente de retards ou de rejets.\n\nAttendre l’aéroport pour faire sa demande, ou supposer qu’une ETA valide d’un voyage précédent s’applique encore, sont deux problèmes évitables : faites toujours une nouvelle demande, à l’avance, pour chaque visite.',
      },
    ],
    faq: [
      {
        q: 'Ai-je besoin d’un visa pour visiter le Sri Lanka ?',
        a: 'Presque tous les visiteurs ont besoin d’une autorisation de voyage électronique (ETA) demandée en ligne avant le voyage ; un petit nombre de nationalités bénéficie de dispositions différentes vérifiez le portail officiel de l’ETA spécifiquement pour votre passeport.',
      },
      {
        q: 'Combien de temps prend l’approbation de l’ETA ?',
        a: 'Les demandes touristiques simples sont souvent approuvées sous 24 heures, mais il est sage de faire sa demande au moins quelques jours avant le départ plutôt qu’à la dernière minute.',
      },
      {
        q: 'Combien de temps puis-je rester au Sri Lanka avec une ETA touristique ?',
        a: 'L’ETA touristique standard autorise un séjour initial de jusqu’à 30 jours, avec des prolongations généralement disponibles via le Department of Immigration and Emigration jusqu’à un total d’environ 90 jours pour le tourisme.',
      },
      {
        q: 'Puis-je prolonger mon visa sri-lankais après mon arrivée ?',
        a: 'Oui demandez une prolongation auprès du Department of Immigration and Emigration à Colombo, ou en ligne le cas échéant, avant l’expiration de votre autorisation actuelle pour éviter amendes ou complications.',
      },
      {
        q: 'Où dois-je demander mon ETA pour le Sri Lanka ?',
        a: 'Uniquement via le site officiel de l’ETA du gouvernement sri-lankais. Les sites tiers facturent souvent des frais nettement gonflés pour la même démarche simple.',
      },
    ],
    ctaTitle: 'Laissez-nous vous aider pour les détails pratiques',
    ctaBody: 'Une fois votre ETA approuvée, notre équipe peut planifier un itinéraire autour de vos dates de voyage exactes, avec prise en charge à l’aéroport et un chauffeur-guide privé dès votre arrivée.',
    ctaLabel: 'Planifier votre voyage avec nous',
    relatedTours: [
      { pageId: 'tour7', label: 'Circuit privé de 7 jours au Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Guide de sécurité au Sri Lanka' },
      { pageId: 'guideBudget', label: 'Guide du voyage économique au Sri Lanka' },
    ],
  },

  it: {
    h1: 'Guida al visto per lo Sri Lanka: ETA, requisiti e come richiederlo',
    lead: 'Quasi ogni visitatore dello Sri Lanka ha bisogno di un’autorizzazione di viaggio elettronica prima di salire a bordo una procedura online semplice, ma con abbastanza dettagli su validità, proroghe e regole del passaporto da meritare attenzione ben prima della partenza.',
    heroAlt: 'Passaporto e documenti di viaggio pronti per un viaggio in Sri Lanka',
    sections: [
      {
        title: 'Cos’è l’ETA e chi ne ha bisogno',
        body: 'L’Electronic Travel Authorisation (ETA) è l’equivalente del visto all’arrivo dello Sri Lanka, richiesto e approvato online prima di viaggiare, per turismo, affari o transito. I cittadini della maggior parte dei paesi hanno bisogno di un’ETA; un breve elenco di nazionalità ha accordi senza visto o requisiti diversi, quindi controllate il portale governativo ufficiale per il vostro passaporto specifico prima di assumerlo per certo.\n\nRichiedete l’ETA solo tramite il sito ufficiale dello Sri Lanka i siti di terze parti che applicano “commissioni di servizio” gonfiate per la stessa domanda sono una trappola comune per chi visita per la prima volta.',
      },
      {
        title: 'Come e quando fare domanda',
        body: 'Fate domanda online almeno qualche giorno prima della partenza, sebbene l’approvazione venga spesso rilasciata entro 24 ore per le domande turistiche semplici. Vi serviranno i dati del passaporto, un itinerario di ritorno o di proseguimento del viaggio e una carta di credito o debito valida per la tassa.\n\nStampate o salvate una copia digitale della vostra approvazione da mostrare al check-in e all’immigrazione; alcune compagnie aeree hanno negato l’imbarco a passeggeri che non potevano dimostrare l’approvazione dell’ETA, anche se l’immigrazione stessa può verificarla elettronicamente.',
      },
      {
        title: 'Validità e durata del soggiorno',
        body: 'L’ETA turistica standard consente un soggiorno iniziale fino a 30 giorni dalla data di arrivo, ed è generalmente valida per l’uso entro una finestra prestabilita dalla data di approvazione, quindi evitate di richiederla molti mesi prima di un viaggio flessibile. Esistono opzioni a ingressi multipli per i viaggiatori che intendono lasciare e rientrare in Sri Lanka durante il viaggio, ad esempio per una deviazione alle Maldive o in India.\n\nControllate il periodo di validità attuale esatto e il soggiorno consentito sul sito ufficiale dell’ETA prima di prenotare i voli, poiché le regole vengono aggiornate periodicamente.',
      },
      {
        title: 'Prolungare il soggiorno',
        body: 'I soggiorni turistici possono generalmente essere prolungati oltre i 30 giorni iniziali facendo domanda tramite il Department of Immigration and Emigration a Colombo, o online dove disponibile, consentendo tipicamente un soggiorno totale fino a 90 giorni per turismo, con le proroghe corrette e le tasse pagate in anticipo.\n\nRimanere oltre il periodo consentito senza una proroga approvata può comportare multe e complicazioni alla partenza, quindi richiedete la proroga prima della scadenza della vostra autorizzazione attuale, non dopo.',
      },
      {
        title: 'Passaporto e altri requisiti d’ingresso',
        body: 'Il vostro passaporto dovrebbe generalmente essere valido per almeno sei mesi oltre la data di arrivo, e dovreste portare con voi la prova del viaggio di proseguimento o ritorno e fondi sufficienti per il soggiorno, poiché i funzionari dell’immigrazione possono richiederli a loro discrezione. Una copia stampata o digitale della prenotazione dell’alloggio è un’aggiunta sensata, anche se raramente controllata.\n\nControllate in anticipo qualsiasi documentazione sanitaria attualmente richiesta, poiché i requisiti sono cambiati nel tempo e possono variare in base al paese di partenza.',
      },
      {
        title: 'Errori comuni da evitare',
        body: 'Fare domanda tramite siti di terze parti non ufficiali a prezzi gonfiati è l’errore più comune ed evitabile la tassa ufficiale governativa per l’ETA è fissa e la procedura richiede solo pochi minuti sul sito corretto. Inserire in modo errato i dati del passaporto, in particolare nomi che non corrispondono esattamente al passaporto, è la seconda causa più comune di domande ritardate o respinte.\n\nRimandare la domanda fino all’aeroporto, o supporre che un’ETA valida di un viaggio precedente sia ancora applicabile, sono entrambi problemi evitabili: fate sempre una nuova domanda, in anticipo, per ogni visita.',
      },
    ],
    faq: [
      {
        q: 'Ho bisogno di un visto per visitare lo Sri Lanka?',
        a: 'Quasi tutti i visitatori hanno bisogno di un’autorizzazione di viaggio elettronica (ETA) richiesta online prima del viaggio; un piccolo numero di nazionalità ha accordi diversi, quindi controllate il portale ufficiale dell’ETA specificamente per il vostro passaporto.',
      },
      {
        q: 'Quanto tempo richiede l’approvazione dell’ETA?',
        a: 'Le domande turistiche semplici vengono spesso approvate entro 24 ore, ma è consigliabile fare domanda almeno qualche giorno prima della partenza piuttosto che all’ultimo minuto.',
      },
      {
        q: 'Quanto posso restare in Sri Lanka con un’ETA turistica?',
        a: 'L’ETA turistica standard consente un soggiorno iniziale fino a 30 giorni, con proroghe generalmente disponibili tramite il Department of Immigration and Emigration fino a un totale di circa 90 giorni per il turismo.',
      },
      {
        q: 'Posso prolungare il mio visto per lo Sri Lanka dopo l’arrivo?',
        a: 'Sì richiedete una proroga tramite il Department of Immigration and Emigration a Colombo, o online dove disponibile, prima che scada la vostra autorizzazione attuale, per evitare multe o complicazioni.',
      },
      {
        q: 'Dove dovrei richiedere la mia ETA per lo Sri Lanka?',
        a: 'Solo tramite il sito ufficiale del governo dello Sri Lanka per l’ETA. I siti di terze parti spesso applicano tariffe significativamente gonfiate per la stessa semplice domanda.',
      },
    ],
    ctaTitle: 'Lasciateci aiutare con i dettagli pratici',
    ctaBody: 'Una volta approvata la vostra ETA, il nostro team può pianificare un itinerario in base alle vostre date di viaggio esatte, con prelievo dall’aeroporto e un autista-guida privato dal momento dell’atterraggio.',
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
    ],
  },

  es: {
    h1: 'Guía de visado para Sri Lanka: ETA, requisitos y cómo solicitarlo',
    lead: 'Casi todos los visitantes de Sri Lanka necesitan una Autorización Electrónica de Viaje antes de embarcar: un trámite en línea sencillo, pero con suficiente letra pequeña sobre validez, prórrogas y normas de pasaporte como para merecer la pena hacerlo bien antes de salir.',
    heroAlt: 'Pasaporte y documentos de viaje preparados para un viaje a Sri Lanka',
    sections: [
      {
        title: 'Qué es la ETA y quién la necesita',
        body: 'La Electronic Travel Authorisation (ETA) es el equivalente de Sri Lanka al visado a la llegada, solicitado y aprobado en línea antes de viajar, para turismo, negocios o tránsito. Los ciudadanos de la mayoría de países necesitan una ETA; una lista corta de nacionalidades tiene acuerdos sin visado o requisitos distintos, así que compruebe el portal oficial del gobierno para su pasaporte específico en lugar de suponerlo.\n\nSolicítela únicamente a través del sitio web oficial de la ETA de Sri Lanka: los sitios de terceros que cobran «tarifas de servicio» infladas por la misma solicitud son una trampa habitual para quienes visitan por primera vez.',
      },
      {
        title: 'Cómo y cuándo solicitarla',
        body: 'Solicítela en línea al menos unos días antes de la salida, aunque la aprobación suele emitirse en 24 horas para solicitudes turísticas sencillas. Necesitará los datos de su pasaporte, un itinerario de vuelo de regreso o continuación, y una tarjeta de crédito o débito válida para la tasa.\n\nImprima o guarde una copia digital de su aprobación para mostrarla en el check-in y en inmigración; algunas aerolíneas han denegado el embarque a pasajeros que no podían presentar prueba de la aprobación de la ETA, aunque la propia inmigración pueda verificarla electrónicamente.',
      },
      {
        title: 'Validez y duración de la estancia',
        body: 'La ETA turística estándar permite una estancia inicial de hasta 30 días desde la fecha de llegada, y generalmente es válida para su uso dentro de un plazo determinado desde la fecha de aprobación, así que evite solicitarla muchos meses antes de un viaje flexible. Existen opciones de entradas múltiples para viajeros que planean salir y volver a entrar en Sri Lanka durante su viaje, por ejemplo para una escapada a Maldivas o India.\n\nCompruebe el periodo de validez actual exacto y la estancia permitida en el sitio oficial de la ETA antes de reservar vuelos, ya que las normas se actualizan periódicamente.',
      },
      {
        title: 'Ampliar su estancia',
        body: 'Las estancias turísticas generalmente pueden ampliarse más allá de los 30 días iniciales solicitándolo a través del Department of Immigration and Emigration en Colombo, o en línea donde esté disponible, permitiendo normalmente una estancia total de hasta 90 días para turismo, con las prórrogas correctamente solicitadas y las tasas pagadas por adelantado.\n\nQuedarse más tiempo del permitido sin una prórroga aprobada puede acarrear multas y complicaciones a la salida, así que solicite la prórroga antes de que caduque su autorización actual, no después.',
      },
      {
        title: 'Pasaporte y otros requisitos de entrada',
        body: 'Su pasaporte generalmente debe ser válido durante al menos seis meses más allá de la fecha de llegada, y debe llevar prueba de viaje de continuación o regreso y fondos suficientes para su estancia, ya que los agentes de inmigración pueden solicitarlos a su discreción. Una copia impresa o digital de la reserva de su alojamiento es una añadido sensato, aunque rara vez se comprueba.\n\nCompruebe con antelación cualquier documentación sanitaria actualmente requerida, ya que los requisitos han cambiado con el tiempo y pueden variar según el país de salida.',
      },
      {
        title: 'Errores comunes que evitar',
        body: 'Solicitarla a través de sitios web de terceros no oficiales a precios inflados es el error más común y evitable: la tasa oficial del gobierno para la ETA es fija y el proceso solo lleva unos minutos en el sitio correcto. Introducir mal los datos del pasaporte, especialmente nombres que no coinciden exactamente con el pasaporte, es la segunda causa más habitual de solicitudes retrasadas o rechazadas.\n\nDejar la solicitud para el aeropuerto, o suponer que una ETA válida de un viaje anterior sigue aplicándose, son ambos problemas evitables: solicite siempre una nueva, con antelación, para cada visita.',
      },
    ],
    faq: [
      {
        q: '¿Necesito visado para visitar Sri Lanka?',
        a: 'Casi todos los visitantes necesitan una Autorización Electrónica de Viaje (ETA) solicitada en línea antes de viajar; un pequeño número de nacionalidades tiene disposiciones distintas, así que compruebe el portal oficial de la ETA específicamente para su pasaporte.',
      },
      {
        q: '¿Cuánto tarda la aprobación de la ETA?',
        a: 'Las solicitudes turísticas sencillas suelen aprobarse en 24 horas, aunque es sensato solicitarla al menos unos días antes de la salida en lugar de a última hora.',
      },
      {
        q: '¿Cuánto tiempo puedo quedarme en Sri Lanka con una ETA turística?',
        a: 'La ETA turística estándar permite una estancia inicial de hasta 30 días, con prórrogas generalmente disponibles a través del Department of Immigration and Emigration hasta un total de unos 90 días para turismo.',
      },
      {
        q: '¿Puedo prolongar mi visado de Sri Lanka tras la llegada?',
        a: 'Sí: solicite una prórroga a través del Department of Immigration and Emigration en Colombo, o en línea donde esté disponible, antes de que caduque su autorización actual, para evitar multas o complicaciones.',
      },
      {
        q: '¿Dónde debería solicitar mi ETA para Sri Lanka?',
        a: 'Únicamente a través del sitio web oficial del gobierno de Sri Lanka para la ETA. Los sitios de terceros a menudo cobran tarifas significativamente infladas por la misma solicitud sencilla.',
      },
    ],
    ctaTitle: 'Déjenos ayudarle con los detalles prácticos',
    ctaBody: 'Una vez aprobada su ETA, nuestro equipo puede planificar un itinerario según sus fechas exactas de viaje, con recogida en el aeropuerto y un chófer-guía privado desde el momento en que aterrice.',
    ctaLabel: 'Planifique su viaje con nosotros',
    relatedTours: [
      { pageId: 'tour7', label: 'Tour privado de 7 días por Sri Lanka' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Guía de seguridad de Sri Lanka' },
      { pageId: 'guideBudget', label: 'Guía de viaje económico por Sri Lanka' },
    ],
  },

  pl: {
    h1: 'Przewodnik wizowy na Sri Lankę: ETA, wymagania i sposób aplikowania',
    lead: 'Prawie każdy odwiedzający Sri Lankę potrzebuje elektronicznej autoryzacji podróży przed wejściem na pokład – prosty proces online, ale z wystarczająco dużą liczbą szczegółów dotyczących ważności, przedłużeń i zasad paszportowych, by warto było zrobić to dobrze na czas przed wyjazdem.',
    heroAlt: 'Paszport i dokumenty podróżne przygotowane na wyjazd na Sri Lankę',
    sections: [
      {
        title: 'Czym jest ETA i kto jej potrzebuje',
        body: 'Electronic Travel Authorisation (ETA) to lankijski odpowiednik wizy na przyjazd, o którą składa się wniosek i którą uzyskuje się online przed podróżą, w celach turystycznych, biznesowych lub tranzytowych. Obywatele większości krajów potrzebują ETA; krótka lista narodowości ma umowy bezwizowe lub inne wymagania – sprawdź oficjalny portal rządowy dla swojego konkretnego paszportu, zamiast zgadywać.\n\nSkładaj wniosek tylko przez oficjalną stronę ETA Sri Lanki – strony trzecie naliczające zawyżone „opłaty za usługę” za ten sam wniosek to częsta pułapka dla osób odwiedzających kraj po raz pierwszy.',
      },
      {
        title: 'Jak i kiedy złożyć wniosek',
        body: 'Złóż wniosek online co najmniej kilka dni przed wyjazdem, choć zatwierdzenie prostych wniosków turystycznych następuje często w ciągu 24 godzin. Będziesz potrzebować danych paszportowych, planu podróży powrotnej lub dalszej oraz ważnej karty kredytowej lub debetowej do zapłaty opłaty.\n\nWydrukuj lub zapisz cyfrową kopię swojej zgody, by pokazać ją przy odprawie i na kontroli granicznej; linie lotnicze odmawiały wejścia na pokład pasażerom, którzy nie mogli przedstawić dowodu zatwierdzenia ETA, mimo że sama kontrola graniczna może zweryfikować to elektronicznie.',
      },
      {
        title: 'Ważność i długość pobytu',
        body: 'Standardowa turystyczna ETA umożliwia początkowy pobyt do 30 dni od daty przyjazdu i jest zwykle ważna w określonym oknie czasowym od daty zatwierdzenia, więc nie składaj wniosku wiele miesięcy przed elastyczną podróżą. Dla podróżnych planujących wyjazd i powrót na Sri Lankę w trakcie podróży, na przykład na wypad na Malediwy lub do Indii, istnieją opcje wielokrotnego wjazdu.\n\nSprawdź dokładny aktualny okres ważności i dozwolony pobyt na oficjalnej stronie ETA przed rezerwacją lotów, ponieważ przepisy są okresowo aktualizowane.',
      },
      {
        title: 'Przedłużanie pobytu',
        body: 'Pobyty turystyczne można zwykle przedłużyć poza początkowe 30 dni, składając wniosek w Departamencie Imigracji i Emigracji w Kolombo lub online, gdzie to możliwe, umożliwiając zazwyczaj łączny pobyt do 90 dni w celach turystycznych, po prawidłowym złożeniu wniosku o przedłużenie i wcześniejszej opłacie.\n\nPrzekroczenie dozwolonego pobytu bez zatwierdzonego przedłużenia może skutkować karami i komplikacjami przy wyjeździe, więc złóż wniosek o przedłużenie przed wygaśnięciem obecnej autoryzacji, a nie po.',
      },
      {
        title: 'Paszport i inne wymagania wjazdowe',
        body: 'Twój paszport powinien być zwykle ważny co najmniej sześć miesięcy po dacie przyjazdu, i powinieneś mieć przy sobie dowód dalszej podróży lub powrotu oraz wystarczające środki na pobyt, ponieważ funkcjonariusze imigracyjni mogą je zażądać według własnego uznania. Wydrukowana lub cyfrowa kopia rezerwacji noclegu to rozsądny dodatek, choć rzadko jest sprawdzana.\n\nSprawdź z wyprzedzeniem wszelką aktualnie wymaganą dokumentację zdrowotną, ponieważ wymagania zmieniały się w czasie i mogą różnić się w zależności od kraju wylotu.',
      },
      {
        title: 'Częste błędy, których warto unikać',
        body: 'Składanie wniosku przez nieoficjalne strony trzecie po zawyżonych cenach to najczęstszy i najłatwiejszy do uniknięcia błąd – oficjalna rządowa opłata za ETA jest stała, a proces na właściwej stronie zajmuje tylko kilka minut. Nieprawidłowe wprowadzenie danych paszportowych, szczególnie imion i nazwisk, które nie zgadzają się dokładnie z paszportem, to druga najczęstsza przyczyna opóźnionych lub odrzuconych wniosków.\n\nOdkładanie wniosku do momentu bycia na lotnisku lub zakładanie, że ważna ETA z poprzedniej podróży wciąż obowiązuje, to dwa problemy, których można uniknąć: zawsze składaj nowy wniosek, z wyprzedzeniem, na każdą wizytę.',
      },
    ],
    faq: [
      {
        q: 'Czy potrzebuję wizy, aby odwiedzić Sri Lankę?',
        a: 'Prawie wszyscy odwiedzający potrzebują elektronicznej autoryzacji podróży (ETA) składanej online przed podróżą; niewielka liczba narodowości ma inne ustalenia – sprawdź oficjalny portal ETA konkretnie dla swojego paszportu.',
      },
      {
        q: 'Jak długo trwa zatwierdzenie ETA?',
        a: 'Proste wnioski turystyczne są często zatwierdzane w ciągu 24 godzin, ale rozsądnie jest złożyć wniosek co najmniej kilka dni przed wyjazdem, a nie w ostatniej chwili.',
      },
      {
        q: 'Jak długo mogę zostać na Sri Lance z turystyczną ETA?',
        a: 'Standardowa turystyczna ETA umożliwia początkowy pobyt do 30 dni, z przedłużeniami zwykle dostępnymi przez Departament Imigracji i Emigracji do łącznie około 90 dni w celach turystycznych.',
      },
      {
        q: 'Czy mogę przedłużyć wizę na Sri Lankę po przyjeździe?',
        a: 'Tak – złóż wniosek o przedłużenie w Departamencie Imigracji i Emigracji w Kolombo lub online, gdzie to możliwe, przed wygaśnięciem obecnej autoryzacji, aby uniknąć kar lub komplikacji.',
      },
      {
        q: 'Gdzie powinienem złożyć wniosek o ETA na Sri Lankę?',
        a: 'Tylko przez oficjalną stronę rządową ETA Sri Lanki. Strony trzecie często naliczają znacznie zawyżone opłaty za ten sam prosty wniosek.',
      },
    ],
    ctaTitle: 'Pomożemy Ci w praktycznych szczegółach',
    ctaBody: 'Po zatwierdzeniu ETA nasz zespół może zaplanować trasę wokół Twoich konkretnych dat podróży, z odbiorem z lotniska i prywatnym kierowcą-przewodnikiem od momentu lądowania.',
    ctaLabel: 'Zaplanuj podróż z nami',
    relatedTours: [
      { pageId: 'tour7', label: '7-dniowa prywatna wycieczka po Sri Lance' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Przewodnik bezpieczeństwa na Sri Lance' },
      { pageId: 'guideBudget', label: 'Przewodnik budżetowej podróży po Sri Lance' },
    ],
  },

  ru: {
    h1: 'Гид по визе в Шри-Ланку: ETA, требования и как подать заявку',
    lead: 'Почти каждому посетителю Шри-Ланки нужно электронное разрешение на поездку перед посадкой на рейс простой онлайн-процесс, но с достаточным количеством нюансов о сроке действия, продлении и паспортных правилах, чтобы разобраться с этим заранее, до отъезда.',
    heroAlt: 'Паспорт и документы, подготовленные для поездки в Шри-Ланку',
    sections: [
      {
        title: 'Что такое ETA и кому она нужна',
        body: 'Electronic Travel Authorisation (ETA) это шри-ланкийский аналог визы по прилёту, которую оформляют и одобряют онлайн перед поездкой, для туризма, бизнеса или транзита. Гражданам большинства стран нужна ETA; короткий список национальностей имеет безвизовые договорённости или другие требования, поэтому проверьте официальный государственный портал именно для вашего паспорта, а не предполагайте.\n\nПодавайте заявку только через официальный сайт ETA Шри-Ланки сторонние сайты, взимающие завышенные «сервисные сборы» за ту же заявку, распространённая ловушка для тех, кто едет впервые.',
      },
      {
        title: 'Как и когда подавать заявку',
        body: 'Подавайте заявку онлайн как минимум за несколько дней до отъезда, хотя одобрение простых туристических заявок часто приходит в течение 24 часов. Вам понадобятся данные паспорта, маршрут обратного или дальнейшего рейса и действующая кредитная или дебетовая карта для оплаты сбора.\n\nРаспечатайте или сохраните цифровую копию своего одобрения, чтобы показать её при регистрации и на границе; авиакомпании отказывали в посадке пассажирам, не сумевшим предъявить доказательство одобрения ETA, хотя сама иммиграционная служба может проверить это электронно.',
      },
      {
        title: 'Срок действия и продолжительность пребывания',
        body: 'Стандартная туристическая ETA разрешает первоначальное пребывание до 30 дней с даты прибытия и обычно действует в течение установленного окна с даты одобрения, поэтому не подавайте заявку за много месяцев до гибкой по датам поездки. Для путешественников, планирующих выезжать и возвращаться в Шри-Ланку во время поездки, например для вылазки на Мальдивы или в Индию, существуют варианты с многократным въездом.\n\nПроверьте точный текущий срок действия и разрешённое пребывание на официальном сайте ETA перед бронированием рейсов, поскольку правила периодически обновляются.',
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
        q: 'Нужна ли мне виза для посещения Шри-Ланки?',
        a: 'Почти всем посетителям нужно электронное разрешение на поездку (ETA), оформляемое онлайн перед поездкой; небольшое число национальностей имеет другие договорённости, поэтому проверьте официальный портал ETA конкретно для своего паспорта.',
      },
      {
        q: 'Сколько времени занимает одобрение ETA?',
        a: 'Простые туристические заявки часто одобряются в течение 24 часов, но разумно подавать заявку как минимум за несколько дней до отъезда, а не в последнюю минуту.',
      },
      {
        q: 'Сколько я могу оставаться в Шри-Ланке по туристической ETA?',
        a: 'Стандартная туристическая ETA разрешает первоначальное пребывание до 30 дней, а продление обычно доступно через Департамент иммиграции и эмиграции до общего срока около 90 дней для туризма.',
      },
      {
        q: 'Могу ли я продлить визу в Шри-Ланку после прибытия?',
        a: 'Да подайте заявку на продление в Департамент иммиграции и эмиграции в Коломбо или онлайн, где это доступно, до истечения текущего разрешения, чтобы избежать штрафов или осложнений.',
      },
      {
        q: 'Где мне следует подавать заявку на ETA в Шри-Ланку?',
        a: 'Только через официальный государственный сайт ETA Шри-Ланки. Сторонние сайты часто взимают значительно завышенные сборы за ту же простую заявку.',
      },
    ],
    ctaTitle: 'Позвольте нам помочь с практическими деталями',
    ctaBody: 'После одобрения вашей ETA наша команда может спланировать маршрут точно под ваши даты поездки, с встречей в аэропорту и частным водителем-гидом с момента приземления.',
    ctaLabel: 'Спланировать поездку с нами',
    relatedTours: [
      { pageId: 'tour7', label: '7-дневный частный тур по Шри-Ланке' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Сигирия' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Гид по безопасности в Шри-Ланке' },
      { pageId: 'guideBudget', label: 'Гид по бюджетному путешествию в Шри-Ланке' },
    ],
  },
  nl: {
    h1: 'Sri Lanka Visum-Ratgeber: ETA, Anforderungen und Antragstellung',
    lead: 'Fast jeder Besucher Sri Lankas benötigt vor dem Boarding eine elektronische Reisegenehmigung (ETA) – ein unkomplizierter Online-Vorgang, allerdings mit genug Kleingedrucktem zu Gültigkeit, Verlängerungen und Passregeln, dass es sich lohnt, ihn rechtzeitig vor der Abreise korrekt zu erledigen.',
    heroAlt: 'Reisepass und Reisedokumente für eine Sri-Lanka-Reise vorbereitet',
    sections: [
      {
        title: 'Was die ETA ist und wer eine braucht',
        body: 'Die Electronic Travel Authorisation (ETA) ist Sri Lankas Äquivalent zum Visum bei Einreise, online vor der Reise beantragt und genehmigt, für Tourismus, Geschäft oder Transit. Bürger der meisten Länder benötigen eine ETA; eine kurze Liste von Nationalitäten hat visumfreie Regelungen oder andere Anforderungen – prüfen Sie das offizielle Regierungsportal für Ihren spezifischen Pass, statt es anzunehmen.\n\nBeantragen Sie die ETA nur über die offizielle Sri-Lanka-ETA-Website – Drittanbieter-Seiten, die überhöhte „Servicegebühren“ für denselben Antrag verlangen, sind eine häufige Falle für Erstbesucher.',
      },
      {
        title: 'Wie und wann man den Antrag stellt',
        body: 'Beantragen Sie die ETA online mindestens einige Tage vor der Abreise, obwohl die Genehmigung für unkomplizierte touristische Anträge oft innerhalb von 24 Stunden erfolgt. Sie benötigen Ihre Passdaten, ein Rück- oder Weiterflugticket und eine gültige Kredit- oder Debitkarte für die Gebühr.\n\nDrucken Sie Ihre Genehmigung aus oder speichern Sie eine digitale Kopie, um sie beim Check-in und bei der Einreise vorzuzeigen; Fluggesellschaften haben Passagieren schon das Boarding verweigert, die keinen Nachweis der ETA-Genehmigung vorlegen konnten, obwohl die Einreisebehörde selbst diese elektronisch prüfen kann.',
      },
      {
        title: 'Gültigkeit und Aufenthaltsdauer',
        body: 'Die Standard-Touristen-ETA erlaubt einen ersten Aufenthalt von bis zu 30 Tagen ab Einreisedatum und ist im Allgemeinen innerhalb eines festgelegten Zeitfensters ab dem Genehmigungsdatum gültig – beantragen Sie sie daher nicht viele Monate vor einer flexiblen Reise. Für Reisende, die während ihrer Reise aus- und wieder einreisen möchten, etwa für einen Abstecher auf die Maldiven oder nach Indien, gibt es Mehrfacheinreise-Optionen.\n\nPrüfen Sie den genauen aktuellen Gültigkeitszeitraum und die zulässige Aufenthaltsdauer auf der offiziellen ETA-Seite, bevor Sie Flüge buchen, da sich die Regeln regelmäßig ändern.',
      },
      {
        title: 'Aufenthalt verlängern',
        body: 'Touristische Aufenthalte lassen sich in der Regel über die anfänglichen 30 Tage hinaus verlängern, indem man einen Antrag beim Department of Immigration and Emigration in Colombo oder, wo verfügbar, online stellt – üblicherweise bis zu insgesamt 90 Tagen für touristische Zwecke, bei korrekt beantragter Verlängerung und im Voraus bezahlten Gebühren.\n\nEin Überschreiten der Aufenthaltsdauer ohne genehmigte Verlängerung kann bei der Ausreise zu Strafen und Komplikationen führen – beantragen Sie die Verlängerung daher vor Ablauf Ihrer aktuellen Genehmigung, nicht danach.',
      },
      {
        title: 'Pass- und weitere Einreiseanforderungen',
        body: 'Ihr Reisepass sollte in der Regel noch mindestens sechs Monate über das Einreisedatum hinaus gültig sein, und Sie sollten einen Nachweis für Weiter- oder Rückreise sowie ausreichende Mittel für Ihren Aufenthalt mitführen, da Einreisebeamte diese nach eigenem Ermessen verlangen können. Eine ausgedruckte oder digitale Kopie Ihrer Unterkunftsbuchung ist eine sinnvolle Ergänzung, auch wenn sie selten kontrolliert wird.\n\nPrüfen Sie vor der Reise etwaige aktuell erforderliche Gesundheitsdokumente, da sich die Anforderungen im Laufe der Zeit ändern können und je nach Abflugland variieren.',
      },
      {
        title: 'Häufige Fehler, die man vermeiden sollte',
        body: 'Der Antrag über inoffizielle Drittanbieter-Websites zu überhöhten Preisen ist der häufigste und vermeidbarste Fehler – die offizielle staatliche ETA-Gebühr ist festgelegt, und der Vorgang dauert auf der richtigen Seite nur wenige Minuten. Falsch eingegebene Passdaten, insbesondere Namen, die nicht exakt mit dem Pass übereinstimmen, sind die zweithäufigste Ursache für verzögerte oder abgelehnte Anträge.\n\nDen Antrag bis zum Flughafen aufzuschieben oder anzunehmen, eine gültige ETA aus einer früheren Reise gelte weiterhin, sind beide vermeidbare Probleme: Beantragen Sie für jede Reise stets neu und rechtzeitig im Voraus.',
      },
    ],
    faq: [
      {
        q: 'Brauche ich ein Visum für Sri Lanka?',
        a: 'Fast alle Besucher benötigen eine online vor der Reise beantragte elektronische Reisegenehmigung (ETA); eine kleine Zahl von Nationalitäten hat andere Regelungen – prüfen Sie das offizielle ETA-Portal speziell für Ihren Pass.',
      },
      {
        q: 'Wie lange dauert die ETA-Genehmigung?',
        a: 'Unkomplizierte touristische Anträge werden oft innerhalb von 24 Stunden genehmigt, es ist jedoch sinnvoll, mindestens einige Tage vor der Abreise zu beantragen statt in letzter Minute.',
      },
      {
        q: 'Wie lange darf ich mit einer touristischen ETA in Sri Lanka bleiben?',
        a: 'Die Standard-Touristen-ETA erlaubt einen ersten Aufenthalt von bis zu 30 Tagen, mit Verlängerungen über das Department of Immigration and Emigration in der Regel bis zu insgesamt rund 90 Tagen für touristische Zwecke.',
      },
      {
        q: 'Kann ich mein Sri-Lanka-Visum nach der Einreise verlängern?',
        a: 'Ja – beantragen Sie eine Verlängerung beim Department of Immigration and Emigration in Colombo oder, wo verfügbar, online, bevor Ihre aktuelle Genehmigung abläuft, um Strafen oder Komplikationen zu vermeiden.',
      },
      {
        q: 'Wo sollte ich meine Sri-Lanka-ETA beantragen?',
        a: 'Ausschließlich über die offizielle ETA-Website der srilankischen Regierung. Drittanbieter-Seiten verlangen für denselben unkomplizierten Antrag oft deutlich überhöhte Gebühren.',
      },
    ],
    ctaTitle: 'Lassen Sie uns bei den praktischen Details helfen',
    ctaBody: 'Sobald Ihre ETA genehmigt ist, kann unser Team eine Route rund um Ihre genauen Reisedaten planen – mit Flughafenabholung und einem privaten Fahrer-Guide vom Moment der Landung an.',
    ctaLabel: 'Reise mit uns planen',
    relatedTours: [
      { pageId: 'tour7', label: '7-tägige private Sri-Lanka-Rundreise' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafety', label: 'Sri Lanka Sicherheits-Ratgeber' },
      { pageId: 'guideBudget', label: 'Sri Lanka Budgetreise-Ratgeber' },
    ],
  }
};
