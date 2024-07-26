import {React, useState} from "react";
import "./answers.css";

export function Answers({ questionData, onAnswerClick }) {
  const [botonColor, setbotonColor] = useState(null);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [isFinish, setFinishTrivia] = useState(false);
  if (!questionData) {
    return <div>Loading...</div>;
  }

  const handleClick = (answer) => {
    setbotonColor(answer);
    onAnswerClick(answer);
  //   if (currentQuestion === questionData.length - 1) {
  //     setFinishTrivia(true);
  //   } else {
  //     setCurrentQuestion(currentQuestion + 1);
  //   }
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
