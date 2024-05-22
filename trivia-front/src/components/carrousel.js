import arte from './imagenes/arte.jpg'
import ciencias from './imagenes/ciencias.jpg'
import deportes from './imagenes/deportes.jpg'
import entretenimiento from './imagenes/entretenimiento.jpg'
import geografia from './imagenes/geografia.jpg'
import historia from './imagenes/historia.jpeg'


import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={entretenimiento}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Entretenimiento</h5>
          <p>Resolve las mejores preguntas de entretenimiento y suma puntos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={arte}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Arte</h5>
          <p>Divertite resolviendo las mejores preguntas arte.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ciencias}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>ciencias</h5>
          <p>
            aplica todo lo que sabes, y gana esta trivia.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={deportes}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Deportes</h5>
          <p>
            Si sabes mucho de deportes, no dudes que esta categoria es hecha para vos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={geografia}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Geografia</h5>
          <p>
            Suma puntos con tu respuesta correcta.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={historia}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Historia</h5>
          <p>
            Deslumbra mostrando los puntos obtenidos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default DarkVariantExample;