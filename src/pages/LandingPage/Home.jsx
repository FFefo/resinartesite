import './Home.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Header/cabecalho.jsx';

export default function Landingpage() {
  return (
    <div className="landing-page">

      <Cabecalho/>

        <div className='introducao'>
          <p className='titulo'>ResinARTE</p>
          <p>A arte vai além dos princípios do homem <br/> pois ela transcende ao inexplicável!</p>
        </div>

        <div className='containers'>
          
          <div className='container01'>
            <p>Quem Sou?</p>
            <br />
            <p>Olá, meu nome é Daniela Patrícia, <br /> tenho 34 anos, sou divorciada e tenho <br /> um filho lindo de 11 anos. Por isso, <br /> sempre digo que “sou muito <br /> abençoada por Deus”. Tenho uma <br /> grande paixão por tudo que envolve <br /> arte e sou formada em pedagogia. <br /> Desde a infância, desenvolvi um gosto <br /> especial pelas artes manuais e sempre <br /> me destaquei em projetos artísticos da <br /> escola, especialmente em desenho e <br /> pintura.</p>
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
