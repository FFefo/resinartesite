import './catalogo.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Header/cabecalho.jsx';
import Rodape from '../../components/Body/rodape.jsx';
import Produto from '../../components/Produto/produto.jsx';

export default function Vitrine() {
    return (
        <div className='vitrine-catalogo'>

            <Cabecalho />

            <div className='pesquisa'>

                <div className='barrinha' >
                    <input type="text" placeholder='Pesquisar' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

            </div>

            <div className='carrossel'>

            </div>

            <div className='catalogo'>

                <p>CATÁLOGO</p>

                <div className='vt'>
                    <Produto imagem='/assets/images/produto1vitrine.jpg' alt='produto1' descrição='Chaveiros em Resina: Decoração diversa' preço='15,70'/>
                </div>

            </div>

            <Rodape />

        </div>
    )
}