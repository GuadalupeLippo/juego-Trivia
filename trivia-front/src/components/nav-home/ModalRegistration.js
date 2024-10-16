import Modal from "react-bootstrap/Modal";
import { FormRegistration } from "../registration-form/Registration-form";
import Logo from "../images/logocerebritotrivia.png";
import './ModalRegistrer.css'

export function ModalFormRegister({ show, handleCloseForm, handleShowExit}) {
    return (
        <>
          <Modal
            show={show}
            onHide={handleCloseForm}
            backdrop="static"
            className="Modal"
            centered
            size="xl"
          >
            <Modal.Header className="modal-registrer-exit" closeButton>
              <Modal.Title className="modal-title-exit">
                <strong>¡REGISTRATE Y COMIENZA A JUGAR!</strong>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-content-wrapper">
                <img src={Logo} alt="logo pagina" className="logo" />
                <FormRegistration
                  handleCloseForm={handleCloseForm}
                  handleShowExit={handleShowExit}
                />
              </div>
            </Modal.Body>
          </Modal>
        </>
      );
      
}