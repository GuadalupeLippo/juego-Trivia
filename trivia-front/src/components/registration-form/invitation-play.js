import React from "react";
import Logo from "../images/logocerebritotrivia.png";
import { FormRegistration } from "./Registration-form";
import "./Invitation.css";

export function Invitation() {
  return (
    <div className="container-invitation">
      <div className="invitation">
        <img src={Logo} alt="logo pagina" className="logo" />
      </div>
      <div className="form">
        <FormRegistration />
      </div>
    </div>
  );
}
