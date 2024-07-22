import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PlayButton from "./PlayButtom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ModalLoguin({ showLoguin, handleCloseLoguin }) {
  const loguin = useNavigate();

  const handleNavigate = () => {
    loguin("/loguin");
  };
  const initialForm = {
    controlUser: "",
    controlEmail: "",
    controlPassword: "",
  };
  const [formLoguin, setFormLoguin] = useState(initialForm);
  const [errorsLoguin, setErrorsLoguin] = useState({});

  function SetFieldLoguin(field, value) {
    setFormLoguin({
      ...formLoguin, //los operadores ... copian el contenido actual del form
      [field]: value,
    });

    if (!!errorsLoguin[field]) {
      //los operadores !!convierten un valor en booleano
      setErrorsLoguin({
        ...errorsLoguin,
        [field]: null,
      });
    }
  }
  function validateFormLoguin() {
    const { controlUser, controlEmail, controlPassword } = formLoguin;
    const newErrors = {};

    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!controlUser || controlUser === "") {
      newErrors.controlUser = "por favor completa este campo";
    }
    if (!emailRegex.test(controlEmail) || controlEmail === "") {
      newErrors.controlEmail =
        "por favor completa este campo correctamente: name@example.com";
    }
    if (!controlPassword || controlPassword === "") {
      newErrors.controlPassword = "por favor completa este campo";
    }
    return newErrors;
  }

  const HandlesubmitLoguin = (e) => {
    e.preventDefault();

    const formErrorsLoguin = validateFormLoguin();

    if (Object.keys(formErrorsLoguin).length > 0) {
      setErrorsLoguin(formErrorsLoguin);
    } else {
      handleNavigate();
      setFormLoguin(initialForm);
    }
  };

  return (
    <>
      <Modal
        show={showLoguin}
        onHide={handleCloseLoguin}
        backdrop="static"
        size="lg"
        className="Modal"
      >
        <Modal.Header closeButton className="modal-loguin">
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-b">
          <Form>
            <Form.Group className="mb-3" controlId="controlUser">
              <div className="form-group position-relative mb-4">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Usuario"
                  value={formLoguin.controlUser}
                  onChange={(e) => SetFieldLoguin("controlUser", e.target.value)}
                  isInvalid={!!errorsLoguin.controlUser}
                  autoFocus
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errorsLoguin.controlUser && (
                    <div className="error-message">
                      {errorsLoguin.controlUser}
                    </div>
                    )
                  }
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlEmail">
              <div className="form-group position-relative mb-4">
                <Form.Label>
                  E-mail
                </Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    value={formLoguin.controlEmail}
                    onChange={(e) => SetFieldLoguin("controlEmail", e.target.value)}
                    isInvalid={!!errorsLoguin.controlEmail}
                    required
                />
                <Form.Control.Feedback type="invalid">
                {errorsLoguin.controlEmail && (
                  <div className="error-message">
                    {errorsLoguin.controlEmail}
                  </div>
                  )
                }
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlPassword">
              <div className="form-group position-relative mb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={formLoguin.controlPassword}
                    onChange={(e) =>SetFieldLoguin("controlPassword", e.target.value)}
                    isInvalid={!!errorsLoguin.controlPassword}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    {errorsLoguin.controlPassword && (
                      <div className="error-message">
                        {errorsLoguin.controlPassword}
                      </div>
                      )
                    }
                </Form.Control.Feedback>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="m-b">
          <PlayButton onClick={HandlesubmitLoguin} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
