import { WEBDEV_DASHBOARD_PAGES } from "@/config/url-config/webdev-pages.config";
import {
  TFaq,
  THero,
  THeroBasic,
  THeroInfo,
  TServiceProducts,
  TSuitableFor,
  TSupplementaryDescr,
  TWorkStages
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { WEBDEV_PRODUCTS } from "../webdev-common/webdev-products.config";
import { TILDA_FAQ } from "./webdev-tilda-faq.config";
import { WEBDEV_TILDA_STAGES } from "./webdev-tilda-stages.config";

export const WEBDEV_TILDA_CONFIG = {
  url: WEBDEV_DASHBOARD_PAGES.WEBDEV_TILDA.url,
  hero: {
    basic: {
      title: {
        accent: "Создание сайтов на Tilda: ",
        accentAfter: "Быстро, Качественно, Уникально",

      },
      description:
        "Предлагаем услуги по созданию сайтов на платформе Tilda. Наши специалисты разработают для вас уникальный и адаптивный сайт, который привлечет внимание вашей аудитории и поможет достичь ваших бизнес-целей.",
      image: "promotion-stroitelnie-comp-hero",
    } satisfies THeroBasic,
    infoWebdev: [
      "Уникальный дизайн",
      "Полная адаптивность",
      "Быстрые сроки разработки",
      "1 месяц бесплатной поддержки",
    ] satisfies THeroInfo,
  } satisfies THero,
  supplementaryDescr: {
    title: "Разработка веб-сайтов на Tilda",
    descr:
      "Мы предлагаем создание сайтов на Tilda – платформе, которая идеально подходит для создания стильных и функциональных веб-ресурсов. С нашей помощью вы получите сайт, который будет выделяться среди конкурентов и привлекать ваших клиентов. Tilda позволяет быстро и эффективно создавать сайты с минимальными затратами времени и ресурсов, а наша команда обеспечит высокое качество выполнения каждого этапа работы.",
    image: "seo-common-supplementary.webp",
  } satisfies TSupplementaryDescr,
  suitableFor: {
    items: [
      {
        title: "Малому бизнесу",
        descr:
          "Идеальна для создания простых и привлекательных сайтов-визиток.",
      },
      {
        title: "Стартапам",
        descr:
          "Быстрое развертывание лендингов для привлечения первых клиентов.",
      },
      {
        title: "Креативным агентствам",
        descr:
          "Прекрасная платформа для презентации портфолио и творческих проектов. ",
      },
    ],
  } satisfies TSuitableFor,
  workStages: WEBDEV_TILDA_STAGES satisfies TWorkStages,
  allSiteTypes: {
    formTitle: "Хотите обсудить разработку вашего сайта?",
    formDescr: "Оставьте свои контактные данные, и наш менеджер свяжется с вами, чтобы обсудить все детали вашего проекта и предложить наилучшие решения. Мы готовы провести бесплатную консультацию, чтобы помочь вам выбрать оптимальный тип сайта — будь то сайт-визитка, лендинг или полноценный бизнес-сайт. Мы также предложим подходящую платформу и технологии для разработки, учитывая ваши цели и особенности вашего бизнеса.",
    ...WEBDEV_PRODUCTS,
  } satisfies TServiceProducts,
  faq: TILDA_FAQ satisfies TFaq[],
} satisfies TScreen;
