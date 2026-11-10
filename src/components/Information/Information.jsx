import {Link} from "react-router-dom";
import "./Information.css";

function isExternal(link) {
    return /^(https?:|tel:|mailto:)/.test(link);
}

//Coluna de informações do footer.
function Information({title, informations}) {
  return (
    <div className="information">
        <h3 className="information__title">{title}</h3>

        <ul className="information__list">
            {informations.map((information) => (
                <li key={information.text}>
                    {isExternal(information.link) ? (
                        <a href={information.link} target="_blank" rel="noreferrer">
                            {information.text}
                        </a>
                    ) : (
                        <Link to={information.link}>
                            {information.text}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Information;
