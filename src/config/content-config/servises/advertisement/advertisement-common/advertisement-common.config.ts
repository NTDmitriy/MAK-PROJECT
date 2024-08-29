import { ALL_CASES_CONTENT } from "@/config/content-config/cases/all-cases.config";
import { allReviwes } from "@/config/content-config/reviwes/reviwes.config";
import { ADVERTISEMENT_DASHBOARD_PAGES } from "@/config/url-config/advertisement-pages.config";
import { IDashboardItem } from "@/config/url-config/all-pages.config";
import {
	TCases,
	TFaq,
	THero,
	THeroBasic,
	THeroInfoService,
	TReviwe,
	TServiceProducts,
} from "@/interfaces/types/block/products.type";
import { TServiceScreen } from "@/interfaces/types/screens/screens.type";
import { ADVERTISEMENT_FAQ } from "./advertisement-common-faq.config";

export const ADVERTISEMENT_COMMON_CONFIG = {
  hero: {
    basic: {
      title: {
        accentText: "Закажите профессиональную настройку ",
        text: "рекламы в интернете",
        accentOrder: 0,
      },
      description:
        "Ищете, где заказать рекламу в интернете? Наше рекламное агентство предоставляет комплексные услуги по настройке и запуску рекламных кампаний в Яндекс Директ, ВКонтакте, Google Ads, Telegram Ads и Meta: Facebook & Instagram. Мы поможем вам привлечь целевую аудиторию, увеличить конверсию и добиться максимального результата от рекламы. Доверьтесь профессионалам!",
      image: "promotion-schools-hero",
    } satisfies THeroBasic,
    info: [
      "Применяем современные инструменты для создания эффективной рекламы в Яндекс Директ, ВКонтакте, Google Ads, Telegram Ads и Meta: Facebook & Instagram",
      "Интегрируем рекламу с другими маркетинговыми каналами для создания единой и мощной маркетинговой стратегии",
    ] satisfies THeroInfoService,
  } satisfies THero,
  products: {
    filling:
      ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT satisfies IDashboardItem,
  } satisfies TServiceProducts,

  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: allReviwes satisfies TReviwe[],
  faq: ADVERTISEMENT_FAQ satisfies TFaq[],
} satisfies TServiceScreen;
