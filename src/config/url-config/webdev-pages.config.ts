import { IDashboardItem } from "./all-pages.config";

class WEBDEV_DASHBOARD {
  private root = "/services";

  WEBDEV_JS = {
    name: "Сайт на JavaScript",
    smallName: "Сайт на JavaScript",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-na-javascript`,
    image: "IconJavaScript",
    icon: "icon-nav-webdev-js",
    description:
      "Создание мощных и адаптивных сайтов с использованием современных фреймворков, таких как React, Next.js, Vue.js и Angular.",
  } satisfies IDashboardItem;

  WEBDEV_WORDPRESS = {
    name: "Создание сайтов на Wordpress",
    smallName: "Wordpress",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-wordpress`,
    image: "IconWordPress",
    icon: "icon-nav-webdev-wordpress",
    description:
      "Разработка гибких и функциональных сайтов на самых популярных CMS в мире, идеально подходящих для блогов, корпоративных сайтов и интернет-магазинов.",
  } satisfies IDashboardItem;

  WEBDEV_TILDA = {
    name: "Создание сайтов на Tilda",
    smallName: "Tilda",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-tilda`,
    image: "IconTilda",
    icon: "icon-nav-webdev-tilda",
    description:
      "Быстрое создание стильных и удобных сайтов без необходимости программирования. Идеально для лендингов и сайтов-визиток.",
  } satisfies IDashboardItem;

  WEBDEV_MODX = {
    name: "Создание сайтов на ModX",
    smallName: "ModX",
    url: `${this.root}/sozdanie-i-razrabotka-saytov-modx`,
    image: "IconModx",
    icon: "icon-nav-webdev-modx",
    description:
      "Разработка высокопроизводительных и безопасных сайтов с уникальным функционалом на платформе ModX.",
  } satisfies IDashboardItem;

  WEBDEV_REDESIGN = {
    name: "Редизайн и доработка",
    smallName: "Редизайн и доработка",
    url: `${this.root}/redizayn-i-dorabotka-saytov`,
    image: "IconRedesign",
    icon: "icon-nav-webdev-redesign",
    description:
      "Обновление дизайна и функционала существующих сайтов, улучшение их производительности и соответствие современным требованиям.",
  } satisfies IDashboardItem;

  WEBDEV = {
    url: `${this.root}/sozdanie-i-razrabotka-saytov`,
    icon: "IconWebDevNav",
    name: "Создание сайтов",
    description:
       "Мы создаём сайты на платформах JavaScript, WordPress, ModX и Tilda. В каждом проекте учитываем современные тренды UI/UX, предоставляем уникальный дизайн и адаптивную верстку. От лендингов до сложных порталов – наши решения работают на ваш бизнес. Также предлагаем редизайн и доработку существующих сайтов.",
    childrens: [
      this.WEBDEV_JS,
      this.WEBDEV_WORDPRESS,
      this.WEBDEV_TILDA,
      this.WEBDEV_MODX,
      this.WEBDEV_REDESIGN,
    ],
  } satisfies IDashboardItem;
}

export const WEBDEV_DASHBOARD_PAGES = new WEBDEV_DASHBOARD();
