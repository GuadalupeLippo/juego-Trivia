import React, { useState, useEffect } from 'react';
import './buyPoints.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { jwtDecode } from 'jwt-decode';

export function CardPoints() {
  const [pointsData, setPointsData] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchPointsData = async () => {
      try {
        const response = await fetch('http://localhost:3000/score');
        const data = await response.json();
        console.log('Datos recibidos de puntos:', data);
        setPointsData(data); 
      } catch (error) {
        console.error('Error al obtener los datos de puntos:', error);
      }
    };

    const getUserIdFromToken = () => {
      const DataUser = localStorage.getItem('authATRV'); 
      if (DataUser) {
        try {
          const { token } = JSON.parse(DataUser);
          const decodedToken = jwtDecode(token);
          if (decodedToken && decodedToken.sub) {
            setUserId(decodedToken.sub); 
            console.log("User ID obtenido del token:", decodedToken.sub);
          }
        } catch (error) {
          console.error("Error al decodificar el token:", error);
        }
      }
    };

    fetchPointsData();
    getUserIdFromToken(); 
  }, []);

  const createPreference = async (point) => {
    try {
      const res = await fetch('http://localhost:3000/mercadopago/create_preference', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: [
            {
              pointsAmount: point.points,
              quantity: 1,
              currency_id: "ARS", 
              unit_price: parseFloat(point.price)
            }
          ],
          metadata: {
            user_id: userId,
          }
        })
      });
      const parsed = await res.json();
      return parsed; // Retorna el objeto completo
    } catch (error) {
      console.error('Error al crear la preferencia:', error);
    }
  };

  const handleBuyingProcess = async (point) => {
    const response = await createPreference(point);
    if (response && response.id) {
      console.log('Redirigiendo a Mercado Pago con preference_id:', response.id);
      window.open(`https://www.mercadopago.com.ar/checkout/v1/redirect?preference_id=${response.id}`, '_blank');
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
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
          arrows: false,
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
            <div key={point.id} className='card_points_container'>
              <div className='card_points'>
                <h1 className='points_price'>Precio: {point.price}</h1>
                <img className='points_img' src={point.image} alt={`${point.points} Puntos`} />
                <h1 className='points_amount'>{point.points} Puntos</h1>
                <button
                  className='button_points'
                  onClick={() => handleBuyingProcess(point)}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
