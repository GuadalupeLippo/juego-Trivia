import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

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
const questions = useMemo(() => {
  return location.state?.questions || [];
}, [location.state?.questions]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(selectedTime);
  const [showModalTimeUp, setShowModalTimeUp] = useState(false);
  const [reset, setReset] = useState(false);
  const [showFin, setShowFin] = useState(false);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
   
  if (playerId && categoryId && questions.length > 0 && selectedTime ) {
     setLoading(false)
  }else {
    console.log("Hay un error al traer datos")
  }
}, [playerId, categoryId, questions,selectedTime ]);
   
  
  console.log("playerId:", playerId);
    console.log("categoryId:", categoryId);
 

  // const fetchData = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await createGame(gameData);
  //     if (!response.ok) {
  //       throw new Error('Error al crear la partida');
  //     }
  //     const data = await response.json();
  //     setQuestions(data.questions);// Guarda las preguntas de la partida en el estado
  //     setTimeRemaining(data.time) 
  //   } catch (error) {
  //     console.error("Error creating game:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

//   fetchData();
// }, [categoryId, difficultyId, playerId]);


// useEffect(() => {
//   const fetchCategoryData = async () => {
//     try {
//       const response = await getCategory();
//       if (!response.ok) {
//         throw new Error("Error al obtener la categoría");
//       }
//       const data = await response.json();
//       setCategoryData(data); // Guarda los datos de la categoría
//     } catch (error) {
//       console.error("Error fetching category:", error);
//     }
//   };

//   fetchCategoryData();
// }, []);

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
   
     
        if (currentQuestionIndex === questions.length - 1) {
          setShowFin(true); 
          const audio = new Audio(sonidoFin);
          audio.play();
        } else {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1); 
         setTimeRemaining(selectedTime)
        }
      }
    
 

  const handleRestart = () => {
    setShowModalTimeUp(false); // Cerrar modal cuando se reinicia
    setCurrentQuestionIndex(0); // Reiniciar la trivia
    setTimeRemaining(selectedTime); // Reiniciar el tiempo
    setReset((prev) => !prev); // Reiniciar el temporizador
    setShowFin(false); // Cerrar pantalla final
  };
  if (loading) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <div className="inicioTrivia">
        <Reloj />
        <Timer seconds={timeRemaining} timeLeft={timeRemaining} onTimeUp={() => setShowModalTimeUp(true)} reset={reset} />
        <img alt="logo" src={logo} className="categoria" width="100px" />
      </div>
      <Answers categoryData={questions[currentQuestionIndex]} onAnswerClick={handleAnswerClick} />
      
      <TimeUpModal show={showModalTimeUp} onHide={handleRestart} onRestart={handleRestart} />
      <FinTrivia show={showFin} onHide={handleRestart} onRestart={handleRestart} />
    </>
  );
}

export default InicioTrivia;