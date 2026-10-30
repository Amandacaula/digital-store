import Logo from "../Logo/Logo";    
import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
              <Logo variant="footer" />
                    <hr className="footer_divider" />
                    <p className="footer_copyright"> &copy; {currentYear} Digital Store.</p>
                
            </div>
        </footer>
    );
}

export default Footer;