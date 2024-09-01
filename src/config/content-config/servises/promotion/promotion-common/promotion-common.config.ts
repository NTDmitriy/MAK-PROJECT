import { ALL_CASES_CONTENT } from "@/config/content-config/cases/all-cases.config";
import { ALL_REVIWES } from "@/config/content-config/reviwes/reviwes.config";
import { IDashboardItem } from "@/config/url-config/all-pages.config";
import { PROMOTION_DASHBOARD_PAGES } from "@/config/url-config/promotion-pages.config";
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
import { PROMOTION_FAQ } from "./promotion-common-faq.config";

export const PROMOTION_COMMON_CONFIG = {
  hero: {
    basic: {
      title: {
        accentText: "",
        text: "Нишевое продвижение",
        accentOrder: 0,
      },
      description:
        "Максимально раскройте потенциал вашего бизнеса с помощью продвижения в интернете. Мы используем передовые маркетинговые стратегии для увеличения вашей онлайн-видимости, привлечения целевой аудитории и роста числа клиентов. Доверьтесь профессионалам и наблюдайте, как ваше продвижение приводит к новым высотам бизнеса.",
      image: "promotion-schools-hero",
    } satisfies THeroBasic,
    infoService: [
      "Разрабатываем уникальные стратегии продвижения, ориентированные на вашу специфическую нишу",
      "Помогаем вам стать лидером мнений в вашей нише через создание и продвижение экспертного контента",
    ] satisfies THeroInfoService,
  } satisfies THero,
  products: {
    filling: PROMOTION_DASHBOARD_PAGES.PROMOTION satisfies IDashboardItem,
  } satisfies TServiceProducts,
	whyUsChecklict: true,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: PROMOTION_FAQ satisfies TFaq[],
} satisfies TServiceScreen;
