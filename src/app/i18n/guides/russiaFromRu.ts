import type { ArticleContent } from '../articles/types';

/**
 * Russia market landing page (pageId: marketRussia).
 * Targets RU Google Trends without competing with airlines, hotel brands or heli operators.
 */
export const RUSSIA_FROM_RU_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Tours from Russia: Packages, Colombo Airport and a Private Driver',
    lead:
      'Plan a Sri Lanka holiday with a local team. We arrange private itineraries, airport transfers and guided drives around the island, with practical information about flights, entry requirements, weather and places to visit.',
    heroImage: 'assets/img/package-7.webp',
    heroAlt: 'Private Sri Lanka tour with chauffeur guide for travellers from Russia',
    sections: [
      {
        id: 'who',
        title: 'Private tours with a local team',
        body: 'Sundown Tours has been based in Sri Lanka since 1992. We arrange private trips with a driver, including airport pickup, cultural attractions, wildlife safaris and time on the coast.\n\nSri Lanka is an island in the Indian Ocean, south of India. The capital is Sri Jayawardenepura Kotte; international flights usually arrive at Bandaranaike Airport near Colombo.',
      },
      {
        id: 'flight',
        title: 'Flights from Russia',
        body: 'A flight from Moscow usually takes about 8 to 12 hours in the air, excluding connections. Total journey time from other Russian cities depends on the available routes. Share your arrival time at Colombo (CMB), and we can coordinate your transfer and first night.',
      },
      {
        id: 'airport',
        title: 'Sri Lanka airport vs Colombo',
        body: 'Bandaranaike International Airport is at Katunayake, not downtown. Negombo is 20 to 40 minutes from the terminal. Colombo city is typically  45 to 90 minutes. West coast hotel belts (Hikkaduwa, Bentota, Ahungalla, Beruwala) are about 1.5 to 2.5 hours. Do not drive to Sigiriya the same night after a long haul landing unless you insist.',
      },
      {
        id: 'entry',
        title: 'ETA, arrival card and Russian passports',
        body: 'Russian nationals need an Electronic Travel Authorisation (ETA) before boarding. From 25 May 2026 the tourist ETA is free for 40 listed countries including Russia, for 30 days with double entryyou still apply in advance at eta.gov.lk only.\n\nAn “arrival card” does not replace ETA. Immigration may still collect arrival details; follow the official process. Keep about six months’ passport validity.',
      },
      {
        id: 'driver',
        title: 'Car rental with drivernot self drive',
        body: '“Rent car Sri Lanka” and “car rental with driver” are two different products. Self drive is legal but stressful on unfamiliar roads. Our product is a licensed chauffeur guide with an insured vehicle for the full tour: airport pickup, daily sightseeing, jeep safari bookings and the beach finale.\n\nPackage prices depend on days, vehicle type and hotels. We send a written quote after your datesnot a fake last minute all inclusive from a foreign brochure.',
      },
      {
        id: 'whatToDo',
        title: 'Things to do: Lion Rock, Yala, beaches, Maldives add on',
        body: 'A first visit typically includes Sigiriya Lion Rock, Kandy, the tea country train to Ella, a jeep safari at Yala, and a beach finish at Negombo, Hikkaduwa, Unawatuna, Mirissa, Weligama or Galle. Seven days covers the highlights.\n\nSri Lanka time is UTC+5:30. Weather has two monsoons. Maldives is a separate flight from CMB. We are not a news site about default or emergencies.',
      },
    ],
    faq: [
      {
        q: 'How long is the flight from Moscow to Sri Lanka?',
        a: 'Typically about 8 to 12 hours in the air plus a connection. We do not sell tickets; we plan your first night around the real arrival at CMB.',
      },
      {
        q: 'Do you sell RIU, Marriott or Heritance packages?',
        a: 'No. Those are hotel brands. We can include a west coast resort (Bentota, Ahungalla, Hikkaduwa, Galle) as nights in a private chauffeur itinerary if it fits your dates and budget.',
      },
      {
        q: 'Is this car rental or a guided tour?',
        a: 'A licensed driver guide with the vehiclenot a self drive hire desk. You do not navigate Sri Lankan traffic yourself.',
      },
      {
        q: 'How much does a Sri Lanka tour package cost?',
        a: 'It depends on duration, hotels and season. Send dates and we reply with a transparent ground package quote. Airfare is separate.',
      },
    ],
    ctaTitle: 'Plan a private Sri Lanka tour from Russia',
    ctaBody: 'Send Moscow (or other) flight dates and what you want to see. We reply as a local tour operator with a chauffeur itinerary.',
    ctaLabel: 'Contact Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: '7 day private tour' },
      { pageId: 'tour10', label: '10 day tour' },
      { pageId: 'tour8', label: '8 days tour (Wilpattu)' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya Lion Rock' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destBentota', label: 'Bentota' },
      { pageId: 'destWeligama', label: 'Weligama' },
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destColombo', label: 'Colombo' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideVisa', label: 'ETA / arrival' },
      { pageId: 'guidePrivateDriver', label: 'Car with driver' },
      { pageId: 'guideAirportTransfers', label: 'Airport transfer' },
      { pageId: 'guideBeaches', label: 'Beaches' },
      { pageId: 'guideSafari', label: 'Safari' },
      { pageId: 'guideBestTime', label: 'When to go' },
    ],
  },
  ru: {
    h1: 'Туры по Шри Ланке из России: отдых, виза и частный водитель',
    lead:
      'Спланируйте поездку по Шри Ланке с местным туроператором: мы поможем составить маршрут, организуем встречу в аэропорту и поездки с водителем по острову. Здесь собраны практические сведения о перелёте, визе, погоде и популярных местах.',
    heroAlt: 'Частный тур по Шри Ланке с водителем гидом для путешественников из России',
    sections: [
      {
        title: 'Частные поездки по острову с местной командой',
        body: 'Sundown Tours работает на Шри Ланке с 1992 года. Мы организуем индивидуальные маршруты с водителем: встречу в аэропорту Коломбо, поездки к культурным достопримечательностям, сафари и отдых на побережье.\n\nШри-Ланка находится в Индийском океане к югу от Индии. Столица страны Шри Джаяварденепура Котте, а международные рейсы обычно прибывают в аэропорт Бандаранаике рядом с Коломбо.',
      },
      {
        title: 'Перелёт из России на Шри Ланку: только длительность',
        body: 'Перелёт из Москвы обычно занимает около 8–12 часов без учёта пересадки; из других российских городов общее время в пути зависит от расписания стыковок. Сообщите нам время прибытия в аэропорт Бандаранаике (CMB), и мы согласуем трансфер и первую ночь маршрута. Аэропорт находится в Катунаяке, примерно в 30 км к северу от Коломбо.',
      },
      {
        title: 'Аэропорт Шри Ланки и Коломбо',
        body: 'Международный аэропорт Бандаранайке в Катунаяке, не в центре. Негомбо — 20–40 минут от терминала. Город Коломбо обычно в 45–90 минутах. Пояс отелей запада (Хиккадува, Бентота, Ахунгалла, Берувала) — около 1,5–2,5 часов. Не езжайте в Сигирию той же ночью после длинного перелёта, если сами не настаиваете.',
      },
      {
        title: 'ETA, arrival card и российский паспорт',
        body: 'Перед поездкой проверьте актуальные правила въезда для граждан России и оформите электронное разрешение ETA, если оно требуется. Подавайте заявку только через официальный сайт eta.gov.lk и уточняйте условия непосредственно перед поездкой: визовые правила и сборы могут меняться. Arrival card не заменяет ETA.',
      },
      {
        title: 'Поездки с водителем гидом',
        body: 'Для поездок по острову можно выбрать автомобиль с местным водителем-гидом. Такой вариант включает встречу в аэропорту и поездки по согласованному маршруту; при необходимости в программу добавляются экскурсии, сафари и дни на пляже.\n\nСтоимость зависит от продолжительности путешествия, автомобиля и выбранных отелей. Пришлите даты и пожелания, чтобы получить подробный расчёт.',
      },
      {
        title: 'Что посмотреть: Львиная скала, Яла, пляжи, Мальдивы',
        body: 'В первую поездку часто включают древнюю крепость Сигирия, Канди, поездку на поезде в Эллу и сафари в национальном парке Яла. Завершить маршрут можно отдыхом на южном побережье например, в Мириссе, Галле или Унаватуне. За семь дней получится увидеть основные места острова, а более длительный маршрут позволит путешествовать в спокойном темпе.',
      },
    ],
    faq: [
      {
        q: 'Сколько лететь из Москвы на Шри Ланку?',
        a: 'Обычно около 8–12 часов без учёта пересадки. Время трансфера и первой ночи мы согласуем с вашим прибытием в аэропорт Коломбо.',
      },
      {
        q: 'Когда лучше ехать и какая погода на Шри Ланке?',
        a: 'Погода зависит от региона и сезона муссонов. На юге и западе обычно суше с декабря по апрель, а на восточном побережье с мая по сентябрь. Выбирайте маршрут с учётом месяца поездки; подробности есть в нашем гиде по сезонам.',
      },
      {
        q: 'Какой часовой пояс на Шри Ланке?',
        a: 'На острове действует единое время UTC+5:30 без сезонного перевода часов. Разница с Москвой меняется в зависимости от перехода на летнее время.',
      },
      {
        q: 'Нужна ли гражданам России виза для поездки?',
        a: 'Правила въезда могут меняться. Перед покупкой билетов проверьте требования к ETA на официальном сайте eta.gov.lk; arrival card не заменяет визу или разрешение на въезд.',
      },
      {
        q: 'Где находится Шри Ланка?',
        a: 'Это островное государство в Индийском океане, к югу от Индии.',
      },
      {
        q: 'Какая валюта используется на острове?',
        a: 'Официальная валюта ланкийская рупия (LKR). Актуальный обменный курс лучше проверить в банке или обменном пункте перед поездкой.',
      },
      {
        q: 'Продаёте ли вы пакеты RIU, Marriott или Heritance?',
        a: 'Нет. Это гостиничные бренды. Курорт на западе (Бентота, Ахунгалла, Хиккадува, Галле) можно включить как ночи частного тура с водителем, если подходит сезон и бюджет.',
      },
      {
        q: 'Можно ли заказать автомобиль с водителем?',
        a: 'Да. Мы организуем поездки по острову с местным водителем-гидом и автомобилем, согласованным с размером вашей группы.',
      },
      {
        q: 'Сколько стоит турпакет по Шри Ланке?',
        a: 'Цена зависит от длительности поездки, сезона, отелей и размера группы. Пришлите даты и пожелания, и мы подготовим подробную смету наземной части маршрута.',
      },
    ],
    ctaTitle: 'Спланировать частный тур на Шри Ланку из России',
    ctaBody: 'Пришлите даты рейса из Москвы (или другого города) и что хотите увидеть. Отвечаем как местный туроператор маршрутом с водителем.',
    ctaLabel: 'Связаться с Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: 'Тур 7 дней' },
      { pageId: 'tour10', label: 'Тур 10 дней' },
      { pageId: 'tour8', label: 'Тур 8 дней (Вилпатту)' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Львиная скала (Сигирия)' },
      { pageId: 'destYala', label: 'Яла' },
      { pageId: 'destMirissa', label: 'Мирисса' },
      { pageId: 'destBentota', label: 'Бентота' },
      { pageId: 'destWeligama', label: 'Велигама' },
      { pageId: 'destNegombo', label: 'Негомбо' },
      { pageId: 'destColombo', label: 'Коломбо' },
      { pageId: 'destGalle', label: 'Галле' },
    ],
    relatedGuides: [
      { pageId: 'guideVisa', label: 'ETA / въезд' },
      { pageId: 'guidePrivateDriver', label: 'Авто с водителем' },
      { pageId: 'guideAirportTransfers', label: 'Трансфер из аэропорта' },
      { pageId: 'guideBeaches', label: 'Пляжи' },
      { pageId: 'guideSafari', label: 'Сафари' },
      { pageId: 'guideBestTime', label: 'Когда ехать' },
    ],
  },
};
