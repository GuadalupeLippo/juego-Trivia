import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modalWindow.css';
import { useAuth } from '../form-loguin/UserAuth.js'

export function BuyAvatarModal({ show, handleClose, handleConfirmPurchase, selectedAvatar }) {
  const { authUser } = useAuth();

  const handleConfirmPoints = () => {
    if (authUser?.score >= selectedAvatar.pointsNeeded) {
      handleConfirmPurchase();
    } else {
      alert('No tienes suficientes puntos para canjear este avatar.');
    }
  };
  return (
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
  );
}
