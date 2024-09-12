import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BtnLoguin } from "../form-loguin/Btn-loguin";
import { ModalLoguin } from "../form-loguin/Modal-Loguin";
import Exit from '../images/cerebrito-festejo.jpg';

export function ModalRegistrerExit({ show, handleCloseExit }) {
  const [showLoguin, setShowLoguin] = useState(false);

  const handleShowLoguin = () => setShowLoguin(true);
  const handleCloseLoguin = () => setShowLoguin(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseExit}
        className="Modal"
        centered
      >
        <Modal.Header className="modal-registrer-exit" closeButton>
          <Modal.Title>¡TE HAS REGISTRADO CON ÉXITO!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-registrer">
          <img src={Exit} alt="registro exitoso" width='180px'/>
          <p className="p-registrer">Ya puedes iniciar sesión con los datos registrados y comenzar a jugar.</p>
          
        </Modal.Body>
        <Modal.Footer className="footer-registrer">
          <BtnLoguin
            handleCloseExit={handleCloseExit}
            handleShowLoguin={handleShowLoguin}
          />
        </Modal.Footer>
      </Modal>

      <ModalLoguin
        showLoguin={showLoguin}
        handleCloseLoguin={handleCloseLoguin}
      />
    </>
  );
}
