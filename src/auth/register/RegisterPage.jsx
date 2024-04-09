import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer';
import { WeatherLogo } from '../../components/WeatherLogo';

export const RegisterPage = () => {

  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [messageError,setMessageError] = useState('');

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
    setIsError(false);
    let localStorageEmail = localStorage.getItem(user.email);

    if (localStorageEmail) {
      setIsError(true);
      setMessageError("El correo ya se encuentra registrado");
      return;
    }
    localStorage.setItem(`${user.email}`, JSON.stringify(user));

    alert("El usuario ha creado exitosamente");
    navigate('/auth/');
  }

  return (
    <>

      <div className='container'>

        <form action='' onSubmit={onHandleSubmit} className='form__parent'>
          <WeatherLogo/>

          <div className="form__group mt-2">
            <input id="nombre" type="text" placeholder='Ingresa tu nombre' onChange={onInputChange} className='mb-1' required/>

            <input id="apellido" type="text" placeholder='Ingresa tu apellido' onChange={onInputChange} className='mb-1' />

            <input id="email" type="email" placeholder='Ingresa tu email' onChange={onInputChange} className='mb-1' required/>

            <input id="password" type="password" placeholder='Ingresa tu contraseña' onChange={onInputChange} className='mb-1' minLength={6} required/>

            {
              isError ?
                <p className='error'>{messageError}</p> :
                ""
            }
          
          </div>

          <div className="form__submit mb-2">
            <button className='btn btn__active'>Registrarse</button>
          </div>

          <p className='center'>¿Ya tienes una cuenta? <Link to="/auth/">Inicia Sesion</Link></p>
        </form>
      </div>

      <Footer />
    </>

  )
}
