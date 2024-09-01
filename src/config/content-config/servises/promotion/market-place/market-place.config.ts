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
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { MARKET_PLACE_DETAIL } from "./market-place-detail.config";

export const MARKET_PLACE_CONFIG = {
  hero: {
    basic: {
      title: {
        accentText: "Эффективное продвижение",
        text: "магазинов на маркетплейсах (Wildberries, OZON, Яндекс Маркет и другие)",
        accentOrder: 0,
      },
      description:
        "Максимизируйте свои продажи на популярных маркетплейсах с нашей помощью. Мы предлагаем комплексные решения для повышения видимости и увеличения конверсии вашего магазина.",
      image: "promotion-market-pl-hero",
    } satisfies THeroBasic,
    infoProduct: {
      title: "Продвижение магазинов на маркетплейсах",
      description:
        "Маркетплейсы стали важной частью электронной коммерции, предоставляя бизнесам возможность продавать свои товары широкой аудитории. Однако высокая конкуренция требует грамотного подхода к продвижению. Оптимизация карточек товаров, работа с отзывами, контекстная и таргетированная реклама - все это играет ключевую роль в успешных продажах. Наши эксперты помогут вам разработать и реализовать эффективную стратегию продвижения, которая обеспечит рост вашего магазина на маркетплейсах и привлечение новых покупателей.",
      image: "promotion-market-pl-hero-info",
    } satisfies THeroInfoProduct,
  } satisfies THero,
  howWorks: {
    items: [
      {
        title: "Анализ и исследование",
        descr:
          "Проводим детальный анализ вашего бизнеса, конкурентов и целевой аудитории.",
      },
      {
        title: "Разработка стратегии",
        descr:
          "Создаем индивидуальную стратегию, которая максимально соответствует вашим целям.",
      },
      {
        title: "Реализация плана",
        descr:
          "Внедряем все запланированные меры, тщательно контролируя каждый этап.",
      },
      {
        title: "Мониторинг и оптимизация",
        descr:
          "Постоянно отслеживаем результаты и вносим необходимые коррективы для достижения максимального эффекта.",
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
          "с различными маркетплейсами и знают, как достичь максимальных результатов.",
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
        descrAccent: "все аспекты интернет-маркетинга",
        descrAfter: "чтобы обеспечить всестороннее продвижение вашего магазина на маркетплейсах.",
      },
    ],
    options: {
      title: "Почему нас выбирают:",
    },
  } satisfies TWhyUs,
  detialServices: MARKET_PLACE_DETAIL satisfies TDetialServices,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TScreen;
