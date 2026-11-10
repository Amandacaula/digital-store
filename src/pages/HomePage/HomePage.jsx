import Layout from "../Layout/Layout";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import { products } from "../../data/products";
import "./HomePage.css";

function HomePage() {
        return (
                <Layout>
                        <h1>Home</h1>
                        <div className="container home-page">
                                <Section title="Produtos em alta">
                                        <ProductListing products={products} />
                                </Section>
                        </div>
                </Layout>

        );
}

export default HomePage;