import { ALL_CASES_CONTENT } from "@/config/content-config/cases/all-cases.config";
import { ALL_REVIWES } from "@/config/content-config/reviwes/reviwes.config";
import {
  TCases,
  THero,
  THeroBasic,
  THeroInfoProduct,
  TIncludedInService,
  TReviwe,
  TWhyUs,
} from "@/interfaces/types/block/products.type";
import { TProductScreen } from "@/interfaces/types/screens/screens.type";
import { SEO_EMAIL_INCLUDE } from "./seo-email-include.config";

export const SEO_EMAIL_CONFIG = {
  hero: {
    basic: {
      title: {
        accentText: "Профессиональные email-рассылки",
        text: "по базам",
        accentOrder: 0,
      },
      description:
        "Хотите увеличить продажи и укрепить отношения с клиентами? Наше агентство предлагает услуги по созданию и управлению email-рассылками по готовым или имеющимся базам. Мы разработаем эффективные письма, которые привлекут внимание и увеличат конверсию. Закажите нашу услугу и увидьте, как растет ваша прибыль.",
      image: "promotion-stroitelnie-comp-hero",
    } satisfies THeroBasic,
    infoProduct: {
      title: "Email-маркетинг",
      description:
        "Наше агентство предоставляет комплексный подход к организации email-рассылок. Мы поможем вам создать целевые письма, которые донесут ваше сообщение до потенциальных и существующих клиентов, увеличат конверсию и укрепят лояльность к вашему бренду. ",
      image: "promotion-medical-hero-info",
    } satisfies THeroInfoProduct,
  } satisfies THero,

  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм:",
        descrBefore: "Наши специалисты имеют ",
        descrAccent: "обширный опыт работы ",
        descrAfter: "с email-рассылками в различных отраслях.",
      },
      {
        title: "Индивидуальный подход:",
        descrBefore: "Мы разрабатываем ",
        descrAccent: "персонализированные стратегии, ",
        descrAfter: "которые соответствуют вашему бренду и целям.",
      },
      {
        title: "Современные технологии:",
        descrBefore: "Мы используем ",
        descrAccent: "передовые инструменты и платформы ",
        descrAfter: "для создания и управления рассылками.",
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
    options: {
      title: "Почему email-рассылки доверяют нам",
      titleDescr:
        "Мы предлагаем уникальный подход к email-маркетингу, который базируется на нашем многолетнем опыте и глубоких знаниях рынка:",
    },
  } satisfies TWhyUs,
  includeService: SEO_EMAIL_INCLUDE satisfies TIncludedInService,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TProductScreen;
