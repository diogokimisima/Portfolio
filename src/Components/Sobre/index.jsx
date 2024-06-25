import './sobre.css';

import imagemSobre from '../../img/imagem-sobre1.png'

export default function Sobre() {
    return (
        <section className='limitar-secao secao-sobre'>
            <img src={imagemSobre} alt="imagem-sobre" />
            <article className="sobre-descricao">
                <h4>Quem sou eu?</h4>
                <h2>Diogo kimisima,</h2>
                <h2>desenvolvedor Full-Stack.</h2>
                <p id='skills'>Estou atualmente cursando Análise em Desenvolvimento de Sistemas para aprimorar minha habilidade técnica. Constantemente busco aprimorar minhas habilidades através do desenvolvimento de projetos pessoais, visando expandir meu conhecimento e experiência. Atuo como desenvolvedor Web Full-stack na Trovata - Catálogo Digital</p>
                {/* <p id='skills'>Cursando Tecnologia em Analise de desenvolvimento de Sistemas. Sou Desenvolvedor Web há 2 anos, sendo 1 ano com ReactJS. Nesse tempo aprendi que não basta ser excelente na codificação, também é necessário ser alguém que possa compartilhar conhecimento com a equipe, pois crescer em conjunto é a forma mais eficiente de melhorar a capacidade de um projeto, tornando a entrega contínua uma realidade para qualquer equipe.</p>
                <p>Para mim, um bom código, significa código que pode ser facilmente lido, entendido, mantido e dimensionado por desenvolvedores de qualquer nível.</p> */}
            </article>
        </section>
    )
}