import { IDashboardItem } from "./all-pages.config";

class CASES_DASHBOARD {
  private root = "/cases";
	
  WILDBERRIES_SHOP = {
    name: "Продвижение магазина женской одежды на Wildberries",
    url: `${this.root}/prodvizhenie-magazina-zhenskoy-odezhdy-na-wildberries`,
  } satisfies IDashboardItem;

  TAX_OPTIMIZATION = {
    name: "Оптимизация налогов для предпринимателей на УСН",
    url: `${this.root}/optimizaciya-nalogov-dlya-predprinimateley-na-usn`,
  } satisfies IDashboardItem;

  FURNITURE_STORE = {
    name: "Продвижение компании по продаже мебели в Москве и Московской области",
    url: `${this.root}/prodvizhenie-kompanii-po-prodazhe-mebeli-v-moskve-i-moskovskoy-oblasti`,
  } satisfies IDashboardItem;

  CONSTRUCTION_COMPANY = {
    name: "Продвижение строительной компании «Карельский дом»",
    url: `${this.root}/prodvizhenie-stroitelnoy-kompanii-karelskiy-dom`,
  } satisfies IDashboardItem;

  FRONTEND_DEVELOPMENT_UNIVERSITY = {
    name: "Онлайн-школа frontend-разработки",
    url: `${this.root}/frontend-development-university`,
  } satisfies IDashboardItem;

  STOMATOLOGY_CLINIC = {
    name: "Стоматологическая клиника в Санкт-Петербурге",
    url: `${this.root}/stomatologicheskaya-klinika-v-sankt-peterburge`,
  } satisfies IDashboardItem;

  CASES = {
    icon: "IconCasesNav",
    name: "Кейсы",
    url: this.root,
    childrens: [
      this.FRONTEND_DEVELOPMENT_UNIVERSITY,
      this.STOMATOLOGY_CLINIC,
      this.TAX_OPTIMIZATION,
      this.WILDBERRIES_SHOP,
      this.CONSTRUCTION_COMPANY,
      this.FURNITURE_STORE,
    ],
  } satisfies IDashboardItem;
}

export const CASES_DASHBOARD_PAGES = new CASES_DASHBOARD();
