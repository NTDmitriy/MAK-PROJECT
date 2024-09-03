import { IDashboardItem } from "@/config/url-config/all-pages.config";
import type {
  TAllSiteTypes,
  TCases,
  TDetialServices,
  TFaq,
  THero,
  THowWorks,
  TIncludedInService,
  TReviwe,
  TServiceProducts,
  TServiceWebdevProducts,
  TSuitableFor,
  TSupplementaryDescr,
  TWhyUs,
  TWorkStages,
} from "../block/products.type";

export type TScreen = {
  url: string;
  hero: THero;
  supplementaryDescr?: TSupplementaryDescr;
  products?: TServiceProducts;
  productsWebdev?: TServiceWebdevProducts[];
  siteServices?: boolean;
  howWorks?: THowWorks;
  workStages?: TWorkStages;
  whyUs?: TWhyUs;
  whyUsChecklict?: boolean;
  whyUsSites?: boolean;
  projects?: TCases[];
  reviwes?: TReviwe[];
  faq?: TFaq[];
  allSiteTypes?: TAllSiteTypes;
  detialServices?: TDetialServices;
  includeService?: TIncludedInService;
  suitableFor?: TSuitableFor;
  technologyStack?: TSuitableFor;
};

export type THomeScreen = {
  services: IDashboardItem[];
  projects: TCases[];
  reviwes: TReviwe[];
  faq: TFaq[];
};

export type TUsefulScreen = {
  // hero: THero;
  reviwes: TReviwe[];
}
