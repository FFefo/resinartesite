import './catalogo.scss';
import Cabecalho from '../../components/Header/cabecalho.jsx';
import Rodape from '../../components/Body/rodape.jsx';
import Produto from '../../components/Produto/produto.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import banner1img1 from '../../imgs/bannerresinadois.png';
import banner2img2 from '../../imgs/bannerresinatres.png';
import 'swiper/swiper-bundle.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Vitrine() {

    const [listaChaveiros, setListaChaveiros] = useState([]);
    const [listaCanetas, setListaCanetas] = useState([]);
    const [listaAcessorios, setListaAcessorios] = useState([]);

    async function VitrineChaveiros() {
        // pegar lista de registros

        const url = `http://4.172.207.208:5027/produto/Chaveiros`
        const resp = await axios.get(url)
        let tamanho = resp.data.length

        let produtos = []

        for (let i = 0; i < tamanho; i++) {
            let url = `http://4.172.207.208:5027/produtos/${i + 1}/Chaveiros`
            let resp = await axios.get(url)

            let dados = resp.data
            let produto = {
                imagem: dados.imagem,
                alt: 'foto',
                descricao: dados.descricao,
                preco: dados.preco.toFixed(2)
            }
            produtos[i] = produto

            setListaChaveiros([...produtos])

        }

    }

    async function VitrineCanetas() {
        // pegar lista de registros

        const url = `http://4.172.207.208:5027/produto/Canetas`
        const resp = await axios.get(url)
        let tamanho = resp.data.length

        let produtos = []

        for (let i = 4, i2 = 0; i < tamanho + 4; i++, i2++) {
            let url = `http://4.172.207.208:5027/produtos/${i + 1}/Canetas`
            let resp = await axios.get(url)

            let dados = resp.data
            let produto = {
                imagem: dados.imagem,
                alt: 'foto',
                descricao: dados.descricao,
                preco: dados.preco.toFixed(2)
            }

            produtos[i2] = produto
            setListaCanetas([...produtos])

        }

    }

    async function VitrineAcessorios() {
        // pegar lista de registros

        const url = `http://4.172.207.208:5027/produto/Acessorios`
        const resp = await axios.get(url)
        let tamanho = resp.data.length

        let produtos = []

        for (let i = 8, i2 = 0; i < tamanho + 8; i++, i2++) {
            let url = `http://4.172.207.208:5027/produtos/${i + 1}/Acessorios`
            let resp = await axios.get(url)

            let dados = resp.data
            let produto = {
                imagem: dados.imagem,
                alt: 'foto',
                descricao: dados.descricao,
                preco: dados.preco.toFixed(2)
            }
            produtos[i2] = produto

            setListaAcessorios([...produtos])

        }

    }

    const banners = [
        { id: 1, img: banner1img1 },
        { id: 2, img: banner2img2 }
    ]

    useEffect(() => {
        VitrineChaveiros()
        VitrineCanetas()
        VitrineAcessorios()
    }, [])

    return (
        <div className='vitrine-catalogo'>

            <Cabecalho />

            <div className='carrossel'>

                <Swiper className='crss'
                    slidesPerView={1}
                    pagination={{ clickable: true }}
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

                            {listaChaveiros.map(item =>
                                <Produto
                                    imagem={item.imagem}
                                    alt={item.alt}
                                    descrição={item.descricao}
                                    preço={item.preco}
                                />
                            )}

                            <h1>▶  </h1>

                        </div>

                    </div>

                    <div className='canetas'>

                        <p className='categorias'> CANETAS: </p>

                        <div className='produtos'>

                            <h1>◀  </h1>

                            {listaCanetas.map(item =>
                                <Produto
                                    imagem={item.imagem}
                                    alt={item.alt}
                                    descrição={item.descricao}
                                    preço={item.preco}
                                />
                            )}

                            <h1>▶  </h1>

                        </div>

                    </div>

                    <div className='acessorios'>

                        <p className='categorias'> ACESSÓRIOS: </p>

                        <div className='produtos'>

                            <h1>◀  </h1>

                            {listaAcessorios.map(item =>
                                <Produto
                                    imagem={item.imagem}
                                    alt={item.alt}
                                    descrição={item.descricao}
                                    preço={item.preco}
                                />
                            )}

                            <h1>▶  </h1>

                        </div>

                    </div>

                </div>

            </div>

            <Rodape />

        </div>
    )
}