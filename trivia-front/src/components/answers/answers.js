import {React, useEffect, useMemo, useState} from "react";
import "./answers.css";

export function Answers({ categoryData, onAnswerClick }) {
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
    setSelectedAnswer(answer);
    onAnswerClick(answer);
 
 
  };

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
              selectedAnswer ? (answer.correct ? "correct" : "incorrect") : ""
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
