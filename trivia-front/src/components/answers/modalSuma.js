
import React from 'react'; 
import Modal from 'react-bootstrap/Modal';
import './modal.css'
function ModalSuma({ onHide, style, isRandomGame }) {
  const points = isRandomGame? "+10" : "+5"
  return (
    <Modal show onHide={onHide} style={style} backdrop={false}  className='modal-container'>
    <div className="modalSuma">
      <strong><h4 className='modal-Title'>{points}</h4></strong>
        </div></Modal>
  );
}

export default ModalSuma;