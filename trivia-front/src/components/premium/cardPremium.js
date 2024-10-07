import React, { useState, useEffect } from "react";
import "./cardPremium.css";
import { TitlePremium } from "./titlePremium";
import { BuyAvatarModal } from '../avatars/modalWindow.js';
import { useAuth } from '../form-loguin/UserAuth.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function CardPremium() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [purchasedAvatars, setPurchasedAvatars] = useState({});
  const [premiumAvatars, setPremiumAvatars] = useState([]);  // aca se guardan los avatars premium
  const { authUser, updateScore } = useAuth();

  // aca se trae los avatars premium desde el backend
  useEffect(() => {
    fetchPremiumAvatars();
  }, []);

  const fetchPremiumAvatars = async () => {
    try {
      const response = await fetch('http://localhost:3000/avatars'); // Cambia la URL por la correcta de tu API
      const data = await response.json();
      
      // filtro que trae los avatares premium
      const filteredPremiumAvatars = data.filter(avatar => avatar.type === 'premium');
      
      // guarda los avatars premium filtrados
      setPremiumAvatars(filteredPremiumAvatars);
      
    } catch (error) {
      console.error('Error al traer los avatars premium:', error);
    }
  };
  

  const handleShowModal = (avatar) => {
    setSelectedAvatar(avatar);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedAvatar(null);
    setShowModal(false);
  };

  const handleConfirmPurchase = () => {
    setPurchasedAvatars((prev) => ({
      ...prev,
      [selectedAvatar.id]: true,
    }));
    const newScore = authUser?.score - selectedAvatar.price;
    updateScore(newScore);
    handleCloseModal();
  };

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
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
    <div className='card_premium_container'>
      {premiumAvatars.length > 0 ? ( // Verifica si hay avatares premium
        <Slider {...settings}>
          {premiumAvatars.map((avatar) => (
            <div key={avatar.id} className={`card_premium ${purchasedAvatars[avatar.id] ? 'purchased' : ''}`}>
              <h1 className='premium_title'><TitlePremium/></h1>
              <img className='premium_img' src={avatar.image} alt={`${avatar.price} Puntos`} />
              <h1 className='premium_price'>
                {purchasedAvatars[avatar.id] ? 'Canjeado' : `${avatar.price} Puntos`}
              </h1>
              {!purchasedAvatars[avatar.id] && (
                <button className='button_premium' onClick={() => handleShowModal(avatar)}>
                  Canjear
                </button>
              )}
            </div>
          ))}
        </Slider>
      ) : (
        <p>No hay avatares premium disponibles.</p> // Mensaje si no hay avatares
      )}
      <BuyAvatarModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirmPurchase={handleConfirmPurchase}
        selectedAvatar={selectedAvatar}
      />
    </div>
  );
}
