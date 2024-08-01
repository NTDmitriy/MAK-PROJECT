import {
	IconAboutNav,
	IconArticlesNav,
	IconPartnersNav,
	IconUsefulNav,
	IconVacanciesNav,
} from "@/components/ui/icons";
import { IDashboardItem } from "./all-pages.config";

class USEFUL_DASHBOARD {
  ABOUT = {
    name: "О нас",
    url: "/about",
    icon: IconAboutNav,
  } satisfies IDashboardItem;

  ARTICLES = {
    name: "Статьи",
    url: "/articles",
    icon: IconArticlesNav,
  } satisfies IDashboardItem;

  VACANCIES = {
    name: "Вакансии",
    url: "/vacancies",
    icon: IconVacanciesNav,
  } satisfies IDashboardItem;

  PARTNERS = {
    name: "Партнерам",
    url: "/for-partners",
    icon: IconPartnersNav,
  } satisfies IDashboardItem;

  USEFUL = {
    icon: IconUsefulNav,
    name: "Полезное",
    url: "/useful",
    childrens: [this.ABOUT, this.ARTICLES, this.VACANCIES, this.PARTNERS],
  } satisfies IDashboardItem;
}

export const USEFUL_DASHBOARD_PAGES = new USEFUL_DASHBOARD();
