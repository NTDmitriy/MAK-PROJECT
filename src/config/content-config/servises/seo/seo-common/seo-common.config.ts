import { ALL_CASES_CONTENT } from "@/config/content-config/cases/all-cases.config";
import { allReviwes } from "@/config/content-config/reviwes/reviwes.config";
import { IDashboardItem } from "@/config/url-config/all-pages.config";
import { SEO_DASHBOARD_PAGES } from "@/config/url-config/seo-pages.config";
import type {
	TCases,
	TFaq,
	THero,
	THeroBasic,
	THeroInfoService,
	TReviwe,
	TSupplementaryDescr,
} from "@/interfaces/types/block/products.type";
import { TServiceScreen } from "@/interfaces/types/screens/screens.type";
import { SEO_FAQ } from "./seo-common-faq.config";

export const SEO_COMMON_CONFIG = {
  hero: {
    basic: {
      title: {
        accentText: "эффективные решения для вашего бизнеса",
        text: "Трафик и SEO-продвижение:",
        accentOrder: 1,
      },
      description:
        "Ищете, где заказать рекламу в интернете? Наше рекламное агентство предоставляет комплексные услуги по настройке и запуску рекламных кампаний в Яндекс Директ, ВКонтакте, Google Ads, Telegram Ads и Meta: Facebook & Instagram. Мы поможем вам привлечь целевую аудиторию, увеличить конверсию и добиться максимального результата от рекламы. Доверьтесь профессионалам!",
      image: "promotion-schools-hero",
    } satisfies THeroBasic,
    info: [
      "Привлечение целевой аудитории",
      "Увеличение конверсии и продаж ",
      "Повышение видимости в поисковых системах",
    ] satisfies THeroInfoService,
  } satisfies THero,
  supplementaryDescr: {
    title: "Трафик и SEO-продвижение: основы результата в цифровом мире",
    descr: "В условиях быстро развивающегося цифрового мира трафик и SEO-продвижение играют решающую роль в успехе бизнеса. Правильное использование этих инструментов помогает привлекать новых клиентов, удерживать существующих и существенно увеличивать прибыль. Комплексный подход к цифровому маркетингу включает использование различных стратегий и технологий, которые позволяют максимально эффективно продвигать ваши товары и услуги.",
    image: "seo-common-supplementary.webp",
  } satisfies TSupplementaryDescr,
  products: SEO_DASHBOARD_PAGES.SEO satisfies IDashboardItem,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: allReviwes satisfies TReviwe[],
  faq: SEO_FAQ satisfies TFaq[],
} satisfies TServiceScreen;
