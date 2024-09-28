import { ALL_CASES_CONTENT } from "@/content/all-cases/all-cases.content";
import { ALL_REVIWES } from "@/content/all-reviwes/all-reviwes.content";
import { PROMOTION_DASHBOARD_PAGES } from "@/dashboard/promotion.dashboard";
import {
  TCase,
  TDetialServices,
  THero,
  THeroBasic,
  THeroInfoProduct,
  THowWorks,
  TReviwe,
  TWhyUs,
} from "@/typing/products.type";
import { TScreen } from "@/typing/screens.type";
import { MEDICAL_DETAIL } from "./medical-detail";

export const MEDICAL_CONTENT = {
  url: PROMOTION_DASHBOARD_PAGES.PROMOTION_MEDICAL.url,
  hero: {
    basic: {
      title: {
        accentBefore: "Продвижение медицинских учреждений: ",
        accent: "привлечение пациентов и рост доверия",
      },
      description:
        "Увеличьте количество пациентов и улучшите репутацию вашего медицинского учреждения с помощью наших комплексных маркетинговых решений. Мы знаем, как сделать вашу клинику заметной и востребованной.",
      image: "promotion-medical-hero",
    } satisfies THeroBasic,
    infoProduct: {
      title: "Продвижение для медицинских учреждений",
      description:
        "Современные медицинские учреждения сталкиваются с высокой конкуренцией и растущими ожиданиями пациентов. Для привлечения новых пациентов и поддержания доверия необходимо использовать эффективные маркетинговые стратегии. Наша команда специалистов помогает медицинским учреждениям разрабатывать и внедрять индивидуальные решения, направленные на повышение видимости, улучшение репутации и увеличение числа записей на прием. Мы предлагаем комплексный подход, который включает в себя SEO, контент-маркетинг, SMM и PPC-рекламу, чтобы обеспечить стабильный рост вашего медицинского бизнеса.",
      image: "promotion-medical-hero-info",
    } satisfies THeroInfoProduct,
  } satisfies THero,
  howWorks: {
    items: [
      {
        title: "Анализ и аудит",
        descr:
          "Изучаем вашу текущую маркетинговую стратегию и определяем точки роста.",
      },
      {
        title: "Планирование и стратегия",
        descr:
          "Разрабатываем детальный план продвижения, учитывая особенности вашего бизнеса и целевой аудитории.",
      },
      {
        title: "Реализация",
        descr:
          "Внедряем разработанную стратегию, постоянно оптимизируя процессы для достижения лучших результатов.",
      },
      {
        title: "Отчетность и анализ",
        descr:
          "Предоставляем регулярные отчеты и анализируем эффективность кампаний, корректируя их по мере необходимости.",
      },
    ],

    blockTitle: "Как мы работаем",
  } satisfies THowWorks,
  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм",
        descrBefore: "Наши специалисты",
        descrAccent: "имеют глубокое понимание",
        descrAfter:
          "специ фики медицинского маркетинга и знают, как достичь поставленных целей. ",
      },
      {
        title: "Индивидуальный подход",
        descrBefore: "Мы разрабатываем",
        descrAccent: "уникальные стратегии ",
        descrAfter: "для каждого клиента, учитывая специфику его бизнеса.",
      },
      {
        title: "Прозрачность и отчетность",
        descrBefore: "",
        descrAccent: "Вы всегда будете в курсе",
        descrAfter:
          "того, как идут дела с вашими кампаниями, благодаря регулярным отчетам и открытой коммуникации.",
      },
      {
        title: "Комплексный подход",
        descrBefore: "Мы охватываем",
        descrAccent: "все аспекты интернет-маркетинга,",
        descrAfter:
          "чтобы обеспечить всестороннее продвижение вашего медицинского учреждения.",
      },
    ],

    blockTitle: "Почему нас выбирают",
  } satisfies TWhyUs,
  detialServices: MEDICAL_DETAIL satisfies TDetialServices,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCase[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TScreen;
