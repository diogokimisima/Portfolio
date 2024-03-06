import './sobre.css';
import imagemSobre from '../../img/imagem-sobre1.png'

export default function Sobre() {
    return (
        <section className='limitar-secao secao-sobre'>
          <img src={imagemSobre} alt="imagem-sobre"/>
          <article className="sobre-descricao">
                        <h4>Quem sou eu?</h4>
                        <h2>Diogo kimisima,</h2>
                        <h2>desenvolvedor Front-End.</h2>
                        <p id="sobre">Sou um desenvolvedor front-end. Minha jornada na programação começou há 2 anos, mas desde então tenho trabalhado diligentemente para aprimorar minhas habilidades e conhecimentos. Estou familiarizado com bibliotecas e frameworks populares, como React, que me permitiram desenvolver projetos mais complexos e dinâmicos e atuou também como freelancer.</p>
                    </article>
        </section>
    )
}