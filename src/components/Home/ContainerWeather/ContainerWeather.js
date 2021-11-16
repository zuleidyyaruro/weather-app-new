import Form from "../Form/Form";
import Weather from "../Weather/Weather";
import "./ContainerWather.styles.css";
import Moutains from "../../../assets/moutains.jpeg"

const ContainerWeather = ({dataWeather, handleQueryCity, handleSubmit}) => {

    return (
        <div className="container container-weather">
            <div className="row">
                <div style={{backgroundImage: `url(${Moutains})`}} className="container-image col-lg-5">
                    <div className="overlay">
                        <h2>Search by City</h2>
                        <Form handleQueryCity={handleQueryCity} handleSubmit={handleSubmit}/>
                    </div>
                </div>
                <div className=" col-lg-7 weather">

                    <Weather dataWeather={dataWeather}/>
                </div>
            </div>
        </div>
    )
}

export default ContainerWeather;