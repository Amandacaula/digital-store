import "./BuyBox.css";


// Separa o preço em reais e centavos: 219 -> { reais: "219", cents: "00" }
function splitPrice(value) {
  const [reais, cents] = value.toFixed(2).split(".");
  return { reais, cents };
}


/*
 * Caixa de compra: nome, preço, descrição e botão "Comprar".
 */

function BuyBox({
  name,
  category,
  brand,
  reference,
  price,
  priceDiscount,
  description,
  children,
}) {
  const hasDiscount = priceDiscount !== undefined;


  // O preço em destaque é o com desconto (quando existir)
  const mainPrice = splitPrice(hasDiscount ? priceDiscount : price);
  const oldPrice = splitPrice(price);


  return (
    <div className="buy-box">
      <h1 className="buy-box__name">{name}</h1>


      <p className="buy-box__reference">
        {category && `${category} | `}
        {brand && `${brand} | `}
        REF:{reference}
      </p>


      <div className="buy-box__prices">
        <p className="buy-box__price">
          <span className="buy-box__currency">R$</span>
          <span className="buy-box__reais">{mainPrice.reais}</span>
          <span className="buy-box__cents">,{mainPrice.cents}</span>
        </p>


        {hasDiscount && (
          <span className="buy-box__old-price">
            {oldPrice.reais},{oldPrice.cents}
          </span>
        )}
      </div>


      <div className="buy-box__description">
        <h2 className="buy-box__subtitle">Descrição do produto</h2>
        <p>{description}</p>
      </div>


      {children}


      {/* Botão apenas visual: o carrinho de compras não faz parte do projeto */}
      <button type="button" className="buy-box__buy-button">
        Comprar
      </button>
    </div>
  );
}


export default BuyBox;
