import { useState } from 'react';
import './inserir.scss';
import { Link } from 'react-router-dom';

export default function Inserir() {
    
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState(null);

    return (
        <div className='pagina-inserir'>
            <div className='caixinha'>
                <label htmlFor="Nome"></label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>

                <label htmlFor="Descrição"></label>
                <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)}/>

                <label htmlFor="Categoria"></label>
                <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>

                <label htmlFor="Preço"></label>
                <input type="text" value={preco} onChange={e => setPreco(e.target.value)}/>

                <label htmlFor="imagem"></label>
                <input type="image" value={imagem} onChange={e => setImagem(e.target.value)}/>
            </div>
        </div>
    )
}