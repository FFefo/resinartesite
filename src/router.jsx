import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/LandingPage/Home";
import Vitrine from "./pages/Vitrine/catalogo.jsx";
import Login from "./pages/login/login";
import LandingPageAdmin from "./pages/admin/admin.jsx";
import Consulta from "./pages/consultarAdmin/consulta.jsx";
import Inserir from "./pages/inserirAdmin/inserir.jsx";
import Sobre from "./pages/sobre/sobre.jsx";
import ConsultaClientes from "./pages/consultarClientes/clientes.jsx";
import ConsultaPedidos from "./pages/consultarPedidos/pedidos.jsx";
import InserirCliente from "./pages/inserirCliente/inserircliente.jsx";
import InserirPedido from "./pages/inserirPedido/inserirpedido.jsx";

export function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/vitrine" element={<Vitrine />} />
                <Route path="/admin" element={<LandingPageAdmin />} />
                <Route path='/consulta' element={<Consulta />} />
                <Route path='/adicionar/:id' element={<Inserir />} />
                <Route path='/adicionar' element={<Inserir />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/consultaclientes' element={<ConsultaClientes />} />
                <Route path='/consultapedidos' element={<ConsultaPedidos />} />
                <Route path='/inserircliente' element={<InserirCliente />} />
                <Route path='/inserirpedido' element={<InserirPedido />} />
            </Routes>
        </BrowserRouter>
    )
}