import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <ul className="nav nav-underline header_contenedor">
      <li className="nav-item">
        <Link className="" to={"/"}>
           <img className="header_img" src="../img/pulperia.jpg" alt="" />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/producto"}>
          Productos
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/asercade"}>
          Aserca de
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-danger" to={"/"}>
          LogOut
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled fw-bold" aria-disabled="true">
          EDTecnology.com
        </a>
      </li>
    </ul>
  );
}

export default Header;
