
import CartWidget from "../../common/CartWidget";
import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
    return <div className="navbar">
        <Link to="/"><img className="logo" src="https://motos.honda.com.ar/assets/honda-motos-logo-8228287956be08ac306e59b11dfcfe9e.png" alt="logo" /> </Link>
        <ul >
            <Link to="/"> <li>Todas</li> </Link>
            <Link to="/category/Supersport"> <li>Supersport</li> </Link>
            <Link to="/category/Offroad"> <li>Offroad</li> </Link>
            <Link to="/category/Naked"> <li>Naked</li> </Link>
            <Link to="/category/Touring"> <li>Touring</li> </Link>
        </ul>
        <div >
            <Link to="/cart">
                <CartWidget />
            </Link>
        </div>
    </div>
}
export default Navbar;

