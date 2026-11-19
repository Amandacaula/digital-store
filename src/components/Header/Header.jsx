import { startTransition, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";
import MiniCart from "../MiniCart/MiniCart";
import { MenuIcon, SearchIcon } from "../Icons/Icons";
import miniCart from "../../assets/mini-cart.svg";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import "./Header.css";


function Header({ simple = false }) {
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartAreaRef = useRef(null);

  useEffect(() => {
    if (!isCartOpen) return;

    function handleClickOutside(event) {
      if (!cartAreaRef.current.contains(event.target)) setIsCartOpen(false);
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsCartOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen]);

  function handleLogout() {
    startTransition(() => {
      navigate("/");
      logout();
    });
  }

  if (simple) {
    return (
      <header className="header header--simple">
        <div className="container header__simple">
          <Logo />
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header_top">
          <button
            className="header__icon-button header__menu-button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <MenuIcon />
          </button>

          <Logo />

          <SearchBar className="header_search" />
          <div className="header_actions">
            {user ? (
              <>
                <Link to="/minhas-informacoes" className="header_signup">
                  Olá, {user.name.split(" ")[0]}
                </Link>
                <button type="button" className="header_login" onClick={handleLogout}>
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link to="/cadastro" className="header_signup">
                  Cadastre-se
                </Link>
                <Link to="/login" className="header_login">
                  Entrar
                </Link>
              </>
            )}
          </div>
          <button
            className={`header__icon-button header__search-button ${isSearchOpen ? "is-active" : ""}`}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Abrir busca"
          >
            <SearchIcon />
          </button>

          <div className="header_cart-area" ref={cartAreaRef}>
            <button
              type="button"
              className="header_cart"
              onClick={() => setIsCartOpen(!isCartOpen)}
              aria-label={`Carrinho com ${itemCount} itens`}
              aria-expanded={isCartOpen}
              aria-controls="mini-cart"
            >
              <img src={miniCart} alt="" />
              {itemCount > 0 && <span className="header_cart-count">{itemCount}</span>}
            </button>

            {isCartOpen && <MiniCart id="mini-cart" onClose={() => setIsCartOpen(false)} />}
          </div>
        </div>
        {/*Busca que aparece abaixo do cabeçalho no cel*/}
        {isSearchOpen && <SearchBar className="header__search-mobile" />}


        <div className="header_navigation">
          <Navigation />
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onLogout={handleLogout} />
    </header>
  );
}

export default Header;  