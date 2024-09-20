import { IDashboardItem } from "@/config/url-config/all-pages.config";
import type {
    TCase,
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
    TTariffs,
    TVacancies,
    TWhyUs,
    TWorkStages,
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
  projects?: TCase[];
  reviwes?: TReviwe[];
  faq?: TFaq[];
  allSiteTypes?: TServiceProducts;
  detialServices?: TDetialServices;
  includeService?: TIncludedInService;
  suitableFor?: TSuitableFor;
  technologyStack?: boolean;
  projectTeam?: TProjectTeam[];
  tariffs?: TTariffs;
};

export type TAllServicesScreen = {
  url: string;
  hero: THero;
  detialServicesAdvertusement?: TServiceProducts;
  detialServicesPromotion?: TServiceProducts;
  detialServicesWebdev?: boolean;
  detialServicesSeo?: TServiceProducts;
};

export type THomeScreen = {
  services: IDashboardItem[];
  projects: TCase[];
  reviwes: TReviwe[];
  faq: TFaq[];
};

export type TUsefulScreen = {
  url: string;
  hero: THero;
  aboutUs?: boolean;
  ourStatistic?: boolean;
  ourClients?: boolean;
  reviwes?: TReviwe[];
  reviwesList?: TReviwe[];
  ourTeam?: boolean;
  blog?: boolean;
  blogPrev?: boolean;
  projects?: TCase[];
  vacancies?: TVacancies;
  aboutPrev?: boolean;
  affiliatePrev?: boolean;
  vacanciesPrev?: boolean;
  partnerBenefits?: TWhyUs;
  joinProgram?: boolean;
  howAffiliateWork?: THowWorks;
  affiliateAvantages?: boolean;
};
