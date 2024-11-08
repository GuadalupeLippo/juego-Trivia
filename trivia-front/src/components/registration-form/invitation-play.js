import React from "react";
import Logo from "../images/registro-exitoso.png";

import "./Invitation.css";

export function Invitation() {
  return (
    <div className="container-invitation sol">
      <div className="invitation">
        <img src={Logo} alt="logo pagina" width="300" />
      </div>
      <div className="container-title">
        <h3 className="title2">¿Estas preparado? </h3>
        <h2 className="title2">Jugá y divertite respondiendo preguntas</h2>
      </div>
    </div>
  );
}
