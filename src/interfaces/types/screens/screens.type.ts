import { IDashboardItem } from "@/config/url-config/all-pages.config";
import {
	TCases,
	TDetialServices,
	TFaq,
	THero,
	TReviwe,
} from "../block/products.type";

export type TServiceScreen = {
  hero: THero;
  products: IDashboardItem;
  projects: TCases[];
  reviwes: TReviwe[];
  faq: TFaq[];
};

export type TProductScreen = {
  hero: THero;
  detialServices: TDetialServices;
  projects: TCases[];
  reviwes: TReviwe[];
};

export type THomeScreen = {
  services: IDashboardItem[];
	projects: TCases[];
	reviwes: TReviwe[];
	faq: TFaq[];
};
