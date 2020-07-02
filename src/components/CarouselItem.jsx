import React from 'react';
import { connect } from 'react-redux';
import { setFavorite } from '../actions';
import '../assets/components/CarouselItem.scss';
import play from '../assets/static/play.png';
import mas from '../assets/static/add-image.png';

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
    </div>
  );
};
const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
