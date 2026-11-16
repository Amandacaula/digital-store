import "./FilterGroup.css";


/*
 * Grupo de opções de filtro (checkbox ou radio) com um título.
 */
function FilterGroup({ title, inputType, options, name, selectedValues = [], onChange }) {
  return (
    <fieldset className="filter-group">
      <legend className="filter-group__title">{title}</legend>


      {options.map((option) => {
        const value = option.value ?? option.text;


        return (
          <label key={value} className="filter-group__option">
            <input
              type={inputType}
              name={name}
              value={value}
              checked={selectedValues.includes(value)}
              onChange={(event) => onChange(value, event.target.checked)}
            />
            {option.text}
          </label>
        );
      })}
    </fieldset>
  );
}


export default FilterGroup;
