export interface Product {
  _id: number;
  name: string;
  description: string;
  price: string;
  quantity: string;
  image: string;
}

export interface ProductResponse {
  count: Number,
  products: Array<Product>;
}

export interface snackBarData {
  translate: boolean;
  translateData?: any
  data: string
}
