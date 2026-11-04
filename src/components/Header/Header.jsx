import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Navigation from "../Navigation/Navigation";
import miniCart from "../../assets/mini-cart.svg";
import "./Header.css";

const CART_ITEMS= 2;


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_top">
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
          <div className="header_cart" aria-label={`Carrinho com ${CART_ITEMS} itens`}>
            <img src={miniCart} alt="Carrinho de compras" />
            <span className="header_cart-count">{CART_ITEMS}</span>
          </div>
        </div>

        <div className="header_navigation">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;  