import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import FormField from "../../components/FormField/FormField";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import CartTotal from "../../components/CartTotal/CartTotal";
import CheckoutBar from "../../components/CheckoutBar/CheckoutBar";
import { useCart } from "../../hooks/useCart";
import { cardFields, checkoutSections, emptyCheckoutForm, paymentMethods } from "../../data/checkout";
import { validateCheckout } from "../../utils/formValidation";
import { onlyDigits } from "../../utils/masks";
import "./CheckoutPage.css";

const FORM_ID = "checkout-form";

function CheckoutPage() {
  const { cartItems, subtotal, shipping, discount, total, cep, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({ ...emptyCheckoutForm, cep: cep ?? "" });
  const [errors, setErrors] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const isCard = form.paymentMethod === "card";

  function handleChange(event, format) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: format ? format(value) : value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateCheckout(form);
    setErrors(newErrors);

    const firstError = Object.keys(newErrors)[0];
    if (firstError) {
      document.getElementById(`checkout-${firstError}`)?.focus();
      return;
    }

    const order = {
      customer: { name: form.name, cpf: form.cpf, email: form.email, phone: form.phone },
      delivery: {
        address: form.address,
        district: form.district,
        city: form.city,
        cep: form.cep,
        complement: form.complement,
      },
      payment: isCard
        ? { method: "card", holder: form.cardName.toUpperCase(), last4: onlyDigits(form.cardNumber).slice(-4) }
        : { method: "boleto" },
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.product.name,
        image: item.product.image,
        quantity: item.quantity,
      })),
      total,
    };

    setIsFinished(true);
    clearCart();
    navigate("/compra-realizada", { state: { order } });
  }

  if (cartItems.length === 0) {
    if (isFinished) return null;

    return <Navigate to="/carrinho" replace />;
  }

  function renderField(field) {
    return (
      <FormField
        key={field.name}
        id={`checkout-${field.name}`}
        name={field.name}
        label={field.label}
        placeholder={field.placeholder}
        required={field.required}
        type={field.type ?? "text"}
        inputMode={field.inputMode}
        autoComplete={field.autoComplete}
        value={form[field.name]}
        onChange={(event) => handleChange(event, field.format)}
        error={errors[field.name]}
        className={field.wide ? "checkout-form__wide" : ""}
      />
    );
  }

  return (
    <Layout>
      <div className="checkout-page">
        <div className="container checkout-page__content">
          <h1 className="checkout-page__title">Finalizar Compra</h1>

          <form id={FORM_ID} className="checkout-form" onSubmit={handleSubmit} noValidate>
            {checkoutSections.map((section) => (
              <section key={section.title} className="checkout-box">
                <h2 className="checkout-box__title">{section.title}</h2>
                <div className="checkout-box__fields">{section.fields.map(renderField)}</div>
              </section>
            ))}

            <section className="checkout-box">
              <h2 className="checkout-box__title">Informações de Pagamento</h2>

              <fieldset className="checkout-form__payment">
                <legend className="checkout-form__payment-title">Forma de Pagamento</legend>
                <div className="checkout-form__payment-options">
                  {paymentMethods.map((method) => (
                    <label key={method.value} className="checkout-form__radio">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={form.paymentMethod === method.value}
                        onChange={handleChange}
                      />
                      {method.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {isCard ? (
                <div className="checkout-box__fields checkout-box__fields--card">{cardFields.map(renderField)}</div>
              ) : (
                <p className="checkout-form__boleto">
                  O boleto será exibido depois de confirmar a compra. O pedido é liberado após o pagamento.
                </p>
              )}
            </section>

            <section className="checkout-box checkout-page__finish">
              <h2 className="checkout-box__title">Finalizar Compra</h2>
              <CartTotal total={total} />
              <button type="submit" className="checkout-page__button">
                Realizar Pagamento
              </button>
            </section>
          </form>

          <OrderSummary
            cartItems={cartItems}
            subtotal={subtotal}
            shipping={shipping}
            discount={discount}
            total={total}
            formId={FORM_ID}
          />
        </div>

        <CheckoutBar total={total} buttonLabel="Realizar Pagamento" form={FORM_ID} />
      </div>
    </Layout>
  );
}

export default CheckoutPage;
