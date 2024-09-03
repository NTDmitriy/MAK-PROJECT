import { ALL_CASES_CONTENT } from "@/config/content-config/cases/all-cases.config";
import { ALL_REVIWES } from "@/config/content-config/reviwes/reviwes.config";
import { ADVERTISEMENT_DASHBOARD_PAGES } from "@/config/url-config/advertisement-pages.config";
import {
  TCases,
  THero,
  THeroBasic,
  THeroInfoAdvertisement,
  THowWorks,
  TIncludedInService,
  TReviwe,
  TSupplementaryDescr,
  TWhyUs,
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { ADVERTISEMENT_TELEGRAM_INCLUDE } from "./advertisement-telegram-include.config";

export const ADVERTISEMENT_TELEGRAM_CONFIG = {
  url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT_META.url,
  hero: {
    basic: {
      title: {
        accent: "Эффективная реклама",
        accentAfter: "в Telegram Ads для вашего бизнеса",
      },
      description:
        "Хотите заказать рекламу в одном из самых популярных мессенджеров? Telegram Ads предоставляет уникальные возможности для прямого взаимодействия с вашей целевой аудиторией. Наше агентство профессионально настроит и запустит рекламные кампании, которые помогут привлечь новых клиентов и увеличить узнаваемость бренда. Закажите настройку рекламы у нас и увидьте, как растут ваши показатели.",
      image: "promotion-stroitelnie-comp-hero",
    } satisfies THeroBasic,
    infoAdvertisement: [
      {
        title: "Мгновенный контакт:",
        description: "Доступ к широкой аудитории через популярный мессенджер.",
      },
      {
        title: "Интерактивные форматы:",
        description:
          "Использование разнообразных форматов рекламы для привлечения внимания.",
      },
      {
        title: "Высокая эффективность:",
        description:
          "Настройка таргетинга и постоянная оптимизация для достижения лучших результатов.",
      },
    ] satisfies THeroInfoAdvertisement[],
  } satisfies THero,
  supplementaryDescr: {
    title:
      "Реклама в Telegram: доступ к целевой аудитории через популярный мессенджер",
    descr:
      "Реклама в Telegram является мощным инструментом для продвижения вашего бизнеса в одном из самых популярных мессенджеров мира. Этот инструмент позволяет точно настроить таргетинг на вашу целевую аудиторию, что повышает эффективность рекламных кампаний и приводит к увеличению продаж. Благодаря интерактивным форматам и широким аналитическим возможностям, реклама в Telegram предоставляет идеальные условия для успешного продвижения. Используйте Telegram Ads для достижения максимального результата и повышения узнаваемости вашего бренда.",
    image: "seo-common-supplementary.webp",
  } satisfies TSupplementaryDescr,
  howWorks: {
    items: [
      {
        title: "Консультация и анализ",
        descr:
          "Проводим бесплатную первичную консультацию, анализируем вашу нишу и определяем цели.",
      },
      {
        title: "Разработка стратегии",
        descr:
          "Создаем индивидуальную стратегию продвижения, учитывая особенности вашего бизнеса.",
      },
      {
        title: "Запуск кампаний",
        descr: "Настраиваем и запускаем рекламные кампании в Telegram Ads.",
      },
      {
        title: "Оптимизация и контроль",
        descr:
          "Постоянно оптимизируем кампании для достижения лучших результатов.",
      },
      {
        title: "Отчеты и улучшения",
        descr:
          "Предоставляем регулярные отчеты и вносим необходимые изменения для повышения эффективности.",
      },
    ],

    blockTitle: "Как мы работаем и почему нас выбирают",
    blockTitleDescr:
      "Мы работаем по четко выстроенной схеме, которая гарантирует успешное продвижение вашего бизнеса:",
  } satisfies THowWorks,
  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм:",
        descrBefore: "Мы",
        descrAccent: "обладаем многолетним опытом",
        descrAfter:
          "в сфере интернет-рекламы и продвижения различных бизнесов.",
      },
      {
        title: "Индивидуальный подход:",
        descrBefore: "Каждому клиенту мы предоставляем ",
        descrAccent: "персонализированные решения,",
        descrAfter: " которые соответствуют его уникальным потребностям.",
      },
      {
        title: "Прозрачность и отчетность:",
        descrBefore: "Мы всегда открыты для общения и предоставляем",
        descrAccent: "прозрачные отчеты",
        descrAfter: "о нашей работе.",
      },
      {
        title: "Комплексный подход:",
        descrBefore: "Мы ориентированы на ",
        descrAccent: "достижение конкретных результатов ",
        descrAfter: "и повышение эффективности вашего бизнеса. ",
      },
    ],

    blockTitle: "Почему нас выбирают:",
  } satisfies TWhyUs,
  includeService: ADVERTISEMENT_TELEGRAM_INCLUDE satisfies TIncludedInService,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TScreen;
