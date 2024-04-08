import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Search } from './components/Search'
import { CurrentWeather } from './components/CurrentWeather';
import { Footer } from '../components/Footer';
import { WeatherForecast } from './components/WeatherForecast';

export const DashboardPage = () => {

    const [currentLocation, setcurrentLocation] = useState('Poza Rica');

    const [weatherData, setWeatherData] = useState([]);

    const [search, setSearch] = useState(false);

    const getWeatherData = async () => {
        let _urlBase = `${process.env.REACT_APP_API_URL}`;
        let currentEP = `${_urlBase}${process.env.REACT_APP_API_FORECAST}?key=${process.env.REACT_APP_API_KEY}&q=${currentLocation}&lang=es&days=6`
        let response = await fetch(currentEP);
        let { current, forecast, location } = await response.json();

        console.log("Data forecast", forecast);
        console.log("Data current", current);


        let objData = [];

        forecast.forecastday.map((el) => {
            objData.push({
                astro: {
                    sunrise: el.astro.sunrise,
                    sunset: el.astro.sunset
                },
                weather: {
                    condition: el.day.condition.text,
                    icon: `https:${el.day.condition.icon}`,
                    maxTempC: Math.floor(el.day.maxtemp_c),
                    minTempC: Math.floor(el.day.mintemp_c),
                    uv: el.day.uv,
                    precip: el.day.totalprecip_mm,
                    maxWindKph: Math.floor(el.day.maxwind_kph),
                    humidity:el.day.avghumidity
                },
                location
            })
        })
        objData[0].current = current;
        objData[0].current.condition.icon = `https:${current.condition.icon}`;
        setWeatherData(objData);
    }

    useEffect(() => {
        getWeatherData()
    }, []);

    const handleInputChange = ({ target }) => {
        setcurrentLocation(target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        getWeatherData()
    }

    const handleSearch = () => {
        console.log("HandleSearch", search);
        setSearch(!search);
    }

    return (
        <div className='dashboard '>
            <Navbar search={search} handleSearch={handleSearch} />
            {
                search ?
                    <Search handleInputChange={handleInputChange} handleOnSubmit={handleOnSubmit} /> :
                    ""
            }

            {
                weatherData.length && <CurrentWeather currentWeather={weatherData[0]} />
            }

            <div className="content weatherForecast__container">
                <h3>Pronostico de {weatherData.length} días</h3>
                {
                    weatherData.length && weatherData.map((el,i) => (
                        <WeatherForecast key={i} weatherForecast={el}/>
                    ))
                }

            </div>




            {/* <img src={weatherData?.icon} alt="Icon" styles="width:300px;height:100px; background-color:red;" /> */}
            {/* https://cdn.weatherapi.com/weather/64x64/night/248.png */}

            {/* <Footer /> */}
        </div>
    )
}
