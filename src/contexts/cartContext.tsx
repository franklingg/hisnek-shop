import React, {createContext, useState, useContext, useCallback} from 'react';
import {CartProduct} from '~/services/types';

interface ICartContext {
  cartItems: Array<CartProduct>;
  addItem: (cartItem: CartProduct) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  changeQuantity: (productId: string, newQuantity: number) => void;
}

const defaultState: ICartContext = {
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  changeQuantity: () => {},
};

const CartContext = createContext<ICartContext>(defaultState);

export function CartProvider({children}: {children: React.ReactNode}) {
  const [cartItems, setCartItems] = useState(defaultState.cartItems);

  const removeItem = useCallback(
    (productId: string) => {
      setCartItems([...cartItems.filter(i => i.product.id !== productId)]);
    },
    [cartItems],
  );

  const changeQuantity = useCallback(
    (productId: string, newQuantity: number) => {
      const items = [...cartItems];
      const idxToChange = items.findIndex(i => i.product.id === productId);
      if (idxToChange !== -1) {
        if (newQuantity > 0) {
          items[idxToChange].quantity = newQuantity;
          setCartItems(items);
        } else {
          removeItem(productId);
        }
      }
    },
    [cartItems, removeItem],
  );

  const addItem = useCallback(
    (newItem: CartProduct) => {
      const existingItemIdx = cartItems.findIndex(
        i => i.product.id === newItem.product.id,
      );
      if (existingItemIdx !== -1) {
        changeQuantity(
          newItem.product.id,
          cartItems[existingItemIdx].quantity + newItem.quantity,
        );
      } else {
        setCartItems([...cartItems, newItem]);
      }
    },
    [cartItems, changeQuantity],
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  return (
    <CartContext.Provider
      value={{cartItems, addItem, removeItem, clearCart, changeQuantity}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
