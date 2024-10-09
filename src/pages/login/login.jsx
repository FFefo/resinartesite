import './login.scss';

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

                <button>Entrar</button>
                
            </div>
        </div>

    )

}