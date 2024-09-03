import { ALL_REVIWES } from "@/config/content-config/reviwes/reviwes.config";
import { WEBDEV_DASHBOARD_PAGES } from "@/config/url-config/webdev-pages.config";
import type {
  THero,
  THeroBasic,
  THeroInfoService,
  TReviwe,
  TServiceProducts,
  TWorkStages
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { WEBDEV_COMMON_STAGES } from "./webdev-common-stages.config";
import { WEBDEV_PRODUCTS } from "./webdev-products.config";

export const WEBDEV_COMMON_CONFIG = {
  url: WEBDEV_DASHBOARD_PAGES.WEBDEV.url,
  hero: {
    basic: {
      title: {
        accent: "Создание и разработка сайтов",
        accentAfter: "любой сложности",
      },
      description:
        "Мы предлагаем профессиональные услуги по созданию сайтов любой сложности, включая разработку на популярных платформах и создание уникальных самописных решений. Наша команда обеспечивает индивидуальный дизайн, адаптивную верстку и качественное информационное наполнение, учитывая все современные тренды UI/UX. Мы гарантируем быстрое и качественное выполнение работы. Если вы не уверены в выборе платформы, свяжитесь с нами, и мы поможем вам найти оптимальное решение для вашего проекта. ",
      image: "promotion-schools-hero",
    } satisfies THeroBasic,
    infoWebdev: [
      "От анализа и планирования до разработки, тестирования и поддержки. Мы создаем сайты, которые работают на вас",
      "Подбираем решения под ваши конкретные нужды и цели. Учитываем все особенности вашего бизнеса и пожелания ",
      "От анализа и планирования до разработки, тестирования и поддержки. Мы создаем сайты, которые работают на вас",
      "Подбираем решения под ваши конкретные нужды и цели. Учитываем все особенности вашего бизнеса и пожелания ",
    ] satisfies THeroInfoService,
  } satisfies THero,
  products: WEBDEV_PRODUCTS satisfies TServiceProducts,
  workStages: WEBDEV_COMMON_STAGES satisfies TWorkStages,
  whyUsSites: true,
  siteServices: true,
  reviwes: ALL_REVIWES satisfies TReviwe[],

} satisfies TScreen;
