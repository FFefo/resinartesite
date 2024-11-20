import './Home.scss';
import Cabecalho from '../../components/Header/cabecalho.jsx';
import Rodape from '../../components/Body/rodape.jsx';

export default function Landingpage() {
  return (
    <div className="landing-page">

      <Cabecalho />

      <div className='introducao'>
        <div className='texto-intro'>

          <p className='titulo'>ResinARTE</p>
          <p>A arte vai além dos princípios do homem <br /> pois ela transcende ao inexplicável!</p>

          <h2>Descubra um pouco sobre mim</h2>
          <i className="fa-solid fa-arrow-down-long"></i>

        </div>
      </div>

      <div className='gradiente'>

      </div>

      <div className='containers'>

        <div className='container01'>
          <div className='texto'>

            <h1>Quem sou?</h1>
            <p>Olá, meu nome é Daniela Patrícia, tenho 34 anos, sou divorciada e tenho um filho lindo de 11 anos. Por isso, sempre digo que “sou muito abençoada por Deus”. Tenho uma grande paixão por tudo que envolve arte e sou formada em pedagogia. Desde a infância, desenvolvi um gosto especial pelas artes manuais e sempre me destaquei em projetos artísticos da escola, especialmente em desenho e pintura.</p>

          </div>

          <img src='/assets/images/autônoma_vestido.png' alt="a" />
        </div>

        <div className='container02'>
          <img src="/assets/images/working.jpg" alt="" />

          <div className='texto'>

            <h1>Como é Meu Trabalho?</h1>
            <p>É fundamental para mim incentivar a criatividade por meio de visitas a exposições e feiras de arte, além de acompanhar lives e até mesmo explorar conteúdos nas redes sociais como Instagram, Facebook e YouTube. Para mim, meu trabalho me da gosto de fazê-lo, pois a arte me incentiva.</p>

          </div>

        </div>

        <div className='container03'>
          <div className='texto'>

            <h1>Materiais:</h1>
            <ul>
              <li>Resina Époxi</li>
              <li>Pigmento</li>
              <li>Moldes</li>
              <li>Folha adesivo vinil transparente</li>
              <li>Glitter focado</li>
              <li>Enchimento (coração, borboleta, fruleta)</li>
              <li>Folha de ouro, prata, bronze</li>
              <li>Pitao (mini parafuso)</li>
              <li>Argola</li>
              <li>Flores desidratadas</li>
              <li>Tassel</li>
            </ul>

          </div>

          <img src="/assets/images/ferramentas.jpg" alt="" />
        </div>

      </div>

      <div className='gradientee'>

      </div>

      <Rodape />

    </div>

  );
}
