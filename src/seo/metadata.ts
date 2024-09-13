export const NO_INDEX_PAGE = { robots: { index: false, follow: false } };

type TMetadata = {
  title: string;
  description: string;
  author?: string;
};
interface IMetadata {
  [key: string]: TMetadata;
}

export const METADATA = {
  HOME: {
    title:
      "Make All Perfect – маркетинговое агентство полного цикла | Digital маркетинг",
    description:
      "Цифровое маркетинговое агентство полного цикла. Оказываем комплексные услуги по digital и интернет маркетингу под ключ.",
  },
  CASES: {
    title: "Кейсы | Успешные проекты агентства Make All Perfect",
    description:
      "Ознакомьтесь с кейсами успешных проектов нашего агентства. Реальные примеры эффективности маркетинговых решений от Make All Perfect.",
  },
  SERVICES: {
    title:
      "Маркетинговые услуги полного цикла | Заказать услуги маркетингового агентства",
    description:
      "Предлагаем полный перечень маркетинговых услуг: стратегия, digital маркетинг, продвижение бизнеса. Закажите услуги профессионалов.",
  },
  REVIEWS: {
    title: "Отзывы клиентов | Отзывы о работе агентства Make All Perfect",
    description:
      "Читайте отзывы наших клиентов. Узнайте, что говорят о маркетинговых услугах Make All Perfect и как мы помогаем бизнесам расти.",
  },
  USEFUL: {
    title:
      "Полезное | Статьи, вакансии и информация о компании Make All Perfect",
    description:
      "Полезные материалы: читайте блог, узнайте о компании и актуальных вакансиях. Вся необходимая информация для успешного сотрудничества с Make All Perfect.",
  },
  CONTACTS: {
    title: "Контакты | Свяжитесь с маркетинговым агентством Make All Perfect",
    description:
      "Свяжитесь с нами для консультации и заказа маркетинговых услуг. Все контактные данные агентства Make All Perfect для связи и сотрудничества.",
  },
  SITEMAP: {
    title: "Карта сайта | Структура сайта агентства Make All Perfect",
    description:
      "Карта сайта Make All Perfect. Полная структура страниц для удобной навигации и поиска нужной информации.",
  },
  ABOUT: {
    title:
      "О компании Make All Perfect | Маркетинговое агентство полного цикла",
    description:
      "Узнайте больше о маркетинговом агентстве Make All Perfect. Мы предлагаем полный цикл услуг для роста вашего бизнеса и увеличения продаж.",
  },
  BLOG: {
    title: "Блог о маркетинге | Полезные статьи и советы от Make All Perfect",
    description:
      "Читайте наш блог о маркетинге. Узнайте полезные советы и новинки в сфере digital маркетинга, рекламы и продвижения бизнеса.",
  },
  VACANCIES: {
    title: "Вакансии | Работа в маркетинговом агентстве Make All Perfect",
    description:
      "Ищете работу в маркетинге? Ознакомьтесь с актуальными вакансиями в агентстве Make All Perfect и присоединяйтесь к нашей команде профессионалов.",
  },
  AFFILIATE: {
    title: "Партнерская программа | Зарабатывайте с Make All Perfect",
    description:
      "Присоединяйтесь к нашей партнерской программе и зарабатывайте на продвижении маркетинговых услуг Make All Perfect. Условия участия и преимущества.",
  },
  ADVERTISEMENT: {
    title:
      "Заказать рекламу в интернете | Настройка и управление рекламными кампаниями",
    description:
      "Закажите настройку рекламы для вашего бизнеса. Профессиональные рекламные услуги для увеличения видимости и привлечения клиентов.",
  },
  ADVERTISEMENT_VK: {
    title: "Таргетированная реклама в ВКонтакте | Заказать таргетинг в ВК",
    description:
      "Закажите настройку таргетированной рекламы в ВКонтакте. Профессиональные услуги по таргетингу для привлечения целевой аудитории в ВК.",
  },
  ADVERTISEMENT_YANDEX: {
    title: "Заказать рекламу в Яндекс Директ | Контекстная реклама в Яндексе",
    description:
      "Купите рекламу в Яндекс Директ с профессиональной настройкой. Закажите услуги контекстной рекламы у агентства Make All Perfect для роста вашего бизнеса.",
  },
  ADVERTISEMENT_GOOGLE: {
    title: "Заказать рекламу в Google Ads | Контекстная реклама в Google",
    description:
      "Настройка и ведение рекламы в Google Ads. Купите услуги контекстной рекламы у агентства Make All Perfect для привлечения клиентов и увеличения продаж.",
  },
  ADVERTISEMENT_TG: {
    title: "Заказать рекламу в Telegram | Таргетированная реклама в Телеграм",
    description:
      "Закажите настройку рекламы в Telegram. Эффективная таргетированная реклама в Телеграм для привлечения клиентов и продвижения бизнеса.",
  },
  ADVERTISEMENT_META: {
    title:
      "Таргетированная реклама в Facebook и Instagram | Настройка рекламы в Meta",
    description:
      "Эффективная реклама в Facebook и Instagram. Закажите настройку таргетированной рекламы для привлечения целевой аудитории и увеличения продаж.",
  },
  PROMOTION: {
    title:
      "Эффективное продвижение бизнеса в интернете | Комплексное интернет продвижение",
    description:
      "Комплексное нишевое продвижение брендов и компаний в интернете. Услуги по продвижению товаров и услуг с гарантией результата.",
  },
  PROMOTION_ONLINE_SCHOOL: {
    title:
      "Продвижение онлайн-школ | Увеличение продаж и привлечение студентов",
    description:
      "Закажите продвижение онлайн-школы. Профессиональные маркетинговые решения для увеличения числа студентов и роста ваших образовательных проектов.",
  },
  PROMOTION_MARKETPLACE: {
    title:
      "Продвижение на маркетплейсах | Увеличение продаж в Ozon, Wildberries и Яндекс.Маркет",
    description:
      "Профессиональное продвижение вашего магазина на маркетплейсах. Закажите услуги для роста продаж на Ozon, Wildberries, Яндекс.Маркет и других платформах.",
  },
  PROMOTION_CONSTRUCTION_COMPANY: {
    title: "Продвижение строительных компаний | Увеличение клиентов и продаж",
    description:
      "Закажите продвижение для строительной компании. Эффективные маркетинговые решения для привлечения клиентов и увеличения прибыли в строительной сфере.",
  },
  PROMOTION_MEDICAL: {
    title: "Продвижение медицинских учреждений | Увеличение потока пациентов",
    description:
      "Профессиональное продвижение медицинских учреждений. Закажите услуги по привлечению пациентов и повышению узнаваемости клиник и медцентров.",
  },
  WEBDEV: {
    title:
      "Создание сайтов под ключ | Разработка веб-сайтов с нуля для бизнеса",
    description:
      "Закажите создание и разработку сайтов под ключ. Профессиональные услуги по созданию веб-сайтов с учетом ваших требований.",
  },
  WEBDEV_JS: {
    title:
      "Создание сайтов на JavaScript | Разработка сайтов на JavaScript под ключ",
    description:
      "Профессиональная разработка сайтов на JavaScript. Закажите создание сайта с интерактивным интерфейсом и высокой производительностью.",
  },
  WEBDEV_WORDPRESS: {
    title: "Создание сайтов на Wordpress | Заказать сайт на WordPress под ключ",
    description:
      "Закажите создание сайта на Wordpress с уникальным дизайном. Профессиональная разработка и настройка сайтов на WordPress для вашего бизнеса.",
  },
  WEBDEV_TILDA: {
    title: "Создание сайтов на Tilda | Заказать сайт на Тильде под ключ",
    description:
      "Закажите создание стильного сайта на Tilda. Профессиональная разработка и настройка сайтов на Тильде для бизнеса и проектов любого уровня.",
  },
  WEBDEV_MODX: {
    title: "Создание сайтов на ModX | Разработка сайтов на ModX под ключ",
    description:
      "Профессиональная разработка сайтов на ModX с гибкими возможностями настройки. Закажите создание функционального сайта для вашего бизнеса.",
  },
  WEBDEV_REDESIGN: {
    title:
      "Редизайн и доработка сайтов | Обновление и улучшение сайта под ключ",
    description:
      "Закажите редизайн и доработку вашего сайта. Профессиональные услуги по обновлению дизайна и функционала сайта для повышения эффективности и привлекательности.",
  },

  SEO: {
    title: "Трафик и SEO услуги | Заказать комплексное продвижение сайта",
    description:
      "Комплексные услуги по трафику и SEO для роста вашего бизнеса. Закажите профессиональное SEO-продвижение, инфлюенс-маркетинг, посевы и email-рассылки.",
  },
  SEO_INFLUENCE: {
    title: "Инфлюенс-маркетинг | Привлечение клиентов через лидеров мнений",
    description:
      "Закажите инфлюенс-маркетинг для продвижения вашего бизнеса. Эффективная работа с блогерами и лидерами мнений для роста бренда и привлечения целевой аудитории.",
  },
  SEO_POSEVY: {
    title: "Посевы | Заказать посевы для продвижения бизнеса",
    description:
      "Эффективные посевы в соцсетях и на тематических платформах. Закажите услуги посевов для увеличения узнаваемости бренда и привлечения новых клиентов.",
  },
  SEO_PROMOTION: {
    title: "SEO-продвижение | Заказать SEO услуги для роста вашего сайта",
    description:
      "Профессиональное SEO-продвижение для вашего бизнеса. Оптимизация сайта для увеличения видимости в поисковых системах и привлечения целевой аудитории.",
  },
  SEO_EMAIL_DISTRIBUTION: {
    title: "Email рассылки по базам | Заказать профессиональную email-рассылку",
    description:
      "Закажите услуги email-рассылок по проверенным базам. Эффективные рассылки для привлечения клиентов, удержания аудитории и увеличения продаж.",
  },

  FRONTEND_DEVELOPMENT_UNIVERSITY: {
    title: "Кейс: Продвижение онлайн-школы Frontend-разработки",
    description:
      "Как мы продвинули онлайн-школу Frontend-разработки. Эффективные стратегии маркетинга для привлечения студентов и увеличения продаж курсов программирования.",
  },
  STOMATOLOGY_CLINIC: {
    title: "Кейс: Продвижение стоматологической клиники в Санкт-Петербурге",
    description:
      "Узнайте, как мы продвинули стоматологическую клинику в Санкт-Петербурге. Реальные результаты маркетинговых стратегий для увеличения потока пациентов.",
  },
  TAX_OPTIMIZATION: {
    title: "Кейс: Оптимизация налогов для предпринимателей на УСН",
    description:
      "Эффективные решения для оптимизации налогов на УСН. Как мы помогли предпринимателям снизить налоговую нагрузку и улучшить финансовые результаты.",
  },
  WILDBERRIES_SHOP: {
    title: "Кейс: Продвижение магазина женской одежды на Wildberries",
    description:
      "Результаты продвижения магазина женской одежды на Wildberries. Как наши стратегии помогли увеличить продажи и охват целевой аудитории.",
  },
  CONSTRUCTION_COMPANY: {
    title: "Кейс: Продвижение строительной компании «Карельский дом»",
    description:
      "Как мы продвинули строительную компанию «Карельский дом». Увеличение числа клиентов и заказов с помощью эффективного маркетинга.",
  },
  FURNITURE_STORE: {
    title: "Кейс: Продвижение компании по продаже мебели в Москве и области",
    description:
      "Успешное продвижение компании по продаже мебели. Реальные кейсы по увеличению продаж и привлечению клиентов в Москве и Московской области.",
  },

  CREATIVE_ADVERTISING: {
    title:
      "Креативные рекламные стратегии 2024: как привлечь внимание клиентов",
    description:
      "Откройте креативные подходы к рекламе и разработке уникальных предложений. Узнайте, как выделиться на рынке с нестандартными форматами и успешными кейсами для роста продаж.",
    author: "Make All Perfect",
  },
  REDESIGN_GUIDE: {
    title: "Как обновить сайт — заказать редизайн и обновление дизайна сайта",
    description:
      "Закажите редизайн сайта для повышения функциональности и удобства. Оптимизация под мобильные устройства и современный дизайн помогут привлечь новую аудиторию.",
    author: "Make All Perfect",
  },

  NOTFOUND: {
    title: "404 — Страница не найдена",
    description:
      "К сожалению, запрашиваемая Вами страница не найдена. Пожалуйста, воспользуйтесь навигацией в нашем меню.",
  },
} satisfies IMetadata;
