function Articulo({imagen, nombre, precio}) {
    return (
        <div className="articulo">
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <button>Comprar</button>
        </div>
    );
}

export default Articulo