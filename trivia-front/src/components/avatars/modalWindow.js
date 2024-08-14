import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modalWindow.css';
import { useAuth } from '../form-loguin/UserAuth.js';
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

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className='header_modal' closeButton>
          <Modal.Title>Confirmar canje</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body_modal'>
          {selectedAvatar ? (
            <>
              ¿Quieres canjear {selectedAvatar.pointsNeeded} puntos por este avatar?
              Tus puntos actuales son de {authUser?.score}
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
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
