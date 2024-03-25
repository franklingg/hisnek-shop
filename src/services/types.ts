export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  discount?: number | null;
  tags: string[];
}

export interface CartProduct {
  product: Product;
  quantity: number;
}
