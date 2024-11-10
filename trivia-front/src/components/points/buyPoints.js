import React, { useState, useEffect } from 'react';
import './buyPoints.css';
import { ModalPoints } from './modalPoints';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div id="buy-points-section">
        <h1 className='points_title'>
          <span style={{color:"#5faab1"}}>¿Necesitas</span><span style={{color:"#3b757f"}}> más </span><span style={{color:"#356169"}}>puntos?</span>
        </h1>
  
        <Slider {...settings}>
          
          {pointsData.map((point) => (
          <div className='card_points_container'>
            
             <div className='card_points' key={point.id}>
              <h1 className='points_price'>Precio: {point.price}</h1>
              <img className='points_img' src={point.image} alt={`${point.points} Puntos`} />
              <h1 className='points_amount'>{point.points} Puntos</h1>
              <button className='button_points' onClick={() => handleOpenModal(point.points)}>Comprar</button>
            </div>
            </div>
          ))}
           </Slider>
          <ModalPoints show={showModal} handleClose={handleCloseModal} points={selectedPoints} />
        </div>
      
    </>
  );
}
