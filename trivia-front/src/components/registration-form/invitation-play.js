import React from "react";
import Logo from "../images/logocerebritotrivia.png";

import "./Invitation.css";

export function Invitation() {
  return (
    <div className="container-invitation">
      <div className="invitation">
        <img src={Logo} alt="logo pagina" className="logo" />
      </div>
      <div className="container-title">
        <h3>¿Estas preparado? <br/>Te desafiamos a responder algunas de nuestras preguntas...</h3>
      </div>
    </div>
  );
}
