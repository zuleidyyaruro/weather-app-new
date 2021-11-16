import "./Weather.styles.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud, faThermometer, faWind} from "@fortawesome/free-solid-svg-icons";

const Weather = ({dataWeather}) => {

    return (
        <>
            {
                dataWeather.weather &&
                <>
                    <h2 className="text-yellow">{dataWeather?.name} / {dataWeather?.sys?.country}</h2>
                    <h2>{dataWeather.weather[0].description}</h2>
                    <h2>{dataWeather.main.temp} °C</h2>

                    <img src={`http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt=""/>
                    <div className="container-icons ">
                        <FontAwesomeIcon icon={faWind} size="lg"/>
                        <h2>wind speed: {dataWeather.wind.speed} m/s</h2>
                    </div>
                    <div className="container-icons ">
                        <FontAwesomeIcon icon={faCloud} size="lg"/>
                        <h2>clouds: {dataWeather.clouds.all}</h2>
                    </div>
                    <div className="container-icons ">
                        <FontAwesomeIcon icon={faThermometer} size="lg"/>
                        <h2>Pressure: {dataWeather.main.pressure} mb</h2>
                    </div>

                    <div>
                        <Link to={`city/${dataWeather.name}`}>See More Info</Link>
                    </div>

                </>
            }
        </>
    )
}

export default Weather;