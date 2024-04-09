import { MdWaterDrop } from "react-icons/md";
import { BsWind } from "react-icons/bs";

export const WeatherForecast = ({ weatherForecast }) => {
    let days = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    let date = new Date(weatherForecast?.date);
    let day = days[date.getDay()];
    return (
        <div className="weatherForecast mt-1">


            <div className="weatherForecast__info d-flex ai-center">
                <img src={weatherForecast?.weather.icon} alt="weatherIcon" />

                <div className="weatherForecast__info__text">
                    <strong>{day}</strong>
                    <p>{weatherForecast?.weather.condition}</p>
                    <div className="d-flex">
                        <p>{weatherForecast?.weather.maxTempC}°/</p> 
                        <p>{weatherForecast?.weather.minTempC}°</p>
                    </div>
                </div>
            </div>

            <div className="weatherForecast__info_wind d-flex">
                <BsWind />
                <p>{weatherForecast?.weather.maxWindKph} Km/h</p>

            </div>
            <div className="weatherForecast__info_wind d-flex">
                <MdWaterDrop />
                <p>{weatherForecast?.weather.humidity} %</p>
            </div>
        </div>
    )
}
