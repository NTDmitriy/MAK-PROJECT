import {
	IconAdvertisementNav,
	IconForceNav,
	IconSeoNav,
	IconServicesNav,
	IconWebDevNav,
} from "@/components/ui/icons";
import { IDashboardItem } from "./all-pages.config";
import { PROMOTION_DASHBOARD_PAGES } from "./promotion-pages.config";

class SERVICES_DASHBOARD {
  ADVERTISEMENT = {
    icon: IconAdvertisementNav,
    name: "Реклама",
    url: "/reklama",
    childrens: [
      {
        url: "/site",
        name: "Создание сайтов",
        image: "dima",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "13rand",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "vlad",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
    ],
  } satisfies IDashboardItem;
  FORCE = {
    icon: IconForceNav,
    ...PROMOTION_DASHBOARD_PAGES.PROMOTION,
  } satisfies IDashboardItem;
  WEBDEV = {
    name: "Создание сайтов",
    url: "/sozdanie-saytov",
    icon: IconWebDevNav,
    childrens: [
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "hero-info",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
    ],
  } satisfies IDashboardItem;
  SEO = {
    name: "Трафик и SEO",
    url: "/trafic-seo",
    icon: IconSeoNav,
    childrens: [
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "hero-info",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "hero-info",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "hero-info",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "hero-info",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "hero-info",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "hero-info",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
    ],
  } satisfies IDashboardItem;
  SERVICES = {
    icon: IconServicesNav,
    name: "Услуги",
    url: "/services",
    childrens: [this.ADVERTISEMENT, this.FORCE, this.WEBDEV, this.SEO],
  } satisfies IDashboardItem;
}

export const SERVICES_DASHBOARD_PAGES = new SERVICES_DASHBOARD();
