import { ALL_REVIWES } from "@/content/all-reviwes/all-reviwes.content";
import { WEBDEV_DASHBOARD_PAGES } from "@/dashboard/webdev.dashboard";
import type {
  THero,
  THeroBasic,
  THeroInfo,
  TReviwe,
  TServiceProducts,
  TWorkStages,
} from "@/typing/products.type";
import { TScreen } from "@/typing/screens.type";
import { WEBDEV_COMMON_STAGES } from "./webdev-common-stages";
import { WEBDEV_PRODUCTS } from "./webdev-products";

export const WEBDEV_COMMON_CONTENT = {
  url: WEBDEV_DASHBOARD_PAGES.WEBDEV.url,
  hero: {
    basic: {
      title: {
        accent: "Создание и разработка сайтов",
        accentAfter: "любой сложности",
      },
      description:
        "Мы создаём сайты на платформах JavaScript, WordPress, ModX и Tilda. В каждом проекте учитываем современные тренды UI/UX, предоставляем уникальный дизайн и адаптивную верстку. От лендингов до сложных порталов – наши решения работают на ваш бизнес. Также предлагаем редизайн и доработку существующих сайтов. Не уверены в выборе? Мы поможем подобрать лучшее решение для вашего проекта.",
      image: "webdev-common-hero",
    } satisfies THeroBasic,
    infoWebdev: [
      "От анализа и планирования до разработки, тестирования и поддержки. Мы создаем сайты, которые работают на вас",
      "Подбираем решения под ваши конкретные нужды и цели. Учитываем все особенности вашего бизнеса и пожелания ",
    ] satisfies THeroInfo,
  } satisfies THero,
  products: WEBDEV_PRODUCTS satisfies TServiceProducts,
  workStages: WEBDEV_COMMON_STAGES satisfies TWorkStages,
  whyUsSites: true,
  siteServices: true,
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TScreen;
