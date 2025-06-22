import React, { useState } from "react";
import "./Productos.css";
import Cards from "../card/Cards";
import { datos } from "../service/datos/Datos";
import { data } from "react-router-dom";

function Productos() {
  const [info, setinfo] = useState(datos);
  const [pro, setpro] = useState("");

  const buscarProductos = (texto) => {
    const textoBusqueda = texto.toLowerCase();
    const newArrary=datos.filter(
        (producto) =>
          producto.marca.toLowerCase().includes(textoBusqueda) ||
          producto.nombre.toLowerCase().includes(textoBusqueda)
      )
    setinfo(newArrary)
    console.log(info)
    setpro("")
  };

  return (
    <div className="producto_contenedor">
      <div className="producto_buscador">
        <div className="d-flex producto_form" role="search">
          <input
            value={pro}
            onChange={(e) => setpro(e.target.value)}
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            onClick={()=>{
              buscarProductos(pro)}

            }
            class="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
      <div className="producto_card">
        {info == [] ? (
          <>cargando...</>
        ) : (
          <>
            {info.map((res, index) => {
              return <Cards key={index} producto={res} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Productos;
