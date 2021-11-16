import "./Weather.styles.css";
import {Link} from "react-router-dom";


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

                    <div >
                        <Link to={`city/${dataWeather.name}`}>See More Info</Link>
                    </div>

                </>
            }
        </>
    )
}

export default Weather;