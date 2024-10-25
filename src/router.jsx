import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/LandingPage/Home";
import Vitrine from "./pages/Vitrine/catalogo.jsx";
import Login from "./pages/login/login";
import LandingPageAdmin from "./pages/admin/admin.jsx";
import Consulta from "./pages/consultarAdmin/consulta.jsx";
import Inserir from "./pages/inserirAdmin/inserir.jsx";

export function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/vitrine" element={<Vitrine />} />
                <Route path="/admin" element={<LandingPageAdmin />} />
                <Route path='/consulta' element={<Consulta />} />
                <Route path='/adicionar' element={<Inserir />} />
            </Routes>
        </BrowserRouter>
    )
}