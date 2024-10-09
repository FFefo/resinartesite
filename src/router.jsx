import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/LandingPage/Home";
import Login from "./pages/login/login";

export function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}