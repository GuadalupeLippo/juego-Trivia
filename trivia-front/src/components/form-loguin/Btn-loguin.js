import React from "react";
import Button from "react-bootstrap/Button";
import './PlayButtom.css';

export function BtnLoguin({ handleCloseExit, handleShowLoguin }) {
  const handleLoguinClick = () => {
    if (handleCloseExit) {
      handleCloseExit(); 
      handleShowLoguin();
    }
  };

  return (
    <>
      <Button
        className="btn btn-grad btnfos-5"
        type="button"
        onClick={handleLoguinClick}
      >
        Iniciar sesión
      </Button>
    </>
  );
}
