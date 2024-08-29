import { IDashboardItem } from "@/config/url-config/all-pages.config";
import {
	TCases,
	TDetialServices,
	TFaq,
	THero,
	TReviwe,
	TServiceProducts,
	TServiceWebdevProducts,
	TSupplementaryDescr,
} from "../block/products.type";

export type TServiceScreen = {
  hero: THero;
  supplementaryDescr?: TSupplementaryDescr;
  products?: TServiceProducts;
  productsWebdev?: TServiceWebdevProducts[];
	howWorksSites?: boolean;
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
