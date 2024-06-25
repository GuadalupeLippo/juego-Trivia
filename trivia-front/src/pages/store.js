import React from 'react';
// import { Avatars } from '../components/avatars/avatars';
import { AnimatedTitle } from '../components/animatedTitle/title';
import { CarrouselAvatars } from '../components/avatars/carrouselAvatars';
export default function Store() {
  return (
    <div>
      <AnimatedTitle/>
      {/* <Avatars/> */}
      <CarrouselAvatars/>
    </div>
  )
}
