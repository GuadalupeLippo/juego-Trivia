import React from "react";
import "./welcome.css";
import EfectoDesencriptarTexto from "./effect";

export default function Welcome() {
  const TextoTitulo = "¡BIENVENIDO A ATRIVIATE!";

  return (
    <div className="container2">
      <div className="title1">
        <EfectoDesencriptarTexto
          text={TextoTitulo}
          mLeftInicial={700}
          transitionTime={5}
          tickCambioLetra={120}
        />
      </div>

     
    </div>
  );
}
