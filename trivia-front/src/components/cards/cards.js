import './cards.css';
import arte from '../carrousel/imagenes/arte.jpg';
import historia from '../carrousel/imagenes/historia.jpeg';
import ciencias from '../carrousel/imagenes/ciencias.jpg';
import deportes from '../carrousel/imagenes/deportes3.png';
import entretenimiento from '../carrousel/imagenes/entretenimiento.jpg';
import geografia from '../carrousel/imagenes/geografia.jpg';
import aleatoria from '../imagenes/aleatoria.png';

export default function Cards(){
  return (<>
<div className='cardContainer'>
    <div className='cards'>
      <div className='face front'>
      <img src={arte} alt="Arte"></img>
      </div>
    <div className='face back'>
        <h3>Arte</h3>
      </div>
      </div>

      <div className='cards'>
      <div className='face front'>
      <img src={historia}></img>
      </div>
    <div className='face back'>
        <h3>Historia</h3>
      </div>
      </div>

      <div className='cards'>
      <div className='face front'>
      <img src={ciencias}></img>
      </div>
    <div className='face back'>
        <h3>Ciencias</h3>
      </div>
      </div>

      <div className='cards'>
      <div className='face front'>
      <img src={deportes}></img>
      </div>
    <div className='face back'>
        <h3>Deportes</h3>
      </div>
      </div>

      <div className='cards'>
      <div className='face front'>
      <img src={entretenimiento}></img>
      </div>
    <div className='face back'>
        <h3>Entretenimiento</h3>
      </div>
      </div>

      <div className='cards'>
      <div className='face front'>
      <img src={geografia}></img>
      </div>
    <div className='face back'>
        <h3>Geografia</h3>
      </div>
    </div></div>

    <div className="cardContainer"> 
         <h1>Esta categoria suma mas puntos!!!</h1>
    <div className='cards'>
      <div className='face front'>
      
      <img src={aleatoria}></img>
      </div>
    <div className='face back'>
        <h3>Aleatoria</h3>
      </div>
    </div></div>
    
    </>
  )
}