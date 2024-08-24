import { ALL_CASES_CONTENT } from "@/config/content-config/cases/all-cases.config";
import { allReviwes } from "@/config/content-config/reviwes/reviwes.config";
import {
	TCases,
	TDetialServices,
	THero,
	THeroBasic,
	THeroInfo,
	TReviwe,
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
    info: {
      title: "Онлайн-школы и инфобизнес",
      description:
        "Онлайн-школы и инфобизнес сегодня занимают лидирующие позиции на рынке образовательных услуг. С каждым годом все больше людей предпочитают обучаться в удобное время и в комфортных условиях, не выходя из дома. Конкуренция в данной сфере растет, поэтому важно правильно выстроить стратегию продвижения, чтобы привлечь новых учеников и удержать их интерес. Наши специалисты помогут вам создать эффективные маркетинговые кампании, которые повысят узнаваемость вашего бренда и привлекут больше учеников.",
      image: "promotion-schools-hero-info",
    } satisfies THeroInfo,
  } satisfies THero,
  detialServices: ONLINE_SCHOOL_DETAIL satisfies TDetialServices,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: allReviwes satisfies TReviwe[],
} satisfies TProductScreen;
