import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalNoPoints.css';
import sadBrain from '../images/sad.png';

export function ModalNoPoints({ show, handleClose }) {
 
  const scrollToBuyPointsSection = () => {
    const buyPointsSection = document.getElementById('buy-points-section');
    if (buyPointsSection) {
      window.scrollTo({
        top: buyPointsSection.offsetTop,
        behavior: 'smooth'
      });
      handleClose(); 
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className='no_points_head'>
        <Modal.Title>Oh no! No tienes suficientes puntos...</Modal.Title>
      </Modal.Header>

      <Modal.Body className='no_points_body'>
        <img className='sad_brain' src={sadBrain} alt="Sad Brain" />
        <p className='no_points_text'>Puedes ganar puntos al jugar nuevas partidas o comprar más en nuestra tienda.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" className='no_points_button' onClick={scrollToBuyPointsSection}>
          Comprar Puntos
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
