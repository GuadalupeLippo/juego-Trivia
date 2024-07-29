import { useState, useEffect } from "react";
import Reloj from "./reloj";

import "./trivia.css";
import Timer from "../cards/Timer";
import { useLocation } from "react-router-dom";
import { Answers } from "../answers/answers";
import TimeUpModal from "../cards/TimeUpModal";

function InicioTrivia() {
  const location = useLocation();
  const selectedTime = location.state?.selectedTime || 15;
  const question = location.state?.questions || [];
  const logo = location.state?.imagenesLogo;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(selectedTime);
  const [isFinish, setFinishTrivia] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          setShowModal(true);
        }
        return Math.max(prevTime - 1, 0);
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswerClick = (answer) => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        if (currentQuestionIndex === question.length - 1) {
          setFinishTrivia(true);
        } else {
          setCurrentQuestionIndex((currentQuestion) => currentQuestion + 1);
          setTimeRemaining(selectedTime);
        }
      }, 1000);
    }
  };

  const handleRestart = () => {
    setShowModal(false);
    setCurrentQuestionIndex(0);
    setTimeRemaining(selectedTime);
    setFinishTrivia(false);
    setReset((prev) => !prev);
  };

  const handleTimeUp = () => {
    setShowModal(true); // Mostrar el modal cuando el tiempo se agote
  };

  if (isFinish) {
    return <div>Finalizaste la Trivia</div>;
  }

  return (
    <>
      <div className="inicioTrivia">
        <Reloj />

        <Timer seconds={timeRemaining} onTimeUp={handleTimeUp} reset={reset} />

        <img alt="logo" src={logo} className="categoria" width="100px" />
      </div>
      <Answers
        questionData={question[currentQuestionIndex]}
        onAnswerClick={handleAnswerClick}
      />
      <TimeUpModal
        show={showModal}
        onHide={handleRestart}
        onRestart={handleRestart}
        handl
      />
    </>
  );
}
export default InicioTrivia;
