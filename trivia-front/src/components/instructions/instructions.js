// import timer from './images/timer.gif';
// import register from './images/register.gif';

// import categories from './images/categories.gif';
import trivia from './images/ezgif-trivia.gif';
import avatares from './images/ezgif-avatars.gif';
import store from './images/ezgif-store.gif';
import './instructions.css';
import Carousel from 'react-bootstrap/Carousel';

export function CarrouselGifs() {
  return (
<div className='carousel_and_title'>

    <Carousel data-bs-theme="dark" ride="false">
    {/* <Carousel.Item>
        <img 
          className="d-block w-100"
          src={register}
          alt="Third slide"
        /> 
      </Carousel.Item> */}
      
      {/* <Carousel.Item >
        <img  
          className="d-block w-100"
          src={categories}
          alt="First slide"
        />
        
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img 
          className="d-block w-100"
          src={timer}
          alt="Second slide"
        />
    
      </Carousel.Item> */}

      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={trivia}
          alt="Third slide"
        /> 
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={store}
          alt="Third slide"
        /> 
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={avatares}
          alt="Third slide"
        /> 
      </Carousel.Item>

    </Carousel>
</div>
  );
}
