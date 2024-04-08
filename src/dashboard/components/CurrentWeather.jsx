import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { CurrentWeatherInfo } from './CurrentWeatherInfo';

export const CurrentWeather = ({ currentWeather }) => {
    const date = new Date(currentWeather?.current.last_updated).toDateString();

    console.log("Date ", date);


    console.log("CurrentWeather en componente", currentWeather)
    return (
        <div className='content'>
            <div className="location mt-1">
                <FaLocationDot />
                <p>{`${currentWeather?.location.name}, ${currentWeather?.location.country}`}</p>
            </div>

            <div className="weather mt-1">
                <div className="weather__temperature mt-1">
                    <div className="weather__temperature_info">
                        <img src={currentWeather?.current.condition.icon} alt="" />
                        <h3>{Math.floor(currentWeather?.current.temp_c)}°<span>C</span></h3>
                    </div>

                    <div className="weather__temperature_general center">
                        <p>{currentWeather?.current.condition.text}</p>
                        <p>{date}</p>
                    </div>

                    <div className="weather__total_content mt-1">
                        <div className="weather__total center">
                            <BiSolidUpArrow />
                            <p>{currentWeather?.weather.maxTempC}°</p>
                        </div>

                        <div className="weather__total">
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
