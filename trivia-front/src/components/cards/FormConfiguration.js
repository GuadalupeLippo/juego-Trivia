import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { getDifficulty } from "../../API/getDataBase";
import { useEffect, useState } from "react";

export function FormConfiguration({ setSelectedTime, setDifficultyId }) {
  const [difficultys, setDifficulty] = useState([]);
  const [selectedDifficultyId, setSelectedDifficultyId] = useState(null);

  useEffect(() => {
    async function fetchDifficulties() {
      try {
        const response = await getDifficulty();
        const difficultyData = await response.json();

        setDifficulty(difficultyData);

        if (difficultyData.length > 0) {
          setSelectedDifficultyId(difficultyData[0].id);
          setSelectedTime(difficultyData[0].duracion);
          setDifficultyId(difficultyData[0].id);
        }
      } catch (error) {
        console.error("Error al obtener las dificultades:", error);
      }
    }
    fetchDifficulties();
  }, [setSelectedTime, setDifficultyId]);

  const handleDifficultyChange = (event) => {
    const selectedId = parseInt(event.target.value);
    setSelectedDifficultyId(selectedId); 
    console.log(selectedDifficultyId)

    const selectedDifficulty = difficultys.find((d) => d.id === selectedId);
    if (selectedDifficulty) {
      setSelectedTime(selectedDifficulty.duracion);
      setDifficultyId(selectedDifficulty.id);
      console.log("dificulta id", selectedDifficulty, selectedDifficultyId)
    }
  };

  return (
    <>
      <FloatingLabel controlId="floatingSelect" label="Selecciona la dificultad">
        <Form.Select
          aria-label="Dificultad"
          className="mb-3"
          onChange={handleDifficultyChange}
          value={selectedDifficultyId || ""}
        >
          {difficultys.map((difficulty) => (
            <option key={difficulty.id} value={difficulty.id}>
              {difficulty.nivel}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </>
  );
}
