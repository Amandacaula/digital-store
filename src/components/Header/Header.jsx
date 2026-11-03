import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_top">
          <Logo />
        </div>
        <div className="header_navigation">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;  