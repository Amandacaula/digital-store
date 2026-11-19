import { CartContext } from "./CartContext";
import { usePersistentState } from "../hooks/usePersistentState";
import { coupons, getCartSummary, initialCartItems, MAX_QUANTITY } from "../data/cart";

function CartProvider({ children }) {
  const [items, setItems] = usePersistentState("digital-store:cart", initialCartItems);
  const [couponCode, setCouponCode] = usePersistentState("digital-store:coupon", null);
  const [cep, setCep] = usePersistentState("digital-store:cep", null);

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

  function clearCart() {
    setItems([]);
    setCouponCode(null);
    setCep(null);
  }

  function applyCoupon(code) {
    const normalizedCode = code.toUpperCase();
    const isValid = coupons[normalizedCode] !== undefined;
    setCouponCode(isValid ? normalizedCode : null);
    return isValid;
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const summary = getCartSummary(items, couponCode, cep);

  const value = {
    items,
    itemCount,
    couponCode,
    cep,
    ...summary,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    applyCoupon,
    setShippingCep: setCep,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
