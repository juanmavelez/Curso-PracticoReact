import React from 'react';
import '../assets/styles/components/Categories.scss';
/**
 * Contains the title for the Categories Section
 * @param {*} param1 all the diferent categories component should be called here
 * @param {*} param2 prop used to select the title
 */

const Categories = ({ children, title }) => (
  <div className='categories'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categories;
