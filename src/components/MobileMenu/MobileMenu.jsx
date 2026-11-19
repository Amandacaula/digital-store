import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import Navigation from "../Navigation/Navigation";
import "./MobileMenu.css";


/* Menu lateral exibido no celular ao clicar no ícone dos 3 tracinhos.*/

function MobileMenu({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Páginas">
      <Navigation direction="column" onNavigate={onClose} />


      <div className="mobile-menu__footer">
        <Link to="/login" className="button mobile-menu__login" onClick={onClose}>
          Entrar
        </Link>
        <Link to="/cadastro" className="mobile-menu__signup" onClick={onClose}>
          Cadastre-se
        </Link>
      </div>
    </Drawer>
  );
}


export default MobileMenu;
