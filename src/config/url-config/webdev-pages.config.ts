import { IDashboardItem } from "./all-pages.config";

class WEBDEV_DASHBOARD {
  private root = "/services";

  WEBDEV_REACT_NEXT = {
    name: "Сайт на JavaScript",
    smallName: "Сайт на JavaScript",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-na-javascript`,
    image: "IconJavaScript",
    icon: "home-hero-295x191",
    description:
      "Создание мощных и адаптивных сайтов с использованием современных фреймворков, таких как React, Next.js, Vue.js и Angular.",
  } satisfies IDashboardItem;

  WEBDEV_WORDPRESS = {
    name: "Создание сайтов на Wordpress",
    smallName: "Wordpress",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-wordpress`,
    image: "IconWordPress",
    icon: "home-hero-295x191",
    description:
      "Разработка гибких и функциональных сайтов на самой популярной в мире CMS, идеально подходящих для блогов, корпоративных сайтов и интернет-магазинов.",
  } satisfies IDashboardItem;

  WEBDEV_TILDA = {
    name: "Создание сайтов на Tilda",
    smallName: "Tilda",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-tilda`,
    image: "IconTilda",
    icon: "home-hero-295x191",
    description:
      "Быстрое создание стильных и удобных сайтов без необходимости программирования. Идеально для лендингов и сайтов-визиток.",
  } satisfies IDashboardItem;

  WEBDEV_MODX = {
    name: "Создание сайтов на ModX",
    smallName: "ModX",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-modx`,
    image: "IconModx",
    icon: "home-hero-295x191",
    description:
      "Разработка высокопроизводительных и безопасных сайтов с уникальным функционалом на платформе ModX.",
  } satisfies IDashboardItem;

  WEBDEV_REDESIGN = {
    name: "Редизайн и доработка",
    smallName: "Редизайн и доработка",
    url: `${this.root}/redizayn-i-dorabotka-saytov`,
    image: "iconRedesign",
    icon: "home-hero-295x191",
    description:
      "Обновление дизайна и функционала существующих сайтов, улучшение их производительности и соответствие современным требованиям.",
  } satisfies IDashboardItem;

  WEBDEV = {
    icon: "IconWebDevNav",
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
