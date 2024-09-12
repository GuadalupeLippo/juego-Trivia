import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";


export function FormRegistration({handleCloseForm, handleShowExit}) {
  const initialData = {
    floatingName: "",
    floatingInput: "",
    floatingPassword: "",
  };

  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});

  function SetField(field, value) {
    setForm({
      ...form, //los operadores ... copian el contenido actual del form
      [field]: value,
    });

    if (!!errors[field]) {
      //los operadores !!convierten un valor en booleano
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  }

  
  function validateForm() {
    const { floatingName, floatingInput, floatingPassword } = form;
    const newErrors = {};

    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!floatingName || floatingName === "") {
      newErrors.floatingName = "por favor completa este campo";
    }
    if (!emailRegex.test(floatingInput) || floatingInput === "") {
      newErrors.floatingInput =
        "este campo debe contener: name@example.com";
    }
    if (!floatingPassword || floatingPassword === "") {
      newErrors.floatingPassword = "por favor completa este campo";
    }
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
       handleCloseForm()
      handleShowExit();
     
      setForm(initialData);
    }
  };

  return (
    <div className="col-sm col-md col-lg col-xl">
      <form onSubmit={handleSubmit}>
        <div className="form-group position-relative mb-5">
          <FloatingLabel
            controlId="floatingName"
            label="Nombre de usuario"
          >
            <Form.Control
              type="text"
              placeholder="Nombre de usuario"
              value={form.floatingName}
              onChange={(e) => SetField("floatingName", e.target.value)}
              isInvalid={!!errors.floatingName}
              required
            />
          </FloatingLabel>
          {errors.floatingName && (
            <div className="error-message">{errors.floatingName}</div>
          )}
        </div>
        <div className="form-group position-relative mb-5">
          <FloatingLabel
            controlId="floatingInput"
            label="E-mail"
          >
            <Form.Control
              type="email"
              placeholder="E-mail"
              value={form.floatingInput}
              onChange={(e) => SetField("floatingInput", e.target.value)}
              isInvalid={!!errors.floatingInput}
              required
            />
          </FloatingLabel>
          {errors.floatingInput && (
            <div className="error-message">{errors.floatingInput}</div>
          )}
        </div>
        <div className="form-group position-relative mb-5">
          <FloatingLabel
            controlId="floatingPassword"
            label="Contraseña"
          >
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={form.floatingPassword}
              onChange={(e) => SetField("floatingPassword", e.target.value)}
              isInvalid={!!errors.floatingPassword}
              required
            />
          </FloatingLabel>
          {errors.floatingPassword && (
            <div className="error-message">{errors.floatingPassword}</div>
          )}
        </div>

        
       
      </form>
      <Button
          className="btn-reg btnfos-5 "
          type="submit"
          onClick={handleSubmit}
        >
          Confirmar
        </Button>
    </div>
  );
}