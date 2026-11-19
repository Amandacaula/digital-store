# Digital Store

Loja virtual desenvolvida em React como projeto final do módulo de Front-end [Geração Tech 4.0].
 O layout segue o protótipo do Figma fornecido no curso,
nas versões para computador e celular.

![FRAME](screenshots/frame.png)

## Páginas
| Página | Rota |
| --- | --- |
| Home | `/` |
| Listagem de produtos (busca, filtros e ordenação) | `/produtos` |
| Produto (galeria, tamanhos, cores e relacionados) | `/product/:id` |
| Carrinho (quantidade, cupom, frete e resumo) | `/carrinho` |
| Finalizar Compra (formulário com máscaras e validação) | `/checkout` |
| Compra realizada (recibo) | `/compra-realizada` |
| Login | `/login` |
| Criar conta (e-mail e formulário) | `/cadastro` e `/cadastro/formulario` |
| Minhas Informações (com login) | `/minhas-informacoes` |
| Meus Pedidos (com login) | `/meus-pedidos` |


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
| `BuyBox` | Nome, avaliação, preço, descrição e botão Comprar | `name`, `stars`, `rating`, `price`, `priceDiscount`, `description`, `children`, `onBuy`, `message` |
| `CartProvider` / `useCart` | Carrinho compartilhado (Context), salvo no localStorage | `children` |
| `CartItem` | Linha do carrinho com quantidade, remover e preços | `item`, `onQuantityChange`, `onRemove` |
| `QuantitySelector` | Botões − e + | `value`, `onChange`, `min`, `max` |
| `CartForm` | Campo + OK (cupom e frete) | `id`, `label`, `placeholder`, `onSubmit`, `formatValue` |
| `CartSummary` / `CartTotal` | Resumo do pedido e total com parcelamento | `subtotal`, `shipping`, `discount`, `total`, `onContinue` |
| `CheckoutBar` | Barra fixa do celular com o total e um botão | `total`, `buttonLabel`, `onButtonClick`, `form` |
| `FormField` | Título + campo + mensagem de erro | `id`, `name`, `label`, `value`, `onChange`, `error`, `required` |
| `OrderItem` | Produto compacto (imagem, nome e preços opcionais) | `image`, `name`, `quantity`, `price`, `oldPrice` |
| `OrderSummary` | Resumo da finalização com o botão Realizar Pagamento | `cartItems`, `subtotal`, `shipping`, `discount`, `total`, `formId` |
| `MiniCart` | Caixinha do carrinho que abre no Header | `id`, `onClose` |
| `AuthProvider` / `useAuth` | Conta: cadastro, login, sessão e pedidos (simulados no `localStorage`) | `children` |
| `PrivateRoute` | Só mostra a página com login; senão, manda para `/login` e volta depois | `children` |
| `AuthCard` / `SocialLogin` | Cartão das telas de login e cadastro e os botões Google/Facebook | `title`, `subtitle`, `children` |
| `FormSection` | Caixa branca com título para agrupar campos | `title`, `children` |
| `InfoList` | Bloco "Título + Rótulo: valor" (recibo e Minhas Informações) | `title`, `rows`, `className` |
| `AccountLayout` | Menu lateral da conta (computador) + conteúdo | `children` |
| `OrderCard` | Um pedido em Meus Pedidos, com a cor do status | `order` |
| `Drawer` / `MobileMenu` | Painel lateral e menu do celular | `isOpen`, `onClose`, `children` |
| `MessagePage` | Páginas "em construção" e "não encontrada" | `title`, `text` |

## Conceitos de React usados

- **Componentes e props:** cada parte da tela é um componente que recebe dados por propriedades.
- **`children`:** `Layout`, `Section`, `BuyBox` e `Drawer` recebem conteúdo entre as suas tags.
- **`useState`:** busca, filtros marcados, ordenação, imagem atual da galeria e menus abertos.
- **Context (`createContext` / `useContext`):** o carrinho (itens, cupom e CEP) é compartilhado entre Header, produto, carrinho e finalização da compra.
- **Hook próprio `usePersistentState`:** igual ao `useState`, mas salvo no `localStorage`.
- **`useRef`:** o minicarrinho fecha ao clicar fora dele.
- **Navegação com `state` e `<Navigate>`:** o pedido vai da finalização para o recibo junto com a navegação.
- **Rotas protegidas:** `PrivateRoute` guarda de onde a pessoa veio (`state.from`) e volta para lá depois do login.
- **`async`/`await`:** o login e o cadastro esperam a senha virar hash (`crypto.subtle`).
- **`startTransition`:** o "Sair" muda de página e desloga na mesma atualização.
- **`useEffect`:** troca automática do banner, rolagem para o topo e fechar painéis com `Esc`.
- **Listas com `map` e `key`:** produtos, links, filtros e opções.
- **Renderização condicional:** selo de desconto, preço riscado e miniaturas da galeria.
- **React Router:** `Routes`, `Route`, `Link`, `NavLink`, `useParams`, `useSearchParams`, `useLocation` e `useNavigate`.
- **Estado levantado:** os filtros ficam guardados na página de listagem, e os componentes só avisam quando algo muda.

## Decisões tomadas

- **Login simulado:** o projeto não tem servidor, então as contas, a sessão e os pedidos ficam
  no `localStorage` do navegador. A senha é guardada só como hash (SHA-256), nunca como foi
  digitada. Em um site real, cadastro e login seriam feitos por uma API.
- **Senha no cadastro:** o protótipo de "Criar Conta" não tem campo de senha, mas sem ela não
  há como entrar depois. Foi acrescentado o bloco "Senha de Acesso".
- **Login com Google/Facebook:** precisa de servidor e de cadastro nesses serviços, então os
  botões só avisam que ainda não estão disponíveis.

- **Dados locais:** como o consumo de API era opcional, os produtos ficam em `src/data/products.js`.
  Para usar uma API no futuro, basta trocar esse arquivo por uma requisição que devolva os
  produtos no mesmo formato.
- **Filtros e ordenação funcionam de verdade**, e não são só visuais.
- **Imagens dos tênis:** foram recortadas do protótipo do Figma (pasta `public/images`).

## Autoria

Feito por **Amanda Caúla** 
- Github: https://github.com/Amandacaula
- LinkedIn: https://www.linkedin.com/in/amandacaula/