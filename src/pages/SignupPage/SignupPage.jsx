import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import AuthCard from "../../components/AuthCard/AuthCard";
import FormField from "../../components/FormField/FormField";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useAuth } from "../../hooks/useAuth";
import { isValidEmail } from "../../utils/formValidation";

function SignupPage() {
  const { user, emailExists } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    if (emailExists(email)) {
      setError("Já existe uma conta com este e-mail. Use o link \"Entre aqui\" acima.");
      return;
    }

    navigate("/cadastro/formulario", { state: { email: email.trim() } });
  }

  if (user) {
    return <Navigate to="/minhas-informacoes" replace />;
  }

  return (
    <Layout simpleHeader>
      <AuthCard
        title="Crie sua conta"
        subtitle={
          <>
            Já possui uma conta? Entre <Link to="/login">aqui</Link>.
          </>
        }
      >
        <form className="auth-card__form" onSubmit={handleSubmit} noValidate>
          <FormField
            id="signup-email"
            name="email"
            label="Email"
            placeholder="Insira seu email"
            required
            type="email"
            autoComplete="email"
            value={email}
            error={error}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
          />

          <button type="submit" className="auth-card__button">
            Criar Conta
          </button>
        </form>

        <SocialLogin />
      </AuthCard>
    </Layout>
  );
}

export default SignupPage;
