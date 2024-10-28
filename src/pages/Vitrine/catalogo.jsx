import './catalogo.scss';
import Cabecalho from '../../components/Header/cabecalho.jsx';
import Rodape from '../../components/Body/rodape.jsx';
import Produto from '../../components/Produto/produto.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import banner1img1 from '../../imgs/bannerresinadois.png';
import banner2img2 from '../../imgs/bannerresinatres.png';
import 'swiper/swiper-bundle.css';

export default function Vitrine() {

    const banners = [
        {id: 1, img: banner1img1},
        {id: 2, img: banner2img2}
    ]

    return (
        <div className='vitrine-catalogo'>

            <Cabecalho />

            <div className='carrossel'>

                <Swiper className='crss'
                slidesPerView={1}
                pagination={{clickable: true}}
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loop={true}>

                    {banners.map((item) => (
                        <SwiperSlide className='item-banner' key={item.id}>
                            <img src={item.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>

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

                            <Produto imagem='/assets/images/canetaum.jpg' alt='caneta1' descrição='Canetas com pingente de patinha' preço='7,49' />

                            <Produto imagem='/assets/images/canetadois.jpg' alt='caneta2' descrição='Canetas com glitter temáticas de borboleta' preço='8,00' />

                            <Produto imagem='/assets/images/canetatres.jpg' alt='caneta3' descrição='Canetas personalizadas para presente' preço='12,35' />

                            <Produto imagem='/assets/images/canetaquatro.jpg' alt='caneta4' descrição='Canetas em resina florais' preço='6,59' />

                            <h1>▶  </h1>

                        </div>

                    </div>

                    <div className='acessorios'>

                        <p className='categorias'> ACESSÓRIOS: </p>

                        <div className='produtos'>

                            <h1>◀  </h1>

                            <Produto imagem='/assets/images/acessum.jpg' alt='acess1' descrição='Anéis de casal florais em resina' preço='9,30' />

                            <Produto imagem='/assets/images/acessdois.jpg' alt='acessdois' descrição='Braceletes temáticos de plantas' preço='12,45' />

                            <Produto imagem='/assets/images/acesstres.jpg' alt='acesstres' descrição='Colar floral em resina, correia prata' preço='10,00' />

                            <Produto imagem='/assets/images/acessquatro.jpg' alt='produto4' descrição='Conjunto de anéis em resina, flores pretas' preço='9,00' />

                            <h1>▶  </h1>

                        </div>

                    </div>

                </div>

            </div>

            <Rodape />

        </div>
    )
}