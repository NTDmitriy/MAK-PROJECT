export type THeroBasic = {
  title: {
    accentBefore?: string;
    accent?: string;
    accentAfter?: string;
  };
  description: string;
  image: string;
  formBtnText?: string;
  btnUrl?: string;
  formTitle?: string;
  formText?: string;
};

export type THeroInfoProduct = {
  title: string;
  description: string;
  image: string;
};

export type THeroInfo = string[];

export type THeroInfoAdvertisement = {
  title: string;
  description: string;
};

export type THero = {
  basic: THeroBasic;
  infoProduct?: THeroInfoProduct;
  infoService?: THeroInfo;
  infoUseful?: THeroInfo;
  infoAdvertisement?: THeroInfoAdvertisement[];
  infoWebdev?: THeroInfo;
};

export type TSupplementaryDescr = {
  title: string;
  descr: string;
  image: string;
};

export type TCase = {
  id: number | string;
  url: string;
  name: string;
  description: string | null;
  prevDescription: string | null;
  prevName: string;
  image: string;
  categories: string[];
  isGlobal?: boolean;
};

export type TReviwe = {
  id?: number | string;
  name: string;
  position: string | null;
  avatar: string | null;
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
  descrBefore?: string;
  descrAccent?: string;
  descrAfter?: string;
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
  price?: number | string;
  items?: TPlanItem[];
};

export type TPlanItem = {
  title?: string;
  description?: string;
};

export type TVacancies = {
  blockTitle?: string;
  formTitle?: string;
  formText?: string;
  items: TVacanciesItem[];
};

export type TVacanciesItem = {
  position?: string;
  employment?: string;
  payroll?: TPayroll;
  description?: string;
  skills?: string[];
};

export type TPayroll = {
  min: number;
  max: number;
};
