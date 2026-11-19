import { INSTALLMENTS } from "../../data/cart";
import { formatPrice } from "../../utils/formatPrice";
import "./CartTotal.css";

function CartTotal({ total, className = "" }) {
  return (
    <div className={`cart-total ${className}`}>
      <div className="cart-total__row">
        <span className="cart-total__label">Total</span>
        <strong className="cart-total__value">{formatPrice(total)}</strong>
      </div>
      <p className="cart-total__installments">
        ou {INSTALLMENTS}x de {formatPrice(total / INSTALLMENTS)} sem juros
      </p>
    </div>
  );
}

export default CartTotal;
