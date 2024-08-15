import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import '../registration-form/Invitation.css';
import { ModalFormRegister } from "../nav-home/ModalRegistration";
import { ModalRegistrerExit } from "../registration-form/modal-form";

export function ButtonRegistration() {
    const [show, setShow] = useState(false);
    const [showExit, setShowExit] = useState(false);

    const handleCloseForm = () => setShow(false);
    const handleShowForm = () => setShow(true);

    const handleCloseExit = () => setShowExit(false);
    const handleShowExit = () => setShowExit(true);

  

    return (
        <>
            <Button
                className="btn btn-reg btnfos-5"
                type="button" 
                onClick={handleShowForm}
            >
                Registrarse
            </Button>
            <ModalFormRegister
                show={show}
                handleCloseForm={handleCloseForm} 
                handleShowExit={handleShowExit}
            />
            <ModalRegistrerExit
                show={showExit}
                handleCloseExit={handleCloseExit}
            />
        </>
    );
}
