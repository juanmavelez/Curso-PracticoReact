import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
/*      Icons     */
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/gravatar';

/**
 * Contains the html for Header
 */
const Header = (props) => {
  console.log(props);
  const { user = {} } = props;
  const hasUser = Object.keys(user).length > 0;

  return (
    <header className='header'>
      <Link to='/'>
        <figure>
          <img className='header__img' src={logo} alt='Platzi Video' />
        </figure>
      </Link>

      <nav className='header__menu'>
        <figure className='header__menu--profile'>
          {hasUser ? <img src={gravatar(user.email)} alt='user icon' /> : <img src={userIcon} alt='user icon' />}
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
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, null)(Header);
