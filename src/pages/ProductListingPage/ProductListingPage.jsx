import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import SortSelect from "../../components/SortSelect/SortSelect";
import { products } from "../../data/products";
import { matchesFilters, matchesSearch, sortProducts } from "../../utils/productFilters";
import "./ProductListingPage";

const EMPTY_FILTERS = {
  brand: [],
  category: [],
  gender: [],
  condition: [],
};


/*
 * Página de listagem de produtos (rotas "/produtos" e "/products").
 * Lê o texto da busca na URL (?filter=...), aplica filtros e ordenação.
 */
function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("filter") || "";
  const [selectedFilters, setSelectedFilters] = useState(EMPTY_FILTERS);
  const [sortOrder, setSortOrder] = useState("relevance");



  // Marca ou desmarca uma opção de filtro
  function handleFilterChange(field, inputType, value, checked) {
    let newValues;


    if (inputType === "radio") {

      newValues = [value];
    } else if (checked) {
      // Checkbox marcado: adiciona o valor à lista
      newValues = [...selectedFilters[field], value];
    } else {
      // Checkbox desmarcado: remove o valor da lista
      newValues = selectedFilters[field].filter((item) => item !== value);
    }


    setSelectedFilters({ ...selectedFilters, [field]: newValues });
  }

  function clearFilters() {
    setSelectedFilters(EMPTY_FILTERS);
  }



  // A lista exibida é calculada a cada renderização a partir do estado atual
  const filteredProducts = products.filter((product) => matchesSearch(product, search) && matchesFilters(product, selectedFilters)
  );
  const visibleProducts = sortProducts(filteredProducts, sortOrder);



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
          <div className="listing-page__toolbar">
            <SortSelect value={sortOrder} onChange={setSortOrder} />
          </div>


          <div className="listing-page__body">
            <aside className="listing-page__sidebar">
              <h2 className="listing-page__sidebar-title">Filtrar por</h2>
              <ProductFilters
                selectedFilters={selectedFilters}
                onChange={handleFilterChange}
                onClear={clearFilters}
              />

            </aside>


            <ProductListing products={visibleProducts} columns={3} />
          </div>

        </Section>
      </div>
    </Layout>
  );
}


export default ProductListingPage;
