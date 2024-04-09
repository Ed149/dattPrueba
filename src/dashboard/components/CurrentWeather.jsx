import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { CurrentWeatherInfo } from './CurrentWeatherInfo';

export const CurrentWeather = ({ currentWeather }) => {
    const newDate = currentWeather?.current.last_updated.split(' ');
    const date = new Date(newDate[0]);
    
    let days = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    let months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let dayNumber = newDate[0].split('-')[2];
    let year = date.getFullYear();

    let actualDate = `${day}, ${dayNumber} de ${month}, ${year}`


    return (
        <div className='content'>
            <div className="location d-flex mt-1">
                <FaLocationDot />
                <p>{`${currentWeather?.location.name}, ${currentWeather?.location.country}`}</p>
            </div>

            <div className="d-flex jc-center ai-center mt-1">
                <div className="weather__temperature mt-1">
                    <div className="weather__temperature_info d-flex ai-center jc-center">
                        <img src={currentWeather?.current.condition.icon} alt="" />
                        <h3>{Math.floor(currentWeather?.current.temp_c)}°<span>C</span></h3>
                    </div>

                    <div className="weather__temperature_general center">
                        <p>{currentWeather?.current.condition.text}</p>
                        <p>{actualDate}</p>
                    </div>

                    <div className="d-flex jc-space-arnd mt-1">
                        <div className="weather__total d-flex ai-center center">
                            <BiSolidUpArrow />
                            <p>{currentWeather?.weather.maxTempC}°</p>
                        </div>

                        <div className="weather__total d-flex ai-center">
                            <BiSolidDownArrow />
                            <p>{currentWeather?.weather.minTempC}°</p>
                        </div>
                    </div>

                </div>


            </div>
            <div className="pronostico__container">
                <CurrentWeatherInfo currentWeather={currentWeather} />
            </div>

        </div>
    )
}
