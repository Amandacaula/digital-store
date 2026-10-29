import {Link} from 'react-router-dom';
import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';
import './Logo.css';



function Logo({variant = 'header'}) {
    const image = variant === 'footer' ? logoFooter : logoHeader;
    return (
        <Link to="/" className="logo">
        <img src={image} alt="Digital-Store" className="logo" width="253" height="44" />
        </Link>
    );
}

export default Logo;