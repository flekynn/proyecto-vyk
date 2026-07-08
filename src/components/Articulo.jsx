import "./styles/Articulo.css";
function Articulo({imagen, nombre, precio}) {
    return (
        <div className="articulo">
    <img src={imagen} alt={nombre} />
    <h3>{nombre}</h3>
    <p>${precio}</p>
    <div className="botones">
        <button className="Compra">Comprar</button>
        <button className="Carrito">🛒</button>
    </div>
</div>
    );
}

export default Articulo