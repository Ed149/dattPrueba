import { useState } from 'react'
import { WeatherRouter } from './routes/WeatherRouter'
import { BrowserRouter } from 'react-router-dom'

function WeatherApp() {
  return (
    <>
     <BrowserRouter>
        <WeatherRouter />
      </BrowserRouter>
    </>
  )
}

export default WeatherApp;
