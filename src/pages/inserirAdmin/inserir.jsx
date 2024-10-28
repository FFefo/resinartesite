import { useState, useEffect } from 'react';
import './inserir.scss';
import { Link, useNavigate } from 'react-router-dom';
import Cabecalho from '../../components/Header/cabecalho';

export default function Inserir() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [token, setToken] = useState(null);

    const navigate = useNavigate()

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

    async function Adicionar() {
        let url = `http://localhost:5010/produtos?x-access-token=${token}`;
        let paramsCorpo = {
            "nome": {nome},
            "nome": {nome},
            "nome": {nome},
            "nome": {nome},
            "nome": {nome},
            "nome": {nome},
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token === 'null') {
            navigate('/')
        }
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

                        <label htmlFor="Preço">Preço:</label>
                        <input
                            type="text"
                            value={preco}
                            onChange={e => setPreco(e.target.value)} />
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

                <button>Adicionar</button>
            </div>
        </div>
    )
}