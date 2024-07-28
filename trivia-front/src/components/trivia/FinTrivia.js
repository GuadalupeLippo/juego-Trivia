import "./FinTrivia.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logocerebritotrivia.png";
import circle from "./images/circle2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faStar } from '@fortawesome/free-solid-svg-icons';

export function FinTrivia() {
  const [show, setShow] = useState(false);
  const loguin = useNavigate();
  const store = useNavigate();

  const handleNavigate = () => {
    loguin("/loguin");
  };
  const handleNavigateStore = () => {
    store("/Store");
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="top_modal">
          <div className="title_modal">
            <h3 className="title_shine"> ¡¡¡Felicitaciones!!!</h3>
          </div>
        </Modal.Header>
        <Modal.Body>
       <h3 className="winner">Ganaste la partida</h3>
          <div className="all_results"> 
            <div className="result_container">
              <img className="circle" src={circle} alt="circulo"/>
              <FontAwesomeIcon icon="fa-duotone fa-solid fa-circle-check" />
              <h1 className="trivia_results"> Correctas <FontAwesomeIcon className="correctas" icon={faCircleCheck}/> </h1>
            </div>
            <div className="result_container">
              <img className="circle" src={circle} alt="circulo"/>
              <h1 className="trivia_results">Incorrectas <FontAwesomeIcon className="incorrectas" icon={faCircleXmark} /></h1>
            </div>
            <div className="result_container">
              <img className="circle" src={circle} alt="circulo"/>
              <h1 className="trivia_results">Puntos <FontAwesomeIcon className="puntos" icon={faStar} /></h1>
            </div>
          </div>
         
        </Modal.Body>
        <img className="logoNav" src={Logo} alt="logo pagina" width="200" />

        <div className="principal_button">
        <Button className="btn1" variant="secondary" onClick={handleNavigate}>
          Volver a Jugar!
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
