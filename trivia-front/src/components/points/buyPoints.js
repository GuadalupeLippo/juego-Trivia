import React, { useState } from 'react';
import './buyPoints.css';
import coin1 from '../images/coin1.jpg';
import coin2 from '../images/coin2.jpg';
import coin3 from '../images/coin3.jpg';
import coin4 from '../images/coin4.jpg';
import {ModalPoints} from './modalPoints';

export function CardPoints() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPoints, setSelectedPoints] = useState(null);

  const handleOpenModal = (points) => {
    setSelectedPoints(points);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <h1 className='points_title'><span style={{color:"#5faab1"}}>¿Necesitas</span><span style={{color:"#3b757f"}}> más </span><span style={{color:"#356169"}}>puntos?</span></h1>
  
    <div className='card_points_container'>
      <div className='card_points'>
        <h1 className='points_price'>Precio</h1>
        <img className='points_img' src={coin1} alt="500 Puntos"/>
        <h1 className='points_amount'>500 Puntos</h1>
        <button className='button_points' onClick={() => handleOpenModal(500)}>Comprar</button>
      </div>

      <div className='card_points'>
        <h1 className='points_price'>Precio</h1>
        <img className='points_img' src={coin2} alt="1000 Puntos"/>
        <h1 className='points_amount'>1000 Puntos</h1>
        <button className='button_points' onClick={() => handleOpenModal(1000)}>Comprar</button>
      </div>

      <div className='card_points'>
        <h1 className='points_price'>Precio</h1>
        <img className='points_img' src={coin3} alt="1500 Puntos"/>
        <h1 className='points_amount'>1500 Puntos</h1>
        <button className='button_points' onClick={() => handleOpenModal(1500)}>Comprar</button>
      </div>

      <div className='card_points'>
        <h1 className='points_price'>Precio</h1>
        <img className='points_img' src={coin4} alt="2000 Puntos"/>
        <h1 className='points_amount'>2000 Puntos</h1>
        <button className='button_points' onClick={() => handleOpenModal(2000)}>Comprar</button>
      </div>

      
      <ModalPoints show={showModal} handleClose={handleCloseModal} points={selectedPoints} />
    </div>
    </>
  );
}
