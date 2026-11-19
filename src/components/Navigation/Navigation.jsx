import {NavLink, useLocation} from "react-router-dom";
import { mainLinks } from "../../data/navigation";
import "./Navigation.css";

const product_routes = ["/produtos", "/products", "/product/"];
//NAvegação principal do site, com links para as principais páginas
  function Navigation({ direction = "row", onNavigate}) {
    const { pathname } = useLocation();

    function isActive(link) {
        if (link ==="/produtos"){
            return product_routes.some((route) => pathname.startsWith(route));
        }
        return pathname === link;
    }
 return (
    <nav className={`navigation navigation--${direction}`} aria-label="Navegação principal">
      <ul>
        {mainLinks.map((item) => (
          <li key={item.link}>

            <NavLink
              to={item.link}
              className={() =>
                isActive(item.link)
                  ? "navigation__link active"
                  : "navigation__link"
              }
              onClick={onNavigate}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;  