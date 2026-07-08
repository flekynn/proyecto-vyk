import { useSearchParams } from "react-router-dom";
import Articulo from "../components/Articulo";
import "./styles/Productos.css";

import { useState, useEffect } from "react";

function Productos() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("busca") || "";

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then((data) => data.json())
      .then((resultado) => setArticulos(resultado))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  const articulosFiltrados = searchTerm
    ? articulos.filter((articulo) =>
        articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : articulos;

  return (
    <div className="contenedor-articulos">
      {searchTerm && (
        <div style={{ gridColumn: "1 / -1", marginBottom: "20px", textAlign: "center" }}>
          <p>Resultados de búsqueda para: <strong>{searchTerm}</strong></p>
          <p>{articulosFiltrados.length} producto(s) encontrado(s)</p>
        </div>
      )}
      {articulosFiltrados.length > 0 ? (
        articulosFiltrados.map((articulo) => (
          <Articulo
            key={articulo.id}
            nombre={articulo.nombre}
            precio={articulo.precio}
            imagen={articulo.imagen}
          />
        ))
      ) : (
        <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  );
}

export default Productos;