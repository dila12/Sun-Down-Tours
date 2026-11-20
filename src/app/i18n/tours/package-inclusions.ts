import type { Locale } from '../locales';

const deIncludes = [
  'Klimatisiertes Privatfahrzeug wahrend der gesamten Reise',
  'Privater englischsprachiger Fahrer immer inklusive',
  'Optionaler Sprachguide verfugbar auf Englisch, Deutsch, Polnisch und Russisch',
  'Flughafen Abholung und Ruckfahrt',
  'Halbpension Unterkunft (3 Sterne oder 4 Sterne Hotels auf Anfrage)',
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
    'Private English speaking driver always included',
    'Optional language guide available in English, German, Polish and Russian',
    'Airport pickup and drop off',
    'Half board accommodation (3 star or 4 star hotels on request)',
    'Fuel, parking fees and highway tolls',
    'Complimentary bottled water during transfers',
    'A Scenic Train Ride from Nanu Oya to Ella',
    'Train tickets (subject to availability)',
  ],
  de: deIncludes,
  nl: [
    'Privévoertuig met airconditioning gedurende de hele reis',
    'Privé Engelssprekende chauffeur altijd inbegrepen',
    'Optionele taalgids beschikbaar in het Engels, Duits, Pools en Russisch',
    'Ophalen en terugbrengen op de luchthaven',
    'Verblijf op basis van halfpension (3 sterren of 4 sterren hotels op aanvraag)',
    'Brandstof, parkeerkosten en tol',
    'Gratis water in flessen tijdens de transfers',
    'Een panoramische treinrit van Nanu Oya naar Ella',
    'Treinkaartjes (afhankelijk van beschikbaarheid)',
  ],
  fr: [
    'Vehicule prive climatise pendant tout le circuit',
    'Chauffeur prive anglophone toujours inclus',
    'Guide linguistique optionnel disponible en anglais, allemand, polonais et russe',
    'Prise en charge et depot a l aeroport',
    'Hebergement en demi pension (hotels 3 etoiles ou 4 etoiles sur demande)',
    'Carburant, frais de parking et peages',
    'Eau en bouteille offerte pendant les transferts',
    'Un trajet en train panoramique de Nanu Oya a Ella',
    'Billets de train (sous reserve de disponibilite)',
  ],
  it: [
    'Veicolo privato climatizzato per tutto il tour',
    'Autista privato di lingua inglese sempre incluso',
    'Guida linguistica opzionale disponibile in inglese, tedesco, polacco e russo',
    'Pickup e drop off in aeroporto',
    'Sistemazione in mezza pensione (hotel 3 stelle o 4 stelle su richiesta)',
    'Carburante, parcheggio e pedaggi',
    'Acqua in bottiglia in omaggio durante i trasferimenti',
    'Un viaggio in treno panoramico da Nanu Oya a Ella',
    'Biglietti del treno (soggetti a disponibilita)',
  ],
  es: [
    'Vehiculo privado con aire acondicionado durante todo el circuito',
    'Conductor privado de habla inglesa siempre incluido',
    'Guia de idioma opcional disponible en ingles, aleman, polaco y ruso',
    'Recogida y regreso al aeropuerto',
    'Alojamiento en media pension (hoteles 3 estrellas o 4 estrellas bajo peticion)',
    'Combustible, parking y peajes',
    'Agua embotellada de cortesia durante los traslados',
    'Un viaje en tren panoramico de Nanu Oya a Ella',
    'Billetes de tren (sujeto a disponibilidad)',
  ],
  pl: [
    'Prywatny klimatyzowany pojazd przez cala wycieczke',
    'Prywatny angielskojezyczny kierowca zawsze w cenie',
    'Opcjonalny przewodnik jezykowy dostepny po angielsku, niemiecku, polsku i rosyjsku',
    'Odbior i odwoz na lotnisko',
    'Zakwaterowanie Half Board (hotele 3 lub 4 gwiazdkowe na zyczenie)',
    'Paliwo, parking i oplat autostradowe',
    'Woda butelkowana podczas transferow',
    'Panoramiczna przejazdzka pociagiem z Nanu Oya do Ella',
    'Bilety kolejowe (w zaleznosci od dostepnosci)',
  ],
  ru: [
    'Частный автомобиль с кондиционером на весь тур',
    'Частный англоязычный водитель всегда включен',
    'Опциональный языковой гид доступен на английском, немецком, польском и русском',
    'Встреча и трансфер в аэропорт',
    'Проживание полупансион (отели 3 или 4 звезды по запросу)',
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
  nl: [
    'Toegangsprijzen voor bezienswaardigheden (ter plaatse door reizigers te betalen)',
    'Lunch',
  ],
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
