import './consulta.scss';
import Cabecalho from '../../components/Header/cabecalho';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Consulta() {

    const [produto, setProduto] = useState('');

    return (
        <div className='pagina-consulta'>
            <Cabecalho />

            <Link to='/admin' className='voltar'><i className="fa-solid fa-arrow-left"></i>  Voltar à pagina de admin</Link>

            <button>Consultar Produtos</button>

            <table>
                <thead>
                    <tr>
                        <th className='id'>Id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {/* {produto.map(item =>
                    <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.descricao}</td>
                            <td>{item.categoria}</td>
                            <td>{item.preco}</td>
                    </tr>
                   )} */}

                    <tr>
                        <td>id</td>
                        <td>nome</td>
                        <td>descricao</td>
                        <td>categoria</td>
                        <td>preco</td>
                        <i className="fa-solid fa-trash td"></i>
                        <i class="fa-solid fa-pen td"></i>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}