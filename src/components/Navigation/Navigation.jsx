import {NavLink} from "react-router-dom";
import { mainLinks } from "../../data/navigation";
import "./Navigation.css";

//NAvegação principal do site, com links para as principais páginas
  function Navigation() {
  return (
    <nav className="navigation" aria-label="Navegação principal">
        <ul>
            {mainLinks.map((item) => (
                <li key={item.link}>
                    <NavLink to={item.link} className="navigation__link">
                        {item.text}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
    );
}

export default Navigation;  