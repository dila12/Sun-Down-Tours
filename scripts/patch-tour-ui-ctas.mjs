import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'src/app/i18n/content');

const extras = {
  de: {
    bookNow: 'Diese Tour buchen',
    chatWhatsApp: 'Per WhatsApp chatten',
    trustFreeCancel: 'Kostenlose Stornierung',
    trustPayLater: 'Spater zahlen',
    trustLocal: 'Lokales Team seit 1992',
    reviewsTripAdvisor: 'TripAdvisor Bewertungen lesen',
    mobileBookBar: 'Bereit zu buchen?',
  },
  fr: {
    bookNow: 'Reserver ce circuit',
    chatWhatsApp: 'Discuter sur WhatsApp',
    trustFreeCancel: 'Annulation gratuite',
    trustPayLater: 'Payer plus tard',
    trustLocal: 'Equipe locale depuis 1992',
    reviewsTripAdvisor: 'Lire les avis TripAdvisor',
    mobileBookBar: 'Pret a reserver ?',
  },
  it: {
    bookNow: 'Prenota questo tour',
    chatWhatsApp: 'Chatta su WhatsApp',
    trustFreeCancel: 'Cancellazione gratuita',
    trustPayLater: 'Paga dopo',
    trustLocal: 'Team locale dal 1992',
    reviewsTripAdvisor: 'Leggi le recensioni TripAdvisor',
    mobileBookBar: 'Pronto a prenotare?',
  },
  es: {
    bookNow: 'Reservar este circuito',
    chatWhatsApp: 'Chatear por WhatsApp',
    trustFreeCancel: 'Cancelacion gratuita',
    trustPayLater: 'Pagar despues',
    trustLocal: 'Equipo local desde 1992',
    reviewsTripAdvisor: 'Leer opiniones en TripAdvisor',
    mobileBookBar: 'Listo para reservar?',
  },
  pl: {
    bookNow: 'Zarezerwuj ta wycieczke',
    chatWhatsApp: 'Napisz na WhatsApp',
    trustFreeCancel: 'Bezplatne anulowanie',
    trustPayLater: 'Zaplac pozniej',
    trustLocal: 'Lokalny zespol od 1992',
    reviewsTripAdvisor: 'Przeczytaj opinie TripAdvisor',
    mobileBookBar: 'Gotowy do rezerwacji?',
  },
  ru: {
    bookNow: 'Забронировать этот тур',
    chatWhatsApp: 'Написать в WhatsApp',
    trustFreeCancel: 'Бесплатная отмена',
    trustPayLater: 'Оплата позже',
    trustLocal: 'Местная команда с 1992 года',
    reviewsTripAdvisor: 'Читать отзывы TripAdvisor',
    mobileBookBar: 'Готовы забронировать?',
  },
};

for (const [loc, keys] of Object.entries(extras)) {
  const file = join(dir, `${loc}.ts`);
  let src = readFileSync(file, 'utf8');
  if (src.includes('trustFreeCancel:')) {
    console.log('skip', loc);
    continue;
  }
  const block = Object.entries(keys)
    .map(([k, v]) => `      ${k}: '${v.replace(/'/g, "\\'")}',`)
    .join('\n');
  const re =
    /(exploreSimilarTours:\s*'[^']*',\s*\n\s*imageAlt:\s*'[^']*',\s*\n\s*previewAlt:\s*'[^']*',)/;
  if (!re.test(src)) {
    console.log('NO MARKER', loc);
    continue;
  }
  src = src.replace(re, (m) => `${m}\n${block}`);
  writeFileSync(file, src);
  console.log('ok', loc);
}
