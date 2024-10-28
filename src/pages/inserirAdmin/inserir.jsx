import { useState, useEffect } from 'react';
import './inserir.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Cabecalho from '../../components/Header/cabecalho';
import axios from 'axios';

export default function Inserir() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [token, setToken] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams();

    function alterarImagem(e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagem(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

    async function Inserir() {
        let paramsCorpo = {
            "nome": nome,
            "descricao": descricao,
            "categoria": categoria,
            "quantidade": quantidade,
            "preco": preco,
            "imagem": imagem,
            "usuario": usuario
        }

        if (id === undefined) {

            const url = `http://localhost:5010/produtos?x-access-token=${token}`;
            let resp = await axios.post(url, paramsCorpo);
            alert('Produto adicionado a vitrine. Id: ' + resp.data.novoId);
        }
        else {

            const url = `http://localhost:5010/produtos/${id}?x-access-token=${token}`;
            await axios.put(url, paramsCorpo);
            alert('Produto alterado na vitrine.');
        }
    }

    async function Consultar() {
        const url = `http://localhost:5010/produtos?x-access-token=${token}`;
        let resp = await axios.get(url);
        let dados = resp.data;

        setNome(dados.nome);
        setDescricao(dados.descricao);
        setCategoria(dados.categoria);
        setQuantidade(dados.quantidade);
        setPreco(dados.preco);
        setImagem(dados.imagem);
        setUsuario(dados.usuario);
    }

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token === 'null') {
            navigate('/')
        }

        Consultar(token);
    }, [])

    return (
        <div className='pagina-inserir'>

            <Cabecalho />

            <div className='secao-insert'>


                <div className='caixinha'>
                    <Link to='/admin' className='voltar'><i className="fa-solid fa-arrow-left"></i>  Voltar à pagina de admin</Link>

                    <div className='campos'>

                        <label htmlFor="Nome">Nome:</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={e => setNome(e.target.value)} />

                        <label htmlFor="Descrição">Descrição:</label>
                        <input
                            type="text"
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)} />

                        <label htmlFor="Categoria">Categoria:</label>
                        <input
                            type="text"
                            value={categoria}
                            onChange={e => setCategoria(e.target.value)} />

                        <label htmlFor="Quantidade">Quantidade:</label>
                        <input
                            type="text"
                            value={quantidade}
                            onChange={e => setQuantidade(e.target.value)} />
                        <div>

                            <label htmlFor="Preço">Preço:</label>
                            <input
                                type="text"
                                value={preco}
                                onChange={e => setPreco(e.target.value)} />
                            <div>

                                <label htmlFor="Usuário">Usuário:</label>
                                <input
                                    type="text"
                                    value={usuario}
                                    onChange={e => setUsuario(e.target.value)} />
                                <div>

                                    <label htmlFor="imagem">Imagem:</label>
                                    <input
                                        type="file"
                                        accept='image/*'
                                        onChange={alterarImagem} />
                                    <i class='fa-solid fa-trash botao' onClick={() => setImagem(null)} />
                                </div>
                            </div>
                            {imagem &&
                                <div className='imagem'>
                                    <img
                                        id='inimigo'
                                        src={imagem}
                                        alt="Foto"
                                    />
                                </div>
                            }
                        </div>

                        <button onClick={Inserir}>Adicionar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
