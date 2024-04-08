import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { WeatherLogo } from '../../components/WeatherLogo';

export const LoginPage = () => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [messageError, setMessageError] = useState('');

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const onInputChange = ({ target }) => {
    setUser({
      ...user,
      [target.id]: target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsError(false);

    if(user.email === ''){
      console.log("Email en if",user.email)
      setIsError(true);
      setMessageError("El email es obligatorio");
      return;
    }

    let itemUser = JSON.parse(localStorage.getItem(`${user.email}`));

    if (!itemUser) {
      setIsError(true);
      setMessageError("El email no está registrado");
      return;
    }


    if (itemUser.password !== user.password) {
      setIsError(true);
      setMessageError("La contraseña es incorrecta");
      return;
    }

    console.log("Siguiente proceso");

    navigate("/dashboard");
  }

  return (
    <>
      <div className='container'>
        <form action="" onSubmit={handleOnSubmit} className='form__parent'>
          <WeatherLogo/>

          <div className="form__group mt-2 mb-2">
            <input id="email" type="text" placeholder='Ingresa tu email' onChange={onInputChange} className='mb-2' />
            <input id="password" type="password" placeholder='Ingresa tu contraseña' onChange={onInputChange} className='mb-1' />
            {
              isError ?
                <p className='error'>{messageError}</p> :
                ""
            }
          </div>

          <div className="form__submit mb-2">
            <button className='btn'>Login</button>
          </div>



          <p className='center'>¿No tienes cuenta? <Link to="/auth/register">Registrate</Link></p>
        </form>

      </div>

      <Footer />

    </>

  )
}