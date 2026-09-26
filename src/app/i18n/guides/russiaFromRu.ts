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
        body: 'Sundown Tours is a Sri Lanka travel agency based on the island since 1992. We do not sell flights (Aeroflot, SriLankan Airlines) and we are not Travelata, Tourvisor or RIU. We organise private tours: chauffeur from CMB, Cultural Triangle, safari and beach.\n\nWhere is Sri Lanka: an island country in the Indian Ocean, south of India. English name: Sri Lanka. Capital: Sri Jayawardenepura Kotte; travellers land in Colombo.',
      },
      {
        id: 'flight',
        title: 'Flights from Russia to Sri Lankaduration only',
        body: 'Typical air time from Moscow is about 8 to 12 hours plus a connection. Same for Krasnoyarsk or Novosibirsk with extra legs. We do not sell Aeroflot tickets.\n\nOnce you have landing time at Colombo (CMB), we quote the ground package and first hotel night.',
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
    h1: 'Туры шри ланка из России: отдых, виза и частный водитель',
    lead:
      'Туры шри ланка, шри ланка туры, шри ланка тур и отдых шри ланка обычно значат частный объезд острова после Коломбо, не шри ланка билеты и не отель RIU. Пишем шри ланка через пробел (не через дефис). Эта страница: погода, сезон, виза, время шри ланка, аэропорт CMB, водитель, что посмотреть и первая ночь в коломбо шри ланка.',
    heroAlt: 'Частный тур по Шри Ланке с водителем гидом для путешественников из России',
    sections: [
      {
        title: 'Туры Шри Ланка из Россииместный оператор, не отель и не авиакомпания',
        body: 'Sundown Toursтуроператор на острове с 1992 года. Мы не продаём шри ланка билеты, аэрофлот шри ланка и москва шри ланка билеты. Мы не Travelata, не Турвизор и не RIU. Туры шри ланка, шри ланка туры, шри ланка тур и тур шри ланка это частный маршрут с водителем: встреча в CMB, культура, сафари, пляж.\n\nШри ланка где и шри ланка это какая страна: остров шри ланка в Индийском океане, южнее Индии. Шри ланка на английском: Sri Lanka. Шриланка без пробела то же место. Столица шри ланка / шри ланка столица / столица шри ланки: административно Шри Джаяварденепура Котте; вы садитесь в коломбо шри ланка.',
      },
      {
        title: 'Перелёт из России на Шри Ланку: только длительность',
        body: 'Москва шри ланка и шри ланка сколько лететь: в воздухе обычно 8–12 часов плюс стыковка. Шри ланка из красноярска и новосибирск шри ланка те же стыковки, дольше по общему времени. Шри ланка самолет аэрофлота и аэрофлот шри ланка билеты не продаём.\n\nКогда есть время посадки в коломбо шри ланка (CMB), считаем наземный тур и первую ночь. Аэропорт шри ланка / шри ланка аэропорт: Катунаяке, не центр города.',
      },
      {
        title: 'Аэропорт Шри Ланки и Коломбо',
        body: 'Международный аэропорт Бандаранайке в Катунаяке, не в центре. Негомбо20 to 40 минут от терминала. Город Коломбо обычно 45 to 90 минут. Пояс отелей запада (Хиккадува, Бентота, Ахунгалла, Берувала)около 1,5 to 2,5 часов. Не езжайте в Сигирию той же ночью после длинного перелёта, если сами не настаиваете.',
      },
      {
        title: 'ETA, arrival card и российский паспорт',
        body: 'Гражданам России нужна ETA до посадки. Шри ланка виза, виза шри ланка, виза шри ланка для россиян и шри ланка правила въезда: заявка на eta.gov.lk. С 25 мая 2026 туристическая ETA для России часто бесплатна 30 дней с двойным въездом, заявку всё равно подаёте заранее.\n\nArrival card не заменяет ETA. Мы не пишем шри ланка новости, не про дефолт и не про чрезвычайное положение.',
      },
      {
        title: 'Аренда авто с водителемне self drive',
        body: '«Rent car Sri Lanka» и «car rental with driver»разные продукты. Самостоятельная аренда легальна, но утомляет на незнакомых дорогах. Наш продуктлицензированный водитель гид и застрахованный автомобиль на весь тур: встреча в аэропорту, осмотры, джип сафари и финал на пляже.\n\nЦена пакета зависит от дней, класса машины и отелей. Письменный расчёт после ваших датне фейковый last minute all inclusive из чужого каталога.',
      },
      {
        title: 'Что посмотреть: Львиная скала, Яла, пляжи, Мальдивы',
        body: 'Шри ланка что посмотреть и экскурсии шри ланка: Сигирия, Канди, поезд шри ланка до Эллы, сафари Яла, пляж. Шри ланка море и шри ланка отдых: Негомбо, Хиккадува, унаватуна шри ланка, Мирисса, Галле. Семь дней закрывают главное.\n\nШри ланка на карте, шри ланка карта, шри ланка какой океан и шри ланка океан: Индийский океан, остров южнее Индии. Мальдивы отдельный рейс из CMB. Шри ланка отели бронируем внутри тура, не каталог.',
      },
    ],
    faq: [
      {
        q: 'Сколько лететь из Москвы на Шри Ланку?',
        a: 'Обычно около 8–12 часов в воздухе плюс стыковка. Шри ланка билеты и аэрофлот шри ланка не продаём; первую ночь подгоняем под прибытие в CMB.',
      },
      {
        q: 'Какая погода и когда сезон шри ланка?',
        a: 'Шри ланка погода и погода шри ланка зависят от побережья: два муссона. Сезон шри ланка / шри ланка сезон / когда лучше ехать: запад и юг обычно декабрь–апрель; восток май–сентябрь. Шри ланка летом и шри ланка в июле чаще восток, культура и сафари, не южный пляж. Подробнее в гиде по месяцам.',
      },
      {
        q: 'Какое время шри ланка и часовой пояс?',
        a: 'Время шри ланка / шри ланка время / шри ланка время сейчас: UTC+5:30 круглый год, без летнего перевода. Шри ланка часовой пояс один на весь остров. Москва обычно на 2,5 часа «назад» зимой (проверьте свой регион РФ).',
      },
      {
        q: 'Нужна ли шри ланка виза для россиян?',
        a: 'Да. Виза шри ланка и шри ланка правила въезда: ETA на eta.gov.lk до посадки. Arrival card её не заменяет.',
      },
      {
        q: 'Шри ланка где, какая страна и какой океан?',
        a: 'Остров шри ланка в Индийском океане, южнее Индии. Шри ланка на карте / шри ланка карта: каплевидный остров у южной оконечности Индии. Шри ланка на английском: Sri Lanka. Шриланка без пробела то же место.',
      },
      {
        q: 'Курс рубля к рупии шри ланка: вы меняете валюту?',
        a: 'Нет. Валюта острова это ланкийская рупия (LKR). Курс рупии шри ланка к рублю смотрите в банке; мы не обменник. На земле удобнее рупии и карта, не живой тикер.',
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
