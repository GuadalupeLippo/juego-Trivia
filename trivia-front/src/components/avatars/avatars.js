import './avatars.css';
import avatar1 from './avatars-img/bottts1.png';
import avatar2 from './avatars-img/bottts2.png';
import avatar3 from './avatars-img/bottts3.png';
import fondoDegradado1 from './avatars-img/verdeDegradado.jpg';
import fondoDegradado2 from './avatars-img/fondo.png';
import fondoDegradado from './avatars-img/fondoVerde.jpg';
export function Avatars(){
    return (
        <div className='allAvatars'>
        <div className='avatar_container'>
        <div className='card_container'>
        <article className='card_article'>
            <img src={avatar1} alt='avatar robot' className='card_img'/>
            <div className='card_data'>
            <h3 className='card_precio'>Puntos</h3>
            </div> 
            <img src={fondoDegradado1} alt='...' className='card_bg' />
        <button className='card_button'>Canjear</button>
        </article>
       
        </div>
        </div>


<div className='avatar_container'>
<div className='card_container'>
<article className='card_article'>
    <img src={avatar2} alt='avatar robot' className='card_img'/>
    <div className='card_data'>
    <h3 className='card_precio'>Puntos</h3>
    </div> 
    <img src={fondoDegradado2} alt='...' className='card_bg' />
<button className='card_button'>Canjear</button>
</article>

</div>
</div>


<div className='avatar_container'>
<div className='card_container'>
<article className='card_article'>
    <img src={avatar3} alt='avatar robot' className='card_img'/>
    <div className='card_data'>
    <h3 className='card_precio'>Puntos</h3>
    </div> 
    <img src={fondoDegradado} alt='...' className='card_bg' />
<button className='card_button'>Canjear</button>
</article>

</div>
</div>
   </div> 
   )
}


