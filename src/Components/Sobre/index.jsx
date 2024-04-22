import './sobre.css';

import imagemSobre from '../../img/imagem-sobre1.png'

export default function Sobre() {
    return (
        <section   className='limitar-secao secao-sobre'>
          <img src={imagemSobre} alt="imagem-sobre"/>
          <article className="sobre-descricao">
                        <h4>Quem sou eu?</h4>
                        <h2>Diogo kimisima,</h2>
                        <h2>desenvolvedor Front-End.</h2>
                        <p id='skills'>Estou atualmente cursando Análise em Desenvolvimento de Sistemas para aprimorar minha habilidade técnica. Constantemente busco aprimorar minhas habilidades através do desenvolvimento de projetos pessoais, visando expandir meu conhecimento e experiência. Atuo também como freelancer, oferecendo serviços de desenvolvimento front-end para diversas empresas e clientes.</p>
                    </article>
        </section>
    )
}