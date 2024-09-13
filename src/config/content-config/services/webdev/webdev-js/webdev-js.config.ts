import { WEBDEV_DASHBOARD_PAGES } from "@/config/url-config/webdev-pages.config";
import {
  TFaq,
  THero,
  THeroBasic,
  THeroInfo,
  TProjectTeam,
  TServiceProducts,
  TSuitableFor,
  TSupplementaryDescr,
  TWorkStages
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { WEBDEV_PRODUCTS } from "../webdev-common/webdev-products.config";
import { JS_FAQ } from "./webdev-js-faq.config";
import { WEBDEV_JS_STAGES } from "./webdev-js-stages.config";
import { PROJECT_TEAM } from "./webdev-js-team";

export const WEBDEV_JS_CONFIG = {
  url: WEBDEV_DASHBOARD_PAGES.WEBDEV_JS.url,
  hero: {
    basic: {
      title: {
        accent: "Создание сайтов на JavaScript:",
        accentAfter: "Мощные, Быстрые и Адаптивные решения",
      },
      description:
        "Мы предлагаем профессиональные услуги по созданию сайтов на JavaScript. Наши опытные разработчики создадут для вас высокопроизводительный, адаптивный и современный сайт, который будет работать быстро и эффективно на любых устройствах.",
      image: "webdev-js-hero",
    } satisfies THeroBasic,
    infoWebdev: [
      "Эксклюзивный дизайн",
      "Быстрая загрузка и высокая производительность",
      "Полная адаптивность на всех устройствах",
      "1 месяц бесплатной поддержки",
    ] satisfies THeroInfo,
  } satisfies THero,
  supplementaryDescr: {
    title: "Разработка веб-сайтов на JS фреймворках",
    descr:
      "Создание сайтов на JavaScript – это современный подход к разработке веб-ресурсов, обеспечивающий высокую производительность и улучшенный пользовательский опыт. JavaScript позволяет создавать динамичные и интерактивные сайты, которые быстро загружаются и отлично работают на любых устройствах. Мы используем новейшие фреймворки и библиотеки, такие как React, Next.js, Vue.js и Angular, чтобы предложить вам наилучшее решение для вашего бизнеса. Независимо от сложности проекта, наша команда обеспечит качественное выполнение всех этапов разработки, от планирования и дизайна до тестирования и поддержки.",
    image: "webdev-js-supplementary",
  } satisfies TSupplementaryDescr,
  suitableFor: {
    items: [
      {
        title: "Интернет-магазинам и онлайн-платформам",
        descr:
          "Подходит для быстрой загрузки и интерактивного взаимодействия с пользователями.",
      },
      {
        title: "Корпоративным клиентам",
        descr: "Идеален для масштабируемых и надежных корпоративных порталов.",
      },
      {
        title: "Стартапам и инновационным проектам",
        descr:
          "Отличное решение для быстрого запуска и последующего масштабирования. ",
      },
    ],
  } satisfies TSuitableFor,
  technologyStack: true,
  workStages: WEBDEV_JS_STAGES satisfies TWorkStages,
  allSiteTypes: {
    formTitle: "Хотите обсудить разработку вашего сайта?",
    formDescr:
      "Оставьте свои контактные данные, и наш менеджер свяжется с вами, чтобы обсудить все детали вашего проекта и предложить наилучшие решения. Мы готовы провести бесплатную консультацию, чтобы помочь вам выбрать оптимальный тип сайта — будь то сайт-визитка, лендинг или полноценный бизнес-сайт. Мы также предложим подходящую платформу и технологии для разработки, учитывая ваши цели и особенности вашего бизнеса.",
    ...WEBDEV_PRODUCTS,
  } satisfies TServiceProducts,
  faq: JS_FAQ satisfies TFaq[],
  projectTeam: PROJECT_TEAM satisfies TProjectTeam[],
} satisfies TScreen;
