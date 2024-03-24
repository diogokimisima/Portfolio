import './home.css';
import fotoBanner from '../../img/FotoBanner.jpg';
import iconeLinkedin from '../../img/icone-linkedin2.png';
import iconeGithub from '../../img/icone-github.png';
import iconeInsta from '../../img/icone-insta.png';

export default function Home() {
    return (
        <main className='limitar-secao'>
            <div id='home' className='secao-home'>
                <div className='descricao-home'>
                    <span className='span-desc'>Software Developer</span>
                    <h1>Diogo Kimisima</h1>
                    <span className='span'>| Front-End Developer</span>
                    <p>Olá, seja bem vindo(a)! Prepadado(a) para uma experiência incrível? Prazer, sou desenvolvedor web. Fique a vontade para conhecer melhor o meu trabalho.</p>

                    <div className='secao-link'>
                        <a className='link link-baixarCV' href="curriculo.pdf" download>Baixar CV</a>
                        <a className='link link-meus-projetos' href="https://www.linkedin.com/in/diogo-kimisima/" target='blank' >Meus Projetos</a>
                    </div>

                    <div className='secao-redes'>
                        <p>Minhas redes: </p>
                        <div className='secao-minhas-redes'>
                            <a href="https://www.linkedin.com/in/diogo-kimisima/" className='link-social' target='blank'><img src={iconeLinkedin} alt="linkedin" /></a>
                            <a href="https://www.linkedin.com/in/diogo-kimisima/" className='link-social' target='blank'><img src={iconeGithub} alt="github" /></a>
                            <a href="https://www.instagram.com/diogokimisima/" className='link-social' target='blank'><img src={iconeInsta} alt="instagram" /></a>
                        </div>
                    </div>

                </div>
                <div className='banner-home'>
                    <img src={fotoBanner} alt="imagem" />

                </div>
            </div>

        </main>
    )
}