import React from 'react';
import { Modal, ModalFooter, Button } from 'react-bootstrap';
import { CreditCardForm } from './creditCardForm';
import './modalPoints.css'

export function ModalPoints({ show, handleClose, points }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header className='confirm_buy_points' >
        <Modal.Title> <h3>Confirmar Compra</h3></Modal.Title>
      </Modal.Header >
      <Modal.Body>
        <p className='data_card'>Ingresa tus datos para comprar {points} puntos:</p>
        <CreditCardForm />
      </Modal.Body>
    <ModalFooter>
    <Button variant="secondary" onClick={handleClose}> Cancelar</Button>
    <Button className='button_accept_points' variant="primary"> Aceptar </Button>
    </ModalFooter> 
    </Modal>
  );
}
