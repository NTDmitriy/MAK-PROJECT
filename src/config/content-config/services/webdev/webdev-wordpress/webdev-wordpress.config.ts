import { ALL_REVIWES } from "@/config/content-config/all-reviwes/all-reviwes.config";
import { WEBDEV_DASHBOARD_PAGES } from "@/config/url-config/webdev-pages.config";
import {
  TFaq,
  THero,
  THeroBasic,
  THeroInfo,
  TReviwe,
  TServiceProducts,
  TSuitableFor,
  TSupplementaryDescr,
  TWorkStages
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { WEBDEV_PRODUCTS } from "../webdev-common/webdev-products.config";
import { WORDPRESS_FAQ } from "./webdev-wordpress-faq.config";
import { WEBDEV_WORDPRESS_STAGES } from "./webdev-wordpress-stages.config";

export const WEBDEV_WORDPRESS_CONFIG = {
  url: WEBDEV_DASHBOARD_PAGES.WEBDEV_WORDPRESS.url,
  hero: {
    basic: {
      title: {
        accent: "Создание сайтов на WordPress:",
        accentAfter: "Профессионально, Надежно, Эффективно",
      },
      description:
        "Предлагаем услуги по созданию сайтов на платформе WordPress. Наши специалисты создадут для вас мощный и адаптивный сайт, который удовлетворит все потребности вашего бизнеса и поможет вам достичь успеха.",
      image: "promotion-stroitelnie-comp-hero",
    } satisfies THeroBasic,
    infoWebdev: [
      "Эксклюзивный дизайн",
      "Полная адаптивность",
      "Высокая производительность",
      "1 месяц бесплатной поддержки",
    ] satisfies THeroInfo,
  } satisfies THero,
  supplementaryDescr: {
    title: "Разработка веб-сайтов на WordPress",
    descr:
      "Создание сайтов на WordPress – это идеальное решение для вашего бизнеса. Мы предлагаем полный спектр услуг, от разработки уникального дизайна до полной настройки функционала вашего сайта. WordPress – самая популярная в мире CMS, что обеспечивает гибкость и масштабируемость вашего проекта. Наша команда профессионалов гарантирует высокое качество и оперативность выполнения всех этапов работ.",
    image: "seo-common-supplementary.webp",
  } satisfies TSupplementaryDescr,
  suitableFor: {
    items: [
      {
        title: "Малому и среднему бизнесу",
        descr:
          "Отлично подходит для создания корпоративных сайтов и интернет-магазинов.",
      },
      {
        title: "Блогерам и контент-мейкерам",
        descr: "Идеален для ведения блогов и публикации контента.",
      },
      {
        title: "Крупным компаниям",
        descr:
          "Подходит для сложных и многостраничных сайтов с большим объемом информации.",
      },
    ],
  } satisfies TSuitableFor,
  workStages: WEBDEV_WORDPRESS_STAGES satisfies TWorkStages,
  allSiteTypes: {
    formTitle: "Хотите обсудить разработку вашего сайта?",
    formDescr: "Оставьте свои контактные данные, и наш менеджер свяжется с вами, чтобы обсудить все детали вашего проекта и предложить наилучшие решения. Мы готовы провести бесплатную консультацию, чтобы помочь вам выбрать оптимальный тип сайта — будь то сайт-визитка, лендинг или полноценный бизнес-сайт. Мы также предложим подходящую платформу и технологии для разработки, учитывая ваши цели и особенности вашего бизнеса.",
    ...WEBDEV_PRODUCTS,
  } satisfies TServiceProducts,
  faq: WORDPRESS_FAQ satisfies TFaq[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TScreen;