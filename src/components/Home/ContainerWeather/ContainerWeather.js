import Form from "../Form/Form";
import Weather from "../Weather/Weather";
import "./ContainerWather.styles.css";

const ContainerWeather = ({dataWeather, handleQueryCity, handleSubmit}) => {

    return (
        <div className="container container-weather">
            <div className="row">
                <div  className="col-lg-6 col-sm-12">
                    <div className="overlay">
                        <h2>Search by City</h2>
                        <Form handleQueryCity={handleQueryCity} handleSubmit={handleSubmit}/>
                    </div>
                </div>
                <div className=" col-lg-6 weather col-sm-12">

                    <Weather dataWeather={dataWeather}/>
                </div>
            </div>
        </div>
    )
}

export default ContainerWeather;