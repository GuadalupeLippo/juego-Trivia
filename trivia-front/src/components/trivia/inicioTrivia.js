import { useEffect, useMemo, useState,useRef } from "react";
import { jwtDecode } from 'jwt-decode';
import { useLocation } from "react-router-dom";
import { APITRIVIA } from "../../API/getDataBase";
import { createGame, createRandomGame } from "../../API/getDataBase";
import Spinner from 'react-bootstrap/Spinner';
import { getCategory } from "../../API/getDataBase";
import { Answers } from "../answers/answers";
import { useAuth } from "../auth/UserAuth";
import sonidoFin from "../../assets/trivia/sonido.mp3";
import Timer from "../cards/Timer";
import FinTrivia from "./FinTrivia";
import Reloj from "./reloj";
import "./trivia.css";


function InicioTrivia() {
  const {authUser, setAuthUser} = useAuth()
  const location = useLocation();
  const logo = location.state?.logo;
  const categoryId = location.state?.categoryId;
  const playerId = location.state?.playerId;
const selectedTime = location.state?.selectedTime;
const question = useMemo(() => {
  return location.state?.question;
}, [location.state?.question]);
const difficultyId = location.state?.difficultyId;
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [showFin, setShowFin] = useState(false);
const [loading, setLoading] = useState(true);
const [score, setScore] = useState(0);
const [gameId, setGameId] = useState(null);
const [categoryDataForPoints, setCategoryDataForPoints] = useState(null);
const [gameCount, setGameCount] = useState(0);
const isGameEndedRef = useRef(false);
const isRandomGame = useMemo(() => categoryId === undefined  , [categoryId]);
console.log("isRandomGame calculado en InicioTrivia:", isRandomGame);
const [randomGameData, setRandomGameData] = useState(null);
const [loadingPoints, setLoadingPoints] = useState(true);



  useEffect(() => {
   
  if (playerId && (categoryId || categoryId === undefined)  && selectedTime && question && question.length > 0) {
     setLoading(false)
  }else {
    console.log("Hay un error al traer datos", {playerId, categoryId,  selectedTime })
  }
}, [playerId, categoryId, selectedTime, question]);
   
useEffect(() => {
  const fetchCategory = async () => {
    try {
      if (categoryId) {
        console.log("Obteniendo datos de categoría con ID:", categoryId);
        const response = await getCategory(categoryId);
        const data = await response.json();
        console.log("Datos recibidos de la categoría:", data);
        setCategoryDataForPoints(data);
      }
    } catch (error) {
      console.error("Error al obtener la categoría:", error);
    }
  };

  fetchCategory();
}, [categoryId]);

 
useEffect(() => {
  const fetchStartGame = async () => {
    if (!question || question.length === 0) {
      console.error("No se pueden iniciar partidas sin preguntas.");
      return;
    }

    if (gameId) {
      console.log("El juego ya está iniciado.");
      return;
    }

    try {
      let gameData;
      let response;
      setLoading(true);
      if (isRandomGame) {
        gameData = { playerId, difficultyId };
        response = await createRandomGame(gameData);
      } else {
        gameData = { playerId, categoryId, difficultyId };
        response = await createGame(gameData);
      }

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error en la respuesta: ${errorMessage}`);
      }

      const data = await response.json();
      setGameId(data.id);
      if (isRandomGame) {
        setRandomGameData(data); 
      }
      setLoading(false);
      setGameCount(prevCount => prevCount + 1);
      console.log(gameCount);

    } catch (error) {
      console.error("Error al crear el juego:", error);
      setLoading(false);
    }
  };

  if (!gameId) {
    fetchStartGame();
  }

}, [playerId, categoryId, difficultyId, question, gameId, gameCount, isRandomGame]);



  const handleAnswerClick = (points) => {
    console.log("Puntos recibidos:", points);
    setScore((prevScore) => {
      const newScore = prevScore + points;
      console.log("Puntaje acumulado:", newScore);
      return newScore;
    })

   if (currentQuestionIndex === question.length - 1) {
          endGame();
          if (!showFin){
          setShowFin(true); 
          const audio = new Audio(sonidoFin);
          audio.play();}
        } else {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1); 
        
        }
  
      }
    
   const handleTimeUp = () => {
        if (isGameEndedRef.current) return;
        if (!showFin){
        setShowFin(true);
        const audio = new Audio(sonidoFin);
        audio.play();}

        endGame();
      
      };
    
    const endGame = async () => { 
       if (isGameEndedRef.current || !gameId) return; 
       isGameEndedRef.current = true;

       try {
        setLoadingPoints(true);
          {
            const response = await fetch(`${APITRIVIA}/games/${gameId}/total-score`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('authATRV')}`
              },
              body: JSON.stringify({ totalScore: score })
            });
      
            if (!response.ok) {
              console.error('Error al actualizar el puntaje del juego');
              return;
            }
          }
        
          await addGameScoreToPlayer(score);
          setLoadingPoints(false);
        } catch (error) {
          console.error("Error al actualizar el puntaje:", error);
        }
      };
      


     

      const addGameScoreToPlayer = async (score) => {
        try {
          if (score) {

            const playerData = localStorage.getItem('authATRV');
            if (!playerData) {
              console.error('Token no encontrado');
              return;
            }
            
            const { token } = JSON.parse(playerData);
            const decodedToken = jwtDecode(token);
            
            const playerId = decodedToken.sub;
            if (!playerId) {
              console.error('ID de jugador no encontrado en el token');
              return;
            }
            
            console.log('ID del jugador:', playerId);
            
          
            const response = await fetch(`http://localhost:3000/player/${playerId}/score`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify({ totalScore: score }), 
            });
      
            const data = await response.json();
           
      
            
            if (response.ok) {
              console.log('Puntaje actualizado exitosamente:', data.score);
              setAuthUser(data);
            } else {
              console.error('Error al actualizar el puntaje:', data.message);
            }
          }
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      };
      
      
      
      
  
      
  const handleRestart = () => {
    setShowFin(false); 
    setCurrentQuestionIndex(0); 
    setScore(0);
    
  };

  if (loading || (!randomGameData && !question)) {
    return (
      <div className="loading">
            <p>Cargando partida</p>
            <div className="spiner">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
            </div>
      </div>
    );
  }
 
  console.log("isRandomGame enviado a Answers:", isRandomGame);
  console.log("randomGameData enviado a Answers:", randomGameData);
  
  return (
    <>
      <div className="inicioTrivia">
        <Reloj />
        <Timer selectedTime={selectedTime}  onTimeUp={handleTimeUp} />
        <img alt="logo" src={logo} className="categoria" width="100px" />
      </div>
      <Answers categoryData={question[currentQuestionIndex]} 
      categoryDataForPoints={categoryDataForPoints}
      isRandomGame={isRandomGame}
      randomGameData={randomGameData}
       onAnswerClick={handleAnswerClick} 
        currentQuestionIndex={currentQuestionIndex}
        />
      
      <FinTrivia show={showFin} 
      onHide={handleRestart}
       onRestart={handleRestart}
        questionsAnswered={currentQuestionIndex + 1 || 0}
        totalScore={score}
        playerTotalScore={authUser?.score}
        loadingPoints={loadingPoints}
       />
    </>
  );
}

export default InicioTrivia;