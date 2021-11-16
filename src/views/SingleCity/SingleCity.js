import "./SingleCity.styles.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../../components/Custom/Header/Header";

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
    }, [])
    ;
    return (
        <>
            <Header/>
            <div className="container container-singlecity">
                <h2>{dataWeatherCity.name} / {dataWeatherCity.sys?.country}</h2>
                <div className="row row-single">
                    <div className="col-lg-4 border card-singlecity">
                        <h3>Temperature</h3>
                        <h2>{dataWeatherCity.main?.temp} °C</h2>
                    </div>
                    <div className="col-lg-4 border card-singlecity">
                        <h3>Minimum Temperature</h3>
                        <h2>{dataWeatherCity.main?.temp_min} °C</h2>
                    </div>
                    <div className="col-lg-4 border card-singlecity">
                        <h3>Maximum Temperature</h3>
                        <h2>{dataWeatherCity.main?.temp_max} °C</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 border card-singlecity">
                        <h3>Humidity</h3>
                        <h2>{dataWeatherCity.main?.humidity} %</h2>
                    </div>
                    <div className="col-lg-4 border card-singlecity">
                        <h3>Pressure</h3>
                        <h2>{dataWeatherCity.main?.pressure} mb</h2>
                    </div>
                    <div className="col-lg-4 border card-singlecity">
                        <h3>Wind</h3>
                        <h2>{dataWeatherCity.wind?.speed} m/s</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCity;