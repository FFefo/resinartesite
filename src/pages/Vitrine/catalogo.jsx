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

                <p className='sub-titulo'>CATÁLOGO</p>

                <div className='vt'>

                    <div className='chaveiros'>

                        <p className='categorias'> CHAVEIROS: </p>

                        <div className='produtos'>

                            <h1>◀  </h1>

                            <Produto imagem='/assets/images/produto1vitrine.jpg' alt='produto1' descrição='Chaveiros em Resina: Decoração diversa' preço='15,70' />

                            <Produto imagem='/assets/images/chaveirodois.jpg' alt='produto2' descrição='Chaveiros temático de passáros' preço='15,00' />

                            <Produto imagem='/assets/images/chaveirotres.jpg' alt='produto3' descrição='Chaveiros com iniciais, correia dourada' preço='20,00' />

                            <Produto imagem='/assets/images/chaveiroquatro.jpg' alt='produto4' descrição='Chaveiros gêmeos de peixe, correia dourada' preço='25,50' />

                            <h1>▶  </h1>

                        </div>

                    </div>

                    <div className='canetas'>

                        <p className='categorias'> CANETAS: </p>

                        <div className='produtos'>

                            <h1>◀  </h1>

                            <Produto imagem='/assets/images/canetaum.jpg' alt='caneta1' descrição='Chaveiros em Resina: Decoração diversa' preço='15,70' />

                            <Produto imagem='/assets/images/canetadois.jpg' alt='caneta2' descrição='Chaveiros temático de passáros' preço='15,00' />

                            <Produto imagem='/assets/images/canetatres.jpg' alt='caneta3' descrição='Chaveiros com iniciais, correia dourada' preço='20,00' />

                            <Produto imagem='/assets/images/canetaquatro.jpg' alt='caneta4' descrição='Chaveiros gêmeos de peixe, correia dourada' preço='25,50' />

                            <h1>▶  </h1>

                        </div>

                    </div>

                </div>

            </div>

            <Rodape />

        </div>
    )
}