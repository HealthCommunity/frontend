import { BrowserRouter, Routes, Route} from "react-router-dom";
import Board from "./Routes/Board";
import Exersise from "./Routes/Exersise";
import Freeboard from "./Routes/Freeboard";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Profile from "./Routes/Profile";
import Sign from "./Routes/Sign";
function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/" element={<Sign/>}/>
                <Route path="/" element={<Profile/>}/>
                <Route path="/" element={<Freeboard/>}/>
                <Route path="/" element={<Board/>}/>
                <Route path="/" element={<Exersise/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;