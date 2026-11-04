import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_top">
          <Logo />
          
          <SearchBar className="header_search" />
        </div>

        <div className="header_navigation">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;  