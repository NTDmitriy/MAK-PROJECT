export type THeroBasic = {
  title: {
    text: string;
    accentText: string;
    accentOrder: number;
  };
  description: string;
  image: string;
};

export type THeroInfo = {
  title: string;
  description: string;
  image: string;
};

export type THeroInfoService = string[];

export type THero = {
  basic: THeroBasic;
  info: THeroInfo | THeroInfoService;
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
}

export type TDetialServices = {
	title: string;
	services: TDetialService[]
}