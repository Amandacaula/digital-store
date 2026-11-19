import { checkoutSections } from "./checkout";

export const accountSections = checkoutSections;

export const passwordFields = [
  {
    name: "password",
    label: "Senha",
    placeholder: "Mínimo de 6 caracteres",
    required: true,
    type: "password",
    autoComplete: "new-password",
  },
  {
    name: "passwordConfirm",
    label: "Confirmar Senha",
    placeholder: "Repita a senha",
    required: true,
    type: "password",
    autoComplete: "new-password",
  },
];

export const emptyAccountForm = {
  name: "",
  cpf: "",
  email: "",
  phone: "",
  address: "",
  district: "",
  city: "",
  cep: "",
  complement: "",
  password: "",
  passwordConfirm: "",
  newsletter: true,
};

export const profileFieldNames = accountSections.flatMap((section) => section.fields.map((field) => field.name));

export const orderStatus = {
  inTransit: { text: "Produto em trânsito", className: "is-transit" },
  finished: { text: "Finalizado", className: "is-finished" },
  canceled: { text: "Cancelado", className: "is-canceled" },
};

export const accountLinks = [
  { text: "Minhas Informações", link: "/minhas-informacoes" },
  { text: "Meus Pedidos", link: "/meus-pedidos" },
  { text: "Métodos de Pagamento", link: "/metodos-de-pagamento" },
];
