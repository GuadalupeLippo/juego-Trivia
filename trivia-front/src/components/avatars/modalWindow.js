import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modalWindow.css';
import { useAuth } from '../auth/UserAuth.js';
import { ModalNoPoints } from './ModalNoPoints.js';
import { ModalCanjeExitoso } from './ModalCanjeExitoso.js';

export function BuyAvatarModal({ show, handleClose, handleConfirmPurchase, selectedAvatar, purchasedAvatars }) {
  const { authUser } = useAuth();
  const [showNoPointsModal, setShowNoPointsModal] = useState(false);
  const [alreadyPurchased, setAlreadyPurchased] = useState(false);
  const [showCanjeExitosoModal, setShowCanjeExitosoModal] = useState(false);

  useEffect(() => {
    if (selectedAvatar && purchasedAvatars) {
      const isPurchased = purchasedAvatars.some(avatar => avatar.id === selectedAvatar.id);
      setAlreadyPurchased(isPurchased);
    }
  }, [selectedAvatar, purchasedAvatars]);

  const handleConfirmPoints = async () => {
    if (alreadyPurchased) {
      alert('Este avatar ya ha sido adquirido.');
      handleClose();
      return;
    }

    if (authUser?.score >= selectedAvatar?.price) {
      await handleConfirmPurchase();

      // Cerrar el modal de compra
      handleClose();

      // Mostrar el modal de canje exitoso
      setShowCanjeExitosoModal(true);
    } else {
      handleClose();
      setShowNoPointsModal(true); 
    }
  };

  const handleCloseNoPointsModal = () => {
    setShowNoPointsModal(false);
  };

  const handleCloseCanjeExitosoModal = () => {
    setShowCanjeExitosoModal(false);
  };

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
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className='header_modal' closeButton>
          <Modal.Title>Confirmar canje</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body_modal'>
          {selectedAvatar ? (
            <>
              <p>Tus puntos actuales son de {authUser?.score}.</p>
              <p>¿Quieres canjear {selectedAvatar.price} puntos por este avatar?</p>
              {alreadyPurchased && <p style={{ color: 'red' }}>Este avatar ya ha sido adquirido.</p>}
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={scrollToBuyPointsSection}>
            Comprar Puntos
          </Button>
          <Button className='button_accept' variant="primary" onClick={handleConfirmPoints} disabled={alreadyPurchased}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>

      <ModalNoPoints show={showNoPointsModal} handleClose={handleCloseNoPointsModal} />
      
      {/* Aquí pasamos show y handleClose como props */}
      <ModalCanjeExitoso 
        show={showCanjeExitosoModal} 
        handleClose={handleCloseCanjeExitosoModal} 
      />
    </>
  );
}
