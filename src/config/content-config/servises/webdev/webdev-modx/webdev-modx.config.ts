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
import { MODX_FAQ } from "./webdev-modx-faq.config";
import { WEBDEV_MODX_STAGES } from "./webdev-modx-stages.config";

export const WEBDEV_MODX_CONFIG = {
  url: WEBDEV_DASHBOARD_PAGES.WEBDEV_MODX.url,
  hero: {
    basic: {
      title: {
        accent: "Создание сайтов на ModX:",
        accentAfter: "Гибкость, Надежность, Высокая производительность",

      },
      description: 'Предлагаем услуги по созданию сайтов на платформе ModX. Наша команда создаст для вас высокопроизводительный и безопасный сайт с уникальными функциями, который будет идеально соответствовать потребностям вашего бизнеса.',
      image: "promotion-stroitelnie-comp-hero",
    } satisfies THeroBasic,
    infoWebdev: [
      "Уникальный дизайн",
      "Полная адаптивность",
      "Быстрые сроки разработки",
      "1 месяц бесплатной поддержки",
    ] satisfies THeroInfoService,
  } satisfies THero,
  supplementaryDescr: {
    title: "Разработка веб-сайтов на ModX",
    descr: "Создание сайтов на ModX – это выбор для тех, кто ценит гибкость и безопасность. Мы предлагаем разработку сайтов, которые будут не только красивыми, но и максимально функциональными. ModX – мощная и масштабируемая платформа, идеально подходящая для сложных проектов с уникальными требованиями. Наши специалисты обеспечат качественное выполнение всех этапов работ и высокую производительность вашего сайта.",
    image: "seo-common-supplementary.webp",
  } satisfies TSupplementaryDescr,
  suitableFor:{ items: [
    {
      title: "Крупным компаниям",
      descr: "Подходит для создания сложных корпоративных сайтов и интернет-порталов.",
    },
    {
      title: "IT-компаниям",
      descr: "Идеален для проектов с уникальными требованиями к функционалу и безопасности.",
    },
    {
      title: "Бизнесам с особыми требованиями",
      descr:
        "Прекрасное решение для разработки кастомизированных веб-приложений и сервисов.",
    },
  ]}satisfies TSuitableFor,
  workStages: WEBDEV_MODX_STAGES satisfies TWorkStages,
  allSiteTypes: {
    items: WEBDEV_PRODUCTS,
    formTitle: "Сроки редизайна и доработки",
    formDescr:
      "Сроки редизайна и доработки сайта зависят от индивидуальных особенностей и потребностей вашего проекта. Мы подходим к каждому клиенту персонально и учитываем все нюансы, чтобы предложить оптимальное решение. Для точной оценки сроков и объема работ нам необходимо ознакомиться с вашим действующим сайтом и понять ваши цели. Запишитесь на консультацию, чтобы мы могли обсудить все детали и предложить вам наилучший план действий",
  } satisfies TAllSiteTypes,
  faq: MODX_FAQ satisfies TFaq[],
} satisfies TScreen;
