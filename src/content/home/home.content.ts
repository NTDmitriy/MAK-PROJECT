import { DASHBOARD_PAGES, IDashboardItem } from "@/dashboard/app.dashboard";
import { TCase, TFaq, TReviwe } from "@/typing/products.type";
import { THomeScreen } from "@/typing/screens.type";
import { ALL_CASES_CONTENT } from "../all-cases/all-cases.content";
import { ALL_REVIWES } from "../all-reviwes/all-reviwes.content";
import { HOME_FAQ } from "./home-faq.content";

 
export const HOME_CONTENT = {
  services: DASHBOARD_PAGES.toArray() satisfies IDashboardItem[],
  projects: ALL_CASES_CONTENT.toArray() satisfies TCase[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: HOME_FAQ satisfies TFaq[],
} satisfies THomeScreen;
