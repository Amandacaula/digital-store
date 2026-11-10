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
                <div className="footer_content">
                    <div className="footer_about">
                        <Logo variant="footer" />
                        <p className="footer_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>

                        <ul className="footer_social">
                            {socialLinks.map((social) => (
                                <li key={social.name}>
                                    <a href={social.link} target="_blank" rel="noreferrer" arial-label={social.name}>
                                        <img src={socialIcons[social.name]} alt="" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Information title="Informação" informations={footerInformations} />
                    <Information title="Categorias" informations={footerCategories} />

                    <div className="footer_contact">
                        <Information title="Contato" informations={footerContact} />
                    </div>
                </div>


                    <hr className="footer_divider" />
                    <p className="footer_copyright"> &copy; {currentYear} Digital Store.</p>

                </div>
        </footer>
    );
}

export default Footer;