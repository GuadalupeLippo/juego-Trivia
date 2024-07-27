import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PlayButton from "./PlayButtom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../form-loguin/UserAuth";
import { useEffect } from "react";

export function ModalLoguin({ showLoguin, handleCloseLoguin}) {
  const loguin = useNavigate();
  const { setAuthUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    // Cargar datos del archivo JSON
    fetch('/data/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

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
      const authenticatedUser = users.find(
        (user) =>
          user.name === formLoguin.controlUser &&
          user.email === formLoguin.controlEmail &&
          user.password === formLoguin.controlPassword
      );
      if (authenticatedUser) {
        setAuthUser(authenticatedUser);
        handleNavigate(); 
        setFormLoguin(initialForm);
       
      } else {
        setErrorMessage("Este usuario no se encuentra registrado. Por favor, verifica que los datos ingresados sean correctos.");
       
      }
      
    }
    }

    const handleClearForm = () => {
      handleCloseLoguin();
      setFormLoguin(initialForm);
      setErrorMessage("");
    };
  
  return (
    <>
      <Modal
        show={showLoguin}
        onHide={handleClearForm}
        backdrop="static"
        size="lg"
        className="Modal"
        centered
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
            <div className="error-message">
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <PlayButton onClick={HandlesubmitLoguin} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
