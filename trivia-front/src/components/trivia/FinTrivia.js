import "./FinTrivia.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import cerebroGanador from "../../assets/trivia/cerebrito-ganador4.png";
import circle from "../../assets/trivia/circle2.jpg";
import { useAuth } from "../auth/UserAuth";
import React from 'react';

export function FinTrivia({show, onHide, onRestart,  questionsAnswered, totalScore,  playerTotalScore, loadingPoints, loading, isProcessing }) {
  const { authUser } = useAuth();
  const login = useNavigate();
  const store = useNavigate();


  const handleNavigate = () => {
    login(`/login/${authUser?.id}`);
  };
  const handleNavigateStore = () => {
    store(`/Store/${authUser?.id}`);
  };

  return (
    <>
      

      <Modal
        show={show}
        onHide={onHide}
        className="color_bg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop= 'static'
      >
        <Modal.Header className="top_modal">
          <div className="title_modal">
           <h5 className="winner">Tiempo cumplido...</h5> 
            
          </div>
        </Modal.Header>
        <Modal.Body className="body-finTrivia">
          <div className="all_results"> 
            <div className="result_container">
              <img className="circle" src={circle} alt="circulo"/>
              <p className="win-score">¡Ganaste <br/>  {totalScore} <br/> puntos! </p>
              
            </div>
            <div className="result_container">
              <img className="circle" src={circle} alt="circulo"/> 
              <p className="trivia_results">Preguntas  <br/>respondidas</p>
              <p className="info-game"> {questionsAnswered} </p> 
              
            </div>
          </div>
         
        </Modal.Body>
        <img className="cerebrito-win" src={cerebroGanador} alt="logo pagina" width="150" />
        
            <h5 className="playertotalscore">
            Puntaje actual:   
        {loadingPoints ? (
          <div className="loading-point">
            <span className="loading-text">Cargando tus puntos...</span>
          </div>
        ) : (
             <span className="score">   {playerTotalScore}</span>
        )}
        </h5>

        <div className="principal_button">
        < Button onClick={onRestart} disabled={isProcessing || loading} className="btn1">
          {loading ? "Cargando..." : "Nueva Partida"}
        </Button>
        </div>
        <div className="other_buttons">
        <Button className="btn2" variant="primary" onClick={handleNavigate}>
          Otra categoria
        </Button>
        <Button className="btn2" variant="primary" onClick={handleNavigateStore}>
          Canjear puntos
        </Button>
        </div>
      </Modal>
    </>
  );
}

export default FinTrivia;
