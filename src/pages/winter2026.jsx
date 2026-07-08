import { useState, useEffect } from "react";
import Articulo from "../components/Articulo";
import "./styles/Productos.css";


function Winter2026() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then((data) => data.json())
      .then((resultado) =>
        setArticulos(resultado.filter((articulo) => articulo.coleccion === "winter26"))
      )
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

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