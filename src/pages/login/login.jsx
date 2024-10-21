import './login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import Cabecalho from '../../components/Header/cabecalho.jsx';

export default function Login() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate()

    async function entrar() {
        const usuario = {
            "nome": nome,
            "senha": senha
        }

        const url = `http://localhost:5010/entrar/`
        let resp = await axios.post(url, usuario)

        if (resp.data.erro !== undefined) {
            alert(resp.data.erro)
        }
        else {
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/admin')
        }
    }
    return (
        <div className='pagina-login'>

            <Cabecalho />

            <div className='secao-login'>


                <div className='caixinha'>

                    <h1>Login</h1>

                    <div className='campos'>

                        <label htmlFor='nome'>Nome de usuário</label>
                        <input
                            id='nome'
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} />


                        <label htmlFor='senha'>Senha</label>
                        <input
                            id='senha'
                            type="text"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />


                    </div>

                    <button onClick={entrar}>Entrar</button>

                </div>
            </div>
        </div>

    )

}