import React, { useState } from 'react';
import avatar1 from './avatars-img/bottts1.png';
import avatar2 from './avatars-img/bottts2.png';
import avatar3 from './avatars-img/bottts3.png';
import fondoDegradado1 from './avatars-img/verdeDegradado.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './avatars.css';
import { Navigation } from 'swiper/modules';
import { BuyAvatarModal } from './modalWindow.js'; // Importa tu componente modal

export function CarrouselAvatars() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='avatar_container'>
            <div className='card_container'>
              <article className='card_article'>
                <img src={avatar1} alt='avatar robot' className='card_img'/>
                <div className='card_data'>
                  <h3 className='card_precio'>Puntos</h3>
                </div> 
                <img src={fondoDegradado1} alt='...' className='card_bg' />
                <button className='card_button' onClick={handleShowModal}>Canjear</button>
              </article>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='avatar_container'>
            <div className='card_container'>
              <article className='card_article'>
                <img src={avatar2} alt='avatar robot' className='card_img'/>
                <div className='card_data'>
                  <h3 className='card_precio'>Puntos</h3>
                </div> 
                <img src={fondoDegradado1} alt='...' className='card_bg' />
                <button className='card_button' onClick={handleShowModal}>Canjear</button>
              </article>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='avatar_container'>
            <div className='card_container'>
              <article className='card_article'>
                <img src={avatar3} alt='avatar robot' className='card_img'/>
                <div className='card_data'>
                  <h3 className='card_precio'>Puntos</h3>
                </div> 
                <img src={fondoDegradado1} alt='...' className='card_bg' />
                <button className='card_button' onClick={handleShowModal}>Canjear</button>
              </article>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <BuyAvatarModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
}
