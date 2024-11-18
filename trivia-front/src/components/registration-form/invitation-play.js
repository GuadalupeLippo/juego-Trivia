import React from "react";
import Logo from "../../assets/home/registro-exitoso.png";

import "./Invitation.css";

export function Invitation() {
  return (
    <div className="container-invitation sol">
      <div className="invitation">
        <img src={Logo} alt="logo pagina" width="300" className="logo-invitation" />
      </div>
      <div className="container-title">
        <h3 className="title2">¿Estas preparado? </h3>
        <h2 className="title2">ponte a prueba con algunas preguntas</h2>
      </div>
    </div>
  );
}
