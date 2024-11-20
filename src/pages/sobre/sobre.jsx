import './sobre.scss';
import Cabecalho from '../../components/Header/cabecalho.jsx';
import Rodape from '../../components/Body/rodape.jsx';

export default function Sobre() {
  return (
    <div className='pagina-sobre'>

      <Cabecalho />

      <div className='int'>

        <div className='ttext'>

          <h2 className='tt'>Quer saber um pouco mais sobre meus serviços? Venha aqui!</h2>

          <p>Você já imaginou transformar momentos especiais em peças únicas e personalizadas? <br /> Meu trabalho com artesanato em resina traz essa magia para o seu dia a dia. Ofereço chaveiros personalizados, <br /> perfeitos para presentear ou dar aquele toque exclusivo ao seu estilo. Cada peça é feita à mão, com cuidado <br /> nos mínimos detalhes e a possibilidade de incluir cores, brilhos e até pequenas lembranças encapsuladas.

            <br />
            <br />

            Está organizando um evento especial? Posso criar lembrancinhas únicas que deixarão seus convidados encantados. <br /> Imagine oferecer um presente que vai além do material, trazendo consigo memórias e sentimentos.

            <br />
            <br />

            Além disso, aceito encomendas personalizadas para atender exatamente o que você precisa. <br /> Seja para datas comemorativas, eventos corporativos ou apenas um mimo especial para você, as possibilidades são infinitas.

            <br />
            <br />

            Se quiser saber mais, entre em contato e descubra como transformar ideias em arte. <br /> Estou pronta para criar algo que seja só seu!</p>

        </div>

        <h2 className='tt2'>Missão, Visão e Valores</h2>

      </div>

      <div className='mss'>

        <div className='cont'>

          <div className='tt3'>

            <h2 className='sbtt'>MISSÃO:</h2>

            <div className='sbtt2'>

              <p>
                Minha missão como artesã é transformar ideias em peças únicas, cheias de significado <br /> e personalidade. Trabalho com resina porque acredito no poder da arte de capturar momentos <br /> e emoções, traduzindo-os em produtos duráveis e encantadores. Cada peça que crio é feita com <br /> carinho, atenção aos detalhes e o desejo de levar beleza ao dia a dia das pessoas. Quero inspirar <br /> clientes a valorizarem o feito à mão, apreciando o tempo e dedicação que envolvem cada criação. <br /> Meu compromisso é oferecer produtos de qualidade que transmitam amor e autenticidade. <br /> Por meio do artesanato, busco compartilhar histórias e criar conexões. Mais do que vender, <br /> minha missão é encantar e emocionar.
              </p>

              <br />

            </div>

          </div>

          <img src="/assets/images/missao.png" alt="" />

        </div>

      </div>

      <div className='vss'>

        <div className='cont1'>

          <div className='tt4'>

            <h2 className='sbtt3'>VISÃO:</h2>

            <div className='sbtt4'>

              <p>
                Minha visão é levar o artesanato em resina a um novo patamar, onde cada peça seja vista como uma obra de arte que une criatividade e funcionalidade. Quero ser reconhecida por criar produtos únicos, que tragam beleza e significado ao dia a dia das pessoas. Acredito no potencial do feito à mão como uma forma de resgatar a valorização do trabalho artesanal em um mundo tão industrializado. Meu objetivo é expandir minha marca, alcançar novos públicos e inspirar outras pessoas a explorarem seu talento criativo. Desejo construir um negócio sustentável, que respeite o meio ambiente e promova a economia local. Mais do que um empreendimento, vejo meu trabalho como um canal para espalhar alegria, autenticidade e inspiração.
              </p>

            </div>

          </div>

          <img src="/assets/images/visao.png" alt="" />

        </div>

      </div>

      <div className='vlr'>

        <div className='cont2'>

          <div className='tt5'>

            <h2 className='sbtt4'>VALORES:</h2>

            <div className='sbtt5'>

              <p>
                Meus valores como artesã são a base de tudo o que faço e guiam cada peça que crio. Valorizo a autenticidade, garantindo que cada produto seja único e carregue um toque especial de originalidade. Tenho um compromisso com a qualidade, cuidando de cada detalhe para oferecer peças duráveis e bem-acabadas. A sustentabilidade é essencial no meu trabalho, buscando minimizar resíduos e utilizar materiais de forma consciente. Prezo pela transparência e pelo respeito com meus clientes, oferecendo um atendimento ético e atencioso. A criatividade é meu maior motor, sempre me desafiando a inovar e trazer algo novo. Por fim, acredito no poder da arte para conectar pessoas e transmitir sentimentos, e isso é o que me inspira todos os dias.
              </p>

            </div>

          </div>

          <img src="/assets/images/valores.png" alt="" />

        </div>

      </div>

      <div className='diferenciais'>

        <h2 className='tt5'>Porque adquirir os meus serviços?</h2>

        <div className='cont3'>

          <div className='container1'>

            <h2 className='sbtt6'>NhucoNhuco</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque corporis mollitia quasi vel dolorem earum fugit blanditiis, dolores libero neque, sequi unde est officiis ipsum quis fugiat error facilis?</p>

          </div>

          <div className='container2'>

            <h2 className='sbtt7'>Lerolero</h2>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex corporis pariatur placeat debitis obcaecati repellendus, quas rerum nisi quis quaerat iste nobis unde iure, voluptatum a vel eius error velit.</p>

          </div>

          <div className='container3'>

            <h2 className='sbtt8'>Nhoconhoco</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ex dolorem? Minus asperiores voluptates veritatis facere pariatur alias quidem debitis ea est, consectetur impedit neque perferendis nemo at, sapiente culpa?</p>

          </div>

        </div>

      </div>

      <Rodape />

    </div>
  )
}