import './admin.scss'
import Cabecalho from '../../components/Header/cabecalho.jsx'
import BotaoAdmin from '../../components/botãoAdmin/botao.jsx'

export default function LandingPageAdmin() {
    return (
        <div className='pagina-admin'>

            <Cabecalho />

            <div className='conteúdo'>

                <div className='cont-sup'>


                    <div className='text'>
                        <h1>Bem vinda, Dani.</h1>
                        <p>Aqui você pode controlar o conteúdo de seu site, além de usufruir de outras ferramentas.</p>
                    </div>

                    <div className='icon'>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>

                <div className='botoes'>
                    <BotaoAdmin imagem='/assets/images/barras.png' link='/consulta' texto='Consultar Produtos' />
                    <BotaoAdmin imagem='/assets/images/barras.png' link='/adicionar' texto='Adicionar Produtos' />
                </div>

            </div>

        </div>
    )
}