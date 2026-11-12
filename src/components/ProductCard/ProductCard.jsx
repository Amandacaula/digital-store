import {Link} from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id ,image, name, type, price, priceDiscount, badge}) {
    const hasDiscount= priceDiscount !== undefined;
    return (
        <Link to ={`/product/${id}`} className="product-card">
            <div className="product-card__image">
                {badge && <span className="badge product-card__badge">{badge}</span>}
                <img src={image} alt={name} width="292" height="321"/>
            </div>
            
            {type && <span className="product-card__type">{type}</span>}
            <h3 className="product-card__name">{name}</h3>
           
            <div className="product-card__prices">
                <span className={hasDiscount ? "product-card__price--old" : "product-card__price"}>
                    ${price}
                </span>
                {hasDiscount && <span className="product-card__price">${priceDiscount}</span>}
            </div>
        </Link> 
    );
}

export default ProductCard;