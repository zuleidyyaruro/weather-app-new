import "./Loader.styles.css";

const Loader = () => {
    return (
        <div className="container-loader">
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader;