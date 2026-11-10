import "./ProductCard.css";

function ProductCard({ image, name, price }) {
    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={image} alt={name} width="292" height="321"/>
            </div>

            <h3 className="product-card__name">{name}</h3>
           
            <div className="product-card__prices">
                <span className="product-card__price">{`R$ ${price}`}</span>
            </div>
        </div>  
    );
}

export default ProductCard;