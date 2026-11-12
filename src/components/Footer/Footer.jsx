import Logo from "../Logo/Logo";
import Information from "../Information/Information";
import { footerCategories, footerContact, footerInformations, socialLinks } from "../../data/navigation";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import "./Footer.css";

//Relaciona cada rede social com seu respectivo ícone
const socialIcons = {
    Facebook: facebookIcon,
    Instagram: instagramIcon,
    Twitter: twitterIcon,
};

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__about">
                        <Logo variant="footer" />
                        <p className="footer__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>

                        <ul className="footer__social">
                            {socialLinks.map((social) => (
                                <li key={social.name}>
                                    <a href={social.link} target="_blank" rel="noreferrer" aria-label={social.name}>
                                        <img src={socialIcons[social.name]} alt="" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Information title="Informação" informations={footerInformations} />
                    <Information title="Categorias" informations={footerCategories} />

                    <div className="footer__contact">
                        <Information title="Contato" informations={footerContact} />
                    </div>
                </div>


                    <hr className="footer__divider" />
                    <p className="footer__copyright"> &copy; {currentYear} Digital Store.</p>

                </div>
        </footer>
    );
}

export default Footer;