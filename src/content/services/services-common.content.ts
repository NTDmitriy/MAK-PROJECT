import { DASHBOARD_PAGES } from "@/dashboard/app.dashboard";
import {
  THero,
  THeroBasic,
  THeroInfo,
  TServiceProducts,
} from "@/typing/products.type";
import { TAllServicesScreen } from "@/typing/screens.type";
import { ADVERTISEMENT_PRODUCTS } from "./advertisement/advertisement-common/advertisement-products";
import { PROMOTION_PRODUCTS } from "./promotion/promotion-common/promotion-products";
import { SEO_PRODUCTS } from "./seo/seo-common/seo-products";

export const SERVICES_COMMON_CONTENT = {
  url: DASHBOARD_PAGES.SERVICES.url,
  hero: {
    basic: {
      title: {
        accentBefore: "Полный спектр",
        accent: "маркетинговых услуг",
        accentAfter: "для вашего бизнеса",
      },
      description:
        "Мы предлагаем полный комплекс маркетинговых услуг для успешного продвижения вашего бизнеса. От разработки стратегий до digital рекламы и SEO-оптимизации — Make All Perfect создаст индивидуальные решения под ваши задачи. Доверьтесь профессионалам для достижения лучших результатов и роста вашего бренда.",
      image: "services-common-hero",
    } satisfies THeroBasic,
    infoService: [
      "Интегрируем рекламу с другими маркетинговыми каналами для создания единой стратегии",
      "Подбираем маркетинговые инструменты для максимальной эффективности и роста бизнеса",
    ] satisfies THeroInfo,
  } satisfies THero,
  detialServicesAdvertusement:
    ADVERTISEMENT_PRODUCTS satisfies TServiceProducts,
  detialServicesPromotion: PROMOTION_PRODUCTS satisfies TServiceProducts,
  detialServicesWebdev: true,
  detialServicesSeo: SEO_PRODUCTS satisfies TServiceProducts,
} satisfies TAllServicesScreen;
