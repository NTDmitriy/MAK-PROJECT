import { ALL_CASES_CONTENT } from "@/content/all-cases/all-cases.content";
import { ALL_REVIWES } from "@/content/all-reviwes/all-reviwes.content";
import { ADVERTISEMENT_DASHBOARD_PAGES } from "@/dashboard/advertisement.dashboard";
import {
  TCase,
  THero,
  THeroBasic,
  THeroInfoAdvertisement,
  THowWorks,
  TIncludedInService,
  TReviwe,
  TSupplementaryDescr,
  TTariffs,
  TWhyUs,
} from "@/typing/products.type";
import { TScreen } from "@/typing/screens.type";
import { ADVERTISEMENT_GOOGLE_INCLUDE } from "./advertisement-google-include";
import { TARIFFS_GOOGLE } from "./advertisement-google-tariffs";

export const ADVERTISEMENT_GOOGLE_CONTENT = {
  url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT_GOOGLE.url,
  hero: {
    basic: {
      title: {
        accentBefore: "Эффективная реклама",
        accent: "в Google Ads",
      },
      description:
        "Закажите рекламу в Google Ads и привлеките русскоговорящую аудторию со всего мира! Наше агентство предлагает профессиональную настройку и управление рекламными кампаниями в Google Ads. Мы обеспечим высокую конверсию и максимальную отдачу от ваших инвестиций в рекламу. Доверьтесь нам и закажите услуги настройки рекламы сегодня.",
      image: "advertisement-google-hero",
    } satisfies THeroBasic,
    infoAdvertisement: [
      {
        title: "Глобальный охват:",
        description:
          "Достижение аудитории по всему миру через крупнейшую поисковую систему.",
      },
      {
        title: "Точный таргетинг:",
        description:
          "Настройка рекламы по ключевым словам и демографическим характеристикам.",
      },
      {
        title: "Аналитика и оптимизация:",
        description: "Постоянный мониторинг и улучшение показателей кампаний.",
      },
    ] satisfies THeroInfoAdvertisement[],
  } satisfies THero,
  supplementaryDescr: {
    title: "Google Ads: контекстная реклама, охватывающая весь мир",
    descr:
      "Google Ads является одним из самых мощных инструментов для продвижения вашего бизнеса в интернете. С его помощью можно охватить глобальную аудиторию и привлекать клиентов со всего мира. Благодаря точным настройкам таргетинга и широким аналитическим возможностям, Google Ads предоставляет идеальные условия для успешного продвижения. Используйте Google Ads для достижения максимального результата и повышения узнаваемости вашего бренда.",
    image: "advertisement-google-supplementary",
  } satisfies TSupplementaryDescr,
  howWorks: {
    items: [
      {
        title: "Консультация и анализ",
        descr:
          "Проводим бесплатную первичную консультацию, анализируем вашу нишу и определяем цели.",
      },
      {
        title: "Разработка стратегии",
        descr:
          "Создаем индивидуальную стратегию продвижения, учитывая особенности вашего бизнеса.",
      },
      {
        title: "Запуск кампаний",
        descr: "Настраиваем и запускаем рекламные кампании в Google Ads.",
      },
      {
        title: "Оптимизация и контроль",
        descr:
          "Постоянно оптимизируем кампании для достижения лучших результатов.",
      },
      {
        title: "Отчеты и улучшения",
        descr:
          "Предоставляем регулярные отчеты и вносим необходимые изменения для повышения эффективности.",
      },
    ],

    blockTitle: "Как мы работаем",
    blockTitleDescr:
      "Мы работаем по четко выстроенной схеме, которая гарантирует успешное продвижение вашего бизнеса:",
  } satisfies THowWorks,
  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм:",
        descrBefore: "Мы",
        descrAccent: "обладаем многолетним опытом",
        descrAfter:
          "в сфере интернет-рекламы и продвижения различных бизнесов.",
      },
      {
        title: "Индивидуальный подход:",
        descrBefore: "Каждому клиенту мы предоставляем ",
        descrAccent: "персонализированные решения,",
        descrAfter: " которые соответствуют его уникальным потребностям.",
      },
      {
        title: "Прозрачность и отчетность:",
        descrBefore: "Мы всегда открыты для общения и предоставляем",
        descrAccent: "прозрачные отчеты",
        descrAfter: "о нашей работе.",
      },
      {
        title: "Комплексный подход:",
        descrBefore: "Мы ориентированы на ",
        descrAccent: "достижение конкретных результатов ",
        descrAfter: "и повышение эффективности вашего бизнеса. ",
      },
    ],

    blockTitle: "Почему нас выбирают",
  } satisfies TWhyUs,
  includeService: ADVERTISEMENT_GOOGLE_INCLUDE satisfies TIncludedInService,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCase[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  tariffs: TARIFFS_GOOGLE satisfies TTariffs,
} satisfies TScreen;
