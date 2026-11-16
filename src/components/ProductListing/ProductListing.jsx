import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";

function ProductListing({ products, columns = 4 }) {

    if (products.length === 0) {
    return <p 
    className="product-listing__empty">Nenhum produto encontrado.</p>;
  }

    return (
         <div className="product-listing" style={{ "--columns": columns }}>
    
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