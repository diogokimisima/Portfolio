import './home.css';
import fotoBanner from '../../img/FotoBanner.jpg';
import iconeCurriculo from '../../img/icone-curriculo.png';
import iconePerfil from '../../img/icone-linkedin.jpg';

export default function Home() {
    return (
        <section className='limitar-secao'>
            <div className='secao-home'>
                <div className='descricao-home'>
                    <h2>Olá, sou o Diogo!</h2>
                    <span className='span'>| Front-End Developer</span>
                    <p>Olá, seja bem vindo(a)! Prepadado(a) para uma experiência arrebatadora? Prazer, sou desenvolvedor Front-end. Fique a vontade para conhecer melhor o meu trabalho.</p>
                    <div className='secao-link'>
                        <a className='link' href="/" ><img src={iconeCurriculo} alt="curriculo"/>Baixar CV</a>
                        <a className='link' href="https://www.linkedin.com/in/diogo-kimisima/" target='blank' ><img src={iconePerfil} alt="perfil"/>Meu Perfil</a>
                    </div>
                    <div className='secao-redes'>
                        <p>Minhas redes: </p>
                        <div>
                            <a><img src="" alt="linkedin"/></a>
                            <a><img src="" alt="github"/></a>
                            <a><img src="" alt="instagram"/></a>
                        </div>
                    </div>
                    
                </div>
                <div className='banner-home'>
                    <img src={fotoBanner} alt="imagem"/>

                </div>
            </div>

        </section>
    )
}