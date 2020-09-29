import React from 'react';
import '../assets/styles/App.scss';

/*      COMPONENTS*     */
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Catergories';
import Carousel from '../components/Carousel';
import CaroulselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

/*      API where we obtain the data from the pictures      */
const API = 'http://localhost:3000/initialState';

/**
 *Returns the component that must be renedered
 */
const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      {/* /* if "mylist" is empty this categorie will not be shown  */}
      {initialState.state === true && (
        <Categories title='Mi lista'>
          <Carousel>
            {initialState.state === true &&
              initialState.mylist.map((item) => <CaroulselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {initialState.state === true && initialState.trends.map((item) => <CaroulselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {initialState.state === true &&
            initialState.originals.map((item) => <CaroulselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
