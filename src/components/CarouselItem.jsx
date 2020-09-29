import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
/*      ICONS     */
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
/**
 * Contains the HTML of all the Carousel items
 */

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <figure className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <section className='carousel-item__details'>
      <figure>
        <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
      </figure>
      <figcaption>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </figcaption>
    </section>
  </figure>
);

export default CarouselItem;
