import "./Form.styles.css";

const Form = ({handleQueryCity, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write a City" onChange={handleQueryCity}/>
            <button>Search</button>
        </form>
    )
}

export default Form;