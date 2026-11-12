import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../Icons/Icons";
import "./Section.css";

function Section({ title, titleAlign = "left", link, className = "", children }) {
    return (
        <section className={`section ${className}`}>
            <div className={`section__header section__header--${titleAlign}`}>
                <h2 className="section__title">{title}</h2>
                {link && (
                    <Link to={link.href} className="section__link">
                        {link.text}
                        <ArrowRightIcon />
                    </Link>
                )}

            </div>
            {children}
        </section>
    );
}

export default Section;