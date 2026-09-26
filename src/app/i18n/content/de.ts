import type { Dict } from './types';

/** German (Deutsch) - professionally localized, not literal machine translation. */
export const de: Dict = {
  common: {
    brand: { name: 'Sundown Tours Sri Lanka', short: 'Sundown Tours' },
    nav: {
      home: 'Startseite',
      tours: 'Reisepakete',
      services: 'Leistungen',
      about: 'Uber uns',
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
        'Ihr vertrauenswurdiger Reisepartner in Sri Lanka: gefuhrte Touren, Rundreisen und massgeschneiderte Urlaubserlebnisse mit zuverlassigem Service.',
      followUs: 'Folgen Sie uns',
      servicesTitle: 'Unsere Leistungen',
      quickMenuTitle: 'Schnellmenu',
      contactTitle: 'Kontakt',
      newsletter: 'Newsletter',
      emailPlaceholder: 'Ihre E-Mail',
      rights: 'Alle Rechte vorbehalten.',
      dayTours: 'Sri Lanka Tagestouren',
      multiDayTours: 'Mehrtagige Rundreisen',
      destination: 'Reiseziele',
      packages: 'Reisepakete',
      travelGuides: 'Reisefuhrer',
      cancellation: 'Stornierungsbedingungen',
      privacy: 'Datenschutz',
    },
    consent: {
      title: 'Ihre Privatsphare ist uns wichtig',
      subtitle: 'Analyse Einstellungen',
      message:
        'Wir verwenden optionale Analyse Cookies, um zu verstehen, wie Besucher unsere Website nutzen, und um unsere Touren und Leistungen zu verbessern. Sie konnen Analyse Cookies jederzeit akzeptieren oder ablehnen.',
      privacy: 'Datenschutz',
      accept: 'Akzeptieren',
      reject: 'Ablehnen',
    },
    breadcrumb: { home: 'Startseite' },
    faqTitle: 'Haufig gestellte Fragen',
    language: 'Sprache',
    tourUi: {
      duration: 'Dauer',
      maxPeople: 'Max. Personen',
      price: 'Preis',
      priceBasis: '(auf Basis von 2 Personen)',
      tourType: 'Reiseart',
      overview: 'Touruberblick',
      highlights: 'Tour Highlights',
      whoIsFor: 'Fur wen diese Tour geeignet ist',
      bestTimeNote: 'Beste Reisezeit',
      plan: 'Reiseverlauf',
      day: 'Tag',
      included: 'Inklusive',
      excluded: 'Nicht inklusive',
      relatedEyebrow: 'Das konnte Ihnen auch gefallen ...',
      relatedTitle: 'Besonders beliebte Touren',
      exploreGraphTitle: 'Diese Reise planen',
      exploreGraphLead: 'Weiter mit Reisezielen, Reisefuhrern und Restaurants zu dieser Tour.',
      exploreDestinations: 'Reiseziele auf dieser Route',
      exploreGuides: 'Hilfreiche Reisefuhrer',
      exploreRestaurants: 'Wo essen',
      exploreSimilarTours: 'Ahnliche Touren',
      imageAlt: 'Sri Lanka Reise Foto',
      previewAlt: 'Vorschau des Tourfotos',
    },
    card: {
      perPerson: '/ Person',
      freeCancel: 'Kostenlose Stornierung',
      instantConfirm: 'Sofortige Bestatigung',
      payLater: 'Spater zahlen',
    },
    booking: {
      title: 'Diese Tour buchen',
      freeCancel: 'Kostenlose Stornierung',
      payLater: 'Spater zahlen',
      travelers: 'Reisende',
      travelersWord: 'Reisende',
      date: 'Datum',
      onlineUpToPre: 'Online Buchung fur bis zu',
      onlineUpToPost: 'Reisende',
      travelersInvalid: 'Erforderlich (1 bis 20)',
      dateRequired: 'Datum erforderlich',
      groupTitle: 'Gruppenbuchung',
      groupText:
        'Fur Gruppen ab 7 Reisenden ist keine Online Preisanzeige verfugbar. Unser Team erstellt Ihnen eine individuelle Reiseroute und bietet Ihnen den besten Gruppenpreis.',
      groupHintPre: 'Sofort buchen? Wahlen Sie oben',
      groupHintPost: 'Reisende oder weniger.',
      emailTeam: 'Team per E-Mail',
      whatsappUs: 'WhatsApp',
      firstName: 'Vorname',
      firstNamePh: 'Max',
      lastName: 'Nachname',
      lastNamePh: 'Mustermann',
      required: 'Erforderlich',
      email: 'E-Mail',
      emailInvalid: 'Gultige E-Mail erforderlich',
      phone: 'Telefon',
      phoneInvalid: 'Gultige Telefonnummer erforderlich',
      country: 'Land',
      selectCountry: 'Land auswahlen',
      countryRequired: 'Land erforderlich',
      total: 'Gesamt',
      paymentMethod: 'Zahlungsmethode',
      payAtDestination: 'Spater zahlen (Zahlung vor Ort)',
      agreeTerms: 'Ich akzeptiere die AGB',
      acceptTermsError: 'Sie mussen die AGB akzeptieren',
      complete: 'Buchung abschliessen',
      bookAheadLead: 'Termine fullen sich schnell',
      bookAheadDetail: 'Private Touren sind begrenztsichern Sie sich jetzt Ihren Wunschtermin.',
      demandWarningLead: 'Hohe Nachfrage',
      demandWarningDetail: 'Dieser Tag ist schnell ausgebuchtsichern Sie sich bald Ihren Wunschtermin. Noch online buchbar.',
      oneBookingLeftLead: 'Nur noch 1 Buchung frei',
      oneBookingLeftDetail: 'Dieses Datum ist fast wegjetzt buchen und Ihren Platz sichern.',
      bookingsLeftLead1: 'Nur noch 1 Buchung frei',
      bookingsLeftLead2: 'Nur noch 2 Buchungen frei',
      bookingsLeftLead3: 'Nur noch 3 Buchungen frei',
      bookingsLeftDetail1: 'Dieses Datum ist fast wegjetzt buchen und Ihren Platz sichern.',
      bookingsLeftDetail2: 'Nur noch wenige Buchungen fur dieses Datumbald reservieren.',
      bookingsLeftDetail3: 'Nur noch wenige Buchungen fur dieses Datumbald reservieren.',
      fewSpotsLeft: 'Wenige Platze frei',
      almostFullLead: 'Fast ausgebucht',
      almostFullDetail: 'Dieses Datum fullt sich schnelljetzt buchen und sichern. Noch online buchbar.',
      demandBookSoon: 'Noch online buchbarsichern Sie sich dieses Datum jetzt.',
      softUrgencyLead: 'Beliebte Termine sind schnell weg',
      softUrgencyDetail: 'Private Touren sind an stark nachgefragten Wochentagen fruh ausgebucht.',
      popularDates: 'Beliebte Termine',
      blockedTitle: 'Ausgebucht',
      blockedText:
        'Dieses Abreisedatum ist ausgebucht. Kontaktieren Sie uns fur eine Warteliste oder einen anderen Starttermin.',
      peakTitle: 'Hohe Nachfrage',
      peakText:
        'Samstage sind fur private Mehrtagesreisen oft ausgebucht. Schreiben Sie uns fur aktuelle Verfugbarkeit.',
      confirmLead: 'Vorbehaltlich Bestatigung',
      confirmDetail: 'Wir bestatigen Ihren privaten Fahrer innerhalb von 24 Stunden nach der Buchung.',
      tryAnotherDate: 'Oder wahlen Sie oben ein anderes Datum fur die Online Buchung.',
      processing: 'Wird verarbeitet...',
      toastProcessing: 'Ihre Buchung wird verarbeitet...',
      toastPleaseWait: 'Bitte warten',
      toastSuccess: 'Ihre Buchung wurde erfolgreich abgeschlossen!',
      toastConfirmed: 'Buchung bestatigt',
      toastErrorMsg:
        'Bei der Verarbeitung Ihrer Buchung ist ein Fehler aufgetreten. Bitte versuchen Sie es spater erneut.',
      toastFailed: 'Buchung fehlgeschlagen',
    },
  },

  home: {
    hero: {
      title: 'Sri Lanka Tour und Rundreise | Privater Fahrer aus Deutschland',
      subtitle:
        'Urlaub in sri lanka und urlaub auf sri lanka mit privatem Fahrer. Rundreise, Reisezeit, Strand zum Baden, Ella, Galle und Colombo. Fur Reisende aus Deutschland.',
      slide2: 'Unvergessliche Sri Lanka Reisepakete',
      slide3: 'Private Rundreisen durch das schone Sri Lanka',
      slide4: 'Entdecken Sie Sigiriya, Ella & die Hohepunkte Sri Lankas',
      slide5: 'Sri Lanka Safaris & Abenteuerreisen',
    },
    intro: {
      title: 'Sri Lanka Rundreisen & Urlaubspakete mit lokalen Experten',
      subtitle: 'Urlaub sri lanka, sri lanka reise und rundreise sri lanka: privat mit Fahrer, nicht im Reisebus.',
      feature1: 'Private Touren',
      feature2: 'Personliche Fahrer',
      feature3: 'Massgeschneiderte Pakete',
      feature4: 'Vertrauenswurdige lokale Guides',
    },
    destinations: {
      title: 'Ella Sri Lanka und Galle Sri Lanka',
      subtitle: 'Visit sri lanka tours zu Ella, Galle, Sigiriya, Kandy und Colombo  privat mit Fahrer Guide.',
      explore: 'Touren entdecken',
      exploreAria: 'Touren entdecken fur',
      sigiriya: 'Sigiriya',
      sigiriyaAlt: 'Felsenfestung Sigiriya Sri Lanka',
      ella: 'Ella',
      ellaAlt: 'Ella Panoramazugfahrt Sri Lanka',
      yala: 'Yala Safari',
      yalaAlt: 'Safari im Yala Nationalpark Sri Lanka',
      kandy: 'Kandy',
      kandyAlt: 'Kulturstadt Kandy Sri Lanka',
      dambulla: 'Dambulla',
      dambullaAlt: 'Hohlentempel Dambulla Sri Lanka',
      galle: 'Galle',
      galleAlt: 'Fort von Galle Sri Lanka',
    },
    packages: {
      tag: 'REISEPAKETE',
      title: 'Entdecken Sie unsere besten Touren',
      subtitle: 'Sri Lanka holiday tours, sri lanka private tours und Rundreise Sri Lanka  massgeschneidert aus Deutschland.',
      multiDay: 'Mehrtagige Touren',
      day: 'Tagestouren',
    },
    about: {
      tag: 'UBER UNS',
      title: 'Ihr vertrauenswurdiger Reiseveranstalter in Sri Lanka',
      p1: 'Sundown Tours Sri Lanka bietet seit 1992 verlassliche Reiseerlebnisse. Mit uber drei Jahrzehnten Erfahrung sind wir auf private Touren, massgeschneiderten Urlaub und Rundreisen mit Fahrer spezialisiert, die genau auf Ihre Wunsche zugeschnitten sind.',
      p2: 'Vom kulturellen Erbe von Sigiriya und Kandy uber die landschaftliche Schonheit von Ella und Nuwara Eliya bis zur Tierwelt des Yala Nationalparks schaffen wir unvergessliche Reisen durch Sri Lanka.',
      gallery1Alt: 'Private Sri Lanka Rundreise mit Sundown Tours',
      gallery2Alt: 'Sri Lanka Reisepakete mit Fahrer Guide',
    },
    features: {
      f1Title: 'Gunstige Sri Lanka Reisepakete',
      f1Desc: 'Gunstige private Sri Lanka Rundreisen und massgeschneiderte Urlaubspakete fur jedes Budget.',
      f2Title: 'Professionelle Fahrer Guides und personlicher Service',
      f2Desc: 'Erfahrene Fahrer Guides fur Sigiriya, Kandy, Ella, Yala und Galle.',
      f3Title: 'Vertrauenswurdige Sri Lanka Reiseexperten',
      f3Desc: 'Kulturreisen, Safaris, Strandurlaub und private Luxus Rundreisen.',
    },
    services: {
      eyebrow: 'Sri Lanka Reiseservices',
      title: 'Erstklassige Sri Lanka Touren, Reise und Fahrerservice',
      lead: 'Komplette Sri Lanka Reiselosungen: private Touren, Rundreisen mit Fahrer, Hotelreservierungen, Zugtickets und massgeschneiderte Urlaubspakete.',
      s1Title: 'Mehrsprachige private Fahrer Guides in Sri Lanka',
      s1Desc: 'Professionelle mehrsprachige Fahrer Guides fur individuelle Privatreisen.',
      s2Title: 'Zugtickets & Eintrittskarten',
      s2Desc: 'Zugtickets fur Ella, Safari Buchungen und Eintrittskarten organisieren wir fur Sie.',
      s3Title: 'Hotelbuchung & massgeschneiderte Unterkunfte',
      s3Desc: 'Handverlesene Hotels vom Luxusresort bis zum gunstigen Gastehaus.',
    },
    faqTitle: 'Haufig gestellte Fragen',
    faq: [
      {
        q: 'Wie buche ich eine private Sri Lanka Rundreise?',
        a: 'Sie konnen direkt uber WhatsApp oder unser Kontaktformular buchen. Wir antworten innerhalb von 24 Stunden mit einer massgeschneiderten Reiseroute und einem transparenten Angebot.',
      },
      {
        q: 'Sind Fahrer und Fahrzeug in den Reisepaketen enthalten?',
        a: 'Ja. Jedes private Urlaubspaket umfasst einen lizenzierten, englischsprachigen Fahrer Guide, ein klimatisiertes Fahrzeug, Kraftstoff und alle Fahrerkosten. Sie teilen das Auto nicht mit anderen Gruppen.',
      },
      {
        q: 'Kann ich meinen Sri Lanka Urlaub individuell planen?',
        a: 'Ja. Alle Rundreisen sind massgeschneidert. Nennen Sie uns Daten, Tempo und Interessen (Safari, Teeland, Strande, Familie)  wir bauen die Route darum herum.',
      },
      {
        q: 'Wann ist die beste Reisezeit fur Sri Lanka aus Europa?',
        a: 'Sri Lanka ist ein Ganzjahresziel. Sud und Westkuste sind von Dezember bis April am besten, die Ostkuste meist von Mai bis September. Wir planen die Privatreise nach dem Monsun Ihres Reisemonats.',
      },
      {
        q: 'Welches Reisepaket eignet sich fur Erstbesucher?',
        a: 'Die meisten Gaste aus Deutschland, Osterreich und der Schweiz wahlen 7, 8 oder 10 Tage: Kulturdreieck (Sigiriya, Kandy), Bergland (Ella, Nuwara Eliya), Safari und Strandabschluss.',
      },
      {
        q: 'Bieten Sie Sri Lanka Urlaub fur Reisende aus Europa an?',
        a: 'Ja. Wir planen private Rundreisen mit Fahrer fur Gaste aus Deutschland, der Schweiz, Osterreich und ganz Europa, mit englischsprachigen Fahrer Guides und WhatsApp Planung vor dem Flug.',
      },
      {
        q: 'Bieten Sie Sri Lanka private tours aus Deutschland an?',
        a: 'Ja. Sundown Tours ist visit sri lanka tours vor Ort: sri lanka tour und sri lanka holiday tours als private Rundreise mit Fahrer, nicht als Hubschrauber Tour und nicht als Flugticket.',
      },
      {
        q: 'Welche Uhrzeit hat Sri Lanka und welche Sprache spricht man?',
        a: 'Uhrzeit Sri Lanka ist UTC+5:30 (sri lanka time). Sprache Sri Lanka: Singhalesisch und Tamilisch sind Amtssprachen, im Tourismus wird Englisch gesprochen. Deutschsprachige Planung machen wir per WhatsApp.',
      },
      {
        q: 'Welche Sprache spricht man in Sri Lanka?',
        a: 'Singhalesisch und Tamilisch sind Amtssprachen. Im Tourismus spricht man Englisch. Planung auf Deutsch vor der Reise per WhatsApp.',
      },
      {
        q: 'Wie spat ist es in Sri Lanka?',
        a: 'Time in sri lanka ist UTC+5:30. Gegenuber Deutschland sind das 4,5 Stunden im Winter und 3,5 Stunden in der Sommerzeit.',
      },
      {
        q: 'Wie lange fliegt man nach Sri Lanka?',
        a: 'Ab Frankfurt etwa 9,5 bis 11 Stunden in der Luft, plus Umsteigen. Wir verkaufen keine Tickets (kein sri lanka airlines Shop). Wir planen Abholung am Flughafen nach Ihrer Landung.',
      },
      {
        q: 'Kann ich Euro in Sri Lanka Rupien wechseln?',
        a: 'Ja. Euro in sri lanka rupien wechseln Sie an Banken, Wechselstuben oder per Automat in Rupien. 1 euro in sri lanka rupees ist ein Tageskurs, den wir nicht als Live Ticker fuhren. Rundreise Preise nennen wir klar vorab.',
      },
      {
        q: 'Wie lautet der heutige Name von Ceylon?',
        a: 'Heutiger name von ceylon ist Sri Lanka. Ceylon land, sri lanka ceylon und ceylon sri lanka sind dieselbe Insel. Ceylon tee trinken Sie im Hochland, ceylon zimt sehen Sie im Gewurzgarten auf der Rundreise.',
      },
      {
        q: 'Wie ist die aktuelle Lage in Sri Lanka?',
        a: 'Sri lanka aktuelle lage fur Urlaubsrouten: bei normaler Vorsicht und privatem Fahrer in der Regel gut bereisbar. Vor dem Flug die Hinweise des Auswartigen Amts lesen.',
      },
      {
        q: 'Was kostet Urlaub Sri Lanka?',
        a: 'Urlaub sri lanka kosten und sri lanka urlaub kosten hangen von Personen, Hotels und Saison ab. Eine private Rundreise mit Fahrer und Mittelklasse Hotels liegt oft deutlich unter einer reinen All Inclusive Resort Woche plus Inlandsfluge. Wir nennen ein klares Angebot.',
      },
      {
        q: 'Ist Sri Lanka Urlaub all inclusive?',
        a: 'Urlaub sri lanka all inclusive im Resort Sinne ist ein anderes Produkt. Wir machen sri lanka pauschalreise privat: Fahrer, Auto, oft Hotels in Halbpension, plus Strandnachte zum Baden. Kein TUI Bus, kein Check24 Flugshop.',
      },
      {
        q: 'Wie lange sollte eine Rundreise Sri Lanka 2 Wochen sein?',
        a: 'Rundreise sri lanka 2 wochen (10 bis 14 Tage vor Ort) verbindet Kultur, Teeland, Safari und Baden. Sieben Tage reichen fur die Klassiker, wirken aber gedrungener.',
      },
      {
        q: 'Ist Sri Lanka Urlaub gefahrlich?',
        a: 'Sri lanka urlaub gefahrlich: auf den Standardrouten bei privatem Fahrer in der Regel nicht. Vorsicht im Verkehr und vor Tempel Betrug. Auswartiges Amt vor dem Flug lesen.',
      },
      {
        q: 'Geht Sri Lanka mit Kindern?',
        a: 'Ja. Sri lanka mit kindern funktioniert mit kurzen Etappen, Pool, Safari Vormittag und Strand. Private Tour, kein Reisebus.',
      },
    ],
  },

  about: {
    header: 'Uber uns',
    breadcrumb: 'Uber uns',
    eyebrow: 'Uber uns',
    title: 'Ihr vertrauenswurdiger Reiseveranstalter in Sri Lanka',
    p1: 'Sundown Tours Sri Lanka ist ein vertrauenswurdiger lokaler Reiseveranstalter fur private Sri Lanka Rundreisen, massgeschneiderte Urlaubspakete und Rundreisen mit Fahrer auf der ganzen Insel.',
    p2: 'Erkunden Sie die Hohepunkte Sri Lankas wie Sigiriya, Kandy, Ella, Nuwara Eliya, Galle und den Yala Nationalpark. Wir bieten komfortable Fahrzeuge, freundliche Fahrer Guides und individuelle Reiseerlebnisse fur Familien, Paare und Flitterwochenreisende.',
    p3: 'Planen Sie Ihren perfekten Sri Lanka Urlaub mit einem verlasslichen lokalen Reiseveranstalter und geniessen Sie sichere, komfortable und unvergessliche Reiseerlebnisse.',
    features: {
      f1Title: 'Gunstige Sri Lanka Reisepakete',
      f1Desc:
        'Wir bieten gunstige private Sri Lanka Rundreisen, massgeschneiderte Urlaubspakete und Reisen mit Fahrer fur jedes Budget  ohne Kompromisse bei Komfort, Sicherheit und Qualitat.',
      f2Title: 'Professionelle Fahrer Guides & personlicher Service',
      f2Desc:
        'Unsere erfahrenen Fahrer Guides und Reiseexperten sorgen fur ein sicheres, komfortables und personliches Sri Lanka Erlebnis und decken Top Ziele wie Sigiriya, Kandy, Ella, Yala und Galle ab.',
      f3Title: 'Vertrauenswurdige Sri Lanka Reiseexperten',
      f3Desc:
        'Als vertrauenswurdiger lokaler Reiseveranstalter begrussen wir Reisende aus aller Welt und bieten unvergessliche Kulturreisen, Safaris, Strandurlaube und private Luxus Rundreisen in Sri Lanka.',
    },
    faqTitle: 'Haufig gestellte Fragen',
    faq: [
      {
        q: 'Wie lange ist Sundown Tours bereits in Sri Lanka tatig?',
        a: 'Wir gestalten seit 1992 private Rundreisen in Sri Lanka  mit uber 30 Jahren lokaler Erfahrung und tausenden zufriedenen Reisenden aus ganz Europa.',
      },
      {
        q: 'Sind Sie ein lizenzierter lokaler Reiseveranstalter?',
        a: 'Ja, Sundown Tours ist ein lokal registrierter und lizenzierter Reiseveranstalter mit professionellen, staatlich anerkannten Fahrer Guides.',
      },
      {
        q: 'Welche Sprachen sprechen Ihre Guides?',
        a: 'Unsere Fahrer Guides sprechen fliessend Englisch, und auf Anfrage konnen wir Guides fur weitere europaische Sprachen organisieren.',
      },
    ],
  },

  services: {
    header: 'Unsere Leistungen',
    breadcrumb: 'Leistungen',
    eyebrow: 'Was wir bieten',
    title: 'Sri Lanka Reise und Fahrerservice',
    lead: 'Von privaten Rundreisen und Tagesausflugen bis zu Hotelreservierungen und Zugtickets kummern wir uns um jedes Detail Ihres Sri Lanka Urlaubs.',
    items: {
      s1Title: 'Private Sri Lanka Rundreisen',
      s1Desc:
        'Mehrtagige private Rundreisen mit personlichem Fahrer Guide durch Kultur, Tierwelt, Bergland und Strande.',
      s2Title: 'Fahrerservice',
      s2Desc: 'Komfortable klimatisierte Fahrzeuge mit lizenziertem englischsprachigem Fahrer fur die gesamte Reise.',
      s3Title: 'Massgeschneiderte Urlaubspakete',
      s3Desc: 'Vollstandig individuelle Reiserouten nach Ihren Daten, Interessen, Ihrem Tempo und Budget.',
      s4Title: 'Safari Touren',
      s4Desc: 'Jeep Safaris in Yala, Udawalawe und Wilpattu, um Leoparden, Elefanten und exotische Vogel zu sehen.',
      s5Title: 'Hotel und Unterkunftsbuchung',
      s5Desc: 'Handverlesene Unterkunfte vom Luxusresort bis zum Boutique Gastehaus zu besten Preisen.',
      s6Title: 'Flughafentransfers & Tagestouren',
      s6Desc: 'Zuverlassiger Flughafentransfer sowie flexible private Tagestouren zu den Top Attraktionen.',
    },
    faqTitle: 'Haufig gestellte Fragen',
    faq: [
      {
        q: 'Was ist im Fahrerservice enthalten?',
        a: 'Unser Fahrerservice umfasst ein modernes klimatisiertes Fahrzeug, einen lizenzierten englischsprachigen Fahrer Guide, Kraftstoff, Parkgebuhren sowie Unterkunft und Verpflegung des Fahrers.',
      },
      {
        q: 'Bieten Sie einen Flughafentransfer an?',
        a: 'Ja, wir bieten einen zuverlassigen Transfer zum und vom internationalen Flughafen Bandaranaike (CMB) als Teil jeder Reise.',
      },
    ],
  },

  tours: {
    header: 'Sri Lanka Reisepakete',
    breadcrumb: 'Reisepakete',
    eyebrow: 'Private Rundreisen',
    title: 'Sri Lanka Tour, Holiday Tours und Rundreise',
    lead: 'Urlaub in sri lanka und urlaub auf sri lanka: Rundreise, sri lanka reise, sri lanka hotel auf Wunsch, Strand zum Baden. Private Pauschalreise mit Fahrer, keine Flugtickets, kein TUI Bus.',
    faqTitle: 'Haufig gestellte Fragen',
    faq: [
      {
        q: 'Sind diese Sri Lanka Reisen privat?',
        a: 'Ja, jede Reise ist zu 100 % privat. Sie reisen nur mit Ihrer eigenen Gruppe, Ihrem eigenen Fahrer Guide und Ihrem eigenen Fahrzeug und konnen die Route frei anpassen.',
      },
      {
        q: 'Was kostet eine private Sri Lanka Rundreise?',
        a: 'Die Preise hangen von der Personenzahl, der Hotelkategorie und der Saison ab. Kontaktieren Sie uns fur ein transparentes, massgeschneidertes Angebot ohne versteckte Kosten.',
      },
      {
        q: 'Welche Reise eignet sich am besten fur Erstbesucher?',
        a: 'Unsere 7- bis 10 tagigen Rundreisen sind ideal fur Erstbesucher, da sie Kultur, Tierwelt, Bergland und Strande in einer ausgewogenen Route verbinden.',
      },
      {
        q: 'Kann ich nur einen privaten Fahrer buchen, ohne Hotelpaket?',
        a: 'Ja. Wahlen Sie ein komplettes Reisepaket mit Hotels oder nur den Fahrer Guide, wenn Sie Unterkunfte selbst buchen. Beide Varianten beinhalten einen lizenzierten privaten Fahrer Guide.',
      },
      {
        q: 'Was bedeuten urlaub sri lanka kosten?',
        a: 'Sri lanka urlaub kosten: Fahrer, Auto, Kraftstoff, oft Hotels. Safari und Eintritte extra oder im Angebot. Schreiben Sie uns fur eine Zahl statt eines Werbepreises.',
      },
      {
        q: 'Bieten Sie Rundreise Sri Lanka und Baden?',
        a: 'Ja. Rundreise sri lanka und baden heisst: Kultur und Safari zuerst, dann zwei oder drei Strandnachte an West oder Sudkuste. Das ist keine reine All Inclusive Woche.',
      },
      {
        q: 'Ist das eine sri lanka pauschalreise?',
        a: 'Eine private sri lanka pauschalreise: Route, Fahrer und Hotel nach Wahl. Kein Check24, kein TUI Katalog, kein Flug im Preis. Urlaub sri lanka buchen Sie direkt bei uns vor Ort.',
      },
    ],
  },

  contact: {
    header: 'Kontakt',
    breadcrumb: 'Kontakt',
    eyebrow: 'Kontaktieren Sie uns',
    title: 'Planen Sie Ihre Sri Lanka Reise',
    lead: 'Erzahlen Sie uns von Ihrem Traumurlaub in Sri Lanka und unser lokales Team antwortet innerhalb von 24 Stunden mit einer massgeschneiderten Reiseroute.',
    form: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      phone: 'Ihre Telefonnummer',
      phonePlaceholder: '712345678',
      countryCode: 'Landervorwahl',
      message: 'Ihre Nachricht',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet…',
      success: 'Ihre Nachricht wurde erfolgreich gesendet!',
      successToast: 'Nachricht erfolgreich gesendet!',
      error: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es spater erneut.',
      errorToast: 'Nachricht konnte nicht gesendet werden',
      nameRequired: 'Bitte geben Sie Ihren Namen ein',
      emailRequired: 'Bitte geben Sie eine gultige E-Mail-Adresse ein',
      phoneRequired: 'Bitte geben Sie eine gultige Telefonnummer ein (7 bis 15 Ziffern)',
      messageRequired: 'Bitte geben Sie Ihre Nachricht ein',
      trustReply: 'Antwort in 24 Std.',
      trustPrivate: 'Private Anfrage',
    },
    infoTitle: 'Kontaktinformationen',
    infoSubtitle: 'Sprechen Sie direkt mit unserem Planungsteam in Sri Lanka.',
    address: 'No 302, Mahawaskaduwa, Waskaduwa, Kalutara North, Sri Lanka',
    responseTime: 'Innerhalb von 24 Stunden uber WhatsApp meist schneller',
    labels: {
      headquarters: 'Hauptsitz',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
      email: 'E-Mail',
      hours: 'Geschaftszeiten',
      response: 'Antwortzeit',
    },
    cta: {
      whatsapp: 'Per WhatsApp chatten',
      tripadvisor: 'TripAdvisor Bewertungen lesen',
      maps: 'In Google Maps offnen',
    },
    trustTitle: 'Warum Reisende uns wahlen',
    trust: {
      experts: 'Lokale Experten aus Sri Lanka',
      tailored: 'Massgeschneiderte Touren',
      response: 'Schnelle Antwort innerhalb von 24 Stunden',
      travelers: 'Zufriedene Reisende seit 1992',
    },
    faqTitle: 'Haufig gestellte Fragen',
    faq: [
      {
        q: 'Wie schnell antworten Sie auf meine Anfrage?',
        a: 'Wir beantworten alle Reiseanfragen innerhalb von 24 Stunden, uber WhatsApp meist deutlich schneller.',
      },
      {
        q: 'Kann ich Sie uber WhatsApp kontaktieren?',
        a: 'Ja, WhatsApp ist der schnellste Weg, uns zu erreichen. Schreiben Sie uns jederzeit und unser lokales Team hilft Ihnen bei der Reiseplanung.',
      },
    ],
  },

  tour7: {
    header: '7 tagige Sri Lanka Reise',
    breadcrumb: '7 tagige Sri Lanka Reise',
    title: '7 tagige private Sri Lanka Rundreise',
    lead: 'Erleben Sie in sieben Tagen die Hohepunkte Sri Lankas: die Felsenfestung Sigiriya, die heilige Stadt Kandy, das malerische Bergland von Ella und eine unvergessliche Yala Safari  alles mit Ihrem privaten Fahrer Guide.',
    faqTitle: 'Haufig gestellte Fragen',
    faq: [
      {
        q: 'Was ist in der 7 tagigen Sri Lanka Reise enthalten?',
        a: 'Die Reise umfasst einen privaten Fahrer Guide, ein klimatisiertes Fahrzeug, alle Transfers und eine flexible Route uber Sigiriya, Kandy, Ella und den Yala Nationalpark. Hotels konnen in Ihrer bevorzugten Kategorie hinzugefugt werden.',
      },
      {
        q: 'Reichen 7 Tage, um Sri Lanka zu sehen?',
        a: 'Sieben Tage sind eine perfekte Einfuhrung in Sri Lanka und verbinden Kultur, Berglandschaft und eine Safari, ohne dass es hektisch wird.',
      },
      {
        q: 'Kann ich die 7 tagige Reise um einen Strandaufenthalt verlangern?',
        a: 'Ja. Wir konnen problemlos zusatzliche Nachte an der Sud- oder Westkuste fur einen entspannten Strandabschluss Ihres Sri Lanka Urlaubs hinzufugen.',
      },
    ],
  },

  cancellation: {
    eyebrow: 'Buchungen & Anderungen',
    h1: 'Stornierungsbedingungen',
    heroText:
      'Diese Seite erklart, wie Sundown Tours Sri Lanka mit Buchungsanderungen, Anzahlungen und Stornierungen fur Privatreisen und Fahrerservices umgeht.',
    lastUpdated: 'Zuletzt aktualisiert: 18. Juli 2026',
    backLink: 'Zuruck zur Startseite',
    summaryTitle: 'Auf einen Blick',
    s1: 'Anfragen sind kostenlos \u2014 keine Kosten vor der Bestatigung',
    s2: 'Eine Anzahlung kann erforderlich sein, um Ihre Termine zu sichern',
    s3: 'Kostenlose Stornierung bis 14 Tage vor Reisebeginn',
    s4: 'Kontaktieren Sie uns per WhatsApp oder E-Mail, um Anderungen anzufragen',
    sec1Title: '1. Vor der Bestatigung Ihrer Buchung',
    sec1P1:
      'Eine Anfrage zu senden oder ein Angebot zu erhalten, verpflichtet Sie nicht zur Reise. Sie konnen jederzeit vor Zahlung einer Anzahlung kostenlos zurucktreten.',
    sec1P2:
      'Wir bestatigen Verfugbarkeit, Reiseroutendetails und den Gesamtpreis schriftlich, bevor wir eine Zahlung anfordern.',
    sec2Title: '2. Anzahlung und Bestatigung',
    sec2P1:
      'Um Ihre bevorzugten Termine, Fahrzeug und Fahrer zu sichern, bitten wir moglicherweise um eine Anzahlung. Betrag und Falligkeitsdatum werden in Ihrer Buchungsbestatigung klar angegeben.',
    sec2P2:
      'Ihre Reise gilt als bestatigt, sobald wir die vereinbarte Anzahlung erhalten und eine schriftliche Bestatigung senden. Der Restbetrag ist in der Regel vor oder bei Reisebeginn fallig, wie in Ihrer Bestatigung angegeben.',
    sec3Title: '3. Stornierung durch Sie',
    sec3Intro:
      'Wenn Sie eine bestatigte Buchung stornieren mussen, kontaktieren Sie uns bitte so schnell wie moglich. Ruckerstattungen richten sich danach, wie weit im Voraus Sie stornieren:',
    tier1Label: '14 Tage oder mehr vor Reisebeginn:',
    tier1Text: 'volle Ruckerstattung der geleisteten Anzahlung',
    tier2Label: '7\u201313 Tage vor Reisebeginn:',
    tier2Text: '50 % Ruckerstattung der Anzahlung',
    tier3Label: 'Weniger als 7 Tage vor Reisebeginn oder Nichterscheinen:',
    tier3Text: 'die Anzahlung ist nicht erstattungsfahig',
    sec3Note:
      'Bereits angefallene Bank- oder Zahlungsanbietergebuhren konnen von jeder Ruckerstattung abgezogen werden. Fur Sie vorausbezahlte Kosten bei Dritten (Parktickets, Hotelanzahlungen, Safari Jeeps usw.) werden nur erstattet, wenn diese Anbieter eine Ruckerstattung zulassen.',
    sec4Title: '4. Anderungen Ihrer Buchung',
    sec4P1:
      'Terminanderungen, Routenanpassungen und Anderungen der Gruppengrosse sind oft moglich, wenn wir genugend Vorlaufzeit und Verfugbarkeit haben. Kleinere Anderungen, die mehr als 7 Tage vor der Reise vorgenommen werden, sind in der Regel kostenfrei.',
    sec4P2:
      'Grossere Anderungen kurz vor Ihrem Reisebeginn oder Anderungen, die eine Umbuchung vorausbezahlter Leistungen erfordern, konnen zusatzliche Kosten verursachen. Wir erklaren Ihnen immer alle Gebuhren, bevor Sie die Anderung bestatigen.',
    sec5Title: '5. Stornierung oder Anderungen durch Sundown Tours',
    sec5P1:
      'Wir stornieren bestatigte Reisen nur sehr selten. Sollten wir dies aufgrund einer Fahrzeugpanne, Krankheit des Fahrers oder eines anderen von uns zu verantwortenden Problems tun mussen, bieten wir einen alternativen Fahrer oder Fahrzeug an, verschieben Ihre Termine oder erstatten die fur nicht erbrachte Leistungen gezahlten Betrage vollstandig.',
    sec6Title: '6. Hohere Gewalt',
    sec6P1:
      'Ereignisse ausserhalb unserer angemessenen Kontrolle \u2014 wie schwere Unwetter, Naturkatastrophen, Unruhen, Gesundheitsbeschrankungen oder staatliche Reiseverbote \u2014 konnen Ihre Reise oder unsere Fahigkeit, bestimmte Routen zu befahren, beeintrachtigen.',
    sec6P2:
      'In solchen Fallen arbeiten wir nach besten Kraften mit Ihnen an einer Umplanung, sofern moglich. Ist eine Reise nicht durchfuhrbar, werden Ruckerstattungen fair basierend auf bereits erbrachten Leistungen und nicht ruckholbaren Kosten bei Anbietern gehandhabt.',
    sec7Title: '7. Reiseversicherung',
    sec7P1:
      'Wir empfehlen eine Reiseversicherung, die Stornierung, Heilbehandlungskosten und Reiseunterbrechung abdeckt. Versicherungsanspruche werden direkt zwischen Ihnen und Ihrem Versicherer geregelt; wir konnen bei Bedarf unterstutzende Unterlagen bereitstellen.',
    sec8Title: '8. So beantragen Sie eine Anderung oder Stornierung',
    sec8P1:
      'Bitte kontaktieren Sie uns, sobald sich Ihre Plane andern. Der schnellste Weg, uns zu erreichen, ist WhatsApp; fur schriftliche Nachweise ist E-Mail geeignet.',
    whatsappLabel: 'WhatsApp:',
    emailLabel: 'E-Mail:',
    locationLabel: 'Standort:',
    sec8P2:
      'Geben Sie Ihren Namen, Ihre Reisedaten und Ihre Buchungsreferenz (falls vorhanden) an, damit wir schnell antworten konnen.',
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
    lead: 'Von der Felsenfestung Sigiriya uber Yalas Leopardenland bis zum kolonialen Fort von Galle  entdecken Sie die Orte, die jede grosse Sri Lanka Reise pragen.',
    relatedTitle: 'Verwandte Reiseziele',
  },
  guidesHub: {
    h1: 'Sri Lanka Reisefuhrer',
    breadcrumb: 'Reisefuhrer',
    lead: 'Praktische, lokal geschriebene Guides zu Visa, Reisezeiten, Wildtieren, Stranden und Reisen mit privatem Fahrer in Sri Lanka.',
    relatedTitle: 'Verwandte Guides',
    cardCta: 'Guide lesen',
    restaurantsTitle: 'Wo essen',
    restaurantLink: 'Sundown Beach Restaurant',
    foodGuideLink: 'Sri Lanka Kulinarik Ratgeber',
  },

  restaurantsExplore: {
    h1: 'Essen in Sri Lanka: Kuste, Galle Fort und Sundown Beach Restaurant',
    breadcrumb: 'Restaurants',
    intro:
      'Gut essen in Sri Lanka heisst nicht eine einzige „Beste Restaurants“-Liste, sondern die Mahlzeit zur Kuste, zur Uhrzeit und zur Reststrecke nach dem Abendessen passend zu wahlen. Rice and Curry ist das Alltagsgericht im Inland; gegrillter Fisch pragt Sud und Westkuste; Galle Fort mischt koloniale Speisesale mit gutem Kaffee. Diese Seite erklart, wo Privatreisende wirklich essen, und listet danach die komplette Karte des Sundown Beach Restaurant in Waskaduwaunsere Kuchenstation zwischen Colombo und Galle.',
    aroundTitle: 'Essen wahrend einer Rundreise',
    aroundBody:
      'Auf einer Chauffeur Rundreise ist das Mittagessen meist ein Rice and Curry Haus, gewahlt nach Sauberkeit und Tempo, kein langer Gourmetstopp. Das Abendessen ist die echte Wahl: Hotelrestaurant, Strandgrill oder die Stadt, in der Sie ubernachten. Klaren Sie vor ganzer Fisch- oder Krabbenbestellung, ob der Preis pro Kilo oder pro Portion giltdie haufigste Rechnungsuberraschung an der Sudkuste.\n\nVegetarier kommen gut klar, wenn sie Gemusecurries ohne Maledivenfisch verlangen; Veganer sollten das klar sagen. Trinken Sie versiegeltes Wasser. 5 bis 10 % Trinkgeld reichen, wenn Service nicht schon enthalten ist.',
    westTitle: 'Westkuste: Negombo, Kalutara und Waskaduwa',
    westBody:
      'An der Westkuste landen die meisten Europafluge: erstes und letztes Essen einer Reise finden oft hier statt. Negombo hat Touristengrills am Strand; Colombo bietet Hotelrestaurants und einige starke lokale Rice and Curry Stuben. Zwischen Kalutara und Waskaduwa ist der Fang lokalThunfisch, Seer, Garnelen und Krabbeam selben Tag gekocht.\n\nDas Sundown Beach Restaurant liegt auf diesem Abschnitt (Nr. 302, Mahawaskaduwa, Waskaduwa). Gaste unserer Privattouren halten oft fur ein Meeresfruchte Mittagessen oder ein letztes Abendessen vor dem CMB Abflug. Taglich 8:00 bis 22:00 Uhr; Tisch unter +94 70 629 3585.',
    southTitle: 'Sudkuste und Galle Fort',
    southBody:
      'Unawatuna, Mirissa und Tangalle sind am starksten bei schlicht gegrilltem Fisch mit Limette, Chili und Knoblauchbutter. Im Galle Fort servieren umgebaute hollandische Hauser sri lankische Gewurze mit internationaler Technik; Preise steigen innerhalb der Mauern, die Qualitat ist meist zuverlassig. Kombinieren Sie einen Vormittag auf den Wallen mit Mittagessen im Fortoder eine spatere Mahlzeit an der Kuste Kalutara und Waskaduwa, wenn Sie nach Norden zuruckfahren.\n\nFur einen breiteren Food PrimerHoppers, Kottu, Scharfegradelesen Sie unseren Kuchen Guide. Die Karte unten ist die des Sundown Beach Restaurant, keine generische Insel Liste.',
    title: 'Nahe Reiseziele & Touren entdecken',
    lead: 'Das Sundown Beach Restaurant in Waskaduwa lasst sich leicht mit Stopps an der Sudwestkuste und Tagestouren kombinierenGalle Fort, Strande und private Chauffeur Routen.',
    contactCta: 'Private Tour planen',
    faqTitle: 'FAQ Restaurants & Sundown Beach',
    faq: [
      {
        q: 'Ist das Sundown Beach Restaurant auch fur Nicht Hotelgaste offen?',
        a: 'Ja. Es ist ein Kustenrestaurant in Waskaduwa, taglich 8:00 bis 22:00 Uhr. Sie mussen kein Sundown Tours Paket gebucht haben, um einen Tisch zu reservieren.',
      },
      {
        q: 'Wo am Ankunftsabend nach CMB essen?',
        a: 'Die meisten Gaste bleiben bei Negombo oder an der Westkuste (Kalutara/Waskaduwa) und essen lokal, statt noch nach Galle zu fahren. Das Sundown Beach Restaurant ist ein unkomplizierter Meeresfruchte Stopp auf diesem Abschnitt.',
      },
      {
        q: 'Sind Meeresfruchte pro Portion oder pro Kilo?',
        a: 'Im Sundown Beach Restaurant gelten die Listenpreise pro Gericht. Anderswo an der Sudkuste immer Kilo versus Portion klaren, bevor Sie ganzen Fisch oder Krabbe bestellen.',
      },
      {
        q: 'Konnen Restaurantstopps in eine Privattour?',
        a: 'Ja. Nennen Sie Ernahrungsbedurfnisse bei der Buchung. Mittagessen folgt der Fahrzeit; Abendessen kann im Sundown Beach Restaurant sein, wenn Sie an der Westkuste schlafen, oder in Galle Fort / einem Strandort an Sudkustennachten.',
      },
    ],
  },

  bookingSuccess: {
    heroTitle: 'Buchung bestatigt!',
    thankYouPrefix: 'Vielen Dank,',
    emailSentTo: 'Eine Bestatigungs-E-Mail wurde gesendet an',
    tagline: 'Private Sri Lanka Touren',
    confirmedBadge: 'BESTATIGT',
    issued: 'Ausgestellt am',
    travelerDetails: 'Reisendenangaben',
    tourDetails: 'Tourdetails',
    paymentSummary: 'Zahlungsubersicht',
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
    payment: 'Zahlungsmethode',
    payAtDestination: 'Spater zahlen (Zahlung vor Ort)',
    description: 'Beschreibung',
    qty: 'Anz.',
    amount: 'Betrag',
    tourPackageFallback: 'Reisepaket',
    subtotal: 'Zwischensumme',
    amountPaid: 'Bezahlter Betrag',
    amountDue: 'Offener Betrag',
    presentInvoice:
      'Bitte legen Sie diese Rechnung bei Ankunft vor. Unser Team kontaktiert Sie, falls noch Angaben benotigt werden.',
    thanks: 'Vielen Dank fur Ihre Buchung geniessen Sie Ihr Sri Lanka Abenteuer!',
    printInvoice: 'Rechnung drucken',
    backHome: 'Zur Startseite',
    defaultTravelerName: 'Reisender',
    emptyValue: '—',
  },

  seo: {
    home: {
      title: 'Urlaub in Sri Lanka | Private Rundreise aus Deutschland',
      description:
        'Urlaub in sri lanka und urlaub auf sri lanka: Rundreise, Reisezeit, Baden, sri lanka hotel auf Wunsch. Private Tours aus Deutschland seit 1992. Keine Flugtickets.',
      keywords:
        'urlaub sri lanka, sri lanka urlaub, urlaub in sri lanka, urlaub auf sri lanka, sri lanka reise, reise sri lanka, sri lanka reisen, sri lanka rundreise, rundreise sri lanka, sri lanka pauschalreise, urlaub sri lanka buchen, sri lanka hotel, heutiger name von ceylon, ceylon land, sri lanka ceylon, ceylon sri lanka',
    },
    tours: {
      title: 'Rundreise Sri Lanka | 2 Wochen, Baden und Pauschalreise privat',
      description:
        'Rundreise sri lanka 2 wochen, rundreise sri lanka und baden, sri lanka pauschalreise privat. Urlaub sri lanka kosten klar im Angebot. Kein Reisebus.',
      keywords:
        'rundreise sri lanka 2 wochen, sri lanka rundreise 2 wochen, rundreise sri lanka und baden, sri lanka rundreise und baden, sri lanka pauschalreise, urlaub sri lanka kosten, sri lanka urlaub kosten, urlaub sri lanka all inclusive, sri lanka all inclusive, sri lanka hotel, beste reisezeit sri lanka rundreise',
    },
    services: {
      title: 'Private Touren, Fahrer & Urlaubsservice | Sri Lanka',
      description:
        'Unsere Leistungen: private Touren, massgeschneiderte Urlaubspakete, Rundreisen mit Fahrer und Tagesausfluge in Sri Lanka.',
      keywords: 'Sri Lanka Fahrer, Sri Lanka Privatreise, Sri Lanka Reisepakete, Sri Lanka Safari',
    },
    about: {
      title: 'Uber uns | Vertrauenswurdiger Sri Lanka Reiseveranstalter',
      description:
        'Erfahren Sie mehr uber Sundown Tours Sri Lanka, Ihren vertrauenswurdigen lokalen Reiseveranstalter fur private Sri Lanka Rundreisen seit 1992.',
      keywords: 'Sri Lanka Reiseveranstalter, Sri Lanka Reiseagentur, Sri Lanka Rundreise',
    },
    contact: {
      title: 'Urlaub Sri Lanka buchen | Kontakt',
      description:
        'Urlaub sri lanka buchen: WhatsApp oder Formular. Private Rundreise, sri lanka hotel auf Wunsch. Antwort in 24 Stunden.',
      keywords: 'urlaub sri lanka buchen, sri lanka reise buchen, sri lanka privatreise kontakt',
    },
    tour7: {
      title: '7 Tage Sri Lanka Rundreise | Kultur, Bergland & Safari',
      description:
        'Erleben Sie Sri Lanka in 7 Tagen: Sigiriya, Kandy, Ella und Yala Safari mit privatem Fahrer Guide. Jetzt massgeschneiderte Rundreise anfragen.',
      keywords: '7 Tage Sri Lanka Rundreise, Sri Lanka 1 Woche, Sri Lanka Privatreise, Sri Lanka Fahrer',
    },
    tour10: {
      title: 'Sri Lanka Rundreise 2 Wochen | 10 Tage mit privatem Fahrer',
      description:
        'Rundreise Sri Lanka 2 Wochen planen: 10 Tage Kultur, Teeland, Safari und Strand mit Chauffeur Guide  die komfortable Alternative zur gehetzten Woche.',
      keywords: 'sri lanka rundreise 2 wochen, rundreise sri lanka 2 wochen, beste reisezeit sri lanka rundreise, rundreise sri lanka und baden, 10 tage sri lanka',
    },
    tour8: {
      title: '8 Tage Sri Lanka Rundreise | Wilpattu Safari, Sigiriya, Kandy, Ella & Strand',
      description:
        'Sri Lanka in 8 Tagen privat erleben: Wilpattu Safari, Anuradhapura, Sigiriya, Kandy, Ella und Strandaufenthalt in Hikkaduwa.',
      keywords: '8 Tage Sri Lanka Rundreise, Sri Lanka 8 Tage, Wilpattu Safari, Sri Lanka Privatreise',
    },
    tour6: {
      title: '6 Tage Sri Lanka Rundreise | Sigiriya, Kandy, Ella & Yala Safari',
      description:
        'Sri Lanka in 6 Tagen privat: Sigiriya, Kandy, das Bergland um Ella, Yala Safari und malerische Strande mit erfahrenem Fahrer Guide.',
      keywords: '6 Tage Sri Lanka Rundreise, Sri Lanka 6 Tage, Sigiriya Kandy Ella, Yala Safari',
    },
    tour5: {
      title: '5 Tage Sri Lanka Rundreise | Kultur, Natur & Tierwelt',
      description:
        'Eine ausgewogene 5 tagige Sri Lanka Rundreise mit Kultur, Bergland und Safari Erlebnis  privat und massgeschneidert.',
      keywords: '5 Tage Sri Lanka Rundreise, Sri Lanka 5 Tage, Sri Lanka Kurzreise',
    },
    tour4: {
      title: '4 Tage Sri Lanka Rundreise | Hohepunkte & Safari',
      description:
        'Erleben Sie Sri Lanka in 4 Tagen: Sigiriya, Kandy, Ella und Yala Safari auf einer privaten Rundreise mit Fahrer Guide.',
      keywords: '4 Tage Sri Lanka Rundreise, Sri Lanka 4 Tage, Sri Lanka Kurztrip',
    },
    tour2ek: {
      title: '2 Tage Sri Lanka Privatreise  Ella, Kandy & Udawalawa | Flughafen- oder Hoteltransfer',
      description:
        'Private 2 Tage Tour durch Sri Lanka: Udawalawa, Hohepunkte von Ella, Ramboda Wasserfall, Ambuluwawa Turm und der Zahntempel in Kandy.',
      keywords: '2 Tage Sri Lanka Tour, Ella Kandy Tour, Sri Lanka Privatreise',
    },
    tour2ey: {
      title: '2 Tage Ella & Yala Safari Privatreise | Sri Lanka Tierwelt erleben',
      description:
        'Private 2 Tage Tour mit den Hohepunkten von Ella und einer aufregenden Jeep Safari im Yala Nationalpark  Leoparden, Elefanten und mehr.',
      keywords: 'Ella Yala Safari, 2 Tage Sri Lanka Safari, Yala Nationalpark',
    },
    ellaDay: {
      title: 'Ella Tagestour | Zugfahrt & Nine Arch Bridge',
      description:
        'Private Ella Tagestour mit Nine Arch Bridge, Little Adam’s Peak und dem Ravana Wasserfall im Bergland von Sri Lanka.',
      keywords: 'ella sri lanka, ella tagestour, nine arch bridge, ella ausflug',
    },
    galleDay: {
      title: 'Galle Tagestour | Galle Fort & Sudkuste',
      description:
        'Entdecken Sie das Galle Fort, Strande und die Attraktionen der Sudkuste auf unserer privaten Tagestour.',
      keywords: 'galle sri lanka, galle tagestour, galle fort, sudkuste sri lanka',
    },
    kandyDay: {
      title: 'Kandy Tagestour | Kultur & landschaftliche Hohepunkte',
      description:
        'Erleben Sie die Hohepunkte von Kandy, darunter den Zahntempel und den Koniglichen Botanischen Garten, auf einer privaten Tagestour.',
      keywords: 'Kandy Tagestour, Kandy Ausflug, Zahntempel',
    },
    sigiriyaDay: {
      title: 'Sigiriya Tagestour | Antike Felsenfestung',
      description:
        'Erkunden Sie die antike Felsenfestung Sigiriya und ihre Garten auf einer privaten Tagestour.',
      keywords: 'Sigiriya Tagestour, Sigiriya Felsen, Lowenfelsen',
    },
    destinations: {
      title: 'Sri Lanka Sehenswurdigkeiten | Maps, Strande und Kultur',
      description:
        'Sri lanka maps fur die Rundreise: Ella, Galle, Colombo, Sigiriya und Safari Parks. Private Route statt nur eine Karte.',
      keywords: 'sri lanka maps, sri lanka sehenswurdigkeiten, sri lanka reiseziele, ella sri lanka, galle sri lanka',
    },
    guides: {
      title: 'Sri Lanka Reisefuhrer | Expertentipps & Insiderwissen',
      description:
        'Unsere umfassenden Reisefuhrer fur Sri Lanka mit Expertentipps und praktischen Hinweisen fur Ihre Reise.',
      keywords: 'Sri Lanka Reisefuhrer, Sri Lanka Reisetipps',
    },
    destSigiriya: {
      title: 'Sigiriya Sri Lanka | Lowenfelsen, Aufstieg und Tour',
      description:
        'Sigiriya Lowenfelsen: Aufstieg, Fresken, Pidurangala und Kombination mit Dambulla auf einer privaten Kulturdreieck Tour.',
      keywords: 'sigiriya sri lanka, lowenfelsen, sigiriya felsenfestung, sehenswurdigkeiten sri lanka',
    },
    destElla: {
      title: 'Ella Sri Lanka | Nine Arch Bridge, Zug und Bergland',
      description:
        'Ella Sri Lanka: Nine Arch Bridge, Little Adams Peak, Teeplantagen und Panoramazug. Privat als Tagestour oder in der Rundreise.',
      keywords: 'ella sri lanka, ella tagestour, nine arch bridge, sri lanka hochland',
    },
    destYala: {
      title: 'Yala National Park | Safari, Leoparden & beste Reisezeit',
      description:
        'Yala Nationalpark Safari: Leoparden, Jeep Tipps, beste Monate und Kombination mit Ella oder der Sudkuste auf einer privaten Rundreise.',
      keywords: 'yala national park, Yala Nationalpark, Yala Safari, Sri Lanka Leoparden',
    },
    destKandy: {
      title: 'Kandy Sri Lanka Guide | Zahntempel & Kulturhauptstadt',
      description:
        'Kandy Sri Lanka: Zahntempel, See, Peradeniya und Esala Perahera  plus Kombination mit Ella oder dem Kulturdreieck auf einer Privatreise.',
      keywords: 'kandy sri lanka, Kandy, Zahntempel Kandy, Sehenswurdigkeiten Sri Lanka',
    },
    destDambulla: {
      title: 'Dambulla Hohlentempel Guide | Tipps zum Goldenen Felsentempel',
      description:
        'Dambullas UNESCO Hohlentempel besuchen: Wandmalereien, Buddha Statuen, Aufstiegstipps und Kombination mit Sigiriya.',
      keywords: 'Dambulla Hohlentempel, Goldener Tempel Dambulla, Dambulla Sri Lanka',
    },
    destGalle: {
      title: 'Galle Sri Lanka | Fort, Leuchtturm und Sudkuste',
      description:
        'Galle Sri Lanka und Galle Fort: Wallanlagen, Leuchtturm und Boutiquen. Private Tagestour oder Stopp auf der Rundreise.',
      keywords: 'galle sri lanka, galle fort, galle tagestour, unesco galle',
    },
    guideBestTime: {
      title: 'Beste Reisezeit Sri Lanka | Wetter und Reisezeit',
      description:
        'Beste reisezeit sri lanka und wetter sri lanka: Monsun, Regenzeit West vs Ost, Safari und private Rundreise nach Monat.',
      keywords:
        'beste reisezeit sri lanka, sri lanka beste reisezeit, sri lanka reisezeit, reisezeit sri lanka, beste reisezeit sri lanka rundreise, wetter sri lanka, sri lanka wetter, sri lanka regenzeit, sri lanka wetter november, sri lanka wetter dezember, sri lanka november, sri lanka oktober, sri lanka august',
    },
    guideVisa: {
      title: 'Visum Sri Lanka beantragen | Einreise ETA fur Deutsche',
      description:
        'Visum sri lanka beantragen und sri lanka visum beantragen: ETA vor dem Flug auf eta.gov.lk. Einreise Sri Lanka fur deutsche Passe, keine inoffiziellen Visa Seiten.',
      keywords:
        'visum sri lanka beantragen, sri lanka visum beantragen, visum sri lanka, sri lanka visum, visa sri lanka, sri lanka visa, einreise sri lanka, sri lanka einreise',
    },
    guidePrivateDriver: {
      title: 'Privater Fahrer Sri Lanka | Kosten und Chauffeur Tour',
      description:
        'Fahrer Sri Lanka und privater Fahrer: was enthalten ist, typische Tagesstrecken und wie Sie eine flexible Rundreise planen.',
      keywords: 'fahrer sri lanka, privater fahrer sri lanka, sri lanka privater fahrer, sri lanka fahrer buchen kosten, sri lanka privater fahrer kosten, private fahrer sri lanka',
    },
    guideBudget: {
      title: 'Euro in Sri Lanka Rupien wechseln | Kurs und Reisekosten',
      description:
        'Euro in sri lanka rupien wechseln und urlaub sri lanka kosten: grober Kurs, kein Live Ticker. Sri lanka urlaub kosten fur private Rundreise klar vorab.',
      keywords:
        'urlaub sri lanka kosten, sri lanka urlaub kosten, euro in sri lanka rupien wechseln, 1 euro in sri lanka rupees, wechselkurs euro sri lanka rupie, sri lanka euro',
    },
    guideWildlife: {
      title: 'Sri Lanka Wildlife Guide | Elefanten, Leoparden & Wale',
      description:
        'Wo Sie Elefanten, Leoparden, Wale und Vogel in Sri Lanka sehen Nationalparks, Jahreszeiten und die besten Beobachtungsorte.',
      keywords: 'Sri Lanka Wildlife, Elefanten Sri Lanka, Leoparden Safari, Walbeobachtung Sri Lanka',
    },
    guideSafari: {
      title: 'Sri Lanka Safari Guide | Yala, Udawalawe & Jeep Tipps',
      description:
        'Jeep Safari planen: Yala vs Udawalawe, Buchungstipps, Parkeintritt und was Sie bei einer morgendlichen oder nachmittaglichen Pirschfahrt erwartet.',
      keywords: 'Sri Lanka Safari, Yala Safari, Udawalawe Jeep Safari, Safari Buchung',
    },
    guideBeaches: {
      title: 'Sri Lanka Strande | Sud, West und Ostkuste',
      description:
        'Sri Lanka Strande nach Saison: Bentota, Mirissa, Weligama, Ostkuste Trincomalee. Welche Kuste zu Ihren Reisedaten passt.',
      keywords: 'sri lanka strande, strande sri lanka, sri lanka strand, ostkuste sri lanka, Mirissa, Bentota',
    },
    guideTeaCountry: {
      title: 'Ceylon Tee Sri Lanka | Plantagen und heutiger Name von Ceylon',
      description:
        'Ceylon tee und ceylon tea im Hochland: Nuwara Eliya, Ella, Plantagen. Heutiger name von ceylon ist Sri Lanka. Ceylon zimt im Gewurzgarten, nicht im deutschen Supermarkt.',
      keywords:
        'ceylon tee, ceylon tea, ceylon zimt, zimt ceylon, ceylon zimt unterschied, ceylon vs cassia, cassia zimt, zimt cassia oder ceylon, ceylon zimt oder cassia, heutiger name von ceylon, ceylon land, sri lanka ceylon, ceylon sri lanka, cinnamomum ceylanicum, ceylon zimtstangen, schwarzer tee, ceylon cay',
    },
    guideFood: {
      title: 'Sri Lanka Food Guide | Rice and Curry, Ceylon Tee und Gewurze',
      description:
        'Rice and curry, ceylon curry auf der Insel, Hoppers, Kottu, ceylon tee. Gewurzgarten mit ceylon zimt auf der privaten Rundreise, keine Imbiss Suche in Deutschland.',
      keywords:
        'ceylon curry, rice and curry, ceylon tee, Sri Lanka Essen, Street Food Sri Lanka, sri lankische Kuche, ceylon zimt',
    },
    guidePacking: {
      title: 'Packliste Sri Lanka | Kleidung & Reise Utensilien',
      description:
        'Praktische Packliste fur Sri Lankaleidung fur Hitze und kuhles Hochland, Tempelkleidung, Safari Ausrustung und Essentials.',
      keywords: 'packliste sri lanka, sprache sri lanka, sri lanka sprache, was einpacken sri lanka',
    },
    guideSafety: {
      title: 'Sri Lanka aktuelle Lage | Sicherheit fur Reisende aus Deutschland',
      description:
        'Sri lanka aktuelle lage und Sicherheit: Strassen, Betrug, Wildtiere und Reisen mit privatem Fahrer. Vor dem Flug Auswartiges Amt lesen.',
      keywords: 'sri lanka urlaub gefahrlich, sri lanka aktuelle lage, sri lanka sicherheit, ist sri lanka sicher',
    },
    cancellation: {
      title: 'Stornierungsbedingungen | Sundown Tours Sri Lanka',
      description:
        'Buchungsanderungen, Anzahlungsregeln und Stornierungsbedingungen fur Privatreisen und Chauffeur Services bei Sundown Tours Sri Lanka.',
      keywords: 'Stornierung, Tour Stornierung Sri Lanka, Buchungsanderungen',
    },
    restaurants: {
      title: 'Essen in Sri Lanka | Karte Sundown Beach Restaurant',
      description:
        'Wo Privatreisende in Sri Lanka essen: Meeresfruchte an der Westkuste, Galle Fort und die volle Karte des Sundown Beach Restaurant in Waskaduwa.',
      keywords: 'Restaurants Sri Lanka, Essen Sri Lanka, Sundown Beach Restaurant, Waskaduwa',
    },
    testimonials: {
      title: 'Urlaub Sri Lanka Erfahrungen | Gastebewertungen',
      description:
        'Urlaub sri lanka erfahrungen und sri lanka urlaub erfahrungen: echte Gaste zu privaten Rundreisen. Keine erfundenen Texte.',
      keywords: 'urlaub sri lanka erfahrungen, sri lanka urlaub erfahrungen, sri lanka bewertungen',
    },
    privacy: {
      title: 'Datenschutzerklarung | Sundown Tours Sri Lanka',
      description: 'Lesen Sie die Datenschutz und Analyse Cookie Richtlinie von Sundown Tours Sri Lanka.',
      keywords: 'Datenschutz',
    },
    destColombo: {
      title: 'Colombo Sri Lanka | Flughafen, Stadt und erste Nacht',
      description:
        'Colombo Sri Lanka und sri lanka colombo: Unterschied Stadt vs Flughafen Sri Lanka (CMB), Negombo als erste Nacht, Fahrzeiten.',
      keywords: 'colombo sri lanka, sri lanka colombo, colombo, sri lanka flughafen, flughafen sri lanka, cmb',
    },
    destNegombo: {
      title: 'Negombo Sri Lanka | Strand beim Flughafen Colombo',
      description:
        'Negombo als erste Nacht nach CMB: 20 bis 40 Minuten Transfer, Lagune, dann private Rundreise nach Sigiriya oder an die Westkuste.',
      keywords: 'negombo sri lanka, Negombo, Flughafen Colombo Negombo',
    },
    destBentota: {
      title: 'Bentota Sri Lanka | Strandurlaub an der Westkuste',
      description:
        'Bentota Strandurlaub mit privatem Fahrer nach Galle, Mirissa und Weligama  am besten in der Trockenzeit der Westkuste.',
      keywords: 'bentota sri lanka, Bentota, Bentota Strand, Westkuste Sri Lanka',
    },
    destMirissa: {
      title: 'Mirissa Sri Lanka Guide | Walbeobachtung, Strande & Coconut Tree Hill',
      description:
        'Mirissa Sri Lanka: Walsaison, Coconut Tree Hill, Strande und Kombination mit Galle Fort oder Weligama auf einer privaten Sudkusten Rundreise.',
      keywords: 'mirissa sri lanka, Mirissa, Mirissa Walbeobachtung, Coconut Tree Hill',
    },
    destWeligama: {
      title: 'Weligama Sri Lanka | Anfanger Surf und Sudkuste',
      description:
        'Weligama Surfstrand zwischen Galle und Mirissa: Kurse, Saison und als Strandfinale einer privaten Rundreise.',
      keywords: 'weligama sri lanka, Weligama, Weligama Surf, Sudkuste',
    },
    destNuwaraEliya: {
      title: 'Nuwara Eliya Sri Lanka | Ceylon Tee Hochland',
      description:
        'Nuwara Eliya ceylon tee Plantagen zwischen Kandy und Ella: Fabrik, Verkostung und kuhle Nachte auf der privaten Rundreise.',
      keywords: 'nuwara eliya, ceylon tee, ceylon tea, teeplantagen sri lanka, ceylon zimt',
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
      title: 'Trincomalee Sri Lanka | Ostkuste, Nilaveli & Uppuveli',
      description:
        'Trincomalee und die Ostkuste Sri Lankas: wann die Strande trockener sind als Galle, Pigeon Island und Einbindung in eine 10- bis 14 tagige Rundreise.',
      keywords: 'trincomalee, ostkuste sri lanka, sri lanka ostkuste, Nilaveli, Trincomalee Strand',
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
      description: "Plan Mirissa whale watching on a private south coast Sri Lanka itinerary.",
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
      title: 'Sri Lanka mit Kindern | Private Familien Rundreise',
      description:
        'Sri lanka mit kindern: kurze Etappen, Safari Vormittag, Pool und Strand. Private Rundreise, kein Reisebus.',
      keywords: 'sri lanka mit kindern, sri lanka familienreise, urlaub sri lanka mit kindern, private reise mit kindern',
    },
    guideLuxuryTours: {
      title: "Sri Lanka Luxury Tours | Private Chauffeur Travel",
      description: "Luxury private chauffeur tours with boutique hotels across Sri Lanka.",
      keywords: "guideLuxuryTours",
    },
    guideAirportTransfers: {
      title: 'Sri Lanka Flughafentransfer | Fahrzeiten ab CMB',
      description:
        'Privater Transfer vom Bandaranaike Airport (CMB): Fahrzeiten nach Negombo, Colombo, Waskaduwa, Kandy, Sigiriya und Galle, Nachtankunfte und Festpreise.',
      keywords: 'sri lanka flughafen, flughafen sri lanka, flugzeit sri lanka, sri lanka flugzeit, colombo flughafen, cmb privat',
    },
    marketGermany: {
      title: 'Sri Lanka Rundreise 2 Wochen aus Deutschland | Urlaub buchen',
      description:
        'Welche Sprache spricht man in Sri Lanka, wie spat ist es, Visum beantragen, Euro wechseln und aktuelle Lage. Private Rundreise nach der Landung in Colombo seit 1992.',
      keywords:
        'sri lanka rundreise, urlaub sri lanka, heutiger name von ceylon, ceylon land, sri lanka ceylon, ceylon sri lanka, welche sprache spricht man in sri lanka, wie lange fliegt man nach sri lanka, visum sri lanka beantragen, euro in sri lanka rupien wechseln, sri lanka aktuelle lage, beste reisezeit sri lanka, einreise sri lanka, time in sri lanka, sri lanka time, sri lanka maps',
    },
    marketFrance: {
      title: "Sri Lanka Tours from France | Circuits Prives",
      description: "Private Sri Lanka circuits for travellers from France with flexible hotels.",
      keywords: "marketFrance",
    },
    marketItaly: {
      title: "Sri Lanka Tours from Italy | Private Travel",
      description: "tailor made private Sri Lanka tours for travellers from Italy.",
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
      title: "Sri Lanka Tours from the Netherlands | Prive Rondreizen",
      description: "Private Sri Lanka rondreizen for travellers from the Netherlands.",
      keywords: "marketNetherlands",
    },
    marketUK: {
      title: 'Sri Lanka Urlaub aus Grossbritannien | Private Rundreise',
      description:
        'Sri Lanka Urlaub aus Grossbritannien: privater Fahrer Guide, Fluge nach Colombo, ETA und Rundreise 7 bis 10 Tage.',
      keywords: 'Sri Lanka Urlaub, private Rundreise, Fahrer Guide',
    },
    marketAustria: {
      title: "Sri Lanka Tours from Austria | Private Rundreisen",
      description: "Private Sri Lanka Rundreisen for travellers from Austria.",
      keywords: "marketAustria",
    },
    marketSwitzerland: {
      title: "Sri Lanka Tours from Switzerland | tailor made Travel",
      description: "tailor made private Sri Lanka travel for visitors from Switzerland.",
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
      title: 'Sri Lanka im August | Wetter, Ostkuste & Kulturdreieck',
      description:
        'Sri Lanka im August: Sudwestmonsun vs Ostkuste, Sigiriya, Kandy Perahera, Yala und private Routen statt nassem Sudkusten Strandurlaub.',
      keywords: 'sri lanka august, sri lanka im august, reisezeit august, ostkuste august',
    },
    monthSeptember: {
      title: "Sri Lanka in September | Weather and Travel Tips",
      description: "Travel tips for Sri Lanka in September regions, weather and private itinerary ideas.",
      keywords: "monthSeptember",
    },
    monthOctober: {
      title: 'Sri Lanka Oktober | Wetter und Reisezeit',
      description: 'Sri lanka oktober und sri lanka wetter: welche Kuste passt, Safari und private Rundreise.',
      keywords: 'sri lanka oktober, wetter sri lanka oktober, reisezeit oktober',
    },
    monthNovember: {
      title: 'Sri Lanka November | Wetter und Sudkuste',
      description: 'Sri lanka november und sri lanka wetter november: Sudkuste startet oft in die Trockenzeit. Private Rundreise statt nur Strand.',
      keywords: 'sri lanka november, sri lanka wetter november, reisezeit november',
    },
    monthDecember: {
      title: 'Sri Lanka Dezember | Wetter und Hochsaison',
      description: 'Sri lanka wetter dezember: West und Sudkuste oft trocken, Hochsaison. Rundreise plus Baden planen.',
      keywords: 'sri lanka dezember, sri lanka wetter dezember, urlaub sri lanka dezember',
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
      description: 'Vielen Dank fur Ihre Sri Lanka Reiseanfrage. Unser Team meldet sich in Kurze bei Ihnen.',
      keywords: '',
    },
  },
};
