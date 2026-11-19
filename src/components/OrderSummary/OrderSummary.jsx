import OrderItem from "../OrderItem/OrderItem";
import CartTotal from "../CartTotal/CartTotal";
import { formatPrice } from "../../utils/formatPrice";
import "./OrderSummary.css";

function OrderSummary({ cartItems, subtotal, shipping, discount, total, formId }) {
  const rows = [
    { label: "Subtotal", value: subtotal },
    { label: "Frete", value: shipping },
    { label: "Desconto", value: discount },
  ];

  return (
    <aside className="order-summary" aria-labelledby="order-summary-title">
      <h2 id="order-summary-title" className="order-summary__title">
        Resumo
      </h2>

      <ul className="order-summary__items">
        {cartItems.map((item) => (
          <li key={item.id}>
            <OrderItem image={item.product.image} name={item.product.name} quantity={item.quantity} />
          </li>
        ))}
      </ul>

      <dl className="order-summary__list">
        {rows.map((row) => (
          <div key={row.label} className="order-summary__row">
            <dt>{row.label}:</dt>
            <dd>{formatPrice(row.value)}</dd>
          </div>
        ))}
      </dl>

      <CartTotal total={total} className="cart-total--highlight" />

      <button type="submit" form={formId} className="order-summary__button">
        Realizar Pagamento
      </button>
    </aside>
  );
}

export default OrderSummary;
