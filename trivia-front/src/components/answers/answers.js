import { React, useEffect, useMemo, useState } from "react";
import "./answers.css";
import ModalSuma from "./modalSuma";

export function Answers({ categoryData, onAnswerClick, categoryDataForPoints, randomGameData,isRandomGame, currentQuestionIndex}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswersCorrect, setIsAnswersCorrect] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalStyle, setModalStyle] = useState({});



  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

 
  const memoizedAnswers = useMemo(() => {
   const answers= isRandomGame ? randomGameData?.questions[currentQuestionIndex]?.answers || [] : categoryData?.answers || [];
   return shuffleArray([...answers]);
  }, [categoryData, isRandomGame, randomGameData,  currentQuestionIndex]);



  useEffect(()   => {
    setSelectedAnswer(null)
    setIsAnswersCorrect(null)
    setShowModal(false)

  }, [categoryData])

  if (!categoryData && !randomGameData) {
    return ;
  }
  
  const handleClick = (answer,event) => {
    const isCorrect = answer.value === true;
    setSelectedAnswer(answer);
    setIsAnswersCorrect(isCorrect)
    let points = 0;
    if (isCorrect) {
      points = isRandomGame ? 10 : categoryDataForPoints?.puntos || 0;
      // const buttonRect = event.target.getBoundingClientRect(); 
      const buttonRect = event.target.getBoundingClientRect();
      setModalStyle({
        position: "absolute",
        top: `${buttonRect.top + window.scrollY}px`,
        left: `${buttonRect.left + window.scrollX}px`,
        width: "auto",
        background: "transparent",
        border: "none",
      });
      setShowModal(true)

      setTimeout(() => {
        setShowModal(false);
      }, 1000);
    }
    
    setTimeout(() => {
      onAnswerClick(points); 
    }, 1000)
    }

    
  return (
    <div className="answersContainer">
      <div className="questionContainer">
      <h3 className="pregunta">  {isRandomGame ? randomGameData?.questions[currentQuestionIndex]?.description : categoryData.description}
      </h3>
      </div>
      <div className="botonContainer">
        {memoizedAnswers.map((answer, index) => (
          <button
            key={index}
            className={`botonAswer ${
              selectedAnswer ? answer === selectedAnswer ? isAnswersCorrect ? "correct" : "incorrect" : "" : ""
            }`}
            onClick={(event) => handleClick(answer, event)}
            disabled={!!selectedAnswer}
          >
            {answer.description}
          </button>
        ))} 
       
      </div>
      {showModal && (<ModalSuma onHide={() => setShowModal(false)}  style={modalStyle}/>)}
    </div>
  );
}
