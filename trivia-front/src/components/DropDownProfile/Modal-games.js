// ModalGames.js
import React from 'react';
import { Modal } from 'react-bootstrap';


export function ModalGames({ openGames, handleCloseGames }) {
  return (
    <Modal show={openGames} onHide={handleCloseGames} className='Modal'>
      <Modal.Header className='modal-registrer'closeButton>
        <Modal.Title>Registro de partidas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className='ul-games'>

        <li>Partidas jugadas:</li>
        <li>Respuestas correctas:</li>
        <li> Respuestas incorrectas:</li>
        </ul>
      </Modal.Body>
     
    </Modal>
  );
}
