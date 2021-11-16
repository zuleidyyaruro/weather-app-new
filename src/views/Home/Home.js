import {useEffect, useState} from "react";
import Header from "../../components/Custom/Header/Header";
import Loader from "../../components/Custom/Loader/Loader";
import ContainerWeather from "../../components/Home/ContainerWeather/ContainerWeather";

const Home = () => {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [dataWeather, setDataWeather] = useState({});
    const [loader, setLoader] = useState(true);
    //Estado para la cadena que el usuario escriba en el form
    const [queryCity, setQueryCity] = useState("");

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
                setLoader(false)
                handleDataWeater();
            }, 2000)

        } catch (error) {
            console.log(error);
        }
    }, [latitude, longitude]);

    const handleQueryCity = (e) => {
        setQueryCity(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiKey = 'e91b910bed5cbd8d49b26b384c197ded';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${apiKey}&units=Metric`;
        const response = await fetch(url);
        const result = await response.json();
        setDataWeather(result);
    }


    return (
        <div>
            <Header/>
            {
                loader ? <Loader/> : <ContainerWeather dataWeather={dataWeather} handleQueryCity={handleQueryCity}
                                                       handleSubmit={handleSubmit}/>
            }

        </div>
    )
}


export default Home;