import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/CarouselItem.scss';

/*    connect the app with redux   */
import { connect } from 'react-redux';
/*    action used for this item */
import { setFavorite, deleteFavorite } from '../actions';

/*      ICONS     */
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

/**
 * Contains the HTML of all the Carousel items
 */
const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
      isList,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <figure className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <section className='carousel-item__details'>
        <figure>
          <Link to={`/player/${id}`}>
            <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Remove Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' onClick={handleSetFavorite} />
          )}
          <figcaption>
            <p className='carousel-item__details--title'>{title}</p>
            <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
          </figcaption>
        </figure>
      </section>
    </figure>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

/* we are not sending info, so we put null the map mapStateToProps */
export default connect(null, mapDispatchToProps)(CarouselItem);
