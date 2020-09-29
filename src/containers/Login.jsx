import React from 'react';
import { Link } from 'react-router-dom';

/*    Styles    */
import '../assets/styles/components/Login.scss';

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

/**
 *Returns the component that must be renedered in the Login
 */
const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Sing in</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <input className='button' type='submit' />
        <span>Log in</span>
        <div className='login__container--remember-me'>
          <label htmlFor='cbox1'>
            Remember
            <input type='checkbox' id='cbox1' value='first_checkbox' />
          </label>
          <a href='/'>Forgot my password</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <figure>
          <img src={googleIcon} alt='Google Icon' />
          <span>Sing in with Google</span>
        </figure>
        <figure>
          <img src={twitterIcon} alt='Twitter icon' />
          <span>Sing in with Twitter</span>
        </figure>
      </section>
      <p className='login__container--register'>No tienes ninguna cuenta</p>
      <Link to='/register'>Regístrate</Link>
    </section>
  </section>
);

export default Login;
