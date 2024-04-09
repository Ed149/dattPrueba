import cloud from '../assets/nube.png'
export const WeatherLogo = () => {
    return (
        <div className="weatherLogo">
            <img src={cloud} alt="" />
            <h3 className='center'>WeatherApp</h3>
        </div>
    )
}
