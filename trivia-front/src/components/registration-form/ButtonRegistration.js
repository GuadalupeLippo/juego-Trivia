import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import '../registration-form/Invitation.css';
import { ModalFormRegister } from "../nav-home/ModalRegistration";
import { ModalRegistrerExit } from "../registration-form/modalRegistrerExit";

export function ButtonRegistration() {
    const [show, setShow] = useState(false);
    const [showExit, setShowExit] = useState(false);
    const [userName, setUserName] = useState("");

    const handleCloseForm = () => setShow(false);
    const handleShowForm = () => setShow(true);

    const handleCloseExit = () => setShowExit(false);
    const handleShowExit = () => setShowExit(true);

    const handleSuccessfulRegistration = (name) => {
        setUserName(name);
        handleShowExit();
        handleCloseForm(); // Cierra el formulario
    };
  

    return (
        <>
            <Button
                className="btn btn-grad btnfos-5"
                type="button" 
                onClick={handleShowForm}
            >
                Registrarse
            </Button>
            <ModalFormRegister
                show={show}
                handleCloseForm={handleCloseForm} 
                handleShowExit={handleSuccessfulRegistration}
            />
            <ModalRegistrerExit
                show={showExit}
                handleCloseExit={handleCloseExit}
                userName = {userName}
            />
        </>
    );
}
