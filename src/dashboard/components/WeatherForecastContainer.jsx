import { WeatherForecast } from './WeatherForecast'

export const WeatherForecastContainer = ({weatherData}) => {
    console.log("WEather data",weatherData);
    return (
        <div className="content weatherForecast__container">
            <h3>Pronostico de {weatherData.length} días</h3>
            {
                weatherData.length && weatherData.map((el, i) => (
                    <WeatherForecast key={i} weatherForecast={el} />
                ))
            }

        </div>
    )
}
