import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export function FormConfiguration() {

  return (
    <>
        <FloatingLabel controlId="floatingSelect" label="Selecciona la cantidad de preguntas a responder">
            <Form.Select aria-label="Selecciona la cantidad de preguntas a responder" className='mb-3'>
                <option value="10">10 preguntas</option>
                <option value="15">15 preguntas</option>
                <option value="20">20 preguntas</option>
            </Form.Select>
        </FloatingLabel>
        <FloatingLabel controlId="floatingSelect2" label="selecciona el tiempo para responderlas">
            <Form.Select aria-label="selecciona el tiempo para responderlas" className='mb-3'>
                <option value="15s">15"</option>
                <option value="20s">20"</option>
                <option value="30s">30"</option>
            </Form.Select>
        </FloatingLabel>
   </>
   );
}
 
 

