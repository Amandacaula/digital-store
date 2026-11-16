// Deixa o texto em minúsculas e sem acentos ("Tênis" -> "tenis")
function normalize(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Verifica se o produto combina com o texto digitado na busca
export function matchesSearch(product, search) {
  if (!search) return true;

  const searchableText = [product.name, product.type, product.brand, product.category].join(" ");
  return normalize(searchableText).includes(normalize(search));
}
/*
 * Verifica se o produto atende aos filtros marcados.
 * Um grupo sem nada marcado não filtra nada.
 */
export function matchesFilters(product, selectedFilters) {
  return Object.entries(selectedFilters).every(([field, values]) => {
    return values.length === 0 || values.includes(product[field]);
  });
}

