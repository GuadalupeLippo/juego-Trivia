import React from "react";
import Logo from "../images/logocerebritotrivia.png";
import Category from  '../images/signo-de-interrogacion.png';
import Tienda from '../images/tienda.png'
import { Link } from "react-router-dom";
import Dropdownprofile from "../DropDownProfile/Dropdownprofile";
import "../nav-home/nav-home.css";
import "../Politicas/politicas.css";
import "../DropDownProfile/DropDownProfile.css";
export function NavLoguin() {
  return (
    <div>
      <nav className="navbar fixed-botom">
        <div className="container-fluid d-flex justify-content-between">
          <Link to="/">
            <img className="logoNav" src={Logo} alt="logo pagina" width="180" />
          </Link>
          <div className="d-flex justify-content-end align-items-center">
          <Link to="/loguin">
              <button className="btn btn-lg no-style-btn me-2">
                <img src={Category} alt="categoria" width="40" />
              </button>
            </Link>
            <Link to="/store">
              <button className="btn btn-lg no-style-btn me-2">
              <img src={Tienda} alt="tienda" width="40" />
              </button>
            </Link>
            <Dropdownprofile />
          </div>
        </div>
      </nav>
    </div>
  );
}
