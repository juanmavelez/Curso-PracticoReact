import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
/*    Styles    */
import '../assets/styles/components/Register.scss';

/**
 * Contains the html for Register
 */
const Register = (props) => {
  const [form, setValues] = useState({ email: '', name: '', password: '' });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Sing up</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input className='input' type='text' placeholder='Nombre' onChange={handleInput} />
          <input className='input' type='text' placeholder='Correo' onChange={handleInput} />
          <input className='input' type='password' placeholder='Contraseña' />
          <input className='button' type='submit' />
          Register
        </form>
        <Link to='/login'>Sing in</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
