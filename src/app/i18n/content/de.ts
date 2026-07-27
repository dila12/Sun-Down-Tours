import type { Dict } from './types';

/** German (Deutsch) - professionally localized, not literal machine translation. */
export const de: Dict = {
  common: {
    brand: { name: 'Sundown Tours Sri Lanka', short: 'Sundown Tours' },
    nav: {
      home: 'Startseite',
      tours: 'Reisepakete',
      services: 'Leistungen',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    cta: {
      whatsapp: 'WhatsApp',
      exploreTours: 'Touren entdecken',
      viewMore: 'Mehr anzeigen',
      loading: 'Wird geladen...',
      planTour: 'Ihre Sri Lanka Reise planen',
      bookNow: 'Jetzt buchen',
      readMore: 'Mehr erfahren',
      signUp: 'Anmelden',
      sendMessage: 'Nachricht senden',
      viewTour: 'Tour ansehen',
    },
    footer: {
      tagline:
        'Ihr vertrauenswürdiger Reisepartner in Sri Lanka: geführte Touren, Rundreisen und maßgeschneiderte Urlaubserlebnisse mit zuverlässigem Service.',
      followUs: 'Folgen Sie uns',
      servicesTitle: 'Unsere Leistungen',
      quickMenuTitle: 'Schnellmenü',
      contactTitle: 'Kontakt',
      newsletter: 'Newsletter',
      emailPlaceholder: 'Ihre E-Mail',
      rights: 'Alle Rechte vorbehalten.',
      dayTours: 'Sri Lanka Tagestouren',
      multiDayTours: 'Mehrtägige Rundreisen',
      destination: 'Reiseziele',
      packages: 'Reisepakete',
      travelGuides: 'Reiseführer',
      cancellation: 'Stornierungsbedingungen',
      privacy: 'Datenschutz',
    },
    consent: {
      title: 'Ihre Privatsphäre ist uns wichtig',
      subtitle: 'Analyse-Einstellungen',
      message:
        'Wir verwenden optionale Analyse-Cookies, um zu verstehen, wie Besucher unsere Website nutzen, und um unsere Touren und Leistungen zu verbessern. Sie können Analyse-Cookies jederzeit akzeptieren oder ablehnen.',
      privacy: 'Datenschutz',
      accept: 'Akzeptieren',
      reject: 'Ablehnen',
    },
    breadcrumb: { home: 'Startseite' },
    faqTitle: 'Häufig gestellte Fragen',
    language: 'Sprache',
    tourUi: {
      duration: 'Dauer',
      maxPeople: 'Max. Personen',
      price: 'Preis',
      priceBasis: '(auf Basis von 2 Personen)',
      tourType: 'Reiseart',
      overview: 'Tourüberblick',
      highlights: 'Tour-Highlights',
      whoIsFor: 'Für wen diese Tour geeignet ist',
      bestTimeNote: 'Beste Reisezeit',
      plan: 'Reiseverlauf',
      day: 'Tag',
      included: 'Inklusive',
      excluded: 'Nicht inklusive',
      relatedEyebrow: 'Das könnte Ihnen auch gefallen ...',
      relatedTitle: 'Besonders beliebte Touren',
      exploreGraphTitle: 'Diese Reise planen',
      exploreGraphLead: 'Weiter mit Reisezielen, Reiseführern und Restaurants zu dieser Tour.',
      exploreDestinations: 'Reiseziele auf dieser Route',
      exploreGuides: 'Hilfreiche Reiseführer',
      exploreRestaurants: 'Wo essen',
      exploreSimilarTours: 'Ähnliche Touren',
      imageAlt: 'Sri Lanka Reise Foto',
      previewAlt: 'Vorschau des Tourfotos',
    },
    card: {
      perPerson: '/ Person',
      freeCancel: 'Kostenlose Stornierung',
      instantConfirm: 'Sofortige Bestätigung',
      payLater: 'Später bezahlen',
    },
    booking: {
      title: 'Diese Tour buchen',
      freeCancel: 'Kostenlose Stornierung',
      payLater: 'Später bezahlen',
      travelers: 'Reisende',
      travelersWord: 'Reisende',
      date: 'Datum',
      onlineUpToPre: 'Online-Buchung für bis zu',
      onlineUpToPost: 'Reisende',
      travelersInvalid: 'Erforderlich (1–20)',
      dateRequired: 'Datum erforderlich',
      groupTitle: 'Gruppenbuchung',
      groupText:
        'Für Gruppen ab 7 Reisenden ist keine Online-Preisanzeige verfügbar. Unser Team erstellt Ihnen eine individuelle Reiseroute und bietet Ihnen den besten Gruppenpreis.',
      groupHintPre: 'Sofort buchen? Wählen Sie oben',
      groupHintPost: 'Reisende oder weniger.',
      emailTeam: 'Team per E-Mail',
      whatsappUs: 'WhatsApp',
      firstName: 'Vorname',
      firstNamePh: 'Max',
      lastName: 'Nachname',
      lastNamePh: 'Mustermann',
      required: 'Erforderlich',
      email: 'E-Mail',
      emailInvalid: 'Gültige E-Mail erforderlich',
      phone: 'Telefon',
      phoneInvalid: 'Gültige Telefonnummer erforderlich',
      country: 'Land',
      selectCountry: 'Land auswählen',
      countryRequired: 'Land erforderlich',
      total: 'Gesamt',
      payAtDestination: 'Zahlung vor Ort',
      agreeTerms: 'Ich akzeptiere die AGB',
      acceptTermsError: 'Sie müssen die AGB akzeptieren',
      complete: 'Buchung abschließen',
      processing: 'Wird verarbeitet...',
      toastProcessing: 'Ihre Buchung wird verarbeitet...',
      toastPleaseWait: 'Bitte warten',
      toastSuccess: 'Ihre Buchung wurde erfolgreich abgeschlossen!',
      toastConfirmed: 'Buchung bestätigt',
      toastErrorMsg:
        'Bei der Verarbeitung Ihrer Buchung ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
      toastFailed: 'Buchung fehlgeschlagen',
    },
  },

  home: {
    hero: {
      title: 'Sri Lanka Rundreise & Privatreise mit Fahrer',
      subtitle:
        'Entdecken Sie private Sri Lanka Rundreisen mit erfahrenen einheimischen Fahrern und Guides. Erkunden Sie Sigiriya, Ella, Yala, Kandy, Nuwara Eliya, Mirissa und Galle mit maßgeschneiderten Reiserouten für Paare, Familien und Luxusreisende.',
      slide2: 'Unvergessliche Sri Lanka Reisepakete',
      slide3: 'Private Rundreisen durch das schöne Sri Lanka',
      slide4: 'Entdecken Sie Sigiriya, Ella & die Höhepunkte Sri Lankas',
      slide5: 'Sri Lanka Safaris & Abenteuerreisen',
    },
    intro: {
      title: 'Sri Lanka Reisen mit lokalen Experten',
      subtitle: 'Private Touren, Fahrerservice und maßgeschneiderter Urlaub in ganz Sri Lanka.',
      feature1: 'Private Touren',
      feature2: 'Persönliche Fahrer',
      feature3: 'Maßgeschneiderte Pakete',
      feature4: 'Vertrauenswürdige lokale Guides',
    },
    destinations: {
      title: 'Die schönsten Reiseziele Sri Lankas',
      subtitle: 'Entdecken Sie handverlesene Reiseziele mit Luxuserlebnissen in ganz Sri Lanka.',
      explore: 'Touren entdecken',
      exploreAria: 'Touren entdecken für',
      sigiriya: 'Sigiriya',
      sigiriyaAlt: 'Felsenfestung Sigiriya Sri Lanka',
      ella: 'Ella',
      ellaAlt: 'Ella Panoramazugfahrt Sri Lanka',
      yala: 'Yala Safari',
      yalaAlt: 'Safari im Yala-Nationalpark Sri Lanka',
      kandy: 'Kandy',
      kandyAlt: 'Kulturstadt Kandy Sri Lanka',
      dambulla: 'Dambulla',
      dambullaAlt: 'Höhlentempel Dambulla Sri Lanka',
      galle: 'Galle',
      galleAlt: 'Fort von Galle Sri Lanka',
    },
    packages: {
      tag: 'REISEPAKETE',
      title: 'Entdecken Sie unsere besten Touren',
      subtitle: 'Wählen Sie aus unseren beliebtesten Sri Lanka Rundreisen oder gestalten Sie Ihre private Reise.',
      multiDay: 'Mehrtägige Touren',
      day: 'Tagestouren',
    },
    about: {
      tag: 'ÜBER UNS',
      title: 'Ihr vertrauenswürdiger Reiseveranstalter in Sri Lanka',
      p1: 'Sundown Tours Sri Lanka bietet seit 1992 verlässliche Reiseerlebnisse. Mit über drei Jahrzehnten Erfahrung sind wir auf private Touren, maßgeschneiderten Urlaub und Rundreisen mit Fahrer spezialisiert, die genau auf Ihre Wünsche zugeschnitten sind.',
      p2: 'Vom kulturellen Erbe von Sigiriya und Kandy über die landschaftliche Schönheit von Ella und Nuwara Eliya bis zur Tierwelt des Yala-Nationalparks schaffen wir unvergessliche Reisen durch Sri Lanka.',
      gallery1Alt: 'Private Sri Lanka Rundreise mit Sundown Tours',
      gallery2Alt: 'Sri Lanka Reisepakete mit Fahrer-Guide',
    },
    features: {
      f1Title: 'Günstige Sri Lanka Reisepakete',
      f1Desc: 'Günstige private Sri Lanka Rundreisen und maßgeschneiderte Urlaubspakete für jedes Budget.',
      f2Title: 'Professionelle Fahrer-Guides & persönlicher Service',
      f2Desc: 'Erfahrene Fahrer-Guides für Sigiriya, Kandy, Ella, Yala und Galle.',
      f3Title: 'Vertrauenswürdige Sri Lanka Reiseexperten',
      f3Desc: 'Kulturreisen, Safaris, Strandurlaub und private Luxus-Rundreisen.',
    },
    services: {
      eyebrow: 'Sri Lanka Reiseservices',
      title: 'Erstklassige Sri Lanka Touren, Reise- & Fahrerservices',
      lead: 'Komplette Sri Lanka Reiselösungen: private Touren, Rundreisen mit Fahrer, Hotelreservierungen, Zugtickets und maßgeschneiderte Urlaubspakete.',
      s1Title: 'Mehrsprachige private Fahrer-Guides in Sri Lanka',
      s1Desc: 'Professionelle mehrsprachige Fahrer-Guides für individuelle Privatreisen.',
      s2Title: 'Zugtickets & Eintrittskarten',
      s2Desc: 'Zugtickets für Ella, Safari-Buchungen und Eintrittskarten organisieren wir für Sie.',
      s3Title: 'Hotelbuchung & maßgeschneiderte Unterkünfte',
      s3Desc: 'Handverlesene Hotels vom Luxusresort bis zum günstigen Gästehaus.',
    },
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      {
        q: 'Wie buche ich eine private Sri Lanka Rundreise?',
        a: 'Sie können direkt über WhatsApp oder unser Kontaktformular buchen. Wir antworten innerhalb von 24 Stunden mit einer maßgeschneiderten Reiseroute und einem transparenten Angebot.',
      },
      {
        q: 'Ist ein privater Fahrer im Preis enthalten?',
        a: 'Ja. Jedes Sundown Tours Paket beinhaltet einen lizenzierten, englischsprachigen Fahrer-Guide, ein komfortables klimatisiertes Fahrzeug, Kraftstoff und alle Fahrerkosten.',
      },
      {
        q: 'Kann die Reiseroute individuell angepasst werden?',
        a: 'Selbstverständlich. Alle unsere Sri Lanka Reisen sind vollständig maßgeschneidert. Nennen Sie uns Ihre Reisedaten, Interessen und Ihr Budget und wir gestalten die perfekte Route.',
      },
      {
        q: 'Wann ist die beste Reisezeit für Sri Lanka?',
        a: 'Sri Lanka ist ein Ganzjahresziel. Die Süd- und Westküste ist von Dezember bis April am besten, die Ostküste von Mai bis September.',
      },
    ],
  },

  about: {
    header: 'Über uns',
    breadcrumb: 'Über uns',
    eyebrow: 'Über uns',
    title: 'Ihr vertrauenswürdiger Reiseveranstalter in Sri Lanka',
    p1: 'Sundown Tours Sri Lanka ist ein vertrauenswürdiger lokaler Reiseveranstalter für private Sri Lanka Rundreisen, maßgeschneiderte Urlaubspakete und Rundreisen mit Fahrer auf der ganzen Insel.',
    p2: 'Erkunden Sie die Höhepunkte Sri Lankas wie Sigiriya, Kandy, Ella, Nuwara Eliya, Galle und den Yala-Nationalpark. Wir bieten komfortable Fahrzeuge, freundliche Fahrer-Guides und individuelle Reiseerlebnisse für Familien, Paare und Flitterwochenreisende.',
    p3: 'Planen Sie Ihren perfekten Sri Lanka Urlaub mit einem verlässlichen lokalen Reiseveranstalter und genießen Sie sichere, komfortable und unvergessliche Reiseerlebnisse.',
    features: {
      f1Title: 'Günstige Sri Lanka Reisepakete',
      f1Desc:
        'Wir bieten günstige private Sri Lanka Rundreisen, maßgeschneiderte Urlaubspakete und Reisen mit Fahrer für jedes Budget – ohne Kompromisse bei Komfort, Sicherheit und Qualität.',
      f2Title: 'Professionelle Fahrer-Guides & persönlicher Service',
      f2Desc:
        'Unsere erfahrenen Fahrer-Guides und Reiseexperten sorgen für ein sicheres, komfortables und persönliches Sri Lanka Erlebnis und decken Top-Ziele wie Sigiriya, Kandy, Ella, Yala und Galle ab.',
      f3Title: 'Vertrauenswürdige Sri Lanka Reiseexperten',
      f3Desc:
        'Als vertrauenswürdiger lokaler Reiseveranstalter begrüßen wir Reisende aus aller Welt und bieten unvergessliche Kulturreisen, Safaris, Strandurlaube und private Luxus-Rundreisen in Sri Lanka.',
    },
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      {
        q: 'Wie lange ist Sundown Tours bereits in Sri Lanka tätig?',
        a: 'Wir gestalten seit 1992 private Rundreisen in Sri Lanka – mit über 30 Jahren lokaler Erfahrung und tausenden zufriedenen Reisenden aus ganz Europa.',
      },
      {
        q: 'Sind Sie ein lizenzierter lokaler Reiseveranstalter?',
        a: 'Ja, Sundown Tours ist ein lokal registrierter und lizenzierter Reiseveranstalter mit professionellen, staatlich anerkannten Fahrer-Guides.',
      },
      {
        q: 'Welche Sprachen sprechen Ihre Guides?',
        a: 'Unsere Fahrer-Guides sprechen fließend Englisch, und auf Anfrage können wir Guides für weitere europäische Sprachen organisieren.',
      },
    ],
  },

  services: {
    header: 'Unsere Leistungen',
    breadcrumb: 'Leistungen',
    eyebrow: 'Was wir bieten',
    title: 'Sri Lanka Reise- & Fahrerservices',
    lead: 'Von privaten Rundreisen und Tagesausflügen bis zu Hotelreservierungen und Zugtickets kümmern wir uns um jedes Detail Ihres Sri Lanka Urlaubs.',
    items: {
      s1Title: 'Private Sri Lanka Rundreisen',
      s1Desc:
        'Mehrtägige private Rundreisen mit persönlichem Fahrer-Guide durch Kultur, Tierwelt, Bergland und Strände.',
      s2Title: 'Fahrerservice',
      s2Desc: 'Komfortable klimatisierte Fahrzeuge mit lizenziertem englischsprachigem Fahrer für die gesamte Reise.',
      s3Title: 'Maßgeschneiderte Urlaubspakete',
      s3Desc: 'Vollständig individuelle Reiserouten nach Ihren Daten, Interessen, Ihrem Tempo und Budget.',
      s4Title: 'Safari-Touren',
      s4Desc: 'Jeep-Safaris in Yala, Udawalawe und Wilpattu, um Leoparden, Elefanten und exotische Vögel zu sehen.',
      s5Title: 'Hotel- & Unterkunftsbuchung',
      s5Desc: 'Handverlesene Unterkünfte vom Luxusresort bis zum Boutique-Gästehaus zu besten Preisen.',
      s6Title: 'Flughafentransfers & Tagestouren',
      s6Desc: 'Zuverlässiger Flughafentransfer sowie flexible private Tagestouren zu den Top-Attraktionen.',
    },
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      {
        q: 'Was ist im Fahrerservice enthalten?',
        a: 'Unser Fahrerservice umfasst ein modernes klimatisiertes Fahrzeug, einen lizenzierten englischsprachigen Fahrer-Guide, Kraftstoff, Parkgebühren sowie Unterkunft und Verpflegung des Fahrers.',
      },
      {
        q: 'Bieten Sie einen Flughafentransfer an?',
        a: 'Ja, wir bieten einen zuverlässigen Transfer zum und vom internationalen Flughafen Bandaranaike (CMB) als Teil jeder Reise.',
      },
    ],
  },

  tours: {
    header: 'Sri Lanka Reisepakete',
    breadcrumb: 'Reisepakete',
    eyebrow: 'Private Rundreisen',
    title: 'Private Sri Lanka Rundreisen',
    lead: 'Entdecken Sie unsere beliebtesten privaten Sri Lanka Rundreisen – von kurzen 2-Tages-Ausflügen bis zu kompletten 10-tägigen Inselreisen. Jede Reise ist privat, maßgeschneidert und wird von einem erfahrenen Fahrer-Guide begleitet.',
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      {
        q: 'Sind diese Sri Lanka Reisen privat?',
        a: 'Ja, jede Reise ist zu 100 % privat. Sie reisen nur mit Ihrer eigenen Gruppe, Ihrem eigenen Fahrer-Guide und Ihrem eigenen Fahrzeug und können die Route frei anpassen.',
      },
      {
        q: 'Was kostet eine private Sri Lanka Rundreise?',
        a: 'Die Preise hängen von der Personenzahl, der Hotelkategorie und der Saison ab. Kontaktieren Sie uns für ein transparentes, maßgeschneidertes Angebot ohne versteckte Kosten.',
      },
      {
        q: 'Welche Reise eignet sich am besten für Erstbesucher?',
        a: 'Unsere 7- bis 10-tägigen Rundreisen sind ideal für Erstbesucher, da sie Kultur, Tierwelt, Bergland und Strände in einer ausgewogenen Route verbinden.',
      },
    ],
  },

  contact: {
    header: 'Kontakt',
    breadcrumb: 'Kontakt',
    eyebrow: 'Kontaktieren Sie uns',
    title: 'Planen Sie Ihre Sri Lanka Reise',
    lead: 'Erzählen Sie uns von Ihrem Traumurlaub in Sri Lanka und unser lokales Team antwortet innerhalb von 24 Stunden mit einer maßgeschneiderten Reiseroute.',
    form: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      phone: 'Ihre Telefonnummer',
      phonePlaceholder: '712345678',
      countryCode: 'Ländervorwahl',
      message: 'Ihre Nachricht',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet…',
      success: 'Ihre Nachricht wurde erfolgreich gesendet!',
      successToast: 'Nachricht erfolgreich gesendet!',
      error: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
      errorToast: 'Nachricht konnte nicht gesendet werden',
      nameRequired: 'Bitte geben Sie Ihren Namen ein',
      emailRequired: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      phoneRequired: 'Bitte geben Sie eine gültige Telefonnummer ein (7–15 Ziffern)',
      messageRequired: 'Bitte geben Sie Ihre Nachricht ein',
      trustReply: 'Antwort in 24 Std.',
      trustPrivate: 'Private Anfrage',
    },
    infoTitle: 'Kontaktinformationen',
    infoSubtitle: 'Sprechen Sie direkt mit unserem Planungsteam in Sri Lanka.',
    address: 'No 302, Mahawaskaduwa, Waskaduwa, Kalutara North, Sri Lanka',
    responseTime: 'Innerhalb von 24 Stunden über WhatsApp meist schneller',
    labels: {
      headquarters: 'Hauptsitz',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
      email: 'E-Mail',
      hours: 'Geschäftszeiten',
      response: 'Antwortzeit',
    },
    cta: {
      whatsapp: 'Per WhatsApp chatten',
      tripadvisor: 'TripAdvisor-Bewertungen lesen',
      maps: 'In Google Maps öffnen',
    },
    trustTitle: 'Warum Reisende uns wählen',
    trust: {
      experts: 'Lokale Experten aus Sri Lanka',
      tailored: 'Maßgeschneiderte Touren',
      response: 'Schnelle Antwort innerhalb von 24 Stunden',
      travelers: 'Zufriedene Reisende seit 1992',
    },
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      {
        q: 'Wie schnell antworten Sie auf meine Anfrage?',
        a: 'Wir beantworten alle Reiseanfragen innerhalb von 24 Stunden, über WhatsApp meist deutlich schneller.',
      },
      {
        q: 'Kann ich Sie über WhatsApp kontaktieren?',
        a: 'Ja, WhatsApp ist der schnellste Weg, uns zu erreichen. Schreiben Sie uns jederzeit und unser lokales Team hilft Ihnen bei der Reiseplanung.',
      },
    ],
  },

  tour7: {
    header: '7-tägige Sri Lanka Reise',
    breadcrumb: '7-tägige Sri Lanka Reise',
    title: '7-tägige private Sri Lanka Rundreise',
    lead: 'Erleben Sie in sieben Tagen die Höhepunkte Sri Lankas: die Felsenfestung Sigiriya, die heilige Stadt Kandy, das malerische Bergland von Ella und eine unvergessliche Yala-Safari – alles mit Ihrem privaten Fahrer-Guide.',
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      {
        q: 'Was ist in der 7-tägigen Sri Lanka Reise enthalten?',
        a: 'Die Reise umfasst einen privaten Fahrer-Guide, ein klimatisiertes Fahrzeug, alle Transfers und eine flexible Route über Sigiriya, Kandy, Ella und den Yala-Nationalpark. Hotels können in Ihrer bevorzugten Kategorie hinzugefügt werden.',
      },
      {
        q: 'Reichen 7 Tage, um Sri Lanka zu sehen?',
        a: 'Sieben Tage sind eine perfekte Einführung in Sri Lanka und verbinden Kultur, Berglandschaft und eine Safari, ohne dass es hektisch wird.',
      },
      {
        q: 'Kann ich die 7-tägige Reise um einen Strandaufenthalt verlängern?',
        a: 'Ja. Wir können problemlos zusätzliche Nächte an der Süd- oder Westküste für einen entspannten Strandabschluss Ihres Sri Lanka Urlaubs hinzufügen.',
      },
    ],
  },

  cancellation: {
    eyebrow: 'Buchungen & Änderungen',
    h1: 'Stornierungsbedingungen',
    heroText:
      'Diese Seite erklärt, wie Sundown Tours Sri Lanka mit Buchungsänderungen, Anzahlungen und Stornierungen für Privatreisen und Fahrerservices umgeht.',
    lastUpdated: 'Zuletzt aktualisiert: 18. Juli 2026',
    backLink: 'Zurück zur Startseite',
    summaryTitle: 'Auf einen Blick',
    s1: 'Anfragen sind kostenlos \u2014 keine Kosten vor der Bestätigung',
    s2: 'Eine Anzahlung kann erforderlich sein, um Ihre Termine zu sichern',
    s3: 'Kostenlose Stornierung bis 14 Tage vor Reisebeginn',
    s4: 'Kontaktieren Sie uns per WhatsApp oder E-Mail, um Änderungen anzufragen',
    sec1Title: '1. Vor der Bestätigung Ihrer Buchung',
    sec1P1:
      'Eine Anfrage zu senden oder ein Angebot zu erhalten, verpflichtet Sie nicht zur Reise. Sie können jederzeit vor Zahlung einer Anzahlung kostenlos zurücktreten.',
    sec1P2:
      'Wir bestätigen Verfügbarkeit, Reiseroutendetails und den Gesamtpreis schriftlich, bevor wir eine Zahlung anfordern.',
    sec2Title: '2. Anzahlung und Bestätigung',
    sec2P1:
      'Um Ihre bevorzugten Termine, Fahrzeug und Fahrer zu sichern, bitten wir möglicherweise um eine Anzahlung. Betrag und Fälligkeitsdatum werden in Ihrer Buchungsbestätigung klar angegeben.',
    sec2P2:
      'Ihre Reise gilt als bestätigt, sobald wir die vereinbarte Anzahlung erhalten und eine schriftliche Bestätigung senden. Der Restbetrag ist in der Regel vor oder bei Reisebeginn fällig, wie in Ihrer Bestätigung angegeben.',
    sec3Title: '3. Stornierung durch Sie',
    sec3Intro:
      'Wenn Sie eine bestätigte Buchung stornieren müssen, kontaktieren Sie uns bitte so schnell wie möglich. Rückerstattungen richten sich danach, wie weit im Voraus Sie stornieren:',
    tier1Label: '14 Tage oder mehr vor Reisebeginn:',
    tier1Text: 'volle Rückerstattung der geleisteten Anzahlung',
    tier2Label: '7\u201313 Tage vor Reisebeginn:',
    tier2Text: '50 % Rückerstattung der Anzahlung',
    tier3Label: 'Weniger als 7 Tage vor Reisebeginn oder Nichterscheinen:',
    tier3Text: 'die Anzahlung ist nicht erstattungsfähig',
    sec3Note:
      'Bereits angefallene Bank- oder Zahlungsanbietergebühren können von jeder Rückerstattung abgezogen werden. Für Sie vorausbezahlte Kosten bei Dritten (Parktickets, Hotelanzahlungen, Safari-Jeeps usw.) werden nur erstattet, wenn diese Anbieter eine Rückerstattung zulassen.',
    sec4Title: '4. Änderungen Ihrer Buchung',
    sec4P1:
      'Terminänderungen, Routenanpassungen und Änderungen der Gruppengröße sind oft möglich, wenn wir genügend Vorlaufzeit und Verfügbarkeit haben. Kleinere Änderungen, die mehr als 7 Tage vor der Reise vorgenommen werden, sind in der Regel kostenfrei.',
    sec4P2:
      'Größere Änderungen kurz vor Ihrem Reisebeginn oder Änderungen, die eine Umbuchung vorausbezahlter Leistungen erfordern, können zusätzliche Kosten verursachen. Wir erklären Ihnen immer alle Gebühren, bevor Sie die Änderung bestätigen.',
    sec5Title: '5. Stornierung oder Änderungen durch Sundown Tours',
    sec5P1:
      'Wir stornieren bestätigte Reisen nur sehr selten. Sollten wir dies aufgrund einer Fahrzeugpanne, Krankheit des Fahrers oder eines anderen von uns zu verantwortenden Problems tun müssen, bieten wir einen alternativen Fahrer oder Fahrzeug an, verschieben Ihre Termine oder erstatten die für nicht erbrachte Leistungen gezahlten Beträge vollständig.',
    sec6Title: '6. Höhere Gewalt',
    sec6P1:
      'Ereignisse außerhalb unserer angemessenen Kontrolle \u2014 wie schwere Unwetter, Naturkatastrophen, Unruhen, Gesundheitsbeschränkungen oder staatliche Reiseverbote \u2014 können Ihre Reise oder unsere Fähigkeit, bestimmte Routen zu befahren, beeinträchtigen.',
    sec6P2:
      'In solchen Fällen arbeiten wir nach besten Kräften mit Ihnen an einer Umplanung, sofern möglich. Ist eine Reise nicht durchführbar, werden Rückerstattungen fair basierend auf bereits erbrachten Leistungen und nicht rückholbaren Kosten bei Anbietern gehandhabt.',
    sec7Title: '7. Reiseversicherung',
    sec7P1:
      'Wir empfehlen eine Reiseversicherung, die Stornierung, Heilbehandlungskosten und Reiseunterbrechung abdeckt. Versicherungsansprüche werden direkt zwischen Ihnen und Ihrem Versicherer geregelt; wir können bei Bedarf unterstützende Unterlagen bereitstellen.',
    sec8Title: '8. So beantragen Sie eine Änderung oder Stornierung',
    sec8P1:
      'Bitte kontaktieren Sie uns, sobald sich Ihre Pläne ändern. Der schnellste Weg, uns zu erreichen, ist WhatsApp; für schriftliche Nachweise ist E-Mail geeignet.',
    whatsappLabel: 'WhatsApp:',
    emailLabel: 'E-Mail:',
    locationLabel: 'Standort:',
    sec8P2:
      'Geben Sie Ihren Namen, Ihre Reisedaten und Ihre Buchungsreferenz (falls vorhanden) an, damit wir schnell antworten können.',
  },

  testimonials: {
    eyebrow: 'Kundenstimmen',
    title: 'Was unsere Kunden sagen',
    ariaCarousel: 'Kundenstimmen',
    ariaSlide: 'Kundenstimme',
  },

  destinationsHub: {
    h1: 'Reiseziele in Sri Lanka',
    breadcrumb: 'Reiseziele',
    lead: 'Von der Felsenfestung Sigiriya über Yalas Leopardenland bis zum kolonialen Fort von Galle – entdecken Sie die Orte, die jede große Sri-Lanka-Reise prägen.',
    relatedTitle: 'Verwandte Reiseziele',
  },
  guidesHub: {
    h1: 'Sri Lanka Reiseführer',
    breadcrumb: 'Reiseführer',
    lead: 'Praktische, lokal geschriebene Guides zu Visa, Reisezeiten, Wildtieren, Stränden und Reisen mit privatem Fahrer in Sri Lanka.',
    relatedTitle: 'Verwandte Guides',
    cardCta: 'Guide lesen',
    restaurantsTitle: 'Wo essen',
    restaurantLink: 'Sundown Beach Restaurant',
    foodGuideLink: 'Sri-Lanka-Kulinarik-Ratgeber',
  },

  restaurantsExplore: {
    title: 'Nahe Reiseziele & Touren entdecken',
    lead: 'Sundown Beach Restaurant ist unser Partner an der Küste von Waskaduwa kombinieren Sie das Essen mit Zielen an der Südwestküste und Tagestouren.',
    contactCta: 'Private Tour planen',
  },

  bookingSuccess: {
    heroTitle: 'Buchung bestätigt!',
    thankYouPrefix: 'Vielen Dank,',
    emailSentTo: 'Eine Bestätigungs-E-Mail wurde gesendet an',
    tagline: 'Private Sri Lanka Touren',
    confirmedBadge: 'BESTÄTIGT',
    issued: 'Ausgestellt am',
    travelerDetails: 'Reisendenangaben',
    tourDetails: 'Tourdetails',
    paymentSummary: 'Zahlungsübersicht',
    name: 'Name',
    email: 'E-Mail',
    phone: 'Telefon',
    country: 'Land',
    travelDate: 'Reisedatum',
    travelers: 'Reisende',
    personSingular: 'Person',
    personPlural: 'Personen',
    tour: 'Tour',
    duration: 'Dauer',
    tourType: 'Tourtyp',
    payment: 'Zahlung',
    payAtDestination: 'Zahlung vor Ort',
    description: 'Beschreibung',
    qty: 'Anz.',
    amount: 'Betrag',
    tourPackageFallback: 'Reisepaket',
    subtotal: 'Zwischensumme',
    amountPaid: 'Bezahlter Betrag',
    amountDue: 'Offener Betrag',
    presentInvoice:
      'Bitte legen Sie diese Rechnung bei Ankunft vor. Unser Team kontaktiert Sie, falls noch Angaben benötigt werden.',
    thanks: 'Vielen Dank für Ihre Buchung genießen Sie Ihr Sri-Lanka-Abenteuer!',
    printInvoice: 'Rechnung drucken',
    backHome: 'Zur Startseite',
    defaultTravelerName: 'Reisender',
    emptyValue: '—',
  },

  seo: {
    home: {
      title: 'Sri Lanka Rundreise & Privatreise mit Fahrer | Sundown Tours',
      description:
        'Sri Lanka Rundreise privat erleben: maßgeschneiderte Privatreisen mit erfahrenem Fahrer, Safari und Strandurlaub. Jetzt Ihre Sri Lanka Reise planen.',
      keywords: 'Sri Lanka Rundreise, Sri Lanka Privatreise, Sri Lanka Fahrer, Sri Lanka Safari, Sri Lanka Urlaub',
    },
    tours: {
      title: 'Sri Lanka Rundreise Pakete | Private Reisen mit Fahrer',
      description:
        'Entdecken Sie private Sri Lanka Rundreisen für europäische Reisende – maßgeschneiderte Urlaube, privater Fahrer und Luxus-Safaris.',
      keywords: 'Sri Lanka Rundreise, Sri Lanka Reisepakete, Sri Lanka Privatreise, Sri Lanka Urlaub',
    },
    services: {
      title: 'Unsere Leistungen | Sundown Tours Sri Lanka',
      description:
        'Unsere Leistungen: private Touren, maßgeschneiderte Urlaubspakete, Rundreisen mit Fahrer und Tagesausflüge in Sri Lanka.',
      keywords: 'Sri Lanka Fahrer, Sri Lanka Privatreise, Sri Lanka Reisepakete, Sri Lanka Safari',
    },
    about: {
      title: 'Über uns | Vertrauenswürdiger Sri Lanka Reiseveranstalter',
      description:
        'Erfahren Sie mehr über Sundown Tours Sri Lanka, Ihren vertrauenswürdigen lokalen Reiseveranstalter für private Sri Lanka Rundreisen seit 1992.',
      keywords: 'Sri Lanka Reiseveranstalter, Sri Lanka Reiseagentur, Sri Lanka Rundreise',
    },
    contact: {
      title: 'Kontakt | Sri Lanka Rundreise planen | Sundown Tours',
      description:
        'Kontaktieren Sie Sundown Tours für maßgeschneiderte Sri Lanka Rundreisen und private Reisen. Wir antworten innerhalb von 24 Stunden.',
      keywords: 'Sri Lanka Reise buchen, Sri Lanka Privatreise Kontakt, Sri Lanka Fahrer buchen',
    },
    tour7: {
      title: '7 Tage Sri Lanka Rundreise | Kultur, Bergland & Safari',
      description:
        'Erleben Sie Sri Lanka in 7 Tagen: Sigiriya, Kandy, Ella und Yala-Safari mit privatem Fahrer-Guide. Jetzt maßgeschneiderte Rundreise anfragen.',
      keywords: '7 Tage Sri Lanka Rundreise, Sri Lanka 1 Woche, Sri Lanka Privatreise, Sri Lanka Fahrer',
    },
    tour10: {
      title: '10 Tage Sri Lanka Rundreise | Die komplette Inselreise',
      description:
        'Entdecken Sie Sri Lanka in 10 Tagen: Strände, Safaris, Bergland und Kulturstätten mit privatem Fahrer-Guide. Jetzt maßgeschneiderte Rundreise anfragen.',
      keywords: '10 Tage Sri Lanka Rundreise, Sri Lanka 10 Tage, Sri Lanka Privatreise, Sri Lanka Inselrundreise',
    },
    tour8: {
      title: '8 Tage Sri Lanka Rundreise | Wilpattu Safari, Sigiriya, Kandy, Ella & Strand',
      description:
        'Sri Lanka in 8 Tagen privat erleben: Wilpattu-Safari, Anuradhapura, Sigiriya, Kandy, Ella und Strandaufenthalt in Hikkaduwa.',
      keywords: '8 Tage Sri Lanka Rundreise, Sri Lanka 8 Tage, Wilpattu Safari, Sri Lanka Privatreise',
    },
    tour6: {
      title: '6 Tage Sri Lanka Rundreise | Sigiriya, Kandy, Ella & Yala Safari',
      description:
        'Sri Lanka in 6 Tagen privat: Sigiriya, Kandy, das Bergland um Ella, Yala-Safari und malerische Strände mit erfahrenem Fahrer-Guide.',
      keywords: '6 Tage Sri Lanka Rundreise, Sri Lanka 6 Tage, Sigiriya Kandy Ella, Yala Safari',
    },
    tour5: {
      title: '5 Tage Sri Lanka Rundreise | Kultur, Natur & Tierwelt',
      description:
        'Eine ausgewogene 5-tägige Sri Lanka Rundreise mit Kultur, Bergland und Safari-Erlebnis – privat und maßgeschneidert.',
      keywords: '5 Tage Sri Lanka Rundreise, Sri Lanka 5 Tage, Sri Lanka Kurzreise',
    },
    tour4: {
      title: '4 Tage Sri Lanka Rundreise | Höhepunkte & Safari',
      description:
        'Erleben Sie Sri Lanka in 4 Tagen: Sigiriya, Kandy, Ella und Yala-Safari auf einer privaten Rundreise mit Fahrer-Guide.',
      keywords: '4 Tage Sri Lanka Rundreise, Sri Lanka 4 Tage, Sri Lanka Kurztrip',
    },
    tour2ek: {
      title: '2 Tage Sri Lanka Privatreise – Ella, Kandy & Udawalawa | Flughafen- oder Hoteltransfer',
      description:
        'Private 2-Tage-Tour durch Sri Lanka: Udawalawa, Höhepunkte von Ella, Ramboda-Wasserfall, Ambuluwawa-Turm und der Zahntempel in Kandy.',
      keywords: '2 Tage Sri Lanka Tour, Ella Kandy Tour, Sri Lanka Privatreise',
    },
    tour2ey: {
      title: '2 Tage Ella & Yala Safari Privatreise | Sri Lanka Tierwelt erleben',
      description:
        'Private 2-Tage-Tour mit den Höhepunkten von Ella und einer aufregenden Jeep-Safari im Yala-Nationalpark – Leoparden, Elefanten und mehr.',
      keywords: 'Ella Yala Safari, 2 Tage Sri Lanka Safari, Yala Nationalpark',
    },
    ellaDay: {
      title: 'Ella Tagestour | Zugfahrt & Nine Arch Bridge',
      description:
        'Private Ella Tagestour mit Nine Arch Bridge, Little Adam’s Peak und dem Ravana-Wasserfall im Bergland von Sri Lanka.',
      keywords: 'Ella Tagestour, Ella Ausflug, Nine Arch Bridge',
    },
    galleDay: {
      title: 'Galle Tagestour | Galle Fort & Südküste',
      description:
        'Entdecken Sie das Galle Fort, Strände und die Attraktionen der Südküste auf unserer privaten Tagestour.',
      keywords: 'Galle Tagestour, Galle Fort, Südküste Sri Lanka',
    },
    kandyDay: {
      title: 'Kandy Tagestour | Kultur & landschaftliche Höhepunkte',
      description:
        'Erleben Sie die Höhepunkte von Kandy, darunter den Zahntempel und den Königlichen Botanischen Garten, auf einer privaten Tagestour.',
      keywords: 'Kandy Tagestour, Kandy Ausflug, Zahntempel',
    },
    sigiriyaDay: {
      title: 'Sigiriya Tagestour | Antike Felsenfestung',
      description:
        'Erkunden Sie die antike Felsenfestung Sigiriya und ihre Gärten auf einer privaten Tagestour.',
      keywords: 'Sigiriya Tagestour, Sigiriya Felsen, Löwenfelsen',
    },
    destinations: {
      title: 'Sri Lanka Reiseziele | Strände, Tierwelt & Kulturstätten',
      description:
        'Entdecken Sie die schönsten Reiseziele Sri Lankas: Strände, Nationalparks und kulturelle Höhepunkte.',
      keywords: 'Sri Lanka Reiseziele, Sri Lanka Sehenswürdigkeiten',
    },
    guides: {
      title: 'Sri Lanka Reiseführer | Expertentipps & Insiderwissen',
      description:
        'Unsere umfassenden Reiseführer für Sri Lanka mit Expertentipps und praktischen Hinweisen für Ihre Reise.',
      keywords: 'Sri Lanka Reiseführer, Sri Lanka Reisetipps',
    },
    destSigiriya: {
      title: 'Sigiriya Felsenfestung Guide | Aufstieg, Tipps & Tagestouren',
      description:
        'Sigiriya planen: beste Aufstiegszeit, Fresken, Pidurangala, Eintrittstipps und Kombination mit Dambulla oder einer Kulturdreieck-Tour.',
      keywords: 'Sigiriya Sri Lanka, Sigiriya Felsenfestung, Sigiriya besteigen, Sigiriya Tagestour',
    },
    destElla: {
      title: 'Ella Sri Lanka Guide | Nine Arch Bridge, Wanderungen & Bergland',
      description:
        'Ella entdecken: Nine Arch Bridge, Little Adam’s Peak, Teeplantagen und die Panoramazugfahrt – mit Tipps für Tagestour oder Mehrtagesaufenthalt.',
      keywords: 'Ella Sri Lanka, Nine Arch Bridge, Ella Tagestour, Sri Lanka Hochland',
    },
    destYala: {
      title: 'Yala Nationalpark Guide | Safari-Tipps, Wildtiere & beste Reisezeit',
      description:
        'Yala-Safari planen: Leoparden-Chancen, Jeep-Buchung, beste Monate und Kombination mit Ella oder einem Strandaufenthalt an der Südküste.',
      keywords: 'Yala Nationalpark, Yala Safari, Sri Lanka Leoparden, Yala Jeep Safari',
    },
    destKandy: {
      title: 'Kandy Sri Lanka Guide | Zahntempel & Kulturhauptstadt',
      description:
        'Kandy erleben: Zahntempel, Seepromenade, Peradeniya-Gärten und Esala Perahera – plus Tipps zur Kombination mit Ella oder dem Kulturdreieck.',
      keywords: 'Kandy Sri Lanka, Zahntempel Kandy, Kandy Tagestour, Sri Lanka Kultur',
    },
    destDambulla: {
      title: 'Dambulla Höhlentempel Guide | Tipps zum Goldenen Felsentempel',
      description:
        'Dambullas UNESCO-Höhlentempel besuchen: Wandmalereien, Buddha-Statuen, Aufstiegstipps und Kombination mit Sigiriya.',
      keywords: 'Dambulla Höhlentempel, Goldener Tempel Dambulla, Dambulla Sri Lanka',
    },
    destGalle: {
      title: 'Galle Fort Sri Lanka Guide | Wallanlagen, Leuchtturm & Küste',
      description:
        'Galle Fort erkunden: holländische Wallanlagen, Leuchtturm und Boutiquegassen – mit Tipps für eine private Tagestour und die Südküste.',
      keywords: 'Galle Fort, Galle Sri Lanka, Galle Tagestour, UNESCO Galle',
    },
    guideBestTime: {
      title: 'Beste Reisezeit Sri Lanka | Monat-für-Monat Klimaguide',
      description:
        'Wann nach Sri Lanka? Zwei Monsune erklärt, beste Monate nach Region, Safari- und Walbeobachtungszeiten und flexible private Routenplanung.',
      keywords: 'beste Reisezeit Sri Lanka, Sri Lanka Wetter, Sri Lanka Monsun, wann Sri Lanka',
    },
    guideVisa: {
      title: 'Sri Lanka Visum Guide | ETA, Einreise & praktische Tipps',
      description:
        'So funktionieren ETA und Visa on Arrival in Sri Lanka, welche Dokumente Sie brauchen und welche Einreisefehler Sie vermeiden sollten.',
      keywords: 'Sri Lanka Visum, Sri Lanka ETA, Visa on Arrival Sri Lanka, Einreisebestimmungen',
    },
    guidePrivateDriver: {
      title: 'Sri Lanka privater Fahrer | Chauffeur-Touren erklärt',
      description:
        'Warum Reisende einen privaten Fahrer-Guide wählen, was enthalten ist, typische Tagesstrecken und wie Sie eine flexible Rundreise planen.',
      keywords: 'Sri Lanka privater Fahrer, Chauffeur Guide Sri Lanka, Privatreise Sri Lanka',
    },
    guideBudget: {
      title: 'Sri Lanka Budget-Reiseführer | Kosten & Geld-Tipps',
      description:
        'Tagesbudget, Bargeld und Geldautomaten, Trinkgeld und wofür Ihr Geld bei einer Privatreise anfällt praktische Tipps für Reisende.',
      keywords: 'Sri Lanka Budget, Sri Lanka Kosten, Geld Tipps Sri Lanka, Reisebudget',
    },
    guideWildlife: {
      title: 'Sri Lanka Wildlife-Guide | Elefanten, Leoparden & Wale',
      description:
        'Wo Sie Elefanten, Leoparden, Wale und Vögel in Sri Lanka sehen Nationalparks, Jahreszeiten und die besten Beobachtungsorte.',
      keywords: 'Sri Lanka Wildlife, Elefanten Sri Lanka, Leoparden Safari, Walbeobachtung Sri Lanka',
    },
    guideSafari: {
      title: 'Sri Lanka Safari-Guide | Yala, Udawalawe & Jeep-Tipps',
      description:
        'Jeep-Safari planen: Yala vs Udawalawe, Buchungstipps, Parkeintritt und was Sie bei einer morgendlichen oder nachmittäglichen Pirschfahrt erwartet.',
      keywords: 'Sri Lanka Safari, Yala Safari, Udawalawe Jeep Safari, Safari Buchung',
    },
    guideBeaches: {
      title: 'Die besten Strände Sri Lankas | Süd-, West- & Ostküste',
      description:
        'Die passende Küste für Ihre Reisezeit Südküste, Westküste und Ostküste im Vergleich nach Monsun, Surf und ruhigen Buchten.',
      keywords: 'Sri Lanka Strände, beste Strände Sri Lanka, Südküste, Ostküste Sri Lanka',
    },
    guideTeaCountry: {
      title: 'Sri Lanka Tee-Land Guide | Hochland & Plantagen',
      description:
        'Nuwara Eliya, Ella und Teeplantagen im Hochlandagenbesuche, Panoramazüge und Wanderwege in den Bergen.',
      keywords: 'Sri Lanka Tee-Land, Nuwara Eliya, Ella Hochland, Teeplantagen Sri Lanka',
    },
    guideFood: {
      title: 'Sri Lanka Food Guide | Rice & Curry, Gewürze & Street Food',
      description:
        'Sri Lankische Küche: Rice & Curry, Hoppers, Kottu, Gewürze und Street Food Sie probieren sollten und wie Sie bestellen.',
      keywords: 'Sri Lanka Essen, Rice and Curry, Street Food Sri Lanka, sri-lankische Küche',
    },
    guidePacking: {
      title: 'Packliste Sri Lanka | Kleidung & Reise-Utensilien',
      description:
        'Praktische Packliste für Sri Lankaleidung für Hitze und kühles Hochland, Tempelkleidung, Safari-Ausrüstung und Essentials.',
      keywords: 'Packliste Sri Lanka, was einpacken Sri Lanka, Reiseutensilien Sri Lanka',
    },
    guideSafety: {
      title: 'Sri Lanka Reisesicherheit | Tipps für Besucher',
      description:
        'Praktische Sicherheitstipps: Straßenverkehr, Gesundheit, Betrug vermeiden und sicheres Reisen mit privatem Fahrer.',
      keywords: 'Sri Lanka Sicherheit, sicheres Reisen Sri Lanka, Reisetipps Sicherheit',
    },
    cancellation: {
      title: 'Stornierungsbedingungen | Sundown Tours Sri Lanka',
      description:
        'Buchungsänderungen, Anzahlungsregeln und Stornierungsbedingungen für Privatreisen und Chauffeur-Services bei Sundown Tours Sri Lanka.',
      keywords: 'Stornierung, Tour Stornierung Sri Lanka, Buchungsänderungen',
    },
    restaurants: {
      title: 'Restaurants in Sri Lanka | Beste lokale Küche',
      description:
        'Entdecken Sie die besten Restaurants Sri Lankas mit authentischer lokaler Küche und internationalen Gerichten.',
      keywords: 'Restaurants Sri Lanka, Essen in Sri Lanka',
    },
    testimonials: {
      title: 'Kundenbewertungen | Sundown Tours Sri Lanka',
      description:
        'Lesen Sie Bewertungen zufriedener Kunden, die unsere privaten Sri Lanka Rundreisen erlebt haben.',
      keywords: 'Sri Lanka Bewertungen, Erfahrungsberichte Sri Lanka',
    },
    privacy: {
      title: 'Datenschutzerklärung | Sundown Tours Sri Lanka',
      description: 'Lesen Sie die Datenschutz- und Analyse-Cookie-Richtlinie von Sundown Tours Sri Lanka.',
      keywords: 'Datenschutz',
    },
    destColombo: {
      title: "Colombo Sri Lanka Travel Guide | Private Tours",
      description: "Plan Colombo as your arrival hub with private airport transfers and tailor-made Sri Lanka itineraries.",
      keywords: "destColombo",
    },
    destNegombo: {
      title: "Negombo Sri Lanka | Beach Near Airport",
      description: "Stay in Negombo near Bandaranaike Airport before a private Cultural Triangle or west-coast tour.",
      keywords: "destNegombo",
    },
    destBentota: {
      title: "Bentota Sri Lanka | West Coast Beach Holidays",
      description: "Bentota beach holidays with private chauffeur links to Galle and the south coast.",
      keywords: "destBentota",
    },
    destMirissa: {
      title: 'Mirissa Sri Lanka Guide | Walbeobachtung, Strände & Coconut Tree Hill',
      description:
        'Mirissa planen: Walbeobachtungssaison, Coconut Tree Hill, Strände und die Kombination mit Galle Fort auf einer privaten Südküsten-Rundreise.',
      keywords: 'Mirissa Sri Lanka, Mirissa Walbeobachtung, Coconut Tree Hill, Mirissa Strand',
    },
    destNuwaraEliya: {
      title: "Nuwara Eliya Sri Lanka | Tea Country Highlands",
      description: "Nuwara Eliya tea country stays between Kandy and Ella on private hill-country itineraries.",
      keywords: "destNuwaraEliya",
    },
    destAnuradhapura: {
      title: "Anuradhapura Sri Lanka | Ancient Sacred City",
      description: "Explore Anuradhapura with a private driver in Sri Lanka Cultural Triangle itineraries.",
      keywords: "destAnuradhapura",
    },
    destPolonnaruwa: {
      title: "Polonnaruwa Sri Lanka | Medieval Ruins Guide",
      description: "Visit Polonnaruwa ruins on a private Cultural Triangle tour with Sundown Tours.",
      keywords: "destPolonnaruwa",
    },
    destTrincomalee: {
      title: "Trincomalee Sri Lanka | East Coast Beaches",
      description: "Trincomalee east-coast beaches and harbour stops on seasonal private itineraries.",
      keywords: "destTrincomalee",
    },
    destArugamBay: {
      title: "Arugam Bay Sri Lanka | Surf and East Coast",
      description: "Arugam Bay surf town stays linked by private transfer after wildlife or culture days.",
      keywords: "destArugamBay",
    },
    destKalpitiya: {
      title: "Kalpitiya Sri Lanka | Lagoon and Dolphins",
      description: "Kalpitiya lagoon, kitesurf and dolphin trips with private transfers from Negombo.",
      keywords: "destKalpitiya",
    },
    guideWhaleWatching: {
      title: "Whale Watching Sri Lanka | Mirissa Guide",
      description: "Plan Mirissa whale watching on a private south-coast Sri Lanka itinerary.",
      keywords: "guideWhaleWatching",
    },
    guideTrainJourneys: {
      title: "Sri Lanka Train Journeys | Ella and Kandy",
      description: "Scenic Sri Lanka train journeys with private driver station transfers in tea country.",
      keywords: "guideTrainJourneys",
    },
    guideHoneymoon: {
      title: "Sri Lanka Honeymoon Tours | Private Couples Travel",
      description: "Private honeymoon itineraries mixing culture, tea country and beach time.",
      keywords: "guideHoneymoon",
    },
    guideFamilyTours: {
      title: "Sri Lanka Familienreisen | Private Touren mit Kindern",
      description: "Familienfreundliche private Sri-Lanka-Rundreisen mit angenehmem Tempo, Safari-Vormittagen und Erholung am Strand.",
      keywords: "Sri Lanka Familienreise, private Reise mit Kindern, Familiensafari Sri Lanka",
    },
    guideLuxuryTours: {
      title: "Sri Lanka Luxury Tours | Private Chauffeur Travel",
      description: "Luxury private chauffeur tours with boutique hotels across Sri Lanka.",
      keywords: "guideLuxuryTours",
    },
    guideAirportTransfers: {
      title: "Sri Lanka Airport Transfers | Private Pickup",
      description: "Private CMB airport transfers to Negombo, Colombo and your first tour hotel.",
      keywords: "guideAirportTransfers",
    },
    marketGermany: {
      title: "Sri Lanka Tours from Germany | Private Rundreisen",
      description: "Private Sri Lanka tours for travellers from Germany with local chauffeur-guides.",
      keywords: "marketGermany",
    },
    marketFrance: {
      title: "Sri Lanka Tours from France | Circuits Privés",
      description: "Private Sri Lanka circuits for travellers from France with flexible hotels.",
      keywords: "marketFrance",
    },
    marketItaly: {
      title: "Sri Lanka Tours from Italy | Private Travel",
      description: "Tailor-made private Sri Lanka tours for travellers from Italy.",
      keywords: "marketItaly",
    },
    marketSpain: {
      title: "Sri Lanka Tours from Spain | Private Holidays",
      description: "Private Sri Lanka holidays for travellers from Spain with coast and culture.",
      keywords: "marketSpain",
    },
    marketPoland: {
      title: "Sri Lanka Tours from Poland | Private Itineraries",
      description: "Private Sri Lanka itineraries for travellers from Poland.",
      keywords: "marketPoland",
    },
    marketRussia: {
      title: "Sri Lanka Tours from Russia | Private Driver Holidays",
      description: "Private chauffeur holidays in Sri Lanka for travellers from Russia.",
      keywords: "marketRussia",
    },
    marketNetherlands: {
      title: "Sri Lanka Tours from the Netherlands | Privé Rondreizen",
      description: "Private Sri Lanka rondreizen for travellers from the Netherlands.",
      keywords: "marketNetherlands",
    },
    marketUK: {
      title: "Sri Lanka Tours from the UK | Private Holidays",
      description: "Private Sri Lanka holidays for travellers from the United Kingdom.",
      keywords: "marketUK",
    },
    marketAustria: {
      title: "Sri Lanka Tours from Austria | Private Rundreisen",
      description: "Private Sri Lanka Rundreisen for travellers from Austria.",
      keywords: "marketAustria",
    },
    marketSwitzerland: {
      title: "Sri Lanka Tours from Switzerland | Tailor-Made Travel",
      description: "Tailor-made private Sri Lanka travel for visitors from Switzerland.",
      keywords: "marketSwitzerland",
    },
    monthJanuary: {
      title: "Sri Lanka in January | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in Januaryions, weather and private itinerary ideas.",
      keywords: "monthJanuary",
    },
    monthFebruary: {
      title: "Sri Lanka in February | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in February regions, weather and private itinerary ideas.",
      keywords: "monthFebruary",
    },
    monthMarch: {
      title: "Sri Lanka in March | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in Marchns, weather and private itinerary ideas.",
      keywords: "monthMarch",
    },
    monthApril: {
      title: "Sri Lanka in April | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in Aprilegions, weather and private itinerary ideas.",
      keywords: "monthApril",
    },
    monthMay: {
      title: "Sri Lanka in May | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in Mayns, weather and private itinerary ideas.",
      keywords: "monthMay",
    },
    monthJune: {
      title: "Sri Lanka in June | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in Junens, weather and private itinerary ideas.",
      keywords: "monthJune",
    },
    monthJuly: {
      title: "Sri Lanka in July | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in Julyions, weather and private itinerary ideas.",
      keywords: "monthJuly",
    },
    monthAugust: {
      title: "Sri Lanka in August | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in August regions, weather and private itinerary ideas.",
      keywords: "monthAugust",
    },
    monthSeptember: {
      title: "Sri Lanka in September | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in September regions, weather and private itinerary ideas.",
      keywords: "monthSeptember",
    },
    monthOctober: {
      title: "Sri Lanka in October | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in October regions, weather and private itinerary ideas.",
      keywords: "monthOctober",
    },
    monthNovember: {
      title: "Sri Lanka in November | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in November regions, weather and private itinerary ideas.",
      keywords: "monthNovember",
    },
    monthDecember: {
      title: "Sri Lanka in December | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in December regions, weather and private itinerary ideas.",
      keywords: "monthDecember",
    },
    terms: {
      title: "Terms of Service | Sundown Tours Sri Lanka",
      description: "Terms of service for private tours and chauffeur bookings with Sundown Tours Sri Lanka.",
      keywords: "terms",
    },
    bookingPolicy: {
      title: "Booking Policy | Sundown Tours Sri Lanka",
      description: "How deposits, confirmations and booking changes work for Sundown Tours private itineraries.",
      keywords: "bookingPolicy",
    },
    bookingSuccess: {
      title: 'Buchung eingegangen | Sundown Tours Sri Lanka',
      description: 'Vielen Dank für Ihre Sri Lanka Reiseanfrage. Unser Team meldet sich in Kürze bei Ihnen.',
      keywords: '',
    },
  },
};
