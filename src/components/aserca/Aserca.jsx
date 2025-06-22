import React from "react";
import "./Aserca.css";
import { Link } from "react-router-dom";

function Aserca() {
  return (
    <div className="d-flex justify-content-center align-items-center asercade_contenedor">
      <div className="w-75">
        <h2 className="text-uppercase text-center">Aserca de</h2>
        <p>
          Aplicacion para verifica precios de productos en tiempo real, ayudando
          a múltiples tiendas para que encuentres los precios de cada producto.
          Ahorra dinero y tiempo, buscando y esperando precios. descubre precios
          nuevos y descuentos, historial de precios y calificaciones para
          agilizar el movimiento de tu empresa, todo en un solo lugar. Ideal
          para electrónicos, moda, hogar y más. ¡ Si deseas una pagina Web y
          toma el control de tus compras o ventas escribenos para darte mas
          detalles y costos de paginas online y de aplicaciones web. !
        </p>
        <br />
        <a href="https://edtecnology.com" target="_blank" className="fw-semibold fst-italic text-danger-emphasis text-center">EDTECNOLOGY.COM</a>
      </div>
    </div>
  );
}

export default Aserca;
