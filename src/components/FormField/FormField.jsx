import "./FormField.css";

function FormField({ id, name, label, value, onChange, error, required = false, className = "", ...inputProps }) {
  const errorId = `${id}-error`;

  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={id} className="form-field__label">
        {label}
        {required && " *"}
      </label>

      <input
        id={id}
        name={name}
        className="form-field__input"
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />

      {error && (
        <p id={errorId} className="form-field__error">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;
