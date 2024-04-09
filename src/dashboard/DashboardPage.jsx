import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Search } from './components/Search'
import { CurrentWeather } from './components/CurrentWeather';
import { Footer } from '../components/Footer';
import { WeatherForecastContainer } from './components/WeatherForecastContainer';
import { Loader } from './components/Loader';
import {redirect} from 'react-router-dom'

export const DashboardPage = () => {
    let user = localStorage.getItem('actualUser');

    if(!user){
        console.log("No existe el usuario")
        return redirect("/auth/");   
    }

    const [currentLocation, setcurrentLocation] = useState('Poza Rica');

    const [weatherData, setWeatherData] = useState([]);

    const [search, setSearch] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const getWeatherData = async () => {
        setIsLoading(true);
        let _urlBase = `${process.env.REACT_APP_API_URL}`;
        let currentEP = `${_urlBase}${process.env.REACT_APP_API_FORECAST}?key=${process.env.REACT_APP_API_KEY}&q=${currentLocation}&lang=es&days=6`
        let response = await fetch(currentEP);
        let { current, forecast, location } = await response.json();

        let objData = [];

        forecast.forecastday.map((el) => {
            objData.push({
                date:el.date,
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
                    humidity: el.day.avghumidity
                },
                location
            })
        })
        objData[0].current = current;
        objData[0].current.condition.icon = `https:${current.condition.icon}`;
        setIsLoading(false);
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

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='dashboard'>
            <div className="dashboard__container">

                <Navbar search={search} isOpen={isOpen} handleSearch={handleSearch} handleIsOpen={handleIsOpen}
                />
                {
                    search ?
                        <Search handleInputChange={handleInputChange} handleOnSubmit={handleOnSubmit} /> :
                        ""
                }

                
                {
                    isLoading ? (<Loader/>) : ( weatherData.length && <CurrentWeather currentWeather={weatherData[0]} />)
                }
                {
                    isLoading ? "" : (weatherData.length && <WeatherForecastContainer weatherData={weatherData}/>)
                }
            
                <Footer />
            </div>
        </div>
    )
}
