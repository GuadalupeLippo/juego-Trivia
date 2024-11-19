import {React, useEffect, useMemo, useState} from "react";
import "./answers.css";

export function Answers({ categoryData, onAnswerClick, categoryDataForPoints, randomGameData,isRandomGame, currentQuestionIndex }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswersCorrect, setIsAnswersCorrect] = useState(null)
  console.log ("gameDatarandom:",randomGameData)

 
  const memoizedAnswers = useMemo(() => {
    return isRandomGame ? randomGameData?.questions[currentQuestionIndex]?.answers || [] : categoryData?.answers || [];
  }, [categoryData, isRandomGame, randomGameData,  currentQuestionIndex]);



  useEffect(()   => {
    setSelectedAnswer(null)
    setIsAnswersCorrect(null)
  }, [categoryData])

  if (!categoryData && !randomGameData) {
    return ;
  }
  
  const handleClick = (answer) => {
    const isCorrect = answer.value === true;
    console.log("Answer selected:", answer);
    setSelectedAnswer(answer);
    setIsAnswersCorrect(isCorrect)
    let points = 0;
    if (isCorrect) {
      points = isRandomGame ? 10 : categoryDataForPoints?.puntos || 0;
    } 
    console.log("Puntos calculados:", points);
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
