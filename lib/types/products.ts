export interface IProductDetails {
  

  colors?: string[];
  sizes?: string[];
  material?: string;
  gender?: string;
  occasion?: string;
}

export type TSlug = {
  _type: string;
  current: string;
};

export type TImage = {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export interface IProduct {
  image: any;
  name: string;
  slug: TSlug;
  price: number;
  discount?: number;
  details?: IProductDetails[];
  brand: string;
  category: string[];
  isOffer?: boolean;
  registerDate?: string;
  timeStamp?: number;
  starRating: number;
}