import React, { useState } from "react";
import { ModalFormRegister } from "../nav-home/ModalRegistration";
import { ModalRegistrerExit } from "../registration-form/modalRegistrerExit";
import './AnswerDemo.css';

export default function AnswerDemo() {
    const QuestionDemo = [
        {
          question: "¿Cuál es el animal terrestre más rápido?",
          answers: [
            { text: "Guepardo", correct: true },
            { text: "León", correct: false },
            { text: "Antílope", correct: false },
            { text: "Tigre", correct: false }
          ]
        },
        {
          question: "¿Cuál es el idioma más hablado en el mundo?",
          answers: [
           
            { text: "Español", correct: false },
            { text: "Inglés", correct: false },
            { text: "Mandarín", correct: true },
            { text: "Hindú", correct: false }
          ]
        },
        {
          question: "¿Cuál es el país con más islas en el mundo?",
          answers: [
            { text: "Filipinas", correct: false },
            { text: "Indonesia", correct: false },
            { text: "Japón", correct: false },
            { text: "Suecia", correct: true }
          ]
        },
        {
          question: "¿Cuál es la capital de Australia?",
          answers: [
            { text: "Sídney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Brisbane", correct: false }
          ]
        }
      ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [botonColor, setBotonColor] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [userName, setUserName] = useState("");

  const handleClick = (answer) => {
    setBotonColor(answer);

    setTimeout(() => {
      setBotonColor(null);
      if (currentQuestionIndex + 1 < QuestionDemo.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowRegisterModal(true); 
      }
    }, 1000);
  };

  const handleOnlyCloseForm = () => {
    setShowRegisterModal(false);
    
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
   
  };
  

  const handleSuccessfulRegistration = (name) => {
    setUserName(name); // Actualiza el estado con el nombre del usuario
    setShowRegisterModal(false); // Cierra el modal de registro
    setShowSuccessModal(true); // Abre el modal de éxito
  };


  const currentQuestion = QuestionDemo[currentQuestionIndex];

  return (
    <div className="answersContainerDemo">
      <div className="questionContainerDemo">
        <h3 className="preguntaDemo">{currentQuestion.question}</h3>
      </div>
      <div className="botonContainerDemo">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            className={`botonAswerDemo ${
              botonColor ? (answer.correct ? "correctDemo" : "incorrectDemo") : ""
            }`}
            onClick={() => handleClick(answer)}
            disabled={!!botonColor}
          >
            {answer.text}
          </button>
        ))}
      </div>

      <ModalFormRegister show={showRegisterModal} handleCloseForm={handleOnlyCloseForm}   handleShowExit={handleSuccessfulRegistration} />
      <ModalRegistrerExit show={showSuccessModal} handleCloseExit={handleCloseSuccess} userName={userName} />
    </div>
  );
}
