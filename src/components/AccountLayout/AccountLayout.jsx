import { NavLink } from "react-router-dom";
import { accountLinks } from "../../data/account";
import "./AccountLayout.css";

function AccountLayout({ children }) {
  return (
    <div className="container account-layout">
      <nav className="account-layout__menu" aria-label="Minha conta">
        <ul>
          {accountLinks.map((item) => (
            <li key={item.link}>
              <NavLink to={item.link} className="account-layout__link">
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="account-layout__content">{children}</div>
    </div>
  );
}

export default AccountLayout;
