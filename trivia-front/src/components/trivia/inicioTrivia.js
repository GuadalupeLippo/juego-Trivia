import { useState, useEffect } from "react";
import Reloj from "./reloj";
import geografia from "./geografia 1.png";

import "./trivia.css";
import Timer from "../cards/Timer";
import { useLocation } from "react-router-dom";
import { Answers } from "../answers/answers";

const triviaQuestions = [
  {
    question: "¿Quién pintó 'La Noche Estrellada'?",
    answers: [
      { text: "Vincent van Gogh", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false },
      { text: "Salvador Dalí", correct: false },
    ],
  },
  {
    question: "¿En qué país se encuentra la pintura rupestre de Lascaux?",
    answers: [
      { text: "Francia", correct: true },
      { text: "España", correct: false },
      { text: "Italia", correct: false },
      { text: "Portugal", correct: false },
    ],
  },
  {
    question: "¿Cuál es el movimiento artístico asociado con Jackson Pollock?",
    answers: [
      { text: "Expresionismo abstracto", correct: true },
      { text: "Impresionismo", correct: false },
      { text: "Surrealismo", correct: false },
      { text: "Cubismo", correct: false },
    ],
  },
  {
    question: "¿Quién esculpió el 'David'?",
    answers: [
      { text: "Miguel Ángel", correct: true },
      { text: "Donatello", correct: false },
      { text: "Leonardo da Vinci", correct: false },
      { text: "Rafael", correct: false },
    ],
  },
];

function InicioTrivia() {
  const location = useLocation();
  const selectedTime = location.state?.selectedTime || 15;
  // const currentQuestion = triviaQuestions[0];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(selectedTime);
  const [isFinish, setFinishTrivia] = useState(false);
 
// const nextQuestion  = (selectedTime, currentQuestion) =>{
//   if(selectedTime > 0){
//      return currentQuestion.length - 1;
//   }
//  }
useEffect(() => {
  const timer = setInterval(() => {
    setTimeRemaining((prevTime) => Math.max(prevTime - 1, 0));
  }, 1000);

  return () => clearInterval(timer);
}, []);



const handleAnswerClick = (answer) => {
  if (timeRemaining > 0) {
    setTimeout(() => {
      if (currentQuestionIndex === triviaQuestions.length - 1) {
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
      <Answers questionData={triviaQuestions[currentQuestionIndex]} onAnswerClick={handleAnswerClick}   />
      
    </>
  );
}
export default InicioTrivia;
