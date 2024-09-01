import { IDashboardItem } from "@/config/url-config/all-pages.config";
import {
  TCases,
  TDetialServices,
  TFaq,
  THero,
  THowWorks,
  TIncludedInService,
  TReviwe,
  TServiceProducts,
  TServiceWebdevProducts,
  TSupplementaryDescr,
  TWhyUs,
} from "../block/products.type";

export type TServiceScreen = {
  hero: THero;
  supplementaryDescr?: TSupplementaryDescr;
  products?: TServiceProducts;
  productsWebdev?: TServiceWebdevProducts[];
  siteServices?: boolean;
  howWorks?: THowWorks;
  howWorksSites?: boolean;
  whyUs?: TWhyUs;
  whyUsChecklict?: boolean;
  whyUsSites?: boolean;
  projects?: TCases[];
  reviwes?: TReviwe[];
  faq?: TFaq[];
};

export type TProductScreen = {
  hero: THero;
  supplementaryDescr?: TSupplementaryDescr;
  detialServices?: TDetialServices;
  includeService?: TIncludedInService;
  howWorks?: THowWorks;
  whyUs?: TWhyUs;
  projects: TCases[];
  reviwes: TReviwe[];
};

export type THomeScreen = {
  services: IDashboardItem[];
  projects: TCases[];
  reviwes: TReviwe[];
  faq: TFaq[];
};
