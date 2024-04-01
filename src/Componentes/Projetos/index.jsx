import './projeto.css';
import printPastelaria from '../../img/pastelariakina.jpg';
import printCardapio from '../../img/restaurante.jpg';
import printAgencia from '../../img/agencia.jpg';
import iconeGithub from '../../img/icone-github.png'


export default function Projeto() {
    return (
        <section id='projetos' className='limitar-secao secao-projetos'>
            <h4 className='titulo-projeto'>Hora de navegar em</h4>
            <h2 className='subtitulo-projeto'>Meus projetos</h2>
            <div className='secao-card-projetos'>
                <div className='card-projetos'>
                    <img className='print-card' src={printPastelaria} alt="foto-projeto1" />
                    <div className='descricao-projeto'>
                        <h3 className='subtitulo-descricao'>Pastelaria Kina</h3>
                        <p className='paragrafo-descricao-projetos'>O site da Pastelaria tem um design moderno e responsivo, o site oferece uma experiência imersiva aos usuários, tornando a exploração do menu e a descoberta sobre o restaurante algo agradável e intuitivo.</p>
                        <div className='secao-tecnologias'>
                            <p className='tecnologias'>HTML</p>
                            <p className='tecnologias'>CSS</p>
                            <p className='tecnologias'>JS</p>
                            <p className='tecnologias'>REACT.JS</p>
                        </div>
                        <nav className='link-projetos'>
                            <a className='link-hospedagem' href='/' >Ver projeto</a>
                            <a href='/' ><img className='icone-github' src={iconeGithub} alt="iconegithub" /></a>
                        </nav>
                    </div>
                </div>

                <div className='card-projetos'>
                    <img className='print-card' src={printAgencia} alt="foto-projeto2" />
                    <div className='descricao-projeto'>
                        <h3 className='subtitulo-descricao'>Agencia de Branding</h3>
                        <p className='paragrafo-descricao-projetos'>O site da Agência de Branding oferece uma navegação fluida e intuitiva através do seu portfólio de trabalhos, permitindo aos usuários explorarem os diversos projetos de branding com facilidade e prazer.</p>
                        <div className='secao-tecnologias'>
                            <p className='tecnologias'>HTML</p>
                            <p className='tecnologias'>CSS</p>
                            <p className='tecnologias'>JS</p>
                            <p className='tecnologias'>REACT.JS</p>
                        </div>
                        <nav className='link-projetos'>
                            <a className='link-hospedagem' href='/' >Ver projeto</a>
                            <a href='/' ><img className='icone-github' src={iconeGithub} alt="iconegithub" /></a>
                        </nav>
                    </div>
                </div>

                <div className='card-projetos'>
                    <img className='print-card' src={printCardapio} alt="foto-projeto2" />
                    <div className='descricao-projeto'>
                        <h3 className='subtitulo-descricao'>Cardapio Restaurante</h3>
                        <p className='paragrafo-descricao-projetos'>O site de cardápio oferece uma experiência imersiva e intuitiva, com design moderno e responsivo, tornando a exploração do menu do cardapio mais agradável para os usuários e clientes.</p>
                        <div className='secao-tecnologias'>
                            <p className='tecnologias'>HTML</p>
                            <p className='tecnologias'>CSS</p>
                            <p className='tecnologias'>JS</p>
                            <p className='tecnologias'>REACT.JS</p>  
                        </div>
                        <nav className='link-projetos'>
                            <a className='link-hospedagem' href='/' >Ver projeto</a>
                            <a className='link-codigo' href='/' ><img className='icone-github' src={iconeGithub} alt="iconegithub" /></a>
                        </nav>
                    </div>
                </div>

            </div>
        </section>
    )
}