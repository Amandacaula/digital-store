import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";
import { MenuIcon, SearchIcon } from "../Icons/Icons";
import miniCart from "../../assets/mini-cart.svg";
import "./Header.css";

const CART_ITEMS = 2;


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
            <Link to="/cadastro" className="header_signup">
              Cadastre-se
            </Link>
            <Link to="/login" className="header_login">
              Entrar
            </Link>
          </div>
          <button
            className={`header__icon-button header__search-button ${isSearchOpen ? "is-active" : ""}`}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Abrir busca"
          >
            <SearchIcon />
          </button>

          <div className="header_cart" aria-label={`Carrinho com ${CART_ITEMS} itens`}>
            <img src={miniCart} alt="Carrinho de compras" />
            <span className="header_cart-count">{CART_ITEMS}</span>
          </div>
        </div>
        {/*Busca que aparece abaixo do cabeçalho no cel*/}
        {isSearchOpen && <SearchBar className="header__search-mobile" />}


        <div className="header_navigation">
          <Navigation />
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;  