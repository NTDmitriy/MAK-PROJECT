import { WEBDEV_DASHBOARD_PAGES } from "@/config/url-config/webdev-pages.config";
import {
  TAllSiteTypes,
  TFaq,
  THero,
  THeroBasic,
  THeroInfoService,
  TSuitableFor,
  TSupplementaryDescr,
  TWorkStages,
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
    ] satisfies THeroInfoService,
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
    items: WEBDEV_PRODUCTS,
    formTitle: "Сроки редизайна и доработки",
    formDescr:
      "Сроки редизайна и доработки сайта зависят от индивидуальных особенностей и потребностей вашего проекта. Мы подходим к каждому клиенту персонально и учитываем все нюансы, чтобы предложить оптимальное решение. Для точной оценки сроков и объема работ нам необходимо ознакомиться с вашим действующим сайтом и понять ваши цели. Запишитесь на консультацию, чтобы мы могли обсудить все детали и предложить вам наилучший план действий",
  } satisfies TAllSiteTypes,
  faq: WORDPRESS_FAQ satisfies TFaq[],
} satisfies TScreen;
