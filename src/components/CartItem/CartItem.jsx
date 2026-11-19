import { Link } from "react-router-dom";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { colorNames } from "../../data/products";
import { MAX_QUANTITY } from "../../data/cart";
import { formatPrice } from "../../utils/formatPrice";
import "./CartItem.css";

function CartPrice({ label, value, oldValue }) {
  return (
    <div className="cart-item__price">
      <span className="cart-item__label">{label}</span>
      <div className="cart-item__values">
        {oldValue !== undefined && <s className="cart-item__old-price">{formatPrice(oldValue)}</s>}
        <strong className="cart-item__current-price">{formatPrice(value)}</strong>
      </div>
    </div>
  );
}

function CartItem({ item, onQuantityChange, onRemove }) {
  const { product, size, color, quantity } = item;
  const productLink = `/product/${product.id}`;

  return (
    <li className="cart-item">
      <div className="cart-item__product">
        <Link to={productLink} className="cart-item__image">
          <img src={product.image} alt="" width="138" height="112" />
        </Link>

        <div className="cart-item__info">
          <h2 className="cart-item__name">
            <Link to={productLink}>{product.name}</Link>
          </h2>
          <p className="cart-item__detail">
            Cor: <span>{colorNames[color] ?? color}</span>
          </p>
          <p className="cart-item__detail">
            Tamanho: <span>{size}</span>
          </p>
        </div>
      </div>

      <div className="cart-item__quantity">
        <span className="cart-item__label">Quantidade</span>
        <QuantitySelector
          value={quantity}
          onChange={onQuantityChange}
          max={MAX_QUANTITY}
          label={`Quantidade de ${product.name}`}
        />
        <button type="button" className="cart-item__remove" onClick={onRemove}>
          Remover item
        </button>
      </div>

      <CartPrice label="Unitário" value={item.unitPrice} oldValue={item.oldUnitPrice} />
      <CartPrice label="Total" value={item.totalPrice} oldValue={item.oldTotalPrice} />
    </li>
  );
}

export default CartItem;
