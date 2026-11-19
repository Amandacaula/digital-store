import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import FormField from "../../components/FormField/FormField";
import FormSection from "../../components/FormSection/FormSection";
import { useAuth } from "../../hooks/useAuth";
import { accountSections, emptyAccountForm, passwordFields } from "../../data/account";
import { validateFields } from "../../utils/formValidation";
import "./SignupFormPage.css";

function SignupFormPage() {
  const { user, register } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const [form, setForm] = useState({ ...emptyAccountForm, email: state?.email ?? "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const allFields = [...accountSections.flatMap((section) => section.fields), ...passwordFields];

  function handleChange(event, format) {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: format ? format(newValue) : newValue });

    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateFields(allFields, form);
    setErrors(newErrors);

    const firstError = Object.keys(newErrors)[0];
    if (firstError) {
      document.getElementById(`signup-${firstError}`)?.focus();
      return;
    }

    setIsLoading(true);
    const result = await register(form);
    setIsLoading(false);

    if (!result.ok) {
      setErrors({ email: result.error });
      document.getElementById("signup-email")?.focus();
      return;
    }

    navigate("/minhas-informacoes", { replace: true });
  }

  if (user) {
    return <Navigate to="/minhas-informacoes" replace />;
  }

  function renderField(field) {
    return (
      <FormField
        key={field.name}
        id={`signup-${field.name}`}
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
      />
    );
  }

  return (
    <Layout simpleHeader>
      <div className="container signup-form-page">
        <h1 className="signup-form-page__title">Criar Conta</h1>

        <form className="signup-form-page__form" onSubmit={handleSubmit} noValidate>
          {accountSections.map((section) => (
            <FormSection key={section.title} title={section.title}>
              {section.fields.map(renderField)}
            </FormSection>
          ))}

          <FormSection title="Senha de Acesso">{passwordFields.map(renderField)}</FormSection>

          <label className="signup-form-page__newsletter">
            <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de
            envios pode variar de acordo com a interação do cliente.
          </label>

          <button type="submit" className="signup-form-page__button" disabled={isLoading}>
            {isLoading ? "Criando conta..." : "Criar Conta"}
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default SignupFormPage;
