import { IDashboardItem } from "./all-pages.config";

class WEBDEV_DASHBOARD {
  private root = "/services";

  WEBDEV_REACT_NEXT = {
    name: "Создание сайтов на React & Next",
    smallName: "React & Next",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-react-next`,
    image: "hero-info",
    icon: "hero-info",
    description:
      "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  } satisfies IDashboardItem;

  WEBDEV_WORDPRESS = {
    name: "Создание сайтов на Wordpress",
    smallName: "Wordpress",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-wordpress`,
    image: "hero-info",
    icon: "hero-info",
    description:
      "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  } satisfies IDashboardItem;

  WEBDEV_TILDA = {
    name: "Создание сайтов на Tilda",
    smallName: "Tilda",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-tilda`,
    image: "hero-info",
    icon: "hero-info",
    description:
      "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  } satisfies IDashboardItem;

  WEBDEV_MODX = {
    name: "Создание сайтов на ModX",
    smallName: "ModX",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-modx`,
    image: "hero-info",
    icon: "hero-info",
    description:
      "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  } satisfies IDashboardItem;

  WEBDEV_REDESIGN = {
    name: "Редизайн и доработка",
    smallName: "Редизайн и доработка",
    url: `${this.root}/redizayn-i-dorabotka-saytov`,
    image: "hero-info",
    icon: "hero-info",
    description:
      "Создание сайтов — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России.",
  } satisfies IDashboardItem;

  WEBDEV = {
    name: "Создание сайтов",
    url: `${this.root}/sozdanie-i-razrabotka-saytov`,
    childrens: [
      this.WEBDEV_REACT_NEXT,
      this.WEBDEV_WORDPRESS,
      this.WEBDEV_TILDA,
      this.WEBDEV_MODX,
      this.WEBDEV_REDESIGN,
    ],
  } satisfies IDashboardItem;
}

export const WEBDEV_DASHBOARD_PAGES = new WEBDEV_DASHBOARD();
