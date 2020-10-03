import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

/*    connect the app with redux   */
import { connect } from 'react-redux';
/*    action used for this item */
import { setFavorite } from '../actions';

/*      ICONS     */
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

/**
 * Contains the HTML of all the Carousel items
 */
const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };

  return (
    <figure className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <section className='carousel-item__details'>
        <figure>
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' onClick={handleSetFavorite} />
        </figure>
        <figcaption>
          <p className='carousel-item__details--title'>{title}</p>
          <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
        </figcaption>
      </section>
    </figure>
  );
};

const mapDispatchToProps = {
  setFavorite,
};

/* we are not sending info, so we put null the map mapStateToProps */
export default connect(null, mapDispatchToProps)(CarouselItem);
