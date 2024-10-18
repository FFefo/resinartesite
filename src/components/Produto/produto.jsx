import './produto.scss'

export default function Produto(props) {
    return (
        <div className='comp-produto'>
            <img src={props.imagem} alt={props.alt} />
            <p className='desc'>{props.descrição}</p>
            <h2>R${props.preço}</h2>
        </div>
    )
}