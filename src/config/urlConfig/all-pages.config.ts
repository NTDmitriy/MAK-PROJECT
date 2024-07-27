import { PROMOTION_DASHBOARD_PAGES } from "./promotion-pages.config";

class DASHBOARD {
  HOME = {
    name: "Главная",
    url: "/",
  };
  CASES = {
    name: "Кейсы",
    url: "/cases",
  };

  SERVICES = {
    name: "Услуги",
    url: "/services",
    childrens: [PROMOTION_DASHBOARD_PAGES.PROMOTION],
  };

  REVIEWS = {
    name: "Отзывы",
    url: "/reviews",
  };

  USEFUL = {
    name: "Полезное",
    url: "/useful",
  };
  CONTACTS = {
    name: "Контакты",
    url: "/contacts",
  };
}

export const DASHBOARD_PAGES = new DASHBOARD();
