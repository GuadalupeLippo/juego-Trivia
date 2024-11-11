import "./cards.css";
import { useEffect, useState } from "react";
import arteLogo from "./iconos/iconoarte.png";
import historiaLogo from "./iconos/historia.png";
import cienciasLogo from "./iconos/ciencias.png";
import deportesLogo from "./iconos/deportes.png";
import entretenimientoLogo from "./iconos/entretenimientoa.png";
import geografiaLogo from "./iconos/geografia 1.png";
import geografia from "../carrousel/imagenes/geografia.jpg";
import arte from "../carrousel/imagenes/arte.jpg";
import ciencias from "../carrousel/imagenes/ciencias.jpg";
import deportes from "../carrousel/imagenes/deportes3.png";
import entretenimiento from "../carrousel/imagenes/entretenimiento.jpg";
import historia from "../carrousel/imagenes/historia.jpeg";
import aleatoria from "../imagenes/aleatoria.png";
import PlayButton from "../form-login/PlayButtom";
import ModalConfig from "./PlayModal";
import { getCategory, getGames } from "../../API/getDataBase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/UserAuth";

const imagenesLogo = {
arte: {logo: arteLogo },
historia:{logo: historiaLogo} ,
geografia: {logo: geografiaLogo},
deportes:{logo: deportesLogo},
entretenimiento:{logo: entretenimientoLogo},
ciencia:{logo:cienciasLogo } ,
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
}, [])

 

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

  
const HadelCards = (selectTime) => {
    if(categoryData && playerId ){
    const logo = imagenesLogo[selectedCategory];
    navigate("/trivia", {state:{logo, categoryId: selectedCategory, playerId, selectTime , questions: categoryData.question}});
     } else{
      alert('selecciona una categoria y dificultad')
    } console.log(selectTime)
    console.log(playerId)
    console.log(categoryData.question)
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
            onPlay={(selectTime) => HadelCards(selectTime)}
          />
       
    </>
);
}
   
