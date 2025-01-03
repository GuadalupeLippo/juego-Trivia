import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { APITRIVIA } from "../../API/getDataBase";
import { useAuth } from "../auth/UserAuth";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function FormRegistration({handleCloseForm, handleShowExit,}) {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});
  const { setAuthUser, fetchPlayerData } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  function SetField(field, value) {
    setForm({
      ...form, 
      [field]: value,
    });

    if (!!errors[field]) {
      
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  }

  
  function validateForm() {
    const { name, email, password } = form;
    const newErrors = {};

    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!name || name === "") {
      newErrors.name = "por favor completa este campo";
    }
    if (!emailRegex.test(email) ||email === "") {
      newErrors.email =
        "este campo debe contener: name@example.com";
    }
    if (!password || password < 8) {
      newErrors.password = "por favor completa este campo con un minimo de 8 caracteres y al menos un número";
    }
    return newErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formErrors = validateForm();
  
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      try {
        const response = await fetch(`${APITRIVIA}/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        });
  
        const data = await response.json();

        console.log("Token recibido:", data.access_token);
        
        if (response.ok) {
         
          localStorage.setItem('authATRV', JSON.stringify({token: data.access_token}));
          console.log("Token guardado:", localStorage.getItem('authATRV')); 

        const playerData = await fetchPlayerData(data.access_token);
        setAuthUser(playerData);
        handleCloseForm();
        handleShowExit(form.name, data.access_token);
        setForm(initialData);
      } else if (response.status === 404) {
      
        setErrors({ email: "Este email ya está en uso" });
      } else {
        setErrors({ general: 'este jugador ya se encuentra registrado'});
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ general: 'este jugador ya se encuentra registrado' });
    }
  }
}

  return (
    <div className="col-sm col-md col-lg col-xl">
      <form onSubmit={handleSubmit}>
        <div className="form-group position-relative mb-4">
          <FloatingLabel
            controlId="name"
            label="Nombre de usuario"
          >
            <Form.Control
              type="text"
              placeholder="Nombre de usuario"
              value={form.name}
              onChange={(e) => SetField("name", e.target.value)}
              isInvalid={!!errors.name}
              required
            />
          </FloatingLabel>
          {errors.name && (
            <div className="error-message">{errors.name}</div>
          )}
        </div>
        <div className="form-group position-relative mb-4">
          <FloatingLabel
            controlId="email"
            label="E-mail"
          >
            <Form.Control
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={(e) => SetField("email", e.target.value)}
              isInvalid={!!errors.email}
              required
            />
          </FloatingLabel>
          {errors.email && (
            <div className="error-message">{errors.email}</div>
          )}
        </div>
        <div className="form-group position-relative mb-5">
          <FloatingLabel
            controlId="password"
            label="Contraseña"
          >
            <Form.Control
             type={showPassword ? "text" : "password"} 
              placeholder="Contraseña"
              value={form.password}
              onChange={(e) => SetField("password", e.target.value)}
              isInvalid={!!errors.password}
              required
            />
           
          </FloatingLabel>
          <button
                type="button"
                className="toggle-password-registration"
                onClick={() => setShowPassword(!showPassword)} 
              >
                  {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </button>
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
          {errors.general && (
        <div className="error-message">{errors.general}</div>
        )}
        </div>
        <div className="confirmar">
         <Button
          className="btn-reg btnfos-5 "
          type="submit"
          onClick={handleSubmit}
        >
          Confirmar
        </Button>
        </div>
       
      </form>
     
    </div>
  );
}