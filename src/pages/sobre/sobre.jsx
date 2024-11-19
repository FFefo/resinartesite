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

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi <br /> aperiam, id, deserunt asperiores porro amet provident, sapiente eveniet nulla <br /> fugiat architecto nesciunt non eius sequi illo fuga et? Inventore! Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Veritatis inventore corporis ab iure cupiditate id, explicabo <br /> provident a ratione nobis ducimus eius, sunt doloribus adipisci? Sunt, sint rem! <br /> Quaerat, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius, inventore omnis, <br /> dignissimos incidunt, id similique modi officia facere quae accusamus <br /> voluptatibus quasi cumque unde! Quasi eius autem labore est. Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Iste perferendis reiciendis dolorem ullam quia itaque dignissimos quos cumque <br /> alias officia, expedita in quidem error omnis, inventore impedit a autem! Dicta. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint repudiandae neque ea <br /> consectetur tenetur esse vitae molestias ullam? Nulla eum odit iusto commodi architecto! <br /> Labore placeat perspiciatis voluptatum suscipit? Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Perferendis et earum, sint, deserunt recusandae excepturi explicabo <br /> reprehenderit cum, voluptatem est nulla incidunt esse laudantium <br /> quibusdam enim illo laborum beatae commodi.</p>

        </div>

        <h2 className='tt2'>Missão, Visão e Valores</h2>

      </div>

      <div className='mss'>

        <div className='cont'>

          <div className='tt3'>

            <h2 className='sbtt'>MISSÃO:</h2>

            <div className='sbtt2'>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nobis <br /> quis laborum tempora enim unde fuga ut odit natus voluptate dolor rerum qui eum ex <br /> pariatur amet nulla deserunt beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatibus labore consequuntur accusamus maxime error, nulla at saepe minus, odit, officia <br /> distinctio velit beatae? Suscipit molestiae omnis, quo ab perferendis animi! Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. A animi temporibus eos optio! Distinctio quas <br /> ipsam odit! Doloremque iusto tenetur aspernatur aliquam. <br /> Corrupti incidunt tempora, labore accusantium quis magnam commodi.
              </p>

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nobis <br /> quis laborum tempora enim unde fuga ut odit natus voluptate dolor rerum qui eum ex <br /> pariatur amet nulla deserunt beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatibus labore consequuntur accusamus maxime error, nulla at saepe minus, odit, officia <br /> distinctio velit beatae? Suscipit molestiae omnis, quo ab perferendis animi! Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. A animi temporibus eos optio! Distinctio quas <br /> ipsam odit! Doloremque iusto tenetur aspernatur aliquam. <br /> Corrupti incidunt tempora, labore accusantium quis magnam commodi.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nobis <br /> quis laborum tempora enim unde fuga ut odit natus voluptate dolor rerum qui eum ex <br /> pariatur amet nulla deserunt beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatibus labore consequuntur accusamus maxime error, nulla at saepe minus, odit, officia <br /> distinctio velit beatae? Suscipit molestiae omnis, quo ab perferendis animi! Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. A animi temporibus eos optio! Distinctio quas <br /> ipsam odit! Doloremque iusto tenetur aspernatur aliquam. <br /> Corrupti incidunt tempora, labore accusantium quis magnam commodi.
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