import {CartProduct, Product} from '~/services/types';

export const calculatePrice = (product: Product) => {
  return (product.price * (1 - (product.discount || 0) / 100)).toFixed(2);
};

export const cartTotal = (items: Array<CartProduct>) => {
  return items
    .reduce(
      (accumulator, cartItem) =>
        accumulator + +calculatePrice(cartItem.product) * cartItem.quantity,
      0,
    )
    .toFixed(2);
};
