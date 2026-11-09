import {Link} from "react-router-dom";
import "./Information.css";

function Information({title, informations}) {
  return (
    <div className="information">
        <h3 className="information__title">{title}</h3>

        <ul className="information__list">
            {informations.map((information) => (
                <li key={information.text}>
                    <Link to={information.link}>{information.text}</Link>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Information;
