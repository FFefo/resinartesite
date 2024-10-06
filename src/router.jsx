import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/LandingPage/Home.jsx';

export function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}