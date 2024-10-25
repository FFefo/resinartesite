import './rodape.scss';

export default function Rodape() {
    return(
        <div className='rodape'>

        <div className='emp'>

          <div className='text'>
            <h1>Empresa</h1>
            <p>Somos uma empresa em formação que visa o crescimento de todas pessoas através de belos trabalhos feitos em resina. Há, mais ou menos, quatro anos que trabalhamos com resina.</p>
          </div>

        </div>

        <div className='cont'>

          <div className='text'>
            <h1>Entre em Contato</h1>
            <p>+55 11 95927-xxxx <br />
              +82 98898-xxxx <br />
              contato@resinarte.com <br />
              São Paulo - São Paulo</p>
          </div>

        </div>

        <div className='icones'>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>

      </div>
    )

}