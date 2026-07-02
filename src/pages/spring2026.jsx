import Articulo from "../components/Articulo";

function Spring2026() {
  const articulos = [
    {
      id: 1,
      nombre: "Campera Ligera",
      precio: 70000,
      imagen: "/imagenes/campera-ligera.jpg",
    },
    {
      id: 2,
      nombre: "Polo Manga Corta",
      precio: 45000,
      imagen: "/imagenes/polo.jpg",
    },
    {
      id: 3,
      nombre: "Pantalón Corto",
      precio: 55000,
      imagen: "/imagenes/short.jpg",
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

export default Spring2026;
