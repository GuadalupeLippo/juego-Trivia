import "./cards.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arte from "../carrousel/imagenes/arte.jpg";
import historia from "../carrousel/imagenes/historia.jpeg";
import ciencias from "../carrousel/imagenes/ciencias.jpg";
import deportes from "../carrousel/imagenes/deportes3.png";
import entretenimiento from "../carrousel/imagenes/entretenimiento.jpg";
import geografia from "../carrousel/imagenes/geografia.jpg";
import aleatoria from "../imagenes/aleatoria.png";
import PlayButton from "../form-loguin/PlayButtom";
import ModalConfig from "./PlayModal";

const triviaQuestions ={
  arte:[
  {
    question: "¿Quién pintó 'La Noche Estrellada'?",
    answers: [
      { text: "Vincent van Gogh", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false },
      { text: "Salvador Dalí", correct: false },
    ],
  },
  {
    question: "¿En qué país se encuentra la pintura rupestre de Lascaux?",
    answers: [
      { text: "Francia", correct: true },
      { text: "España", correct: false },
      { text: "Italia", correct: false },
      { text: "Portugal", correct: false },
    ],
  },
  {
    question: "¿Cuál es el movimiento artístico asociado con Jackson Pollock?",
    answers: [
      { text: "Expresionismo abstracto", correct: true },
      { text: "Impresionismo", correct: false },
      { text: "Surrealismo", correct: false },
      { text: "Cubismo", correct: false },
    ],
  },
  {
    question: "¿Quién esculpió el 'David'?",
    answers: [
      { text: "Miguel Ángel", correct: true },
      { text: "Donatello", correct: false },
      { text: "Leonardo da Vinci", correct: false },
      { text: "Rafael", correct: false },
    ],
  },
],
historia : [
  {
    question: "¿Quién fue el primer presidente de los Estados Unidos?",
    answers: [
      { text: "George Washington", correct: true },
      { text: "Thomas Jefferson", correct: false },
      { text: "John Adams", correct: false },
      { text: "Abraham Lincoln", correct: false }
    ]
  },
  {
    question: "¿En qué año comenzó la Primera Guerra Mundial?",
    answers: [
      { text: "1914", correct: true },
      { text: "1918", correct: false },
      { text: "1939", correct: false },
      { text: "1945", correct: false }
    ]
  },
  {
    question: "¿Quién fue el líder de la Unión Soviética durante la Segunda Guerra Mundial?",
    answers: [
      { text: "Joseph Stalin", correct: true },
      { text: "Vladimir Lenin", correct: false },
      { text: "Nikita Khrushchev", correct: false },
      { text: "Leonid Brezhnev", correct: false }
    ]
  },
  {
    question: "¿Qué imperio construyó la Gran Muralla China?",
    answers: [
      { text: "Dinastía Qin", correct: true },
      { text: "Dinastía Ming", correct: false },
      { text: "Dinastía Han", correct: false },
      { text: "Dinastía Tang", correct: false }
    ]
  }
],
geografia:  [
  {
    question: "¿Cuál es el país más grande del mundo por área?",
    answers: [
      { text: "Rusia", correct: true },
      { text: "Canadá", correct: false },
      { text: "China", correct: false },
      { text: "Estados Unidos", correct: false }
    ]
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    answers: [
      { text: "Nilo", correct: true },
      { text: "Amazonas", correct: false },
      { text: "Yangtsé", correct: false },
      { text: "Misisipi", correct: false }
    ]
  },
  {
    question: "¿En qué continente se encuentra el desierto del Sahara?",
    answers: [
      { text: "África", correct: true },
      { text: "Asia", correct: false },
      { text: "Australia", correct: false },
      { text: "América del Sur", correct: false }
    ]
  },
  {
    question: "¿Cuál es la capital de Japón?",
    answers: [
      { text: "Tokio", correct: true },
      { text: "Kioto", correct: false },
      { text: "Osaka", correct: false },
      { text: "Nara", correct: false }
    ]
  }
],
entretenimiento : [
  {
    question: "¿Quién protagonizó la película 'Forrest Gump'?",
    answers: [
      { text: "Tom Hanks", correct: true },
      { text: "Brad Pitt", correct: false },
      { text: "Leonardo DiCaprio", correct: false },
      { text: "Johnny Depp", correct: false }
    ]
  },
  {
    question: "¿Cuál es el nombre del parque temático de Disney en Florida?",
    answers: [
      { text: "Walt Disney World", correct: true },
      { text: "Disneyland", correct: false },
      { text: "Disneyland Paris", correct: false },
      { text: "Tokyo Disney Resort", correct: false }
    ]
  },
  {
    question: "¿Quién es conocido como el 'Rey del Rock and Roll'?",
    answers: [
      { text: "Elvis Presley", correct: true },
      { text: "Chuck Berry", correct: false },
      { text: "Little Richard", correct: false },
      { text: "Jerry Lee Lewis", correct: false }
    ]
  },
  {
    question: "¿Cuál es la serie de televisión con más temporadas hasta la fecha?",
    answers: [
      { text: "Los Simpson", correct: true },
      { text: "Friends", correct: false },
      { text: "Game of Thrones", correct: false },
      { text: "Breaking Bad", correct: false }
    ]
  }
],
ciencia: [
  {
    question: "¿Cuál es el elemento químico más abundante en el universo?",
    answers: [
      { text: "Hidrógeno", correct: true },
      { text: "Oxígeno", correct: false },
      { text: "Carbono", correct: false },
      { text: "Nitrógeno", correct: false }
    ]
  },
  {
    question: "¿Cuál es la velocidad de la luz en el vacío?",
    answers: [
      { text: "299,792 km/s", correct: true },
      { text: "300,000 km/s", correct: false },
      { text: "150,000 km/s", correct: false },
      { text: "1,000,000 km/s", correct: false }
    ]
  },
  {
    question: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
    answers: [
      { text: "Marte", correct: true },
      { text: "Júpiter", correct: false },
      { text: "Venus", correct: false },
      { text: "Saturno", correct: false }
    ]
  },
  {
    question: "¿Cuál es el órgano más grande del cuerpo humano?",
    answers: [
      { text: "La piel", correct: true },
      { text: "El hígado", correct: false },
      { text: "El corazón", correct: false },
      { text: "El cerebro", correct: false }
    ]
  }
],
deportes: [
  {
    question: "¿En qué país se originó el fútbol?",
    answers: [
      { text: "Inglaterra", correct: true },
      { text: "Brasil", correct: false },
      { text: "Alemania", correct: false },
      { text: "Italia", correct: false }
    ]
  },
  {
    question: "¿Cuántas medallas de oro ganó Michael Phelps en los Juegos Olímpicos de Beijing 2008?",
    answers: [
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "6", correct: false },
      { text: "5", correct: false }
    ]
  },
  {
    question: "¿Cuál es el deporte más popular en India?",
    answers: [
      { text: "Críquet", correct: true },
      { text: "Hockey sobre césped", correct: false },
      { text: "Fútbol", correct: false },
      { text: "Kabaddi", correct: false }
    ]
  },
  {
    question: "¿En qué año ganó España su primer Mundial de fútbol?",
    answers: [
      { text: "2010", correct: true },
      { text: "2006", correct: false },
      { text: "1998", correct: false },
      { text: "2014", correct: false }
    ]
  }
],
aleatoria: [
    {
      question: "¿Cuál es el animal terrestre más rápido?",
      answers: [
        { text: "Guepardo", correct: true },
        { text: "León", correct: false },
        { text: "Antílope", correct: false },
        { text: "Tigre", correct: false }
      ]
    },
    {
      question: "¿Cuál es el idioma más hablado en el mundo?",
      answers: [
        { text: "Mandarín", correct: true },
        { text: "Español", correct: false },
        { text: "Inglés", correct: false },
        { text: "Hindú", correct: false }
      ]
    },
    {
      question: "¿Cuál es el país con más islas en el mundo?",
      answers: [
        { text: "Suecia", correct: true },
        { text: "Indonesia", correct: false },
        { text: "Filipinas", correct: false },
        { text: "Japón", correct: false }
      ]
    },
    {
      question: "¿Cuál es la capital de Australia?",
      answers: [
        { text: "Canberra", correct: true },
        { text: "Sídney", correct: false },
        { text: "Melbourne", correct: false },
        { text: "Brisbane", correct: false }
      ]
    }
  ]
}
const imagenes = {
arte,
historia,
geografia,
deportes,
entretenimiento,
ciencias,
aleatoria
}


export default function Cards() {
  const [showConfig, setShowConfig] = useState(false);
  const navigate = useNavigate();
  const handleCloseConfig = () => setShowConfig(false);
  const handleShowConfig = () => setShowConfig(true);

    const HadelCards = (category) => {
      navigate("/trivia", { state: { questions: triviaQuestions[category], imagen: imagenes[category]} });
      
    }
  
  return (
    <>
      <div className="cardContainer">
        <div className="cards" onClick={() => HadelCards("arte")}>
          <div className="face front">
            <img src={arte} alt="logo arte" />
          </div>
          <div className="face back">
            <h3>Arte</h3>
            <p>
              Intenta demostrar todo lo que sabes sobre pintura, escultura,
              arquitectura y algo mas!
            </p>
            <PlayButton onClick={handleShowConfig} />
          </div>
        </div>

        <div className="cards"   onClick={() => HadelCards("historia")}>
          <div className="face front">
            <img src={historia} alt="logo historia"  />
          </div>
          <div className="face back">
            <h3>Historia</h3>
            <p>Responde a las siguientes preguntas sobre historia universal.</p>
            <PlayButton onClick={handleShowConfig} />
          </div>
        </div>

        <div className="cards"   onClick={() => HadelCards("ciencia")}>
          <div className="face front">
            <img src={ciencias} alt="logo ciencias" />
          </div>
          <div className="face back">
            <h3>Ciencias</h3>
            <p>
              Pon a prueba tu conocimiento de los hechos científicos y las
              aplicaciones de los principios científicos.
            </p>
            <PlayButton onClick={handleShowConfig} />
          </div>
        </div>

        <div className="cards"   onClick={() => HadelCards("deportes")}>
          <div className="face front">
            <img src={deportes} alt="logo deportes" />
          </div>
          <div className="face back">
            <h3>Deportes</h3>
            <p>
              {" "}
              Los deportes llevan milenios con nosotros, pero ¿Cuánto realmente
              sabes de ellos?
            </p>
            <PlayButton onClick={handleShowConfig} />
          </div>
        </div>

        <div className="cards"  onClick={() => HadelCards("entretenimiento")} >
          <div className="face front">
            <img src={entretenimiento} alt="logo entretenimiento" />
          </div>
          <div className="face back">
            <h3>Entretenimiento</h3>
            <p>
              ¿Eres un amante de las series, películas, teatro y todo lo
              relacionado con el ocio y el entretenimiento? Esta es la categoría
              para lucirte.
            </p>
            <PlayButton onClick={handleShowConfig} />
          </div>
        </div>

        <div className="cards"   onClick={() => HadelCards("geografia")}>
          <div className="face front">
            <img src={geografia} alt="logo geografia" />
          </div>
          <div className="face back">
            <h3>Geografia</h3>
            <p>
              {" "}
              Evalúa tus conocimientos sobre cosas tan variadas como las
              capitales del mundo y otro tipo de preguntas.
            </p>
            <PlayButton onClick={handleShowConfig} />
          </div>
        </div>
      </div>

      <div className="cardContainer1">
        <h1>Esta categoría suma más puntos!!!</h1>
        <div className="cards"   onClick={() => HadelCards("aleatoria")}>
          <div className="face front">
            <img src={aleatoria} alt="logo aleatoria" />
          </div>
          <div className="face back">
            <h3>Aleatoria</h3>
            <p>
              Descubre si eres lo suficientemente astuto para superar este
              desafio.
            </p>
            <PlayButton onClick={handleShowConfig} />
            <ModalConfig
              showConfig={showConfig}
              handleCloseConfig={handleCloseConfig}
            />
          </div>
        </div>
      </div>
    </>
  );
}
