import React from 'react';
import '../assets/styles/components/Carousel.scss';

/**
 * Contains the html for Carousel
 * @param {*} param0 contains all the intems  from carousel
 */
const Carousel = ({ children }) => (
  <section className='carousel'>
    <div className='carousel__container'>{children}</div>
  </section>
);
export default Carousel;
