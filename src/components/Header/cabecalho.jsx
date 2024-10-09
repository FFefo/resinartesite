import './cabecalho.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return (
      <div className="cabecalho">

        <header>

          <img src="/assets/images/circle.png" alt="" width="42px" />
  
          <div className='links'>
  
          <div className='vt'>
          <Link to="/vitrine"> Vitrine </Link>
          </div>
  
          <div className='cl'>
          <Link to="/colaboradores"> Colaboradores </Link>
          </div>
  
          <div className='lg'>
          <Link to="/login"> Login </Link>
          </div>
  
          </div>
  
        </header>

      </div>
    );
}