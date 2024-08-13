import Form from "react-bootstrap/Form";
import "./reseña.css";

function Reseña() {
  return (
    <Form className="reseña-conteiner">
      <h3 className="opinion">¡Tu opinion nos importa!</h3>
      <h2>Califica el juego</h2>
      {["radio"].map((type) => (
        <div key={`reverse-${type}`}>
          <Form.Check
            label="⭐"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            label="⭐ ⭐"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
           
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

export default Reseña;
