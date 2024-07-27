import Modal from "react-bootstrap/Modal";
import { BtnLoguin } from "../form-loguin/Btn-loguin";

export function ModalRegistrer({ show, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="Modal"
        centered
      >
        <Modal.Header className="modal-registrer" closeButton>
          <Modal.Title>¡TE HAS REGISTRADO CON ÉXITO!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-b">
          Inicia sesión para comenzar a jugar.
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <BtnLoguin />
        </Modal.Footer>
      </Modal>
    </>
  );
}
