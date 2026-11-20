import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'src/app/i18n/content');

const blocks = {
  de: {
    designedBy: 'Gestaltet von',
    a11y: `    a11y: {
      facebook: 'Unsere Facebook Seite besuchen',
      tripadvisor: 'Unsere TripAdvisor Bewertungen lesen',
      whatsapp: 'Per WhatsApp mit uns chatten',
      navToggle: 'Navigationsmenu umschalten',
      newsletterSubmit: 'Fur den Newsletter anmelden',
      whatsappFloat: 'WhatsApp',
      language: 'Sprache',
    },`,
    schema: `    schema: {
      alternateName: 'Private Sri Lanka Rundreisen',
      knowsAbout: [
        'Sri Lanka Rundreisen',
        'Sri Lanka Reisepakete',
        'Sri Lanka Urlaub',
        'private Fahrer Touren',
        'Yala Safari',
        'Sigiriya',
        'Ella Zugfahrt',
        'Zahntempel in Kandy',
        'Galle Fort',
      ],
      touristType: 'Private Rundreise mit Fahrer',
      jobOwner: 'Inhaber und Grunder',
      jobConsultant: 'Senior Berater',
    },`,
  },
  fr: {
    designedBy: 'Concu par',
    a11y: `    a11y: {
      facebook: 'Visiter notre page Facebook',
      tripadvisor: 'Lire nos avis TripAdvisor',
      whatsapp: 'Discuter avec nous sur WhatsApp',
      navToggle: 'Ouvrir le menu de navigation',
      newsletterSubmit: 'S inscrire a la newsletter',
      whatsappFloat: 'WhatsApp',
      language: 'Langue',
    },`,
    schema: `    schema: {
      alternateName: 'Circuits prives Sri Lanka',
      knowsAbout: [
        'circuits Sri Lanka',
        'packages voyage Sri Lanka',
        'vacances Sri Lanka',
        'circuits avec chauffeur prive',
        'safari Yala',
        'Sigiriya',
        'train d Ella',
        'Temple de la Dent a Kandy',
        'Fort de Galle',
      ],
      touristType: 'Circuit prive avec chauffeur',
      jobOwner: 'Proprietaire et fondateur',
      jobConsultant: 'Consultant senior',
    },`,
  },
  it: {
    designedBy: 'Progettato da',
    a11y: `    a11y: {
      facebook: 'Visita la nostra pagina Facebook',
      tripadvisor: 'Leggi le nostre recensioni TripAdvisor',
      whatsapp: 'Chatta con noi su WhatsApp',
      navToggle: 'Apri il menu di navigazione',
      newsletterSubmit: 'Iscriviti alla newsletter',
      whatsappFloat: 'WhatsApp',
      language: 'Lingua',
    },`,
    schema: `    schema: {
      alternateName: 'Tour privati Sri Lanka',
      knowsAbout: [
        'tour Sri Lanka',
        'pacchetti viaggio Sri Lanka',
        'vacanze Sri Lanka',
        'tour con autista privato',
        'safari Yala',
        'Sigiriya',
        'treno di Ella',
        'Tempio del Dente a Kandy',
        'Forte di Galle',
      ],
      touristType: 'Tour privato con autista',
      jobOwner: 'Titolare e fondatore',
      jobConsultant: 'Consulente senior',
    },`,
  },
  es: {
    designedBy: 'Disenado por',
    a11y: `    a11y: {
      facebook: 'Visitar nuestra pagina de Facebook',
      tripadvisor: 'Leer nuestras opiniones en TripAdvisor',
      whatsapp: 'Chatear con nosotros por WhatsApp',
      navToggle: 'Abrir el menu de navegacion',
      newsletterSubmit: 'Suscribirse al boletin',
      whatsappFloat: 'WhatsApp',
      language: 'Idioma',
    },`,
    schema: `    schema: {
      alternateName: 'Circuitos privados Sri Lanka',
      knowsAbout: [
        'circuitos Sri Lanka',
        'paquetes de viaje Sri Lanka',
        'vacaciones Sri Lanka',
        'circuitos con conductor privado',
        'safari Yala',
        'Sigiriya',
        'tren de Ella',
        'Templo del Diente en Kandy',
        'Fuerte de Galle',
      ],
      touristType: 'Circuito privado con conductor',
      jobOwner: 'Propietario y fundador',
      jobConsultant: 'Consultor senior',
    },`,
  },
  pl: {
    designedBy: 'Zaprojektowane przez',
    a11y: `    a11y: {
      facebook: 'Odwiedz nasza strone Facebook',
      tripadvisor: 'Przeczytaj nasze opinie TripAdvisor',
      whatsapp: 'Napisz do nas na WhatsApp',
      navToggle: 'Przelacz menu nawigacji',
      newsletterSubmit: 'Zapisz sie do newslettera',
      whatsappFloat: 'WhatsApp',
      language: 'Jezyk',
    },`,
    schema: `    schema: {
      alternateName: 'Prywatne wycieczki Sri Lanka',
      knowsAbout: [
        'wycieczki Sri Lanka',
        'pakiety wycieczek Sri Lanka',
        'wakacje Sri Lanka',
        'wycieczki z prywatnym kierowca',
        'safari Yala',
        'Sigiriya',
        'pociag Ella',
        'Swiatynia Zebu w Kandy',
        'Fort Galle',
      ],
      touristType: 'Prywatna wycieczka z kierowca',
      jobOwner: 'Wlasciciel i zalozyciel',
      jobConsultant: 'Starszy konsultant',
    },`,
  },
  ru: {
    designedBy: 'Дизайн',
    a11y: `    a11y: {
      facebook: 'Наша страница Facebook',
      tripadvisor: 'Отзывы на TripAdvisor',
      whatsapp: 'Написать нам в WhatsApp',
      navToggle: 'Открыть меню навигации',
      newsletterSubmit: 'Подписаться на рассылку',
      whatsappFloat: 'WhatsApp',
      language: 'Язык',
    },`,
    schema: `    schema: {
      alternateName: 'Индивидуальные туры по Шри Ланке',
      knowsAbout: [
        'туры по Шри Ланке',
        'пакеты туров Шри Ланка',
        'отдых на Шри Ланке',
        'туры с частным водителем',
        'сафари Яла',
        'Сигирия',
        'поезд Элла',
        'Храм Зуба в Канди',
        'Форт Галле',
      ],
      touristType: 'Индивидуальный тур с водителем',
      jobOwner: 'Владелец и основатель',
      jobConsultant: 'Старший консультант',
    },`,
  },
  nl: {
    designedBy: 'Ontworpen door',
    a11y: `    a11y: {
      facebook: 'Bezoek onze Facebook pagina',
      tripadvisor: 'Lees onze TripAdvisor reviews',
      whatsapp: 'Chat met ons op WhatsApp',
      navToggle: 'Navigatiemenu openen',
      newsletterSubmit: 'Aanmelden voor de nieuwsbrief',
      whatsappFloat: 'WhatsApp',
      language: 'Taal',
    },`,
    schema: `    schema: {
      alternateName: 'Prive Sri Lanka rondreizen',
      knowsAbout: [
        'Sri Lanka rondreizen',
        'Sri Lanka tourpakketten',
        'Sri Lanka vakanties',
        'prive chauffeur tours',
        'Yala safari',
        'Sigiriya',
        'Ella treinreis',
        'Tempel van de Tand in Kandy',
        'Galle Fort',
      ],
      touristType: 'Prive rondreis met chauffeur',
      jobOwner: 'Eigenaar en oprichter',
      jobConsultant: 'Senior consultant',
    },`,
  },
};

for (const [loc, patch] of Object.entries(blocks)) {
  const file = join(dir, `${loc}.ts`);
  let src = readFileSync(file, 'utf8');
  if (!src.includes("designedBy:")) {
    src = src.replace(
      /(privacy:\s*'[^']*',)/,
      `$1\n      designedBy: '${patch.designedBy}',`,
    );
  }
  if (!src.includes('\n    a11y: {')) {
    src = src.replace(/\n    consent: \{/, `\n${patch.a11y}\n    consent: {`);
  }
  if (!src.includes('\n    schema: {')) {
    // insert schema after a11y or before consent
    if (src.includes('\n    a11y: {')) {
      src = src.replace(
        /(\n    a11y: \{[\s\S]*?\n    \},)/,
        `$1\n${patch.schema}`,
      );
    } else {
      src = src.replace(/\n    consent: \{/, `\n${patch.schema}\n    consent: {`);
    }
  }
  writeFileSync(file, src);
  console.log('patched', loc);
}
