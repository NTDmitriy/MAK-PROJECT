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

export type TCases = {
  title: string;
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
  caseUrl?: string;
};
