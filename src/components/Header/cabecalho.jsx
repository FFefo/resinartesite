import './cabecalho.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
  return (
    <div className="cabecalho">

      <header>

        <img src="/assets/images/Logotipo.png" alt="" width="65px" />

        <div className='links'>

          <div className='links-1'>
            <div className='hm'>
              <Link to="/"> Início </Link>
            </div>

            <div className='vt'>
              <Link to="/vitrine"> Vitrine </Link>
            </div>

            <div className='cl'>
              <Link to="/colaboradores"> Colaboradores </Link>
            </div>
          </div>



          <div className='lg'>
            <Link to="/login"> Login </Link>
          </div>

        </div>

      </header>

    </div>
  );
}