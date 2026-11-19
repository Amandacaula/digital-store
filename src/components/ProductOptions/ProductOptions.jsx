import { useState } from "react";
import "./ProductOptions.css";


/*
 * Lista de variações do produto (tamanhos ou cores) para a pessoa escolher.
 */

function ProductOptions({ options, shape = "square", type = "text", radius = "0px", onChange }) {
  // Opção escolhida (null = nenhuma ainda)
  const [selectedOption, setSelectedOption] = useState(null);


  return (
    <div className="product-options">
      {options.map((option) => {
        const isSelected = option === selectedOption;


        // Estilos que dependem das propriedades recebidas
        const style = {
          borderRadius: shape === "square" ? radius : "50%",
          backgroundColor: type === "color" ? option : undefined,
        };


        return (
          <button
            key={option}
            type="button"
            className={`product-options__item product-options__item--${shape} product-options__item--${type} ${isSelected ? "is-selected" : ""}`}
            style={style}
            onClick={() => {
              setSelectedOption(option);
              onChange?.(option);
            }}
            aria-pressed={isSelected}
            aria-label={type === "color" ? `Cor ${option}` : `Tamanho ${option}`}
          >
            {type === "text" && option}
          </button>
        );
      })}
    </div>
  );
}


export default ProductOptions;
