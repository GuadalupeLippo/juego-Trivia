import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modalWindow.css';
import { useAuth } from '../auth/UserAuth.js';
import { ModalNoPoints } from './ModalNoPoints.js';

export function BuyAvatarModal({ show, handleClose, handleConfirmPurchase, selectedAvatar }) {
  const { authUser } = useAuth();
  const [showNoPointsModal, setShowNoPointsModal] = useState(false);

  const handleConfirmPoints = () => {
    if (authUser?.score >= selectedAvatar.pointsNeeded) {
      handleConfirmPurchase();
    } else {
      handleClose();
      setShowNoPointsModal(true); 
    }
  };

  const handleCloseNoPointsModal = () => {
    setShowNoPointsModal(false);
  };

  // Función para desplazarse a la sección de "comprar puntos"
  const scrollToBuyPointsSection = () => {
    const buyPointsSection = document.getElementById('buy-points-section');
    if (buyPointsSection) {
      window.scrollTo({
        top: buyPointsSection.offsetTop,
        behavior: 'smooth'
      });
      handleClose(); // Cierra la modal antes de hacer scroll
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className='header_modal' closeButton>
          <Modal.Title>Confirmar canje</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body_modal'>
          {selectedAvatar ? (
            <>
              <p>Tus puntos actuales son de {authUser?.score}.</p>
              <p>¿Quieres canjear {selectedAvatar.pointsNeeded} puntos por este avatar?</p> 
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {/* Botón que lleva a la sección de "Comprar Puntos" */}
          <Button variant="secondary" onClick={scrollToBuyPointsSection}>
            Comprar Puntos
          </Button>
          <Button className='button_accept' variant="primary" onClick={handleConfirmPoints}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para cuando no hay suficientes puntos */}
      <ModalNoPoints show={showNoPointsModal} handleClose={handleCloseNoPointsModal} />
    </>
  );
}
