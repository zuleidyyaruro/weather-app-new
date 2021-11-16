import styled from "@emotion/styled";

const Header=()=>{
    return(
        <header>
            <Titulo>Weather App</Titulo>
        </header>
    )
}

const Titulo=styled.h1`
  padding: 15px;
  color: #FBF46D;
  background-color: #1E213A;
`;


export default Header;