import { useState, useEffect } from "react";
import Reloj from "./reloj";
import geografia from "./geografia 1.png";

import "./trivia.css";
import Timer from "../cards/Timer";
import { useLocation } from "react-router-dom";
import { Answers } from "../answers/answers";





function InicioTrivia() {
  const location = useLocation();
  const selectedTime = location.state?.selectedTime || 15;
  const question = location.state?.questions || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(selectedTime);
  const [isFinish, setFinishTrivia] = useState(false);
 

useEffect(() => {
  const timer = setInterval(() => {
    setTimeRemaining((prevTime) => Math.max(prevTime - 1, 0));
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

if (isFinish) {
  return <div>Finalizaste la Trivia</div>
}
 
  return (
    <>
      <div className="inicioTrivia">
        <Reloj />

        <Timer seconds={timeRemaining} />

       
        <img
          alt="logoGeografia"
          src={geografia}
          className="geografia"
          width="100px"
        />
      </div> 
      <Answers questionData={question[currentQuestionIndex]} onAnswerClick={handleAnswerClick}   />
      
    </>
  );
}
export default InicioTrivia;
