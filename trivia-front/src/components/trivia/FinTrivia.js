import "./FinTrivia.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import cerebroGanador from "../images/cerebrito-ganador.jpg";
import circle from "./images/circle2.jpg";
import { useAuth } from "../auth/UserAuth";


export function FinTrivia({show, onHide, onRestart,  questionsAnswered, totalScore,  playerTotalScore }) {
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
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        className="color_bg"
        centered
      >
        <Modal.Header className="top_modal">
          <div className="title_modal">
           <h5 className="winner">Tiempo cumplido...</h5> 
           <h3 className="title_shine"> ¡¡¡Felicitaciones!!!</h3>
            
          </div>
        </Modal.Header>
        <Modal.Body>
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
        <img className="cerebrito-win" src={cerebroGanador} alt="logo pagina" width="190" />
        <h5 className="playertotalscore">Puntaje actual <br/> <span className="score"> {playerTotalScore} puntos</span></h5>
        <div className="principal_button">
        <Button className="btn1"  onClick={onRestart}>
          ¡Volver a Jugar!
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
