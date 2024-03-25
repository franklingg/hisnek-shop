export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  discount?: number | null;
  tags: string[];
  remote?: boolean;
}

export interface CartProduct {
  product: Product;
  quantity: number;
}
