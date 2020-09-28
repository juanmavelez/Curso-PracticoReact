import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
/**
 * Contains the HTML of all the Carousel items
 */
const CarouselItem = () => (
  <figure className='carousel-item'>
    <img
      className='carousel-item__img'
      src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260'
      alt=''
    />
    <section className='carousel-item__details'>
      <figure>
        <img className='carousel-item__details--img' src='../assets/static/play-icon.png' alt='Play Icon' />
        <img className='carousel-item__details--img' src='../assets/static/plus-icon.png' alt='Plus Icon' />
      </figure>
      <figcaption>
        <p className='carousel-item__details--title'>Título descriptivo</p>
        <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
      </figcaption>
    </section>
  </figure>
);

export default CarouselItem;
