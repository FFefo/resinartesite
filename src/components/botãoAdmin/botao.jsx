import './botao.scss';
import { Link } from 'react-router-dom';

export default function BotaoAdmin(props) {

    return (
        <div className='comp-botao'>
            <div className='bola'>
                <img src={props.imagem} alt="" />
            </div>
            <div className='texto'>
            <Link to={props.link}>{props.texto}</Link>
            </div>
        </div>
    )
}