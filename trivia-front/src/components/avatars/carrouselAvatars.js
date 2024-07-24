import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './avatars.css';
import { BuyAvatarModal } from './modalWindow.js';


export function CarrouselAvatars() {
   
  const [showModal, setShowModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [purchasedAvatars, setPurchasedAvatars] = useState({});
 

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
    handleCloseModal();
  };

 const avatars = [
    { id: 'George', src: "https://api.dicebear.com/9.x/bottts/svg?seed=George", points:200},
    { id: 'Loki', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Loki" , points:200},
    { id: 'Charlie', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Charlie", points:200 },
    { id: 'Bandit', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Bandit" , points:200},
    { id: 'Lucky', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Lucky" , points:200},
    { id: 'Jasmine', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Jasmine" , points:200},
    { id: 'Chester', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Chester", points:200 },
    { id: 'Boo', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Boo" , points:200},
    { id: 'Fluffy', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Fluffy", points:200 },
    { id: 'Bella', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Bella" , points:200},
    { id: 'Luna', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Luna" , points:200},
    { id: 'Baby', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Baby", points:200 },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {avatars.map((avatar) => (
          <div key={avatar.id}>
            <div className={`avatar_container ${purchasedAvatars[avatar.id] ? 'purchased' : ''}`}>
              <div className='card_container'>
                <article className='card_article'>
                  <img src={avatar.src} alt="avatar" className='card_img'/>
                  <div className='card_data'>
                    <h3 className='card_precio'>
                      {purchasedAvatars[avatar.id] ? 'Canjeado' : [avatar.points]}
                    </h3>
                    {!purchasedAvatars[avatar.id] && (
                      <button className='card_button' onClick={() => handleShowModal(avatar)}>
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
