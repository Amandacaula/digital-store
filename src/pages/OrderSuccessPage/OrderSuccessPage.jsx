import { Link, useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import MessagePage from "../MessagePage/MessagePage";
import OrderItem from "../../components/OrderItem/OrderItem";
import CartTotal from "../../components/CartTotal/CartTotal";
import InfoList from "../../components/InfoList/InfoList";
import "./OrderSuccessPage.css";

function OrderSuccessPage() {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return <MessagePage title="Nenhuma compra encontrada" text="Finalize uma compra para ver o recibo aqui." />;
  }

  const { customer, delivery, payment } = order;

  const paymentRows =
    payment.method === "card"
      ? [
          { label: "Forma de pagamento", value: "Cartão de Crédito" },
          { label: "Titular do Cartão", value: payment.holder },
          { label: "Final", value: `**** **** **** ${payment.last4}` },
        ]
      : [{ label: "Forma de pagamento", value: "Boleto Bancário" }];

  return (
    <Layout>
      <div className="container order-success">
        <div className="order-success__card">
          <span className="order-success__icon" aria-hidden="true">
            🎉
          </span>
          <h1 className="order-success__title">
            Compra Realizada
            <br />
            com sucesso!
          </h1>

          <InfoList
            className="order-success__block"
            title="Informações Pessoais"
            rows={[
              { label: "Nome", value: customer.name },
              { label: "CPF", value: customer.cpf },
              { label: "Email", value: customer.email },
              { label: "Celular", value: customer.phone },
            ]}
          />

          <InfoList
            className="order-success__block"
            title="Informações de Entrega"
            rows={[
              { label: "Endereço", value: delivery.address },
              { label: "Complemento", value: delivery.complement },
              { label: "Bairro", value: delivery.district },
              { label: "Cidade", value: delivery.city },
              { label: "CEP", value: delivery.cep },
            ]}
          />

          <InfoList className="order-success__block" title="Informações de Pagamento" rows={paymentRows} />

          <section className="order-success__block">
            <h2 className="order-success__subtitle">Resumo da compra</h2>
            <ul className="order-success__items">
              {order.items.map((item) => (
                <li key={item.id}>
                  <OrderItem image={item.image} name={item.name} quantity={item.quantity} />
                </li>
              ))}
            </ul>
            <CartTotal total={order.total} className="cart-total--highlight" />
          </section>

          <button type="button" className="order-success__print" onClick={() => window.print()}>
            Imprimir Recibo
          </button>
        </div>

        <Link to="/" className="order-success__home">
          Voltar para Home
        </Link>
      </div>
    </Layout>
  );
}

export default OrderSuccessPage;
