import { ALL_CASES_CONTENT } from "@/config/content-config/all-cases/all-cases.config";
import { ALL_REVIWES } from "@/config/content-config/all-reviwes/all-reviwes.config";
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
import { INFLUENCE_FAQ } from "./influencePageFaq";
import { SEO_INFLUENCE_INCLUDE } from "./seo-influence-include.config";

export const SEO_INFLUENCE_CONFIG = {
  url: SEO_DASHBOARD_PAGES.SEO_INFLUENCE.url,
  hero: {
    basic: {
      title: {
        accent: "Эффективная реклама",
        accentAfter: "через инфлюенсеров",
      },
      description:
        "Хотите увеличить узнаваемость бренда и привлечь новых клиентов? Реклама через инфлюенсеров – это мощный инструмент для продвижения вашего бизнеса. Мы поможем вам найти подходящих инфлюенсеров, которые идеально подойдут для вашей целевой аудитории, и разработаем креативные кампании, которые принесут отличные результаты.",
      image: "promotion-stroitelnie-comp-hero",
    } satisfies THeroBasic,
    infoProduct: {
      title: "Инфлюенс-маркетинг",
      description:
        "Наше агентство предоставляет полный спектр услуг по организации и проведению рекламных кампаний через инфлюенсеров. Мы сотрудничаем с ведущими блогерами и лидерами мнений на различных платформах, чтобы ваш бренд получил максимальную видимость и доверие целевой аудитории.",
      image: "promotion-medical-hero-info",
    } satisfies THeroInfoProduct,
  } satisfies THero,

  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм:",
        descrBefore: "Наши специалисты имеют ",
        descrAccent: "обширный опыт работы ",
        descrAfter: "с инфлюенсерами на различных платформах.",
      },
      {
        title: "Индивидуальный подход:",
        descrBefore: "Мы разрабатываем ",
        descrAccent: "персонализированные стратегии, ",
        descrAfter: "которые соответствуют вашему бренду и целям.",
      },
      {
        title: "Широкая сеть контактов:",
        descrBefore: "Мы сотрудничаем с ",
        descrAccent: "большим количеством проверенных инфлюенсеров, ",
        descrAfter: "что позволяет нам выбрать наиболее подходящих для вас.",
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
    blockTitle: "Почему рекламу через инфлюенсеров доверяют нам",
    blockTitleDescr:
      "Мы предлагаем уникальный подход к рекламе через инфлюенсеров, который базируется на нашем многолетнем опыте и глубоких знаниях рынка:",
  } satisfies TWhyUs,
  includeService: SEO_INFLUENCE_INCLUDE satisfies TIncludedInService,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: INFLUENCE_FAQ satisfies TFaq[],
} satisfies TScreen;