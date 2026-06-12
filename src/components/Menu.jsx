import { Link } from "react-router-dom"

function Menu() {
    return (
        <nav>
            <ul>
                <Link to='/'>INICIO</Link>
                <Link to='pages/Colecciones'>COLECCIONES</Link>
                <Link to='pages/Productos'>PRODUCTOS</Link>
                <Link to='pages/Contacto'>CONTACTO</Link>
                <Link to='pages/FAQ'>FAQ</Link>
            </ul>
        </nav>
    )
}


export default Menu