import { Link } from "react-router-dom";
import "./SpecialOffer.css";

function SpecialOffer({ image, title, description, link }) {
  return (
    <section className="special-offer">
      <div className="container special-offer__content">
        <img src={image} alt={title} className="special-offer__image" />


        <div className="special-offer__text">
          <span className="special-offer__subtitle">Oferta especial</span>
          <h2 className="special-offer__title">{title}</h2>
          <p className="special-offer__description">{description}</p>
          <Link to={link} className="button special-offer__button">
            Ver Oferta
          </Link>
        </div>
      </div>
    </section>
  );
}


export default SpecialOffer;
