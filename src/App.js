
import Home from "./views/Home/Home";
import SingleCity from "./views/SingleCity/SingleCity";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="city/:name" element={<SingleCity/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
