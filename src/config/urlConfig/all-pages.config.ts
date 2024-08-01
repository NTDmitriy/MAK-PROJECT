import {
	IconCasesNav,
	IconContactsNav,
	IconHomeNav,
	IconReviwesNav,
} from "@/components/ui/icons";
import { FC } from "react";
import { SERVICES_DASHBOARD_PAGES } from "./servises-pages.config";
import { USEFUL_DASHBOARD_PAGES } from "./useful-pages.config";

export interface IDashboardItem {
  icon?: FC;
  name: string;
  url: string;
  image?: string;
  description?: string;
  childrens?: IDashboardItem[];
}

class DASHBOARD {
  HOME = {
    icon: IconHomeNav,
    name: "Главная",
    url: "/",
  } satisfies IDashboardItem;

  CASES = {
    icon: IconCasesNav,
    name: "Кейсы",
    url: "/cases",
  } satisfies IDashboardItem;

  SERVICES = SERVICES_DASHBOARD_PAGES.SERVICES;

  REVIEWS = {
    icon: IconReviwesNav,
    name: "Отзывы",
    url: "/reviews",
  } satisfies IDashboardItem;

  USEFUL = USEFUL_DASHBOARD_PAGES.USEFUL satisfies IDashboardItem;

  CONTACTS = {
    icon: IconContactsNav,
    name: "Контакты",
    url: "/contacts",
  } satisfies IDashboardItem;

  toArray(): IDashboardItem[] {
    return Object.values(this);
  }
}

export const DASHBOARD_PAGES = new DASHBOARD();
