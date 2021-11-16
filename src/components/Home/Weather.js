import styled from "@emotion/styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud, faThermometer, faWind} from "@fortawesome/free-solid-svg-icons";

const Weather = ({dataWeather}) => {

    return (
        <>
            {
                dataWeather.weather &&
                <>
                    <TextYellow>{dataWeather?.name} / {dataWeather?.sys?.country}</TextYellow>
                    <Text2>{dataWeather.weather[0].description}</Text2>
                    <Text2>{dataWeather.main.temp} °C</Text2>

                    <img src={`http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt=""/>
                    <ContainerIcons>
                        <FontAwesomeIcon icon={faWind} size="lg"/>
                        <Text2>wind speed: {dataWeather.wind.speed} m/s</Text2>
                    </ContainerIcons>
                    <ContainerIcons>
                        <FontAwesomeIcon icon={faCloud} size="lg"/>
                        <Text2>clouds: {dataWeather.clouds.all}</Text2>
                    </ContainerIcons>
                    <ContainerIcons>
                        <FontAwesomeIcon icon={faThermometer} size="lg"/>
                        <Text2>Pressure: {dataWeather.main.pressure} mb</Text2>
                    </ContainerIcons>
                </>
            }
        </>
    )
}


const Text2 = styled.h2`
  padding: 7px;
  text-transform: capitalize;
`;

const TextYellow = styled.h2`
  padding: 7px;
  text-transform: capitalize;
  color:#FBF46D;
  font-size: 30px;
`;

const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Weather;