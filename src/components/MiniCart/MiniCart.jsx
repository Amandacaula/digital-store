import { Link } from "react-router-dom";
import OrderItem from "../OrderItem/OrderItem";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import "./MiniCart.css";

function MiniCart({ id, onClose }) {
  const { cartItems, total, clearCart } = useCart();
  const isEmpty = cartItems.length === 0;

  return (
    <div id={id} className="mini-cart" role="dialog" aria-label="Meu Carrinho">
      <h2 className="mini-cart__title">Meu Carrinho</h2>

      {isEmpty ? (
        <p className="mini-cart__empty">Seu carrinho está vazio.</p>
      ) : (
        <ul className="mini-cart__list">
          {cartItems.map((item) => (
            <li key={item.id}>
              <OrderItem
                image={item.product.image}
                name={item.product.name}
                quantity={item.quantity}
                price={item.totalPrice}
                oldPrice={item.oldTotalPrice}
              />
            </li>
          ))}
        </ul>
      )}

      <div className="mini-cart__total">
        <span>Valor total:</span>
        <strong>{formatPrice(total)}</strong>
      </div>

      <div className="mini-cart__actions">
        <button type="button" className="mini-cart__clear" onClick={clearCart} disabled={isEmpty}>
          Esvaziar
        </button>
        <Link to="/carrinho" className="mini-cart__button" onClick={onClose}>
          Ver Carrinho
        </Link>
      </div>
    </div>
  );
}

export default MiniCart;
