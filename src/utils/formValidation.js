import { cardFields, checkoutSections } from "../data/checkout";
import { onlyDigits } from "./masks";

function isValidExpiry(value) {
  const [month, year] = value.split("/").map(Number);
  if (!month || month > 12 || year === undefined || Number.isNaN(year)) return false;

  const today = new Date();
  const currentYear = today.getFullYear() % 100;
  const currentMonth = today.getMonth() + 1;
  return year > currentYear || (year === currentYear && month >= currentMonth);
}

export function isValidEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value.trim());
}

const rules = {
  name: (value) => (value.trim().includes(" ") ? null : "Digite nome e sobrenome."),
  cpf: (value) => (onlyDigits(value).length === 11 ? null : "O CPF precisa ter 11 números."),
  email: (value) => (isValidEmail(value) ? null : "Digite um e-mail válido."),
  phone: (value) => (onlyDigits(value).length >= 10 ? null : "Digite o celular com DDD."),
  cep: (value) => (onlyDigits(value).length === 8 ? null : "O CEP precisa ter 8 números."),
  cardNumber: (value) => (onlyDigits(value).length === 16 ? null : "O cartão precisa ter 16 números."),
  cardExpiry: (value) => (isValidExpiry(value) ? null : "Validade inválida ou vencida."),
  cardCvv: (value) => (onlyDigits(value).length >= 3 ? null : "O CVV tem 3 ou 4 números."),
  password: (value) => (value.length >= 6 ? null : "A senha precisa ter pelo menos 6 caracteres."),
  passwordConfirm: (value, form) => (value === form.password ? null : "As senhas não são iguais."),
};

export function validateFields(fields, form) {
  const errors = {};

  for (const field of fields) {
    const value = form[field.name] ?? "";

    if (!value.trim()) {
      if (field.required) errors[field.name] = "Campo obrigatório.";
      continue;
    }

    const error = rules[field.name]?.(value, form);
    if (error) errors[field.name] = error;
  }

  return errors;
}

export function validateCheckout(form) {
  const fields = checkoutSections.flatMap((section) => section.fields);
  if (form.paymentMethod === "card") fields.push(...cardFields);

  return validateFields(fields, form);
}
