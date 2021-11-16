import styled from "@emotion/styled";

const Form = () => {
    return (
        <ContainerForm action="">
            <InputCity type="text" placeholder="Write a City"/>
            <ButtonCity>Search</ButtonCity>
        </ContainerForm>
    )
}


const ContainerForm = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputCity = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 80%;
  border-radius: 5px;
  border: none;
`;

const ButtonCity = styled.button`
  padding: 7px;
  width: 40%;
  background-color: #FBF46D;
  color:#222;
  border: none;
  border-radius: 5px;
`;

export default Form;