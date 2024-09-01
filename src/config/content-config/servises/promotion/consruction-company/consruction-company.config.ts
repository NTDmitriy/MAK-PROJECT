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
import { CONSTRUCTION_COMPANY_DETAIL } from "./consruction-company-detail.config";

export const CONSTRUCTION_COMPANY_CONFIG = {
  hero: {
    basic: {
      title: {
        accentText: "Комплексное продвижение",
        text: "для строительных компаний",
        accentOrder: 0,
      },
      description:
        "Повышайте узнаваемость и привлекайте больше клиентов для вашей строительной компании с нашими комплексными маркетинговыми решениями. Мы поможем вам выделиться на рынке и увеличить количество заказов.",
      image: "promotion-stroitelnie-comp-hero",
    } satisfies THeroBasic,
    infoProduct: {
      title: "Продвижение для строительных компаний",
      description:
        "В условиях высокой конкуренции на строительном рынке важно использовать эффективные стратегии продвижения. Правильный маркетинг помогает привлечь новых клиентов, повысить доверие к компании и увеличить количество заказов. Наша команда предлагает комплексный подход к продвижению строительных компаний, включая SEO, контент-маркетинг, SMM, таргетированную и контекстную рекламу. Мы создадим для вас индивидуальную стратегию, которая обеспечит рост вашего бизнеса и укрепит его позиции на рынке.",
      image: "promotion-stroitelnie-comp-hero-info",
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
          "с строительными компаниями и знают, как достичь максимальных результатов.",
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
        descrAfter: "чтобы обеспечить всестороннее продвижение вашей строительной компании.",
      },
    ],
    options: { 
      title: "Почему нас выбирают:",
    },
  } satisfies TWhyUs,
  detialServices: CONSTRUCTION_COMPANY_DETAIL satisfies TDetialServices,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TProductScreen;
