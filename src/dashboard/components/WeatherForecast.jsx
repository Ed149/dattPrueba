import { MdWaterDrop } from "react-icons/md";
import { BsWind } from "react-icons/bs";

export const WeatherForecast = ({ weatherForecast }) => {

    console.log("weatherForecast", weatherForecast);


    return (
        <div className="weatherForecast">


            <div className="weatherForecast__info">
                <img src={weatherForecast?.weather.icon} alt="weatherIcon" />

                <div className="weatherForecast__info__text">
                    <p>{weatherForecast?.weather.condition}</p>
                    <div className="weatherForecast__info_temp">
                        <p>{weatherForecast?.weather.maxTempC}°</p>
                        <p>{weatherForecast?.weather.minTempC}°</p>
                    </div>
                </div>
            </div>

            <div className="weatherForecast__info_wind">
                <BsWind />
                <p>{weatherForecast?.weather.maxWindKph} Km/h</p>

            </div>
            <div className="weatherForecast__info_wind">
                <MdWaterDrop />
                <p>{weatherForecast?.weather.humidity} %</p>

            </div>




        </div>
    )
}
