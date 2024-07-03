import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export function FormConfiguration({ setSelectedTime }) {
  const handleTimeChange = (event) => {
    setSelectedTime(parseInt(event.target.value, 10));
  };

  return (
    <>
      <FloatingLabel controlId="floatingSelect" label="preguntas">
        <Form.Select aria-label="preguntas" className="mb-3">
          <option value="10">10 </option>
          <option value="15">15 </option>
          <option value="20">20 </option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingSelect2"
        label="tiempo de respuesta para cada una"
      >
        <Form.Select
          aria-label="tiempo de respuesta para cada una"
          className="mb-3"
          onChange={handleTimeChange}
        >
          <option value="15s">15 segundos</option>
          <option value="20s">20 segundos</option>
          <option value="30s">30 segundos</option>
        </Form.Select>
      </FloatingLabel>
    </>
  );
}
