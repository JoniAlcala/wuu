import React from 'react';
import '../assets/components/CarouselItem.scss';
import play from '../assets/static/play.png';
import mas from '../assets/static/add-image.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt='' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={play} alt='Play Icon' />
        <img className='carousel-item__details--img' src={mas} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>
        {
          `${year}${contentRating}${duration}`
        }
      </p>
    </div>
  </div>
);

export default CarouselItem;
