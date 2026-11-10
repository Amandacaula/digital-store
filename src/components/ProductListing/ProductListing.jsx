import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";

function ProductListing({ products }) {
    return (
        <div className="product-listing">
            {products.map((product) => (
                <ProductCard key={product.id} 
                image={product.image} 
                name={product.name} 
                price={product.price} />
            ))}
        </div>
    );
}

export default ProductListing;