import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ModalLoguin } from './Modal-Loguin';

export function BtnLoguin () {
  
  const [showLoguin, setShowLoguin] = useState(false);

  const handleCloseLoguin = () => setShowLoguin(false);
  const handleShowLoguin = () => setShowLoguin(true);

  return (
    <>
     <Button className='btn btn-primary btnfos-5' type='submit' onClick={handleShowLoguin}> Iniciar sesión </Button>
      <ModalLoguin showLoguin={showLoguin} handleCloseLoguin={handleCloseLoguin}/>

    </> 
  );
}
