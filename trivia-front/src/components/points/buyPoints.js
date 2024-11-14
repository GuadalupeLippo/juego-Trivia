// import React, { useState, useEffect } from 'react';
// import './buyPoints.css';
// // import { ModalPoints } from './modalPoints';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"; 
// import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

// const publicKey= process.env.MERCADOPAGO_PUBLIC_KEY;


// export function CardPoints() {
//   // const [showModal, setShowModal] = useState(false);
//   const [selectedPoints, setSelectedPoints] = useState(null);
//   const [pointsData, setPointsData] = useState([]);
//   const [preferenceId, setPreferenceId] = useState(null);
  
//   useEffect(() => {
//     const fetchPointsData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/score');
//         const data = await response.json();
//         console.log('Datos recibidos de puntos:', data);
//         setPointsData(data); 
//       } catch (error) {
//         console.error('Error al obtener los datos de puntos:', error);
//       }
//     };

//     fetchPointsData();
//   }, []);

//   initMercadoPago(publicKey);
//   const createPreference = async () => {
//    try {
//      const res = await fetch ('https://trivia-backend-bul5.onrender.com/buy-score',
//        {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json',
//          } ,
//            body: JSON.stringify({
//              item: selectedPoints,
//          }),
//        })
//        const parsed = await res.json()
//        const {id} = parsed
//        return id
//        }
//        catch (error){
//          console.error(error.message)
//        }
//    }

//    const handleBuyingProcess = async() => {
//     const id= await createPreference()
//     if (id) setPreferenceId(id) 
//    }

//   // const handleOpenModal = (points) => {
//   //   setSelectedPoints(points);
//   //   setShowModal(true);
//   // };

//   // const handleCloseModal = () => {
//   //   setShowModal(false);
//   // };

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: false,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div id="buy-points-section">
//         <h1 className='points_title'>
//           <span style={{color:"#5faab1"}}>¿Necesitas</span><span style={{color:"#3b757f"}}> más </span><span style={{color:"#356169"}}>puntos?</span>
//         </h1>
  
//         <Slider {...settings}>
          
//           {pointsData.map((point) => (
//           <div key={point.id} className='card_points_container'>
            
//              <div className='card_points' >
//               <h1 className='points_price'>Precio: {point.price}</h1>
//               <img className='points_img' src={point.image} alt={`${point.points} Puntos`} />
//               <h1 className='points_amount'>{point.points} Puntos</h1>
//               <button className='button_points' onClick={handleBuyingProcess}>Comprar</button>{
//                 preferenceId &&
//                 <wallet initialization={{preferenceId:preferenceId }}
//                   customization={{ texts: { valueProp: 'smart_option'}}} />
//               }

//             </div>
//             </div>
//           ))}
//            </Slider>
         
//         </div>
      
//     </>
//   );
// }
import React, { useState, useEffect } from 'react'; 
import './buyPoints.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const publicKey = process.env.MERCADOPAGO_PUBLIC_KEY;

export function CardPoints() {
  const [pointsData, setPointsData] = useState([]);
  const [preferenceId, setPreferenceId] = useState(null);
  
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

    fetchPointsData();
  }, []);

  initMercadoPago(publicKey);

  const createPreference = async (points) => {
    try {
      const res = await fetch('https://trivia-backend-bul5.onrender.com/buy-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: points }),
      });
      const parsed = await res.json();
      const { id } = parsed;
      return id;
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleBuyingProcess = async (points) => {
    const id = await createPreference(points);
    if (id) setPreferenceId(id);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: false, dots: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
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
              <button className='button_points' onClick={() => handleBuyingProcess(point)}>Comprar</button>
              {preferenceId && (
                <Wallet initialization={{ preferenceId: preferenceId }}
                        customization={{ texts: { valueProp: 'smart_option' }}} />
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
