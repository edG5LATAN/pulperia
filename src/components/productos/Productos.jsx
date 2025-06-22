import React, { useState } from "react";
import "./Productos.css";
import Cards from "../card/Cards";
import { datos } from "../service/datos/Datos";
import { data } from "react-router-dom";

function Productos() {

  const [info,setinfo]=useState(datos)


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
        {
          info==[]
          ?
          <>
          cargando...
          </>
          :
          <>
          {
            info.map((res,index)=>{
              return<Cards key={index} producto={res}/>
            })
          }
          </>
          
        }
      </div>
    </div>
  );
}

export default Productos;
