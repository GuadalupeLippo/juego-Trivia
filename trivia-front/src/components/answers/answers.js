import {React, useEffect, useMemo, useState} from "react";
import correct from '../../assets/trivia/positiveChoise.mp3';
import incorrect from '../../assets/trivia/negativeChoise.mp3'
import "./answers.css";

export function Answers({ categoryData, onAnswerClick, categoryDataForPoints, randomGameData,isRandomGame, currentQuestionIndex }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswersCorrect, setIsAnswersCorrect] = useState(null)

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
  }, [categoryData])

  if (!categoryData && !randomGameData) {
    return ;
  }
  
  const handleClick = (answer) => {
    const isCorrect = answer.value === true;
    setSelectedAnswer(answer);
    setIsAnswersCorrect(isCorrect)
    let points = 0;

    if (isCorrect) {
      points = isRandomGame ? 10 : categoryDataForPoints?.puntos || 0;
      const correctAudio= new Audio(correct)
      correctAudio.play()

    } else {
      const incorrectAudio= new Audio(incorrect)
      incorrectAudio.play()
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
