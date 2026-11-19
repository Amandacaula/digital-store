# Digital Store

Loja virtual desenvolvida em React como projeto final do módulo de Front-end [Geração Tech 4.0].
 O layout segue o protótipo do Figma fornecido no curso,
nas versões para computador e celular.

## Páginas
| Página | Rota |
| --- | --- |
| Home | `/` |
| Listagem de produtos (busca, filtros e ordenação) | `/produtos` |
| Produto (galeria, tamanhos, cores e relacionados) | `/product/:id` |


 Qualquer endereço que não existe mostra **"Página não encontrada"**.

Todas as páginas são **responsivas**. No celular, o menu abre numa lateral, a busca aparece
ao clicar na lupa e os filtros da listagem ficam num painel.

## Tecnologias

- [React 19](https://react.dev/)
- [React Router 7](https://reactrouter.com/), para as rotas
- [Vite 8](https://vite.dev/), para rodar e gerar o projeto
- CSS puro com variáveis (sem biblioteca de estilos)
- ESLint, para verificar o código

## Como rodar o projeto

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou mais nova).

- bash;
- npm install;
- npm run dev (Abra o endereço que aparecer no terminal (normalmente http://localhost:5173)).

## Telas Principais

**HOME**
![Página inicial](screenshots/home.png)

**LISTAGEM DE PRODUTOS**
![Listagem de produtos](screenshots/listagem.png)

**PRODUTO**
![Página do produto](screenshots/produto.png)

## Estrutura de pastas
```

digital-store/
├── public/
│   └── images/          Fotos dos produtos, banner e oferta
├── src/
│   ├── assets/          Logos e ícones SVG
│   ├── components/      Componentes reutilizáveis (um por pasta: .jsx +.css)
│   ├── data/            Produtos, filtros, links e conteúdo da Home
│   ├── pages/           Páginas e Layout
│   ├── styles/          CSS global (cores, reset, classes comuns)
│   ├── utils/           Busca, filtro e ordenação de produtos
│   ├── App.jsx          Rotas
│   └── main.jsx         Ponto de entrada
└── index.html
```
## Componentes

| Componente | Para que serve | Principais props |
| --- | --- | --- |
| `Layout` | Header + conteúdo da página + Footer; volta a rolagem para o topo ao trocar de página | `children` |
| `Header` | Logo, busca, Cadastre-se, Entrar, carrinho e navegação | — |
| `Logo` | Logomarca (253x44) com link para a Home | `variant` (`header` ou `footer`) |
| `SearchBar` | Busca que leva para `/products?filter=texto` (lupa ou Enter) | `className` |
| `Navigation` | Links principais; o da página atual fica destacado | `direction`, `onNavigate` |
| `Footer` | Descrição, redes sociais, colunas de links e direitos autorais | — |
| `Information` | Coluna de links do rodapé (internos com `Link`, externos com `<a>`) | `title`, `informations` |
| `Section` | Bloco com título, link opcional e conteúdo | `title`, `titleAlign`, `link`, `children` |
| `ProductCard` | Cartão do produto, com preço riscado quando há desconto | `id`, `image`, `name`, `type`, `price`, `priceDiscount`, `badge` |
| `ProductListing` | Grade de cartões de produto | `products`, `columns` |
| `HeroBanner` | Banner da Home com troca automática de slides | `slides` |
| `CollectionCard` / `CategoryIcon` / `SpecialOffer` | Blocos da Home | — |
| `FilterGroup` | Grupo de checkbox ou radio com título | `title`, `inputType`, `options` |
| `ProductFilters` | Junta os grupos de filtro e o botão "Limpar filtros" | `selectedFilters`, `onChange`, `onClear` |
| `SortSelect` | Ordenação por preço | — |
| `Gallery` | Imagens com setas (desabilitadas nas pontas) e miniaturas opcionais | `images`, `width`, `height`, `radius`, `showThumbs` |
| `ProductOptions` | Tamanhos (quadrado) ou cores (círculo) | `options`, `shape`, `type`, `radius` |
| `BuyBox` | Nome, avaliação, preço, descrição e botão Comprar | `name`, `stars`, `rating`, `price`, `priceDiscount`, `description`, `children` |
| `Drawer` / `MobileMenu` | Painel lateral e menu do celular | `isOpen`, `onClose`, `children` |
| `MessagePage` | Páginas "em construção" e "não encontrada" | `title`, `text` |

## Conceitos de React usados

- **Componentes e props:** cada parte da tela é um componente que recebe dados por propriedades.
- **`children`:** `Layout`, `Section`, `BuyBox` e `Drawer` recebem conteúdo entre as suas tags.
- **`useState`:** busca, filtros marcados, ordenação, imagem atual da galeria e menus abertos.
- **`useEffect`:** troca automática do banner, rolagem para o topo e fechar painéis com `Esc`.
- **Listas com `map` e `key`:** produtos, links, filtros e opções.
- **Renderização condicional:** selo de desconto, preço riscado e miniaturas da galeria.
- **React Router:** `Routes`, `Route`, `Link`, `NavLink`, `useParams`, `useSearchParams`, `useLocation` e `useNavigate`.
- **Estado levantado:** os filtros ficam guardados na página de listagem, e os componentes só avisam quando algo muda.

## Decisões tomadas

- **Dados locais:** como o consumo de API era opcional, os produtos ficam em `src/data/products.js`.
  Para usar uma API no futuro, basta trocar esse arquivo por uma requisição que devolva os
  produtos no mesmo formato.
- **Filtros e ordenação funcionam de verdade**, e não são só visuais.
- **Imagens dos tênis:** foram recortadas do protótipo do Figma (pasta `public/images`).
- [Outras decisões suas, por exemplo onde você seguiu o Figma e onde seguiu a documentação.]

## Autoria

Feito por **Amanda Caúla** 
- Github: https://github.com/Amandacaula
- LinkedIn: https://www.linkedin.com/in/amandacaula/