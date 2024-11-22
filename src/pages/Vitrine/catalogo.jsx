import './catalogo.scss';
import Cabecalho from '../../components/Header/cabecalho.jsx';
import Rodape from '../../components/Body/rodape.jsx';
import Produto from '../../components/Produto/produto.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import banner1img1 from '../../imgs/01banner.png';
import banner2img2 from '../../imgs/02banner.png';
import 'swiper/swiper-bundle.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../services/axios.js';

export default function Vitrine() {

    const [listaChaveiros, setListaChaveiros] = useState([]);
    const [listaCanetas, setListaCanetas] = useState([]);
    const [listaAcessorios, setListaAcessorios] = useState([]);
    const [classe, setClasse] = useState('');
    const [classe2, setClasse2] = useState('');
    const [classe3, setClasse3] = useState('');

    async function VitrineChaveiros() {

        const url = `http://${api}/produto/Chaveiros`
        const resp = await axios.get(url)
        let tamanho = resp.data.length

        let produtos = []

        for (let i = 0; i < tamanho; i++) {

            let dados = resp.data[i]
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

        const url = `http://${api}/produto/Canetas`
        const resp = await axios.get(url)
        let tamanho = resp.data.length

        let produtos = []

        for (let i = 0; i < tamanho; i++) {

            let dados = resp.data[i]
            let produto = {
                imagem: dados.imagem,
                alt: 'foto',
                descricao: dados.descricao,
                preco: dados.preco.toFixed(2)
            }
            produtos[i] = produto

            setListaCanetas([...produtos])

        }

    }

    async function VitrineAcessorios() {
        // pegar lista de registros

        const url = `http://${api}/produto/Acessorios`
        const resp = await axios.get(url)
        let tamanho = resp.data.length

        let produtos = []

        for (let i = 0; i < tamanho; i++) {

            let dados = resp.data[i]
            let produto = {
                imagem: dados.imagem,
                alt: 'foto',
                descricao: dados.descricao,
                preco: dados.preco.toFixed(2)
            }
            produtos[i] = produto

            setListaAcessorios([...produtos])

        }

    }

    const banners = [
        { id: 1, img: banner1img1 },
        { id: 2, img: banner2img2 }
    ]

    function apertouBotao(chav, cant, acss) {
        if (chav.length > 4) {
            setClasse('setaLeft')
        }
        else if(cant.length > 4){
            setClasse2('setaLeft')
        }
        else if(acss.length > 4){
            setClasse3('setaLeft')
        }
        else {
            setClasse('semClasse')
        }
    }
    useEffect(() => {
        apertouBotao(listaChaveiros, listaCanetas, listaAcessorios)
    }, [listaChaveiros, listaCanetas, listaAcessorios])

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

                            <h1 className={classe}>◀  </h1>
                            {listaChaveiros.map(item =>
                                <Produto
                                    imagem={item.imagem}
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

                            <h1  className={classe2}>◀  </h1>

                            {listaCanetas.map(item =>
                                <Produto
                                    imagem={item.imagem}
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

                            <h1  className={classe3}>◀  </h1>

                            {listaAcessorios.map(item =>
                                <Produto
                                    imagem={item.imagem}
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