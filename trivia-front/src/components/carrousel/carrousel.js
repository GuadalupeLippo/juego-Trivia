import arte from './imagenes/arte.jpg'
import ciencias from './imagenes/ciencias.jpg'
import deportes3 from './imagenes/deportes3.png'
import entretenimiento from './imagenes/entretenimiento.jpg'
import geografia from './imagenes/geografia.jpg'
import historia from './imagenes/historia.jpeg'
import './carrousel.css'

import Carousel from 'react-bootstrap/Carousel';


function Carrousel() {
  return (
  
      
    
    <Carousel data-bs-theme="dark" >
      <Carousel.Item >
        <img  
          className="d-block w-100"
          src={entretenimiento}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={arte}
          alt="Second slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={ciencias}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={deportes3}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={geografia}
          alt="Third slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={historia}
          alt="Third slide"
        />
        
      </Carousel.Item>

    </Carousel>
  
 
  );
}

export default Carrousel;