import './pedidos.scss';
import Cabecalho from '../../components/Header/cabecalho';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ConsultaPedidos() {

    const [token, setToken] = useState(null);
    const [pedido, setPedido] = useState([]);
    const [classe, setClasse] = useState('');

    const navigate = useNavigate()

    async function Buscar() {
        const url = `http://localhost:5027/pedidos?x-access-token=${token}`;
        let resp = await axios.get(url);
        setPedido(resp.data);
    }

    async function Remover(id) {
        const url = `http://localhost:5027/pedidos/${id}?x-access-token=${token}`;
        await axios.delete(url);

        await Buscar()
    }

    function teste(pedidinho) {
        if (pedidinho[0] == null) {
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
        teste(pedido)
    }, [pedido])


    return (
        <div className='pagina-consulta-pedido'>
            <Cabecalho />

            <Link to='/admin' className='voltar'><i className="fa-solid fa-arrow-left"></i>  Voltar à pagina de admin</Link>

            <button onClick={Buscar}>Consultar Pedidos</button>

            <table className={classe}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ClienteID</th>
                        <th>ProdutoID</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>DataDeEntrega</th>
                        <th>PedidoEntregue</th>
                    </tr>
                </thead>

                <tbody>
                    {pedido.map(item =>
                        <tr>
                            <td id='id'>{item.id}</td>
                            <td id='cliente_id'>{item.clienteId}</td>
                            <td id='produto_id'>{item.produtoId}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.preco}</td>
                            <td>{item.dataEntrega}</td>
                            <td>{item.entregue}</td>
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