import { ADVERTISEMENT_DASHBOARD_PAGES } from "./advertisement.dashboard";
import { IDashboardItem } from "./app.dashboard";
import { PROMOTION_DASHBOARD_PAGES } from "./promotion.dashboard";
import { SEO_DASHBOARD_PAGES } from "./seo.dashboard";
import { WEBDEV_DASHBOARD_PAGES } from "./webdev.dashboard";

class SERVICES_DASHBOARD {
  ADVERTISEMENT = {
    image: "recommendation-advertisement.webp",
    ...ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT,
  } satisfies IDashboardItem;

  PROMOTION = {
    image: "recommendation-promotion.webp",
    ...PROMOTION_DASHBOARD_PAGES.PROMOTION,
  } satisfies IDashboardItem;

  WEBDEV = {
    image: "recommendation-webdev.webp",
    ...WEBDEV_DASHBOARD_PAGES.WEBDEV,
  } satisfies IDashboardItem;

  SEO = {
    image: "recommendation-seo.webp",
    ...SEO_DASHBOARD_PAGES.SEO,
  } satisfies IDashboardItem;

  SERVICES = {
    icon: "IconServicesNav",
    name: "Услуги",
    url: "/services",
    childrens: [this.ADVERTISEMENT, this.PROMOTION, this.WEBDEV, this.SEO],
  } satisfies IDashboardItem;
  
}

export const SERVICES_DASHBOARD_PAGES = new SERVICES_DASHBOARD();
