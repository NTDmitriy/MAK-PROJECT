import { DASHBOARD_PAGES, IDashboardItem } from "@/config/url-config/all-pages.config";
import { TCase, TFaq, TReviwe } from "@/interfaces/types/block/products.type";
import { THomeScreen } from "@/interfaces/types/screens/screens.type";
import { ALL_CASES_CONTENT } from "../all-cases/all-cases.config";
import { ALL_REVIWES } from "../all-reviwes/all-reviwes.config";
import { HOME_FAQ } from "./home-faq.config";

 
export const HOME_CONFIG = {
  services: DASHBOARD_PAGES.toArray() satisfies IDashboardItem[],
  projects: ALL_CASES_CONTENT.toArray() satisfies TCase[],
  reviwes: ALL_REVIWES satisfies TReviwe[],
  faq: HOME_FAQ satisfies TFaq[],
} satisfies THomeScreen;
