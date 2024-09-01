import { ALL_CASES_CONTENT } from "@/config/content-config/cases/all-cases.config";
import { ALL_REVIWES } from "@/config/content-config/reviwes/reviwes.config";
import {
  TCases,
  TDetialServices,
  THero,
  THeroBasic,
  THeroInfoProduct,
  THowWorks,
  TReviwe,
  TWhyUs,
} from "@/interfaces/types/block/products.type";
import { TProductScreen } from "@/interfaces/types/screens/screens.type";
import { ONLINE_SCHOOL_DETAIL } from "./online-schools-detail.config";

export const ONLINE_SCHOOL_CONFIG = {
  hero: {
    basic: {
      title: {
        accentText: "Эффективное продвижение",
        text: "для экспертов, наставников и онлайн-школ",
        accentOrder: 0,
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
    options: {
      title: "Как мы работаем",
    },
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
        descrAfter: "чтобы обеспечить всестороннее продвижение вашей онлайн-школы.",
      },
    ],
    options: {
      title: "Почему нас выбирают:",
    },
  } satisfies TWhyUs,
  detialServices: ONLINE_SCHOOL_DETAIL satisfies TDetialServices,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TProductScreen;
