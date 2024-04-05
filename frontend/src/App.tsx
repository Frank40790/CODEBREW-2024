import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoadPage from "./LoadPage";
import ScheduleView from "./ScheduleView";
import "./assets/css/fonts.css";

// TODO
// Make loading only accessible through app and not browser Done
// Create interface for todo list
// Secure routes so only accessible from app

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="loading" element={<LoadPage/>}/>
                    <Route path="schedule" element={<ScheduleView/>}/>
                </Routes>
		    </BrowserRouter>
        </>
    )
}

export default App;