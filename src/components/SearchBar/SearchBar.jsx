import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchIcon } from "../Icons/Icons";
import "./SearchBar.css"

function SearchBar({ className = "" }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const currentFilter = searchParams.get("filter") || "";


    //Guardar oq esta sendo digitado no campo:
    const [search, setSearch] = useState(currentFilter);

    // Se a URL mudar (ex.: clicou num link do rodapé), o campo é atualizado
    useEffect(() => {
        setSearch(currentFilter);
    }, [currentFilter]);


    //Evitar q o formulario recarregue a pág
    function handleSubmit(event) {
        event.preventDefault();

        const text = search.trim();
        if (text) {
            navigate(`/products?filter=${encodeURIComponent(text)}`);
        } else {
            navigate(`/products`);
        }
    }
    return (
        <form className={`search-bar ${className}`} onSubmit={handleSubmit} role="search">
            <label htmlFor="search-input" className="sr-only"> Pesquisar Produto
            </label>
            <input
                id="search-input"
                type="text"
                placeholder="Pesquisar produto..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit" aria-label="Buscar">
                <SearchIcon />
            </button>
        </form>
    );

}

export default SearchBar;