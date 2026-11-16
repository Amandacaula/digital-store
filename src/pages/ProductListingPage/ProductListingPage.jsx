import { useSearchParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import { products } from "../../data/products";
import { matchesSearch } from "../../utils/productFilters";
import "./ProductListingPage";


/*
 * Página de listagem de produtos (rotas "/produtos" e "/products").
 * Lê o texto da busca na URL (?filter=...), aplica filtros e ordenação.
 */
function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("filter") || "";


  // A lista exibida é calculada a cada renderização a partir do estado atual
  const visibleProducts = products.filter((product) => matchesSearch(product, search));


  const productCountText = `${visibleProducts.length} ${visibleProducts.length === 1 ? "produto" : "produtos"}`;
  const title = (
    <>
      <strong>{search ? `Resultados para “${search}”` : "Todos os produtos"}</strong>
      <span className="listing-page__count"> - {productCountText}</span>
    </>
  );


  return (
    <Layout>
      <div className="container listing-page">
        <Section title={title} className="listing-page__section">
          <ProductListing products={visibleProducts} columns={3} />
        </Section>
      </div>
    </Layout>
  );
}


export default ProductListingPage;
