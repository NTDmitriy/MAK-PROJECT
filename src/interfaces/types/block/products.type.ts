import { IDashboardItem } from "@/config/url-config/all-pages.config";

export type THeroBasic = {
  title: {
    text: string;
    accentText: string;
    accentOrder: number;
  };
  description: string;
  image: string;
};

export type THeroInfoProduct = {
  title: string;
  description: string;
  image: string;
};

export type THeroInfoService = string[];

export type THeroInfoWebdev = string[];

export type THeroInfoAdvertisement = {
  title: string;
  description: string;
};

export type THero = {
  basic: THeroBasic;
  infoProduct?: THeroInfoProduct;
  infoService?: THeroInfoService;
  infoAdvertisement?: THeroInfoAdvertisement[];
  infoWebdev?: THeroInfoWebdev;
};

export type TSupplementaryDescr = {
  title: string;
  descr: string;
  image: string;
};

export type TCases = {
  id: number | string;
  name: string;
  url: string;
  description: string;
  image: string;
  instruments: string[];
};

export type TReviwe = {
  id: number | string;
  name: string;
  position: string;
  avatar: string;
  rating: number;
  text: string;
  caseUrl?: string | null;
};

export type TFaq = {
  title: string;
  descr: string;
  image?: string;
};

export type TAccordionItem = {
  title: string;
  descr: string;
};

export type TDetialService = {
  id: number | string;
  title: string;
  description: string;
  image: string;
};

export type TDetialServices = {
  title: string;
  services: TDetialService[];
};

export type TIncludedInService = {
  items: TIncludedInServiceItem[];
  options: TTitleOptions;
};

export type TIncludedInServiceItem = {
  title: string;
  description: string;
};

export type TServiceProducts = {
  filling: IDashboardItem;
  options?: TTitleOptions;
};

export type TTitleOptions = {
  title: string;
  titleDescr?: string | null;
};

export type TServiceWebdevProducts = {
  name: string;
  description: string;
  deadline: string | null;
  image: string;
  buttonText: string;
};

export type THowWorks = {
  items: THowWorksItem[];
  options: TTitleOptions;
};

export type THowWorksItem = {
  title: string;
  descr: string;
};

export type TWhyUs = {
  items: TWhyUsItem[];
  options: TTitleOptions;
};

export type TWhyUsItem = {
  title: string;
  descrBefore: string;
  descrAccent: string;
  descrAfter: string;
};
