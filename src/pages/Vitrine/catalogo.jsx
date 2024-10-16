import './catalogo.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Header/cabecalho.jsx';
import Rodape from '../../components/Body/rodape.jsx';

export default function Vitrine() {
    return (
        <div className='vitrine-catalogo'>

            <Cabecalho />

            <Rodape />

        </div>
    )
}