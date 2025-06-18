import React from "react";
import "./Productos.css";
import Cards from "../card/Cards";

function Productos() {
  return (
    <div className="producto_contenedor" >
      <div className="producto_buscador">
        <form className="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="producto_card">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default Productos;
