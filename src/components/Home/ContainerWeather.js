import styled from "@emotion/styled";
import Moutains from "../../assets/moutains.jpeg"
import Weather from "./Weather";
import Form from "./Form";


const ContainerWeather = ({dataWeather}) => {

    return (
        <Container className="container">
            <div className="row">
                <ContainerImagen style={{backgroundImage: `url(${Moutains})`}} className="col-lg-5">
                    <Overlay>
                        <Text2>Search by City</Text2>
                        <Form/>
                    </Overlay>
                </ContainerImagen>
                <div className=" col-lg-7">
                    <Weather dataWeather={dataWeather}/>
                </div>
            </div>
        </Container>
    )
}

const Text2 = styled.h2`
  padding: 10px;
  text-transform: capitalize;
  position: relative;
`;

const Container = styled.div`
  color: white;
  margin-top: 50px;
  background-color: #1E213A;
`;

const ContainerImagen = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Overlay = styled.div`
  height: 100%;
  background-color: rgba(16, 14, 29, 0.84);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export default ContainerWeather;