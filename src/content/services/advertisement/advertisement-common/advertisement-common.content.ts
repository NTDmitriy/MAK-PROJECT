import { ALL_CASES_CONTENT } from "@/content/all-cases/all-cases.content";
import { ALL_REVIWES } from "@/content/all-reviwes/all-reviwes.content";
import { ADVERTISEMENT_DASHBOARD_PAGES } from "@/dashboard/advertisement.dashboard";
import {
  TCase,
  TFaq,
  THero,
  THeroBasic,
  THeroInfo,
  TReviwe,
  TServiceProducts,
} from "@/typing/products.type";
import { TScreen } from "@/typing/screens.type";
import { ADVERTISEMENT_FAQ } from "./advertisement-common-faq";
import { ADVERTISEMENT_PRODUCTS } from "./advertisement-products";

export const ADVERTISEMENT_COMMON_CONTENT = {
  url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT.url,
  hero: {
    basic: {
      title: {
        accentBefore: "Закажите",
        accent: "профессиональную настройку ",
        accentAfter: "рекламы в интернете",
      },
      description:
        "Ищете, где заказать рекламу в интернете? Наше маркетинговое агентство предоставляет комплексные услуги по настройке и запуску рекламных кампаний в Яндекс Директ, ВКонтакте, Google Ads и Telegram Ads. Мы поможем вам привлечь целевую аудиторию, увеличить конверсию и добиться максимального результата от рекламы. Доверьтесь профессионалам!",
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
  projects: ALL_CASES_CONTENT.toArray() satisfies TCase[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: ADVERTISEMENT_FAQ satisfies TFaq[],
} satisfies TScreen;
