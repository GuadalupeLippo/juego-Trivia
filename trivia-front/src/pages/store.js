import React from 'react';
import { Avatars } from '../components/avatars/avatars';
import { AnimatedTitle } from '../components/animatedTitle/title';
import './store.css'
export default function Store() {
  return (
    <div>
       <h1 className='tienda'>TIENDA</h1>
      <AnimatedTitle/>
      <Avatars/>
    </div>
  )
}
