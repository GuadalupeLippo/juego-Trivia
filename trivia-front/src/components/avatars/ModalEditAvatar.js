import React from 'react';
import { Modal,Button } from 'react-bootstrap';

export default function ModalEditAvatar({handleConfirmChangeAvatar,handleCloseModalAvatar, showModal }) {
    

 
  return (
    <Modal show={showModal} onHide={handleCloseModalAvatar} backdrop='static' centered className='Modal'>

    <Modal.Body className='modal-body-avatar'>
      ¿Está seguro de que desea editar su avatar?
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModalAvatar}>
        Cancelar
      </Button>
      <Button className='btn-modal-avatar' onClick={handleConfirmChangeAvatar}>
        Aceptar
      </Button>
    </Modal.Footer>
  </Modal>

)
}
