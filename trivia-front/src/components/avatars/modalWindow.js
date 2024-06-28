import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modalWindow.css'

export function BuyAvatarModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className='header_modal' closeButton>
        <Modal.Title >Confirmar canje</Modal.Title>
      </Modal.Header>
      <Modal.Body className='body_modal'>
        ¿Quieres canjear xxx puntos por este avatar?
        Tus puntos actuales son de xxx.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button className='button_accept' variant="primary" onClick={handleClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


