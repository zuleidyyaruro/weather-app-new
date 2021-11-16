import "./SingleCity.styles.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../../components/Custom/Header/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faThermometerThreeQuarters,
    faThermometerEmpty,
    faThermometerFull,
    faTint,
    faStopwatch,
    faWind
} from "@fortawesome/free-solid-svg-icons";

const SingleCity = () => {

    const {name} = useParams();

    const [dataWeatherCity, setDataWeatherCity] = useState({});

    useEffect(() => {
        const handleData = async (e) => {
            const apiKey = 'e91b910bed5cbd8d49b26b384c197ded';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=Metric`;
            const response = await fetch(url);
            const result = await response.json();
            setDataWeatherCity(result);
        }

        handleData();
    }, [name])
    ;
    return (
        <>
            <Header/>
            <div className="container container-singlecity">
                <h2 className="title-singlecity">{dataWeatherCity.name} / {dataWeatherCity.sys?.country}</h2>
                <div className="image-singlecity">
                    {
                        dataWeatherCity.weather &&
                        <img src={`http://openweathermap.org/img/wn/${dataWeatherCity.weather[0].icon}@2x.png`} alt=""/>
                    }
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-12 card-singlecity">
                        <div>
                            <FontAwesomeIcon icon={faThermometerThreeQuarters} size="3x"/>
                        </div>
                        <div>
                            <h3>Temperature</h3>
                            <h2>{dataWeatherCity.main?.temp} °C</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 card-singlecity">
                        <div>
                            <FontAwesomeIcon icon={faThermometerEmpty} size="3x"/>

                        </div>
                        <div>
                            <h3>Minimum Temperature</h3>
                            <h2>{dataWeatherCity.main?.temp_min} °C</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 card-singlecity">
                        <div>
                            <FontAwesomeIcon icon={faThermometerFull} size="3x"/>
                        </div>
                        <div>
                            <h3>Maximum Temperature</h3>
                            <h2>{dataWeatherCity.main?.temp_max} °C</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-12 card-singlecity">
                        <div>
                            <FontAwesomeIcon icon={faTint} size="3x"/>
                        </div>
                        <div>
                            <h3>Humidity</h3>
                            <h2>{dataWeatherCity.main?.humidity} %</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 card-singlecity">
                        <div>
                            <FontAwesomeIcon icon={faStopwatch} size="3x"/>
                        </div>
                        <div>
                            <h3>Pressure</h3>
                            <h2>{dataWeatherCity.main?.pressure} mb</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 card-singlecity">
                        <div>
                            <FontAwesomeIcon icon={faWind} size="3x"/>
                        </div>
                        <div>
                            <h3>Wind</h3>
                            <h2>{dataWeatherCity.wind?.speed} m/s</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCity;