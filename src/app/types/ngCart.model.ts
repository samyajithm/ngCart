export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: string;
  image: string;
}

export interface ProductResponse {
  data: Array<Product>;
}

export interface snackBarData {
  translate: boolean;
  translateData?: any
  data: string
}
