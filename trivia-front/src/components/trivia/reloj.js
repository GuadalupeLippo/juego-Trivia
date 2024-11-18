import React from "react";
import iconoreloj from "../../assets/trivia/iconoreloj.png";

import "./reloj.css";
function Reloj() {
  return (
    <img
      alt="reloj"
      src={iconoreloj}
      className="rotate-infinitely"
      width="100px"
      height="100px"
    />
  );
}
export default Reloj;
