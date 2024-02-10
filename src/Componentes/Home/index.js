import './home.css';
import fotoBanner from '../../img/FotoBanner.jpg';
import iconeCurriculo from '../../img/icone-curriculo.jpg';
import iconePerfil from '../../img/icone-linkedin.png';

export default function Home() {
    return (
        <section className='limitar-secao'>
            <div className='secao-home'>
                <div className='descricao-home'>
                    <h1>Seja bem vindo!</h1>
                    <h2>Meu nome é Diogo</h2>
                    <span className='span'>| Front-End Developer</span>
                    <div className='secao-link'>
                        <a className='link' href="/" ><img src={iconeCurriculo} alt="curriculo"/>Currículo</a>
                        <a className='link' href="https://www.linkedin.com/in/diogo-kimisima/" target='blank' ><img src={iconePerfil} alt="perfil"/>Meu Perfil</a>
                    </div>
                    
                </div>
                <div className='banner-home'>
                    <img src={fotoBanner} alt="imagem"/>

                </div>
            </div>

        </section>
    )
}