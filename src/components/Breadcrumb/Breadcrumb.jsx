import { Link } from "react-router-dom";
import "./Breadcrumb.css";



function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Você está em">
      <ol>
        {items.map((item) => (
          <li key={item.text}>
            {item.link ? <Link to={item.link}>{item.text}</Link> : <span aria-current="page">{item.text}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}


export default Breadcrumb;
