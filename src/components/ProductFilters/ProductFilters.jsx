import FilterGroup from "../FilterGroup/FilterGroup";
import { filterGroups } from "../../data/filters";
import "./ProductFilters.css";


/*
 * Todos os grupos de filtro da página de produtos.
 */

function ProductFilters({ selectedFilters, onChange, onClear }) {
  const hasSelectedFilters = Object.values(selectedFilters).some((values) => values.length > 0);

  return (
    <div className="product-filters">
      {filterGroups.map((group) => (
        <FilterGroup
          key={group.field}
          title={group.title}
          inputType={group.inputType}
          options={group.options}
          name={group.field}
          selectedValues={selectedFilters[group.field]}
          onChange={(value, checked) => onChange(group.field, group.inputType, value, checked)}
        />
      ))}
        {hasSelectedFilters && (
        <button className="product-filters__clear" onClick={onClear}>
          Limpar filtros
        </button>
      )}
    

    </div>
  );
}


export default ProductFilters;
