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

  setDifficulty(difficultyData)
} catch (error) {
  console.error("Error al obtener las dificultades:", error);
}

} fetchDifficulties();
 }, []);

  const handleDifficultyChange = (event) => {
    const selectedDifficultyId = parseInt(event.target.value);
    const selectedDifficulty = difficultys.find((d) => d.id === selectedDifficultyId);
       if(selectedDifficulty){

  setSelectedTime(selectedDifficulty.duracion);
}
      };



  return (
    <>
      <FloatingLabel controlId="floatingSelect" label="selecciona la dificultad">
        <Form.Select aria-label="dificultad" className="mb-3" onChange={handleDifficultyChange}>
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
