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
    info: {
      title: "Продвижение магазинов на маркетплейсах",
      description:
        "Маркетплейсы стали важной частью электронной коммерции, предоставляя бизнесам возможность продавать свои товары широкой аудитории. Однако высокая конкуренция требует грамотного подхода к продвижению. Оптимизация карточек товаров, работа с отзывами, контекстная и таргетированная реклама - все это играет ключевую роль в успешных продажах. Наши эксперты помогут вам разработать и реализовать эффективную стратегию продвижения, которая обеспечит рост вашего магазина на маркетплейсах и привлечение новых покупателей.",
      image: "promotion-market-pl-hero-info",
    } satisfies THeroInfo,
  } satisfies THero,
  detialServices: MARKET_PLACE_DETAIL satisfies TDetialServices,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: allReviwes satisfies TReviwe[],
} satisfies TProductScreen;
