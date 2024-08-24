import { ADVERTISEMENT_DASHBOARD_PAGES } from "./advertisement-pages.config";
import { IDashboardItem } from "./all-pages.config";
import { PROMOTION_DASHBOARD_PAGES } from "./promotion-pages.config";
import { SEO_DASHBOARD_PAGES } from "./seo-pages.config";
import { WEBDEV_DASHBOARD_PAGES } from "./webdev-pages.config";

class SERVICES_DASHBOARD {
  ADVERTISEMENT = {
    icon: "IconAdvertisementNav",
    ...ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT,
  } satisfies IDashboardItem;

  PROMOTION = {
    icon: "IconForceNav",
    ...PROMOTION_DASHBOARD_PAGES.PROMOTION,
  } satisfies IDashboardItem;

  WEBDEV = {
    icon: "IconWebDevNav",
    ...WEBDEV_DASHBOARD_PAGES.WEBDEV,
  } satisfies IDashboardItem;

  SEO = {
    icon: "IconSeoNav",
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
