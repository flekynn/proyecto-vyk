import Articulo from "../components/Articulo";

function Productos() {
  const articulos = [
    {
      id: 1,
      nombre: "Campera Negra",
      precio: 80000,
      imagen: "/imagenes/campera.jpg",
    },
    {
      id: 2,
      nombre: "Buzo Gris",
      precio: 55000,
      imagen: "/imagenes/buzo.jpg",
    },
    {
      id: 3,
      nombre: "Pantalón Cargo",
      precio: 70000,
      imagen: "/imagenes/cargo.jpg",
    },
  ];

  return (
    <div className="contenedor-articulos">
      {articulos.map((articulo) => (
        <Articulo
          key={articulo.id}
          nombre={articulo.nombre}
          precio={articulo.precio}
          imagen={articulo.imagen}
        />
      ))}
    </div>
  );
}

export default Productos;