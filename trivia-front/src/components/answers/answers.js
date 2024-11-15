import {React, useEffect, useMemo, useState} from "react";
import "./answers.css";

export function Answers({ categoryData, onAnswerClick, categoryDataForPoints }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);


  const memoizedAnswers = useMemo(() => {
    return categoryData?.answers || [];
  }, [categoryData]);

  useEffect(()   => {
    setSelectedAnswer(null)
  }, [categoryData])

  if (!categoryData) {
    return ;
  }

  const handleClick = (answer) => {
    console.log("Answer selected:", answer);
    setSelectedAnswer(answer);
    console.log("categoryData:", categoryData);
      if (answer.value ===true) {
        const points= categoryDataForPoints?.puntos 
        console.log("Respuesta correcta, puntos:", points);
        onAnswerClick(points); 
      } else {
        console.log("Respuesta incorrecta, puntos: 0");
        onAnswerClick(0); // Si la respuesta es incorrecta, no pasar puntos
      }
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
              selectedAnswer ? (answer.value === true ? "correct" : "incorrect") : ""
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
