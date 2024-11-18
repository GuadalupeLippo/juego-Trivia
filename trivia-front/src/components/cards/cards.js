import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategory,getRandomQuestions } from "../../API/getDataBase";
import { useAuth } from "../auth/UserAuth";
import arte from "../../assets/login/arte.jpg";
import ciencias from "../../assets/login/ciencias.jpg";
import deportes from "../../assets/login/deportes3.png";
import entretenimiento from "../../assets/login/entretenimiento.jpg";
import geografia from "../../assets/login/geografia.jpg";
import historia from "../../assets/login/historia.jpeg";
import PlayButton from "../form-login/PlayButtom";
import aleatoria from "../../assets/login/aleatoria.png";
import "./cards.css";
import cienciasLogo from "../../assets/login/ciencias.png";
import deportesLogo from "../../assets/login/deportes.png";
import entretenimientoLogo from "../../assets/login/entretenimientoa.png";
import geografiaLogo from "../../assets/login/geografia 1.png";
import historiaLogo from "../../assets/login/historia.png";
import arteLogo from "../../assets/login/iconoarte.png";
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
const {authUser} = useAuth();
const [categoryData, setCategoryData] = useState(null);
const [randomQuestions, setrandomQuestions] = useState(null);

const playerId = authUser?.id;


useEffect(() => {
  if(selectedCategory === 7) {
    async function fetchRandomQestions() {
      try {
        const response = await getRandomQuestions();
        if(!response.ok) throw new Error("Error al obtener las preguntas");
        const questionRandomData = await response.json();
        console.log("Respuesta de la API:", questionRandomData);
        if (questionRandomData && questionRandomData.length > 0) {
        setrandomQuestions(questionRandomData); }
    else {
      console.error("No se encontraron preguntas aleatorias");
      } }catch (error) {
        console.error("Error fetching qestions:", error);
      }
    }
    fetchRandomQestions();
  } 
}, [selectedCategory]);

useEffect(() => {
  if(selectedCategory && selectedCategory !== 7 ) {
    async function fetchCategory() {
      try {
        const response = await getCategory(selectedCategory);
        if(!response.ok) throw new Error("Error al obtener la categoría");
        const data = await response.json();
        setCategoryData(data);
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
  if (selectedCategory === 7 && randomQuestions && randomQuestions.length > 0) {
    const logo = imagenesLogo["aleatoria"].logo;
    navigate("/trivia", {
      state: {
        logo,
        playerId,
        selectedTime,
        difficultyId: selectedDifficultyId,
        question: randomQuestions
      },
    });

  } else if (categoryData && categoryData.question && playerId ){
    const logo = imagenesLogo[selectedCategory]?.logo;
    navigate("/trivia", {state:{logo, categoryId: selectedCategory, playerId, selectedTime ,difficultyId: selectedDifficultyId, question: categoryData.question}});
  
  } else{
      alert('selecciona una categoria y dificultad')
    
    } console.log(selectedTime)
    console.log(playerId)
    console.log(categoryData?.question)
    console.log(randomQuestions)
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
