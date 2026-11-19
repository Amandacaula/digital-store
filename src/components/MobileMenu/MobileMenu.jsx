import { Link, NavLink } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import Navigation from "../Navigation/Navigation";
import { useAuth } from "../../hooks/useAuth";
import { accountLinks } from "../../data/account";
import "./MobileMenu.css";


function MobileMenu({ isOpen, onClose, onLogout }) {
  const { user } = useAuth();

  const accountOnlyLinks = accountLinks.filter((item) => item.link !== "/meus-pedidos");

  function handleLogout() {
    onClose();
    onLogout();
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title={user ? `Olá ${user.name.split(" ")[0]}` : "Páginas"}>
      {user && (
        <>
          <ul className="mobile-menu__account">
            {accountOnlyLinks.map((item) => (
              <li key={item.link}>
                <NavLink to={item.link} className="mobile-menu__account-link" onClick={onClose}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <h2 className="mobile-menu__title">Páginas</h2>
        </>
      )}

      <Navigation direction="column" onNavigate={onClose} />


      <div className="mobile-menu__footer">
        {user ? (
          <button type="button" className="button mobile-menu__login" onClick={handleLogout}>
            Sair
          </button>
        ) : (
          <>
            <Link to="/login" className="button mobile-menu__login" onClick={onClose}>
              Entrar
            </Link>
            <Link to="/cadastro" className="mobile-menu__signup" onClick={onClose}>
              Cadastre-se
            </Link>
          </>
        )}
      </div>
    </Drawer>
  );
}


export default MobileMenu;
