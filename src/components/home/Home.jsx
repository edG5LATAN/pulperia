import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home_contenedor">
      <div className="home_contenedor_login p-3 ">
        <h2 className="text-uppercase fw-semibold text-center">Pulperia Sauceda</h2>
        <p>
          Ingresa tus datos para acceder a precios 
        </p>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              ingresa correo valido.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
         
          <button type="submit" class="btn btn-primary">
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
