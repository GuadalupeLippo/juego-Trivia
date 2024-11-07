import React from 'react';
import Modal from 'react-bootstrap/Modal';
import "./ModalCanjeExitoso.css"

export function ModalCanjeExitoso({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className='header_modal'closeButton>
        <Modal.Title>¡Canje Completado!</Modal.Title>
      </Modal.Header>
      <Modal.Body className='body_canje_exitoso'>Has canjeado tu avatar con éxito.</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
}
