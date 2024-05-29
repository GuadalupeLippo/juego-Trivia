import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { ModalRegistrer } from './modal-form';

export function FormRegistration() {
    
    const [show, setShow] = useState(false);
    const form = useRef()

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        form.current.reset()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
       };



  return (
    <>
     
     <form ref={form} onSubmit={handleSubmit}>
            <h3 className='mb-3'><strong>¡Registrate y comienza a jugar!</strong></h3>
            <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
                <Form.Control type="text" placeholder="Nombre"/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="E-mail"className="mb-3">
                <Form.Control type="email" placeholder="E-mail"/>
            </FloatingLabel>
      
            <FloatingLabel controlId="floatingPassword" label="Contraseña" className='mb-3'>
                <Form.Control type="password" placeholder="Contraseña"/>
            </FloatingLabel>
           
            <Button className='btn btn-danger' type='submit' onClick={handleShow}> REGISTRARSE </Button>
            
            <ModalRegistrer show={show} handleClose={handleClose}/>
        </form>
    </>
  );
}


