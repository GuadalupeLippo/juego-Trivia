import React, { useState } from "react";
import { ModalFormRegister } from "../nav-home/ModalRegistration";
import { ModalRegistrerExit } from "../registration-form/modalRegistrerExit";
import correct from '../../assets/trivia/positiveChoise.mp3';
import incorrect from '../../assets/trivia/negativeChoise.mp3';
import dingIdea from '../../assets/login/ding-idea.mp3'
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
          question: "¿Cuál es la duración de un partido de futbol profesional?",
          answers: [
            { text: "120 minutos", correct: false },
            { text: "45 minutos", correct: false },
            { text: "80 minutos", correct: false },
            { text: "90 minutos", correct: true }
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
        },
        {
          question: "¿Quien pintó La Mona Lisa?",
          answers: [
            { text: "Claudio Monet", correct: false },
            { text: "Leonardo Da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Diego Rivera", correct: false }
          ]
        }
      ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [botonColor, setBotonColor] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [userName, setUserName] = useState("");

  const handleClick = (answer) => {
    
    const isAnswersCorrect = answer.correct === true;
    const correctAudio = new Audio(correct)
    const incorrectAudio = new Audio(incorrect)

    isAnswersCorrect? correctAudio.play() : incorrectAudio.play();

    setBotonColor(answer);
    setTimeout(() => {
      setBotonColor(null);
      if (currentQuestionIndex + 1 < QuestionDemo.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowRegisterModal(true); 
        const audio = new Audio(dingIdea);
        audio.play()
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
    setUserName(name); 
    setShowRegisterModal(false);
    setShowSuccessModal(true); 
  };


  const currentQuestion = QuestionDemo[currentQuestionIndex];

  return (
    <div className="answersContainerDemo ">
      <div className="questionContainerDemo ">
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
