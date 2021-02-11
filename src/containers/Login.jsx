import React, { useState } from 'react';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });
  const hanldeInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header />
      <section className='login'>
        <section className='login__container'>
          <h2>Sing in</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input name='email' className='input' type='text' placeholder='Email' onChange={hanldeInput} />
            <input name='contraseña' className='input' type='password' placeholder='Password' onChange={hanldeInput} />
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
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
