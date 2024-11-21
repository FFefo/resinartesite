import './consulta.scss';
import Cabecalho from '../../components/Header/cabecalho';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Consulta() {

    const [token, setToken] = useState(null);
    const [produto, setProduto] = useState([]);
    const [classe, setClasse] = useState('');

    const navigate = useNavigate()

    async function Buscar() {
        const url = `http://localhost:5027/produtos?x-access-token=${token}`;
        let resp = await axios.get(url);
        setProduto(resp.data);
    }

    async function Remover(id) {
        const url = `http://localhost:5027/produtos/${id}?x-access-token=${token}`;
        await axios.delete(url);

        await Buscar()
    }

    function teste(produtinho) {
        if (produto[0] == null) {
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
        teste(produto)
    }, [produto])


    return (
        <div className='pagina-consulta'>
            <Cabecalho />

            <Link to='/admin' className='voltar'><i className="fa-solid fa-arrow-left"></i>  Voltar à pagina de admin</Link>

            <button onClick={Buscar}>Consultar Produtos</button>

            <table className={classe}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        {/* <th>Imagem</th> */}
                        <th>Usuário</th>
                        <th>Opções</th>
                    </tr>
                </thead>

                <tbody>
                    {produto.map(item =>
                        <tr>
                            <td id='id'>{item.id}</td>
                            <td id='nome'>{item.nome}</td>
                            <td id='desc'>{item.descricao}</td>
                            <td>{item.categoria}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.preco}</td>
                            <td id='user'>{item.usuario}</td>
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