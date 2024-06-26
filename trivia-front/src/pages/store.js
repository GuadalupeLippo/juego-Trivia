import React from 'react';
import { NavLoguin } from '../components/nav-home/NavLoguin';
import { AnimatedTitle } from '../components/animatedTitle/title';
import { CarrouselAvatars } from '../components/avatars/carrouselAvatars';
export default function Store() {
  return (
    <div>
       <NavLoguin/>
      <AnimatedTitle/>
      <CarrouselAvatars/>
    </div>
  )
}
