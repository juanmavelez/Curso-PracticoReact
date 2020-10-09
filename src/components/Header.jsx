import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';

/*    Redux   */
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';

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

  const handleLogout = () => {
    props.logoutRequest({});
  };

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
          <p>Profile</p>
        </figure>
        <ul>
          {hasUser ? (
            <>
              <li>
                <a href='/'>{user.name}</a>
              </li>
              <li>
                <a href='#logout' onClick={handleLogout}>
                  Log out
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link to='/login'>Log In</Link>
            </li>
          )}
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

const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
