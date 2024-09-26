
import { ALL_BLOG_CONTENT } from "@/content/all-blog/all-blog.content";
import { IDashboardItem } from "./app.dashboard";

class USEFUL_DASHBOARD {
  private root = "/useful";

  ABOUT = {
    name: "О нас",
    url: `${this.root}/about`,
    icon: "IconAboutNav",
  } satisfies IDashboardItem;

  BLOG = {
    name: "Блог",
    url: `${this.root}/blog`,
    icon: "IconArticlesNav",
    childrens: ALL_BLOG_CONTENT.toArray(),
  } satisfies IDashboardItem;

  VACANCIES = {
    name: "Вакансии",
    url: `${this.root}/vacancies`,
    icon: "IconVacanciesNav",
  } satisfies IDashboardItem;

  PARTNERS = {
    name: "Партнерам",
    url: `${this.root}/affiliate-program`,
    icon: "IconPartnersNav",
  } satisfies IDashboardItem;

  USEFUL = {
    icon: "IconUsefulNav",
    name: "Полезное",
    url: this.root,
    childrens: [this.ABOUT, this.BLOG, this.VACANCIES, this.PARTNERS],
  } satisfies IDashboardItem;
}

export const USEFUL_DASHBOARD_PAGES = new USEFUL_DASHBOARD();
