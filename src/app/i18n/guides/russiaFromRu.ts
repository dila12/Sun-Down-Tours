import type { ArticleContent } from '../articles/types';

/**
 * Russia market landing page (pageId: marketRussia).
 * Targets RU Google Trends without competing with airlines, hotel brands or heli operators.
 */
export const RUSSIA_FROM_RU_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Tours from Russia: Packages, Colombo Airport and a Private Driver',
    lead:
      'Russian searches for Шри Ланка, sri lanka tours and tour packages usually want a private island circuit after Colombonot SriLankan Airlines tickets, RIU Ahungalla or a helicopter. This page covers CMB airport, ETA and arrival card, car with driver, Lion Rock, safari, beaches (Hikkaduwa, Mirissa, Negombo) and how we quote a package after you land.',
    heroImage: 'assets/img/package-2.webp',
    heroAlt: 'Private Sri Lanka tour with chauffeur guide for travellers from Russia',
    sections: [
      {
        id: 'who',
        title: 'Sri Lanka tours from Russialocal operator, not a hotel brand or airline',
        body: 'Sundown Tours is a Sri Lanka travel agency and tour operator based on the island since 1992. We do not sell flights (SriLankan Airlines, Air Arabia, Google Flights, cheap tickets to Qatar) and we are not RIU, Centara Ceysands, Heritance Ahungalla, Anantara, Marriott Weligama, Sheraton Kosgoda, Radisson Blu Galle, Club Bentota, Cinnamon Bey, Taj Bentota or Jungle Beach.\n\nSearches such as “sri lanka flights” and “sri lanka air” are shopping for seats. Searches such as “sri lanka tours”, “tour packages”, “guided tours”, “travel agents in sri lanka” and “car rental with driver” are what we organise: a licensed chauffeur guide from CMB, hotels chosen for your dates, Cultural Triangle, safari and beach. Luxury west coast resorts can be the beach nights of that circuit if you want themwe book rooms as part of a private itinerary, we do not run a hotel website. We do not operate helicopter tours.',
      },
      {
        id: 'flight',
        title: 'Flights from Russia to Sri Lankaduration only',
        body: 'Typical air time from Moscow is about 8 to 12 hours plus a Gulf or Istanbul connection (Dubai, Doha, Abu Dhabi appear in search because they are common hubs). Direct options change with season and airline; we do not quote airfares.\n\nOnce you have PNR and landing time at Colombo (CMB), we quote the ground tour package and plan the first hotel nightNegombo if you arrive late, Colombo city if you want a short urban stop.',
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
        body: 'A first visit typically includes Sigiriya Lion Rock, Kandy, the tea country train to Ella, a jeep safari at Yala (or Udawalawe), and a beach finish at Negombo, Hikkaduwa, Bentota, Mirissa, Weligama or Galle. Seven days covers the highlights. Ten days is calmer.\n\nSri Lanka to Maldives is a separate flight from CMB, not a driving day. Adventure days (train, safari, rock climb) sit inside the same private circuitwe are not a heli tour company.',
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
    h1: 'Туры на Шри Ланку из России: пакеты, аэропорт Коломбо и водитель',
    lead:
      'Запросы «Шри Ланка», sri lanka tours и tour packages обычно означают частный объезд острова после Коломбоне билеты SriLankan Airlines, не RIU Ahungalla и не вертолёт. Эта страница: аэропорт CMB, ETA и arrival card, авто с водителем, Львиная скала, сафари, пляжи (Хиккадува, Мирисса, Негомбо) и как мы считаем пакет на земле.',
    heroAlt: 'Частный тур по Шри Ланке с водителем гидом для путешественников из России',
    sections: [
      {
        title: 'Туры Шри Ланка из Россииместный оператор, не отель и не авиакомпания',
        body: 'Sundown Toursтурагентство и туроператор на Шри Ланке с 1992 года. Мы не продаём авиабилеты (SriLankan Airlines, Air Arabia, Google Flights, cheap flights) и не являемся RIU, Centara Ceysands, Heritance Ahungalla, Anantara, Marriott Weligama, Sheraton Kosgoda, Radisson Blu Galle, Club Bentota, Cinnamon Bey, Taj Bentota или Jungle Beach.\n\n«Sri lanka flights» и «sri lanka air»это поиск кресла в самолёте. «Sri lanka tours», «tour packages», «guided tours», «travel agents in sri lanka» и «car rental with driver»то, что мы организуем: лицензированный водитель гид от CMB, отели под ваши даты, Культурный треугольник, сафари и пляж. Люксовые курорты запада можно взять как пляжные ночи этого маршрутамы бронируем номера внутри частного тура, это не сайт сети отелей. Вертолётные туры не проводим.',
      },
      {
        title: 'Перелёт из России на Шри Ланку: только длительность',
        body: 'Из Москвы в воздухе обычно около 8 to 12 часов плюс стыковка в Заливе или Стамбуле (Дубай, Доха, Абу Даби в трендах, потому что это типовые хабы). Прямые рейсы зависят от сезона и авиакомпании; цены билетов не публикуем.\n\nКогда есть PNR и время посадки в Коломбо (CMB), считаем наземный пакет и первую ночь: Негомбо при позднем прилёте, город Коломбоесли нужна короткая городская остановка.',
      },
      {
        title: 'Аэропорт Шри Ланки и Коломбо',
        body: 'Международный аэропорт Бандаранайке в Катунаяке, не в центре. Негомбо20 to 40 минут от терминала. Город Коломбо обычно 45 to 90 минут. Пояс отелей запада (Хиккадува, Бентота, Ахунгалла, Берувала)около 1,5 to 2,5 часов. Не езжайте в Сигирию той же ночью после длинного перелёта, если сами не настаиваете.',
      },
      {
        title: 'ETA, arrival card и российский паспорт',
        body: 'Гражданам России нужна Electronic Travel Authorisation (ETA) до посадки. С 25 мая 2026 туристическая ETA бесплатна для 40 стран, включая Россию, на 30 дней с двойным въездомзаявку всё равно подаёте заранее только на eta.gov.lk.\n\nArrival card не заменяет ETA. Иммиграция может собрать данные прибытия по официальной процедуре. Паспорт примерно с шестью месяцами срока.',
      },
      {
        title: 'Аренда авто с водителемне self drive',
        body: '«Rent car Sri Lanka» и «car rental with driver»разные продукты. Самостоятельная аренда легальна, но утомляет на незнакомых дорогах. Наш продуктлицензированный водитель гид и застрахованный автомобиль на весь тур: встреча в аэропорту, осмотры, джип сафари и финал на пляже.\n\nЦена пакета зависит от дней, класса машины и отелей. Письменный расчёт после ваших датне фейковый last minute all inclusive из чужого каталога.',
      },
      {
        title: 'Что посмотреть: Львиная скала, Яла, пляжи, Мальдивы',
        body: 'Первая поездка обычно включает Львиную скалу Сигирии, Канди, чайный поезд до Эллы, джип сафари в Яле (или Удавалаве) и пляж: Негомбо, Хиккадува, Бентота, Мирисса, Велигама или Галле. Семь дней закрывают главное. Десять спокойнее.\n\nШри Ланка и Мальдивыотдельный перелёт из CMB, не день на машине. Приключения (поезд, сафари, скала) внутри того же частного маршрута; вертолёты не предлагаем.',
      },
    ],
    faq: [
      {
        q: 'Сколько лететь из Москвы на Шри Ланку?',
        a: 'Обычно около 8 to 12 часов в воздухе плюс стыковка. Билеты не продаём; первую ночь подгоняем под реальное прибытие в CMB.',
      },
      {
        q: 'Продаёте ли вы пакеты RIU, Marriott или Heritance?',
        a: 'Нет. Это гостиничные бренды. Курорт на западе (Бентота, Ахунгалла, Хиккадува, Галле) можно включить как ночи частного тура с водителем, если подходит сезон и бюджет.',
      },
      {
        q: 'Это аренда машины или тур с гидом?',
        a: 'Лицензированный водитель гид с автомобилемне стойка self drive. По шри ланкийскому трафику вы не ведёте сами.',
      },
      {
        q: 'Сколько стоит турпакет по Шри Ланке?',
        a: 'Зависит от длительности, отелей и сезона. Пришлите датыответим прозрачной сметой наземного пакета. Авиабилеты отдельно.',
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
