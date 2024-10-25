import './botao.scss';

export default function BotaoAdmin(props) {

    return (
        <div className='comp-botao'>
            <div className='bola'>
                <img src={props.imagem} alt="" />
            </div>
            <div className='texto'>
            <p>{props.texto}</p>
            </div>
        </div>
    )
}