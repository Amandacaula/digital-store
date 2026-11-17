import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MessagePage from "../MessagePage/MessagePage";
import { getProductById } from "../../data/products";
import "./ProductViewPage.css";


/*
 * Página de visualização do produto (rota "/product/:id").
 * O ":id" da URL diz qual produto deve ser exibido.
 */
function ProductViewPage() {
  const { id } = useParams();
  const product = getProductById(id);


  // Se o id não existir, mostra a página de "não encontrado"
  if (!product) {
    return <MessagePage title="Produto não encontrado" text="O produto que você procura não existe." />;
  }


  const breadcrumbItems = [
    { text: "Home", link: "/" },
    { text: "Produtos", link: "/produtos" },
    { text: product.type, link: `/produtos?filter=${product.type}` },
    { text: product.brand, link: `/produtos?filter=${product.brand}` },
    { text: product.name },
  ];


  return (
    <Layout>
      <div className="container product-view">
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </Layout>
  );
}


export default ProductViewPage;
