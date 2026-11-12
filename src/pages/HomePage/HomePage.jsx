import Layout from "../Layout/Layout";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import { products } from "../../data/products";
import "./HomePage.css";

const trendingProducts = products.slice(0, 8);

function HomePage() {
        return (
                <Layout>
                        
                        <div className="container home-page">
                                <Section title="Produtos em alta" link={{ text: "Ver todos", href: "/produtos" }}>
                                        <ProductListing products={trendingProducts} />
                                </Section>
                        </div>
                </Layout>

        );
}

export default HomePage;