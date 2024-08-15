import React from "react";
import Logo from "../images/logocerebritotrivia.png";
import { Link } from "react-router-dom";
import "../nav-home/nav-home.css";
import ButtonLoguinNav from "./ButtonLoguinNav";
import { ButtonRegistration } from "../registration-form/ButtonRegistration";
import "../Politicas/politicas.css";

export function Navhome() {
  return (
    <div>
      <nav className="navbar fixed-botom">
        <div className="container-fluid">
          <Link to="/">
            <img className="logoNav" src={Logo} alt="logo pagina" width="150" />
          </Link>
          <div className="d-flex justify-content-end align-items-center">
            <ButtonRegistration />
            <ButtonLoguinNav />
          </div>
        </div>
      </nav>
    </div>
  );
}
