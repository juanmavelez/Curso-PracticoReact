import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
/*      Icons     */
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

/**
 * Contains the html for Header
 */
const Header = () => (
  <header className='header'>
    <Link to='/'>
      <figure>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </figure>
    </Link>

    <nav className='header__menu'>
      <figure className='header__menu--profile'>
        <img src={userIcon} alt='user icon' />
        <p>Perfil</p>
      </figure>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <Link to='/login'>Iniciar Sesión</Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
