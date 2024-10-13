import './login.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    return (
        <div className='pagina-login'>
            <div className='login'>

                <h1>Login</h1>

                <div className='campos'>

                    <label>Nome de usuário</label>
                    <input type="text" placeholder='Insira seu usuário...' />
                    <label>Senha</label>
                    <input type="text" placeholder='Insira sua senha...' />

                </div>

                <button><Link to='/admin'>Entrar</Link></button>
                
            </div>
        </div>

    )

}