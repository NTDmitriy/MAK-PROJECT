import { USEFUL_DASHBOARD_PAGES } from "@/config/url-config/useful-pages.config";
import {
  THero,
  THeroBasic,
  THeroInfo
} from "@/interfaces/types/block/products.type";
import { TUsefulScreen } from "@/interfaces/types/screens/screens.type";

export const BLOG_CONFIG = {
  url: USEFUL_DASHBOARD_PAGES.BLOG.url,
  hero: {
    basic: {
      title: {
        accentAfter: "Блог: Полезные статьи и рекомендации",
      },
      description:
        "Читайте последние новости, советы и статьи о маркетинге, рекламе и digital-технологиях. Полезная информация от экспертов Make All Perfect.",
      image: "useful-blog-hero",
    } satisfies THeroBasic,
    infoUseful: [
      "Инсайты и актуальные тренды в сфере маркетинга и рекламы",
      "Практические советы от экспертов Make All Perfect для успешного продвижения",
    ] satisfies THeroInfo,
  } satisfies THero,
  blog: true,
} satisfies TUsefulScreen;
