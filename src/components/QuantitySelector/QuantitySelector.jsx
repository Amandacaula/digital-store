import "./QuantitySelector.css";

function QuantitySelector({ value, onChange, min = 1, max = 10, label = "Quantidade" }) {
  return (
    <div className="quantity-selector" role="group" aria-label={label}>
      <button
        type="button"
        className="quantity-selector__button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label="Diminuir quantidade"
      >
        −
      </button>

      <span className="quantity-selector__value" aria-live="polite">
        {value}
      </span>

      <button
        type="button"
        className="quantity-selector__button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label="Aumentar quantidade"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
