
import React from 'react'; 
import Modal from 'react-bootstrap/Modal';
import './modal.css'
function ModalSuma({ onHide, style }) {
  return (
    <Modal show onHide={onHide} centered style={style} backdrop={false}  dialogClassName='modal-container'>
    <div className="modalSuma">
      <Modal.Title style={{ fontSize: "24px", color: "green", fontWeight: "bold" }}>+5</Modal.Title>
        </div></Modal>
  );
}

export default ModalSuma;