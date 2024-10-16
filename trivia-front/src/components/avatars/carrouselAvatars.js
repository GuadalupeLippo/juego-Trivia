import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './avatars.css';
import { BuyAvatarModal } from './modalWindow.js';
import { useAuth } from '../auth/UserAuth.js'


export function CarrouselAvatars({ avatar }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [purchasedAvatars, setPurchasedAvatars] = useState({});
  const { authUser, updateScore } = useAuth();

  const handleShowModal = (avatar) => {
    console.log('Avatar seleccionado:', avatar);
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

  // Filtrar los avatares de tipo "normal"
  const normalAvatars = avatar.filter((av) => av.type === "normal");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
    <div className="slider-container">
      <Slider {...settings}>
        {normalAvatars.map((avatar) => (
          <div key={avatar.id}>
            <div className={`avatar_container ${purchasedAvatars[avatar.id] ? 'purchased' : ''}`}>
              <div className="card_container">
                <article className="card_article">
                  <img src={avatar.image} alt="avatar" className="card_img" />
                  <div className="card_data">
                    <h3 className="card_precio">
                      {purchasedAvatars[avatar.id] ? 'Canjeado' : [avatar.price]}
                    </h3>
                    {!purchasedAvatars[avatar.id] && (
                      <button className="card_button" onClick={() => handleShowModal(avatar)}>
                        Canjear
                      </button>
                    )}
                  </div>
                </article>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <BuyAvatarModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirmPurchase={handleConfirmPurchase}
        selectedAvatar={selectedAvatar}
      />
    </div>
  );
}
