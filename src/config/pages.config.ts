import {
	IconAboutNav,
	IconArticlesNav,
	IconForceNav,
	IconPartnersNav,
	IconSeoNav,
	IconVacanciesNav,
	IconWebDevNav,
} from "@/components/ui/icons";
import { IconAdvertisementNav } from "@/components/ui/icons/serviseIcons/IconAdvertisementNav";

export class DASHBOARD {
  HOME = "/";
  CASES = "/cases";
  SERVICES = "/services";
  REVIEWS = "/reviews";
  // PARTNERS = "/partners";
  USEFUL = "/useful";
  CONTACTS = "/contacts";
}

export const DASHBOARD_PAGES = new DASHBOARD();

export const SERVISES_DASHBOARD = [
  {
    name: "Реклама",
    url: "reklama",
    icon: IconAdvertisementNav,
    childrens: [
      {
        url: "/site",
        name: "Яндекс Директ",
        image: "product-icon",
        description:
          "Яндекс Директ — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Яндекс Директ",
        image: "product-icon",
        description:
          "Яндекс Директ — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Яндекс Директ",
        image: "product-icon",
        description:
          "Яндекс Директ — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Яндекс Директ",
        image: "product-icon",
        description:
          "Яндекс Директ — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
    ],
  },
  {
    name: "Нишевое продвижение",
    url: "nishevoe-prodvigenie",
    icon: IconForceNav,
    childrens: [
      {
        url: "/site",
        name: "Нишовое продвижение",
        image: "product-icon",
        description:
          "Нишовое продвижение — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Нишовое продвижение",
        image: "product-icon",
        description:
          "Нишовое продвижение — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Нишовое продвижение",
        image: "product-icon",
        description:
          "Нишовое продвижение — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Нишовое продвижение",
        image: "product-icon",
        description:
          "Нишовое продвижение — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Нишовое продвижение",
        image: "product-icon",
        description:
          "Нишовое продвижение — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Нишовое продвижение",
        image: "product-icon",
        description:
          "Нишовое продвижение — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Нишовое продвижение",
        image: "product-icon",
        description:
          "Нишовое продвижение — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Нишовое продвижение",
        image: "product-icon",
        description:
          "Нишовое продвижение — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Нишовое продвижение",
        image: "product-icon",
        description:
          "Нишовое продвижение — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
    ],
  },
  {
    name: "Создание сайтов",
    url: "sozdanie-saytov",
    icon: IconWebDevNav,
    childrens: [
      {
        url: "/site",
        name: "Создание сайтов",
        image: "product-icon",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "product-icon",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "product-icon",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "product-icon",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Создание сайтов",
        image: "product-icon",
        description:
          "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
    ],
  },
  {
    name: "Трафик и SEO",
    url: "trafic-seo",
    icon: IconSeoNav,
    childrens: [
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "product-icon",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "product-icon",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "product-icon",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "product-icon",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "product-icon",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
      {
        url: "/site",
        name: "Трафик и SEO",
        image: "product-icon",
        description:
          "Трафик и SEO — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
      },
    ],
  },
];

export const USEFUL_DASHBOARD = [
  { name: "О нас", url: "/about", icon: IconAboutNav },
  { name: "Статьи", url: "/articles", icon: IconArticlesNav },
  { name: "Вакансии", url: "/vacancies", icon: IconVacanciesNav },
  { name: "Партнерам", url: "/for-partners", icon: IconPartnersNav },
];
