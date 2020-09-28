import React from 'react';
import '../assets/styles/App.scss';

/*      COMPONENTS*     */
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Catergories';
import Carousel from '../components/Carousel';
import CaroulselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
/**
 *Returns the component that must be renedered
 */
const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories>
      <Carousel>
        <CaroulselItem />
        <CaroulselItem />
        <CaroulselItem />
        <CaroulselItem />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
