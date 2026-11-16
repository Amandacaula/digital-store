/*Grupos de filtro exibidos na página de listagem de produtos.*/

export const filterGroups = [
  {
    title: "Marca",
    field: "brand",
    inputType: "checkbox",
    options: [
      { text: "Adiddas", value: "Adidas" },
      { text: "Calenciaga", value: "Balenciaga" },
      { text: "K-Swiss", value: "K-Swiss" },
      { text: "Nike", value: "Nike" },
      { text: "Puma", value: "Puma" },
    ],
  },
  {
    title: "Categoria",
    field: "category",
    inputType: "checkbox",
    options: [
      { text: "Esporte e lazer" },
      { text: "Casual" },
      { text: "Utilitário" },
      { text: "Corrida" },
    ],
  },
  {
    title: "Gênero",
    field: "gender",
    inputType: "checkbox",
    options: [{ text: "Masculino" }, { text: "Feminino" }, { text: "Unisex" }],
  },
  {
    title: "Estado",
    field: "condition",
    inputType: "radio",
    options: [
      { text: "Novo", value: "novo" },
      { text: "Usado", value: "usado" },
    ],
  },
];
