import React from "react";
import Logo from "../images/logocerebritotrivia.png";
import { Link } from "react-router-dom";
import "../nav-home/nav-home.css";
import { BtnLoguin } from "../form-loguin/Btn-loguin";
import "../Politicas/politicas.css";

export function Navhome() {
  return (
    <div>
      <nav className="navbar fixed-botom">
        <div className="container-fluid">
          <Link to="/">
            <img className="logoNav" src={Logo} alt="logo pagina" width="150" />
          </Link>
          <BtnLoguin />
        </div>
      </nav>
    </div>
  );
}
