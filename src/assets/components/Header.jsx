import React from 'react';

const Header = () => (
  <header className='header'>
    <figure>
      <img className='header__img' src='' alt='Platzi Video' />
    </figure>
    <nav className='header__menu'>
      <figure className='header__menu--profile'>
        <img src='' alt='' />
        <p>Perfil</p>
      </figure>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <a href='/'>Cerrar Sesión</a>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
