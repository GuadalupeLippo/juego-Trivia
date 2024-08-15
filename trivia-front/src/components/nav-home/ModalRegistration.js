import Modal from "react-bootstrap/Modal";
import { FormRegistration } from "../registration-form/Registration-form";

export function ModalFormRegister({ show, handleCloseForm, handleShowExit}) {
    return (
        <>
            <Modal
                show={show} 
                onHide={handleCloseForm}
                backdrop="static"
                className="Modal"
                centered
            >
                <Modal.Header className="modal-registrer" closeButton>
                    <Modal.Title> 
                        <strong>¡REGISTRATE Y COMIENZA A JUGAR!</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormRegistration handleCloseForm={handleCloseForm} handleShowExit={handleShowExit}/>
                </Modal.Body>

            </Modal>
        </>
    );
}