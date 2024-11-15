import React, {  useEffect, useState } from "react";
import "./Timer.css";


const Timer = ({selectedTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(Math.floor(selectedTime / 1000));
  const porcentaje = (timeLeft / Math.floor(selectedTime/ 1000)) * 100;



useEffect(() => {
    setTimeLeft(Math.floor(selectedTime / 1000));
    console.log("selectime en timer:" , selectedTime)
  }, [selectedTime]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);

      return () => clearTimeout(timerId);
    } else {
      onTimeUp(); 
    
    }
  }, [timeLeft,onTimeUp]);

  
 
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
