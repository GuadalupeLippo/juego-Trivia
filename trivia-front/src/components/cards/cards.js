import "./cards.css";
import { useState } from "react";
import arte from "../carrousel/imagenes/arte.jpg";
import historia from "../carrousel/imagenes/historia.jpeg";
import ciencias from "../carrousel/imagenes/ciencias.jpg";
import deportes from "../carrousel/imagenes/deportes3.png";
import entretenimiento from "../carrousel/imagenes/entretenimiento.jpg";
import geografia from "../carrousel/imagenes/geografia.jpg";
import aleatoria from "../imagenes/aleatoria.png";
import PlayButton from "../form-loguin/PlayButtom";
import ModalConfig from "./PlayModal";

export default function Cards() {
  const [showConfig, setShowConfig] = useState(false);

  const handleCloseConfig = () => setShowConfig(false);
  const handleShowConfig = () => setShowConfig(true);

  
  return (
    <>
      <div className="cardContainer">
        <div className="cards">
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

        <div className="cards">
          <div className="face front">
            <img src={historia} alt="logo historia" />
          </div>
          <div className="face back">
            <h3>Historia</h3>
            <p>Responde a las siguientes preguntas sobre historia universal.</p>
            <PlayButton onClick={handleShowConfig} />
          </div>
        </div>

        <div className="cards">
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

        <div className="cards">
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

        <div className="cards">
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

        <div className="cards">
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
        <div className="cards">
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
