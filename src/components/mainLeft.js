import React from 'react';
import image from '../media/image_bar.JPG';
import '../styling/main.scss';

function MainLeft() {
  return (
    <div className='mainLeft'>
      <img src={image} alt='unable to load image'/> 
      <div className="mainLeft__text">
        <h2>Choose a date range</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic possimus illum.</h3>
      </div>
    </div>
  )
}

export default MainLeft