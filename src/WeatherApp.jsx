import { WeatherRouter } from './routes/WeatherRouter'
import { BrowserRouter, HashRouter } from 'react-router-dom'

function WeatherApp() {
  return (
    <>
     <HashRouter>
        <WeatherRouter />
      </HashRouter>
    </>
  )
}

export default WeatherApp;
