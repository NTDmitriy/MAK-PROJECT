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
import { ONLINE_SCHOOL_DETAIL } from "./online-schools-detail";

export const ONLINE_SCHOOL_CONTENT = {
  url: PROMOTION_DASHBOARD_PAGES.PROMOTION_ONLINE_SCHOOL.url,
  hero: {
    basic: {
      title: {
        accent: "Эффективное продвижение",
        accentAfter: "для экспертов, наставников и онлайн-школ",
      },
      description:
        "Мы поможем вашей онлайн-школе выделиться среди конкурентов и привлечь больше учеников. Комплексный подход к продвижению, включающий SEO, SMM, PPC и контент-маркетинг.",
      image: "promotion-schools-hero",
    } satisfies THeroBasic,
    infoProduct: {
      title: "Онлайн-школы и инфобизнес",
      description:
        "Онлайн-школы и инфобизнес сегодня занимают лидирующие позиции на рынке образовательных услуг. С каждым годом все больше людей предпочитают обучаться в удобное время и в комфортных условиях, не выходя из дома. Конкуренция в данной сфере растет, поэтому важно правильно выстроить стратегию продвижения, чтобы привлечь новых учеников и удержать их интерес. Наши специалисты помогут вам создать эффективные маркетинговые кампании, которые повысят узнаваемость вашего бренда и привлекут больше учеников.",
      image: "promotion-schools-hero-info",
    } satisfies THeroInfoProduct,
  } satisfies THero,
  howWorks: {
    items: [
      {
        title: "Анализ и аудит",
        descr:
          "Изучаем вашу текущую маркетинговую стратегию и определяем точки роста.",
      },
      {
        title: "Планирование и стратегия",
        descr:
          "Разрабатываем детальный план продвижения, учитывая особенности вашего бизнеса и целевой аудитории.",
      },
      {
        title: "Реализация",
        descr:
          "Внедряем разработанную стратегию, постоянно оптимизируя процессы для достижения лучших результатов.",
      },
      {
        title: "Отчетность и анализ",
        descr:
          "Предоставляем регулярные отчеты и анализируем эффективность кампаний, корректируя их по мере необходимости.",
      },
    ],

    blockTitle: "Как мы работаем",
  } satisfies THowWorks,
  whyUs: {
    items: [
      {
        title: "Опыт и профессионализм",
        descrBefore: "Наши специалисты",
        descrAccent: "имеют богатый опыт работы ",
        descrAfter:
          "с онлайн-школами и знают, как достичь максимальных результатов.",
      },
      {
        title: "Индивидуальный подход",
        descrBefore: "Мы разрабатываем",
        descrAccent: "уникальные стратегии ",
        descrAfter: "для каждого клиента, учитывая специфику его бизнеса.",
      },
      {
        title: "Прозрачность и отчетность",
        descrBefore: "",
        descrAccent: "Вы всегда будете в курсе",
        descrAfter:
          "того, как идут дела с вашими кампаниями, благодаря регулярным отчетам и открытой коммуникации.",
      },
      {
        title: "Комплексный подход",
        descrBefore: "Мы охватываем",
        descrAccent: "все аспекты интернет-маркетинга,",
        descrAfter:
          "чтобы обеспечить всестороннее продвижение вашей онлайн-школы.",
      },
    ],
    blockTitle: "Почему нас выбирают",
  } satisfies TWhyUs,
  detialServices: ONLINE_SCHOOL_DETAIL satisfies TDetialServices,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCase[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TScreen;
