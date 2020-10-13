import React from 'react';
import '../assets/styles/App.scss';

/*  Redux  */
import { connect } from 'react-redux';

/*      COMPONENTS*     */
import Search from '../components/Search';
import Categories from '../components/Catergories';
import Carousel from '../components/Carousel';
import CaroulselItem from '../components/CarouseItem';
import Header from '../components/Header';

/**
 *Returns the component that must be renedered in the home
 */
const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Header />
      <Search />
      {/*  if "mylist" is empty this categorie will not be shown  */}
      {mylist.length > 0 && (
        <Categories title='My Favorites'>
          <Carousel>
            {mylist.map((item) => (
              <CaroulselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Trending'>
        <Carousel>
          {trends.map((item) => (
            <CaroulselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originals Platzi Video'>
        <Carousel>
          {originals.map((item) => (
            <CaroulselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

/**
 * @param props : map of our proprs
 * @param null : it does not have a reducer
 */
export default connect(mapStateToProps, null)(Home);
