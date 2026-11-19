import { useState } from "react";
import Layout from "../Layout/Layout";
import AccountLayout from "../../components/AccountLayout/AccountLayout";
import InfoList from "../../components/InfoList/InfoList";
import FormField from "../../components/FormField/FormField";
import { useAuth } from "../../hooks/useAuth";
import { accountSections } from "../../data/account";
import { validateFields } from "../../utils/formValidation";
import "./MyInfoPage.css";

function MyInfoPage() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(user);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const allFields = accountSections.flatMap((section) => section.fields);

  function startEditing() {
    setForm(user);
    setErrors({});
    setMessage("");
    setIsEditing(true);
  }

  function handleChange(event, format) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: format ? format(value) : value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateFields(allFields, form);
    setErrors(newErrors);

    const firstError = Object.keys(newErrors)[0];
    if (firstError) {
      document.getElementById(`profile-${firstError}`)?.focus();
      return;
    }

    updateUser(form);
    setIsEditing(false);
    setMessage("Informações atualizadas!");
  }

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
            {!isEditing && (
              <button type="button" className="my-info__edit" onClick={startEditing}>
                Editar
              </button>
            )}
          </div>

          {message && (
            <p className="my-info__message" role="status">
              {message}
            </p>
          )}

          {isEditing ? (
            <form className="my-info__form" onSubmit={handleSubmit} noValidate>
              {accountSections.map((section) => (
                <fieldset key={section.title} className="my-info__fieldset">
                  <legend className="info-list__title">{section.title}</legend>
                  {section.fields.map((field) => (
                    <FormField
                      key={field.name}
                      id={`profile-${field.name}`}
                      name={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      required={field.required}
                      type={field.type ?? "text"}
                      inputMode={field.inputMode}
                      autoComplete={field.autoComplete}
                      value={form[field.name] ?? ""}
                      onChange={(event) => handleChange(event, field.format)}
                      error={errors[field.name]}
                      readOnly={field.name === "email"}
                    />
                  ))}
                </fieldset>
              ))}

              <div className="my-info__actions">
                <button type="button" className="my-info__cancel" onClick={() => setIsEditing(false)}>
                  Cancelar
                </button>
                <button type="submit" className="my-info__save">
                  Salvar
                </button>
              </div>
            </form>
          ) : (
            accountSections.map((section) => (
              <InfoList key={section.title} className="my-info__block" title={section.title} rows={rowsOf(section)} />
            ))
          )}
        </section>
      </AccountLayout>
    </Layout>
  );
}

export default MyInfoPage;
