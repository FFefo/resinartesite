import './admin.scss'
import Cabecalho from '../../components/Header/cabecalho.jsx'
import BotaoAdmin from '../../components/botãoAdmin/botao.jsx'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

export default function LandingPageAdmin() {

    const [token, setToken] = useState(null);

    const navigate = useNavigate()

    async function Sair() {
        localStorage.setItem('USUARIO', null)
        navigate('/')
    }

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)
    
        if (token === 'null') {
            navigate('/')
        }
    }, [])

    return (
        <div className='pagina-admin'>

            <Cabecalho />

            <div className='conteúdo'>

                <button className='voltar' onClick={Sair}><i className="fa-solid fa-arrow-left"></i> Sair da conta</button>




                <div className='cont-sup'>

                    <div className='text'>
                        <h1>Bem vinda, Dani.</h1>
                        <p>Aqui você pode controlar o conteúdo de seu site, além de usufruir de outras ferramentas.</p>
                    </div>

                    {/* <div className='icon'>
                        <i className="fa-solid fa-bars"></i>
                    </div> */}
                </div>

                <div className='botoes'>
                    <BotaoAdmin imagem='/assets/images/barras.png' link='/consulta' texto='Consultar Produtos' />
                    <BotaoAdmin imagem='/assets/images/sinalmaisbg.png' link='/adicionar' texto='Adicionar Produtos' />
                </div>

            </div>

        </div>
    )
}