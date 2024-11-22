import { useState, useEffect } from 'react';
import './inserirpedido.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Cabecalho from '../../components/Header/cabecalho';
import axios from 'axios';

export default function InserirPedido() {

    const [clienteID, setClienteID] = useState('');
    const [produtoID, setProdutoID] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [dataEntrega, setDataEntrega] = useState(0);
    const [entregue, setEntregue] = useState(0);
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
            "clienteID": clienteID,
            "produtoID": produtoID,
            "quantidade": quantidade,
            "preço": preco,
            "DataDeEntrega": dataEntrega,
            "pedidoEntregue": entregue
        }

        if (id === undefined) {

            const url = `http://localhost:5027/produtos?x-access-token=${token}`;
            let resp = await axios.post(url, paramsCorpo);
            alert('Produto adicionado a vitrine. Id: ' + resp.data.novoId);
        }
        else {

            const url = `http://localhost:5027/produtos/${id}?x-access-token=${token}`;
            await axios.put(url, paramsCorpo);
            alert('Produto alterado na vitrine.');
        }
    }

    async function Consultar(id, token) {
        if (id !== undefined) {
            const url = `http://localhost:5027/pedidos/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);
            let dados = resp.data;

            setClienteID(dados.clienteId);
            setProdutoID(dados.produtoId);
            setQuantidade(dados.quantidade);
            setPreco(dados.preco);
            setDataEntrega(dados.dataEntrega);
            setEntregue(dados.entregue);
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)


        if (token === 'null') {
            navigate('/')
        }

        Consultar(id, token);
    }, [])

    return (
        <div className='pagina-inserir'>

            <Cabecalho />

            <div className='secao-insert'>


                <div className='caixinha'>
                    <Link to='/admin' className='voltar'><i className="fa-solid fa-arrow-left"></i>  Voltar à pagina de admin</Link>

                    <div className='campos'>

                        <label htmlFor="ClienteID">ClienteID:</label>
                        <input
                            type="text"
                            value={clienteID}
                            onChange={e => setClienteID(e.target.value)} />

                        <label htmlFor="ProdutoID">ProdutoID:</label>
                        <input
                            type="text"
                            value={produtoID}
                            onChange={e => setProdutoID(e.target.value)} />

                        <label htmlFor="Quantidade">Quantidade:</label>
                        <input
                            type="text"
                            value={quantidade}
                            onChange={e => setQuantidade(e.target.value)} />

                        <label htmlFor="Preço">Preço:</label>
                        <input
                            type="text"
                            value={preco}
                            onChange={e => setPreco(e.target.value)} />

                        <label htmlFor="DataDeEntrega">DataDeEntrega:</label>
                        <input
                            type="text"
                            value={dataEntrega}
                            onChange={e => setDataEntrega(e.target.value)} />

                        <label htmlFor="Entregue">Entregue:</label>
                        <input
                            type="text"
                            value={entregue}
                            onChange={e => setEntregue(e.target.value)} />

                        <div className='campo-imagem'>

                            <label for="imagem">Imagem:</label>

                            <div className='camp'>

                                <input
                                    type="file"
                                    id='imgslt'
                                    accept='image/*'
                                    onChange={alterarImagem} />

                                <label htmlFor="imgslt" className='btimg'>Escolher Arquivo</label>

                                <div className='rmvbt'>

                                    <i class='fa-solid fa-trash botao' onClick={() => setImagem(null)} />

                                </div>

                            </div>

                        </div>

                        <label htmlFor="Usuário">Usuário:</label>
                        <input
                            type="text"
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)} />


                        <button onClick={Inserir}>{id ? "Alterar" : "Adicionar"}</button>

                    </div>
                </div>

                <div className='secao-imagem'>

                    <p>Imagem escolhida:</p>

                    <div className='caixinha-imagem'>

                        {imagem ?

                            <img style={{
                                width: "100%",
                            }}
                                id='produto'
                                src={imagem}
                                alt="Foto"
                            />

                            :

                            <img className='semImagem'
                                id='produto'
                                src={'/assets/images/photo.png'}
                                alt="Foto"
                            />

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}