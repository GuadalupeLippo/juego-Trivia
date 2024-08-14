import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalNoPoints.css';
import sadBrain from '../images/sad.png'
export function ModalNoPoints({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className='no_points_head'>
        <Modal.Title>Oh no! No tienes suficientes puntos...</Modal.Title>
      </Modal.Header>

      <Modal.Body className='no_points_body'>
        <img className='sad_brain' src={sadBrain}/>
        <p className='no_points_text'>Puedes ganar puntos al jugar nuevas partidas o comprar más en nuestra tienda.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        {/* <Button variant="primary">
          Comprar Puntos
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}
