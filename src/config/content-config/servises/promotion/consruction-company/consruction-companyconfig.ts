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
    info: {
      title: "Продвижение для строительных компаний",
      description:
        "В условиях высокой конкуренции на строительном рынке важно использовать эффективные стратегии продвижения. Правильный маркетинг помогает привлечь новых клиентов, повысить доверие к компании и увеличить количество заказов. Наша команда предлагает комплексный подход к продвижению строительных компаний, включая SEO, контент-маркетинг, SMM, таргетированную и контекстную рекламу. Мы создадим для вас индивидуальную стратегию, которая обеспечит рост вашего бизнеса и укрепит его позиции на рынке.",
      image: "promotion-stroitelnie-comp-hero-info",
    } satisfies THeroInfo,
  } satisfies THero,
  detialServices: CONSTRUCTION_COMPANY_DETAIL satisfies TDetialServices,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: allReviwes satisfies TReviwe[],
} satisfies TProductScreen;
