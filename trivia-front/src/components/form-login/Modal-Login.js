import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PlayButton from "./PlayButtom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/UserAuth";
import { APITRIVIA } from "../../API/getDataBase";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function ModalLogin({ showLogin, handleCloseLogin}) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  


  const initialForm = {
    controlEmail: "",
    controlPassword: "",
  };

  const [formLogin, setFormLogin] = useState(initialForm);
  const [errorsLogin, setErrorsLogin] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function SetFieldlogin(field, value) {
    setFormLogin({
      ...formLogin, 
      [field]: value,
    });

    if (!!errorsLogin[field]) {
      setErrorsLogin({
        ...errorsLogin,
        [field]: null,
      });
    }
  }
  function validateFormLogin() {
    const {controlEmail, controlPassword } = formLogin;
    const newErrors = {};

    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

   
    if (!emailRegex.test(controlEmail) || controlEmail === "") {
      newErrors.controlEmail =
        "por favor completa este campo correctamente: name@example.com";
    }
    if (!controlPassword || controlPassword === "") {
      newErrors.controlPassword = "por favor completa este campo";
    }
    return newErrors;
  }

  const HandleSubmitLogin = async (e) => {
    e.preventDefault();

    const formErrorsLogin = validateFormLogin();

    if (Object.keys(formErrorsLogin).length > 0) {
      setErrorsLogin(formErrorsLogin);
    } else {
      const loginData = {
        email: formLogin.controlEmail,
        password: formLogin.controlPassword,
      };

      try {
        const response = await fetch(`${APITRIVIA}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });

        if (!response.ok) {
          throw new Error('Error en el inicio de sesión');
        }

        const playerData = await response.json();
        localStorage.setItem('defaultAvatar', "https://api.dicebear.com/9.x/bottts/svg?seed=Lilly");
       console.log(localStorage.getItem('defaultAvatar'))

        login(playerData.player, playerData.access_token);
        navigate(`/login/${playerData.player.id}`);
        setFormLogin(initialForm);
        handleClearForm()

      } catch (error) {
        setErrorMessage('Error al iniciar sesión. Verifica que los datos ingresados sean correctos.');
      }
    }
  };

  const handleClearForm = () => {
    handleCloseLogin();
    setFormLogin(initialForm);
    setFormLogin(initialForm); 
    setErrorsLogin({}); 
    setErrorMessage(""); 
    setShowPassword(false);
  };

  
  return (
    <>
      <Modal
        show={showLogin}
        onHide={handleClearForm}
        backdrop="static"
        size="lg"
        className="Modal"
        centered
      >
        <Modal.Header closeButton className="modal-registrer-exit">
          <Modal.Title className="modal-title-exit">Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="controlEmail">
              <div className="form-group position-relative mb-4">
                <Form.Label>
                  E-mail
                </Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    value={formLogin.controlEmail}
                    onChange={(e) => SetFieldlogin("controlEmail", e.target.value)}
                    isInvalid={!!errorsLogin.controlEmail}
                    required
                />
                <Form.Control.Feedback type="invalid">
                {errorsLogin.controlEmail && (
                  <div className="error-message">
                    {errorsLogin.controlEmail}
                  </div>
                  )
                }
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlPassword">
            <div className="form-group position-relative mb-4">          
            <Form.Control
              type={showPassword ? "text" : "password"} 
              placeholder="Contraseña"
              value={formLogin.controlPassword}
              onChange={(e) => SetFieldlogin("controlPassword", e.target.value)}
              isInvalid={!!errorsLogin.controlPassword}
              required
            />
            <button
              type="button"
              className=" toggle-password"
              onClick={() => setShowPassword(!showPassword)} 
            >
              {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
            </button>
  <Form.Control.Feedback type="invalid">
    {errorsLogin.controlPassword && (
      <div className="error-message">{errorsLogin.controlPassword}</div>
    )}
  </Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                    {errorsLogin.controlPassword && (
                      <div className="error-message">
                        {errorsLogin.controlPassword}
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
          <PlayButton onClick={HandleSubmitLogin} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
