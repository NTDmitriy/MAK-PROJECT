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
import { PROMOTION_FAQ } from "./seo-promotion-faq.config";
import { SEO_PROMOTION_INCLUDE } from "./seo-promotion-include.config";

export const SEO_PROMOTION_CONFIG = {
  url: SEO_DASHBOARD_PAGES.SEO_PROMOTION.url,
  hero: {
    basic: {
      title: {
        accent: "Профессиональное SEO-продвижение",
        accentAfter: "для вашего бизнеса",
      },
      description:
        "Хотите улучшить позиции вашего сайта в поисковых системах и привлечь больше клиентов? Наше агентство предлагает комплексные услуги по SEO-продвижению. Мы поможем вашему сайту достичь высоких позиций в Google и Яндекс, что увеличит трафик и конверсии. Закажите наше SEO-продвижение и увидьте результаты!",
      image: "promotion-stroitelnie-comp-hero",
    } satisfies THeroBasic,
    infoProduct: {
      title: "SEO-продвижение",
      description:
        "Чтобы повысить видимость вашего сайта в поисковых системах, используются различные методы и стратегии. Мы применяем исключительно белые методы оптимизации, соответствующие требованиям поисковых систем, что обеспечивает достижение долгосрочных и стабильных результатов.",
      image: "promotion-medical-hero-info",
    } satisfies THeroInfoProduct,
  } satisfies THero,

  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм:",
        descrBefore: "Наши специалисты имеют ",
        descrAccent: "обширный опыт работы ",
        descrAfter:
          "в сфере SEO и следят за всеми новыми трендами и изменениями алгоритмов поисковых систем.",
      },
      {
        title: "Индивидуальный подход:",
        descrBefore: "Мы разрабатываем ",
        descrAccent: "персонализированные стратегии, ",
        descrAfter: "которые соответствуют вашему бизнесу и целям.",
      },
      {
        title: "Комплексный подход:",
        descrBefore: "Мы охватываем ",
        descrAccent: "все аспекты SEO, ",
        descrAfter:
          "от технической оптимизации до создания качественного контента и ссылочного продвижения.",
      },
      {
        title: "Прозрачность и отчетность:",
        descrBefore: "Мы предоставляем ",
        descrAccent: "прозрачные отчеты ",
        descrAfter: "и открыты для общения на каждом этапе работы.",
      },
      {
        title: "Результативность:",
        descrBefore: "Наши кампании всегда нацелены на ",
        descrAccent: "достижение конкретных результатов ",
        descrAfter: "и улучшение позиций вашего сайта в поисковой выдаче.",
      },
    ],
    blockTitle: "Почему SEO-продвижение доверяют нам",
    blockTitleDescr:
      "Наше агентство предлагает уникальный подход к SEO-продвижению, который основывается на нашем многолетнем опыте и глубоких знаниях рынка:",
  } satisfies TWhyUs,
  includeService: SEO_PROMOTION_INCLUDE satisfies TIncludedInService,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: PROMOTION_FAQ satisfies TFaq[],
} satisfies TScreen;
