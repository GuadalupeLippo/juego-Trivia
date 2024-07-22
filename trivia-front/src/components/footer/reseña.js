import Form from "react-bootstrap/Form";
import "./reseña.css";

function CheckReverseExample() {
  return (
    <Form className="Reseña">
      <h3>¿Ya jugaste?</h3>
      <h2>Califica el juego</h2>
      {["radio"].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <Form.Check
            reverse
            label="⭐"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="⭐ ⭐"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="⭐ ⭐ ⭐"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckReverseExample;
