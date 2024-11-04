import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { getDifficulty } from "../../API/getDataBase";
import { useEffect, useState } from "react";

export  function FormConfiguration({setSelectedTime}) {
const [difficultys, setDifficulty] = useState([]);



  useEffect(() => {
    async function fetchDifficulties(){
  try {
const response = await getDifficulty();
const difficultyData = await response.json();
  console.log(difficultyData)
  setDifficulty(difficultyData)
} catch (error) {
  console.error("Error al obtener las dificultades:", error);
}

} fetchDifficulties();
 }, []);

  const handleDifficultyChange = (event) => {
    const selectedDifficulty = event.target.value;
    const difficulty = difficultys.find((d) => d.nivel === selectedDifficulty);
       if(difficulty){

  setSelectedTime(difficulty.duracion);
}
      };



  return (
    <>
      <FloatingLabel controlId="floatingSelect" label="preguntas">
        <Form.Select aria-label="preguntas" className="mb-3" onChange={handleDifficultyChange}>
        { difficultys.map((difficulty) => (
          <option key={difficulty.id} value={difficulty.id}>
            {difficulty.nivel}
          </option>
           ))}
        </Form.Select>
      </FloatingLabel>
     
     
     
    </>
  );
}
