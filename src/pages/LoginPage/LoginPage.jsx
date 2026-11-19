import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import AuthCard from "../../components/AuthCard/AuthCard";
import FormField from "../../components/FormField/FormField";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useAuth } from "../../hooks/useAuth";

function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password) {
      setError("Preencha o login e a senha.");
      return;
    }

    setIsLoading(true);
    const result = await login(email, password);
    setIsLoading(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    navigate(from, { replace: true });
  }

  if (user) {
    return <Navigate to={from} replace />;
  }

  return (
    <Layout simpleHeader>
      <AuthCard
        title="Acesse sua conta"
        subtitle={
          <>
            Novo cliente? Então registre-se <Link to="/cadastro">aqui</Link>.
          </>
        }
      >
        <form className="auth-card__form" onSubmit={handleSubmit} noValidate>
          <FormField
            id="login-email"
            name="email"
            label="Login"
            placeholder="Insira seu login ou email"
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
          />

          <FormField
            id="login-password"
            name="password"
            label="Senha"
            placeholder="Insira sua senha"
            required
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
          />

          <Link to="/esqueci-minha-senha" className="auth-card__link">
            Esqueci minha senha
          </Link>

          {error && (
            <p className="auth-card__error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="auth-card__button" disabled={isLoading}>
            {isLoading ? "Entrando..." : "Acessar Conta"}
          </button>
        </form>

        <SocialLogin />
      </AuthCard>
    </Layout>
  );
}

export default LoginPage;
