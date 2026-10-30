import Logo from "../Logo/Logo";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_top">
          <Logo />
        </div>
      </div>
    </header>
  );
}

export default Header;  