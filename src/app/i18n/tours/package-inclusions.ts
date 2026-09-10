import type { Locale } from '../locales';

const deIncludes = [
  'Klimatisiertes Privatfahrzeug wahrend der gesamten Reise',
  'Fahrer Guide verfugbar auf Deutsch, Englisch, Polnisch und Russisch',
  'Flughafen Abholung und Ruckfahrt',
  'Halbpension Unterkunft mit 4 Sterne Hotel',
  'Kraftstoff, Parkgebuhren und Mautgebuhren',
  'Kostenloses Flaschenwasser wahrend der Transfers',
  'Eine Panorama Zugfahrt von Nanu Oya nach Ella',
  'Zugtickets (nach Verfugbarkeit)',
];

const deExcludes = [
  'Eintrittsgelder zu Sehenswurdigkeiten (vor Ort direkt von Reisenden zu zahlen)',
  'Mittagessen',
];

/** Shared include list for multi day packages (not day tours). */
export const PACKAGE_INCLUDES: Record<Locale, string[]> = {
  en: [
    'Private air conditioned vehicle throughout the tour',
    'Driver Guide available in English, German, Polish and Russian',
    'Airport pickup and drop off',
    'Half board accommodation with 4 Star hotel',
    'Fuel, parking fees and highway tolls',
    'Complimentary bottled water during transfers',
    'A Scenic Train Ride from Nanu Oya to Ella',
    'Train tickets (subject to availability)',
  ],
  de: deIncludes,
  nl: deIncludes,
  fr: [
    'Vehicule prive climatise pendant tout le circuit',
    'Chauffeur Guide disponible en anglais, allemand, polonais et russe',
    'Prise en charge et depot a l aeroport',
    'Hebergement en demi pension avec hotel 4 etoiles',
    'Carburant, frais de parking et peages',
    'Eau en bouteille offerte pendant les transferts',
    'Un trajet en train panoramique de Nanu Oya a Ella',
    'Billets de train (sous reserve de disponibilite)',
  ],
  it: [
    'Veicolo privato climatizzato per tutto il tour',
    'Autista guida disponibile in inglese, tedesco, polacco e russo',
    'Pickup e drop off in aeroporto',
    'Sistemazione in mezza pensione con hotel 4 stelle',
    'Carburante, parcheggio e pedaggi',
    'Acqua in bottiglia in omaggio durante i trasferimenti',
    'Un viaggio in treno panoramico da Nanu Oya a Ella',
    'Biglietti del treno (soggetti a disponibilita)',
  ],
  es: [
    'Vehiculo privado con aire acondicionado durante todo el circuito',
    'Chofer guia disponible en ingles, aleman, polaco y ruso',
    'Recogida y regreso al aeropuerto',
    'Alojamiento en media pension con hotel de 4 estrellas',
    'Combustible, parking y peajes',
    'Agua embotellada de cortesia durante los traslados',
    'Un viaje en tren panoramico de Nanu Oya a Ella',
    'Billetes de tren (sujeto a disponibilidad)',
  ],
  pl: [
    'Prywatny klimatyzowany pojazd przez cala wycieczke',
    'Kierowca przewodnik dostepny po angielsku, niemiecku, polsku i rosyjsku',
    'Odbior i odwoz na lotnisko',
    'Zakwaterowanie Half Board z hotelem 4 gwiazdkowym',
    'Paliwo, parking i oplat autostradowe',
    'Woda butelkowana podczas transferow',
    'Panoramiczna przejazdzka pociagiem z Nanu Oya do Ella',
    'Bilety kolejowe (w zaleznosci od dostepnosci)',
  ],
  ru: [
    'Частный автомобиль с кондиционером на весь тур',
    'Водитель гид доступен на английском, немецком, польском и русском',
    'Встреча и трансфер в аэропорт',
    'Проживание полупансион с отелем 4 звезды',
    'Топливо, парковка и дорожные сборы',
    'Бутилированная вода во время трансферов',
    'Панорамная поездка на поезде от Nanu Oya до Ella',
    'Билеты на поезд (при наличии мест)',
  ],
};

/** Shared exclude list for multi day packages (not day tours). */
export const PACKAGE_EXCLUDES: Record<Locale, string[]> = {
  en: [
    'Admission / entrance fees to attractions (required to be paid directly on site by travelers)',
    'Lunch',
  ],
  de: deExcludes,
  nl: deExcludes,
  fr: [
    'Frais d entree aux attractions (a payer sur place par les voyageurs)',
    'Dejeuner',
  ],
  it: [
    'Biglietti di ingresso alle attrazioni (da pagare in loco dai viaggiatori)',
    'Pranzo',
  ],
  es: [
    'Entradas a atracciones (a pagar in situ por los viajeros)',
    'Almuerzo',
  ],
  pl: [
    'Bilety wstepu do atrakcji (platne na miejscu przez podroznych)',
    'Lunch',
  ],
  ru: [
    'Входные билеты на достопримечательности (оплачиваются путешественниками на месте)',
    'Обед',
  ],
};
