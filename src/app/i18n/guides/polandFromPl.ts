import type { ArticleContent } from '../articles/types';

/**
 * Poland market landing page (pageId: marketPoland).
 * Targets PL Google Trends without competing with Itaka, TUI, Rainbow or airlines.
 */
export const POLAND_FROM_PL_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Holidays from Poland: Weather, Flights from Warsaw and Private Tours',
    lead:
      'Polish travellers searching for Sri Lanka wakacje usually want weather, flight time from Warsaw, visa rules and how a private wycieczka worksnot an Itaka or TUI coach package. This page covers CMB airport, ETA (eta.gov.lk), monsoon seasons, Lion Rock, safari and chauffeur tours after you land.',
    heroImage: 'assets/img/package-2.webp',
    heroAlt: 'Private Sri Lanka tour with chauffeur guide for travellers from Poland',
    sections: [
      {
        id: 'who',
        title: 'Sri Lanka holidays from Polandprivate tour, not a tour operator brochure',
        body: 'Sundown Tours is based in Sri Lanka. We do not sell airline tickets and we are not Itaka, Rainbow or TUI. We meet you at Colombo (CMB) with a licensed chauffeur guide and run a tailor made itinerary: Cultural Triangle, hill country, safari and beach.\n\nSearches such as “loty Sri Lanka”, Flydubai or Air Arabia are shopping for seats. Searches such as “wakacje Sri Lanka”, “wycieczka Sri Lanka”, “co zobaczyc” and “atrakcje” are what we organise. All inclusive hotel brands (RIU, Club Bentota and similar) are hotel products; we can book a west coast resort with meals if you want, but the core offer is a private island circuit.',
      },
      {
        id: 'flight',
        title: 'How long is the flight from Warsaw to Sri Lanka?',
        body: 'There is usually no useful nonstop from Warsaw. Typical air time is about 10 to 13 hours plus a Gulf or Istanbul connection (Dubai, Doha, Abu Dhabi and similar hubs appear in search because they are the usual change points). We do not quote airfares or sell Flydubai/Air Arabia tickets.\n\nOnce you have dates, we quote the ground tour and plan the first hotel night around your real CMB landing, including overnight arrivals.',
      },
      {
        id: 'airport',
        title: 'Sri Lanka airport (lotnisko) vs Colombo / Kolombo',
        body: 'Bandaranaike International Airport is at Katunayake, not downtown Colombo (often spelled Kolombo in Polish). Negombo is 20 to 40 minutes from the terminal and suits late Warsaw arrivals. Colombo city is typically  45 to 90 minutes. West coast hotels around Waskaduwa, Ahungalla and Bentota are about 1.5 to 2 hours. Do not drive to Sigiriya the same night after a long haul landing unless you insist.',
      },
      {
        id: 'entry',
        title: 'Visa (wiza) and official government ETA',
        body: 'Polish nationals need an Electronic Travel Authorisation (ETA) before boarding. From 25 May 2026 the tourist ETA is free for 40 listed countries including Poland, for 30 days with double entryyou still apply in advance at eta.gov.lk (the official sri lanka gov portal for entry, not a lookalike site).\n\nKeep about six months’ passport validity. Apply only on the official site.',
      },
      {
        id: 'weather',
        title: 'Weather, rainy season and when to go',
        body: 'There is no single “best month”. December to March (including January and February) is peak dry weather for west and south beaches: Negombo, Bentota, Ahungalla, Mirissa, Weligama, Tangalle, Galle. May to September is the southwest monsoon (pora deszczowa) on that coast; then the east and Cultural Triangle plus dry season safari (Yala, Udawalawe) are usually stronger. November often brings the north east monsoon to the east while the southwest can still work for a beach finish.\n\nSri Lanka is UTC+5:30. Time difference with Poland: 4 hours 30 minutes in winter, 3 hours 30 minutes during Polish summer time. Currency is the Sri Lankan rupee (LKR).',
      },
      {
        id: 'whatToDo',
        title: 'What to see: Lion Rock, Ella, safari, beaches',
        body: 'A first visit typically includes Sigiriya Lion Rock, Dambulla, Kandy, the Kandy to Ella tea country train, a jeep safari at Yala or Udawalawe, and a beach finish at Bentota/Mirissa/Weligama or quieter Tangalle. Seven days covers the highlights. Ten days is calmer.\n\nA Maldives add on is a separate flight from CMB, not a driving day.',
      },
    ],
    faq: [
      {
        q: 'How long is the flight from Warsaw to Sri Lanka?',
        a: 'Typically about 10 to 13 hours in the air plus a connection. We do not sell tickets; we plan your first night around the real arrival at CMB.',
      },
      {
        q: 'When is the rainy season in Sri Lanka?',
        a: 'Two monsoons. southwest (roughly May to September) hits Colombo, Bentota, Galle and the southwest. North east (roughly October to January) hits the east. A private itinerary routes you to the drier coast.',
      },
      {
        q: 'Is this an all inclusive package like Itaka or TUI?',
        a: 'No. We run private chauffeur tours with hotels chosen for your dates. Some west coast resorts offer all inclusive meal plans if you want them; the sightseeing days are not a coach last minute package.',
      },
    ],
    ctaTitle: 'Plan a private Sri Lanka trip from Poland',
    ctaBody: 'Send your Warsaw flight dates and what you want to see. We reply with a tailor made chauffeur itinerary.',
    ctaLabel: 'Contact Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: '7 day private tour' },
      { pageId: 'tour10', label: '10 day tour' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya Lion Rock' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destBentota', label: 'Bentota' },
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destWeligama', label: 'Weligama' },
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destColombo', label: 'Colombo' },
      { pageId: 'destHiriketiya', label: 'Hiriketiya (near Tangalle)' },
    ],
    relatedGuides: [
      { pageId: 'guideVisa', label: 'Visa / ETA' },
      { pageId: 'guideBestTime', label: 'Weather / when to go' },
      { pageId: 'guideSafari', label: 'Safari' },
      { pageId: 'guideBeaches', label: 'Beaches' },
      { pageId: 'guideAirportTransfers', label: 'Airport transfer' },
      { pageId: 'guideBudget', label: 'Currency / budget' },
    ],
  },
  pl: {
    h1: 'Wakacje Sri Lanka z Polski: pogoda, lot z Warszawy i prywatna wycieczka',
    lead:
      'Przy wyszukiwaniu wakacji na Sri Lance Polacy chca zwykle pogody, ile trwa lot z Warszawy, wizy i jak wyglada prywatna wycieczkanie pakietu Itaki, Rainbow ani TUI. Ta strona opisuje lotnisko CMB, ETA na eta.gov.lk, pore deszczowa, Lion Rock, safari i objazd z kierowca po ladowaniu.',
    heroAlt: 'Prywatna wycieczka po Sri Lance z kierowca przewodnikiem dla podroznych z Polski',
    sections: [
      {
        title: 'Wakacje Sri Lanka z Polskiprywatna wycieczka, nie katalog biura',
        body: 'Sundown Tours dziala na Sri Lance. Nie sprzedajemy biletow lotniczych i nie jestesmy Itaka, Rainbow ani TUI. Odbieramy Was na lotnisku Colombo (CMB) licencjonowanym kierowca przewodnikiem i ukladamy trase: Trojkat Kulturowy, kraina herbaty, safari i plaza.\n\nWyszukiwania „loty Sri Lanka”, Flydubai czy Air Arabia dotycza fotela w samolocie. „Wakacje Sri Lanka”, „wycieczka Sri Lanka”, „co zobaczyc” i „atrakcje” to to, co organizujemy od 1992. All inclusive (RIU, Club Bentota i podobne) to produkt hotelowy: mozemy zarezerwowac resort na zachodnim wybrzezu z wyzywieniem, ale trzon oferty to prywatny objazd wyspy, nie last minute autokarem.',
      },
      {
        title: 'Ile trwa lot z Warszawy na Sri Lanke',
        body: 'Zazwyczaj nie ma wygodnego lotu bezposredniego z Warszawy. W powietrzu to zwykle ok. 10 to 13 godzin plus przesiadka w Zatoce lub Stambule (Dubaj, Doha, Abu Zabi pojawiaja sie w trendach, bo to typowe huby). Nie podajemy cen biletow i nie sprzedajemy Flydubai ani Air Arabia.\n\nGdy macie daty, wyceniamy objazd na ladzie i dopasowujemy pierwsza noc hotelu do realnego ladowania na CMB, takze w nocy.',
      },
      {
        title: 'Lotnisko Sri Lanka, Kolombo i pierwsza noc',
        body: 'Miedzynarodowe lotnisko Bandaranaike lezy w Katunayake, nie w centrum Kolombo/Colombo. Negombo to 20 to 40 minut od terminalu i pasuje do poznych przylotow z Warszawy. Miasto Colombo to zwykle  45 to 90 minut. Hotele zachodniego wybrzeza (Waskaduwa, Ahungalla, Bentota) ok. 1,5 to 2 godziny. Nie jedzcie do Sigiriyi tej samej nocy po dlugim locie, chyba ze bardzo chcecie.',
      },
      {
        title: 'Wiza Sri Lanka i oficjalny portal rzadu (ETA)',
        body: 'Obywatele Polski potrzebuja Electronic Travel Authorisation (ETA) przed wejsciem na poklad. Od 25 maja 2026 turystyczna ETA jest bezplatna dla 40 krajow, w tym Polski, na 30 dni z podwojnym wjazdemwniosek i tak skladasz z wyprzedzeniem na eta.gov.lk (oficjalny sri lanka gov od wjazdu, nie strona sobowtor).\n\nPaszport z ok. szescioma miesiacami waznosci. Tylko strona oficjalna.',
      },
      {
        title: 'Pogoda, pora deszczowa i kiedy jechac',
        body: 'Nie ma jednego „najlepszego” miesiaca. Grudzien–marzec (w tym styczen i luty) to szczyt suchej pogody na zachodzie i poludniu: Negombo, Bentota, Ahungalla, Mirissa, Weligama, Tangalle, Galle. Maj to wrzesien to monsun poludniowo zachodni (pora deszczowa) na tym wybrzezu; wtedy wschod, Trojkat Kulturowy i safari w sezonie suchym (Yala, Udawalawe) zwykle wypadaja lepiej. Listopad czesto moczy wschod, a poludniowy zachod bywa nadal dobry na plaze.\n\nGodzina na Sri Lance: UTC+5:30. Roznica z Polska: 4 h 30 zima, 3 h 30 w czasie letnim. Waluta: rupia lankijska (LKR).',
      },
      {
        title: 'Co zobaczyc: Lion Rock, Ella, safari, plaze',
        body: 'Pierwsza wycieczka zwykle obejmuje Lion Rock w Sigiriya, Dambulle, Kandy, pociag Kandy to Ella, safari jeepem w Yala lub Udawalawe i finisz na plazy: Bentota, Mirissa, Weligama albo spokojniejsze Tangalle. Siedem dni pokrywa atrakcje. Dziesiec dni jest spokojniejsze.\n\nPrzedluzenie na Malediwy to osobny lot z CMB, nie dzien jazdy samochodem.',
      },
    ],
    faq: [
      {
        q: 'Ile trwa lot z Warszawy na Sri Lanke?',
        a: 'Zwykle ok. 10 to 13 godzin w powietrzu plus przesiadka. Nie sprzedajemy biletow; dopasowujemy pierwsza noc do realnego ladowania na CMB.',
      },
      {
        q: 'Kiedy jest pora deszczowa na Sri Lance?',
        a: 'Dwa monsuny. Poludniowo zachodni (ok. maj to wrzesien) obejmuje Kolombo, Bentote, Galle i poludniowy zachod. Polnocno wschodni (ok. pazdziernik to styczen)wschod. Prywatna trasa prowadzi na suchsze wybrzeze.',
      },
      {
        q: 'Jaka jest pogoda w styczniu, lutym i listopadzie?',
        a: 'Styczen i luty to zwykle szczyt suchej pogody na zachodzie i poludniu. Listopad bywa mieszany: wschod czesto mokry, poludniowy zachod czesto jeszcze dobry na plaze. Szczegoly w przewodniku „kiedy jechac”.',
      },
      {
        q: 'Czy to all inclusive jak Itaka, Rainbow albo TUI?',
        a: 'Nie. Prowadzimy prywatne wycieczki z kierowca i hotelami dobranymi do dat. Czesc resortow na zachodnim wybrzezu ma all inclusive, jesli tego chcecie; dni zwiedzania to nie last minute autokarem.',
      },
      {
        q: 'Jaka jest godzina i waluta na Sri Lance?',
        a: 'UTC+5:30: 4 h 30 przed Polska zima, 3 h 30 latem. Waluta to rupia lankijska (LKR).',
      },
    ],
    ctaTitle: 'Zaplanuj prywatne wakacje na Sri Lance z Polski',
    ctaBody: 'Wyslijcie daty lotu z Warszawy i co chcecie zobaczyc. Odpowiadamy prywatna trasa z kierowca.',
    ctaLabel: 'Kontakt Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: 'Wycieczka 7 dni' },
      { pageId: 'tour10', label: 'Wycieczka 10 dni' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Lion Rock (Sigiriya)' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destBentota', label: 'Bentota' },
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destWeligama', label: 'Weligama' },
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destColombo', label: 'Kolombo' },
      { pageId: 'destHiriketiya', label: 'Hiriketiya (kolo Tangalle)' },
    ],
    relatedGuides: [
      { pageId: 'guideVisa', label: 'Wiza / ETA' },
      { pageId: 'guideBestTime', label: 'Pogoda / kiedy jechac' },
      { pageId: 'guideSafari', label: 'Safari' },
      { pageId: 'guideBeaches', label: 'Plaze' },
      { pageId: 'guideAirportTransfers', label: 'Transfer z lotniska' },
      { pageId: 'guideBudget', label: 'Waluta / budzet' },
    ],
  },
};
