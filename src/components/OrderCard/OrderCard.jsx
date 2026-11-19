import { orderStatus } from "../../data/account";
import "./OrderCard.css";

function OrderCard({ order }) {
  const [firstItem, ...otherItems] = order.items;
  const status = orderStatus[order.status] ?? orderStatus.inTransit;

  return (
    <article className="order-card">
      <div className="order-card__product">
        <div className="order-card__image">
          <img src={firstItem.image} alt="" width="72" height="58" />
        </div>

        <div>
          <p className="order-card__number">Pedido nº {order.number}</p>
          <h2 className="order-card__name">{firstItem.name}</h2>
          {otherItems.length > 0 && (
            <p className="order-card__more">
              + {otherItems.length} {otherItems.length === 1 ? "produto" : "produtos"}
            </p>
          )}
        </div>
      </div>

      <div className="order-card__status">
        <span>Status</span>
        <strong className={status.className}>{status.text}</strong>
      </div>
    </article>
  );
}

export default OrderCard;
