import type {
  TFaq,
  THero,
  THeroBasic,
  THeroInfoService,
  TServiceWebdevProducts,
} from "@/interfaces/types/block/products.type";
import { TServiceScreen } from "@/interfaces/types/screens/screens.type";
import { WEBDEV_FAQ } from "./webdev-common-faq.config";
import { WEBDEV_PRODUCTS } from "./webdev-products.config";

export const WEBDEV_COMMON_CONFIG = {
  hero: {
    basic: {
      title: {
        accentText: "Создание и разработка сайтов",
        text: "любой сложности",
        accentOrder: 0,
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
  productsWebdev: WEBDEV_PRODUCTS satisfies TServiceWebdevProducts[],
  howWorksSites: true,
  whyUsSites: true,
  siteServices: true,
  faq: WEBDEV_FAQ satisfies TFaq[],
} satisfies TServiceScreen;
