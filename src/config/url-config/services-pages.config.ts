import { ADVERTISEMENT_DASHBOARD_PAGES } from "./advertisement-pages.config";
import { IDashboardItem } from "./all-pages.config";
import { PROMOTION_DASHBOARD_PAGES } from "./promotion-pages.config";
import { SEO_DASHBOARD_PAGES } from "./seo-pages.config";
import { WEBDEV_DASHBOARD_PAGES } from "./webdev-pages.config";

class SERVICES_DASHBOARD {
  ADVERTISEMENT = {
    image: "promotion-construction-company-700x300.webp",
    ...ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT,
  } satisfies IDashboardItem;

  PROMOTION = {
    image: "promotion-construction-company-700x300.webp",
    ...PROMOTION_DASHBOARD_PAGES.PROMOTION,
  } satisfies IDashboardItem;

  WEBDEV = {
    image: "promotion-construction-company-700x300.webp",
    ...WEBDEV_DASHBOARD_PAGES.WEBDEV,
  } satisfies IDashboardItem;

  SEO = {
    image: "promotion-construction-company-700x300.webp",
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