import { ALL_CASES_CONTENT } from "@/config/content-config/all-cases/all-cases.config";
import { ALL_REVIWES } from "@/config/content-config/all-reviwes/all-reviwes.config";
import { PROMOTION_DASHBOARD_PAGES } from "@/config/url-config/promotion-pages.config";
import {
    TCase,
    TFaq,
    THero,
    THeroBasic,
    THeroInfo,
    TReviwe,
    TServiceProducts
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { PROMOTION_FAQ } from "./promotion-common-faq.config";
import { PROMOTION_PRODUCTS } from "./promotion-products.config";

export const PROMOTION_COMMON_CONFIG = {
  url: PROMOTION_DASHBOARD_PAGES.PROMOTION.url,
  hero: {
    basic: {
      title: {
        accentBefore: "Нишевое",
        accent: "продвижение",
        accentAfter: "",
      },
      description:
        "Максимально раскройте потенциал вашего бизнеса с помощью продвижения в интернете. Мы используем передовые маркетинговые стратегии для увеличения вашей онлайн-видимости, привлечения целевой аудитории и роста числа клиентов. Доверьтесь профессионалам и наблюдайте, как ваше продвижение приводит к новым высотам бизнеса.",
      image: "promotion-common-hero",
    } satisfies THeroBasic,
    infoService: [
      "Разрабатываем уникальные стратегии продвижения, ориентированные на вашу специфическую нишу",
      "Помогаем вам стать лидером мнений в вашей нише через создание и продвижение экспертного контента",
    ] satisfies THeroInfo,
  } satisfies THero,
  products: {
    formTitle: "Не нашли свою нишу? Напишите нам!",
    formDescr: "Каждая ниша уникальна и требует индивидуального подхода. Если вы не нашли свою нишу среди наших услуг, свяжитесь с нами. Мы обсудим ваш проект и предложим наилучшие решения для продвижения. Наш опыт охватывает множество отраслей, и мы уверены, что сможем помочь вам достичь ваших целей. Оставьте свои контактные данные и наш менеджер свяжется с вами и предложит идеальные решения для вашего бизнеса. ",
    ...PROMOTION_PRODUCTS,
  } satisfies TServiceProducts,
  whyUsChecklict: true,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCase[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: PROMOTION_FAQ satisfies TFaq[],
} satisfies TScreen;
