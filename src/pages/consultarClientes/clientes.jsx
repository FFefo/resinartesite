import './clientes.scss';
import Cabecalho from '../../components/Header/cabecalho';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ConsultaClientes() {

    const [token, setToken] = useState(null);
    const [cliente, setCliente] = useState([]);
    const [classe, setClasse] = useState('');

    const navigate = useNavigate()

    async function Buscar() {
        const url = `http://localhost:5027/clientes?x-access-token=${token}`;
        let resp = await axios.get(url);
        setCliente(resp.data);
    }

    async function Remover(id) {
        const url = `http://localhost:5027/clientes/${id}?x-access-token=${token}`;
        await axios.delete(url);

        await Buscar()
    }

    function teste(clientinho) {
        if (clientinho[0] == null) {
            setClasse('naoApertou')
        }
        else {
            setClasse('apertou')
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token === 'null') {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        teste(cliente)
    }, [cliente])


    return (
        <div className='pagina-consulta-cliente'>
            <Cabecalho />

            <Link to='/admin' className='voltar'><i className="fa-solid fa-arrow-left"></i>  Voltar à pagina de admin</Link>

            <button onClick={Buscar}>Consultar Clientes</button>

            <table className={classe}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>CEP</th>
                    </tr>
                </thead>

                <tbody>
                    {cliente.map(item =>
                        <tr>
                            <td id='id'>{item.id}</td>
                            <td id='nome'>{item.nome}</td>
                            <td id='idade'>{item.idade}</td>
                            <td>{item.telefone}</td>
                            <td>{item.email}</td>
                            <td>{item.cep}</td>
                            <div className='opcoes'>
                                <Link to={`/adicionar/${item.id}`}><i class="fa-solid fa-pen td"></i></Link>
                                <Link onClick={() => Remover(item.id)}><i className="fa-solid fa-trash td"></i></Link>

                            </div>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )
}