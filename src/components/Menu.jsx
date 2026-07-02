import "./styles/Menu.css";
import { Link } from "react-router-dom";
import HeaderActions from "./HeaderActions";

function Menu() {
    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    <li>
                        <div className="dropdown">
                            <span>COLECCIONES</span>
                            <div className="dropdown-menu">
                                <Link to="/winter2026">WINTER 2026</Link>
                                <Link to="/spring2026">SPRING 2026</Link>
                            </div>
                        </div>
                    </li>
                    <li><Link to="/productos">PRODUCTOS</Link></li>
                    <li><Link to="/contacto">CONTACTO</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
                <HeaderActions />
            </div>
        </nav>
    );
}

export default Menu
