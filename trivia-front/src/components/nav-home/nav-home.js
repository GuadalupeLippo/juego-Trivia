import React, { useState } from "react";
import Logo from "../images/logocerebritotrivia.png";
import { Link } from "react-router-dom";
import "../nav-home/nav-home.css";
import ButtonLoginNav from "./ButtonLoginNav";
import { ButtonRegistration } from "../registration-form/ButtonRegistration";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Navhome() {
  const [menuLogin, setMenuLogin] = useState(false);

  const toggleMenu = () => {
    setMenuLogin(!menuLogin); // Alterna la visibilidad del menú
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/">
            <img className="logoNav" src={Logo} alt="logo página" width="150" />
          </Link>

         
          <button className="navbar-toggler" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>

        
          <div className={`menu-items ${menuLogin ? "show" : ""}`}>
            <ButtonRegistration />
            <ButtonLoginNav />
          </div>
        </div>
      </nav>
    </div>
  );
}
