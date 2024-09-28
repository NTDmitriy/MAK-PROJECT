
import { ALL_CASES_CONTENT } from "@/content/all-cases/all-cases.content";
import { ALL_REVIWES } from "@/content/all-reviwes/all-reviwes.content";
import { PROMOTION_DASHBOARD_PAGES } from "@/dashboard/promotion.dashboard";
import {
  TCase,
  TFaq,
  THero,
  THeroBasic,
  THeroInfo,
  TReviwe,
  TServiceProducts
} from "@/typing/products.type";
import { TScreen } from "@/typing/screens.type";
import { PROMOTION_FAQ } from "./promotion-common-faq";
import { PROMOTION_PRODUCTS } from "./promotion-products";

export const PROMOTION_COMMON_CONTENT = {
  url: PROMOTION_DASHBOARD_PAGES.PROMOTION.url,
  hero: {
    basic: {
      title: {
        accentBefore: "Нишевое",
        accent: "продвижение",
        accentAfter: "",
      },
      description:
        "Максимально раскройте потенциал вашего бизнеса с помощью продвижения в интернете. Мы используем передовые маркетинговые стратегии для увеличения вашей онлайн-видимости, привлечения целевой аудитории и роста числа клиентов. Доверьтесь профессионалам и наблюдайте, как ваше продвижение приводит к новым высотам бизнеса.",
      image: "promotion-common-hero",
    } satisfies THeroBasic,
    infoService: [
      "Разрабатываем уникальные стратегии продвижения, ориентированные на вашу специфическую нишу",
      "Помогаем вам стать лидером мнений в вашей нише через создание и продвижение экспертного контента",
    ] satisfies THeroInfo,
  } satisfies THero,
  products: {
    formTitle: "Не нашли свою нишу? Напишите нам!",
    formDescr: "Каждая ниша уникальна и требует индивидуального подхода. Если вы не нашли свою нишу среди наших услуг, свяжитесь с нами. Мы обсудим ваш проект и предложим наилучшие решения для продвижения. Наш опыт охватывает множество отраслей, и мы уверены, что сможем помочь вам достичь ваших целей. Оставьте свои контактные данные и наш менеджер свяжется с вами и предложит идеальные решения для вашего бизнеса. ",
    ...PROMOTION_PRODUCTS,
  } satisfies TServiceProducts,
  whyUsChecklict: true,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCase[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: PROMOTION_FAQ satisfies TFaq[],
} satisfies TScreen;
