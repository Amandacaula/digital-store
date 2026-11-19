import { formatCardExpiry, formatCardNumber, formatCep, formatCpf, formatCvv, formatPhone } from "../utils/masks";

export const checkoutSections = [
  {
    title: "Informações Pessoais",
    fields: [
      { name: "name", label: "Nome Completo", placeholder: "Insira seu nome", required: true, autoComplete: "name" },
      { name: "cpf", label: "CPF", placeholder: "Insira seu CPF", required: true, format: formatCpf, inputMode: "numeric" },
      { name: "email", label: "E-mail", placeholder: "Insira seu email", required: true, type: "email", autoComplete: "email" },
      { name: "phone", label: "Celular", placeholder: "Insira seu celular", required: true, format: formatPhone, inputMode: "tel", autoComplete: "tel" },
    ],
  },
  {
    title: "Informações de Entrega",
    fields: [
      { name: "address", label: "Endereço", placeholder: "Insira seu endereço", required: true, autoComplete: "street-address" },
      { name: "district", label: "Bairro", placeholder: "Insira seu bairro", required: true },
      { name: "city", label: "Cidade", placeholder: "Insira sua cidade", required: true, autoComplete: "address-level2" },
      { name: "cep", label: "CEP", placeholder: "Insira seu CEP", required: true, format: formatCep, inputMode: "numeric", autoComplete: "postal-code" },
      { name: "complement", label: "Complemento", placeholder: "Insira complemento" },
    ],
  },
];

export const cardFields = [
  { name: "cardName", label: "Nome do Cartão", placeholder: "Insira o nome do Cartão", required: true, wide: true, autoComplete: "cc-name" },
  { name: "cardNumber", label: "Número do Cartão", placeholder: "Insira número do Cartão", required: true, format: formatCardNumber, inputMode: "numeric", autoComplete: "cc-number" },
  { name: "cardExpiry", label: "Data de validade do Cartão", placeholder: "MM/AA", required: true, format: formatCardExpiry, inputMode: "numeric", autoComplete: "cc-exp" },
  { name: "cardCvv", label: "CVV", placeholder: "CVV", required: true, format: formatCvv, inputMode: "numeric", autoComplete: "cc-csc" },
];

export const paymentMethods = [
  { value: "card", label: "Cartão de Crédito" },
  { value: "boleto", label: "Boleto Bancário" },
];

export const emptyCheckoutForm = {
  name: "",
  cpf: "",
  email: "",
  phone: "",
  address: "",
  district: "",
  city: "",
  cep: "",
  complement: "",
  paymentMethod: "card",
  cardName: "",
  cardNumber: "",
  cardExpiry: "",
  cardCvv: "",
};
