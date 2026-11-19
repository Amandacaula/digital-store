import { formatPrice } from "../../utils/formatPrice";
import "./OrderItem.css";

function OrderItem({ image, name, quantity = 1, price, oldPrice }) {
  return (
    <div className="order-item">
      <div className="order-item__image">
        <img src={image} alt="" width="72" height="58" />
      </div>

      <div className="order-item__info">
        <p className="order-item__name">{name}</p>
        {quantity > 1 && <p className="order-item__quantity">{quantity} unidades</p>}

        {price !== undefined && (
          <p className="order-item__prices">
            <strong>{formatPrice(price)}</strong>
            {oldPrice !== undefined && <s>{formatPrice(oldPrice)}</s>}
          </p>
        )}
      </div>
    </div>
  );
}

export default OrderItem;
