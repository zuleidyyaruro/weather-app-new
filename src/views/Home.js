import Header from "../components/Custom/Header";
import {useEffect, useState} from "react";
import ContainerWeather from "../components/Home/ContainerWeather";


const Home = () => {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [dataWeather, setDataWeather] = useState({})

    useEffect(() => {
        const success = (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        };
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    useEffect(() => {

        try {
            const handleDataWeater = async () => {
                const apiKey = 'e91b910bed5cbd8d49b26b384c197ded';
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=Metric`
                const response = await fetch(url);
                const result = await response.json();
                setDataWeather(result);
            }

            setTimeout(() => {
                handleDataWeater();
            }, 2000)

        } catch (error) {
            console.log(error);
        }
    }, [latitude, longitude])

    return (
        <div>
            <Header/>

            <ContainerWeather dataWeather={dataWeather}/>
        </div>
    )
}


export default Home;