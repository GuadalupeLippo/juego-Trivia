import store from "../../assets/home/store.gif";
import categories from "../../assets/home/categories.gif";
import register from "../../assets/home/register.gif";
import trivia from "../../assets/home/trivia.gif";
import yourAvatars from "../../assets/home/yourAvatars.gif";
import './instructions.css';
import Carousel from 'react-bootstrap/Carousel';

export function CarrouselGifs() {
  return (
<div className='carousel_and_title'>

    <Carousel data-bs-theme="dark" ride="false">
    <Carousel.Item>
        <img 
          className="d-block w-100"
          src={register}
          alt="First slide"
        /> 
      </Carousel.Item>
      
      <Carousel.Item >
        <img  
          className="d-block w-100"
          src={categories}
          alt="Second slide"
        />
        
      </Carousel.Item>
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
          alt="Quarter slide"
        /> 
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={yourAvatars}
          alt="Fifth slide"
        /> 
      </Carousel.Item>

    </Carousel>
</div>
  );
}
