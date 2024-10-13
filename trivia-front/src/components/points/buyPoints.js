import React, { useState, useEffect } from 'react';
import './buyPoints.css';
import { ModalPoints } from './modalPoints';

export function CardPoints() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPoints, setSelectedPoints] = useState(null);
  const [pointsData, setPointsData] = useState([]);

  useEffect(() => {
    const fetchPointsData = async () => {
      try {
        const response = await fetch('http://localhost:3000/score');
        const data = await response.json();
        setPointsData(data); 
      } catch (error) {
        console.error('Error al obtener los datos de puntos:', error);
      }
    };

    fetchPointsData();
  }, []);

  const handleOpenModal = (points) => {
    setSelectedPoints(points);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div id="buy-points-section">
        <h1 className='points_title'>
          <span style={{color:"#5faab1"}}>¿Necesitas</span><span style={{color:"#3b757f"}}> más </span><span style={{color:"#356169"}}>puntos?</span>
        </h1>

        <div className='card_points_container'>
          {pointsData.map((point) => (
            <div className='card_points' key={point.id}>
              <h1 className='points_price'>Precio: {point.price}</h1>
              <img className='points_img' src={point.image} alt={`${point.points} Puntos`} />
              <h1 className='points_amount'>{point.points} Puntos</h1>
              <button className='button_points' onClick={() => handleOpenModal(point.points)}>Comprar</button>
            </div>
          ))}
          
          <ModalPoints show={showModal} handleClose={handleCloseModal} points={selectedPoints} />
        </div>
      </div>
    </>
  );
}
