import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createGame } from "../../API/getDataBase";
import { Answers } from "../answers/answers";
import sonidoFin from "../cards/sonido.mp3";
import Timer from "../cards/Timer";
import TimeUpModal from "../cards/TimeUpModal";
import FinTrivia from "./FinTrivia";
import Reloj from "./reloj";
import "./trivia.css";

function InicioTrivia() {
  const location = useLocation();
  const selectedTime = location.state?.selectedTime || 15;
  const difficultyId = location.state?.difficultyId;
  const logo = location.state?.imagenesLogo;
  const categoryId = location.state?.categoryId;
  const playerId = location.state?.playerId;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(selectedTime);
  const [showModalTimeUp, setShowModalTimeUp] = useState(false);
  const [reset, setReset] = useState(false);
  const [showFin, setShowFin] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setTimeRemaining(selectedTime);
    setReset((prev) =>!prev)
  }, [currentQuestionIndex, selectedTime]);

  useEffect(() => {
    const gameData = {
      playerId,       // ID del jugador
      categoryId,     // ID de la categoría
      difficultyId,
    }
  
  console.log(gameData)
  console.log("playerId:", playerId);
    console.log("categoryId:", categoryId);
    console.log("difficultyId:", difficultyId);


  if (!playerId || !categoryId || !difficultyId) {
    console.error("Error: Uno o más valores de gameData están vacíos o son inválidos.");
    return; // Salir del useEffect si hay datos inválidos
  }
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await createGame(gameData);
      if (!response.ok) {
        throw new Error('Error al crear la partida');
      }
      const data = await response.json();
      setQuestions(data.questions); // Guarda las preguntas de la partida en el estado
    } catch (error) {
      console.error("Error creating game:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [categoryId, difficultyId, playerId]);


  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowModalTimeUp(true); 
    }
  }, [timeRemaining]);

  const handleAnswerClick = (answer) => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        if (currentQuestionIndex === questions.length - 1) {
          setShowFin(true); 
          const audio = new Audio(sonidoFin);
          audio.play();
        } else {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1); 
        }
      }, 1000);
    }
  };

  const handleRestart = () => {
    setShowModalTimeUp(false); // Cerrar modal cuando se reinicia
    setCurrentQuestionIndex(0); // Reiniciar la trivia
    setTimeRemaining(selectedTime); // Reiniciar el tiempo
    setReset((prev) => !prev); // Reiniciar el temporizador
    setShowFin(false); // Cerrar pantalla final
  };
  
  return (
    <>
      <div className="inicioTrivia">
        <Reloj />
        <Timer seconds={selectedTime} timeLeft={timeRemaining} onTimeUp={() => setShowModalTimeUp(true)} reset={reset} />
        <img alt="logo" src={logo} className="categoria" width="100px" />
      </div>
      <Answers questionData={questions[currentQuestionIndex]} onAnswerClick={handleAnswerClick} />
      
      <TimeUpModal show={showModalTimeUp} onHide={handleRestart} onRestart={handleRestart} />
      <FinTrivia show={showFin} onHide={handleRestart} onRestart={handleRestart} />
    </>
  );
}

export default InicioTrivia;