import { ALL_CASES_CONTENT } from "@/config/content-config/all-cases/all-cases.config";
import { ALL_REVIWES } from "@/config/content-config/all-reviwes/all-reviwes.config";
import { ADVERTISEMENT_DASHBOARD_PAGES } from "@/config/url-config/advertisement-pages.config";
import {
  TCases,
  TFaq,
  THero,
  THeroBasic,
  THeroInfo,
  TReviwe,
  TServiceProducts
} from "@/interfaces/types/block/products.type";
import { TScreen } from "@/interfaces/types/screens/screens.type";
import { ADVERTISEMENT_FAQ } from "./advertisement-common-faq.config";
import { ADVERTISEMENT_PRODUCTS } from "./advertisement-products.config";

export const ADVERTISEMENT_COMMON_CONFIG = {
  url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT.url,
  hero: {
    basic: {
      title: {
        accentBefore: "Закажите",
        accent: "профессиональную настройку ",
        accentAfter: "рекламы в интернете",
      },
      description: 'Ищете, где заказать рекламу в интернете? Наше рекламное агентство предоставляет комплексные услуги по настройке и запуску рекламных кампаний в Яндекс Директ, ВКонтакте, Google Ads и Telegram Ads. Мы поможем вам привлечь целевую аудиторию, увеличить конверсию и добиться максимального результата от рекламы. Доверьтесь профессионалам!',
      image: "advertisemets-common-hero",
    } satisfies THeroBasic,
    infoService: [
      "Применяем современные инструменты для создания эффективной рекламы в Яндекс Директ, ВКонтакте, Google Ads и Telegram Ads.",
      "Интегрируем рекламу с другими маркетинговыми каналами для создания единой и мощной маркетинговой стратегии",
    ] satisfies THeroInfo,
  } satisfies THero,
  products: {
    formTitle: "НУЖНО НЕСКОЛЬКО РЕКЛАМНЫХ КАНАЛОВ ОДНОВРЕМЕННО?",
    formDescr:
      "Оставьте свои контактные данные, и наш менеджер свяжется с вами, чтобы предложить наиболее подходящие каналы трафика для вашего бизнеса. Мы предлагаем комплексный подход с использованием нескольких каналов трафика для максимальной эффективности и результата. Наши специалисты обладают богатым опытом работы в различных отраслях и смогут подобрать оптимальные стратегии для вас.",
    ...ADVERTISEMENT_PRODUCTS,
  } satisfies TServiceProducts,
  whyUsChecklict: true,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: ADVERTISEMENT_FAQ satisfies TFaq[],
} satisfies TScreen;
