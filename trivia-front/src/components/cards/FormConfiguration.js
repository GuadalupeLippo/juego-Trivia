import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export function FormConfiguration({ setSelectedTime , setSelectedQuestions}) {

  const handleTimeChange = (event) => {
    setSelectedTime(parseInt(event.target.value, 10));
  };
  const handleAswersChange = (event) => {
    setSelectedQuestions(parseInt(event.target.value));
  };
  return (
    <>
      <FloatingLabel controlId="floatingSelect" label="preguntas">
        <Form.Select aria-label="preguntas" className="mb-3" onChange={handleAswersChange}>
          <option value="1">1 </option>
          <option value="2">2 </option>
          <option value="3">3 </option>
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
