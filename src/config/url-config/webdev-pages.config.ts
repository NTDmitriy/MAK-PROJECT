import { IDashboardItem } from "./all-pages.config";

class WEBDEV_DASHBOARD {
  private root = "/services";

  WEBDEV_REACT_NEXT = {
    name: "Сайт на JavaScript",
    smallName: "React & Next",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-react-next`,
    image: "/images/sites_creation/sites-js.webp",
    icon: "hero-info",
    description:
      "Создание мощных и адаптивных сайтов с использованием современных фреймворков, таких как React, Next.js, Vue.js и Angular.",
  } satisfies IDashboardItem;

  WEBDEV_WORDPRESS = {
    name: "Создание сайтов на Wordpress",
    smallName: "Wordpress",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-wordpress`,
    image: "/images/sites_creation/sites-wordpress.webp",
    icon: "hero-info",
    description:
      "Разработка гибких и функциональных сайтов на самой популярной в мире CMS, идеально подходящих для блогов, корпоративных сайтов и интернет-магазинов.",
  } satisfies IDashboardItem;

  WEBDEV_TILDA = {
    name: "Создание сайтов на Tilda",
    smallName: "Tilda",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-tilda`,
    image: "/images/sites_creation/sites-tilda.webp",
    icon: "hero-info",
    description:
      "Быстрое создание стильных и удобных сайтов без необходимости программирования. Идеально для лендингов и сайтов-визиток.",
  } satisfies IDashboardItem;

  WEBDEV_MODX = {
    name: "Создание сайтов на ModX",
    smallName: "ModX",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-modx`,
    image: "/images/sites_creation/sites-modx.webp",
    icon: "hero-info",
    description:
      "Разработка высокопроизводительных и безопасных сайтов с уникальным функционалом на платформе ModX.",
  } satisfies IDashboardItem;

  WEBDEV_REDESIGN = {
    name: "Редизайн и доработка",
    smallName: "Редизайн и доработка",
    url: `${this.root}/redizayn-i-dorabotka-saytov`,
    image: "/images/sites_creation/sites-redisgn.webp",
    icon: "hero-info",
    description:
      "Обновление дизайна и функционала существующих сайтов, улучшение их производительности и соответствие современным требованиям.",
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
