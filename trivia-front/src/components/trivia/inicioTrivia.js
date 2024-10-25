import { useState, useEffect } from "react";
import Reloj from "./reloj";
import "./trivia.css";
import Timer from "../cards/Timer";
import { useLocation } from "react-router-dom";
import { Answers } from "../answers/answers";
import TimeUpModal from "../cards/TimeUpModal";
import FinTrivia from "./FinTrivia";
import sonidoFin from "../cards/sonido.mp3";


function InicioTrivia() {
  const location = useLocation();
  const selectedTime = location.state?.selectedTime || 15;
  const question = location.state?.questions || [];
  const logo = location.state?.imagenesLogo;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(selectedTime);
  const [showModalTimeUp, setShowModalTimeUp] = useState(false);
  const [reset, setReset] = useState(false);
  const [showFin, setShowFin] = useState(false);
  

  useEffect(() => {
    setTimeRemaining(selectedTime);
    setReset((prev) =>!prev)
  }, [currentQuestionIndex, selectedTime]);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowModalTimeUp(true); 
    }
  }, [timeRemaining]);

  const handleAnswerClick = (answer) => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        if (currentQuestionIndex === question.length - 1) {
          setShowFin(true); 
          const audio = new Audio(sonidoFin);
          audio.play();
        } else {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1); 
        }
      }, 1000);
    }
  };

  const handleRestart = () => {
    setShowModalTimeUp(false); // Cerrar modal cuando se reinicia
    setCurrentQuestionIndex(0); // Reiniciar la trivia
    setTimeRemaining(selectedTime); // Reiniciar el tiempo
    setReset((prev) => !prev); // Reiniciar el temporizador
    setShowFin(false); // Cerrar pantalla final
  };

  return (
    <>
      <div className="inicioTrivia">
        <Reloj />
        <Timer seconds={selectedTime} timeLeft={timeRemaining} onTimeUp={() => setShowModalTimeUp(true)} reset={reset} />
        <img alt="logo" src={logo} className="categoria" width="100px" />
      </div>
      <Answers questionData={question[currentQuestionIndex]} onAnswerClick={handleAnswerClick} />
      
      <TimeUpModal show={showModalTimeUp} onHide={handleRestart} onRestart={handleRestart} />
      <FinTrivia show={showFin} onHide={handleRestart} onRestart={handleRestart} />
    </>
  );
}

export default InicioTrivia;