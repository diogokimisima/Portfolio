import './skills.css';
import logoFront from  '../../img/logo-frontend1.png';
import logoBack from '../../img/logo-backend.png';
import logoFerramentas from '../../img/logo-ferramentas.png'



export default function Skills() {
    return (
        <section className='limitar-secao secao-skills'>
            <h4>Tecnologias</h4>
            <h2>Minhas Skills</h2>
            <div className='secao-card-skills'>

                <article className='card-skills'>
                    <div className='descricao-skills'>
                        <img className='img-descricao' src={logoFront} alt="icone-front"></img>
                        <h3 className='titulo-descricao'>Front-End</h3>
                        <p className='paragrafo-descricao'>HTML, CSS, Javascript, TypeScript, React.</p>
                    </div>
                </article>

                <article className='card-skills'>
                    <div className='descricao-skills'>
                        <img className='img-descricao'  src={logoBack} alt="icone-front"></img>
                        <h3 className='titulo-descricao'>Back-End</h3>
                        <p className='paragrafo-descricao'>Node.js, Next.js, MySQL, SQL.</p>
                    </div>
                </article>

                <article  className='card-skills'>
                    <div className='descricao-skills'>
                        <img className='img-descricao'  src={logoFerramentas} alt="icone-front"></img>
                        <h3 className='titulo-descricao'>Ferramentas/Plataformas</h3>
                        <p id='projetos' className='paragrafo-descricao'>Git, GitHub, Figma.</p>
                    </div>
                </article>
            </div>
        </section >
    )
}