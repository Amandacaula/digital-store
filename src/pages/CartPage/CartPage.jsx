import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import CartItem from "../../components/CartItem/CartItem";
import CartForm from "../../components/CartForm/CartForm";
import CartSummary from "../../components/CartSummary/CartSummary";
import CheckoutBar from "../../components/CheckoutBar/CheckoutBar";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import { useCart } from "../../hooks/useCart";
import { products } from "../../data/products";
import { coupons, FREE_SHIPPING_FROM } from "../../data/cart";
import { formatPrice } from "../../utils/formatPrice";
import { formatCep, onlyDigits } from "../../utils/masks";
import "./CartPage.css";

function CartPage() {
  const {
    items,
    cartItems,
    subtotal,
    shipping,
    discount,
    total,
    updateQuantity,
    removeItem,
    applyCoupon,
    setShippingCep,
  } = useCart();
  const navigate = useNavigate();

  const productIdsInCart = items.map((item) => item.productId);
  const relatedProducts = products
    .filter((product) => !productIdsInCart.includes(product.id))
    .slice(0, 4);

  function handleCoupon(code) {
    if (!applyCoupon(code)) {
      return { type: "error", text: "Cupom inválido." };
    }

    const normalizedCode = code.toUpperCase();
    return {
      type: "success",
      text: `Cupom ${normalizedCode} aplicado: ${formatPrice(coupons[normalizedCode])} de desconto.`,
    };
  }

  function handleShipping(value) {
    if (onlyDigits(value).length !== 8) {
      setShippingCep(null);
      return { type: "error", text: "Digite um CEP com 8 números." };
    }

    setShippingCep(value);
    return {
      type: "success",
      text: `Frete calculado para ${value}. Grátis em compras a partir de ${formatPrice(FREE_SHIPPING_FROM)}.`,
    };
  }

  function handleContinue() {
    navigate("/checkout");
  }

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container cart-page__empty">
          <h1>Seu carrinho está vazio</h1>
          <p>Que tal dar uma olhada nos nossos produtos?</p>
          <Link to="/produtos" className="button">
            Ver produtos
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="cart-page">
        <div className="container cart-page__content">
          <section className="cart" aria-labelledby="cart-title">
            <div className="cart__box">
              <div className="cart__head">
                <h1 id="cart-title" className="cart__title">
                  Meu carrinho
                </h1>
                <span className="cart__column-title">Quantidade</span>
                <span className="cart__column-title">Unitário</span>
                <span className="cart__column-title">Total</span>
              </div>

              <ul className="cart__list">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onQuantityChange={(quantity) => updateQuantity(item.id, quantity)}
                    onRemove={() => removeItem(item.id)}
                  />
                ))}
              </ul>
            </div>

            <div className="cart__extras">
              <div className="cart__box">
                <CartForm
                  id="coupon"
                  label="Cupom de desconto"
                  placeholder="Insira seu código"
                  onSubmit={handleCoupon}
                />
              </div>
              <div className="cart__box">
                <CartForm
                  id="cep"
                  label="Calcular frete"
                  placeholder="Insira seu CEP"
                  onSubmit={handleShipping}
                  formatValue={formatCep}
                  inputMode="numeric"
                  maxLength={9}
                />
              </div>
            </div>
          </section>

          <CartSummary
            subtotal={subtotal}
            shipping={shipping}
            discount={discount}
            total={total}
            onContinue={handleContinue}
          />

          {relatedProducts.length > 0 && (
            <Section
              title="Produtos Relacionados"
              link={{ text: "Ver todos", href: "/produtos" }}
              className="cart-page__related"
            >
              <ProductListing products={relatedProducts} columns={4} />
            </Section>
          )}
        </div>

        <CheckoutBar total={total} buttonLabel="Continuar" onButtonClick={handleContinue} />
      </div>
    </Layout>
  );
}

export default CartPage;
