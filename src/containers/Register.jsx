import React from 'react';
import { Link } from 'react-router-dom';

/*    Styles    */
import '../assets/styles/components/Register.scss';

/**
 * Contains the html for Register
 */
const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Sing up</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <input className='button' type='submit' />
        Register
      </form>
      <Link to='/login'>Sing in</Link>
    </section>
  </section>
);

export default Register;
