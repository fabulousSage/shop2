import { useState, useEffect } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  itemCount: number;
  total: number;
};

const CART_STORAGE_KEY = 'cart';

const useCart = (): [Cart, (item: CartItem) => void, (itemId: string) => void, () => void] => {
  const [cart, setCart] = useState<Cart>({ items: [], itemCount: 0, total: 0 });

  useEffect(() => {
    const cartFromStorage = localStorage.getItem(CART_STORAGE_KEY);
    if (cartFromStorage) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (item: CartItem) => {
    const itemIndex = cart.items.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex === -1) {
      setCart({
        ...cart,
        items: [...cart.items, item],
        itemCount: cart.itemCount + item.quantity,
        total: cart.total + item.price * item.quantity,
      });
    } else {
      const updatedItems = [...cart.items];
      updatedItems[itemIndex].quantity += item.quantity;
      setCart({
        ...cart,
        items: updatedItems,
        itemCount: cart.itemCount + item.quantity,
        total: cart.total + item.price * item.quantity,
      });
    }
  };

  const removeItemFromCart = (itemId: string) => {
    const itemIndex = cart.items.findIndex((cartItem) => cartItem.id === itemId);
    if (itemIndex !== -1) {
      const item = cart.items[itemIndex];
      const updatedItems = [...cart.items];
      updatedItems.splice(itemIndex, 1);
      setCart({
        ...cart,
        items: updatedItems,
        itemCount: cart.itemCount - item.quantity,
        total: cart.total - item.price * item.quantity,
      });
    }
  };

  const clearCart = () => {
    setCart({ items: [], itemCount: 0, total: 0 });
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  return [cart, addItemToCart, removeItemFromCart, clearCart];
};

export default useCart;
