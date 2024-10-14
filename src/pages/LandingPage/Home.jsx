import './Home.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Header/cabecalho.jsx';
import Vestido from './autônoma_vestido.png'

export default function Landingpage() {
  return (
    <div className="landing-page">

      <Cabecalho />

      <div className='introducao'>
        <p className='titulo'>ResinARTE</p>
        <p>A arte vai além dos princípios do homem <br /> pois ela transcende ao inexplicável!</p>
      </div>

      <div className='containers'>

        <div className='container01'>
          <div className='texto'>

            <h1>Quem sou?</h1>
            <p>Olá, meu nome é Daniela Patrícia, tenho 34 anos, sou divorciada e tenho um filho lindo de 11 anos. Por isso, sempre digo que “sou muito abençoada por Deus”. Tenho uma grande paixão por tudo que envolve arte e sou formada em pedagogia. Desde a infância, desenvolvi um gosto especial pelas artes manuais e sempre me destaquei em projetos artísticos da escola, especialmente em desenho e pintura.</p>

          </div>

          <img src={Vestido} alt="a"/>
        </div>

        <div className='container02'>
        </div>

        <div className='container03'>
        </div>

      </div>

      <div className='rodape'>

      </div>

    </div>

  );
}
