
import { ALL_CASES_CONTENT } from "@/content/all-cases/all-cases.content";
import { ALL_REVIWES } from "@/content/all-reviwes/all-reviwes.content";
import { SEO_DASHBOARD_PAGES } from "@/dashboard/seo.dashboard";
import {
  TCase,
  TFaq,
  THero,
  THeroBasic,
  THeroInfoProduct,
  TIncludedInService,
  TReviwe,
  TWhyUs,
} from "@/typing/products.type";
import { TScreen } from "@/typing/screens.type";
import { EMAIL_FAQ } from "./seo-email-faq";
import { SEO_EMAIL_INCLUDE } from "./seo-email-include";

export const SEO_EMAIL_CONTENT = {
  url: SEO_DASHBOARD_PAGES.SEO_EMAIL_DISTRIBUTION.url,
  hero: {
    basic: {
      title: {
        accent: "Профессиональные email\u2011рассылки",
        accentAfter: "по базам",
      },
      description:
        "Хотите увеличить продажи и укрепить отношения с клиентами? Наше агентство предлагает услуги по созданию и управлению email-рассылками по готовым или имеющимся базам. Мы разработаем эффективные письма, которые привлекут внимание и увеличат конверсию. Закажите нашу услугу и увидьте, как растет ваша прибыль.",
      image: "seo-email-hero",
    } satisfies THeroBasic,
    infoProduct: {
      title: "Email-маркетинг",
      description:
        "Наше агентство предоставляет комплексный подход к организации email-рассылок. Мы поможем вам создать целевые письма, которые донесут ваше сообщение до потенциальных и существующих клиентов, увеличат конверсию и укрепят лояльность к вашему бренду. ",
      image: "seo-email-hero-info",
    } satisfies THeroInfoProduct,
  } satisfies THero,

  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм:",
        descrBefore: "Наши специалисты имеют ",
        descrAccent: "обширный опыт работы ",
        descrAfter: "с email-рассылками в различных отраслях.",
      },
      {
        title: "Индивидуальный подход:",
        descrBefore: "Мы разрабатываем ",
        descrAccent: "персонализированные стратегии, ",
        descrAfter: "которые соответствуют вашему бренду и целям.",
      },
      {
        title: "Современные технологии:",
        descrBefore: "Мы используем ",
        descrAccent: "передовые инструменты и платформы ",
        descrAfter: "для создания и управления рассылками.",
      },
      {
        title: "Прозрачность и отчетность:",
        descrBefore: "Мы предоставляем ",
        descrAccent: "прозрачные отчеты ",
        descrAfter: "и открыты для общения на каждом этапе кампании.",
      },
      {
        title: "Результативность:",
        descrBefore: "Наши кампании всегда нацелены на ",
        descrAccent: "достижение конкретных результатов ",
        descrAfter: "и улучшение показателей вашего бизнеса.",
      },
    ],
    blockTitle: "Почему email-рассылки доверяют нам",
    blockTitleDescr:
      "Мы предлагаем уникальный подход к email-маркетингу, который базируется на нашем многолетнем опыте и глубоких знаниях рынка:",
  } satisfies TWhyUs,
  includeService: SEO_EMAIL_INCLUDE satisfies TIncludedInService,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCase[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: EMAIL_FAQ satisfies TFaq[],
} satisfies TScreen;
