import { IDashboardItem } from "@/config/url-config/all-pages.config";
import type {
  TCases,
  TDetialServices,
  TFaq,
  THero,
  THowWorks,
  TIncludedInService,
  TProjectTeam,
  TReviwe,
  TServiceProducts,
  TSuitableFor,
  TSupplementaryDescr,
  TWhyUs,
  TWorkStages
} from "../block/products.type";

export type TScreen = {
  url: string;
  hero: THero;
  supplementaryDescr?: TSupplementaryDescr;
  products?: TServiceProducts;
  siteServices?: boolean;
  howWorks?: THowWorks;
  workStages?: TWorkStages;
  whyUs?: TWhyUs;
  whyUsChecklict?: boolean;
  whyUsSites?: boolean;
  projects?: TCases[];
  reviwes?: TReviwe[];
  faq?: TFaq[];
  allSiteTypes?: TServiceProducts;
  detialServices?: TDetialServices;
  includeService?: TIncludedInService;
  suitableFor?: TSuitableFor;
  technologyStack?: TSuitableFor;
  projectTeam?: TProjectTeam[];
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
};
