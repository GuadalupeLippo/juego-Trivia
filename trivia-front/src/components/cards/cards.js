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
import { getGames } from "../../API/getDataBase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/UserAuth";

const imagenesLogo = {
arte: {logo: arteLogo , id:1},
historia:{logo: historiaLogo,id:4} ,
geografia: {logo: geografiaLogo, id:5},
deportes:{logo: deportesLogo, id:3},
entretenimiento:{logo: entretenimientoLogo , id:6},
ciencia:{logo:cienciasLogo , id:2} ,
aleatoria:{logo:aleatoria}
}
 


export default  function Cards() {
  const [showDifficulty, setShowDifficulty] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
const [gameData, setGameData]= useState(null);
const {autUser} = useAuth();


 useEffect(() => {
async function fetchData() {
try {
  const response = await getGames();
   const gameData = await response.json();
   setGameData(gameData);
} catch (error) {
  console.error("Error al obtener los datos:", error);
}
}
fetchData();
}, [])

 
const handleCloseDifficulty = () => setShowDifficulty(false);
const playerId = autUser?.id;

  const handleShowDifficulty =(category) => {
setSelectedCategory(category);
setShowDifficulty(true);
  } 

  
const HadelCards = () => {
    if(selectedCategory && playerId){
    const{logo, id}= imagenesLogo[selectedCategory];
    navigate("/trivia", { state:{ imagenesLogo: logo, categoryId: id, playerId: id} });
    }
  }

  
 
   
  
  return (
    <>
    <div className="cardContainer">
      <div className="cards" onClick={() => handleShowDifficulty("arte")}>
        <div className="face front">
          <img src={arte} alt="arte" />
        </div>
        <div className="face back">
          <h3>Arte</h3>
          <p>
            Intenta demostrar todo lo que sabes sobre pintura, escultura,
            arquitectura y algo mas!
          </p>
          <PlayButton onClick={() => handleShowDifficulty("arte")} />
        </div>
      </div>

      <div className="cards"   onClick={() => handleShowDifficulty("historia")}>
        <div className="face front">
          <img src={historia} alt=" historia"  />
        </div>
        <div className="face back">
          <h3>Historia</h3>
          <p>Responde a las siguientes preguntas sobre historia universal.</p>
          <PlayButton onClick={() => handleShowDifficulty("historia")} />
        </div>
      </div>

      <div className="cards"   onClick={() => handleShowDifficulty("ciencias")}>
        <div className="face front">
          <img src={ciencias} alt="ciencias" />
        </div>
        <div className="face back">
          <h3>Ciencias</h3>
          <p>
            Pon a prueba tu conocimiento de los hechos científicos y las
            aplicaciones de los principios científicos.
          </p>
          <PlayButton onClick={() => handleShowDifficulty("ciencias")} />
        </div>
      </div>

      <div className="cards"   onClick={() => handleShowDifficulty("deportes")}>
        <div className="face front">
          <img src={deportes} alt="deportes" />
        </div>
        <div className="face back">
          <h3>Deportes</h3>
          <p>
            
            Los deportes llevan milenios con nosotros, pero ¿Cuánto realmente
            sabes de ellos?
          </p>
          <PlayButton onClick={() => handleShowDifficulty("deportes")} />
        </div>
      </div>

      <div className="cards"  onClick={() => handleShowDifficulty("entretenimiento")} >
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
          <PlayButton onClick={() => handleShowDifficulty("entretenimiento")} />
        </div>
      </div>

      <div className="cards"   onClick={() => handleShowDifficulty("geografia")}>
        <div className="face front">
          <img src={geografia} alt="geografia" />
        </div>
        <div className="face back">
          <h3>Geografia</h3>
          <p>
           
            Evalúa tus conocimientos sobre cosas tan variadas como las
            capitales del mundo y otro tipo de preguntas.
          </p>
          <PlayButton onClick={() => handleShowDifficulty("geografia")} />
        </div>
      </div>
    </div>

    <div className="cardContainer1">
      <h1>Esta categoría suma más puntos!!!</h1>
      <div className="cards"   onClick={() => handleShowDifficulty("aleatoria")}>
        <div className="face front">
          <img src={aleatoria} alt="logo aleatoria" />
        </div>
        <div className="face back">
          <h3>Aleatoria</h3>
          <p>
            Descubre si eres lo suficientemente astuto para superar este
            desafio.
          </p>
          <PlayButton onClick={() => handleShowDifficulty("aleatoria")} />
          <ModalConfig
            show={showDifficulty}
            handleCloseDifficulty={handleCloseDifficulty}
            onPlay={HadelCards}
          />
        </div>
      </div>
    </div>
    </>
);
}
   
