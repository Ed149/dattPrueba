import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer';
import { WeatherLogo } from '../../components/WeatherLogo';

export const RegisterPage = () => {

  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: ''
  });


  const onInputChange = ({ target }) => {
    setUser({
      ...user,
      [target.id]: target.value
    })
  }


  const onHandleSubmit = (e) => {
    e.preventDefault();
    let localStorageEmail = localStorage.getItem(user.email);

    if (localStorageEmail) throw { message: "Error, el correo ya existe" };
    localStorage.setItem(`${user.email}`, JSON.stringify(user));
  }

  return (
    <>

      <div className='container'>

        <form action='' onSubmit={onHandleSubmit} className='form__parent'>
          <WeatherLogo/>

          <div className="form__group mt-2">
            <input id="nombre" type="text" placeholder='Ingresa tu nombre' onChange={onInputChange} className='mb-1' />

            <input id="apellido" type="text" placeholder='Ingresa tu apellido' onChange={onInputChange} className='mb-1' />

            <input id="email" type="text" placeholder='Ingresa tu email' onChange={onInputChange} className='mb-1' />

            <input id="password" type="password" placeholder='Ingresa tu contraseña' onChange={onInputChange} className='mb-2' />
          </div>

          <div className="form__submit mb-2">
            <button className='btn'>Registrarse</button>
          </div>

          <p className='center'>¿Ya tienes una cuenta? <Link to="/auth/">Inicia Sesion</Link></p>
        </form>
      </div>

      <Footer />
    </>

  )
}
