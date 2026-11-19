import Layout from "../Layout/Layout";
import AccountLayout from "../../components/AccountLayout/AccountLayout";
import InfoList from "../../components/InfoList/InfoList";
import { useAuth } from "../../hooks/useAuth";
import { accountSections } from "../../data/account";
import "./MyInfoPage.css";

function MyInfoPage() {
  const { user } = useAuth();

  function rowsOf(section) {
    return section.fields.map((field) => ({ label: field.label, value: user[field.name] }));
  }

  return (
    <Layout>
      <AccountLayout>
        <section className="account-box my-info" aria-labelledby="my-info-title">
          <div className="account-box__header">
            <h1 id="my-info-title" className="account-box__title">
              Minhas Informações
            </h1>
          </div>

          {accountSections.map((section) => (
            <InfoList key={section.title} className="my-info__block" title={section.title} rows={rowsOf(section)} />
          ))}
        </section>
      </AccountLayout>
    </Layout>
  );
}

export default MyInfoPage;
