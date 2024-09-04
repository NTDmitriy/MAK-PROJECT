import { ALL_CASES_CONTENT } from "@/config/content-config/cases/all-cases.config";
import { ALL_REVIWES } from "@/config/content-config/reviwes/reviwes.config";
import { SEO_DASHBOARD_PAGES } from "@/config/url-config/seo-pages.config";
import {
    TCases,
    TFaq,
    THero,
    THeroBasic,
    THeroInfoProduct,
    TIncludedInService,
    TReviwe,
    TWhyUs,
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { POSEVI_FAQ } from "./seo-posevy-faq";
import { SEO_POSEVY_INCLUDE } from "./seo-posevy-include.config";

export const SEO_POSEVY_CONFIG = {
  url: SEO_DASHBOARD_PAGES.SEO_POSEVY.url,
  hero: {
    basic: {
      title: {
        accent: "Эффективные посевы рекламы",
        accentAfter: "в социальных сетях",
      },
      description:
        "Хотите увеличить охват и привлечь новых клиентов? Услуга посевов рекламы позволяет быстро и эффективно донести ваше сообщение до широкой аудитории   в социальных сетях. Наше агентство профессионально организует и проведет рекламные посевы, чтобы ваш бренд получил максимальное внимание и вовлеченность.",
      image: "promotion-stroitelnie-comp-hero",
    } satisfies THeroBasic,
    infoProduct: {
      title: "Посевы",
      description:
        "Наше агентство предоставляет полный спектр услуг по организации и проведению рекламных посевов. Мы сотрудничаем с популярными пабликами, группами и каналами, чтобы ваша реклама дошла до целевой аудитории и вызвала максимальный отклик.",
      image: "promotion-medical-hero-info",
    } satisfies THeroInfoProduct,
  } satisfies THero,
  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм:",
        descrBefore: "Наши специалисты имеют ",
        descrAccent: "обширный опыт работы ",
        descrAfter: "с посевами в различных социальных сетях.",
      },
      {
        title: "Индивидуальный подход:",
        descrBefore: "Мы разрабатываем ",
        descrAccent: "персонализированные стратегии, ",
        descrAfter: "которые соответствуют вашему бренду и целям.",
      },
      {
        title: "Широкая сеть:",
        descrBefore: "Мы сотрудничаем с ",
        descrAccent: "большим количеством популярных сообществ, ",
        descrAfter: "что позволяет нам выбрать наиболее подходящие для вас.",
      },
      {
        title: "Прозрачность и отчетность:",
        descrBefore: "Мы предоставляем ",
        descrAccent: "прозрачные отчеты ",
        descrAfter: "и открыты для общения на каждом этапе кампании.",
      },
      {
        title: "Результативность:",
        descrBefore: "Наши кампании всегда нацелены на ",
        descrAccent: "достижение конкретных результатов ",
        descrAfter: "и улучшение показателей вашего бизнеса.",
      },
    ],
    blockTitle: "Почему посевы рекламы доверяют нам",
    blockTitleDescr:
      "Мы предлагаем уникальный подход к посевам рекламы, который базируется на нашем многолетнем опыте и глубоких знаниях рынка:",
  } satisfies TWhyUs,
  includeService: SEO_POSEVY_INCLUDE satisfies TIncludedInService,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: POSEVI_FAQ satisfies TFaq[],
} satisfies TScreen;
