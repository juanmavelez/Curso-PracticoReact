import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
/**
 *Returns the component that must be renedered
 */
const App = () => (
  <div className='App'>
    <Header />
    <Search />
  </div>
);

export default App;
