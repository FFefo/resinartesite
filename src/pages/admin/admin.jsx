import './admin.scss'
import Cabecalho from '../../components/Header/cabecalho.jsx'

export default function LandingPageAdmin() {
    return (
        <div className='pagina-admin'>

            <Cabecalho />

            <div className='ferramentas'>

                    <div className='text'>
                        <h1>Bem vinda, Dani.</h1>
                        <p>Aqui você pode controlar o conteúdo de seu site, além de usufruir de outras ferramentas.</p>
                    </div>

                    <div className='icon'>
                        <i className="fa-solid fa-bars"></i>
                    </div>

                <div className='op'>

                </div>

            </div>

        </div>
    )
}