import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/components/CarouselItem.scss';
import play from '../assets/static/play.png';
import mas from '../assets/static/add-image.png';
<<<<<<< HEAD
import remove from '../assets/static/remove.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ cover, title, year, contentRating, duration });
  };
 

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt='' />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={play}
            alt='Play Icon'
          />
          <img
            className='carousel-item__details--img'
            src={mas}
            alt='Plus Icon'
            onClick={handleSetFavorite}
          />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {
            `${year}${contentRating}${duration}`
          }
        </p>
      </div>
=======

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
>>>>>>> b0d9c0135e28e9931ebd1a252e5ecfffd14cadbf
    </div>
  );
};
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
