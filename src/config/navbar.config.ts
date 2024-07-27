import {
	IconAboutNav,
	IconAdvertisementNav,
	IconArticlesNav,
	IconForceNav,
	IconPartnersNav,
	IconVacanciesNav
} from "@/components/ui/icons";
import { PROMOTION_DASHBOARD_PAGES } from "./urlConfig/promotion-pages.config";




export const SERVISES_NAV_BAR_CONFIG = [
  {
    icon: IconAdvertisementNav,
    name: "Реклама",
    url: "reklama",
    childrens: [],
  },
  {
		icon: IconForceNav,
    ...PROMOTION_DASHBOARD_PAGES.PROMOTION,
  },
  // {
  //   name: "Создание сайтов",
  //   url: "sozdanie-saytov",
  //   icon: IconWebDevNav,
  //   childrens: [
  //     {
  //       url: "/site",
  //       name: "Создание сайтов",
  //       image: "product-icon",
  //       description:
  //         "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //     {
  //       url: "/site",
  //       name: "Создание сайтов",
  //       image: "product-icon",
  //       description:
  //         "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //     {
  //       url: "/site",
  //       name: "Создание сайтов",
  //       image: "product-icon",
  //       description:
  //         "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //     {
  //       url: "/site",
  //       name: "Создание сайтов",
  //       image: "product-icon",
  //       description:
  //         "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //     {
  //       url: "/site",
  //       name: "Создание сайтов",
  //       image: "product-icon",
  //       description:
  //         "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //   ],
  // },
  // {
  //   name: "Трафик и SEO",
  //   url: "trafic-seo",
  //   icon: IconSeoNav,
  //   childrens: [
  //     {
  //       url: "/site",
  //       name: "Трафик и SEO",
  //       image: "product-icon",
  //       description:
  //         "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //     {
  //       url: "/site",
  //       name: "Трафик и SEO",
  //       image: "product-icon",
  //       description:
  //         "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //     {
  //       url: "/site",
  //       name: "Трафик и SEO",
  //       image: "product-icon",
  //       description:
  //         "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //     {
  //       url: "/site",
  //       name: "Трафик и SEO",
  //       image: "product-icon",
  //       description:
  //         "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //     {
  //       url: "/site",
  //       name: "Трафик и SEO",
  //       image: "product-icon",
  //       description:
  //         "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //     {
  //       url: "/site",
  //       name: "Трафик и SEO",
  //       image: "product-icon",
  //       description:
  //         "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  //     },
  //   ],
  // },
];

export const USEFUL_NAV_BAR_CONFIG = [
  { name: "О нас", url: "/about", icon: IconAboutNav },
  { name: "Статьи", url: "/articles", icon: IconArticlesNav },
  { name: "Вакансии", url: "/vacancies", icon: IconVacanciesNav },
  { name: "Партнерам", url: "/for-partners", icon: IconPartnersNav },
];
