import Articulo from "../components/Articulo";

function Winter2026() {
  const articulos = [
    {
      id: 1,
      nombre: "Abrigo Invierno",
      precio: 95000,
      imagen: "/imagenes/abrigo.jpg",
    },
    {
      id: 2,
      nombre: "Suéter Térmico",
      precio: 65000,
      imagen: "/imagenes/sueter.jpg",
    },
    {
      id: 3,
      nombre: "Pantalón Térmico",
      precio: 75000,
      imagen: "/imagenes/pantalon-termico.jpg",
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

export default Winter2026;
