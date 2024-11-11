import { useEffect, useMemo, useState } from "react";
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
  const logo = location.state?.logo;
  const categoryId = location.state?.categoryId;
  const playerId = location.state?.playerId;
const selectedTime = location.state?.selectedTime;
const question = useMemo(() => {
  return location.state?.question || [];
}, [location.state?.question]);
const difficultyId = location.state?.difficultyId;
// console.log(difficultyId);
// console.log("Selected Time:", selectedTime);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [timeRemaining, setTimeRemaining] = useState(selectedTime);
  const [showModalTimeUp, setShowModalTimeUp] = useState(false);

  const [showFin, setShowFin] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [question, setQuestion] = useState([]);



  useEffect(() => {
   
  if (playerId && categoryId   && selectedTime  && question.length > 0) {
     setLoading(false)
  }else {
    console.log("Hay un error al traer datos", {playerId, categoryId,  selectedTime, question })
  }
}, [playerId, categoryId, selectedTime, question]);
   
  

 
useEffect(() => {
  const fetchGame = async () => {
    try {
      const gameData = {playerId, categoryId, difficultyId}
      const response = await createGame(gameData);
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error en la respuesta: ${errorMessage}`);
      }
      const data = await response.json();
      // setQuestion(data.question)
      // setTimeRemaining(selectedTime);
       setLoading(false);
    
    } catch (error) {
      console.error("Error al crear game:", error);
    } 
  };

  fetchGame();

}, [playerId, categoryId, difficultyId, selectedTime]);



  const handleAnswerClick = (answer) => {
   if (currentQuestionIndex === question.length - 1) {
          setShowModalTimeUp(true); 
          const audio = new Audio(sonidoFin);
          audio.play();
        } else {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1); 
        
        }
      }
    
 

  const handleRestart = () => {
    setShowModalTimeUp(false); // Cerrar modal cuando se reinicia
    setCurrentQuestionIndex(0); // Reiniciar la trivia
   
    setShowFin(false); // Cerrar pantalla final
  };
  if (loading) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <div className="inicioTrivia">
        <Reloj />
        <Timer selectedTime={selectedTime}  onTimeUp={() => setShowModalTimeUp(true)} />
        <img alt="logo" src={logo} className="categoria" width="100px" />
      </div>
      <Answers categoryData={question[currentQuestionIndex]} onAnswerClick={handleAnswerClick} />
      
      <TimeUpModal show={showModalTimeUp} onHide={handleRestart}  />
      <FinTrivia show={showFin} onHide={handleRestart} onRestart={handleRestart} />
    </>
  );
}

export default InicioTrivia;