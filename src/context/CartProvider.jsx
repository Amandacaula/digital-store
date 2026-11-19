import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { initialCartItems, MAX_QUANTITY } from "../data/cart";

const STORAGE_KEY = "digital-store:cart";

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialCartItems;
  } catch {
    return initialCartItems;
  }
}

function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Não foi possível salvar no navegador.", error);
    }
  }, [items]);

  function addItem({ productId, size, color, quantity = 1 }) {
    const id = `${productId}-${size}-${color}`;

    setItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === id);

      if (existing) {
        return currentItems.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.min(item.quantity + quantity, MAX_QUANTITY) }
            : item
        );
      }

      return [...currentItems, { id, productId, size, color, quantity }];
    });
  }

  function updateQuantity(id, quantity) {
    setItems((currentItems) =>
      currentItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  function removeItem(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const value = { items, itemCount, addItem, updateQuantity, removeItem };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
