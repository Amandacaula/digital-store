import CartTotal from "../CartTotal/CartTotal";
import "./CheckoutBar.css";

function CheckoutBar({ total, buttonLabel, onButtonClick, form }) {
  return (
    <div className="checkout-bar">
      <div className="container checkout-bar__content">
        <CartTotal total={total} />
        <button
          type={form ? "submit" : "button"}
          form={form}
          className="checkout-bar__button"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default CheckoutBar;
