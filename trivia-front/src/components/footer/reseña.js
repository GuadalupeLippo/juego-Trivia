import Form from 'react-bootstrap/Form';
import './reseña.css'



function CheckReverseExample() {
  return (
    

    <Form className='Reseña'>
        <h2>Califica el juego</h2>
      {[ 'radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <Form.Check
            reverse
            label="⭐ ⭐ ⭐"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label= "⭐⭐⭐⭐"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
          <Form.Check
            reverse
           
            label="⭐⭐⭐⭐⭐"
            name="group1"
            type={type}
            id={`reverse-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckReverseExample;