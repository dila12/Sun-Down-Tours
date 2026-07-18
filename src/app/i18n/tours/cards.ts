import type { Locale } from '../locales';

/** Visible card/list copy for a single tour in one locale. */
export interface TourCardCopy {
  title: string;
  days: string;
  persons: string;
  imageAlt: string;
}

type CardDict = Record<string, TourCardCopy>;

const en: CardDict = {
  ellaDay: {
    title: 'Ella Day Tour – Departing from Anywhere in Sri Lanka',
    days: '1 day',
    persons: '1–20 travellers',
    imageAlt: 'Ella day tour with Nine Arch Bridge and hill country views',
  },
  galleDay: {
    title: 'Galle Day Tour – Departing from Anywhere in Sri Lanka',
    days: '1 day',
    persons: '1–20 travellers',
    imageAlt: 'Galle Fort day tour on Sri Lanka’s south coast',
  },
  kandyDay: {
    title: 'Kandy Day Tour – Departing from Anywhere in Sri Lanka',
    days: '1 day',
    persons: '1–20 travellers',
    imageAlt: 'Kandy day tour with Temple of the Tooth',
  },
  sigiriyaDay: {
    title: 'Sigiriya Day Tour – Departing from Anywhere in Sri Lanka',
    days: '1 day',
    persons: '1–20 travellers',
    imageAlt: 'Sigiriya Lion Rock day tour in the Cultural Triangle',
  },
  tour2ey: {
    title: '2 Day Ella & Yala Safari Tour with 4-Star Hotel Accommodation & Private Transport',
    days: '2 days',
    persons: '1–20 travellers',
    imageAlt: '2 day Ella and Yala private safari tour Sri Lanka',
  },
  tour2ek: {
    title: '2 Day Ella & Kandy Private Tour with 4-Star Hotel Accommodation & Private Transport',
    days: '2 days',
    persons: '1–20 travellers',
    imageAlt: '2 day Ella and Kandy private tour Sri Lanka',
  },
  tour4: {
    title: '4 Day Sri Lanka Private Tour – Kandy, Ella & Yala Safari',
    days: '4 days',
    persons: '1–20 travellers',
    imageAlt: '4 day Sri Lanka private tour with safari',
  },
  tour5: {
    title: '5 Day Sri Lanka Tour with 4-Star Hotel Accommodation, Safari & Beach Stay',
    days: '5 days',
    persons: '1–20 travellers',
    imageAlt: '5 day Sri Lanka tour with safari and beach',
  },
  tour6: {
    title: '6 Day Sri Lanka Private Tour with 4-Star Hotel Accommodation, Safari & Beach Stay',
    days: '6 days',
    persons: '1–20 travellers',
    imageAlt: '6 day Sri Lanka private tour package',
  },
  tour7: {
    title: '7 Day Sri Lanka Tour with 4-Star Hotel Accommodation, Safari & Beach Stay',
    days: '7 days',
    persons: '1–20 travellers',
    imageAlt: '7 day Sri Lanka round tour with safari and beach',
  },
  tour8: {
    title: '8 Day Sri Lanka Private Tour with 4-Star Hotel Accommodation, Safari & Beach Stay',
    days: '8 days',
    persons: '1–20 travellers',
    imageAlt: '8 day Sri Lanka private tour package',
  },
  tour10: {
    title: '10 Day Sri Lanka Tour with 4-Star Hotel Accommodation & Private Transport',
    days: '10 days',
    persons: '1–20 travellers',
    imageAlt: '10 day Sri Lanka island tour package',
  },
};

const de: CardDict = {
  ellaDay: {
    title: 'Ella Tagestour – Abholung überall in Sri Lanka',
    days: '1 Tag',
    persons: '1–20 Reisende',
    imageAlt: 'Ella Tagestour mit Nine Arch Bridge und Bergland',
  },
  galleDay: {
    title: 'Galle Tagestour – Abholung überall in Sri Lanka',
    days: '1 Tag',
    persons: '1–20 Reisende',
    imageAlt: 'Galle Fort Tagestour an der Südküste Sri Lankas',
  },
  kandyDay: {
    title: 'Kandy Tagestour – Abholung überall in Sri Lanka',
    days: '1 Tag',
    persons: '1–20 Reisende',
    imageAlt: 'Kandy Tagestour mit Zahntempel',
  },
  sigiriyaDay: {
    title: 'Sigiriya Tagestour – Abholung überall in Sri Lanka',
    days: '1 Tag',
    persons: '1–20 Reisende',
    imageAlt: 'Sigiriya Löwenfelsen Tagestour im Kulturdreieck',
  },
  tour2ey: {
    title: '2 Tage Ella & Yala Safari mit 4-Sterne-Hotelunterkunft & Privattransfer',
    days: '2 Tage',
    persons: '1–20 Reisende',
    imageAlt: '2 Tage Ella und Yala Privatsafari Sri Lanka',
  },
  tour2ek: {
    title: '2 Tage Ella & Kandy Privatreise mit 4-Sterne-Hotelunterkunft & Privattransfer',
    days: '2 Tage',
    persons: '1–20 Reisende',
    imageAlt: '2 Tage Ella und Kandy Privatreise Sri Lanka',
  },
  tour4: {
    title: '4 Tage Sri Lanka Privatreise – Kandy, Ella & Yala Safari',
    days: '4 Tage',
    persons: '1–20 Reisende',
    imageAlt: '4 Tage Sri Lanka Privatreise mit Safari',
  },
  tour5: {
    title: '5 Tage Sri Lanka Rundreise mit 4-Sterne-Hotelunterkunft, Safari & Strand',
    days: '5 Tage',
    persons: '1–20 Reisende',
    imageAlt: '5 Tage Sri Lanka Reise mit Safari und Strand',
  },
  tour6: {
    title: '6 Tage Sri Lanka Privatreise mit 4-Sterne-Hotelunterkunft, Safari & Strand',
    days: '6 Tage',
    persons: '1–20 Reisende',
    imageAlt: '6 Tage Sri Lanka Privatreisepaket',
  },
  tour7: {
    title: '7 Tage Sri Lanka Rundreise mit 4-Sterne-Hotelunterkunft, Safari & Strand',
    days: '7 Tage',
    persons: '1–20 Reisende',
    imageAlt: '7 Tage Sri Lanka Rundreise mit Safari und Strand',
  },
  tour8: {
    title: '8 Tage Sri Lanka Privatreise mit 4-Sterne-Hotelunterkunft, Safari & Strand',
    days: '8 Tage',
    persons: '1–20 Reisende',
    imageAlt: '8 Tage Sri Lanka Privatreisepaket',
  },
  tour10: {
    title: '10 Tage Sri Lanka Rundreise mit 4-Sterne-Hotelunterkunft & Privattransfer',
    days: '10 Tage',
    persons: '1–20 Reisende',
    imageAlt: '10 Tage Sri Lanka Inselreise',
  },
};

const fr: CardDict = {
  ellaDay: {
    title: 'Excursion à Ella – Départ de n’importe où au Sri Lanka',
    days: '1 jour',
    persons: '1–20 voyageurs',
    imageAlt: 'Excursion à Ella avec le Nine Arch Bridge et les montagnes',
  },
  galleDay: {
    title: 'Excursion à Galle – Départ de n’importe où au Sri Lanka',
    days: '1 jour',
    persons: '1–20 voyageurs',
    imageAlt: 'Excursion au fort de Galle sur la côte sud',
  },
  kandyDay: {
    title: 'Excursion à Kandy – Départ de n’importe où au Sri Lanka',
    days: '1 jour',
    persons: '1–20 voyageurs',
    imageAlt: 'Excursion à Kandy avec le Temple de la Dent',
  },
  sigiriyaDay: {
    title: 'Excursion à Sigiriya – Départ de n’importe où au Sri Lanka',
    days: '1 jour',
    persons: '1–20 voyageurs',
    imageAlt: 'Excursion à Sigiriya dans le triangle culturel',
  },
  tour2ey: {
    title: 'Circuit 2 jours Ella & Yala safari – hébergement en hôtel 4 étoiles & transport privé',
    days: '2 jours',
    persons: '1–20 voyageurs',
    imageAlt: 'Circuit privé 2 jours Ella et Yala Sri Lanka',
  },
  tour2ek: {
    title: 'Circuit 2 jours Ella & Kandy – hébergement en hôtel 4 étoiles & transport privé',
    days: '2 jours',
    persons: '1–20 voyageurs',
    imageAlt: 'Circuit privé 2 jours Ella et Kandy Sri Lanka',
  },
  tour4: {
    title: 'Circuit privé 4 jours – Kandy, Ella & safari à Yala',
    days: '4 jours',
    persons: '1–20 voyageurs',
    imageAlt: 'Circuit privé 4 jours au Sri Lanka avec safari',
  },
  tour5: {
    title: 'Circuit 5 jours – hébergement en hôtel 4 étoiles, safari & plage',
    days: '5 jours',
    persons: '1–20 voyageurs',
    imageAlt: 'Circuit 5 jours Sri Lanka safari et plage',
  },
  tour6: {
    title: 'Circuit privé 6 jours – hébergement en hôtel 4 étoiles, safari & plage',
    days: '6 jours',
    persons: '1–20 voyageurs',
    imageAlt: 'Circuit privé 6 jours au Sri Lanka',
  },
  tour7: {
    title: 'Circuit 7 jours – hébergement en hôtel 4 étoiles, safari & plage',
    days: '7 jours',
    persons: '1–20 voyageurs',
    imageAlt: 'Circuit 7 jours Sri Lanka safari et plage',
  },
  tour8: {
    title: 'Circuit privé 8 jours – hébergement en hôtel 4 étoiles, safari & plage',
    days: '8 jours',
    persons: '1–20 voyageurs',
    imageAlt: 'Circuit privé 8 jours au Sri Lanka',
  },
  tour10: {
    title: 'Circuit 10 jours – hébergement en hôtel 4 étoiles & transport privé',
    days: '10 jours',
    persons: '1–20 voyageurs',
    imageAlt: 'Circuit 10 jours autour du Sri Lanka',
  },
};

const it: CardDict = {
  ellaDay: {
    title: 'Escursione a Ella – Partenza da qualsiasi località in Sri Lanka',
    days: '1 giorno',
    persons: '1–20 viaggiatori',
    imageAlt: 'Escursione a Ella con Nine Arch Bridge e colline',
  },
  galleDay: {
    title: 'Escursione a Galle – Partenza da qualsiasi località in Sri Lanka',
    days: '1 giorno',
    persons: '1–20 viaggiatori',
    imageAlt: 'Escursione al Forte di Galle sulla costa sud',
  },
  kandyDay: {
    title: 'Escursione a Kandy – Partenza da qualsiasi località in Sri Lanka',
    days: '1 giorno',
    persons: '1–20 viaggiatori',
    imageAlt: 'Escursione a Kandy con il Tempio del Dente',
  },
  sigiriyaDay: {
    title: 'Escursione a Sigiriya – Partenza da qualsiasi località in Sri Lanka',
    days: '1 giorno',
    persons: '1–20 viaggiatori',
    imageAlt: 'Escursione a Sigiriya nel triangolo culturale',
  },
  tour2ey: {
    title: 'Tour 2 giorni Ella & Yala safari – sistemazione in hotel 4 stelle e trasporto privato',
    days: '2 giorni',
    persons: '1–20 viaggiatori',
    imageAlt: 'Tour privato 2 giorni Ella e Yala Sri Lanka',
  },
  tour2ek: {
    title: 'Tour 2 giorni Ella & Kandy – sistemazione in hotel 4 stelle e trasporto privato',
    days: '2 giorni',
    persons: '1–20 viaggiatori',
    imageAlt: 'Tour privato 2 giorni Ella e Kandy Sri Lanka',
  },
  tour4: {
    title: 'Tour privato 4 giorni – Kandy, Ella e safari a Yala',
    days: '4 giorni',
    persons: '1–20 viaggiatori',
    imageAlt: 'Tour privato 4 giorni in Sri Lanka con safari',
  },
  tour5: {
    title: 'Tour 5 giorni – sistemazione in hotel 4 stelle, safari e spiaggia',
    days: '5 giorni',
    persons: '1–20 viaggiatori',
    imageAlt: 'Tour 5 giorni Sri Lanka safari e spiaggia',
  },
  tour6: {
    title: 'Tour privato 6 giorni – sistemazione in hotel 4 stelle, safari e spiaggia',
    days: '6 giorni',
    persons: '1–20 viaggiatori',
    imageAlt: 'Tour privato 6 giorni in Sri Lanka',
  },
  tour7: {
    title: 'Tour 7 giorni – sistemazione in hotel 4 stelle, safari e spiaggia',
    days: '7 giorni',
    persons: '1–20 viaggiatori',
    imageAlt: 'Tour 7 giorni Sri Lanka safari e spiaggia',
  },
  tour8: {
    title: 'Tour privato 8 giorni – sistemazione in hotel 4 stelle, safari e spiaggia',
    days: '8 giorni',
    persons: '1–20 viaggiatori',
    imageAlt: 'Tour privato 8 giorni in Sri Lanka',
  },
  tour10: {
    title: 'Tour 10 giorni – sistemazione in hotel 4 stelle e trasporto privato',
    days: '10 giorni',
    persons: '1–20 viaggiatori',
    imageAlt: 'Tour 10 giorni intorno allo Sri Lanka',
  },
};

const es: CardDict = {
  ellaDay: {
    title: 'Excursión a Ella – Salida desde cualquier punto de Sri Lanka',
    days: '1 día',
    persons: '1–20 viajeros',
    imageAlt: 'Excursión a Ella con el Nine Arch Bridge y montañas',
  },
  galleDay: {
    title: 'Excursión a Galle – Salida desde cualquier punto de Sri Lanka',
    days: '1 día',
    persons: '1–20 viajeros',
    imageAlt: 'Excursión al Fuerte de Galle en la costa sur',
  },
  kandyDay: {
    title: 'Excursión a Kandy – Salida desde cualquier punto de Sri Lanka',
    days: '1 día',
    persons: '1–20 viajeros',
    imageAlt: 'Excursión a Kandy con el Templo del Diente',
  },
  sigiriyaDay: {
    title: 'Excursión a Sigiriya – Salida desde cualquier punto de Sri Lanka',
    days: '1 día',
    persons: '1–20 viajeros',
    imageAlt: 'Excursión a Sigiriya en el triángulo cultural',
  },
  tour2ey: {
    title: 'Circuito 2 días Ella y Yala safari – alojamiento en hotel de 4 estrellas y transporte privado',
    days: '2 días',
    persons: '1–20 viajeros',
    imageAlt: 'Circuito privado 2 días Ella y Yala Sri Lanka',
  },
  tour2ek: {
    title: 'Circuito 2 días Ella y Kandy – alojamiento en hotel de 4 estrellas y transporte privado',
    days: '2 días',
    persons: '1–20 viajeros',
    imageAlt: 'Circuito privado 2 días Ella y Kandy Sri Lanka',
  },
  tour4: {
    title: 'Circuito privado 4 días – Kandy, Ella y safari en Yala',
    days: '4 días',
    persons: '1–20 viajeros',
    imageAlt: 'Circuito privado 4 días por Sri Lanka con safari',
  },
  tour5: {
    title: 'Circuito 5 días – alojamiento en hotel de 4 estrellas, safari y playa',
    days: '5 días',
    persons: '1–20 viajeros',
    imageAlt: 'Circuito 5 días Sri Lanka safari y playa',
  },
  tour6: {
    title: 'Circuito privado 6 días – alojamiento en hotel de 4 estrellas, safari y playa',
    days: '6 días',
    persons: '1–20 viajeros',
    imageAlt: 'Circuito privado 6 días por Sri Lanka',
  },
  tour7: {
    title: 'Circuito 7 días – alojamiento en hotel de 4 estrellas, safari y playa',
    days: '7 días',
    persons: '1–20 viajeros',
    imageAlt: 'Circuito 7 días Sri Lanka safari y playa',
  },
  tour8: {
    title: 'Circuito privado 8 días – alojamiento en hotel de 4 estrellas, safari y playa',
    days: '8 días',
    persons: '1–20 viajeros',
    imageAlt: 'Circuito privado 8 días por Sri Lanka',
  },
  tour10: {
    title: 'Circuito 10 días – alojamiento en hotel de 4 estrellas y transporte privado',
    days: '10 días',
    persons: '1–20 viajeros',
    imageAlt: 'Circuito 10 días por la isla de Sri Lanka',
  },
};

const pl: CardDict = {
  ellaDay: {
    title: 'Wycieczka do Elli – odbiór z dowolnego miejsca na Sri Lance',
    days: '1 dzień',
    persons: '1–20 podróżnych',
    imageAlt: 'Wycieczka do Elli z Nine Arch Bridge i górami',
  },
  galleDay: {
    title: 'Wycieczka do Galle – odbiór z dowolnego miejsca na Sri Lance',
    days: '1 dzień',
    persons: '1–20 podróżnych',
    imageAlt: 'Wycieczka do Fortu Galle na południowym wybrzeżu',
  },
  kandyDay: {
    title: 'Wycieczka do Kandy – odbiór z dowolnego miejsca na Sri Lance',
    days: '1 dzień',
    persons: '1–20 podróżnych',
    imageAlt: 'Wycieczka do Kandy ze Świątynią Zęba',
  },
  sigiriyaDay: {
    title: 'Wycieczka do Sigiriyi – odbiór z dowolnego miejsca na Sri Lance',
    days: '1 dzień',
    persons: '1–20 podróżnych',
    imageAlt: 'Wycieczka do Sigiriyi w trójkącie kultury',
  },
  tour2ey: {
    title: 'Wycieczka 2 dni Ella i Yala safari – zakwaterowanie w hotelu 4-gwiazdkowym i prywatny transport',
    days: '2 dni',
    persons: '1–20 podróżnych',
    imageAlt: 'Prywatna wycieczka 2 dni Ella i Yala Sri Lanka',
  },
  tour2ek: {
    title: 'Wycieczka 2 dni Ella i Kandy – zakwaterowanie w hotelu 4-gwiazdkowym i prywatny transport',
    days: '2 dni',
    persons: '1–20 podróżnych',
    imageAlt: 'Prywatna wycieczka 2 dni Ella i Kandy Sri Lanka',
  },
  tour4: {
    title: 'Prywatna wycieczka 4 dni – Kandy, Ella i safari w Yali',
    days: '4 dni',
    persons: '1–20 podróżnych',
    imageAlt: 'Prywatna wycieczka 4 dni po Sri Lance z safari',
  },
  tour5: {
    title: 'Wycieczka 5 dni – zakwaterowanie w hotelu 4-gwiazdkowym, safari i plaża',
    days: '5 dni',
    persons: '1–20 podróżnych',
    imageAlt: 'Wycieczka 5 dni Sri Lanka safari i plaża',
  },
  tour6: {
    title: 'Prywatna wycieczka 6 dni – zakwaterowanie w hotelu 4-gwiazdkowym, safari i plaża',
    days: '6 dni',
    persons: '1–20 podróżnych',
    imageAlt: 'Prywatna wycieczka 6 dni po Sri Lance',
  },
  tour7: {
    title: 'Wycieczka 7 dni – zakwaterowanie w hotelu 4-gwiazdkowym, safari i plaża',
    days: '7 dni',
    persons: '1–20 podróżnych',
    imageAlt: 'Wycieczka 7 dni Sri Lanka safari i plaża',
  },
  tour8: {
    title: 'Prywatna wycieczka 8 dni – zakwaterowanie w hotelu 4-gwiazdkowym, safari i plaża',
    days: '8 dni',
    persons: '1–20 podróżnych',
    imageAlt: 'Prywatna wycieczka 8 dni po Sri Lance',
  },
  tour10: {
    title: 'Wycieczka 10 dni – zakwaterowanie w hotelu 4-gwiazdkowym i prywatny transport',
    days: '10 dni',
    persons: '1–20 podróżnych',
    imageAlt: 'Wycieczka 10 dni po wyspie Sri Lanka',
  },
};

const ru: CardDict = {
  ellaDay: {
    title: 'Тур в Эллу – выезд из любой точки Шри-Ланки',
    days: '1 день',
    persons: '1–20 путешественников',
    imageAlt: 'Тур в Эллу с мостом Nine Arch и горами',
  },
  galleDay: {
    title: 'Тур в Галле – выезд из любой точки Шри-Ланки',
    days: '1 день',
    persons: '1–20 путешественников',
    imageAlt: 'Тур в форт Галле на южном побережье',
  },
  kandyDay: {
    title: 'Тур в Канди – выезд из любой точки Шри-Ланки',
    days: '1 день',
    persons: '1–20 путешественников',
    imageAlt: 'Тур в Канди с Храмом Зуба Будды',
  },
  sigiriyaDay: {
    title: 'Тур в Сигирию – выезд из любой точки Шри-Ланки',
    days: '1 день',
    persons: '1–20 путешественников',
    imageAlt: 'Тур в Сигирию в культурном треугольнике',
  },
  tour2ey: {
    title: 'Тур 2 дня Элла и Яла сафари – размещение в 4-звёздочном отеле и частный трансфер',
    days: '2 дня',
    persons: '1–20 путешественников',
    imageAlt: 'Частный тур 2 дня Элла и Яла Шри-Ланка',
  },
  tour2ek: {
    title: 'Тур 2 дня Элла и Канди – размещение в 4-звёздочном отеле и частный трансфер',
    days: '2 дня',
    persons: '1–20 путешественников',
    imageAlt: 'Частный тур 2 дня Элла и Канди Шри-Ланка',
  },
  tour4: {
    title: 'Частный тур 4 дня – Канди, Элла и сафари в Яле',
    days: '4 дня',
    persons: '1–20 путешественников',
    imageAlt: 'Частный тур 4 дня по Шри-Ланке с сафари',
  },
  tour5: {
    title: 'Тур 5 дней – размещение в 4-звёздочном отеле, сафари и пляж',
    days: '5 дней',
    persons: '1–20 путешественников',
    imageAlt: 'Тур 5 дней Шри-Ланка сафари и пляж',
  },
  tour6: {
    title: 'Частный тур 6 дней – размещение в 4-звёздочном отеле, сафари и пляж',
    days: '6 дней',
    persons: '1–20 путешественников',
    imageAlt: 'Частный тур 6 дней по Шри-Ланке',
  },
  tour7: {
    title: 'Тур 7 дней – размещение в 4-звёздочном отеле, сафари и пляж',
    days: '7 дней',
    persons: '1–20 путешественников',
    imageAlt: 'Тур 7 дней Шри-Ланка сафари и пляж',
  },
  tour8: {
    title: 'Частный тур 8 дней – размещение в 4-звёздочном отеле, сафари и пляж',
    days: '8 дней',
    persons: '1–20 путешественников',
    imageAlt: 'Частный тур 8 дней по Шри-Ланке',
  },
  tour10: {
    title: 'Тур 10 дней – размещение в 4-звёздочном отеле и частный трансфер',
    days: '10 дней',
    persons: '1–20 путешественников',
    imageAlt: 'Тур 10 дней по острову Шри-Ланка',
  },
};

export const TOUR_CARDS: Record<Locale, CardDict> = {
  en,
  de,
  fr,
  it,
  es,
  pl,
  ru,
};
