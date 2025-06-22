import React from "react";
import "./Cards.css";

function Cards({ producto }) {

  return (
    <div className="card card_contenedor">
      <div className="card_contenedor_img">
        <img src={producto.imagen} className="card-img-top" alt="..." />
        <p>{producto.marca}</p>
      </div>
      <div className="card-title card_contenedor_card px-1 py-1 mb-0 pb-2">
        <p className="text-center fw-semibold text-uppercase">{producto.nombre}</p>
        <div className="m-0 p-0 mb-1">
          <label htmlFor="producto">Typo</label>
          <input
            value={producto.tipo}
            readOnly
            className="w-100 px-1 m-0 text-center"
            type="text"
            name="producto"
            id="producto"
          />
        </div>
        <div className="m-0 p-0 mb-1">
          <label htmlFor="nombre">Cantidad</label>
          <input
          value={producto.cantidad}
            readOnly
            className="w-100 px-1 m-0 text-center"
            type="text"
            name="nombre"
            id="nombre"
          />
        </div>
       
        <div className="container mb-2">
          <div className="input-group">
            <input
            value={producto.precio}
              type="text"
              readOnly
              placeholder="00.00"
              className="form-control text-center fw-semibold"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <span className="input-group-text">LPS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
