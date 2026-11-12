import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";

function ProductListing({ products }) {
    return (
        <div className="product-listing">
            {products.map((product) => (
                <ProductCard 
                key={product.id} 
                id={product.id}
                image={product.image} 
                name={product.name} 
                type={product.type}
                price={product.price} 
                priceDiscount={product.priceDiscount}
                badge={product.badge}
                />
            ))}
        </div>
    );
}

export default ProductListing;