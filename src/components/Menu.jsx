import "./styles/Menu.css";
import { Link } from "react-router-dom"

function Menu() {
    return (
        <nav>
            <ul>
                <Link to='/'>INICIO</Link>
                <div className="dropdown">
                    <span>COLECCIONES</span>
                    <div className="dropdown-menu">
                        <Link to='/winter2026'>WINTER 2026</Link>
                        <Link to='/spring2026'>SPRING 2026</Link>
                    </div>
                </div>
                <Link to='/Productos'>WINTER 2026</Link>
                <Link to='/Productos'>SPRING 2026</Link>
                {/* <Link to='pages/Productos'>PRODUCTOS</Link>
                <Link to='pages/Productos'>PANTS</Link>
                <Link to='pages/Productos'>T-SHIRTS</Link>
                <Link to='pages/Productos'>HOODIES</Link> */}
                <Link to='/Contacto'>CONTACTO</Link>
                <Link to='/FAQ'>FAQ</Link>
            </ul>
        </nav>
    )
}


export default Menu