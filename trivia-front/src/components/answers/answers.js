import {React, useEffect, useMemo, useState} from "react";
import "./answers.css";

export function Answers({ categoryData, onAnswerClick, categoryDataForPoints }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswersCorrect, setIsAnswersCorrect] = useState(null)

  const memoizedAnswers = useMemo(() => {
    return categoryData?.answers || [];
  }, [categoryData]);

  useEffect(()   => {
    setSelectedAnswer(null)
    setIsAnswersCorrect(null)
  }, [categoryData])

  if (!categoryData) {
    return null;
  }

  const handleClick = (answer) => {
    const isCorrect = answer.value === true;
    console.log("Answer selected:", answer);
    setSelectedAnswer(answer);
    setIsAnswersCorrect(isCorrect)
    
     
        
        const points= isCorrect ?  categoryDataForPoints?.puntos || 0 : 0;
        console.log("Respuesta correcta, puntos:", points);
       
       setTimeout(() => {
        onAnswerClick(points); 
    }, 1000)
    }

  return (
    <div className="answersContainer">
      <div className="questionContainer">
      <h3 className="pregunta">{categoryData.description}</h3>
      </div>
      <div className="botonContainer">
        {memoizedAnswers.map((answer, index) => (
          <button
            key={index}
            className={`botonAswer ${
              selectedAnswer ? answer === selectedAnswer ? isAnswersCorrect ? "correct" : "incorrect" : "" : ""
            }`}
            onClick={() => handleClick(answer)}
            disabled={!!selectedAnswer}
          >
            {answer.description}
          </button>
        ))}
      </div>
    </div>
  );
}
