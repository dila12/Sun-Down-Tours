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
    loader: {
      title: 'Ihre Reise wird vorbereitet',
      detail: 'Fotos und Tourdetails werden geladen',
    },
    breadcrumb: { home: 'Startseite' },
    skipToContent: 'Zum Hauptinhalt springen',
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
      title: 'Sri Lanka Rundreisen, Reisepakete & privater Fahrer',
      subtitle:
        'Private Sri Lanka Rundreisen und Urlaubspakete mit lokalem Fahrer Guide. Sigiriya Lion Rock, Ella, Yala, Kandy, Mirissa, Weligama und Galle  fur Reisende aus Deutschland, Osterreich und der Schweiz.',
      slide2: 'Unvergessliche Sri Lanka Reisepakete',
      slide3: 'Private Rundreisen durch das schone Sri Lanka',
      slide4: 'Entdecken Sie Sigiriya, Ella & die Hohepunkte Sri Lankas',
      slide5: 'Sri Lanka Safaris & Abenteuerreisen',
      slideGuestSigiriya: 'Echte Gäste mit Sundown Tours in Sri Lanka',
      slideGuestSigiriyaAlt:
        'Gäste von Sundown Tours feiern mit dem Team, halten ein Banner bei Sigiriya und posieren mit unserem Privatfahrzeug',
    },
    intro: {
      title: 'Sri Lanka Rundreisen & Urlaubspakete mit lokalen Experten',
      subtitle: 'Private Rundreisen mit Fahrer Guide und individuelle Inselreisen fur 7, 8 oder 10 Tage.',
      feature1: 'Private Touren',
      feature2: 'Personliche Fahrer',
      feature3: 'Massgeschneiderte Pakete',
      feature4: 'Vertrauenswurdige lokale Guides',
    },
    aeo: {
      heading: 'Sri Lanka Rundreise: Orte, Reisezeit und Buchung',
      whoQ: 'Welche Orte gehoren zu einer Sri Lanka Rundreise?',
      whoA:
        'Eine erste Sri Lanka Rundreise umfasst meist den Felsen Sigiriya, den Hohlentempel Dambulla, den Zahntempel in Kandy, den Zug nach Ella und die Nine Arch Bridge, eine Safari in Yala oder Udawalawe und Strandtage in Galle, Mirissa oder Bentota. Sundown Tours in Waskaduwa plant diese Route seit 1992 als Privatreise mit eigenem Fahrer Guide.',
      whereQ: 'Wo beginnt eine private Sri Lanka Rundreise?',
      whereA:
        'Die meisten Privatreisen beginnen mit der Abholung am Flughafen Bandaranaike (CMB) in Katunayake oder im Hotel in Colombo oder Negombo. Ihr Fahrer Guide erwartet Sie dort. Sundown Tours sitzt in Waskaduwa, Kalutara, an der Westkuste. Sie mussen nicht selbst fahren.',
      whenQ: 'Wann ist die beste Reisezeit fur Sri Lanka?',
      whenA:
        'Dezember bis April ist die beste Zeit fur Sud und West, also Galle, Mirissa und Bentota. Mai bis September ist meist besser fur die Ostkuste, einschliesslich Trincomalee. Kulturdreieck und Bergland sind ganzjahrig machbar, und wir legen die Route auf Ihren Reisemonat.',
      bookQ: 'Wie buche ich eine private Sri Lanka Rundreise?',
      bookA:
        'Senden Sie Daten, Personenzahl und Interessen per WhatsApp. Sundown Tours antwortet innerhalb von 24 Stunden mit Route, Fahrzeiten und einem klaren Preis fur die Privatreise mit Fahrer Guide. Sie konnen auch das Kontaktformular auf dieser Seite nutzen.',
      howTitle: 'So buchen Sie eine private Sri Lanka Rundreise',
      how1: 'Nennen Sie uns Daten, Reisende und Interessen per WhatsApp oder Formular.',
      how2: 'Wir senden Route, Fahrzeiten und einen transparenten Preis innerhalb von 24 Stunden.',
      how3: 'Sie bestatigen die Daten. Wir stellen einen Fahrer Guide und holen Sie am Flughafen Colombo oder im Hotel ab.',
    },
    destinations: {
      title: 'Die schonsten Reiseziele Sri Lankas',
      subtitle: 'Entdecken Sie handverlesene Reiseziele mit Luxuserlebnissen in ganz Sri Lanka.',
      explore: 'Touren entdecken',
      exploreAria: 'Touren entdecken fur',
      sigiriya: 'Sigiriya',
      sigiriyaAlt: 'Felsenfestung Sigiriya Sri Lanka',
      ella: 'Ella',
      ellaAlt: 'Die Nine Arch Bridge bei Ella Sri Lanka',
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
      subtitle: 'Wahlen Sie aus unseren beliebtesten Sri Lanka Rundreisen oder gestalten Sie Ihre private Reise.',
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
      gallery3Alt: 'Zwei Gäste mit Sundown-Tours-Banner vor dem Löwenfelsen Sigiriya',
      gallery4Alt: 'Gäste zeigen auf das Sundown-Tours-Schild an unserem Privatfahrzeug bei Sigiriya',
      gallery5Alt: 'Gäste und Gastgeber von Sundown Tours mit gerahmten Reisefoto-Collagen',
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
    vehicles: {
      tag: 'UNSERE FLOTTE',
      title: 'Unsere Fahrzeuge',
      subtitle:
        'Reisen Sie in modernen klimatisierten SUVs und Hochdach Vans nur fur Ihre private Gruppe.',
      typeSuv: 'SUV',
      typeKdh: 'Hochdach KDH',
      suvGrey: 'Grauer Honda SUV',
      suvGreyAlt: 'Grauer Honda SUV fur private Sri Lanka Chauffeur-Touren',
      suvRed: 'Roter Honda SUV',
      suvRedAlt: 'Roter Honda SUV fur private Sri Lanka Fahrer Touren',
      kdhWhite: 'Weisser Hochdach Van',
      kdhWhiteAlt: 'Weisser Toyota Hochdach Van fur Familienreisen in Sri Lanka',
      kdhSilver: 'Silberner Hochdach Van',
      kdhSilverAlt: 'Silberner Toyota Hochdach Van fur Gruppenreisen in Sri Lanka',
      note: 'Klimaanlage · Lizenzierter Fahrer · Kennzeichen aus Datenschutzgründen unkenntlich',
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
    title: 'Sri Lanka Reisepakete & Privatreisen',
    lead: 'Vergleichen Sie 7, 8 und 10 Tage Reisepakete sowie kurzere Privatreisen. Jeder Urlaub ist privat, massgeschneidert und mit lokalem Fahrer Guide  keine Gruppenbusse.',
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
    header: 'Kundenbewertungen',
    breadcrumb: 'Bewertungen',
    eyebrow: 'Kundenstimmen',
    title: 'Was unsere Kunden sagen',
    intro:
      'Lesen Sie aktuelles Feedback von Reisenden, die private Chauffeur-Rundreisen bei uns gebucht haben. Die Bewertungen stammen aus unserem Live-Review-Widget und unserem TripAdvisor-Profil wir erfinden keine Erfahrungsberichte oder Sternebewertungen auf dieser Seite.',
    attribution:
      'Jede Bewertung ist der Plattform zugeordnet, auf der sie veroeffentlicht wurde. Wenn Review-Schema in Suchergebnissen erscheint, muss es sichtbaren Plattform-Bewertungen entsprechen.',
    ctaTripadvisor: 'TripAdvisor-Bewertungen oeffnen',
    ctaWhatsapp: 'Per WhatsApp fragen',
    ctaTours: 'Private Tourpakete ansehen',
    topicsHeading: 'Verwandte Touren und Guides',
    widgetHeading: 'Kundenbewertungen',
    widgetLoading: 'Bewertungen werden geladen…',
    topics: {
      toursTitle: 'Bewertungen zu Tourpaketen',
      toursBody: 'Mehrtaegige private Routen, die Gaeste nach dem Lesen von Bewertungen haeufig buchen.',
      toursLink: 'Tourpakete ansehen',
      safariTitle: 'Safari-Erlebnisse',
      safariBody: 'Planen Sie Yala- und Wildtiertage mit unserem Safari-Guide und klaeren Sie Details per WhatsApp.',
      safariLink: 'Safari-Guide lesen',
      familyTitle: 'Familienreisen',
      familyBody: 'Tempo-Tipps fuer private Familientouren mit Kindern unterschiedlichen Alters.',
      familyLink: 'Familien-Touren Guide',
      honeymoonTitle: 'Flitterwochen und Paare',
      honeymoonBody: 'Private Routen mit Kultur, Teeland und Strandzeit fuer Paare.',
      honeymoonLink: 'Flitterwochen-Guide',
      driverTitle: 'Privater Chauffeur',
      driverBody: 'Was ein Fahrer-Guide-Service umfasst und wie europaeische Gaeste ihn typischerweise nutzen.',
      driverLink: 'Privater Fahrer-Guide',
      destinationsTitle: 'Reiseziele',
      destinationsBody: 'Ausfuehrliche Zielseiten zu Sigiriya, Ella, Yala, Kandy, Dambulla und Galle.',
      destinationsLink: 'Reiseziele entdecken',
    },
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
      title: 'Privatreise Sri Lanka mit Fahrer | 5-10 Tage',
      description:
        'Private Rundreise Sri Lanka mit Fahrer für Reisende aus Europa. 5–10 Tage flexibel geplant. Team seit 1992. Jetzt anfragen für ein Angebot. Team seit 1992.',
      keywords: 'Privatreise Sri Lanka, Rundreise mit Fahrer, Sri Lanka Urlaub privat',
    },
    tours: {
      title: 'Sri Lanka Rundreisen privat | 4-10 Tage mit Fahrer',
      description:
        'Private Sri Lanka Rundreisen von 4 bis 10 Tagen mit Fahrer, Safari und Strand. Keine Gruppenbusse. Seit 1992. Jetzt anfragen für Ihr Datum. Team seit 1992.',
      keywords: 'Sri Lanka Rundreisen, Privatreise mit Fahrer, 7 Tage Sri Lanka',
    },
    services: {
      title: 'Privater Chauffeur & Tour-Service | Sri Lanka',
      description:
        'Privatreisen mit Fahrer, maßgeschneiderte Rundreisen und Tagesausfluge auf Sri Lanka. Flexibles Tempo, Flughafentransfer. Jetzt anfragen. Flexibel planen.',
      keywords: 'Chauffeur Sri Lanka, privater Fahrer, maßgeschneiderte Tour, Tagesausflug Sri Lanka',
    },
    about: {
      title: 'Über Sundown Tours | Privatreisen seit 1992',
      description:
        'Sundown Tours plant seit 1992 private Rundreisen mit Fahrer auf Sri Lanka. Lokales Team für europaische Gaste. Jetzt anfragen für Ihr Angebot.',
      keywords: 'Sundown Tours, Sri Lanka Reiseveranstalter, Privatreise seit 1992, lokaler Fahrer',
    },
    contact: {
      title: 'Kontakt Sundown Tours | Angebot Sri Lanka',
      description:
        'Planen Sie eine Privatreise Sri Lanka mit Fahrer. Senden Sie Daten und Wünsche; wir antworten meist binnen eines Tages. Jetzt anfragen für ein Angebot.',
      keywords: 'Kontakt Sri Lanka Reise, Angebot Privatreise, Fahrer buchen',
    },
    tour7: {
      title: '7 Tage Privatreise | Wilpattu & Mirissa',
      description:
        'Wilpattu-Safari, Sigiriya, Kandy, Ella und Mirissa mit Walbeobachtung optional. 4-Sterne-Hotels, privater Fahrer. Jetzt Angebot anfragen. Team seit 1992.',
      keywords: '7 Tage Sri Lanka Rundreise, Wilpattu Mirissa, Privatreise mit Fahrer',
    },
    tour10: {
      title: '10 Tage Privatreise | Ganze Insel-Highlights',
      description:
        'Inselrundreise: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella und Hikkaduwa-Strandtage. Privater Fahrer seit 1992. Jetzt Angebot anfragen. Team seit 1992.',
      keywords: '10 Tage Sri Lanka Rundreise, Inselrundreise mit Fahrer, Hikkaduwa Strand',
    },
    tour8: {
      title: '8 Tage Privatreise | Yala & Mirissa-Strand',
      description:
        'Pidurangala, Sigiriya, Kandy, Teeland, Ella, Yala-Safari und Mirissa-Strandnächte. Mit Fahrer. Kostenlos stornieren bis 14 Tage. Anfragen. Team seit 1992.',
      keywords: '8 Tage Sri Lanka Rundreise, Yala Mirissa Strand, Privatreise mit Fahrer',
    },
    tour6: {
      title: '6 Tage Privatreise | Yala-Safari & Strand',
      description:
        'Sigiriya, Kandy, Teeland, Yala-Safari und Südwest-Strand mit 4-Sterne-Hotels und Fahrer. Kostenlos stornieren bis 14 Tage. Jetzt anfragen. Team seit 1992.',
      keywords: '6 Tage Sri Lanka Rundreise, Yala Safari Strand, Privatreise mit Fahrer',
    },
    tour5: {
      title: '5 Tage Privatreise | Teeland & Küste',
      description:
        'Sigiriya, Kandy, Nuwara Eliya, Ella und Südküste mit Madu-River – 4-Sterne-Hotels und privater Fahrer. Ideal als Kurzurlaub. Jetzt anfragen.',
      keywords: '5 Tage Sri Lanka Rundreise, Nuwara Eliya Teeland, Privatreise mit Fahrer',
    },
    tour4: {
      title: '4 Tage Privatreise | Kandy, Ella & Yala',
      description:
        'Kandy-Kultur, Ella-Teeland und Yala-Safari, danach Galle oder Bentota an der Südküste. Mit Fahrer. Kostenlos stornieren bis 14 Tage. Anfragen.',
      keywords: '4 Tage Sri Lanka Rundreise, Kandy Ella Yala, Privatreise mit Fahrer',
    },
    tour2ek: {
      title: '2 Tage Privatreise | Ella & Kandy',
      description:
        'Kurze Bergland-Tour: Udawalawa, Ella-Highlights und Kandys Zahntempel mit privatem Fahrer. Flexibles Tempo. Jetzt unverbindlich anfragen. Team seit 1992.',
      keywords: '2 Tage Ella Kandy, Privatreise Sri Lanka, Zahntempel Kandy Tour',
    },
    tour2ey: {
      title: '2 Tage Privatreise | Ella & Yala-Safari',
      description:
        'Kurztrip mit Fahrer: Ella-Berge und private Yala-Jeepsafari, Übernachtung im 4-Sterne-Hotel. Kostenlos stornieren bis 14 Tage. Jetzt anfragen.',
      keywords: 'Ella Yala Safari, 2 Tage Sri Lanka Safari, Privatreise mit Fahrer',
    },
    ellaDay: {
      title: 'Ella Tagesausflug mit Fahrer | Nine Arch',
      description:
        'Privater Ella-Tag: Nine Arch Bridge, Little Adam’s Peak und Ravana Falls mit Fahrer. Flexibles Tempo. Jetzt anfragen für Ihr Datum. Team seit 1992 vor Ort.',
      keywords: 'Ella Tagesausflug, Nine Arch Bridge Tour, Privattour mit Fahrer',
    },
    galleDay: {
      title: 'Galle Tagesausflug mit Fahrer | Fort',
      description:
        'Privater Galle-Tag: niederländisches Fort, Leuchtturm und Südküste mit Fahrer. Ideal ab Colombo oder Strandhotel. Jetzt anfragen. Team seit 1992 vor Ort.',
      keywords: 'Galle Tagesausflug, Galle Fort Privattour, Südküste Sri Lanka Fahrer',
    },
    kandyDay: {
      title: 'Kandy Tagesausflug mit Fahrer | Zahntempel',
      description:
        'Privater Kandy-Tag: Zahntempel, Aussichtspunkt und Stadt-Highlights mit Fahrer. Ideal als Kulturtag. Jetzt unverbindlich anfragen. Team seit 1992 vor Ort.',
      keywords: 'Kandy Tagesausflug, Zahntempel Tour, Privattour Kandy mit Fahrer',
    },
    sigiriyaDay: {
      title: 'Sigiriya Tagesausflug mit Fahrer | Löwenfelsen',
      description:
        'Privater Sigiriya-Tag: Löwenfelsen oder Pidurangala, Dambulla-Höhlen und Dorfleben mit Fahrer. Jetzt anfragen für Ihr Datum. Jetzt unverbindlich anfragen.',
      keywords: 'Sigiriya Tagesausflug, Löwenfelsen Tour, Dambulla Höhlen Privattour',
    },
    destinations: {
      title: 'Sri Lanka Ziele | Ella, Sigiriya, Yala, Galle',
      description:
        'Ziele für Ihre Privatreise: Ella, Sigiriya, Yala, Kandy, Galle und Mirissa. Tipps für Rundreisen mit Fahrer. Jetzt anfragen. Flexibel planen.',
      keywords: 'Sri Lanka Ziele, Ella Sigiriya Yala, Privatreise Orte, Galle Mirissa',
    },
    guides: {
      title: 'Sri Lanka Reisefuhrer | Tipps für Privatreisen',
      description:
        'Praktische Guides: beste Reisezeit, Tipps zum privaten Fahrer und Visa-Grundlagen für Europa. Besser planen. Jetzt anfragen. Lokales Team vor Ort.',
      keywords: 'Sri Lanka Reisefuhrer, beste Reisezeit, privater Fahrer Tipps, Visa Sri Lanka',
    },
    destSigiriya: {
      title: 'Sigiriya Löwenfelsen | Guide mit privatem Fahrer',
      description:
        'Sigiriya Lion Rock und Dambulla privat mit Fahrer: Aufstieg, Timing und Tempo für Tages- oder Rundreise. Jetzt anfragen. Lokales Team vor Ort.',
      keywords: 'Sigiriya Sri Lanka, Lion Rock, Dambulla Höhlen, Privattour Sigiriya',
    },
    destElla: {
      title: 'Ella Sri Lanka | Nine Arch Bridge & Teeland',
      description:
        'Ella planen: Nine Arch Bridge, Little Adams Peak und Teeplantagen für Tagestour oder Mehrtagesstopp. Mit Fahrer. Jetzt anfragen. Flexibel planen.',
      keywords: 'Ella Sri Lanka, Nine Arch Bridge, Little Adams Peak, Ella Privattour',
    },
    destYala: {
      title: 'Yala Nationalpark | Private Safari Tipps',
      description:
        'Yala-Jeepsafari auf Privatreise: Leoparden-Chancen, Gate-Zeiten und Kombination mit Ella oder Kuste. Jetzt anfragen für Ihr Datum. Seit 1992.',
      keywords: 'Yala Nationalpark, Yala Safari, Leopard Safari Sri Lanka, Privatsafari',
    },
    destKandy: {
      title: 'Kandy Sri Lanka | Zahntempel & Hügelland',
      description:
        'Kandy entdecken: Zahntempel, See und Tor zum Hügelland auf privaten Rundreisen mit Fahrer. Praktische Tipps. Jetzt anfragen für Ihr Datum. Team seit 1992.',
      keywords: 'Kandy Sri Lanka, Zahntempel, Hügelland Rundreise mit Fahrer',
    },
    destDambulla: {
      title: 'Dambulla Hohlentempel Guide | Tipps zum Goldenen Felsentempel',
      description:
        'Dambullas UNESCO Hohlentempel besuchen: Wandmalereien, Buddha Statuen, Aufstiegstipps und Kombination mit Sigiriya.',
      keywords: 'Dambulla Hohlentempel, Goldener Tempel Dambulla, Dambulla Sri Lanka',
    },
    destGalle: {
      title: 'Galle Fort Sri Lanka | Südküste privat',
      description:
        'Galle Fort, Leuchtturm und Südküste auf Tagesausflug oder Mehrtages-Rundreise mit Fahrer. Ruhiges Tempo. Jetzt anfragen. Fuer Gäste aus Europa.',
      keywords: 'Galle Fort, Galle Sri Lanka, Südküste Privattour, Galle Tagesausflug',
    },
    guideBestTime: {
      title: 'Beste Reisezeit Sri Lanka | Saison-Guide',
      description:
        'Wann Sri Lanka bereisen: Trockenfenster je Kuste und Hügelland, Monsun-Hinweise und Routenwechsel. Jetzt anfragen für Ihre Daten. Fuer Gäste aus Europa.',
      keywords: 'beste Reisezeit Sri Lanka, Wetter Sri Lanka, Monsun, Trockenzeit Tour',
    },
    guideVisa: {
      title: 'Sri Lanka Visum & ETA | Kurz-Guide Europa',
      description:
        'ETA und Einreise-Basics für Reisende aus Europa vor einer Privatreise. Praktische Hinweise, keine Rechtsberatung. Jetzt anfragen. Fuer Gäste aus Europa.',
      keywords: 'Sri Lanka Visum, Sri Lanka ETA, Einreise Europa, Reisedokumente',
    },
    guidePrivateDriver: {
      title: 'Privater Fahrer Sri Lanka | Chauffeur-Guide',
      description:
        'Was ein privater Fahrer auf Sri Lanka umfasst: Fahrzeug, Tempo, Hotelstops und typische Ablaufe für Europa-Gaste. Jetzt anfragen. Lokales Team vor Ort.',
      keywords: 'privater Fahrer Sri Lanka, Chauffeur Guide, Privatreise mit Fahrer',
    },
    guideBudget: {
      title: 'Sri Lanka Budget Reisefuhrer | Kosten & Geld Tipps',
      description:
        'Tagesbudget, Bargeld und Geldautomaten, Trinkgeld und wofur Ihr Geld bei einer Privatreise anfallt praktische Tipps fur Reisende.',
      keywords: 'Sri Lanka Budget, Sri Lanka Kosten, Geld Tipps Sri Lanka, Reisebudget',
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
      title: 'Sri Lanka Tee Land Guide | Hochland & Plantagen',
      description:
        'Nuwara Eliya, Ella und Teeplantagen im Hochlandagenbesuche, Panoramazuge und Wanderwege in den Bergen.',
      keywords: 'Sri Lanka Tee Land, Nuwara Eliya, Ella Hochland, Teeplantagen Sri Lanka',
    },
    guideFood: {
      title: 'Sri Lanka Food Guide | Rice & Curry, Gewurze & Street Food',
      description:
        'Sri Lankische Kuche: Rice & Curry, Hoppers, Kottu, Gewurze und Street Food Sie probieren sollten und wie Sie bestellen.',
      keywords: 'Sri Lanka Essen, Rice and Curry, Street Food Sri Lanka, sri lankische Kuche',
    },
    guidePacking: {
      title: 'Packliste Sri Lanka | Kleidung & Reise Utensilien',
      description:
        'Praktische Packliste fur Sri Lankaleidung fur Hitze und kuhles Hochland, Tempelkleidung, Safari Ausrustung und Essentials.',
      keywords: 'Packliste Sri Lanka, was einpacken Sri Lanka, Reiseutensilien Sri Lanka',
    },
    guideSafety: {
      title: 'Sri Lanka Sicherheit | Ist die Reise sicher?',
      description:
        'Sri Lanka Sicherheit fur Reisende aus Deutschland: Strassen, Betrug, Wildtiere, Gesundheit und Reisen mit privatem Fahrer Guide.',
      keywords: 'sri lanka sicherheit, ist Sri Lanka sicher, Reisesicherheit Sri Lanka',
    },
    cancellation: {
      title: 'Stornobedingungen | Sundown Tours Sri Lanka',
      description:
        'Stornoregeln für private Sri Lanka Touren. Kostenlose Stornierung ist oft bis 14 Tage vor Start moglich. Details lesen, dann anfragen. Sicher planen.',
      keywords: 'Storno Sri Lanka Tour, kostenlos stornieren 14 Tage, Sundown Tours Policy',
    },
    restaurants: {
      title: 'Essen auf Sri Lanka | Kuste & Tour-Tipps',
      description:
        'Wo Gäste auf Privatreisen essen: Meeresfruchte an der Kuste, Reis und Curry, plus Sundown Beach Restaurant in Waskaduwa. Jetzt anfragen. Jetzt anfragen.',
      keywords: 'Restaurants Sri Lanka, Sundown Beach Restaurant, Essen auf Rundreise',
    },
    testimonials: {
      title: 'Kundenbewertungen | Sundown Tours Sri Lanka',
      description:
        'Echte Bewertungen unserer privaten Rundreisen mit Fahrer von Gästen aus Europa. Live-Feedback und TripAdvisor. Sicher planen und jetzt anfragen.',
      keywords: 'Kundenbewertungen Sri Lanka, Bewertungen Privatreise, Sundown Tours',
    },
    privacy: {
      title: 'Datenschutzerklarung | Sundown Tours Sri Lanka',
      description: 'Lesen Sie die Datenschutz und Analyse Cookie Richtlinie von Sundown Tours Sri Lanka.',
      keywords: 'Datenschutz',
    },
    destColombo: {
      title: 'Colombo Sri Lanka | Flughafen CMB, Stadt & erste Nacht',
      description:
        'Colombo und Flughafen Sri Lanka (CMB): Unterschied Stadt vs Katunayake, Negombo als erste Nacht, Fahrzeiten nach Frankfurt Ankunft.',
      keywords: 'colombo sri lanka, Colombo, Flughafen Sri Lanka, sri lanka flughafen, CMB',
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
      title: 'Mirissa Sri Lanka | Strand & Walzeit',
      description:
        'Mirissa: Strandzeit, Walbeobachtungs-Saison und Anbindung an Galle oder Südküste auf Privatreisen. Jetzt anfragen für Ihr Datum. Flexibel planen.',
      keywords: 'Mirissa Sri Lanka, Mirissa Strand, Wale Mirissa, Südküste Tour',
    },
    destWeligama: {
      title: 'Weligama Sri Lanka | Anfanger Surf und Sudkuste',
      description:
        'Weligama Surfstrand zwischen Galle und Mirissa: Kurse, Saison und als Strandfinale einer privaten Rundreise.',
      keywords: 'weligama sri lanka, Weligama, Weligama Surf, Sudkuste',
    },
    destHiriketiya: {
      title: 'Hiriketiya, Sri Lanka | Surf Bucht an der Sudkuste',
      description: 'Hiriketiya ist eine kleine Bucht bei Dikwella mit Surfkursen, Cafes und Strandurlaub an Sri Lankas Sudkuste.',
      keywords: 'Hiriketiya Sri Lanka, Hiriketiya Bucht, Surfen Sri Lanka',
    },
    destNuwaraEliya: {
      title: 'Nuwara Eliya Sri Lanka | Teehochland zwischen Kandy und Ella',
      description: 'Nuwara Eliya im Teehochland: Aufenthalt zwischen Kandy und Ella auf einer privaten Rundreise mit Fahrer.',
      keywords: 'Nuwara Eliya Sri Lanka, Teehochland, Rundreise Nuwara Eliya',
    },
    destAnuradhapura: {
      title: 'Anuradhapura Sri Lanka | Heilige Stadt im Kulturdreieck',
      description: 'Anuradhapura mit privatem Fahrer: Dagobas, heilige Stadt und Halt im Kulturdreieck.',
      keywords: 'Anuradhapura Sri Lanka, Kulturdreieck, Rundreise Anuradhapura',
    },
    destPolonnaruwa: {
      title: 'Polonnaruwa Sri Lanka | Ruinen der mittelalterlichen Hauptstadt',
      description: 'Polonnaruwa auf einer privaten Rundreise: Gal Vihara, Palast und das Kulturdreieck.',
      keywords: 'Polonnaruwa Sri Lanka, Kulturdreieck, Rundreise Polonnaruwa',
    },
    destTrincomalee: {
      title: 'Trincomalee Sri Lanka | Ostkuste, Nilaveli & Uppuveli',
      description:
        'Trincomalee und die Ostkuste Sri Lankas: wann die Strande trockener sind als Galle, Pigeon Island und Einbindung in eine 10 bis 14 tagige Rundreise.',
      keywords: 'trincomalee, ostkuste sri lanka, sri lanka ostkuste, Nilaveli, Trincomalee Strand',
    },
    destArugamBay: {
      title: 'Arugam Bay Sri Lanka | Surf an der Ostküste',
      description: 'Arugam Bay als Surfstopp an der Ostküste, mit privatem Transfer nach Yala oder dem Kulturdreieck.',
      keywords: 'Arugam Bay Sri Lanka, Surfen Ostküste, Arugam Bay',
    },
    destKalpitiya: {
      title: 'Kalpitiya Sri Lanka | Lagune, Delfine und Kitesurf',
      description: 'Kalpitiya Lagune mit Delfinausflug und Kitesurf, privater Transfer ab Negombo.',
      keywords: 'Kalpitiya Sri Lanka, Delfine Kalpitiya, Lagune Westküste',
    },
    guideWhaleWatching: {
      title: 'Walbeobachtung Sri Lanka | Mirissa und Ostküste',
      description: 'Saisonale Walbeobachtung ab Mirissa oder Trincomalee in einer privaten Rundreise. Die Saison bleibt ehrlich, ohne Sichtungsgarantie.',
      keywords: 'Walbeobachtung Sri Lanka, Wale Mirissa, private Südküstenreise',
    },
    guideTrainJourneys: {
      title: 'Zugreisen Sri Lanka | Von Kandy nach Ella',
      description: 'Panoramazug durchs Teehochland von Kandy nach Ella: reservierte Plätze und Transfer vom Bahnhof mit privatem Fahrer.',
      keywords: 'Zug Sri Lanka, Zug Kandy Ella, Eisenbahn Teehochland',
    },
    guideHoneymoon: {
      title: 'Flitterwochen Sri Lanka | Private Reise für Paare',
      description: 'Private Flitterwochen mit Sigiriya, Teehochland und Strandnächten. Das Tempo bleibt flexibel für Paare aus Europa.',
      keywords: 'Flitterwochen Sri Lanka, Reise für Paare, romantisches Sri Lanka',
    },
    guideFamilyTours: {
      title: "Sri Lanka Familienreisen | Private Touren mit Kindern",
      description: "Familienfreundliche private Sri Lanka Rundreisen mit angenehmem Tempo, Safari Vormittagen und Erholung am Strand.",
      keywords: "Sri Lanka Familienreise, private Reise mit Kindern, Familiensafari Sri Lanka",
    },
    guideLuxuryTours: {
      title: 'Luxusreisen Sri Lanka | Privater Chauffeur',
      description: 'Private Luxusrundreise mit Chauffeur, ausgewählten Boutiquehotels, ehrlichem Tempo und klaren Leistungen.',
      keywords: 'Luxusreise Sri Lanka, privater Chauffeur, Boutiquehotel Sri Lanka',
    },
    guideAirportTransfers: {
      title: 'Sri Lanka Flughafentransfer | Fahrzeiten ab CMB',
      description:
        'Privater Transfer vom Bandaranaike Airport (CMB): Fahrzeiten nach Negombo, Colombo, Waskaduwa, Kandy, Sigiriya und Galle, Nachtankunfte und Festpreise.',
      keywords: 'Colombo Flughafentransfer, CMB privat, Negombo Transfer, Kalutara Transfer',
    },
    marketGermany: {
      title: 'Sri Lanka Rundreise aus Deutschland | Fahrer',
      description:
        'Private Rundreise Sri Lanka für Reisende aus Deutschland: mit Fahrer, flexible Tage, lokales Team seit 1992. Jetzt anfragen. Flexibles privates Tempo.',
      keywords: 'Sri Lanka Rundreise Deutschland, Privatreise mit Fahrer, Sri Lanka Urlaub',
    },
    marketFrance: {
      title: 'Sri Lanka Reisen aus Frankreich | mit Fahrer',
      description:
        'Private Rundreisen für Gäste aus Frankreich: mit Fahrer, flexibles Tempo, lokales Team seit 1992. Jetzt anfragen für Ihr Angebot. Lokales Team vor Ort.',
      keywords: 'Sri Lanka Frankreich, Privatreise Chauffeur, Rundreise aus Frankreich',
    },
    marketItaly: {
      title: 'Sri Lanka Reisen aus Italien | mit Fahrer',
      description:
        'Private Rundreisen für Gäste aus Italien: mit Fahrer, flexible Routen, lokales Team seit 1992. Jetzt anfragen für Ihren Termin. Sicher planen.',
      keywords: 'Sri Lanka Italien, Privatreise mit Fahrer, Tour aus Italien',
    },
    marketSpain: {
      title: 'Sri Lanka Reisen aus Spanien | mit Fahrer',
      description:
        'Private Rundreisen für Gäste aus Spanien: mit Fahrer, flexible Tage, Planung seit 1992. Jetzt anfragen und kostenloses Angebot holen. Sicher planen.',
      keywords: 'Sri Lanka Spanien, Privatreise mit Fahrer, Tour aus Spanien',
    },
    marketPoland: {
      title: 'Sri Lanka Reisen aus Polen | mit Fahrer',
      description:
        'Private Rundreisen für Gäste aus Polen: mit Fahrer, flexible Tage, lokales Team seit 1992. Jetzt anfragen für Ihre Route bitte. Massgeschneiderte Routen.',
      keywords: 'Sri Lanka Polen, Privatreise mit Fahrer, Tour aus Polen',
    },
    marketRussia: {
      title: 'Sri Lanka Reisen aus Russland | mit Fahrer',
      description:
        'Private Rundreisen für Gäste aus Russland: mit Fahrer, flexible Routen, lokales Team seit 1992. Jetzt anfragen für Ihre Daten. Fuer Gäste aus Europa.',
      keywords: 'Sri Lanka Russland, Privatreise mit Fahrer, Tour aus Russland',
    },
    marketNetherlands: {
      title: 'Sri Lanka Reisen aus den Niederlanden',
      description:
        'Private Rundreisen für Gäste aus den Niederlanden: mit Fahrer, flexible Tage, Flughafenempfang. Seit 1992. Jetzt anfragen. Privater Chauffeur.',
      keywords: 'Sri Lanka Niederlande, Privatreise mit Fahrer, Rundreise Holland',
    },
    marketUK: {
      title: 'Sri Lanka Reisen aus UK | privat mit Fahrer',
      description:
        'Private Rundreisen für Gäste aus dem UK: mit Fahrer, flexible Tage, lokales Team seit 1992. Jetzt anfragen für Ihre Reise. Privater Chauffeur.',
      keywords: 'Sri Lanka UK, Privatreise mit Fahrer, Tour aus Grossbritannien',
    },
    marketAustria: {
      title: 'Sri Lanka Rundreise aus Österreich | Privater Fahrer',
      description: 'Private Rundreise für Gäste aus Österreich: Ankunft in Colombo und Weiterreise mit Fahrer Guide.',
      keywords: 'Sri Lanka Österreich, Rundreise Österreich, privater Fahrer',
    },
    marketSwitzerland: {
      title: 'Sri Lanka Rundreise aus der Schweiz | Privater Fahrer',
      description: 'Private Rundreise für Gäste aus der Schweiz, mit lokalem Fahrer nach der Landung in Colombo.',
      keywords: 'Sri Lanka Schweiz, Rundreise Schweiz, privater Fahrer',
    },
    monthJanuary: {
      title: 'Sri Lanka im Januar | Wetter und Reisetipps',
      description: 'Sri Lanka im Januar: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka Januar, Wetter Sri Lanka Januar, Rundreise Januar',
    },
    monthFebruary: {
      title: 'Sri Lanka im Februar | Wetter und Reisetipps',
      description: 'Sri Lanka im Februar: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka Februar, Wetter Sri Lanka Februar, Rundreise Februar',
    },
    monthMarch: {
      title: 'Sri Lanka im März | Wetter und Reisetipps',
      description: 'Sri Lanka im März: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka März, Wetter Sri Lanka März, Rundreise März',
    },
    monthApril: {
      title: 'Sri Lanka im April | Wetter und Reisetipps',
      description: 'Sri Lanka im April: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka April, Wetter Sri Lanka April, Rundreise April',
    },
    monthMay: {
      title: 'Sri Lanka im Mai | Wetter und Reisetipps',
      description: 'Sri Lanka im Mai: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka Mai, Wetter Sri Lanka Mai, Rundreise Mai',
    },
    monthJune: {
      title: 'Sri Lanka im Juni | Wetter und Reisetipps',
      description: 'Sri Lanka im Juni: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka Juni, Wetter Sri Lanka Juni, Rundreise Juni',
    },
    monthJuly: {
      title: 'Sri Lanka im Juli | Wetter und Reisetipps',
      description: 'Sri Lanka im Juli: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka Juli, Wetter Sri Lanka Juli, Rundreise Juli',
    },
    monthAugust: {
      title: 'Sri Lanka im August | Wetter, Ostkuste & Kulturdreieck',
      description:
        'Sri Lanka im August: Sudwestmonsun vs Ostkuste, Sigiriya, Kandy Perahera, Yala und private Routen statt nassem Sudkusten Strandurlaub.',
      keywords: 'Sri Lanka August, Regenzeit August, Ostkuste August, Reisezeit August',
    },
    monthSeptember: {
      title: 'Sri Lanka im September | Wetter und Reisetipps',
      description: 'Sri Lanka im September: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka September, Wetter Sri Lanka September, Rundreise September',
    },
    monthOctober: {
      title: 'Sri Lanka im Oktober | Wetter und Reisetipps',
      description: 'Sri Lanka im Oktober: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka Oktober, Wetter Sri Lanka Oktober, Rundreise Oktober',
    },
    monthNovember: {
      title: 'Sri Lanka im November | Wetter und Reisetipps',
      description: 'Sri Lanka im November: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka November, Wetter Sri Lanka November, Rundreise November',
    },
    monthDecember: {
      title: 'Sri Lanka im Dezember | Wetter und Reisetipps',
      description: 'Sri Lanka im Dezember: Regionen, Wetter und Ideen für eine private Rundreise mit Fahrer.',
      keywords: 'Sri Lanka Dezember, Wetter Sri Lanka Dezember, Rundreise Dezember',
    },
    terms: {
      title: 'Nutzungsbedingungen | Sundown Tours Sri Lanka',
      description: 'Nutzungsbedingungen für private Touren und Fahrerbuchungen bei Sundown Tours Sri Lanka.',
      keywords: 'Nutzungsbedingungen, AGB Sundown Tours',
    },
    bookingPolicy: {
      title: 'Buchungsbedingungen | Sundown Tours Sri Lanka',
      description: 'Anzahlungen, Bestätigung und Änderungen bei privaten Rundreisen von Sundown Tours.',
      keywords: 'Buchungsbedingungen, Anzahlung Sri Lanka Tour',
    },
    bookingSuccess: {
      title: 'Buchung eingegangen | Sundown Tours Sri Lanka',
      description: 'Vielen Dank fur Ihre Sri Lanka Reiseanfrage. Unser Team meldet sich in Kurze bei Ihnen.',
      keywords: '',
    },
  },
};
