import {React, useEffect, useState} from "react";
import "./answers.css";

export function Answers({ questionData, onAnswerClick }) {
  const [botonColor, setbotonColor] = useState(null);

  useEffect(()   => {
    setbotonColor(null)
  }, [questionData])

  if (!questionData) {
    return ;
  }

  const handleClick = (answer) => {
    setbotonColor(answer);
    onAnswerClick(answer);
 
  };

  return (
    <div className="answersContainer">
      <h3 className="pregunta">{questionData.question}</h3>
      <div className="botonContainer">
        {questionData.answers.map((answer, index) => (
          <button
            key={index}
            className={`botonAswer ${
              botonColor ? (answer.correct ? "correct" : "incorrect") : ""
            }`}
            onClick={() => handleClick(answer)}
            disabled={!!botonColor}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
