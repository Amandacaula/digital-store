import { getProductById } from "./products";

export const initialCartItems = [
  { id: "3-42-#FF6969", productId: 3, size: "42", color: "#FF6969", quantity: 1 },
];

export const coupons = {
  DIGITAL30: 30,
  DRIP10: 10,
};

export const FREE_SHIPPING_FROM = 200;
export const SHIPPING_PRICE = 20;

export const MAX_QUANTITY = 10;

export const INSTALLMENTS = 10;

export function getCartItemDetails(item) {
  const product = getProductById(item.productId);
  const unitPrice = product.priceDiscount ?? product.price;
  const hasDiscount = product.priceDiscount !== undefined;

  return {
    ...item,
    product,
    unitPrice,
    oldUnitPrice: hasDiscount ? product.price : undefined,
    totalPrice: unitPrice * item.quantity,
    oldTotalPrice: hasDiscount ? product.price * item.quantity : undefined,
  };
}
