import { BsWind, BsFillSunFill, BsThermometer } from "react-icons/bs";
import { MdWaterDrop } from "react-icons/md";
import { AiFillCloud } from "react-icons/ai";
import pressure from '../../assets/manometro.png'
export const CurrentWeatherInfo = ({ currentWeather }) => {
    return (

        <div className="pronostico d-flex jc-space-btw ai-center mt-2">
            <div className="pronostico__info">
                <BsThermometer />
                <div className="pronostico__info_text">
                    <p>Sensación</p>
                    <p className="fw-700">{currentWeather?.current.feelslike_c} °C</p>
                </div>
            </div>

            <div className="pronostico__info">
                <BsWind />
                <div className="pronostico__info_text">
                    <p>Viento</p>
                    <p className="fw-700">{`${currentWeather?.current.wind_dir} ${Math.floor(currentWeather?.current.wind_kph)} Km/h`}</p>
                </div>
            </div>

            <div className="pronostico__info">
                <MdWaterDrop />
                <div className="pronostico__info_text">
                    <p>Humedad</p>
                    <p className="fw-700">{currentWeather?.current.humidity}%</p>
                </div>
            </div>

            <div className="pronostico__info">
                <BsFillSunFill />
                <div className="pronostico__info_text">
                    <p>Índice UV</p>
                    <p className="fw-700">{currentWeather?.current.uv} de 11</p>
                </div>
            </div>

            <div className="pronostico__info">
                <AiFillCloud />
                <div className="pronostico__info_text">
                    <p>Nubosidad</p>
                    <p className="fw-700">{currentWeather?.current.cloud} %</p>
                </div>
            </div>

            <div className="pronostico__info">
                <img src={pressure} alt="" className="pressure" />
                <div className="pronostico__info_text">
                    <p>Presion</p>
                    <p className="fw-700">{currentWeather?.current.pressure_mb}mbar</p>
                </div>
            </div>
        </div>

    )
}
