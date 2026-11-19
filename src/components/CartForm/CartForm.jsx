import { useState } from "react";
import "./CartForm.css";

function CartForm({ id, label, placeholder, onSubmit, formatValue, inputMode, maxLength }) {
  const [value, setValue] = useState("");
  const [feedback, setFeedback] = useState(null);

  function handleChange(event) {
    const newValue = event.target.value;
    setValue(formatValue ? formatValue(newValue) : newValue);
    setFeedback(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFeedback(onSubmit(value.trim()));
  }

  return (
    <form className="cart-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor={id} className="cart-form__label">
        {label}
      </label>

      <div className="cart-form__row">
        <input
          id={id}
          className="cart-form__input"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          inputMode={inputMode}
          maxLength={maxLength}
          aria-describedby={feedback ? `${id}-feedback` : undefined}
          aria-invalid={feedback?.type === "error"}
        />
        <button type="submit" className="cart-form__button">
          OK
        </button>
      </div>

      {feedback && (
        <p id={`${id}-feedback`} className={`cart-form__feedback cart-form__feedback--${feedback.type}`} role="status">
          {feedback.text}
        </p>
      )}
    </form>
  );
}

export default CartForm;
