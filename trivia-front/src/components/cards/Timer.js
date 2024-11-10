import React, {  useEffect, useState } from "react";
import "./Timer.css";
import sonido from "./game-over.mp3";


const Timer = ({selectedTime ,onTimeUp, reset }) => {
  const [timeLeft, setTimeLeft] = useState(selectedTime);
  const porcentaje = (timeLeft / selectedTime) * 100;

  useEffect(() => {
    setTimeLeft(selectedTime);
    console.log(selectedTime)
  }, [selectedTime, reset]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft((prev) => prev - 1 ), 1000);

      return () => clearTimeout(timerId);
    } else {
      const audio = new Audio(sonido);
      audio.play();
      
    }
  }, [timeLeft, onTimeUp]);

  const aplicarClase = () => {
    if(porcentaje > 50){
      return "buenTiempo";
    }else if(porcentaje > 25){
      return "tiempoMedio";
    }
    else {
      return "tiempoLimitado";
     
    }
  };

  return (
 
    <div className="timer-bar-container">
    <div
      className={`timer-bar ${aplicarClase()} `}
      style={{
        width: `${porcentaje}%`, 
        
        transition: "width 1s linear", 
      }}
    ></div>
  </div>
  );
};

export default Timer;
