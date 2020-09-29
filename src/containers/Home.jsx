import React from 'react';
import '../assets/styles/App.scss';

/*  Used to conect the app using react-redux  */
import { conect } from 'react-redux';

/*      COMPONENTS*     */
import Search from '../components/Search';
import Categories from '../components/Catergories';
import Carousel from '../components/Carousel';
import CaroulselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

/**
 *Returns the component that must be renedered in the home
 */
const Home = ({ myList, trends, originals} ) => {
  return (
    <>
      <Search />
      {/* /* if "mylist" is empty this categorie will not be shown  */}
      {myList.state === true && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.state === true &&
              myList.mylist.map((item) => <CaroulselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.trends.map((item) => <CaroulselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          { originals.originals.map((item) => <CaroulselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    <>
  );
};

const mapStateToProps = () => {
  return {
    myList: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
/**
 * @param props : map of our proprs
 * @param null : it does not have a reducer
 */
export default connect(mapStateToProps, null)(Home);
