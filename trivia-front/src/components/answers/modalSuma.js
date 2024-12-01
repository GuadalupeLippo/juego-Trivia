
import React from 'react'; 
import Modal from 'react-bootstrap/Modal';
import './modal.css'
function ModalSuma({ onHide, style }) {
  return (
    <Modal show onHide={onHide} style={style} backdrop={false}  className='modal-container'>
    <div className="modalSuma">
      <h4 className='modal-Title'>+5</h4>
        </div></Modal>
  );
}

export default ModalSuma;