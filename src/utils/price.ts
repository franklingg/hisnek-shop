import {Product} from '~/services/types';

export const calculatePrice = (product: Product) => {
  return (product.price * (1 - (product.discount || 0) / 100)).toFixed(2);
};
