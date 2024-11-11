import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import sadCerebrito from "../images/sad.png";
import './TimeUpModal.css'

const TimeUpModal = ({ show, onHide, onRestart }) => {
    const categorias = useNavigate()

   const handleNavigateCategorias = () =>{
        categorias("/login/:id");

    }
  return (
    <Modal show={show} onHide={onHide} backdrop='static' centered className="modal-timeup">
    <div className="modal-content modal-content-red-border">
      <Modal.Header className="title-timeup">
        <Modal.Title className="title-timeup">UPS! Tu tiempo se ha acabado...</Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-timeup">
      <img className="logoNav" src={sadCerebrito} alt="logo pagina" width="180" />
      <p>Puedes reiniciar la trivia o buscar otra en la que demuestres tus conocimientos.
      <br/> <span className="sum-puntos">¡Recuerda que lo importante es seguir sumando puntos!</span></p>
     
      </Modal.Body>
      <Modal.Footer className="footer-timeUp">
      
        <Button variant="secondary" className="btn-reset" onClick={onRestart}>
          Volver a Jugar
        </Button>
        <Button  className="btn-category" onClick={handleNavigateCategorias}>
          Otra categoria
        </Button>
      </Modal.Footer>
    </div>
    </Modal>
  );
};

export default TimeUpModal;
