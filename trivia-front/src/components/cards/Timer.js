import React, {  useEffect } from "react";
import "./Timer.css";
import sonido from "./game-over.mp3";

const Timer = ({ seconds,onTimeUp, reset, timeLeft }) => {
  // const [timeLeft, setTimeLeft] = useState(seconds);
  const porcentaje = (timeLeft / seconds) * 100;

  // useEffect(() => {
  //   setTimeLeft(seconds);
  // }, [seconds, reset]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {}, 1000);

      return () => clearTimeout(timerId);
    } else {
      const audio = new Audio(sonido);
      audio.play();
      onTimeUp(); 
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
    // <div className="timer">
    //   <h1>
    //     <strong> {timeLeft}</strong>
    //   </h1>
    // </div>
    <div className="timer-bar-container">
    <div
      className={`timer-bar ${aplicarClase()} `}
      style={{
        width: `${porcentaje}%`, 
        
        transition: "width 1s linear", // Animación suave de la barra
      }}
    ></div>
  </div>
  );
};

export default Timer;
