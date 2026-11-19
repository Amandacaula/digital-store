import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import Layout from "../Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Gallery from "../../components/Gallery/Gallery";
import BuyBox from "../../components/BuyBox/BuyBox";
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import MessagePage from "../MessagePage/MessagePage";
import { getProductById, products } from "../../data/products";
import "./ProductViewPage.css";


/*
 * Página de visualização do produto (rota "/product/:id").
 * O ":id" da URL diz qual produto deve ser exibido.
 */
function ProductViewPage() {
    const { id } = useParams();
    const product = getProductById(id);
    const navigate = useNavigate();
    const { addItem } = useCart();

    const [choice, setChoice] = useState({ productId: null, size: null, color: null, message: null });
    const currentChoice = choice.productId === product?.id ? choice : { size: null, color: null, message: null };

    function choose(field, value) {
        setChoice({ ...currentChoice, productId: product.id, [field]: value, message: null });
    }

    function handleBuy() {
        const missing = !currentChoice.size ? "um tamanho" : !currentChoice.color ? "uma cor" : null;

        if (missing) {
            setChoice({ ...currentChoice, productId: product.id, message: `Escolha ${missing} antes de comprar.` });
            return;
        }

        addItem({ productId: product.id, size: currentChoice.size, color: currentChoice.color });
        navigate("/carrinho");
    }


    // Se o id não existir, mostra a página de "não encontrado"
    if (!product) {
        return <MessagePage title="Produto não encontrado" text="O produto que você procura não existe." />;
    }

    // Produtos relacionados: os 4 primeiros que não são o produto atual
    const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4);


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
                <div className="product-view__main">
                    {/* "key" faz a galeria reiniciar na 1ª imagem ao trocar de produto */}
                    <Gallery
                        key={product.id}
                        className="product-view__gallery"
                        images={product.images}
                        width="700px"
                        height="570px"
                        radius="4px"
                        showThumbs
                    />

                    <BuyBox
                        name={product.name}
                        category={product.category}
                        brand={product.brand}
                        reference={product.reference}
                        stars={product.stars}
                        rating={product.rating}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                        description={product.description}
                        onBuy={handleBuy}
                        message={currentChoice.message}
                    >
                        <div>
                            <h2 className="buy-box__option-title">Tamanho</h2>
                            <ProductOptions key={`size-${product.id}`} options={product.sizes} shape="square" type="text" radius="4px" onChange={(size) => choose("size", size)} />
                        </div>


                        <div>
                            <h2 className="buy-box__option-title">Cor</h2>
                            <ProductOptions key={`color-${product.id}`} options={product.colors} shape="circle" type="color" onChange={(color) => choose("color", color)} />

                        </div>
                    </BuyBox>
                </div>
                <Section title="Produtos Relacionados" link={{ text: "Ver todos", href: "/produtos" }}>
                    <ProductListing products={relatedProducts} />
                </Section>


            </div>
        </Layout>
    );
}


export default ProductViewPage;
