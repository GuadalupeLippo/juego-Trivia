import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BtnLoguin } from "../form-loguin/Btn-loguin";
import { ModalLoguin } from "../form-loguin/Modal-Loguin";

export function ModalRegistrerExit({ show, handleCloseExit }) {
  const [showLoguin, setShowLoguin] = useState(false);

  const handleShowLoguin = () => setShowLoguin(true);
  const handleCloseLoguin = () => setShowLoguin(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseExit}
        backdrop="static"
        className="Modal"
      >
        <Modal.Header className="modal-registrer-exit" closeButton>
          <Modal.Title>¡TE HAS REGISTRADO CON ÉXITO!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Inicia sesión para comenzar a jugar.
        </Modal.Body>
        <Modal.Footer>
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
