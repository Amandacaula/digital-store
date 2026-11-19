import CartTotal from "../CartTotal/CartTotal";
import { formatPrice } from "../../utils/formatPrice";
import "./CartSummary.css";

function CartSummary({ subtotal, shipping, discount, total, onContinue }) {
  const rows = [
    { label: "Subtotal", value: subtotal },
    { label: "Frete", value: shipping },
    { label: "Desconto", value: discount },
  ];

  return (
    <aside className="cart-summary" aria-labelledby="cart-summary-title">
      <h2 id="cart-summary-title" className="cart-summary__title">
        Resumo
      </h2>

      <dl className="cart-summary__list">
        {rows.map((row) => (
          <div key={row.label} className="cart-summary__row">
            <dt>{row.label}:</dt>
            <dd>{formatPrice(row.value)}</dd>
          </div>
        ))}
      </dl>

      <CartTotal total={total} />

      <button type="button" className="cart-summary__button" onClick={onContinue}>
        Continuar
      </button>
    </aside>
  );
}

export default CartSummary;
