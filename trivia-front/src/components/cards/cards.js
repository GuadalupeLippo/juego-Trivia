import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategory, getGames } from "../../API/getDataBase";
import { useAuth } from "../auth/UserAuth";
import arte from "../carrousel/imagenes/arte.jpg";
import ciencias from "../carrousel/imagenes/ciencias.jpg";
import deportes from "../carrousel/imagenes/deportes3.png";
import entretenimiento from "../carrousel/imagenes/entretenimiento.jpg";
import geografia from "../carrousel/imagenes/geografia.jpg";
import historia from "../carrousel/imagenes/historia.jpeg";
import PlayButton from "../form-login/PlayButtom";
import aleatoria from "../imagenes/aleatoria.png";
import "./cards.css";
import cienciasLogo from "./iconos/ciencias.png";
import deportesLogo from "./iconos/deportes.png";
import entretenimientoLogo from "./iconos/entretenimientoa.png";
import geografiaLogo from "./iconos/geografia 1.png";
import historiaLogo from "./iconos/historia.png";
import arteLogo from "./iconos/iconoarte.png";
import ModalConfig from "./PlayModal";


const imagenesLogo = {
1: {logo: arteLogo },
4:{logo: historiaLogo} ,
5: {logo: geografiaLogo},
3:{logo: deportesLogo},
6:{logo: entretenimientoLogo},
2:{logo:cienciasLogo } ,
aleatoria:{logo:aleatoria, id:7}
}
 


export default  function Cards() {
  const [showDifficulty, setShowDifficulty] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
const [gameData, setGameData]= useState(null);
const {authUser} = useAuth();
const [categoryData, setCategoryData] = useState(null);
const playerId = authUser?.id;



 useEffect(() => {
async function fetchData() {
try {
  const response = await getGames();
  const  gameData = await response.json();
   setGameData(gameData);
} catch (error) {
  console.error("Error al obtener los datos:", error);
}
}
fetchData();
}, [gameData])

 

useEffect(() => {
  if(selectedCategory ) {
    async function fetchCategory() {
      try {
        const response = await getCategory(selectedCategory);
        if(!response.ok) throw new Error("Error al obtener la categoría");
        const data = await response.json();
        setCategoryData(data); // Guardar los datos de la categoría y preguntas
      console.log(data)
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    }
    fetchCategory();
  }
}, [selectedCategory]);


const handleCloseDifficulty = () => setShowDifficulty(false);
const handleShowDifficulty = (category) => {
   
setSelectedCategory(category);
 console.log("la categoria es:", category)
setShowDifficulty(true);
  };

  
const HadelCards = (selectedTime, selectedDifficultyId) => {
    if(categoryData && playerId ){
    const logo = imagenesLogo[selectedCategory]?.logo;
    navigate("/trivia", {state:{logo, categoryId: selectedCategory, playerId, selectedTime ,difficultyId: selectedDifficultyId, question: categoryData.question}});
     } else{
      alert('selecciona una categoria y dificultad')
    } console.log(selectedTime)
    console.log(playerId)
    console.log(categoryData?.question)
    console.log(selectedDifficultyId)
  }

  
 
   
  
  return (
    <>
    <div className="cardContainer">
      <div className="cards" onClick={() => handleShowDifficulty(1)}>
        <div className="face front">
          <img src={arte} alt="arte" />
        </div>
        <div className="face back">
          <h3>Arte</h3>
          <p>
            Intenta demostrar todo lo que sabes sobre pintura, escultura,
            arquitectura y algo mas!
          </p>
          <PlayButton onClick={() => handleShowDifficulty(1)} />
        </div>
      </div>

      <div className="cards"   onClick={() => handleShowDifficulty(4)}>
        <div className="face front">
          <img src={historia} alt=" historia"  />
        </div>
        <div className="face back">
          <h3>Historia</h3>
          <p>Responde a las siguientes preguntas sobre historia universal.</p>
          <PlayButton onClick={() => handleShowDifficulty(4)} />
        </div>
      </div>

      <div className="cards"   onClick={() => handleShowDifficulty(2)}>
        <div className="face front">
          <img src={ciencias} alt="ciencias" />
        </div>
        <div className="face back">
          <h3>Ciencias</h3>
          <p>
            Pon a prueba tu conocimiento de los hechos científicos y las
            aplicaciones de los principios científicos.
          </p>
          <PlayButton onClick={() => handleShowDifficulty(2)} />
        </div>
      </div>

      <div className="cards"   onClick={() => handleShowDifficulty(3)}>
        <div className="face front">
          <img src={deportes} alt="deportes" />
        </div>
        <div className="face back">
          <h3>Deportes</h3>
          <p>
            
            Los deportes llevan milenios con nosotros, pero ¿Cuánto realmente
            sabes de ellos?
          </p>
          <PlayButton onClick={() => handleShowDifficulty(3)} />
        </div>
      </div>

      <div className="cards"  onClick={() => handleShowDifficulty(6)} >
        <div className="face front">
          <img src={entretenimiento} alt="entretenimiento" />
        </div>
        <div className="face back">
          <h3>Entretenimiento</h3>
          <p>
            ¿Eres un amante de las series, películas, teatro y todo lo
            relacionado con el ocio y el entretenimiento? Esta es la categoría
            para lucirte.
          </p>
          <PlayButton onClick={() => handleShowDifficulty(6)} />
        </div>
      </div>

      <div className="cards"   onClick={() => handleShowDifficulty(5)}>
        <div className="face front">
          <img src={geografia} alt="geografia" />
        </div>
        <div className="face back">
          <h3>Geografia</h3>
          <p>
           
            Evalúa tus conocimientos sobre cosas tan variadas como las
            capitales del mundo y otro tipo de preguntas.
          </p>
          <PlayButton onClick={() => handleShowDifficulty(5)} />
        </div>
      </div>
    </div>

    <div className="cardContainer1">
      <h1>Esta categoría suma más puntos!!!</h1>
      <div className="cards"   onClick={() => handleShowDifficulty(7)}>
        <div className="face front">
          <img src={aleatoria} alt="logo aleatoria" />
        </div>
        <div className="face back">
          <h3>Aleatoria</h3>
          <p>
            Descubre si eres lo suficientemente astuto para superar este
            desafio.
          </p>
          <PlayButton onClick={() => handleShowDifficulty(7)} />
             </div>
      </div>
    </div>
          <ModalConfig
            show={showDifficulty}
            handleCloseDifficulty={handleCloseDifficulty}
            onPlay={(selectedTime, selectedDifficultyId) => HadelCards(selectedTime, selectedDifficultyId)}
          />
       
    </>
);
}
   
