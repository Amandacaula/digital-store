import { Link } from "react-router-dom";
import "./CollectionCard.css";


function CollectionCard({ image, name, discount, link }) {
  return (
    <article className="collection-card">
      <img src={image} alt={name} className="collection-card__image" />
      <span className="badge collection-card__badge">{discount}</span>
      <Link to={link} className="collection-card__button">
        Comprar
      </Link>
    </article>
  );
}


export default CollectionCard;
