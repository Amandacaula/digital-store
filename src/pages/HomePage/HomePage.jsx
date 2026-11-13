import Layout from "../Layout/Layout";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Section from "../../components/Section/Section";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import CategoryIcon from "../../components/CategoryIcon/CategoryIcon";
import ProductListing from "../../components/ProductListing/ProductListing";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import { categories, collections, heroSlides } from "../../data/home";
import { products } from "../../data/products";
import "./HomePage.css";

const trendingProducts = products.slice(0, 8);

function HomePage() {
        return (
                <Layout>
                        <HeroBanner slides={heroSlides} />

                        <div className="container home-page">
                                <Section title="Coleções em destaque">
                                        <div className="home-page__collections">
                                                {collections.map((collection) => (
                                                        <CollectionCard
                                                                key={collection.name}
                                                                image={collection.image}
                                                                name={collection.name}
                                                                discount={collection.discount}
                                                                link={collection.link}
                                                        />
                                                ))}
                                        </div>
                                </Section>

                                <Section title="Coleções em destaque" titleAlign="center">
                                        <div className="home-page__categories">
                                                {categories.map((category) => (
                                                        <CategoryIcon
                                                                key={category.name}
                                                                name={category.name}
                                                                icon={category.icon}
                                                                link={category.link}
                                                        />
                                                ))}
                                        </div>
                                </Section>



                                <Section title="Produtos em alta" link={{ text: "Ver todos", href: "/produtos" }}>
                                        <ProductListing products={trendingProducts} />
                                </Section>
                        </div>

                        <SpecialOffer
                                image="/images/special-offer.png"
                                title="Air Jordan edição de colecionador"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                                link="/produtos?filter=Jordan"
                        />

                </Layout>

        );
}

export default HomePage;