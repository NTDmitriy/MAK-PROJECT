export type THeroBasic = {
  title: {
    accentBefore?: string;
    accent?: string;
    accentAfter?: string;
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
  blockTitle?: string;
  blockTitleDescr?: string;
};

export type TIncludedInServiceItem = {
  title: string;
  description: string;
};

export type TWorkStages = {
  items: TWorkStagesItem[];
  title: string;
};

export type TWorkStagesItem = {
  stage: string;
  descr: string[];
};

export type TServiceProducts = {
  blockTitle: string;
  blockTitleDescr?: string;
  formTitle?: string;
  formDescr?: string;
  items: TServiceProductsItem[];
};

export type TServiceProductsItem = {
  name: string;
  description?: string;
  descriptionSmall?: string;
  deadline?: string;
  image?: string;
  url?: string;
  buttonText?: string;
  priceFrom?: string | number;
};

export type TAllSiteTypes = {
  items: TServiceProductsItem[];
  formTitle: string;
  formDescr: string;
};

export type THowWorks = {
  items: THowWorksItem[];
  blockTitle?: string;
  blockTitleDescr?: string;
};

export type THowWorksItem = {
  title: string;
  descr: string;
};

export type TWhyUs = {
  items: TWhyUsItem[];
  blockTitle?: string;
  blockTitleDescr?: string;
};

export type TWhyUsItem = {
  title: string;
  descrBefore: string;
  descrAccent: string;
  descrAfter: string;
};

export type TSuitableFor = {
  items: TSuitableForItem[];
  title?: string;
};

export type TSuitableForItem = {
  title: string;
  descr: string;
};

export type TProjectTeam = {
  name: string;
  descr: string;
  icon: string;
};

export type TTariffs = {
  blockTitle: string;
  blickTitleDescr: string;
  plans: TPlan[];
};

export type TPlan = {
  title: string;
  description?: string;
  price?: number | string ;
  items?: TPlanItem[];
};

export type TPlanItem = {
  title?: string;
  description?: string;
};
