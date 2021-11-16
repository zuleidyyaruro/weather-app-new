import './Header.styles.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1><Link to="/">Weather App</Link></h1>
        </header>
    )
}

export default Header;