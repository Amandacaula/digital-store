import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import AccountLayout from "../../components/AccountLayout/AccountLayout";
import OrderCard from "../../components/OrderCard/OrderCard";
import { useAuth } from "../../hooks/useAuth";
import "./MyOrdersPage.css";

function MyOrdersPage() {
  const { userOrders } = useAuth();

  return (
    <Layout>
      <AccountLayout>
        <section className="account-box" aria-labelledby="my-orders-title">
          <div className="account-box__header">
            <h1 id="my-orders-title" className="account-box__title">
              Meus Pedidos
            </h1>
          </div>

          {userOrders.length === 0 ? (
            <div className="my-orders__empty">
              <p>Você ainda não fez nenhum pedido.</p>
              <Link to="/produtos" className="button">
                Ver produtos
              </Link>
            </div>
          ) : (
            <div className="my-orders__list">
              {userOrders.map((order) => (
                <OrderCard key={order.number} order={order} />
              ))}
            </div>
          )}
        </section>
      </AccountLayout>
    </Layout>
  );
}

export default MyOrdersPage;
