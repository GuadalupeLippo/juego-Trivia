import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import { ModalRegistrer } from './modal-form';

export function FormRegistration() {
    const initialData = {
        floatingName: '',
        floatingInput: '',
        floatingPassword: ''
    }
   
    const [form, setForm] = useState(initialData)
    const [errors, setErrors]= useState({})

    function SetField(field, value) {
        setForm({
            ...form, //los operadores ... copian el contenido actual del form
            [field]:value
        })

        if(!!errors[field]){  //los operadores !!convierten un valor en booleano
           setErrors({ 
            ...errors,
            [field]:null})
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
     const handleShow = () => {
        setShow(true);
      
    }

    function validateForm() {
        const {floatingName, floatingInput, floatingPassword} = form
        const newErrors = {} 

        const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

        if(!floatingName ||floatingName === ''){
            newErrors.floatingName = 'por favor completa este campo'
        }
        if(!emailRegex.test(floatingInput) ||floatingInput === ''){
            newErrors.floatingInput = 'por favor completa este campo correctamente: name@example.com'
        }
        if(!floatingPassword ||floatingPassword === ''){
            newErrors.floatingPassword = 'por favor completa este campo'
        }
        return newErrors;
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        

        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length > 0) {
          setErrors(formErrors);
          
        } 
        else {
            handleShow();
            setForm(initialData);
        }
     
      };



  return (
    <div className="col-sm col-md col-lg col-xl" >
     <form  onSubmit={handleSubmit}>
            <h3 className='mb-4'><strong>¡COMIENZA A JUGAR!</strong></h3>
            <FloatingLabel controlId="floatingName" label="Nombre de usuario" className="mb-3">
                <Form.Control 
                type="text" 
                placeholder="Nombre de usuario" 
                value={form.floatingName}
                onChange={e=> SetField('floatingName',e.target.value)} 
                isInvalid={!!errors.floatingName}
                required/>
                <Form.Control.Feedback type='invalid'>
                    {errors.floatingName}
                </Form.Control.Feedback>
            
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="E-mail"className="mb-3">
                <Form.Control type="email" 
                placeholder="E-mail"
                value={form.floatingInput}
                onChange={e=> SetField('floatingInput',e.target.value)} 
                isInvalid={!!errors.floatingInput}
                 required/>
                 <Form.Control.Feedback type='invalid'>
                    {errors.floatingInput}
                </Form.Control.Feedback>
            
            </FloatingLabel>
      
            <FloatingLabel controlId="floatingPassword" label="Contraseña" className='mb-5'>
                <Form.Control type="password" 
                placeholder="Contraseña"
                value={form.floatingPassword}
                onChange={e=> SetField('floatingPassword',e.target.value)} 
                isInvalid={!!errors.floatingPassword} 
                required/>
                <Form.Control.Feedback type='invalid'>
                    {errors.floatingPassword}
                </Form.Control.Feedback>
            
            </FloatingLabel>
            <Button className='btnfos btnfos-5' type='submit' onClick={handleSubmit} > REGISTRARSE </Button>
            <ModalRegistrer show={show} handleClose={handleClose}/>
        </form>
    </div>
  );
}


