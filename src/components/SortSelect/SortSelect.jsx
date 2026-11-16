import "./SortSelect.css";


// Opções de ordenação. O "value" é usado na função sortProducts
const SORT_OPTIONS = [
  { text: "mais relevantes", value: "relevance" },
  { text: "Menor preço", value: "lowest" },
  { text: "Maior preço", value: "highest" },
];


/*
 * Campo "Ordenar por" da página de produtos.
 */
 
function SortSelect({ value, onChange }) {
  return (
    <label className="sort-select">
      <span className="sort-select__label">Ordenar por:</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </label>
  );
}


export default SortSelect;
