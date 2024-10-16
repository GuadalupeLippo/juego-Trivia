import React from "react";
import Button from "react-bootstrap/Button";
import './PlayButtom.css';

export function BtnLogin({ handleCloseExit, handleShowLogin }) {
  const handleLoginClick = () => {
    if (handleCloseExit) {
      handleCloseExit(); 
      handleShowLogin();
    }
  };

  return (
    <>
      <Button
        className="btn btn-grad btnfos-5"
        type="button"
        onClick={handleLoginClick}
      >
        Iniciar sesión
      </Button>
    </>
  );
}
