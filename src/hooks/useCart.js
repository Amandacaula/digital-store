import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("useCart precisa ser usado dentro do <CartProvider>.");
  }

  return cart;
}
