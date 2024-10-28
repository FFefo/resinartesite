import './consulta.scss';
import Cabecalho from '../../components/Header/cabecalho';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Consulta() {

    const [token, setToken] = useState(null);
    const [produto, setProduto] = useState([]);

    const navigate = useNavigate()

    async function Buscar() {
        const url = `http://localhost:5010/produtos?x-access-token=${token}`;
        let resp = await axios.get(url);
        setProduto(resp.data);
    }

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token === 'null') {
            navigate('/')
        }
    }, [])

    return (
        <div className='pagina-consulta'>
            <Cabecalho />

            <Link to='/admin' className='voltar'><i className="fa-solid fa-arrow-left"></i>  Voltar à pagina de admin</Link>

            <button onClick={Buscar}>Consultar Produtos</button>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Opções</th>
                    </tr>
                </thead>

                <tbody>
                    {produto.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.descricao}</td>
                            <td>{item.categoria}</td>
                            <td>{item.preco}</td>
                            <div className='opcoes'>
                                <i className="fa-solid fa-trash td"></i>
                                <i class="fa-solid fa-pen td"></i>

                            </div>
                        </tr>
                    )}
                    {/* 
                    <tr>
                        <td>id</td>
                        <td>nome</td>
                        <td>descricao</td>
                        <td>categoria</td>
                        <td>preco</td>
                    </tr> */}
                </tbody>
            </table>
        </div>

    )
}